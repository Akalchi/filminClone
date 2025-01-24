import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './pages/Homepage';
import FilmsPage from './pages/Films';
import SeriesPage from './pages/Series';

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/peliculas" element={<FilmsPage />} />
                <Route path="/series" element={<SeriesPage />} />
            </Routes>
        </Router>
    );
}

export default App;
