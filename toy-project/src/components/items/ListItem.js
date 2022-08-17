import { Link } from  'react-router-dom';

function ListItem({ menu }) {

    return (
        <Link to={ `/list/${ menu.bookNum }` }>
            <div className="ListItem">
            <img src={ menu.detail.image } style={ { maxWidth: 400 } } alt={ menu.bookName }/>
            </div>
        </Link>
    );
}

export default ListItem;