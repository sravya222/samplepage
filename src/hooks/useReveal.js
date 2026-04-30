import { useEffect, useRef } from 'react'

export default function useReveal() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          // also reveal all stagger children
          el.querySelectorAll('.stagger > *').forEach(child => {
            child.style.opacity = '1'
            child.style.transform = 'translateY(0)'
          })
        }
      },
      { threshold: 0.05 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}
