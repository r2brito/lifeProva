"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EmpresaWeb = void 0;

var _typeorm = require("typeorm");

var _Empresa = require("./Empresa");

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

let EmpresaWeb = (_dec = (0, _typeorm.Entity)(), _dec2 = (0, _typeorm.PrimaryGeneratedColumn)("uuid"), _dec3 = Reflect.metadata("design:type", String), _dec4 = (0, _typeorm.ManyToMany)(() => _Empresa.Empresa, empresa => empresa.empresaWeb), _dec5 = (0, _typeorm.JoinColumn)(), _dec6 = Reflect.metadata("design:type", typeof _Empresa.Empresa === "undefined" ? Object : _Empresa.Empresa), _dec7 = (0, _typeorm.Column)("varchar"), _dec8 = Reflect.metadata("design:type", String), _dec9 = (0, _typeorm.Column)("varchar"), _dec10 = Reflect.metadata("design:type", String), _dec11 = (0, _typeorm.Column)("varchar"), _dec12 = Reflect.metadata("design:type", String), _dec13 = (0, _typeorm.Column)("varchar"), _dec14 = Reflect.metadata("design:type", String), _dec(_class = (_class2 = class EmpresaWeb {
  constructor() {
    _initializerDefineProperty(this, "empwebcodigo", _descriptor, this);

    _initializerDefineProperty(this, "empcodigo", _descriptor2, this);

    _initializerDefineProperty(this, "empwebnome", _descriptor3, this);

    _initializerDefineProperty(this, "empweblogin", _descriptor4, this);

    _initializerDefineProperty(this, "empwebsenha", _descriptor5, this);

    _initializerDefineProperty(this, "empwebstatus", _descriptor6, this);
  }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "empwebcodigo", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "empcodigo", [_dec4, _dec5, _dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "empwebnome", [_dec7, _dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "empweblogin", [_dec9, _dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "empwebsenha", [_dec11, _dec12], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "empwebstatus", [_dec13, _dec14], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);
exports.EmpresaWeb = EmpresaWeb;