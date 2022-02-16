var arr = [1, 2, 3];
delete arr[2];
document.write(arr + "<br>");
// 답은 1, 2가 된다
document.write(arr[2] + "<br>");
// 삭제를 한 것이므로 답이 안나옴(undefined로 표현)
// 해당 숫자 삭제를 했지만 해당 2번째의 3의 숫자만 사라진 것. 2번째에 숫자가 없는 상태
document.write(arr.length)
// 해당 배열 길이를 알 수 있음

// arr = [1, 2, 3]에서 delete arr[2]를 한 것은
// [1, 2, 3] 안의 2라는 숫자를 삭제한 것이 아니라 2번째 숫자를 삭제한 것
// 1:0번째, 2:1번째, 3:2번째에서 2번째를 삭제하여 숫자 3이 사라짐
//