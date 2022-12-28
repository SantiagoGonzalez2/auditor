// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage, ref, uploadBytes } from 'firebase/storage'
import { v4 } from "uuid";






// const firebaseConfig = {
//   apiKey: "AIzaSyAPA9YI4T_b7BxLcPlKtY1uUhk0xwp2i7M",
//   authDomain: "auditorapp-d7668.firebaseapp.com",
//   projectId: "auditorapp-d7668",
//   storageBucket: "auditorapp-d7668.appspot.com",
//   messagingSenderId: "892145290292",
//   appId: "1:892145290292:web:efc3836dc61b6ab69ece61",
//   measurementId: "G-NVDPY09BLF"
// };

const firebaseConfig = {
  apiKey: "AIzaSyDg5UxzjCVVppl_n0guchx2q4X37Qk81ug",
  authDomain: "prueba-24d3d.firebaseapp.com",
  projectId: "prueba-24d3d",
  storageBucket: "prueba-24d3d.appspot.com",
  messagingSenderId: "327877089807",
  appId: "1:327877089807:web:69e00de26412550c35a17a"
};


 
export let ruta = v4()


const app = initializeApp(firebaseConfig);
export  const storage = getStorage(app)

export async function uploadFile(file)  {
  
    const storageRef = ref(storage,`${ruta}/${v4()}`)
    return await uploadBytes(storageRef,file)
    
}
export async function uploadFile1(file)  {
  
  const storageRef = ref(storage,`${ruta}/${v4()}`)
  return await uploadBytes(storageRef,file)
  
}
export async function uploadFile2(file)  {
  
  const storageRef = ref(storage,`${ruta}/${v4()}`)
  return await uploadBytes(storageRef,file)
  
}
export async function uploadFile3(file)  {
  
  const storageRef = ref(storage,`${ruta}/${v4()}`)
  return await uploadBytes(storageRef,file)
  
}
export async function uploadFile4(file)  {
  
  const storageRef = ref(storage,`${ruta}/${v4()}`)
  return await uploadBytes(storageRef,file)
  
}








