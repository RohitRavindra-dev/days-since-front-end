import * as React from 'react';
import Svg, {SvgProps, G, Path} from 'react-native-svg';
const AutoIncrementIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    //@ts-expect-error
    xmlns="http://www.w3.org/2000/svg"
    stroke="#fff"
    strokeWidth={0}
    {...props}>
    <G />
    <G
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="#CCC"
      strokeWidth={0.048}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.5 21h1c3.771 0 5.657 0 6.828-1.172S20.5 16.771 20.5 13V6.998C20.355 7 20.15 7 20 7H4c-.15 0-.355 0-.5-.002V13c0 3.771 0 5.657 1.172 6.828S7.729 21 11.5 21Zm3.56-9.5a.75.75 0 0 0-1.12-1l-3.011 3.374-.87-.974a.75.75 0 0 0-1.118 1l1.428 1.6a.75.75 0 0 0 1.119 0z"
      fill="#A0D683"
      stroke="none"
    />
    <Path
      d="M2 5c0-.943 0-1.414.293-1.707S3.057 3 4 3h16c.943 0 1.414 0 1.707.293S22 4.057 22 5s0 1.414-.293 1.707S20.943 7 20 7H4c-.943 0-1.414 0-1.707-.293S2 5.943 2 5Z"
      fill="#A0D683"
      opacity={0.5}
      stroke="none"
    />
  </Svg>
);
export default AutoIncrementIcon;
