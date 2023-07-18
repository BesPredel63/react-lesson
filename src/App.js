// Component
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Users from "./pages/Users";
import Posts from "./pages/Posts";

// Styles
import './styles/App.css'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/posts" element={<Posts />} />
                <Route path="/users" element={<Users />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App


{/*<NavMenu />*/}
{/*<Registration />*/}