import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Footer } from '@organisms/Footer';
import footerMock, {
  exclusiveServices,
} from '@organisms/Footer/__mock__/footerMock';

export default {
  title: 'Organisms/Footer/ResponsiveFooter',
  component: Footer,
  args: footerMock,
  parameters: {
    layout: 'fullscreen',
    docs: { source: { type: 'dynamic' } },
  },
} as unknown as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => (
  <Footer
    {...args}
    newsletterContent={
      <div style={{ padding: 'var(---paddingValue)' }}>
        This is the newsletter content
      </div>
    }
    countryContent={
      <div style={{ padding: 'var(---paddingValue)' }}>Country content</div>
    }
    languageContent={
      <div style={{ padding: 'var(---paddingValue)' }}>Language content</div>
    }
  />
);

export const Default = Template.bind({});

export const LongLegal = Template.bind({});
LongLegal.args = {
  copyrightLong:
    '이하 “웹사이트“)에 오신 것을 환영합니다.\n본 웹사이트는 잉글랜드와 웨일즈의 법률에 따라 설립된 Autumnpaper Limited가 소유하고 운영하는 웹사이트입니다. 당사의 등록 주소는 5th Floor Rear Suite, Oakfield House 35 Perrymount Road, Haywards Heath, West Sussex, RH16 3BW, United Kingdom이며, 회사 고유 등록 번호는 0409926입니다.\n본 웹사이트의 출간 책임자는 Emmanuel Gintzburger입니다.\n본 웹사이트는 Salesforce.com에 의해 호스팅되고 있으며, 호스팅 사의 정보는 다음과 같습니다: EMEA Private Limited Company (Ltd) (Village 9, Floor 26 Salesforce Tower; 110 Bishopsgate, London, UK EC2N 4AY – +44(0)203 1477600).\n다음의 수단을 통해 저희에게 연락하실 수 있습니다:\n- 전화 +82 261052226\n- 이메일 clientservice.kr@alexandermcqueen.com',
};

export const WithServices = Template.bind({});
WithServices.args = {
  exclusiveServices,
};
