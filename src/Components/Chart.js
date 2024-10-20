import { StyleSheet, View } from 'react-native';
import React from 'react';
import { SvgXml } from 'react-native-svg';

const Chart = ({ dynamicValues }) => {

  const textPositions = [
    { x: 185, y: 15 }, { x: 300, y: 60 }, { x: 355, y: 125 }, { x: 300, y: 190 },
    { x: 235, y: 220 }, { x: 185, y: 225 }, { x: 135, y: 220 }, { x: 70, y: 190 },
    { x: 20, y: 125 }, { x: 70, y: 60 }, { x: 140, y: 80 }, { x: 230, y: 80 },
    { x: 140, y: 160 }, { x: 230, y: 160 }, { x: 185, y: 120 }, { x: 185, y: 140 },
    { x: 185, y: 100 }, { x: 185, y: 160 }
  ];

  const frame = `
    <svg width="379" height="236" viewBox="0 0 379 236" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_b_1_73)">
        <rect width="379" height="236" rx="16" fill="url(#paint0_linear_1_73)"/>
        <rect x="1" y="1" width="377" height="234" rx="15" stroke="white" stroke-width="2"/>
      </g>
      <path d="M188.5 2V23.5M188.5 23.5C247.5 67.5 284.9 32.4 302.5 54C325.5 76 297 97.5 341.5 119.5C293.5 139.5 324.5 170.7 302.5 183.5C270 206.5 244 169 188.5 214C142.5 172.5 104.9 200.7 76.5 183.5C55 170.479 81.5 135.5 39 119.5C84 97 51 76.5 76.5 54C102 31.5 134.5 67.5 188.5 23.5Z" stroke="white"/>
      <path d="M340 119H376.5" stroke="white"/>
      <path d="M40 119.5H2.5" stroke="white"/>
      <path d="M188.5 212.5V231.5" stroke="white"/>
      <path d="M373.5 6.5L5 228.5" stroke="white"/>
      <path d="M5.5 9L374.5 228.5" stroke="white"/>

      <!-- Dynamic text values -->
      ${dynamicValues.map((value, index) => `
        <text x="${textPositions[index].x}" y="${textPositions[index].y}" fill="white" text-anchor="middle" font-size="15" font-weight="800">${value}</text>
      `).join('')}
      
      <defs>
        <filter id="filter0_b_1_73" x="-25" y="-25" width="429" height="286" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix"/>
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="12.5"/>
          <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_1_73"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_1_73" result="shape"/>
        </filter>
        <linearGradient id="paint0_linear_1_73" x1="-97.6804" y1="35.7574" x2="253.353" y2="387.123" gradientUnits="userSpaceOnUse">
          <stop stop-color="white" stop-opacity="0.08"/>
          <stop offset="1" stop-color="white" stop-opacity="0.1"/>
        </linearGradient>
      </defs>
    </svg>
  `;

  return (
    <View style={styles.container}>
      <SvgXml xml={frame} width="350" height="240" />
    </View>
  );
};

export default Chart;

const styles = StyleSheet.create({
  container: { alignItems: 'center', padding: 10 },
});
