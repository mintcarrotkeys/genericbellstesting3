import React, { useState, useEffect } from 'react';
import {passStr} from "../version";


export default function FeedItem(props) {
    /**
     * data
     *
     * **/
    let message = props.data;

    const [expand, setExpand] = useState(passStr('set_feeds_expanded') === 'yes');

    function handleClick() {
        setExpand(!expand);

    }

    let meetingInfo = "";
    if (message.isMeeting === 1) {
        let fill = {backgroundColor: '#d0d0d0'};
        let meetingMessage = "";
        if (props.date === message.meetingDate) {
            fill = {backgroundColor: '#ffc633'}
            meetingMessage = "Meeting: ";
        }
        else {
            let date = message.meetingDate.split("-");
            let months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            meetingMessage = Number(date[2]) + " " + months[Number(date[1])];
        }
        meetingInfo = (
            <div className="feedItem__meetingTag" style={fill}>
                <h6 className="feedItem__metadata feedItem__metadata__meeting">{meetingMessage}</h6>
                <h6 className="feedItem__metadata feedItem__metadata__meeting settings">{message.meetingTime}</h6>
            </div>
        );
        if (message.hasOwnProperty("meetingLocation") && message.meetingLocation) {
            meetingInfo = (
                <div className="feedItem__meetingTag" style={fill}>
                    <h6 className="feedItem__metadata feedItem__metadata__meeting">{meetingMessage}</h6>
                    <h6 className="feedItem__metadata feedItem__metadata__meeting settings">{message.meetingTime}</h6>
                    <h6 className="feedItem__metadata feedItem__metadata__meeting settings">{message.meetingLocation}</h6>
                </div>
            );
        }
    }

    const output = (
        <div
            className="feedItem"
            onClick={handleClick}
        >
            <h2 className="feedItem__title">{message.title}</h2>
            <div className="feedItem__metadataRow settings">
                {meetingInfo}
                <h6 className="feedItem__metadata">{message.authorName}</h6>
                <div className="feedItem__metadata">{message.displayYears}</div>
            </div>
            <p
                className={"settings feedItem__body " + (expand ? "feedItem__body--expanded" : "feedItem__body--minimised")}
            >
                {message.content}
            </p>
        </div>
    )
    return output;
}