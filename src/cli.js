import auth from './auth.js';
import main from './main.js';

export default (play) => {
  const user = auth();

  if (!play) return;

  main(user, play);
};
