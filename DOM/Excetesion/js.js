const randomNumber = Math.floor(Math.random() * 100) +1;
let guessHistory = [] // 추측 기록 저장


// 랜덤 숫자를 표시
// document.getElementById('randomNumber').textContent = `랜덤 숫자: ${randomNumber}`;
//  버튼을 누르면 randomnumber 부터 나오게 해보자 

function checkGuess() {
    const guessNumber = document.getElementById("guessNumber").value
    const resultText = document.getElementById("result")
    const updownText = document.getElementById("updownText")

    guessHistory.push(guessNumber);

    if (guessNumber < randomNumber) {
        resultText.textContent = "결과 값이 너무 낮아요"
        updownText.textContent = "up 해주세요"
    } else if (guessNumber > randomNumber) {
        resultText.textContent = "결과 값이 너무 높아요"
        updownText.textContent = "down 해주세요"
    } else {
        resultText.textContent = " 정닶"
        updownText.textContent = "current"
}

// 추측 기록 저장 및 로그 출력
logGuess(guessNumber);

}

function logGuess(guessNumber) {
    const logArea = document.getElementById("logGuess");
    const story = document.createElement("p"); //뭘 추가해야할까 ?
    story.textContent =`추측한 숫자 : ${guessNumber}`;
    logArea.appendChild(story); // 나의 추측 스토리에 기록 추가
}
