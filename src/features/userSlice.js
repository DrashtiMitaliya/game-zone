import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading :false ,
    users : [] ,
    error : '' ,
} ;

export const fetchInformation  = createAsyncThunk("user/fetchInformation" ,()=>{
    return axios.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json")
    .then((response) =>response.data)
}) ;


const userSlice =createSlice ({
    name  : "user" ,
    initialState ,
    reducers:{

    },
   extraReducers : (builder) =>{
    builder.addCase(fetchInformation.pending ,(state)=>{
        state.loading =true;
    });
    builder.addCase(fetchInformation.fulfilled,(state,action)=>{
        console.log(action.payload);
        state.loading =false ;
        state.users = action.payload ;
        state.error = " " ;
    });
    builder.addCase (fetchInformation.rejected ,(state,action) =>{
        state.loading = false; 
        state.users = []; 
        state.error = action.error.message ;
    });
   }
})

export default userSlice.reducer ;
