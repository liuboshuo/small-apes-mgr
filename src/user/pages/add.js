import React from 'react'
import { Form, Icon, Input, Button, Row,Col } from 'antd';
import { inject,observer } from "mobx-react"

@inject("UserAddStore")
@observer
class AddUserPage extends React.Component {

    handleSubmit = e => {
        const { UserAddStore , history} = this.props;
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                const result = await UserAddStore.addUser(values);
                if(result && result.code == "0"){
                    history.push("/user/list")
                }
            }
        });
    };
    
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Row>
                <Col span={9}></Col>
                <Col span={6}>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('mobile', {
                                rules: [{ required: true, message: '请输入手机号!' },
                                        {pattern:/^1(3|4|5|6|7|8|9)\d{9}$/,message:"请输入正确的手机号！"}
                            ],
                            })(
                                <Input
                                    prefix={<Icon type="mobile" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="请输入手机号"
                                    style={{height:44}}
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('email', {
                                rules: [{ required: true, message: '请输入邮箱!' },
                                        {pattern:/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/,message:"请输入正确的邮箱！"}
                            ],
                            })(
                                <Input
                                    prefix={<Icon type="email" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="请输入邮箱"
                                    style={{height:44}}
                                />,
                            )}
                        </Form.Item>
                        
                        <Form.Item>
                            {getFieldDecorator('user_name', {
                                rules: [{ required: true, message: '请输入用户名!' }],
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
                                rules: [{ required: true, message: '请输入密码!' }],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="请输入密码"
                                    style={{height:44}}
                                />,
                            )}
                            </Form.Item>
                        <Form.Item style={{textAlign:"center"}}>
                            <Button type="primary" htmlType="submit" size="large" style={{width:210}} >
                                添加
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
                <Col span={9}></Col>
            </Row>
        );
    }
}

 
export default Form.create({ name: 'normal_login' })(AddUserPage);;

