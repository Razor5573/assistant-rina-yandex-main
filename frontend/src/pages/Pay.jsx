import React from 'react';
import {Button} from "reactstrap"
import {useHistory} from "react-router-dom";
import SuccessCartIcon from "../assets/img/success-сart-icon.svg"
function Pay(){
    const router = useHistory()
    return (
        <div>
            <div>
                <h2>
                    Заказ успешно оплачен!
                    <img style={{width: "25px", height: "25px", margin: "10px"}} src={SuccessCartIcon} alt="cart-icon"/>
                </h2>

            </div>
            <Button color={"warning"} onClick={() => router.replace("/restaurant/cart")}>Вернуться в корзину</Button>
        </div>
    )
}

export default Pay;