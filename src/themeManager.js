import {passStr, saveStr} from "./version";


const lightVariables = {
    '--nav-background': 'white',
    '--page-background': '#eeeeee',
    '--nav-light': '#e0e0e0',
    '--glow': 'rgba(0, 0, 0, 0.5)',
    '--glow2': 'rgba(0, 0, 0, 0.15)',
    '--glow3': 'rgba(0, 0, 0, 0.25)',
    '--text0': 'black',
    '--text1': 'black',
    '--text2': '#222222',
    '--text3': '#888888',
    '--text4': '#333333',
    '--text10': 'white',
    '--ui-green': '#92c748',
    '--ui-yellow': '#ffc633',
    '--ui-grey0': '#333333',
    '--ui-grey1': '#d0d0d0',
    '--ui-grey2': '#d0d0d0',
    '--card': 'white',
    '--card-outline': '#d0d0d0',
    '--timetable-light': '#eeeeee',
    '--timetable-nonselected': '#d0d0d0',
    '--button-front': 'white',
    '--button-back': '#333333',
    '--input-focus': '#333333',
    '--link-colour': '#0D4C73',
    '--shadow-length-1-2': '1px'
}

const darkVariables = {
    '--nav-background': '#222527',
    '--page-background': '#151515',
    '--nav-light': '#3e4347',
    '--glow': 'rgba(0, 0, 0, 0.5)',
    '--glow2': 'rgba(0, 0, 0, 0.5)',
    '--glow3': 'rgba(0, 0, 0, 0.5)',
    '--text0': 'white',
    '--text1': '#dddddd',
    '--text2': '#dddddd',
    '--text3': '#dddddd',
    '--text4': 'white',
    '--text10': 'black',
    '--ui-green': '#95C059',
    '--ui-yellow': '#E8BD31',
    '--ui-grey0': '#dddddd',
    '--ui-grey1': '#cccccc',
    '--ui-grey2': '#dddddd',
    '--card': '#303032',
    '--card-outline': '#151515',
    '--timetable-light': '#4c4c4f',
    '--timetable-nonselected': '#4c4c4f',
    '--button-front': '#333333',
    '--button-back': '#dddddd',
    '--input-focus': '#95c059',
    '--link-colour': '#61B0B5',
    '--shadow-length-1-2': '2px'
};

export function swapTheme() {
    let currentTheme = passStr('isDarkMode');
    if (currentTheme) {
        setTheme('light');
    }
    else {
        setTheme('dark');
    }
}

export function setTheme(input) {
    let isDark = false;
    let source;
    let root = document.documentElement;
    if (input === 'dark') {
        isDark = true;
    }
    if (isDark) {
        source = darkVariables;
    }
    else {
        source = lightVariables;
    }
    for (const prop in source) {
        root.style.setProperty(prop, source[prop]);
    }
    saveStr("isDarkMode", isDark);
}

export function checkTheme() {
    const params = new URLSearchParams(window.location.href.toString().split("?")[1]);
    if (params.has('theme')) {
        let theme = params.get('theme');
        if (theme === "dark") {
            setTheme('dark');
            saveStr('isDarkMode', true);
        }
        else if (theme === "light") {
            setTheme('light');
            saveStr('isDarkMode', false);
        }

    }

    let mode = passStr('isDarkMode');
    if (mode === null) {
        setTheme('light');
        saveStr('isDarkMode', false);
    }
    else if (mode === false) {
        setTheme('light');
    }
    else if (mode === true) {
        setTheme('dark');
    }
}