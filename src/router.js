import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Title from './page/Title'
import Introduction from './page/Introduction'
import Recent from './page/Recent'
import Requirement from './page/Requirement'
import Welfare from './page/Welfare'
import Bottom from './page/Bottom'
import App from './App'

//路由
const BaseRouter = () =>{
    return(
      
            
        <BrowserRouter>
            <Routes>
                    <Route path='/' element={<App/>}>
                        <Route path='/title' element={<Title/>}></Route>
                        <Route path='/introduction' element={<Introduction/>}></Route>
                        <Route path='/recent' element={<Recent/>}></Route>
                        <Route path='/requirement' element={<Requirement/>}></Route>
                        <Route path='/welfare' element={<Welfare/>}></Route>
                        <Route path='/bottom' element={<Bottom/>}></Route>
                    </Route>
            </Routes>
        </BrowserRouter>
       
    )
}
export default BaseRouter;