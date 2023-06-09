import { PageUtils } from '@factories/Page/Page.utils';

export class DynamicComponent implements IDynamicComponent {
  componentId: string;
  componentType: string;
  data?: TCommonObject;

  constructor(component: TCommonObject) {
    this.componentType = PageUtils._getComponentType(component);
    this.componentId = PageUtils._getComponentId(component);
    this.data = PageUtils._getComponentData(component);
  }
}
