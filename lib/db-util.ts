// import path from "path";
// import { cwd } from "process";
// import fs from "fs";

// type DB = {
//   [key: string]: { email: string; name: string; message: string }[];
// };

// const dbName = process.env.db_name || "";

// const pathToDB = path.join(cwd(), "db", dbName);
// const stringdb = fs.readFileSync(pathToDB, "utf-8");
// const db: DB = JSON.parse(stringdb);
const db: { [key: string]: any[] } = { contacts: [] };

export const getData = (query: string) => db[query];

export const saveData = (query: string, data: any[]) => {
  db[query] = data;
};
//   fs.writeFileSync(pathToDB, JSON.stringify(db));
