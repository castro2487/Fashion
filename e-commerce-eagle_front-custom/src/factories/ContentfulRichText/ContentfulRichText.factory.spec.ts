import { Factory } from '@common/Factory';
import { ContentfulRichTextFactory } from './ContentfulRichText.factory';
import { ContentfulRichTextModel } from './ContentfulRichText.model';

describe('ContentfulRichText tests', () => {
  let factoryInstance: IContentfulRichTextFactory;

  beforeEach(() => {
    factoryInstance = new ContentfulRichTextFactory();
  });

  it('should return the ContentfulRichText factory name', () => {
    expect(factoryInstance._name).toEqual('ContentfulRichTextFactory');
  });
});
