// import axios from 'axios';

// import { SUBMIT_LOGIN } from 'src/actions/auth';

// const authMiddleware = (store) => (next) => (action) => {
//   console.log('on est dans le middleware, action');

//   if (action.type === SUBMIT_LOGIN) {
//     console.log('on va envoyer la requête');

//     // on va piocher dans le state les infos nécessaires
//     const { userName, password } = store.getState();

//     axios.post(
//       // URL
//       'http://ec2-54-89-4-11.compute-1.amazonaws.com/projet-mon-potager-back/public/wp-json/jwt-auth/v1/token',
//       // paramètres
//       {
//         userName: userName,
//         password: password,
//       },
//     )
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   // on passe l'action au suivant : le middleware suivant s'il y en un, sinon le
//   // reducer
//   next(action);
// };

// export default authMiddleware;