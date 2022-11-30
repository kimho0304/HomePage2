## 기본 작업 환경 세팅하기
* 내 유저 이름인 kimho0304로 레포지토리를 생성한다.
* 레포지토리 이름은 kimho0304.github.io이고, 또한 웹사이트의 주소가 된다.
* VSC에서 kimho0304.github.io 폴더를 만들고 깃의 원격 저장소랑 연동한다.
* 시험용으로 index.html 파일을 만들고, 간단하게 <h1>Hello<h1> 구문을 적어 넣었다. 그리고 git add *를 한 뒤 commit, 그리고 ush를 하였다.
* Jekyll을 설치한다. jekyll new . --force 명령어를 CMD에 입력한 뒤 설치한다.
* Jekyll에 대한 파일들이 현재 디렉토리에 생성된다.
* jekyll serve를 실행 후 calhost:4000으로 들어가보니 기본 테마의 Jekyll 사이트가 잘 적용됨을 확인할 수 있었다.
* _posts 폴더에 오늘 날짜가 들어간 새로운 이름의 포스트를 하나 추가했다.
* Fully compatible with [GitHub Pages](https://pages.github.com/) (see [GitHub Pages installation](#github-pages-installation))
* Auto-generated share images for social media (using [Soopr](https://www.soopr.co))
* Share & like buttons (using [Soopr](https://www.soopr.co))

## 새로운 테마 적용하기
1. pdf에 나온 방식 말고, 내가 고른 moonwalk 테마의 깃 홈페이지에서 파일들을 다운로드 받았다.
2. 그 후 현재 작업 디렉토리에 붙여넣은 뒤 _posts 폴더를 제외한 나머지 파일들을 덮어씌웠다.
3. 성공적으로 moonwalk 테마를 적용시켰다.

## Disqus 댓글 기능 추가하기
* Disqus 홈페이지에 접속 후 회원가입 및 사이트 이름과 주소를 입력한다.
* Disqus Universal Code를 복사 후, _layouts 폴더 속 post.html에 붙여넣는다.
* 주석을 해제 후 그 위에 PAGE_URL과 PAGE_IDENTIFIER 변수를 추가한다.
* post들에 대해 comment를 true로 설정해주면 성공적으로 댓글창이 생성된다.         
