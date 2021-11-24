import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA0aNoruh8a27jq2C-FHSQraAhCL8dIdbI",
  authDomain: "d5reactgallery-d4ab7.firebaseapp.com",
  projectId: "d5reactgallery-d4ab7",
  storageBucket: "d5reactgallery-d4ab7.appspot.com",
  messagingSenderId: "364728925433",
  appId: "1:364728925433:web:3ffc4d7f846cb92c6cb628"
};

const firebaseApp = initializeApp(firebaseConfig);

export const storage = getStorage(firebaseApp);