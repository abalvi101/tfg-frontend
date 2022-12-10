import { Fragment } from "react";
import { useRef } from "react"

export default ({ className, src, onEdit, onDelete, editable = false }) => {
  const fileInputRef = useRef(null);

  const onEditHandler = (event) => {
    if (event.target.files[0])
      onEdit(event.target.files[0])
  }

  return (
    <div className={className}>
      <div className='image' />
      {
        editable &&
        <Fragment>
          <button
            className="edit button"
            onClick={() => fileInputRef.current.click()}
          >
            <img src="/icons/edit.svg" />
          </button>
          <button
            className="delete button"
            onClick={onDelete}
          >
            <img src="/icons/delete.svg" />
          </button>
          <input
            ref={fileInputRef}
            type='file'
            accept="image/*"
            onChange={onEditHandler}
            className='input-file'  
          />
        </Fragment>
      }
    </div>
  )
}