# adonis-algolia-wrapper
[![npm-image]][npm-url] [![license-image]][license-url] [![typescript-image]][typescript-url]

Simple wrapper for the [algolia](https://www.algolia.com) search engine.

## Installation
```shell
npm install adonis5-algolia-provider
node ace invoke adonis5-algolia-provider
```
Provide the following configuration to your `.env` file:
```dotenv
ALGOLIA_APP_ID=<your-app-id>
ALGOLIA_API_KEY=<your-api-key>
```
## Usage
```ts
import AlgoliaSearchClient from '@ioc:Adonis/Addons/Algolia'

const index = AlgoliaSearchClient.index('your_index')
```
[npm-image]: https://img.shields.io/npm/v/adonis-algolia-wrapper.svg?style=for-the-badge&logo=npm
[npm-url]: https://npmjs.org/package/adonis5-algolia-provider "npm"

[license-image]: https://img.shields.io/npm/l/adonis-algolia-wrapper?color=blueviolet&style=for-the-badge
[license-url]: LICENSE.md "license"

[typescript-image]: https://img.shields.io/badge/Typescript-294E80.svg?style=for-the-badge&logo=typescript
[typescript-url]:  "typescript"
