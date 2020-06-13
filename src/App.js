import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
/*import Music from "./components/Music/Music";*/
/*import News from "./components/News/News";*/
/*import Settings from "./components/Settings/Settings";*/
import {Route, withRouter} from "react-router-dom";
/*import DialogsContainer from "./components/Dialogs/DialogsContainer";*/
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import {withSuspense} from "./hoc/withSuspense";

const Music = React.lazy(() => import('./components/Music/Music'));
const News = React.lazy(() => import('./components/News/News'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));



class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (

                <div className='app-wrapper'>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Route path='/dialogs'
                               render={withSuspense(DialogsContainer)}/>
                        <Route path='/profile/:userId?'
                               render={() => <ProfileContainer/>}/>
                        <Route path='/music'
                               render={withSuspense(Music)}/>
                        <Route path='/news'
                               render={withSuspense(News)}/>
                        <Route path='/settings'
                               render={withSuspense(Settings)}/>
                        <Route path='/users'
                               render={() => <UsersContainer/>}/>
                        <Route path='/login'
                               render={() => <LoginPage/>}/>
                    </div>
                </div>
        )

    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App);
