import { createAction, createReducer, configureStore } from "@reduxjs/toolkit";

// redux eto obrabotchik sostojanija dlja raznyh bibliotek
// Osnovy redux ochen' shozhy s react sostojanijem
// Kak i u react sostojanii tak i u redux jest iznachal'noe sostojanije i funkcija dlja izmenenija sostojanija
// Iznachal'noe sostojanije eto object v kotorom hranitsa razhnqje svojsta/sostojanija

const initalState = {
    hourRange: 1,
    lowPriceTimestamp: null,
    errorMessage: null,
};

// Funkcqii izmenenija sostojanija nazqvajutsa v redux 'Action';
// Action sosdajot object v kotorom jest jego tip i object payload v kotorom budet nahoditsa novoje sostojanije
export const setHourRange = createAction("setHourRange");
export const setLowPriceTimestamp = createAction("setLowPriceTimestamp");
export const setErrorMessage = createAction("setErrorMessage");


// reducer ispol'zujetsa dlja opredelenija 4to budet delat' Action pri jego inicializacii;
// My sozdajom funkcqii s nazvanijem actiona v kotoryh menjajem sostojanije
const reducer = createReducer(initalState, {
    [setHourRange]: (state, action) => {
        state.hourRange = action.payload;
    },
    [setLowPriceTimestamp]: (state, action) => {
        state.lowPriceTimestamp = action.payload;
    },
    [setErrorMessage]: (state, action) => {
        state.errorMessage = action.payload;
    }
});

// store eto oblako v kotorom hranitsa vsja informacija o redux sostojanii.
export const store = configureStore({ reducer });
