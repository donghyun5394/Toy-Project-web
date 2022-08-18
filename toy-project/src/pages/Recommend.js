import RecommendList from "../components/lists/RecommendList";
import { pointSortAPI } from "../API/bookListAPI";
import { sellSortAPI } from "../API/bookListAPI";
import { useDispatch } from "react-redux";


function Recommend() {

    const dispatch = useDispatch();

    const onClickHandlerPoint=()=>{
        dispatch(pointSortAPI())
    }

    const onClickHandlerSeller=()=>{
        dispatch(sellSortAPI())
    }

    return (
        <>
            <ul className="booklist-Bar" >
            <button onClick={onClickHandlerPoint}>평점순</button>
            <button onClick={onClickHandlerSeller}>판매량순</button>
            </ul>
            <RecommendList/>
        </>
    );
}

export default Recommend;