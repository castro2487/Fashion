export function parseJson(
  data: string,
  defaultValue: TCommonObject = {}
): TCommonObject {
  try {
    return JSON.parse(data);
  } catch (error) {
    return defaultValue;
  }
}
