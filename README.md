# tailwindcss-theme-vars-based-on-da-design-tokens

[digital-go-jp/design-tokens: デジタル庁デザインシステムのデザイントークン](https://github.com/digital-go-jp/design-tokens)をベースにした Tailwind CSS v4.0 向けの テーマCSS変数を生成するツール

## 環境構築

### プロジェクトのクローン

このプロジェクトは、[digital-go-jp/design-tokens](https://github.com/digital-go-jp/design-tokens)をサブモジュールとして参照しています。

そのため、プロジェクトをクローンする際には、`--recursive`オプションをつけて実行してください。

```shell
git clone --recursive <tailwindcss-theme-vars-based-on-da-design-tokensリポジトリのURL>
```

### 必要なパッケージのインストール

トークンの変換やテーマの作成には、各種パッケージが必要になります。

- style-dictionary
- nunjucks

以下を実行して、必要なパッケージをインストールしてください。

```shell
npm install
```

## 使い方

```shell
npm run build
```

2つのファイルが作成されます。

| 作成ファイル名    | 説明                                                                                                                                                                                                                                       |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `dist/tokens.css` | [digital-go-jp/design-tokens](https://github.com/digital-go-jp/design-tokens)の`tokens.css`とほぼ同等のもの(変更点: **tailwindcss v4.0** 用に、selectorを`:root` から `@theme` に変更し。変数名には`tokens`プレフィックスを付与している。) |
| `dist/theme.css`  | **tailwindcss v4.0** のテーマCSS変数を定義。テーマCSS変数の値には、`tokens.css`で定義した変数を使用                                                                                                                                        |

## 仕組み

- [digital-go-jp/design-tokens: デジタル庁デザインシステムのデザイントークン](https://github.com/digital-go-jp/design-tokens) を submouleとして管理
- submodule の `figma/tokens.json` から [Style Dictionary](https://amzn.github.io/style-dictionary/#/) により、CSS変数(デザイントークン変数)に変換
- 作成したデザイントークン変数を、[Nunjucks](https://mozilla.github.io/nunjucks/)のテンプレートを利用したツールを使用して、TailwindCSSのテーマCSS変数に変換する
