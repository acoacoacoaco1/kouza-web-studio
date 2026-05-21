# Kouza Web Studio Portfolio

HP制作サービス開業用の1ページポートフォリオサイトです。

## 開き方

`index.html` をブラウザで開くと表示できます。

Node.js が使える環境では、以下でも確認できます。

```powershell
node server.js
```

表示URL:

```text
http://127.0.0.1:4173
```

## 公開前に変更する箇所

- `index.html`: 屋号、サービス内容、料金、制作例の文言
- `script.js`: `contactEmail` を実際の問い合わせ先メールアドレスへ変更
- `assets/hero-web-production.png`: メインビジュアル

## 構成

- `index.html`: ページ本体
- `styles.css`: デザイン
- `script.js`: 問い合わせフォームのメール起動
- `server.js`: ローカル確認用の簡易サーバー
