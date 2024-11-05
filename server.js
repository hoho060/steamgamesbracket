const express = require('express');
const axios = require('axios');
const session = require('express-session'); // 세션 관리를 위한 패키지
const app = express();
const port = 3000; // 원하는 포트 번호로 설정

app.use(session({ secret: 'your_secret_key', resave: false, saveUninitialized: true }));
app.use(express.static('public')); // public 폴더에서 정적 파일 제공

// API 키와 Steam ID 가져오기
const STEAM_API_KEY = 'C25F968E9DCFA3C75952CBBFD1B15911'; // 실제 API 키 사용

// 게임 목록 가져오기
app.get('/api/games', (req, res) => {
    const steamId = req.session.steamId; // 세션에서 Steam ID 가져오기
    axios.get(`http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${STEAM_API_KEY}&steamid=${steamId}&include_appinfo=true&include_played_free_games=true`)
        .then(response => {
            const games = response.data.response.games;
            res.json(games); // 클라이언트에 게임 목록 전달
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('게임 목록을 가져오는 데 실패했습니다.');
        });
});

// 서버 시작
app.listen(port, () => {
    console.log(`서버가 http://localhost:${port}에서 실행 중입니다.`);
});
