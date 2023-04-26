import { v4 as uuid } from 'uuid';
import { Result } from './error';

export type EventID = string;
export type Handle = string;
export type Handler<T> = (...args: T[]) => void | Promise<void>;

export class EventEmitter {
  private eventHandlers: Record<EventID, Record<Handle, Handler<unknown>>> = {};

  private addEventHandler<T>(handle: Handle, eventId: EventID, handler: Handler<T>) {
    if (!this.eventHandlers[eventId]) {
      this.eventHandlers[eventId] = {};
    }
    this.eventHandlers[eventId][handle] = handler as Handler<unknown>;
  }

  private get eventsAsArray() {
    return Object.entries(this.eventHandlers);
  }

  off(handle: Handle, throwIfNotFound = false) {
    const eventHandlers = this.eventsAsArray.find(([, data]) => {
      return Object.keys(data).includes(handle);
    });
    if (eventHandlers) {
      delete this.eventHandlers[eventHandlers[0]][handle];
      return;
    }
    if (throwIfNotFound) {
      throw new Error(`Handle ${handle} is not found`);
    }
  }

  offR(handle: Handle): Result<undefined, Error> {
    const eventHandlers = this.eventsAsArray.find(([, data]) => {
      return Object.keys(data).includes(handle);
    });
    if (eventHandlers) {
      delete this.eventHandlers[eventHandlers[0]][handle];
      return Result.Ok(undefined);
    }
    return Result.Err(new Error(`Handle ${handle} is not found`));
  }

  on<T>(eventId: EventID, handler: Handler<T>): Handle {
    const handle = uuid();
    this.addEventHandler(handle, eventId, handler);
    return handle;
  }

  once<T>(eventId: EventID, handler: Handler<T>): Handle {
    const handle = uuid();
    this.addEventHandler(handle, eventId, (...args: T[]) => {
      const result = handler(...args);
      this.off(handle);
      return result;
    });
    return handle;
  }

  emit<T>(eventId: EventID, ...args: T[]) {
    const handlers = Object.values(this.eventHandlers[eventId] || {}) || [];
    Promise.all(
      handlers.map((handler) => {
        return handler(...args);
      }),
    );
  }

  async emitAndWait<T>(eventId: EventID, ...args: T[]) {
    const handlers = Object.values(this.eventHandlers[eventId] || {}) || [];
    await Promise.all(
      handlers.map((handler) => {
        return handler(...args);
      }),
    );
  }
}
