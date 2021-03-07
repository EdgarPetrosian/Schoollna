import React from 'react'
import Svg, { G, Path } from 'react-native-svg'
import ColorsLib from '../ColorsLib';

const SvgClear = props => (
  <Svg width={18} height={18} viewBox="0 0 18 18" {...props}>
    <G data-name="Vector Smart Object copy 41">
      <G data-name="Vector Smart Object copy 41">
        <G data-name="Group 307">
          <Path
            data-name="Path 307"
            d="M18 1.494l-7.542 7.542L18 16.578 16.578 18l-7.542-7.542L1.494 18 0 16.578l7.542-7.542L0 1.494 1.494 0l7.542 7.542L16.578 0z"
            fill={props.color ? props.color : ColorsLib.defaultIconGray}
            opacity={0.5}
          />
        </G>
      </G>
      <Path
        data-name="Color Overlay"
        d="M9.036 10.457L1.5 18 0 16.577l7.542-7.541L0 1.495 1.5 0l7.536 7.541L16.577 0 18 1.495l-7.541 7.541L18 16.577 16.577 18z"
        fill={props.color ? props.color : ColorsLib.defaultIconGray}
      />
    </G>
  </Svg>
)

export default SvgClear
