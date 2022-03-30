import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import UserContext from '../contexts/UserContext';
import Login from './Login';
import SignUp from './SignUp';
import Header from './Header';
import Navbar from './Navbar';
import Today from './Today';
import Habits from './Habits';
import History from './History';

import '../assets/css/reset.css';
import '../assets/css/style.css';

export default function App() {
    const [user, setUser] = useState({});

    return (
    <UserContext.Provider value={{user, setUser}}>
        {user.token ? <Header /> : ''}

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login />} />
                <Route path='/cadastro' element={<SignUp />} />
                <Route path='/hoje' element={<Today />} />
                <Route path='/habitos' element={<Habits />} />
                <Route path='/historico' element={<History />}/>
            </Routes>
        
        {user.token ? <Navbar /> : ''}
        </BrowserRouter>
    </UserContext.Provider>
    );
}