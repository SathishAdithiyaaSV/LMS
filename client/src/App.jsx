import { BrowserRouter , Routes , Route } from "react-router-dom";

import Navbar from "./constants/navbar/Navbar";
import Courses from "./Components/CoursesPage/Courses";
import Home from "./Components/HomePage/Home";

import "./App.css"

function App() {

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="*" element={<div>404 Not Found</div>} />
            </Routes>
        </BrowserRouter>
    // <div>
    //     Finish the assignment! Look at the comments in App.jsx as a starting point
    // </div>
  )
}

export default App;
