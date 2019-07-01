import axios from 'axios';
import *as actiontypes from './actiontypes';

export const addClick = (id) =>({
    type:actiontypes.ADD_MV,
    id
})

export const delClick = (id) =>({
    type:actiontypes.DELETE_MV,
    id
})

export const initList = (data) => ({
    type: actiontypes.INIT_LIST,
    data
})
export const renderList = () =>{
  return (dispatch) =>{
    axios.get('http://localhost:4000/data')
    .then((res)=>{
        const data = res.data;
      //  console.log(data);
        const action = initList(data);
        dispatch(action)
    })
  }
   
}

