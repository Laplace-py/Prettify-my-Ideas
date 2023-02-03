import React from 'react'

export default function SaveButtonItem(props) {
  let key_save, id_save = props.id;
  key_save += "key"
  
  return (
    <div className="row editItem">
            <div className="col-md-10"></div>
            <div className="col-md-2">
                <button type="button" key={key_save} id={id_save} onClick={props.onClick} className="save btn btn-danger">Save</button>
            </div>
    </div>
  )
}
