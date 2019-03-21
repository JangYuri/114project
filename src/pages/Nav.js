import React from 'react';
import './Nav.css'
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <ul className="Nav-ul">
                <li className="Nav-li">
                    <NavLink exact to="/dashboard" activeClassName="Nav-active">대쉬보드</NavLink>
                </li>
                <li className="Nav-li">
                    <NavLink to="/tab1" activeClassName="Nav-active">전체</NavLink>
                </li>
                <li className="Nav-li">
                    <NavLink to="/tab2" activeClassName="Nav-active">매매</NavLink>
                </li>
                <li className="Nav-li">
                    <NavLink to="/tab3" activeClassName="Nav-active">임대</NavLink>
                </li>
                <li className="Nav-li">
                    <a href="#">고객</a>
                </li>
                <li className="Nav-li">
                    <a href="#">관계인</a>
                </li>
                <li className="Nav-li">
                    <a href="#">영업일기</a>
                </li>
                <li className="Nav-li">
                    <a href="#">공용자료</a>
                </li>
                <li className="Nav-li">
                    <a href="#">마케팅</a>
                </li>
                <li className="Nav-li">
                    <a href="#">조직관리</a>
                </li>
                <li className="Nav-li">
                    <a href="#">직원관리</a>
                </li>
                <li className="Nav-li">
                    <a href="#">사용자관리</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;