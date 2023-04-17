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
      exports.__assign = Object.assign || function __assign(t2) {
        for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
          s2 = arguments[i2];
          for (var p2 in s2)
            if (Object.prototype.hasOwnProperty.call(s2, p2))
              t2[p2] = s2[p2];
        }
        return t2;
      };
      return exports.__assign.apply(this, arguments);
    };
    function __rest(s2, e) {
      var t2 = {};
      for (var p2 in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p2) && e.indexOf(p2) < 0)
          t2[p2] = s2[p2];
      if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
          if (e.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
            t2[p2[i2]] = s2[p2[i2]];
        }
      return t2;
    }
    function __values(o2) {
      var s2 = typeof Symbol === "function" && Symbol.iterator, m2 = s2 && o2[s2], i2 = 0;
      if (m2)
        return m2.call(o2);
      if (o2 && typeof o2.length === "number")
        return {
          next: function() {
            if (o2 && i2 >= o2.length)
              o2 = void 0;
            return { value: o2 && o2[i2++], done: !o2 };
          }
        };
      throw new TypeError(s2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o2, n2) {
      var m2 = typeof Symbol === "function" && o2[Symbol.iterator];
      if (!m2)
        return o2;
      var i2 = m2.call(o2), r2, ar = [], e;
      try {
        while ((n2 === void 0 || n2-- > 0) && !(r2 = i2.next()).done)
          ar.push(r2.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r2 && !r2.done && (m2 = i2["return"]))
            m2.call(i2);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    }
    function __spreadArray(to, from, pack) {
      if (pack || arguments.length === 2)
        for (var i2 = 0, l2 = from.length, ar; i2 < l2; i2++) {
          if (ar || !(i2 in from)) {
            if (!ar)
              ar = Array.prototype.slice.call(from, 0, i2);
            ar[i2] = from[i2];
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
      for (var i2 = 0; i2 < statePath.length - 1; i2++) {
        if (i2 === statePath.length - 2) {
          marker[statePath[i2]] = statePath[i2 + 1];
        } else {
          marker[statePath[i2]] = {};
          marker = marker[statePath[i2]];
        }
      }
      return value;
    }
    function mapValues(collection, iteratee) {
      var result = {};
      var collectionKeys = Object.keys(collection);
      for (var i2 = 0; i2 < collectionKeys.length; i2++) {
        var key = collectionKeys[i2];
        result[key] = iteratee(collection[key], key, collection, i2);
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
          for (var i2 = 0; i2 < currentPath.length; i2++) {
            var subPath = currentPath[i2];
            if (i2 === currentPath.length - 2) {
              marker[subPath] = currentPath[i2 + 1];
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
        to: function(_2, __, _a) {
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
      return send(function(_2, event2) {
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
          var i2 = 0;
          while (i2 < block.actions.length) {
            if (block.actions[i2].type === actionTypes.assign) {
              assignActions.push(block.actions[i2]);
              block.actions.splice(i2, 1);
              continue;
            }
            i2++;
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
    var provide = function(service, fn2) {
      serviceStack.push(service);
      var result = fn2(service);
      serviceStack.pop();
      return result;
    };
    var consume = function(fn2) {
      return fn2(serviceStack[serviceStack.length - 1]);
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
      return getAllChildren(stateNode).filter(function(sn2) {
        return sn2.type !== "history";
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
          var s2 = configuration_1_1.value;
          var m2 = s2.parent;
          while (m2 && !configuration.has(m2)) {
            configuration.add(m2);
            m2 = m2.parent;
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
          var s2 = configuration_2_1.value;
          if (s2.type === "compound" && (!adjList.get(s2) || !adjList.get(s2).length)) {
            if (prevAdjList.get(s2)) {
              prevAdjList.get(s2).forEach(function(sn2) {
                return configuration.add(sn2);
              });
            } else {
              s2.initialStateNodes.forEach(function(sn2) {
                return configuration.add(sn2);
              });
            }
          } else {
            if (s2.type === "parallel") {
              try {
                for (var _e = (e_3 = void 0, _tslib.__values(getChildren(s2))), _f = _e.next(); !_f.done; _f = _e.next()) {
                  var child = _f.value;
                  if (!configuration.has(child)) {
                    configuration.add(child);
                    if (prevAdjList.get(child)) {
                      prevAdjList.get(child).forEach(function(sn2) {
                        return configuration.add(sn2);
                      });
                    } else {
                      child.initialStateNodes.forEach(function(sn2) {
                        return configuration.add(sn2);
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
          var s2 = configuration_3_1.value;
          var m2 = s2.parent;
          while (m2 && !configuration.has(m2)) {
            configuration.add(m2);
            m2 = m2.parent;
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
          var s2 = configuration_4_1.value;
          if (!adjList.has(s2)) {
            adjList.set(s2, []);
          }
          if (s2.parent) {
            if (!adjList.has(s2.parent)) {
              adjList.set(s2.parent, []);
            }
            adjList.get(s2.parent).push(s2);
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
    function has(iterable, item) {
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
      return _tslib.__spreadArray([], _tslib.__read(new Set(utils.flatten(_tslib.__spreadArray([], _tslib.__read(configuration.map(function(sn2) {
        return sn2.ownEvents;
      })), false)))), false);
    }
    function isInFinalState(configuration, stateNode) {
      if (stateNode.type === "compound") {
        return getChildren(stateNode).some(function(s2) {
          return s2.type === "final" && has(configuration, s2);
        });
      }
      if (stateNode.type === "parallel") {
        return getChildren(stateNode).every(function(sn2) {
          return isInFinalState(configuration, sn2);
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
      return new Set(utils.flatten(configuration.map(function(sn2) {
        return sn2.tags;
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
    exports.has = has;
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
    function stateValuesEqual(a2, b2) {
      if (a2 === b2) {
        return true;
      }
      if (a2 === void 0 || b2 === void 0) {
        return false;
      }
      if (utils.isString(a2) || utils.isString(b2)) {
        return a2 === b2;
      }
      var aKeys = Object.keys(a2);
      var bKeys = Object.keys(b2);
      return aKeys.length === bKeys.length && aKeys.every(function(key) {
        return stateValuesEqual(a2[key], b2[key]);
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
            return _this.toStrings(stateValue[key], delimiter).map(function(s2) {
              return key + delimiter + s2;
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
          transitionData.transitions.some(function(t2) {
            return t2.target !== void 0 || t2.actions.length;
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
            var finalChildStateNode = state.configuration.find(function(sn2) {
              return sn2.type === "final" && sn2.parent === _this.machine;
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
        Interpreter2.prototype.subscribe = function(nextListenerOrObserver, _2, completeListener) {
          var _this = this;
          var observer = utils.toObserver(nextListenerOrObserver, _2, completeListener);
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
              var exitActions = utils.flatten(_tslib.__spreadArray([], _tslib.__read(_this.state.configuration), false).sort(function(a2, b2) {
                return b2.order - a2.order;
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
              batchedActions.push.apply(batchedActions, _tslib.__spreadArray([], _tslib.__read(_this.machine.config.predictableActionArguments ? nextState.actions : nextState.actions.map(function(a2) {
                return State.bindActionToState(a2, nextState);
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
            setTimeout: function(fn2, ms) {
              return setTimeout(fn2, ms);
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
          this.invoke = utils.toArray(this.config.invoke).map(function(invokeConfig, i2) {
            var _a2, _b;
            if (utils.isMachine(invokeConfig)) {
              var invokeId = utils.createInvokeId(_this.id, i2);
              _this.machine.options.services = _tslib.__assign((_a2 = {}, _a2[invokeId] = invokeConfig, _a2), _this.machine.options.services);
              return invokeUtils.toInvokeDefinition({
                src: invokeId,
                id: invokeId
              });
            } else if (utils.isString(invokeConfig.src)) {
              var invokeId = invokeConfig.id || utils.createInvokeId(_this.id, i2);
              return invokeUtils.toInvokeDefinition(_tslib.__assign(_tslib.__assign({}, invokeConfig), {
                id: invokeId,
                src: invokeConfig.src
              }));
            } else if (utils.isMachine(invokeConfig.src) || utils.isFunction(invokeConfig.src)) {
              var invokeId = invokeConfig.id || utils.createInvokeId(_this.id, i2);
              _this.machine.options.services = _tslib.__assign((_b = {}, _b[invokeId] = invokeConfig.src, _b), _this.machine.options.services);
              return invokeUtils.toInvokeDefinition(_tslib.__assign(_tslib.__assign({
                id: invokeId
              }, invokeConfig), {
                src: invokeId
              }));
            } else {
              var invokeSource = invokeConfig.src;
              return invokeUtils.toInvokeDefinition(_tslib.__assign(_tslib.__assign({
                id: utils.createInvokeId(_this.id, i2)
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
          var mutateEntryExit = function(delay, i2) {
            var delayRef = utils.isFunction(delay) ? "".concat(_this.id, ":delay[").concat(i2, "]") : delay;
            var eventType = actions.after(delayRef, _this.id);
            _this.onEntry.push(actions.send(eventType, {
              delay
            }));
            _this.onExit.push(actions.cancel(eventType));
            return eventType;
          };
          var delayedTransitions = utils.isArray(afterConfig) ? afterConfig.map(function(transition, i2) {
            var eventType = mutateEntryExit(transition.delay, i2);
            return _tslib.__assign(_tslib.__assign({}, transition), {
              event: eventType
            });
          }) : utils.flatten(Object.keys(afterConfig).map(function(delay, i2) {
            var configTransition = afterConfig[delay];
            var resolvedTransition = utils.isString(configTransition) ? {
              target: configTransition
            } : configTransition;
            var resolvedDelay = !isNaN(+delay) ? +delay : delay;
            var eventType = mutateEntryExit(resolvedDelay, i2);
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
            exitSet: utils.flatten(stateTransitions.map(function(t2) {
              return t2.exitSet;
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
            for (var _c = _tslib.__values(Array.from(resolvedConfig).sort(function(a2, b2) {
              return a2.order - b2.order;
            })), _d = _c.next(); !_d.done; _d = _c.next()) {
              var sn2 = _d.value;
              if (!stateUtils.has(prevConfig, sn2) || stateUtils.has(transition.exitSet, sn2) || sn2.parent && entrySet.has(sn2.parent)) {
                entrySet.add(sn2);
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
              var sn2 = prevConfig_1_1.value;
              if (!stateUtils.has(resolvedConfig, sn2) || stateUtils.has(transition.exitSet, sn2.parent)) {
                transition.exitSet.push(sn2);
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
          transition.exitSet.sort(function(a2, b2) {
            return b2.order - a2.order;
          });
          var entryStates = Array.from(entrySet).sort(function(a2, b2) {
            return a2.order - b2.order;
          });
          var exitStates = new Set(transition.exitSet);
          var doneEvents = utils.flatten(entryStates.map(function(sn3) {
            var events = [];
            if (sn3.type !== "final") {
              return events;
            }
            var parent = sn3.parent;
            if (!parent.parent) {
              return events;
            }
            events.push(
              actions.done(sn3.id, sn3.doneData),
              // TODO: deprecate - final states should not emit done events for their own state.
              actions.done(parent.id, sn3.doneData ? utils.mapContext(sn3.doneData, currentContext, _event) : void 0)
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
            var stopActions = actions.toActionObjects(utils.flatten(_tslib.__spreadArray([], _tslib.__read(resolvedConfig), false).sort(function(a2, b2) {
              return b2.order - a2.order;
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
                target: transition.target ? transition.target.map(function(t2) {
                  return "#".concat(t2.id);
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
    var t2 = createSchema;
    exports.createSchema = createSchema;
    exports.t = t2;
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

// node_modules/.pnpm/immer@9.0.21/node_modules/immer/dist/immer.cjs.production.min.js
var require_immer_cjs_production_min = __commonJS({
  "node_modules/.pnpm/immer@9.0.21/node_modules/immer/dist/immer.cjs.production.min.js"(exports) {
    function n2(n3) {
      for (var r3 = arguments.length, t3 = Array(r3 > 1 ? r3 - 1 : 0), e2 = 1; e2 < r3; e2++)
        t3[e2 - 1] = arguments[e2];
      throw Error("[Immer] minified error nr: " + n3 + (t3.length ? " " + t3.map(function(n4) {
        return "'" + n4 + "'";
      }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
    }
    function r2(n3) {
      return !!n3 && !!n3[H2];
    }
    function t2(n3) {
      var r3;
      return !!n3 && (function(n4) {
        if (!n4 || "object" != typeof n4)
          return false;
        var r4 = Object.getPrototypeOf(n4);
        if (null === r4)
          return true;
        var t3 = Object.hasOwnProperty.call(r4, "constructor") && r4.constructor;
        return t3 === Object || "function" == typeof t3 && Function.toString.call(t3) === Q2;
      }(n3) || Array.isArray(n3) || !!n3[G2] || !!(null === (r3 = n3.constructor) || void 0 === r3 ? void 0 : r3[G2]) || c2(n3) || v2(n3));
    }
    function e(n3, r3, t3) {
      void 0 === t3 && (t3 = false), 0 === i2(n3) ? (t3 ? Object.keys : T)(n3).forEach(function(e2) {
        t3 && "symbol" == typeof e2 || r3(e2, n3[e2], n3);
      }) : n3.forEach(function(t4, e2) {
        return r3(e2, t4, n3);
      });
    }
    function i2(n3) {
      var r3 = n3[H2];
      return r3 ? r3.t > 3 ? r3.t - 4 : r3.t : Array.isArray(n3) ? 1 : c2(n3) ? 2 : v2(n3) ? 3 : 0;
    }
    function u2(n3, r3) {
      return 2 === i2(n3) ? n3.has(r3) : Object.prototype.hasOwnProperty.call(n3, r3);
    }
    function o2(n3, r3) {
      return 2 === i2(n3) ? n3.get(r3) : n3[r3];
    }
    function f2(n3, r3, t3) {
      var e2 = i2(n3);
      2 === e2 ? n3.set(r3, t3) : 3 === e2 ? n3.add(t3) : n3[r3] = t3;
    }
    function a2(n3, r3) {
      return n3 === r3 ? 0 !== n3 || 1 / n3 == 1 / r3 : n3 != n3 && r3 != r3;
    }
    function c2(n3) {
      return W2 && n3 instanceof Map;
    }
    function v2(n3) {
      return X2 && n3 instanceof Set;
    }
    function s2(n3) {
      return n3.i || n3.u;
    }
    function p2(n3) {
      if (Array.isArray(n3))
        return Array.prototype.slice.call(n3);
      var r3 = U2(n3);
      delete r3[H2];
      for (var t3 = T(r3), e2 = 0; e2 < t3.length; e2++) {
        var i3 = t3[e2], u3 = r3[i3];
        false === u3.writable && (u3.writable = true, u3.configurable = true), (u3.get || u3.set) && (r3[i3] = { configurable: true, writable: true, enumerable: u3.enumerable, value: n3[i3] });
      }
      return Object.create(Object.getPrototypeOf(n3), r3);
    }
    function l2(n3, u3) {
      return void 0 === u3 && (u3 = false), h2(n3) || r2(n3) || !t2(n3) || (i2(n3) > 1 && (n3.set = n3.add = n3.clear = n3.delete = d2), Object.freeze(n3), u3 && e(n3, function(n4, r3) {
        return l2(r3, true);
      }, true)), n3;
    }
    function d2() {
      n2(2);
    }
    function h2(n3) {
      return null == n3 || "object" != typeof n3 || Object.isFrozen(n3);
    }
    function y2(r3) {
      var t3 = V2[r3];
      return t3 || n2(18, r3), t3;
    }
    function _2(n3, r3) {
      V2[n3] || (V2[n3] = r3);
    }
    function b2() {
      return I2;
    }
    function m2(n3, r3) {
      r3 && (y2("Patches"), n3.o = [], n3.v = [], n3.s = r3);
    }
    function j2(n3) {
      O2(n3), n3.p.forEach(w2), n3.p = null;
    }
    function O2(n3) {
      n3 === I2 && (I2 = n3.l);
    }
    function x2(n3) {
      return I2 = { p: [], l: I2, h: n3, _: true, m: 0 };
    }
    function w2(n3) {
      var r3 = n3[H2];
      0 === r3.t || 1 === r3.t ? r3.j() : r3.O = true;
    }
    function S2(r3, e2) {
      e2.m = e2.p.length;
      var i3 = e2.p[0], u3 = void 0 !== r3 && r3 !== i3;
      return e2.h.S || y2("ES5").P(e2, r3, u3), u3 ? (i3[H2].g && (j2(e2), n2(4)), t2(r3) && (r3 = P2(e2, r3), e2.l || M2(e2, r3)), e2.o && y2("Patches").M(i3[H2].u, r3, e2.o, e2.v)) : r3 = P2(e2, i3, []), j2(e2), e2.o && e2.s(e2.o, e2.v), r3 !== B2 ? r3 : void 0;
    }
    function P2(n3, r3, t3) {
      if (h2(r3))
        return r3;
      var i3 = r3[H2];
      if (!i3)
        return e(r3, function(e2, u4) {
          return g2(n3, i3, r3, e2, u4, t3);
        }, true), r3;
      if (i3.A !== n3)
        return r3;
      if (!i3.g)
        return M2(n3, i3.u, true), i3.u;
      if (!i3.R) {
        i3.R = true, i3.A.m--;
        var u3 = 4 === i3.t || 5 === i3.t ? i3.i = p2(i3.k) : i3.i, o3 = u3, f3 = false;
        3 === i3.t && (o3 = new Set(u3), u3.clear(), f3 = true), e(o3, function(r4, e2) {
          return g2(n3, i3, u3, r4, e2, t3, f3);
        }), M2(n3, u3, false), t3 && n3.o && y2("Patches").F(i3, t3, n3.o, n3.v);
      }
      return i3.i;
    }
    function g2(n3, e2, i3, o3, a3, c3, v3) {
      if (r2(a3)) {
        var s3 = P2(n3, a3, c3 && e2 && 3 !== e2.t && !u2(e2.N, o3) ? c3.concat(o3) : void 0);
        if (f2(i3, o3, s3), !r2(s3))
          return;
        n3._ = false;
      } else
        v3 && i3.add(a3);
      if (t2(a3) && !h2(a3)) {
        if (!n3.h.D && n3.m < 1)
          return;
        P2(n3, a3), e2 && e2.A.l || M2(n3, a3);
      }
    }
    function M2(n3, r3, t3) {
      void 0 === t3 && (t3 = false), !n3.l && n3.h.D && n3._ && l2(r3, t3);
    }
    function A2(n3, r3) {
      var t3 = n3[H2];
      return (t3 ? s2(t3) : n3)[r3];
    }
    function z2(n3, r3) {
      if (r3 in n3)
        for (var t3 = Object.getPrototypeOf(n3); t3; ) {
          var e2 = Object.getOwnPropertyDescriptor(t3, r3);
          if (e2)
            return e2;
          t3 = Object.getPrototypeOf(t3);
        }
    }
    function E2(n3) {
      n3.g || (n3.g = true, n3.l && E2(n3.l));
    }
    function R2(n3) {
      n3.i || (n3.i = p2(n3.u));
    }
    function k2(n3, r3, t3) {
      var e2 = c2(r3) ? y2("MapSet").K(r3, t3) : v2(r3) ? y2("MapSet").$(r3, t3) : n3.S ? function(n4, r4) {
        var t4 = Array.isArray(n4), e3 = { t: t4 ? 1 : 0, A: r4 ? r4.A : b2(), g: false, R: false, N: {}, l: r4, u: n4, k: null, i: null, j: null, C: false }, i3 = e3, u3 = Y2;
        t4 && (i3 = [e3], u3 = Z2);
        var o3 = Proxy.revocable(i3, u3), f3 = o3.revoke, a3 = o3.proxy;
        return e3.k = a3, e3.j = f3, a3;
      }(r3, t3) : y2("ES5").I(r3, t3);
      return (t3 ? t3.A : b2()).p.push(e2), e2;
    }
    function F(u3) {
      return r2(u3) || n2(22, u3), function n3(r3) {
        if (!t2(r3))
          return r3;
        var u4, a3 = r3[H2], c3 = i2(r3);
        if (a3) {
          if (!a3.g && (a3.t < 4 || !y2("ES5").J(a3)))
            return a3.u;
          a3.R = true, u4 = N2(r3, c3), a3.R = false;
        } else
          u4 = N2(r3, c3);
        return e(u4, function(r4, t3) {
          a3 && o2(a3.u, r4) === t3 || f2(u4, r4, n3(t3));
        }), 3 === c3 ? new Set(u4) : u4;
      }(u3);
    }
    function N2(n3, r3) {
      switch (r3) {
        case 2:
          return new Map(n3);
        case 3:
          return Array.from(n3);
      }
      return p2(n3);
    }
    function D2() {
      function n3(n4, r3) {
        var t4 = f3[n4];
        return t4 ? t4.enumerable = r3 : f3[n4] = t4 = { configurable: true, enumerable: r3, get: function() {
          return Y2.get(this[H2], n4);
        }, set: function(r4) {
          Y2.set(this[H2], n4, r4);
        } }, t4;
      }
      function t3(n4) {
        for (var r3 = n4.length - 1; r3 >= 0; r3--) {
          var t4 = n4[r3][H2];
          if (!t4.g)
            switch (t4.t) {
              case 5:
                o3(t4) && E2(t4);
                break;
              case 4:
                i3(t4) && E2(t4);
            }
        }
      }
      function i3(n4) {
        for (var r3 = n4.u, t4 = n4.k, e2 = T(t4), i4 = e2.length - 1; i4 >= 0; i4--) {
          var o4 = e2[i4];
          if (o4 !== H2) {
            var f4 = r3[o4];
            if (void 0 === f4 && !u2(r3, o4))
              return true;
            var c3 = t4[o4], v3 = c3 && c3[H2];
            if (v3 ? v3.u !== f4 : !a2(c3, f4))
              return true;
          }
        }
        var s3 = !!r3[H2];
        return e2.length !== T(r3).length + (s3 ? 0 : 1);
      }
      function o3(n4) {
        var r3 = n4.k;
        if (r3.length !== n4.u.length)
          return true;
        var t4 = Object.getOwnPropertyDescriptor(r3, r3.length - 1);
        if (t4 && !t4.get)
          return true;
        for (var e2 = 0; e2 < r3.length; e2++)
          if (!r3.hasOwnProperty(e2))
            return true;
        return false;
      }
      var f3 = {};
      _2("ES5", { I: function(r3, t4) {
        var e2 = Array.isArray(r3), i4 = function(r4, t5) {
          if (r4) {
            for (var e3 = Array(t5.length), i5 = 0; i5 < t5.length; i5++)
              Object.defineProperty(e3, "" + i5, n3(i5, true));
            return e3;
          }
          var u4 = U2(t5);
          delete u4[H2];
          for (var o4 = T(u4), f4 = 0; f4 < o4.length; f4++) {
            var a3 = o4[f4];
            u4[a3] = n3(a3, r4 || !!u4[a3].enumerable);
          }
          return Object.create(Object.getPrototypeOf(t5), u4);
        }(e2, r3), u3 = { t: e2 ? 5 : 4, A: t4 ? t4.A : b2(), g: false, R: false, N: {}, l: t4, u: r3, k: i4, i: null, O: false, C: false };
        return Object.defineProperty(i4, H2, { value: u3, writable: true }), i4;
      }, P: function(n4, i4, f4) {
        f4 ? r2(i4) && i4[H2].A === n4 && t3(n4.p) : (n4.o && function n5(r3) {
          if (r3 && "object" == typeof r3) {
            var t4 = r3[H2];
            if (t4) {
              var i5 = t4.u, f5 = t4.k, a3 = t4.N, c3 = t4.t;
              if (4 === c3)
                e(f5, function(r4) {
                  r4 !== H2 && (void 0 !== i5[r4] || u2(i5, r4) ? a3[r4] || n5(f5[r4]) : (a3[r4] = true, E2(t4)));
                }), e(i5, function(n6) {
                  void 0 !== f5[n6] || u2(f5, n6) || (a3[n6] = false, E2(t4));
                });
              else if (5 === c3) {
                if (o3(t4) && (E2(t4), a3.length = true), f5.length < i5.length)
                  for (var v3 = f5.length; v3 < i5.length; v3++)
                    a3[v3] = false;
                else
                  for (var s3 = i5.length; s3 < f5.length; s3++)
                    a3[s3] = true;
                for (var p3 = Math.min(f5.length, i5.length), l3 = 0; l3 < p3; l3++)
                  f5.hasOwnProperty(l3) || (a3[l3] = true), void 0 === a3[l3] && n5(f5[l3]);
              }
            }
          }
        }(n4.p[0]), t3(n4.p));
      }, J: function(n4) {
        return 4 === n4.t ? i3(n4) : o3(n4);
      } });
    }
    function K() {
      function f3(n3) {
        if (!t2(n3))
          return n3;
        if (Array.isArray(n3))
          return n3.map(f3);
        if (c2(n3))
          return new Map(Array.from(n3.entries()).map(function(n4) {
            return [n4[0], f3(n4[1])];
          }));
        if (v2(n3))
          return new Set(Array.from(n3).map(f3));
        var r3 = Object.create(Object.getPrototypeOf(n3));
        for (var e2 in n3)
          r3[e2] = f3(n3[e2]);
        return u2(n3, G2) && (r3[G2] = n3[G2]), r3;
      }
      function a3(n3) {
        return r2(n3) ? f3(n3) : n3;
      }
      var s3 = "add";
      _2("Patches", { W: function(r3, t3) {
        return t3.forEach(function(t4) {
          for (var e2 = t4.path, u3 = t4.op, a4 = r3, c3 = 0; c3 < e2.length - 1; c3++) {
            var v3 = i2(a4), p3 = e2[c3];
            "string" != typeof p3 && "number" != typeof p3 && (p3 = "" + p3), 0 !== v3 && 1 !== v3 || "__proto__" !== p3 && "constructor" !== p3 || n2(24), "function" == typeof a4 && "prototype" === p3 && n2(24), "object" != typeof (a4 = o2(a4, p3)) && n2(15, e2.join("/"));
          }
          var l3 = i2(a4), d3 = f3(t4.value), h3 = e2[e2.length - 1];
          switch (u3) {
            case "replace":
              switch (l3) {
                case 2:
                  return a4.set(h3, d3);
                case 3:
                  n2(16);
                default:
                  return a4[h3] = d3;
              }
            case s3:
              switch (l3) {
                case 1:
                  return "-" === h3 ? a4.push(d3) : a4.splice(h3, 0, d3);
                case 2:
                  return a4.set(h3, d3);
                case 3:
                  return a4.add(d3);
                default:
                  return a4[h3] = d3;
              }
            case "remove":
              switch (l3) {
                case 1:
                  return a4.splice(h3, 1);
                case 2:
                  return a4.delete(h3);
                case 3:
                  return a4.delete(t4.value);
                default:
                  return delete a4[h3];
              }
            default:
              n2(17, u3);
          }
        }), r3;
      }, F: function(n3, r3, t3, i3) {
        switch (n3.t) {
          case 0:
          case 4:
          case 2:
            return function(n4, r4, t4, i4) {
              var f4 = n4.u, c3 = n4.i;
              e(n4.N, function(n5, e2) {
                var v3 = o2(f4, n5), p3 = o2(c3, n5), l3 = e2 ? u2(f4, n5) ? "replace" : s3 : "remove";
                if (v3 !== p3 || "replace" !== l3) {
                  var d3 = r4.concat(n5);
                  t4.push("remove" === l3 ? { op: l3, path: d3 } : { op: l3, path: d3, value: p3 }), i4.push(l3 === s3 ? { op: "remove", path: d3 } : "remove" === l3 ? { op: s3, path: d3, value: a3(v3) } : { op: "replace", path: d3, value: a3(v3) });
                }
              });
            }(n3, r3, t3, i3);
          case 5:
          case 1:
            return function(n4, r4, t4, e2) {
              var i4 = n4.u, u3 = n4.N, o3 = n4.i;
              if (o3.length < i4.length) {
                var f4 = [o3, i4];
                i4 = f4[0], o3 = f4[1];
                var c3 = [e2, t4];
                t4 = c3[0], e2 = c3[1];
              }
              for (var v3 = 0; v3 < i4.length; v3++)
                if (u3[v3] && o3[v3] !== i4[v3]) {
                  var p3 = r4.concat([v3]);
                  t4.push({ op: "replace", path: p3, value: a3(o3[v3]) }), e2.push({ op: "replace", path: p3, value: a3(i4[v3]) });
                }
              for (var l3 = i4.length; l3 < o3.length; l3++) {
                var d3 = r4.concat([l3]);
                t4.push({ op: s3, path: d3, value: a3(o3[l3]) });
              }
              i4.length < o3.length && e2.push({ op: "replace", path: r4.concat(["length"]), value: i4.length });
            }(n3, r3, t3, i3);
          case 3:
            return function(n4, r4, t4, e2) {
              var i4 = n4.u, u3 = n4.i, o3 = 0;
              i4.forEach(function(n5) {
                if (!u3.has(n5)) {
                  var i5 = r4.concat([o3]);
                  t4.push({ op: "remove", path: i5, value: n5 }), e2.unshift({ op: s3, path: i5, value: n5 });
                }
                o3++;
              }), o3 = 0, u3.forEach(function(n5) {
                if (!i4.has(n5)) {
                  var u4 = r4.concat([o3]);
                  t4.push({ op: s3, path: u4, value: n5 }), e2.unshift({ op: "remove", path: u4, value: n5 });
                }
                o3++;
              });
            }(n3, r3, t3, i3);
        }
      }, M: function(n3, r3, t3, e2) {
        t3.push({ op: "replace", path: [], value: r3 === B2 ? void 0 : r3 }), e2.push({ op: "replace", path: [], value: n3 });
      } });
    }
    function $() {
      function r3(n3, r4) {
        function t3() {
          this.constructor = n3;
        }
        f3(n3, r4), n3.prototype = (t3.prototype = r4.prototype, new t3());
      }
      function i3(n3) {
        n3.i || (n3.N = /* @__PURE__ */ new Map(), n3.i = new Map(n3.u));
      }
      function u3(n3) {
        n3.i || (n3.i = /* @__PURE__ */ new Set(), n3.u.forEach(function(r4) {
          if (t2(r4)) {
            var e2 = k2(n3.A.h, r4, n3);
            n3.p.set(r4, e2), n3.i.add(e2);
          } else
            n3.i.add(r4);
        }));
      }
      function o3(r4) {
        r4.O && n2(3, JSON.stringify(s2(r4)));
      }
      var f3 = function(n3, r4) {
        return (f3 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n4, r5) {
          n4.__proto__ = r5;
        } || function(n4, r5) {
          for (var t3 in r5)
            r5.hasOwnProperty(t3) && (n4[t3] = r5[t3]);
        })(n3, r4);
      }, a3 = function() {
        function n3(n4, r4) {
          return this[H2] = { t: 2, l: r4, A: r4 ? r4.A : b2(), g: false, R: false, i: void 0, N: void 0, u: n4, k: this, C: false, O: false }, this;
        }
        r3(n3, Map);
        var u4 = n3.prototype;
        return Object.defineProperty(u4, "size", { get: function() {
          return s2(this[H2]).size;
        } }), u4.has = function(n4) {
          return s2(this[H2]).has(n4);
        }, u4.set = function(n4, r4) {
          var t3 = this[H2];
          return o3(t3), s2(t3).has(n4) && s2(t3).get(n4) === r4 || (i3(t3), E2(t3), t3.N.set(n4, true), t3.i.set(n4, r4), t3.N.set(n4, true)), this;
        }, u4.delete = function(n4) {
          if (!this.has(n4))
            return false;
          var r4 = this[H2];
          return o3(r4), i3(r4), E2(r4), r4.u.has(n4) ? r4.N.set(n4, false) : r4.N.delete(n4), r4.i.delete(n4), true;
        }, u4.clear = function() {
          var n4 = this[H2];
          o3(n4), s2(n4).size && (i3(n4), E2(n4), n4.N = /* @__PURE__ */ new Map(), e(n4.u, function(r4) {
            n4.N.set(r4, false);
          }), n4.i.clear());
        }, u4.forEach = function(n4, r4) {
          var t3 = this;
          s2(this[H2]).forEach(function(e2, i4) {
            n4.call(r4, t3.get(i4), i4, t3);
          });
        }, u4.get = function(n4) {
          var r4 = this[H2];
          o3(r4);
          var e2 = s2(r4).get(n4);
          if (r4.R || !t2(e2))
            return e2;
          if (e2 !== r4.u.get(n4))
            return e2;
          var u5 = k2(r4.A.h, e2, r4);
          return i3(r4), r4.i.set(n4, u5), u5;
        }, u4.keys = function() {
          return s2(this[H2]).keys();
        }, u4.values = function() {
          var n4, r4 = this, t3 = this.keys();
          return (n4 = {})[L2] = function() {
            return r4.values();
          }, n4.next = function() {
            var n5 = t3.next();
            return n5.done ? n5 : { done: false, value: r4.get(n5.value) };
          }, n4;
        }, u4.entries = function() {
          var n4, r4 = this, t3 = this.keys();
          return (n4 = {})[L2] = function() {
            return r4.entries();
          }, n4.next = function() {
            var n5 = t3.next();
            if (n5.done)
              return n5;
            var e2 = r4.get(n5.value);
            return { done: false, value: [n5.value, e2] };
          }, n4;
        }, u4[L2] = function() {
          return this.entries();
        }, n3;
      }(), c3 = function() {
        function n3(n4, r4) {
          return this[H2] = { t: 3, l: r4, A: r4 ? r4.A : b2(), g: false, R: false, i: void 0, u: n4, k: this, p: /* @__PURE__ */ new Map(), O: false, C: false }, this;
        }
        r3(n3, Set);
        var t3 = n3.prototype;
        return Object.defineProperty(t3, "size", { get: function() {
          return s2(this[H2]).size;
        } }), t3.has = function(n4) {
          var r4 = this[H2];
          return o3(r4), r4.i ? !!r4.i.has(n4) || !(!r4.p.has(n4) || !r4.i.has(r4.p.get(n4))) : r4.u.has(n4);
        }, t3.add = function(n4) {
          var r4 = this[H2];
          return o3(r4), this.has(n4) || (u3(r4), E2(r4), r4.i.add(n4)), this;
        }, t3.delete = function(n4) {
          if (!this.has(n4))
            return false;
          var r4 = this[H2];
          return o3(r4), u3(r4), E2(r4), r4.i.delete(n4) || !!r4.p.has(n4) && r4.i.delete(r4.p.get(n4));
        }, t3.clear = function() {
          var n4 = this[H2];
          o3(n4), s2(n4).size && (u3(n4), E2(n4), n4.i.clear());
        }, t3.values = function() {
          var n4 = this[H2];
          return o3(n4), u3(n4), n4.i.values();
        }, t3.entries = function() {
          var n4 = this[H2];
          return o3(n4), u3(n4), n4.i.entries();
        }, t3.keys = function() {
          return this.values();
        }, t3[L2] = function() {
          return this.values();
        }, t3.forEach = function(n4, r4) {
          for (var t4 = this.values(), e2 = t4.next(); !e2.done; )
            n4.call(r4, e2.value, e2.value, this), e2 = t4.next();
        }, n3;
      }();
      _2("MapSet", { K: function(n3, r4) {
        return new a3(n3, r4);
      }, $: function(n3, r4) {
        return new c3(n3, r4);
      } });
    }
    var C2;
    Object.defineProperty(exports, "__esModule", { value: true });
    var I2;
    var J = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x");
    var W2 = "undefined" != typeof Map;
    var X2 = "undefined" != typeof Set;
    var q2 = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect;
    var B2 = J ? Symbol.for("immer-nothing") : ((C2 = {})["immer-nothing"] = true, C2);
    var G2 = J ? Symbol.for("immer-draftable") : "__$immer_draftable";
    var H2 = J ? Symbol.for("immer-state") : "__$immer_state";
    var L2 = "undefined" != typeof Symbol && Symbol.iterator || "@@iterator";
    var Q2 = "" + Object.prototype.constructor;
    var T = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function(n3) {
      return Object.getOwnPropertyNames(n3).concat(Object.getOwnPropertySymbols(n3));
    } : Object.getOwnPropertyNames;
    var U2 = Object.getOwnPropertyDescriptors || function(n3) {
      var r3 = {};
      return T(n3).forEach(function(t3) {
        r3[t3] = Object.getOwnPropertyDescriptor(n3, t3);
      }), r3;
    };
    var V2 = {};
    var Y2 = { get: function(n3, r3) {
      if (r3 === H2)
        return n3;
      var e2 = s2(n3);
      if (!u2(e2, r3))
        return function(n4, r4, t3) {
          var e3, i4 = z2(r4, t3);
          return i4 ? "value" in i4 ? i4.value : null === (e3 = i4.get) || void 0 === e3 ? void 0 : e3.call(n4.k) : void 0;
        }(n3, e2, r3);
      var i3 = e2[r3];
      return n3.R || !t2(i3) ? i3 : i3 === A2(n3.u, r3) ? (R2(n3), n3.i[r3] = k2(n3.A.h, i3, n3)) : i3;
    }, has: function(n3, r3) {
      return r3 in s2(n3);
    }, ownKeys: function(n3) {
      return Reflect.ownKeys(s2(n3));
    }, set: function(n3, r3, t3) {
      var e2 = z2(s2(n3), r3);
      if (null == e2 ? void 0 : e2.set)
        return e2.set.call(n3.k, t3), true;
      if (!n3.g) {
        var i3 = A2(s2(n3), r3), o3 = null == i3 ? void 0 : i3[H2];
        if (o3 && o3.u === t3)
          return n3.i[r3] = t3, n3.N[r3] = false, true;
        if (a2(t3, i3) && (void 0 !== t3 || u2(n3.u, r3)))
          return true;
        R2(n3), E2(n3);
      }
      return n3.i[r3] === t3 && (void 0 !== t3 || r3 in n3.i) || Number.isNaN(t3) && Number.isNaN(n3.i[r3]) || (n3.i[r3] = t3, n3.N[r3] = true), true;
    }, deleteProperty: function(n3, r3) {
      return void 0 !== A2(n3.u, r3) || r3 in n3.u ? (n3.N[r3] = false, R2(n3), E2(n3)) : delete n3.N[r3], n3.i && delete n3.i[r3], true;
    }, getOwnPropertyDescriptor: function(n3, r3) {
      var t3 = s2(n3), e2 = Reflect.getOwnPropertyDescriptor(t3, r3);
      return e2 ? { writable: true, configurable: 1 !== n3.t || "length" !== r3, enumerable: e2.enumerable, value: t3[r3] } : e2;
    }, defineProperty: function() {
      n2(11);
    }, getPrototypeOf: function(n3) {
      return Object.getPrototypeOf(n3.u);
    }, setPrototypeOf: function() {
      n2(12);
    } };
    var Z2 = {};
    e(Y2, function(n3, r3) {
      Z2[n3] = function() {
        return arguments[0] = arguments[0][0], r3.apply(this, arguments);
      };
    }), Z2.deleteProperty = function(n3, r3) {
      return Z2.set.call(this, n3, r3, void 0);
    }, Z2.set = function(n3, r3, t3) {
      return Y2.set.call(this, n3[0], r3, t3, n3[0]);
    };
    var nn2 = function() {
      function e2(r3) {
        var e3 = this;
        this.S = q2, this.D = true, this.produce = function(r4, i4, u3) {
          if ("function" == typeof r4 && "function" != typeof i4) {
            var o3 = i4;
            i4 = r4;
            var f3 = e3;
            return function(n3) {
              var r5 = this;
              void 0 === n3 && (n3 = o3);
              for (var t3 = arguments.length, e4 = Array(t3 > 1 ? t3 - 1 : 0), u4 = 1; u4 < t3; u4++)
                e4[u4 - 1] = arguments[u4];
              return f3.produce(n3, function(n4) {
                var t4;
                return (t4 = i4).call.apply(t4, [r5, n4].concat(e4));
              });
            };
          }
          var a3;
          if ("function" != typeof i4 && n2(6), void 0 !== u3 && "function" != typeof u3 && n2(7), t2(r4)) {
            var c3 = x2(e3), v3 = k2(e3, r4, void 0), s3 = true;
            try {
              a3 = i4(v3), s3 = false;
            } finally {
              s3 ? j2(c3) : O2(c3);
            }
            return "undefined" != typeof Promise && a3 instanceof Promise ? a3.then(function(n3) {
              return m2(c3, u3), S2(n3, c3);
            }, function(n3) {
              throw j2(c3), n3;
            }) : (m2(c3, u3), S2(a3, c3));
          }
          if (!r4 || "object" != typeof r4) {
            if (void 0 === (a3 = i4(r4)) && (a3 = r4), a3 === B2 && (a3 = void 0), e3.D && l2(a3, true), u3) {
              var p3 = [], d3 = [];
              y2("Patches").M(r4, a3, p3, d3), u3(p3, d3);
            }
            return a3;
          }
          n2(21, r4);
        }, this.produceWithPatches = function(n3, r4) {
          if ("function" == typeof n3)
            return function(r5) {
              for (var t4 = arguments.length, i5 = Array(t4 > 1 ? t4 - 1 : 0), u4 = 1; u4 < t4; u4++)
                i5[u4 - 1] = arguments[u4];
              return e3.produceWithPatches(r5, function(r6) {
                return n3.apply(void 0, [r6].concat(i5));
              });
            };
          var t3, i4, u3 = e3.produce(n3, r4, function(n4, r5) {
            t3 = n4, i4 = r5;
          });
          return "undefined" != typeof Promise && u3 instanceof Promise ? u3.then(function(n4) {
            return [n4, t3, i4];
          }) : [u3, t3, i4];
        }, "boolean" == typeof (null == r3 ? void 0 : r3.useProxies) && this.setUseProxies(r3.useProxies), "boolean" == typeof (null == r3 ? void 0 : r3.autoFreeze) && this.setAutoFreeze(r3.autoFreeze);
      }
      var i3 = e2.prototype;
      return i3.createDraft = function(e3) {
        t2(e3) || n2(8), r2(e3) && (e3 = F(e3));
        var i4 = x2(this), u3 = k2(this, e3, void 0);
        return u3[H2].C = true, O2(i4), u3;
      }, i3.finishDraft = function(n3, r3) {
        var t3 = (n3 && n3[H2]).A;
        return m2(t3, r3), S2(void 0, t3);
      }, i3.setAutoFreeze = function(n3) {
        this.D = n3;
      }, i3.setUseProxies = function(r3) {
        r3 && !q2 && n2(20), this.S = r3;
      }, i3.applyPatches = function(n3, t3) {
        var e3;
        for (e3 = t3.length - 1; e3 >= 0; e3--) {
          var i4 = t3[e3];
          if (0 === i4.path.length && "replace" === i4.op) {
            n3 = i4.value;
            break;
          }
        }
        e3 > -1 && (t3 = t3.slice(e3 + 1));
        var u3 = y2("Patches").W;
        return r2(n3) ? u3(n3, t3) : this.produce(n3, function(n4) {
          return u3(n4, t3);
        });
      }, e2;
    }();
    var rn2 = new nn2();
    var tn2 = rn2.produce;
    var en2 = rn2.produceWithPatches.bind(rn2);
    var un2 = rn2.setAutoFreeze.bind(rn2);
    var on2 = rn2.setUseProxies.bind(rn2);
    var fn2 = rn2.applyPatches.bind(rn2);
    var an2 = rn2.createDraft.bind(rn2);
    var cn2 = rn2.finishDraft.bind(rn2);
    exports.Immer = nn2, exports.applyPatches = fn2, exports.castDraft = function(n3) {
      return n3;
    }, exports.castImmutable = function(n3) {
      return n3;
    }, exports.createDraft = an2, exports.current = F, exports.default = tn2, exports.enableAllPlugins = function() {
      D2(), $(), K();
    }, exports.enableES5 = D2, exports.enableMapSet = $, exports.enablePatches = K, exports.finishDraft = cn2, exports.freeze = l2, exports.immerable = G2, exports.isDraft = r2, exports.isDraftable = t2, exports.nothing = B2, exports.original = function(t3) {
      return r2(t3) || n2(23, t3), t3[H2].u;
    }, exports.produce = tn2, exports.produceWithPatches = en2, exports.setAutoFreeze = un2, exports.setUseProxies = on2;
  }
});

// node_modules/.pnpm/immer@9.0.21/node_modules/immer/dist/immer.cjs.development.js
var require_immer_cjs_development = __commonJS({
  "node_modules/.pnpm/immer@9.0.21/node_modules/immer/dist/immer.cjs.development.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var _ref;
    var hasSymbol = typeof Symbol !== "undefined" && typeof /* @__PURE__ */ Symbol("x") === "symbol";
    var hasMap = typeof Map !== "undefined";
    var hasSet = typeof Set !== "undefined";
    var hasProxies = typeof Proxy !== "undefined" && typeof Proxy.revocable !== "undefined" && typeof Reflect !== "undefined";
    var NOTHING = hasSymbol ? /* @__PURE__ */ Symbol.for("immer-nothing") : (_ref = {}, _ref["immer-nothing"] = true, _ref);
    var DRAFTABLE = hasSymbol ? /* @__PURE__ */ Symbol.for("immer-draftable") : "__$immer_draftable";
    var DRAFT_STATE = hasSymbol ? /* @__PURE__ */ Symbol.for("immer-state") : "__$immer_state";
    var iteratorSymbol = typeof Symbol != "undefined" && Symbol.iterator || "@@iterator";
    var errors = {
      0: "Illegal state",
      1: "Immer drafts cannot have computed properties",
      2: "This object has been frozen and should not be mutated",
      3: function _2(data) {
        return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + data;
      },
      4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
      5: "Immer forbids circular references",
      6: "The first or second argument to `produce` must be a function",
      7: "The third argument to `produce` must be a function or undefined",
      8: "First argument to `createDraft` must be a plain object, an array, or an immerable object",
      9: "First argument to `finishDraft` must be a draft returned by `createDraft`",
      10: "The given draft is already finalized",
      11: "Object.defineProperty() cannot be used on an Immer draft",
      12: "Object.setPrototypeOf() cannot be used on an Immer draft",
      13: "Immer only supports deleting array indices",
      14: "Immer only supports setting array indices and the 'length' property",
      15: function _2(path) {
        return "Cannot apply patch, path doesn't resolve: " + path;
      },
      16: 'Sets cannot have "replace" patches.',
      17: function _2(op) {
        return "Unsupported patch operation: " + op;
      },
      18: function _2(plugin) {
        return "The plugin for '" + plugin + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + plugin + "()` when initializing your application.";
      },
      20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",
      21: function _2(thing) {
        return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" + thing + "'";
      },
      22: function _2(thing) {
        return "'current' expects a draft, got: " + thing;
      },
      23: function _2(thing) {
        return "'original' expects a draft, got: " + thing;
      },
      24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed"
    };
    function die(error) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      {
        var e = errors[error];
        var msg = !e ? "unknown error nr: " + error : typeof e === "function" ? e.apply(null, args) : e;
        throw new Error("[Immer] " + msg);
      }
    }
    function isDraft(value) {
      return !!value && !!value[DRAFT_STATE];
    }
    function isDraftable(value) {
      var _value$constructor;
      if (!value)
        return false;
      return isPlainObject(value) || Array.isArray(value) || !!value[DRAFTABLE] || !!((_value$constructor = value.constructor) === null || _value$constructor === void 0 ? void 0 : _value$constructor[DRAFTABLE]) || isMap(value) || isSet(value);
    }
    var objectCtorString = /* @__PURE__ */ Object.prototype.constructor.toString();
    function isPlainObject(value) {
      if (!value || typeof value !== "object")
        return false;
      var proto = Object.getPrototypeOf(value);
      if (proto === null) {
        return true;
      }
      var Ctor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
      if (Ctor === Object)
        return true;
      return typeof Ctor == "function" && Function.toString.call(Ctor) === objectCtorString;
    }
    function original(value) {
      if (!isDraft(value))
        die(23, value);
      return value[DRAFT_STATE].base_;
    }
    var ownKeys = typeof Reflect !== "undefined" && Reflect.ownKeys ? Reflect.ownKeys : typeof Object.getOwnPropertySymbols !== "undefined" ? function(obj) {
      return Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertySymbols(obj));
    } : (
      /* istanbul ignore next */
      Object.getOwnPropertyNames
    );
    var getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors || function getOwnPropertyDescriptors2(target) {
      var res = {};
      ownKeys(target).forEach(function(key) {
        res[key] = Object.getOwnPropertyDescriptor(target, key);
      });
      return res;
    };
    function each(obj, iter, enumerableOnly) {
      if (enumerableOnly === void 0) {
        enumerableOnly = false;
      }
      if (getArchtype(obj) === 0) {
        (enumerableOnly ? Object.keys : ownKeys)(obj).forEach(function(key) {
          if (!enumerableOnly || typeof key !== "symbol")
            iter(key, obj[key], obj);
        });
      } else {
        obj.forEach(function(entry, index) {
          return iter(index, entry, obj);
        });
      }
    }
    function getArchtype(thing) {
      var state = thing[DRAFT_STATE];
      return state ? state.type_ > 3 ? state.type_ - 4 : state.type_ : Array.isArray(thing) ? 1 : isMap(thing) ? 2 : isSet(thing) ? 3 : 0;
    }
    function has(thing, prop) {
      return getArchtype(thing) === 2 ? thing.has(prop) : Object.prototype.hasOwnProperty.call(thing, prop);
    }
    function get(thing, prop) {
      return getArchtype(thing) === 2 ? thing.get(prop) : thing[prop];
    }
    function set(thing, propOrOldValue, value) {
      var t2 = getArchtype(thing);
      if (t2 === 2)
        thing.set(propOrOldValue, value);
      else if (t2 === 3) {
        thing.add(value);
      } else
        thing[propOrOldValue] = value;
    }
    function is(x2, y2) {
      if (x2 === y2) {
        return x2 !== 0 || 1 / x2 === 1 / y2;
      } else {
        return x2 !== x2 && y2 !== y2;
      }
    }
    function isMap(target) {
      return hasMap && target instanceof Map;
    }
    function isSet(target) {
      return hasSet && target instanceof Set;
    }
    function latest(state) {
      return state.copy_ || state.base_;
    }
    function shallowCopy(base) {
      if (Array.isArray(base))
        return Array.prototype.slice.call(base);
      var descriptors = getOwnPropertyDescriptors(base);
      delete descriptors[DRAFT_STATE];
      var keys = ownKeys(descriptors);
      for (var i2 = 0; i2 < keys.length; i2++) {
        var key = keys[i2];
        var desc = descriptors[key];
        if (desc.writable === false) {
          desc.writable = true;
          desc.configurable = true;
        }
        if (desc.get || desc.set)
          descriptors[key] = {
            configurable: true,
            writable: true,
            enumerable: desc.enumerable,
            value: base[key]
          };
      }
      return Object.create(Object.getPrototypeOf(base), descriptors);
    }
    function freeze(obj, deep) {
      if (deep === void 0) {
        deep = false;
      }
      if (isFrozen(obj) || isDraft(obj) || !isDraftable(obj))
        return obj;
      if (getArchtype(obj) > 1) {
        obj.set = obj.add = obj.clear = obj.delete = dontMutateFrozenCollections;
      }
      Object.freeze(obj);
      if (deep)
        each(obj, function(key, value) {
          return freeze(value, true);
        }, true);
      return obj;
    }
    function dontMutateFrozenCollections() {
      die(2);
    }
    function isFrozen(obj) {
      if (obj == null || typeof obj !== "object")
        return true;
      return Object.isFrozen(obj);
    }
    var plugins = {};
    function getPlugin(pluginKey) {
      var plugin = plugins[pluginKey];
      if (!plugin) {
        die(18, pluginKey);
      }
      return plugin;
    }
    function loadPlugin(pluginKey, implementation) {
      if (!plugins[pluginKey])
        plugins[pluginKey] = implementation;
    }
    var currentScope;
    function getCurrentScope() {
      if (!currentScope)
        die(0);
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
      var state = draft[DRAFT_STATE];
      if (state.type_ === 0 || state.type_ === 1)
        state.revoke_();
      else
        state.revoked_ = true;
    }
    function processResult(result, scope) {
      scope.unfinalizedDrafts_ = scope.drafts_.length;
      var baseDraft = scope.drafts_[0];
      var isReplaced = result !== void 0 && result !== baseDraft;
      if (!scope.immer_.useProxies_)
        getPlugin("ES5").willFinalizeES5_(scope, result, isReplaced);
      if (isReplaced) {
        if (baseDraft[DRAFT_STATE].modified_) {
          revokeScope(scope);
          die(4);
        }
        if (isDraftable(result)) {
          result = finalize(scope, result);
          if (!scope.parent_)
            maybeFreeze(scope, result);
        }
        if (scope.patches_) {
          getPlugin("Patches").generateReplacementPatches_(baseDraft[DRAFT_STATE].base_, result, scope.patches_, scope.inversePatches_);
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
      var state = value[DRAFT_STATE];
      if (!state) {
        each(
          value,
          function(key, childValue) {
            return finalizeProperty(rootScope, state, value, key, childValue, path);
          },
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
        var result = (
          // For ES5, create a good copy from the draft first, with added keys and without deleted keys.
          state.type_ === 4 || state.type_ === 5 ? state.copy_ = shallowCopy(state.draft_) : state.copy_
        );
        var resultEach = result;
        var isSet2 = false;
        if (state.type_ === 3) {
          resultEach = new Set(result);
          result.clear();
          isSet2 = true;
        }
        each(resultEach, function(key, childValue) {
          return finalizeProperty(rootScope, state, result, key, childValue, path, isSet2);
        });
        maybeFreeze(rootScope, result, false);
        if (path && rootScope.patches_) {
          getPlugin("Patches").generatePatches_(state, path, rootScope.patches_, rootScope.inversePatches_);
        }
      }
      return state.copy_;
    }
    function finalizeProperty(rootScope, parentState, targetObject, prop, childValue, rootPath, targetIsSet) {
      if (childValue === targetObject)
        die(5);
      if (isDraft(childValue)) {
        var path = rootPath && parentState && parentState.type_ !== 3 && // Set objects are atomic since they have no keys.
        !has(parentState.assigned_, prop) ? rootPath.concat(prop) : void 0;
        var res = finalize(rootScope, childValue, path);
        set(targetObject, prop, res);
        if (isDraft(res)) {
          rootScope.canAutoFreeze_ = false;
        } else
          return;
      } else if (targetIsSet) {
        targetObject.add(childValue);
      }
      if (isDraftable(childValue) && !isFrozen(childValue)) {
        if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1) {
          return;
        }
        finalize(rootScope, childValue);
        if (!parentState || !parentState.scope_.parent_)
          maybeFreeze(rootScope, childValue);
      }
    }
    function maybeFreeze(scope, value, deep) {
      if (deep === void 0) {
        deep = false;
      }
      if (!scope.parent_ && scope.immer_.autoFreeze_ && scope.canAutoFreeze_) {
        freeze(value, deep);
      }
    }
    function createProxyProxy(base, parent) {
      var isArray = Array.isArray(base);
      var state = {
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
        // The base copy with any updated values.
        copy_: null,
        // Called by the `produce` function.
        revoke_: null,
        isManual_: false
      };
      var target = state;
      var traps = objectTraps;
      if (isArray) {
        target = [state];
        traps = arrayTraps;
      }
      var _Proxy$revocable = Proxy.revocable(target, traps), revoke = _Proxy$revocable.revoke, proxy = _Proxy$revocable.proxy;
      state.draft_ = proxy;
      state.revoke_ = revoke;
      return proxy;
    }
    var objectTraps = {
      get: function get2(state, prop) {
        if (prop === DRAFT_STATE)
          return state;
        var source = latest(state);
        if (!has(source, prop)) {
          return readPropFromProto(state, source, prop);
        }
        var value = source[prop];
        if (state.finalized_ || !isDraftable(value)) {
          return value;
        }
        if (value === peek(state.base_, prop)) {
          prepareCopy(state);
          return state.copy_[prop] = createProxy(state.scope_.immer_, value, state);
        }
        return value;
      },
      has: function has2(state, prop) {
        return prop in latest(state);
      },
      ownKeys: function ownKeys2(state) {
        return Reflect.ownKeys(latest(state));
      },
      set: function set2(state, prop, value) {
        var desc = getDescriptorFromProto(latest(state), prop);
        if (desc === null || desc === void 0 ? void 0 : desc.set) {
          desc.set.call(state.draft_, value);
          return true;
        }
        if (!state.modified_) {
          var current2 = peek(latest(state), prop);
          var currentState = current2 === null || current2 === void 0 ? void 0 : current2[DRAFT_STATE];
          if (currentState && currentState.base_ === value) {
            state.copy_[prop] = value;
            state.assigned_[prop] = false;
            return true;
          }
          if (is(value, current2) && (value !== void 0 || has(state.base_, prop)))
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
      deleteProperty: function deleteProperty(state, prop) {
        if (peek(state.base_, prop) !== void 0 || prop in state.base_) {
          state.assigned_[prop] = false;
          prepareCopy(state);
          markChanged(state);
        } else {
          delete state.assigned_[prop];
        }
        if (state.copy_)
          delete state.copy_[prop];
        return true;
      },
      // Note: We never coerce `desc.value` into an Immer draft, because we can't make
      // the same guarantee in ES5 mode.
      getOwnPropertyDescriptor: function getOwnPropertyDescriptor(state, prop) {
        var owner = latest(state);
        var desc = Reflect.getOwnPropertyDescriptor(owner, prop);
        if (!desc)
          return desc;
        return {
          writable: true,
          configurable: state.type_ !== 1 || prop !== "length",
          enumerable: desc.enumerable,
          value: owner[prop]
        };
      },
      defineProperty: function defineProperty() {
        die(11);
      },
      getPrototypeOf: function getPrototypeOf(state) {
        return Object.getPrototypeOf(state.base_);
      },
      setPrototypeOf: function setPrototypeOf() {
        die(12);
      }
    };
    var arrayTraps = {};
    each(objectTraps, function(key, fn2) {
      arrayTraps[key] = function() {
        arguments[0] = arguments[0][0];
        return fn2.apply(this, arguments);
      };
    });
    arrayTraps.deleteProperty = function(state, prop) {
      if (isNaN(parseInt(prop)))
        die(13);
      return arrayTraps.set.call(this, state, prop, void 0);
    };
    arrayTraps.set = function(state, prop, value) {
      if (prop !== "length" && isNaN(parseInt(prop)))
        die(14);
      return objectTraps.set.call(this, state[0], prop, value, state[0]);
    };
    function peek(draft, prop) {
      var state = draft[DRAFT_STATE];
      var source = state ? latest(state) : draft;
      return source[prop];
    }
    function readPropFromProto(state, source, prop) {
      var _desc$get;
      var desc = getDescriptorFromProto(source, prop);
      return desc ? "value" in desc ? desc.value : (
        // This is a very special case, if the prop is a getter defined by the
        // prototype, we should invoke it with the draft as context!
        (_desc$get = desc.get) === null || _desc$get === void 0 ? void 0 : _desc$get.call(state.draft_)
      ) : void 0;
    }
    function getDescriptorFromProto(source, prop) {
      if (!(prop in source))
        return void 0;
      var proto = Object.getPrototypeOf(source);
      while (proto) {
        var desc = Object.getOwnPropertyDescriptor(proto, prop);
        if (desc)
          return desc;
        proto = Object.getPrototypeOf(proto);
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
        state.copy_ = shallowCopy(state.base_);
      }
    }
    var Immer = /* @__PURE__ */ function() {
      function Immer2(config) {
        var _this = this;
        this.useProxies_ = hasProxies;
        this.autoFreeze_ = true;
        this.produce = function(base, recipe, patchListener) {
          if (typeof base === "function" && typeof recipe !== "function") {
            var defaultBase = recipe;
            recipe = base;
            var self2 = _this;
            return function curriedProduce(base2) {
              var _this2 = this;
              if (base2 === void 0) {
                base2 = defaultBase;
              }
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
              return self2.produce(base2, function(draft) {
                var _recipe;
                return (_recipe = recipe).call.apply(_recipe, [_this2, draft].concat(args));
              });
            };
          }
          if (typeof recipe !== "function")
            die(6);
          if (patchListener !== void 0 && typeof patchListener !== "function")
            die(7);
          var result;
          if (isDraftable(base)) {
            var scope = enterScope(_this);
            var proxy = createProxy(_this, base, void 0);
            var hasError = true;
            try {
              result = recipe(proxy);
              hasError = false;
            } finally {
              if (hasError)
                revokeScope(scope);
              else
                leaveScope(scope);
            }
            if (typeof Promise !== "undefined" && result instanceof Promise) {
              return result.then(function(result2) {
                usePatchesInScope(scope, patchListener);
                return processResult(result2, scope);
              }, function(error) {
                revokeScope(scope);
                throw error;
              });
            }
            usePatchesInScope(scope, patchListener);
            return processResult(result, scope);
          } else if (!base || typeof base !== "object") {
            result = recipe(base);
            if (result === void 0)
              result = base;
            if (result === NOTHING)
              result = void 0;
            if (_this.autoFreeze_)
              freeze(result, true);
            if (patchListener) {
              var p2 = [];
              var ip = [];
              getPlugin("Patches").generateReplacementPatches_(base, result, p2, ip);
              patchListener(p2, ip);
            }
            return result;
          } else
            die(21, base);
        };
        this.produceWithPatches = function(base, recipe) {
          if (typeof base === "function") {
            return function(state) {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              return _this.produceWithPatches(state, function(draft) {
                return base.apply(void 0, [draft].concat(args));
              });
            };
          }
          var patches, inversePatches;
          var result = _this.produce(base, recipe, function(p2, ip) {
            patches = p2;
            inversePatches = ip;
          });
          if (typeof Promise !== "undefined" && result instanceof Promise) {
            return result.then(function(nextState) {
              return [nextState, patches, inversePatches];
            });
          }
          return [result, patches, inversePatches];
        };
        if (typeof (config === null || config === void 0 ? void 0 : config.useProxies) === "boolean")
          this.setUseProxies(config.useProxies);
        if (typeof (config === null || config === void 0 ? void 0 : config.autoFreeze) === "boolean")
          this.setAutoFreeze(config.autoFreeze);
      }
      var _proto = Immer2.prototype;
      _proto.createDraft = function createDraft2(base) {
        if (!isDraftable(base))
          die(8);
        if (isDraft(base))
          base = current(base);
        var scope = enterScope(this);
        var proxy = createProxy(this, base, void 0);
        proxy[DRAFT_STATE].isManual_ = true;
        leaveScope(scope);
        return proxy;
      };
      _proto.finishDraft = function finishDraft2(draft, patchListener) {
        var state = draft && draft[DRAFT_STATE];
        {
          if (!state || !state.isManual_)
            die(9);
          if (state.finalized_)
            die(10);
        }
        var scope = state.scope_;
        usePatchesInScope(scope, patchListener);
        return processResult(void 0, scope);
      };
      _proto.setAutoFreeze = function setAutoFreeze2(value) {
        this.autoFreeze_ = value;
      };
      _proto.setUseProxies = function setUseProxies2(value) {
        if (value && !hasProxies) {
          die(20);
        }
        this.useProxies_ = value;
      };
      _proto.applyPatches = function applyPatches2(base, patches) {
        var i2;
        for (i2 = patches.length - 1; i2 >= 0; i2--) {
          var patch = patches[i2];
          if (patch.path.length === 0 && patch.op === "replace") {
            base = patch.value;
            break;
          }
        }
        if (i2 > -1) {
          patches = patches.slice(i2 + 1);
        }
        var applyPatchesImpl = getPlugin("Patches").applyPatches_;
        if (isDraft(base)) {
          return applyPatchesImpl(base, patches);
        }
        return this.produce(base, function(draft) {
          return applyPatchesImpl(draft, patches);
        });
      };
      return Immer2;
    }();
    function createProxy(immer2, value, parent) {
      var draft = isMap(value) ? getPlugin("MapSet").proxyMap_(value, parent) : isSet(value) ? getPlugin("MapSet").proxySet_(value, parent) : immer2.useProxies_ ? createProxyProxy(value, parent) : getPlugin("ES5").createES5Proxy_(value, parent);
      var scope = parent ? parent.scope_ : getCurrentScope();
      scope.drafts_.push(draft);
      return draft;
    }
    function current(value) {
      if (!isDraft(value))
        die(22, value);
      return currentImpl(value);
    }
    function currentImpl(value) {
      if (!isDraftable(value))
        return value;
      var state = value[DRAFT_STATE];
      var copy;
      var archType = getArchtype(value);
      if (state) {
        if (!state.modified_ && (state.type_ < 4 || !getPlugin("ES5").hasChanges_(state)))
          return state.base_;
        state.finalized_ = true;
        copy = copyHelper(value, archType);
        state.finalized_ = false;
      } else {
        copy = copyHelper(value, archType);
      }
      each(copy, function(key, childValue) {
        if (state && get(state.base_, key) === childValue)
          return;
        set(copy, key, currentImpl(childValue));
      });
      return archType === 3 ? new Set(copy) : copy;
    }
    function copyHelper(value, archType) {
      switch (archType) {
        case 2:
          return new Map(value);
        case 3:
          return Array.from(value);
      }
      return shallowCopy(value);
    }
    function enableES5() {
      function willFinalizeES5_(scope, result, isReplaced) {
        if (!isReplaced) {
          if (scope.patches_) {
            markChangesRecursively(scope.drafts_[0]);
          }
          markChangesSweep(scope.drafts_);
        } else if (isDraft(result) && result[DRAFT_STATE].scope_ === scope) {
          markChangesSweep(scope.drafts_);
        }
      }
      function createES5Draft(isArray, base) {
        if (isArray) {
          var draft = new Array(base.length);
          for (var i2 = 0; i2 < base.length; i2++) {
            Object.defineProperty(draft, "" + i2, proxyProperty(i2, true));
          }
          return draft;
        } else {
          var _descriptors = getOwnPropertyDescriptors(base);
          delete _descriptors[DRAFT_STATE];
          var keys = ownKeys(_descriptors);
          for (var _i = 0; _i < keys.length; _i++) {
            var key = keys[_i];
            _descriptors[key] = proxyProperty(key, isArray || !!_descriptors[key].enumerable);
          }
          return Object.create(Object.getPrototypeOf(base), _descriptors);
        }
      }
      function createES5Proxy_(base, parent) {
        var isArray = Array.isArray(base);
        var draft = createES5Draft(isArray, base);
        var state = {
          type_: isArray ? 5 : 4,
          scope_: parent ? parent.scope_ : getCurrentScope(),
          modified_: false,
          finalized_: false,
          assigned_: {},
          parent_: parent,
          // base is the object we are drafting
          base_: base,
          // draft is the draft object itself, that traps all reads and reads from either the base (if unmodified) or copy (if modified)
          draft_: draft,
          copy_: null,
          revoked_: false,
          isManual_: false
        };
        Object.defineProperty(draft, DRAFT_STATE, {
          value: state,
          // enumerable: false <- the default
          writable: true
        });
        return draft;
      }
      var descriptors = {};
      function proxyProperty(prop, enumerable) {
        var desc = descriptors[prop];
        if (desc) {
          desc.enumerable = enumerable;
        } else {
          descriptors[prop] = desc = {
            configurable: true,
            enumerable,
            get: function get2() {
              var state = this[DRAFT_STATE];
              assertUnrevoked(state);
              return objectTraps.get(state, prop);
            },
            set: function set2(value) {
              var state = this[DRAFT_STATE];
              assertUnrevoked(state);
              objectTraps.set(state, prop, value);
            }
          };
        }
        return desc;
      }
      function markChangesSweep(drafts) {
        for (var i2 = drafts.length - 1; i2 >= 0; i2--) {
          var state = drafts[i2][DRAFT_STATE];
          if (!state.modified_) {
            switch (state.type_) {
              case 5:
                if (hasArrayChanges(state))
                  markChanged(state);
                break;
              case 4:
                if (hasObjectChanges(state))
                  markChanged(state);
                break;
            }
          }
        }
      }
      function markChangesRecursively(object) {
        if (!object || typeof object !== "object")
          return;
        var state = object[DRAFT_STATE];
        if (!state)
          return;
        var base_ = state.base_, draft_ = state.draft_, assigned_ = state.assigned_, type_ = state.type_;
        if (type_ === 4) {
          each(draft_, function(key) {
            if (key === DRAFT_STATE)
              return;
            if (base_[key] === void 0 && !has(base_, key)) {
              assigned_[key] = true;
              markChanged(state);
            } else if (!assigned_[key]) {
              markChangesRecursively(draft_[key]);
            }
          });
          each(base_, function(key) {
            if (draft_[key] === void 0 && !has(draft_, key)) {
              assigned_[key] = false;
              markChanged(state);
            }
          });
        } else if (type_ === 5) {
          if (hasArrayChanges(state)) {
            markChanged(state);
            assigned_.length = true;
          }
          if (draft_.length < base_.length) {
            for (var i2 = draft_.length; i2 < base_.length; i2++) {
              assigned_[i2] = false;
            }
          } else {
            for (var _i2 = base_.length; _i2 < draft_.length; _i2++) {
              assigned_[_i2] = true;
            }
          }
          var min = Math.min(draft_.length, base_.length);
          for (var _i3 = 0; _i3 < min; _i3++) {
            if (!draft_.hasOwnProperty(_i3)) {
              assigned_[_i3] = true;
            }
            if (assigned_[_i3] === void 0)
              markChangesRecursively(draft_[_i3]);
          }
        }
      }
      function hasObjectChanges(state) {
        var base_ = state.base_, draft_ = state.draft_;
        var keys = ownKeys(draft_);
        for (var i2 = keys.length - 1; i2 >= 0; i2--) {
          var key = keys[i2];
          if (key === DRAFT_STATE)
            continue;
          var baseValue = base_[key];
          if (baseValue === void 0 && !has(base_, key)) {
            return true;
          } else {
            var value = draft_[key];
            var _state = value && value[DRAFT_STATE];
            if (_state ? _state.base_ !== baseValue : !is(value, baseValue)) {
              return true;
            }
          }
        }
        var baseIsDraft = !!base_[DRAFT_STATE];
        return keys.length !== ownKeys(base_).length + (baseIsDraft ? 0 : 1);
      }
      function hasArrayChanges(state) {
        var draft_ = state.draft_;
        if (draft_.length !== state.base_.length)
          return true;
        var descriptor = Object.getOwnPropertyDescriptor(draft_, draft_.length - 1);
        if (descriptor && !descriptor.get)
          return true;
        for (var i2 = 0; i2 < draft_.length; i2++) {
          if (!draft_.hasOwnProperty(i2))
            return true;
        }
        return false;
      }
      function hasChanges_(state) {
        return state.type_ === 4 ? hasObjectChanges(state) : hasArrayChanges(state);
      }
      function assertUnrevoked(state) {
        if (state.revoked_)
          die(3, JSON.stringify(latest(state)));
      }
      loadPlugin("ES5", {
        createES5Proxy_,
        willFinalizeES5_,
        hasChanges_
      });
    }
    function enablePatches() {
      var REPLACE = "replace";
      var ADD = "add";
      var REMOVE = "remove";
      function generatePatches_(state, basePath, patches, inversePatches) {
        switch (state.type_) {
          case 0:
          case 4:
          case 2:
            return generatePatchesFromAssigned(state, basePath, patches, inversePatches);
          case 5:
          case 1:
            return generateArrayPatches(state, basePath, patches, inversePatches);
          case 3:
            return generateSetPatches(state, basePath, patches, inversePatches);
        }
      }
      function generateArrayPatches(state, basePath, patches, inversePatches) {
        var base_ = state.base_, assigned_ = state.assigned_;
        var copy_ = state.copy_;
        if (copy_.length < base_.length) {
          var _ref2 = [copy_, base_];
          base_ = _ref2[0];
          copy_ = _ref2[1];
          var _ref22 = [inversePatches, patches];
          patches = _ref22[0];
          inversePatches = _ref22[1];
        }
        for (var i2 = 0; i2 < base_.length; i2++) {
          if (assigned_[i2] && copy_[i2] !== base_[i2]) {
            var path = basePath.concat([i2]);
            patches.push({
              op: REPLACE,
              path,
              // Need to maybe clone it, as it can in fact be the original value
              // due to the base/copy inversion at the start of this function
              value: clonePatchValueIfNeeded(copy_[i2])
            });
            inversePatches.push({
              op: REPLACE,
              path,
              value: clonePatchValueIfNeeded(base_[i2])
            });
          }
        }
        for (var _i = base_.length; _i < copy_.length; _i++) {
          var _path = basePath.concat([_i]);
          patches.push({
            op: ADD,
            path: _path,
            // Need to maybe clone it, as it can in fact be the original value
            // due to the base/copy inversion at the start of this function
            value: clonePatchValueIfNeeded(copy_[_i])
          });
        }
        if (base_.length < copy_.length) {
          inversePatches.push({
            op: REPLACE,
            path: basePath.concat(["length"]),
            value: base_.length
          });
        }
      }
      function generatePatchesFromAssigned(state, basePath, patches, inversePatches) {
        var base_ = state.base_, copy_ = state.copy_;
        each(state.assigned_, function(key, assignedValue) {
          var origValue = get(base_, key);
          var value = get(copy_, key);
          var op = !assignedValue ? REMOVE : has(base_, key) ? REPLACE : ADD;
          if (origValue === value && op === REPLACE)
            return;
          var path = basePath.concat(key);
          patches.push(op === REMOVE ? {
            op,
            path
          } : {
            op,
            path,
            value
          });
          inversePatches.push(op === ADD ? {
            op: REMOVE,
            path
          } : op === REMOVE ? {
            op: ADD,
            path,
            value: clonePatchValueIfNeeded(origValue)
          } : {
            op: REPLACE,
            path,
            value: clonePatchValueIfNeeded(origValue)
          });
        });
      }
      function generateSetPatches(state, basePath, patches, inversePatches) {
        var base_ = state.base_, copy_ = state.copy_;
        var i2 = 0;
        base_.forEach(function(value) {
          if (!copy_.has(value)) {
            var path = basePath.concat([i2]);
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
          i2++;
        });
        i2 = 0;
        copy_.forEach(function(value) {
          if (!base_.has(value)) {
            var path = basePath.concat([i2]);
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
          i2++;
        });
      }
      function generateReplacementPatches_(baseValue, replacement, patches, inversePatches) {
        patches.push({
          op: REPLACE,
          path: [],
          value: replacement === NOTHING ? void 0 : replacement
        });
        inversePatches.push({
          op: REPLACE,
          path: [],
          value: baseValue
        });
      }
      function applyPatches_(draft, patches) {
        patches.forEach(function(patch) {
          var path = patch.path, op = patch.op;
          var base = draft;
          for (var i2 = 0; i2 < path.length - 1; i2++) {
            var parentType = getArchtype(base);
            var p2 = path[i2];
            if (typeof p2 !== "string" && typeof p2 !== "number") {
              p2 = "" + p2;
            }
            if ((parentType === 0 || parentType === 1) && (p2 === "__proto__" || p2 === "constructor"))
              die(24);
            if (typeof base === "function" && p2 === "prototype")
              die(24);
            base = get(base, p2);
            if (typeof base !== "object")
              die(15, path.join("/"));
          }
          var type = getArchtype(base);
          var value = deepClonePatchValue(patch.value);
          var key = path[path.length - 1];
          switch (op) {
            case REPLACE:
              switch (type) {
                case 2:
                  return base.set(key, value);
                case 3:
                  die(16);
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
              die(17, op);
          }
        });
        return draft;
      }
      function deepClonePatchValue(obj) {
        if (!isDraftable(obj))
          return obj;
        if (Array.isArray(obj))
          return obj.map(deepClonePatchValue);
        if (isMap(obj))
          return new Map(Array.from(obj.entries()).map(function(_ref3) {
            var k2 = _ref3[0], v2 = _ref3[1];
            return [k2, deepClonePatchValue(v2)];
          }));
        if (isSet(obj))
          return new Set(Array.from(obj).map(deepClonePatchValue));
        var cloned = Object.create(Object.getPrototypeOf(obj));
        for (var key in obj) {
          cloned[key] = deepClonePatchValue(obj[key]);
        }
        if (has(obj, DRAFTABLE))
          cloned[DRAFTABLE] = obj[DRAFTABLE];
        return cloned;
      }
      function clonePatchValueIfNeeded(obj) {
        if (isDraft(obj)) {
          return deepClonePatchValue(obj);
        } else
          return obj;
      }
      loadPlugin("Patches", {
        applyPatches_,
        generatePatches_,
        generateReplacementPatches_
      });
    }
    function enableMapSet() {
      var _extendStatics = function extendStatics(d2, b2) {
        _extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d3, b3) {
          d3.__proto__ = b3;
        } || function(d3, b3) {
          for (var p2 in b3) {
            if (b3.hasOwnProperty(p2))
              d3[p2] = b3[p2];
          }
        };
        return _extendStatics(d2, b2);
      };
      function __extends(d2, b2) {
        _extendStatics(d2, b2);
        function __() {
          this.constructor = d2;
        }
        d2.prototype = // @ts-ignore
        (__.prototype = b2.prototype, new __());
      }
      var DraftMap = function(_super) {
        __extends(DraftMap2, _super);
        function DraftMap2(target, parent) {
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
          return this;
        }
        var p2 = DraftMap2.prototype;
        Object.defineProperty(p2, "size", {
          get: function get2() {
            return latest(this[DRAFT_STATE]).size;
          }
          // enumerable: false,
          // configurable: true
        });
        p2.has = function(key) {
          return latest(this[DRAFT_STATE]).has(key);
        };
        p2.set = function(key, value) {
          var state = this[DRAFT_STATE];
          assertUnrevoked(state);
          if (!latest(state).has(key) || latest(state).get(key) !== value) {
            prepareMapCopy(state);
            markChanged(state);
            state.assigned_.set(key, true);
            state.copy_.set(key, value);
            state.assigned_.set(key, true);
          }
          return this;
        };
        p2.delete = function(key) {
          if (!this.has(key)) {
            return false;
          }
          var state = this[DRAFT_STATE];
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
        };
        p2.clear = function() {
          var state = this[DRAFT_STATE];
          assertUnrevoked(state);
          if (latest(state).size) {
            prepareMapCopy(state);
            markChanged(state);
            state.assigned_ = /* @__PURE__ */ new Map();
            each(state.base_, function(key) {
              state.assigned_.set(key, false);
            });
            state.copy_.clear();
          }
        };
        p2.forEach = function(cb, thisArg) {
          var _this = this;
          var state = this[DRAFT_STATE];
          latest(state).forEach(function(_value, key, _map) {
            cb.call(thisArg, _this.get(key), key, _this);
          });
        };
        p2.get = function(key) {
          var state = this[DRAFT_STATE];
          assertUnrevoked(state);
          var value = latest(state).get(key);
          if (state.finalized_ || !isDraftable(value)) {
            return value;
          }
          if (value !== state.base_.get(key)) {
            return value;
          }
          var draft = createProxy(state.scope_.immer_, value, state);
          prepareMapCopy(state);
          state.copy_.set(key, draft);
          return draft;
        };
        p2.keys = function() {
          return latest(this[DRAFT_STATE]).keys();
        };
        p2.values = function() {
          var _this2 = this, _ref2;
          var iterator = this.keys();
          return _ref2 = {}, _ref2[iteratorSymbol] = function() {
            return _this2.values();
          }, _ref2.next = function next() {
            var r2 = iterator.next();
            if (r2.done)
              return r2;
            var value = _this2.get(r2.value);
            return {
              done: false,
              value
            };
          }, _ref2;
        };
        p2.entries = function() {
          var _this3 = this, _ref2;
          var iterator = this.keys();
          return _ref2 = {}, _ref2[iteratorSymbol] = function() {
            return _this3.entries();
          }, _ref2.next = function next() {
            var r2 = iterator.next();
            if (r2.done)
              return r2;
            var value = _this3.get(r2.value);
            return {
              done: false,
              value: [r2.value, value]
            };
          }, _ref2;
        };
        p2[iteratorSymbol] = function() {
          return this.entries();
        };
        return DraftMap2;
      }(Map);
      function proxyMap_(target, parent) {
        return new DraftMap(target, parent);
      }
      function prepareMapCopy(state) {
        if (!state.copy_) {
          state.assigned_ = /* @__PURE__ */ new Map();
          state.copy_ = new Map(state.base_);
        }
      }
      var DraftSet = function(_super) {
        __extends(DraftSet2, _super);
        function DraftSet2(target, parent) {
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
          return this;
        }
        var p2 = DraftSet2.prototype;
        Object.defineProperty(p2, "size", {
          get: function get2() {
            return latest(this[DRAFT_STATE]).size;
          }
          // enumerable: true,
        });
        p2.has = function(value) {
          var state = this[DRAFT_STATE];
          assertUnrevoked(state);
          if (!state.copy_) {
            return state.base_.has(value);
          }
          if (state.copy_.has(value))
            return true;
          if (state.drafts_.has(value) && state.copy_.has(state.drafts_.get(value)))
            return true;
          return false;
        };
        p2.add = function(value) {
          var state = this[DRAFT_STATE];
          assertUnrevoked(state);
          if (!this.has(value)) {
            prepareSetCopy(state);
            markChanged(state);
            state.copy_.add(value);
          }
          return this;
        };
        p2.delete = function(value) {
          if (!this.has(value)) {
            return false;
          }
          var state = this[DRAFT_STATE];
          assertUnrevoked(state);
          prepareSetCopy(state);
          markChanged(state);
          return state.copy_.delete(value) || (state.drafts_.has(value) ? state.copy_.delete(state.drafts_.get(value)) : (
            /* istanbul ignore next */
            false
          ));
        };
        p2.clear = function() {
          var state = this[DRAFT_STATE];
          assertUnrevoked(state);
          if (latest(state).size) {
            prepareSetCopy(state);
            markChanged(state);
            state.copy_.clear();
          }
        };
        p2.values = function() {
          var state = this[DRAFT_STATE];
          assertUnrevoked(state);
          prepareSetCopy(state);
          return state.copy_.values();
        };
        p2.entries = function entries() {
          var state = this[DRAFT_STATE];
          assertUnrevoked(state);
          prepareSetCopy(state);
          return state.copy_.entries();
        };
        p2.keys = function() {
          return this.values();
        };
        p2[iteratorSymbol] = function() {
          return this.values();
        };
        p2.forEach = function forEach(cb, thisArg) {
          var iterator = this.values();
          var result = iterator.next();
          while (!result.done) {
            cb.call(thisArg, result.value, result.value, this);
            result = iterator.next();
          }
        };
        return DraftSet2;
      }(Set);
      function proxySet_(target, parent) {
        return new DraftSet(target, parent);
      }
      function prepareSetCopy(state) {
        if (!state.copy_) {
          state.copy_ = /* @__PURE__ */ new Set();
          state.base_.forEach(function(value) {
            if (isDraftable(value)) {
              var draft = createProxy(state.scope_.immer_, value, state);
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
      loadPlugin("MapSet", {
        proxyMap_,
        proxySet_
      });
    }
    function enableAllPlugins() {
      enableES5();
      enableMapSet();
      enablePatches();
    }
    var immer = /* @__PURE__ */ new Immer();
    var produce = immer.produce;
    var produceWithPatches = /* @__PURE__ */ immer.produceWithPatches.bind(immer);
    var setAutoFreeze = /* @__PURE__ */ immer.setAutoFreeze.bind(immer);
    var setUseProxies = /* @__PURE__ */ immer.setUseProxies.bind(immer);
    var applyPatches = /* @__PURE__ */ immer.applyPatches.bind(immer);
    var createDraft = /* @__PURE__ */ immer.createDraft.bind(immer);
    var finishDraft = /* @__PURE__ */ immer.finishDraft.bind(immer);
    function castDraft(value) {
      return value;
    }
    function castImmutable(value) {
      return value;
    }
    exports.Immer = Immer;
    exports.applyPatches = applyPatches;
    exports.castDraft = castDraft;
    exports.castImmutable = castImmutable;
    exports.createDraft = createDraft;
    exports.current = current;
    exports.default = produce;
    exports.enableAllPlugins = enableAllPlugins;
    exports.enableES5 = enableES5;
    exports.enableMapSet = enableMapSet;
    exports.enablePatches = enablePatches;
    exports.finishDraft = finishDraft;
    exports.freeze = freeze;
    exports.immerable = DRAFTABLE;
    exports.isDraft = isDraft;
    exports.isDraftable = isDraftable;
    exports.nothing = NOTHING;
    exports.original = original;
    exports.produce = produce;
    exports.produceWithPatches = produceWithPatches;
    exports.setAutoFreeze = setAutoFreeze;
    exports.setUseProxies = setUseProxies;
  }
});

// node_modules/.pnpm/immer@9.0.21/node_modules/immer/dist/index.js
var require_dist = __commonJS({
  "node_modules/.pnpm/immer@9.0.21/node_modules/immer/dist/index.js"(exports, module2) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module2.exports = require_immer_cjs_production_min();
    } else {
      module2.exports = require_immer_cjs_development();
    }
  }
});

// node_modules/.pnpm/@xstate+immer@0.3.2_immer@9.0.21+xstate@4.37.1/node_modules/@xstate/immer/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/.pnpm/@xstate+immer@0.3.2_immer@9.0.21+xstate@4.37.1/node_modules/@xstate/immer/lib/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createUpdater = exports.assign = void 0;
    var xstate_1 = require_lib();
    var immer_1 = require_dist();
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

// node_modules/.pnpm/immer@9.0.21/node_modules/immer/dist/immer.esm.mjs
function n(n2) {
  for (var r2 = arguments.length, t2 = Array(r2 > 1 ? r2 - 1 : 0), e = 1; e < r2; e++)
    t2[e - 1] = arguments[e];
  if ("production" !== process.env.NODE_ENV) {
    var i2 = Y[n2], o2 = i2 ? "function" == typeof i2 ? i2.apply(null, t2) : i2 : "unknown error nr: " + n2;
    throw Error("[Immer] " + o2);
  }
  throw Error("[Immer] minified error nr: " + n2 + (t2.length ? " " + t2.map(function(n3) {
    return "'" + n3 + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function r(n2) {
  return !!n2 && !!n2[Q];
}
function t(n2) {
  var r2;
  return !!n2 && (function(n3) {
    if (!n3 || "object" != typeof n3)
      return false;
    var r3 = Object.getPrototypeOf(n3);
    if (null === r3)
      return true;
    var t2 = Object.hasOwnProperty.call(r3, "constructor") && r3.constructor;
    return t2 === Object || "function" == typeof t2 && Function.toString.call(t2) === Z;
  }(n2) || Array.isArray(n2) || !!n2[L] || !!(null === (r2 = n2.constructor) || void 0 === r2 ? void 0 : r2[L]) || s(n2) || v(n2));
}
function i(n2, r2, t2) {
  void 0 === t2 && (t2 = false), 0 === o(n2) ? (t2 ? Object.keys : nn)(n2).forEach(function(e) {
    t2 && "symbol" == typeof e || r2(e, n2[e], n2);
  }) : n2.forEach(function(t3, e) {
    return r2(e, t3, n2);
  });
}
function o(n2) {
  var r2 = n2[Q];
  return r2 ? r2.i > 3 ? r2.i - 4 : r2.i : Array.isArray(n2) ? 1 : s(n2) ? 2 : v(n2) ? 3 : 0;
}
function u(n2, r2) {
  return 2 === o(n2) ? n2.has(r2) : Object.prototype.hasOwnProperty.call(n2, r2);
}
function a(n2, r2) {
  return 2 === o(n2) ? n2.get(r2) : n2[r2];
}
function f(n2, r2, t2) {
  var e = o(n2);
  2 === e ? n2.set(r2, t2) : 3 === e ? n2.add(t2) : n2[r2] = t2;
}
function c(n2, r2) {
  return n2 === r2 ? 0 !== n2 || 1 / n2 == 1 / r2 : n2 != n2 && r2 != r2;
}
function s(n2) {
  return X && n2 instanceof Map;
}
function v(n2) {
  return q && n2 instanceof Set;
}
function p(n2) {
  return n2.o || n2.t;
}
function l(n2) {
  if (Array.isArray(n2))
    return Array.prototype.slice.call(n2);
  var r2 = rn(n2);
  delete r2[Q];
  for (var t2 = nn(r2), e = 0; e < t2.length; e++) {
    var i2 = t2[e], o2 = r2[i2];
    false === o2.writable && (o2.writable = true, o2.configurable = true), (o2.get || o2.set) && (r2[i2] = { configurable: true, writable: true, enumerable: o2.enumerable, value: n2[i2] });
  }
  return Object.create(Object.getPrototypeOf(n2), r2);
}
function d(n2, e) {
  return void 0 === e && (e = false), y(n2) || r(n2) || !t(n2) || (o(n2) > 1 && (n2.set = n2.add = n2.clear = n2.delete = h), Object.freeze(n2), e && i(n2, function(n3, r2) {
    return d(r2, true);
  }, true)), n2;
}
function h() {
  n(2);
}
function y(n2) {
  return null == n2 || "object" != typeof n2 || Object.isFrozen(n2);
}
function b(r2) {
  var t2 = tn[r2];
  return t2 || n(18, r2), t2;
}
function m(n2, r2) {
  tn[n2] || (tn[n2] = r2);
}
function _() {
  return "production" === process.env.NODE_ENV || U || n(0), U;
}
function j(n2, r2) {
  r2 && (b("Patches"), n2.u = [], n2.s = [], n2.v = r2);
}
function g(n2) {
  O(n2), n2.p.forEach(S), n2.p = null;
}
function O(n2) {
  n2 === U && (U = n2.l);
}
function w(n2) {
  return U = { p: [], l: U, h: n2, m: true, _: 0 };
}
function S(n2) {
  var r2 = n2[Q];
  0 === r2.i || 1 === r2.i ? r2.j() : r2.g = true;
}
function P(r2, e) {
  e._ = e.p.length;
  var i2 = e.p[0], o2 = void 0 !== r2 && r2 !== i2;
  return e.h.O || b("ES5").S(e, r2, o2), o2 ? (i2[Q].P && (g(e), n(4)), t(r2) && (r2 = M(e, r2), e.l || x(e, r2)), e.u && b("Patches").M(i2[Q].t, r2, e.u, e.s)) : r2 = M(e, i2, []), g(e), e.u && e.v(e.u, e.s), r2 !== H ? r2 : void 0;
}
function M(n2, r2, t2) {
  if (y(r2))
    return r2;
  var e = r2[Q];
  if (!e)
    return i(r2, function(i2, o3) {
      return A(n2, e, r2, i2, o3, t2);
    }, true), r2;
  if (e.A !== n2)
    return r2;
  if (!e.P)
    return x(n2, e.t, true), e.t;
  if (!e.I) {
    e.I = true, e.A._--;
    var o2 = 4 === e.i || 5 === e.i ? e.o = l(e.k) : e.o, u2 = o2, a2 = false;
    3 === e.i && (u2 = new Set(o2), o2.clear(), a2 = true), i(u2, function(r3, i2) {
      return A(n2, e, o2, r3, i2, t2, a2);
    }), x(n2, o2, false), t2 && n2.u && b("Patches").N(e, t2, n2.u, n2.s);
  }
  return e.o;
}
function A(e, i2, o2, a2, c2, s2, v2) {
  if ("production" !== process.env.NODE_ENV && c2 === o2 && n(5), r(c2)) {
    var p2 = M(e, c2, s2 && i2 && 3 !== i2.i && !u(i2.R, a2) ? s2.concat(a2) : void 0);
    if (f(o2, a2, p2), !r(p2))
      return;
    e.m = false;
  } else
    v2 && o2.add(c2);
  if (t(c2) && !y(c2)) {
    if (!e.h.D && e._ < 1)
      return;
    M(e, c2), i2 && i2.A.l || x(e, c2);
  }
}
function x(n2, r2, t2) {
  void 0 === t2 && (t2 = false), !n2.l && n2.h.D && n2.m && d(r2, t2);
}
function z(n2, r2) {
  var t2 = n2[Q];
  return (t2 ? p(t2) : n2)[r2];
}
function I(n2, r2) {
  if (r2 in n2)
    for (var t2 = Object.getPrototypeOf(n2); t2; ) {
      var e = Object.getOwnPropertyDescriptor(t2, r2);
      if (e)
        return e;
      t2 = Object.getPrototypeOf(t2);
    }
}
function k(n2) {
  n2.P || (n2.P = true, n2.l && k(n2.l));
}
function E(n2) {
  n2.o || (n2.o = l(n2.t));
}
function N(n2, r2, t2) {
  var e = s(r2) ? b("MapSet").F(r2, t2) : v(r2) ? b("MapSet").T(r2, t2) : n2.O ? function(n3, r3) {
    var t3 = Array.isArray(n3), e2 = { i: t3 ? 1 : 0, A: r3 ? r3.A : _(), P: false, I: false, R: {}, l: r3, t: n3, k: null, o: null, j: null, C: false }, i2 = e2, o2 = en;
    t3 && (i2 = [e2], o2 = on);
    var u2 = Proxy.revocable(i2, o2), a2 = u2.revoke, f2 = u2.proxy;
    return e2.k = f2, e2.j = a2, f2;
  }(r2, t2) : b("ES5").J(r2, t2);
  return (t2 ? t2.A : _()).p.push(e), e;
}
function R(e) {
  return r(e) || n(22, e), function n2(r2) {
    if (!t(r2))
      return r2;
    var e2, u2 = r2[Q], c2 = o(r2);
    if (u2) {
      if (!u2.P && (u2.i < 4 || !b("ES5").K(u2)))
        return u2.t;
      u2.I = true, e2 = D(r2, c2), u2.I = false;
    } else
      e2 = D(r2, c2);
    return i(e2, function(r3, t2) {
      u2 && a(u2.t, r3) === t2 || f(e2, r3, n2(t2));
    }), 3 === c2 ? new Set(e2) : e2;
  }(e);
}
function D(n2, r2) {
  switch (r2) {
    case 2:
      return new Map(n2);
    case 3:
      return Array.from(n2);
  }
  return l(n2);
}
function C() {
  function r2(n2, r3) {
    function t2() {
      this.constructor = n2;
    }
    a2(n2, r3), n2.prototype = (t2.prototype = r3.prototype, new t2());
  }
  function e(n2) {
    n2.o || (n2.R = /* @__PURE__ */ new Map(), n2.o = new Map(n2.t));
  }
  function o2(n2) {
    n2.o || (n2.o = /* @__PURE__ */ new Set(), n2.t.forEach(function(r3) {
      if (t(r3)) {
        var e2 = N(n2.A.h, r3, n2);
        n2.p.set(r3, e2), n2.o.add(e2);
      } else
        n2.o.add(r3);
    }));
  }
  function u2(r3) {
    r3.g && n(3, JSON.stringify(p(r3)));
  }
  var a2 = function(n2, r3) {
    return (a2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n3, r4) {
      n3.__proto__ = r4;
    } || function(n3, r4) {
      for (var t2 in r4)
        r4.hasOwnProperty(t2) && (n3[t2] = r4[t2]);
    })(n2, r3);
  }, f2 = function() {
    function n2(n3, r3) {
      return this[Q] = { i: 2, l: r3, A: r3 ? r3.A : _(), P: false, I: false, o: void 0, R: void 0, t: n3, k: this, C: false, g: false }, this;
    }
    r2(n2, Map);
    var o3 = n2.prototype;
    return Object.defineProperty(o3, "size", { get: function() {
      return p(this[Q]).size;
    } }), o3.has = function(n3) {
      return p(this[Q]).has(n3);
    }, o3.set = function(n3, r3) {
      var t2 = this[Q];
      return u2(t2), p(t2).has(n3) && p(t2).get(n3) === r3 || (e(t2), k(t2), t2.R.set(n3, true), t2.o.set(n3, r3), t2.R.set(n3, true)), this;
    }, o3.delete = function(n3) {
      if (!this.has(n3))
        return false;
      var r3 = this[Q];
      return u2(r3), e(r3), k(r3), r3.t.has(n3) ? r3.R.set(n3, false) : r3.R.delete(n3), r3.o.delete(n3), true;
    }, o3.clear = function() {
      var n3 = this[Q];
      u2(n3), p(n3).size && (e(n3), k(n3), n3.R = /* @__PURE__ */ new Map(), i(n3.t, function(r3) {
        n3.R.set(r3, false);
      }), n3.o.clear());
    }, o3.forEach = function(n3, r3) {
      var t2 = this;
      p(this[Q]).forEach(function(e2, i2) {
        n3.call(r3, t2.get(i2), i2, t2);
      });
    }, o3.get = function(n3) {
      var r3 = this[Q];
      u2(r3);
      var i2 = p(r3).get(n3);
      if (r3.I || !t(i2))
        return i2;
      if (i2 !== r3.t.get(n3))
        return i2;
      var o4 = N(r3.A.h, i2, r3);
      return e(r3), r3.o.set(n3, o4), o4;
    }, o3.keys = function() {
      return p(this[Q]).keys();
    }, o3.values = function() {
      var n3, r3 = this, t2 = this.keys();
      return (n3 = {})[V] = function() {
        return r3.values();
      }, n3.next = function() {
        var n4 = t2.next();
        return n4.done ? n4 : { done: false, value: r3.get(n4.value) };
      }, n3;
    }, o3.entries = function() {
      var n3, r3 = this, t2 = this.keys();
      return (n3 = {})[V] = function() {
        return r3.entries();
      }, n3.next = function() {
        var n4 = t2.next();
        if (n4.done)
          return n4;
        var e2 = r3.get(n4.value);
        return { done: false, value: [n4.value, e2] };
      }, n3;
    }, o3[V] = function() {
      return this.entries();
    }, n2;
  }(), c2 = function() {
    function n2(n3, r3) {
      return this[Q] = { i: 3, l: r3, A: r3 ? r3.A : _(), P: false, I: false, o: void 0, t: n3, k: this, p: /* @__PURE__ */ new Map(), g: false, C: false }, this;
    }
    r2(n2, Set);
    var t2 = n2.prototype;
    return Object.defineProperty(t2, "size", { get: function() {
      return p(this[Q]).size;
    } }), t2.has = function(n3) {
      var r3 = this[Q];
      return u2(r3), r3.o ? !!r3.o.has(n3) || !(!r3.p.has(n3) || !r3.o.has(r3.p.get(n3))) : r3.t.has(n3);
    }, t2.add = function(n3) {
      var r3 = this[Q];
      return u2(r3), this.has(n3) || (o2(r3), k(r3), r3.o.add(n3)), this;
    }, t2.delete = function(n3) {
      if (!this.has(n3))
        return false;
      var r3 = this[Q];
      return u2(r3), o2(r3), k(r3), r3.o.delete(n3) || !!r3.p.has(n3) && r3.o.delete(r3.p.get(n3));
    }, t2.clear = function() {
      var n3 = this[Q];
      u2(n3), p(n3).size && (o2(n3), k(n3), n3.o.clear());
    }, t2.values = function() {
      var n3 = this[Q];
      return u2(n3), o2(n3), n3.o.values();
    }, t2.entries = function() {
      var n3 = this[Q];
      return u2(n3), o2(n3), n3.o.entries();
    }, t2.keys = function() {
      return this.values();
    }, t2[V] = function() {
      return this.values();
    }, t2.forEach = function(n3, r3) {
      for (var t3 = this.values(), e2 = t3.next(); !e2.done; )
        n3.call(r3, e2.value, e2.value, this), e2 = t3.next();
    }, n2;
  }();
  m("MapSet", { F: function(n2, r3) {
    return new f2(n2, r3);
  }, T: function(n2, r3) {
    return new c2(n2, r3);
  } });
}
var G;
var U;
var W = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x");
var X = "undefined" != typeof Map;
var q = "undefined" != typeof Set;
var B = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect;
var H = W ? Symbol.for("immer-nothing") : ((G = {})["immer-nothing"] = true, G);
var L = W ? Symbol.for("immer-draftable") : "__$immer_draftable";
var Q = W ? Symbol.for("immer-state") : "__$immer_state";
var V = "undefined" != typeof Symbol && Symbol.iterator || "@@iterator";
var Y = { 0: "Illegal state", 1: "Immer drafts cannot have computed properties", 2: "This object has been frozen and should not be mutated", 3: function(n2) {
  return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + n2;
}, 4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.", 5: "Immer forbids circular references", 6: "The first or second argument to `produce` must be a function", 7: "The third argument to `produce` must be a function or undefined", 8: "First argument to `createDraft` must be a plain object, an array, or an immerable object", 9: "First argument to `finishDraft` must be a draft returned by `createDraft`", 10: "The given draft is already finalized", 11: "Object.defineProperty() cannot be used on an Immer draft", 12: "Object.setPrototypeOf() cannot be used on an Immer draft", 13: "Immer only supports deleting array indices", 14: "Immer only supports setting array indices and the 'length' property", 15: function(n2) {
  return "Cannot apply patch, path doesn't resolve: " + n2;
}, 16: 'Sets cannot have "replace" patches.', 17: function(n2) {
  return "Unsupported patch operation: " + n2;
}, 18: function(n2) {
  return "The plugin for '" + n2 + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + n2 + "()` when initializing your application.";
}, 20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available", 21: function(n2) {
  return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" + n2 + "'";
}, 22: function(n2) {
  return "'current' expects a draft, got: " + n2;
}, 23: function(n2) {
  return "'original' expects a draft, got: " + n2;
}, 24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed" };
var Z = "" + Object.prototype.constructor;
var nn = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function(n2) {
  return Object.getOwnPropertyNames(n2).concat(Object.getOwnPropertySymbols(n2));
} : Object.getOwnPropertyNames;
var rn = Object.getOwnPropertyDescriptors || function(n2) {
  var r2 = {};
  return nn(n2).forEach(function(t2) {
    r2[t2] = Object.getOwnPropertyDescriptor(n2, t2);
  }), r2;
};
var tn = {};
var en = { get: function(n2, r2) {
  if (r2 === Q)
    return n2;
  var e = p(n2);
  if (!u(e, r2))
    return function(n3, r3, t2) {
      var e2, i3 = I(r3, t2);
      return i3 ? "value" in i3 ? i3.value : null === (e2 = i3.get) || void 0 === e2 ? void 0 : e2.call(n3.k) : void 0;
    }(n2, e, r2);
  var i2 = e[r2];
  return n2.I || !t(i2) ? i2 : i2 === z(n2.t, r2) ? (E(n2), n2.o[r2] = N(n2.A.h, i2, n2)) : i2;
}, has: function(n2, r2) {
  return r2 in p(n2);
}, ownKeys: function(n2) {
  return Reflect.ownKeys(p(n2));
}, set: function(n2, r2, t2) {
  var e = I(p(n2), r2);
  if (null == e ? void 0 : e.set)
    return e.set.call(n2.k, t2), true;
  if (!n2.P) {
    var i2 = z(p(n2), r2), o2 = null == i2 ? void 0 : i2[Q];
    if (o2 && o2.t === t2)
      return n2.o[r2] = t2, n2.R[r2] = false, true;
    if (c(t2, i2) && (void 0 !== t2 || u(n2.t, r2)))
      return true;
    E(n2), k(n2);
  }
  return n2.o[r2] === t2 && (void 0 !== t2 || r2 in n2.o) || Number.isNaN(t2) && Number.isNaN(n2.o[r2]) || (n2.o[r2] = t2, n2.R[r2] = true), true;
}, deleteProperty: function(n2, r2) {
  return void 0 !== z(n2.t, r2) || r2 in n2.t ? (n2.R[r2] = false, E(n2), k(n2)) : delete n2.R[r2], n2.o && delete n2.o[r2], true;
}, getOwnPropertyDescriptor: function(n2, r2) {
  var t2 = p(n2), e = Reflect.getOwnPropertyDescriptor(t2, r2);
  return e ? { writable: true, configurable: 1 !== n2.i || "length" !== r2, enumerable: e.enumerable, value: t2[r2] } : e;
}, defineProperty: function() {
  n(11);
}, getPrototypeOf: function(n2) {
  return Object.getPrototypeOf(n2.t);
}, setPrototypeOf: function() {
  n(12);
} };
var on = {};
i(en, function(n2, r2) {
  on[n2] = function() {
    return arguments[0] = arguments[0][0], r2.apply(this, arguments);
  };
}), on.deleteProperty = function(r2, t2) {
  return "production" !== process.env.NODE_ENV && isNaN(parseInt(t2)) && n(13), on.set.call(this, r2, t2, void 0);
}, on.set = function(r2, t2, e) {
  return "production" !== process.env.NODE_ENV && "length" !== t2 && isNaN(parseInt(t2)) && n(14), en.set.call(this, r2[0], t2, e, r2[0]);
};
var un = function() {
  function e(r2) {
    var e2 = this;
    this.O = B, this.D = true, this.produce = function(r3, i3, o2) {
      if ("function" == typeof r3 && "function" != typeof i3) {
        var u2 = i3;
        i3 = r3;
        var a2 = e2;
        return function(n2) {
          var r4 = this;
          void 0 === n2 && (n2 = u2);
          for (var t2 = arguments.length, e3 = Array(t2 > 1 ? t2 - 1 : 0), o3 = 1; o3 < t2; o3++)
            e3[o3 - 1] = arguments[o3];
          return a2.produce(n2, function(n3) {
            var t3;
            return (t3 = i3).call.apply(t3, [r4, n3].concat(e3));
          });
        };
      }
      var f2;
      if ("function" != typeof i3 && n(6), void 0 !== o2 && "function" != typeof o2 && n(7), t(r3)) {
        var c2 = w(e2), s2 = N(e2, r3, void 0), v2 = true;
        try {
          f2 = i3(s2), v2 = false;
        } finally {
          v2 ? g(c2) : O(c2);
        }
        return "undefined" != typeof Promise && f2 instanceof Promise ? f2.then(function(n2) {
          return j(c2, o2), P(n2, c2);
        }, function(n2) {
          throw g(c2), n2;
        }) : (j(c2, o2), P(f2, c2));
      }
      if (!r3 || "object" != typeof r3) {
        if (void 0 === (f2 = i3(r3)) && (f2 = r3), f2 === H && (f2 = void 0), e2.D && d(f2, true), o2) {
          var p2 = [], l2 = [];
          b("Patches").M(r3, f2, p2, l2), o2(p2, l2);
        }
        return f2;
      }
      n(21, r3);
    }, this.produceWithPatches = function(n2, r3) {
      if ("function" == typeof n2)
        return function(r4) {
          for (var t3 = arguments.length, i4 = Array(t3 > 1 ? t3 - 1 : 0), o3 = 1; o3 < t3; o3++)
            i4[o3 - 1] = arguments[o3];
          return e2.produceWithPatches(r4, function(r5) {
            return n2.apply(void 0, [r5].concat(i4));
          });
        };
      var t2, i3, o2 = e2.produce(n2, r3, function(n3, r4) {
        t2 = n3, i3 = r4;
      });
      return "undefined" != typeof Promise && o2 instanceof Promise ? o2.then(function(n3) {
        return [n3, t2, i3];
      }) : [o2, t2, i3];
    }, "boolean" == typeof (null == r2 ? void 0 : r2.useProxies) && this.setUseProxies(r2.useProxies), "boolean" == typeof (null == r2 ? void 0 : r2.autoFreeze) && this.setAutoFreeze(r2.autoFreeze);
  }
  var i2 = e.prototype;
  return i2.createDraft = function(e2) {
    t(e2) || n(8), r(e2) && (e2 = R(e2));
    var i3 = w(this), o2 = N(this, e2, void 0);
    return o2[Q].C = true, O(i3), o2;
  }, i2.finishDraft = function(r2, t2) {
    var e2 = r2 && r2[Q];
    "production" !== process.env.NODE_ENV && (e2 && e2.C || n(9), e2.I && n(10));
    var i3 = e2.A;
    return j(i3, t2), P(void 0, i3);
  }, i2.setAutoFreeze = function(n2) {
    this.D = n2;
  }, i2.setUseProxies = function(r2) {
    r2 && !B && n(20), this.O = r2;
  }, i2.applyPatches = function(n2, t2) {
    var e2;
    for (e2 = t2.length - 1; e2 >= 0; e2--) {
      var i3 = t2[e2];
      if (0 === i3.path.length && "replace" === i3.op) {
        n2 = i3.value;
        break;
      }
    }
    e2 > -1 && (t2 = t2.slice(e2 + 1));
    var o2 = b("Patches").$;
    return r(n2) ? o2(n2, t2) : this.produce(n2, function(n3) {
      return o2(n3, t2);
    });
  }, e;
}();
var an = new un();
var fn = an.produce;
var cn = an.produceWithPatches.bind(an);
var sn = an.setAutoFreeze.bind(an);
var vn = an.setUseProxies.bind(an);
var pn = an.applyPatches.bind(an);
var ln = an.createDraft.bind(an);
var dn = an.finishDraft.bind(an);

// src/index.ts
var import_xstate = __toESM(require_lib());
C();
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
