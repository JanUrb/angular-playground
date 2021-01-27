import { TestBed, tick } from '@angular/core/testing';

import { User, UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  // fehler async function vs async () => 
  it('returns a cached user', async function() {
    service.userCache = generateUser();

    const user = await service.loadCachedUser();

    expect(user.length).toBe(3);
  });

  
  it('returns a cached user blocking',  () => {
    service.userCache = generateUser();

    const user =  service.loadCachedUserBlocking();

    expect(user.length).toBe(3);
  });




  const generateUser = () => {
    return [
      User.build('Jan', 180),
      User.build('Lisa', 170),
      User.build('Linus', 60),
    ];
  };
});
