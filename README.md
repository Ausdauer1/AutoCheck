# 자동체크인 (새벽 5시 00분 체크인, 다음날 새벽 04시 23분 체크아웃 - yaho.js 파일에 schedule.scheduleJob함수 수정으로 시간 변경 가능!)

체크인과 체크아웃의 실행시간이 약 10~15초 정도 소요됨.

<h4> 주의 사항 </h4>

- 시간상 체크인이 먼저 작동하게 되는 상황이면, 체크아웃이 되어있는 상태인지 확인!!!  

- 반대로 체크아웃이 먼저 작동하게 되는 상황이면 체크인이 되어있는 상태인지 확인!!!

- 뒤에 설명하지만 꼭 서버(ubuntu)에서 이미 실행되고 있는 chromedrvier가 있는지 확인하세요! 있다면, 종료해야 함

<h4> 시작 </h4>

(기본적으로 인스턴스를 생성해서 터미널에서 연결하는 것 까지는 생략하겠습니다) 

가장먼저 .env 파일을 만들어 아이디는 ID:'본인아이디' ,,비밀번호는 PASSWORD:'본인비밀번호'를 입력하여서 사용!!~!!

카카오 로그인X    이메일 로그인의 아이디와 비밀번호를 넣으셔야 합니다 (카카오 회원의 경우 이메일회원으로 전환하여서 사용)

그리고 서버를 킨 다음 순서대로 진행 

**0. 우분투 서버시간 한국 시간으로 변경하기**
https://blog.hangyeong.com/1013

/////////////////////////////////////////////////////////////////////////

그 다음 가장 위에서 부터 copy,paste로 하나씩 붙여나가기

wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add -

sudo sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'

sudo apt-get update

sudo apt-get install google-chrome-stable

**------ 여기까지 하면 크롬 다운로드 완료**


**1. 크롬 버전 확인하기**

google-chrome --version


**2. 버전에 맞는 크롬드라이버 다운로드 (크롬 버전은 위에서 찾은 버전 수동 입력 해주세요)**

 $ wget -N https://chromedriver.storage.googleapis.com/여기에는 위에서 찾은 크롬 버전 입력/chromedriver_linux64.zip


**3. 압축 풀기 패키지 다운** 

apt-get install unzip


**4. 압축 풀기 (크롬드라이브가 압축되어 있어서 풀어야함 => ls -al 혹은 ls로 크롬드라이버 압축파일명을 찾기)**

unzip 파일이름 

*↑ ↑ 크롬드라이버 압축파일을 풀어주기*

**4-1. git clone https://github.com/Ausdauer1/AutoCheck.git**

**5. 크롬 드라이버 특정 폴더로 이동시키기** 

mv 파일명 폴더명/

*(이게 필요한 이유!!) clone 한 폴더 안으로!! 압축해제한 chromedriver를 옮겨줘야함*

**6. 크롬 드라이버 파일 이름 바꾸기 chromedriver.exe로 바꿔야함**

mv 파일명 바꿀파일명

**------ 실행하기전에 크롬 드라이버가 켜저 있는지 확인하고 켜져 있다면 꺼야함**

**7. 크롬 확인**

ps aux | grep chrome

**8. 크롬이 켜져 있다면(확인했을 때 한줄만 나온다면 실행되고 있지 않는 것) 실행되고 있는 크롬 전부 종료**

sudo pkill -9 chrome

--나머지-------------------------------------- 

**9. 노드 js 설치 (아래 두줄)**

curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -

sudo apt-get install -y nodejs

**10. 그리고 // 를 기준으로 하나씩 차례대로 해주기**

npm init // npm install // 관리자 권한(pm2를 위해) sudo -s    //  npm install -g pm2 //   pm2 start yaho.js
