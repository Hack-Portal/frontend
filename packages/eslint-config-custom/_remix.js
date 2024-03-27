const { resolve } = require('node:path')

const project = resolve(process.cwd(), 'tsconfig.json')

/*
 * This is a custom ESLint configuration for use with
 * Remix apps.
 *
 * This config is tailored for projects using Remix, which might require
 * different rules or plugins compared to Next.js. Adjustments have been made
 * to support Remix's specific patterns and practices.
 *
 */

module.exports = {
  extends: [
    '@vercel/style-guide/eslint/node', // Node.js関連のルール
    '@vercel/style-guide/eslint/browser', // ブラウザ関連のルール
    '@vercel/style-guide/eslint/typescript', // TypeScript関連のルール
    '@vercel/style-guide/eslint/react', // React関連のルール
    // '@vercel/style-guide/eslint/next', Next.js固有のルールは削除
    'eslint-config-turbo', // プロジェクトのルールに応じて
  ].map(require.resolve),
  parserOptions: {
    project,
  },
  globals: {
    React: true,
    JSX: true,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ['node_modules/', 'dist/'],
  // ここでルールの設定を追加
  rules: {
    'import/no-default-export': 'off', // プロジェクトの規則に応じてルールを調整
    // Remix特有のルールやプラクティスに基づいて追加のルールを設定可能
  },
}
