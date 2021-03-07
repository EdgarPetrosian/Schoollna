import * as React from "react"
import Svg, { Defs, ClipPath, Rect, G, Path } from "react-native-svg"

function SvgLogOut(props) {
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
        <G transform="translate(-15 -670)">
          <Rect
            width={16}
            height={16}
            transform="translate(18 673)"
            fill="rgba(255,255,255,0)"
          />
          <Path
            d="M7.768,7.818,9.975,5.611a.582.582,0,0,0-.823-.823l-3.2,3.2a.582.582,0,0,0,0,.823l3.2,3.2a.582.582,0,0,0,.823-.823L7.768,8.982h6.452a.582.582,0,0,0,0-1.164ZM8.982,3.164A.582.582,0,1,0,8.982,2H3.457A1.456,1.456,0,0,0,2,3.456v9.887A1.456,1.456,0,0,0,3.457,14.8H8.982a.582.582,0,1,0,0-1.164H3.457a.293.293,0,0,1-.293-.293V3.456a.292.292,0,0,1,.293-.293Z"
            transform="translate(17.521 672.6)"
            fill="#fff"
          />
        </G>
      </G>
    </Svg>
  )
}

export default SvgLogOut
