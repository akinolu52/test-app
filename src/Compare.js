import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Typography, Upload, Menu } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { checkAuth, compareText } from './ApiService';

const { Title } = Typography;
export const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
};
export const tailLayout = {
    wrapperCol: { offset: 8, span: 8 },
};

function Nav({ history }) {

    const [current, setCurrent] = useState(1);
    return (
        <Menu onClick={null} selectedKeys={[current]} mode="horizontal">
            <Menu.Item key="1" onClick={() => {
                setCurrent(1);
                return history.push('/compare');
            }}>
                Compare
            </Menu.Item>
            <Menu.Item key="2" onClick={() => {
                setCurrent(2);
                return history.push('/history');
            }}>
                History
            </Menu.Item>

            <Menu.Item key="3" onClick={() => {
                setCurrent(3);
                window.localStorage.clear();
                return history.push('/login');
            }}>
                Logout
            </Menu.Item>

        </Menu>
    );
}
export { Nav };

function Compare(props) {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        checkAuth(props.history)
    }, [props]);

    const onFinish = async values => {
        setLoading(true)
        return await compareText(values, props.history, setLoading);
    };

    const normFile = e => {
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };
    return (
        <>
            <Nav history={props.history} />
            <section style={{ textAlign: 'center', marginTop: 48, marginBottom: 60 }}>
                <Title level={2}>
                    Compare Text File
                </Title>
            </section>
            <Form
                {...layout}
                name="basic"
                onFinish={onFinish}
            >
                <Form.Item
                    label="Student(A) Name"
                    name="nameA"
                    rules={[
                        {
                            required: true,
                            message: 'Please input student name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="uploadA"
                    label="Student(A) Upload"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    extra="Only txt files are allowed"
                    rules={[
                        {
                            required: true,
                            message: 'Please upload student result!',
                        },
                    ]}
                >
                    <Upload name="logo" action="/upload.do" listType="text" multiple={false} accept=".txt"
                        beforeUpload={_file => { return false; }}>
                        <Button>
                            <UploadOutlined /> Click to upload
                        </Button>
                    </Upload>
                </Form.Item>

                <Form.Item
                    label="Student(B) Name"
                    name="nameB"
                    rules={[
                        {
                            required: true,
                            message: 'Please input student name!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="uploadB"
                    label="Student(B) Upload"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    extra="Only txt files are allowed"
                    rules={[
                        {
                            required: true,
                            message: 'Please upload student result!',
                        },
                    ]}
                >
                    <Upload name="logo" action="/upload.do" listType="text" multiple={false} accept=".txt"
                        beforeUpload={_file => { return false; }}>
                        <Button>
                            <UploadOutlined /> Click to upload
                        </Button>
                    </Upload>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" loading={loading}>
                        Submit
                    </Button>
                </Form.Item>
            </Form >
        </>
    )
}

export default Compare;