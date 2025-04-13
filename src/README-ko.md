#### 프로젝트 구조
```
💬 nestjs-auth
├── auth
├── jwt
├── exception
├── swagger
├── board (domain)
└── user (domain)
    ├── controller.ts
    ├── repository.ts
    ├── service.ts
    ├── dto
    ├── rqrs
    └── schema
```
프로젝트는 기본으로 도메인 계층을 따라갑니다. </br>
인증 서비스이기 때문에 사용자 도메인만 존재하고, 테스트를 위한 보드 도메인을 추가해두었습니다.

사용자 등록은 사용자 도메인에서 할 수 있으면 로그인 및 토큰 관련 로직은 인증 도메인(auth)에서 찾을 수 있습니다.

`passport.js` 모듈을 사용해 인증을 구현하였고, 만약 사용하고 싶지 않다면 jwt 폴더 안의 README.md를 확인해주세요. 

저는 passport.js 모듈을 사용하였습니다.
사용하지 않고 싶다면 jwt 폴더 안의 README.md를 확인해주세요.