"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RatreamentoRepository = exports.EmpresaWebRepository = exports.EmpresaRepository = void 0;

var _Empresa = require("../entity/Empresa");

var _EmpresaWeb = require("../entity/EmpresaWeb");

var _Ratreamento = require("../entity/Ratreamento");

var _typeorm = require("typeorm");

const EmpresaRepository = () => {
  return (0, _typeorm.getRepository)(_Empresa.Empresa);
};

exports.EmpresaRepository = EmpresaRepository;

const EmpresaWebRepository = () => {
  return (0, _typeorm.getRepository)(_EmpresaWeb.EmpresaWeb);
};

exports.EmpresaWebRepository = EmpresaWebRepository;

const RatreamentoRepository = () => {
  return (0, _typeorm.getRepository)(_Ratreamento.Ratreamento);
};

exports.RatreamentoRepository = RatreamentoRepository;