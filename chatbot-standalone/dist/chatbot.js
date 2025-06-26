import * as G from "react";
import Cn, { forwardRef as Ps, createElement as dr, useState as ht, useRef as va, useEffect as di } from "react";
import "react-dom";
var ye = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Is(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function wa(t) {
  if (t.__esModule) return t;
  var e = t.default;
  if (typeof e == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    n.prototype = e.prototype;
  } else n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(t).forEach(function(r) {
    var i = Object.getOwnPropertyDescriptor(t, r);
    Object.defineProperty(n, r, i.get ? i : {
      enumerable: !0,
      get: function() {
        return t[r];
      }
    });
  }), n;
}
var fr = { exports: {} }, Ft = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fi;
function _a() {
  if (fi) return Ft;
  fi = 1;
  var t = Cn, e = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, s = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(a, l, c) {
    var u, h = {}, f = null, d = null;
    c !== void 0 && (f = "" + c), l.key !== void 0 && (f = "" + l.key), l.ref !== void 0 && (d = l.ref);
    for (u in l) r.call(l, u) && !s.hasOwnProperty(u) && (h[u] = l[u]);
    if (a && a.defaultProps) for (u in l = a.defaultProps, l) h[u] === void 0 && (h[u] = l[u]);
    return { $$typeof: e, type: a, key: f, ref: d, props: h, _owner: i.current };
  }
  return Ft.Fragment = n, Ft.jsx = o, Ft.jsxs = o, Ft;
}
var Ut = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pi;
function xa() {
  return pi || (pi = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Cn, e = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), a = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), d = Symbol.for("react.offscreen"), y = Symbol.iterator, b = "@@iterator";
    function w(p) {
      if (p === null || typeof p != "object")
        return null;
      var S = y && p[y] || p[b];
      return typeof S == "function" ? S : null;
    }
    var v = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(p) {
      {
        for (var S = arguments.length, P = new Array(S > 1 ? S - 1 : 0), U = 1; U < S; U++)
          P[U - 1] = arguments[U];
        k("error", p, P);
      }
    }
    function k(p, S, P) {
      {
        var U = v.ReactDebugCurrentFrame, ee = U.getStackAddendum();
        ee !== "" && (S += "%s", P = P.concat([ee]));
        var ne = P.map(function(X) {
          return String(X);
        });
        ne.unshift("Warning: " + S), Function.prototype.apply.call(console[p], console, ne);
      }
    }
    var I = !1, $ = !1, _ = !1, D = !1, W = !1, F;
    F = Symbol.for("react.module.reference");
    function j(p) {
      return !!(typeof p == "string" || typeof p == "function" || p === r || p === s || W || p === i || p === c || p === u || D || p === d || I || $ || _ || typeof p == "object" && p !== null && (p.$$typeof === f || p.$$typeof === h || p.$$typeof === o || p.$$typeof === a || p.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      p.$$typeof === F || p.getModuleId !== void 0));
    }
    function O(p, S, P) {
      var U = p.displayName;
      if (U)
        return U;
      var ee = S.displayName || S.name || "";
      return ee !== "" ? P + "(" + ee + ")" : P;
    }
    function T(p) {
      return p.displayName || "Context";
    }
    function N(p) {
      if (p == null)
        return null;
      if (typeof p.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof p == "function")
        return p.displayName || p.name || null;
      if (typeof p == "string")
        return p;
      switch (p) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case s:
          return "Profiler";
        case i:
          return "StrictMode";
        case c:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof p == "object")
        switch (p.$$typeof) {
          case a:
            var S = p;
            return T(S) + ".Consumer";
          case o:
            var P = p;
            return T(P._context) + ".Provider";
          case l:
            return O(p, p.render, "ForwardRef");
          case h:
            var U = p.displayName || null;
            return U !== null ? U : N(p.type) || "Memo";
          case f: {
            var ee = p, ne = ee._payload, X = ee._init;
            try {
              return N(X(ne));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var z = Object.assign, L = 0, re, te, he, pe, g, le, je;
    function m() {
    }
    m.__reactDisabledLog = !0;
    function Te() {
      {
        if (L === 0) {
          re = console.log, te = console.info, he = console.warn, pe = console.error, g = console.group, le = console.groupCollapsed, je = console.groupEnd;
          var p = {
            configurable: !0,
            enumerable: !0,
            value: m,
            writable: !0
          };
          Object.defineProperties(console, {
            info: p,
            log: p,
            warn: p,
            error: p,
            group: p,
            groupCollapsed: p,
            groupEnd: p
          });
        }
        L++;
      }
    }
    function Ve() {
      {
        if (L--, L === 0) {
          var p = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: z({}, p, {
              value: re
            }),
            info: z({}, p, {
              value: te
            }),
            warn: z({}, p, {
              value: he
            }),
            error: z({}, p, {
              value: pe
            }),
            group: z({}, p, {
              value: g
            }),
            groupCollapsed: z({}, p, {
              value: le
            }),
            groupEnd: z({}, p, {
              value: je
            })
          });
        }
        L < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ue = v.ReactCurrentDispatcher, He;
    function Ae(p, S, P) {
      {
        if (He === void 0)
          try {
            throw Error();
          } catch (ee) {
            var U = ee.stack.trim().match(/\n( *(at )?)/);
            He = U && U[1] || "";
          }
        return `
` + He + p;
      }
    }
    var Fe = !1, De;
    {
      var vt = typeof WeakMap == "function" ? WeakMap : Map;
      De = new vt();
    }
    function ln(p, S) {
      if (!p || Fe)
        return "";
      {
        var P = De.get(p);
        if (P !== void 0)
          return P;
      }
      var U;
      Fe = !0;
      var ee = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var ne;
      ne = ue.current, ue.current = null, Te();
      try {
        if (S) {
          var X = function() {
            throw Error();
          };
          if (Object.defineProperty(X.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(X, []);
            } catch (_e) {
              U = _e;
            }
            Reflect.construct(p, [], X);
          } else {
            try {
              X.call();
            } catch (_e) {
              U = _e;
            }
            p.call(X.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_e) {
            U = _e;
          }
          p();
        }
      } catch (_e) {
        if (_e && U && typeof _e.stack == "string") {
          for (var Y = _e.stack.split(`
`), we = U.stack.split(`
`), ce = Y.length - 1, de = we.length - 1; ce >= 1 && de >= 0 && Y[ce] !== we[de]; )
            de--;
          for (; ce >= 1 && de >= 0; ce--, de--)
            if (Y[ce] !== we[de]) {
              if (ce !== 1 || de !== 1)
                do
                  if (ce--, de--, de < 0 || Y[ce] !== we[de]) {
                    var Le = `
` + Y[ce].replace(" at new ", " at ");
                    return p.displayName && Le.includes("<anonymous>") && (Le = Le.replace("<anonymous>", p.displayName)), typeof p == "function" && De.set(p, Le), Le;
                  }
                while (ce >= 1 && de >= 0);
              break;
            }
        }
      } finally {
        Fe = !1, ue.current = ne, Ve(), Error.prepareStackTrace = ee;
      }
      var _t = p ? p.displayName || p.name : "", ct = _t ? Ae(_t) : "";
      return typeof p == "function" && De.set(p, ct), ct;
    }
    function zn(p, S, P) {
      return ln(p, !1);
    }
    function Mn(p) {
      var S = p.prototype;
      return !!(S && S.isReactComponent);
    }
    function ot(p, S, P) {
      if (p == null)
        return "";
      if (typeof p == "function")
        return ln(p, Mn(p));
      if (typeof p == "string")
        return Ae(p);
      switch (p) {
        case c:
          return Ae("Suspense");
        case u:
          return Ae("SuspenseList");
      }
      if (typeof p == "object")
        switch (p.$$typeof) {
          case l:
            return zn(p.render);
          case h:
            return ot(p.type, S, P);
          case f: {
            var U = p, ee = U._payload, ne = U._init;
            try {
              return ot(ne(ee), S, P);
            } catch {
            }
          }
        }
      return "";
    }
    var Ye = Object.prototype.hasOwnProperty, zt = {}, un = v.ReactDebugCurrentFrame;
    function at(p) {
      if (p) {
        var S = p._owner, P = ot(p.type, p._source, S ? S.type : null);
        un.setExtraStackFrame(P);
      } else
        un.setExtraStackFrame(null);
    }
    function cn(p, S, P, U, ee) {
      {
        var ne = Function.call.bind(Ye);
        for (var X in p)
          if (ne(p, X)) {
            var Y = void 0;
            try {
              if (typeof p[X] != "function") {
                var we = Error((U || "React class") + ": " + P + " type `" + X + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof p[X] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw we.name = "Invariant Violation", we;
              }
              Y = p[X](S, X, U, P, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ce) {
              Y = ce;
            }
            Y && !(Y instanceof Error) && (at(ee), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", U || "React class", P, X, typeof Y), at(null)), Y instanceof Error && !(Y.message in zt) && (zt[Y.message] = !0, at(ee), C("Failed %s type: %s", P, Y.message), at(null));
          }
      }
    }
    var Fn = Array.isArray;
    function Mt(p) {
      return Fn(p);
    }
    function Un(p) {
      {
        var S = typeof Symbol == "function" && Symbol.toStringTag, P = S && p[Symbol.toStringTag] || p.constructor.name || "Object";
        return P;
      }
    }
    function Bn(p) {
      try {
        return hn(p), !1;
      } catch {
        return !0;
      }
    }
    function hn(p) {
      return "" + p;
    }
    function x(p) {
      if (Bn(p))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Un(p)), hn(p);
    }
    var A = v.ReactCurrentOwner, B = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, K, Z;
    function Pe(p) {
      if (Ye.call(p, "ref")) {
        var S = Object.getOwnPropertyDescriptor(p, "ref").get;
        if (S && S.isReactWarning)
          return !1;
      }
      return p.ref !== void 0;
    }
    function We(p) {
      if (Ye.call(p, "key")) {
        var S = Object.getOwnPropertyDescriptor(p, "key").get;
        if (S && S.isReactWarning)
          return !1;
      }
      return p.key !== void 0;
    }
    function Ne(p, S) {
      typeof p.ref == "string" && A.current;
    }
    function lt(p, S) {
      {
        var P = function() {
          K || (K = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", S));
        };
        P.isReactWarning = !0, Object.defineProperty(p, "key", {
          get: P,
          configurable: !0
        });
      }
    }
    function ut(p, S) {
      {
        var P = function() {
          Z || (Z = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", S));
        };
        P.isReactWarning = !0, Object.defineProperty(p, "ref", {
          get: P,
          configurable: !0
        });
      }
    }
    var ve = function(p, S, P, U, ee, ne, X) {
      var Y = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: p,
        key: S,
        ref: P,
        props: X,
        // Record the component responsible for creating this element.
        _owner: ne
      };
      return Y._store = {}, Object.defineProperty(Y._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Y, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: U
      }), Object.defineProperty(Y, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ee
      }), Object.freeze && (Object.freeze(Y.props), Object.freeze(Y)), Y;
    };
    function Xe(p, S, P, U, ee) {
      {
        var ne, X = {}, Y = null, we = null;
        P !== void 0 && (x(P), Y = "" + P), We(S) && (x(S.key), Y = "" + S.key), Pe(S) && (we = S.ref, Ne(S, ee));
        for (ne in S)
          Ye.call(S, ne) && !B.hasOwnProperty(ne) && (X[ne] = S[ne]);
        if (p && p.defaultProps) {
          var ce = p.defaultProps;
          for (ne in ce)
            X[ne] === void 0 && (X[ne] = ce[ne]);
        }
        if (Y || we) {
          var de = typeof p == "function" ? p.displayName || p.name || "Unknown" : p;
          Y && lt(X, de), we && ut(X, de);
        }
        return ve(p, Y, we, ee, U, A.current, X);
      }
    }
    var Ie = v.ReactCurrentOwner, si = v.ReactDebugCurrentFrame;
    function wt(p) {
      if (p) {
        var S = p._owner, P = ot(p.type, p._source, S ? S.type : null);
        si.setExtraStackFrame(P);
      } else
        si.setExtraStackFrame(null);
    }
    var qn;
    qn = !1;
    function Vn(p) {
      return typeof p == "object" && p !== null && p.$$typeof === e;
    }
    function oi() {
      {
        if (Ie.current) {
          var p = N(Ie.current.type);
          if (p)
            return `

Check the render method of \`` + p + "`.";
        }
        return "";
      }
    }
    function ua(p) {
      return "";
    }
    var ai = {};
    function ca(p) {
      {
        var S = oi();
        if (!S) {
          var P = typeof p == "string" ? p : p.displayName || p.name;
          P && (S = `

Check the top-level render call using <` + P + ">.");
        }
        return S;
      }
    }
    function li(p, S) {
      {
        if (!p._store || p._store.validated || p.key != null)
          return;
        p._store.validated = !0;
        var P = ca(S);
        if (ai[P])
          return;
        ai[P] = !0;
        var U = "";
        p && p._owner && p._owner !== Ie.current && (U = " It was passed a child from " + N(p._owner.type) + "."), wt(p), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', P, U), wt(null);
      }
    }
    function ui(p, S) {
      {
        if (typeof p != "object")
          return;
        if (Mt(p))
          for (var P = 0; P < p.length; P++) {
            var U = p[P];
            Vn(U) && li(U, S);
          }
        else if (Vn(p))
          p._store && (p._store.validated = !0);
        else if (p) {
          var ee = w(p);
          if (typeof ee == "function" && ee !== p.entries)
            for (var ne = ee.call(p), X; !(X = ne.next()).done; )
              Vn(X.value) && li(X.value, S);
        }
      }
    }
    function ha(p) {
      {
        var S = p.type;
        if (S == null || typeof S == "string")
          return;
        var P;
        if (typeof S == "function")
          P = S.propTypes;
        else if (typeof S == "object" && (S.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        S.$$typeof === h))
          P = S.propTypes;
        else
          return;
        if (P) {
          var U = N(S);
          cn(P, p.props, "prop", U, p);
        } else if (S.PropTypes !== void 0 && !qn) {
          qn = !0;
          var ee = N(S);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ee || "Unknown");
        }
        typeof S.getDefaultProps == "function" && !S.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function da(p) {
      {
        for (var S = Object.keys(p.props), P = 0; P < S.length; P++) {
          var U = S[P];
          if (U !== "children" && U !== "key") {
            wt(p), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", U), wt(null);
            break;
          }
        }
        p.ref !== null && (wt(p), C("Invalid attribute `ref` supplied to `React.Fragment`."), wt(null));
      }
    }
    var ci = {};
    function hi(p, S, P, U, ee, ne) {
      {
        var X = j(p);
        if (!X) {
          var Y = "";
          (p === void 0 || typeof p == "object" && p !== null && Object.keys(p).length === 0) && (Y += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var we = ua();
          we ? Y += we : Y += oi();
          var ce;
          p === null ? ce = "null" : Mt(p) ? ce = "array" : p !== void 0 && p.$$typeof === e ? (ce = "<" + (N(p.type) || "Unknown") + " />", Y = " Did you accidentally export a JSX literal instead of a component?") : ce = typeof p, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ce, Y);
        }
        var de = Xe(p, S, P, ee, ne);
        if (de == null)
          return de;
        if (X) {
          var Le = S.children;
          if (Le !== void 0)
            if (U)
              if (Mt(Le)) {
                for (var _t = 0; _t < Le.length; _t++)
                  ui(Le[_t], p);
                Object.freeze && Object.freeze(Le);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ui(Le, p);
        }
        if (Ye.call(S, "key")) {
          var ct = N(p), _e = Object.keys(S).filter(function(ba) {
            return ba !== "key";
          }), Hn = _e.length > 0 ? "{key: someKey, " + _e.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ci[ct + Hn]) {
            var ya = _e.length > 0 ? "{" + _e.join(": ..., ") + ": ...}" : "{}";
            C(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Hn, ct, ya, ct), ci[ct + Hn] = !0;
          }
        }
        return p === r ? da(de) : ha(de), de;
      }
    }
    function fa(p, S, P) {
      return hi(p, S, P, !0);
    }
    function pa(p, S, P) {
      return hi(p, S, P, !1);
    }
    var ga = pa, ma = fa;
    Ut.Fragment = r, Ut.jsx = ga, Ut.jsxs = ma;
  }()), Ut;
}
process.env.NODE_ENV === "production" ? fr.exports = _a() : fr.exports = xa();
var R = fr.exports;
function gi(t, e) {
  if (typeof t == "function")
    return t(e);
  t != null && (t.current = e);
}
function ka(...t) {
  return (e) => {
    let n = !1;
    const r = t.map((i) => {
      const s = gi(i, e);
      return !n && typeof s == "function" && (n = !0), s;
    });
    if (n)
      return () => {
        for (let i = 0; i < r.length; i++) {
          const s = r[i];
          typeof s == "function" ? s() : gi(t[i], null);
        }
      };
  };
}
// @__NO_SIDE_EFFECTS__
function Os(t) {
  const e = /* @__PURE__ */ Ea(t), n = G.forwardRef((r, i) => {
    const { children: s, ...o } = r, a = G.Children.toArray(s), l = a.find(Ta);
    if (l) {
      const c = l.props.children, u = a.map((h) => h === l ? G.Children.count(c) > 1 ? G.Children.only(null) : G.isValidElement(c) ? c.props.children : null : h);
      return /* @__PURE__ */ R.jsx(e, { ...o, ref: i, children: G.isValidElement(c) ? G.cloneElement(c, void 0, u) : null });
    }
    return /* @__PURE__ */ R.jsx(e, { ...o, ref: i, children: s });
  });
  return n.displayName = `${t}.Slot`, n;
}
var Sa = /* @__PURE__ */ Os("Slot");
// @__NO_SIDE_EFFECTS__
function Ea(t) {
  const e = G.forwardRef((n, r) => {
    const { children: i, ...s } = n;
    if (G.isValidElement(i)) {
      const o = Pa(i), a = Aa(s, i.props);
      return i.type !== G.Fragment && (a.ref = r ? ka(r, o) : o), G.cloneElement(i, a);
    }
    return G.Children.count(i) > 1 ? G.Children.only(null) : null;
  });
  return e.displayName = `${t}.SlotClone`, e;
}
var Ca = Symbol("radix.slottable");
function Ta(t) {
  return G.isValidElement(t) && typeof t.type == "function" && "__radixId" in t.type && t.type.__radixId === Ca;
}
function Aa(t, e) {
  const n = { ...e };
  for (const r in e) {
    const i = t[r], s = e[r];
    /^on[A-Z]/.test(r) ? i && s ? n[r] = (...a) => {
      const l = s(...a);
      return i(...a), l;
    } : i && (n[r] = i) : r === "style" ? n[r] = { ...i, ...s } : r === "className" && (n[r] = [i, s].filter(Boolean).join(" "));
  }
  return { ...t, ...n };
}
function Pa(t) {
  var r, i;
  let e = (r = Object.getOwnPropertyDescriptor(t.props, "ref")) == null ? void 0 : r.get, n = e && "isReactWarning" in e && e.isReactWarning;
  return n ? t.ref : (e = (i = Object.getOwnPropertyDescriptor(t, "ref")) == null ? void 0 : i.get, n = e && "isReactWarning" in e && e.isReactWarning, n ? t.props.ref : t.props.ref || t.ref);
}
function Rs(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var i = t.length;
    for (e = 0; e < i; e++) t[e] && (n = Rs(t[e])) && (r && (r += " "), r += n);
  } else for (n in t) t[n] && (r && (r += " "), r += n);
  return r;
}
function js() {
  for (var t, e, n = 0, r = "", i = arguments.length; n < i; n++) (t = arguments[n]) && (e = Rs(t)) && (r && (r += " "), r += e);
  return r;
}
const mi = (t) => typeof t == "boolean" ? `${t}` : t === 0 ? "0" : t, yi = js, Ia = (t, e) => (n) => {
  var r;
  if ((e == null ? void 0 : e.variants) == null) return yi(t, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: i, defaultVariants: s } = e, o = Object.keys(i).map((c) => {
    const u = n == null ? void 0 : n[c], h = s == null ? void 0 : s[c];
    if (u === null) return null;
    const f = mi(u) || mi(h);
    return i[c][f];
  }), a = n && Object.entries(n).reduce((c, u) => {
    let [h, f] = u;
    return f === void 0 || (c[h] = f), c;
  }, {}), l = e == null || (r = e.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((c, u) => {
    let { class: h, className: f, ...d } = u;
    return Object.entries(d).every((y) => {
      let [b, w] = y;
      return Array.isArray(w) ? w.includes({
        ...s,
        ...a
      }[b]) : {
        ...s,
        ...a
      }[b] === w;
    }) ? [
      ...c,
      h,
      f
    ] : c;
  }, []);
  return yi(t, o, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, Dr = "-", Oa = (t) => {
  const e = ja(t), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = t;
  return {
    getClassGroupId: (o) => {
      const a = o.split(Dr);
      return a[0] === "" && a.length !== 1 && a.shift(), Ls(a, e) || Ra(o);
    },
    getConflictingClassGroupIds: (o, a) => {
      const l = n[o] || [];
      return a && r[o] ? [...l, ...r[o]] : l;
    }
  };
}, Ls = (t, e) => {
  var o;
  if (t.length === 0)
    return e.classGroupId;
  const n = t[0], r = e.nextPart.get(n), i = r ? Ls(t.slice(1), r) : void 0;
  if (i)
    return i;
  if (e.validators.length === 0)
    return;
  const s = t.join(Dr);
  return (o = e.validators.find(({
    validator: a
  }) => a(s))) == null ? void 0 : o.classGroupId;
}, bi = /^\[(.+)\]$/, Ra = (t) => {
  if (bi.test(t)) {
    const e = bi.exec(t)[1], n = e == null ? void 0 : e.substring(0, e.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}, ja = (t) => {
  const {
    theme: e,
    prefix: n
  } = t, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return $a(Object.entries(t.classGroups), n).forEach(([s, o]) => {
    pr(o, r, s, e);
  }), r;
}, pr = (t, e, n, r) => {
  t.forEach((i) => {
    if (typeof i == "string") {
      const s = i === "" ? e : vi(e, i);
      s.classGroupId = n;
      return;
    }
    if (typeof i == "function") {
      if (La(i)) {
        pr(i(r), e, n, r);
        return;
      }
      e.validators.push({
        validator: i,
        classGroupId: n
      });
      return;
    }
    Object.entries(i).forEach(([s, o]) => {
      pr(o, vi(e, s), n, r);
    });
  });
}, vi = (t, e) => {
  let n = t;
  return e.split(Dr).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}, La = (t) => t.isThemeGetter, $a = (t, e) => e ? t.map(([n, r]) => {
  const i = r.map((s) => typeof s == "string" ? e + s : typeof s == "object" ? Object.fromEntries(Object.entries(s).map(([o, a]) => [e + o, a])) : s);
  return [n, i];
}) : t, Da = (t) => {
  if (t < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let e = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const i = (s, o) => {
    n.set(s, o), e++, e > t && (e = 0, r = n, n = /* @__PURE__ */ new Map());
  };
  return {
    get(s) {
      let o = n.get(s);
      if (o !== void 0)
        return o;
      if ((o = r.get(s)) !== void 0)
        return i(s, o), o;
    },
    set(s, o) {
      n.has(s) ? n.set(s, o) : i(s, o);
    }
  };
}, $s = "!", Na = (t) => {
  const {
    separator: e,
    experimentalParseClassName: n
  } = t, r = e.length === 1, i = e[0], s = e.length, o = (a) => {
    const l = [];
    let c = 0, u = 0, h;
    for (let w = 0; w < a.length; w++) {
      let v = a[w];
      if (c === 0) {
        if (v === i && (r || a.slice(w, w + s) === e)) {
          l.push(a.slice(u, w)), u = w + s;
          continue;
        }
        if (v === "/") {
          h = w;
          continue;
        }
      }
      v === "[" ? c++ : v === "]" && c--;
    }
    const f = l.length === 0 ? a : a.substring(u), d = f.startsWith($s), y = d ? f.substring(1) : f, b = h && h > u ? h - u : void 0;
    return {
      modifiers: l,
      hasImportantModifier: d,
      baseClassName: y,
      maybePostfixModifierPosition: b
    };
  };
  return n ? (a) => n({
    className: a,
    parseClassName: o
  }) : o;
}, za = (t) => {
  if (t.length <= 1)
    return t;
  const e = [];
  let n = [];
  return t.forEach((r) => {
    r[0] === "[" ? (e.push(...n.sort(), r), n = []) : n.push(r);
  }), e.push(...n.sort()), e;
}, Ma = (t) => ({
  cache: Da(t.cacheSize),
  parseClassName: Na(t),
  ...Oa(t)
}), Fa = /\s+/, Ua = (t, e) => {
  const {
    parseClassName: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: i
  } = e, s = [], o = t.trim().split(Fa);
  let a = "";
  for (let l = o.length - 1; l >= 0; l -= 1) {
    const c = o[l], {
      modifiers: u,
      hasImportantModifier: h,
      baseClassName: f,
      maybePostfixModifierPosition: d
    } = n(c);
    let y = !!d, b = r(y ? f.substring(0, d) : f);
    if (!b) {
      if (!y) {
        a = c + (a.length > 0 ? " " + a : a);
        continue;
      }
      if (b = r(f), !b) {
        a = c + (a.length > 0 ? " " + a : a);
        continue;
      }
      y = !1;
    }
    const w = za(u).join(":"), v = h ? w + $s : w, C = v + b;
    if (s.includes(C))
      continue;
    s.push(C);
    const k = i(b, y);
    for (let I = 0; I < k.length; ++I) {
      const $ = k[I];
      s.push(v + $);
    }
    a = c + (a.length > 0 ? " " + a : a);
  }
  return a;
};
function Ba() {
  let t = 0, e, n, r = "";
  for (; t < arguments.length; )
    (e = arguments[t++]) && (n = Ds(e)) && (r && (r += " "), r += n);
  return r;
}
const Ds = (t) => {
  if (typeof t == "string")
    return t;
  let e, n = "";
  for (let r = 0; r < t.length; r++)
    t[r] && (e = Ds(t[r])) && (n && (n += " "), n += e);
  return n;
};
function qa(t, ...e) {
  let n, r, i, s = o;
  function o(l) {
    const c = e.reduce((u, h) => h(u), t());
    return n = Ma(c), r = n.cache.get, i = n.cache.set, s = a, a(l);
  }
  function a(l) {
    const c = r(l);
    if (c)
      return c;
    const u = Ua(l, n);
    return i(l, u), u;
  }
  return function() {
    return s(Ba.apply(null, arguments));
  };
}
const ae = (t) => {
  const e = (n) => n[t] || [];
  return e.isThemeGetter = !0, e;
}, Ns = /^\[(?:([a-z-]+):)?(.+)\]$/i, Va = /^\d+\/\d+$/, Ha = /* @__PURE__ */ new Set(["px", "full", "screen"]), Wa = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ga = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Ka = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Ja = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Ya = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, Ge = (t) => Pt(t) || Ha.has(t) || Va.test(t), Qe = (t) => jt(t, "length", il), Pt = (t) => !!t && !Number.isNaN(Number(t)), Wn = (t) => jt(t, "number", Pt), Bt = (t) => !!t && Number.isInteger(Number(t)), Xa = (t) => t.endsWith("%") && Pt(t.slice(0, -1)), V = (t) => Ns.test(t), Ze = (t) => Wa.test(t), Qa = /* @__PURE__ */ new Set(["length", "size", "percentage"]), Za = (t) => jt(t, Qa, zs), el = (t) => jt(t, "position", zs), tl = /* @__PURE__ */ new Set(["image", "url"]), nl = (t) => jt(t, tl, ol), rl = (t) => jt(t, "", sl), qt = () => !0, jt = (t, e, n) => {
  const r = Ns.exec(t);
  return r ? r[1] ? typeof e == "string" ? r[1] === e : e.has(r[1]) : n(r[2]) : !1;
}, il = (t) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  Ga.test(t) && !Ka.test(t)
), zs = () => !1, sl = (t) => Ja.test(t), ol = (t) => Ya.test(t), al = () => {
  const t = ae("colors"), e = ae("spacing"), n = ae("blur"), r = ae("brightness"), i = ae("borderColor"), s = ae("borderRadius"), o = ae("borderSpacing"), a = ae("borderWidth"), l = ae("contrast"), c = ae("grayscale"), u = ae("hueRotate"), h = ae("invert"), f = ae("gap"), d = ae("gradientColorStops"), y = ae("gradientColorStopPositions"), b = ae("inset"), w = ae("margin"), v = ae("opacity"), C = ae("padding"), k = ae("saturate"), I = ae("scale"), $ = ae("sepia"), _ = ae("skew"), D = ae("space"), W = ae("translate"), F = () => ["auto", "contain", "none"], j = () => ["auto", "hidden", "clip", "visible", "scroll"], O = () => ["auto", V, e], T = () => [V, e], N = () => ["", Ge, Qe], z = () => ["auto", Pt, V], L = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], re = () => ["solid", "dashed", "dotted", "double", "none"], te = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], he = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], pe = () => ["", "0", V], g = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], le = () => [Pt, V];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [qt],
      spacing: [Ge, Qe],
      blur: ["none", "", Ze, V],
      brightness: le(),
      borderColor: [t],
      borderRadius: ["none", "", "full", Ze, V],
      borderSpacing: T(),
      borderWidth: N(),
      contrast: le(),
      grayscale: pe(),
      hueRotate: le(),
      invert: pe(),
      gap: T(),
      gradientColorStops: [t],
      gradientColorStopPositions: [Xa, Qe],
      inset: O(),
      margin: O(),
      opacity: le(),
      padding: T(),
      saturate: le(),
      scale: le(),
      sepia: pe(),
      skew: le(),
      space: T(),
      translate: T()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", V]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [Ze]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": g()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": g()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...L(), V]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: j()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": j()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": j()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: F()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": F()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": F()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [b]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [b]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [b]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [b]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [b]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [b]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [b]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [b]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [b]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", Bt, V]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: O()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", V]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: pe()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: pe()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Bt, V]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [qt]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Bt, V]
        }, V]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": z()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": z()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [qt]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Bt, V]
        }, V]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": z()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": z()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", V]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", V]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [f]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [f]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [f]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...he()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...he(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...he(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [C]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [C]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [C]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [C]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [C]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [C]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [C]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [C]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [C]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [w]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [w]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [w]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [w]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [w]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [w]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [w]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [w]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [w]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [D]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [D]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", V, e]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [V, e, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [V, e, "none", "full", "min", "max", "fit", "prose", {
          screen: [Ze]
        }, Ze]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [V, e, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [V, e, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [V, e, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [V, e, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Ze, Qe]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Wn]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [qt]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", V]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Pt, Wn]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ge, V]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", V]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", V]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [t]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [v]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [t]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [v]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...re(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Ge, Qe]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Ge, V]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [t]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: T()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", V]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", V]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [v]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...L(), el]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", Za]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, nl]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [t]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [y]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [y]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [y]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [d]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [d]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [d]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [s]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [s]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [s]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [s]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [s]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [s]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [s]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [s]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [s]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [s]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [s]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [s]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [s]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [s]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [s]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [a]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [a]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [a]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [a]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [a]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [a]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [a]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [a]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [a]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [v]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...re(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [a]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [a]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [v]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: re()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [i]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [i]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [i]
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": [i]
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": [i]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [i]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [i]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [i]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [i]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [i]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...re()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Ge, V]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Ge, Qe]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [t]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: N()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [t]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [v]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Ge, Qe]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [t]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", Ze, rl]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [qt]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [v]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...te(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": te()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [r]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [l]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", Ze, V]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [c]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [u]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [h]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [k]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [$]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [r]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [l]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [c]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [u]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [h]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [v]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [k]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [$]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [o]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [o]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [o]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", V]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: le()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", V]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: le()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", V]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [I]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [I]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [I]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Bt, V]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [W]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [W]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [_]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [_]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", V]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", t]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", V]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [t]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": T()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": T()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": T()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": T()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": T()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": T()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": T()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": T()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": T()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": T()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": T()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": T()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": T()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": T()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": T()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": T()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": T()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": T()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", V]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [t, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Ge, Qe, Wn]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [t, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}, ll = /* @__PURE__ */ qa(al);
function mt(...t) {
  return ll(js(t));
}
const ul = Ia(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), Tt = G.forwardRef(
  ({ className: t, variant: e, size: n, asChild: r = !1, ...i }, s) => {
    const o = r ? Sa : "button";
    return /* @__PURE__ */ R.jsx(
      o,
      {
        className: mt(ul({ variant: e, size: n, className: t })),
        ref: s,
        ...i
      }
    );
  }
);
Tt.displayName = "Button";
const Ms = G.forwardRef(
  ({ className: t, type: e, ...n }, r) => /* @__PURE__ */ R.jsx(
    "input",
    {
      type: e,
      className: mt(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        t
      ),
      ref: r,
      ...n
    }
  )
);
Ms.displayName = "Input";
const Fs = G.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ R.jsx(
  "div",
  {
    ref: n,
    className: mt(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      t
    ),
    ...e
  }
));
Fs.displayName = "Card";
const Us = G.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ R.jsx("div", { ref: n, className: mt("p-6 pt-0", t), ...e }));
Us.displayName = "CardContent";
function cl(t, e = []) {
  let n = [];
  function r(s, o) {
    const a = G.createContext(o), l = n.length;
    n = [...n, o];
    const c = (h) => {
      var v;
      const { scope: f, children: d, ...y } = h, b = ((v = f == null ? void 0 : f[t]) == null ? void 0 : v[l]) || a, w = G.useMemo(() => y, Object.values(y));
      return /* @__PURE__ */ R.jsx(b.Provider, { value: w, children: d });
    };
    c.displayName = s + "Provider";
    function u(h, f) {
      var b;
      const d = ((b = f == null ? void 0 : f[t]) == null ? void 0 : b[l]) || a, y = G.useContext(d);
      if (y) return y;
      if (o !== void 0) return o;
      throw new Error(`\`${h}\` must be used within \`${s}\``);
    }
    return [c, u];
  }
  const i = () => {
    const s = n.map((o) => G.createContext(o));
    return function(a) {
      const l = (a == null ? void 0 : a[t]) || s;
      return G.useMemo(
        () => ({ [`__scope${t}`]: { ...a, [t]: l } }),
        [a, l]
      );
    };
  };
  return i.scopeName = t, [r, hl(i, ...e)];
}
function hl(...t) {
  const e = t[0];
  if (t.length === 1) return e;
  const n = () => {
    const r = t.map((i) => ({
      useScope: i(),
      scopeName: i.scopeName
    }));
    return function(s) {
      const o = r.reduce((a, { useScope: l, scopeName: c }) => {
        const h = l(s)[`__scope${c}`];
        return { ...a, ...h };
      }, {});
      return G.useMemo(() => ({ [`__scope${e.scopeName}`]: o }), [o]);
    };
  };
  return n.scopeName = e.scopeName, n;
}
function dl(t) {
  const e = G.useRef(t);
  return G.useEffect(() => {
    e.current = t;
  }), G.useMemo(() => (...n) => {
    var r;
    return (r = e.current) == null ? void 0 : r.call(e, ...n);
  }, []);
}
var gr = globalThis != null && globalThis.document ? G.useLayoutEffect : () => {
}, fl = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "select",
  "span",
  "svg",
  "ul"
], Nr = fl.reduce((t, e) => {
  const n = /* @__PURE__ */ Os(`Primitive.${e}`), r = G.forwardRef((i, s) => {
    const { asChild: o, ...a } = i, l = o ? n : e;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ R.jsx(l, { ...a, ref: s });
  });
  return r.displayName = `Primitive.${e}`, { ...t, [e]: r };
}, {}), mr = { exports: {} }, Gn = {};
/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wi;
function pl() {
  if (wi) return Gn;
  wi = 1;
  var t = Cn;
  function e(h, f) {
    return h === f && (h !== 0 || 1 / h === 1 / f) || h !== h && f !== f;
  }
  var n = typeof Object.is == "function" ? Object.is : e, r = t.useState, i = t.useEffect, s = t.useLayoutEffect, o = t.useDebugValue;
  function a(h, f) {
    var d = f(), y = r({ inst: { value: d, getSnapshot: f } }), b = y[0].inst, w = y[1];
    return s(
      function() {
        b.value = d, b.getSnapshot = f, l(b) && w({ inst: b });
      },
      [h, d, f]
    ), i(
      function() {
        return l(b) && w({ inst: b }), h(function() {
          l(b) && w({ inst: b });
        });
      },
      [h]
    ), o(d), d;
  }
  function l(h) {
    var f = h.getSnapshot;
    h = h.value;
    try {
      var d = f();
      return !n(h, d);
    } catch {
      return !0;
    }
  }
  function c(h, f) {
    return f();
  }
  var u = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? c : a;
  return Gn.useSyncExternalStore = t.useSyncExternalStore !== void 0 ? t.useSyncExternalStore : u, Gn;
}
var Kn = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _i;
function gl() {
  return _i || (_i = 1, process.env.NODE_ENV !== "production" && function() {
    function t(d, y) {
      return d === y && (d !== 0 || 1 / d === 1 / y) || d !== d && y !== y;
    }
    function e(d, y) {
      u || i.startTransition === void 0 || (u = !0, console.error(
        "You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."
      ));
      var b = y();
      if (!h) {
        var w = y();
        s(b, w) || (console.error(
          "The result of getSnapshot should be cached to avoid an infinite loop"
        ), h = !0);
      }
      w = o({
        inst: { value: b, getSnapshot: y }
      });
      var v = w[0].inst, C = w[1];
      return l(
        function() {
          v.value = b, v.getSnapshot = y, n(v) && C({ inst: v });
        },
        [d, b, y]
      ), a(
        function() {
          return n(v) && C({ inst: v }), d(function() {
            n(v) && C({ inst: v });
          });
        },
        [d]
      ), c(b), b;
    }
    function n(d) {
      var y = d.getSnapshot;
      d = d.value;
      try {
        var b = y();
        return !s(d, b);
      } catch {
        return !0;
      }
    }
    function r(d, y) {
      return y();
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var i = Cn, s = typeof Object.is == "function" ? Object.is : t, o = i.useState, a = i.useEffect, l = i.useLayoutEffect, c = i.useDebugValue, u = !1, h = !1, f = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? r : e;
    Kn.useSyncExternalStore = i.useSyncExternalStore !== void 0 ? i.useSyncExternalStore : f, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  }()), Kn;
}
process.env.NODE_ENV === "production" ? mr.exports = pl() : mr.exports = gl();
var ml = mr.exports;
function yl() {
  return ml.useSyncExternalStore(
    bl,
    () => !0,
    () => !1
  );
}
function bl() {
  return () => {
  };
}
var zr = "Avatar", [vl, Rg] = cl(zr), [wl, Bs] = vl(zr), qs = G.forwardRef(
  (t, e) => {
    const { __scopeAvatar: n, ...r } = t, [i, s] = G.useState("idle");
    return /* @__PURE__ */ R.jsx(
      wl,
      {
        scope: n,
        imageLoadingStatus: i,
        onImageLoadingStatusChange: s,
        children: /* @__PURE__ */ R.jsx(Nr.span, { ...r, ref: e })
      }
    );
  }
);
qs.displayName = zr;
var Vs = "AvatarImage", Hs = G.forwardRef(
  (t, e) => {
    const { __scopeAvatar: n, src: r, onLoadingStatusChange: i = () => {
    }, ...s } = t, o = Bs(Vs, n), a = _l(r, s), l = dl((c) => {
      i(c), o.onImageLoadingStatusChange(c);
    });
    return gr(() => {
      a !== "idle" && l(a);
    }, [a, l]), a === "loaded" ? /* @__PURE__ */ R.jsx(Nr.img, { ...s, ref: e, src: r }) : null;
  }
);
Hs.displayName = Vs;
var Ws = "AvatarFallback", Gs = G.forwardRef(
  (t, e) => {
    const { __scopeAvatar: n, delayMs: r, ...i } = t, s = Bs(Ws, n), [o, a] = G.useState(r === void 0);
    return G.useEffect(() => {
      if (r !== void 0) {
        const l = window.setTimeout(() => a(!0), r);
        return () => window.clearTimeout(l);
      }
    }, [r]), o && s.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ R.jsx(Nr.span, { ...i, ref: e }) : null;
  }
);
Gs.displayName = Ws;
function xi(t, e) {
  return t ? e ? (t.src !== e && (t.src = e), t.complete && t.naturalWidth > 0 ? "loaded" : "loading") : "error" : "idle";
}
function _l(t, { referrerPolicy: e, crossOrigin: n }) {
  const r = yl(), i = G.useRef(null), s = r ? (i.current || (i.current = new window.Image()), i.current) : null, [o, a] = G.useState(
    () => xi(s, t)
  );
  return gr(() => {
    a(xi(s, t));
  }, [s, t]), gr(() => {
    const l = (h) => () => {
      a(h);
    };
    if (!s) return;
    const c = l("loaded"), u = l("error");
    return s.addEventListener("load", c), s.addEventListener("error", u), e && (s.referrerPolicy = e), typeof n == "string" && (s.crossOrigin = n), () => {
      s.removeEventListener("load", c), s.removeEventListener("error", u);
    };
  }, [s, n, e]), o;
}
var Ks = qs, Js = Hs, Ys = Gs;
const Xs = G.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ R.jsx(
  Ks,
  {
    ref: n,
    className: mt(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      t
    ),
    ...e
  }
));
Xs.displayName = Ks.displayName;
const Qs = G.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ R.jsx(
  Js,
  {
    ref: n,
    className: mt("aspect-square h-full w-full", t),
    ...e
  }
));
Qs.displayName = Js.displayName;
const Zs = G.forwardRef(({ className: t, ...e }, n) => /* @__PURE__ */ R.jsx(
  Ys,
  {
    ref: n,
    className: mt(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      t
    ),
    ...e
  }
));
Zs.displayName = Ys.displayName;
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const xl = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), eo = (...t) => t.filter((e, n, r) => !!e && e.trim() !== "" && r.indexOf(e) === n).join(" ").trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var kl = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sl = Ps(
  ({
    color: t = "currentColor",
    size: e = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: i = "",
    children: s,
    iconNode: o,
    ...a
  }, l) => dr(
    "svg",
    {
      ref: l,
      ...kl,
      width: e,
      height: e,
      stroke: t,
      strokeWidth: r ? Number(n) * 24 / Number(e) : n,
      className: eo("lucide", i),
      ...a
    },
    [
      ...o.map(([c, u]) => dr(c, u)),
      ...Array.isArray(s) ? s : [s]
    ]
  )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const to = (t, e) => {
  const n = Ps(
    ({ className: r, ...i }, s) => dr(Sl, {
      ref: s,
      iconNode: e,
      className: eo(`lucide-${xl(t)}`, r),
      ...i
    })
  );
  return n.displayName = `${t}`, n;
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ki = to("MessageSquare", [
  ["path", { d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z", key: "1lielz" }]
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const El = to("Send", [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
]), Cl = (t) => {
  let e;
  return t ? e = t : typeof fetch > "u" ? e = (...n) => Promise.resolve().then(() => Lt).then(({ default: r }) => r(...n)) : e = fetch, (...n) => e(...n);
};
class Mr extends Error {
  constructor(e, n = "FunctionsError", r) {
    super(e), this.name = n, this.context = r;
  }
}
class Tl extends Mr {
  constructor(e) {
    super("Failed to send a request to the Edge Function", "FunctionsFetchError", e);
  }
}
class Al extends Mr {
  constructor(e) {
    super("Relay Error invoking the Edge Function", "FunctionsRelayError", e);
  }
}
class Pl extends Mr {
  constructor(e) {
    super("Edge Function returned a non-2xx status code", "FunctionsHttpError", e);
  }
}
var yr;
(function(t) {
  t.Any = "any", t.ApNortheast1 = "ap-northeast-1", t.ApNortheast2 = "ap-northeast-2", t.ApSouth1 = "ap-south-1", t.ApSoutheast1 = "ap-southeast-1", t.ApSoutheast2 = "ap-southeast-2", t.CaCentral1 = "ca-central-1", t.EuCentral1 = "eu-central-1", t.EuWest1 = "eu-west-1", t.EuWest2 = "eu-west-2", t.EuWest3 = "eu-west-3", t.SaEast1 = "sa-east-1", t.UsEast1 = "us-east-1", t.UsWest1 = "us-west-1", t.UsWest2 = "us-west-2";
})(yr || (yr = {}));
var Il = function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(u) {
      try {
        c(r.next(u));
      } catch (h) {
        o(h);
      }
    }
    function l(u) {
      try {
        c(r.throw(u));
      } catch (h) {
        o(h);
      }
    }
    function c(u) {
      u.done ? s(u.value) : i(u.value).then(a, l);
    }
    c((r = r.apply(t, e || [])).next());
  });
};
class Ol {
  constructor(e, { headers: n = {}, customFetch: r, region: i = yr.Any } = {}) {
    this.url = e, this.headers = n, this.region = i, this.fetch = Cl(r);
  }
  /**
   * Updates the authorization header
   * @param token - the new jwt token sent in the authorisation header
   */
  setAuth(e) {
    this.headers.Authorization = `Bearer ${e}`;
  }
  /**
   * Invokes a function
   * @param functionName - The name of the Function to invoke.
   * @param options - Options for invoking the Function.
   */
  invoke(e, n = {}) {
    var r;
    return Il(this, void 0, void 0, function* () {
      try {
        const { headers: i, method: s, body: o } = n;
        let a = {}, { region: l } = n;
        l || (l = this.region), l && l !== "any" && (a["x-region"] = l);
        let c;
        o && (i && !Object.prototype.hasOwnProperty.call(i, "Content-Type") || !i) && (typeof Blob < "u" && o instanceof Blob || o instanceof ArrayBuffer ? (a["Content-Type"] = "application/octet-stream", c = o) : typeof o == "string" ? (a["Content-Type"] = "text/plain", c = o) : typeof FormData < "u" && o instanceof FormData ? c = o : (a["Content-Type"] = "application/json", c = JSON.stringify(o)));
        const u = yield this.fetch(`${this.url}/${e}`, {
          method: s || "POST",
          // headers priority is (high to low):
          // 1. invoke-level headers
          // 2. client-level headers
          // 3. default Content-Type header
          headers: Object.assign(Object.assign(Object.assign({}, a), this.headers), i),
          body: c
        }).catch((y) => {
          throw new Tl(y);
        }), h = u.headers.get("x-relay-error");
        if (h && h === "true")
          throw new Al(u);
        if (!u.ok)
          throw new Pl(u);
        let f = ((r = u.headers.get("Content-Type")) !== null && r !== void 0 ? r : "text/plain").split(";")[0].trim(), d;
        return f === "application/json" ? d = yield u.json() : f === "application/octet-stream" ? d = yield u.blob() : f === "text/event-stream" ? d = u : f === "multipart/form-data" ? d = yield u.formData() : d = yield u.text(), { data: d, error: null };
      } catch (i) {
        return { data: null, error: i };
      }
    });
  }
}
var Se = {}, Fr = {}, Tn = {}, rn = {}, An = {}, Pn = {}, Rl = function() {
  if (typeof self < "u")
    return self;
  if (typeof window < "u")
    return window;
  if (typeof global < "u")
    return global;
  throw new Error("unable to locate global object");
}, Rt = Rl();
const jl = Rt.fetch, no = Rt.fetch.bind(Rt), ro = Rt.Headers, Ll = Rt.Request, $l = Rt.Response, Lt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Headers: ro,
  Request: Ll,
  Response: $l,
  default: no,
  fetch: jl
}, Symbol.toStringTag, { value: "Module" })), Dl = /* @__PURE__ */ wa(Lt);
var In = {};
Object.defineProperty(In, "__esModule", { value: !0 });
let Nl = class extends Error {
  constructor(e) {
    super(e.message), this.name = "PostgrestError", this.details = e.details, this.hint = e.hint, this.code = e.code;
  }
};
In.default = Nl;
var io = ye && ye.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Pn, "__esModule", { value: !0 });
const zl = io(Dl), Ml = io(In);
let Fl = class {
  constructor(e) {
    this.shouldThrowOnError = !1, this.method = e.method, this.url = e.url, this.headers = e.headers, this.schema = e.schema, this.body = e.body, this.shouldThrowOnError = e.shouldThrowOnError, this.signal = e.signal, this.isMaybeSingle = e.isMaybeSingle, e.fetch ? this.fetch = e.fetch : typeof fetch > "u" ? this.fetch = zl.default : this.fetch = fetch;
  }
  /**
   * If there's an error with the query, throwOnError will reject the promise by
   * throwing the error instead of returning it as part of a successful response.
   *
   * {@link https://github.com/supabase/supabase-js/issues/92}
   */
  throwOnError() {
    return this.shouldThrowOnError = !0, this;
  }
  /**
   * Set an HTTP header for the request.
   */
  setHeader(e, n) {
    return this.headers = Object.assign({}, this.headers), this.headers[e] = n, this;
  }
  then(e, n) {
    this.schema === void 0 || (["GET", "HEAD"].includes(this.method) ? this.headers["Accept-Profile"] = this.schema : this.headers["Content-Profile"] = this.schema), this.method !== "GET" && this.method !== "HEAD" && (this.headers["Content-Type"] = "application/json");
    const r = this.fetch;
    let i = r(this.url.toString(), {
      method: this.method,
      headers: this.headers,
      body: JSON.stringify(this.body),
      signal: this.signal
    }).then(async (s) => {
      var o, a, l;
      let c = null, u = null, h = null, f = s.status, d = s.statusText;
      if (s.ok) {
        if (this.method !== "HEAD") {
          const v = await s.text();
          v === "" || (this.headers.Accept === "text/csv" || this.headers.Accept && this.headers.Accept.includes("application/vnd.pgrst.plan+text") ? u = v : u = JSON.parse(v));
        }
        const b = (o = this.headers.Prefer) === null || o === void 0 ? void 0 : o.match(/count=(exact|planned|estimated)/), w = (a = s.headers.get("content-range")) === null || a === void 0 ? void 0 : a.split("/");
        b && w && w.length > 1 && (h = parseInt(w[1])), this.isMaybeSingle && this.method === "GET" && Array.isArray(u) && (u.length > 1 ? (c = {
          // https://github.com/PostgREST/postgrest/blob/a867d79c42419af16c18c3fb019eba8df992626f/src/PostgREST/Error.hs#L553
          code: "PGRST116",
          details: `Results contain ${u.length} rows, application/vnd.pgrst.object+json requires 1 row`,
          hint: null,
          message: "JSON object requested, multiple (or no) rows returned"
        }, u = null, h = null, f = 406, d = "Not Acceptable") : u.length === 1 ? u = u[0] : u = null);
      } else {
        const b = await s.text();
        try {
          c = JSON.parse(b), Array.isArray(c) && s.status === 404 && (u = [], c = null, f = 200, d = "OK");
        } catch {
          s.status === 404 && b === "" ? (f = 204, d = "No Content") : c = {
            message: b
          };
        }
        if (c && this.isMaybeSingle && (!((l = c == null ? void 0 : c.details) === null || l === void 0) && l.includes("0 rows")) && (c = null, f = 200, d = "OK"), c && this.shouldThrowOnError)
          throw new Ml.default(c);
      }
      return {
        error: c,
        data: u,
        count: h,
        status: f,
        statusText: d
      };
    });
    return this.shouldThrowOnError || (i = i.catch((s) => {
      var o, a, l;
      return {
        error: {
          message: `${(o = s == null ? void 0 : s.name) !== null && o !== void 0 ? o : "FetchError"}: ${s == null ? void 0 : s.message}`,
          details: `${(a = s == null ? void 0 : s.stack) !== null && a !== void 0 ? a : ""}`,
          hint: "",
          code: `${(l = s == null ? void 0 : s.code) !== null && l !== void 0 ? l : ""}`
        },
        data: null,
        count: null,
        status: 0,
        statusText: ""
      };
    })), i.then(e, n);
  }
  /**
   * Override the type of the returned `data`.
   *
   * @typeParam NewResult - The new result type to override with
   * @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
   */
  returns() {
    return this;
  }
  /**
   * Override the type of the returned `data` field in the response.
   *
   * @typeParam NewResult - The new type to cast the response data to
   * @typeParam Options - Optional type configuration (defaults to { merge: true })
   * @typeParam Options.merge - When true, merges the new type with existing return type. When false, replaces the existing types entirely (defaults to true)
   * @example
   * ```typescript
   * // Merge with existing types (default behavior)
   * const query = supabase
   *   .from('users')
   *   .select()
   *   .overrideTypes<{ custom_field: string }>()
   *
   * // Replace existing types completely
   * const replaceQuery = supabase
   *   .from('users')
   *   .select()
   *   .overrideTypes<{ id: number; name: string }, { merge: false }>()
   * ```
   * @returns A PostgrestBuilder instance with the new type
   */
  overrideTypes() {
    return this;
  }
};
Pn.default = Fl;
var Ul = ye && ye.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(An, "__esModule", { value: !0 });
const Bl = Ul(Pn);
let ql = class extends Bl.default {
  /**
   * Perform a SELECT on the query result.
   *
   * By default, `.insert()`, `.update()`, `.upsert()`, and `.delete()` do not
   * return modified rows. By calling this method, modified rows are returned in
   * `data`.
   *
   * @param columns - The columns to retrieve, separated by commas
   */
  select(e) {
    let n = !1;
    const r = (e ?? "*").split("").map((i) => /\s/.test(i) && !n ? "" : (i === '"' && (n = !n), i)).join("");
    return this.url.searchParams.set("select", r), this.headers.Prefer && (this.headers.Prefer += ","), this.headers.Prefer += "return=representation", this;
  }
  /**
   * Order the query result by `column`.
   *
   * You can call this method multiple times to order by multiple columns.
   *
   * You can order referenced tables, but it only affects the ordering of the
   * parent table if you use `!inner` in the query.
   *
   * @param column - The column to order by
   * @param options - Named parameters
   * @param options.ascending - If `true`, the result will be in ascending order
   * @param options.nullsFirst - If `true`, `null`s appear first. If `false`,
   * `null`s appear last.
   * @param options.referencedTable - Set this to order a referenced table by
   * its columns
   * @param options.foreignTable - Deprecated, use `options.referencedTable`
   * instead
   */
  order(e, { ascending: n = !0, nullsFirst: r, foreignTable: i, referencedTable: s = i } = {}) {
    const o = s ? `${s}.order` : "order", a = this.url.searchParams.get(o);
    return this.url.searchParams.set(o, `${a ? `${a},` : ""}${e}.${n ? "asc" : "desc"}${r === void 0 ? "" : r ? ".nullsfirst" : ".nullslast"}`), this;
  }
  /**
   * Limit the query result by `count`.
   *
   * @param count - The maximum number of rows to return
   * @param options - Named parameters
   * @param options.referencedTable - Set this to limit rows of referenced
   * tables instead of the parent table
   * @param options.foreignTable - Deprecated, use `options.referencedTable`
   * instead
   */
  limit(e, { foreignTable: n, referencedTable: r = n } = {}) {
    const i = typeof r > "u" ? "limit" : `${r}.limit`;
    return this.url.searchParams.set(i, `${e}`), this;
  }
  /**
   * Limit the query result by starting at an offset `from` and ending at the offset `to`.
   * Only records within this range are returned.
   * This respects the query order and if there is no order clause the range could behave unexpectedly.
   * The `from` and `to` values are 0-based and inclusive: `range(1, 3)` will include the second, third
   * and fourth rows of the query.
   *
   * @param from - The starting index from which to limit the result
   * @param to - The last index to which to limit the result
   * @param options - Named parameters
   * @param options.referencedTable - Set this to limit rows of referenced
   * tables instead of the parent table
   * @param options.foreignTable - Deprecated, use `options.referencedTable`
   * instead
   */
  range(e, n, { foreignTable: r, referencedTable: i = r } = {}) {
    const s = typeof i > "u" ? "offset" : `${i}.offset`, o = typeof i > "u" ? "limit" : `${i}.limit`;
    return this.url.searchParams.set(s, `${e}`), this.url.searchParams.set(o, `${n - e + 1}`), this;
  }
  /**
   * Set the AbortSignal for the fetch request.
   *
   * @param signal - The AbortSignal to use for the fetch request
   */
  abortSignal(e) {
    return this.signal = e, this;
  }
  /**
   * Return `data` as a single object instead of an array of objects.
   *
   * Query result must be one row (e.g. using `.limit(1)`), otherwise this
   * returns an error.
   */
  single() {
    return this.headers.Accept = "application/vnd.pgrst.object+json", this;
  }
  /**
   * Return `data` as a single object instead of an array of objects.
   *
   * Query result must be zero or one row (e.g. using `.limit(1)`), otherwise
   * this returns an error.
   */
  maybeSingle() {
    return this.method === "GET" ? this.headers.Accept = "application/json" : this.headers.Accept = "application/vnd.pgrst.object+json", this.isMaybeSingle = !0, this;
  }
  /**
   * Return `data` as a string in CSV format.
   */
  csv() {
    return this.headers.Accept = "text/csv", this;
  }
  /**
   * Return `data` as an object in [GeoJSON](https://geojson.org) format.
   */
  geojson() {
    return this.headers.Accept = "application/geo+json", this;
  }
  /**
   * Return `data` as the EXPLAIN plan for the query.
   *
   * You need to enable the
   * [db_plan_enabled](https://supabase.com/docs/guides/database/debugging-performance#enabling-explain)
   * setting before using this method.
   *
   * @param options - Named parameters
   *
   * @param options.analyze - If `true`, the query will be executed and the
   * actual run time will be returned
   *
   * @param options.verbose - If `true`, the query identifier will be returned
   * and `data` will include the output columns of the query
   *
   * @param options.settings - If `true`, include information on configuration
   * parameters that affect query planning
   *
   * @param options.buffers - If `true`, include information on buffer usage
   *
   * @param options.wal - If `true`, include information on WAL record generation
   *
   * @param options.format - The format of the output, can be `"text"` (default)
   * or `"json"`
   */
  explain({ analyze: e = !1, verbose: n = !1, settings: r = !1, buffers: i = !1, wal: s = !1, format: o = "text" } = {}) {
    var a;
    const l = [
      e ? "analyze" : null,
      n ? "verbose" : null,
      r ? "settings" : null,
      i ? "buffers" : null,
      s ? "wal" : null
    ].filter(Boolean).join("|"), c = (a = this.headers.Accept) !== null && a !== void 0 ? a : "application/json";
    return this.headers.Accept = `application/vnd.pgrst.plan+${o}; for="${c}"; options=${l};`, o === "json" ? this : this;
  }
  /**
   * Rollback the query.
   *
   * `data` will still be returned, but the query is not committed.
   */
  rollback() {
    var e;
    return ((e = this.headers.Prefer) !== null && e !== void 0 ? e : "").trim().length > 0 ? this.headers.Prefer += ",tx=rollback" : this.headers.Prefer = "tx=rollback", this;
  }
  /**
   * Override the type of the returned `data`.
   *
   * @typeParam NewResult - The new result type to override with
   * @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
   */
  returns() {
    return this;
  }
};
An.default = ql;
var Vl = ye && ye.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(rn, "__esModule", { value: !0 });
const Hl = Vl(An);
let Wl = class extends Hl.default {
  /**
   * Match only rows where `column` is equal to `value`.
   *
   * To check if the value of `column` is NULL, you should use `.is()` instead.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  eq(e, n) {
    return this.url.searchParams.append(e, `eq.${n}`), this;
  }
  /**
   * Match only rows where `column` is not equal to `value`.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  neq(e, n) {
    return this.url.searchParams.append(e, `neq.${n}`), this;
  }
  /**
   * Match only rows where `column` is greater than `value`.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  gt(e, n) {
    return this.url.searchParams.append(e, `gt.${n}`), this;
  }
  /**
   * Match only rows where `column` is greater than or equal to `value`.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  gte(e, n) {
    return this.url.searchParams.append(e, `gte.${n}`), this;
  }
  /**
   * Match only rows where `column` is less than `value`.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  lt(e, n) {
    return this.url.searchParams.append(e, `lt.${n}`), this;
  }
  /**
   * Match only rows where `column` is less than or equal to `value`.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  lte(e, n) {
    return this.url.searchParams.append(e, `lte.${n}`), this;
  }
  /**
   * Match only rows where `column` matches `pattern` case-sensitively.
   *
   * @param column - The column to filter on
   * @param pattern - The pattern to match with
   */
  like(e, n) {
    return this.url.searchParams.append(e, `like.${n}`), this;
  }
  /**
   * Match only rows where `column` matches all of `patterns` case-sensitively.
   *
   * @param column - The column to filter on
   * @param patterns - The patterns to match with
   */
  likeAllOf(e, n) {
    return this.url.searchParams.append(e, `like(all).{${n.join(",")}}`), this;
  }
  /**
   * Match only rows where `column` matches any of `patterns` case-sensitively.
   *
   * @param column - The column to filter on
   * @param patterns - The patterns to match with
   */
  likeAnyOf(e, n) {
    return this.url.searchParams.append(e, `like(any).{${n.join(",")}}`), this;
  }
  /**
   * Match only rows where `column` matches `pattern` case-insensitively.
   *
   * @param column - The column to filter on
   * @param pattern - The pattern to match with
   */
  ilike(e, n) {
    return this.url.searchParams.append(e, `ilike.${n}`), this;
  }
  /**
   * Match only rows where `column` matches all of `patterns` case-insensitively.
   *
   * @param column - The column to filter on
   * @param patterns - The patterns to match with
   */
  ilikeAllOf(e, n) {
    return this.url.searchParams.append(e, `ilike(all).{${n.join(",")}}`), this;
  }
  /**
   * Match only rows where `column` matches any of `patterns` case-insensitively.
   *
   * @param column - The column to filter on
   * @param patterns - The patterns to match with
   */
  ilikeAnyOf(e, n) {
    return this.url.searchParams.append(e, `ilike(any).{${n.join(",")}}`), this;
  }
  /**
   * Match only rows where `column` IS `value`.
   *
   * For non-boolean columns, this is only relevant for checking if the value of
   * `column` is NULL by setting `value` to `null`.
   *
   * For boolean columns, you can also set `value` to `true` or `false` and it
   * will behave the same way as `.eq()`.
   *
   * @param column - The column to filter on
   * @param value - The value to filter with
   */
  is(e, n) {
    return this.url.searchParams.append(e, `is.${n}`), this;
  }
  /**
   * Match only rows where `column` is included in the `values` array.
   *
   * @param column - The column to filter on
   * @param values - The values array to filter with
   */
  in(e, n) {
    const r = Array.from(new Set(n)).map((i) => typeof i == "string" && new RegExp("[,()]").test(i) ? `"${i}"` : `${i}`).join(",");
    return this.url.searchParams.append(e, `in.(${r})`), this;
  }
  /**
   * Only relevant for jsonb, array, and range columns. Match only rows where
   * `column` contains every element appearing in `value`.
   *
   * @param column - The jsonb, array, or range column to filter on
   * @param value - The jsonb, array, or range value to filter with
   */
  contains(e, n) {
    return typeof n == "string" ? this.url.searchParams.append(e, `cs.${n}`) : Array.isArray(n) ? this.url.searchParams.append(e, `cs.{${n.join(",")}}`) : this.url.searchParams.append(e, `cs.${JSON.stringify(n)}`), this;
  }
  /**
   * Only relevant for jsonb, array, and range columns. Match only rows where
   * every element appearing in `column` is contained by `value`.
   *
   * @param column - The jsonb, array, or range column to filter on
   * @param value - The jsonb, array, or range value to filter with
   */
  containedBy(e, n) {
    return typeof n == "string" ? this.url.searchParams.append(e, `cd.${n}`) : Array.isArray(n) ? this.url.searchParams.append(e, `cd.{${n.join(",")}}`) : this.url.searchParams.append(e, `cd.${JSON.stringify(n)}`), this;
  }
  /**
   * Only relevant for range columns. Match only rows where every element in
   * `column` is greater than any element in `range`.
   *
   * @param column - The range column to filter on
   * @param range - The range to filter with
   */
  rangeGt(e, n) {
    return this.url.searchParams.append(e, `sr.${n}`), this;
  }
  /**
   * Only relevant for range columns. Match only rows where every element in
   * `column` is either contained in `range` or greater than any element in
   * `range`.
   *
   * @param column - The range column to filter on
   * @param range - The range to filter with
   */
  rangeGte(e, n) {
    return this.url.searchParams.append(e, `nxl.${n}`), this;
  }
  /**
   * Only relevant for range columns. Match only rows where every element in
   * `column` is less than any element in `range`.
   *
   * @param column - The range column to filter on
   * @param range - The range to filter with
   */
  rangeLt(e, n) {
    return this.url.searchParams.append(e, `sl.${n}`), this;
  }
  /**
   * Only relevant for range columns. Match only rows where every element in
   * `column` is either contained in `range` or less than any element in
   * `range`.
   *
   * @param column - The range column to filter on
   * @param range - The range to filter with
   */
  rangeLte(e, n) {
    return this.url.searchParams.append(e, `nxr.${n}`), this;
  }
  /**
   * Only relevant for range columns. Match only rows where `column` is
   * mutually exclusive to `range` and there can be no element between the two
   * ranges.
   *
   * @param column - The range column to filter on
   * @param range - The range to filter with
   */
  rangeAdjacent(e, n) {
    return this.url.searchParams.append(e, `adj.${n}`), this;
  }
  /**
   * Only relevant for array and range columns. Match only rows where
   * `column` and `value` have an element in common.
   *
   * @param column - The array or range column to filter on
   * @param value - The array or range value to filter with
   */
  overlaps(e, n) {
    return typeof n == "string" ? this.url.searchParams.append(e, `ov.${n}`) : this.url.searchParams.append(e, `ov.{${n.join(",")}}`), this;
  }
  /**
   * Only relevant for text and tsvector columns. Match only rows where
   * `column` matches the query string in `query`.
   *
   * @param column - The text or tsvector column to filter on
   * @param query - The query text to match with
   * @param options - Named parameters
   * @param options.config - The text search configuration to use
   * @param options.type - Change how the `query` text is interpreted
   */
  textSearch(e, n, { config: r, type: i } = {}) {
    let s = "";
    i === "plain" ? s = "pl" : i === "phrase" ? s = "ph" : i === "websearch" && (s = "w");
    const o = r === void 0 ? "" : `(${r})`;
    return this.url.searchParams.append(e, `${s}fts${o}.${n}`), this;
  }
  /**
   * Match only rows where each column in `query` keys is equal to its
   * associated value. Shorthand for multiple `.eq()`s.
   *
   * @param query - The object to filter with, with column names as keys mapped
   * to their filter values
   */
  match(e) {
    return Object.entries(e).forEach(([n, r]) => {
      this.url.searchParams.append(n, `eq.${r}`);
    }), this;
  }
  /**
   * Match only rows which doesn't satisfy the filter.
   *
   * Unlike most filters, `opearator` and `value` are used as-is and need to
   * follow [PostgREST
   * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
   * to make sure they are properly sanitized.
   *
   * @param column - The column to filter on
   * @param operator - The operator to be negated to filter with, following
   * PostgREST syntax
   * @param value - The value to filter with, following PostgREST syntax
   */
  not(e, n, r) {
    return this.url.searchParams.append(e, `not.${n}.${r}`), this;
  }
  /**
   * Match only rows which satisfy at least one of the filters.
   *
   * Unlike most filters, `filters` is used as-is and needs to follow [PostgREST
   * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
   * to make sure it's properly sanitized.
   *
   * It's currently not possible to do an `.or()` filter across multiple tables.
   *
   * @param filters - The filters to use, following PostgREST syntax
   * @param options - Named parameters
   * @param options.referencedTable - Set this to filter on referenced tables
   * instead of the parent table
   * @param options.foreignTable - Deprecated, use `referencedTable` instead
   */
  or(e, { foreignTable: n, referencedTable: r = n } = {}) {
    const i = r ? `${r}.or` : "or";
    return this.url.searchParams.append(i, `(${e})`), this;
  }
  /**
   * Match only rows which satisfy the filter. This is an escape hatch - you
   * should use the specific filter methods wherever possible.
   *
   * Unlike most filters, `opearator` and `value` are used as-is and need to
   * follow [PostgREST
   * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
   * to make sure they are properly sanitized.
   *
   * @param column - The column to filter on
   * @param operator - The operator to filter with, following PostgREST syntax
   * @param value - The value to filter with, following PostgREST syntax
   */
  filter(e, n, r) {
    return this.url.searchParams.append(e, `${n}.${r}`), this;
  }
};
rn.default = Wl;
var Gl = ye && ye.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Tn, "__esModule", { value: !0 });
const Vt = Gl(rn);
let Kl = class {
  constructor(e, { headers: n = {}, schema: r, fetch: i }) {
    this.url = e, this.headers = n, this.schema = r, this.fetch = i;
  }
  /**
   * Perform a SELECT query on the table or view.
   *
   * @param columns - The columns to retrieve, separated by commas. Columns can be renamed when returned with `customName:columnName`
   *
   * @param options - Named parameters
   *
   * @param options.head - When set to `true`, `data` will not be returned.
   * Useful if you only need the count.
   *
   * @param options.count - Count algorithm to use to count rows in the table or view.
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   */
  select(e, { head: n = !1, count: r } = {}) {
    const i = n ? "HEAD" : "GET";
    let s = !1;
    const o = (e ?? "*").split("").map((a) => /\s/.test(a) && !s ? "" : (a === '"' && (s = !s), a)).join("");
    return this.url.searchParams.set("select", o), r && (this.headers.Prefer = `count=${r}`), new Vt.default({
      method: i,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      fetch: this.fetch,
      allowEmpty: !1
    });
  }
  /**
   * Perform an INSERT into the table or view.
   *
   * By default, inserted rows are not returned. To return it, chain the call
   * with `.select()`.
   *
   * @param values - The values to insert. Pass an object to insert a single row
   * or an array to insert multiple rows.
   *
   * @param options - Named parameters
   *
   * @param options.count - Count algorithm to use to count inserted rows.
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   *
   * @param options.defaultToNull - Make missing fields default to `null`.
   * Otherwise, use the default value for the column. Only applies for bulk
   * inserts.
   */
  insert(e, { count: n, defaultToNull: r = !0 } = {}) {
    const i = "POST", s = [];
    if (this.headers.Prefer && s.push(this.headers.Prefer), n && s.push(`count=${n}`), r || s.push("missing=default"), this.headers.Prefer = s.join(","), Array.isArray(e)) {
      const o = e.reduce((a, l) => a.concat(Object.keys(l)), []);
      if (o.length > 0) {
        const a = [...new Set(o)].map((l) => `"${l}"`);
        this.url.searchParams.set("columns", a.join(","));
      }
    }
    return new Vt.default({
      method: i,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      body: e,
      fetch: this.fetch,
      allowEmpty: !1
    });
  }
  /**
   * Perform an UPSERT on the table or view. Depending on the column(s) passed
   * to `onConflict`, `.upsert()` allows you to perform the equivalent of
   * `.insert()` if a row with the corresponding `onConflict` columns doesn't
   * exist, or if it does exist, perform an alternative action depending on
   * `ignoreDuplicates`.
   *
   * By default, upserted rows are not returned. To return it, chain the call
   * with `.select()`.
   *
   * @param values - The values to upsert with. Pass an object to upsert a
   * single row or an array to upsert multiple rows.
   *
   * @param options - Named parameters
   *
   * @param options.onConflict - Comma-separated UNIQUE column(s) to specify how
   * duplicate rows are determined. Two rows are duplicates if all the
   * `onConflict` columns are equal.
   *
   * @param options.ignoreDuplicates - If `true`, duplicate rows are ignored. If
   * `false`, duplicate rows are merged with existing rows.
   *
   * @param options.count - Count algorithm to use to count upserted rows.
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   *
   * @param options.defaultToNull - Make missing fields default to `null`.
   * Otherwise, use the default value for the column. This only applies when
   * inserting new rows, not when merging with existing rows under
   * `ignoreDuplicates: false`. This also only applies when doing bulk upserts.
   */
  upsert(e, { onConflict: n, ignoreDuplicates: r = !1, count: i, defaultToNull: s = !0 } = {}) {
    const o = "POST", a = [`resolution=${r ? "ignore" : "merge"}-duplicates`];
    if (n !== void 0 && this.url.searchParams.set("on_conflict", n), this.headers.Prefer && a.push(this.headers.Prefer), i && a.push(`count=${i}`), s || a.push("missing=default"), this.headers.Prefer = a.join(","), Array.isArray(e)) {
      const l = e.reduce((c, u) => c.concat(Object.keys(u)), []);
      if (l.length > 0) {
        const c = [...new Set(l)].map((u) => `"${u}"`);
        this.url.searchParams.set("columns", c.join(","));
      }
    }
    return new Vt.default({
      method: o,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      body: e,
      fetch: this.fetch,
      allowEmpty: !1
    });
  }
  /**
   * Perform an UPDATE on the table or view.
   *
   * By default, updated rows are not returned. To return it, chain the call
   * with `.select()` after filters.
   *
   * @param values - The values to update with
   *
   * @param options - Named parameters
   *
   * @param options.count - Count algorithm to use to count updated rows.
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   */
  update(e, { count: n } = {}) {
    const r = "PATCH", i = [];
    return this.headers.Prefer && i.push(this.headers.Prefer), n && i.push(`count=${n}`), this.headers.Prefer = i.join(","), new Vt.default({
      method: r,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      body: e,
      fetch: this.fetch,
      allowEmpty: !1
    });
  }
  /**
   * Perform a DELETE on the table or view.
   *
   * By default, deleted rows are not returned. To return it, chain the call
   * with `.select()` after filters.
   *
   * @param options - Named parameters
   *
   * @param options.count - Count algorithm to use to count deleted rows.
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   */
  delete({ count: e } = {}) {
    const n = "DELETE", r = [];
    return e && r.push(`count=${e}`), this.headers.Prefer && r.unshift(this.headers.Prefer), this.headers.Prefer = r.join(","), new Vt.default({
      method: n,
      url: this.url,
      headers: this.headers,
      schema: this.schema,
      fetch: this.fetch,
      allowEmpty: !1
    });
  }
};
Tn.default = Kl;
var On = {}, Rn = {};
Object.defineProperty(Rn, "__esModule", { value: !0 });
Rn.version = void 0;
Rn.version = "0.0.0-automated";
Object.defineProperty(On, "__esModule", { value: !0 });
On.DEFAULT_HEADERS = void 0;
const Jl = Rn;
On.DEFAULT_HEADERS = { "X-Client-Info": `postgrest-js/${Jl.version}` };
var so = ye && ye.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Fr, "__esModule", { value: !0 });
const Yl = so(Tn), Xl = so(rn), Ql = On;
let Zl = class oo {
  // TODO: Add back shouldThrowOnError once we figure out the typings
  /**
   * Creates a PostgREST client.
   *
   * @param url - URL of the PostgREST endpoint
   * @param options - Named parameters
   * @param options.headers - Custom headers
   * @param options.schema - Postgres schema to switch to
   * @param options.fetch - Custom fetch
   */
  constructor(e, { headers: n = {}, schema: r, fetch: i } = {}) {
    this.url = e, this.headers = Object.assign(Object.assign({}, Ql.DEFAULT_HEADERS), n), this.schemaName = r, this.fetch = i;
  }
  /**
   * Perform a query on a table or a view.
   *
   * @param relation - The table or view name to query
   */
  from(e) {
    const n = new URL(`${this.url}/${e}`);
    return new Yl.default(n, {
      headers: Object.assign({}, this.headers),
      schema: this.schemaName,
      fetch: this.fetch
    });
  }
  /**
   * Select a schema to query or perform an function (rpc) call.
   *
   * The schema needs to be on the list of exposed schemas inside Supabase.
   *
   * @param schema - The schema to query
   */
  schema(e) {
    return new oo(this.url, {
      headers: this.headers,
      schema: e,
      fetch: this.fetch
    });
  }
  /**
   * Perform a function call.
   *
   * @param fn - The function name to call
   * @param args - The arguments to pass to the function call
   * @param options - Named parameters
   * @param options.head - When set to `true`, `data` will not be returned.
   * Useful if you only need the count.
   * @param options.get - When set to `true`, the function will be called with
   * read-only access mode.
   * @param options.count - Count algorithm to use to count rows returned by the
   * function. Only applicable for [set-returning
   * functions](https://www.postgresql.org/docs/current/functions-srf.html).
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   */
  rpc(e, n = {}, { head: r = !1, get: i = !1, count: s } = {}) {
    let o;
    const a = new URL(`${this.url}/rpc/${e}`);
    let l;
    r || i ? (o = r ? "HEAD" : "GET", Object.entries(n).filter(([u, h]) => h !== void 0).map(([u, h]) => [u, Array.isArray(h) ? `{${h.join(",")}}` : `${h}`]).forEach(([u, h]) => {
      a.searchParams.append(u, h);
    })) : (o = "POST", l = n);
    const c = Object.assign({}, this.headers);
    return s && (c.Prefer = `count=${s}`), new Xl.default({
      method: o,
      url: a,
      headers: c,
      schema: this.schemaName,
      body: l,
      fetch: this.fetch,
      allowEmpty: !1
    });
  }
};
Fr.default = Zl;
var $t = ye && ye.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Se, "__esModule", { value: !0 });
Se.PostgrestError = Se.PostgrestBuilder = Se.PostgrestTransformBuilder = Se.PostgrestFilterBuilder = Se.PostgrestQueryBuilder = Se.PostgrestClient = void 0;
const ao = $t(Fr);
Se.PostgrestClient = ao.default;
const lo = $t(Tn);
Se.PostgrestQueryBuilder = lo.default;
const uo = $t(rn);
Se.PostgrestFilterBuilder = uo.default;
const co = $t(An);
Se.PostgrestTransformBuilder = co.default;
const ho = $t(Pn);
Se.PostgrestBuilder = ho.default;
const fo = $t(In);
Se.PostgrestError = fo.default;
var eu = Se.default = {
  PostgrestClient: ao.default,
  PostgrestQueryBuilder: lo.default,
  PostgrestFilterBuilder: uo.default,
  PostgrestTransformBuilder: co.default,
  PostgrestBuilder: ho.default,
  PostgrestError: fo.default
};
const {
  PostgrestClient: tu,
  PostgrestQueryBuilder: zg,
  PostgrestFilterBuilder: Mg,
  PostgrestTransformBuilder: Fg,
  PostgrestBuilder: Ug,
  PostgrestError: Bg
} = eu;
function nu() {
  if (typeof WebSocket < "u")
    return WebSocket;
  if (typeof global.WebSocket < "u")
    return global.WebSocket;
  if (typeof window.WebSocket < "u")
    return window.WebSocket;
  if (typeof self.WebSocket < "u")
    return self.WebSocket;
  throw new Error("`WebSocket` is not supported in this environment");
}
const ru = nu(), iu = "2.11.15", su = `realtime-js/${iu}`, ou = "1.0.0", po = 1e4, au = 1e3;
var Kt;
(function(t) {
  t[t.connecting = 0] = "connecting", t[t.open = 1] = "open", t[t.closing = 2] = "closing", t[t.closed = 3] = "closed";
})(Kt || (Kt = {}));
var me;
(function(t) {
  t.closed = "closed", t.errored = "errored", t.joined = "joined", t.joining = "joining", t.leaving = "leaving";
})(me || (me = {}));
var Me;
(function(t) {
  t.close = "phx_close", t.error = "phx_error", t.join = "phx_join", t.reply = "phx_reply", t.leave = "phx_leave", t.access_token = "access_token";
})(Me || (Me = {}));
var br;
(function(t) {
  t.websocket = "websocket";
})(br || (br = {}));
var pt;
(function(t) {
  t.Connecting = "connecting", t.Open = "open", t.Closing = "closing", t.Closed = "closed";
})(pt || (pt = {}));
class lu {
  constructor() {
    this.HEADER_LENGTH = 1;
  }
  decode(e, n) {
    return e.constructor === ArrayBuffer ? n(this._binaryDecode(e)) : n(typeof e == "string" ? JSON.parse(e) : {});
  }
  _binaryDecode(e) {
    const n = new DataView(e), r = new TextDecoder();
    return this._decodeBroadcast(e, n, r);
  }
  _decodeBroadcast(e, n, r) {
    const i = n.getUint8(1), s = n.getUint8(2);
    let o = this.HEADER_LENGTH + 2;
    const a = r.decode(e.slice(o, o + i));
    o = o + i;
    const l = r.decode(e.slice(o, o + s));
    o = o + s;
    const c = JSON.parse(r.decode(e.slice(o, e.byteLength)));
    return { ref: null, topic: a, event: l, payload: c };
  }
}
class go {
  constructor(e, n) {
    this.callback = e, this.timerCalc = n, this.timer = void 0, this.tries = 0, this.callback = e, this.timerCalc = n;
  }
  reset() {
    this.tries = 0, clearTimeout(this.timer);
  }
  // Cancels any previous scheduleTimeout and schedules callback
  scheduleTimeout() {
    clearTimeout(this.timer), this.timer = setTimeout(() => {
      this.tries = this.tries + 1, this.callback();
    }, this.timerCalc(this.tries + 1));
  }
}
var ie;
(function(t) {
  t.abstime = "abstime", t.bool = "bool", t.date = "date", t.daterange = "daterange", t.float4 = "float4", t.float8 = "float8", t.int2 = "int2", t.int4 = "int4", t.int4range = "int4range", t.int8 = "int8", t.int8range = "int8range", t.json = "json", t.jsonb = "jsonb", t.money = "money", t.numeric = "numeric", t.oid = "oid", t.reltime = "reltime", t.text = "text", t.time = "time", t.timestamp = "timestamp", t.timestamptz = "timestamptz", t.timetz = "timetz", t.tsrange = "tsrange", t.tstzrange = "tstzrange";
})(ie || (ie = {}));
const Si = (t, e, n = {}) => {
  var r;
  const i = (r = n.skipTypes) !== null && r !== void 0 ? r : [];
  return Object.keys(e).reduce((s, o) => (s[o] = uu(o, t, e, i), s), {});
}, uu = (t, e, n, r) => {
  const i = e.find((a) => a.name === t), s = i == null ? void 0 : i.type, o = n[t];
  return s && !r.includes(s) ? mo(s, o) : vr(o);
}, mo = (t, e) => {
  if (t.charAt(0) === "_") {
    const n = t.slice(1, t.length);
    return fu(e, n);
  }
  switch (t) {
    case ie.bool:
      return cu(e);
    case ie.float4:
    case ie.float8:
    case ie.int2:
    case ie.int4:
    case ie.int8:
    case ie.numeric:
    case ie.oid:
      return hu(e);
    case ie.json:
    case ie.jsonb:
      return du(e);
    case ie.timestamp:
      return pu(e);
    case ie.abstime:
    case ie.date:
    case ie.daterange:
    case ie.int4range:
    case ie.int8range:
    case ie.money:
    case ie.reltime:
    case ie.text:
    case ie.time:
    case ie.timestamptz:
    case ie.timetz:
    case ie.tsrange:
    case ie.tstzrange:
      return vr(e);
    default:
      return vr(e);
  }
}, vr = (t) => t, cu = (t) => {
  switch (t) {
    case "t":
      return !0;
    case "f":
      return !1;
    default:
      return t;
  }
}, hu = (t) => {
  if (typeof t == "string") {
    const e = parseFloat(t);
    if (!Number.isNaN(e))
      return e;
  }
  return t;
}, du = (t) => {
  if (typeof t == "string")
    try {
      return JSON.parse(t);
    } catch (e) {
      return console.log(`JSON parse error: ${e}`), t;
    }
  return t;
}, fu = (t, e) => {
  if (typeof t != "string")
    return t;
  const n = t.length - 1, r = t[n];
  if (t[0] === "{" && r === "}") {
    let s;
    const o = t.slice(1, n);
    try {
      s = JSON.parse("[" + o + "]");
    } catch {
      s = o ? o.split(",") : [];
    }
    return s.map((a) => mo(e, a));
  }
  return t;
}, pu = (t) => typeof t == "string" ? t.replace(" ", "T") : t, yo = (t) => {
  let e = t;
  return e = e.replace(/^ws/i, "http"), e = e.replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i, ""), e.replace(/\/+$/, "");
};
class Jn {
  /**
   * Initializes the Push
   *
   * @param channel The Channel
   * @param event The event, for example `"phx_join"`
   * @param payload The payload, for example `{user_id: 123}`
   * @param timeout The push timeout in milliseconds
   */
  constructor(e, n, r = {}, i = po) {
    this.channel = e, this.event = n, this.payload = r, this.timeout = i, this.sent = !1, this.timeoutTimer = void 0, this.ref = "", this.receivedResp = null, this.recHooks = [], this.refEvent = null;
  }
  resend(e) {
    this.timeout = e, this._cancelRefEvent(), this.ref = "", this.refEvent = null, this.receivedResp = null, this.sent = !1, this.send();
  }
  send() {
    this._hasReceived("timeout") || (this.startTimeout(), this.sent = !0, this.channel.socket.push({
      topic: this.channel.topic,
      event: this.event,
      payload: this.payload,
      ref: this.ref,
      join_ref: this.channel._joinRef()
    }));
  }
  updatePayload(e) {
    this.payload = Object.assign(Object.assign({}, this.payload), e);
  }
  receive(e, n) {
    var r;
    return this._hasReceived(e) && n((r = this.receivedResp) === null || r === void 0 ? void 0 : r.response), this.recHooks.push({ status: e, callback: n }), this;
  }
  startTimeout() {
    if (this.timeoutTimer)
      return;
    this.ref = this.channel.socket._makeRef(), this.refEvent = this.channel._replyEventName(this.ref);
    const e = (n) => {
      this._cancelRefEvent(), this._cancelTimeout(), this.receivedResp = n, this._matchReceive(n);
    };
    this.channel._on(this.refEvent, {}, e), this.timeoutTimer = setTimeout(() => {
      this.trigger("timeout", {});
    }, this.timeout);
  }
  trigger(e, n) {
    this.refEvent && this.channel._trigger(this.refEvent, { status: e, response: n });
  }
  destroy() {
    this._cancelRefEvent(), this._cancelTimeout();
  }
  _cancelRefEvent() {
    this.refEvent && this.channel._off(this.refEvent, {});
  }
  _cancelTimeout() {
    clearTimeout(this.timeoutTimer), this.timeoutTimer = void 0;
  }
  _matchReceive({ status: e, response: n }) {
    this.recHooks.filter((r) => r.status === e).forEach((r) => r.callback(n));
  }
  _hasReceived(e) {
    return this.receivedResp && this.receivedResp.status === e;
  }
}
var Ei;
(function(t) {
  t.SYNC = "sync", t.JOIN = "join", t.LEAVE = "leave";
})(Ei || (Ei = {}));
class Jt {
  /**
   * Initializes the Presence.
   *
   * @param channel - The RealtimeChannel
   * @param opts - The options,
   *        for example `{events: {state: 'state', diff: 'diff'}}`
   */
  constructor(e, n) {
    this.channel = e, this.state = {}, this.pendingDiffs = [], this.joinRef = null, this.caller = {
      onJoin: () => {
      },
      onLeave: () => {
      },
      onSync: () => {
      }
    };
    const r = (n == null ? void 0 : n.events) || {
      state: "presence_state",
      diff: "presence_diff"
    };
    this.channel._on(r.state, {}, (i) => {
      const { onJoin: s, onLeave: o, onSync: a } = this.caller;
      this.joinRef = this.channel._joinRef(), this.state = Jt.syncState(this.state, i, s, o), this.pendingDiffs.forEach((l) => {
        this.state = Jt.syncDiff(this.state, l, s, o);
      }), this.pendingDiffs = [], a();
    }), this.channel._on(r.diff, {}, (i) => {
      const { onJoin: s, onLeave: o, onSync: a } = this.caller;
      this.inPendingSyncState() ? this.pendingDiffs.push(i) : (this.state = Jt.syncDiff(this.state, i, s, o), a());
    }), this.onJoin((i, s, o) => {
      this.channel._trigger("presence", {
        event: "join",
        key: i,
        currentPresences: s,
        newPresences: o
      });
    }), this.onLeave((i, s, o) => {
      this.channel._trigger("presence", {
        event: "leave",
        key: i,
        currentPresences: s,
        leftPresences: o
      });
    }), this.onSync(() => {
      this.channel._trigger("presence", { event: "sync" });
    });
  }
  /**
   * Used to sync the list of presences on the server with the
   * client's state.
   *
   * An optional `onJoin` and `onLeave` callback can be provided to
   * react to changes in the client's local presences across
   * disconnects and reconnects with the server.
   *
   * @internal
   */
  static syncState(e, n, r, i) {
    const s = this.cloneDeep(e), o = this.transformState(n), a = {}, l = {};
    return this.map(s, (c, u) => {
      o[c] || (l[c] = u);
    }), this.map(o, (c, u) => {
      const h = s[c];
      if (h) {
        const f = u.map((w) => w.presence_ref), d = h.map((w) => w.presence_ref), y = u.filter((w) => d.indexOf(w.presence_ref) < 0), b = h.filter((w) => f.indexOf(w.presence_ref) < 0);
        y.length > 0 && (a[c] = y), b.length > 0 && (l[c] = b);
      } else
        a[c] = u;
    }), this.syncDiff(s, { joins: a, leaves: l }, r, i);
  }
  /**
   * Used to sync a diff of presence join and leave events from the
   * server, as they happen.
   *
   * Like `syncState`, `syncDiff` accepts optional `onJoin` and
   * `onLeave` callbacks to react to a user joining or leaving from a
   * device.
   *
   * @internal
   */
  static syncDiff(e, n, r, i) {
    const { joins: s, leaves: o } = {
      joins: this.transformState(n.joins),
      leaves: this.transformState(n.leaves)
    };
    return r || (r = () => {
    }), i || (i = () => {
    }), this.map(s, (a, l) => {
      var c;
      const u = (c = e[a]) !== null && c !== void 0 ? c : [];
      if (e[a] = this.cloneDeep(l), u.length > 0) {
        const h = e[a].map((d) => d.presence_ref), f = u.filter((d) => h.indexOf(d.presence_ref) < 0);
        e[a].unshift(...f);
      }
      r(a, u, l);
    }), this.map(o, (a, l) => {
      let c = e[a];
      if (!c)
        return;
      const u = l.map((h) => h.presence_ref);
      c = c.filter((h) => u.indexOf(h.presence_ref) < 0), e[a] = c, i(a, c, l), c.length === 0 && delete e[a];
    }), e;
  }
  /** @internal */
  static map(e, n) {
    return Object.getOwnPropertyNames(e).map((r) => n(r, e[r]));
  }
  /**
   * Remove 'metas' key
   * Change 'phx_ref' to 'presence_ref'
   * Remove 'phx_ref' and 'phx_ref_prev'
   *
   * @example
   * // returns {
   *  abc123: [
   *    { presence_ref: '2', user_id: 1 },
   *    { presence_ref: '3', user_id: 2 }
   *  ]
   * }
   * RealtimePresence.transformState({
   *  abc123: {
   *    metas: [
   *      { phx_ref: '2', phx_ref_prev: '1' user_id: 1 },
   *      { phx_ref: '3', user_id: 2 }
   *    ]
   *  }
   * })
   *
   * @internal
   */
  static transformState(e) {
    return e = this.cloneDeep(e), Object.getOwnPropertyNames(e).reduce((n, r) => {
      const i = e[r];
      return "metas" in i ? n[r] = i.metas.map((s) => (s.presence_ref = s.phx_ref, delete s.phx_ref, delete s.phx_ref_prev, s)) : n[r] = i, n;
    }, {});
  }
  /** @internal */
  static cloneDeep(e) {
    return JSON.parse(JSON.stringify(e));
  }
  /** @internal */
  onJoin(e) {
    this.caller.onJoin = e;
  }
  /** @internal */
  onLeave(e) {
    this.caller.onLeave = e;
  }
  /** @internal */
  onSync(e) {
    this.caller.onSync = e;
  }
  /** @internal */
  inPendingSyncState() {
    return !this.joinRef || this.joinRef !== this.channel._joinRef();
  }
}
var Ci;
(function(t) {
  t.ALL = "*", t.INSERT = "INSERT", t.UPDATE = "UPDATE", t.DELETE = "DELETE";
})(Ci || (Ci = {}));
var Ti;
(function(t) {
  t.BROADCAST = "broadcast", t.PRESENCE = "presence", t.POSTGRES_CHANGES = "postgres_changes", t.SYSTEM = "system";
})(Ti || (Ti = {}));
var Je;
(function(t) {
  t.SUBSCRIBED = "SUBSCRIBED", t.TIMED_OUT = "TIMED_OUT", t.CLOSED = "CLOSED", t.CHANNEL_ERROR = "CHANNEL_ERROR";
})(Je || (Je = {}));
class Ur {
  constructor(e, n = { config: {} }, r) {
    this.topic = e, this.params = n, this.socket = r, this.bindings = {}, this.state = me.closed, this.joinedOnce = !1, this.pushBuffer = [], this.subTopic = e.replace(/^realtime:/i, ""), this.params.config = Object.assign({
      broadcast: { ack: !1, self: !1 },
      presence: { key: "" },
      private: !1
    }, n.config), this.timeout = this.socket.timeout, this.joinPush = new Jn(this, Me.join, this.params, this.timeout), this.rejoinTimer = new go(() => this._rejoinUntilConnected(), this.socket.reconnectAfterMs), this.joinPush.receive("ok", () => {
      this.state = me.joined, this.rejoinTimer.reset(), this.pushBuffer.forEach((i) => i.send()), this.pushBuffer = [];
    }), this._onClose(() => {
      this.rejoinTimer.reset(), this.socket.log("channel", `close ${this.topic} ${this._joinRef()}`), this.state = me.closed, this.socket._remove(this);
    }), this._onError((i) => {
      this._isLeaving() || this._isClosed() || (this.socket.log("channel", `error ${this.topic}`, i), this.state = me.errored, this.rejoinTimer.scheduleTimeout());
    }), this.joinPush.receive("timeout", () => {
      this._isJoining() && (this.socket.log("channel", `timeout ${this.topic}`, this.joinPush.timeout), this.state = me.errored, this.rejoinTimer.scheduleTimeout());
    }), this._on(Me.reply, {}, (i, s) => {
      this._trigger(this._replyEventName(s), i);
    }), this.presence = new Jt(this), this.broadcastEndpointURL = yo(this.socket.endPoint) + "/api/broadcast", this.private = this.params.config.private || !1;
  }
  /** Subscribe registers your client with the server */
  subscribe(e, n = this.timeout) {
    var r, i;
    if (this.socket.isConnected() || this.socket.connect(), this.state == me.closed) {
      const { config: { broadcast: s, presence: o, private: a } } = this.params;
      this._onError((u) => e == null ? void 0 : e(Je.CHANNEL_ERROR, u)), this._onClose(() => e == null ? void 0 : e(Je.CLOSED));
      const l = {}, c = {
        broadcast: s,
        presence: o,
        postgres_changes: (i = (r = this.bindings.postgres_changes) === null || r === void 0 ? void 0 : r.map((u) => u.filter)) !== null && i !== void 0 ? i : [],
        private: a
      };
      this.socket.accessTokenValue && (l.access_token = this.socket.accessTokenValue), this.updateJoinPayload(Object.assign({ config: c }, l)), this.joinedOnce = !0, this._rejoin(n), this.joinPush.receive("ok", async ({ postgres_changes: u }) => {
        var h;
        if (this.socket.setAuth(), u === void 0) {
          e == null || e(Je.SUBSCRIBED);
          return;
        } else {
          const f = this.bindings.postgres_changes, d = (h = f == null ? void 0 : f.length) !== null && h !== void 0 ? h : 0, y = [];
          for (let b = 0; b < d; b++) {
            const w = f[b], { filter: { event: v, schema: C, table: k, filter: I } } = w, $ = u && u[b];
            if ($ && $.event === v && $.schema === C && $.table === k && $.filter === I)
              y.push(Object.assign(Object.assign({}, w), { id: $.id }));
            else {
              this.unsubscribe(), this.state = me.errored, e == null || e(Je.CHANNEL_ERROR, new Error("mismatch between server and client bindings for postgres changes"));
              return;
            }
          }
          this.bindings.postgres_changes = y, e && e(Je.SUBSCRIBED);
          return;
        }
      }).receive("error", (u) => {
        this.state = me.errored, e == null || e(Je.CHANNEL_ERROR, new Error(JSON.stringify(Object.values(u).join(", ") || "error")));
      }).receive("timeout", () => {
        e == null || e(Je.TIMED_OUT);
      });
    }
    return this;
  }
  presenceState() {
    return this.presence.state;
  }
  async track(e, n = {}) {
    return await this.send({
      type: "presence",
      event: "track",
      payload: e
    }, n.timeout || this.timeout);
  }
  async untrack(e = {}) {
    return await this.send({
      type: "presence",
      event: "untrack"
    }, e);
  }
  on(e, n, r) {
    return this._on(e, n, r);
  }
  /**
   * Sends a message into the channel.
   *
   * @param args Arguments to send to channel
   * @param args.type The type of event to send
   * @param args.event The name of the event being sent
   * @param args.payload Payload to be sent
   * @param opts Options to be used during the send process
   */
  async send(e, n = {}) {
    var r, i;
    if (!this._canPush() && e.type === "broadcast") {
      const { event: s, payload: o } = e, l = {
        method: "POST",
        headers: {
          Authorization: this.socket.accessTokenValue ? `Bearer ${this.socket.accessTokenValue}` : "",
          apikey: this.socket.apiKey ? this.socket.apiKey : "",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          messages: [
            {
              topic: this.subTopic,
              event: s,
              payload: o,
              private: this.private
            }
          ]
        })
      };
      try {
        const c = await this._fetchWithTimeout(this.broadcastEndpointURL, l, (r = n.timeout) !== null && r !== void 0 ? r : this.timeout);
        return await ((i = c.body) === null || i === void 0 ? void 0 : i.cancel()), c.ok ? "ok" : "error";
      } catch (c) {
        return c.name === "AbortError" ? "timed out" : "error";
      }
    } else
      return new Promise((s) => {
        var o, a, l;
        const c = this._push(e.type, e, n.timeout || this.timeout);
        e.type === "broadcast" && !(!((l = (a = (o = this.params) === null || o === void 0 ? void 0 : o.config) === null || a === void 0 ? void 0 : a.broadcast) === null || l === void 0) && l.ack) && s("ok"), c.receive("ok", () => s("ok")), c.receive("error", () => s("error")), c.receive("timeout", () => s("timed out"));
      });
  }
  updateJoinPayload(e) {
    this.joinPush.updatePayload(e);
  }
  /**
   * Leaves the channel.
   *
   * Unsubscribes from server events, and instructs channel to terminate on server.
   * Triggers onClose() hooks.
   *
   * To receive leave acknowledgements, use the a `receive` hook to bind to the server ack, ie:
   * channel.unsubscribe().receive("ok", () => alert("left!") )
   */
  unsubscribe(e = this.timeout) {
    this.state = me.leaving;
    const n = () => {
      this.socket.log("channel", `leave ${this.topic}`), this._trigger(Me.close, "leave", this._joinRef());
    };
    this.joinPush.destroy();
    let r = null;
    return new Promise((i) => {
      r = new Jn(this, Me.leave, {}, e), r.receive("ok", () => {
        n(), i("ok");
      }).receive("timeout", () => {
        n(), i("timed out");
      }).receive("error", () => {
        i("error");
      }), r.send(), this._canPush() || r.trigger("ok", {});
    }).finally(() => {
      r == null || r.destroy();
    });
  }
  /**
   * Teardown the channel.
   *
   * Destroys and stops related timers.
   */
  teardown() {
    this.pushBuffer.forEach((e) => e.destroy()), this.rejoinTimer && clearTimeout(this.rejoinTimer.timer), this.joinPush.destroy();
  }
  /** @internal */
  async _fetchWithTimeout(e, n, r) {
    const i = new AbortController(), s = setTimeout(() => i.abort(), r), o = await this.socket.fetch(e, Object.assign(Object.assign({}, n), { signal: i.signal }));
    return clearTimeout(s), o;
  }
  /** @internal */
  _push(e, n, r = this.timeout) {
    if (!this.joinedOnce)
      throw `tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;
    let i = new Jn(this, e, n, r);
    return this._canPush() ? i.send() : (i.startTimeout(), this.pushBuffer.push(i)), i;
  }
  /**
   * Overridable message hook
   *
   * Receives all events for specialized message handling before dispatching to the channel callbacks.
   * Must return the payload, modified or unmodified.
   *
   * @internal
   */
  _onMessage(e, n, r) {
    return n;
  }
  /** @internal */
  _isMember(e) {
    return this.topic === e;
  }
  /** @internal */
  _joinRef() {
    return this.joinPush.ref;
  }
  /** @internal */
  _trigger(e, n, r) {
    var i, s;
    const o = e.toLocaleLowerCase(), { close: a, error: l, leave: c, join: u } = Me;
    if (r && [a, l, c, u].indexOf(o) >= 0 && r !== this._joinRef())
      return;
    let f = this._onMessage(o, n, r);
    if (n && !f)
      throw "channel onMessage callbacks must return the payload, modified or unmodified";
    ["insert", "update", "delete"].includes(o) ? (i = this.bindings.postgres_changes) === null || i === void 0 || i.filter((d) => {
      var y, b, w;
      return ((y = d.filter) === null || y === void 0 ? void 0 : y.event) === "*" || ((w = (b = d.filter) === null || b === void 0 ? void 0 : b.event) === null || w === void 0 ? void 0 : w.toLocaleLowerCase()) === o;
    }).map((d) => d.callback(f, r)) : (s = this.bindings[o]) === null || s === void 0 || s.filter((d) => {
      var y, b, w, v, C, k;
      if (["broadcast", "presence", "postgres_changes"].includes(o))
        if ("id" in d) {
          const I = d.id, $ = (y = d.filter) === null || y === void 0 ? void 0 : y.event;
          return I && ((b = n.ids) === null || b === void 0 ? void 0 : b.includes(I)) && ($ === "*" || ($ == null ? void 0 : $.toLocaleLowerCase()) === ((w = n.data) === null || w === void 0 ? void 0 : w.type.toLocaleLowerCase()));
        } else {
          const I = (C = (v = d == null ? void 0 : d.filter) === null || v === void 0 ? void 0 : v.event) === null || C === void 0 ? void 0 : C.toLocaleLowerCase();
          return I === "*" || I === ((k = n == null ? void 0 : n.event) === null || k === void 0 ? void 0 : k.toLocaleLowerCase());
        }
      else
        return d.type.toLocaleLowerCase() === o;
    }).map((d) => {
      if (typeof f == "object" && "ids" in f) {
        const y = f.data, { schema: b, table: w, commit_timestamp: v, type: C, errors: k } = y;
        f = Object.assign(Object.assign({}, {
          schema: b,
          table: w,
          commit_timestamp: v,
          eventType: C,
          new: {},
          old: {},
          errors: k
        }), this._getPayloadRecords(y));
      }
      d.callback(f, r);
    });
  }
  /** @internal */
  _isClosed() {
    return this.state === me.closed;
  }
  /** @internal */
  _isJoined() {
    return this.state === me.joined;
  }
  /** @internal */
  _isJoining() {
    return this.state === me.joining;
  }
  /** @internal */
  _isLeaving() {
    return this.state === me.leaving;
  }
  /** @internal */
  _replyEventName(e) {
    return `chan_reply_${e}`;
  }
  /** @internal */
  _on(e, n, r) {
    const i = e.toLocaleLowerCase(), s = {
      type: i,
      filter: n,
      callback: r
    };
    return this.bindings[i] ? this.bindings[i].push(s) : this.bindings[i] = [s], this;
  }
  /** @internal */
  _off(e, n) {
    const r = e.toLocaleLowerCase();
    return this.bindings[r] = this.bindings[r].filter((i) => {
      var s;
      return !(((s = i.type) === null || s === void 0 ? void 0 : s.toLocaleLowerCase()) === r && Ur.isEqual(i.filter, n));
    }), this;
  }
  /** @internal */
  static isEqual(e, n) {
    if (Object.keys(e).length !== Object.keys(n).length)
      return !1;
    for (const r in e)
      if (e[r] !== n[r])
        return !1;
    return !0;
  }
  /** @internal */
  _rejoinUntilConnected() {
    this.rejoinTimer.scheduleTimeout(), this.socket.isConnected() && this._rejoin();
  }
  /**
   * Registers a callback that will be executed when the channel closes.
   *
   * @internal
   */
  _onClose(e) {
    this._on(Me.close, {}, e);
  }
  /**
   * Registers a callback that will be executed when the channel encounteres an error.
   *
   * @internal
   */
  _onError(e) {
    this._on(Me.error, {}, (n) => e(n));
  }
  /**
   * Returns `true` if the socket is connected and the channel has been joined.
   *
   * @internal
   */
  _canPush() {
    return this.socket.isConnected() && this._isJoined();
  }
  /** @internal */
  _rejoin(e = this.timeout) {
    this._isLeaving() || (this.socket._leaveOpenTopic(this.topic), this.state = me.joining, this.joinPush.resend(e));
  }
  /** @internal */
  _getPayloadRecords(e) {
    const n = {
      new: {},
      old: {}
    };
    return (e.type === "INSERT" || e.type === "UPDATE") && (n.new = Si(e.columns, e.record)), (e.type === "UPDATE" || e.type === "DELETE") && (n.old = Si(e.columns, e.old_record)), n;
  }
}
const Ai = () => {
}, gu = `
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;
class mu {
  /**
   * Initializes the Socket.
   *
   * @param endPoint The string WebSocket endpoint, ie, "ws://example.com/socket", "wss://example.com", "/socket" (inherited host & protocol)
   * @param httpEndpoint The string HTTP endpoint, ie, "https://example.com", "/" (inherited host & protocol)
   * @param options.transport The Websocket Transport, for example WebSocket. This can be a custom implementation
   * @param options.timeout The default timeout in milliseconds to trigger push timeouts.
   * @param options.params The optional params to pass when connecting.
   * @param options.headers Deprecated: headers cannot be set on websocket connections and this option will be removed in the future.
   * @param options.heartbeatIntervalMs The millisec interval to send a heartbeat message.
   * @param options.logger The optional function for specialized logging, ie: logger: (kind, msg, data) => { console.log(`${kind}: ${msg}`, data) }
   * @param options.logLevel Sets the log level for Realtime
   * @param options.encode The function to encode outgoing messages. Defaults to JSON: (payload, callback) => callback(JSON.stringify(payload))
   * @param options.decode The function to decode incoming messages. Defaults to Serializer's decode.
   * @param options.reconnectAfterMs he optional function that returns the millsec reconnect interval. Defaults to stepped backoff off.
   * @param options.worker Use Web Worker to set a side flow. Defaults to false.
   * @param options.workerUrl The URL of the worker script. Defaults to https://realtime.supabase.com/worker.js that includes a heartbeat event call to keep the connection alive.
   */
  constructor(e, n) {
    var r;
    this.accessTokenValue = null, this.apiKey = null, this.channels = new Array(), this.endPoint = "", this.httpEndpoint = "", this.headers = {}, this.params = {}, this.timeout = po, this.heartbeatIntervalMs = 25e3, this.heartbeatTimer = void 0, this.pendingHeartbeatRef = null, this.heartbeatCallback = Ai, this.ref = 0, this.logger = Ai, this.conn = null, this.sendBuffer = [], this.serializer = new lu(), this.stateChangeCallbacks = {
      open: [],
      close: [],
      error: [],
      message: []
    }, this.accessToken = null, this._resolveFetch = (s) => {
      let o;
      return s ? o = s : typeof fetch > "u" ? o = (...a) => Promise.resolve().then(() => Lt).then(({ default: l }) => l(...a)) : o = fetch, (...a) => o(...a);
    }, this.endPoint = `${e}/${br.websocket}`, this.httpEndpoint = yo(e), n != null && n.transport ? this.transport = n.transport : this.transport = null, n != null && n.params && (this.params = n.params), n != null && n.timeout && (this.timeout = n.timeout), n != null && n.logger && (this.logger = n.logger), (n != null && n.logLevel || n != null && n.log_level) && (this.logLevel = n.logLevel || n.log_level, this.params = Object.assign(Object.assign({}, this.params), { log_level: this.logLevel })), n != null && n.heartbeatIntervalMs && (this.heartbeatIntervalMs = n.heartbeatIntervalMs);
    const i = (r = n == null ? void 0 : n.params) === null || r === void 0 ? void 0 : r.apikey;
    if (i && (this.accessTokenValue = i, this.apiKey = i), this.reconnectAfterMs = n != null && n.reconnectAfterMs ? n.reconnectAfterMs : (s) => [1e3, 2e3, 5e3, 1e4][s - 1] || 1e4, this.encode = n != null && n.encode ? n.encode : (s, o) => o(JSON.stringify(s)), this.decode = n != null && n.decode ? n.decode : this.serializer.decode.bind(this.serializer), this.reconnectTimer = new go(async () => {
      this.disconnect(), this.connect();
    }, this.reconnectAfterMs), this.fetch = this._resolveFetch(n == null ? void 0 : n.fetch), n != null && n.worker) {
      if (typeof window < "u" && !window.Worker)
        throw new Error("Web Worker is not supported");
      this.worker = (n == null ? void 0 : n.worker) || !1, this.workerUrl = n == null ? void 0 : n.workerUrl;
    }
    this.accessToken = (n == null ? void 0 : n.accessToken) || null;
  }
  /**
   * Connects the socket, unless already connected.
   */
  connect() {
    if (!this.conn) {
      if (this.transport || (this.transport = ru), !this.transport)
        throw new Error("No transport provided");
      this.conn = new this.transport(this.endpointURL()), this.setupConnection();
    }
  }
  /**
   * Returns the URL of the websocket.
   * @returns string The URL of the websocket.
   */
  endpointURL() {
    return this._appendParams(this.endPoint, Object.assign({}, this.params, { vsn: ou }));
  }
  /**
   * Disconnects the socket.
   *
   * @param code A numeric status code to send on disconnect.
   * @param reason A custom reason for the disconnect.
   */
  disconnect(e, n) {
    this.conn && (this.conn.onclose = function() {
    }, e ? this.conn.close(e, n ?? "") : this.conn.close(), this.conn = null, this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.reconnectTimer.reset(), this.channels.forEach((r) => r.teardown()));
  }
  /**
   * Returns all created channels
   */
  getChannels() {
    return this.channels;
  }
  /**
   * Unsubscribes and removes a single channel
   * @param channel A RealtimeChannel instance
   */
  async removeChannel(e) {
    const n = await e.unsubscribe();
    return this.channels.length === 0 && this.disconnect(), n;
  }
  /**
   * Unsubscribes and removes all channels
   */
  async removeAllChannels() {
    const e = await Promise.all(this.channels.map((n) => n.unsubscribe()));
    return this.channels = [], this.disconnect(), e;
  }
  /**
   * Logs the message.
   *
   * For customized logging, `this.logger` can be overridden.
   */
  log(e, n, r) {
    this.logger(e, n, r);
  }
  /**
   * Returns the current state of the socket.
   */
  connectionState() {
    switch (this.conn && this.conn.readyState) {
      case Kt.connecting:
        return pt.Connecting;
      case Kt.open:
        return pt.Open;
      case Kt.closing:
        return pt.Closing;
      default:
        return pt.Closed;
    }
  }
  /**
   * Returns `true` is the connection is open.
   */
  isConnected() {
    return this.connectionState() === pt.Open;
  }
  channel(e, n = { config: {} }) {
    const r = `realtime:${e}`, i = this.getChannels().find((s) => s.topic === r);
    if (i)
      return i;
    {
      const s = new Ur(`realtime:${e}`, n, this);
      return this.channels.push(s), s;
    }
  }
  /**
   * Push out a message if the socket is connected.
   *
   * If the socket is not connected, the message gets enqueued within a local buffer, and sent out when a connection is next established.
   */
  push(e) {
    const { topic: n, event: r, payload: i, ref: s } = e, o = () => {
      this.encode(e, (a) => {
        var l;
        (l = this.conn) === null || l === void 0 || l.send(a);
      });
    };
    this.log("push", `${n} ${r} (${s})`, i), this.isConnected() ? o() : this.sendBuffer.push(o);
  }
  /**
   * Sets the JWT access token used for channel subscription authorization and Realtime RLS.
   *
   * If param is null it will use the `accessToken` callback function or the token set on the client.
   *
   * On callback used, it will set the value of the token internal to the client.
   *
   * @param token A JWT string to override the token set on the client.
   */
  async setAuth(e = null) {
    let n = e || this.accessToken && await this.accessToken() || this.accessTokenValue;
    this.accessTokenValue != n && (this.accessTokenValue = n, this.channels.forEach((r) => {
      const i = {
        access_token: n,
        version: su
      };
      n && r.updateJoinPayload(i), r.joinedOnce && r._isJoined() && r._push(Me.access_token, {
        access_token: n
      });
    }));
  }
  /**
   * Sends a heartbeat message if the socket is connected.
   */
  async sendHeartbeat() {
    var e;
    if (!this.isConnected()) {
      this.heartbeatCallback("disconnected");
      return;
    }
    if (this.pendingHeartbeatRef) {
      this.pendingHeartbeatRef = null, this.log("transport", "heartbeat timeout. Attempting to re-establish connection"), this.heartbeatCallback("timeout"), (e = this.conn) === null || e === void 0 || e.close(au, "hearbeat timeout");
      return;
    }
    this.pendingHeartbeatRef = this._makeRef(), this.push({
      topic: "phoenix",
      event: "heartbeat",
      payload: {},
      ref: this.pendingHeartbeatRef
    }), this.heartbeatCallback("sent"), await this.setAuth();
  }
  onHeartbeat(e) {
    this.heartbeatCallback = e;
  }
  /**
   * Flushes send buffer
   */
  flushSendBuffer() {
    this.isConnected() && this.sendBuffer.length > 0 && (this.sendBuffer.forEach((e) => e()), this.sendBuffer = []);
  }
  /**
   * Return the next message ref, accounting for overflows
   *
   * @internal
   */
  _makeRef() {
    let e = this.ref + 1;
    return e === this.ref ? this.ref = 0 : this.ref = e, this.ref.toString();
  }
  /**
   * Unsubscribe from channels with the specified topic.
   *
   * @internal
   */
  _leaveOpenTopic(e) {
    let n = this.channels.find((r) => r.topic === e && (r._isJoined() || r._isJoining()));
    n && (this.log("transport", `leaving duplicate topic "${e}"`), n.unsubscribe());
  }
  /**
   * Removes a subscription from the socket.
   *
   * @param channel An open subscription.
   *
   * @internal
   */
  _remove(e) {
    this.channels = this.channels.filter((n) => n.topic !== e.topic);
  }
  /**
   * Sets up connection handlers.
   *
   * @internal
   */
  setupConnection() {
    this.conn && (this.conn.binaryType = "arraybuffer", this.conn.onopen = () => this._onConnOpen(), this.conn.onerror = (e) => this._onConnError(e), this.conn.onmessage = (e) => this._onConnMessage(e), this.conn.onclose = (e) => this._onConnClose(e));
  }
  /** @internal */
  _onConnMessage(e) {
    this.decode(e.data, (n) => {
      let { topic: r, event: i, payload: s, ref: o } = n;
      r === "phoenix" && i === "phx_reply" && this.heartbeatCallback(n.payload.status == "ok" ? "ok" : "error"), o && o === this.pendingHeartbeatRef && (this.pendingHeartbeatRef = null), this.log("receive", `${s.status || ""} ${r} ${i} ${o && "(" + o + ")" || ""}`, s), Array.from(this.channels).filter((a) => a._isMember(r)).forEach((a) => a._trigger(i, s, o)), this.stateChangeCallbacks.message.forEach((a) => a(n));
    });
  }
  /** @internal */
  _onConnOpen() {
    this.log("transport", `connected to ${this.endpointURL()}`), this.flushSendBuffer(), this.reconnectTimer.reset(), this.worker ? this.workerRef || this._startWorkerHeartbeat() : this._startHeartbeat(), this.stateChangeCallbacks.open.forEach((e) => e());
  }
  /** @internal */
  _startHeartbeat() {
    this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.heartbeatTimer = setInterval(() => this.sendHeartbeat(), this.heartbeatIntervalMs);
  }
  /** @internal */
  _startWorkerHeartbeat() {
    this.workerUrl ? this.log("worker", `starting worker for from ${this.workerUrl}`) : this.log("worker", "starting default worker");
    const e = this._workerObjectUrl(this.workerUrl);
    this.workerRef = new Worker(e), this.workerRef.onerror = (n) => {
      this.log("worker", "worker error", n.message), this.workerRef.terminate();
    }, this.workerRef.onmessage = (n) => {
      n.data.event === "keepAlive" && this.sendHeartbeat();
    }, this.workerRef.postMessage({
      event: "start",
      interval: this.heartbeatIntervalMs
    });
  }
  /** @internal */
  _onConnClose(e) {
    this.log("transport", "close", e), this._triggerChanError(), this.heartbeatTimer && clearInterval(this.heartbeatTimer), this.reconnectTimer.scheduleTimeout(), this.stateChangeCallbacks.close.forEach((n) => n(e));
  }
  /** @internal */
  _onConnError(e) {
    this.log("transport", `${e}`), this._triggerChanError(), this.stateChangeCallbacks.error.forEach((n) => n(e));
  }
  /** @internal */
  _triggerChanError() {
    this.channels.forEach((e) => e._trigger(Me.error));
  }
  /** @internal */
  _appendParams(e, n) {
    if (Object.keys(n).length === 0)
      return e;
    const r = e.match(/\?/) ? "&" : "?", i = new URLSearchParams(n);
    return `${e}${r}${i}`;
  }
  _workerObjectUrl(e) {
    let n;
    if (e)
      n = e;
    else {
      const r = new Blob([gu], { type: "application/javascript" });
      n = URL.createObjectURL(r);
    }
    return n;
  }
}
class Br extends Error {
  constructor(e) {
    super(e), this.__isStorageError = !0, this.name = "StorageError";
  }
}
function ge(t) {
  return typeof t == "object" && t !== null && "__isStorageError" in t;
}
class yu extends Br {
  constructor(e, n) {
    super(e), this.name = "StorageApiError", this.status = n;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status
    };
  }
}
class wr extends Br {
  constructor(e, n) {
    super(e), this.name = "StorageUnknownError", this.originalError = n;
  }
}
var bu = function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(u) {
      try {
        c(r.next(u));
      } catch (h) {
        o(h);
      }
    }
    function l(u) {
      try {
        c(r.throw(u));
      } catch (h) {
        o(h);
      }
    }
    function c(u) {
      u.done ? s(u.value) : i(u.value).then(a, l);
    }
    c((r = r.apply(t, e || [])).next());
  });
};
const bo = (t) => {
  let e;
  return t ? e = t : typeof fetch > "u" ? e = (...n) => Promise.resolve().then(() => Lt).then(({ default: r }) => r(...n)) : e = fetch, (...n) => e(...n);
}, vu = () => bu(void 0, void 0, void 0, function* () {
  return typeof Response > "u" ? (yield Promise.resolve().then(() => Lt)).Response : Response;
}), _r = (t) => {
  if (Array.isArray(t))
    return t.map((n) => _r(n));
  if (typeof t == "function" || t !== Object(t))
    return t;
  const e = {};
  return Object.entries(t).forEach(([n, r]) => {
    const i = n.replace(/([-_][a-z])/gi, (s) => s.toUpperCase().replace(/[-_]/g, ""));
    e[i] = _r(r);
  }), e;
};
var yt = function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(u) {
      try {
        c(r.next(u));
      } catch (h) {
        o(h);
      }
    }
    function l(u) {
      try {
        c(r.throw(u));
      } catch (h) {
        o(h);
      }
    }
    function c(u) {
      u.done ? s(u.value) : i(u.value).then(a, l);
    }
    c((r = r.apply(t, e || [])).next());
  });
};
const Yn = (t) => t.msg || t.message || t.error_description || t.error || JSON.stringify(t), wu = (t, e, n) => yt(void 0, void 0, void 0, function* () {
  const r = yield vu();
  t instanceof r && !(n != null && n.noResolveJson) ? t.json().then((i) => {
    e(new yu(Yn(i), t.status || 500));
  }).catch((i) => {
    e(new wr(Yn(i), i));
  }) : e(new wr(Yn(t), t));
}), _u = (t, e, n, r) => {
  const i = { method: t, headers: (e == null ? void 0 : e.headers) || {} };
  return t === "GET" ? i : (i.headers = Object.assign({ "Content-Type": "application/json" }, e == null ? void 0 : e.headers), r && (i.body = JSON.stringify(r)), Object.assign(Object.assign({}, i), n));
};
function sn(t, e, n, r, i, s) {
  return yt(this, void 0, void 0, function* () {
    return new Promise((o, a) => {
      t(n, _u(e, r, i, s)).then((l) => {
        if (!l.ok)
          throw l;
        return r != null && r.noResolveJson ? l : l.json();
      }).then((l) => o(l)).catch((l) => wu(l, a, r));
    });
  });
}
function xn(t, e, n, r) {
  return yt(this, void 0, void 0, function* () {
    return sn(t, "GET", e, n, r);
  });
}
function nt(t, e, n, r, i) {
  return yt(this, void 0, void 0, function* () {
    return sn(t, "POST", e, r, i, n);
  });
}
function xu(t, e, n, r, i) {
  return yt(this, void 0, void 0, function* () {
    return sn(t, "PUT", e, r, i, n);
  });
}
function ku(t, e, n, r) {
  return yt(this, void 0, void 0, function* () {
    return sn(t, "HEAD", e, Object.assign(Object.assign({}, n), { noResolveJson: !0 }), r);
  });
}
function vo(t, e, n, r, i) {
  return yt(this, void 0, void 0, function* () {
    return sn(t, "DELETE", e, r, i, n);
  });
}
var xe = function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(u) {
      try {
        c(r.next(u));
      } catch (h) {
        o(h);
      }
    }
    function l(u) {
      try {
        c(r.throw(u));
      } catch (h) {
        o(h);
      }
    }
    function c(u) {
      u.done ? s(u.value) : i(u.value).then(a, l);
    }
    c((r = r.apply(t, e || [])).next());
  });
};
const Su = {
  limit: 100,
  offset: 0,
  sortBy: {
    column: "name",
    order: "asc"
  }
}, Pi = {
  cacheControl: "3600",
  contentType: "text/plain;charset=UTF-8",
  upsert: !1
};
class Eu {
  constructor(e, n = {}, r, i) {
    this.url = e, this.headers = n, this.bucketId = r, this.fetch = bo(i);
  }
  /**
   * Uploads a file to an existing bucket or replaces an existing file at the specified path with a new one.
   *
   * @param method HTTP method.
   * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
   * @param fileBody The body of the file to be stored in the bucket.
   */
  uploadOrUpdate(e, n, r, i) {
    return xe(this, void 0, void 0, function* () {
      try {
        let s;
        const o = Object.assign(Object.assign({}, Pi), i);
        let a = Object.assign(Object.assign({}, this.headers), e === "POST" && { "x-upsert": String(o.upsert) });
        const l = o.metadata;
        typeof Blob < "u" && r instanceof Blob ? (s = new FormData(), s.append("cacheControl", o.cacheControl), l && s.append("metadata", this.encodeMetadata(l)), s.append("", r)) : typeof FormData < "u" && r instanceof FormData ? (s = r, s.append("cacheControl", o.cacheControl), l && s.append("metadata", this.encodeMetadata(l))) : (s = r, a["cache-control"] = `max-age=${o.cacheControl}`, a["content-type"] = o.contentType, l && (a["x-metadata"] = this.toBase64(this.encodeMetadata(l)))), i != null && i.headers && (a = Object.assign(Object.assign({}, a), i.headers));
        const c = this._removeEmptyFolders(n), u = this._getFinalPath(c), h = yield this.fetch(`${this.url}/object/${u}`, Object.assign({ method: e, body: s, headers: a }, o != null && o.duplex ? { duplex: o.duplex } : {})), f = yield h.json();
        return h.ok ? {
          data: { path: c, id: f.Id, fullPath: f.Key },
          error: null
        } : { data: null, error: f };
      } catch (s) {
        if (ge(s))
          return { data: null, error: s };
        throw s;
      }
    });
  }
  /**
   * Uploads a file to an existing bucket.
   *
   * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
   * @param fileBody The body of the file to be stored in the bucket.
   */
  upload(e, n, r) {
    return xe(this, void 0, void 0, function* () {
      return this.uploadOrUpdate("POST", e, n, r);
    });
  }
  /**
   * Upload a file with a token generated from `createSignedUploadUrl`.
   * @param path The file path, including the file name. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to upload.
   * @param token The token generated from `createSignedUploadUrl`
   * @param fileBody The body of the file to be stored in the bucket.
   */
  uploadToSignedUrl(e, n, r, i) {
    return xe(this, void 0, void 0, function* () {
      const s = this._removeEmptyFolders(e), o = this._getFinalPath(s), a = new URL(this.url + `/object/upload/sign/${o}`);
      a.searchParams.set("token", n);
      try {
        let l;
        const c = Object.assign({ upsert: Pi.upsert }, i), u = Object.assign(Object.assign({}, this.headers), { "x-upsert": String(c.upsert) });
        typeof Blob < "u" && r instanceof Blob ? (l = new FormData(), l.append("cacheControl", c.cacheControl), l.append("", r)) : typeof FormData < "u" && r instanceof FormData ? (l = r, l.append("cacheControl", c.cacheControl)) : (l = r, u["cache-control"] = `max-age=${c.cacheControl}`, u["content-type"] = c.contentType);
        const h = yield this.fetch(a.toString(), {
          method: "PUT",
          body: l,
          headers: u
        }), f = yield h.json();
        return h.ok ? {
          data: { path: s, fullPath: f.Key },
          error: null
        } : { data: null, error: f };
      } catch (l) {
        if (ge(l))
          return { data: null, error: l };
        throw l;
      }
    });
  }
  /**
   * Creates a signed upload URL.
   * Signed upload URLs can be used to upload files to the bucket without further authentication.
   * They are valid for 2 hours.
   * @param path The file path, including the current file name. For example `folder/image.png`.
   * @param options.upsert If set to true, allows the file to be overwritten if it already exists.
   */
  createSignedUploadUrl(e, n) {
    return xe(this, void 0, void 0, function* () {
      try {
        let r = this._getFinalPath(e);
        const i = Object.assign({}, this.headers);
        n != null && n.upsert && (i["x-upsert"] = "true");
        const s = yield nt(this.fetch, `${this.url}/object/upload/sign/${r}`, {}, { headers: i }), o = new URL(this.url + s.url), a = o.searchParams.get("token");
        if (!a)
          throw new Br("No token returned by API");
        return { data: { signedUrl: o.toString(), path: e, token: a }, error: null };
      } catch (r) {
        if (ge(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /**
   * Replaces an existing file at the specified path with a new one.
   *
   * @param path The relative file path. Should be of the format `folder/subfolder/filename.png`. The bucket must already exist before attempting to update.
   * @param fileBody The body of the file to be stored in the bucket.
   */
  update(e, n, r) {
    return xe(this, void 0, void 0, function* () {
      return this.uploadOrUpdate("PUT", e, n, r);
    });
  }
  /**
   * Moves an existing file to a new path in the same bucket.
   *
   * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
   * @param toPath The new file path, including the new file name. For example `folder/image-new.png`.
   * @param options The destination options.
   */
  move(e, n, r) {
    return xe(this, void 0, void 0, function* () {
      try {
        return { data: yield nt(this.fetch, `${this.url}/object/move`, {
          bucketId: this.bucketId,
          sourceKey: e,
          destinationKey: n,
          destinationBucket: r == null ? void 0 : r.destinationBucket
        }, { headers: this.headers }), error: null };
      } catch (i) {
        if (ge(i))
          return { data: null, error: i };
        throw i;
      }
    });
  }
  /**
   * Copies an existing file to a new path in the same bucket.
   *
   * @param fromPath The original file path, including the current file name. For example `folder/image.png`.
   * @param toPath The new file path, including the new file name. For example `folder/image-copy.png`.
   * @param options The destination options.
   */
  copy(e, n, r) {
    return xe(this, void 0, void 0, function* () {
      try {
        return { data: { path: (yield nt(this.fetch, `${this.url}/object/copy`, {
          bucketId: this.bucketId,
          sourceKey: e,
          destinationKey: n,
          destinationBucket: r == null ? void 0 : r.destinationBucket
        }, { headers: this.headers })).Key }, error: null };
      } catch (i) {
        if (ge(i))
          return { data: null, error: i };
        throw i;
      }
    });
  }
  /**
   * Creates a signed URL. Use a signed URL to share a file for a fixed amount of time.
   *
   * @param path The file path, including the current file name. For example `folder/image.png`.
   * @param expiresIn The number of seconds until the signed URL expires. For example, `60` for a URL which is valid for one minute.
   * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
   * @param options.transform Transform the asset before serving it to the client.
   */
  createSignedUrl(e, n, r) {
    return xe(this, void 0, void 0, function* () {
      try {
        let i = this._getFinalPath(e), s = yield nt(this.fetch, `${this.url}/object/sign/${i}`, Object.assign({ expiresIn: n }, r != null && r.transform ? { transform: r.transform } : {}), { headers: this.headers });
        const o = r != null && r.download ? `&download=${r.download === !0 ? "" : r.download}` : "";
        return s = { signedUrl: encodeURI(`${this.url}${s.signedURL}${o}`) }, { data: s, error: null };
      } catch (i) {
        if (ge(i))
          return { data: null, error: i };
        throw i;
      }
    });
  }
  /**
   * Creates multiple signed URLs. Use a signed URL to share a file for a fixed amount of time.
   *
   * @param paths The file paths to be downloaded, including the current file names. For example `['folder/image.png', 'folder2/image2.png']`.
   * @param expiresIn The number of seconds until the signed URLs expire. For example, `60` for URLs which are valid for one minute.
   * @param options.download triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
   */
  createSignedUrls(e, n, r) {
    return xe(this, void 0, void 0, function* () {
      try {
        const i = yield nt(this.fetch, `${this.url}/object/sign/${this.bucketId}`, { expiresIn: n, paths: e }, { headers: this.headers }), s = r != null && r.download ? `&download=${r.download === !0 ? "" : r.download}` : "";
        return {
          data: i.map((o) => Object.assign(Object.assign({}, o), { signedUrl: o.signedURL ? encodeURI(`${this.url}${o.signedURL}${s}`) : null })),
          error: null
        };
      } catch (i) {
        if (ge(i))
          return { data: null, error: i };
        throw i;
      }
    });
  }
  /**
   * Downloads a file from a private bucket. For public buckets, make a request to the URL returned from `getPublicUrl` instead.
   *
   * @param path The full path and file name of the file to be downloaded. For example `folder/image.png`.
   * @param options.transform Transform the asset before serving it to the client.
   */
  download(e, n) {
    return xe(this, void 0, void 0, function* () {
      const i = typeof (n == null ? void 0 : n.transform) < "u" ? "render/image/authenticated" : "object", s = this.transformOptsToQueryString((n == null ? void 0 : n.transform) || {}), o = s ? `?${s}` : "";
      try {
        const a = this._getFinalPath(e);
        return { data: yield (yield xn(this.fetch, `${this.url}/${i}/${a}${o}`, {
          headers: this.headers,
          noResolveJson: !0
        })).blob(), error: null };
      } catch (a) {
        if (ge(a))
          return { data: null, error: a };
        throw a;
      }
    });
  }
  /**
   * Retrieves the details of an existing file.
   * @param path
   */
  info(e) {
    return xe(this, void 0, void 0, function* () {
      const n = this._getFinalPath(e);
      try {
        const r = yield xn(this.fetch, `${this.url}/object/info/${n}`, {
          headers: this.headers
        });
        return { data: _r(r), error: null };
      } catch (r) {
        if (ge(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /**
   * Checks the existence of a file.
   * @param path
   */
  exists(e) {
    return xe(this, void 0, void 0, function* () {
      const n = this._getFinalPath(e);
      try {
        return yield ku(this.fetch, `${this.url}/object/${n}`, {
          headers: this.headers
        }), { data: !0, error: null };
      } catch (r) {
        if (ge(r) && r instanceof wr) {
          const i = r.originalError;
          if ([400, 404].includes(i == null ? void 0 : i.status))
            return { data: !1, error: r };
        }
        throw r;
      }
    });
  }
  /**
   * A simple convenience function to get the URL for an asset in a public bucket. If you do not want to use this function, you can construct the public URL by concatenating the bucket URL with the path to the asset.
   * This function does not verify if the bucket is public. If a public URL is created for a bucket which is not public, you will not be able to download the asset.
   *
   * @param path The path and name of the file to generate the public URL for. For example `folder/image.png`.
   * @param options.download Triggers the file as a download if set to true. Set this parameter as the name of the file if you want to trigger the download with a different filename.
   * @param options.transform Transform the asset before serving it to the client.
   */
  getPublicUrl(e, n) {
    const r = this._getFinalPath(e), i = [], s = n != null && n.download ? `download=${n.download === !0 ? "" : n.download}` : "";
    s !== "" && i.push(s);
    const a = typeof (n == null ? void 0 : n.transform) < "u" ? "render/image" : "object", l = this.transformOptsToQueryString((n == null ? void 0 : n.transform) || {});
    l !== "" && i.push(l);
    let c = i.join("&");
    return c !== "" && (c = `?${c}`), {
      data: { publicUrl: encodeURI(`${this.url}/${a}/public/${r}${c}`) }
    };
  }
  /**
   * Deletes files within the same bucket
   *
   * @param paths An array of files to delete, including the path and file name. For example [`'folder/image.png'`].
   */
  remove(e) {
    return xe(this, void 0, void 0, function* () {
      try {
        return { data: yield vo(this.fetch, `${this.url}/object/${this.bucketId}`, { prefixes: e }, { headers: this.headers }), error: null };
      } catch (n) {
        if (ge(n))
          return { data: null, error: n };
        throw n;
      }
    });
  }
  /**
   * Get file metadata
   * @param id the file id to retrieve metadata
   */
  // async getMetadata(
  //   id: string
  // ): Promise<
  //   | {
  //       data: Metadata
  //       error: null
  //     }
  //   | {
  //       data: null
  //       error: StorageError
  //     }
  // > {
  //   try {
  //     const data = await get(this.fetch, `${this.url}/metadata/${id}`, { headers: this.headers })
  //     return { data, error: null }
  //   } catch (error) {
  //     if (isStorageError(error)) {
  //       return { data: null, error }
  //     }
  //     throw error
  //   }
  // }
  /**
   * Update file metadata
   * @param id the file id to update metadata
   * @param meta the new file metadata
   */
  // async updateMetadata(
  //   id: string,
  //   meta: Metadata
  // ): Promise<
  //   | {
  //       data: Metadata
  //       error: null
  //     }
  //   | {
  //       data: null
  //       error: StorageError
  //     }
  // > {
  //   try {
  //     const data = await post(
  //       this.fetch,
  //       `${this.url}/metadata/${id}`,
  //       { ...meta },
  //       { headers: this.headers }
  //     )
  //     return { data, error: null }
  //   } catch (error) {
  //     if (isStorageError(error)) {
  //       return { data: null, error }
  //     }
  //     throw error
  //   }
  // }
  /**
   * Lists all the files within a bucket.
   * @param path The folder path.
   */
  list(e, n, r) {
    return xe(this, void 0, void 0, function* () {
      try {
        const i = Object.assign(Object.assign(Object.assign({}, Su), n), { prefix: e || "" });
        return { data: yield nt(this.fetch, `${this.url}/object/list/${this.bucketId}`, i, { headers: this.headers }, r), error: null };
      } catch (i) {
        if (ge(i))
          return { data: null, error: i };
        throw i;
      }
    });
  }
  encodeMetadata(e) {
    return JSON.stringify(e);
  }
  toBase64(e) {
    return typeof Buffer < "u" ? Buffer.from(e).toString("base64") : btoa(e);
  }
  _getFinalPath(e) {
    return `${this.bucketId}/${e}`;
  }
  _removeEmptyFolders(e) {
    return e.replace(/^\/|\/$/g, "").replace(/\/+/g, "/");
  }
  transformOptsToQueryString(e) {
    const n = [];
    return e.width && n.push(`width=${e.width}`), e.height && n.push(`height=${e.height}`), e.resize && n.push(`resize=${e.resize}`), e.format && n.push(`format=${e.format}`), e.quality && n.push(`quality=${e.quality}`), n.join("&");
  }
}
const Cu = "2.7.1", Tu = { "X-Client-Info": `storage-js/${Cu}` };
var xt = function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(u) {
      try {
        c(r.next(u));
      } catch (h) {
        o(h);
      }
    }
    function l(u) {
      try {
        c(r.throw(u));
      } catch (h) {
        o(h);
      }
    }
    function c(u) {
      u.done ? s(u.value) : i(u.value).then(a, l);
    }
    c((r = r.apply(t, e || [])).next());
  });
};
class Au {
  constructor(e, n = {}, r) {
    this.url = e, this.headers = Object.assign(Object.assign({}, Tu), n), this.fetch = bo(r);
  }
  /**
   * Retrieves the details of all Storage buckets within an existing project.
   */
  listBuckets() {
    return xt(this, void 0, void 0, function* () {
      try {
        return { data: yield xn(this.fetch, `${this.url}/bucket`, { headers: this.headers }), error: null };
      } catch (e) {
        if (ge(e))
          return { data: null, error: e };
        throw e;
      }
    });
  }
  /**
   * Retrieves the details of an existing Storage bucket.
   *
   * @param id The unique identifier of the bucket you would like to retrieve.
   */
  getBucket(e) {
    return xt(this, void 0, void 0, function* () {
      try {
        return { data: yield xn(this.fetch, `${this.url}/bucket/${e}`, { headers: this.headers }), error: null };
      } catch (n) {
        if (ge(n))
          return { data: null, error: n };
        throw n;
      }
    });
  }
  /**
   * Creates a new Storage bucket
   *
   * @param id A unique identifier for the bucket you are creating.
   * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations. By default, buckets are private.
   * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
   * The global file size limit takes precedence over this value.
   * The default value is null, which doesn't set a per bucket file size limit.
   * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
   * The default value is null, which allows files with all mime types to be uploaded.
   * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
   * @returns newly created bucket id
   */
  createBucket(e, n = {
    public: !1
  }) {
    return xt(this, void 0, void 0, function* () {
      try {
        return { data: yield nt(this.fetch, `${this.url}/bucket`, {
          id: e,
          name: e,
          public: n.public,
          file_size_limit: n.fileSizeLimit,
          allowed_mime_types: n.allowedMimeTypes
        }, { headers: this.headers }), error: null };
      } catch (r) {
        if (ge(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /**
   * Updates a Storage bucket
   *
   * @param id A unique identifier for the bucket you are updating.
   * @param options.public The visibility of the bucket. Public buckets don't require an authorization token to download objects, but still require a valid token for all other operations.
   * @param options.fileSizeLimit specifies the max file size in bytes that can be uploaded to this bucket.
   * The global file size limit takes precedence over this value.
   * The default value is null, which doesn't set a per bucket file size limit.
   * @param options.allowedMimeTypes specifies the allowed mime types that this bucket can accept during upload.
   * The default value is null, which allows files with all mime types to be uploaded.
   * Each mime type specified can be a wildcard, e.g. image/*, or a specific mime type, e.g. image/png.
   */
  updateBucket(e, n) {
    return xt(this, void 0, void 0, function* () {
      try {
        return { data: yield xu(this.fetch, `${this.url}/bucket/${e}`, {
          id: e,
          name: e,
          public: n.public,
          file_size_limit: n.fileSizeLimit,
          allowed_mime_types: n.allowedMimeTypes
        }, { headers: this.headers }), error: null };
      } catch (r) {
        if (ge(r))
          return { data: null, error: r };
        throw r;
      }
    });
  }
  /**
   * Removes all objects inside a single bucket.
   *
   * @param id The unique identifier of the bucket you would like to empty.
   */
  emptyBucket(e) {
    return xt(this, void 0, void 0, function* () {
      try {
        return { data: yield nt(this.fetch, `${this.url}/bucket/${e}/empty`, {}, { headers: this.headers }), error: null };
      } catch (n) {
        if (ge(n))
          return { data: null, error: n };
        throw n;
      }
    });
  }
  /**
   * Deletes an existing bucket. A bucket can't be deleted with existing objects inside it.
   * You must first `empty()` the bucket.
   *
   * @param id The unique identifier of the bucket you would like to delete.
   */
  deleteBucket(e) {
    return xt(this, void 0, void 0, function* () {
      try {
        return { data: yield vo(this.fetch, `${this.url}/bucket/${e}`, {}, { headers: this.headers }), error: null };
      } catch (n) {
        if (ge(n))
          return { data: null, error: n };
        throw n;
      }
    });
  }
}
class Pu extends Au {
  constructor(e, n = {}, r) {
    super(e, n, r);
  }
  /**
   * Perform file operation in a bucket.
   *
   * @param id The bucket id to operate on.
   */
  from(e) {
    return new Eu(this.url, this.headers, e, this.fetch);
  }
}
const Iu = "2.50.2";
let Gt = "";
typeof Deno < "u" ? Gt = "deno" : typeof document < "u" ? Gt = "web" : typeof navigator < "u" && navigator.product === "ReactNative" ? Gt = "react-native" : Gt = "node";
const Ou = { "X-Client-Info": `supabase-js-${Gt}/${Iu}` }, Ru = {
  headers: Ou
}, ju = {
  schema: "public"
}, Lu = {
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  flowType: "implicit"
}, $u = {};
var Du = function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(u) {
      try {
        c(r.next(u));
      } catch (h) {
        o(h);
      }
    }
    function l(u) {
      try {
        c(r.throw(u));
      } catch (h) {
        o(h);
      }
    }
    function c(u) {
      u.done ? s(u.value) : i(u.value).then(a, l);
    }
    c((r = r.apply(t, e || [])).next());
  });
};
const Nu = (t) => {
  let e;
  return t ? e = t : typeof fetch > "u" ? e = no : e = fetch, (...n) => e(...n);
}, zu = () => typeof Headers > "u" ? ro : Headers, Mu = (t, e, n) => {
  const r = Nu(n), i = zu();
  return (s, o) => Du(void 0, void 0, void 0, function* () {
    var a;
    const l = (a = yield e()) !== null && a !== void 0 ? a : t;
    let c = new i(o == null ? void 0 : o.headers);
    return c.has("apikey") || c.set("apikey", t), c.has("Authorization") || c.set("Authorization", `Bearer ${l}`), r(s, Object.assign(Object.assign({}, o), { headers: c }));
  });
};
var Fu = function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(u) {
      try {
        c(r.next(u));
      } catch (h) {
        o(h);
      }
    }
    function l(u) {
      try {
        c(r.throw(u));
      } catch (h) {
        o(h);
      }
    }
    function c(u) {
      u.done ? s(u.value) : i(u.value).then(a, l);
    }
    c((r = r.apply(t, e || [])).next());
  });
};
function Uu(t) {
  return t.endsWith("/") ? t : t + "/";
}
function Bu(t, e) {
  var n, r;
  const { db: i, auth: s, realtime: o, global: a } = t, { db: l, auth: c, realtime: u, global: h } = e, f = {
    db: Object.assign(Object.assign({}, l), i),
    auth: Object.assign(Object.assign({}, c), s),
    realtime: Object.assign(Object.assign({}, u), o),
    global: Object.assign(Object.assign(Object.assign({}, h), a), { headers: Object.assign(Object.assign({}, (n = h == null ? void 0 : h.headers) !== null && n !== void 0 ? n : {}), (r = a == null ? void 0 : a.headers) !== null && r !== void 0 ? r : {}) }),
    accessToken: () => Fu(this, void 0, void 0, function* () {
      return "";
    })
  };
  return t.accessToken ? f.accessToken = t.accessToken : delete f.accessToken, f;
}
const wo = "2.70.0", At = 30 * 1e3, xr = 3, Xn = xr * At, qu = "http://localhost:9999", Vu = "supabase.auth.token", Hu = { "X-Client-Info": `gotrue-js/${wo}` }, kr = "X-Supabase-Api-Version", _o = {
  "2024-01-01": {
    timestamp: Date.parse("2024-01-01T00:00:00.0Z"),
    name: "2024-01-01"
  }
}, Wu = /^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i, Gu = 6e5;
class qr extends Error {
  constructor(e, n, r) {
    super(e), this.__isAuthError = !0, this.name = "AuthError", this.status = n, this.code = r;
  }
}
function q(t) {
  return typeof t == "object" && t !== null && "__isAuthError" in t;
}
class Ku extends qr {
  constructor(e, n, r) {
    super(e, n, r), this.name = "AuthApiError", this.status = n, this.code = r;
  }
}
function Ju(t) {
  return q(t) && t.name === "AuthApiError";
}
class xo extends qr {
  constructor(e, n) {
    super(e), this.name = "AuthUnknownError", this.originalError = n;
  }
}
class it extends qr {
  constructor(e, n, r, i) {
    super(e, r, i), this.name = n, this.status = r;
  }
}
class tt extends it {
  constructor() {
    super("Auth session missing!", "AuthSessionMissingError", 400, void 0);
  }
}
function Yu(t) {
  return q(t) && t.name === "AuthSessionMissingError";
}
class dn extends it {
  constructor() {
    super("Auth session or user missing", "AuthInvalidTokenResponseError", 500, void 0);
  }
}
class fn extends it {
  constructor(e) {
    super(e, "AuthInvalidCredentialsError", 400, void 0);
  }
}
class pn extends it {
  constructor(e, n = null) {
    super(e, "AuthImplicitGrantRedirectError", 500, void 0), this.details = null, this.details = n;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details
    };
  }
}
function Xu(t) {
  return q(t) && t.name === "AuthImplicitGrantRedirectError";
}
class Ii extends it {
  constructor(e, n = null) {
    super(e, "AuthPKCEGrantCodeExchangeError", 500, void 0), this.details = null, this.details = n;
  }
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      status: this.status,
      details: this.details
    };
  }
}
class Sr extends it {
  constructor(e, n) {
    super(e, "AuthRetryableFetchError", n, void 0);
  }
}
function Qn(t) {
  return q(t) && t.name === "AuthRetryableFetchError";
}
class Oi extends it {
  constructor(e, n, r) {
    super(e, "AuthWeakPasswordError", n, "weak_password"), this.reasons = r;
  }
}
class Yt extends it {
  constructor(e) {
    super(e, "AuthInvalidJwtError", 400, "invalid_jwt");
  }
}
const kn = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""), Ri = ` 	
\r=`.split(""), Qu = (() => {
  const t = new Array(128);
  for (let e = 0; e < t.length; e += 1)
    t[e] = -1;
  for (let e = 0; e < Ri.length; e += 1)
    t[Ri[e].charCodeAt(0)] = -2;
  for (let e = 0; e < kn.length; e += 1)
    t[kn[e].charCodeAt(0)] = e;
  return t;
})();
function ji(t, e, n) {
  if (t !== null)
    for (e.queue = e.queue << 8 | t, e.queuedBits += 8; e.queuedBits >= 6; ) {
      const r = e.queue >> e.queuedBits - 6 & 63;
      n(kn[r]), e.queuedBits -= 6;
    }
  else if (e.queuedBits > 0)
    for (e.queue = e.queue << 6 - e.queuedBits, e.queuedBits = 6; e.queuedBits >= 6; ) {
      const r = e.queue >> e.queuedBits - 6 & 63;
      n(kn[r]), e.queuedBits -= 6;
    }
}
function ko(t, e, n) {
  const r = Qu[t];
  if (r > -1)
    for (e.queue = e.queue << 6 | r, e.queuedBits += 6; e.queuedBits >= 8; )
      n(e.queue >> e.queuedBits - 8 & 255), e.queuedBits -= 8;
  else {
    if (r === -2)
      return;
    throw new Error(`Invalid Base64-URL character "${String.fromCharCode(t)}"`);
  }
}
function Li(t) {
  const e = [], n = (o) => {
    e.push(String.fromCodePoint(o));
  }, r = {
    utf8seq: 0,
    codepoint: 0
  }, i = { queue: 0, queuedBits: 0 }, s = (o) => {
    tc(o, r, n);
  };
  for (let o = 0; o < t.length; o += 1)
    ko(t.charCodeAt(o), i, s);
  return e.join("");
}
function Zu(t, e) {
  if (t <= 127) {
    e(t);
    return;
  } else if (t <= 2047) {
    e(192 | t >> 6), e(128 | t & 63);
    return;
  } else if (t <= 65535) {
    e(224 | t >> 12), e(128 | t >> 6 & 63), e(128 | t & 63);
    return;
  } else if (t <= 1114111) {
    e(240 | t >> 18), e(128 | t >> 12 & 63), e(128 | t >> 6 & 63), e(128 | t & 63);
    return;
  }
  throw new Error(`Unrecognized Unicode codepoint: ${t.toString(16)}`);
}
function ec(t, e) {
  for (let n = 0; n < t.length; n += 1) {
    let r = t.charCodeAt(n);
    if (r > 55295 && r <= 56319) {
      const i = (r - 55296) * 1024 & 65535;
      r = (t.charCodeAt(n + 1) - 56320 & 65535 | i) + 65536, n += 1;
    }
    Zu(r, e);
  }
}
function tc(t, e, n) {
  if (e.utf8seq === 0) {
    if (t <= 127) {
      n(t);
      return;
    }
    for (let r = 1; r < 6; r += 1)
      if (!(t >> 7 - r & 1)) {
        e.utf8seq = r;
        break;
      }
    if (e.utf8seq === 2)
      e.codepoint = t & 31;
    else if (e.utf8seq === 3)
      e.codepoint = t & 15;
    else if (e.utf8seq === 4)
      e.codepoint = t & 7;
    else
      throw new Error("Invalid UTF-8 sequence");
    e.utf8seq -= 1;
  } else if (e.utf8seq > 0) {
    if (t <= 127)
      throw new Error("Invalid UTF-8 sequence");
    e.codepoint = e.codepoint << 6 | t & 63, e.utf8seq -= 1, e.utf8seq === 0 && n(e.codepoint);
  }
}
function nc(t) {
  const e = [], n = { queue: 0, queuedBits: 0 }, r = (i) => {
    e.push(i);
  };
  for (let i = 0; i < t.length; i += 1)
    ko(t.charCodeAt(i), n, r);
  return new Uint8Array(e);
}
function rc(t) {
  const e = [];
  return ec(t, (n) => e.push(n)), new Uint8Array(e);
}
function ic(t) {
  const e = [], n = { queue: 0, queuedBits: 0 }, r = (i) => {
    e.push(i);
  };
  return t.forEach((i) => ji(i, n, r)), ji(null, n, r), e.join("");
}
function sc(t) {
  return Math.round(Date.now() / 1e3) + t;
}
function oc() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
    const e = Math.random() * 16 | 0;
    return (t == "x" ? e : e & 3 | 8).toString(16);
  });
}
const ze = () => typeof window < "u" && typeof document < "u", dt = {
  tested: !1,
  writable: !1
}, Xt = () => {
  if (!ze())
    return !1;
  try {
    if (typeof globalThis.localStorage != "object")
      return !1;
  } catch {
    return !1;
  }
  if (dt.tested)
    return dt.writable;
  const t = `lswt-${Math.random()}${Math.random()}`;
  try {
    globalThis.localStorage.setItem(t, t), globalThis.localStorage.removeItem(t), dt.tested = !0, dt.writable = !0;
  } catch {
    dt.tested = !0, dt.writable = !1;
  }
  return dt.writable;
};
function ac(t) {
  const e = {}, n = new URL(t);
  if (n.hash && n.hash[0] === "#")
    try {
      new URLSearchParams(n.hash.substring(1)).forEach((i, s) => {
        e[s] = i;
      });
    } catch {
    }
  return n.searchParams.forEach((r, i) => {
    e[i] = r;
  }), e;
}
const So = (t) => {
  let e;
  return t ? e = t : typeof fetch > "u" ? e = (...n) => Promise.resolve().then(() => Lt).then(({ default: r }) => r(...n)) : e = fetch, (...n) => e(...n);
}, lc = (t) => typeof t == "object" && t !== null && "status" in t && "ok" in t && "json" in t && typeof t.json == "function", Eo = async (t, e, n) => {
  await t.setItem(e, JSON.stringify(n));
}, gn = async (t, e) => {
  const n = await t.getItem(e);
  if (!n)
    return null;
  try {
    return JSON.parse(n);
  } catch {
    return n;
  }
}, mn = async (t, e) => {
  await t.removeItem(e);
};
class jn {
  constructor() {
    this.promise = new jn.promiseConstructor((e, n) => {
      this.resolve = e, this.reject = n;
    });
  }
}
jn.promiseConstructor = Promise;
function Zn(t) {
  const e = t.split(".");
  if (e.length !== 3)
    throw new Yt("Invalid JWT structure");
  for (let r = 0; r < e.length; r++)
    if (!Wu.test(e[r]))
      throw new Yt("JWT not in base64url format");
  return {
    // using base64url lib
    header: JSON.parse(Li(e[0])),
    payload: JSON.parse(Li(e[1])),
    signature: nc(e[2]),
    raw: {
      header: e[0],
      payload: e[1]
    }
  };
}
async function uc(t) {
  return await new Promise((e) => {
    setTimeout(() => e(null), t);
  });
}
function cc(t, e) {
  return new Promise((r, i) => {
    (async () => {
      for (let s = 0; s < 1 / 0; s++)
        try {
          const o = await t(s);
          if (!e(s, null, o)) {
            r(o);
            return;
          }
        } catch (o) {
          if (!e(s, o)) {
            i(o);
            return;
          }
        }
    })();
  });
}
function hc(t) {
  return ("0" + t.toString(16)).substr(-2);
}
function dc() {
  const e = new Uint32Array(56);
  if (typeof crypto > "u") {
    const n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~", r = n.length;
    let i = "";
    for (let s = 0; s < 56; s++)
      i += n.charAt(Math.floor(Math.random() * r));
    return i;
  }
  return crypto.getRandomValues(e), Array.from(e, hc).join("");
}
async function fc(t) {
  const n = new TextEncoder().encode(t), r = await crypto.subtle.digest("SHA-256", n), i = new Uint8Array(r);
  return Array.from(i).map((s) => String.fromCharCode(s)).join("");
}
async function pc(t) {
  if (!(typeof crypto < "u" && typeof crypto.subtle < "u" && typeof TextEncoder < "u"))
    return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."), t;
  const n = await fc(t);
  return btoa(n).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}
async function kt(t, e, n = !1) {
  const r = dc();
  let i = r;
  n && (i += "/PASSWORD_RECOVERY"), await Eo(t, `${e}-code-verifier`, i);
  const s = await pc(r);
  return [s, r === s ? "plain" : "s256"];
}
const gc = /^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;
function mc(t) {
  const e = t.headers.get(kr);
  if (!e || !e.match(gc))
    return null;
  try {
    return /* @__PURE__ */ new Date(`${e}T00:00:00.0Z`);
  } catch {
    return null;
  }
}
function yc(t) {
  if (!t)
    throw new Error("Missing exp claim");
  const e = Math.floor(Date.now() / 1e3);
  if (t <= e)
    throw new Error("JWT has expired");
}
function bc(t) {
  switch (t) {
    case "RS256":
      return {
        name: "RSASSA-PKCS1-v1_5",
        hash: { name: "SHA-256" }
      };
    case "ES256":
      return {
        name: "ECDSA",
        namedCurve: "P-256",
        hash: { name: "SHA-256" }
      };
    default:
      throw new Error("Invalid alg claim");
  }
}
const vc = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
function St(t) {
  if (!vc.test(t))
    throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not");
}
var wc = function(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
  return n;
};
const ft = (t) => t.msg || t.message || t.error_description || t.error || JSON.stringify(t), _c = [502, 503, 504];
async function $i(t) {
  var e;
  if (!lc(t))
    throw new Sr(ft(t), 0);
  if (_c.includes(t.status))
    throw new Sr(ft(t), t.status);
  let n;
  try {
    n = await t.json();
  } catch (s) {
    throw new xo(ft(s), s);
  }
  let r;
  const i = mc(t);
  if (i && i.getTime() >= _o["2024-01-01"].timestamp && typeof n == "object" && n && typeof n.code == "string" ? r = n.code : typeof n == "object" && n && typeof n.error_code == "string" && (r = n.error_code), r) {
    if (r === "weak_password")
      throw new Oi(ft(n), t.status, ((e = n.weak_password) === null || e === void 0 ? void 0 : e.reasons) || []);
    if (r === "session_not_found")
      throw new tt();
  } else if (typeof n == "object" && n && typeof n.weak_password == "object" && n.weak_password && Array.isArray(n.weak_password.reasons) && n.weak_password.reasons.length && n.weak_password.reasons.reduce((s, o) => s && typeof o == "string", !0))
    throw new Oi(ft(n), t.status, n.weak_password.reasons);
  throw new Ku(ft(n), t.status || 500, r);
}
const xc = (t, e, n, r) => {
  const i = { method: t, headers: (e == null ? void 0 : e.headers) || {} };
  return t === "GET" ? i : (i.headers = Object.assign({ "Content-Type": "application/json;charset=UTF-8" }, e == null ? void 0 : e.headers), i.body = JSON.stringify(r), Object.assign(Object.assign({}, i), n));
};
async function J(t, e, n, r) {
  var i;
  const s = Object.assign({}, r == null ? void 0 : r.headers);
  s[kr] || (s[kr] = _o["2024-01-01"].name), r != null && r.jwt && (s.Authorization = `Bearer ${r.jwt}`);
  const o = (i = r == null ? void 0 : r.query) !== null && i !== void 0 ? i : {};
  r != null && r.redirectTo && (o.redirect_to = r.redirectTo);
  const a = Object.keys(o).length ? "?" + new URLSearchParams(o).toString() : "", l = await kc(t, e, n + a, {
    headers: s,
    noResolveJson: r == null ? void 0 : r.noResolveJson
  }, {}, r == null ? void 0 : r.body);
  return r != null && r.xform ? r == null ? void 0 : r.xform(l) : { data: Object.assign({}, l), error: null };
}
async function kc(t, e, n, r, i, s) {
  const o = xc(e, r, i, s);
  let a;
  try {
    a = await t(n, Object.assign({}, o));
  } catch (l) {
    throw console.error(l), new Sr(ft(l), 0);
  }
  if (a.ok || await $i(a), r != null && r.noResolveJson)
    return a;
  try {
    return await a.json();
  } catch (l) {
    await $i(l);
  }
}
function Ke(t) {
  var e;
  let n = null;
  Tc(t) && (n = Object.assign({}, t), t.expires_at || (n.expires_at = sc(t.expires_in)));
  const r = (e = t.user) !== null && e !== void 0 ? e : t;
  return { data: { session: n, user: r }, error: null };
}
function Di(t) {
  const e = Ke(t);
  return !e.error && t.weak_password && typeof t.weak_password == "object" && Array.isArray(t.weak_password.reasons) && t.weak_password.reasons.length && t.weak_password.message && typeof t.weak_password.message == "string" && t.weak_password.reasons.reduce((n, r) => n && typeof r == "string", !0) && (e.data.weak_password = t.weak_password), e;
}
function rt(t) {
  var e;
  return { data: { user: (e = t.user) !== null && e !== void 0 ? e : t }, error: null };
}
function Sc(t) {
  return { data: t, error: null };
}
function Ec(t) {
  const { action_link: e, email_otp: n, hashed_token: r, redirect_to: i, verification_type: s } = t, o = wc(t, ["action_link", "email_otp", "hashed_token", "redirect_to", "verification_type"]), a = {
    action_link: e,
    email_otp: n,
    hashed_token: r,
    redirect_to: i,
    verification_type: s
  }, l = Object.assign({}, o);
  return {
    data: {
      properties: a,
      user: l
    },
    error: null
  };
}
function Cc(t) {
  return t;
}
function Tc(t) {
  return t.access_token && t.refresh_token && t.expires_in;
}
const er = ["global", "local", "others"];
var Ac = function(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
  return n;
};
class Pc {
  constructor({ url: e = "", headers: n = {}, fetch: r }) {
    this.url = e, this.headers = n, this.fetch = So(r), this.mfa = {
      listFactors: this._listFactors.bind(this),
      deleteFactor: this._deleteFactor.bind(this)
    };
  }
  /**
   * Removes a logged-in session.
   * @param jwt A valid, logged-in JWT.
   * @param scope The logout sope.
   */
  async signOut(e, n = er[0]) {
    if (er.indexOf(n) < 0)
      throw new Error(`@supabase/auth-js: Parameter scope must be one of ${er.join(", ")}`);
    try {
      return await J(this.fetch, "POST", `${this.url}/logout?scope=${n}`, {
        headers: this.headers,
        jwt: e,
        noResolveJson: !0
      }), { data: null, error: null };
    } catch (r) {
      if (q(r))
        return { data: null, error: r };
      throw r;
    }
  }
  /**
   * Sends an invite link to an email address.
   * @param email The email address of the user.
   * @param options Additional options to be included when inviting.
   */
  async inviteUserByEmail(e, n = {}) {
    try {
      return await J(this.fetch, "POST", `${this.url}/invite`, {
        body: { email: e, data: n.data },
        headers: this.headers,
        redirectTo: n.redirectTo,
        xform: rt
      });
    } catch (r) {
      if (q(r))
        return { data: { user: null }, error: r };
      throw r;
    }
  }
  /**
   * Generates email links and OTPs to be sent via a custom email provider.
   * @param email The user's email.
   * @param options.password User password. For signup only.
   * @param options.data Optional user metadata. For signup only.
   * @param options.redirectTo The redirect url which should be appended to the generated link
   */
  async generateLink(e) {
    try {
      const { options: n } = e, r = Ac(e, ["options"]), i = Object.assign(Object.assign({}, r), n);
      return "newEmail" in r && (i.new_email = r == null ? void 0 : r.newEmail, delete i.newEmail), await J(this.fetch, "POST", `${this.url}/admin/generate_link`, {
        body: i,
        headers: this.headers,
        xform: Ec,
        redirectTo: n == null ? void 0 : n.redirectTo
      });
    } catch (n) {
      if (q(n))
        return {
          data: {
            properties: null,
            user: null
          },
          error: n
        };
      throw n;
    }
  }
  // User Admin API
  /**
   * Creates a new user.
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async createUser(e) {
    try {
      return await J(this.fetch, "POST", `${this.url}/admin/users`, {
        body: e,
        headers: this.headers,
        xform: rt
      });
    } catch (n) {
      if (q(n))
        return { data: { user: null }, error: n };
      throw n;
    }
  }
  /**
   * Get a list of users.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   * @param params An object which supports `page` and `perPage` as numbers, to alter the paginated results.
   */
  async listUsers(e) {
    var n, r, i, s, o, a, l;
    try {
      const c = { nextPage: null, lastPage: 0, total: 0 }, u = await J(this.fetch, "GET", `${this.url}/admin/users`, {
        headers: this.headers,
        noResolveJson: !0,
        query: {
          page: (r = (n = e == null ? void 0 : e.page) === null || n === void 0 ? void 0 : n.toString()) !== null && r !== void 0 ? r : "",
          per_page: (s = (i = e == null ? void 0 : e.perPage) === null || i === void 0 ? void 0 : i.toString()) !== null && s !== void 0 ? s : ""
        },
        xform: Cc
      });
      if (u.error)
        throw u.error;
      const h = await u.json(), f = (o = u.headers.get("x-total-count")) !== null && o !== void 0 ? o : 0, d = (l = (a = u.headers.get("link")) === null || a === void 0 ? void 0 : a.split(",")) !== null && l !== void 0 ? l : [];
      return d.length > 0 && (d.forEach((y) => {
        const b = parseInt(y.split(";")[0].split("=")[1].substring(0, 1)), w = JSON.parse(y.split(";")[1].split("=")[1]);
        c[`${w}Page`] = b;
      }), c.total = parseInt(f)), { data: Object.assign(Object.assign({}, h), c), error: null };
    } catch (c) {
      if (q(c))
        return { data: { users: [] }, error: c };
      throw c;
    }
  }
  /**
   * Get user by id.
   *
   * @param uid The user's unique identifier
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async getUserById(e) {
    St(e);
    try {
      return await J(this.fetch, "GET", `${this.url}/admin/users/${e}`, {
        headers: this.headers,
        xform: rt
      });
    } catch (n) {
      if (q(n))
        return { data: { user: null }, error: n };
      throw n;
    }
  }
  /**
   * Updates the user data.
   *
   * @param attributes The data you want to update.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async updateUserById(e, n) {
    St(e);
    try {
      return await J(this.fetch, "PUT", `${this.url}/admin/users/${e}`, {
        body: n,
        headers: this.headers,
        xform: rt
      });
    } catch (r) {
      if (q(r))
        return { data: { user: null }, error: r };
      throw r;
    }
  }
  /**
   * Delete a user. Requires a `service_role` key.
   *
   * @param id The user id you want to remove.
   * @param shouldSoftDelete If true, then the user will be soft-deleted from the auth schema. Soft deletion allows user identification from the hashed user ID but is not reversible.
   * Defaults to false for backward compatibility.
   *
   * This function should only be called on a server. Never expose your `service_role` key in the browser.
   */
  async deleteUser(e, n = !1) {
    St(e);
    try {
      return await J(this.fetch, "DELETE", `${this.url}/admin/users/${e}`, {
        headers: this.headers,
        body: {
          should_soft_delete: n
        },
        xform: rt
      });
    } catch (r) {
      if (q(r))
        return { data: { user: null }, error: r };
      throw r;
    }
  }
  async _listFactors(e) {
    St(e.userId);
    try {
      const { data: n, error: r } = await J(this.fetch, "GET", `${this.url}/admin/users/${e.userId}/factors`, {
        headers: this.headers,
        xform: (i) => ({ data: { factors: i }, error: null })
      });
      return { data: n, error: r };
    } catch (n) {
      if (q(n))
        return { data: null, error: n };
      throw n;
    }
  }
  async _deleteFactor(e) {
    St(e.userId), St(e.id);
    try {
      return { data: await J(this.fetch, "DELETE", `${this.url}/admin/users/${e.userId}/factors/${e.id}`, {
        headers: this.headers
      }), error: null };
    } catch (n) {
      if (q(n))
        return { data: null, error: n };
      throw n;
    }
  }
}
const Ic = {
  getItem: (t) => Xt() ? globalThis.localStorage.getItem(t) : null,
  setItem: (t, e) => {
    Xt() && globalThis.localStorage.setItem(t, e);
  },
  removeItem: (t) => {
    Xt() && globalThis.localStorage.removeItem(t);
  }
};
function Ni(t = {}) {
  return {
    getItem: (e) => t[e] || null,
    setItem: (e, n) => {
      t[e] = n;
    },
    removeItem: (e) => {
      delete t[e];
    }
  };
}
function Oc() {
  if (typeof globalThis != "object")
    try {
      Object.defineProperty(Object.prototype, "__magic__", {
        get: function() {
          return this;
        },
        configurable: !0
      }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__;
    } catch {
      typeof self < "u" && (self.globalThis = self);
    }
}
const Et = {
  /**
   * @experimental
   */
  debug: !!(globalThis && Xt() && globalThis.localStorage && globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug") === "true")
};
class Co extends Error {
  constructor(e) {
    super(e), this.isAcquireTimeout = !0;
  }
}
class Rc extends Co {
}
async function jc(t, e, n) {
  Et.debug && console.log("@supabase/gotrue-js: navigatorLock: acquire lock", t, e);
  const r = new globalThis.AbortController();
  return e > 0 && setTimeout(() => {
    r.abort(), Et.debug && console.log("@supabase/gotrue-js: navigatorLock acquire timed out", t);
  }, e), await Promise.resolve().then(() => globalThis.navigator.locks.request(t, e === 0 ? {
    mode: "exclusive",
    ifAvailable: !0
  } : {
    mode: "exclusive",
    signal: r.signal
  }, async (i) => {
    if (i) {
      Et.debug && console.log("@supabase/gotrue-js: navigatorLock: acquired", t, i.name);
      try {
        return await n();
      } finally {
        Et.debug && console.log("@supabase/gotrue-js: navigatorLock: released", t, i.name);
      }
    } else {
      if (e === 0)
        throw Et.debug && console.log("@supabase/gotrue-js: navigatorLock: not immediately available", t), new Rc(`Acquiring an exclusive Navigator LockManager lock "${t}" immediately failed`);
      if (Et.debug)
        try {
          const s = await globalThis.navigator.locks.query();
          console.log("@supabase/gotrue-js: Navigator LockManager state", JSON.stringify(s, null, "  "));
        } catch (s) {
          console.warn("@supabase/gotrue-js: Error when querying Navigator LockManager state", s);
        }
      return console.warn("@supabase/gotrue-js: Navigator LockManager returned a null lock when using #request without ifAvailable set to true, it appears this browser is not following the LockManager spec https://developer.mozilla.org/en-US/docs/Web/API/LockManager/request"), await n();
    }
  }));
}
Oc();
const Lc = {
  url: qu,
  storageKey: Vu,
  autoRefreshToken: !0,
  persistSession: !0,
  detectSessionInUrl: !0,
  headers: Hu,
  flowType: "implicit",
  debug: !1,
  hasCustomAuthorizationHeader: !1
};
async function zi(t, e, n) {
  return await n();
}
class tn {
  /**
   * Create a new client for use in the browser.
   */
  constructor(e) {
    var n, r;
    this.memoryStorage = null, this.stateChangeEmitters = /* @__PURE__ */ new Map(), this.autoRefreshTicker = null, this.visibilityChangedCallback = null, this.refreshingDeferred = null, this.initializePromise = null, this.detectSessionInUrl = !0, this.hasCustomAuthorizationHeader = !1, this.suppressGetSessionWarning = !1, this.lockAcquired = !1, this.pendingInLock = [], this.broadcastChannel = null, this.logger = console.log, this.instanceID = tn.nextInstanceID, tn.nextInstanceID += 1, this.instanceID > 0 && ze() && console.warn("Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.");
    const i = Object.assign(Object.assign({}, Lc), e);
    if (this.logDebugMessages = !!i.debug, typeof i.debug == "function" && (this.logger = i.debug), this.persistSession = i.persistSession, this.storageKey = i.storageKey, this.autoRefreshToken = i.autoRefreshToken, this.admin = new Pc({
      url: i.url,
      headers: i.headers,
      fetch: i.fetch
    }), this.url = i.url, this.headers = i.headers, this.fetch = So(i.fetch), this.lock = i.lock || zi, this.detectSessionInUrl = i.detectSessionInUrl, this.flowType = i.flowType, this.hasCustomAuthorizationHeader = i.hasCustomAuthorizationHeader, i.lock ? this.lock = i.lock : ze() && (!((n = globalThis == null ? void 0 : globalThis.navigator) === null || n === void 0) && n.locks) ? this.lock = jc : this.lock = zi, this.jwks = { keys: [] }, this.jwks_cached_at = Number.MIN_SAFE_INTEGER, this.mfa = {
      verify: this._verify.bind(this),
      enroll: this._enroll.bind(this),
      unenroll: this._unenroll.bind(this),
      challenge: this._challenge.bind(this),
      listFactors: this._listFactors.bind(this),
      challengeAndVerify: this._challengeAndVerify.bind(this),
      getAuthenticatorAssuranceLevel: this._getAuthenticatorAssuranceLevel.bind(this)
    }, this.persistSession ? i.storage ? this.storage = i.storage : Xt() ? this.storage = Ic : (this.memoryStorage = {}, this.storage = Ni(this.memoryStorage)) : (this.memoryStorage = {}, this.storage = Ni(this.memoryStorage)), ze() && globalThis.BroadcastChannel && this.persistSession && this.storageKey) {
      try {
        this.broadcastChannel = new globalThis.BroadcastChannel(this.storageKey);
      } catch (s) {
        console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available", s);
      }
      (r = this.broadcastChannel) === null || r === void 0 || r.addEventListener("message", async (s) => {
        this._debug("received broadcast notification from other tab or client", s), await this._notifyAllSubscribers(s.data.event, s.data.session, !1);
      });
    }
    this.initialize();
  }
  _debug(...e) {
    return this.logDebugMessages && this.logger(`GoTrueClient@${this.instanceID} (${wo}) ${(/* @__PURE__ */ new Date()).toISOString()}`, ...e), this;
  }
  /**
   * Initializes the client session either from the url or from storage.
   * This method is automatically called when instantiating the client, but should also be called
   * manually when checking for an error from an auth redirect (oauth, magiclink, password recovery, etc).
   */
  async initialize() {
    return this.initializePromise ? await this.initializePromise : (this.initializePromise = (async () => await this._acquireLock(-1, async () => await this._initialize()))(), await this.initializePromise);
  }
  /**
   * IMPORTANT:
   * 1. Never throw in this method, as it is called from the constructor
   * 2. Never return a session from this method as it would be cached over
   *    the whole lifetime of the client
   */
  async _initialize() {
    var e;
    try {
      const n = ac(window.location.href);
      let r = "none";
      if (this._isImplicitGrantCallback(n) ? r = "implicit" : await this._isPKCECallback(n) && (r = "pkce"), ze() && this.detectSessionInUrl && r !== "none") {
        const { data: i, error: s } = await this._getSessionFromURL(n, r);
        if (s) {
          if (this._debug("#_initialize()", "error detecting session from URL", s), Xu(s)) {
            const l = (e = s.details) === null || e === void 0 ? void 0 : e.code;
            if (l === "identity_already_exists" || l === "identity_not_found" || l === "single_identity_not_deletable")
              return { error: s };
          }
          return await this._removeSession(), { error: s };
        }
        const { session: o, redirectType: a } = i;
        return this._debug("#_initialize()", "detected session in URL", o, "redirect type", a), await this._saveSession(o), setTimeout(async () => {
          a === "recovery" ? await this._notifyAllSubscribers("PASSWORD_RECOVERY", o) : await this._notifyAllSubscribers("SIGNED_IN", o);
        }, 0), { error: null };
      }
      return await this._recoverAndRefresh(), { error: null };
    } catch (n) {
      return q(n) ? { error: n } : {
        error: new xo("Unexpected error during initialization", n)
      };
    } finally {
      await this._handleVisibilityChange(), this._debug("#_initialize()", "end");
    }
  }
  /**
   * Creates a new anonymous user.
   *
   * @returns A session where the is_anonymous claim in the access token JWT set to true
   */
  async signInAnonymously(e) {
    var n, r, i;
    try {
      const s = await J(this.fetch, "POST", `${this.url}/signup`, {
        headers: this.headers,
        body: {
          data: (r = (n = e == null ? void 0 : e.options) === null || n === void 0 ? void 0 : n.data) !== null && r !== void 0 ? r : {},
          gotrue_meta_security: { captcha_token: (i = e == null ? void 0 : e.options) === null || i === void 0 ? void 0 : i.captchaToken }
        },
        xform: Ke
      }), { data: o, error: a } = s;
      if (a || !o)
        return { data: { user: null, session: null }, error: a };
      const l = o.session, c = o.user;
      return o.session && (await this._saveSession(o.session), await this._notifyAllSubscribers("SIGNED_IN", l)), { data: { user: c, session: l }, error: null };
    } catch (s) {
      if (q(s))
        return { data: { user: null, session: null }, error: s };
      throw s;
    }
  }
  /**
   * Creates a new user.
   *
   * Be aware that if a user account exists in the system you may get back an
   * error message that attempts to hide this information from the user.
   * This method has support for PKCE via email signups. The PKCE flow cannot be used when autoconfirm is enabled.
   *
   * @returns A logged-in session if the server has "autoconfirm" ON
   * @returns A user if the server has "autoconfirm" OFF
   */
  async signUp(e) {
    var n, r, i;
    try {
      let s;
      if ("email" in e) {
        const { email: u, password: h, options: f } = e;
        let d = null, y = null;
        this.flowType === "pkce" && ([d, y] = await kt(this.storage, this.storageKey)), s = await J(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          redirectTo: f == null ? void 0 : f.emailRedirectTo,
          body: {
            email: u,
            password: h,
            data: (n = f == null ? void 0 : f.data) !== null && n !== void 0 ? n : {},
            gotrue_meta_security: { captcha_token: f == null ? void 0 : f.captchaToken },
            code_challenge: d,
            code_challenge_method: y
          },
          xform: Ke
        });
      } else if ("phone" in e) {
        const { phone: u, password: h, options: f } = e;
        s = await J(this.fetch, "POST", `${this.url}/signup`, {
          headers: this.headers,
          body: {
            phone: u,
            password: h,
            data: (r = f == null ? void 0 : f.data) !== null && r !== void 0 ? r : {},
            channel: (i = f == null ? void 0 : f.channel) !== null && i !== void 0 ? i : "sms",
            gotrue_meta_security: { captcha_token: f == null ? void 0 : f.captchaToken }
          },
          xform: Ke
        });
      } else
        throw new fn("You must provide either an email or phone number and a password");
      const { data: o, error: a } = s;
      if (a || !o)
        return { data: { user: null, session: null }, error: a };
      const l = o.session, c = o.user;
      return o.session && (await this._saveSession(o.session), await this._notifyAllSubscribers("SIGNED_IN", l)), { data: { user: c, session: l }, error: null };
    } catch (s) {
      if (q(s))
        return { data: { user: null, session: null }, error: s };
      throw s;
    }
  }
  /**
   * Log in an existing user with an email and password or phone and password.
   *
   * Be aware that you may get back an error message that will not distinguish
   * between the cases where the account does not exist or that the
   * email/phone and password combination is wrong or that the account can only
   * be accessed via social login.
   */
  async signInWithPassword(e) {
    try {
      let n;
      if ("email" in e) {
        const { email: s, password: o, options: a } = e;
        n = await J(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            email: s,
            password: o,
            gotrue_meta_security: { captcha_token: a == null ? void 0 : a.captchaToken }
          },
          xform: Di
        });
      } else if ("phone" in e) {
        const { phone: s, password: o, options: a } = e;
        n = await J(this.fetch, "POST", `${this.url}/token?grant_type=password`, {
          headers: this.headers,
          body: {
            phone: s,
            password: o,
            gotrue_meta_security: { captcha_token: a == null ? void 0 : a.captchaToken }
          },
          xform: Di
        });
      } else
        throw new fn("You must provide either an email or phone number and a password");
      const { data: r, error: i } = n;
      return i ? { data: { user: null, session: null }, error: i } : !r || !r.session || !r.user ? { data: { user: null, session: null }, error: new dn() } : (r.session && (await this._saveSession(r.session), await this._notifyAllSubscribers("SIGNED_IN", r.session)), {
        data: Object.assign({ user: r.user, session: r.session }, r.weak_password ? { weakPassword: r.weak_password } : null),
        error: i
      });
    } catch (n) {
      if (q(n))
        return { data: { user: null, session: null }, error: n };
      throw n;
    }
  }
  /**
   * Log in an existing user via a third-party provider.
   * This method supports the PKCE flow.
   */
  async signInWithOAuth(e) {
    var n, r, i, s;
    return await this._handleProviderSignIn(e.provider, {
      redirectTo: (n = e.options) === null || n === void 0 ? void 0 : n.redirectTo,
      scopes: (r = e.options) === null || r === void 0 ? void 0 : r.scopes,
      queryParams: (i = e.options) === null || i === void 0 ? void 0 : i.queryParams,
      skipBrowserRedirect: (s = e.options) === null || s === void 0 ? void 0 : s.skipBrowserRedirect
    });
  }
  /**
   * Log in an existing user by exchanging an Auth Code issued during the PKCE flow.
   */
  async exchangeCodeForSession(e) {
    return await this.initializePromise, this._acquireLock(-1, async () => this._exchangeCodeForSession(e));
  }
  /**
   * Signs in a user by verifying a message signed by the user's private key.
   * Only Solana supported at this time, using the Sign in with Solana standard.
   */
  async signInWithWeb3(e) {
    const { chain: n } = e;
    if (n === "solana")
      return await this.signInWithSolana(e);
    throw new Error(`@supabase/auth-js: Unsupported chain "${n}"`);
  }
  async signInWithSolana(e) {
    var n, r, i, s, o, a, l, c, u, h, f, d;
    let y, b;
    if ("message" in e)
      y = e.message, b = e.signature;
    else {
      const { chain: w, wallet: v, statement: C, options: k } = e;
      let I;
      if (ze())
        if (typeof v == "object")
          I = v;
        else {
          const _ = window;
          if ("solana" in _ && typeof _.solana == "object" && ("signIn" in _.solana && typeof _.solana.signIn == "function" || "signMessage" in _.solana && typeof _.solana.signMessage == "function"))
            I = _.solana;
          else
            throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.");
        }
      else {
        if (typeof v != "object" || !(k != null && k.url))
          throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");
        I = v;
      }
      const $ = new URL((n = k == null ? void 0 : k.url) !== null && n !== void 0 ? n : window.location.href);
      if ("signIn" in I && I.signIn) {
        const _ = await I.signIn(Object.assign(Object.assign(Object.assign({ issuedAt: (/* @__PURE__ */ new Date()).toISOString() }, k == null ? void 0 : k.signInWithSolana), {
          // non-overridable properties
          version: "1",
          domain: $.host,
          uri: $.href
        }), C ? { statement: C } : null));
        let D;
        if (Array.isArray(_) && _[0] && typeof _[0] == "object")
          D = _[0];
        else if (_ && typeof _ == "object" && "signedMessage" in _ && "signature" in _)
          D = _;
        else
          throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");
        if ("signedMessage" in D && "signature" in D && (typeof D.signedMessage == "string" || D.signedMessage instanceof Uint8Array) && D.signature instanceof Uint8Array)
          y = typeof D.signedMessage == "string" ? D.signedMessage : new TextDecoder().decode(D.signedMessage), b = D.signature;
        else
          throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields");
      } else {
        if (!("signMessage" in I) || typeof I.signMessage != "function" || !("publicKey" in I) || typeof I != "object" || !I.publicKey || !("toBase58" in I.publicKey) || typeof I.publicKey.toBase58 != "function")
          throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");
        y = [
          `${$.host} wants you to sign in with your Solana account:`,
          I.publicKey.toBase58(),
          ...C ? ["", C, ""] : [""],
          "Version: 1",
          `URI: ${$.href}`,
          `Issued At: ${(i = (r = k == null ? void 0 : k.signInWithSolana) === null || r === void 0 ? void 0 : r.issuedAt) !== null && i !== void 0 ? i : (/* @__PURE__ */ new Date()).toISOString()}`,
          ...!((s = k == null ? void 0 : k.signInWithSolana) === null || s === void 0) && s.notBefore ? [`Not Before: ${k.signInWithSolana.notBefore}`] : [],
          ...!((o = k == null ? void 0 : k.signInWithSolana) === null || o === void 0) && o.expirationTime ? [`Expiration Time: ${k.signInWithSolana.expirationTime}`] : [],
          ...!((a = k == null ? void 0 : k.signInWithSolana) === null || a === void 0) && a.chainId ? [`Chain ID: ${k.signInWithSolana.chainId}`] : [],
          ...!((l = k == null ? void 0 : k.signInWithSolana) === null || l === void 0) && l.nonce ? [`Nonce: ${k.signInWithSolana.nonce}`] : [],
          ...!((c = k == null ? void 0 : k.signInWithSolana) === null || c === void 0) && c.requestId ? [`Request ID: ${k.signInWithSolana.requestId}`] : [],
          ...!((h = (u = k == null ? void 0 : k.signInWithSolana) === null || u === void 0 ? void 0 : u.resources) === null || h === void 0) && h.length ? [
            "Resources",
            ...k.signInWithSolana.resources.map((D) => `- ${D}`)
          ] : []
        ].join(`
`);
        const _ = await I.signMessage(new TextEncoder().encode(y), "utf8");
        if (!_ || !(_ instanceof Uint8Array))
          throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");
        b = _;
      }
    }
    try {
      const { data: w, error: v } = await J(this.fetch, "POST", `${this.url}/token?grant_type=web3`, {
        headers: this.headers,
        body: Object.assign({ chain: "solana", message: y, signature: ic(b) }, !((f = e.options) === null || f === void 0) && f.captchaToken ? { gotrue_meta_security: { captcha_token: (d = e.options) === null || d === void 0 ? void 0 : d.captchaToken } } : null),
        xform: Ke
      });
      if (v)
        throw v;
      return !w || !w.session || !w.user ? {
        data: { user: null, session: null },
        error: new dn()
      } : (w.session && (await this._saveSession(w.session), await this._notifyAllSubscribers("SIGNED_IN", w.session)), { data: Object.assign({}, w), error: v });
    } catch (w) {
      if (q(w))
        return { data: { user: null, session: null }, error: w };
      throw w;
    }
  }
  async _exchangeCodeForSession(e) {
    const n = await gn(this.storage, `${this.storageKey}-code-verifier`), [r, i] = (n ?? "").split("/");
    try {
      const { data: s, error: o } = await J(this.fetch, "POST", `${this.url}/token?grant_type=pkce`, {
        headers: this.headers,
        body: {
          auth_code: e,
          code_verifier: r
        },
        xform: Ke
      });
      if (await mn(this.storage, `${this.storageKey}-code-verifier`), o)
        throw o;
      return !s || !s.session || !s.user ? {
        data: { user: null, session: null, redirectType: null },
        error: new dn()
      } : (s.session && (await this._saveSession(s.session), await this._notifyAllSubscribers("SIGNED_IN", s.session)), { data: Object.assign(Object.assign({}, s), { redirectType: i ?? null }), error: o });
    } catch (s) {
      if (q(s))
        return { data: { user: null, session: null, redirectType: null }, error: s };
      throw s;
    }
  }
  /**
   * Allows signing in with an OIDC ID token. The authentication provider used
   * should be enabled and configured.
   */
  async signInWithIdToken(e) {
    try {
      const { options: n, provider: r, token: i, access_token: s, nonce: o } = e, a = await J(this.fetch, "POST", `${this.url}/token?grant_type=id_token`, {
        headers: this.headers,
        body: {
          provider: r,
          id_token: i,
          access_token: s,
          nonce: o,
          gotrue_meta_security: { captcha_token: n == null ? void 0 : n.captchaToken }
        },
        xform: Ke
      }), { data: l, error: c } = a;
      return c ? { data: { user: null, session: null }, error: c } : !l || !l.session || !l.user ? {
        data: { user: null, session: null },
        error: new dn()
      } : (l.session && (await this._saveSession(l.session), await this._notifyAllSubscribers("SIGNED_IN", l.session)), { data: l, error: c });
    } catch (n) {
      if (q(n))
        return { data: { user: null, session: null }, error: n };
      throw n;
    }
  }
  /**
   * Log in a user using magiclink or a one-time password (OTP).
   *
   * If the `{{ .ConfirmationURL }}` variable is specified in the email template, a magiclink will be sent.
   * If the `{{ .Token }}` variable is specified in the email template, an OTP will be sent.
   * If you're using phone sign-ins, only an OTP will be sent. You won't be able to send a magiclink for phone sign-ins.
   *
   * Be aware that you may get back an error message that will not distinguish
   * between the cases where the account does not exist or, that the account
   * can only be accessed via social login.
   *
   * Do note that you will need to configure a Whatsapp sender on Twilio
   * if you are using phone sign in with the 'whatsapp' channel. The whatsapp
   * channel is not supported on other providers
   * at this time.
   * This method supports PKCE when an email is passed.
   */
  async signInWithOtp(e) {
    var n, r, i, s, o;
    try {
      if ("email" in e) {
        const { email: a, options: l } = e;
        let c = null, u = null;
        this.flowType === "pkce" && ([c, u] = await kt(this.storage, this.storageKey));
        const { error: h } = await J(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            email: a,
            data: (n = l == null ? void 0 : l.data) !== null && n !== void 0 ? n : {},
            create_user: (r = l == null ? void 0 : l.shouldCreateUser) !== null && r !== void 0 ? r : !0,
            gotrue_meta_security: { captcha_token: l == null ? void 0 : l.captchaToken },
            code_challenge: c,
            code_challenge_method: u
          },
          redirectTo: l == null ? void 0 : l.emailRedirectTo
        });
        return { data: { user: null, session: null }, error: h };
      }
      if ("phone" in e) {
        const { phone: a, options: l } = e, { data: c, error: u } = await J(this.fetch, "POST", `${this.url}/otp`, {
          headers: this.headers,
          body: {
            phone: a,
            data: (i = l == null ? void 0 : l.data) !== null && i !== void 0 ? i : {},
            create_user: (s = l == null ? void 0 : l.shouldCreateUser) !== null && s !== void 0 ? s : !0,
            gotrue_meta_security: { captcha_token: l == null ? void 0 : l.captchaToken },
            channel: (o = l == null ? void 0 : l.channel) !== null && o !== void 0 ? o : "sms"
          }
        });
        return { data: { user: null, session: null, messageId: c == null ? void 0 : c.message_id }, error: u };
      }
      throw new fn("You must provide either an email or phone number.");
    } catch (a) {
      if (q(a))
        return { data: { user: null, session: null }, error: a };
      throw a;
    }
  }
  /**
   * Log in a user given a User supplied OTP or TokenHash received through mobile or email.
   */
  async verifyOtp(e) {
    var n, r;
    try {
      let i, s;
      "options" in e && (i = (n = e.options) === null || n === void 0 ? void 0 : n.redirectTo, s = (r = e.options) === null || r === void 0 ? void 0 : r.captchaToken);
      const { data: o, error: a } = await J(this.fetch, "POST", `${this.url}/verify`, {
        headers: this.headers,
        body: Object.assign(Object.assign({}, e), { gotrue_meta_security: { captcha_token: s } }),
        redirectTo: i,
        xform: Ke
      });
      if (a)
        throw a;
      if (!o)
        throw new Error("An error occurred on token verification.");
      const l = o.session, c = o.user;
      return l != null && l.access_token && (await this._saveSession(l), await this._notifyAllSubscribers(e.type == "recovery" ? "PASSWORD_RECOVERY" : "SIGNED_IN", l)), { data: { user: c, session: l }, error: null };
    } catch (i) {
      if (q(i))
        return { data: { user: null, session: null }, error: i };
      throw i;
    }
  }
  /**
   * Attempts a single-sign on using an enterprise Identity Provider. A
   * successful SSO attempt will redirect the current page to the identity
   * provider authorization page. The redirect URL is implementation and SSO
   * protocol specific.
   *
   * You can use it by providing a SSO domain. Typically you can extract this
   * domain by asking users for their email address. If this domain is
   * registered on the Auth instance the redirect will use that organization's
   * currently active SSO Identity Provider for the login.
   *
   * If you have built an organization-specific login page, you can use the
   * organization's SSO Identity Provider UUID directly instead.
   */
  async signInWithSSO(e) {
    var n, r, i;
    try {
      let s = null, o = null;
      return this.flowType === "pkce" && ([s, o] = await kt(this.storage, this.storageKey)), await J(this.fetch, "POST", `${this.url}/sso`, {
        body: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, "providerId" in e ? { provider_id: e.providerId } : null), "domain" in e ? { domain: e.domain } : null), { redirect_to: (r = (n = e.options) === null || n === void 0 ? void 0 : n.redirectTo) !== null && r !== void 0 ? r : void 0 }), !((i = e == null ? void 0 : e.options) === null || i === void 0) && i.captchaToken ? { gotrue_meta_security: { captcha_token: e.options.captchaToken } } : null), { skip_http_redirect: !0, code_challenge: s, code_challenge_method: o }),
        headers: this.headers,
        xform: Sc
      });
    } catch (s) {
      if (q(s))
        return { data: null, error: s };
      throw s;
    }
  }
  /**
   * Sends a reauthentication OTP to the user's email or phone number.
   * Requires the user to be signed-in.
   */
  async reauthenticate() {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._reauthenticate());
  }
  async _reauthenticate() {
    try {
      return await this._useSession(async (e) => {
        const { data: { session: n }, error: r } = e;
        if (r)
          throw r;
        if (!n)
          throw new tt();
        const { error: i } = await J(this.fetch, "GET", `${this.url}/reauthenticate`, {
          headers: this.headers,
          jwt: n.access_token
        });
        return { data: { user: null, session: null }, error: i };
      });
    } catch (e) {
      if (q(e))
        return { data: { user: null, session: null }, error: e };
      throw e;
    }
  }
  /**
   * Resends an existing signup confirmation email, email change email, SMS OTP or phone change OTP.
   */
  async resend(e) {
    try {
      const n = `${this.url}/resend`;
      if ("email" in e) {
        const { email: r, type: i, options: s } = e, { error: o } = await J(this.fetch, "POST", n, {
          headers: this.headers,
          body: {
            email: r,
            type: i,
            gotrue_meta_security: { captcha_token: s == null ? void 0 : s.captchaToken }
          },
          redirectTo: s == null ? void 0 : s.emailRedirectTo
        });
        return { data: { user: null, session: null }, error: o };
      } else if ("phone" in e) {
        const { phone: r, type: i, options: s } = e, { data: o, error: a } = await J(this.fetch, "POST", n, {
          headers: this.headers,
          body: {
            phone: r,
            type: i,
            gotrue_meta_security: { captcha_token: s == null ? void 0 : s.captchaToken }
          }
        });
        return { data: { user: null, session: null, messageId: o == null ? void 0 : o.message_id }, error: a };
      }
      throw new fn("You must provide either an email or phone number and a type");
    } catch (n) {
      if (q(n))
        return { data: { user: null, session: null }, error: n };
      throw n;
    }
  }
  /**
   * Returns the session, refreshing it if necessary.
   *
   * The session returned can be null if the session is not detected which can happen in the event a user is not signed-in or has logged out.
   *
   * **IMPORTANT:** This method loads values directly from the storage attached
   * to the client. If that storage is based on request cookies for example,
   * the values in it may not be authentic and therefore it's strongly advised
   * against using this method and its results in such circumstances. A warning
   * will be emitted if this is detected. Use {@link #getUser()} instead.
   */
  async getSession() {
    return await this.initializePromise, await this._acquireLock(-1, async () => this._useSession(async (n) => n));
  }
  /**
   * Acquires a global lock based on the storage key.
   */
  async _acquireLock(e, n) {
    this._debug("#_acquireLock", "begin", e);
    try {
      if (this.lockAcquired) {
        const r = this.pendingInLock.length ? this.pendingInLock[this.pendingInLock.length - 1] : Promise.resolve(), i = (async () => (await r, await n()))();
        return this.pendingInLock.push((async () => {
          try {
            await i;
          } catch {
          }
        })()), i;
      }
      return await this.lock(`lock:${this.storageKey}`, e, async () => {
        this._debug("#_acquireLock", "lock acquired for storage key", this.storageKey);
        try {
          this.lockAcquired = !0;
          const r = n();
          for (this.pendingInLock.push((async () => {
            try {
              await r;
            } catch {
            }
          })()), await r; this.pendingInLock.length; ) {
            const i = [...this.pendingInLock];
            await Promise.all(i), this.pendingInLock.splice(0, i.length);
          }
          return await r;
        } finally {
          this._debug("#_acquireLock", "lock released for storage key", this.storageKey), this.lockAcquired = !1;
        }
      });
    } finally {
      this._debug("#_acquireLock", "end");
    }
  }
  /**
   * Use instead of {@link #getSession} inside the library. It is
   * semantically usually what you want, as getting a session involves some
   * processing afterwards that requires only one client operating on the
   * session at once across multiple tabs or processes.
   */
  async _useSession(e) {
    this._debug("#_useSession", "begin");
    try {
      const n = await this.__loadSession();
      return await e(n);
    } finally {
      this._debug("#_useSession", "end");
    }
  }
  /**
   * NEVER USE DIRECTLY!
   *
   * Always use {@link #_useSession}.
   */
  async __loadSession() {
    this._debug("#__loadSession()", "begin"), this.lockAcquired || this._debug("#__loadSession()", "used outside of an acquired lock!", new Error().stack);
    try {
      let e = null;
      const n = await gn(this.storage, this.storageKey);
      if (this._debug("#getSession()", "session from storage", n), n !== null && (this._isValidSession(n) ? e = n : (this._debug("#getSession()", "session from storage is not valid"), await this._removeSession())), !e)
        return { data: { session: null }, error: null };
      const r = e.expires_at ? e.expires_at * 1e3 - Date.now() < Xn : !1;
      if (this._debug("#__loadSession()", `session has${r ? "" : " not"} expired`, "expires_at", e.expires_at), !r) {
        if (this.storage.isServer) {
          let o = this.suppressGetSessionWarning;
          e = new Proxy(e, {
            get: (l, c, u) => (!o && c === "user" && (console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."), o = !0, this.suppressGetSessionWarning = !0), Reflect.get(l, c, u))
          });
        }
        return { data: { session: e }, error: null };
      }
      const { session: i, error: s } = await this._callRefreshToken(e.refresh_token);
      return s ? { data: { session: null }, error: s } : { data: { session: i }, error: null };
    } finally {
      this._debug("#__loadSession()", "end");
    }
  }
  /**
   * Gets the current user details if there is an existing session. This method
   * performs a network request to the Supabase Auth server, so the returned
   * value is authentic and can be used to base authorization rules on.
   *
   * @param jwt Takes in an optional access token JWT. If no JWT is provided, the JWT from the current session is used.
   */
  async getUser(e) {
    return e ? await this._getUser(e) : (await this.initializePromise, await this._acquireLock(-1, async () => await this._getUser()));
  }
  async _getUser(e) {
    try {
      return e ? await J(this.fetch, "GET", `${this.url}/user`, {
        headers: this.headers,
        jwt: e,
        xform: rt
      }) : await this._useSession(async (n) => {
        var r, i, s;
        const { data: o, error: a } = n;
        if (a)
          throw a;
        return !(!((r = o.session) === null || r === void 0) && r.access_token) && !this.hasCustomAuthorizationHeader ? { data: { user: null }, error: new tt() } : await J(this.fetch, "GET", `${this.url}/user`, {
          headers: this.headers,
          jwt: (s = (i = o.session) === null || i === void 0 ? void 0 : i.access_token) !== null && s !== void 0 ? s : void 0,
          xform: rt
        });
      });
    } catch (n) {
      if (q(n))
        return Yu(n) && (await this._removeSession(), await mn(this.storage, `${this.storageKey}-code-verifier`)), { data: { user: null }, error: n };
      throw n;
    }
  }
  /**
   * Updates user data for a logged in user.
   */
  async updateUser(e, n = {}) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._updateUser(e, n));
  }
  async _updateUser(e, n = {}) {
    try {
      return await this._useSession(async (r) => {
        const { data: i, error: s } = r;
        if (s)
          throw s;
        if (!i.session)
          throw new tt();
        const o = i.session;
        let a = null, l = null;
        this.flowType === "pkce" && e.email != null && ([a, l] = await kt(this.storage, this.storageKey));
        const { data: c, error: u } = await J(this.fetch, "PUT", `${this.url}/user`, {
          headers: this.headers,
          redirectTo: n == null ? void 0 : n.emailRedirectTo,
          body: Object.assign(Object.assign({}, e), { code_challenge: a, code_challenge_method: l }),
          jwt: o.access_token,
          xform: rt
        });
        if (u)
          throw u;
        return o.user = c.user, await this._saveSession(o), await this._notifyAllSubscribers("USER_UPDATED", o), { data: { user: o.user }, error: null };
      });
    } catch (r) {
      if (q(r))
        return { data: { user: null }, error: r };
      throw r;
    }
  }
  /**
   * Sets the session data from the current session. If the current session is expired, setSession will take care of refreshing it to obtain a new session.
   * If the refresh token or access token in the current session is invalid, an error will be thrown.
   * @param currentSession The current session that minimally contains an access token and refresh token.
   */
  async setSession(e) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._setSession(e));
  }
  async _setSession(e) {
    try {
      if (!e.access_token || !e.refresh_token)
        throw new tt();
      const n = Date.now() / 1e3;
      let r = n, i = !0, s = null;
      const { payload: o } = Zn(e.access_token);
      if (o.exp && (r = o.exp, i = r <= n), i) {
        const { session: a, error: l } = await this._callRefreshToken(e.refresh_token);
        if (l)
          return { data: { user: null, session: null }, error: l };
        if (!a)
          return { data: { user: null, session: null }, error: null };
        s = a;
      } else {
        const { data: a, error: l } = await this._getUser(e.access_token);
        if (l)
          throw l;
        s = {
          access_token: e.access_token,
          refresh_token: e.refresh_token,
          user: a.user,
          token_type: "bearer",
          expires_in: r - n,
          expires_at: r
        }, await this._saveSession(s), await this._notifyAllSubscribers("SIGNED_IN", s);
      }
      return { data: { user: s.user, session: s }, error: null };
    } catch (n) {
      if (q(n))
        return { data: { session: null, user: null }, error: n };
      throw n;
    }
  }
  /**
   * Returns a new session, regardless of expiry status.
   * Takes in an optional current session. If not passed in, then refreshSession() will attempt to retrieve it from getSession().
   * If the current session's refresh token is invalid, an error will be thrown.
   * @param currentSession The current session. If passed in, it must contain a refresh token.
   */
  async refreshSession(e) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._refreshSession(e));
  }
  async _refreshSession(e) {
    try {
      return await this._useSession(async (n) => {
        var r;
        if (!e) {
          const { data: o, error: a } = n;
          if (a)
            throw a;
          e = (r = o.session) !== null && r !== void 0 ? r : void 0;
        }
        if (!(e != null && e.refresh_token))
          throw new tt();
        const { session: i, error: s } = await this._callRefreshToken(e.refresh_token);
        return s ? { data: { user: null, session: null }, error: s } : i ? { data: { user: i.user, session: i }, error: null } : { data: { user: null, session: null }, error: null };
      });
    } catch (n) {
      if (q(n))
        return { data: { user: null, session: null }, error: n };
      throw n;
    }
  }
  /**
   * Gets the session data from a URL string
   */
  async _getSessionFromURL(e, n) {
    try {
      if (!ze())
        throw new pn("No browser detected.");
      if (e.error || e.error_description || e.error_code)
        throw new pn(e.error_description || "Error in URL with unspecified error_description", {
          error: e.error || "unspecified_error",
          code: e.error_code || "unspecified_code"
        });
      switch (n) {
        case "implicit":
          if (this.flowType === "pkce")
            throw new Ii("Not a valid PKCE flow url.");
          break;
        case "pkce":
          if (this.flowType === "implicit")
            throw new pn("Not a valid implicit grant flow url.");
          break;
        default:
      }
      if (n === "pkce") {
        if (this._debug("#_initialize()", "begin", "is PKCE flow", !0), !e.code)
          throw new Ii("No code detected.");
        const { data: C, error: k } = await this._exchangeCodeForSession(e.code);
        if (k)
          throw k;
        const I = new URL(window.location.href);
        return I.searchParams.delete("code"), window.history.replaceState(window.history.state, "", I.toString()), { data: { session: C.session, redirectType: null }, error: null };
      }
      const { provider_token: r, provider_refresh_token: i, access_token: s, refresh_token: o, expires_in: a, expires_at: l, token_type: c } = e;
      if (!s || !a || !o || !c)
        throw new pn("No session defined in URL");
      const u = Math.round(Date.now() / 1e3), h = parseInt(a);
      let f = u + h;
      l && (f = parseInt(l));
      const d = f - u;
      d * 1e3 <= At && console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${d}s, should have been closer to ${h}s`);
      const y = f - h;
      u - y >= 120 ? console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale", y, f, u) : u - y < 0 && console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew", y, f, u);
      const { data: b, error: w } = await this._getUser(s);
      if (w)
        throw w;
      const v = {
        provider_token: r,
        provider_refresh_token: i,
        access_token: s,
        expires_in: h,
        expires_at: f,
        refresh_token: o,
        token_type: c,
        user: b.user
      };
      return window.location.hash = "", this._debug("#_getSessionFromURL()", "clearing window.location.hash"), { data: { session: v, redirectType: e.type }, error: null };
    } catch (r) {
      if (q(r))
        return { data: { session: null, redirectType: null }, error: r };
      throw r;
    }
  }
  /**
   * Checks if the current URL contains parameters given by an implicit oauth grant flow (https://www.rfc-editor.org/rfc/rfc6749.html#section-4.2)
   */
  _isImplicitGrantCallback(e) {
    return !!(e.access_token || e.error_description);
  }
  /**
   * Checks if the current URL and backing storage contain parameters given by a PKCE flow
   */
  async _isPKCECallback(e) {
    const n = await gn(this.storage, `${this.storageKey}-code-verifier`);
    return !!(e.code && n);
  }
  /**
   * Inside a browser context, `signOut()` will remove the logged in user from the browser session and log them out - removing all items from localstorage and then trigger a `"SIGNED_OUT"` event.
   *
   * For server-side management, you can revoke all refresh tokens for a user by passing a user's JWT through to `auth.api.signOut(JWT: string)`.
   * There is no way to revoke a user's access token jwt until it expires. It is recommended to set a shorter expiry on the jwt for this reason.
   *
   * If using `others` scope, no `SIGNED_OUT` event is fired!
   */
  async signOut(e = { scope: "global" }) {
    return await this.initializePromise, await this._acquireLock(-1, async () => await this._signOut(e));
  }
  async _signOut({ scope: e } = { scope: "global" }) {
    return await this._useSession(async (n) => {
      var r;
      const { data: i, error: s } = n;
      if (s)
        return { error: s };
      const o = (r = i.session) === null || r === void 0 ? void 0 : r.access_token;
      if (o) {
        const { error: a } = await this.admin.signOut(o, e);
        if (a && !(Ju(a) && (a.status === 404 || a.status === 401 || a.status === 403)))
          return { error: a };
      }
      return e !== "others" && (await this._removeSession(), await mn(this.storage, `${this.storageKey}-code-verifier`)), { error: null };
    });
  }
  /**
   * Receive a notification every time an auth event happens.
   * @param callback A callback function to be invoked when an auth event happens.
   */
  onAuthStateChange(e) {
    const n = oc(), r = {
      id: n,
      callback: e,
      unsubscribe: () => {
        this._debug("#unsubscribe()", "state change callback with id removed", n), this.stateChangeEmitters.delete(n);
      }
    };
    return this._debug("#onAuthStateChange()", "registered callback with id", n), this.stateChangeEmitters.set(n, r), (async () => (await this.initializePromise, await this._acquireLock(-1, async () => {
      this._emitInitialSession(n);
    })))(), { data: { subscription: r } };
  }
  async _emitInitialSession(e) {
    return await this._useSession(async (n) => {
      var r, i;
      try {
        const { data: { session: s }, error: o } = n;
        if (o)
          throw o;
        await ((r = this.stateChangeEmitters.get(e)) === null || r === void 0 ? void 0 : r.callback("INITIAL_SESSION", s)), this._debug("INITIAL_SESSION", "callback id", e, "session", s);
      } catch (s) {
        await ((i = this.stateChangeEmitters.get(e)) === null || i === void 0 ? void 0 : i.callback("INITIAL_SESSION", null)), this._debug("INITIAL_SESSION", "callback id", e, "error", s), console.error(s);
      }
    });
  }
  /**
   * Sends a password reset request to an email address. This method supports the PKCE flow.
   *
   * @param email The email address of the user.
   * @param options.redirectTo The URL to send the user to after they click the password reset link.
   * @param options.captchaToken Verification token received when the user completes the captcha on the site.
   */
  async resetPasswordForEmail(e, n = {}) {
    let r = null, i = null;
    this.flowType === "pkce" && ([r, i] = await kt(
      this.storage,
      this.storageKey,
      !0
      // isPasswordRecovery
    ));
    try {
      return await J(this.fetch, "POST", `${this.url}/recover`, {
        body: {
          email: e,
          code_challenge: r,
          code_challenge_method: i,
          gotrue_meta_security: { captcha_token: n.captchaToken }
        },
        headers: this.headers,
        redirectTo: n.redirectTo
      });
    } catch (s) {
      if (q(s))
        return { data: null, error: s };
      throw s;
    }
  }
  /**
   * Gets all the identities linked to a user.
   */
  async getUserIdentities() {
    var e;
    try {
      const { data: n, error: r } = await this.getUser();
      if (r)
        throw r;
      return { data: { identities: (e = n.user.identities) !== null && e !== void 0 ? e : [] }, error: null };
    } catch (n) {
      if (q(n))
        return { data: null, error: n };
      throw n;
    }
  }
  /**
   * Links an oauth identity to an existing user.
   * This method supports the PKCE flow.
   */
  async linkIdentity(e) {
    var n;
    try {
      const { data: r, error: i } = await this._useSession(async (s) => {
        var o, a, l, c, u;
        const { data: h, error: f } = s;
        if (f)
          throw f;
        const d = await this._getUrlForProvider(`${this.url}/user/identities/authorize`, e.provider, {
          redirectTo: (o = e.options) === null || o === void 0 ? void 0 : o.redirectTo,
          scopes: (a = e.options) === null || a === void 0 ? void 0 : a.scopes,
          queryParams: (l = e.options) === null || l === void 0 ? void 0 : l.queryParams,
          skipBrowserRedirect: !0
        });
        return await J(this.fetch, "GET", d, {
          headers: this.headers,
          jwt: (u = (c = h.session) === null || c === void 0 ? void 0 : c.access_token) !== null && u !== void 0 ? u : void 0
        });
      });
      if (i)
        throw i;
      return ze() && !(!((n = e.options) === null || n === void 0) && n.skipBrowserRedirect) && window.location.assign(r == null ? void 0 : r.url), { data: { provider: e.provider, url: r == null ? void 0 : r.url }, error: null };
    } catch (r) {
      if (q(r))
        return { data: { provider: e.provider, url: null }, error: r };
      throw r;
    }
  }
  /**
   * Unlinks an identity from a user by deleting it. The user will no longer be able to sign in with that identity once it's unlinked.
   */
  async unlinkIdentity(e) {
    try {
      return await this._useSession(async (n) => {
        var r, i;
        const { data: s, error: o } = n;
        if (o)
          throw o;
        return await J(this.fetch, "DELETE", `${this.url}/user/identities/${e.identity_id}`, {
          headers: this.headers,
          jwt: (i = (r = s.session) === null || r === void 0 ? void 0 : r.access_token) !== null && i !== void 0 ? i : void 0
        });
      });
    } catch (n) {
      if (q(n))
        return { data: null, error: n };
      throw n;
    }
  }
  /**
   * Generates a new JWT.
   * @param refreshToken A valid refresh token that was returned on login.
   */
  async _refreshAccessToken(e) {
    const n = `#_refreshAccessToken(${e.substring(0, 5)}...)`;
    this._debug(n, "begin");
    try {
      const r = Date.now();
      return await cc(async (i) => (i > 0 && await uc(200 * Math.pow(2, i - 1)), this._debug(n, "refreshing attempt", i), await J(this.fetch, "POST", `${this.url}/token?grant_type=refresh_token`, {
        body: { refresh_token: e },
        headers: this.headers,
        xform: Ke
      })), (i, s) => {
        const o = 200 * Math.pow(2, i);
        return s && Qn(s) && // retryable only if the request can be sent before the backoff overflows the tick duration
        Date.now() + o - r < At;
      });
    } catch (r) {
      if (this._debug(n, "error", r), q(r))
        return { data: { session: null, user: null }, error: r };
      throw r;
    } finally {
      this._debug(n, "end");
    }
  }
  _isValidSession(e) {
    return typeof e == "object" && e !== null && "access_token" in e && "refresh_token" in e && "expires_at" in e;
  }
  async _handleProviderSignIn(e, n) {
    const r = await this._getUrlForProvider(`${this.url}/authorize`, e, {
      redirectTo: n.redirectTo,
      scopes: n.scopes,
      queryParams: n.queryParams
    });
    return this._debug("#_handleProviderSignIn()", "provider", e, "options", n, "url", r), ze() && !n.skipBrowserRedirect && window.location.assign(r), { data: { provider: e, url: r }, error: null };
  }
  /**
   * Recovers the session from LocalStorage and refreshes the token
   * Note: this method is async to accommodate for AsyncStorage e.g. in React native.
   */
  async _recoverAndRefresh() {
    var e;
    const n = "#_recoverAndRefresh()";
    this._debug(n, "begin");
    try {
      const r = await gn(this.storage, this.storageKey);
      if (this._debug(n, "session from storage", r), !this._isValidSession(r)) {
        this._debug(n, "session is not valid"), r !== null && await this._removeSession();
        return;
      }
      const i = ((e = r.expires_at) !== null && e !== void 0 ? e : 1 / 0) * 1e3 - Date.now() < Xn;
      if (this._debug(n, `session has${i ? "" : " not"} expired with margin of ${Xn}s`), i) {
        if (this.autoRefreshToken && r.refresh_token) {
          const { error: s } = await this._callRefreshToken(r.refresh_token);
          s && (console.error(s), Qn(s) || (this._debug(n, "refresh failed with a non-retryable error, removing the session", s), await this._removeSession()));
        }
      } else
        await this._notifyAllSubscribers("SIGNED_IN", r);
    } catch (r) {
      this._debug(n, "error", r), console.error(r);
      return;
    } finally {
      this._debug(n, "end");
    }
  }
  async _callRefreshToken(e) {
    var n, r;
    if (!e)
      throw new tt();
    if (this.refreshingDeferred)
      return this.refreshingDeferred.promise;
    const i = `#_callRefreshToken(${e.substring(0, 5)}...)`;
    this._debug(i, "begin");
    try {
      this.refreshingDeferred = new jn();
      const { data: s, error: o } = await this._refreshAccessToken(e);
      if (o)
        throw o;
      if (!s.session)
        throw new tt();
      await this._saveSession(s.session), await this._notifyAllSubscribers("TOKEN_REFRESHED", s.session);
      const a = { session: s.session, error: null };
      return this.refreshingDeferred.resolve(a), a;
    } catch (s) {
      if (this._debug(i, "error", s), q(s)) {
        const o = { session: null, error: s };
        return Qn(s) || await this._removeSession(), (n = this.refreshingDeferred) === null || n === void 0 || n.resolve(o), o;
      }
      throw (r = this.refreshingDeferred) === null || r === void 0 || r.reject(s), s;
    } finally {
      this.refreshingDeferred = null, this._debug(i, "end");
    }
  }
  async _notifyAllSubscribers(e, n, r = !0) {
    const i = `#_notifyAllSubscribers(${e})`;
    this._debug(i, "begin", n, `broadcast = ${r}`);
    try {
      this.broadcastChannel && r && this.broadcastChannel.postMessage({ event: e, session: n });
      const s = [], o = Array.from(this.stateChangeEmitters.values()).map(async (a) => {
        try {
          await a.callback(e, n);
        } catch (l) {
          s.push(l);
        }
      });
      if (await Promise.all(o), s.length > 0) {
        for (let a = 0; a < s.length; a += 1)
          console.error(s[a]);
        throw s[0];
      }
    } finally {
      this._debug(i, "end");
    }
  }
  /**
   * set currentSession and currentUser
   * process to _startAutoRefreshToken if possible
   */
  async _saveSession(e) {
    this._debug("#_saveSession()", e), this.suppressGetSessionWarning = !0, await Eo(this.storage, this.storageKey, e);
  }
  async _removeSession() {
    this._debug("#_removeSession()"), await mn(this.storage, this.storageKey), await this._notifyAllSubscribers("SIGNED_OUT", null);
  }
  /**
   * Removes any registered visibilitychange callback.
   *
   * {@see #startAutoRefresh}
   * {@see #stopAutoRefresh}
   */
  _removeVisibilityChangedCallback() {
    this._debug("#_removeVisibilityChangedCallback()");
    const e = this.visibilityChangedCallback;
    this.visibilityChangedCallback = null;
    try {
      e && ze() && (window != null && window.removeEventListener) && window.removeEventListener("visibilitychange", e);
    } catch (n) {
      console.error("removing visibilitychange callback failed", n);
    }
  }
  /**
   * This is the private implementation of {@link #startAutoRefresh}. Use this
   * within the library.
   */
  async _startAutoRefresh() {
    await this._stopAutoRefresh(), this._debug("#_startAutoRefresh()");
    const e = setInterval(() => this._autoRefreshTokenTick(), At);
    this.autoRefreshTicker = e, e && typeof e == "object" && typeof e.unref == "function" ? e.unref() : typeof Deno < "u" && typeof Deno.unrefTimer == "function" && Deno.unrefTimer(e), setTimeout(async () => {
      await this.initializePromise, await this._autoRefreshTokenTick();
    }, 0);
  }
  /**
   * This is the private implementation of {@link #stopAutoRefresh}. Use this
   * within the library.
   */
  async _stopAutoRefresh() {
    this._debug("#_stopAutoRefresh()");
    const e = this.autoRefreshTicker;
    this.autoRefreshTicker = null, e && clearInterval(e);
  }
  /**
   * Starts an auto-refresh process in the background. The session is checked
   * every few seconds. Close to the time of expiration a process is started to
   * refresh the session. If refreshing fails it will be retried for as long as
   * necessary.
   *
   * If you set the {@link GoTrueClientOptions#autoRefreshToken} you don't need
   * to call this function, it will be called for you.
   *
   * On browsers the refresh process works only when the tab/window is in the
   * foreground to conserve resources as well as prevent race conditions and
   * flooding auth with requests. If you call this method any managed
   * visibility change callback will be removed and you must manage visibility
   * changes on your own.
   *
   * On non-browser platforms the refresh process works *continuously* in the
   * background, which may not be desirable. You should hook into your
   * platform's foreground indication mechanism and call these methods
   * appropriately to conserve resources.
   *
   * {@see #stopAutoRefresh}
   */
  async startAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._startAutoRefresh();
  }
  /**
   * Stops an active auto refresh process running in the background (if any).
   *
   * If you call this method any managed visibility change callback will be
   * removed and you must manage visibility changes on your own.
   *
   * See {@link #startAutoRefresh} for more details.
   */
  async stopAutoRefresh() {
    this._removeVisibilityChangedCallback(), await this._stopAutoRefresh();
  }
  /**
   * Runs the auto refresh token tick.
   */
  async _autoRefreshTokenTick() {
    this._debug("#_autoRefreshTokenTick()", "begin");
    try {
      await this._acquireLock(0, async () => {
        try {
          const e = Date.now();
          try {
            return await this._useSession(async (n) => {
              const { data: { session: r } } = n;
              if (!r || !r.refresh_token || !r.expires_at) {
                this._debug("#_autoRefreshTokenTick()", "no session");
                return;
              }
              const i = Math.floor((r.expires_at * 1e3 - e) / At);
              this._debug("#_autoRefreshTokenTick()", `access token expires in ${i} ticks, a tick lasts ${At}ms, refresh threshold is ${xr} ticks`), i <= xr && await this._callRefreshToken(r.refresh_token);
            });
          } catch (n) {
            console.error("Auto refresh tick failed with error. This is likely a transient error.", n);
          }
        } finally {
          this._debug("#_autoRefreshTokenTick()", "end");
        }
      });
    } catch (e) {
      if (e.isAcquireTimeout || e instanceof Co)
        this._debug("auto refresh token tick lock not available");
      else
        throw e;
    }
  }
  /**
   * Registers callbacks on the browser / platform, which in-turn run
   * algorithms when the browser window/tab are in foreground. On non-browser
   * platforms it assumes always foreground.
   */
  async _handleVisibilityChange() {
    if (this._debug("#_handleVisibilityChange()"), !ze() || !(window != null && window.addEventListener))
      return this.autoRefreshToken && this.startAutoRefresh(), !1;
    try {
      this.visibilityChangedCallback = async () => await this._onVisibilityChanged(!1), window == null || window.addEventListener("visibilitychange", this.visibilityChangedCallback), await this._onVisibilityChanged(!0);
    } catch (e) {
      console.error("_handleVisibilityChange", e);
    }
  }
  /**
   * Callback registered with `window.addEventListener('visibilitychange')`.
   */
  async _onVisibilityChanged(e) {
    const n = `#_onVisibilityChanged(${e})`;
    this._debug(n, "visibilityState", document.visibilityState), document.visibilityState === "visible" ? (this.autoRefreshToken && this._startAutoRefresh(), e || (await this.initializePromise, await this._acquireLock(-1, async () => {
      if (document.visibilityState !== "visible") {
        this._debug(n, "acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");
        return;
      }
      await this._recoverAndRefresh();
    }))) : document.visibilityState === "hidden" && this.autoRefreshToken && this._stopAutoRefresh();
  }
  /**
   * Generates the relevant login URL for a third-party provider.
   * @param options.redirectTo A URL or mobile address to send the user to after they are confirmed.
   * @param options.scopes A space-separated list of scopes granted to the OAuth application.
   * @param options.queryParams An object of key-value pairs containing query parameters granted to the OAuth application.
   */
  async _getUrlForProvider(e, n, r) {
    const i = [`provider=${encodeURIComponent(n)}`];
    if (r != null && r.redirectTo && i.push(`redirect_to=${encodeURIComponent(r.redirectTo)}`), r != null && r.scopes && i.push(`scopes=${encodeURIComponent(r.scopes)}`), this.flowType === "pkce") {
      const [s, o] = await kt(this.storage, this.storageKey), a = new URLSearchParams({
        code_challenge: `${encodeURIComponent(s)}`,
        code_challenge_method: `${encodeURIComponent(o)}`
      });
      i.push(a.toString());
    }
    if (r != null && r.queryParams) {
      const s = new URLSearchParams(r.queryParams);
      i.push(s.toString());
    }
    return r != null && r.skipBrowserRedirect && i.push(`skip_http_redirect=${r.skipBrowserRedirect}`), `${e}?${i.join("&")}`;
  }
  async _unenroll(e) {
    try {
      return await this._useSession(async (n) => {
        var r;
        const { data: i, error: s } = n;
        return s ? { data: null, error: s } : await J(this.fetch, "DELETE", `${this.url}/factors/${e.factorId}`, {
          headers: this.headers,
          jwt: (r = i == null ? void 0 : i.session) === null || r === void 0 ? void 0 : r.access_token
        });
      });
    } catch (n) {
      if (q(n))
        return { data: null, error: n };
      throw n;
    }
  }
  async _enroll(e) {
    try {
      return await this._useSession(async (n) => {
        var r, i;
        const { data: s, error: o } = n;
        if (o)
          return { data: null, error: o };
        const a = Object.assign({ friendly_name: e.friendlyName, factor_type: e.factorType }, e.factorType === "phone" ? { phone: e.phone } : { issuer: e.issuer }), { data: l, error: c } = await J(this.fetch, "POST", `${this.url}/factors`, {
          body: a,
          headers: this.headers,
          jwt: (r = s == null ? void 0 : s.session) === null || r === void 0 ? void 0 : r.access_token
        });
        return c ? { data: null, error: c } : (e.factorType === "totp" && (!((i = l == null ? void 0 : l.totp) === null || i === void 0) && i.qr_code) && (l.totp.qr_code = `data:image/svg+xml;utf-8,${l.totp.qr_code}`), { data: l, error: null });
      });
    } catch (n) {
      if (q(n))
        return { data: null, error: n };
      throw n;
    }
  }
  /**
   * {@see GoTrueMFAApi#verify}
   */
  async _verify(e) {
    return this._acquireLock(-1, async () => {
      try {
        return await this._useSession(async (n) => {
          var r;
          const { data: i, error: s } = n;
          if (s)
            return { data: null, error: s };
          const { data: o, error: a } = await J(this.fetch, "POST", `${this.url}/factors/${e.factorId}/verify`, {
            body: { code: e.code, challenge_id: e.challengeId },
            headers: this.headers,
            jwt: (r = i == null ? void 0 : i.session) === null || r === void 0 ? void 0 : r.access_token
          });
          return a ? { data: null, error: a } : (await this._saveSession(Object.assign({ expires_at: Math.round(Date.now() / 1e3) + o.expires_in }, o)), await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED", o), { data: o, error: a });
        });
      } catch (n) {
        if (q(n))
          return { data: null, error: n };
        throw n;
      }
    });
  }
  /**
   * {@see GoTrueMFAApi#challenge}
   */
  async _challenge(e) {
    return this._acquireLock(-1, async () => {
      try {
        return await this._useSession(async (n) => {
          var r;
          const { data: i, error: s } = n;
          return s ? { data: null, error: s } : await J(this.fetch, "POST", `${this.url}/factors/${e.factorId}/challenge`, {
            body: { channel: e.channel },
            headers: this.headers,
            jwt: (r = i == null ? void 0 : i.session) === null || r === void 0 ? void 0 : r.access_token
          });
        });
      } catch (n) {
        if (q(n))
          return { data: null, error: n };
        throw n;
      }
    });
  }
  /**
   * {@see GoTrueMFAApi#challengeAndVerify}
   */
  async _challengeAndVerify(e) {
    const { data: n, error: r } = await this._challenge({
      factorId: e.factorId
    });
    return r ? { data: null, error: r } : await this._verify({
      factorId: e.factorId,
      challengeId: n.id,
      code: e.code
    });
  }
  /**
   * {@see GoTrueMFAApi#listFactors}
   */
  async _listFactors() {
    const { data: { user: e }, error: n } = await this.getUser();
    if (n)
      return { data: null, error: n };
    const r = (e == null ? void 0 : e.factors) || [], i = r.filter((o) => o.factor_type === "totp" && o.status === "verified"), s = r.filter((o) => o.factor_type === "phone" && o.status === "verified");
    return {
      data: {
        all: r,
        totp: i,
        phone: s
      },
      error: null
    };
  }
  /**
   * {@see GoTrueMFAApi#getAuthenticatorAssuranceLevel}
   */
  async _getAuthenticatorAssuranceLevel() {
    return this._acquireLock(-1, async () => await this._useSession(async (e) => {
      var n, r;
      const { data: { session: i }, error: s } = e;
      if (s)
        return { data: null, error: s };
      if (!i)
        return {
          data: { currentLevel: null, nextLevel: null, currentAuthenticationMethods: [] },
          error: null
        };
      const { payload: o } = Zn(i.access_token);
      let a = null;
      o.aal && (a = o.aal);
      let l = a;
      ((r = (n = i.user.factors) === null || n === void 0 ? void 0 : n.filter((h) => h.status === "verified")) !== null && r !== void 0 ? r : []).length > 0 && (l = "aal2");
      const u = o.amr || [];
      return { data: { currentLevel: a, nextLevel: l, currentAuthenticationMethods: u }, error: null };
    }));
  }
  async fetchJwk(e, n = { keys: [] }) {
    let r = n.keys.find((o) => o.kid === e);
    if (r || (r = this.jwks.keys.find((o) => o.kid === e), r && this.jwks_cached_at + Gu > Date.now()))
      return r;
    const { data: i, error: s } = await J(this.fetch, "GET", `${this.url}/.well-known/jwks.json`, {
      headers: this.headers
    });
    if (s)
      throw s;
    if (!i.keys || i.keys.length === 0)
      throw new Yt("JWKS is empty");
    if (this.jwks = i, this.jwks_cached_at = Date.now(), r = i.keys.find((o) => o.kid === e), !r)
      throw new Yt("No matching signing key found in JWKS");
    return r;
  }
  /**
   * @experimental This method may change in future versions.
   * @description Gets the claims from a JWT. If the JWT is symmetric JWTs, it will call getUser() to verify against the server. If the JWT is asymmetric, it will be verified against the JWKS using the WebCrypto API.
   */
  async getClaims(e, n = { keys: [] }) {
    try {
      let r = e;
      if (!r) {
        const { data: d, error: y } = await this.getSession();
        if (y || !d.session)
          return { data: null, error: y };
        r = d.session.access_token;
      }
      const { header: i, payload: s, signature: o, raw: { header: a, payload: l } } = Zn(r);
      if (yc(s.exp), !i.kid || i.alg === "HS256" || !("crypto" in globalThis && "subtle" in globalThis.crypto)) {
        const { error: d } = await this.getUser(r);
        if (d)
          throw d;
        return {
          data: {
            claims: s,
            header: i,
            signature: o
          },
          error: null
        };
      }
      const c = bc(i.alg), u = await this.fetchJwk(i.kid, n), h = await crypto.subtle.importKey("jwk", u, c, !0, [
        "verify"
      ]);
      if (!await crypto.subtle.verify(c, h, o, rc(`${a}.${l}`)))
        throw new Yt("Invalid JWT signature");
      return {
        data: {
          claims: s,
          header: i,
          signature: o
        },
        error: null
      };
    } catch (r) {
      if (q(r))
        return { data: null, error: r };
      throw r;
    }
  }
}
tn.nextInstanceID = 0;
const $c = tn;
class Dc extends $c {
  constructor(e) {
    super(e);
  }
}
var Nc = function(t, e, n, r) {
  function i(s) {
    return s instanceof n ? s : new n(function(o) {
      o(s);
    });
  }
  return new (n || (n = Promise))(function(s, o) {
    function a(u) {
      try {
        c(r.next(u));
      } catch (h) {
        o(h);
      }
    }
    function l(u) {
      try {
        c(r.throw(u));
      } catch (h) {
        o(h);
      }
    }
    function c(u) {
      u.done ? s(u.value) : i(u.value).then(a, l);
    }
    c((r = r.apply(t, e || [])).next());
  });
};
class zc {
  /**
   * Create a new client for use in the browser.
   * @param supabaseUrl The unique Supabase URL which is supplied when you create a new project in your project dashboard.
   * @param supabaseKey The unique Supabase Key which is supplied when you create a new project in your project dashboard.
   * @param options.db.schema You can switch in between schemas. The schema needs to be on the list of exposed schemas inside Supabase.
   * @param options.auth.autoRefreshToken Set to "true" if you want to automatically refresh the token before expiring.
   * @param options.auth.persistSession Set to "true" if you want to automatically save the user session into local storage.
   * @param options.auth.detectSessionInUrl Set to "true" if you want to automatically detects OAuth grants in the URL and signs in the user.
   * @param options.realtime Options passed along to realtime-js constructor.
   * @param options.global.fetch A custom fetch implementation.
   * @param options.global.headers Any additional headers to send with each network request.
   */
  constructor(e, n, r) {
    var i, s, o;
    if (this.supabaseUrl = e, this.supabaseKey = n, !e)
      throw new Error("supabaseUrl is required.");
    if (!n)
      throw new Error("supabaseKey is required.");
    const a = Uu(e), l = new URL(a);
    this.realtimeUrl = new URL("realtime/v1", l), this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace("http", "ws"), this.authUrl = new URL("auth/v1", l), this.storageUrl = new URL("storage/v1", l), this.functionsUrl = new URL("functions/v1", l);
    const c = `sb-${l.hostname.split(".")[0]}-auth-token`, u = {
      db: ju,
      realtime: $u,
      auth: Object.assign(Object.assign({}, Lu), { storageKey: c }),
      global: Ru
    }, h = Bu(r ?? {}, u);
    this.storageKey = (i = h.auth.storageKey) !== null && i !== void 0 ? i : "", this.headers = (s = h.global.headers) !== null && s !== void 0 ? s : {}, h.accessToken ? (this.accessToken = h.accessToken, this.auth = new Proxy({}, {
      get: (f, d) => {
        throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(d)} is not possible`);
      }
    })) : this.auth = this._initSupabaseAuthClient((o = h.auth) !== null && o !== void 0 ? o : {}, this.headers, h.global.fetch), this.fetch = Mu(n, this._getAccessToken.bind(this), h.global.fetch), this.realtime = this._initRealtimeClient(Object.assign({ headers: this.headers, accessToken: this._getAccessToken.bind(this) }, h.realtime)), this.rest = new tu(new URL("rest/v1", l).href, {
      headers: this.headers,
      schema: h.db.schema,
      fetch: this.fetch
    }), h.accessToken || this._listenForAuthEvents();
  }
  /**
   * Supabase Functions allows you to deploy and invoke edge functions.
   */
  get functions() {
    return new Ol(this.functionsUrl.href, {
      headers: this.headers,
      customFetch: this.fetch
    });
  }
  /**
   * Supabase Storage allows you to manage user-generated content, such as photos or videos.
   */
  get storage() {
    return new Pu(this.storageUrl.href, this.headers, this.fetch);
  }
  /**
   * Perform a query on a table or a view.
   *
   * @param relation - The table or view name to query
   */
  from(e) {
    return this.rest.from(e);
  }
  // NOTE: signatures must be kept in sync with PostgrestClient.schema
  /**
   * Select a schema to query or perform an function (rpc) call.
   *
   * The schema needs to be on the list of exposed schemas inside Supabase.
   *
   * @param schema - The schema to query
   */
  schema(e) {
    return this.rest.schema(e);
  }
  // NOTE: signatures must be kept in sync with PostgrestClient.rpc
  /**
   * Perform a function call.
   *
   * @param fn - The function name to call
   * @param args - The arguments to pass to the function call
   * @param options - Named parameters
   * @param options.head - When set to `true`, `data` will not be returned.
   * Useful if you only need the count.
   * @param options.get - When set to `true`, the function will be called with
   * read-only access mode.
   * @param options.count - Count algorithm to use to count rows returned by the
   * function. Only applicable for [set-returning
   * functions](https://www.postgresql.org/docs/current/functions-srf.html).
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   */
  rpc(e, n = {}, r = {}) {
    return this.rest.rpc(e, n, r);
  }
  /**
   * Creates a Realtime channel with Broadcast, Presence, and Postgres Changes.
   *
   * @param {string} name - The name of the Realtime channel.
   * @param {Object} opts - The options to pass to the Realtime channel.
   *
   */
  channel(e, n = { config: {} }) {
    return this.realtime.channel(e, n);
  }
  /**
   * Returns all Realtime channels.
   */
  getChannels() {
    return this.realtime.getChannels();
  }
  /**
   * Unsubscribes and removes Realtime channel from Realtime client.
   *
   * @param {RealtimeChannel} channel - The name of the Realtime channel.
   *
   */
  removeChannel(e) {
    return this.realtime.removeChannel(e);
  }
  /**
   * Unsubscribes and removes all Realtime channels from Realtime client.
   */
  removeAllChannels() {
    return this.realtime.removeAllChannels();
  }
  _getAccessToken() {
    var e, n;
    return Nc(this, void 0, void 0, function* () {
      if (this.accessToken)
        return yield this.accessToken();
      const { data: r } = yield this.auth.getSession();
      return (n = (e = r.session) === null || e === void 0 ? void 0 : e.access_token) !== null && n !== void 0 ? n : null;
    });
  }
  _initSupabaseAuthClient({ autoRefreshToken: e, persistSession: n, detectSessionInUrl: r, storage: i, storageKey: s, flowType: o, lock: a, debug: l }, c, u) {
    const h = {
      Authorization: `Bearer ${this.supabaseKey}`,
      apikey: `${this.supabaseKey}`
    };
    return new Dc({
      url: this.authUrl.href,
      headers: Object.assign(Object.assign({}, h), c),
      storageKey: s,
      autoRefreshToken: e,
      persistSession: n,
      detectSessionInUrl: r,
      storage: i,
      flowType: o,
      lock: a,
      debug: l,
      fetch: u,
      // auth checks if there is a custom authorizaiton header using this flag
      // so it knows whether to return an error when getUser is called with no session
      hasCustomAuthorizationHeader: "Authorization" in this.headers
    });
  }
  _initRealtimeClient(e) {
    return new mu(this.realtimeUrl.href, Object.assign(Object.assign({}, e), { params: Object.assign({ apikey: this.supabaseKey }, e == null ? void 0 : e.params) }));
  }
  _listenForAuthEvents() {
    return this.auth.onAuthStateChange((n, r) => {
      this._handleTokenChanged(n, "CLIENT", r == null ? void 0 : r.access_token);
    });
  }
  _handleTokenChanged(e, n, r) {
    (e === "TOKEN_REFRESHED" || e === "SIGNED_IN") && this.changedAccessToken !== r ? this.changedAccessToken = r : e === "SIGNED_OUT" && (this.realtime.setAuth(), n == "STORAGE" && this.auth.signOut(), this.changedAccessToken = void 0);
  }
}
const Mc = (t, e, n) => new zc(t, e, n), Fc = "https://hgqndkfkuitafuzawuxl.supabase.co", Uc = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhncW5ka2ZrdWl0YWZ1emF3dXhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc5MzQ4OTIsImV4cCI6MjA2MzUxMDg5Mn0.Yixc4Pw9w3NDtxx5WTuU1YAtbN5gh60a6WQzGKKOFjY", Bc = Mc(Fc, Uc);
function qc(t, e) {
  const n = {};
  return (t[t.length - 1] === "" ? [...t, ""] : t).join(
    (n.padRight ? " " : "") + "," + (n.padLeft === !1 ? "" : " ")
  ).trim();
}
const Vc = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Hc = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, Wc = {};
function Mi(t, e) {
  return (Wc.jsx ? Hc : Vc).test(t);
}
const Gc = /[ \t\n\f\r]/g;
function Kc(t) {
  return typeof t == "object" ? t.type === "text" ? Fi(t.value) : !1 : Fi(t);
}
function Fi(t) {
  return t.replace(Gc, "") === "";
}
class on {
  /**
   * @param {SchemaType['property']} property
   *   Property.
   * @param {SchemaType['normal']} normal
   *   Normal.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Schema.
   */
  constructor(e, n, r) {
    this.normal = n, this.property = e, r && (this.space = r);
  }
}
on.prototype.normal = {};
on.prototype.property = {};
on.prototype.space = void 0;
function To(t, e) {
  const n = {}, r = {};
  for (const i of t)
    Object.assign(n, i.property), Object.assign(r, i.normal);
  return new on(n, r, e);
}
function Er(t) {
  return t.toLowerCase();
}
class Ce {
  /**
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @returns
   *   Info.
   */
  constructor(e, n) {
    this.attribute = n, this.property = e;
  }
}
Ce.prototype.attribute = "";
Ce.prototype.booleanish = !1;
Ce.prototype.boolean = !1;
Ce.prototype.commaOrSpaceSeparated = !1;
Ce.prototype.commaSeparated = !1;
Ce.prototype.defined = !1;
Ce.prototype.mustUseProperty = !1;
Ce.prototype.number = !1;
Ce.prototype.overloadedBoolean = !1;
Ce.prototype.property = "";
Ce.prototype.spaceSeparated = !1;
Ce.prototype.space = void 0;
let Jc = 0;
const H = bt(), fe = bt(), Cr = bt(), E = bt(), se = bt(), It = bt(), Oe = bt();
function bt() {
  return 2 ** ++Jc;
}
const Tr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: H,
  booleanish: fe,
  commaOrSpaceSeparated: Oe,
  commaSeparated: It,
  number: E,
  overloadedBoolean: Cr,
  spaceSeparated: se
}, Symbol.toStringTag, { value: "Module" })), tr = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(Tr)
);
class Vr extends Ce {
  /**
   * @constructor
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @param {number | null | undefined} [mask]
   *   Mask.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Info.
   */
  constructor(e, n, r, i) {
    let s = -1;
    if (super(e, n), Ui(this, "space", i), typeof r == "number")
      for (; ++s < tr.length; ) {
        const o = tr[s];
        Ui(this, tr[s], (r & Tr[o]) === Tr[o]);
      }
  }
}
Vr.prototype.defined = !0;
function Ui(t, e, n) {
  n && (t[e] = n);
}
function Dt(t) {
  const e = {}, n = {};
  for (const [r, i] of Object.entries(t.properties)) {
    const s = new Vr(
      r,
      t.transform(t.attributes || {}, r),
      i,
      t.space
    );
    t.mustUseProperty && t.mustUseProperty.includes(r) && (s.mustUseProperty = !0), e[r] = s, n[Er(r)] = r, n[Er(s.attribute)] = r;
  }
  return new on(e, n, t.space);
}
const Ao = Dt({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: fe,
    ariaAutoComplete: null,
    ariaBusy: fe,
    ariaChecked: fe,
    ariaColCount: E,
    ariaColIndex: E,
    ariaColSpan: E,
    ariaControls: se,
    ariaCurrent: null,
    ariaDescribedBy: se,
    ariaDetails: null,
    ariaDisabled: fe,
    ariaDropEffect: se,
    ariaErrorMessage: null,
    ariaExpanded: fe,
    ariaFlowTo: se,
    ariaGrabbed: fe,
    ariaHasPopup: null,
    ariaHidden: fe,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: se,
    ariaLevel: E,
    ariaLive: null,
    ariaModal: fe,
    ariaMultiLine: fe,
    ariaMultiSelectable: fe,
    ariaOrientation: null,
    ariaOwns: se,
    ariaPlaceholder: null,
    ariaPosInSet: E,
    ariaPressed: fe,
    ariaReadOnly: fe,
    ariaRelevant: null,
    ariaRequired: fe,
    ariaRoleDescription: se,
    ariaRowCount: E,
    ariaRowIndex: E,
    ariaRowSpan: E,
    ariaSelected: fe,
    ariaSetSize: E,
    ariaSort: null,
    ariaValueMax: E,
    ariaValueMin: E,
    ariaValueNow: E,
    ariaValueText: null,
    role: null
  },
  transform(t, e) {
    return e === "role" ? e : "aria-" + e.slice(4).toLowerCase();
  }
});
function Po(t, e) {
  return e in t ? t[e] : e;
}
function Io(t, e) {
  return Po(t, e.toLowerCase());
}
const Yc = Dt({
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: It,
    acceptCharset: se,
    accessKey: se,
    action: null,
    allow: null,
    allowFullScreen: H,
    allowPaymentRequest: H,
    allowUserMedia: H,
    alt: null,
    as: null,
    async: H,
    autoCapitalize: null,
    autoComplete: se,
    autoFocus: H,
    autoPlay: H,
    blocking: se,
    capture: null,
    charSet: null,
    checked: H,
    cite: null,
    className: se,
    cols: E,
    colSpan: null,
    content: null,
    contentEditable: fe,
    controls: H,
    controlsList: se,
    coords: E | It,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: H,
    defer: H,
    dir: null,
    dirName: null,
    disabled: H,
    download: Cr,
    draggable: fe,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: H,
    formTarget: null,
    headers: se,
    height: E,
    hidden: Cr,
    high: E,
    href: null,
    hrefLang: null,
    htmlFor: se,
    httpEquiv: se,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: H,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: H,
    itemId: null,
    itemProp: se,
    itemRef: se,
    itemScope: H,
    itemType: se,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: H,
    low: E,
    manifest: null,
    max: null,
    maxLength: E,
    media: null,
    method: null,
    min: null,
    minLength: E,
    multiple: H,
    muted: H,
    name: null,
    nonce: null,
    noModule: H,
    noValidate: H,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforeMatch: null,
    onBeforePrint: null,
    onBeforeToggle: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onScrollEnd: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: H,
    optimum: E,
    pattern: null,
    ping: se,
    placeholder: null,
    playsInline: H,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: H,
    referrerPolicy: null,
    rel: se,
    required: H,
    reversed: H,
    rows: E,
    rowSpan: E,
    sandbox: se,
    scope: null,
    scoped: H,
    seamless: H,
    selected: H,
    shadowRootClonable: H,
    shadowRootDelegatesFocus: H,
    shadowRootMode: null,
    shape: null,
    size: E,
    sizes: null,
    slot: null,
    span: E,
    spellCheck: fe,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: E,
    step: null,
    style: null,
    tabIndex: E,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: H,
    useMap: null,
    value: fe,
    width: E,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: se,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: E,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: E,
    // `<body>`
    cellPadding: null,
    // `<table>`
    cellSpacing: null,
    // `<table>`
    char: null,
    // Several table elements. When `align=char`, sets the character to align on
    charOff: null,
    // Several table elements. When `char`, offsets the alignment
    classId: null,
    // `<object>`
    clear: null,
    // `<br>`. Use CSS `clear` instead
    code: null,
    // `<object>`
    codeBase: null,
    // `<object>`
    codeType: null,
    // `<object>`
    color: null,
    // `<font>` and `<hr>`. Use CSS instead
    compact: H,
    // Lists. Use CSS to reduce space between items instead
    declare: H,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: E,
    // `<img>` and `<object>`
    leftMargin: E,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: E,
    // `<body>`
    marginWidth: E,
    // `<body>`
    noResize: H,
    // `<frame>`
    noHref: H,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: H,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: H,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: E,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: fe,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: E,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: E,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    disablePictureInPicture: H,
    disableRemotePlayback: H,
    prefix: null,
    property: null,
    results: E,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: Io
}), Xc = Dt({
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    transformOrigin: "transform-origin",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  properties: {
    about: Oe,
    accentHeight: E,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: E,
    amplitude: E,
    arabicForm: null,
    ascent: E,
    attributeName: null,
    attributeType: null,
    azimuth: E,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: E,
    by: null,
    calcMode: null,
    capHeight: E,
    className: se,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: E,
    diffuseConstant: E,
    direction: null,
    display: null,
    dur: null,
    divisor: E,
    dominantBaseline: null,
    download: H,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: E,
    enableBackground: null,
    end: null,
    event: null,
    exponent: E,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: E,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: It,
    g2: It,
    glyphName: It,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: E,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: E,
    horizOriginX: E,
    horizOriginY: E,
    id: null,
    ideographic: E,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: E,
    k: E,
    k1: E,
    k2: E,
    k3: E,
    k4: E,
    kernelMatrix: Oe,
    kernelUnitLength: null,
    keyPoints: null,
    // SEMI_COLON_SEPARATED
    keySplines: null,
    // SEMI_COLON_SEPARATED
    keyTimes: null,
    // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: E,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: E,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: E,
    overlineThickness: E,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: E,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: se,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: E,
    pointsAtY: E,
    pointsAtZ: E,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: Oe,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: Oe,
    rev: Oe,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: Oe,
    requiredFeatures: Oe,
    requiredFonts: Oe,
    requiredFormats: Oe,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: E,
    specularExponent: E,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: E,
    strikethroughThickness: E,
    string: null,
    stroke: null,
    strokeDashArray: Oe,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: E,
    strokeOpacity: E,
    strokeWidth: null,
    style: null,
    surfaceScale: E,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: Oe,
    tabIndex: E,
    tableValues: null,
    target: null,
    targetX: E,
    targetY: E,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: Oe,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: E,
    underlineThickness: E,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: E,
    values: null,
    vAlphabetic: E,
    vMathematical: E,
    vectorEffect: null,
    vHanging: E,
    vIdeographic: E,
    version: null,
    vertAdvY: E,
    vertOriginX: E,
    vertOriginY: E,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: E,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: Po
}), Oo = Dt({
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  },
  space: "xlink",
  transform(t, e) {
    return "xlink:" + e.slice(5).toLowerCase();
  }
}), Ro = Dt({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: Io
}), jo = Dt({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(t, e) {
    return "xml:" + e.slice(3).toLowerCase();
  }
}), Qc = {
  classId: "classID",
  dataType: "datatype",
  itemId: "itemID",
  strokeDashArray: "strokeDasharray",
  strokeDashOffset: "strokeDashoffset",
  strokeLineCap: "strokeLinecap",
  strokeLineJoin: "strokeLinejoin",
  strokeMiterLimit: "strokeMiterlimit",
  typeOf: "typeof",
  xLinkActuate: "xlinkActuate",
  xLinkArcRole: "xlinkArcrole",
  xLinkHref: "xlinkHref",
  xLinkRole: "xlinkRole",
  xLinkShow: "xlinkShow",
  xLinkTitle: "xlinkTitle",
  xLinkType: "xlinkType",
  xmlnsXLink: "xmlnsXlink"
}, Zc = /[A-Z]/g, Bi = /-[a-z]/g, eh = /^data[-\w.:]+$/i;
function th(t, e) {
  const n = Er(e);
  let r = e, i = Ce;
  if (n in t.normal)
    return t.property[t.normal[n]];
  if (n.length > 4 && n.slice(0, 4) === "data" && eh.test(e)) {
    if (e.charAt(4) === "-") {
      const s = e.slice(5).replace(Bi, rh);
      r = "data" + s.charAt(0).toUpperCase() + s.slice(1);
    } else {
      const s = e.slice(4);
      if (!Bi.test(s)) {
        let o = s.replace(Zc, nh);
        o.charAt(0) !== "-" && (o = "-" + o), e = "data" + o;
      }
    }
    i = Vr;
  }
  return new i(r, e);
}
function nh(t) {
  return "-" + t.toLowerCase();
}
function rh(t) {
  return t.charAt(1).toUpperCase();
}
const ih = To([Ao, Yc, Oo, Ro, jo], "html"), Hr = To([Ao, Xc, Oo, Ro, jo], "svg");
function sh(t) {
  return t.join(" ").trim();
}
var Wr = {}, qi = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, oh = /\n/g, ah = /^\s*/, lh = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, uh = /^:\s*/, ch = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, hh = /^[;\s]*/, dh = /^\s+|\s+$/g, fh = `
`, Vi = "/", Hi = "*", gt = "", ph = "comment", gh = "declaration", mh = function(t, e) {
  if (typeof t != "string")
    throw new TypeError("First argument must be a string");
  if (!t) return [];
  e = e || {};
  var n = 1, r = 1;
  function i(y) {
    var b = y.match(oh);
    b && (n += b.length);
    var w = y.lastIndexOf(fh);
    r = ~w ? y.length - w : r + y.length;
  }
  function s() {
    var y = { line: n, column: r };
    return function(b) {
      return b.position = new o(y), c(), b;
    };
  }
  function o(y) {
    this.start = y, this.end = { line: n, column: r }, this.source = e.source;
  }
  o.prototype.content = t;
  function a(y) {
    var b = new Error(
      e.source + ":" + n + ":" + r + ": " + y
    );
    if (b.reason = y, b.filename = e.source, b.line = n, b.column = r, b.source = t, !e.silent) throw b;
  }
  function l(y) {
    var b = y.exec(t);
    if (b) {
      var w = b[0];
      return i(w), t = t.slice(w.length), b;
    }
  }
  function c() {
    l(ah);
  }
  function u(y) {
    var b;
    for (y = y || []; b = h(); )
      b !== !1 && y.push(b);
    return y;
  }
  function h() {
    var y = s();
    if (!(Vi != t.charAt(0) || Hi != t.charAt(1))) {
      for (var b = 2; gt != t.charAt(b) && (Hi != t.charAt(b) || Vi != t.charAt(b + 1)); )
        ++b;
      if (b += 2, gt === t.charAt(b - 1))
        return a("End of comment missing");
      var w = t.slice(2, b - 2);
      return r += 2, i(w), t = t.slice(b), r += 2, y({
        type: ph,
        comment: w
      });
    }
  }
  function f() {
    var y = s(), b = l(lh);
    if (b) {
      if (h(), !l(uh)) return a("property missing ':'");
      var w = l(ch), v = y({
        type: gh,
        property: Wi(b[0].replace(qi, gt)),
        value: w ? Wi(w[0].replace(qi, gt)) : gt
      });
      return l(hh), v;
    }
  }
  function d() {
    var y = [];
    u(y);
    for (var b; b = f(); )
      b !== !1 && (y.push(b), u(y));
    return y;
  }
  return c(), d();
};
function Wi(t) {
  return t ? t.replace(dh, gt) : gt;
}
var yh = ye && ye.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Wr, "__esModule", { value: !0 });
Wr.default = vh;
var bh = yh(mh);
function vh(t, e) {
  var n = null;
  if (!t || typeof t != "string")
    return n;
  var r = (0, bh.default)(t), i = typeof e == "function";
  return r.forEach(function(s) {
    if (s.type === "declaration") {
      var o = s.property, a = s.value;
      i ? e(o, a, s) : a && (n = n || {}, n[o] = a);
    }
  }), n;
}
var Ln = {};
Object.defineProperty(Ln, "__esModule", { value: !0 });
Ln.camelCase = void 0;
var wh = /^--[a-zA-Z0-9_-]+$/, _h = /-([a-z])/g, xh = /^[^-]+$/, kh = /^-(webkit|moz|ms|o|khtml)-/, Sh = /^-(ms)-/, Eh = function(t) {
  return !t || xh.test(t) || wh.test(t);
}, Ch = function(t, e) {
  return e.toUpperCase();
}, Gi = function(t, e) {
  return "".concat(e, "-");
}, Th = function(t, e) {
  return e === void 0 && (e = {}), Eh(t) ? t : (t = t.toLowerCase(), e.reactCompat ? t = t.replace(Sh, Gi) : t = t.replace(kh, Gi), t.replace(_h, Ch));
};
Ln.camelCase = Th;
var Ah = ye && ye.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
}, Ph = Ah(Wr), Ih = Ln;
function Ar(t, e) {
  var n = {};
  return !t || typeof t != "string" || (0, Ph.default)(t, function(r, i) {
    r && i && (n[(0, Ih.camelCase)(r, e)] = i);
  }), n;
}
Ar.default = Ar;
var Oh = Ar;
const Rh = /* @__PURE__ */ Is(Oh), Lo = $o("end"), Gr = $o("start");
function $o(t) {
  return e;
  function e(n) {
    const r = n && n.position && n.position[t] || {};
    if (typeof r.line == "number" && r.line > 0 && typeof r.column == "number" && r.column > 0)
      return {
        line: r.line,
        column: r.column,
        offset: typeof r.offset == "number" && r.offset > -1 ? r.offset : void 0
      };
  }
}
function jh(t) {
  const e = Gr(t), n = Lo(t);
  if (e && n)
    return { start: e, end: n };
}
function Qt(t) {
  return !t || typeof t != "object" ? "" : "position" in t || "type" in t ? Ki(t.position) : "start" in t || "end" in t ? Ki(t) : "line" in t || "column" in t ? Pr(t) : "";
}
function Pr(t) {
  return Ji(t && t.line) + ":" + Ji(t && t.column);
}
function Ki(t) {
  return Pr(t && t.start) + "-" + Pr(t && t.end);
}
function Ji(t) {
  return t && typeof t == "number" ? t : 1;
}
class be extends Error {
  /**
   * Create a message for `reason`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {Options | null | undefined} [options]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */
  // eslint-disable-next-line complexity
  constructor(e, n, r) {
    super(), typeof n == "string" && (r = n, n = void 0);
    let i = "", s = {}, o = !1;
    if (n && ("line" in n && "column" in n ? s = { place: n } : "start" in n && "end" in n ? s = { place: n } : "type" in n ? s = {
      ancestors: [n],
      place: n.position
    } : s = { ...n }), typeof e == "string" ? i = e : !s.cause && e && (o = !0, i = e.message, s.cause = e), !s.ruleId && !s.source && typeof r == "string") {
      const l = r.indexOf(":");
      l === -1 ? s.ruleId = r : (s.source = r.slice(0, l), s.ruleId = r.slice(l + 1));
    }
    if (!s.place && s.ancestors && s.ancestors) {
      const l = s.ancestors[s.ancestors.length - 1];
      l && (s.place = l.position);
    }
    const a = s.place && "start" in s.place ? s.place.start : s.place;
    this.ancestors = s.ancestors || void 0, this.cause = s.cause || void 0, this.column = a ? a.column : void 0, this.fatal = void 0, this.file, this.message = i, this.line = a ? a.line : void 0, this.name = Qt(s.place) || "1:1", this.place = s.place || void 0, this.reason = this.message, this.ruleId = s.ruleId || void 0, this.source = s.source || void 0, this.stack = o && s.cause && typeof s.cause.stack == "string" ? s.cause.stack : "", this.actual, this.expected, this.note, this.url;
  }
}
be.prototype.file = "";
be.prototype.name = "";
be.prototype.reason = "";
be.prototype.message = "";
be.prototype.stack = "";
be.prototype.column = void 0;
be.prototype.line = void 0;
be.prototype.ancestors = void 0;
be.prototype.cause = void 0;
be.prototype.fatal = void 0;
be.prototype.place = void 0;
be.prototype.ruleId = void 0;
be.prototype.source = void 0;
const Kr = {}.hasOwnProperty, Lh = /* @__PURE__ */ new Map(), $h = /[A-Z]/g, Dh = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), Nh = /* @__PURE__ */ new Set(["td", "th"]), Do = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function zh(t, e) {
  if (!e || e.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const n = e.filePath || void 0;
  let r;
  if (e.development) {
    if (typeof e.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    r = Wh(n, e.jsxDEV);
  } else {
    if (typeof e.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof e.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    r = Hh(n, e.jsx, e.jsxs);
  }
  const i = {
    Fragment: e.Fragment,
    ancestors: [],
    components: e.components || {},
    create: r,
    elementAttributeNameCase: e.elementAttributeNameCase || "react",
    evaluater: e.createEvaluater ? e.createEvaluater() : void 0,
    filePath: n,
    ignoreInvalidStyle: e.ignoreInvalidStyle || !1,
    passKeys: e.passKeys !== !1,
    passNode: e.passNode || !1,
    schema: e.space === "svg" ? Hr : ih,
    stylePropertyNameCase: e.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: e.tableCellAlignToStyle !== !1
  }, s = No(i, t, void 0);
  return s && typeof s != "string" ? s : i.create(
    t,
    i.Fragment,
    { children: s || void 0 },
    void 0
  );
}
function No(t, e, n) {
  if (e.type === "element")
    return Mh(t, e, n);
  if (e.type === "mdxFlowExpression" || e.type === "mdxTextExpression")
    return Fh(t, e);
  if (e.type === "mdxJsxFlowElement" || e.type === "mdxJsxTextElement")
    return Bh(t, e, n);
  if (e.type === "mdxjsEsm")
    return Uh(t, e);
  if (e.type === "root")
    return qh(t, e, n);
  if (e.type === "text")
    return Vh(t, e);
}
function Mh(t, e, n) {
  const r = t.schema;
  let i = r;
  e.tagName.toLowerCase() === "svg" && r.space === "html" && (i = Hr, t.schema = i), t.ancestors.push(e);
  const s = Mo(t, e.tagName, !1), o = Gh(t, e);
  let a = Yr(t, e);
  return Dh.has(e.tagName) && (a = a.filter(function(l) {
    return typeof l == "string" ? !Kc(l) : !0;
  })), zo(t, o, s, e), Jr(o, a), t.ancestors.pop(), t.schema = r, t.create(e, s, o, n);
}
function Fh(t, e) {
  if (e.data && e.data.estree && t.evaluater) {
    const r = e.data.estree.body[0];
    return r.type, /** @type {Child | undefined} */
    t.evaluater.evaluateExpression(r.expression);
  }
  nn(t, e.position);
}
function Uh(t, e) {
  if (e.data && e.data.estree && t.evaluater)
    return (
      /** @type {Child | undefined} */
      t.evaluater.evaluateProgram(e.data.estree)
    );
  nn(t, e.position);
}
function Bh(t, e, n) {
  const r = t.schema;
  let i = r;
  e.name === "svg" && r.space === "html" && (i = Hr, t.schema = i), t.ancestors.push(e);
  const s = e.name === null ? t.Fragment : Mo(t, e.name, !0), o = Kh(t, e), a = Yr(t, e);
  return zo(t, o, s, e), Jr(o, a), t.ancestors.pop(), t.schema = r, t.create(e, s, o, n);
}
function qh(t, e, n) {
  const r = {};
  return Jr(r, Yr(t, e)), t.create(e, t.Fragment, r, n);
}
function Vh(t, e) {
  return e.value;
}
function zo(t, e, n, r) {
  typeof n != "string" && n !== t.Fragment && t.passNode && (e.node = r);
}
function Jr(t, e) {
  if (e.length > 0) {
    const n = e.length > 1 ? e : e[0];
    n && (t.children = n);
  }
}
function Hh(t, e, n) {
  return r;
  function r(i, s, o, a) {
    const c = Array.isArray(o.children) ? n : e;
    return a ? c(s, o, a) : c(s, o);
  }
}
function Wh(t, e) {
  return n;
  function n(r, i, s, o) {
    const a = Array.isArray(s.children), l = Gr(r);
    return e(
      i,
      s,
      o,
      a,
      {
        columnNumber: l ? l.column - 1 : void 0,
        fileName: t,
        lineNumber: l ? l.line : void 0
      },
      void 0
    );
  }
}
function Gh(t, e) {
  const n = {};
  let r, i;
  for (i in e.properties)
    if (i !== "children" && Kr.call(e.properties, i)) {
      const s = Jh(t, i, e.properties[i]);
      if (s) {
        const [o, a] = s;
        t.tableCellAlignToStyle && o === "align" && typeof a == "string" && Nh.has(e.tagName) ? r = a : n[o] = a;
      }
    }
  if (r) {
    const s = (
      /** @type {Style} */
      n.style || (n.style = {})
    );
    s[t.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = r;
  }
  return n;
}
function Kh(t, e) {
  const n = {};
  for (const r of e.attributes)
    if (r.type === "mdxJsxExpressionAttribute")
      if (r.data && r.data.estree && t.evaluater) {
        const s = r.data.estree.body[0];
        s.type;
        const o = s.expression;
        o.type;
        const a = o.properties[0];
        a.type, Object.assign(
          n,
          t.evaluater.evaluateExpression(a.argument)
        );
      } else
        nn(t, e.position);
    else {
      const i = r.name;
      let s;
      if (r.value && typeof r.value == "object")
        if (r.value.data && r.value.data.estree && t.evaluater) {
          const a = r.value.data.estree.body[0];
          a.type, s = t.evaluater.evaluateExpression(a.expression);
        } else
          nn(t, e.position);
      else
        s = r.value === null ? !0 : r.value;
      n[i] = /** @type {Props[keyof Props]} */
      s;
    }
  return n;
}
function Yr(t, e) {
  const n = [];
  let r = -1;
  const i = t.passKeys ? /* @__PURE__ */ new Map() : Lh;
  for (; ++r < e.children.length; ) {
    const s = e.children[r];
    let o;
    if (t.passKeys) {
      const l = s.type === "element" ? s.tagName : s.type === "mdxJsxFlowElement" || s.type === "mdxJsxTextElement" ? s.name : void 0;
      if (l) {
        const c = i.get(l) || 0;
        o = l + "-" + c, i.set(l, c + 1);
      }
    }
    const a = No(t, s, o);
    a !== void 0 && n.push(a);
  }
  return n;
}
function Jh(t, e, n) {
  const r = th(t.schema, e);
  if (!(n == null || typeof n == "number" && Number.isNaN(n))) {
    if (Array.isArray(n) && (n = r.commaSeparated ? qc(n) : sh(n)), r.property === "style") {
      let i = typeof n == "object" ? n : Yh(t, String(n));
      return t.stylePropertyNameCase === "css" && (i = Xh(i)), ["style", i];
    }
    return [
      t.elementAttributeNameCase === "react" && r.space ? Qc[r.property] || r.property : r.attribute,
      n
    ];
  }
}
function Yh(t, e) {
  try {
    return Rh(e, { reactCompat: !0 });
  } catch (n) {
    if (t.ignoreInvalidStyle)
      return {};
    const r = (
      /** @type {Error} */
      n
    ), i = new be("Cannot parse `style` attribute", {
      ancestors: t.ancestors,
      cause: r,
      ruleId: "style",
      source: "hast-util-to-jsx-runtime"
    });
    throw i.file = t.filePath || void 0, i.url = Do + "#cannot-parse-style-attribute", i;
  }
}
function Mo(t, e, n) {
  let r;
  if (!n)
    r = { type: "Literal", value: e };
  else if (e.includes(".")) {
    const i = e.split(".");
    let s = -1, o;
    for (; ++s < i.length; ) {
      const a = Mi(i[s]) ? { type: "Identifier", name: i[s] } : { type: "Literal", value: i[s] };
      o = o ? {
        type: "MemberExpression",
        object: o,
        property: a,
        computed: !!(s && a.type === "Literal"),
        optional: !1
      } : a;
    }
    r = o;
  } else
    r = Mi(e) && !/^[a-z]/.test(e) ? { type: "Identifier", name: e } : { type: "Literal", value: e };
  if (r.type === "Literal") {
    const i = (
      /** @type {string | number} */
      r.value
    );
    return Kr.call(t.components, i) ? t.components[i] : i;
  }
  if (t.evaluater)
    return t.evaluater.evaluateExpression(r);
  nn(t);
}
function nn(t, e) {
  const n = new be(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: t.ancestors,
      place: e,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw n.file = t.filePath || void 0, n.url = Do + "#cannot-handle-mdx-estrees-without-createevaluater", n;
}
function Xh(t) {
  const e = {};
  let n;
  for (n in t)
    Kr.call(t, n) && (e[Qh(n)] = t[n]);
  return e;
}
function Qh(t) {
  let e = t.replace($h, Zh);
  return e.slice(0, 3) === "ms-" && (e = "-" + e), e;
}
function Zh(t) {
  return "-" + t.toLowerCase();
}
const nr = {
  action: ["form"],
  cite: ["blockquote", "del", "ins", "q"],
  data: ["object"],
  formAction: ["button", "input"],
  href: ["a", "area", "base", "link"],
  icon: ["menuitem"],
  itemId: null,
  manifest: ["html"],
  ping: ["a", "area"],
  poster: ["video"],
  src: [
    "audio",
    "embed",
    "iframe",
    "img",
    "input",
    "script",
    "source",
    "track",
    "video"
  ]
}, ed = {};
function td(t, e) {
  const n = ed, r = typeof n.includeImageAlt == "boolean" ? n.includeImageAlt : !0, i = typeof n.includeHtml == "boolean" ? n.includeHtml : !0;
  return Fo(t, r, i);
}
function Fo(t, e, n) {
  if (nd(t)) {
    if ("value" in t)
      return t.type === "html" && !n ? "" : t.value;
    if (e && "alt" in t && t.alt)
      return t.alt;
    if ("children" in t)
      return Yi(t.children, e, n);
  }
  return Array.isArray(t) ? Yi(t, e, n) : "";
}
function Yi(t, e, n) {
  const r = [];
  let i = -1;
  for (; ++i < t.length; )
    r[i] = Fo(t[i], e, n);
  return r.join("");
}
function nd(t) {
  return !!(t && typeof t == "object");
}
const Xi = document.createElement("i");
function Xr(t) {
  const e = "&" + t + ";";
  Xi.innerHTML = e;
  const n = Xi.textContent;
  return (
    // @ts-expect-error: TypeScript is wrong that `textContent` on elements can
    // yield `null`.
    n.charCodeAt(n.length - 1) === 59 && t !== "semi" || n === e ? !1 : n
  );
}
function qe(t, e, n, r) {
  const i = t.length;
  let s = 0, o;
  if (e < 0 ? e = -e > i ? 0 : i + e : e = e > i ? i : e, n = n > 0 ? n : 0, r.length < 1e4)
    o = Array.from(r), o.unshift(e, n), t.splice(...o);
  else
    for (n && t.splice(e, n); s < r.length; )
      o = r.slice(s, s + 1e4), o.unshift(e, 0), t.splice(...o), s += 1e4, e += 1e4;
}
function $e(t, e) {
  return t.length > 0 ? (qe(t, t.length, 0, e), t) : e;
}
const Qi = {}.hasOwnProperty;
function rd(t) {
  const e = {};
  let n = -1;
  for (; ++n < t.length; )
    id(e, t[n]);
  return e;
}
function id(t, e) {
  let n;
  for (n in e) {
    const i = (Qi.call(t, n) ? t[n] : void 0) || (t[n] = {}), s = e[n];
    let o;
    if (s)
      for (o in s) {
        Qi.call(i, o) || (i[o] = []);
        const a = s[o];
        sd(
          // @ts-expect-error Looks like a list.
          i[o],
          Array.isArray(a) ? a : a ? [a] : []
        );
      }
  }
}
function sd(t, e) {
  let n = -1;
  const r = [];
  for (; ++n < e.length; )
    (e[n].add === "after" ? t : r).push(e[n]);
  qe(t, 0, 0, r);
}
function Uo(t, e) {
  const n = Number.parseInt(t, e);
  return (
    // C0 except for HT, LF, FF, CR, space.
    n < 9 || n === 11 || n > 13 && n < 32 || // Control character (DEL) of C0, and C1 controls.
    n > 126 && n < 160 || // Lone high surrogates and low surrogates.
    n > 55295 && n < 57344 || // Noncharacters.
    n > 64975 && n < 65008 || /* eslint-disable no-bitwise */
    (n & 65535) === 65535 || (n & 65535) === 65534 || /* eslint-enable no-bitwise */
    // Out of range
    n > 1114111 ? "�" : String.fromCodePoint(n)
  );
}
function Ot(t) {
  return t.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const Be = st(/[A-Za-z]/), Re = st(/[\dA-Za-z]/), od = st(/[#-'*+\--9=?A-Z^-~]/);
function Ir(t) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    t !== null && (t < 32 || t === 127)
  );
}
const Or = st(/\d/), ad = st(/[\dA-Fa-f]/), ld = st(/[!-/:-@[-`{-~]/);
function M(t) {
  return t !== null && t < -2;
}
function Ee(t) {
  return t !== null && (t < 0 || t === 32);
}
function Q(t) {
  return t === -2 || t === -1 || t === 32;
}
const ud = st(new RegExp("\\p{P}|\\p{S}", "u")), cd = st(/\s/);
function st(t) {
  return e;
  function e(n) {
    return n !== null && n > -1 && t.test(String.fromCharCode(n));
  }
}
function Nt(t) {
  const e = [];
  let n = -1, r = 0, i = 0;
  for (; ++n < t.length; ) {
    const s = t.charCodeAt(n);
    let o = "";
    if (s === 37 && Re(t.charCodeAt(n + 1)) && Re(t.charCodeAt(n + 2)))
      i = 2;
    else if (s < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(s)) || (o = String.fromCharCode(s));
    else if (s > 55295 && s < 57344) {
      const a = t.charCodeAt(n + 1);
      s < 56320 && a > 56319 && a < 57344 ? (o = String.fromCharCode(s, a), i = 1) : o = "�";
    } else
      o = String.fromCharCode(s);
    o && (e.push(t.slice(r, n), encodeURIComponent(o)), r = n + i + 1, o = ""), i && (n += i, i = 0);
  }
  return e.join("") + t.slice(r);
}
function oe(t, e, n, r) {
  const i = r ? r - 1 : Number.POSITIVE_INFINITY;
  let s = 0;
  return o;
  function o(l) {
    return Q(l) ? (t.enter(n), a(l)) : e(l);
  }
  function a(l) {
    return Q(l) && s++ < i ? (t.consume(l), a) : (t.exit(n), e(l));
  }
}
const hd = {
  tokenize: dd
};
function dd(t) {
  const e = t.attempt(this.parser.constructs.contentInitial, r, i);
  let n;
  return e;
  function r(a) {
    if (a === null) {
      t.consume(a);
      return;
    }
    return t.enter("lineEnding"), t.consume(a), t.exit("lineEnding"), oe(t, e, "linePrefix");
  }
  function i(a) {
    return t.enter("paragraph"), s(a);
  }
  function s(a) {
    const l = t.enter("chunkText", {
      contentType: "text",
      previous: n
    });
    return n && (n.next = l), n = l, o(a);
  }
  function o(a) {
    if (a === null) {
      t.exit("chunkText"), t.exit("paragraph"), t.consume(a);
      return;
    }
    return M(a) ? (t.consume(a), t.exit("chunkText"), s) : (t.consume(a), o);
  }
}
const fd = {
  tokenize: pd
}, Zi = {
  tokenize: gd
};
function pd(t) {
  const e = this, n = [];
  let r = 0, i, s, o;
  return a;
  function a(k) {
    if (r < n.length) {
      const I = n[r];
      return e.containerState = I[1], t.attempt(I[0].continuation, l, c)(k);
    }
    return c(k);
  }
  function l(k) {
    if (r++, e.containerState._closeFlow) {
      e.containerState._closeFlow = void 0, i && C();
      const I = e.events.length;
      let $ = I, _;
      for (; $--; )
        if (e.events[$][0] === "exit" && e.events[$][1].type === "chunkFlow") {
          _ = e.events[$][1].end;
          break;
        }
      v(r);
      let D = I;
      for (; D < e.events.length; )
        e.events[D][1].end = {
          ..._
        }, D++;
      return qe(e.events, $ + 1, 0, e.events.slice(I)), e.events.length = D, c(k);
    }
    return a(k);
  }
  function c(k) {
    if (r === n.length) {
      if (!i)
        return f(k);
      if (i.currentConstruct && i.currentConstruct.concrete)
        return y(k);
      e.interrupt = !!(i.currentConstruct && !i._gfmTableDynamicInterruptHack);
    }
    return e.containerState = {}, t.check(Zi, u, h)(k);
  }
  function u(k) {
    return i && C(), v(r), f(k);
  }
  function h(k) {
    return e.parser.lazy[e.now().line] = r !== n.length, o = e.now().offset, y(k);
  }
  function f(k) {
    return e.containerState = {}, t.attempt(Zi, d, y)(k);
  }
  function d(k) {
    return r++, n.push([e.currentConstruct, e.containerState]), f(k);
  }
  function y(k) {
    if (k === null) {
      i && C(), v(0), t.consume(k);
      return;
    }
    return i = i || e.parser.flow(e.now()), t.enter("chunkFlow", {
      _tokenizer: i,
      contentType: "flow",
      previous: s
    }), b(k);
  }
  function b(k) {
    if (k === null) {
      w(t.exit("chunkFlow"), !0), v(0), t.consume(k);
      return;
    }
    return M(k) ? (t.consume(k), w(t.exit("chunkFlow")), r = 0, e.interrupt = void 0, a) : (t.consume(k), b);
  }
  function w(k, I) {
    const $ = e.sliceStream(k);
    if (I && $.push(null), k.previous = s, s && (s.next = k), s = k, i.defineSkip(k.start), i.write($), e.parser.lazy[k.start.line]) {
      let _ = i.events.length;
      for (; _--; )
        if (
          // The token starts before the line ending…
          i.events[_][1].start.offset < o && // …and either is not ended yet…
          (!i.events[_][1].end || // …or ends after it.
          i.events[_][1].end.offset > o)
        )
          return;
      const D = e.events.length;
      let W = D, F, j;
      for (; W--; )
        if (e.events[W][0] === "exit" && e.events[W][1].type === "chunkFlow") {
          if (F) {
            j = e.events[W][1].end;
            break;
          }
          F = !0;
        }
      for (v(r), _ = D; _ < e.events.length; )
        e.events[_][1].end = {
          ...j
        }, _++;
      qe(e.events, W + 1, 0, e.events.slice(D)), e.events.length = _;
    }
  }
  function v(k) {
    let I = n.length;
    for (; I-- > k; ) {
      const $ = n[I];
      e.containerState = $[1], $[0].exit.call(e, t);
    }
    n.length = k;
  }
  function C() {
    i.write([null]), s = void 0, i = void 0, e.containerState._closeFlow = void 0;
  }
}
function gd(t, e, n) {
  return oe(t, t.attempt(this.parser.constructs.document, e, n), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function es(t) {
  if (t === null || Ee(t) || cd(t))
    return 1;
  if (ud(t))
    return 2;
}
function Qr(t, e, n) {
  const r = [];
  let i = -1;
  for (; ++i < t.length; ) {
    const s = t[i].resolveAll;
    s && !r.includes(s) && (e = s(e, n), r.push(s));
  }
  return e;
}
const Rr = {
  name: "attention",
  resolveAll: md,
  tokenize: yd
};
function md(t, e) {
  let n = -1, r, i, s, o, a, l, c, u;
  for (; ++n < t.length; )
    if (t[n][0] === "enter" && t[n][1].type === "attentionSequence" && t[n][1]._close) {
      for (r = n; r--; )
        if (t[r][0] === "exit" && t[r][1].type === "attentionSequence" && t[r][1]._open && // If the markers are the same:
        e.sliceSerialize(t[r][1]).charCodeAt(0) === e.sliceSerialize(t[n][1]).charCodeAt(0)) {
          if ((t[r][1]._close || t[n][1]._open) && (t[n][1].end.offset - t[n][1].start.offset) % 3 && !((t[r][1].end.offset - t[r][1].start.offset + t[n][1].end.offset - t[n][1].start.offset) % 3))
            continue;
          l = t[r][1].end.offset - t[r][1].start.offset > 1 && t[n][1].end.offset - t[n][1].start.offset > 1 ? 2 : 1;
          const h = {
            ...t[r][1].end
          }, f = {
            ...t[n][1].start
          };
          ts(h, -l), ts(f, l), o = {
            type: l > 1 ? "strongSequence" : "emphasisSequence",
            start: h,
            end: {
              ...t[r][1].end
            }
          }, a = {
            type: l > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...t[n][1].start
            },
            end: f
          }, s = {
            type: l > 1 ? "strongText" : "emphasisText",
            start: {
              ...t[r][1].end
            },
            end: {
              ...t[n][1].start
            }
          }, i = {
            type: l > 1 ? "strong" : "emphasis",
            start: {
              ...o.start
            },
            end: {
              ...a.end
            }
          }, t[r][1].end = {
            ...o.start
          }, t[n][1].start = {
            ...a.end
          }, c = [], t[r][1].end.offset - t[r][1].start.offset && (c = $e(c, [["enter", t[r][1], e], ["exit", t[r][1], e]])), c = $e(c, [["enter", i, e], ["enter", o, e], ["exit", o, e], ["enter", s, e]]), c = $e(c, Qr(e.parser.constructs.insideSpan.null, t.slice(r + 1, n), e)), c = $e(c, [["exit", s, e], ["enter", a, e], ["exit", a, e], ["exit", i, e]]), t[n][1].end.offset - t[n][1].start.offset ? (u = 2, c = $e(c, [["enter", t[n][1], e], ["exit", t[n][1], e]])) : u = 0, qe(t, r - 1, n - r + 3, c), n = r + c.length - u - 2;
          break;
        }
    }
  for (n = -1; ++n < t.length; )
    t[n][1].type === "attentionSequence" && (t[n][1].type = "data");
  return t;
}
function yd(t, e) {
  const n = this.parser.constructs.attentionMarkers.null, r = this.previous, i = es(r);
  let s;
  return o;
  function o(l) {
    return s = l, t.enter("attentionSequence"), a(l);
  }
  function a(l) {
    if (l === s)
      return t.consume(l), a;
    const c = t.exit("attentionSequence"), u = es(l), h = !u || u === 2 && i || n.includes(l), f = !i || i === 2 && u || n.includes(r);
    return c._open = !!(s === 42 ? h : h && (i || !f)), c._close = !!(s === 42 ? f : f && (u || !h)), e(l);
  }
}
function ts(t, e) {
  t.column += e, t.offset += e, t._bufferIndex += e;
}
const bd = {
  name: "autolink",
  tokenize: vd
};
function vd(t, e, n) {
  let r = 0;
  return i;
  function i(d) {
    return t.enter("autolink"), t.enter("autolinkMarker"), t.consume(d), t.exit("autolinkMarker"), t.enter("autolinkProtocol"), s;
  }
  function s(d) {
    return Be(d) ? (t.consume(d), o) : d === 64 ? n(d) : c(d);
  }
  function o(d) {
    return d === 43 || d === 45 || d === 46 || Re(d) ? (r = 1, a(d)) : c(d);
  }
  function a(d) {
    return d === 58 ? (t.consume(d), r = 0, l) : (d === 43 || d === 45 || d === 46 || Re(d)) && r++ < 32 ? (t.consume(d), a) : (r = 0, c(d));
  }
  function l(d) {
    return d === 62 ? (t.exit("autolinkProtocol"), t.enter("autolinkMarker"), t.consume(d), t.exit("autolinkMarker"), t.exit("autolink"), e) : d === null || d === 32 || d === 60 || Ir(d) ? n(d) : (t.consume(d), l);
  }
  function c(d) {
    return d === 64 ? (t.consume(d), u) : od(d) ? (t.consume(d), c) : n(d);
  }
  function u(d) {
    return Re(d) ? h(d) : n(d);
  }
  function h(d) {
    return d === 46 ? (t.consume(d), r = 0, u) : d === 62 ? (t.exit("autolinkProtocol").type = "autolinkEmail", t.enter("autolinkMarker"), t.consume(d), t.exit("autolinkMarker"), t.exit("autolink"), e) : f(d);
  }
  function f(d) {
    if ((d === 45 || Re(d)) && r++ < 63) {
      const y = d === 45 ? f : h;
      return t.consume(d), y;
    }
    return n(d);
  }
}
const $n = {
  partial: !0,
  tokenize: wd
};
function wd(t, e, n) {
  return r;
  function r(s) {
    return Q(s) ? oe(t, i, "linePrefix")(s) : i(s);
  }
  function i(s) {
    return s === null || M(s) ? e(s) : n(s);
  }
}
const Bo = {
  continuation: {
    tokenize: xd
  },
  exit: kd,
  name: "blockQuote",
  tokenize: _d
};
function _d(t, e, n) {
  const r = this;
  return i;
  function i(o) {
    if (o === 62) {
      const a = r.containerState;
      return a.open || (t.enter("blockQuote", {
        _container: !0
      }), a.open = !0), t.enter("blockQuotePrefix"), t.enter("blockQuoteMarker"), t.consume(o), t.exit("blockQuoteMarker"), s;
    }
    return n(o);
  }
  function s(o) {
    return Q(o) ? (t.enter("blockQuotePrefixWhitespace"), t.consume(o), t.exit("blockQuotePrefixWhitespace"), t.exit("blockQuotePrefix"), e) : (t.exit("blockQuotePrefix"), e(o));
  }
}
function xd(t, e, n) {
  const r = this;
  return i;
  function i(o) {
    return Q(o) ? oe(t, s, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(o) : s(o);
  }
  function s(o) {
    return t.attempt(Bo, e, n)(o);
  }
}
function kd(t) {
  t.exit("blockQuote");
}
const qo = {
  name: "characterEscape",
  tokenize: Sd
};
function Sd(t, e, n) {
  return r;
  function r(s) {
    return t.enter("characterEscape"), t.enter("escapeMarker"), t.consume(s), t.exit("escapeMarker"), i;
  }
  function i(s) {
    return ld(s) ? (t.enter("characterEscapeValue"), t.consume(s), t.exit("characterEscapeValue"), t.exit("characterEscape"), e) : n(s);
  }
}
const Vo = {
  name: "characterReference",
  tokenize: Ed
};
function Ed(t, e, n) {
  const r = this;
  let i = 0, s, o;
  return a;
  function a(h) {
    return t.enter("characterReference"), t.enter("characterReferenceMarker"), t.consume(h), t.exit("characterReferenceMarker"), l;
  }
  function l(h) {
    return h === 35 ? (t.enter("characterReferenceMarkerNumeric"), t.consume(h), t.exit("characterReferenceMarkerNumeric"), c) : (t.enter("characterReferenceValue"), s = 31, o = Re, u(h));
  }
  function c(h) {
    return h === 88 || h === 120 ? (t.enter("characterReferenceMarkerHexadecimal"), t.consume(h), t.exit("characterReferenceMarkerHexadecimal"), t.enter("characterReferenceValue"), s = 6, o = ad, u) : (t.enter("characterReferenceValue"), s = 7, o = Or, u(h));
  }
  function u(h) {
    if (h === 59 && i) {
      const f = t.exit("characterReferenceValue");
      return o === Re && !Xr(r.sliceSerialize(f)) ? n(h) : (t.enter("characterReferenceMarker"), t.consume(h), t.exit("characterReferenceMarker"), t.exit("characterReference"), e);
    }
    return o(h) && i++ < s ? (t.consume(h), u) : n(h);
  }
}
const ns = {
  partial: !0,
  tokenize: Td
}, rs = {
  concrete: !0,
  name: "codeFenced",
  tokenize: Cd
};
function Cd(t, e, n) {
  const r = this, i = {
    partial: !0,
    tokenize: $
  };
  let s = 0, o = 0, a;
  return l;
  function l(_) {
    return c(_);
  }
  function c(_) {
    const D = r.events[r.events.length - 1];
    return s = D && D[1].type === "linePrefix" ? D[2].sliceSerialize(D[1], !0).length : 0, a = _, t.enter("codeFenced"), t.enter("codeFencedFence"), t.enter("codeFencedFenceSequence"), u(_);
  }
  function u(_) {
    return _ === a ? (o++, t.consume(_), u) : o < 3 ? n(_) : (t.exit("codeFencedFenceSequence"), Q(_) ? oe(t, h, "whitespace")(_) : h(_));
  }
  function h(_) {
    return _ === null || M(_) ? (t.exit("codeFencedFence"), r.interrupt ? e(_) : t.check(ns, b, I)(_)) : (t.enter("codeFencedFenceInfo"), t.enter("chunkString", {
      contentType: "string"
    }), f(_));
  }
  function f(_) {
    return _ === null || M(_) ? (t.exit("chunkString"), t.exit("codeFencedFenceInfo"), h(_)) : Q(_) ? (t.exit("chunkString"), t.exit("codeFencedFenceInfo"), oe(t, d, "whitespace")(_)) : _ === 96 && _ === a ? n(_) : (t.consume(_), f);
  }
  function d(_) {
    return _ === null || M(_) ? h(_) : (t.enter("codeFencedFenceMeta"), t.enter("chunkString", {
      contentType: "string"
    }), y(_));
  }
  function y(_) {
    return _ === null || M(_) ? (t.exit("chunkString"), t.exit("codeFencedFenceMeta"), h(_)) : _ === 96 && _ === a ? n(_) : (t.consume(_), y);
  }
  function b(_) {
    return t.attempt(i, I, w)(_);
  }
  function w(_) {
    return t.enter("lineEnding"), t.consume(_), t.exit("lineEnding"), v;
  }
  function v(_) {
    return s > 0 && Q(_) ? oe(t, C, "linePrefix", s + 1)(_) : C(_);
  }
  function C(_) {
    return _ === null || M(_) ? t.check(ns, b, I)(_) : (t.enter("codeFlowValue"), k(_));
  }
  function k(_) {
    return _ === null || M(_) ? (t.exit("codeFlowValue"), C(_)) : (t.consume(_), k);
  }
  function I(_) {
    return t.exit("codeFenced"), e(_);
  }
  function $(_, D, W) {
    let F = 0;
    return j;
    function j(L) {
      return _.enter("lineEnding"), _.consume(L), _.exit("lineEnding"), O;
    }
    function O(L) {
      return _.enter("codeFencedFence"), Q(L) ? oe(_, T, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(L) : T(L);
    }
    function T(L) {
      return L === a ? (_.enter("codeFencedFenceSequence"), N(L)) : W(L);
    }
    function N(L) {
      return L === a ? (F++, _.consume(L), N) : F >= o ? (_.exit("codeFencedFenceSequence"), Q(L) ? oe(_, z, "whitespace")(L) : z(L)) : W(L);
    }
    function z(L) {
      return L === null || M(L) ? (_.exit("codeFencedFence"), D(L)) : W(L);
    }
  }
}
function Td(t, e, n) {
  const r = this;
  return i;
  function i(o) {
    return o === null ? n(o) : (t.enter("lineEnding"), t.consume(o), t.exit("lineEnding"), s);
  }
  function s(o) {
    return r.parser.lazy[r.now().line] ? n(o) : e(o);
  }
}
const rr = {
  name: "codeIndented",
  tokenize: Pd
}, Ad = {
  partial: !0,
  tokenize: Id
};
function Pd(t, e, n) {
  const r = this;
  return i;
  function i(c) {
    return t.enter("codeIndented"), oe(t, s, "linePrefix", 5)(c);
  }
  function s(c) {
    const u = r.events[r.events.length - 1];
    return u && u[1].type === "linePrefix" && u[2].sliceSerialize(u[1], !0).length >= 4 ? o(c) : n(c);
  }
  function o(c) {
    return c === null ? l(c) : M(c) ? t.attempt(Ad, o, l)(c) : (t.enter("codeFlowValue"), a(c));
  }
  function a(c) {
    return c === null || M(c) ? (t.exit("codeFlowValue"), o(c)) : (t.consume(c), a);
  }
  function l(c) {
    return t.exit("codeIndented"), e(c);
  }
}
function Id(t, e, n) {
  const r = this;
  return i;
  function i(o) {
    return r.parser.lazy[r.now().line] ? n(o) : M(o) ? (t.enter("lineEnding"), t.consume(o), t.exit("lineEnding"), i) : oe(t, s, "linePrefix", 5)(o);
  }
  function s(o) {
    const a = r.events[r.events.length - 1];
    return a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? e(o) : M(o) ? i(o) : n(o);
  }
}
const Od = {
  name: "codeText",
  previous: jd,
  resolve: Rd,
  tokenize: Ld
};
function Rd(t) {
  let e = t.length - 4, n = 3, r, i;
  if ((t[n][1].type === "lineEnding" || t[n][1].type === "space") && (t[e][1].type === "lineEnding" || t[e][1].type === "space")) {
    for (r = n; ++r < e; )
      if (t[r][1].type === "codeTextData") {
        t[n][1].type = "codeTextPadding", t[e][1].type = "codeTextPadding", n += 2, e -= 2;
        break;
      }
  }
  for (r = n - 1, e++; ++r <= e; )
    i === void 0 ? r !== e && t[r][1].type !== "lineEnding" && (i = r) : (r === e || t[r][1].type === "lineEnding") && (t[i][1].type = "codeTextData", r !== i + 2 && (t[i][1].end = t[r - 1][1].end, t.splice(i + 2, r - i - 2), e -= r - i - 2, r = i + 2), i = void 0);
  return t;
}
function jd(t) {
  return t !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function Ld(t, e, n) {
  let r = 0, i, s;
  return o;
  function o(h) {
    return t.enter("codeText"), t.enter("codeTextSequence"), a(h);
  }
  function a(h) {
    return h === 96 ? (t.consume(h), r++, a) : (t.exit("codeTextSequence"), l(h));
  }
  function l(h) {
    return h === null ? n(h) : h === 32 ? (t.enter("space"), t.consume(h), t.exit("space"), l) : h === 96 ? (s = t.enter("codeTextSequence"), i = 0, u(h)) : M(h) ? (t.enter("lineEnding"), t.consume(h), t.exit("lineEnding"), l) : (t.enter("codeTextData"), c(h));
  }
  function c(h) {
    return h === null || h === 32 || h === 96 || M(h) ? (t.exit("codeTextData"), l(h)) : (t.consume(h), c);
  }
  function u(h) {
    return h === 96 ? (t.consume(h), i++, u) : i === r ? (t.exit("codeTextSequence"), t.exit("codeText"), e(h)) : (s.type = "codeTextData", c(h));
  }
}
class $d {
  /**
   * @param {ReadonlyArray<T> | null | undefined} [initial]
   *   Initial items (optional).
   * @returns
   *   Splice buffer.
   */
  constructor(e) {
    this.left = e ? [...e] : [], this.right = [];
  }
  /**
   * Array access;
   * does not move the cursor.
   *
   * @param {number} index
   *   Index.
   * @return {T}
   *   Item.
   */
  get(e) {
    if (e < 0 || e >= this.left.length + this.right.length)
      throw new RangeError("Cannot access index `" + e + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
    return e < this.left.length ? this.left[e] : this.right[this.right.length - e + this.left.length - 1];
  }
  /**
   * The length of the splice buffer, one greater than the largest index in the
   * array.
   */
  get length() {
    return this.left.length + this.right.length;
  }
  /**
   * Remove and return `list[0]`;
   * moves the cursor to `0`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  shift() {
    return this.setCursor(0), this.right.pop();
  }
  /**
   * Slice the buffer to get an array;
   * does not move the cursor.
   *
   * @param {number} start
   *   Start.
   * @param {number | null | undefined} [end]
   *   End (optional).
   * @returns {Array<T>}
   *   Array of items.
   */
  slice(e, n) {
    const r = n ?? Number.POSITIVE_INFINITY;
    return r < this.left.length ? this.left.slice(e, r) : e > this.left.length ? this.right.slice(this.right.length - r + this.left.length, this.right.length - e + this.left.length).reverse() : this.left.slice(e).concat(this.right.slice(this.right.length - r + this.left.length).reverse());
  }
  /**
   * Mimics the behavior of Array.prototype.splice() except for the change of
   * interface necessary to avoid segfaults when patching in very large arrays.
   *
   * This operation moves cursor is moved to `start` and results in the cursor
   * placed after any inserted items.
   *
   * @param {number} start
   *   Start;
   *   zero-based index at which to start changing the array;
   *   negative numbers count backwards from the end of the array and values
   *   that are out-of bounds are clamped to the appropriate end of the array.
   * @param {number | null | undefined} [deleteCount=0]
   *   Delete count (default: `0`);
   *   maximum number of elements to delete, starting from start.
   * @param {Array<T> | null | undefined} [items=[]]
   *   Items to include in place of the deleted items (default: `[]`).
   * @return {Array<T>}
   *   Any removed items.
   */
  splice(e, n, r) {
    const i = n || 0;
    this.setCursor(Math.trunc(e));
    const s = this.right.splice(this.right.length - i, Number.POSITIVE_INFINITY);
    return r && Ht(this.left, r), s.reverse();
  }
  /**
   * Remove and return the highest-numbered item in the array, so
   * `list[list.length - 1]`;
   * Moves the cursor to `length`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  pop() {
    return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
  }
  /**
   * Inserts a single item to the high-numbered side of the array;
   * moves the cursor to `length`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  push(e) {
    this.setCursor(Number.POSITIVE_INFINITY), this.left.push(e);
  }
  /**
   * Inserts many items to the high-numbered side of the array.
   * Moves the cursor to `length`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  pushMany(e) {
    this.setCursor(Number.POSITIVE_INFINITY), Ht(this.left, e);
  }
  /**
   * Inserts a single item to the low-numbered side of the array;
   * Moves the cursor to `0`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  unshift(e) {
    this.setCursor(0), this.right.push(e);
  }
  /**
   * Inserts many items to the low-numbered side of the array;
   * moves the cursor to `0`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  unshiftMany(e) {
    this.setCursor(0), Ht(this.right, e.reverse());
  }
  /**
   * Move the cursor to a specific position in the array. Requires
   * time proportional to the distance moved.
   *
   * If `n < 0`, the cursor will end up at the beginning.
   * If `n > length`, the cursor will end up at the end.
   *
   * @param {number} n
   *   Position.
   * @return {undefined}
   *   Nothing.
   */
  setCursor(e) {
    if (!(e === this.left.length || e > this.left.length && this.right.length === 0 || e < 0 && this.left.length === 0))
      if (e < this.left.length) {
        const n = this.left.splice(e, Number.POSITIVE_INFINITY);
        Ht(this.right, n.reverse());
      } else {
        const n = this.right.splice(this.left.length + this.right.length - e, Number.POSITIVE_INFINITY);
        Ht(this.left, n.reverse());
      }
  }
}
function Ht(t, e) {
  let n = 0;
  if (e.length < 1e4)
    t.push(...e);
  else
    for (; n < e.length; )
      t.push(...e.slice(n, n + 1e4)), n += 1e4;
}
function Ho(t) {
  const e = {};
  let n = -1, r, i, s, o, a, l, c;
  const u = new $d(t);
  for (; ++n < u.length; ) {
    for (; n in e; )
      n = e[n];
    if (r = u.get(n), n && r[1].type === "chunkFlow" && u.get(n - 1)[1].type === "listItemPrefix" && (l = r[1]._tokenizer.events, s = 0, s < l.length && l[s][1].type === "lineEndingBlank" && (s += 2), s < l.length && l[s][1].type === "content"))
      for (; ++s < l.length && l[s][1].type !== "content"; )
        l[s][1].type === "chunkText" && (l[s][1]._isInFirstContentOfListItem = !0, s++);
    if (r[0] === "enter")
      r[1].contentType && (Object.assign(e, Dd(u, n)), n = e[n], c = !0);
    else if (r[1]._container) {
      for (s = n, i = void 0; s--; )
        if (o = u.get(s), o[1].type === "lineEnding" || o[1].type === "lineEndingBlank")
          o[0] === "enter" && (i && (u.get(i)[1].type = "lineEndingBlank"), o[1].type = "lineEnding", i = s);
        else if (!(o[1].type === "linePrefix" || o[1].type === "listItemIndent")) break;
      i && (r[1].end = {
        ...u.get(i)[1].start
      }, a = u.slice(i, n), a.unshift(r), u.splice(i, n - i + 1, a));
    }
  }
  return qe(t, 0, Number.POSITIVE_INFINITY, u.slice(0)), !c;
}
function Dd(t, e) {
  const n = t.get(e)[1], r = t.get(e)[2];
  let i = e - 1;
  const s = [];
  let o = n._tokenizer;
  o || (o = r.parser[n.contentType](n.start), n._contentTypeTextTrailing && (o._contentTypeTextTrailing = !0));
  const a = o.events, l = [], c = {};
  let u, h, f = -1, d = n, y = 0, b = 0;
  const w = [b];
  for (; d; ) {
    for (; t.get(++i)[1] !== d; )
      ;
    s.push(i), d._tokenizer || (u = r.sliceStream(d), d.next || u.push(null), h && o.defineSkip(d.start), d._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = !0), o.write(u), d._isInFirstContentOfListItem && (o._gfmTasklistFirstContentOfListItem = void 0)), h = d, d = d.next;
  }
  for (d = n; ++f < a.length; )
    // Find a void token that includes a break.
    a[f][0] === "exit" && a[f - 1][0] === "enter" && a[f][1].type === a[f - 1][1].type && a[f][1].start.line !== a[f][1].end.line && (b = f + 1, w.push(b), d._tokenizer = void 0, d.previous = void 0, d = d.next);
  for (o.events = [], d ? (d._tokenizer = void 0, d.previous = void 0) : w.pop(), f = w.length; f--; ) {
    const v = a.slice(w[f], w[f + 1]), C = s.pop();
    l.push([C, C + v.length - 1]), t.splice(C, 2, v);
  }
  for (l.reverse(), f = -1; ++f < l.length; )
    c[y + l[f][0]] = y + l[f][1], y += l[f][1] - l[f][0] - 1;
  return c;
}
const Nd = {
  resolve: Md,
  tokenize: Fd
}, zd = {
  partial: !0,
  tokenize: Ud
};
function Md(t) {
  return Ho(t), t;
}
function Fd(t, e) {
  let n;
  return r;
  function r(a) {
    return t.enter("content"), n = t.enter("chunkContent", {
      contentType: "content"
    }), i(a);
  }
  function i(a) {
    return a === null ? s(a) : M(a) ? t.check(zd, o, s)(a) : (t.consume(a), i);
  }
  function s(a) {
    return t.exit("chunkContent"), t.exit("content"), e(a);
  }
  function o(a) {
    return t.consume(a), t.exit("chunkContent"), n.next = t.enter("chunkContent", {
      contentType: "content",
      previous: n
    }), n = n.next, i;
  }
}
function Ud(t, e, n) {
  const r = this;
  return i;
  function i(o) {
    return t.exit("chunkContent"), t.enter("lineEnding"), t.consume(o), t.exit("lineEnding"), oe(t, s, "linePrefix");
  }
  function s(o) {
    if (o === null || M(o))
      return n(o);
    const a = r.events[r.events.length - 1];
    return !r.parser.constructs.disable.null.includes("codeIndented") && a && a[1].type === "linePrefix" && a[2].sliceSerialize(a[1], !0).length >= 4 ? e(o) : t.interrupt(r.parser.constructs.flow, n, e)(o);
  }
}
function Wo(t, e, n, r, i, s, o, a, l) {
  const c = l || Number.POSITIVE_INFINITY;
  let u = 0;
  return h;
  function h(v) {
    return v === 60 ? (t.enter(r), t.enter(i), t.enter(s), t.consume(v), t.exit(s), f) : v === null || v === 32 || v === 41 || Ir(v) ? n(v) : (t.enter(r), t.enter(o), t.enter(a), t.enter("chunkString", {
      contentType: "string"
    }), b(v));
  }
  function f(v) {
    return v === 62 ? (t.enter(s), t.consume(v), t.exit(s), t.exit(i), t.exit(r), e) : (t.enter(a), t.enter("chunkString", {
      contentType: "string"
    }), d(v));
  }
  function d(v) {
    return v === 62 ? (t.exit("chunkString"), t.exit(a), f(v)) : v === null || v === 60 || M(v) ? n(v) : (t.consume(v), v === 92 ? y : d);
  }
  function y(v) {
    return v === 60 || v === 62 || v === 92 ? (t.consume(v), d) : d(v);
  }
  function b(v) {
    return !u && (v === null || v === 41 || Ee(v)) ? (t.exit("chunkString"), t.exit(a), t.exit(o), t.exit(r), e(v)) : u < c && v === 40 ? (t.consume(v), u++, b) : v === 41 ? (t.consume(v), u--, b) : v === null || v === 32 || v === 40 || Ir(v) ? n(v) : (t.consume(v), v === 92 ? w : b);
  }
  function w(v) {
    return v === 40 || v === 41 || v === 92 ? (t.consume(v), b) : b(v);
  }
}
function Go(t, e, n, r, i, s) {
  const o = this;
  let a = 0, l;
  return c;
  function c(d) {
    return t.enter(r), t.enter(i), t.consume(d), t.exit(i), t.enter(s), u;
  }
  function u(d) {
    return a > 999 || d === null || d === 91 || d === 93 && !l || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    d === 94 && !a && "_hiddenFootnoteSupport" in o.parser.constructs ? n(d) : d === 93 ? (t.exit(s), t.enter(i), t.consume(d), t.exit(i), t.exit(r), e) : M(d) ? (t.enter("lineEnding"), t.consume(d), t.exit("lineEnding"), u) : (t.enter("chunkString", {
      contentType: "string"
    }), h(d));
  }
  function h(d) {
    return d === null || d === 91 || d === 93 || M(d) || a++ > 999 ? (t.exit("chunkString"), u(d)) : (t.consume(d), l || (l = !Q(d)), d === 92 ? f : h);
  }
  function f(d) {
    return d === 91 || d === 92 || d === 93 ? (t.consume(d), a++, h) : h(d);
  }
}
function Ko(t, e, n, r, i, s) {
  let o;
  return a;
  function a(f) {
    return f === 34 || f === 39 || f === 40 ? (t.enter(r), t.enter(i), t.consume(f), t.exit(i), o = f === 40 ? 41 : f, l) : n(f);
  }
  function l(f) {
    return f === o ? (t.enter(i), t.consume(f), t.exit(i), t.exit(r), e) : (t.enter(s), c(f));
  }
  function c(f) {
    return f === o ? (t.exit(s), l(o)) : f === null ? n(f) : M(f) ? (t.enter("lineEnding"), t.consume(f), t.exit("lineEnding"), oe(t, c, "linePrefix")) : (t.enter("chunkString", {
      contentType: "string"
    }), u(f));
  }
  function u(f) {
    return f === o || f === null || M(f) ? (t.exit("chunkString"), c(f)) : (t.consume(f), f === 92 ? h : u);
  }
  function h(f) {
    return f === o || f === 92 ? (t.consume(f), u) : u(f);
  }
}
function Zt(t, e) {
  let n;
  return r;
  function r(i) {
    return M(i) ? (t.enter("lineEnding"), t.consume(i), t.exit("lineEnding"), n = !0, r) : Q(i) ? oe(t, r, n ? "linePrefix" : "lineSuffix")(i) : e(i);
  }
}
const Bd = {
  name: "definition",
  tokenize: Vd
}, qd = {
  partial: !0,
  tokenize: Hd
};
function Vd(t, e, n) {
  const r = this;
  let i;
  return s;
  function s(d) {
    return t.enter("definition"), o(d);
  }
  function o(d) {
    return Go.call(
      r,
      t,
      a,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(d);
  }
  function a(d) {
    return i = Ot(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)), d === 58 ? (t.enter("definitionMarker"), t.consume(d), t.exit("definitionMarker"), l) : n(d);
  }
  function l(d) {
    return Ee(d) ? Zt(t, c)(d) : c(d);
  }
  function c(d) {
    return Wo(
      t,
      u,
      // Note: we don’t need to reset the way `markdown-rs` does.
      n,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(d);
  }
  function u(d) {
    return t.attempt(qd, h, h)(d);
  }
  function h(d) {
    return Q(d) ? oe(t, f, "whitespace")(d) : f(d);
  }
  function f(d) {
    return d === null || M(d) ? (t.exit("definition"), r.parser.defined.push(i), e(d)) : n(d);
  }
}
function Hd(t, e, n) {
  return r;
  function r(a) {
    return Ee(a) ? Zt(t, i)(a) : n(a);
  }
  function i(a) {
    return Ko(t, s, n, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(a);
  }
  function s(a) {
    return Q(a) ? oe(t, o, "whitespace")(a) : o(a);
  }
  function o(a) {
    return a === null || M(a) ? e(a) : n(a);
  }
}
const Wd = {
  name: "hardBreakEscape",
  tokenize: Gd
};
function Gd(t, e, n) {
  return r;
  function r(s) {
    return t.enter("hardBreakEscape"), t.consume(s), i;
  }
  function i(s) {
    return M(s) ? (t.exit("hardBreakEscape"), e(s)) : n(s);
  }
}
const Kd = {
  name: "headingAtx",
  resolve: Jd,
  tokenize: Yd
};
function Jd(t, e) {
  let n = t.length - 2, r = 3, i, s;
  return t[r][1].type === "whitespace" && (r += 2), n - 2 > r && t[n][1].type === "whitespace" && (n -= 2), t[n][1].type === "atxHeadingSequence" && (r === n - 1 || n - 4 > r && t[n - 2][1].type === "whitespace") && (n -= r + 1 === n ? 2 : 4), n > r && (i = {
    type: "atxHeadingText",
    start: t[r][1].start,
    end: t[n][1].end
  }, s = {
    type: "chunkText",
    start: t[r][1].start,
    end: t[n][1].end,
    contentType: "text"
  }, qe(t, r, n - r + 1, [["enter", i, e], ["enter", s, e], ["exit", s, e], ["exit", i, e]])), t;
}
function Yd(t, e, n) {
  let r = 0;
  return i;
  function i(u) {
    return t.enter("atxHeading"), s(u);
  }
  function s(u) {
    return t.enter("atxHeadingSequence"), o(u);
  }
  function o(u) {
    return u === 35 && r++ < 6 ? (t.consume(u), o) : u === null || Ee(u) ? (t.exit("atxHeadingSequence"), a(u)) : n(u);
  }
  function a(u) {
    return u === 35 ? (t.enter("atxHeadingSequence"), l(u)) : u === null || M(u) ? (t.exit("atxHeading"), e(u)) : Q(u) ? oe(t, a, "whitespace")(u) : (t.enter("atxHeadingText"), c(u));
  }
  function l(u) {
    return u === 35 ? (t.consume(u), l) : (t.exit("atxHeadingSequence"), a(u));
  }
  function c(u) {
    return u === null || u === 35 || Ee(u) ? (t.exit("atxHeadingText"), a(u)) : (t.consume(u), c);
  }
}
const Xd = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], is = ["pre", "script", "style", "textarea"], Qd = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: tf,
  tokenize: nf
}, Zd = {
  partial: !0,
  tokenize: sf
}, ef = {
  partial: !0,
  tokenize: rf
};
function tf(t) {
  let e = t.length;
  for (; e-- && !(t[e][0] === "enter" && t[e][1].type === "htmlFlow"); )
    ;
  return e > 1 && t[e - 2][1].type === "linePrefix" && (t[e][1].start = t[e - 2][1].start, t[e + 1][1].start = t[e - 2][1].start, t.splice(e - 2, 2)), t;
}
function nf(t, e, n) {
  const r = this;
  let i, s, o, a, l;
  return c;
  function c(m) {
    return u(m);
  }
  function u(m) {
    return t.enter("htmlFlow"), t.enter("htmlFlowData"), t.consume(m), h;
  }
  function h(m) {
    return m === 33 ? (t.consume(m), f) : m === 47 ? (t.consume(m), s = !0, b) : m === 63 ? (t.consume(m), i = 3, r.interrupt ? e : g) : Be(m) ? (t.consume(m), o = String.fromCharCode(m), w) : n(m);
  }
  function f(m) {
    return m === 45 ? (t.consume(m), i = 2, d) : m === 91 ? (t.consume(m), i = 5, a = 0, y) : Be(m) ? (t.consume(m), i = 4, r.interrupt ? e : g) : n(m);
  }
  function d(m) {
    return m === 45 ? (t.consume(m), r.interrupt ? e : g) : n(m);
  }
  function y(m) {
    const Te = "CDATA[";
    return m === Te.charCodeAt(a++) ? (t.consume(m), a === Te.length ? r.interrupt ? e : T : y) : n(m);
  }
  function b(m) {
    return Be(m) ? (t.consume(m), o = String.fromCharCode(m), w) : n(m);
  }
  function w(m) {
    if (m === null || m === 47 || m === 62 || Ee(m)) {
      const Te = m === 47, Ve = o.toLowerCase();
      return !Te && !s && is.includes(Ve) ? (i = 1, r.interrupt ? e(m) : T(m)) : Xd.includes(o.toLowerCase()) ? (i = 6, Te ? (t.consume(m), v) : r.interrupt ? e(m) : T(m)) : (i = 7, r.interrupt && !r.parser.lazy[r.now().line] ? n(m) : s ? C(m) : k(m));
    }
    return m === 45 || Re(m) ? (t.consume(m), o += String.fromCharCode(m), w) : n(m);
  }
  function v(m) {
    return m === 62 ? (t.consume(m), r.interrupt ? e : T) : n(m);
  }
  function C(m) {
    return Q(m) ? (t.consume(m), C) : j(m);
  }
  function k(m) {
    return m === 47 ? (t.consume(m), j) : m === 58 || m === 95 || Be(m) ? (t.consume(m), I) : Q(m) ? (t.consume(m), k) : j(m);
  }
  function I(m) {
    return m === 45 || m === 46 || m === 58 || m === 95 || Re(m) ? (t.consume(m), I) : $(m);
  }
  function $(m) {
    return m === 61 ? (t.consume(m), _) : Q(m) ? (t.consume(m), $) : k(m);
  }
  function _(m) {
    return m === null || m === 60 || m === 61 || m === 62 || m === 96 ? n(m) : m === 34 || m === 39 ? (t.consume(m), l = m, D) : Q(m) ? (t.consume(m), _) : W(m);
  }
  function D(m) {
    return m === l ? (t.consume(m), l = null, F) : m === null || M(m) ? n(m) : (t.consume(m), D);
  }
  function W(m) {
    return m === null || m === 34 || m === 39 || m === 47 || m === 60 || m === 61 || m === 62 || m === 96 || Ee(m) ? $(m) : (t.consume(m), W);
  }
  function F(m) {
    return m === 47 || m === 62 || Q(m) ? k(m) : n(m);
  }
  function j(m) {
    return m === 62 ? (t.consume(m), O) : n(m);
  }
  function O(m) {
    return m === null || M(m) ? T(m) : Q(m) ? (t.consume(m), O) : n(m);
  }
  function T(m) {
    return m === 45 && i === 2 ? (t.consume(m), re) : m === 60 && i === 1 ? (t.consume(m), te) : m === 62 && i === 4 ? (t.consume(m), le) : m === 63 && i === 3 ? (t.consume(m), g) : m === 93 && i === 5 ? (t.consume(m), pe) : M(m) && (i === 6 || i === 7) ? (t.exit("htmlFlowData"), t.check(Zd, je, N)(m)) : m === null || M(m) ? (t.exit("htmlFlowData"), N(m)) : (t.consume(m), T);
  }
  function N(m) {
    return t.check(ef, z, je)(m);
  }
  function z(m) {
    return t.enter("lineEnding"), t.consume(m), t.exit("lineEnding"), L;
  }
  function L(m) {
    return m === null || M(m) ? N(m) : (t.enter("htmlFlowData"), T(m));
  }
  function re(m) {
    return m === 45 ? (t.consume(m), g) : T(m);
  }
  function te(m) {
    return m === 47 ? (t.consume(m), o = "", he) : T(m);
  }
  function he(m) {
    if (m === 62) {
      const Te = o.toLowerCase();
      return is.includes(Te) ? (t.consume(m), le) : T(m);
    }
    return Be(m) && o.length < 8 ? (t.consume(m), o += String.fromCharCode(m), he) : T(m);
  }
  function pe(m) {
    return m === 93 ? (t.consume(m), g) : T(m);
  }
  function g(m) {
    return m === 62 ? (t.consume(m), le) : m === 45 && i === 2 ? (t.consume(m), g) : T(m);
  }
  function le(m) {
    return m === null || M(m) ? (t.exit("htmlFlowData"), je(m)) : (t.consume(m), le);
  }
  function je(m) {
    return t.exit("htmlFlow"), e(m);
  }
}
function rf(t, e, n) {
  const r = this;
  return i;
  function i(o) {
    return M(o) ? (t.enter("lineEnding"), t.consume(o), t.exit("lineEnding"), s) : n(o);
  }
  function s(o) {
    return r.parser.lazy[r.now().line] ? n(o) : e(o);
  }
}
function sf(t, e, n) {
  return r;
  function r(i) {
    return t.enter("lineEnding"), t.consume(i), t.exit("lineEnding"), t.attempt($n, e, n);
  }
}
const of = {
  name: "htmlText",
  tokenize: af
};
function af(t, e, n) {
  const r = this;
  let i, s, o;
  return a;
  function a(g) {
    return t.enter("htmlText"), t.enter("htmlTextData"), t.consume(g), l;
  }
  function l(g) {
    return g === 33 ? (t.consume(g), c) : g === 47 ? (t.consume(g), $) : g === 63 ? (t.consume(g), k) : Be(g) ? (t.consume(g), W) : n(g);
  }
  function c(g) {
    return g === 45 ? (t.consume(g), u) : g === 91 ? (t.consume(g), s = 0, y) : Be(g) ? (t.consume(g), C) : n(g);
  }
  function u(g) {
    return g === 45 ? (t.consume(g), d) : n(g);
  }
  function h(g) {
    return g === null ? n(g) : g === 45 ? (t.consume(g), f) : M(g) ? (o = h, te(g)) : (t.consume(g), h);
  }
  function f(g) {
    return g === 45 ? (t.consume(g), d) : h(g);
  }
  function d(g) {
    return g === 62 ? re(g) : g === 45 ? f(g) : h(g);
  }
  function y(g) {
    const le = "CDATA[";
    return g === le.charCodeAt(s++) ? (t.consume(g), s === le.length ? b : y) : n(g);
  }
  function b(g) {
    return g === null ? n(g) : g === 93 ? (t.consume(g), w) : M(g) ? (o = b, te(g)) : (t.consume(g), b);
  }
  function w(g) {
    return g === 93 ? (t.consume(g), v) : b(g);
  }
  function v(g) {
    return g === 62 ? re(g) : g === 93 ? (t.consume(g), v) : b(g);
  }
  function C(g) {
    return g === null || g === 62 ? re(g) : M(g) ? (o = C, te(g)) : (t.consume(g), C);
  }
  function k(g) {
    return g === null ? n(g) : g === 63 ? (t.consume(g), I) : M(g) ? (o = k, te(g)) : (t.consume(g), k);
  }
  function I(g) {
    return g === 62 ? re(g) : k(g);
  }
  function $(g) {
    return Be(g) ? (t.consume(g), _) : n(g);
  }
  function _(g) {
    return g === 45 || Re(g) ? (t.consume(g), _) : D(g);
  }
  function D(g) {
    return M(g) ? (o = D, te(g)) : Q(g) ? (t.consume(g), D) : re(g);
  }
  function W(g) {
    return g === 45 || Re(g) ? (t.consume(g), W) : g === 47 || g === 62 || Ee(g) ? F(g) : n(g);
  }
  function F(g) {
    return g === 47 ? (t.consume(g), re) : g === 58 || g === 95 || Be(g) ? (t.consume(g), j) : M(g) ? (o = F, te(g)) : Q(g) ? (t.consume(g), F) : re(g);
  }
  function j(g) {
    return g === 45 || g === 46 || g === 58 || g === 95 || Re(g) ? (t.consume(g), j) : O(g);
  }
  function O(g) {
    return g === 61 ? (t.consume(g), T) : M(g) ? (o = O, te(g)) : Q(g) ? (t.consume(g), O) : F(g);
  }
  function T(g) {
    return g === null || g === 60 || g === 61 || g === 62 || g === 96 ? n(g) : g === 34 || g === 39 ? (t.consume(g), i = g, N) : M(g) ? (o = T, te(g)) : Q(g) ? (t.consume(g), T) : (t.consume(g), z);
  }
  function N(g) {
    return g === i ? (t.consume(g), i = void 0, L) : g === null ? n(g) : M(g) ? (o = N, te(g)) : (t.consume(g), N);
  }
  function z(g) {
    return g === null || g === 34 || g === 39 || g === 60 || g === 61 || g === 96 ? n(g) : g === 47 || g === 62 || Ee(g) ? F(g) : (t.consume(g), z);
  }
  function L(g) {
    return g === 47 || g === 62 || Ee(g) ? F(g) : n(g);
  }
  function re(g) {
    return g === 62 ? (t.consume(g), t.exit("htmlTextData"), t.exit("htmlText"), e) : n(g);
  }
  function te(g) {
    return t.exit("htmlTextData"), t.enter("lineEnding"), t.consume(g), t.exit("lineEnding"), he;
  }
  function he(g) {
    return Q(g) ? oe(t, pe, "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(g) : pe(g);
  }
  function pe(g) {
    return t.enter("htmlTextData"), o(g);
  }
}
const Zr = {
  name: "labelEnd",
  resolveAll: hf,
  resolveTo: df,
  tokenize: ff
}, lf = {
  tokenize: pf
}, uf = {
  tokenize: gf
}, cf = {
  tokenize: mf
};
function hf(t) {
  let e = -1;
  const n = [];
  for (; ++e < t.length; ) {
    const r = t[e][1];
    if (n.push(t[e]), r.type === "labelImage" || r.type === "labelLink" || r.type === "labelEnd") {
      const i = r.type === "labelImage" ? 4 : 2;
      r.type = "data", e += i;
    }
  }
  return t.length !== n.length && qe(t, 0, t.length, n), t;
}
function df(t, e) {
  let n = t.length, r = 0, i, s, o, a;
  for (; n--; )
    if (i = t[n][1], s) {
      if (i.type === "link" || i.type === "labelLink" && i._inactive)
        break;
      t[n][0] === "enter" && i.type === "labelLink" && (i._inactive = !0);
    } else if (o) {
      if (t[n][0] === "enter" && (i.type === "labelImage" || i.type === "labelLink") && !i._balanced && (s = n, i.type !== "labelLink")) {
        r = 2;
        break;
      }
    } else i.type === "labelEnd" && (o = n);
  const l = {
    type: t[s][1].type === "labelLink" ? "link" : "image",
    start: {
      ...t[s][1].start
    },
    end: {
      ...t[t.length - 1][1].end
    }
  }, c = {
    type: "label",
    start: {
      ...t[s][1].start
    },
    end: {
      ...t[o][1].end
    }
  }, u = {
    type: "labelText",
    start: {
      ...t[s + r + 2][1].end
    },
    end: {
      ...t[o - 2][1].start
    }
  };
  return a = [["enter", l, e], ["enter", c, e]], a = $e(a, t.slice(s + 1, s + r + 3)), a = $e(a, [["enter", u, e]]), a = $e(a, Qr(e.parser.constructs.insideSpan.null, t.slice(s + r + 4, o - 3), e)), a = $e(a, [["exit", u, e], t[o - 2], t[o - 1], ["exit", c, e]]), a = $e(a, t.slice(o + 1)), a = $e(a, [["exit", l, e]]), qe(t, s, t.length, a), t;
}
function ff(t, e, n) {
  const r = this;
  let i = r.events.length, s, o;
  for (; i--; )
    if ((r.events[i][1].type === "labelImage" || r.events[i][1].type === "labelLink") && !r.events[i][1]._balanced) {
      s = r.events[i][1];
      break;
    }
  return a;
  function a(f) {
    return s ? s._inactive ? h(f) : (o = r.parser.defined.includes(Ot(r.sliceSerialize({
      start: s.end,
      end: r.now()
    }))), t.enter("labelEnd"), t.enter("labelMarker"), t.consume(f), t.exit("labelMarker"), t.exit("labelEnd"), l) : n(f);
  }
  function l(f) {
    return f === 40 ? t.attempt(lf, u, o ? u : h)(f) : f === 91 ? t.attempt(uf, u, o ? c : h)(f) : o ? u(f) : h(f);
  }
  function c(f) {
    return t.attempt(cf, u, h)(f);
  }
  function u(f) {
    return e(f);
  }
  function h(f) {
    return s._balanced = !0, n(f);
  }
}
function pf(t, e, n) {
  return r;
  function r(h) {
    return t.enter("resource"), t.enter("resourceMarker"), t.consume(h), t.exit("resourceMarker"), i;
  }
  function i(h) {
    return Ee(h) ? Zt(t, s)(h) : s(h);
  }
  function s(h) {
    return h === 41 ? u(h) : Wo(t, o, a, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(h);
  }
  function o(h) {
    return Ee(h) ? Zt(t, l)(h) : u(h);
  }
  function a(h) {
    return n(h);
  }
  function l(h) {
    return h === 34 || h === 39 || h === 40 ? Ko(t, c, n, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(h) : u(h);
  }
  function c(h) {
    return Ee(h) ? Zt(t, u)(h) : u(h);
  }
  function u(h) {
    return h === 41 ? (t.enter("resourceMarker"), t.consume(h), t.exit("resourceMarker"), t.exit("resource"), e) : n(h);
  }
}
function gf(t, e, n) {
  const r = this;
  return i;
  function i(a) {
    return Go.call(r, t, s, o, "reference", "referenceMarker", "referenceString")(a);
  }
  function s(a) {
    return r.parser.defined.includes(Ot(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))) ? e(a) : n(a);
  }
  function o(a) {
    return n(a);
  }
}
function mf(t, e, n) {
  return r;
  function r(s) {
    return t.enter("reference"), t.enter("referenceMarker"), t.consume(s), t.exit("referenceMarker"), i;
  }
  function i(s) {
    return s === 93 ? (t.enter("referenceMarker"), t.consume(s), t.exit("referenceMarker"), t.exit("reference"), e) : n(s);
  }
}
const yf = {
  name: "labelStartImage",
  resolveAll: Zr.resolveAll,
  tokenize: bf
};
function bf(t, e, n) {
  const r = this;
  return i;
  function i(a) {
    return t.enter("labelImage"), t.enter("labelImageMarker"), t.consume(a), t.exit("labelImageMarker"), s;
  }
  function s(a) {
    return a === 91 ? (t.enter("labelMarker"), t.consume(a), t.exit("labelMarker"), t.exit("labelImage"), o) : n(a);
  }
  function o(a) {
    return a === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(a) : e(a);
  }
}
const vf = {
  name: "labelStartLink",
  resolveAll: Zr.resolveAll,
  tokenize: wf
};
function wf(t, e, n) {
  const r = this;
  return i;
  function i(o) {
    return t.enter("labelLink"), t.enter("labelMarker"), t.consume(o), t.exit("labelMarker"), t.exit("labelLink"), s;
  }
  function s(o) {
    return o === 94 && "_hiddenFootnoteSupport" in r.parser.constructs ? n(o) : e(o);
  }
}
const ir = {
  name: "lineEnding",
  tokenize: _f
};
function _f(t, e) {
  return n;
  function n(r) {
    return t.enter("lineEnding"), t.consume(r), t.exit("lineEnding"), oe(t, e, "linePrefix");
  }
}
const wn = {
  name: "thematicBreak",
  tokenize: xf
};
function xf(t, e, n) {
  let r = 0, i;
  return s;
  function s(c) {
    return t.enter("thematicBreak"), o(c);
  }
  function o(c) {
    return i = c, a(c);
  }
  function a(c) {
    return c === i ? (t.enter("thematicBreakSequence"), l(c)) : r >= 3 && (c === null || M(c)) ? (t.exit("thematicBreak"), e(c)) : n(c);
  }
  function l(c) {
    return c === i ? (t.consume(c), r++, l) : (t.exit("thematicBreakSequence"), Q(c) ? oe(t, a, "whitespace")(c) : a(c));
  }
}
const ke = {
  continuation: {
    tokenize: Cf
  },
  exit: Af,
  name: "list",
  tokenize: Ef
}, kf = {
  partial: !0,
  tokenize: Pf
}, Sf = {
  partial: !0,
  tokenize: Tf
};
function Ef(t, e, n) {
  const r = this, i = r.events[r.events.length - 1];
  let s = i && i[1].type === "linePrefix" ? i[2].sliceSerialize(i[1], !0).length : 0, o = 0;
  return a;
  function a(d) {
    const y = r.containerState.type || (d === 42 || d === 43 || d === 45 ? "listUnordered" : "listOrdered");
    if (y === "listUnordered" ? !r.containerState.marker || d === r.containerState.marker : Or(d)) {
      if (r.containerState.type || (r.containerState.type = y, t.enter(y, {
        _container: !0
      })), y === "listUnordered")
        return t.enter("listItemPrefix"), d === 42 || d === 45 ? t.check(wn, n, c)(d) : c(d);
      if (!r.interrupt || d === 49)
        return t.enter("listItemPrefix"), t.enter("listItemValue"), l(d);
    }
    return n(d);
  }
  function l(d) {
    return Or(d) && ++o < 10 ? (t.consume(d), l) : (!r.interrupt || o < 2) && (r.containerState.marker ? d === r.containerState.marker : d === 41 || d === 46) ? (t.exit("listItemValue"), c(d)) : n(d);
  }
  function c(d) {
    return t.enter("listItemMarker"), t.consume(d), t.exit("listItemMarker"), r.containerState.marker = r.containerState.marker || d, t.check(
      $n,
      // Can’t be empty when interrupting.
      r.interrupt ? n : u,
      t.attempt(kf, f, h)
    );
  }
  function u(d) {
    return r.containerState.initialBlankLine = !0, s++, f(d);
  }
  function h(d) {
    return Q(d) ? (t.enter("listItemPrefixWhitespace"), t.consume(d), t.exit("listItemPrefixWhitespace"), f) : n(d);
  }
  function f(d) {
    return r.containerState.size = s + r.sliceSerialize(t.exit("listItemPrefix"), !0).length, e(d);
  }
}
function Cf(t, e, n) {
  const r = this;
  return r.containerState._closeFlow = void 0, t.check($n, i, s);
  function i(a) {
    return r.containerState.furtherBlankLines = r.containerState.furtherBlankLines || r.containerState.initialBlankLine, oe(t, e, "listItemIndent", r.containerState.size + 1)(a);
  }
  function s(a) {
    return r.containerState.furtherBlankLines || !Q(a) ? (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, o(a)) : (r.containerState.furtherBlankLines = void 0, r.containerState.initialBlankLine = void 0, t.attempt(Sf, e, o)(a));
  }
  function o(a) {
    return r.containerState._closeFlow = !0, r.interrupt = void 0, oe(t, t.attempt(ke, e, n), "linePrefix", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(a);
  }
}
function Tf(t, e, n) {
  const r = this;
  return oe(t, i, "listItemIndent", r.containerState.size + 1);
  function i(s) {
    const o = r.events[r.events.length - 1];
    return o && o[1].type === "listItemIndent" && o[2].sliceSerialize(o[1], !0).length === r.containerState.size ? e(s) : n(s);
  }
}
function Af(t) {
  t.exit(this.containerState.type);
}
function Pf(t, e, n) {
  const r = this;
  return oe(t, i, "listItemPrefixWhitespace", r.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function i(s) {
    const o = r.events[r.events.length - 1];
    return !Q(s) && o && o[1].type === "listItemPrefixWhitespace" ? e(s) : n(s);
  }
}
const ss = {
  name: "setextUnderline",
  resolveTo: If,
  tokenize: Of
};
function If(t, e) {
  let n = t.length, r, i, s;
  for (; n--; )
    if (t[n][0] === "enter") {
      if (t[n][1].type === "content") {
        r = n;
        break;
      }
      t[n][1].type === "paragraph" && (i = n);
    } else
      t[n][1].type === "content" && t.splice(n, 1), !s && t[n][1].type === "definition" && (s = n);
  const o = {
    type: "setextHeading",
    start: {
      ...t[r][1].start
    },
    end: {
      ...t[t.length - 1][1].end
    }
  };
  return t[i][1].type = "setextHeadingText", s ? (t.splice(i, 0, ["enter", o, e]), t.splice(s + 1, 0, ["exit", t[r][1], e]), t[r][1].end = {
    ...t[s][1].end
  }) : t[r][1] = o, t.push(["exit", o, e]), t;
}
function Of(t, e, n) {
  const r = this;
  let i;
  return s;
  function s(c) {
    let u = r.events.length, h;
    for (; u--; )
      if (r.events[u][1].type !== "lineEnding" && r.events[u][1].type !== "linePrefix" && r.events[u][1].type !== "content") {
        h = r.events[u][1].type === "paragraph";
        break;
      }
    return !r.parser.lazy[r.now().line] && (r.interrupt || h) ? (t.enter("setextHeadingLine"), i = c, o(c)) : n(c);
  }
  function o(c) {
    return t.enter("setextHeadingLineSequence"), a(c);
  }
  function a(c) {
    return c === i ? (t.consume(c), a) : (t.exit("setextHeadingLineSequence"), Q(c) ? oe(t, l, "lineSuffix")(c) : l(c));
  }
  function l(c) {
    return c === null || M(c) ? (t.exit("setextHeadingLine"), e(c)) : n(c);
  }
}
const Rf = {
  tokenize: jf
};
function jf(t) {
  const e = this, n = t.attempt(
    // Try to parse a blank line.
    $n,
    r,
    // Try to parse initial flow (essentially, only code).
    t.attempt(this.parser.constructs.flowInitial, i, oe(t, t.attempt(this.parser.constructs.flow, i, t.attempt(Nd, i)), "linePrefix"))
  );
  return n;
  function r(s) {
    if (s === null) {
      t.consume(s);
      return;
    }
    return t.enter("lineEndingBlank"), t.consume(s), t.exit("lineEndingBlank"), e.currentConstruct = void 0, n;
  }
  function i(s) {
    if (s === null) {
      t.consume(s);
      return;
    }
    return t.enter("lineEnding"), t.consume(s), t.exit("lineEnding"), e.currentConstruct = void 0, n;
  }
}
const Lf = {
  resolveAll: Yo()
}, $f = Jo("string"), Df = Jo("text");
function Jo(t) {
  return {
    resolveAll: Yo(t === "text" ? Nf : void 0),
    tokenize: e
  };
  function e(n) {
    const r = this, i = this.parser.constructs[t], s = n.attempt(i, o, a);
    return o;
    function o(u) {
      return c(u) ? s(u) : a(u);
    }
    function a(u) {
      if (u === null) {
        n.consume(u);
        return;
      }
      return n.enter("data"), n.consume(u), l;
    }
    function l(u) {
      return c(u) ? (n.exit("data"), s(u)) : (n.consume(u), l);
    }
    function c(u) {
      if (u === null)
        return !0;
      const h = i[u];
      let f = -1;
      if (h)
        for (; ++f < h.length; ) {
          const d = h[f];
          if (!d.previous || d.previous.call(r, r.previous))
            return !0;
        }
      return !1;
    }
  }
}
function Yo(t) {
  return e;
  function e(n, r) {
    let i = -1, s;
    for (; ++i <= n.length; )
      s === void 0 ? n[i] && n[i][1].type === "data" && (s = i, i++) : (!n[i] || n[i][1].type !== "data") && (i !== s + 2 && (n[s][1].end = n[i - 1][1].end, n.splice(s + 2, i - s - 2), i = s + 2), s = void 0);
    return t ? t(n, r) : n;
  }
}
function Nf(t, e) {
  let n = 0;
  for (; ++n <= t.length; )
    if ((n === t.length || t[n][1].type === "lineEnding") && t[n - 1][1].type === "data") {
      const r = t[n - 1][1], i = e.sliceStream(r);
      let s = i.length, o = -1, a = 0, l;
      for (; s--; ) {
        const c = i[s];
        if (typeof c == "string") {
          for (o = c.length; c.charCodeAt(o - 1) === 32; )
            a++, o--;
          if (o) break;
          o = -1;
        } else if (c === -2)
          l = !0, a++;
        else if (c !== -1) {
          s++;
          break;
        }
      }
      if (e._contentTypeTextTrailing && n === t.length && (a = 0), a) {
        const c = {
          type: n === t.length || l || a < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: s ? o : r.start._bufferIndex + o,
            _index: r.start._index + s,
            line: r.end.line,
            column: r.end.column - a,
            offset: r.end.offset - a
          },
          end: {
            ...r.end
          }
        };
        r.end = {
          ...c.start
        }, r.start.offset === r.end.offset ? Object.assign(r, c) : (t.splice(n, 0, ["enter", c, e], ["exit", c, e]), n += 2);
      }
      n++;
    }
  return t;
}
const zf = {
  42: ke,
  43: ke,
  45: ke,
  48: ke,
  49: ke,
  50: ke,
  51: ke,
  52: ke,
  53: ke,
  54: ke,
  55: ke,
  56: ke,
  57: ke,
  62: Bo
}, Mf = {
  91: Bd
}, Ff = {
  [-2]: rr,
  [-1]: rr,
  32: rr
}, Uf = {
  35: Kd,
  42: wn,
  45: [ss, wn],
  60: Qd,
  61: ss,
  95: wn,
  96: rs,
  126: rs
}, Bf = {
  38: Vo,
  92: qo
}, qf = {
  [-5]: ir,
  [-4]: ir,
  [-3]: ir,
  33: yf,
  38: Vo,
  42: Rr,
  60: [bd, of],
  91: vf,
  92: [Wd, qo],
  93: Zr,
  95: Rr,
  96: Od
}, Vf = {
  null: [Rr, Lf]
}, Hf = {
  null: [42, 95]
}, Wf = {
  null: []
}, Gf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: Hf,
  contentInitial: Mf,
  disable: Wf,
  document: zf,
  flow: Uf,
  flowInitial: Ff,
  insideSpan: Vf,
  string: Bf,
  text: qf
}, Symbol.toStringTag, { value: "Module" }));
function Kf(t, e, n) {
  let r = {
    _bufferIndex: -1,
    _index: 0,
    line: n && n.line || 1,
    column: n && n.column || 1,
    offset: n && n.offset || 0
  };
  const i = {}, s = [];
  let o = [], a = [];
  const l = {
    attempt: D($),
    check: D(_),
    consume: C,
    enter: k,
    exit: I,
    interrupt: D(_, {
      interrupt: !0
    })
  }, c = {
    code: null,
    containerState: {},
    defineSkip: b,
    events: [],
    now: y,
    parser: t,
    previous: null,
    sliceSerialize: f,
    sliceStream: d,
    write: h
  };
  let u = e.tokenize.call(c, l);
  return e.resolveAll && s.push(e), c;
  function h(O) {
    return o = $e(o, O), w(), o[o.length - 1] !== null ? [] : (W(e, 0), c.events = Qr(s, c.events, c), c.events);
  }
  function f(O, T) {
    return Yf(d(O), T);
  }
  function d(O) {
    return Jf(o, O);
  }
  function y() {
    const {
      _bufferIndex: O,
      _index: T,
      line: N,
      column: z,
      offset: L
    } = r;
    return {
      _bufferIndex: O,
      _index: T,
      line: N,
      column: z,
      offset: L
    };
  }
  function b(O) {
    i[O.line] = O.column, j();
  }
  function w() {
    let O;
    for (; r._index < o.length; ) {
      const T = o[r._index];
      if (typeof T == "string")
        for (O = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0); r._index === O && r._bufferIndex < T.length; )
          v(T.charCodeAt(r._bufferIndex));
      else
        v(T);
    }
  }
  function v(O) {
    u = u(O);
  }
  function C(O) {
    M(O) ? (r.line++, r.column = 1, r.offset += O === -3 ? 2 : 1, j()) : O !== -1 && (r.column++, r.offset++), r._bufferIndex < 0 ? r._index++ : (r._bufferIndex++, r._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    o[r._index].length && (r._bufferIndex = -1, r._index++)), c.previous = O;
  }
  function k(O, T) {
    const N = T || {};
    return N.type = O, N.start = y(), c.events.push(["enter", N, c]), a.push(N), N;
  }
  function I(O) {
    const T = a.pop();
    return T.end = y(), c.events.push(["exit", T, c]), T;
  }
  function $(O, T) {
    W(O, T.from);
  }
  function _(O, T) {
    T.restore();
  }
  function D(O, T) {
    return N;
    function N(z, L, re) {
      let te, he, pe, g;
      return Array.isArray(z) ? (
        /* c8 ignore next 1 */
        je(z)
      ) : "tokenize" in z ? (
        // Looks like a construct.
        je([
          /** @type {Construct} */
          z
        ])
      ) : le(z);
      function le(ue) {
        return He;
        function He(Ae) {
          const Fe = Ae !== null && ue[Ae], De = Ae !== null && ue.null, vt = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(Fe) ? Fe : Fe ? [Fe] : [],
            ...Array.isArray(De) ? De : De ? [De] : []
          ];
          return je(vt)(Ae);
        }
      }
      function je(ue) {
        return te = ue, he = 0, ue.length === 0 ? re : m(ue[he]);
      }
      function m(ue) {
        return He;
        function He(Ae) {
          return g = F(), pe = ue, ue.partial || (c.currentConstruct = ue), ue.name && c.parser.constructs.disable.null.includes(ue.name) ? Ve() : ue.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            T ? Object.assign(Object.create(c), T) : c,
            l,
            Te,
            Ve
          )(Ae);
        }
      }
      function Te(ue) {
        return O(pe, g), L;
      }
      function Ve(ue) {
        return g.restore(), ++he < te.length ? m(te[he]) : re;
      }
    }
  }
  function W(O, T) {
    O.resolveAll && !s.includes(O) && s.push(O), O.resolve && qe(c.events, T, c.events.length - T, O.resolve(c.events.slice(T), c)), O.resolveTo && (c.events = O.resolveTo(c.events, c));
  }
  function F() {
    const O = y(), T = c.previous, N = c.currentConstruct, z = c.events.length, L = Array.from(a);
    return {
      from: z,
      restore: re
    };
    function re() {
      r = O, c.previous = T, c.currentConstruct = N, c.events.length = z, a = L, j();
    }
  }
  function j() {
    r.line in i && r.column < 2 && (r.column = i[r.line], r.offset += i[r.line] - 1);
  }
}
function Jf(t, e) {
  const n = e.start._index, r = e.start._bufferIndex, i = e.end._index, s = e.end._bufferIndex;
  let o;
  if (n === i)
    o = [t[n].slice(r, s)];
  else {
    if (o = t.slice(n, i), r > -1) {
      const a = o[0];
      typeof a == "string" ? o[0] = a.slice(r) : o.shift();
    }
    s > 0 && o.push(t[i].slice(0, s));
  }
  return o;
}
function Yf(t, e) {
  let n = -1;
  const r = [];
  let i;
  for (; ++n < t.length; ) {
    const s = t[n];
    let o;
    if (typeof s == "string")
      o = s;
    else switch (s) {
      case -5: {
        o = "\r";
        break;
      }
      case -4: {
        o = `
`;
        break;
      }
      case -3: {
        o = `\r
`;
        break;
      }
      case -2: {
        o = e ? " " : "	";
        break;
      }
      case -1: {
        if (!e && i) continue;
        o = " ";
        break;
      }
      default:
        o = String.fromCharCode(s);
    }
    i = s === -2, r.push(o);
  }
  return r.join("");
}
function Xf(t) {
  const r = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      rd([Gf, ...(t || {}).extensions || []])
    ),
    content: i(hd),
    defined: [],
    document: i(fd),
    flow: i(Rf),
    lazy: {},
    string: i($f),
    text: i(Df)
  };
  return r;
  function i(s) {
    return o;
    function o(a) {
      return Kf(r, s, a);
    }
  }
}
function Qf(t) {
  for (; !Ho(t); )
    ;
  return t;
}
const os = /[\0\t\n\r]/g;
function Zf() {
  let t = 1, e = "", n = !0, r;
  return i;
  function i(s, o, a) {
    const l = [];
    let c, u, h, f, d;
    for (s = e + (typeof s == "string" ? s.toString() : new TextDecoder(o || void 0).decode(s)), h = 0, e = "", n && (s.charCodeAt(0) === 65279 && h++, n = void 0); h < s.length; ) {
      if (os.lastIndex = h, c = os.exec(s), f = c && c.index !== void 0 ? c.index : s.length, d = s.charCodeAt(f), !c) {
        e = s.slice(h);
        break;
      }
      if (d === 10 && h === f && r)
        l.push(-3), r = void 0;
      else
        switch (r && (l.push(-5), r = void 0), h < f && (l.push(s.slice(h, f)), t += f - h), d) {
          case 0: {
            l.push(65533), t++;
            break;
          }
          case 9: {
            for (u = Math.ceil(t / 4) * 4, l.push(-2); t++ < u; ) l.push(-1);
            break;
          }
          case 10: {
            l.push(-4), t = 1;
            break;
          }
          default:
            r = !0, t = 1;
        }
      h = f + 1;
    }
    return a && (r && l.push(-5), e && l.push(e), l.push(null)), l;
  }
}
const ep = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function tp(t) {
  return t.replace(ep, np);
}
function np(t, e, n) {
  if (e)
    return e;
  if (n.charCodeAt(0) === 35) {
    const i = n.charCodeAt(1), s = i === 120 || i === 88;
    return Uo(n.slice(s ? 2 : 1), s ? 16 : 10);
  }
  return Xr(n) || t;
}
const Xo = {}.hasOwnProperty;
function rp(t, e, n) {
  return typeof e != "string" && (n = e, e = void 0), ip(n)(Qf(Xf(n).document().write(Zf()(t, e, !0))));
}
function ip(t) {
  const e = {
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: s(at),
      autolinkProtocol: F,
      autolinkEmail: F,
      atxHeading: s(ot),
      blockQuote: s(De),
      characterEscape: F,
      characterReference: F,
      codeFenced: s(vt),
      codeFencedFenceInfo: o,
      codeFencedFenceMeta: o,
      codeIndented: s(vt, o),
      codeText: s(ln, o),
      codeTextData: F,
      data: F,
      codeFlowValue: F,
      definition: s(zn),
      definitionDestinationString: o,
      definitionLabelString: o,
      definitionTitleString: o,
      emphasis: s(Mn),
      hardBreakEscape: s(Ye),
      hardBreakTrailing: s(Ye),
      htmlFlow: s(zt, o),
      htmlFlowData: F,
      htmlText: s(zt, o),
      htmlTextData: F,
      image: s(un),
      label: o,
      link: s(at),
      listItem: s(Fn),
      listItemValue: f,
      listOrdered: s(cn, h),
      listUnordered: s(cn),
      paragraph: s(Mt),
      reference: m,
      referenceString: o,
      resourceDestinationString: o,
      resourceTitleString: o,
      setextHeading: s(ot),
      strong: s(Un),
      thematicBreak: s(hn)
    },
    exit: {
      atxHeading: l(),
      atxHeadingSequence: $,
      autolink: l(),
      autolinkEmail: Fe,
      autolinkProtocol: Ae,
      blockQuote: l(),
      characterEscapeValue: j,
      characterReferenceMarkerHexadecimal: Ve,
      characterReferenceMarkerNumeric: Ve,
      characterReferenceValue: ue,
      characterReference: He,
      codeFenced: l(w),
      codeFencedFence: b,
      codeFencedFenceInfo: d,
      codeFencedFenceMeta: y,
      codeFlowValue: j,
      codeIndented: l(v),
      codeText: l(L),
      codeTextData: j,
      data: j,
      definition: l(),
      definitionDestinationString: I,
      definitionLabelString: C,
      definitionTitleString: k,
      emphasis: l(),
      hardBreakEscape: l(T),
      hardBreakTrailing: l(T),
      htmlFlow: l(N),
      htmlFlowData: j,
      htmlText: l(z),
      htmlTextData: j,
      image: l(te),
      label: pe,
      labelText: he,
      lineEnding: O,
      link: l(re),
      listItem: l(),
      listOrdered: l(),
      listUnordered: l(),
      paragraph: l(),
      referenceString: Te,
      resourceDestinationString: g,
      resourceTitleString: le,
      resource: je,
      setextHeading: l(W),
      setextHeadingLineSequence: D,
      setextHeadingText: _,
      strong: l(),
      thematicBreak: l()
    }
  };
  Qo(e, (t || {}).mdastExtensions || []);
  const n = {};
  return r;
  function r(x) {
    let A = {
      type: "root",
      children: []
    };
    const B = {
      stack: [A],
      tokenStack: [],
      config: e,
      enter: a,
      exit: c,
      buffer: o,
      resume: u,
      data: n
    }, K = [];
    let Z = -1;
    for (; ++Z < x.length; )
      if (x[Z][1].type === "listOrdered" || x[Z][1].type === "listUnordered")
        if (x[Z][0] === "enter")
          K.push(Z);
        else {
          const Pe = K.pop();
          Z = i(x, Pe, Z);
        }
    for (Z = -1; ++Z < x.length; ) {
      const Pe = e[x[Z][0]];
      Xo.call(Pe, x[Z][1].type) && Pe[x[Z][1].type].call(Object.assign({
        sliceSerialize: x[Z][2].sliceSerialize
      }, B), x[Z][1]);
    }
    if (B.tokenStack.length > 0) {
      const Pe = B.tokenStack[B.tokenStack.length - 1];
      (Pe[1] || as).call(B, void 0, Pe[0]);
    }
    for (A.position = {
      start: et(x.length > 0 ? x[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: et(x.length > 0 ? x[x.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, Z = -1; ++Z < e.transforms.length; )
      A = e.transforms[Z](A) || A;
    return A;
  }
  function i(x, A, B) {
    let K = A - 1, Z = -1, Pe = !1, We, Ne, lt, ut;
    for (; ++K <= B; ) {
      const ve = x[K];
      switch (ve[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          ve[0] === "enter" ? Z++ : Z--, ut = void 0;
          break;
        }
        case "lineEndingBlank": {
          ve[0] === "enter" && (We && !ut && !Z && !lt && (lt = K), ut = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          ut = void 0;
      }
      if (!Z && ve[0] === "enter" && ve[1].type === "listItemPrefix" || Z === -1 && ve[0] === "exit" && (ve[1].type === "listUnordered" || ve[1].type === "listOrdered")) {
        if (We) {
          let Xe = K;
          for (Ne = void 0; Xe--; ) {
            const Ie = x[Xe];
            if (Ie[1].type === "lineEnding" || Ie[1].type === "lineEndingBlank") {
              if (Ie[0] === "exit") continue;
              Ne && (x[Ne][1].type = "lineEndingBlank", Pe = !0), Ie[1].type = "lineEnding", Ne = Xe;
            } else if (!(Ie[1].type === "linePrefix" || Ie[1].type === "blockQuotePrefix" || Ie[1].type === "blockQuotePrefixWhitespace" || Ie[1].type === "blockQuoteMarker" || Ie[1].type === "listItemIndent")) break;
          }
          lt && (!Ne || lt < Ne) && (We._spread = !0), We.end = Object.assign({}, Ne ? x[Ne][1].start : ve[1].end), x.splice(Ne || K, 0, ["exit", We, ve[2]]), K++, B++;
        }
        if (ve[1].type === "listItemPrefix") {
          const Xe = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, ve[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          We = Xe, x.splice(K, 0, ["enter", Xe, ve[2]]), K++, B++, lt = void 0, ut = !0;
        }
      }
    }
    return x[A][1]._spread = Pe, B;
  }
  function s(x, A) {
    return B;
    function B(K) {
      a.call(this, x(K), K), A && A.call(this, K);
    }
  }
  function o() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function a(x, A, B) {
    this.stack[this.stack.length - 1].children.push(x), this.stack.push(x), this.tokenStack.push([A, B || void 0]), x.position = {
      start: et(A.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function l(x) {
    return A;
    function A(B) {
      x && x.call(this, B), c.call(this, B);
    }
  }
  function c(x, A) {
    const B = this.stack.pop(), K = this.tokenStack.pop();
    if (K)
      K[0].type !== x.type && (A ? A.call(this, x, K[0]) : (K[1] || as).call(this, x, K[0]));
    else throw new Error("Cannot close `" + x.type + "` (" + Qt({
      start: x.start,
      end: x.end
    }) + "): it’s not open");
    B.position.end = et(x.end);
  }
  function u() {
    return td(this.stack.pop());
  }
  function h() {
    this.data.expectingFirstListItemValue = !0;
  }
  function f(x) {
    if (this.data.expectingFirstListItemValue) {
      const A = this.stack[this.stack.length - 2];
      A.start = Number.parseInt(this.sliceSerialize(x), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function d() {
    const x = this.resume(), A = this.stack[this.stack.length - 1];
    A.lang = x;
  }
  function y() {
    const x = this.resume(), A = this.stack[this.stack.length - 1];
    A.meta = x;
  }
  function b() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function w() {
    const x = this.resume(), A = this.stack[this.stack.length - 1];
    A.value = x.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function v() {
    const x = this.resume(), A = this.stack[this.stack.length - 1];
    A.value = x.replace(/(\r?\n|\r)$/g, "");
  }
  function C(x) {
    const A = this.resume(), B = this.stack[this.stack.length - 1];
    B.label = A, B.identifier = Ot(this.sliceSerialize(x)).toLowerCase();
  }
  function k() {
    const x = this.resume(), A = this.stack[this.stack.length - 1];
    A.title = x;
  }
  function I() {
    const x = this.resume(), A = this.stack[this.stack.length - 1];
    A.url = x;
  }
  function $(x) {
    const A = this.stack[this.stack.length - 1];
    if (!A.depth) {
      const B = this.sliceSerialize(x).length;
      A.depth = B;
    }
  }
  function _() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function D(x) {
    const A = this.stack[this.stack.length - 1];
    A.depth = this.sliceSerialize(x).codePointAt(0) === 61 ? 1 : 2;
  }
  function W() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function F(x) {
    const B = this.stack[this.stack.length - 1].children;
    let K = B[B.length - 1];
    (!K || K.type !== "text") && (K = Bn(), K.position = {
      start: et(x.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, B.push(K)), this.stack.push(K);
  }
  function j(x) {
    const A = this.stack.pop();
    A.value += this.sliceSerialize(x), A.position.end = et(x.end);
  }
  function O(x) {
    const A = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const B = A.children[A.children.length - 1];
      B.position.end = et(x.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && e.canContainEols.includes(A.type) && (F.call(this, x), j.call(this, x));
  }
  function T() {
    this.data.atHardBreak = !0;
  }
  function N() {
    const x = this.resume(), A = this.stack[this.stack.length - 1];
    A.value = x;
  }
  function z() {
    const x = this.resume(), A = this.stack[this.stack.length - 1];
    A.value = x;
  }
  function L() {
    const x = this.resume(), A = this.stack[this.stack.length - 1];
    A.value = x;
  }
  function re() {
    const x = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const A = this.data.referenceType || "shortcut";
      x.type += "Reference", x.referenceType = A, delete x.url, delete x.title;
    } else
      delete x.identifier, delete x.label;
    this.data.referenceType = void 0;
  }
  function te() {
    const x = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const A = this.data.referenceType || "shortcut";
      x.type += "Reference", x.referenceType = A, delete x.url, delete x.title;
    } else
      delete x.identifier, delete x.label;
    this.data.referenceType = void 0;
  }
  function he(x) {
    const A = this.sliceSerialize(x), B = this.stack[this.stack.length - 2];
    B.label = tp(A), B.identifier = Ot(A).toLowerCase();
  }
  function pe() {
    const x = this.stack[this.stack.length - 1], A = this.resume(), B = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, B.type === "link") {
      const K = x.children;
      B.children = K;
    } else
      B.alt = A;
  }
  function g() {
    const x = this.resume(), A = this.stack[this.stack.length - 1];
    A.url = x;
  }
  function le() {
    const x = this.resume(), A = this.stack[this.stack.length - 1];
    A.title = x;
  }
  function je() {
    this.data.inReference = void 0;
  }
  function m() {
    this.data.referenceType = "collapsed";
  }
  function Te(x) {
    const A = this.resume(), B = this.stack[this.stack.length - 1];
    B.label = A, B.identifier = Ot(this.sliceSerialize(x)).toLowerCase(), this.data.referenceType = "full";
  }
  function Ve(x) {
    this.data.characterReferenceType = x.type;
  }
  function ue(x) {
    const A = this.sliceSerialize(x), B = this.data.characterReferenceType;
    let K;
    B ? (K = Uo(A, B === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : K = Xr(A);
    const Z = this.stack[this.stack.length - 1];
    Z.value += K;
  }
  function He(x) {
    const A = this.stack.pop();
    A.position.end = et(x.end);
  }
  function Ae(x) {
    j.call(this, x);
    const A = this.stack[this.stack.length - 1];
    A.url = this.sliceSerialize(x);
  }
  function Fe(x) {
    j.call(this, x);
    const A = this.stack[this.stack.length - 1];
    A.url = "mailto:" + this.sliceSerialize(x);
  }
  function De() {
    return {
      type: "blockquote",
      children: []
    };
  }
  function vt() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: ""
    };
  }
  function ln() {
    return {
      type: "inlineCode",
      value: ""
    };
  }
  function zn() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: ""
    };
  }
  function Mn() {
    return {
      type: "emphasis",
      children: []
    };
  }
  function ot() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: []
    };
  }
  function Ye() {
    return {
      type: "break"
    };
  }
  function zt() {
    return {
      type: "html",
      value: ""
    };
  }
  function un() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null
    };
  }
  function at() {
    return {
      type: "link",
      title: null,
      url: "",
      children: []
    };
  }
  function cn(x) {
    return {
      type: "list",
      ordered: x.type === "listOrdered",
      start: null,
      spread: x._spread,
      children: []
    };
  }
  function Fn(x) {
    return {
      type: "listItem",
      spread: x._spread,
      checked: null,
      children: []
    };
  }
  function Mt() {
    return {
      type: "paragraph",
      children: []
    };
  }
  function Un() {
    return {
      type: "strong",
      children: []
    };
  }
  function Bn() {
    return {
      type: "text",
      value: ""
    };
  }
  function hn() {
    return {
      type: "thematicBreak"
    };
  }
}
function et(t) {
  return {
    line: t.line,
    column: t.column,
    offset: t.offset
  };
}
function Qo(t, e) {
  let n = -1;
  for (; ++n < e.length; ) {
    const r = e[n];
    Array.isArray(r) ? Qo(t, r) : sp(t, r);
  }
}
function sp(t, e) {
  let n;
  for (n in e)
    if (Xo.call(e, n))
      switch (n) {
        case "canContainEols": {
          const r = e[n];
          r && t[n].push(...r);
          break;
        }
        case "transforms": {
          const r = e[n];
          r && t[n].push(...r);
          break;
        }
        case "enter":
        case "exit": {
          const r = e[n];
          r && Object.assign(t[n], r);
          break;
        }
      }
}
function as(t, e) {
  throw t ? new Error("Cannot close `" + t.type + "` (" + Qt({
    start: t.start,
    end: t.end
  }) + "): a different token (`" + e.type + "`, " + Qt({
    start: e.start,
    end: e.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + e.type + "`, " + Qt({
    start: e.start,
    end: e.end
  }) + ") is still open");
}
function op(t) {
  const e = this;
  e.parser = n;
  function n(r) {
    return rp(r, {
      ...e.data("settings"),
      ...t,
      // Note: these options are not in the readme.
      // The goal is for them to be set by plugins on `data` instead of being
      // passed by users.
      extensions: e.data("micromarkExtensions") || [],
      mdastExtensions: e.data("fromMarkdownExtensions") || []
    });
  }
}
function ap(t, e) {
  const n = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: t.wrap(t.all(e), !0)
  };
  return t.patch(e, n), t.applyData(e, n);
}
function lp(t, e) {
  const n = { type: "element", tagName: "br", properties: {}, children: [] };
  return t.patch(e, n), [t.applyData(e, n), { type: "text", value: `
` }];
}
function up(t, e) {
  const n = e.value ? e.value + `
` : "", r = {};
  e.lang && (r.className = ["language-" + e.lang]);
  let i = {
    type: "element",
    tagName: "code",
    properties: r,
    children: [{ type: "text", value: n }]
  };
  return e.meta && (i.data = { meta: e.meta }), t.patch(e, i), i = t.applyData(e, i), i = { type: "element", tagName: "pre", properties: {}, children: [i] }, t.patch(e, i), i;
}
function cp(t, e) {
  const n = {
    type: "element",
    tagName: "del",
    properties: {},
    children: t.all(e)
  };
  return t.patch(e, n), t.applyData(e, n);
}
function hp(t, e) {
  const n = {
    type: "element",
    tagName: "em",
    properties: {},
    children: t.all(e)
  };
  return t.patch(e, n), t.applyData(e, n);
}
function dp(t, e) {
  const n = typeof t.options.clobberPrefix == "string" ? t.options.clobberPrefix : "user-content-", r = String(e.identifier).toUpperCase(), i = Nt(r.toLowerCase()), s = t.footnoteOrder.indexOf(r);
  let o, a = t.footnoteCounts.get(r);
  a === void 0 ? (a = 0, t.footnoteOrder.push(r), o = t.footnoteOrder.length) : o = s + 1, a += 1, t.footnoteCounts.set(r, a);
  const l = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + n + "fn-" + i,
      id: n + "fnref-" + i + (a > 1 ? "-" + a : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(o) }]
  };
  t.patch(e, l);
  const c = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [l]
  };
  return t.patch(e, c), t.applyData(e, c);
}
function fp(t, e) {
  const n = {
    type: "element",
    tagName: "h" + e.depth,
    properties: {},
    children: t.all(e)
  };
  return t.patch(e, n), t.applyData(e, n);
}
function pp(t, e) {
  if (t.options.allowDangerousHtml) {
    const n = { type: "raw", value: e.value };
    return t.patch(e, n), t.applyData(e, n);
  }
}
function Zo(t, e) {
  const n = e.referenceType;
  let r = "]";
  if (n === "collapsed" ? r += "[]" : n === "full" && (r += "[" + (e.label || e.identifier) + "]"), e.type === "imageReference")
    return [{ type: "text", value: "![" + e.alt + r }];
  const i = t.all(e), s = i[0];
  s && s.type === "text" ? s.value = "[" + s.value : i.unshift({ type: "text", value: "[" });
  const o = i[i.length - 1];
  return o && o.type === "text" ? o.value += r : i.push({ type: "text", value: r }), i;
}
function gp(t, e) {
  const n = String(e.identifier).toUpperCase(), r = t.definitionById.get(n);
  if (!r)
    return Zo(t, e);
  const i = { src: Nt(r.url || ""), alt: e.alt };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const s = { type: "element", tagName: "img", properties: i, children: [] };
  return t.patch(e, s), t.applyData(e, s);
}
function mp(t, e) {
  const n = { src: Nt(e.url) };
  e.alt !== null && e.alt !== void 0 && (n.alt = e.alt), e.title !== null && e.title !== void 0 && (n.title = e.title);
  const r = { type: "element", tagName: "img", properties: n, children: [] };
  return t.patch(e, r), t.applyData(e, r);
}
function yp(t, e) {
  const n = { type: "text", value: e.value.replace(/\r?\n|\r/g, " ") };
  t.patch(e, n);
  const r = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [n]
  };
  return t.patch(e, r), t.applyData(e, r);
}
function bp(t, e) {
  const n = String(e.identifier).toUpperCase(), r = t.definitionById.get(n);
  if (!r)
    return Zo(t, e);
  const i = { href: Nt(r.url || "") };
  r.title !== null && r.title !== void 0 && (i.title = r.title);
  const s = {
    type: "element",
    tagName: "a",
    properties: i,
    children: t.all(e)
  };
  return t.patch(e, s), t.applyData(e, s);
}
function vp(t, e) {
  const n = { href: Nt(e.url) };
  e.title !== null && e.title !== void 0 && (n.title = e.title);
  const r = {
    type: "element",
    tagName: "a",
    properties: n,
    children: t.all(e)
  };
  return t.patch(e, r), t.applyData(e, r);
}
function wp(t, e, n) {
  const r = t.all(e), i = n ? _p(n) : ea(e), s = {}, o = [];
  if (typeof e.checked == "boolean") {
    const u = r[0];
    let h;
    u && u.type === "element" && u.tagName === "p" ? h = u : (h = { type: "element", tagName: "p", properties: {}, children: [] }, r.unshift(h)), h.children.length > 0 && h.children.unshift({ type: "text", value: " " }), h.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: e.checked, disabled: !0 },
      children: []
    }), s.className = ["task-list-item"];
  }
  let a = -1;
  for (; ++a < r.length; ) {
    const u = r[a];
    (i || a !== 0 || u.type !== "element" || u.tagName !== "p") && o.push({ type: "text", value: `
` }), u.type === "element" && u.tagName === "p" && !i ? o.push(...u.children) : o.push(u);
  }
  const l = r[r.length - 1];
  l && (i || l.type !== "element" || l.tagName !== "p") && o.push({ type: "text", value: `
` });
  const c = { type: "element", tagName: "li", properties: s, children: o };
  return t.patch(e, c), t.applyData(e, c);
}
function _p(t) {
  let e = !1;
  if (t.type === "list") {
    e = t.spread || !1;
    const n = t.children;
    let r = -1;
    for (; !e && ++r < n.length; )
      e = ea(n[r]);
  }
  return e;
}
function ea(t) {
  const e = t.spread;
  return e ?? t.children.length > 1;
}
function xp(t, e) {
  const n = {}, r = t.all(e);
  let i = -1;
  for (typeof e.start == "number" && e.start !== 1 && (n.start = e.start); ++i < r.length; ) {
    const o = r[i];
    if (o.type === "element" && o.tagName === "li" && o.properties && Array.isArray(o.properties.className) && o.properties.className.includes("task-list-item")) {
      n.className = ["contains-task-list"];
      break;
    }
  }
  const s = {
    type: "element",
    tagName: e.ordered ? "ol" : "ul",
    properties: n,
    children: t.wrap(r, !0)
  };
  return t.patch(e, s), t.applyData(e, s);
}
function kp(t, e) {
  const n = {
    type: "element",
    tagName: "p",
    properties: {},
    children: t.all(e)
  };
  return t.patch(e, n), t.applyData(e, n);
}
function Sp(t, e) {
  const n = { type: "root", children: t.wrap(t.all(e)) };
  return t.patch(e, n), t.applyData(e, n);
}
function Ep(t, e) {
  const n = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: t.all(e)
  };
  return t.patch(e, n), t.applyData(e, n);
}
function Cp(t, e) {
  const n = t.all(e), r = n.shift(), i = [];
  if (r) {
    const o = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: t.wrap([r], !0)
    };
    t.patch(e.children[0], o), i.push(o);
  }
  if (n.length > 0) {
    const o = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: t.wrap(n, !0)
    }, a = Gr(e.children[1]), l = Lo(e.children[e.children.length - 1]);
    a && l && (o.position = { start: a, end: l }), i.push(o);
  }
  const s = {
    type: "element",
    tagName: "table",
    properties: {},
    children: t.wrap(i, !0)
  };
  return t.patch(e, s), t.applyData(e, s);
}
function Tp(t, e, n) {
  const r = n ? n.children : void 0, s = (r ? r.indexOf(e) : 1) === 0 ? "th" : "td", o = n && n.type === "table" ? n.align : void 0, a = o ? o.length : e.children.length;
  let l = -1;
  const c = [];
  for (; ++l < a; ) {
    const h = e.children[l], f = {}, d = o ? o[l] : void 0;
    d && (f.align = d);
    let y = { type: "element", tagName: s, properties: f, children: [] };
    h && (y.children = t.all(h), t.patch(h, y), y = t.applyData(h, y)), c.push(y);
  }
  const u = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: t.wrap(c, !0)
  };
  return t.patch(e, u), t.applyData(e, u);
}
function Ap(t, e) {
  const n = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: t.all(e)
  };
  return t.patch(e, n), t.applyData(e, n);
}
const ls = 9, us = 32;
function Pp(t) {
  const e = String(t), n = /\r?\n|\r/g;
  let r = n.exec(e), i = 0;
  const s = [];
  for (; r; )
    s.push(
      cs(e.slice(i, r.index), i > 0, !0),
      r[0]
    ), i = r.index + r[0].length, r = n.exec(e);
  return s.push(cs(e.slice(i), i > 0, !1)), s.join("");
}
function cs(t, e, n) {
  let r = 0, i = t.length;
  if (e) {
    let s = t.codePointAt(r);
    for (; s === ls || s === us; )
      r++, s = t.codePointAt(r);
  }
  if (n) {
    let s = t.codePointAt(i - 1);
    for (; s === ls || s === us; )
      i--, s = t.codePointAt(i - 1);
  }
  return i > r ? t.slice(r, i) : "";
}
function Ip(t, e) {
  const n = { type: "text", value: Pp(String(e.value)) };
  return t.patch(e, n), t.applyData(e, n);
}
function Op(t, e) {
  const n = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return t.patch(e, n), t.applyData(e, n);
}
const Rp = {
  blockquote: ap,
  break: lp,
  code: up,
  delete: cp,
  emphasis: hp,
  footnoteReference: dp,
  heading: fp,
  html: pp,
  imageReference: gp,
  image: mp,
  inlineCode: yp,
  linkReference: bp,
  link: vp,
  listItem: wp,
  list: xp,
  paragraph: kp,
  // @ts-expect-error: root is different, but hard to type.
  root: Sp,
  strong: Ep,
  table: Cp,
  tableCell: Ap,
  tableRow: Tp,
  text: Ip,
  thematicBreak: Op,
  toml: yn,
  yaml: yn,
  definition: yn,
  footnoteDefinition: yn
};
function yn() {
}
const ta = -1, Dn = 0, en = 1, Sn = 2, ei = 3, ti = 4, ni = 5, ri = 6, na = 7, ra = 8, hs = typeof self == "object" ? self : globalThis, jp = (t, e) => {
  const n = (i, s) => (t.set(s, i), i), r = (i) => {
    if (t.has(i))
      return t.get(i);
    const [s, o] = e[i];
    switch (s) {
      case Dn:
      case ta:
        return n(o, i);
      case en: {
        const a = n([], i);
        for (const l of o)
          a.push(r(l));
        return a;
      }
      case Sn: {
        const a = n({}, i);
        for (const [l, c] of o)
          a[r(l)] = r(c);
        return a;
      }
      case ei:
        return n(new Date(o), i);
      case ti: {
        const { source: a, flags: l } = o;
        return n(new RegExp(a, l), i);
      }
      case ni: {
        const a = n(/* @__PURE__ */ new Map(), i);
        for (const [l, c] of o)
          a.set(r(l), r(c));
        return a;
      }
      case ri: {
        const a = n(/* @__PURE__ */ new Set(), i);
        for (const l of o)
          a.add(r(l));
        return a;
      }
      case na: {
        const { name: a, message: l } = o;
        return n(new hs[a](l), i);
      }
      case ra:
        return n(BigInt(o), i);
      case "BigInt":
        return n(Object(BigInt(o)), i);
      case "ArrayBuffer":
        return n(new Uint8Array(o).buffer, o);
      case "DataView": {
        const { buffer: a } = new Uint8Array(o);
        return n(new DataView(a), o);
      }
    }
    return n(new hs[s](o), i);
  };
  return r;
}, ds = (t) => jp(/* @__PURE__ */ new Map(), t)(0), Ct = "", { toString: Lp } = {}, { keys: $p } = Object, Wt = (t) => {
  const e = typeof t;
  if (e !== "object" || !t)
    return [Dn, e];
  const n = Lp.call(t).slice(8, -1);
  switch (n) {
    case "Array":
      return [en, Ct];
    case "Object":
      return [Sn, Ct];
    case "Date":
      return [ei, Ct];
    case "RegExp":
      return [ti, Ct];
    case "Map":
      return [ni, Ct];
    case "Set":
      return [ri, Ct];
    case "DataView":
      return [en, n];
  }
  return n.includes("Array") ? [en, n] : n.includes("Error") ? [na, n] : [Sn, n];
}, bn = ([t, e]) => t === Dn && (e === "function" || e === "symbol"), Dp = (t, e, n, r) => {
  const i = (o, a) => {
    const l = r.push(o) - 1;
    return n.set(a, l), l;
  }, s = (o) => {
    if (n.has(o))
      return n.get(o);
    let [a, l] = Wt(o);
    switch (a) {
      case Dn: {
        let u = o;
        switch (l) {
          case "bigint":
            a = ra, u = o.toString();
            break;
          case "function":
          case "symbol":
            if (t)
              throw new TypeError("unable to serialize " + l);
            u = null;
            break;
          case "undefined":
            return i([ta], o);
        }
        return i([a, u], o);
      }
      case en: {
        if (l) {
          let f = o;
          return l === "DataView" ? f = new Uint8Array(o.buffer) : l === "ArrayBuffer" && (f = new Uint8Array(o)), i([l, [...f]], o);
        }
        const u = [], h = i([a, u], o);
        for (const f of o)
          u.push(s(f));
        return h;
      }
      case Sn: {
        if (l)
          switch (l) {
            case "BigInt":
              return i([l, o.toString()], o);
            case "Boolean":
            case "Number":
            case "String":
              return i([l, o.valueOf()], o);
          }
        if (e && "toJSON" in o)
          return s(o.toJSON());
        const u = [], h = i([a, u], o);
        for (const f of $p(o))
          (t || !bn(Wt(o[f]))) && u.push([s(f), s(o[f])]);
        return h;
      }
      case ei:
        return i([a, o.toISOString()], o);
      case ti: {
        const { source: u, flags: h } = o;
        return i([a, { source: u, flags: h }], o);
      }
      case ni: {
        const u = [], h = i([a, u], o);
        for (const [f, d] of o)
          (t || !(bn(Wt(f)) || bn(Wt(d)))) && u.push([s(f), s(d)]);
        return h;
      }
      case ri: {
        const u = [], h = i([a, u], o);
        for (const f of o)
          (t || !bn(Wt(f))) && u.push(s(f));
        return h;
      }
    }
    const { message: c } = o;
    return i([a, { name: l, message: c }], o);
  };
  return s;
}, fs = (t, { json: e, lossy: n } = {}) => {
  const r = [];
  return Dp(!(e || n), !!e, /* @__PURE__ */ new Map(), r)(t), r;
}, En = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (t, e) => e && ("json" in e || "lossy" in e) ? ds(fs(t, e)) : structuredClone(t)
) : (t, e) => ds(fs(t, e));
function Np(t, e) {
  const n = [{ type: "text", value: "↩" }];
  return e > 1 && n.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(e) }]
  }), n;
}
function zp(t, e) {
  return "Back to reference " + (t + 1) + (e > 1 ? "-" + e : "");
}
function Mp(t) {
  const e = typeof t.options.clobberPrefix == "string" ? t.options.clobberPrefix : "user-content-", n = t.options.footnoteBackContent || Np, r = t.options.footnoteBackLabel || zp, i = t.options.footnoteLabel || "Footnotes", s = t.options.footnoteLabelTagName || "h2", o = t.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, a = [];
  let l = -1;
  for (; ++l < t.footnoteOrder.length; ) {
    const c = t.footnoteById.get(
      t.footnoteOrder[l]
    );
    if (!c)
      continue;
    const u = t.all(c), h = String(c.identifier).toUpperCase(), f = Nt(h.toLowerCase());
    let d = 0;
    const y = [], b = t.footnoteCounts.get(h);
    for (; b !== void 0 && ++d <= b; ) {
      y.length > 0 && y.push({ type: "text", value: " " });
      let C = typeof n == "string" ? n : n(l, d);
      typeof C == "string" && (C = { type: "text", value: C }), y.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + e + "fnref-" + f + (d > 1 ? "-" + d : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof r == "string" ? r : r(l, d),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(C) ? C : [C]
      });
    }
    const w = u[u.length - 1];
    if (w && w.type === "element" && w.tagName === "p") {
      const C = w.children[w.children.length - 1];
      C && C.type === "text" ? C.value += " " : w.children.push({ type: "text", value: " " }), w.children.push(...y);
    } else
      u.push(...y);
    const v = {
      type: "element",
      tagName: "li",
      properties: { id: e + "fn-" + f },
      children: t.wrap(u, !0)
    };
    t.patch(c, v), a.push(v);
  }
  if (a.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: s,
          properties: {
            ...En(o),
            id: "footnote-label"
          },
          children: [{ type: "text", value: i }]
        },
        { type: "text", value: `
` },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: t.wrap(a, !0)
        },
        { type: "text", value: `
` }
      ]
    };
}
const ia = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  function(t) {
    if (t == null)
      return qp;
    if (typeof t == "function")
      return Nn(t);
    if (typeof t == "object")
      return Array.isArray(t) ? Fp(t) : Up(t);
    if (typeof t == "string")
      return Bp(t);
    throw new Error("Expected function, string, or object as test");
  }
);
function Fp(t) {
  const e = [];
  let n = -1;
  for (; ++n < t.length; )
    e[n] = ia(t[n]);
  return Nn(r);
  function r(...i) {
    let s = -1;
    for (; ++s < e.length; )
      if (e[s].apply(this, i)) return !0;
    return !1;
  }
}
function Up(t) {
  const e = (
    /** @type {Record<string, unknown>} */
    t
  );
  return Nn(n);
  function n(r) {
    const i = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      r
    );
    let s;
    for (s in t)
      if (i[s] !== e[s]) return !1;
    return !0;
  }
}
function Bp(t) {
  return Nn(e);
  function e(n) {
    return n && n.type === t;
  }
}
function Nn(t) {
  return e;
  function e(n, r, i) {
    return !!(Vp(n) && t.call(
      this,
      n,
      typeof r == "number" ? r : void 0,
      i || void 0
    ));
  }
}
function qp() {
  return !0;
}
function Vp(t) {
  return t !== null && typeof t == "object" && "type" in t;
}
const sa = [], Hp = !0, ps = !1, Wp = "skip";
function Gp(t, e, n, r) {
  let i;
  typeof e == "function" && typeof n != "function" ? (r = n, n = e) : i = e;
  const s = ia(i), o = r ? -1 : 1;
  a(t, void 0, [])();
  function a(l, c, u) {
    const h = (
      /** @type {Record<string, unknown>} */
      l && typeof l == "object" ? l : {}
    );
    if (typeof h.type == "string") {
      const d = (
        // `hast`
        typeof h.tagName == "string" ? h.tagName : (
          // `xast`
          typeof h.name == "string" ? h.name : void 0
        )
      );
      Object.defineProperty(f, "name", {
        value: "node (" + (l.type + (d ? "<" + d + ">" : "")) + ")"
      });
    }
    return f;
    function f() {
      let d = sa, y, b, w;
      if ((!e || s(l, c, u[u.length - 1] || void 0)) && (d = Kp(n(l, u)), d[0] === ps))
        return d;
      if ("children" in l && l.children) {
        const v = (
          /** @type {UnistParent} */
          l
        );
        if (v.children && d[0] !== Wp)
          for (b = (r ? v.children.length : -1) + o, w = u.concat(v); b > -1 && b < v.children.length; ) {
            const C = v.children[b];
            if (y = a(C, b, w)(), y[0] === ps)
              return y;
            b = typeof y[1] == "number" ? y[1] : b + o;
          }
      }
      return d;
    }
  }
}
function Kp(t) {
  return Array.isArray(t) ? t : typeof t == "number" ? [Hp, t] : t == null ? sa : [t];
}
function oa(t, e, n, r) {
  let i, s, o;
  typeof e == "function" && typeof n != "function" ? (s = void 0, o = e, i = n) : (s = e, o = n, i = r), Gp(t, s, a, i);
  function a(l, c) {
    const u = c[c.length - 1], h = u ? u.children.indexOf(l) : void 0;
    return o(l, h, u);
  }
}
const jr = {}.hasOwnProperty, Jp = {};
function Yp(t, e) {
  const n = e || Jp, r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), o = { ...Rp, ...n.handlers }, a = {
    all: c,
    applyData: Qp,
    definitionById: r,
    footnoteById: i,
    footnoteCounts: s,
    footnoteOrder: [],
    handlers: o,
    one: l,
    options: n,
    patch: Xp,
    wrap: eg
  };
  return oa(t, function(u) {
    if (u.type === "definition" || u.type === "footnoteDefinition") {
      const h = u.type === "definition" ? r : i, f = String(u.identifier).toUpperCase();
      h.has(f) || h.set(f, u);
    }
  }), a;
  function l(u, h) {
    const f = u.type, d = a.handlers[f];
    if (jr.call(a.handlers, f) && d)
      return d(a, u, h);
    if (a.options.passThrough && a.options.passThrough.includes(f)) {
      if ("children" in u) {
        const { children: b, ...w } = u, v = En(w);
        return v.children = a.all(u), v;
      }
      return En(u);
    }
    return (a.options.unknownHandler || Zp)(a, u, h);
  }
  function c(u) {
    const h = [];
    if ("children" in u) {
      const f = u.children;
      let d = -1;
      for (; ++d < f.length; ) {
        const y = a.one(f[d], u);
        if (y) {
          if (d && f[d - 1].type === "break" && (!Array.isArray(y) && y.type === "text" && (y.value = gs(y.value)), !Array.isArray(y) && y.type === "element")) {
            const b = y.children[0];
            b && b.type === "text" && (b.value = gs(b.value));
          }
          Array.isArray(y) ? h.push(...y) : h.push(y);
        }
      }
    }
    return h;
  }
}
function Xp(t, e) {
  t.position && (e.position = jh(t));
}
function Qp(t, e) {
  let n = e;
  if (t && t.data) {
    const r = t.data.hName, i = t.data.hChildren, s = t.data.hProperties;
    if (typeof r == "string")
      if (n.type === "element")
        n.tagName = r;
      else {
        const o = "children" in n ? n.children : [n];
        n = { type: "element", tagName: r, properties: {}, children: o };
      }
    n.type === "element" && s && Object.assign(n.properties, En(s)), "children" in n && n.children && i !== null && i !== void 0 && (n.children = i);
  }
  return n;
}
function Zp(t, e) {
  const n = e.data || {}, r = "value" in e && !(jr.call(n, "hProperties") || jr.call(n, "hChildren")) ? { type: "text", value: e.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: t.all(e)
  };
  return t.patch(e, r), t.applyData(e, r);
}
function eg(t, e) {
  const n = [];
  let r = -1;
  for (e && n.push({ type: "text", value: `
` }); ++r < t.length; )
    r && n.push({ type: "text", value: `
` }), n.push(t[r]);
  return e && t.length > 0 && n.push({ type: "text", value: `
` }), n;
}
function gs(t) {
  let e = 0, n = t.charCodeAt(e);
  for (; n === 9 || n === 32; )
    e++, n = t.charCodeAt(e);
  return t.slice(e);
}
function ms(t, e) {
  const n = Yp(t, e), r = n.one(t, void 0), i = Mp(n), s = Array.isArray(r) ? { type: "root", children: r } : r || { type: "root", children: [] };
  return i && s.children.push({ type: "text", value: `
` }, i), s;
}
function tg(t, e) {
  return t && "run" in t ? async function(n, r) {
    const i = (
      /** @type {HastRoot} */
      ms(n, { file: r, ...e })
    );
    await t.run(i, r);
  } : function(n, r) {
    return (
      /** @type {HastRoot} */
      ms(n, { file: r, ...t || e })
    );
  };
}
function ys(t) {
  if (t)
    throw t;
}
var _n = Object.prototype.hasOwnProperty, aa = Object.prototype.toString, bs = Object.defineProperty, vs = Object.getOwnPropertyDescriptor, ws = function(e) {
  return typeof Array.isArray == "function" ? Array.isArray(e) : aa.call(e) === "[object Array]";
}, _s = function(e) {
  if (!e || aa.call(e) !== "[object Object]")
    return !1;
  var n = _n.call(e, "constructor"), r = e.constructor && e.constructor.prototype && _n.call(e.constructor.prototype, "isPrototypeOf");
  if (e.constructor && !n && !r)
    return !1;
  var i;
  for (i in e)
    ;
  return typeof i > "u" || _n.call(e, i);
}, xs = function(e, n) {
  bs && n.name === "__proto__" ? bs(e, n.name, {
    enumerable: !0,
    configurable: !0,
    value: n.newValue,
    writable: !0
  }) : e[n.name] = n.newValue;
}, ks = function(e, n) {
  if (n === "__proto__")
    if (_n.call(e, n)) {
      if (vs)
        return vs(e, n).value;
    } else return;
  return e[n];
}, ng = function t() {
  var e, n, r, i, s, o, a = arguments[0], l = 1, c = arguments.length, u = !1;
  for (typeof a == "boolean" && (u = a, a = arguments[1] || {}, l = 2), (a == null || typeof a != "object" && typeof a != "function") && (a = {}); l < c; ++l)
    if (e = arguments[l], e != null)
      for (n in e)
        r = ks(a, n), i = ks(e, n), a !== i && (u && i && (_s(i) || (s = ws(i))) ? (s ? (s = !1, o = r && ws(r) ? r : []) : o = r && _s(r) ? r : {}, xs(a, { name: n, newValue: t(u, o, i) })) : typeof i < "u" && xs(a, { name: n, newValue: i }));
  return a;
};
const sr = /* @__PURE__ */ Is(ng);
function Lr(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const e = Object.getPrototypeOf(t);
  return (e === null || e === Object.prototype || Object.getPrototypeOf(e) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}
function rg() {
  const t = [], e = { run: n, use: r };
  return e;
  function n(...i) {
    let s = -1;
    const o = i.pop();
    if (typeof o != "function")
      throw new TypeError("Expected function as last argument, not " + o);
    a(null, ...i);
    function a(l, ...c) {
      const u = t[++s];
      let h = -1;
      if (l) {
        o(l);
        return;
      }
      for (; ++h < i.length; )
        (c[h] === null || c[h] === void 0) && (c[h] = i[h]);
      i = c, u ? ig(u, a)(...c) : o(null, ...c);
    }
  }
  function r(i) {
    if (typeof i != "function")
      throw new TypeError(
        "Expected `middelware` to be a function, not " + i
      );
    return t.push(i), e;
  }
}
function ig(t, e) {
  let n;
  return r;
  function r(...o) {
    const a = t.length > o.length;
    let l;
    a && o.push(i);
    try {
      l = t.apply(this, o);
    } catch (c) {
      const u = (
        /** @type {Error} */
        c
      );
      if (a && n)
        throw u;
      return i(u);
    }
    a || (l && l.then && typeof l.then == "function" ? l.then(s, i) : l instanceof Error ? i(l) : s(l));
  }
  function i(o, ...a) {
    n || (n = !0, e(o, ...a));
  }
  function s(o) {
    i(null, o);
  }
}
const Ue = { basename: sg, dirname: og, extname: ag, join: lg, sep: "/" };
function sg(t, e) {
  if (e !== void 0 && typeof e != "string")
    throw new TypeError('"ext" argument must be a string');
  an(t);
  let n = 0, r = -1, i = t.length, s;
  if (e === void 0 || e.length === 0 || e.length > t.length) {
    for (; i--; )
      if (t.codePointAt(i) === 47) {
        if (s) {
          n = i + 1;
          break;
        }
      } else r < 0 && (s = !0, r = i + 1);
    return r < 0 ? "" : t.slice(n, r);
  }
  if (e === t)
    return "";
  let o = -1, a = e.length - 1;
  for (; i--; )
    if (t.codePointAt(i) === 47) {
      if (s) {
        n = i + 1;
        break;
      }
    } else
      o < 0 && (s = !0, o = i + 1), a > -1 && (t.codePointAt(i) === e.codePointAt(a--) ? a < 0 && (r = i) : (a = -1, r = o));
  return n === r ? r = o : r < 0 && (r = t.length), t.slice(n, r);
}
function og(t) {
  if (an(t), t.length === 0)
    return ".";
  let e = -1, n = t.length, r;
  for (; --n; )
    if (t.codePointAt(n) === 47) {
      if (r) {
        e = n;
        break;
      }
    } else r || (r = !0);
  return e < 0 ? t.codePointAt(0) === 47 ? "/" : "." : e === 1 && t.codePointAt(0) === 47 ? "//" : t.slice(0, e);
}
function ag(t) {
  an(t);
  let e = t.length, n = -1, r = 0, i = -1, s = 0, o;
  for (; e--; ) {
    const a = t.codePointAt(e);
    if (a === 47) {
      if (o) {
        r = e + 1;
        break;
      }
      continue;
    }
    n < 0 && (o = !0, n = e + 1), a === 46 ? i < 0 ? i = e : s !== 1 && (s = 1) : i > -1 && (s = -1);
  }
  return i < 0 || n < 0 || // We saw a non-dot character immediately before the dot.
  s === 0 || // The (right-most) trimmed path component is exactly `..`.
  s === 1 && i === n - 1 && i === r + 1 ? "" : t.slice(i, n);
}
function lg(...t) {
  let e = -1, n;
  for (; ++e < t.length; )
    an(t[e]), t[e] && (n = n === void 0 ? t[e] : n + "/" + t[e]);
  return n === void 0 ? "." : ug(n);
}
function ug(t) {
  an(t);
  const e = t.codePointAt(0) === 47;
  let n = cg(t, !e);
  return n.length === 0 && !e && (n = "."), n.length > 0 && t.codePointAt(t.length - 1) === 47 && (n += "/"), e ? "/" + n : n;
}
function cg(t, e) {
  let n = "", r = 0, i = -1, s = 0, o = -1, a, l;
  for (; ++o <= t.length; ) {
    if (o < t.length)
      a = t.codePointAt(o);
    else {
      if (a === 47)
        break;
      a = 47;
    }
    if (a === 47) {
      if (!(i === o - 1 || s === 1)) if (i !== o - 1 && s === 2) {
        if (n.length < 2 || r !== 2 || n.codePointAt(n.length - 1) !== 46 || n.codePointAt(n.length - 2) !== 46) {
          if (n.length > 2) {
            if (l = n.lastIndexOf("/"), l !== n.length - 1) {
              l < 0 ? (n = "", r = 0) : (n = n.slice(0, l), r = n.length - 1 - n.lastIndexOf("/")), i = o, s = 0;
              continue;
            }
          } else if (n.length > 0) {
            n = "", r = 0, i = o, s = 0;
            continue;
          }
        }
        e && (n = n.length > 0 ? n + "/.." : "..", r = 2);
      } else
        n.length > 0 ? n += "/" + t.slice(i + 1, o) : n = t.slice(i + 1, o), r = o - i - 1;
      i = o, s = 0;
    } else a === 46 && s > -1 ? s++ : s = -1;
  }
  return n;
}
function an(t) {
  if (typeof t != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(t)
    );
}
const hg = { cwd: dg };
function dg() {
  return "/";
}
function $r(t) {
  return !!(t !== null && typeof t == "object" && "href" in t && t.href && "protocol" in t && t.protocol && // @ts-expect-error: indexing is fine.
  t.auth === void 0);
}
function fg(t) {
  if (typeof t == "string")
    t = new URL(t);
  else if (!$r(t)) {
    const e = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + t + "`"
    );
    throw e.code = "ERR_INVALID_ARG_TYPE", e;
  }
  if (t.protocol !== "file:") {
    const e = new TypeError("The URL must be of scheme file");
    throw e.code = "ERR_INVALID_URL_SCHEME", e;
  }
  return pg(t);
}
function pg(t) {
  if (t.hostname !== "") {
    const r = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw r.code = "ERR_INVALID_FILE_URL_HOST", r;
  }
  const e = t.pathname;
  let n = -1;
  for (; ++n < e.length; )
    if (e.codePointAt(n) === 37 && e.codePointAt(n + 1) === 50) {
      const r = e.codePointAt(n + 2);
      if (r === 70 || r === 102) {
        const i = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw i.code = "ERR_INVALID_FILE_URL_PATH", i;
      }
    }
  return decodeURIComponent(e);
}
const or = (
  /** @type {const} */
  [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
  ]
);
class la {
  /**
   * Create a new virtual file.
   *
   * `options` is treated as:
   *
   * *   `string` or `Uint8Array` — `{value: options}`
   * *   `URL` — `{path: options}`
   * *   `VFile` — shallow copies its data over to the new file
   * *   `object` — all fields are shallow copied over to the new file
   *
   * Path related fields are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * You cannot set `dirname` or `extname` without setting either `history`,
   * `path`, `basename`, or `stem` too.
   *
   * @param {Compatible | null | undefined} [value]
   *   File value.
   * @returns
   *   New instance.
   */
  constructor(e) {
    let n;
    e ? $r(e) ? n = { path: e } : typeof e == "string" || gg(e) ? n = { value: e } : n = e : n = {}, this.cwd = "cwd" in n ? "" : hg.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let r = -1;
    for (; ++r < or.length; ) {
      const s = or[r];
      s in n && n[s] !== void 0 && n[s] !== null && (this[s] = s === "history" ? [...n[s]] : n[s]);
    }
    let i;
    for (i in n)
      or.includes(i) || (this[i] = n[i]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? Ue.basename(this.path) : void 0;
  }
  /**
   * Set basename (including extname) (`'index.min.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} basename
   *   Basename.
   * @returns {undefined}
   *   Nothing.
   */
  set basename(e) {
    lr(e, "basename"), ar(e, "basename"), this.path = Ue.join(this.dirname || "", e);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? Ue.dirname(this.path) : void 0;
  }
  /**
   * Set the parent path (example: `'~'`).
   *
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} dirname
   *   Dirname.
   * @returns {undefined}
   *   Nothing.
   */
  set dirname(e) {
    Ss(this.basename, "dirname"), this.path = Ue.join(e || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? Ue.extname(this.path) : void 0;
  }
  /**
   * Set the extname (including dot) (example: `'.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} extname
   *   Extname.
   * @returns {undefined}
   *   Nothing.
   */
  set extname(e) {
    if (ar(e, "extname"), Ss(this.dirname, "extname"), e) {
      if (e.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (e.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = Ue.join(this.dirname, this.stem + (e || ""));
  }
  /**
   * Get the full path (example: `'~/index.min.js'`).
   *
   * @returns {string}
   *   Path.
   */
  get path() {
    return this.history[this.history.length - 1];
  }
  /**
   * Set the full path (example: `'~/index.min.js'`).
   *
   * Cannot be nullified.
   * You can set a file URL (a `URL` object with a `file:` protocol) which will
   * be turned into a path with `url.fileURLToPath`.
   *
   * @param {URL | string} path
   *   Path.
   * @returns {undefined}
   *   Nothing.
   */
  set path(e) {
    $r(e) && (e = fg(e)), lr(e, "path"), this.path !== e && this.history.push(e);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? Ue.basename(this.path, this.extname) : void 0;
  }
  /**
   * Set the stem (basename w/o extname) (example: `'index.min'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} stem
   *   Stem.
   * @returns {undefined}
   *   Nothing.
   */
  set stem(e) {
    lr(e, "stem"), ar(e, "stem"), this.path = Ue.join(this.dirname || "", e + (this.extname || ""));
  }
  // Normal prototypal methods.
  /**
   * Create a fatal message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `true` (error; file not usable)
   * and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {never}
   *   Never.
   * @throws {VFileMessage}
   *   Message.
   */
  fail(e, n, r) {
    const i = this.message(e, n, r);
    throw i.fatal = !0, i;
  }
  /**
   * Create an info message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `undefined` (info; change
   * likely not needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  info(e, n, r) {
    const i = this.message(e, n, r);
    return i.fatal = void 0, i;
  }
  /**
   * Create a message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `false` (warning; change may be
   * needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  message(e, n, r) {
    const i = new be(
      // @ts-expect-error: the overloads are fine.
      e,
      n,
      r
    );
    return this.path && (i.name = this.path + ":" + i.name, i.file = this.path), i.fatal = !1, this.messages.push(i), i;
  }
  /**
   * Serialize the file.
   *
   * > **Note**: which encodings are supported depends on the engine.
   * > For info on Node.js, see:
   * > <https://nodejs.org/api/util.html#whatwg-supported-encodings>.
   *
   * @param {string | null | undefined} [encoding='utf8']
   *   Character encoding to understand `value` as when it’s a `Uint8Array`
   *   (default: `'utf-8'`).
   * @returns {string}
   *   Serialized file.
   */
  toString(e) {
    return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(e || void 0).decode(this.value);
  }
}
function ar(t, e) {
  if (t && t.includes(Ue.sep))
    throw new Error(
      "`" + e + "` cannot be a path: did not expect `" + Ue.sep + "`"
    );
}
function lr(t, e) {
  if (!t)
    throw new Error("`" + e + "` cannot be empty");
}
function Ss(t, e) {
  if (!t)
    throw new Error("Setting `" + e + "` requires `path` to be set too");
}
function gg(t) {
  return !!(t && typeof t == "object" && "byteLength" in t && "byteOffset" in t);
}
const mg = (
  /**
   * @type {new <Parameters extends Array<unknown>, Result>(property: string | symbol) => (...parameters: Parameters) => Result}
   */
  /** @type {unknown} */
  /**
   * @this {Function}
   * @param {string | symbol} property
   * @returns {(...parameters: Array<unknown>) => unknown}
   */
  function(t) {
    const r = (
      /** @type {Record<string | symbol, Function>} */
      // Prototypes do exist.
      // type-coverage:ignore-next-line
      this.constructor.prototype
    ), i = r[t], s = function() {
      return i.apply(s, arguments);
    };
    return Object.setPrototypeOf(s, r), s;
  }
), yg = {}.hasOwnProperty;
class ii extends mg {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = rg();
  }
  /**
   * Copy a processor.
   *
   * @deprecated
   *   This is a private internal method and should not be used.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   New *unfrozen* processor ({@linkcode Processor}) that is
   *   configured to work the same as its ancestor.
   *   When the descendant processor is configured in the future it does not
   *   affect the ancestral processor.
   */
  copy() {
    const e = (
      /** @type {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>} */
      new ii()
    );
    let n = -1;
    for (; ++n < this.attachers.length; ) {
      const r = this.attachers[n];
      e.use(...r);
    }
    return e.data(sr(!0, {}, this.namespace)), e;
  }
  /**
   * Configure the processor with info available to all plugins.
   * Information is stored in an object.
   *
   * Typically, options can be given to a specific plugin, but sometimes it
   * makes sense to have information shared with several plugins.
   * For example, a list of HTML elements that are self-closing, which is
   * needed during all phases.
   *
   * > **Note**: setting information cannot occur on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * > **Note**: to register custom data in TypeScript, augment the
   * > {@linkcode Data} interface.
   *
   * @example
   *   This example show how to get and set info:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   const processor = unified().data('alpha', 'bravo')
   *
   *   processor.data('alpha') // => 'bravo'
   *
   *   processor.data() // => {alpha: 'bravo'}
   *
   *   processor.data({charlie: 'delta'})
   *
   *   processor.data() // => {charlie: 'delta'}
   *   ```
   *
   * @template {keyof Data} Key
   *
   * @overload
   * @returns {Data}
   *
   * @overload
   * @param {Data} dataset
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Key} key
   * @returns {Data[Key]}
   *
   * @overload
   * @param {Key} key
   * @param {Data[Key]} value
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @param {Data | Key} [key]
   *   Key to get or set, or entire dataset to set, or nothing to get the
   *   entire dataset (optional).
   * @param {Data[Key]} [value]
   *   Value to set (optional).
   * @returns {unknown}
   *   The current processor when setting, the value at `key` when getting, or
   *   the entire dataset when getting without key.
   */
  data(e, n) {
    return typeof e == "string" ? arguments.length === 2 ? (hr("data", this.frozen), this.namespace[e] = n, this) : yg.call(this.namespace, e) && this.namespace[e] || void 0 : e ? (hr("data", this.frozen), this.namespace = e, this) : this.namespace;
  }
  /**
   * Freeze a processor.
   *
   * Frozen processors are meant to be extended and not to be configured
   * directly.
   *
   * When a processor is frozen it cannot be unfrozen.
   * New processors working the same way can be created by calling the
   * processor.
   *
   * It’s possible to freeze processors explicitly by calling `.freeze()`.
   * Processors freeze automatically when `.parse()`, `.run()`, `.runSync()`,
   * `.stringify()`, `.process()`, or `.processSync()` are called.
   *
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   The current processor.
   */
  freeze() {
    if (this.frozen)
      return this;
    const e = (
      /** @type {Processor} */
      /** @type {unknown} */
      this
    );
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [n, ...r] = this.attachers[this.freezeIndex];
      if (r[0] === !1)
        continue;
      r[0] === !0 && (r[0] = void 0);
      const i = n.call(e, ...r);
      typeof i == "function" && this.transformers.use(i);
    }
    return this.frozen = !0, this.freezeIndex = Number.POSITIVE_INFINITY, this;
  }
  /**
   * Parse text to a syntax tree.
   *
   * > **Note**: `parse` freezes the processor if not already *frozen*.
   *
   * > **Note**: `parse` performs the parse phase, not the run phase or other
   * > phases.
   *
   * @param {Compatible | undefined} [file]
   *   file to parse (optional); typically `string` or `VFile`; any value
   *   accepted as `x` in `new VFile(x)`.
   * @returns {ParseTree extends undefined ? Node : ParseTree}
   *   Syntax tree representing `file`.
   */
  parse(e) {
    this.freeze();
    const n = vn(e), r = this.parser || this.Parser;
    return ur("parse", r), r(String(n), n);
  }
  /**
   * Process the given file as configured on the processor.
   *
   * > **Note**: `process` freezes the processor if not already *frozen*.
   *
   * > **Note**: `process` performs the parse, run, and stringify phases.
   *
   * @overload
   * @param {Compatible | undefined} file
   * @param {ProcessCallback<VFileWithOutput<CompileResult>>} done
   * @returns {undefined}
   *
   * @overload
   * @param {Compatible | undefined} [file]
   * @returns {Promise<VFileWithOutput<CompileResult>>}
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`]; any value accepted as
   *   `x` in `new VFile(x)`.
   * @param {ProcessCallback<VFileWithOutput<CompileResult>> | undefined} [done]
   *   Callback (optional).
   * @returns {Promise<VFile> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise a promise, rejected with a fatal error or resolved with the
   *   processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  process(e, n) {
    const r = this;
    return this.freeze(), ur("process", this.parser || this.Parser), cr("process", this.compiler || this.Compiler), n ? i(void 0, n) : new Promise(i);
    function i(s, o) {
      const a = vn(e), l = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        r.parse(a)
      );
      r.run(l, a, function(u, h, f) {
        if (u || !h || !f)
          return c(u);
        const d = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          h
        ), y = r.stringify(d, f);
        wg(y) ? f.value = y : f.result = y, c(
          u,
          /** @type {VFileWithOutput<CompileResult>} */
          f
        );
      });
      function c(u, h) {
        u || !h ? o(u) : s ? s(h) : n(void 0, h);
      }
    }
  }
  /**
   * Process the given file as configured on the processor.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `processSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `processSync` performs the parse, run, and stringify phases.
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`; any value accepted as
   *   `x` in `new VFile(x)`.
   * @returns {VFileWithOutput<CompileResult>}
   *   The processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  processSync(e) {
    let n = !1, r;
    return this.freeze(), ur("processSync", this.parser || this.Parser), cr("processSync", this.compiler || this.Compiler), this.process(e, i), Cs("processSync", "process", n), r;
    function i(s, o) {
      n = !0, ys(s), r = o;
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * > **Note**: `run` freezes the processor if not already *frozen*.
   *
   * > **Note**: `run` performs the run phase, not other phases.
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} file
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} [file]
   * @returns {Promise<TailTree extends undefined ? Node : TailTree>}
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {(
   *   RunCallback<TailTree extends undefined ? Node : TailTree> |
   *   Compatible
   * )} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} [done]
   *   Callback (optional).
   * @returns {Promise<TailTree extends undefined ? Node : TailTree> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise, a promise rejected with a fatal error or resolved with the
   *   transformed tree.
   */
  run(e, n, r) {
    Es(e), this.freeze();
    const i = this.transformers;
    return !r && typeof n == "function" && (r = n, n = void 0), r ? s(void 0, r) : new Promise(s);
    function s(o, a) {
      const l = vn(n);
      i.run(e, l, c);
      function c(u, h, f) {
        const d = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          h || e
        );
        u ? a(u) : o ? o(d) : r(void 0, d, f);
      }
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `runSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `runSync` performs the run phase, not other phases.
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {TailTree extends undefined ? Node : TailTree}
   *   Transformed tree.
   */
  runSync(e, n) {
    let r = !1, i;
    return this.run(e, n, s), Cs("runSync", "run", r), i;
    function s(o, a) {
      ys(o), i = a, r = !0;
    }
  }
  /**
   * Compile a syntax tree.
   *
   * > **Note**: `stringify` freezes the processor if not already *frozen*.
   *
   * > **Note**: `stringify` performs the stringify phase, not the run phase
   * > or other phases.
   *
   * @param {CompileTree extends undefined ? Node : CompileTree} tree
   *   Tree to compile.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {CompileResult extends undefined ? Value : CompileResult}
   *   Textual representation of the tree (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most compilers
   *   > return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  stringify(e, n) {
    this.freeze();
    const r = vn(n), i = this.compiler || this.Compiler;
    return cr("stringify", i), Es(e), i(e, r);
  }
  /**
   * Configure the processor to use a plugin, a list of usable values, or a
   * preset.
   *
   * If the processor is already using a plugin, the previous plugin
   * configuration is changed based on the options that are passed in.
   * In other words, the plugin is not added a second time.
   *
   * > **Note**: `use` cannot be called on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * @example
   *   There are many ways to pass plugins to `.use()`.
   *   This example gives an overview:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   unified()
   *     // Plugin with options:
   *     .use(pluginA, {x: true, y: true})
   *     // Passing the same plugin again merges configuration (to `{x: true, y: false, z: true}`):
   *     .use(pluginA, {y: false, z: true})
   *     // Plugins:
   *     .use([pluginB, pluginC])
   *     // Two plugins, the second with options:
   *     .use([pluginD, [pluginE, {}]])
   *     // Preset with plugins and settings:
   *     .use({plugins: [pluginF, [pluginG, {}]], settings: {position: false}})
   *     // Settings only:
   *     .use({settings: {position: false}})
   *   ```
   *
   * @template {Array<unknown>} [Parameters=[]]
   * @template {Node | string | undefined} [Input=undefined]
   * @template [Output=Input]
   *
   * @overload
   * @param {Preset | null | undefined} [preset]
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {PluggableList} list
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Plugin<Parameters, Input, Output>} plugin
   * @param {...(Parameters | [boolean])} parameters
   * @returns {UsePlugin<ParseTree, HeadTree, TailTree, CompileTree, CompileResult, Input, Output>}
   *
   * @param {PluggableList | Plugin | Preset | null | undefined} value
   *   Usable value.
   * @param {...unknown} parameters
   *   Parameters, when a plugin is given as a usable value.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   Current processor.
   */
  use(e, ...n) {
    const r = this.attachers, i = this.namespace;
    if (hr("use", this.frozen), e != null) if (typeof e == "function")
      l(e, n);
    else if (typeof e == "object")
      Array.isArray(e) ? a(e) : o(e);
    else
      throw new TypeError("Expected usable value, not `" + e + "`");
    return this;
    function s(c) {
      if (typeof c == "function")
        l(c, []);
      else if (typeof c == "object")
        if (Array.isArray(c)) {
          const [u, ...h] = (
            /** @type {PluginTuple<Array<unknown>>} */
            c
          );
          l(u, h);
        } else
          o(c);
      else
        throw new TypeError("Expected usable value, not `" + c + "`");
    }
    function o(c) {
      if (!("plugins" in c) && !("settings" in c))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      a(c.plugins), c.settings && (i.settings = sr(!0, i.settings, c.settings));
    }
    function a(c) {
      let u = -1;
      if (c != null) if (Array.isArray(c))
        for (; ++u < c.length; ) {
          const h = c[u];
          s(h);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + c + "`");
    }
    function l(c, u) {
      let h = -1, f = -1;
      for (; ++h < r.length; )
        if (r[h][0] === c) {
          f = h;
          break;
        }
      if (f === -1)
        r.push([c, ...u]);
      else if (u.length > 0) {
        let [d, ...y] = u;
        const b = r[f][1];
        Lr(b) && Lr(d) && (d = sr(!0, b, d)), r[f] = [c, d, ...y];
      }
    }
  }
}
const bg = new ii().freeze();
function ur(t, e) {
  if (typeof e != "function")
    throw new TypeError("Cannot `" + t + "` without `parser`");
}
function cr(t, e) {
  if (typeof e != "function")
    throw new TypeError("Cannot `" + t + "` without `compiler`");
}
function hr(t, e) {
  if (e)
    throw new Error(
      "Cannot call `" + t + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function Es(t) {
  if (!Lr(t) || typeof t.type != "string")
    throw new TypeError("Expected node, got `" + t + "`");
}
function Cs(t, e, n) {
  if (!n)
    throw new Error(
      "`" + t + "` finished async. Use `" + e + "` instead"
    );
}
function vn(t) {
  return vg(t) ? t : new la(t);
}
function vg(t) {
  return !!(t && typeof t == "object" && "message" in t && "messages" in t);
}
function wg(t) {
  return typeof t == "string" || _g(t);
}
function _g(t) {
  return !!(t && typeof t == "object" && "byteLength" in t && "byteOffset" in t);
}
const xg = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", Ts = [], As = { allowDangerousHtml: !0 }, kg = /^(https?|ircs?|mailto|xmpp)$/i, Sg = [
  { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
  { from: "allowDangerousHtml", id: "remove-buggy-html-in-markdown-parser" },
  {
    from: "allowNode",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowElement"
  },
  {
    from: "allowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowedElements"
  },
  { from: "className", id: "remove-classname" },
  {
    from: "disallowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "disallowedElements"
  },
  { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
  { from: "includeElementIndex", id: "#remove-includeelementindex" },
  {
    from: "includeNodeIndex",
    id: "change-includenodeindex-to-includeelementindex"
  },
  { from: "linkTarget", id: "remove-linktarget" },
  { from: "plugins", id: "change-plugins-to-remarkplugins", to: "remarkPlugins" },
  { from: "rawSourcePos", id: "#remove-rawsourcepos" },
  { from: "renderers", id: "change-renderers-to-components", to: "components" },
  { from: "source", id: "change-source-to-children", to: "children" },
  { from: "sourcePos", id: "#remove-sourcepos" },
  { from: "transformImageUri", id: "#add-urltransform", to: "urlTransform" },
  { from: "transformLinkUri", id: "#add-urltransform", to: "urlTransform" }
];
function Eg(t) {
  const e = Cg(t), n = Tg(t);
  return Ag(e.runSync(e.parse(n), n), t);
}
function Cg(t) {
  const e = t.rehypePlugins || Ts, n = t.remarkPlugins || Ts, r = t.remarkRehypeOptions ? { ...t.remarkRehypeOptions, ...As } : As;
  return bg().use(op).use(n).use(tg, r).use(e);
}
function Tg(t) {
  const e = t.children || "", n = new la();
  return typeof e == "string" && (n.value = e), n;
}
function Ag(t, e) {
  const n = e.allowedElements, r = e.allowElement, i = e.components, s = e.disallowedElements, o = e.skipHtml, a = e.unwrapDisallowed, l = e.urlTransform || Pg;
  for (const u of Sg)
    Object.hasOwn(e, u.from) && ("" + u.from + (u.to ? "use `" + u.to + "` instead" : "remove it") + xg + u.id, void 0);
  return oa(t, c), zh(t, {
    Fragment: R.Fragment,
    components: i,
    ignoreInvalidStyle: !0,
    jsx: R.jsx,
    jsxs: R.jsxs,
    passKeys: !0,
    passNode: !0
  });
  function c(u, h, f) {
    if (u.type === "raw" && f && typeof h == "number")
      return o ? f.children.splice(h, 1) : f.children[h] = { type: "text", value: u.value }, h;
    if (u.type === "element") {
      let d;
      for (d in nr)
        if (Object.hasOwn(nr, d) && Object.hasOwn(u.properties, d)) {
          const y = u.properties[d], b = nr[d];
          (b === null || b.includes(u.tagName)) && (u.properties[d] = l(String(y || ""), d, u));
        }
    }
    if (u.type === "element") {
      let d = n ? !n.includes(u.tagName) : s ? s.includes(u.tagName) : !1;
      if (!d && r && typeof h == "number" && (d = !r(u, h, f)), d && f && typeof h == "number")
        return a && u.children ? f.children.splice(h, 1, ...u.children) : f.children.splice(h, 1), h;
    }
  }
}
function Pg(t) {
  const e = t.indexOf(":"), n = t.indexOf("?"), r = t.indexOf("#"), i = t.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    e === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    i !== -1 && e > i || n !== -1 && e > n || r !== -1 && e > r || // It is a protocol, it should be allowed.
    kg.test(t.slice(0, e)) ? t : ""
  );
}
const qg = ({ clientId: t, isDemo: e = !1 }) => {
  const [n, r] = ht(!1), [i, s] = ht(""), [o, a] = ht([]), [l, c] = ht(null), [u, h] = ht(null), [f, d] = ht(!1), [y, b] = ht(!1), w = va(null);
  di(() => {
    (async () => {
      if (!t) {
        console.error("❌ Client ID manquant");
        return;
      }
      console.log(`🔄 Chargement config pour client: ${t}`), d(!0);
      try {
        const { data: F, error: j } = await Bc.rpc("get_client_config_public", { p_client_id: t });
        if (j) {
          console.error("❌ Erreur lors du chargement de la config:", j), h(`Configuration introuvable pour le client: ${t}`);
          return;
        }
        if (!F || F.length === 0) {
          console.error("❌ Aucune configuration trouvée pour:", t), h(`Aucune configuration trouvée pour le client: ${t}`);
          return;
        }
        const O = F[0];
        c(O), console.log("✅ Configuration chargée:", O);
      } catch (F) {
        console.error("❌ Erreur réseau:", F), h("Erreur de connexion");
      } finally {
        d(!1);
      }
    })();
  }, [t]);
  const v = async () => {
    var j, O, T;
    if (!i.trim()) return;
    const W = {
      text: i,
      isUser: !0,
      timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString()
    };
    a((N) => [...N, W]);
    const F = i;
    s("");
    try {
      if (!l) {
        console.error("❌ Configuration client non chargée");
        return;
      }
      if (e) {
        setTimeout(() => {
          const te = {
            text: `**[DEMO]** Merci pour votre message: "${F}". 

Ceci est une réponse simulée avec du **markdown** :
- Point 1
- Point 2
- *Texte en italique*`,
            isUser: !1,
            timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString()
          };
          a((he) => [...he, te]);
        }, 500);
        return;
      }
      console.log("🚀 Envoi message webhook:", {
        url: l.webhook_url,
        message: F
      });
      const N = await fetch(l.webhook_url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: F })
      });
      if (!N.ok)
        throw console.error("❌ Erreur webhook:", N.status, N.statusText), new Error(`Erreur ${N.status}: ${N.statusText}`);
      const z = await N.json();
      console.log("📥 Réponse webhook reçue:", z);
      let L = "";
      Array.isArray(z) ? L = ((j = z[0]) == null ? void 0 : j.texte) || ((O = z[0]) == null ? void 0 : O.text) || ((T = z[0]) == null ? void 0 : T.response) || "Réponse vide" : typeof z == "object" ? L = z.response || z.texte || z.text || z.message || "Réponse vide" : typeof z == "string" ? L = z : L = "Format de réponse non reconnu", console.log("✅ Texte de réponse extrait:", L);
      const re = {
        text: L,
        isUser: !1,
        timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString()
      };
      a((te) => [...te, re]);
    } catch (N) {
      console.error("❌ Erreur lors de l'envoi du message:", N);
      const z = {
        text: `⚠️ **Erreur de connexion**

Impossible de contacter le service. Veuillez réessayer dans quelques instants.

*Détails techniques: ${N instanceof Error ? N.message : "Erreur inconnue"}*`,
        isUser: !1,
        timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString()
      };
      a((L) => [...L, z]);
    }
  };
  di(() => {
    w.current && (w.current.scrollTop = w.current.scrollHeight);
  }, [o]);
  const C = () => {
    b(!y);
  }, k = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: 100
  }, I = {
    width: "350px",
    height: y ? "100vh" : "500px",
    display: "flex",
    flexDirection: "column",
    borderRadius: "0.75rem",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    overflow: "hidden"
  }, $ = {
    padding: "1rem",
    backgroundColor: (l == null ? void 0 : l.banner_color) || (l == null ? void 0 : l.color_primary) || "#3B82F6",
    color: "#fff",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  }, _ = {
    flex: 1,
    padding: "1rem",
    overflowY: "auto",
    backgroundColor: (l == null ? void 0 : l.chat_background_color) || "#ffffff",
    color: (l == null ? void 0 : l.text_color) || "#000000"
  }, D = {
    padding: "1rem",
    borderTop: "1px solid #e2e8f0",
    display: "flex"
  };
  return u ? /* @__PURE__ */ R.jsx("div", { style: k, children: /* @__PURE__ */ R.jsx(Tt, { variant: "destructive", children: u }) }) : f ? /* @__PURE__ */ R.jsx("div", { style: k, children: /* @__PURE__ */ R.jsx(Tt, { variant: "secondary", disabled: !0, children: "Chargement..." }) }) : /* @__PURE__ */ R.jsx("div", { style: k, children: n ? /* @__PURE__ */ R.jsxs(Fs, { style: I, children: [
    /* @__PURE__ */ R.jsxs("div", { style: $, children: [
      /* @__PURE__ */ R.jsxs("div", { className: "flex items-center space-x-3", children: [
        /* @__PURE__ */ R.jsxs(Xs, { children: [
          /* @__PURE__ */ R.jsx(Qs, { src: l == null ? void 0 : l.logo_url }),
          /* @__PURE__ */ R.jsx(Zs, { children: /* @__PURE__ */ R.jsx(ki, {}) })
        ] }),
        /* @__PURE__ */ R.jsx("span", { children: l == null ? void 0 : l.client_id })
      ] }),
      /* @__PURE__ */ R.jsx(Tt, { variant: "ghost", size: "icon", onClick: C, children: y ? "Réduire" : "Plein écran" })
    ] }),
    /* @__PURE__ */ R.jsxs(Us, { style: { padding: "0" }, children: [
      /* @__PURE__ */ R.jsx("div", { style: _, ref: w, children: o.map((W, F) => /* @__PURE__ */ R.jsxs("div", { className: `mb-2 ${W.isUser ? "text-right" : "text-left"}`, children: [
        /* @__PURE__ */ R.jsx(
          "div",
          {
            className: `inline-block px-3 py-2 rounded-xl max-w-[80%] ${W.isUser ? "bg-blue-500 text-white float-right" : "bg-gray-200 text-gray-800 float-left"}`,
            children: W.isUser ? /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
              W.text,
              /* @__PURE__ */ R.jsx("div", { className: "text-xs mt-1 opacity-75", children: W.timestamp })
            ] }) : /* @__PURE__ */ R.jsxs(R.Fragment, { children: [
              /* @__PURE__ */ R.jsx("div", { className: "prose prose-sm max-w-none", children: /* @__PURE__ */ R.jsx(
                Eg,
                {
                  components: {
                    p: ({ children: j }) => /* @__PURE__ */ R.jsx("p", { className: "mb-2 last:mb-0", children: j }),
                    strong: ({ children: j }) => /* @__PURE__ */ R.jsx("strong", { className: "font-semibold", children: j }),
                    em: ({ children: j }) => /* @__PURE__ */ R.jsx("em", { className: "italic", children: j }),
                    ul: ({ children: j }) => /* @__PURE__ */ R.jsx("ul", { className: "list-disc list-inside mb-2", children: j }),
                    ol: ({ children: j }) => /* @__PURE__ */ R.jsx("ol", { className: "list-decimal list-inside mb-2", children: j }),
                    li: ({ children: j }) => /* @__PURE__ */ R.jsx("li", { className: "mb-1", children: j }),
                    code: ({ children: j }) => /* @__PURE__ */ R.jsx("code", { className: "bg-gray-300 px-1 rounded text-sm", children: j }),
                    pre: ({ children: j }) => /* @__PURE__ */ R.jsx("pre", { className: "bg-gray-300 p-2 rounded text-sm overflow-x-auto", children: j })
                  },
                  children: W.text
                }
              ) }),
              /* @__PURE__ */ R.jsx("div", { className: "text-xs mt-2 opacity-75", children: W.timestamp })
            ] })
          }
        ),
        /* @__PURE__ */ R.jsx("div", { className: "clearfix" })
      ] }, F)) }),
      /* @__PURE__ */ R.jsxs("div", { style: D, children: [
        /* @__PURE__ */ R.jsx(
          Ms,
          {
            type: "text",
            placeholder: "Votre message...",
            value: i,
            onChange: (W) => s(W.target.value),
            onKeyPress: (W) => W.key === "Enter" ? v() : null,
            className: "rounded-l-md"
          }
        ),
        /* @__PURE__ */ R.jsxs(Tt, { onClick: v, className: "rounded-r-md", children: [
          /* @__PURE__ */ R.jsx(El, { className: "h-4 w-4 mr-2" }),
          "Envoyer"
        ] })
      ] })
    ] })
  ] }) : /* @__PURE__ */ R.jsxs(Tt, { onClick: () => r(!0), style: { backgroundColor: (l == null ? void 0 : l.color_primary) || "#3B82F6", color: "#fff" }, children: [
    /* @__PURE__ */ R.jsx(ki, { className: "h-4 w-4 mr-2" }),
    "Besoin d'aide ?"
  ] }) });
};
export {
  qg as ChatbotWidget,
  qg as default
};
