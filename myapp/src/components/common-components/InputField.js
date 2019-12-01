import React from 'react'

export const InputField = ({ handleChange, label, value }) => {
    const onChange = (e) => {
        let typedValue = e.currentTarget.value;
        handleChange(typedValue)
    }

    return (
        <div>
            <div className={'Label'}>{label}</div>
            <input type={"number"} value={value} onChange={onChange} />
        </div>
    )
}
