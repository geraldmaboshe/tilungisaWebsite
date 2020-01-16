import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';

class Header extends Component {

    render() {
        return (
            <Container>
                <div style={{marginTop:'150px'}}>
                    <h1>We're Tilungisa Auto <span>😊</span><br />
                    <em>You're one click away from an auto mechanic</em>
                    <img style={imgStyle} src="pic.jpeg"/>
                    </h1>
                    <h1>
                       Coming Soon!
                    </h1>
                </div>
               
                <div style={articleStyle} id="articles">
                    <h2>About Us</h2>
                    <p>We're a mobile app company. Tilungisa Auto app will give motorists access mechanics on the app. 
                        We're slated to launch in June this year </p>
                   
                
                </div>
                <div style={footerStyle}>
                    <p>&copy; 2020. Tilungisa Auto</p>
                </div>
               <div>
                   
               </div>
                {/* <div style = {formStyle} id="form"> 
                    <form >
                        <div>
                            <h2>Subscribe</h2>
                            <input style ={subField} type="text" placeholder="Enter your email"></input><br />
                            <input type="button" value = "Subscribe" style={subBtn}></input><br />
                        </div> 
                        <div >
                            <h2>Contact me</h2>
                            <input style={contactField} type="text" placeholder="Enter your name" /><br />
                            <input style={contactField} type="text" placeholder="Enter your email" /><br />
                            <input style={contactField} type="text" placeholder="subject" /><br />
                            <textarea style={contactField} name="message" placeholder="Your message" /><br />
                            <input style = {contactBtn} type="button" value="Send" /><br />
                        </div>
                    </form>
                </div> */}
            
            </Container>
          
         
        );
    }
}


const imgStyle = {
    float: "right",
    borderRadius: "50%",
    width: '200px' 
}

const Link1 = {
    textDecoration: "none",
    marginLeft: "40px",
    fontSize: "30px",
}
 const divLink1 = {
    float:"right",
   textDecoration: "none"
 }

 const otherLinks = {
   textDecoration:"none",
  }
 const navigation = {
     display: 'inline block',
     
 }

 const followBtns = {
     paddingTop:"40px",
     marginBottom: "100px"

    
 }  
 const btns = {
    textAlign: 'center',
    width:"90px",
    margin: "4px 2px",
    borderRadius:"2px"
 }
 const formStyle ={
    textAlign:"center",
    paddingTop:"40px",
 }
 const subField = {
     padding: "10px",
     width: "60%",
     borderRadius: "5px",
     margin: '10px',
     
 }
 const subBtn = {
     padding: '5px',
     marginTop: '10px',
     marginBottom: '30px',
     borderRadius: "5px",
     width: '10%'
     
 }
 const contactField = {
    padding: "10px",
    width: "60%",
    borderRadius: "5px",
    margin: '10px',
 }
 const contactBtn = {
    padding: '5px',
    marginTop: '5px',
    borderRadius: "5px",
    marginBottom: '120px',
    width: '10%'
    
 }
 const articleStyle = {
     marginBottom: '400px',
     marginTop: '150px'
 }
 const footerStyle ={
        marginBottom: '100px'
 }
 
export default Header;
