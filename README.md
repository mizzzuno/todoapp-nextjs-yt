# Next.js Todo App

TypeScript と Next.js を使用したシンプルな Todo アプリケーションです。

## 概要

このプロジェクトは Next.js 15、TypeScript、Tailwind CSS を使用した Todo アプリケーションです。JSON Server を使用してローカルで REST API をシミュレートし、基本的な CRUD 操作（作成、読み取り、更新、削除）を実装しています。

TypeScripとNext.jsの勉強用に、以下の動画を参考に作成しました。

**参考動画**: [Next.js 13 Tutorial](https://youtu.be/VcMW2C9VNtI?si=1PoZdwrKggRipAHZ)

## 学習ポイント

このプロジェクトでは以下の技術や概念を学ぶことができます：

- Next.js 15 の App Router
- TypeScript の基本的な使用方法
- Tailwind CSS によるスタイリング
- React のコンポーネント設計
- REST API との連携
- 非同期処理（async/await）
- CRUD 操作の実装

## 機能

- ✅ タスクの追加
- ✅ タスクの表示
- ✅ タスクの削除
- ✅ タスクの編集

## 技術スタック

- **フレームワーク**: Next.js 15
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **データベース**: JSON Server（ローカル開発用）
- **UUID 生成**: uuid ライブラリ

## プロジェクト構造

```
src/
├── api.ts                  # API関数
├── types.ts               # TypeScript型定義
└── app/
    ├── layout.tsx         # ルートレイアウト
    ├── page.tsx          # ホームページ
    ├── globals.css       # グローバルスタイル
    ├── components/       # Reactコンポーネント
    │   ├── AddTask.tsx   # タスク追加コンポーネント
    │   ├── Todo.tsx      # 個別タスクコンポーネント
    │   └── TodoList.tsx  # タスクリストコンポーネント
    └── data/
        └── todos.json    # JSON Server用データファイル
```

## セットアップと実行

### 前提条件

- Node.js 18 以上
- npm または yarn

### インストール

1. リポジトリをクローン

```bash
git clone <repository-url>
cd todoapp-nextjs-yt
```

2. 依存関係をインストール

```bash
npm install
```

### 開発環境での実行

1. JSON Server を起動（ポート 3001）

```bash
npm run json-server
```

2. 別のターミナルで Next.js 開発サーバーを起動

```bash
npm run dev
```

3. ブラウザで [http://localhost:3000](http://localhost:3000) を開いてアプリケーションを確認


## API エンドポイント

JSON Server により以下のエンドポイントが利用可能です：

- `GET /tasks` - すべてのタスクを取得
- `POST /tasks` - 新しいタスクを作成
- `PUT /tasks/:id` - 指定されたタスクを更新
- `DELETE /tasks/:id` - 指定されたタスクを削除

## 注意事項

⚠️ **重要**: このプロジェクトは JSON Server を使用してローカル環境でのみ動作します。そのため、Vercel などのクラウドプラットフォームには現在デプロイしていません。

本格的なデプロイメントを行う場合は、以下のような選択肢があります：

- データベース（PostgreSQL、MongoDB など）への移行
- Supabase、PlanetScale などの BaaS の利用
- Next.js API Routes を使用した内蔵 API の実装


