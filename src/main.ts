import express from "express";
import package_json from "../package.json";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";

const port = 49160;
const publicFiles = path.join(__dirname, "..", "public");

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const app = express()
  .use(
    cors({
      origin: "*",
    })
  )
  .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use(express.static(publicFiles))
  .get("/", async (req, res) => {})
  .use((_req, res) =>
    res.status(404).json({ success: false, error: "Route not found" })
  )
  .listen(port, () => {
    console.log(
      `${capitalizeFirstLetter(package_json.name)} listening at ${port}`
    );
    console.log(`Serving files from ${publicFiles}`);
  });
