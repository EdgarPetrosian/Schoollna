import * as React from "react"
import Svg, { G, Line, Rect } from "react-native-svg"

function SvgMenuIcon(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={22}
      viewBox="0 0 32 22"
      {...props}
    >
      <G
        id="Group_1020"
        data-name="Group 1020"
        transform="translate(0.21 -0.203)"
      >
        <Line
          id="Line_59"
          data-name="Line 59"
          x2={13}
          transform="translate(3.79 4.203)"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth={2}
        />
        <Line
          id="Line_60"
          data-name="Line 60"
          x2={25}
          transform="translate(3.79 12.203)"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth={2}
        />
        <Line
          id="Line_61"
          data-name="Line 61"
          x2={12}
          transform="translate(16.79 19.203)"
          fill="none"
          stroke="#fff"
          strokeLinecap="round"
          strokeWidth={2}
        />
        <Rect
          id="Rectangle_110"
          data-name="Rectangle 110"
          width={32}
          height={22}
          transform="translate(-0.21 0.203)"
          fill="none"
        />
      </G>
    </Svg>
  )
}

export default SvgMenuIcon
