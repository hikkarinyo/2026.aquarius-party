import React from 'react'

import Bulbs from './Bulbs.tsx'

interface WheelContainerProps {
  wheelSize: number
  bulbRadius: number
  bulbCount: number
  children: React.ReactNode
}

const WheelContainer = ({ wheelSize, bulbRadius, bulbCount, children }: WheelContainerProps) => {
  return (
    <div style={{
      position: 'relative',
      width: wheelSize,
      height: wheelSize,
      borderRadius: '50%',
      boxShadow: '0 0 30px rgba(255, 0, 204, 0.6), 0 0 60px rgba(51, 255, 255, 0.3)',
    }}>
      <Bulbs
        bulbCount={bulbCount}
        bulbRadius={bulbRadius}
      />

      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}>
        {children}
      </div>
    </div>
  )
}

export default WheelContainer
