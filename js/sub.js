window.addEventListener('load', function() {
    alert("아니! 여기까지 오다니 대단한걸~");
    alert("여기는 그냥 내가 사소하게 준비해본 공간?");
    alert("간단하게 내가 누나한테 전하는 말이라고 생각해주면 돼");
    alert("노래를 들으며 조용히 감상해줘??????");
    alert("내가 준비한 노래는..");
});




// HTML 요소 선택
const audioPlayer = document.getElementById("audioPlayer");
const lyricsText = document.getElementById("lyricsText");
const playButton = document.getElementById("playButton");

// 음원의 길이를 기준으로 슬라이더의 범위를 설정
const audioRangeSlider = document.getElementById("audioRangeSlider");
// HTML 요소 선택
const currentTimeDisplay = document.getElementById("currentTime");
const totalTimeDisplay = document.getElementById("totalTime");



// 시간 형식 변환 함수
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
}

// 음원의 길이가 로드되었을 때 슬라이더 범위 설정
audioPlayer.addEventListener("loadedmetadata", function () {
    // 음원의 길이를 가져와 슬라이더의 최대값을 설정
    audioRangeSlider.max = audioPlayer.duration; // 총 시간 표시
});

// 슬라이더의 값이 변경될 때마다 음원의 시간을 변경
audioRangeSlider.addEventListener("input", function () {
    audioPlayer.currentTime = audioRangeSlider.value;
});

// 음원의 시간이 변경될 때마다 슬라이더의 값을 업데이트
audioPlayer.addEventListener("timeupdate", function () {
    // 현재 재생 중인 시간에 맞게 슬라이더 값을 갱신
    audioRangeSlider.value = audioPlayer.currentTime;
    currentTimeDisplay.textContent = formatTime(audioPlayer.currentTime); // 현재 시간 표시
});

// 음원의 끝까지 재생되면 슬라이더 값 초기화
audioPlayer.addEventListener("ended", function () {
    audioRangeSlider.value = 0; // 종료되면 슬라이더를 처음 위치로 되돌림
});


// 이미지 요소 선택
const musicImage = document.querySelector(".music-image img");
// 현재 오디오가 재생 중인지 여부를 확인하는 변수
let isPlaying = false;

// 재생/일시 정지 토글
function togglePlay() {
    if (audioPlayer.paused && !isPlaying) {
        // 오디오와 비디오 동시에 재생
        audioPlayer.play().then(() => {
            playButton.textContent = "⏸︎"; // 일시 정지 아이콘
            musicPlayerPopup.classList.add("collapsed"); // 팝업 축소

            // 이미지와 가사 요소 페이드 인
            document.querySelector(".music-image").classList.add("show");
            document.getElementById("albumName").classList.add("show");
            document.getElementById("artistName").classList.add("show");
            document.getElementById("sliderProgress").classList.add("show");
            document.getElementById("imagePlayer").classList.add("show");
            // 재생 상태를 true로 설정
            isPlaying = true;
        }).catch(error => {
            console.error("오디오 재생 오류:", error);
            alert("브라우저 설정으로 인해 자동 재생이 제한될 수 있습니다. 버튼을 다시 눌러주세요.");
        });
    } else if (!audioPlayer.paused && isPlaying) {
        // 음원 일시 정지
        audioPlayer.pause();
        playButton.textContent = "▶︎"; // 재생 아이콘
        musicPlayerPopup.classList.remove("collapsed"); // 팝업 원래 크기로 돌아옴

        // 재생 상태를 false로 설정
        isPlaying = false;
    }
}

// 이벤트 리스너 추가
playButton.addEventListener("click", togglePlay);



// 팝업 크기 복원
musicPlayerPopup.addEventListener("click", function(event) {
    // 클릭된 요소가 이미지가 아니라면, 팝업 크기 복원
    if (event.target !== musicImage && !musicImage.contains(event.target)) {
        musicPlayerPopup.classList.remove("collapsed"); // 팝업 원래 크기로 복원
    }
});


// 이벤트 리스너 추가
playButton.addEventListener("click", togglePlay);
















// window.addEventListener('load', function() {
//     alert("아니! 여기까지 오다니 대단한걸~");
//     alert("여기는 그냥 내가 사소하게 준비해본 공간?");
//     alert("간단하게 내가 누나한테 전하는 말이라고 생각해주면 돼");
//     alert("노래를 들으며 조용히 감상해줘??????");
//     alert("내가 준비한 노래는..");
// });




// HTML 요소 선택
// const audioPlayer = document.getElementById("audioPlayer");
// const videoPlayer = document.querySelector("video");
// const lyricsText = document.getElementById("lyricsText");
// const playButton = document.getElementById("playButton");

// // 음원의 길이를 기준으로 슬라이더의 범위를 설정
// const audioRangeSlider = document.getElementById("audioRangeSlider");
// // HTML 요소 선택
// const currentTimeDisplay = document.getElementById("currentTime");
// const totalTimeDisplay = document.getElementById("totalTime");



// // 시간 형식 변환 함수
// function formatTime(seconds) {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = Math.floor(seconds % 60);
//     return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
// }

// // 음원의 길이가 로드되었을 때 슬라이더 범위 설정
// audioPlayer.addEventListener("loadedmetadata", function () {
//     // 음원의 길이를 가져와 슬라이더의 최대값을 설정
//     audioRangeSlider.max = audioPlayer.duration; // 총 시간 표시
// });

// // 슬라이더의 값이 변경될 때마다 음원의 시간을 변경
// audioRangeSlider.addEventListener("input", function () {
//     audioPlayer.currentTime = audioRangeSlider.value;
// });

// // 음원의 시간이 변경될 때마다 슬라이더의 값을 업데이트
// audioPlayer.addEventListener("timeupdate", function () {
//     // 현재 재생 중인 시간에 맞게 슬라이더 값을 갱신
//     audioRangeSlider.value = audioPlayer.currentTime;
//     currentTimeDisplay.textContent = formatTime(audioPlayer.currentTime); // 현재 시간 표시
// });

// // 음원의 끝까지 재생되면 슬라이더 값 초기화
// audioPlayer.addEventListener("ended", function () {
//     audioRangeSlider.value = 0; // 종료되면 슬라이더를 처음 위치로 되돌림
// });


// // 이미지 요소 선택
// const musicImage = document.querySelector(".music-image img");
// // 현재 오디오가 재생 중인지 여부를 확인하는 변수
// let isPlaying = false;

// // 재생/일시 정지 토글
// function togglePlay() {
//     if (audioPlayer.paused && !isPlaying) {
//         // 오디오와 비디오 동시에 재생
//         audioPlayer.play().then(() => {
//             videoPlayer.play(); // 비디오 재생
//             playButton.textContent = "⏸︎"; // 일시 정지 아이콘
//             musicPlayerPopup.classList.add("collapsed"); // 팝업 축소

//             // 이미지와 가사 요소 페이드 인
//             document.querySelector(".music-image").classList.add("show");
//             document.getElementById("albumName").classList.add("show");
//             document.getElementById("artistName").classList.add("show");
//             document.getElementById("sliderProgress").classList.add("show");

//             // 재생 상태를 true로 설정
//             isPlaying = true;
//         }).catch(error => {
//             console.error("오디오 재생 오류:", error);
//             alert("브라우저 설정으로 인해 자동 재생이 제한될 수 있습니다. 버튼을 다시 눌러주세요.");
//         });
//     } else if (!audioPlayer.paused && isPlaying) {
//         // 음원 일시 정지
//         audioPlayer.pause();
//         videoPlayer.pause(); // 비디오 정지
//         playButton.textContent = "▶︎"; // 재생 아이콘
//         musicPlayerPopup.classList.remove("collapsed"); // 팝업 원래 크기로 돌아옴

//         // 재생 상태를 false로 설정
//         isPlaying = false;
//     }
// }

// // 이벤트 리스너 추가
// playButton.addEventListener("click", togglePlay);



// // 팝업 크기 복원
// musicPlayerPopup.addEventListener("click", function(event) {
//     // 클릭된 요소가 이미지가 아니라면, 팝업 크기 복원
//     if (event.target !== musicImage && !musicImage.contains(event.target)) {
//         musicPlayerPopup.classList.remove("collapsed"); // 팝업 원래 크기로 복원
//     }
// });


// // 이벤트 리스너 추가
// playButton.addEventListener("click", togglePlay);