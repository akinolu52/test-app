import React, { useEffect, useState } from 'react';
import { Table, Tag } from 'antd';
import { checkAuth, getHistory } from './ApiService';
import { Nav } from './Compare';
const columns = [
    {
        title: 'Student A',
        dataIndex: 'nameA',
        key: 'nameA',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Student B',
        dataIndex: 'nameB',
        key: 'nameB',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Percent',
        dataIndex: 'percent',
        key: 'percent',
    },
];

const data = [
    {
        nameA: "student 1",
        nameB: "student B",
        percent: "50%",
        key: 1,
    },
    {
        nameA: "student 2",
        nameB: "student B",
        percent: "50%",
        key: 2,
    }
];
function History(props) {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        checkAuth(props.history)
    }, [props]);

    useEffect(() => {
        setLoading(true);
        getHistory(setLoading)
    }, []);

    return (
        <>
            <Nav history={props.history} />
            <Table columns={columns} dataSource={!loading ? data : []} loading={loading} />
        </>
    )
}

export default History;