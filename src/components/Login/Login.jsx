import React from "react";
import {Field, reduxForm} from "redux-form";
import {createField, Input} from "../FormsControls/FormsControls";
import {maxLengthCreator, minLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "../FormsControls/FormsControls.module.css"


const maxLength = maxLengthCreator(30);
const minLength = minLengthCreator(2);

const LoginForm = ({handleSubmit,error,captchaUrl}) => {
    return(
            <form onSubmit={handleSubmit}>
                    {createField("Email","email",Input,[required,maxLength,minLength])}
                    {createField("Password","password",Input,[required,maxLength,minLength],{type:"password"})}
                    {createField(null,"rememberMe",Input,null,{type:"checkbox"},"Remember me")}

                { captchaUrl && <img src={captchaUrl} alt="captcha"/>}
                { captchaUrl && createField("Symbols from image","captcha",Input,required,{})}

                { error && <div className={style.formSummaryError}>
                    {error}
                </div>}
                <div>
                    <button>Log in</button>
                </div>
            </form>
    )
};

const LoginReduxFrom = reduxForm ({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe,formData.captcha);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxFrom onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
    </div>
}

const mapStateToProps =(state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);