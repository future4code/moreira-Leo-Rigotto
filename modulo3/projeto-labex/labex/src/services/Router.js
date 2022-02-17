import { AdminHome } from '../pages/AdminHome.js';
import { Login } from '../pages/Login.js';
import { HomePage } from '../pages/HomePage.js';
import { ApplicationForm } from '../pages/ApplicationForm.js';
import {TripList} from '../pages/TripList';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Header } from '../components/Header.js';
import { Footer } from '../components/Footer.js';
import { NotFound } from '../pages/NotFound.js';
import { TripDetails } from '../pages/TripDetails.js';



export const Router = () => {

        return <BrowserRouter>

            <Header/>

            <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path='/trips' element={<TripList/>}/>
                <Route path='/admin' element={<AdminHome/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/trips' element={<TripList/>}/>
                <Route path='/tripdetail' element={<TripDetails/>}/>
                <Route path='/applicationform/:id' element={<ApplicationForm/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>

            <Footer/>
            
        </BrowserRouter>
}