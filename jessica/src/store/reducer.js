import * as actiontypes from './actiontypes'
const defaultState ={
    mylist:[],
    recommendations:[]
}

export default (state = defaultState, action)=>{

    if(action.type=== actiontypes.ADD_MV){
        const newState = JSON.parse(JSON.stringify(state));
        let mv= newState.recommendations.filter(item=>{
           return item.id === action.id
        });
        newState.mylist = [...newState.mylist,mv[0]];
        let filtered= newState.recommendations.filter(item=>{
             return item.id!== action.id;
         })
        newState.recommendations=filtered;

        return newState
    }
    if(action.type=== actiontypes.INIT_LIST){
        const newState = JSON.parse(JSON.stringify(state));
        newState.mylist = action.data.mylist
        newState.recommendations= action.data.recommendations
      
        return newState
    }
    if(action.type=== actiontypes.DELETE_MV){
        const newState = JSON.parse(JSON.stringify(state));
        console.log(action);
        let mv= newState.mylist.filter(item=>{
            return item.id === action.id
         });

         newState.recommendations = [...newState.recommendations,mv[0]];

         let filtered= newState.mylist.filter(item=>{
            return item.id!== action.id;
        });
        newState.mylist=filtered;
         return newState;
      
    }
return state
}