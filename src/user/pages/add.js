import React from 'react'
import { Form, Icon, Input, Button, Row,Col } from 'antd';

class AddUserPage extends React.Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
            console.log('Received values of form: ', values);
            }
        });
    };
    
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Row>
                <Col span={3}>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="请输入用户名"
                                    style={{height:44}}
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="请输入密码"
                                    style={{height:44}}
                                />,
                            )}
                            </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" size="large" style={{width:210}} >
                                添加
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        );
    }
}

 
export default Form.create({ name: 'normal_login' })(AddUserPage);;

