import React, { useState, useEffect } from 'react';
import axios from 'axios';

type LineStatusProps = {
    id: string,
    name: string,
    status: string,
    affectedStations: string,
    info: string
}

const StatusBoard: React.FC = () => {
    const [lineStatuses, setLineStatuses] = useState<LineStatusProps[]>([]);

    useEffect(() => {
        axios.get('http://localhost:3000/lines')
            .then(res => {
                console.log('res', res);
                setLineStatuses(res.data);
            })
            .catch(err => {
                console.log('err', err)
            })
    }, [])

    if (!lineStatuses[0]) {
        return (
            <div>
                <p>Nothing to see here</p>
            </div>
        )
    }

    return (
        <div>
            {lineStatuses.map((line) => (
                <div key={line.id}>
                    <h2>{line.name} line</h2>
                    <p>{line.status}</p>
                    {line.affectedStations && <p>Affected stations: {line.affectedStations}</p>}
                    {line.info && <p>{line.info}</p>}
                </div>
            ))}
        </div>
    )
}

export default StatusBoard;