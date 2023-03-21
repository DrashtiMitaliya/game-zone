import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/* This is the initial state of the application. */
const initialState = {
    loading: false,
    users: [],
    filterArr: [],
    error: '',
};

/* This is a function that is used to fetch data from the API. */
export const fetchInformation = createAsyncThunk("user/fetchInformation", () => {
    return axios.get("https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json")
        .then((response) => response.data)
});


const userSlice = createSlice({
    name: "user",
    initialState,

   /* This is a function that is used to filter the data based on the platform. */
    reducers: {
        selectPlatform: (state, action) => {
            const temp = state.users.filter((item) => item.platform === action.payload)
            state.filterArr = temp;
        },
        setFilter: (state, action) => {
            const tempData = action.payload
            state.filterArr = tempData
        }

    },

    /* This is a function that is used to handle the asynchronous actions. */
    extraReducers: (builder) => {
        builder.addCase(fetchInformation.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchInformation.fulfilled, (state, action) => {

            state.loading = false;
            state.users = action.payload;
            state.filterArr = action.payload;
            state.error = " ";
        });
        builder.addCase(fetchInformation.rejected, (state, action) => {
            state.loading = false;
            state.users = [];
            state.filterArr = [];
            state.error = action.error.message;
        });
    }
})

export default userSlice.reducer;
export const { selectPlatform,setFilter } = userSlice.actions
