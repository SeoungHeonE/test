// HTML 요소 선택
const audioPlayer = document.getElementById("audioPlayer");
const lyricsText = document.getElementById("lyricsText");
const playButton = document.getElementById("playButton");
const lyricsButton = document.getElementById("lyricsButton");
const startButton = document.querySelector("#welcomePopup button");

const lyricsContainer = document.querySelector(".lyrics-container");



// Lottie 애니메이션 로드
const welcomeAnimation = lottie.loadAnimation({
    container: document.getElementById('welcomeLottie'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './lottie/welcome.json'
});

const questionAnimation = lottie.loadAnimation({
    container: document.getElementById('userNameLottie'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './lottie/userName.json'

});



// 질문 리스트와 해당 Lottie 파일 경로
const questions = [
    {
        text: "우리가 처음 만난 장소는 어디였지?",
        lottiePath: './lottie/location.json' // 세 번째 질문에 해당하는 Lottie 파일
    },
    {
        text: "처음 만났을 때 어떤 느낌이었어?",
        lottiePath: './lottie/feel.json'
    },
    {
        text: "그렇다면, 첫인상에 대해서 어떻게 생각했어?",
        lottiePath: './lottie/face.json'
    },
    {
        text: "우리가 함께했던 기억 중 가장 기억에 남는 순간이 있을까?",
        lottiePath: './lottie/calendar.json'
    },
    {
        text: "어떤 순간이 떠오르면, '그때 진짜 재밌었지'라고 생각해?",
        lottiePath: './lottie/smile.json'
    },
    {
        text: "누나는 나에 대해 어떤 점이 제일 놀라웠어?",
        lottiePath: './lottie/questionMark.json'
    },
    {
        text: "내가 가진 가장 큰 장점은 뭐라고 생각해?",
        lottiePath: './lottie/conversation.json'
    },
    {
        text: "다음에 만난다면, 그땐 어떤 이야기를 나누고 싶어?",
        lottiePath: './lottie/conversation2.json'
    },
    {
        text: "지금까지 우리가 친구로 함께한 시간들 중 가장 고마웠던 순간은 언제였어?",
        lottiePath: './lottie/thanks.json'
    },
    {
        text: "누나에게 있어 친구란 어떤 존재야?",
        lottiePath: './lottie/friend.json'
    },
    {
        text: "우리 관계가 앞으로 어떻게 발전할 거라고 생각해?",
        lottiePath: './lottie/Chart.json'
    },
    {
        text: "만약 내가 특별한 날을 만들어 줄 수 있다면, 그 날은 어떤 날일까?",
        lottiePath: './lottie/birthday.json'
    },
];


const finalAnimation = lottie.loadAnimation({
    container: document.getElementById('finalLottie'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: './lottie/Fireworks.json'
});


let currentQuestionIndex = 0;
let userName = ""; // 사용자 이름 저장

// 이름 입력 팝업으로 이동
function askName() {
    document.querySelector('.popup.show').classList.remove('show');
    document.getElementById('namePopup').classList.add('show');
}

// 질문 시작
function startQuestions() {
    userName = document.getElementById('userNameInput').value.trim();
    if (userName === "") {
        alert("이름을 입력해 주세요!");
        return;
    }
    document.querySelector('.popup.show').classList.remove('show');
    document.getElementById('questionArea').classList.add('show');
    showQuestion();
}


// 질문 진행 상태 업데이트 함수
function updateQuestionProgress() {
    const totalQuestions = questions.length; // 전체 질문 수
    const progressText = `${currentQuestionIndex + 1} / ${totalQuestions}`; // 진행 상태 텍스트
    document.getElementById("questionProgress").innerText = progressText;
}


// 현재 질문 보여주기
function showQuestion() {
    document.getElementById('questionText').innerText = questions[currentQuestionIndex].text; // 질문 텍스트 업데이트
    document.getElementById('answerInput').value = ''; // 입력창 초기화
    // 진행 상태 업데이트
    updateQuestionProgress();

    // Lottie 애니메이션 로드
    const questionLottie = document.getElementById('questionLottie'); // Lottie 컨테이너
    questionLottie.innerHTML = ''; // 이전 애니메이션 초기화
    // 데이터 인덱스 추가
    questionLottie.setAttribute('data-index', currentQuestionIndex);

    // 새로운 Lottie 애니메이션 로드
    lottie.loadAnimation({
        container: questionLottie, // 애니메이션을 보여줄 컨테이너
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: questions[currentQuestionIndex].lottiePath // 현재 질문에 해당하는 Lottie 파일 경로
    });
}




//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////


// 각 질문의 답변을 저장할 배열
let answers = [];

// 답변을 저장하는 함수
function saveAnswer(answer) {
    answers.push(answer);
}

// 답변을 모아서 보여주는 함수
function showAnswerSummary() {
    const answersSummaryContainer = document.getElementById("answersSummaryContainer");
    answersSummaryContainer.innerHTML = ''; // 기존 내용을 초기화합니다.

    // 사용자 이름이 들어간 제목을 h2에 직접 추가
    const titleElement = document.querySelector('#answersSummaryPopup h2');
    titleElement.textContent = `${userName}님의 답변`; // 'userName'을 제목에 추가

    // 질문과 답변을 순서대로 보여줍니다.
    answers.forEach((answer, index) => {
        const answerElement = document.createElement('div');
        answerElement.classList.add('answer-item');

        // 질문을 나타내는 div
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.textContent = `Q, ${questions[index].text}`; // "q: " 추가

        // 답변을 나타내는 div
        const answerText = document.createElement('div');
        answerText.classList.add('answer');
        answerText.textContent = `N, ${answer}`; // "n: " 추가

        answerElement.appendChild(questionElement);
        answerElement.appendChild(answerText);
        answersSummaryContainer.appendChild(answerElement);
    });

    // 답변 요약 팝업을 표시합니다.
    document.getElementById("questionArea").classList.remove("show");
    document.getElementById("answersSummaryPopup").classList.add("show");
}





// 다음 질문을 호출하는 함수
function nextQuestion() {
    const answer = document.getElementById('answerInput').value.trim();
    if (answer === "") {
        alert("답변을 입력해 주세요!");
        return;
    }

    saveAnswer(answer);
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        document.getElementById('questionArea').classList.remove('show');
        setTimeout(() => {
            document.getElementById('questionArea').classList.add('show');
            showQuestion();
        }, 50); // 잠시 대기 후 다시 표시하여 애니메이션이 적용되도록 합니다.
    } else {
        showAnswerSummary();
    }
}




function saveAnswerSummaryAsText() {
    const answersSummaryPopup = document.getElementById('answersSummaryPopup');
    const title = answersSummaryPopup.querySelector('h2').textContent; // 제목
    const content = answersSummaryPopup.querySelector('#answersSummaryContainer').children; // 각 질문과 답변 요소

    // 텍스트 내용 구성
    let textContent = `답변 요약:\n\n${title}\n\n`;

    // 각 질문과 답변을 텍스트로 추가 (q와 n 사이에 줄바꿈 추가)
    Array.from(content).forEach(item => {
        const question = item.querySelector('.question') ? item.querySelector('.question').textContent : '';
        const answer = item.querySelector('.answer') ? item.querySelector('.answer').textContent : '';

        // 질문과 답변을 q와 n으로 구분하여 줄바꿈 추가
        if (question && answer) {
            textContent += `${question}\n${answer}\n\n`;
        }
    });

    // 텍스트 파일 생성
    const blob = new Blob([textContent], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'answers_summary.txt'; // 다운로드할 파일 이름
    link.click(); // 다운로드 실행
}

// 버튼 클릭 시 텍스트 파일로 저장
document.getElementById('captureButton').addEventListener('click', saveAnswerSummaryAsText);




// 답변 저장 버튼 클릭 시
document.getElementById("captureButton").addEventListener("click", function() {
    showHintButton();
    showTipsButton();
});

function showHintButton() {
    console.log("Displaying hint button: ", lastHintShown); // 디버깅용
    const lyricsHintButton = document.getElementById("lyricsHintButton");
    lyricsHintButton.style.display = "block"; // 힌트 버튼 보이기
}


// 팁 보기 버튼 표시 함수
function showTipsButton() {
    const tipsButton = document.getElementById("tipsButton");
    tipsButton.style.display = "block"; // 팁 버튼 보이기
}

// 힌트 보기 버튼 클릭 시, 힌트 표시
document.getElementById("lyricsHintButton").addEventListener("click", function() {
    if (lastHintShown) {
        // 힌트 버튼 클릭 시 힌트 표시
        alert("마지막 힌트입니다. 이 숫자의 힌트는 팔진수 13, 십육진수는 B 이진수는 1011입니다.\n\n 알아낸 두 개의 숫자를 더하여 그에 맞게 화면을 터치 해주세요.");
    } else {
        // 힌트 보기 버튼이 활성화되지 않은 상태에서 클릭 시 메시지 표시
        alert("아직 힌트보기 버튼이 활성화되지 않았습니다. 특정 조건을 완료한 후 다시 클릭해주세요.");
    }
});



// 팁 버튼 클릭 시 팁 표시
document.getElementById("tipsButton").addEventListener("click", function() {
    // 팁을 표시하는 기능 추가 (알림창, 다이얼로그, 등)
    alert("노래와 함께 가사도 같이 처음부터 끝까지 봐주세요.");
});   

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////


// 다음 질문 또는 최종 팝업을 보여주는 함수
function nextQuestionOrFinalPopup() {
    const answer = document.getElementById('answerInput').value.trim();
    if (answer === "") {
        alert("답변을 입력해 주세요!");
        return;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        // 질문을 업데이트하기 전에 애니메이션 클래스를 다시 추가
        const questionArea = document.getElementById('questionArea');
        questionArea.classList.remove('show'); // show 클래스 제거
        void questionArea.offsetWidth; // 리플로우를 강제로 발생시킴
        questionArea.classList.add('show'); // show 클래스 다시 추가
        showQuestion();
    } else {
        document.getElementById('answersSummaryPopup').classList.remove('show'); // 답변 요약 팝업 숨기기
        document.getElementById('questionArea').classList.remove('show');
        document.getElementById('finalPopup').classList.add('show');
        
        // 웹 페이지의 제목 변경
        document.title = `${userName}님의 생일을 축하합니다!`;

        document.getElementById('finalMessage').innerText = `${userName}님의 생일을 진심으로 축하해요!`;
    }
}




document.addEventListener("DOMContentLoaded", function () {
    const previousButton = document.getElementById('previousButton'); // 이전 버튼
    const answersSummaryPopup = document.getElementById('answersSummaryPopup'); // 답변 요약 팝업
    const finalPopup = document.getElementById('finalPopup'); // 최종 팝업
    const questionArea = document.getElementById('questionArea'); // 질문 영역

    // 이전 버튼 클릭 시 답변 요약 팝업으로 돌아가기
    previousButton.addEventListener('click', function () {
        // 최종 팝업 숨기기
        finalPopup.classList.remove('show');
        // 답변 요약 팝업 표시
        answersSummaryPopup.classList.add('show');
        // 질문 영역 숨기기
        questionArea.classList.remove('show');

        // 음원 플레이어가 축소되지 않은 경우 축소
        if (!musicPlayerPopup.classList.contains('collapsed')) {
            musicPlayerPopup.classList.add('collapsed');
        }

        // 답변 요약 팝업의 위치가 이동되었을 경우 원래 위치로 복원
        answersSummaryPopup.classList.remove('moved'); // 이동된 클래스 제거 (원래 위치로 복원)
    });
});



//힌트

document.addEventListener("DOMContentLoaded", function () {
    const hintButton = document.getElementById('hintButton'); // 힌트 보기 버튼
    const hintPopup = document.getElementById('hintPopup'); // 힌트 팝업
    const closeHintButton = document.getElementById('closeHintButton'); // 힌트 닫기 버튼
    let hintOpened = false; // 힌트가 열린 상태를 추적

    // 힌트 보기 버튼 클릭 시 힌트 팝업 열기
    hintButton.addEventListener('click', function () {
        hintPopup.classList.add('show'); // 힌트 팝업 표시
        hintOpened = true; // 힌트가 열렸다고 설정
    });

    // 힌트 닫기 버튼 클릭 시 힌트 팝업 닫기
    closeHintButton.addEventListener('click', function () {
        hintPopup.classList.remove('show'); // 힌트 팝업 숨기기
        hintOpened = false; // 힌트가 닫혔다고 설정
    });
});






document.addEventListener("DOMContentLoaded", function () {
    const hintButton = document.getElementById('lyricsHintButton'); // 가사 컨테이너의 힌트 보기 버튼
    let clickCount = 0; // 클릭 및 터치 카운트
    let hintOpened = false; // 힌트가 열린 상태 추적
    let triggerActive = false; // 트리거 발동 가능 여부

    // 마지막 버튼 클릭 이벤트를 추적하기 위한 플래그
    let isButtonClicked = false;

    // 모든 버튼 클릭 시 터치 카운트 방지
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", function () {
            isButtonClicked = true; // 버튼 클릭 시 플래그 설정
            setTimeout(() => {
                isButtonClicked = false; // 일정 시간 후 플래그 초기화
            }, 100); // 짧은 딜레이 설정 (이벤트 충돌 방지)
        });
    });

    // 힌트 보기 버튼 클릭 시
    hintButton.addEventListener('click', function () {
        if (lastHintShown) { // 마지막 힌트가 표시된 상태일 때만 버튼 활성화
            hintOpened = true; // 힌트가 열린 상태로 설정
            triggerActive = true; // 터치/클릭 트리거 활성화
        }
    });

    // 클릭 이벤트로 클릭 횟수 증가
    document.addEventListener('click', function (event) {
        if (isButtonClicked) return; // 버튼 클릭 시 터치 카운트 제외
        if (hintOpened && triggerActive) { // 힌트가 열리고 트리거가 활성화된 상태일 때만 동작
            clickCount++; // 클릭 횟수 증가
            if (clickCount >= 40) { // 40번 클릭 시
                window.location.href = 'sub.html'; // 새로운 URL로 이동
            }
        }
    });

    // 터치 이벤트로 터치 횟수 증가
    document.addEventListener('touchend', function (event) {
        if (isButtonClicked) return; // 버튼 클릭 시 터치 카운트 제외
        if (hintOpened && triggerActive) { // 힌트가 열리고 트리거가 활성화된 상태일 때만 동작
            clickCount++; // 터치 횟수 증가
            if (clickCount >= 40) { // 40번 터치 시
                window.location.href = 'sub.html'; // 새로운 URL로 이동
            }
        }
    });
});







//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////



// "시작하기" 버튼 클릭 시 음원 재생 여부 확인
// 시작하기 버튼 클릭 시 음원 재생 여부 확인 및 플레이어 축소
function startEvent() {
    if (audioPlayer.paused) {
        alert("음원을 재생한 후 시작 버튼을 눌러주세요!");
    } else {
        // 음원 플레이어를 간소화 상태로 변경
        musicPlayerPopup.classList.add('collapsed');
        
        // 100ms 지연 후 환영 팝업을 닫고 이름 입력 팝업 표시
        setTimeout(() => {
            document.getElementById("welcomePopup").classList.remove("show");
            document.getElementById("namePopup").classList.add("show");
        }, 100);
    }
}





// 음원의 길이를 기준으로 슬라이더의 범위를 설정
const audioRangeSlider = document.getElementById("audioRangeSlider");

// 음원의 길이가 로드되었을 때 슬라이더 범위 설정
audioPlayer.addEventListener("loadedmetadata", function() {
    // 음원의 길이를 가져와 슬라이더의 최대값을 설정
    audioRangeSlider.max = audioPlayer.duration;
});

// 슬라이더의 값이 변경될 때마다 음원의 시간을 변경
audioRangeSlider.addEventListener("input", function() {
    audioPlayer.currentTime = audioRangeSlider.value;
});

// 음원의 시간이 변경될 때마다 슬라이더의 값을 업데이트
audioPlayer.addEventListener("timeupdate", function() {
    // 현재 재생 중인 시간에 맞게 슬라이더 값을 갱신
    audioRangeSlider.value = audioPlayer.currentTime;
});

// 음원의 끝까지 재생되면 슬라이더 값 초기화
audioPlayer.addEventListener("ended", function() {
    audioRangeSlider.value = 0; // 종료되면 슬라이더를 처음 위치로 되돌림
});

audioPlayer.addEventListener('play', function() {
    lastHintShown = false; // 음원이 시작될 때마다 마지막 힌트 여부 초기화
});


// 재생/일시 정지 토글
function togglePlay() {
    if (audioPlayer.paused) {
        audioPlayer.play().then(() => {
            // 재생 성공 시 버튼 아이콘 변경
            playButton.textContent = "⏸︎"; // 일시 정지 아이콘
        }).catch(error => {
            // 자동 재생 제한 시 오류 처리
            console.error("오디오 재생 오류:", error);
            alert("브라우저 설정으로 인해 자동 재생이 제한될 수 있습니다. 버튼을 다시 눌러주세요.");
        });
    } else {
        audioPlayer.pause();
        playButton.textContent = "▶︎"; // 재생 아이콘
    }
}

// 이벤트 리스너 추가
playButton.addEventListener("click", togglePlay);
startButton.addEventListener("click", startEvent);
