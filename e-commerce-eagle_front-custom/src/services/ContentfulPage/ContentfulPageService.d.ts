interface IContentfulPageService {
  getPageByIdOrSlug(
    slug: string
  ): Promise<IRedisContentfulEntryReferenceProps | undefined>;

  getPageById(
    pageId: string
  ): Promise<IRedisContentfulEntryReferenceProps | undefined>;
}
