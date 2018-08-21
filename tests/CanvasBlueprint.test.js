/*
 * This test suite is built for the CanvasBlueprint class.
 */

'use strict';

const CanvasBlueprint = require('../src/CanvasBlueprint.js');
const CanvasSequencer = require('../src/CanvasSequencer.js');
const CanvasAtom = require('../src/CanvasAtom.js');

describe('CanvasBlueprint', () => {
  describe('constructor()', () => {
    test('Constructs a blueprint', () => {
      expect(() => new CanvasBlueprint()).not.toThrow();
      expect(new CanvasBlueprint()).toBeInstanceOf(CanvasBlueprint);
    });
  });

  describe('execute()', () => {
    test('Throws an exception, blueprints cannot be executed!', () => {
      expect(() => new CanvasBlueprint().execute()).toThrow();
    });
  });

  describe('sequencing', () => {
    test('Can define sequences on the blueprint', () => {
      const bp = new CanvasBlueprint();
      expect(() => {
        bp.lineWidth = 2;
        bp.moveTo(42,70);
        bp.fillText('{{x}}',5,6);
        bp.fillText('y',7,8);
        bp.fillRect('{x}','{y}',30,40);
      }).not.toThrow();
    });
  }); 
  
  describe('build(values)', () => {
    const bp = new CanvasBlueprint();
    bp.lineWidth = 2;
    bp.moveTo(42,70);
    bp.fillText('{{x}}',5,6);
    bp.strokeText('y',7,8);
    bp.fillRect('{x}','{y}',30,40);
    bp.font = '2.5em monospace';
    bp.lineWidth = 8;

    const values = { x: 250, y: 99 };
    const ctx = {
      save: jest.fn(),
      restore: jest.fn(),
      fillRect: jest.fn(),
      moveTo: jest.fn(),
      lineWidth: 1,
      font: '16px serif',
      fillText: jest.fn(),
      strokeText: jest.fn(),
    };

    test('Produces a CanvasSequencer', () => {
      expect(bp.build()).toBeInstanceOf(CanvasSequencer);
    });

    test('Produced CanvasSequencer can be executed', () => {
      expect(() => bp.build(values).execute(ctx)).not.toThrow();
    });

    test('Instructions are executed in the correct sequence', () => {
      expect(ctx.lineWidth).toBe(8);
      expect(ctx.moveTo).toHaveBeenCalledTimes(1);
      expect(ctx.fillText).toHaveBeenCalledTimes(1);
      expect(ctx.fillRect).toHaveBeenCalledTimes(1);
      expect(ctx.strokeText).toHaveBeenCalledTimes(1);
      expect(ctx.font).toBe('2.5em monospace');
    });

    test('Non-string arguments are passed through', () => {
      expect(ctx.moveTo).toHaveBeenLastCalledWith(42,70);
    });

    test('Plain string arguments are passed through', () => {
      expect(ctx.strokeText).toHaveBeenLastCalledWith('y',7,8);
    });

    test('Double tag markers at start or end are reduced to single', () => {
      expect(ctx.fillText).toHaveBeenLastCalledWith('{x}',5,6);
    });

    test('Tags are replaced with values passed to build()', () => {
      expect(ctx.fillRect).toHaveBeenLastCalledWith(250,99,30,40);
    });

    test('Can be rebuilt correctly', () => {
      const values = { x: 101, y: 42 };
      expect(() => bp.build(values).execute(ctx)).not.toThrow();
      expect(ctx.fillRect).toHaveBeenLastCalledWith(101,42,30,40);
    });
  });

  describe('toJSON()', () => {
    const bp = new CanvasBlueprint();
    bp.fillStyle = 'blue';
    bp.fillRect(5,'{y}',7,8);

    test('Produces a JSON parsable string', () => {
      const str = bp.toJSON();
      expect(typeof str).toBe('string');
      expect(() => JSON.parse(str)).not.toThrow();
      const obj = JSON.parse(str);
      expect(typeof obj).toBe('object');
    });
  });

  describe('.fromString(str)', () => {
    const bp = new CanvasBlueprint();
    bp.fillStyle = 'blue';
    bp.fillRect(5,'{y}',7,8);
    const str = bp.toJSON();
    
    test('Produces a CanvasBlueprint object', () => {
      const seq = CanvasBlueprint.fromString(str);
      expect(seq).toBeInstanceOf(CanvasBlueprint);
    });

    test('Reproduces the original sequence', () => {
      const seq = CanvasBlueprint.fromString(str);
      expect(seq).toEqual(bp);
    });
  });
});


