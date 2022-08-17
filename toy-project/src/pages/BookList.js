import BookLists from "../components/lists/BookLists";

function BookList() {

    return (
        <>
            <ul className="booklist-Bar" >
                <li><a href="#">가나다순 정렬</a></li>
                <li><a href="#">날짜순 정렬</a></li>
            </ul>
            <BookLists/>
        </>
    );
}

export default BookList;