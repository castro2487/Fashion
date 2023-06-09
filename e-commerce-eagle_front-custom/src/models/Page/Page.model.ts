import { Region } from '@models/Region/Region.model';
import { PageUtils } from '@factories/Page/Page.utils';

export class Page implements IPage {
  meta: TPageMeta;
  regions: TPageRegions;
  notFound?: boolean | undefined;

  constructor(contentfulPage: ContentfulEntryProps<TContentfulPage>) {
    const fields = PageUtils._getFields(contentfulPage);
    this.meta = {
      title: fields.pageTitle,
      description: fields.description,
      keywords: fields.keywords,
      canonicals: fields.canonicals,
    };
    this.regions = {
      topRegion: new Region(fields?.topRegion || []),
      mainRegion: new Region(fields?.mainRegion || []),
      bottomRegion: new Region(fields?.bottomRegion || []),
    };
  }
}
