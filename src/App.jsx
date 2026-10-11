import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import StudentContext from "./context/StudentContext";
import StudentList from "./pages/StudentList";
import FavouriteStudents from "./pages/FavouriteStudents";
import "./App.css";

function Navbar() {
  const { favourites } = useContext(StudentContext);
  const location = useLocation();

  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        {/* <span className="brand-icon">f.</span> */}
        <span>favora<span className="brand-dot">.</span></span>
      </Link>

      <div className="nav-links">
        <Link
          to="/"
          className={location.pathname === "/" ? "nav-link active" : "nav-link"}
        >
          Students
        </Link>

        <Link
          to="/favourites"
          className={
            location.pathname === "/favourites"
              ? "nav-link active"
              : "nav-link"
          }
        >
          Favourites
          <span className="nav-count">{favourites.length}</span>
        </Link>
      </div>
    </nav>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<StudentList />} />
        <Route
          path="/favourites"
          element={<FavouriteStudents />}
        />
      </Routes>

      {/* <footer className="app-footer">
        Made with <span>♥</span> using React · Favora
      </footer> */}
    </>
  );
}

export default App;
