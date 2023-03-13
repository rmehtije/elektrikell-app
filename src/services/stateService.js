import { createAction, createReducer, configureStore } from "@reduxjs/toolkit";

const initalState = {
    hourRange: 1,
    lowPriceTimestamp: null,
    errorMessage: null,
};

export const setHourRange = createAction("setHourRange");
export const setLowPriceTimestamp = createAction("setLowPriceTimestamp");
export const setErrorMessage = createAction("setErrorMessage");

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

export const store = configureStore({ reducer });
