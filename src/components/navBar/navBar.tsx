import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { LoginRegister } from '../landing/LoginRegister';
import { IState} from '../redux/reducers';
import {landingButtons} from'../config/ButtonInfo/landingButtons';
import { SearchComponent } from '../searchComponent/searchComponent';
import { SearchBar } from '../userHome/searchbar/SearchBar';


export const NavBar: React.FC = (props:any) => {
    const buttons = useSelector<IState, landingButtons>(state => state.landingButtonState);

    function logOut(){
        sessionStorage.setItem("LoggedIn", "false");
        sessionStorage.setItem("user", "undefined");
        sessionStorage.setItem("username", "undefined")
        window.location.href = '/';
    }
    function FeedPage(){
        window.location.href = '/feed';
    }
    function AccountPage(){
        window.location.href = '/account';
    }
    function Landing(){
        window.location.href = '/';
    }
    function userHome(){
        if (sessionStorage.getItem("user") !== "undefined") {
            window.location.href = '/userHome';
        }
        else{
            window.location.href = '/';
        }
    }
    function AccHomeLogout(){
        return(
            <div className = "landingButtonsPanel inline">
                <button className = "navButtons" onClick= {AccountPage}>My Account</button>
                <button className = "navButtons" onClick={logOut}>Log Out</button>
            </div>

        );
    }
    function searchToggle(){
        setToggle(!toggle);
        console.log('button works')
    }
    
    const [toggle, setToggle] = useState(false);


    return (
        <div>

        <div className = 'navBar'>
            <button className = "navButtonsHome" onClick = {Landing}> </button>
            <button className = "navButtons" onClick = {FeedPage}>Feed</button>
            <button className = "navButtons" onClick = {userHome}>My Page</button>
            <button className = "navButtons" onClick = {searchToggle}>Search</button>
            
            
           
            <button className = "navButtons accountButton dropdown-toggle">
                Account
                <div className = "dropdown-content">
                    
                    {(sessionStorage.getItem("LoggedIn") === "true") ? <AccHomeLogout/> : <LoginRegister/>}
                    
                </div>
            
            </button>
            {toggle && <SearchBar/>}

        </div>
            
        </div>
        
    )
}
