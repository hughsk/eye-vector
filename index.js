var mat4 = require('gl-matrix').mat4
var scratch = new Float32Array(16)

module.exports = getEyeVector

function getEyeVector(viewMatrix, out) {
  if (!out) out = []
  mat4.invert(scratch, viewMatrix)
  out[0] = scratch[12]
  out[1] = scratch[13]
  out[2] = scratch[14]
  return out
}
