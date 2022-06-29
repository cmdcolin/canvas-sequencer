/*
 * Author: Michael van der Kamp
 * Date: July/August, 2018
 *
 * This file provides the definition of the PathSequence class.
 */

'use strict'

const PathAtom = require('./PathAtom.js')

const locals = Object.freeze({
  METHODS: ['rect'],

  PROPERTIES: [
    // "direction",
    // "fillStyle",
    // "filter",
    // "font",
    // "globalAlpha",
    // "globalCompositeOperation",
    // "imageSmoothingEnabled",
    // "imageSmoothingQuality",
    // "lineCap",
    // "lineDashOffset",
    // "lineJoin",
    // "lineWidth",
    // "miterLimit",
    // "shadowBlur",
    // "shadowColor",
    // "shadowOffsetX",
    // "shadowOffsetY",
    // "strokeStyle",
    // "textAlign",
    // "textBaseline",
  ],
})

// Mark properties as intended for internal use.
const symbols = Object.freeze({
  sequence: Symbol.for('sequence'),
  push: Symbol.for('push'),
})

/**
 * A PathSequence is a linear collection of PathAtoms, capable of being
 * executed on a PathRenderingContext2D.
 *
 * @param {PathSequence} [data=null] - An unrevived (i.e. freshly transmitted)
 * PathSequence. If present, the constructor revives the sequence. Note that
 * an already revived PathSequence cannot be used as the argument here.
 */
class PathSequence {
  constructor(data = null) {
    /**
     * The PathAtoms that form the sequence.
     *
     * @private
     * @type {PathAtom[]}
     */
    this[symbols.sequence] = []

    // If data is present, assume it is a PathSequence that needs reviving.
    if (data) this.fromJSON(data)
  }

  /**
   * Revive the sequence from transmitted JSON data.
   *
   * @private
   * @param {PathSequence} [data={}]
   */
  fromJSON(data = { sequence: [] }) {
    data.sequence.forEach(({ type, inst, args }) => {
      this[symbols.push](type, inst, args)
    })
  }

  /**
   * Push a new PathAtom onto the end of the sequence.
   *
   * @private
   * @param {string} type - The type of PathAtom to push.
   * @param {string} inst - The canvas context instruction.
   * @param {*[]} args - The arguments to the canvas context instruction.
   */
  [symbols.push](type, inst, args) {
    this[symbols.sequence].push(new PathAtom(type, inst, args))
  }

  /**
   * Execute the sequence on the given context.
   *
   * @param {PathRenderingContext2D} context
   */
  execute(context) {
    this[symbols.sequence].forEach(a => a.execute(context))
  }

  /**
   * Export a JSON serialized version of the sequence, ready for transmission.
   *
   * @return {PathSequence} In JSON serialized form.
   */
  toJSON() {
    return {
      isPath: true,
      sequence: JSON.parse(JSON.stringify(this[symbols.sequence])),
    }
  }
}

locals.METHODS.forEach(m => {
  Object.defineProperty(PathSequence.prototype, m, {
    value: function pushMethodCall(...args) {
      this[symbols.push](PathAtom.METHOD, m, args)
    },
    writable: false,
    enumerable: true,
    configurable: false,
  })
})

locals.PROPERTIES.forEach(p => {
  Object.defineProperty(PathSequence.prototype, p, {
    get() {
      throw `Invalid canvas sequencer interaction, cannot get ${p}.`
    },
    set(v) {
      this[symbols.push](PathAtom.PROPERTY, p, [v])
    },
    enumerable: true,
    configurable: false,
  })
})

module.exports = PathSequence
