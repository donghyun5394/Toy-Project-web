import { createActions, handleActions } from "redux-actions";

/* 초기 state값 */
const initialState = {};

/* 액션 타입 설정 */
const GET_MENULIST = 'menu/GET_MENULIST';
const GET_MENU = 'menu/GET_MENU';
const GET_SEARCH_MENULIST = 'menu/GET_SEARCH_MENULIST';
const REGIST_MENU = 'menu/REGIST_MENU';
const MODIFY_MENU = 'menu/MODIFY_MENU';
const DELETE_MENU = 'menu/DELETE_MENU';
const CALL_SORT = 'menu/CALL_SORT';
const NAME_SORT = 'menu/NAME_SORT';
const POINT_SORT = 'menu/POINT_SORT';
const SELL_SORT = 'menu/SELL_SORT';


/* 메뉴 관련 액션 함수 */
export const { menu : { getMenulist, getMenu, getSearchMenulist, registMenu, modifyMenu, deleteMenu, callSort, nameSort, pointSort, sellSort }} = createActions({
    [GET_MENULIST]: (res) => ({ menulist : res }),
    [GET_MENU]: (res) => ({ menu : res }),
    [GET_SEARCH_MENULIST]: (res) => ({ searchMenulist : res }),
    [REGIST_MENU]: (res) => ({ regist : res }),
    [MODIFY_MENU]: (res) => ({ modify : res }),
    [DELETE_MENU]: (res) => ({ delete : res }),
    [CALL_SORT]: (res) => ({ menulist : res }),
    [NAME_SORT]: (res) => ({ menulist : res }),
    [POINT_SORT]: (res) => ({ menulist : res }),
    [SELL_SORT]: (res) => ({ menulist : res }),
});

/* 리듀서 함수 */
const menuReducer = handleActions(
    {   
        [GET_MENULIST]: (state, { payload }) => {
            return payload;
        },
        [GET_MENU]: (state, { payload }) => {
            return payload;
        },
        [GET_SEARCH_MENULIST]: (state, { payload }) => {
            return payload;
        },
        [REGIST_MENU]: (state, { payload }) => {
            return payload;
        },
        [MODIFY_MENU]: (state, { payload }) => {
            return payload;
        },
        [DELETE_MENU]: (state, { payload }) => {
            return payload;
        },
        [CALL_SORT]: (state, { payload }) => {
            return payload;
        },
        [NAME_SORT]: (state, { payload }) => {
            return payload;
        },
        [POINT_SORT]: (state, { payload }) => {
            return payload;
        },
        [SELL_SORT]: (state, { payload }) => {
            return payload;
        }
    },
    initialState
);

export default menuReducer;