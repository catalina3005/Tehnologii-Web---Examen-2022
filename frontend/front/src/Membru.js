import {useState, useEffect} from 'react';
import Listamembri from './Listamembri';

function Membri() {
    const [membri, setMembru] = useState([]);
    const loadMembri = async () => {
        const response = await fetch('http://localhost:8080/api/crewMember');
        if(response.status === 200) {
            setMembru(await response.json());
        }
    }
    useEffect(() => loadMembri(), []);
    return(
        <>
        <div>
            {
                membri.map((crewMember, index) => <Listamembri key={index} crewMember={crewMember}/>)
            }
        </div>
        <a href="#/ships">Ships</a>
        </>
    );
}
export default Membri;

