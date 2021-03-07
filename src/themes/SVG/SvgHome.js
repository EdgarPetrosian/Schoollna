import * as React from "react"
import Svg, { Defs, ClipPath, Rect, G, Path } from "react-native-svg"

function SvgHome(props) {
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
        <G transform="translate(-15 -281)">
          <Rect
            width={16}
            height={16}
            transform="translate(18 284)"
            fill="rgba(255,96,96,0)"
          />
          <Path
            d="M7.249,14.249a.583.583,0,0,1-.583.583H3.456A1.456,1.456,0,0,1,2,13.372V8.414A2.721,2.721,0,0,1,2.872,6.53L8.038,2.139a.583.583,0,0,1,.755,0L13.96,6.53a2.72,2.72,0,0,1,.872,1.884v4.958a1.458,1.458,0,0,1-1.458,1.46H10.166a.583.583,0,0,1-.583-.583v-3.5H7.249Zm6.124-.583a.291.291,0,0,0,.292-.294V8.414a1.579,1.579,0,0,0-.461-.995L8.416,3.349,3.627,7.419a1.584,1.584,0,0,0-.461.995v4.958a.29.29,0,0,0,.29.294H6.083v-3.5a.583.583,0,0,1,.583-.583h3.5a.583.583,0,0,1,.583.583v3.5Z"
            transform="translate(17.604 283.604)"
            fill="#fff"
          />
        </G>
      </G>
    </Svg>
  )
}

export default SvgHome
