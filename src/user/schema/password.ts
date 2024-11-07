import * as bcrypt from 'bcrypt';

export class Password {
  private readonly password: string;

  private constructor(hashedPassword: string) {
    this.password = hashedPassword;
  }

  static async create(password: string): Promise<Password> {
    const hashedPassword = await bcrypt.hash(password, 10);
    return new Password(hashedPassword);
  }

  async comparePassword(plainPassword: string): Promise<boolean> {
    return bcrypt.compare(plainPassword, this.password);
  }

  readPassword() {
    return this.password;
  }
}
