import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../FormsControls/FormsControls";
import {maxLengthCreator, minLengthCreator, required} from "../../utils/validators/validators";

const maxLength = maxLengthCreator(10);
const minLength = minLengthCreator(2);

const LoginForm = (props) => {
    return(
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"Login"} name={"login"} component={Input} validate={[required,maxLength,minLength]}/>
                </div>
                <div>
                    <Field placeholder={"Password"} name={"password"} component={Input} validate={[required,maxLength,minLength]} />
                </div>
                <div>
                    <Field component={Input} name={"rememberMe"} type={"checkbox"}/>Remember me
                </div>
                <div>
                    <button>Log in</button>
                </div>
            </form>
    )
};

const LoginReduxFrom = reduxForm ({
    form: 'login'
})(LoginForm)

const Login = (props) => {

    const onSubmit = (formData) => {
        console.log(formData)
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxFrom onSubmit={onSubmit}/>
    </div>
}

export default Login;