import {Button} from "reactstrap";
import React from "react";
import {toast, ToastContainer} from "react-toastify";

export const ProductCommon = ({ actionButtonProps, product }) => {
    const handleClick = (name, count)  => {
        toast.success(name + ' ' + count + 'x добавлен(ы) в корзину', {
            position: "bottom-right",
        });
    };

    return (
        <>
            <ToastContainer/>
            <Button
                {...actionButtonProps}
                    onClick={handleClick}
            >
                {actionButtonProps.actionButtonText}
            </Button>
            <div className="product-name">{product.name}</div>
            <div className="product-price">{product.price} {product.currency}</div>
        </>
    );
};