import { Static, Type } from "@sinclair/typebox";

export const GatitoSchema = Type.Object({
  raza: Type.String(),
  nombre: Type.String(),
  fechaNacimiento: Type.String(),
});

export type GatitoType = Static<typeof GatitoSchema>;
