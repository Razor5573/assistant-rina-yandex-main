import React, {useState} from 'react';
import CustomStepper from "../components/CustomStepper";
import PostService from "../API/PostService";

const SoloCounter = ({item, values, setValues, maxValue, index, setDeleateFlag, checkBox}) => {
    const [showRemoveFlag, setShowRemoveFlag] = useState(true);

    return (
        <CustomStepper
            value={values[index]}
            maxValue={maxValue}
            onChange={(num) => {
                setValues([...values.slice(0, index), num,...values.slice(index + 1)]);
                if (!checkBox) {
                    setShowRemoveFlag(false);
                    PostService.ChangeDishCount(item.dishDto.id, item.dishDto.title, 1, num)
                } else {
                    setShowRemoveFlag(true);
                }
            }}
            onRemove={() => {
                setDeleateFlag(false);
                PostService.deleteDishCount(item.dishDto.id, item.dishDto.title, 1)
            }}
            showRemove={!checkBox}
        />
    );
}

export default SoloCounter;