import React from 'react'

import TableRow from './TableRow'

const Table = ({timeElapsed, runners, setRunners}) => {

    const runnersRows = runners.map(el => {
        return (
            <TableRow 
                timeElapsed={timeElapsed}
                runners={runners}
                setRunners={setRunners}
                name={el.name}
                lapCount={el.lapCount}
                lapTimes={el.lapTimes}
                average={el.average}
                total={el.total}
                last={el.last}
                key={el.id}
                id={el.id}
            />
        )
    })

    return (
        
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Number of laps</th>
                    <th>Average</th>
                    <th>Total time</th>
                    <th>Last</th>
                </tr>    
                {runnersRows}   
            </tbody>
            
        </table> 
        
    )
}

export default Table