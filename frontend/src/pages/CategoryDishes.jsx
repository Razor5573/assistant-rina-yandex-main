import React, {useEffect, useState} from 'react';
import PostService from "../API/PostService";
import {DishesList} from "../components/DishesList";
import {useHistory, useLocation} from "react-router-dom";
import {
    Button,
    Col,
    Row
} from "reactstrap"
import cartIcon from "../assets/img/сart-icon.svg"

function CategoryDishes() {
    const router = useHistory()
    const [items, setItems] = useState([]);
    const [titleCategory, setTitleCategory] = useState([]);
    const location = useLocation(); // вовращает объект location (он меняется при смене страниц,
    console.log(location.state)                           // поэтому мы юзаем его в useEffect, т.е. побочн. эффект при смене местоположения

    useEffect(() => {
        PostService.GetCategoryDishes(location.state.id, location.state.title).then((response) => {
            setItems(response.data.dishes)
            setTitleCategory(response.data.titleCategory)
            console.log(response)
        });
    }, [location.state.id, location.state.title, router.location.pathname]);

    return (
        <div className="wrapper" style={{ marginBottom: '25px' }}>
                <Row className="justify-content-center">
                    <Col lg={1}>
                        <Button
                            color="warning"
                            onClick={() => router.push("/restaurant")}
                        >
                            {"<"}
                        </Button>
                    </Col>
                    <Col lg={10}/>
                    <Col lg={1}>
                        <Button
                            color="warning"
                            onClick={() => router.push("/restaurant/cart")}
                            style={{marginLeft: "15px"}}
                        >
                            <img src={cartIcon} alt={"Корзина"}/>
                        </Button>
                    </Col>
                </Row>
            <h1 style={{
                fontFamily: 'TT Rationalist DemiBold',
                fontSize: 48,
                color: "#FFFFFF",
                marginTop: "20px"
            }}>{titleCategory}</h1>
            <DishesList items={items}/>
        </div>
    );
}

export default CategoryDishes;