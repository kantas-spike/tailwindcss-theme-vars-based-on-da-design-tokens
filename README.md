# tailwindcss-theme-vars-based-on-da-design-tokens

[digital-go-jp/design-tokens: デジタル庁デザインシステムのデザイントークン](https://github.com/digital-go-jp/design-tokens)をベースにした Tailwind CSS v4.0 向けの テーマCSS変数を生成するツール

## 仕組み

- [digital-go-jp/design-tokens: デジタル庁デザインシステムのデザイントークン](https://github.com/digital-go-jp/design-tokens) を submouleとして管理
- submodule の `figma/tokens.json` から [Style Dictionary](https://amzn.github.io/style-dictionary/#/) により、CSS変数(デザイントークン変数)に変換
- 作成したデザイントークン変数を、[Nunjucks](https://mozilla.github.io/nunjucks/)のテンプレートを利用したツールを使用して、TailwindCSSのテーマCSS変数に変換する
