import * as React from "react"
import Svg, { Defs, ClipPath, Rect, G, Path } from "react-native-svg"

function SvgContactUs(props) {
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
        <ClipPath id="a">
          <Rect
            width={13}
            height={12}
            transform="translate(0.06 0.131)"
            fill="#fff"
            stroke="#fff"
            strokeWidth={0.4}
          />
        </ClipPath>
        <ClipPath id="c">
          <Rect width={22} height={22} />
        </ClipPath>
      </Defs>
      <G id="b" clipPath="url(#c)">
        <G transform="translate(-403.324 -204)">
          <Path
            d="M415.4,221.153H409.37a1.372,1.372,0,0,1-1.37-1.37V209.37a1.372,1.372,0,0,1,1.37-1.37H415.4a1.372,1.372,0,0,1,1.37,1.37v1.1a.274.274,0,0,1-.548,0v-1.1a.823.823,0,0,0-.822-.822H409.37a.823.823,0,0,0-.822.822v10.413a.823.823,0,0,0,.822.822H415.4a.823.823,0,0,0,.822-.822v-1.1a.274.274,0,1,1,.548,0v1.1a1.372,1.372,0,0,1-1.37,1.37Zm0,0"
            transform="translate(0)"
            fill="#fff"
            stroke="#fff"
            strokeWidth={0.4}
          />
          <Path
            d="M452.11,209.644h-2.192a.823.823,0,0,1-.822-.822.275.275,0,0,0-.274-.274h-.548a.274.274,0,1,1,0-.548h.548a.823.823,0,0,1,.822.822.275.275,0,0,0,.274.274h2.192a.275.275,0,0,0,.274-.274.823.823,0,0,1,.822-.822h.548a.274.274,0,0,1,0,.548h-.548a.275.275,0,0,0-.274.274.823.823,0,0,1-.822.822Zm0,0"
            transform="translate(-38.63)"
            fill="#fff"
            stroke="#fff"
            strokeWidth={0.4}
          />
          <G transform="translate(408.264 208.583)">
            <G transform="translate(0 0)" clipPath="url(#a)">
              <Path
                d="M574.842,325.48h-6.021a.823.823,0,0,1-.821-.822v-3.836a.823.823,0,0,1,.821-.822h6.021a.823.823,0,0,1,.821.822v3.836a.823.823,0,0,1-.821.822Zm-6.021-4.932a.274.274,0,0,0-.274.274v3.836a.274.274,0,0,0,.274.274h6.021a.274.274,0,0,0,.274-.274v-3.836a.274.274,0,0,0-.274-.274Zm0,0"
                transform="translate(-562.786 -316.747)"
                fill="#fff"
                stroke="#fff"
                strokeWidth={0.4}
              />
              <Path
                d="M571.831,353.6a1.1,1.1,0,0,1-.507-.124l-3.177-1.66a.274.274,0,0,1,.253-.486l3.178,1.66a.548.548,0,0,0,.507,0l3.178-1.66a.274.274,0,0,1,.253.486l-3.178,1.66a1.1,1.1,0,0,1-.507.124Zm0,0"
                transform="translate(-562.785 -346.978)"
                fill="#fff"
                stroke="#fff"
                strokeWidth={0.4}
              />
            </G>
          </G>
        </G>
      </G>
    </Svg>
  )
}

export default SvgContactUs
