import * as React from "react"
import Svg, {
  Defs,
  ClipPath,
  Rect,
  G,
  Text,
  TSpan,
  Path,
  Ellipse,
} from "react-native-svg"

function SvgLogoSplash(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={172}
      height={31}
      viewBox="0 0 172 31"
      {...props}
    >
      <Defs>
        <ClipPath id="b">
          <Rect width={172} height={31} />
        </ClipPath>
      </Defs>
      <G id="a" clipPath="url(#b)">
        <G transform="translate(-104 -387.533)">
          <Text
            transform="translate(104 418.4)"
            fill="#010020"
            fontSize={27}
            fontWeight={700}
          >
            <TSpan x={0} y={0} xmlSpace="preserve">
              {"S  "}
            </TSpan>
            <TSpan y={0} fontSize={23} />
            <TSpan y={0} fontSize={8} />
            <TSpan y={0}>{"HOOL"}</TSpan>
            <TSpan y={0} fill="#f4b220">
              {"LNA"}
            </TSpan>
          </Text>
          <Path
            d="M134.415,86.53A10.156,10.156,0,0,0,133.393,99.2l2.557-1.626a7.109,7.109,0,0,1,2.371-10.281l-1.628-2.559A10.1,10.1,0,0,0,134.415,86.53Z"
            transform="translate(-9.384 315.713)"
            fill="#007481"
          />
          <Path
            d="M144.5,109.435a7.054,7.054,0,0,1-3.632-.882l-2.792,1.776a10.152,10.152,0,0,0,11.658.568,10.185,10.185,0,0,0,1.935-1.6l-2.2-2.084A7.062,7.062,0,0,1,144.5,109.435Z"
            transform="translate(-11.907 306.882)"
            fill="#f4b220"
          />
          <Path
            d="M144.855,82.707l1.775,2.817a7.086,7.086,0,0,1,5.222,1.932l2.083-2.2A10.133,10.133,0,0,0,144.855,82.707Z"
            transform="translate(-14.571 316.594)"
            fill="#010020"
          />
          <Ellipse
            cx={2.723}
            cy={2.723}
            rx={2.723}
            ry={2.723}
            transform="translate(123.853 405.472)"
            fill="#007481"
          />
          <Ellipse
            cx={2.243}
            cy={2.243}
            rx={2.243}
            ry={2.243}
            transform="translate(130.696 412.473)"
            fill="#f4b220"
          />
          <Ellipse
            cx={1.655}
            cy={1.655}
            rx={1.655}
            ry={1.655}
            transform="translate(131.52 401.861)"
            fill="#010020"
          />
          <Path
            d="M.651,0H4.009a.65.65,0,0,1,.65.65V4.009a.65.65,0,0,1-.65.65H.651A.651.651,0,0,1,0,4.009V.651A.651.651,0,0,1,.651,0Z"
            transform="translate(114.546 387.533)"
            fill="#010020"
          />
          <Path
            d="M.418,0h2.16A.417.417,0,0,1,3,.417v2.16A.418.418,0,0,1,2.578,3H.418A.418.418,0,0,1,0,2.577V.418A.418.418,0,0,1,.418,0Z"
            transform="translate(121.304 391.08)"
            fill="#007481"
          />
          <Path
            d="M.243,0H1.5a.243.243,0,0,1,.243.243V1.5a.244.244,0,0,1-.244.244H.244A.244.244,0,0,1,0,1.5V.243A.243.243,0,0,1,.243,0Z"
            transform="translate(122.47 398.031)"
            fill="#f4b220"
          />
          <Path
            d="M.3,0H1.868a.3.3,0,0,1,.3.3V1.869a.3.3,0,0,1-.3.3H.3a.3.3,0,0,1-.3-.3V.3A.3.3,0,0,1,.3,0Z"
            transform="translate(117.699 394.008)"
            fill="#f4b220"
          />
          <Rect
            width={1.314}
            height={1.314}
            rx={0.184}
            transform="translate(121.304 395.036)"
            fill="#010020"
          />
        </G>
      </G>
    </Svg>
  )
}

export default SvgLogoSplash
