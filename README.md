# eye-vector [![experimental](http://hughsk.github.io/stability-badges/dist/experimental.svg)](http://github.com/hughsk/stability-badges) #

Extract the eye vector (camera position) from a view matrix.

## Usage ##

[![eye-vector](https://nodei.co/npm/eye-vector.png?mini=true)](https://nodei.co/npm/eye-vector)

### `require('eye-vector')(view[, out])` ###

Given a camera view matrix `view`, return a 3-dimensional vector with the
current camera position in world space.

You can pass an existing array as `out` to update the position there, if
you'd like to avoid any garbage collection.

## License ##

MIT. See [LICENSE.md](http://github.com/hughsk/eye-vector/blob/master/LICENSE.md) for details.
