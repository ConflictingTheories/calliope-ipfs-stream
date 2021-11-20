"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ipfsCore = _interopRequireDefault(require("ipfs-core"));

var _hls = _interopRequireDefault(require("hls.js"));

var _hlsjsIpfsLoader = _interopRequireDefault(require("hlsjs-ipfs-loader"));

var _reactRecollect = require("react-recollect");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var IPFSVideo = /*#__PURE__*/function (_Component) {
  _inherits(IPFSVideo, _Component);

  var _super = _createSuper(IPFSVideo);

  function IPFSVideo(props) {
    _classCallCheck(this, IPFSVideo);

    return _super.call(this, props);
  }

  _createClass(IPFSVideo, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!_reactRecollect.store.ipfsServer) {
                  _context.next = 4;
                  break;
                }

                _context.t0 = _reactRecollect.store.ipfsServer;
                _context.next = 7;
                break;

              case 4:
                _context.next = 6;
                return _ipfsCore["default"].create({
                  repo: "ipfs-" + Math.random()
                });

              case 6:
                _context.t0 = _context.sent;

              case 7:
                _reactRecollect.store.ipfsServer = _context.t0;

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var ipfsHash = this.props.ipfsHash;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("video", {
        ref: Player("master.m3u8", "QmQjDRKG8pZaeBnQi9zLqupCgY9D2Mth6noF4GMdZR6CVQ"),
        id: "video",
        controls: true
      }));
    }
  }]);

  return IPFSVideo;
}(_react.Component);

var IPFSAudio = /*#__PURE__*/function (_Component2) {
  _inherits(IPFSAudio, _Component2);

  var _super2 = _createSuper(IPFSAudio);

  function IPFSAudio(props) {
    _classCallCheck(this, IPFSAudio);

    return _super2.call(this, props);
  }

  _createClass(IPFSAudio, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!_reactRecollect.store.ipfsServer) {
                  _context2.next = 4;
                  break;
                }

                _context2.t0 = _reactRecollect.store.ipfsServer;
                _context2.next = 7;
                break;

              case 4:
                _context2.next = 6;
                return _ipfsCore["default"].create({
                  repo: "ipfs-" + Math.random()
                });

              case 6:
                _context2.t0 = _context2.sent;

              case 7:
                _reactRecollect.store.ipfsServer = _context2.t0;

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function componentDidMount() {
        return _componentDidMount2.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var ipfsHash = this.props.ipfsHash;
      return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("audio", {
        ref: Player("master.m3u8", "QmQjDRKG8pZaeBnQi9zLqupCgY9D2Mth6noF4GMdZR6CVQ"),
        id: "audio",
        controls: true
      }));
    }
  }]);

  return IPFSAudio;
}(_react.Component); // Players IPFS Datastream


function Player(source, hash) {
  _hls["default"].DefaultConfig.loader = _hlsjsIpfsLoader["default"];
  _hls["default"].DefaultConfig.debug = true;
  return function (ref) {
    if (_hls["default"].isSupported()) {
      var hls = new _hls["default"]({
        ipfs: _reactRecollect.store.ipfsServer,
        ipfsHash: hash
      });
      hls.loadSource(source); //'master.m3u8'

      hls.attachMedia(ref);
      hls.on(_hls["default"].Events.MANIFEST_PARSED, function () {
        return ref.play();
      });
    }
  };
}

var _default = {
  Video: (0, _reactRecollect.collect)(IPFSVideo),
  Audio: (0, _reactRecollect.collect)(IPFSAudio)
};
exports["default"] = _default;