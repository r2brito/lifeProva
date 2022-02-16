"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.save = save;

var _EmpresaWebService = require("../services/EmpresaWebService");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function save(_x, _x2) {
  return _save.apply(this, arguments);
}

function _save() {
  _save = _asyncToGenerator(function* (request, response) {
    const {
      empcodigo
    } = request.params;
    const {
      empwebnome,
      empweblogin,
      empwebsenha,
      empwebstatus
    } = request.body;
    const empresaWebService = new _EmpresaWebService.EmpresaWebService();
    const result = yield empresaWebService.execute({
      empcodigo,
      empwebnome,
      empweblogin,
      empwebsenha,
      empwebstatus
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result);
  });
  return _save.apply(this, arguments);
}