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
            <div className="Button" >
            <button type="button" className="rebt" onClick={onClickHandlerPoint}>
            평점순
            </button>
            <button type="button" className="rebt" onClick={onClickHandlerSeller}>
            판매순
            </button>
            </div>
            <RecommendList/>
        </>
    );
}

export default Recommend;