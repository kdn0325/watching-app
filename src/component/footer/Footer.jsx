import "./footer.scss";
import { Link } from 'react-router-dom';
import bg from "../../assets/footer-bg.jpg";
import logo from "../../assets/watching.png";

const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer_content container">
            <div className="logo">
                    <img src={logo} alt="" />
                    <Link to="/">Watching</Link>
                </div>
            </div>
            <div className="footer_content_menus">
                <div className="footer_content_menu">
                    <Link to="/">홈</Link>
                    <Link to="/">문의하기</Link>
                    <Link to="/">서비스 소개</Link>
                    <Link to="/">입사 정보</Link>
                </div>
                <div className="footer_content_menu">
                    <Link to="/">실시간</Link>
                    <Link to="/">FAQ</Link>
                    <Link to="/">프리미엄</Link>
                    <Link to="/">법적 고지</Link>
                </div>
                <div className="footer_content_menu">
                    <Link to="/">Watching 소개</Link>
                    <Link to="/">현재 상영중</Link>
                    <Link to="/">오직 Watching에서</Link>
                </div>
            </div>
        </div>
    );
};

export default Footer;