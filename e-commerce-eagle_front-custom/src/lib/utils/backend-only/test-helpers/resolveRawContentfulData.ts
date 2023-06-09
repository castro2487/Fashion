import resolveResponse from 'contentful-resolve-response';

// By passing the raw CF API response for the component data, you will receive exact structure as this same component instance on the page response.
export function resolveRawComponentDataToFactory(rawComponentData: any) {
  return resolveResponse(rawComponentData).pop();
}
