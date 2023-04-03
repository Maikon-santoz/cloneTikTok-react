
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite'


const firebaseConfig = {
  apiKey: "AIzaSyCt6KddIbccDQqsANH4P_TelmXVZvFmGkI",
  authDomain: "mytiktok-jornada.firebaseapp.com",
  projectId: "mytiktok-jornada",
  storageBucket: "mytiktok-jornada.appspot.com",
  messagingSenderId: "521687668970",
  appId: "1:521687668970:web:24ac3666c9908570349f93"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;