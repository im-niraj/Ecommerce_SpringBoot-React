import React,{useState} from 'react';
import { connect } from 'react-redux';
import { userLogin } from '../../api/authenticationService';
import { authenticate, authFailure, authSuccess } from '../../redux/authActions';
import './login.css';

const Login = ({loading, error, ...props}) => {
    const [values, setValues] = useState({
        userName: '',
        password: ''
    });

    const handleSubmit=(evt)=>{
        evt.preventDefault();
        props.authenticate();

        userLogin(values).then((response)=>{

            console.log("response",response);
            if(response.status===200){
                props.setUser(response.data);
                props.history.push('/dashboard');
            }
            else{
                props.loginFailure('Something Wrong!Please Try Again'); 
            }
        }).catch((err)=>{
            if(err && err.response){
                switch(err.response.status){
                    case 401:
                        console.log("401 status");
                        props.loginFailure("Authentication Failed.Bad Credentials");
                        break;
                    default:
                        props.loginFailure('Something Wrong!Please Try Again'); 
                }
            }
            else{
                props.loginFailure('Something Wrong!Please Try Again');
            }
        });
        //console.log("Loading again",loading);
    }
    const handleChange = (e) => {
        e.persist();
        setValues(values => ({
            ...values,
            [e.target.name]: e.target.value
        }));
    };
    return (
        <div>
            <form onSubmit={handleSubmit} noValidate={false}>
                <input type="text"  placeholder='username' id="userName" name="userName" minLength={5} value={values.userName} onChange={handleChange} required/>
                <input type="password" name="password" id="password" placeholder='password' minLength={8} value={values.password} onChange={handleChange} required/>
                <button type='submit'>Login</button>
            </form>
        </div>
    );
}

const mapStateToProps=({auth}) => {
    console.log("state ",auth);
    return {
        loading : auth.loading,
        error : auth.error
    }
}

const maptDispatchToProps = ({dispatch}) => {
    return {
        authenticate : () => dispatch(authenticate()),
        setUser : (data) => dispatch(authSuccess(data)),
        loginFailure : (message) => dispatch(authFailure(message))
    }
}

export default connect(mapStateToProps, maptDispatchToProps)(Login);