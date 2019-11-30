import React from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';


class Adddish extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            dish_name :"",
            process :"",
            image:""
        }
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
        
    }
    hnadleSubmit = (user)=>{
        user.preventDefault()
        console.log(this.state)
    }

    render(){
        console.log(this.state.dish_name)
    return (
        <form onSubmit = {this.hnadleSubmit}>
        <MDBContainer>
        <MDBRow>
          <MDBCol md="6" className = "card">
              <h3 className="h3 text-center mb-4">Add Dish</h3>
              <MDBInput label="dish name"  name = "dish_name" success="right" onChange = {this.handleChange}/>
                <MDBInput label="dish image"  type="text" name = "image" onChange = {this.handleChange}/>
                <MDBInput label="dish_recipe"  type="textarea" name = "process"   onChange = {this.handleChange}/>
              <div className="text-center">
                <MDBBtn  type = "submit"color="primary">Add recipe</MDBBtn>
              </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      </form>
    
    )
    }
}

export default  Adddish;