import {Route, Routes, Navigate} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../components/register'



export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/home' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/*' element={<Navigate to="/home" />}/>
        </Routes>
    )
}