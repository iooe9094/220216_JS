var arr = [1, true, "java"];

arr.push("script");
document.write(arr + "<br>");
// 기존 [1, true, "java", ("script") 추가됨]

arr[arr.length] = 100;
document.write(arr + "<br>");
// arr.length도 배열에 원하는 값 추가하는 프로퍼티임

arr[10] = "자바스크립트"
document.write(arr + "<br>");
// 최초 선언 및 계산된 arr 값은 [1, true, "java", 100(앞에 length로 추가)]
// 까지이지만, 강제로 10번째에 "자바스크립트"라는 값을 추가함
// 즉, 100과 10번째의 "자바스크립트" 사이에 배열의 홀 발생
// 배열의 홀은 중간에 아무 값도 없는 것이 발생한 것을 말한다
document.write(arr[7]);
//위의 값에서 보이는 4번째(100) - 10번째("자바스크립트") 사이에 7번째 값은 없으므로 undefined