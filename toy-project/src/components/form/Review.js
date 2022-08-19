import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { review } from '../../API/bookListAPI';


function Review() {

    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const result = useSelector(state => state.menuReducer);

    /* 입력 값 state 저장 */
    const [comment, setComment] = useState({
        id : id,
        text : '',
    });

    /* 입력 값 변경 시 이벤트 핸들러 */
    const onChangeHandler = (e) => {
      
        setComment(
            {
                ...comment, 
                [e.target.name] : e.target.value
            }
        
        );

    }
    

    useEffect(
        () => {
            if(result.modify) {
                alert('댓글 등록')
                window.location.replace(`/menu/${id}`)
            }
        },
        [result.modify]
      );

    const onClickHandler = () => {
        /* review에 대한 유효성 검사 후 호출 */
        dispatch(review(comment));
     
    }
    
   
    return(
        <>
            <div className='reviewButton'>
            <textarea id = "textarea" name="text"  placeholder ="리뷰를 남겨주세요" value={ comment.text } onChange={ onChangeHandler }></textarea>          
            <button className ="enter" onClick={ onClickHandler }> 등록</button>
            <button className = "cancel" onClick={ () => navigate(`/menu`) }>취소</button>
            </div>
        </>
    )
}

export default Review;