import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
// };

const firebaseConfig = {
  apiKey: 'AIzaSyBwPglcPcioP8BPuTtF8-LXsxhZ2tij-Fc',
  authDomain: 'artistic-moment.firebaseapp.com',
  projectId: 'artistic-moment',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
