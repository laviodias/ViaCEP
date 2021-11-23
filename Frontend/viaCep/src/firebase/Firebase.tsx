import { initializeApp } from "firebase/app";
import { getDatabase, set, get, ref, child, update, remove } from 'firebase/database'

interface IResult{
    cep: string,
    logradouro: string,
    complemento: string, 
    bairro: string,
    localidade: string,
    uf: string,
    ibge: string,
    gia: string,
    ddd: string,
    siafi: string
}

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

export function insertDb(props: IResult){
    set(ref(db, props.cep), {
        localidade: props.localidade,
        logradouro: props.logradouro,
        bairro: props.bairro,
        uf: props.uf,
        complemento: props.complemento,
        ddd: props.ddd,
    })
    .catch(error => {
        alert(error);
    })
}

export async function readDb(cep: string){
    const dbRef = ref(db);
    const snapshot = await get(child(dbRef, cep));
    if(snapshot.exists()){
        return snapshot.val();
    }
    return "not found";
}