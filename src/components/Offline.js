import React from "react";
import {noConnectionIcon} from "../assets/nav-icons";


export default function Offline(props) {


    return(
        <div className="noConnection group">
            {noConnectionIcon}
            <div>
                Failed to fetch data. You may be offline.
                The timetable below may not be correct as it was generated by the app.
            </div>
        </div>
    )
}