import React from 'react';
import { Link,useLocation } from 'react-router-dom';
import "./header.scss"
import logo from "../../assets/watching.png";
import { useRef } from 'react';
import { useEffect } from 'react';

const headerNav = [
    {
        display:"Home",
        path:"/"
    },
    {
        display:"Movies",
        path:"/movie"
    },
    {
        display:"TV Series",
        path:"/tv"
    },
];

const Header = () => {
    const {pathname} = useLocation();
    const headerRef = useRef(null);
    const active = headerNav.findIndex(e=>e.path===pathname);

    useEffect(()=>{
        const shrinkHeader = ()=>{
            if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
                headerRef.current.classList.add("shrink");
            }else{
                headerRef.current.classList.remove("shrink");
            }
        }
        window.addEventListener("scroll",shrinkHeader);
        return()=>{
            window.removeEventListener("scroll", shrinkHeader);
        }
    },[]);
    return (
        <div ref={headerRef} className="header">
            <div className="header_wrap container">
                <div className="logo">
                    <img src={logo} alt="" />
                    <Link to="/">Watching</Link>
                </div>
                <ul className="header_nav">
                    {
                        headerNav.map((item,index)=>(
                            <li key={index} className={`${item===active ? "active" : ""}`}>
                                <Link to={item.path}>
                                    {item.display}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};

export default Header;