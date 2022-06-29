/*
 * Author: Michael van der Kamp
 * Date: July/August, 2018
 *
 * This file defines the low level 'PathAtom' for use by a PathSequence.
 *
 * A PathAtom is a unit of execution in a PathSequence. It comes in two
 * flavours: one for describing a method call, one for describing a property
 * assignment.
 */

'use strict'

/**
 * The types of PathAtoms that are available.
 *
 * @enum {string}
 * @readonly
 * @lends PathAtom
 */
const TYPES = {
  /** @const */ METHOD: 'method',
  /** @const */ PROPERTY: 'property',
}

/**
 * Internal common constructor definition for Canvas Atoms.
 *
 * @param {string} inst - The canvas context instruction.
 * @param {*[]} args - The arguments to the instruction.
 */
class Atom {
  constructor(inst, args) {
    /**
     * The canvas context instruction.
     *
     * @private
     * @type {string}
     */
    this.inst = inst

    /**
     * The arguments to the instruction.
     *
     * @private
     * @type {*[]}
     */
    this.args = args
  }
}

/**
 * A MethodPathAtom is used for canvas context methods. The arguments will be
 * treated as an actual array, all of which will be passed to the method when
 * the atom is executed.
 *
 * @extends Atom
 */
class MethodPathAtom extends Atom {
  constructor(inst, args) {
    super(inst, args)

    /**
     * The type of atom.
     *
     * @private
     * @type {string}
     */
    this.type = TYPES.METHOD
  }

  /**
   * Execute the atom on the given context.
   *
   * @param {CanvasRenderingContext2D} context
   */
  execute(context) {
    context[this.inst](...this.args)
  }
}

/**
 * A PropertyPathAtom is used for canvas context properties (a.k.a. fields).
 * Only the first argument will be used, and will be the value assigned to the
 * field.
 *
 * @extends Atom
 */
class PropertyPathAtom extends Atom {
  constructor(inst, args) {
    super(inst, args)
    this.type = TYPES.PROPERTY
  }

  /**
   * Execute the atom on the given context.
   *
   * @param {CanvasRenderingContext2D} context
   */
  execute(context) {
    context[this.inst] = this.args[0]
  }
}

/*
 * This object is for demultiplexing types in the PathAtom constructor.
 * Defined outside the constructor so it doesn't need to be redefined every
 * time a new atom is constructed. Defined outside the class so that it is not
 * externally exposed.
 */
const atomOf = {
  [TYPES.METHOD]: MethodPathAtom,
  [TYPES.PROPERTY]: PropertyPathAtom,
}

/**
 * The exposed PathAtom class. Results in the instantiation of either a
 * MethodPathAtom or a PropertyPathAtom, depending on the given type.
 *
 * @param {string} type - Either PathAtom.METHOD or PathAtom.PROPERTY.
 * @param {string} inst - The canvas context instruction.
 * @param {*[]} args - The arguments to the instruction.
 */
class PathAtom {
  constructor(type, inst, args) {
    return new atomOf[type](inst, args)
  }
}

/*
 * Define the types once locally, but make them available externally as
 * immutable properties on the class.
 */
Object.entries(TYPES).forEach(([p, v]) => {
  Object.defineProperty(PathAtom, p, {
    value: v,
    configurable: false,
    enumerable: true,
    writable: false,
  })
})

module.exports = PathAtom
