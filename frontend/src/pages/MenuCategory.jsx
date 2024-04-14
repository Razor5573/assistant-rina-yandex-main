import React, {useEffect, useState} from 'react';
import PostService from "../API/PostService";
import CategoriesCarousel from "../components/CategoriesCarousel";
import {Col, Row} from "reactstrap";

function MenuCategory() {
    const [items, setItems] = useState([]);

    useEffect(() => {                                                 //запускается один раз при вызове MenuCategory
        PostService.GetMainMenu().then((response) => {
            console.log(response)
            setItems(response.data)
        });
    }, []);

    return (
        <div className='menu-category'>
            <Row>
                <h1>Категории</h1>
            </Row>
            <Row>
                <Col xl={12} >
                    <CategoriesCarousel items={items}/>
                </Col>
            </Row>
        </div>
    );
}

export default MenuCategory;
