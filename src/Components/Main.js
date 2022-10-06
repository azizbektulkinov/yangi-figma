import React from 'react';
import { BrowserRouter as Router, Routes,Route, } from 'react-router-dom';
import { Аксиа } from '../pages/Аксиа';
import { Asosiy } from '../pages/Asosiy';
import { Доставка } from '../pages/Доставка';
import { Контакт } from '../pages/Контакт';
import { Отзывы} from '../pages/Отзывы';
import { Navbar } from './Navbar';
import { Birinchi } from '../pagess/Birinchi';
import { Ikkinchi } from '../pagess/Ikkinchi';
import { Uchinchi } from '../pagess/Uchinchi';
import { Tortinchi } from '../pagess/Tortinchi';
import { Beshinchi } from '../pagess/Beshinchi';




export function Main() {
    
    return (
        <Router>
        <div>
         <Navbar/>
            <Routes>
                <Route path='/' element ={<Аксиа/>} />
                <Route path='/Asosiy' element ={<Asosiy/>} />
                <Route path='/Доставка' element ={<Доставка/>} />
                <Route path='/Контакты' element ={<Контакт/>} />
                <Route path='/Отзывы' element ={<Отзывы/>} />
            </Routes>
        </div>
        <div className='ikinchi'>
            <Routes>
                <Route path='/Birinchi'element={<Birinchi/>}/>
                <Route path='/Ikkinchi'element={<Ikkinchi/>}/>
                <Route path='/Uchinchi'element={<Uchinchi/>}/>
                <Route path='/Tortinchi'element={<Tortinchi/>}/>
                <Route path='/Beshinchi'element={<Beshinchi/>}/>
            </Routes>
        </div>
        </Router>
    );
}