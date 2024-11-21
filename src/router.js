import Main from "./pages/homemarket";
import Granel from "./pages/granel-market"


import {BrowserRouter, Routes, Route} from 'react-router-dom'

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/granel" element={<Granel />} />
            </Routes>    
        </BrowserRouter>

    )
}

export default Router;