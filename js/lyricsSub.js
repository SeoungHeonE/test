// HTML 요소 선택
const lyricsOverlay = document.getElementById("lyricsOverlay");

// 가사 데이터 (시간과 텍스트)
const lyricsData = [
    { time: 2, text: ["어때, 좀 색달랐어?"] },
    { time: 5, text: ["이렇게 생일 축하를 신박하게 해줬던 사람이 있었을까??"] },
    { time: 8, text: ["있었으면 유감이고,,"] },
    { time: 10, text: ["없었으면 완전 럭키비키자나ㅋㅋㅋ"] },
    { time: 13, text: ["누나한테도 특별해졌으면 좋겠다"] },
    { time: 16, text: ["내가 지금까지 많은 사람의 생일을 축하해왔지만"] },
    { time: 19, text: ["이렇게 열심히 준비한 적은 없는 것 같아"] },
    { time: 22, text: ["내가 이렇게까지 준비한 이유는"] },
    { time: 25, text: ["누나가 내 바운더리안에 있기 때문이기도하고"] },
    { time: 28, text: ["내 주변인은 특별했으면 좋겠어서"] },
    { time: 31, text: ["그 외에 더 많은 이유들이 있지만"] },
    { time: 34, text: ["내가 이렇게까지 준비한 이유는"] },
    { time: 37, text: ["요게 제일 대표적이라고 볼 수 있겠다ㅎㅎ"] },
    { time: 40, text: ["작년에 누나가 먼저 오글거린답시고"] },
    { time: 43, text: ["친구로서 많이 좋아하고 아낀다고 말해줬을 때"] },
    { time: 46, text: ["내가 얼마나 감동했는지 알아?"] },
    { time: 49, text: ["이 사람은 내 진심을 봐주는 사람인가하고"] },
    { time: 52, text: ["정말 고민도 많이하고 생각도 많이 했지"] },
    { time: 55, text: ["고민을 한 이유는 사람을 겉으로만 사귀는게 내 성격이 문제여서"] },
    { time: 58, text: ["사람을 겉으로만 사귀는게 내 성격이 문제야"] },
    { time: 61, text: ["그리고 사람을 잘 안믿거든"] },
    { time: 64, text: ["그런데 내 바운더리에 넣어보기로 결정했지"] },
    { time: 67, text: ["나는 이 선택 후회 안할 것 같아"] },
    { time: 70, text: ["오글거리겠지만 오늘은 내가 먼저 할게 그냥 들어줘"] },
    { time: 73, text: ["누나는 나한테 친구 이상의 존재?ㅋㅋㅋ"] },
    { time: 76, text: ["진쟈 그렇게 생각해"] },
    { time: 79, text: ["내가 그래서 진심으로 마음을 연 친구들한테는"] },
    { time: 82, text: ["상처를 많이 받기도해"] },
    { time: 85, text: ["그래서 이번에 그랬던거 같아 아직도 미안하넹.."] },
    { time: 88, text: ["누나도 진쟈 바운더리 안에 넣기에 많은 고민을 했을텐데~"] },
    { time: 92, text: ["아직 많이 모자란 나를 넣어줘서 너무 고마워"] },
    { time: 95, text: ["항상 고마워하며 진심을 다 할거야"] },
    { time: 98, text: ["그러니까 누나도 필라테스 일이 더 능숙해지고"] },
    { time: 101, text: ["몸이 힘들지 않을 때 연락도 조금씩 해줘"] },
    { time: 104, text: ["언제나 반갑게 인사해주고"] },
    { time: 107, text: ["스트레스 풀 수 있게 해줄게"] },
    { time: 110, text: ["건설적인 대화도 좋지만"] },
    { time: 113, text: ["어쩔땐 영양가 없는 타인을 위한 가벼운 대화 하나가"] },
    { time: 116, text: ["하루를 버틸 수 있는 원동력이 될 수 있어"] },
    { time: 119, text: ["나도 이런 힘이 되어주는 사람이 옆에 있으면 좋겠다는 바램에"] },
    { time: 122, text: ["내가 원하기 이전에 누군가에게 그런 사람이 되어보자 해서"] },
    { time: 125, text: ["시간 틈틈이 쪼개서 누나를 위한 웹을 만들어봤어"] },
    { time: 128, text: ["이 웹은 영원히 둘 거니까,"] },
    { time: 131, text: ["그러니까 응원받고 싶거나 울고 싶고 힘이들 때"] },
    { time: 134, text: ["이 웹에 들어와서 위로를 받고 힘을 냈을면 좋겠어"] },
    { time: 137, text: ["힘이 나지 않을까?"] },
    { time: 139, text: ["나도 이런걸 받는다면 진짜 너무 힘이 됐을거 같아"] },
    { time: 142, text: ["오늘도 나한테 힐링 받고 가는 하루가 됐으면 좋겠다."] },
    { time: 145, text: ["자, 이제 마무리 지어야겠지"] },
    { time: 147, text: ["우리가 처음 만났던 공간에서 이 노래를 마지막으로"] },
    { time: 150, text: ["이 말은 해주고 싶어요"] },
    { time: 156.2, text: ["예쁜 꿈을 꾸라고"] },
];

let lyricsIndex = 0; // 현재 가사 인덱스

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

    if (currentIndex !== lyricsIndex) {
        lyricsIndex = currentIndex; // 가사 인덱스를 최신화
        
        // lyricsData[lyricsIndex]가 존재하지 않는 경우를 처리
        const lines = lyricsData[lyricsIndex] ? lyricsData[lyricsIndex].text : [];

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

// 슬라이더가 조정될 때, 오디오 시간을 동기화
audioRangeSlider.addEventListener("input", function () {
    const newTime = (audioRangeSlider.value / 100) * audioPlayer.duration; // 슬라이더 값에 비례한 시간을 계산

    // 오디오 시간을 슬라이더 값에 맞게 설정
    audioPlayer.currentTime = newTime;  // 계산된 시간으로 이동

    // 슬라이더 조작 시 팝업 축소
    musicPlayerPopup.classList.add("collapsed");
    updateLyrics(); // 가사 업데이트

    // 슬라이더를 통해 재생 시작 시 이미지와 텍스트가 나타나도록 처리
    if (!isPlaying) {
        musicPlayerPopup.classList.remove("collapsed"); // 팝업 확장
        document.querySelector(".music-image").classList.add("show");
        document.getElementById("albumName").classList.add("show");
        document.getElementById("artistName").classList.add("show");
        document.getElementById("sliderProgress").classList.add("show");
        document.getElementById("playerImg").classList.add("show");

        // 상태를 true로 변경하여 이미지와 텍스트가 재생 상태에 따라 보이도록
        isPlaying = true;
        playButton.textContent = "⏸︎"; // 일시 정지 아이콘
    }
});




// 버튼에 이벤트 리스너 추가
document.querySelector('#audioRangeSlider').addEventListener('click', function() {
    const newTime = (audioRangeSlider.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = newTime;  // 클릭된 위치로 시간 설정
    audioPlayer.play(); // 재생 시작
});


document.getElementById('albumName').innerText = "Sweet Dreams, My Dear";
document.getElementById('artistName').innerText = "소향"; 




    // { time: 22, text: ["내가 이렇게까지 준비한 이유는"] },
    // { time: 25, text: ["누나가 내 바운더리안에 있기 때문이기도하고"] },
    // { time: 28, text: ["내 주변인은 특별했으면 좋겠어서"] },
    // { time: 31, text: ["그 외에 더 많은 이유들이 있지만"] },
    // { time: 34, text: ["내가 이렇게까지 준비한 이유는"] },
    // { time: 37, text: ["요게 제일 대표적이라고 볼 수 있겠다ㅎㅎ"] },
    // { time: 40, text: ["작년에 누나가 먼저 오글거린답시고"] },
    // { time: 43, text: ["친구로서 많이 좋아하고 아낀다고 말해줬을 때"] },
    // { time: 46, text: ["내가 얼마나 감동했는지 알아?"] },
    // { time: 49, text: ["이 사람은 내 진심을 봐주는 사람인가하고"] },
    // { time: 52, text: ["정말 고민도 많이하고 생각도 많이 했지"] },
    // { time: 55, text: ["고민을 한 이유는 사람을 겉으로만 사귀는게 내 성격이 문제여서"] },
    // { time: 58, text: ["사람을 겉으로만 사귀는게 내 성격이 문제야"] },
    // { time: 61, text: ["그리고 사람을 잘 안믿거든"] },
    // { time: 64, text: ["그런데 내 바운더리에 넣어보기로 결정했지"] },
    // { time: 67, text: ["나는 이 선택 후회 안할 것 같아"] },
    // { time: 70, text: ["오글거리겠지만 오늘은 내가 먼저 할게 그냥 들어줘"] },
    // { time: 73, text: ["누나는 나한테 친구 이상의 존재?ㅋㅋㅋ"] },
    // { time: 76, text: ["진쟈 그렇게 생각해"] },
    // { time: 79, text: ["내가 그래서 진심으로 마음을 연 친구들한테는"] },
    // { time: 82, text: ["상처를 많이 받기도해"] },
    // { time: 85, text: ["그래서 이번에 그랬던거 같아 아직도 미안하넹.."] },
    // { time: 88, text: ["누나도 진쟈 바운더리 안에 넣기에 많은 고민을 했을텐데~"] },
    // { time: 92, text: ["아직 많이 모자란 나를 넣어줘서 너무 고마워"] },
    // { time: 95, text: ["항상 고마워하며 진심을 다 할거야"] },
    // { time: 98, text: ["그러니까 누나도 필라테스 일이 더 능숙해지고"] },
    // { time: 101, text: ["몸이 힘들지 않을 때 연락도 조금씩 해줘"] },
    // { time: 104, text: ["언제나 반갑게 인사해주고"] },
    // { time: 107, text: ["스트레스 풀 수 있게 해줄게"] },
    // { time: 110, text: ["건설적인 대화도 좋지만"] },
    // { time: 113, text: ["어쩔땐 영양가 없는 타인을 위한 가벼운 대화 하나가"] },
    // { time: 116, text: ["하루를 버틸 수 있는 원동력이 될 수 있어"] },
    // { time: 119, text: ["나도 이런 힘이 되어주는 사람이 옆에 있으면 좋겠다는 바램에"] },
    // { time: 122, text: ["내가 원하기 이전에 누군가에게 그런 사람이 되어보자 해서"] },
    // { time: 125, text: ["시간 틈틈이 쪼개서 누나를 위한 웹을 만들어봤어"] },
    // { time: 128, text: ["이 웹은 영원히 둘 거니까,"] },
    // { time: 131, text: ["그러니까 응원받고 싶거나 울고 싶고 힘이들 때"] },
    // { time: 134, text: ["이 웹에 들어와서 위로를 받고 힘을 냈을면 좋겠어"] },
    // { time: 137, text: ["힘이 나지 않을까?"] },
    // { time: 139, text: ["나도 이런걸 받는다면 진짜 너무 힘이 됐을거 같아"] },
    // { time: 142, text: ["오늘도 나한테 힐링 받고 가는 하루가 됐으면 좋겠다."] },
    // { time: 145, text: ["자, 이제 마무리 지어야겠지"] },
    // { time: 147, text: ["우리가 처음 만났던 공간에서 이 노래를 마지막으로"] },
    // { time: 150, text: ["이 말은 해주고 싶어요"] },
    // { time: 156.2, text: ["예쁜 꿈을 꾸라고"] },