import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { DynamicComponentsMap } from './DynamicComponentsMap';

describe('DynamicComponentsMap Component', () => {
  it('returns dynamically loaded ExampleComponent from the components dictionary', async () => {
    const componentId = 'ExampleComponent';
    const dynamicComponent = DynamicComponentsMap[componentId];
    const jsxDefinitionModule = await dynamicComponent.preload();
    expect(jsxDefinitionModule.default.name).toBe(componentId);
  });

  it('returns dynamically loaded AccordionItem from the components dictionary', async () => {
    const componentId = 'accordionComponent';
    const dynamicComponent = DynamicComponentsMap[componentId];
    const jsxDefinitionModule = await dynamicComponent.preload();
    expect(jsxDefinitionModule.default.name).toBe('AccordionItem');
  });

  it('returns dynamically loaded ContentfulRichText from the components dictionary', async () => {
    const componentId = 'richText';
    const dynamicComponent = DynamicComponentsMap[componentId];
    const jsxDefinitionModule = await dynamicComponent.preload();
    expect(jsxDefinitionModule.default.name).toBe('RichText');
  });
});
