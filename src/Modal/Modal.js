import React, { Component } from "react";
import {
  Button,Modal,ModalHeader,ModalBody,ModalFooter,
  Input
} from "reactstrap";
import { connect } from "react-redux";
import {editList} from "../actions/actionsType";



class MyModal extends Component {
 
  
    state = {
      modal: false,
     myInput:""
    };

  toggle = () => this.setState({ modal: !this.state.modal });

  ChangeName=e=>{
      this.setState({
      myInput:e.target.value
      })
  }
  render() {
            const  {text,key,checked}=this.props.todo
    return (
      <div>

         
        <Button  className="edit" color="success" onClick={this.toggle}>
          Edit
        </Button>
        <Modal
          isOpen={this.state.modal}
          modalTransition={{ timeout: 700 }}
          backdropTransition={{ timeout: 1300 }}
          toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            
            <Input
            //   placeholder="enter your title"
              defaultValue={text}
              type="text"
              id="name"
              onChange={e => this.ChangeName(e)}
            />
            
          
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={() => {
                  this.props.editList({text:this.state.myInput,
                    key:key,
                    checked});
                  
              this.toggle()}} >
              Save change
            </Button>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}
const mapDispatchToProps ={editList}

export default connect(null,mapDispatchToProps) (MyModal);
