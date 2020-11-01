import React from 'react';
import { signInWithGoogle } from '../../../firebase/firebase.utils';
import CustomButton from '../../common/custom-button/custom-button.component';
import FormInput from '../../common/form-input/form-input.component';
import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(){
        super();

        this.state = {
            email  : '',
            password: ''
        }
    }

    handleSubmit = event=>{
        event.preventDefault();

        this.setState({
            email:'',
            password:''
        })
    }

    handleChange = event=>{
        const {value, name} = event.target;

        this.setState({[name]:value});
    }

    render(){
        return(
            <div className='sign-in'>
                <div className='title'>
                    <h1>I already have an account</h1>
                    <span>sign in with your email and password</span>
                </div>

                <form onSubmit={this.handleSubmit}>
                    <FormInput label="email" name="email" type="email" value={this.state.email} handleChange={this.handleChange} required/>

                    <FormInput label="paswrod" name="password" value={this.state.password} handleChange={this.handleChange} required/>

                    <CustomButton type="submit"> SIGN IN </CustomButton>
                    <CustomButton onClick={signInWithGoogle}> Sign in with Google</CustomButton>
                </form> 
            </div>
        )
    }
}

export default SignIn;