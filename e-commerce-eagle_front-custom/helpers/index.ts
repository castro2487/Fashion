export const parseJSON = (jsonString: string, errMessage: string) => {
  if (jsonString) {
    try {
      return JSON.parse(jsonString);
    } catch (e) {
      throw new Error(errMessage);
    }
  }
};

export const loadLocaleConfig = (
  path = __dirname + './../src/config/rawLocaleConf.json'
) => {
  return import(path);
};
