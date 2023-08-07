import { createSlice } from '@reduxjs/toolkit'


interface iData {
  _id? : string
}
const initialState = {
appUser: "" || null,
signUser : "" || {} as iData,
}

const GlobalState = createSlice({
  name: "globalState",
  initialState,
  reducers: {
    createUser: ((state: any,{payload}: any) => {
        state.appUser =payload
    }),
    signinUser: ((state: any,{payload}: any)=>{
      state.signUser = payload

    }),

    logOut: (state: any) => {
        state.appUser = null
    }
  },
});

export const {logOut, createUser, signinUser} = GlobalState.actions

export default GlobalState.reducer