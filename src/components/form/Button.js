import React from 'react'

const Button = ({isDisabled, buttonType, buttonFunction, children}) => {
    
    return (
        <button disabled={isDisabled} className={buttonType} onClick={buttonFunction}>{children}</button>
    )
}

export default Button