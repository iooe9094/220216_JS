// 객체를 선언합니다 : 현재 시간 측정
let date = new Date();
let hours = date.getHours;

// 조건문
if (hours < 5) {
    alert("잠을 자렴....");
}
    else {
        if (hours < 9) {
        alert("아침식사")
    }
    else {
        if (hours < 18) {
            alert("공부")
        }
    }
}
