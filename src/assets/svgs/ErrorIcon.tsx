import * as React from 'react';
import Svg, {SvgProps, Path, G} from 'react-native-svg';

const ErrorIcon = (props: SvgProps) => (
  <Svg
    width={64}
    height={64}
    viewBox="-1.92 -1.92 27.84 27.84"
    fill="none"
    //@ts-expect-error
    xmlns="http://www.w3.org/2000/svg"
    stroke="#5D0E41"
    strokeWidth={0.36}
    transform="scale(-1 1)"
    {...props}>
    <Path
      fill="#EBD3F8"
      d="M14.029-1.346a3.92 3.92 0 0 0-4.058 0L.836 4.191A3.92 3.92 0 0 0-1.05 7.539v8.922A3.92 3.92 0 0 0 .836 19.81l9.135 5.537a3.92 3.92 0 0 0 4.058 0l9.135-5.537a3.92 3.92 0 0 0 1.886-3.348V7.54a3.92 3.92 0 0 0-1.886-3.348z"
      stroke="none"
    />
    <G
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="#CCC"
      strokeWidth={0.24}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-1.5-5.009c0-.867.659-1.491 1.491-1.491.85 0 1.509.624 1.509 1.491s-.659 1.509-1.509 1.509c-.832 0-1.491-.642-1.491-1.509zM11.172 6a.5.5 0 0 0-.499.522l.306 7a.5.5 0 0 0 .5.478h1.043a.5.5 0 0 0 .5-.478l.305-7a.5.5 0 0 0-.5-.522z"
      fill="#A0153E"
    />
  </Svg>
);
export default ErrorIcon;
