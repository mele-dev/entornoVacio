import { Type } from "@sinclair/typebox";
import { FastifyPluginAsync } from "fastify";
import { GatitoSchema, GatitoType } from "../../types/gatito.js";
import * as gatitosService from "../../services/gatitos.js";

const gatitosRoutes: FastifyPluginAsync = async (
  fastify,
  opts
): Promise<void> => {
  fastify.get("/", {
    schema: {
      tags: ["gatitos"],
      summary: "Obtener todos los gatitos",
      response: {
        200: {
          description: "Listado de gatitos.",
          content: {
            "application/json": {
              schema: Type.Array(GatitoSchema),
            },
          },
        },
      },
    },
    onRequest: [],
    // onRequest: [fastify.verifyJWT],
    handler: async function (request, reply) {
      return gatitosService.findAll();
    },
  });

  fastify.post("/", {
    schema: {
      body: GatitoSchema,
      tags: ["gatitos"],
      summary: "Crear un gatito.",
      description: "Crear un gatito.",
      response: {
        201: {
          description: "Gatito creado.",
          content: {
            "application/json": {
              schema: GatitoSchema,
            },
          },
        },
      },
    },
    onRequest: [],
    handler: async function (request, reply) {
      const nuevoGatito = request.body as GatitoType;
      reply.code(201);
      return gatitosService.create(nuevoGatito);
    },
  });
};

export default gatitosRoutes;
