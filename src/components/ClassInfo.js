import React, { useState } from 'react';
import {colPickerIcons} from "../assets/nav-icons";
import ColourPicker from "./ColourPicker";




export default function ClassInfo(props) {

    /**
     * rawName
     * displayName
     * colour: hex, isDark
     * displayCode
     * refId
     *
     * reportInput
     *
     * **/
    const [data, setData] = useState(props.obj);
    const [colPicker, setColPicker] = useState(false);

    React.useEffect(() => {
        setData(props.obj);
    }, [props.obj]);

    function handleName(e) {
        e.preventDefault();
        props.reportInput(data.refId, 'displayName', e.target.value);
        setData({...data, ...{'displayName': e.target.value}});
    }

    function handleCode(e) {
        e.preventDefault();
        props.reportInput(data.refId, 'displayCode', e.target.value);
        setData({...data, ...{'displayCode': e.target.value}});
    }

    function checkName(e) {
        let trimmed = data.displayName.trim();
        if (trimmed === "") {
            props.reportInput(data.refId, 'displayName', data.defaultName);
            setData({...data, ...{'displayName': data.defaultName}});
        }
        else if (trimmed !== data.displayName) {
            props.reportInput(data.refId, 'displayName', trimmed);
            setData({...data, ...{'displayName': trimmed}});
        }
    }
    function checkCode(e) {
        let trimmed = data.displayCode.trim();
        if (trimmed === "") {
            props.reportInput(data.refId, 'displayCode', data.refId.substring(0, 3));
            setData({...data, ...{'displayCode': data.refId.substring(0, 3)}});
        }
        else if (trimmed !== data.displayCode) {
            props.reportInput(data.refId, 'displayCode', trimmed);
            setData({...data, ...{'displayCode': trimmed}});
        }
    }

    function handleCol(e) {
        setColPicker(!colPicker);
    }

    function reportCol(colObj) {
        props.reportInput(data.refId, 'colour', colObj);
        setColPicker(false);
        setData({...data, ...{'colour': colObj}});
    }

    const styleSettings = {
        backgroundColor: data.colour.hex,
        color: (data.colour.isDark ? '#ffffff' : '#333333'),
    };

    const colPickerOpened = (colPicker ? " settings__classInfo__col--selected" : "");

    const output = (
        <div className="settings__classInfo">
            <h6 className="settings">{data.rawName}</h6>
            <div className="settings settings__classInfo__row">
                <div className={"settings__classInfo__col" + colPickerOpened} style={styleSettings} onClick={handleCol}>
                    {(colPicker ? colPickerIcons.close : colPickerIcons.drop)}
                </div>
                <input
                    type="text"
                    id={data.refId + 'n'}
                    className="inputBox settings__classInfo__name"
                    autoComplete="off"
                    value={data.displayName}
                    onChange={handleName}
                    onBlur={checkName}
                />
                <input
                    type="text"
                    id={data.refId + 'c'}
                    className="inputBox settings__classInfo__code"
                    autoComplete="off"
                    value={data.displayCode}
                    onChange={handleCode}
                    onBlur={checkCode}
                    maxLength={6}
                />
            </div>
            {(colPicker ? <ColourPicker reportCol={reportCol} current={data.colour} /> : "")}
        </div>
    );



    return output;
}