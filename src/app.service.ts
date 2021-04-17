import { Injectable } from '@nestjs/common';

type UserInfo = { id: number; email: string; password: string };
type UserInfoMap = Map<string, UserInfo>;

const dummyUsers: UserInfo[] = [
  {
    id: 1,
    email: 't@t.com',
    password: '1234',
  },
];

@Injectable()
export class AppService {
  private users: UserInfoMap = new Map<string, UserInfo>();

  constructor() {
    dummyUsers.forEach((u) => this.users.set(u.email, u));
  }

  getHello(): string {
    return 'Hello World!';
  }

  async registerUser(email: string, password: string) {
    this.users.set(email, { id: Date.now(), email, password });
    return true;
  }

  async getUserByEmail(email: string): Promise<UserInfo | null> {
    if (!this.users.has(email)) {
      return null;
    }
    const user = this.users.get(email);
    return { ...user };
  }
}
