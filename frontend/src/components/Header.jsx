import React from 'react';

import {
    Col,
    Container,
    Row,
    Button
} from "reactstrap"
import {useHistory} from "react-router-dom";

function Header() {
    const router = useHistory()

    return (
        <Container fluid={true}>
            <Row>
                <Col lg="10" style={{paddingTop: 15}}>
                    <img src="https://i.ibb.co/TcXZDMq/Group-154.png" alt="Logo" width="50px" height="50px"/>
                    Rina
                </Col>
                <Col lg="2" style={{paddingTop: 15}}>
                    <Button onClick={() => router.replace("/restaurant/reviews")}>Отзывы</Button>
                    <Button view={"primary"} className='header-button-menu'
                            onClick={() => router.replace("/restaurant")}>Меню</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default Header;