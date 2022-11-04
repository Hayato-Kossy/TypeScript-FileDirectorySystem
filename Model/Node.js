"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
var LinkedList_1 = require("./LinkedList");
var Node = /** @class */ (function () {
    function Node(name, attribute, parent, content) {
        if (content === void 0) { content = "No data"; }
        this.name = name;
        this.attribute = attribute;
        this.parent = parent;
        this.content = content;
        this.name = name;
        this.attribute = attribute;
        this.parent = parent;
        this.content = content;
        this.next = null;
        this.list = new LinkedList_1.LinkedList();
    }
    Object.defineProperty(Node.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "setName", {
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "getAttribute", {
        get: function () {
            return this.attribute;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "setAttribute", {
        set: function (attribute) {
            this.attribute = attribute;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "getParent", {
        get: function () {
            return this.parent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "setParent", {
        set: function (parent) {
            this.parent = parent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "getContent", {
        get: function () {
            return this.content;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "setContent", {
        set: function (content) {
            this.content = content;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "getNext", {
        get: function () {
            return this.next;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "setNext", {
        set: function (next) {
            this.next = next;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "getList", {
        get: function () {
            return this.list;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "setList", {
        set: function (list) {
            this.list = list;
        },
        enumerable: false,
        configurable: true
    });
    return Node;
}());
exports.Node = Node;
