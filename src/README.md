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

### swagger
Use the function of the swagger to a minimum.