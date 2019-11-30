import React from 'react';
import {  MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBModalFooter, MDBIcon } from 'mdbreact';


class Cookedsignup extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name:"",
            email:"",
            mobile:"",
            gender:"",
            image:"",
            location:"",
            occupation:"",
            password:"",
            select :""
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


  render() {
      console.log(this.state.name)
    const smallStyle = { fontSize: '0.8rem'}
    return (
        <form onSubmit = {this.hnadleSubmit} >
        <MDBRow>
        
          <MDBCol md="9" lg="7" xl="5" className="mx-auto mt-5 shadow">
            <MDBCard>
              <MDBCardBody className="mx-4">
                <div className="text-center">
                  <h3 className="dark-grey-text mb-5"><strong>Sign Up</strong></h3>
                </div> 
                <MDBInput label="Your name" group  name = "name" success="right" onChange = {this.handleChange}/>
                <MDBInput label="Your email" group type="email" name = "email" success="right"  onChange = {this.handleChange}/>
                <MDBInput label="Your contect Numbar" type = "number" name="mobile"  success="right"  onChange = {this.handleChange}/>
                <MDBInput label="Gender" group  name = "gender" success="right" onChange = {this.handleChange}/>
                <MDBInput label="Your image link" group name = "image" success="right" onChange = {this.handleChange}/>
                <MDBInput label="Your location" group name = "location"  success="right" onChange = {this.handleChange}/>
                <MDBInput label="occupation"  name = "occupation" group  success="right" onChange = {this.handleChange}/>
                <MDBInput label="Your password" group type="password" validate containerClass="mb-0" name = "password" onChange = {this.handleChange} />
                <div>
                    <select className="browser-default custom-select" name = "select" onChange = {this.handleChange}>
                    <option selected> Looking for job</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                    </select>
                </div>
                {/* <MDBAutocomplete label="Your country" clear data={countries}/> */}
                <div className="text-center pt-3 mb-3">
                  <MDBBtn type="submit" gradient="blue" rounded className="btn-block z-depth-1a">Sign Up</MDBBtn>
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

export default Cookedsignup ;