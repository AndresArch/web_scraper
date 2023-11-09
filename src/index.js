import puppeteer from "puppeteer";
import { joshComeau } from "./joshcomeau.js";
import { overreacted } from "./overreacted.js";

const main = async () => {
  joshComeau();
  overreacted();
};

main();
