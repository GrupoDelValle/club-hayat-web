import { createSlice } from '@reduxjs/toolkit';

export const navBarSlice = createSlice({
    name: 'navBar',
    initialState: {
        index: 0,
    },
    reducers: {
        changeIndex: ( state, {payload}) => {
            state.index = payload
        },
    }
});


export const { changeIndex } = navBarSlice.actions;