import { spoofSymbolEnum } from "spoofSymbolEnum";
export function spoofString(inputString) {
  return inputString
    .replace(/&[^;]+;/g, "") // removes &..; constructions from editor
    .split(/(<[^>]+>)/g) // Split by HTML tags, preserving them
    .map((part) => {
      if (part.startsWith("<") && part.endsWith(">")) {
        return part; // Keep content inside < > unchanged
      }
      return part
        .split("")
        .map((char) => spoofSymbolEnum[char] || char)
        .join(""); // Replace characters
    })
    .join("");
}
