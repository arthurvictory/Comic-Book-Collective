import { createSlice } from '@reduxjs/toolkit';

export interface HeroState {
    name: string;
    description: string;
    price: number;
    appeared: string;
    superpowers: string
}

const initialState: HeroState = {
    name: 'Thor',
    description: '',
    price: 0,
    appeared: '',
    superpowers: ''
}

const rootSlice = createSlice({
    name: "root",
    initialState,
    reducers: {
        chooseName: (state, action) => { state.name = action.payload },
        chooseDescription: (state, action) => { state.description = action.payload },
        choosePrice: (state, action) => { state.price = action.payload },
        chooseAppeared: (state, action) => { state.appeared = action.payload },
        choosePowers: (state, action) => { state.superpowers = action.payload }
    }
})

// Export Reducer
export const reducer = rootSlice.reducer
console.log(rootSlice)
export const {
    chooseName,
    chooseDescription,
    choosePrice,
    chooseAppeared,
    choosePowers
} = rootSlice.actions;