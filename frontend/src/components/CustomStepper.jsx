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
            <InputGroupText addonType="prepend">
                <Button color="primary" onClick={decrement} disabled={currentValue === 0}>
                    -
                </Button>
            </InputGroupText>
            <InputGroupText>{currentValue}</InputGroupText>
            <InputGroupText addonType="append">
                <Button color="primary" onClick={increment} disabled={currentValue === maxValue}>
                    +
                </Button>
                {showRemove && (
                    <Button color="danger" onClick={onRemove}>
                        Удалить
                    </Button>
                )}
            </InputGroupText>
        </InputGroup>
    );
};

export default CustomStepper;