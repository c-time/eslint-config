# eslint-config

PRODUCTION C-time!のESLint共有設定

## 使用方法

### パッケージのインストール

```
$ echo "@c-time:registry=https://npm.pkg.github.com" >> .npmrc
$ npm install --save-dev 
```

### 関連パッケージのインストール

Reactプロジェクト

```
$ npm install --save-dev eslint prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-config-import eslint-plugin-prefer-arrow
$ npm install --save-dev eslint-config-airbnb eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
```

バックエンドプロジェクト

```
$ npm install --save-dev eslint prettier @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-prettier eslint-config-import eslint-plugin-prefer-arrow
$ npm install --save-dev eslint-config-airbnb-base
```

### .eslintrc.js の設定

```
module.exports = {
  extends: [
    "@c-time/eslint-config/react",  // Reactプロジェクト
    // "@c-time/eslint-config",  // バックエンドプロジェクト
  ],
  root: true,  // lerna を使用するときは要設定
};
```

### .prettierrc.js の設定

```
const prettierConfig = require("@c-time/eslint-config/prettier-config");

module.exports = {
  ...prettierConfig,
};
```

## 設定内容

### ESLint

ベースはeslint-config-airbnbとし、以下の点を変更。

- no-use-before-define
    - 定義より前に使用できない (@typescript-eslint 側を使用)
- @typescript-eslint/explicit-member-accessibility
    - クラスの public/private は必ず書く
- lines-between-class-members
    - クラスメンバ間の空行は入れる。ただしフィールド宣言等1行のときは入れない。
- no-void
    - 式文の最初に書くものだけ許可(Promiseの戻りを取らない呼び出し時に使用する)
- semi
    - 行末セミコロン必須
- import/extensions
    - js/jsx/ts/tsx 以外はimportに拡張子が必要(svg等)
- react/jsx-filename-extension
    - js/tsでJSXを書いてはいけない
- react/react-in-jsx-scope
    - JSXで import React from "react" を書かなくてもいい
- prefer-arrow/prefer-arrow-functions
    - なるべくアロー式での関数を書く
- max-len
    - 行の最大桁数は120文字 (長めのidentifierを使用する場合のため)
    - ただし、importは1行で良い
- react/prop-types, react/require-default-props
    - PropTypesは使用しない(TypeScriptで保証されるから)

### Prettier

- trailingComma
   - 末尾カンマを常に付ける

## ライセンス

MIT
