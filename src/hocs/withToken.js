// function Pepero(props) {
//   return (
//     <div>
//       나는 Pepero {props.token} {props.children}
//     </div>
//   );
// }

// Pepero.test = () => {};

export default function withToken(Component) {
  function NewComponent(props) {
    const token = localStorage.getItem('token');
    return <Component {...props} token={token} />;
  }

  NewComponent.displayName = `withToken(${
    Component.displayName || Component.name
  })`;

  return NewComponent;
}

// export default withToken(Pepero);

// function DoNotUse() {
//   const NewC = withToken(Pepero);
//   return <NewC>오레오 맛</NewC>;
// }

// function withRouter(Component) {
//   const NewComponent = () => {
//     //
//     return <Component history={history} location={location} match={match} />;
//   };
//   return NewComponent;
// }

// function DoNotThis(C) {
//   class NewComponent extends C {
//     // render() {
//     //   return super.render();
//     // }

//     me;
//   }
// }

// export default withRouter(LoginButton);

// 1. withRouter(LoginButton);
// 함수(빼빼로) => 선물세트

// 2. createFragmentContainer(
//   component: ReactComponentClass,
//   fragmentSpec: {[string]: GraphQLTaggedNode},
// ): ReactComponentClass;
// 함수(빼빼로, 빼빼로를 설정할 설정 객체 {포장지: 리본}) => 리본 달린 선물세트
// createFragmentContainer(PePero, {}) =>

// 3. function connect(mapStateToProps?, mapDispatchToProps?, mergeProps?, options?)
// 함수(설정1 {포장지}, 설정2 {색}, 설정3 {크기}, 설정4) => HOC 함수
// HOC함수(빼빼로) => 선물세트
// connect({}?, {}?, {}?, {}?)(Pepero) =>
