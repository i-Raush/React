import {React, useState} from 'react'
import style from './Button.module.css'

const Button = () => {

    let [text, setText] = useState('?')
    const onTest = () => {
        console.log("what's up!");
        text = "I'm bored!"
        console.log(text);
        setText ('Nice')
        console.log(text);
    }

    return (<div id='remind'>
        <button className={style.button} onClick={onTest} >Submit</button>
        <h1>{text}</h1>
        </div>)
}

export default Button 