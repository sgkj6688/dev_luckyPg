(function () {
    "use strict";

    (function () {
        var P;
        (function (f) {
            f.u = "window";
            f.l = "self";
        })(P || (P = {}));
        var M = (0, eval)("this");
        var U = M[P.l];
        var b = M[P.u];
        (function () {
            "use strict";

            function q0(mR, mI) {
                q0 =
                    Object.setPrototypeOf ||
                    ({
                        __proto__: [],
                    } instanceof Array &&
                        function (mX, mp) {
                            mX.__proto__ = mp;
                        }) ||
                    function (mX, mp) {
                        for (var mV in mp) {
                            if (Object.prototype.hasOwnProperty.call(mp, mV)) {
                                mX[mV] = mp[mV];
                            }
                        }
                    };
                return q0(mR, mI);
            }
            function q1(mR, mI) {
                if (typeof mI != "function" && mI !== null) {
                    throw new TypeError("Class extends value " + mI + " is not a constructor or null");
                }
                function mX() {
                    this.constructor = mR;
                }
                q0(mR, mI);
                mR.prototype = mI === null ? Object.create(mI) : ((mX.prototype = mI.prototype), new mX());
            }
            function q2() {
                q2 =
                    Object.assign ||
                    function (mR) {
                        for (var mI, mX = 1, mp = arguments.length; mX < mp; mX++) {
                            for (var mV in (mI = arguments[mX])) {
                                if (Object.prototype.hasOwnProperty.call(mI, mV)) {
                                    mR[mV] = mI[mV];
                                }
                            }
                        }
                        return mR;
                    };
                return q2.apply(this, arguments);
            }
            function q3(mR, mI, mX, mp) {
                return new (mX || (mX = Promise))(function (mV, h0) {
                    function h1(h4) {
                        try {
                            h3(mp.next(h4));
                        } catch (h5) {
                            h0(h5);
                        }
                    }
                    function h2(h4) {
                        try {
                            h3(mp.throw(h4));
                        } catch (h5) {
                            h0(h5);
                        }
                    }
                    function h3(h4) {
                        var h5;
                        if (h4.done) {
                            mV(h4.value);
                        } else {
                            ((h5 = h4.value),
                            h5 instanceof mX
                                ? h5
                                : new mX(function (h6) {
                                      h6(h5);
                                  })).then(h1, h2);
                        }
                    }
                    h3((mp = mp.apply(mR, mI || [])).next());
                });
            }
            function q4(mR, mI) {
                var mX;
                var mp;
                var mV;
                var h0;
                var h1 = {
                    label: 0,
                    sent: function () {
                        if (mV[0] & 1) {
                            throw mV[1];
                        }
                        return mV[1];
                    },
                    trys: [],
                    ops: [],
                };
                h0 = {
                    next: h2(0),
                    throw: h2(1),
                    return: h2(2),
                };
                if (typeof Symbol == "function") {
                    h0[Symbol.iterator] = function () {
                        return this;
                    };
                }
                return h0;
                function h2(h3) {
                    return function (h4) {
                        return (function (h5) {
                            if (mX) {
                                throw new TypeError("Generator is already executing.");
                            }
                            for (; h0 && ((h0 = 0), h5[0] && (h1 = 0)), h1; ) {
                                try {
                                    mX = 1;
                                    if (
                                        mp &&
                                        (mV = h5[0] & 2 ? mp.return : h5[0] ? mp.throw || ((mV = mp.return) && mV.call(mp), 0) : mp.next) &&
                                        !(mV = mV.call(mp, h5[1])).done
                                    ) {
                                        return mV;
                                    }
                                    mp = 0;
                                    if (mV) {
                                        h5 = [h5[0] & 2, mV.value];
                                    }
                                    switch (h5[0]) {
                                        case 0:
                                        case 1:
                                            mV = h5;
                                            break;
                                        case 4:
                                            h1.label++;
                                            return {
                                                value: h5[1],
                                                done: false,
                                            };
                                        case 5:
                                            h1.label++;
                                            mp = h5[1];
                                            h5 = [0];
                                            continue;
                                        case 7:
                                            h5 = h1.ops.pop();
                                            h1.trys.pop();
                                            continue;
                                        default:
                                            if (!((mV = (mV = h1.trys).length > 0 && mV[mV.length - 1]) || (h5[0] !== 6 && h5[0] !== 2))) {
                                                h1 = 0;
                                                continue;
                                            }
                                            if (h5[0] === 3 && (!mV || (h5[1] > mV[0] && h5[1] < mV[3]))) {
                                                h1.label = h5[1];
                                                break;
                                            }
                                            if (h5[0] === 6 && h1.label < mV[1]) {
                                                h1.label = mV[1];
                                                mV = h5;
                                                break;
                                            }
                                            if (mV && h1.label < mV[2]) {
                                                h1.label = mV[2];
                                                h1.ops.push(h5);
                                                break;
                                            }
                                            if (mV[2]) {
                                                h1.ops.pop();
                                            }
                                            h1.trys.pop();
                                            continue;
                                    }
                                    h5 = mI.call(mR, h1);
                                } catch (h6) {
                                    h5 = [6, h6];
                                    mp = 0;
                                } finally {
                                    mX = mV = 0;
                                }
                            }
                            if (h5[0] & 5) {
                                throw h5[1];
                            }
                            return {
                                value: h5[0] ? h5[1] : undefined,
                                done: true,
                            };
                        })([h3, h4]);
                    };
                }
            }
            var q5 = Object.create
                ? function (mR, mI, mX, mp) {
                      if (mp === undefined) {
                          mp = mX;
                      }
                      var mV = Object.getOwnPropertyDescriptor(mI, mX);
                      if (!(mV && !("get" in mV ? !mI.__esModule : mV.writable || mV.configurable))) {
                          mV = {
                              enumerable: true,
                              get: function () {
                                  return mI[mX];
                              },
                          };
                      }
                      Object.defineProperty(mR, mp, mV);
                  }
                : function (mR, mI, mX, mp) {
                      if (mp === undefined) {
                          mp = mX;
                      }
                      mR[mp] = mI[mX];
                  };
            function q6(mR) {
                var mI = typeof Symbol == "function" && Symbol.iterator;
                var mX = mI && mR[mI];
                var mp = 0;
                if (mX) {
                    return mX.call(mR);
                }
                if (mR && typeof mR.length == "number") {
                    return {
                        next: function () {
                            if (mR && mp >= mR.length) {
                                mR = undefined;
                            }
                            return {
                                value: mR && mR[mp++],
                                done: !mR,
                            };
                        },
                    };
                }
                throw new TypeError(mI ? "Object is not iterable." : "Symbol.iterator is not defined.");
            }
            function q7(mR, mI) {
                var mX = typeof Symbol == "function" && mR[Symbol.iterator];
                if (!mX) {
                    return mR;
                }
                var mp;
                var mV;
                var h0 = mX.call(mR);
                var h1 = [];
                try {
                    for (; (mI === undefined || mI-- > 0) && !(mp = h0.next()).done; ) {
                        h1.push(mp.value);
                    }
                } catch (h2) {
                    mV = {
                        error: h2,
                    };
                } finally {
                    try {
                        if (mp && !mp.done && (mX = h0.return)) {
                            mX.call(h0);
                        }
                    } finally {
                        if (mV) {
                            throw mV.error;
                        }
                    }
                }
                return h1;
            }
            function q8(mR, mI, mX) {
                if (mX || arguments.length === 2) {
                    for (var mp, mV = 0, h0 = mI.length; mV < h0; mV++) {
                        if (!(!mp && mV in mI)) {
                            if (!mp) {
                                mp = Array.prototype.slice.call(mI, 0, mV);
                            }
                            mp[mV] = mI[mV];
                        }
                    }
                }
                return mR.concat(mp || Array.prototype.slice.call(mI));
            }
            function q9(mR) {
                if (this instanceof q9) {
                    this.v = mR;
                    return this;
                } else {
                    return new q9(mR);
                }
            }
            var qq = Object.create
                ? function (mR, mI) {
                      Object.defineProperty(mR, "default", {
                          enumerable: true,
                          value: mI,
                      });
                  }
                : function (mR, mI) {
                      mR.default = mI;
                  };
            U.__assign = q2;
            U.__asyncDelegator = function (mR) {
                var mI;
                var mX;
                mI = {};
                mp("next");
                mp("throw", function (mV) {
                    throw mV;
                });
                mp("return");
                mI[Symbol.iterator] = function () {
                    return this;
                };
                return mI;
                function mp(mV, h0) {
                    mI[mV] = mR[mV]
                        ? function (h1) {
                              if ((mX = !mX)) {
                                  return {
                                      value: q9(mR[mV](h1)),
                                      done: false,
                                  };
                              } else if (h0) {
                                  return h0(h1);
                              } else {
                                  return h1;
                              }
                          }
                        : h0;
                }
            };
            U.__asyncGenerator = function (mR, mI, mX) {
                if (!Symbol.asyncIterator) {
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                }
                var mp;
                var mV = mX.apply(mR, mI || []);
                var h0 = [];
                mp = {};
                h1("next");
                h1("throw");
                h1("return");
                mp[Symbol.asyncIterator] = function () {
                    return this;
                };
                return mp;
                function h1(h6) {
                    if (mV[h6]) {
                        mp[h6] = function (h7) {
                            return new Promise(function (h8, h9) {
                                if (!(h0.push([h6, h7, h8, h9]) > 1)) {
                                    h2(h6, h7);
                                }
                            });
                        };
                    }
                }
                function h2(h6, h7) {
                    try {
                        (function (h8) {
                            if (h8.value instanceof q9) {
                                Promise.resolve(h8.value.v).then(h3, h4);
                            } else {
                                h5(h0[0][2], h8);
                            }
                        })(mV[h6](h7));
                    } catch (h8) {
                        h5(h0[0][3], h8);
                    }
                }
                function h3(h6) {
                    h2("next", h6);
                }
                function h4(h6) {
                    h2("throw", h6);
                }
                function h5(h6, h7) {
                    h6(h7);
                    h0.shift();
                    if (h0.length) {
                        h2(h0[0][0], h0[0][1]);
                    }
                }
            };
            U.__asyncValues = function (mR) {
                if (!Symbol.asyncIterator) {
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                }
                var mI;
                var mX = mR[Symbol.asyncIterator];
                if (mX) {
                    return mX.call(mR);
                } else {
                    mR = q6(mR);
                    mI = {};
                    mp("next");
                    mp("throw");
                    mp("return");
                    mI[Symbol.asyncIterator] = function () {
                        return this;
                    };
                    return mI;
                }
                function mp(mV) {
                    mI[mV] =
                        mR[mV] &&
                        function (h0) {
                            return new Promise(function (h1, h2) {
                                (function (h3, h4, h5, h6) {
                                    Promise.resolve(h6).then(function (h7) {
                                        h3({
                                            value: h7,
                                            done: h5,
                                        });
                                    }, h4);
                                })(h1, h2, (h0 = mR[mV](h0)).done, h0.value);
                            });
                        };
                }
            };
            U.__await = q9;
            U.__awaiter = q3;
            U.__createBinding = q5;
            U.__decorate = function (mR, mI, mX, mp) {
                var mV;
                var h0 = arguments.length;
                var h1 = h0 < 3 ? mI : mp === null ? (mp = Object.getOwnPropertyDescriptor(mI, mX)) : mp;
                if (typeof Reflect == "object" && typeof Reflect.decorate == "function") {
                    h1 = Reflect.decorate(mR, mI, mX, mp);
                } else {
                    for (var h2 = mR.length - 1; h2 >= 0; h2--) {
                        if ((mV = mR[h2])) {
                            h1 = (h0 < 3 ? mV(h1) : h0 > 3 ? mV(mI, mX, h1) : mV(mI, mX)) || h1;
                        }
                    }
                }
                if (h0 > 3 && h1) {
                    Object.defineProperty(mI, mX, h1);
                }
                return h1;
            };
            U.__exportStar = function (mR, mI) {
                for (var mX in mR) {
                    if (!(mX === "default" || Object.prototype.hasOwnProperty.call(mI, mX))) {
                        q5(mI, mR, mX);
                    }
                }
            };
            U.__extends = q1;
            U.__generator = q4;
            U.__importDefault = function (mR) {
                if (mR && mR.__esModule) {
                    return mR;
                } else {
                    return {
                        default: mR,
                    };
                }
            };
            U.__importStar = function (mR) {
                if (mR && mR.__esModule) {
                    return mR;
                }
                var mI = {};
                if (mR != null) {
                    for (var mX in mR) {
                        if (mX !== "default" && Object.prototype.hasOwnProperty.call(mR, mX)) {
                            q5(mI, mR, mX);
                        }
                    }
                }
                qq(mI, mR);
                return mI;
            };
            U.__makeTemplateObject = function (mR, mI) {
                if (Object.defineProperty) {
                    Object.defineProperty(mR, "raw", {
                        value: mI,
                    });
                } else {
                    mR.raw = mI;
                }
                return mR;
            };
            U.__metadata = function (mR, mI) {
                if (typeof Reflect == "object" && typeof Reflect.metadata == "function") {
                    return Reflect.metadata(mR, mI);
                }
            };
            U.__param = function (mR, mI) {
                return function (mX, mp) {
                    mI(mX, mp, mR);
                };
            };
            U.__read = q7;
            U.__rest = function (mR, mI) {
                var mX = {};
                for (var mp in mR) {
                    if (Object.prototype.hasOwnProperty.call(mR, mp) && mI.indexOf(mp) < 0) {
                        mX[mp] = mR[mp];
                    }
                }
                if (mR != null && typeof Object.getOwnPropertySymbols == "function") {
                    var mV = 0;
                    for (mp = Object.getOwnPropertySymbols(mR); mV < mp.length; mV++) {
                        if (mI.indexOf(mp[mV]) < 0 && Object.prototype.propertyIsEnumerable.call(mR, mp[mV])) {
                            mX[mp[mV]] = mR[mp[mV]];
                        }
                    }
                }
                return mX;
            };
            U.__spread = function () {
                for (var mR = [], mI = 0; mI < arguments.length; mI++) {
                    mR = mR.concat(q7(arguments[mI]));
                }
                return mR;
            };
            U.__spreadArray = q8;
            U.__spreadArrays = function () {
                for (var mR = 0, mI = 0, mX = arguments.length; mI < mX; mI++) {
                    mR += arguments[mI].length;
                }
                var mp = Array(mR);
                var mV = 0;
                for (mI = 0; mI < mX; mI++) {
                    for (var h0 = arguments[mI], h1 = 0, h2 = h0.length; h1 < h2; h1++, mV++) {
                        mp[mV] = h0[h1];
                    }
                }
                return mp;
            };
            U.__values = q6;
            U.__classPrivateFieldGet = function (mR, mI, mX, mp) {
                if (mX === "a" && !mp) {
                    throw new TypeError("Private accessor was defined without a getter");
                }
                if (typeof mI == "function" ? mR !== mI || !mp : !mI.has(mR)) {
                    throw new TypeError("Cannot read private member from an object whose class did not declare it");
                }
                if (mX === "m") {
                    return mp;
                } else if (mX === "a") {
                    return mp.call(mR);
                } else if (mp) {
                    return mp.value;
                } else {
                    return mI.get(mR);
                }
            };
            U.__classPrivateFieldSet = function (mR, mI, mX, mp, mV) {
                if (mp === "m") {
                    throw new TypeError("Private method is not writable");
                }
                if (mp === "a" && !mV) {
                    throw new TypeError("Private accessor was defined without a setter");
                }
                if (typeof mI == "function" ? mR !== mI || !mV : !mI.has(mR)) {
                    throw new TypeError("Cannot write private member to an object whose class did not declare it");
                }
                if (mp === "a") {
                    mV.call(mR, mX);
                } else if (mV) {
                    mV.value = mX;
                } else {
                    mI.set(mR, mX);
                }
                return mX;
            };
            var qC = M !== undefined ? M : b !== undefined ? b : typeof global != "undefined" ? global : U !== undefined ? U : {};
            function qy(mR) {
                return mR && mR.Math == Math && mR;
            }
            var qw =
                qy(typeof M == "object" && M) ||
                qy(typeof b == "object" && b) ||
                qy(typeof U == "object" && U) ||
                qy(typeof qC == "object" && qC) ||
                (function () {
                    return this;
                })() ||
                Function("", "return this")();
            var qP = {};
            function qM(mR) {
                try {
                    return !!mR();
                } catch (mI) {
                    return true;
                }
            }
            var qU = !qM(function () {
                return (
                    Object.defineProperty({}, 1, {
                        get: function () {
                            return 7;
                        },
                    })[1] != 7
                );
            });
            var qb = !qM(function () {
                var mR = function () {}.bind();
                return typeof mR != "function" || mR.hasOwnProperty("prototype");
            });
            var qf = qb;
            var qj = Function.prototype.call;
            var qL = qf
                ? qj.bind(qj)
                : function () {
                      return qj.apply(qj, arguments);
                  };
            var qE = {};
            var qO = {}.propertyIsEnumerable;
            var qm = Object.getOwnPropertyDescriptor;
            var qJ =
                qm &&
                !qO.call(
                    {
                        1: 2,
                    },
                    1
                );
            qE.f = qJ
                ? function (mR) {
                      var mI = qm(this, mR);
                      return !!mI && mI.enumerable;
                  }
                : qO;
            var qS;
            var qg;
            function qW(mR, mI) {
                return {
                    enumerable: !(mR & 1),
                    configurable: !(mR & 2),
                    writable: !(mR & 4),
                    value: mI,
                };
            }
            var qd = qb;
            var qN = Function.prototype;
            var qv = qN.call;
            var qT = qd && qN.bind.bind(qv, qv);
            var qD = qd
                ? qT
                : function (mR) {
                      return function () {
                          return qv.apply(mR, arguments);
                      };
                  };
            var qF = qD;
            var qG = qF({}.toString);
            var qQ = qF("".slice);
            function qA(mR) {
                return qQ(qG(mR), 8, -1);
            }
            var qZ = qM;
            var qz = qA;
            var qY = Object;
            var qx = qD("".split);
            var qB = qZ(function () {
                return !qY("z").propertyIsEnumerable(0);
            })
                ? function (mR) {
                      if (qz(mR) == "String") {
                          return qx(mR, "");
                      } else {
                          return qY(mR);
                      }
                  }
                : qY;
            function qK(mR) {
                return mR == null;
            }
            var qk = qK;
            var qH = TypeError;
            function qR(mR) {
                if (qk(mR)) {
                    throw qH("Can't call method on " + mR);
                }
                return mR;
            }
            var qI = qB;
            var qX = qR;
            function qp(mR) {
                return qI(qX(mR));
            }
            var qV = typeof document == "object" && document.all;
            var i0 = {
                all: qV,
                IS_HTMLDDA: qV === undefined && qV !== undefined,
            };
            var i1 = i0.all;
            var i2 = i0.IS_HTMLDDA
                ? function (mR) {
                      return typeof mR == "function" || mR === i1;
                  }
                : function (mR) {
                      return typeof mR == "function";
                  };
            var i3 = i2;
            var i4 = i0.all;
            var i5 = i0.IS_HTMLDDA
                ? function (mR) {
                      if (typeof mR == "object") {
                          return mR !== null;
                      } else {
                          return i3(mR) || mR === i4;
                      }
                  }
                : function (mR) {
                      if (typeof mR == "object") {
                          return mR !== null;
                      } else {
                          return i3(mR);
                      }
                  };
            var i6 = qw;
            var i7 = i2;
            function i8(mR) {
                if (i7(mR)) {
                    return mR;
                } else {
                    return undefined;
                }
            }
            function i9(mR, mI) {
                if (arguments.length < 2) {
                    return i8(i6[mR]);
                } else {
                    return i6[mR] && i6[mR][mI];
                }
            }
            var iq = qD({}.isPrototypeOf);
            var iC = (typeof navigator != "undefined" && navigator.userAgent + "") || "";
            var iy = qw;
            var iw = iC;
            var iP = iy.process;
            var iM = iy.Deno;
            var iU = (iP && iP.versions) || (iM && iM.version);
            var ib = iU && iU.v8;
            if (ib) {
                qg = (qS = ib.split("."))[0] > 0 && qS[0] < 4 ? 1 : +(qS[0] + qS[1]);
            }
            if (!qg && iw && (!(qS = iw.match(/Edge\/(\d+)/)) || qS[1] >= 74) && (qS = iw.match(/Chrome\/(\d+)/))) {
                qg = +qS[1];
            }
            var ij = qg;
            var iL =
                !!Object.getOwnPropertySymbols &&
                !qM(function () {
                    var mR = Symbol();
                    return !(mR + "") || !(Object(mR) instanceof Symbol) || (!Symbol.sham && ij && ij < 41);
                });
            var iE = iL && !Symbol.sham && typeof Symbol.iterator == "symbol";
            var iO = i9;
            var im = i2;
            var iJ = iq;
            var iS = Object;
            var ig = iE
                ? function (mR) {
                      return typeof mR == "symbol";
                  }
                : function (mR) {
                      var mI = iO("Symbol");
                      return im(mI) && iJ(mI.prototype, iS(mR));
                  };
            var iW = String;
            var id = i2;
            var iN = TypeError;
            function iv(mR) {
                if (id(mR)) {
                    return mR;
                }
                throw iN(
                    (function (mI) {
                        try {
                            return iW(mI);
                        } catch (mX) {
                            return "Object";
                        }
                    })(mR) + " is not a function"
                );
            }
            var iT = qK;
            var iD = qL;
            var iF = i2;
            var iG = i5;
            var iQ = TypeError;
            var iA = {
                exports: {},
            };
            var iZ = qw;
            var iz = Object.defineProperty;
            function iY(mR, mI) {
                try {
                    iz(iZ, mR, {
                        value: mI,
                        configurable: true,
                        writable: true,
                    });
                } catch (mX) {
                    iZ[mR] = mI;
                }
                return mI;
            }
            var ix = iY;
            var iB = "__core-js_shared__";
            var iK = qw[iB] || ix(iB, {});
            var ik = iK;
            (iA.exports = function (mR, mI) {
                return ik[mR] || (ik[mR] = mI !== undefined ? mI : {});
            })("versions", []).push({
                version: "3.29.1",
                mode: "global",
                copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
                license: "https://github.com/zloirock/core-js/blob/v3.29.1/LICENSE",
                source: "https://github.com/zloirock/core-js",
            });
            var iH = iA.exports;
            var iR = qR;
            var iI = Object;
            var iX = qD({}.hasOwnProperty);
            var ip =
                Object.hasOwn ||
                function (mR, mI) {
                    return iX(iI(iR(mR)), mI);
                };
            var iV = qD;
            var C0 = 0;
            var C1 = Math.random();
            var C2 = iV((1).toString);
            function C3(mR) {
                return "Symbol(" + (mR === undefined ? "" : mR) + ")_" + C2(++C0 + C1, 36);
            }
            var C4 = iH;
            var C5 = ip;
            var C6 = C3;
            var C7 = iL;
            var C8 = iE;
            var C9 = qw.Symbol;
            var Cq = C4("wks");
            var CC = C8 ? C9.for || C9 : (C9 && C9.withoutSetter) || C6;
            function Cy(mR) {
                if (!C5(Cq, mR)) {
                    Cq[mR] = C7 && C5(C9, mR) ? C9[mR] : CC("Symbol." + mR);
                }
                return Cq[mR];
            }
            var Cw = qL;
            var CP = i5;
            var CM = ig;
            var CU = TypeError;
            var Cb = Cy("toPrimitive");
            function Cj(mR, mI) {
                if (!CP(mR) || CM(mR)) {
                    return mR;
                }
                var mX;
                var mp = (function (mV, h0) {
                    var h1 = mV[h0];
                    if (iT(h1)) {
                        return undefined;
                    } else {
                        return iv(h1);
                    }
                })(mR, Cb);
                if (mp) {
                    if (mI === undefined) {
                        mI = "default";
                    }
                    mX = Cw(mp, mR, mI);
                    if (!CP(mX) || CM(mX)) {
                        return mX;
                    }
                    throw CU("Can't convert object to primitive value");
                }
                if (mI === undefined) {
                    mI = "number";
                }
                return (function (mV, h0) {
                    var h1;
                    var h2;
                    if (h0 === "string" && iF((h1 = mV.toString)) && !iG((h2 = iD(h1, mV)))) {
                        return h2;
                    }
                    if (iF((h1 = mV.valueOf)) && !iG((h2 = iD(h1, mV)))) {
                        return h2;
                    }
                    if (h0 !== "string" && iF((h1 = mV.toString)) && !iG((h2 = iD(h1, mV)))) {
                        return h2;
                    }
                    throw iQ("Can't convert object to primitive value");
                })(mR, mI);
            }
            var CL = ig;
            function CE(mR) {
                var mI = Cj(mR, "string");
                if (CL(mI)) {
                    return mI;
                } else {
                    return mI + "";
                }
            }
            var CO = i5;
            var Cm = qw.document;
            var CJ = CO(Cm) && CO(Cm.createElement);
            function CS(mR) {
                if (CJ) {
                    return Cm.createElement(mR);
                } else {
                    return {};
                }
            }
            var Cg = CS;
            var CW =
                !qU &&
                !qM(function () {
                    return (
                        Object.defineProperty(Cg("div"), "a", {
                            get: function () {
                                return 7;
                            },
                        }).a != 7
                    );
                });
            var Cd = qU;
            var CN = qL;
            var Cv = qE;
            var CT = qW;
            var CD = qp;
            var CF = CE;
            var CG = ip;
            var CQ = CW;
            var CA = Object.getOwnPropertyDescriptor;
            qP.f = Cd
                ? CA
                : function (mR, mI) {
                      mR = CD(mR);
                      mI = CF(mI);
                      if (CQ) {
                          try {
                              return CA(mR, mI);
                          } catch (mX) {}
                      }
                      if (CG(mR, mI)) {
                          return CT(!CN(Cv.f, mR, mI), mR[mI]);
                      }
                  };
            var CZ = {};
            var Cz =
                qU &&
                qM(function () {
                    return (
                        Object.defineProperty(function () {}, "prototype", {
                            value: 42,
                            writable: false,
                        }).prototype != 42
                    );
                });
            var CY = i5;
            var Cx = String;
            var CB = TypeError;
            function CK(mR) {
                if (CY(mR)) {
                    return mR;
                }
                throw CB(Cx(mR) + " is not an object");
            }
            var Ck = qU;
            var CH = CW;
            var CR = Cz;
            var CI = CK;
            var CX = CE;
            var Cp = TypeError;
            var CV = Object.defineProperty;
            var y0 = Object.getOwnPropertyDescriptor;
            var y1 = "enumerable";
            var y2 = "configurable";
            var y3 = "writable";
            CZ.f = Ck
                ? CR
                    ? function (mR, mI, mX) {
                          CI(mR);
                          mI = CX(mI);
                          CI(mX);
                          if (typeof mR == "function" && mI === "prototype" && "value" in mX && y3 in mX && !mX[y3]) {
                              var mp = y0(mR, mI);
                              if (mp && mp[y3]) {
                                  mR[mI] = mX.value;
                                  mX = {
                                      configurable: y2 in mX ? mX[y2] : mp[y2],
                                      enumerable: y1 in mX ? mX[y1] : mp[y1],
                                      writable: false,
                                  };
                              }
                          }
                          return CV(mR, mI, mX);
                      }
                    : CV
                : function (mR, mI, mX) {
                      CI(mR);
                      mI = CX(mI);
                      CI(mX);
                      if (CH) {
                          try {
                              return CV(mR, mI, mX);
                          } catch (mp) {}
                      }
                      if ("get" in mX || "set" in mX) {
                          throw Cp("Accessors not supported");
                      }
                      if ("value" in mX) {
                          mR[mI] = mX.value;
                      }
                      return mR;
                  };
            var y4 = CZ;
            var y5 = qW;
            var y6 = qU
                ? function (mR, mI, mX) {
                      return y4.f(mR, mI, y5(1, mX));
                  }
                : function (mR, mI, mX) {
                      mR[mI] = mX;
                      return mR;
                  };
            var y7 = {
                exports: {},
            };
            var y8 = qU;
            var y9 = Function.prototype;
            var yq = y8 && Object.getOwnPropertyDescriptor;
            var yC = ip(y9, "name");
            var yy = {
                EXISTS: yC,
                PROPER: yC && false,
                CONFIGURABLE: yC && (!y8 || (y8 && yq(y9, "name").configurable)),
            };
            var yw = i2;
            var yP = iK;
            var yM = qD(Function.toString);
            if (!yw(yP.inspectSource)) {
                yP.inspectSource = function (mR) {
                    return yM(mR);
                };
            }
            var yU;
            var yb;
            var yj;
            var yL = yP.inspectSource;
            var yE = i2;
            var yO = qw.WeakMap;
            var ym = yE(yO) && /native code/.test(yO + "");
            var yJ = C3;
            var yS = iH("keys");
            function yg(mR) {
                return yS[mR] || (yS[mR] = yJ(mR));
            }
            var yW = {};
            var yd = ym;
            var yN = qw;
            var yv = i5;
            var yT = y6;
            var yD = ip;
            var yF = iK;
            var yG = yg;
            var yQ = yW;
            var yA = "Object already initialized";
            var yZ = yN.TypeError;
            var yz = yN.WeakMap;
            if (yd || yF.state) {
                var yY = yF.state || (yF.state = new yz());
                yY.get = yY.get;
                yY.has = yY.has;
                yY.set = yY.set;
                yU = function (mR, mI) {
                    if (yY.has(mR)) {
                        throw yZ(yA);
                    }
                    mI.facade = mR;
                    yY.set(mR, mI);
                    return mI;
                };
                yb = function (mR) {
                    return yY.get(mR) || {};
                };
                yj = function (mR) {
                    return yY.has(mR);
                };
            } else {
                var yx = yG("state");
                yQ[yx] = true;
                yU = function (mR, mI) {
                    if (yD(mR, yx)) {
                        throw yZ(yA);
                    }
                    mI.facade = mR;
                    yT(mR, yx, mI);
                    return mI;
                };
                yb = function (mR) {
                    if (yD(mR, yx)) {
                        return mR[yx];
                    } else {
                        return {};
                    }
                };
                yj = function (mR) {
                    return yD(mR, yx);
                };
            }
            var yB = {
                set: yU,
                get: yb,
                has: yj,
                enforce: function (mR) {
                    if (yj(mR)) {
                        return yb(mR);
                    } else {
                        return yU(mR, {});
                    }
                },
                getterFor: function (mR) {
                    return function (mI) {
                        var mX;
                        if (!yv(mI) || (mX = yb(mI)).type !== mR) {
                            throw yZ("Incompatible receiver, " + mR + " required");
                        }
                        return mX;
                    };
                },
            };
            var yK = qD;
            var yk = qM;
            var yH = i2;
            var yR = ip;
            var yI = qU;
            var yX = yy.CONFIGURABLE;
            var yp = yL;
            var yV = yB.enforce;
            var w0 = yB.get;
            var w1 = String;
            var w2 = Object.defineProperty;
            var w3 = yK("".slice);
            var w4 = yK("".replace);
            var w5 = yK([].join);
            var w6 =
                yI &&
                !yk(function () {
                    return (
                        w2(function () {}, "length", {
                            value: 8,
                        }).length !== 8
                    );
                });
            var w7 = (String + "").split("String");
            var w8 = (y7.exports = function (mR, mI, mX) {
                if (w3(w1(mI), 0, 7) === "Symbol(") {
                    mI = "[" + w4(w1(mI), /^Symbol\(([^)]*)\)/, "$1") + "]";
                }
                if (mX && mX.getter) {
                    mI = "get " + mI;
                }
                if (mX && mX.setter) {
                    mI = "set " + mI;
                }
                if (!yR(mR, "name") || (yX && mR.name !== mI)) {
                    if (yI) {
                        w2(mR, "name", {
                            value: mI,
                            configurable: true,
                        });
                    } else {
                        mR.name = mI;
                    }
                }
                if (w6 && mX && yR(mX, "arity") && mR.length !== mX.arity) {
                    w2(mR, "length", {
                        value: mX.arity,
                    });
                }
                try {
                    if (mX && yR(mX, "constructor") && mX.constructor) {
                        if (yI) {
                            w2(mR, "prototype", {
                                writable: false,
                            });
                        }
                    } else if (mR.prototype) {
                        mR.prototype = undefined;
                    }
                } catch (mV) {}
                var mp = yV(mR);
                if (!yR(mp, "source")) {
                    mp.source = w5(w7, typeof mI == "string" ? mI : "");
                }
                return mR;
            });
            Function.prototype.toString = w8(function () {
                return (yH(this) && w0(this).source) || yp(this);
            }, "toString");
            var w9 = y7.exports;
            var wq = i2;
            var wC = CZ;
            var wy = w9;
            var ww = iY;
            var wP = {};
            var wM = Math.ceil;
            var wU = Math.floor;
            var wb =
                Math.trunc ||
                function (mR) {
                    var mI = +mR;
                    return (mI > 0 ? wU : wM)(mI);
                };
            var wj = wb;
            function wL(mR) {
                var mI = +mR;
                if (mI != mI || mI === 0) {
                    return 0;
                } else {
                    return wj(mI);
                }
            }
            var wE = wL;
            var wO = Math.max;
            var wm = Math.min;
            var wJ = wL;
            var wS = Math.min;
            function wg(mR) {
                if (mR > 0) {
                    return wS(wJ(mR), 9007199254740991);
                } else {
                    return 0;
                }
            }
            var wW = wg;
            var wd = qp;
            function wN(mR) {
                return function (mI, mX, mp) {
                    var mV;
                    var h0 = wd(mI);
                    var h1 = wW(h0.length);
                    var h2 = (function (h3, h4) {
                        var h5 = wE(h3);
                        if (h5 < 0) {
                            return wO(h5 + h4, 0);
                        } else {
                            return wm(h5, h4);
                        }
                    })(mp, h1);
                    if (mR && mX != mX) {
                        for (; h1 > h2; ) {
                            if ((mV = h0[h2++]) != mV) {
                                return true;
                            }
                        }
                    } else {
                        for (; h1 > h2; h2++) {
                            if ((mR || h2 in h0) && h0[h2] === mX) {
                                return mR || h2 || 0;
                            }
                        }
                    }
                    return !mR && -1;
                };
            }
            var wv = {
                includes: wN(true),
                indexOf: wN(false),
            };
            var wT = ip;
            var wD = qp;
            var wF = wv.indexOf;
            var wG = yW;
            var wQ = qD([].push);
            function wA(mR, mI) {
                var mX;
                var mp = wD(mR);
                var mV = 0;
                var h0 = [];
                for (mX in mp) {
                    if (!wT(wG, mX) && wT(mp, mX)) {
                        wQ(h0, mX);
                    }
                }
                for (; mI.length > mV; ) {
                    if (wT(mp, (mX = mI[mV++]))) {
                        if (!~wF(h0, mX)) {
                            wQ(h0, mX);
                        }
                    }
                }
                return h0;
            }
            var wZ = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
            var wz = wA;
            var wY = wZ.concat("length", "prototype");
            wP.f =
                Object.getOwnPropertyNames ||
                function (mR) {
                    return wz(mR, wY);
                };
            var wx = {
                f: Object.getOwnPropertySymbols,
            };
            var wB = i9;
            var wK = wP;
            var wk = wx;
            var wH = CK;
            var wR = qD([].concat);
            var wI =
                wB("Reflect", "ownKeys") ||
                function (mR) {
                    var mI = wK.f(wH(mR));
                    var mX = wk.f;
                    if (mX) {
                        return wR(mI, mX(mR));
                    } else {
                        return mI;
                    }
                };
            var wX = ip;
            var wp = wI;
            var wV = qP;
            var P0 = CZ;
            var P1 = qM;
            var P2 = i2;
            var P3 = /#|\.prototype\./;
            function P4(mR, mI) {
                var mX = P6[P5(mR)];
                return mX == P8 || (mX != P7 && (P2(mI) ? P1(mI) : !!mI));
            }
            var P5 = (P4.normalize = function (mR) {
                return (mR + "").replace(P3, ".").toLowerCase();
            });
            var P6 = (P4.data = {});
            var P7 = (P4.NATIVE = "N");
            var P8 = (P4.POLYFILL = "P");
            var P9 = P4;
            var Pq = qw;
            var PC = qP.f;
            var Py = y6;
            function Pw(mR, mI, mX, mp) {
                if (!mp) {
                    mp = {};
                }
                var mV = mp.enumerable;
                var h0 = mp.name !== undefined ? mp.name : mI;
                if (wq(mX)) {
                    wy(mX, h0, mp);
                }
                if (mp.global) {
                    if (mV) {
                        mR[mI] = mX;
                    } else {
                        ww(mI, mX);
                    }
                } else {
                    try {
                        if (mp.unsafe) {
                            if (mR[mI]) {
                                mV = true;
                            }
                        } else {
                            delete mR[mI];
                        }
                    } catch (h1) {}
                    if (mV) {
                        mR[mI] = mX;
                    } else {
                        wC.f(mR, mI, {
                            value: mX,
                            enumerable: false,
                            configurable: !mp.nonConfigurable,
                            writable: !mp.nonWritable,
                        });
                    }
                }
                return mR;
            }
            var PP = iY;
            function PM(mR, mI, mX) {
                for (var mp = wp(mI), mV = P0.f, h0 = wV.f, h1 = 0; h1 < mp.length; h1++) {
                    var h2 = mp[h1];
                    if (!(wX(mR, h2) || (mX && wX(mX, h2)))) {
                        mV(mR, h2, h0(mI, h2));
                    }
                }
            }
            var PU = P9;
            function Pb(mR, mI) {
                var mX;
                var mp;
                var mV;
                var h0;
                var h1;
                var h2 = mR.target;
                var h3 = mR.global;
                var h4 = mR.stat;
                if ((mX = h3 ? Pq : h4 ? Pq[h2] || PP(h2, {}) : (Pq[h2] || {}).prototype)) {
                    for (mp in mI) {
                        h0 = mI[mp];
                        mV = mR.dontCallGetSet ? (h1 = PC(mX, mp)) && h1.value : mX[mp];
                        if (!PU(h3 ? mp : h2 + (h4 ? "." : "#") + mp, mR.forced) && mV !== undefined) {
                            if (typeof h0 == typeof mV) {
                                continue;
                            }
                            PM(h0, mV);
                        }
                        if (mR.sham || (mV && mV.sham)) {
                            Py(h0, "sham", true);
                        }
                        Pw(mX, mp, h0, mR);
                    }
                }
            }
            var Pj = {};
            var PL = wA;
            var PE = wZ;
            var PO =
                Object.keys ||
                function (mR) {
                    return PL(mR, PE);
                };
            var Pm = qU;
            var PJ = Cz;
            var PS = CZ;
            var Pg = CK;
            var PW = qp;
            var Pd = PO;
            Pj.f =
                Pm && !PJ
                    ? Object.defineProperties
                    : function (mR, mI) {
                          Pg(mR);
                          for (var mX, mp = PW(mI), mV = Pd(mI), h0 = mV.length, h1 = 0; h0 > h1; ) {
                              PS.f(mR, (mX = mV[h1++]), mp[mX]);
                          }
                          return mR;
                      };
            var PN;
            var Pv = i9("document", "documentElement");
            var PT = CK;
            var PD = Pj;
            var PF = wZ;
            var PG = yW;
            var PQ = Pv;
            var PA = CS;
            var PZ = "prototype";
            var Pz = "script";
            var PY = yg("IE_PROTO");
            function Px() {}
            function PB(mR) {
                return "<" + Pz + ">" + mR + "</" + Pz + ">";
            }
            function PK(mR) {
                mR.write(PB(""));
                mR.close();
                var mI = mR.parentWindow.Object;
                mR = null;
                return mI;
            }
            function Pk() {
                try {
                    PN = new ActiveXObject("htmlfile");
                } catch (mV) {}
                var mR;
                var mI;
                var mX;
                Pk =
                    typeof document != "undefined"
                        ? document.domain && PN
                            ? PK(PN)
                            : ((mI = PA("iframe")),
                              (mX = "java" + Pz + ":"),
                              (mI.style.display = "none"),
                              PQ.appendChild(mI),
                              (mI.src = mX + ""),
                              (mR = mI.contentWindow.document).open(),
                              mR.write(PB("document.F=Object")),
                              mR.close(),
                              mR.F)
                        : PK(PN);
                for (var mp = PF.length; mp--; ) {
                    delete Pk[PZ][PF[mp]];
                }
                return Pk();
            }
            PG[PY] = true;
            var PH = Cy;
            var PR =
                Object.create ||
                function (mR, mI) {
                    var mX;
                    if (mR !== null) {
                        Px[PZ] = PT(mR);
                        mX = new Px();
                        Px[PZ] = null;
                        mX[PY] = mR;
                    } else {
                        mX = Pk();
                    }
                    if (mI === undefined) {
                        return mX;
                    } else {
                        return PD.f(mX, mI);
                    }
                };
            var PI = CZ.f;
            var PX = PH("unscopables");
            var Pp = Array.prototype;
            if (Pp[PX] == null) {
                PI(Pp, PX, {
                    configurable: true,
                    value: PR(null),
                });
            }
            var PV;
            var M0 = wv.includes;
            Pb(
                {
                    target: "Array",
                    proto: true,
                    forced: qM(function () {
                        return ![,].includes();
                    }),
                },
                {
                    includes: function (mR) {
                        return M0(this, mR, arguments.length > 1 ? arguments[1] : undefined);
                    },
                }
            );
            PV = "includes";
            Pp[PX][PV] = true;
            var M1 = qw;
            var M2 = qD;
            function M3(mR, mI) {
                return M2(M1[mR].prototype[mI]);
            }
            M3("Array", "includes");
            var M4 = {
                [Cy("toStringTag")]: "z",
            };
            var M5 = M4 + "" == "[object z]";
            var M6 = i2;
            var M7 = qA;
            var M8 = Cy("toStringTag");
            var M9 = Object;
            var Mq =
                M7(
                    (function () {
                        return arguments;
                    })()
                ) == "Arguments";
            var MC = M5
                ? M7
                : function (mR) {
                      var mI;
                      var mX;
                      var mp;
                      if (mR === undefined) {
                          return "Undefined";
                      } else if (mR === null) {
                          return "Null";
                      } else if (
                          typeof (mX = (function (mV, h0) {
                              try {
                                  return mV[h0];
                              } catch (h1) {}
                          })((mI = M9(mR)), M8)) == "string"
                      ) {
                          return mX;
                      } else if (Mq) {
                          return M7(mI);
                      } else if ((mp = M7(mI)) == "Object" && M6(mI.callee)) {
                          return "Arguments";
                      } else {
                          return mp;
                      }
                  };
            var My = String;
            function Mw(mR) {
                if (MC(mR) === "Symbol") {
                    throw TypeError("Cannot convert a Symbol value to a string");
                }
                return My(mR);
            }
            var MP = wL;
            var MM = Mw;
            var MU = qR;
            var Mb = RangeError;
            var Mj = qD;
            var ML = wg;
            var ME = Mw;
            var MO = qR;
            var Mm = Mj(function (mR) {
                var mI = MM(MU(this));
                var mX = "";
                var mp = MP(mR);
                if (mp < 0 || mp == Infinity) {
                    throw Mb("Wrong number of repetitions");
                }
                for (; mp > 0; (mp >>>= 1) && (mI += mI)) {
                    if (mp & 1) {
                        mX += mI;
                    }
                }
                return mX;
            });
            var MJ = Mj("".slice);
            var MS = Math.ceil;
            function Mg(mR) {
                return function (mI, mX, mp) {
                    var mV;
                    var h0;
                    var h1 = ME(MO(mI));
                    var h2 = ML(mX);
                    var h3 = h1.length;
                    var h4 = mp === undefined ? " " : ME(mp);
                    if (h2 <= h3 || h4 == "") {
                        return h1;
                    } else {
                        if ((h0 = Mm(h4, MS((mV = h2 - h3) / h4.length))).length > mV) {
                            h0 = MJ(h0, 0, mV);
                        }
                        if (mR) {
                            return h1 + h0;
                        } else {
                            return h0 + h1;
                        }
                    }
                };
            }
            var io = {
                start: Mg(false),
                end: Mg(true),
            };
            var MW = /Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(iC);
            var Md = io.start;
            Pb(
                {
                    target: "String",
                    proto: true,
                    forced: MW,
                },
                {
                    padStart: function (mR) {
                        return Md(this, mR, arguments.length > 1 ? arguments[1] : undefined);
                    },
                }
            );
            M3("String", "padStart");
            var MN = io.end;
            Pb(
                {
                    target: "String",
                    proto: true,
                    forced: MW,
                },
                {
                    padEnd: function (mR) {
                        return MN(this, mR, arguments.length > 1 ? arguments[1] : undefined);
                    },
                }
            );
            M3("String", "padEnd");
            var Mv = qU;
            var MT = qD;
            var MD = PO;
            var MF = qp;
            var MG = MT(qE.f);
            var MQ = MT([].push);
            function MA(mR) {
                return function (mI) {
                    for (var mX, mp = MF(mI), mV = MD(mp), h0 = mV.length, h1 = 0, h2 = []; h0 > h1; ) {
                        mX = mV[h1++];
                        if (!(Mv && !MG(mp, mX))) {
                            MQ(h2, mR ? [mX, mp[mX]] : mp[mX]);
                        }
                    }
                    return h2;
                };
            }
            var MZ = {
                entries: MA(true),
                values: MA(false),
            };
            var Mz = MZ.values;
            Pb(
                {
                    target: "Object",
                    stat: true,
                },
                {
                    values: function (mR) {
                        return Mz(mR);
                    },
                }
            );
            var MY = qw;
            MY.Object.values;
            var Mx = MZ.entries;
            Pb(
                {
                    target: "Object",
                    stat: true,
                },
                {
                    entries: function (mR) {
                        return Mx(mR);
                    },
                }
            );
            MY.Object.entries;
            var MB = CE;
            var MK = CZ;
            var Mk = qW;
            var MH = wI;
            var MR = qp;
            var MI = qP;
            function MX(mR, mI, mX) {
                var mp = MB(mI);
                if (mp in mR) {
                    MK.f(mR, mp, Mk(0, mX));
                } else {
                    mR[mp] = mX;
                }
            }
            Pb(
                {
                    target: "Object",
                    stat: true,
                    sham: !qU,
                },
                {
                    getOwnPropertyDescriptors: function (mR) {
                        for (var mI, mX, mp = MR(mR), mV = MI.f, h0 = MH(mp), h1 = {}, h2 = 0; h0.length > h2; ) {
                            if ((mX = mV(mp, (mI = h0[h2++]))) !== undefined) {
                                MX(h1, mI, mX);
                            }
                        }
                        return h1;
                    },
                }
            );
            MY.Object.getOwnPropertyDescriptors;
            var Mp;
            var MV;
            var U0 = {
                exports: {},
            };
            Mp = U0;
            MV = U0.exports;
            (function (mR, mI) {
                var mX = "function";
                var mp = "object";
                var mV = "string";
                var h0 = "model";
                var h1 = "name";
                var h2 = "type";
                var h3 = "vendor";
                var h4 = "version";
                var h5 = "architecture";
                var h6 = "console";
                var h7 = "mobile";
                var h8 = "tablet";
                var h9 = "smarttv";
                var hq = "wearable";
                var hC = "embedded";
                var hy = {
                    extend: function (hL, hE) {
                        var hO = {};
                        for (var hm in hL) {
                            if (hE[hm] && hE[hm].length % 2 == 0) {
                                hO[hm] = hE[hm].concat(hL[hm]);
                            } else {
                                hO[hm] = hL[hm];
                            }
                        }
                        return hO;
                    },
                    has: function (hL, hE) {
                        return typeof hL === mV && hE.toLowerCase().indexOf(hL.toLowerCase()) !== -1;
                    },
                    lowerize: function (hL) {
                        return hL.toLowerCase();
                    },
                    major: function (hL) {
                        if (typeof hL === mV) {
                            return hL.replace(/[^\d\.]/g, "").split(".")[0];
                        } else {
                            return mI;
                        }
                    },
                    trim: function (hL, hE) {
                        hL = hL.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
                        if (hE === undefined) {
                            return hL;
                        } else {
                            return hL.substring(0, 255);
                        }
                    },
                };
                var hw = {
                    rgx: function (hL, hE) {
                        for (var hO, hm, hJ, hS, hg, hW, hd = 0; hd < hE.length && !hg; ) {
                            var hN = hE[hd];
                            var hv = hE[hd + 1];
                            for (hO = hm = 0; hO < hN.length && !hg; ) {
                                if ((hg = hN[hO++].exec(hL))) {
                                    for (hJ = 0; hJ < hv.length; hJ++) {
                                        hW = hg[++hm];
                                        if (typeof (hS = hv[hJ]) === mp && hS.length > 0) {
                                            if (hS.length == 2) {
                                                if (typeof hS[1] == mX) {
                                                    this[hS[0]] = hS[1].call(this, hW);
                                                } else {
                                                    this[hS[0]] = hS[1];
                                                }
                                            } else if (hS.length == 3) {
                                                if (typeof hS[1] !== mX || (hS[1].exec && hS[1].test)) {
                                                    this[hS[0]] = hW ? hW.replace(hS[1], hS[2]) : mI;
                                                } else {
                                                    this[hS[0]] = hW ? hS[1].call(this, hW, hS[2]) : mI;
                                                }
                                            } else if (hS.length == 4) {
                                                this[hS[0]] = hW ? hS[3].call(this, hW.replace(hS[1], hS[2])) : mI;
                                            }
                                        } else {
                                            this[hS] = hW || mI;
                                        }
                                    }
                                }
                            }
                            hd += 2;
                        }
                    },
                    str: function (hL, hE) {
                        for (var hO in hE) {
                            if (typeof hE[hO] === mp && hE[hO].length > 0) {
                                for (var hm = 0; hm < hE[hO].length; hm++) {
                                    if (hy.has(hE[hO][hm], hL)) {
                                        if (hO === "?") {
                                            return mI;
                                        } else {
                                            return hO;
                                        }
                                    }
                                }
                            } else if (hy.has(hE[hO], hL)) {
                                if (hO === "?") {
                                    return mI;
                                } else {
                                    return hO;
                                }
                            }
                        }
                        return hL;
                    },
                };
                var hP = {
                    browser: {
                        oldSafari: {
                            version: {
                                "1.0": "/8",
                                1.2: "/1",
                                1.3: "/3",
                                "2.0": "/412",
                                "2.0.2": "/416",
                                "2.0.3": "/417",
                                "2.0.4": "/419",
                                "?": "/",
                            },
                        },
                        oldEdge: {
                            version: {
                                0.1: "12.",
                                21: "13.",
                                31: "14.",
                                39: "15.",
                                41: "16.",
                                42: "17.",
                                44: "18.",
                            },
                        },
                    },
                    os: {
                        windows: {
                            version: {
                                ME: "4.90",
                                "NT 3.11": "NT3.51",
                                "NT 4.0": "NT4.0",
                                2000: "NT 5.0",
                                XP: ["NT 5.1", "NT 5.2"],
                                Vista: "NT 6.0",
                                7: "NT 6.1",
                                8: "NT 6.2",
                                8.1: "NT 6.3",
                                10: ["NT 6.4", "NT 10.0"],
                                RT: "ARM",
                            },
                        },
                    },
                };
                var hM = {
                    browser: [
                        // [/\b(?:crmo|crios)\/([\w\.]+)/i],
                        // [h4, [h1, dB(0x386) + dK(0x49e)]],
                        // [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                        // [h4, [h1, dB(0x224d) + "e"]],
                        // [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]{3,6})\b.+version\/([\w\.-]+)/i, /(opera)(?:.+version\/|[\/\s]+)([\w\.]+)/i],
                        // [h1, h4],
                        // [/opios[\/\s]+([\w\.]+)/i],
                        // [h4, [h1, dB(0x1f4f) + dB(0x1bb0) + dK(0x1a53) + "i"]],
                        // [/\sopr\/([\w\.]+)/i],
                        // [h4, [h1, dK(0x1f4f) + "ra"]],
                        // [
                        //     /(kindle)\/([\w\.]+)/i,
                        //     /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i,
                        //     /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i,
                        //     /(ba?idubrowser)[\/\s]?([\w\.]+)/i,
                        //     /(?:ms|\()(ie)\s([\w\.]+)/i,
                        //     /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i,
                        //     /(rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([\w\.]+)/i,
                        //     /(weibo)__([\d\.]+)/i,
                        // ],
                        // [h1, h4],
                        // [/(?:[\s\/]uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
                        // [h4, [h1, dB(0xfb3) + dB(0x14a5) + dB(0x135b)]],
                        // [/(?:windowswechat)?\sqbcore\/([\w\.]+)\b.*(?:windowswechat)?/i],
                        // [h4, [h1, dK(0x16b5) + dB(0x1158) + dB(0x64b) + dB(0x13dd) + dK(0x694) + dK(0x523) + "p"]],
                        // [/micromessenger\/([\w\.]+)/i],
                        // [h4, [h1, dB(0x16b5) + dK(0x1158)]],
                        // [/konqueror\/([\w\.]+)/i],
                        // [h4, [h1, dB(0xcaa) + dK(0x229a) + dB(0xd72)]],
                        // [/trident.+rv[:\s]([\w\.]{1,9})\b.+like\sgecko/i],
                        // [h4, [h1, "IE"]],
                        // [/yabrowser\/([\w\.]+)/i],
                        // [h4, [h1, dK(0xef7) + dK(0x11bd)]],
                        // [/(avast|avg)\/([\w\.]+)/i],
                        // [[h1, /(.+)/, dB(0x5b8) + dK(0x1112) + dB(0x120d) + dB(0x1a9e) + dB(0x24b) + "er"], h4],
                        // [/focus\/([\w\.]+)/i],
                        // [h4, [h1, dK(0xae8) + dK(0x1a15) + dK(0x754) + dB(0x1317) + "s"]],
                        // [/opt\/([\w\.]+)/i],
                        // [h4, [h1, dB(0x1f4f) + dB(0x1bb0) + dK(0x5de) + "ch"]],
                        // [/coc_coc_browser\/([\w\.]+)/i],
                        // [h4, [h1, dB(0x1a1a) + dK(0xe35) + "c"]],
                        // [/dolfin\/([\w\.]+)/i],
                        // [h4, [h1, dK(0xffa) + dK(0x13be) + "n"]],
                        // [/coast\/([\w\.]+)/i],
                        // [h4, [h1, dB(0x1f4f) + dK(0x1bb0) + dB(0x1f11) + "st"]],
                        // [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                        // [h4, [h1, dB(0xb26) + dK(0xf61) + dK(0x14a5) + dB(0x135b)]],
                        // [/fxios\/([\w\.-]+)/i],
                        // [h4, [h1, dK(0xae8) + dK(0x1a15) + "x"]],
                        // [/(qihu|qhbrowser|qihoobrowser|360browser)/i],
                        // [[h1, dK(0x4ad) + dK(0x1a9e) + dB(0x24b) + "er"]],
                        // [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],
                        // [[h1, /(.+)/, dB(0x5b8) + dB(0x646) + dK(0x1b79) + "r"], h4],
                        // [/(comodo_dragon)\/([\w\.]+)/i],
                        // [[h1, /_/g, "\x20"], h4],
                        // [
                        //     /\s(electron)\/([\w\.]+)\ssafari/i,
                        //     /(tesla)(?:\sqtcarbrowser|\/(20[12]\d\.[\w\.-]+))/i,
                        //     /m?(qqbrowser|baiduboxapp|2345Explorer)[\/\s]?([\w\.]+)/i,
                        // ],
                        // [h1, h4],
                        // [/(MetaSr)[\/\s]?([\w\.]+)/i, /(LBBROWSER)/i],
                        // [h1],
                        // [/;fbav\/([\w\.]+);/i],
                        // [h4, [h1, dK(0xc68) + dK(0x629) + "ok"]],
                        // [/FBAN\/FBIOS|FB_IAB\/FB4A/i],
                        // [[h1, dK(0xc68) + dK(0x629) + "ok"]],
                        // [/safari\s(line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/\s]([\w\.-]+)/i],
                        // [h1, h4],
                        // [/\bgsa\/([\w\.]+)\s.*safari\//i],
                        // [h4, [h1, dB(0x206)]],
                        // [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                        // [h4, [h1, dB(0x386) + dK(0x49e) + dK(0x20d6) + dK(0x1afb) + dK(0x13ce)]],
                        // [/\swv\).+(chrome)\/([\w\.]+)/i],
                        // [[h1, dB(0x386) + dB(0x49e) + dB(0xbfd) + dB(0x2189) + "ew"], h4],
                        // [/droid.+\sversion\/([\w\.]+)\b.+(?:mobile\ssafari|safari)/i],
                        // [h4, [h1, dB(0xd6e) + dB(0x22d1) + dK(0xd6a) + dB(0x14a5) + dB(0x135b)]],
                        // [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
                        // [h1, h4],
                        // [/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],
                        // [h4, [h1, dB(0x1d00) + dK(0x1f35) + dK(0x15df) + dK(0x1ec0) + "i"]],
                        // [/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],
                        // [h4, h1],
                        // [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                        // [h1, [h4, hw[dB(0x1001)], hP[dB(0xa39) + dB(0x1b79) + "r"][dB(0x8f1) + dB(0xb31) + dB(0x1c7a)][dB(0x2261) + dK(0xef3) + "n"]]],
                        // [/(webkit|khtml)\/([\w\.]+)/i],
                        // [h1, h4],
                        // [/(navigator|netscape)\/([\w\.-]+)/i],
                        // [[h1, dK(0x1e04) + dK(0x1914) + "pe"], h4],
                        // [/ile\svr;\srv:([\w\.]+)\).+firefox/i],
                        // [h4, [h1, dK(0xae8) + dK(0x1a15) + dK(0xa3c) + dB(0x1c0b) + dK(0x1667)]],
                        // [
                        //     /ekiohf.+(flow)\/([\w\.]+)/i,
                        //     /(swiftfox)/i,
                        //     /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                        //     /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i,
                        //     /(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i,
                        //     /(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i,
                        //     /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
                        //     /(links)\s\(([\w\.]+)/i,
                        //     /(gobrowser)\/?([\w\.]*)/i,
                        //     /(ice\s?browser)\/v?([\w\._]+)/i,
                        //     /(mosaic)[\/\s]([\w\.]+)/i,
                        // ],
                        // [h1, h4],
                    ],
                    cpu: [
                        // [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                        // [[h5, dB(0x395) + "64"]],
                        // [/(ia32(?=;))/i],
                        // [[h5, hy[dK(0x1c77) + dB(0x20a7) + "ze"]]],
                        // [/((?:i[346]|x)86)[;\)]/i],
                        // [[h5, dB(0x1f81) + "2"]],
                        // [/\b(aarch64|armv?8e?l?)\b/i],
                        // [[h5, dB(0xf00) + "64"]],
                        // [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                        // [[h5, dK(0xf00) + "hf"]],
                        // [/windows\s(ce|mobile);\sppc;/i],
                        // [[h5, dK(0xf00)]],
                        // [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                        // [[h5, /ower/, "", hy[dK(0x1c77) + dK(0x20a7) + "ze"]]],
                        // [/(sun4\w)[;\)]/i],
                        // [[h5, dK(0x229b) + "rc"]],
                        // [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                        // [[h5, hy[dK(0x1c77) + dK(0x20a7) + "ze"]]],
                    ],
                    device: [
                        // [/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus\s10)/i],
                        // [h0, [h3, dK(0x1e21) + dK(0x3c4) + "g"], [h2, h8]],
                        // [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy\snexus)/i, /\ssamsung[\s-]([\w-]+)/i, /sec-(sgh\w+)/i],
                        // [h0, [h3, dK(0x1e21) + dK(0x3c4) + "g"], [h2, h7]],
                        // [/\((ip(?:hone|od)[\s\w]*);/i],
                        // [h0, [h3, dK(0x789) + "le"], [h2, h7]],
                        // [/\((ipad);[\w\s\),;-]+apple/i, /applecoremedia\/[\w\.]+\s\((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                        // [h0, [h3, dB(0x789) + "le"], [h2, h8]],
                        // [/\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i],
                        // [h0, [h3, dB(0xe28) + dB(0x1011)], [h2, h8]],
                        // [
                        //     /d\/huawei([\w\s-]+)[;\)]/i,
                        //     /\b(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i,
                        //     /\b(\w{2,4}-[atu][ln][01259][019])[;\)\s]/i,
                        // ],
                        // [h0, [h3, dK(0xe28) + dK(0x1011)], [h2, h7]],
                        // [
                        //     /\b(poco[\s\w]+)(?:\sbuild|\))/i,
                        //     /\b;\s(\w+)\sbuild\/hm\1/i,
                        //     /\b(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i,
                        //     /\b(redmi[\s\-_]?(?:note|k)?[\w\s_]+)(?:\sbuild|\))/i,
                        //     /\b(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i,
                        // ],
                        // [
                        //     [h0, /_/g, "\x20"],
                        //     [h3, dB(0x22ad) + dB(0xdc6)],
                        //     [h2, h7],
                        // ],
                        // [/\b(mi[\s\-_]?(?:pad)(?:[\w\s_]+))(?:\sbuild|\))/i],
                        // [
                        //     [h0, /_/g, "\x20"],
                        //     [h3, dK(0x22ad) + dB(0xdc6)],
                        //     [h2, h8],
                        // ],
                        // [/;\s(\w+)\sbuild.+\soppo/i, /\s(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i],
                        // [h0, [h3, dB(0xe78) + "O"], [h2, h7]],
                        // [/\svivo\s(\w+)(?:\sbuild|\))/i, /\s(v[12]\d{3}\w?[at])(?:\sbuild|;)/i],
                        // [h0, [h3, dB(0x186c) + "o"], [h2, h7]],
                        // [/\s(rmx[12]\d{3})(?:\sbuild|;)/i],
                        // [h0, [h3, dB(0x20ab) + dK(0xfc5)], [h2, h7]],
                        // [
                        //     /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)\b[\w\s]+build\//i,
                        //     /\smot(?:orola)?[\s-](\w*)/i,
                        //     /((?:moto[\s\w\(\)]+|xt\d{3,4}|nexus\s6)(?=\sbuild|\)))/i,
                        // ],
                        // [h0, [h3, dK(0x13a8) + dB(0x838) + "la"], [h2, h7]],
                        // [/\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                        // [h0, [h3, dB(0x13a8) + dK(0x838) + "la"], [h2, h8]],
                        // [/((?=lg)?[vl]k\-?\d{3})\sbuild|\s3\.[\s\w;-]{10}lg?-([06cv9]{3,4})/i],
                        // [h0, [h3, "LG"], [h2, h8]],
                        // [/(lm-?f100[nv]?|nexus\s[45])/i, /lg[e;\s\/-]+((?!browser|netcast)\w+)/i, /\blg(\-?[\d\w]+)\sbuild/i],
                        // [h0, [h3, "LG"], [h2, h7]],
                        // [/(ideatab[\w\-\s]+)/i, /lenovo\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+)|yt[\d\w-]{6}|tb[\d\w-]{6})/i],
                        // [h0, [h3, dK(0x15a5) + dK(0x1d73)], [h2, h8]],
                        // [/(?:maemo|nokia).*(n900|lumia\s\d+)/i, /nokia[\s_-]?([\w\.-]*)/i],
                        // [
                        //     [h0, /_/g, "\x20"],
                        //     [h3, dK(0x1867) + "ia"],
                        //     [h2, h7],
                        // ],
                        // [/droid.+;\s(pixel\sc)[\s)]/i],
                        // [h0, [h3, dK(0x7c0) + dB(0xbb4)], [h2, h8]],
                        // [/droid.+;\s(pixel[\s\daxl]{0,6})(?:\sbuild|\))/i],
                        // [h0, [h3, dK(0x7c0) + dB(0xbb4)], [h2, h7]],
                        // [/droid.+\s([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                        // [h0, [h3, dB(0x1d72) + "y"], [h2, h7]],
                        // [/sony\stablet\s[ps]\sbuild\//i, /(?:sony)?sgp\w+(?:\sbuild\/|\))/i],
                        // [
                        //     [h0, dK(0x1080) + dK(0x993) + dB(0x1fda) + dK(0x9cb) + "t"],
                        //     [h3, dK(0x1d72) + "y"],
                        //     [h2, h8],
                        // ],
                        // [/\s(kb2005|in20[12]5|be20[12][59])\b/i, /\ba000(1)\sbuild/i, /\boneplus\s(a\d{4})[\s)]/i],
                        // [h0, [h3, dK(0x5f8) + dK(0x190d) + "s"], [h2, h7]],
                        // [/(alexa)webm/i, /(kf[a-z]{2}wi)(\sbuild\/|\))/i, /(kf[a-z]+)(\sbuild\/|\)).+silk\//i],
                        // [h0, [h3, dK(0x4bc) + dK(0xe36)], [h2, h8]],
                        // [/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],
                        // [
                        //     [h0, dB(0xae8) + dK(0x16fd) + dK(0x6af) + "e"],
                        //     [h3, dK(0x4bc) + dK(0xe36)],
                        //     [h2, h7],
                        // ],
                        // [/\((playbook);[\w\s\),;-]+(rim)/i],
                        // [h0, h3, [h2, h8]],
                        // [/((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10;\s(\w+)/i],
                        // [h0, [h3, dB(0x9f1) + dB(0xfc6) + dK(0xf32) + "y"], [h2, h7]],
                        // [/(?:\b|asus_)(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus\s7|padfone|p00[cj])/i],
                        // [h0, [h3, dK(0x1463) + "S"], [h2, h8]],
                        // [/\s(z[es]6[027][01][km][ls]|zenfone\s\d\w?)\b/i],
                        // [h0, [h3, dK(0x1463) + "S"], [h2, h7]],
                        // [/(nexus\s9)/i],
                        // [h0, [h3, dB(0x881)], [h2, h8]],
                        // [/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],
                        // [h3, [h0, /_/g, "\x20"], [h2, h7]],
                        // [/droid[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
                        // [h0, [h3, dK(0xf11) + "r"], [h2, h8]],
                        // [/droid.+;\s(m[1-5]\snote)\sbuild/i, /\bmz-([\w-]{2,})/i],
                        // [h0, [h3, dB(0x1566) + "zu"], [h2, h7]],
                        // [
                        //     /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i,
                        //     /(hp)\s([\w\s]+\w)/i,
                        //     /(asus)-?(\w+)/i,
                        //     /(microsoft);\s(lumia[\s\w]+)/i,
                        //     /(lenovo)[_\s-]?([\w-]+)/i,
                        //     /linux;.+(jolla);/i,
                        //     /droid.+;\s(oppo)\s?([\w\s]+)\sbuild/i,
                        // ],
                        // [h3, h0, [h2, h7]],
                        // [
                        //     /(archos)\s(gamepad2?)/i,
                        //     /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                        //     /(kindle)\/([\w\.]+)/i,
                        //     /\s(nook)[\w\s]+build\/(\w+)/i,
                        //     /(dell)\s(strea[kpr\s\d]*[\dko])/i,
                        //     /[;\/]\s?(le[\s\-]+pan)[\s\-]+(\w{1,9})\sbuild/i,
                        //     /[;\/]\s?(trinity)[\-\s]*(t\d{3})\sbuild/i,
                        //     /\b(gigaset)[\s\-]+(q\w{1,9})\sbuild/i,
                        //     /\b(vodafone)\s([\w\s]+)(?:\)|\sbuild)/i,
                        // ],
                        // [h3, h0, [h2, h8]],
                        // [/\s(surface\sduo)\s/i],
                        // [h0, [h3, dK(0x520) + dK(0x1c85) + dK(0x2e5)], [h2, h8]],
                        // [/droid\s[\d\.]+;\s(fp\du?)\sbuild/i],
                        // [h0, [h3, dB(0x808) + dK(0x3c5) + dK(0x227)], [h2, h7]],
                        // [/\s(u304aa)\sbuild/i],
                        // [h0, [h3, dK(0x9f7) + "T"], [h2, h7]],
                        // [/sie-(\w*)/i],
                        // [h0, [h3, dB(0x19d1) + dB(0xf9a) + "s"], [h2, h7]],
                        // [/[;\/]\s?(rct\w+)\sbuild/i],
                        // [h0, [h3, dB(0xce3)], [h2, h8]],
                        // [/[;\/\s](venue[\d\s]{2,7})\sbuild/i],
                        // [h0, [h3, dB(0x741) + "l"], [h2, h8]],
                        // [/[;\/]\s?(q(?:mv|ta)\w+)\sbuild/i],
                        // [h0, [h3, dK(0xa0a) + dK(0x171e) + "n"], [h2, h8]],
                        // [/[;\/]\s(?:barnes[&\s]+noble\s|bn[rt])([\w\s\+]*)\sbuild/i],
                        // [h0, [h3, dK(0x21d2) + dK(0x1c43) + dK(0x208d) + dB(0x671) + "le"], [h2, h8]],
                        // [/[;\/]\s(tm\d{3}\w+)\sbuild/i],
                        // [h0, [h3, dK(0x13ba) + dB(0x120c) + "on"], [h2, h8]],
                        // [/;\s(k88)\sbuild/i],
                        // [h0, [h3, dK(0x1c6c)], [h2, h8]],
                        // [/;\s(nx\d{3}j)\sbuild/i],
                        // [h0, [h3, dK(0x1c6c)], [h2, h7]],
                        // [/[;\/]\s?(gen\d{3})\sbuild.*49h/i],
                        // [h0, [h3, dB(0x12c5) + "ss"], [h2, h7]],
                        // [/[;\/]\s?(zur\d{3})\sbuild/i],
                        // [h0, [h3, dB(0x12c5) + "ss"], [h2, h8]],
                        // [/[;\/]\s?((zeki)?tb.*\b)\sbuild/i],
                        // [h0, [h3, dB(0x524) + "i"], [h2, h8]],
                        // [/[;\/]\s([yr]\d{2})\sbuild/i, /[;\/]\s(dragon[\-\s]+touch\s|dt)(\w{5})\sbuild/i],
                        // [[h3, dK(0x1247) + dK(0x2101) + dB(0x705) + dB(0x279)], h0, [h2, h8]],
                        // [/[;\/]\s?(ns-?\w{0,9})\sbuild/i],
                        // [h0, [h3, dB(0x1c3e) + dB(0x1bae) + "ia"], [h2, h8]],
                        // [/[;\/]\s?((nxa|Next)-?\w{0,9})\sbuild/i],
                        // [h0, [h3, dB(0x10d3) + dB(0x1520) + "ok"], [h2, h8]],
                        // [/[;\/]\s?(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05]))\sbuild/i],
                        // [[h3, dB(0x1805) + "ce"], h0, [h2, h7]],
                        // [/[;\/]\s?(lvtel\-)?(v1[12])\sbuild/i],
                        // [[h3, dK(0xe1e) + "el"], h0, [h2, h7]],
                        // [/;\s(ph-1)\s/i],
                        // [h0, [h3, dK(0x2165) + dB(0x14f2) + dB(0x103e)], [h2, h7]],
                        // [/[;\/]\s?(v(100md|700na|7011|917g).*\b)\sbuild/i],
                        // [h0, [h3, dB(0x1f32) + dB(0x22ac) + "n"], [h2, h8]],
                        // [/[;\/]\s?(trio[\s\w\-\.]+)\sbuild/i],
                        // [h0, [h3, dB(0x151e) + dB(0x1bf8) + dB(0x1a35)], [h2, h8]],
                        // [/[;\/]\s?tu_(1491)\sbuild/i],
                        // [h0, [h3, dB(0xdc9) + "or"], [h2, h8]],
                        // [/(shield[\w\s]+)\sbuild/i],
                        // [h0, [h3, dB(0x1b9a) + dB(0x1a1b)], [h2, h8]],
                        // [/(sprint)\s(\w+)/i],
                        // [h3, h0, [h2, h7]],
                        // [/(kin\.[onetw]{3})/i],
                        // [
                        //     [h0, /\./g, "\x20"],
                        //     [h3, dB(0x520) + dK(0x1c85) + dK(0x2e5)],
                        //     [h2, h7],
                        // ],
                        // [/droid\s[\d\.]+;\s(cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                        // [h0, [h3, dK(0x347) + "ra"], [h2, h8]],
                        // [/droid\s[\d\.]+;\s(ec30|ps20|tc[2-8]\d[kx])\)/i],
                        // [h0, [h3, dB(0x347) + "ra"], [h2, h7]],
                        // [/\s(ouya)\s/i, /(nintendo)\s([wids3utch]+)/i],
                        // [h3, h0, [h2, h6]],
                        // [/droid.+;\s(shield)\sbuild/i],
                        // [h0, [h3, dK(0x1b9a) + dK(0x1a1b)], [h2, h6]],
                        // [/(playstation\s[345portablevi]+)/i],
                        // [h0, [h3, dB(0x1d72) + "y"], [h2, h6]],
                        // [/[\s\(;](xbox(?:\sone)?(?!;\sxbox))[\s\);]/i],
                        // [h0, [h3, dB(0x520) + dB(0x1c85) + dB(0x2e5)], [h2, h6]],
                        // [/smart-tv.+(samsung)/i],
                        // [h3, [h2, h9]],
                        // [/hbbtv.+maple;(\d+)/i],
                        // [
                        //     [h0, /^/, dK(0xfbe) + dK(0x2216) + "V"],
                        //     [h3, dB(0x1e21) + dK(0x3c4) + "g"],
                        //     [h2, h9],
                        // ],
                        // [/(?:linux;\snetcast.+smarttv|lg\snetcast\.tv-201\d)/i],
                        // [
                        //     [h3, "LG"],
                        //     [h2, h9],
                        // ],
                        // [/(apple)\s?tv/i],
                        // [h3, [h0, dB(0x789) + dK(0x4db) + "TV"], [h2, h9]],
                        // [/crkey/i],
                        // [
                        //     [h0, dK(0x386) + dB(0x49e) + dB(0xeef) + "t"],
                        //     [h3, dB(0x7c0) + dK(0xbb4)],
                        //     [h2, h9],
                        // ],
                        // [/droid.+aft([\w])(\sbuild\/|\))/i],
                        // [h0, [h3, dB(0x4bc) + dK(0xe36)], [h2, h9]],
                        // [/\(dtv[\);].+(aquos)/i],
                        // [h0, [h3, dK(0x169b) + "rp"], [h2, h9]],
                        // [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                        // [
                        //     [h3, hy[dB(0x1dd9) + "m"]],
                        //     [h0, hy[dK(0x1dd9) + "m"]],
                        //     [h2, h9],
                        // ],
                        // [/[\s\/\(](android\s|smart[-\s]?|opera\s)tv[;\)\s]/i],
                        // [[h2, h9]],
                        // [/((pebble))app\/[\d\.]+\s/i],
                        // [h3, h0, [h2, hq]],
                        // [/droid.+;\s(glass)\s\d/i],
                        // [h0, [h3, dB(0x7c0) + dB(0xbb4)], [h2, hq]],
                        // [/droid\s[\d\.]+;\s(wt63?0{2,3})\)/i],
                        // [h0, [h3, dB(0x347) + "ra"], [h2, hq]],
                        // [/(tesla)(?:\sqtcarbrowser|\/20[12]\d\.[\w\.-]+)/i],
                        // [h3, [h2, hC]],
                        // [/droid .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],
                        // [h0, [h2, h7]],
                        // [/droid .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],
                        // [h0, [h2, h8]],
                        // [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                        // [[h2, hy[dK(0x1c77) + dK(0x20a7) + "ze"]]],
                        // [/(android[\w\.\s\-]{0,9});.+build/i],
                        // [h0, [h3, dB(0x247) + dK(0x20a7) + "c"]],
                        // [/(phone)/i],
                        // [[h2, h7]],
                    ],
                    engine: [
                        // [/windows.+\sedge\/([\w\.]+)/i],
                        // [h4, [h1, dK(0x224d) + dK(0x19b5) + "ML"]],
                        // [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                        // [h4, [h1, dB(0x1162) + "nk"]],
                        // [
                        //     /(presto)\/([\w\.]+)/i,
                        //     /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                        //     /ekioh(flow)\/([\w\.]+)/i,
                        //     /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i,
                        //     /(icab)[\/\s]([23]\.[\d\.]+)/i,
                        // ],
                        // [h1, h4],
                        // [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                        // [h4, h1],
                    ],
                    os: [
                        // [/microsoft\s(windows)\s(vista|xp)/i],
                        // [h1, h4],
                        // [
                        //     /(windows)\snt\s6\.2;\s(arm)/i,
                        //     /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i,
                        //     /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)(?!.+xbox)/i,
                        // ],
                        // [h1, [h4, hw[dK(0x1001)], hP["os"][dK(0x1808) + dK(0x5af) + "s"][dK(0x2261) + dK(0xef3) + "n"]]],
                        // [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                        // [
                        //     [h1, dB(0x21f5) + dK(0x5af) + "s"],
                        //     [h4, hw[dK(0x1001)], hP["os"][dK(0x1808) + dB(0x5af) + "s"][dK(0x2261) + dB(0xef3) + "n"]],
                        // ],
                        // [/ip[honead]{2,4}\b(?:.*os\s([\w]+)\slike\smac|;\sopera)/i, /cfnetwork\/.+darwin/i],
                        // [
                        //     [h4, /_/g, "."],
                        //     [h1, dB(0x1344)],
                        // ],
                        // [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)(?!.+haiku)/i],
                        // [
                        //     [h1, dK(0x151e) + dB(0x10b2)],
                        //     [h4, /_/g, "."],
                        // ],
                        // [
                        //     /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i,
                        //     /(blackberry)\w*\/([\w\.]*)/i,
                        //     /(tizen|kaios)[\/\s]([\w\.]+)/i,
                        //     /\((series40);/i,
                        // ],
                        // [h1, h4],
                        // [/\(bb(10);/i],
                        // [h4, [h1, dK(0x9f1) + dK(0xfc6) + dK(0xf32) + "y"]],
                        // [/(?:symbian\s?os|symbos|s60(?=;)|series60)[\/\s-]?([\w\.]*)/i],
                        // [h4, [h1, dB(0xa0d) + dB(0xf9d) + "n"]],
                        // [/mozilla.+\(mobile;.+gecko.+firefox/i],
                        // [[h1, dK(0xae8) + dB(0x1a15) + dK(0xa4e) + "S"]],
                        // [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                        // [h4, [h1, dB(0xcd4) + "OS"]],
                        // [/crkey\/([\d\.]+)/i],
                        // [h4, [h1, dB(0x386) + dB(0x49e) + dK(0xeef) + "t"]],
                        // [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                        // [[h1, dK(0x386) + dB(0xdc6) + dK(0x4fe) + "OS"], h4],
                        // [
                        //     /(nintendo|playstation)\s([wids345portablevuch]+)/i,
                        //     /(xbox);\s+xbox\s([^\);]+)/i,
                        //     /(mint)[\/\s\(\)]?(\w*)/i,
                        //     /(mageia|vectorlinux)[;\s]/i,
                        //     /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?=\slinux)|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus|raspbian)(?:\sgnu\/linux)?(?:\slinux)?[\/\s-]?(?!chrom|package)([\w\.-]*)/i,
                        //     /(hurd|linux)\s?([\w\.]*)/i,
                        //     /(gnu)\s?([\w\.]*)/i,
                        //     /\s([frentopc-]{0,4}bsd|dragonfly)\s?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                        //     /(haiku)\s(\w+)/i,
                        // ],
                        // [h1, h4],
                        // [/(sunos)\s?([\w\.\d]*)/i],
                        // [[h1, dB(0x174f) + dB(0x1c7a) + "s"], h4],
                        // [
                        //     /((?:open)?solaris)[\/\s-]?([\w\.]*)/i,
                        //     /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i,
                        //     /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i,
                        //     /(unix)\s?([\w\.]*)/i,
                        // ],
                        // [h1, h4],
                    ],
                };
                function hU(hL, hE) {
                    if (typeof hL == "object") {
                        hE = hL;
                        hL = mI;
                    }
                    if (!(this instanceof hU)) {
                        return new hU(hL, hE).getResult();
                    }
                    var hO = hL || (mR !== undefined && mR.navigator && mR.navigator.userAgent ? mR.navigator.userAgent : "");
                    var hm = hE ? hy.extend(hM, hE) : hM;
                    this.getBrowser = function () {
                        var hJ = {
                            name: mI,
                            version: mI,
                        };
                        hw.rgx.call(hJ, hO, hm.browser);
                        hJ.major = hy.major(hJ.version);
                        return hJ;
                    };
                    this.getCPU = function () {
                        var hJ = {
                            architecture: mI,
                        };
                        hw.rgx.call(hJ, hO, hm.cpu);
                        return hJ;
                    };
                    this.getDevice = function () {
                        var hJ = {
                            vendor: mI,
                            model: mI,
                            type: mI,
                        };
                        hw.rgx.call(hJ, hO, hm.device);
                        return hJ;
                    };
                    this.getEngine = function () {
                        var hJ = {
                            name: mI,
                            version: mI,
                        };
                        hw.rgx.call(hJ, hO, hm.engine);
                        return hJ;
                    };
                    this.getOS = function () {
                        var hJ = {
                            name: mI,
                            version: mI,
                        };
                        hw.rgx.call(hJ, hO, hm.os);
                        return hJ;
                    };
                    this.getResult = function () {
                        return {
                            ua: this.getUA(),
                            browser: this.getBrowser(),
                            engine: this.getEngine(),
                            os: this.getOS(),
                            device: this.getDevice(),
                            cpu: this.getCPU(),
                        };
                    };
                    this.getUA = function () {
                        return hO;
                    };
                    this.setUA = function (hJ) {
                        hO = typeof hJ === mV && hJ.length > 255 ? hy.trim(hJ, 255) : hJ;
                        return this;
                    };
                    this.setUA(hO);
                    return this;
                }
                hU.VERSION = "0.7.28";
                hU.BROWSER = {
                    NAME: h1,
                    MAJOR: "major",
                    VERSION: h4,
                };
                hU.CPU = {
                    ARCHITECTURE: h5,
                };
                hU.DEVICE = {
                    MODEL: h0,
                    VENDOR: h3,
                    TYPE: h2,
                    CONSOLE: h6,
                    MOBILE: h7,
                    SMARTTV: h9,
                    TABLET: h8,
                    WEARABLE: hq,
                    EMBEDDED: hC,
                };
                hU.ENGINE = {
                    NAME: h1,
                    VERSION: h4,
                };
                hU.OS = {
                    NAME: h1,
                    VERSION: h4,
                };
                if (Mp.exports) {
                    MV = Mp.exports = hU;
                }
                MV.UAParser = hU;
                var hb = mR !== undefined && (mR.jQuery || mR.Zepto);
                if (hb && !hb.ua) {
                    var hj = new hU();
                    hb.ua = hj.getResult();
                    hb.ua.get = function () {
                        return hj.getUA();
                    };
                    hb.ua.set = function (hL) {
                        hj.setUA(hL);
                        var hE = hj.getResult();
                        for (var hO in hE) {
                            hb.ua[hO] = hE[hO];
                        }
                    };
                }
            })(typeof b == "object" ? b : U0.exports);
            var U1 = U0.exports;
            var U2 = "safari";
            var U3 = "safari webview";
            var U4 = "Android";
            var U5 = "iOS";
            var U6 = "OS X";
            var U7 = "Windows";
            var U8 = "app";
            var U9 = U1.UAParser.DEVICE.VENDOR;
            var Uq = U1.UAParser.DEVICE.MODEL;
            var UC = U1.UAParser.DEVICE.TYPE;
            var Uy = U1.UAParser.DEVICE.MOBILE;
            var Uw = U1.UAParser.BROWSER.NAME;
            var UP = U1.UAParser.BROWSER.VERSION;
            var UM = {
                device: [[/android.+;\s(vivo)\s?([\w\s]+)\sbuild/i], [U9, Uq, [UC, Uy]], [/d\/honor([\w\s-]+)[;\)]/i], [Uq, [U9, "Huawei"], [UC, Uy]]],
                browser: [
                    [/(trident)\/([\w\.]+)/i],
                    [[Uw, "ie"], UP],
                    [/(?:ms|\()(ie)\s([\w\.]+)/i],
                    [Uw, UP],
                    [/(edge|edgios|edga)\/([\w\.]+)/i],
                    [[Uw, "edge"], UP],
                    [/(ucbrowser)\/([\w\.]+)/i, /(ucmini)\/([\w\.]+)/i],
                    [[Uw, "ucbrowser"], UP],
                    [/(qihoobrowser|qhbrowser)\/([\w\.]+)/i],
                    [[Uw, "360browser"], UP],
                    [/(lite baiduboxapp)\/([\w\.]+)/i],
                    [[Uw, "lite baidu"], UP],
                    [/(baiduboxapp|baidubrowser|bidubrowser|bdbrowser)\/([\w\.]+)/i],
                    [[Uw, "baidubrowser"], UP],
                    [/(maxthon|mxbrowser|mxios)\/([\w\.]+)/i],
                    [[Uw, "maxthon"], UP],
                    [/(fxios|firefox)\/([\w\.]+)/i],
                    [[Uw, "firefox"], UP],
                    [/(opera|oupeng|opr\/?)\/([\w\.]+)/i],
                    [[Uw, "opera"], UP],
                    [/(alohabrowser)\/([\w\.]+)/i],
                    [[Uw, "alohabrowser"], UP],
                    [/(sogoumobilebrowser|sogou)\/([\w\.]+)/i],
                    [[Uw, "sogou"], UP],
                    [/(liebaofast|liebao)\/([\w\.]+)/i],
                    [[Uw, "liebao"], UP],
                    [/(miuibrowser)\/([\w\.]+)/i],
                    [[Uw, "MIUI Browser"], UP],
                    [/(qzone)\/([\w\.]+)/i],
                    [Uw, UP],
                ],
            };
            var UU = {
                browser: [
                    [/(edge|edgios|edga)\/([\w\.]+)/i],
                    [[Uw, "edge"], UP],
                    [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                    [UP, [Uw, "Chrome Headless"]],
                    [/\swv\).+(chrome)\/([\w\.]+)/i],
                    [[Uw, /(.+)/, "$1 WebView"], UP],
                    [/(chrome|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
                    [Uw, UP],
                    [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                    [[Uw, "Chrome"], UP],
                    [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                    [UP, [Uw, "Mobile Safari"]],
                    [/version\/([\w\.]+).+?(safari)/i],
                    [UP, Uw],
                    [/(fxios|firefox)\/([\w\.]+)/i],
                    [[Uw, "firefox"], UP],
                    [/(trident)\/([\w\.]+)/i],
                    [[Uw, "ie"], UP],
                    [/(?:ms|\()(ie)\s([\w\.]+)/i],
                    [Uw, UP],
                    [/iphone os/i],
                    [
                        [Uw, "Safari WebView"],
                        [UP, "0"],
                    ],
                ],
            };
            b.UAParser = U1.UAParser;
            var Ub = (function () {
                function mR() {
                    this._ua = new U1.UAParser(b.navigator.userAgent, UM);
                    var mI = this._ua.getBrowser();
                    this.A = mI.version;
                    this.p = mI.name;
                    var mX = new U1.UAParser(b.navigator.userAgent, UU).getBrowser();
                    this.m = mX.version;
                    this.g = mX.name;
                    var mp;
                    var mV = this._ua.getOS().name;
                    if (!mV) {
                        mV = "";
                    }
                    mV = /Android/i.test(mV)
                        ? U4
                        : /ios/i.test(mV)
                        ? U5
                        : /Mac OS/i.test(mV)
                        ? U6
                        : /Windows (Phone|Mobile)/i.test(mV)
                        ? "WP8"
                        : /Windows/i.test(mV)
                        ? U7
                        : "Unknown";
                    this.S = mV;
                    var h0 = /pgmobileshell/;
                    var h1 = /pgshell/;
                    mp = /pgapp/.test(this._ua.getUA()) || h0.test(this._ua.getUA()) ? U8 : h1.test(this._ua.getUA()) ? "pc" : "browser";
                    this.k = mp;
                    if (mp === U8 && mV === U5) {
                        this.p = U2;
                        this.A = this._ua.getOS().version;
                    }
                }
                mR.prototype.getUA = function () {
                    return this._ua;
                };
                mR.prototype.isMobile = function () {
                    if (this.M === undefined) {
                        this.M = /mobile|android|iphone|ipad/i.test(this._ua.getUA());
                    }
                    return this.M;
                };
                mR.prototype.getOSName = function () {
                    return this.S;
                };
                mR.prototype.getPlatform = function () {
                    return this.k;
                };
                mR.prototype.getOSMajorVersion = function () {
                    if (!this.H) {
                        this.H = -1;
                        var mI = this._ua.getOS().version;
                        if (mI === undefined) {
                            return -1;
                        }
                        if (!(mI = mI.match(/[^.]+/g))) {
                            return -1;
                        }
                        this.H = +mI[0];
                    }
                    return this.H;
                };
                mR.prototype.getOSVersion = function () {
                    return this._ua.getOS().version || "-1";
                };
                mR.prototype.getBrowserType = function () {
                    if (this.p) {
                        return this.p;
                    } else {
                        return "";
                    }
                };
                mR.prototype.getBrowserBaseType = function () {
                    if (this.g) {
                        return this.g;
                    } else {
                        return "";
                    }
                };
                mR.prototype.getBrowserVersion = function () {
                    if (this.A) {
                        return this.A;
                    } else {
                        return "-1";
                    }
                };
                mR.prototype.getBrowserBaseVersion = function () {
                    if (this.m) {
                        return this.m;
                    } else {
                        return "-1";
                    }
                };
                mR.prototype.getDeviceInfo = function () {
                    if (!this.V) {
                        this.V = this._ua.getDevice();
                    }
                    return this.V;
                };
                return mR;
            })();
            function Uf(mR, mI) {
                var mX = [];
                if (mR) {
                    var mp = mI.split("-")[1];
                    mX = mI.split("-")[0].split(".");
                    var mV = mp.split(".");
                    mX = mX.concat(mV);
                } else {
                    mX = mI.split(".");
                }
                return mX;
            }
            function Uj(mR) {
                return mR.map(function (mI) {
                    if (isNaN(mI)) {
                        return mI;
                    } else {
                        return parseInt(mI, 10);
                    }
                });
            }
            function UL(mR, mI) {
                for (
                    var mX = mR.indexOf("-") > -1,
                        mp = mI.indexOf("-") > -1,
                        mV = Uj(Uf(mX, mR)),
                        h0 = Uj(Uf(mp, mI)),
                        h1 = Math.max(mV.length, h0.length),
                        h2 = 0;
                    h2 < h1;
                    h2++
                ) {
                    mV[h2] = mV[h2] === undefined ? 0 : mV[h2];
                    h0[h2] = h0[h2] === undefined ? 0 : h0[h2];
                    if (mV[h2] > h0[h2]) {
                        return 1;
                    }
                    if (mV[h2] < h0[h2]) {
                        return -1;
                    }
                }
                return 0;
            }
            location.port;
            var UE;
            var UO;
            var Um;
            var UJ;
            var US;
            var Ug = "shell:compatible_failure_reason";
            var UW = "game_shell";
            var Ud = "Cache Install";
            var UN = "Cache Update";
            var Uv = "";
            var UT = "";
            var UD = "";
            function UF(mR) {
                return function () {
                    var mI = mR
                        .reduce(function (mX, mp) {
                            return mX.then(function (mV) {
                                if (mV) {
                                    return mp();
                                } else {
                                    return mV;
                                }
                            });
                        }, b.Promise.resolve(1))
                        .catch(function () {
                            return 0;
                        });
                    return mI;
                };
            }
            function UG(mR, mI) {
                if (mR < 0) {
                    return mI.substring(b.Number("0x0"), mI.length + mR);
                } else {
                    return mI.substring(mR);
                }
            }
            function UQ(mR) {
                return UG(1, mR);
            }
            function UA(mR) {
                return UG(2, mR);
            }
            function UZ(mR) {
                return new b.Uint8Array(mR).reduce(function (mI, mX) {
                    return mI + b.Number(mX).toString(16).padStart(2, "0");
                }, "");
            }
            function Uz(mR, mI, mX) {
                return !(!mR || !mI) && (mX ? mR.substring(b.Number("0x0"), mI.length) === mI : mR === mI);
            }
            function UY() {
                var mR = "subtle";
                var mI = Uk(b, "crypto");
                return !(!mI || UB(mI, mR) || !UH(mI, mR));
            }
            function Ux(mR) {
                return (mR + "").indexOf("[native code]") !== -1;
            }
            function UB(mR, mI) {
                return b.Object.prototype.hasOwnProperty.call(mR, mI);
            }
            function UK(mR, mI) {
                if (mR) {
                    if (mR.get) {
                        if (Ux(mR.get)) {
                            return mR.get.apply(mI);
                        } else {
                            return undefined;
                        }
                    } else {
                        return mR.value;
                    }
                } else {
                    return mR;
                }
            }
            function Uk(mR, mI) {
                try {
                    return UK(b.Object.getOwnPropertyDescriptor(mR, mI), mR);
                } catch (mX) {}
            }
            function UH(mR, mI) {
                try {
                    var mX = b.Object.getPrototypeOf(mR);
                    return UK(b.Object.getOwnPropertyDescriptor(mX, mI), mR);
                } catch (mp) {}
            }
            function UR(mR, mI) {
                if (mI === undefined) {
                    mI = b;
                }
                return b0(mR)
                    .split(".")
                    .reduce(function (mX, mp) {
                        if (mX != null) {
                            return Uk(mX, mp);
                        } else {
                            return mX;
                        }
                    }, mI);
            }
            function UI() {
                return (
                    [" Math.random", " parseInt", " setTimeout ", " Date ", " Date.now"].find(function (mR) {
                        return !Ux(UR(mR));
                    }) == null
                );
            }
            function UX(mR) {
                for (
                    var mI = [
                            " SamsungBrowser",
                            "UCBrowser",
                            " Quark",
                            "QQBrowser",
                            " OppoBrowser",
                            " VivoBrowser",
                            " 360(SE|EE) ",
                            " b(?:ai)?d(?:u)?browser ",
                        ],
                        mX = [],
                        mp = 0;
                    mR;

                ) {
                    if (mR & 1 && mp < mI.length) {
                        mX.push(b0(mI[mp]));
                    }
                    mR >>= 1;
                    mp++;
                }
                if (mX.length) {
                    var mV = new b.RegExp(mX.join(b0(" | ")), b0(" i "));
                    return function () {
                        return mV.test(b.navigator.userAgent);
                    };
                }
                return function () {
                    return false;
                };
            }
            function Up(mR) {
                var mI = ["deDate", "elocation", "dohost", "ehostname", "deMath", "eparseInt", "dneval"][mR];
                return mI.substring(b.Number("0xf") - b.Number("0x0" + mI[0]));
            }
            function UV() {
                return b1(1, b[Up(4)].random() * 20);
            }
            function b0(mR) {
                return mR.replace(/ /g, "");
            }
            function b1(mR, mI) {
                return mR === b[Up(4)].max(mR, mI);
            }
            function b2(mR) {
                for (var mI = "", mX = 0, mp = mR.length; mX < mp; mX++) {
                    mI += mR[mX] || "";
                }
                return mI;
            }
            function b3(mR) {
                for (var mI = b.atob(mR), mX = new b.Uint8Array(mI.length), mp = 0; mp < mI.length; mp++) {
                    mX[mp] = mI.charCodeAt(mp);
                }
                return mX;
            }
            function b4() {
                var mR = [95, 95]
                    .map(function (h8) {
                        return b.String.fromCharCode(h8);
                    })
                    .join("");
                var mI = mR + "refer or " + mR + UQ("ahv");
                var mX = Up(1);
                var mp = UQ("esplit");
                function mV(h8) {
                    var h9 = new b.URLSearchParams(b[mX].search);
                    var hq = mI[mp](" ")[h8];
                    if (hq) {
                        return h9.get(hq);
                    } else {
                        return null;
                    }
                }
                var h0 = Up(3);
                var h1 = b[mX][h0];
                var h2 = mV(0);
                var h3 = mV(1);
                var h4 = mV(2);
                var h5 = h4 == null ? undefined : h4.substring(b.Number("0x0"), b.Number("0x2"));
                var h6 = h4 == null ? undefined : h4.substring(b.Number("0x2"));
                var h7 = Object.create(null);
                h7.B = h5;
                h7.j = h1;
                h7.P = h2;
                h7.G = h3;
                h7.R = h4;
                h7.Z = h6;
                return h7;
            }
            (function (mR) {
                mR[(mR.WebWindow = 1)] = "WebWindow";
                mR[(mR.WebMacOS = 2)] = "WebMacOS";
                mR[(mR.WebAndroid = 3)] = "WebAndroid";
                mR[(mR.WebIOS = 4)] = "WebIOS";
                mR[(mR.WebOthers = 5)] = "WebOthers";
                mR[(mR.CordovaAndroid = 6)] = "CordovaAndroid";
                mR[(mR.CordovaIOS = 7)] = "CordovaIOS";
                mR[(mR.ElectronWindow = 8)] = "ElectronWindow";
                mR[(mR.ElectronMac = 9)] = "ElectronMac";
                mR[(mR.NativeWindow = 10)] = "NativeWindow";
                mR[(mR.NativeMac = 11)] = "NativeMac";
                mR[(mR.NativeAndroid = 12)] = "NativeAndroid";
                mR[(mR.NativeIOS = 13)] = "NativeIOS";
                mR[(mR.Robot = 99)] = "Robot";
            })(UE || (UE = {}));
            (function (mR) {
                mR[(mR.All = 0)] = "All";
                mR[(mR.Portrait = 1)] = "Portrait";
                mR[(mR.Landscape = 2)] = "Landscape";
            })(UO || (UO = {}));
            (function (mR) {
                mR[(mR.None = 0)] = "None";
                mR[(mR.All = 1)] = "All";
                mR[(mR.Portrait = 2)] = "Portrait";
                mR[(mR.Landscape = 3)] = "Landscape";
            })(Um || (Um = {}));
            (function (mR) {
                mR[(mR.Image = 1)] = "Image";
            })(UJ || (UJ = {}));
            var b5;
            var b6 = undefined;
            function b7(mR) {
                b6 = mR;
            }
            function b8() {
                return b6 || b.location;
            }
            b5 = {
                language: ["l", "language"],
                token: ["ot", "operator_token"],
                session: ["ops", "operator_player_session"],
                type: ["btt", "bet_type"],
                from: ["f", "from"],
                definition: ["definition"],
                tourid: ["tournament_id"],
                real: ["rurl", "real_url"],
                no_audio: ["no_audio"],
                plugin: ["pg_plugin"],
                time_elapsed: ["te", "time_elapsed"],
                reminder_interval: ["ri", "reminder_interval"],
                operator_param: ["op", "operator_param"],
                cached_t: ["ct", "cached_t"],
                or_cover: ["oc", "or_cover"],
                origin: ["or"],
                api_origin: ["ao"],
                login_method: ["lgm"],
            };
            var b9 = (function () {
                function mR(mI) {
                    this.O = new URLSearchParams(mI);
                }
                mR.prototype.entries = function () {
                    return this.O.entries();
                };
                mR.prototype.keys = function () {
                    return this.O.keys();
                };
                mR.prototype.values = function () {
                    return this.O.values();
                };
                mR.prototype[Symbol.iterator] = function () {
                    return this.O[Symbol.iterator]();
                };
                mR.prototype.append = function (mI, mX) {
                    this.O.append(mI, mX);
                };
                mR.prototype.delete = function (mI) {
                    var mX = (b5 && b5[mI]) || mI;
                    if (Array.isArray(mX)) {
                        for (var mp = 0; mp < mX.length; mp++) {
                            if (this.O.has(mX[mp])) {
                                return this.O.delete(mX[mp]);
                            }
                        }
                    }
                    this.O.delete(mX);
                };
                mR.prototype.get = function (mI) {
                    var mX = (b5 && b5[mI]) || mI;
                    if (Array.isArray(mX)) {
                        for (var mp = 0; mp < mX.length; mp++) {
                            if (this.O.has(mX[mp])) {
                                return this.O.get(mX[mp]);
                            }
                        }
                    }
                    if (this.O.has(mX)) {
                        return this.O.get(mX);
                    } else {
                        return this.O.get(mI);
                    }
                };
                mR.prototype.getAll = function (mI) {
                    return this.O.getAll(mI);
                };
                mR.prototype.has = function (mI) {
                    var mX = (b5 && b5[mI]) || mI;
                    if (Array.isArray(mX)) {
                        for (var mp = 0; mp < mX.length; mp++) {
                            if (this.O.has(mX[mp])) {
                                return this.O.has(mX[mp]);
                            }
                        }
                    }
                    return this.O.has(mX);
                };
                mR.prototype.set = function (mI, mX) {
                    this.O.set(mI, mX);
                };
                mR.prototype.sort = function () {
                    this.O.sort();
                };
                mR.prototype.toString = function () {
                    return this.O.toString();
                };
                mR.prototype.forEach = function (mI, mX) {
                    return this.O.forEach(mI, mX);
                };
                return mR;
            })();
            function bq(mR, mI) {
                if (!mI || mI.length == 0) {
                    throw Error("Invalid key!");
                }
                for (var mX = "", mp = 0; mp < mR.length; mp++) {
                    var mV = mR.charCodeAt(mp);
                    var h0 = mI.charCodeAt(mp % mI.length);
                    mX += String.fromCharCode(mV ^ h0);
                }
                return mX;
            }
            function bC(mR) {
                if (!by(mR)) {
                    return mR;
                }
                var mI = (function (mV) {
                    return mV.replace(/^CAkQ(xzA|C3z|2Q5)/, "");
                })(mR);
                var mX = mI.length % 4 > 0 ? 4 - (mI.length % 4) : 0;
                if (mX > 0) {
                    for (var mp = 0; mp < mX; mp++) {
                        mI += "=";
                    }
                }
                return mI;
            }
            function by(mR) {
                return /^CAkQ(xzA|C3z|2Q5)/.test(mR);
            }
            function bw(mR) {
                // var mI;
                // (function (h5) {
                //     h5.kReplacer = "[a-zA-Z=]";
                // })(mI || (mI = {}));
                // var mX = typeof b == "object" ? b : global;
                // var mp = mX.parseInt;
                // var mV = mX.isNaN;
                // var h0 = mX.String;
                // var h1 = mX.RegExp;
                // var h2 = mX.Number;
                // var h3 = h1(mI.kReplacer, "g");
                // var h4 = mp(mR == null ? undefined : mR.substring(h2("0x0"), h2("0x2")), h2("0xa"));
                // if (mV(h4) && (mR == null ? undefined : mR.includes("."))) {
                //     return mR;
                // } else if (mR == null) {
                //     return undefined;
                // } else {
                //     return mR.substring(h2("0x2")).replace(h3, function (h5) {
                //         if (h5 === "=") {
                //             return ".";
                //         }
                //         var h6 = h5.charCodeAt(0);
                //         var h7 = h6 >= h2("0x61") ? h2("0x61") : h2("0x41");
                //         var h8 = ((h6 - h7 - h4 + h2("0x1a")) % h2("0x1a")) + h7;
                //         return h0.fromCharCode(h8);
                //     });
                // }

                return mR;
            }
            var bP = (function () {
                function mR() {
                    this.D = new b9(b.location.search);
                    this.N = new Ub();
                    var mI = b.location;
                    if (this.D.get("origin")) {
                        mI = (function (mV) {
                            if (mV.indexOf("//") === 0) {
                                mV = b.location.protocol + mV;
                            } else if (!/^https?:/.test(mV)) {
                                mV = b.location.protocol + "//" + mV;
                            }
                            if (b.URL) {
                                var h0 = new URL(mV);
                                return {
                                    href: mV,
                                    host: h0.host,
                                    origin: h0.origin,
                                    protocol: h0.protocol,
                                    pathname: h0.pathname,
                                };
                            }
                            var h1 = /^(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(\?[^#]*)?(#.*)?/.exec(mV);
                            if (!h1) {
                                throw Error("Unable to create location");
                            }
                            return {
                                href: h1[0],
                                host: h1[2],
                                origin: h1[1] + "://" + h1[2],
                                protocol: h1[1] + ":",
                                pathname: h1[3],
                            };
                        })(bw(this.D.get("origin")) + b.location.pathname);
                        b7(mI);
                    }
                    var mX = b.location.host;
                    if (this.D.get("api_origin")) {
                        mX = bw(this.D.get("api_origin"));
                    }
                    (function (mV) {
                        if (!b.ApiDomain) {
                            b.ApiDomain = (function (h0) {
                                var h1 = h0;
                                if (h1.split(".").length > 2) {
                                    h1 = h1.substr(h1.indexOf(".") + 1);
                                }
                                // return "https://api." + h1 + "/";
                                // return "http://42.193.227.246:8000";

                                return "http://192.168.8.169:8000";

                                // return "https://f119-120-41-223-32.ngrok-free.app";
                            })(mV);
                        }
                    })(mX);
                    if (this.D.get("orientation")) {
                        var mp = this.D.get("orientation");
                        if (!(mp !== "port" && mp !== "land")) {
                            this.T = mp;
                        }
                    }
                    if (this.D.get("resize") !== undefined) {
                        this.W = this.D.get("resize");
                    }
                }
                mR.prototype.getGPU = function () {
                    for (
                        var mI = document.createElement("canvas"),
                            mX = undefined,
                            mp = "",
                            mV = 0,
                            h0 = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"];
                        mV < h0.length;
                        mV++
                    ) {
                        var h1 = h0[mV];
                        if ((mX = mI.getContext(h1))) {
                            break;
                        }
                    }
                    if (mX) {
                        var h2 = mX.getExtension("WEBGL_debug_renderer_info");
                        mp = h2 ? mX.getParameter(h2.UNMASKED_RENDERER_WEBGL) : "";
                    }
                    return mp;
                };
                mR.prototype.getBrowserType = function () {
                    return this.N.getBrowserType();
                };
                mR.prototype.getBrowserBaseType = function () {
                    return this.N.getBrowserBaseType();
                };
                mR.prototype.getBrowserVersion = function () {
                    return this.N.getBrowserVersion();
                };
                mR.prototype.getBrowserBaseVersion = function () {
                    return this.N.getBrowserBaseVersion();
                };
                mR.prototype.getRequestType = function () {
                    return this.D.get("req_api") || US.RequestType || "fetch";
                };
                mR.prototype.getDeviceMemory = function () {
                    return b.navigator.deviceMemory;
                };
                mR.prototype.isWkWebview = function () {
                    if (this.U === undefined) {
                        this.U = !!b.webkit;
                    }
                    return this.U;
                };
                mR.prototype.isCacheStorageSupported = function () {
                    var mI;
                    if (this.q !== undefined) {
                        return this.q;
                    }
                    try {
                        this.q = ((mI = b.caches) === null || mI === undefined ? undefined : mI.open("__test")) instanceof Promise;
                    } catch (mX) {
                        this.q = false;
                    }
                    return this.q;
                };
                mR.prototype.isIOSStandalone = function () {
                    if (this.Y === undefined) {
                        this.Y = (this.getOSName() === U5 && navigator.standalone) || false;
                    }
                    return this.Y;
                };
                mR.prototype.isChromeStandalone = function () {
                    if (this.J === undefined) {
                        var mI = false;
                        if (this.getOSName() === U4 && matchMedia) {
                            mI = matchMedia("(display-mode: standalone)").matches;
                        }
                        this.J = mI;
                    }
                    return this.J;
                };
                mR.prototype.isMobile = function () {
                    return this.N.isMobile();
                };
                mR.prototype.isIOS = function () {
                    if (this.X === undefined) {
                        this.X = U5 === this.getOSName();
                    }
                    return this.X;
                };
                mR.prototype.isAndroid = function () {
                    if (this.K === undefined) {
                        this.K = U4 === this.getOSName();
                    }
                    return this.K;
                };
                mR.prototype.isMac = function () {
                    if (this.$ === undefined) {
                        this.$ = U6 === this.getOSName();
                    }
                    return this.$;
                };
                mR.prototype.isWindows = function () {
                    if (this.tt === undefined) {
                        this.tt = U7 === this.getOSName();
                    }
                    return this.tt;
                };
                mR.prototype.isApp = function () {
                    if (this.it === undefined) {
                        this.it = U8 === this.N.getPlatform();
                    }
                    return this.it;
                };
                mR.prototype.isPc = function () {
                    if (this.nt === undefined) {
                        this.nt = this.N.getPlatform() === "pc";
                    }
                    return this.nt;
                };
                mR.prototype.isSafari = function () {
                    var mI = this.getBrowserBaseType().toLowerCase();
                    var mX = this.getBrowserType().toLowerCase();
                    return mI === U3 || mI === "mobile safari" || mX === U2;
                };
                mR.prototype.getResizeMode = function () {
                    return this.W || undefined;
                };
                mR.prototype.getOSName = function () {
                    return this.N.getOSName();
                };
                mR.prototype.getOSMajorVersion = function () {
                    return this.N.getOSMajorVersion();
                };
                mR.prototype.getOSVersion = function () {
                    return this.N.getOSVersion();
                };
                mR.prototype.getDeviceCompatibleTerms = function () {
                    if (!this.et) {
                        this.et = US.Requirements;
                    }
                    return this.et;
                };
                mR.prototype.getURLSearchParam = function () {
                    return this.D;
                };
                mR.prototype.getPlatform = function () {
                    return this.N.getPlatform();
                };
                mR.prototype.isIPad = function () {
                    if (this.rt === undefined) {
                        this.rt = /iPad/.test(this.N.getUA().getUA()) || (this.isMac() && navigator.maxTouchPoints > 1);
                    }
                    return this.rt;
                };
                mR.prototype.getDeviceInfo = function () {
                    return this.N.getDeviceInfo();
                };
                mR.prototype.getRunPlatform = function () {
                    if (this.ot === undefined) {
                        var mI;
                        mI = this.isAndroid()
                            ? UE.WebAndroid
                            : this.isIOS()
                            ? UE.WebIOS
                            : this.isWindows()
                            ? UE.WebWindow
                            : this.isMac()
                            ? UE.WebMacOS
                            : UE.WebOthers;
                        this.ot = mI;
                    }
                    return this.ot;
                };
                mR.prototype.getSupportedBrowsers = function () {
                    if (!this.st && this.getDeviceCompatibleTerms().whiteList) {
                        this.st = [];
                        for (var mI = 0, mX = this.getDeviceCompatibleTerms().whiteList.split(","); mI < mX.length; mI++) {
                            var mp = mX[mI].split("-")[0];
                            this.st.push(mp.toLowerCase());
                        }
                    }
                    return this.st;
                };
                mR.prototype.isBrowserTypeSupported = function () {
                    for (var mI = 0, mX = this.getSupportedBrowsers(); mI < mX.length; mI++) {
                        var mp = mX[mI];
                        if (this.getBrowserBaseType().toLowerCase() === mp) {
                            return true;
                        }
                    }
                    return false;
                };
                mR.prototype.isSecureContext = function () {
                    if (b.isSecureContext !== undefined) {
                        return b.isSecureContext;
                    } else {
                        return b.location.protocol === "https:";
                    }
                };
                mR.prototype.getWhiteListCompatibleCheckInfo = function () {
                    if (this.ct === undefined) {
                        var mI = false;
                        var mX = false;
                        var mp = false;
                        if (this.getDeviceCompatibleTerms().whiteList) {
                            mI = true;
                            for (var mV = 0, h0 = this.getDeviceCompatibleTerms().whiteList.split(","); mV < h0.length; mV++) {
                                var h1 = h0[mV].split("-");
                                var h2 = h1[0];
                                var h3 = h1.length > 1 ? h1[1] : "0.0.0";
                                var h4 = false;
                                if (!(mX = RegExp(h2, "i").test(this.getBrowserType()))) {
                                    if ((mX = RegExp(h2, "i").test(this.getBrowserBaseType()))) {
                                        h4 = true;
                                    }
                                }
                                if (mX && h2.toLowerCase() === "webkit" && !this.isWkWebview() && this.isIOS()) {
                                    mX = false;
                                }
                                if (mX) {
                                    mp = this.getBrowserVersion() === "-1" || UL(h4 ? this.getBrowserBaseVersion() : this.getBrowserVersion(), h3) >= 0;
                                    break;
                                }
                            }
                        }
                        this.ct = {
                            hasWhiteList: mI,
                            foundBrowser: mX,
                            isMinBrowserVersion: mp,
                        };
                    }
                    return this.ct;
                };
                mR.prototype.getMinOSVersionInfo = function () {
                    if (this.ut === undefined) {
                        var mI = false;
                        var mX = false;
                        var mp = false;
                        if (this.getDeviceCompatibleTerms().minOSVersion) {
                            mI = true;
                            for (var mV = 0, h0 = this.getDeviceCompatibleTerms().minOSVersion.split(","); mV < h0.length; mV++) {
                                var h1 = h0[mV].split("-");
                                var h2 = /MacOS/i.test(h1[0]) ? U6 : h1[0];
                                var h3 = h1.length > 1 ? h1[1] : "0.0.0";
                                if ((mX = RegExp(h2, "i").test(this.getOSName()))) {
                                    mp = this.getOSVersion() === "-1" || UL(this.getOSVersion(), h3) >= 0;
                                    break;
                                }
                            }
                        }
                        this.ut = {
                            hasMinOSVersion: mI,
                            foundOS: mX,
                            isMinOSVersion: mp,
                        };
                    }
                    return this.ut;
                };
                mR.prototype.getOrientation = function () {
                    var mI = b.orientation;
                    if (mI !== undefined) {
                        return +mI;
                    }
                    var mX = screen.orientation;
                    var mp = 0;
                    if (mX) {
                        if (mX.type === "landscape-primary") {
                            mp = mX.angle;
                        }
                    } else if (this.getHeight() < this.getWidth()) {
                        mp = 90;
                    }
                    return mp;
                };
                mR.prototype.getOrientationMode = function () {
                    if (this.T) {
                        return this.T;
                    }
                    switch (US.Orientation) {
                        case UO.All:
                            this.T = this.getWidth() > this.getHeight() && !this.isMobile() ? "land" : "port";
                            break;
                        case UO.Landscape:
                            this.T = "land";
                            break;
                        case UO.Portrait:
                        default:
                            this.T = "port";
                    }
                    return this.T;
                };
                mR.prototype.getIs1959Supported = function () {
                    if (!(this.ht !== undefined)) {
                        if (this.getOrientationMode() === "land") {
                            this.ht = US.SupportXSMaxRatio === Um.All || US.SupportXSMaxRatio === Um.Landscape;
                        } else {
                            this.ht = US.SupportXSMaxRatio === Um.All || US.SupportXSMaxRatio === Um.Portrait;
                        }
                    }
                    return this.ht;
                };
                mR.prototype.getAscpectRatioSupport = function () {
                    var mI;
                    var mX;
                    if (this.lt) {
                        return this.lt;
                    }
                    var mp = this.getOrientationMode() === "land" ? "Landscape" : "Portrait";
                    var mV = this.isMobile() ? "Mobile" : "Desktop";
                    var h0 =
                        ((mX = (mI = US.AspectRatio) === null || mI === undefined ? undefined : mI[mV]) === null || mX === undefined ? undefined : mX[mp]) ||
                        undefined;
                    if (h0) {
                        this.lt = h0;
                        return this.lt;
                    } else {
                        if (this.getIs1959Supported()) {
                            this.lt = {
                                MinRatio: 16 / 9,
                                MaxRatio: 19.5 / 9,
                            };
                        } else if (!this.getIs1959Supported()) {
                            this.lt = {
                                MinRatio: 16 / 9,
                                MaxRatio: 16 / 9,
                            };
                        }
                        return this.lt;
                    }
                };
                mR.prototype.isPortrait = function () {
                    var mI = this.getOrientation();
                    return mI === 0 || mI === 180;
                };
                Object.defineProperty(mR.prototype, "audioSupported", {
                    get: function () {
                        if (!(this.ft !== undefined)) {
                            if (this.D.get("no_audio") === "1") {
                                this.ft = false;
                            } else {
                                this.ft = this.dt();
                            }
                        }
                        return this.ft;
                    },
                    enumerable: false,
                    configurable: true,
                });
                Object.defineProperty(mR.prototype, "audioContext", {
                    get: function () {
                        this.vt;
                        return this.vt;
                    },
                    enumerable: false,
                    configurable: true,
                });
                Object.defineProperty(mR.prototype, "webpSupported", {
                    get: function () {
                        return this.At;
                    },
                    set: function (mI) {
                        this.At = mI;
                    },
                    enumerable: false,
                    configurable: true,
                });
                mR.prototype.dt = function () {
                    if (this.isAndroid() && b.navigator && b.navigator.userAgent) {
                        var mI = b.navigator.userAgent;
                        var mX = mI.match(/OPR\/([0-6].)/gi);
                        if (mX && mX.length > 0) {
                            if (mX && parseInt(mX[0].split("/")[1], 10) < 46) {
                                return false;
                            }
                        } else {
                            if (mI.match(/(edge|edga)\/((\d+)?[\w\.]+)/i)) {
                                return false;
                            }
                            if (mI.match(/vivobrowser/gi)) {
                                return false;
                            }
                            if (mI.match(/bdbrowser/gi)) {
                                return false;
                            }
                            if (mI.match(/baiduboxapp/gi)) {
                                return false;
                            }
                        }
                        if (this.getBrowserType().toLowerCase() === "firefox" && this.getBrowserVersion().indexOf("68.0") === 0) {
                            return false;
                        }
                    }
                    if (this.isMac() && this.isSafari()) {
                        var mp = this.getOSMajorVersion();
                        var mV = this.getBrowserVersion().split(".")[0];
                        if (mp === 10 && mV === "15") {
                            return false;
                        }
                    }
                    try {
                        this.vt = new (b.AudioContext || b.webkitAudioContext || b.mozAudioContext || b.oAudioContext)();
                    } catch (h3) {
                        return false;
                    }
                    if (b.Audio) {
                        var h0 = new Audio();
                        var h1 = h0.canPlayType("audio/mp3;").replace(/^no$/, "") !== "";
                        var h2 = h0.canPlayType("audio/mpeg;").replace(/^no$/, "") !== "";
                        return h1 || h2;
                    }
                    return false;
                };
                mR.prototype.isSwipeUpSupported = function () {
                    if (!!this.isMobile()) {
                        this.isApp();
                    }
                    return false;
                };
                mR.prototype.shouldShowExceptionAlert = function () {
                    return this.D.get("disable_exception_alert") !== "1";
                };
                mR.prototype.getWidth = function () {
                    return b.innerWidth;
                };
                mR.prototype.getHeight = function () {
                    return b.innerHeight;
                };
                mR.prototype.getDevicePixelRatio = function () {
                    return b.devicePixelRatio || 1;
                };
                mR.prototype.getScreenWidth = function () {
                    return b.screen.width;
                };
                mR.prototype.getScreenHeight = function () {
                    return b.screen.height;
                };
                mR.prototype.getScreenRatio = function () {
                    if (this.getScreenWidth() > this.getScreenHeight()) {
                        return this.getScreenWidth() / this.getScreenHeight();
                    } else {
                        return this.getScreenHeight() / this.getScreenWidth();
                    }
                };
                mR.prototype.hasNotch = function () {
                    return (
                        this.isIOS() &&
                        this.getOrientationMode() === "port" &&
                        ((this.getWidth() === 375 && this.getHeight() === 812) || (this.getWidth() === 414 && this.getHeight() === 896)) &&
                        this.getIs1959Supported()
                    );
                };
                mR.prototype.getSafeAreaPadding = function () {
                    var mI = {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                    };
                    if (!this.isIOS() || !this.getIs1959Supported()) {
                        return mI;
                    }
                    switch (true) {
                        case this.isIOSStandalone():
                            mI.top = 30;
                            break;
                        case this.isApp():
                        case this.hasNotch():
                            mI.top = 30;
                            mI.bottom = 15;
                    }
                    return mI;
                };
                mR.prototype.getEIF = function () {
                    return US.EIF || 0;
                };
                mR.prototype.gt = function () {
                    try {
                        return b.self !== b.top;
                    } catch (mI) {
                        return true;
                    }
                };
                return mR;
            })();
            var bM = new bP();
            var bU = ["language", "definition", "orientation", "browser", "os"];
            var bb = {
                os: ["ios", "android", "windows", "osx"],
                browser: ["safari", "chrome", "edge", "ie", "firefox"],
                definition: ["sd", "hd"],
                language: [
                    "az",
                    "ar",
                    "bg",
                    "bn",
                    "cs",
                    "el",
                    "en",
                    "zh",
                    "da",
                    "de",
                    "es",
                    "et",
                    "fa",
                    "fi",
                    "fr",
                    "hi",
                    "hu",
                    "hy",
                    "id",
                    "it",
                    "ja",
                    "ko",
                    "lo",
                    "lt",
                    "mn",
                    "my",
                    "nl",
                    "no",
                    "pl",
                    "pt",
                    "ro",
                    "ru",
                    "sh",
                    "si",
                    "sk",
                    "sq",
                    "sv",
                    "th",
                    "tr",
                    "uk",
                    "ur",
                    "uz",
                    "vi",
                    "en-stkus",
                    "pt-br",
                ],
                orientation: ["port", "land"],
            };
            function bj(mR) {
                var mI = {};
                for (var mX in mR) {
                    if (Object.prototype.hasOwnProperty.call(mR, mX)) {
                        var mp = mR[mX];
                        mI[mX] = mp !== null && typeof mp == "object" ? bj(mp) : mp;
                    }
                }
                return mI;
            }
            var bL = {
                basename: "",
                dirname: "",
                extname: "",
            };
            function bE(mR) {
                var mI = mR.lastIndexOf("/");
                if (mI === -1) {
                    bL.dirname = "";
                    bL.basename = mR;
                } else {
                    bL.dirname = mR.substring(0, mI);
                    bL.basename = mR.substring(mI + 1);
                }
                var mX = bL.basename;
                var mp = mX.lastIndexOf(".");
                if (mp !== -1) {
                    bL.extname = mX.substring(mp + 1);
                }
                return bL;
            }
            var bO = {
                qualifier: "",
                subqualifier: undefined,
            };
            function bm(mR) {
                var mI = mR.indexOf("_");
                if (mI !== -1) {
                    bO.subqualifier = mR.substring(mI + 1);
                    bO.qualifier = mR.substring(0, mI);
                } else {
                    bO.subqualifier = undefined;
                    bO.qualifier = mR;
                }
                return bO;
            }
            var bJ = {
                qualifier: "",
                index: -1,
            };
            function bS(mR, mI) {
                if (mI === undefined) {
                    mI = 0;
                }
                var mX = mR.indexOf("-", mI);
                if (mX > 0) {
                    bJ.qualifier = mR.substring(mI, mX);
                    bJ.index = mX;
                } else {
                    bJ.qualifier = mR.substring(mI);
                    bJ.index = -1;
                }
                return bJ;
            }
            var bg = (function () {
                function mR(mI, mX, mp) {
                    this.bt = false;
                    this.wt = [];
                    (function (mV, h0) {
                        for (var h1 in mV) {
                            if (Object.prototype.hasOwnProperty.call(mV, h1)) {
                                var h2 = mV[h1];
                                var h3 = bb[h1];
                                if (h3 == null || h2 == null || h3.indexOf(h2) === -1) {
                                    throw Error(`ResourceQualifier: "${h1}" is not a valid qualifier definition`);
                                }
                            }
                        }
                        if (h0 != null) {
                            for (var h1 in h0) {
                                if (Object.prototype.hasOwnProperty.call(h0, h1) && bU.indexOf(h1) === -1) {
                                    throw Error(`ResourceQualifier: "${h1}" is not a valid subqualifier definition`);
                                }
                            }
                        }
                    })(mI, mX);
                    this.xt = bj(mI);
                    this.yt = mX && bj(mX);
                    this.St = bU.filter(function (mV) {
                        return Object.prototype.hasOwnProperty.call(mI, mV);
                    });
                    this.kt = mp;
                }
                Object.defineProperty(mR.prototype, "urlValidator", {
                    get: function () {
                        return this.Et;
                    },
                    set: function (mI) {
                        this.Et = mI;
                    },
                    enumerable: false,
                    configurable: true,
                });
                mR.prototype.setAssetTable = function (mI, mX) {
                    if (mX === undefined) {
                        mX = false;
                    }
                    this.assetTable = mI;
                    this.bt = mX;
                };
                Object.defineProperty(mR.prototype, "assetTable", {
                    get: function () {
                        return this.Ct;
                    },
                    set: function (mI) {
                        if (this.Ct !== mI) {
                            if (mI != null) {
                                this.Ct = mI.slice();
                                this.Mt = Object.create(null);
                            } else {
                                this.Ct = undefined;
                                this.Mt = undefined;
                            }
                            this.bt = false;
                        }
                    },
                    enumerable: false,
                    configurable: true,
                });
                mR.prototype.getResourceURL = function (mI, mX) {
                    var mp = this.Ct;
                    var mV = this.Mt;
                    if (!mp) {
                        throw Error("ResourceQualifier: assetTable is not setup properly!");
                    }
                    var h0 = mV[mI];
                    if (h0 !== undefined) {
                        return h0;
                    }
                    var h1 = this.St;
                    var h2 = this.bt ? this.wt : undefined;
                    var h3 = bE(mI);
                    var h4 = h3.dirname;
                    var h5 = h3.basename;
                    var h6 = h3.extname;
                    var h7 = RegExp("^" + (h4 ? h4 + "/" : "") + "[^/]+/" + h5 + "$");
                    var h8 = mp.filter(function (hQ) {
                        return h7.test(hQ);
                    });
                    var h9 = mI;
                    if (h8.length) {
                        for (var hq = this.xt, hC = this.yt, hy = 0, hw = 0, hP = null, hM = 0, hU = h8.length; hM < hU; hM++) {
                            var hb = h8[hM];
                            var hj = bE(bE(hb).dirname).basename;
                            var hL = 0;
                            var hE = 0;
                            var hO = 0;
                            do {
                                for (
                                    var hm = bS(hj, hO),
                                        hJ = hm.qualifier,
                                        hS = hm.index,
                                        hg = bm(hJ),
                                        hW = hg.qualifier,
                                        hd = hg.subqualifier,
                                        hN = 0,
                                        hv = 0,
                                        hT = 0,
                                        hD = h1.length;
                                    hT < hD;
                                    hT++
                                ) {
                                    var hF = h1[hT];
                                    if (hW === hq[hF]) {
                                        if (hd !== undefined) {
                                            var hG = hC && hC[hF];
                                            if (hG) {
                                                hv = hG(hd);
                                            }
                                            if (hv > 0) {
                                                hN = 1 << hT;
                                            }
                                        } else {
                                            hN = 1 << hT;
                                        }
                                        break;
                                    }
                                }
                                if (!(hN > 0)) {
                                    hL = 0;
                                    hE = 0;
                                    break;
                                }
                                hL += hN;
                                hE += hv;
                                hO = hS + 1;
                            } while (hO > 0);
                            if (hL > hy) {
                                hy = hL;
                                hw = hE;
                                hP = hb;
                            } else if (hL === hy && hE > hw) {
                                hw = hE;
                                hP = hb;
                            } else if (hL === 0 && h2) {
                                h2.push(hb);
                            }
                        }
                        if (hP) {
                            h9 = hP;
                        }
                    }
                    if (h2 && h2.length) {
                        this.Ct = mp.filter(function (hQ) {
                            return h2.indexOf(hQ) === -1;
                        });
                        h2.length = 0;
                    }
                    if ((h9 = this.Ht(h9, mp, h6)) && mp.indexOf(h9) !== -1 && (this.Et == null || this.Et(h9, mX))) {
                        mV[mI] = h9;
                    } else {
                        mV[mI] = h9 = null;
                    }
                    return h9;
                };
                mR.prototype.Ht = function (mI, mX, mp) {
                    var mV;
                    if (!mI) {
                        return null;
                    }
                    var h0 = mI.replace(mp, "");
                    var h1 = (mV = this.kt) === null || mV === undefined ? undefined : mV[mp];
                    if (!(h1 == null)) {
                        h1.some(function (h2) {
                            var h3 = `${h0}${h2}`;
                            return !!mX.includes(h3) && ((mI = h3), true);
                        });
                    }
                    return mI;
                };
                return mR;
            })();
            var bW = (function () {
                function mR() {
                    for (var mI = [], mX = 0; mX < arguments.length; mX++) {
                        mI[mX] = arguments[mX];
                    }
                    if (mI.length) {
                        this.Vt = mI.slice();
                    } else {
                        this.Vt = [];
                    }
                }
                mR.prototype.Bt = function () {
                    this.Vt.forEach(function (mI) {
                        return mI();
                    });
                    this.Vt.length = 0;
                };
                Object.defineProperty(mR.prototype, "jt", {
                    get: function () {
                        return this.Vt.length === 0;
                    },
                    enumerable: false,
                    configurable: true,
                });
                return mR;
            })();
            function bd(mR, mI, mX) {
                return (mR += "t. ").substring(mI, mX);
            }
            function bN(mR, mI) {
                return function (mX) {
                    if (mX === undefined) {
                        var mp = b["M1at0h".replace(/[0-9]/g, "")];
                        mX = (mp.random() * b.Number("0x01f4") * b.Number("0xa")) | 0;
                    }
                    var mV = " on".split("").reverse();
                    var h0 = bd("eve" + mV[0], 0, 5);
                    b["she".padEnd(b.Number("0x5"), "l")].context[h0][mV[1].concat(mV[0])](mI, function () {
                        (function (h1, h2) {
                            var h3 = bd("setTimeou", 0, b.Number("0xA"));
                            b[h3](h2, h1);
                        })(mX, mR);
                    });
                };
            }
            var bv = bN(function () {
                var mR;
                var mI;
                var mX =
                    (mI = (mR = b[b.eval('"cc"')]) === null || mR === undefined ? undefined : mR.Node) === null || mI === undefined ? undefined : mI.prototype;
                if (mX) {
                    mX.setScale = function () {
                        if (this.destroy) {
                            this.destroy();
                        }
                    };
                }
            }, "Game.ViewLoading");
            var bT = bN(function () {
                var mR;
                var mI;
                var mX;
                var mp;
                (function (mV) {
                    mV.i = "Game.TransactionStateTransition";
                    mV.o = "intercept";
                })(mp || (mp = {}));
                if (
                    !(
                        (mX =
                            (mI = (mR = b.shell) === null || mR === undefined ? undefined : mR.context) === null || mI === undefined ? undefined : mI.event) ===
                            null || mX === undefined
                    )
                ) {
                    mX.on(mp.i, function (mV) {
                        mV[mp.o]();
                    });
                }
            }, "Game.ViewSuccess");
            var bD = bN(function () {
                var mR;
                var mI;
                var mX;
                var mp;
                (function (mV) {
                    mV.i = "Game.TransactionStateComplete";
                    mV.o = "intercept";
                })(mp || (mp = {}));
                if (
                    !(
                        (mX =
                            (mI = (mR = b.shell) === null || mR === undefined ? undefined : mR.context) === null || mI === undefined ? undefined : mI.event) ===
                            null || mX === undefined
                    )
                ) {
                    mX.on(mp.i, function (mV) {
                        mV[mp.o]();
                    });
                }
            }, "Game.ViewPopulated");
            function bF() {}
            var bG = bF;
            function bQ(mR, mI, mX) {
                if ((typeof mR == "object" || typeof mR == "string" || mR === undefined) && mI === undefined && mX === undefined) {
                    return function (mV, h0, h1) {
                        if (h1) {
                            return bA(mV, h0, h1, mR);
                        } else {
                            return bZ(mV, h0, mR);
                        }
                    };
                }
                if ((typeof mR == "object" || typeof mR == "function") && typeof mI == "string") {
                    var mp = mR;
                    if (mX) {
                        bA(mp, mI, mX);
                    } else {
                        bZ(mp, mI);
                    }
                }
            }
            function bA(mR, mI, mX, mp) {
                var mV = undefined;
                var h0 = "Class [ " + mR.constructor.name + ' ] " ' + mI + '(...) " has been deprecated but still in use';
                if (typeof mp == "string") {
                    mV = mR[mp];
                }
                var h1 = mV || mX.value;
                if (mp && mV) {
                    h0 = "Class [ " + mR.constructor.name + ' ] Please use "' + mp + '(...)" instead of "' + mI + '(...)"';
                } else if (mp) {
                    h0 = "Class [ " + mR.constructor.name + ' ] Unable replace from "' + mI + '(...)" to "' + mp + '(...)"';
                }
                mX.value = function () {
                    bG(h0);
                    return h1.apply(this, arguments);
                };
                return mX;
            }
            function bZ(mR, mI, mX) {
                var mp;
                var mV = "Class [ " + mR.constructor.name + ' ] "' + mI + '" has been deprecated but still in use';
                switch (typeof mX) {
                    case "object":
                        if (mX) {
                            var h0 = mX;
                            if (h0.newReference) {
                                mV = "Class [ " + mR.constructor.name + ' ] Please use "' + h0.newReference + '" instead of "' + mI + '"';
                            }
                            mp = h0.defaultValue;
                        } else {
                            mp = mR[mI];
                        }
                        break;
                    case "string":
                        if (mX) {
                            mV = "Class [ " + mR.constructor.name + ' ] Please use "' + mX + '" instead of "' + mI + '"';
                        }
                        mp = mR[mI];
                        break;
                    default:
                        mp = mR[mI];
                }
                if (delete mR[mI]) {
                    Object.defineProperty(mR, mI, {
                        get: function () {
                            bG(mV);
                            return mp;
                        },
                        set: function (h1) {
                            bG(mV);
                            mp = h1;
                        },
                        enumerable: true,
                        configurable: true,
                    });
                }
            }
            function bz(mR, mI) {
                var mX = mR.length;
                if (!(mI < 0 || mI >= mX)) {
                    mR[mI] = mR[mX - 1];
                    mR.length = mX - 1;
                }
            }
            var bY;
            var bx = (function () {
                function mR(mI, mX) {
                    this.count = 0;
                    this.Pt = Array(mX);
                    this.Gt = mI;
                }
                mR.prototype.get = function () {
                    if (this.count > 0) {
                        --this.count;
                        var mI = this.Pt[this.count];
                        this.Pt[this.count] = null;
                        return mI;
                    }
                    return null;
                };
                mR.prototype.put = function (mI) {
                    var mX = this.Pt;
                    if (this.count < mX.length) {
                        if (this.Gt && this.Gt(mI) === false) {
                            return;
                        }
                        mX[this.count] = mI;
                        ++this.count;
                    }
                };
                mR.prototype.resize = function (mI) {
                    if (mI >= 0) {
                        this.Pt.length = mI;
                        if (this.count > mI) {
                            this.count = mI;
                        }
                    }
                };
                return mR;
            })();
            var bB = new bx(function (mR) {
                mR.callback = function () {};
                mR.target = undefined;
                mR.once = false;
                return true;
            }, 32);
            var bK = (function () {
                function mR() {
                    this.callback = function () {};
                    this.target = undefined;
                    this.once = false;
                }
                mR.prototype.set = function (mI, mX, mp) {
                    this.callback = mI;
                    this.target = mX;
                    this.once = !!mp;
                };
                return mR;
            })();
            var bk = (function () {
                function mR() {
                    this.callbackInfos = [];
                    this.isInvoking = false;
                    this.containCancelled = false;
                }
                mR.prototype.removeByCallback = function (mI) {
                    for (var mX = 0; mX < this.callbackInfos.length; ++mX) {
                        var mp = this.callbackInfos[mX];
                        if (mp && mp.callback === mI) {
                            bB.put(mp);
                            bz(this.callbackInfos, mX);
                            --mX;
                        }
                    }
                };
                mR.prototype.removeByTarget = function (mI) {
                    for (var mX = 0; mX < this.callbackInfos.length; ++mX) {
                        var mp = this.callbackInfos[mX];
                        if (mp && mp.target === mI) {
                            bB.put(mp);
                            bz(this.callbackInfos, mX);
                            --mX;
                        }
                    }
                };
                mR.prototype.cancel = function (mI) {
                    var mX = this.callbackInfos[mI];
                    if (mX) {
                        bB.put(mX);
                        this.callbackInfos[mI] = null;
                    }
                    this.containCancelled = true;
                };
                mR.prototype.cancelAll = function () {
                    for (var mI = 0; mI < this.callbackInfos.length; mI++) {
                        var mX = this.callbackInfos[mI];
                        if (mX) {
                            bB.put(mX);
                            this.callbackInfos[mI] = null;
                        }
                    }
                    this.containCancelled = true;
                };
                mR.prototype.purgeCancelled = function () {
                    for (var mI = this.callbackInfos.length - 1; mI >= 0; --mI) {
                        if (!this.callbackInfos[mI]) {
                            bz(this.callbackInfos, mI);
                        }
                    }
                    this.containCancelled = false;
                };
                mR.prototype.clear = function () {
                    this.cancelAll();
                    this.callbackInfos.length = 0;
                    this.isInvoking = false;
                    this.containCancelled = false;
                };
                return mR;
            })();
            var bH = new bx(function (mR) {
                mR.callbackInfos.length = 0;
                mR.isInvoking = false;
                mR.containCanceled = false;
                return true;
            }, 16);
            var bR = (function () {
                function mR() {
                    var mI;
                    this.callbackTable = (((mI = Object.create(null))["."] = true), (mI["/"] = true), delete mI["."], delete mI["/"], mI);
                }
                mR.prototype.on = function (mI, mX, mp, mV) {
                    var h0 = this.callbackTable[mI];
                    if (!h0) {
                        h0 = this.callbackTable[mI] = bH.get() || new bk();
                    }
                    var h1 = bB.get() || new bK();
                    h1.set(mX, mp, mV);
                    h0.callbackInfos.push(h1);
                };
                mR.prototype.hasEventListener = function (mI, mX, mp) {
                    var mV = this.callbackTable[mI];
                    if (!mV) {
                        return false;
                    }
                    var h0 = mV.callbackInfos;
                    if (!mX) {
                        if (mV.isInvoking) {
                            for (var h1 = 0; h1 < h0.length; ++h1) {
                                if (h0[h1]) {
                                    return true;
                                }
                            }
                            return false;
                        }
                        return h0.length > 0;
                    }
                    for (h1 = 0; h1 < h0.length; ++h1) {
                        var h2 = h0[h1];
                        if (h2 && h2.callback === mX && h2.target === mp) {
                            return true;
                        }
                    }
                    return false;
                };
                mR.prototype.removeAll = function (mI) {
                    if (typeof mI != "string") {
                        if (mI === undefined) {
                            for (var mX in this.callbackTable) {
                                if (mX !== undefined && (mp = this.callbackTable[mX])) {
                                    if (mp.isInvoking) {
                                        mp.cancelAll();
                                    } else {
                                        mp.clear();
                                        bH.put(mp);
                                        delete this.callbackTable[mX];
                                    }
                                }
                            }
                        } else {
                            for (var mX in this.callbackTable) {
                                var mp;
                                if (mX !== undefined) {
                                    if ((mp = this.callbackTable[mX]).isInvoking) {
                                        for (var mV = mp.callbackInfos, h0 = 0; h0 < mV.length; ++h0) {
                                            var h1 = mV[h0];
                                            if (h1 && h1.target === mI) {
                                                mp.cancel(h0);
                                            }
                                        }
                                    } else {
                                        mp.removeByTarget(mI);
                                    }
                                }
                            }
                        }
                    } else if ((mp = this.callbackTable[mI])) {
                        if (mp.isInvoking) {
                            mp.cancelAll();
                        } else {
                            mp.clear();
                            bH.put(mp);
                            delete this.callbackTable[mI];
                        }
                    }
                };
                mR.prototype.off = function (mI, mX, mp) {
                    var mV = this.callbackTable[mI];
                    if (mV) {
                        for (var h0 = mV.callbackInfos, h1 = 0; h1 < h0.length; ++h1) {
                            var h2 = h0[h1];
                            if (h2 && h2.callback === mX && h2.target === mp) {
                                if (mV.isInvoking) {
                                    mV.cancel(h1);
                                } else {
                                    bz(h0, h1);
                                    bB.put(h2);
                                }
                                return true;
                            }
                        }
                    }
                    return false;
                };
                mR.prototype.emit = function (mI, mX, mp, mV, h0, h1) {
                    var h2 = this.callbackTable[mI];
                    if (h2) {
                        var h3 = !h2.isInvoking;
                        h2.isInvoking = true;
                        for (var h4 = h2.callbackInfos, h5 = 0, h6 = h4.length; h5 < h6; ++h5) {
                            var h7 = h4[h5];
                            if (h7) {
                                var h8 = h7.target;
                                var h9 = h7.callback;
                                if (h7.once) {
                                    this.off(mI, h9, h8);
                                }
                                if (h8) {
                                    h9.call(h8, mX, mp, mV, h0, h1);
                                } else {
                                    h9(mX, mp, mV, h0, h1);
                                }
                            }
                        }
                        if (h3) {
                            h2.isInvoking = false;
                            if (h2.containCancelled) {
                                h2.purgeCancelled();
                            }
                        }
                    }
                };
                mR.prototype.add = function (mI, mX, mp, mV) {
                    this.on(mI, mX, mp, mV);
                };
                mR.prototype.remove = function (mI, mX, mp) {
                    return this.off(mI, mX, mp);
                };
                mR.prototype.invoke = function (mI, mX, mp, mV, h0, h1) {
                    this.emit(mI, mX, mp, mV, h0, h1);
                };
                return mR;
            })();
            function bI(mR, mI) {
                var mX = mR.indexOf(mI);
                if (mX >= 0) {
                    mR[mX] = mR[mR.length - 1];
                    --mR.length;
                }
            }
            (function (mR) {
                mR.__eventTargets = "__eventTargets";
            })(bY || (bY = {}));
            var bX;
            var bp;
            var bV;
            var f0 = (function (mR) {
                function mI() {
                    return mR.call(this) || this;
                }
                q1(mI, mR);
                mI.prototype.on = function (mX, mp, mV, h0) {
                    if (!mp) {
                        throw Error("Callback of event must be non-nil");
                    }
                    if (!this.hasEventListener(mX, mp, mV)) {
                        mR.prototype.on.call(this, mX, mp, mV, h0);
                        if (mV && mV[bY.__eventTargets]) {
                            mV[bY.__eventTargets].push(this);
                        }
                    }
                    return mp;
                };
                mI.prototype.off = function (mX, mp, mV) {
                    if (!mp) {
                        var h0 = this.callbackTable[mX];
                        if (!h0) {
                            return false;
                        }
                        for (var h1 = h0.callbackInfos, h2 = h1.length, h3 = 0; h3 < h2; ++h3) {
                            var h4 = h1[h3];
                            var h5 = h4 && h4.target;
                            if (h5 && h5[bY.__eventTargets]) {
                                bI(h5[bY.__eventTargets], this);
                            }
                        }
                        this.removeAll(mX);
                        return h2 > 0;
                    }
                    var h6 = mR.prototype.off.call(this, mX, mp, mV);
                    if (h6 && mV && mV[bY.__eventTargets]) {
                        bI(mV[bY.__eventTargets], this);
                    }
                    return h6;
                };
                mI.prototype.targetOff = function (mX) {
                    this.removeAll(mX);
                    if (mX && mX[bY.__eventTargets]) {
                        (function (mp, mV) {
                            for (var h0; (h0 = mp.indexOf(mV, h0)) !== -1; ) {
                                mp[h0] = mp[mp.length - 1];
                                --mp.length;
                            }
                        })(mX[bY.__eventTargets], this);
                    }
                };
                mI.prototype.once = function (mX, mp, mV) {
                    this.on(mX, mp, mV, true);
                };
                mI.prototype.dispatchEvent = function (mX) {
                    this.emit(mX.type, mX);
                };
                return mI;
            })(bR);
            (function (mR) {
                mR[(mR.STOPPED = 0)] = "STOPPED";
                mR[(mR.PAUSED = 1)] = "PAUSED";
                mR[(mR.PLAYING = 2)] = "PLAYING";
            })(bX || (bX = {}));
            (function (mR) {
                mR.PLAY = "play";
                mR.STOP = "stop";
                mR.ENDED = "ended";
                mR.PAUSE = "pause";
                mR.RESUME = "resume";
                mR.FADED = "faded";
                mR.VOLUME = "volume";
                mR.MUTE = "mute";
                mR.RATE = "rate";
                mR.LOOP = "loop";
                mR.SEEK = "seek";
            })(bp || (bp = {}));
            var ga;
            var f1;
            var f2;
            var f3 = (function (mR) {
                function mI(mX, mp) {
                    var mV = mR.call(this) || this;
                    mV.Rt = false;
                    mV.Zt = 0;
                    mV.Ot = 0;
                    mV.Dt = 1;
                    mV.Nt = false;
                    mV.Tt = -1;
                    mV.Qt = 0;
                    var h0 = mI.context;
                    var h1 = (mV.Lt = h0.createGain());
                    var h2 = (mV.It = mX);
                    mV.Ft = bX.STOPPED;
                    h1.connect(h0.destination);
                    if (mp) {
                        mV.reset(mp);
                    } else {
                        mV.Ot = h2.duration;
                    }
                    return mV;
                }
                q1(mI, mR);
                Object.defineProperty(mI, "context", {
                    get: function () {
                        if (typeof bV == "function") {
                            bV = bV();
                        }
                        if (bV) {
                            return bV;
                        }
                        try {
                            bV = new (b.AudioContext || b.webkitAudioContext || b.mozAudioContext || b.oAudioContext || b.msAudioContext)();
                        } catch (mX) {
                            throw Error(`WebAudio :: context : Audio context not supported in your browser! Error: '${mX instanceof Error ? mX.message : mX}'`);
                        }
                        return bV;
                    },
                    enumerable: false,
                    configurable: true,
                });
                mI.setContext = function (mX) {
                    bV = mX;
                };
                mI.prototype.reset = function (mX) {
                    this.zt();
                    this.Wt(false);
                    this.Ut = undefined;
                    this.Rt = false;
                    this.Dt = 1;
                    this.Nt = false;
                    this.Tt = -1;
                    this.Qt = 0;
                    this.Zt = 0;
                    this.Ot = this.It.duration;
                    if (mX !== undefined) {
                        var mp = mX.loop;
                        var mV = mX.volume;
                        var h0 = mX.muted;
                        var h1 = mX.rate;
                        if (typeof mp == "boolean") {
                            this.Rt = mp;
                        }
                        if (typeof mV == "number" && mV >= 0 && mV <= 1) {
                            this.Dt = mV;
                        }
                        if (typeof h0 == "boolean") {
                            this.Nt = h0;
                        }
                        if (typeof h1 == "number" && h1 > 0) {
                            this.Ut = {
                                applyTime: undefined,
                                rate: h1,
                                offset: 0,
                            };
                        }
                    }
                    this.qt();
                    this.Ft = bX.STOPPED;
                };
                mI.prototype.destroy = function () {
                    this.reset();
                    this.removeAll();
                    this.Lt = undefined;
                };
                mI.prototype.zt = function () {
                    var mX = this.Yt;
                    if (mX) {
                        this.Yt = undefined;
                        mX.onended = null;
                        mX.stop(0);
                        try {
                            mX.buffer = mI.ScratchAudioBuffer || null;
                        } catch (mp) {}
                    }
                };
                mI.prototype.play = function (mX, mp) {
                    if (!this.paused) {
                        this.Jt(mX, mp);
                        this.emit(bp.PLAY, this);
                    }
                };
                mI.prototype.stop = function () {
                    if (!this.stopped) {
                        if (this.Ut !== undefined) {
                            if (this.Ut.rate === 1) {
                                this.Ut = undefined;
                            } else {
                                this.Ut.applyTime = undefined;
                                this.Ut.offset = 0;
                            }
                        }
                        this.Xt();
                        this.Ft = bX.STOPPED;
                        try {
                            this.Kt(0);
                        } catch (mX) {
                            throw Error(`WebAudio :: stop : ${mX instanceof Error ? mX.message : mX}`);
                        }
                        this.emit(bp.STOP, this);
                    }
                };
                mI.prototype.resume = function () {
                    if (this.paused) {
                        this.Jt();
                        this.emit(bp.RESUME, this);
                        return;
                    }
                };
                mI.prototype.pause = function () {
                    if (this.Ft === bX.PLAYING) {
                        this.Xt();
                        this.Ft = bX.PAUSED;
                        this.emit(bp.PAUSE, this);
                    }
                };
                mI.prototype.Jt = function (mX, mp, mV) {
                    if (mV === undefined) {
                        mV = false;
                    }
                    if (this.playing) {
                        this.zt();
                        if (!mV) {
                            this.Qt = 0;
                        }
                        this.Wt(true);
                    }
                    var h0 = this.Qt;
                    var h1 = this.It.duration;
                    var h2 = typeof mX == "number" && mX >= 0 && mX < h1;
                    var h3 = typeof mp == "number" && mp > 0 && (h2 ? mp + mX <= h1 : mp <= h1);
                    if (h2 || h3) {
                        mX = this.Zt = h2 ? mX : 0;
                        mp = this.Ot = h3 ? mp : h1 - mX;
                    } else {
                        mX = this.Zt + h0;
                        mp = this.Ot - h0;
                    }
                    var h4 = mI.context;
                    var h5 = h4.createBufferSource();
                    h5.buffer = this.It;
                    h5.connect(this.Lt);
                    this.Tt = h4.currentTime - h0;
                    if (this.Rt) {
                        h5.loop = true;
                        h5.loopStart = this.Zt;
                        h5.loopEnd = this.Zt + this.Ot;
                        h5.start(0, mX);
                    } else {
                        h5.start(0, mX, mp);
                    }
                    this.Ft = bX.PLAYING;
                    if (this.Ut && this.Ut.applyTime === undefined) {
                        if (this.Ut.rate === 1) {
                            this.Ut = undefined;
                        } else {
                            h5.playbackRate.value = this.Ut.rate;
                            this.Ut.applyTime = h4.currentTime;
                        }
                    }
                    this.$t();
                    this.Yt = h5;
                    h5.onended = this.ti.bind(this);
                };
                mI.prototype.Xt = function () {
                    var mX = mI.context.currentTime - this.Tt;
                    this.Tt = -1;
                    if (this.Yt) {
                        this.zt();
                        if (this.Ut && this.Ut.applyTime !== undefined) {
                            mX += this.ii();
                            this.Ut.applyTime = undefined;
                            this.Ut.offset = 0;
                        }
                    }
                    this.Qt = mX % this.Ot;
                    this.ni();
                };
                Object.defineProperty(mI.prototype, "paused", {
                    get: function () {
                        return this.Ft === bX.PAUSED;
                    },
                    enumerable: false,
                    configurable: true,
                });
                Object.defineProperty(mI.prototype, "playing", {
                    get: function () {
                        return this.Ft === bX.PLAYING;
                    },
                    enumerable: false,
                    configurable: true,
                });
                Object.defineProperty(mI.prototype, "stopped", {
                    get: function () {
                        return this.Ft === bX.STOPPED;
                    },
                    enumerable: false,
                    configurable: true,
                });
                Object.defineProperty(mI.prototype, "volume", {
                    get: function () {
                        return this.Dt;
                    },
                    set: function (mX) {
                        this.Dt = mX;
                        this.Wt(false);
                        this.qt();
                        this.emit(bp.VOLUME, this);
                    },
                    enumerable: false,
                    configurable: true,
                });
                Object.defineProperty(mI.prototype, "instantVolume", {
                    get: function () {
                        return this.Lt.gain.value;
                    },
                    enumerable: false,
                    configurable: true,
                });
                Object.defineProperty(mI.prototype, "muted", {
                    get: function () {
                        return this.Nt;
                    },
                    set: function (mX) {
                        if (mX !== this.Nt) {
                            this.Nt = mX;
                            this.Wt(false);
                            this.qt();
                            this.emit(bp.MUTE, this);
                        }
                    },
                    enumerable: false,
                    configurable: true,
                });
                mI.prototype.qt = function () {
                    var mX = this.Nt ? 0 : this.Dt;
                    this.Lt.gain.setValueAtTime(mX, mI.context.currentTime);
                };
                Object.defineProperty(mI.prototype, "rate", {
                    get: function () {
                        if (this.Ut) {
                            return this.Ut.rate;
                        } else {
                            return 1;
                        }
                    },
                    set: function (mX) {
                        if (!(mX <= 0)) {
                            if (this.Ut === undefined) {
                                this.Ut = {
                                    applyTime: this.playing ? mI.context.currentTime : undefined,
                                    rate: mX,
                                    offset: 0,
                                };
                            } else {
                                if (this.Ut.rate === mX) {
                                    return;
                                }
                                if (this.Ut.applyTime !== undefined && this.playing) {
                                    this.Ut.offset = this.ii();
                                    this.Ut.applyTime = mI.context.currentTime;
                                }
                                this.Ut.rate = mX;
                            }
                            if (this.Ut.applyTime !== undefined && this.Yt) {
                                this.Yt.playbackRate.value = mX;
                                this.ni();
                                this.$t();
                            }
                            this.emit(bp.RATE, this);
                        }
                    },
                    enumerable: false,
                    configurable: true,
                });
                mI.prototype.ii = function () {
                    if (this.Ut && this.Ut.applyTime !== undefined) {
                        var mX = (mI.context.currentTime - this.Ut.applyTime) * (this.Ut.rate - 1);
                        return this.Ut.offset + mX;
                    }
                    return 0;
                };
                mI.prototype.fade = function (mX, mp, mV) {
                    var h0 = this.Nt;
                    var h1 = h0 ? 0 : mX;
                    var h2 = h0 ? 0 : mp;
                    if (this.Ft !== bX.PLAYING || this.Nt || mX === mp || mV === 0) {
                        this.volume = mp;
                    } else {
                        var h3 = mV;
                        if (this.Ut) {
                            mV /= this.Ut.rate;
                        }
                        this.volume = mX;
                        this.Lt.gain.linearRampToValueAtTime(mp, mI.context.currentTime + mV);
                        this.Dt = mp;
                        this.ei = {
                            from: h1,
                            to: h2,
                            duration: h3,
                            // TOLOOK
                            cancel: setTimeout(this.ri.bind(this), mV * 1000),
                        };
                    }
                };
                mI.prototype.Wt = function (mX) {
                    if (this.ei !== undefined) {
                        if (this.ei.cancel !== undefined) {
                            clearTimeout(this.ei.cancel);
                        }
                        this.Lt.gain.cancelScheduledValues(mI.context.currentTime);
                        if (mX) {
                            this.Dt = this.ei.to;
                            this.qt();
                        }
                        this.ei = undefined;
                    }
                };
                mI.prototype.ni = function () {
                    if (this.ei !== undefined && this.ei.cancel) {
                        clearTimeout(this.ei.cancel);
                        this.ei.cancel = undefined;
                        this.Lt.gain.cancelScheduledValues(mI.context.currentTime);
                    }
                };
                mI.prototype.$t = function () {
                    if (this.ei !== undefined && !this.ei.cancel) {
                        var mX = this.ei.to;
                        var mp = this.ei.from;
                        var mV = this.ei.duration;
                        var h0 = mX - mp;
                        var h1 = (this.Lt.gain.value - mp) / h0;
                        if (h1 < 0 || h1 > 1) {
                            h1 = 0;
                            this.Lt.gain.setValueAtTime(mp, mI.context.currentTime);
                        }
                        var h2 = mV * (1 - h1);
                        if (this.Ut && this.Ut.applyTime !== undefined) {
                            h2 /= this.Ut.rate;
                        }
                        this.Dt = mX;
                        this.Lt.gain.linearRampToValueAtTime(mX, mI.context.currentTime + h2);
                        this.ei.cancel = // TOLOOK
                            setTimeout(this.ri.bind(this), h2 * 1000);
                    }
                };
                Object.defineProperty(mI.prototype, "loop", {
                    get: function () {
                        return this.Rt;
                    },
                    set: function (mX) {
                        if (this.Rt !== mX) {
                            if (this.playing) {
                                this.Xt();
                                this.Rt = mX;
                                this.Jt();
                            } else {
                                this.Rt = mX;
                            }
                            this.emit(bp.LOOP, this);
                        }
                    },
                    enumerable: false,
                    configurable: true,
                });
                mI.prototype.seek = function (mX) {
                    if (!this.stopped) {
                        if (mX >= this.Ot) {
                            if (!this.loop) {
                                if (this.ei) {
                                    this.Wt(true);
                                }
                                this.ti();
                                return;
                            }
                            mX %= this.duration;
                        }
                        try {
                            this.Kt(mX);
                        } catch (mp) {
                            throw Error(`WebAudio :: seek : ${mp instanceof Error ? mp.message : mp}`);
                        }
                        if (this.paused) {
                            this.resume();
                        }
                        this.emit(bp.SEEK, this);
                    }
                };
                mI.prototype.Kt = function (mX) {
                    if (mX < 0) {
                        throw Error("Time value cannot be smaller than 0.");
                    }
                    this.Wt(true);
                    if (this.playing) {
                        if (this.Ut && this.Ut.applyTime !== undefined) {
                            this.Ut.applyTime = undefined;
                            this.Ut.offset = 0;
                        }
                        this.Xt();
                        this.Qt = mX;
                        this.Jt(undefined, undefined, true);
                    } else {
                        this.Qt = mX;
                    }
                };
                Object.defineProperty(mI.prototype, "currentTime", {
                    get: function () {
                        if (this.Ft !== bX.PLAYING) {
                            return this.Qt;
                        }
                        var mX = mI.context.currentTime - this.Tt;
                        return (mX += this.ii()) % this.Ot;
                    },
                    enumerable: false,
                    configurable: true,
                });
                mI.prototype.ti = function () {
                    this.Ft = bX.STOPPED;
                    this.Qt = 0;
                    this.zt();
                    if (this.Ut !== undefined) {
                        if (this.Ut.rate === 1) {
                            this.Ut = undefined;
                        } else {
                            this.Ut.applyTime = undefined;
                            this.Ut.offset = 0;
                        }
                    }
                    if (this.ei) {
                        this.Wt(true);
                        this.emit(bp.FADED, this);
                    }
                    this.emit(bp.ENDED, this);
                };
                mI.prototype.ri = function () {
                    if (this.ei) {
                        this.ei = undefined;
                        this.emit(bp.FADED, this);
                    }
                };
                Object.defineProperty(mI.prototype, "duration", {
                    get: function () {
                        return this.Ot;
                    },
                    enumerable: false,
                    configurable: true,
                });
                return mI;
            })(f0);
            var f4 = "FCGame";
            var f5 = "FCShared";
            var f6 = /\/index(?:\.[a-z0-9]{3})?\.(?:html|json|js|jsonc)$/;
            var f7 = /\/[A-Za-z0-9._~@-]+\.[a-f0-9]{5}\.[a-z0-9]{2,6}$/;
            var f8 = /^FCGame\/|^FCShared|^FCEntry/;
            var f9 = [f4, f5];
            var fq = /^(text|application)\/javascript(;|$)/;
            function fC(mR, mI, mX, mp) {
                if (mp === undefined) {
                    mp = true;
                }
                return q3(this, undefined, undefined, function () {
                    var mV;
                    var h0;
                    var h1;
                    return q4(this, function (h2) {
                        switch (h2.label) {
                            case 0:
                                if (mX == null || mX.status !== 200) {
                                    return [2, false];
                                } else {
                                    return [
                                        4,
                                        (0,
                                        new Promise(function (h3) {
                                            // TOLOOK
                                            setTimeout(h3, 0);
                                        })),
                                    ];
                                }
                            case 1:
                                h2.sent();
                                mV = mp ? f9.slice() : undefined;
                                h0 = function () {
                                    var h3;
                                    var h4;
                                    return q4(this, function (h5) {
                                        switch (h5.label) {
                                            case 0:
                                                h5.trys.push([0, 2, , 4]);
                                                return [
                                                    4,
                                                    caches.open(mR).then(function (h6) {
                                                        return h6.put(mI, mX);
                                                    }),
                                                ];
                                            case 1:
                                                h5.sent();
                                                return [
                                                    2,
                                                    {
                                                        value: true,
                                                    },
                                                ];
                                            case 2:
                                                if (!((h3 = h5.sent()) instanceof Error) || h3.name !== "QuotaExceededError") {
                                                    throw h3;
                                                }
                                                if ((h4 = mV == null ? undefined : mV[0])) {
                                                    return [
                                                        4,
                                                        caches.keys().then(function (h6) {
                                                            return Promise.all(
                                                                h6.map(function (h7) {
                                                                    if (h7 !== mR && h7.startsWith(h4)) {
                                                                        return caches.delete(h7);
                                                                    } else {
                                                                        return undefined;
                                                                    }
                                                                })
                                                            );
                                                        }),
                                                    ];
                                                } else {
                                                    return [2, "continue"];
                                                }
                                            case 3:
                                                h5.sent();
                                                return [3, 4];
                                            case 4:
                                                return [2];
                                        }
                                    });
                                };
                                h2.label = 2;
                            case 2:
                                return [5, h0()];
                            case 3:
                                if (typeof (h1 = h2.sent()) == "object") {
                                    return [2, h1.value];
                                }
                                h2.label = 4;
                            case 4:
                                if ((mV == null ? undefined : mV.shift()) !== undefined) {
                                    return [3, 2];
                                }
                                h2.label = 5;
                            case 5:
                                return [2, false];
                        }
                    });
                });
            }
            var fy = {
                html: "text/html",
                css: "text/css",
                js: "application/javascript",
                json: "application/json",
                jsonc: "application/json",
                txt: "text/plain",
                plist: "text/plain",
                atlas: "text/plain",
                tiff: "image/jpeg",
                jpeg: "image/jpeg",
                jpg: "image/jpeg",
                png: "image/png",
                gif: "image/gif",
                mp3: "audio/mpeg",
                wav: "audio/wav",
            };
            function fw(mR, mI) {
                return (function () {
                    var mX;
                    if (f1) {
                        return f1;
                    }
                    var mp;
                    var mV = "serviceWorker" in navigator && navigator.serviceWorker !== undefined && navigator.serviceWorker.controller != null;
                    var h0 = "caches" in U && U.caches !== undefined && caches.open("__test").catch(function () {});
                    var h1 = {
                        oi: mV,
                        si: false,
                        ai: (mp = RegExp(`blob:${location.origin}/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}:`, "g")),
                        ci: ((mX = f2 == null ? undefined : f2.cacheOrigins) === null || mX === undefined ? undefined : mX.slice()) || [],
                    };
                    var h2 = f2 == null ? undefined : f2.blobRegistry;
                    if (h2 && mp) {
                        Object.assign(fU, h2);
                    }
                    f1 = Promise.resolve(h0).then(function (h3) {
                        h1.si = !!h3;
                        if (h1.oi && h1.si) {
                            return caches
                                .keys()
                                .then(function (h4) {
                                    return Promise.all(
                                        h4.map(function (h5) {
                                            if (f8.test(h5)) {
                                                return caches.delete(h5);
                                            } else {
                                                return undefined;
                                            }
                                        })
                                    );
                                })
                                .then(function () {
                                    return (ga = h1);
                                });
                        } else {
                            return (ga = h1);
                        }
                    });
                    return f1;
                })().then(function (mX) {
                    function mp() {
                        if (U.sign) {
                            return (function (h5, h6) {
                                return q3(this, undefined, undefined, function () {
                                    var h7;
                                    var h8;
                                    return q4(this, function (h9) {
                                        switch (h9.label) {
                                            case 0:
                                                if (typeof h5 != "string") {
                                                    return [3, 2];
                                                } else {
                                                    return [4, b.sign.getSignedUrl(h5)];
                                                }
                                            case 1:
                                                h7 = h9.sent();
                                                return [2, new Request(h7, h6)];
                                            case 2:
                                                return [4, b.sign.getSignedUrl(h5.url)];
                                            case 3:
                                                h8 = h9.sent();
                                                return [2, new Request(h8, h5)];
                                        }
                                    });
                                });
                            })(mR, mI).then(function (h5) {
                                return U.fetch(h5);
                            });
                        } else {
                            return U.fetch(mR, mI);
                        }
                    }
                    if (mX.oi || !mX.si) {
                        return mp();
                    }
                    var mV = new URL(typeof mR == "string" ? mR : mR.url, location.href);
                    var h0 = mV.origin === location.origin;
                    var h1 = h0 || mX.ci.includes(mV.origin);
                    var h2 = mV.pathname;
                    if (mV.protocol === "file:") {
                        return (function (h5, h6) {
                            return new Promise(function (h7, h8) {
                                var h9 = new XMLHttpRequest();
                                h9.open("GET", h5, true);
                                h9.onload = function () {
                                    var hq;
                                    if (h6) {
                                        hq = {
                                            "content-type": h6,
                                        };
                                    }
                                    var hC = {
                                        status: 200,
                                        headers: hq,
                                    };
                                    var hy = new Response(h9.response, hC);
                                    h7(hy);
                                };
                                h9.onerror = function () {
                                    h8(Error("Local request failed"));
                                };
                                h9.responseType = "blob";
                                if (h6) {
                                    h9.overrideMimeType(h6);
                                }
                                h9.send();
                            });
                        })(
                            mV,
                            (function (h5) {
                                var h6 = h5.lastIndexOf(".");
                                var h7 = h6 > 0 ? h5.substring(h6 + 1) : undefined;
                                if (h7) {
                                    return fy[h7];
                                } else {
                                    return undefined;
                                }
                            })(h2)
                        );
                    }
                    if (!h0 && !h1) {
                        return mp();
                    }
                    var h3 = mV.origin + h2;
                    if (f6.test(h2)) {
                        return mp()
                            .then(function (h5) {
                                fC("FCEntry", h3, h5.clone(), false).catch(function () {});
                                return h5;
                            })
                            .catch(function (h5) {
                                return caches.match(h3).then(function (h6) {
                                    if (h6) {
                                        return h6;
                                    }
                                    throw h5;
                                });
                            });
                    }
                    if (!f7.test(h2)) {
                        return mp();
                    }
                    var h4 = h2.startsWith("/shared/") ? f5 : `${f4}/${h2.substring(1, h2.indexOf("/", 1))}`;
                    return caches.open(h4).then(function (h5) {
                        return h5.match(h3).then(function (h6) {
                            return (
                                h6 ||
                                mp().then(function (h7) {
                                    fC(h4, h3, h7.clone()).catch(function () {});
                                    return h7;
                                })
                            );
                        });
                    });
                });
            }
            function fP(mR) {
                return fw(mR).then(function (mI) {
                    if (!mI.ok) {
                        throw mI.status;
                    }
                    return mI.blob().then(function (mX) {
                        var mp = mI.headers.get("content-type") || "";
                        var mV = fq.test(mp);
                        var h0 = mV ? mI.url || new URL(mR, location.href).href : undefined;
                        if (mV && ga.ai === undefined) {
                            mX = new Blob(
                                [
                                    mX,
                                    `
  //# sourceURL=${h0}`,
                                ],
                                {
                                    type: mp,
                                }
                            );
                        }
                        var h1 = URL.createObjectURL(mX);
                        if (mV && ga.ai !== undefined) {
                            fb(h1, h0);
                        }
                        return h1;
                    });
                });
            }
            var fM;
            var fU = Object.create(null);
            function fb(mR, mI) {
                if ((ga == null ? undefined : ga.ai) !== undefined) {
                    fU[mR] = mI;
                }
            }
            function fj(mR) {
                return delete fU[mR];
            }
            function fL(mR) {
                return fU[mR];
            }
            function fE(mR) {
                var mI = ga == null ? undefined : ga.ai;
                if (mR && mI !== undefined) {
                    return mR.replace(mI, function (mX) {
                        var mp = fU[mX.slice(0, -1)];
                        if (mp !== undefined) {
                            return mp + ":";
                        } else {
                            return mX;
                        }
                    });
                } else {
                    return mR;
                }
            }
            function fO(mR) {
                return by(mR);
            }
            function fm(mR) {
                return JSON.parse(((mX = bC((mI = mR))), mI !== mX && (mX = bq((mX = atob(mX)), "kA7xqJZa")), mX));
                var mI;
                var mX;
            }
            var fJ = Object.prototype.hasOwnProperty;
            function fS(mR, mI) {
                return fJ.call(mR, mI);
            }
            var fg = String.prototype.trim;
            function fW() {}
            var fd = String.prototype.replace;
            var fN = String.prototype.split;
            var fv = "||||";
            function fT(mR) {
                var mI = mR % 10;
                if (mR !== 11 && mI === 1) {
                    return 0;
                } else if (mI >= 2 && mI <= 4 && !(mR >= 12 && mR <= 14)) {
                    return 1;
                } else {
                    return 2;
                }
            }
            var fD = {
                arabic: function (mR) {
                    if (mR < 3) {
                        return mR;
                    }
                    var mI = mR % 100;
                    if (mI >= 3 && mI <= 10) {
                        return 3;
                    } else if (mI >= 11) {
                        return 4;
                    } else {
                        return 5;
                    }
                },
                bosnian_serbian: fT,
                chinese: function () {
                    return 0;
                },
                croatian: fT,
                french: function (mR) {
                    if (mR > 1) {
                        return 1;
                    } else {
                        return 0;
                    }
                },
                german: function (mR) {
                    if (mR !== 1) {
                        return 1;
                    } else {
                        return 0;
                    }
                },
                russian: fT,
                lithuanian: function (mR) {
                    if (mR % 10 == 1 && mR % 100 != 11) {
                        return 0;
                    } else if (mR % 10 >= 2 && mR % 10 <= 9 && (mR % 100 < 11 || mR % 100 > 19)) {
                        return 1;
                    } else {
                        return 2;
                    }
                },
                czech: function (mR) {
                    if (mR === 1) {
                        return 0;
                    } else if (mR >= 2 && mR <= 4) {
                        return 1;
                    } else {
                        return 2;
                    }
                },
                polish: function (mR) {
                    if (mR === 1) {
                        return 0;
                    }
                    var mI = mR % 10;
                    if (mI >= 2 && mI <= 4 && (mR % 100 < 10 || mR % 100 >= 20)) {
                        return 1;
                    } else {
                        return 2;
                    }
                },
                icelandic: function (mR) {
                    if (mR % 10 != 1 || mR % 100 == 11) {
                        return 1;
                    } else {
                        return 0;
                    }
                },
                slovenian: function (mR) {
                    var mI = mR % 100;
                    if (mI === 1) {
                        return 0;
                    } else if (mI === 2) {
                        return 1;
                    } else if (mI === 3 || mI === 4) {
                        return 2;
                    } else {
                        return 3;
                    }
                },
            };
            var fF = (function (mR) {
                var mI = {};
                for (var mX in mR) {
                    if (fS(mR, mX)) {
                        for (var mp = mR[mX], mV = 0; mV < mp.length; ++mV) {
                            mI[mp[mV]] = mX;
                        }
                    }
                }
                return mI;
            })({
                arabic: ["ar"],
                bosnian_serbian: ["bs-Latn-BA", "bs-Cyrl-BA", "srl-RS", "sr-RS"],
                chinese: ["id", "id-ID", "ja", "ko", "ko-KR", "lo", "ms", "th", "th-TH", "zh"],
                croatian: ["hr", "hr-HR"],
                german: ["fa", "da", "de", "en", "es", "fi", "el", "he", "hi-IN", "hu", "hu-HU", "it", "nl", "no", "pt", "sv", "tr"],
                french: ["fr", "tl", "pt-br"],
                russian: ["ru", "ru-RU"],
                lithuanian: ["lt"],
                czech: ["cs", "cs-CZ", "sk"],
                polish: ["pl"],
                icelandic: ["is"],
                slovenian: ["sl-SL"],
            });
            function fG(mR) {
                return mR.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
            }
            var fQ = /\$/g;
            var fA = /%\{(.*?)\}/g;
            function fZ(mR, mI, mX, mp) {
                if (typeof mR != "string") {
                    throw new TypeError("Polyglot.transformPhrase expects argument #1 to be string");
                }
                if (mI == null) {
                    return mR;
                }
                var mV = mR;
                var h0 = mp || fA;
                var h1 =
                    typeof mI == "number"
                        ? {
                              smart_count: mI,
                          }
                        : mI;
                if (h1.smart_count != null && mV) {
                    var h2 = fN.call(mV, fv);
                    mV = fg.call(
                        h2[
                            (function (h3, h4) {
                                return fD[
                                    (function (h5) {
                                        return fF[h5] || fF[fN.call(h5, /-/, 1)[0]] || fF.en;
                                    })(h3)
                                ](h4);
                            })(mX || "en", h1.smart_count)
                        ] || h2[0]
                    );
                }
                mV = fd.call(mV, h0, function (h3, h4) {
                    if (!fS(h1, h4) || h1[h4] == null) {
                        return h3;
                    }
                    var h5 = h1[h4];
                    if (typeof h5 == "object") {
                        if (fS(h5, "ordinal")) {
                            h5 = (function (h7, h8) {
                                switch (h8) {
                                    case "en":
                                        return h7 + ((h9 = ["th", "st", "nd", "rd"])[((hq = h7 % 100) - 20) % 10] || h9[hq] || h9[0]);
                                    case "da":
                                    case "de":
                                    case "fi":
                                    case "no":
                                    case "tr":
                                        return h7 + ".";
                                    case "es":
                                    case "it":
                                        return h7 + "ª";
                                    case "fr":
                                        return h7 + (h7 === 1 ? "re" : "e");
                                    case "id":
                                        return "Ke-" + h7;
                                    case "nl":
                                        return h7 + "e";
                                    case "pt":
                                        return h7 + ".ª";
                                    case "ro":
                                        if (h7 === 1) {
                                            return h7 + "-a";
                                        } else {
                                            return "A " + h7 + "-a";
                                        }
                                    case "ru":
                                        return h7 + "-й";
                                    case "sv":
                                        var h9;
                                        var hq;
                                        return h7 + ((h9 = ["e", "a", "a"])[((hq = h7 % 100) - 20) % 10] || h9[hq] || h9[0]);
                                    case "th":
                                        return "ที่ " + h7;
                                    case "vi":
                                        return "thứ " + h7;
                                    case "zh":
                                        return "第" + h7;
                                    default:
                                        return h7;
                                }
                            })(h5.ordinal, mX);
                        } else {
                            for (var h6 in h5) {
                                if (fS(h5, h6)) {
                                    h5 = h5[h6];
                                    break;
                                }
                            }
                        }
                    }
                    return fd.call(h5, fQ, "$$");
                });
                return mV;
            }
            function fz(mR) {
                var mI = mR || {};
                this.phrases = {};
                this.extend(mI.phrases || {});
                this.currentLocale = mI.locale || "en";
                var mX = mI.allowMissing ? fZ : null;
                this.onMissingKey = typeof mI.onMissingKey == "function" ? mI.onMissingKey : mX;
                this.warn = mI.warn || fW;
                this.tokenRegex = (function (mp) {
                    var mV = (mp && mp.prefix) || "%{";
                    var h0 = (mp && mp.suffix) || "}";
                    if (mV === fv || h0 === fv) {
                        throw new RangeError('"||||" token is reserved for pluralization');
                    }
                    return RegExp(fG(mV) + "(.*?)" + fG(h0), "g");
                })(mI.interpolation);
            }
            fz.prototype.locale = function (mR) {
                if (mR) {
                    this.currentLocale = mR;
                }
                return this.currentLocale;
            };
            fz.prototype.extend = function (mR, mI) {
                for (var mX in mR) {
                    if (fS(mR, mX)) {
                        var mp = mR[mX];
                        var mV = mI ? mI + "." + mX : mX;
                        if (typeof mp == "object") {
                            this.extend(mp, mV);
                        } else {
                            this.phrases[mV] = mp;
                        }
                    }
                }
            };
            fz.prototype.unset = function (mR, mI) {
                if (typeof mR == "string") {
                    delete this.phrases[mR];
                } else {
                    for (var mX in mR) {
                        if (fS(mR, mX)) {
                            var mp = mR[mX];
                            var mV = mI ? mI + "." + mX : mX;
                            if (typeof mp == "object") {
                                this.unset(mp, mV);
                            } else {
                                delete this.phrases[mV];
                            }
                        }
                    }
                }
            };
            fz.prototype.clear = function () {
                this.phrases = {};
            };
            fz.prototype.replace = function (mR) {
                this.clear();
                this.extend(mR);
            };
            fz.prototype.t = function (mR, mI) {
                var mX;
                var mp;
                var mV = mI == null ? {} : mI;
                if (typeof this.phrases[mR] == "string") {
                    mX = this.phrases[mR];
                } else if (typeof mV._ == "string") {
                    mX = mV._;
                } else if (this.onMissingKey) {
                    mp = (0, this.onMissingKey)(mR, mV, this.currentLocale, this.tokenRegex);
                } else {
                    this.warn('Missing translation for key: "' + mR + '"');
                    mp = mR;
                }
                if (typeof mX == "string") {
                    mp = fZ(mX, mV, this.currentLocale, this.tokenRegex);
                }
                return mp;
            };
            fz.prototype.has = function (mR) {
                return fS(this.phrases, mR);
            };
            fz.transformPhrase = function (mR, mI, mX) {
                return fZ(mR, mI, mX);
            };
            var fY = new fz({
                warn: function () {},
            });
            function fx(mR) {
                return fY.t(mR);
            }
            function fB() {
                return fY.locale();
            }
            function fK() {
                var mR = fY.locale();
                return ["ar", "fa", "ur"].includes(mR);
            }
            function fk(mR) {
                var mI = {};
                for (var mX in mR) {
                    if (mR[mX] !== null && typeof mR[mX] == "object" && mR.hasOwnProperty(mX)) {
                        mI[mX] = fk(mR[mX]);
                    } else {
                        mI[mX] = mR[mX];
                    }
                }
                return mI;
            }
            var fH;
            var fR = (function () {
                function mR(mI, mX, mp, mV, h0) {
                    if (mp === undefined) {
                        mp = undefined;
                    }
                    if (mV === undefined) {
                        mV = null;
                    }
                    if (h0 === undefined) {
                        h0 = null;
                    }
                    this.key = mI;
                    this.value = mX;
                    this.bufferInfo = mp;
                    this.next = mV;
                    this.prev = h0;
                }
                Object.defineProperty(mR.prototype, "memorySize", {
                    get: function () {
                        return this.bufferInfo && this.bufferInfo.memorySize;
                    },
                    enumerable: false,
                    configurable: true,
                });
                return mR;
            })();
            var fI = (function () {
                function mR(mI) {
                    if (mI === undefined) {
                        mI = {
                            arraySize: 10,
                        };
                    }
                    this.ui = undefined;
                    this.hi = undefined;
                    this.li = undefined;
                    this.fi = undefined;
                    this.di = null;
                    this.vi = null;
                    this.Ai = Object.create(null);
                    var mX = mI.arraySize;
                    var mp = mI.memorySize;
                    this.di = null;
                    this.vi = null;
                    this.Ai = Object.create(null);
                    this.ui = mX !== undefined ? 0 : undefined;
                    this.hi = mX !== undefined && mX ? mX : undefined;
                    this.li = mp !== undefined ? 0 : undefined;
                    this.fi = mp !== undefined && mp ? mp : undefined;
                }
                Object.defineProperty(mR.prototype, "size", {
                    get: function () {
                        return Object.keys(this.Ai).length;
                    },
                    enumerable: false,
                    configurable: true,
                });
                Object.defineProperty(mR.prototype, "memory", {
                    get: function () {
                        return this.li;
                    },
                    enumerable: false,
                    configurable: true,
                });
                Object.defineProperty(mR.prototype, "maxSize", {
                    get: function () {
                        return this.hi;
                    },
                    enumerable: false,
                    configurable: true,
                });
                Object.defineProperty(mR.prototype, "maxMemory", {
                    get: function () {
                        return this.fi;
                    },
                    enumerable: false,
                    configurable: true,
                });
                mR.prototype.oldest = function () {
                    if (this.vi) {
                        return [this.vi.key, this.vi.value];
                    } else {
                        return undefined;
                    }
                };
                mR.prototype.newest = function () {
                    if (this.di) {
                        return [this.di.key, this.di.value];
                    } else {
                        return undefined;
                    }
                };
                mR.prototype.set = function (mI, mX, mp) {
                    var mV = mp && mp.memorySize ? mp.memorySize : undefined;
                    this.pi();
                    if (mV !== undefined) {
                        this.mi(mV);
                    }
                    if (this.di) {
                        var h0 = new fR(mI, mX, mp, this.di);
                        this.di.prev = h0;
                        this.di = h0;
                    } else {
                        this.di = this.vi = new fR(mI, mX, mp);
                    }
                    var h1 = (this.Ai[mI] = this.di);
                    this.gi(1);
                    if (mV !== undefined) {
                        this.bi(h1.memorySize);
                    }
                };
                mR.prototype.pop = function () {
                    if (this.vi) {
                        var mI = this.vi;
                        var mX = mI.key;
                        var mp = mI.value;
                        this._i(mX);
                        return [mX, mp];
                    }
                };
                mR.prototype.get = function (mI) {
                    if (this.Ai[mI]) {
                        var mX = this.Ai[mI];
                        var mp = mX.value;
                        var mV = mX.bufferInfo;
                        this._i(mI);
                        this.set(mI, mp, mV);
                        return mp;
                    }
                };
                mR.prototype.has = function (mI) {
                    return !!this.Ai[mI];
                };
                mR.prototype.find = function (mI) {
                    return this.Ai[mI] && this.Ai[mI].value;
                };
                mR.prototype.delete = function (mI) {
                    var mX = this.Ai[mI];
                    if (mX) {
                        this._i(mI);
                        return mX.value;
                    }
                };
                mR.prototype.clear = function () {
                    this.di = null;
                    this.vi = null;
                    this.ui = this.ui && 0;
                    this.li = this.li && 0;
                    this.Ai = Object.create(null);
                };
                mR.prototype.keys = function () {
                    var mI = [];
                    this.forEach(function (mX) {
                        return mI.push(mX.key);
                    });
                    return mI;
                };
                mR.prototype.values = function () {
                    var mI = [];
                    this.forEach(function (mX) {
                        return mI.push(mX.value);
                    });
                    return mI;
                };
                mR.prototype.forEach = function (mI) {
                    for (var mX = this.di, mp = 0; mX; ) {
                        mI(
                            {
                                key: mX.key,
                                value: mX.value,
                            },
                            mp
                        );
                        mX = mX.next;
                        mp++;
                    }
                };
                mR.prototype.toJSON = function () {
                    return fk(this.Ai);
                };
                mR.prototype.toString = function () {
                    return JSON.stringify(this.Ai);
                };
                mR.prototype._i = function (mI) {
                    var mX = this.Ai[mI];
                    var mp = mX.memorySize;
                    if (mX.prev !== null) {
                        mX.prev.next = mX.next;
                    } else {
                        this.di = mX.next;
                    }
                    if (mX.next !== null) {
                        mX.next.prev = mX.prev;
                    } else {
                        this.vi = mX.prev;
                    }
                    delete this.Ai[mI];
                    this.gi(-1);
                    if (mp !== undefined) {
                        this.bi(-mp);
                    }
                };
                mR.prototype.bi = function (mI) {
                    if (this.li !== undefined && mI !== undefined) {
                        this.li += mI;
                    }
                };
                mR.prototype.gi = function (mI) {
                    if (this.ui !== undefined && mI !== undefined) {
                        this.ui += mI;
                    }
                };
                mR.prototype.pi = function () {
                    if (this.ui !== undefined && this.ui === this.hi && this.vi) {
                        this._i(this.vi.key);
                    }
                };
                mR.prototype.mi = function (mI) {
                    if (this.li !== undefined && this.fi !== undefined && this.li + mI > this.fi) {
                        if (this.vi) {
                            this._i(this.vi.key);
                        }
                        this.mi(mI);
                    }
                };
                return mR;
            })();
            function fX(mR, mI) {
                for (var mX in mI) {
                    if (typeof mR[mX] != "object") {
                        mR[mX] = mI[mX];
                    } else if (typeof mI[mX] == "object") {
                        mR[mX] = fX(mR[mX], mI[mX]);
                    }
                }
                return mR;
            }
            var fp = (function () {
                function mR(mI, mX, mp) {
                    this.wi = Object.create(null);
                    this.xi = Object.create(null);
                    this.yi = undefined;
                    this.wi = (mI && fX(Object.create(null), mI)) || Object.create(null);
                    this.yi = mX
                        ? new fI({
                              arraySize: mp || 5,
                          })
                        : undefined;
                }
                mR.prototype.v = function (mI) {
                    var mX = this.yi;
                    var mp = mX && mX.get(mI);
                    if (mp !== undefined) {
                        return mp;
                    }
                    for (var mV, h0 = mI.split("."), h1 = 0, h2 = h0.length; h1 < h2; h1++) {
                        var h3 = h0[h1];
                        if ((mV = (mV && mV[h3]) || this.wi[h3]) === undefined) {
                            if (mX) {
                                mX.set(mI, null);
                            }
                            return null;
                        }
                    }
                    var h4;
                    var h5 = typeof mV != "string" ? mV[0] : mV;
                    if (RegExp(/^\$\{.*\}/).test(h5)) {
                        return this.v(h5.substring(h5.indexOf("{") + 1, h5.lastIndexOf("}")));
                    }
                    if (!Array.isArray(mV)) {
                        throw Error(`The key : ${mI} does not refer to a final value in this domain!`);
                    }
                    var h6 = mV.slice(1);
                    var h7 = this.xi[h5];
                    if (h7 === undefined) {
                        throw Error(`UIAppearance :: v : unable to locate interpreter for <${h5}>`);
                    }
                    h4 = h7.interpret(h6);
                    if (mX) {
                        mX.set(mI, h4);
                    }
                    return h4;
                };
                mR.prototype.extend = function (mI) {
                    if (this.yi) {
                        this.yi.clear();
                    }
                    this.wi = fX(this.wi, mI);
                };
                mR.prototype.registerInterpreter = function (mI, mX) {
                    if (this.xi[mI] === undefined) {
                        this.xi[mI] = mX;
                    }
                };
                mR.prototype.unregisterInterpreter = function (mI) {
                    var mX = this.xi[mI];
                    this.xi[mI] = undefined;
                    return mX || null;
                };
                Object.defineProperty(mR.prototype, "dataSource", {
                    get: function () {
                        return fX(Object.create(null), this.wi);
                    },
                    enumerable: false,
                    configurable: true,
                });
                return mR;
            })();
            var fV = new fp(undefined, true);
            var j0 = {
                black: 1,
                white: 2,
            };
            (fH = {})[U7] = {
                browser: 1,
                pc: 8,
                app: -1,
            };
            fH[U6] = {
                browser: 2,
                pc: 9,
                app: -1,
            };
            fH[U4] = {
                browser: 3,
                pc: -1,
                app: 6,
            };
            fH[U5] = {
                browser: 4,
                pc: -1,
                app: 7,
            };
            var j1 = fH;
            f3.setContext(function () {
                if (bM.audioSupported) {
                    return bM.audioContext;
                }
            });
            var j2;
            var j3 = (function () {
                function mR() {
                    this.StatusBarStyle = j0;
                    this.I18n = fY;
                    this.uiAppearance = fV;
                    this.environment = bM;
                    this.ResourceQualifier = bg;
                    this.deprecated = bQ;
                    this.WebAudio = f3;
                    this.WebAudioEvent = bp;
                    this.WebAudioState = bX;
                    this.CustomEventTarget = f0;
                    this.fetch = fw;
                    this.fetchBlobURL = fP;
                    this.registerBlobURL = fb;
                    this.unregisterBlobURL = fj;
                    this.translateLocation = fE;
                    this.revealBlobURL = fL;
                    this.isValidAssets = fO;
                    this.parseAssets = fm;
                }
                mR.prototype.getEnvironment = function () {
                    return bM.getPlatform();
                };
                mR.prototype.getOSName = function () {
                    return bM.getOSName();
                };
                mR.prototype.getGameContext = function () {
                    return fM;
                };
                mR.prototype.getBrowserBaseType = function () {
                    return bM.getBrowserBaseType();
                };
                mR.prototype.getBrowserBaseVersion = function () {
                    return bM.getBrowserBaseVersion();
                };
                mR.prototype.isRTLLanguage = function () {
                    return fK();
                };
                mR.prototype.getVersionName = function () {
                    if (this.getVersionNameHander) {
                        return this.getVersionNameHander();
                    } else {
                        return undefined;
                    }
                };
                mR.prototype.setStatusBarStyle = function (mI) {
                    if (this.setStatusBarStyleHandler) {
                        this.setStatusBarStyleHandler(mI);
                    }
                };
                mR.prototype.setStatusBarHidden = function (mI) {
                    if (this.setStatusBarHiddenHandler) {
                        this.setStatusBarHiddenHandler(mI);
                    }
                };
                mR.prototype.requestGameStart = function (mI, mX) {
                    if (this.requestGameStartHandler) {
                        this.requestGameStartHandler(mI, mX);
                    }
                };
                mR.prototype.setProgressMessage = function (mI) {
                    if (this.setProgressMessageHandler) {
                        this.setProgressMessageHandler(mI);
                    }
                };
                mR.prototype.setProgress = function (mI, mX) {
                    if (this.setProgressHandler) {
                        this.setProgressHandler(mI, mX);
                    }
                };
                mR.prototype.setProgressVisible = function (mI) {
                    if (this.setProgressVisibleHandler) {
                        this.setProgressVisibleHandler(mI);
                    }
                };
                mR.prototype.showAlert = function (mI) {
                    if (this.showAlertHandler) {
                        this.showAlertHandler(mI);
                    }
                };
                Object.defineProperty(mR.prototype, "location", {
                    get: function () {
                        return b8();
                    },
                    enumerable: false,
                    configurable: true,
                });
                mR.prototype.enablePromBeforeUnload = function (mI) {
                    this.context.event.emit("Shell.EnableUnloadAlert", mI);
                };
                Object.defineProperty(mR.prototype, "urlSearch", {
                    get: function () {
                        return bM.getURLSearchParam();
                    },
                    enumerable: false,
                    configurable: true,
                });
                mR.prototype.enableCanvasTouchPropagation = function (mI) {
                    if (this.enableCanvasTouchPropagationHandler) {
                        this.enableCanvasTouchPropagationHandler(mI);
                    }
                };
                mR.prototype.addPreloadPlugin = function (mI, mX, mp) {
                    if (this.addPreloadPluginHandler) {
                        this.addPreloadPluginHandler(mI, mX, mp);
                    }
                };
                mR.prototype.loadPlugin = function (mI, mX) {
                    if (this.loadPluginHandler) {
                        this.loadPluginHandler(mI, mX);
                    }
                };
                mR.prototype.getPlatform = function () {
                    var mI = bM.getOSName();
                    var mX = this.getEnvironment();
                    var mp = mX === "browser" ? 5 : -1;
                    if (j1[mI] && j1[mI][mX]) {
                        return j1[mI][mX];
                    } else {
                        return mp;
                    }
                };
                mR.prototype.getGameInfo = function () {
                    var mI;
                    var mX = US.Identifier;
                    if (mX) {
                        mI = mX.split(".").slice(0, 2).join(".");
                    }
                    return {
                        name: US.Name,
                        version: US.Version.split("/")[0],
                        index: US.Index,
                        identifier: mX,
                        organizationIdentifier: mI,
                    };
                };
                mR.prototype.wasmTest = function () {
                    return Promise.resolve([0, 0, 0]);
                };
                return mR;
            })();
            var j4 = (b.shell = new j3());
            function j5() {
                return b.eval('"cc"');
            }
            function j6(mR, mI) {
                var mX = mR.indexOf(b.String.fromCharCode(mI));
                if (mX !== -1) {
                    return mR.substring(mX + 1);
                } else {
                    return mR;
                }
            }
            function j7(mR, mI) {
                return function () {
                    var mX = b[j6("+shell", b.Number("0x002b"))];
                    var mp = j6("npMath", b.Number("0x0070"));
                    var mV = j6("qAsetTimeout", b.Number("0x0041"));
                    var h0 = (2 + b[mp].random() * 3) * b.Number("0x03E8");
                    function h1() {
                        b[mV](mR, h0);
                    }
                    (b.opusAudio = b.opusAudio || new mX.CustomEventTarget())[
                        (function () {
                            for (var h3 = "", h4 = 0, h5 = [111, 110]; h4 < h5.length; h4++) {
                                var h6 = h5[h4];
                                h3 += b.String.fromCharCode(h6);
                            }
                            return h3;
                        })()
                    ](mI, h1);
                    var h2 = b.audioPool;
                    if (h2 && h2.has(mI)) {
                        h1();
                    }
                };
            }
            j7(function () {
                var mR;
                var mI = (mR = b[j5()]) === null || mR === undefined ? undefined : mR.renderer;
                if (mI) {
                    mI.render = Function("", "");
                }
            }, "enable")();
            j7(function () {
                var mR;
                var mI;
                var mX;
                (function (mV) {
                    mV.a = "_compScheduler";
                })(mX || (mX = {}));
                var mp = (mI = (mR = b[j5()]) === null || mR === undefined ? undefined : mR.director) === null || mI === undefined ? undefined : mI[mX.a];
                if (mp) {
                    mp.startInvoker = Object.create(null);
                }
            }, "enable")();
            j7(function () {
                var mR;
                var mI;
                var mX =
                    (mI = (mR = b[j5()]) === null || mR === undefined ? undefined : mR.internal) === null || mI === undefined ? undefined : mI.eventManager;
                if (mX) {
                    mX.dispatchEvent = Function("", "");
                }
            }, "disable")();
            j7(function () {
                var mR;
                var mI;
                var mX = (mI = (mR = b.sp) === null || mR === undefined ? undefined : mR.Skeleton) === null || mI === undefined ? undefined : mI.prototype;
                if (mX) {
                    mX.markForRender = function () {
                        var mp;
                        var mV;
                        var h0 =
                            (mV = (mp = b[j5()]) === null || mp === undefined ? undefined : mp.Sprite) === null || mV === undefined ? undefined : mV.prototype;
                        if (h0) {
                            Function("e", "e._validateRender=e.disableRender")(h0);
                        }
                    };
                }
            }, "start")();
            j7(function () {
                var mR;
                var mI = (mR = b[j5()]) === null || mR === undefined ? undefined : mR.director;
                if (mI) {
                    mI.getActionManager = Function("", "return this._manager");
                }
            }, "disable")();
            var j8 = b.gtag;
            var j9 = (function () {
                function mR() {
                    this.Si = undefined;
                }
                mR.prototype.setUserId = function (mI) {
                    j8("set", {
                        user_id: mI,
                    });
                };
                mR.prototype.setTitle = function (mI) {
                    j8("set", {
                        page_title: mI,
                    });
                };
                mR.prototype.sendEvent = function (mI, mX, mp) {
                    for (var mV = [], h0 = 3; h0 < arguments.length; h0++) {
                        mV[h0 - 3] = arguments[h0];
                    }
                    if (mX !== "") {
                        switch (typeof mp) {
                            case "number":
                                mp = {
                                    value: mp,
                                };
                                break;
                            case "string":
                                mV.unshift(mp);
                                mp = undefined;
                                break;
                            case "object":
                            case "undefined":
                                break;
                            default:
                                mp = undefined;
                        }
                        var h1;
                        if ((mp == null ? undefined : mp.value) !== undefined) {
                            h1 = mp.value;
                            mp.value = undefined;
                        }
                        mV.push(this.ki(mp));
                        var h2;
                        var h3 = this.Ei(mV);
                        var h4 = h3.join("|");
                        if (h4) {
                            h2 = h4;
                        }
                        var h5 = {
                            event_category: mI,
                            event_label: h2,
                        };
                        if (h1 !== undefined) {
                            h5.value = h1;
                        }
                        j8("event", mX, h5);
                    }
                };
                mR.prototype.sendScreen = function (mI) {
                    if (mI) {
                        j8("event", "screen_view", {
                            screen_name: mI,
                        });
                    }
                    this.setCurrentScreen(mI);
                };
                mR.prototype.getCurrentScreen = function () {
                    return this.Si;
                };
                mR.prototype.setCurrentScreen = function (mI) {
                    if (mI) {
                        j8("set", {
                            screen_name: mI,
                        });
                    }
                    this.Si = mI;
                };
                mR.prototype.sendTiming = function (mI, mX, mp) {
                    for (var mV = [], h0 = 3; h0 < arguments.length; h0++) {
                        mV[h0 - 3] = arguments[h0];
                    }
                    if (mX !== "") {
                        if (mV === undefined) {
                            mV = [];
                        }
                        var h1;
                        var h2 = this.Ei(mV);
                        var h3 = h2.join("|");
                        if (h3) {
                            h1 = h3;
                        }
                        j8("event", "timing_complete", {
                            name: mX,
                            value: mp,
                            event_category: mI,
                            event_label: h1,
                        });
                    }
                };
                mR.prototype.sendException = function (mI) {
                    j8("event", "exception", {
                        description: mI,
                        fatal: false,
                    });
                };
                mR.prototype.raw = function () {
                    j8.apply(null, arguments);
                };
                mR.prototype.setFrequentErrorHandler = function (mI) {
                    b.onGAFrequentError = mI;
                };
                mR.prototype.ki = function (mI) {
                    var mX = [];
                    for (var mp in mI) {
                        if (Object.prototype.hasOwnProperty.call(mI, mp)) {
                            var mV = mI[mp];
                            if (mV !== undefined) {
                                mX.push(`${mp}=${mV}`);
                            }
                        }
                    }
                    return mX.join("&");
                };
                mR.prototype.Ei = function (mI) {
                    return mI.filter(function (mX) {
                        return mX !== undefined && ("" + mX).length > 0;
                    });
                };
                return mR;
            })();
            var jq = j9.prototype;
            jq.CATEGORY_ACCESS = "access";
            jq.CATEGORY_GAME = "game";
            jq.CATEGORY_FREE_GAME = "free_game";
            jq.CATEGORY_GENERAL = "general";
            jq.CATEGORY_QUERY = "query";
            jq.CATEGORY_SPLASH_VIDEO = "";
            jq.SCREEN_LAUNCH = "";
            jq.SCREEN_LOGIN = "";
            jq.SCREEN_GAME = "";
            jq.SCREEN_WALLET = "";
            jq.SCREEN_BET_SETTING = "";
            jq.SCREEN_SETTINGS = "";
            jq.SCREEN_PAY_TABLE = "";
            jq.SCREEN_GAME_RULE = "";
            jq.SCREEN_HISTORY_DETAIL = "";
            jq.SCREEN_HISTORY_CALENDAR = "";
            jq.EVENT_LOGIN = "";
            jq.EVENT_READ_INFO = "";
            jq.EVENT_RETRY = "";
            jq.EVENT_HISTORY_CHANGE_DAYS = "";
            jq.EVENT_QUIT_GAME = "";
            jq.EVENT_ERROR_REPORT = "fault";
            jq.EVENT_CHANGE_SETTING = "";
            jq.SCREEN_SLOT_AUTO_SPIN = "";
            jq.SCREEN_SLOT_FREE_GAME = "";
            jq.SCREEN_SLOT_DAILY_JACKPOT = "";
            jq.SCREEN_SLOT_DRAGON_JACKPOT = "";
            jq.EVENT_SLOT_START_SPIN = "";
            jq.EVENT_SLOT_STOP_SPIN = "";
            jq.EVENT_SLOT_AUTO_SPIN = "";
            jq.EVENT_SLOT_CHANGE_BET = "";
            jq.EVENT_SLOT_MAX_BET = "";
            jq.EVENT_SLOT_SKIP_EFFECT = "";
            jq.EVENT_SLOT_PICK_FREE_GAME = "";
            jq.EVENT_SLOT_DROP_FREE_GAME = "";
            jq.EVENT_SLOT_HISTORY_SWIPE_PAGE = "";
            jq.EVENT_SLOT_HISTORY_SELECT_PAGE = "";
            jq.EVENT_SLOT_DAILY_JACKPOT_SWIPE = "";
            jq.EVENT_SLOT_DRAGON_JACKPOT_CLICK_COIN = "";
            jq.EVENT_SLOT_CHANGE_INGOT_BET = "";
            jq.SCREEN_CARD_ROADMAP = "";
            jq.SCREEN_CARD_SELECT_LIMIT = "";
            jq.SCREEN_CARD_JACKPOT_PAY_TABLE = "";
            jq.EVENT_CARD_DEAL = "";
            jq.EVENT_CARD_FLIP = "";
            jq.EVENT_CARD_PEEK = "";
            jq.EVENT_CARD_ANTE = "";
            jq.EVENT_CARD_RAISE = "";
            jq.EVENT_CARD_FOLD = "";
            jq.EVENT_CARD_HIT = "";
            jq.EVENT_CARD_DOUBLE = "";
            jq.EVENT_CARD_SPLIT = "";
            jq.EVENT_CARD_STAND = "";
            jq.EVENT_CARD_BUY_INSURANCE = "";
            jq.EVENT_CARD_CANCEL_INSURANCE = "";
            jq.EVENT_CARD_BUY_JACKPOT = "";
            jq.EVENT_CARD_CANCEL_JACKPOT = "";
            jq.EVENT_CARD_CHANGE_CHIP = "";
            jq.EVENT_CARD_CHANGE_VALUE = "";
            jq.EVENT_CARD_CHANGE_BET = "";
            jq.EVENT_CARD_CHANGE_LIMIT = "";
            jq.EVENT_CARD_SKIP_EFFECT = "";
            jq.EVENT_SPLASH_FINISH = "";
            function jC(mR, mI) {
                this.bundleInfo = mR;
                this.manager = mI;
            }
            var jy = (function (mR) {
                function mI(mX, mp, mV, h0, h1, h2, h3, h4) {
                    var h5 = mR.call(this, mX, mp) || this;
                    h5.component = mV;
                    h5.event = h0;
                    h5.plugin = h1;
                    h5.view = h2;
                    h5.cocos = h3;
                    h5.resource = h4;
                    return h5;
                }
                q1(mI, mR);
                mI.prototype.createBundle = function (mX) {
                    return this.manager.createBundle(mX);
                };
                mI.prototype.destroyBundle = function (mX) {
                    return this.manager.destroyBundle(mX);
                };
                mI.prototype.getContext = function (mX) {
                    return this.manager.getContext(mX);
                };
                mI.prototype.queryBundle = function (mX) {
                    return this.manager.queryBundle(mX);
                };
                mI.prototype.destroy = function () {
                    this.manager.destroyBundle(this.bundleInfo);
                };
                return mI;
            })(jC);
            var jw = undefined;
            var jP = (function (mR) {
                function mI() {
                    return (mR !== null && mR.apply(this, arguments)) || this;
                }
                q1(mI, mR);
                mI.prototype.create = function (mX, mp) {
                    return this.manager.create(mX, mp || this.bundleInfo);
                };
                mI.prototype.getInstance = function (mX) {
                    return this.manager.getInstance(mX);
                };
                mI.prototype.updateState = function (mX, mp) {
                    this.manager.updateState(mX, mp, this.bundleInfo);
                };
                mI.prototype.destroy = function (mX) {
                    this.manager.destroy(mX, this.bundleInfo);
                };
                return mI;
            })(jC);
            var jM = (function (mR) {
                function mI() {
                    return (mR !== null && mR.apply(this, arguments)) || this;
                }
                q1(mI, mR);
                mI.prototype.on = function (mX, mp, mV, h0) {
                    this.manager.on(mX, mp, mV, h0, this.bundleInfo);
                };
                mI.prototype.once = function (mX, mp, mV, h0) {
                    this.manager.once(mX, mp, mV, h0, this.bundleInfo);
                };
                mI.prototype.off = function (mX, mp, mV) {
                    this.manager.off(mX, mp, mV);
                };
                mI.prototype.emit = function (mX, mp, mV) {
                    this.manager.emit(mX, mp, mV, this.bundleInfo);
                };
                mI.prototype.hasListeners = function (mX) {
                    return this.manager.hasListeners(mX);
                };
                return mI;
            })(jC);
            function jU(mR) {
                return {
                    name: mR,
                    rawUrl: mR,
                    baseUrl: `${US.SharedPath}${mR}`,
                };
            }
            var jb = (function (mR) {
                function mI() {
                    return (mR !== null && mR.apply(this, arguments)) || this;
                }
                q1(mI, mR);
                mI.prototype.load = function (mX, mp) {
                    var mV = {};
                    if (Array.isArray(mX)) {
                        for (var h0 = 0, h1 = mX; h0 < h1.length; h0++) {
                            var h2 = jU(h1[h0]);
                            if (h2) {
                                mV[h2.name] = h2;
                            }
                        }
                    } else {
                        mV = mX;
                    }
                    this.manager.load(mV, mp);
                };
                return mI;
            })(jC);
            var jj = (function (mR) {
                function mI() {
                    return (mR !== null && mR.apply(this, arguments)) || this;
                }
                q1(mI, mR);
                mI.prototype.register = function (mX, mp) {
                    this.manager.register(mX, mp);
                };
                mI.prototype.append = function (mX, mp, mV) {
                    this.manager.append(mX, mp, mV);
                };
                mI.prototype.appendTo = function (mX, mp) {
                    this.manager.appendTo(mX, mp);
                };
                mI.prototype.removeFromParent = function (mX) {
                    this.manager.removeFromParent(mX);
                };
                mI.prototype.show = function (mX) {
                    this.manager.show(mX);
                };
                mI.prototype.hide = function (mX) {
                    this.manager.hide(mX);
                };
                mI.prototype.getContainerElement = function (mX, mp) {
                    return this.manager.getContainerElement(mX, mp);
                };
                mI.prototype.getRootElement = function (mX) {
                    return this.manager.getRootElement(mX);
                };
                mI.prototype.enableUIBlock = function (mX) {
                    mX.__$enableUIBlock = true;
                };
                mI.prototype.setUIBlockConfig = function (mX, mp) {
                    for (var mV in mp) {
                        if (mp[mV] !== undefined) {
                            mX[`__$${mV}`] = mp[mV];
                        }
                    }
                };
                return mI;
            })(jC);
            var jL = (function (mR) {
                function mI() {
                    return (mR !== null && mR.apply(this, arguments)) || this;
                }
                q1(mI, mR);
                mI.prototype.setCocosBundleVers = function (mX) {
                    this.manager.bundleVers = mX;
                };
                mI.prototype.loadBundle = function (mX, mp, mV) {
                    this.manager.loadBundle(mX, mp, mV);
                };
                mI.prototype.getURL = function (mX) {
                    return this.manager.getURL(mX, this.bundleInfo);
                };
                mI.prototype.hasEntry = function (mX) {
                    return this.manager.hasEntry(mX);
                };
                mI.prototype.resolveBundleName = function (mX) {
                    return this.manager.resolveBundleName(mX, this.bundleInfo);
                };
                return mI;
            })(jC);
            var jE = (function (mR) {
                function mI() {
                    return (mR !== null && mR.apply(this, arguments)) || this;
                }
                q1(mI, mR);
                mI.prototype.setQualifierConfig = function (mX, mp) {
                    if (Array.isArray(mX)) {
                        var mV = mX;
                        this.manager.setQualifierConfig(mV, this.bundleInfo);
                    } else {
                        this.manager.setQualifierConfig(mX, mp, this.bundleInfo);
                    }
                };
                mI.prototype.addAssets = function (mX, mp) {
                    this.manager.addAssets(mX, this.bundleInfo, mp);
                };
                mI.prototype.resolveUrl = function (mX, mp) {
                    return this.manager.resolveUrl(mX, this.bundleInfo, mp);
                };
                mI.prototype.hasEntry = function (mX) {
                    return this.manager.hasEntry(mX, this.bundleInfo);
                };
                return mI;
            })(jC);
            var jO = {
                bundle: undefined,
                component: undefined,
                event: undefined,
                plugin: undefined,
                view: undefined,
                resource: undefined,
                cocos: undefined,
                createContext: function (mR) {
                    if (!(this.bundle && this.component && this.event && this.plugin && this.view && this.resource && this.cocos)) {
                        throw Error("Create bundle context error");
                    }
                    return new jy(
                        mR,
                        this.bundle,
                        new jP(mR, this.component),
                        new jM(mR, this.event),
                        new jb(mR, this.plugin),
                        new jj(mR, this.view),
                        new jL(mR, this.cocos),
                        new jE(mR, this.resource)
                    );
                },
            };
            var jm = (function () {
                function mR() {
                    this.cls = this.constructor;
                    this.ref = this.cls;
                    this.state = {};
                }
                mR.prototype.onInstantiate = function (mI) {
                    this.context = mI;
                    this.event = mI.event;
                    this.component = mI.component;
                    this.plugin = mI.plugin;
                    this.view = mI.view;
                    this.cocos = mI.cocos;
                    this.resource = mI.resource;
                };
                return mR;
            })();
            var jJ = (function (mR) {
                function mI() {
                    return (mR !== null && mR.apply(this, arguments)) || this;
                }
                q1(mI, mR);
                mI.prototype.on = function (mX, mp, mV) {
                    this.event.on(mX, mp, this, mV);
                };
                mI.prototype.once = function (mX, mp, mV) {
                    this.event.once(mX, mp, this, mV);
                };
                mI.prototype.off = function (mX, mp) {
                    this.event.off(mX, mp, this);
                };
                mI.prototype.emit = function (mX, mp, mV) {
                    this.event.emit(mX, mp, mV);
                };
                return mI;
            })(jm);
            var jS = (function (mR) {
                function mI() {
                    return (mR !== null && mR.apply(this, arguments)) || this;
                }
                q1(mI, mR);
                return mI;
            })(jJ);
            var jg = {
                Domain: 4,
                LoadAppCacheError: 1000,
                LoadResourceError: 1002,
                SettingsUndefinedError: 1003,
                CCUndefinedError: 1004,
                CacheManifestError: 1005,
                GameBootError: 1006,
                EngineScriptError: 1007,
                PluginScriptError: 1008,
                WatchDogError: 1009,
                WebGLError: 1010,
                ResourceVersionError: 1011,
                ResourceFailureDateTime: 1012,
                CrossSiteScriptingError: 1013,
                PluginReactRenderError: 1014,
                getMessageKey: function (mR) {
                    switch (mR) {
                        case jg.LoadAppCacheError:
                            return "LoadAppCacheErrorMessage";
                        case jg.LoadResourceError:
                        case jg.GameBootError:
                        case jg.EngineScriptError:
                            return "LoadProjectFailedErrorMessage";
                        case jg.PluginScriptError:
                        case jg.PluginReactRenderError:
                        case jg.WatchDogError:
                        case jg.CrossSiteScriptingError:
                            return "ErrorAndReload";
                        case jg.SettingsUndefinedError:
                            return "SettingsUndefinedErrorMessage";
                        case jg.CCUndefinedError:
                            return "CCUndefinedErrorMessage";
                        case jg.CacheManifestError:
                            return "CacheManifestErrorMessage";
                        case jg.WebGLError:
                            return "WebGLErrorMessage";
                        case jg.ResourceVersionError:
                            return "ResourceVersionErrorMessage";
                        case jg.ResourceFailureDateTime:
                            return "ResourceFailureDateTimeMessage";
                        default:
                            return "";
                    }
                },
                canReload: function (mR) {
                    return !isNaN(+mR);
                },
                canDismiss: function (mR) {
                    var mI = +mR;
                    if (isNaN(mI)) {
                        return false;
                    }
                    switch (mI) {
                        case jg.WatchDogError:
                        case jg.PluginReactRenderError:
                            return true;
                        default:
                            return false;
                    }
                },
            };
            (function () {
                function mR(hv, hT) {
                    return (hT || "") + " (" + hv + ")";
                }
                var mI;
                var mX = typeof Symbol != "undefined";
                var mp = typeof document != "undefined";
                var mV = U !== undefined ? U : qC;
                if (mp) {
                    var h0 = document.querySelector("base[href]");
                    if (h0) {
                        mI = h0.href;
                    }
                }
                if (!mI && typeof location != "undefined") {
                    var h1 = (mI = location.href.split("#")[0].split("?")[0]).lastIndexOf("/");
                    if (h1 !== -1) {
                        mI = mI.slice(0, h1 + 1);
                    }
                }
                var h2 = /\\/g;
                function h3(hv, hT) {
                    if (hv.indexOf("\\") !== -1) {
                        hv = hv.replace(h2, "/");
                    }
                    if (hv[0] === "/" && hv[1] === "/") {
                        return hT.slice(0, hT.indexOf(":") + 1) + hv;
                    }
                    if (
                        (hv[0] === "." &&
                            (hv[1] === "/" || (hv[1] === "." && (hv[2] === "/" || (hv.length === 2 && (hv += "/")))) || (hv.length === 1 && (hv += "/")))) ||
                        hv[0] === "/"
                    ) {
                        var hD;
                        var hF = hT.slice(0, hT.indexOf(":") + 1);
                        hD =
                            hT[hF.length + 1] === "/"
                                ? hF !== "file:"
                                    ? (hD = hT.slice(hF.length + 2)).slice(hD.indexOf("/") + 1)
                                    : hT.slice(8)
                                : hT.slice(hF.length + (hT[hF.length] === "/"));
                        if (hv[0] === "/") {
                            return hT.slice(0, hT.length - hD.length - 1) + hv;
                        }
                        for (var hG = hD.slice(0, hD.lastIndexOf("/") + 1) + hv, hQ = [], hA = -1, hZ = 0; hZ < hG.length; hZ++) {
                            if (hA !== -1) {
                                if (hG[hZ] === "/") {
                                    hQ.push(hG.slice(hA, hZ + 1));
                                    hA = -1;
                                }
                            } else if (hG[hZ] === ".") {
                                if (hG[hZ + 1] !== "." || (hG[hZ + 2] !== "/" && hZ + 2 !== hG.length)) {
                                    if (hG[hZ + 1] === "/" || hZ + 1 === hG.length) {
                                        hZ += 1;
                                    } else {
                                        hA = hZ;
                                    }
                                } else {
                                    hQ.pop();
                                    hZ += 2;
                                }
                            } else {
                                hA = hZ;
                            }
                        }
                        if (hA !== -1) {
                            hQ.push(hG.slice(hA));
                        }
                        return hT.slice(0, hT.length - hD.length) + hQ.join("");
                    }
                }
                function h4(hv, hT) {
                    for (var hD in hT) {
                        hv[hD] = hT[hD];
                    }
                    return hv;
                }
                function h5(hv, hT, hD, hF, hG) {
                    for (var hQ in hv) {
                        var hA = h3(hQ, hD) || hQ;
                        var hZ = hv[hQ];
                        if (typeof hZ == "string") {
                            var hz = h8(hF, h3(hZ, hD) || hZ, hG);
                            if (hz) {
                                hT[hA] = hz;
                            }
                        }
                    }
                }
                function h6(hv, hT) {
                    if (hT[hv]) {
                        return hv;
                    }
                    var hD = hv.length;
                    do {
                        var hF = hv.slice(0, hD + 1);
                        if (hF in hT) {
                            return hF;
                        }
                    } while ((hD = hv.lastIndexOf("/", hD - 1)) !== -1);
                }
                function h7(hv, hT) {
                    var hD = h6(hv, hT);
                    if (hD) {
                        var hF = hT[hD];
                        if (hF === null) {
                            return;
                        }
                        if (!(hv.length > hD.length && hF[hF.length - 1] !== "/")) {
                            return hF + hv.slice(hD.length);
                        }
                    }
                }
                function h8(hv, hT, hD) {
                    for (var hF = hv.scopes, hG = hD && h6(hD, hF); hG; ) {
                        var hQ = h7(hT, hF[hG]);
                        if (hQ) {
                            return hQ;
                        }
                        hG = h6(hG.slice(0, hG.lastIndexOf("/")), hF);
                    }
                    return h7(hT, hv.imports) || (hT.indexOf(":") !== -1 && hT);
                }
                var h9 = mX && Symbol.toStringTag;
                var hq = mX ? Symbol() : "@";
                var hC = mX ? Symbol() : "@";
                function hy() {
                    this[hq] = {};
                }
                var hw;
                var hP = hy.prototype;
                function hM(hv) {
                    return hv.id;
                }
                function hU(hv, hT, hD, hF) {
                    hv.onload(hD, hT.id, hT.d && hT.d.map(hM), !!hF);
                    if (hD) {
                        throw hD;
                    }
                }
                function hb(hv, hT, hD) {
                    var hF = hv[hq][hT];
                    if (hF) {
                        return hF;
                    }
                    var hG = [];
                    var hQ = Object.create(null);
                    if (h9) {
                        Object.defineProperty(hQ, h9, {
                            value: "Module",
                        });
                    }
                    var hA = Promise.resolve()
                        .then(function () {
                            return hv.instantiate(hT, hD);
                        })
                        .then(function (hz) {
                            if (!hz) {
                                throw Error(mR(2, "Module " + hT + " did not instantiate"));
                            }
                            var hY = hz[1](
                                function (hx, hB) {
                                    hF.h = true;
                                    var hK = false;
                                    if (typeof hx != "object") {
                                        if (!(hx in hQ && hQ[hx] === hB)) {
                                            hQ[hx] = hB;
                                            hK = true;
                                        }
                                    } else {
                                        for (var hk in hx) {
                                            hB = hx[hk];
                                            if (!(hk in hQ && hQ[hk] === hB)) {
                                                hQ[hk] = hB;
                                                hK = true;
                                            }
                                        }
                                        if (hx.__esModule) {
                                            hQ.__esModule = hx.__esModule;
                                        }
                                    }
                                    if (hK) {
                                        for (var hH = 0; hH < hG.length; hH++) {
                                            var hR = hG[hH];
                                            if (hR) {
                                                hR(hQ);
                                            }
                                        }
                                    }
                                    return hB;
                                },
                                hz[1].length === 2
                                    ? {
                                          import: function (hx) {
                                              return hv.import(hx, hT);
                                          },
                                          meta: hv.createContext(hT),
                                      }
                                    : undefined
                            );
                            hF.e = hY.execute || function () {};
                            return [hz[0], hY.setters || []];
                        });
                    var hZ = (hA = hA.catch(function (hz) {
                        hU(hv, hF, hz, true);
                    })).then(function (hz) {
                        return Promise.all(
                            hz[0].map(function (hY, hx) {
                                var hB = hz[1][hx];
                                return Promise.resolve(hv.resolve(hY, hT)).then(function (hK) {
                                    var hk = hb(hv, hK, hT);
                                    return Promise.resolve(hk.I).then(function () {
                                        if (hB) {
                                            hB[hC] = hx;
                                            hk.i.push(hB);
                                            if (!(!hk.h && hk.I)) {
                                                hB(hk.n);
                                            }
                                        }
                                        return hk;
                                    });
                                });
                            })
                        ).then(
                            function (hY) {
                                hF.d = hY;
                            },
                            function (hY) {
                                hU(hv, hF, hY, false);
                            }
                        );
                    });
                    hZ.catch(function (hz) {
                        hF.e = null;
                        hF.er = hz;
                    });
                    return (hF = hv[hq][hT] =
                        {
                            id: hT,
                            i: hG,
                            n: hQ,
                            I: hA,
                            L: hZ,
                            h: false,
                            d: undefined,
                            e: undefined,
                            er: undefined,
                            E: undefined,
                            C: undefined,
                        });
                }
                function hj(hv, hT, hD) {
                    if (!hD[hT.id]) {
                        hD[hT.id] = true;
                        return Promise.resolve(hT.L).then(function () {
                            return Promise.all(
                                hT.d.map(function (hF) {
                                    return hj(hv, hF, hD);
                                })
                            );
                        });
                    }
                }
                hP.import = function (hv, hT) {
                    var hD = this;
                    return Promise.resolve(hD.prepareImport())
                        .then(function () {
                            return hD.resolve(hv, hT);
                        })
                        .then(function (hF) {
                            var hG = hb(hD, hF);
                            return (
                                hG.C ||
                                (function (hQ, hA) {
                                    return (hA.C = hj(hQ, hA, {})
                                        .then(function () {
                                            return hE(hQ, hA, {});
                                        })
                                        .then(function () {
                                            return hA.n;
                                        }));
                                })(hD, hG)
                            );
                        });
                };
                hP.createContext = function (hv) {
                    return {
                        url: hv,
                    };
                };
                hP.onload = function () {};
                hP.register = function (hv, hT) {
                    hw = [hv, hT];
                };
                hP.getRegister = function () {
                    var hv = hw;
                    hw = undefined;
                    return hv;
                };
                var hL = Object.freeze(Object.create(null));
                function hE(hv, hT, hD) {
                    if (!hD[hT.id]) {
                        hD[hT.id] = true;
                        if (!hT.e) {
                            if (hT.er) {
                                throw hT.er;
                            }
                            if (hT.E) {
                                return hT.E;
                            } else {
                                return undefined;
                            }
                        }
                        var hF;
                        hT.d.forEach(function (hQ) {
                            try {
                                var hA = hE(hv, hQ, hD);
                                if (hA) {
                                    (hF = hF || []).push(hA);
                                }
                            } catch (hZ) {
                                hT.e = null;
                                hT.er = hZ;
                                hU(hv, hT, hZ, false);
                            }
                        });
                        if (hF) {
                            return Promise.all(hF).then(hG, function (hQ) {
                                hT.e = null;
                                hT.er = hQ;
                                hU(hv, hT, hQ, false);
                            });
                        } else {
                            return hG();
                        }
                    }
                    function hG() {
                        try {
                            var hQ = hT.e.call(hL);
                            if (hQ) {
                                hQ = hQ.then(
                                    function () {
                                        hT.C = hT.n;
                                        hT.E = null;
                                        hU(hv, hT, null, true);
                                    },
                                    function (hA) {
                                        hT.er = hA;
                                        hT.E = null;
                                        hU(hv, hT, hA, true);
                                    }
                                );
                                return (hT.E = hT.E || hQ);
                            }
                            hT.C = hT.n;
                            hU(hv, hT, null, true);
                        } catch (hA) {
                            hT.er = hA;
                            hU(hv, hT, hA, true);
                        } finally {
                            hT.L = hT.I = undefined;
                            hT.e = null;
                        }
                    }
                }
                mV.System = new hy();
                var hO;
                var hm;
                var hJ = mX ? Symbol() : "#";
                var hS = mX ? Symbol() : "$";
                function hg(hv, hT) {
                    if (mp) {
                        Array.prototype.forEach.call(document.querySelectorAll('script[type="systemjs-importmap"]' + hT), hv);
                    }
                }
                hg(function (hv) {
                    hv._t = fetch(hv.src).then(function (hT) {
                        return hT.text();
                    });
                }, "[src]");
                hP.prepareImport = function () {
                    var hv = this;
                    if (!hv[hS]) {
                        hv[hJ] = {
                            imports: {},
                            scopes: {},
                        };
                        hv[hS] = Promise.resolve();
                        hg(function (hT) {
                            hv[hS] = hv[hS].then(function () {
                                return (
                                    hT._t ||
                                    (hT.src &&
                                        fetch(hT.src).then(function (hD) {
                                            return hD.text();
                                        })) ||
                                    Promise.resolve(hT.innerHTML)
                                )
                                    .then(function (hD) {
                                        try {
                                            return JSON.parse(hD);
                                        } catch (hF) {
                                            throw Error(mR(1, "systemjs-importmap contains invalid JSON"));
                                        }
                                    })
                                    .then(function (hD) {
                                        hv[hJ] = (function (hF, hG, hQ) {
                                            var hA;
                                            var hZ;
                                            var hz = {
                                                imports: h4({}, hQ.imports),
                                                scopes: h4({}, hQ.scopes),
                                            };
                                            if (hF.imports) {
                                                h5(hF.imports, hz.imports, hG, hQ, null);
                                            }
                                            if (hF.scopes) {
                                                for (var hY in hF.scopes) {
                                                    var hx = h3((hA = hY), (hZ = hG)) || (hA.indexOf(":") !== -1 ? hA : h3("./" + hA, hZ));
                                                    h5(hF.scopes[hY], hz.scopes[hx] || (hz.scopes[hx] = {}), hG, hQ, hx);
                                                }
                                            }
                                            return hz;
                                        })(hD, hT.src || mI, hv[hJ]);
                                    });
                            });
                        }, "");
                    }
                    return hv[hS];
                };
                hP.resolve = function (hv, hT) {
                    hT = hT || mI;
                    return (
                        h8(this[hJ], h3(hv, hT) || hv, hT) ||
                        (function (hD, hF) {
                            throw Error(mR(8, "Unable to resolve bare specifier '" + hD + (hF ? "' from " + hF : "'")));
                        })(hv, hT)
                    );
                };
                hP.resolveUrl = function (hv, hT) {
                    return h3(hv, hT || mI) || hv;
                };
                if (mp) {
                    b.addEventListener("error", function (hv) {
                        hO = hv.filename;
                        hm = hv.error;
                    });
                    var hW = location.origin;
                }
                hP.createScript = function (hv) {
                    var hT = document.createElement("script");
                    hT.async = true;
                    if (hv.indexOf(hW + "/")) {
                        hT.crossOrigin = "anonymous";
                    }
                    hT.src = hv;
                    return hT;
                };
                hP.instantiate = function (hv, hT) {
                    var hD = this;
                    var hF = hP.createScript(hv);
                    if (hF instanceof Promise) {
                        return hF.then(function (hQ) {
                            hF = hQ;
                            return new Promise(hG);
                        });
                    } else {
                        return new Promise(hG);
                    }
                    function hG(hQ, hA) {
                        hF.addEventListener("error", function () {
                            document.head.removeChild(hF);
                            hA(Error(mR(3, "Error loading " + hv + (hT ? " from " + hT : ""))));
                        });
                        hF.addEventListener("load", function () {
                            document.head.removeChild(hF);
                            if (hO === hF.src) {
                                hA(hm);
                            } else {
                                hQ(hD.getRegister());
                            }
                        });
                        document.head.appendChild(hF);
                    }
                };
                (function (hv) {
                    var hT;
                    var hD;
                    var hF;
                    var hG = hv.System.constructor.prototype;
                    var hQ = hG.import;
                    hG.import = function (hx, hB) {
                        (function () {
                            hT = hD = undefined;
                            for (var hK in hv) {
                                if (!hY(hK)) {
                                    if (hT) {
                                        if (!hD) {
                                            hD = hK;
                                        }
                                    } else {
                                        hT = hK;
                                    }
                                    hF = hK;
                                }
                            }
                        })();
                        return hQ.call(this, hx, hB);
                    };
                    var hA = [
                        [],
                        function () {
                            return {};
                        },
                    ];
                    var hZ = hG.getRegister;
                    hG.getRegister = function () {
                        var hx = hZ.call(this);
                        if (hx) {
                            return hx;
                        }
                        var hB;
                        var hK = (function () {
                            var hk;
                            var hH = 0;
                            for (var hR in hv) {
                                if (!hY(hR)) {
                                    if ((hH === 0 && hR !== hT) || (hH === 1 && hR !== hD)) {
                                        return hR;
                                    }
                                    hH++;
                                    hk = hR;
                                }
                            }
                            if (hk !== hF) {
                                return hk;
                            }
                        })();
                        if (!hK) {
                            return hA;
                        }
                        try {
                            hB = hv[hK];
                        } catch (hk) {
                            return hA;
                        }
                        return [
                            [],
                            function (hH) {
                                return {
                                    execute: function () {
                                        hH({
                                            default: hB,
                                            __useDefault: true,
                                        });
                                    },
                                };
                            },
                        ];
                    };
                    var hz = typeof navigator != "undefined" && navigator.userAgent.indexOf("Trident") !== -1;
                    function hY(hx) {
                        return !hv.hasOwnProperty(hx) || (!isNaN(hx) && hx < hv.length) || (hz && hv[hx] && b !== undefined && hv[hx].parent === b);
                    }
                })(U !== undefined ? U : qC);
                (function (hv) {
                    var hT = hv.System.constructor.prototype;
                    var hD = hT.instantiate;
                    var hF = /\.(css|json|wasm)$/;
                    hT.shouldFetch = function (hG) {
                        var hQ = hG.split("?")[0].split("#")[0];
                        return hQ.slice(hQ.lastIndexOf(".")).match(hF);
                    };
                    hT.fetch = function (hG) {
                        return fetch(hG);
                    };
                    hT.instantiate = function (hG, hQ) {
                        if (this.shouldFetch(hG)) {
                            return this.fetch(hG).then(
                                function (hA) {
                                    if (!hA.ok) {
                                        throw Error(mR(7, "Error loading: " + hA.status + " " + hA.statusText + ", loading " + hG + (hQ ? " from " + hQ : "")));
                                    }
                                    var hZ = hA.headers.get("content-type");
                                    if (!hZ) {
                                        throw Error(mR(4, 'Error loading: Missing header "Content-Type", loading ' + hG + (hQ ? " from " + hQ : "")));
                                    }
                                    if (hZ.match(/^application\/json(;|$)/)) {
                                        return hA.json().then(
                                            function (hz) {
                                                return [
                                                    [],
                                                    function (hY) {
                                                        return {
                                                            execute: function () {
                                                                hY("default", hz);
                                                            },
                                                        };
                                                    },
                                                ];
                                            },
                                            function (hz) {
                                                throw Error(mR(3, 'Content error: Error "' + hz + '", loading ' + hG + ", from " + hQ));
                                            }
                                        );
                                    }
                                    if (hZ.match(/^text\/css(;|$)/)) {
                                        return hA.text().then(
                                            function (hz) {
                                                return [
                                                    [],
                                                    function (hY) {
                                                        return {
                                                            execute: function () {
                                                                var hx = new CSSStyleSheet();
                                                                hx.replaceSync(hz);
                                                                hY("default", hx);
                                                            },
                                                        };
                                                    },
                                                ];
                                            },
                                            function (hz) {
                                                throw Error(mR(3, 'Content error: Error "' + hz + '", loading ' + hG + ", from " + hQ));
                                            }
                                        );
                                    }
                                    if (hZ.match(/^application\/wasm(;|$)/)) {
                                        return (
                                            WebAssembly.compileStreaming ? WebAssembly.compileStreaming(hA) : hA.arrayBuffer().then(WebAssembly.compile)
                                        ).then(
                                            function (hz) {
                                                var hY = [];
                                                var hx = [];
                                                var hB = {};
                                                if (WebAssembly.Module.imports) {
                                                    WebAssembly.Module.imports(hz).forEach(function (hK) {
                                                        var hk = hK.module;
                                                        if (hY.indexOf(hk) === -1) {
                                                            hY.push(hk);
                                                            hx.push(function (hH) {
                                                                hB[hk] = hH;
                                                            });
                                                        }
                                                    });
                                                }
                                                return [
                                                    hY,
                                                    function (hK) {
                                                        return {
                                                            setters: hx,
                                                            execute: function () {
                                                                return WebAssembly.instantiate(hz, hB).then(function (hk) {
                                                                    hK(hk.exports);
                                                                });
                                                            },
                                                        };
                                                    },
                                                ];
                                            },
                                            function (hz) {
                                                throw Error(mR(3, 'Content error: Error "' + hz + '", loading ' + hG + ", from " + hQ));
                                            }
                                        );
                                    }
                                    throw Error(mR(4, 'Error loading: Unknown module type "' + hZ + '", loading ' + hG + ", from " + hQ));
                                },
                                function (hA) {
                                    throw Error(mR(3, 'Error loading: Error "' + hA + '", loading ' + hG + ", from " + hQ));
                                }
                            );
                        } else {
                            return hD.apply(this, arguments);
                        }
                    };
                })(U !== undefined ? U : qC);
                var hd = typeof Symbol != "undefined" && Symbol.toStringTag;
                hP.get = function (hv) {
                    var hT = this[hq][hv];
                    if (hT && hT.e === null && !hT.E) {
                        if (hT.er) {
                            return null;
                        } else {
                            return hT.n;
                        }
                    }
                };
                hP.set = function (hv, hT) {
                    try {
                        new URL(hv);
                    } catch (hQ) {}
                    var hD;
                    if (hd && hT[hd] === "Module") {
                        hD = hT;
                    } else {
                        hD = Object.assign(Object.create(null), hT);
                        if (hd) {
                            Object.defineProperty(hD, hd, {
                                value: "Module",
                            });
                        }
                    }
                    var hF = Promise.resolve(hD);
                    var hG =
                        this[hq][hv] ||
                        (this[hq][hv] = {
                            id: hv,
                            i: [],
                            h: false,
                            d: [],
                            e: null,
                            er: undefined,
                            E: undefined,
                        });
                    return (
                        !hG.e &&
                        !hG.E &&
                        (Object.assign(hG, {
                            n: hD,
                            I: undefined,
                            L: undefined,
                            C: hF,
                        }),
                        hD)
                    );
                };
                hP.has = function (hv) {
                    return !!this[hq][hv];
                };
                hP.delete = function (hv) {
                    var hT = this[hq];
                    var hD = hT[hv];
                    if (!hD || hD.e !== null || hD.E) {
                        return false;
                    }
                    var hF = hD.i.splice(0);
                    if (hD.er) {
                        hD.C = Promise.reject(hD.er);
                    }
                    if (hD.d) {
                        hD.d.forEach(function (hG, hQ) {
                            hG.i.some(function (hA, hZ) {
                                if (hA[hC] === hQ) {
                                    hG.i.splice(hZ, 1);
                                    return true;
                                }
                            });
                        });
                    }
                    delete hT[hv];
                    return function () {
                        var hG = hT[hv];
                        if (!hG || !hF || hG.e !== null || hG.E) {
                            return false;
                        }
                        hF.forEach(function (hQ) {
                            hG.i.push(hQ);
                            hQ(hG.n);
                        });
                        hF = null;
                    };
                };
                var hN = typeof Symbol != "undefined" && Symbol.iterator;
                hP.entries = function () {
                    var hv;
                    var hT;
                    var hD = this;
                    var hF = Object.keys(hD[hq]);
                    var hG = 0;
                    var hQ = {
                        next: function () {
                            for (; (hT = hF[hG++]) !== undefined && (hv = hD.get(hT)) === undefined; );
                            return {
                                done: hT === undefined,
                                value: hT !== undefined && [hT, hv],
                            };
                        },
                    };
                    hQ[hN] = function () {
                        return this;
                    };
                    return hQ;
                };
            })();
            var jW = new ((function () {
                function mR() {
                    this.Ci = Object.create(null);
                }
                mR.prototype.getMeta = function () {
                    return this.Ci;
                };
                mR.prototype.setMeta = function (mI, mX) {
                    if (!this.Ci[mI]) {
                        this.Ci[mI] = mX;
                    }
                };
                mR.prototype.removeMeta = function (mI) {
                    delete this.Ci[mI];
                };
                return mR;
            })())();
            var jd = {
                exports: {},
            };
            (function (mR) {
                mR.exports = (function () {
                    var mI =
                        /^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i;
                    function mX(h3) {
                        var h4;
                        var h5;
                        var h6 = h3.replace(/^v/, "").replace(/\+.*$/, "");
                        h5 = "-";
                        var h7 = (h4 = h6).indexOf(h5) === -1 ? h4.length : h4.indexOf(h5);
                        var h8 = h6.substring(0, h7).split(".");
                        h8.push(h6.substring(h7 + 1));
                        return h8;
                    }
                    function mp(h3) {
                        if (isNaN(+h3)) {
                            return h3;
                        } else {
                            return +h3;
                        }
                    }
                    function mV(h3) {
                        if (typeof h3 != "string") {
                            throw new TypeError("Invalid argument expected string");
                        }
                        if (!mI.test(h3)) {
                            throw Error("Invalid argument not valid semver ('" + h3 + "' received)");
                        }
                    }
                    function h0(h3, h4) {
                        [h3, h4].forEach(mV);
                        for (var h5 = mX(h3), h6 = mX(h4), h7 = 0; h7 < Math.max(h5.length - 1, h6.length - 1); h7++) {
                            var h8 = parseInt(h5[h7] || 0, 10);
                            var h9 = parseInt(h6[h7] || 0, 10);
                            if (h8 > h9) {
                                return 1;
                            }
                            if (h9 > h8) {
                                return -1;
                            }
                        }
                        var hq = h5[h5.length - 1];
                        var hC = h6[h6.length - 1];
                        if (hq && hC) {
                            var hy = hq.split(".").map(mp);
                            var hw = hC.split(".").map(mp);
                            for (h7 = 0; h7 < Math.max(hy.length, hw.length); h7++) {
                                if (hy[h7] === undefined || (typeof hw[h7] == "string" && typeof hy[h7] == "number")) {
                                    return -1;
                                }
                                if (hw[h7] === undefined || (typeof hy[h7] == "string" && typeof hw[h7] == "number")) {
                                    return 1;
                                }
                                if (hy[h7] > hw[h7]) {
                                    return 1;
                                }
                                if (hw[h7] > hy[h7]) {
                                    return -1;
                                }
                            }
                        } else if (hq || hC) {
                            if (hq) {
                                return -1;
                            } else {
                                return 1;
                            }
                        }
                        return 0;
                    }
                    var h1 = [">", ">=", "=", "<", "<="];
                    var h2 = {
                        ">": [1],
                        ">=": [0, 1],
                        "=": [0],
                        "<=": [-1, 0],
                        "<": [-1],
                    };
                    h0.validate = function (h3) {
                        return typeof h3 == "string" && mI.test(h3);
                    };
                    h0.compare = function (h3, h4, h5) {
                        (function (h7) {
                            if (typeof h7 != "string") {
                                throw new TypeError("Invalid operator type, expected string but got " + typeof h7);
                            }
                            if (h1.indexOf(h7) === -1) {
                                throw new TypeError("Invalid operator, expected one of " + h1.join("|"));
                            }
                        })(h5);
                        var h6 = h0(h3, h4);
                        return h2[h5].indexOf(h6) > -1;
                    };
                    return h0;
                })();
            })(jd);
            var jN = jd.exports;
            function jv(mR, mI) {
                return mI
                    .split("||")
                    .map(function (mX) {
                        return mX.trim();
                    })
                    .some(function (mX) {
                        return mX.split(" ").every(function (mp) {
                            var mV = 0;
                            if (mp[0] === "<" || mp[0] === ">") {
                                mV = 1;
                                if (mp[1] === "=") {
                                    mV++;
                                }
                            } else if (mp[0] === "=") {
                                mV = 1;
                            }
                            var h0 = mp.substring(0, mV) || "=";
                            var h1 = mp.substring(mV);
                            return jN.compare(mR, h1, h0);
                        });
                    });
            }
            var jT;
            var jD = System.constructor.prototype;
            var jF = System.constructor;
            var jG = [];
            function jQ(mR) {
                mR.registerRegistry = Object.create(null);
            }
            jQ(System);
            function jA() {
                jF.call(this);
                jQ(this);
            }
            jA.prototype = jD;
            System.constructor = jA;
            var jZ = jD.register;
            jD.register = function (mR, mI, mX) {
                if (typeof mR != "string") {
                    return jZ.apply(this, arguments);
                }
                var mp = [mI, mX];
                this.registerRegistry[mR] = mp;
                jT = mp;
                Promise.resolve()
                    .then(function () {
                        jT = null;
                    })
                    .catch(function () {});
                return jZ.apply(this, arguments);
            };
            var jz = jD.resolve;
            function jY(mR) {
                var mI = mR.name;
                var mX = US.PluginDependencies;
                if (mX && mX[mI]) {
                    var mp = mX[mI];
                    var mV = mR.version;
                    if (!jv(mV, mp)) {
                        var h0 = `Incompatible plugin version. Game required plugin ${mI} version is conflict
  current version: ${mV} : expected: ${mp}`;
                        throw Error(h0);
                    }
                }
            }
            jD.resolve = function (mR, mI) {
                try {
                    return jz.call(this, mR, mI);
                } catch (mX) {
                    if (mR in this.registerRegistry) {
                        return mR;
                    }
                    throw mX;
                }
            };
            var jx = jD.instantiate;
            jD.instantiate = function (mR, mI) {
                for (var mX = this.registerRegistry[mR], mp = jW.getMeta(), mV = 0, h0 = Object.entries(mp); mV < h0.length; mV++) {
                    var h1 = h0[mV];
                    var h2 = h1[0];
                    var h3 = h1[1];
                    if (!jG.includes(h2)) {
                        jY(h3);
                        var h4 = h3.dependencies;
                        var h5 = true;
                        for (var h6 in h4) {
                            var h7 = mp[h6];
                            var h8 = h4[h6];
                            if (!h7) {
                                h5 = false;
                                break;
                            }
                            if (!jv(h7.version, h8)) {
                                throw Error(`Incompatible plugin version: ${h7.name} load ${h6} ${h7.version}, expected: ${h8}`);
                            }
                        }
                        if (h5) {
                            jG.push(h2);
                        }
                    }
                }
                if (mX) {
                    this.registerRegistry[mR] = null;
                    return mX;
                } else {
                    return jx.call(this, mR, mI);
                }
            };
            var jB = jD.getRegister;
            jD.getRegister = function () {
                var mR = jB.call(this) || jT;
                jT = null;
                return mR;
            };
            var jK = new ((function () {
                function mR() {
                    this.pluginRegistries = Object.create(null);
                }
                mR.prototype.setPluginRegistry = function (mI, mX) {
                    if (!this.pluginRegistries[mI]) {
                        this.pluginRegistries[mI] = mX;
                    }
                };
                mR.prototype.getPluginRegistry = function (mI) {
                    return this.pluginRegistries[mI];
                };
                mR.prototype.getPluginRegistries = function () {
                    return Object.assign({}, this.pluginRegistries);
                };
                mR.prototype.removePluginRegistry = function (mI) {
                    delete this.pluginRegistries[mI];
                };
                return mR;
            })())();
            var jk = /\\/g;
            function jH() {
                for (var mR = [], mI = 0; mI < arguments.length; mI++) {
                    mR[mI] = arguments[mI];
                }
                for (var mX = "", mp = 0, mV = mR.length; mp < mV; ++mp) {
                    var h0 = mR[mp];
                    if (h0) {
                        if (mX.length > 0) {
                            var h1 = mX[mX.length - 1];
                            if (h1 !== "/" && !h0.startsWith("/")) {
                                mX += "/";
                            }
                        }
                        mX += h0;
                    }
                }
                return mX;
            }
            function jR(mR) {
                return mR.indexOf("file://") === 0;
            }
            function jI(mR) {
                return mR.indexOf("http://") === 0 || mR.indexOf("https://") === 0;
            }
            function jX(mR) {
                return mR.startsWith("/") || mR.startsWith("./") || mR.startsWith("../");
            }
            function jp(mR, mI) {
                if (mR.includes("\\")) {
                    mR = mR.replace(jk, "/");
                }
                if (mR.startsWith("/") && mR[1] === "/") {
                    return mI.slice(0, mI.indexOf(":") + 1) + mR;
                }
                if (
                    (mR[0] === "." &&
                        (mR[1] === "/" || (mR[1] === "." && (mR[2] === "/" || (mR.length === 2 && (mR += "/")))) || (mR.length === 1 && (mR += "/")))) ||
                    mR[0] === "/"
                ) {
                    var mX = mI.slice(0, mI.indexOf(":") + 1);
                    var mp = undefined;
                    mp =
                        mI[mX.length + 1] === "/"
                            ? mX !== "file:"
                                ? (mp = mI.slice(mX.length + 2)).slice(mp.indexOf("/") + 1)
                                : mI.slice(8)
                            : mI.slice(mX.length + +(mI[mX.length] === "/"));
                    if (mR.startsWith("/")) {
                        return mI.slice(0, mI.length - mp.length - 1) + mR;
                    }
                    for (var mV = mp.slice(0, mp.lastIndexOf("/") + 1) + mR, h0 = [], h1 = -1, h2 = 0; h2 < mV.length; h2++) {
                        if (h1 !== -1) {
                            if (mV[h2] === "/") {
                                h0.push(mV.slice(h1, h2 + 1));
                                h1 = -1;
                            }
                        } else if (mV[h2] === ".") {
                            if (mV[h2 + 1] !== "." || (mV[h2 + 2] !== "/" && h2 + 2 !== mV.length)) {
                                if (mV[h2 + 1] === "/" || h2 + 1 === mV.length) {
                                    h2 += 1;
                                } else {
                                    h1 = h2;
                                }
                            } else {
                                h0.pop();
                                h2 += 2;
                            }
                        } else {
                            h1 = h2;
                        }
                    }
                    if (h1 !== -1) {
                        h0.push(mV.slice(h1));
                    }
                    return mI.slice(0, mI.length - mp.length) + h0.join("");
                }
            }
            function jV(mR) {
                if (/^[a-z0-9A-Z-_]+:/.test(mR)) {
                    if (mR.startsWith("javascript:")) {
                        return;
                    }
                } else {
                    if (!mR.startsWith("//")) {
                        mR = "//" + mR;
                    }
                    mR = b.location.protocol + mR;
                }
                return mR;
            }
            function L0(mR) {
                var mI = mR.split("//").pop() || mR;
                return mR.replace(mI, mI.substring(0, mI.lastIndexOf("/")));
            }
            var L1 = System;
            var L2 = System.constructor.prototype;
            function L3() {
                return US.SharedPath;
            }
            var L4;
            var L5 = L2.resolve;
            L2.resolve = function (mR, mI) {
                try {
                    return L5.call(this, mR, mI);
                } catch (h4) {
                    var mX = (function (h5) {
                        var h6 = jK.getPluginRegistry(h5);
                        if (!h6) {
                            var h7 = `${h5}/index.js`;
                            h6 = {
                                name: h5,
                                rawUrl: h5,
                                url: "./" + h7,
                                noPrefixUrlPath: h7,
                                parentUrl: L3(),
                            };
                            jK.setPluginRegistry(h5, h6);
                        }
                        return h6;
                    })(mR);
                    (function (h5) {
                        var h6 = L3();
                        if (h6.startsWith("../") && h5.parentUrl === h6) {
                            h5.parentUrl = undefined;
                        }
                    })(mX);
                    var mp = jW.getMeta()[mR];
                    if (mp && mp.entry) {
                        var mV = mp.entry;
                        var h0 = mp.name;
                        var h1 = jp(mV, `${h0}/`);
                        var h2 = mX.parentUrl ? mX.parentUrl + h1 : L3() + h1;
                        if (!h2) {
                            throw Error(`Resolved url error: ${h2}`);
                        }
                        return L5.call(this, h2, mX.parentUrl);
                    }
                    if (!mX.url) {
                        throw Error(`Registry url error: ${mX.url}`);
                    }
                    var h3 = mX.parentUrl ? mX.parentUrl + mX.noPrefixUrlPath : mX.url;
                    return L5.call(this, h3, mX.parentUrl);
                }
            };
            (function (mR) {
                mR[(mR.LoadingError = 1)] = "LoadingError";
                mR[(mR.ScriptError = 2)] = "ScriptError";
                mR[(mR.VersionError = 3)] = "VersionError";
            })(L4 || (L4 = {}));
            var L6 = Object.getOwnPropertySymbols || undefined;
            var L7 = (L6 && L6(System)[0]) || "@";
            var L8 = (function () {
                function mR() {
                    this.errorItems = [];
                }
                mR.prototype.getAbsoluteUrl = function (mI) {
                    var mX = jK.getPluginRegistry(mI);
                    if (!mX) {
                        return mI;
                    }
                    var mp = mX.entry ? mX.entry : mX.noPrefixUrlPath;
                    var mV = mX.absoluteUrl;
                    if (!mV) {
                        var h0 = this.getRawEntries();
                        for (var h1 in h0) {
                            if (h1.includes(mp)) {
                                mV = mX.absoluteUrl = h1;
                                break;
                            }
                        }
                    }
                    return mV || "";
                };
                mR.prototype.getRawEntries = function () {
                    return Object.assign({}, System[L7]);
                };
                mR.prototype.forceDelete = function (mI) {
                    var mX = jK.getPluginRegistry(mI);
                    var mp = this.getRawEntries();
                    if (mX) {
                        var mV = this.getAbsoluteUrl(mI);
                        var h0 = mp[mV].d;
                        var h1 = (h0 == null ? undefined : h0.length) && h0[h0.length - 1].id;
                        if (h1) {
                            this.removeRawEntry(h1);
                        }
                        this.removeRawEntry(mV);
                        jK.removePluginRegistry(mI);
                    } else {
                        this.removeRawEntry(mI);
                    }
                };
                mR.prototype.getDeps = function (mI) {
                    var mX = [];
                    var mp = this.getRawEntries()[mI];
                    if (mp && mp.d) {
                        mX.push.apply(mX, mp.d);
                    }
                    return mX;
                };
                mR.prototype.cleanErrorModule = function () {
                    var mI = this.getRawEntries();
                    for (var mX in mI) {
                        var mp = mI[mX];
                        if (mp.er) {
                            System.delete(mp.id);
                        }
                    }
                };
                mR.prototype.addErrorItem = function (mI) {
                    this.errorItems.push(mI);
                };
                mR.prototype.getErrorItems = function () {
                    return this.errorItems.slice();
                };
                mR.prototype.cleanErrorItems = function () {
                    this.errorItems.length = 0;
                };
                mR.prototype.removeRawEntry = function (mI) {
                    delete System[L7][mI];
                };
                return mR;
            })();
            var L9 = new L8();
            var Lq = L1.constructor.prototype;
            Lq.onload = function (mR, mI) {
                if (mR) {
                    var mX = mR.message.startsWith("Error loading");
                    L9.addErrorItem({
                        src: mI,
                        type: mX ? L4.LoadingError : L4.ScriptError,
                        error: mR,
                    });
                }
            };
            var LC = Lq.get;
            Lq.get = function (mR) {
                return LC.call(this, L9.getAbsoluteUrl(mR));
            };
            var Ly;
            var Lw = Lq.createScript;
            Lq.createScript = function (mR) {
                var mI = this;
                return fP(mR)
                    .then(function (mX) {
                        var mp = Lw.call(mI, mX);
                        if (!(mp instanceof HTMLScriptElement)) {
                            throw Error("Unexpected script element");
                        }
                        function mV(h0) {
                            URL.revokeObjectURL(mX);
                            if (h0.type === "error") {
                                fj(mX);
                            }
                        }
                        mp.addEventListener("error", mV);
                        mp.addEventListener("load", mV);
                        return mp;
                    })
                    .catch(function () {
                        throw Error(`Error loading ${mR}`);
                    });
            };
            Lq.fetch = fw;
            (function (mR) {
                mR[(mR.Blob = 0)] = "Blob";
                mR[(mR.Image = 1)] = "Image";
                mR[(mR.Script = 2)] = "Script";
                mR[(mR.Style = 3)] = "Style";
                mR[(mR.Json = 4)] = "Json";
                mR[(mR.SystemScript = 5)] = "SystemScript";
                mR[(mR.Text = 6)] = "Text";
                mR[(mR.ArrayBuffer = 7)] = "ArrayBuffer";
            })(Ly || (Ly = {}));
            var LP = {
                css: Ly.Style,
                js: Ly.SystemScript,
                png: Ly.Image,
                jpg: Ly.Image,
                json: Ly.Json,
                mp3: Ly.ArrayBuffer,
            };
            var LM = (function () {
                function mR() {
                    this.Mi = 0;
                    this.Hi = false;
                    this.onPreload = undefined;
                    this.onRetry = undefined;
                    this.onLoad = undefined;
                }
                mR.prototype.load = function (mI) {
                    if (mI && mI.length !== 0) {
                        this.Mi = mI.length;
                        for (var mX = 0, mp = mI; mX < mp.length; mX++) {
                            var mV = mp[mX];
                            var h0 = undefined;
                            if (typeof mV == "string") {
                                h0 = {
                                    src: mV,
                                    type: this.Vi(mV),
                                };
                            } else {
                                if (!mV.src) {
                                    --this.Mi;
                                    continue;
                                }
                                if ((h0 = mV).type === undefined) {
                                    mV.type = this.Vi(mV.src);
                                }
                            }
                            this.Bi(h0);
                        }
                    } else if (this.onComplete) {
                        this.onComplete();
                    }
                };
                mR.prototype.Bi = function (mI) {
                    var mX = this;
                    mR.context.event.emit("Shell.PWDReset");
                    var mp = (mI.retry = mI.retry || 0);
                    if (mp > (mI.maxAttemptCount === undefined ? mR.ji : mI.maxAttemptCount)) {
                        if (mI.optional) {
                            this.Pi(mI);
                        } else if (this.onError) {
                            this.onError(mI);
                        }
                    } else if (mp === 0) {
                        if (this.onPreload) {
                            this.onPreload(mI);
                        }
                        this.Gi(mI);
                    } else {
                        // TOLOOK
                        setTimeout(function () {
                            if (mX.onRetry) {
                                mX.onRetry(mI);
                            }
                            if (mI.shouldRetry === false) {
                                mX.Pi(mI);
                            } else {
                                mX.Gi(mI);
                            }
                        }, (1 << mp) * 1000);
                    }
                };
                mR.prototype.Gi = function (mI) {
                    if (mI.type === Ly.Script) {
                        this.Ri(mI);
                    } else if (mI.type === Ly.SystemScript) {
                        this.Zi(mI);
                    } else if (mI.type === Ly.Style) {
                        this.Oi(mI);
                    } else if (mI.type === Ly.Image) {
                        this.Di(mI);
                    } else {
                        this.Ni(mI);
                    }
                };
                mR.prototype.Ni = function (mI) {
                    var mX = this;
                    fw(mI.src)
                        .then(function (mp) {
                            if (!mp.ok) {
                                throw mp.status;
                            }
                            switch (mI.type) {
                                case Ly.Json:
                                    return mp.json();
                                case Ly.Blob:
                                    return mp.blob();
                                case Ly.ArrayBuffer:
                                    return mp.arrayBuffer();
                                default:
                                    return mp.text();
                            }
                        })
                        .then(function (mp) {
                            mI.response = mp;
                            mX.Pi(mI);
                        })
                        .catch(function (mp) {
                            if (typeof mp == "number") {
                                mI.errCode = mp;
                            }
                            mX.Ti(mI);
                        });
                };
                mR.prototype.Zi = function (mI) {
                    var mX = this;
                    L1.import(mI.src)
                        .then(function (mp) {
                            mI.response = mp;
                            mX.Pi(mI);
                        })
                        .catch(function (mp) {
                            if (mp.message.startsWith("Incompatible plugin version")) {
                                if (mX.Hi) {
                                    return;
                                }
                                mX.Hi = true;
                                mR.context.event.emit("Shell.PWDDisabled");

                                console.log("error1");
                                mR.context.event.emit(
                                    "Error.Occurred",
                                    {
                                        context: "Preload",
                                        info: {
                                            category: UW,
                                            domain: jg.Domain,
                                            code: jg.ResourceVersionError,
                                            error: mp,
                                        },
                                        report: true,
                                    },
                                    function () {
                                        mR.context.event.emit("Window.Reload");
                                    }
                                );
                            } else {
                                mX.Qi(mp, mI);
                            }
                        });
                };
                mR.prototype.Qi = function (mI, mX) {
                    var mp = L9.getErrorItems();
                    L9.cleanErrorItems();
                    L9.cleanErrorModule();
                    if (mp.length !== 0) {
                        var mV =
                            mp
                                .map(function (h2) {
                                    return h2.src;
                                })
                                .join(",") || mX.src;
                        var h0 = mp[0].type === L4.ScriptError ? jg.PluginScriptError : jg.LoadResourceError;
                        if (h0 === jg.PluginScriptError) {
                            mR.context.event.emit("Shell.PWDDisabled");
                            mR.context.event.emit("Error.SendExceptionReport", mI);
                            mX.errCode = h0;
                            mX.err = mI;
                            if (this.onError) {
                                this.onError(mX);
                            }
                            this.onComplete = undefined;
                            this.onError = undefined;
                            this.onRetry = undefined;
                            this.onLoad = undefined;
                        } else {
                            var h1 = mX.retry || 0;
                            this.Li(mV, h1, h0);
                            mX.errCode = h0;
                            mX.err = "load resource fail";
                            mX.retry = h1 + 1;
                            this.Bi(mX);
                        }
                    }
                };
                mR.prototype.Ii = function (mI) {
                    return function (mX) {
                        return new Promise(function (mp, mV) {
                            var h0 = document.createElement(mI);
                            h0.onload = function () {
                                URL.revokeObjectURL(mX);
                                if (h0 instanceof HTMLScriptElement) {
                                    h0.parentElement.removeChild(h0);
                                }
                                mp(h0);
                            };
                            h0.onerror = function () {
                                var h1;
                                URL.revokeObjectURL(mX);
                                fj(mX);
                                if (!((h1 = h0.parentElement) === null || h1 === undefined)) {
                                    h1.removeChild(h0);
                                }
                                mV("onerror");
                            };
                            if (h0 instanceof HTMLScriptElement) {
                                h0.async = true;
                                h0.src = mX;
                                document.head.appendChild(h0);
                            } else if (h0 instanceof HTMLImageElement) {
                                h0.src = mX;
                            } else if (h0 instanceof HTMLLinkElement) {
                                h0.rel = "stylesheet";
                                h0.type = "text/css";
                                h0.href = mX;
                                document.head.appendChild(h0);
                            } else {
                                mV("unknown");
                            }
                        });
                    };
                };
                mR.prototype.Fi = function (mI, mX) {
                    var mp = this;
                    fP(mI.src)
                        .then(this.Ii(mX))
                        .then(function (mV) {
                            mI.response = mV;
                            mp.Pi(mI);
                        })
                        .catch(function (mV) {
                            if (typeof mV == "number") {
                                mI.errCode = mV;
                            }
                            mp.Ti(mI);
                        });
                };
                mR.prototype.Ri = function (mI) {
                    this.Fi(mI, "script");
                };
                mR.prototype.Di = function (mI) {
                    this.Fi(mI, "img");
                };
                mR.prototype.Oi = function (mI) {
                    this.Fi(mI, "link");
                };
                mR.prototype.Pi = function (mI) {
                    if (this.onLoad) {
                        this.onLoad(mI);
                    }
                    --this.Mi;
                    if (this.Mi === 0 && this.onComplete) {
                        this.onComplete();
                    }
                };
                mR.prototype.Ti = function (mI) {
                    var mX = mI.retry || 0;
                    this.Li(mI.src, mX, jg.LoadResourceError);
                    mI.retry = mX + 1;
                    this.Bi(mI);
                };
                mR.prototype.Vi = function (mI) {
                    return LP[mI.split("?")[0].substring(mI.lastIndexOf(".") + 1)] || Ly.Blob;
                };
                mR.prototype.Li = function (mI, mX, mp) {
                    mR.context.event.emit("Shell.PWDDisabled");
                    var mV = "src: " + mI.split("?")[0];
                    mR.context.event.emit("Error.Report", {
                        category: UW,
                        error: "load resource fail",
                        domain: jg.Domain,
                        code: mp,
                        retry: mX,
                        messages: mV,
                    });
                };
                mR.ji = 5;
                return mR;
            })();
            var LU = {};
            function Lb(mR, mI, mX) {
                var mp = (mX && mX.delayComplete) || false;
                var mV = {
                    mainComponent: mI,
                    delayComplete: mp,
                };
                LU[mR] = mV;
                if (mp) {
                    return function (h0) {
                        if (mV.completeCallback) {
                            mV.completeCallback(h0);
                        }
                    };
                }
            }
            function Lf(mR) {
                return function (mI) {
                    mI.prototype.complete = Lb(mR, mI, {
                        delayComplete: true,
                    });
                };
            }
            var Lj = (function (mR) {
                function _mI() {
                    return (mR !== null && mR.apply(this, arguments)) || this;
                }
                q1(_mI, mR);
                _mI.prototype.onDestroy = function () {
                    if (this.root && cc.isValid(this.root)) {
                        this.root.removeFromParent(true);
                    }
                };
                return _mI;
            })(jm);
            function LL(mR) {
                return function (mI) {
                    mI.prototype.complete = Lb(mR, mI, {
                        delayComplete: true,
                    });
                };
            }
            var LE;
            var LO;
            var Lm;
            var LJ;
            var LS;
            var Lg;
            var LW = (function (mR) {
                function mI() {
                    return (mR !== null && mR.apply(this, arguments)) || this;
                }
                q1(mI, mR);
                return mI;
            })(jm);
            var Ld = (function () {
                function mR() {}
                mR.prototype.getClassInfo = function (mI) {
                    var mX = mI._$cInfo;
                    if (mX && mX.componentCls !== mI) {
                        mX = mI._$cInfo = undefined;
                    }
                    return mX;
                };
                mR.prototype.getProperty = function (mI) {
                    if (mI && mI._$prop) {
                        return mI._$prop;
                    }
                };
                mR.prototype.getComponentBundle = function (mI) {
                    var mX = this.getClassInfo(mI);
                    if (mX) {
                        return mX.bundleInfo;
                    }
                };
                mR.prototype.injectClassInfo = function (mI, mX) {
                    var mp = this.getClassInfo(mI);
                    if (!(mp && mp !== undefined)) {
                        mp = mI._$cInfo = {
                            bundleInfo: mX,
                            componentCls: mI,
                            componentID: undefined,
                        };
                    }
                    return mp;
                };
                mR.prototype.injectProperty = function (mI) {
                    var mX = this.getProperty(mI);
                    if (!mX) {
                        mX = mI._$prop = {};
                    }
                    return mX;
                };
                mR.prototype.checkCrossBundleOperation = function (mI, mX) {
                    var mp = this.getClassInfo(mI);
                    if (mp && mp.bundleInfo !== mX) {
                        throw Error("Cross bundle operation not allowed");
                    }
                };
                return mR;
            })();
            var LN = new Ld();
            var Lv = (function (mR) {
                function mI() {
                    return (mR !== null && mR.apply(this, arguments)) || this;
                }
                q1(mI, mR);
                mI.prototype.zi = function (mX, mp, mV, h0) {
                    var h1 = this;
                    if (h0 === undefined) {
                        h0 = true;
                    }
                    var h2 = q8([], mV, true);
                    if (mX.stack) {
                        h2.push(mX.stack);
                    }
                    var h3 = {
                        category: UW,
                        domain: jg.Domain,
                        code: jg.PluginScriptError,
                        error: mX,
                        messages: h2,
                    };
                    // debugger;
                    this.event.emit("Error.SendExceptionReport", mX);
                    if (mp && mp.optional) {
                        var h4 = this.context.getContext(mp);
                        if (h4) {
                            h4.destroy();
                        }
                    } else if (h0) {
                        console.log("error2", h0, h3);

                        this.event.emit(
                            "Error.Occurred",
                            {
                                context: "Unknown",
                                info: h3,
                                report: false,
                            },
                            function () {
                                h1.event.emit("Window.Reload");
                            }
                        );
                    }
                };
                return mI;
            })(jm);
            var LT = (function (mR) {
                function mI() {
                    var mX = (mR !== null && mR.apply(this, arguments)) || this;
                    mX.Wi = [];
                    return mX;
                }
                q1(mI, mR);
                mI.prototype.onInstantiate = function (mX) {
                    mR.prototype.onInstantiate.call(this, mX);
                    this.event.on("Core.BundleCreated", this.Ui, this);
                    this.event.on("Core.BundleDestroyed", this.qi, this);
                };
                mI.prototype.create = function (mX, mp) {
                    var mV = this.Wi[mp.id];
                    var h0 = LN.injectClassInfo(mX, mp);
                    if (h0.componentID === undefined) {
                        mV.push(undefined);
                        h0.componentID = mV.length - 1;
                    }
                    if (!mV[h0.componentID]) {
                        var h1 = this.context.getContext(mp);
                        if (!h1) {
                            throw Error("Unable to get bundle context");
                        }
                        try {
                            var h2 = new mX();
                            LN.injectProperty(h2);
                            if (h2.onInstantiate) {
                                h2.onInstantiate(h1);
                            }
                            mV[h0.componentID] = h2;
                            if (h2.onCreate) {
                                h2.onCreate(mp.config);
                            }
                            this.event.emit("Core.ComponentCreated", mX);
                        } catch (h3) {
                            if (h0.componentID !== undefined) {
                                mV[h0.componentID] = undefined;
                            }
                            this.zi(h3, mp, ["Component create"], !h1.bundleInfo.optional);
                            throw h3;
                        }
                    }
                };
                mI.prototype.getInstance = function (mX) {
                    var mp = LN.getClassInfo(mX);
                    if (mp) {
                        var mV = this.Wi[mp.bundleInfo.id];
                        if (mV) {
                            return mV[mp.componentID];
                        }
                    }
                };
                mI.prototype.destroy = function (mX, mp) {
                    var mV = LN.getClassInfo(mX);
                    if (mV) {
                        var h0 = mV.componentID;
                        var h1 = this.Wi[mV.bundleInfo.id];
                        var h2 = h1[h0];
                        if (h2) {
                            h1[h0] = undefined;
                            this._destroy(h2, mp);
                        }
                    }
                };
                mI.prototype.updateState = function (mX, mp) {
                    var mV = LN.getClassInfo(mX);
                    if (mV) {
                        var h0 = mV.bundleInfo.id ? this.Wi[mV.bundleInfo.id][mV.componentID] : undefined;
                        if (h0) {
                            if (h0.state) {
                                Object.assign(h0.state, mp);
                            }
                            try {
                                if (h0.onStateChange) {
                                    h0.onStateChange(mp);
                                }
                            } catch (h1) {
                                this.zi(h1, mV.bundleInfo, ["Component updateState"]);
                            }
                        }
                    }
                };
                mI.prototype.Ui = function (mX) {
                    var mp = mX.payload;
                    if (!mp.id) {
                        throw Error("Unable to get bundle id");
                    }
                    this.Wi[mp.id] = [];
                };
                mI.prototype.qi = function (mX) {
                    var mp = mX.payload;
                    if (!mp.id) {
                        throw Error("Unable to get bundle id");
                    }
                    var mV = this.Wi[mp.id];
                    if (mV && mV.length > 0) {
                        for (var h0 = 0; h0 < mV.length; ++h0) {
                            if (mV[h0]) {
                                this._destroy(mV[h0], mp);
                            }
                        }
                    }
                    this.Wi[mp.id] = undefined;
                };
                mI.prototype._destroy = function (mX, mp) {
                    try {
                        if (mX.onDestroy) {
                            mX.onDestroy();
                        }
                    } catch (mV) {
                        this.zi(mV, mp, ["Component destroy"]);
                    }
                    this.event.emit("Core.ComponentDestroyed", {
                        componentCls: mX.cls,
                        component: mX,
                    });
                };
                return mI;
            })(Lv);
            var LD = typeof Symbol != "undefined";
            var LF = LD ? Symbol() : "_type";
            var LG = LD ? Symbol() : "_propagationStopped";
            var LQ = LD ? Symbol() : "_intercepted";
            var LA = LD ? Symbol() : "_propagateCb";
            var LZ = LD ? Symbol() : "_emittingBundle";
            var Lz = LD ? Symbol() : "_subscribers";
            var LY = (function () {
                function mR() {
                    this.cleanUp();
                }
                Object.defineProperty(mR.prototype, "type", {
                    get: function () {
                        return this[LF];
                    },
                    enumerable: false,
                    configurable: true,
                });
                Object.defineProperty(mR.prototype, "emittingBundle", {
                    get: function () {
                        return this[LZ];
                    },
                    enumerable: false,
                    configurable: true,
                });
                Object.defineProperty(mR.prototype, "propagationCanceled", {
                    get: function () {
                        return this[LG];
                    },
                    enumerable: false,
                    configurable: true,
                });
                Object.defineProperty(mR.prototype, "intercepted", {
                    get: function () {
                        return this[LQ];
                    },
                    enumerable: false,
                    configurable: true,
                });
                Object.defineProperty(mR.prototype, "subscribers", {
                    get: function () {
                        return this[Lz];
                    },
                    enumerable: false,
                    configurable: true,
                });
                mR.prototype.init = function (mI, mX, mp, mV, h0) {
                    this[LF] = mI;
                    this[LA] = mp;
                    this[LZ] = mV;
                    this[Lz] = h0;
                    this.payload = mX;
                };
                mR.prototype.intercept = function () {
                    this[LQ] = true;
                };
                mR.prototype.propagate = function () {
                    if (!this[LQ]) {
                        throw Error("Propagation called on non intercepted event");
                    }
                    this[LQ] = false;
                    this[LA](this);
                };
                mR.prototype.stopPropagation = function () {
                    this[LG] = true;
                };
                mR.prototype.cleanUp = function () {
                    this[LF] = undefined;
                    this[LG] = false;
                    this[LQ] = false;
                    this[LA] = undefined;
                    this[LZ] = undefined;
                    this[Lz] = undefined;
                    this.payload = undefined;
                    this.response = undefined;
                    this.responseCb = undefined;
                    this.callbackRef = undefined;
                    this.error = undefined;
                };
                return mR;
            })();
            var Lx = typeof Symbol != "undefined";
            var LB = Lx ? Symbol() : "_subscriptionTable";
            var LK = Lx ? Symbol() : "_pendingEmitOnceTable";
            var Lk = Lx ? Symbol() : "_emitQueue";
            var LH = Lx ? Symbol() : "_eventPool";
            var LR = Lx ? Symbol() : "_currentEvent";
            var LI = Lx ? Symbol() : "_processing";
            var LX = (function (mR) {
                function mI() {
                    var mX = (mR !== null && mR.apply(this, arguments)) || this;
                    mX[LE] = {};
                    mX[LO] = {};
                    mX[Lm] = [];
                    mX[LJ] = [];
                    mX[LS] = undefined;
                    mX[Lg] = false;
                    return mX;
                }
                q1(mI, mR);
                mI.prototype.onInstantiate = function (mX) {
                    mR.prototype.onInstantiate.call(this, mX);
                    this.event.on("Core.ComponentDestroyed", this.Yi, this);
                };
                mI.prototype.on = function (mX, mp, mV, h0, h1) {
                    this.Ji(mX, mp, mV, false, this.Xi(h0), h1);
                };
                mI.prototype.once = function (mX, mp, mV, h0, h1) {
                    this.Ji(mX, mp, mV, true, this.Xi(h0), h1);
                };
                mI.prototype.off = function (mX, mp, mV) {
                    this.Ki(mX, mp, mV);
                };
                mI.prototype.emit = function (mX, mp, mV, h0) {
                    var h1 = this[LH].pop() || new LY();
                    var h2 = this[LB][mX] ? q8([], this[LB][mX], true) : [];
                    h1.init(mX, mp, this.propagate.bind(this), h0, h2);
                    h1.responseCb = mV;
                    this.propagate(h1);
                };
                mI.prototype.propagate = function (mX) {
                    if (this[LR] !== mX) {
                        this[Lk].push(mX);
                        this.$i();
                    }
                };
                mI.prototype.hasListeners = function (mX) {
                    var mp = this[LB][mX];
                    return !(!mp || mp.length === 0);
                };
                mI.prototype.Yi = function (mX) {
                    var mp = LN.getProperty(mX.payload.component).subscriptions;
                    if (mp) {
                        for (; mp.length !== 0; ) {
                            var mV = mp[mp.length - 1];
                            this.Ki(mV.type, mV.callback, mX.payload.component);
                        }
                    }
                };
                mI.prototype.Ji = function (mX, mp, mV, h0, h1, h2) {
                    var h3 = this[LB][mX];
                    if (h3 === undefined) {
                        h3 = this[LB][mX] = [];
                    }
                    for (var h4 = 0; h4 < h3.length; ++h4) {
                        var h5 = h3[h4];
                        if (h5 !== undefined && h5.callback === mp && h5.target === mV) {
                            return;
                        }
                    }
                    this.tn(mX, mp, mV);
                    var h6 = {
                        type: mX,
                        callback: mp,
                        target: mV,
                        once: h0,
                        priority: h1,
                        bundleInfo: h2,
                    };
                    if (h0) {
                        var h7 = (this[LK][mX] = this[LK][mX] ? this[LK][mX] : []);
                        if (!h7.includes(h6)) {
                            h7.push(h6);
                        }
                    }
                    if (h1 === this.Xi("High")) {
                        h3.unshift(h6);
                    } else {
                        var h8 = false;
                        for (h4 = 0; h4 < h3.length; ++h4) {
                            if (!(h3[h4].priority <= h6.priority)) {
                                h3.splice(h4, 0, h6);
                                h8 = true;
                                break;
                            }
                        }
                        if (!h8) {
                            h3.push(h6);
                        }
                    }
                };
                mI.prototype.Ki = function (mX, mp, mV) {
                    var h0 = this[LB][mX];
                    if (h0 !== undefined) {
                        for (var h1 = 0; h1 < h0.length; ++h1) {
                            var h2 = h0[h1];
                            if (h2 && h2.callback === mp && h2.target === mV) {
                                h0.splice(h1, 1);
                                this.nn(h2);
                                this.rn(mX, h2.callback, h2.target);
                                return;
                            }
                        }
                    }
                };
                mI.prototype.sn = function (mX) {
                    var mp = mX.subscribers;
                    if (mp.length !== 0) {
                        for (this.an(mX); mp.length > 0 && !mX.propagationCanceled && !mX.intercepted; ) {
                            var mV = mp.shift();
                            if (!(mV === undefined || !this.cn(mV) || (mV.once && this.un(mV)))) {
                                this.hn(mX, mV);
                            }
                        }
                        this.ln(mX, 0, mp);
                    } else {
                        this.fn(mX);
                    }
                };
                mI.prototype.an = function (mX) {
                    this[LR] = mX;
                };
                mI.prototype.hn = function (mX, mp) {
                    var mV = (mX.callbackRef = mp.callback);
                    var h0 = mp.target;
                    try {
                        if (h0) {
                            mV.call(h0, mX);
                        } else {
                            mV(mX);
                        }
                    } catch (h1) {
                        mX.error = h1;
                        this.zi(h1, mp.bundleInfo, ["Event emit"]);
                    }
                };
                mI.prototype.ln = function (mX, mp, mV) {
                    if (mX.error || (!mX.intercepted && (mp === mV.length || mX.propagationCanceled))) {
                        this.fn(mX);
                    }
                    this[LR] = undefined;
                };
                mI.prototype.fn = function (mX) {
                    try {
                        if (mX.responseCb) {
                            mX.responseCb(mX);
                        }
                    } catch (mp) {
                        this.zi(mp, mX.emittingBundle, ["Event emit callback"]);
                    }
                    mX.cleanUp();
                    if (this[LH].length < 40) {
                        this[LH].push(mX);
                    }
                };
                mI.prototype.$i = function () {
                    if (!this[LI]) {
                        this[LI] = true;
                        for (var mX = this[Lk]; mX.length > 0; ) {
                            var mp = mX.shift();
                            if (mp) {
                                this.sn(mp);
                            }
                        }
                        this[LI] = false;
                    }
                };
                mI.prototype.tn = function (mX, mp, mV) {
                    var h0 = mV;
                    var h1 = LN.getProperty(h0);
                    if (h1) {
                        var h2 = h1.subscriptions;
                        if (!h2) {
                            h2 = h1.subscriptions = [];
                        }
                        h2.push({
                            type: mX,
                            callback: mp,
                            target: mV,
                        });
                    }
                };
                mI.prototype.rn = function (mX, mp, mV) {
                    var h0 = mV;
                    var h1 = LN.getProperty(h0);
                    if (h1) {
                        var h2 = h1.subscriptions;
                        if (h2) {
                            for (var h3 = 0; h3 < h2.length; ++h3) {
                                var h4 = h2[h3];
                                if (h4.type === mX && h4.callback === mp && h4.target === mV) {
                                    h2.splice(h3, 1);
                                    break;
                                }
                            }
                        }
                    }
                };
                mI.prototype.cn = function (mX) {
                    return !!this[LB][mX.type].includes(mX);
                };
                mI.prototype.un = function (mX) {
                    return this[LK][mX.type].indexOf(mX) === -1 || (this.Ki(mX.type, mX.callback, mX.target), false);
                };
                mI.prototype.nn = function (mX) {
                    if (mX.once) {
                        var mp = this[LK][mX.type];
                        var mV = mp.indexOf(mX);
                        if (mV !== -1) {
                            mp.splice(mV, 1);
                        }
                    }
                };
                mI.prototype.Xi = function (mX) {
                    switch (mX) {
                        case "High":
                            return 10;
                        case "Normal":
                        default:
                            return 20;
                        case "Low":
                            return 30;
                    }
                };
                return mI;
            })(Lv);
            LE = LB;
            LO = LK;
            Lm = Lk;
            LJ = LH;
            LS = LR;
            Lg = LI;
            var Lp = document.createElement("div");
            function LV(mR) {
                var mI = Lp;
                mI.innerHTML = mR;
                var mX = mI.firstChild;
                try {
                    mX = mI.removeChild(mX);
                } catch (mp) {}
                mI.innerHTML = "";
                return mX;
            }
            var E0 = (function (mR) {
                var mI;
                var mX;
                if (!mR) {
                    mR = 1;
                }
                var mp =
                    ((mX = (mI = b.shell) === null || mI === undefined ? undefined : mI.urlSearch) === null || mX === undefined
                        ? undefined
                        : mX.get("nodbg")) === "1";
                return new Promise(function (mV) {
                    if (mp) {
                        mV(mR);
                    } else {
                        Function(
                            "n,t",
                            "setInterval(\"(function(a){return function(a){return Function('Function(\\\"debugger;'+a+'\\\")()')}(a)})(Math.random().toString())();\"+n(t),1e3*t)"
                        )(mV, mR);
                    }
                });
            })(1);
            var E1 = (function (mR) {
                function mI() {
                    var mX = (mR !== null && mR.apply(this, arguments)) || this;
                    mX.dn = {};
                    return mX;
                }
                q1(mI, mR);
                mI.prototype.onInstantiate = function (mX) {
                    mR.prototype.onInstantiate.call(this, mX);
                    this.event.on("Core.ComponentDestroyed", this.Yi, this);
                };
                mI.prototype.register = function (mX, mp) {
                    this.dn[mp] = mX;
                };
                mI.prototype.append = function (mX, mp, mV) {
                    if (mX && mp) {
                        var h0 = this.component.getInstance(mX);
                        if (!h0) {
                            throw Error(`Unable to get instance ${mX.toString()}`);
                        }
                        var h1 = this.component.getInstance(mp);
                        var h2 = h0 == null ? undefined : h0.rootElement;
                        var h3 = (h1 == null ? undefined : h1.getContainerElement) ? h1.getContainerElement(mV) : h1 == null ? undefined : h1.rootElement;
                        if (h2 && h3) {
                            this.vn(h2, h3);
                            h0.parent = mp;
                        }
                    }
                };
                mI.prototype.appendTo = function (mX, mp) {
                    var mV = this.dn[mp];
                    if (mV) {
                        this.append(mX, mV, undefined);
                    }
                };
                mI.prototype.removeFromParent = function (mX) {
                    var mp = this.component.getInstance(mX);
                    if (mp) {
                        (function (mV) {
                            if (mV) {
                                var h0 = mV.parentNode;
                                if (h0) {
                                    h0.removeChild(mV);
                                }
                            }
                        })(mp.rootElement);
                        mp.parent = undefined;
                    }
                };
                mI.prototype.show = function (mX) {
                    var mp = this.component.getInstance(mX);
                    if (mp && mp.onShow) {
                        mp.onShow();
                    }
                };
                mI.prototype.hide = function (mX) {
                    var mp = this.component.getInstance(mX);
                    if (mp && mp.onHide) {
                        mp.onHide();
                    }
                };
                mI.prototype.getContainerElement = function (mX, mp) {
                    var mV = this.component.getInstance(mX);
                    if (mV && mV.getContainerElement) {
                        return mV.getContainerElement(mp);
                    }
                };
                mI.prototype.getRootElement = function (mX) {
                    var mp = this.component.getInstance(mX);
                    if (mp) {
                        return mp.rootElement;
                    }
                };
                mI.prototype.Yi = function (mX) {
                    var mp = mX.payload.component;
                    if (mp && mp.rootElement && mp.rootElement) {
                        var mV = mp.rootElement.parentNode;
                        if (mV) {
                            mV.removeChild(mp.rootElement);
                        }
                        mp.rootElement = undefined;
                    }
                };
                mI.prototype.vn = function (mX, mp) {
                    if (mX && mp && mX.parentNode !== mp) {
                        if (mX.parentNode) {
                            mX.parentNode.removeChild(mX);
                        }
                        mp.appendChild(mX);
                    }
                };
                return mI;
            })(Lv);
            var E2 = (function (mR) {
                function mI() {
                    var mX = (mR !== null && mR.apply(this, arguments)) || this;
                    mX._resources = [];
                    return mX;
                }
                q1(mI, mR);
                mI.prototype.setQualifierConfig = function (mX, mp, mV) {
                    var h0;
                    var h1;
                    var h2;
                    var h3;
                    if (Array.isArray(mX)) {
                        h0 = mp;
                        h1 = mX[0];
                        h2 = mX[1];
                        h3 = mX[2];
                    } else {
                        h0 = mV;
                        h1 = mX;
                    }
                    var h4 = this.An(h0);
                    h4.subConfig = h2;
                    h4.resourceQualifier = undefined;
                    h4.extConfig = h3;
                    if (h1) {
                        if (h1.language) {
                            h4.config = h1;
                        } else {
                            h4.config = Object.assign({}, h1, this.pn());
                        }
                    }
                };
                mI.prototype.addAssets = function (mX, mp, mV) {
                    var h0 = this.An(mp);
                    Object.assign(h0.md5Map, mX);
                    if (h0.resourceQualifier) {
                        h0.resourceQualifier.assetTable = Object.keys(h0.md5Map);
                    }
                    if (mV) {
                        for (var h1 in mX) {
                            h0.baseMap[h1] = mV;
                        }
                    }
                };
                mI.prototype.resolveUrl = function (mX, mp, mV) {
                    var h0;
                    if (mV === undefined) {
                        mV = false;
                    }
                    var h1 = this.mn(mp);
                    var h2 = ((h0 = h1.resourceQualifier) === null || h0 === undefined ? undefined : h0.getResourceURL(mX)) || mX;
                    var h3 = h1.md5Map[h2];
                    var h4 = h2;
                    if (h3) {
                        var h5 = h4.lastIndexOf(".");
                        h4 = Array.isArray(h3) ? h3[1] + "." + h3[0] + h4.substring(h5) : h4.substring(0, h5) + "." + h3 + h4.substring(h5);
                    }
                    if (!mV) {
                        var h6 = this.gn(h2, h1, mp);
                        if (h6 === undefined) {
                            throw Error("Invalid input data");
                        }
                        h4 = jH(h6, h4);
                        if (!jI(h4) && !jR(h4)) {
                            var h7 = this.bn(mp.baseUrl);
                            if (h7 === undefined) {
                                throw Error("Invalid url data");
                            }
                            h4 = jX(h4) ? jp(h4, h7) || h4 : jH(h7, h4);
                        }
                    }
                    return h4;
                };
                mI.prototype.hasEntry = function (mX, mp) {
                    var mV;
                    var h0;
                    return (
                        ((h0 = (mV = this.mn(mp).resourceQualifier) === null || mV === undefined ? undefined : mV.assetTable) === null || h0 === undefined
                            ? undefined
                            : h0.indexOf(mX)) !== -1
                    );
                };
                mI.prototype.mn = function (mX) {
                    var mp = this.An(mX);
                    if (!mp.resourceQualifier) {
                        if (!mp.subConfig || !mp.subConfig.language) {
                            var mV = fB();
                            var h0 = mV.indexOf("-");
                            if (h0 !== -1) {
                                mp.subConfig = mp.subConfig || Object.create(null);
                                var h1 = mV.substring(h0 + 1);
                                mp.subConfig.language = function (h2) {
                                    if (h2 === h1) {
                                        return 1;
                                    } else {
                                        return 0;
                                    }
                                };
                            }
                        }
                        mp.resourceQualifier = new bg(mp.config, mp.subConfig, mp.extConfig);
                        mp.resourceQualifier.assetTable = Object.keys(mp.md5Map);
                    }
                    return mp;
                };
                mI.prototype.An = function (mX) {
                    if (!mX.id) {
                        throw Error("Unable to get bundle id");
                    }
                    var mp = this._resources[mX.id];
                    if (!mp) {
                        mp = this._resources[mX.id] = {
                            resourceQualifier: undefined,
                            config: this.pn(),
                            subConfig: undefined,
                            md5Map: {},
                            baseMap: {},
                        };
                    }
                    return mp;
                };
                mI.prototype.pn = function () {
                    return {
                        language: fB().split("-")[0],
                        orientation: bM.getOrientationMode(),
                    };
                };
                mI.prototype.gn = function (mX, mp, mV) {
                    return mp.baseMap[mX] || this.bn(mV.baseUrl);
                };
                mI.prototype.bn = function (mX) {
                    var mp = b8();
                    var mV = mp.origin;
                    var h0 = mp.pathname;
                    if (!mX) {
                        return jH(mV, h0.substring(0, h0.lastIndexOf("/")), "/");
                    }
                    if (jX(mX)) {
                        var h1 = jH(mV, h0);
                        return jp(mX, h1);
                    }
                    return jV(mX);
                };
                return mI;
            })(Lv);
            var E3 = {};
            function E4(mR) {
                return mR.substring(mR.lastIndexOf("/") + 1);
            }
            function E5(mR, mI) {
                return mR.substring(0, mR.indexOf(mI)) + mI;
            }
            function E6(mR, mI) {
                for (
                    var mX,
                        mp = L9.getDeps(mR),
                        mV = mI.name,
                        h0 = {
                            name: mV,
                            version: mI.version,
                            optional: mI.optional,
                            baseUrl: E5(mR, mV),
                            files: [],
                        },
                        h1 = 0;
                    h1 < mp.length;
                    h1++
                ) {
                    var h2 = mp[h1].id;
                    var h3 = E4(h2);
                    if (h3 !== "index.js") {
                        if (!((mX = h0.files) === null || mX === undefined)) {
                            mX.push(h3);
                        }
                    }
                }
                return h0;
            }
            function E7(mR, mI, mX) {
                var mp = mX._$meta;
                return q2(q2(q2({}, mI), mp), {
                    version: mp.version,
                    hasCCSettings: !!mX._$ccSettings,
                    baseUrl: E5(mR, mI.name),
                });
            }
            function E8(mR) {
                delete E3[mR];
            }
            var E9;
            var Eq = (function () {
                function mR(mI) {
                    this._n = {};
                    this.wn = [];
                    this.xn = [];
                    this.onComplete = undefined;
                    this.onRetry = undefined;
                    this.onError = undefined;
                    this._n = mI;
                }
                mR.prototype.load = function () {
                    var mI = this;
                    var mX = this.yn();
                    var mp = this.Sn(this._n);
                    mX.onComplete = function () {
                        var mV = mI.yn();
                        mI.kn(mV, mI.xn).then(function () {
                            var h0 = mI.En();
                            mI.kn(h0, mI.wn).then(function () {
                                var h1 = (function () {
                                    var h4 = L9.getRawEntries();
                                    var h5 = {};
                                    var h6 = {};
                                    for (var h7 in h4) {
                                        var h8 = h4[h7];
                                        if (h8 && h8.n) {
                                            var h9 = h8.n;
                                            if (h9._$meta) {
                                                var hq = h9._$meta.name;
                                                if (!E3[hq]) {
                                                    E3[hq] = h9;
                                                    var hC = jK.getPluginRegistry(hq) || Object.create(null);
                                                    h5[hq] = E6(h7, hC);
                                                    h6[hq] = E7(h7, hC, h9);
                                                }
                                            }
                                        }
                                    }
                                    return {
                                        scripts: h5,
                                        plugins: h6,
                                    };
                                })();
                                var h2 = h1.plugins;
                                for (var h3 in h2) {
                                    h2[h3].config = mI._n[h3] && mI._n[h3].config ? mI._n[h3].config : undefined;
                                }
                                if (mI.onComplete) {
                                    mI.onComplete(h1);
                                }
                            });
                        });
                    };
                    mX.load(mp);
                };
                mR.prototype.Cn = function (mI) {
                    var mX = (function (h0) {
                        var h1 = h0 && h0._$meta;
                        if (h1) {
                            var h2 = h1.entry;
                            var h3 = h1.name;
                            var h4 = h1.alias;
                            var h5 = h1.version;
                            if (h3) {
                                jW.setMeta(h3, h1);
                                if (h2) {
                                    var h6 = jp(h2, `${h3}/`);
                                    jK.getPluginRegistry(h3).entry = h6;
                                }
                                if (h4) {
                                    hC = bC((hq = h4));
                                    if (hq !== hC) {
                                        hC = bq((hC = atob(hC)), "xU8pa3cY");
                                    }
                                    var h7 = hC;
                                    jW.setMeta(h7, h1);
                                    var h8 = jK.getPluginRegistry(h7);
                                    if (h8) {
                                        var h9 = h5.split(".")[0];
                                        if (jW.getMeta()[h8.name].version.split(".")[0] !== h9) {
                                            throw Error(`Unable to import ${h7} due to version conflict between ${h5} and ${h8.version}`);
                                        }
                                    } else {
                                        jK.setPluginRegistry(h7, jK.getPluginRegistry(h3));
                                    }
                                }
                                var hq;
                                var hC;
                                return h1;
                            }
                        }
                    })(mI.response);
                    if (mX) {
                        var mp = mX.name;
                        var mV = mX.entry;
                        this.Mn(mV, mp);
                        this.Hn(mX);
                    }
                };
                mR.prototype.Mn = function (mI, mX) {
                    if (mI) {
                        var mp = jK.getPluginRegistry(mX);
                        var mV = {
                            src: mp.rawUrl,
                            type: Ly.SystemScript,
                            info: q2(
                                {
                                    baseUrl: "",
                                },
                                mp
                            ),
                            optional: mp.optional,
                        };
                        this.wn.unshift(mV);
                    }
                };
                mR.prototype.Hn = function (mI) {
                    var mX = this;
                    var mp = this.Vn(mI);
                    if (mp) {
                        this.Sn(mp).forEach(function (mV) {
                            mX.xn.unshift(mV);
                        });
                    }
                };
                mR.prototype.kn = function (mI, mX) {
                    var mp = this;
                    if (mX.length <= 0) {
                        return Promise.resolve();
                    } else {
                        return new Promise(function (mV) {
                            mI.onComplete = function () {
                                mV();
                            };
                            mI.load(mp.Bn(mX));
                        });
                    }
                };
                mR.prototype.yn = function () {
                    var mI = this;
                    var mX = this.En();
                    mX.onLoad = function (mp) {
                        mI.Cn(mp);
                    };
                    return mX;
                };
                mR.prototype.En = function () {
                    var mI = this;
                    var mX = new LM();
                    mX.onError = function (mp) {
                        if (mI.onError) {
                            mI.onError(mp);
                        }
                    };
                    mX.onRetry = function (mp) {
                        if (mI.onRetry) {
                            mI.onRetry(mp.retry || 0, mp.info);
                        }
                    };
                    return mX;
                };
                mR.prototype.Vn = function (mI) {
                    var mX = {};
                    var mp = mI.dependencies;
                    var mV = jK.getPluginRegistries();
                    for (var h0 in mp) {
                        mX[h0] = q2(
                            {
                                baseUrl: "",
                            },
                            mV[h0]
                        );
                    }
                    if (Object.keys(mX).length === 0) {
                        return undefined;
                    } else {
                        return mX;
                    }
                };
                mR.prototype.Sn = function (mI) {
                    var mX = [];
                    for (var mp in mI) {
                        var mV = mI[mp];
                        if (mV.rawUrl) {
                            mX.push({
                                src: mV.rawUrl,
                                type: Ly.SystemScript,
                                info: mV,
                                optional: mV.optional,
                            });
                        }
                    }
                    return mX;
                };
                mR.prototype.Bn = function (mI) {
                    var mX = mI.map(function (mp) {
                        return mp.src;
                    });
                    return mI.filter(function (mp, mV) {
                        var h0 = mp.src;
                        return !mX.includes(h0, mV + 1);
                    });
                };
                return mR;
            })();
            (function (mR) {
                mR[(mR.Shell = 0)] = "Shell";
                mR[(mR.Splash = 1)] = "Splash";
            })(E9 || (E9 = {}));
            var EC;
            var Ey = (function () {
                function mR() {}
                mR.prototype.interpret = function (mI) {
                    return fM.resource.resolveUrl(mI[0]);
                };
                return mR;
            })();
            (function (mR) {
                mR[(mR.Value = 1)] = "Value";
                mR[(mR.Color = 2)] = "Color";
            })(EC || (EC = {}));
            var Ew = (function () {
                function mR() {}
                mR.prototype.interpret = function (mI) {
                    switch (mI[0]) {
                        case EC.Value:
                            return mI[1];
                        case EC.Color:
                            return (function (mX, mp, mV, h0) {
                                if (h0) {
                                    return `rgba(${mX}, ${mp}, ${mV}, ${h0})`;
                                } else {
                                    return `rgb(${mX}, ${mp}, ${mV})`;
                                }
                            })(mI[1], mI[2], mI[3], mI[4]);
                        default:
                            return mI[0];
                    }
                };
                return mR;
            })();
            var EP = (function () {
                function mR(mI) {
                    this.jn = mI;
                    this.Pn("shell", E9.Shell);
                    this.Pn("splash", E9.Splash);
                }
                mR.prototype.Pn = function (mI, mX) {
                    var mp = this.jn.unregisterInterpreter(mI);
                    if (!mp) {
                        switch (mX) {
                            case E9.Splash:
                                mp = new Ey();
                                break;
                            case E9.Shell:
                            default:
                                mp = new Ew();
                        }
                    }
                    this.jn.registerInterpreter(mI, mp);
                };
                mR.prototype.v = function (mI) {
                    return this.jn.v(mI) || undefined;
                };
                mR.prototype.extend = function (mI) {
                    this.jn.extend(mI);
                };
                return mR;
            })();
            var EM = new EP(fV);
            var EU = (function () {
                function mR(mI) {
                    this.Gn = mI;
                }
                mR.prototype.load = function () {
                    var mI = this;
                    if (this.Gn.bundleInfo) {
                        this.Rn(function () {
                            mI.kn();
                        });
                    } else {
                        var mX = {
                            error: Error("[Plugin Loader]: Empty package info. Failed to load the plugin."),
                            item: undefined,
                        };
                        if (this.onError) {
                            this.onError(this.Gn.bundleInfo, mX);
                        }
                    }
                };
                mR.prototype.Rn = function (mI) {
                    var mX = this;
                    var mp = this.Gn.bundleInfo;
                    if (mp.assets) {
                        if (fO(mp.assets)) {
                            var mV = fm(mp.assets);
                            this.Gn.resource.addAssets(mV.assets);
                            mI();
                        } else if (typeof mp.assets == "string") {
                            var h0 = new LM();
                            h0.onLoad = function (h1) {
                                var h2 = h1.response;
                                if (fO(h1.response)) {
                                    h2 = fm(h1.response);
                                }
                                if (h2.version !== 2) {
                                    throw Error("Unknown asset table format version: " + h2.version);
                                }
                                mX.Gn.resource.addAssets(h2.assets);
                                mI();
                            };
                            h0.onError = function (h1) {
                                var h2 = `[Plugin Loader]: Failed to download asset table of ${mp.name}`;
                                var h3 = {
                                    error: Error(h2),
                                    item: h1,
                                };
                                if (mX.onError) {
                                    mX.onError(mX.Gn.bundleInfo, h3);
                                }
                            };
                            h0.load([this.Gn.resource.resolveUrl(mp.assets)]);
                        } else {
                            this.Gn.resource.addAssets(mp.assets.assets);
                            mI();
                        }
                    } else {
                        mI();
                    }
                };
                mR.prototype.kn = function () {
                    var mI = this;
                    var mX = this.Zn();
                    var mp = new LM();
                    if (mX.sources.length) {
                        if (this.onPreload) {
                            this.onPreload(this.Gn.bundleInfo, mX.totalFiles);
                        }
                        mp.onLoad = function (mV) {
                            mX.fileCount += 1;
                            if (mI.onProgress) {
                                mI.onProgress(mI.Gn.bundleInfo, {
                                    currentItem: mV,
                                    fileCount: mX.fileCount,
                                    totalFiles: mX.totalFiles,
                                });
                            }
                            if (mV.src === mI.On) {
                                var h0 = mV.response;
                                for (var h1 in h0) {
                                    if (h0[h1]) {
                                        fY.extend(h0[h1], h1);
                                    }
                                }
                            }
                            if (mV.src === mI.Dn) {
                                EM.extend(mV.response);
                            }
                            if (mX.success() && mI.onSuccess) {
                                mI.onSuccess(mI.Gn.bundleInfo);
                            }
                        };
                        mp.onRetry = function (mV) {
                            var h0 =
                                fY.t("General.ResourceRetryMessage") +
                                fY.t("RetryHandler.Times", {
                                    times: {
                                        ordinal: mV.retry,
                                    },
                                });
                            mI.Gn.event.emit("Shell.ChangeProgressText", h0);
                        };
                        mp.onError = function (mV) {
                            var h0 = `[Plugin Loader]: Failed to download file of ${mI.Gn.bundleInfo.name}. Src: ${mV.src}`;
                            var h1 = {
                                error: Error(h0),
                                item: mV,
                            };
                            if (mI.onError) {
                                mI.onError(mI.Gn.bundleInfo, h1);
                            }
                        };
                        mp.load(mX.sources);
                    } else if (this.onSuccess) {
                        this.onSuccess(this.Gn.bundleInfo);
                    }
                };
                mR.prototype.Zn = function () {
                    var mI;
                    var mX;
                    var mp;
                    var mV = this;
                    var h0 = this.Gn.bundleInfo;
                    var h1 = [];
                    var h2 = h0.preload;
                    var h3 = h0.extraAssets;
                    if (h2) {
                        if (!((mI = h0.files) === null || mI === undefined)) {
                            mI.push.apply(
                                mI,
                                h2.map(function (h9) {
                                    return mV.Gn.resource.resolveUrl(h9);
                                })
                            );
                        }
                    }
                    if (h3) {
                        if (!((mX = h0.files) === null || mX === undefined)) {
                            mX.push.apply(mX, h3);
                        }
                    }
                    var h4 = (mp = h0.files) === null || mp === undefined ? undefined : mp.length;
                    if (h4 && h0.files) {
                        for (var h5 = 0; h5 < h4; h5++) {
                            var h6 = h0.files[h5];
                            if (!h6.startsWith("shell-game-res")) {
                                var h7 = jI(h6) || jR(h6) ? h6 : jH(h0.baseUrl, h6);
                                h1.push(h7);
                            }
                        }
                    }
                    if (this.Gn.resource.hasEntry("shell-game-res/locale/locale.json")) {
                        this.On = this.Gn.resource.resolveUrl("shell-game-res/locale/locale.json");
                        h1.push(this.On);
                    }
                    if (this.Gn.resource.hasEntry("shell-game-res/appearance/appearance.json")) {
                        this.Dn = this.Gn.resource.resolveUrl("shell-game-res/appearance/appearance.json");
                        h1.push(this.Dn);
                    }
                    var h8 = {
                        sources: h1,
                        fileCount: 0,
                        totalFiles: h1.length,
                        success: function () {
                            return h8.fileCount === h8.totalFiles;
                        },
                    };
                    return h8;
                };
                return mR;
            })();
            var Eb = (function () {
                function mR() {
                    this.Nn = 0;
                    this.Tn = 0;
                    this.Qn = 0;
                    this.Ln = 0;
                    this.In = false;
                    this.Fn = 0;
                    this.zn = 0;
                }
                mR.prototype.addTotalFileCount = function (mI) {
                    this.Tn += mI;
                };
                mR.prototype.fileLoaded = function () {
                    this.Nn += 1;
                };
                mR.prototype.filePercentage = function () {
                    if (!this.In) {
                        this.Fn = this.Nn;
                    }
                    var mI = this.Fn / this.Tn;
                    if (isNaN(mI)) {
                        return 0;
                    } else {
                        return mI;
                    }
                };
                mR.prototype.addTotalPluginCount = function (mI) {
                    this.Ln += mI;
                };
                mR.prototype.pluginLoaded = function () {
                    this.Qn += 1;
                };
                mR.prototype.isComplete = function () {
                    if (!this.In) {
                        this.zn = this.Qn;
                    }
                    return this.zn === this.Ln;
                };
                mR.prototype.stop = function () {
                    this.In = true;
                };
                return mR;
            })();
            var Ej = true;
            var EL = (function (mR) {
                function mI() {
                    return (mR !== null && mR.apply(this, arguments)) || this;
                }
                q1(mI, mR);
                mI.prototype.onInstantiate = function (mX) {
                    mR.prototype.onInstantiate.call(this, mX);
                    this.event.on("Shell.GetPluginMeta", this.Wn, this);
                };
                mI.prototype.load = function (mX, mp) {
                    var mV = this;
                    if (mp === undefined) {
                        mp = {};
                    }
                    var h0 = new Eq(mX);
                    h0.onError = function (h1) {
                        if (h1.info.optional) {
                            if (mp.onComplete) {
                                mp.onComplete();
                            }
                        } else if (mp.onError) {
                            mp.onError(h1);
                        }
                    };
                    h0.onRetry = function (h1) {
                        var h2 =
                            fY.t("General.ResourceRetryMessage") +
                            fY.t("RetryHandler.Times", {
                                times: {
                                    ordinal: h1,
                                },
                            });
                        mV.event.emit("Shell.ChangeProgressText", h2);
                    };
                    h0.onComplete = function (h1) {
                        function h2() {
                            if (mp.onComplete) {
                                mp.onComplete();
                            }
                        }
                        var h3 = h1.plugins;
                        if (Object.keys(h3).length !== 0) {
                            if (bM.getURLSearchParam().get("plog") === "1") {
                                (function (h4, h5) {
                                    var h6 = {};
                                    if (Ej) {
                                        Ej = false;
                                        h6[h4.name] = h4.version;
                                    }
                                    for (var h7 in h5) {
                                        var h8 = h5[h7];
                                        h6[h7] = h8.version;
                                    }
                                    if (Object.keys(h6).length !== 0) {
                                        b.console.log("plugins: " + JSON.stringify(h6, undefined, 4));
                                    }
                                })(mV.context.bundleInfo, h3);
                            }
                            if (mp.onDependencyResolved) {
                                mp.onDependencyResolved(h3);
                            }
                            mV.Un(h3, mp, h2);
                        } else {
                            h2();
                        }
                    };
                    h0.load();
                };
                mI.prototype.unload = function (mX) {
                    E8(mX.name);
                    this.context.destroyBundle(mX);
                };
                mI.prototype.Un = function (mX, mp, mV) {
                    var h0 = this;
                    var h1 = new Eb();
                    var h2 = mp.onProgress;
                    var h3 = mp.onPreload;
                    var h4 = mp.onLoad;
                    var h5 = mp.onError;
                    function h6() {
                        h1.pluginLoaded();
                        if (h1.isComplete()) {
                            mV();
                        }
                    }
                    function h7(hb, hj) {
                        if (hj == null ? undefined : hj.error) {
                            if (hb && hb.optional) {
                                h0.unload(hb);
                                h6();
                                return;
                            }
                            h1.stop();
                            if (hj.item && h5) {
                                h5(hj.item);
                            }
                        } else {
                            h6();
                        }
                    }
                    function h8(hb, hj) {
                        h1.addTotalFileCount(hj);
                        if (h3) {
                            h3(hb);
                        }
                    }
                    function h9(hb, hj) {
                        h1.fileLoaded();
                        if (h2) {
                            h2(hb, h1.filePercentage());
                        }
                        if (h4) {
                            h4(hj.currentItem);
                        }
                    }
                    function hq(hb, hj) {
                        h7(hb, hj);
                    }
                    function hC(hb) {
                        h0.qn(hb, h7);
                    }
                    h1.addTotalPluginCount(Object.keys(mX).length);
                    for (var hy in mX) {
                        var hw = mX[hy];
                        if (hw) {
                            var hP = hw.files;
                            if (!hP) {
                                hP = hw.files = [];
                            }
                            var hM = this.context.createBundle(hw);
                            var hU = new EU(hM);
                            hU.onPreload = h8;
                            hU.onProgress = h9;
                            hU.onSuccess = hC;
                            hU.onError = hq;
                            hU.load();
                        } else {
                            h1.addTotalPluginCount(-1);
                        }
                    }
                };
                mI.prototype.qn = function (mX, mp) {
                    var mV;
                    function h0(h8) {
                        if (h8) {
                            mp(mX, {
                                error: h8,
                            });
                        } else {
                            mp(mX);
                        }
                    }
                    try {
                        mV = mX.name;
                        var h1 = LU[mV];
                        if (!h1) {
                            h0();
                            return;
                        }
                        var h2 = h1.delayComplete || false;
                        if (h2) {
                            h1.completeCallback = h0;
                        }
                        if (h1.mainComponent) {
                            var h3 = this.context.getContext(mX);
                            if (!h3) {
                                throw Error(`Unable to get context of ${mX.name}`);
                            }
                            if (
                                mX.bundles &&
                                !(function (h8) {
                                    for (var h9 in h8) {
                                        if (h8[h9] !== undefined && h8[h9] !== null) {
                                            return false;
                                        }
                                    }
                                    return true;
                                })(mX.bundles)
                            ) {
                                var h4 = h3.bundleInfo.bundles;
                                if (h4) {
                                    var h5 = Object.create(null);
                                    for (var h6 in h4) {
                                        var h7 = h4[h6];
                                        h5[h6] = h7.version;
                                    }
                                    h3.cocos.setCocosBundleVers(h5);
                                    h3.bundleInfo.bundleBaseUrl = jH(h3.bundleInfo.baseUrl, "assets/");
                                    try {
                                        h3.component.create(h1.mainComponent);
                                        if (!h2) {
                                            h0();
                                        }
                                    } catch (h8) {
                                        h0(h8);
                                    }
                                } else {
                                    h0(Error("Cocos bundle is undefined"));
                                }
                            } else {
                                h3.component.create(h1.mainComponent);
                                if (!h2) {
                                    h0();
                                }
                            }
                        } else if (!h2) {
                            h0();
                        }
                    } catch (h9) {
                        mp(mX, {
                            error: Error(`Failed to create plugin: ${mX.name}`),
                        });
                    }
                };
                mI.prototype.Wn = function (mX) {
                    mX.response = jW.getMeta();
                };
                return mI;
            })(Lv);
            var EE = (function (mR) {
                function mI() {
                    var mX = (mR !== null && mR.apply(this, arguments)) || this;
                    mX.Yn = [];
                    return mX;
                }
                q1(mI, mR);
                mI.prototype.createBundle = function (mX) {
                    for (var mp = 0; mp < this.Yn.length; ++mp) {
                        var mV = this.Yn[mp];
                        if (mV && mV.bundleInfo === mX) {
                            return mV;
                        }
                    }
                    var h0 = jw && jw.createContext(mX);
                    if (!h0) {
                        throw Error("Bundle factory context not created");
                    }
                    this.Yn.push(h0);
                    mX.id = this.Yn.length - 1;
                    h0.event.emit("Core.BundleCreated", mX);
                    return h0;
                };
                mI.prototype.getContext = function (mX) {
                    if (mX && mX.id !== undefined) {
                        return this.Yn[mX.id];
                    }
                };
                mI.prototype.queryBundle = function (mX) {
                    for (var mp = 0; mp < this.Yn.length; ++mp) {
                        var mV = this.Yn[mp];
                        if (mV) {
                            var h0 = mV.bundleInfo;
                            if (h0.name === mX) {
                                return h0;
                            }
                        }
                    }
                };
                mI.prototype.destroyBundle = function (mX) {
                    var mp = mX.id;
                    if (mp !== undefined) {
                        var mV = this.Yn[mp];
                        if (mV !== undefined) {
                            E8(mX.name);
                            L9.forceDelete(mV.bundleInfo.name);
                            this.Yn[mp] = undefined;
                            mV.event.emit("Core.BundleDestroyed", mV.bundleInfo);
                        }
                    }
                };
                return mI;
            })(Lv);
            var EO = ["icon_android_96.png", "icon_android_144.png", "icon_android_192.png"];
            var Em = ["icon_ios_60.png", "icon_ios_120.png", "icon_ios_180.png"];
            var EJ = [96, 144, 192];
            var ES = [60, 120, 180];
            function Eg(mR, mI, mX) {
                mR.forEach(function (mp, mV) {
                    var h0 = mI[mV];
                    var h1 = "shell-game-res/splash/" + mp;
                    var h2 = fM.resource.resolveUrl(h1);
                    if (!h2.endsWith(h1)) {
                        var h3 = document.head.querySelector(`link[rel='${mX}'][sizes='${h0}x${h0}']`);
                        if (!h3) {
                            (h3 = document.createElement("link")).setAttribute("rel", mX);
                            h3.setAttribute("sizes", `${h0}x${h0}`);
                            document.head.appendChild(h3);
                        }
                        h3.href = h2;
                    }
                });
            }
            var EW = (function (mR) {
                function mI() {
                    return (mR !== null && mR.apply(this, arguments)) || this;
                }
                q1(mI, mR);
                mI.prototype.onCreate = function () {
                    var mX = bM.getOrientationMode();
                    mX = bM.isMobile() || mX === "port" ? mX : mX + "-pc";
                    this.rootElement = LV(
                        '<div id="footer-container" class="footer-container">' +
                            `<div class="footer-mask-container-${mX}">` +
                            `${this.Jn()}` +
                            "</div>" +
                            `${this.Xn()}` +
                            "</div>"
                    );
                };
                mI.prototype.onStateChange = function (mX) {
                    if (this.rootElement) {
                        this.rootElement.style.height = `${mX.height}px`;
                    }
                    var mp = document.getElementById("footer-copyright-image");
                    if (mp) {
                        mp.style.bottom = `${27.5 - mX.excessBottom}px`;
                    }
                };
                mI.prototype.Xn = function () {
                    if (bM.getOrientationMode() === "port") {
                        return '<div class="footer-image-container"><div id="footer-copyright-image"></div></div>';
                    } else {
                        return "";
                    }
                };
                mI.prototype.Jn = function () {
                    if (EM.v("footer.enable")) {
                        var mX = EM.v("footer.background_image");
                        if (!mX) {
                            throw Error("You have enable custom footer, but all custom config value not given!");
                        }
                        return `<div class="footer-mask footer-mask-color" style="${`background-image: ${mX}`}"></div>`;
                    }
                    var mp = US.ThemeColor;
                    var mV = [mp.substr(1, 2), mp.substr(3, 2), mp.substr(5, 2)].map(function (h1) {
                        return parseInt(h1, 16);
                    });
                    var h0 = `background-image: linear-gradient(180deg, 
              rgba(${mV[0]}, ${mV[1]}, ${mV[2]}, 0), ${US.ThemeColor})`;
                    return `<div class="footer-mask footer-mask-color" style="${h0}"></div>` + '<div class="footer-mask footer-mask-black"></div>';
                };
                return mI;
            })(jS);
            function Ed(mR, mI) {
                var mX = document.createElement(mI);
                mR.appendChild(mX);
                return mX;
            }
            function EN(mR, mI) {
                var mX = document.createElementNS("http://www.w3.org/2000/svg", mI);
                mR.appendChild(mX);
                return mX;
            }
            function Ev(mR, mI) {
                mR.innerHTML += mI;
                return mR;
            }
            function ET() {
                for (var mR = arguments, mI = mR[0], mX = 1; mX < mR.length; mX += 2) {
                    mI.style[mR[mX]] = mR[mX + 1];
                }
                return mI;
            }
            function ED() {
                for (var mR = arguments, mI = mR[0], mX = 1; mX < mR.length; mX += 2) {
                    mI.setAttribute(mR[mX], mR[mX + 1]);
                }
                return mI;
            }
            var EF;
            var EG;
            var EQ;
            var EA = {
                "PG-Color-Top": "PG-Color-Top",
                "PG-Color-Bottom": "PG-Color-Bottom",
                PG1: "PG1",
                PG2: "PG2",
                PG3: "PG3",
                PG4: "PG4",
                PG5: "PG5",
            };
            var EZ = {
                yellow: ["G-Yelow", 5],
                green: ["G-Green", 10],
                darkRed: ["G-Dark-Red", 5],
                orange: ["P-Orange", 10],
                purple: ["P-Purple", 5],
            };
            var Ez = [
                ["0", "#d888f3", "#d888f3;#fee8a1;#a0f5b2;#30f4e1;#42b1ff;#78fbf0;#a3bdfa;#d888f3;"],
                ["0.5", "#8aadff", "#8aadff;#78fbf0;#42b1ff;#8aadff;#a0f5b2;fee8a1;#d888f3;#8aadff;"],
                ["1", "#30f4e1", "#30f4e1;#d888f3;#42b1ff;#8aadff;#a0f5b2;#78fbf0;#78fbf0;#30f4e1;"],
            ];
            function EY(mR) {
                var mI = mR.element;
                var mX = mR.duration;
                var mp = mR.delay;
                ED(
                    EN(mI, "animate"),
                    "attributeName",
                    "opacity",
                    "dur",
                    mX + "s",
                    "values",
                    "0; 0; 1;",
                    "keyTimes",
                    "0; " + (mp || 0) + "; 1",
                    "end",
                    "indefinite"
                );
            }
            function Ex() {
                var mR = document.getElementById("gradient-color");
                var mI = document.getElementById("svg-logo-container");
                var mX = document.getElementById("pg-svg-text");
                if (mI) {
                    ET(mR, "opacity", 1);
                    ET(mI, "opacity", 0);
                    ET(mX, "opacity", 0);
                }
                Ez.forEach(function (mp) {
                    var mV = document.getElementById("color-" + mp[1]);
                    if (mV) {
                        mV.beginElement();
                    }
                });
            }
            function EB() {
                var mR = document.getElementById("gradient-color");
                var mI = document.getElementById("svg-logo-container");
                var mX = document.getElementById("pg-svg-text");
                if (mI) {
                    ET(mR, "opacity", 0);
                    ET(mI, "opacity", 1);
                    ET(mX, "opacity", 1);
                }
                EQ = // TOLOOK
                    setTimeout(function () {
                        Ez.forEach(function (mp) {
                            var mV = document.getElementById("color-" + mp[1]);
                            if (mV) {
                                mV.endElement();
                            }
                        });
                    }, 2000);
            }
            var EK = (function (mR) {
                function mI() {
                    return (mR !== null && mR.apply(this, arguments)) || this;
                }
                q1(mI, mR);
                mI.prototype.onCreate = function () {
                    this.rootElement = LV('<div class="logo-container"></div>');
                };
                mI.prototype.onDestroy = function () {
                    (function () {
                        var mX = document.getElementById("svg-logo");
                        if (mX) {
                            clearTimeout(EQ);
                            clearInterval(EG);
                            mX.parentElement.removeChild(mX);
                        }
                    })();
                };
                mI.prototype.onStateChange = function (mX) {
                    switch (mX.state) {
                        case "init":
                            var mp = mX.certBlobUrl;
                            var mV = (this.Kn = document.createElement("img"));
                            mV.className = "footer-text-img";
                            mV.src = mp;
                            if (this.rootElement) {
                                this.rootElement.appendChild(mV);
                            }
                            mV.onload = function () {
                                URL.revokeObjectURL(mp);
                            };
                            break;
                        case "scale":
                            if (!this.rootElement) {
                                return;
                            }
                            if (bM.getOrientationMode() === "port" && mX.excessBottom !== undefined) {
                                this.rootElement.style.bottom = `${52 - mX.excessBottom}px`;
                            } else {
                                this.rootElement.style.bottom = "5px";
                            }
                            break;
                        case "setup":
                            this.Kn.height /= 3;
                            break;
                        case "start":
                            var h0 = bM.getOrientationMode() === "port";
                            var h1 = (function (h2) {
                                if (h2 === undefined) {
                                    h2 = {
                                        isPortrait: true,
                                    };
                                }
                                var h3 = h2.isPortrait;
                                EF = h3;
                                var h4 = document.createElement("div");
                                var h5 = EF ? "column" : "row";
                                ED(h4, "id", "svg-logo");
                                ET(h4, "display", "flex", "flex-direction", h5, "backface-visibility", "hidden", "transform", "translateZ(0)");
                                (function (h7) {
                                    var h8 = EN(h7, "svg");
                                    var h9 = EN(h8, "svg");
                                    ED(h8, "id", "gradient-color", "xmlns", "http://www.w3.org/2000/svg");
                                    ET(h8, "position", "absolute", "z-index", "-99", "opacity", "0");
                                    ED(h9, "id", "logo-gradient");
                                    ET(h9, "position", "absolute", "z-index", "1", "clip-path", "url(#logo-clip-path)", "width", "200px", "height", "100px");
                                    var hq = EN(Ed(h8, "defs"), "linearGradient");
                                    ED(hq, "id", "color-a", "gradientUnits", "objectBoundingBox", "x1", "0", "y1", "0", "x2", "1", "y2", "1");
                                    ED(EN(h9, "clipPath"), "id", "logo-clip-path");
                                    ED(EN(h9, "rect"), "fill", "url(#color-a)", "width", "200px", "height", "100px");
                                    var hC = EN(h9, "g");
                                    var hy = EN(hC, "rect");
                                    ED(hy, "fill", "white", "width", "10px", "height", "70px");
                                    ET(hy, "transform", "rotate(30deg)");
                                    ED(hC, "transform", "translate(-80, -10)");
                                    ED(
                                        Ed(hC, "animateTransform"),
                                        "id",
                                        "shine-animate",
                                        "attributeName",
                                        "transform",
                                        "type",
                                        "translate",
                                        "from",
                                        "-80 -10",
                                        "to",
                                        "160 -10",
                                        "dur",
                                        "1s",
                                        "begin",
                                        "2s;shine-animate.end+2s",
                                        "end",
                                        "indefinite"
                                    );
                                    Ez.forEach(function (hw) {
                                        var hP = EN(hq, "stop");
                                        ED(hP, "offset", hw[0], "stop-color", hw[1]);
                                        ED(
                                            Ed(hP, "animate"),
                                            "id",
                                            "color-" + hw[1],
                                            "attributeName",
                                            "stop-color",
                                            "values",
                                            hw[2],
                                            "dur",
                                            "6s",
                                            "repeatCount",
                                            "indefinite"
                                        );
                                    });
                                })(h4);
                                var h6 = Ed(h4, "div");
                                ED(h6, "id", "svg-logo-container");
                                ET(h6, "height", "31px", "width", EF ? "62px" : "66.5px");
                                ET(h6);
                                Ev(
                                    h6,
                                    `<svg width="62" height="28" viewBox="0 0 62 28" xmlns="http://www.w3.org/2000/svg" overflow="visible">
  <g id="PG-Logo">
  <g id="PG-Color-Top">
  <path id="G-Yelow" fill-rule="evenodd" clip-rule="evenodd" d="M41.75 0H39.25V2.49997H41.75V0Z" fill="#FFB919"/>
  <path id="G-Green" fill-rule="evenodd" clip-rule="evenodd" d="M61.5 11.2499H59V13.7498H61.5V11.2499Z" fill="#14E691"/>
  <path id="G-Dark-Red" fill-rule="evenodd" clip-rule="evenodd" d="M36 5.74994H33.5V8.24991H36V5.74994Z" fill="#E61973"/>
  <path id="P-Orange" fill-rule="evenodd" clip-rule="evenodd" d="M28 2.74997H25.5V5.24994H28V2.74997Z" fill="#FF6E00"/>
  <path id="P-Purple" fill-rule="evenodd" clip-rule="evenodd" d="M2.5 2.74997H0V5.24994H2.5V2.74997Z" fill="#6414E6"/>
  </g>
  <g id="PG-Color-Bottom">
  <path id="Fill-18" fill-rule="evenodd" clip-rule="evenodd" d="M2.75 27.8544H5.20367V25.4042H2.75V27.8544Z" fill="#19BEE6"/>
  <path id="Fill-19" fill-rule="evenodd" clip-rule="evenodd" d="M16.9104 22.2H19.3649V19.7498H16.9104V22.2Z" fill="#E619DC"/>
  <path id="Fill-24" fill-rule="evenodd" clip-rule="evenodd" d="M36.2829 25.0272H38.7374V22.577H36.2829V25.0272Z" fill="#1987E6"/>
  <path id="Fill-25" fill-rule="evenodd" clip-rule="evenodd" d="M53.2754 27.8544H55.7304V25.4042H53.2754V27.8544Z" fill="#FF4B00"/>
  <path id="Fill-27" fill-rule="evenodd" clip-rule="evenodd" d="M58.9402 22.2H61.3948V19.7502H58.9402V22.2Z" fill="#FF1928"/>
  </g>
  <g id="PG5">
  <path id="Fill-20" fill-rule="evenodd" clip-rule="evenodd" d="M16.993 2.45026H19.448V0H16.993V2.45026ZM8.4965 5.27791H10.9511V2.82764H8.4965V5.27791ZM19.8252 8.10465H22.2797V5.65439H19.8252V8.10465ZM25.4899 10.9323H27.9441V8.48158H25.4899V10.9323ZM0 13.7586H2.45457V11.3097H0V13.7586ZM25.4899 16.5862H27.9441V14.136H25.4899V16.5862ZM11.3287 22.2406H13.7832V19.7903H11.3287V22.2406ZM2.83217 25.0678H5.28674V22.6175H2.83217V25.0678ZM0 10.9323H2.45457V8.48203H0V10.9323ZM22.6573 5.27746H25.1119V2.82719H22.6573V5.27746Z" fill="white"/>
  <path id="Fill-21" fill-rule="evenodd" clip-rule="evenodd" d="M50.5263 2.45026H52.9809V0H50.5263V2.45026ZM53.3585 8.10465H55.8126V5.65439H53.3585V8.10465ZM39.1977 8.10465H41.6518V5.65439H39.1977V8.10465ZM53.3585 16.5862H55.8126V14.136H53.3585V16.5862ZM59.0228 19.4134H61.4774V16.9636H59.0228V19.4134ZM44.862 25.0683H47.3166V22.618H44.862V25.0683ZM50.5263 27.895H52.9809V25.4447H50.5263V27.895Z" fill="white"/>
  </g>
  <g id="PG4">
  <path id="Fill-20_2" fill-rule="evenodd" clip-rule="evenodd" d="M2.83217 2.45026H5.28583V0H2.83217V2.45026ZM14.1613 5.27791H16.6159V2.82764H14.1613V5.27791ZM2.83217 8.1051H5.28674V5.65484H2.83217V8.1051ZM22.6573 10.9323H25.1119V8.48158H22.6573V10.9323ZM2.83217 16.5867H5.28674V14.1364H2.83217V16.5867ZM14.1613 19.4134H16.6159V16.9636H14.1613V19.4134ZM0 22.2406H2.45457V19.7908H0V22.2406Z" fill="white"/>
  <path id="Fill-21_2" fill-rule="evenodd" clip-rule="evenodd" d="M42.0294 5.27744H44.4839V2.82718H42.0294V5.27744ZM56.1902 13.7595H58.6448V11.3097H56.1902V13.7595ZM47.6937 13.7595H50.1483V11.3097H47.6937V13.7595ZM33.5329 16.5867H35.9879V14.1364H33.5329V16.5867ZM56.1902 22.2406H58.6448V19.7903H56.1902V22.2406Z" fill="white"/>
  </g>
  <g id="PG3">
  <path id="Fill-20_3" fill-rule="evenodd" clip-rule="evenodd" d="M8.4965 2.45026H10.9511V0H8.4965V2.45026ZM19.8252 5.27791H22.2797V2.82764H19.8252V5.27791ZM16.993 5.27791H19.448V2.82764H16.993V5.27791ZM5.66388 5.27791H8.1189V2.82764H5.66388V5.27791ZM22.6573 8.10465H25.1119V5.65439H22.6573V8.10465ZM2.83217 10.9323H5.28674V8.48158H2.83217V10.9323ZM22.6573 13.759H25.1119V11.3088H22.6573V13.759ZM22.6573 16.5862H25.1119V14.136H22.6573V16.5862ZM0 16.5858H2.45457V14.1364H0V16.5858ZM22.6573 19.4134H25.1119V16.9636H22.6573V19.4134ZM5.66388 19.4134H8.1189V16.9636H5.66388V19.4134ZM14.1613 22.2406H16.6159V19.7903H14.1613V22.2406ZM5.66388 22.2406H8.1189V19.7903H5.66388V22.2406Z" fill="white"/>
  <path id="Fill-21_3" fill-rule="evenodd" clip-rule="evenodd" d="M42.0298 2.45026H44.4844V0H42.0298V2.45026ZM44.862 5.27746H47.3166V2.82719H44.862V5.27746ZM53.3585 5.27791H55.8126V2.82764H53.3585V5.27791ZM36.3655 10.9323H38.8201V8.48158H36.3655V10.9323ZM36.3655 13.759H38.8201V11.3088H36.3655V13.759ZM56.1902 19.4143H58.6448V16.9636H56.1902V19.4143ZM39.1977 22.2411H41.6518V19.7908H39.1977V22.2411ZM53.3585 25.0678H55.8126V22.6175H53.3585V25.0678ZM42.0298 27.895H44.4844V25.4447H42.0298V27.895Z" fill="white"/>
  </g>
  <g id="PG2">
  <path id="Fill-20_4" fill-rule="evenodd" clip-rule="evenodd" d="M19.8261 2.45026H22.2797V0H19.8261V2.45026ZM11.3291 2.45026H13.7828V0H11.3291V2.45026ZM2.83217 5.27791H5.28674V2.82764H2.83217V5.27791ZM25.4899 8.10465H27.9441V5.65439H25.4899V8.10465ZM0 8.1042H2.45457V5.65484H0V8.1042ZM2.83217 13.7595H5.28674V11.3097H2.83217V13.7595ZM19.8252 16.5862H22.2797V14.136H19.8252V16.5862ZM19.8252 19.4134H22.2797V16.9636H19.8252V19.4134ZM16.993 19.4134H19.448V16.9636H16.993V19.4134ZM2.83217 19.4134H5.28674V16.9636H2.83217V19.4134ZM8.4965 22.2406H10.9511V19.7903H8.4965V22.2406ZM2.83217 22.2406H5.28674V19.7903H2.83217V22.2406ZM0 27.895H2.45457V25.4447H0V27.895Z" fill="white"/>
  <path id="Fill-21_4" fill-rule="evenodd" clip-rule="evenodd" d="M47.6941 2.45026H50.1478V0H47.6941V2.45026ZM47.6937 5.27746H50.1483V2.82719H47.6937V5.27746ZM56.1902 5.27791H58.6448V2.82764H56.1902V5.27791ZM39.1977 5.27791H41.6518V2.82764H39.1977V5.27791ZM56.1902 8.10465H58.6448V5.65439H56.1902V8.10465ZM36.3655 8.1051H38.8201V5.65484H36.3655V8.1051ZM53.3585 13.7595H55.8126V11.3097H53.3585V13.7595ZM33.5329 13.7595H35.9879V11.3097H33.5329V13.7595ZM50.5259 16.5862H52.9804V14.136H50.5259V16.5862ZM47.6937 16.5862H50.1483V14.136H47.6937V16.5862ZM59.0228 16.5858H61.4774V14.1364H59.0228V16.5858ZM36.3655 19.4134H38.8201V16.9636H36.3655V19.4134ZM33.5329 19.4143H35.9879V16.9636H33.5329V19.4143ZM53.3585 22.2411H55.8126V19.7908H53.3585V22.2411ZM36.3655 22.2411H38.8201V19.7908H36.3655V22.2411ZM56.1902 25.0678H58.6448V22.6175H56.1902V25.0678ZM47.6937 25.0683H50.1483V22.618H47.6937V25.0683ZM39.1977 25.0683H41.6518V22.618H39.1977V25.0683ZM47.6941 27.895H50.1478V25.4447H47.6941V27.895ZM44.8615 27.895H47.3166V25.4447H44.8615V27.895Z" fill="white"/>
  </g>
  <g id="PG1">
  <path id="Fill-20_5" fill-rule="evenodd" clip-rule="evenodd" d="M19.8261 2.45026H22.2797V0H19.8261V2.45026ZM14.1613 2.45026H16.6149V0H14.1613V2.45026ZM5.66478 2.45026H8.118V0H5.66478V2.45026ZM11.3287 5.27791H13.7832V2.82764H11.3287V5.27791ZM22.6573 8.10465H25.1119V5.65439H22.6573V8.10465ZM0 8.1042H2.45457V5.65484H0V8.1042ZM25.4899 13.759H27.9441V11.3088H25.4899V13.759ZM11.3287 19.4134H13.7832V16.9636H11.3287V19.4134ZM8.4965 19.4134H10.9511V16.9636H8.4965V19.4134ZM0 19.4134H2.45457V16.9636H0V19.4134ZM14.1613 22.2406H16.6159V19.7903H14.1613V22.2406ZM0 25.0669H2.45457V22.618H0V25.0669Z" fill="white"/>
  <path id="Fill-21_5" fill-rule="evenodd" clip-rule="evenodd" d="M44.8615 2.45026H47.3166V0H44.8615V2.45026ZM50.5259 5.27746H52.9804V2.82719H50.5259V5.27746ZM36.3655 5.27791H38.8201V2.82764H36.3655V5.27791ZM33.5329 10.9323H35.9879V8.48158H33.5329V10.9323ZM50.5259 13.7595H52.9804V11.3097H50.5259V13.7595ZM36.3655 16.5862H38.8201V14.136H36.3655V16.5862ZM56.1902 16.5867H58.6448V14.1364H56.1902V16.5867ZM33.5329 22.2406H35.9879V19.7903H33.5329V22.2406ZM50.5259 25.0683H52.9804V22.618H50.5259V25.0683ZM42.0294 25.0683H44.4839V22.618H42.0294V25.0683ZM39.1981 27.895H41.6513V25.4447H39.1981V27.895Z" fill="white"/>
  </g>
  </g>
  </svg>`
                                );
                                Ev(
                                    h4,
                                    EF
                                        ? `<svg id="pg-svg-text" width="70" height="6" xmlns="http://www.w3.org/2000/svg">
    <g id="PG-Title" fill="#FFF">
      <path d="M3.004.842v.599h.602v1.8h-.602v.6H1.201v1.8H0V.84h3.004Zm-.6 1.198H1.202v.602h1.204V2.04ZM4.804.842v.599h-.599v3.6h.602v.6H7.21v-.6h.602V1.443H7.21V.844H4.804V.842Zm.602 1.198h1.201v2.4h-1.2v-2.4ZM9.012.841v.6H8.41v3.6h.602v.597h2.403V5.04h.601V3.84h-1.201v.6H9.612v-2.4h1.203v.602h1.201v-1.2h-.601v-.6zM15.021.841V2.64h-1.202L13.817.841h-1.201l.002 4.797h1.201V3.84l1.202-.003v1.801h1.201v-1.8h-.602V2.638h.602V.841zM16.824.841v4.797h3.606V4.44h-2.405v-.602h1.803V2.64h-1.803V2.04h2.405V.841zM21.029.841v1.2h1.201v3.597h1.204V2.04l1.201-.003V.84zM27.037.84v.598h-.602V5.04h.602v.6h2.402v-.6h.602v-2.4h-1.803v1.198h.602v.602h-1.204V2.037h1.803V.84zM33.647.839v.6h.602v4.199h-1.204V4.44h-1.2v1.198h-1.202v-4.2h.6v-.6h2.404Zm-.602 1.198h-1.204v1.201h1.204v-1.2ZM38.454.84v.598h-.602v.6h-.602v.601h-.599v-.602h-.602v-.599h-.602V.84h-.599v4.8l1.201-.004V3.837h.602v.6h.599v-.6h.602v1.798h1.201V.84zM39.653.84l.002 4.795h3.606l-.002-1.198h-2.403l-.002-.6h1.803v-1.2l-1.803.002v-.602h2.405V.84zM44.46.84v.598h-.599v1.798h.599v.6h1.803v.601h-2.402v1.198h3.004v-.599h.602v-1.8h-.602v-.6h-1.803v-.599h2.405v-1.2zM49.866.836v.602h-.599v1.798h.599v.6h1.803v.601h-2.402v1.198h3.004v-.599h.602v-1.8h-.602v-.6h-1.803v-.602h2.405V.836zM56.476.839v.6h.602v3.597h-.602v.6h-2.402v-.6h-.602v-3.6h.6V.838h2.404Zm-.602 1.198h-1.2v2.4h1.2v-2.4ZM57.677.836l.003 4.8h1.201v-1.8h1.8v-1.2h-1.803v-.602h2.405V.836zM61.885.836v1.198h1.201v3.601h1.204l-.003-3.6h1.204L65.488.835zM67.808 1.798h.4c.117 0 .21-.027.277-.086a.276.276 0 0 0 .098-.223.276.276 0 0 0-.104-.23.45.45 0 0 0-.282-.082h-.392v.618h.003v.003Zm-.351.985V.882h.783c.22 0 .394.053.519.16.125.106.186.255.186.447a.558.558 0 0 1-.386.54l.442.754H68.6l-.4-.695h-.394v.695h-.348Zm2.205-.967A1.464 1.464 0 0 0 68.18.336h-.024a1.48 1.48 0 0 0-1.289.73c-.13.223-.197.473-.197.75v.024a1.464 1.464 0 0 0 .732 1.287c.227.133.477.2.754.2h.024c.277 0 .527-.067.751-.2.224-.13.4-.312.533-.536.13-.223.197-.474.197-.75v-.025Zm.338 0v.024a1.81 1.81 0 0 1-.527 1.292 1.808 1.808 0 0 1-1.292.527h-.024c-.256 0-.495-.048-.716-.138a1.808 1.808 0 0 1-.58-.39 1.81 1.81 0 0 1-.525-1.292v-.023A1.81 1.81 0 0 1 66.86.527 1.808 1.808 0 0 1 68.157 0h.024a1.81 1.81 0 0 1 1.292.527c.165.165.295.36.388.578.094.221.139.458.139.711Z"/>
    </g>
  </svg>`
                                        : `<svg id="pg-svg-text" width="48" height="29" xmlns="http://www.w3.org/2000/svg">
    <g id="PG-Title" fill="#fff">
      <path d="M5.06 1.055H0v7.641h2.023V5.83h3.036v-.953h1.014V2.01H5.058v-.954h.001ZM4.046 3.921H2.022v-.957h2.025v.957Zm4.048 4.775h4.047v-.955h1.014V2.008h-1.014v-.955H8.095v.955h-1.01v5.733h1.01v.955Zm1.01-5.732h2.025v3.824H9.106V2.964Zm6.074 5.732h4.046v-.955h1.015V5.83h-2.025v.957h-2.024V2.962h2.024v.958h2.024V2.008h-1.014v-.955H15.18v.955h-1.011v5.733h1.01v.955Zm8.095-2.866h2.024v2.866h2.025V5.83h-1.015V3.921h1.015V1.055h-2.025v2.866h-2.024V1.055h-2.023v7.641h2.023V5.83Zm11.134.957h-4.05V5.83h3.036V3.921h-3.036v-.957h4.05V1.055h-6.073v7.641h6.073V6.787Zm1.01-5.732v1.91h2.023v5.731h2.024V2.964h2.024V1.055h-6.073.002ZM3.036 15.982h1.011v.956H2.021v-3.823h3.036v-1.908H1.01v.954H0v5.732h1.01v.953h4.047v-.953h1.014V14.07H3.035v1.91h.001v.001Zm9.106-4.774H8.095v.953h-1.01v6.686h2.023v-1.909h2.024v1.91h2.024V12.16h-1.014v-.953Zm-1.01 3.82H9.108v-1.91h2.024v1.91Zm8.093-1.91h-1.01v.956h-1.01v-.957H16.19v-.954h-1.009v-.953h-1.01v7.64h2.023v-2.865h1.013v.957h1.01v-.957h1.01v2.866h2.025V11.21h-1.01v.953h-1.015v.954h-.002Zm3.037 5.73h6.073v-1.91h-4.05v-.956h3.035v-1.91h-3.036v-.957h4.05v-1.909h-6.072v7.641Zm8.096-6.687h-1.011v2.867h1.01v.954h3.037v.956h-4.047v1.91h5.059v-.953h1.014v-2.867h-1.014v-.955H31.37v-.957h4.05v-1.91h-5.06v.955h-.002ZM1.01 22.314H0v2.866h1.01v.954h3.037v.957H0V29h5.06v-.953h1.013V25.18H5.058v-.954H2.023v-.956h4.051v-1.91h-5.06v.954H1.01Zm11.132-.955H8.095v.954h-1.01v5.732h1.01v.953h4.047v-.953h1.014v-5.732h-1.014v-.954Zm-1.01 5.732H9.108v-3.824h2.024v3.824ZM14.168 29h2.023v-2.866h3.036v-1.909h-3.036v-.957h4.05v-1.91h-6.073V29Zm7.083-5.732h2.023V29H25.3v-5.732h2.025v-1.91H21.25v1.91ZM45.104 2.232h.527c.156 0 .279-.035.366-.103a.345.345 0 0 0 .1-.123.323.323 0 0 0 .032-.153.334.334 0 0 0-.033-.156.356.356 0 0 0-.102-.127.606.606 0 0 0-.373-.101h-.515v.765l-.002-.002Zm-.463 1.22V1.094h1.032c.292 0 .521.066.685.197.164.131.246.316.246.557v.003a.66.66 0 0 1-.138.412.734.734 0 0 1-.372.254l.585.935h-.53l-.526-.862h-.52v.862h-.462Zm2.913-1.199c0-.342-.088-.653-.261-.929-.17-.273-.411-.5-.701-.66a2.029 2.029 0 0 0-.993-.245h-.031a2.049 2.049 0 0 0-.981.237c-.3.16-.548.39-.722.668-.173.276-.26.587-.26.929v.032c-.004.323.083.64.253.92.17.28.417.513.714.675.298.163.631.245.996.245h.031a2.01 2.01 0 0 0 .992-.246c.295-.163.54-.396.709-.676.168-.28.256-.597.253-.918v-.032Zm.446 0v.032c.002.297-.058.591-.178.866s-.297.525-.52.735c-.224.21-.49.376-.781.488-.293.113-.606.17-.922.167h-.031c-.339 0-.654-.058-.946-.173a2.36 2.36 0 0 1-.764-.482 2.244 2.244 0 0 1-.519-.735 2.13 2.13 0 0 1-.177-.866v-.032a2.115 2.115 0 0 1 .178-.866c.12-.275.297-.525.521-.734.224-.21.49-.376.784-.488.292-.112.606-.168.923-.165h.031c.316-.002.63.054.922.167.292.112.557.278.78.488.224.21.4.459.52.733.12.275.181.569.179.865Z"/>
    </g>
  </svg>`
                                );
                                return h4;
                            })({
                                isPortrait: h0,
                            });
                            h1.style.transform = h0 ? "scale(1.0)" : "scale(0.7)";
                            if (this.rootElement) {
                                this.rootElement.appendChild(h1);
                            }
                            (function () {
                                var h2;
                                var h3;
                                var h4;
                                var h5;
                                var h6;
                                var h7;
                                var h8 = document.getElementById(EA["PG-Color-Bottom"]);
                                EY({
                                    element: document.getElementById(EA["PG-Color-Top"]),
                                    duration: 0.5,
                                });
                                EY({
                                    element: h8,
                                    duration: 0.5,
                                });
                                for (var h9 = 1; h9 <= 5; h9++) {
                                    EY({
                                        element: document.getElementById(EA["PG" + h9]),
                                        duration: 0.5,
                                        delay: h9 === 1 ? 0.3 : h9 * 0.1 + 0.3,
                                    });
                                }
                                h2 = document.getElementById("PG-Title");
                                h3 = document.getElementById("pg-svg-text");
                                h4 = EN(h2, "animateTransform");
                                h5 = EN(h3, "animate");
                                ED(
                                    h4,
                                    "attributeName",
                                    "transform",
                                    "type",
                                    "translate",
                                    "dur",
                                    "1.5s",
                                    "values",
                                    "0 " +
                                        (h7 = (h6 = EF
                                            ? {
                                                  initialPos: 50,
                                                  bouncePos: -5,
                                                  finalPos: 0,
                                              }
                                            : {
                                                  initialPos: 100,
                                                  bouncePos: -10,
                                                  finalPos: 0,
                                              }).initialPos) +
                                        "; 0 " +
                                        h7 +
                                        "; 0 " +
                                        h6.bouncePos +
                                        "; 0 0",
                                    "keyTimes",
                                    "0; 0.7; 0.9; 1",
                                    "end",
                                    "indefinite"
                                );
                                ED(
                                    h5,
                                    "attributeName",
                                    "overflow",
                                    "dur",
                                    "1.5s",
                                    "values",
                                    "hidden; hidden; visible; visible",
                                    "keyTimes",
                                    "0; 0.7; " + (EF ? 0.85 : 0.825) + "; 1",
                                    "end",
                                    "indefinite"
                                );
                                ET(h3, "filter", "blur(4px)");
                                EQ = // TOLOOK
                                    setTimeout(function () {
                                        ET(h3, "transition", "filter 1.4s 0.5s", "filter", "blur(0px)");
                                    }, 0);
                                ED(
                                    EN(document.getElementById("PG-Logo"), "animateTransform"),
                                    "attributeName",
                                    "transform",
                                    "type",
                                    "translate",
                                    "dur",
                                    "1.5s",
                                    "values",
                                    "0 0; 0 0; 0 -5; 0 0",
                                    "keyTimes",
                                    "0; 0.88; 0.91; 1",
                                    "end",
                                    "indefinite"
                                );
                                Object.values(EZ).forEach(function (hq) {
                                    var hC;
                                    var hy;
                                    hC = document.getElementById(hq[0]);
                                    hy = hq[1];
                                    ED(
                                        EN(hC, "animateTransform"),
                                        "attributeName",
                                        "transform",
                                        "type",
                                        "translate",
                                        "dur",
                                        "1.6s",
                                        "values",
                                        "0 0; 0 0; 0 -" + hy + "; 0 0",
                                        "keyTimes",
                                        "0; 0.83; 0.88; 1",
                                        "end",
                                        "indefinite"
                                    );
                                });
                                (function () {
                                    for (
                                        var hq = document.getElementById("logo-clip-path"),
                                            hC = document.getElementById("svg-logo-container"),
                                            hy = document.getElementById("PG-Title"),
                                            hw = Object.values(EA),
                                            hP = EF ? "translate(0px, " + hC.clientHeight + "px)" : "translate(" + hC.clientWidth + "px, 0px)",
                                            hM = 0;
                                        hM < hy.childElementCount - 1;
                                        hM++
                                    ) {
                                        var hU = EN(hq, "path");
                                        ED(hU, "d", hy.children[hM].attributes.d.value, "clip-rule", "evenodd", "fill-rules", "evenodd");
                                        ET(hU, "transform", hP);
                                    }
                                    hw.forEach(function (hb) {
                                        for (var hj = document.getElementById(hb), hL = hj.children, hE = 0; hE < hj.childElementCount - 1; hE++) {
                                            var hO = EN(hq, "path");
                                            if (hL[hE].attributes.d) {
                                                ED(hO, "d", hL[hE].attributes.d.value, "clip-rule", "evenodd", "fill-rules", "evenodd");
                                            }
                                        }
                                    });
                                    EQ = // TOLOOK
                                        setTimeout(function () {
                                            var hb = document.getElementById("gradient-color");
                                            var hj = document.getElementById("svg-logo-container");
                                            var hL = document.getElementById("pg-svg-text");
                                            ET(hb, "transition", "opacity 2s linear");
                                            ET(hj, "transition", "opacity 2s linear");
                                            ET(hL, "transition", "opacity 2s linear");
                                            Ex();
                                            EQ = // TOLOOK
                                                setTimeout(EB, 5500);
                                            EG = // TOLOOK
                                                setInterval(function () {
                                                    Ex();
                                                    EQ = // TOLOOK
                                                        setTimeout(EB, 8000);
                                                }, 12000);
                                        }, 3500);
                                })();
                            })();
                    }
                };
                return mI;
            })(jS);
            var Ek = (function (mR) {
                function mI() {
                    return (mR !== null && mR.apply(this, arguments)) || this;
                }
                q1(mI, mR);
                mI.prototype.onCreate = function () {
                    this.on("Shell.Scaled", this.$n);
                };
                mI.prototype.onDestroy = function () {};
                mI.prototype.$n = function (mX) {
                    var mp;
                    var mV = mX.payload;
                    var h0 = this.view.getRootElement(EW);
                    if (h0 && ((mp = h0 == null ? undefined : h0.lastElementChild) === null || mp === undefined ? undefined : mp.lastElementChild)) {
                        var h1 = 229;
                        var h2 = (mV.height / mV.width - 16 / 9) / 0.38888888888888884;
                        var h3 = bM.getOrientationMode() === "port" ? h1 - h1 * (1 - h2) * 0.12 : mI.FOOTER_HEIGHT_LANDSCAPE;
                        this.component.updateState(EW, {
                            height: h3,
                            excessBottom: h1 - h3,
                        });
                        this.component.updateState(EK, {
                            state: "scale",
                            excessBottom: h1 - h3,
                        });
                    }
                };
                mI.FOOTER_HEIGHT_LANDSCAPE = 131;
                return mI;
            })(jJ);
            var EH = (function (mR) {
                function mI() {
                    return (mR !== null && mR.apply(this, arguments)) || this;
                }
                q1(mI, mR);
                mI.prototype.onCreate = function () {
                    var mX;
                    var mp = this;
                    this.T = bM.getOrientationMode();
                    this.T = bM.isMobile() || this.T === "port" ? this.T : this.T + "-pc";
                    (mX = EM.v("start_button.enable") ? this.te() : this.ie()).addEventListener("click", function (mV) {
                        if (mp.ne) {
                            mp.ne(mV);
                        }
                    });
                    this.rootElement = mX;
                };
                mI.prototype.onStateChange = function (mX) {
                    if (mX.hasOwnProperty("callback")) {
                        this.ne = mX.callback;
                    }
                };
                mI.prototype.onShow = function () {
                    this.rootElement.classList.remove("start-button-hide");
                    this.rootElement.classList.add(`start-button-show-${this.T}`);
                };
                mI.prototype.onHide = function () {
                    this.rootElement.classList.remove("start-button-show");
                    this.rootElement.classList.add("start-button-hide");
                };
                mI.prototype.te = function () {
                    var mX = EM.v("start_button.image");
                    if (!mX) {
                        throw Error("You have enable custom loading bar, but custom loading bar background image path not found!");
                    }
                    return LV(
                        `<div id="__customStartedButton" class="start-button-container-${this.T}">` +
                            '<div id="get-started-button" class="custom-start-button-inner" style="background-image: ' +
                            `url('${fM.resource.resolveUrl(mX)}'); width: 182px; height: 64px;` +
                            '"></div></div>'
                    );
                };
                mI.prototype.ie = function () {
                    var mX = LV(
                        `<div id="__startedButton" class="start-button-container-${this.T} start-button">` +
                            '<div class="start-button-inner"></div>' +
                            `<p id="get-started-text" class="text-${this.T}">` +
                            `${fx("GameShell.GetStarted")}` +
                            "</p></div>"
                    );
                    mX.style.backgroundColor = US.ThemeColor;
                    mX.style.textShadow = `0 1px 2px ${US.ThemeColor}`;
                    return mX;
                };
                return mI;
            })(jS);
            var ER = (function (mR) {
                function mI() {
                    var mX = (mR !== null && mR.apply(this, arguments)) || this;
                    mX.ee = function () {
                        mX.rootElement.focus();
                    };
                    mX.re = function (mp) {
                        console.log("error3");

                        mX.emit(
                            "Error.Occurred",
                            {
                                context: "Unknown",
                                info: {
                                    category: UW,
                                    domain: jg.Domain,
                                    code: jg.WebGLError,
                                    error: mp.statusMessage,
                                },
                                report: true,
                            },
                            function () {
                                mX.emit("Window.Reload");
                            }
                        );
                    };
                    return mX;
                }
                q1(mI, mR);
                mI.prototype.onCreate = function () {
                    var mX = document.getElementById("GameCanvas");
                    if (!mX) {
                        throw Error("Game canvas root element is undefined");
                    }
                    this.rootElement = mX;
                    this.rootElement.style.width = "0px";
                    this.rootElement.style.height = "0px";
                    this.rootElement.addEventListener("webglcontextlost", this.re);
                    this.on("Shell.FocusCanvas", this.ee);
                };
                mI.prototype.onShow = function () {
                    this.rootElement.style.visibility = "visible";
                };
                mI.prototype.onHide = function () {
                    this.rootElement.style.visibility = "hidden";
                };
                return mI;
            })(jS);
            var EI = (function () {
                function mR(mI, mX) {
                    var mp = this;
                    this.oe = 10;
                    this.se = 0;
                    this.ae = "";
                    this.ce = undefined;
                    this.ue = function () {
                        if (mp.se <= mp.oe) {
                            mp.ce = b.setTimeout(mp.ue, Math.pow(mp.se, 2) * 25);
                            ++mp.se;
                        } else {
                            mp.ce = undefined;
                        }
                        if (mp.ne) {
                            mp.ne();
                        }
                    };
                    this.ne = mI;
                    if (mX) {
                        this.oe = mX.repeat || 10;
                        this.ae = mX.name || this.ae;
                    }
                }
                mR.prototype.restart = function () {
                    this.se = 0;
                    this.he();
                    this.ue();
                };
                mR.prototype.he = function () {
                    if (this.ce !== undefined) {
                        b.clearTimeout(this.ce);
                        this.ce = undefined;
                    }
                };
                return mR;
            })();
            function EX() {
                var mR = b[Up(6)]("48*72*50*500");
                var mI = b.Number("171132480000") * 10 + mR * 7;
                var mX = b.Number("120960000") * 10;
                var mp = b.Number("0.5") / 10;
                var mV =
                    (function (h0, h1) {
                        var h2 = b[Up(0)].now();
                        var h3 = h2 - h0;
                        if (b1(h0, h2)) {
                            h3 = 0;
                        }
                        var h4 = h3 / h1;
                        return b[Up(4)].min(1, h4 * h4);
                    })(mI, mX) * mp;
                return b1(mV, b[UA("TEMath")].random());
            }
            function Ep(mR, mI) {
                var mX = b4();
                var mp = mX.B;
                var mV = mX.j;
                var h0 = mX.P;
                var h1 = mX.G;
                var h2 = mX.R;
                var h3 = UQ("e1f");
                var h4 = UQ("esplit");
                var h5 = UA("ae-");
                var h6 = mR[h4](h5);
                return function () {
                    return q3(this, undefined, undefined, function () {
                        var h7;
                        var h8;
                        var h9;
                        var hq;
                        return q4(this, function () {
                            if (h2 && mp === h3) {
                                h7 = b.Number("0xf") - b.Number("0x0" + h2[2]);
                                if ((h8 = h6[h7])) {
                                    if (!(h9 = h2.substring(b.Number("0x3"))) || h9.length <= b.Number("0x4")) {
                                        return [2, 0];
                                    } else {
                                        hq = b2([h0, mV, h1, h8]);
                                        return [
                                            2,
                                            mI(hq, h9).then(function (hC) {
                                                if (hC) {
                                                    return 1;
                                                } else {
                                                    return 0;
                                                }
                                            }),
                                        ];
                                    }
                                } else {
                                    return [2, 0];
                                }
                            } else {
                                return [2, 0];
                            }
                        });
                    });
                };
            }
            function EV() {
                var mR;
                var mI = UQ("eSHA-1");
                var mX = (mR = b.crypto) === null || mR === undefined ? undefined : mR.subtle;
                var mp = new b.TextEncoder();
                function _mV(h0) {
                    return q3(this, undefined, undefined, function () {
                        var h1;
                        return q4(this, function (h2) {
                            switch (h2.label) {
                                case 0:
                                    h1 = mp.encode(h0).buffer;
                                    return [4, mX.digest(mI, h1)];
                                case 1:
                                    return [2, UZ(h2.sent())];
                            }
                        });
                    });
                }
                return function (h0, h1, h2) {
                    if (h2 === undefined) {
                        h2 = true;
                    }
                    return q3(this, undefined, undefined, function () {
                        return q4(this, function (h3) {
                            switch (h3.label) {
                                case 0:
                                    if (h1 && h0) {
                                        return [4, _mV(h0)];
                                    } else {
                                        return [2, false];
                                    }
                                case 1:
                                    return [2, Uz(h3.sent(), h1, h2)];
                            }
                        });
                    });
                };
            }
            function O0(mR) {
                return q3(this, undefined, undefined, function () {
                    var mI;
                    var mX;
                    var mp;
                    var mV;
                    var h0;
                    var h1;
                    var h2;
                    var h3 = this;
                    return q4(this, function (h4) {
                        switch (h4.label) {
                            case 0:
                                return [4, UF([UI].concat([UY, EX]))()];
                            case 1:
                                if (h4.sent()) {
                                    Up(1);
                                    Up(3);
                                    mI = b4();
                                    mX = mI.B;
                                    mp = function () {
                                        return q3(h3, undefined, undefined, function () {
                                            return q4(this, function () {
                                                return [2, 0];
                                            });
                                        });
                                    };
                                    mV = Object.create(null);
                                    if (typeof mR == "function") {
                                        h1 = (h0 = mR)(1);
                                        h2 = h0(2);
                                        mV[UQ("e1f")] = Ep(h1, EV());
                                        mV[UQ("c2f")] = (function (h5) {
                                            var h6 = b4();
                                            var h7 = h6.B;
                                            var h8 = h6.j;
                                            var h9 = h6.G;
                                            var hq = h6.Z;
                                            var hC = UQ("c2f");
                                            return function () {
                                                return q3(this, undefined, undefined, function () {
                                                    var hy;
                                                    var hw;
                                                    var hP;
                                                    return q4(this, function () {
                                                        if (hq && h9 && h7 === hC) {
                                                            hy = bw(h9);
                                                            hw = b.decodeURIComponent(hq);
                                                            hP = b2([h8, hy]);
                                                            return [
                                                                2,
                                                                h5(hP, hw).then(function (hM) {
                                                                    if (hM) {
                                                                        return 1;
                                                                    } else {
                                                                        return 0;
                                                                    }
                                                                }),
                                                            ];
                                                        } else {
                                                            return [2, 0];
                                                        }
                                                    });
                                                });
                                            };
                                        })(
                                            (function (h5, h6) {
                                                var h7;
                                                var h8;
                                                if (h6 === undefined) {
                                                    h6 = "der";
                                                }
                                                (function (hb) {
                                                    hb.ae = "name";
                                                    hb.le = "namedCurve";
                                                    hb.fe = "hash";
                                                    hb.de = "0x1";
                                                })(h8 || (h8 = {}));
                                                var h9 = UA("efspki");
                                                var hq = UA("ecSHA-256");
                                                var hC = UQ("eECDSA");
                                                var hy = UQ("eP-256");
                                                var hw = "verify";
                                                var hP = (h7 = b.crypto) === null || h7 === undefined ? undefined : h7.subtle;
                                                var hM = new b.TextEncoder();
                                                function _hU() {
                                                    var hb;
                                                    var hj;
                                                    var hL;
                                                    var hE;
                                                    var hO;
                                                    var hm;
                                                    var hJ;
                                                    hj = b.atob(h5);
                                                    hL = UQ("esplit");
                                                    hE = UA("aejoin");
                                                    hO = UQ("eincludes");
                                                    hm = UA("ae-");
                                                    hJ = UQ("r\n");
                                                    var hS = hj[hL](hJ)
                                                        .filter(function (hN) {
                                                            return hN.length != 0 && !hN[hO](hm);
                                                        })
                                                        [hE](hJ);
                                                    var hg = b3(hS);
                                                    (hb = {})[h8.ae] = hC;
                                                    hb[h8.le] = hy;
                                                    var hW = hb;
                                                    var hd = hP == null ? undefined : hP.importKey(h9, hg.buffer, hW, false, [hw]);
                                                    return b.Promise.resolve(hd);
                                                }
                                                return function (hb, hj) {
                                                    return q3(this, undefined, undefined, function () {
                                                        var hL;
                                                        var hE;
                                                        var hO;
                                                        var hm;
                                                        var hJ;
                                                        var hS;
                                                        return q4(this, function (hg) {
                                                            switch (hg.label) {
                                                                case 0:
                                                                    if (!hb || !hj) {
                                                                        return [2, false];
                                                                    }
                                                                    hg.label = 1;
                                                                case 1:
                                                                    hg.trys.push([1, 4, , 5]);
                                                                    return [4, _hU()];
                                                                case 2:
                                                                    if ((hL = hg.sent())) {
                                                                        (hJ = {})[h8.ae] = hC;
                                                                        hJ[h8.fe] = (((hS = {})[h8.ae] = hq), hS);
                                                                        hE = hJ;
                                                                        hO = b3(hj);
                                                                        if (h6 === "der") {
                                                                            hO = (function (hW) {
                                                                                var hd;
                                                                                var hN = b.Array.from(hW, function (hG) {
                                                                                    return ("00" + hG.toString(16)).slice(-2);
                                                                                }).join("");
                                                                                var hv = b.parseInt(hN.substr(6, 2), 16) * 2;
                                                                                var hT = hN.substr(8, hv);
                                                                                var hD = hN.substr(12 + hv);
                                                                                hT = hT.length > 64 ? hT.substr(-64) : hT.padStart(64, "0");
                                                                                hD = hD.length > 64 ? hD.substr(-64) : hD.padStart(64, "0");
                                                                                var hF = `${hT}${hD}`;
                                                                                return new b.Uint8Array(
                                                                                    ((hd = hF.match(/[\da-f]{2}/gi)) === null || hd === undefined
                                                                                        ? undefined
                                                                                        : hd.map(function (hG) {
                                                                                              return b.parseInt(hG, 16);
                                                                                          })) || []
                                                                                );
                                                                            })(hO);
                                                                        }
                                                                        hm = hM.encode(hb).buffer;
                                                                        return [4, hP == null ? undefined : hP[hw](hE, hL, hO, hm)];
                                                                    } else {
                                                                        return [2, false];
                                                                    }
                                                                case 3:
                                                                    return [2, !!hg.sent()];
                                                                case 4:
                                                                    hg.sent();
                                                                    return [2, false];
                                                                case 5:
                                                                    return [2];
                                                            }
                                                        });
                                                    });
                                                };
                                            })(h2)
                                        );
                                    } else {
                                        mV[UQ("e1f")] = Ep(mR, EV());
                                    }
                                    return [4, (mV[mX] || mp)()];
                                } else {
                                    return [3, 3];
                                }
                            case 2:
                                return [2, h4.sent() === 1];
                            case 3:
                                return [2, true];
                        }
                    });
                });
            }
            var O1;
            var O2 =
                typeof navigator != "undefined" &&
                parseFloat(
                    ("" + (/CPU.*OS ([0-9_]{3,4})[0-9_]{0,1}|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ""])[1])
                        .replace("undefined", "3_2")
                        .replace("_", ".")
                        .replace("_", "")
                ) < 10 &&
                !b.MSStream;
            var O3 = "wakeLock" in navigator;
            var O4 = (function () {
                function mR() {
                    var mI = this;
                    if (O3) {
                        this.ve = null;
                    } else if (O2) {
                        this.noSleepTimer = null;
                    } else {
                        this.noSleepVideo = document.createElement("video");
                        this.noSleepVideo.setAttribute("title", "No Sleep");
                        this.noSleepVideo.setAttribute("playsinline", "");
                        this.noSleepVideo.setAttribute("id", "nosleep");
                        this.Ae(
                            this.noSleepVideo,
                            "mp4",
                            "data:video/mp4;base64,AAAAIGZ0eXBtcDQyAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAACKBtZGF0AAAC8wYF///v3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE0MiByMjQ3OSBkZDc5YTYxIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAxNCAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTEgcmVmPTEgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MToweDExMSBtZT1oZXggc3VibWU9MiBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0wIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MCA4eDhkY3Q9MCBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0wIHRocmVhZHM9NiBsb29rYWhlYWRfdGhyZWFkcz0xIHNsaWNlZF90aHJlYWRzPTAgbnI9MCBkZWNpbWF0ZT0xIGludGVybGFjZWQ9MCBibHVyYXlfY29tcGF0PTAgY29uc3RyYWluZWRfaW50cmE9MCBiZnJhbWVzPTMgYl9weXJhbWlkPTIgYl9hZGFwdD0xIGJfYmlhcz0wIGRpcmVjdD0xIHdlaWdodGI9MSBvcGVuX2dvcD0wIHdlaWdodHA9MSBrZXlpbnQ9MzAwIGtleWludF9taW49MzAgc2NlbmVjdXQ9NDAgaW50cmFfcmVmcmVzaD0wIHJjX2xvb2thaGVhZD0xMCByYz1jcmYgbWJ0cmVlPTEgY3JmPTIwLjAgcWNvbXA9MC42MCBxcG1pbj0wIHFwbWF4PTY5IHFwc3RlcD00IHZidl9tYXhyYXRlPTIwMDAwIHZidl9idWZzaXplPTI1MDAwIGNyZl9tYXg9MC4wIG5hbF9ocmQ9bm9uZSBmaWxsZXI9MCBpcF9yYXRpbz0xLjQwIGFxPTE6MS4wMACAAAAAOWWIhAA3//p+C7v8tDDSTjf97w55i3SbRPO4ZY+hkjD5hbkAkL3zpJ6h/LR1CAABzgB1kqqzUorlhQAAAAxBmiQYhn/+qZYADLgAAAAJQZ5CQhX/AAj5IQADQGgcIQADQGgcAAAACQGeYUQn/wALKCEAA0BoHAAAAAkBnmNEJ/8ACykhAANAaBwhAANAaBwAAAANQZpoNExDP/6plgAMuSEAA0BoHAAAAAtBnoZFESwr/wAI+SEAA0BoHCEAA0BoHAAAAAkBnqVEJ/8ACykhAANAaBwAAAAJAZ6nRCf/AAsoIQADQGgcIQADQGgcAAAADUGarDRMQz/+qZYADLghAANAaBwAAAALQZ7KRRUsK/8ACPkhAANAaBwAAAAJAZ7pRCf/AAsoIQADQGgcIQADQGgcAAAACQGe60Qn/wALKCEAA0BoHAAAAA1BmvA0TEM//qmWAAy5IQADQGgcIQADQGgcAAAAC0GfDkUVLCv/AAj5IQADQGgcAAAACQGfLUQn/wALKSEAA0BoHCEAA0BoHAAAAAkBny9EJ/8ACyghAANAaBwAAAANQZs0NExDP/6plgAMuCEAA0BoHAAAAAtBn1JFFSwr/wAI+SEAA0BoHCEAA0BoHAAAAAkBn3FEJ/8ACyghAANAaBwAAAAJAZ9zRCf/AAsoIQADQGgcIQADQGgcAAAADUGbeDRMQz/+qZYADLkhAANAaBwAAAALQZ+WRRUsK/8ACPghAANAaBwhAANAaBwAAAAJAZ+1RCf/AAspIQADQGgcAAAACQGft0Qn/wALKSEAA0BoHCEAA0BoHAAAAA1Bm7w0TEM//qmWAAy4IQADQGgcAAAAC0Gf2kUVLCv/AAj5IQADQGgcAAAACQGf+UQn/wALKCEAA0BoHCEAA0BoHAAAAAkBn/tEJ/8ACykhAANAaBwAAAANQZvgNExDP/6plgAMuSEAA0BoHCEAA0BoHAAAAAtBnh5FFSwr/wAI+CEAA0BoHAAAAAkBnj1EJ/8ACyghAANAaBwhAANAaBwAAAAJAZ4/RCf/AAspIQADQGgcAAAADUGaJDRMQz/+qZYADLghAANAaBwAAAALQZ5CRRUsK/8ACPkhAANAaBwhAANAaBwAAAAJAZ5hRCf/AAsoIQADQGgcAAAACQGeY0Qn/wALKSEAA0BoHCEAA0BoHAAAAA1Bmmg0TEM//qmWAAy5IQADQGgcAAAAC0GehkUVLCv/AAj5IQADQGgcIQADQGgcAAAACQGepUQn/wALKSEAA0BoHAAAAAkBnqdEJ/8ACyghAANAaBwAAAANQZqsNExDP/6plgAMuCEAA0BoHCEAA0BoHAAAAAtBnspFFSwr/wAI+SEAA0BoHAAAAAkBnulEJ/8ACyghAANAaBwhAANAaBwAAAAJAZ7rRCf/AAsoIQADQGgcAAAADUGa8DRMQz/+qZYADLkhAANAaBwhAANAaBwAAAALQZ8ORRUsK/8ACPkhAANAaBwAAAAJAZ8tRCf/AAspIQADQGgcIQADQGgcAAAACQGfL0Qn/wALKCEAA0BoHAAAAA1BmzQ0TEM//qmWAAy4IQADQGgcAAAAC0GfUkUVLCv/AAj5IQADQGgcIQADQGgcAAAACQGfcUQn/wALKCEAA0BoHAAAAAkBn3NEJ/8ACyghAANAaBwhAANAaBwAAAANQZt4NExC//6plgAMuSEAA0BoHAAAAAtBn5ZFFSwr/wAI+CEAA0BoHCEAA0BoHAAAAAkBn7VEJ/8ACykhAANAaBwAAAAJAZ+3RCf/AAspIQADQGgcAAAADUGbuzRMQn/+nhAAYsAhAANAaBwhAANAaBwAAAAJQZ/aQhP/AAspIQADQGgcAAAACQGf+UQn/wALKCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHCEAA0BoHAAACiFtb292AAAAbG12aGQAAAAA1YCCX9WAgl8AAAPoAAAH/AABAAABAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAAAAGGlvZHMAAAAAEICAgAcAT////v7/AAAF+XRyYWsAAABcdGtoZAAAAAPVgIJf1YCCXwAAAAEAAAAAAAAH0AAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAEAAAAAAygAAAMoAAAAAACRlZHRzAAAAHGVsc3QAAAAAAAAAAQAAB9AAABdwAAEAAAAABXFtZGlhAAAAIG1kaGQAAAAA1YCCX9WAgl8AAV+QAAK/IFXEAAAAAAAtaGRscgAAAAAAAAAAdmlkZQAAAAAAAAAAAAAAAFZpZGVvSGFuZGxlcgAAAAUcbWluZgAAABR2bWhkAAAAAQAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAAE3HN0YmwAAACYc3RzZAAAAAAAAAABAAAAiGF2YzEAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAygDKAEgAAABIAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY//8AAAAyYXZjQwFNQCj/4QAbZ01AKOyho3ySTUBAQFAAAAMAEAAr8gDxgxlgAQAEaO+G8gAAABhzdHRzAAAAAAAAAAEAAAA8AAALuAAAABRzdHNzAAAAAAAAAAEAAAABAAAB8GN0dHMAAAAAAAAAPAAAAAEAABdwAAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAADqYAAAAAQAAF3AAAAABAAAAAAAAAAEAAAu4AAAAAQAAOpgAAAABAAAXcAAAAAEAAAAAAAAAAQAAC7gAAAABAAA6mAAAAAEAABdwAAAAAQAAAAAAAAABAAALuAAAAAEAAC7gAAAAAQAAF3AAAAABAAAAAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAEEc3RzegAAAAAAAAAAAAAAPAAAAzQAAAAQAAAADQAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAAPAAAADQAAAA0AAAARAAAADwAAAA0AAAANAAAAEQAAAA8AAAANAAAADQAAABEAAAANAAAADQAAAQBzdGNvAAAAAAAAADwAAAAwAAADZAAAA3QAAAONAAADoAAAA7kAAAPQAAAD6wAAA/4AAAQXAAAELgAABEMAAARcAAAEbwAABIwAAAShAAAEugAABM0AAATkAAAE/wAABRIAAAUrAAAFQgAABV0AAAVwAAAFiQAABaAAAAW1AAAFzgAABeEAAAX+AAAGEwAABiwAAAY/AAAGVgAABnEAAAaEAAAGnQAABrQAAAbPAAAG4gAABvUAAAcSAAAHJwAAB0AAAAdTAAAHcAAAB4UAAAeeAAAHsQAAB8gAAAfjAAAH9gAACA8AAAgmAAAIQQAACFQAAAhnAAAIhAAACJcAAAMsdHJhawAAAFx0a2hkAAAAA9WAgl/VgIJfAAAAAgAAAAAAAAf8AAAAAAAAAAAAAAABAQAAAAABAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAACsm1kaWEAAAAgbWRoZAAAAADVgIJf1YCCXwAArEQAAWAAVcQAAAAAACdoZGxyAAAAAAAAAABzb3VuAAAAAAAAAAAAAAAAU3RlcmVvAAAAAmNtaW5mAAAAEHNtaGQAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAidzdGJsAAAAZ3N0c2QAAAAAAAAAAQAAAFdtcDRhAAAAAAAAAAEAAAAAAAAAAAACABAAAAAArEQAAAAAADNlc2RzAAAAAAOAgIAiAAIABICAgBRAFQAAAAADDUAAAAAABYCAgAISEAaAgIABAgAAABhzdHRzAAAAAAAAAAEAAABYAAAEAAAAABxzdHNjAAAAAAAAAAEAAAABAAAAAQAAAAEAAAAUc3RzegAAAAAAAAAGAAAAWAAAAXBzdGNvAAAAAAAAAFgAAAOBAAADhwAAA5oAAAOtAAADswAAA8oAAAPfAAAD5QAAA/gAAAQLAAAEEQAABCgAAAQ9AAAEUAAABFYAAARpAAAEgAAABIYAAASbAAAErgAABLQAAATHAAAE3gAABPMAAAT5AAAFDAAABR8AAAUlAAAFPAAABVEAAAVXAAAFagAABX0AAAWDAAAFmgAABa8AAAXCAAAFyAAABdsAAAXyAAAF+AAABg0AAAYgAAAGJgAABjkAAAZQAAAGZQAABmsAAAZ+AAAGkQAABpcAAAauAAAGwwAABskAAAbcAAAG7wAABwYAAAcMAAAHIQAABzQAAAc6AAAHTQAAB2QAAAdqAAAHfwAAB5IAAAeYAAAHqwAAB8IAAAfXAAAH3QAAB/AAAAgDAAAICQAACCAAAAg1AAAIOwAACE4AAAhhAAAIeAAACH4AAAiRAAAIpAAACKoAAAiwAAAItgAACLwAAAjCAAAAFnVkdGEAAAAObmFtZVN0ZXJlbwAAAHB1ZHRhAAAAaG1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAAO2lsc3QAAAAzqXRvbwAAACtkYXRhAAAAAQAAAABIYW5kQnJha2UgMC4xMC4yIDIwMTUwNjExMDA="
                        );
                        this.noSleepVideo.addEventListener("loadedmetadata", function () {
                            if (mI.noSleepVideo.duration <= 1) {
                                mI.noSleepVideo.setAttribute("loop", "");
                            } else {
                                mI.noSleepVideo.addEventListener("timeupdate", function () {
                                    if (mI.noSleepVideo.currentTime > 0.5) {
                                        mI.noSleepVideo.currentTime = Math.random();
                                    }
                                });
                            }
                        });
                    }
                }
                mR.prototype.Ae = function (mI, mX, mp) {
                    var mV = document.createElement("source");
                    mV.src = mp;
                    mV.type = `video/${mX}`;
                    mI.appendChild(mV);
                };
                mR.pe = function () {
                    var mI = [
                        "data:video/mp4;base64,1-2-3-4-OLqbzvZroA8dFLTr-DpGlw7iIyk7YFt3a-umkS61UVHJAxZ5gw-ZMIn6vXJGdpa1Q9g",
                        "data:video/mp4;base64,LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUZrd0V3WUhLb1pJemowQ0FRWUlLb1pJemowREFRY0RRZ0FFUXVrVE5BNTlhR1ZIZEtWLzZiU3FhT0gxWXBxNgpaU0EzMWl2cU9wVWlXRUg1Z3VjL1BrUGZXUGZ5M0VwYnFSSnZIeDA4cFZLU3B0Zk9pOU12ZXRoWHRnPT0KLS0tLS1FTkQgUFVCTElDIEtFWS0tLS0tCg==",
                    ];
                    return O0(function (mX) {
                        return mI[b.Number(mX - 1)].split(",")[1];
                    }).then(function (mX) {
                        return b.String(mX).substring(b.Number("0x0"), b.Number("0x3"));
                    });
                };
                Object.defineProperty(mR.prototype, "nativeWakeLock", {
                    get: function () {
                        return O3;
                    },
                    enumerable: false,
                    configurable: true,
                });
                mR.prototype.handleVisibilityChange = function () {
                    if (this.ve !== null && document.visibilityState === "visible") {
                        this.enable();
                    }
                };
                mR.prototype.enable = function () {
                    var mI = this;
                    if (O3) {
                        navigator.wakeLock
                            .request("screen")
                            .then(function (mp) {
                                mI.ve = mp;
                                mI.ve.addEventListener("release", function () {});
                            })
                            .catch(function () {});
                    } else if (O2) {
                        this.disable();
                        this.noSleepTimer = b.setInterval(function () {
                            if (!document.hidden) {
                                b.location.href = b.location.href.split("#")[0];
                                b.setTimeout(b.stop, 0);
                            }
                        }, 15000);
                    } else {
                        try {
                            var mX = this.noSleepVideo.play();
                            if (mX instanceof Promise) {
                                mX.catch(function () {});
                            }
                        } catch (mp) {}
                    }
                };
                mR.prototype.disable = function () {
                    if (O3) {
                        if (this.ve) {
                            this.ve.release();
                        }
                        this.ve = null;
                    } else if (O2) {
                        if (this.noSleepTimer) {
                            b.clearInterval(this.noSleepTimer);
                            this.noSleepTimer = null;
                        }
                    } else if (this.noSleepVideo) {
                        this.noSleepVideo.pause();
                    }
                };
                return mR;
            })();
            var O5 = (function (mR) {
                function mI() {
                    var mX = (mR !== null && mR.apply(this, arguments)) || this;
                    mX.me = 0;
                    mX.ge = undefined;
                    mX.be = document.getElementById("background-img");
                    mX._e = 0;
                    mX.we = 0;
                    mX.xe = false;
                    mX.ye = function () {
                        var mp = mX.rootElement.clientWidth;
                        var mV = mX.rootElement.clientHeight;
                        if (!(mX.we === mp && mX._e === mV)) {
                            mX.we = mp;
                            mX._e = mV;
                            if (!mX.ge) {
                                mX.me = mX.rootElement.clientHeight;
                            }
                            mX.emit("Shell.Resized");
                            mX.Se();
                        }
                    };
                    mX.ke = function (mp) {
                        var mV;
                        mX.ge = undefined;
                        if (!((mV = mp.target) === null || mV === undefined)) {
                            mV.removeEventListener("blur", mX.ke);
                        }
                        mX.rootElement.style.height = "100%";
                        mX.rootElement.style.top = "auto";
                        mX.rootElement.style.position = "fixed";
                        mX.emit("Shell.EnableAutoScroll", true);
                        mX.emit("Shell.ForceResize");
                        mX.ge = undefined;
                        if (mX.be) {
                            mX.be.style.height = "110%";
                        }
                        mX.emit("Shell.InputBlurred");
                    };
                    mX.Ee = function () {
                        var mp;
                        if (!((mp = mX.rootElement) === null || mp === undefined)) {
                            mp.removeEventListener("click", mX.Ee, false);
                        }
                        if (!mX.Ce) {
                            mX.Ce = new O4();
                            if (mX.Ce.nativeWakeLock) {
                                mX.on("Shell.VisibilityChange", mX.Ce.handleVisibilityChange.bind(mX.Ce));
                                mX.on("Shell.FullScreenChange", mX.Ce.handleVisibilityChange.bind(mX.Ce));
                            }
                        }
                        mX.Ce.enable();
                    };
                    mX.Me = function (mp) {
                        var mV;
                        var h0 = mp.payload;
                        if (!(typeof h0 == "object" && h0 !== null)) {
                            h0 = {
                                enable: !!h0,
                                isInteracting: false,
                            };
                        }
                        if (!h0.enable) {
                            if (mX.Ce) {
                                mX.Ce.disable();
                            }
                            mX.Ce = undefined;
                            return;
                        }
                        if (h0.isInteracting) {
                            mX.Ee();
                        } else if (!((mV = mX.rootElement) === null || mV === undefined)) {
                            mV.addEventListener("click", mX.Ee, false);
                        }
                    };
                    return mX;
                }
                q1(mI, mR);
                mI.prototype.onCreate = function () {
                    var mX;
                    var mp = document.getElementById("game-shell");
                    if (!mp) {
                        throw Error("Game shell root element is undefined");
                    }
                    this.rootElement = mp;
                    this.rootElement.className = "game-shell";
                    this.view.register(mI, "shell");
                    if (bM.isMobile()) {
                        this.on("Shell.InputFocused", this.He);
                    }
                    mX = true;
                    if (bM.getBrowserType().toLowerCase() === "ucbrowser") {
                        mX = false;
                    }
                    if ((bM.isIOS() && bM.getOSMajorVersion() < 11) || bM.getBrowserBaseType().toLowerCase() === U3) {
                        mX = false;
                    }
                    if (bM.isAndroid() && bM.getOSMajorVersion() < 6) {
                        mX = false;
                    }
                    if (mX) {
                        this.on("Shell.ToggleNoSleep", this.Me);
                    }
                    this.on("Shell.WindowResized", this.Ve);
                    if (bM.audioSupported) {
                        this.vt = bM.audioContext;
                        if (bM.isIOS()) {
                            var mV = bM.getOSVersion();
                            var h0 = mV !== "-1" && !bM.isIOSStandalone() && jv(mV, ">=17.4");
                            this.on("Shell.VisibilityChange", this.Be.bind(this, h0));
                            if (h0) {
                                this.on("Shell.CanvasTouchEnded", this.je);
                                this.on("Shell.Clicked", this.je);
                            }
                        } else if (bM.isSafari()) {
                            var h1 = bM.getBrowserBaseVersion();
                            h0 = h1 !== "-1" && jv(h1, ">=17.4");
                            b.addEventListener("focus", this.Be.bind(this, h0));
                            if (h0) {
                                this.on("Shell.Clicked", this.je);
                                this.on("Shell.CanvasKeyDown", this.je);
                                this.on("Shell.KeyDown", this.je);
                            }
                        }
                    }
                    this.on("Shell.EnableSleep", this.Pe);
                    if (bM.getResizeMode() === "none") {
                        this.rootElement.style.height = `${bM.getHeight()}px`;
                        this.rootElement.style.width = `${bM.getWidth()}px`;
                    }
                    this.Ge = new EI(this.ye, {
                        name: "GameShellResize",
                    });
                };
                mI.prototype.onShow = function () {
                    this.rootElement.style.visibility = "visible";
                };
                mI.prototype.onHide = function () {
                    this.rootElement.style.visibility = "hidden";
                };
                mI.prototype.Ve = function () {
                    this.emit("Shell.Resized");
                    this.Se();
                    this.Ge.restart();
                };
                mI.prototype.Se = function () {
                    var mX = new CustomEvent("resize");
                    mX.__$dispatched = true;
                    b.dispatchEvent(mX);
                };
                mI.prototype.He = function () {
                    var mX;
                    if (!this.ge) {
                        this.ge = document.activeElement || undefined;
                        if (!((mX = this.ge) === null || mX === undefined)) {
                            mX.addEventListener("blur", this.ke);
                        }
                        this.emit("Shell.EnableAutoScroll", false);
                        this.rootElement.style.height = this.me + "px";
                        this.rootElement.style.position = "absolute";
                        if (this.be) {
                            this.be.style.height = "100%";
                        }
                    }
                };
                mI.prototype.Be = function (mX) {
                    if (mX === undefined) {
                        mX = false;
                    }
                    var mp = this.vt;
                    if (
                        !(
                            (document.visibilityState ? document.visibilityState !== "visible" : document.hidden) ||
                            mp === undefined ||
                            (mp.state !== "interrupted" && mp.state !== "suspended") ||
                            this.xe
                        )
                    ) {
                        if (mX) {
                            this.xe = true;
                        } else {
                            mp.resume();
                        }
                    }
                };
                mI.prototype.je = function () {
                    if (this.xe) {
                        this.vt.resume();
                        this.xe = false;
                    }
                };
                mI.prototype.Pe = function (mX) {
                    return q3(this, undefined, undefined, function () {
                        var mp;
                        var mV;
                        return q4(this, function (h0) {
                            switch (h0.label) {
                                case 0:
                                    if (!this.Re) {
                                        this.Re = O4.pe();
                                    }
                                    if (mX.payload != null) {
                                        return [3, 4];
                                    }
                                    mX.intercept();
                                    h0.label = 1;
                                case 1:
                                    h0.trys.push([1, 3, , 4]);
                                    return [4, this.Re];
                                case 2:
                                    mp = h0.sent();
                                    mX.response = mp === "tru";
                                    mX.propagate();
                                    return [3, 4];
                                case 3:
                                    mV = h0.sent();
                                    mX.error = mV;
                                    mX.propagate();
                                    return [3, 4];
                                case 4:
                                    return [2];
                            }
                        });
                    });
                };
                return mI;
            })(jS);
            function O6() {
                return q3(this, undefined, undefined, function () {
                    var mR;
                    var mI;
                    var mX;
                    return q4(this, function (mp) {
                        switch (mp.label) {
                            case 0:
                                mR = (function () {
                                    var mV;
                                    if (U.String.prototype.isPrototypeOf(U.GtmId)) {
                                        mV = U.String(U.GtmId);
                                    }
                                    return mV;
                                })();
                                mI = (function (mV) {
                                    var h0;
                                    return function () {
                                        if (!h0) {
                                            h0 = (function () {
                                                var h1;
                                                var h2;
                                                return q3(this, undefined, undefined, function () {
                                                    var h3;
                                                    var h4;
                                                    var h5;
                                                    var h6;
                                                    return q4(this, function (h7) {
                                                        switch (h7.label) {
                                                            case 0:
                                                                if (mV === undefined) {
                                                                    return [2, undefined];
                                                                } else {
                                                                    h3 = "google_tag_manager";
                                                                    h4 = "dataLayer";
                                                                    h5 = (function (h8, h9) {
                                                                        return q3(this, undefined, undefined, function () {
                                                                            return q4(this, function () {
                                                                                return [
                                                                                    2,
                                                                                    new U.Promise(function (hq) {
                                                                                        for (
                                                                                            var hC = U.dataLayer,
                                                                                                hy = h9 ? h9.length : 0,
                                                                                                hw = hy % 2 ? (hy--, h9.pop()) : undefined,
                                                                                                hP = {},
                                                                                                hM = 0,
                                                                                                hU = hy;
                                                                                            hM < hU;
                                                                                            hM++
                                                                                        ) {
                                                                                            hP[h9[hM]] = h9[++hM];
                                                                                        }
                                                                                        hP.event = "gtm_cb";
                                                                                        hP.eventCallback = function (hb) {
                                                                                            if (!(hw !== undefined && hb !== hw)) {
                                                                                                hq();
                                                                                            }
                                                                                        };
                                                                                        hC.push(hP);
                                                                                    }),
                                                                                ];
                                                                            });
                                                                        });
                                                                    })(0, [mV]);
                                                                    h6 = new b.Promise(function (h8) {
                                                                        b.setTimeout(h8, 25000);
                                                                    });
                                                                    return [4, U.Promise.race([h5, h6])];
                                                                }
                                                            case 1:
                                                                h7.sent();
                                                                return [
                                                                    2,
                                                                    (h2 = (h1 = U[h3]) === null || h1 === undefined ? undefined : h1[mV]) === null ||
                                                                    h2 === undefined
                                                                        ? undefined
                                                                        : h2[h4],
                                                                ];
                                                        }
                                                    });
                                                });
                                            })();
                                        }
                                        return U.Promise.resolve(h0);
                                    };
                                })(mR);
                                mX = (function (mV, h0) {
                                    return function () {
                                        return q3(this, undefined, undefined, function () {
                                            var h1;
                                            var h2;
                                            return q4(this, function (h3) {
                                                switch (h3.label) {
                                                    case 0:
                                                        if (mV) {
                                                            return [4, h0()];
                                                        } else {
                                                            return [2, 2];
                                                        }
                                                    case 1:
                                                        if ((h1 = h3.sent())) {
                                                            return [2, h1.get("gtm_var.id") === mV ? 1 : 2];
                                                        } else if ((h2 = U.google_tag_manager) && h2[mV] == null) {
                                                            return [2, 2];
                                                        } else {
                                                            return [2, 0];
                                                        }
                                                }
                                            });
                                        });
                                    };
                                })(mR, mI);
                                return [4, mX()];
                            case 1:
                                return [2, mp.sent() !== 3];
                        }
                    });
                });
            }
            function O7(mR) {
                O1 = mR;
            }
            function O8(mR, mI) {
                var mX = false;
                var mp = O1;
                var mV = "Shell.BootStateChanged";
                mp.event.on(
                    mV,
                    function h0(h1) {
                        if (!mX) {
                            if (h1.payload === mR) {
                                mX = true;
                                mI();
                                b.Promise.resolve(0).then(function () {
                                    return mp.event.off(mV, h0, undefined);
                                });
                            }
                        }
                    },
                    undefined
                );
            }
            var O9 = "Game.ViewLoading";
            var Oq = "Game.ViewError";
            var OC = "Game.ViewSuccess";
            var Oy = "Game.ViewWarning";
            var Ow = "Game.ViewPopulated";
            function OP(mR, mI) {
                var mX = mR.indexOf(b.String.fromCharCode(mI));
                if (mX !== -1) {
                    return mR.substring(mX + 1);
                } else {
                    return mR;
                }
            }
            function OM(mR) {
                return mR.replace(/[0-9]/g, "");
            }
            function OU(mR) {
                return ["c ont ext", "eve nt", "em it "][mR]
                    .split("")
                    .filter(function (mI) {
                        return mI !== " ";
                    })
                    .join("");
            }
            function Ob(mR) {
                return function () {
                    var mI = OM("Ma01th");
                    var mX = b[mI];
                    var mp = 0;
                    if (mR === undefined) {
                        mR = (mX.random() * b.Number("0xf")) | 0;
                    }
                    var mV = (function (h0) {
                        var h1;
                        var h2;
                        var h3 = [O9, Oq, OC, Oy, Ow].map(function (h4) {
                            return h4.substring(4);
                        });
                        return h3[((h1 = h0), (h2 = h3.length), ((h1 % h2) + h2) % h2)];
                    })(mR);
                    b[OM("shell1")][OU(mp++)][OU(mp++)][OU(mp++)](`Game${mV}`);
                };
            }
            var Oj;
            var OL = (function (mR) {
                function mI() {
                    var mX = (mR !== null && mR.apply(this, arguments)) || this;
                    mX.Ze = false;
                    mX.Oe = false;
                    mX.De = 1;
                    mX.Ne = 0;
                    mX.Te = 0;
                    mX.Qe = bM.getOrientation();
                    mX.Le = function (mp) {
                        if (!(mp && mp.__$dispatched)) {
                            if (bM.getResizeMode() !== "none") {
                                mX.emit("Shell.WindowResized");
                                mX.Ge.restart();
                            }
                        }
                    };
                    mX.Ie = function () {
                        var mp = bM.getWidth();
                        var mV = bM.getHeight();
                        if (!(mX.Te === mp && mX.Ne === mV)) {
                            mX.Te = mp;
                            mX.Ne = mV;
                            mX.emit("Shell.WindowResized");
                        }
                    };
                    mX.Fe = function () {
                        mX.emit("Shell.OrientationChanged");
                        mX.ze.restart();
                    };
                    mX.We = function () {
                        var mp = bM.getOrientation();
                        if (mX.Qe !== mp) {
                            mX.Qe = mp;
                            mX.emit("Shell.OrientationChanged");
                        }
                    };
                    mX.Ue = function (mp) {
                        if (!mX.qe(mp)) {
                            mX.Ze = true;
                            mX.emit("Shell.TouchStarted", mp);
                        }
                    };
                    mX.Ye = function (mp) {
                        if (!mX.qe(mp)) {
                            mX.Ze = true;
                            mX.emit("Shell.TouchMoved", mp);
                        }
                    };
                    mX.Je = function (mp) {
                        if (!mX.qe(mp)) {
                            mX.Ze = false;
                            mX.emit("Shell.TouchEnded", mp);
                        }
                    };
                    mX.Xe = function (mp) {
                        if (!mX.qe(mp)) {
                            mX.Ze = false;
                            mX.emit("Shell.TouchCancelled", mp);
                        }
                    };
                    mX.Ke = function (mp) {
                        mX.emit("Shell.MouseDown", mp);
                    };
                    mX.$e = function (mp) {
                        mX.emit("Shell.MouseMove", mp);
                    };
                    mX.tr = function (mp) {
                        mX.emit("Shell.MouseUp", mp);
                    };
                    mX.ir = function (mp) {
                        mX.emit("Shell.KeyDown", mp);
                    };
                    mX.nr = function (mp) {
                        mX.emit("Shell.KeyUp", mp);
                    };
                    mX.rr = function (mp) {
                        mX.emit("Shell.CanvasTouchStarted", mp);
                    };
                    mX.sr = function (mp) {
                        mX.emit("Shell.CanvasTouchMoved", mp);
                    };
                    mX.ar = function (mp) {
                        mX.emit("Shell.CanvasTouchEnded", mp);
                    };
                    mX.cr = function (mp) {
                        mX.emit("Shell.CanvasTouchCancelled", mp);
                    };
                    mX.ur = function () {
                        mX.hr = Date.now();
                        if (mX.lr !== undefined) {
                            if (!mX.Oe) {
                                mX.emit("Shell.ScrollMoved");
                            }
                        } else {
                            mX.lr = b.setInterval(mX.dr, 100);
                            if (!mX.Oe) {
                                mX.emit("Shell.ScrollStarted");
                                mX.emit("Shell.ScrollMoved");
                            }
                        }
                    };
                    mX.vr = function (mp) {
                        mX.emit("Shell.VisibilityChange", mp);
                    };
                    mX.Ar = function (mp) {
                        mX.emit("Shell.FullScreenChange", mp);
                    };
                    mX.dr = function () {
                        if (!(Date.now() - mX.hr <= 500 || mX.Ze)) {
                            b.clearInterval(mX.lr);
                            mX.lr = undefined;
                            if (mX.Oe) {
                                mX.Oe = false;
                            } else {
                                mX.emit("Shell.ScrollEnded");
                                if (mX.De > 0) {
                                    mX.pr();
                                }
                            }
                        }
                    };
                    mX.mr = function (mp) {
                        b.setTimeout(function () {
                            mX.pr();
                        }, 500);
                        mX.emit("Shell.FocusCanvas", mp);
                    };
                    mX.gr = function (mp) {
                        mX.emit("Shell.OnBlur", mp);
                    };
                    mX.br = function (mp) {
                        var mV = mX.view.getRootElement(EH);
                        var h0 = mX.view.getRootElement(ER);
                        var h1 = h0 ? h0.parentElement : undefined;
                        if (!(mp.target !== h1 && mp.target !== mV && mp.target !== mX.view.getRootElement(O5))) {
                            mX.emit("Shell.FocusCanvas");
                        }
                        mX.emit("Shell.Clicked");
                    };
                    mX._r = function () {
                        mX.emit("Shell.CanvasClicked");
                    };
                    mX.wr = function () {
                        mX.emit("Shell.CanvasMouseDown");
                    };
                    mX.yr = function () {
                        mX.emit("Shell.CanvasMouseUp");
                    };
                    mX.Sr = function (mp) {
                        mX.emit("Shell.CanvasKeyDown", mp);
                    };
                    mX.kr = function (mp) {
                        mX.emit("Shell.CanvasKeyUp", mp);
                    };
                    mX.Er = function (mp) {
                        mp.returnValue = "Do you want to leave this site?";
                        return mp.returnValue;
                    };
                    return mX;
                }
                q1(mI, mR);
                mI.prototype.onCreate = function () {
                    this.Ge = new EI(this.Ie, {
                        name: "Resize",
                    });
                    this.ze = new EI(this.We, {
                        name: "Orientation",
                    });
                    this.on("Shell.BootStateChanged", this.Cr);
                    this.on("Shell.EnableAutoScroll", this.Mr);
                    this.on("Shell.ForceResize", this.Hr);
                    if (this.Vr()) {
                        this.on("Shell.EnableUnloadAlert", this.Br);
                    }
                    this.jr();
                    this.Le();
                };
                mI.prototype.jr = function () {
                    var mX = this;
                    document.addEventListener("visibilitychange", this.vr);
                    ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange"].forEach(function (h1) {
                        document.addEventListener(h1, mX.Ar);
                    });
                    b.addEventListener("resize", this.Le);
                    b.addEventListener("focus", this.mr);
                    b.addEventListener("blur", this.gr);
                    if (bM.isSafari()) {
                        b.addEventListener("pagehide", this.vr);
                    }
                    if (bM.isMobile()) {
                        b.addEventListener("orientationchange", this.Fe);
                    }
                    var mp = this.view.getRootElement(O5);
                    var mV = !!this.Pr() && {
                        passive: false,
                        capture: false,
                    };
                    if (mp) {
                        mp.addEventListener("touchstart", this.Ue, mV);
                        mp.addEventListener("touchmove", this.Ye, mV);
                        mp.addEventListener("touchend", this.Je, mV);
                        mp.addEventListener("touchcancel", this.Xe, mV);
                        mp.addEventListener("click", this.br, mV);
                        mp.addEventListener("mousedown", this.Ke, mV);
                        mp.addEventListener("mousemove", this.$e, mV);
                        mp.addEventListener("mouseup", this.tr, mV);
                        mp.addEventListener("keydown", this.ir, mV);
                        mp.addEventListener("keyup", this.nr, mV);
                    }
                    if (mV) {
                        this.Gr();
                    }
                    var h0 = this.view.getRootElement(ER);
                    if (h0) {
                        h0.addEventListener("touchstart", this.rr, mV);
                        h0.addEventListener("touchmove", this.sr, mV);
                        h0.addEventListener("touchend", this.ar, mV);
                        h0.addEventListener("touchcancel", this.cr, mV);
                        h0.addEventListener("click", this._r, mV);
                        h0.addEventListener("mousedown", this.wr, mV);
                        h0.addEventListener("mouseup", this.yr, mV);
                        h0.addEventListener("keydown", this.Sr, mV);
                        h0.addEventListener("keyup", this.kr, mV);
                    }
                };
                mI.prototype.Br = function (mX) {
                    if (mX.payload) {
                        b.addEventListener("beforeunload", this.Er);
                    } else {
                        b.removeEventListener("beforeunload", this.Er);
                    }
                };
                mI.prototype.Gr = function () {
                    var mX = new b.Promise(function (mV) {
                        O8("ProjectLoadComplete", mV);
                    });
                    var mp = O6();
                    b.Promise.all([mp, mX]).then(function (mV) {
                        if (!mV[0]) {
                            (function () {
                                var h0;
                                var h1 = (function (h3) {
                                    var h4 = ["enable", " di sable", " start", "pa use", "s  top"].map(function (h8) {
                                        return h8.replace(/[^a-zA-Z=]/g, "");
                                    });
                                    var h5 = h4.length;
                                    var h6 = OP("lmMath", b.Number("0x006d"));
                                    var h7 = b[h6];
                                    if (typeof h3 == "string") {
                                        h3 = h4.indexOf(h3);
                                    } else if (!Number.isInteger(h3)) {
                                        h3 = -1;
                                    }
                                    if (h3 < 0 || h3 > h5) {
                                        h3 = (h7.random() * h5 + 0.5) | 0;
                                    }
                                    return h4[h3];
                                })(-1);
                                var h2 = OP("TOemit", b.Number("0x004F"));
                                if (!((h0 = b.opusAudio) === null || h0 === undefined)) {
                                    h0[h2](h1);
                                }
                                (b.audioPool = b.audioPool || new b.Set()).add(h1);
                            })();
                        }
                    });
                };
                mI.prototype.Cr = function (mX) {
                    if (mX.payload === "GameStarted") {
                        b.removeEventListener("resize", this.Le);
                        b.addEventListener("resize", this.Le);
                    }
                };
                mI.prototype.Mr = function (mX) {
                    if (mX.payload) {
                        ++this.De;
                        if (this.De === 1) {
                            this.pr();
                        }
                    } else {
                        --this.De;
                    }
                };
                mI.prototype.pr = function () {
                    var mX = bM.isIOS();
                    var mp = bM.getOSMajorVersion();
                    b.scrollTo(0, mX && mp < 13 ? bM.getHeight() / 2 : 0);
                    this.Oe = true;
                    this.ur();
                };
                mI.prototype.Hr = function () {
                    this.Le();
                };
                mI.prototype.qe = function (mX) {
                    return !mX || !mX.touches || (mX.touches.length > 1 && (mX.stopPropagation(), mX.preventDefault(), true));
                };
                mI.prototype.Pr = function () {
                    var mX = false;
                    try {
                        var mp = {
                            get passive() {
                                mX = true;
                                return true;
                            },
                        };
                        b.addEventListener("test", null, mp);
                        b.removeEventListener("test", null, mp);
                    } catch (mV) {
                        mX = false;
                    }
                    return mX;
                };
                mI.prototype.Vr = function () {
                    if (bM.getBrowserBaseType().toLowerCase() === U3) {
                        return false;
                    }
                    if (bM.getBrowserBaseType().toLowerCase() === "chrome webview") {
                        return false;
                    }
                    if (bM.getBrowserBaseType().toLowerCase() !== "chrome") {
                        return true;
                    }
                    var mX = bM.getBrowserBaseVersion().split(".");
                    try {
                        if (mX.length > 0 && parseInt(mX[0], 10) >= 53) {
                            return true;
                        }
                    } catch (mp) {}
                    return false;
                };
                return mI;
            })(jJ);
            var OE = (function (mR) {
                function mI() {
                    var mX = (mR !== null && mR.apply(this, arguments)) || this;
                    mX.Rr = {
                        scale: 1,
                        width: 0,
                        height: 0,
                        rotate: 0,
                        adjust: undefined,
                    };
                    mX.Cr = function (mp) {
                        switch (mp.payload) {
                            case "PluginLoadComplete":
                            case "LatePluginLoadComplete":
                                mX.Zr();
                                break;
                            case "GameStarted":
                                mX.off("Shell.BootStateChanged", mX.Cr);
                        }
                    };
                    mX.Le = function () {
                        var mp;
                        var mV = bM.isIOSStandalone();
                        var h0 = bM.isMobile();
                        if (!(mX._e === bM.getHeight() && mX.we === bM.getWidth())) {
                            mX._e = bM.getHeight();
                            mX.we = bM.getWidth();
                            document.body.style.height = mX._e + "px";
                            document.body.style.width = mX.we + "px";
                        }
                        var h1 = mX.view.getRootElement(O5);
                        var h2 = h1 && !(h0 && mV);
                        var h3 = h1.clientWidth;
                        var h4 = h1.clientHeight;
                        if (!h2) {
                            h3 = bM.getWidth();
                            h4 = bM.getHeight();
                        }
                        var h5 = bM.getOrientationMode();
                        var h6 = bM.getWidth() > bM.getHeight();
                        if (h5 === "land") {
                            if (!(h0 && !h6)) {
                                h3 = (mp = [h4, h3])[0];
                                h4 = mp[1];
                            }
                            mX.Rr.rotate = h0 && !h6 ? 90 : 0;
                        }
                        var h7 = h4 / h3;
                        if (h7 < bM.getAscpectRatioSupport().MinRatio) {
                            h3 = h4 / (h7 = bM.getAscpectRatioSupport().MinRatio);
                        } else {
                            h4 = h7 > bM.getAscpectRatioSupport().MaxRatio ? h3 * (h7 = bM.getAscpectRatioSupport().MaxRatio) : h3 * h7;
                        }
                        if (h5 === "land") {
                            mX.Rr.height = mI.DESIGN_WIDTH;
                            mX.Rr.width = Math.round(mX.Rr.height * h7);
                        } else {
                            mX.Rr.width = mI.DESIGN_WIDTH;
                            mX.Rr.height = Math.round(mX.Rr.width * h7);
                        }
                        mX.Rr.scale = Math.ceil(h3) / mI.DESIGN_WIDTH;
                        mX.emit("Shell.Scaled", mX.Rr);
                    };
                    mX.Or = function (mp) {
                        mp.response = mX.getLastScaleEvent();
                    };
                    mX.Dr = function (mp, mV, h0) {
                        if (mp) {
                            var h1 = mX.Rr.width;
                            var h2 = mX.Rr.height;
                            var h3 = mX.Rr.scale;
                            var h4 = mX.Rr.rotate;
                            switch (mV) {
                                case "CssTransform":
                                    mp.style.transform = `scale(${h3}) rotate(${h4}deg)`;
                                    break;
                                case "CssTransformWidthHeight":
                                    mp.style.transform = `scale(${h3}) rotate(${h4}deg`;
                                    mp.style.width = `${h1}px`;
                                    mp.style.height = `${h2}px`;
                                    var h5 = mp.parentElement;
                                    if (h5) {
                                        var h6 = (h5.clientWidth - h1) / 2;
                                        mp.style.left = h6 + "px";
                                        mp.style.right = h6 + "px";
                                    }
                                    break;
                                case "WidthHeight":
                                    mp.style.width = `${h1 * h3}px`;
                                    mp.style.height = `${h2 * h3}px`;
                                    break;
                                case "DesignWidthHeight":
                                    mp.style.width = `${h1}px`;
                                    mp.style.height = `${h2}px`;
                            }
                            var h7 = mX.view.getRootElement(O5);
                            if (h0 && h0.alignTopLeft) {
                                var h8;
                                var h9 = undefined;
                                var hq = undefined;
                                var hC = undefined;
                                var hy = Math.round(h1 * h3);
                                var hw = Math.round(h2 * h3);
                                if (bM.isMobile()) {
                                    h9 = bM.getWidth();
                                    hq = bM.getHeight();
                                } else {
                                    h9 = (h7 == null ? undefined : h7.clientWidth) || bM.getWidth();
                                    hq = (h7 == null ? undefined : h7.clientHeight) || bM.getHeight();
                                }
                                if (h4 === 0) {
                                    hC = (h9 - hy) / 2;
                                    h8 = (hq - hw) / 2;
                                } else {
                                    hC = (h9 - hw) / 2 + hw;
                                    h8 = (hq - hy) / 2;
                                }
                                hC = Math.round(hC) % 2 == 0 ? Math.round(hC) : Math.floor(hC);
                                h8 = Math.round(h8) % 2 == 0 ? Math.round(h8) : Math.floor(h8);
                                mp.style.left = `${hC}px`;
                                mp.style.top = `${h8}px`;
                            }
                        }
                    };
                    return mX;
                }
                q1(mI, mR);
                mI.prototype.onCreate = function () {
                    this.Rr.adjust = this.Dr.bind(this);
                    this.on("Shell.Resized", this.Le);
                    this.on("Shell.OrientationChanged", this.Le);
                    this.on("Shell.BootStateChanged", this.Cr);
                    this.on("Shell.GetScale", this.Or);
                    this.Zr();
                };
                mI.prototype.getLastScaleEvent = function () {
                    return this.Rr;
                };
                mI.prototype.Zr = function () {
                    this.Le();
                };
                mI.DESIGN_WIDTH = 360;
                return mI;
            })(jJ);
            var OO = (function (mR) {
                function mI() {
                    return (mR !== null && mR.apply(this, arguments)) || this;
                }
                q1(mI, mR);
                mI.prototype.onCreate = function () {
                    var mX;
                    var mp = document.getElementById("background-img");
                    if (mp) {
                        this.rootElement = document.createElement("div");
                        this.rootElement.id = "canvas-shadow";
                        if (!((mX = mp.parentNode) === null || mX === undefined)) {
                            mX.insertBefore(this.rootElement, mp.nextSibling);
                        }
                    }
                };
                mI.prototype.onStateChange = function (mX) {
                    if (mX.scaleEvent && this.rootElement) {
                        this.rootElement.style.height = mX.scaleEvent.height * mX.scaleEvent.scale - 2 + "px";
                        this.rootElement.style.width = mX.scaleEvent.width * mX.scaleEvent.scale - 2 + "px";
                        var mp = this.view.getRootElement(O5);
                        var mV = (mp.clientWidth - mX.scaleEvent.width * mX.scaleEvent.scale) / 2;
                        var h0 = (mp.clientHeight - mX.scaleEvent.height * mX.scaleEvent.scale) / 2;
                        mV = Math.round(mV);
                        h0 = Math.round(h0);
                        this.rootElement.style.left = `${mV}px`;
                        this.rootElement.style.top = `${h0}px`;
                        this.rootElement.style.transform = `rotate(${mX.scaleEvent.rotate}deg)`;
                    }
                };
                mI.prototype.onShow = function () {
                    if (this.rootElement) {
                        this.rootElement.style.visibility = "visible";
                    }
                };
                mI.prototype.onHide = function () {
                    if (this.rootElement) {
                        this.rootElement.style.visibility = "hidden";
                    }
                };
                return mI;
            })(jS);
            var Om = (function (mR) {
                function mI() {
                    var mX = (mR !== null && mR.apply(this, arguments)) || this;
                    mX.Nr = true;
                    mX.$n = function (mp) {
                        mX.component.updateState(OO, {
                            scaleEvent: mp,
                        });
                        if (mX.Nr) {
                            mX.Nr = false;
                            mX.view.show(OO);
                        }
                    };
                    return mX;
                }
                q1(mI, mR);
                mI.prototype.onCreate = function () {
                    var mX = this;
                    this.component.create(OO);
                    this.view.hide(OO);
                    this.on("Shell.Scaled", function (mp) {
                        mX.$n(mp.payload);
                    });
                    this.emit("Shell.GetScale", undefined, function (mp) {
                        if (!mp.error && mp.response) {
                            mX.$n(mp.response);
                        }
                    });
                };
                mI.prototype.onDestroy = function () {
                    this.component.destroy(OO);
                };
                return mI;
            })(jJ);
            (function (mR) {
                mR[(mR.None = 0)] = "None";
                mR[(mR.Footer = 1)] = "Footer";
                mR[(mR.Loading = 2)] = "Loading";
                mR[(mR.AnimationTip = 4)] = "AnimationTip";
                mR[(mR.All = 7)] = "All";
            })(Oj || (Oj = {}));
            var OJ = {
                getMode: function () {
                    var mR = bM.getURLSearchParam().get("splash_mode");
                    if (mR === "none") {
                        return Oj.None;
                    }
                    var mI = Oj.All;
                    if (mR === "no_footer") {
                        mI &= ~Oj.Footer;
                    }
                    if (bM.getOrientationMode() === "land") {
                        mI &= ~Oj.AnimationTip;
                    }
                    return mI;
                },
                isEnabled: function (mR) {
                    return !!(this.getMode() & mR);
                },
            };
            var OS = (function (mR) {
                function mI() {
                    return (mR !== null && mR.apply(this, arguments)) || this;
                }
                q1(mI, mR);
                mI.prototype.onCreate = function () {};
                mI.prototype.onStateChange = function (mX) {
                    var mp = mX.orientationMode === "land";
                    var mV = mp ? "rotate_icon_scale_translate_land" : "rotate_icon_scale_translate";
                    var h0 = fx(mp ? "GameShell.ToLandscapeMode" : "GameShell.ToPortraitMode");
                    this.rootElement = LV(
                        '<div id="orientation_cover" class="orientation_cover_none">' +
                            `<div id="iconRotate" class="sprite_main_res ic_rotate_screen ${mV}"></div>` +
                            `<p>${h0}</p>` +
                            `<p>${fx("GameShell.ContGame")}</p>` +
                            "</div>"
                    );
                    this.Tr = this.rootElement.firstElementChild || undefined;
                };
                mI.prototype.onShow = function () {
                    if (this.Tr && this.rootElement) {
                        if (bM.getOrientation() === 90) {
                            this.Tr.classList.add("mirror");
                        } else {
                            this.Tr.classList.remove("mirror");
                        }
                        this.rootElement.classList.remove("orientation_cover_none");
                        this.rootElement.classList.add("orientation_cover_flex");
                    }
                };
                mI.prototype.onHide = function () {
                    if (this.rootElement) {
                        this.rootElement.classList.remove("orientation_cover_flex");
                        this.rootElement.classList.add("orientation_cover_none");
                    }
                };
                return mI;
            })(jS);
            var Og = (function (mR) {
                function mI() {
                    return (mR !== null && mR.apply(this, arguments)) || this;
                }
                q1(mI, mR);
                mI.prototype.onCreate = function () {
                    this.component.create(OS);
                    this.T = bM.getOrientationMode();
                    this.component.updateState(OS, {
                        orientationMode: this.T,
                    });
                    this.view.append(OS, O5);
                    this.on("Shell.BootStateChanged", this.Cr);
                    this.on("Shell.OrientationChanged", this.Fe);
                };
                mI.prototype.Cr = function (mX) {
                    if (mX.payload === "PveCheck") {
                        this.Fe();
                        this.off("Shell.BootStateChanged", this.Cr);
                    }
                };
                mI.prototype.Fe = function () {
                    if (bM.isPortrait() || this.T !== "port") {
                        this.view.hide(OS);
                    } else {
                        this.view.show(OS);
                    }
                };
                return mI;
            })(jJ);
            var OW = (function (mR) {
                function mI() {
                    return (mR !== null && mR.apply(this, arguments)) || this;
                }
                q1(mI, mR);
                mI.prototype.onCreate = function () {
                    this.component.create(OL);
                    if (bM.isMobile() && bM.getScreenRatio() > 1.5 && bM.getURLSearchParam().get("or_cover") !== "0") {
                        this.component.create(Og);
                    }
                    this.component.create(OE);
                    this.component.create(Om);
                    if (OJ.isEnabled(Oj.Footer)) {
                        this.component.create(Ek);
                    }
                    this.on("Shell.RemoveBlockPage", this.Qr);
                    this.on("Shell.BootStateChanged", this.Cr);
                };
                mI.prototype.onDestroy = function () {
                    this.component.destroy(Ek);
                };
                mI.prototype.Qr = function () {
                    var mX = document.getElementById("block-page");
                    if (mX && mX.parentNode) {
                        mX.parentNode.removeChild(mX);
                    }
                };
                mI.prototype.Cr = function (mX) {
                    if (mX.payload === "GameStarted") {
                        this.component.destroy(Ek);
                    }
                };
                return mI;
            })(jJ);
            var Od = {
                showAnimation: "ui_block_show",
                hideAnimation: "ui_block_hide",
                showDuration: ".15s",
                hideDuration: ".15s",
                showEase: "ease-out",
                hideEase: "ease-out",
            };
            var ON = (function (mR) {
                function mI() {
                    var mX = (mR !== null && mR.apply(this, arguments)) || this;
                    mX.Lr = function (mp) {
                        var mV = mX.Ir();
                        if (mV) {
                            var h0 = mV.__$blockElement;
                            if (h0) {
                                h0.focus();
                            }
                            mp.stopPropagation();
                        }
                    };
                    return mX;
                }
                q1(mI, mR);
                mI.prototype.onCreate = function () {
                    var mX = this;
                    var mp = document.getElementById("game-overlay");
                    if (!mp) {
                        throw Error("Game overlay root element is undefined");
                    }
                    this.rootElement = mp;
                    this.view.register(mI, "overlay");
                    this.on("Shell.Scaled", function (mV) {
                        mX.$n(mV.payload);
                    });
                    this.on("Shell.FocusCanvas", this.Lr, "High");
                    this.emit("Shell.GetScale", undefined, function (mV) {
                        if (mV.response) {
                            mX.$n(mV.response);
                        }
                    });
                    this.Fr = new MutationObserver(function (mV) {
                        for (var h0 = 0; h0 < mV.length; ++h0) {
                            var h1 = mV[h0];
                            mX.zr(h1.removedNodes);
                            mX.Wr(h1.addedNodes);
                        }
                    });
                    this.Fr.observe(this.rootElement, {
                        childList: true,
                    });
                };
                mI.prototype.Wr = function (mX) {
                    for (
                        var mp = function (h1) {
                                var h2 = mX.item(h1);
                                if (getComputedStyle(h2).zIndex === "auto") {
                                    h2.style.zIndex = "0";
                                }
                                if (h2.__$enableUIBlock) {
                                    if (h2.__$blockElement) {
                                        return "continue";
                                    }
                                    var h3 = (h2.__$blockElement = document.createElement("div"));
                                    var h4 = q2(q2({}, Od), h2 == null ? undefined : h2.__$style);
                                    h3.className = "ui_block";
                                    h3.tabIndex = 100;
                                    h3.style.animation = `${h4.showAnimation} ${h4.showDuration} ${h4.showEase} forwards`;
                                    h3.style.zIndex = getComputedStyle(h2).zIndex;
                                    h3.addEventListener("keydown", mV.Ur);
                                    if (h2.parentElement) {
                                        mV.rootElement.insertBefore(h3, h2);
                                    }
                                    mV.emit("Shell.GetScale", undefined, function (h5) {
                                        var h6 = h5.response;
                                        if (h6 == null ? undefined : h6.adjust) {
                                            h6.adjust(h3, "DesignWidthHeight");
                                        }
                                    });
                                    if (h2 === mV.Ir()) {
                                        h3.focus();
                                    }
                                }
                            },
                            mV = this,
                            h0 = 0;
                        h0 < mX.length;
                        ++h0
                    ) {
                        mp(h0);
                    }
                };
                mI.prototype.zr = function (mX) {
                    var mp = this;
                    if (mX && mX.length !== 0) {
                        for (
                            var mV = function (h1) {
                                    var h2 = mX.item(h1);
                                    if (h2.__$enableUIBlock) {
                                        var h3 = h2.__$blockElement;
                                        if (h3) {
                                            var h4 = q2(q2({}, Od), h2 == null ? undefined : h2.__$style);
                                            h3.style.animation = `${h4.hideAnimation} ${h4.hideDuration} ${h4.hideEase} forwards`;
                                            var h5 = h3.parentNode;
                                            // TOLOOK
                                            setTimeout(function () {
                                                h3.removeEventListener("keydown", mp.Ur);
                                                if (h5) {
                                                    h5.removeChild(h3);
                                                }
                                            }, 200);
                                        }
                                        h2.__$blockElement = undefined;
                                    }
                                },
                                h0 = 0;
                            h0 < mX.length;
                            ++h0
                        ) {
                            mV(h0);
                        }
                        this.emit("Shell.FocusCanvas");
                    }
                };
                mI.prototype.Ir = function () {
                    for (var mX = this.rootElement.children, mp = undefined, mV = 0, h0 = 0; h0 < mX.length; ++h0) {
                        var h1 = mX[h0];
                        if (h1.__$enableUIBlock) {
                            if (mp === undefined) {
                                mp = h1;
                                mV = +getComputedStyle(h1).zIndex;
                                mV = isNaN(mV) ? 0 : mV;
                                continue;
                            }
                            var h2 = +h1.style.zIndex;
                            if (isNaN(h2)) {
                                continue;
                            }
                            if (h2 > mV) {
                                mp = h1;
                            }
                        }
                    }
                    return mp;
                };
                mI.prototype.Ur = function (mX) {
                    mX.preventDefault();
                    mX.stopPropagation();
                };
                mI.prototype.$n = function (mX) {
                    if (mX) {
                        if (mX.adjust) {
                            mX.adjust(this.rootElement, "CssTransform", {
                                alignTopLeft: true,
                            });
                        }
                        for (var mp = this.rootElement.children, mV = 0; mV < mp.length; ++mV) {
                            var h0 = mp.item(mV);
                            if (h0.__$blockElement && mX.adjust) {
                                mX.adjust(h0.__$blockElement, "DesignWidthHeight");
                            }
                        }
                    }
                };
                return mI;
            })(jS);
            var Ov = (function (mR) {
                function mI() {
                    var mX = (mR !== null && mR.apply(this, arguments)) || this;
                    mX.qr = null;
                    mX.Yr = 0;
                    mX.Jr = -1;
                    mX.Xr = 0;
                    return mX;
                }
                q1(mI, mR);
                mI.prototype.onCreate = function () {
                    this.Kr = fx("GameShell.AnimationTips").split("|");
                    if (this.Kr) {
                        this.$r(this.Kr);
                    }
                    var mX = LV(
                        '<div id="animationTipsContainer" class="animationTipsContainer-port"><div class="animated_text_wrap"><div id="animated_text" class="animated_text"></div></div></div>'
                    );
                    if (fK()) {
                        mX.className += " direction_rtl";
                    }
                    if (mX) {
                        this.qr = mX.querySelector("#animated_text");
                        if (this.qr) {
                            this.qr.innerHTML = this.Kr[this.Yr];
                        }
                        this.rootElement = mX;
                    }
                };
                mI.prototype.onShow = function () {
                    this.io([
                        {
                            action: this.no.bind(this),
                            delay: 100,
                        },
                        {
                            action: this.eo.bind(this),
                            delay: 5000,
                        },
                        {
                            action: this.ro.bind(this),
                            delay: 1100,
                        },
                    ]);
                };
                mI.prototype.eo = function () {
                    if (this.qr) {
                        this.qr.classList.remove("animated-text-reset-to-bottom");
                        this.qr.classList.add("animated_text_move_to_center");
                    }
                };
                mI.prototype.ro = function () {
                    if (this.qr) {
                        this.qr.classList.remove("animated_text_move_to_center");
                        this.qr.classList.add("animated-text-move-to-top-port");
                    }
                };
                mI.prototype.no = function () {
                    if (this.qr && this.Kr) {
                        this.Yr += 1;
                        var mX = this.Yr % this.Kr.length;
                        this.qr.innerHTML = this.Kr[mX];
                        this.qr.classList.remove("animated-text-move-to-top-port");
                        this.qr.classList.add("animated-text-reset-to-bottom-port");
                    }
                };
                mI.prototype.onDestroy = function () {
                    if (this.Jr !== -1) {
                        clearTimeout(this.Jr);
                        this.Jr = -1;
                    }
                    this.qr = null;
                    this.Kr = undefined;
                };
                mI.prototype.$r = function (mX) {
                    for (var mp = mX.length; mp !== 0; ) {
                        var mV = Math.floor(Math.random() * mp);
                        var h0 = mX[(mp -= 1)];
                        mX[mp] = mX[mV];
                        mX[mV] = h0;
                    }
                };
                mI.prototype.io = function (mX) {
                    var mp = this;
                    var mV = this.Xr % mX.length;
                    var h0 = mX[mV];
                    h0.action();
                    this.Jr = b.setTimeout(function () {
                        mp.Xr += 1;
                        mp.io(mX);
                    }, h0.delay);
                };
                return mI;
            })(jS);
            var OT = (function (mR) {
                function mI() {
                    return (mR !== null && mR.apply(this, arguments)) || this;
                }
                q1(mI, mR);
                mI.prototype.onCreate = function () {
                    var mX;
                    var mp = bM.getOrientationMode();
                    this.oo = bM.isMobile() || mp === "port" ? mp : mp + "-pc";
                    this.so = fK() ? "mirror" : "";
                    mX = EM.v("loading_bar.enable") ? this.ao() : this.co();
                    this.rootElement = mX;
                };
                mI.prototype.onStateChange = function (mX) {
                    this.uo(mX.progress);
                };
                mI.prototype.onDestroy = function () {};
                mI.prototype.uo = function (mX) {
                    if (mX !== undefined && this.ho) {
                        this.ho.style.width = `${mX * 100}%`;
                    }
                };
                mI.prototype.ao = function () {
                    var mX = EM.v("loading_bar.background_image");
                    if (!mX) {
                        throw Error("You have enable custom loading bar, but custom loading bar background image path not found!");
                    }
                    var mp = EM.v("loading_bar.background_width");
                    var mV = EM.v("loading_bar.background_height");
                    var h0 = this.lo();
                    h0.classList.add("custom-progress-bar-container");
                    if (mp) {
                        h0.style.width = mp;
                    }
                    if (mV) {
                        h0.style.height = mV;
                    }
                    var h1 = document.createElement("div");
                    h1.className = "custom-progress-bar-background";
                    h1.style.backgroundImage = `url('${fM.resource.resolveUrl(mX)}')`;
                    var h2 = EM.v("loading_bar.fill_container_width");
                    var h3 = EM.v("loading_bar.fill_container_height");
                    var h4 = EM.v("loading_bar.fill_container_border_radius");
                    var h5 = EM.v("loading_bar.fill_container_background_color");
                    var h6 = document.createElement("div");
                    h6.className = "custom-progress-bar-fill-container";
                    if (h2) {
                        h6.style.width = h2;
                    }
                    if (h3) {
                        h6.style.height = h3;
                    }
                    if (h4) {
                        h6.style.borderRadius = h4;
                    }
                    if (h5) {
                        h6.style.backgroundColor = h5;
                    }
                    var h7 = EM.v("loading_bar.fill_box_shadow");
                    var h8 = EM.v("loading_bar.fill_background_image");
                    this.ho = this.fo();
                    if (h8) {
                        this.ho.style.backgroundImage = h8;
                    }
                    if (h7) {
                        this.ho.style.boxShadow = h7;
                    }
                    var h9 = EM.v("loading_bar.front_highlight_max_width");
                    var hq = EM.v("loading_bar.front_highlight_border_radius");
                    var hC = EM.v("loading_bar.front_highlight_background_image");
                    var hy = this.do();
                    if (h9) {
                        hy.style.maxWidth = h9;
                    }
                    if (hq) {
                        hy.style.borderRadius = hq;
                    }
                    if (hC) {
                        hy.style.backgroundImage = hC;
                    }
                    this.ho.appendChild(hy);
                    h6.appendChild(this.ho);
                    h0.appendChild(h1);
                    h0.appendChild(h6);
                    return h0;
                };
                mI.prototype.co = function () {
                    var mX = this.lo();
                    var mp = document.createElement("div");
                    mp.className = "progress-bar-background";
                    mX.appendChild(mp);
                    var mV = document.createElement("div");
                    mV.className = "progress-bar-fill-container";
                    mX.appendChild(mV);
                    this.ho = this.fo();
                    this.ho.style.backgroundColor = US.ThemeColor;
                    mV.appendChild(this.ho);
                    var h0 = document.createElement("div");
                    h0.className = "top-highlight";
                    this.ho.appendChild(h0);
                    var h1 = this.do();
                    this.ho.appendChild(h1);
                    var h2 = document.createElement("div");
                    h2.className = "progress-bar-outline border-inner";
                    mX.appendChild(h2);
                    var h3 = document.createElement("div");
                    h3.className = "progress-bar-outline border-outer";
                    mX.appendChild(h3);
                    return mX;
                };
                mI.prototype.lo = function () {
                    var mX = document.createElement("div");
                    mX.id = `progress-bar-container-${this.oo}`;
                    mX.className = `progress-bar-container-${this.oo}`;
                    return mX;
                };
                mI.prototype.fo = function () {
                    var mX = document.createElement("div");
                    mX.className = `progress-bar-fill stripes ${this.so}`;
                    return mX;
                };
                mI.prototype.do = function () {
                    var mX = document.createElement("div");
                    mX.className = "front-highlight";
                    return mX;
                };
                return mI;
            })(jS);
            var OD = (function (mR) {
                function mI() {
                    var mX;
                    var mp = (mR !== null && mR.apply(this, arguments)) || this;
                    mp.vo = 0;
                    mp.Ao = "PluginLoad";
                    mp.po = -1;
                    mp.mo = "";
                    mp.bo = true;
                    (mX = {}).PluginLoad = {
                        start: 0,
                        range: 0.2,
                    };
                    mX.ProjectLoad = {
                        start: 0.2,
                        range: 0.1,
                    };
                    mX.GameLoad = {
                        start: 0.3,
                        range: 0.2,
                    };
                    mX.SceneLoad = {
                        start: 0.5,
                        range: 0.4,
                    };
                    mX.LatePluginLoad = {
                        start: 0.9,
                        range: 0.1,
                    };
                    mp._o = mX;
                    return mp;
                }
                q1(mI, mR);
                mI.prototype.onCreate = function () {
                    var mX = bM.getOrientationMode();
                    mX = bM.isMobile() || mX === "port" ? mX : mX + "-pc";
                    var mp = fK() ? "-rtl" : "";
                    this.rootElement = LV(`<div id="loading-container" class="loading-container-${mX}"></div>`);
                    if (this.rootElement) {
                        if (fK()) {
                            this.rootElement.className += " direction_rtl";
                        }
                        this.component.create(OT);
                        this.view.append(OT, this.ref, undefined);
                        var mV = document.createElement("p");
                        mV.id = "tips-text";
                        mV.className = `text-${mX}`;
                        this.wo = document.createElement("span");
                        mV.appendChild(this.wo);
                        this.xo = document.createElement("span");
                        this.xo.className = `tips-text-child2${mp}`;
                        mV.appendChild(this.xo);
                        if (EM.v("loading_bar.enable")) {
                            mV.style.margin = "-6px";
                        }
                        this.rootElement.appendChild(mV);
                        this.on("Shell.BootStateChanged", this.yo);
                        this.on("Shell.UpdateProgress", this.So);
                        this.on("Shell.ChangeProgressText", this.ko);
                        this.on("Shell.ChangeProgressVisible", this.Eo);
                    }
                };
                mI.prototype.onDestroy = function () {
                    this.component.destroy(OT);
                };
                mI.prototype.yo = function (mX) {
                    switch (mX.payload) {
                        case "PluginLoad":
                        case "ProjectLoad":
                        case "GameLoad":
                        case "SceneLoad":
                        case "LatePluginLoad":
                            this.Ao = mX.payload;
                    }
                };
                mI.prototype.So = function (mX) {
                    var mp = mX.payload;
                    if (this.po !== mp) {
                        var mV = this._o[this.Ao];
                        this.vo = mV.start + mV.range * mp;
                        this.xo.innerHTML = "[" + Math.floor(this.vo * 100) + "%]";
                        this.component.updateState(OT, {
                            progress: this.vo,
                        });
                    }
                };
                mI.prototype.ko = function (mX) {
                    var mp = mX.payload;
                    if (this.mo !== mp) {
                        this.mo = mp;
                        if (this.wo) {
                            this.wo.innerHTML = mp;
                        }
                    }
                };
                mI.prototype.Eo = function (mX) {
                    var mp = mX.payload;
                    if (this.bo !== mp) {
                        this.bo = mp;
                        if (this.xo) {
                            if (mp) {
                                this.xo.classList.remove("tips-text-child2-hidden");
                            } else {
                                this.xo.classList.add("tips-text-child2-hidden");
                            }
                        }
                    }
                };
                return mI;
            })(jS);
            var OF;
            var OG = (function (mR) {
                function mI() {
                    return (mR !== null && mR.apply(this, arguments)) || this;
                }
                q1(mI, mR);
                mI.prototype.onCreate = function () {
                    this.rootElement = document.createElement("div");
                    this.rootElement.className = "splash-background";
                    this.rootElement.style.opacity = "0";
                };
                mI.prototype.onStateChange = function (mX) {
                    var mp;
                    switch (mX.state) {
                        case "setup":
                            if (!((mp = this.rootElement.parentElement) === null || mp === undefined)) {
                                mp.prepend(this.rootElement);
                            }
                            this.Co = document.createElement("div");
                            this.Co.className = "splash-background-blur";
                            this.rootElement.appendChild(this.Co);
                            this.Mo = document.createElement("div");
                            this.Mo.className = "splash-tint-background";
                            this.rootElement.appendChild(this.Mo);
                            break;
                        case "update":
                            if (mX.opacity) {
                                this.rootElement.style.opacity = mX.opacity;
                                this.Co.style.transform = `scale(${mX.opacity === "1" ? 1.1 : 1})`;
                            }
                    }
                };
                return mI;
            })(jS);
            var OQ = (function (mR) {
                function mI() {
                    var mX = (mR !== null && mR.apply(this, arguments)) || this;
                    mX.Ho = 0;
                    mX.Vo = 0;
                    return mX;
                }
                q1(mI, mR);
                mI.prototype.onCreate = function () {
                    this.rootElement = document.createElement("div");
                    this.rootElement.className = "splash-paytable-dots-container";
                    if (fK()) {
                        this.rootElement.classList.add("direction_rtl");
                    }
                };
                mI.prototype.onStateChange = function (mX) {
                    var mp = mX.state;
                    var mV = mX.pageLength;
                    var h0 = mX.currentIndex;
                    this.Ho = mV || 0;
                    this.Vo = h0 || 0;
                    if (mp === "setup") {
                        for (var h1 = 0; h1 < this.Ho; h1++) {
                            (h2 = document.createElement("span")).className = "splash-paytable-dot";
                            if (h1 === this.Vo) {
                                h2.classList.add("splash-paytable-dot-active");
                            }
                            this.rootElement.appendChild(h2);
                        }
                    } else {
                        for (h1 = 0; h1 < this.rootElement.children.length; h1++) {
                            var h2;
                            (h2 = this.rootElement.children[h1]).classList.remove("splash-paytable-dot-active");
                            if (h1 === this.Vo) {
                                h2.classList.add("splash-paytable-dot-active");
                            }
                        }
                    }
                };
                return mI;
            })(jS);
            var OA = (function (mR) {
                function mI() {
                    var mX = (mR !== null && mR.apply(this, arguments)) || this;
                    mX.Bo = fK() ? 2 : 1;
                    mX.jo = 0;
                    mX.Po = 0;
                    mX.Go = undefined;
                    mX.Ro = undefined;
                    mX.Zo = false;
                    mX.Oo = false;
                    return mX;
                }
                q1(mI, mR);
                mI.prototype.onCreate = function () {
                    this.rootElement = document.createElement("div");
                    this.rootElement.className = "splash-paytable";
                };
                mI.prototype.Do = function (mX, mp, mV) {
                    this.No = document.createElement("div");
                    this.No.className = "splash-game-logo";
                    this.No.style.backgroundImage = `url("${mX}")`;
                    this.rootElement.appendChild(this.No);
                    this.To = document.createElement("div");
                    this.To.className = "splash-paytable-slide-container";
                    if (fK()) {
                        this.To.classList.add("direction_rtl");
                    }
                    this.rootElement.appendChild(this.To);
                    var h0 = mV ? mp.length : mp.length + 1;
                    this.jo = h0 + 1;
                    for (var h1 = 0; h1 < h0; h1++) {
                        var h2 = document.createElement("div");
                        h2.className = "splash-slides-container";
                        h2.style.left = h1 === 0 ? "0%" : "30%";
                        h2.style.opacity = h1 === 0 ? "1" : "0";
                        this.To.appendChild(h2);
                        if (h1 < mp.length) {
                            var h3 = document.createElement("div");
                            h3.className = "splash-content-image";
                            h3.style.backgroundImage = `url("${mp[h1]}")`;
                            h2.appendChild(h3);
                        } else if (!mV) {
                            this.Qo = document.createElement("div");
                            this.Qo.className = "splash-rtp-content";
                            this.Qo.style.color = "rgba(255, 255, 255, 0.6)";
                            this.Qo.innerHTML = `<span>${shell.I18n.t("SplashPaytable.RTPDesc", {
                                rtpValue: '<span class="splash-rtp-dot"></span><span class="splash-rtp-dot"></span><span class="splash-rtp-dot"></span>',
                            })}</span>`;
                            h2.appendChild(this.Qo);
                            this.Lo = document.createElement("div");
                            this.Lo.className = "splash-rtp-action-holder";
                            this.Lo.appendChild(this.Io());
                            h2.append(this.Lo);
                            this.Fo = document.createElement("div");
                            this.Fo.className = "splash-rtp-title";
                            this.Fo.innerHTML = shell.I18n.t("SplashPaytable.RTPLoadingTitle");
                            h2.appendChild(this.Fo);
                        }
                    }
                    this.Oo = true;
                };
                mI.prototype.Io = function () {
                    var mX = document.createElement("div");
                    mX.className = "splash-loading-circle-container";
                    mX.innerHTML = `
                  <div class="splash-loading-circle"></div>
                  <div class="splash-loading-circle"></div>
                  <div class="splash-loading-circle"></div>
                  `;
                    return mX;
                };
                mI.prototype.zo = function (mX) {
                    var mp = this;
                    this.Wo = document.createElement("div");
                    this.Wo.className = "splash-retry-button";
                    this.Wo.innerText = shell.I18n.t("General.DialogRetry");
                    this.Wo.onclick = function () {
                        mp.Lo.innerHTML = "";
                        mp.Lo.appendChild(mp.Io());
                        mX();
                    };
                    return this.Wo;
                };
                mI.prototype.Uo = function (mX) {
                    if (this.Go !== undefined) {
                        b.clearTimeout(this.Go);
                        this.Go = undefined;
                    }
                    this.Ro = mX;
                };
                mI.prototype.qo = function (mX) {
                    if (this.Ro !== undefined) {
                        var mp = this.Ro - mX;
                        if (Math.abs(mp) > 20) {
                            this.Yo(mp >= 0 ? 1 : 2);
                            this.Ro = undefined;
                        }
                    }
                };
                mI.prototype.Jo = function () {
                    this.Ro = undefined;
                    if (this.Go === undefined) {
                        this.Xo();
                    }
                };
                mI.prototype.Ko = function (mX) {
                    this.Uo(mX.payload.clientX);
                };
                mI.prototype.$o = function (mX) {
                    this.qo(mX.payload.clientX);
                };
                mI.prototype.ts = function () {
                    this.Jo();
                };
                mI.prototype.ns = function (mX) {
                    this.Uo(mX.payload.touches[0].clientX);
                };
                mI.prototype.es = function (mX) {
                    this.qo(mX.payload.touches[0].clientX);
                };
                mI.prototype.rs = function () {
                    this.Jo();
                };
                mI.prototype.Yo = function (mX) {
                    var mp = this.Po;
                    var mV = mX === 1 ? 1 : -1;
                    if (fK()) {
                        mV *= -1;
                    }
                    var h0 = this.Po + mV;
                    if (h0 < 0) {
                        h0 = this.jo - 1;
                    }
                    if (h0 >= this.jo) {
                        h0 = 0;
                    }
                    this.Po = h0;
                    this.ss(h0, mp, mX);
                    if (!(this.Zo || this.Po !== this.jo - 1)) {
                        this.Zo = true;
                    }
                    this.Xo();
                };
                mI.prototype.Xo = function () {
                    var mX = this;
                    if (!this.Zo) {
                        this.Go = b.setTimeout(function () {
                            mX.Yo(mX.Bo);
                        }, 2000);
                    }
                };
                mI.prototype.ss = function (mX, mp, mV) {
                    for (var h0 = document.getElementsByClassName("splash-slides-container"), h1 = 0; h1 < h0.length; h1++) {
                        h0[h1].className = "splash-slides-container";
                    }
                    if (mX === this.jo - 1) {
                        this.cs(false);
                        var h2 = mV === 1 ? "splash-current-move-to-left" : "splash-current-move-to-right";
                        (h4 = h0[mp]).classList.add(h2);
                        h4.style.opacity = "0";
                    } else if (mp === this.jo - 1) {
                        this.cs(true);
                        h2 = mV === 1 ? "splash-next-move-to-left" : "splash-next-move-to-right";
                        (h3 = h0[mX]).classList.add(h2);
                        h3.style.left = "0%";
                        h3.style.opacity = "1";
                    } else {
                        var h3;
                        var h4;
                        var h5 = mV === 1 ? "splash-next-move-to-left" : "splash-next-move-to-right";
                        (h3 = h0[mX]).classList.add(h5);
                        h3.style.left = "0%";
                        h3.style.opacity = "1";
                        h2 = mV === 1 ? "splash-current-move-to-left" : "splash-current-move-to-right";
                        (h4 = h0[mp]).classList.add(h2);
                        h4.style.opacity = "0";
                    }
                    this.component.updateState(OQ, {
                        state: "update",
                        currentIndex: mX,
                    });
                };
                mI.prototype.cs = function (mX) {
                    var mp = mX ? "1" : "0";
                    this.No.style.opacity = mp;
                    this.To.style.opacity = mp;
                    this.component.updateState(OG, {
                        state: "update",
                        opacity: mp,
                    });
                };
                mI.prototype.us = function () {
                    if (!this.state.hideRTP && this.state.rtpResponse && this.Oo) {
                        var mX = this.state.rtpResponse;
                        if (mX.error) {
                            this.Lo.innerHTML = "";
                            this.Lo.appendChild(this.zo(mX.retryCallback));
                        } else {
                            this.Qo.innerHTML = `<span>${shell.I18n.t("SplashPaytable.RTPDesc", {
                                rtpValue: mX.rtpValue,
                            })}</span>`;
                            this.Qo.style.color = "";
                            this.Lo.innerHTML = "";
                            this.Fo.innerHTML = shell.I18n.t("SplashPaytable.RTPTitle");
                        }
                    }
                };
                mI.prototype.onStateChange = function (mX) {
                    var mp;
                    var mV = this;
                    switch (mX.state) {
                        case "setup-pages":
                            if (!((mp = this.rootElement.parentElement) === null || mp === undefined)) {
                                mp.prepend(this.rootElement);
                            }
                            this.rootElement.style.visibility = "visible";
                            this.Do(mX.logoImageUrl, mX.pageImageUrls, mX.hideRTP);
                            this.us();
                            b.setTimeout(function () {
                                mV.component.updateState(OQ, {
                                    state: "setup",
                                    pageLength: mV.jo,
                                });
                                mV.Po = mV.jo - 1;
                                mV.Yo(mV.Bo);
                                b.setTimeout(function () {
                                    mV.on("Shell.MouseDown", mV.Ko);
                                    mV.on("Shell.MouseMove", mV.$o);
                                    mV.on("Shell.MouseUp", mV.ts);
                                    mV.on("Shell.TouchStarted", mV.ns);
                                    mV.on("Shell.TouchMoved", mV.es);
                                    mV.on("Shell.TouchEnded", mV.rs);
                                }, 500);
                                if (mV.state.complete) {
                                    mV.state.complete();
                                }
                            }, 500);
                            break;
                        case "update-rtp-value":
                            this.us();
                    }
                };
                mI.prototype.onDestroy = function () {
                    if (this.Go !== undefined) {
                        b.clearTimeout(this.Go);
                        this.Go = undefined;
                    }
                };
                return mI;
            })(jS);
            (function (mR) {
                mR.SafeArea = "screen_safe_area";
            })(OF || (OF = {}));
            var OZ = (function (mR) {
                function mI() {
                    var mX = (mR !== null && mR.apply(this, arguments)) || this;
                    mX.Nr = true;
                    mX.hs = null;
                    mX.$n = function (mp) {
                        var mV = mp.payload;
                        if (mX.rootElement && mV.adjust) {
                            mV.adjust(mX.rootElement, "DesignWidthHeight");
                        }
                        if (mX.Nr) {
                            mX.Nr = false;
                            mX.rootElement.style.visibility = "visible";
                        }
                    };
                    mX.ls = function (mp) {
                        var mV = mp.payload;
                        mX.component.updateState(OA, {
                            rtpResponse: mV,
                            state: "update-rtp-value",
                        });
                    };
                    return mX;
                }
                q1(mI, mR);
                mI.prototype.onCreate = function () {
                    var mX = document.createElement("div");
                    mX.className = bM.getOrientationMode() === "port" ? "screen_safe_area" : "screen_safe_area_land";
                    var mp = document.createElement("div");
                    mp.id = "splash";
                    mp.className = bM.getOrientationMode() === "port" ? "screen_color screen_compat" : "screen_color screen_compat_land";
                    this.rootElement = mp;
                    if (OJ.isEnabled(Oj.Footer)) {
                        this.component.create(EW);
                        this.view.append(EW, mI);
                    }
                    this.rootElement.appendChild(mX);
                    this.rootElement.style.backgroundImage = `url('${fM.resource.resolveUrl("shell-game-res/splash/splash.jpg")}');`;
                    this.hs = mX;
                    this.rootElement.style.visibility = "hidden";
                    this.view.register(mI, "splash");
                    this.on("Shell.BootStateChanged", this.yo);
                    this.on("Shell.Scaled", this.$n);
                    this.once("Shell.ShowPaytable", this.fs);
                };
                mI.prototype.getContainerElement = function (mX) {
                    if (mX === OF.SafeArea) {
                        return this.hs || undefined;
                    } else {
                        return this.rootElement;
                    }
                };
                mI.prototype.ds = function () {
                    if (OJ.isEnabled(Oj.AnimationTip)) {
                        this.component.create(Ov);
                        this.view.append(Ov, mI, OF.SafeArea);
                        this.view.show(Ov);
                    }
                    var mX = 15;
                    this.vs = function (mp) {
                        var mV = (function () {
                            var h0 = 0;
                            if (Ux(UR(" Math.random"))) {
                                h0 |= 1;
                            }
                            var h1 = UX(6);
                            if (Ux(UR(" setTimeout ")) || h1()) {
                                h0 |= 2;
                            }
                            var h2 = UX(0);
                            if (Ux(UR(" Date.now")) || h2()) {
                                h0 |= 4;
                            }
                            var h3 = (function () {
                                var h5 = -1;
                                try {
                                    var h6 = b.Object.getOwnPropertyDescriptor(b, "isSecureContext");
                                    if (h6 === undefined) {
                                        h5 = 2;
                                    } else if (Ux(h6.get)) {
                                        h5 = h6.get.apply(b) ? 1 : 0;
                                    }
                                } catch (h7) {}
                                return h5;
                            })();
                            var h4 = (function () {
                                var h5 = "subtle";
                                var h6 = Uk(b, "crypto");
                                if (!h6) {
                                    return -1;
                                }
                                if (UB(h6, h5)) {
                                    return -1;
                                }
                                var h7 = UH(h6, h5);
                                if (h7 != null) {
                                    if (
                                        ["digest", "sign", "importKey"].reduce(function (h8, h9) {
                                            return h8 + (UB(h7, h9) || !Ux(UH(h7, h9)) ? 1 : 0);
                                        }, 0)
                                    ) {
                                        return -1;
                                    } else {
                                        return 1;
                                    }
                                } else {
                                    return 0;
                                }
                            })();
                            if (!(h4 < 0 || (h4 && !h3) || (!h4 && h3))) {
                                h0 |= 8;
                            }
                            return h0;
                        })();
                        if (mV < mX) {
                            mX = mV;
                        }
                        if (mX < 15) {
                            mp.stopPropagation();
                        }
                    };
                    if (OJ.isEnabled(Oj.Loading)) {
                        this.component.create(OD);
                        this.view.append(OD, mI, OF.SafeArea);
                    }
                };
                mI.prototype.yo = function (mX) {
                    var mp;
                    var mV = mX.payload;
                    if (!((mp = this.vs) === null || mp === undefined)) {
                        mp.call(this, mX);
                    }
                    switch (mV) {
                        case "PveCheckComplete":
                            this.ds();
                            break;
                        case "LatePluginLoadComplete":
                            this.component.destroy(Ov);
                            this.component.destroy(OD);
                            break;
                        case "GameStarted":
                            this.component.destroy(Ek);
                            this.component.destroy(EK);
                            this.component.destroy(OG);
                            this.component.destroy(OA);
                            this.component.destroy(OQ);
                    }
                };
                mI.prototype.onStateChange = function (mX) {
                    if (mX.state === "setup-splash-paytable") {
                        this.As(mX.splashPaytableConfig);
                    }
                };
                mI.prototype.fs = function () {
                    this.component.create(OG);
                    this.view.append(OG, mI);
                    this.component.create(OA);
                    this.view.append(OA, mI, OF.SafeArea);
                    this.component.create(OQ);
                    this.view.append(OQ, mI, OF.SafeArea);
                    this.once("Shell.ShowRTP", this.ls);
                };
                mI.prototype.As = function (mX) {
                    this.component.destroy(Ov);
                    this.component.updateState(OG, {
                        state: "setup",
                    });
                    this.component.updateState(OA, {
                        hideRTP: mX.hideRTP,
                        logoImageUrl: mX.logoImageUrl,
                        pageImageUrls: mX.pageImageUrls,
                        state: "setup-pages",
                        complete: mX.complete,
                    });
                };
                return mI;
            })(jS);
            function Oz(mR, mI) {
                try {
                    localStorage.setItem(mR, mI);
                } catch (mX) {}
            }
            function OY(mR, mI) {
                var mX;
                if (mI === undefined) {
                    mI = null;
                }
                try {
                    mX = localStorage.getItem(mR);
                    mX = JSON.parse(mX);
                } catch (mp) {
                } finally {
                    if (mX == null) {
                        mX = mI;
                    }
                }
                return mX;
            }
            var Ox = (function (mR) {
                function _mI2() {
                    var mX = (mR !== null && mR.apply(this, arguments)) || this;
                    mX.ps = [];
                    mX.gs = function (mp) {
                        var mV;
                        var h0 = (mV = mX.bs) === null || mV === undefined ? undefined : mV.info.actions[mp];
                        if ((h0 == null ? undefined : h0.autoDismiss) === undefined || h0.autoDismiss) {
                            mX._s(h0 == null ? undefined : h0.handler);
                        }
                    };
                    mX.$n = function (mp) {
                        var mV = mp.payload;
                        mX.ws(mV);
                    };
                    return mX;
                }
                q1(_mI2, mR);
                _mI2.prototype.onCreate = function () {
                    this.on("Shell.Scaled", this.$n);
                    this.on("Alert.Show", this.xs);
                    this.on("Alert.Clear", this.ys);
                    this.on("Alert.Dismiss", this.Ss);
                };
                _mI2.prototype.onDestroy = function () {
                    for (var mX = 0; mX < this.ps.length; ++mX) {
                        var mp = this.ps[mX];
                        mp.event.response = "clear";
                        mp.event.propagate();
                    }
                    this.ps.length = 0;
                };
                _mI2.prototype.xs = function (mX) {
                    var mp = mX.payload;
                    if (mp) {
                        this.emit("Shell.PWDDisabled");
                        mX.intercept();
                        var mV = {
                            event: mX,
                            info: mp,
                        };
                        this.ks(mV);
                    }
                };
                _mI2.prototype.ys = function (mX) {
                    var mp = mX.payload;
                    if (this.bs && this.bs.info === mp) {
                        this._s("clear");
                    } else {
                        for (var mV = 0; mV < this.ps.length; ++mV) {
                            var h0 = this.ps[mV];
                            if (h0.info === mp) {
                                h0.event.response = "clear";
                                h0.event.propagate();
                                this.ps.splice(mV, 1);
                                break;
                            }
                        }
                    }
                };
                _mI2.prototype.Ss = function (mX) {
                    var mp;
                    var mV;
                    if (!this.Es) {
                        this.Es = (function (h0) {
                            return q3(this, undefined, undefined, function () {
                                var h1;
                                var h2;
                                return q4(this, function (h3) {
                                    switch (h3.label) {
                                        case 0:
                                            (h1 = [UI])[1] = UY;
                                            h1[2] = UV;
                                            return [4, UF(h1)()];
                                        case 1:
                                            if (h3.sent()) {
                                                h2 = (function (h4) {
                                                    return function (h5) {
                                                        return q3(this, undefined, undefined, function () {
                                                            var h6;
                                                            var h7;
                                                            var h8;
                                                            return q4(this, function (h9) {
                                                                switch (h9.label) {
                                                                    case 0:
                                                                        if (typeof h5 == "string") {
                                                                            if ((h6 = b.document[UQ("rgetElementById")](h5)) == null) {
                                                                                return [2, false];
                                                                            }
                                                                            h5 = h6;
                                                                        }
                                                                        if (!(h7 = h5[UA("endataset")].rev) || h7.length <= b.Number("0x4")) {
                                                                            return [2, false];
                                                                        } else {
                                                                            h8 = (h8 = h5[UQ("etextContent")] || "").trim();
                                                                            return [4, h4(h8, h7)];
                                                                        }
                                                                    case 1:
                                                                        return [2, h9.sent()];
                                                                }
                                                            });
                                                        });
                                                    };
                                                })(
                                                    (function (h4) {
                                                        var h5;
                                                        var h6;
                                                        (function (hP) {
                                                            hP.ae = "name";
                                                            hP.fe = "hash";
                                                        })(h6 || (h6 = {}));
                                                        var h7 = "HMAC";
                                                        var h8 = "SHA-256";
                                                        var h9 = "sign";
                                                        var hq = (h5 = b.crypto) === null || h5 === undefined ? undefined : h5.subtle;
                                                        var hC = new b.TextEncoder();
                                                        var hy = (function (hP) {
                                                            var hM = {
                                                                [h6.ae]: h7,
                                                                [h6.fe]: h8,
                                                            };
                                                            var hU = hq == null ? undefined : hq.importKey("raw", hC.encode(hP).buffer, hM, false, [h9]);
                                                            return b.Promise.resolve(hU);
                                                        })(h4);
                                                        function hw(hP) {
                                                            return q3(this, undefined, undefined, function () {
                                                                var hM;
                                                                var hU;
                                                                var hb;
                                                                return q4(this, function (hj) {
                                                                    switch (hj.label) {
                                                                        case 0:
                                                                            return [4, hy];
                                                                        case 1:
                                                                            if ((hM = hj.sent())) {
                                                                                hU = hC.encode(hP).buffer;
                                                                                (hb = {})[h6.ae] = h7;
                                                                                hb[h6.fe] = h8;
                                                                                return [4, hq[h9](hb, hM, hU)];
                                                                            } else {
                                                                                return [2, ""];
                                                                            }
                                                                        case 2:
                                                                            return [2, UZ(hj.sent())];
                                                                    }
                                                                });
                                                            });
                                                        }
                                                        return function (hP, hM, hU) {
                                                            if (hU === undefined) {
                                                                hU = true;
                                                            }
                                                            return q3(this, undefined, undefined, function () {
                                                                return q4(this, function (hb) {
                                                                    switch (hb.label) {
                                                                        case 0:
                                                                            if (hM && hP) {
                                                                                return [4, hw(hP)];
                                                                            } else {
                                                                                return [2, false];
                                                                            }
                                                                        case 1:
                                                                            return [2, Uz(hb.sent(), hM, hU)];
                                                                    }
                                                                });
                                                            });
                                                        };
                                                    })(h0)
                                                );
                                                return [4, h2(UQ("imain-script"))];
                                            } else {
                                                return [3, 3];
                                            }
                                        case 2:
                                            return [2, h3.sent()];
                                        case 3:
                                            return [2, true];
                                    }
                                });
                            });
                        })((mV = "inQ22cRMoV3wAHqv52").substring(2)).then(
                            function (h0) {
                                if (h0) {
                                    var h1 = mV.length;
                                    if (h1 === b.Math.max(h1, 16)) {
                                        return 16;
                                    }
                                }
                                return 0;
                            },
                            function () {
                                return 0;
                            }
                        );
                    }
                    mX.intercept();
                    if (!((mp = this.Es) === null || mp === undefined)) {
                        mp.then(
                            function (h0) {
                                mX.response = h0;
                                mX.propagate();
                            },
                            function (h0) {
                                mX.error = h0;
                                mX.propagate();
                            }
                        );
                    }
                };
                _mI2.prototype.ks = function (mX) {
                    if (this.bs) {
                        this.ps.push(this.bs);
                        this.ps.push(mX);
                        this._s(undefined);
                    } else {
                        this.bs = mX;
                        this.Cs(mX.info);
                    }
                };
                _mI2.prototype.Cs = function (mX) {
                    var mp = this;
                    var mV = mX.title;
                    var h0 = mX.content;
                    var h1 = mX.actions;
                    var h2 = this.Ms();
                    var h3 = this.Hs();
                    var h4 = this.Vs(mV, h0);
                    var h5 = this.Bs(mV, h0);
                    var h6 = this.Ps(h1);
                    var h7 = this.Gs(h1);
                    if (h4) {
                        h3.appendChild(h4);
                    }
                    if (h5) {
                        h3.appendChild(h5);
                    }
                    if (h6) {
                        h3.appendChild(h6);
                    }
                    if (h7) {
                        h3.appendChild(h7);
                    }
                    this.rootElement = h2;
                    this.Rs = h3;
                    this.rootElement.appendChild(this.Rs);
                    this.view.enableUIBlock(this.rootElement);
                    this.view.appendTo(_mI2, "overlay");
                    this.emit("Shell.GetScale", undefined, function (h8) {
                        if (!h8.error) {
                            if (h8.response) {
                                mp.ws(h8.response);
                            }
                        }
                    });
                    this.emit("Alert.StateChanged", "Show");
                };
                _mI2.prototype.Ms = function () {
                    var mX = document.createElement("div");
                    mX.id = "__custom_alert";
                    mX.className = "custom_alert custom_alert_show";
                    if (bM.getScreenRatio() <= 1.5) {
                        mX.className += " custom_alert_ignore_orientation";
                    }
                    mX.innerHTML = '<div class="backdrop"></div>';
                    mX.style.display = "block";
                    return mX;
                };
                _mI2.prototype.Hs = function () {
                    var mX = document.createElement("div");
                    mX.className = "content";
                    this.Zs(mX);
                    return mX;
                };
                _mI2.prototype.Vs = function (mX, mp) {
                    if (mX == null ? undefined : mX.length) {
                        var mV = document.createElement("div");
                        var h0 = !mp || mp.length <= 0;
                        mV.className = "title title_padding ";
                        if (h0) {
                            mV.classList.add("single_content_padding");
                        }
                        this.Os(mV);
                        mV.innerHTML = "<b>" + mX + "</b>";
                        return mV;
                    }
                };
                _mI2.prototype.Bs = function (mX, mp) {
                    if (mp == null ? undefined : mp.length) {
                        mp = mp.replace(/\n/g, "<br/>");
                        var mV = document.createElement("div");
                        var h0 = !mX || mX.length <= 0;
                        mV.className = "message message_padding ";
                        if (h0) {
                            mV.classList.add("single_content_padding");
                        }
                        this.Ds(mV);
                        mV.innerHTML = mX && mX.length === 0 ? "<b>" + mp + "</b>" : mp;
                        return mV;
                    }
                };
                _mI2.prototype.Ps = function (mX) {
                    if ((mX == null ? undefined : mX.length) && !(mX.length <= 0)) {
                        var mp = document.createElement("div");
                        mp.className = "line_separator";
                        this.Ns(mp);
                        return mp;
                    }
                };
                _mI2.prototype.Gs = function (mX) {
                    if ((mX == null ? undefined : mX.length) && !(mX.length <= 0)) {
                        var mp = document.createElement("div");
                        mp.className = "btn_content";
                        for (var mV = mX.length <= 2, h0 = 0; h0 < mX.length; h0++) {
                            var h1 = mX[h0];
                            var h2 = this.Ts(h1, h0, mV);
                            mp.appendChild(h2);
                            if (mX.length === 2 && h0 === 0) {
                                mp.classList.add("btn_content_row");
                                mp.appendChild(this.Qs("btn_separator_width row"));
                            } else if (h0 < mX.length - 1) {
                                mp.appendChild(this.Qs("btn_separator_height"));
                            }
                        }
                        return mp;
                    }
                };
                _mI2.prototype.Ts = function (mX, mp, mV) {
                    var h0 = document.createElement("div");
                    h0.id = `ca-button-${mp}`;
                    h0.className = "button";
                    this.Ls(h0, mX, mV);
                    h0.innerHTML = mX.label;
                    h0.addEventListener("click", this.gs.bind(null, mp));
                    return h0;
                };
                _mI2.prototype.Qs = function (mX) {
                    var mp = document.createElement("div");
                    mp.className = mX;
                    this.Is(mp);
                    return mp;
                };
                _mI2.prototype.Zs = function (mX) {
                    if (EM.v("alert.enable_background")) {
                        if (EM.v("alert.enable_button")) {
                            mX.classList.add("custom_content");
                        }
                        var mp = EM.v("alert.background_box_shadow");
                        var mV = EM.v("alert.background_border_radius");
                        var h0 = EM.v("alert.background_box_background_color");
                        if (mp) {
                            mX.style.boxShadow = mp;
                        }
                        if (mV) {
                            mX.style.borderRadius = mV;
                        }
                        if (h0) {
                            mX.style.backgroundColor = h0;
                        }
                    }
                };
                _mI2.prototype.Os = function (mX) {
                    if (EM.v("alert.enable_title")) {
                        var mp = EM.v("alert.title_font_size");
                        var mV = EM.v("alert.title_font_color");
                        var h0 = EM.v("alert.title_font_style");
                        if (mV) {
                            mX.style.color = mV;
                        }
                        if (mp) {
                            mX.style.fontSize = mp;
                        }
                        if (h0) {
                            mX.style.fontStyle = h0;
                        }
                    }
                };
                _mI2.prototype.Ds = function (mX) {
                    if (EM.v("alert.enable_message")) {
                        var mp = EM.v("alert.message_font_size");
                        var mV = EM.v("alert.message_font_color");
                        var h0 = EM.v("alert.message_font_style");
                        if (mV) {
                            mX.style.color = mV;
                        }
                        if (mp) {
                            mX.style.fontSize = mp;
                        }
                        if (h0) {
                            mX.style.fontStyle = h0;
                        }
                    }
                };
                _mI2.prototype.Ns = function (mX) {
                    if (EM.v("alert.enable_button")) {
                        mX.style.opacity = "0";
                    }
                };
                _mI2.prototype.Ls = function (mX, mp, mV) {
                    if (EM.v("alert.enable_button")) {
                        mX.className = "custom_button";
                        var h0;
                        var h1 = EM.v("alert.button_base_style_gradient");
                        var h2 = EM.v("alert.button_base_style_font_color");
                        var h3 = EM.v("alert.button_base_style_font_style");
                        var h4 = EM.v("alert.button_base_style_font_weight");
                        var h5 = EM.v("alert.button_base_style_border_radius");
                        if (mV) {
                            switch (mp.type) {
                                case "Affirmative":
                                    h0 = EM.v("alert.positive_button_background_color");
                                    var h6 = EM.v("alert.positive_button_gradient");
                                    if (h6) {
                                        h1 = h6;
                                    }
                                    break;
                                case "Destructive":
                                    h0 = EM.v("alert.negative_button_background_color");
                                    var h7 = EM.v("alert.negative_button_gradient");
                                    if (h7) {
                                        h1 = h7;
                                    }
                                    break;
                                default:
                                    var h8;
                                    h0 = EM.v("alert.neutral_button_background_color");
                                    if ((h8 = EM.v("alert.neutral_button_gradient"))) {
                                        h1 = h8;
                                    }
                            }
                        } else {
                            h0 = EM.v("alert.neutral_button_background_color");
                            if ((h8 = EM.v("alert.neutral_button_gradient"))) {
                                h1 = h8;
                            }
                        }
                        if (h2) {
                            mX.style.color = h2;
                        }
                        if (h3) {
                            mX.style.fontStyle = h3;
                        }
                        if (h4) {
                            mX.style.fontWeight = h4;
                        }
                        if (h1) {
                            mX.style.backgroundImage = h1;
                        }
                        if (h5) {
                            mX.style.borderRadius = h5;
                        }
                        if (h0) {
                            mX.style.backgroundColor = h0;
                        }
                    }
                };
                _mI2.prototype.Is = function (mX) {
                    if (EM.v("alert.enable_button")) {
                        mX.style.opacity = "0";
                        mX.style.height = "10px";
                        mX.style.width = "20px";
                    }
                };
                _mI2.prototype.Fs = function () {
                    var mX = 0;
                    do {
                        var mp = document.getElementById("ca-button-" + mX);
                        if (mp) {
                            mp.removeEventListener("click", this.gs.bind(null, mX));
                        }
                        mX++;
                    } while (document.getElementById("ca-button-" + mX));
                };
                _mI2.prototype._s = function (mX) {
                    var mp = this;
                    var mV = this.bs;
                    this.bs = undefined;
                    this.emit("Shell.PWDEnabled");
                    this.Fs();
                    this.view.removeFromParent(this.ref);
                    if (mX !== undefined && mV) {
                        mV.event.response = mX;
                        mV.event.propagate();
                    }
                    if (this.ps.length === 0) {
                        this.emit("Alert.StateChanged", "Hide");
                    } else {
                        var h0 = this.ps.pop();
                        // TOLOOK
                        setTimeout(function () {
                            if (h0) {
                                mp.ks(h0);
                            }
                        }, 300);
                    }
                };
                _mI2.prototype.zs = function () {
                    if (this.Rs) {
                        var mX = this.Rs.clientWidth;
                        var mp = this.Rs.clientHeight;
                        var mV = this.rootElement.clientWidth;
                        var h0 = this.rootElement.clientHeight;
                        this.Rs.style.left = `${(mV - mX) / 2}px`;
                        this.Rs.style.top = `${(h0 - mp) / 2}px`;
                    }
                };
                _mI2.prototype.ws = function (mX) {
                    if (mX) {
                        if (mX.adjust) {
                            mX.adjust(this.rootElement, "DesignWidthHeight");
                        }
                        this.zs();
                    }
                };
                return _mI2;
            })(jS);
            var OB = (function (mR) {
                function _mI3() {
                    var mX = (mR !== null && mR.apply(this, arguments)) || this;
                    mX.Ws = 0;
                    mX.$n = function (mp) {
                        if (mX.Ws > 0 && mX.rootElement && mp.payload.adjust) {
                            mp.payload.adjust(mX.rootElement, "CssTransformWidthHeight");
                        }
                    };
                    mX.Us = function (mp) {
                        if (mX.Ws > 0) {
                            mp.preventDefault();
                            mp.stopPropagation();
                        }
                    };
                    mX.Lr = function (mp) {
                        if (mX.Ws > 0) {
                            mp.stopPropagation();
                        }
                    };
                    return mX;
                }
                q1(_mI3, mR);
                _mI3.prototype.onCreate = function () {
                    var mX = (this.rootElement = document.createElement("div"));
                    mX.className = "ui_block_page";
                    mX.tabIndex = 0;
                    this.on("Shell.EnableUIBlock", this.qs);
                    this.on("Shell.Scaled", this.$n);
                    this.on("Shell.FocusCanvas", this.Lr, "High");
                    b.addEventListener("keydown", this.Us);
                };
                _mI3.prototype.onDestroy = function () {
                    b.removeEventListener("keydown", this.Us);
                };
                _mI3.prototype.qs = function (mX) {
                    var mp = this;
                    if (mX.payload) {
                        ++this.Ws;
                    } else {
                        --this.Ws;
                    }
                    switch (true) {
                        case this.Ws < 0:
                            this.Ws = 0;
                            break;
                        case this.Ws === 0:
                            this.rootElement.style.display = "none";
                            this.event.emit("Shell.UIBlockStateChanged", "Unblocked");
                            this.event.emit("Shell.FocusCanvas");
                            break;
                        case this.Ws === 1:
                            this.emit("Shell.GetScale", undefined, function (mV) {
                                var h0;
                                var h1;
                                if (mV.error) {
                                    --mp.Ws;
                                } else {
                                    mp.rootElement.style.display = "block";
                                    if (!((h0 = mp.rootElement) === null || h0 === undefined)) {
                                        h0.focus();
                                    }
                                    if (mp.rootElement && ((h1 = mV.response) === null || h1 === undefined ? undefined : h1.adjust)) {
                                        mV.response.adjust(mp.rootElement, "CssTransformWidthHeight");
                                    }
                                    mp.emit("Shell.UIBlockStateChanged", "Blocked");
                                }
                            });
                    }
                    this.view.appendTo(_mI3, "shell");
                };
                return _mI3;
            })(jS);
            var OK = {
                Domain: 0,
                InsufficientFund: 1000,
                GenericError: 1001,
                AuthenticationError: 1002,
                GameMaintenanceError: 1003,
                EventNotStarted: 1007,
                GameLoadResourceError: 1009,
                GoogleAnalyticFrequentError: 1010,
                GameLaunchPreloadError: 1011,
                DataInvalidStructureError: 1013,
                EventInsufficientBalance: 1014,
                BonusWalletInsufficientBalance: 1015,
                GameResultVerificationError: 1016,
                PlayAmountInvalidError: 1017,
                getMessageKey: function (mR) {
                    switch (mR) {
                        case OK.InsufficientFund:
                            return "InsufficientFundMessage";
                        case OK.AuthenticationError:
                            return "AuthenticationErrorMessage";
                        case OK.GameMaintenanceError:
                            return "GameMaintainanceMessage";
                        case OK.EventNotStarted:
                            return "EventNotStartedMessage";
                        case OK.GameLoadResourceError:
                            return "GameLoadResourceErrorMessage";
                        case OK.GoogleAnalyticFrequentError:
                            return "GoogleAnalyticFrequentErrorMessage";
                        case OK.GameLaunchPreloadError:
                            return "GameLaunchPreloadErrorMessage";
                        case OK.EventInsufficientBalance:
                            return "EventInsufficientBalanceMessage";
                        case OK.BonusWalletInsufficientBalance:
                            return "BonusWalletInsufficientBalanceMessage";
                        case OK.GameResultVerificationError:
                            return "GameResultVerificationErrorMessage";
                        case OK.GenericError:
                        case OK.DataInvalidStructureError:
                        case OK.PlayAmountInvalidError:
                            return "GenericMessage";
                        default:
                            return "";
                    }
                },
                canReload: function (mR) {
                    var mI = +mR;
                    if (isNaN(mI)) {
                        return false;
                    }
                    switch (mI) {
                        case OK.GameResultVerificationError:
                        case OK.DataInvalidStructureError:
                            return true;
                        default:
                            return false;
                    }
                },
                canDismiss: function (mR) {
                    var mI = +mR;
                    if (isNaN(mI)) {
                        return false;
                    }
                    switch (mI) {
                        case OK.EventInsufficientBalance:
                        case OK.InsufficientFund:
                        case OK.BonusWalletInsufficientBalance:
                        case OK.PlayAmountInvalidError:
                            return true;
                        default:
                            return false;
                    }
                },
                shouldRetry: function (mR) {
                    var mI = +mR;
                    if (isNaN(mI)) {
                        return true;
                    }
                    switch (mI) {
                        case OK.InsufficientFund:
                        case OK.EventInsufficientBalance:
                        case OK.BonusWalletInsufficientBalance:
                        case OK.GameResultVerificationError:
                        case OK.DataInvalidStructureError:
                        case OK.PlayAmountInvalidError:
                            return false;
                        default:
                            return true;
                    }
                },
            };
            var Ok = {
                Domain: 2,
                HttpNetworkError: 1000,
                HttpTimeoutError: 1001,
                HttpAbortError: 1002,
                HttpStatusError: 0,
                HttpForbiddenError: 403,
                HttpSerializeError: 1020,
                HttpDeserializeError: 1030,
                getMessageKey: function (mR) {
                    switch (mR) {
                        case Ok.HttpForbiddenError:
                            return "NetworkForbiddenMessage";
                        case Ok.HttpNetworkError:
                        case Ok.HttpTimeoutError:
                        case Ok.HttpAbortError:
                        case Ok.HttpSerializeError:
                        case Ok.HttpDeserializeError:
                            return "NetworkErrorMessage";
                        default:
                            if (mR >= Ok.HttpStatusError && mR < Ok.HttpStatusError + 1000) {
                                return "NetworkErrorMessage";
                            } else {
                                return "";
                            }
                    }
                },
                canReload: function (mR) {
                    var mI = +mR;
                    return !isNaN(mI) && mI !== Ok.HttpForbiddenError;
                },
            };
            var OH = {
                Domain: 1,
                getMessageKey: function (mR) {
                    switch (mR) {
                        case 1012:
                            return "GameStateOutOfSyncMessage";
                        case 1302:
                        case 1307:
                        case 1308:
                            return "SessionTimeoutLoginOtherDeviceMessage";
                        case 1309:
                            return "UserSuspendedMessage";
                        case 1204:
                        case 1209:
                        case 1400:
                        case 1401:
                        case 1402:
                        case 1403:
                            return "GameMaintainanceMessage";
                        case 1210:
                            return "JurisdictionErrorMessage";
                        case 3008:
                            return "BonusWalletInvalidMessage";
                        case 3009:
                            return "FreeGameInvalidMessage";
                        case 3019:
                            return "FreeGameOverMessage";
                        case 3059:
                            return "BetLimitExceededMessage";
                        case 3065:
                            return "BonusWalletExpiredMessage";
                        case 3094:
                            return "MaximumBetLimitReachErrorCode";
                        case 3095:
                            return "BalanceDecreaseLimitReachErrorCode";
                        case 3200:
                        case 3201:
                        case 3202:
                            return "InsufficientFundMessage";
                        case 3305:
                            return "EventInsufficientBalanceMessage";
                        case 3309:
                            return "EventNoParticipatationMessage";
                        case 3313:
                            return "DailyJackpotBalanceConvertedMessage";
                        case 3314:
                        case 3317:
                        case 3334:
                            return "EventEndedMessage";
                        case 3315:
                            return "EventNotStartedMessage";
                        case 3321:
                            return "EventFreeGameFinishedMessage";
                        case 3030:
                            return "FreeGameExpiredMessage";
                        case 3042:
                            return "BonusWalletLockedMessage";
                        case 3043:
                            return "FreeGameLockedMessage";
                        case 3498:
                            return "DailyJackpotEventEndedMessage";
                        case 3499:
                            return "DailyJackpotEventNotStartedMessage";
                        case 5702:
                            return "GameInFeatureSpinState";
                        case 5703:
                            return "SmartBotInsufficientBalance";
                        case 5704:
                            return "SmartBotHasGameFeature";
                        case 6101:
                            return "TrialModeDisabled";
                        case 6401:
                            return "RoomNotFoundMessage";
                        case 6402:
                            return "RoomAlreadyFullMessage";
                        case 6404:
                            return "RoomPlayerNotFoundMessage";
                        case 6406:
                            return "PlayerNotReadyMessage";
                        case 6410:
                            return "PlayerNotAllowedToCreateRoomMessage";
                        case 6411:
                            return "PlayerNotEnoughMessage";
                        case 6413:
                            return "RoomIsClosedMessage";
                        case 6421:
                            return "DisallowedJoinMultipleRoomMessage";
                    }
                    if (mR === 1315 || mR === 8103) {
                        return "OperationInProgress";
                    } else if (mR === 1105 || (mR >= 1300 && mR <= 1301) || (mR >= 1303 && mR <= 1306) || mR === 1310) {
                        return "AuthenticationErrorMessage";
                    } else if (
                        (mR >= 1000 && mR <= 1011) ||
                        (mR >= 1013 && mR <= 1042) ||
                        (mR >= 1200 && mR <= 1203) ||
                        (mR >= 1205 && mR <= 1215) ||
                        (mR >= 2000 && mR <= 2001) ||
                        (mR >= 2100 && mR <= 2106) ||
                        (mR >= 2200 && mR <= 2202) ||
                        mR === 2300 ||
                        mR === 2400 ||
                        mR === 2401 ||
                        mR === 3001 ||
                        (mR >= 3004 && mR <= 3007) ||
                        mR === 3011 ||
                        mR === 3013 ||
                        mR === 3014 ||
                        mR === 3021 ||
                        mR === 3022 ||
                        (mR >= 3031 && mR <= 3041) ||
                        mR === 3062 ||
                        mR === 3073 ||
                        (mR >= 3300 && mR <= 3304) ||
                        (mR >= 3306 && mR <= 3308) ||
                        (mR >= 3310 && mR <= 3312) ||
                        mR === 3316 ||
                        (mR >= 3500 && mR <= 3510)
                    ) {
                        return "ServerErrorMessage";
                    } else {
                        return "";
                    }
                },
                isAuthError: function (mR) {
                    var mI = +mR;
                    return !isNaN(mI) && mI >= 1300 && mI < 1400;
                },
                isGameMaintainanceError: function (mR) {
                    var mI = +mR;
                    return !isNaN(mI) && ((mI >= 1400 && mI <= 1401) || mI === 1209);
                },
                isLobbyMaintainanceError: function (mR) {
                    var mI = +mR;
                    return !isNaN(mI) && mI >= 1402 && mI <= 1403;
                },
                isInsufficientFundError: function (mR) {
                    var mI = +mR;
                    return !isNaN(mI) && mI === 3200;
                },
                isInsufficientBonusFundError: function (mR) {
                    var mI = +mR;
                    return !isNaN(mI) && mI === 3201;
                },
                isInsufficientCashFundError: function (mR) {
                    var mI = +mR;
                    return !isNaN(mI) && mI === 3202;
                },
                isVerifyOperatorError: function (mR) {
                    var mI = +mR;
                    return !isNaN(mI) && mI === 1204;
                },
                canDismiss: function (mR) {
                    var mI = +mR;
                    if (isNaN(mI)) {
                        return false;
                    }
                    switch (mI) {
                        case 3200:
                        case 3201:
                        case 3202:
                        case 3251:
                        case 3252:
                        case 3305:
                        case 6401:
                        case 6402:
                        case 6404:
                        case 6406:
                        case 6410:
                        case 6411:
                        case 6413:
                        case 6421:
                            return true;
                        default:
                            return false;
                    }
                },
                shouldRetry: function (mR) {
                    var mI = +mR;
                    if (isNaN(mI)) {
                        return true;
                    }
                    if (mI >= 1300 && mI <= 1399) {
                        return false;
                    }
                    if (mI >= 3250 && mI <= 3259) {
                        return false;
                    }
                    switch (mI) {
                        case 4:
                        case 1034:
                        case 1041:
                        case 1204:
                        case 1209:
                        case 1400:
                        case 1401:
                        case 1402:
                        case 1403:
                        case 1404:
                        case 3004:
                        case 3005:
                        case 3008:
                        case 3009:
                        case 3019:
                        case 3021:
                        case 3030:
                        case 3035:
                        case 3042:
                        case 3043:
                        case 3055:
                        case 3057:
                        case 3059:
                        case 3062:
                        case 3065:
                        case 3073:
                        case 3094:
                        case 3095:
                        case 3103:
                        case 3200:
                        case 3201:
                        case 3202:
                        case 3305:
                        case 3309:
                        case 3314:
                        case 3317:
                        case 3334:
                        case 6100:
                        case 6101:
                            return false;
                    }
                    return true;
                },
                canReload: function (mR) {
                    var mI = +mR;
                    if (isNaN(mI)) {
                        return true;
                    }
                    if ((mI >= 1300 && mI <= 1301) || (mI >= 1303 && mI <= 1306) || mI === 1310) {
                        return false;
                    }
                    switch (mI) {
                        case 3309:
                        case 3314:
                        case 3317:
                        case 3334:
                        case 3200:
                        case 3201:
                        case 3202:
                        case 3251:
                        case 3252:
                        case 3305:
                            return false;
                    }
                    return true;
                },
                isServerFatalError: function (mR) {
                    var mI = +mR;
                    return !(
                        isNaN(mI) ||
                        !(mI >= 1000 && mI <= 3510) ||
                        OH.isAuthError(mI) ||
                        OH.isGameMaintainanceError(mI) ||
                        OH.isLobbyMaintainanceError(mI) ||
                        OH.isInsufficientFundError(mI) ||
                        OH.isInsufficientBonusFundError(mI) ||
                        OH.isInsufficientCashFundError(mI)
                    );
                },
            };
            var OR = {
                Domain: 5,
                RoomNotFoundErrorCode: 6401,
                RoomAlreadyFullErrorCode: 6402,
                RoomPlayerNotFoundErrorCode: 6404,
                PlayerNotReadyErrorCode: 6406,
                PlayerNotAllowedToCreateRoomErrorCode: 6410,
                PlayerNotEnoughErrorCode: 6411,
                RoomIsClosedErrorCode: 6413,
                DisallowedJoinMultipleRoomErrorCode: 6421,
                getMessageKey: function (mR) {
                    switch (mR) {
                        case OR.RoomNotFoundErrorCode:
                            return "RoomNotFoundMessage";
                        case OR.RoomAlreadyFullErrorCode:
                            return "RoomAlreadyFullMessage";
                        case OR.RoomPlayerNotFoundErrorCode:
                            return "RoomPlayerNotFoundMessage";
                        case OR.PlayerNotReadyErrorCode:
                            return "PlayerNotReadyMessage";
                        case OR.PlayerNotAllowedToCreateRoomErrorCode:
                            return "PlayerNotAllowedToCreateRoomMessage";
                        case OR.PlayerNotEnoughErrorCode:
                            return "PlayerNotEnoughMessage";
                        case OR.RoomIsClosedErrorCode:
                            return "RoomIsClosedMessage";
                        case OR.DisallowedJoinMultipleRoomErrorCode:
                            return "DisallowedJoinMultipleRoomMessage";
                        default:
                            return "";
                    }
                },
                canDismiss: function (mR) {
                    var mI = +mR;
                    if (isNaN(mI)) {
                        return false;
                    }
                    switch (mI) {
                        case OR.RoomNotFoundErrorCode:
                        case OR.RoomAlreadyFullErrorCode:
                        case OR.RoomPlayerNotFoundErrorCode:
                        case OR.PlayerNotReadyErrorCode:
                        case OR.PlayerNotAllowedToCreateRoomErrorCode:
                        case OR.PlayerNotEnoughErrorCode:
                        case OR.RoomIsClosedErrorCode:
                        case OR.DisallowedJoinMultipleRoomErrorCode:
                            return true;
                        default:
                            return false;
                    }
                },
                shouldRetry: function (mR) {
                    return !!isNaN(+mR);
                },
                canReload: function (mR) {
                    return !!isNaN(+mR);
                },
            };
            var OI = "ErrorLib";
            function OX(mR, mI) {
                for (var mX = mR + "", mp = mI - mX.length; mp-- > 0; ) {
                    mX = "0" + mX;
                }
                return mX;
            }
            function Op(mR, mI) {
                mI = OX(mI, 4);
                switch (mR) {
                    case OK.Domain:
                        return "C" + mI;
                    case OH.Domain:
                        return "S" + mI;
                    case Ok.Domain:
                        return "N" + mI;
                    case jg.Domain:
                        return "G" + mI;
                    case OR.Domain:
                        return "W" + mI;
                    default:
                        return "" + mI;
                }
            }
            function OV(mR, mI, mX) {
                var mp;
                var mV = "";
                var h0 = "";
                try {
                    mI = +mI;
                    switch (mR) {
                        case OK.Domain:
                            mV = "C";
                            h0 = OK.getMessageKey(mI);
                            break;
                        case OH.Domain:
                            mV = "S";
                            h0 = OH.getMessageKey(mI);
                            break;
                        case Ok.Domain:
                            mV = "N";
                            h0 = Ok.getMessageKey(mI);
                            break;
                        case jg.Domain:
                            mV = "G";
                            h0 = jg.getMessageKey(mI);
                            break;
                        case OR.Domain:
                            mV = "W";
                            h0 = OR.getMessageKey(mI);
                    }
                } catch (h2) {}
                mp = h0 === "" ? OI + ".GenericMessage" : OI + "." + h0;
                var h1 = fY.t(OI + ".ErrorCodeLabel");
                return fY.t(mp) + (mI ? "\n(" + h1 + mV + OX(mI, 4) + (mX || "") + ")" : "");
            }
            function m0(mR, mI, mX) {
                mI = +mI;
                this.message = OV(mR, mI, mX);
                this.domain = mR;
                this.code = mI;
                this.traceId = mX;
                this.name = "Err";
                this.stack = Error(this.message).stack;
            }
            for (var m1 in Error) {
                if (Error.hasOwnProperty(m1)) {
                    m0[m1] = Error[m1];
                }
            }
            m0.getLocalisedMessage = OV;
            m0.getUICode = Op;
            m0.prototype = Object.create(Error.prototype, {
                constructor: {
                    value: m0,
                    writable: true,
                    configurable: true,
                },
                canReload: {
                    get: function () {
                        var mR = this.domain;
                        var mI = this.code;
                        if (mR === OH.Domain) {
                            return OH.canReload(mI);
                        } else if (mR === Ok.Domain) {
                            return Ok.canReload(mI);
                        } else if (mR === jg.Domain) {
                            return jg.canReload(mI);
                        } else if (mR === OR.Domain) {
                            return OR.canReload(mI);
                        } else {
                            return mR === OK.Domain && OK.canReload(mI);
                        }
                    },
                },
                shouldRetry: {
                    get: function () {
                        var mR = this.domain;
                        var mI = this.code;
                        if (mR === OK.Domain) {
                            return OK.shouldRetry(mI);
                        } else if (mR === OH.Domain) {
                            return OH.shouldRetry(mI);
                        } else {
                            return mR !== jg.Domain && (mR !== Ok.Domain || mI !== Ok.HttpForbiddenError);
                        }
                    },
                },
                canDismiss: {
                    get: function () {
                        var mR = this.domain;
                        var mI = this.code;
                        if (mR === OK.Domain) {
                            return OK.canDismiss(mI);
                        } else if (mR === jg.Domain) {
                            return jg.canDismiss(mI);
                        } else if (mR === OH.Domain) {
                            return OH.canDismiss(mI);
                        } else {
                            return mR === OR.Domain && OR.canDismiss(mI);
                        }
                    },
                },
                uicode: {
                    get: function () {
                        return Op(this.domain, this.code);
                    },
                },
            });
            var m2;
            var m3 = (function (mR) {
                function mI() {
                    return (mR !== null && mR.apply(this, arguments)) || this;
                }
                q1(mI, mR);
                mI.prototype.onCreate = function () {
                    this.on("Error.Occurred", this.Ys);
                    this.on("Error.Report", this.Js);
                    this.on("Error.Log", this.Xs);
                    this.on("Error.SendExceptionReport", this.Ks);
                };
                mI.prototype.Ys = function (mX) {
                    var mp = this;
                    var mV = mX.payload;
                    if (mV && mV.info) {
                        var h0 = mV.info;
                        var h1 = new m0(h0.domain, h0.code, h0.trace);
                        var h2 = [];
                        this.$s(h1, h2);
                        this.ta(h1, h2);
                        this.ia(h1, h2);
                        mX.intercept();
                        var h3 = {
                            title: this.na(mV),
                            content: this.ea(h1.message),
                            actions: h2,
                        };
                        this.emit("Alert.Show", h3, function (h4) {
                            if (!h4.error) {
                                var h5 = h2.length > 0 ? h2[0].handler : "";
                                mp.ra(h4.response, h5, mX);
                            }
                        });
                        if (mV.report !== false) {
                            this.oa(h0.category, h0.domain, h0.code, h0.error, h0.retry, h0.messages);
                        }
                    }
                };
                mI.prototype.Ks = function (mX) {
                    var mp = mX.payload;
                    if (mp) {
                        var mV = b.onerror;
                        if (mV && mV.report) {
                            mV.report(mp);
                        }
                    }
                };
                mI.prototype.$s = function (mX, mp) {
                    if (mX.shouldRetry) {
                        var mV = fx("General.DialogRetry");
                        mp.push({
                            label: mV,
                            handler: "retry",
                            type: "Affirmative",
                        });
                    }
                };
                mI.prototype.ta = function (mX, mp) {
                    if (mX.canReload && !mX.shouldRetry) {
                        var mV = "";
                        mV = mX.domain === jg.Domain ? fx("GameShell.Confirm") : fx("General.DialogReload");
                        mp.push({
                            label: mV,
                            handler: "reload",
                            type: "Affirmative",
                        });
                    }
                };
                mI.prototype.ia = function (mX, mp) {
                    if (mX.canDismiss) {
                        var mV = "";
                        mV = mX.domain === jg.Domain ? fx("GameShell.BtnCancel") : fx("General.DialogOk");
                        mp.push({
                            label: mV,
                            handler: "dismiss",
                            type: "Neutral",
                        });
                    } else {
                        mV = "";
                        if (!(mX.domain === jg.Domain)) {
                            mV = fx("General.DialogQuit");
                            mp.push({
                                label: mV,
                                handler: "quit",
                                type: "Neutral",
                            });
                        }
                    }
                };
                mI.prototype.ea = function (mX) {
                    if (mX.endsWith(")")) {
                        var mp = mX.lastIndexOf("(");
                        mX = mX.substring(0, mp) + '<span class="errorlabel">' + mX.substring(mp) + "<span/>";
                    }
                    return mX;
                };
                mI.prototype.Js = function (mX) {
                    var mp = mX.payload;
                    if (mp) {
                        this.oa(mp.category, mp.domain, mp.code, mp.error, mp.retry, mp.messages);
                    }
                };
                mI.prototype.Xs = function (mX) {
                    var mp = mX.payload;
                    if (mp) {
                        j4.ga.sendEvent(mp.tag, "log", mp.message);
                    }
                };
                mI.prototype.oa = function (mX, mp, mV, h0, h1, h2) {
                    var h3;
                    var h4 = [];
                    h4.push(m0.getUICode(mp, mV));
                    if (h0) {
                        if (typeof h0 == "string") {
                            h4.push(h0);
                        } else if (!(h0 instanceof Error)) {
                            h4.push(h0 + "");
                        }
                    }
                    if (h2 && h2.length > 0) {
                        h4 = typeof h2 == "string" ? q8(q8([], h4, true), [h2], false) : q8(q8([], h4, true), h2, true);
                    }
                    var h5 = h4.map(function (h6) {
                        return h6.replace(/https?:\/\/[^/]+/g, "");
                    });
                    (h3 = j4.ga).sendEvent.apply(h3, q8([mX, "fault"], h5, false));
                };
                mI.prototype.na = function (mX) {
                    switch (mX.context) {
                        case "Preload":
                            return fx("General.ErrorPreloadError");
                        case "Launch":
                            return fx("General.ErrorLaunchFailed");
                        case "Login":
                            return fx("General.ErrorLoginFailed");
                        case "Change":
                            return fx("General.ErrorChangeFailed");
                        case "Unknown":
                            return "";
                        default:
                            return fx("General.ErrorTransactionFailed");
                    }
                };
                mI.prototype.ra = function (mX, mp, mV) {
                    var h0 = this.sa(mX);
                    if (h0 === "Default") {
                        h0 = this.sa(mp);
                    }
                    mV.response = h0;
                    mV.propagate();
                };
                mI.prototype.sa = function (mX) {
                    switch (mX) {
                        case "retry":
                            return "Retry";
                        case "reload":
                            return "Reload";
                        case "dismiss":
                        case "clear":
                            return "Dismiss";
                        case "quit":
                            return "Quit";
                        default:
                            return "Default";
                    }
                };
                return mI;
            })(jJ);
            var m4 = (function (mR) {
                function mI() {
                    var mX = (mR !== null && mR.apply(this, arguments)) || this;
                    mX.ce = -1;
                    mX.aa = true;
                    mX.ca = 0;
                    mX.ha = false;
                    mX.la = [];
                    return mX;
                }
                q1(mI, mR);
                mI.prototype.onCreate = function () {
                    this.event.on("Shell.PWDReset", this.fa, this);
                    this.event.on("Shell.PWDEnabled", this.da, this);
                    this.event.on("Shell.PWDDisabled", this.va, this);
                    this.event.on("Shell.PWDUseCustomAlert", this.Aa, this);
                    this.pa();
                };
                mI.prototype.onDestroy = function () {
                    var mX = this;
                    if (this.ce !== -1) {
                        b.clearTimeout(this.ce);
                        this.ce = -1;
                    }
                    this.la.forEach(function (mp) {
                        mX.event.off(mp, mX.fa, mX);
                    });
                };
                mI.prototype.registerEvent = function (mX) {
                    if (!this.la.includes(mX)) {
                        this.la.push(mX);
                        this.event.on(mX, this.fa, this);
                    }
                };
                mI.prototype.unregisterEvent = function (mX) {
                    if (this.la.includes(mX)) {
                        var mp = this.la.filter(function () {});
                        this.la = mp;
                        this.event.off(mX, this.fa, this);
                    }
                };
                mI.prototype.fa = function () {
                    this.ca = 0;
                };
                mI.prototype.da = function () {
                    if (!this.aa) {
                        this.aa = true;
                        this.fa();
                        this.pa();
                    }
                };
                mI.prototype.va = function () {
                    if (this.aa) {
                        this.aa = false;
                        clearTimeout(this.ce);
                        this.ce = -1;
                    }
                };
                mI.prototype.Aa = function (mX) {
                    var mp = mX.payload;
                    this.ha = mp;
                };
                mI.prototype.ma = function () {
                    this.ca += 5000;
                    if (this.ca >= 60000) {
                        this.va();
                        this.ba();
                    } else {
                        this.pa();
                    }
                };
                mI.prototype.pa = function () {
                    var mX = this;
                    if (this.ce !== -1) {
                        b.clearTimeout(this.ce);
                    }
                    this.ce = b.setTimeout(function () {
                        mX.ce = -1;
                        mX.ma();
                    }, 5000);
                };
                mI.prototype.ba = function () {
                    var mX = this;
                    var mp = {
                        category: UW,
                        domain: jg.Domain,
                        code: jg.WatchDogError,
                    };
                    this.emit("Error.Report", mp);
                    if (this.ha) {
                        var mV = {
                            title: "",
                            content: fx("GameShell.MaxLoadTimeoutMsg"),
                            actions: [
                                {
                                    label: fx("GameShell.BtnRefresh"),
                                    handler: "refresh",
                                    type: "Affirmative",
                                },
                                {
                                    label: fx("GameShell.BtnWait"),
                                    handler: "wait",
                                    type: "Neutral",
                                },
                            ],
                        };
                        this.emit("Alert.Show", mV, function (h0) {
                            var h1 = h0.response;
                            if (!(h0.error || h1 !== "refresh")) {
                                mX.emit("Window.Reload");
                            }
                        });
                    } else if (b.confirm("An error occurred, please reload.")) {
                        // TOLOOK
                        setTimeout(function () {
                            mX.emit("Window.Reload");
                        }, 500);
                    }
                };
                return mI;
            })(jJ);
            var m5 = (function (mR) {
                function mI() {
                    return (mR !== null && mR.apply(this, arguments)) || this;
                }
                q1(mI, mR);
                mI.prototype.onCreate = function () {
                    var mX = this;
                    this.rootElement = document.createElement("div");
                    this.rootElement.className = "screen_safe_area";
                    var mp = document.createElement("div");
                    mp.appendChild(this.rootElement);
                    this.rootElement = mp;
                    this.rootElement.className = "qpage";
                    this.rootElement.innerHTML =
                        '<div class="qpage_container"><div class="qpage_content"><div class="sprite_main_res ic_iconic qpage_boy"></div><div class="qpage_title">' +
                        `<b>${fx("GameShell.QuitPageTitle")}</b><br/>` +
                        '</div><div class="qpage_desc">' +
                        `<b>${fx("GameShell.QuitPageDesc")}</b><br/>` +
                        '</div><div id="reload_button" class=qpage_button>' +
                        `${fx("GameShell.ReturnToGame")}` +
                        " </div></div></div>";
                    var mV = this.rootElement.querySelector("#reload_button");
                    if (!(mV == null)) {
                        mV.addEventListener("click", function () {
                            mX.emit("Window.Reload");
                        });
                    }
                    this.on("Shell.Scaled", function (h0) {
                        var h1 = h0.payload;
                        if (h1 && h1.adjust) {
                            h1.adjust(mX.rootElement, "DesignWidthHeight");
                        }
                    });
                    this.emit("Shell.GetScale", undefined, function (h0) {
                        if (!h0.error) {
                            var h1 = h0.response;
                            if (h1 && h1.adjust) {
                                h1.adjust(mX.rootElement, "DesignWidthHeight");
                            }
                        }
                    });
                };
                return mI;
            })(jS);
            var m6 = (function (mR) {
                function mI() {
                    return (mR !== null && mR.apply(this, arguments)) || this;
                }
                q1(mI, mR);
                mI.prototype.onCreate = function () {
                    this.on("Window.Redirect", this._a);
                    this.on("Window.Reload", this.wa);
                    this.on("Window.Quit", this.xa);
                };
                mI.prototype._a = function (mX) {
                    var mp = this;
                    var mV = b8();
                    var h0 = mV.origin;
                    var h1 = mV.pathname;
                    var h2 = mX.payload;
                    if (jX(h2)) {
                        var h3 = jH(h0, h1);
                        h2 = jp(h2, h3);
                    } else {
                        h2 = jV(h2);
                    }
                    try {
                        var h4 = new URL(h2);
                        this.emit("Shell.EnableUnloadAlert", false, function () {
                            if (b.self !== b.top) {
                                b.parent.postMessage(
                                    {
                                        type: "Window.Redirect",
                                        url: h4.href,
                                    },
                                    "*"
                                );
                            }
                            b.location.replace(h4);
                        });
                    } catch (h5) {
                        console.log("error4");

                        this.emit(
                            "Error.Occurred",
                            {
                                context: "Unknown",
                                info: {
                                    category: UW,
                                    domain: jg.Domain,
                                    code: jg.CrossSiteScriptingError,
                                },
                                report: true,
                            },
                            function () {
                                mp.emit("Window.Reload");
                            }
                        );
                    }
                };
                mI.prototype.wa = function () {
                    this.emit("Shell.EnableUnloadAlert", false, function () {
                        b.location.reload();
                    });
                };
                mI.prototype.xa = function () {
                    var mX = this;
                    if (b.cc && cc.game) {
                        cc.game.pause();
                    }
                    this.component.create(m5);
                    if (b.close) {
                        b.close();
                    }
                    // TOLOOK
                    setTimeout(function () {
                        mX.view.appendTo(m5, "overlay");
                    }, 500);
                };
                return mI;
            })(jJ);
            var m7 = (function (mR) {
                function mI() {
                    return (mR !== null && mR.apply(this, arguments)) || this;
                }
                q1(mI, mR);
                mI.prototype.onStateChange = function (mX) {
                    if (mR.prototype.onStateChange) {
                        mR.prototype.onStateChange.call(this, mX);
                    }
                    this.onRun();
                };
                mI.prototype.emitState = function (mX) {
                    var mp = this;
                    if (mX.endsWith("Complete") && this.ya) {
                        this.emit(this.ya, undefined, function (mV) {
                            function _h() {
                                return mp.emit("Shell.BootStateChanged", mX);
                            }
                            if (!mV.response || mV.error) {
                                mp.Sa(_h);
                            } else {
                                _h();
                            }
                        });
                    } else {
                        this.emit("Shell.BootStateChanged", mX);
                    }
                };
                mI.prototype.Sa = function (mX) {
                    Promise.resolve(this.ka || 0)
                        .then(function (mp) {
                            Ob(mp)();
                        })
                        .then(mX, function () {});
                };
                return mI;
            })(jJ);
            function m8(mR) {
                var mI = bM.isIOS();
                var mX = bM.getOSMajorVersion();
                if (!(mI && mX > 12) || (fB() !== "en" && fB() !== "ru")) {
                    return mR;
                }
                var mp = mR && mR.game;
                var mV = mp && mp.theme_font_family;
                if (mV && Array.isArray(mV)) {
                    var h0 = mV[1] && mV[1].split(",");
                    if (!h0.includes("Helvetica Neue")) {
                        h0.push("Helvetica Neue");
                    }
                    mV[1] = h0.join();
                }
                return mR;
            }
            var m9 = (function () {
                function mR() {
                    return [200, 10, 300].reduce(function (mX, mp) {
                        return mX * mp;
                    }, 144);
                }
                function mI(mX, mp, mV) {
                    if (
                        (function (h1) {
                            return b1(b[Up(0)].now(), h1);
                        })(mX)
                    ) {
                        if (!mp) {
                            mp = b.Number("0.0005") * 100;
                        }
                        if (mV) {
                            var h0 = (function (h1, h2) {
                                var h3 = (b[Up(0)].now() - h1) / (h2 * mR());
                                return b[Up(4)].min(1, h3 * h3);
                            })(mX, mV);
                            mp *= h0;
                        }
                        return b1(b[("Mathew", UG(-2, "Mathew"))].random(), mp);
                    }
                    return true;
                }
                return [
                    function () {
                        return mI(
                            ["0x4c72"].reduce(function (mX, mp) {
                                return mX + b.Number(mp);
                            }, 595) * mR(),
                            b.Number("0.0005") * 100,
                            28
                        );
                    },
                    mI,
                ];
            })()[0];
            var mq = "ShellLoad";
            var mC = (function (mR) {
                function mI() {
                    var mX = (mR !== null && mR.apply(this, arguments)) || this;
                    mX.Ea = new LM();
                    mX.Ca = "";
                    mX.Ma = "";
                    mX.Ha = "";
                    mX.Va = "";
                    mX.Ba = "";
                    mX.ja = "";
                    mX.Pa = "";
                    mX.Ga = "";
                    mX.jn = "";
                    mX.Ra = "";
                    mX.Za = "";
                    mX.Oa = Object.create(null);
                    mX.Da = function (mp) {
                        switch (mp.src) {
                            case mX.Ca:
                            case mX.Ma:
                                var mV = mp.response;
                                if (fO(mp.response)) {
                                    mV = fm(mp.response);
                                }
                                var h0 = mV.version;
                                var h1 = mp.src === mX.Ca ? mX.resource : fM.resource;
                                if (h0 !== 2) {
                                    throw Error(`Unknown asset table format: ${h0}`);
                                }
                                h1.addAssets(mV.assets);
                                break;
                            case mX.Ha:
                                mX.Na(mp.response);
                                break;
                            case mX.jn:
                                var h2 = m8(mp.response);
                                EM.extend(h2);
                                break;
                            case mX.Ra:
                                var h3 = mp.response;
                                if (fO(mp.response)) {
                                    h3 = fm(mp.response);
                                }
                                h0 = h3.version;
                                h1 = fM.resource;
                                if (h0 !== 2) {
                                    throw Error(`Unknown custom asset table format: ${h0}`);
                                }
                                h1.addAssets(h3.assets, mX.Za);
                                break;
                            case mX.ja:
                            case mX.Ba:
                            case mX.Pa:
                            case mX.Ga:
                            case mX.Va:
                                if (mp.response) {
                                    var h4 = URL.createObjectURL(mp.response);
                                    mX.Oa[mp.src] = h4;
                                }
                        }
                    };
                    mX.Ti = function () {
                        if (b.confirm("Error loading game. Press [OK] to refresh or [Cancel] to ignore.")) {
                            // TOLOOK
                            setTimeout(function () {
                                mX.emit("Window.Reload");
                            }, 500);
                        }
                    };
                    mX.Ta = function () {
                        mX.Ea.onComplete = mX.Qa;
                        mX.Ea.onLoad = mX.Da;
                        mX.Ea.onError = mX.Ti;
                        mX.Ha = mX.resource.resolveUrl("shell-res/locale.json");
                        mX.Ga = mX.La("shell-res/main_res.png");
                        mX.Pa = mX.La("shell-game-res/splash/launch.jpg", true);
                        mX.ja = mX.Ia();
                        var mp = [
                            {
                                src: mX.Ga,
                                type: Ly.Blob,
                            },
                            {
                                src: mX.Pa,
                                type: Ly.Blob,
                                optional: true,
                                maxAttemptCount: 0,
                            },
                            {
                                src: mX.ja,
                                type: Ly.Blob,
                                optional: true,
                                maxAttemptCount: 0,
                            },
                            {
                                src: mX.Ha,
                                type: Ly.Json,
                            },
                        ];
                        mX.Ba = mX.La("shell-res/footer.png");
                        var mV = [mX.Ba];
                        if (bM.getOrientationMode() === "port") {
                            mX.Va = mX.La("shell-res/copyright.png");
                            mV.push(mX.Va);
                        }
                        for (var h0 = 0; h0 < mV.length; h0++) {
                            mp.push({
                                src: mV[h0],
                                type: Ly.Blob,
                                maxAttemptCount: 2,
                            });
                        }
                        if (fM.resource.hasEntry("shell-game-res/appearance/appearance.json")) {
                            mX.jn = mX.La("shell-game-res/appearance/appearance.json", true);
                            mp.push({
                                src: mX.jn,
                                type: Ly.Json,
                            });
                            mX.Ea.onComplete = mX.Fa;
                        }
                        mX.Ea.load(mp);
                        mX.za();
                    };
                    mX.Fa = function () {
                        mX.Ea.onComplete = mX.Qa;
                        mX.Ea.onLoad = mX.Da;
                        mX.Ea.onError = mX.Ti;
                        var mp = [];
                        var mV = mX.Wa();
                        if (mV) {
                            mp.push(mV);
                        }
                        var h0 = mX.Ua();
                        if (h0) {
                            mp.push(h0);
                        }
                        if (mX.Ra) {
                            mp.push({
                                src: mX.Ra,
                                type: Ly.Json,
                            });
                        }
                        mX.Ea.load(mp);
                    };
                    mX.Qa = function () {
                        mX.emit("Shell.PWDEnabled");
                        mX.qa();
                        var mp = mX.Ya(m9);
                        var mV = mp[0];
                        var h0 = mp[1];
                        mX.Ja = mq.concat(h0.slice(0, 1 + ~mV));
                        // TOLOOK
                        setTimeout(function () {
                            mX.emitState(mX.Ja);
                            var h1 = mX.Oa;
                            for (var h2 in h1) {
                                URL.revokeObjectURL(h1[h2]);
                            }
                        }, 200);
                    };
                    return mX;
                }
                q1(mI, mR);
                mI.prototype.onRun = function () {
                    this.emitState(mq);
                    var mX;
                    var mp;
                    var mV;
                    var h0 = [];
                    var h1 = bM.getURLSearchParam().get("shell_custom_asset");
                    var h2 = bM.getURLSearchParam().get("shell_asset_path");
                    this.Ra = h1 && ((mp = (mX = h1).startsWith(US.SharedPath)), (mV = mX.endsWith(".json")), mp && mV ? mX : "");
                    this.Za =
                        h2 &&
                        (function (h5) {
                            var h6 = h5.startsWith(US.SharedPath);
                            var h7 = h5.includes("/game-res/");
                            if (h6 && h7) {
                                return h5;
                            } else {
                                return "";
                            }
                        })(h2);
                    if (this.Ra) {
                        if (this.Ra.endsWith(".json")) {
                            this.Za = this.Za ? this.Za : this.Ra.substring(0, this.Ra.lastIndexOf("/") + 1);
                        } else {
                            this.Ra = "";
                            this.Za = "";
                        }
                    }
                    var h3 = this.context.bundleInfo;
                    if (fO(h3.assets)) {
                        var h4 = fm(h3.assets);
                        if (h3.assets) {
                            this.resource.addAssets(h4.assets);
                        }
                    } else if (typeof h3.assets == "string") {
                        this.Ca = jH(h3.baseUrl, h3.assets);
                        h0.push({
                            src: this.Ca,
                            type: Ly.Json,
                        });
                    } else if (h3.assets) {
                        this.resource.addAssets(h3.assets.assets);
                    }
                    if (typeof US.AssetTable == "string") {
                        this.Ma = jH(fM.bundleInfo.baseUrl, US.AssetTable);
                        h0.push({
                            src: this.Ma,
                            type: Ly.Json,
                        });
                    } else {
                        fM.resource.addAssets(US.AssetTable.assets);
                    }
                    if (h0.length > 0) {
                        this.Ea.onComplete = this.Ta;
                        this.Ea.onLoad = this.Da;
                        this.Ea.onError = this.Ti;
                        this.Ea.load(h0);
                    } else {
                        this.Ta();
                    }
                };
                mI.prototype.za = function () {
                    b.dataLayer.push({
                        event: "wasm_support_ready",
                    });
                };
                mI.prototype.Ya = function (mX) {
                    return [+!!mX(), "Completed"];
                };
                mI.prototype.Na = function (mX) {
                    for (var mp in mX) {
                        if (mX[mp]) {
                            fY.extend(mX[mp], mp);
                        }
                    }
                };
                mI.prototype.Ia = function () {
                    var mX = EM.v("shell.splash");
                    if (!mX) {
                        mX = this.La("shell-game-res/splash/splash.jpg", true);
                    }
                    return mX;
                };
                mI.prototype.qa = function () {
                    var mX = document.createElement("style");
                    mX.id = "shell-css";
                    var mp = "";
                    mp =
                        "body,canvas,div{-webkit-tap-highlight-color:rgba(0,0,0,0);display:block;outline:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}input::-webkit-inner-spin-button,input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}video{height:100%;width:100%}body{-ms-scroll-chaining:none;height:100vh;margin:0;overscroll-behavior:contain;width:100vw}canvas{background-color:transparent}a:active,a:hover,a:link,a:visited{color:#666}p.header{font-size:small}p.footer{font-size:x-small}.game-shell{font-family:PingFang SC,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;touch-action:none}.screen_compat{height:auto;margin:auto;max-height:780px;min-height:640px;position:absolute;width:360px}.screen_compat_land{height:360px;margin:auto;max-width:780px;min-width:640px;position:absolute;width:auto}.screen_safe_area{height:640px;width:360px;z-index:0}.screen_safe_area,.screen_safe_area_land{bottom:0;left:0;margin:auto;position:absolute;right:0;top:0}.screen_safe_area_land{height:360px;width:640px}.background_ios11{height:100vmax;position:absolute}.screen_color{background-color:#000}#splash,.splash-background-blur{background-image:url(splash/splash.jpg);background-position:50%;background-size:cover;position:absolute}.splash-background{height:100%;overflow:hidden;position:absolute;transition:opacity .5s ease;width:100%}.splash-background-blur{-webkit-filter:blur(10px);filter:blur(10px);height:100%;transform:scale(1.1);transition:transform .5s ease;width:100%}#background-img{background-image:url(splash/launch.jpg);background-position:50%}#landscape_cover{align-items:center;background-color:#000;flex-direction:column;height:100vh;justify-content:center;left:0;opacity:.85;position:absolute;top:0;width:100%;z-index:1050}#landscape_cover img{margin-bottom:20px;width:10%}#landscape_cover p{color:#fff;font-size:5.5vmin;margin:0;padding:0}#orientation_cover{align-items:center;background-color:#000;flex-direction:column;height:100vh;justify-content:center;left:0;opacity:.85;position:absolute;top:0;width:100%;z-index:1050}#orientation_cover img{margin-bottom:20px;width:10%}#orientation_cover p{color:#fff;font-size:5.5vmin;margin:0;padding:0}.orientation_cover_flex{display:flex}.orientation_cover_none{display:none}.landscape_cover_flex{display:flex}.landscape_cover_none{display:none}.mirror{transform:scaleX(-1)}.direction_rtl{direction:rtl}.rotate_icon_scale_translate{transform:scale(1.8) translateY(-50%)}.rotate_icon_scale_translate_land{transform:scale(1.8) translateY(-50%) rotate(270deg)}.rotate_icon_scale_translate.mirror{transform:scale(-1.8,1.8) translateY(-50%)}#tips-text{margin-top:4px;text-align:center;text-overflow:ellipsis;width:90%}.tips-text-child2-hidden{display:none}.tips-text-child2{margin-left:5px}.tips-text-child2-rtl{margin-right:5px}@media only screen and (orientation:landscape){.background_ios11{height:100vmin}.landscape_cover_show{display:flex}}.splash_hidden{visibility:hidden}.start-button-container-land,.start-button-container-land-pc,.start-button-container-port{align-items:center;display:flex;justify-content:center;left:0;margin:auto;position:absolute;right:0}.start-button-container-port{height:32px;top:481px;width:151.7px}.start-button-container-land,.start-button-container-land-pc{font-size:12px;height:22px;top:271px;width:106px}.start-button{background-color:#30a2d0;border:2px solid rgba(0,0,0,.15);border-radius:8px;text-shadow:0 2px 3px #30a2d0}.start-button-show-land,.start-button-show-land-pc,.start-button-show-port{animation-name:show-bounce}.start-button-show-land,.start-button-show-land-pc{animation-name:show-bounce-land}.start-button-inner{background-image:linear-gradient(180deg,hsla(0,0%,100%,.5),hsla(0,0%,100%,0));background-origin:border-box;border:.87px solid hsla(0,0%,100%,.4);border-radius:6px;bottom:0;left:0;position:absolute;right:0;top:0}.custom-start-button-inner{background-position:50%;background-repeat:no-repeat;background-size:contain;height:100%;left:50%;position:absolute;top:50%;transform:translate3d(-50%,-50%,0);width:100%}@keyframes show-bounce{0%{transform:scale(0)}20%{transform:scale(1.2)}50%{transform:scale(.98)}to{transform:scale(1)}}@keyframes show-bounce-land{0%{transform:scale(0)}20%{transform:scale(.84)}50%{transform:scale(.68)}to{transform:scale(.7)}}.text-land,.text-land-pc,.text-port{color:#fff;font-size:10.3px;margin:0;padding:0}.text-land,.text-land-pc{transform:scale(.8)}.start-button .text-land,.start-button .text-land-pc,.start-button .text-port{font-size:12px;font-weight:900}.version{bottom:86px;font-size:12px;position:absolute;text-align:center;width:100%}.dark .text-port{color:#000}.animationTipsContainer-land,.animationTipsContainer-land-pc,.animationTipsContainer-port{align-items:center;display:flex;flex-direction:column;height:35px;margin:522px auto 0;position:relative;width:100%}.animationTipsContainer-port{margin-top:522px;z-index:1}.animationTipsContainer-land,.animationTipsContainer-land-pc{margin-top:288px;transform:scale(.8)}.ui_block_page{margin:auto;z-index:1100}.ui_block,.ui_block_page{background-color:#000;bottom:0;left:0;opacity:.6;position:absolute;right:0;top:0}.ui_block{transform:translateZ(0)}@keyframes ui_block_show{0%{opacity:0}to{opacity:.6}}@keyframes ui_block_hide{0%{opacity:.6}to{opacity:0}}.custom_alert .content .btn_content .button,.custom_alert .content .btn_content .custom_button{color:inherit;font-size:14px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.custom_alert{display:block;display:none;height:100%;height:640px;margin:auto;position:absolute;width:inherit;width:360px;z-index:1000}.custom_alert .content{background-color:#fff;border-radius:6px;box-shadow:1px 1px 8.7px #444;position:absolute;text-align:center;width:243px}.custom_alert .content .message,.custom_alert .content .title{font-size:14px;margin-left:5%;margin-right:5%;width:90%}.custom_alert .content .message{white-space:normal}.custom_alert .content .title_padding{padding-bottom:0;padding-top:9.7px}.custom_alert .content .message_padding{padding-bottom:9.7px;padding-top:9.7px}.custom_alert .content .single_content_padding{padding-bottom:9.7px;padding-top:19.3px}.custom_alert .content .line_separator{border-bottom:1px solid #000;opacity:.1;padding-top:8.7px}.custom_alert .content .btn_content_row{display:table;table-layout:fixed;width:100%}.custom_alert .content .btn_content .button{animation:btn_release .1s linear forwards;padding:9.7px 10px 11.3px}.custom_alert .content .btn_content .button:active{animation:btn_press .1s linear forwards}.custom_alert .content .btn_content .custom_button{align-items:center;display:flex;height:32px;justify-content:center}.custom_alert .content .btn_content .row{display:table-cell}.custom_alert .content .btn_content .btn_separator_height{background-color:#000;height:1px;opacity:.1;width:inherit}.custom_alert .content .btn_content .btn_separator_width{background-color:#000;height:inherit;opacity:.1;width:1px}.custom_alert .custom_content{padding:20px}@media screen and (orientation:portrait){.custom_alert{display:block;height:100%;height:640px;position:absolute;width:inherit;width:360px;z-index:1000}}@media screen and (orientation:landscape){.custom_alert{display:none;height:100%;height:640px;position:absolute;width:inherit;width:360px;z-index:1000}}.custom_alert_ignore_orientation{display:block;height:100%;height:640px;position:absolute;width:inherit;width:360px;z-index:1000}@keyframes custom_alert_anim_show{0%{opacity:0}60%{opacity:1;transform:scale(1)}80%{opacity:1;transform:scale(1.12)}to{opacity:1;transform:scale(1)}}@keyframes custom_alert_anim_hide{0%{opacity:1}to{opacity:0}}.custom_alert_show{animation:custom_alert_anim_show .3s linear forwards}@keyframes btn_press{0%{opacity:1}to{opacity:.5}}@keyframes btn_release{0%{opacity:.5}to{opacity:1}}.errorlabel{font-size:10px}.animated_text_wrap{color:#fff;font-size:10px;height:26px;line-height:26px;position:relative;text-align:center;width:100%}.dark .animated_text_wrap{color:#000}.animated_text_wrap_hide{display:none}.animated_text{align-items:center;display:flex;flex-direction:column;height:26px;justify-content:flex-start;line-height:13px;margin:0;opacity:0;position:absolute;top:100%;width:100%}.animated-text-move-to-top-port,.animated-text-reset-to-bottom-port{opacity:0}.animated-text-reset-to-bottom-port{top:26px}.animated-text-move-to-top-port,.animated_text_move_to_center{transition:top 1s,opacity 1s;transition-timing-function:linear}.animated_text_move_to_center{opacity:1;top:0}.animated-text-move-to-top-port{top:-30px}.sprite_main_res{background-image:url(shell-res/main_res.png);background-repeat:no-repeat;background-size:222px 248px;display:inline-block}.ic_360{background-position:-162px -217px;height:21px;width:20px}.ic_arrow_back{background-position:-110px -181px;height:22px;width:22px}.ic_arrow_right{background-position:-211px -95px;height:12px;width:8px}.ic_chrome{background-position:-182px -193px;height:20px;width:20px}.ic_close_white{background-position:-187px -95px;height:22px;width:22px}.ic_dialog_close{background-position:-134px -181px;height:22px;width:22px}.ic_iconic{background-position:-1px -1px;height:178px;width:158px}.ic_ios_share_button{background-position:-184px -215px;height:23px;width:16px}.ic_operator_logo_details{background-position:-68px -223px;height:24px;width:92px}.ic_operator_select{background-position:-187px -119px;height:22px;width:22px}.ic_pg_logo{background-position:-68px -181px;height:40px;width:40px}.ic_pg_logo_small{background-position:-110px -205px;height:12px;width:27px}.ic_qq{background-position:-187px -143px}.ic_qq,.ic_quark{height:22px;width:22px}.ic_quark{background-position:-187px -167px}.ic_rotate_screen{background-position:-161px -1px;height:60px;width:60px}.ic_step_1{background-position:-204px -191px;height:14px;width:14px}.ic_step_2{background-position:-139px -205px;height:14px;width:15px}.ic_step_arrow{background-position:-211px -109px;height:12px;width:7px}.ic_swipeup_arrow{background-position:-161px -63px;height:128px;width:24px}.ic_swipeup_hand{background-position:-1px -181px;height:55px;width:65px}.ic_swipeup_round{background-position:-187px -63px;height:30px;width:30px}.ic_uc{background-position:-158px -193px;height:22px;width:22px}.loading-container-land,.loading-container-land-pc,.loading-container-port{align-items:center;display:flex;flex-direction:column;left:0;position:absolute;right:0}.loading-container-port{top:477px}.loading-container-land,.loading-container-land-pc{top:265px}.progress-bar-container-land,.progress-bar-container-land-pc,.progress-bar-container-port{background-color:initial;height:13px;position:relative;width:212px}.progress-bar-container-land,.progress-bar-container-land-pc{transform:scale(.7)}.progress-bar-background{background-color:#111;border-radius:3.5px;height:100%;position:absolute;width:100%}.progress-bar-outline{border-radius:3.5px;bottom:0;left:0;position:absolute;right:0;top:0;transform:translateZ(0)}.border-inner{border:1.7px solid #272727}.border-outer{border:.85px solid #111}.progress-bar-fill-container{bottom:.87px;left:.87px;position:absolute;right:.87px;top:.87px}.progress-bar-fill{-webkit-backface-visibility:hidden;backface-visibility:hidden;background-color:#30a2d0;background-size:8.7px 100%;border-radius:3.5px;height:100%;position:absolute;width:0}.stripes{animation-duration:1s;animation-iteration-count:infinite;animation-name:animate-stripes;animation-timing-function:linear;background-image:linear-gradient(-75deg,hsla(0,0%,100%,0) 35%,hsla(0,0%,100%,.1) 0,hsla(0,0%,100%,.1) 75%,hsla(0,0%,100%,0) 0,hsla(0,0%,100%,0))}.front-highlight{background-image:linear-gradient(90deg,hsla(0,0%,100%,0),#fff);border-radius:0 3.5px 3.5px 0;height:100%;max-width:20px;right:0;width:50%}.front-highlight,.top-highlight{position:absolute;transform:translateZ(0)}.top-highlight{background-color:hsla(0,0%,100%,.2);border-radius:3.5px 3.5px 0 0;height:50%;width:100%}@keyframes animate-stripes{0%{background-position:0 0}to{background-position:34.7px 0}}.custom-progress-bar-container{align-items:center;display:flex;height:40px;justify-content:center;width:240px}.custom-progress-bar-background{background-position:50%;background-repeat:no-repeat;background-size:contain;height:100%;left:0;position:absolute;top:0;width:100%;z-index:3}.custom-progress-bar-fill-container{border-radius:3px;height:24px;left:50%;position:absolute;top:50%;transform:translate3d(-50%,-50%,0);width:221px;z-index:2}#npveSplash{z-index:975}.npve_container .npve_bottom_content .npve_bottom_button_title_land,.npve_container .npve_bottom_content .npve_bottom_button_title_port,.npve_container .npve_bottom_content .npve_bottom_land,.npve_container .npve_bottom_content .npve_bottom_port,.npve_container .npve_bottom_content .npve_grid_1,.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_row .grid_desc,.npve_container .npve_bottom_content .npve_text_bold_port,.npve_container .npve_bottom_content .npve_text_content_land,.npve_container .npve_bottom_content .npve_text_content_port,.npve_container .npve_bottom_content .npve_text_note_land,.npve_container .npve_bottom_content .npve_text_note_port,.npve_container .npve_bottom_content .npve_text_wrapper_land,.npve_container .npve_bottom_content .npve_text_wrapper_port,.npve_container .npve_middle_content .npve_main_desc_land,.npve_container .npve_middle_content .npve_main_desc_port{transform:scale(.87)}.npve_container .npve_middle_content .npve_continue_desc_land,.npve_container .npve_middle_content .npve_continue_desc_port{transform:scale(.75)}.npve_screen_compact{background-color:#fff;height:640px;margin:auto;position:absolute;transform:translateZ(0);width:360px}.npve_visible{visibility:visible}.npve_container{background-color:#fff;display:flex;flex-direction:column;font-size:12px;height:100%;position:relative;width:100%}.npve_container .npve_top_content{display:flex;justify-content:space-between;margin:26px}.npve_container .npve_top_content .title{color:#000;font-size:16px;line-height:16px;max-width:216.7px;text-align:right}.npve_container .npve_middle_content_port{margin:0 43.3px}.npve_container .npve_middle_content{align-items:center;display:flex;flex-direction:column;justify-content:center}.npve_container .npve_middle_content .npve_iconic_port{display:table;transform:scale(.87)}.npve_container .npve_middle_content .npve_iconic_land{display:table;margin-top:-90px;transform:scale(.62)}.npve_container .npve_middle_content .npve_main_desc_land,.npve_container .npve_middle_content .npve_main_desc_port{color:#000;display:flex;line-height:20px}.npve_container .npve_middle_content .npve_main_desc_port{line-height:26px;margin-top:-16px;min-height:150px;text-align:justify;width:312px}.npve_container .npve_middle_content .npve_main_desc_land{justify-content:center;margin:-25px 0 10px;min-height:50px;text-align:center;width:700px}.npve_container .npve_middle_content .npve_continue_button:hover,.npve_container .npve_middle_content .npve_continue_button_land:hover,.npve_container .npve_middle_content .npve_continue_button_port:hover{cursor:pointer;opacity:.5}.npve_container .npve_middle_content .npve_continue_button,.npve_container .npve_middle_content .npve_continue_button_land,.npve_container .npve_middle_content .npve_continue_button_port{background-color:rgba(81,211,33,.2);border:1px solid #51d321;border-radius:4px;color:#50d221;text-align:center;width:100%}.npve_container .npve_middle_content .npve_continue_button_port{height:43.3px;line-height:43.3px}.npve_container .npve_middle_content .npve_continue_button_land{font-size:13px;height:32px;line-height:32px;width:314px}.npve_container .npve_middle_content .npve_continue_button_active{opacity:.5}.npve_container .npve_middle_content .npve_continue_desc_land,.npve_container .npve_middle_content .npve_continue_desc_port{color:#000;line-height:17.3px;opacity:.3;text-align:center}.npve_container .npve_middle_content .npve_continue_desc_port{margin-top:5px;width:364px}.npve_container .npve_middle_content .npve_continue_desc_land{height:34px;margin-top:8px;width:736px}.npve_container .npve_bottom_content_port{min-height:130px}.npve_container .npve_bottom_content_land{max-height:80px;min-height:60px}.npve_container .npve_bottom_content{bottom:0;display:flex;flex:1;flex-direction:column;left:0;position:absolute;right:0}.npve_container .npve_bottom_content .npve_separate_line_port{background-color:#000;height:1.3px;margin-left:43.3px;margin-right:43.3px;margin-top:10px;opacity:.1}.npve_container .npve_bottom_content .npve_separate_line_land{background-color:#000;height:1.3px;margin-left:20px;margin-right:20px;opacity:.1}.npve_container .npve_bottom_content .npve_bottom_port{display:block}.npve_container .npve_bottom_content .npve_bottom_land{align-items:center;display:flex;justify-content:center;min-height:60px}.npve_container .npve_bottom_content .npve_bottom_button_title_land,.npve_container .npve_bottom_content .npve_bottom_button_title_port,.npve_container .npve_bottom_content .npve_text_wrapper_land,.npve_container .npve_bottom_content .npve_text_wrapper_port{color:#000;flex:1;line-height:14px}.npve_container .npve_bottom_content .npve_bottom_button_title_port{margin-bottom:10px;margin-top:10px;text-align:justify}.npve_container .npve_bottom_content .npve_bottom_button_title_land{display:block;margin-right:30px;max-width:260px;min-width:260px;text-align:center}.npve_container .npve_bottom_content .npve_text_wrapper_port{text-align:justify}.npve_container .npve_bottom_content .npve_text_wrapper_land{align-items:center;display:flex;flex-direction:column;justify-content:center}.npve_container .npve_bottom_content .npve_text_content_land,.npve_container .npve_bottom_content .npve_text_content_port{align-items:center;display:flex}.npve_container .npve_bottom_content .npve_text_content_port{justify-content:left}.npve_container .npve_bottom_content .npve_text_content_land{justify-content:center;width:736px}.npve_container .npve_bottom_content .npve_text_bold_port{font-weight:700;margin:10px 0}.npve_container .npve_bottom_content .npve_text_bold_land{font-weight:700;margin-right:16px;max-width:200px;text-align:center}.npve_container .npve_bottom_content .npve_line_text_port{max-width:130px;text-align:justify}.npve_container .npve_bottom_content .npve_line_text_land{max-width:250px;text-align:justify}.npve_container .npve_bottom_content .npve_line_num{margin-right:12px;min-width:14px;transform:scale(1.2)}.npve_container .npve_bottom_content .npve_line_arrow_land,.npve_container .npve_bottom_content .npve_line_arrow_port{min-width:7px;transform:scale(1.2)}.npve_container .npve_bottom_content .npve_line_arrow_port{margin:0 20px}.npve_container .npve_bottom_content .npve_line_arrow_land{margin:0 16px}.npve_container .npve_bottom_content .npve_text_note_land,.npve_container .npve_bottom_content .npve_text_note_port{line-height:16px;opacity:.3}.npve_container .npve_bottom_content .npve_text_note_port{margin-top:15px;text-align:justify}.npve_container .npve_bottom_content .npve_text_note_land{margin-top:11px;text-align:center;width:736px}.npve_container .npve_bottom_content .npve_grid_1{align-items:center;display:flex;flex:2;justify-content:center}.npve_container .npve_bottom_content .npve_grid_1 .grid_content:hover{color:#0f55cc;cursor:pointer}.npve_container .npve_bottom_content .npve_grid_1 .grid_content{align-items:center;color:#000;display:flex;flex:1;flex-direction:column}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_row{align-items:center;display:flex;flex-direction:row}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_row .grid_icon{min-width:20px}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_row .grid_desc{display:block;line-height:12px;margin-left:5px;max-width:150px;text-align:left}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_row .grid_desc .grid_desc_title{text-decoration:underline}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_row .grid_desc .grid_desc_seperator{height:5px}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_row .grid_desc .grid_desc_content{opacity:.3}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_row .grid_desc_active_color{color:#0f55cc}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_text{color:#000;display:flex;flex:1;line-height:10px;opacity:.3;text-align:center}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_text_center{justify-content:center}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_text_left{justify-content:flex-start}.npve_container .npve_bottom_content .npve_grid_1 .grid_content .grid_text_right{justify-content:flex-end}.npve_container .npve_bottom_content .npve_grid_1 .grid_item_center{align-items:center}.npve_container .npve_bottom_content .npve_grid_1 .grid_item_left{align-items:flex-start}.npve_container .npve_bottom_content .npve_grid_1 .grid_item_right{align-items:flex-end}.qpage{background-color:#fff;height:640px;margin:auto;position:absolute;width:360px;z-index:975}.qpage_container{background-color:#fff;display:flex;flex-direction:column;height:100%;text-align:center;width:100%;z-index:950}.qpage_container .qpage_content{align-items:center;display:flex;flex-direction:column;height:100%;justify-content:center}.qpage_container .qpage_content .qpage_boy{transform:scale(.82)}.qpage_container .qpage_content .qpage_title{color:#000;font-size:20px;line-height:20px;position:relative;text-align:center;top:0;width:80%}.qpage_container .qpage_content .qpage_desc{color:#000;font-size:11.3px;line-height:14px;opacity:.3;position:relative;text-align:center;top:8.7px;width:80%}.qpage_container .qpage_content .qpage_button{background-color:rgba(24,17,84,.075);border-radius:2px;color:#000;font-size:10.3px;height:36.3px;line-height:36.3px;margin-top:20px;max-width:303.3px;min-width:156px}.footer-container{display:flex;height:77px}.footer-container,.footer-mask-container-land,.footer-mask-container-port{bottom:0;position:absolute;width:100%}.footer-mask-container-port{display:flex;flex-direction:column;height:229px}.footer-mask-container-land{height:131px}.footer-mask{height:100%;position:absolute;width:100%}.footer-mask-black{background-image:linear-gradient(180deg,rgba(0,0,0,.03),#000)}.footer-mask-color{background-image:linear-gradient(180deg,hsla(0,0%,100%,0),#fff)}.footer-container img{height:117px;width:100%}.footer-image-container{display:flex;height:100%;justify-content:center;position:absolute;width:100%;z-index:0}#footer-copyright-image{background-image:url(shell-res/copyright.png);background-position:50%;background-size:cover;height:25px;position:absolute;transform:scale(.333);width:1080px}.footer-text-img{transition:.2s}.logo-container{align-items:center;display:flex;flex-direction:row-reverse;position:absolute;right:0}.swipeup_text{bottom:40px;font-size:12px}.swipeup_container,.swipeup_text{color:#fff;left:0;position:absolute;right:0}.swipeup_container{bottom:0;height:270px;margin:auto;top:0;width:224px}.swipeup_slide_container{left:50%;position:absolute;top:29px;transform:scale(1);transform-origin:center top}.swipeup_background{animation:swipeup_background_anim .75s forwards;background-color:#000;border-radius:7px;height:100%;opacity:.8;width:100%}.swipeup_arrow{animation:swipeup_arrow_fade_anim,swipeup_arrow_clip_anim;animation-duration:2.4s,2.4s;animation-iteration-count:infinite,infinite;animation-timing-function:ease,cubic-bezier(.84,0,.16,1);left:-12px;opacity:0;position:absolute}.swipeup_slide{animation:swipeup_slide_anim;animation-duration:2.4s;animation-iteration-count:infinite;animation-timing-function:cubic-bezier(.84,0,.16,1);position:absolute;top:126px}.swipeup_round{animation:swipeup_round_anim 2.4s infinite;left:-16px;opacity:1;position:absolute;top:-20px}.swipeup_hand{animation:swipeup_hand_anim 2.4s infinite;left:-9px;opacity:1;position:absolute;top:-12px}@keyframes swipeup_background_anim{0%{opacity:0}to{opacity:.8}}@keyframes swipeup_arrow_clip_anim{0%,33%{height:129px}to{height:0}}@keyframes swipeup_arrow_fade_anim{0%,17%{opacity:0}50%,to{opacity:.6}}@keyframes swipeup_slide_anim{0%,33%{transform:translateY(0)}to{transform:translateY(-120px)}}@keyframes swipeup_round_anim{0%{opacity:0}33%,to{opacity:1}}@keyframes swipeup_hand_anim{0%{transform:scale(1)}33%,to{transform:scale(.9)}}#canvas-shadow{background-color:#000;display:block;-webkit-filter:drop-shadow(2px 2px 10px rgba(0,0,0,.5));filter:drop-shadow(2px 2px 10px rgba(0,0,0,.5));height:736px;position:absolute;width:414px}.splash-paytable{height:100%;transition:opacity .5s ease;visibility:hidden;width:100%}.splash-tint-background{background-color:rgba(0,0,0,.6);height:100%;position:absolute;width:100%}.splash-game-logo{background-size:320px 120px;height:120px;margin:0 auto;opacity:0;transition:opacity .5s ease;width:320px}.splash-paytable-slide-container{height:345px;margin:0 auto 54px;opacity:0;overflow:hidden;position:relative;transition:opacity .5s ease;width:360px}.splash-paytable-dots-container{bottom:100px;position:absolute;text-align:center;width:100%}.splash-paytable-dot{background-color:#fff;border-radius:50%;display:inline-block;height:6px;margin:0 6px;opacity:.3;transition:opacity .3s ease;width:6px}.splash-paytable-dot-active,.splash-paytable-dot-active:hover{opacity:1}.splash-slides-container{display:block;left:0;margin:0 20px;opacity:1;position:absolute;transition:opacity .5s ease;width:320px}.splash-content-image{background-size:320px 345px;height:345px;width:320px}.splash-current-move-to-left{animation-duration:.5s;animation-name:splash-current-move-to-left}@keyframes splash-current-move-to-left{0%{left:0}to{left:-30%}}.splash-next-move-to-left{animation-duration:.5s;animation-name:splash-next-move-to-left}@keyframes splash-next-move-to-left{0%{left:30%}to{left:0}}.splash-current-move-to-right{animation-duration:.5s;animation-name:splash-current-move-to-right}@keyframes splash-current-move-to-right{0%{left:0}to{left:30%}}.splash-next-move-to-right{animation-duration:.5s;animation-name:splash-next-move-to-right}@keyframes splash-next-move-to-right{0%{left:-30%}to{left:0}}.splash-rtp-content{align-items:center;color:#fff;display:flex;font-size:13px;height:240px;line-height:20px;margin:0 auto;text-align:center;transition:color .5s ease;width:260px}.splash-rtp-title{color:#fff;font-size:16px;height:40px;text-align:center}.splash-rtp-dot{background-color:#fff;border-radius:50%;display:inline-block;height:6px;margin:0 1.5px;width:6px}.splash-rtp-action-holder{align-items:center;display:flex;height:40px;justify-content:center;margin:10px 0 15px}.splash-loading-circle-container{display:flex;margin-top:10px}.splash-loading-circle{animation-direction:alternate;animation-duration:.25s;animation-iteration-count:infinite;animation-name:splash_loading_circle_bounce;animation-timing-function:ease-out;background-color:#fff;border-radius:50%;height:6px;margin:0 1.5px;position:relative;width:6px}.splash-loading-circle:first-of-type{animation-delay:0s}.splash-loading-circle:nth-of-type(2){animation-delay:-75ms}.splash-loading-circle:nth-of-type(3){animation-delay:-.15s}@keyframes splash_loading_circle_bounce{0%{bottom:0}90%,to{bottom:13px}}.splash-retry-button{align-items:center;border:2px solid hsla(0,0%,100%,.4);border-radius:8px;color:#fff;display:flex;font-size:16px;height:40px;justify-content:center;line-height:20px;max-width:180px;opacity:1;padding:0 40px;text-align:center;transform:scale(1)}.splash-retry-button:active{opacity:.8;transform:scale(.95)}.splash-retry-button:hover{opacity:.8}";
                    if (fB() === "vi") {
                        mp = mp.replace("PingFang SC", "Arial");
                    }
                    var mV = this.Oa;
                    mp = mp.replace("shell-res/main_res.png", mV[this.Ga]);
                    delete mV[this.Ga];
                    if (bM.getOrientationMode() === "port") {
                        mp = mp.replace("shell-res/copyright.png", mV[this.Va]);
                    }
                    this.Xa(mV[this.Ba]);
                    delete mV[this.Ba];
                    mp = (mp = mp.replace("splash/launch.jpg", mV[this.Pa])).replace(/splash\/splash.jpg/g, mV[this.ja]);
                    mX.innerHTML = mp;
                    document.head.appendChild(mX);
                };
                mI.prototype.La = function (mX, mp) {
                    if (mp === undefined) {
                        mp = false;
                    }
                    if (mp) {
                        return fM.resource.resolveUrl(mX);
                    } else {
                        return this.resource.resolveUrl(mX);
                    }
                };
                mI.prototype.Wa = function () {
                    if (EM.v("start_button.enable")) {
                        var mX = EM.v("start_button.mode");
                        var mp = EM.v("start_button.image");
                        if (mX && mp && fM.resource.hasEntry(mp)) {
                            return {
                                src: fM.resource.resolveUrl(mp),
                                type: Ly.Image,
                            };
                        }
                    }
                };
                mI.prototype.Ua = function () {
                    if (EM.v("loading_bar.enable")) {
                        var mX = EM.v("loading_bar.mode");
                        var mp = EM.v("loading_bar.background_image");
                        if (mX && mp && fM.resource.hasEntry(mp)) {
                            return {
                                src: fM.resource.resolveUrl(mp),
                                type: Ly.Image,
                            };
                        }
                    }
                };
                mI.prototype.Xa = function (mX) {
                    this.component.updateState(EK, {
                        state: "init",
                        certBlobUrl: mX,
                    });
                };
                return mI;
            })(m7);
            (function (mR) {
                mR[(mR.Disabled = 0)] = "Disabled";
                mR[(mR.Enabled = 1)] = "Enabled";
                mR[(mR.NotSupported = -1)] = "NotSupported";
            })(m2 || (m2 = {}));
            var my;
            var mw;
            var mP;
            var mM;
            var mU = {
                Ka: undefined,
                getWebGLStatus: function () {
                    if (this.Ka === undefined) {
                        this.Ka = (function () {
                            if (b.WebGLRenderingContext) {
                                for (
                                    var mR = b.document.createElement("canvas"), mI = 0, mX = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"];
                                    mI < mX.length;
                                    mI++
                                ) {
                                    var mp = mX[mI];
                                    try {
                                        var mV = mR.getContext(mp);
                                        if (mV && typeof mV.getParameter == "function") {
                                            return m2.Enabled;
                                        }
                                    } catch (h0) {}
                                }
                                return m2.Disabled;
                            }
                            return m2.NotSupported;
                        })();
                    }
                    return this.Ka;
                },
            };
            (function (mR) {
                mR[(mR.WebGLNotSupported = 1)] = "WebGLNotSupported";
                mR[(mR.WebGLSupportedButDisabled = 2)] = "WebGLSupportedButDisabled";
                mR[(mR.BrowserVersionTooLow = 3)] = "BrowserVersionTooLow";
                mR[(mR.BrowserNotInclude = 4)] = "BrowserNotInclude";
                mR[(mR.LowSpec = 5)] = "LowSpec";
                mR[(mR.NativeBrowserTooLow = 6)] = "NativeBrowserTooLow";
                mR[(mR.OSVersionTooLow = 7)] = "OSVersionTooLow";
                mR[(mR.NativeWebGLNotSupported = 8)] = "NativeWebGLNotSupported";
                mR[(mR.AdblockDetected = 9)] = "AdblockDetected";
                mR[(mR.APINotDetected = 10)] = "APINotDetected";
                mR[(mR.ES6NotSupported = 11)] = "ES6NotSupported";
                mR[(mR.InsecureContext = 12)] = "InsecureContext";
            })(my || (my = {}));
            (function (mR) {
                mR[(mR.QuitPage = 0)] = "QuitPage";
                mR[(mR.Continue = 1)] = "Continue";
            })(mw || (mw = {}));
            (function (mR) {
                mR[(mR.Top = 1)] = "Top";
                mR[(mR.Middle = 2)] = "Middle";
            })(mP || (mP = {}));
            (function (mR) {
                mR[(mR.Auto = 0)] = "Auto";
                mR[(mR.Chrome = 1)] = "Chrome";
                mR[(mR.QQ = 2)] = "QQ";
                mR[(mR.UC = 3)] = "UC";
                mR[(mR.Quark = 4)] = "Quark";
            })(mM || (mM = {}));
            var mb;
            var mj;
            var mL;
            var mE = (function (mR) {
                function mI() {
                    var mX = (mR !== null && mR.apply(this, arguments)) || this;
                    mX.$a = undefined;
                    mX.tc = undefined;
                    mX.ic = undefined;
                    mX.nc = [];
                    mX.ec = function () {
                        if (mX.$a) {
                            mX.$a();
                        }
                    };
                    mX.rc = function (mp) {
                        var mV = mp.currentTarget;
                        if (mV) {
                            mV.classList.add("npve_continue_button_active");
                        }
                    };
                    mX.oc = function (mp) {
                        var mV = mp.currentTarget;
                        if (mV) {
                            mV.classList.remove("npve_continue_button_active");
                        }
                    };
                    mX.sc = function (mp) {
                        var mV = mp.currentTarget;
                        if (mV) {
                            var h0 = mV.querySelector(".grid_row .grid_desc");
                            if (h0) {
                                h0.classList.add("grid_desc_active_color");
                            }
                        }
                    };
                    mX.ac = function (mp) {
                        var mV = mp.currentTarget;
                        if (mV) {
                            var h0 = mV.querySelector(".grid_row .grid_desc");
                            if (h0) {
                                h0.classList.remove("grid_desc_active_color");
                            }
                        }
                    };
                    return mX;
                }
                q1(mI, mR);
                mI.prototype.onCreate = function () {};
                mI.prototype.onStateChange = function (mX) {
                    var mp = this;
                    if (this.rootElement) {
                        this.rootElement.classList.remove("npve_dismiss");
                        this.rootElement.classList.add("npve_visible");
                    } else {
                        var mV = this.uc(mX.reason, mX.onContinue, mX.onDiscontinue);
                        this.T = bM.getOrientationMode();
                        this.rootElement = this.hc("npve_visible npve_screen_compact", undefined, "npveSplash");
                        var h0 = this.hc(this.T === "port" ? "screen_safe_area" : `screen_safe_area_${this.T}`);
                        var h1 = this.lc();
                        var h2 = this.fc();
                        var h3 = this.dc(mV.descText);
                        var h4 = this.vc(mV, mX);
                        h1.appendChild(h2);
                        h1.appendChild(h3);
                        if (h4) {
                            h1.appendChild(h4);
                        }
                        this.rootElement.appendChild(h0);
                        this.rootElement.appendChild(h1);
                        if (this.ic) {
                            b.addEventListener("beforeunload", this.ic);
                        }
                        this.on("Shell.Scaled", function (h5) {
                            var h6 = h5.payload;
                            if (h6.adjust) {
                                h6.adjust(mp.rootElement, "DesignWidthHeight");
                            }
                        });
                    }
                    this.emit("Shell.GetScale", undefined, function (h5) {
                        if (!h5.error) {
                            var h6 = h5.response;
                            if (h6 == null ? undefined : h6.adjust) {
                                h6.adjust(mp.rootElement, "DesignWidthHeight");
                            }
                        }
                    });
                };
                mI.prototype.onShow = function () {};
                mI.prototype.onDestroy = function () {
                    for (var mX = 0; mX < this.nc.length; mX++) {
                        var mp = document.getElementById(`pveBtn_${mX}`);
                        if (mp) {
                            mp.removeEventListener("click", this.nc[mX]);
                        }
                        if (mp) {
                            mp.removeEventListener("touchstart", this.sc);
                        }
                        if (mp) {
                            mp.removeEventListener("touchend", this.ac);
                        }
                    }
                    if (this.tc) {
                        this.tc.removeEventListener("click", this.ec);
                    }
                    if (this.tc) {
                        this.tc.removeEventListener("touchstart", this.rc);
                    }
                    if (this.tc) {
                        this.tc.removeEventListener("touchend", this.oc);
                    }
                    if (this.ic) {
                        b.removeEventListener("beforeunload", this.ic);
                    }
                    var mV = this.rootElement.parentNode;
                    if (mV) {
                        mV.removeChild(this.rootElement);
                    }
                    this.$a = undefined;
                    this.tc = undefined;
                    this.ic = undefined;
                    this.nc = [];
                };
                mI.prototype.uc = function (mX, mp, mV) {
                    bM.getURLSearchParam().get("operator_token");
                    var h0 = bM.getOSName();
                    var h1 = "";
                    var h2 = "";
                    var h3 = [];
                    this.$a = function () {
                        if (mp) {
                            mp();
                        }
                    };
                    this.ic = function () {
                        if (mV) {
                            mV();
                        }
                    };
                    if (mX === my.LowSpec) {
                        h1 = fx("GameShell.NpveDeviceNotSupportDesc");
                    } else if (mX === my.OSVersionTooLow) {
                        h1 = fx("GameShell.NpveSystemVersionTooLowDesc");
                        if (h0 === U4) {
                            h2 = (h2 = fx("GameShell.AndroidUpdateTutorialStep")).replace("<<#1>>", fx("GameShell.PveUpdateTutorial"));
                        } else if (h0 === U5) {
                            h2 = (h2 = fx("GameShell.IosUpdateTutorialStep")).replace("<<#1>>", fx("GameShell.PveUpdateTutorial"));
                        }
                    } else if (mX === my.BrowserNotInclude || mX === my.BrowserVersionTooLow || mX === my.NativeBrowserTooLow || mX === my.APINotDetected) {
                        h1 = fx("GameShell.NpveBrowserVersionTooLowDesc");
                        h3 = this.Ac();
                    } else if (mX === my.NativeWebGLNotSupported || mX === my.WebGLSupportedButDisabled || mX === my.WebGLNotSupported) {
                        h1 = fx("GameShell.NpveWebGLNotSupportDesc");
                        h3 = this.Ac();
                        this.$a = undefined;
                    } else if (mX === my.AdblockDetected) {
                        h1 = fx("GameShell.PveAdblockDetectedMessage");
                    } else if (mX === my.ES6NotSupported) {
                        h1 = fx("GameShell.NpveBrowserVersionTooLowDesc");
                        h3 = this.Ac();
                        this.$a = undefined;
                    } else if (mX === my.InsecureContext) {
                        h1 = fx("GameShell.NpveInsecureContextDesc");
                        h3 = this.Ac();
                    }
                    return {
                        descText: h1,
                        tutorialText: h2,
                        buttons: h3,
                    };
                };
                mI.prototype.Ac = function () {
                    var mX = bM.getURLSearchParam().get("pve_bb") || "0";
                    var mp = [];
                    var mV = "https://browser.qq.com/";
                    switch (parseInt(mX, 10)) {
                        case mM.Chrome:
                            break;
                        case mM.QQ:
                            mp.push({
                                iconClass: "ic_qq",
                                desc: fx("GameShell.PveQQBrowser"),
                                desc1: fx("GameShell.PveQQBrowserDesc"),
                                action: function () {
                                    b.open(mV);
                                },
                            });
                            break;
                        case mM.UC:
                            mp.push({
                                iconClass: "ic_uc",
                                desc: fx("GameShell.PveUCBrowser"),
                                desc1: fx("GameShell.PveUCBrowserDesc"),
                                action: function () {
                                    b.open("https://www.uc.cn/");
                                },
                            });
                            break;
                        case mM.Quark:
                            mp.push({
                                iconClass: "ic_quark",
                                desc: fx("GameShell.PveQuarkBrowser"),
                                desc1: fx("GameShell.PveQuarkBrowserDesc"),
                                action: function () {
                                    b.open("https://myquark.cn/");
                                },
                            });
                            break;
                        case mM.Auto:
                        default:
                            if (fY.locale() === "zh") {
                                mp.push({
                                    iconClass: "ic_qq",
                                    desc: fx("GameShell.PveQQBrowser"),
                                    desc1: fx("GameShell.PveQQBrowserDesc"),
                                    action: function () {
                                        b.open(mV);
                                    },
                                });
                            }
                    }
                    mp.push({
                        iconClass: "ic_chrome",
                        desc: fx("GameShell.PveChromeBrowser"),
                        desc1: fx("GameShell.PveChromeBrowserDesc"),
                        action: function () {
                            b.open("https://www.google.com/chrome/");
                        },
                    });
                    return mp;
                };
                mI.prototype.lc = function () {
                    return this.hc("npve_container");
                };
                mI.prototype.fc = function () {
                    var mX = this.hc(`npve_top_content npve_top_content_${this.T}`);
                    var mp = this.hc("sprite_main_res ic_operator_logo_details");
                    mX.appendChild(mp);
                    if (this.mc() === mP.Top) {
                        mX.appendChild(this.gc());
                    }
                    return mX;
                };
                mI.prototype.dc = function (mX) {
                    var mp = this.T;
                    var mV = this.hc(`npve_middle_content npve_middle_content_${mp}`);
                    var h0 = this.hc(`npve_iconic_${mp}`);
                    var h1 = this.hc("sprite_main_res ic_iconic");
                    var h2 = this.hc(`npve_main_desc_${mp}`, `${fx("GameShell.PveDearClient")}<br />${mX}`);
                    if (this.mc() === mP.Middle) {
                        mV.appendChild(this.gc());
                        mV.appendChild(this.bc());
                    }
                    h0.appendChild(h1);
                    mV.appendChild(h0);
                    mV.appendChild(h2);
                    if (this.$a) {
                        this.tc = this._c();
                        mV.appendChild(this.tc);
                        mV.appendChild(this.wc());
                    }
                    return mV;
                };
                mI.prototype.vc = function (mX, mp) {
                    var mV = this.xc(mX.buttons);
                    var h0 = this.yc(mX.tutorialText);
                    if (this.Sc(mV, h0)) {
                        var h1 = this.hc(`npve_bottom_content npve_bottom_content_${this.T}`);
                        var h2 = this.kc(mX.buttons.length, mp);
                        if (h2) {
                            h1.appendChild(h2);
                        }
                        if (mV) {
                            h1.appendChild(mV);
                        }
                        if (h0) {
                            h1.appendChild(h0);
                        }
                        return h1;
                    }
                };
                mI.prototype.Sc = function () {
                    return true;
                };
                mI.prototype._c = function () {
                    var mX = this.hc(`npve_continue_button_${this.T}`, fx("GameShell.PveContVisit"));
                    mX.addEventListener("click", this.ec);
                    mX.addEventListener("touchstart", this.rc);
                    mX.addEventListener("touchend", this.oc);
                    return mX;
                };
                mI.prototype.wc = function () {
                    return this.hc(`npve_continue_desc_${this.T}`, fx("GameShell.PveContVisitWarn"));
                };
                mI.prototype.kc = function (mX, mp) {
                    if (mX > 0 || mp.onContinue) {
                        return this.hc(`npve_separate_line_${this.T}`);
                    }
                };
                mI.prototype.xc = function (mX) {
                    var mp = mX.length;
                    if (!(mp <= 0)) {
                        for (
                            var mV = this.T,
                                h0 = this.hc(`npve_bottom_${mV}`),
                                h1 = this.hc(`npve_bottom_button_title_${mV}`, fx("GameShell.PveDownloadClientApp")),
                                h2 = this.hc("npve_grid_1"),
                                h3 = 0;
                            h3 < mp;
                            h3++
                        ) {
                            var h4 = mX[h3];
                            var h5 = "grid_item_center";
                            if (this.T === "port") {
                                if (h3 === 0 && mp > 1) {
                                    h5 = "grid_item_left";
                                } else if (h3 === mp && mp > 1) {
                                    h5 = "grid_item_right";
                                }
                            }
                            var h6 = this.hc(`grid_content ${h5}`, undefined, `pveBtn_${h3}`);
                            var h7 = this.hc("grid_row");
                            var h8 = this.hc(`sprite_main_res ${h4.iconClass} grid_icon`);
                            var h9 = this.hc("grid_desc", undefined, `grid_desc_${h3}`);
                            var hq = this.hc("grid_desc_title", h4.desc);
                            var hC = this.hc("grid_desc_seperator");
                            var hy = this.hc("grid_desc_content", h4.desc1);
                            if (h4.action) {
                                h6.addEventListener("click", h4.action);
                                h6.addEventListener("touchstart", this.sc);
                                h6.addEventListener("touchend", this.ac);
                                this.nc.push(h4.action);
                            }
                            h9.appendChild(hq);
                            h9.appendChild(hC);
                            h9.appendChild(hy);
                            h7.appendChild(h8);
                            h7.appendChild(h9);
                            h6.appendChild(h7);
                            h2.appendChild(h6);
                        }
                        h0.appendChild(h1);
                        h0.appendChild(h2);
                        return h0;
                    }
                };
                mI.prototype.yc = function (mX) {
                    if (!(mX.length <= 0)) {
                        var mp = this.T;
                        var mV = this.hc(`npve_text_wrapper_${mp}`);
                        var h0 = this.hc(`npve_text_content_${mp}`);
                        var h1 = mX.split("|");
                        var h2 = h1.shift();
                        if (h2) {
                            var h3 = this.hc(`npve_text_bold_${mp}`, h2);
                            if (mp === "port") {
                                mV.appendChild(h3);
                            } else {
                                h0.appendChild(h3);
                            }
                        }
                        for (var h4 = "", h5 = 0; h5 < h1.length; h5++) {
                            var h6 = h1[h5].trim();
                            if (h6.startsWith("*")) {
                                if (h4.length > 0) {
                                    h4 += "<br />";
                                }
                                h4 += h6;
                            } else {
                                if (h5 !== 0) {
                                    h0.appendChild(this.hc(`sprite_main_res ic_step_arrow npve_line_arrow_${mp}`));
                                }
                                h0.appendChild(this.hc(`sprite_main_res ic_step_${h5 + 1} npve_line_num`));
                                h0.appendChild(this.hc(`npve_line_text_${mp}`, h6));
                            }
                        }
                        mV.appendChild(h0);
                        if (h4.length > 0) {
                            mV.appendChild(this.hc(`npve_text_note_${mp}`, h4));
                        }
                        return mV;
                    }
                };
                mI.prototype.mc = function () {
                    return mP.Top;
                };
                mI.prototype.gc = function () {
                    return this.hc("title", fx("GameShell.PveCheck"));
                };
                mI.prototype.bc = function () {
                    return this.hc(`npve_separate_line_${this.T}`);
                };
                mI.prototype.hc = function (mX, mp, mV) {
                    var h0 = document.createElement("div");
                    if (mX) {
                        h0.className = mX;
                    }
                    if (mp) {
                        h0.innerHTML = mp;
                    }
                    if (mV) {
                        h0.id = mV;
                    }
                    return h0;
                };
                return mI;
            })(jS);
            var mO = (function (mR) {
                function mI() {
                    return (mR !== null && mR.apply(this, arguments)) || this;
                }
                q1(mI, mR);
                mI.prototype.onRun = function () {
                    return q3(this, undefined, undefined, function () {
                        var mX;
                        var mp;
                        return q4(this, function (mV) {
                            switch (mV.label) {
                                case 0:
                                    this.emitState("PveCheck");
                                    mX = bM;
                                    return [4, this.Ec()];
                                case 1:
                                    mX.webpSupported = mV.sent();
                                    if ((mp = bM.getURLSearchParam().get("pve")) === "false" || mp === "0") {
                                        this.Cc();
                                        return [2];
                                    } else if (this.Mc()) {
                                        if (bM.isSecureContext()) {
                                            if (US.StorageKey && OY(US.StorageKey.forcePlay, false)) {
                                                this.state.param.reason = OY(Ug);
                                                this.Cc();
                                                return [2];
                                            } else if (this.Es()) {
                                                return [2];
                                            } else if (bM.isIOSStandalone()) {
                                                this.Cc();
                                                return [2];
                                            } else if (bM.isApp()) {
                                                return [3, 3];
                                            } else {
                                                return [4, this.Hc()];
                                            }
                                        } else {
                                            this.Vc(my.InsecureContext);
                                            return [2];
                                        }
                                    } else {
                                        this.Vc(my.ES6NotSupported);
                                        return [2];
                                    }
                                case 2:
                                    mV.sent();
                                    mV.label = 3;
                                case 3:
                                    if (bM.isIOS()) {
                                        this.Bc();
                                    } else if (bM.isAndroid()) {
                                        this.jc();
                                    } else if (bM.isPc()) {
                                        this.Pc();
                                    } else if (bM.isWindows() || bM.isMac()) {
                                        this.Gc();
                                    } else {
                                        this.Cc();
                                    }
                                    return [2];
                            }
                        });
                    });
                };
                mI.prototype.Ec = function () {
                    return new Promise(function (mX) {
                        var mp = false;
                        try {
                            var mV = document.createElement("canvas");
                            mp = mV.toDataURL("image/webp").startsWith("data:image/webp");
                        } catch (h1) {
                            mp = false;
                        }
                        if (mp) {
                            mX(mp);
                        } else {
                            var h0 = new Image();
                            h0.onload = function () {
                                mp = h0.width > 0 && h0.height > 0;
                                mX(mp);
                            };
                            h0.onerror = function () {
                                mX(false);
                            };
                            h0.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA";
                        }
                    });
                };
                mI.prototype.Hc = function () {
                    var mX = this;
                    var mp = this.context.resource.resolveUrl("shell-res/ad/ad_adv_dfp_test.js");
                    return new Promise(function (mV) {
                        fetch(mp)
                            .then(function () {
                                mV();
                            })
                            .catch(function () {
                                mX.Vc(my.AdblockDetected);
                            });
                    });
                };
                mI.prototype.Mc = function () {
                    try {
                        Function("", "");
                        return true;
                    } catch (mX) {
                        return false;
                    }
                };
                mI.prototype.Bc = function () {
                    if (this.Rc()) {
                        this.Vc(my.LowSpec);
                    } else {
                        var mX = bM.getMinOSVersionInfo();
                        if (mX.hasMinOSVersion && mX.foundOS && !mX.isMinOSVersion) {
                            this.Vc(my.OSVersionTooLow);
                        } else if (bM.getBrowserType().toLowerCase() === "webkit") {
                            if (bM.isWkWebview() || bM.isCacheStorageSupported()) {
                                this.Cc();
                            } else {
                                this.Vc(my.BrowserNotInclude);
                            }
                        } else if (mU.getWebGLStatus() !== m2.Enabled) {
                            this.Vc(my.WebGLNotSupported);
                        } else {
                            this.Cc();
                        }
                    }
                };
                mI.prototype.jc = function () {
                    if (this.Rc()) {
                        this.Vc(my.LowSpec);
                    } else {
                        var mX = bM.getMinOSVersionInfo();
                        if (mX.hasMinOSVersion && mX.foundOS && !mX.isMinOSVersion) {
                            this.Vc(my.OSVersionTooLow);
                        } else if (mU.getWebGLStatus() !== m2.Enabled) {
                            this.Vc(my.WebGLNotSupported);
                        } else if (bM.isApp()) {
                            this.Cc();
                        } else if (bM.isBrowserTypeSupported()) {
                            var mp = bM.getWhiteListCompatibleCheckInfo();
                            if (mp.hasWhiteList && mp.foundBrowser && !mp.isMinBrowserVersion) {
                                this.Vc(my.BrowserVersionTooLow);
                            } else {
                                this.Cc();
                            }
                        } else {
                            this.Vc(my.BrowserNotInclude);
                        }
                    }
                };
                mI.prototype.Pc = function () {
                    if (mU.getWebGLStatus() !== m2.Enabled) {
                        this.Vc(my.WebGLNotSupported);
                    } else {
                        this.Cc();
                    }
                };
                mI.prototype.Gc = function () {
                    if (mU.getWebGLStatus() !== m2.Enabled) {
                        this.Vc(my.WebGLNotSupported);
                    } else {
                        var mX = bM.getWhiteListCompatibleCheckInfo();
                        if (bM.isBrowserTypeSupported()) {
                            if (mX.hasWhiteList && mX.foundBrowser && !mX.isMinBrowserVersion) {
                                this.Vc(my.BrowserVersionTooLow);
                            } else {
                                this.Cc();
                            }
                        } else {
                            this.Vc(my.BrowserNotInclude);
                        }
                    }
                };
                mI.prototype.Es = function () {
                    this.emit("Alert.Dismiss", undefined, function (mX) {
                        if (mX.response !== 16 || mX.error) {
                            O8("GameReady", Ob(2));
                        }
                    });
                };
                mI.prototype.Rc = function () {
                    var mX = bM.getDeviceCompatibleTerms();
                    if (!mX) {
                        return false;
                    }
                    if (!mX.minMemory) {
                        return false;
                    }
                    if (+mX.minMemory < 2048) {
                        return false;
                    }
                    if (bM.isIOS()) {
                        var mp = b.devicePixelRatio || 1;
                        var mV = Math.min(bM.getScreenHeight(), bM.getScreenWidth()) * mp;
                        if (mV === 1242 || mV === 750) {
                            switch (bM.getGPU()) {
                                case "Apple A8 GPU":
                                    return true;
                                case "Apple A9 GPU":
                                    if (bM.getOSMajorVersion() <= 10) {
                                        return true;
                                    }
                            }
                        }
                    }
                    return !(Math.min(bM.getScreenWidth(), bM.getScreenHeight()) * devicePixelRatio >= 720) && bM.getGPU() !== "Apple A9 GPU";
                };
                mI.prototype.Cc = function () {
                    this.emitState("PveCheckComplete");
                };
                mI.prototype.Vc = function (mX) {
                    var mp = this;
                    Oz(Ug, mX);
                    this.state.param.reason = mX;
                    this.state.param.reasonString = this.Zc(mX);
                    this.component.create(mE);
                    this.component.updateState(mE, {
                        reason: mX,
                        onContinue: function () {
                            var mV;
                            mp.emit("Shell.PWDEnabled");
                            mp.Oc(mw.Continue);
                            var h0 = (mV = US.StorageKey) === null || mV === undefined ? undefined : mV.forcePlay;
                            if (h0 && !OY(h0, false)) {
                                Oz(h0, true);
                            }
                            mp.component.destroy(mE);
                            mp.emitState("PveCheckComplete");
                        },
                        onDiscontinue: function () {
                            mp.Oc(mw.QuitPage);
                        },
                    });
                    if (
                        !(
                            mX !== my.ES6NotSupported &&
                            mX !== my.NativeWebGLNotSupported &&
                            mX !== my.WebGLSupportedButDisabled &&
                            mX !== my.WebGLNotSupported &&
                            mX !== my.InsecureContext
                        )
                    ) {
                        this.Oc();
                    }
                    this.view.appendTo(mE, "overlay");
                    this.view.show(mE);
                    this.emit("Shell.PWDDisabled");
                };
                mI.prototype.Zc = function (mX) {
                    var mp;
                    switch (mX) {
                        case my.BrowserNotInclude:
                            mp = "(pve - browser not included)";
                            break;
                        case my.BrowserVersionTooLow:
                            mp = "(pve - browser version too low)";
                            break;
                        case my.WebGLNotSupported:
                            mp = "(pve - webgl not support)";
                            break;
                        case my.WebGLSupportedButDisabled:
                            mp = "(pve - webgl supported but disabled)";
                            break;
                        case my.NativeBrowserTooLow:
                            mp = "(pve - native browser version too low)";
                            break;
                        case my.OSVersionTooLow:
                            mp = "(pve - os version too low)";
                            break;
                        case my.NativeWebGLNotSupported:
                            mp = "(pve - native webgl not support)";
                            break;
                        case my.AdblockDetected:
                            mp = "(pve - adblock detected)";
                            break;
                        case my.APINotDetected:
                        case my.ES6NotSupported:
                            mp = "(pve - api not detected)";
                            break;
                        case my.InsecureContext:
                            mp = "(pve - insecure context)";
                            break;
                        default:
                            mp = "";
                    }
                    return mp;
                };
                mI.prototype.Oc = function (mX) {
                    var mp;
                    switch (this.state.param.reason) {
                        case my.BrowserNotInclude:
                        case my.BrowserVersionTooLow:
                            mp = "browser not compatible";
                            break;
                        case my.WebGLNotSupported:
                            mp = "webgl not supported";
                            break;
                        case my.WebGLSupportedButDisabled:
                            mp = "webgl supported but disabled";
                            break;
                        case my.LowSpec:
                            mp = "(pve - spec too low)";
                            break;
                        case my.NativeBrowserTooLow:
                            mp = "native browser version too low";
                            break;
                        case my.OSVersionTooLow:
                            mp = "os version too low";
                            break;
                        case my.NativeWebGLNotSupported:
                            mp = "native webgl not support";
                            break;
                        case my.AdblockDetected:
                            mp = "adblock detected";
                            break;
                        case my.APINotDetected:
                            mp = "api not detected";
                            break;
                        case my.ES6NotSupported:
                            mp = "es6 not supported";
                            break;
                        case my.InsecureContext:
                            mp = "insecure context";
                            break;
                        default:
                            mp = "unknown";
                    }
                    j4.ga.sendEvent(UW, "poor_visit_experience", {
                        reason: mp,
                        action: mX,
                    });
                };
                return mI;
            })(m7);
            var mm = {};
            function mJ(mR) {
                var mI = mm[mR];
                if (mI) {
                    mI.t = Date.now();
                } else {
                    mI = {
                        t: Date.now(),
                    };
                    mm[mR] = mI;
                }
            }
            function mS(mR) {
                var mI = mm[mR];
                if (mI) {
                    var mX = Date.now() - mI.t;
                    delete mm[mR];
                    return mX;
                }
                return -1;
            }
            (function (mR) {
                mR.ya = "";
                mR.Dc = "_CCSettings";
                mR.Nc = "_builtins";
            })(mL || (mL = {}));
            var mg;
            var mW = (function (mR) {
                function mI() {
                    var mX = (mR !== null && mR.apply(this, arguments)) || this;
                    mX.Tc = 0;
                    mX.ya = mL.ya;
                    return mX;
                }
                q1(mI, mR);
                mI.prototype.onRun = function () {
                    this.emitState("GameLoad");
                    this.Qc();
                };
                mI.prototype.Lc = function () {
                    var mX;
                    var mp = this;
                    var mV = b[mL.Dc];
                    var h0 = b.cc;
                    return !(
                        (mV && h0) ||
                        ((mX = mV ? jg.CCUndefinedError : jg.SettingsUndefinedError),
                        mp.emit(
                            "Error.Occurred",
                            {
                                context: "Preload",
                                info: {
                                    category: UW,
                                    domain: jg.Domain,
                                    code: mX,
                                },
                                report: true,
                            },
                            function () {
                                mp.emit("Window.Reload");
                            }
                        ),
                        0)
                    );
                };
                mI.prototype.Qc = function () {
                    var mX = this;
                    if (!this.Lc()) {
                        this.emit("Shell.ChangeProgressText", fx("GameShell.LoadingGame"));
                        var mp = b[mL.Dc];
                        b[mL.Dc] = undefined;
                        var mV = cc[mL.Nc];
                        cc[mL.Nc] = undefined;
                        var h0 = bM.getURLSearchParam().get("origin") ? jH(b8().origin, L0(location.pathname)) : "";
                        cc.assetManager.init({
                            bundleVers: q2(q2({}, mp.bundleVers), mV == null ? undefined : mV.bundleVers),
                            server: h0,
                        });
                        var h1 = cc.AssetManager.BuiltinBundleName;
                        var h2 = h1.RESOURCES;
                        var h3 = h1.INTERNAL;
                        var h4 = h1.MAIN;
                        var h5 = h1.START_SCENE;
                        var h6 = [mV ? jH(L0(mV.url), mV.folder, h3) : h3, h4];
                        if (mp.hasStartSceneBundle) {
                            h6.push(h5);
                        }
                        if (mp.hasResourcesBundle) {
                            h6.push(h2);
                        }
                        var h7 = cc.debug.DebugMode.INFO;
                        var h8 = cc.debug.DebugMode.NONE;
                        var h9 = {
                            id: "GameCanvas",
                            scenes: mp.scenes,
                            debugMode: mp.debug ? h7 : h8,
                            showFPS: mp.debug,
                            frameRate: 60,
                            groupList: mp.groupList,
                            collisionMatrix: mp.collisionMatrix,
                            renderMode: 0,
                            localeHint: fB(),
                        };
                        j4.ga.sendEvent(UW, "");
                        mJ("");
                        cc.assetManager._onProgress = function () {
                            if (mX.Tc < 25) {
                                ++mX.Tc;
                            }
                            mX.emit("Shell.UpdateProgress", mX.Tc / 25);
                        };
                        function hq(hP) {
                            if (hP) {
                                mX.emit("Shell.PWDDisabled");
                                console.log("error5");

                                mX.emit(
                                    "Error.Occurred",
                                    {
                                        context: "Preload",
                                        info: {
                                            category: UW,
                                            error: hP,
                                            domain: jg.Domain,
                                            code: jg.GameBootError,
                                        },
                                        report: true,
                                    },
                                    function () {
                                        mX.emit("Window.Reload");
                                    }
                                );
                                return;
                            }
                            cc.view.resizeWithBrowserSize(true);
                            cc.view.enableRetina(true);
                            if (bM.getOrientationMode() === "land") {
                                cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE);
                            } else {
                                cc.view.setOrientation(cc.macro.ORIENTATION_AUTO);
                            }
                            var hM = mp.launchScene;
                            var hU = mS("");
                            j4.ga.sendTiming(UW, "", hU);
                            j4.ga.sendEvent(UW, "");
                            mJ("");
                            cc.assetManager.bundles
                                .find(function (hb) {
                                    return hb.getSceneInfo(hM);
                                })
                                .loadScene(hM, undefined, undefined, function (hb) {
                                    if (hb) {
                                        mX.emit("Shell.PWDDisabled");
                                        console.log("error6");

                                        mX.emit(
                                            "Error.Occurred",
                                            {
                                                context: "Preload",
                                                info: {
                                                    category: UW,
                                                    domain: jg.Domain,
                                                    code: jg.GameBootError,
                                                    error: hb,
                                                },
                                                report: true,
                                            },
                                            function () {
                                                mX.emit("Window.Reload");
                                            }
                                        );
                                        return;
                                    }
                                    mX.Ic();
                                    var hj = mS("");
                                    j4.ga.sendTiming(UW, "", hj);
                                    (function (hL) {
                                        if (bM.audioSupported) {
                                            var hE = (mb = bM.audioContext);
                                            if (hE.state !== "running") {
                                                hE.resume();
                                            }
                                            mj = hE.createBuffer(1, 1, 22050);
                                            if (bM.isIOS()) {
                                                f3.ScratchAudioBuffer = mj;
                                            }
                                        }
                                        if (hL) {
                                            hL();
                                        }
                                    })(function () {
                                        cc.assetManager._onProgress = undefined;
                                    });
                                    mX.state.param.scene = hM;
                                    mX.emitState("GameLoadComplete");
                                });
                        }
                        var hC = 0;
                        function hy(hP) {
                            if (hP) {
                                hq(hP);
                            }
                            if (++hC === h6.length + 1) {
                                try {
                                    cc.game.run(h9, hq);
                                } catch (hM) {
                                    hq(hM);
                                }
                            }
                        }
                        cc.assetManager.loadScript(
                            mp.jsList.map(function (hP) {
                                return jH(h0, "src/", hP);
                            }),
                            hy
                        );
                        for (var hw = 0; hw < h6.length; hw++) {
                            cc.assetManager.loadBundle(h6[hw], hy);
                        }
                    }
                };
                mI.prototype.Ic = function () {
                    this.emit("Shell.EnableUnloadAlert", true);
                };
                return mI;
            })(m7);
            (function (mR) {
                function mI() {
                    return (mR !== null && mR.apply(this, arguments)) || this;
                }
                q1(mI, mR);
                mI.prototype.onRun = function () {
                    this.emitState("GameLoad");
                    this.Fc();
                };
                mI.prototype.Fc = function () {
                    var mX = this;
                    var mp = document.getElementById("background-img");
                    if (mp) {
                        mp.style.height = "100%";
                        mp.style.bottom = "0";
                    }
                    this.emit("Shell.ChangeProgressText", fx("GameShell.LoadingGame"));
                    var mV = b.Dc;
                    b.Dc = undefined;
                    cc.assetManager.init({
                        importBase: "assets/others/import",
                        nativeBase: "assets/others/native",
                    });
                    var h0 = cc.AssetManager.BuiltinBundleName;
                    var h1 = h0.RESOURCES;
                    var h2 = h0.INTERNAL;
                    var h3 = h0.MAIN;
                    var h4 = h0.START_SCENE;
                    var h5 = [h2, h3];
                    if (mV.hasStartSceneBundle) {
                        h5.push(h4);
                    }
                    if (mV.hasResourcesBundle) {
                        h5.push(h1);
                    }
                    var h6 = document.getElementById("GameCanvas");
                    var h7 = document.getElementById("opts-debug-mode");
                    var h8 = document.getElementById("btn-show-fps");
                    var h9 = document.getElementById("input-set-fps");
                    var hq = {
                        id: h6,
                        renderMode: 0,
                        debugMode: parseInt(h7.value, 10),
                        showFPS: Array.prototype.indexOf.call(h8 == null ? undefined : h8.classList, "checked") !== -1,
                        frameRate: parseInt(h9.value, 10),
                        groupList: mV.groupList,
                        collisionMatrix: mV.collisionMatrix,
                        localeHint: fB(),
                    };
                    cc.assetManager._onProgress = function (hM, hU) {
                        mX.emit("Shell.UpdateProgress", hM / hU);
                    };
                    function hC(hM) {
                        if (hM) {
                            throw hM;
                        }
                        if (b.updateResolution) {
                            b.updateResolution();
                        }
                        if (!(cc.sys.os === cc.sys.OS_ANDROID && cc.sys.browserType === cc.sys.BROWSER_TYPE_UC)) {
                            cc.view.enableRetina(true);
                        }
                        cc.debug.setDisplayStats(true);
                        cc.game.pause();
                        cc.assetManager.loadAny(
                            {
                                url: "preview-scene.json",
                                __isNative__: false,
                            },
                            undefined,
                            undefined,
                            function (hU, hb) {
                                if (hU) {
                                    cc.error(hU.stack);
                                } else {
                                    var hj = hb.scene;
                                    hj.ae = hb.ae;
                                    cc.director.runSceneImmediate(hj, function () {
                                        cc.game.resume();
                                    });
                                    cc.assetManager._onProgress = undefined;
                                    mX.emit("Shell.BootStateChanged", "GameLoadComplete");
                                }
                            }
                        );
                    }
                    var hy = 0;
                    function hw(hM) {
                        if (hM) {
                            hC(hM);
                        }
                        if (++hy === h5.length + 1) {
                            try {
                                cc.game.run(hq, hC);
                            } catch (hU) {
                                hC(hU);
                            }
                        }
                    }
                    cc.assetManager.loadScript(
                        mV.jsList.map(function (hM) {
                            return "plugins/" + hM;
                        }),
                        hw
                    );
                    for (var hP = 0; hP < h5.length; hP++) {
                        cc.assetManager.loadBundle(h5[hP], hw);
                    }
                };
            })(m7);
            var md = "SceneLoad";
            var mN = (function (mR) {
                function mI() {
                    var mX = (mR !== null && mR.apply(this, arguments)) || this;
                    mX.ya = md;
                    mX.ka = 2;
                    mX.zc = function (mp) {
                        if (mp) {
                            mX.Wc(mp);
                        } else {
                            var mV = mS(UT);
                            j4.ga.sendTiming(UW, UT, mV);
                            j4.ga.sendEvent(UW, UD);
                            mJ(UD);
                        }
                    };
                    return mX;
                }
                q1(mI, mR);
                mI.prototype.onRun = function () {
                    this.emitState(md);
                    this.ya = "";
                    this.ka--;
                    j4.ga.sendEvent(UW, UT);
                    mJ(UT);
                    if (!cc.director.loadScene(this.state.param.scene, this.zc)) {
                        this.Wc(Error("Load Scene Fail"));
                    }
                };
                mI.prototype.Wc = function (mX) {
                    var mp = this;
                    this.emit("Shell.PWDDisabled");
                    console.log("error7");

                    this.emit(
                        "Error.Occurred",
                        {
                            context: "Preload",
                            info: {
                                category: UW,
                                domain: jg.Domain,
                                code: jg.GameBootError,
                                error: mX,
                            },
                            report: true,
                        },
                        function () {
                            mp.emit("Window.Reload");
                        }
                    );
                };
                return mI;
            })(m7);
            var mv = (function (mR) {
                function mI() {
                    return (mR !== null && mR.apply(this, arguments)) || this;
                }
                q1(mI, mR);
                mI.prototype.onRun = function () {
                    var mX = this;
                    this.emitState("ProjectLoad");
                    j4.ga.sendEvent(UW, "", undefined, this.state.param.reasonString, this.state.param.firstTimeRunApp ? Ud : UN);
                    mJ("");
                    this.emit("Shell.ChangeProgressText", fx("GameShell.Initialization"));
                    this.emit("Shell.UpdateProgress", 0);
                    var mp = new LM();
                    var mV = "";
                    var h0 = "";
                    var h1 = [];
                    if (fM.resource.hasEntry("shell-game-res/locale/locale.json")) {
                        h1.push({
                            src: (h0 = fM.resource.resolveUrl("shell-game-res/locale/locale.json")),
                            type: Ly.Json,
                        });
                    }
                    if (fM.resource.hasEntry("src/settings.js")) {
                        h1.push({
                            src: (mV = fM.resource.resolveUrl("src/settings.js")),
                            type: Ly.Script,
                        });
                    } else {
                        this.ya = "Shell.EnableSleep";
                        this.ka = 4;
                    }
                    if (h1.length !== 0) {
                        var h2 = 0;
                        var h3 = h1.length;
                        var h4 = false;
                        mp.onError = function (h5) {
                            mX.emit("Shell.PWDDisabled");
                            var h6 = h5.src.split("?")[0];
                            var h7 = {
                                category: UW,
                                domain: jg.Domain,
                                code: jg.LoadResourceError,
                                messages: [h6],
                            };
                            mX.emit("Error.Report", h7);
                            if (!h4) {
                                h4 = true;
                                console.log("error8");

                                mX.emit(
                                    "Error.Occurred",
                                    {
                                        context: "Preload",
                                        info: h7,
                                        report: false,
                                    },
                                    function () {
                                        mX.emit("Window.Reload");
                                    }
                                );
                            }
                        };
                        mp.onLoad = function (h5) {
                            switch (h5.src) {
                                case mV:
                                    var h6 = mS("");
                                    j4.ga.sendTiming(UW, "", h6);
                                    break;
                                case h0:
                                    var h7 = h5.response;
                                    for (var h8 in h7) {
                                        if (h7[h8]) {
                                            fY.extend(h7[h8], h8);
                                        }
                                    }
                            }
                            mX.emit("Shell.UpdateProgress", ++h2 / h3);
                        };
                        mp.onComplete = function () {
                            mX.emitState("ProjectLoadComplete");
                        };
                        j4.ga.sendEvent(UW, "");
                        mJ("");
                        mp.load(h1);
                    } else {
                        this.emitState("ProjectLoadComplete");
                    }
                };
                return mI;
            })(m7);
            var mT = (function (mR) {
                function _mI4() {
                    var mX = (mR !== null && mR.apply(this, arguments)) || this;
                    mX.ya = "";
                    return mX;
                }
                q1(_mI4, mR);
                _mI4.prototype.onRun = function () {
                    var mX = this;
                    this.emitState("GameReady");
                    var mp = mS("");
                    j4.ga.sendTiming(UW, "", mp, this.state.param.firstTimeRunApp ? Ud : UN);
                    j4.ga.sendEvent(UW, "");
                    if (this.state.param.showStartButton) {
                        this.component.create(EH);
                        this.view.append(EH, OZ, OF.SafeArea);
                        this.component.updateState(EH, {
                            callback: function () {
                                mX.component.destroy(EH);
                                mX.Uc();
                            },
                        });
                        this.view.show(EH);
                        this.emitState("GameAwaitStart");
                    } else {
                        this.Uc();
                    }
                };
                _mI4.prototype.Uc = function () {
                    this.on("Shell.BootStateChanged", this.qc);
                    this.emitState("GameStarted");
                };
                _mI4.prototype.qc = function (mX) {
                    if (mX.payload === "GameStarted") {
                        this.off("Shell.BootStateChanged", this.qc);
                        j4.ga.sendEvent(UW, "");
                        (function () {
                            if (mb && mj) {
                                var mp = mb.createBufferSource();
                                mp.buffer = mj;
                                mp.connect(mb.destination);
                                if (mp.start === undefined) {
                                    mp.noteOn(0);
                                } else {
                                    mp.start(0);
                                }
                                if (typeof mb.resume == "function") {
                                    mb.resume();
                                }
                                mp.onended = function () {
                                    mp.disconnect(0);
                                    mp.onended = null;
                                    try {
                                        mp.buffer = null;
                                    } catch (mV) {}
                                    mb = undefined;
                                    mj = undefined;
                                };
                            }
                        })();
                        cc.game.resume();
                        if (j2) {
                            j2();
                            j2 = null;
                        }
                    }
                };
                return _mI4;
            })(m7);
            var mD = (function (mR) {
                function mI() {
                    var mX = (mR !== null && mR.apply(this, arguments)) || this;
                    mX.Yc = [];
                    mX.Jc = false;
                    mX.Xc = function (mp) {
                        mX.Kc = {};
                        for (var mV in mp) {
                            mX.Kc[mV] = 0;
                        }
                    };
                    mX.$c = function (mp) {
                        if (mp.files) {
                            mX.tu(mp.files);
                        }
                        if (mp.files) {
                            for (var mV = 0; mV < mp.files.length; mV++) {
                                if (mX.iu(mp.files[mV])) {
                                    j4.ga.sendEvent(UW, Uv);
                                    mJ(Uv);
                                }
                            }
                        }
                    };
                    mX.Bi = function (mp) {
                        if (mX.iu(mp.src)) {
                            var mV = mS(Uv);
                            j4.ga.sendTiming(UW, Uv, mV);
                        }
                        if (mX.nu(mp.src)) {
                            var h0 = mp.response;
                            for (var h1 in h0) {
                                if (h0[h1]) {
                                    fY.extend(h0[h1], h1);
                                }
                            }
                        }
                    };
                    mX.vo = function (mp, mV) {
                        var h0 = mX.Kc;
                        if (h0 && h0[mp.name] !== undefined) {
                            h0[mp.name] = mV;
                            var h1 = 0;
                            var h2 = 0;
                            for (var h3 in h0) {
                                ++h1;
                                h2 += h0[h3];
                            }
                            mX.emit("Shell.UpdateProgress", h2 / h1);
                        }
                    };
                    mX.eu = function (mp, mV) {
                        if (!mV.optional) {
                            var h0 = mp.filename;
                            h0 = h0.substring(h0.lastIndexOf("/") + 1);
                            if (mX.iu(h0)) {
                                mX.ru(mp.message, mp.filename, jg.EngineScriptError);
                            } else {
                                mX.ru(mp.message, mp.filename, jg.PluginScriptError);
                            }
                        }
                    };
                    mX.ou = function (mp) {
                        mX.ru(mp.err, undefined, mp.errCode);
                    };
                    return mX;
                }
                q1(mI, mR);
                mI.prototype.su = function (mX) {
                    var mp = {
                        onDependencyResolved: this.Xc,
                        onPreload: this.$c,
                        onLoad: this.Bi,
                        onProgress: this.vo,
                        onComplete: mX,
                        onError: this.ou,
                        onScriptError: this.eu,
                    };
                    var mV = this.state.param.packages;
                    this.plugin.load(mV, mp);
                };
                mI.prototype.au = function (mX, mp) {
                    var mV = {
                        onDependencyResolved: this.Xc,
                        onPreload: this.$c,
                        onLoad: this.Bi,
                        onProgress: this.vo,
                        onComplete: mp,
                        onError: this.ou,
                        onScriptError: this.eu,
                    };
                    this.plugin.load(mX, mV);
                };
                mI.prototype.tu = function (mX) {
                    for (var mp = 0; mp < mX.length; mp++) {
                        var mV = mX[mp].substring(mX[mp].lastIndexOf("/") + 1);
                        if (mV.substring(mV.lastIndexOf(".")) === ".js") {
                            this.Yc.push(mV);
                        }
                    }
                };
                mI.prototype.iu = function (mX) {
                    return mX.indexOf("cocos2d-js") !== -1;
                };
                mI.prototype.nu = function (mX) {
                    return mX.indexOf("/locale.") !== -1;
                };
                mI.prototype.ru = function (mX, mp, mV) {
                    var h0 = this;
                    var h1 = {
                        category: UW,
                        domain: jg.Domain,
                        code: mV,
                        error: mX,
                        messages: mp ? ["src: " + mp] : undefined,
                    };
                    this.emit("Error.Report", h1);
                    if (!this.Jc) {
                        this.Jc = true;
                        console.log("error9");

                        this.emit(
                            "Error.Occurred",
                            {
                                context: "Preload",
                                info: h1,
                                report: false,
                            },
                            function () {
                                h0.emit("Window.Reload");
                            }
                        );
                    }
                };
                return mI;
            })(m7);
            var mF = (function (mR) {
                function mI() {
                    var mX = (mR !== null && mR.apply(this, arguments)) || this;
                    mX.cu = function () {
                        mX.emit("Shell.ChangeProgressText", fx("GameShell.Complete"));
                        mX.emit("Shell.UpdateProgress", 1);
                        mX.emit("Shell.ChangeProgressVisible", false);
                        // TOLOOK
                        setTimeout(function () {
                            mX.emitState("LatePluginLoadComplete");
                        }, 500);
                    };
                    return mX;
                }
                q1(mI, mR);
                mI.prototype.onRun = function () {
                    this.emitState("LatePluginLoad");
                    this.su(this.cu);
                };
                return mI;
            })(mD);
            var mG = (function (mR) {
                function mI() {
                    var mX = (mR !== null && mR.apply(this, arguments)) || this;
                    mX.uu = function () {
                        mX.emitState("DynamicPluginLoadComplete");
                    };
                    return mX;
                }
                q1(mI, mR);
                mI.prototype.onRun = function () {
                    this.emitState("DynamicPluginLoad");
                    if (this.hu) {
                        this.load(this.hu);
                    }
                };
                mI.prototype.load = function (mX) {
                    this.au(mX, this.uu);
                };
                return mI;
            })(mD);
            var mQ = (function (mR) {
                function mI() {
                    var mX = (mR !== null && mR.apply(this, arguments)) || this;
                    mX.uu = function () {
                        mX.emitState("PluginLoadComplete");
                    };
                    return mX;
                }
                q1(mI, mR);
                mI.prototype.onRun = function () {
                    this.emitState("PluginLoad");
                    this.emit("Shell.ChangeProgressText", fx("GameShell.Loading"));
                    this.emit("Shell.UpdateProgress", 0);
                    this.lu();
                    this.su(this.uu);
                };
                mI.prototype.lu = function () {
                    var mX = this.state.param.packages;
                    var mp = US.Plugins;
                    var mV = bM.getURLSearchParam().get("plugin");
                    if (mV) {
                        mp = mp.concat.apply(mp, mV.split(","));
                    }
                    for (var h0 = 0; h0 < mp.length; h0++) {
                        var h1 = mp[h0];
                        var h2 = jU(h1);
                        mX[h1] = h2;
                    }
                };
                return mI;
            })(mD);
            var mA = (function (mR) {
                function mI() {
                    return (mR !== null && mR.apply(this, arguments)) || this;
                }
                q1(mI, mR);
                mI.prototype.onRun = function () {
                    this.emitState("NativeLoad");
                    this.Bi();
                };
                mI.prototype.Bi = function () {
                    this.emitState("NativeLoadComplete");
                };
                return mI;
            })(m7);
            var mZ = (function (mR) {
                function mI() {
                    return (mR !== null && mR.apply(this, arguments)) || this;
                }
                q1(mI, mR);
                mI.prototype.onRun = function () {
                    this.emitState("WebWorkerLoad");
                    this.Bi();
                };
                mI.prototype.Bi = function () {
                    return q3(this, undefined, undefined, function () {
                        return q4(this, function (mX) {
                            switch (mX.label) {
                                case 0:
                                    return [3, 2];
                                case 1:
                                    mX.sent();
                                    this.emitState("WebWorkerLoadComplete");
                                    return [2];
                                case 2:
                                    if ("serviceWorker" in navigator) {
                                        navigator.serviceWorker
                                            .register("/shared/service-worker/sw.js", {
                                                scope: "/",
                                            })
                                            .then(function () {})
                                            .catch(function () {});
                                    }
                                    this.emitState("WebWorkerLoadComplete");
                                    return [2];
                            }
                        });
                    });
                };
                return mI;
            })(m7);
            var mz = (function (mR) {
                function mI() {
                    return (mR !== null && mR.apply(this, arguments)) || this;
                }
                q1(mI, mR);
                mI.prototype.onCreate = function () {
                    this.rootElement = LV('<div id="back-overlay"></div>');
                    this.view.getRootElement(ON).before(this.rootElement);
                    this.view.appendTo(mI, "shell");
                    this.view.register(mI, "back-overlay");
                };
                return mI;
            })(jS);
            var mY = (function (mR) {
                function mI() {
                    return (mR !== null && mR.apply(this, arguments)) || this;
                }
                q1(mI, mR);
                mI.prototype.onCreate = function () {
                    this.rootElement = LV('<div id="front-overlay"></div>');
                    this.view.getRootElement(ON).after(this.rootElement);
                    this.view.appendTo(mI, "shell");
                    this.view.register(mI, "front-overlay");
                };
                return mI;
            })(jS);
            var mx = (function (mR) {
                function _mI5() {
                    var mX = (mR !== null && mR.apply(this, arguments)) || this;
                    mX.Ea = new LM();
                    mX.fu = Object.create(null);
                    mX.du = "";
                    mX.vu = [];
                    mX.Au = false;
                    mX.Jc = false;
                    mX.pu = 0;
                    mX.mu = false;
                    mX.Qa = function () {
                        var mp = mX.fu[mX.du];
                        var mV = [];
                        mX.vu.forEach(function (h0) {
                            mV.push(mX.fu[h0]);
                        });
                        mX.component.updateState(OZ, {
                            state: "setup-splash-paytable",
                            splashPaytableConfig: {
                                hideRTP: mX.Au,
                                logoImageUrl: mp,
                                pageImageUrls: mV,
                                complete: function () {
                                    mX.gu();
                                    mX.pu = 2;
                                    if (mX.mu) {
                                        mX.emitState("SplashExtraProcessComplete");
                                    }
                                },
                            },
                        });
                    };
                    mX.Da = function (mp) {
                        mX.fu[mp.src] = URL.createObjectURL(mp.response);
                    };
                    mX.Ti = function (mp) {
                        var mV = mp.src.split("?")[0];
                        var h0 = {
                            category: UW,
                            domain: jg.Domain,
                            code: jg.LoadResourceError,
                            messages: [mV],
                        };
                        mX.emit("Error.Report", h0);
                        if (!mX.Jc) {
                            mX.Jc = true;
                            console.log("error10");

                            mX.emit(
                                "Error.Occurred",
                                {
                                    context: "Preload",
                                    info: h0,
                                    report: false,
                                },
                                function () {
                                    mX.emit("Window.Reload");
                                }
                            );
                        }
                    };
                    return mX;
                }
                q1(_mI5, mR);
                _mI5.prototype.onCreate = function () {
                    this.once("Shell.ShowPaytable", this.bu, "High");
                };
                _mI5.prototype.onRun = function () {
                    this.mu = true;
                    if (this.pu !== 1) {
                        this.emitState("SplashExtraProcessComplete");
                    }
                };
                _mI5.prototype.bu = function (mX) {
                    this.pu = 1;
                    var mp = "shell-game-res/paytable-rules/logo.png";
                    this.du = fM.resource.resolveUrl(mp);
                    if (this.du.includes(mp)) {
                        this.pu = 2;
                        mX.intercept();
                        return;
                    }
                    this.Au = !(!mX.payload || !mX.payload.hideRTP);
                    var mV = [];
                    mV.push({
                        src: this.du,
                        type: Ly.Blob,
                    });
                    for (var h0 = 1; h0 <= 10; h0++) {
                        var h1 = `shell-game-res/paytable-rules/p${h0}.png`;
                        var h2 = fM.resource.resolveUrl(h1);
                        if (h2.includes(h1)) {
                            break;
                        }
                        this.vu.push(h2);
                        mV.push({
                            src: h2,
                            type: Ly.Blob,
                        });
                    }
                    this.Ea.onComplete = this.Qa;
                    this.Ea.onLoad = this.Da;
                    this.Ea.onError = this.Ti;
                    this.Ea.load(mV);
                };
                _mI5.prototype.gu = function () {
                    var mX = this;
                    Object.keys(this.fu).forEach(function (mp) {
                        URL.revokeObjectURL(mX.fu[mp]);
                        delete mX.fu[mp];
                    });
                };
                return _mI5;
            })(m7);
            var mB = (function (mR) {
                function mI() {
                    return (mR !== null && mR.apply(this, arguments)) || this;
                }
                q1(mI, mR);
                mI.prototype.onRun = function () {
                    this.emitState("Complete");
                };
                return mI;
            })(m7);
            var mK = (function (mR) {
                function mI() {
                    var mX = (mR !== null && mR.apply(this, arguments)) || this;
                    mX._u = mX.wu();
                    mX.xu = {
                        param: {
                            bootState: "Init",
                            packages: {},
                        },
                    };
                    mX.yu = false;
                    return mX;
                }
                q1(mI, mR);
                mI.prototype.onCreate = function () {
                    this.component.create(m6);
                    this.component.create(m3);
                    this.component.create(m4);
                    var mX = this.component.getInstance(m4);
                    if (mX) {
                        mX.registerEvent("Shell.UpdateProgress");
                        mX.registerEvent("Error.Occurred");
                        mX.registerEvent("Shell.BootStateChanged");
                    }
                    this.component.create(EK);
                    this.on("Shell.BootStateChanged", this.Su, "High");
                    this.on("Shell.BootStateChanged", this.ku, "Low");
                };
                mI.prototype.onStateChange = function (mX) {
                    if (mR.prototype.onStateChange) {
                        mR.prototype.onStateChange.call(this, mX);
                    }
                    if (!this.yu) {
                        this.yu = true;
                        this.emit("Shell.BootStateChanged", "Init");
                    }
                };
                mI.prototype.onDestroy = function () {
                    this.yu = false;
                };
                mI.prototype.Su = function (mX) {
                    switch (mX.payload) {
                        case "ShellLoadComplete":
                            this.Eu();
                            this.Cu();
                            this.Mu();
                            this.Hu();
                            this.Vu();
                            Eg(EO, EJ, "icon");
                            Eg(Em, ES, "apple-touch-icon");
                            this.Bu();
                            this.emit("Shell.PWDUseCustomAlert", true);
                            break;
                        case "PveCheckComplete":
                            this.ju();
                            this.Pu();
                            break;
                        case "ProjectLoadComplete":
                            this.Gu();
                            this.Ru();
                            break;
                        case "GameLoadComplete":
                            this.component.create(mx);
                            break;
                        case "GameReady":
                            this.component.destroy(m4);
                            break;
                        case "GameStarted":
                            this.view.show(ER);
                            this.emit("Shell.FocusCanvas");
                            this.component.destroy(Ox);
                            this.component.destroy(OZ);
                    }
                };
                mI.prototype.ku = function (mX) {
                    var mp = mX.payload;
                    var mV = this._u[mp];
                    if (mV || mp === "Complete") {
                        if (this.Zu) {
                            this.component.destroy(this.Zu);
                            this.Zu = undefined;
                        }
                        if (mV) {
                            this.xu.param.bootState = mp;
                            this.Zu = mV;
                            this.component.create(mV);
                            this.component.updateState(mV, this.xu);
                        } else if (this.state.complete) {
                            this.state.complete();
                        }
                    }
                };
                mI.prototype.Cu = function () {
                    if (!document.head.querySelector('[rel="shortcut icon"]')) {
                        var mX = document.createElement("link");
                        mX.rel = "shortcut icon";
                        mX.id = "favicon";
                        mX.href = this.resource.resolveUrl("shell-res/favicon.ico");
                        document.head.appendChild(mX);
                    }
                };
                mI.prototype.Mu = function () {
                    var mX;
                    var mp = (mX = US.StorageKey) === null || mX === undefined ? undefined : mX.firstRunAPP;
                    var mV = mp ? OY(mp, true) : undefined;
                    if (mV && mp) {
                        Oz(mp, false);
                    }
                    this.xu.param.firstTimeRunApp = mV;
                };
                mI.prototype.Vu = function () {
                    this.component.create(OW);
                };
                mI.prototype.Hu = function () {
                    this.component.create(O5);
                    this.component.create(ON);
                    this.component.create(mz);
                    this.component.create(mY);
                    this.component.create(ER);
                    this.component.create(OZ);
                    this.component.create(Ox);
                    this.component.create(OB);
                    this.view.append(OZ, ON);
                    this.view.append(EK, OZ);
                    this.component.updateState(EK, {
                        state: "setup",
                    });
                };
                mI.prototype.Ou = function () {
                    var mX = this;
                    this.component.updateState(EK, {
                        state: "start",
                    });
                    this.emit("Shell.GetScale", undefined, function (mp) {
                        if (!mp.error) {
                            var mV = mp.response;
                            mX.emit("Shell.Scaled", mV);
                        }
                    });
                };
                mI.prototype.Du = function () {
                    var mX = this;
                    var mp = document.getElementById("initial-loader");
                    if (mp) {
                        mp.classList.add("hide-loading");
                        // TOLOOK
                        setTimeout(function () {
                            var mV;
                            var h0;
                            if (!((mV = mp.parentElement) === null || mV === undefined)) {
                                mV.removeChild(mp);
                            }
                            var h1 = document.getElementById("loader-style");
                            if (!((h0 = h1 == null ? undefined : h1.parentElement) === null || h0 === undefined)) {
                                h0.removeChild(h1);
                            }
                            mX.Ou();
                        }, 350);
                    }
                };
                mI.prototype.Eu = function () {
                    var mX = this;
                    var mp = Date.now() - US.BootTime;
                    // TOLOOK
                    setTimeout(
                        function () {
                            mX.Du();
                        },
                        mp < 1800 ? 1800 - mp : 0
                    );
                };
                mI.prototype.Bu = function () {
                    j4.setStatusBarStyleHandler = function (mX) {
                        var mp = b.app;
                        if (mp) {
                            mp.emit("SetStatusBar", mX);
                        }
                    };
                };
                mI.prototype.Gu = function () {
                    var mX = this;
                    j4.is1959Supported = bM.getIs1959Supported();
                    j4.requestGameStartHandler = function (mp, mV) {
                        var h0 = mS(UD);
                        j4.ga.sendTiming(UW, UD, h0);
                        j2 = mV;
                        mX.xu.param.showStartButton = mp;
                        mX.emit("Shell.ChangeProgressText", fx("GameShell.LoadingResource"));
                        mX.emit("Shell.ChangeProgressVisible", true);
                        mX.emit("Shell.BootStateChanged", "SceneLoadComplete");
                    };
                    j4.addPreloadPluginHandler = function (mp, mV) {
                        var h0 = typeof mp == "string" ? mp : mp.name;
                        var h1 = typeof mV == "object" ? mV : undefined;
                        var h2 = jU(h0);
                        h2.config = h1;
                        h2.optional = true;
                        mX.xu.param.packages[h0] = h2;
                    };
                    j4.loadPluginHandler = function (mp) {
                        var mV;
                        var h0 = jU(mp);
                        h0.optional = true;
                        mX.xu.param.packages[mp] = h0;
                        var h1 = {
                            name: h0,
                        };
                        if (!((mV = mX.component.getInstance(mG)) === null || mV === undefined)) {
                            mV.load(h1);
                        }
                    };
                    j4.setProgressMessageHandler = function (mp) {
                        mX.emit("Shell.ChangeProgressText", mp);
                    };
                    j4.setProgressHandler = function (mp, mV) {
                        var h0 = (mp / mV) * 1;
                        if (isNaN(h0)) {
                            h0 = 0;
                        }
                        mX.emit("Shell.UpdateProgress", h0);
                    };
                    j4.setProgressVisibleHandler = function (mp) {
                        mX.emit("Shell.ChangeProgressVisible", mp);
                    };
                    j4.enableCanvasTouchPropagation = function (mp) {
                        var mV = cc.internal.inputManager;
                        if (mV && mV.allowTouchPropagation) {
                            mV.allowTouchPropagation(mp);
                        }
                    };
                };
                mI.prototype.Ru = function () {
                    document.title = fY.t(US.LocalizedTitleKey);
                };
                mI.prototype.ju = function () {
                    if (bM.webpSupported) {
                        fM.resource.setQualifierConfig([
                            undefined,
                            undefined,
                            {
                                png: ["webp", "jpg"],
                                jpg: ["webp"],
                            },
                        ]);
                    }
                };
                mI.prototype.Pu = function () {
                    this.component.create(mG);
                };
                mI.prototype.wu = function () {
                    return {
                        Init: mZ,
                        WebWorkerLoadComplete: mA,
                        NativeLoadComplete: mC,
                        ShellLoadComplete: mO,
                        PveCheckComplete: mQ,
                        PluginLoadComplete: mv,
                        ProjectLoadComplete: mW,
                        GameLoadComplete: mN,
                        SceneLoadComplete: mx,
                        SplashExtraProcessComplete: mF,
                        LatePluginLoadComplete: mT,
                        GameStarted: mB,
                    };
                };
                return mI;
            })(jJ);
            (function (mR) {
                mR.Nu = "_config";
                mR.Tu = "_map";
            })(mg || (mg = {}));
            var mk = (function (mR) {
                function mI() {
                    var mX = (mR !== null && mR.apply(this, arguments)) || this;
                    mX.Qu = Object.create(null);
                    return mX;
                }
                q1(mI, mR);
                Object.defineProperty(mI.prototype, "bundleVers", {
                    get: function () {
                        return this.Qu;
                    },
                    set: function (mX) {
                        this.Qu = mX;
                    },
                    enumerable: false,
                    configurable: true,
                });
                mI.prototype.loadBundle = function (mX, mp, mV) {
                    var h0 = this;
                    function h1(h5, h6) {
                        if (mV) {
                            // TOLOOK
                            setTimeout(function () {
                                mV(h5, h6);
                            }, 0);
                        }
                    }
                    if (cc) {
                        var h2 = [];
                        var h3 = Array.isArray(mX);
                        function h4(h5) {
                            var h6 = h5.shift();
                            if (h6) {
                                var h7 = cc.assetManager.getBundle(h6);
                                if (h7) {
                                    h2.push(h7);
                                    h4(h5);
                                } else {
                                    var h8 = mp.bundleInfo.bundleBaseUrl + h6;
                                    var h9 = {
                                        version: h0.Qu[h6],
                                    };
                                    cc.assetManager.loadBundle(h8, h9, function (hq, hC) {
                                        if (hC) {
                                            h2.push(hC);
                                            (function (hy, hw) {
                                                var hP = `@${hy.name}/`;
                                                var hM = hy[mg.Nu].paths[mg.Tu];
                                                var hU = {};
                                                Object.keys(hM).map(function (hb) {
                                                    hU[hP + hb] = "";
                                                });
                                                hw.resource.addAssets(hU);
                                            })(hC, mp);
                                            h4(h5);
                                        } else {
                                            if (!hq) {
                                                hq = Error("Cannot find res after loading");
                                            }
                                            h1(hq, undefined);
                                        }
                                    });
                                }
                            } else {
                                h1(undefined, h3 ? h2 : h2[0]);
                            }
                        }
                        h4(h3 ? mX.slice() : [mX]);
                    } else {
                        h1(Error("CocosManager loadBundle - cc not found"), undefined);
                    }
                };
                mI.prototype.getURL = function (mX, mp) {
                    var mV = this.context.getContext(mp);
                    if (!mV) {
                        throw Error("Unable to get bundle context");
                    }
                    return mV.resource.resolveUrl(mX, true);
                };
                mI.prototype.hasEntry = function (mX) {
                    return this.context.resource.hasEntry(mX);
                };
                mI.prototype.resolveBundleName = function (mX, mp) {
                    var mV = mp.bundleBaseUrl;
                    var h0 = this.Qu[mX];
                    if (h0 && mV && mX) {
                        if (typeof h0 == "string") {
                            return {
                                index: jH(mV, mX, `index.${h0}.js`),
                                config: jH(mV, mX, `config.${h0}.json`),
                            };
                        }
                        var h1 = h0.config;
                        var h2 = h0.index;
                        if (h1 && h2) {
                            return {
                                index: jH(mV, mX, `index.${h2}.js`),
                                config: jH(mV, mX, `index.${h1}.js`),
                            };
                        }
                    }
                };
                return mI;
            })(Lv);
            var mH = (function () {
                function mR() {}
                mR.prototype.load = function (mI) {
                    return q3(this, undefined, undefined, function () {
                        return q4(this, function (mX) {
                            switch (mX.label) {
                                case 0:
                                    this.Lu();
                                    this.Iu();
                                    this.Fu();
                                    this.zu();
                                    this.Wu();
                                    return [4, E0];
                                case 1:
                                    if (mX.sent() !== 1) {
                                        return [2];
                                    } else {
                                        this.Uu(mI);
                                        return [4, this.qu.component.create(mK)];
                                    }
                                case 2:
                                    mX.sent();
                                    return [4, this.Yu()];
                                case 3:
                                    mX.sent();
                                    return [2];
                            }
                        });
                    });
                };
                mR.prototype.Yu = function () {
                    var mI = this;
                    return new Promise(function (mX) {
                        mI.qu.component.updateState(mK, {
                            complete: function () {
                                mI.qu.component.destroy(mK);
                                // TOLOOK
                                setTimeout(mX, 0);
                            },
                        });
                    });
                };
                mR.prototype.Wu = function () {
                    var mI;
                    var mX = b8();
                    if (mX !== location) {
                        mI = [mX.origin];
                    }
                    var mp = US.Blobs;
                    f2 = {
                        cacheOrigins: mI,
                        blobRegistry: mp,
                    };
                };
                mR.prototype.Lu = function () {
                    j4.ga = new j9();
                    b.onGAReceiveError = fE;
                    if (b.onerror) {
                        b.onerror.onFormat = fE;
                    }
                };
                mR.prototype.Iu = function () {
                    var mI = bM.getURLSearchParam().get("language");
                    mI = mI ? this.Ju(mI) : navigator.language ? this.Ju(navigator.language) : "en";
                    fY.locale(mI);
                };
                mR.prototype.zu = function () {
                    j4.Error = m0;
                    j4.ClientError = OK;
                    j4.ServerError = OH;
                    j4.NetworkError = Ok;
                    j4.GameShellError = jg;
                    j4.WebSocketError = OR;
                };
                mR.prototype.Ju = function (mI) {
                    var mX = US.SupportedLanguages;
                    var mp = "en";
                    if (mX.indexOf(mI) !== -1) {
                        mp = mI;
                    } else {
                        for (var mV = 0, h0 = mX; mV < h0.length; mV++) {
                            var h1 = h0[mV];
                            if (mI.indexOf(h1) === 0) {
                                mp = h1;
                                break;
                            }
                        }
                    }
                    return mp;
                };
                mR.prototype.Fu = function () {
                    document.title = US.Name;
                };
                mR.prototype.Uu = function (mI) {
                    if (!mI) {
                        mI = {
                            name: undefined,
                            version: undefined,
                            baseUrl: undefined,
                        };
                    }
                    if (US.ShellDir) {
                        mI.baseUrl = US.SharedPath + US.ShellDir;
                    } else {
                        mI.baseUrl = US.MainDir;
                    }
                    var mX = new EE();
                    var mp = {
                        bundle: mX,
                        component: new LT(),
                        event: new LX(),
                        view: new E1(),
                        resource: new E2(),
                        plugin: new EL(),
                        cocos: new mk(),
                    };
                    (function (h8) {
                        Object.assign(jO, h8);
                        jw = jO;
                    })(mp);
                    var mV = Object.assign({}, mI);
                    var h0 = mX.createBundle(mV);
                    for (var h1 in mp) {
                        var h2 = mp[h1];
                        if (h2) {
                            h2.onInstantiate(h0);
                        }
                    }
                    var h3 = Object.assign({}, mI);
                    h3.name = "Shell";
                    var h4;
                    var h5 = (this.qu = mX.createBundle(h3));
                    LM.context = this.qu;
                    j4.context = this.qu;
                    O7(this.qu);
                    h4 = function (h8) {
                        h5.event.emit("Error.Log", {
                            tag: "Deprecated",
                            message: h8,
                        });
                    };
                    (function (h8) {
                        try {
                            h8.Bt();
                            h8.jt;
                        } catch (h9) {
                            return false;
                        }
                    })(new bW(bv, bT, bD));
                    bG = h4 || bF;
                    var h6;
                    var h7 = Object.assign({}, mI);
                    h7.name = "Game";
                    h7.baseUrl = US.GameDir;
                    (function (h8) {
                        fM = h8;
                    })(mX.createBundle(h7));
                    h6 = {
                        AbstractComponent: jm,
                        AbstractEventComponent: jJ,
                        AbstractViewComponent: jS,
                        AbstractCocosComponent: Lj,
                        AbstractPluginComponent: LW,
                        CocosComponent: Lf,
                        PluginMainComponent: LL,
                        LoadType: Ly,
                        Loader: LM,
                    };
                    b.plugin = h6;
                };
                return mR;
            })();
            j4.start = function (mR, mI, mX) {
                function mp(mV) {
                    if (mX) {
                        mX(mV);
                    } else if (mV) {
                        throw mV;
                    }
                }
                try {
                    (function (mV) {
                        if (!mV) {
                            mV = {};
                        }
                        (US = Object.assign({}, mV)).Name = US.Name || US.AppName || "Unnamed";
                        US.Version = US.Version || US.AppVersion || "0.0.0";
                        US.AssetTable = US.AssetTable || {
                            version: 2,
                            assets: {},
                        };
                        US.AspectRatio = US.AspectRatio || undefined;
                        US.GameDir = US.GameDir || "";
                        US.Identifier = US.Identifier || undefined;
                        US.Index = US.Index || undefined;
                        US.LocalizedTitleKey = US.LocalizedTitleKey || "Game.Title";
                        US.MainDir = US.MainDir || "";
                        US.Orientation = US.Orientation !== undefined ? US.Orientation : UO.Portrait;
                        US.SupportXSMaxRatio = +US.SupportXSMaxRatio;
                        US.ThemeColor = US.ThemeColor || "#FFFFFF";
                        US.BootTime = US.BootTime || 0;
                        if (!US.SharedPath) {
                            US.SharedPath = "../shared/";
                        }
                        (function () {
                            if (US.Plugins === undefined) {
                                US.Plugins = [];
                            } else {
                                var h0 = US.Plugins;
                                if (h0 && typeof h0 == "string") {
                                    h0 = h0.split(",");
                                    for (var h1 = 0; h1 < h0.length; ++h1) {
                                        h0[h1] = h0[h1].trim();
                                    }
                                }
                                US.Plugins = h0;
                            }
                        })();
                        (function () {
                            if (US.CompatibleCondition) {
                                US.Requirements = US.CompatibleCondition;
                            }
                            if (US.Requirements === undefined) {
                                US.Requirements = {
                                    minMemory: 1024,
                                    whiteList: "chrome-40,chrome webview-40,firefox-44,safari-10,edge-15.15063",
                                    minOSVersion: "iOS-10,Android-5,MacOS-10.10,Windows-7",
                                };
                            } else {
                                var h0 = US.Requirements;
                                if (h0 && typeof h0 == "string") {
                                    var h1 = new URLSearchParams(h0);
                                    h0 = {
                                        minMemory: +h1.get("minMemory"),
                                        whiteList: h1.get("whiteList"),
                                        minOSVersion: h1.get("minOSVersion"),
                                    };
                                }
                                US.Requirements = h0;
                            }
                        })();
                        (function () {
                            if (US.SupportedLanguages === undefined) {
                                US.SupportedLanguages = ["en"];
                            } else {
                                var h0 = US.SupportedLanguages;
                                if (h0 && typeof h0 == "string") {
                                    h0 = h0.split(",");
                                    for (var h1 = 0; h1 < h0.length; ++h1) {
                                        h0[h1] = h0[h1].trim();
                                    }
                                }
                                US.SupportedLanguages = h0;
                            }
                        })();
                        (function () {
                            if (US.StorageKey) {
                                var h0 = US.StorageKey;
                                if (h0 && typeof h0 == "string") {
                                    h0 = JSON.parse(h0);
                                }
                                if (h0.forcePlay !== undefined) {
                                    US.StorageKey.forcePlay = h0.forcePlay;
                                }
                                if (h0.firstRunAPP !== undefined) {
                                    US.StorageKey.firstRunAPP = h0.firstRunAPP;
                                }
                            } else {
                                US.StorageKey = {
                                    forcePlay: `shell:${US.Name}_force_play`,
                                    firstRunAPP: `shell/${US.Name}:first_time_run_apps`,
                                };
                            }
                        })();
                        US = Object.freeze(US);
                    })(mI);
                    new mH().load(mR).then(mp, mp);
                } catch (mV) {
                    mp(mV);
                }
            };
        })();
    })();
})();
