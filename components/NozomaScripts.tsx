'use client'
import { useEffect } from 'react'

export default function NozomaScripts() {
  useEffect(() => {
    /* ── NAV ── */
    const hamburger = document.getElementById('hamburger') as HTMLButtonElement
    const drawer    = document.getElementById('drawer') as HTMLElement
    const navEl     = document.getElementById('nav') as HTMLElement

    function closeDrawer() {
      hamburger.classList.remove('open')
      drawer.classList.remove('open')
      hamburger.setAttribute('aria-expanded', 'false')
    }

    hamburger.addEventListener('click', () => {
      const isOpen = drawer.classList.toggle('open')
      hamburger.classList.toggle('open', isOpen)
      hamburger.setAttribute('aria-expanded', String(isOpen))
    })

    document.addEventListener('click', (e) => {
      if (!navEl.contains(e.target as Node) && !drawer.contains(e.target as Node)) closeDrawer()
    })

    /* ── Smooth scroll desde nav/drawer ── */
    document.querySelectorAll<HTMLAnchorElement>('nav a[href^="#"], .nav-drawer a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const target = document.querySelector(a.getAttribute('href')!)
        if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); closeDrawer() }
      })
    })

    /* ── CANVAS GRADIENTE INTERACTIVO (hero) ── */
    ;(function () {
      const canvas = document.getElementById('hero-canvas') as HTMLCanvasElement
      if (!canvas) return
      const ctx = canvas.getContext('2d')!
      let W = 0, H = 0, t = 0
      const mouse  = { x: 0.5, y: 0.5 }
      const target = { x: 0.5, y: 0.5 }

      function resize() { W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight }
      resize()
      window.addEventListener('resize', resize)

      const hero = document.querySelector('.hero') as HTMLElement
      hero.addEventListener('mousemove', (e) => {
        const r = hero.getBoundingClientRect()
        target.x = (e.clientX - r.left) / r.width
        target.y = (e.clientY - r.top)  / r.height
      })
      hero.addEventListener('mouseleave', () => { target.x = 0.5; target.y = 0.5 })

      const orbs = [
        { cx: 0.75, cy: 0.25, r: 0.55, color: [255,124,88]  as [number,number,number], speed: 0.00001,   ox: 0.06, oy: 0.05 },
        { cx: 0.20, cy: 0.70, r: 0.45, color: [227,104,125] as [number,number,number], speed: 0.0000075, ox: 0.05, oy: 0.06 },
        { cx: 0.55, cy: 0.50, r: 0.38, color: [125,95,181]  as [number,number,number], speed: 0.0000125, ox: 0.04, oy: 0.04 },
        { cx: 0.85, cy: 0.75, r: 0.30, color: [90,75,160]   as [number,number,number], speed: 0.000015,  ox: 0.03, oy: 0.03 },
      ]

      function draw() {
        t++
        mouse.x += (target.x - mouse.x) * 0.004
        mouse.y += (target.y - mouse.y) * 0.004
        ctx.clearRect(0, 0, W, H)
        ctx.fillStyle = '#242C50'
        ctx.fillRect(0, 0, W, H)
        orbs.forEach((o, i) => {
          const bx = Math.sin(t * o.speed * 1000 + i) * o.ox
          const by = Math.cos(t * o.speed * 800  + i) * o.oy
          const mx = (mouse.x - 0.5) * 0.06
          const my = (mouse.y - 0.5) * 0.06
          const cx = (o.cx + bx + mx) * W
          const cy = (o.cy + by + my) * H
          const r  = o.r * Math.max(W, H)
          const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r)
          grad.addColorStop(0,   `rgba(${o.color[0]},${o.color[1]},${o.color[2]},0.55)`)
          grad.addColorStop(0.5, `rgba(${o.color[0]},${o.color[1]},${o.color[2]},0.18)`)
          grad.addColorStop(1,   `rgba(${o.color[0]},${o.color[1]},${o.color[2]},0)`)
          ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2)
          ctx.fillStyle = grad; ctx.fill()
        })
        requestAnimationFrame(draw)
      }
      draw()
    })()

    /* ── CANVAS GRADIENTE CURSOS ── */
    ;(function () {
      const canvas = document.getElementById('cursos-canvas') as HTMLCanvasElement
      if (!canvas) return
      const ctx = canvas.getContext('2d')!
      let W = 0, H = 0, t = 0
      function resize() { W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight }
      resize()
      window.addEventListener('resize', resize)
      const orbs = [
        { cx: 0.80, cy: 0.20, r: 0.50, color: [255,124,88]  as [number,number,number], speed: 0.0000075, ox: 0.05, oy: 0.04 },
        { cx: 0.15, cy: 0.75, r: 0.40, color: [227,104,125] as [number,number,number], speed: 0.00001,   ox: 0.04, oy: 0.05 },
        { cx: 0.50, cy: 0.50, r: 0.35, color: [125,95,181]  as [number,number,number], speed: 0.0000125, ox: 0.03, oy: 0.03 },
      ]
      function draw() {
        t++
        ctx.clearRect(0, 0, W, H)
        ctx.fillStyle = '#242C50'
        ctx.fillRect(0, 0, W, H)
        orbs.forEach((o, i) => {
          const bx = Math.sin(t * o.speed * 1000 + i) * o.ox
          const by = Math.cos(t * o.speed * 800  + i) * o.oy
          const cx = (o.cx + bx) * W
          const cy = (o.cy + by) * H
          const r  = o.r * Math.max(W, H)
          const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, r)
          grad.addColorStop(0,   `rgba(${o.color[0]},${o.color[1]},${o.color[2]},0.45)`)
          grad.addColorStop(0.5, `rgba(${o.color[0]},${o.color[1]},${o.color[2]},0.14)`)
          grad.addColorStop(1,   `rgba(${o.color[0]},${o.color[1]},${o.color[2]},0)`)
          ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2)
          ctx.fillStyle = grad; ctx.fill()
        })
        requestAnimationFrame(draw)
      }
      draw()
    })()

    /* ── SLIDER servicios mobile ── */
    let currentSlide = 0
    const slides = document.querySelectorAll<HTMLElement>('.hero-service-slide')
    const dots   = document.querySelectorAll<HTMLButtonElement>('.slide-dot')
    let sliderTimer: ReturnType<typeof setInterval>

    function goSlide(n: number) {
      slides[currentSlide].classList.remove('active')
      dots[currentSlide].classList.remove('active')
      currentSlide = n
      slides[currentSlide].classList.add('active')
      dots[currentSlide].classList.add('active')
      resetSliderTimer()
    }
    function nextSlide() { goSlide((currentSlide + 1) % slides.length) }
    function resetSliderTimer() { clearInterval(sliderTimer); sliderTimer = setInterval(nextSlide, 6000) }

    dots.forEach((dot, i) => dot.addEventListener('click', () => goSlide(i)))

    function initSlider() {
      const slider = document.getElementById('serviceSlider')
      if (!slider) return
      if (window.innerWidth <= 768) { slider.style.display = 'block'; resetSliderTimer() }
      else { slider.style.display = 'none'; clearInterval(sliderTimer) }
    }
    initSlider()
    window.addEventListener('resize', initSlider)

    /* ── HERO CAROUSEL ── */
    ;(function () {
      const heroSlides = document.querySelectorAll<HTMLElement>('.hero-slide')
      const heroPrev = document.getElementById('heroPrev') as HTMLButtonElement
      const heroNext = document.getElementById('heroNext') as HTMLButtonElement
      if (!heroSlides.length || !heroPrev || !heroNext) return
      let currentHeroSlide = 0

      function heroGoSlide(n: number) {
        if (n < 0 || n >= heroSlides.length || n === currentHeroSlide) return
        heroSlides[currentHeroSlide].classList.remove('active')
        currentHeroSlide = n
        heroSlides[currentHeroSlide].classList.add('active')
        document.querySelectorAll<HTMLButtonElement>('.hero-dot').forEach(d => {
          d.classList.toggle('active', parseInt(d.dataset.slide || '0') === n)
        })
        heroPrev.style.display = n === 0 ? 'none' : 'flex'
        heroNext.style.display = n === heroSlides.length - 1 ? 'none' : 'flex'
      }

      heroPrev.addEventListener('click', () => heroGoSlide(currentHeroSlide - 1))
      heroNext.addEventListener('click', () => heroGoSlide(currentHeroSlide + 1))
      document.querySelectorAll<HTMLButtonElement>('.hero-dot').forEach(d => {
        d.addEventListener('click', () => heroGoSlide(parseInt(d.dataset.slide || '0')))
      })
      document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') heroGoSlide(currentHeroSlide + 1)
        if (e.key === 'ArrowLeft')  heroGoSlide(currentHeroSlide - 1)
      })
    })()

    /* ── REVEAL ── */
    const reveals  = document.querySelectorAll('.reveal')
    const revealOb = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealOb.unobserve(e.target) } })
    }, { threshold: 0.1 })
    reveals.forEach(el => revealOb.observe(el))
    reveals.forEach(el => { if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('visible') })

    /* ── CONTADOR animado ── */
    function animateCounter(el: Element) {
      const tgt      = parseInt((el as HTMLElement).dataset.target || '0')
      const prefix   = (el as HTMLElement).dataset.prefix || ''
      const suffix   = (el as HTMLElement).dataset.suffix || ''
      const duration = 1800
      const start    = performance.now()
      function step(now: number) {
        const p = Math.min((now - start) / duration, 1)
        const e = 1 - Math.pow(1 - p, 3)
        el.textContent = prefix + Math.round(e * tgt) + suffix
        if (p < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }
    const counterOb = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.querySelectorAll('[data-target]').forEach(animateCounter); counterOb.unobserve(e.target) } })
    }, { threshold: 0.3 })
    document.querySelectorAll('.caso-slide.active .caso-metrics').forEach(el => counterOb.observe(el))

    /* ── CASO CAROUSEL ── */
    ;(function () {
      const casoSlides = document.querySelectorAll<HTMLElement>('.caso-slide')
      const casoPrev = document.getElementById('casoPrev') as HTMLButtonElement
      const casoNext = document.getElementById('casoNext') as HTMLButtonElement
      if (!casoSlides.length || !casoPrev || !casoNext) return
      let currentCasoSlide = 0
      const casoSlideAnimated = new Array(casoSlides.length).fill(false)
      casoSlideAnimated[0] = true

      function casoGoSlide(n: number) {
        if (n < 0 || n >= casoSlides.length || n === currentCasoSlide) return
        casoSlides[currentCasoSlide].classList.remove('active')
        currentCasoSlide = n
        casoSlides[currentCasoSlide].classList.add('active')
        document.querySelectorAll<HTMLButtonElement>('.caso-dot').forEach(d => {
          d.classList.toggle('active', parseInt(d.dataset.slide || '0') === n)
        })
        casoPrev.style.display = n === 0 ? 'none' : 'flex'
        casoNext.style.display = n === casoSlides.length - 1 ? 'none' : 'flex'
        if (!casoSlideAnimated[n]) {
          casoSlideAnimated[n] = true
          casoSlides[n].querySelectorAll('[data-target]').forEach(animateCounter)
        }
      }

      casoPrev.addEventListener('click', () => casoGoSlide(currentCasoSlide - 1))
      casoNext.addEventListener('click', () => casoGoSlide(currentCasoSlide + 1))
      document.querySelectorAll<HTMLButtonElement>('.caso-dot').forEach(d => {
        d.addEventListener('click', () => casoGoSlide(parseInt(d.dataset.slide || '0')))
      })
    })()

    /* ── FORMULARIO ── */
    const form = document.querySelector<HTMLFormElement>('.contact-form')
    if (form) {
      form.addEventListener('submit', async (e) => {
        e.preventDefault()
        const btn = form.querySelector<HTMLButtonElement>('.btn-submit')!
        const originalText = btn.textContent || ''
        btn.textContent = 'Enviando...'; btn.disabled = true
        try {
          const res = await fetch('https://formspree.io/f/FORMSPREE_ID_AQUI', {
            method: 'POST', body: new FormData(form), headers: { 'Accept': 'application/json' },
          })
          if (res.ok) {
            btn.textContent = 'Mensaje enviado ✓'; btn.style.background = '#059669'
            setTimeout(() => { btn.textContent = originalText; btn.style.background = ''; btn.disabled = false; form.reset() }, 3000)
          } else {
            btn.textContent = 'Error al enviar. Intenta de nuevo.'; btn.style.background = '#DC2626'
            setTimeout(() => { btn.textContent = originalText; btn.style.background = ''; btn.disabled = false }, 3000)
          }
        } catch {
          btn.textContent = 'Error de red. Intenta de nuevo.'; btn.style.background = '#DC2626'
          setTimeout(() => { btn.textContent = originalText; btn.style.background = ''; btn.disabled = false }, 3000)
        }
      })
    }
  }, [])

  return null
}
