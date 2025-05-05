import { readFileSync, writeFileSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const JSON_FILE = path.resolve(__dirname, "../../public/data/cities.json");

export default async function handler(event) {
  if (event.httpMethod !== "DELETE")
    return { statusCode: 405, body: "Only DELETE allowed" };

  const id = new URLSearchParams(event.rawQuery).get("id");
  const db = JSON.parse(readFileSync(JSON_FILE));
  db.cities = db.cities.filter((c) => c.id !== id);
  writeFileSync(JSON_FILE, JSON.stringify(db, null, 2));

  return { statusCode: 204 };
}
