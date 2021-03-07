import React from 'react'
import Svg, { G, Path } from 'react-native-svg'
const defColorGray = '#474657';
const SvgLoginUserLogo = props => (
    <Svg viewBox="0 0 16.5 16.5" {...props}>
        <G >
            <Path
                d="M12.623 4.917a3.9 3.9 0 0 1-1.278 2.933 4.511 4.511 0 0 1-6.189 0 4.016 4.016 0 0 1 0-5.877 4.539 4.539 0 0 1 6.189 0 3.924 3.924 0 0 1 1.278 2.944zM.75 15.75a6.935 6.935 0 0 1 2.117-3.983 7.449 7.449 0 0 1 5.372-2.15 7.449 7.449 0 0 1 5.372 2.15 6.968 6.968 0 0 1 2.139 3.983"
                stroke={props.color ? props.color : defColorGray}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
            />
        </G>
    </Svg>
)

export default SvgLoginUserLogo