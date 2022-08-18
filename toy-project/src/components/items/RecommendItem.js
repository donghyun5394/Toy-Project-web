import { Link } from  'react-router-dom';

function RecommendItem({ menu }) {

    return (
        
        <Link to={ `/menu/${ menu.id }` }>
            <div className="RecommendItem">
            <img src={ menu.detail.image } style={ { maxWidth: 400, display: 'inline-block' , align: 'right'} } alt={ menu.bookName }/>
            <span>도서 이름 : { menu.bookName }</span>
            <span>도서 작가 : { menu.bookEdit }</span>
            <span>도서 가격 : { menu.bookPrice }</span>
            <span>도서 평점 : { menu.bookPoint }</span>
            </div>

        
        </Link>
    );
}

export default RecommendItem;