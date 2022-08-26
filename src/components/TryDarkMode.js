import React, {useState} from "react";
import {swapTheme} from "../themeManager";
import {passStr} from "../version";
import {theme} from "../assets/nav-icons";


export default function TryDarkMode(props) {

    const [isDark, setIsDark] = useState(passStr('isDarkMode'));

    function changeTheme() {
        swapTheme(false);
        setIsDark(!isDark);
    }

    let buttonIcon = "";
    if (isDark) {
        buttonIcon = theme.sun;
    }
    else {
        buttonIcon = theme.moon;
    }

    let out = (
        <div className="group" style={{width: "fit-content", margin: "10px auto"}}>
            <div className="theme_switch_banner" >
                <button className="small__button settings button" onClick={changeTheme}>{buttonIcon}</button>
                <h5 style={{margin: "0px 5px"}}>try <b>dark mode</b> - our colour palette beautifully remastered.</h5>
            </div>
        </div>
    )

    return out;
}