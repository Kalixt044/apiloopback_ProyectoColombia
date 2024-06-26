"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PonenciasUsuariosController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PonenciasUsuariosController = class PonenciasUsuariosController {
    constructor(ponenciasRepository) {
        this.ponenciasRepository = ponenciasRepository;
    }
    async getUsuarios(id) {
        return this.ponenciasRepository.resenaFk(id);
    }
};
exports.PonenciasUsuariosController = PonenciasUsuariosController;
tslib_1.__decorate([
    (0, rest_1.get)('/ponencias/{id}/usuarios', {
        responses: {
            '200': {
                description: 'Usuarios belonging to Ponencias',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Usuarios),
                    },
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], PonenciasUsuariosController.prototype, "getUsuarios", null);
exports.PonenciasUsuariosController = PonenciasUsuariosController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.PonenciasRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.PonenciasRepository])
], PonenciasUsuariosController);
//# sourceMappingURL=ponencias-usuarios.controller.js.map