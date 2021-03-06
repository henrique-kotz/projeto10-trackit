import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import UserContext from '../contexts/UserContext';
import HabitContext from '../contexts/HabitContext';
import PercentageContext from '../contexts/PercentageContext';
import Login from './Login';
import SignUp from './SignUp';
import Header from './Header';
import Navbar from './Navbar';
import Today from './TodayPage/Today';
import Habits from './HabitsPage/Habits';
import History from './History';

import '../assets/css/reset.css';
import '../assets/css/style.css';

export default function App() {
    const [user, setUser] = useState({});
    const [habit, setHabit] = useState({
        name: '',
        days: []
    });
    const [percentage, setPercentage] = useState(0);

    return (
    <UserContext.Provider value={{user, setUser}}>
        <HabitContext.Provider value={{habit, setHabit}}>
            <PercentageContext.Provider value={{percentage, setPercentage}}>
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
            </PercentageContext.Provider>
        </HabitContext.Provider>
    </UserContext.Provider>
    );
}