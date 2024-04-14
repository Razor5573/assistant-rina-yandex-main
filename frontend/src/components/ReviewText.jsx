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
                    value={value}
                    onChange={(e) => {
                           setValue(e.target.value);
                    }}>
                    type={<textarea name="review" id="review" cols="30" rows="20"></textarea>}          {/*не работает*/}
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