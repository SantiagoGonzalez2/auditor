// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage, ref, uploadBytes} from 'firebase/storage'
import { v4 } from "uuid";






const firebaseConfig = {
  apiKey: "AIzaSyAPA9YI4T_b7BxLcPlKtY1uUhk0xwp2i7M",
  authDomain: "auditorapp-d7668.firebaseapp.com",
  projectId: "auditorapp-d7668",
  storageBucket: "auditorapp-d7668.appspot.com",
  messagingSenderId: "892145290292",
  appId: "1:892145290292:web:efc3836dc61b6ab69ece61",
  measurementId: "G-NVDPY09BLF"
};






const app = initializeApp(firebaseConfig);
export  const storage = getStorage(app)

export async function uploadFile(file,file1)  {
  
    const storageRef = ref(storage,v4(),v4())
    return await uploadBytes(storageRef,file,file1)
    
}



