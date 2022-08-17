import path from "path";
import { cwd } from "process";
import fs from "fs";

type DB = {
  [key: string]: { email: string; name: string; message: string }[];
};

const dbName = process.env.db_name || "";

const pathToDB = path.join(cwd(), "db", dbName);
const stringdb = fs.readFileSync(pathToDB, "utf-8");
const db: DB = JSON.parse(stringdb);

export const getDB = () => db;

export const saveToDB = (db: DB) =>
  fs.writeFileSync(pathToDB, JSON.stringify(db));
