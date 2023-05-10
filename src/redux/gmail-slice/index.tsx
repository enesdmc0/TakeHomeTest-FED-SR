
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    hamburgerMenu: false,
    settingsMenu: false,
}

export const {actions, reducer} = createSlice({
    name: "gmail",
    initialState,
    reducers: {
        toggleHamburgerMenu: (state) => {
            state.hamburgerMenu = !state.hamburgerMenu
        },
        toggleSettingsMenu: (state) => {
            state.settingsMenu = !state.settingsMenu
        },
    }
})

