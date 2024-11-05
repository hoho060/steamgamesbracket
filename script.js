// 버튼 클릭 시 토너먼트를 시작하는 기능
document.getElementById('start-tournament').addEventListener('click', () => {
    alert('토너먼트를 시작합니다!');
});

// 게임 목록에 게임 추가 기능
document.getElementById('add-game').addEventListener('click', () => {
    const gameInput = document.getElementById('game-input');
    const gameName = gameInput.value.trim(); // 입력값을 가져옴

    if (gameName) { // 입력값이 비어 있지 않으면
        const gameList = document.getElementById('game-list').getElementsByTagName('ul')[0];
        const newGameItem = document.createElement('li'); // 새로운 리스트 아이템 생성
        newGameItem.textContent = gameName; // 입력값을 리스트 아이템에 추가
        gameList.appendChild(newGameItem); // 게임 목록에 추가

        gameInput.value = ''; // 입력 필드 초기화
    } else {
        alert('게임 이름을 입력하세요!'); // 입력값이 없으면 알림
    }
});