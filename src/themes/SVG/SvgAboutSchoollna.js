import * as React from "react"
import Svg, { Defs, ClipPath, Rect, G, Path } from "react-native-svg"

function SvgAboutSchoollna(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={22}
      height={22}
      viewBox="0 0 22 22"
      {...props}
    >
      <Defs>
        <ClipPath id="b">
          <Rect width={22} height={22} />
        </ClipPath>
      </Defs>
      <G id="a" clipPath="url(#b)">
        <G transform="translate(-15 -513)">
          <Rect
            width={16}
            height={16}
            transform="translate(18 516)"
            fill="rgba(255,96,96,0)"
          />
          <Path
            d="M8.445,14.89A6.445,6.445,0,1,1,14.89,8.445,6.445,6.445,0,0,1,8.445,14.89Zm0-1.172A5.273,5.273,0,1,0,3.172,8.445,5.273,5.273,0,0,0,8.445,13.718Zm0-7.617a.586.586,0,1,1,.586-.586A.586.586,0,0,1,8.445,6.1ZM7.859,7.566a.586.586,0,0,1,1.172,0v3.808a.586.586,0,0,1-1.172,0Z"
            transform="translate(17.611 515.611)"
            fill="#fff"
          />
        </G>
      </G>
    </Svg>
  )
}

export default SvgAboutSchoollna
