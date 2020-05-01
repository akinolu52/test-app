import React, { useState } from 'react';
import { Form, Input, Button, Typography } from 'antd';
import { loginUser } from './ApiService';
import { layout, tailLayout } from './Compare';

const { Title } = Typography;

function Login(props) {
    const [loading, setLoading] = useState(false);

    const onFinish = async values => {
        setLoading(true)

        return await loginUser(values, props.history, setLoading);
    };

    return (
        <div className="pad">
            <section style={{ textAlign: 'center', marginTop: 48, marginBottom: 60 }}>
                <Title level={2}>
                    Mock Test
                </Title>
            </section>
            <Form
                {...layout}
                name="basic"
                onFinish={onFinish}
                onFinishFailed={null}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" loading={loading}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Login;