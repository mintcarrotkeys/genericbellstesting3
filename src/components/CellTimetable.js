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
        "tt__cell__name--6char"
    ]
    let nameLengthCSS = "";
    let nameLength = props.name.length;
    if (nameLength <= 3) {
        nameLengthCSS = cssIdentifiers[0];
    }
    else if (nameLength >= 4 && nameLength <= 5) {
        nameLengthCSS = cssIdentifiers[1];
    }
    else if (nameLength >= 6) {
        nameLengthCSS = cssIdentifiers[2];
    }

    let cssRoomIdentifiers = [
        "tt__cell__room--3char",
        "tt__cell__room--4char",
        "tt__cell__room--5char",
        "tt__cell__room--6char"
    ]

    let displayRoom = props.room;
    let roomLengthCSS = "";
    if (displayRoom.length > 6) {
        displayRoom = displayRoom.substring(0, 6);
    }
    if (displayRoom.length <= 3) {
        roomLengthCSS = cssRoomIdentifiers[0];
    }
    else if (displayRoom.length === 4) {
        roomLengthCSS = cssRoomIdentifiers[1];
    }
    else if (displayRoom.length === 5) {
        roomLengthCSS = cssRoomIdentifiers[2];
    }
    else if (displayRoom.length >= 6) {
        roomLengthCSS = cssRoomIdentifiers[3];
    }

    const output = (
        <div className="tt__cell">
            <div className={"tt__cell__name " + nameLengthCSS} style={iconStyle}>{props.name}</div>
            <div className={"tt__cell__room "+ roomLengthCSS}>{displayRoom}</div>


        </div>
    );


    return output;
}