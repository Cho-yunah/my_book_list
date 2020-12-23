import React from 'react';
import { Row, Col, Input, Button } from 'antd';
import styles from './Signin.module.css';

class Signin extends React.Component {
  state = {
    email: '기본값',
  };
  render() {
    // console.log(this.state.email);
    const regexEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    const isEmail = regexEmail.test(this.state.email);

    return (
      <form>
        <Row align="middle" className={styles.signin_row}>
          <Col span={24}>
            <Row className={styles.signin_contents}>
              <Col span={12}>
                <img
                  src="/img/bg_signin.png"
                  alt="Signin"
                  className={styles.signin_bg}
                />
              </Col>
              <Col span={12}>
                <div className={styles.signin_title}> My Books</div>
                <div className={styles.signin_subtitle}>
                  Please Note YOur Opinion
                </div>
                <div className={styles.signin_underline} />
                <div className={styles.email_title}>
                  Email
                  <span className={styles.required}> *</span>
                </div>
                <div className={styles.input_area}>
                  {/* <Input
                    name="email"
                    placeholder="email"
                    className={styles.Input}
                  /> */}
                  <input
                    type="text"
                    value={this.state.email}
                    onChange={this.change}
                  />
                  {isEmail ? '이메일 맞음' : '이메일 아님'}
                </div>
                <div className={styles.email_title}>
                  Password
                  <span className={styles.required}> *</span>
                </div>
                <div className={styles.input_area}>
                  <Input
                    type="password"
                    autoComplete="current-password"
                    className={styles.Input}
                  />
                </div>
                <div className={styles.button_area}>
                  <Button
                    size="large"
                    loading={false}
                    className={styles.button}
                    onClick={this.click}
                  >
                    Sign In
                  </Button>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </form>
    );
  }

  click = () => {
    // console.log('clicked', this.state.email);
  };

  change = (e) => {
    // console.log('change', e.target.value);
    this.setState({ email: e.target.value });
  };
}

export default Signin;
