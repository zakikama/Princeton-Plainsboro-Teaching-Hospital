import React from 'react'
import doctors from '../assets/doctors.png';
const Landing = () => {
    return (
        <body>
        
         <div className="signupLoginBox">
            <div className= "slContainer">
                <div className="formBoxLeftSignup">
                <img class="imagebg"
                src={doctors}
                 />
                </div>
                <div className ="formBoxRight">
                    <div className="formContent">
                    <h2>Welcome</h2>
                        <form>
                           
                            
                            <div class="col-md-3 col-sm-3 col-xs-6"> <a href="/signup" class="btn btn-sm animated-button victoria-one">Sign up</a> </div>
                           

                            <div class="col-md-3 col-sm-3 col-xs-6"> <a href="/login" class="btn btn-sm animated-button victoria-one">Log in </a> </div>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>
        </body>
      
    )
}

export default Landing
