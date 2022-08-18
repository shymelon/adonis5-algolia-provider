import algoliasearch, { SearchClient, SearchIndex } from 'algoliasearch'
import { AlgoliaClientConfig, BaseAlgoliaSearchClient } from '@ioc:Adonis/Addons/Algolia'

export default class AlgoliaSearchClient implements BaseAlgoliaSearchClient {
  private client: SearchClient
  private indices: { [name: string]: SearchIndex } = {}
  constructor(config: AlgoliaClientConfig) {
    this.client = algoliasearch(config.appId, config.apiKey)
    this.indices = {}
  }

  /**
   * @param {*} name Name of the index
   * @returns New or cached instance of index
   */
  public index(name) {
    if (this.indices[name]) {
      return this.indices[name]
    }
    this.indices[name] = this.client.initIndex(name)
    return this.indices[name]
  }
}
