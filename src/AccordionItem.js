import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default function AccordionItem(props) {
    let id = props.id;
    let json = props.json;

    const heading_id = id + " heading";
    const collapse_id = id + " collapse";
    const accordionExample_id = id + " accordionExample";
    const button_id = id + " button";

    function handleClick() {
        document.getElementById(collapse_id).classList.toggle("show");
      }
    
    return (
        <div className="accordion" id={accordionExample_id}>
            <div className="accordion-item item">
                <h2 className="accordion-header" id={heading_id}>
                    <button className="accordion-button" onClick={handleClick} type="button" id={button_id}>
                        {json.Title}
                    </button>
                </h2>
                <div id={collapse_id} className="accordion-collapse collapse show" >
                    <div className="accordion-body">
                        <div className="row">
                            <div className="col-md-12">
                                <p className="description">{json.Description}</p>
                            </div>
                        </div>
                        <div className="row spacing">
                            <div className={"col-md-12 "+json.Status}>
                                <span className="description">{String(json.Status).replace("_"," ")}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 spacing">
                                {json.Links.map((element) =><a key={props.id+String(element).valueOf(". ")} className="description" href={element}>{element}<br/></a>)}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-10"></div>
                            <div className="col-md-2">
                                <button type="button" onClick={props.onClick} className="edit btn btn-primary">Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


