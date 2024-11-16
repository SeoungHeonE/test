// HTML 요소 선택
const lyricsOverlay = document.getElementById("lyricsOverlay");
const closeLyricsButton = document.getElementById("closeLyrics");
const toggleLyricsButton = document.getElementById("toggleLyricsButton");
const lyricsVolumeSlider = document.getElementById("lyricsVolumeSlider");
const playPauseButton = document.getElementById("playPauseButton");


// 음원 플레이어 요소 선택
const musicPlayerPopup = document.getElementById("musicPlayerPopup"); // musicPlayerPopup 요소 선택
const answersSummaryPopup = document.getElementById("answersSummaryPopup");

// 음원 플레이어 팝업 클릭 시 collapsed 클래스 토글
musicPlayerPopup.addEventListener('click', function(event) {
    // 전체 음원 플레이어 팝업을 클릭한 경우에만 collapsed 클래스 추가
    musicPlayerPopup.classList.toggle('collapsed');
    answersSummaryPopup.classList.toggle('moved');
});

// 음원 플레이어 내부의 특정 요소들에서 클릭 이벤트 전파 방지
const musicImage = document.querySelector('.music-image');
const controls = document.querySelector('.controls');

// 내부 클릭 시 collapsed 클래스가 토글되지 않도록 이벤트 전파 차단
musicImage.addEventListener('click', function(event) {
    event.stopPropagation(); // 클릭 이벤트 전파 방지
});

controls.addEventListener('click', function(event) {
    event.stopPropagation(); // 클릭 이벤트 전파 방지
});

// 가사 보기 버튼 클릭 시 음원 플레이어 축소 및 가사 오버레이 표시
toggleLyricsButton.addEventListener('click', function(event) {
    event.stopPropagation(); // 클릭 이벤트 전파 방지 (이벤트 버블링 방지)
    musicPlayerPopup.classList.add('collapsed'); // 음원 플레이어 축소
    showLyricsOverlay(); // 가사 오버레이 표시
});

// X 버튼 클릭 시 음원 플레이어 원래 스타일로 복구 및 가사 오버레이 숨김
closeLyricsButton.addEventListener('click', function() {
    musicPlayerPopup.classList.remove('collapsed'); // 음원 플레이어 원래 크기로 복원
    hideLyricsOverlay(); // 가사 오버레이 숨김
});


// 가사 데이터 (시간과 텍스트)
const lyricsData = [
    { time: 0, text: ["♬"] },
    { time: 12.7, text: ["있잖아 나는 말야"] },
    { time: 15.7, text: ["아주 작은 별을 보았어"] },
    { time: 18.8, text: ["너와 나를 이어주던 그 빛 yeah"] },
    { time: 25, text: ["그래서 나는 말야"] },
    { time: 27.6, text: ["너를 찾아 여행을 떠난 거야"] },
    { time: 30.5, text: ["조각난 별의 숨소리에 mm"] },
    { time: 37, text: ["들려주고 싶었어"] },
    { time: 39.8, text: ["뛰는 심장 소릴"] },
    { time: 42.5, text: ["또 멈춰버릴까 두려워져"] },
    { time: 48.7, text: ["조금씩 나를 비추는"] },
    { time: 51.4, text: ["그 따스한 빛을 따라"] },
    { time: 54.5, text: ["내 맘이 너에게 닿기를"] },
    { time: 60, text: ["캄캄한 밤"] },
    { time: 62, text: ["별빛을 따라 너에게 갈게"] },
    { time: 66.6, text: ["멈춘 시간을 넘어"] },
    { time: 71, text: ["쉬지 않고 달려"] },
    { time: 72.8, text: ["숨이 차오르면"] },
    { time: 75.6, text: ["너를 만나게 되면"] },
    { time: 78.8, text: ["꼭 말해줄래 이렇게"] },
    { time: 83, text: ["happy birthday"] },
    { time: 91.4, text: ["조그만 빛을 따라"] },
    { time: 94, text: ["그 머나먼 어둠 속을 헤매다"] },
    { time: 97.6, text: ["눈을 감고 너를 그릴 때 mm"] },
    { time: 104, text: ["잊고 싶지 않았어"] },
    { time: 106.8, text: ["소중했던 맘이"] },
    { time: 109.6, text: ["다 사라지는 게 두려워서"] },
    { time: 115.7, text: ["여전히 나를 비추는"] },
    { time: 118, text: ["그 오래된 빛을 따라"] },
    { time: 121, text: ["내 맘이 너에게 닿기를"] },
    { time: 127, text: ["캄캄한 밤"] },
    { time: 129.2, text: ["별빛을 따라 너에게 갈게"] },
    { time: 133.7, text: ["멈춘 시간을 넘어"] },
    { time: 138, text: ["쉬지 않고 달려"] },
    { time: 140, text: ["숨이 차오르면 "] },
    { time: 142, text: ["너를 만나게 되면"] },
    { time: 145.7, text: ["꼭 말해줄래 이렇게 내게"] },
    { time: 152, text: ["♬"] },
    { time: 156, text: ["이 숫자의 힌트는 팔진수 23, 십육진수 13 이진수는 10011입니다."] },
    { time: 160, text: ["꼭 마지막까지 가사와 함께 노래를 들어주세요."] },
    { time: 164, text: ["사실은 말야 조금 겁이 나"] },
    { time: 170, text: ["아직 자라지 못한 맘이"] },
    { time: 176.2, text: ["고장 난 시계처럼 난 움직일 수가 없어서"] },
    { time: 182.2, text: ["자꾸 너만 찾게 되는 걸"] },
    { time: 187.8, text: ["캄캄한 밤"] },
    { time: 189.5, text: ["네 빛을 따라 너에게 갈게"] },
    { time: 194, text: ["긴긴 어둠을 건너"] },
    { time: 198.8, text: ["쉬지 않고 달려"] },
    { time: 200.8, text: ["숨이 차오르면 "] },
    { time: 203.3, text: ["정말 만나게 되면"] },
    { time: 206.5, text: ["꼭 말해줄래 이렇게"] },
    { time: 210.8, text: ["happy birthday"] },
];



let lyricsIndex = 0; // 현재 가사 인덱스
let lyricsOverlayVisible = false; // 가사 오버레이가 표시된 상태인지 확인하는 변수


// 가사 데이터를 찾는 함수
function findCurrentLyricsIndex(currentTime) {
    for (let i = 0; i < lyricsData.length; i++) {
        if (currentTime < lyricsData[i].time) {
            return i - 1; // 이전 가사를 출력
        }
    }
    return lyricsData.length - 1; // 마지막 가사 인덱스를 반환
}


// 현재 시간에 맞는 가사를 업데이트하는 함수
function updateLyrics() {
    const currentIndex = findCurrentLyricsIndex(audioPlayer.currentTime);
    const hintNotification = document.getElementById("hintNotification"); // 힌트 알림 요소
    const lyricsHintButton = document.getElementById("lyricsHintButton"); // 힌트보기 버튼

    if (currentIndex !== lyricsIndex) {
        lyricsIndex = currentIndex; // 가사 인덱스를 최신화
        const lines = lyricsData[lyricsIndex].text;

        // "마지막 힌트" 가사 체크
        if (lyricsData[lyricsIndex].text[0].includes("이 숫자의 힌트는 팔진수 23") && lyricsOverlayVisible) {
            // 마지막 힌트가 화면에 표시됨
            if (lyricsHintButton.style.display === "block") {
                lastHintShown = true; // 힌트보기 버튼이 보일 때만 lastHintShown을 true로 설정
                hintNotification.style.display = "block"; // 힌트 알림 표시
            }
        }

        // 이전, 현재, 이후 가사들을 가져온다
        const previousLines = lyricsData[lyricsIndex - 1] ? lyricsData[lyricsIndex - 1].text : [];
        const nextLines = lyricsData[lyricsIndex + 1] ? lyricsData[lyricsIndex + 1].text : [];

        // 새로운 가사 HTML 생성
        const allLyrics = [
            ...previousLines.map(line => `<span class="previous-lyric">${line}</span>`),
            ...lines.map(line => `<span class="current-lyric">${line}</span>`),
            ...nextLines.map(line => `<span class="next-lyric">${line}</span>`),
        ];

        // lyricsText 업데이트
        lyricsText.innerHTML = allLyrics.join('<br>');
    }

    // 힌트보기 버튼이 보이지 않으면 lastHintShown을 false로 설정
    if (lyricsHintButton.style.display === "none") {
        lastHintShown = false;
    }
}





// 가사 오버레이를 표시하는 함수
function showLyricsOverlay() {
    lyricsOverlay.classList.add("show");
    lyricsOverlayVisible = true; // 가사 오버레이가 표시된 상태로 설정
    lyricsIndex = findCurrentLyricsIndex(audioPlayer.currentTime); // 현재 시간에 맞는 가사 인덱스 찾기
    updateLyrics(); // 현재 가사를 즉시 업데이트
    audioPlayer.addEventListener("timeupdate", updateLyrics); // timeupdate 이벤트 추가
}

// 가사 오버레이를 숨기는 함수
function hideLyricsOverlay() {
    lyricsOverlay.classList.remove("show");
    lyricsText.textContent = ""; // 가사 초기화
    audioPlayer.removeEventListener("timeupdate", updateLyrics);
    lyricsOverlayVisible = false; // 가사 오버레이가 숨겨졌으므로 상태 변경
}

// 음원의 시간이 변경될 때마다 슬라이더 값 업데이트
audioPlayer.addEventListener("timeupdate", function() {
    if (audioPlayer.duration > 0) {
        // 현재 시간을 바탕으로 슬라이더 값 갱신
        const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        audioRangeSlider.value = progress;
        sliderProgress.style.width = progress + '%'; // 진행 상태 바의 width 업데이트
    }
    updateLyrics(); // 시간이 갱신될 때마다 가사 업데이트
});

// 슬라이더의 값이 변경될 때마다 음원의 시간을 변경
audioRangeSlider.addEventListener("input", function() {
    audioPlayer.currentTime = audioRangeSlider.value;
    lyricsIndex = findCurrentLyricsIndex(audioPlayer.currentTime); // 슬라이더 이동 시 가사 동기화
    updateLyrics(); // 새로 동기화된 가사 표시
});


// 재생/일시 정지 토글
function togglePlayPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseButton.textContent = "⏸︎";
    } else {
        audioPlayer.pause();
        playPauseButton.textContent = "▶︎";
    }
}



// 버튼에 이벤트 리스너 추가
toggleLyricsButton.addEventListener("click", showLyricsOverlay);
closeLyricsButton.addEventListener("click", hideLyricsOverlay);


// 오디오 요소 선택
const audioRange = document.getElementById('audioRangeSlider');
const sliderProgress = document.getElementById('sliderProgress');
const volumeSlider = document.getElementById('volumeSlider');

// 음량 슬라이더 기능 추가
volumeSlider.addEventListener('input', function() {
    audioPlayer.volume = volumeSlider.value; // 음량을 슬라이더 값에 맞게 설정
});

// 오디오가 준비되었을 때, 슬라이더 최대값을 오디오의 총 길이로 설정
audioPlayer.addEventListener('loadedmetadata', function() {
    audioRange.max = 100; // 슬라이더의 최대값을 100으로 설정
});

// 오디오의 진행에 맞춰 슬라이더 업데이트
audioPlayer.addEventListener('timeupdate', function() {
    if (audioPlayer.duration > 0) { // 음원의 길이가 유효한 경우에만 실행
        const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        audioRange.value = progress;
        sliderProgress.style.width = progress + '%'; // 진행 상태 바의 width 업데이트
    }
    // 음원이 진행되면 플레이 버튼이 자동으로 "⏸︎"로 변경되도록 설정
    if (!audioPlayer.paused) {
        playButton.textContent = "⏸︎"; // 재생 아이콘으로 변경
    }
});

// 슬라이더 클릭 시, 오디오 위치 변경
audioRange.addEventListener('input', function() {
    const value = audioRange.value;
    audioPlayer.currentTime = (value / 100) * audioPlayer.duration;

    // 오디오가 진행될 때 플레이 버튼이 자동으로 "⏸︎"로 변경되도록 설정
    if (!audioPlayer.paused) {
        playButton.textContent = "⏸︎"; // 재생 아이콘으로 변경
    }
});

// 사용자 인터랙션으로 오디오 재생 (브라우저 보안 상 자동 재생이 제한될 수 있기 때문에)
document.querySelector('#audioRangeSlider').addEventListener('click', function() {
    audioPlayer.play(); // 클릭 시 오디오 재생 시작
});


document.getElementById('albumName').innerText = "내 마음이 너에게 닿기를";
document.getElementById('artistName').innerText = "경서";