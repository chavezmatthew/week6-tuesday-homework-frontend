import React from 'react'

const ReusableButton = ({handleClick, title = 'click me'}) => {
    const buttonStyle = {
        backgroundColor: 'blue',
        color: 'white',
        padding: '10px',
        borderRadius: '10px',
        border: 'none'
    }

    return (
    <div>
        <button style={buttonStyle} onClick={handleClick}>{title}</button>
    </div>
  )
}

export default ReusableButton