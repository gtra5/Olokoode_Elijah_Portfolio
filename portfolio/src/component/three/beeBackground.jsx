import { Canvas, useFrame } from '@react-three/fiber'
import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import BaselineModel from '../models/Balinese_tiltbrush_mask'
import Studio from './studio'

function AnimatedBee({ shouldPlay }) {
  const beeRef = useRef()
  const hasPlayed = useRef(false)

  useEffect(() => {
    if (!beeRef.current) return

    // Set start position
    beeRef.current.position.set(4, -3, 0)
    beeRef.current.scale.set(1.8, 1.8, 1.8)
    beeRef.current.rotation.z = -0.3
  }, [])

  useEffect(() => {
    if (!shouldPlay || !beeRef.current || hasPlayed.current) return

    hasPlayed.current = true // prevent re-trigger

    const tl = gsap.timeline() // no repeat

    tl.to(beeRef.current.position, {
      x: -6.5,
      y: 3,
      z: 0,
      duration: 6,
      ease: 'power2.inOut',
    }, 0)
    .to(beeRef.current.scale, {
      x: 0.8,
      y: 0.8,
      z: 0.8,
      duration: 6,
      ease: 'power2.inOut',
    }, 0)
    .to(beeRef.current.rotation, {
      z: 0.3,
      duration: 6,
      ease: 'power2.inOut',
    }, 0)

    return () => tl.kill()
  }, [shouldPlay])

  useFrame(({ clock }) => {
    if (!beeRef.current) return
    beeRef.current.position.y += Math.sin(clock.getElapsedTime() * 8) * 0.003
  })

  return <BaselineModel ref={beeRef} />
}

export default function BeeBackground() {
  const containerRef = useRef()
  const [shouldPlay, setShouldPlay] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldPlay(true)
          observer.disconnect() // stop watching after first trigger
        }
      },
      { threshold: 0.3 } // fires when 30% of the section is visible
    )

    if (containerRef.current) observer.observe(containerRef.current)

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} style={{ position: 'absolute', inset: 0 }}>
      <Canvas
        style={{
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
        camera={{ position: [0, 0, 8], fov: 50 }}
      >
        <Studio />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <AnimatedBee shouldPlay={shouldPlay} />
      </Canvas>
    </div>
  )
}