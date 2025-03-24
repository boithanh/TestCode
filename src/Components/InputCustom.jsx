import React from 'react'

const InputCustom = ({ labelContent, smallContent, id, placeholder, name, onChange, value }) => {
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">{labelContent}</label>
            <input type="text" className="form-control" name={name} id={id} aria-describedby="helpId" placeholder={placeholder} onChange={onChange} value={value} />
            <small id="helpId" className="form-text text-muted">{smallContent}</small>
        </div>
    )
}

export default InputCustom