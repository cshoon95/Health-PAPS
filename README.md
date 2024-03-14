gesg## HELATH PAPS API
📌 상태관리
```
hp.store.getState(); // data: 데이터 정보, view: 페이지 정보
```

<br/>

📌 state 값 조회
data를 기본값으로 조회
```
hp.getState('isLogin'); // true
```

view를 조회하고 싶으면 2번째 argument에 view를 입력
```
hp.getState('showAlertOptions', 'view'); // true
```

<br/>

📌 state 값 변경
```
hp.setState('isLogin', false); // false
```

<br/>

📌 alert
```
hp.alert('message', Options?);
```

```
➡️ Options
type?: 'alert' | 'confirmAlert'
title?: string
confirm?: string
cancel?: string
color?: 'error' | 'info' | 'success' | 'warning'
callbackFunc?: Function
```

<br/>

📌 loading
```
hp.showLoading('message', Options?);
hp.hideLoading(); == hp.showLoading('hide');
```

```
➡️ Options
color?: 'inherit' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning'
disableShrink?: boolean
size?: number | string
thickness?: number
```

<br/>

📌 page 페이지 이동
```
hp.showPage(type: 'next' | 'prev);
```

## 협업
hp = Helth Paps

main color = #66bb6a

<br>

## 논의
📌 스타일 파일은 어떻게 관리할 지 나중에 얘기 (/index.tsx)

📌 학생 결과 입력창 너무 작음 UI 수정 필요할듯 (Form/index.tsx)

📌 footer가 필요한가... 갤럭시는 모르겠는데 아이폰 사파리 기준으로 뒤로가기든 앞으로가기든 다 구현되어있음

📌 메뉴 아이콘 로고 생기면 아래꺼랑 바꿔서 클릭 시 홈으로 이동 및 지금처럼 냅두고 드롭다운으로 하던가
    
    --> 현재는 로고 누르면 홈으로 가게 설정해놈. 단, 입력 페이지 같은 경우 사용자가 입력한 값이 있다라고 하면, 알림창 띄워서 '이동하시겠습니까?' 해야될듯
