
// <!-- 어떤 자연수가 입력되었을 때 홀수이면 "odd"를 출력하고 -->
// <!-- 짝수이면 "even"을 출력하세요. -->

window.onload = function () {
    let num = prompt("값을 입력하세요.");

if (num % 2 == 0) {
    document.write("짝수입니다.");
}
else {
    if ( num % 2 == 1 ) {
    document.write("홀수입니다.");
}
}
}