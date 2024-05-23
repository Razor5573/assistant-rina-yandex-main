import React from 'react';
import {Button, Input} from "reactstrap";

export function Counter(props:any) {
    const values = props.props[0]
    const setValue = props.props[1]
    const index = props.props[2]
    const maxValue = props.props[3]
    const shift = props.props[4]
    console.log(props)
    console.log(setValue)

    return (
        <div style={{display: 'flex', marginLeft: shift + "px"}}>
            <Button
                color="warning"
                onClick={() => {
                    if (values[index] > 1) {
                        setValue([...values.slice(0, index), values[index] - 1, ...values.slice(index + 1)]);
                    }
                }}
                style={{
                    borderRadius: "10px", height: "40px", margin: "5px",
                    zIndex: 9999
                }}
            >
                -
            </Button>
            <Input
                type="number"
                value={values[index]}
                min={1}
                max={maxValue}
                onChange={(event) => {
                    setValue([...values.slice(0, index), parseInt(event.target.value), ...values.slice(index + 1)]);
                }}
                style={{
                    width: '50px',
                    textAlign: 'center',
                    MozAppearance: 'textfield',
                    borderRadius: "10px", height: "40px", margin: "5px",
                    zIndex: 9999
                }}
            />
            <Button
                style={{
                    borderRadius: "10px", height: "40px", margin: "5px",
                    zIndex: 9999
                }}
                color="warning"
                onClick={() => {
                    if (values[index] < maxValue) {
                        setValue([...values.slice(0, index), values[index] + 1, ...values.slice(index + 1)]);
                    }
                }}
                tyle={{
                    zIndex: 9999
                }}
            >
                +
            </Button>
        </div>
    );
}
