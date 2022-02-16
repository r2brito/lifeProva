"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmpresaWebService = void 0;

var _bcryptjs = require("bcryptjs");

var _repositories = require("../repositories");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

class EmpresaWebService {
  execute({
    empcodigo,
    empwebnome,
    empweblogin,
    empwebsenha,
    empwebstatus
  }) {
    return _asyncToGenerator(function* () {
      const existEmpresa = yield (0, _repositories.EmpresaRepository)().findOne({
        empcodigo
      });

      if (!existEmpresa) {
        return new Error("Empresa não encontrada");
      }

      const senhaHash = yield (0, _bcryptjs.hash)(empwebsenha, 8);
      const empresaweb = (0, _repositories.EmpresaWebRepository)().create({
        empcodigo: existEmpresa,
        empwebnome,
        empweblogin,
        empwebsenha: senhaHash,
        empwebstatus
      });
      yield (0, _repositories.EmpresaWebRepository)().save(empresaweb);
      return empresaweb;
    })();
  }

}

exports.EmpresaWebService = EmpresaWebService;