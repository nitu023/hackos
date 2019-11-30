import React from 'react';
import {  MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBModalFooter, MDBIcon } from 'mdbreact';


class Cookedlogin extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email:"",
            password:""
        }
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
        
    }
    handleSubmit = (shef) =>{
        shef.preventDefault()
        console.log(this.state)
    }
  render() {
      console.log(this.state.email)
    const smallStyle = { fontSize: '0.8rem'}
    return (
        <form onSubmit = {this.handleSubmit}>
        <MDBRow>
          <MDBCol md="9" lg="7" xl="5" className="mx-auto mt-3 shadow   ">
            <MDBCard>
              <MDBCardBody className="mx-4">
                <div className="text-center">
                  <h3 className="dark-grey-text mb-5"><strong>Sign in</strong></h3>
                </div>
                <MDBInput label="Your email" group type="email" success="right" name = "email"  onChange = {this.handleChange}/>
                <MDBInput label="Your password" group type="password" validate containerClass="mb-0" name = "password"  onChange = {this.handleChange}/>
                {/* <MDBAutocomplete label="Your country" clear data={countries}/> */}
                <div class="text-center mb-3">
            <button type="submit" class="btn blue-gradient btn-block btn-rounded z-depth-1a">Sign In</button>
          </div>
                <p className="dark-grey-text text-right d-flex justify-content-center mb-3 pt-2" style={smallStyle}> or Sign up with:</p>
                <div className="row my-3 d-flex justify-content-center">
                  <MDBBtn type="button" color="white" rounded className="mr-md-3 z-depth-1a"><MDBIcon fab icon="facebook-f" className="blue-text text-center" /></MDBBtn>
                  <MDBBtn type="button" color="white" rounded className="mr-md-3 z-depth-1a"><MDBIcon fab icon="twitter" className="blue-text" /></MDBBtn>
                  <MDBBtn type="button" color="white" rounded className="z-depth-1a"><MDBIcon fab icon="google-plus-g" className="blue-text" /></MDBBtn>
                </div>
              </MDBCardBody>
              <MDBModalFooter className="mx-5 pt-3 mb-1">
                <p className="grey-text d-flex justify-content-end" style={smallStyle}>Already a member? <a href="#!" className="blue-text ml-1"> Sign In</a></p>
              </MDBModalFooter>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        </form>
    );
  }
}

export default Cookedlogin;