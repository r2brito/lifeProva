"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handle = handle;

var _SessionService = require("../services/SessionService");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function handle(_x, _x2) {
  return _handle.apply(this, arguments);
}

function _handle() {
  _handle = _asyncToGenerator(function* (request, response) {
    const {
      empweblogin,
      empwebsenha
    } = request.body;
    const sessionService = new _SessionService.SessionService();
    const result = yield sessionService.execute({
      empweblogin,
      empwebsenha
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(200).json(result);
  });
  return _handle.apply(this, arguments);
}