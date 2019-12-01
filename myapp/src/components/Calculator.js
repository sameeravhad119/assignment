import React from 'react'
import { CalculatorButton } from './common-components/CalculatorButton';

export const Calculator = ({ add, subtract, multiply, divide }) => {
    return (
        <div style={{ marginTop: '5px', marginBottom: '5px' }}>
            <div className={'TwoButtonContainer'}>
                <CalculatorButton
                    symbol={"+"}
                    label={"Add"}
                    onClickHandler={add}
                />
                <CalculatorButton
                    symbol={"-"}
                    label={"Subtract"}
                    onClickHandler={subtract}
                />
            </div>
            <div className={'TwoButtonContainer'}>
                <CalculatorButton
                    symbol={"*"}
                    label={"Multiply"}
                    onClickHandler={multiply}
                />
                <CalculatorButton
                    symbol={"/"}
                    label={"Divide"}
                    onClickHandler={divide}
                />
            </div>
        </div>
    )
}
