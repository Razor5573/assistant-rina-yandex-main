import React, { useState } from 'react';
import { Button, InputGroup, InputGroupText } from 'reactstrap';

const CustomStepper = ({ value, maxValue, onChange, onRemove, showRemove }) => {
    const [currentValue, setCurrentValue] = useState(value);

    const increment = () => {
        if (currentValue < maxValue) {
            setCurrentValue(currentValue + 1);
            onChange(currentValue + 1);
        }
    };

    const decrement = () => {
        if (currentValue > 0) {
            setCurrentValue(currentValue - 1);
            onChange(currentValue - 1);
        }
    };

    return (
        <InputGroup>
            <InputGroupText addonType="prepend" style={{background: "none", border: "none",  borderRadius: "10px"}} >
                <Button color="warning" onClick={decrement} disabled={currentValue === 0}>
                    -
                </Button>
            </InputGroupText>
            <InputGroupText style={{background: "none", borderRadius: "10px", height: "40px", marginTop: "5px"}}>
                {currentValue}
            </InputGroupText>
            <InputGroupText addonType="append" style={{background: "none", border: "none", borderRadius: "10px"}}>
                <Button color="warning" onClick={increment} disabled={currentValue === maxValue}>
                    +
                </Button>
            </InputGroupText>
            <InputGroupText addonType="append" style={{background: "none", border: "none"}}>
                {showRemove && (
                    <Button style={{width: "127px"}} color="danger" onClick={onRemove} >
                        Удалить
                    </Button>
                )}
            </InputGroupText>
        </InputGroup>
    );
};

export default CustomStepper;