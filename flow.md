1. repo생성, git 연동 `git init, remote, branch, checkout, pull 등`

2. `npm init`

3. `npm install graphql-yoga`

4. `npm install nodemon`

5. `npm install @babel/cli @babel/core @babel/node @babel/preset-env -D`

   - 원활한 수행 및 배포를 위해 global 설치는 지양하고, 로컬 설치를 권장합니다.
   - 종종 babel/core version이 6.x.x 의 형태로 나타나는 경우, global로 설치된 babel-core를 삭제해주세요 `npm uninstall -g babel-core`
     이후 위와 같이 7버전의 @babel/core로 로컬 설치를 진행해주십시오.
     해당 문제가 해결되지 않는 경우,
     1. babel-jest or bridge 문서를 참고하여 추가해주세요.
     2. node_modules 재설치 혹은 global node_modules 폴더 내 babel 직접 수정을 권장합니다.
   - 다양한 프로젝트를 진행하거나, 연습을 하시는 중이라면 번거롭더라도 로컬 설치를 진행하시는 것을 추천드립니다.

6. package.json

   - script 내에 다음과 같이 작성하세요
     `"start" : "nodemon --exec ./node_modules/.bin/babel-node 파일명.js`
   - 만약 위와 같지 않은 경우, `'babel-node' is not recognized as an internal or external command`와 같은 에러코드를 보실 수 있습니다.
   - module에 대한 error가 발생하는 경우, `"type":"module"`을 추가해주세요

7. .babelrc

   - `{"presets": ["@bable/preset-env"]}`
