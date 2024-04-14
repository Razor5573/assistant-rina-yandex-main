import React, {useState} from 'react';
import {
    Spinner,
    Row,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
} from "reactstrap"
import '../index.css'
import {useHistory} from "react-router-dom";
import PostService from "../API/PostService";
import {Counter} from "./Counter";
import {toast, ToastContainer} from "react-toastify";

export function GenerateItems(props: any) {
    return Array.from(
        {length: props.items.length},
        (_, index) =>
            ({
                id: props.items[index].id,
                title: props.items[index].title,
                description: props.items[index].description,
                image: {src: props.items[index].linkImage},
                badge: {type: 'accent'},
                price: props.items[index].price,
                weight: props.items[index].weight,
                arrayId: index
            }),
    )
}

export function DishesList(props: any) {
    const router = useHistory()

    const handleClick = React.useCallback((name: string, count: number) => {
        toast.success(name + ' ' + count + 'x добавлен(ы) в корзину', {
            position: "bottom-right",
        });
    }, []);

    const [array, setArray] = useState(Array(12).fill(1));
    if (props.items.length === 0) {         // это вращающаяся залупа в случае если элемент не отрисовывается или долго грузится
        return (
            <div className="spinner">
                <Spinner/>
            </div>
        )
    }

    const items = GenerateItems(props)
    
    return (
        <Row>
            <ToastContainer />
            {items.map((item, index) => (
                <Card
                    color="transparent"
                    onClick={() => {
                        router.replace({
                            pathname: '/restaurant/category/dish',
                            state: {id: item.id, title: item.title}
                        })
                    }}

                >
                    <img className="card" src={Array.isArray(item.image.src) ? item.image.src[0] : item.image.src}
                         alt="product"/>

                    <CardBody>
                        <CardTitle>{item.title}</CardTitle>
                        <CardSubtitle>{item.weight + ' грамм'}</CardSubtitle>
                        <Counter props={[array, setArray, index]}/>
                        <Button
                            style={{marginTop: '1em', fontSize: "13px"}}
                            tabIndex={-1}
                            onClick={(event) => {
                                event.stopPropagation();
                                PostService.AddDishToCart(props.items[item.arrayId].id, item.title, 1, array[index])
                                handleClick(item.title, array[index])
                                }
                            }
                        >
                            {'Добавить в корзину - ' + item.price * array[index] + ' ₽'}
                        </Button>
                    </CardBody>
                </Card>
            ))}
        </Row>
    );
}
