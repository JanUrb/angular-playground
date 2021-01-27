import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  userCache: User[] = [User.build("Jan", 182)];

  public async loadCachedUser(): Promise<User[]>{
    return this.userCache;
  }

  public loadCachedUserBlocking(): User[]{
    return this.userCache;
  }
}

export class User {
  name: string;
  height: number;

  static build(name, height): User {
    return { name, height};
  }
}
