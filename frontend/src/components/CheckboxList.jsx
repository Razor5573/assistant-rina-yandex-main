import React from 'react';
import '../index.css';
import {Checkbox} from "@salutejs/plasma-ui";

const CheckboxList = ({ count, checkBoxes, setCheckBoxes }) => {

    const items = [];

    for (let i = 0; i < count; i++) {
        items.push(
            <Checkbox
                onChange={(i) => {
                    setCheckBoxes([...checkBoxes.slice(0, i), !checkBoxes[i],...checkBoxes.slice(i + 1)]);
                    console.log(checkBoxes)
                }}
                key={i} />
        );
    }

    return (
        <div className="checkbox-list">
            {items}
        </div>
    );
};

export default CheckboxList;
