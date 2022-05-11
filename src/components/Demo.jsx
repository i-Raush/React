import {useState} from 'react'
import style from './Demo.module.css';
import Test from './Test'
import Button from './Button'
const Demo = (props) => {
    console.log(props);
    let [text, setText] = useState('')
    const typeing = (e) => {
        text = e.target.value
        console.log(text);
        setText (text);
    }
    return (<div> 
        <h1 className={style.blue}>All Good..?</h1>
    <Test></Test> 
    <Button></Button>
    <h1>Happy Birthday {props.name}</h1>
    <h3>{props.age}</h3>
    <input type="text" placeholder='Enter Text' onChange={typeing} />
    <h1>{text}</h1>
    <h2>Party Kab de rhe ho???</h2>
           </div>
           
           )
}

export default Demo