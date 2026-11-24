import { mkdirSync, writeFileSync } from "node:fs";

// Entry line split at a different word boundary ("communicate | mostly");
// parts are joined in order so the written text is byte-identical.
const PARTS = [
  "Earth's locals invented 7,000 languages and still communicate ",
  "mostly by sending each other pictures of cats. Five stars, would abduct again.",
];

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PARTS.join(""), "utf8");
