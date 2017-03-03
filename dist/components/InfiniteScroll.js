'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InfiniteScroll = function (_React$Component) {
    _inherits(InfiniteScroll, _React$Component);

    function InfiniteScroll() {
        _classCallCheck(this, InfiniteScroll);

        return _possibleConstructorReturn(this, (InfiniteScroll.__proto__ || Object.getPrototypeOf(InfiniteScroll)).apply(this, arguments));
    }

    _createClass(InfiniteScroll, [{
        key: 'componentDidMount',
        value: function () {
            function componentDidMount() {
                console.log('Work in progress');
            }

            return componentDidMount;
        }()
    }, {
        key: 'render',
        value: function () {
            function render() {
                return _react2['default'].createElement(
                    'div',
                    null,
                    'Work in progress'
                );
            }

            return render;
        }()
    }]);

    return InfiniteScroll;
}(_react2['default'].Component);

InfiniteScroll.defaultProps = {
    foo: 'bar'
};

InfiniteScroll.propTypes = {
    foo: _react.PropTypes.string
};

exports['default'] = InfiniteScroll;