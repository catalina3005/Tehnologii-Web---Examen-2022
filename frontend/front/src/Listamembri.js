function Listamembri(props) 
{
    const {crewMember} = props;
    return (
        <>
        <div>
            <ul>
                <li>{crewMember.nume}</li>
                <li>{crewMember.rol}</li>

            </ul>
        </div>
        <a href={`#/crewMembers/${props.crewMember.id}`}>{props.crewMember.nume}</a>
        </>
    );
}

export default Listamembri;