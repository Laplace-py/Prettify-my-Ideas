import React from 'react'
import { useState } from 'react'
import AccordionItemEdit from './AccordionItemEdit'
export default function Title() {
	const [editing,setEditing] = useState(true);
	function openEdit() {
		setEditing(!editing);
	}
	
	function closeEdit() {
		setEditing(!editing);
	}
  	if (editing){
		return (
			<div className="row">

				<div className="col-md-6">
					<span className="Page-Title">My ideas</span>
				</div>
				
				<div className="col-md-6">
					<button type="button" onClick={openEdit} className="btn btn-primary add-idea">Add Idea</button>
				</div>

			</div>
  	)
	}
	else {
		return (
			<div>
				<AccordionItemEdit key={"ACIEdit"} id={"Title"} json={""} onClick={closeEdit}/>
			</div>
		)
	}

}
