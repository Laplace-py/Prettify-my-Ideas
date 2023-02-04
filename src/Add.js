import { React, useState } from 'react'
import TitleChangeItem from './sub-items/TitleChangeItem';
import DescriptionChangeItem from './sub-items/DescriptionChangeItem';
import StatusChangeItem from './sub-items/StatusChangeItem';
import LinkRowItem from './sub-items/LinkRowItem';
import AddLinkItem from './sub-items/AddLinkItem';
import SaveButtonItem from './sub-items/SaveButtonItem';

export default function Add(props) {
	//const [id, setId] = useState("");
	//const [all_ids,setAllIds] = useState([]);
	const prevId = Number(props.data.id);
	
	let newId = prevId + 1;
	// alert(newId);
	let id = newId;
	let id_title, id_description, id_status, id_links, id_save, id_link  = id;
	id_title += " add title";
	id_description += " add description";
	id_status += " add status";
	id_links += " add links";
	id_save += " add save";
	id_link += " add link";
	
	const statuses = ["In_Progress", "Done", "To_Do", "Delayed", "Not_Started"];
	const [savedLinks, setSavedLinks] = useState(["google.com"]);
	// const blank_json = {
	// 	"id":"I-003",
	// 	"Title":"",
	// 	"Links":[""],
	// 	"Description":"",
	// 	"Contributors":["Henric"],
	// 	"Status":"Not_Started",
	// 	"Github":"to be added",
	// 	"Difficulty":"",
	// 	"Observations":[""],
	// 	"Priority":""
	// }
	function exit(){
		// close the add component
		props.onClick();
	}
	function removeLink(link) {
		setSavedLinks(savedLinks.filter((item) => item !== link))
	}
	function addLink(link) {
		setSavedLinks([...savedLinks, link])
	}
	function isValidUrl(string) {
		if (String(string).includes("http://")) {
			try {
				new URL(string);
				addLink(string);
			} catch (err) {
				alert("Not a valid URL");
			}
		}
		else if (String(string).includes(".com") || String(string).includes(".org") || String(string).includes(".net")) {
			string = "http://" + string;
			try {
				new URL(string);
				addLink(string);
			} catch (err) {
				alert("Not a valid URL");
			}
		}
	}
	function addIdea(data) {
		const url = '/add';
		const request = new Request(url, {
			method: 'POST',
			headers: new Headers({
				'Content-Type': 'application/json'
			}),
			body: data
		});
		fetch(request)
	}
	function saveChanges() {
		let description = document.getElementById(id_description).value;
		let status = document.getElementById(id_status).value;
		let title = document.getElementById(id_title).value;
		let links = savedLinks;
		let info = {
			id: id,
			Title: title,
			Description: description,
			Status: status,
			Links: links
		}
		addIdea(JSON.stringify(info));
		exit();
	}

	return (
		<div className='container top'>
			<button type='button' className='btn btn-danger top-right' onClick={exit}>Exit</button>
			<TitleChangeItem id={id_title} text={""} />
			<DescriptionChangeItem id={id_description} text={""} />
			<StatusChangeItem id={id_status} statuses={statuses} />
			<AddLinkItem id={id_links} onClick={isValidUrl} />
			<div className='Scrollable-sub-content item'>
				{savedLinks.map((link) => <LinkRowItem id={id_link} link={link} onClick={removeLink} />)}
			</div>
			<SaveButtonItem id={id_save} onClick={saveChanges} />
		</div>
	)
}
