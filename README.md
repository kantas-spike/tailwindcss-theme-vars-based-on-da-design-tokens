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

## 生成されたテーマCSS変数の利用方法

**tailwindcss v4.0** を利用しているサイトで、本パッケージをインストール

```shell
npm install --save kantas-spike/tailwindcss-theme-vars-based-on-da-design-tokens
```

**tailwindcss v4.0** を利用しているサイトの変換元のCSSファイル(`assets/css/main.css` )で以下のようにインポートする。

```css
/* assets/css/main.css */
@import "tailwindcss";

/* デフォルトのcolor関連定義を削除(これは任意です。元のカラー定義を残す場合は記述しない) */
@theme {
  --color-*: initial;
}

/* 本パッケージを@sourceに指定(`node_modules`までの相対パスは環境に依存します) */
@source "../../node_modules/tailwindcss-theme-vars-based-on-da-design-tokens";
/* 本パッケージのstyleをインポート */
@import "tailwindcss-theme-vars-based-on-da-design-tokens";

/* 以降、必要に応じて追加のテーマを定義 */
@theme {
  --color-primary: var(--tokens-color-primitive-blue-600);
  --color-secondary: var(--tokens-color-primitive-orange-600);
  /* ..略.. */
}
```
