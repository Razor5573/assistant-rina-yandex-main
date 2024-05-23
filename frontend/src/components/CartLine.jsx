import React, {useState} from 'react';
import CustomCartItem from "./CustomCartItem";
import {Checkbox} from "@salutejs/plasma-ui";
import SoloCounter from "./SoloCounter";

const CartLine = ({item, counterValues, setCounterValues, index}) => {
    const [deleteFlag, setDeleteFlag] = useState(true)
    const [checkBox, setCheckBox] = useState(false)
    const [maxValue, setMaxValue] = useState(100)

    return (
        <>
            {deleteFlag &&
                <>
                    <div className='cart-check-box'>
                        <div className='cart-item-list'>
                            <CustomCartItem item={item.dishDto}/>
                        </div>
                        <div className='solo-counter'>
                            <SoloCounter
                                values={counterValues}
                                setValues={setCounterValues}
                                index={index}
                                maxValue={maxValue}
                                setDeleateFlag={setDeleteFlag}
                                item={item}
                                checkBox={checkBox}
                            />
                        </div>
                    </div>
                    <div className="grey-stripe"></div>
                </>
            }
        </>
    )
}

export default CartLine;