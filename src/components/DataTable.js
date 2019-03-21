import React from 'react';
import './DataTable.css'

const DataTable = ({ listTitle, data }) => {
    return (
        <div className="TableWrapper">
            <table className="DataTable">
                <tr>
                    {listTitle.map(v => {
                        return <th>{v}</th>
                    })}
                </tr>
                {data.map(v => {
                    return <tr>{v.map(t => {
                        return <td>{t}</td>
                    })}</tr>
                })}
            </table>
        </div>
    );
};

export default DataTable;