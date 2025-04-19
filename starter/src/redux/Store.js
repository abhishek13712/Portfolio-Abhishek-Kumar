import { configureStore } from "@reduxjs/toolkit";
import { MenuItem} from "./Slices/MenuItem";

export const store = configureStore({
    reducer:{
        menu: MenuItem.reducer,
    }
});