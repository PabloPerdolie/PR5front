import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import UpdateComponent from './UpdateComponent'
import CreateComponent from './CreateComponent'
import Components from './Components'
function App() {
  return (
    <>
      <div className='w-100'>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Components />}></Route>
            <Route path='/create' element={<CreateComponent />}></Route>
            <Route path='/update/:id' element={<UpdateComponent />}></Route>
          </Routes>
        </BrowserRouter>
      </div>

    </>
  )
}

export default App
