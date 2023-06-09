import { Factory } from '@common/Factory';
import resolveResponse from 'contentful-resolve-response';
import { stringToCamelCase } from '@lib/utils';
import { ContentfulLinkModel } from '@factories/ContentfulLink/ContentfulLink.model';
import { ContentfulBynderImage } from '@models/ContentfulBynderImage/ContentfulBynderImage.model';
import { CONTENTFUL_CONTENT_TYPES } from '@constants';

export const ERROR_EXTRACT_CONTENTFUL_REF_FILED_ID =
  'Can not extract referenced data field ID. This field may be empty';
export class ContentfulFactory extends Factory implements IContentfulFactory {
  _name = 'ContentfulFactory';
  constructor() {
    super();
  }

  covertEntryNameToObjKey(entryName: string): string {
    return stringToCamelCase(entryName);
  }

  serializeObject(obj: TCommonObject): TCommonObject {
    return JSON.parse(JSON.stringify(obj));
  }

  // create a flat array from first and second level referenced fields for content entity
  flattenReferenceFieldsModel(
    contentfulEntryReference: TCommonObject = {}
  ): ContentfulFlattenReferenceFields {
    const contentItems: ContentfulFlattenReferenceFields[] = [];
    Object.entries(contentfulEntryReference).forEach(
      ([fieldName, referenceFiled]) => {
        const isOneToManyRefType = Array.isArray(referenceFiled);

        if (typeof referenceFiled === 'string') {
          contentItems.push({ [fieldName]: referenceFiled });
        } else if (!isOneToManyRefType) {
          //for richtext
          if (referenceFiled?.nodeType) {
            return contentItems.push({ [fieldName]: referenceFiled });
          }
          contentItems.push(referenceFiled);
        } else {
          referenceFiled.forEach((childFiled) => {
            contentItems.push(childFiled);
          });
        }
      }
    );
    return contentItems;
  }

  extractComponentRefFieldsData(
    contentfulEntry: IContentfulEntryReferenceProps | TCommonObject
  ): ContentfulFlattenReferenceFields {
    const { fields } = resolveResponse(contentfulEntry).pop() || {};
    return fields;
  }

  _extractReferencedFieldData(
    fieldSysId: string,
    fieldData: ContentfulEntryProps<TCommonObject>
  ) {
    switch (fieldSysId) {
      case CONTENTFUL_CONTENT_TYPES.LINK_ITEM: {
        return new ContentfulLinkModel(fieldData as any);
      }
      case CONTENTFUL_CONTENT_TYPES.BYNDER_IMAGE: {
        return new ContentfulBynderImage(fieldData as any);
      }
      default:
        return {};
    }
  }

  _extractReferencedFieldSysId(field: ContentfulEntryProps): string {
    if (!field) {
      new Error(ERROR_EXTRACT_CONTENTFUL_REF_FILED_ID);
    }
    const { contentType } = field.sys;
    const { sys } = contentType;
    const { id } = sys;
    return id;
  }
  _determineMapKey(fieldSysId: string, mapKeysCollector: string[]): string {
    const isKeyUnique = mapKeysCollector.includes(fieldSysId);
    let keyName;
    if (!isKeyUnique) {
      keyName = fieldSysId;
    } else {
      keyName = `${fieldSysId}_${
        mapKeysCollector.filter((key: string) => key === fieldSysId).length
      }`;
    }
    mapKeysCollector.push(keyName);
    return keyName;
  }

  _createMapFromObject(
    contentfulEntity: TCommonObject
  ): Map<string, string | TCommonObject> {
    const mapKeysCollector: string[] = [];
    return new Map(
      Object.keys(contentfulEntity).map((key) => {
        const objValue = contentfulEntity[key];
        if (typeof objValue !== 'object') {
          return [key, objValue];
        } else if (Array.isArray(objValue)) {
          const data = objValue.map((referencedObj) => {
            const fieldSysId = this._extractReferencedFieldSysId(
              referencedObj as ContentfulEntryProps
            );
            const mapKey = this._determineMapKey(fieldSysId, mapKeysCollector);
            const referencedFieldData = this._createMapFromObject(
              referencedObj.fields
            );
            return [mapKey, referencedFieldData];
          });
          return [key, data];
        } else {
          const fieldSysId = this._extractReferencedFieldSysId(
            objValue as ContentfulEntryProps
          );
          const referencedFieldData = this._extractReferencedFieldData(
            fieldSysId,
            objValue.fields
          );
          const mapKey = this._determineMapKey(fieldSysId, mapKeysCollector);
          return [mapKey, referencedFieldData];
        }
      })
    );
  }

  _createMapFromArray(
    contentfulEntity: TCommonObject[]
  ): Map<string, string | TCommonObject> {
    const mapKeysCollector: string[] = [];
    return new Map(
      contentfulEntity.map((obj: TCommonObject) => {
        const objKeys = Object.keys(obj);

        if (objKeys.length === 1) {
          return [objKeys.at(0) as string, Object.values(obj).at(0)];
        } else {
          const fieldSysId = this._extractReferencedFieldSysId(
            obj as ContentfulEntryProps
          );
          const referencedFieldData = this._extractReferencedFieldData(
            fieldSysId,
            obj.fields
          ) as TCommonObject;
          const mapKey = this._determineMapKey(fieldSysId, mapKeysCollector);
          return [mapKey, referencedFieldData];
        }
      })
    );
  }

  createRefFieldsObjectMap(
    contentfulEntity: TCommonObject[] | TCommonObject
  ): TCommonObject {
    const isArray = Array.isArray(contentfulEntity);

    if (!isArray) {
      return this._createMapFromObject(contentfulEntity);
    }
    return this._createMapFromArray(contentfulEntity);
  }
}
