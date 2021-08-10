<h1 align="center">Welcome to @biothings-explorer/smartapi-kg 👋</h1>

<p>
  
  <a href='https://coveralls.io/github/biothings/smartapi-kg.js'><img src='https://coveralls.io/repos/github/biothings/smartapi-kg.js/badge.svg' alt='Coverage Status' /></a>
  <a href="https://www.npmjs.com/package/@biothings-explorer/smartapi-kg" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/@biothings-explorer/smartapi-kg.svg">
  </a>
  <a href="https://github.com/biothings/smartapi-kg.js#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/biothings/smartapi-kg.js/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
</p>

[![Test](https://github.com/biothings/smartapi-kg.js/actions/workflows/test.yml/badge.svg)](https://github.com/biothings/smartapi-kg.js/actions/workflows/test.yml)
> Generate a meta knowledge graph of how biomedical concepts are connected based on SmartAPI Specifications with built-in filtering capabilities

### 🏠 [Homepage](https://github.com/biothings/smartapi-kg.js#readme)

## Install

```sh
npm i @biothings-explorer/smartapi-kg
```

## Usage

- Import and Initialize

    ```javascript
    const kg = require("@biothings-explorer/smartapi-kg")
    //initiate a new knowledge graph class
    let meta_kg = new kg.default()
    ```

- Load the Meta Knowledge Graph (meta-kg)

  - Option 1: Load Meta-KG from SmartAPI specs with translator tag specified

    ```javascript
    //async load knowledge graph from SmartAPI
    await meta_kg.constructMetaKG()
    ```

  - Option 2: Load Meta-KG from SmartAPI specs with translator tag as well as ReasonerStdAPI with /predicates endpoint

    ```javascript
    await meta_kg.constructMetaKG(includeReasoner=true);
    ```
  
  - Option 3: Load Meta-KG from SmartAPI specs with tags equal to biothings

    ```javascript
    await meta_kg.constructMetaKG(includeReasoner = false, {tag: "biothings"});
    ```

  - Option 4: Load Meta-KG from SmartAPI specs with team name equal to Text Mining Provider

    ```javascript
    await meta_kg.constructMetaKG(includeReasoner = false, {teamName: "Text Mining Provider"});
    ```

  - Option 5: Load Meta-KG from SmartAPI specs with component equal to KP

    ```javascript
    await meta_kg.constructMetaKG(includeReasoner = false, {component: "KP"});
    ```

  - Option 6: Load Meta-KG for a specific SmartAPI spec with SmartAPI ID

    ```javascript
    await meta_kg.constructMetaKG(includeReasoner = false, {smartAPIID: "5076f09382b38d56a77e376416b634ca"});
    ```

  - Option 7: Load Meta-KG from a local copy of SmartAPI specs included in the package

    ```javascript
    //Alternatively, you can also sync load SmartAPI specs from a local copy within the package
    meta_kg.constructMetaKGSync();
    ```

  - Option 8: Load Meta-KG from file path you specify

    ```javascript
      const path = require("path");
      // provide file path storing your SmartAPI file
      const file_path = path.resolve(__dirname, '../data/smartapi_multiomics_kp_query.json');
      let meta_kg = new MetaKG(file_path);
      meta_kg.constructMetaKGSync();
    ```


- Filter the Meta-KG for specific associations based on input, output, predicate, or api combinations.

    ```javascript
    //filter based on predicate
    meta_kg.filter({predicate: 'treats'})
    //filter based on predicate and input_id
    meta_kg.filter({predicate: 'treats', input_id: 'CHEMBL.COMPOUND'})
    //filter based on predicate and input_type
    meta_kg.filter({predicate: ['treats', 'physically_interacts_with'], input_type: 'SmallMolecule'})
    //filter based on input_type, output_type and api
    meta_kg.filter({ api: "Automat PHAROS API", input_type: "SmallMolecule", output_type: "Gene" });

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

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/biothings/smartapi-kg.js/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [Jiwen Xin](https://github.com/kevinxin90).<br />
This project is [ISC](https://github.com/biothings/smartapi-kg.js/blob/main/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_