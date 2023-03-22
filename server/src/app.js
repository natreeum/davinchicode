// 메인화면
const usernameInSession = window.sessionStorage.getItem('username');
if (usernameInSession) pageRoute('login', 'waitingRoom');
const usernameIn = qs('#in_username');
addClickEvent('btn_login', () => {
  const usernameIn_val = usernameIn.value;
  if (usernameIn_val.length === 0) return alert('You have to enter your name');
  window.sessionStorage.setItem('username', usernameIn_val);
  pageRoute('login', 'waitingRoom');
});

// 대기실
const greet_span = qs('#greetUser');
greet_span.innerHTML = `Hi ${window.sessionStorage.getItem('username')}!`;
addClickEvent('btn_logout', () => {
  window.sessionStorage.removeItem('username');
  pageRoute('waitingRoom', 'login');
});
addClickEvent('btn_createGameRoute', () => {
  pageRoute('waitingRoom', 'createGame');
});

// 방생성페이지
addClickEvent('btn_createGame', async () => {
  const newGame = await axios.post(`${network.combined()}/creategame`, {
    memAmount: 2,
    creatorId: sessionStorage.getItem('username'),
  });
  console.log(newGame.data.gameInfo);
});
addClickEvent('btn_main', () => {
  pageRoute('createGame', 'waitingRoom');
});

//방
