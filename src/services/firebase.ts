// src/services/firebase.ts
// import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";

// const firebaseConfig = {
//   databaseURL: "https://calculator-tracker-8c379-default-rtdb.europe-west1.firebasedatabase.app/",
//   projectId: "calculator-tracker-8c379"
// };

// export const db = getDatabase(initializeApp(firebaseConfig));





import axios from 'axios';

const axiosApi = axios.create({
  baseURL: 'https://calculator-tracker-8c379-default-rtdb.europe-west1.firebasedatabase.app/',
});

export default axiosApi;
