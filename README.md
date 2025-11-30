# ToDoアプリ（事前練習）

このアプリは、IT技術者研修の事前学習として作成した **シンプルなToDoアプリ** です。  
ブラウザ上で動作し、タスクの追加・完了・削除に対応しています。

GitHub Pages を利用して公開しており、誰でもブラウザから動作を確認できます。

---

## 🔗 公開URL  
https://worldworkstyle00-web.github.io/todo-app/

---

## 📌 機能一覧
- タスクの追加  
- チェックボックスによる完了管理  
- 完了したタスクは取り消し線表示  
- 削除ボタンでタスクを削除  
- **localStorage対応のため、ブラウザを閉じてもタスクが保持される**

---

## 🖥 使用技術
- HTML5
- CSS3
- JavaScript（Vanilla JS）
- GitHub Pages（公開）
- GitHub Desktop（バージョン管理）

---

## 📁 フォルダ構成
todo-app/
├── index.html # メイン画面
├── style.css # スタイルシート
└── script.js # アプリの動作ロジック

---

## 📘 使い方
1. ページ上部の入力欄にタスク名を入力  
2. 「追加」ボタンを押す  
3. 追加したタスクが一覧に表示される  
4. チェックボックス → 完了/未完了を切り替え  
5. 削除ボタンでタスクを消去  

---

## 🛠 開発のポイント（学習メモ）
- DOM操作で要素を生成（`document.createElement`）  
- `addEventListener` でイベント処理  
- `localStorage` でデータ保存  
- GitHub Desktop を使用して初めてのリポジトリ作成  
- GitHub Pages を使った Web 公開を経験  

---

## 📄 ライセンス
MIT License  

---

## 🔧 今後のアップデート予定
- タスクを配列化して localStorage と同期（実装途中）
- DOM操作の構造を改善し、コードを整理
- UIデザインのブラッシュアップ
- ホームページ制作の学習後にリファクタリング予定
