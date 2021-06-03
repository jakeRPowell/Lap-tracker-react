import React from 'react'

import Button from '../form/Button'
import { calculateLapTimes, calculateAverage, formatMS, lapTimesSum, getLastLap } from './updateRunnerStats';

const TableRow = ({
    timeElapsed, 
    runners, 
    setRunners, 
    id, 
    name, 
    lapCount, 
    lapTimes, 
    average, 
    total, 
    last
}) => {

    const lapCompleteHandler = (e) => {
        let runner = runners[id];
        let newLapTimes = calculateLapTimes(runner, timeElapsed)
        let newAverage = calculateAverage(newLapTimes)
        let newTotal = lapTimesSum(newLapTimes)
        let newLastLap = getLastLap(newLapTimes)
        let updatedRunner = {
            ...runner,
            //add new lap to lapTimes
            lapTimes: newLapTimes,
            lapCount: lapTimes.length + 1,
            average: formatMS(newAverage),
            total: formatMS(newTotal),
            last: formatMS(newLastLap)
        }
        
        setRunners([
            ...runners.slice(0, id),
            updatedRunner,
            ...runners.slice(id + 1)
        ])
    }

    return (
        <tr>
            <td><Button buttonType='lap' buttonFunction={(e) => lapCompleteHandler(e)}>{name}</Button></td>
            <td>{lapCount}</td>
            <td>{average}</td>
            <td>{total}</td>
            <td>{last}</td>
        </tr>
    )
}

export default TableRow