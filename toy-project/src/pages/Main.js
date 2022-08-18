import "./Main.css";
import { Link } from "react-router-dom";
function Main() {
    const Item = ({text}) => {
        return text;
    };
    return (
        <>
            
            <div className="cat">
            <Link to="/recommend"><img className="banner" src="../images/banner.jpg"/></Link>
            </div>
            <ul className="bookmain">
            <li>
                <k href="#">
                    <figure>
                        <Link to="/menu/2"><img src = "../images/book2.jpg" /></Link>
                        <figcaption>
                            <br/>
                            <bookname>계속 가보겠습니다</bookname>
                            <br/>
                            <l>평점 1위</l>
                            <br/>
                            <btnlink>
                            <Link to="/menu/2">
                                <button>자세히보기</button>
                            </Link>
                            </btnlink>
                        </figcaption>
                    </figure>
                </k>
            </li>
            <li>
                <k href="#">
                    <figure>
                        <Link to="/menu/6"><img src = "../images/book6.jpg" /></Link>
                        <figcaption>
                            <br/>
                            <bookname>파친코 1</bookname>
                            <br/>
                            <l>평점 2위</l>
                            <br/>
                            <btnlink>
                            <Link to="/menu/6">
                                <button>자세히보기</button>
                            </Link>
                            </btnlink>
                        </figcaption>
                    </figure>
                </k>
            </li>
            <li>
                <k href="#">
                    <figure>
                        <Link to="/menu/2"><img src = "../images/book2.jpg" /></Link>
                        <figcaption>
                            <br/>
                            <bookname>계속 가보겠습니다</bookname>
                            <br/>
                            <l>판매 1위</l>
                            <br/>
                            <btnlink>
                            <Link to="/menu/2">
                                <button>자세히보기</button>
                            </Link>
                            </btnlink>
                        </figcaption>
                    </figure>
                </k>
            </li>
            <li>
                <k href="#">
                    <figure>
                        <Link to="/menu/5"><img src = "../images/book5.jpg" /></Link>
                        <figcaption>
                            <br/>
                            <bookname>역행자</bookname>
                            <br/>
                            <l>판매 2위</l>
                            <br/>
                            <btnlink>
                            <Link to="/menu/5">
                                <button>자세히보기</button>
                            </Link>
                            </btnlink>
                        </figcaption>
                    </figure>
                </k>
            </li>
            </ul>
        </>
    );
}
export default Main;
