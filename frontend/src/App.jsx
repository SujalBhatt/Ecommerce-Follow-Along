import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import SignUp from "./components/SignUp";
import HomePage from "./components/HomePage";
import ProductForm from "./components/ProductForm"; // Ensure this import is correct

const App = () => {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/form" element={<ProductForm />} /> {/* Add route for ProductForm */}
            </Routes>
        </Router>
    );
};

export default App;