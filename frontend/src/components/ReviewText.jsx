import React from 'react';
import {Form, FormGroup, Input, Label} from "reactstrap";

const ReviewText = ({value, setValue}) => {

    return (
        <Form>
            <FormGroup>
                <Label>
                    Отзыв...
                </Label>
                <Input
                    style={{height:'100px',marginBottom:'10px'}}
                    value={value}
                    onChange={(e) => {
                           setValue(e.target.value);
                    }}>
                    type={"textarea"}
                </Input>
            </FormGroup>
        </Form>
        /*<TextArea
            value={value}
            onChange={(e) => {
                setValue(e.target.value);
            }}
            label={'Отзыв...'}
            resize={"none"}
            size={'l'}
        />*/
    )
}

export default ReviewText;