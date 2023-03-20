import { Routes, Route } from 'react-router-dom';
import About from './About';
import ElektriKell from './ElektriKell';

function App() {
    return (
        <Routes>
            <Route path="/elektrikell-app" element={<ElektriKell />} />
            <Route path="/elektrikell-app/:activePrice" element={<ElektriKell />} />
            <Route path="/elektrikell-app/low/:durationParam" element={<ElektriKell />} />
            <Route path="/elektrikell-app/about" element={<About />} />
        </Routes>
    );
}

export default App;
