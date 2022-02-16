"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ensuredAuthenticated = void 0;

var _jsonwebtoken = require("jsonwebtoken");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

const ensuredAuthenticated = () => {
  return /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* (request, response, next) {
      const authHeaders = request.headers.authorization;

      if (!authHeaders) {
        return response.status(401).json({
          error: "Token is missing"
        });
      }

      const [, token] = authHeaders.split(" ");

      try {
        (0, _jsonwebtoken.verify)(token, "oieusouogoku");
        const {
          sub
        } = (0, _jsonwebtoken.decode)(token);
        request.userId = sub.toString();
        return next();
      } catch (err) {
        return response.status(401).end();
      }
    });

    return function (_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }();
};

exports.ensuredAuthenticated = ensuredAuthenticated;