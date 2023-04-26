import { EventEmitter } from '../src/events';

describe('Events', () => {
  test('should create event emitter', () => {
    expect(new EventEmitter()).toBeInstanceOf(EventEmitter);
  });

  test('should be able to use on event handlers', (done) => {
    const emitter = new EventEmitter();
    let counter = 0;
    emitter.on('event', () => {
      counter += 1;
    });
    emitter.emit('event');
    emitter.emit('event');
    setTimeout(() => {
      expect(counter).toBe(2);
      done();
    }, 100);
  });

  test('should off the event', (done) => {
    const emitter = new EventEmitter();
    const handle = emitter.on('event', () => {
      throw new Error('This should not be thrown');
    });
    emitter.off(handle);
    emitter.emit('event');
    setTimeout(() => {
      done();
    }, 100);
  });

  test('should auto-off if once instead of on', (done) => {
    const emitter = new EventEmitter();
    let counter = 0;
    emitter.once('event', () => {
      counter += 1;
    });
    emitter.emit('event');
    emitter.emit('event');
    setTimeout(() => {
      expect(counter).toBe(1);
      done();
    }, 100);
  });

  test('should wait till events are finished if emitAndWait is used', async () => {
    const emitter = new EventEmitter();
    let counter = 0;
    emitter.on('event', async () => {
      await new Promise<void>((resolve) =>
        setTimeout(() => {
          counter += 1;
          resolve();
        }, 100),
      );
    });
    const promise = emitter.emitAndWait('event');
    expect(counter).toBe(0);
    await promise;
    expect(counter).toBe(1);
  });
});
