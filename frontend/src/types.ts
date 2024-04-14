// types.ts

import { AssistantSmartAppData } from '@salutejs/client';
import {GalleryPageState, GridPageState, PageComponent, PlasmaAppProps} from '@salutejs/plasma-temple';

export type AssistantProps = PlasmaAppProps['assistantParams'];
export type AppHeaderProps = PlasmaAppProps['header'];

/*export interface Film {
    id: string;
    name: string;
    poster: string;
    genre: string;
    rating: number;
}

// Тип описывает состояние экранов приложения
export interface PageStateType {
    gallery: GalleryPageState<Film> | null;
    film: Film | null;
}

// Тип описывает параметры экранов с которыми они открываются при использовании pushScreen
export interface PageParams {
    film: { id: string };
}*/
/*
// Экшены взаимодействия с ассистентом
export enum ActionType {
    OPEN_ITEM = 'openItem',
}

export type OpenItemAction = { type: ActionType.OPEN_ITEM; payload: { id: string } };

export type AssistantAction = OpenItemAction;


export interface AssistantDataAction extends AssistantSmartAppData {
    smart_app_data: AssistantAction;
}



export interface AppState {
    grid: GridPageState;
}

export interface AppParams {
    grid: void;
}

export type PageProps<K extends keyof AppState> = React.ComponentProps<
    PageComponent<AppState, K, AppParams>
>;*/
