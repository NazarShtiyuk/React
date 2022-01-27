import React, {useEffect, useState} from 'react';

const Launches = ({styleClass}) => {

    const [launches, setLaunches] = useState([])

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches')
            .then(launches => launches.json())
            .then(launches => setLaunches(launches.filter(launche => launche.launche_year !== '2000')))

    }, [])

    return (
        <div className={styleClass}>
            {launches.map(launche => <div key={launche.flight_number}>
                {launche.mission_name} - {launche.launch_year}
                <img src={launche.links.mission_patch}/>
            </div>)}
        </div>
    );
};

export default Launches;