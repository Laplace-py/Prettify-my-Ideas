import React, { Component} from 'react'
import AccordionItem from './AccordionItem'
import AccordionItemEdit from './AccordionItemEdit'
// import save_changes from './save_changes'
export default class Accordion extends Component {
	
	constructor(props) {
		super(props)
		this.openEdit = this.openEdit.bind(this)
		this.closeEdit = this.closeEdit.bind(this)
		this.getChangedInfo = this.getChangedInfo.bind(this)
		this.saveInJsonFile = this.saveInJsonFile.bind(this)		
		this.changeIdeas = this.changeIdeas.bind(this)
		this.state = {
			editing: false,
			id: props.id,
			Info: {
				Title: props.json.Title,
				Description: props.json.Description,
				Status: props.json.Status,
				Links: props.json.Links
			}
		}
	}
	changeIdeas(data) {
		const url = '/change';
		const request = new Request(url, {
			method: 'POST',
			headers: new Headers({
				'Content-Type': 'application/json'
			}),
			body: data
		});
		fetch(request)
	}
	openEdit() {
		this.setState({ editing: true })
	}
	getChangedInfo(info) {
		this.setState({ Info: info })
	}
	saveInJsonFile(info) {
		const json_file = require('./Ideas.json')
		let data = JSON.parse(JSON.stringify(json_file))
		for (let index = 0; index < data.length; index++) {
			if (data[index].id === this.state.id) {
				data[index].Title = info.Title
				data[index].Description = info.Description
				data[index].Status = info.Status
				data[index].Links = info.Links
			}
		}
		data = JSON.stringify(data)
		this.changeIdeas(data)
	}
	closeEdit(info) {
		this.getChangedInfo(info)
		this.saveInJsonFile(info)
		this.setState({ editing: false })
	}
	render() {
		const editing = this.state.editing;
		const info = this.state.Info;
		let screen;
		if (!editing) {
			
			screen = <AccordionItem key={this.state.id+"ACItem"} id={this.state.id} json={info} onClick={this.openEdit} />
		}
		else {
			screen = <AccordionItemEdit key={this.state.id+"ACIEdit"} id={this.state.id} json={info} onClick={this.closeEdit} />
		}

		return (
			<div>
			{screen}
			</div>
		)
	}
}
