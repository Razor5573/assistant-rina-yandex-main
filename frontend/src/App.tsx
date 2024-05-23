
import React, {FC} from 'react';
import {BrowserRouter, useHistory} from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from "reactstrap";

/*const initAssistant = (getState: any) => {
    return createAssistant({getState});
}*/

export const App: FC = (() => {
    const router = useHistory()
    console.log(router)

    /*function reducer(action: any) {
        switch (action.type) {
            case "open_page":
                switch (action.page) {
                    case "корзина":
                        router.replace("/restaurant/cart");
                        break;
                    case "категория":
                        router.replace("/restaurant");
                        break;
                    case "отзывы":
                        router.replace("/restaurant/reviews");
                        break;
                    default:
                        break;
                }
                break;
            case "open_dish":
                const newPath = urljoin('/restaurant/category/dish');
                router.replace({
                    pathname: newPath,
                    state: {id: null, title: action.dish}
                })
                break;
            case "open_category":
                const newPath1 = urljoin('/restaurant/category');
                router.replace({
                    pathname: newPath1,
                    state: {id: null, title: action.category}
                })
                break;
            case "add_to_cart":
                PostService.AddDishToCart(null, action.name, 1, action.count);
                break;
            default:

        }
    }*/
    // const assistantRef = useRef<ReturnType<typeof createAssistant>>(); // 132-144
    //                                                                                                 // реакция на голосовые команды и запускаются те же
    // useEffect(() => {                                                                  // экшны, которые запускаются при нажатиях в UI
    //     assistantRef.current = initAssistant(() => {});
    //     assistantRef.current.on("data", ({action}: any) => {
    //         if (action) {
    //             reducer(action);
    //         }
    //     });
    // })

    /*const assistantStateRef = useRef<AssistantAppState>();
    const assistant = useRef<ReturnType<typeof createAssistant>>();

    useEffect(() => {
        assistant.current = initAssistant(() => assistantStateRef.current);
        console.log(assistant.current)
        if (assistant.current) {
            console.log(assistant.current)
            assistant.current.on("data", ({action}: any) => {
                console.log(action)
                if (action) {
                    reducer(action);
                }
            });
        }
    })

    useEffect(() => {
        assistantStateRef.current = {}
    });*/


    return (
        <BrowserRouter>
            <div className='wrapper'>
                <Container fluid={true}>
                    <Header/>
                    <AppRouter/>
                </Container>
            </div>
        </BrowserRouter>
    );
});

export default App;
