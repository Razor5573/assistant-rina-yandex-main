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
import '../assets/style/index.css'
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
    if (props.items.length === 0) {
        return (
            <div className="spinner">
                <Spinner/>
            </div>
        )
    }

    const items = GenerateItems(props)
    
    return (
        <Row className="justify-content-center">
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
                    style={{border: "none"}}
                >
                    <img
                         className="card"
                         src={Array.isArray(item.image.src) ? item.image.src[0] : item.image.src}
                         alt="product"
                         style={{border: "none"}}
                    />
                    <CardBody>
                        <CardTitle
                            style={{
                                fontFamily: 'TT Rationalist DemiBold',
                                fontSize: 36,
                                color: "#FFFFFF",
                                marginTop: "20px",
                                marginLeft: "420px"
                            }}
                        >
                            {item.title}
                        </CardTitle>
                        <CardSubtitle style={{
                            fontFamily: 'TT Rationalist DemiBold',
                            fontSize: 20,
                            color: "#FFFFFF",
                            marginBottom: "20px",
                            marginLeft: "420px"
                        }}>{item.weight + ' грамм'}</CardSubtitle>
                        <Counter props={[array, setArray, index, 9999, 420]}/>
                        <Button
                            color="warning"
                            style={{marginTop: '1em', fontSize: "15px", marginLeft: "425px"}}
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
                        <div style={{margin: "30px"}} className="white-stripe"></div>
                    </CardBody>
                </Card>
            ))}
        </Row>
    );
}
