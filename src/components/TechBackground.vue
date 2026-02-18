<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const canvas = ref(null)
let animFrame = null
let ctx = null
let W = 0, H = 0

// Tech symbols and code fragments
const techSymbols = [
  '{ }', '< />', '( )', '=>', '&&', '||', '===', '!==',
  'const', 'let', 'async', 'await', 'import', 'export',
  'v-for', 'v-if', '@click', ':class', 'ref()', 'computed',
  '<template>', '</div>', 'npm', 'git', 'API', 'JSON',
  '01', '10', '11', '00', '0x', 'fn()', '.vue', '.js',
  'CSS', 'HTML', 'UI', 'UX', '#', '//', '/*', '*/',
  'return', 'props', 'emit', 'watch', 'mount', 'setup',
]

class Particle {
  constructor(w, h) {
    this.w = w
    this.h = h
    this.reset()
  }
  reset() {
    this.x = Math.random() * this.w
    this.y = Math.random() * this.h
    this.text = techSymbols[Math.floor(Math.random() * techSymbols.length)]
    this.size = Math.random() * 11 + 11
    this.speedX = (Math.random() - 0.5) * 0.35
    this.speedY = (Math.random() - 0.5) * 0.35
    this.opacity = Math.random() * 0.25 + 0.10
    this.color = Math.random() > 0.6
      ? `rgba(99,102,241,${this.opacity})`
      : Math.random() > 0.5
        ? `rgba(168,85,247,${this.opacity})`
        : `rgba(6,182,212,${this.opacity})`
    this.life = 0
    this.maxLife = Math.random() * 400 + 250
  }
  update() {
    this.x += this.speedX
    this.y += this.speedY
    this.life++
    if (this.life > this.maxLife || this.x < -100 || this.x > this.w + 100 || this.y < -50 || this.y > this.h + 50) {
      this.reset()
    }
  }
  draw(c) {
    c.font = `${this.size}px 'JetBrains Mono', 'Fira Code', monospace`
    c.fillStyle = this.color
    c.fillText(this.text, this.x, this.y)
  }
}

class BinaryColumn {
  constructor(x, h) {
    this.x = x
    this.h = h
    this.y = Math.random() * h
    this.speed = Math.random() * 1.0 + 0.4
    this.chars = []
    this.length = Math.floor(Math.random() * 14 + 6)
    for (let i = 0; i < this.length; i++) {
      this.chars.push(Math.random() > 0.5 ? '1' : '0')
    }
    this.opacity = Math.random() * 0.14 + 0.05
  }
  update() {
    this.y += this.speed
    if (this.y > this.h + this.length * 16) {
      this.y = -this.length * 16
    }
    if (Math.random() > 0.93) {
      const idx = Math.floor(Math.random() * this.chars.length)
      this.chars[idx] = Math.random() > 0.5 ? '1' : '0'
    }
  }
  draw(c) {
    for (let i = 0; i < this.chars.length; i++) {
      const alpha = (1 - i / this.chars.length) * this.opacity
      c.font = '12px monospace'
      c.fillStyle = `rgba(99,102,241,${alpha})`
      c.fillText(this.chars[i], this.x, this.y - i * 16)
    }
  }
}

class CircuitLine {
  constructor(w, h) {
    this.w = w
    this.h = h
    this.reset()
  }
  reset() {
    this.x = Math.random() * this.w
    this.y = Math.random() * this.h
    this.segments = []
    let cx = this.x, cy = this.y
    const numSegs = Math.floor(Math.random() * 5 + 3)
    for (let i = 0; i < numSegs; i++) {
      const dir = Math.floor(Math.random() * 4)
      const len = Math.floor(Math.random() * 100 + 40)
      let nx = cx, ny = cy
      if (dir === 0) nx += len
      else if (dir === 1) nx -= len
      else if (dir === 2) ny += len
      else ny -= len
      this.segments.push({ x1: cx, y1: cy, x2: nx, y2: ny })
      cx = nx; cy = ny
    }
    this.opacity = Math.random() * 0.16 + 0.06
    this.color = Math.random() > 0.5
      ? `rgba(99,102,241,${this.opacity})`
      : `rgba(6,182,212,${this.opacity})`
    this.life = 0
    this.maxLife = Math.random() * 500 + 350
    this.drawProgress = 0
  }
  update() {
    this.life++
    this.drawProgress = Math.min(1, this.drawProgress + 0.004)
    if (this.life > this.maxLife) this.reset()
  }
  draw(c) {
    c.strokeStyle = this.color
    c.lineWidth = 1
    c.beginPath()
    const totalSegs = this.segments.length
    const drawn = Math.floor(this.drawProgress * totalSegs)
    for (let i = 0; i <= drawn && i < totalSegs; i++) {
      const seg = this.segments[i]
      if (i === 0) c.moveTo(seg.x1, seg.y1)
      c.lineTo(seg.x2, seg.y2)
    }
    c.stroke()
    // Draw dots at junctions
    for (let i = 0; i <= drawn && i < totalSegs; i++) {
      const seg = this.segments[i]
      c.beginPath()
      c.arc(seg.x2, seg.y2, 2, 0, Math.PI * 2)
      c.fillStyle = this.color
      c.fill()
    }
  }
}

let particles = []
let binaryColumns = []
let circuits = []

function init(w, h) {
  particles = Array.from({ length: 70 }, () => new Particle(w, h))
  binaryColumns = Array.from({ length: 25 }, (_, i) => new BinaryColumn(i * (w / 25) + Math.random() * 40, h))
  circuits = Array.from({ length: 18 }, () => new CircuitLine(w, h))
}

function animate() {
  ctx.clearRect(0, 0, W, H)
  circuits.forEach(c => { c.update(); c.draw(ctx) })
  binaryColumns.forEach(b => { b.update(); b.draw(ctx) })
  particles.forEach(p => { p.update(); p.draw(ctx) })
  animFrame = requestAnimationFrame(animate)
}

function resize() {
  if (!canvas.value) return
  W = canvas.value.width = window.innerWidth
  H = canvas.value.height = document.documentElement.scrollHeight
  init(W, H)
}

onMounted(() => {
  ctx = canvas.value.getContext('2d')
  resize()
  animate()
  window.addEventListener('resize', resize)
})

onUnmounted(() => {
  cancelAnimationFrame(animFrame)
  window.removeEventListener('resize', resize)
})
</script>

<template>
  <canvas
    ref="canvas"
    class="absolute top-0 left-0 w-full pointer-events-none"
    style="z-index: 1;"
  ></canvas>
</template>
