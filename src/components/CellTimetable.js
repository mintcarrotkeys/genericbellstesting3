import React, { useEffect, useState } from 'react';


export default function CellTimetable(props) {
    /**
     * name
     * room
     *
     *
     *
     * **/
    const iconStyle = {
        backgroundColor: props.colour.hex,
        color: (props.colour.isDark ? 'white' : 'black')
    }

    let cssIdentifiers = [
        "tt__cell__name--3char",
        "tt__cell__name--4-5char",
        "tt__cell__name--4-5char",
        "tt__cell__name--6char"
    ]
    let nameLength = cssIdentifiers[props.name.length];


    const output = (
        <div className="tt__cell">
            <div className={"tt__cell__name " + nameLength} style={iconStyle}>{props.name}</div>
            <div className="tt__cell__room">{props.room}</div>


        </div>
    );


    return output;
}