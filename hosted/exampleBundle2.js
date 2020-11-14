"use strict";

var HelloUser = function HelloUser(props) {
  return /*#__PURE__*/React.createElement("div", null, "Hello ", props.username, /*#__PURE__*/React.createElement("p", null, "Change Name:"), /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: props.username,
    onChange: handleNameChange
  }));
};

var handleNameChange = function handleNameChange(e) {
  ReactDOM.render( /*#__PURE__*/React.createElement(HelloUser, {
    username: e.target.value
  }), document.getElementById('app'));
};

var init = function init() {
  ReactDOM.render( /*#__PURE__*/React.createElement(HelloUser, {
    username: "Jeb"
  }), document.getElementById('app'));
};

window.onload = init;
