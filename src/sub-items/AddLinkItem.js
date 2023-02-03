import React from 'react'

export default function AddLinkItem(props) {
    let key_links,id_links = props.id;
    key_links += "key"
    return (
        <div className="row editItem">
            <div className="col-md-12">
                <span className='label-item text'>
                    <label htmlFor="Links">Links</label>
                    <input type="text" name="Links" key={key_links} id={id_links} className="form-control item" placeholder="Add Link" />
                    <button type="button" onClick={()=>props.onClick(document.getElementById(id_links).value)} className="btn btn-primary">+</button>
                </span>
            </div>
        </div>
        )
}
