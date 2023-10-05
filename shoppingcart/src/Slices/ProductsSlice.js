import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'


 const url='https://fakestoreapi.com/products'
 export const fetchProducts=createAsyncThunk('fetch/products',async()=>{
    try {
        const response=await axios.get(url)
        console.log(response);
        console.log(response.data);
        return response.data
    } catch (error) {
        throw error
    }
   
 })

const ProductsSlice=createSlice({
     name:'products',
     initialState:{
        productss:[],
        status:'idle',
        error:null
     },
     reducers:{},
     extraReducers:(builder)=>{
        builder
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.productss=action.payload
            state.status="fiii"
        })
        

     }

})
export default ProductsSlice.reducer