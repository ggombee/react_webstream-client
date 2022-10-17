# Beato Client

# 1. Summary

## 1. Purpose

- 음악 웹 스트리밍 사이트 제작 

## 2. About

- Title : "BEATO" 
- Base : create-react-app
- Styles : emotion 

# 2. Settings

## 1. Available Scripts

In the project directory, you can run:

### `yarn install`

### `yarn start`

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

## 2. Structure of Folders

> src
> <br>
>
> > assets 
> > <br>
> > components 
> > <br>
> > hooks
> > <br>
> > layouts
> > <br>
> > pages
> > <br>
> > stores
> > <br>
> > styles

aseets
<br/>
-스타일에 필요한 아이콘, 이미지 등을 저장

components (presentation components)
<br/>
- UI의 여러조합, 목록 밑 차트 같은 기능단의 가장 작은 단위

hooks / Utils  (common utility) - 사용하는 사람에 따라 이름 다름
<br/>
- 어떠한 특정한 기능을 하기 위한 CUSTOM HOOKS들의 모음
<br/>
- 공통으로 사용하는 커스텀 훅이나 기능들이 있는곳으로,
서버통신에 필요한 axios파일이나, 기타 날짜변경 등과 같은 공통함수가 만들어져있는 파일들이 존재

Pages  (container components)
<br/>
- 하나의 페이지, 헬멧의정보와, 초기 요청할 서버 테이터, 컨테이너를 1대1 대응함

store
<br/>
- 전역 상태관리를 위한 스토어를 관리 하는 공간 이곳에 type, reducer 등 선언

app.tsx / BASEPAGE..
<br/>
- SPA를 라우팅하는 곳으로, react-router-dom을 사용함
Base : RootRouter

style
사실 assets과 함께 써도 되는 폴더인데 왜 빼놨는지 아직도 모르겠음

### 기본 코드 구조 예시
https://github.com/ggombee/react_ts-redux/tree/master/src
<br/>
https://github.com/ggombee/react_MintCamp-Community
<br/>
https://github.com/ggombee/catmbtitest
<br/>
https://github.com/ggombee/react_webstream-client
<br/>

### 이외 다른 프로젝트 코드 구조 샘플 예시 (실무)
![image](https://user-images.githubusercontent.com/58289110/196109846-4b2fad71-e01d-4a74-ae42-a3e5b8213f20.png)
![image](https://user-images.githubusercontent.com/58289110/196109916-e349cadd-a81e-4897-b8c1-2aba6a07364f.png)
![image](https://user-images.githubusercontent.com/58289110/196110012-6ace4758-76df-4801-9c1e-c396a5adcb0c.png)
![image](https://user-images.githubusercontent.com/58289110/196110085-933af8ff-c8c7-4da8-8584-be865290a994.png)



> api call sample
```javascript
import api from 'src/utils/api';

api
.get('url', {
  data: 'value',
})
.then(response => {})
.catch(e => {});
  ```

## 3. Setting file
원활한 개발진행을 위해 린트와 프리티어 설정을 하였고, env파일을 두어 BaseUrl 및 기타 리소스들을 관리하였다.
.env .prettierrc.json .eslintrc.json package.json jsconfig.json

`.env` 
`.prettierrc.json`
`.eslintrc.json`
`package.json`
`jsconfig.json`


## 4. DO NOT COMMIT FOLDER & FILES!!

- .vscode
- .idea
- .eslintcache
- node_modules
- build
- pakage-lock.json
- yarn.lock
- yarn-error.log


