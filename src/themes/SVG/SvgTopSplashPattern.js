import * as React from "react"
import Svg, { Defs, ClipPath, Rect, G, Path } from "react-native-svg"

function SvgTopSplashPattern(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={376}
      height={217}
      viewBox="0 0 376 217"
      {...props}
    >
      <Defs>
        <ClipPath id="b">
          <Rect width={376} height={217} />
        </ClipPath>
      </Defs>
      <G id="a" clipPath="url(#b)">
        <Path
          d="M0,211.775C78.207,211.366,216.521,89.268,216.521,0H0Z"
          transform="translate(375.775 0.304) rotate(90)"
          fill="#e4e4e4"
        />
        <Path
          d="M2879.143,1605.4c66.3-.26,183.547-77.977,183.547-134.8H2879.143Z"
          transform="translate(-2879.29 -1470.297)"
          fill="#f4b220"
        />
        <Path
          d="M307.762,820.523c-13.1-12.1-25.172-13.234-32.724-13.234-39,0-64.949,53.964-120.286,53.964-48.471,0-61.242-35.907-64.743-41.88s-17.1-43.716-26.364-51.93S21.519,737.3,7,707.737C3.281,700.157,0,686.454,0,680H307.762Z"
          transform="translate(67.6 -680.114)"
          fill="rgba(0,116,129,0.92)"
        />
      </G>
    </Svg>
  )
}

export default SvgTopSplashPattern
