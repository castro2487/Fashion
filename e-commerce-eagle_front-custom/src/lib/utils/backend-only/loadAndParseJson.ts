import { readFileSync } from 'fs';

export const ERROR_LOADER_JSON_PARSE =
  'An error occurs when parsing JSON located:';

export function loadAndParseJson(path: string): TCommonObject {
  const file = readFileSync(path, { encoding: 'utf8', flag: 'r' });
  try {
    return JSON.parse(file);
  } catch (e) {
    throw new Error(`${ERROR_LOADER_JSON_PARSE}: ${path}`);
  }
}
