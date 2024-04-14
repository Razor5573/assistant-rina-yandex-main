import MenuCategory from "./pages/MenuCategory";
import React from "react";
import Cart1 from "./pages/Cart1";

type Action =
    {
        type: "open_page";
        page: string
    }

export const reducer = (action: Action) => {
    switch (action.type) {
        case "open_page":
            switch (action.page) {
                case "меню":
                    return (<MenuCategory/>)
                case "корзина":
                    return (<Cart1/>)
            }
    }
}