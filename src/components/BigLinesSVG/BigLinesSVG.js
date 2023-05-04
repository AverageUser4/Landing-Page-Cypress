import React from 'react';
import css from './BigLinesSVG.module.css';

import src0 from './assets/0.png';
import src1 from './assets/1.png';
import src2 from './assets/2.png';
import srcAvatar from './assets/avatar.png';

function BigLinesSVG() {
  return (
    <div className={css['container']}>
      <svg 
        width="4072"
        height="1600"
        viewBox="0 0 4072 1600"
        fill="none"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className={css['svg']}
      >
        <path 
          d="M 1613.14 336 L 1427.14 336 C 1405.92 336 1385.57 327.571 1370.57 312.568 L 1220 162 C 1206 148 1190.7 130 1159.5 130 C 1128.3 130 312.833 130 -4 130 M 1556.57 359.431 L 1493.93 422.068 M 1493.93 422.068 C 1478.93 437.071 1458.58 445.5 1437.36 445.5 L 1319.14 445.5 C 1297.92 445.5 1277.57 453.928 1262.57 468.931 L 978.5 753 C 962 769.5 932 778.5 908 778.5 C 894.4 778.5 320.833 778.5 -4 778.5 M 1493.93 422.068 L 1404.43 511.568 C 1389.43 526.571 1381 546.92 1381 568.137 L 1381 963.137 M 1381 963.137 C 1381 941.92 1389.43 921.571 1404.43 906.568 L 1493.5 817.5 M 1381 963.137 L 1381 1120.86 C 1381 1142.08 1372.57 1162.43 1357.57 1177.43 L 1090 1445 C 1068 1467 1039.5 1482 1002.5 1482 C 986.5 1482 315.167 1482 -4 1482"
          strokeWidth="2"
          stroke="#D0D2E0"
        />
        <path
          d="M 2684 530.213 L 2684 300.138 C 2684 278.921 2692.43 258.572 2707.43 243.569 L 2914.5 36.501 C 2942 9.001 2956 2.801 3002 2.001 C 3039.47 1.349 3427.37 1.538 3722 1.811 C 3789.08 1.873 4019.83 1.749 4072 1.811 M 2684 530.213 L 2684 589.638 M 2684 530.213 C 2684 508.656 2675.3 488.012 2659.87 472.956 M 2684 589.638 C 2684 568.421 2692.43 548.072 2707.43 533.069 L 2878.5 362.001 L 3044.5 196.001 C 3055 185.501 3076.1 157.001 3128.5 157.001 C 3169.57 157.001 3477.07 157.001 3722 157.001 C 3789.56 157.001 4020.87 157.001 4072 157.001 M 2684 589.638 L 2684 765.864 M 2684 765.864 L 2684 933.864 C 2684 955.081 2692.43 975.429 2707.43 990.432 L 2808 1091.001 C 2832.5 1115.501 2852.5 1130.001 2884 1130.001 C 2906.8 1130.001 3731 1130.001 4072 1130.001 M 2684 765.864 C 2684 787.081 2675.57 807.429 2660.57 822.432 L 2620.98 862.024"
          strokeWidth="2"
          stroke="#D0D2E0"
        />
        <use href="#path-left" stroke="#D0D2E0"/>
        <use href="#path-right" stroke="#D0D2E0"/>
        <use href="#path-left" style={{ strokeDasharray: '0px, 700px', transition: 'none 0s ease 0s' }} stroke="url(#avatar-branches-gradient)"/>
        <use href="#path-right" style={{ strokeDasharray: '0px, 700px', transition: 'none 0s ease 0s' }} stroke="url(#avatar-branches-gradient)"/>
        <image x="1353" y="428" width="32" height="32" href={src0}/>
        <image x="2554" y="364" width="32" height="32" href={src1}/>
        <image x="2745" y="1021" width="32" height="32" href={src2}/>
        <image x="1367" y="701" width="32" height="32" href={src2}/>
        <image x="1290" y="1211" width="32" height="32" href={src1}/>
        <defs>
          <radialGradient 
            id="avatar-branches-gradient"
            cx="0" cy="0" r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="matrix(-2.000898, 1475.498657, -1950.21814, -2.644657, 2036.00036, 94.000296)"
          >
            <stop offset="0.0914" stopColor="#6470F3"/>
            <stop offset="0.1998" stopColor="#69D3A7"/>
            <stop offset="0.3198" stopColor="#E1E3ED"/>
            <stop offset="0.9375" stopColor="#E1E3ED"/>
            <stop offset="1" stopColor="white" stopOpacity="0"/>
          </radialGradient>
          <symbol id="path-left">
            <path 
              d="M 2036 256 C 2036 300.183 2000 336 1956 336 L 1613 336 C 1592 336 1572 344.428 1556.57 359.431 L 1493.93 422.068"
              strokeWidth="2"
            />
          </symbol>
          <symbol id="path-right">
            <path 
              d="M 2036 256 C 2036 300.082 2071.92 335.926 2116.17 335.835 L 2485.84 335.069 C 2506.77 335.025 2526.89 343.19 2541.88 357.812 L 2659.87 472.956 C 2675.3 488.012 2684 508.656 2684 530.213"
              strokeWidth="2"
            />
          </symbol>
        </defs>
      </svg>
    </div>
  );
}

export default BigLinesSVG;