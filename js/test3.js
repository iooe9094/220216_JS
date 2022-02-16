window.onload = function () {
    var num = prompt("터널 높이를 입력하세요.");
        if (num < 170) {
            alert("충돌");
        }
        else if (num == 170) {
            alert("정상통과");
            }
        else {
            alert("무난히통과");
        }
    }