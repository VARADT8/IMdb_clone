import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Page/Home/Home";
import MovieList from "./Components/MovieList/MovieList";
import DetailPage from "./Page/DetailPage/DetailPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>

          <Route path="movie/:id" element={<DetailPage />}></Route>
          <Route path="movies/:type" element={<MovieList />}></Route>
          <Route path="/" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
