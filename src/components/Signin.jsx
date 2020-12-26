import React from 'react';
import { Row, Col, Input, Button } from 'antd';
import styles from './Signin.module.css';
import axios from 'axios';

// class 컴포넌트에서 사용하는 createrRef 함수
class Signin extends React.Component {
  _password = React.createRef(); // 객체

  state = {
    email: '기본값',
    loading: false,
  };
  render() {
    // console.log(this.state.email);
    const { email, loading } = this.state;
    const isEmail = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(
      this.state.email,
    );

    console.log(this._password);

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
                  <Input
                    name="email"
                    placeholder="Email"
                    autoComplete="email"
                    className={styles.Input}
                    value={this.state.email}
                    onChange={this.change}
                  />
                  {/* <input
                    type="text"
                    value={this.state.email}
                    onChange={this.change}
                  />
                  {isEmail ? '이메일 맞음' : '이메일 아님'} */}
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
                    ref={this._password}
                  />
                  {/* <input
                    type="password"
                    ref={this._password}
                    onMouseOver={this._onMouseOver}
                  /> */}
                </div>
                <div className={styles.button_area}>
                  <Button
                    size="large"
                    loading={loading}
                    className={styles.button}
                    onClick={this.click}
                    disabled={!isEmail}
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
  _onMouseOver = async () => {
    this._password.current.focus();
  };

  click = async () => {
    const { email } = this.state;
    const password = this._password.current.input.value;
    // console.log('clicked', email, password);

    // 서버에다가 이메일 패스워드 보내서 인증된 사용자인지 체크
    // axios
    //   .post('https://api.marktube.tv/v1/me', {
    //     email,
    //     password,
    //   })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    try {
      // 호출 시작 => 로딩시작
      this.setState({ loading: true });
      const response = await axios.post('https://api.marktube.tv/v1/me', {
        email,
        password,
      });
      // sleep
      await sleep(1000);

      this.setState({ loading: false });
      // 호출 완료 => 로딩끝
      console.log(response.data.token);
    } catch (error) {
      this.setState({ loading: false });
      //  호출 완료 => 로딩끝
      console.log(error);
    }
  };

  change = (e) => {
    // console.log('change', e.target.value);
    this.setState({ email: e.target.value });
  };
}

export default Signin;

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
