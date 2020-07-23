'use strict'


class Queue {
    constructor(collection) {
        this._collection = collection;
    }

    _collection = [];

    get collection() {
        return this._collection;
    }

    get isEmpty() {
        return this._collection.length !== 0;
    }

    get size() {
        return this._collection.length;
    }

    enqueue(newItem) {
        this._collection.push(newItem);
        return this.size;
    }

    dequeue() {
        return this._collection.shift();
    }

    front() {
        return (this._collection)[0];
    }

    [Symbol.iterator]() {
        return new QueueIterator(this._collection);
    }
}

class QueueIterator {
    constructor(array) {
        this._iterator = array[Symbol.iterator]();
    }

    next() {
        return this._iterator.next();
    }
}

class PriorityQueue extends Queue {
    enqueue(newItem, priority) {
        if (newItem instanceof PriorityQueueItem) {
            priority = newItem.priority;
            newItem = newItem.item;
        }
        this._collection.splice(priority, 0, newItem);
        return this.size;
    }
}

class PriorityQueueItem {
    constructor(item, priority) {
        this.item = item;
        this.priority = priority;
    }

}