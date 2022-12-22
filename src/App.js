import { uploadFile } from './firebase/config';
import { useState } from "react";
import './App.css';

function App() {
  const [file, setFile] = useState(null)
  const [file2, setFile2] = useState(null)

 
  const handleSubmit = async (e) => {
   e.preventDefault()
   try{
    const result = await uploadFile(file)
    console.log(result)
   }catch(error){
    console.log(error)
   }
   
    
  }

  return (
    <div className="App">
      <form>
        <input type='file' name={file} onChange={e => setFile(e.target.files[0])}/>
        <input type='file' name={file2} onChange={e => setFile2(e.target.files)[0]}/>
       
        
        <button onClick={handleSubmit}>Enviar</button>
        
      </form>
   
    </div>
  );
}

export default App;
