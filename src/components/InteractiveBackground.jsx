import { useEffect, useRef } from 'react'

export function InteractiveBackground({ isDark }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animationFrameId
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    const targetMouse = { x: width * 0.5, y: height * 0.3 }
    const currentMouse = { x: width * 0.5, y: height * 0.3 }
    const ripples = []

    const handlePointerMove = (e) => {
      targetMouse.x = e.clientX
      targetMouse.y = e.clientY
    }

    const handlePointerDown = (e) => {
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 10,
        maxRadius: 200,
        alpha: isDark ? 0.25 : 0.15
      })
    }

    window.addEventListener('mousemove', handlePointerMove, { passive: true })
    window.addEventListener('mousedown', handlePointerDown)

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // Smooth lag / interpolation
      currentMouse.x += (targetMouse.x - currentMouse.x) * 0.08
      currentMouse.y += (targetMouse.y - currentMouse.y) * 0.08

      // Gentle spotlight gradient following cursor
      const spotlightRadius = 450
      const gradient = ctx.createRadialGradient(
        currentMouse.x,
        currentMouse.y,
        0,
        currentMouse.x,
        currentMouse.y,
        spotlightRadius
      )

      if (isDark) {
        gradient.addColorStop(0, 'rgba(0, 113, 227, 0.14)')
        gradient.addColorStop(0.5, 'rgba(175, 82, 222, 0.06)')
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)')
      } else {
        gradient.addColorStop(0, 'rgba(0, 113, 227, 0.08)')
        gradient.addColorStop(0.5, 'rgba(175, 82, 222, 0.03)')
        gradient.addColorStop(1, 'rgba(251, 251, 253, 0)')
      }

      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(currentMouse.x, currentMouse.y, spotlightRadius, 0, Math.PI * 2)
      ctx.fill()

      // Subtle click shockwave
      for (let r = ripples.length - 1; r >= 0; r--) {
        const ripple = ripples[r]
        ctx.beginPath()
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2)
        ctx.strokeStyle = isDark
          ? `rgba(90, 200, 250, ${ripple.alpha})`
          : `rgba(0, 113, 227, ${ripple.alpha})`
        ctx.lineWidth = 1.5
        ctx.stroke()
        ripple.radius += 2.8
        ripple.alpha -= 0.006

        if (ripple.alpha <= 0 || ripple.radius >= ripple.maxRadius) {
          ripples.splice(r, 1)
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handlePointerMove)
      window.removeEventListener('mousedown', handlePointerDown)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isDark])

  return (
    <>
      <canvas ref={canvasRef} className="interactive-canvas" aria-hidden="true" />
      <div className="ambient-background" aria-hidden="true">
        <div className="ambient-glow glow-1" />
        <div className="ambient-glow glow-2" />
        <div className="ambient-glow glow-3" />
      </div>
    </>
  )
}
