import React from "react";

const Square = ({ square, index, handleGamePlay}) => {
    const handleClick = () => {
        handleGamePlay(index)
    }
    
    return (
        <div onClick={handleClick} className='square'>{square}</div>
    )
}

export default Square