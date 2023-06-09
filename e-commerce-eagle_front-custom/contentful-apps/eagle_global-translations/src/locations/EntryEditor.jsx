/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import {
  MenuItem,
  Accordion,
  EntryCard,
  Stack,
  Note,
  Button,
  ButtonGroup,
  IconButton,
  Tooltip,
  Spinner,
  Text,
} from '@contentful/f36-components';
import { LockIcon, ClockIcon, EnvironmentIcon } from '@contentful/f36-icons';
import { useSDK } from '@contentful/react-apps-toolkit';
import { ModalAddGroup } from '../components/ModalAddGroup';
import { ModalRemoveGroup } from '../components/ModalRemoveGroup';
import { ModalAddGroupItem } from '../components/ModalAddGroupItem';
import { ModalEditGroupItem } from '../components/ModalEditGroupItem';
import { ModalRemoveGroupItem } from '../components/ModalRemoveGroupItem';
import { SingleLocaleWarning } from '../components/SingleLocaleWarning';

import styles from '../styles';

const TRANSLATION_FIELD_ID = 'translations';
const USER_FIELD_ID = 'editedBy';

const Entry = () => {
  const sdk = useSDK();
  const user = sdk.user;
  const locales = sdk.locales;
  const contentField = sdk.entry.fields[TRANSLATION_FIELD_ID];
  const editedByField = sdk.entry.fields[USER_FIELD_ID];
  const [singleLangOnly, setSingleLangOnly] = useState(false);
  const [translations, setTranslations] = useState();
  const [activeLocale, setActiveLocale] = useState();
  const [isLocked, setIsLocked] = useState(true);
  const [isLockedByCurrentUser, setIsLockedByCurrentUser] = useState(false);
  const [isEditedBy, setIsEditedBy] = useState(editedByField.getValue());
  const [translationsGroups, setTranslationsGroups] = useState([]);
  const [canRender, setCanRender] = useState(false);

  const getLocalizedField = (locale) => {
    return contentField.getForLocale(locale);
  };

  const updateFromFallback = (override = false) => {
    const fallbackLocale = locales.fallbacks[activeLocale];
    const currentValue = getLocalizedField(activeLocale)?.getValue();
    const fallbackLocaleValue = getLocalizedField(
      fallbackLocale || contentField._defaultLocale
    )?.getValue() || {
      global: {},
    };
    const defaultLocaleValue = getLocalizedField(
      contentField._defaultLocale
    )?.getValue() || {
      global: {},
    };

    const defaultLocaleValueKeys = Object.keys(defaultLocaleValue);
    const newValue = currentValue || defaultLocaleValue;

    defaultLocaleValueKeys.map((groupKey) => {
      if (!newValue[groupKey]) {
        newValue[groupKey] = {};
      }

      const groupItemKeys = Object.keys(defaultLocaleValue[groupKey]);

      groupItemKeys.map((groupItemKey) => {
        if (!newValue[groupKey][groupItemKey] || override) {
          newValue[groupKey][groupItemKey] = (fallbackLocaleValue[groupKey] ||
            defaultLocaleValue[groupKey])[groupItemKey];
        }

        return newValue[groupKey][groupItemKey];
      });

      return newValue[groupKey];
    });

    setTranslations(newValue);
  };

  useEffect(() => {
    if (
      isEditedBy === user.email ||
      isEditedBy === '' ||
      isEditedBy === undefined
    ) {
      setIsLocked(false);
    } else {
      console.warn('Editing isLocked by ', isEditedBy);
    }
  }, [isEditedBy]);

  useEffect(() => {
    function localeSettingsHandler(data) {
      const { mode, focused } = data;

      if (mode === 'single') {
        console.warn('Locale: ' + focused);
        setSingleLangOnly(false);
        setActiveLocale(focused);
      } else if (mode === 'multi') {
        console.warn('Locale: In Multi-mode');
        setSingleLangOnly(true);
      } else {
        setActiveLocale(contentField._defaultLocale);
      }
    }

    const detach = sdk.editor.onLocaleSettingsChanged(localeSettingsHandler);

    return () => detach();
  }, [sdk.editor]);

  useEffect(() => {
    if ((!isLocked || isLockedByCurrentUser) && activeLocale) {
      updateFromFallback();
    } else if (activeLocale) {
      const currentTranslationsValue = getLocalizedField(
        activeLocale
      )?.getValue() ||
        getLocalizedField(contentField._defaultLocale)?.getValue() || {
          global: {},
        };

      setTranslationsGroups(Object.keys(currentTranslationsValue));
    }
  }, [activeLocale]);

  useEffect(() => {
    if (translations && !isLocked && activeLocale) {
      getLocalizedField(activeLocale)?.setValue(translations);
      setTranslationsGroups(Object.keys(translations));
    }
  }, [translations]);

  const [showDeleteItem, setShowDeleteItem] = useState(false);
  const [deleteData, setDeleteData] = useState(null);
  const [showEditItem, setShowEditItem] = useState(false);
  const [editData, setEditData] = useState(null);

  const handleToggleLock = (lock = false, isAdmin = false) => {
    if (lock) {
      editedByField.setValue(user.email);
      setIsEditedBy(user.email);
      setIsLockedByCurrentUser(true);
    } else {
      editedByField.setValue('');
      setIsLockedByCurrentUser(false);
    }

    sdk.entry.save();

    if (isAdmin) {
      sdk.notifier.warning('Reload your page to view changes.');
    }
  };

  const handleForceUpdate = () => {
    if (!isLocked) {
      updateFromFallback(true);
    }
  };

  const handleDeleteItem = (groupName, translationKey) => {
    return () => {
      setDeleteData({
        groupName,
        translationKey,
      });
      setShowDeleteItem(true);
    };
  };

  const handleEditItem = (groupName, translationKey) => {
    return () => {
      setEditData({
        groupName,
        translationKey,
      });
      setShowEditItem(true);
    };
  };

  useEffect(() => {
    setTimeout(() => {
      setCanRender(true);
    }, sdk?.parameters?.instance?.delayedRender || 300);
  }, []);

  return (
    <div className={styles.editor}>
      {canRender && (
        <>
          {isLocked && (
            <Note variant="negative">
              Currently being edited by {isEditedBy}, please wait!
            </Note>
          )}

          {!singleLangOnly && (
            <>
              <Stack
                justifyContent="space-between"
                flexDirection="row"
                alignItems="flex-end"
                className={styles.dangerousActions}
              >
                {!isLocked && (
                  <Tooltip
                    placement="top"
                    id="tooltip-lock-editing"
                    content="Lock others from editing."
                  >
                    <ButtonGroup>
                      <Button
                        size="medium"
                        onClick={() => handleToggleLock(true)}
                      >
                        Lock Editing
                      </Button>
                      <IconButton
                        variant="negative"
                        size="small"
                        aria-label="Lock Editing"
                        icon={<LockIcon />}
                      />
                    </ButtonGroup>
                  </Tooltip>
                )}
                {(isLockedByCurrentUser ||
                  (isLocked && user?.spaceMembership?.admin)) && (
                  <Tooltip
                    placement="top"
                    id="tooltip-unlock-editing"
                    content="Unlock Editing (others can edit)."
                  >
                    <ButtonGroup>
                      <Button
                        size="medium"
                        onClick={() =>
                          handleToggleLock(false, user?.spaceMembership?.admin)
                        }
                      >
                        Finish Editing
                      </Button>
                      <IconButton
                        variant="positive"
                        size="small"
                        aria-label="Unlock Editing"
                        icon={<ClockIcon />}
                      />
                    </ButtonGroup>
                  </Tooltip>
                )}

                {isLockedByCurrentUser && user?.spaceMembership?.admin && (
                  <Tooltip
                    placement="top"
                    id="tooltip-update-from-fallback-locale"
                    content="Update translations from fallback locale (Careful will override current
                  values)"
                  >
                    <ButtonGroup>
                      <Button size="medium" onClick={() => handleForceUpdate()}>
                        Update from fallback locale
                      </Button>
                      <IconButton
                        size="small"
                        variant="negative"
                        aria-label="Update from fallback locale"
                        icon={<EnvironmentIcon />}
                      />
                    </ButtonGroup>
                  </Tooltip>
                )}
              </Stack>

              {(isLockedByCurrentUser ||
                (isLocked && user?.spaceMembership?.admin)) && (
                <Note variant="warning">
                  Attention: "Update translations from fallback locale" will
                  override current values
                </Note>
              )}
              <Stack
                fullWidth
                justifyContent="space-between"
                flexDirection="row"
                alignItems="flex-end"
                className={styles.simpleActions}
              >
                {translations && isLockedByCurrentUser && (
                  <ModalAddGroup
                    translations={translations}
                    setTranslations={setTranslations}
                  />
                )}
              </Stack>

              <Accordion>
                {translations &&
                  translationsGroups.map((translationsGroup, index) => (
                    <Accordion.Item
                      title={translationsGroup}
                      key={`${translationsGroup}-tab-${index}`}
                    >
                      {translations[translationsGroup] &&
                        Object.keys(translations[translationsGroup]).map(
                          (translationKey, index) => (
                            <EntryCard
                              key={`${translationKey}-item-${index}`}
                              contentType={`Translation Item | ${translationKey}`}
                              description={`${translations[translationsGroup][translationKey]}`}
                              className={styles.card}
                              actions={[
                                <MenuItem
                                  key="edit"
                                  disabled={!isLockedByCurrentUser}
                                  onClick={handleEditItem(
                                    translationsGroup,
                                    translationKey
                                  )}
                                >
                                  Edit
                                </MenuItem>,
                                <MenuItem
                                  key="delete"
                                  disabled={!isLockedByCurrentUser}
                                  onClick={handleDeleteItem(
                                    translationsGroup,
                                    translationKey
                                  )}
                                >
                                  Delete
                                </MenuItem>,
                              ]}
                            />
                          )
                        )}
                      {isLockedByCurrentUser && (
                        <Stack
                          fullWidth
                          paddingTop="spacingXl"
                          paddingBottom="spacingXs"
                          justifyContent="space-between"
                          flexDirection="row"
                        >
                          <ModalRemoveGroup
                            translations={translations}
                            setTranslations={setTranslations}
                            groupName={translationsGroup}
                          />
                          <ModalAddGroupItem
                            translations={translations}
                            setTranslations={setTranslations}
                            groupName={translationsGroup}
                          />
                        </Stack>
                      )}
                    </Accordion.Item>
                  ))}
              </Accordion>

              {isLockedByCurrentUser && (
                <ModalEditGroupItem
                  editData={editData}
                  translations={translations}
                  setTranslations={setTranslations}
                  isShown={showEditItem}
                  setShown={setShowEditItem}
                />
              )}

              {isLockedByCurrentUser && (
                <ModalRemoveGroupItem
                  deleteData={deleteData}
                  translations={translations}
                  setTranslations={setTranslations}
                  isShown={showDeleteItem}
                  setShown={setShowDeleteItem}
                />
              )}
            </>
          )}

          {singleLangOnly && <SingleLocaleWarning />}
        </>
      )}
      {!canRender && (
        <Stack flexDirection="row">
          <Text marginRight="spacingXs">Loading</Text>
          <Spinner />
        </Stack>
      )}
    </div>
  );
};

export default Entry;
