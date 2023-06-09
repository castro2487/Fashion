import dynamic from 'next/dynamic';
import { IDynamicComponentsMap } from '@amq';

export const DynamicComponentsMap: IDynamicComponentsMap = {
  //Atoms
  blockQuote: dynamic(() =>
    import('@atoms/Blockquote/Blockquote').then((module) => module.Blockquote)
  ),
  // Molecules
  tileComponent: dynamic(() =>
    import('@molecules/Banner').then((module) => module.Banner)
  ),
  accordionComponent: dynamic(() =>
    import('@molecules/Accordion/AccordionItem').then(
      (module) => module.AccordionItem
    )
  ),
  richText: dynamic(() =>
    import('@components/molecules/RichText/RichText').then(
      (module) => module.RichText
    )
  ),
  //Organisms
  campaignComponent: dynamic(() =>
    import('@organisms/Campaign/Campaign').then((module) => module.Campaign)
  ),
  spotlightComponent: dynamic(() =>
    import('@organisms/Spotlight').then((module) => module.Spotlight)
  ),
  componentGrid: dynamic(() =>
    import('@organisms/Grid').then((module) => module.Grid)
  ),
  //Modules
  header: dynamic(() =>
    import('@modules/header/layouts/DefaultHeader').then(
      (module) => module.DefaultHeader
    )
  ),
  //Example
  ExampleComponent: dynamic(() =>
    import('@molecules/ExampleComponent/ExampleComponent').then(
      (module) => module.ExampleComponent
    )
  ),
};
