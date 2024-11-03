// HTML 요소 선택
const lyricsOverlay = document.getElementById("lyricsOverlay");
const closeLyricsButton = document.getElementById("closeLyrics");
const toggleLyricsButton = document.getElementById("toggleLyricsButton");

// 가사 데이터 (시간과 텍스트)
const lyricsData = [
    { time: 0, text: ["♬"] },
    { time: 25.5, text: ["過ぎてゆくんだ今日も", "스기테유쿤다 쿄오모", "오늘도 지나가네"] },
    { time: 28, text: ["この寿命の通りに", "코노 주묘오노 토오리니", "이 생명의 통례로"] },
    { time: 31, text: ["限りある数字が減るように", "카기리 아루 스우지기 헤루요오니", "한정된 숫자가 줄어드는 것처럼"] },
    { time: 34, text: ["美しい数字が増えるように", "우츠쿠시이 스우지가 후에루요오니", "아름다운 숫자가 늘어나길"] },
    { time: 38.4, text: ["思い出の宝庫", "오모이데노 호오코", "추억의 보물창고"] },
    { time: 40.8, text: ["古いものは棚の奥に", "후루이모노와 타나노 오쿠니", "낡은 것들은 선반 안쪽에 둘게"] },
    { time: 43.8, text: ["埃を被っているのに", "호코리오 카붓테이루노니", "먼지를 뒤집어쓰고 있지만"] },
    { time: 47, text: ["誇りが光って見えるように", "호코리가 히캇테 미에루요오니", "그 먼지(긍지)가 빛나 보이도록"] },
    { time: 50.6, text: ["されど", "사레도", "하지만"] },
    { time: 51.4, text: ["By my side"] },
    { time: 52.4, text: ["不安 喝采 連帯", "후안 캇사이 렌타이", "불안 응원 연대"] },
    { time: 54.2, text: ["濁ったりの安全地帯", "니곳타리노 안젠치다이", "흐린 안전지대"] },
    { time: 57.3, text: ["グワングワンになる", "구완구완니나루", "머리가 빙빙 도는 듯한"] },
    { time: 59, text: ["朝方の倦怠感", "아사가타노 켄타이칸", "아침의 권태감"] },
    { time: 61, text: ["三番ホーム 準急電車", "산반 호오무 주큐우텐샤", "3번 홈의 준급행열차"] },
    { time: 64, text: ["青に似た", "아오니 니타", "푸름을 닮은"] },
    { time: 64.8, text: ["すっぱい春とライラック", "슷파이 하루토 라이락쿠", "새콤한 봄과 라일락"] },
    { time: 67.2, text: ["君を待つよ ここでね", "키미오 마츠요 코코데네", "너를 기다리고 있어 여기에서"] },
    { time: 70.4, text: ["痛みだす人生単位の傷も", "이타미다스 진세탄이노 키즈모", "아파오는 인생 단위의 상처도"] },
    { time: 73.8, text: ["愛おしく思いたい", "이토오시쿠오모이타이", "사랑스럽게 여기고 싶어"] },
    { time: 76.3, text: ["探す宛ても無いのに", "사가스아테모 나이노니", "찾을 곳도 없지만"] },
    { time: 79, text: ["忘れてしまう僕らは", "와스레테시마우 보쿠라와", "잊어버리고 마는 우리들은"] },
    { time: 83, text: ["何を経て 何を得て", "나니오헤테 나니오에테", "무엇을 거쳐 무엇을 얻어"] },
    { time: 85.3, text: ["大人になってゆくんだろう", "오토나니낫테유쿤다로오", "어른이 되어가는걸까"] },
    { time: 89, text: ["♬"] },
];


let lyricsIndex = 0; // 현재 가사 인덱스

// 가사 오버레이를 표시하는 함수
function showLyricsOverlay() {
    lyricsOverlay.classList.add("show");
    lyricsIndex = 0; // 가사 인덱스 초기화
    audioPlayer.addEventListener("timeupdate", updateLyrics);
}

// 가사 오버레이를 닫는 함수
function hideLyricsOverlay() {
    lyricsOverlay.classList.remove("show");
    lyricsText.textContent = ""; // 가사 초기화
    audioPlayer.removeEventListener("timeupdate", updateLyrics);
}

// 현재 시간에 맞는 가사로 업데이트하는 함수
function updateLyrics() {
    if (lyricsIndex < lyricsData.length && audioPlayer.currentTime >= lyricsData[lyricsIndex].time) {
        const lines = lyricsData[lyricsIndex].text;
        lyricsText.innerHTML = lines.map(line => `<span style="color: white;">${line}</span>`).join('<br>'); // 줄바꿈 추가
        lyricsIndex++;
    } else {
        if (lyricsIndex > 0) {
            const lines = lyricsData[lyricsIndex - 1].text;
            lyricsText.innerHTML = lines.map(line => `<span style="color: white;">${line}</span>`).join('<br>'); // 이전 가사 표시
        }
    }
}


// 버튼에 이벤트 리스너 추가
toggleLyricsButton.addEventListener("click", showLyricsOverlay);
closeLyricsButton.addEventListener("click", hideLyricsOverlay);














