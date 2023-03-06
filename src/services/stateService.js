import { createAction, createReducer, configureStore } from "@reduxjs/toolkit";

const initalState = {
    hourRange: 1,
    lowPriceTimestamp: null,
};

export const setHourRange = createAction("setHourRange");
export const setLowPriceTimestamp = createAction("setLowPriceTimestamp");

const reducer = createReducer(initalState, {
    [setHourRange]: (state, action) => {
        state.hourRange = action.payload;
    },
    [setLowPriceTimestamp]: (state, action) => {
        state.lowPriceTimestamp = action.payload;
    }
});

export const store = configureStore({ reducer });
