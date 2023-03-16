import { Routes, Route } from 'react-router-dom';
import About from './About';
import ElektriKell from './ElektriKell';

// Komponenty eto obychnye javascript funkcqii kotorqye vozvrashajut react element
// Nazvanie Komponenta dolzhno nachinatsa s zaglavnoj bukvy. Dlja togo chtoby razlichat' komponenty ot html elementov v JSX;

// JSX eto novyj sinteks koda ot react js kotoryj pozvoljajet pisat' html i javascript vmeste.
// Komponty dolzhny vozvrashjat' tol'ko odin react element napisanyj blagodorja JSX;
function App() {

    // Kazhdyj komponent Route otvechajet za kakujunibud' ssylku
    // V Route my peredajom property path kotoraja opredeljajet ssylku po kotoryj on inicializirujet komponent
    // v element property my peredajom tot samyj komponent

    // Takzhe my mozhet peredat' dannye s sylki v komponent
    // ':' v path oznachajut 4to my vozmjom vsjo 4to napisano posle / i peredadim v peremennuju, nazvanije kotorogo my opredilili 
    // posle ':'; eto nazyvajut parametry ssylki
    // v nashem slu4aii http://localhost:3000/low/6 budet oznachat' chto my hotim videt' komponent <ElektriKell />
    // s parametrom durationParam = 6;
    

    return (
        <Routes>
            <Route path="/" element={<ElektriKell />} />
            <Route path="/:activePrice" element={<ElektriKell />} />
            <Route path="/low/:durationParam" element={<ElektriKell />} />
            <Route path="/about" element={<About />} />
        </Routes>
    );
}

export default App;
