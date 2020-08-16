import React from 'react';
import { Link } from 'gatsby';

import Title from '../styles-in-js/Title';
import styled from 'styled-components';
import * as Styles from '../styles-in-js/theme';
import {
  Container,
  Icon,
  FloatingImage,
  Flex,
  Grid,
} from '../styles-in-js/shared';

import GithubBackground from '../../static/patterns/bg-github.svg';
import ExtraIcon from '../../static/icons/extra.svg';
import BackIcon from '../../static/icons/back.svg';

// import '../../styles/extra.scss';

const creditsLink1 = [
  {
    companyLink: 'https://designcode.io/ui-design-for-developers/',
    company: 'Design+Code',
    whatFor: ' (for Figma Guides)',
  },
  {
    companyLink: 'https://www.flaticon.com/',
    company: 'Flaticon',
    whatFor: ' (for Icons)',
  },
  {
    companyLink: 'https://www.manypixels.co/',
    company: 'Manypixels',
    whatFor: ' (for Illustrations)',
  },
  {
    companyLink: 'https://undraw.co/',
    company: 'Undraw',
    whatFor: ' (for Illustrations)',
  },
  {
    companyLink: 'https://wakatime.com/',
    company: 'Wakatime',
    whatFor: ' (for Language Chart)',
  },
  {
    companyLink: 'https://www.fontsquirrel.com/',
    company: 'Font Squirrel',
    whatFor: ' (for Font Files)',
  },
  {
    companyLink: 'https://anuraghazra.github.io/',
    company: 'Anurag Hazra',
    whatFor: ' (for Motivation + Color-cards + Github Stats Idea)',
  },
];

const creditsLink2 = [
  {
    companyLink: 'https://www.gatsbyjs.org/',
    company: 'Gatsby',
  },
  {
    companyLink: 'https://reactjs.org/',
    company: 'React',
  },
  {
    companyLink: 'https://styled-components.com/',
    company: 'Styled Components',
  },
  {
    companyLink: 'https://sass-lang.com/',
    company: 'Sass',
  },
  {
    companyLink: 'https://www.figma.com/',
    company: 'Figma',
  },
  {
    companyLink: 'https://github.com/jsvine/notebookjs/',
    company: 'Notebookjs',
    whatFor: ' (for transforming raw notebookdata to HTML)',
  },
];

const creditsLink3 = [
  { whatFor: 'SEO Friendly' },
  { whatFor: 'Fully Accessible' },
  { whatFor: 'Works Offline (PWA)' },
  { whatFor: 'Render Jupyter-notebooks as Blogs' },
  { whatFor: 'Render Medium Published Blogs' },
];

const creditsLink4 = [
  {
    companyLink: 'https://github.com/jugshaurya/showcase/',
    company: 'Github Source Code',
  },
  {
    companyLink: 'https://github.com/jugshaurya/showcase/issues',
    company: 'Open Issues',
  },
  {
    companyLink: 'https://github.com/jugshaurya/showcase/projects/1/',
    company: 'Project',
    whatFor: ' (Kanban Style)',
  },
];

const CreditSection = ({ title, credits }) => {
  return (
    <div>
      <CreditTitle>{title}</CreditTitle>
      <CreditList>
        {credits.map((credit) => (
          <CreditListItem>
            {credit.company && (
              <CreditListItemLink
                href={credit.companyLink}
                rel="noopener noreferrer"
              >
                {credit.company}
              </CreditListItemLink>
            )}
            {credit.whatFor && (
              <CreditListItemText>{credit.whatFor}</CreditListItemText>
            )}
          </CreditListItem>
        ))}
      </CreditList>
    </div>
  );
};

// Thank you:- https://www.30secondsofcode.org/blog/s/copy-text-to-clipboard-with-javascript
const copyToClipboard = (color) => {
  console.log('Copied', color);
  const el = document.createElement('textarea');
  el.value = color;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
};
const Extra = () => {
  return (
    <section id="extra" style={{ position: 'relative' }}>
      <FloatingImage
        src={GithubBackground}
        alt={'Wallpaper'}
        b={[
          '-500px',
          '-480px',
          '-300px',
          '-220px',
          '-180px',
          '-180px',
          '-180px',
        ]}
        l={[0, 0, 0, 0, 0, 0, 0]}
        w={['100%', '100%', '100%', '100%', '100%', '100%', '100%']}
        zi={-3}
      />
      <Container className="container">
        <Title
          IconComp={ExtraIcon}
          iconDesc={'Credits/Thank you + Extras'}
          w={'36px'}
          h={'36px'}
        />

        {/* <section className="section">
          <div className="back">
            <a href="#top">
              Back to Top <img src={BackIcon} alt="back button" />
            </a>
          </div>
        </section> */}

        <BackToTop>
          <BackLink to="#top">
            Back to Top
            <Icon
              src={BackIcon}
              alt={'back Icon'}
              w="24px"
              h="24px"
              m={'0 0 0 10px'}
            />
          </BackLink>
        </BackToTop>

        <WebsiteColors>
          <WebsiteColor
            color={Styles.black}
            onClick={() => copyToClipboard(Styles.black)}
          />
          <WebsiteColor
            color={Styles.green}
            onClick={() => copyToClipboard(Styles.green)}
          />
          <WebsiteColor
            color={Styles.twitterBlue}
            onClick={() => copyToClipboard(Styles.twitterBlue)}
          />
          <WebsiteColor
            color={Styles.darkgreen}
            onClick={() => copyToClipboard(Styles.darkgreen)}
          />
          <WebsiteColor
            color={Styles.orange}
            onClick={() => copyToClipboard(Styles.orange)}
          />
          <WebsiteColor
            color={Styles.yellow}
            onClick={() => copyToClipboard(Styles.yellow)}
          />
          <WebsiteColor
            color={Styles.black}
            onClick={() => copyToClipboard(Styles.black)}
          />
          <WebsiteColor
            color={Styles.pink}
            onClick={() => copyToClipboard(Styles.pink)}
          />
          <WebsiteColor
            color={Styles.red}
            onClick={() => copyToClipboard(Styles.red)}
          />
          <WebsiteColor
            color={Styles.blue}
            onClick={() => copyToClipboard(Styles.blue)}
          />
          <WebsiteColor
            color={Styles.purple}
            onClick={() => copyToClipboard(Styles.purple)}
          />
          <WebsiteColor
            color={Styles.mapPurple}
            onClick={() => copyToClipboard(Styles.mapPurple)}
          />
          <WebsiteColor
            color={Styles.g_blueGreen}
            onClick={() => copyToClipboard(Styles.g_blueGreen)}
          />
          <WebsiteColor
            color={Styles.g_pinkBluePurple}
            onClick={() => copyToClipboard(Styles.g_pinkBluePurple)}
          />
          <WebsiteColor
            color={Styles.g_blackOrange}
            onClick={() => copyToClipboard(Styles.g_blackOrange)}
          />
          <WebsiteColor
            color={Styles.g_bluePurple}
            onClick={() => copyToClipboard(Styles.g_bluePurple)}
          />
          <WebsiteColor
            color={Styles.g_greenBluePink}
            onClick={() => copyToClipboard(Styles.g_greenBluePink)}
          />
          <WebsiteColor
            color={Styles.g_twitter}
            onClick={() => copyToClipboard(Styles.g_twitter)}
          />
        </WebsiteColors>

        <Credits gtc="repeat(2, 1fr)" gap="100px" rgap="60px">
          <CreditSection title="Attributions" credits={creditsLink1} />
          <CreditSection
            title="Tech Used for this Creation"
            credits={creditsLink2}
          />
          <CreditSection title="Site Features" credits={creditsLink3} />
          <CreditSection title="Wanna Contribute?" credits={creditsLink4} />
        </Credits>
      </Container>
    </section>
  );
};

export default Extra;

const BackToTop = styled(Flex)`
  margin-top: 30px;
  text-decoration: underline;
`;

const BackLink = styled(Link)`
  color: ${Styles.green};
  font-size: ${Styles.text_small};
  text-decoration: none;
`;

const WebsiteColors = styled(Flex)`
  border: 3px dotted ${Styles.gray};
  padding: 20px;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 160px;
  width: fit-content;
  border-radius: 22px;
  background: ${Styles.codeblocks_output_border};
`;

const WebsiteColor = styled.div`
  position: relative;
  cursor: pointer;
  width: 44px;
  height: 44px;
  border-radius: 5px;
  transform: rotate(45deg);
  margin: -2px;
  background: ${(props) => props.color};

  &:hover {
    transform: scale(1.1);
    transition: transform 0.2s;
  }

  &:active {
    border: 10px double ${Styles.codeblocks_output_border};
  }

  &:before {
    border: 1px solid ${Styles.gray};
    pointer-events: none;
    position: absolute;
    text-align: center;
    content: 'Copy it';
    /* opacity: 0; */
    font-size: 12px;
    width: 100px;
    border-radius: 10px;
    padding: 10px;
    left: 50%;
    bottom: -100%;
    background: ${Styles.background};
    transition: transform 1s;
    transform: rotate(45deg);
  }
`;

const Credits = styled(Grid)``;

const CreditTitle = styled.div`
  padding: 5px 10px;
  border-radius: 10px;
  color: ${Styles.white};
  background: ${Styles.background};
  font-family: ${Styles.font_gloriahallelujah};
  font-weight: bold;
`;

const CreditList = styled.div`
  list-style-type: none;
  padding: 20px;
  margin: 20px;
  color: ${Styles.gray};
`;

const CreditListItem = styled.div`
  line-height: 1.2em;
  &::before {
    border: 10px double ${Styles.twitterBlue};
    content: '';
    display: inline-block;
    height: 32px;
    width: 32px;
    margin-right: 15px;
    transform: rotateZ(-20deg) rotateX(-10deg);
  }
`;

const CreditListItemLink = styled.a`
  text-decoration: none;
  padding-bottom: 10px;
  font-size: ${Styles.text_small};
  background: ${Styles.g_blueGreen};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const CreditListItemText = styled.sub`
  font-size: ${Styles.text_xxxsmall};
  font-family: ${Styles.font_normal};
  letter-spacing: -1px;
`;