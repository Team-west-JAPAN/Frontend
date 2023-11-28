// モーダルを取得
var modal = document.getElementById("modal");

// 通知アイコンを取得
var notificationIcon = document.getElementById("notificationIcon");

// モーダルを閉じるボタンを取得
var span = document.getElementsByClassName("close")[0];

// 通知アイコンをクリックするとモーダルを開く
notificationIcon.onclick = function() {
    modal.style.display = "block";
}

// 「×」ボタンをクリックするとモーダルを閉じる
span.onclick = function() {
    modal.style.display = "none";
}

// モーダルの外側をクリックするとモーダルを閉じる
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
