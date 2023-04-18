"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/.pnpm/xstate@4.37.1/node_modules/xstate/lib/_virtual/_tslib.js
var require_tslib = __commonJS({
  "node_modules/.pnpm/xstate@4.37.1/node_modules/xstate/lib/_virtual/_tslib.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.__assign = function() {
      exports.__assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return exports.__assign.apply(this, arguments);
    };
    function __rest(s, e) {
      var t = {};
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
          t[p] = s[p];
      if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
            t[p[i]] = s[p[i]];
        }
      return t;
    }
    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = void 0;
            return { value: o && o[i++], done: !o };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    }
    function __spreadArray(to, from, pack) {
      if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar)
              ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
      return to.concat(ar || Array.prototype.slice.call(from));
    }
    exports.__read = __read;
    exports.__rest = __rest;
    exports.__spreadArray = __spreadArray;
    exports.__values = __values;
  }
});

// node_modules/.pnpm/xstate@4.37.1/node_modules/xstate/lib/types.js
var require_types = __commonJS({
  "node_modules/.pnpm/xstate@4.37.1/node_modules/xstate/lib/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ActionTypes = void 0;
    (function(ActionTypes) {
      ActionTypes["Start"] = "xstate.start";
      ActionTypes["Stop"] = "xstate.stop";
      ActionTypes["Raise"] = "xstate.raise";
      ActionTypes["Send"] = "xstate.send";
      ActionTypes["Cancel"] = "xstate.cancel";
      ActionTypes["NullEvent"] = "";
      ActionTypes["Assign"] = "xstate.assign";
      ActionTypes["After"] = "xstate.after";
      ActionTypes["DoneState"] = "done.state";
      ActionTypes["DoneInvoke"] = "done.invoke";
      ActionTypes["Log"] = "xstate.log";
      ActionTypes["Init"] = "xstate.init";
      ActionTypes["Invoke"] = "xstate.invoke";
      ActionTypes["ErrorExecution"] = "error.execution";
      ActionTypes["ErrorCommunication"] = "error.communication";
      ActionTypes["ErrorPlatform"] = "error.platform";
      ActionTypes["ErrorCustom"] = "xstate.error";
      ActionTypes["Update"] = "xstate.update";
      ActionTypes["Pure"] = "xstate.pure";
      ActionTypes["Choose"] = "xstate.choose";
    })(exports.ActionTypes || (exports.ActionTypes = {}));
    exports.SpecialTargets = void 0;
    (function(SpecialTargets) {
      SpecialTargets["Parent"] = "#_parent";
      SpecialTargets["Internal"] = "#_internal";
    })(exports.SpecialTargets || (exports.SpecialTargets = {}));
  }
});

// node_modules/.pnpm/xstate@4.37.1/node_modules/xstate/lib/actionTypes.js
var require_actionTypes = __commonJS({
  "node_modules/.pnpm/xstate@4.37.1/node_modules/xstate/lib/actionTypes.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var types = require_types();
    var start = types.ActionTypes.Start;
    var stop = types.ActionTypes.Stop;
    var raise = types.ActionTypes.Raise;
    var send = types.ActionTypes.Send;
    var cancel = types.ActionTypes.Cancel;
    var nullEvent = types.ActionTypes.NullEvent;
    var assign2 = types.ActionTypes.Assign;
    var after = types.ActionTypes.After;
    var doneState = types.ActionTypes.DoneState;
    var log = types.ActionTypes.Log;
    var init = types.ActionTypes.Init;
    var invoke = types.ActionTypes.Invoke;
    var errorExecution = types.ActionTypes.ErrorExecution;
    var errorPlatform = types.ActionTypes.ErrorPlatform;
    var error = types.ActionTypes.ErrorCustom;
    var update = types.ActionTypes.Update;
    var choose = types.ActionTypes.Choose;
    var pure = types.ActionTypes.Pure;
    exports.after = after;
    exports.assign = assign2;
    exports.cancel = cancel;
    exports.choose = choose;
    exports.doneState = doneState;
    exports.error = error;
    exports.errorExecution = errorExecution;
    exports.errorPlatform = errorPlatform;
    exports.init = init;
    exports.invoke = invoke;
    exports.log = log;
    exports.nullEvent = nullEvent;
    exports.pure = pure;
    exports.raise = raise;
    exports.send = send;
    exports.start = start;
    exports.stop = stop;
    exports.update = update;
  }
});

// node_modules/.pnpm/xstate@4.37.1/node_modules/xstate/lib/constants.js
var require_constants = __commonJS({
  "node_modules/.pnpm/xstate@4.37.1/node_modules/xstate/lib/constants.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var STATE_DELIMITER = ".";
    var EMPTY_ACTIVITY_MAP = {};
    var DEFAULT_GUARD_TYPE = "xstate.guard";
    var TARGETLESS_KEY = "";
    exports.DEFAULT_GUARD_TYPE = DEFAULT_GUARD_TYPE;
    exports.EMPTY_ACTIVITY_MAP = EMPTY_ACTIVITY_MAP;
    exports.STATE_DELIMITER = STATE_DELIMITER;
    exports.TARGETLESS_KEY = TARGETLESS_KEY;
  }
});

// node_modules/.pnpm/xstate@4.37.1/node_modules/xstate/lib/environment.js
var require_environment = __commonJS({
  "node_modules/.pnpm/xstate@4.37.1/node_modules/xstate/lib/environment.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IS_PRODUCTION = process.env.NODE_ENV === "production";
    exports.IS_PRODUCTION = IS_PRODUCTION;
  }
});

// node_modules/.pnpm/xstate@4.37.1/node_modules/xstate/lib/utils.js
var require_utils = __commonJS({
  "node_modules/.pnpm/xstate@4.37.1/node_modules/xstate/lib/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var _tslib = require_tslib();
    var types = require_types();
    var actionTypes = require_actionTypes();
    var constants = require_constants();
    var environment = require_environment();
    var _a;
    function keys(value) {
      return Object.keys(value);
    }
    function matchesState(parentStateId, childStateId, delimiter) {
      if (delimiter === void 0) {
        delimiter = constants.STATE_DELIMITER;
      }
      var parentStateValue = toStateValue(parentStateId, delimiter);
      var childStateValue = toStateValue(childStateId, delimiter);
      if (isString(childStateValue)) {
        if (isString(parentStateValue)) {
          return childStateValue === parentStateValue;
        }
        return false;
      }
      if (isString(parentStateValue)) {
        return parentStateValue in childStateValue;
      }
      return Object.keys(parentStateValue).every(function(key) {
        if (!(key in childStateValue)) {
          return false;
        }
        return matchesState(parentStateValue[key], childStateValue[key]);
      });
    }
    function getEventType(event2) {
      try {
        return isString(event2) || typeof event2 === "number" ? "".concat(event2) : event2.type;
      } catch (e) {
        throw new Error("Events must be strings or objects with a string event.type property.");
      }
    }
    function getActionType(action) {
      try {
        return isString(action) || typeof action === "number" ? "".concat(action) : isFunction(action) ? action.name : action.type;
      } catch (e) {
        throw new Error("Actions must be strings or objects with a string action.type property.");
      }
    }
    function toStatePath(stateId, delimiter) {
      try {
        if (isArray(stateId)) {
          return stateId;
        }
        return stateId.toString().split(delimiter);
      } catch (e) {
        throw new Error("'".concat(stateId, "' is not a valid state path."));
      }
    }
    function isStateLike(state) {
      return typeof state === "object" && "value" in state && "context" in state && "event" in state && "_event" in state;
    }
    function toStateValue(stateValue, delimiter) {
      if (isStateLike(stateValue)) {
        return stateValue.value;
      }
      if (isArray(stateValue)) {
        return pathToStateValue(stateValue);
      }
      if (typeof stateValue !== "string") {
        return stateValue;
      }
      var statePath = toStatePath(stateValue, delimiter);
      return pathToStateValue(statePath);
    }
    function pathToStateValue(statePath) {
      if (statePath.length === 1) {
        return statePath[0];
      }
      var value = {};
      var marker = value;
      for (var i = 0; i < statePath.length - 1; i++) {
        if (i === statePath.length - 2) {
          marker[statePath[i]] = statePath[i + 1];
        } else {
          marker[statePath[i]] = {};
          marker = marker[statePath[i]];
        }
      }
      return value;
    }
    function mapValues(collection, iteratee) {
      var result = {};
      var collectionKeys = Object.keys(collection);
      for (var i = 0; i < collectionKeys.length; i++) {
        var key = collectionKeys[i];
        result[key] = iteratee(collection[key], key, collection, i);
      }
      return result;
    }
    function mapFilterValues(collection, iteratee, predicate) {
      var e_1, _a2;
      var result = {};
      try {
        for (var _b = _tslib.__values(Object.keys(collection)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var key = _c.value;
          var item = collection[key];
          if (!predicate(item)) {
            continue;
          }
          result[key] = iteratee(item, key, collection);
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a2 = _b.return))
            _a2.call(_b);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      return result;
    }
    var path = function(props) {
      return function(object) {
        var e_2, _a2;
        var result = object;
        try {
          for (var props_1 = _tslib.__values(props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
            var prop = props_1_1.value;
            result = result[prop];
          }
        } catch (e_2_1) {
          e_2 = {
            error: e_2_1
          };
        } finally {
          try {
            if (props_1_1 && !props_1_1.done && (_a2 = props_1.return))
              _a2.call(props_1);
          } finally {
            if (e_2)
              throw e_2.error;
          }
        }
        return result;
      };
    };
    function nestedPath(props, accessorProp) {
      return function(object) {
        var e_3, _a2;
        var result = object;
        try {
          for (var props_2 = _tslib.__values(props), props_2_1 = props_2.next(); !props_2_1.done; props_2_1 = props_2.next()) {
            var prop = props_2_1.value;
            result = result[accessorProp][prop];
          }
        } catch (e_3_1) {
          e_3 = {
            error: e_3_1
          };
        } finally {
          try {
            if (props_2_1 && !props_2_1.done && (_a2 = props_2.return))
              _a2.call(props_2);
          } finally {
            if (e_3)
              throw e_3.error;
          }
        }
        return result;
      };
    }
    function toStatePaths(stateValue) {
      if (!stateValue) {
        return [[]];
      }
      if (isString(stateValue)) {
        return [[stateValue]];
      }
      var result = flatten(Object.keys(stateValue).map(function(key) {
        var subStateValue = stateValue[key];
        if (typeof subStateValue !== "string" && (!subStateValue || !Object.keys(subStateValue).length)) {
          return [[key]];
        }
        return toStatePaths(stateValue[key]).map(function(subPath) {
          return [key].concat(subPath);
        });
      }));
      return result;
    }
    function pathsToStateValue(paths) {
      var e_4, _a2;
      var result = {};
      if (paths && paths.length === 1 && paths[0].length === 1) {
        return paths[0][0];
      }
      try {
        for (var paths_1 = _tslib.__values(paths), paths_1_1 = paths_1.next(); !paths_1_1.done; paths_1_1 = paths_1.next()) {
          var currentPath = paths_1_1.value;
          var marker = result;
          for (var i = 0; i < currentPath.length; i++) {
            var subPath = currentPath[i];
            if (i === currentPath.length - 2) {
              marker[subPath] = currentPath[i + 1];
              break;
            }
            marker[subPath] = marker[subPath] || {};
            marker = marker[subPath];
          }
        }
      } catch (e_4_1) {
        e_4 = {
          error: e_4_1
        };
      } finally {
        try {
          if (paths_1_1 && !paths_1_1.done && (_a2 = paths_1.return))
            _a2.call(paths_1);
        } finally {
          if (e_4)
            throw e_4.error;
        }
      }
      return result;
    }
    function flatten(array) {
      var _a2;
      return (_a2 = []).concat.apply(_a2, _tslib.__spreadArray([], _tslib.__read(array), false));
    }
    function toArrayStrict(value) {
      if (isArray(value)) {
        return value;
      }
      return [value];
    }
    function toArray(value) {
      if (value === void 0) {
        return [];
      }
      return toArrayStrict(value);
    }
    function mapContext(mapper, context, _event) {
      var e_5, _a2;
      if (isFunction(mapper)) {
        return mapper(context, _event.data);
      }
      var result = {};
      try {
        for (var _b = _tslib.__values(Object.keys(mapper)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var key = _c.value;
          var subMapper = mapper[key];
          if (isFunction(subMapper)) {
            result[key] = subMapper(context, _event.data);
          } else {
            result[key] = subMapper;
          }
        }
      } catch (e_5_1) {
        e_5 = {
          error: e_5_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a2 = _b.return))
            _a2.call(_b);
        } finally {
          if (e_5)
            throw e_5.error;
        }
      }
      return result;
    }
    function isBuiltInEvent(eventType) {
      return /^(done|error)\./.test(eventType);
    }
    function isPromiseLike(value) {
      if (value instanceof Promise) {
        return true;
      }
      if (value !== null && (isFunction(value) || typeof value === "object") && isFunction(value.then)) {
        return true;
      }
      return false;
    }
    function isBehavior(value) {
      return value !== null && typeof value === "object" && "transition" in value && typeof value.transition === "function";
    }
    function partition(items, predicate) {
      var e_6, _a2;
      var _b = _tslib.__read([[], []], 2), truthy = _b[0], falsy = _b[1];
      try {
        for (var items_1 = _tslib.__values(items), items_1_1 = items_1.next(); !items_1_1.done; items_1_1 = items_1.next()) {
          var item = items_1_1.value;
          if (predicate(item)) {
            truthy.push(item);
          } else {
            falsy.push(item);
          }
        }
      } catch (e_6_1) {
        e_6 = {
          error: e_6_1
        };
      } finally {
        try {
          if (items_1_1 && !items_1_1.done && (_a2 = items_1.return))
            _a2.call(items_1);
        } finally {
          if (e_6)
            throw e_6.error;
        }
      }
      return [truthy, falsy];
    }
    function updateHistoryStates(hist, stateValue) {
      return mapValues(hist.states, function(subHist, key) {
        if (!subHist) {
          return void 0;
        }
        var subStateValue = (isString(stateValue) ? void 0 : stateValue[key]) || (subHist ? subHist.current : void 0);
        if (!subStateValue) {
          return void 0;
        }
        return {
          current: subStateValue,
          states: updateHistoryStates(subHist, subStateValue)
        };
      });
    }
    function updateHistoryValue(hist, stateValue) {
      return {
        current: stateValue,
        states: updateHistoryStates(hist, stateValue)
      };
    }
    function updateContext(context, _event, assignActions, state) {
      if (!environment.IS_PRODUCTION) {
        exports.warn(!!context, "Attempting to update undefined context");
      }
      var updatedContext = context ? assignActions.reduce(function(acc, assignAction) {
        var e_7, _a2;
        var assignment = assignAction.assignment;
        var meta = {
          state,
          action: assignAction,
          _event
        };
        var partialUpdate = {};
        if (isFunction(assignment)) {
          partialUpdate = assignment(acc, _event.data, meta);
        } else {
          try {
            for (var _b = _tslib.__values(Object.keys(assignment)), _c = _b.next(); !_c.done; _c = _b.next()) {
              var key = _c.value;
              var propAssignment = assignment[key];
              partialUpdate[key] = isFunction(propAssignment) ? propAssignment(acc, _event.data, meta) : propAssignment;
            }
          } catch (e_7_1) {
            e_7 = {
              error: e_7_1
            };
          } finally {
            try {
              if (_c && !_c.done && (_a2 = _b.return))
                _a2.call(_b);
            } finally {
              if (e_7)
                throw e_7.error;
            }
          }
        }
        return Object.assign({}, acc, partialUpdate);
      }, context) : context;
      return updatedContext;
    }
    exports.warn = function() {
    };
    if (!environment.IS_PRODUCTION) {
      exports.warn = function(condition, message) {
        var error = condition instanceof Error ? condition : void 0;
        if (!error && condition) {
          return;
        }
        if (console !== void 0) {
          var args = ["Warning: ".concat(message)];
          if (error) {
            args.push(error);
          }
          console.warn.apply(console, args);
        }
      };
    }
    function isArray(value) {
      return Array.isArray(value);
    }
    function isFunction(value) {
      return typeof value === "function";
    }
    function isString(value) {
      return typeof value === "string";
    }
    function toGuard(condition, guardMap) {
      if (!condition) {
        return void 0;
      }
      if (isString(condition)) {
        return {
          type: constants.DEFAULT_GUARD_TYPE,
          name: condition,
          predicate: guardMap ? guardMap[condition] : void 0
        };
      }
      if (isFunction(condition)) {
        return {
          type: constants.DEFAULT_GUARD_TYPE,
          name: condition.name,
          predicate: condition
        };
      }
      return condition;
    }
    function isObservable(value) {
      try {
        return "subscribe" in value && isFunction(value.subscribe);
      } catch (e) {
        return false;
      }
    }
    var symbolObservable = /* @__PURE__ */ function() {
      return typeof Symbol === "function" && Symbol.observable || "@@observable";
    }();
    var interopSymbols = (_a = {}, _a[symbolObservable] = function() {
      return this;
    }, _a[Symbol.observable] = function() {
      return this;
    }, _a);
    function isMachine(value) {
      return !!value && "__xstatenode" in value;
    }
    function isActor(value) {
      return !!value && typeof value.send === "function";
    }
    var uniqueId = /* @__PURE__ */ function() {
      var currentId = 0;
      return function() {
        currentId++;
        return currentId.toString(16);
      };
    }();
    function toEventObject(event2, payload) {
      if (isString(event2) || typeof event2 === "number") {
        return _tslib.__assign({
          type: event2
        }, payload);
      }
      return event2;
    }
    function toSCXMLEvent(event2, scxmlEvent) {
      if (!isString(event2) && "$$type" in event2 && event2.$$type === "scxml") {
        return event2;
      }
      var eventObject = toEventObject(event2);
      return _tslib.__assign({
        name: eventObject.type,
        data: eventObject,
        $$type: "scxml",
        type: "external"
      }, scxmlEvent);
    }
    function toTransitionConfigArray(event2, configLike) {
      var transitions = toArrayStrict(configLike).map(function(transitionLike) {
        if (typeof transitionLike === "undefined" || typeof transitionLike === "string" || isMachine(transitionLike)) {
          return {
            target: transitionLike,
            event: event2
          };
        }
        return _tslib.__assign(_tslib.__assign({}, transitionLike), {
          event: event2
        });
      });
      return transitions;
    }
    function normalizeTarget(target) {
      if (target === void 0 || target === constants.TARGETLESS_KEY) {
        return void 0;
      }
      return toArray(target);
    }
    function reportUnhandledExceptionOnInvocation(originalError, currentError, id) {
      if (!environment.IS_PRODUCTION) {
        var originalStackTrace = originalError.stack ? " Stacktrace was '".concat(originalError.stack, "'") : "";
        if (originalError === currentError) {
          console.error("Missing onError handler for invocation '".concat(id, "', error was '").concat(originalError, "'.").concat(originalStackTrace));
        } else {
          var stackTrace = currentError.stack ? " Stacktrace was '".concat(currentError.stack, "'") : "";
          console.error("Missing onError handler and/or unhandled exception/promise rejection for invocation '".concat(id, "'. ") + "Original error: '".concat(originalError, "'. ").concat(originalStackTrace, " Current error is '").concat(currentError, "'.").concat(stackTrace));
        }
      }
    }
    function evaluateGuard(machine2, guard, context, _event, state) {
      var guards = machine2.options.guards;
      var guardMeta = {
        state,
        cond: guard,
        _event
      };
      if (guard.type === constants.DEFAULT_GUARD_TYPE) {
        return ((guards === null || guards === void 0 ? void 0 : guards[guard.name]) || guard.predicate)(context, _event.data, guardMeta);
      }
      var condFn = guards === null || guards === void 0 ? void 0 : guards[guard.type];
      if (!condFn) {
        throw new Error("Guard '".concat(guard.type, "' is not implemented on machine '").concat(machine2.id, "'."));
      }
      return condFn(context, _event.data, guardMeta);
    }
    function toInvokeSource(src) {
      if (typeof src === "string") {
        return {
          type: src
        };
      }
      return src;
    }
    function toObserver(nextHandler, errorHandler, completionHandler) {
      var noop = function() {
      };
      var isObserver = typeof nextHandler === "object";
      var self2 = isObserver ? nextHandler : null;
      return {
        next: ((isObserver ? nextHandler.next : nextHandler) || noop).bind(self2),
        error: ((isObserver ? nextHandler.error : errorHandler) || noop).bind(self2),
        complete: ((isObserver ? nextHandler.complete : completionHandler) || noop).bind(self2)
      };
    }
    function createInvokeId(stateNodeId, index) {
      return "".concat(stateNodeId, ":invocation[").concat(index, "]");
    }
    function isRaisableAction(action) {
      return (action.type === actionTypes.raise || action.type === actionTypes.send && action.to === types.SpecialTargets.Internal) && typeof action.delay !== "number";
    }
    exports.createInvokeId = createInvokeId;
    exports.evaluateGuard = evaluateGuard;
    exports.flatten = flatten;
    exports.getActionType = getActionType;
    exports.getEventType = getEventType;
    exports.interopSymbols = interopSymbols;
    exports.isActor = isActor;
    exports.isArray = isArray;
    exports.isBehavior = isBehavior;
    exports.isBuiltInEvent = isBuiltInEvent;
    exports.isFunction = isFunction;
    exports.isMachine = isMachine;
    exports.isObservable = isObservable;
    exports.isPromiseLike = isPromiseLike;
    exports.isRaisableAction = isRaisableAction;
    exports.isStateLike = isStateLike;
    exports.isString = isString;
    exports.keys = keys;
    exports.mapContext = mapContext;
    exports.mapFilterValues = mapFilterValues;
    exports.mapValues = mapValues;
    exports.matchesState = matchesState;
    exports.nestedPath = nestedPath;
    exports.normalizeTarget = normalizeTarget;
    exports.partition = partition;
    exports.path = path;
    exports.pathToStateValue = pathToStateValue;
    exports.pathsToStateValue = pathsToStateValue;
    exports.reportUnhandledExceptionOnInvocation = reportUnhandledExceptionOnInvocation;
    exports.symbolObservable = symbolObservable;
    exports.toArray = toArray;
    exports.toArrayStrict = toArrayStrict;
    exports.toEventObject = toEventObject;
    exports.toGuard = toGuard;
    exports.toInvokeSource = toInvokeSource;
    exports.toObserver = toObserver;
    exports.toSCXMLEvent = toSCXMLEvent;
    exports.toStatePath = toStatePath;
    exports.toStatePaths = toStatePaths;
    exports.toStateValue = toStateValue;
    exports.toTransitionConfigArray = toTransitionConfigArray;
    exports.uniqueId = uniqueId;
    exports.updateContext = updateContext;
    exports.updateHistoryStates = updateHistoryStates;
    exports.updateHistoryValue = updateHistoryValue;
  }
});

// node_modules/.pnpm/xstate@4.37.1/node_modules/xstate/lib/actions.js
var require_actions = __commonJS({
  "node_modules/.pnpm/xstate@4.37.1/node_modules/xstate/lib/actions.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var _tslib = require_tslib();
    var types = require_types();
    var actionTypes = require_actionTypes();
    var utils = require_utils();
    var environment = require_environment();
    var initEvent = /* @__PURE__ */ utils.toSCXMLEvent({
      type: actionTypes.init
    });
    function getActionFunction(actionType, actionFunctionMap) {
      return actionFunctionMap ? actionFunctionMap[actionType] || void 0 : void 0;
    }
    function toActionObject(action, actionFunctionMap) {
      var actionObject;
      if (utils.isString(action) || typeof action === "number") {
        var exec = getActionFunction(action, actionFunctionMap);
        if (utils.isFunction(exec)) {
          actionObject = {
            type: action,
            exec
          };
        } else if (exec) {
          actionObject = exec;
        } else {
          actionObject = {
            type: action,
            exec: void 0
          };
        }
      } else if (utils.isFunction(action)) {
        actionObject = {
          // Convert action to string if unnamed
          type: action.name || action.toString(),
          exec: action
        };
      } else {
        var exec = getActionFunction(action.type, actionFunctionMap);
        if (utils.isFunction(exec)) {
          actionObject = _tslib.__assign(_tslib.__assign({}, action), {
            exec
          });
        } else if (exec) {
          var actionType = exec.type || action.type;
          actionObject = _tslib.__assign(_tslib.__assign(_tslib.__assign({}, exec), action), {
            type: actionType
          });
        } else {
          actionObject = action;
        }
      }
      return actionObject;
    }
    var toActionObjects = function(action, actionFunctionMap) {
      if (!action) {
        return [];
      }
      var actions = utils.isArray(action) ? action : [action];
      return actions.map(function(subAction) {
        return toActionObject(subAction, actionFunctionMap);
      });
    };
    function toActivityDefinition(action) {
      var actionObject = toActionObject(action);
      return _tslib.__assign(_tslib.__assign({
        id: utils.isString(action) ? action : actionObject.id
      }, actionObject), {
        type: actionObject.type
      });
    }
    function raise(event2, options) {
      return {
        type: actionTypes.raise,
        event: typeof event2 === "function" ? event2 : utils.toEventObject(event2),
        delay: options ? options.delay : void 0,
        id: options === null || options === void 0 ? void 0 : options.id
      };
    }
    function resolveRaise(action, ctx, _event, delaysMap) {
      var meta = {
        _event
      };
      var resolvedEvent = utils.toSCXMLEvent(utils.isFunction(action.event) ? action.event(ctx, _event.data, meta) : action.event);
      var resolvedDelay;
      if (utils.isString(action.delay)) {
        var configDelay = delaysMap && delaysMap[action.delay];
        resolvedDelay = utils.isFunction(configDelay) ? configDelay(ctx, _event.data, meta) : configDelay;
      } else {
        resolvedDelay = utils.isFunction(action.delay) ? action.delay(ctx, _event.data, meta) : action.delay;
      }
      return _tslib.__assign(_tslib.__assign({}, action), {
        type: actionTypes.raise,
        _event: resolvedEvent,
        delay: resolvedDelay
      });
    }
    function send(event2, options) {
      return {
        to: options ? options.to : void 0,
        type: actionTypes.send,
        event: utils.isFunction(event2) ? event2 : utils.toEventObject(event2),
        delay: options ? options.delay : void 0,
        // TODO: don't auto-generate IDs here like that
        // there is too big chance of the ID collision
        id: options && options.id !== void 0 ? options.id : utils.isFunction(event2) ? event2.name : utils.getEventType(event2)
      };
    }
    function resolveSend(action, ctx, _event, delaysMap) {
      var meta = {
        _event
      };
      var resolvedEvent = utils.toSCXMLEvent(utils.isFunction(action.event) ? action.event(ctx, _event.data, meta) : action.event);
      var resolvedDelay;
      if (utils.isString(action.delay)) {
        var configDelay = delaysMap && delaysMap[action.delay];
        resolvedDelay = utils.isFunction(configDelay) ? configDelay(ctx, _event.data, meta) : configDelay;
      } else {
        resolvedDelay = utils.isFunction(action.delay) ? action.delay(ctx, _event.data, meta) : action.delay;
      }
      var resolvedTarget = utils.isFunction(action.to) ? action.to(ctx, _event.data, meta) : action.to;
      return _tslib.__assign(_tslib.__assign({}, action), {
        to: resolvedTarget,
        _event: resolvedEvent,
        event: resolvedEvent.data,
        delay: resolvedDelay
      });
    }
    function sendParent(event2, options) {
      return send(event2, _tslib.__assign(_tslib.__assign({}, options), {
        to: types.SpecialTargets.Parent
      }));
    }
    function sendTo(actor, event2, options) {
      return send(event2, _tslib.__assign(_tslib.__assign({}, options), {
        to: actor
      }));
    }
    function sendUpdate() {
      return sendParent(actionTypes.update);
    }
    function respond(event2, options) {
      return send(event2, _tslib.__assign(_tslib.__assign({}, options), {
        to: function(_, __, _a) {
          var _event = _a._event;
          return _event.origin;
        }
      }));
    }
    var defaultLogExpr = function(context, event2) {
      return {
        context,
        event: event2
      };
    };
    function log(expr, label) {
      if (expr === void 0) {
        expr = defaultLogExpr;
      }
      return {
        type: actionTypes.log,
        label,
        expr
      };
    }
    var resolveLog = function(action, ctx, _event) {
      return _tslib.__assign(_tslib.__assign({}, action), {
        value: utils.isString(action.expr) ? action.expr : action.expr(ctx, _event.data, {
          _event
        })
      });
    };
    var cancel = function(sendId) {
      return {
        type: actionTypes.cancel,
        sendId
      };
    };
    function start(activity) {
      var activityDef = toActivityDefinition(activity);
      return {
        type: types.ActionTypes.Start,
        activity: activityDef,
        exec: void 0
      };
    }
    function stop(actorRef) {
      var activity = utils.isFunction(actorRef) ? actorRef : toActivityDefinition(actorRef);
      return {
        type: types.ActionTypes.Stop,
        activity,
        exec: void 0
      };
    }
    function resolveStop(action, context, _event) {
      var actorRefOrString = utils.isFunction(action.activity) ? action.activity(context, _event.data) : action.activity;
      var resolvedActorRef = typeof actorRefOrString === "string" ? {
        id: actorRefOrString
      } : actorRefOrString;
      var actionObject = {
        type: types.ActionTypes.Stop,
        activity: resolvedActorRef
      };
      return actionObject;
    }
    var assign2 = function(assignment) {
      return {
        type: actionTypes.assign,
        assignment
      };
    };
    function isActionObject(action) {
      return typeof action === "object" && "type" in action;
    }
    function after(delayRef, id) {
      var idSuffix = id ? "#".concat(id) : "";
      return "".concat(types.ActionTypes.After, "(").concat(delayRef, ")").concat(idSuffix);
    }
    function done(id, data) {
      var type = "".concat(types.ActionTypes.DoneState, ".").concat(id);
      var eventObject = {
        type,
        data
      };
      eventObject.toString = function() {
        return type;
      };
      return eventObject;
    }
    function doneInvoke(id, data) {
      var type = "".concat(types.ActionTypes.DoneInvoke, ".").concat(id);
      var eventObject = {
        type,
        data
      };
      eventObject.toString = function() {
        return type;
      };
      return eventObject;
    }
    function error(id, data) {
      var type = "".concat(types.ActionTypes.ErrorPlatform, ".").concat(id);
      var eventObject = {
        type,
        data
      };
      eventObject.toString = function() {
        return type;
      };
      return eventObject;
    }
    function pure(getActions) {
      return {
        type: types.ActionTypes.Pure,
        get: getActions
      };
    }
    function forwardTo(target, options) {
      if (!environment.IS_PRODUCTION && (!target || typeof target === "function")) {
        var originalTarget_1 = target;
        target = function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          var resolvedTarget = typeof originalTarget_1 === "function" ? originalTarget_1.apply(void 0, _tslib.__spreadArray([], _tslib.__read(args), false)) : originalTarget_1;
          if (!resolvedTarget) {
            throw new Error("Attempted to forward event to undefined actor. This risks an infinite loop in the sender.");
          }
          return resolvedTarget;
        };
      }
      return send(function(_, event2) {
        return event2;
      }, _tslib.__assign(_tslib.__assign({}, options), {
        to: target
      }));
    }
    function escalate(errorData, options) {
      return sendParent(function(context, event2, meta) {
        return {
          type: actionTypes.error,
          data: utils.isFunction(errorData) ? errorData(context, event2, meta) : errorData
        };
      }, _tslib.__assign(_tslib.__assign({}, options), {
        to: types.SpecialTargets.Parent
      }));
    }
    function choose(conds) {
      return {
        type: types.ActionTypes.Choose,
        conds
      };
    }
    var pluckAssigns = function(actionBlocks) {
      var e_1, _a;
      var assignActions = [];
      try {
        for (var actionBlocks_1 = _tslib.__values(actionBlocks), actionBlocks_1_1 = actionBlocks_1.next(); !actionBlocks_1_1.done; actionBlocks_1_1 = actionBlocks_1.next()) {
          var block = actionBlocks_1_1.value;
          var i = 0;
          while (i < block.actions.length) {
            if (block.actions[i].type === actionTypes.assign) {
              assignActions.push(block.actions[i]);
              block.actions.splice(i, 1);
              continue;
            }
            i++;
          }
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (actionBlocks_1_1 && !actionBlocks_1_1.done && (_a = actionBlocks_1.return))
            _a.call(actionBlocks_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      return assignActions;
    };
    function resolveActions(machine2, currentState, currentContext, _event, actionBlocks, predictableExec, preserveActionOrder) {
      if (preserveActionOrder === void 0) {
        preserveActionOrder = false;
      }
      var assignActions = preserveActionOrder ? [] : pluckAssigns(actionBlocks);
      var updatedContext = assignActions.length ? utils.updateContext(currentContext, _event, assignActions, currentState) : currentContext;
      var preservedContexts = preserveActionOrder ? [currentContext] : void 0;
      var deferredToBlockEnd = [];
      function handleAction(blockType, actionObject) {
        var _a;
        switch (actionObject.type) {
          case actionTypes.raise: {
            var raisedAction = resolveRaise(actionObject, updatedContext, _event, machine2.options.delays);
            if (predictableExec && typeof raisedAction.delay === "number") {
              predictableExec(raisedAction, updatedContext, _event);
            }
            return raisedAction;
          }
          case actionTypes.send:
            var sendAction = resolveSend(actionObject, updatedContext, _event, machine2.options.delays);
            if (!environment.IS_PRODUCTION) {
              var configuredDelay = actionObject.delay;
              utils.warn(
                !utils.isString(configuredDelay) || typeof sendAction.delay === "number",
                // tslint:disable-next-line:max-line-length
                "No delay reference for delay expression '".concat(configuredDelay, "' was found on machine '").concat(machine2.id, "'")
              );
            }
            if (predictableExec && sendAction.to !== types.SpecialTargets.Internal) {
              if (blockType === "entry") {
                deferredToBlockEnd.push(sendAction);
              } else {
                predictableExec(sendAction, updatedContext, _event);
              }
            }
            return sendAction;
          case actionTypes.log: {
            var resolved = resolveLog(actionObject, updatedContext, _event);
            predictableExec === null || predictableExec === void 0 ? void 0 : predictableExec(resolved, updatedContext, _event);
            return resolved;
          }
          case actionTypes.choose: {
            var chooseAction = actionObject;
            var matchedActions = (_a = chooseAction.conds.find(function(condition) {
              var guard = utils.toGuard(condition.cond, machine2.options.guards);
              return !guard || utils.evaluateGuard(machine2, guard, updatedContext, _event, !predictableExec ? currentState : void 0);
            })) === null || _a === void 0 ? void 0 : _a.actions;
            if (!matchedActions) {
              return [];
            }
            var _b = _tslib.__read(resolveActions(machine2, currentState, updatedContext, _event, [{
              type: blockType,
              actions: toActionObjects(utils.toArray(matchedActions), machine2.options.actions)
            }], predictableExec, preserveActionOrder), 2), resolvedActionsFromChoose = _b[0], resolvedContextFromChoose = _b[1];
            updatedContext = resolvedContextFromChoose;
            preservedContexts === null || preservedContexts === void 0 ? void 0 : preservedContexts.push(updatedContext);
            return resolvedActionsFromChoose;
          }
          case actionTypes.pure: {
            var matchedActions = actionObject.get(updatedContext, _event.data);
            if (!matchedActions) {
              return [];
            }
            var _c = _tslib.__read(resolveActions(machine2, currentState, updatedContext, _event, [{
              type: blockType,
              actions: toActionObjects(utils.toArray(matchedActions), machine2.options.actions)
            }], predictableExec, preserveActionOrder), 2), resolvedActionsFromPure = _c[0], resolvedContext = _c[1];
            updatedContext = resolvedContext;
            preservedContexts === null || preservedContexts === void 0 ? void 0 : preservedContexts.push(updatedContext);
            return resolvedActionsFromPure;
          }
          case actionTypes.stop: {
            var resolved = resolveStop(actionObject, updatedContext, _event);
            predictableExec === null || predictableExec === void 0 ? void 0 : predictableExec(resolved, currentContext, _event);
            return resolved;
          }
          case actionTypes.assign: {
            updatedContext = utils.updateContext(updatedContext, _event, [actionObject], !predictableExec ? currentState : void 0);
            preservedContexts === null || preservedContexts === void 0 ? void 0 : preservedContexts.push(updatedContext);
            break;
          }
          default:
            var resolvedActionObject = toActionObject(actionObject, machine2.options.actions);
            var exec_1 = resolvedActionObject.exec;
            if (predictableExec) {
              predictableExec(resolvedActionObject, updatedContext, _event);
            } else if (exec_1 && preservedContexts) {
              var contextIndex_1 = preservedContexts.length - 1;
              var wrapped = _tslib.__assign(_tslib.__assign({}, resolvedActionObject), {
                exec: function(_ctx) {
                  var args = [];
                  for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                  }
                  exec_1.apply(void 0, _tslib.__spreadArray([preservedContexts[contextIndex_1]], _tslib.__read(args), false));
                }
              });
              resolvedActionObject = wrapped;
            }
            return resolvedActionObject;
        }
      }
      function processBlock(block) {
        var e_2, _a;
        var resolvedActions2 = [];
        try {
          for (var _b = _tslib.__values(block.actions), _c = _b.next(); !_c.done; _c = _b.next()) {
            var action = _c.value;
            var resolved = handleAction(block.type, action);
            if (resolved) {
              resolvedActions2 = resolvedActions2.concat(resolved);
            }
          }
        } catch (e_2_1) {
          e_2 = {
            error: e_2_1
          };
        } finally {
          try {
            if (_c && !_c.done && (_a = _b.return))
              _a.call(_b);
          } finally {
            if (e_2)
              throw e_2.error;
          }
        }
        deferredToBlockEnd.forEach(function(action2) {
          predictableExec(action2, updatedContext, _event);
        });
        deferredToBlockEnd.length = 0;
        return resolvedActions2;
      }
      var resolvedActions = utils.flatten(actionBlocks.map(processBlock));
      return [resolvedActions, updatedContext];
    }
    exports.actionTypes = actionTypes;
    exports.after = after;
    exports.assign = assign2;
    exports.cancel = cancel;
    exports.choose = choose;
    exports.done = done;
    exports.doneInvoke = doneInvoke;
    exports.error = error;
    exports.escalate = escalate;
    exports.forwardTo = forwardTo;
    exports.getActionFunction = getActionFunction;
    exports.initEvent = initEvent;
    exports.isActionObject = isActionObject;
    exports.log = log;
    exports.pure = pure;
    exports.raise = raise;
    exports.resolveActions = resolveActions;
    exports.resolveLog = resolveLog;
    exports.resolveRaise = resolveRaise;
    exports.resolveSend = resolveSend;
    exports.resolveStop = resolveStop;
    exports.respond = respond;
    exports.send = send;
    exports.sendParent = sendParent;
    exports.sendTo = sendTo;
    exports.sendUpdate = sendUpdate;
    exports.start = start;
    exports.stop = stop;
    exports.toActionObject = toActionObject;
    exports.toActionObjects = toActionObjects;
    exports.toActivityDefinition = toActivityDefinition;
  }
});

// node_modules/.pnpm/xstate@4.37.1/node_modules/xstate/lib/serviceScope.js
var require_serviceScope = __commonJS({
  "node_modules/.pnpm/xstate@4.37.1/node_modules/xstate/lib/serviceScope.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serviceStack = [];
    var provide = function(service, fn) {
      serviceStack.push(service);
      var result = fn(service);
      serviceStack.pop();
      return result;
    };
    var consume = function(fn) {
      return fn(serviceStack[serviceStack.length - 1]);
    };
    exports.consume = consume;
    exports.provide = provide;
  }
});

// node_modules/.pnpm/xstate@4.37.1/node_modules/xstate/lib/Actor.js
var require_Actor = __commonJS({
  "node_modules/.pnpm/xstate@4.37.1/node_modules/xstate/lib/Actor.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var _tslib = require_tslib();
    var utils = require_utils();
    var serviceScope = require_serviceScope();
    function createNullActor(id) {
      var _a;
      return _a = {
        id,
        send: function() {
          return void 0;
        },
        subscribe: function() {
          return {
            unsubscribe: function() {
              return void 0;
            }
          };
        },
        getSnapshot: function() {
          return void 0;
        },
        toJSON: function() {
          return {
            id
          };
        }
      }, _a[utils.symbolObservable] = function() {
        return this;
      }, _a;
    }
    function createInvocableActor(invokeDefinition, machine2, context, _event) {
      var _a;
      var invokeSrc = utils.toInvokeSource(invokeDefinition.src);
      var serviceCreator = (_a = machine2 === null || machine2 === void 0 ? void 0 : machine2.options.services) === null || _a === void 0 ? void 0 : _a[invokeSrc.type];
      var resolvedData = invokeDefinition.data ? utils.mapContext(invokeDefinition.data, context, _event) : void 0;
      var tempActor = serviceCreator ? createDeferredActor(serviceCreator, invokeDefinition.id, resolvedData) : createNullActor(invokeDefinition.id);
      tempActor.meta = invokeDefinition;
      return tempActor;
    }
    function createDeferredActor(entity, id, data) {
      var tempActor = createNullActor(id);
      tempActor.deferred = true;
      if (utils.isMachine(entity)) {
        var initialState_1 = tempActor.state = serviceScope.provide(void 0, function() {
          return (data ? entity.withContext(data) : entity).initialState;
        });
        tempActor.getSnapshot = function() {
          return initialState_1;
        };
      }
      return tempActor;
    }
    function isActor(item) {
      try {
        return typeof item.send === "function";
      } catch (e) {
        return false;
      }
    }
    function isSpawnedActor(item) {
      return isActor(item) && "id" in item;
    }
    function toActorRef(actorRefLike) {
      var _a;
      return _tslib.__assign((_a = {
        subscribe: function() {
          return {
            unsubscribe: function() {
              return void 0;
            }
          };
        },
        id: "anonymous",
        getSnapshot: function() {
          return void 0;
        }
      }, _a[utils.symbolObservable] = function() {
        return this;
      }, _a), actorRefLike);
    }
    exports.createDeferredActor = createDeferredActor;
    exports.createInvocableActor = createInvocableActor;
    exports.createNullActor = createNullActor;
    exports.isActor = isActor;
    exports.isSpawnedActor = isSpawnedActor;
    exports.toActorRef = toActorRef;
  }
});

// node_modules/.pnpm/xstate@4.37.1/node_modules/xstate/lib/stateUtils.js
var require_stateUtils = __commonJS({
  "node_modules/.pnpm/xstate@4.37.1/node_modules/xstate/lib/stateUtils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var _tslib = require_tslib();
    var utils = require_utils();
    var isLeafNode = function(stateNode) {
      return stateNode.type === "atomic" || stateNode.type === "final";
    };
    function getAllChildren(stateNode) {
      return Object.keys(stateNode.states).map(function(key) {
        return stateNode.states[key];
      });
    }
    function getChildren(stateNode) {
      return getAllChildren(stateNode).filter(function(sn) {
        return sn.type !== "history";
      });
    }
    function getAllStateNodes(stateNode) {
      var stateNodes = [stateNode];
      if (isLeafNode(stateNode)) {
        return stateNodes;
      }
      return stateNodes.concat(utils.flatten(getChildren(stateNode).map(getAllStateNodes)));
    }
    function getConfiguration(prevStateNodes, stateNodes) {
      var e_1, _a, e_2, _b, e_3, _c, e_4, _d;
      var prevConfiguration = new Set(prevStateNodes);
      var prevAdjList = getAdjList(prevConfiguration);
      var configuration = new Set(stateNodes);
      try {
        for (var configuration_1 = _tslib.__values(configuration), configuration_1_1 = configuration_1.next(); !configuration_1_1.done; configuration_1_1 = configuration_1.next()) {
          var s = configuration_1_1.value;
          var m = s.parent;
          while (m && !configuration.has(m)) {
            configuration.add(m);
            m = m.parent;
          }
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (configuration_1_1 && !configuration_1_1.done && (_a = configuration_1.return))
            _a.call(configuration_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      var adjList = getAdjList(configuration);
      try {
        for (var configuration_2 = _tslib.__values(configuration), configuration_2_1 = configuration_2.next(); !configuration_2_1.done; configuration_2_1 = configuration_2.next()) {
          var s = configuration_2_1.value;
          if (s.type === "compound" && (!adjList.get(s) || !adjList.get(s).length)) {
            if (prevAdjList.get(s)) {
              prevAdjList.get(s).forEach(function(sn) {
                return configuration.add(sn);
              });
            } else {
              s.initialStateNodes.forEach(function(sn) {
                return configuration.add(sn);
              });
            }
          } else {
            if (s.type === "parallel") {
              try {
                for (var _e = (e_3 = void 0, _tslib.__values(getChildren(s))), _f = _e.next(); !_f.done; _f = _e.next()) {
                  var child = _f.value;
                  if (!configuration.has(child)) {
                    configuration.add(child);
                    if (prevAdjList.get(child)) {
                      prevAdjList.get(child).forEach(function(sn) {
                        return configuration.add(sn);
                      });
                    } else {
                      child.initialStateNodes.forEach(function(sn) {
                        return configuration.add(sn);
                      });
                    }
                  }
                }
              } catch (e_3_1) {
                e_3 = {
                  error: e_3_1
                };
              } finally {
                try {
                  if (_f && !_f.done && (_c = _e.return))
                    _c.call(_e);
                } finally {
                  if (e_3)
                    throw e_3.error;
                }
              }
            }
          }
        }
      } catch (e_2_1) {
        e_2 = {
          error: e_2_1
        };
      } finally {
        try {
          if (configuration_2_1 && !configuration_2_1.done && (_b = configuration_2.return))
            _b.call(configuration_2);
        } finally {
          if (e_2)
            throw e_2.error;
        }
      }
      try {
        for (var configuration_3 = _tslib.__values(configuration), configuration_3_1 = configuration_3.next(); !configuration_3_1.done; configuration_3_1 = configuration_3.next()) {
          var s = configuration_3_1.value;
          var m = s.parent;
          while (m && !configuration.has(m)) {
            configuration.add(m);
            m = m.parent;
          }
        }
      } catch (e_4_1) {
        e_4 = {
          error: e_4_1
        };
      } finally {
        try {
          if (configuration_3_1 && !configuration_3_1.done && (_d = configuration_3.return))
            _d.call(configuration_3);
        } finally {
          if (e_4)
            throw e_4.error;
        }
      }
      return configuration;
    }
    function getValueFromAdj(baseNode, adjList) {
      var childStateNodes = adjList.get(baseNode);
      if (!childStateNodes) {
        return {};
      }
      if (baseNode.type === "compound") {
        var childStateNode = childStateNodes[0];
        if (childStateNode) {
          if (isLeafNode(childStateNode)) {
            return childStateNode.key;
          }
        } else {
          return {};
        }
      }
      var stateValue = {};
      childStateNodes.forEach(function(csn) {
        stateValue[csn.key] = getValueFromAdj(csn, adjList);
      });
      return stateValue;
    }
    function getAdjList(configuration) {
      var e_5, _a;
      var adjList = /* @__PURE__ */ new Map();
      try {
        for (var configuration_4 = _tslib.__values(configuration), configuration_4_1 = configuration_4.next(); !configuration_4_1.done; configuration_4_1 = configuration_4.next()) {
          var s = configuration_4_1.value;
          if (!adjList.has(s)) {
            adjList.set(s, []);
          }
          if (s.parent) {
            if (!adjList.has(s.parent)) {
              adjList.set(s.parent, []);
            }
            adjList.get(s.parent).push(s);
          }
        }
      } catch (e_5_1) {
        e_5 = {
          error: e_5_1
        };
      } finally {
        try {
          if (configuration_4_1 && !configuration_4_1.done && (_a = configuration_4.return))
            _a.call(configuration_4);
        } finally {
          if (e_5)
            throw e_5.error;
        }
      }
      return adjList;
    }
    function getValue(rootNode, configuration) {
      var config = getConfiguration([rootNode], configuration);
      return getValueFromAdj(rootNode, getAdjList(config));
    }
    function has2(iterable, item) {
      if (Array.isArray(iterable)) {
        return iterable.some(function(member) {
          return member === item;
        });
      }
      if (iterable instanceof Set) {
        return iterable.has(item);
      }
      return false;
    }
    function nextEvents(configuration) {
      return _tslib.__spreadArray([], _tslib.__read(new Set(utils.flatten(_tslib.__spreadArray([], _tslib.__read(configuration.map(function(sn) {
        return sn.ownEvents;
      })), false)))), false);
    }
    function isInFinalState(configuration, stateNode) {
      if (stateNode.type === "compound") {
        return getChildren(stateNode).some(function(s) {
          return s.type === "final" && has2(configuration, s);
        });
      }
      if (stateNode.type === "parallel") {
        return getChildren(stateNode).every(function(sn) {
          return isInFinalState(configuration, sn);
        });
      }
      return false;
    }
    function getMeta(configuration) {
      if (configuration === void 0) {
        configuration = [];
      }
      return configuration.reduce(function(acc, stateNode) {
        if (stateNode.meta !== void 0) {
          acc[stateNode.id] = stateNode.meta;
        }
        return acc;
      }, {});
    }
    function getTagsFromConfiguration(configuration) {
      return new Set(utils.flatten(configuration.map(function(sn) {
        return sn.tags;
      })));
    }
    exports.getAdjList = getAdjList;
    exports.getAllChildren = getAllChildren;
    exports.getAllStateNodes = getAllStateNodes;
    exports.getChildren = getChildren;
    exports.getConfiguration = getConfiguration;
    exports.getMeta = getMeta;
    exports.getTagsFromConfiguration = getTagsFromConfiguration;
    exports.getValue = getValue;
    exports.has = has2;
    exports.isInFinalState = isInFinalState;
    exports.isLeafNode = isLeafNode;
    exports.nextEvents = nextEvents;
  }
});

// node_modules/.pnpm/xstate@4.37.1/node_modules/xstate/lib/State.js
var require_State = __commonJS({
  "node_modules/.pnpm/xstate@4.37.1/node_modules/xstate/lib/State.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var _tslib = require_tslib();
    var constants = require_constants();
    var utils = require_utils();
    var stateUtils = require_stateUtils();
    var actions = require_actions();
    var environment = require_environment();
    function stateValuesEqual(a, b) {
      if (a === b) {
        return true;
      }
      if (a === void 0 || b === void 0) {
        return false;
      }
      if (utils.isString(a) || utils.isString(b)) {
        return a === b;
      }
      var aKeys = Object.keys(a);
      var bKeys = Object.keys(b);
      return aKeys.length === bKeys.length && aKeys.every(function(key) {
        return stateValuesEqual(a[key], b[key]);
      });
    }
    function isStateConfig(state) {
      if (typeof state !== "object" || state === null) {
        return false;
      }
      return "value" in state && "_event" in state;
    }
    var isState = isStateConfig;
    function bindActionToState(action, state) {
      var exec = action.exec;
      var boundAction = _tslib.__assign(_tslib.__assign({}, action), {
        exec: exec !== void 0 ? function() {
          return exec(state.context, state.event, {
            action,
            state,
            _event: state._event
          });
        } : void 0
      });
      return boundAction;
    }
    var State = (
      /** @class */
      /* @__PURE__ */ function() {
        function State2(config) {
          var _this = this;
          var _a;
          this.actions = [];
          this.activities = constants.EMPTY_ACTIVITY_MAP;
          this.meta = {};
          this.events = [];
          this.value = config.value;
          this.context = config.context;
          this._event = config._event;
          this._sessionid = config._sessionid;
          this.event = this._event.data;
          this.historyValue = config.historyValue;
          this.history = config.history;
          this.actions = config.actions || [];
          this.activities = config.activities || constants.EMPTY_ACTIVITY_MAP;
          this.meta = stateUtils.getMeta(config.configuration);
          this.events = config.events || [];
          this.matches = this.matches.bind(this);
          this.toStrings = this.toStrings.bind(this);
          this.configuration = config.configuration;
          this.transitions = config.transitions;
          this.children = config.children;
          this.done = !!config.done;
          this.tags = (_a = Array.isArray(config.tags) ? new Set(config.tags) : config.tags) !== null && _a !== void 0 ? _a : /* @__PURE__ */ new Set();
          this.machine = config.machine;
          Object.defineProperty(this, "nextEvents", {
            get: function() {
              return stateUtils.nextEvents(_this.configuration);
            }
          });
        }
        State2.from = function(stateValue, context) {
          if (stateValue instanceof State2) {
            if (stateValue.context !== context) {
              return new State2({
                value: stateValue.value,
                context,
                _event: stateValue._event,
                _sessionid: null,
                historyValue: stateValue.historyValue,
                history: stateValue.history,
                actions: [],
                activities: stateValue.activities,
                meta: {},
                events: [],
                configuration: [],
                transitions: [],
                children: {}
              });
            }
            return stateValue;
          }
          var _event = actions.initEvent;
          return new State2({
            value: stateValue,
            context,
            _event,
            _sessionid: null,
            historyValue: void 0,
            history: void 0,
            actions: [],
            activities: void 0,
            meta: void 0,
            events: [],
            configuration: [],
            transitions: [],
            children: {}
          });
        };
        State2.create = function(config) {
          return new State2(config);
        };
        State2.inert = function(stateValue, context) {
          if (stateValue instanceof State2) {
            if (!stateValue.actions.length) {
              return stateValue;
            }
            var _event = actions.initEvent;
            return new State2({
              value: stateValue.value,
              context,
              _event,
              _sessionid: null,
              historyValue: stateValue.historyValue,
              history: stateValue.history,
              activities: stateValue.activities,
              configuration: stateValue.configuration,
              transitions: [],
              children: {}
            });
          }
          return State2.from(stateValue, context);
        };
        State2.prototype.toStrings = function(stateValue, delimiter) {
          var _this = this;
          if (stateValue === void 0) {
            stateValue = this.value;
          }
          if (delimiter === void 0) {
            delimiter = ".";
          }
          if (utils.isString(stateValue)) {
            return [stateValue];
          }
          var valueKeys = Object.keys(stateValue);
          return valueKeys.concat.apply(valueKeys, _tslib.__spreadArray([], _tslib.__read(valueKeys.map(function(key) {
            return _this.toStrings(stateValue[key], delimiter).map(function(s) {
              return key + delimiter + s;
            });
          })), false));
        };
        State2.prototype.toJSON = function() {
          var _a = this;
          _a.configuration;
          _a.transitions;
          var tags = _a.tags;
          _a.machine;
          var jsonValues = _tslib.__rest(_a, ["configuration", "transitions", "tags", "machine"]);
          return _tslib.__assign(_tslib.__assign({}, jsonValues), {
            tags: Array.from(tags)
          });
        };
        State2.prototype.matches = function(parentStateValue) {
          return utils.matchesState(parentStateValue, this.value);
        };
        State2.prototype.hasTag = function(tag) {
          return this.tags.has(tag);
        };
        State2.prototype.can = function(event2) {
          var _a;
          if (environment.IS_PRODUCTION) {
            utils.warn(!!this.machine, "state.can(...) used outside of a machine-created State object; this will always return false.");
          }
          var transitionData = (_a = this.machine) === null || _a === void 0 ? void 0 : _a.getTransitionData(this, event2);
          return !!(transitionData === null || transitionData === void 0 ? void 0 : transitionData.transitions.length) && // Check that at least one transition is not forbidden
          transitionData.transitions.some(function(t) {
            return t.target !== void 0 || t.actions.length;
          });
        };
        return State2;
      }()
    );
    exports.State = State;
    exports.bindActionToState = bindActionToState;
    exports.isState = isState;
    exports.isStateConfig = isStateConfig;
    exports.stateValuesEqual = stateValuesEqual;
  }
});

// node_modules/.pnpm/xstate@4.37.1/node_modules/xstate/lib/scheduler.js
var require_scheduler = __commonJS({
  "node_modules/.pnpm/xstate@4.37.1/node_modules/xstate/lib/scheduler.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var _tslib = require_tslib();
    var defaultOptions = {
      deferEvents: false
    };
    var Scheduler = (
      /** @class */
      /* @__PURE__ */ function() {
        function Scheduler2(options) {
          this.processingEvent = false;
          this.queue = [];
          this.initialized = false;
          this.options = _tslib.__assign(_tslib.__assign({}, defaultOptions), options);
        }
        Scheduler2.prototype.initialize = function(callback) {
          this.initialized = true;
          if (callback) {
            if (!this.options.deferEvents) {
              this.schedule(callback);
              return;
            }
            this.process(callback);
          }
          this.flushEvents();
        };
        Scheduler2.prototype.schedule = function(task) {
          if (!this.initialized || this.processingEvent) {
            this.queue.push(task);
            return;
          }
          if (this.queue.length !== 0) {
            throw new Error("Event queue should be empty when it is not processing events");
          }
          this.process(task);
          this.flushEvents();
        };
        Scheduler2.prototype.clear = function() {
          this.queue = [];
        };
        Scheduler2.prototype.flushEvents = function() {
          var nextCallback = this.queue.shift();
          while (nextCallback) {
            this.process(nextCallback);
            nextCallback = this.queue.shift();
          }
        };
        Scheduler2.prototype.process = function(callback) {
          this.processingEvent = true;
          try {
            callback();
          } catch (e) {
            this.clear();
            throw e;
          } finally {
            this.processingEvent = false;
          }
        };
        return Scheduler2;
      }()
    );
    exports.Scheduler = Scheduler;
  }
});

// node_modules/.pnpm/xstate@4.37.1/node_modules/xstate/lib/registry.js
var require_registry = __commonJS({
  "node_modules/.pnpm/xstate@4.37.1/node_modules/xstate/lib/registry.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var children = /* @__PURE__ */ new Map();
    var sessionIdIndex = 0;
    var registry = {
      bookId: function() {
        return "x:".concat(sessionIdIndex++);
      },
      register: function(id, actor) {
        children.set(id, actor);
        return id;
      },
      get: function(id) {
        return children.get(id);
      },
      free: function(id) {
        children.delete(id);
      }
    };
    exports.registry = registry;
  }
});

// node_modules/.pnpm/xstate@4.37.1/node_modules/xstate/lib/devTools.js
var require_devTools = __commonJS({
  "node_modules/.pnpm/xstate@4.37.1/node_modules/xstate/lib/devTools.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var environment = require_environment();
    function getGlobal() {
      if (typeof globalThis !== "undefined") {
        return globalThis;
      }
      if (typeof self !== "undefined") {
        return self;
      }
      if (typeof window !== "undefined") {
        return window;
      }
      if (typeof global !== "undefined") {
        return global;
      }
      if (!environment.IS_PRODUCTION) {
        console.warn("XState could not find a global object in this environment. Please let the maintainers know and raise an issue here: https://github.com/statelyai/xstate/issues");
      }
    }
    function getDevTools() {
      var global2 = getGlobal();
      if (global2 && "__xstate__" in global2) {
        return global2.__xstate__;
      }
      return void 0;
    }
    function registerService(service) {
      if (!getGlobal()) {
        return;
      }
      var devTools = getDevTools();
      if (devTools) {
        devTools.register(service);
      }
    }
    exports.getGlobal = getGlobal;
    exports.registerService = registerService;
  }
});

// node_modules/.pnpm/xstate@4.37.1/node_modules/xstate/lib/behaviors.js
var require_behaviors = __commonJS({
  "node_modules/.pnpm/xstate@4.37.1/node_modules/xstate/lib/behaviors.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var actions = require_actions();
    var Actor = require_Actor();
    var utils = require_utils();
    function fromReducer(transition, initialState) {
      return {
        transition,
        initialState
      };
    }
    function fromPromise(promiseFn) {
      var initialState = {
        error: void 0,
        data: void 0,
        status: "pending"
      };
      return {
        transition: function(state, event2, _a) {
          var parent = _a.parent, id = _a.id, observers = _a.observers;
          switch (event2.type) {
            case "fulfill":
              parent === null || parent === void 0 ? void 0 : parent.send(actions.doneInvoke(id, event2.data));
              return {
                error: void 0,
                data: event2.data,
                status: "fulfilled"
              };
            case "reject":
              parent === null || parent === void 0 ? void 0 : parent.send(actions.error(id, event2.error));
              observers.forEach(function(observer) {
                observer.error(event2.error);
              });
              return {
                error: event2.error,
                data: void 0,
                status: "rejected"
              };
            default:
              return state;
          }
        },
        initialState,
        start: function(_a) {
          var self2 = _a.self;
          promiseFn().then(function(data) {
            self2.send({
              type: "fulfill",
              data
            });
          }, function(reason) {
            self2.send({
              type: "reject",
              error: reason
            });
          });
          return initialState;
        }
      };
    }
    function spawnBehavior(behavior, options) {
      if (options === void 0) {
        options = {};
      }
      var state = behavior.initialState;
      var observers = /* @__PURE__ */ new Set();
      var mailbox = [];
      var flushing = false;
      var flush = function() {
        if (flushing) {
          return;
        }
        flushing = true;
        while (mailbox.length > 0) {
          var event_1 = mailbox.shift();
          state = behavior.transition(state, event_1, actorCtx);
          observers.forEach(function(observer) {
            return observer.next(state);
          });
        }
        flushing = false;
      };
      var actor = Actor.toActorRef({
        id: options.id,
        send: function(event2) {
          mailbox.push(event2);
          flush();
        },
        getSnapshot: function() {
          return state;
        },
        subscribe: function(next, handleError, complete) {
          var observer = utils.toObserver(next, handleError, complete);
          observers.add(observer);
          observer.next(state);
          return {
            unsubscribe: function() {
              observers.delete(observer);
            }
          };
        }
      });
      var actorCtx = {
        parent: options.parent,
        self: actor,
        id: options.id || "anonymous",
        observers
      };
      state = behavior.start ? behavior.start(actorCtx) : state;
      return actor;
    }
    exports.fromPromise = fromPromise;
    exports.fromReducer = fromReducer;
    exports.spawnBehavior = spawnBehavior;
  }
});

// node_modules/.pnpm/xstate@4.37.1/node_modules/xstate/lib/interpreter.js
var require_interpreter = __commonJS({
  "node_modules/.pnpm/xstate@4.37.1/node_modules/xstate/lib/interpreter.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var _tslib = require_tslib();
    var types = require_types();
    var State = require_State();
    var actionTypes = require_actionTypes();
    var actions = require_actions();
    var environment = require_environment();
    var utils = require_utils();
    var scheduler = require_scheduler();
    var Actor = require_Actor();
    var registry = require_registry();
    var devTools = require_devTools();
    var serviceScope = require_serviceScope();
    var behaviors = require_behaviors();
    var DEFAULT_SPAWN_OPTIONS = {
      sync: false,
      autoForward: false
    };
    exports.InterpreterStatus = void 0;
    (function(InterpreterStatus) {
      InterpreterStatus[InterpreterStatus["NotStarted"] = 0] = "NotStarted";
      InterpreterStatus[InterpreterStatus["Running"] = 1] = "Running";
      InterpreterStatus[InterpreterStatus["Stopped"] = 2] = "Stopped";
    })(exports.InterpreterStatus || (exports.InterpreterStatus = {}));
    var Interpreter = (
      /** @class */
      /* @__PURE__ */ function() {
        function Interpreter2(machine2, options) {
          if (options === void 0) {
            options = Interpreter2.defaultOptions;
          }
          var _this = this;
          this.machine = machine2;
          this.delayedEventsMap = {};
          this.listeners = /* @__PURE__ */ new Set();
          this.contextListeners = /* @__PURE__ */ new Set();
          this.stopListeners = /* @__PURE__ */ new Set();
          this.doneListeners = /* @__PURE__ */ new Set();
          this.eventListeners = /* @__PURE__ */ new Set();
          this.sendListeners = /* @__PURE__ */ new Set();
          this.initialized = false;
          this.status = exports.InterpreterStatus.NotStarted;
          this.children = /* @__PURE__ */ new Map();
          this.forwardTo = /* @__PURE__ */ new Set();
          this._outgoingQueue = [];
          this.init = this.start;
          this.send = function(event2, payload) {
            if (utils.isArray(event2)) {
              _this.batch(event2);
              return _this.state;
            }
            var _event = utils.toSCXMLEvent(utils.toEventObject(event2, payload));
            if (_this.status === exports.InterpreterStatus.Stopped) {
              if (!environment.IS_PRODUCTION) {
                utils.warn(false, 'Event "'.concat(_event.name, '" was sent to stopped service "').concat(_this.machine.id, '". This service has already reached its final state, and will not transition.\nEvent: ').concat(JSON.stringify(_event.data)));
              }
              return _this.state;
            }
            if (_this.status !== exports.InterpreterStatus.Running && !_this.options.deferEvents) {
              throw new Error('Event "'.concat(_event.name, '" was sent to uninitialized service "').concat(
                _this.machine.id,
                '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.\nEvent: '
              ).concat(JSON.stringify(_event.data)));
            }
            _this.scheduler.schedule(function() {
              _this.forward(_event);
              var nextState = _this._nextState(_event);
              _this.update(nextState, _event);
            });
            return _this._state;
          };
          this.sendTo = function(event2, to, immediate) {
            var isParent = _this.parent && (to === types.SpecialTargets.Parent || _this.parent.id === to);
            var target = isParent ? _this.parent : utils.isString(to) ? to === types.SpecialTargets.Internal ? _this : _this.children.get(to) || registry.registry.get(to) : utils.isActor(to) ? to : void 0;
            if (!target) {
              if (!isParent) {
                throw new Error("Unable to send event to child '".concat(to, "' from service '").concat(_this.id, "'."));
              }
              if (!environment.IS_PRODUCTION) {
                utils.warn(false, "Service '".concat(_this.id, "' has no parent: unable to send event ").concat(event2.type));
              }
              return;
            }
            if ("machine" in target) {
              if (_this.status !== exports.InterpreterStatus.Stopped || _this.parent !== target || // we need to send events to the parent from exit handlers of a machine that reached its final state
              _this.state.done) {
                var scxmlEvent = _tslib.__assign(_tslib.__assign({}, event2), {
                  name: event2.name === actionTypes.error ? "".concat(actions.error(_this.id)) : event2.name,
                  origin: _this.sessionId
                });
                if (!immediate && _this.machine.config.predictableActionArguments) {
                  _this._outgoingQueue.push([target, scxmlEvent]);
                } else {
                  target.send(scxmlEvent);
                }
              }
            } else {
              if (!immediate && _this.machine.config.predictableActionArguments) {
                _this._outgoingQueue.push([target, event2.data]);
              } else {
                target.send(event2.data);
              }
            }
          };
          this._exec = function(action, context, _event, actionFunctionMap) {
            if (actionFunctionMap === void 0) {
              actionFunctionMap = _this.machine.options.actions;
            }
            var actionOrExec = action.exec || actions.getActionFunction(action.type, actionFunctionMap);
            var exec = utils.isFunction(actionOrExec) ? actionOrExec : actionOrExec ? actionOrExec.exec : action.exec;
            if (exec) {
              try {
                return exec(context, _event.data, !_this.machine.config.predictableActionArguments ? {
                  action,
                  state: _this.state,
                  _event
                } : {
                  action,
                  _event
                });
              } catch (err) {
                if (_this.parent) {
                  _this.parent.send({
                    type: "xstate.error",
                    data: err
                  });
                }
                throw err;
              }
            }
            switch (action.type) {
              case actionTypes.raise: {
                var sendAction_1 = action;
                _this.defer(sendAction_1);
                break;
              }
              case actionTypes.send:
                var sendAction = action;
                if (typeof sendAction.delay === "number") {
                  _this.defer(sendAction);
                  return;
                } else {
                  if (sendAction.to) {
                    _this.sendTo(sendAction._event, sendAction.to, _event === actions.initEvent);
                  } else {
                    _this.send(sendAction._event);
                  }
                }
                break;
              case actionTypes.cancel:
                _this.cancel(action.sendId);
                break;
              case actionTypes.start: {
                if (_this.status !== exports.InterpreterStatus.Running) {
                  return;
                }
                var activity = action.activity;
                if (
                  // in v4 with `predictableActionArguments` invokes are called eagerly when the `this.state` still points to the previous state
                  !_this.machine.config.predictableActionArguments && !_this.state.activities[activity.id || activity.type]
                ) {
                  break;
                }
                if (activity.type === types.ActionTypes.Invoke) {
                  var invokeSource = utils.toInvokeSource(activity.src);
                  var serviceCreator = _this.machine.options.services ? _this.machine.options.services[invokeSource.type] : void 0;
                  var id2 = activity.id, data = activity.data;
                  if (!environment.IS_PRODUCTION) {
                    utils.warn(
                      !("forward" in activity),
                      // tslint:disable-next-line:max-line-length
                      "`forward` property is deprecated (found in invocation of '".concat(activity.src, "' in in machine '").concat(_this.machine.id, "'). ") + "Please use `autoForward` instead."
                    );
                  }
                  var autoForward = "autoForward" in activity ? activity.autoForward : !!activity.forward;
                  if (!serviceCreator) {
                    if (!environment.IS_PRODUCTION) {
                      utils.warn(false, "No service found for invocation '".concat(activity.src, "' in machine '").concat(_this.machine.id, "'."));
                    }
                    return;
                  }
                  var resolvedData = data ? utils.mapContext(data, context, _event) : void 0;
                  if (typeof serviceCreator === "string") {
                    return;
                  }
                  var source = utils.isFunction(serviceCreator) ? serviceCreator(context, _event.data, {
                    data: resolvedData,
                    src: invokeSource,
                    meta: activity.meta
                  }) : serviceCreator;
                  if (!source) {
                    return;
                  }
                  var options2 = void 0;
                  if (utils.isMachine(source)) {
                    source = resolvedData ? source.withContext(resolvedData) : source;
                    options2 = {
                      autoForward
                    };
                  }
                  _this.spawn(source, id2, options2);
                } else {
                  _this.spawnActivity(activity);
                }
                break;
              }
              case actionTypes.stop: {
                _this.stopChild(action.activity.id);
                break;
              }
              case actionTypes.log:
                var _a = action, label = _a.label, value = _a.value;
                if (label) {
                  _this.logger(label, value);
                } else {
                  _this.logger(value);
                }
                break;
              default:
                if (!environment.IS_PRODUCTION) {
                  utils.warn(false, "No implementation found for action type '".concat(action.type, "'"));
                }
                break;
            }
          };
          var resolvedOptions = _tslib.__assign(_tslib.__assign({}, Interpreter2.defaultOptions), options);
          var clock = resolvedOptions.clock, logger = resolvedOptions.logger, parent = resolvedOptions.parent, id = resolvedOptions.id;
          var resolvedId = id !== void 0 ? id : machine2.id;
          this.id = resolvedId;
          this.logger = logger;
          this.clock = clock;
          this.parent = parent;
          this.options = resolvedOptions;
          this.scheduler = new scheduler.Scheduler({
            deferEvents: this.options.deferEvents
          });
          this.sessionId = registry.registry.bookId();
        }
        Object.defineProperty(Interpreter2.prototype, "initialState", {
          get: function() {
            var _this = this;
            if (this._initialState) {
              return this._initialState;
            }
            return serviceScope.provide(this, function() {
              _this._initialState = _this.machine.initialState;
              return _this._initialState;
            });
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Interpreter2.prototype, "state", {
          /**
           * @deprecated Use `.getSnapshot()` instead.
           */
          get: function() {
            if (!environment.IS_PRODUCTION) {
              utils.warn(this.status !== exports.InterpreterStatus.NotStarted, "Attempted to read state from uninitialized service '".concat(this.id, "'. Make sure the service is started first."));
            }
            return this._state;
          },
          enumerable: false,
          configurable: true
        });
        Interpreter2.prototype.execute = function(state, actionsConfig) {
          var e_1, _a;
          try {
            for (var _b = _tslib.__values(state.actions), _c = _b.next(); !_c.done; _c = _b.next()) {
              var action = _c.value;
              this.exec(action, state, actionsConfig);
            }
          } catch (e_1_1) {
            e_1 = {
              error: e_1_1
            };
          } finally {
            try {
              if (_c && !_c.done && (_a = _b.return))
                _a.call(_b);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
        };
        Interpreter2.prototype.update = function(state, _event) {
          var e_2, _a, e_3, _b, e_4, _c, e_5, _d;
          var _this = this;
          state._sessionid = this.sessionId;
          this._state = state;
          if ((!this.machine.config.predictableActionArguments || // this is currently required to execute initial actions as the `initialState` gets cached
          // we can't just recompute it (and execute actions while doing so) because we try to preserve identity of actors created within initial assigns
          _event === actions.initEvent) && this.options.execute) {
            this.execute(this.state);
          } else {
            var item = void 0;
            while (item = this._outgoingQueue.shift()) {
              item[0].send(item[1]);
            }
          }
          this.children.forEach(function(child) {
            _this.state.children[child.id] = child;
          });
          if (this.devTools) {
            this.devTools.send(_event.data, state);
          }
          if (state.event) {
            try {
              for (var _e = _tslib.__values(this.eventListeners), _f = _e.next(); !_f.done; _f = _e.next()) {
                var listener = _f.value;
                listener(state.event);
              }
            } catch (e_2_1) {
              e_2 = {
                error: e_2_1
              };
            } finally {
              try {
                if (_f && !_f.done && (_a = _e.return))
                  _a.call(_e);
              } finally {
                if (e_2)
                  throw e_2.error;
              }
            }
          }
          try {
            for (var _g = _tslib.__values(this.listeners), _h = _g.next(); !_h.done; _h = _g.next()) {
              var listener = _h.value;
              listener(state, state.event);
            }
          } catch (e_3_1) {
            e_3 = {
              error: e_3_1
            };
          } finally {
            try {
              if (_h && !_h.done && (_b = _g.return))
                _b.call(_g);
            } finally {
              if (e_3)
                throw e_3.error;
            }
          }
          try {
            for (var _j = _tslib.__values(this.contextListeners), _k = _j.next(); !_k.done; _k = _j.next()) {
              var contextListener = _k.value;
              contextListener(this.state.context, this.state.history ? this.state.history.context : void 0);
            }
          } catch (e_4_1) {
            e_4 = {
              error: e_4_1
            };
          } finally {
            try {
              if (_k && !_k.done && (_c = _j.return))
                _c.call(_j);
            } finally {
              if (e_4)
                throw e_4.error;
            }
          }
          if (this.state.done) {
            var finalChildStateNode = state.configuration.find(function(sn) {
              return sn.type === "final" && sn.parent === _this.machine;
            });
            var doneData = finalChildStateNode && finalChildStateNode.doneData ? utils.mapContext(finalChildStateNode.doneData, state.context, _event) : void 0;
            this._doneEvent = actions.doneInvoke(this.id, doneData);
            try {
              for (var _l = _tslib.__values(this.doneListeners), _m = _l.next(); !_m.done; _m = _l.next()) {
                var listener = _m.value;
                listener(this._doneEvent);
              }
            } catch (e_5_1) {
              e_5 = {
                error: e_5_1
              };
            } finally {
              try {
                if (_m && !_m.done && (_d = _l.return))
                  _d.call(_l);
              } finally {
                if (e_5)
                  throw e_5.error;
              }
            }
            this._stop();
            this._stopChildren();
            registry.registry.free(this.sessionId);
          }
        };
        Interpreter2.prototype.onTransition = function(listener) {
          this.listeners.add(listener);
          if (this.status === exports.InterpreterStatus.Running) {
            listener(this.state, this.state.event);
          }
          return this;
        };
        Interpreter2.prototype.subscribe = function(nextListenerOrObserver, _, completeListener) {
          var _this = this;
          var observer = utils.toObserver(nextListenerOrObserver, _, completeListener);
          this.listeners.add(observer.next);
          if (this.status !== exports.InterpreterStatus.NotStarted) {
            observer.next(this.state);
          }
          var completeOnce = function() {
            _this.doneListeners.delete(completeOnce);
            _this.stopListeners.delete(completeOnce);
            observer.complete();
          };
          if (this.status === exports.InterpreterStatus.Stopped) {
            observer.complete();
          } else {
            this.onDone(completeOnce);
            this.onStop(completeOnce);
          }
          return {
            unsubscribe: function() {
              _this.listeners.delete(observer.next);
              _this.doneListeners.delete(completeOnce);
              _this.stopListeners.delete(completeOnce);
            }
          };
        };
        Interpreter2.prototype.onEvent = function(listener) {
          this.eventListeners.add(listener);
          return this;
        };
        Interpreter2.prototype.onSend = function(listener) {
          this.sendListeners.add(listener);
          return this;
        };
        Interpreter2.prototype.onChange = function(listener) {
          this.contextListeners.add(listener);
          return this;
        };
        Interpreter2.prototype.onStop = function(listener) {
          this.stopListeners.add(listener);
          return this;
        };
        Interpreter2.prototype.onDone = function(listener) {
          if (this.status === exports.InterpreterStatus.Stopped && this._doneEvent) {
            listener(this._doneEvent);
          } else {
            this.doneListeners.add(listener);
          }
          return this;
        };
        Interpreter2.prototype.off = function(listener) {
          this.listeners.delete(listener);
          this.eventListeners.delete(listener);
          this.sendListeners.delete(listener);
          this.stopListeners.delete(listener);
          this.doneListeners.delete(listener);
          this.contextListeners.delete(listener);
          return this;
        };
        Interpreter2.prototype.start = function(initialState) {
          var _this = this;
          if (this.status === exports.InterpreterStatus.Running) {
            return this;
          }
          this.machine._init();
          registry.registry.register(this.sessionId, this);
          this.initialized = true;
          this.status = exports.InterpreterStatus.Running;
          var resolvedState = initialState === void 0 ? this.initialState : serviceScope.provide(this, function() {
            return State.isStateConfig(initialState) ? _this.machine.resolveState(initialState) : _this.machine.resolveState(State.State.from(initialState, _this.machine.context));
          });
          if (this.options.devTools) {
            this.attachDev();
          }
          this.scheduler.initialize(function() {
            _this.update(resolvedState, actions.initEvent);
          });
          return this;
        };
        Interpreter2.prototype._stopChildren = function() {
          this.children.forEach(function(child) {
            if (utils.isFunction(child.stop)) {
              child.stop();
            }
          });
          this.children.clear();
        };
        Interpreter2.prototype._stop = function() {
          var e_6, _a, e_7, _b, e_8, _c, e_9, _d, e_10, _e;
          try {
            for (var _f = _tslib.__values(this.listeners), _g = _f.next(); !_g.done; _g = _f.next()) {
              var listener = _g.value;
              this.listeners.delete(listener);
            }
          } catch (e_6_1) {
            e_6 = {
              error: e_6_1
            };
          } finally {
            try {
              if (_g && !_g.done && (_a = _f.return))
                _a.call(_f);
            } finally {
              if (e_6)
                throw e_6.error;
            }
          }
          try {
            for (var _h = _tslib.__values(this.stopListeners), _j = _h.next(); !_j.done; _j = _h.next()) {
              var listener = _j.value;
              listener();
              this.stopListeners.delete(listener);
            }
          } catch (e_7_1) {
            e_7 = {
              error: e_7_1
            };
          } finally {
            try {
              if (_j && !_j.done && (_b = _h.return))
                _b.call(_h);
            } finally {
              if (e_7)
                throw e_7.error;
            }
          }
          try {
            for (var _k = _tslib.__values(this.contextListeners), _l = _k.next(); !_l.done; _l = _k.next()) {
              var listener = _l.value;
              this.contextListeners.delete(listener);
            }
          } catch (e_8_1) {
            e_8 = {
              error: e_8_1
            };
          } finally {
            try {
              if (_l && !_l.done && (_c = _k.return))
                _c.call(_k);
            } finally {
              if (e_8)
                throw e_8.error;
            }
          }
          try {
            for (var _m = _tslib.__values(this.doneListeners), _o = _m.next(); !_o.done; _o = _m.next()) {
              var listener = _o.value;
              this.doneListeners.delete(listener);
            }
          } catch (e_9_1) {
            e_9 = {
              error: e_9_1
            };
          } finally {
            try {
              if (_o && !_o.done && (_d = _m.return))
                _d.call(_m);
            } finally {
              if (e_9)
                throw e_9.error;
            }
          }
          if (!this.initialized) {
            return this;
          }
          this.initialized = false;
          this.status = exports.InterpreterStatus.Stopped;
          this._initialState = void 0;
          try {
            for (var _p = _tslib.__values(Object.keys(this.delayedEventsMap)), _q = _p.next(); !_q.done; _q = _p.next()) {
              var key = _q.value;
              this.clock.clearTimeout(this.delayedEventsMap[key]);
            }
          } catch (e_10_1) {
            e_10 = {
              error: e_10_1
            };
          } finally {
            try {
              if (_q && !_q.done && (_e = _p.return))
                _e.call(_p);
            } finally {
              if (e_10)
                throw e_10.error;
            }
          }
          this.scheduler.clear();
          this.scheduler = new scheduler.Scheduler({
            deferEvents: this.options.deferEvents
          });
        };
        Interpreter2.prototype.stop = function() {
          var _this = this;
          var scheduler2 = this.scheduler;
          this._stop();
          scheduler2.schedule(function() {
            var _event = utils.toSCXMLEvent({
              type: "xstate.stop"
            });
            var nextState = serviceScope.provide(_this, function() {
              var exitActions = utils.flatten(_tslib.__spreadArray([], _tslib.__read(_this.state.configuration), false).sort(function(a, b) {
                return b.order - a.order;
              }).map(function(stateNode) {
                return actions.toActionObjects(stateNode.onExit, _this.machine.options.actions);
              }));
              var _a = _tslib.__read(actions.resolveActions(_this.machine, _this.state, _this.state.context, _event, [{
                type: "exit",
                actions: exitActions
              }], _this.machine.config.predictableActionArguments ? _this._exec : void 0, _this.machine.config.predictableActionArguments || _this.machine.config.preserveActionOrder), 2), resolvedActions = _a[0], updatedContext = _a[1];
              var newState = new State.State({
                value: _this.state.value,
                context: updatedContext,
                _event,
                _sessionid: _this.sessionId,
                historyValue: void 0,
                history: _this.state,
                actions: resolvedActions.filter(function(action) {
                  return !utils.isRaisableAction(action);
                }),
                activities: {},
                events: [],
                configuration: [],
                transitions: [],
                children: {},
                done: _this.state.done,
                tags: _this.state.tags,
                machine: _this.machine
              });
              newState.changed = true;
              return newState;
            });
            _this.update(nextState, _event);
            _this._stopChildren();
            registry.registry.free(_this.sessionId);
          });
          return this;
        };
        Interpreter2.prototype.batch = function(events) {
          var _this = this;
          if (this.status === exports.InterpreterStatus.NotStarted && this.options.deferEvents) {
            if (!environment.IS_PRODUCTION) {
              utils.warn(false, "".concat(events.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, '" and are deferred. Make sure .start() is called for this service.\nEvent: ').concat(JSON.stringify(event)));
            }
          } else if (this.status !== exports.InterpreterStatus.Running) {
            throw new Error(
              // tslint:disable-next-line:max-line-length
              "".concat(events.length, ' event(s) were sent to uninitialized service "').concat(this.machine.id, '". Make sure .start() is called for this service, or set { deferEvents: true } in the service options.')
            );
          }
          if (!events.length) {
            return;
          }
          var exec = !!this.machine.config.predictableActionArguments && this._exec;
          this.scheduler.schedule(function() {
            var e_11, _a;
            var nextState = _this.state;
            var batchChanged = false;
            var batchedActions = [];
            var _loop_1 = function(event_12) {
              var _event = utils.toSCXMLEvent(event_12);
              _this.forward(_event);
              nextState = serviceScope.provide(_this, function() {
                return _this.machine.transition(nextState, _event, void 0, exec || void 0);
              });
              batchedActions.push.apply(batchedActions, _tslib.__spreadArray([], _tslib.__read(_this.machine.config.predictableActionArguments ? nextState.actions : nextState.actions.map(function(a) {
                return State.bindActionToState(a, nextState);
              })), false));
              batchChanged = batchChanged || !!nextState.changed;
            };
            try {
              for (var events_1 = _tslib.__values(events), events_1_1 = events_1.next(); !events_1_1.done; events_1_1 = events_1.next()) {
                var event_1 = events_1_1.value;
                _loop_1(event_1);
              }
            } catch (e_11_1) {
              e_11 = {
                error: e_11_1
              };
            } finally {
              try {
                if (events_1_1 && !events_1_1.done && (_a = events_1.return))
                  _a.call(events_1);
              } finally {
                if (e_11)
                  throw e_11.error;
              }
            }
            nextState.changed = batchChanged;
            nextState.actions = batchedActions;
            _this.update(nextState, utils.toSCXMLEvent(events[events.length - 1]));
          });
        };
        Interpreter2.prototype.sender = function(event2) {
          return this.send.bind(this, event2);
        };
        Interpreter2.prototype._nextState = function(event2, exec) {
          var _this = this;
          if (exec === void 0) {
            exec = !!this.machine.config.predictableActionArguments && this._exec;
          }
          var _event = utils.toSCXMLEvent(event2);
          if (_event.name.indexOf(actionTypes.errorPlatform) === 0 && !this.state.nextEvents.some(function(nextEvent) {
            return nextEvent.indexOf(actionTypes.errorPlatform) === 0;
          })) {
            throw _event.data.data;
          }
          var nextState = serviceScope.provide(this, function() {
            return _this.machine.transition(_this.state, _event, void 0, exec || void 0);
          });
          return nextState;
        };
        Interpreter2.prototype.nextState = function(event2) {
          return this._nextState(event2, false);
        };
        Interpreter2.prototype.forward = function(event2) {
          var e_12, _a;
          try {
            for (var _b = _tslib.__values(this.forwardTo), _c = _b.next(); !_c.done; _c = _b.next()) {
              var id = _c.value;
              var child = this.children.get(id);
              if (!child) {
                throw new Error("Unable to forward event '".concat(event2, "' from interpreter '").concat(this.id, "' to nonexistant child '").concat(id, "'."));
              }
              child.send(event2);
            }
          } catch (e_12_1) {
            e_12 = {
              error: e_12_1
            };
          } finally {
            try {
              if (_c && !_c.done && (_a = _b.return))
                _a.call(_b);
            } finally {
              if (e_12)
                throw e_12.error;
            }
          }
        };
        Interpreter2.prototype.defer = function(sendAction) {
          var _this = this;
          var timerId = this.clock.setTimeout(function() {
            if ("to" in sendAction && sendAction.to) {
              _this.sendTo(sendAction._event, sendAction.to, true);
            } else {
              _this.send(sendAction._event);
            }
          }, sendAction.delay);
          if (sendAction.id) {
            this.delayedEventsMap[sendAction.id] = timerId;
          }
        };
        Interpreter2.prototype.cancel = function(sendId) {
          this.clock.clearTimeout(this.delayedEventsMap[sendId]);
          delete this.delayedEventsMap[sendId];
        };
        Interpreter2.prototype.exec = function(action, state, actionFunctionMap) {
          if (actionFunctionMap === void 0) {
            actionFunctionMap = this.machine.options.actions;
          }
          this._exec(action, state.context, state._event, actionFunctionMap);
        };
        Interpreter2.prototype.removeChild = function(childId) {
          var _a;
          this.children.delete(childId);
          this.forwardTo.delete(childId);
          (_a = this.state) === null || _a === void 0 ? true : delete _a.children[childId];
        };
        Interpreter2.prototype.stopChild = function(childId) {
          var child = this.children.get(childId);
          if (!child) {
            return;
          }
          this.removeChild(childId);
          if (utils.isFunction(child.stop)) {
            child.stop();
          }
        };
        Interpreter2.prototype.spawn = function(entity, name, options) {
          if (this.status !== exports.InterpreterStatus.Running) {
            return Actor.createDeferredActor(entity, name);
          }
          if (utils.isPromiseLike(entity)) {
            return this.spawnPromise(Promise.resolve(entity), name);
          } else if (utils.isFunction(entity)) {
            return this.spawnCallback(entity, name);
          } else if (Actor.isSpawnedActor(entity)) {
            return this.spawnActor(entity, name);
          } else if (utils.isObservable(entity)) {
            return this.spawnObservable(entity, name);
          } else if (utils.isMachine(entity)) {
            return this.spawnMachine(entity, _tslib.__assign(_tslib.__assign({}, options), {
              id: name
            }));
          } else if (utils.isBehavior(entity)) {
            return this.spawnBehavior(entity, name);
          } else {
            throw new Error('Unable to spawn entity "'.concat(name, '" of type "').concat(typeof entity, '".'));
          }
        };
        Interpreter2.prototype.spawnMachine = function(machine2, options) {
          var _this = this;
          if (options === void 0) {
            options = {};
          }
          var childService = new Interpreter2(machine2, _tslib.__assign(_tslib.__assign({}, this.options), {
            parent: this,
            id: options.id || machine2.id
          }));
          var resolvedOptions = _tslib.__assign(_tslib.__assign({}, DEFAULT_SPAWN_OPTIONS), options);
          if (resolvedOptions.sync) {
            childService.onTransition(function(state) {
              _this.send(actionTypes.update, {
                state,
                id: childService.id
              });
            });
          }
          var actor = childService;
          this.children.set(childService.id, actor);
          if (resolvedOptions.autoForward) {
            this.forwardTo.add(childService.id);
          }
          childService.onDone(function(doneEvent) {
            _this.removeChild(childService.id);
            _this.send(utils.toSCXMLEvent(doneEvent, {
              origin: childService.id
            }));
          }).start();
          return actor;
        };
        Interpreter2.prototype.spawnBehavior = function(behavior, id) {
          var actorRef = behaviors.spawnBehavior(behavior, {
            id,
            parent: this
          });
          this.children.set(id, actorRef);
          return actorRef;
        };
        Interpreter2.prototype.spawnPromise = function(promise, id) {
          var _a;
          var _this = this;
          var canceled = false;
          var resolvedData;
          promise.then(function(response) {
            if (!canceled) {
              resolvedData = response;
              _this.removeChild(id);
              _this.send(utils.toSCXMLEvent(actions.doneInvoke(id, response), {
                origin: id
              }));
            }
          }, function(errorData) {
            if (!canceled) {
              _this.removeChild(id);
              var errorEvent = actions.error(id, errorData);
              try {
                _this.send(utils.toSCXMLEvent(errorEvent, {
                  origin: id
                }));
              } catch (error) {
                utils.reportUnhandledExceptionOnInvocation(errorData, error, id);
                if (_this.devTools) {
                  _this.devTools.send(errorEvent, _this.state);
                }
                if (_this.machine.strict) {
                  _this.stop();
                }
              }
            }
          });
          var actor = (_a = {
            id,
            send: function() {
              return void 0;
            },
            subscribe: function(next, handleError, complete) {
              var observer = utils.toObserver(next, handleError, complete);
              var unsubscribed = false;
              promise.then(function(response) {
                if (unsubscribed) {
                  return;
                }
                observer.next(response);
                if (unsubscribed) {
                  return;
                }
                observer.complete();
              }, function(err) {
                if (unsubscribed) {
                  return;
                }
                observer.error(err);
              });
              return {
                unsubscribe: function() {
                  return unsubscribed = true;
                }
              };
            },
            stop: function() {
              canceled = true;
            },
            toJSON: function() {
              return {
                id
              };
            },
            getSnapshot: function() {
              return resolvedData;
            }
          }, _a[utils.symbolObservable] = function() {
            return this;
          }, _a);
          this.children.set(id, actor);
          return actor;
        };
        Interpreter2.prototype.spawnCallback = function(callback, id) {
          var _a;
          var _this = this;
          var canceled = false;
          var receivers = /* @__PURE__ */ new Set();
          var listeners = /* @__PURE__ */ new Set();
          var emitted;
          var receive = function(e) {
            emitted = e;
            listeners.forEach(function(listener) {
              return listener(e);
            });
            if (canceled) {
              return;
            }
            _this.send(utils.toSCXMLEvent(e, {
              origin: id
            }));
          };
          var callbackStop;
          try {
            callbackStop = callback(receive, function(newListener) {
              receivers.add(newListener);
            });
          } catch (err) {
            this.send(actions.error(id, err));
          }
          if (utils.isPromiseLike(callbackStop)) {
            return this.spawnPromise(callbackStop, id);
          }
          var actor = (_a = {
            id,
            send: function(event2) {
              return receivers.forEach(function(receiver) {
                return receiver(event2);
              });
            },
            subscribe: function(next) {
              var observer = utils.toObserver(next);
              listeners.add(observer.next);
              return {
                unsubscribe: function() {
                  listeners.delete(observer.next);
                }
              };
            },
            stop: function() {
              canceled = true;
              if (utils.isFunction(callbackStop)) {
                callbackStop();
              }
            },
            toJSON: function() {
              return {
                id
              };
            },
            getSnapshot: function() {
              return emitted;
            }
          }, _a[utils.symbolObservable] = function() {
            return this;
          }, _a);
          this.children.set(id, actor);
          return actor;
        };
        Interpreter2.prototype.spawnObservable = function(source, id) {
          var _a;
          var _this = this;
          var emitted;
          var subscription = source.subscribe(function(value) {
            emitted = value;
            _this.send(utils.toSCXMLEvent(value, {
              origin: id
            }));
          }, function(err) {
            _this.removeChild(id);
            _this.send(utils.toSCXMLEvent(actions.error(id, err), {
              origin: id
            }));
          }, function() {
            _this.removeChild(id);
            _this.send(utils.toSCXMLEvent(actions.doneInvoke(id), {
              origin: id
            }));
          });
          var actor = (_a = {
            id,
            send: function() {
              return void 0;
            },
            subscribe: function(next, handleError, complete) {
              return source.subscribe(next, handleError, complete);
            },
            stop: function() {
              return subscription.unsubscribe();
            },
            getSnapshot: function() {
              return emitted;
            },
            toJSON: function() {
              return {
                id
              };
            }
          }, _a[utils.symbolObservable] = function() {
            return this;
          }, _a);
          this.children.set(id, actor);
          return actor;
        };
        Interpreter2.prototype.spawnActor = function(actor, name) {
          this.children.set(name, actor);
          return actor;
        };
        Interpreter2.prototype.spawnActivity = function(activity) {
          var implementation = this.machine.options && this.machine.options.activities ? this.machine.options.activities[activity.type] : void 0;
          if (!implementation) {
            if (!environment.IS_PRODUCTION) {
              utils.warn(false, "No implementation found for activity '".concat(activity.type, "'"));
            }
            return;
          }
          var dispose = implementation(this.state.context, activity);
          this.spawnEffect(activity.id, dispose);
        };
        Interpreter2.prototype.spawnEffect = function(id, dispose) {
          var _a;
          this.children.set(id, (_a = {
            id,
            send: function() {
              return void 0;
            },
            subscribe: function() {
              return {
                unsubscribe: function() {
                  return void 0;
                }
              };
            },
            stop: dispose || void 0,
            getSnapshot: function() {
              return void 0;
            },
            toJSON: function() {
              return {
                id
              };
            }
          }, _a[utils.symbolObservable] = function() {
            return this;
          }, _a));
        };
        Interpreter2.prototype.attachDev = function() {
          var global2 = devTools.getGlobal();
          if (this.options.devTools && global2) {
            if (global2.__REDUX_DEVTOOLS_EXTENSION__) {
              var devToolsOptions = typeof this.options.devTools === "object" ? this.options.devTools : void 0;
              this.devTools = global2.__REDUX_DEVTOOLS_EXTENSION__.connect(_tslib.__assign(_tslib.__assign({
                name: this.id,
                autoPause: true,
                stateSanitizer: function(state) {
                  return {
                    value: state.value,
                    context: state.context,
                    actions: state.actions
                  };
                }
              }, devToolsOptions), {
                features: _tslib.__assign({
                  jump: false,
                  skip: false
                }, devToolsOptions ? devToolsOptions.features : void 0)
              }), this.machine);
              this.devTools.init(this.state);
            }
            devTools.registerService(this);
          }
        };
        Interpreter2.prototype.toJSON = function() {
          return {
            id: this.id
          };
        };
        Interpreter2.prototype[utils.symbolObservable] = function() {
          return this;
        };
        Interpreter2.prototype.getSnapshot = function() {
          if (this.status === exports.InterpreterStatus.NotStarted) {
            return this.initialState;
          }
          return this._state;
        };
        Interpreter2.defaultOptions = {
          execute: true,
          deferEvents: true,
          clock: {
            setTimeout: function(fn, ms) {
              return setTimeout(fn, ms);
            },
            clearTimeout: function(id) {
              return clearTimeout(id);
            }
          },
          logger: /* @__PURE__ */ console.log.bind(console),
          devTools: false
        };
        Interpreter2.interpret = interpret2;
        return Interpreter2;
      }()
    );
    var resolveSpawnOptions = function(nameOrOptions) {
      if (utils.isString(nameOrOptions)) {
        return _tslib.__assign(_tslib.__assign({}, DEFAULT_SPAWN_OPTIONS), {
          name: nameOrOptions
        });
      }
      return _tslib.__assign(_tslib.__assign(_tslib.__assign({}, DEFAULT_SPAWN_OPTIONS), {
        name: utils.uniqueId()
      }), nameOrOptions);
    };
    function spawn(entity, nameOrOptions) {
      var resolvedOptions = resolveSpawnOptions(nameOrOptions);
      return serviceScope.consume(function(service) {
        if (!environment.IS_PRODUCTION) {
          var isLazyEntity = utils.isMachine(entity) || utils.isFunction(entity);
          utils.warn(!!service || isLazyEntity, 'Attempted to spawn an Actor (ID: "'.concat(utils.isMachine(entity) ? entity.id : "undefined", '") outside of a service. This will have no effect.'));
        }
        if (service) {
          return service.spawn(entity, resolvedOptions.name, resolvedOptions);
        } else {
          return Actor.createDeferredActor(entity, resolvedOptions.name);
        }
      });
    }
    function interpret2(machine2, options) {
      var interpreter = new Interpreter(machine2, options);
      return interpreter;
    }
    exports.Interpreter = Interpreter;
    exports.interpret = interpret2;
    exports.spawn = spawn;
  }
});

// node_modules/.pnpm/xstate@4.37.1/node_modules/xstate/lib/invokeUtils.js
var require_invokeUtils = __commonJS({
  "node_modules/.pnpm/xstate@4.37.1/node_modules/xstate/lib/invokeUtils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var _tslib = require_tslib();
    require_types();
    var actionTypes = require_actionTypes();
    require_utils();
    require_environment();
    function toInvokeSource(src) {
      if (typeof src === "string") {
        var simpleSrc = {
          type: src
        };
        simpleSrc.toString = function() {
          return src;
        };
        return simpleSrc;
      }
      return src;
    }
    function toInvokeDefinition(invokeConfig) {
      return _tslib.__assign(_tslib.__assign({
        type: actionTypes.invoke
      }, invokeConfig), {
        toJSON: function() {
          invokeConfig.onDone;
          invokeConfig.onError;
          var invokeDef = _tslib.__rest(invokeConfig, ["onDone", "onError"]);
          return _tslib.__assign(_tslib.__assign({}, invokeDef), {
            type: actionTypes.invoke,
            src: toInvokeSource(invokeConfig.src)
          });
        }
      });
    }
    exports.toInvokeDefinition = toInvokeDefinition;
    exports.toInvokeSource = toInvokeSource;
  }
});

// node_modules/.pnpm/xstate@4.37.1/node_modules/xstate/lib/StateNode.js
var require_StateNode = __commonJS({
  "node_modules/.pnpm/xstate@4.37.1/node_modules/xstate/lib/StateNode.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var _tslib = require_tslib();
    var utils = require_utils();
    var State = require_State();
    var actionTypes = require_actionTypes();
    var actions = require_actions();
    var environment = require_environment();
    var constants = require_constants();
    var stateUtils = require_stateUtils();
    var Actor = require_Actor();
    var invokeUtils = require_invokeUtils();
    var NULL_EVENT = "";
    var STATE_IDENTIFIER = "#";
    var WILDCARD = "*";
    var EMPTY_OBJECT = {};
    var isStateId = function(str) {
      return str[0] === STATE_IDENTIFIER;
    };
    var createDefaultOptions = function() {
      return {
        actions: {},
        guards: {},
        services: {},
        activities: {},
        delays: {}
      };
    };
    var validateArrayifiedTransitions = function(stateNode, event2, transitions) {
      var hasNonLastUnguardedTarget = transitions.slice(0, -1).some(function(transition) {
        return !("cond" in transition) && !("in" in transition) && (utils.isString(transition.target) || utils.isMachine(transition.target));
      });
      var eventText = event2 === NULL_EVENT ? "the transient event" : "event '".concat(event2, "'");
      utils.warn(!hasNonLastUnguardedTarget, "One or more transitions for ".concat(eventText, " on state '").concat(stateNode.id, "' are unreachable. ") + "Make sure that the default transition is the last one defined.");
    };
    var StateNode = (
      /** @class */
      /* @__PURE__ */ function() {
        function StateNode2(config, options, _context, _stateInfo) {
          if (_context === void 0) {
            _context = "context" in config ? config.context : void 0;
          }
          var _this = this;
          var _a;
          this.config = config;
          this._context = _context;
          this.order = -1;
          this.__xstatenode = true;
          this.__cache = {
            events: void 0,
            relativeValue: /* @__PURE__ */ new Map(),
            initialStateValue: void 0,
            initialState: void 0,
            on: void 0,
            transitions: void 0,
            candidates: {},
            delayedTransitions: void 0
          };
          this.idMap = {};
          this.tags = [];
          this.options = Object.assign(createDefaultOptions(), options);
          this.parent = _stateInfo === null || _stateInfo === void 0 ? void 0 : _stateInfo.parent;
          this.key = this.config.key || (_stateInfo === null || _stateInfo === void 0 ? void 0 : _stateInfo.key) || this.config.id || "(machine)";
          this.machine = this.parent ? this.parent.machine : this;
          this.path = this.parent ? this.parent.path.concat(this.key) : [];
          this.delimiter = this.config.delimiter || (this.parent ? this.parent.delimiter : constants.STATE_DELIMITER);
          this.id = this.config.id || _tslib.__spreadArray([this.machine.key], _tslib.__read(this.path), false).join(this.delimiter);
          this.version = this.parent ? this.parent.version : this.config.version;
          this.type = this.config.type || (this.config.parallel ? "parallel" : this.config.states && Object.keys(this.config.states).length ? "compound" : this.config.history ? "history" : "atomic");
          this.schema = this.parent ? this.machine.schema : (_a = this.config.schema) !== null && _a !== void 0 ? _a : {};
          this.description = this.config.description;
          if (!environment.IS_PRODUCTION) {
            utils.warn(!("parallel" in this.config), 'The "parallel" property is deprecated and will be removed in version 4.1. '.concat(this.config.parallel ? "Replace with `type: 'parallel'`" : "Use `type: '".concat(this.type, "'`"), " in the config for state node '").concat(this.id, "' instead."));
          }
          this.initial = this.config.initial;
          this.states = this.config.states ? utils.mapValues(this.config.states, function(stateConfig, key) {
            var _a2;
            var stateNode = new StateNode2(stateConfig, {}, void 0, {
              parent: _this,
              key
            });
            Object.assign(_this.idMap, _tslib.__assign((_a2 = {}, _a2[stateNode.id] = stateNode, _a2), stateNode.idMap));
            return stateNode;
          }) : EMPTY_OBJECT;
          var order = 0;
          function dfs(stateNode) {
            var e_1, _a2;
            stateNode.order = order++;
            try {
              for (var _b = _tslib.__values(stateUtils.getAllChildren(stateNode)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var child = _c.value;
                dfs(child);
              }
            } catch (e_1_1) {
              e_1 = {
                error: e_1_1
              };
            } finally {
              try {
                if (_c && !_c.done && (_a2 = _b.return))
                  _a2.call(_b);
              } finally {
                if (e_1)
                  throw e_1.error;
              }
            }
          }
          dfs(this);
          this.history = this.config.history === true ? "shallow" : this.config.history || false;
          this._transient = !!this.config.always || (!this.config.on ? false : Array.isArray(this.config.on) ? this.config.on.some(function(_a2) {
            var event2 = _a2.event;
            return event2 === NULL_EVENT;
          }) : NULL_EVENT in this.config.on);
          this.strict = !!this.config.strict;
          this.onEntry = utils.toArray(this.config.entry || this.config.onEntry).map(function(action) {
            return actions.toActionObject(action);
          });
          this.onExit = utils.toArray(this.config.exit || this.config.onExit).map(function(action) {
            return actions.toActionObject(action);
          });
          this.meta = this.config.meta;
          this.doneData = this.type === "final" ? this.config.data : void 0;
          this.invoke = utils.toArray(this.config.invoke).map(function(invokeConfig, i) {
            var _a2, _b;
            if (utils.isMachine(invokeConfig)) {
              var invokeId = utils.createInvokeId(_this.id, i);
              _this.machine.options.services = _tslib.__assign((_a2 = {}, _a2[invokeId] = invokeConfig, _a2), _this.machine.options.services);
              return invokeUtils.toInvokeDefinition({
                src: invokeId,
                id: invokeId
              });
            } else if (utils.isString(invokeConfig.src)) {
              var invokeId = invokeConfig.id || utils.createInvokeId(_this.id, i);
              return invokeUtils.toInvokeDefinition(_tslib.__assign(_tslib.__assign({}, invokeConfig), {
                id: invokeId,
                src: invokeConfig.src
              }));
            } else if (utils.isMachine(invokeConfig.src) || utils.isFunction(invokeConfig.src)) {
              var invokeId = invokeConfig.id || utils.createInvokeId(_this.id, i);
              _this.machine.options.services = _tslib.__assign((_b = {}, _b[invokeId] = invokeConfig.src, _b), _this.machine.options.services);
              return invokeUtils.toInvokeDefinition(_tslib.__assign(_tslib.__assign({
                id: invokeId
              }, invokeConfig), {
                src: invokeId
              }));
            } else {
              var invokeSource = invokeConfig.src;
              return invokeUtils.toInvokeDefinition(_tslib.__assign(_tslib.__assign({
                id: utils.createInvokeId(_this.id, i)
              }, invokeConfig), {
                src: invokeSource
              }));
            }
          });
          this.activities = utils.toArray(this.config.activities).concat(this.invoke).map(function(activity) {
            return actions.toActivityDefinition(activity);
          });
          this.transition = this.transition.bind(this);
          this.tags = utils.toArray(this.config.tags);
        }
        StateNode2.prototype._init = function() {
          if (this.__cache.transitions) {
            return;
          }
          stateUtils.getAllStateNodes(this).forEach(function(stateNode) {
            return stateNode.on;
          });
        };
        StateNode2.prototype.withConfig = function(options, context) {
          var _a = this.options, actions2 = _a.actions, activities = _a.activities, guards = _a.guards, services = _a.services, delays = _a.delays;
          return new StateNode2(this.config, {
            actions: _tslib.__assign(_tslib.__assign({}, actions2), options.actions),
            activities: _tslib.__assign(_tslib.__assign({}, activities), options.activities),
            guards: _tslib.__assign(_tslib.__assign({}, guards), options.guards),
            services: _tslib.__assign(_tslib.__assign({}, services), options.services),
            delays: _tslib.__assign(_tslib.__assign({}, delays), options.delays)
          }, context !== null && context !== void 0 ? context : this.context);
        };
        StateNode2.prototype.withContext = function(context) {
          return new StateNode2(this.config, this.options, context);
        };
        Object.defineProperty(StateNode2.prototype, "context", {
          get: function() {
            return utils.isFunction(this._context) ? this._context() : this._context;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(StateNode2.prototype, "definition", {
          /**
           * The well-structured state node definition.
           */
          get: function() {
            return {
              id: this.id,
              key: this.key,
              version: this.version,
              context: this.context,
              type: this.type,
              initial: this.initial,
              history: this.history,
              states: utils.mapValues(this.states, function(state) {
                return state.definition;
              }),
              on: this.on,
              transitions: this.transitions,
              entry: this.onEntry,
              exit: this.onExit,
              activities: this.activities || [],
              meta: this.meta,
              order: this.order || -1,
              data: this.doneData,
              invoke: this.invoke,
              description: this.description,
              tags: this.tags
            };
          },
          enumerable: false,
          configurable: true
        });
        StateNode2.prototype.toJSON = function() {
          return this.definition;
        };
        Object.defineProperty(StateNode2.prototype, "on", {
          /**
           * The mapping of events to transitions.
           */
          get: function() {
            if (this.__cache.on) {
              return this.__cache.on;
            }
            var transitions = this.transitions;
            return this.__cache.on = transitions.reduce(function(map, transition) {
              map[transition.eventType] = map[transition.eventType] || [];
              map[transition.eventType].push(transition);
              return map;
            }, {});
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(StateNode2.prototype, "after", {
          get: function() {
            return this.__cache.delayedTransitions || (this.__cache.delayedTransitions = this.getDelayedTransitions(), this.__cache.delayedTransitions);
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(StateNode2.prototype, "transitions", {
          /**
           * All the transitions that can be taken from this state node.
           */
          get: function() {
            return this.__cache.transitions || (this.__cache.transitions = this.formatTransitions(), this.__cache.transitions);
          },
          enumerable: false,
          configurable: true
        });
        StateNode2.prototype.getCandidates = function(eventName) {
          if (this.__cache.candidates[eventName]) {
            return this.__cache.candidates[eventName];
          }
          var transient = eventName === NULL_EVENT;
          var candidates = this.transitions.filter(function(transition) {
            var sameEventType = transition.eventType === eventName;
            return transient ? sameEventType : sameEventType || transition.eventType === WILDCARD;
          });
          this.__cache.candidates[eventName] = candidates;
          return candidates;
        };
        StateNode2.prototype.getDelayedTransitions = function() {
          var _this = this;
          var afterConfig = this.config.after;
          if (!afterConfig) {
            return [];
          }
          var mutateEntryExit = function(delay, i) {
            var delayRef = utils.isFunction(delay) ? "".concat(_this.id, ":delay[").concat(i, "]") : delay;
            var eventType = actions.after(delayRef, _this.id);
            _this.onEntry.push(actions.send(eventType, {
              delay
            }));
            _this.onExit.push(actions.cancel(eventType));
            return eventType;
          };
          var delayedTransitions = utils.isArray(afterConfig) ? afterConfig.map(function(transition, i) {
            var eventType = mutateEntryExit(transition.delay, i);
            return _tslib.__assign(_tslib.__assign({}, transition), {
              event: eventType
            });
          }) : utils.flatten(Object.keys(afterConfig).map(function(delay, i) {
            var configTransition = afterConfig[delay];
            var resolvedTransition = utils.isString(configTransition) ? {
              target: configTransition
            } : configTransition;
            var resolvedDelay = !isNaN(+delay) ? +delay : delay;
            var eventType = mutateEntryExit(resolvedDelay, i);
            return utils.toArray(resolvedTransition).map(function(transition) {
              return _tslib.__assign(_tslib.__assign({}, transition), {
                event: eventType,
                delay: resolvedDelay
              });
            });
          }));
          return delayedTransitions.map(function(delayedTransition) {
            var delay = delayedTransition.delay;
            return _tslib.__assign(_tslib.__assign({}, _this.formatTransition(delayedTransition)), {
              delay
            });
          });
        };
        StateNode2.prototype.getStateNodes = function(state) {
          var _a;
          var _this = this;
          if (!state) {
            return [];
          }
          var stateValue = state instanceof State.State ? state.value : utils.toStateValue(state, this.delimiter);
          if (utils.isString(stateValue)) {
            var initialStateValue = this.getStateNode(stateValue).initial;
            return initialStateValue !== void 0 ? this.getStateNodes((_a = {}, _a[stateValue] = initialStateValue, _a)) : [this, this.states[stateValue]];
          }
          var subStateKeys = Object.keys(stateValue);
          var subStateNodes = [this];
          subStateNodes.push.apply(subStateNodes, _tslib.__spreadArray([], _tslib.__read(utils.flatten(subStateKeys.map(function(subStateKey) {
            return _this.getStateNode(subStateKey).getStateNodes(stateValue[subStateKey]);
          }))), false));
          return subStateNodes;
        };
        StateNode2.prototype.handles = function(event2) {
          var eventType = utils.getEventType(event2);
          return this.events.includes(eventType);
        };
        StateNode2.prototype.resolveState = function(state) {
          var stateFromConfig = state instanceof State.State ? state : State.State.create(state);
          var configuration = Array.from(stateUtils.getConfiguration([], this.getStateNodes(stateFromConfig.value)));
          return new State.State(_tslib.__assign(_tslib.__assign({}, stateFromConfig), {
            value: this.resolve(stateFromConfig.value),
            configuration,
            done: stateUtils.isInFinalState(configuration, this),
            tags: stateUtils.getTagsFromConfiguration(configuration),
            machine: this.machine
          }));
        };
        StateNode2.prototype.transitionLeafNode = function(stateValue, state, _event) {
          var stateNode = this.getStateNode(stateValue);
          var next = stateNode.next(state, _event);
          if (!next || !next.transitions.length) {
            return this.next(state, _event);
          }
          return next;
        };
        StateNode2.prototype.transitionCompoundNode = function(stateValue, state, _event) {
          var subStateKeys = Object.keys(stateValue);
          var stateNode = this.getStateNode(subStateKeys[0]);
          var next = stateNode._transition(stateValue[subStateKeys[0]], state, _event);
          if (!next || !next.transitions.length) {
            return this.next(state, _event);
          }
          return next;
        };
        StateNode2.prototype.transitionParallelNode = function(stateValue, state, _event) {
          var e_2, _a;
          var transitionMap = {};
          try {
            for (var _b = _tslib.__values(Object.keys(stateValue)), _c = _b.next(); !_c.done; _c = _b.next()) {
              var subStateKey = _c.value;
              var subStateValue = stateValue[subStateKey];
              if (!subStateValue) {
                continue;
              }
              var subStateNode = this.getStateNode(subStateKey);
              var next = subStateNode._transition(subStateValue, state, _event);
              if (next) {
                transitionMap[subStateKey] = next;
              }
            }
          } catch (e_2_1) {
            e_2 = {
              error: e_2_1
            };
          } finally {
            try {
              if (_c && !_c.done && (_a = _b.return))
                _a.call(_b);
            } finally {
              if (e_2)
                throw e_2.error;
            }
          }
          var stateTransitions = Object.keys(transitionMap).map(function(key) {
            return transitionMap[key];
          });
          var enabledTransitions = utils.flatten(stateTransitions.map(function(st) {
            return st.transitions;
          }));
          var willTransition = stateTransitions.some(function(st) {
            return st.transitions.length > 0;
          });
          if (!willTransition) {
            return this.next(state, _event);
          }
          var configuration = utils.flatten(Object.keys(transitionMap).map(function(key) {
            return transitionMap[key].configuration;
          }));
          return {
            transitions: enabledTransitions,
            exitSet: utils.flatten(stateTransitions.map(function(t) {
              return t.exitSet;
            })),
            configuration,
            source: state,
            actions: utils.flatten(Object.keys(transitionMap).map(function(key) {
              return transitionMap[key].actions;
            }))
          };
        };
        StateNode2.prototype._transition = function(stateValue, state, _event) {
          if (utils.isString(stateValue)) {
            return this.transitionLeafNode(stateValue, state, _event);
          }
          if (Object.keys(stateValue).length === 1) {
            return this.transitionCompoundNode(stateValue, state, _event);
          }
          return this.transitionParallelNode(stateValue, state, _event);
        };
        StateNode2.prototype.getTransitionData = function(state, event2) {
          return this._transition(state.value, state, utils.toSCXMLEvent(event2));
        };
        StateNode2.prototype.next = function(state, _event) {
          var e_3, _a;
          var _this = this;
          var eventName = _event.name;
          var actions2 = [];
          var nextStateNodes = [];
          var selectedTransition;
          try {
            for (var _b = _tslib.__values(this.getCandidates(eventName)), _c = _b.next(); !_c.done; _c = _b.next()) {
              var candidate = _c.value;
              var cond = candidate.cond, stateIn = candidate.in;
              var resolvedContext = state.context;
              var isInState = stateIn ? utils.isString(stateIn) && isStateId(stateIn) ? (
                // Check if in state by ID
                state.matches(utils.toStateValue(this.getStateNodeById(stateIn).path, this.delimiter))
              ) : (
                // Check if in state by relative grandparent
                utils.matchesState(utils.toStateValue(stateIn, this.delimiter), utils.path(this.path.slice(0, -2))(state.value))
              ) : true;
              var guardPassed = false;
              try {
                guardPassed = !cond || utils.evaluateGuard(this.machine, cond, resolvedContext, _event, state);
              } catch (err) {
                throw new Error("Unable to evaluate guard '".concat(cond.name || cond.type, "' in transition for event '").concat(eventName, "' in state node '").concat(this.id, "':\n").concat(err.message));
              }
              if (guardPassed && isInState) {
                if (candidate.target !== void 0) {
                  nextStateNodes = candidate.target;
                }
                actions2.push.apply(actions2, _tslib.__spreadArray([], _tslib.__read(candidate.actions), false));
                selectedTransition = candidate;
                break;
              }
            }
          } catch (e_3_1) {
            e_3 = {
              error: e_3_1
            };
          } finally {
            try {
              if (_c && !_c.done && (_a = _b.return))
                _a.call(_b);
            } finally {
              if (e_3)
                throw e_3.error;
            }
          }
          if (!selectedTransition) {
            return void 0;
          }
          if (!nextStateNodes.length) {
            return {
              transitions: [selectedTransition],
              exitSet: [],
              configuration: state.value ? [this] : [],
              source: state,
              actions: actions2
            };
          }
          var allNextStateNodes = utils.flatten(nextStateNodes.map(function(stateNode) {
            return _this.getRelativeStateNodes(stateNode, state.historyValue);
          }));
          var isInternal = !!selectedTransition.internal;
          return {
            transitions: [selectedTransition],
            exitSet: isInternal ? [] : utils.flatten(nextStateNodes.map(function(targetNode) {
              return _this.getPotentiallyReenteringNodes(targetNode);
            })),
            configuration: allNextStateNodes,
            source: state,
            actions: actions2
          };
        };
        StateNode2.prototype.getPotentiallyReenteringNodes = function(targetNode) {
          if (this.order < targetNode.order) {
            return [this];
          }
          var nodes = [];
          var marker = this;
          var possibleAncestor = targetNode;
          while (marker && marker !== possibleAncestor) {
            nodes.push(marker);
            marker = marker.parent;
          }
          if (marker !== possibleAncestor) {
            return [];
          }
          nodes.push(possibleAncestor);
          return nodes;
        };
        StateNode2.prototype.getActions = function(resolvedConfig, isDone, transition, currentContext, _event, prevState, predictableExec) {
          var e_4, _a, e_5, _b;
          var _this = this;
          var prevConfig = prevState ? stateUtils.getConfiguration([], this.getStateNodes(prevState.value)) : [];
          var entrySet = /* @__PURE__ */ new Set();
          try {
            for (var _c = _tslib.__values(Array.from(resolvedConfig).sort(function(a, b) {
              return a.order - b.order;
            })), _d = _c.next(); !_d.done; _d = _c.next()) {
              var sn = _d.value;
              if (!stateUtils.has(prevConfig, sn) || stateUtils.has(transition.exitSet, sn) || sn.parent && entrySet.has(sn.parent)) {
                entrySet.add(sn);
              }
            }
          } catch (e_4_1) {
            e_4 = {
              error: e_4_1
            };
          } finally {
            try {
              if (_d && !_d.done && (_a = _c.return))
                _a.call(_c);
            } finally {
              if (e_4)
                throw e_4.error;
            }
          }
          try {
            for (var prevConfig_1 = _tslib.__values(prevConfig), prevConfig_1_1 = prevConfig_1.next(); !prevConfig_1_1.done; prevConfig_1_1 = prevConfig_1.next()) {
              var sn = prevConfig_1_1.value;
              if (!stateUtils.has(resolvedConfig, sn) || stateUtils.has(transition.exitSet, sn.parent)) {
                transition.exitSet.push(sn);
              }
            }
          } catch (e_5_1) {
            e_5 = {
              error: e_5_1
            };
          } finally {
            try {
              if (prevConfig_1_1 && !prevConfig_1_1.done && (_b = prevConfig_1.return))
                _b.call(prevConfig_1);
            } finally {
              if (e_5)
                throw e_5.error;
            }
          }
          transition.exitSet.sort(function(a, b) {
            return b.order - a.order;
          });
          var entryStates = Array.from(entrySet).sort(function(a, b) {
            return a.order - b.order;
          });
          var exitStates = new Set(transition.exitSet);
          var doneEvents = utils.flatten(entryStates.map(function(sn2) {
            var events = [];
            if (sn2.type !== "final") {
              return events;
            }
            var parent = sn2.parent;
            if (!parent.parent) {
              return events;
            }
            events.push(
              actions.done(sn2.id, sn2.doneData),
              // TODO: deprecate - final states should not emit done events for their own state.
              actions.done(parent.id, sn2.doneData ? utils.mapContext(sn2.doneData, currentContext, _event) : void 0)
            );
            var grandparent = parent.parent;
            if (grandparent.type === "parallel") {
              if (stateUtils.getChildren(grandparent).every(function(parentNode) {
                return stateUtils.isInFinalState(transition.configuration, parentNode);
              })) {
                events.push(actions.done(grandparent.id));
              }
            }
            return events;
          }));
          var entryActions = entryStates.map(function(stateNode) {
            var entryActions2 = stateNode.onEntry;
            var invokeActions = stateNode.activities.map(function(activity) {
              return actions.start(activity);
            });
            return {
              type: "entry",
              actions: actions.toActionObjects(predictableExec ? _tslib.__spreadArray(_tslib.__spreadArray([], _tslib.__read(entryActions2), false), _tslib.__read(invokeActions), false) : _tslib.__spreadArray(_tslib.__spreadArray([], _tslib.__read(invokeActions), false), _tslib.__read(entryActions2), false), _this.machine.options.actions)
            };
          }).concat({
            type: "state_done",
            actions: doneEvents.map(function(event2) {
              return actions.raise(event2);
            })
          });
          var exitActions = Array.from(exitStates).map(function(stateNode) {
            return {
              type: "exit",
              actions: actions.toActionObjects(_tslib.__spreadArray(_tslib.__spreadArray([], _tslib.__read(stateNode.onExit), false), _tslib.__read(stateNode.activities.map(function(activity) {
                return actions.stop(activity);
              })), false), _this.machine.options.actions)
            };
          });
          var actions$1 = exitActions.concat({
            type: "transition",
            actions: actions.toActionObjects(transition.actions, this.machine.options.actions)
          }).concat(entryActions);
          if (isDone) {
            var stopActions = actions.toActionObjects(utils.flatten(_tslib.__spreadArray([], _tslib.__read(resolvedConfig), false).sort(function(a, b) {
              return b.order - a.order;
            }).map(function(stateNode) {
              return stateNode.onExit;
            })), this.machine.options.actions).filter(function(action) {
              return !utils.isRaisableAction(action);
            });
            return actions$1.concat({
              type: "stop",
              actions: stopActions
            });
          }
          return actions$1;
        };
        StateNode2.prototype.transition = function(state, event2, context, exec) {
          if (state === void 0) {
            state = this.initialState;
          }
          var _event = utils.toSCXMLEvent(event2);
          var currentState;
          if (state instanceof State.State) {
            currentState = context === void 0 ? state : this.resolveState(State.State.from(state, context));
          } else {
            var resolvedStateValue = utils.isString(state) ? this.resolve(utils.pathToStateValue(this.getResolvedPath(state))) : this.resolve(state);
            var resolvedContext = context !== null && context !== void 0 ? context : this.machine.context;
            currentState = this.resolveState(State.State.from(resolvedStateValue, resolvedContext));
          }
          if (!environment.IS_PRODUCTION && _event.name === WILDCARD) {
            throw new Error("An event cannot have the wildcard type ('".concat(WILDCARD, "')"));
          }
          if (this.strict) {
            if (!this.events.includes(_event.name) && !utils.isBuiltInEvent(_event.name)) {
              throw new Error("Machine '".concat(this.id, "' does not accept event '").concat(_event.name, "'"));
            }
          }
          var stateTransition = this._transition(currentState.value, currentState, _event) || {
            transitions: [],
            configuration: [],
            exitSet: [],
            source: currentState,
            actions: []
          };
          var prevConfig = stateUtils.getConfiguration([], this.getStateNodes(currentState.value));
          var resolvedConfig = stateTransition.configuration.length ? stateUtils.getConfiguration(prevConfig, stateTransition.configuration) : prevConfig;
          stateTransition.configuration = _tslib.__spreadArray([], _tslib.__read(resolvedConfig), false);
          return this.resolveTransition(stateTransition, currentState, currentState.context, exec, _event);
        };
        StateNode2.prototype.resolveRaisedTransition = function(state, _event, originalEvent, predictableExec) {
          var _a;
          var currentActions = state.actions;
          state = this.transition(state, _event, void 0, predictableExec);
          state._event = originalEvent;
          state.event = originalEvent.data;
          (_a = state.actions).unshift.apply(_a, _tslib.__spreadArray([], _tslib.__read(currentActions), false));
          return state;
        };
        StateNode2.prototype.resolveTransition = function(stateTransition, currentState, context, predictableExec, _event) {
          var e_6, _a, e_7, _b;
          var _this = this;
          if (_event === void 0) {
            _event = actions.initEvent;
          }
          var configuration = stateTransition.configuration;
          var willTransition = !currentState || stateTransition.transitions.length > 0;
          var resolvedConfiguration = willTransition ? stateTransition.configuration : currentState ? currentState.configuration : [];
          var isDone = stateUtils.isInFinalState(resolvedConfiguration, this);
          var resolvedStateValue = willTransition ? stateUtils.getValue(this.machine, configuration) : void 0;
          var historyValue = currentState ? currentState.historyValue ? currentState.historyValue : stateTransition.source ? this.machine.historyValue(currentState.value) : void 0 : void 0;
          var actionBlocks = this.getActions(new Set(resolvedConfiguration), isDone, stateTransition, context, _event, currentState, predictableExec);
          var activities = currentState ? _tslib.__assign({}, currentState.activities) : {};
          try {
            for (var actionBlocks_1 = _tslib.__values(actionBlocks), actionBlocks_1_1 = actionBlocks_1.next(); !actionBlocks_1_1.done; actionBlocks_1_1 = actionBlocks_1.next()) {
              var block = actionBlocks_1_1.value;
              try {
                for (var _c = (e_7 = void 0, _tslib.__values(block.actions)), _d = _c.next(); !_d.done; _d = _c.next()) {
                  var action = _d.value;
                  if (action.type === actionTypes.start) {
                    activities[action.activity.id || action.activity.type] = action;
                  } else if (action.type === actionTypes.stop) {
                    activities[action.activity.id || action.activity.type] = false;
                  }
                }
              } catch (e_7_1) {
                e_7 = {
                  error: e_7_1
                };
              } finally {
                try {
                  if (_d && !_d.done && (_b = _c.return))
                    _b.call(_c);
                } finally {
                  if (e_7)
                    throw e_7.error;
                }
              }
            }
          } catch (e_6_1) {
            e_6 = {
              error: e_6_1
            };
          } finally {
            try {
              if (actionBlocks_1_1 && !actionBlocks_1_1.done && (_a = actionBlocks_1.return))
                _a.call(actionBlocks_1);
            } finally {
              if (e_6)
                throw e_6.error;
            }
          }
          var _e = _tslib.__read(actions.resolveActions(this, currentState, context, _event, actionBlocks, predictableExec, this.machine.config.predictableActionArguments || this.machine.config.preserveActionOrder), 2), resolvedActions = _e[0], updatedContext = _e[1];
          var _f = _tslib.__read(utils.partition(resolvedActions, utils.isRaisableAction), 2), raisedEvents = _f[0], nonRaisedActions = _f[1];
          var invokeActions = resolvedActions.filter(function(action2) {
            var _a2;
            return action2.type === actionTypes.start && ((_a2 = action2.activity) === null || _a2 === void 0 ? void 0 : _a2.type) === actionTypes.invoke;
          });
          var children = invokeActions.reduce(function(acc, action2) {
            acc[action2.activity.id] = Actor.createInvocableActor(action2.activity, _this.machine, updatedContext, _event);
            return acc;
          }, currentState ? _tslib.__assign({}, currentState.children) : {});
          var nextState = new State.State({
            value: resolvedStateValue || currentState.value,
            context: updatedContext,
            _event,
            // Persist _sessionid between states
            _sessionid: currentState ? currentState._sessionid : null,
            historyValue: resolvedStateValue ? historyValue ? utils.updateHistoryValue(historyValue, resolvedStateValue) : void 0 : currentState ? currentState.historyValue : void 0,
            history: !resolvedStateValue || stateTransition.source ? currentState : void 0,
            actions: resolvedStateValue ? nonRaisedActions : [],
            activities: resolvedStateValue ? activities : currentState ? currentState.activities : {},
            events: [],
            configuration: resolvedConfiguration,
            transitions: stateTransition.transitions,
            children,
            done: isDone,
            tags: stateUtils.getTagsFromConfiguration(resolvedConfiguration),
            machine: this
          });
          var didUpdateContext = context !== updatedContext;
          nextState.changed = _event.name === actionTypes.update || didUpdateContext;
          var history = nextState.history;
          if (history) {
            delete history.history;
          }
          var hasAlwaysTransitions = !isDone && (this._transient || configuration.some(function(stateNode) {
            return stateNode._transient;
          }));
          if (!willTransition && (!hasAlwaysTransitions || _event.name === NULL_EVENT)) {
            return nextState;
          }
          var maybeNextState = nextState;
          if (!isDone) {
            if (hasAlwaysTransitions) {
              maybeNextState = this.resolveRaisedTransition(maybeNextState, {
                type: actionTypes.nullEvent
              }, _event, predictableExec);
            }
            while (raisedEvents.length) {
              var raisedEvent = raisedEvents.shift();
              maybeNextState = this.resolveRaisedTransition(maybeNextState, raisedEvent._event, _event, predictableExec);
            }
          }
          var changed = maybeNextState.changed || (history ? !!maybeNextState.actions.length || didUpdateContext || typeof history.value !== typeof maybeNextState.value || !State.stateValuesEqual(maybeNextState.value, history.value) : void 0);
          maybeNextState.changed = changed;
          maybeNextState.history = history;
          return maybeNextState;
        };
        StateNode2.prototype.getStateNode = function(stateKey) {
          if (isStateId(stateKey)) {
            return this.machine.getStateNodeById(stateKey);
          }
          if (!this.states) {
            throw new Error("Unable to retrieve child state '".concat(stateKey, "' from '").concat(this.id, "'; no child states exist."));
          }
          var result = this.states[stateKey];
          if (!result) {
            throw new Error("Child state '".concat(stateKey, "' does not exist on '").concat(this.id, "'"));
          }
          return result;
        };
        StateNode2.prototype.getStateNodeById = function(stateId) {
          var resolvedStateId = isStateId(stateId) ? stateId.slice(STATE_IDENTIFIER.length) : stateId;
          if (resolvedStateId === this.id) {
            return this;
          }
          var stateNode = this.machine.idMap[resolvedStateId];
          if (!stateNode) {
            throw new Error("Child state node '#".concat(resolvedStateId, "' does not exist on machine '").concat(this.id, "'"));
          }
          return stateNode;
        };
        StateNode2.prototype.getStateNodeByPath = function(statePath) {
          if (typeof statePath === "string" && isStateId(statePath)) {
            try {
              return this.getStateNodeById(statePath.slice(1));
            } catch (e) {
            }
          }
          var arrayStatePath = utils.toStatePath(statePath, this.delimiter).slice();
          var currentStateNode = this;
          while (arrayStatePath.length) {
            var key = arrayStatePath.shift();
            if (!key.length) {
              break;
            }
            currentStateNode = currentStateNode.getStateNode(key);
          }
          return currentStateNode;
        };
        StateNode2.prototype.resolve = function(stateValue) {
          var _a;
          var _this = this;
          if (!stateValue) {
            return this.initialStateValue || EMPTY_OBJECT;
          }
          switch (this.type) {
            case "parallel":
              return utils.mapValues(this.initialStateValue, function(subStateValue, subStateKey) {
                return subStateValue ? _this.getStateNode(subStateKey).resolve(stateValue[subStateKey] || subStateValue) : EMPTY_OBJECT;
              });
            case "compound":
              if (utils.isString(stateValue)) {
                var subStateNode = this.getStateNode(stateValue);
                if (subStateNode.type === "parallel" || subStateNode.type === "compound") {
                  return _a = {}, _a[stateValue] = subStateNode.initialStateValue, _a;
                }
                return stateValue;
              }
              if (!Object.keys(stateValue).length) {
                return this.initialStateValue || {};
              }
              return utils.mapValues(stateValue, function(subStateValue, subStateKey) {
                return subStateValue ? _this.getStateNode(subStateKey).resolve(subStateValue) : EMPTY_OBJECT;
              });
            default:
              return stateValue || EMPTY_OBJECT;
          }
        };
        StateNode2.prototype.getResolvedPath = function(stateIdentifier) {
          if (isStateId(stateIdentifier)) {
            var stateNode = this.machine.idMap[stateIdentifier.slice(STATE_IDENTIFIER.length)];
            if (!stateNode) {
              throw new Error("Unable to find state node '".concat(stateIdentifier, "'"));
            }
            return stateNode.path;
          }
          return utils.toStatePath(stateIdentifier, this.delimiter);
        };
        Object.defineProperty(StateNode2.prototype, "initialStateValue", {
          get: function() {
            var _a;
            if (this.__cache.initialStateValue) {
              return this.__cache.initialStateValue;
            }
            var initialStateValue;
            if (this.type === "parallel") {
              initialStateValue = utils.mapFilterValues(this.states, function(state) {
                return state.initialStateValue || EMPTY_OBJECT;
              }, function(stateNode) {
                return !(stateNode.type === "history");
              });
            } else if (this.initial !== void 0) {
              if (!this.states[this.initial]) {
                throw new Error("Initial state '".concat(this.initial, "' not found on '").concat(this.key, "'"));
              }
              initialStateValue = stateUtils.isLeafNode(this.states[this.initial]) ? this.initial : (_a = {}, _a[this.initial] = this.states[this.initial].initialStateValue, _a);
            } else {
              initialStateValue = {};
            }
            this.__cache.initialStateValue = initialStateValue;
            return this.__cache.initialStateValue;
          },
          enumerable: false,
          configurable: true
        });
        StateNode2.prototype.getInitialState = function(stateValue, context) {
          this._init();
          var configuration = this.getStateNodes(stateValue);
          return this.resolveTransition({
            configuration,
            exitSet: [],
            transitions: [],
            source: void 0,
            actions: []
          }, void 0, context !== null && context !== void 0 ? context : this.machine.context, void 0);
        };
        Object.defineProperty(StateNode2.prototype, "initialState", {
          /**
           * The initial State instance, which includes all actions to be executed from
           * entering the initial state.
           */
          get: function() {
            var initialStateValue = this.initialStateValue;
            if (!initialStateValue) {
              throw new Error("Cannot retrieve initial state from simple state '".concat(this.id, "'."));
            }
            return this.getInitialState(initialStateValue);
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(StateNode2.prototype, "target", {
          /**
           * The target state value of the history state node, if it exists. This represents the
           * default state value to transition to if no history value exists yet.
           */
          get: function() {
            var target;
            if (this.type === "history") {
              var historyConfig = this.config;
              if (utils.isString(historyConfig.target)) {
                target = isStateId(historyConfig.target) ? utils.pathToStateValue(this.machine.getStateNodeById(historyConfig.target).path.slice(this.path.length - 1)) : historyConfig.target;
              } else {
                target = historyConfig.target;
              }
            }
            return target;
          },
          enumerable: false,
          configurable: true
        });
        StateNode2.prototype.getRelativeStateNodes = function(relativeStateId, historyValue, resolve) {
          if (resolve === void 0) {
            resolve = true;
          }
          return resolve ? relativeStateId.type === "history" ? relativeStateId.resolveHistory(historyValue) : relativeStateId.initialStateNodes : [relativeStateId];
        };
        Object.defineProperty(StateNode2.prototype, "initialStateNodes", {
          get: function() {
            var _this = this;
            if (stateUtils.isLeafNode(this)) {
              return [this];
            }
            if (this.type === "compound" && !this.initial) {
              if (!environment.IS_PRODUCTION) {
                utils.warn(false, "Compound state node '".concat(this.id, "' has no initial state."));
              }
              return [this];
            }
            var initialStateNodePaths = utils.toStatePaths(this.initialStateValue);
            return utils.flatten(initialStateNodePaths.map(function(initialPath) {
              return _this.getFromRelativePath(initialPath);
            }));
          },
          enumerable: false,
          configurable: true
        });
        StateNode2.prototype.getFromRelativePath = function(relativePath) {
          if (!relativePath.length) {
            return [this];
          }
          var _a = _tslib.__read(relativePath), stateKey = _a[0], childStatePath = _a.slice(1);
          if (!this.states) {
            throw new Error("Cannot retrieve subPath '".concat(stateKey, "' from node with no states"));
          }
          var childStateNode = this.getStateNode(stateKey);
          if (childStateNode.type === "history") {
            return childStateNode.resolveHistory();
          }
          if (!this.states[stateKey]) {
            throw new Error("Child state '".concat(stateKey, "' does not exist on '").concat(this.id, "'"));
          }
          return this.states[stateKey].getFromRelativePath(childStatePath);
        };
        StateNode2.prototype.historyValue = function(relativeStateValue) {
          if (!Object.keys(this.states).length) {
            return void 0;
          }
          return {
            current: relativeStateValue || this.initialStateValue,
            states: utils.mapFilterValues(this.states, function(stateNode, key) {
              if (!relativeStateValue) {
                return stateNode.historyValue();
              }
              var subStateValue = utils.isString(relativeStateValue) ? void 0 : relativeStateValue[key];
              return stateNode.historyValue(subStateValue || stateNode.initialStateValue);
            }, function(stateNode) {
              return !stateNode.history;
            })
          };
        };
        StateNode2.prototype.resolveHistory = function(historyValue) {
          var _this = this;
          if (this.type !== "history") {
            return [this];
          }
          var parent = this.parent;
          if (!historyValue) {
            var historyTarget = this.target;
            return historyTarget ? utils.flatten(utils.toStatePaths(historyTarget).map(function(relativeChildPath) {
              return parent.getFromRelativePath(relativeChildPath);
            })) : parent.initialStateNodes;
          }
          var subHistoryValue = utils.nestedPath(parent.path, "states")(historyValue).current;
          if (utils.isString(subHistoryValue)) {
            return [parent.getStateNode(subHistoryValue)];
          }
          return utils.flatten(utils.toStatePaths(subHistoryValue).map(function(subStatePath) {
            return _this.history === "deep" ? parent.getFromRelativePath(subStatePath) : [parent.states[subStatePath[0]]];
          }));
        };
        Object.defineProperty(StateNode2.prototype, "stateIds", {
          /**
           * All the state node IDs of this state node and its descendant state nodes.
           */
          get: function() {
            var _this = this;
            var childStateIds = utils.flatten(Object.keys(this.states).map(function(stateKey) {
              return _this.states[stateKey].stateIds;
            }));
            return [this.id].concat(childStateIds);
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(StateNode2.prototype, "events", {
          /**
           * All the event types accepted by this state node and its descendants.
           */
          get: function() {
            var e_8, _a, e_9, _b;
            if (this.__cache.events) {
              return this.__cache.events;
            }
            var states = this.states;
            var events = new Set(this.ownEvents);
            if (states) {
              try {
                for (var _c = _tslib.__values(Object.keys(states)), _d = _c.next(); !_d.done; _d = _c.next()) {
                  var stateId = _d.value;
                  var state = states[stateId];
                  if (state.states) {
                    try {
                      for (var _e = (e_9 = void 0, _tslib.__values(state.events)), _f = _e.next(); !_f.done; _f = _e.next()) {
                        var event_1 = _f.value;
                        events.add("".concat(event_1));
                      }
                    } catch (e_9_1) {
                      e_9 = {
                        error: e_9_1
                      };
                    } finally {
                      try {
                        if (_f && !_f.done && (_b = _e.return))
                          _b.call(_e);
                      } finally {
                        if (e_9)
                          throw e_9.error;
                      }
                    }
                  }
                }
              } catch (e_8_1) {
                e_8 = {
                  error: e_8_1
                };
              } finally {
                try {
                  if (_d && !_d.done && (_a = _c.return))
                    _a.call(_c);
                } finally {
                  if (e_8)
                    throw e_8.error;
                }
              }
            }
            return this.__cache.events = Array.from(events);
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(StateNode2.prototype, "ownEvents", {
          /**
           * All the events that have transitions directly from this state node.
           *
           * Excludes any inert events.
           */
          get: function() {
            var events = new Set(this.transitions.filter(function(transition) {
              return !(!transition.target && !transition.actions.length && transition.internal);
            }).map(function(transition) {
              return transition.eventType;
            }));
            return Array.from(events);
          },
          enumerable: false,
          configurable: true
        });
        StateNode2.prototype.resolveTarget = function(_target) {
          var _this = this;
          if (_target === void 0) {
            return void 0;
          }
          return _target.map(function(target) {
            if (!utils.isString(target)) {
              return target;
            }
            var isInternalTarget = target[0] === _this.delimiter;
            if (isInternalTarget && !_this.parent) {
              return _this.getStateNodeByPath(target.slice(1));
            }
            var resolvedTarget = isInternalTarget ? _this.key + target : target;
            if (_this.parent) {
              try {
                var targetStateNode = _this.parent.getStateNodeByPath(resolvedTarget);
                return targetStateNode;
              } catch (err) {
                throw new Error("Invalid transition definition for state node '".concat(_this.id, "':\n").concat(err.message));
              }
            } else {
              return _this.getStateNodeByPath(resolvedTarget);
            }
          });
        };
        StateNode2.prototype.formatTransition = function(transitionConfig) {
          var _this = this;
          var normalizedTarget = utils.normalizeTarget(transitionConfig.target);
          var internal = "internal" in transitionConfig ? transitionConfig.internal : normalizedTarget ? normalizedTarget.some(function(_target) {
            return utils.isString(_target) && _target[0] === _this.delimiter;
          }) : true;
          var guards = this.machine.options.guards;
          var target = this.resolveTarget(normalizedTarget);
          var transition = _tslib.__assign(_tslib.__assign({}, transitionConfig), {
            actions: actions.toActionObjects(utils.toArray(transitionConfig.actions)),
            cond: utils.toGuard(transitionConfig.cond, guards),
            target,
            source: this,
            internal,
            eventType: transitionConfig.event,
            toJSON: function() {
              return _tslib.__assign(_tslib.__assign({}, transition), {
                target: transition.target ? transition.target.map(function(t) {
                  return "#".concat(t.id);
                }) : void 0,
                source: "#".concat(_this.id)
              });
            }
          });
          return transition;
        };
        StateNode2.prototype.formatTransitions = function() {
          var e_10, _a;
          var _this = this;
          var onConfig;
          if (!this.config.on) {
            onConfig = [];
          } else if (Array.isArray(this.config.on)) {
            onConfig = this.config.on;
          } else {
            var _b = this.config.on, _c = WILDCARD, _d = _b[_c], wildcardConfigs = _d === void 0 ? [] : _d, strictTransitionConfigs_1 = _tslib.__rest(_b, [typeof _c === "symbol" ? _c : _c + ""]);
            onConfig = utils.flatten(Object.keys(strictTransitionConfigs_1).map(function(key) {
              if (!environment.IS_PRODUCTION && key === NULL_EVENT) {
                utils.warn(false, "Empty string transition configs (e.g., `{ on: { '': ... }}`) for transient transitions are deprecated. Specify the transition in the `{ always: ... }` property instead. " + 'Please check the `on` configuration for "#'.concat(_this.id, '".'));
              }
              var transitionConfigArray = utils.toTransitionConfigArray(key, strictTransitionConfigs_1[key]);
              if (!environment.IS_PRODUCTION) {
                validateArrayifiedTransitions(_this, key, transitionConfigArray);
              }
              return transitionConfigArray;
            }).concat(utils.toTransitionConfigArray(WILDCARD, wildcardConfigs)));
          }
          var eventlessConfig = this.config.always ? utils.toTransitionConfigArray("", this.config.always) : [];
          var doneConfig = this.config.onDone ? utils.toTransitionConfigArray(String(actions.done(this.id)), this.config.onDone) : [];
          if (!environment.IS_PRODUCTION) {
            utils.warn(!(this.config.onDone && !this.parent), 'Root nodes cannot have an ".onDone" transition. Please check the config of "'.concat(this.id, '".'));
          }
          var invokeConfig = utils.flatten(this.invoke.map(function(invokeDef) {
            var settleTransitions = [];
            if (invokeDef.onDone) {
              settleTransitions.push.apply(settleTransitions, _tslib.__spreadArray([], _tslib.__read(utils.toTransitionConfigArray(String(actions.doneInvoke(invokeDef.id)), invokeDef.onDone)), false));
            }
            if (invokeDef.onError) {
              settleTransitions.push.apply(settleTransitions, _tslib.__spreadArray([], _tslib.__read(utils.toTransitionConfigArray(String(actions.error(invokeDef.id)), invokeDef.onError)), false));
            }
            return settleTransitions;
          }));
          var delayedTransitions = this.after;
          var formattedTransitions = utils.flatten(_tslib.__spreadArray(_tslib.__spreadArray(_tslib.__spreadArray(_tslib.__spreadArray([], _tslib.__read(doneConfig), false), _tslib.__read(invokeConfig), false), _tslib.__read(onConfig), false), _tslib.__read(eventlessConfig), false).map(function(transitionConfig) {
            return utils.toArray(transitionConfig).map(function(transition) {
              return _this.formatTransition(transition);
            });
          }));
          try {
            for (var delayedTransitions_1 = _tslib.__values(delayedTransitions), delayedTransitions_1_1 = delayedTransitions_1.next(); !delayedTransitions_1_1.done; delayedTransitions_1_1 = delayedTransitions_1.next()) {
              var delayedTransition = delayedTransitions_1_1.value;
              formattedTransitions.push(delayedTransition);
            }
          } catch (e_10_1) {
            e_10 = {
              error: e_10_1
            };
          } finally {
            try {
              if (delayedTransitions_1_1 && !delayedTransitions_1_1.done && (_a = delayedTransitions_1.return))
                _a.call(delayedTransitions_1);
            } finally {
              if (e_10)
                throw e_10.error;
            }
          }
          return formattedTransitions;
        };
        return StateNode2;
      }()
    );
    exports.StateNode = StateNode;
  }
});

// node_modules/.pnpm/xstate@4.37.1/node_modules/xstate/lib/Machine.js
var require_Machine = __commonJS({
  "node_modules/.pnpm/xstate@4.37.1/node_modules/xstate/lib/Machine.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var StateNode = require_StateNode();
    var environment = require_environment();
    var warned = false;
    function Machine(config, options, initialContext) {
      if (initialContext === void 0) {
        initialContext = config.context;
      }
      return new StateNode.StateNode(config, options, initialContext);
    }
    function createMachine2(config, options) {
      if (!environment.IS_PRODUCTION && !("predictableActionArguments" in config) && !warned) {
        warned = true;
        console.warn("It is highly recommended to set `predictableActionArguments` to `true` when using `createMachine`. https://xstate.js.org/docs/guides/actions.html");
      }
      return new StateNode.StateNode(config, options);
    }
    exports.Machine = Machine;
    exports.createMachine = createMachine2;
  }
});

// node_modules/.pnpm/xstate@4.37.1/node_modules/xstate/lib/mapState.js
var require_mapState = __commonJS({
  "node_modules/.pnpm/xstate@4.37.1/node_modules/xstate/lib/mapState.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var _tslib = require_tslib();
    var utils = require_utils();
    function mapState(stateMap, stateId) {
      var e_1, _a;
      var foundStateId;
      try {
        for (var _b = _tslib.__values(Object.keys(stateMap)), _c = _b.next(); !_c.done; _c = _b.next()) {
          var mappedStateId = _c.value;
          if (utils.matchesState(mappedStateId, stateId) && (!foundStateId || stateId.length > foundStateId.length)) {
            foundStateId = mappedStateId;
          }
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (_c && !_c.done && (_a = _b.return))
            _a.call(_b);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      return stateMap[foundStateId];
    }
    exports.mapState = mapState;
  }
});

// node_modules/.pnpm/xstate@4.37.1/node_modules/xstate/lib/match.js
var require_match = __commonJS({
  "node_modules/.pnpm/xstate@4.37.1/node_modules/xstate/lib/match.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var _tslib = require_tslib();
    var State = require_State();
    function matchState(state, patterns, defaultValue) {
      var e_1, _a;
      var resolvedState = State.State.from(state, state instanceof State.State ? state.context : void 0);
      try {
        for (var patterns_1 = _tslib.__values(patterns), patterns_1_1 = patterns_1.next(); !patterns_1_1.done; patterns_1_1 = patterns_1.next()) {
          var _b = _tslib.__read(patterns_1_1.value, 2), stateValue = _b[0], getValue = _b[1];
          if (resolvedState.matches(stateValue)) {
            return getValue(resolvedState);
          }
        }
      } catch (e_1_1) {
        e_1 = {
          error: e_1_1
        };
      } finally {
        try {
          if (patterns_1_1 && !patterns_1_1.done && (_a = patterns_1.return))
            _a.call(patterns_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
      return defaultValue(resolvedState);
    }
    exports.matchState = matchState;
  }
});

// node_modules/.pnpm/xstate@4.37.1/node_modules/xstate/lib/schema.js
var require_schema = __commonJS({
  "node_modules/.pnpm/xstate@4.37.1/node_modules/xstate/lib/schema.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function createSchema(schema) {
      return schema;
    }
    var t = createSchema;
    exports.createSchema = createSchema;
    exports.t = t;
  }
});

// node_modules/.pnpm/xstate@4.37.1/node_modules/xstate/lib/index.js
var require_lib = __commonJS({
  "node_modules/.pnpm/xstate@4.37.1/node_modules/xstate/lib/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var actions = require_actions();
    var Actor = require_Actor();
    var interpreter = require_interpreter();
    var Machine = require_Machine();
    var mapState = require_mapState();
    var match = require_match();
    var schema = require_schema();
    var State = require_State();
    var StateNode = require_StateNode();
    var behaviors = require_behaviors();
    var types = require_types();
    var utils = require_utils();
    var assign2 = actions.assign;
    var send = actions.send;
    var sendTo = actions.sendTo;
    var sendParent = actions.sendParent;
    var sendUpdate = actions.sendUpdate;
    var forwardTo = actions.forwardTo;
    var doneInvoke = actions.doneInvoke;
    var raise = actions.raise;
    exports.actions = actions;
    exports.toActorRef = Actor.toActorRef;
    exports.Interpreter = interpreter.Interpreter;
    Object.defineProperty(exports, "InterpreterStatus", {
      enumerable: true,
      get: function() {
        return interpreter.InterpreterStatus;
      }
    });
    exports.interpret = interpreter.interpret;
    exports.spawn = interpreter.spawn;
    exports.Machine = Machine.Machine;
    exports.createMachine = Machine.createMachine;
    exports.mapState = mapState.mapState;
    exports.matchState = match.matchState;
    exports.createSchema = schema.createSchema;
    exports.t = schema.t;
    exports.State = State.State;
    exports.StateNode = StateNode.StateNode;
    exports.spawnBehavior = behaviors.spawnBehavior;
    Object.defineProperty(exports, "ActionTypes", {
      enumerable: true,
      get: function() {
        return types.ActionTypes;
      }
    });
    Object.defineProperty(exports, "SpecialTargets", {
      enumerable: true,
      get: function() {
        return types.SpecialTargets;
      }
    });
    exports.matchesState = utils.matchesState;
    exports.toEventObject = utils.toEventObject;
    exports.toObserver = utils.toObserver;
    exports.toSCXMLEvent = utils.toSCXMLEvent;
    exports.assign = assign2;
    exports.doneInvoke = doneInvoke;
    exports.forwardTo = forwardTo;
    exports.raise = raise;
    exports.send = send;
    exports.sendParent = sendParent;
    exports.sendTo = sendTo;
    exports.sendUpdate = sendUpdate;
  }
});

// node_modules/.pnpm/immer@10.0.1/node_modules/immer/dist/cjs/immer.cjs.production.js
var require_immer_cjs_production = __commonJS({
  "node_modules/.pnpm/immer@10.0.1/node_modules/immer/dist/cjs/immer.cjs.production.js"(exports, module2) {
    "use strict";
    var ne = Object.defineProperty;
    var xe = Object.getOwnPropertyDescriptor;
    var be = Object.getOwnPropertyNames;
    var Te = Object.prototype.hasOwnProperty;
    var Ae = (e, t) => {
      for (var r in t)
        ne(e, r, { get: t[r], enumerable: true });
    };
    var Ie = (e, t, r, n) => {
      if (t && typeof t == "object" || typeof t == "function")
        for (let i of be(t))
          !Te.call(e, i) && i !== r && ne(e, i, { get: () => t[i], enumerable: !(n = xe(t, i)) || n.enumerable });
      return e;
    };
    var De = (e) => Ie(ne({}, "__esModule", { value: true }), e);
    var Be = {};
    Ae(Be, { Immer: () => J, applyPatches: () => Ce, castDraft: () => ke, castImmutable: () => Ke, createDraft: () => Re, current: () => re, enableMapSet: () => ge, enablePatches: () => Pe, finishDraft: () => ve, freeze: () => K, immerable: () => N, isDraft: () => O, isDraftable: () => A, nothing: () => z, original: () => le, produce: () => Fe, produceWithPatches: () => Ne, setAutoFreeze: () => je, setUseStrictShallowCopy: () => ze });
    module2.exports = De(Be);
    var z = Symbol.for("immer-nothing");
    var N = Symbol.for("immer-draftable");
    var f = Symbol.for("immer-state");
    function h(e, ...t) {
      throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`);
    }
    var j = Object.getPrototypeOf;
    function O(e) {
      return !!e && !!e[f];
    }
    function A(e) {
      return e ? ye(e) || Array.isArray(e) || !!e[N] || !!e.constructor?.[N] || v(e) || k(e) : false;
    }
    var Oe = Object.prototype.constructor.toString();
    function ye(e) {
      if (!e || typeof e != "object")
        return false;
      let t = j(e);
      if (t === null)
        return true;
      let r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
      return r === Object ? true : typeof r == "function" && Function.toString.call(r) === Oe;
    }
    function le(e) {
      return O(e) || h(15, e), e[f].t;
    }
    function M(e, t) {
      C(e) === 0 ? Object.entries(e).forEach(([r, n]) => {
        t(r, n, e);
      }) : e.forEach((r, n) => t(n, r, e));
    }
    function C(e) {
      let t = e[f];
      return t ? t.o : Array.isArray(e) ? 1 : v(e) ? 2 : k(e) ? 3 : 0;
    }
    function R(e, t) {
      return C(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
    }
    function X(e, t) {
      return C(e) === 2 ? e.get(t) : e[t];
    }
    function Q(e, t, r) {
      let n = C(e);
      n === 2 ? e.set(t, r) : n === 3 ? e.add(r) : e[t] = r;
    }
    function pe(e, t) {
      return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
    }
    function v(e) {
      return e instanceof Map;
    }
    function k(e) {
      return e instanceof Set;
    }
    function T(e) {
      return e.e || e.t;
    }
    function L(e, t) {
      if (v(e))
        return new Map(e);
      if (k(e))
        return new Set(e);
      if (Array.isArray(e))
        return Array.prototype.slice.call(e);
      if (!t && ye(e))
        return j(e) ? { ...e } : Object.assign(/* @__PURE__ */ Object.create(null), e);
      let r = Object.getOwnPropertyDescriptors(e);
      delete r[f];
      let n = Reflect.ownKeys(r);
      for (let i = 0; i < n.length; i++) {
        let c = n[i], y = r[c];
        y.writable === false && (y.writable = true, y.configurable = true), (y.get || y.set) && (r[c] = { configurable: true, writable: true, enumerable: y.enumerable, value: e[c] });
      }
      return Object.create(j(e), r);
    }
    function K(e, t = false) {
      return $(e) || O(e) || !A(e) || (C(e) > 1 && (e.set = e.add = e.clear = e.delete = _e), Object.freeze(e), t && M(e, (r, n) => K(n, true), true)), e;
    }
    function _e() {
      h(2);
    }
    function $(e) {
      return Object.isFrozen(e);
    }
    var ae = {};
    function w(e) {
      let t = ae[e];
      return t || h(0, e), t;
    }
    function Y(e, t) {
      ae[e] || (ae[e] = t);
    }
    var U;
    function B() {
      return U;
    }
    function Me(e, t) {
      return { a: [], i: e, p: t, P: true, d: 0 };
    }
    function oe(e, t) {
      t && (w("Patches"), e.f = [], e.h = [], e.b = t);
    }
    function V(e) {
      Z(e), e.a.forEach(we), e.a = null;
    }
    function Z(e) {
      e === U && (U = e.i);
    }
    function ie(e) {
      return U = Me(U, e);
    }
    function we(e) {
      let t = e[f];
      t.o === 0 || t.o === 1 ? t.x() : t.m = true;
    }
    function se(e, t) {
      t.d = t.a.length;
      let r = t.a[0];
      return e !== void 0 && e !== r ? (r[f].s && (V(t), h(4)), A(e) && (e = ee(t, e), t.i || te(t, e)), t.f && w("Patches").T(r[f].t, e, t.f, t.h)) : e = ee(t, r, []), V(t), t.f && t.b(t.f, t.h), e !== z ? e : void 0;
    }
    function ee(e, t, r) {
      if ($(t))
        return t;
      let n = t[f];
      if (!n)
        return M(t, (i, c) => de(e, n, t, i, c, r), true), t;
      if (n.n !== e)
        return t;
      if (!n.s)
        return te(e, n.t, true), n.t;
      if (!n.c) {
        n.c = true, n.n.d--;
        let i = n.e, c = i, y = false;
        n.o === 3 && (c = new Set(i), i.clear(), y = true), M(c, (u, b) => de(e, n, i, u, b, r, y)), te(e, i, false), r && e.f && w("Patches").g(n, r, e.f, e.h);
      }
      return n.e;
    }
    function de(e, t, r, n, i, c, y) {
      if (O(i)) {
        let u = c && t && t.o !== 3 && !R(t.r, n) ? c.concat(n) : void 0, b = ee(e, i, u);
        if (Q(r, n, b), O(b))
          e.P = false;
        else
          return;
      } else
        y && r.add(i);
      if (A(i) && !$(i)) {
        if (!e.p.y && e.d < 1)
          return;
        ee(e, i), (!t || !t.n.i) && te(e, i);
      }
    }
    function te(e, t, r = false) {
      !e.i && e.p.y && e.P && K(t, r);
    }
    function he(e, t) {
      let r = Array.isArray(e), n = { o: r ? 1 : 0, n: t ? t.n : B(), s: false, c: false, r: {}, i: t, t: e, u: null, e: null, x: null, l: false }, i = n, c = ue;
      r && (i = [n], c = q);
      let { revoke: y, proxy: u } = Proxy.revocable(i, c);
      return n.u = u, n.x = y, u;
    }
    var ue = { get(e, t) {
      if (t === f)
        return e;
      let r = T(e);
      if (!R(r, t))
        return Ee(e, r, t);
      let n = r[t];
      return e.c || !A(n) ? n : n === ce(e.t, t) ? (fe(e), e.e[t] = W(n, e)) : n;
    }, has(e, t) {
      return t in T(e);
    }, ownKeys(e) {
      return Reflect.ownKeys(T(e));
    }, set(e, t, r) {
      let n = me(T(e), t);
      if (n?.set)
        return n.set.call(e.u, r), true;
      if (!e.s) {
        let i = ce(T(e), t), c = i?.[f];
        if (c && c.t === r)
          return e.e[t] = r, e.r[t] = false, true;
        if (pe(r, i) && (r !== void 0 || R(e.t, t)))
          return true;
        fe(e), E(e);
      }
      return e.e[t] === r && (r !== void 0 || t in e.e) || Number.isNaN(r) && Number.isNaN(e.e[t]) || (e.e[t] = r, e.r[t] = true), true;
    }, deleteProperty(e, t) {
      return ce(e.t, t) !== void 0 || t in e.t ? (e.r[t] = false, fe(e), E(e)) : delete e.r[t], e.e && delete e.e[t], true;
    }, getOwnPropertyDescriptor(e, t) {
      let r = T(e), n = Reflect.getOwnPropertyDescriptor(r, t);
      return n && { writable: true, configurable: e.o !== 1 || t !== "length", enumerable: n.enumerable, value: r[t] };
    }, defineProperty() {
      h(11);
    }, getPrototypeOf(e) {
      return j(e.t);
    }, setPrototypeOf() {
      h(12);
    } };
    var q = {};
    M(ue, (e, t) => {
      q[e] = function() {
        return arguments[0] = arguments[0][0], t.apply(this, arguments);
      };
    });
    q.deleteProperty = function(e, t) {
      return q.set.call(this, e, t, void 0);
    };
    q.set = function(e, t, r) {
      return ue.set.call(this, e[0], t, r, e[0]);
    };
    function ce(e, t) {
      let r = e[f];
      return (r ? T(r) : e)[t];
    }
    function Ee(e, t, r) {
      let n = me(t, r);
      return n ? "value" in n ? n.value : n.get?.call(e.u) : void 0;
    }
    function me(e, t) {
      if (!(t in e))
        return;
      let r = j(e);
      for (; r; ) {
        let n = Object.getOwnPropertyDescriptor(r, t);
        if (n)
          return n;
        r = j(r);
      }
    }
    function E(e) {
      e.s || (e.s = true, e.i && E(e.i));
    }
    function fe(e) {
      e.e || (e.e = L(e.t, e.n.p.S));
    }
    var J = class {
      constructor(t) {
        this.y = true;
        this.S = false;
        this.produce = (t2, r, n) => {
          if (typeof t2 == "function" && typeof r != "function") {
            let c = r;
            r = t2;
            let y = this;
            return function(b = c, ...a) {
              return y.produce(b, (o) => r.call(this, o, ...a));
            };
          }
          typeof r != "function" && h(6), n !== void 0 && typeof n != "function" && h(7);
          let i;
          if (A(t2)) {
            let c = ie(this), y = W(t2, void 0), u = true;
            try {
              i = r(y), u = false;
            } finally {
              u ? V(c) : Z(c);
            }
            return oe(c, n), se(i, c);
          } else if (!t2 || typeof t2 != "object") {
            if (i = r(t2), i === void 0 && (i = t2), i === z && (i = void 0), this.y && K(i, true), n) {
              let c = [], y = [];
              w("Patches").T(t2, i, c, y), n(c, y);
            }
            return i;
          } else
            h(1, t2);
        };
        this.produceWithPatches = (t2, r) => {
          if (typeof t2 == "function")
            return (y, ...u) => this.produceWithPatches(y, (b) => t2(b, ...u));
          let n, i;
          return [this.produce(t2, r, (y, u) => {
            n = y, i = u;
          }), n, i];
        };
        typeof t?.autoFreeze == "boolean" && this.setAutoFreeze(t.autoFreeze), typeof t?.useStrictShallowCopy == "boolean" && this.setUseStrictShallowCopy(t.useStrictShallowCopy);
      }
      createDraft(t) {
        A(t) || h(8), O(t) && (t = re(t));
        let r = ie(this), n = W(t, void 0);
        return n[f].l = true, Z(r), n;
      }
      finishDraft(t, r) {
        let n = t && t[f];
        (!n || !n.l) && h(9);
        let { n: i } = n;
        return oe(i, r), se(void 0, i);
      }
      setAutoFreeze(t) {
        this.y = t;
      }
      setUseStrictShallowCopy(t) {
        this.S = t;
      }
      applyPatches(t, r) {
        let n;
        for (n = r.length - 1; n >= 0; n--) {
          let c = r[n];
          if (c.path.length === 0 && c.op === "replace") {
            t = c.value;
            break;
          }
        }
        n > -1 && (r = r.slice(n + 1));
        let i = w("Patches").A;
        return O(t) ? i(t, r) : this.produce(t, (c) => i(c, r));
      }
    };
    function W(e, t) {
      let r = v(e) ? w("MapSet").I(e, t) : k(e) ? w("MapSet").D(e, t) : he(e, t);
      return (t ? t.n : B()).a.push(r), r;
    }
    function re(e) {
      return O(e) || h(10, e), Se(e);
    }
    function Se(e) {
      if (!A(e) || $(e))
        return e;
      let t = e[f], r;
      if (t) {
        if (!t.s)
          return t.t;
        t.c = true, r = L(e, t.n.p.S);
      } else
        r = L(e, true);
      return M(r, (n, i) => {
        Q(r, n, Se(i));
      }), t && (t.c = false), r;
    }
    function Pe() {
      let t = "replace", r = "add", n = "remove";
      function i(s, S, m, g) {
        switch (s.o) {
          case 0:
          case 2:
            return y(s, S, m, g);
          case 1:
            return c(s, S, m, g);
          case 3:
            return u(s, S, m, g);
        }
      }
      function c(s, S, m, g) {
        let { t: I, r: P } = s, x = s.e;
        x.length < I.length && ([I, x] = [x, I], [m, g] = [g, m]);
        for (let l = 0; l < I.length; l++)
          if (P[l] && x[l] !== I[l]) {
            let d = S.concat([l]);
            m.push({ op: t, path: d, value: p(x[l]) }), g.push({ op: t, path: d, value: p(I[l]) });
          }
        for (let l = I.length; l < x.length; l++) {
          let d = S.concat([l]);
          m.push({ op: r, path: d, value: p(x[l]) });
        }
        for (let l = x.length - 1; I.length <= l; --l) {
          let d = S.concat([l]);
          g.push({ op: n, path: d });
        }
      }
      function y(s, S, m, g) {
        let { t: I, e: P } = s;
        M(s.r, (x, l) => {
          let d = X(I, x), H = X(P, x), F = l ? R(I, x) ? t : r : n;
          if (d === H && F === t)
            return;
          let D = S.concat(x);
          m.push(F === n ? { op: F, path: D } : { op: F, path: D, value: H }), g.push(F === r ? { op: n, path: D } : F === n ? { op: r, path: D, value: p(d) } : { op: t, path: D, value: p(d) });
        });
      }
      function u(s, S, m, g) {
        let { t: I, e: P } = s, x = 0;
        I.forEach((l) => {
          if (!P.has(l)) {
            let d = S.concat([x]);
            m.push({ op: n, path: d, value: l }), g.unshift({ op: r, path: d, value: l });
          }
          x++;
        }), x = 0, P.forEach((l) => {
          if (!I.has(l)) {
            let d = S.concat([x]);
            m.push({ op: r, path: d, value: l }), g.unshift({ op: n, path: d, value: l });
          }
          x++;
        });
      }
      function b(s, S, m, g) {
        m.push({ op: t, path: [], value: S === z ? void 0 : S }), g.push({ op: t, path: [], value: s });
      }
      function a(s, S) {
        return S.forEach((m) => {
          let { path: g, op: I } = m, P = s;
          for (let H = 0; H < g.length - 1; H++) {
            let F = C(P), D = g[H];
            typeof D != "string" && typeof D != "number" && (D = "" + D), (F === 0 || F === 1) && (D === "__proto__" || D === "constructor") && h(16 + 3), typeof P == "function" && D === "prototype" && h(16 + 3), P = X(P, D), typeof P != "object" && h(16 + 2, g.join("/"));
          }
          let x = C(P), l = o(m.value), d = g[g.length - 1];
          switch (I) {
            case t:
              switch (x) {
                case 2:
                  return P.set(d, l);
                case 3:
                  h(16);
                default:
                  return P[d] = l;
              }
            case r:
              switch (x) {
                case 1:
                  return d === "-" ? P.push(l) : P.splice(d, 0, l);
                case 2:
                  return P.set(d, l);
                case 3:
                  return P.add(l);
                default:
                  return P[d] = l;
              }
            case n:
              switch (x) {
                case 1:
                  return P.splice(d, 1);
                case 2:
                  return P.delete(d);
                case 3:
                  return P.delete(m.value);
                default:
                  return delete P[d];
              }
            default:
              h(16 + 1, I);
          }
        }), s;
      }
      function o(s) {
        if (!A(s))
          return s;
        if (Array.isArray(s))
          return s.map(o);
        if (v(s))
          return new Map(Array.from(s.entries()).map(([m, g]) => [m, o(g)]));
        if (k(s))
          return new Set(Array.from(s).map(o));
        let S = Object.create(j(s));
        for (let m in s)
          S[m] = o(s[m]);
        return R(s, N) && (S[N] = s[N]), S;
      }
      function p(s) {
        return O(s) ? o(s) : s;
      }
      Y("Patches", { A: a, g: i, T: b });
    }
    function ge() {
      class e extends Map {
        constructor(a, o) {
          super();
          this[f] = { o: 2, i: o, n: o ? o.n : B(), s: false, c: false, e: void 0, r: void 0, t: a, u: this, l: false, m: false };
        }
        get size() {
          return T(this[f]).size;
        }
        has(a) {
          return T(this[f]).has(a);
        }
        set(a, o) {
          let p = this[f];
          return y(p), (!T(p).has(a) || T(p).get(a) !== o) && (r(p), E(p), p.r.set(a, true), p.e.set(a, o), p.r.set(a, true)), this;
        }
        delete(a) {
          if (!this.has(a))
            return false;
          let o = this[f];
          return y(o), r(o), E(o), o.t.has(a) ? o.r.set(a, false) : o.r.delete(a), o.e.delete(a), true;
        }
        clear() {
          let a = this[f];
          y(a), T(a).size && (r(a), E(a), a.r = /* @__PURE__ */ new Map(), M(a.t, (o) => {
            a.r.set(o, false);
          }), a.e.clear());
        }
        forEach(a, o) {
          let p = this[f];
          T(p).forEach((s, S, m) => {
            a.call(o, this.get(S), S, this);
          });
        }
        get(a) {
          let o = this[f];
          y(o);
          let p = T(o).get(a);
          if (o.c || !A(p) || p !== o.t.get(a))
            return p;
          let s = W(p, o);
          return r(o), o.e.set(a, s), s;
        }
        keys() {
          return T(this[f]).keys();
        }
        values() {
          let a = this.keys();
          return { [Symbol.iterator]: () => this.values(), next: () => {
            let o = a.next();
            return o.done ? o : { done: false, value: this.get(o.value) };
          } };
        }
        entries() {
          let a = this.keys();
          return { [Symbol.iterator]: () => this.entries(), next: () => {
            let o = a.next();
            if (o.done)
              return o;
            let p = this.get(o.value);
            return { done: false, value: [o.value, p] };
          } };
        }
        [(f, Symbol.iterator)]() {
          return this.entries();
        }
      }
      function t(u, b) {
        return new e(u, b);
      }
      function r(u) {
        u.e || (u.r = /* @__PURE__ */ new Map(), u.e = new Map(u.t));
      }
      class n extends Set {
        constructor(a, o) {
          super();
          this[f] = { o: 3, i: o, n: o ? o.n : B(), s: false, c: false, e: void 0, t: a, u: this, a: /* @__PURE__ */ new Map(), m: false, l: false };
        }
        get size() {
          return T(this[f]).size;
        }
        has(a) {
          let o = this[f];
          return y(o), o.e ? !!(o.e.has(a) || o.a.has(a) && o.e.has(o.a.get(a))) : o.t.has(a);
        }
        add(a) {
          let o = this[f];
          return y(o), this.has(a) || (c(o), E(o), o.e.add(a)), this;
        }
        delete(a) {
          if (!this.has(a))
            return false;
          let o = this[f];
          return y(o), c(o), E(o), o.e.delete(a) || (o.a.has(a) ? o.e.delete(o.a.get(a)) : false);
        }
        clear() {
          let a = this[f];
          y(a), T(a).size && (c(a), E(a), a.e.clear());
        }
        values() {
          let a = this[f];
          return y(a), c(a), a.e.values();
        }
        entries() {
          let a = this[f];
          return y(a), c(a), a.e.entries();
        }
        keys() {
          return this.values();
        }
        [(f, Symbol.iterator)]() {
          return this.values();
        }
        forEach(a, o) {
          let p = this.values(), s = p.next();
          for (; !s.done; )
            a.call(o, s.value, s.value, this), s = p.next();
        }
      }
      function i(u, b) {
        return new n(u, b);
      }
      function c(u) {
        u.e || (u.e = /* @__PURE__ */ new Set(), u.t.forEach((b) => {
          if (A(b)) {
            let a = W(b, u);
            u.a.set(b, a), u.e.add(a);
          } else
            u.e.add(b);
        }));
      }
      function y(u) {
        u.m && h(3, JSON.stringify(T(u)));
      }
      Y("MapSet", { I: t, D: i });
    }
    var _ = new J();
    var Fe = _.produce;
    var Ne = _.produceWithPatches.bind(_);
    var je = _.setAutoFreeze.bind(_);
    var ze = _.setUseStrictShallowCopy.bind(_);
    var Ce = _.applyPatches.bind(_);
    var Re = _.createDraft.bind(_);
    var ve = _.finishDraft.bind(_);
    function ke(e) {
      return e;
    }
    function Ke(e) {
      return e;
    }
  }
});

// node_modules/.pnpm/immer@10.0.1/node_modules/immer/dist/cjs/immer.cjs.development.js
var require_immer_cjs_development = __commonJS({
  "node_modules/.pnpm/immer@10.0.1/node_modules/immer/dist/cjs/immer.cjs.development.js"(exports, module2) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var immer_exports = {};
    __export(immer_exports, {
      Immer: () => Immer22,
      applyPatches: () => applyPatches3,
      castDraft: () => castDraft2,
      castImmutable: () => castImmutable2,
      createDraft: () => createDraft3,
      current: () => current3,
      enableMapSet: () => enableMapSet3,
      enablePatches: () => enablePatches2,
      finishDraft: () => finishDraft3,
      freeze: () => freeze3,
      immerable: () => DRAFTABLE2,
      isDraft: () => isDraft3,
      isDraftable: () => isDraftable3,
      nothing: () => NOTHING2,
      original: () => original2,
      produce: () => produce3,
      produceWithPatches: () => produceWithPatches3,
      setAutoFreeze: () => setAutoFreeze3,
      setUseStrictShallowCopy: () => setUseStrictShallowCopy3
    });
    module2.exports = __toCommonJS(immer_exports);
    var NOTHING2 = Symbol.for("immer-nothing");
    var DRAFTABLE2 = Symbol.for("immer-draftable");
    var DRAFT_STATE2 = Symbol.for("immer-state");
    var errors2 = process.env.NODE_ENV !== "production" ? [
      // All error codes, starting by 0:
      function(plugin) {
        return `The plugin for '${plugin}' has not been loaded into Immer. To enable the plugin, import and call \`enable${plugin}()\` when initializing your application.`;
      },
      function(thing) {
        return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${thing}'`;
      },
      "This object has been frozen and should not be mutated",
      function(data) {
        return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + data;
      },
      "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
      "Immer forbids circular references",
      "The first or second argument to `produce` must be a function",
      "The third argument to `produce` must be a function or undefined",
      "First argument to `createDraft` must be a plain object, an array, or an immerable object",
      "First argument to `finishDraft` must be a draft returned by `createDraft`",
      function(thing) {
        return `'current' expects a draft, got: ${thing}`;
      },
      "Object.defineProperty() cannot be used on an Immer draft",
      "Object.setPrototypeOf() cannot be used on an Immer draft",
      "Immer only supports deleting array indices",
      "Immer only supports setting array indices and the 'length' property",
      function(thing) {
        return `'original' expects a draft, got: ${thing}`;
      }
      // Note: if more errors are added, the errorOffset in Patches.ts should be increased
      // See Patches.ts for additional errors
    ] : [];
    function die2(error, ...args) {
      if (process.env.NODE_ENV !== "production") {
        const e = errors2[error];
        const msg = typeof e === "function" ? e.apply(null, args) : e;
        throw new Error(`[Immer] ${msg}`);
      }
      throw new Error(
        `[Immer] minified error nr: ${error}. Full error at: https://bit.ly/3cXEKWf`
      );
    }
    var getPrototypeOf2 = Object.getPrototypeOf;
    function isDraft3(value) {
      return !!value && !!value[DRAFT_STATE2];
    }
    function isDraftable3(value) {
      if (!value)
        return false;
      return isPlainObject2(value) || Array.isArray(value) || !!value[DRAFTABLE2] || !!value.constructor?.[DRAFTABLE2] || isMap2(value) || isSet2(value);
    }
    var objectCtorString2 = Object.prototype.constructor.toString();
    function isPlainObject2(value) {
      if (!value || typeof value !== "object")
        return false;
      const proto = getPrototypeOf2(value);
      if (proto === null) {
        return true;
      }
      const Ctor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
      if (Ctor === Object)
        return true;
      return typeof Ctor == "function" && Function.toString.call(Ctor) === objectCtorString2;
    }
    function original2(value) {
      if (!isDraft3(value))
        die2(15, value);
      return value[DRAFT_STATE2].base_;
    }
    function each2(obj, iter) {
      if (getArchtype2(obj) === 0) {
        Object.entries(obj).forEach(([key, value]) => {
          iter(key, value, obj);
        });
      } else {
        obj.forEach((entry, index) => iter(index, entry, obj));
      }
    }
    function getArchtype2(thing) {
      const state = thing[DRAFT_STATE2];
      return state ? state.type_ : Array.isArray(thing) ? 1 : isMap2(thing) ? 2 : isSet2(thing) ? 3 : 0;
    }
    function has2(thing, prop) {
      return getArchtype2(thing) === 2 ? thing.has(prop) : Object.prototype.hasOwnProperty.call(thing, prop);
    }
    function get(thing, prop) {
      return getArchtype2(thing) === 2 ? thing.get(prop) : thing[prop];
    }
    function set2(thing, propOrOldValue, value) {
      const t = getArchtype2(thing);
      if (t === 2)
        thing.set(propOrOldValue, value);
      else if (t === 3) {
        thing.add(value);
      } else
        thing[propOrOldValue] = value;
    }
    function is2(x, y) {
      if (x === y) {
        return x !== 0 || 1 / x === 1 / y;
      } else {
        return x !== x && y !== y;
      }
    }
    function isMap2(target) {
      return target instanceof Map;
    }
    function isSet2(target) {
      return target instanceof Set;
    }
    function latest2(state) {
      return state.copy_ || state.base_;
    }
    function shallowCopy2(base, strict) {
      if (isMap2(base)) {
        return new Map(base);
      }
      if (isSet2(base)) {
        return new Set(base);
      }
      if (Array.isArray(base))
        return Array.prototype.slice.call(base);
      if (!strict && isPlainObject2(base)) {
        if (!getPrototypeOf2(base)) {
          const obj = /* @__PURE__ */ Object.create(null);
          return Object.assign(obj, base);
        }
        return { ...base };
      }
      const descriptors = Object.getOwnPropertyDescriptors(base);
      delete descriptors[DRAFT_STATE2];
      let keys = Reflect.ownKeys(descriptors);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        const desc = descriptors[key];
        if (desc.writable === false) {
          desc.writable = true;
          desc.configurable = true;
        }
        if (desc.get || desc.set)
          descriptors[key] = {
            configurable: true,
            writable: true,
            // could live with !!desc.set as well here...
            enumerable: desc.enumerable,
            value: base[key]
          };
      }
      return Object.create(getPrototypeOf2(base), descriptors);
    }
    function freeze3(obj, deep = false) {
      if (isFrozen2(obj) || isDraft3(obj) || !isDraftable3(obj))
        return obj;
      if (getArchtype2(obj) > 1) {
        obj.set = obj.add = obj.clear = obj.delete = dontMutateFrozenCollections2;
      }
      Object.freeze(obj);
      if (deep)
        each2(obj, (_key, value) => freeze3(value, true), true);
      return obj;
    }
    function dontMutateFrozenCollections2() {
      die2(2);
    }
    function isFrozen2(obj) {
      return Object.isFrozen(obj);
    }
    var plugins2 = {};
    function getPlugin2(pluginKey) {
      const plugin = plugins2[pluginKey];
      if (!plugin) {
        die2(0, pluginKey);
      }
      return plugin;
    }
    function loadPlugin2(pluginKey, implementation) {
      if (!plugins2[pluginKey])
        plugins2[pluginKey] = implementation;
    }
    var currentScope2;
    function getCurrentScope2() {
      return currentScope2;
    }
    function createScope2(parent_, immer_) {
      return {
        drafts_: [],
        parent_,
        immer_,
        // Whenever the modified draft contains a draft from another scope, we
        // need to prevent auto-freezing so the unowned draft can be finalized.
        canAutoFreeze_: true,
        unfinalizedDrafts_: 0
      };
    }
    function usePatchesInScope2(scope, patchListener) {
      if (patchListener) {
        getPlugin2("Patches");
        scope.patches_ = [];
        scope.inversePatches_ = [];
        scope.patchListener_ = patchListener;
      }
    }
    function revokeScope2(scope) {
      leaveScope2(scope);
      scope.drafts_.forEach(revokeDraft2);
      scope.drafts_ = null;
    }
    function leaveScope2(scope) {
      if (scope === currentScope2) {
        currentScope2 = scope.parent_;
      }
    }
    function enterScope2(immer22) {
      return currentScope2 = createScope2(currentScope2, immer22);
    }
    function revokeDraft2(draft) {
      const state = draft[DRAFT_STATE2];
      if (state.type_ === 0 || state.type_ === 1)
        state.revoke_();
      else
        state.revoked_ = true;
    }
    function processResult2(result, scope) {
      scope.unfinalizedDrafts_ = scope.drafts_.length;
      const baseDraft = scope.drafts_[0];
      const isReplaced = result !== void 0 && result !== baseDraft;
      if (isReplaced) {
        if (baseDraft[DRAFT_STATE2].modified_) {
          revokeScope2(scope);
          die2(4);
        }
        if (isDraftable3(result)) {
          result = finalize2(scope, result);
          if (!scope.parent_)
            maybeFreeze2(scope, result);
        }
        if (scope.patches_) {
          getPlugin2("Patches").generateReplacementPatches_(
            baseDraft[DRAFT_STATE2].base_,
            result,
            scope.patches_,
            scope.inversePatches_
          );
        }
      } else {
        result = finalize2(scope, baseDraft, []);
      }
      revokeScope2(scope);
      if (scope.patches_) {
        scope.patchListener_(scope.patches_, scope.inversePatches_);
      }
      return result !== NOTHING2 ? result : void 0;
    }
    function finalize2(rootScope, value, path) {
      if (isFrozen2(value))
        return value;
      const state = value[DRAFT_STATE2];
      if (!state) {
        each2(
          value,
          (key, childValue) => finalizeProperty2(rootScope, state, value, key, childValue, path),
          true
          // See #590, don't recurse into non-enumerable of non drafted objects
        );
        return value;
      }
      if (state.scope_ !== rootScope)
        return value;
      if (!state.modified_) {
        maybeFreeze2(rootScope, state.base_, true);
        return state.base_;
      }
      if (!state.finalized_) {
        state.finalized_ = true;
        state.scope_.unfinalizedDrafts_--;
        const result = state.copy_;
        let resultEach = result;
        let isSet22 = false;
        if (state.type_ === 3) {
          resultEach = new Set(result);
          result.clear();
          isSet22 = true;
        }
        each2(
          resultEach,
          (key, childValue) => finalizeProperty2(rootScope, state, result, key, childValue, path, isSet22)
        );
        maybeFreeze2(rootScope, result, false);
        if (path && rootScope.patches_) {
          getPlugin2("Patches").generatePatches_(
            state,
            path,
            rootScope.patches_,
            rootScope.inversePatches_
          );
        }
      }
      return state.copy_;
    }
    function finalizeProperty2(rootScope, parentState, targetObject, prop, childValue, rootPath, targetIsSet) {
      if (process.env.NODE_ENV !== "production" && childValue === targetObject)
        die2(5);
      if (isDraft3(childValue)) {
        const path = rootPath && parentState && parentState.type_ !== 3 && // Set objects are atomic since they have no keys.
        !has2(parentState.assigned_, prop) ? rootPath.concat(prop) : void 0;
        const res = finalize2(rootScope, childValue, path);
        set2(targetObject, prop, res);
        if (isDraft3(res)) {
          rootScope.canAutoFreeze_ = false;
        } else
          return;
      } else if (targetIsSet) {
        targetObject.add(childValue);
      }
      if (isDraftable3(childValue) && !isFrozen2(childValue)) {
        if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1) {
          return;
        }
        finalize2(rootScope, childValue);
        if (!parentState || !parentState.scope_.parent_)
          maybeFreeze2(rootScope, childValue);
      }
    }
    function maybeFreeze2(scope, value, deep = false) {
      if (!scope.parent_ && scope.immer_.autoFreeze_ && scope.canAutoFreeze_) {
        freeze3(value, deep);
      }
    }
    function createProxyProxy2(base, parent) {
      const isArray = Array.isArray(base);
      const state = {
        type_: isArray ? 1 : 0,
        // Track which produce call this is associated with.
        scope_: parent ? parent.scope_ : getCurrentScope2(),
        // True for both shallow and deep changes.
        modified_: false,
        // Used during finalization.
        finalized_: false,
        // Track which properties have been assigned (true) or deleted (false).
        assigned_: {},
        // The parent draft state.
        parent_: parent,
        // The base state.
        base_: base,
        // The base proxy.
        draft_: null,
        // set below
        // The base copy with any updated values.
        copy_: null,
        // Called by the `produce` function.
        revoke_: null,
        isManual_: false
      };
      let target = state;
      let traps = objectTraps2;
      if (isArray) {
        target = [state];
        traps = arrayTraps2;
      }
      const { revoke, proxy } = Proxy.revocable(target, traps);
      state.draft_ = proxy;
      state.revoke_ = revoke;
      return proxy;
    }
    var objectTraps2 = {
      get(state, prop) {
        if (prop === DRAFT_STATE2)
          return state;
        const source = latest2(state);
        if (!has2(source, prop)) {
          return readPropFromProto2(state, source, prop);
        }
        const value = source[prop];
        if (state.finalized_ || !isDraftable3(value)) {
          return value;
        }
        if (value === peek2(state.base_, prop)) {
          prepareCopy2(state);
          return state.copy_[prop] = createProxy2(value, state);
        }
        return value;
      },
      has(state, prop) {
        return prop in latest2(state);
      },
      ownKeys(state) {
        return Reflect.ownKeys(latest2(state));
      },
      set(state, prop, value) {
        const desc = getDescriptorFromProto2(latest2(state), prop);
        if (desc?.set) {
          desc.set.call(state.draft_, value);
          return true;
        }
        if (!state.modified_) {
          const current22 = peek2(latest2(state), prop);
          const currentState = current22?.[DRAFT_STATE2];
          if (currentState && currentState.base_ === value) {
            state.copy_[prop] = value;
            state.assigned_[prop] = false;
            return true;
          }
          if (is2(value, current22) && (value !== void 0 || has2(state.base_, prop)))
            return true;
          prepareCopy2(state);
          markChanged2(state);
        }
        if (state.copy_[prop] === value && // special case: handle new props with value 'undefined'
        (value !== void 0 || prop in state.copy_) || // special case: NaN
        Number.isNaN(value) && Number.isNaN(state.copy_[prop]))
          return true;
        state.copy_[prop] = value;
        state.assigned_[prop] = true;
        return true;
      },
      deleteProperty(state, prop) {
        if (peek2(state.base_, prop) !== void 0 || prop in state.base_) {
          state.assigned_[prop] = false;
          prepareCopy2(state);
          markChanged2(state);
        } else {
          delete state.assigned_[prop];
        }
        if (state.copy_) {
          delete state.copy_[prop];
        }
        return true;
      },
      // Note: We never coerce `desc.value` into an Immer draft, because we can't make
      // the same guarantee in ES5 mode.
      getOwnPropertyDescriptor(state, prop) {
        const owner = latest2(state);
        const desc = Reflect.getOwnPropertyDescriptor(owner, prop);
        if (!desc)
          return desc;
        return {
          writable: true,
          configurable: state.type_ !== 1 || prop !== "length",
          enumerable: desc.enumerable,
          value: owner[prop]
        };
      },
      defineProperty() {
        die2(11);
      },
      getPrototypeOf(state) {
        return getPrototypeOf2(state.base_);
      },
      setPrototypeOf() {
        die2(12);
      }
    };
    var arrayTraps2 = {};
    each2(objectTraps2, (key, fn) => {
      arrayTraps2[key] = function() {
        arguments[0] = arguments[0][0];
        return fn.apply(this, arguments);
      };
    });
    arrayTraps2.deleteProperty = function(state, prop) {
      if (process.env.NODE_ENV !== "production" && isNaN(parseInt(prop)))
        die2(13);
      return arrayTraps2.set.call(this, state, prop, void 0);
    };
    arrayTraps2.set = function(state, prop, value) {
      if (process.env.NODE_ENV !== "production" && prop !== "length" && isNaN(parseInt(prop)))
        die2(14);
      return objectTraps2.set.call(this, state[0], prop, value, state[0]);
    };
    function peek2(draft, prop) {
      const state = draft[DRAFT_STATE2];
      const source = state ? latest2(state) : draft;
      return source[prop];
    }
    function readPropFromProto2(state, source, prop) {
      const desc = getDescriptorFromProto2(source, prop);
      return desc ? `value` in desc ? desc.value : (
        // This is a very special case, if the prop is a getter defined by the
        // prototype, we should invoke it with the draft as context!
        desc.get?.call(state.draft_)
      ) : void 0;
    }
    function getDescriptorFromProto2(source, prop) {
      if (!(prop in source))
        return void 0;
      let proto = getPrototypeOf2(source);
      while (proto) {
        const desc = Object.getOwnPropertyDescriptor(proto, prop);
        if (desc)
          return desc;
        proto = getPrototypeOf2(proto);
      }
      return void 0;
    }
    function markChanged2(state) {
      if (!state.modified_) {
        state.modified_ = true;
        if (state.parent_) {
          markChanged2(state.parent_);
        }
      }
    }
    function prepareCopy2(state) {
      if (!state.copy_) {
        state.copy_ = shallowCopy2(
          state.base_,
          state.scope_.immer_.useStrictShallowCopy_
        );
      }
    }
    var Immer22 = class {
      constructor(config) {
        this.autoFreeze_ = true;
        this.useStrictShallowCopy_ = false;
        this.produce = (base, recipe, patchListener) => {
          if (typeof base === "function" && typeof recipe !== "function") {
            const defaultBase = recipe;
            recipe = base;
            const self2 = this;
            return function curriedProduce(base2 = defaultBase, ...args) {
              return self2.produce(base2, (draft) => recipe.call(this, draft, ...args));
            };
          }
          if (typeof recipe !== "function")
            die2(6);
          if (patchListener !== void 0 && typeof patchListener !== "function")
            die2(7);
          let result;
          if (isDraftable3(base)) {
            const scope = enterScope2(this);
            const proxy = createProxy2(base, void 0);
            let hasError = true;
            try {
              result = recipe(proxy);
              hasError = false;
            } finally {
              if (hasError)
                revokeScope2(scope);
              else
                leaveScope2(scope);
            }
            usePatchesInScope2(scope, patchListener);
            return processResult2(result, scope);
          } else if (!base || typeof base !== "object") {
            result = recipe(base);
            if (result === void 0)
              result = base;
            if (result === NOTHING2)
              result = void 0;
            if (this.autoFreeze_)
              freeze3(result, true);
            if (patchListener) {
              const p = [];
              const ip = [];
              getPlugin2("Patches").generateReplacementPatches_(base, result, p, ip);
              patchListener(p, ip);
            }
            return result;
          } else
            die2(1, base);
        };
        this.produceWithPatches = (base, recipe) => {
          if (typeof base === "function") {
            return (state, ...args) => this.produceWithPatches(state, (draft) => base(draft, ...args));
          }
          let patches, inversePatches;
          const result = this.produce(base, recipe, (p, ip) => {
            patches = p;
            inversePatches = ip;
          });
          return [result, patches, inversePatches];
        };
        if (typeof config?.autoFreeze === "boolean")
          this.setAutoFreeze(config.autoFreeze);
        if (typeof config?.useStrictShallowCopy === "boolean")
          this.setUseStrictShallowCopy(config.useStrictShallowCopy);
      }
      createDraft(base) {
        if (!isDraftable3(base))
          die2(8);
        if (isDraft3(base))
          base = current3(base);
        const scope = enterScope2(this);
        const proxy = createProxy2(base, void 0);
        proxy[DRAFT_STATE2].isManual_ = true;
        leaveScope2(scope);
        return proxy;
      }
      finishDraft(draft, patchListener) {
        const state = draft && draft[DRAFT_STATE2];
        if (!state || !state.isManual_)
          die2(9);
        const { scope_: scope } = state;
        usePatchesInScope2(scope, patchListener);
        return processResult2(void 0, scope);
      }
      /**
       * Pass true to automatically freeze all copies created by Immer.
       *
       * By default, auto-freezing is enabled.
       */
      setAutoFreeze(value) {
        this.autoFreeze_ = value;
      }
      /**
       * Pass true to enable strict shallow copy.
       *
       * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
       */
      setUseStrictShallowCopy(value) {
        this.useStrictShallowCopy_ = value;
      }
      applyPatches(base, patches) {
        let i;
        for (i = patches.length - 1; i >= 0; i--) {
          const patch = patches[i];
          if (patch.path.length === 0 && patch.op === "replace") {
            base = patch.value;
            break;
          }
        }
        if (i > -1) {
          patches = patches.slice(i + 1);
        }
        const applyPatchesImpl = getPlugin2("Patches").applyPatches_;
        if (isDraft3(base)) {
          return applyPatchesImpl(base, patches);
        }
        return this.produce(
          base,
          (draft) => applyPatchesImpl(draft, patches)
        );
      }
    };
    function createProxy2(value, parent) {
      const draft = isMap2(value) ? getPlugin2("MapSet").proxyMap_(value, parent) : isSet2(value) ? getPlugin2("MapSet").proxySet_(value, parent) : createProxyProxy2(value, parent);
      const scope = parent ? parent.scope_ : getCurrentScope2();
      scope.drafts_.push(draft);
      return draft;
    }
    function current3(value) {
      if (!isDraft3(value))
        die2(10, value);
      return currentImpl2(value);
    }
    function currentImpl2(value) {
      if (!isDraftable3(value) || isFrozen2(value))
        return value;
      const state = value[DRAFT_STATE2];
      let copy;
      if (state) {
        if (!state.modified_)
          return state.base_;
        state.finalized_ = true;
        copy = shallowCopy2(value, state.scope_.immer_.useStrictShallowCopy_);
      } else {
        copy = shallowCopy2(value, true);
      }
      each2(copy, (key, childValue) => {
        set2(copy, key, currentImpl2(childValue));
      });
      if (state) {
        state.finalized_ = false;
      }
      return copy;
    }
    function enablePatches2() {
      const errorOffset = 16;
      if (process.env.NODE_ENV !== "production") {
        errors2.push(
          'Sets cannot have "replace" patches.',
          function(op) {
            return "Unsupported patch operation: " + op;
          },
          function(path) {
            return "Cannot apply patch, path doesn't resolve: " + path;
          },
          "Patching reserved attributes like __proto__, prototype and constructor is not allowed"
        );
      }
      const REPLACE = "replace";
      const ADD = "add";
      const REMOVE = "remove";
      function generatePatches_(state, basePath, patches, inversePatches) {
        switch (state.type_) {
          case 0:
          case 2:
            return generatePatchesFromAssigned(
              state,
              basePath,
              patches,
              inversePatches
            );
          case 1:
            return generateArrayPatches(state, basePath, patches, inversePatches);
          case 3:
            return generateSetPatches(
              state,
              basePath,
              patches,
              inversePatches
            );
        }
      }
      function generateArrayPatches(state, basePath, patches, inversePatches) {
        let { base_, assigned_ } = state;
        let copy_ = state.copy_;
        if (copy_.length < base_.length) {
          ;
          [base_, copy_] = [copy_, base_];
          [patches, inversePatches] = [inversePatches, patches];
        }
        for (let i = 0; i < base_.length; i++) {
          if (assigned_[i] && copy_[i] !== base_[i]) {
            const path = basePath.concat([i]);
            patches.push({
              op: REPLACE,
              path,
              // Need to maybe clone it, as it can in fact be the original value
              // due to the base/copy inversion at the start of this function
              value: clonePatchValueIfNeeded(copy_[i])
            });
            inversePatches.push({
              op: REPLACE,
              path,
              value: clonePatchValueIfNeeded(base_[i])
            });
          }
        }
        for (let i = base_.length; i < copy_.length; i++) {
          const path = basePath.concat([i]);
          patches.push({
            op: ADD,
            path,
            // Need to maybe clone it, as it can in fact be the original value
            // due to the base/copy inversion at the start of this function
            value: clonePatchValueIfNeeded(copy_[i])
          });
        }
        for (let i = copy_.length - 1; base_.length <= i; --i) {
          const path = basePath.concat([i]);
          inversePatches.push({
            op: REMOVE,
            path
          });
        }
      }
      function generatePatchesFromAssigned(state, basePath, patches, inversePatches) {
        const { base_, copy_ } = state;
        each2(state.assigned_, (key, assignedValue) => {
          const origValue = get(base_, key);
          const value = get(copy_, key);
          const op = !assignedValue ? REMOVE : has2(base_, key) ? REPLACE : ADD;
          if (origValue === value && op === REPLACE)
            return;
          const path = basePath.concat(key);
          patches.push(op === REMOVE ? { op, path } : { op, path, value });
          inversePatches.push(
            op === ADD ? { op: REMOVE, path } : op === REMOVE ? { op: ADD, path, value: clonePatchValueIfNeeded(origValue) } : { op: REPLACE, path, value: clonePatchValueIfNeeded(origValue) }
          );
        });
      }
      function generateSetPatches(state, basePath, patches, inversePatches) {
        let { base_, copy_ } = state;
        let i = 0;
        base_.forEach((value) => {
          if (!copy_.has(value)) {
            const path = basePath.concat([i]);
            patches.push({
              op: REMOVE,
              path,
              value
            });
            inversePatches.unshift({
              op: ADD,
              path,
              value
            });
          }
          i++;
        });
        i = 0;
        copy_.forEach((value) => {
          if (!base_.has(value)) {
            const path = basePath.concat([i]);
            patches.push({
              op: ADD,
              path,
              value
            });
            inversePatches.unshift({
              op: REMOVE,
              path,
              value
            });
          }
          i++;
        });
      }
      function generateReplacementPatches_(baseValue, replacement, patches, inversePatches) {
        patches.push({
          op: REPLACE,
          path: [],
          value: replacement === NOTHING2 ? void 0 : replacement
        });
        inversePatches.push({
          op: REPLACE,
          path: [],
          value: baseValue
        });
      }
      function applyPatches_(draft, patches) {
        patches.forEach((patch) => {
          const { path, op } = patch;
          let base = draft;
          for (let i = 0; i < path.length - 1; i++) {
            const parentType = getArchtype2(base);
            let p = path[i];
            if (typeof p !== "string" && typeof p !== "number") {
              p = "" + p;
            }
            if ((parentType === 0 || parentType === 1) && (p === "__proto__" || p === "constructor"))
              die2(errorOffset + 3);
            if (typeof base === "function" && p === "prototype")
              die2(errorOffset + 3);
            base = get(base, p);
            if (typeof base !== "object")
              die2(errorOffset + 2, path.join("/"));
          }
          const type = getArchtype2(base);
          const value = deepClonePatchValue(patch.value);
          const key = path[path.length - 1];
          switch (op) {
            case REPLACE:
              switch (type) {
                case 2:
                  return base.set(key, value);
                case 3:
                  die2(errorOffset);
                default:
                  return base[key] = value;
              }
            case ADD:
              switch (type) {
                case 1:
                  return key === "-" ? base.push(value) : base.splice(key, 0, value);
                case 2:
                  return base.set(key, value);
                case 3:
                  return base.add(value);
                default:
                  return base[key] = value;
              }
            case REMOVE:
              switch (type) {
                case 1:
                  return base.splice(key, 1);
                case 2:
                  return base.delete(key);
                case 3:
                  return base.delete(patch.value);
                default:
                  return delete base[key];
              }
            default:
              die2(errorOffset + 1, op);
          }
        });
        return draft;
      }
      function deepClonePatchValue(obj) {
        if (!isDraftable3(obj))
          return obj;
        if (Array.isArray(obj))
          return obj.map(deepClonePatchValue);
        if (isMap2(obj))
          return new Map(
            Array.from(obj.entries()).map(([k, v]) => [k, deepClonePatchValue(v)])
          );
        if (isSet2(obj))
          return new Set(Array.from(obj).map(deepClonePatchValue));
        const cloned = Object.create(getPrototypeOf2(obj));
        for (const key in obj)
          cloned[key] = deepClonePatchValue(obj[key]);
        if (has2(obj, DRAFTABLE2))
          cloned[DRAFTABLE2] = obj[DRAFTABLE2];
        return cloned;
      }
      function clonePatchValueIfNeeded(obj) {
        if (isDraft3(obj)) {
          return deepClonePatchValue(obj);
        } else
          return obj;
      }
      loadPlugin2("Patches", {
        applyPatches_,
        generatePatches_,
        generateReplacementPatches_
      });
    }
    function enableMapSet3() {
      class DraftMap extends Map {
        constructor(target, parent) {
          super();
          this[DRAFT_STATE2] = {
            type_: 2,
            parent_: parent,
            scope_: parent ? parent.scope_ : getCurrentScope2(),
            modified_: false,
            finalized_: false,
            copy_: void 0,
            assigned_: void 0,
            base_: target,
            draft_: this,
            isManual_: false,
            revoked_: false
          };
        }
        get size() {
          return latest2(this[DRAFT_STATE2]).size;
        }
        has(key) {
          return latest2(this[DRAFT_STATE2]).has(key);
        }
        set(key, value) {
          const state = this[DRAFT_STATE2];
          assertUnrevoked(state);
          if (!latest2(state).has(key) || latest2(state).get(key) !== value) {
            prepareMapCopy(state);
            markChanged2(state);
            state.assigned_.set(key, true);
            state.copy_.set(key, value);
            state.assigned_.set(key, true);
          }
          return this;
        }
        delete(key) {
          if (!this.has(key)) {
            return false;
          }
          const state = this[DRAFT_STATE2];
          assertUnrevoked(state);
          prepareMapCopy(state);
          markChanged2(state);
          if (state.base_.has(key)) {
            state.assigned_.set(key, false);
          } else {
            state.assigned_.delete(key);
          }
          state.copy_.delete(key);
          return true;
        }
        clear() {
          const state = this[DRAFT_STATE2];
          assertUnrevoked(state);
          if (latest2(state).size) {
            prepareMapCopy(state);
            markChanged2(state);
            state.assigned_ = /* @__PURE__ */ new Map();
            each2(state.base_, (key) => {
              state.assigned_.set(key, false);
            });
            state.copy_.clear();
          }
        }
        forEach(cb, thisArg) {
          const state = this[DRAFT_STATE2];
          latest2(state).forEach((_value, key, _map) => {
            cb.call(thisArg, this.get(key), key, this);
          });
        }
        get(key) {
          const state = this[DRAFT_STATE2];
          assertUnrevoked(state);
          const value = latest2(state).get(key);
          if (state.finalized_ || !isDraftable3(value)) {
            return value;
          }
          if (value !== state.base_.get(key)) {
            return value;
          }
          const draft = createProxy2(value, state);
          prepareMapCopy(state);
          state.copy_.set(key, draft);
          return draft;
        }
        keys() {
          return latest2(this[DRAFT_STATE2]).keys();
        }
        values() {
          const iterator = this.keys();
          return {
            [Symbol.iterator]: () => this.values(),
            next: () => {
              const r = iterator.next();
              if (r.done)
                return r;
              const value = this.get(r.value);
              return {
                done: false,
                value
              };
            }
          };
        }
        entries() {
          const iterator = this.keys();
          return {
            [Symbol.iterator]: () => this.entries(),
            next: () => {
              const r = iterator.next();
              if (r.done)
                return r;
              const value = this.get(r.value);
              return {
                done: false,
                value: [r.value, value]
              };
            }
          };
        }
        [(DRAFT_STATE2, Symbol.iterator)]() {
          return this.entries();
        }
      }
      function proxyMap_(target, parent) {
        return new DraftMap(target, parent);
      }
      function prepareMapCopy(state) {
        if (!state.copy_) {
          state.assigned_ = /* @__PURE__ */ new Map();
          state.copy_ = new Map(state.base_);
        }
      }
      class DraftSet extends Set {
        constructor(target, parent) {
          super();
          this[DRAFT_STATE2] = {
            type_: 3,
            parent_: parent,
            scope_: parent ? parent.scope_ : getCurrentScope2(),
            modified_: false,
            finalized_: false,
            copy_: void 0,
            base_: target,
            draft_: this,
            drafts_: /* @__PURE__ */ new Map(),
            revoked_: false,
            isManual_: false
          };
        }
        get size() {
          return latest2(this[DRAFT_STATE2]).size;
        }
        has(value) {
          const state = this[DRAFT_STATE2];
          assertUnrevoked(state);
          if (!state.copy_) {
            return state.base_.has(value);
          }
          if (state.copy_.has(value))
            return true;
          if (state.drafts_.has(value) && state.copy_.has(state.drafts_.get(value)))
            return true;
          return false;
        }
        add(value) {
          const state = this[DRAFT_STATE2];
          assertUnrevoked(state);
          if (!this.has(value)) {
            prepareSetCopy(state);
            markChanged2(state);
            state.copy_.add(value);
          }
          return this;
        }
        delete(value) {
          if (!this.has(value)) {
            return false;
          }
          const state = this[DRAFT_STATE2];
          assertUnrevoked(state);
          prepareSetCopy(state);
          markChanged2(state);
          return state.copy_.delete(value) || (state.drafts_.has(value) ? state.copy_.delete(state.drafts_.get(value)) : (
            /* istanbul ignore next */
            false
          ));
        }
        clear() {
          const state = this[DRAFT_STATE2];
          assertUnrevoked(state);
          if (latest2(state).size) {
            prepareSetCopy(state);
            markChanged2(state);
            state.copy_.clear();
          }
        }
        values() {
          const state = this[DRAFT_STATE2];
          assertUnrevoked(state);
          prepareSetCopy(state);
          return state.copy_.values();
        }
        entries() {
          const state = this[DRAFT_STATE2];
          assertUnrevoked(state);
          prepareSetCopy(state);
          return state.copy_.entries();
        }
        keys() {
          return this.values();
        }
        [(DRAFT_STATE2, Symbol.iterator)]() {
          return this.values();
        }
        forEach(cb, thisArg) {
          const iterator = this.values();
          let result = iterator.next();
          while (!result.done) {
            cb.call(thisArg, result.value, result.value, this);
            result = iterator.next();
          }
        }
      }
      function proxySet_(target, parent) {
        return new DraftSet(target, parent);
      }
      function prepareSetCopy(state) {
        if (!state.copy_) {
          state.copy_ = /* @__PURE__ */ new Set();
          state.base_.forEach((value) => {
            if (isDraftable3(value)) {
              const draft = createProxy2(value, state);
              state.drafts_.set(value, draft);
              state.copy_.add(draft);
            } else {
              state.copy_.add(value);
            }
          });
        }
      }
      function assertUnrevoked(state) {
        if (state.revoked_)
          die2(3, JSON.stringify(latest2(state)));
      }
      loadPlugin2("MapSet", { proxyMap_, proxySet_ });
    }
    var immer2 = new Immer22();
    var produce3 = immer2.produce;
    var produceWithPatches3 = immer2.produceWithPatches.bind(
      immer2
    );
    var setAutoFreeze3 = immer2.setAutoFreeze.bind(immer2);
    var setUseStrictShallowCopy3 = immer2.setUseStrictShallowCopy.bind(immer2);
    var applyPatches3 = immer2.applyPatches.bind(immer2);
    var createDraft3 = immer2.createDraft.bind(immer2);
    var finishDraft3 = immer2.finishDraft.bind(immer2);
    function castDraft2(value) {
      return value;
    }
    function castImmutable2(value) {
      return value;
    }
  }
});

// node_modules/.pnpm/immer@10.0.1/node_modules/immer/dist/cjs/index.js
var require_cjs = __commonJS({
  "node_modules/.pnpm/immer@10.0.1/node_modules/immer/dist/cjs/index.js"(exports, module2) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module2.exports = require_immer_cjs_production();
    } else {
      module2.exports = require_immer_cjs_development();
    }
  }
});

// node_modules/.pnpm/@xstate+immer@0.3.2_immer@10.0.1+xstate@4.37.1/node_modules/@xstate/immer/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/.pnpm/@xstate+immer@0.3.2_immer@10.0.1+xstate@4.37.1/node_modules/@xstate/immer/lib/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createUpdater = exports.assign = void 0;
    var xstate_1 = require_lib();
    var immer_1 = require_cjs();
    function immerAssign(recipe) {
      return (0, xstate_1.assign)(function(context, event2, meta) {
        return (0, immer_1.produce)(context, function(draft) {
          return void recipe(draft, event2, meta);
        });
      });
    }
    exports.assign = immerAssign;
    function createUpdater(type, recipe) {
      var update = function(input) {
        return {
          type,
          input
        };
      };
      return {
        update,
        action: immerAssign(function(ctx, event2, meta) {
          recipe(ctx, event2, meta);
        }),
        type
      };
    }
    exports.createUpdater = createUpdater;
  }
});

// src/index.ts
var import_immer = __toESM(require_lib2());

// node_modules/.pnpm/immer@10.0.1/node_modules/immer/dist/immer.mjs
var NOTHING = Symbol.for("immer-nothing");
var DRAFTABLE = Symbol.for("immer-draftable");
var DRAFT_STATE = Symbol.for("immer-state");
var errors = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(plugin) {
    return `The plugin for '${plugin}' has not been loaded into Immer. To enable the plugin, import and call \`enable${plugin}()\` when initializing your application.`;
  },
  function(thing) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${thing}'`;
  },
  "This object has been frozen and should not be mutated",
  function(data) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + data;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(thing) {
    return `'current' expects a draft, got: ${thing}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(thing) {
    return `'original' expects a draft, got: ${thing}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function die(error, ...args) {
  if (process.env.NODE_ENV !== "production") {
    const e = errors[error];
    const msg = typeof e === "function" ? e.apply(null, args) : e;
    throw new Error(`[Immer] ${msg}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${error}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var getPrototypeOf = Object.getPrototypeOf;
function isDraft2(value) {
  return !!value && !!value[DRAFT_STATE];
}
function isDraftable2(value) {
  if (!value)
    return false;
  return isPlainObject(value) || Array.isArray(value) || !!value[DRAFTABLE] || !!value.constructor?.[DRAFTABLE] || isMap(value) || isSet(value);
}
var objectCtorString = Object.prototype.constructor.toString();
function isPlainObject(value) {
  if (!value || typeof value !== "object")
    return false;
  const proto = getPrototypeOf(value);
  if (proto === null) {
    return true;
  }
  const Ctor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
  if (Ctor === Object)
    return true;
  return typeof Ctor == "function" && Function.toString.call(Ctor) === objectCtorString;
}
function each(obj, iter) {
  if (getArchtype(obj) === 0) {
    Object.entries(obj).forEach(([key, value]) => {
      iter(key, value, obj);
    });
  } else {
    obj.forEach((entry, index) => iter(index, entry, obj));
  }
}
function getArchtype(thing) {
  const state = thing[DRAFT_STATE];
  return state ? state.type_ : Array.isArray(thing) ? 1 : isMap(thing) ? 2 : isSet(thing) ? 3 : 0;
}
function has(thing, prop) {
  return getArchtype(thing) === 2 ? thing.has(prop) : Object.prototype.hasOwnProperty.call(thing, prop);
}
function set(thing, propOrOldValue, value) {
  const t = getArchtype(thing);
  if (t === 2)
    thing.set(propOrOldValue, value);
  else if (t === 3) {
    thing.add(value);
  } else
    thing[propOrOldValue] = value;
}
function is(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}
function isMap(target) {
  return target instanceof Map;
}
function isSet(target) {
  return target instanceof Set;
}
function latest(state) {
  return state.copy_ || state.base_;
}
function shallowCopy(base, strict) {
  if (isMap(base)) {
    return new Map(base);
  }
  if (isSet(base)) {
    return new Set(base);
  }
  if (Array.isArray(base))
    return Array.prototype.slice.call(base);
  if (!strict && isPlainObject(base)) {
    if (!getPrototypeOf(base)) {
      const obj = /* @__PURE__ */ Object.create(null);
      return Object.assign(obj, base);
    }
    return { ...base };
  }
  const descriptors = Object.getOwnPropertyDescriptors(base);
  delete descriptors[DRAFT_STATE];
  let keys = Reflect.ownKeys(descriptors);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    const desc = descriptors[key];
    if (desc.writable === false) {
      desc.writable = true;
      desc.configurable = true;
    }
    if (desc.get || desc.set)
      descriptors[key] = {
        configurable: true,
        writable: true,
        // could live with !!desc.set as well here...
        enumerable: desc.enumerable,
        value: base[key]
      };
  }
  return Object.create(getPrototypeOf(base), descriptors);
}
function freeze2(obj, deep = false) {
  if (isFrozen(obj) || isDraft2(obj) || !isDraftable2(obj))
    return obj;
  if (getArchtype(obj) > 1) {
    obj.set = obj.add = obj.clear = obj.delete = dontMutateFrozenCollections;
  }
  Object.freeze(obj);
  if (deep)
    each(obj, (_key, value) => freeze2(value, true), true);
  return obj;
}
function dontMutateFrozenCollections() {
  die(2);
}
function isFrozen(obj) {
  return Object.isFrozen(obj);
}
var plugins = {};
function getPlugin(pluginKey) {
  const plugin = plugins[pluginKey];
  if (!plugin) {
    die(0, pluginKey);
  }
  return plugin;
}
function loadPlugin(pluginKey, implementation) {
  if (!plugins[pluginKey])
    plugins[pluginKey] = implementation;
}
var currentScope;
function getCurrentScope() {
  return currentScope;
}
function createScope(parent_, immer_) {
  return {
    drafts_: [],
    parent_,
    immer_,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: true,
    unfinalizedDrafts_: 0
  };
}
function usePatchesInScope(scope, patchListener) {
  if (patchListener) {
    getPlugin("Patches");
    scope.patches_ = [];
    scope.inversePatches_ = [];
    scope.patchListener_ = patchListener;
  }
}
function revokeScope(scope) {
  leaveScope(scope);
  scope.drafts_.forEach(revokeDraft);
  scope.drafts_ = null;
}
function leaveScope(scope) {
  if (scope === currentScope) {
    currentScope = scope.parent_;
  }
}
function enterScope(immer2) {
  return currentScope = createScope(currentScope, immer2);
}
function revokeDraft(draft) {
  const state = draft[DRAFT_STATE];
  if (state.type_ === 0 || state.type_ === 1)
    state.revoke_();
  else
    state.revoked_ = true;
}
function processResult(result, scope) {
  scope.unfinalizedDrafts_ = scope.drafts_.length;
  const baseDraft = scope.drafts_[0];
  const isReplaced = result !== void 0 && result !== baseDraft;
  if (isReplaced) {
    if (baseDraft[DRAFT_STATE].modified_) {
      revokeScope(scope);
      die(4);
    }
    if (isDraftable2(result)) {
      result = finalize(scope, result);
      if (!scope.parent_)
        maybeFreeze(scope, result);
    }
    if (scope.patches_) {
      getPlugin("Patches").generateReplacementPatches_(
        baseDraft[DRAFT_STATE].base_,
        result,
        scope.patches_,
        scope.inversePatches_
      );
    }
  } else {
    result = finalize(scope, baseDraft, []);
  }
  revokeScope(scope);
  if (scope.patches_) {
    scope.patchListener_(scope.patches_, scope.inversePatches_);
  }
  return result !== NOTHING ? result : void 0;
}
function finalize(rootScope, value, path) {
  if (isFrozen(value))
    return value;
  const state = value[DRAFT_STATE];
  if (!state) {
    each(
      value,
      (key, childValue) => finalizeProperty(rootScope, state, value, key, childValue, path),
      true
      // See #590, don't recurse into non-enumerable of non drafted objects
    );
    return value;
  }
  if (state.scope_ !== rootScope)
    return value;
  if (!state.modified_) {
    maybeFreeze(rootScope, state.base_, true);
    return state.base_;
  }
  if (!state.finalized_) {
    state.finalized_ = true;
    state.scope_.unfinalizedDrafts_--;
    const result = state.copy_;
    let resultEach = result;
    let isSet2 = false;
    if (state.type_ === 3) {
      resultEach = new Set(result);
      result.clear();
      isSet2 = true;
    }
    each(
      resultEach,
      (key, childValue) => finalizeProperty(rootScope, state, result, key, childValue, path, isSet2)
    );
    maybeFreeze(rootScope, result, false);
    if (path && rootScope.patches_) {
      getPlugin("Patches").generatePatches_(
        state,
        path,
        rootScope.patches_,
        rootScope.inversePatches_
      );
    }
  }
  return state.copy_;
}
function finalizeProperty(rootScope, parentState, targetObject, prop, childValue, rootPath, targetIsSet) {
  if (process.env.NODE_ENV !== "production" && childValue === targetObject)
    die(5);
  if (isDraft2(childValue)) {
    const path = rootPath && parentState && parentState.type_ !== 3 && // Set objects are atomic since they have no keys.
    !has(parentState.assigned_, prop) ? rootPath.concat(prop) : void 0;
    const res = finalize(rootScope, childValue, path);
    set(targetObject, prop, res);
    if (isDraft2(res)) {
      rootScope.canAutoFreeze_ = false;
    } else
      return;
  } else if (targetIsSet) {
    targetObject.add(childValue);
  }
  if (isDraftable2(childValue) && !isFrozen(childValue)) {
    if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1) {
      return;
    }
    finalize(rootScope, childValue);
    if (!parentState || !parentState.scope_.parent_)
      maybeFreeze(rootScope, childValue);
  }
}
function maybeFreeze(scope, value, deep = false) {
  if (!scope.parent_ && scope.immer_.autoFreeze_ && scope.canAutoFreeze_) {
    freeze2(value, deep);
  }
}
function createProxyProxy(base, parent) {
  const isArray = Array.isArray(base);
  const state = {
    type_: isArray ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: parent ? parent.scope_ : getCurrentScope(),
    // True for both shallow and deep changes.
    modified_: false,
    // Used during finalization.
    finalized_: false,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: parent,
    // The base state.
    base_: base,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: false
  };
  let target = state;
  let traps = objectTraps;
  if (isArray) {
    target = [state];
    traps = arrayTraps;
  }
  const { revoke, proxy } = Proxy.revocable(target, traps);
  state.draft_ = proxy;
  state.revoke_ = revoke;
  return proxy;
}
var objectTraps = {
  get(state, prop) {
    if (prop === DRAFT_STATE)
      return state;
    const source = latest(state);
    if (!has(source, prop)) {
      return readPropFromProto(state, source, prop);
    }
    const value = source[prop];
    if (state.finalized_ || !isDraftable2(value)) {
      return value;
    }
    if (value === peek(state.base_, prop)) {
      prepareCopy(state);
      return state.copy_[prop] = createProxy(value, state);
    }
    return value;
  },
  has(state, prop) {
    return prop in latest(state);
  },
  ownKeys(state) {
    return Reflect.ownKeys(latest(state));
  },
  set(state, prop, value) {
    const desc = getDescriptorFromProto(latest(state), prop);
    if (desc?.set) {
      desc.set.call(state.draft_, value);
      return true;
    }
    if (!state.modified_) {
      const current22 = peek(latest(state), prop);
      const currentState = current22?.[DRAFT_STATE];
      if (currentState && currentState.base_ === value) {
        state.copy_[prop] = value;
        state.assigned_[prop] = false;
        return true;
      }
      if (is(value, current22) && (value !== void 0 || has(state.base_, prop)))
        return true;
      prepareCopy(state);
      markChanged(state);
    }
    if (state.copy_[prop] === value && // special case: handle new props with value 'undefined'
    (value !== void 0 || prop in state.copy_) || // special case: NaN
    Number.isNaN(value) && Number.isNaN(state.copy_[prop]))
      return true;
    state.copy_[prop] = value;
    state.assigned_[prop] = true;
    return true;
  },
  deleteProperty(state, prop) {
    if (peek(state.base_, prop) !== void 0 || prop in state.base_) {
      state.assigned_[prop] = false;
      prepareCopy(state);
      markChanged(state);
    } else {
      delete state.assigned_[prop];
    }
    if (state.copy_) {
      delete state.copy_[prop];
    }
    return true;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(state, prop) {
    const owner = latest(state);
    const desc = Reflect.getOwnPropertyDescriptor(owner, prop);
    if (!desc)
      return desc;
    return {
      writable: true,
      configurable: state.type_ !== 1 || prop !== "length",
      enumerable: desc.enumerable,
      value: owner[prop]
    };
  },
  defineProperty() {
    die(11);
  },
  getPrototypeOf(state) {
    return getPrototypeOf(state.base_);
  },
  setPrototypeOf() {
    die(12);
  }
};
var arrayTraps = {};
each(objectTraps, (key, fn) => {
  arrayTraps[key] = function() {
    arguments[0] = arguments[0][0];
    return fn.apply(this, arguments);
  };
});
arrayTraps.deleteProperty = function(state, prop) {
  if (process.env.NODE_ENV !== "production" && isNaN(parseInt(prop)))
    die(13);
  return arrayTraps.set.call(this, state, prop, void 0);
};
arrayTraps.set = function(state, prop, value) {
  if (process.env.NODE_ENV !== "production" && prop !== "length" && isNaN(parseInt(prop)))
    die(14);
  return objectTraps.set.call(this, state[0], prop, value, state[0]);
};
function peek(draft, prop) {
  const state = draft[DRAFT_STATE];
  const source = state ? latest(state) : draft;
  return source[prop];
}
function readPropFromProto(state, source, prop) {
  const desc = getDescriptorFromProto(source, prop);
  return desc ? `value` in desc ? desc.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    desc.get?.call(state.draft_)
  ) : void 0;
}
function getDescriptorFromProto(source, prop) {
  if (!(prop in source))
    return void 0;
  let proto = getPrototypeOf(source);
  while (proto) {
    const desc = Object.getOwnPropertyDescriptor(proto, prop);
    if (desc)
      return desc;
    proto = getPrototypeOf(proto);
  }
  return void 0;
}
function markChanged(state) {
  if (!state.modified_) {
    state.modified_ = true;
    if (state.parent_) {
      markChanged(state.parent_);
    }
  }
}
function prepareCopy(state) {
  if (!state.copy_) {
    state.copy_ = shallowCopy(
      state.base_,
      state.scope_.immer_.useStrictShallowCopy_
    );
  }
}
var Immer2 = class {
  constructor(config) {
    this.autoFreeze_ = true;
    this.useStrictShallowCopy_ = false;
    this.produce = (base, recipe, patchListener) => {
      if (typeof base === "function" && typeof recipe !== "function") {
        const defaultBase = recipe;
        recipe = base;
        const self2 = this;
        return function curriedProduce(base2 = defaultBase, ...args) {
          return self2.produce(base2, (draft) => recipe.call(this, draft, ...args));
        };
      }
      if (typeof recipe !== "function")
        die(6);
      if (patchListener !== void 0 && typeof patchListener !== "function")
        die(7);
      let result;
      if (isDraftable2(base)) {
        const scope = enterScope(this);
        const proxy = createProxy(base, void 0);
        let hasError = true;
        try {
          result = recipe(proxy);
          hasError = false;
        } finally {
          if (hasError)
            revokeScope(scope);
          else
            leaveScope(scope);
        }
        usePatchesInScope(scope, patchListener);
        return processResult(result, scope);
      } else if (!base || typeof base !== "object") {
        result = recipe(base);
        if (result === void 0)
          result = base;
        if (result === NOTHING)
          result = void 0;
        if (this.autoFreeze_)
          freeze2(result, true);
        if (patchListener) {
          const p = [];
          const ip = [];
          getPlugin("Patches").generateReplacementPatches_(base, result, p, ip);
          patchListener(p, ip);
        }
        return result;
      } else
        die(1, base);
    };
    this.produceWithPatches = (base, recipe) => {
      if (typeof base === "function") {
        return (state, ...args) => this.produceWithPatches(state, (draft) => base(draft, ...args));
      }
      let patches, inversePatches;
      const result = this.produce(base, recipe, (p, ip) => {
        patches = p;
        inversePatches = ip;
      });
      return [result, patches, inversePatches];
    };
    if (typeof config?.autoFreeze === "boolean")
      this.setAutoFreeze(config.autoFreeze);
    if (typeof config?.useStrictShallowCopy === "boolean")
      this.setUseStrictShallowCopy(config.useStrictShallowCopy);
  }
  createDraft(base) {
    if (!isDraftable2(base))
      die(8);
    if (isDraft2(base))
      base = current2(base);
    const scope = enterScope(this);
    const proxy = createProxy(base, void 0);
    proxy[DRAFT_STATE].isManual_ = true;
    leaveScope(scope);
    return proxy;
  }
  finishDraft(draft, patchListener) {
    const state = draft && draft[DRAFT_STATE];
    if (!state || !state.isManual_)
      die(9);
    const { scope_: scope } = state;
    usePatchesInScope(scope, patchListener);
    return processResult(void 0, scope);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(value) {
    this.autoFreeze_ = value;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(value) {
    this.useStrictShallowCopy_ = value;
  }
  applyPatches(base, patches) {
    let i;
    for (i = patches.length - 1; i >= 0; i--) {
      const patch = patches[i];
      if (patch.path.length === 0 && patch.op === "replace") {
        base = patch.value;
        break;
      }
    }
    if (i > -1) {
      patches = patches.slice(i + 1);
    }
    const applyPatchesImpl = getPlugin("Patches").applyPatches_;
    if (isDraft2(base)) {
      return applyPatchesImpl(base, patches);
    }
    return this.produce(
      base,
      (draft) => applyPatchesImpl(draft, patches)
    );
  }
};
function createProxy(value, parent) {
  const draft = isMap(value) ? getPlugin("MapSet").proxyMap_(value, parent) : isSet(value) ? getPlugin("MapSet").proxySet_(value, parent) : createProxyProxy(value, parent);
  const scope = parent ? parent.scope_ : getCurrentScope();
  scope.drafts_.push(draft);
  return draft;
}
function current2(value) {
  if (!isDraft2(value))
    die(10, value);
  return currentImpl(value);
}
function currentImpl(value) {
  if (!isDraftable2(value) || isFrozen(value))
    return value;
  const state = value[DRAFT_STATE];
  let copy;
  if (state) {
    if (!state.modified_)
      return state.base_;
    state.finalized_ = true;
    copy = shallowCopy(value, state.scope_.immer_.useStrictShallowCopy_);
  } else {
    copy = shallowCopy(value, true);
  }
  each(copy, (key, childValue) => {
    set(copy, key, currentImpl(childValue));
  });
  if (state) {
    state.finalized_ = false;
  }
  return copy;
}
function enableMapSet2() {
  class DraftMap extends Map {
    constructor(target, parent) {
      super();
      this[DRAFT_STATE] = {
        type_: 2,
        parent_: parent,
        scope_: parent ? parent.scope_ : getCurrentScope(),
        modified_: false,
        finalized_: false,
        copy_: void 0,
        assigned_: void 0,
        base_: target,
        draft_: this,
        isManual_: false,
        revoked_: false
      };
    }
    get size() {
      return latest(this[DRAFT_STATE]).size;
    }
    has(key) {
      return latest(this[DRAFT_STATE]).has(key);
    }
    set(key, value) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (!latest(state).has(key) || latest(state).get(key) !== value) {
        prepareMapCopy(state);
        markChanged(state);
        state.assigned_.set(key, true);
        state.copy_.set(key, value);
        state.assigned_.set(key, true);
      }
      return this;
    }
    delete(key) {
      if (!this.has(key)) {
        return false;
      }
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareMapCopy(state);
      markChanged(state);
      if (state.base_.has(key)) {
        state.assigned_.set(key, false);
      } else {
        state.assigned_.delete(key);
      }
      state.copy_.delete(key);
      return true;
    }
    clear() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (latest(state).size) {
        prepareMapCopy(state);
        markChanged(state);
        state.assigned_ = /* @__PURE__ */ new Map();
        each(state.base_, (key) => {
          state.assigned_.set(key, false);
        });
        state.copy_.clear();
      }
    }
    forEach(cb, thisArg) {
      const state = this[DRAFT_STATE];
      latest(state).forEach((_value, key, _map) => {
        cb.call(thisArg, this.get(key), key, this);
      });
    }
    get(key) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      const value = latest(state).get(key);
      if (state.finalized_ || !isDraftable2(value)) {
        return value;
      }
      if (value !== state.base_.get(key)) {
        return value;
      }
      const draft = createProxy(value, state);
      prepareMapCopy(state);
      state.copy_.set(key, draft);
      return draft;
    }
    keys() {
      return latest(this[DRAFT_STATE]).keys();
    }
    values() {
      const iterator = this.keys();
      return {
        [Symbol.iterator]: () => this.values(),
        next: () => {
          const r = iterator.next();
          if (r.done)
            return r;
          const value = this.get(r.value);
          return {
            done: false,
            value
          };
        }
      };
    }
    entries() {
      const iterator = this.keys();
      return {
        [Symbol.iterator]: () => this.entries(),
        next: () => {
          const r = iterator.next();
          if (r.done)
            return r;
          const value = this.get(r.value);
          return {
            done: false,
            value: [r.value, value]
          };
        }
      };
    }
    [(DRAFT_STATE, Symbol.iterator)]() {
      return this.entries();
    }
  }
  function proxyMap_(target, parent) {
    return new DraftMap(target, parent);
  }
  function prepareMapCopy(state) {
    if (!state.copy_) {
      state.assigned_ = /* @__PURE__ */ new Map();
      state.copy_ = new Map(state.base_);
    }
  }
  class DraftSet extends Set {
    constructor(target, parent) {
      super();
      this[DRAFT_STATE] = {
        type_: 3,
        parent_: parent,
        scope_: parent ? parent.scope_ : getCurrentScope(),
        modified_: false,
        finalized_: false,
        copy_: void 0,
        base_: target,
        draft_: this,
        drafts_: /* @__PURE__ */ new Map(),
        revoked_: false,
        isManual_: false
      };
    }
    get size() {
      return latest(this[DRAFT_STATE]).size;
    }
    has(value) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (!state.copy_) {
        return state.base_.has(value);
      }
      if (state.copy_.has(value))
        return true;
      if (state.drafts_.has(value) && state.copy_.has(state.drafts_.get(value)))
        return true;
      return false;
    }
    add(value) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (!this.has(value)) {
        prepareSetCopy(state);
        markChanged(state);
        state.copy_.add(value);
      }
      return this;
    }
    delete(value) {
      if (!this.has(value)) {
        return false;
      }
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareSetCopy(state);
      markChanged(state);
      return state.copy_.delete(value) || (state.drafts_.has(value) ? state.copy_.delete(state.drafts_.get(value)) : (
        /* istanbul ignore next */
        false
      ));
    }
    clear() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (latest(state).size) {
        prepareSetCopy(state);
        markChanged(state);
        state.copy_.clear();
      }
    }
    values() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareSetCopy(state);
      return state.copy_.values();
    }
    entries() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareSetCopy(state);
      return state.copy_.entries();
    }
    keys() {
      return this.values();
    }
    [(DRAFT_STATE, Symbol.iterator)]() {
      return this.values();
    }
    forEach(cb, thisArg) {
      const iterator = this.values();
      let result = iterator.next();
      while (!result.done) {
        cb.call(thisArg, result.value, result.value, this);
        result = iterator.next();
      }
    }
  }
  function proxySet_(target, parent) {
    return new DraftSet(target, parent);
  }
  function prepareSetCopy(state) {
    if (!state.copy_) {
      state.copy_ = /* @__PURE__ */ new Set();
      state.base_.forEach((value) => {
        if (isDraftable2(value)) {
          const draft = createProxy(value, state);
          state.drafts_.set(value, draft);
          state.copy_.add(draft);
        } else {
          state.copy_.add(value);
        }
      });
    }
  }
  function assertUnrevoked(state) {
    if (state.revoked_)
      die(3, JSON.stringify(latest(state)));
  }
  loadPlugin("MapSet", { proxyMap_, proxySet_ });
}
var immer = new Immer2();
var produce2 = immer.produce;
var produceWithPatches2 = immer.produceWithPatches.bind(
  immer
);
var setAutoFreeze2 = immer.setAutoFreeze.bind(immer);
var setUseStrictShallowCopy2 = immer.setUseStrictShallowCopy.bind(immer);
var applyPatches2 = immer.applyPatches.bind(immer);
var createDraft2 = immer.createDraft.bind(immer);
var finishDraft2 = immer.finishDraft.bind(immer);

// src/index.ts
var import_xstate = __toESM(require_lib());
enableMapSet2();
var machine = (0, import_xstate.createMachine)({
  id: "test",
  initial: "pending",
  preserveActionOrder: true,
  context: {
    testMap: /* @__PURE__ */ new Map()
  },
  states: {
    pending: {
      entry: (0, import_immer.assign)((ctx) => {
        ctx.testMap.set("michel", { name: "Michel Weststrate", country: "NL" });
      })
    },
    resolved: {},
    rejected: {}
  }
});
(0, import_xstate.interpret)(machine).start().subscribe(console.log);
/*! Bundled license information:

xstate/lib/_virtual/_tslib.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)
*/
//# sourceMappingURL=index.js.map
