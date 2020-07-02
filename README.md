<h1 align="center">Welcome to @biothings-explorer/smartapi-kg 👋</h1>
<p>
  <a href="https://www.npmjs.com/package/@biothings-explorer/smartapi-kg" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@biothings-explorer/smartapi-kg.svg">
  </a>
  <a href="https://github.com/kevinxin90/smartapi-kg.js#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/kevinxin90/smartapi-kg.js/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
</p>

> create a knowledge graph based on SmartAPI Specifications

### 🏠 [Homepage](https://github.com/kevinxin90/smartapi-kg.js#readme)

## Install

```sh
npm i @biothings-explorer/smartapi-kg
```

## Usage

  1. Import and Initialize

    ```javascript
    const kg = require("@biothings-explorer/smartapi-kg")
    //initiate a new knowledge graph class
    let meta_kg = new kg()
    ```

  2. Load the Meta Knowledge Graph (kg)

    * Option 1: Load Meta-KG from SmartAPI specs with x-smartapi field included

    ```javascript
    //async load knowledge graph from SmartAPI
    await meta_kg.constructMetaKG()
    ```
    * Option 2: Load Meta-KG from SmartAPI specs with x-smartapi field as well as ReasonerStdAPI with /predicates endpoint

    ```javascript
    await meta_kg.constructMetaKG(includeReasoner = true);
    ```

    * Option 3: Load Meta-KG from a local copy of SmartAPI specs included in the package

    ```javascript
    //Alternatively, you can also sync load SmartAPI specs from a local copy within the package
    meta_kg.constructMetaKGSync();
    ```

  3. Filter the Meta-KG for specific associations based on input, output or predicate combinations.

    ```javascript
    //filter based on predicate
    meta_kg.filter({predicate: 'treats'})
    //filter based on predicate and input_id
    meta_kg.filter({predicate: 'treats', input_id: 'CHEMBL.COMPOUND'})
    //filter based on predicate and input_type
    meta_kg.filter({predicate: ['treats', 'physically_interacts_with'], input_type: 'ChemicalSubstance'})

    ```

[Runkit Notebook Demo](https://runkit.com/kevinxin90/smartapi-kg-demo)

## Run tests

```sh
npm run test
```

## Author

👤 **Jiwen Xin**

* Website: http://github.com/kevinxin90
* Github: [@kevinxin90](https://github.com/kevinxin90)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/kevinxin90/smartapi-kg.js/issues). You can also take a look at the [contributing guide](https://github.com/kevinxin90/smartapi-kg.js/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [Jiwen Xin](https://github.com/kevinxin90).<br />
This project is [ISC](https://github.com/kevinxin90/smartapi-kg.js/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_