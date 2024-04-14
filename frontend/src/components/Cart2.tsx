import React, {useEffect, useState} from 'react';
/*import {
    CartOrder,
    CartProvider,
} from '@salutejs/plasma-temple';*/
import {useHistory} from "react-router-dom";
import {Container} from "reactstrap"
import CartLine from "./CartLine";
import PostService from "../API/PostService";
import {
    Spinner,
    Button,
    Card,
  } from 'reactstrap';

export function Cart2(props: { items: any }) {

    const [data, setData] = React.useState<any[]>((props.items == null) ? [] : props.items.listOrderDto);
    const route = useHistory()
    const [counterValues, setCounterValues] = useState<number[]>(Array(100).fill(0))
    const [checkSum, setCheckSum] = useState<number>(0)

    useEffect(() => {
        function countCheckSum() {
            let sum = 0
            data.map((item, index) => (
                sum += data.length === 0 ? 0 : counterValues[index] * item.dishDto.price
            ))
            return sum
        }

        if (data.length !== 0) {
            setCheckSum(countCheckSum())
        }
    }, [data, counterValues])

    if (data.length !== 0 && counterValues.length === 100) {
        const countBuffer = data.map((item) => item.count);
        setCounterValues([...countBuffer]);
    }


    useEffect(() => {
        if (props.items != null) {
            setData(props.items.listOrderDto);
        }
    }, [props.items]);

    if (props.items == null) {
        return (
            <div className="spinner">
                <Spinner/>
            </div>
        )
    }

    /*const initialState: CartState = {
        items,
        currency: 'rub',
        quantity: 109,
        amount: 7412,
    };*/


    const orderData = {
        amount: checkSum,
    };

    type DishDto = {
        dishFindDto: any,
        count: number,
        numberTable: number
    }

    function generateDishDto() {
        return Array.from(
            {length: data.length},
            (_, index) =>
                ({
                    dishFindDto: {id: data[index].dishDto.id, title: data[index].dishDto.title},
                    count: counterValues[index],
                    numberTable: 1
                } as DishDto),
        )
    }

    return (
        <>
            {props.items.listOrderDto.length === 0 ?
                <h2>
                    Корзина пуста
                </h2> :
                <div className='cart-data'>
                    <Container>
                        {/*<CartProvider>
                            {data.map((item, index) => (
                                <>
                                    <CartLine
                                        item={item}
                                        counterValues={counterValues}
                                        index={index}
                                        setCounterValues={setCounterValues}
                                    />
                                </>
                            ))}
                            <CartOrder
                                onCheckout={
                                    () => {
                                        route.push("/restaurant/cart/pay");
                                        PostService.payCheck(generateDishDto(), 1, checkSum)
                                    }}
                                order={orderData}
                            />
                        </CartProvider>*/}
                        <Card style={{background: "transparent", position: "absolute", margin: "auto"}}>
                            {data.map((item, index) => (
                                <>
                                    <CartLine
                                        item={item}
                                        counterValues={counterValues}
                                        index={index}
                                        setCounterValues={setCounterValues}
                                    />
                                </>
                            ))}
                            <Button
                                color="primary"
                                onClick={() => { route.push("/restaurant/cart/pay"); PostService.payCheck(generateDishDto(), 1, checkSum) }}
                            >
                                Checkout
                            </Button>
                        </Card>
                    </Container>
                </div>
            }
        </>
    );
}