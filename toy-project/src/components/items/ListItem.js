import { Link } from  'react-router-dom';

function ListItem({ menu }) {

    return (
        <Link to={ `/list/${ menu.bookNum }` }>
            <div className="ListItem">
                <h3>이름 : { menu.bookName }</h3>
                <h3>가격 : { menu.bookPrice }</h3>
                
            </div>
        </Link>
    );
}

export default ListItem;