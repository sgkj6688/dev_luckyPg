(function () {
    "use strict";

    (function () {
        var a;
        (function (m) {
            m.u = "window";
            m.h = "self";
        })(a || (a = {}));
        var l = (0, eval)("this");
        var x = l[a.h];
        var U = l[a.u];
        System.register([], function (m) {
            "use strict";

            return {
                execute: function () {
                    var d0;
                    function d1(Y7, Y8, Y9) {
                        var Yd;
                        if (Y8 || Y9) {
                            if (Y8) {
                                if (Array.isArray(Y8) && Y8.indexOf("") !== -1) {
                                    Yd = `Relative url cannot be extracted from  ${Y7[Y8.indexOf("")]}.`;
                                } else if (Y9) {
                                    if (!cc.assetManager.bundles.has(Y9)) {
                                        Yd = `Bundle ${Y9} not exist in cc.assetManager.`;
                                    }
                                } else {
                                    Yd = `Bundle name cannot be extracted from  ${Y7}.`;
                                }
                            } else {
                                Yd = `Relative url cannot be extracted from  ${Y7}.`;
                            }
                        } else {
                            Yd = `There is issue when resolving url ${Y7} that leads to both bundle and relative url cannot be found.`;
                        }
                        return Yd;
                    }
                    function d2(Y7) {
                        var Y8 = Array.isArray(Y7);
                        var Y9 = Y8 ? Y7[0] : Y7;
                        if (typeof Y9 == "string") {
                            var Yd = Y9.startsWith("@");
                            var YY = Yd ? Y9.indexOf("/") : -1;
                            if (Yd && YY === -1) {
                                return {
                                    errorMessage: d1(Y7, Y9, undefined),
                                };
                            }
                            var Yv;
                            var Yb = YY !== -1 ? Y9.substring(1, YY) : "resources";
                            Yv = Y8
                                ? Y7.map(function (Ya) {
                                      if (Yd && Ya.indexOf(Yb) !== 1) {
                                          return "";
                                      } else {
                                          return Ya.substring(YY + 1);
                                      }
                                  })
                                : Y9.substring(YY + 1);
                            return {
                                bundleName: Yb,
                                relativeUrl: Yv,
                                errorMessage: d1(Y7, Yv, Yb),
                            };
                        }
                        return {
                            errorMessage: "No url passed in!",
                        };
                    }
                    function d3(Y7, Y8, Y9) {
                        var Yd = cc.assetManager.assets.get(Y7);
                        if (!Yd) {
                            if (!Y8) {
                                var YY = d2(Y7);
                                var Yv = YY.relativeUrl;
                                var Yb = YY.bundleName;
                                var Ya = YY.errorMessage;
                                if (Ya) {
                                    throw Error(`ResRC _getAssetFromUuidOrUrl : ${Ya}`);
                                }
                                if (Yb && Yv) {
                                    Y7 = Yv;
                                    Y8 = cc.assetManager.getBundle(Yb);
                                }
                            }
                            Yd = Y8 ? Y8.get(Y7, Y9) : undefined;
                        }
                        return Yd;
                    }
                    function d4(Y7) {
                        var Y8 = typeof Y7 == "string" ? cc.assetManager.getBundle(Y7) : Y7;
                        if (Y8) {
                            Y8.releaseAll();
                        }
                    }
                    function d5(Y7, Y8) {
                        var Y9;
                        var Yd;
                        var YY;
                        var Yv;
                        if (typeof Y8 == "string") {
                            Y9 = Y8;
                        } else {
                            Y9 = Y8.bundleName;
                            Yd = Y8.type;
                            YY = Y8.progressCallback;
                            Yv = Y8.completeCallback;
                        }
                        var Yb = cc.assetManager.getBundle(Y9);
                        if (!Yb) {
                            throw Error(`ResRC loadBundleAsset : Cannot load ${Y7} from unknown bundle ${Y9}`);
                        }
                        var Ya;
                        var Yl;
                        var Yx = (function (YU, Yn, Ym) {
                            var YP;
                            if (Array.isArray(YU)) {
                                for (var YX = 0; YX < YU.length; YX++) {
                                    var YT = YU[YX];
                                    if (!Ym.getInfoWithPath(YT, Yn)) {
                                        YP = YT;
                                        break;
                                    }
                                }
                            } else if (!Ym.getInfoWithPath(YU, Yn)) {
                                YP = YU;
                            }
                            return YP;
                        })(Y7, Yd, Yb);
                        if (Yx === undefined) {
                            Yb.load(Y7, Yd, YY, function (YU, Yn) {
                                if (!YU && Yn) {
                                    if (Array.isArray(Yn)) {
                                        Yn.forEach(function (Ym) {
                                            return Ym.addRef();
                                        });
                                    } else {
                                        Yn.addRef();
                                    }
                                }
                                if (Yv) {
                                    Yv(YU, Yn);
                                }
                            });
                        } else if (Yv) {
                            Ya = Yv;
                            Yl = Yx;
                            (function (YU) {
                                // TOLOOK
                                setTimeout(YU, 0);
                            })(function () {
                                Ya(Error(cc.debug.getError(4914, Yl)), null);
                            });
                        }
                    }
                    function d6(Y7, Y8, Y9) {
                        var Yd = Y8
                            ? {
                                  ext: Y8.startsWith(".") ? Y8 : `.${Y8}`,
                              }
                            : null;
                        cc.assetManager.loadRemote(Y7, Yd, function (YY, Yv) {
                            if (!YY && Yv) {
                                Yv.addRef();
                            }
                            if (Y9) {
                                Y9(YY, Yv);
                            }
                        });
                    }
                    (function (Y7) {
                        Y7._parseLoadResArgs = "_parseLoadResArgs";
                    })(d0 || (d0 = {}));
                    m(
                        "ResRC",
                        Object.freeze({
                            __proto__: null,
                            deleteBundle: function (Y7) {
                                var Y8 = typeof Y7 == "string" ? cc.assetManager.getBundle(Y7) : Y7;
                                if (Y8) {
                                    d4(Y8);
                                    cc.assetManager.removeBundle(Y8);
                                }
                            },
                            load: function (Y7, Y8, Y9, Yd) {
                                var YY = cc.assetManager[d0._parseLoadResArgs](Y8, Y9, Yd);
                                Y8 = YY.type;
                                Y9 = YY.onProgress;
                                Yd = YY.onComplete;
                                var Yv = d2(Y7);
                                var Yb = Yv.bundleName;
                                var Ya = Yv.relativeUrl;
                                var Yl = Yv.errorMessage;
                                if (Ya && !Yl) {
                                    d5(Ya, {
                                        completeCallback: Yd,
                                        bundleName: Yb,
                                        type: Y8,
                                    });
                                } else if (Yl) {
                                    throw Error(`ResRC load : ${Yl}`);
                                }
                            },
                            loadBundle: function (Y7, Y8, Y9) {
                                if (typeof Y8 == "function") {
                                    Y9 = Y8;
                                    Y8 = undefined;
                                }
                                cc.assetManager.loadBundle(Y7, Y8, Y9);
                            },
                            loadBundleArr: function (Y7, Y8) {
                                var Y9 = [];
                                function Yd(YY) {
                                    var Yv = YY.shift();
                                    if (Yv) {
                                        var Yb = typeof Yv == "string" ? Yv : Yv.name;
                                        var Ya = Object.create(null);
                                        if (typeof Yv != "string" && Yv.version) {
                                            Ya.version = Yv.version;
                                        }
                                        cc.assetManager.loadBundle(Yb, Ya, function (Yl, Yx) {
                                            if (Yx) {
                                                Y9.push(Yx);
                                                Yd(YY);
                                            } else {
                                                if (!Yl) {
                                                    Yl = Error("Cannot find res after loading");
                                                }
                                                if (Y8) {
                                                    Y8(Yl, undefined);
                                                }
                                            }
                                        });
                                    } else if (Y8) {
                                        Y8(undefined, Y9);
                                    }
                                }
                                Yd(Y7.slice());
                            },
                            loadByBundleAsset: d5,
                            loadRemote: function (Y7, Y8) {
                                if (Array.isArray(Y7)) {
                                    var Y9 = 0;
                                    var Yd = Y7.length;
                                    var YY = [];
                                    var Yv = [];
                                    Y7.forEach(function (Ya, Yl) {
                                        var Yx;
                                        var YU = typeof Ya == "string";
                                        d6(
                                            YU ? Ya : Ya.url,
                                            YU ? undefined : Ya.ext,
                                            ((Yx = Yl),
                                            function (Yn, Ym) {
                                                if (Y9 === Yd) {
                                                    throw Error("ResRC :: loadRemote : Error in iterator when loading an array of remote resources");
                                                }
                                                Yv[Yx] = Yn;
                                                YY[Yx] = Ym;
                                                if (++Y9 === Yd && Y8) {
                                                    Y8(Yv, YY);
                                                }
                                            })
                                        );
                                    });
                                } else {
                                    var Yb = typeof Y7 == "string";
                                    d6(Yb ? Y7 : Y7.url, Yb ? undefined : Y7.ext, Y8);
                                }
                            },
                            loadRemoteBySingle: d6,
                            retain: function (Y7, Y8) {
                                var Y9 = typeof Y7 == "string" ? d3(Y7, undefined, Y8) : Y7;
                                if (Y9 instanceof cc.Asset) {
                                    Y9.addRef();
                                }
                            },
                            unload: function (Y7, Y8) {
                                var Y9 = typeof Y7 == "string" ? d3(Y7, undefined, Y8) : Y7;
                                if (Y9 instanceof cc.Asset) {
                                    Y9.decRef();
                                }
                            },
                            unloadBundle: d4,
                            unloadBundleAsset: function (Y7, Y8, Y9) {
                                var Yd = cc.assetManager.getBundle(Y8);
                                if (!Yd) {
                                    throw Error(`ResRC releaseBundleAsset : Cannot release ${Y7} from unknown bundle ${Y8}`);
                                }
                                if (!Array.isArray(Y7)) {
                                    Y7 = [Y7];
                                }
                                for (var YY = 0, Yv = Y7; YY < Yv.length; YY++) {
                                    var Yb = Yv[YY];
                                    var Ya = Yd.get(Yb, Y9);
                                    if (Ya instanceof cc.Asset) {
                                        Ya.decRef();
                                    }
                                }
                            },
                        })
                    );
                    var d7 = {
                        writable: false,
                        value: undefined,
                        enumerable: false,
                        configurable: false,
                    };
                    function d8(Y7, Y8, Y9) {
                        for (var Yd = Y7.length, YY = 0; YY < Yd; YY++) {
                            var Yv = Y7[YY];
                            if (Yv) {
                                Yv(Y8, Y9);
                            }
                        }
                    }
                    function d9(Y7, Y8, Y9) {
                        if (typeof Y7 != "object" || Y7 === null) {
                            throw Error("Invalid parameter at index 0");
                        }
                        if (typeof Y8 != "string" || Y8 === "") {
                            throw Error("Invalid parameter at index 1");
                        }
                        var Yd = Y7.watch_eventPool;
                        if (Yd) {
                            var YY = Yd[Y8];
                            if (YY) {
                                if (Y9 === undefined) {
                                    YY.length = 0;
                                } else {
                                    var Yv = YY.indexOf(Y9);
                                    if (Yv !== -1) {
                                        YY.splice(Yv, 1);
                                    }
                                }
                            }
                        }
                    }
                    var dd;
                    var dY = (function () {
                        function Y7() {
                            this.v = false;
                            if (cc.director.getScheduler() != null) {
                                this.g();
                            } else {
                                cc.game.once(cc.game.EVENT_ENGINE_INITED, this.g, this);
                            }
                        }
                        Object.defineProperty(Y7.prototype, "paused", {
                            get: function () {
                                return this.v;
                            },
                            set: function (Y8) {
                                if (this.v !== Y8) {
                                    this.v = Y8;
                                    if (Y8) {
                                        this.k.pauseTarget(this);
                                    } else {
                                        this.k.resumeTarget(this);
                                    }
                                }
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Y7.prototype.g = function () {
                            this.v = false;
                            this.k = cc.director.getScheduler();
                            this.k.enableForTarget(this);
                        };
                        Y7.prototype.schedule = function (Y8, Y9, Yd, YY) {
                            if (!(Y8 == null || Y9 < 0)) {
                                Y9 = Y9 || 0;
                                Yd = isNaN(Yd) ? cc.macro.REPEAT_FOREVER : Yd;
                                YY = YY || 0;
                                this.k.schedule(Y8, this, Y9, Yd, YY, this.v);
                            }
                        };
                        Y7.prototype.scheduleOnce = function (Y8, Y9) {
                            this.schedule(Y8, 0, 0, Y9);
                        };
                        Y7.prototype.unschedule = function (Y8) {
                            if (Y8) {
                                this.k.unschedule(Y8, this);
                            }
                        };
                        Y7.prototype.unscheduleAllCallbacks = function () {
                            this.k.unscheduleAllForTarget(this);
                        };
                        return Y7;
                    })();
                    var dv = (function () {
                        function _Y() {
                            this.S = 5;
                            this.O = 0;
                            this.R = 0;
                            this.A = 0;
                            this.EXPECTED_FRAME_RATE = 50;
                            this.MAX_COUNTER = 5;
                            this.T = false;
                        }
                        _Y.prototype.enableTracker = function (Y8) {
                            if (!this.T) {
                                this.T = true;
                                this.O = 0;
                                this.R = 0;
                                this.A = cc.director.getTotalFrames();
                                this.C = Y8;
                                cc.director.on(cc.Director.EVENT_BEFORE_UPDATE, this._, this);
                            }
                        };
                        _Y.prototype.setTrackingInterval = function (Y8) {
                            this.S = Y8;
                        };
                        _Y.prototype.D = function () {
                            this.R = 0;
                            this.T = false;
                            this.C = undefined;
                            cc.director.off(cc.Director.EVENT_BEFORE_UPDATE, this._, this);
                        };
                        _Y.prototype._ = function () {
                            var Y8 = cc.director.getDeltaTime();
                            this.O += Y8;
                            if (this.O >= this.S) {
                                this.O = 0;
                                var Y9 = this.A;
                                this.A = cc.director.getTotalFrames();
                                if (this.A - Y9 < this.EXPECTED_FRAME_RATE * this.S) {
                                    this.R++;
                                    if (this.R >= this.MAX_COUNTER) {
                                        var Yd = this.C;
                                        cc.game.setFrameRate(30);
                                        this.D();
                                        if (Yd) {
                                            Yd();
                                        }
                                    }
                                } else {
                                    this.R = 0;
                                }
                            }
                        };
                        return _Y;
                    })();
                    var db = (function () {
                        function Y7(Y8) {
                            this.B = false;
                            this.M = Y8;
                        }
                        Y7.prototype.dispose = function () {
                            if (!this.B) {
                                this.B = true;
                                var Y8 = this.P;
                                this.P = undefined;
                                for (var Y9 = 0, Yd = Y8 ? Y8.length : 0; Y9 < Yd; Y9++) {
                                    var YY = Y8[Y9];
                                    try {
                                        YY.I = undefined;
                                        YY.dispose();
                                    } catch (Yb) {}
                                }
                                var Yv = this.M;
                                this.M = undefined;
                                try {
                                    if (Yv) {
                                        Yv();
                                    }
                                } catch (Ya) {}
                                if (this.I) {
                                    this.I.del(this);
                                }
                            }
                        };
                        Y7.prototype.set = function (Y8) {
                            return Y8 instanceof Function && (this.B ? (Y8(), false) : ((this.M = Y8), true));
                        };
                        Y7.prototype.add = function (Y8) {
                            if (Y8 instanceof Function) {
                                Y8 = new Y7(Y8);
                            } else if (!(Y8 instanceof Y7)) {
                                return false;
                            }
                            if (this.B) {
                                Y8.dispose();
                                return false;
                            }
                            var Y9 = Y8.I;
                            if (Y9) {
                                Y9.del(Y8);
                            }
                            var Yd = this.P;
                            if (!Yd) {
                                Yd = this.P = [];
                            }
                            Yd.push(Y8);
                            Y8.I = this;
                            return true;
                        };
                        Y7.prototype.del = function (Y8) {
                            var Y9 = Y8 instanceof Y7;
                            if (!(Y9 || Y8 instanceof Function)) {
                                return false;
                            }
                            if (Y8 === this.M) {
                                this.M = undefined;
                                return true;
                            }
                            for (var Yd = this.P, YY = 0, Yv = Yd ? Yd.length : 0; YY < Yv; YY++) {
                                var Yb = Yd[YY];
                                if ((Y9 && Yb === Y8) || Yb.M === Y8) {
                                    Yd.splice(YY);
                                    Yb.I = undefined;
                                    return true;
                                }
                            }
                            return false;
                        };
                        Object.defineProperty(Y7.prototype, "disposed", {
                            get: function () {
                                return this.B;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Y7.prototype.asDisposable = function () {
                            return this.dispose.bind(this);
                        };
                        return Y7;
                    })();
                    var da = {
                        ARS: {
                            groupSeparator: ".",
                            decimalSeparator: ",",
                        },
                        BRL: {
                            groupSeparator: ".",
                            decimalSeparator: ",",
                        },
                        COP: {
                            groupSeparator: ".",
                            decimalSeparator: ",",
                        },
                        CRC: {
                            groupSeparator: ".",
                            decimalSeparator: ",",
                        },
                        CZK: {
                            groupSeparator: " ",
                            decimalSeparator: ",",
                        },
                        DKK: {
                            groupSeparator: ".",
                            decimalSeparator: ",",
                        },
                        EUR: {
                            groupSeparator: ".",
                            decimalSeparator: ",",
                        },
                        HRK: {
                            groupSeparator: ".",
                            decimalSeparator: ",",
                        },
                        HUF: {
                            groupSeparator: " ",
                            decimalSeparator: ".",
                        },
                        IDR: {
                            groupSeparator: ".",
                            decimalSeparator: ",",
                        },
                        ILS: {
                            groupSeparator: ".",
                            decimalSeparator: ",",
                        },
                        MKD: {
                            groupSeparator: ".",
                            decimalSeparator: ",",
                        },
                        NOK: {
                            groupSeparator: " ",
                            decimalSeparator: ",",
                        },
                        RON: {
                            groupSeparator: ".",
                            decimalSeparator: ",",
                        },
                        RSD: {
                            groupSeparator: ".",
                            decimalSeparator: ",",
                        },
                        RUB: {
                            groupSeparator: " ",
                            decimalSeparator: ",",
                        },
                        SEK: {
                            groupSeparator: " ",
                            decimalSeparator: ",",
                        },
                        TRY: {
                            groupSeparator: ".",
                            decimalSeparator: ",",
                        },
                        UAH: {
                            groupSeparator: " ",
                            decimalSeparator: ",",
                        },
                        UYU: {
                            groupSeparator: ".",
                            decimalSeparator: ",",
                        },
                        ZAR: {
                            groupSeparator: " ",
                            decimalSeparator: ".",
                        },
                    };
                    (function (Y7) {
                        Y7.N = "_val";
                    })(dd || (dd = {}));
                    var dl = Object.freeze({});
                    function dx() {}
                    function dU(Y7, Y8, Y9) {
                        return Y9.convertToNodeSpaceAR(Y7.convertToWorldSpaceAR(Y8));
                    }
                    var dn;
                    dn = undefined;
                    function dm() {
                        if (dn === undefined) {
                            dn = new dY();
                        }
                        return dn;
                    }
                    function dP(Y7) {
                        return function (Y8) {
                            var Y9 = // TOLOOK
                                setTimeout(Y8, Y7 * 1000);
                            return function () {
                                clearTimeout(Y9);
                            };
                        };
                    }
                    function dX() {
                        var Y7;
                        Y7 = arguments.length === 1 && arguments[0] instanceof Array ? arguments[0].slice() : Array.prototype.slice.call(arguments);
                        return function (Y8) {
                            var Y9 = new db();
                            var Yd = 0;
                            function YY(Yv) {
                                if (!Y9.disposed) {
                                    if (Yv != null || ++Yd === Y7.length) {
                                        Y8(Yv);
                                        Y9.dispose();
                                    } else {
                                        Y9.set(Y7[Yd](YY));
                                    }
                                }
                            }
                            Y9.set(Y7[Yd](YY));
                            return Y9.asDisposable();
                        };
                    }
                    function dT() {
                        var Y7;
                        Y7 = arguments.length === 1 && arguments[0] instanceof Array ? arguments[0].slice() : Array.prototype.slice.call(arguments);
                        return function (Y8) {
                            for (
                                var Y9 = new db(),
                                    Yd = Y7.length,
                                    YY = function (Ya) {
                                        if (!(Y9.disposed || (Ya == null && --Yd != 0))) {
                                            Y8(Ya);
                                            Y9.dispose();
                                        }
                                    },
                                    Yv = 0,
                                    Yb = Y7.length;
                                Yv < Yb;
                                Yv++
                            ) {
                                Y9.add(Y7[Yv](YY));
                            }
                            return Y9.asDisposable();
                        };
                    }
                    function di() {
                        dX = function () {
                            return function () {};
                        };
                    }
                    function dE(Y7) {
                        var Y8 = 0;
                        var Y9 = 0;
                        var Yd = [];
                        var YY = [];
                        function Yv() {
                            Y8 = 2;
                            Yd.unshift.apply(Yd, YY);
                            YY.length = 0;
                            for (var Yb = 1; Yb < Yd.length - 1; Yb += 3) {
                                var Ya = Yd[Yb];
                                if (Ya) {
                                    var Yl = Yd[Yb + 1];
                                    if (Yl) {
                                        Ya.apply(Yl);
                                    } else {
                                        Ya();
                                    }
                                }
                            }
                            Yd.length = 0;
                            if (YY.length) {
                                Y8 = 1;
                                Y7(Yv);
                            } else {
                                Y8 = 0;
                            }
                        }
                        return function (Yb, Ya) {
                            return function (Yl) {
                                if (typeof Yb == "boolean" && Ya === undefined) {
                                    Ya = Yb;
                                    Yb = undefined;
                                }
                                var Yx = Y9++;
                                if (Y8 === 2 && Ya) {
                                    YY.push(Yx, Yl, Yb);
                                } else {
                                    Yd.push(Yx, Yl, Yb);
                                    if (Y8 === 0) {
                                        Y8 = 1;
                                        Y7(Yv);
                                    }
                                }
                                return function () {
                                    var YU = YY.indexOf(Yx);
                                    if (YU !== -1) {
                                        YY.splice(YU, 3);
                                    } else if ((YU = Yd.indexOf(Yx)) !== -1) {
                                        Yd[YU + 1] = undefined;
                                        Yd[YU + 2] = undefined;
                                    }
                                };
                            };
                        };
                    }
                    var dw = dE(function (Y7) {
                        cc.director.once(cc.Director.EVENT_AFTER_UPDATE, Y7);
                    });
                    var dc = dE(function (Y7) {
                        Promise.resolve().then(Y7);
                    });
                    function dS(Y7, Y8) {
                        return +(Math.round(+(Y7 + "e" + Y8)) + "e-" + Y8);
                    }
                    function dA(Y7, Y8) {
                        return dS(Y7, Y8).toFixed(Y8);
                    }
                    function dC(Y7) {
                        return ("0" + Y7).slice(-2);
                    }
                    function dh(Y7) {
                        return RegExp("^[^A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿Ⰰ-﬜﷾-﹯﻽-￿]*[֑-߿יִ-﷽ﹰ-ﻼ]").test(Y7);
                    }
                    var dM;
                    var dR;
                    var dB;
                    var df;
                    var dN = {
                        groupSeparator: ",",
                        decimalSeparator: ".",
                        currencySymbol: "",
                        baseUnit: "",
                        hideDecimal: false,
                        format: function (Y7) {
                            var Y8;
                            var Y9;
                            var Yd = this.currencySymbol;
                            var YY = this.baseUnit;
                            var Yv = this.hideDecimal ? 0 : 2;
                            if (Y7 < 0) {
                                Y8 = dA(-Y7, Yv);
                                Y9 = "-";
                            } else {
                                Y8 = dA(Y7, Yv);
                                Y9 = "";
                            }
                            if (!this.hideDecimal) {
                                var Yb = this.decimalSeparator;
                                if (Yb !== ".") {
                                    Y8 = Y8.replace(".", Yb);
                                }
                            }
                            var Ya = this.groupSeparator;
                            if (Ya !== "") {
                                Y8 = Y8.replace(/\B(?=(\d{3})+(?!\d))/g, Ya);
                            }
                            var Yl = Y8 + YY;
                            if (dh(Yd)) {
                                return Y9 + Yl + Yd;
                            } else {
                                return Y9 + Yd + Yl;
                            }
                        },
                    };
                    function dD(Y7) {
                        if (Y7.groupSeparator != null || Y7.decimalSeparator != null) {
                            if (Y7.groupSeparator != null) {
                                dN.groupSeparator = Y7.groupSeparator;
                            }
                            if (Y7.decimalSeparator != null) {
                                dN.decimalSeparator = Y7.decimalSeparator;
                            }
                        } else if (Y7.currencyCode != null) {
                            var Y8 = da[Y7.currencyCode];
                            if (Y8) {
                                dN.groupSeparator = Y8.groupSeparator;
                                dN.decimalSeparator = Y8.decimalSeparator;
                            }
                        }
                        if (Y7.currencySymbol != null) {
                            dN.currencySymbol = Y7.currencySymbol;
                        }
                        if (Y7.baseUnit != null) {
                            dN.baseUnit = Y7.baseUnit;
                        }
                        if (Y7.hideDecimal != null) {
                            dN.hideDecimal = Y7.hideDecimal;
                        }
                    }
                    function dF() {
                        return {
                            groupSeparator: dN.groupSeparator,
                            decimalSeparator: dN.decimalSeparator,
                            currencySymbol: dN.currencySymbol,
                            baseUnit: dN.baseUnit,
                            hideDecimal: dN.hideDecimal,
                        };
                    }
                    function dJ() {
                        return location.protocol;
                    }
                    function dQ() {
                        return location.origin;
                    }
                    function dg(Y7, Y8) {
                        if (Y7.endsWith("/") && Y8.startsWith("/")) {
                            return Y7.substring(0, Y7.length - 1) + Y8;
                        } else if (Y7.endsWith("/") || Y8.startsWith("/")) {
                            return Y7 + Y8;
                        } else {
                            return Y7 + "/" + Y8;
                        }
                    }
                    function de(Y7) {
                        var Y8 = U[Y7];
                        if (typeof Y8 == "string") {
                            return parseInt(Y8);
                        }
                        throw Error("The engine does not exists or is not loaded");
                    }
                    var du = Object.freeze({
                        __proto__: null,
                        CompoundDisposable: db,
                        SimpleScheduler: dY,
                        clearElements: function (Y7) {
                            return Y7.splice(0);
                        },
                        clearSequence: di,
                        clearSpawn: function () {
                            dT = function () {
                                return function () {};
                            };
                        },
                        condition: function (Y7, Y8, Y9) {
                            return function (Yd) {
                                var YY = new db();
                                function Yv() {
                                    if (!YY.disposed) {
                                        Yd.apply(undefined, Array.prototype.slice.call(arguments));
                                        YY.dispose();
                                    }
                                }
                                YY.set(
                                    Y7(function (Yb, Ya) {
                                        if (!YY.disposed) {
                                            var Yl = Yb == null;
                                            if (Yl && Ya) {
                                                YY.set(Y8(Yv));
                                            } else if (Yl && Y9) {
                                                YY.set(Y9(Yv));
                                            } else {
                                                Yd(Yb);
                                                YY.dispose();
                                            }
                                        }
                                    })
                                );
                                return YY.asDisposable();
                            };
                        },
                        convertNodeSpace: function (Y7, Y8, Y9) {
                            return Y9.convertToNodeSpace(Y7.convertToWorldSpace(Y8));
                        },
                        convertNodeSpaceAR: dU,
                        currencyFormatter: dN,
                        defer: dw,
                        delay: function (Y7) {
                            return function (Y8) {
                                function _Y2() {
                                    Y8();
                                }
                                var Yd = dm();
                                Yd.scheduleOnce(_Y2, Y7);
                                return function () {
                                    Yd.unschedule(_Y2);
                                };
                            };
                        },
                        emptyFunc: dx,
                        emptyObj: dl,
                        enableFPSTracker: function () {
                            if (dR === undefined) {
                                dR = new dv();
                            }
                            dR.enableTracker();
                        },
                        firstElement: function (Y7) {
                            if (Y7.length > 0) {
                                return Y7[0];
                            } else {
                                return undefined;
                            }
                        },
                        formatCurrency: function (Y7, Y8, Y9) {
                            var Yd = dF();
                            dD({
                                currencySymbol: Y8 !== undefined ? Y8 : dN.currencySymbol,
                                baseUnit: Y9 !== undefined ? Y9 : dN.baseUnit,
                            });
                            var YY = dN.format(Y7);
                            dD(Yd);
                            return YY;
                        },
                        formatDateTime: function (Y7) {
                            return (
                                Y7.getFullYear() + "/" + dC(Y7.getMonth() + 1) + "/" + dC(Y7.getDate()) + " " + dC(Y7.getHours()) + ":" + dC(Y7.getMinutes())
                            );
                        },
                        formatGroup: function (Y7, Y8) {
                            if (Y8 == null) {
                                Y8 = dN.groupSeparator;
                            }
                            debugger;
                            return Y7.toString().replace(/\B(?=(\d{3})+(?!\d))/g, Y8);
                        },
                        formatLeadingZero: dC,
                        getAbsolutePos: function (Y7) {
                            var Y8 = Y7.parent;
                            if (!Y8) {
                                return Y7.position;
                            }
                            var Y9 = Y7.getAnchorPoint();
                            var Yd = Y8.getAnchorPoint();
                            var YY = Y7.position;
                            YY.x = Math.floor(YY.x + Yd.x * Y8.width - Y9.x * Y7.width);
                            YY.y = Math.floor(YY.y + Yd.y * Y8.height - Y9.y * Y7.height);
                            return YY;
                        },
                        getAbsoluteXPos: function (Y7) {
                            var Y8 = Y7.parent;
                            if (Y8) {
                                return Math.floor(Y7.x + Y8.anchorX * Y8.width - Y7.anchorX * Y7.width);
                            } else {
                                return Y7.x;
                            }
                        },
                        getAbsoluteYPos: function (Y7) {
                            var Y8 = Y7.parent;
                            if (Y8) {
                                return Math.floor(Y7.y + Y8.anchorY * Y8.height - Y7.anchorY * Y7.height);
                            } else {
                                return Y7.y;
                            }
                        },
                        getCocosMajor: function () {
                            if (df === undefined) {
                                df = de("CocosEngine");
                            }
                            return df;
                        },
                        getDefaultCurrencyFormat: dF,
                        getEngineMajor: function () {
                            if (dB === undefined) {
                                dB = de("COCOS_ENGINE");
                            }
                            return dB;
                        },
                        getLocationOrigin: dQ,
                        getLocationProtocol: dJ,
                        getPlatform: function () {
                            return shell.getPlatform();
                        },
                        getSharedSimpleScheduler: dm,
                        hasMethod: function (Y7, Y8) {
                            return typeof Y7[Y8] == "function";
                        },
                        hasProperty: function (Y7, Y8) {
                            return Y7[Y8] !== undefined;
                        },
                        insertElement: function (Y7, Y8, Y9) {
                            Y7.splice(Y9, 0, Y8);
                        },
                        isNumeric: function (Y7) {
                            return !isNaN(parseFloat(Y7)) && isFinite(Y7);
                        },
                        isRightToLeft: dh,
                        joinPath: dg,
                        lastElement: function (Y7) {
                            var Y8 = Y7.length;
                            if (Y8 > 0) {
                                return Y7[Y8 - 1];
                            } else {
                                return undefined;
                            }
                        },
                        observe: function (Y7, Y8) {
                            return function (Y9) {
                                try {
                                    var Yd = Y9.bind(undefined, undefined);
                                    (function (Yv, Yb, Ya) {
                                        if (typeof Yv != "object" || Yv === null) {
                                            throw Error("Invalid parameter at index 0");
                                        }
                                        if (typeof Yb != "string" || Yb === "") {
                                            throw Error("Invalid parameter at index 1");
                                        }
                                        if (typeof Ya != "function") {
                                            throw Error("Invalid parameter at index 2");
                                        }
                                        var Yl = Yv.watch_eventPool;
                                        if (!Yl) {
                                            if (!Object.isExtensible(Yv)) {
                                                throw Error("Object is not extensible");
                                            }
                                            Yl = d7.value = Object.create(null);
                                            Object.defineProperty(Yv, "watch_eventPool", d7);
                                        }
                                        var Yx = Yl[Yb];
                                        if (!Yx) {
                                            var YU = Object.getOwnPropertyDescriptor(Yv, Yb);
                                            if (!YU) {
                                                throw Error("Object property not exists");
                                            }
                                            if (YU.writable === false || (YU.get !== undefined && YU.set === undefined)) {
                                                throw Error("Object property is readonly");
                                            }
                                            if (!YU.configurable) {
                                                throw Error("Object property is not configurable");
                                            }
                                            Yx = Yl[Yb] = [];
                                            (function (Yn, Ym, YP) {
                                                if (YP.writable) {
                                                    var YX = YP.value;
                                                    YP.get = function () {
                                                        return YX;
                                                    };
                                                    YP.set = function (YE) {
                                                        var Yw = YX;
                                                        YX = YE;
                                                        d8(this.watch_eventPool[Ym], YE, Yw);
                                                    };
                                                    delete YP.value;
                                                    delete YP.writable;
                                                } else if (YP.get) {
                                                    var YT = YP.set;
                                                    YP.set = function (YE) {
                                                        YT.call(this, YE);
                                                        d8(this.watch_eventPool[Ym], this[Ym]);
                                                    };
                                                } else {
                                                    var Yi = YP.set;
                                                    YP.set = function (YE) {
                                                        Yi.call(this, YE);
                                                        d8(this.watch_eventPool[Ym], YE);
                                                    };
                                                }
                                                Object.defineProperty(Yn, Ym, YP);
                                            })(Yv, Yb, YU);
                                        }
                                        if (Yx.indexOf(Ya) !== -1) {
                                            throw Error("Watch callback exists");
                                        }
                                        Yx.push(Ya);
                                    })(Y7, Y8, Yd);
                                    var YY = d9.bind(undefined, Y7, Y8, Yd);
                                    return new db(YY).asDisposable();
                                } catch (Yv) {
                                    Y9(Yv);
                                    return dx;
                                }
                            };
                        },
                        randomInt: function (Y7, Y8) {
                            return Math.floor(Math.random() * (Y8 - Y7 + 1)) + Y7;
                        },
                        removeElement: function (Y7, Y8) {
                            var Y9 = Y7.indexOf(Y8);
                            if (Y9 !== -1) {
                                return Y7.splice(Y9, 1);
                            } else {
                                return undefined;
                            }
                        },
                        removeIndex: function (Y7, Y8) {
                            if (Y7.length >= Math.abs(Y8)) {
                                return Y7.splice(Y8, 1);
                            } else {
                                return undefined;
                            }
                        },
                        resolvePath: function (Y7, Y8) {
                            var Y9;
                            Y9 = Y8 === undefined ? Y7 : /^([a-z0-9+-.]+:)?\/\//.test(Y8) ? Y8 : dg(Y7, Y8);
                            if (/^[a-z0-9+-.]+:\/\//.test(Y9)) {
                                return Y9;
                            } else if (Y9.startsWith("//")) {
                                return dg(dJ(), Y9);
                            } else {
                                return dg(dQ(), Y9);
                            }
                        },
                        selector: function (Y7, Y8) {
                            for (var Y9, Yd, YY = [], Yv = 2; Yv < arguments.length; Yv++) {
                                YY[Yv - 2] = arguments[Yv];
                            }
                            return function (Yb) {
                                try {
                                    Yd = Y8 != null || YY.length > 0 ? Y7.apply(Y8, YY) : Y7();
                                } catch (Ya) {
                                    Y9 = Ya;
                                }
                                Yb(Y9, Yd);
                                return dx;
                            };
                        },
                        get sequence() {
                            return dX;
                        },
                        setAbsolutePos: function (Y7, Y8) {
                            var Y9 = Y7.parent;
                            if (Y9) {
                                var Yd = Y7.getAnchorPoint();
                                var YY = Y9.getAnchorPoint();
                                Y7.setPosition(
                                    new cc.Vec2(Math.floor(Y8.x - YY.x * Y9.width + Yd.x * Y7.width), Math.round(Y8.y - YY.y * Y9.height + Yd.y * Y7.height))
                                );
                            } else {
                                Y7.setPosition(Y8);
                            }
                        },
                        setAbsoluteXPos: function (Y7, Y8) {
                            var Y9 = Y7.parent;
                            Y7.x = Y9 ? Math.floor(Y8 - Y9.anchorX * Y9.width + Y7.anchorX * Y7.width) : Y8;
                        },
                        setAbsoluteYPos: function (Y7, Y8) {
                            var Y9 = Y7.parent;
                            Y7.y = Y9 ? Math.floor(Y8 - Y9.anchorY * Y9.height + Y7.anchorY * Y7.height) : Y8;
                        },
                        setDefaultCurrencyFormat: dD,
                        setFPSTrackerInterval: function (Y7) {
                            if (dR === undefined) {
                                dR = new dv();
                            }
                            dR.setTrackingInterval(Y7);
                        },
                        setNodeColorWithOpacity: function (Y7, Y8) {
                            if (!dM) {
                                dM = cc.Color.WHITE.clone();
                            }
                            dM[dd.N] = Y8[dd.N] | 4278190080;
                            Y7.color = dM;
                            Y7.opacity = Y8.getA();
                        },
                        get spawn() {
                            return dT;
                        },
                        stringToBoolean: function (Y7) {
                            if (Y7 == null) {
                                return false;
                            }
                            switch (Y7.toLowerCase().trim()) {
                                case "true":
                                case "yes":
                                case "1":
                                    return true;
                                case "false":
                                case "no":
                                case "0":
                                    return false;
                                default:
                                    return !!Y7;
                            }
                        },
                        tick: dc,
                        timeout: dP,
                        toDecimalWithExp: dS,
                        toFixed: dA,
                        transferToNewParent: function (Y7, Y8) {
                            Y7.position = dU(Y7.parent, Y7.position, Y8);
                            Y7.parent = Y8;
                        },
                        waterfall: function () {
                            var Y7;
                            Y7 = arguments.length === 1 && arguments[0] instanceof Array ? arguments[0].slice() : Array.prototype.slice.call(arguments);
                            return function (Y8) {
                                var Y9 = new db();
                                var Yd = 0;
                                function YY(Yv) {
                                    if (!Y9.disposed) {
                                        if (Yv != null || ++Yd === Y7.length) {
                                            var Yb = Array.prototype.slice.call(arguments);
                                            Y8.apply(undefined, Yb);
                                            Y9.dispose();
                                        } else {
                                            var Ya = Y7[Yd];
                                            var Yl = Ya.length;
                                            if (Yl > 1) {
                                                (Yb = Array.prototype.slice.call(arguments, 1, Yl)).push(YY);
                                                Y9.set(Ya.apply(undefined, Yb));
                                            } else {
                                                Y9.set(Ya(YY));
                                            }
                                        }
                                    }
                                }
                                Y9.set(Y7[Yd](YY));
                                return Y9.asDisposable();
                            };
                        },
                    });
                    m("Utils", du);
                    var dq;
                    var dr = l !== undefined ? l : U !== undefined ? U : typeof global != "undefined" ? global : x !== undefined ? x : {};
                    var ds = {
                        exports: {},
                    };
                    dq = ds;
                    if (!(x !== undefined || U !== undefined || dr !== undefined)) {
                        Function("", "return this")();
                    }
                    dq.exports = (function (Y7) {
                        var Y8 = {};
                        function _Y3(Yd) {
                            if (Y8[Yd]) {
                                return Y8[Yd].exports;
                            }
                            var YY = (Y8[Yd] = {
                                i: Yd,
                                l: false,
                                exports: {},
                            });
                            Y7[Yd].call(YY.exports, YY, YY.exports, _Y3);
                            YY.l = true;
                            return YY.exports;
                        }
                        _Y3.m = Y7;
                        _Y3.c = Y8;
                        _Y3.d = function (Yd, YY, Yv) {
                            if (!_Y3.o(Yd, YY)) {
                                Object.defineProperty(Yd, YY, {
                                    enumerable: true,
                                    get: Yv,
                                });
                            }
                        };
                        _Y3.r = function (Yd) {
                            if (typeof Symbol != "undefined" && Symbol.toStringTag) {
                                Object.defineProperty(Yd, Symbol.toStringTag, {
                                    value: "Module",
                                });
                            }
                            Object.defineProperty(Yd, "__esModule", {
                                value: true,
                            });
                        };
                        _Y3.t = function (Yd, YY) {
                            if (YY & 1) {
                                Yd = _Y3(Yd);
                            }
                            if (YY & 8) {
                                return Yd;
                            }
                            if (YY & 4 && typeof Yd == "object" && Yd && Yd.__esModule) {
                                return Yd;
                            }
                            var Yv = Object.create(null);
                            _Y3.r(Yv);
                            Object.defineProperty(Yv, "default", {
                                enumerable: true,
                                value: Yd,
                            });
                            if (YY & 2 && typeof Yd != "string") {
                                for (var Yb in Yd) {
                                    _Y3.d(
                                        Yv,
                                        Yb,
                                        function (Ya) {
                                            return Yd[Ya];
                                        }.bind(null, Yb)
                                    );
                                }
                            }
                            return Yv;
                        };
                        _Y3.n = function (Yd) {
                            var YY =
                                Yd && Yd.__esModule
                                    ? function () {
                                          return Yd.default;
                                      }
                                    : function () {
                                          return Yd;
                                      };
                            _Y3.d(YY, "a", YY);
                            return YY;
                        };
                        _Y3.o = function (Yd, YY) {
                            return Object.prototype.hasOwnProperty.call(Yd, YY);
                        };
                        _Y3.p = "";
                        return _Y3((_Y3.s = 18));
                    })([
                        function (Y7) {
                            function Y8(Y9) {
                                if (Y9) {
                                    return (function (Yd) {
                                        for (var YY in Y8.prototype) {
                                            Yd[YY] = Y8.prototype[YY];
                                        }
                                        return Yd;
                                    })(Y9);
                                }
                            }
                            Y7.exports = Y8;
                            Y8.prototype.on = Y8.prototype.addEventListener = function (Y9, Yd) {
                                this.U = this.U || {};
                                (this.U["$" + Y9] = this.U["$" + Y9] || []).push(Yd);
                                return this;
                            };
                            Y8.prototype.once = function (Y9, Yd) {
                                function YY() {
                                    this.off(Y9, YY);
                                    Yd.apply(this, arguments);
                                }
                                YY.fn = Yd;
                                this.on(Y9, YY);
                                return this;
                            };
                            Y8.prototype.off =
                                Y8.prototype.removeListener =
                                Y8.prototype.removeAllListeners =
                                Y8.prototype.removeEventListener =
                                    function (Y9, Yd) {
                                        this.U = this.U || {};
                                        if (arguments.length == 0) {
                                            this.U = {};
                                            return this;
                                        }
                                        var YY;
                                        var Yv = this.U["$" + Y9];
                                        if (!Yv) {
                                            return this;
                                        }
                                        if (arguments.length == 1) {
                                            delete this.U["$" + Y9];
                                            return this;
                                        }
                                        for (var Yb = 0; Yb < Yv.length; Yb++) {
                                            if ((YY = Yv[Yb]) === Yd || YY.fn === Yd) {
                                                Yv.splice(Yb, 1);
                                                break;
                                            }
                                        }
                                        if (Yv.length === 0) {
                                            delete this.U["$" + Y9];
                                        }
                                        return this;
                                    };
                            Y8.prototype.emit = function (Y9) {
                                this.U = this.U || {};
                                for (var Yd = Array(arguments.length - 1), YY = this.U["$" + Y9], Yv = 1; Yv < arguments.length; Yv++) {
                                    Yd[Yv - 1] = arguments[Yv];
                                }
                                if (YY) {
                                    Yv = 0;
                                    for (var Yb = (YY = YY.slice(0)).length; Yv < Yb; ++Yv) {
                                        YY[Yv].apply(this, Yd);
                                    }
                                }
                                return this;
                            };
                            Y8.prototype.listeners = function (Y9) {
                                this.U = this.U || {};
                                return this.U["$" + Y9] || [];
                            };
                            Y8.prototype.hasListeners = function (Y9) {
                                return !!this.listeners(Y9).length;
                            };
                        },
                        function (Y7, Y8, Y9) {
                            var Yd = Y9(24);
                            var YY = Y9(25);
                            Y7.exports = {
                                protocol: 4,
                                encodePacket: Yd,
                                encodePayload: function (Yv, Yb) {
                                    var Ya = Yv.length;
                                    var Yl = Array(Ya);
                                    var Yx = 0;
                                    Yv.forEach(function (YU, Yn) {
                                        Yd(YU, false, function (Ym) {
                                            Yl[Yn] = Ym;
                                            if (++Yx === Ya) {
                                                Yb(Yl.join(""));
                                            }
                                        });
                                    });
                                },
                                decodePacket: YY,
                                decodePayload: function (Yv, Yb) {
                                    for (var Ya = Yv.split(""), Yl = [], Yx = 0; Yx < Ya.length; Yx++) {
                                        var YU = YY(Ya[Yx], Yb);
                                        Yl.push(YU);
                                        if (YU.type === "error") {
                                            break;
                                        }
                                    }
                                    return Yl;
                                },
                            };
                        },
                        function (Y7) {
                            Y7.exports = x !== undefined ? x : U !== undefined ? U : Function("", "return this")();
                        },
                        function (Y7, Y8, Y9) {
                            var Yd = Y9(22);
                            var YY = Y9(2);
                            Y7.exports = function (Yv) {
                                var Yb = Yv.xdomain;
                                var Ya = Yv.xscheme;
                                var Yl = Yv.enablesXDR;
                                try {
                                    if (typeof XMLHttpRequest != "undefined" && (!Yb || Yd)) {
                                        return new XMLHttpRequest();
                                    }
                                } catch (Yx) {}
                                try {
                                    if (typeof XDomainRequest != "undefined" && !Ya && Yl) {
                                        return new XDomainRequest();
                                    }
                                } catch (YU) {}
                                if (!Yb) {
                                    try {
                                        return new YY[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
                                    } catch (Yn) {}
                                }
                            };
                        },
                        function (Y7, Y8, Y9) {
                            function Yd(YU) {
                                return (Yd =
                                    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                                        ? function (Yn) {
                                              return typeof Yn;
                                          }
                                        : function (Yn) {
                                              if (Yn && typeof Symbol == "function" && Yn.constructor === Symbol && Yn !== Symbol.prototype) {
                                                  return "symbol";
                                              } else {
                                                  return typeof Yn;
                                              }
                                          })(YU);
                            }
                            function YY(YU, Yn) {
                                return (YY =
                                    Object.setPrototypeOf ||
                                    function (Ym, YP) {
                                        Ym.__proto__ = YP;
                                        return Ym;
                                    })(YU, Yn);
                            }
                            function Yv(YU) {
                                var Yn = (function () {
                                    if (typeof Reflect == "undefined" || !Reflect.construct) {
                                        return false;
                                    }
                                    if (Reflect.construct.sham) {
                                        return false;
                                    }
                                    if (typeof Proxy == "function") {
                                        return true;
                                    }
                                    try {
                                        Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
                                        return true;
                                    } catch (Ym) {
                                        return false;
                                    }
                                })();
                                return function () {
                                    var Ym;
                                    var YP = Ya(YU);
                                    if (Yn) {
                                        var YX = Ya(this).constructor;
                                        Ym = Reflect.construct(YP, arguments, YX);
                                    } else {
                                        Ym = YP.apply(this, arguments);
                                    }
                                    return Yb(this, Ym);
                                };
                            }
                            function Yb(YU, Yn) {
                                if (!Yn || (Yd(Yn) !== "object" && typeof Yn != "function")) {
                                    return (function (Ym) {
                                        if (Ym === undefined) {
                                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        }
                                        return Ym;
                                    })(YU);
                                } else {
                                    return Yn;
                                }
                            }
                            function Ya(YU) {
                                return (Ya = Object.setPrototypeOf
                                    ? Object.getPrototypeOf
                                    : function (Yn) {
                                          return Yn.__proto__ || Object.getPrototypeOf(Yn);
                                      })(YU);
                            }
                            var Yl = Y9(1);
                            var Yx = (function (YU) {
                                (function (YX, YT) {
                                    if (typeof YT != "function" && YT !== null) {
                                        throw new TypeError("Super expression must either be null or a function");
                                    }
                                    YX.prototype = Object.create(YT && YT.prototype, {
                                        constructor: {
                                            value: YX,
                                            writable: true,
                                            configurable: true,
                                        },
                                    });
                                    if (YT) {
                                        YY(YX, YT);
                                    }
                                })(YP, YU);
                                var Yn;
                                var Ym = Yv(YP);
                                function YP(YX) {
                                    var YT;
                                    (function (Yi, YE) {
                                        if (!(Yi instanceof YE)) {
                                            throw new TypeError("Cannot call a class as a function");
                                        }
                                    })(this, YP);
                                    (YT = Ym.call(this)).opts = YX;
                                    YT.query = YX.query;
                                    YT.readyState = "";
                                    YT.socket = YX.socket;
                                    return YT;
                                }
                                if (
                                    (Yn = [
                                        {
                                            key: "onError",
                                            value: function (YX, YT) {
                                                var Yi = Error(YX);
                                                Yi.type = "TransportError";
                                                Yi.description = YT;
                                                this.emit("error", Yi);
                                                return this;
                                            },
                                        },
                                        {
                                            key: "open",
                                            value: function () {
                                                if (!(this.readyState !== "closed" && this.readyState !== "")) {
                                                    this.readyState = "opening";
                                                    this.doOpen();
                                                }
                                                return this;
                                            },
                                        },
                                        {
                                            key: "close",
                                            value: function () {
                                                if (!(this.readyState !== "opening" && this.readyState !== "open")) {
                                                    this.doClose();
                                                    this.onClose();
                                                }
                                                return this;
                                            },
                                        },
                                        {
                                            key: "send",
                                            value: function (YX) {
                                                if (this.readyState !== "open") {
                                                    throw Error("Transport not open");
                                                }
                                                this.write(YX);
                                            },
                                        },
                                        {
                                            key: "onOpen",
                                            value: function () {
                                                this.readyState = "open";
                                                this.writable = true;
                                                this.emit("open");
                                            },
                                        },
                                        {
                                            key: "onData",
                                            value: function (YX) {
                                                var YT = Yl.decodePacket(YX, this.socket.binaryType);
                                                this.onPacket(YT);
                                            },
                                        },
                                        {
                                            key: "onPacket",
                                            value: function (YX) {
                                                this.emit("packet", YX);
                                            },
                                        },
                                        {
                                            key: "onClose",
                                            value: function () {
                                                this.readyState = "closed";
                                                this.emit("close");
                                            },
                                        },
                                    ])
                                ) {
                                    (function (YX, YT) {
                                        for (var Yi = 0; Yi < YT.length; Yi++) {
                                            var YE = YT[Yi];
                                            YE.enumerable = YE.enumerable || false;
                                            YE.configurable = true;
                                            if ("value" in YE) {
                                                YE.writable = true;
                                            }
                                            Object.defineProperty(YX, YE.key, YE);
                                        }
                                    })(YP.prototype, Yn);
                                }
                                return YP;
                            })(Y9(0));
                            Y7.exports = Yx;
                        },
                        function (Y7, Y8) {
                            Y8.encode = function (Y9) {
                                var Yd = "";
                                for (var YY in Y9) {
                                    if (Y9.hasOwnProperty(YY)) {
                                        if (Yd.length) {
                                            Yd += "&";
                                        }
                                        Yd += encodeURIComponent(YY) + "=" + encodeURIComponent(Y9[YY]);
                                    }
                                }
                                return Yd;
                            };
                            Y8.decode = function (Y9) {
                                for (var Yd = {}, YY = Y9.split("&"), Yv = 0, Yb = YY.length; Yv < Yb; Yv++) {
                                    var Ya = YY[Yv].split("=");
                                    Yd[decodeURIComponent(Ya[0])] = decodeURIComponent(Ya[1]);
                                }
                                return Yd;
                            };
                        },
                        function (Y7, Y8, Y9) {
                            function Yd(Yw) {
                                return (Yd =
                                    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                                        ? function (Yc) {
                                              return typeof Yc;
                                          }
                                        : function (Yc) {
                                              if (Yc && typeof Symbol == "function" && Yc.constructor === Symbol && Yc !== Symbol.prototype) {
                                                  return "symbol";
                                              } else {
                                                  return typeof Yc;
                                              }
                                          })(Yw);
                            }
                            function YY(Yw, Yc, YS) {
                                return (YY =
                                    typeof Reflect != "undefined" && Reflect.get
                                        ? Reflect.get
                                        : function (YA, YC, Yt) {
                                              var Yh = (function (YR, YB) {
                                                  for (; !Object.prototype.hasOwnProperty.call(YR, YB) && (YR = Ya(YR)) !== null; );
                                                  return YR;
                                              })(YA, YC);
                                              if (Yh) {
                                                  var YM = Object.getOwnPropertyDescriptor(Yh, YC);
                                                  if (YM.get) {
                                                      return YM.get.call(Yt);
                                                  } else {
                                                      return YM.value;
                                                  }
                                              }
                                          })(Yw, Yc, YS || Yw);
                            }
                            function Yv(Yw, Yc) {
                                return (Yv =
                                    Object.setPrototypeOf ||
                                    function (YS, YA) {
                                        YS.__proto__ = YA;
                                        return YS;
                                    })(Yw, Yc);
                            }
                            function Yb(Yw, Yc) {
                                if (!Yc || (Yd(Yc) !== "object" && typeof Yc != "function")) {
                                    return (function (YS) {
                                        if (YS === undefined) {
                                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        }
                                        return YS;
                                    })(Yw);
                                } else {
                                    return Yc;
                                }
                            }
                            function Ya(Yw) {
                                return (Ya = Object.setPrototypeOf
                                    ? Object.getPrototypeOf
                                    : function (Yc) {
                                          return Yc.__proto__ || Object.getPrototypeOf(Yc);
                                      })(Yw);
                            }
                            function Yl(Yw, Yc) {
                                if (!(Yw instanceof Yc)) {
                                    throw new TypeError("Cannot call a class as a function");
                                }
                            }
                            function Yx(Yw, Yc) {
                                for (var YS = 0; YS < Yc.length; YS++) {
                                    var YA = Yc[YS];
                                    YA.enumerable = YA.enumerable || false;
                                    YA.configurable = true;
                                    if ("value" in YA) {
                                        YA.writable = true;
                                    }
                                    Object.defineProperty(Yw, YA.key, YA);
                                }
                            }
                            function YU(Yw, Yc, YS) {
                                if (Yc) {
                                    Yx(Yw.prototype, Yc);
                                }
                                if (YS) {
                                    Yx(Yw, YS);
                                }
                                return Yw;
                            }
                            Object.defineProperty(Y8, "__esModule", {
                                value: true,
                            });
                            Y8.Decoder = Y8.Encoder = Y8.PacketType = Y8.protocol = undefined;
                            var Yn;
                            var Ym = Y9(0);
                            var YP = Y9(30);
                            var YX = Y9(15);
                            Y8.protocol = 5;
                            (function (Yw) {
                                Yw[(Yw.CONNECT = 0)] = "CONNECT";
                                Yw[(Yw.DISCONNECT = 1)] = "DISCONNECT";
                                Yw[(Yw.EVENT = 2)] = "EVENT";
                                Yw[(Yw.ACK = 3)] = "ACK";
                                Yw[(Yw.CONNECT_ERROR = 4)] = "CONNECT_ERROR";
                                Yw[(Yw.BINARY_EVENT = 5)] = "BINARY_EVENT";
                                Yw[(Yw.BINARY_ACK = 6)] = "BINARY_ACK";
                            })((Yn = Y8.PacketType || (Y8.PacketType = {})));
                            var YT = (function () {
                                function Yw() {
                                    Yl(this, Yw);
                                }
                                YU(Yw, [
                                    {
                                        key: "encode",
                                        value: function (Yc) {
                                            if ((Yc.type !== Yn.EVENT && Yc.type !== Yn.ACK) || !YX.hasBinary(Yc)) {
                                                return [this.encodeAsString(Yc)];
                                            } else {
                                                Yc.type = Yc.type === Yn.EVENT ? Yn.BINARY_EVENT : Yn.BINARY_ACK;
                                                return this.encodeAsBinary(Yc);
                                            }
                                        },
                                    },
                                    {
                                        key: "encodeAsString",
                                        value: function (Yc) {
                                            var YS = "" + Yc.type;
                                            if (!(Yc.type !== Yn.BINARY_EVENT && Yc.type !== Yn.BINARY_ACK)) {
                                                YS += Yc.attachments + "-";
                                            }
                                            if (Yc.nsp && Yc.nsp !== "/") {
                                                YS += Yc.nsp + ",";
                                            }
                                            if (Yc.id != null) {
                                                YS += Yc.id;
                                            }
                                            if (Yc.data != null) {
                                                YS += JSON.stringify(Yc.data);
                                            }
                                            return YS;
                                        },
                                    },
                                    {
                                        key: "encodeAsBinary",
                                        value: function (Yc) {
                                            var YS = YP.deconstructPacket(Yc);
                                            var YA = this.encodeAsString(YS.packet);
                                            var YC = YS.buffers;
                                            YC.unshift(YA);
                                            return YC;
                                        },
                                    },
                                ]);
                                return Yw;
                            })();
                            Y8.Encoder = YT;
                            var Yi = (function (Yw) {
                                (function (YA, YC) {
                                    if (typeof YC != "function" && YC !== null) {
                                        throw new TypeError("Super expression must either be null or a function");
                                    }
                                    YA.prototype = Object.create(YC && YC.prototype, {
                                        constructor: {
                                            value: YA,
                                            writable: true,
                                            configurable: true,
                                        },
                                    });
                                    if (YC) {
                                        Yv(YA, YC);
                                    }
                                })(YS, Yw);
                                var Yc = (function (YA) {
                                    var YC = (function () {
                                        if (typeof Reflect == "undefined" || !Reflect.construct) {
                                            return false;
                                        }
                                        if (Reflect.construct.sham) {
                                            return false;
                                        }
                                        if (typeof Proxy == "function") {
                                            return true;
                                        }
                                        try {
                                            Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
                                            return true;
                                        } catch (Yt) {
                                            return false;
                                        }
                                    })();
                                    return function () {
                                        var Yt;
                                        var Yh = Ya(YA);
                                        if (YC) {
                                            var YM = Ya(this).constructor;
                                            Yt = Reflect.construct(Yh, arguments, YM);
                                        } else {
                                            Yt = Yh.apply(this, arguments);
                                        }
                                        return Yb(this, Yt);
                                    };
                                })(YS);
                                function YS() {
                                    Yl(this, YS);
                                    return Yc.call(this);
                                }
                                YU(
                                    YS,
                                    [
                                        {
                                            key: "add",
                                            value: function (YA) {
                                                var YC;
                                                if (typeof YA == "string") {
                                                    if ((YC = this.decodeString(YA)).type === Yn.BINARY_EVENT || YC.type === Yn.BINARY_ACK) {
                                                        this.reconstructor = new YE(YC);
                                                        if (YC.attachments === 0) {
                                                            YY(Ya(YS.prototype), "emit", this).call(this, "decoded", YC);
                                                        }
                                                    } else {
                                                        YY(Ya(YS.prototype), "emit", this).call(this, "decoded", YC);
                                                    }
                                                } else {
                                                    if (!YX.isBinary(YA) && !YA.base64) {
                                                        throw Error("Unknown type: " + YA);
                                                    }
                                                    if (!this.reconstructor) {
                                                        throw Error("got binary data when not reconstructing a packet");
                                                    }
                                                    if ((YC = this.reconstructor.takeBinaryData(YA))) {
                                                        this.reconstructor = null;
                                                        YY(Ya(YS.prototype), "emit", this).call(this, "decoded", YC);
                                                    }
                                                }
                                            },
                                        },
                                        {
                                            key: "decodeString",
                                            value: function (YA) {
                                                var YC = 0;
                                                var Yt = {
                                                    type: +YA.charAt(0),
                                                };
                                                if (Yn[Yt.type] === undefined) {
                                                    throw Error("unknown packet type " + Yt.type);
                                                }
                                                if (Yt.type === Yn.BINARY_EVENT || Yt.type === Yn.BINARY_ACK) {
                                                    for (var Yh = YC + 1; YA.charAt(++YC) !== "-" && YC != YA.length; );
                                                    var YM = YA.substring(Yh, YC);
                                                    if (YM != +YM || YA.charAt(YC) !== "-") {
                                                        throw Error("Illegal attachments");
                                                    }
                                                    Yt.attachments = +YM;
                                                }
                                                if (YA.charAt(YC + 1) === "/") {
                                                    for (var YR = YC + 1; ++YC && YA.charAt(YC) !== "," && YC !== YA.length; );
                                                    Yt.nsp = YA.substring(YR, YC);
                                                } else {
                                                    Yt.nsp = "/";
                                                }
                                                var YB = YA.charAt(YC + 1);
                                                if (YB !== "" && +YB == YB) {
                                                    for (var Yf = YC + 1; ++YC; ) {
                                                        var YN = YA.charAt(YC);
                                                        if (YN == null || +YN != YN) {
                                                            --YC;
                                                            break;
                                                        }
                                                        if (YC === YA.length) {
                                                            break;
                                                        }
                                                    }
                                                    Yt.id = +YA.substring(Yf, YC + 1);
                                                }
                                                if (YA.charAt(++YC)) {
                                                    var YD = (function (Yo) {
                                                        try {
                                                            return JSON.parse(Yo);
                                                        } catch (YF) {
                                                            return false;
                                                        }
                                                    })(YA.substr(YC));
                                                    if (!YS.isPayloadValid(Yt.type, YD)) {
                                                        throw Error("invalid payload");
                                                    }
                                                    Yt.data = YD;
                                                }
                                                return Yt;
                                            },
                                        },
                                        {
                                            key: "destroy",
                                            value: function () {
                                                if (this.reconstructor) {
                                                    this.reconstructor.finishedReconstruction();
                                                }
                                            },
                                        },
                                    ],
                                    [
                                        {
                                            key: "isPayloadValid",
                                            value: function (YA, YC) {
                                                switch (YA) {
                                                    case Yn.CONNECT:
                                                        return Yd(YC) === "object";
                                                    case Yn.DISCONNECT:
                                                        return YC === undefined;
                                                    case Yn.CONNECT_ERROR:
                                                        return typeof YC == "string" || Yd(YC) === "object";
                                                    case Yn.EVENT:
                                                    case Yn.BINARY_EVENT:
                                                        return Array.isArray(YC) && typeof YC[0] == "string";
                                                    case Yn.ACK:
                                                    case Yn.BINARY_ACK:
                                                        return Array.isArray(YC);
                                                }
                                            },
                                        },
                                    ]
                                );
                                return YS;
                            })(Ym);
                            Y8.Decoder = Yi;
                            var YE = (function () {
                                function Yw(Yc) {
                                    Yl(this, Yw);
                                    this.packet = Yc;
                                    this.buffers = [];
                                    this.reconPack = Yc;
                                }
                                YU(Yw, [
                                    {
                                        key: "takeBinaryData",
                                        value: function (Yc) {
                                            this.buffers.push(Yc);
                                            if (this.buffers.length === this.reconPack.attachments) {
                                                var YS = YP.reconstructPacket(this.reconPack, this.buffers);
                                                this.finishedReconstruction();
                                                return YS;
                                            }
                                            return null;
                                        },
                                    },
                                    {
                                        key: "finishedReconstruction",
                                        value: function () {
                                            this.reconPack = null;
                                            this.buffers = [];
                                        },
                                    },
                                ]);
                                return Yw;
                            })();
                        },
                        function (Y7) {
                            var Y8 =
                                /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
                            var Y9 = [
                                "source",
                                "protocol",
                                "authority",
                                "userInfo",
                                "user",
                                "password",
                                "host",
                                "port",
                                "relative",
                                "path",
                                "directory",
                                "file",
                                "query",
                                "anchor",
                            ];
                            Y7.exports = function (Yd) {
                                var YY = Yd;
                                var Yv = Yd.indexOf("[");
                                var Yb = Yd.indexOf("]");
                                if (Yv != -1 && Yb != -1) {
                                    Yd = Yd.substring(0, Yv) + Yd.substring(Yv, Yb).replace(/:/g, ";") + Yd.substring(Yb, Yd.length);
                                }
                                for (var Ya, Yl, Yx = Y8.exec(Yd || ""), YU = {}, Yn = 14; Yn--; ) {
                                    YU[Y9[Yn]] = Yx[Yn] || "";
                                }
                                if (Yv != -1 && Yb != -1) {
                                    YU.source = YY;
                                    YU.host = YU.host.substring(1, YU.host.length - 1).replace(/;/g, ":");
                                    YU.authority = YU.authority.replace("[", "").replace("]", "").replace(/;/g, ":");
                                    YU.ipv6uri = true;
                                }
                                YU.pathNames = (function (Ym, YP) {
                                    var YX = YP.replace(/\/{2,9}/g, "/").split("/");
                                    if (!(YP.substr(0, 1) != "/" && YP.length !== 0)) {
                                        YX.splice(0, 1);
                                    }
                                    if (YP.substr(YP.length - 1, 1) == "/") {
                                        YX.splice(YX.length - 1, 1);
                                    }
                                    return YX;
                                })(0, YU.path);
                                Ya = YU.query;
                                Yl = {};
                                Ya.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (Ym, YP, YX) {
                                    if (YP) {
                                        Yl[YP] = YX;
                                    }
                                });
                                YU.queryKey = Yl;
                                return YU;
                            };
                        },
                        function (Y7, Y8, Y9) {
                            function Yd(Yi) {
                                return (Yd =
                                    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                                        ? function (YE) {
                                              return typeof YE;
                                          }
                                        : function (YE) {
                                              if (YE && typeof Symbol == "function" && YE.constructor === Symbol && YE !== Symbol.prototype) {
                                                  return "symbol";
                                              } else {
                                                  return typeof YE;
                                              }
                                          })(Yi);
                            }
                            function YY(Yi, YE, Yw) {
                                return (YY =
                                    typeof Reflect != "undefined" && Reflect.get
                                        ? Reflect.get
                                        : function (Yc, YS, YA) {
                                              var YC = (function (Yh, YM) {
                                                  for (; !Object.prototype.hasOwnProperty.call(Yh, YM) && (Yh = Ya(Yh)) !== null; );
                                                  return Yh;
                                              })(Yc, YS);
                                              if (YC) {
                                                  var Yt = Object.getOwnPropertyDescriptor(YC, YS);
                                                  if (Yt.get) {
                                                      return Yt.get.call(YA);
                                                  } else {
                                                      return Yt.value;
                                                  }
                                              }
                                          })(Yi, YE, Yw || Yi);
                            }
                            function Yv(Yi, YE) {
                                return (Yv =
                                    Object.setPrototypeOf ||
                                    function (Yw, Yc) {
                                        Yw.__proto__ = Yc;
                                        return Yw;
                                    })(Yi, YE);
                            }
                            function Yb(Yi, YE) {
                                if (!YE || (Yd(YE) !== "object" && typeof YE != "function")) {
                                    return (function (Yw) {
                                        if (Yw === undefined) {
                                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        }
                                        return Yw;
                                    })(Yi);
                                } else {
                                    return YE;
                                }
                            }
                            function Ya(Yi) {
                                return (Ya = Object.setPrototypeOf
                                    ? Object.getPrototypeOf
                                    : function (YE) {
                                          return YE.__proto__ || Object.getPrototypeOf(YE);
                                      })(Yi);
                            }
                            Object.defineProperty(Y8, "__esModule", {
                                value: true,
                            });
                            Y8.Manager = undefined;
                            var Yl = Y9(20);
                            var Yx = Y9(14);
                            var YU = Y9(0);
                            var Yn = Y9(6);
                            var Ym = Y9(16);
                            var YP = Y9(17);
                            var YX = Y9(31);
                            var YT = (function (Yi) {
                                (function (YS, YA) {
                                    if (typeof YA != "function" && YA !== null) {
                                        throw new TypeError("Super expression must either be null or a function");
                                    }
                                    YS.prototype = Object.create(YA && YA.prototype, {
                                        constructor: {
                                            value: YS,
                                            writable: true,
                                            configurable: true,
                                        },
                                    });
                                    if (YA) {
                                        Yv(YS, YA);
                                    }
                                })(Yc, Yi);
                                var YE;
                                var Yw = (function (YS) {
                                    var YA = (function () {
                                        if (typeof Reflect == "undefined" || !Reflect.construct) {
                                            return false;
                                        }
                                        if (Reflect.construct.sham) {
                                            return false;
                                        }
                                        if (typeof Proxy == "function") {
                                            return true;
                                        }
                                        try {
                                            Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
                                            return true;
                                        } catch (YC) {
                                            return false;
                                        }
                                    })();
                                    return function () {
                                        var YC;
                                        var Yt = Ya(YS);
                                        if (YA) {
                                            var Yh = Ya(this).constructor;
                                            YC = Reflect.construct(Yt, arguments, Yh);
                                        } else {
                                            YC = Yt.apply(this, arguments);
                                        }
                                        return Yb(this, YC);
                                    };
                                })(Yc);
                                function Yc(YS, YA) {
                                    var YC;
                                    (function (Yh, YM) {
                                        if (!(Yh instanceof YM)) {
                                            throw new TypeError("Cannot call a class as a function");
                                        }
                                    })(this, Yc);
                                    (YC = Yw.call(this)).nsps = {};
                                    YC.subs = [];
                                    YC.connecting = [];
                                    if (YS && Yd(YS) === "object") {
                                        YA = YS;
                                        YS = undefined;
                                    }
                                    (YA = YA || {}).path = YA.path || "/socket.io";
                                    YC.opts = YA;
                                    YC.reconnection(YA.reconnection !== false);
                                    YC.reconnectionAttempts(YA.reconnectionAttempts || Infinity);
                                    YC.reconnectionDelay(YA.reconnectionDelay || 1000);
                                    YC.reconnectionDelayMax(YA.reconnectionDelayMax || 5000);
                                    YC.randomizationFactor(YA.randomizationFactor || 0.5);
                                    YC.backoff = new YX({
                                        min: YC.reconnectionDelay(),
                                        max: YC.reconnectionDelayMax(),
                                        jitter: YC.randomizationFactor(),
                                    });
                                    YC.timeout(YA.timeout == null ? 20000 : YA.timeout);
                                    YC._readyState = "closed";
                                    YC.uri = YS;
                                    var Yt = YA.parser || Yn;
                                    YC.encoder = new Yt.Encoder();
                                    YC.decoder = new Yt.Decoder();
                                    YC._autoConnect = YA.autoConnect !== false;
                                    if (YC._autoConnect) {
                                        YC.open();
                                    }
                                    return YC;
                                }
                                if (
                                    (YE = [
                                        {
                                            key: "reconnection",
                                            value: function (YS) {
                                                if (arguments.length) {
                                                    this.F = !!YS;
                                                    return this;
                                                } else {
                                                    return this.F;
                                                }
                                            },
                                        },
                                        {
                                            key: "reconnectionAttempts",
                                            value: function (YS) {
                                                if (YS === undefined) {
                                                    return this.L;
                                                } else {
                                                    this.L = YS;
                                                    return this;
                                                }
                                            },
                                        },
                                        {
                                            key: "reconnectionDelay",
                                            value: function (YS) {
                                                if (YS === undefined) {
                                                    return this.X;
                                                } else {
                                                    this.X = YS;
                                                    if (this.backoff) {
                                                        this.backoff.setMin(YS);
                                                    }
                                                    return this;
                                                }
                                            },
                                        },
                                        {
                                            key: "randomizationFactor",
                                            value: function (YS) {
                                                if (YS === undefined) {
                                                    return this.H;
                                                } else {
                                                    this.H = YS;
                                                    if (this.backoff) {
                                                        this.backoff.setJitter(YS);
                                                    }
                                                    return this;
                                                }
                                            },
                                        },
                                        {
                                            key: "reconnectionDelayMax",
                                            value: function (YS) {
                                                if (YS === undefined) {
                                                    return this.q;
                                                } else {
                                                    this.q = YS;
                                                    if (this.backoff) {
                                                        this.backoff.setMax(YS);
                                                    }
                                                    return this;
                                                }
                                            },
                                        },
                                        {
                                            key: "timeout",
                                            value: function (YS) {
                                                if (arguments.length) {
                                                    this.K = YS;
                                                    return this;
                                                } else {
                                                    return this.K;
                                                }
                                            },
                                        },
                                        {
                                            key: "maybeReconnectOnOpen",
                                            value: function () {
                                                if (!this._reconnecting && this.F && this.backoff.attempts === 0) {
                                                    this.reconnect();
                                                }
                                            },
                                        },
                                        {
                                            key: "open",
                                            value: function (YS) {
                                                var YA = this;
                                                if (~this._readyState.indexOf("open")) {
                                                    return this;
                                                }
                                                this.engine = Yl(this.uri, this.opts);
                                                var YC = this.engine;
                                                var Yt = this;
                                                this._readyState = "opening";
                                                this.skipReconnect = false;
                                                var Yh = Ym.on(YC, "open", function () {
                                                    Yt.onopen();
                                                    if (YS) {
                                                        YS();
                                                    }
                                                });
                                                var YM = Ym.on(YC, "error", function (Yf) {
                                                    Yt.cleanup();
                                                    Yt._readyState = "closed";
                                                    YY(Ya(Yc.prototype), "emit", YA).call(YA, "error", Yf);
                                                    if (YS) {
                                                        YS(Yf);
                                                    } else {
                                                        Yt.maybeReconnectOnOpen();
                                                    }
                                                });
                                                if (this.K !== false) {
                                                    var YR = this.K;
                                                    if (YR === 0) {
                                                        Yh.destroy();
                                                    }
                                                    var YB = // TOLOOK
                                                        setTimeout(function () {
                                                            Yh.destroy();
                                                            YC.close();
                                                            YC.emit("error", Error("timeout"));
                                                        }, YR);
                                                    this.subs.push({
                                                        destroy: function () {
                                                            clearTimeout(YB);
                                                        },
                                                    });
                                                }
                                                this.subs.push(Yh);
                                                this.subs.push(YM);
                                                return this;
                                            },
                                        },
                                        {
                                            key: "connect",
                                            value: function (YS) {
                                                return this.open(YS);
                                            },
                                        },
                                        {
                                            key: "onopen",
                                            value: function () {
                                                this.cleanup();
                                                this._readyState = "open";
                                                YY(Ya(Yc.prototype), "emit", this).call(this, "open");
                                                var YS = this.engine;
                                                this.subs.push(Ym.on(YS, "data", YP(this, "ondata")));
                                                this.subs.push(Ym.on(YS, "ping", YP(this, "onping")));
                                                this.subs.push(Ym.on(YS, "error", YP(this, "onerror")));
                                                this.subs.push(Ym.on(YS, "close", YP(this, "onclose")));
                                                this.subs.push(Ym.on(this.decoder, "decoded", YP(this, "ondecoded")));
                                            },
                                        },
                                        {
                                            key: "onping",
                                            value: function () {
                                                YY(Ya(Yc.prototype), "emit", this).call(this, "ping");
                                            },
                                        },
                                        {
                                            key: "ondata",
                                            value: function (YS) {
                                                this.decoder.add(YS);
                                            },
                                        },
                                        {
                                            key: "ondecoded",
                                            value: function (YS) {
                                                YY(Ya(Yc.prototype), "emit", this).call(this, "packet", YS);
                                            },
                                        },
                                        {
                                            key: "onerror",
                                            value: function (YS) {
                                                YY(Ya(Yc.prototype), "emit", this).call(this, "error", YS);
                                            },
                                        },
                                        {
                                            key: "socket",
                                            value: function (YS, YA) {
                                                var YC = this.nsps[YS];
                                                if (!YC) {
                                                    YC = new Yx.Socket(this, YS, YA);
                                                    this.nsps[YS] = YC;
                                                    var Yt = this;
                                                    YC.on("connecting", Yh);
                                                    if (this._autoConnect) {
                                                        Yh();
                                                    }
                                                }
                                                function Yh() {
                                                    if (!~Yt.connecting.indexOf(YC)) {
                                                        Yt.connecting.push(YC);
                                                    }
                                                }
                                                return YC;
                                            },
                                        },
                                        {
                                            key: "_destroy",
                                            value: function (YS) {
                                                var YA = this.connecting.indexOf(YS);
                                                if (~YA) {
                                                    this.connecting.splice(YA, 1);
                                                }
                                                if (!this.connecting.length) {
                                                    this._close();
                                                }
                                            },
                                        },
                                        {
                                            key: "_packet",
                                            value: function (YS) {
                                                if (YS.query && YS.type === 0) {
                                                    YS.nsp += "?" + YS.query;
                                                }
                                                for (var YA = this.encoder.encode(YS), YC = 0; YC < YA.length; YC++) {
                                                    this.engine.write(YA[YC], YS.options);
                                                }
                                            },
                                        },
                                        {
                                            key: "cleanup",
                                            value: function () {
                                                for (var YS = this.subs.length, YA = 0; YA < YS; YA++) {
                                                    this.subs.shift().destroy();
                                                }
                                                this.decoder.destroy();
                                            },
                                        },
                                        {
                                            key: "_close",
                                            value: function () {
                                                this.skipReconnect = true;
                                                this._reconnecting = false;
                                                if (this._readyState === "opening") {
                                                    this.cleanup();
                                                }
                                                this.backoff.reset();
                                                this._readyState = "closed";
                                                if (this.engine) {
                                                    this.engine.close();
                                                }
                                            },
                                        },
                                        {
                                            key: "disconnect",
                                            value: function () {
                                                return this._close();
                                            },
                                        },
                                        {
                                            key: "onclose",
                                            value: function (YS) {
                                                this.cleanup();
                                                this.backoff.reset();
                                                this._readyState = "closed";
                                                YY(Ya(Yc.prototype), "emit", this).call(this, "close", YS);
                                                if (this.F && !this.skipReconnect) {
                                                    this.reconnect();
                                                }
                                            },
                                        },
                                        {
                                            key: "reconnect",
                                            value: function () {
                                                var YS = this;
                                                if (this._reconnecting || this.skipReconnect) {
                                                    return this;
                                                }
                                                var YA = this;
                                                if (this.backoff.attempts >= this.L) {
                                                    this.backoff.reset();
                                                    YY(Ya(Yc.prototype), "emit", this).call(this, "reconnect_failed");
                                                    this._reconnecting = false;
                                                } else {
                                                    var YC = this.backoff.duration();
                                                    this._reconnecting = true;
                                                    var Yt = // TOLOOK
                                                        setTimeout(function () {
                                                            if (!YA.skipReconnect) {
                                                                YY(Ya(Yc.prototype), "emit", YS).call(YS, "reconnect_attempt", YA.backoff.attempts);
                                                                if (!YA.skipReconnect) {
                                                                    YA.open(function (Yh) {
                                                                        if (Yh) {
                                                                            YA._reconnecting = false;
                                                                            YA.reconnect();
                                                                            YY(Ya(Yc.prototype), "emit", YS).call(YS, "reconnect_error", Yh);
                                                                        } else {
                                                                            YA.onreconnect();
                                                                        }
                                                                    });
                                                                }
                                                            }
                                                        }, YC);
                                                    this.subs.push({
                                                        destroy: function () {
                                                            clearTimeout(Yt);
                                                        },
                                                    });
                                                }
                                            },
                                        },
                                        {
                                            key: "onreconnect",
                                            value: function () {
                                                var YS = this.backoff.attempts;
                                                this._reconnecting = false;
                                                this.backoff.reset();
                                                YY(Ya(Yc.prototype), "emit", this).call(this, "reconnect", YS);
                                            },
                                        },
                                    ])
                                ) {
                                    (function (YS, YA) {
                                        for (var YC = 0; YC < YA.length; YC++) {
                                            var Yt = YA[YC];
                                            Yt.enumerable = Yt.enumerable || false;
                                            Yt.configurable = true;
                                            if ("value" in Yt) {
                                                Yt.writable = true;
                                            }
                                            Object.defineProperty(YS, Yt.key, Yt);
                                        }
                                    })(Yc.prototype, YE);
                                }
                                return Yc;
                            })(YU);
                            Y8.Manager = YT;
                        },
                        function (Y7, Y8, Y9) {
                            var Yd = Y9(3);
                            var YY = Y9(23);
                            var Yv = Y9(27);
                            var Yb = Y9(28);
                            Y8.polling = function (Ya) {
                                var Yl = false;
                                var Yx = false;
                                var YU = Ya.jsonp !== false;
                                if (typeof location != "undefined") {
                                    var Yn = location.protocol === "https:";
                                    var Ym = location.port;
                                    if (!Ym) {
                                        Ym = Yn ? 443 : 80;
                                    }
                                    Yl = Ya.hostname !== location.hostname || Ym !== Ya.port;
                                    Yx = Ya.secure !== Yn;
                                }
                                Ya.xdomain = Yl;
                                Ya.xscheme = Yx;
                                if ("open" in new Yd(Ya) && !Ya.forceJSONP) {
                                    return new YY(Ya);
                                }
                                if (!YU) {
                                    throw Error("JSONP disabled");
                                }
                                return new Yv(Ya);
                            };
                            Y8.websocket = Yb;
                        },
                        function (Y7, Y8, Y9) {
                            function Yd(YX) {
                                return (Yd =
                                    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                                        ? function (YT) {
                                              return typeof YT;
                                          }
                                        : function (YT) {
                                              if (YT && typeof Symbol == "function" && YT.constructor === Symbol && YT !== Symbol.prototype) {
                                                  return "symbol";
                                              } else {
                                                  return typeof YT;
                                              }
                                          })(YX);
                            }
                            function YY(YX, YT) {
                                if (!(YX instanceof YT)) {
                                    throw new TypeError("Cannot call a class as a function");
                                }
                            }
                            function Yv(YX, YT) {
                                return (Yv =
                                    Object.setPrototypeOf ||
                                    function (Yi, YE) {
                                        Yi.__proto__ = YE;
                                        return Yi;
                                    })(YX, YT);
                            }
                            function Yb(YX) {
                                var YT = (function () {
                                    if (typeof Reflect == "undefined" || !Reflect.construct) {
                                        return false;
                                    }
                                    if (Reflect.construct.sham) {
                                        return false;
                                    }
                                    if (typeof Proxy == "function") {
                                        return true;
                                    }
                                    try {
                                        Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
                                        return true;
                                    } catch (Yi) {
                                        return false;
                                    }
                                })();
                                return function () {
                                    var Yi;
                                    var YE = Yl(YX);
                                    if (YT) {
                                        var Yw = Yl(this).constructor;
                                        Yi = Reflect.construct(YE, arguments, Yw);
                                    } else {
                                        Yi = YE.apply(this, arguments);
                                    }
                                    return Ya(this, Yi);
                                };
                            }
                            function Ya(YX, YT) {
                                if (!YT || (Yd(YT) !== "object" && typeof YT != "function")) {
                                    return (function (Yi) {
                                        if (Yi === undefined) {
                                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        }
                                        return Yi;
                                    })(YX);
                                } else {
                                    return YT;
                                }
                            }
                            function Yl(YX) {
                                return (Yl = Object.setPrototypeOf
                                    ? Object.getPrototypeOf
                                    : function (YT) {
                                          return YT.__proto__ || Object.getPrototypeOf(YT);
                                      })(YX);
                            }
                            var Yx = Y9(4);
                            var YU = Y9(5);
                            var Yn = Y9(1);
                            var Ym = Y9(12);
                            var YP = (function (YX) {
                                (function (Yw, Yc) {
                                    if (typeof Yc != "function" && Yc !== null) {
                                        throw new TypeError("Super expression must either be null or a function");
                                    }
                                    Yw.prototype = Object.create(Yc && Yc.prototype, {
                                        constructor: {
                                            value: Yw,
                                            writable: true,
                                            configurable: true,
                                        },
                                    });
                                    if (Yc) {
                                        Yv(Yw, Yc);
                                    }
                                })(YE, YX);
                                var YT;
                                var Yi = Yb(YE);
                                function YE() {
                                    YY(this, YE);
                                    return Yi.apply(this, arguments);
                                }
                                if (
                                    (YT = [
                                        {
                                            key: "doOpen",
                                            value: function () {
                                                this.poll();
                                            },
                                        },
                                        {
                                            key: "pause",
                                            value: function (Yw) {
                                                var Yc = this;
                                                function YA() {
                                                    Yc.readyState = "paused";
                                                    Yw();
                                                }
                                                this.readyState = "pausing";
                                                if (this.polling || !this.writable) {
                                                    var YS = 0;
                                                    if (this.polling) {
                                                        YS++;
                                                        this.once("pollComplete", function () {
                                                            if (!--YS) {
                                                                YA();
                                                            }
                                                        });
                                                    }
                                                    if (!this.writable) {
                                                        YS++;
                                                        this.once("drain", function () {
                                                            if (!--YS) {
                                                                YA();
                                                            }
                                                        });
                                                    }
                                                } else {
                                                    YA();
                                                }
                                            },
                                        },
                                        {
                                            key: "poll",
                                            value: function () {
                                                this.polling = true;
                                                this.doPoll();
                                                this.emit("poll");
                                            },
                                        },
                                        {
                                            key: "onData",
                                            value: function (Yw) {
                                                var Yc = this;
                                                Yn.decodePayload(Yw, this.socket.binaryType).forEach(function (YS) {
                                                    if (Yc.readyState === "opening" && YS.type === "open") {
                                                        Yc.onOpen();
                                                    }
                                                    if (YS.type === "close") {
                                                        Yc.onClose();
                                                        return false;
                                                    }
                                                    Yc.onPacket(YS);
                                                });
                                                if (this.readyState !== "closed") {
                                                    this.polling = false;
                                                    this.emit("pollComplete");
                                                    if (this.readyState === "open") {
                                                        this.poll();
                                                    }
                                                }
                                            },
                                        },
                                        {
                                            key: "doClose",
                                            value: function () {
                                                var Yw = this;
                                                function Yc() {
                                                    Yw.write([
                                                        {
                                                            type: "close",
                                                        },
                                                    ]);
                                                }
                                                if (this.readyState === "open") {
                                                    Yc();
                                                } else {
                                                    this.once("open", Yc);
                                                }
                                            },
                                        },
                                        {
                                            key: "write",
                                            value: function (Yw) {
                                                var Yc = this;
                                                this.writable = false;
                                                Yn.encodePayload(Yw, function (YS) {
                                                    Yc.doWrite(YS, function () {
                                                        Yc.writable = true;
                                                        Yc.emit("drain");
                                                    });
                                                });
                                            },
                                        },
                                        {
                                            key: "uri",
                                            value: function () {
                                                var Yw = this.query || {};
                                                var Yc = this.opts.secure ? "https" : "http";
                                                var YS = "";
                                                if (this.opts.timestampRequests !== false) {
                                                    Yw[this.opts.timestampParam] = Ym();
                                                }
                                                if (!(this.supportsBinary || Yw.sid)) {
                                                    Yw.b64 = 1;
                                                }
                                                Yw = YU.encode(Yw);
                                                if (
                                                    this.opts.port &&
                                                    ((Yc === "https" && +this.opts.port != 443) || (Yc === "http" && +this.opts.port != 80))
                                                ) {
                                                    YS = ":" + this.opts.port;
                                                }
                                                if (Yw.length) {
                                                    Yw = "?" + Yw;
                                                }
                                                return (
                                                    Yc +
                                                    "://" +
                                                    (this.opts.hostname.indexOf(":") !== -1 ? "[" + this.opts.hostname + "]" : this.opts.hostname) +
                                                    YS +
                                                    this.opts.path +
                                                    Yw
                                                );
                                            },
                                        },
                                        {
                                            key: "name",
                                            get: function () {
                                                return "polling";
                                            },
                                        },
                                    ])
                                ) {
                                    (function (Yw, Yc) {
                                        for (var YS = 0; YS < Yc.length; YS++) {
                                            var YA = Yc[YS];
                                            YA.enumerable = YA.enumerable || false;
                                            YA.configurable = true;
                                            if ("value" in YA) {
                                                YA.writable = true;
                                            }
                                            Object.defineProperty(Yw, YA.key, YA);
                                        }
                                    })(YE.prototype, YT);
                                }
                                return YE;
                            })(Yx);
                            Y7.exports = YP;
                        },
                        function (Y7) {
                            var Y8 = Object.create(null);
                            Y8.open = "0";
                            Y8.close = "1";
                            Y8.ping = "2";
                            Y8.pong = "3";
                            Y8.message = "4";
                            Y8.upgrade = "5";
                            Y8.noop = "6";
                            var Y9 = Object.create(null);
                            Object.keys(Y8).forEach(function (Yd) {
                                Y9[Y8[Yd]] = Yd;
                            });
                            Y7.exports = {
                                PACKET_TYPES: Y8,
                                PACKET_TYPES_REVERSE: Y9,
                                ERROR_PACKET: {
                                    type: "error",
                                    data: "parser error",
                                },
                            };
                        },
                        function (Y7) {
                            var Y8;
                            var Y9 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split("");
                            var Yd = {};
                            var YY = 0;
                            var Yv = 0;
                            function Yb(Yl) {
                                var Yx = "";
                                do {
                                    Yx = Y9[Yl % 64] + Yx;
                                    Yl = Math.floor(Yl / 64);
                                } while (Yl > 0);
                                return Yx;
                            }
                            function Ya() {
                                var Yl = Yb(+new Date());
                                if (Yl !== Y8) {
                                    YY = 0;
                                    return (Y8 = Yl);
                                } else {
                                    return Yl + "." + Yb(YY++);
                                }
                            }
                            for (; Yv < 64; Yv++) {
                                Yd[Y9[Yv]] = Yv;
                            }
                            Ya.encode = Yb;
                            Ya.decode = function (Yl) {
                                var Yx = 0;
                                for (Yv = 0; Yv < Yl.length; Yv++) {
                                    Yx = Yx * 64 + Yd[Yl.charAt(Yv)];
                                }
                                return Yx;
                            };
                            Y7.exports = Ya;
                        },
                        function (Y7) {
                            Y7.exports.pick = function (Y8) {
                                for (var Y9 = arguments.length, Yd = Array(Y9 > 1 ? Y9 - 1 : 0), YY = 1; YY < Y9; YY++) {
                                    Yd[YY - 1] = arguments[YY];
                                }
                                return Yd.reduce(function (Yv, Yb) {
                                    Yv[Yb] = Y8[Yb];
                                    return Yv;
                                }, {});
                            };
                        },
                        function (Y7, Y8, Y9) {
                            function Yd(YE) {
                                return (Yd =
                                    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                                        ? function (Yw) {
                                              return typeof Yw;
                                          }
                                        : function (Yw) {
                                              if (Yw && typeof Symbol == "function" && Yw.constructor === Symbol && Yw !== Symbol.prototype) {
                                                  return "symbol";
                                              } else {
                                                  return typeof Yw;
                                              }
                                          })(YE);
                            }
                            function YY(YE, Yw) {
                                var Yc;
                                if (typeof Symbol == "undefined" || YE[Symbol.iterator] == null) {
                                    if (
                                        Array.isArray(YE) ||
                                        (Yc = (function (YM, YR) {
                                            if (YM) {
                                                if (typeof YM == "string") {
                                                    return Yv(YM, YR);
                                                }
                                                var YB = Object.prototype.toString.call(YM).slice(8, -1);
                                                if (YB === "Object" && YM.constructor) {
                                                    YB = YM.constructor.name;
                                                }
                                                if (YB === "Map" || YB === "Set") {
                                                    return Array.from(YM);
                                                } else if (YB === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(YB)) {
                                                    return Yv(YM, YR);
                                                } else {
                                                    return undefined;
                                                }
                                            }
                                        })(YE)) ||
                                        Yw
                                    ) {
                                        if (Yc) {
                                            YE = Yc;
                                        }
                                        var YS = 0;
                                        function YA() {}
                                        return {
                                            s: YA,
                                            n: function () {
                                                if (YS >= YE.length) {
                                                    return {
                                                        done: true,
                                                    };
                                                } else {
                                                    return {
                                                        done: false,
                                                        value: YE[YS++],
                                                    };
                                                }
                                            },
                                            e: function (YM) {
                                                throw YM;
                                            },
                                            f: YA,
                                        };
                                    }
                                    throw new TypeError(
                                        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                                    );
                                }
                                var YC;
                                var Yt = true;
                                var Yh = false;
                                return {
                                    s: function () {
                                        Yc = YE[Symbol.iterator]();
                                    },
                                    n: function () {
                                        var YM = Yc.next();
                                        Yt = YM.done;
                                        return YM;
                                    },
                                    e: function (YM) {
                                        Yh = true;
                                        YC = YM;
                                    },
                                    f: function () {
                                        try {
                                            if (!(Yt || Yc.return == null)) {
                                                Yc.return();
                                            }
                                        } finally {
                                            if (Yh) {
                                                throw YC;
                                            }
                                        }
                                    },
                                };
                            }
                            function Yv(YE, Yw) {
                                if (Yw == null || Yw > YE.length) {
                                    Yw = YE.length;
                                }
                                for (var Yc = 0, YS = Array(Yw); Yc < Yw; Yc++) {
                                    YS[Yc] = YE[Yc];
                                }
                                return YS;
                            }
                            function Yb(YE, Yw, Yc) {
                                return (Yb =
                                    typeof Reflect != "undefined" && Reflect.get
                                        ? Reflect.get
                                        : function (YS, YA, YC) {
                                              var Yt = (function (YM, YR) {
                                                  for (; !Object.prototype.hasOwnProperty.call(YM, YR) && (YM = YU(YM)) !== null; );
                                                  return YM;
                                              })(YS, YA);
                                              if (Yt) {
                                                  var Yh = Object.getOwnPropertyDescriptor(Yt, YA);
                                                  if (Yh.get) {
                                                      return Yh.get.call(YC);
                                                  } else {
                                                      return Yh.value;
                                                  }
                                              }
                                          })(YE, Yw, Yc || YE);
                            }
                            function Ya(YE, Yw) {
                                return (Ya =
                                    Object.setPrototypeOf ||
                                    function (Yc, YS) {
                                        Yc.__proto__ = YS;
                                        return Yc;
                                    })(YE, Yw);
                            }
                            function Yl(YE) {
                                var Yw = (function () {
                                    if (typeof Reflect == "undefined" || !Reflect.construct) {
                                        return false;
                                    }
                                    if (Reflect.construct.sham) {
                                        return false;
                                    }
                                    if (typeof Proxy == "function") {
                                        return true;
                                    }
                                    try {
                                        Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
                                        return true;
                                    } catch (Yc) {
                                        return false;
                                    }
                                })();
                                return function () {
                                    var Yc;
                                    var YS = YU(YE);
                                    if (Yw) {
                                        var YA = YU(this).constructor;
                                        Yc = Reflect.construct(YS, arguments, YA);
                                    } else {
                                        Yc = YS.apply(this, arguments);
                                    }
                                    return Yx(this, Yc);
                                };
                            }
                            function Yx(YE, Yw) {
                                if (!Yw || (Yd(Yw) !== "object" && typeof Yw != "function")) {
                                    return (function (Yc) {
                                        if (Yc === undefined) {
                                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        }
                                        return Yc;
                                    })(YE);
                                } else {
                                    return Yw;
                                }
                            }
                            function YU(YE) {
                                return (YU = Object.setPrototypeOf
                                    ? Object.getPrototypeOf
                                    : function (Yw) {
                                          return Yw.__proto__ || Object.getPrototypeOf(Yw);
                                      })(YE);
                            }
                            Object.defineProperty(Y8, "__esModule", {
                                value: true,
                            });
                            Y8.Socket = undefined;
                            var Yn = Y9(6);
                            var Ym = Y9(0);
                            var YP = Y9(16);
                            var YX = Y9(17);
                            var YT = {
                                connect: 1,
                                connect_error: 1,
                                disconnect: 1,
                                disconnecting: 1,
                                newListener: 1,
                                removeListener: 1,
                            };
                            var Yi = (function (YE) {
                                (function (YA, YC) {
                                    if (typeof YC != "function" && YC !== null) {
                                        throw new TypeError("Super expression must either be null or a function");
                                    }
                                    YA.prototype = Object.create(YC && YC.prototype, {
                                        constructor: {
                                            value: YA,
                                            writable: true,
                                            configurable: true,
                                        },
                                    });
                                    if (YC) {
                                        Ya(YA, YC);
                                    }
                                })(YS, YE);
                                var Yw;
                                var Yc = Yl(YS);
                                function YS(YA, YC, Yt) {
                                    var Yh;
                                    (function (YM, YR) {
                                        if (!(YM instanceof YR)) {
                                            throw new TypeError("Cannot call a class as a function");
                                        }
                                    })(this, YS);
                                    (Yh = Yc.call(this)).ids = 0;
                                    Yh.acks = {};
                                    Yh.receiveBuffer = [];
                                    Yh.sendBuffer = [];
                                    Yh.flags = {};
                                    Yh.io = YA;
                                    Yh.nsp = YC;
                                    Yh.ids = 0;
                                    Yh.acks = {};
                                    Yh.receiveBuffer = [];
                                    Yh.sendBuffer = [];
                                    Yh.connected = false;
                                    Yh.disconnected = true;
                                    Yh.flags = {};
                                    if (Yt && Yt.auth) {
                                        Yh.auth = Yt.auth;
                                    }
                                    if (Yh.io._autoConnect) {
                                        Yh.open();
                                    }
                                    return Yh;
                                }
                                if (
                                    (Yw = [
                                        {
                                            key: "subEvents",
                                            value: function () {
                                                if (!this.subs) {
                                                    var YA = this.io;
                                                    this.subs = [
                                                        YP.on(YA, "open", YX(this, "onopen")),
                                                        YP.on(YA, "packet", YX(this, "onpacket")),
                                                        YP.on(YA, "close", YX(this, "onclose")),
                                                    ];
                                                }
                                            },
                                        },
                                        {
                                            key: "connect",
                                            value: function () {
                                                if (!this.connected) {
                                                    this.subEvents();
                                                    if (!this.io._reconnecting) {
                                                        this.io.open();
                                                    }
                                                    if (this.io._readyState === "open") {
                                                        this.onopen();
                                                    }
                                                }
                                                return this;
                                            },
                                        },
                                        {
                                            key: "open",
                                            value: function () {
                                                return this.connect();
                                            },
                                        },
                                        {
                                            key: "send",
                                            value: function () {
                                                for (var YA = arguments.length, YC = Array(YA), Yt = 0; Yt < YA; Yt++) {
                                                    YC[Yt] = arguments[Yt];
                                                }
                                                YC.unshift("message");
                                                this.emit.apply(this, YC);
                                                return this;
                                            },
                                        },
                                        {
                                            key: "emit",
                                            value: function (YA) {
                                                if (YT.hasOwnProperty(YA)) {
                                                    throw Error('"' + YA + '" is a reserved event name');
                                                }
                                                for (var YC = arguments.length, Yt = Array(YC > 1 ? YC - 1 : 0), Yh = 1; Yh < YC; Yh++) {
                                                    Yt[Yh - 1] = arguments[Yh];
                                                }
                                                Yt.unshift(YA);
                                                var YM = {
                                                    type: Yn.PacketType.EVENT,
                                                    data: Yt,
                                                    options: {},
                                                };
                                                YM.options.compress = this.flags.compress !== false;
                                                if (typeof Yt[Yt.length - 1] == "function") {
                                                    this.acks[this.ids] = Yt.pop();
                                                    YM.id = this.ids++;
                                                }
                                                var YR = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
                                                if (!(this.flags.volatile && (!YR || !this.connected))) {
                                                    if (this.connected) {
                                                        this.packet(YM);
                                                    } else {
                                                        this.sendBuffer.push(YM);
                                                    }
                                                }
                                                this.flags = {};
                                                return this;
                                            },
                                        },
                                        {
                                            key: "packet",
                                            value: function (YA) {
                                                YA.nsp = this.nsp;
                                                this.io._packet(YA);
                                            },
                                        },
                                        {
                                            key: "onopen",
                                            value: function () {
                                                var YA = this;
                                                if (typeof this.auth == "function") {
                                                    this.auth(function (YC) {
                                                        YA.packet({
                                                            type: Yn.PacketType.CONNECT,
                                                            data: YC,
                                                        });
                                                    });
                                                } else {
                                                    this.packet({
                                                        type: Yn.PacketType.CONNECT,
                                                        data: this.auth,
                                                    });
                                                }
                                            },
                                        },
                                        {
                                            key: "onclose",
                                            value: function (YA) {
                                                this.connected = false;
                                                this.disconnected = true;
                                                delete this.id;
                                                Yb(YU(YS.prototype), "emit", this).call(this, "disconnect", YA);
                                            },
                                        },
                                        {
                                            key: "onpacket",
                                            value: function (YA) {
                                                if (YA.nsp === this.nsp) {
                                                    switch (YA.type) {
                                                        case Yn.PacketType.CONNECT:
                                                            var YC = YA.data.sid;
                                                            this.onconnect(YC);
                                                            break;
                                                        case Yn.PacketType.EVENT:
                                                        case Yn.PacketType.BINARY_EVENT:
                                                            this.onevent(YA);
                                                            break;
                                                        case Yn.PacketType.ACK:
                                                        case Yn.PacketType.BINARY_ACK:
                                                            this.onack(YA);
                                                            break;
                                                        case Yn.PacketType.DISCONNECT:
                                                            this.ondisconnect();
                                                            break;
                                                        case Yn.PacketType.CONNECT_ERROR:
                                                            var Yt = Error(YA.data.message);
                                                            Yt.data = YA.data.data;
                                                            Yb(YU(YS.prototype), "emit", this).call(this, "connect_error", Yt);
                                                    }
                                                }
                                            },
                                        },
                                        {
                                            key: "onevent",
                                            value: function (YA) {
                                                var YC = YA.data || [];
                                                if (YA.id != null) {
                                                    YC.push(this.ack(YA.id));
                                                }
                                                if (this.connected) {
                                                    this.emitEvent(YC);
                                                } else {
                                                    this.receiveBuffer.push(YC);
                                                }
                                            },
                                        },
                                        {
                                            key: "emitEvent",
                                            value: function (YA) {
                                                if (this.W && this.W.length) {
                                                    var YC;
                                                    var Yt = YY(this.W.slice());
                                                    try {
                                                        for (Yt.s(); !(YC = Yt.n()).done; ) {
                                                            YC.value.apply(this, YA);
                                                        }
                                                    } catch (Yh) {
                                                        Yt.e(Yh);
                                                    } finally {
                                                        Yt.f();
                                                    }
                                                }
                                                Yb(YU(YS.prototype), "emit", this).apply(this, YA);
                                            },
                                        },
                                        {
                                            key: "ack",
                                            value: function (YA) {
                                                var YC = this;
                                                var Yt = false;
                                                return function () {
                                                    if (!Yt) {
                                                        Yt = true;
                                                        for (var Yh = arguments.length, YM = Array(Yh), YR = 0; YR < Yh; YR++) {
                                                            YM[YR] = arguments[YR];
                                                        }
                                                        YC.packet({
                                                            type: Yn.PacketType.ACK,
                                                            id: YA,
                                                            data: YM,
                                                        });
                                                    }
                                                };
                                            },
                                        },
                                        {
                                            key: "onack",
                                            value: function (YA) {
                                                var YC = this.acks[YA.id];
                                                if (typeof YC == "function") {
                                                    YC.apply(this, YA.data);
                                                    delete this.acks[YA.id];
                                                }
                                            },
                                        },
                                        {
                                            key: "onconnect",
                                            value: function (YA) {
                                                this.id = YA;
                                                this.connected = true;
                                                this.disconnected = false;
                                                Yb(YU(YS.prototype), "emit", this).call(this, "connect");
                                                this.emitBuffered();
                                            },
                                        },
                                        {
                                            key: "emitBuffered",
                                            value: function () {
                                                for (var YA = 0; YA < this.receiveBuffer.length; YA++) {
                                                    this.emitEvent(this.receiveBuffer[YA]);
                                                }
                                                this.receiveBuffer = [];
                                                for (var YC = 0; YC < this.sendBuffer.length; YC++) {
                                                    this.packet(this.sendBuffer[YC]);
                                                }
                                                this.sendBuffer = [];
                                            },
                                        },
                                        {
                                            key: "ondisconnect",
                                            value: function () {
                                                this.destroy();
                                                this.onclose("io server disconnect");
                                            },
                                        },
                                        {
                                            key: "destroy",
                                            value: function () {
                                                if (this.subs) {
                                                    for (var YA = 0; YA < this.subs.length; YA++) {
                                                        this.subs[YA].destroy();
                                                    }
                                                    this.subs = null;
                                                }
                                                this.io._destroy(this);
                                            },
                                        },
                                        {
                                            key: "disconnect",
                                            value: function () {
                                                if (this.connected) {
                                                    this.packet({
                                                        type: Yn.PacketType.DISCONNECT,
                                                    });
                                                }
                                                this.destroy();
                                                if (this.connected) {
                                                    this.onclose("io client disconnect");
                                                }
                                                return this;
                                            },
                                        },
                                        {
                                            key: "close",
                                            value: function () {
                                                return this.disconnect();
                                            },
                                        },
                                        {
                                            key: "compress",
                                            value: function (YA) {
                                                this.flags.compress = YA;
                                                return this;
                                            },
                                        },
                                        {
                                            key: "onAny",
                                            value: function (YA) {
                                                this.W = this.W || [];
                                                this.W.push(YA);
                                                return this;
                                            },
                                        },
                                        {
                                            key: "prependAny",
                                            value: function (YA) {
                                                this.W = this.W || [];
                                                this.W.unshift(YA);
                                                return this;
                                            },
                                        },
                                        {
                                            key: "offAny",
                                            value: function (YA) {
                                                if (!this.W) {
                                                    return this;
                                                }
                                                if (YA) {
                                                    for (var YC = this.W, Yt = 0; Yt < YC.length; Yt++) {
                                                        if (YA === YC[Yt]) {
                                                            YC.splice(Yt, 1);
                                                            return this;
                                                        }
                                                    }
                                                } else {
                                                    this.W = [];
                                                }
                                                return this;
                                            },
                                        },
                                        {
                                            key: "listenersAny",
                                            value: function () {
                                                return this.W || [];
                                            },
                                        },
                                        {
                                            key: "volatile",
                                            get: function () {
                                                this.flags.volatile = true;
                                                return this;
                                            },
                                        },
                                    ])
                                ) {
                                    (function (YA, YC) {
                                        for (var Yt = 0; Yt < YC.length; Yt++) {
                                            var Yh = YC[Yt];
                                            Yh.enumerable = Yh.enumerable || false;
                                            Yh.configurable = true;
                                            if ("value" in Yh) {
                                                Yh.writable = true;
                                            }
                                            Object.defineProperty(YA, Yh.key, Yh);
                                        }
                                    })(YS.prototype, Yw);
                                }
                                return YS;
                            })(Ym);
                            Y8.Socket = Yi;
                        },
                        function (Y7, Y8) {
                            function Y9(Yl) {
                                return (Y9 =
                                    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                                        ? function (Yx) {
                                              return typeof Yx;
                                          }
                                        : function (Yx) {
                                              if (Yx && typeof Symbol == "function" && Yx.constructor === Symbol && Yx !== Symbol.prototype) {
                                                  return "symbol";
                                              } else {
                                                  return typeof Yx;
                                              }
                                          })(Yl);
                            }
                            Object.defineProperty(Y8, "__esModule", {
                                value: true,
                            });
                            Y8.hasBinary = Y8.isBinary = undefined;
                            var Yd = typeof ArrayBuffer == "function";
                            var YY = Object.prototype.toString;
                            var Yv = typeof Blob == "function" || (typeof Blob != "undefined" && YY.call(Blob) === "[object BlobConstructor]");
                            var Yb = typeof File == "function" || (typeof File != "undefined" && YY.call(File) === "[object FileConstructor]");
                            function Ya(Yl) {
                                return (
                                    (Yd &&
                                        (Yl instanceof ArrayBuffer ||
                                            (function (Yx) {
                                                if (typeof ArrayBuffer.isView == "function") {
                                                    return ArrayBuffer.isView(Yx);
                                                } else {
                                                    return Yx.buffer instanceof ArrayBuffer;
                                                }
                                            })(Yl))) ||
                                    (Yv && Yl instanceof Blob) ||
                                    (Yb && Yl instanceof File)
                                );
                            }
                            Y8.isBinary = Ya;
                            Y8.hasBinary = function Yl(Yx, YU) {
                                if (!Yx || Y9(Yx) !== "object") {
                                    return false;
                                }
                                if (Array.isArray(Yx)) {
                                    for (var Yn = 0, Ym = Yx.length; Yn < Ym; Yn++) {
                                        if (Yl(Yx[Yn])) {
                                            return true;
                                        }
                                    }
                                    return false;
                                }
                                if (Ya(Yx)) {
                                    return true;
                                }
                                if (Yx.toJSON && typeof Yx.toJSON == "function" && arguments.length === 1) {
                                    return Yl(Yx.toJSON(), true);
                                }
                                for (var YP in Yx) {
                                    if (Object.prototype.hasOwnProperty.call(Yx, YP) && Yl(Yx[YP])) {
                                        return true;
                                    }
                                }
                                return false;
                            };
                        },
                        function (Y7, Y8) {
                            Object.defineProperty(Y8, "__esModule", {
                                value: true,
                            });
                            Y8.on = undefined;
                            Y8.on = function (Y9, Yd, YY) {
                                Y9.on(Yd, YY);
                                return {
                                    destroy: function () {
                                        Y9.removeListener(Yd, YY);
                                    },
                                };
                            };
                        },
                        function (Y7) {
                            var Y8 = [].slice;
                            Y7.exports = function (Y9, Yd) {
                                if (typeof Yd == "string") {
                                    Yd = Y9[Yd];
                                }
                                if (typeof Yd != "function") {
                                    throw Error("bind() requires a function");
                                }
                                var YY = Y8.call(arguments, 2);
                                return function () {
                                    return Yd.apply(Y9, YY.concat(Y8.call(arguments)));
                                };
                            };
                        },
                        function (Y7, Y8, Y9) {
                            function Yd(Yn) {
                                return (Yd =
                                    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                                        ? function (Ym) {
                                              return typeof Ym;
                                          }
                                        : function (Ym) {
                                              if (Ym && typeof Symbol == "function" && Ym.constructor === Symbol && Ym !== Symbol.prototype) {
                                                  return "symbol";
                                              } else {
                                                  return typeof Ym;
                                              }
                                          })(Yn);
                            }
                            Object.defineProperty(Y8, "__esModule", {
                                value: true,
                            });
                            Y8.Socket = Y8.io = Y8.Manager = Y8.protocol = undefined;
                            var YY = Y9(19);
                            var Yv = Y9(8);
                            var Yb = Y9(14);
                            Object.defineProperty(Y8, "Socket", {
                                enumerable: true,
                                get: function () {
                                    return Yb.Socket;
                                },
                            });
                            Y7.exports = Y8 = Yl;
                            var Ya = (Y8.managers = {});
                            function Yl(Yn, Ym) {
                                if (Yd(Yn) === "object") {
                                    Ym = Yn;
                                    Yn = undefined;
                                }
                                Ym = Ym || {};
                                var YP;
                                var YX = YY.url(Yn);
                                var YT = YX.source;
                                var Yi = YX.id;
                                var YE = YX.path;
                                var Yw = Ya[Yi] && YE in Ya[Yi].nsps;
                                if (Ym.forceNew || Ym["force new connection"] || Ym.multiplex === false || Yw) {
                                    YP = new Yv.Manager(YT, Ym);
                                } else {
                                    if (!Ya[Yi]) {
                                        Ya[Yi] = new Yv.Manager(YT, Ym);
                                    }
                                    YP = Ya[Yi];
                                }
                                if (YX.query && !Ym.query) {
                                    Ym.query = YX.query;
                                }
                                return YP.socket(YX.path, Ym);
                            }
                            Y8.io = Yl;
                            var Yx = Y9(6);
                            Object.defineProperty(Y8, "protocol", {
                                enumerable: true,
                                get: function () {
                                    return Yx.protocol;
                                },
                            });
                            Y8.connect = Yl;
                            var YU = Y9(8);
                            Object.defineProperty(Y8, "Manager", {
                                enumerable: true,
                                get: function () {
                                    return YU.Manager;
                                },
                            });
                        },
                        function (Y7, Y8, Y9) {
                            Object.defineProperty(Y8, "__esModule", {
                                value: true,
                            });
                            Y8.url = undefined;
                            var Yd = Y9(7);
                            Y8.url = function (YY, Yv) {
                                var Yb = YY;
                                Yv = Yv || (typeof location != "undefined" && location);
                                if (YY == null) {
                                    YY = Yv.protocol + "//" + Yv.host;
                                }
                                if (typeof YY == "string") {
                                    if (YY.charAt(0) === "/") {
                                        YY = YY.charAt(1) === "/" ? Yv.protocol + YY : Yv.host + YY;
                                    }
                                    if (!/^(https?|wss?):\/\//.test(YY)) {
                                        YY = Yv !== undefined ? Yv.protocol + "//" + YY : "https://" + YY;
                                    }
                                    Yb = Yd(YY);
                                }
                                if (!Yb.port) {
                                    if (/^(http|ws)$/.test(Yb.protocol)) {
                                        Yb.port = "80";
                                    } else if (/^(http|ws)s$/.test(Yb.protocol)) {
                                        Yb.port = "443";
                                    }
                                }
                                Yb.path = Yb.path || "/";
                                var Ya = Yb.host.indexOf(":") !== -1 ? "[" + Yb.host + "]" : Yb.host;
                                Yb.id = Yb.protocol + "://" + Ya + ":" + Yb.port;
                                Yb.href = Yb.protocol + "://" + Ya + (Yv && Yv.port === Yb.port ? "" : ":" + Yb.port);
                                return Yb;
                            };
                        },
                        function (Y7, Y8, Y9) {
                            var Yd = Y9(21);
                            Y7.exports = function (YY, Yv) {
                                return new Yd(YY, Yv);
                            };
                            Y7.exports.Socket = Yd;
                            Y7.exports.protocol = Yd.protocol;
                            Y7.exports.Transport = Y9(4);
                            Y7.exports.transports = Y9(9);
                            Y7.exports.parser = Y9(1);
                        },
                        function (Y7, Y8, Y9) {
                            function Yd() {
                                return (Yd =
                                    Object.assign ||
                                    function (Yi) {
                                        for (var YE = 1; YE < arguments.length; YE++) {
                                            var Yw = arguments[YE];
                                            for (var Yc in Yw) {
                                                if (Object.prototype.hasOwnProperty.call(Yw, Yc)) {
                                                    Yi[Yc] = Yw[Yc];
                                                }
                                            }
                                        }
                                        return Yi;
                                    }).apply(this, arguments);
                            }
                            function YY(Yi) {
                                return (YY =
                                    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                                        ? function (YE) {
                                              return typeof YE;
                                          }
                                        : function (YE) {
                                              if (YE && typeof Symbol == "function" && YE.constructor === Symbol && YE !== Symbol.prototype) {
                                                  return "symbol";
                                              } else {
                                                  return typeof YE;
                                              }
                                          })(Yi);
                            }
                            function Yv(Yi, YE) {
                                if (!(Yi instanceof YE)) {
                                    throw new TypeError("Cannot call a class as a function");
                                }
                            }
                            function Yb(Yi, YE) {
                                return (Yb =
                                    Object.setPrototypeOf ||
                                    function (Yw, Yc) {
                                        Yw.__proto__ = Yc;
                                        return Yw;
                                    })(Yi, YE);
                            }
                            function Ya(Yi) {
                                var YE = (function () {
                                    if (typeof Reflect == "undefined" || !Reflect.construct) {
                                        return false;
                                    }
                                    if (Reflect.construct.sham) {
                                        return false;
                                    }
                                    if (typeof Proxy == "function") {
                                        return true;
                                    }
                                    try {
                                        Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
                                        return true;
                                    } catch (Yw) {
                                        return false;
                                    }
                                })();
                                return function () {
                                    var Yw;
                                    var Yc = Yx(Yi);
                                    if (YE) {
                                        var YS = Yx(this).constructor;
                                        Yw = Reflect.construct(Yc, arguments, YS);
                                    } else {
                                        Yw = Yc.apply(this, arguments);
                                    }
                                    return Yl(this, Yw);
                                };
                            }
                            function Yl(Yi, YE) {
                                if (!YE || (YY(YE) !== "object" && typeof YE != "function")) {
                                    return (function (Yw) {
                                        if (Yw === undefined) {
                                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        }
                                        return Yw;
                                    })(Yi);
                                } else {
                                    return YE;
                                }
                            }
                            function Yx(Yi) {
                                return (Yx = Object.setPrototypeOf
                                    ? Object.getPrototypeOf
                                    : function (YE) {
                                          return YE.__proto__ || Object.getPrototypeOf(YE);
                                      })(Yi);
                            }
                            var YU = Y9(9);
                            var Yn = Y9(0);
                            var Ym = Y9(1);
                            var YP = Y9(7);
                            var YX = Y9(5);
                            var YT = (function (Yi) {
                                (function (YS, YA) {
                                    if (typeof YA != "function" && YA !== null) {
                                        throw new TypeError("Super expression must either be null or a function");
                                    }
                                    YS.prototype = Object.create(YA && YA.prototype, {
                                        constructor: {
                                            value: YS,
                                            writable: true,
                                            configurable: true,
                                        },
                                    });
                                    if (YA) {
                                        Yb(YS, YA);
                                    }
                                })(Yc, Yi);
                                var YE;
                                var Yw = Ya(Yc);
                                function Yc(YS) {
                                    var YA;
                                    var YC = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                                    Yv(this, Yc);
                                    YA = Yw.call(this);
                                    if (YS && YY(YS) === "object") {
                                        YC = YS;
                                        YS = null;
                                    }
                                    if (YS) {
                                        YS = YP(YS);
                                        YC.hostname = YS.host;
                                        YC.secure = YS.protocol === "https" || YS.protocol === "wss";
                                        YC.port = YS.port;
                                        if (YS.query) {
                                            YC.query = YS.query;
                                        }
                                    } else if (YC.host) {
                                        YC.hostname = YP(YC.host).host;
                                    }
                                    YA.secure = YC.secure != null ? YC.secure : typeof location != "undefined" && location.protocol === "https:";
                                    if (YC.hostname && !YC.port) {
                                        YC.port = YA.secure ? "443" : "80";
                                    }
                                    YA.hostname = YC.hostname || (typeof location != "undefined" ? location.hostname : "localhost");
                                    YA.port = YC.port || (typeof location != "undefined" && location.port ? location.port : YA.secure ? 443 : 80);
                                    YA.transports = YC.transports || ["polling", "websocket"];
                                    YA.readyState = "";
                                    YA.writeBuffer = [];
                                    YA.prevBufferLen = 0;
                                    YA.opts = Yd(
                                        {
                                            path: "/engine.io",
                                            agent: false,
                                            withCredentials: false,
                                            upgrade: true,
                                            jsonp: true,
                                            timestampParam: "t",
                                            policyPort: 843,
                                            rememberUpgrade: false,
                                            rejectUnauthorized: true,
                                            perMessageDeflate: {
                                                threshold: 1024,
                                            },
                                            transportOptions: {},
                                        },
                                        YC
                                    );
                                    YA.opts.path = YA.opts.path.replace(/\/$/, "") + "/";
                                    if (typeof YA.opts.query == "string") {
                                        YA.opts.query = YX.decode(YA.opts.query);
                                    }
                                    YA.id = null;
                                    YA.upgrades = null;
                                    YA.pingInterval = null;
                                    YA.pingTimeout = null;
                                    YA.pingTimeoutTimer = null;
                                    YA.open();
                                    return YA;
                                }
                                if (
                                    (YE = [
                                        {
                                            key: "createTransport",
                                            value: function (YS) {
                                                var YA = (function (Yt) {
                                                    var Yh = {};
                                                    for (var YM in Yt) {
                                                        if (Yt.hasOwnProperty(YM)) {
                                                            Yh[YM] = Yt[YM];
                                                        }
                                                    }
                                                    return Yh;
                                                })(this.opts.query);
                                                YA.EIO = Ym.protocol;
                                                YA.transport = YS;
                                                if (this.id) {
                                                    YA.sid = this.id;
                                                }
                                                var YC = Yd({}, this.opts.transportOptions[YS], this.opts, {
                                                    query: YA,
                                                    socket: this,
                                                    hostname: this.hostname,
                                                    secure: this.secure,
                                                    port: this.port,
                                                });
                                                return new YU[YS](YC);
                                            },
                                        },
                                        {
                                            key: "open",
                                            value: function () {
                                                var YS;
                                                if (this.opts.rememberUpgrade && Yc.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) {
                                                    YS = "websocket";
                                                } else {
                                                    if (this.transports.length === 0) {
                                                        var YA = this;
                                                        // TOLOOK
                                                        setTimeout(function () {
                                                            YA.emit("error", "No transports available");
                                                        }, 0);
                                                        return;
                                                    }
                                                    YS = this.transports[0];
                                                }
                                                this.readyState = "opening";
                                                try {
                                                    YS = this.createTransport(YS);
                                                } catch (YC) {
                                                    this.transports.shift();
                                                    this.open();
                                                    return;
                                                }
                                                YS.open();
                                                this.setTransport(YS);
                                            },
                                        },
                                        {
                                            key: "setTransport",
                                            value: function (YS) {
                                                var YA = this;
                                                if (this.transport) {
                                                    this.transport.removeAllListeners();
                                                }
                                                this.transport = YS;
                                                YS.on("drain", function () {
                                                    YA.onDrain();
                                                })
                                                    .on("packet", function (YC) {
                                                        YA.onPacket(YC);
                                                    })
                                                    .on("error", function (YC) {
                                                        YA.onError(YC);
                                                    })
                                                    .on("close", function () {
                                                        YA.onClose("transport close");
                                                    });
                                            },
                                        },
                                        {
                                            key: "probe",
                                            value: function (YS) {
                                                var YA = this.createTransport(YS, {
                                                    probe: 1,
                                                });
                                                var YC = false;
                                                var Yt = this;
                                                function Yh() {
                                                    if (Yt.onlyBinaryUpgrades) {
                                                        var Yo = !this.supportsBinary && Yt.transport.supportsBinary;
                                                        YC = YC || Yo;
                                                    }
                                                    if (!YC) {
                                                        YA.send([
                                                            {
                                                                type: "ping",
                                                                data: "probe",
                                                            },
                                                        ]);
                                                        YA.once("packet", function (YF) {
                                                            if (!YC) {
                                                                if (YF.type === "pong" && YF.data === "probe") {
                                                                    Yt.upgrading = true;
                                                                    Yt.emit("upgrading", YA);
                                                                    if (!YA) {
                                                                        return;
                                                                    }
                                                                    Yc.priorWebsocketSuccess = YA.name === "websocket";
                                                                    Yt.transport.pause(function () {
                                                                        if (!YC) {
                                                                            if (Yt.readyState !== "closed") {
                                                                                YD();
                                                                                Yt.setTransport(YA);
                                                                                YA.send([
                                                                                    {
                                                                                        type: "upgrade",
                                                                                    },
                                                                                ]);
                                                                                Yt.emit("upgrade", YA);
                                                                                YA = null;
                                                                                Yt.upgrading = false;
                                                                                Yt.flush();
                                                                            }
                                                                        }
                                                                    });
                                                                } else {
                                                                    var YJ = Error("probe error");
                                                                    YJ.transport = YA.name;
                                                                    Yt.emit("upgradeError", YJ);
                                                                }
                                                            }
                                                        });
                                                    }
                                                }
                                                function YM() {
                                                    if (!YC) {
                                                        YC = true;
                                                        YD();
                                                        YA.close();
                                                        YA = null;
                                                    }
                                                }
                                                function YR(Yo) {
                                                    var YF = Error("probe error: " + Yo);
                                                    YF.transport = YA.name;
                                                    YM();
                                                    Yt.emit("upgradeError", YF);
                                                }
                                                function YB() {
                                                    YR("transport closed");
                                                }
                                                function Yf() {
                                                    YR("socket closed");
                                                }
                                                function YN(Yo) {
                                                    if (YA && Yo.name !== YA.name) {
                                                        YM();
                                                    }
                                                }
                                                function YD() {
                                                    YA.removeListener("open", Yh);
                                                    YA.removeListener("error", YR);
                                                    YA.removeListener("close", YB);
                                                    Yt.removeListener("close", Yf);
                                                    Yt.removeListener("upgrading", YN);
                                                }
                                                Yc.priorWebsocketSuccess = false;
                                                YA.once("open", Yh);
                                                YA.once("error", YR);
                                                YA.once("close", YB);
                                                this.once("close", Yf);
                                                this.once("upgrading", YN);
                                                YA.open();
                                            },
                                        },
                                        {
                                            key: "onOpen",
                                            value: function () {
                                                this.readyState = "open";
                                                Yc.priorWebsocketSuccess = this.transport.name === "websocket";
                                                this.emit("open");
                                                this.flush();
                                                if (this.readyState === "open" && this.opts.upgrade && this.transport.pause) {
                                                    for (var YS = 0, YA = this.upgrades.length; YS < YA; YS++) {
                                                        this.probe(this.upgrades[YS]);
                                                    }
                                                }
                                            },
                                        },
                                        {
                                            key: "onPacket",
                                            value: function (YS) {
                                                if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
                                                    this.emit("packet", YS);
                                                    this.emit("heartbeat");
                                                    switch (YS.type) {
                                                        case "open":
                                                            this.onHandshake(JSON.parse(YS.data));
                                                            break;
                                                        case "ping":
                                                            this.resetPingTimeout();
                                                            this.sendPacket("pong");
                                                            this.emit("pong");
                                                            break;
                                                        case "error":
                                                            var YA = Error("server error");
                                                            YA.code = YS.data;
                                                            this.onError(YA);
                                                            break;
                                                        case "message":
                                                            this.emit("data", YS.data);
                                                            this.emit("message", YS.data);
                                                    }
                                                }
                                            },
                                        },
                                        {
                                            key: "onHandshake",
                                            value: function (YS) {
                                                this.emit("handshake", YS);
                                                this.id = YS.sid;
                                                this.transport.query.sid = YS.sid;
                                                this.upgrades = this.filterUpgrades(YS.upgrades);
                                                this.pingInterval = YS.pingInterval;
                                                this.pingTimeout = YS.pingTimeout;
                                                this.onOpen();
                                                if (this.readyState !== "closed") {
                                                    this.resetPingTimeout();
                                                }
                                            },
                                        },
                                        {
                                            key: "resetPingTimeout",
                                            value: function () {
                                                var YS = this;
                                                clearTimeout(this.pingTimeoutTimer);
                                                this.pingTimeoutTimer = // TOLOOK
                                                    setTimeout(function () {
                                                        YS.onClose("ping timeout");
                                                    }, this.pingInterval + this.pingTimeout);
                                            },
                                        },
                                        {
                                            key: "onDrain",
                                            value: function () {
                                                this.writeBuffer.splice(0, this.prevBufferLen);
                                                this.prevBufferLen = 0;
                                                if (this.writeBuffer.length === 0) {
                                                    this.emit("drain");
                                                } else {
                                                    this.flush();
                                                }
                                            },
                                        },
                                        {
                                            key: "flush",
                                            value: function () {
                                                if (this.readyState !== "closed" && this.transport.writable && !this.upgrading && this.writeBuffer.length) {
                                                    this.transport.send(this.writeBuffer);
                                                    this.prevBufferLen = this.writeBuffer.length;
                                                    this.emit("flush");
                                                }
                                            },
                                        },
                                        {
                                            key: "write",
                                            value: function (YS, YA, YC) {
                                                this.sendPacket("message", YS, YA, YC);
                                                return this;
                                            },
                                        },
                                        {
                                            key: "send",
                                            value: function (YS, YA, YC) {
                                                this.sendPacket("message", YS, YA, YC);
                                                return this;
                                            },
                                        },
                                        {
                                            key: "sendPacket",
                                            value: function (YS, YA, YC, Yt) {
                                                if (typeof YA == "function") {
                                                    Yt = YA;
                                                    YA = undefined;
                                                }
                                                if (typeof YC == "function") {
                                                    Yt = YC;
                                                    YC = null;
                                                }
                                                if (this.readyState !== "closing" && this.readyState !== "closed") {
                                                    (YC = YC || {}).compress = YC.compress !== false;
                                                    var Yh = {
                                                        type: YS,
                                                        data: YA,
                                                        options: YC,
                                                    };
                                                    this.emit("packetCreate", Yh);
                                                    this.writeBuffer.push(Yh);
                                                    if (Yt) {
                                                        this.once("flush", Yt);
                                                    }
                                                    this.flush();
                                                }
                                            },
                                        },
                                        {
                                            key: "close",
                                            value: function () {
                                                var YS = this;
                                                function YA() {
                                                    YS.onClose("forced close");
                                                    YS.transport.close();
                                                }
                                                function YC() {
                                                    YS.removeListener("upgrade", YC);
                                                    YS.removeListener("upgradeError", YC);
                                                    YA();
                                                }
                                                function Yt() {
                                                    YS.once("upgrade", YC);
                                                    YS.once("upgradeError", YC);
                                                }
                                                if (!(this.readyState !== "opening" && this.readyState !== "open")) {
                                                    this.readyState = "closing";
                                                    if (this.writeBuffer.length) {
                                                        this.once("drain", function () {
                                                            if (this.upgrading) {
                                                                Yt();
                                                            } else {
                                                                YA();
                                                            }
                                                        });
                                                    } else if (this.upgrading) {
                                                        Yt();
                                                    } else {
                                                        YA();
                                                    }
                                                }
                                                return this;
                                            },
                                        },
                                        {
                                            key: "onError",
                                            value: function (YS) {
                                                Yc.priorWebsocketSuccess = false;
                                                this.emit("error", YS);
                                                this.onClose("transport error", YS);
                                            },
                                        },
                                        {
                                            key: "onClose",
                                            value: function (YS, YA) {
                                                if (!(this.readyState !== "opening" && this.readyState !== "open" && this.readyState !== "closing")) {
                                                    clearTimeout(this.pingIntervalTimer);
                                                    clearTimeout(this.pingTimeoutTimer);
                                                    this.transport.removeAllListeners("close");
                                                    this.transport.close();
                                                    this.transport.removeAllListeners();
                                                    this.readyState = "closed";
                                                    this.id = null;
                                                    this.emit("close", YS, YA);
                                                    this.writeBuffer = [];
                                                    this.prevBufferLen = 0;
                                                }
                                            },
                                        },
                                        {
                                            key: "filterUpgrades",
                                            value: function (YS) {
                                                for (var YA = [], YC = 0, Yt = YS.length; YC < Yt; YC++) {
                                                    if (~this.transports.indexOf(YS[YC])) {
                                                        YA.push(YS[YC]);
                                                    }
                                                }
                                                return YA;
                                            },
                                        },
                                    ])
                                ) {
                                    (function (YS, YA) {
                                        for (var YC = 0; YC < YA.length; YC++) {
                                            var Yt = YA[YC];
                                            Yt.enumerable = Yt.enumerable || false;
                                            Yt.configurable = true;
                                            if ("value" in Yt) {
                                                Yt.writable = true;
                                            }
                                            Object.defineProperty(YS, Yt.key, Yt);
                                        }
                                    })(Yc.prototype, YE);
                                }
                                return Yc;
                            })(Yn);
                            YT.priorWebsocketSuccess = false;
                            YT.protocol = Ym.protocol;
                            Y7.exports = YT;
                        },
                        function (Y7) {
                            try {
                                Y7.exports = typeof XMLHttpRequest != "undefined" && "withCredentials" in new XMLHttpRequest();
                            } catch (Y8) {
                                Y7.exports = false;
                            }
                        },
                        function (Y7, Y8, Y9) {
                            function Yd(YC) {
                                return (Yd =
                                    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                                        ? function (Yt) {
                                              return typeof Yt;
                                          }
                                        : function (Yt) {
                                              if (Yt && typeof Symbol == "function" && Yt.constructor === Symbol && Yt !== Symbol.prototype) {
                                                  return "symbol";
                                              } else {
                                                  return typeof Yt;
                                              }
                                          })(YC);
                            }
                            function YY() {
                                return (YY =
                                    Object.assign ||
                                    function (YC) {
                                        for (var Yt = 1; Yt < arguments.length; Yt++) {
                                            var Yh = arguments[Yt];
                                            for (var YM in Yh) {
                                                if (Object.prototype.hasOwnProperty.call(Yh, YM)) {
                                                    YC[YM] = Yh[YM];
                                                }
                                            }
                                        }
                                        return YC;
                                    }).apply(this, arguments);
                            }
                            function Yv(YC, Yt) {
                                if (!(YC instanceof Yt)) {
                                    throw new TypeError("Cannot call a class as a function");
                                }
                            }
                            function Yb(YC, Yt) {
                                if (Yt) {
                                    (function (Yh, YM) {
                                        for (var YR = 0; YR < YM.length; YR++) {
                                            var YB = YM[YR];
                                            YB.enumerable = YB.enumerable || false;
                                            YB.configurable = true;
                                            if ("value" in YB) {
                                                YB.writable = true;
                                            }
                                            Object.defineProperty(Yh, YB.key, YB);
                                        }
                                    })(YC.prototype, Yt);
                                }
                                return YC;
                            }
                            function Ya(YC, Yt) {
                                if (typeof Yt != "function" && Yt !== null) {
                                    throw new TypeError("Super expression must either be null or a function");
                                }
                                YC.prototype = Object.create(Yt && Yt.prototype, {
                                    constructor: {
                                        value: YC,
                                        writable: true,
                                        configurable: true,
                                    },
                                });
                                if (Yt) {
                                    Yl(YC, Yt);
                                }
                            }
                            function Yl(YC, Yt) {
                                return (Yl =
                                    Object.setPrototypeOf ||
                                    function (Yh, YM) {
                                        Yh.__proto__ = YM;
                                        return Yh;
                                    })(YC, Yt);
                            }
                            function Yx(YC) {
                                var Yt = (function () {
                                    if (typeof Reflect == "undefined" || !Reflect.construct) {
                                        return false;
                                    }
                                    if (Reflect.construct.sham) {
                                        return false;
                                    }
                                    if (typeof Proxy == "function") {
                                        return true;
                                    }
                                    try {
                                        Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
                                        return true;
                                    } catch (Yh) {
                                        return false;
                                    }
                                })();
                                return function () {
                                    var Yh;
                                    var YM = Yn(YC);
                                    if (Yt) {
                                        var YR = Yn(this).constructor;
                                        Yh = Reflect.construct(YM, arguments, YR);
                                    } else {
                                        Yh = YM.apply(this, arguments);
                                    }
                                    return YU(this, Yh);
                                };
                            }
                            function YU(YC, Yt) {
                                if (!Yt || (Yd(Yt) !== "object" && typeof Yt != "function")) {
                                    return (function (Yh) {
                                        if (Yh === undefined) {
                                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        }
                                        return Yh;
                                    })(YC);
                                } else {
                                    return Yt;
                                }
                            }
                            function Yn(YC) {
                                return (Yn = Object.setPrototypeOf
                                    ? Object.getPrototypeOf
                                    : function (Yt) {
                                          return Yt.__proto__ || Object.getPrototypeOf(Yt);
                                      })(YC);
                            }
                            var Ym = Y9(3);
                            var YP = Y9(10);
                            var YX = Y9(0);
                            var YT = Y9(13).pick;
                            var Yi = Y9(2);
                            function YE() {}
                            var Yw =
                                new (Y9(3))({
                                    xdomain: false,
                                }).responseType != null;
                            var Yc = (function (YC) {
                                Ya(Yh, YC);
                                var Yt = Yx(Yh);
                                function Yh(YM) {
                                    var YR;
                                    Yv(this, Yh);
                                    YR = Yt.call(this, YM);
                                    if (typeof location != "undefined") {
                                        var YB = location.protocol === "https:";
                                        var Yf = location.port;
                                        if (!Yf) {
                                            Yf = YB ? 443 : 80;
                                        }
                                        YR.xd = (typeof location != "undefined" && YM.hostname !== location.hostname) || Yf !== YM.port;
                                        YR.xs = YM.secure !== YB;
                                    }
                                    var YN = YM && YM.forceBase64;
                                    YR.supportsBinary = Yw && !YN;
                                    return YR;
                                }
                                Yb(Yh, [
                                    {
                                        key: "request",
                                        value: function () {
                                            var YM = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                                            YY(
                                                YM,
                                                {
                                                    xd: this.xd,
                                                    xs: this.xs,
                                                },
                                                this.opts
                                            );
                                            return new YS(this.uri(), YM);
                                        },
                                    },
                                    {
                                        key: "doWrite",
                                        value: function (YM, YR) {
                                            var YB = this.request({
                                                method: "POST",
                                                data: YM,
                                            });
                                            var Yf = this;
                                            YB.on("success", YR);
                                            YB.on("error", function (YN) {
                                                Yf.onError("xhr post error", YN);
                                            });
                                        },
                                    },
                                    {
                                        key: "doPoll",
                                        value: function () {
                                            var YM = this.request();
                                            var YR = this;
                                            YM.on("data", function (YB) {
                                                YR.onData(YB);
                                            });
                                            YM.on("error", function (YB) {
                                                YR.onError("xhr poll error", YB);
                                            });
                                            this.pollXhr = YM;
                                        },
                                    },
                                ]);
                                return Yh;
                            })(YP);
                            var YS = (function (YC) {
                                Ya(Yh, YC);
                                var Yt = Yx(Yh);
                                function Yh(YM, YR) {
                                    var YB;
                                    Yv(this, Yh);
                                    (YB = Yt.call(this)).opts = YR;
                                    YB.method = YR.method || "GET";
                                    YB.uri = YM;
                                    YB.async = YR.async !== false;
                                    YB.data = YR.data !== undefined ? YR.data : null;
                                    YB.create();
                                    return YB;
                                }
                                Yb(Yh, [
                                    {
                                        key: "create",
                                        value: function () {
                                            var YM = YT(
                                                this.opts,
                                                "agent",
                                                "enablesXDR",
                                                "pfx",
                                                "key",
                                                "passphrase",
                                                "cert",
                                                "ca",
                                                "ciphers",
                                                "rejectUnauthorized"
                                            );
                                            YM.xdomain = !!this.opts.xd;
                                            YM.xscheme = !!this.opts.xs;
                                            var YR = (this.xhr = new Ym(YM));
                                            var YB = this;
                                            try {
                                                YR.open(this.method, this.uri, this.async);
                                                try {
                                                    if (this.opts.extraHeaders) {
                                                        if (YR.setDisableHeaderCheck) {
                                                            YR.setDisableHeaderCheck(true);
                                                        }
                                                        for (var Yf in this.opts.extraHeaders) {
                                                            if (this.opts.extraHeaders.hasOwnProperty(Yf)) {
                                                                YR.setRequestHeader(Yf, this.opts.extraHeaders[Yf]);
                                                            }
                                                        }
                                                    }
                                                } catch (YN) {}
                                                if (this.method === "POST") {
                                                    try {
                                                        YR.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
                                                    } catch (YD) {}
                                                }
                                                try {
                                                    YR.setRequestHeader("Accept", "*/*");
                                                } catch (Yo) {}
                                                if ("withCredentials" in YR) {
                                                    YR.withCredentials = this.opts.withCredentials;
                                                }
                                                if (this.opts.requestTimeout) {
                                                    YR.timeout = this.opts.requestTimeout;
                                                }
                                                if (this.hasXDR()) {
                                                    YR.onload = function () {
                                                        YB.onLoad();
                                                    };
                                                    YR.onerror = function () {
                                                        YB.onError(YR.responseText);
                                                    };
                                                } else {
                                                    YR.onreadystatechange = function () {
                                                        if (YR.readyState === 4) {
                                                            if (YR.status === 200 || YR.status === 1223) {
                                                                YB.onLoad();
                                                            } else {
                                                                // TOLOOK
                                                                setTimeout(function () {
                                                                    YB.onError(typeof YR.status == "number" ? YR.status : 0);
                                                                }, 0);
                                                            }
                                                        }
                                                    };
                                                }
                                                YR.send(this.data);
                                            } catch (YF) {
                                                // TOLOOK
                                                setTimeout(function () {
                                                    YB.onError(YF);
                                                }, 0);
                                                return;
                                            }
                                            if (typeof document != "undefined") {
                                                this.index = Yh.requestsCount++;
                                                Yh.requests[this.index] = this;
                                            }
                                        },
                                    },
                                    {
                                        key: "onSuccess",
                                        value: function () {
                                            this.emit("success");
                                            this.cleanup();
                                        },
                                    },
                                    {
                                        key: "onData",
                                        value: function (YM) {
                                            this.emit("data", YM);
                                            this.onSuccess();
                                        },
                                    },
                                    {
                                        key: "onError",
                                        value: function (YM) {
                                            this.emit("error", YM);
                                            this.cleanup(true);
                                        },
                                    },
                                    {
                                        key: "cleanup",
                                        value: function (YM) {
                                            if (this.xhr !== undefined && this.xhr !== null) {
                                                if (this.hasXDR()) {
                                                    this.xhr.onload = this.xhr.onerror = YE;
                                                } else {
                                                    this.xhr.onreadystatechange = YE;
                                                }
                                                if (YM) {
                                                    try {
                                                        this.xhr.abort();
                                                    } catch (YR) {}
                                                }
                                                if (typeof document != "undefined") {
                                                    delete Yh.requests[this.index];
                                                }
                                                this.xhr = null;
                                            }
                                        },
                                    },
                                    {
                                        key: "onLoad",
                                        value: function () {
                                            var YM = this.xhr.responseText;
                                            if (YM !== null) {
                                                this.onData(YM);
                                            }
                                        },
                                    },
                                    {
                                        key: "hasXDR",
                                        value: function () {
                                            return typeof XDomainRequest != "undefined" && !this.xs && this.enablesXDR;
                                        },
                                    },
                                    {
                                        key: "abort",
                                        value: function () {
                                            this.cleanup();
                                        },
                                    },
                                ]);
                                return Yh;
                            })(YX);
                            function YA() {
                                for (var YC in YS.requests) {
                                    if (YS.requests.hasOwnProperty(YC)) {
                                        YS.requests[YC].abort();
                                    }
                                }
                            }
                            YS.requestsCount = 0;
                            YS.requests = {};
                            if (typeof document != "undefined") {
                                if (typeof attachEvent == "function") {
                                    attachEvent("onunload", YA);
                                } else if (typeof addEventListener == "function") {
                                    addEventListener("onpagehide" in Yi ? "pagehide" : "unload", YA, false);
                                }
                            }
                            Y7.exports = Yc;
                            Y7.exports.Request = YS;
                        },
                        function (Y7, Y8, Y9) {
                            var Yd = Y9(11).PACKET_TYPES;
                            var YY =
                                typeof Blob == "function" ||
                                (typeof Blob != "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]");
                            var Yv = typeof ArrayBuffer == "function";
                            function Yb(Ya, Yl) {
                                var Yx = new FileReader();
                                Yx.onload = function () {
                                    var YU = Yx.result.split(",")[1];
                                    Yl("b" + YU);
                                };
                                return Yx.readAsDataURL(Ya);
                            }
                            Y7.exports = function (Ya, Yl, Yx) {
                                var YU;
                                var Yn = Ya.type;
                                var Ym = Ya.data;
                                if (YY && Ym instanceof Blob) {
                                    if (Yl) {
                                        return Yx(Ym);
                                    } else {
                                        return Yb(Ym, Yx);
                                    }
                                } else if (
                                    Yv &&
                                    (Ym instanceof ArrayBuffer ||
                                        ((YU = Ym), typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(YU) : YU && YU.buffer instanceof ArrayBuffer))
                                ) {
                                    if (Yl) {
                                        return Yx(Ym instanceof ArrayBuffer ? Ym : Ym.buffer);
                                    } else {
                                        return Yb(new Blob([Ym]), Yx);
                                    }
                                } else {
                                    return Yx(Yd[Yn] + (Ym || ""));
                                }
                            };
                        },
                        function (Y7, Y8, Y9) {
                            var Yd;
                            var YY = Y9(11);
                            var Yv = YY.PACKET_TYPES_REVERSE;
                            var Yb = YY.ERROR_PACKET;
                            if (typeof ArrayBuffer == "function") {
                                Yd = Y9(26);
                            }
                            function Ya(Yx, YU) {
                                if (Yd) {
                                    var Yn = Yd.decode(Yx);
                                    return Yl(Yn, YU);
                                }
                                return {
                                    base64: true,
                                    data: Yx,
                                };
                            }
                            function Yl(Yx, YU) {
                                if (YU === "blob" && Yx instanceof ArrayBuffer) {
                                    return new Blob([Yx]);
                                } else {
                                    return Yx;
                                }
                            }
                            Y7.exports = function (Yx, YU) {
                                if (typeof Yx != "string") {
                                    return {
                                        type: "message",
                                        data: Yl(Yx, YU),
                                    };
                                }
                                var Yn = Yx.charAt(0);
                                if (Yn === "b") {
                                    return {
                                        type: "message",
                                        data: Ya(Yx.substring(1), YU),
                                    };
                                } else if (Yv[Yn]) {
                                    if (Yx.length > 1) {
                                        return {
                                            type: Yv[Yn],
                                            data: Yx.substring(1),
                                        };
                                    } else {
                                        return {
                                            type: Yv[Yn],
                                        };
                                    }
                                } else {
                                    return Yb;
                                }
                            };
                        },
                        function (Y7, Y8) {
                            (function () {
                                for (
                                    var Y9 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Yd = new Uint8Array(256), YY = 0;
                                    YY < 64;
                                    YY++
                                ) {
                                    Yd[Y9.charCodeAt(YY)] = YY;
                                }
                                Y8.encode = function (Yv) {
                                    var Yb;
                                    var Ya = new Uint8Array(Yv);
                                    var Yl = Ya.length;
                                    var Yx = "";
                                    for (Yb = 0; Yb < Yl; Yb += 3) {
                                        Yx += Y9[Ya[Yb] >> 2];
                                        Yx += Y9[((Ya[Yb] & 3) << 4) | (Ya[Yb + 1] >> 4)];
                                        Yx += Y9[((Ya[Yb + 1] & 15) << 2) | (Ya[Yb + 2] >> 6)];
                                        Yx += Y9[Ya[Yb + 2] & 63];
                                    }
                                    if (Yl % 3 == 2) {
                                        Yx = Yx.substring(0, Yx.length - 1) + "=";
                                    } else if (Yl % 3 == 1) {
                                        Yx = Yx.substring(0, Yx.length - 2) + "==";
                                    }
                                    return Yx;
                                };
                                Y8.decode = function (Yv) {
                                    var Yb;
                                    var Ya;
                                    var Yl;
                                    var Yx;
                                    var YU;
                                    var Yn = Yv.length * 0.75;
                                    var Ym = Yv.length;
                                    var YP = 0;
                                    if (Yv[Yv.length - 1] === "=") {
                                        Yn--;
                                        if (Yv[Yv.length - 2] === "=") {
                                            Yn--;
                                        }
                                    }
                                    var YX = new ArrayBuffer(Yn);
                                    var YT = new Uint8Array(YX);
                                    for (Yb = 0; Yb < Ym; Yb += 4) {
                                        Ya = Yd[Yv.charCodeAt(Yb)];
                                        Yl = Yd[Yv.charCodeAt(Yb + 1)];
                                        Yx = Yd[Yv.charCodeAt(Yb + 2)];
                                        YU = Yd[Yv.charCodeAt(Yb + 3)];
                                        YT[YP++] = (Ya << 2) | (Yl >> 4);
                                        YT[YP++] = ((Yl & 15) << 4) | (Yx >> 2);
                                        YT[YP++] = ((Yx & 3) << 6) | (YU & 63);
                                    }
                                    return YX;
                                };
                            })();
                        },
                        function (Y7, Y8, Y9) {
                            function Yd(YE) {
                                return (Yd =
                                    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                                        ? function (Yw) {
                                              return typeof Yw;
                                          }
                                        : function (Yw) {
                                              if (Yw && typeof Symbol == "function" && Yw.constructor === Symbol && Yw !== Symbol.prototype) {
                                                  return "symbol";
                                              } else {
                                                  return typeof Yw;
                                              }
                                          })(YE);
                            }
                            function YY(YE, Yw, Yc) {
                                return (YY =
                                    typeof Reflect != "undefined" && Reflect.get
                                        ? Reflect.get
                                        : function (YS, YA, YC) {
                                              var Yt = (function (YM, YR) {
                                                  for (; !Object.prototype.hasOwnProperty.call(YM, YR) && (YM = Yx(YM)) !== null; );
                                                  return YM;
                                              })(YS, YA);
                                              if (Yt) {
                                                  var Yh = Object.getOwnPropertyDescriptor(Yt, YA);
                                                  if (Yh.get) {
                                                      return Yh.get.call(YC);
                                                  } else {
                                                      return Yh.value;
                                                  }
                                              }
                                          })(YE, Yw, Yc || YE);
                            }
                            function Yv(YE, Yw) {
                                return (Yv =
                                    Object.setPrototypeOf ||
                                    function (Yc, YS) {
                                        Yc.__proto__ = YS;
                                        return Yc;
                                    })(YE, Yw);
                            }
                            function Yb(YE) {
                                var Yw = (function () {
                                    if (typeof Reflect == "undefined" || !Reflect.construct) {
                                        return false;
                                    }
                                    if (Reflect.construct.sham) {
                                        return false;
                                    }
                                    if (typeof Proxy == "function") {
                                        return true;
                                    }
                                    try {
                                        Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
                                        return true;
                                    } catch (Yc) {
                                        return false;
                                    }
                                })();
                                return function () {
                                    var Yc;
                                    var YS = Yx(YE);
                                    if (Yw) {
                                        var YA = Yx(this).constructor;
                                        Yc = Reflect.construct(YS, arguments, YA);
                                    } else {
                                        Yc = YS.apply(this, arguments);
                                    }
                                    return Ya(this, Yc);
                                };
                            }
                            function Ya(YE, Yw) {
                                if (!Yw || (Yd(Yw) !== "object" && typeof Yw != "function")) {
                                    return Yl(YE);
                                } else {
                                    return Yw;
                                }
                            }
                            function Yl(YE) {
                                if (YE === undefined) {
                                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                }
                                return YE;
                            }
                            function Yx(YE) {
                                return (Yx = Object.setPrototypeOf
                                    ? Object.getPrototypeOf
                                    : function (Yw) {
                                          return Yw.__proto__ || Object.getPrototypeOf(Yw);
                                      })(YE);
                            }
                            var YU;
                            var Yn = Y9(10);
                            var Ym = Y9(2);
                            var YP = /\n/g;
                            var YX = /\\n/g;
                            function YT() {}
                            var Yi = (function (YE) {
                                (function (YA, YC) {
                                    if (typeof YC != "function" && YC !== null) {
                                        throw new TypeError("Super expression must either be null or a function");
                                    }
                                    YA.prototype = Object.create(YC && YC.prototype, {
                                        constructor: {
                                            value: YA,
                                            writable: true,
                                            configurable: true,
                                        },
                                    });
                                    if (YC) {
                                        Yv(YA, YC);
                                    }
                                })(YS, YE);
                                var Yw;
                                var Yc = Yb(YS);
                                function YS(YA) {
                                    var YC;
                                    (function (Yh, YM) {
                                        if (!(Yh instanceof YM)) {
                                            throw new TypeError("Cannot call a class as a function");
                                        }
                                    })(this, YS);
                                    (YC = Yc.call(this, YA)).query = YC.query || {};
                                    if (!YU) {
                                        YU = Ym.___eio = Ym.___eio || [];
                                    }
                                    YC.index = YU.length;
                                    var Yt = Yl(YC);
                                    YU.push(function (Yh) {
                                        Yt.onData(Yh);
                                    });
                                    YC.query.j = YC.index;
                                    if (typeof addEventListener == "function") {
                                        addEventListener(
                                            "beforeunload",
                                            function () {
                                                if (Yt.script) {
                                                    Yt.script.onerror = YT;
                                                }
                                            },
                                            false
                                        );
                                    }
                                    return YC;
                                }
                                if (
                                    (Yw = [
                                        {
                                            key: "doClose",
                                            value: function () {
                                                if (this.script) {
                                                    this.script.parentNode.removeChild(this.script);
                                                    this.script = null;
                                                }
                                                if (this.form) {
                                                    this.form.parentNode.removeChild(this.form);
                                                    this.form = null;
                                                    this.iframe = null;
                                                }
                                                YY(Yx(YS.prototype), "doClose", this).call(this);
                                            },
                                        },
                                        {
                                            key: "doPoll",
                                            value: function () {
                                                var YA = this;
                                                var YC = document.createElement("script");
                                                if (this.script) {
                                                    this.script.parentNode.removeChild(this.script);
                                                    this.script = null;
                                                }
                                                YC.async = true;
                                                YC.src = this.uri();
                                                YC.onerror = function (Yh) {
                                                    YA.onError("jsonp poll error", Yh);
                                                };
                                                var Yt = document.getElementsByTagName("script")[0];
                                                if (Yt) {
                                                    Yt.parentNode.insertBefore(YC, Yt);
                                                } else {
                                                    (document.head || document.body).appendChild(YC);
                                                }
                                                this.script = YC;
                                                if (typeof navigator != "undefined" && /gecko/i.test(navigator.userAgent)) {
                                                    // TOLOOK
                                                    setTimeout(function () {
                                                        var Yh = document.createElement("iframe");
                                                        document.body.appendChild(Yh);
                                                        document.body.removeChild(Yh);
                                                    }, 100);
                                                }
                                            },
                                        },
                                        {
                                            key: "doWrite",
                                            value: function (YA, YC) {
                                                var Yt;
                                                var Yh = this;
                                                if (!this.form) {
                                                    var YM = document.createElement("form");
                                                    var YR = document.createElement("textarea");
                                                    var YB = (this.iframeId = "eio_iframe_" + this.index);
                                                    YM.className = "socketio";
                                                    YM.style.position = "absolute";
                                                    YM.style.top = "-1000px";
                                                    YM.style.left = "-1000px";
                                                    YM.target = YB;
                                                    YM.method = "POST";
                                                    YM.setAttribute("accept-charset", "utf-8");
                                                    YR.name = "d";
                                                    YM.appendChild(YR);
                                                    document.body.appendChild(YM);
                                                    this.form = YM;
                                                    this.area = YR;
                                                }
                                                function Yf() {
                                                    YN();
                                                    YC();
                                                }
                                                function YN() {
                                                    if (Yh.iframe) {
                                                        try {
                                                            Yh.form.removeChild(Yh.iframe);
                                                        } catch (Yo) {
                                                            Yh.onError("jsonp polling iframe removal error", Yo);
                                                        }
                                                    }
                                                    try {
                                                        var YD = '<iframe src="javascript:0" name="' + Yh.iframeId + '">';
                                                        Yt = document.createElement(YD);
                                                    } catch (YF) {
                                                        (Yt = document.createElement("iframe")).name = Yh.iframeId;
                                                        Yt.src = "javascript:0";
                                                    }
                                                    Yt.id = Yh.iframeId;
                                                    Yh.form.appendChild(Yt);
                                                    Yh.iframe = Yt;
                                                }
                                                this.form.action = this.uri();
                                                YN();
                                                YA = YA.replace(YX, "\\\n");
                                                this.area.value = YA.replace(YP, "\\n");
                                                try {
                                                    this.form.submit();
                                                } catch (YD) {}
                                                if (this.iframe.attachEvent) {
                                                    this.iframe.onreadystatechange = function () {
                                                        if (Yh.iframe.readyState === "complete") {
                                                            Yf();
                                                        }
                                                    };
                                                } else {
                                                    this.iframe.onload = Yf;
                                                }
                                            },
                                        },
                                        {
                                            key: "supportsBinary",
                                            get: function () {
                                                return false;
                                            },
                                        },
                                    ])
                                ) {
                                    (function (YA, YC) {
                                        for (var Yt = 0; Yt < YC.length; Yt++) {
                                            var Yh = YC[Yt];
                                            Yh.enumerable = Yh.enumerable || false;
                                            Yh.configurable = true;
                                            if ("value" in Yh) {
                                                Yh.writable = true;
                                            }
                                            Object.defineProperty(YA, Yh.key, Yh);
                                        }
                                    })(YS.prototype, Yw);
                                }
                                return YS;
                            })(Yn);
                            Y7.exports = Yi;
                        },
                        function (Y7, Y8, Y9) {
                            function Yd(Yc) {
                                return (Yd =
                                    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                                        ? function (YS) {
                                              return typeof YS;
                                          }
                                        : function (YS) {
                                              if (YS && typeof Symbol == "function" && YS.constructor === Symbol && YS !== Symbol.prototype) {
                                                  return "symbol";
                                              } else {
                                                  return typeof YS;
                                              }
                                          })(Yc);
                            }
                            function YY(Yc, YS) {
                                return (YY =
                                    Object.setPrototypeOf ||
                                    function (YA, YC) {
                                        YA.__proto__ = YC;
                                        return YA;
                                    })(Yc, YS);
                            }
                            function Yv(Yc) {
                                var YS = (function () {
                                    if (typeof Reflect == "undefined" || !Reflect.construct) {
                                        return false;
                                    }
                                    if (Reflect.construct.sham) {
                                        return false;
                                    }
                                    if (typeof Proxy == "function") {
                                        return true;
                                    }
                                    try {
                                        Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
                                        return true;
                                    } catch (YA) {
                                        return false;
                                    }
                                })();
                                return function () {
                                    var YA;
                                    var YC = Ya(Yc);
                                    if (YS) {
                                        var Yt = Ya(this).constructor;
                                        YA = Reflect.construct(YC, arguments, Yt);
                                    } else {
                                        YA = YC.apply(this, arguments);
                                    }
                                    return Yb(this, YA);
                                };
                            }
                            function Yb(Yc, YS) {
                                if (!YS || (Yd(YS) !== "object" && typeof YS != "function")) {
                                    return (function (YA) {
                                        if (YA === undefined) {
                                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        }
                                        return YA;
                                    })(Yc);
                                } else {
                                    return YS;
                                }
                            }
                            function Ya(Yc) {
                                return (Ya = Object.setPrototypeOf
                                    ? Object.getPrototypeOf
                                    : function (YS) {
                                          return YS.__proto__ || Object.getPrototypeOf(YS);
                                      })(Yc);
                            }
                            var Yl = Y9(4);
                            var Yx = Y9(1);
                            var YU = Y9(5);
                            var Yn = Y9(12);
                            var Ym = Y9(13).pick;
                            var YP = Y9(29);
                            var YX = YP.WebSocket;
                            var YT = YP.usingBrowserWebSocket;
                            var Yi = YP.defaultBinaryType;
                            var YE =
                                typeof navigator != "undefined" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
                            var Yw = (function (Yc) {
                                (function (Yt, Yh) {
                                    if (typeof Yh != "function" && Yh !== null) {
                                        throw new TypeError("Super expression must either be null or a function");
                                    }
                                    Yt.prototype = Object.create(Yh && Yh.prototype, {
                                        constructor: {
                                            value: Yt,
                                            writable: true,
                                            configurable: true,
                                        },
                                    });
                                    if (Yh) {
                                        YY(Yt, Yh);
                                    }
                                })(YC, Yc);
                                var YS;
                                var YA = Yv(YC);
                                function YC(Yt) {
                                    var Yh;
                                    (function (YM, YR) {
                                        if (!(YM instanceof YR)) {
                                            throw new TypeError("Cannot call a class as a function");
                                        }
                                    })(this, YC);
                                    (Yh = YA.call(this, Yt)).supportsBinary = !Yt.forceBase64;
                                    return Yh;
                                }
                                if (
                                    (YS = [
                                        {
                                            key: "doOpen",
                                            value: function () {
                                                if (this.check()) {
                                                    var Yt = this.uri();
                                                    var Yh = this.opts.protocols;
                                                    var YM = YE
                                                        ? {}
                                                        : Ym(
                                                              this.opts,
                                                              "agent",
                                                              "perMessageDeflate",
                                                              "pfx",
                                                              "key",
                                                              "passphrase",
                                                              "cert",
                                                              "ca",
                                                              "ciphers",
                                                              "rejectUnauthorized",
                                                              "localAddress"
                                                          );
                                                    if (this.opts.extraHeaders) {
                                                        YM.headers = this.opts.extraHeaders;
                                                    }
                                                    try {
                                                        this.ws = YT && !YE ? (Yh ? new YX(Yt, Yh) : new YX(Yt)) : new YX(Yt, Yh, YM);
                                                    } catch (YR) {
                                                        return this.emit("error", YR);
                                                    }
                                                    this.ws.binaryType = this.socket.binaryType || Yi;
                                                    this.addEventListeners();
                                                }
                                            },
                                        },
                                        {
                                            key: "addEventListeners",
                                            value: function () {
                                                var Yt = this;
                                                this.ws.onopen = function () {
                                                    Yt.onOpen();
                                                };
                                                this.ws.onclose = function () {
                                                    Yt.onClose();
                                                };
                                                this.ws.onmessage = function (Yh) {
                                                    Yt.onData(Yh.data);
                                                };
                                                this.ws.onerror = function (Yh) {
                                                    Yt.onError("websocket error", Yh);
                                                };
                                            },
                                        },
                                        {
                                            key: "write",
                                            value: function (Yt) {
                                                var Yh = this;
                                                this.writable = false;
                                                for (var YM = Yt.length, YR = 0, YB = YM; YR < YB; YR++) {
                                                    (function (Yf) {
                                                        Yx.encodePacket(Yf, Yh.supportsBinary, function (YN) {
                                                            var YD = {};
                                                            if (!YT) {
                                                                if (Yf.options) {
                                                                    YD.compress = Yf.options.compress;
                                                                }
                                                                if (
                                                                    Yh.opts.perMessageDeflate &&
                                                                    (typeof YN == "string" ? Buffer.byteLength(YN) : YN.length) <
                                                                        Yh.opts.perMessageDeflate.threshold
                                                                ) {
                                                                    YD.compress = false;
                                                                }
                                                            }
                                                            try {
                                                                if (YT) {
                                                                    Yh.ws.send(YN);
                                                                } else {
                                                                    Yh.ws.send(YN, YD);
                                                                }
                                                            } catch (Yo) {}
                                                            if (!--YM) {
                                                                Yh.emit("flush");
                                                                // TOLOOK
                                                                setTimeout(function () {
                                                                    Yh.writable = true;
                                                                    Yh.emit("drain");
                                                                }, 0);
                                                            }
                                                        });
                                                    })(Yt[YR]);
                                                }
                                            },
                                        },
                                        {
                                            key: "onClose",
                                            value: function () {
                                                Yl.prototype.onClose.call(this);
                                            },
                                        },
                                        {
                                            key: "doClose",
                                            value: function () {
                                                if (this.ws !== undefined) {
                                                    this.ws.close();
                                                }
                                            },
                                        },
                                        {
                                            key: "uri",
                                            value: function () {
                                                var Yt = this.query || {};
                                                var Yh = this.opts.secure ? "wss" : "ws";
                                                var YM = "";
                                                if (this.opts.port && ((Yh === "wss" && +this.opts.port != 443) || (Yh === "ws" && +this.opts.port != 80))) {
                                                    YM = ":" + this.opts.port;
                                                }
                                                if (this.opts.timestampRequests) {
                                                    Yt[this.opts.timestampParam] = Yn();
                                                }
                                                if (!this.supportsBinary) {
                                                    Yt.b64 = 1;
                                                }
                                                if ((Yt = YU.encode(Yt)).length) {
                                                    Yt = "?" + Yt;
                                                }
                                                return (
                                                    Yh +
                                                    "://" +
                                                    (this.opts.hostname.indexOf(":") !== -1 ? "[" + this.opts.hostname + "]" : this.opts.hostname) +
                                                    YM +
                                                    this.opts.path +
                                                    Yt
                                                );
                                            },
                                        },
                                        {
                                            key: "check",
                                            value: function () {
                                                return !(!YX || ("__initialize" in YX && this.name === YC.prototype.name));
                                            },
                                        },
                                        {
                                            key: "name",
                                            get: function () {
                                                return "websocket";
                                            },
                                        },
                                    ])
                                ) {
                                    (function (Yt, Yh) {
                                        for (var YM = 0; YM < Yh.length; YM++) {
                                            var YR = Yh[YM];
                                            YR.enumerable = YR.enumerable || false;
                                            YR.configurable = true;
                                            if ("value" in YR) {
                                                YR.writable = true;
                                            }
                                            Object.defineProperty(Yt, YR.key, YR);
                                        }
                                    })(YC.prototype, YS);
                                }
                                return YC;
                            })(Yl);
                            Y7.exports = Yw;
                        },
                        function (Y7, Y8, Y9) {
                            var Yd = Y9(2);
                            Y7.exports = {
                                WebSocket: Yd.WebSocket || Yd.MozWebSocket,
                                usingBrowserWebSocket: true,
                                defaultBinaryType: "arraybuffer",
                            };
                        },
                        function (Y7, Y8, Y9) {
                            function YY(Yv) {
                                return (YY =
                                    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                                        ? function (Yb) {
                                              return typeof Yb;
                                          }
                                        : function (Yb) {
                                              if (Yb && typeof Symbol == "function" && Yb.constructor === Symbol && Yb !== Symbol.prototype) {
                                                  return "symbol";
                                              } else {
                                                  return typeof Yb;
                                              }
                                          })(Yv);
                            }
                            Object.defineProperty(Y8, "__esModule", {
                                value: true,
                            });
                            Y8.reconstructPacket = Y8.deconstructPacket = undefined;
                            var Yd = Y9(15);
                            Y8.deconstructPacket = function (Yv) {
                                var Yb = [];
                                var Ya = Yv.data;
                                var Yl = Yv;
                                Yl.data = (function Yx(YU, Yn) {
                                    if (!YU) {
                                        return YU;
                                    }
                                    if (Yd.isBinary(YU)) {
                                        var Ym = {
                                            $: true,
                                            num: Yn.length,
                                        };
                                        Yn.push(YU);
                                        return Ym;
                                    }
                                    if (Array.isArray(YU)) {
                                        for (var YP = Array(YU.length), YX = 0; YX < YU.length; YX++) {
                                            YP[YX] = Yx(YU[YX], Yn);
                                        }
                                        return YP;
                                    }
                                    if (YY(YU) === "object" && !(YU instanceof Date)) {
                                        var YT = {};
                                        for (var Yi in YU) {
                                            if (YU.hasOwnProperty(Yi)) {
                                                YT[Yi] = Yx(YU[Yi], Yn);
                                            }
                                        }
                                        return YT;
                                    }
                                    return YU;
                                })(Ya, Yb);
                                Yl.attachments = Yb.length;
                                return {
                                    packet: Yl,
                                    buffers: Yb,
                                };
                            };
                            Y8.reconstructPacket = function (Yv, Yb) {
                                Yv.data = (function Ya(Yl, Yx) {
                                    if (!Yl) {
                                        return Yl;
                                    }
                                    if (Yl && Yl.$) {
                                        return Yx[Yl.num];
                                    }
                                    if (Array.isArray(Yl)) {
                                        for (var YU = 0; YU < Yl.length; YU++) {
                                            Yl[YU] = Ya(Yl[YU], Yx);
                                        }
                                    } else if (YY(Yl) === "object") {
                                        for (var Yn in Yl) {
                                            if (Yl.hasOwnProperty(Yn)) {
                                                Yl[Yn] = Ya(Yl[Yn], Yx);
                                            }
                                        }
                                    }
                                    return Yl;
                                })(Yv.data, Yb);
                                Yv.attachments = undefined;
                                return Yv;
                            };
                        },
                        function (Y7) {
                            function Y8(Y9) {
                                Y9 = Y9 || {};
                                this.ms = Y9.min || 100;
                                this.max = Y9.max || 10000;
                                this.factor = Y9.factor || 2;
                                this.jitter = Y9.jitter > 0 && Y9.jitter <= 1 ? Y9.jitter : 0;
                                this.attempts = 0;
                            }
                            Y7.exports = Y8;
                            Y8.prototype.duration = function () {
                                var Y9 = this.ms * Math.pow(this.factor, this.attempts++);
                                if (this.jitter) {
                                    var Yd = Math.random();
                                    var YY = Math.floor(Yd * this.jitter * Y9);
                                    Y9 = (Math.floor(Yd * 10) & 1) == 0 ? Y9 - YY : Y9 + YY;
                                }
                                return Math.min(Y9, this.max) | 0;
                            };
                            Y8.prototype.reset = function () {
                                this.attempts = 0;
                            };
                            Y8.prototype.setMin = function (Y9) {
                                this.ms = Y9;
                            };
                            Y8.prototype.setMax = function (Y9) {
                                this.max = Y9;
                            };
                            Y8.prototype.setJitter = function (Y9) {
                                this.jitter = Y9;
                            };
                        },
                    ]);
                    var dI = ds.exports;
                    function dk(Y7) {
                        var Y8 = ["deDate", "elocation", "dohost", "ehostname", "deMath", "eparseInt", "dneval"][Y7];
                        return Y8.substring(U.Number("0xf") - U.Number("0x0" + Y8[0]));
                    }
                    function dZ(Y7, Y8) {
                        return Y7 === U[dk(4)].max(Y7, Y8);
                    }
                    var dW;
                    var dH = (function () {
                        function Y7() {
                            return [200, 10, 300].reduce(function (Y9, Yd) {
                                return Y9 * Yd;
                            }, 144);
                        }
                        function Y8(Y9, Yd, YY) {
                            if (
                                (function (Ya) {
                                    return dZ(U[dk(0)].now(), Ya);
                                })(Y9)
                            ) {
                                if (!Yd) {
                                    Yd = U.Number("0.0005") * 100;
                                }
                                if (YY) {
                                    var Yv = (function (Ya, Yl) {
                                        var Yx = (U[dk(0)].now() - Ya) / (Yl * Y7());
                                        return U[dk(4)].min(1, Yx * Yx);
                                    })(Y9, YY);
                                    Yd *= Yv;
                                }
                                return dZ(
                                    U[
                                        ((Yb = "Mathew"),
                                        (function (Ya, Yl) {
                                            return Yl.substring(U.Number("0x0"), Yl.length + -2);
                                        })(0, Yb))
                                    ].random(),
                                    Yd
                                );
                            }
                            var Yb;
                            return true;
                        }
                        return [
                            function () {
                                return Y8(
                                    ["0x4c72"].reduce(function (Y9, Yd) {
                                        return Y9 + U.Number(Yd);
                                    }, 658) * Y7(),
                                    U.Number("0.0005") * 100,
                                    28
                                );
                            },
                            Y8,
                        ];
                    })()[0];
                    function dG() {
                        dP(0)(function () {
                            di();
                        });
                    }
                    function dp(Y7) {
                        var Y8 = dH();
                        var Y9 = Object.create(null);
                        Y9.J = !Y8 && dG;
                        if (Y7) {
                            Y7(Y9);
                        }
                    }
                    (function (Y7) {
                        Y7._resizeCallback = "_resizeCallback";
                    })(dW || (dW = {}));
                    var dL;
                    var dy = (function () {
                        function Y7() {
                            this.Y = [];
                            this.G = true;
                        }
                        Y7.prototype.subscribe = function (Y8) {
                            var Y9 = this;
                            if (Y8) {
                                this.Y.push(Y8);
                                return function () {
                                    var Yd = Y9.Y.indexOf(Y8);
                                    if (Yd > -1) {
                                        Y9.Y.splice(Yd, 1);
                                    }
                                };
                            } else {
                                cc.error("canvasResizeBroadcaster: Invalid subscribe() arguments");
                                return false;
                            }
                        };
                        Y7.prototype.V = function () {
                            var Y8 = this.G;
                            this.G = !Y8;
                            if (Y8) {
                                this.Y.forEach(function (Y9) {
                                    Y9();
                                });
                                cc.view.emit("canvas-resize");
                                cc.view[dW._resizeCallback]();
                            }
                        };
                        Y7.prototype.init = function () {
                            cc.view.setResizeCallback(this.V.bind(this));
                        };
                        return Y7;
                    })();
                    var dO = m("CanvasResizeBroadcaster", new dy());
                    (function (Y7) {
                        Y7[(Y7.FIXEDW = 1)] = "FIXEDW";
                        Y7[(Y7.FIXEDWH_16x9 = 2)] = "FIXEDWH_16x9";
                        Y7[(Y7.FIXEDWH_19_5x9 = 3)] = "FIXEDWH_19_5x9";
                        Y7[(Y7.FIXEDWH_9X16 = 4)] = "FIXEDWH_9X16";
                    })(dL || (dL = {}));
                    var dz;
                    var dV = (function () {
                        function Y7() {
                            this.mode = 0;
                            this.isPortrait = true;
                        }
                        Y7.prototype.init = function () {
                            this.isPortrait = shell.environment.getOrientationMode() !== "land";
                            dO.subscribe(this.V.bind(this));
                            this.V();
                        };
                        Y7.prototype.toggleResize = function () {
                            this.mode = 0;
                            this.V();
                        };
                        Y7.prototype.V = function () {
                            if (this.isPortrait) {
                                var Y8 = cc.view.getFrameSize();
                                if (Y8.height / Y8.width <= 16 / 9) {
                                    if (this.mode !== dL.FIXEDWH_16x9) {
                                        this.mode = dL.FIXEDWH_16x9;
                                        cc.view.setDesignResolutionSize(
                                            1080,
                                            1920,
                                            new cc.ResolutionPolicy(cc.ContainerStrategy.PROPORTION_TO_FRAME, cc.ContentStrategy.NO_BORDER)
                                        );
                                    }
                                } else if (Y8.height / Y8.width > 16 / 9 && Y8.height / Y8.width <= 19.5 / 9) {
                                    if (this.mode !== dL.FIXEDW) {
                                        this.mode = dL.FIXEDW;
                                        cc.view.setDesignResolutionSize(
                                            1080,
                                            2340,
                                            new cc.ResolutionPolicy(cc.ContainerStrategy.EQUAL_TO_FRAME, cc.ContentStrategy.FIXED_WIDTH)
                                        );
                                    }
                                } else if (this.mode !== dL.FIXEDWH_19_5x9) {
                                    this.mode = dL.FIXEDWH_19_5x9;
                                    cc.view.setDesignResolutionSize(
                                        1080,
                                        2340,
                                        new cc.ResolutionPolicy(cc.ContainerStrategy.PROPORTION_TO_FRAME, cc.ContentStrategy.NO_BORDER)
                                    );
                                }
                            } else {
                                this.mode = dL.FIXEDWH_9X16;
                                cc.view.setDesignResolutionSize(
                                    1920,
                                    1080,
                                    new cc.ResolutionPolicy(cc.ContainerStrategy.PROPORTION_TO_FRAME, cc.ContentStrategy.FIXED_HEIGHT)
                                );
                            }
                        };
                        return Y7;
                    })();
                    m("MultiResHandler", new dV());
                    var dj = Object.create(null);
                    dz = Object.create(null);
                    function dK(Y7, Y8, Y9, Yd, YY) {
                        if (typeof Yd != "function") {
                            YY = Yd;
                            Yd = undefined;
                        }
                        dz.get = Y9;
                        dz.set = Yd;
                        dz.enumerable = YY;
                        Object.defineProperty(Y7, Y8, dz);
                        dz.get = undefined;
                        dz.set = undefined;
                    }
                    var Y0 = (function () {
                        var Y7;
                        try {
                            if ((Y7 = localStorage) == null) {
                                throw Error();
                            }
                            Y7.setItem("__test", "1");
                            if (Y7.getItem("__test") !== "1") {
                                Y7 = undefined;
                            }
                        } catch (Y8) {
                            Y7 = undefined;
                        }
                        if (!Y7) {
                            Y7 = {
                                Z: Object.create(null),
                                get length() {
                                    return Object.keys(this.Z).length;
                                },
                                clear: function () {
                                    this.Z = Object.create(null);
                                },
                                getItem: function (Y9) {
                                    var Yd = this.Z[Y9];
                                    if (Yd != null) {
                                        return Yd;
                                    } else {
                                        return null;
                                    }
                                },
                                key: function (Y9) {
                                    var Yd = Object.keys(this.Z)[Y9];
                                    if (Yd != null) {
                                        return Yd;
                                    } else {
                                        return null;
                                    }
                                },
                                removeItem: function (Y9) {
                                    if (Y9 in this.Z) {
                                        delete this.Z[Y9];
                                    }
                                },
                                setItem: function (Y9, Yd) {
                                    this.Z[Y9] = Yd;
                                },
                            };
                        }
                        return Y7;
                    })();
                    function Y1(Y7, Y8) {
                        var Y9 = Y7.indexOf(Y8);
                        if (Y9 !== -1) {
                            Y7.splice(Y9, 1);
                        }
                    }
                    m(
                        "Preference",
                        (function () {
                            function Y7(Y8) {
                                this.tt = Y0;
                                this.nt = Y8;
                                this.et = Y8 + "$prefkeysep$";
                                this.rt = [];
                                this.it = {};
                            }
                            Object.defineProperty(Y7.prototype, "domain", {
                                get: function () {
                                    return this.nt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(Y7.prototype, "length", {
                                get: function () {
                                    return this.ot.length;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Y7.prototype.clear = function () {
                                for (var Y8 = this.ot, Y9 = 0, Yd = Y8.length; Y9 < Yd; Y9++) {
                                    this.tt.removeItem(Y8[Y9]);
                                }
                            };
                            Y7.prototype.getItem = function (Y8, Y9) {
                                var Yd = this.tt.getItem(this.et + Y8);
                                if (Yd) {
                                    return JSON.parse(Yd);
                                } else {
                                    return Y9;
                                }
                            };
                            Y7.prototype.key = function (Y8) {
                                var Y9 = this.ot[Y8];
                                if (Y9 != null) {
                                    return Y9.substring(this.et.length);
                                } else {
                                    return null;
                                }
                            };
                            Y7.prototype.removeItem = function (Y8) {
                                this.tt.removeItem(this.et + Y8);
                            };
                            Y7.prototype.setItem = function (Y8, Y9) {
                                if (Y9 === undefined) {
                                    this.removeItem(Y8);
                                } else {
                                    this.tt.setItem(this.et + Y8, JSON.stringify(Y9));
                                }
                            };
                            Y7.prototype.getRawItem = function (Y8) {
                                return this.tt.getItem(this.et + Y8);
                            };
                            Y7.prototype.setRawItem = function (Y8, Y9) {
                                if (Y9 === undefined) {
                                    this.removeItem(Y8);
                                } else {
                                    this.tt.setItem(this.et + Y8, Y9);
                                }
                            };
                            Object.defineProperty(Y7.prototype, "ot", {
                                get: function () {
                                    for (var Y8 = [], Y9 = 0, Yd = this.tt.length; Y9 < Yd; Y9++) {
                                        var YY = this.tt.key(Y9);
                                        if (YY && YY.indexOf(this.et) === 0) {
                                            Y8.push(YY);
                                        }
                                    }
                                    return Y8;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Y7.prototype.setStorage = function (Y8) {
                                if (this.tt !== Y8) {
                                    this.tt = Y8;
                                }
                            };
                            Y7.prototype.defineItem = function (Y8, Y9) {
                                var Yd = this;
                                if (!(Y8 in this)) {
                                    dK(
                                        this,
                                        Y8,
                                        function () {
                                            return Yd.getItem(Y8, Y9);
                                        },
                                        function (YY) {
                                            var Yv = Yd.getItem(Y8, Y9);
                                            Yd.setItem(Y8, YY);
                                            Yd.ut(Y8, YY, Yv);
                                        }
                                    );
                                }
                            };
                            Y7.prototype.addObserver = function (Y8, Y9) {
                                if (Y9 == null) {
                                    if (typeof Y8 != "function") {
                                        throw Error("Invalid parameter");
                                    }
                                    Y9 = Y8;
                                    Y8 = undefined;
                                }
                                var Yd;
                                if (Y8 !== undefined) {
                                    if (!(Yd = this.it[Y8])) {
                                        Yd = this.it[Y8] = [];
                                    }
                                } else {
                                    Yd = this.rt;
                                }
                                if (Yd.indexOf(Y9) !== -1) {
                                    throw Error("Callback registered");
                                }
                                Yd.push(Y9);
                            };
                            Y7.prototype.removeObserver = function (Y8, Y9) {
                                if (Y9 == null) {
                                    if (typeof Y8 != "function") {
                                        throw Error("Invalid parameter");
                                    }
                                    Y9 = Y8;
                                    Y8 = undefined;
                                }
                                if (Y8 !== undefined) {
                                    var Yd = this.it[Y8];
                                    if (Yd) {
                                        Y1(Yd, Y9);
                                    }
                                } else {
                                    Y1(this.rt, Y9);
                                }
                            };
                            Y7.prototype.ut = function (Y8, Y9, Yd) {
                                this.rt.forEach(function (Yv) {
                                    return Yv(Y8, Y9, Yd);
                                });
                                var YY = this.it[Y8];
                                if (YY) {
                                    YY.forEach(function (Yv) {
                                        return Yv(Y9, Yd);
                                    });
                                }
                            };
                            Y7.getPreference = function (Y8) {
                                if (dj[Y8]) {
                                    return dj[Y8];
                                }
                                var Y9 = new Y7(Y8);
                                dj[Y8] = Y9;
                                return Y9;
                            };
                            return Y7;
                        })()
                    );
                    var Y2 = U.__extends;
                    var Y3 = shell.NetworkError;
                    var Y4 = shell.Error;
                    var Y5 = m(
                        "Serialiser",
                        (function () {
                            function Y7() {
                                this.encodingParameters = Y7.encodingParameters;
                                this.auth = Y7.auth;
                            }
                            Y7.prototype.serializing = function (Y8, Y9, Yd) {
                                var YY = undefined;
                                var Yv = undefined;
                                if (Yd) {
                                    var Yb = this.encodingParameters(Yd);
                                    if (Y7.encodingParametersInURI(Y8)) {
                                        Y9 = Y9.indexOf("?") !== -1 ? `${Y9}&${Yb}` : `${Y9}?${Yb}`;
                                    } else {
                                        YY = {
                                            "Content-Type": "application/x-www-form-urlencoded",
                                        };
                                        Yv = Yb;
                                    }
                                }
                                this.url = this.auth(Y9);
                                this.headers = YY;
                                this.body = Yv;
                            };
                            Y7.encodingParametersInURI = function (Y8) {
                                return Y8 === "GET" || Y8 === "HEAD" || Y8 === "DELETE";
                            };
                            Y7.encodingParameters = function (Y8) {
                                var Y9 = Y7.ct;
                                Y9.length = 0;
                                for (var Yd in Y8) {
                                    if (Object.prototype.hasOwnProperty.call(Y8, Yd)) {
                                        var YY = Y8[Yd];
                                        if (YY !== undefined) {
                                            if (typeof YY == "object") {
                                                Y9.push(`${encodeURIComponent(Yd)}=${encodeURIComponent(JSON.stringify(YY))}`);
                                            } else {
                                                Y9.push(`${encodeURIComponent(Yd)}=${encodeURIComponent(YY + "")}`);
                                            }
                                        }
                                    }
                                }
                                var Yv = Y9.join("&");
                                Y9.length = 0;
                                return Yv;
                            };
                            Y7.auth = function (Y8) {
                                if (shell && shell.authenticate) {
                                    return shell.authenticate(Y8);
                                } else {
                                    return Y8;
                                }
                            };
                            Y7.ct = [];
                            return Y7;
                        })()
                    );
                    m(
                        "JSONSerialiser",
                        (function (Y7) {
                            function Y8() {
                                return (Y7 !== null && Y7.apply(this, arguments)) || this;
                            }
                            Y2(Y8, Y7);
                            Y8.prototype.serializing = function (Y9, Yd, YY) {
                                if (Y5.encodingParametersInURI(Y9)) {
                                    return Y7.prototype.serializing.call(this, Y9, Yd, YY);
                                }
                                this.url = this.auth(Yd);
                                if (YY) {
                                    this.headers = {
                                        "Content-Type": "application/json",
                                    };
                                    this.body = JSON.stringify(YY);
                                } else {
                                    this.headers = undefined;
                                    this.body = undefined;
                                }
                            };
                            return Y8;
                        })(Y5)
                    );
                    var Y6 = m(
                        "Deserialiser",
                        (function () {
                            function Y7(Y8, Y9) {
                                this.transformResponse = Y7.transformResponse;
                                this.type = Y8;
                                this.mimeType = Y9;
                            }
                            Y7.prototype.deserializing = function (Y8) {
                                var Y9 = Y8.response;
                                if (this.type === "json" && typeof Y9 == "string") {
                                    try {
                                        Y9 = JSON.parse(Y9);
                                    } catch (Yd) {
                                        this.data = undefined;
                                        return Yd;
                                    }
                                }
                                this.data = this.transformResponse(Y9);
                            };
                            Y7.isHttpStatusError = function (Y8) {
                                var Y9 = Y8.status;
                                return (Y9 < 200 || Y9 > 299) && !(Y9 === 0 && Y8.response != null);
                            };
                            Y7.transformResponse = function (Y8) {
                                return Y8;
                            };
                            return Y7;
                        })()
                    );
                    m(
                        "XHR",
                        (function () {
                            function Y7(Y8, Y9) {
                                this.timeout = 60000;
                                this.serializer = Y8 || new Y5();
                                this.deserializer = Y9 || new Y6("json");
                            }
                            Y7.prototype.get = function (Y8, Y9, Yd) {
                                return this.request("GET", Y8, Y9, Yd);
                            };
                            Y7.prototype.head = function (Y8, Y9, Yd) {
                                return this.request("HEAD", Y8, Y9, Yd);
                            };
                            Y7.prototype.post = function (Y8, Y9, Yd) {
                                return this.request("POST", Y8, Y9, Yd);
                            };
                            Y7.prototype.put = function (Y8, Y9, Yd) {
                                return this.request("PUT", Y8, Y9, Yd);
                            };
                            Y7.prototype.patch = function (Y8, Y9, Yd) {
                                return this.request("PATCH", Y8, Y9, Yd);
                            };
                            Y7.prototype.delete = function (Y8, Y9, Yd) {
                                return this.request("DELETE", Y8, Y9, Yd);
                            };
                            Y7.prototype.request = function (Y8, Y9, Yd, YY) {
                                if (YY === undefined) {
                                    if (typeof Yd != "function") {
                                        throw Error("Invalid arguments");
                                    }
                                    YY = Yd;
                                    Yd = undefined;
                                }
                                var Yv;
                                var Yb = this.serializer;
                                var Ya = this.deserializer;
                                var Yl = new XMLHttpRequest();
                                var Yx =
                                    shell.environment.getURLSearchParam().get("otid") ||
                                    `${(function () {
                                        for (var YX = [], YT = 0; YT < 6; YT++) {
                                            YX.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(Math.random() * 26)));
                                        }
                                        return YX.join("");
                                    })()}${(Yv = new Date().getUTCDate() + "").length > 1 ? Yv : `0${Yv}`}`;
                                var YU = (function (YX, YT) {
                                    if (YX.indexOf("?") !== -1) {
                                        return `${YX}&traceId=${YT}`;
                                    } else {
                                        return `${YX}?traceId=${YT}`;
                                    }
                                })(Y9, Yx);
                                var Yn = Yb.serializing(Y8, YU, Yd);
                                if (Yn) {
                                    // TOLOOK
                                    setTimeout(function () {
                                        YY(Yn, undefined);
                                    }, 0);
                                    return Yl;
                                }
                                Yl.open(Y8, Yb.url, true);
                                Yl.timeout = this.timeout;
                                Yl.onload = function () {
                                    var YX = undefined;
                                    if (Y6.isHttpStatusError(Yl)) {
                                        YX = new Y4(Y3.Domain, Y3.HttpStatusError + Yl.status, Yx);
                                        Ya.data = undefined;
                                    } else {
                                        YX = Ya.deserializing(Yl);
                                    }
                                    if (YX) {
                                        YY(YX, undefined);
                                    } else {
                                        YY(undefined, Ya.data);
                                    }
                                };
                                Yl.onerror = function () {
                                    var YX = new Y4(Y3.Domain, Y3.HttpNetworkError, Yx);
                                    YY(YX, undefined);
                                };
                                Yl.ontimeout = function () {
                                    var YX = new Y4(Y3.Domain, Y3.HttpTimeoutError, Yx);
                                    YY(YX, undefined);
                                };
                                Yl.onabort = function () {
                                    var YX = new Y4(Y3.Domain, Y3.HttpAbortError, Yx);
                                    YY(YX, undefined);
                                };
                                Yl.responseType = Ya.type;
                                if (Ya.mimeType) {
                                    Yl.overrideMimeType(Ya.mimeType);
                                }
                                var Ym = Yb.headers;
                                if (Ym) {
                                    for (var YP in Ym) {
                                        if (Object.prototype.hasOwnProperty.call(Ym, YP)) {
                                            Yl.setRequestHeader(YP, Ym[YP]);
                                        }
                                    }
                                }
                                Yl.send(Yb.body);
                                return Yl;
                            };
                            return Y7;
                        })()
                    );
                    U.io = dI.io;
                    dX(function (Y7) {
                        dX(
                            dP(0),
                            dp
                        )(function (Y8) {
                            if (Y7) {
                                Y7(Y8);
                            }
                        });
                    })(function (Y7, Y8) {
                        if (Y8) {
                            throw Error(Y8.message);
                        }
                        if (Y7 && Y7.J) {
                            Y7.J();
                        }
                    });
                    m("default", dI.io);
                },
            };
        });
    })();
})();
