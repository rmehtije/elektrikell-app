import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './services/stateService';

// ReactDOM eto vspomogatel'nyj paket reacta dlja raboty s DOM (Document Object Model)
// ReactDOM - eto most mezhdu reactom i brauzerskim DOM.
// Tut berjotsa element s html <div id=root> i oborachivaetsa reactom
// Vsjo nashe prilozhenije zatem otrisovajetsa (render) v etom div elemente
const root = ReactDOM.createRoot(document.getElementById('root'));

// Dlja togo 4toby ispolzovat' redux sostojanije v react my ispol'zujem dopolnitel'nuju biblioteku react-redux
// S react-redux berjom komponent Provider i peredajom jemu ves' nash redux i etot komponent dol'zhen obernut' ves' nash projekt

// Dlja imitirovanija multipage application v reacte ispol'zujetsa react-router-dom
// Poskol'ko react eto single page application to 4toby rabotali ssylki i ne perezapuskalos vsjo nashe prilozhenije nuzhno obernut'
// vsjo nashe prilozhenije v BrowseRouter komponent ot react-router-dom;
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
