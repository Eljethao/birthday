import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Enter from '../pages/Enter'
import Home from '../pages/Home'


function RouteIndex() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Enter />} />
                    <Route path="/home" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default RouteIndex
