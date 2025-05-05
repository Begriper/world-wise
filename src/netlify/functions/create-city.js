import { readFileSync, writeFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";
import crypto from "crypto";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const JSON_FILE = path.resolve(__dirname, "../../public/data/cities.json");

export default async function handler(event) {
  if (event.httpMethod !== "POST")
    return { statusCode: 405, body: "Only POST allowed" };

  const newCity = JSON.parse(event.body);
  newCity.id = crypto.randomUUID();

  const db = JSON.parse(readFileSync(JSON_FILE));
  db.cities.push(newCity);
  writeFileSync(JSON_FILE, JSON.stringify(db, null, 2));

  return {
    statusCode: 201,
    body: JSON.stringify(newCity),
  };
}
