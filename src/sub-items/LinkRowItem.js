import React from 'react'

export default function LinkRowItem(props) {
	let key_link, id_link = props.id + " link";
	key_link += "key"
	let link = props.link;
	function randomNum() {
		return Math.floor((Math.random() * 100) + 1);
	}
	return (
		<div className='linkRow'>
			<div className="linkText">
				<a key={key_link + randomNum() + "link"} href={link}>{link}</a>
			</div>
			<button key={key_link + randomNum() + "button"} id={id_link + randomNum() + "Button"} onClick={()=>props.onClick(link)} type="button" class="btn btn-danger">
				-
			</button>
		</div>
	)
}
