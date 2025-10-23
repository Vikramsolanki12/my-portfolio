import React from 'react';
import { Div } from './HeroBgAnimationStyle';
const primaryColor = "#7B3FEF"; 
const secondaryColor = "#00C9FF"; 

const subtleBgGlowColor = primaryColor;
const subtleBgGlowOpacity = "0.08"; 
const HeroBgAnimation = () => (
  <Div>
    <svg
      className="BgAnimation__svg"
      viewBox="0 0 602 602"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink" 
    >
      {}
      <g opacity="0.15"> {}
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z"
          stroke="url(#paint0_radial)"
          id="path_0"
        />
        <path
          d="M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z"
          stroke="url(#paint1_radial)"
          id="path_1"
        />
        <path
          d="M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z"
          stroke="url(#paint2_radial)"
          id="path_2"
        />
      </g>

      {}
      <ellipse
        cx="295.027"
        cy="193.118"
        transform="translate(-295.027 -193.118)"
        rx="1.07306"
        ry="1.07433"
        fill={primaryColor}
      >
        <animateMotion dur="8s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#path_2" />
        </animateMotion>
        <animate attributeName="opacity" values="0;1;0.8;0" keyTimes="0;0.2;0.6;1" dur="4s" repeatCount="indefinite" />
        <animate attributeName="rx" values="1.073;2.5;1.073" keyTimes="0;0.5;1" dur="4s" repeatCount="indefinite" />
        <animate attributeName="ry" values="1.074;2.5;1.074" keyTimes="0;0.5;1" dur="4s" repeatCount="indefinite" />
      </ellipse>
      {}
      <path
        d="M294.685 193.474L268.932 219.258"
        transform="translate(-294.685 -193.474) rotate(45 294.685 193.474)"
        stroke="url(#paint3_linear)"
        strokeWidth="1.5"
      >
        <animateMotion dur="8s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#path_2" />
        </animateMotion>
      </path>

      {/* Particle 2: Secondary color particle, slightly delayed, with varied size/opacity animation, following path_2 */}
      <ellipse
        cx="295.027"
        cy="193.118"
        transform="translate(-295.027 -193.118)"
        rx="1.07306"
        ry="1.07433"
        fill={secondaryColor}
      >
        <animateMotion dur="7s" begin="1.5s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#path_2" />
        </animateMotion>
        <animate attributeName="opacity" values="0;1;0.7;0" keyTimes="0;0.3;0.7;1" dur="3.5s" begin="1.5s" repeatCount="indefinite" />
        <animate attributeName="rx" values="1.073;2;1.073" keyTimes="0;0.5;1" dur="3.5s" begin="1.5s" repeatCount="indefinite" />
        <animate attributeName="ry" values="1.074;2;1.074" keyTimes="0;0.5;1" dur="3.5s" begin="1.5s" repeatCount="indefinite" />
      </ellipse>
      {}
      <path
        d="M294.685 193.474L268.932 219.258"
        transform="translate(-294.685 -193.474) rotate(45 294.685 193.474)"
        stroke="url(#paint7_linear)"
        strokeWidth="1.5"
      >
        <animateMotion dur="7s" begin="1.5s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#path_2" />
        </animateMotion>
      </path>

      {}
      <ellipse
        cx="476.525"
        cy="363.313"
        rx="1.07433"
        ry="1.07306"
        transform="translate(-476.525 -363.313) rotate(90 476.525 363.313)"
        fill={primaryColor}
      >
        <animateMotion dur="9s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#path_0" />
        </animateMotion>
        <animate attributeName="opacity" values="0;0.9;0.7;0" keyTimes="0;0.2;0.6;1" dur="4.5s" repeatCount="indefinite" />
        <animate attributeName="rx" values="1.074;2.2;1.074" keyTimes="0;0.5;1" dur="4.5s" repeatCount="indefinite" />
        <animate attributeName="ry" values="1.073;2.2;1.073" keyTimes="0;0.5;1" dur="4.5s" repeatCount="indefinite" />
      </ellipse>
      {}
      <path
        d="M476.171 362.952L450.417 337.168"
        transform="translate(-476.525 -363.313) rotate(-45 476.171 362.952)"
        stroke="url(#paint4_linear)"
        strokeWidth="1.5"
      >
        <animateMotion dur="9s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#path_0" />
        </animateMotion>
      </path>

      {}
      <ellipse
        cx="382.164"
        cy="155.029"
        rx="1.07433"
        ry="1.07306"
        transform="translate(-382.164 -155.029) rotate(90 382.164 155.029)"
        fill={secondaryColor}
      >
        <animateMotion dur="10s" begin="2s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#path_0" />
        </animateMotion>
        <animate attributeName="opacity" values="0;1;0.6;0" keyTimes="0;0.3;0.7;1" dur="5s" begin="2s" repeatCount="indefinite" />
        <animate attributeName="rx" values="1.074;2.1;1.074" keyTimes="0;0.5;1" dur="5s" begin="2s" repeatCount="indefinite" />
        <animate attributeName="ry" values="1.073;2.1;1.073" keyTimes="0;0.5;1" dur="5s" begin="2s" repeatCount="indefinite" />
      </ellipse>
      {}
      <path
        d="M381.81 154.669L356.057 128.885"
        transform="translate(-381.81 -154.669) rotate(-45 381.81 154.669)"
        stroke="url(#paint5_linear)"
        strokeWidth="1.5"
      >
        <animateMotion dur="10s" begin="2s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#path_0" />
        </animateMotion>
      </path>

      {}
      <ellipse
        cx="333.324"
        cy="382.691"
        rx="1.07306"
        ry="1.07433"
        transform="translate(-333.324 -382.691) rotate(-180 333.324 382.691)"
        fill={secondaryColor}
      >
        <animateMotion dur="6s" begin="0.5s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#path_1" />
        </animateMotion>
        <animate attributeName="opacity" values="0;1;0.7;0" keyTimes="0;0.2;0.6;1" dur="3s" begin="0.5s" repeatCount="indefinite" />
        <animate attributeName="rx" values="1.073;2.3;1.073" keyTimes="0;0.5;1" dur="3s" begin="0.5s" repeatCount="indefinite" />
        <animate attributeName="ry" values="1.074;2.3;1.074" keyTimes="0;0.5;1" dur="3s" begin="0.5s" repeatCount="indefinite" />
      </ellipse>
      {}
      <path
        d="M333.667 382.335L359.420 356.551"
        transform="scale(-1 1) translate(-333.667 -382.335) rotate(45 333.667 382.335)"
        stroke="url(#paint6_linear)"
        strokeWidth="1.5"
      >
        <animateMotion dur="6s" begin="0.5s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#path_1" />
        </animateMotion>
      </path>

      {}
      <ellipse
        cx="165.524"
        cy="93.9596"
        rx="1.07306"
        ry="1.07433"
        transform="translate(-165.524 -93.9596)"
        fill={primaryColor}
      >
        <animateMotion dur="11s" begin="3s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#path_0" />
        </animateMotion>
        <animate attributeName="opacity" values="0;0.9;0.6;0" keyTimes="0;0.3;0.7;1" dur="5.5s" begin="3s" repeatCount="indefinite" />
        <animate attributeName="rx" values="1.073;2.4;1.073" keyTimes="0;0.5;1" dur="5.5s" begin="3s" repeatCount="indefinite" />
        <animate attributeName="ry" values="1.074;2.4;1.074" keyTimes="0;0.5;1" dur="5.5s" begin="3s" repeatCount="indefinite" />
      </ellipse>
      {}
      <path
        d="M165.182 94.3159L139.429 120.1"
        transform="translate(-165.182 -94.3159) rotate(45 165.182 94.3159)"
        stroke="url(#paint7_linear)"
        strokeWidth="1.5"
      >
        <animateMotion dur="11s" begin="3s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#path_0" />
        </animateMotion>
      </path>

      {}
      <ellipse
        cx="476.525"
        cy="363.313"
        rx="1.07433"
        ry="1.07306"
        transform="translate(-476.525 -363.313) rotate(90 476.525 363.313)"
        fill={secondaryColor}
      >
        <animateMotion dur="12s" begin="4s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#path_0" />
        </animateMotion>
        <animate attributeName="opacity" values="0;1;0.8;0" keyTimes="0;0.2;0.6;1" dur="6s" begin="4s" repeatCount="indefinite" />
        <animate attributeName="rx" values="1.074;2.0;1.074" keyTimes="0;0.5;1" dur="6s" begin="4s" repeatCount="indefinite" />
        <animate attributeName="ry" values="1.073;2.0;1.073" keyTimes="0;0.5;1" dur="6s" begin="4s" repeatCount="indefinite" />
      </ellipse>
      {}
      <path
        d="M476.171 362.952L450.417 337.168"
        transform="translate(-476.525 -363.313) rotate(-45 476.171 362.952)"
        stroke="url(#paint11_linear)"
        strokeWidth="1.5"
      >
        <animateMotion dur="12s" begin="4s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#path_0" />
        </animateMotion>
      </path>

      {}
      <path
        d="M301 0 L346 25 L346 75 L301 100 L256 75 L256 25 Z" 
        fill="url(#ai_construct_gradient)" 
        transform="translate(-301 -50)" 
        id="ai_construct_shape"
        filter="url(#glowFilter)" 
      >
        {}
        <animateMotion dur="15s" repeatCount="indefinite" rotate="auto" begin="1s">
          <mpath xlinkHref="#path_1" />
        </animateMotion>
        {}
        <animate attributeName="transform" type="scale" values="1 1; 1.1 1.1; 1 1" keyTimes="0;0.5;1" dur="3s" repeatCount="indefinite" additive="sum" />
        {}
        <animate attributeName="opacity" values="0.7;1;0.7" keyTimes="0;0.5;1" dur="5s" repeatCount="indefinite" />
      </path>

      {}
      <path
        d="M301 0 L320 10" 
        transform="translate(-301 -50)" 
        stroke="url(#ai_construct_trail_gradient)"
        strokeWidth="2" 
        filter="url(#glowFilter)" 
      >
        <animateMotion dur="15s" repeatCount="indefinite" rotate="auto" begin="1s">
          <mpath xlinkHref="#path_1" />
        </animateMotion>
      </path>

      <defs>
        {}
        <radialGradient
          id="paint0_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(301 301) rotate(90) scale(300)"
        >
          <stop offset="0.333333" stopColor={subtleBgGlowColor} stopOpacity={subtleBgGlowOpacity} />
          <stop offset="1" stopColor="transparent" /> {}
        </radialGradient>
        <radialGradient
          id="paint1_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(301 301) rotate(90) scale(300)"
        >
          <stop offset="0.333333" stopColor={subtleBgGlowColor} stopOpacity={subtleBgGlowOpacity} />
          <stop offset="1" stopColor="transparent" />
        </radialGradient>
        <radialGradient
          id="paint2_radial"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(301 301) rotate(90) scale(300)"
        >
          <stop offset="0.333333" stopColor={subtleBgGlowColor} stopOpacity={subtleBgGlowOpacity} />
          <stop offset="1" stopColor="transparent" />
        </radialGradient>

        {}
        <linearGradient
          id="paint3_linear"
          x1="295.043"
          y1="193.116"
          x2="269.975"
          y2="218.154"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={primaryColor} />
          <stop offset="1" stopColor={primaryColor} stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint4_linear"
          x1="476.529"
          y1="363.31"
          x2="451.461"
          y2="338.272"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={primaryColor} />
          <stop offset="1" stopColor={primaryColor} stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint5_linear"
          x1="382.168"
          y1="155.027"
          x2="357.1"
          y2="129.989"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={secondaryColor} />
          <stop offset="1" stopColor={secondaryColor} stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint6_linear"
          x1="333.309"
          y1="382.693"
          x2="358.376"
          y2="357.655"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={secondaryColor} />
          <stop offset="1" stopColor={secondaryColor} stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint7_linear"
          x1="165.54"
          y1="93.9578"
          x2="140.472"
          y2="118.996"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={primaryColor} />
          <stop offset="1" stopColor={primaryColor} stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint11_linear"
          x1="476.529"
          y1="363.31"
          x2="451.461"
          y2="338.272"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={secondaryColor} />
          <stop offset="1" stopColor={secondaryColor} stopOpacity="0" />
        </linearGradient>

        {}
        <linearGradient id="ai_construct_gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={primaryColor} />
          <stop offset="100%" stopColor={secondaryColor} />
        </linearGradient>

        {}
        <linearGradient id="ai_construct_trail_gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={primaryColor} />
          <stop offset="50%" stopColor={secondaryColor} />
          <stop offset="100%" stopColor="transparent" />
        </linearGradient>

        {}
        <filter id="glowFilter" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

      </defs>
    </svg>
  </Div>
);

export default HeroBgAnimation;