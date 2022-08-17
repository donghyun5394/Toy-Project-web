import MenuList from "../components/lists/MenuList";

function BookList() {

    return (
        <>
            <ul className="booklist-Bar" >
                <li><a href="#">가나다순 정렬</a></li>
                <li><a href="#">날짜순 정렬</a></li>
            </ul>
            <MenuList/>
        </>
    );
}

export default BookList;