const Try = (props) => {
    console.log(props.data);
    const color = props.color
    const value = props.value

    return( 
    <>
    <h1 key = {color} style={{color:value}}>{color}</h1>
    
    </>)
}

export default Try