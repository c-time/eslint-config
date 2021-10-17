// Reactを使う場合の設定

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    project: "./tsconfig.eslint.json",
    sourceType: "module",
    tsConfigRootDir: __dirname,
  },
  plugins: [
    "@typescript-eslint",
    "import",
    "jsx-a11y",
    "prefer-arrow",
    "react",
  ],
  rules: {
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "@typescript-eslint/explicit-member-accessibility": ["error"],
    "lines-between-class-members": [
      "error",
      "always",
      {
        exceptAfterSingleLine: true,
      },
    ],
    "no-void": [
      `error`,
      {
        allowAsStatement: true,
      },
    ],
    semi: ["error", "always"],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "react/jsx-filename-extension": [
      "error",
      {
        extensions: [".jsx", ".tsx"],
      },
    ],
    "react/react-in-jsx-scope": "off",
    "prefer-arrow/prefer-arrow-functions": [
      "error",
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],
    "max-len": [
      "error",
      {
        code: 120,
        ignorePattern: "^import .*$", // import 文が長いのは許容
        ignoreComments: true, // コメントが長いのは許容
        ignoreStrings: true, // 文字列が長いのは許容
        ignoreTemplateLiterals: true, // テンプレートリテラルが長いのは許容
      },
    ],
  },
  overrides: [
    {
      files: ["**/*.tsx"],
      rules: {
        // tsx では TypeScript が型検証するので PropTypes 書かなくても良い
        "react/prop-types": "off",
        // 外部にライブラリとして提供するわけではないのでデフォルト値を指定しない
        "react/require-default-props": "off",
      },
    },
  ],
};

