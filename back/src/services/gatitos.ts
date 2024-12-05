import { GatitoType } from "../types/gatito.js";
// import db from "./db.js";

let Gatitos: GatitoType[] = [];

// export const findAll = async () => {
//   const res = await db.query("SELECT * FROM public.gatitos");
//   return res.rows;
// };

// export const create = async (nuevoGatito: GatitoType) => {
//   const res = await db.query(
//     `
//     INSERT INTO public.gatitos (raza,nombre,fechaNacimiento)
//     VALUES($1, $2, $3) RETURNING *;
//     `,
//     [nuevoGatito.raza, nuevoGatito.nombre, nuevoGatito.fechaNacimiento]
//   );
//   return res.rows[0];
// };

export const findAll = async () => {
  return Gatitos;
};

export const create = async (nuevoGatito: GatitoType) => {
  Gatitos.push(nuevoGatito);
  return nuevoGatito;
};
