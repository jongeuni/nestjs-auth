#### project structure
```
💬 nestjs-auth
├─ jwt
├─ exception
└─ user (domain)
   ├─ controller.ts
   ├─ service.ts
   ├─ repository.ts
   ├─ rqrs
   │  ├─ rq
   │  └─ rs
   ├─ dto
   └─ schema
```

The project is basically divided by domain. </br>
Currently, it only includes the auth service, so only the user domain exists.
(A board domain is also planned to be added.)

User registration and deletion can be found in the user domain, while login and token-related logic can be found in the auth domain.

I hope my code is helpful to those who may not be familiar with development.

저는 passport.js 모듈을 사용하였습니다.
사용하지 않고 싶다면 jwt 폴더 안의 README.md를 확인해주세요.


### swagger
Use the function of the swagger to a minimum.