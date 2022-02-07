import { useState, useEffect} from "react";
import Listanave from "./Listanave";

function Ships() {
    const [ships, setShips] = useState([]);
    const loadShips = async () => {
        const response = await fetch('http://localhost:8080/api/ship');
        if(response.status === 200) {
            setShips(await response.json());
        }
    }
    useEffect(() => loadShips(), []);
    return(
        <>
        <div>
            {
                ships.map((ship, index) => <Listanave key={index} ship={ship}/>)
            }
        </div>
        <a href="#/crewMembers">CrewMembers</a>
        </>
    );
}
export default Ships;

