import * as bcrypt from 'bcrypt';

// Classes are not necessarily used, but security is important.
export class Password {
  private readonly password: string;

  private constructor(hashedPassword: string) {
    this.password = hashedPassword;
  }

  // You must encrypt your password when you save it.
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
