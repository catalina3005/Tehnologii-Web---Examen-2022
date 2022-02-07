import React, {useState, useEffect} from 'react';
import {useParams, useNavigate} from "react-router-dom";
import './confirmDialog';

function NaveForm(props) {
	const navigate = useNavigate();
	const {navaId} = useParams();
	const [nava, setNava] = useState({
		nume: '',
		displacement: '',
	});
	const loadNava = async (navaId) => {
		if (navaId && navaId !== 'new') {
			const response = await fetch(`http://localhost:8080/api/ship/${navaId}`);
			if (response.status === 200) {
				setNava(await response.json());
			}
		}
	}
	useEffect(() => loadNava(navaId), [navaId]);
	async function saveNava() {
		if (navaId === 'new') {
			const response = await fetch('http://localhost:8080/api/ship', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(nava)
			});
			if (response.status === 201) {
				navigate('/');
			}
		} else {
			const response = await fetch(`http://localhost:8080/api/ship/${navaId}`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(nava)
			});
			if (response.status === 204) {
				navigate('/');
			}
		}
	}
	async function deleteNava() {
		if (navaId && navaId !== 'new'
			&& await document.getElementById('dialog')
				.confirmDialog('Stergeti nava?')) {
			const response = await fetch(`http://localhost:8080/api/ship/${navaId}`, {
				method: 'DELETE'
			});
			if (response.status === 204) {
				navigate('/');
			}
		}
	}
	function set(property, value) {
		const record = {...nava};
		record[property] = value;
		setNava(record);
	}
	return (
		<div className="form">
			<h1>Add nava</h1>
			<form onSubmit={saveNava} onReset={() => navigate('/')}>
				<label>Nume</label>
				<input type="text" value={nava.nume}
					onChange={event => set('nume', event.target.value)}/>
				<label>Displacement</label>
				<input type="text" value={nava.displacement}
					onChange={event => set('descriere', event.target.value)}/>
				<div className="buttons">
					<input type="submit" value="Save"/>
					{navaId && navaId !== 'new' && <input type="button" className="delete"
						value="Delete" onClick={deleteNava}/>}
					<input type="reset" value="Cancel"/>
				</div>
			</form>
			<div id="dialog" className="modal-dialog"/>
		</div>		
	);
}

export default NaveForm;