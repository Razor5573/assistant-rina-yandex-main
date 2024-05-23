import React from 'react';

import {
    Col,
    Container,
    Row,
    Button
} from "reactstrap"
import {useHistory} from "react-router-dom";
import Logo from "..//assets/img/Logo.svg"

function Header() {
    const router = useHistory()

    return (
        <Container fluid={true}>
            <Row>
                <Col lg="6" style={{paddingTop: 15}}>
                    <Button onClick={() => router.replace("/")}
                            style={{background: "none", borderColor: "rgb(255 241 199)"}}>
                        <img src={Logo} alt="Logo" width="50px" height="50px" style={{marginBottom: "10px"}} />
                        <text style={{fontFamily: 'TT Rationalist DemiBold', fontSize: 36, color: "#FFFFFF"}}>
                            Rina
                        </text>
                    </Button>
                </Col>
                <Col lg="4"></Col>
                <Col lg="2" style={{paddingTop: 15}}>
                    <Button
                        color="warning"
                        onClick={() => router.replace("/restaurant/reviews")}
                    >
                        Отзывы
                    </Button>
                    <Button
                        color="warning"
                        className='header-button-menu'
                        onClick={() => router.replace("/restaurant")}
                    >
                        Меню
                    </Button>
                </Col>

            </Row>
        </Container>
    )
}

export default Header;