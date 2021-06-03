import React from 'react'

import TableRow from './TableRow'

const Table = ({runners, setRunners}) => {

    const runnersRows = runners.map(el => {
        return (
            <TableRow 
                runners={runners}
                setRunners={setRunners}
                name={el.name}
                laps={el.laps}
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
                    <th>Laps</th>
                    <th>Average</th>
                    <th>Total Time</th>
                    <th>Last</th>
                </tr>    
                {runnersRows}   
            </tbody>
            
        </table> 
        
    )
}

export default Table