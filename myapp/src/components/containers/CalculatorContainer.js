import React from 'react';
import { connect } from 'react-redux';
import { add, subtract, multiply, divide, setNumber1, setNumber2 } from '../../actions';
import { Calculator } from '../Calculator';
import { InputField } from '../common-components/InputField';

const CalculatorContainer = (props) => {
    const { add,
        subtract,
        multiply,
        divide, result, number1,
        number2, setNumber1,
        setNumber2 } = props;

    return (
        <>
            <div className={'header'}>Calculator</div>
            <div style={{ marginLeft: '10px' }}>
                <InputField
                    handleChange={setNumber1}
                    label={'Enter value 1'}
                    value={number1}
                />
                <InputField
                    handleChange={setNumber2}
                    label={'Enter value 2'}
                    value={number2}
                />
                <Calculator
                    {...props}
                />
                <div><span className={'Label'}>Result</span> {result}</div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => ({
    number1: state.number1,
    number2: state.number2,
    result: state.result
})


const mapDispatchToProps = (dispatch) => ({
    add: () => dispatch(add()),
    subtract: () => dispatch(subtract()),
    multiply: () => dispatch(multiply()),
    divide: () => dispatch(divide()),
    setNumber1: (num) => dispatch(setNumber1(num)),
    setNumber2: (num) => dispatch(setNumber2(num)),
})

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorContainer)