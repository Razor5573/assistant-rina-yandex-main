import {Button, Card} from "reactstrap";
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
                <div
                    className="product-name"
                    style={{
                        fontFamily: 'TT Rationalist DemiBold',
                        fontSize: 24,
                        color: "black",
                        marginLeft: "20px",
                        marginTop: "20px"
                     }}
                >
                    {product.name}
                </div>
                <div
                    className="product-price"
                    style={{
                        fontFamily: 'TT Rationalist DemiBold',
                        fontSize: 24,
                        marginLeft: "20px",
                        color: "black",
                    }}
                >
                    {product.price} {product.currency}
                </div>
            <Button
                {...actionButtonProps}
                onClick={handleClick}
                color="warning"
                style={{
                fontFamily: 'TT Rationalist DemiBold',
                fontSize: 18,
                color: "black",
                marginLeft: "20px",
                marginTop: "20px"
            }}
            >
            {actionButtonProps.actionButtonText}
            </Button>
        </>
    );
};