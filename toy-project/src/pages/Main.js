import "./Main.css";
import { Link } from "react-router-dom";

function Main() {

    return (
        <>
            
            <div className="cat">
            <Link to="/recommend"><img className="banner" src="../images/banner.jpg"/></Link>
            </div>
            <ul className="bookmain">
            <li>
                <k href="#">
                    <figure>
                        <Link to="/list/2"><img src = "../images/book2.jpg"/></Link>
                        <figcaption>계속 가보겠습니다<br></br><Link to="/menu/2"><button>자세히보기</button></Link></figcaption>
                    </figure>
                </k>
            </li>
            <li>
                <k href="#">
                    <figure>
                        <Link to="/list/6"><img src = "../images/book6.jpg" /></Link>
                        <figcaption>파친코 1<br></br><Link to="/menu/6"><button>자세히보기</button></Link></figcaption>
                    </figure>
                </k>
            </li>
            <li>
                <k href="#">
                    <figure>
                        <Link to="/list/2"><img src = "../images/book2.jpg" /></Link>
                        <figcaption>계속 가보겠습니다<br></br><Link to="/menu/2"><button>자세히보기</button></Link></figcaption>
                    </figure>
                </k>
            </li>
            <li>
                <k href="#">
                    <figure>
                        <Link to="/list/5"><img src = "../images/book5.jpg" /></Link>
                        <figcaption>역행자<br></br><Link to="/menu/5"><button>자세히보기</button></Link></figcaption>
                    </figure>
                </k>
            </li>
            </ul>
            <ul className="bookmain2">
                <li>평점 1위</li>
                <li>평점 2위</li>
                <li>판매 1위</li>
                <li>판매 2위</li>
            </ul>
        </>
    );
}

export default Main;