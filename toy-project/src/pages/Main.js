import "./Main.css";

function Main() {

    return (
        <>
            
            <div className="cat">
            <img className="banner" src="../images/banner.jpg"></img>
            </div>
            <ul className="bookmain">
                <li><img src="../images/book10.jpg"></img><span>평점 1위</span></li>
                <li><img src="../images/book7.jpg"></img><span>평점 2위</span></li>
                <li><img src="../images/book8.jpg"></img><span>판매량 1위</span></li>
                <li><img src="../images/book9.jpg"></img><span>판매량 2위</span></li>
            </ul>
        </>
    );
}

export default Main;