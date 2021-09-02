import React, { useState } from 'react'
import { Form, Alert, Container, Row, Col, Image } from 'react-bootstrap';
import Login from './Login';


function Registration() {

    const [name, setName] = useState("")
    const [mobile, setMobile] = useState()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   
    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);
    const [info, setInfo] = useState(true);




    // on form submit...
    function handleFormSubmit(e) {
        e.preventDefault();

        if (!name || !mobile || !email || !password ) {
            setFlag(true);

        } else {
            setFlag(false);
            localStorage.setItem("SubmissionEmail", JSON.stringify(email));
            localStorage.setItem("SubmissionPassword", JSON.stringify(password));
            console.log("Saved in Local Storage");

            setLogin(!login)

        }

    }

    // Directly to the login page
    function handleClick() {
        setLogin(!login)
    }

    // Company Info
    function infoClick() {
        setInfo(!info)
    }

    if (typeof ["email"] !== "undefined") {

           

        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      
        if (!pattern.test(["email"])) {
      
          
        }
      
      }



    return (


        <>
            <nav className="navbar navbar-light">
                <div className="container" onClick={infoClick}>
                    <h4 className="btn btn-dark btn-lg btn-block">Sunday Mobility</h4>
                </div>
            </nav>
            <Container>
            <Row>
                <Col>
                <Image src="images/1.jpg" fluid />
                </Col>
                <Col>
            {info ? <div> {login ? <form onSubmit={handleFormSubmit}>
               
                <h3>Register</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter email" onChange={(event) => setName(event.target.value)} />
                </div>

                
                <div className="form-group">
                    <label>Mobile</label>
                    <input type="number" className="form-control" pattern="\d{3}[\-]\d{3}[\-]\d{4}" placeholder="Enter Mobile Number" onChange={(event) => setMobile(event.target.value)} />
                </div>


                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$" placeholder="Enter password" onChange={(event) => setPassword(event.target.value)} />
                </div>


                


                <button type="submit" className="btn buttonn btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#" onClick={handleClick} >Log in</a>
                </p>
                {flag &&
                    <Alert color='primary' variant="danger" >
                        I got it you are in hurry! But every Field is important!
                </Alert>
                }

            </form> : <Login />}
            
            </div> : <div>
                    
                </div>}
                </Col>
                </Row>
                </Container>
        </>
    )
}

export default Registration