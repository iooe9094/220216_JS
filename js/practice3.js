// 변수를 선언합니다
let date = new Date();
let hours = date.getHours();

// 조건문
if (hours < 12) {
    // 표현식 "hours < 12"가 참일 때 실행합니다
    alert('오전입니다.') 
}
else {
    alert('오후입니다.')
}