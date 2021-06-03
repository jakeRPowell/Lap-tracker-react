import React from 'react'

import Button from '../form/Button'

const TableRow = ({runners, setRunners, id, name, laps, average, total, last}) => {

    const lapCompleteHandler = (e) => {
        setRunners([
            ...runners.slice(0, id),
            {
              ...runners[id],
              laps: runners[id].laps + 1
            },
            ...runners.slice(id + 1)
        ])
    }

    return (
        <tr>
            <td><Button buttonType='lap' buttonFunction={(e) => lapCompleteHandler(e)}>{name}</Button></td>
            <td>{laps}</td>
            <td>{average}</td>
            <td>{total}</td>
            <td>{last}</td>
        </tr>
    )
}

export default TableRow