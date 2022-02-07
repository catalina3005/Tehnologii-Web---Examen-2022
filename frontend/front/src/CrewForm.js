import React, {useState, useEffect} from 'react';
import {useParams, useNavigate} from "react-router-dom";
import './confirmDialog';

function CrewForm(props) {
	const navigate = useNavigate();
	const {crewId} = useParams();
	const [crew, setCrew] = useState({
		nume: '',
		rol: '',
	});
	const loadCrew = async (crewId) => {
		if (crewId && crewId !== 'new') {
			const response = await fetch(`http://localhost:8080/api/crewMember/${crewId}`);
			if (response.status === 200) {
				setCrew(await response.json());
			}
		}
	}
	useEffect(() => loadCrew(crewId), [crewId]);
	async function saveCrew() {
		if (crewId === 'new') {
			const response = await fetch('http://localhost:8080/api/crewMember', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(crew)
			});
			if (response.status === 201) {
				navigate('/');
			}
		} else {
			const response = await fetch(`http://localhost:8080/api/crewMember/${crewId}`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(crew)
			});
			if (response.status === 204) {
				navigate('/');
			}
		}
	}
	async function deleteCrew() {
		if (crewId && crewId !== 'new'
			&& await document.getElementById('dialog')
				.confirmDialog('Stergeti echipa?')) {
			const response = await fetch(`http://localhost:8080/api/crewMember/${crewId}`, {
				method: 'DELETE'
			});
			if (response.status === 204) {
				navigate('/');
			}
		}
	}
	function set(property, value) {
		const record = {...crew};
		record[property] = value;
		setCrew(record);
	}
	return (
		<div className="form">
			<h1>Add Crew</h1>
			<form onSubmit={saveCrew} onReset={() => navigate('/')}>
				<label>Nume</label>
				<input type="text" value={crew.nume}
					onChange={event => set('nume', event.target.value)}/>
				<label>Rol</label>
				<input type="text" value={crew.rol}
					onChange={event => set('rol', event.target.value)}/>
				<div className="buttons">
					<input type="submit" value="Save"/>
					{crewId && crewId !== 'new' && <input type="button" className="delete"
						value="Delete" onClick={deleteCrew}/>}
					<input type="reset" value="Cancel"/>
				</div>
			</form>
			<div id="dialog" className="modal-dialog"/>
		</div>		
	);
}

export default CrewForm;