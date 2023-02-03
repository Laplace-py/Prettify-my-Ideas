import React from 'react'

export default function StatusItem(props) {
    let key_status, id_status = props.id;
    key_status += "key"
    const statuses = props.statuses;
    return (
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
  )
}
