import { createSlice } from "@reduxjs/toolkit";


export const MenuItem = createSlice({
    name:"menu",
    initialState:false,
    reducers:{
        show:() =>( 
            true)
           ,
        hide:() => (
           false )
           
        ,
    }
});

export const {show, hide} = MenuItem.actions;
export default MenuItem.reducer;
    