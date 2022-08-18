declare module '@ioc:Adonis/Addons/Algolia' {
  import { AlgoliaSearchOptions, SearchIndex } from 'algoliasearch'
  export interface BaseAlgoliaSearchClient {
    index: (indexName: string) => SearchIndex
  }

  export interface AlgoliaClientConfig {
    appId: string
    apiKey: string
    AlgoliaSearchOptions?: AlgoliaSearchOptions
  }

  const AlgoliaSearchClient: BaseAlgoliaSearchClient
  export default AlgoliaSearchClient
}
