import React from 'react';
import {Checkbox} from "@salutejs/plasma-ui";

const SummaryCountList = (props: {count:number, checkBoxes:boolean[]}) => {
    const items = [];
    console.log(props)

    for (let i = 0; i < props.checkBoxes.length; i++) {
        if (props.checkBoxes[i]) {
            items.push(
                <div key={i}>
                    <h4> /10</h4>
                </div>
            );
        }
    }

    return (
        <div className="count-list">
            {items}
        </div>
    );
}

export default SummaryCountList;