let date = new Date
// 요소 추출
let year = date.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDay();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

if (hours < 12) {
    alert('오전입니다.');
}
if (12 <= hours) {
    alert('오후입니다.');
}