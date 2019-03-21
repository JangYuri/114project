import React from 'react';
import './common_style.css'
import './Tab.css'
import DataTable from '../components/DataTable';
import { Link } from 'react-router-dom';


const listTitle = ["선택", "금액등록자", "담당자", "물건코드", "상위물건코드", "등록일", "거래형태", "물건용도", "진행상황", "읍면동", "리", "본번지"]
const listTitle2 = ["성명", "호칭", "관계", "역할", "휴대폰", "일반전화", "고객상호", "비고", "", "", "", ""]

const testdata = [
    ['ok', 'ok', 'ok', 'ok', 'ok', 'ok', 'ok', 'ok', 'ok', 'ok', 'ok', 'ok'],
    ['ok', 'ok', 'ok', 'ok', 'ok', 'ok', 'ok', 'ok', 'ok', 'ok', 'ok', 'ok'],
    ['ok', 'ok', 'ok', 'ok', 'ok', 'ok', 'ok', 'ok', 'ok', 'ok', 'ok', 'ok'],
]
const testdata2 = [
    ['ok', 'ok', 'ok', 'ok', 'ok', 'ok', 'ok', 'ok', '', '', '', ''],
    ['ok', 'ok', 'ok', 'ok', 'ok', 'ok', 'ok', 'ok', '', '', '', ''],
    ['ok', 'ok', 'ok', 'ok', 'ok', 'ok', 'ok', 'ok', '', '', '', ''],
]

const Tab1 = () => {
    return (
        <section className="Contents">
            <div className="Filter">
                <div className="arrange-row">
                    <span>
                        <input type='checkbox' />
                        <p className="Filter-name">전체</p>
                    </span>
                    <button className="btn-style-black"><Link to="/search" className="delete-link-style">검색창 열기</Link></button>
                </div>
                <div className="arrange-row">
                    <button className="btn-style-black">정렬초기화</button>
                    <span>
                        <p className="Filter-name">정렬기준</p>
                        <select className="Filter-selectbox">
                            <option value="">최근수정일</option>
                        </select>
                    </span>
                    <span>
                        <p className="Filter-name">팀</p>
                        <select className="Filter-selectbox">
                            <option value="">최근수정일</option>
                        </select>
                    </span>
                    <span>
                        <p className="Filter-name">직원</p>
                        <select className="Filter-selectbox">
                            <option value="">최근수정일</option>
                        </select>
                    </span>
                </div>
                <div className="arrange-row">
                    <button className="btn-style-black">물건등록</button>
                    <img className="Filter-setting" />
                </div>
            </div>
            <article className="tab-dataTable">
                <DataTable listTitle={listTitle} data={testdata} />
            </article>
            <article className="tab-dataTable">
                <DataTable listTitle={listTitle2} data={testdata2} />
            </article>
        </section>
    );
};

export default Tab1;