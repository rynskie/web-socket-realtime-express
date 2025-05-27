import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Register from './Register'
import Profile from './Profile'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/profile' element={<Profile />} />
        </Routes>
    )
}

export default Router