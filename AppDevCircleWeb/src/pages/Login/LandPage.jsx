import React, { Component, Fragment } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import styles from './style/lpstyle.module.sass'

class NormalLoginForm extends Component {
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
      <Fragment>
        <Form className={styles.loginForm}
          onSubmit={this.handleSubmit}
        >
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Please input your username!' }]
            })(
              <Input
                placeholder="Username"
                prefix={
                  <Icon style={{ color: 'rgba(0,0,0,.25)' }}
                    type="user"
                  />
                }
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }]
            })(
              <Input
                placeholder="Password"
                prefix={
                  <Icon style={{ color: 'rgba(0,0,0,.25)' }}
                    type="lock"
                  />}
                type="password"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true
            })(<Checkbox>Remember me</Checkbox>)}
            <p className={styles.loginFormForgot}>
              Forgot password
            </p>
            <Button className={styles.loginFormButton}
              htmlType="submit"
              type="primary"
            >
            Log in
            </Button>
          Or <p>register now!</p>
          </Form.Item>
        </Form>
      </Fragment>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default WrappedNormalLoginForm
