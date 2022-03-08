# AutoCheck

<h4> 주의 사항 </h4>

<<<<<본인의 계정이 체크아웃이 된 상태이여야만 자동 체크인이 수행됩니다!!!!!!!!!!!!!>>>

<h4> 시작 </h4>

가장먼저 .env 파일에 자신의 아이디와 비밀번호로 바꿔서 사용!!~!!

카카오 로그인X    이메일 로그인의 아이디와 비밀번호를 넣으셔야 합니다 

그리고 서버를 킨 다음 순서대로 진행 

가장 위에서 부터 copy,paste로 하나씩 붙여나가기

wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add -

sudo sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'

sudo apt-get update

sudo apt-get install google-chrome-stable

**------ 여기까지 하면 크롬 다운로드 완료**


**크롬 버전 확인하기**

google-chrome --version


**버전에 맞는 크롬드라이버 다운로드 (크롬 버전은 위에서 찾은 버전 수동 입력 해주세요)**

 $ wget -N https://chromedriver.storage.googleapis.com/여기에는 위에서 찾은 크롬 버전 입력/chromedriver_linux64.zip


**압출 풀기 패키지 다운** 

apt-get install unzip


**압축 풀기 (크롬드라이브가 압축되어 있어서 풀어야함 => ls -al 혹은 ls로 크롬드라이버 압축파일명을 찾기)**

unzip 파일이름 

*↑ ↑ 크롬드라이버 압축파일을 풀어주기*


**특정 폴더로 이동시키기** 

mv 파일명 폴더명/

*(이게 필요한 이유!!) clone 한 폴더 안으로!! 압축해제한 chromedriver를 옮겨줘야함*

**파일 이름 바꾸기 chromedriver.exe로 바꿔야함**

mv 파일명 바꿀파일명/ 

**------ 실행하기전에 크롬 드라이버가 켜저 있는지 확인하고 켜져 있다면 꺼야함**

**크롬 확인**

ps aux | grep chrome

**크롬이 켜져 있다면 실행되고 있는 크롬 전부 종료**

sudo pkill -9 chrome

--나머지-------------------------------------- 

**노드 js 설치 (아래 두줄)**

curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -

sudo apt-get install -y nodejs

**그리고 // 를 기준으로 하나씩 차례대로 해주기**

npm init // npm install // 관리자 권한(pm2를 위해) sudo -s    //  npm install -g pm2 //   pm2 start yaho.js
