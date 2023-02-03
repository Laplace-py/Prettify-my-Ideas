import React from 'react'

export default function DescriptionChangeItem(props) {
	let key_description, id_description = props.id;
	key_description += "key"
	let text = props.text;
	return (
		<div className="row editItem">
			<div className="col-md-12">
				<span className='label-item text'>
					<label htmlFor="Description">Description</label>
					<textarea name="Description" key={key_description} id={id_description} className="form-control item">{text}</textarea>
				</span>
			</div>
		</div>
	)
}
