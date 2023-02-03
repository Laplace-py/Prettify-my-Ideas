import React from 'react'

export default function TitleChangeItem(props) {
  let key_title, id_title = props.id;
  key_title += "key"
  let text = props.text;
  return (
    <div className="row editItem">
      <div className="col-md-12">
        <span className='label-item text'>
          <label for="Description">
            <h1>Title</h1>
          </label>
          <textarea name="Description" key={key_title} id={id_title} className="form-control item">{text}</textarea>
        </span>
      </div>
    </div>
  )
}
