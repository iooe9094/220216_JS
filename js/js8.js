let x = 10, y = 20;
if (x == y) {
    document.write("x와 y는 같습니다.");
}
else {
    // x와 y가 같지 않은 경우
    if (x > y)
    document.write("x가 y보다 큽니다.");
    else {
        // 실행될 실행문이 한 줄뿐이라면 대괄호 ({}) 생략 가능
        document.write("x가 y보다 작습니다.");
    }
}