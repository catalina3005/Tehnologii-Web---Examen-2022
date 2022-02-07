function Listanave(props) 
{
    const {ship} = props;
    return (
        <>
        <div>
            <ul>
                <li>{ship.nume}</li>
                <li>{ship.displacement}</li>

            </ul>
        </div>
        <a href={`#/ships/${props.ship.id}`}>{props.ship.nume}</a>
        </>
    );
}

export default Listanave;