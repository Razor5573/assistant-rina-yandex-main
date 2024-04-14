import React from 'react';
import {Button} from "reactstrap"
import {useHistory} from "react-router-dom";

function Pay(){
    const router = useHistory()
    return (
        <div>
            <div>
                <img src="cart-icon" alt="cart-icon"/> //гавно не работает (добавить иконку чек-карт
                <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                />
                <h2>Заказ успешно оплачен</h2>
            </div>
            <Button onClick={() => router.replace("/restaurant/cart")}>Вернуться в корзину</Button>
        </div>
    )
}

export default Pay;