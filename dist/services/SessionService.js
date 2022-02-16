"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SessionService = void 0;

var _bcryptjs = require("bcryptjs");

var _jsonwebtoken = require("jsonwebtoken");

var _repositories = require("../repositories");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

class SessionService {
  execute({
    empweblogin,
    empwebsenha
  }) {
    return _asyncToGenerator(function* () {
      const user = yield (0, _repositories.EmpresaWebRepository)().findOne({
        empweblogin
      });

      if (!user) {
        return new Error("Usuário não existe");
      }

      const senhaMatch = yield (0, _bcryptjs.compare)(empwebsenha, user.empwebsenha);

      if (!senhaMatch) {
        return new Error("Usuário ou senha incorretos!");
      }

      const token = (0, _jsonwebtoken.sign)({}, "oieusouogoku", {
        subject: user.empwebcodigo
      });
      return {
        user,
        token
      };
    })();
  }

}

exports.SessionService = SessionService;