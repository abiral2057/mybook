
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import './App.css'
import Layout from './pages/Component/Layout'
import Home from './pages/Home'
import { About } from './pages/About'
import Contact from './pages/Contact'
import Service from './pages/Service'
import Error from './pages/Error'

function App() {


  return (
<>

<BrowserRouter>

<Routes>

<Route path='/' element={<Layout/>}>
  <Route index element={<Home/>}/>
  <Route path='about' element={<About/>}/>
  <Route path='contact' element={<Contact/>}/>
  <Route path='service' element={<Service/>}/>
  <Route path='*' element={<Error/>}/>
</Route>

</Routes>
</BrowserRouter>

</>
  )
}

export default App
