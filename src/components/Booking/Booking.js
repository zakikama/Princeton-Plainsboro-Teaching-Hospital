import React, { Component,useState, useContext }from 'react';
 import '../assets/styles/Booking_css.css'
 import { FirebaseContext } from '../firebase'
 import Sidebar from '../Sidebar/index'
 import emailjs from 'emailjs-com';
 
    
class Booking extends Component {
        
        static contextType = FirebaseContext
        constructor() {
          super();
          this.state = {
            email: '',
            username: '',
            date:'',
            num:'', 
            heure:''
          }
          this.handleChange = this.handleChange.bind(this);
          this.handleSubmit = this.handleSubmit.bind(this); // <-- add this line
        }
        handleChange(e) {
          this.setState({
            [e.target.name]: e.target.value
          });
        }
        handleSubmit(e) {
          e.preventDefault();
          const firebase=this.context;
        
          const item = { 
            user: this.state.username,
            date: this.state.date,
            num:this.state.num,
            heure:this.state.heure,
      
          }
          firebase.WriteBd(this.state.username).set(item);
          
          this.setState({
             
            username: '',
            date:'',
            num:'',
            heure :'' 
          });
          emailjs.sendForm('service_856uiaf', 'template_n6fxtga', e.target, 'user_fCrqHJvcZoajYD6C1E0jk')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset();
        }
        
       
        render() {
            
          return (
            <div class="flex-container">
            <div class="flex-child magenta">
                <Sidebar/>
            </div>
            <div class="flex-child green">
            <div className="container-fluid">
              <div className="container">
                <div className="formBox">
                  <form onSubmit={this.handleSubmit   }>
                    <div className="row">
                      <div className="col-sm-12">
                        <h1>Set an appointment</h1>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="inputBox ">
                          
                       Name   <input type="text" name className="input"name="username" placeholder="Name" onChange={this.handleChange} value={this.state.username} placeholder=" " required />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="inputBox">
                          <div className="inputText"> </div>
                         Date <input type="date" name="date" id="num" placeholder="date" onChange={this.handleChange} value={this.state.date} required className="input" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                       
                      <div className="col-sm-6">
                        <div className="inputBox">
                   Mobile       
                          <input type="text" name className="input" name="num" id="num" placeholder= "" onChange={this.handleChange} value={this.state.num} required />
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="inputBox">
                        <div className="inputText"> </div>    
                     Heure     <input type="text" name className="input" name="heure" id="heure " placeholder= "" onChange={this.handleChange} value={this.state.heure} required />
                        </div>
                      </div>
                     
                    <div className="row">
                      <div className="col-sm-12">
                          
                        <input type="submit" class="simple" defaultValue="Send Message" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
        </div>
      </div>
              
            
         );
        }
      }
          export default Booking