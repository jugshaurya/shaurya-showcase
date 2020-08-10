import React from 'react';
import { SectionTitle, Icon, FloatingImage } from './shared';
import SwigglyBG from '../../static/patterns/bg-swiggly.svg';

const Title = ({ IconComp, iconDesc, w, h }) => {
  return (
    <SectionTitle jc="flex-start" style={{ position: 'relative' }}>
      <Icon src={IconComp} alt={iconDesc} w={w} h={h} />
      <h2>{iconDesc}</h2>
      <FloatingImage
        t={'0px'}
        l={'-40px'}
        w={'120px'}
        h={'120px'}
        src={SwigglyBG}
        alt={'swiggly bg'}
      />
    </SectionTitle>
  );
};

export default Title;
