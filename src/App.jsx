import { uploadFile, uploadFile1, uploadFile2, uploadFile3, uploadFile4, ruta } from './firebase/config';
import { useState } from "react";
import { getFirestore, addDoc, collection } from 'firebase/firestore'
import logo from './imagenes/logo.png'
import antena from './imagenes/img-antena.jpg'
import modem from './imagenes/img-modem.jpg'
import antenatecho from './imagenes/antenatecho.jpg'
import equipo from './imagenes/equipo.jpg'
import entrada from './imagenes/entrada.jpg'
import modemin from './imagenes/modemin.jpg'
import backmodem from './imagenes/backmodem.jpg'
import './App.css';


function App() {
  const [file, setFile] = useState(null)
  const [file1, setFile1] = useState(null)
  const [file2, setFile2] = useState(null)
  const [file3, setFile3] = useState(null)
  const [file4, setFile4] = useState(null)
  const [dni, setDni] = useState(null)


  const user = {
    dni: dni
  }

  const uploadDates = () => {
    const db = getFirestore()
    const orderColecction = collection(db, `${ruta}`)
    addDoc(orderColecction, user)
  }


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const result = await uploadFile(file)
      console.log(result)
      const result1 = await uploadFile1(file1)
      console.log(result1)
      const result2 = await uploadFile2(file2)
      console.log(result2)
      const result3 = await uploadFile3(file3)
      console.log(result3)
      const result4 = await uploadFile4(file4)
      console.log(result4)
      uploadDates()

    } catch (error) {
      console.log(error)
    }

  }

  return (
    <div id='conteiner'>
      <img src={logo} alt="logo" id='img1' />

      <p id='texto'>Estimado cliente, este formulario está

        diseñado para que Ud mismo pueda relevar

        el estado de los equipos instalados, sin la

        necesidad de la presencia de un técnico.

        Completar este formulario le tomará tan

        solo 15 minutos y tendrá la guía de un

        agente nuestro en el momento que Ud

        defina más cómodo para realizarlo.</p>

      <a id='button' href="#texto1">COMENZAR</a>

      <div id='conteiner1'>
        <p id='texto1'>Ud cuenta actualmente con un servicio

          satelital compuesto por una estación remota

          ubicada a itemperie y un equipo electrónico

          dentro del domicilio.</p>

        <div id='contenedorimg'>
          <img src={antena} alt="antena" id='antena' /><img src={modem} alt="modem" id='modem' /></div>
      </div>
      <form id='formulario'>
        <p id='texto2'>Comencemos con la estación.

          Necesitamos que tome 2 fotografías.

          La primera se trata de una imagen de la

          estación completa. Ejemplo:</p>

        <img src={antenatecho} id='antenaup' alt="antena" />

        <input name={file} onChange={e => setFile(e.target.files[0])} type="file" id="toma1"  />



        <p id='texto2'>Ahora necesitamos una imagen del equipo

          electrónico de la estación. Ejemplo:</p>
        <img src={equipo} alt="equipo" id='toma1' />
        <input type="file" name={file1} onChange={e => setFile1(e.target.files[0])} id="toma1" accept="image/*" capture="camera" />
        <p id='texto2'>
          Vayamos ahora dentro del domicilio.

          También necesitamos 3 fotografías. La

          primera se trata de una imagen que muestre

          el ingreso del cable en el edificio. Ejemplo:
        </p>
        <img src={entrada} id='toma1' alt="pared" />
        <input name={file2} type='file' onChange={e => setFile2(e.target.files[0])} id="toma1" accept="image/*" capture="camera" />

        <p id='texto2'>Ahora necesitamos una imagen de la

          ubicación del modem satelital. Ejemplo:</p>
        <img src={modemin} alt="modem" id='toma1' />
        <input name={file3} type='file' onChange={e => setFile3(e.target.files[0])} id="toma1" accept="image/*" capture="camera" />
        <p id='texto2'>Muy bien! Ya casi terminamos.

          Finalmente necesitamos una imagen de la

          conexión del cable con el modem. Ejemplo:</p>

        <img src={backmodem} id='toma1' alt="modem" />
        <input name={file4} type='file' onChange={e => setFile4(e.target.files[0])} id="toma1" accept="image/*" capture="camera" />
        <p id='texto2'>Ingrese numero de cliente o DNI</p>
        <input type="text" name={dni} onChange={e => setDni(e.target.value)} id="toma1" />

        <button id='send' onClick={handleSubmit}> Enviar</button>

        <h2 id='despedida'>Felicitaciones!!

          Hemos terminado el relevamiento.
          Muchas gracias!</h2>

        <img src={logo} alt="logo" id='img1' />

      </form>
    </div>
  );
}

export default App;
