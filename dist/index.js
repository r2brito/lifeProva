"use strict";

require("reflect-metadata");

var _express = _interopRequireDefault(require("express"));

var _typeorm = require("typeorm");

var _cors = _interopRequireDefault(require("cors"));

var SessionController = _interopRequireWildcard(require("./controllers/SessionController"));

var EmpresaController = _interopRequireWildcard(require("./controllers/EmpresaController"));

var EmpresaWebController = _interopRequireWildcard(require("./controllers/EmpresaWebController"));

var RastreamentoController = _interopRequireWildcard(require("./controllers/RastreamentoController"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

const PORT = 3000;

function startup() {
  return _startup.apply(this, arguments);
}

function _startup() {
  _startup = _asyncToGenerator(function* () {
    yield (0, _typeorm.createConnection)();
    const app = (0, _express.default)();
    app.use(_express.default.json());
    app.use((0, _cors.default)()); // login

    app.post("/login", SessionController.handle); // Empresa

    app.post("/empresa", EmpresaController.save); // EmpresaWeb

    app.post("/empresaweb/:empcodigo", EmpresaWebController.save); // EmpresaWeb

    app.post("/rastreamento/", RastreamentoController.save);
    app.get("/rastreamento", RastreamentoController.getAll);
    app.listen(PORT, () => {
      console.log("App running on port " + 3000);
    });
  });
  return _startup.apply(this, arguments);
}

startup();