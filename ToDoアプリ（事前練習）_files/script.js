// 1. HTMLの要素をつかむ
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

// フォームが送信されたとき（追加ボタンを押したとき）
form.addEventListener("submit", (event) => {
  event.preventDefault(); // ページがリロードされるのを防ぐ

  const text = input.value.trim(); // 入力された文字列（前後の空白を削除）

  if (text === "") {
    // 何も入力されていなければ何もしない
    return;
  }

  addTodo(text);   // 新しいタスクを追加する関数を呼ぶ
  input.value = ""; // 入力欄を空にする
});

// 2. タスクを1件、画面に追加する処理
function addTodo(text) {
  // <li> 要素を作成
  const li = document.createElement("li");
  li.classList.add("todo-item");

  // チェックボックス
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // タスクのテキスト
  const span = document.createElement("span");
  span.classList.add("todo-text");
  span.textContent = text;

  // 削除ボタン
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "削除";

  // li の中に順番に並べる
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteButton);

  // 完了チェックのイベント
  checkbox.addEventListener("change", () => {
    // チェックされたら .completed クラスをつける／外す
    li.classList.toggle("completed", checkbox.checked);
  });

  // 削除ボタンのイベント
  deleteButton.addEventListener("click", () => {
    li.remove();
  });

  // 最後に ul#todo-list の中に li を追加
  list.appendChild(li);
}

let todos = []; // { id, text, completed } の配列にするイメージ

function save() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

function load() {
  const saved = localStorage.getItem("todos");
  if (!saved) return;
  todos = JSON.parse(saved);
  // todos の中身を1件ずつ addTodo(...) で再描画する
}
