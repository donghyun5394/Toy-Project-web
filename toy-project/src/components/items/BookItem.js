import { Link } from  'react-router-dom';

function BookItem({ menu }) {

    return (
        <Link to={ `/menu/${ menu.id }` }>
            <div className="listItem">
            <img src={ menu.detail.image } style={ { maxWidth: 400 } } alt={ menu.bookName }/>
            </div>
        </Link>
    );
}

export default BookItem;