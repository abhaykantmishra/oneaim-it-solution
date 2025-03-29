"use client"

import { useEffect, useRef } from "react"

export default function FlowingLinesSVG() {
  const svgRef = useRef(null)

  useEffect(() => {
    if (!svgRef.current) return

    // Make the SVG responsive to its container
    const resizeObserver = new ResizeObserver(() => {
      if (svgRef.current) {
        const { width, height } = svgRef.current.getBoundingClientRect()
        svgRef.current.setAttribute("viewBox", `0 0 ${width} ${height}`)
      }
    })

    resizeObserver.observe(svgRef.current)

    return () => {
      if (svgRef.current) {
        resizeObserver.disconnect()
      }
    }
  }, [])

  // Update the generateLines function to make lines merge at the bottom
  const generateLines = () => {
    const lines = []
    const numLines = 30 // Number of lines to create

    for (let i = 0; i < numLines; i++) {
      // Calculate the percentage for gradient positioning
      const percent = i / (numLines - 1)

      // Create gradient from blue to purple to red
      const color = calculateGradientColor(percent)

      // Calculate control points for the path
      // Make lines start from a more concentrated point at the bottom
      const startX = 100
      const startY = 800 - i * 3 // Much closer together at the bottom

      const controlX1 = 200 + i * 2
      const controlY1 = 600 - i * 8

      const controlX2 = 400 + i * 5
      const controlY2 = 400 + i * 10

      const endX = 700
      const endY = 100 + i * 15

      lines.push(
        <path
          key={i}
          d={`M ${startX} ${startY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${endX} ${endY}`}
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          strokeOpacity="0.8"
        />,
      )
    }

    return lines
  }

  // Calculate gradient color based on position
  const calculateGradientColor = (percent) => {
    // Start with blue (rgb(0, 0, 255))
    // Middle with purple (rgb(128, 0, 128))
    // End with red (rgb(255, 0, 0))

    let r, g, b

    if (percent < 0.5) {
      // Blue to Purple
      const adjustedPercent = percent * 2
      r = Math.round(0 + adjustedPercent * 128)
      g = 0
      b = Math.round(255 - adjustedPercent * 127)
    } else {
      // Purple to Red
      const adjustedPercent = (percent - 0.5) * 2
      r = Math.round(128 + adjustedPercent * 127)
      g = 0
      b = Math.round(128 - adjustedPercent * 128)
    }

    return `rgb(${r}, ${g}, ${b})`
  }

  return (
    <div className="w-full h-screen bg-[#faf9f6] relative overflow-hidden">
      <svg ref={svgRef} className="w-full h-full" preserveAspectRatio="xMidYMid meet" viewBox="0 0 800 800">
        {generateLines()}
      </svg>
    </div>
  )
}

