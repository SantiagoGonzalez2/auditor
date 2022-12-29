import Form from "./form";
import Confirmation from "./Confirmation";
import { BrowserRouter, Routes, Route } from 'react-router-dom'



function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Form/>}/>
    <Route path='/confirmation' element={<Confirmation/>} />
    </Routes>
    </BrowserRouter>

  )
}

export default App;
