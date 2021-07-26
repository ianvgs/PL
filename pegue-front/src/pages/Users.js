import React, { Component } from 'react'
import ax from "../api";
import history from '../history'




class Usuario extends Component {    
    
    constructor() {
        super()
        this.state = {            
            email: '',
            password: '',
            auth:false           
        } 
    }    

    handleEmailChange = event => {
        this.setState({
            email: event.target.value
        })
    }
    handlePasswordChange = event => {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit = async () => {         
        
        const { data: { token } } = await ax.post('http://localhost:3333/login/',{
            email: this.state.email,
            password:this.state.password
        });
        console.log(token)
        localStorage.setItem('token', JSON.stringify(token));
        ax.defaults.headers.Authorization = `Bearer ${token}`;
        this.setState({auth:true})
        history.push('/users'); 
        

    }

    
    render() {
        return (
            
            <>
            <div>
                <h1>
                    Você está em uma rota autenticada.
                </h1>
            </div>


                <div style={{ textAlign: 'center', justifyContent: 'left', width: "100%", marginTop: 100, height: 350 }}>

                    
                        <div>
                            <label>E-mail</label><br />
                            <input value={this.state.email} onChange={this.handleEmailChange}></input>
                        </div>
                        <div>
                            <label>Password</label><br />
                            <input type='password'  value={this.state.password} onChange={this.handlePasswordChange}>
                            </input>
                        </div>
                        <button onClick={this.handleSubmit}>Login</button>
                                      

                                            
                </div>
            </>
        )
    }
}

export default Usuario;