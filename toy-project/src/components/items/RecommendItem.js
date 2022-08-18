import { Link } from  'react-router-dom';

function RecommendItem({ menu }) {
    return (
        <Link to={ `/menu/${ menu.id }` }>
        <div className="RecommendItem">
            <div className='recommend-img'>
            <img src={ menu.detail.image } alt={ menu.bookName }/>
            </div>
            <div className='recommendBox'>
            <div className='reName'> { menu.bookName }</div>
            <div className='infoFlex'><h3 className='reTitle'>저자</h3><div className='reEdit'> { menu.bookEdit }</div></div>
            <div className='infoFlex'><h3 className='reTitle'>판매가</h3><div className='rePrice'> { menu.bookPrice }</div></div>
            <div className='infoFlex'><h3 className='reTitle'>평점</h3><div className='rePoint'> { menu.bookPoint }</div></div>
            <div className='infoFlex'><h3 className='reTitle'>도서 판매량 </h3><div className='reSell'>{ menu.bookSell }</div></div>
            <div>
                dd{menu.detail.comment}
            </div>
            </div>
        </div>
        </Link>
    );
}
export default RecommendItem;