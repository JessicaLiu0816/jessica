import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addClick,delClick,renderList } from './store/actioncreate'
import store from './store/index.js';
import logo from './logo.png';
import List from './List';

class MvList extends Component{

    componentDidMount(){
        const action = renderList();
        store.dispatch(action);
    }
    render() {
        const { handleDelClick,handleAddClick,list,recomList } =this.props;      
        return(
            <div className='container'>
                <img className='logo' src={logo} alt='logo'/> 
                <List  listHeader='My list' list={list} addOrRemove={handleDelClick}  />
                <List  listHeader='Recommendations List' list={recomList} addOrRemove={handleAddClick}  />
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) =>{
    return {

        handleAddClick(id){
            const action = addClick(id);
            dispatch(action);
        },
        handleDelClick(id){
            const action = delClick(id);
           dispatch(action);
        },
    }
}

const mapStateToProps = (state) =>{
  return {
     list:state.mylist,
     recomList:state.recommendations
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(MvList);