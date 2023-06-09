import { DynamicComponent } from '@models/DynamicComponent/DynamicComponent.model';

export class Region implements IRegion {
  components: IDynamicComponent[];
  subRegions: IRegion[];

  constructor(data: TCommonObject[]) {
    this.components = data.map((component) => {
      //@todo: instantiate proper dynamic component model or use factory in dynamic component for the data?
      return new DynamicComponent(component);
    });
    //@todo: currently region from contentful is just an array of components
    this.subRegions = [];
  }
}
