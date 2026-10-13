// Small, independent fluid solver: incompressible velocity advects colored dye.
// A bounded grid keeps work independent of display pixel density.
export function createFluidSimulation(width, height) {
  const size = width * height
  let u = new Float32Array(size), v = new Float32Array(size)
  let nextU = new Float32Array(size), nextV = new Float32Array(size)
  let dye = [new Float32Array(size), new Float32Array(size), new Float32Array(size)]
  let nextDye = dye.map(() => new Float32Array(size))
  const divergence = new Float32Array(size)
  let pressure = new Float32Array(size), nextPressure = new Float32Array(size)
  const curl = new Float32Array(size)

  function sample(field, x, y) {
    x = Math.max(0, Math.min(width - 1.001, x))
    y = Math.max(0, Math.min(height - 1.001, y))
    const ix = Math.floor(x), iy = Math.floor(y)
    const fx = x - ix, fy = y - iy, i = iy * width + ix
    return (field[i] * (1 - fx) + field[i + 1] * fx) * (1 - fy)
      + (field[i + width] * (1 - fx) + field[i + width + 1] * fx) * fy
  }

  function splat(x, y, dx, dy, color) {
    const radius = 7.5
    for (let py = Math.max(1, Math.floor(y - 19)); py < Math.min(height - 1, y + 19); py++) {
      for (let px = Math.max(1, Math.floor(x - 19)); px < Math.min(width - 1, x + 19); px++) {
        const distance = Math.hypot(px - x, py - y)
        const weight = Math.exp(-(distance * distance) / (radius * radius))
        // A soft rim leaves translucent folds instead of a solid paint trail.
        const dyeWeight = Math.exp(-(((distance - radius * .65) / (radius * .28)) ** 2)) * .6 + weight * .08
        const i = py * width + px
        u[i] += (Math.max(-2.2, Math.min(2.2, dx * .35)) + (px - x) * .018) * weight
        v[i] += (Math.max(-2.2, Math.min(2.2, dy * .35)) + (py - y) * .018 - .025) * weight
        for (let c = 0; c < 3; c++) dye[c][i] = Math.min(2, dye[c][i] + color[c] * dyeWeight * .12)
      }
    }
  }

  function step(dt) {
    const time = Math.min(dt * 26, .8)
    // Vorticity confinement restores the rolling edges lost on a small grid.
    for (let y = 1; y < height - 1; y++) for (let x = 1; x < width - 1; x++) {
      const i = y * width + x
      curl[i] = (v[i + 1] - v[i - 1] - u[i + width] + u[i - width]) * .5
    }
    for (let y = 1; y < height - 1; y++) for (let x = 1; x < width - 1; x++) {
      const i = y * width + x
      let gx = Math.abs(curl[i + 1]) - Math.abs(curl[i - 1])
      let gy = Math.abs(curl[i + width]) - Math.abs(curl[i - width])
      const length = Math.hypot(gx, gy) + .0001
      gx /= length; gy /= length
      u[i] += gy * curl[i] * .24 * time
      v[i] -= gx * curl[i] * .24 * time
    }
    pressure.fill(0)
    for (let y = 1; y < height - 1; y++) for (let x = 1; x < width - 1; x++) {
      const i = y * width + x
      divergence[i] = (u[i + 1] - u[i - 1] + v[i + width] - v[i - width]) * .5
    }
    for (let iteration = 0; iteration < 12; iteration++) {
      for (let y = 1; y < height - 1; y++) for (let x = 1; x < width - 1; x++) {
        const i = y * width + x
        nextPressure[i] = (pressure[i - 1] + pressure[i + 1] + pressure[i - width] + pressure[i + width] - divergence[i]) * .25
      }
      ;[pressure, nextPressure] = [nextPressure, pressure]
    }
    for (let y = 1; y < height - 1; y++) for (let x = 1; x < width - 1; x++) {
      const i = y * width + x
      u[i] -= (pressure[i + 1] - pressure[i - 1]) * .5
      v[i] -= (pressure[i + width] - pressure[i - width]) * .5
    }
    const fade = Math.pow(.982, time), drag = Math.pow(.978, time)
    for (let y = 1; y < height - 1; y++) for (let x = 1; x < width - 1; x++) {
      const i = y * width + x, sx = x - u[i] * time, sy = y - v[i] * time
      nextU[i] = sample(u, sx, sy) * drag
      nextV[i] = sample(v, sx, sy) * drag
      for (let c = 0; c < 3; c++) nextDye[c][i] = sample(dye[c], sx, sy) * fade
    }
    ;[u, nextU] = [nextU, u]; [v, nextV] = [nextV, v]; [dye, nextDye] = [nextDye, dye]
  }

  function paint(pixels) {
    for (let i = 0; i < size; i++) {
      const density = Math.max(dye[0][i], dye[1][i], dye[2][i])
      const scale = 255 / Math.max(.001, density)
      pixels[i * 4] = dye[0][i] * scale
      pixels[i * 4 + 1] = dye[1][i] * scale
      pixels[i * 4 + 2] = dye[2][i] * scale
      pixels[i * 4 + 3] = Math.min(.22, density * .22) * 255
    }
  }
  return { splat, step, paint }
}
