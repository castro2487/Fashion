import { TranslationsModel } from '@factories/Translations/Translations.model';
import { createContext, useContext, PropsWithChildren } from 'react';

type TTranslations = TCommonObject;

type TTranslationWrapperProps = {
  translations: TTranslations;
} & PropsWithChildren;

type TTranslationsContext = {
  translations: TTranslations;
  t: (key: string, ...args: string[]) => string;
};

const TranslationsContext = createContext<TTranslationsContext>({
  translations: {},
  t: (key) => key,
});

export const TranslationsWrapper = ({
  children,
  translations,
}: TTranslationWrapperProps) => {
  const translationsModel = new TranslationsModel(translations || {});

  return (
    <TranslationsContext.Provider
      value={{
        t: translationsModel.get.bind(translationsModel),
        translations: translationsModel.translations,
      }}
    >
      {children}
    </TranslationsContext.Provider>
  );
};

export const useTranslations = () => {
  return useContext(TranslationsContext);
};
