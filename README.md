## 環境

### 使用技術
- Next.js 13.4.8 (AppRouter)
- Typescript 5.1.6
- mui
- aspida
- firebase
- recoil

### 構築
```
npm install
```

## 開発ルール


詳しくはこちら
https://qiita.com/hiroto_dnpk/items/c1345cdbcab444c4fe5e

なおブランチ名は`feature/[機能名]`に変更します。
例　feature/createUser

## ディレクトリ構造
DDDに近い構造になっています。

```
src
├── api // aspidaによる自動生成　DBへのapi通信のロジック
├── app
│   ├── _components   // コンポーネント
│   ├── _hooks        // フック
│   ├── _servies      // 外部データを加工して返す処理
│   ├── _types      　// 型
│   │
│   ├── signup      　// 各ページ
│   │   ├── _components   
│   │   ├── _hooks
│   │   ├── _servies
│   │   └── _types
│   │
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components        // 共通コンポーネント　　　　
│   └─ layouts　　　　 
│        └─ Header.tsx
│
├── constants         // 定数
├── hooks　           // 共通フック
├── libs             // ライブラリに関するファイル
├── providers        // プロバイダーに関するファイル
├── repositories     // 単に外部データを扱う、加工はservice
│　　└─ mocks         // テスト用mock
├── services         // 共通のservices  
├── stores           // globalState
├── types            // 共通の型
└── utils　　　　　　　// 汎用関数

```


