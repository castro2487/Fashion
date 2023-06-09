import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { styled } from '@stitches-definitions';

import {
  ActionSheet,
  ActionSheetContent,
  ActionSheetTrigger,
} from '@molecules/ActionSheet';
import { Text } from '@atoms/Text';
import { Button } from '@atoms/Button';

const StyledContainer = styled('div', {
  padding: '0 $$paddingValue',
  paddingTop: '$2xl',
});

interface ContentTypes {
  children?: any;
}

const Content = ({ children }: ContentTypes) => (
  <StyledContainer>
    <Text as="p" type="body">
      Non velit enim voluptate cupidatat magna eu commodo dolor magna
      adipisicing ex dolore. Ad pariatur nulla ex tempor magna deserunt aute
      elit officia. Mollit do dolor cupidatat veniam nisi ex tempor amet. Nisi
      aliqua laborum sunt voluptate eiusmod laboris incididunt. Exercitation
      dolor aliquip ipsum dolor consectetur magna in aliquip. Ipsum ullamco quis
      irure in aute. Laboris magna esse velit deserunt laborum ut sit amet amet
      quis elit et. Cillum labore aliquip ut sint officia cupidatat
      reprehenderit excepteur nisi ex id labore anim. Aute elit in do labore
      commodo fugiat fugiat sit ex consectetur eiusmod aliquip. Ex exercitation
      nulla sit minim adipisicing aute nulla. Exercitation non laborum ullamco
      ad cupidatat Lorem cillum anim quis labore do nulla. Ipsum ad elit labore
      reprehenderit sit exercitation voluptate occaecat reprehenderit cupidatat
      adipisicing. Et ipsum est elit reprehenderit elit ad esse elit aute
      adipisicing occaecat laborum commodo nulla. Exercitation incididunt
      proident occaecat duis esse consequat Lorem irure excepteur do deserunt
      duis. Exercitation dolor esse ea veniam sit exercitation culpa ut cillum
      ipsum cillum ut occaecat. Est dolor excepteur et excepteur cillum.
      Cupidatat culpa sit elit aliqua aliquip mollit cillum officia consectetur
      dolore. Ipsum duis fugiat eiusmod do qui aute. Est consectetur nulla
      adipisicing consectetur ad eiusmod mollit dolore do pariatur non. Id duis
      deserunt enim magna nisi exercitation in minim cillum. Incididunt elit
      enim magna ipsum non eiusmod cupidatat Lorem dolor laboris adipisicing
      occaecat ut. Sit pariatur fugiat do amet aliqua occaecat enim velit. Quis
      ad incididunt elit velit. Incididunt tempor commodo ullamco veniam elit
      minim enim aute adipisicing. Minim deserunt sunt quis excepteur ex amet
      adipisicing sit deserunt enim. Nisi amet enim minim magna ullamco eu aute
      nulla esse consequat esse cupidatat adipisicing labore. Aliqua ad do sit
      adipisicing sit ut aliquip. Aute nisi dolore nulla fugiat dolore ipsum
      nisi. Duis magna aute commodo culpa qui velit. Ea sit deserunt velit sunt
      aliquip nisi elit et. Esse et dolore ad aute incididunt velit exercitation
      velit duis culpa. Laborum anim do eiusmod ullamco enim officia mollit
      officia nulla ullamco cupidatat. Ad ex ea ea adipisicing laboris. Officia
      do officia est ea ut qui laborum enim ipsum aliqua est. Mollit ipsum
      aliqua excepteur non. Quis commodo do consectetur aliquip do veniam. Esse
      laborum dolore Lorem aliquip. Velit dolore sint culpa sint. Lorem fugiat
      cupidatat anim id commodo ut occaecat proident aute cillum esse. Qui et
      mollit ea exercitation mollit dolor ipsum culpa duis nostrud dolor dolore
      ad id. Amet amet ad nulla proident enim officia id non do excepteur.
      Adipisicing do dolor non magna. Officia amet consectetur ipsum nisi enim.
      Labore laborum qui proident minim nostrud ad in. Veniam magna sit fugiat
      sunt consequat voluptate proident voluptate sunt eu. Id cupidatat commodo
      nostrud duis minim aliquip eiusmod occaecat sunt amet. Quis labore ad sint
      duis ipsum nostrud laboris mollit non laboris nostrud cillum dolor. Veniam
      officia sint sunt non in proident tempor incididunt ex. Aute eiusmod
      exercitation enim amet consequat consectetur est id. Fugiat laboris id
      esse aute consequat amet laboris. Reprehenderit Lorem id consequat ut ea
      labore amet ea proident tempor do dolor aute fugiat. Culpa sunt consequat
      et excepteur ipsum labore pariatur elit labore. Nostrud culpa minim
      pariatur cillum id commodo ea duis non mollit ipsum sunt excepteur. Amet
      mollit ut nisi Lorem officia laborum commodo id et quis. Voluptate veniam
      anim fugiat anim.
    </Text>
    {children}
  </StyledContainer>
);

export default {
  title: 'Molecules/ActionSheet',
  component: ActionSheet,
  parameters: {
    docs: {
      source: { type: 'dynamic' },
      description: {
        component:
          'You can use the $$paddingValue within Stitches components (or var(---paddingValue) in regular CSS) to set the padding of your children components.',
      },
    },
  },
} as ComponentMeta<typeof ActionSheet>;

export const Default: ComponentStory<typeof ActionSheet> = () => (
  <ActionSheet>
    <ActionSheetTrigger>Open Action Sheet</ActionSheetTrigger>
    <ActionSheetContent title="This is my title">
      <Content />
    </ActionSheetContent>
  </ActionSheet>
);

export const Controlled: ComponentStory<typeof ActionSheet> = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <ActionSheet open={open} onOpenChange={setOpen}>
      <ActionSheetTrigger>Open Action Sheet</ActionSheetTrigger>
      <ActionSheetContent title="This is my title">
        <Content>
          <Button
            css={{ marginTop: '$l' }}
            onClick={() => {
              setOpen(false);
            }}
          >
            close action sheet
          </Button>
        </Content>
      </ActionSheetContent>
    </ActionSheet>
  );
};

export const CustomTrigger: ComponentStory<typeof ActionSheet> = () => (
  <ActionSheet>
    <ActionSheetTrigger asChild>
      <Button size="small">Open Action Sheet</Button>
    </ActionSheetTrigger>
    <ActionSheetContent title="This is my title">
      <Content />
    </ActionSheetContent>
  </ActionSheet>
);
