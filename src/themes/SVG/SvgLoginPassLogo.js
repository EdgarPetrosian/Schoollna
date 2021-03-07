import React from 'react'
import Svg, { G, Path } from 'react-native-svg'
const defColorGray = 'rgba(112,112,112,0.9)';
const SvgLoginPassLogo = props => (
    <Svg viewBox="0 0 13 16" {...props}>
        <G fill={props.color ? props.color : defColorGray}>
            <Path
                d="M11.227 5.714h-.591V4a4.139 4.139 0 0 0-8.273 0v1.714h-.591A1.746 1.746 0 0 0 0 7.429v6.857A1.746 1.746 0 0 0 1.773 16h9.455A1.746 1.746 0 0 0 13 14.286V7.429a1.746 1.746 0 0 0-1.773-1.715zM3.545 4a2.956 2.956 0 0 1 5.909 0v1.714H3.545zm8.273 10.286a.582.582 0 0 1-.591.571H1.773a.582.582 0 0 1-.591-.571V7.429a.582.582 0 0 1 .591-.571h9.455a.582.582 0 0 1 .591.571z"
            />
            <Path
                d="M6.5 8.901a1.122 1.122 0 0 0-.563 2.1v1.283a.563.563 0 1 0 1.126 0v-1.283a1.122 1.122 0 0 0-.563-2.1z"
            />
        </G>
    </Svg>
)

export default SvgLoginPassLogo