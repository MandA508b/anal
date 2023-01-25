import {createSlice} from "@reduxjs/toolkit"

const searchSlice = createSlice({
    name:"search",
    initialState:{data:{}},
    reducers:{
    setData: (state, action)=>{
        state.data = action.payload
    }

    }
})

export const {setData} = searchSlice.actions
export const selectData = state => state.search.data
export default searchSlice.reducer