import React from 'react';
import {Route, Switch} from "react-router-dom";
import MenuCategory from "../pages/MenuCategory";
import CategoryDishes from "../pages/CategoryDishes";
import {DishInfo} from "../pages/DishInfo";
import Pay from "../pages/Pay";
import Cart1 from "../pages/Cart1";
import Reviews from "../pages/Reviews"
import AddReview from "../components/AddReview"

const AppRouter = ( ) => {
    console.log()

    return (
        <Switch>
            <Route exact path="/restaurant">
                <MenuCategory/>
            </Route>
            <Route exact path="/restaurant/category">
                <CategoryDishes/>
            </Route>
            <Route exact path="/restaurant/category/dish">
                <DishInfo/>
            </Route>
            <Route exact path="/restaurant/cart">
                <Cart1/>
            </Route>
            <Route exact path="/restaurant/cart/pay">
                <Pay/>
            </Route>
            <Route exact path="/restaurant/reviews">
                <Reviews/>
            </Route>
            <Route exact path="/restaurant/reviews/add">
                <AddReview/>
            </Route>
        </Switch>
    );
};

export default AppRouter;