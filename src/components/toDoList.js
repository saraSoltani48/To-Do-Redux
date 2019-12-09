import React from "react";
import { connect } from "react-redux";
import { deleteList, completeList ,editList} from "../actions/actionsType";
import MyModal from "../Modal/Modal";
import "../App.css";
const ListTodo = props => {

  
    

  return (
    <div>
      <ul className="list-items">
        {props.listItems.map((el, key) => (
            <li class="item" >
          <li key={key}>
            <button  className="btn  btn-warning complete" onClick={e=>{e.preventDefault() ;props.completeList(el.key)}}>
            {el.checked ? "Undo":"Complete"}
            </button>
            <button className="Tasks btn  btn-danger complete" onClick={e=>{props.deleteList(el.key)}} >
            
              delete
            </button >
           
              
             <MyModal todo={el}/>
        
            <span className={el.checked? "is-checked":"Not-checked"}>{el.text}</span>
          </li></li>
        ))}
      </ul>
    </div>
  );
};
const mapStateToProps = state => {
  return { listItems: state };
};

const mapDispatchToProps = { completeList, deleteList,editList };

export default connect(mapStateToProps, mapDispatchToProps)(ListTodo);
