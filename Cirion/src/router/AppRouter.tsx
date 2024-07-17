import {Route, Routes, Navigate} from 'react-router-dom'
import Home from '../pages/Home'


export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/login' element={<h1>login</h1>}/>
            <Route path='/home' element={<Home/>}/>

            <Route path='/*' element={<Navigate to="/home" />}/>
        </Routes>
    )
}