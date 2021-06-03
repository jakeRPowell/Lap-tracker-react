import React from 'react'

const Clock = ({timeElapsed}) => {

    let time = timeElapsed.toString()

    return (
        <div className="clock">{time}</div>
    )
}

export default Clock