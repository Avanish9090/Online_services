import { Route, Routes } from "react-router-dom";
import "./App.css";
import Latest from "./components/Latest";
import Login from "./components/Login";
import Forms from "./components/Forms";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Review from "./components/Review";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/latest"
          element={
           <ProtectedRoute>
              <Latest />
         </ProtectedRoute>
          }
        />
        <Route
          path="/forms"
          element={
            <ProtectedRoute>
              <Forms />
            </ProtectedRoute>
          }
        />
        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          }
        />
        <Route
          path="/reviews"
          element={
            <ProtectedRoute>
              <Review />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
