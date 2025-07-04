import { createSlice } from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name:"cart",
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },

        removeItem:(state)=>{
            state.items.pop();
        },

        clearCart:(state)=>{
            state.items=[];
        }
    }
});


//exporting actions
export const{ addItem,removeItem,clearCart} = cartSlice.actions; 

//exporting reducers
export default cartSlice.reducer;