import { User } from 'redux/modules/user/types';

export const login = (email: string, password: string): Promise<User> => {
  console.log('{email, password}=', email, password);
  return new Promise<User>((_, reject) =>
    reject({
      code: 0,
      message: 'Oops. Ocurred an error.',
    })
  );
};
