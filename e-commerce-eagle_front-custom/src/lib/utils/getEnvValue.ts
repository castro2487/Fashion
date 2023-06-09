export function getEnvValue(
  variableName: string,
  fallbackValue?: string,
  errorMessage?: string
): string {
  const envVariable = process.env[variableName] as string;

  if (!envVariable && !fallbackValue) {
    throw new Error(
      errorMessage ||
        `Environment variable value for ${variableName} is not defined.`
    );
  }

  return envVariable || fallbackValue || '';
}
