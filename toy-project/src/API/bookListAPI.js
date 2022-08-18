import { request } from "./bookAPI"; 
import { getMenulist, getMenu, getSearchMenulist, callSort, nameSort, pointSort, sellSort, getReivewAPI } from "../modules/BookModule";

export function callGetMenuListAPI() {
    
    console.log('getMenuList api calls...');
    
    /* redux-thunk(미들 웨어)를 이용한 비동기 처리 */
    return async (dispatch, getState) => {
        
        /* Api의 axios 처리 참조  */
        const result = await request('GET', '/menu');
        console.log('getMenuList result : ', result);
        
        /* action 생성 함수에 결과 전달하며 dispatch 호출 */
        dispatch(getMenulist(result));
    }
}

export function callGetMenuAPI(id) {
    
    console.log('getMenu api calls...');

    return async (dispatch, getState) => {
    
        const result = await request('GET', `/menu/${id}`);
        console.log('getMenu result : ', result);
    
        dispatch(getMenu(result));
    }
}
export function callGetSearchMenuListAPI(bookName) {

    console.log('getSearchMenuList api calls...');
    
    /* redux-thunk(미들 웨어)를 이용한 비동기 처리 */
    return async (dispatch, getState) => {
        
        /* Api의 axios 처리 참조  */
        const result = await request('GET', '/menu').then(res => res.filter(menu => menu.bookName.match(bookName)));
        console.log('getSearchMenuList result : ', result);
        
        /* action 생성 함수에 결과 전달하며 dispatch 호출 */
        dispatch(getSearchMenulist(result));
    }



}

export function callSortAPI() {
    return async (dispatch, getState) => {
        const result = await request('GET', `/menu`).then(
            res=>res.sort((a,b) => {
            if(a.release < b.release) return -1;
            if(a.release == b.release) return 0;
            if(a.release > b.release) return 1;
            }));
        dispatch(callSort(result));
    }
}

export function nameSortAPI() {
    return async (dispatch, getState) => {
        const result = await request('GET', `/menu`).then(
            res=>res.sort((a,b) => {
            if(a.bookName < b.bookName) return -1;
            if(a.bookName == b.bookName) return 0;
            if(a.bookName > b.bookName) return 1;
            }));
        dispatch(nameSort(result));
    }
}

export function pointSortAPI() {
    return async (dispatch, getState) => {
        const result = await request('GET', `/menu`).then(
            res=>res.sort((a,b) => {
            if(a.bookPoint < b.bookPoint) return 1;
            if(a.bookPoint == b.bookPoint) return 0;
            if(a.bookPoint > b.bookPoint) return -1;
            }));
        dispatch(pointSort(result));
    }
}

export function sellSortAPI() {
    return async (dispatch, getState) => {
        const result = await request('GET', `/menu`).then(
            res=>res.sort((a,b) => {
            if(a.bookSell < b.bookSell) return 1;
            if(a.bookSell == b.bookSell) return 0;
            if(a.bookSell > b.bookSell) return -1;
            }));
        dispatch(sellSort(result));
    }
}

 export function getReivewAPI(menu) {
    
     console.log('modifyMenu api calls...');

     return async (dispatch, getState) => {
    
         const result = await request('GET', `/menu/${menu.id}`, menu);
         console.log('registMenu result : ', result);
    
         dispatch(review(result));
     }
 }
