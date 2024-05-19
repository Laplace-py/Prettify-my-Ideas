import React from 'react'
import { useState } from 'react';

import DescriptionChangeItem from './sub-items/DescriptionChangeItem';
import LinkRowItem from './sub-items/LinkRowItem';
import TitleChangeItem from './sub-items/TitleChangeItem';
import StatusChangeItem from './sub-items/StatusChangeItem';
import AddLinkItem from './sub-items/AddLinkItem';
import SaveButtonItem from './sub-items/SaveButtonItem';

export default function AccordionItemEdit(props) {
    let id_title = props.id + " title";
    let id_description  = props.id + " description";
    let id_status = props.id + " status";
    let id_links = props.id + " links";
    let id_save = props.id + " save";
    let id_link = props.id + " link";
    const statuses = ["In_Progress", "Done", "To_Do","Delayed", "Not_Started"];
    let json;
    if(props.json === "") {
        json = {
            Title: "",
            Description: "",
            Status: "",
            Links: []
        }
    } else {
        json = props.json;
    }
    let prevDescription = json.Description;
    let prevStatus = json.Status;
    let prevLinks = json.Links;
    
    const [savedLinks, setSavedLinks] = useState(json.Links);
    
    function removeLink(link) {
        setSavedLinks(savedLinks.filter((item)=>item!==link))
    }
    function addLink(link) {
        setSavedLinks([...savedLinks,link])
    }
    function isValidUrl(string) {
        if (String(string).includes("http://")){
            try {
                new URL(string);
                addLink(string);
            } catch (err) {
                alert("Not a valid URL");
            }
        }
        else if (String(string).includes(".com") || String(string).includes(".org") || String(string).includes(".net")){
            string = "http://" + string;
            try {
                new URL(string);
                addLink(string);
            } catch (err) {
                alert("Not a valid URL");
            }
        }
      }
    function saveChanges() {
        if (document.getElementById(id_description).value === "") {
            document.getElementById(id_description).value = prevDescription;
        }
        if (document.getElementById(id_status).value === "") {
            document.getElementById(id_status).value = prevStatus;
        }
        if (savedLinks === prevLinks || savedLinks === []) {
            setSavedLinks(prevLinks);
            document.getElementById(id_links).value = prevLinks;
        }
        let description = document.getElementById(id_description).value;
        let status = document.getElementById(id_status).value;
        let title = document.getElementById(id_title).value;
        let links = savedLinks;
        let info = {
            Title: title,
            Description: description,
            Status: status,
            Links: links
        }
        props.onClick(info);
    }
    
    return (
    <div className="container top">
        <button type='button' className='btn btn-danger top-right' onClick={props.onExit}>Exit</button>
        <TitleChangeItem id={id_title} text={json.Title}/>
        <DescriptionChangeItem id={id_description} text={json.Description}/>
        <StatusChangeItem id={id_status} statuses={statuses}/>
        <AddLinkItem id={id_links} onClick={isValidUrl}/>
        <div className='Scrollable-sub-content item'>
            {savedLinks.map((link) => <LinkRowItem id={id_link} link={link} onClick={removeLink}/>)}
        </div>
        <SaveButtonItem id={id_save} onClick={saveChanges}/>
        {/* <div className="row editItem">
                <div className="col-md-12">
                <span className='label-item text'>
                    <label for="Description">Title</label>
                    <textarea name="Description" key={key_title} id={id_title} className="form-control item">{json.Title}</textarea>
                </span>
            </div>
                </div>
                <div className="row editItem">
                    <div className="col-md-12">
                        <span className='label-item text'>
                            <label for="Description">Description</label>
                            <textarea name="Description" key={key_description} id={id_description} className="form-control item">{json.Description}</textarea>
                        </span>
                    </div>
                </div>
                <div className="row editItem">
                    <div className="col-md-12">
                        <span className="label-item text">
                        
                        <label for="Status">Status</label>
                        <select name="Status" className="select item" key={key_status} id={id_status}>
                            {statuses.map((item) =><option value={item}>{String(item).replace("_"," ")}</option>)}
                        </select>

                        </span>
                    </div>
                </div>
                <div className="row editItem">
                <div className="col-md-12">
                    <span className='label-item text'>
                        <label htmlFor="Links" >Links</label>
                        <input type="text" name="Links" key={key_links} id={id_links} className="form-control item" placeholder="Add Link"/>
                        <button type="button" onClick={()=> isValidUrl(document.getElementById(id_links).value)} className="btn btn-primary">+</button>
                    </span>
                </div>
            </div>
            <div className='Scrollable-sub-content item'>
                
                {
                savedLinks.map(
                    (link) =>
                    
                    <div className='linkRow'>
                        <script>{x = Math.floor((Math.random() * 100) + 1)}</script>
                        <div class="linkText"> 
                            <a key={key_link+x+"link"} href={link}>{link}</a> 
                        </div> 
                        <button key={key_link+x+"button"} id={id_link+x+"Button"} onClick={()=>removeLink(link)} type="button" class="btn btn-danger">
                            -
                        </button>
                    </div>
                    )
                }
                
            </div>
            <div className="row editItem">
                <div className="col-md-10"></div>
                <div className="col-md-2">
                    <button type="button" key={key_save} id={id_save} onClick = {saveChanges} className="save btn btn-danger">Save</button>
                </div>
            </div>
            */}
    </div>
  )
}
