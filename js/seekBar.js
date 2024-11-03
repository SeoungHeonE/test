const audioPlayer = document.getElementById("audioPlayer");
const lyricsSeekBar = document.getElementById("lyricsSeekBar");

// 음악이 로드될 때 진행바의 최대값을 설정
audioPlayer.addEventListener("loadedmetadata", () => {
    lyricsSeekBar.max = audioPlayer.duration; // 오디오의 전체 길이를 최대값으로 설정
});

// 진행바의 값이 변경될 때 음악의 현재 시간을 설정
lyricsSeekBar.addEventListener("input", () => {
    audioPlayer.currentTime = lyricsSeekBar.value;
});

// 음악의 현재 시간이 변경될 때 진행바의 값을 업데이트
audioPlayer.addEventListener("timeupdate", () => {
    lyricsSeekBar.value = audioPlayer.currentTime;
});

