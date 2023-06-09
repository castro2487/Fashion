interface IContentfulTranslationService {
  _translationsEntryId: string;
  getTranslations(
    locale: string
  ): Promise<IRedisContentfulEntryReferenceProps | undefined>;
}
