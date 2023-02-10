import { useState } from "react";


const MyInformation = () => {
    // const [fullname, setFullname] = useState("");
    // function Getdata(e) {
    //     e.preventDefault();
    //     console.log(fullname)

    let [number, setNumber] = useState(0)

    const increaseNumber = () => {
        setNumber(number++)
    }

    const decreaseNumber = () => {
        setNumber(number--)
    }

    const Reset = () => {
        setNumber(0)
    }
    const myCustomizedStyle = {
        color: "white",
        backgroundColor: " black",
        fontSize: "20px",
        margin: "10px",
        borderRadius: "20px",
        border: "2px solid black",
        width: "100px",
        height : "50px",
        cursor  : "pointer"
    }
    return (
        <div className="information">
            <p style={{ color: "blue", fontSize: "15px" ,margin:"50px"}}>{number}</p>
            <button style={myCustomizedStyle} onClick={increaseNumber}> + </button>
            <span></span>
            <button style={myCustomizedStyle} onClick={decreaseNumber}> - </button>
            <button style={myCustomizedStyle} onClick={Reset}> Reset </button>
        </div>
    )
}


export default MyInformation;