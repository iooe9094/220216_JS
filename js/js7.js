window.onload = function () {
    let str = document.getElementById("text")
    str.innerHTML = "이 문장으로 변경할까요?";
}
function changeText() {
   let str = document.getElementById("text")
   str.innerHTML = "<b>이 문장으로 변경했습니다.</b>"
    }