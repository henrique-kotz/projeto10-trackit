import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import UserContext from '../contexts/UserContext';
import Login from './Login';
import SignUp from './SignUp';
import Today from './Today';

import '../assets/css/reset.css';
import '../assets/css/style.css';

export default function App() {
    const [user, setUser] = useState({});

    return (
    <UserContext.Provider value={{user, setUser}}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/cadastro' element={<SignUp />} />
                <Route path='/hoje' element={<Today />} />
            </Routes>
        </BrowserRouter>
    </UserContext.Provider>
    );
}