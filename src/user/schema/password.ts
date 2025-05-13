import * as bcrypt from 'bcrypt';

// Password class is not necessarily used, but security is important, so I wrote it separately.
// Password 클래스가 꼭 사용될 필요는 없지만, 보안이 중요하기 때문에 따로 작성하였습니다.
export class Password {
  private readonly password: string;

  private constructor(hashedPassword: string) {
    this.password = hashedPassword;
  }

  // You must encrypt your password when you save it.
  // 비밀번호를 저장할 때는 반드시 암호화 해야 합니다.
  static async create(password: string): Promise<Password> {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    return new Password(hashedPassword);
  }

  async comparePassword(plainPassword: string): Promise<boolean> {
    return bcrypt.compare(this.password, plainPassword);
  }

  static fromHashedPassword(hashedPassword: string): Password {
    return new Password(hashedPassword);
  }

  readPassword() {
    return this.password;
  }
}
