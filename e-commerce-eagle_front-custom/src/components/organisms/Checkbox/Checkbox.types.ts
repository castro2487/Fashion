import { ErrorList } from '@lib/ui/useInputError';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

declare module '@amq' {
  type CheckboxPrimitiveProps = React.ComponentProps<
    typeof CheckboxPrimitive.Root
  >;

  type CheckboxProps = CheckboxPrimitiveProps & {
    label: React.ReactNode;
    id: string;
    errors?: ErrorList;
    accentColor?: `#${string}`;
  };
}
