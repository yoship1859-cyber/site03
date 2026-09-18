# AirLink ドローン企業サイト — プロジェクト設定

## Git ルール
- 各タスク完了後に自動でコミットすること
- コミットメッセージは日本語で変更内容を簡潔に書く（例：「CTAボタンをオレンジに変更」）
- 1つのタスクが終わるたびにコミット。まとめてコミットしない

---

## プロジェクト概要

ドローン企業「AirLink」のコーポレートサイト。
法人・個人事業主からの問い合わせ獲得・採用エントリーがメインCV。

---

## ファイル構成

```
/
├── index.html         # トップページ
├── technology.html    # 技術紹介ページ
├── style.css          # メインスタイル
├── globals.css        # デザイントークン（変数定義）← 色の変更はここ
├── reset.css          # リセットCSS
├── main.js            # メインJS（IntersectionObserver・particles.js）
└── script.js          # jQueryメニュー開閉
```

---

## カラートークン（globals.css に定義済み）

| 変数名 | 値 | 用途 |
|---|---|---|
| `--color-navy` | `#1a2b5e` | 見出し・フッター・重要な帯 |
| `--color-blue` | `#2563eb` | リンク・アイコン・ボーダー |
| `--color-blue-light` | `#eff4ff` | セクション背景の薄い青 |
| `--color-text` | `#333333` | 本文テキスト |
| `--color-text-sub` | `#666666` | 補足テキスト・日付 |
| `--color-cta` | `#f59e0b` | メインCTAボタン（オレンジ） |
| `--color-cta-hover` | `#d97706` | メインCTAホバー |
| `--color-white` | `#ffffff` | 白 |

**色を変更するときは必ず globals.css のトークンを編集すること。直値（ハードコード）禁止。**

---

## ブランド方針

- **青はブランドカラーとして維持**する（信頼性・技術感の表現）
- 青は「見出し・ナビ・アイコン」に絞り、本文はグレー（`--color-text`）を使う
- **CTAボタンのみオレンジ**（`--color-cta`）で差し色をつける

---

## ボタンの階層ルール

### メインCTA（最優先で目立たせる）
「導入相談はこちら」「お問い合わせ」「採用応募」など

```css
/* style.css に .btn-primary クラスとして定義 */
background-color: var(--color-cta);
color: var(--color-white);
```

### サブCTA（控えめに）
「資料ダウンロード」「詳しくはこちら」「ニュースを見る」など

```css
/* style.css に .btn-secondary クラスとして定義 */
background-color: transparent;
color: var(--color-blue);
border: 2px solid var(--color-blue);
```

---

## 対象ブラウザ・レスポンシブ

- デスクトップ：1200px以上
- タブレット：768px〜1199px
- モバイル：767px以下

---

## 注意事項

- `globals.css` の変数定義を変えると全ページに影響するため慎重に
- `h1〜h6` は `--color-navy`、`p` は `--color-text` がすでに適用済み
- particles.js は `#bg` 要素にバインドされている。該当要素を削除しないこと
