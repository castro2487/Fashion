export function stringToCamelCase(str: string) {
  if (!str) {
    return '';
  }
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, function (match, character) {
      return character.toUpperCase();
    });
}
