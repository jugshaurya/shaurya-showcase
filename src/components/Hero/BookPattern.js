import React from 'react';
import styled from 'styled-components';
import * as Styles from '../css-in-js/theme';
import { socialLinks } from '../../resources/socialLinks';

const FloatingBook = styled.svg`
  position: absolute;
  top: 100px;
  left: -400px;
  width: 45vw;
  height: auto;
  z-index: 1;
  @media ${Styles.device.laptopL} {
    left: -300px;
  }
  @media ${Styles.device.laptop} {
    width: 50vw;
    left: -250px;
    top: 120px;
  }
  @media ${Styles.device.ipad} {
    top: 100px;
    width: 65vw;
    left: -300px;
  }
  @media ${Styles.device.mobileL} {
    width: 100vw;
    left: -270px;
  }
  @media ${Styles.device.mobileM} {
    top: 0;
    width: 140vw;
    left: -500px;
    transform: rotate(55deg);
  }
  @media ${Styles.device.mobileS} {
    top: -60px;
    width: 140vw;
    left: -490px;
    transform: rotate(55deg);
  }
`;

// TODO: Optimize the svgs
const BookPattern = () => {
  const [
    { link: githubLink },
    { link: linkedinLink },
    { link: twitterLink },
  ] = socialLinks;
  return (
    <FloatingBook
      id="book-pattern"
      width="869"
      height="990"
      viewBox="0 0 869 990"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <g id="box" filter="url(#filter0_d)">
          <rect
            width="829.322"
            height="636.287"
            rx="19.3622"
            transform="matrix(0.320162 -0.947658 -0.94687 -0.320745 602.596 990)"
            fill="url(#paint0_linear)"
          />
        </g>
        <g id="box_2" filter="url(#filter1_d)">
          <rect
            width="829.322"
            height="636.287"
            rx="19.3622"
            transform="matrix(0.139212 -0.990545 -0.989878 -0.13993 671.798 950.429)"
            fill="#E9FA66"
          />
        </g>
        <g id="box_3" filter="url(#filter2_d)">
          <rect
            width="829.322"
            height="651.974"
            rx="19.3622"
            transform="matrix(0 -1.00028 -0.999719 -0.000804245 707.722 876.601)"
            fill="black"
          />
        </g>
        <a
          id="github"
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <g id="githubgroup">
            <ellipse
              id="Ellipse 23"
              cx="644.39"
              cy="88.8848"
              rx="25.4219"
              ry="25.4219"
              fill="#1F1D1D"
            />
            <path
              id="Vector"
              d="M627.49 88.8518C627.511 96.5557 632.616 103.07 639.526 105.376C640.374 105.498 640.736 105.018 640.735 104.536C640.734 104.175 640.731 102.971 640.727 101.527C635.885 102.597 634.786 99.2237 634.786 99.2237C633.932 97.1751 632.841 96.6906 632.841 96.6906C631.264 95.603 632.959 95.6076 632.959 95.6076C634.655 95.7325 635.629 97.4204 635.629 97.4204C637.211 100.073 639.752 99.3576 640.72 98.8787C640.838 97.7957 641.32 96.9544 641.803 96.5946C637.926 96.1025 633.804 94.6469 633.786 88.0263C633.781 86.1003 634.503 84.5374 635.59 83.3367C635.468 82.8548 634.857 81.0476 635.819 78.6427C635.819 78.6427 637.271 78.1652 640.669 80.4615C642.121 80.1043 643.574 79.8675 645.028 79.8715C646.481 79.8754 648.056 80.1205 649.39 80.4852C652.775 78.2073 654.229 78.6927 654.229 78.6927C655.205 81.1029 654.604 82.9068 654.363 83.2673C655.456 84.474 656.187 86.0408 656.193 87.9668C656.211 94.5874 652.097 96.141 648.222 96.4916C648.829 96.9748 649.438 98.0598 649.442 99.745C649.449 102.032 649.454 103.958 649.456 104.56C649.457 105.041 649.822 105.524 650.669 105.406C657.688 103.138 662.636 96.6512 662.614 88.9472C662.588 79.3173 654.694 71.592 645.005 71.5657C635.315 71.419 627.464 79.2219 627.49 88.8518Z"
              fill="white"
            />
          </g>
        </a>
        <a
          id="linkedin"
          href={linkedinLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <g id="linkedingroup">
            <ellipse
              id="Ellipse 23_2"
              cx="819.801"
              cy="226.163"
              rx="25.4219"
              ry="25.4219"
              fill="black"
            />
            <g id="icons8-twitter 1">
              <path
                id="Vector_2"
                d="M833.571 216.584C832.598 217.119 831.551 217.475 830.447 217.644C831.57 216.817 832.433 215.498 832.839 213.939C831.788 214.703 830.625 215.264 829.387 215.56C828.398 214.26 826.988 213.453 825.426 213.453C822.425 213.453 819.993 216.446 819.993 220.137C819.993 220.659 820.042 221.168 820.134 221.662C815.62 221.381 811.616 218.716 808.937 214.672C808.467 215.661 808.202 216.817 808.202 218.039C808.202 220.359 809.159 222.402 810.618 223.605C809.727 223.572 808.889 223.264 808.155 222.77C808.155 222.79 808.155 222.82 808.155 222.849C808.155 226.091 810.028 228.791 812.511 229.406C812.057 229.56 811.578 229.646 811.083 229.646C810.733 229.646 810.391 229.597 810.059 229.523C810.751 232.172 812.756 234.11 815.133 234.167C813.273 235.957 810.931 237.029 808.385 237.029C807.945 237.029 807.515 236.998 807.09 236.934C809.497 238.825 812.353 239.934 815.419 239.934C825.411 239.934 830.878 229.747 830.878 220.909C830.878 220.62 830.87 220.332 830.859 220.046C831.926 219.111 832.845 217.932 833.571 216.584Z"
                fill="url(#paint1_linear)"
              />
            </g>
          </g>
        </a>
        <a
          id="twitter"
          href={twitterLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <g id="twittergroup">
            <ellipse
              id="Ellipse 23_3"
              cx="744.806"
              cy="160.066"
              rx="25.4219"
              ry="25.4219"
              fill="black"
            />
            <g id="linkedin" clipPath="url(#clip0)">
              <g id="Group">
                <path
                  id="Vector_3"
                  d="M757.544 170.649L757.544 170.648H757.55L757.55 161.756C757.55 157.406 756.614 154.055 751.529 154.055C749.084 154.055 747.443 155.397 746.774 156.669H746.703L746.703 154.461H741.881L741.881 170.648H746.902L746.902 162.633C746.902 160.523 747.302 158.482 749.915 158.482C752.49 158.482 752.529 160.89 752.529 162.768L752.529 170.649H757.544Z"
                  fill="#0077B5"
                />
                <path
                  id="Vector_4"
                  d="M733.706 154.464H738.733L738.733 170.651H733.706L733.706 154.464Z"
                  fill="#0077B5"
                />
                <path
                  id="Vector_5"
                  d="M736.217 146.406C734.61 146.406 733.306 147.71 733.306 149.317C733.306 150.924 734.61 152.256 736.217 152.256C737.825 152.256 739.129 150.924 739.129 149.317C739.128 147.71 737.824 146.406 736.217 146.406V146.406Z"
                  fill="#0077B5"
                />
              </g>
            </g>
          </g>
        </a>
      </g>
      <defs>
        <filter
          id="filter0_d"
          x="2.70719"
          y="5.18262"
          width="862.814"
          height="984.798"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="2.58163" />
          <feGaussianBlur stdDeviation="1.29082" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_d"
          x="41.8735"
          y="42.4287"
          width="745.453"
          height="910.648"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="2.58163" />
          <feGaussianBlur stdDeviation="1.29082" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_d"
          x="53.3501"
          y="46.5371"
          width="656.954"
          height="835.211"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="2.58163" />
          <feGaussianBlur stdDeviation="1.29082" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear"
          x1="126.681"
          y1="24.5532"
          x2="695.991"
          y2="622.223"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2AA4F4" />
          <stop offset="1" stopColor="#007AD9" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="811.135"
          y1="214.474"
          x2="834.312"
          y2="233.143"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2AA4F4" />
          <stop offset="1" stopColor="#007AD9" />
        </linearGradient>
        <clipPath id="clip0">
          <rect
            width="24.2449"
            height="24.2449"
            fill="white"
            transform="translate(733.306 146.406)"
          />
        </clipPath>
      </defs>
    </FloatingBook>
  );
};
export default BookPattern;
