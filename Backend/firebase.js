import { initializeApp } from "firebase/app";
import { getDatabase, set, ref, child, update, remove } from 'firebase/firebase-database'

const firebaseConfig = {
  apiKey: "AIzaSyCHDEjRnCJqIluIwaLn4YuCCwaj4hQ9nio",
  authDomain: "viacep-e0015.firebaseapp.com",
  projectId: "viacep-e0015",
  storageBucket: "viacep-e0015.appspot.com",
  messagingSenderId: "629301592712",
  appId: "1:629301592712:web:1297ba0ece316273f5153d"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export function insert(cep, localidade){
    set(ref(db, `${cep}`), {
        localidade: localidade,
    })
    .then(() => {
        alert("Inserido com sucesso!");
    })
    .catch(error => {
        alert(error);
    })
}