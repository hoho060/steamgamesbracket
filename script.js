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

let currentGame1 = "";
let currentGame2 = "";

//토너먼트 시작 기능
document.getElementById('start-tournament').addEventListener('click', () =>{
    const gameList = document.getElementById('game-list').getElementsByTagName('li');
    const games = Array.from(gameList).map(item => item.textContent); //게임 목록 가져오기

    if (games.length < 2) { // 게임이 2개 이상 있어야 매치 가능
        alert('토너먼트를 시작하려면 게임을 두 개 이상 추가하세요.');
        return;
    }

    // 랜덤으로 두 게임을 선택해서 매치업 생성
    currentGame1 = games[Math.floor(Math.random() * games.length)];
    let game2 = currentGame1;
    while (game2 === currentGame1) {
        game2 = games[Math.floor(Math.random() * games.length)];
    }
    currentGame2 = game2;


    //선택된 두 게임을 보여줌
    document.getElementById('matchup').innerHTML = `<p>${currentGame1} VS ${currentGame2}<p>`;
    document.getElementById('winner-selection').style.display = 'block'; // 승자 선택 버튼 보이기
});

// 승자 선택 기능
document.getElementById('select-winner-1').addEventListener('click', () => {
    alert(`${currentGame1}가 승리했습니다!`);
    document.getElementById('winner-selection').style.display = 'none'; // 버튼 숨기기
})

document.getElementById('select-winner-2').addEventListener('click', () => {
    alert(`${currentGame2}가 승리했습니다!`);
    document.getElementById('winner-selection').style.display = 'none'; // 버튼 숨기기
})
