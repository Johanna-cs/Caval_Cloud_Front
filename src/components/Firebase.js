import firebase from 'firebase/app'
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDwcg7WQ1lCPVxXKaJPpCmB74KgJjO3SMA",
  authDomain: "caval-cloud.firebaseapp.com",
  databaseURL: "https://caval-cloud.firebaseio.com",
  projectId: "caval-cloud",
  storageBucket: "caval-cloud.appspot.com",
  messagingSenderId: "1080314332486",
  appId: "1:1080314332486:web:19998ee42309dcf98a1147",
  measurementId: "G-YH254JTF9X",
};

firebase.initializeApp(firebaseConfig)

const storage = firebase.storage();

export { storage, firebase as default };