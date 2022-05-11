import Try from './Try'

const Card = (props) => {
    const res = props.data
    console.log(res);

    return (
        <div>
            {res.map((v) => 
            <Try color={v.color} value={v.value}/>)}
        <h1>{props.data[0].color}</h1>
        <p>{props.data[0].value}</p>
        <h1>{props.data[1].color}</h1>
        <p>{props.data[1].value}</p>
        <h1>{props.data[2].color}</h1>
        <p>{props.data[2].value}</p>
        <h1>{props.data[3].color}</h1>
        <p>{props.data[3].value}</p>
        <h1>{props.data[4].color}</h1>
        <p>{props.data[4].value}</p>
        <h1>{props.data[5].color}</h1>
        <p>{props.data[5].value}</p>
        <h1>{props.data[6].color}</h1>
        <p>{props.data[6].value}</p>
        </div>
    );
}

export default Card