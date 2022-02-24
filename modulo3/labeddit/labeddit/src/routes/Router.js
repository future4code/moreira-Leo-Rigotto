import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Feed } from "../pages/Feed"
import { LoginSignup } from "../pages/LoginSignup"
import { NotFound } from "../pages/NotFound"

export const Router = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Feed/>}/>
            <Route path="/feed" element={<Feed/>}/>
            <Route path="/login" element={<LoginSignup/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
}