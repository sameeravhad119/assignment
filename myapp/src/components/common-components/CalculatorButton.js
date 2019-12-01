import React from 'react'

export const CalculatorButton = ({ symbol, label, onClickHandler }) => {
    return (
        <div onClick={onClickHandler} className={'CalculatorButton'}>
            <div style={{ marginBottom: '5px' }}>{symbol}</div>
            <div>{label}</div>
        </div>
    )
}
