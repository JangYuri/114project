import React from 'react';
import './common_style.css'
import './Search.css'

const innerTableTitle = ["진행상황", "거래형태", "물건용도", "물건종류", "용도지역", "업종(대)", "업종(소)", "금액비교"]

const innerDatas = [
    ['ok', 'ok', 'ok', 'ok', 'ok', 'ok', 'ok', 'ok'],
]


const Tab2 = () => {
    return (
        <section className="Contents">
            <div className="Filter">
                <div className="arrange-row-justi">
                    <span>
                        <p className="Filter-name">관련코드</p>
                        <input type='text' className="Filter-inputbox" />
                    </span>
                    <span>
                        <p className="Filter-name">물건구분</p>
                        <select className="Filter-selectbox">
                            <option></option>
                        </select>
                    </span>
                    <span>
                        <p className="Filter-name">검색구분 : </p>
                        <input type='radio' />
                        <p className="Filter-option">기본/호(층)별</p>
                        <input type='radio' />
                        <p className="Filter-option">기본물건</p>
                        <input type='radio' />
                        <p className="Filter-option">호(층)별물건</p>
                    </span>
                    <span>
                        <input type="checkbox" />
                        <p className="Filter-name">전체물건</p>
                    </span>
                    <button className="btn-style-black">초기화</button>
                    <button className="btn-style-black">검색</button>
                </div>
            </div>
            <article className="tab2-dataTable">
                <table className="tab2-dataTable-table" cellspacing="0" cellPadding="0" >
                    <tr>
                        <td rowspan="2" colSpan="10">
                            <table className="tab2-dataTable-innertable" cellspacing="0" cellPadding="0">
                                <tr>
                                    {innerTableTitle.map(v => {
                                        return <th>{v}</th>
                                    })}
                                </tr>
                                {innerDatas.map(v => {
                                    return <tr>{v.map(data => {
                                        return <td>{data}</td>
                                    })}</tr>
                                })}
                            </table>

                        </td>
                        <th>국가</th>
                        <td>
                            <select className="table-selectbox">
                                <option></option>
                            </select>
                        </td>
                        <th>대로명</th>
                        <td>
                            <select className="table-selectbox">
                                <option></option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th>시도</th>
                        <td>
                            <select className="table-selectbox">
                                <option></option>
                            </select>
                        </td>
                        <th>길명칭</th>
                        <td>
                            <select className="table-selectbox">
                                <option></option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <th>접수일</th>
                        <td className="arrange-row-justi">
                            <select className="table-selectbox">
                                <option>이전1개월</option>
                            </select>
                            <span className="table-inputdate">2018.3.06 ~ 2018.4.27</span>
                            <img className="icon_calendar" />
                        </td>
                        <th>방수</th>
                        <td>
                        </td>
                        <th>매매가</th>
                        <td className="arrange-row-justi">
                            <input type="text" className="table-inputbox-short" />
                            <p> ~ </p>
                            <input type="text" className="table-inputbox-short" />
                        </td>
                        <th>월세</th>
                        <td className="arrange-row-justi">
                            <input type="text" className="table-inputbox-short" />
                            <p> ~ </p>
                            <input type="text" className="table-inputbox-short" />
                        </td>
                        <th>상호</th>
                        <td>
                            <input type="text" className="table-inputbox-long" />
                        </td>
                        <th>시군구</th>
                        <td>
                            <select className="table-selectbox">
                                <option></option>
                            </select>
                        </td>
                        <th>길번호</th>
                        <td className="arrange-row-justi">
                            <input type="text" className="table-inputbox-short" />
                            <p> ~ </p>
                            <input type="text" className="table-inputbox-short" />
                        </td>
                    </tr>
                    <tr>
                        <th>수정일</th>
                        <td className="arrange-row-justi">
                            <select className="table-selectbox">
                                <option>이전1개월</option>
                            </select>
                            <span className="table-inputdate">2018.3.06 ~ 2018.4.27</span>
                            <img className="icon_calendar" />
                        </td>
                        <th>해당층수</th>
                        <td>
                        </td>
                        <th>전세금</th>
                        <td className="arrange-row-justi">
                            <input type="text" className="table-inputbox-short" />
                            <p> ~ </p>
                            <input type="text" className="table-inputbox-short" />
                        </td>
                        <th>전용면적</th>
                        <td className="arrange-row-justi">
                            <input type="text" className="table-inputbox-short" />
                            <p> ~ </p>
                            <input type="text" className="table-inputbox-short" />
                        </td>
                        <th>전속구분</th>
                        <td>
                            <select className="table-selectbox">
                                <option></option>
                            </select>
                        </td>
                        <th>읍면동</th>
                        <td>
                            <select className="table-selectbox">
                                <option></option>
                            </select>
                        </td>
                        <th>건물번호</th>
                        <td className="arrange-row-justi">
                            <input type="text" className="table-inputbox-short" />
                            <p> ~ </p>
                            <input type="text" className="table-inputbox-short" />
                        </td>
                    </tr>
                    <tr>
                        <th>전속일</th>
                        <td className="arrange-row-justi">
                            <select className="table-selectbox">
                                <option>이전1개월</option>
                            </select>
                            <span className="table-inputdate">2018.3.06 ~ 2018.4.27</span>
                            <img className="icon_calendar" />
                        </td>
                        <th>주차대수</th>
                        <td>
                        </td>
                        <th>보권금</th>
                        <td className="arrange-row-justi">
                            <input type="text" className="table-inputbox-short" />
                            <p> ~ </p>
                            <input type="text" className="table-inputbox-short" />
                        </td>
                        <th>공급면적</th>
                        <td className="arrange-row-justi">
                            <input type="text" className="table-inputbox-short" />
                            <p> ~ </p>
                            <input type="text" className="table-inputbox-short" />
                        </td>
                        <th>지하철</th>
                        <td>
                            <input type="text" className="table-inputbox-long" />
                        </td>
                        <th>본번지</th>
                        <td className="arrange-row-justi">
                            <input type="text" className="table-inputbox-short" />
                            <p> ~ </p>
                            <input type="text" className="table-inputbox-short" />
                        </td>
                        <th></th>
                        <td className="arrange-row-justi">
                        </td>
                    </tr>
                    <tr>
                        <th>만기일</th>
                        <td className="arrange-row-justi">
                            <select className="table-selectbox">
                                <option>이전1개월</option>
                            </select>
                            <span className="table-inputdate">2018.3.06 ~ 2018.4.27</span>
                            <img className="icon_calendar" />
                        </td>
                        <th>월매출</th>
                        <td>
                        </td>
                        <th>권리금</th>
                        <td className="arrange-row-justi">
                            <input type="text" className="table-inputbox-short" />
                            <p> ~ </p>
                            <input type="text" className="table-inputbox-short" />
                        </td>
                        <th>토지면적</th>
                        <td className="arrange-row-justi">
                            <input type="text" className="table-inputbox-short" />
                            <p> ~ </p>
                            <input type="text" className="table-inputbox-short" />
                        </td>
                        <th>건물명</th>
                        <td>
                            <input type="text" className="table-inputbox-long" />
                        </td>
                        <th>부번지</th>
                        <td className="arrange-row-justi">
                            <input type="text" className="table-inputbox-short" />
                            <p> ~ </p>
                            <input type="text" className="table-inputbox-short" />
                        </td>
                        <th></th>
                        <td className="arrange-row-justi">
                        </td>
                    </tr>
                    <tr>
                        <th>입주일</th>
                        <td className="arrange-row-justi">
                            <select className="table-selectbox">
                                <option>이전1개월</option>
                            </select>
                            <span className="table-inputdate">2018.3.06 ~ 2018.4.27</span>
                            <img className="icon_calendar" />
                        </td>
                        <th>수익률</th>
                        <td>
                        </td>
                        <th>월보증</th>
                        <td className="arrange-row-justi">
                            <input type="text" className="table-inputbox-short" />
                            <p> ~ </p>
                            <input type="text" className="table-inputbox-short" />
                        </td>
                        <th>대지면적</th>
                        <td className="arrange-row-justi">
                            <input type="text" className="table-inputbox-short" />
                            <p> ~ </p>
                            <input type="text" className="table-inputbox-short" />
                        </td>
                        <th>건물동</th>
                        <td>
                            <input type="text" className="table-inputbox-long" />
                        </td>
                        <th>호수</th>
                        <td>
                            <select className="table-selectbox">
                                <option></option>
                            </select>
                        </td>
                        <th></th>
                        <td className="arrange-row-justi">
                        </td>
                    </tr>
                </table>
            </article >
        </section >
    );
};

export default Tab2;