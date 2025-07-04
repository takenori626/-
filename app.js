//ページ読み込み時に保存済みのメモを表示
const memoArea = document.getElementById("memo");
const savedMemo = localStorage.getItem("memo");
if (savedMemo) {
    memoArea.value = savedMemo;
}

//保存ボタンを押したときの処理
document.getElementById("save").addEventListener("click",() => {
    localStorage.setItem("memo",memoArea.value);
    alert('メモを保存しました！');
});