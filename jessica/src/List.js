    
import React,{Component,Fragment} from 'react';

class List extends Component{
    render(){
        return(
            <Fragment>
                   <div className='mylist'>
                    <h1>{this.props.listHeader}</h1>
                    {
                        this.props.list.map(item =>{
                         
                            return(
                                        <li key ={item.id} > 
                                            <div><img src={item.img} alt=""/></div>
                                            {item.title}
                                            {this.props.listHeader==='My list'? 
                                                <button className={'rmBtn'} onClick={()=>this.props.addOrRemove(item.id)}>Remove</button> :
                                                <button className={'addBtn'} onClick={()=>this.props.addOrRemove(item.id)}>Add</button>  
                                            }                               
                                        </li>    
                                        )
                    })}
                </div>
            </Fragment>
           
        )
    }
}
export default List;