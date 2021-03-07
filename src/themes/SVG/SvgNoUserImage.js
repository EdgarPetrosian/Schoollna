import React from 'react'
import Svg, { G, Circle, Path } from 'react-native-svg'

const SvgNoUserImage = props => (
  <Svg width={120} height={120} viewBox="0 0 120 120" {...props}>
    <G data-name="Group 1619" transform="translate(-128 -108)">
      <Circle
        data-name="Ellipse 1010"
        cx={60}
        cy={60}
        r={60}
        transform="translate(128 108)"
        fill={props.color ? props.color : "#f8f9fc"}
      />
      <G data-name="Group 1101">
        <Path
          data-name="Path 1370"
          d="M196.692 174.36c-.334-.111-2.669-1.223-1.223-5.56a24.733 24.733 0 0 0 6.671-16.345C202.14 143 195.8 138 188.463 138s-13.677 5-13.677 14.455a24.792 24.792 0 0 0 6.672 16.457c1.446 3.892-1.223 5.337-1.779 5.56-7.672 2.779-16.679 7.894-16.679 12.898v1.89c0 6.783 13.232 8.34 25.463 8.34s25.352-1.557 25.352-8.34v-1.89c.001-5.337-9.006-10.341-17.123-13.01z"
          fill="#c3c8d9"
        />
      </G>
    </G>
  </Svg>
)

export default SvgNoUserImage
