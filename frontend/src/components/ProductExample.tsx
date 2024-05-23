import React, {useState} from 'react';
import 'react-toastify/dist/ReactToastify.css';
import {ProductCommon} from "./ProductCommon"
import {useHistory} from "react-router-dom";
import {Button, Card, Col, Row, Spinner} from "reactstrap"
import {Counter} from "./Counter";
import PostService from "../API/PostService";
import urljoin from "url-join";

const ProductExample = (props: any) => {
    console.log("here is the props: "+ props)
    const router = useHistory()
    const [array, setArray] = useState(Array(1).fill(1));
    const [notifications, setNotifications] = useState<string[]>([]);

    const addNotification = (message: string) => {
        setNotifications([...notifications, message]);
    };
    const handleClick = React.useCallback((name: string, count: number) => {                //уведомление о добавлении в корзину
        addNotification(name + ' ' + count + 'x добавлен(ы) в корзину');
    }, []);


 /*   const [variations, setVariations] = React.useState([
        {
            id: 'size',
            name: 'Размер',
            variations: ['20см', '25см', '30см', '40см'],
            activeIndex: 0,
        },
    ]);*/

    if (props.props.length === 0) {
        return (
            <div className="spinner">
                <Spinner/>
            </div>
        )
    }

    const product/*: ProductEntity<unknown>*/ = {
        id: props.props.id,
        name: props.props.title,
        description: {
            title: 'Масса',
            content: props.props.weight + ' грамм',
        },
        price: props.props.price * array[0],
        currency: "rub",
        images: [],
        shortDetails: [],
        details: {
            title: 'Описание',
            values: [{
                name: props.props.description,
            }],
        },
    };

    /*const onChangeVariation = (id: unknown, activeIndex: number) => {
        const index = variations.findIndex((variation) => id === variation.id);

        if (index > -1) {
            setVariations([                                                 // вроде понял - если юзать спред а после него
                ...variations.slice(0, index),
                {...variations[index], activeIndex},
                ...variations.slice(index + 1),
            ]);
        }
    };*/

    function action(onActionButtonClick: string) {
        return function () {
        };
    }

    return (
        <div className="wrapper">
            <Row>
                <Col lg={4}>
                    <Button
                        color="warning"
                        onClick={() => {
                            const newPath = urljoin('/restaurant');
                            router.replace({
                                pathname: newPath,
                            });
                        }}
                        style={{marginBottom:"20px", marginLeft: "20px"}}
                    >
                    {"<"}
                    </Button>
                    <Card>
                        <div className="product-info-container">
                            <div className="product-button-container">
                                <ProductCommon
                                    actionButtonProps={{
                                        actionButtonText: 'Добавить в корзину',
                                        onClick: () => {
                                            PostService.AddDishToCart(props.props.id, props.props.title, 1, array[0]);
                                            handleClick(props.props.title, array[0]);
                                        },
                                    }}
                                    product={product}
                                />
                            </div>
                            <div className='product-example-counter' style={{marginLeft:"20px"}}>
                                <Counter props={[array, setArray, 0, 9999]}/>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col lg={6}>
                    <div className="image-container">
                        <img src={props.props.linkImage} alt={''} width={500} style={{ borderRadius: '10px', margin: "41px"}} />
                    </div>
                </Col>
                <Col lg={2}></Col>
            </Row>
        </div>
    );
};

export default ProductExample;