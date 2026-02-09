import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Login from '../src/pages/Login.jsx'
import SignUp from '../src/pages/SignUp.jsx'

function App(){
  return (
<Routes>
  <Route path='/login' element= {<Login/>}/>
  <Route path='/signup' element= {<SignUp/>}/>
</Routes>
)
}

export default App