## HP URL

https://3s-code.com/

## 　バージョン

Nuxt.js 3.0.0-rc.14

## 外部アプリ

### [microCMS](https://microcms.io/)

ブログ機能は microCMS を使用しています。

### [sendGrid](https://sendgrid.com/)

お問い合わせフォームのメール送信機能は sendGrid で実装しています。

## デプロイ先

[Google Cloud Run](https://cloud.google.com/run?hl=ja)

## ディレクトリ構造

```
@
├─ .vscode
|   └─setting.json  // vscodeのprettierの設定
├─ node_modules // 各種プラグイン gitignoreしています。
├─ assets
|   └─ style
|        ├─ _base.scss // 共通クラス定義
|        ├─ _function.scss // 変数、mixin定義
|        ├─ _reset.scss // リセットcss
|        └─ main.scss // 上記 _***.scssの読み込み
├─ components
|   ├─ blog // ブログ関連で使用するコンポーネント
|   |   ├─ ArchiveContent.vue // blogアーカイブページのテンプレート
|   |   ├─ Card.vue // top,blogアーカイブなどで表示させるブログカード
|   |   ├─ CardCategory.vue // カテゴリーの表示
|   |   ├─ CategoryTitle.vue // カテゴリーアーカイブのタイトル
|   |   ├─ SideBar.vue // サイドバー
|   |   └─ SideBarProfile.vue // サイドバー内のプロフィール
|   ├─ modules // 複数ページで使用
|   |   ├─ Button.vue // ボタン
|   |   ├─ Footer.vue // フッター
|   |   ├─ Header.vue // ヘッダー
|   |   ├─ LowerMainView.vue // 下層ページのメインビュー
|   |   ├─ ReturnButton.vue // 戻るボタン
|   |   └─ SectionTitle.vue // トップページのセクションタイトル
|   ├─ top // トップページの各セクション
|   |   ├─ About.vue
|   |   ├─ Blog.vue
|   |   ├─ Contact.vue
|   |   ├─ MainView.vue
|   |   ├─ Price.vue
|   |   ├─ Service.vue
|   |   └─ Works.vue
|   └─ works // 制作実績
|       └─ Card.vue // 制作実績のカード
├─ composables  // 状態管理（今後お問い合わせフォームで利用予定）
|   └─ states.ts // 使用していません。
├─ layouts // 各ページレイアウト
|   ├─ blog.vue // ブログページ
|   ├─ default.vue // トップページ
|   ├─ lower.vue // 下層ページ
|   └─ works.vue // 制作実績
├─ middleware // サーバー側で行う処理
|   └─ form.ts // 使用していません。
├─ pages // 各ページのテンプレート
|   ├─ index.vue // トップページ(ルート)
|   ├─ blog // ブログ
|   |   ├─ index.vue // トップ
|   |   ├─[slug]
|   |   |   └─ index.vue // ブログの詳細ページ
|   |   └─ category
|   |       └─ [slug]
|   |           └─ index.vue // カテゴリーアーカイブ
|   ├─ contact // お問い合わせフォーム
|   |   ├─ index.vue // トップ
|   |   └─ complete // 完了画面
|   |       └─ index.vue
|   └─ works // 制作実績
|       ├─ index.vue // トップ
|       └─ [slug] // 詳細ページ
|          └─ index.vue
├─ plugins
|   ├─ analytics.client.ts // googleアナリティクス設定
|   ├─ vee-validate.client.ts // vee-validate設定
|   └─ vue3-smooth-scroll.ts // smooth-scroll設定
├─ public // 画像
|   ├─ blog
|   ├─ favicon
|   └─ top
├─ .env // apiキーなど記述(gitignore)
├─ .eslintrc.json // ESLint設定
├─ .gitignore // gitの監視対象から外すファイルを記述
├─ .prettierrc // prettierの設定
├─ app.vue // エンドポイント
├─ cloudbuild.yaml // google cloud runへデプロイするための設定
├─ Dockerfile // 同上 ※開発環境にDockerは使用していません
├─ nuxt.config.ts // 全体の設定
├─ package-lock.json
├─ package.json
├─ README.md
└─ tsconfig.ts
```
