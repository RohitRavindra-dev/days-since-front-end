import * as React from 'react';
import Svg, {SvgProps, Path, G} from 'react-native-svg';
const CloseIcon = (props: SvgProps) => (
  <Svg
    width={32}
    height={32}
    viewBox="-2.4 -2.4 28.8 28.8"
    fill="none"
    //@ts-expect-error xmlns error expected
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M12 20.536c2.183-.18 3.55 3.82 5.648 3.193 1.915-.572.832-4.008 2.138-5.52 1.386-1.602 4.452-1.304 5.401-3.2.89-1.775-.505-3.867-.887-5.816-.393-2.003-.144-4.277-1.407-5.88S19.372 1.393 17.505.57C15.689-.233 13.97-1.735 12-1.496c-1.984.24-3.242 2.207-4.897 3.328-1.434.971-3.567 1.28-4.253 2.87-.724 1.679.686 3.542.698 5.369.008 1.369-.75 2.64-.642 4.005.116 1.462.89 2.739 1.285 4.152.609 2.176-.477 5.837 1.69 6.478 2.397.708 3.628-3.963 6.119-4.17"
      fill="#433D8B"
    />
    <G strokeLinecap="round" strokeLinejoin="round" />
    <Path
      d="m18 18-6-6m0 0L6 6m6 6 6-6m-6 6-6 6"
      stroke="#D4ADFC"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default CloseIcon;
