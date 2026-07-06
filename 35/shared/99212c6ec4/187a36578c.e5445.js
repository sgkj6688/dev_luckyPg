(function () {
    "use strict";

    (function () {
        var j;
        (function (Q) {
            Q.u = "window";
            Q.h = "self";
        })(j || (j = {}));
        var O = (0, eval)("this");
        var x = O[j.h];
        var Z = O[j.u];
        System.register([], function (Q) {
            "use strict";

            return {
                execute: function () {
                    var s0;
                    function s1(b7, b8, b9) {
                        var bs;
                        if (b8 || b9) {
                            if (b8) {
                                if (Array.isArray(b8) && b8.indexOf("") !== -1) {
                                    bs = `Relative url cannot be extracted from  ${b7[b8.indexOf("")]}.`;
                                } else if (b9) {
                                    if (!cc.assetManager.bundles.has(b9)) {
                                        bs = `Bundle ${b9} not exist in cc.assetManager.`;
                                    }
                                } else {
                                    bs = `Bundle name cannot be extracted from  ${b7}.`;
                                }
                            } else {
                                bs = `Relative url cannot be extracted from  ${b7}.`;
                            }
                        } else {
                            bs = `There is issue when resolving url ${b7} that leads to both bundle and relative url cannot be found.`;
                        }
                        return bs;
                    }
                    function s2(b7) {
                        var b8 = Array.isArray(b7);
                        var b9 = b8 ? b7[0] : b7;
                        if (typeof b9 == "string") {
                            var bs = b9.startsWith("@");
                            var bb = bs ? b9.indexOf("/") : -1;
                            if (bs && bb === -1) {
                                return {
                                    errorMessage: s1(b7, b9, undefined),
                                };
                            }
                            var ba;
                            var bY = bb !== -1 ? b9.substring(1, bb) : "resources";
                            ba = b8
                                ? b7.map(function (bj) {
                                      if (bs && bj.indexOf(bY) !== 1) {
                                          return "";
                                      } else {
                                          return bj.substring(bb + 1);
                                      }
                                  })
                                : b9.substring(bb + 1);
                            return {
                                bundleName: bY,
                                relativeUrl: ba,
                                errorMessage: s1(b7, ba, bY),
                            };
                        }
                        return {
                            errorMessage: "No url passed in!",
                        };
                    }
                    function s3(b7, b8, b9) {
                        var bs = cc.assetManager.assets.get(b7);
                        if (!bs) {
                            if (!b8) {
                                var bb = s2(b7);
                                var ba = bb.relativeUrl;
                                var bY = bb.bundleName;
                                var bj = bb.errorMessage;
                                if (bj) {
                                    throw Error(`ResRC _getAssetFromUuidOrUrl : ${bj}`);
                                }
                                if (bY && ba) {
                                    b7 = ba;
                                    b8 = cc.assetManager.getBundle(bY);
                                }
                            }
                            bs = b8 ? b8.get(b7, b9) : undefined;
                        }
                        return bs;
                    }
                    function s4(b7) {
                        var b8 = typeof b7 == "string" ? cc.assetManager.getBundle(b7) : b7;
                        if (b8) {
                            b8.releaseAll();
                        }
                    }
                    function s5(b7, b8) {
                        var b9;
                        var bs;
                        var bb;
                        var ba;
                        if (typeof b8 == "string") {
                            b9 = b8;
                        } else {
                            b9 = b8.bundleName;
                            bs = b8.type;
                            bb = b8.progressCallback;
                            ba = b8.completeCallback;
                        }
                        var bY = cc.assetManager.getBundle(b9);
                        if (!bY) {
                            throw Error(`ResRC loadBundleAsset : Cannot load ${b7} from unknown bundle ${b9}`);
                        }
                        var bj;
                        var bO;
                        var bx = (function (bZ, bQ, bd) {
                            var bK;
                            if (Array.isArray(bZ)) {
                                for (var bu = 0; bu < bZ.length; bu++) {
                                    var br = bZ[bu];
                                    if (!bd.getInfoWithPath(br, bQ)) {
                                        bK = br;
                                        break;
                                    }
                                }
                            } else if (!bd.getInfoWithPath(bZ, bQ)) {
                                bK = bZ;
                            }
                            return bK;
                        })(b7, bs, bY);
                        if (bx === undefined) {
                            bY.load(b7, bs, bb, function (bZ, bQ) {
                                if (!bZ && bQ) {
                                    if (Array.isArray(bQ)) {
                                        bQ.forEach(function (bd) {
                                            return bd.addRef();
                                        });
                                    } else {
                                        bQ.addRef();
                                    }
                                }
                                if (ba) {
                                    ba(bZ, bQ);
                                }
                            });
                        } else if (ba) {
                            bj = ba;
                            bO = bx;
                            (function (bZ) {
                                // TOLOOK
                                setTimeout(bZ, 0);
                            })(function () {
                                bj(Error(cc.debug.getError(4914, bO)), null);
                            });
                        }
                    }
                    function s6(b7, b8, b9) {
                        var bs = b8
                            ? {
                                  ext: b8.startsWith(".") ? b8 : `.${b8}`,
                              }
                            : null;
                        cc.assetManager.loadRemote(b7, bs, function (bb, ba) {
                            if (!bb && ba) {
                                ba.addRef();
                            }
                            if (b9) {
                                b9(bb, ba);
                            }
                        });
                    }
                    (function (b7) {
                        b7._parseLoadResArgs = "_parseLoadResArgs";
                    })(s0 || (s0 = {}));
                    Q(
                        "ResRC",
                        Object.freeze({
                            __proto__: null,
                            deleteBundle: function (b7) {
                                var b8 = typeof b7 == "string" ? cc.assetManager.getBundle(b7) : b7;
                                if (b8) {
                                    s4(b8);
                                    cc.assetManager.removeBundle(b8);
                                }
                            },
                            load: function (b7, b8, b9, bs) {
                                var bb = cc.assetManager[s0._parseLoadResArgs](b8, b9, bs);
                                b8 = bb.type;
                                b9 = bb.onProgress;
                                bs = bb.onComplete;
                                var ba = s2(b7);
                                var bY = ba.bundleName;
                                var bj = ba.relativeUrl;
                                var bO = ba.errorMessage;
                                if (bj && !bO) {
                                    s5(bj, {
                                        completeCallback: bs,
                                        bundleName: bY,
                                        type: b8,
                                    });
                                } else if (bO) {
                                    throw Error(`ResRC load : ${bO}`);
                                }
                            },
                            loadBundle: function (b7, b8, b9) {
                                if (typeof b8 == "function") {
                                    b9 = b8;
                                    b8 = undefined;
                                }
                                cc.assetManager.loadBundle(b7, b8, b9);
                            },
                            loadBundleArr: function (b7, b8) {
                                var b9 = [];
                                function bs(bb) {
                                    var ba = bb.shift();
                                    if (ba) {
                                        var bY = typeof ba == "string" ? ba : ba.name;
                                        var bj = Object.create(null);
                                        if (typeof ba != "string" && ba.version) {
                                            bj.version = ba.version;
                                        }
                                        cc.assetManager.loadBundle(bY, bj, function (bO, bx) {
                                            if (bx) {
                                                b9.push(bx);
                                                bs(bb);
                                            } else {
                                                if (!bO) {
                                                    bO = Error("Cannot find res after loading");
                                                }
                                                if (b8) {
                                                    b8(bO, undefined);
                                                }
                                            }
                                        });
                                    } else if (b8) {
                                        b8(undefined, b9);
                                    }
                                }
                                bs(b7.slice());
                            },
                            loadByBundleAsset: s5,
                            loadRemote: function (b7, b8) {
                                if (Array.isArray(b7)) {
                                    var b9 = 0;
                                    var bs = b7.length;
                                    var bb = [];
                                    var ba = [];
                                    b7.forEach(function (bj, bO) {
                                        var bx;
                                        var bZ = typeof bj == "string";
                                        s6(
                                            bZ ? bj : bj.url,
                                            bZ ? undefined : bj.ext,
                                            ((bx = bO),
                                            function (bQ, bd) {
                                                if (b9 === bs) {
                                                    throw Error("ResRC :: loadRemote : Error in iterator when loading an array of remote resources");
                                                }
                                                ba[bx] = bQ;
                                                bb[bx] = bd;
                                                if (++b9 === bs && b8) {
                                                    b8(ba, bb);
                                                }
                                            })
                                        );
                                    });
                                } else {
                                    var bY = typeof b7 == "string";
                                    s6(bY ? b7 : b7.url, bY ? undefined : b7.ext, b8);
                                }
                            },
                            loadRemoteBySingle: s6,
                            retain: function (b7, b8) {
                                var b9 = typeof b7 == "string" ? s3(b7, undefined, b8) : b7;
                                if (b9 instanceof cc.Asset) {
                                    b9.addRef();
                                }
                            },
                            unload: function (b7, b8) {
                                var b9 = typeof b7 == "string" ? s3(b7, undefined, b8) : b7;
                                if (b9 instanceof cc.Asset) {
                                    b9.decRef();
                                }
                            },
                            unloadBundle: s4,
                            unloadBundleAsset: function (b7, b8, b9) {
                                var bs = cc.assetManager.getBundle(b8);
                                if (!bs) {
                                    throw Error(`ResRC releaseBundleAsset : Cannot release ${b7} from unknown bundle ${b8}`);
                                }
                                if (!Array.isArray(b7)) {
                                    b7 = [b7];
                                }
                                for (var bb = 0, ba = b7; bb < ba.length; bb++) {
                                    var bY = ba[bb];
                                    var bj = bs.get(bY, b9);
                                    if (bj instanceof cc.Asset) {
                                        bj.decRef();
                                    }
                                }
                            },
                        })
                    );
                    var s7 = {
                        writable: false,
                        value: undefined,
                        enumerable: false,
                        configurable: false,
                    };
                    function s8(b7, b8, b9) {
                        for (var bs = b7.length, bb = 0; bb < bs; bb++) {
                            var ba = b7[bb];
                            if (ba) {
                                ba(b8, b9);
                            }
                        }
                    }
                    function s9(b7, b8, b9) {
                        if (typeof b7 != "object" || b7 === null) {
                            throw Error("Invalid parameter at index 0");
                        }
                        if (typeof b8 != "string" || b8 === "") {
                            throw Error("Invalid parameter at index 1");
                        }
                        var bs = b7.watch_eventPool;
                        if (bs) {
                            var bb = bs[b8];
                            if (bb) {
                                if (b9 === undefined) {
                                    bb.length = 0;
                                } else {
                                    var ba = bb.indexOf(b9);
                                    if (ba !== -1) {
                                        bb.splice(ba, 1);
                                    }
                                }
                            }
                        }
                    }
                    var ss;
                    var sb = (function () {
                        function _b() {
                            this.v = false;
                            if (cc.director.getScheduler() != null) {
                                this.g();
                            } else {
                                cc.game.once(cc.game.EVENT_ENGINE_INITED, this.g, this);
                            }
                        }
                        Object.defineProperty(_b.prototype, "paused", {
                            get: function () {
                                return this.v;
                            },
                            set: function (b8) {
                                if (this.v !== b8) {
                                    this.v = b8;
                                    if (b8) {
                                        this.k.pauseTarget(this);
                                    } else {
                                        this.k.resumeTarget(this);
                                    }
                                }
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        _b.prototype.g = function () {
                            this.v = false;
                            this.k = cc.director.getScheduler();
                            this.k.enableForTarget(this);
                        };
                        _b.prototype.schedule = function (b8, b9, bs, bb) {
                            if (!(b8 == null || b9 < 0)) {
                                b9 = b9 || 0;
                                bs = isNaN(bs) ? cc.macro.REPEAT_FOREVER : bs;
                                bb = bb || 0;
                                this.k.schedule(b8, this, b9, bs, bb, this.v);
                            }
                        };
                        _b.prototype.scheduleOnce = function (b8, b9) {
                            this.schedule(b8, 0, 0, b9);
                        };
                        _b.prototype.unschedule = function (b8) {
                            if (b8) {
                                this.k.unschedule(b8, this);
                            }
                        };
                        _b.prototype.unscheduleAllCallbacks = function () {
                            this.k.unscheduleAllForTarget(this);
                        };
                        return _b;
                    })();
                    var sa = (function () {
                        function b7() {
                            this.S = 5;
                            this.O = 0;
                            this.R = 0;
                            this.A = 0;
                            this.EXPECTED_FRAME_RATE = 50;
                            this.MAX_COUNTER = 5;
                            this.T = false;
                        }
                        b7.prototype.enableTracker = function (b8) {
                            if (!this.T) {
                                this.T = true;
                                this.O = 0;
                                this.R = 0;
                                this.A = cc.director.getTotalFrames();
                                this.C = b8;
                                cc.director.on(cc.Director.EVENT_BEFORE_UPDATE, this._, this);
                            }
                        };
                        b7.prototype.setTrackingInterval = function (b8) {
                            this.S = b8;
                        };
                        b7.prototype.D = function () {
                            this.R = 0;
                            this.T = false;
                            this.C = undefined;
                            cc.director.off(cc.Director.EVENT_BEFORE_UPDATE, this._, this);
                        };
                        b7.prototype._ = function () {
                            var b8 = cc.director.getDeltaTime();
                            this.O += b8;
                            if (this.O >= this.S) {
                                this.O = 0;
                                var b9 = this.A;
                                this.A = cc.director.getTotalFrames();
                                if (this.A - b9 < this.EXPECTED_FRAME_RATE * this.S) {
                                    this.R++;
                                    if (this.R >= this.MAX_COUNTER) {
                                        var bs = this.C;
                                        cc.game.setFrameRate(30);
                                        this.D();
                                        if (bs) {
                                            bs();
                                        }
                                    }
                                } else {
                                    this.R = 0;
                                }
                            }
                        };
                        return b7;
                    })();
                    var sY = (function () {
                        function b7(b8) {
                            this.B = false;
                            this.M = b8;
                        }
                        b7.prototype.dispose = function () {
                            if (!this.B) {
                                this.B = true;
                                var b8 = this.P;
                                this.P = undefined;
                                for (var b9 = 0, bs = b8 ? b8.length : 0; b9 < bs; b9++) {
                                    var bb = b8[b9];
                                    try {
                                        bb.I = undefined;
                                        bb.dispose();
                                    } catch (bY) {}
                                }
                                var ba = this.M;
                                this.M = undefined;
                                try {
                                    if (ba) {
                                        ba();
                                    }
                                } catch (bj) {}
                                if (this.I) {
                                    this.I.del(this);
                                }
                            }
                        };
                        b7.prototype.set = function (b8) {
                            return b8 instanceof Function && (this.B ? (b8(), false) : ((this.M = b8), true));
                        };
                        b7.prototype.add = function (b8) {
                            if (b8 instanceof Function) {
                                b8 = new b7(b8);
                            } else if (!(b8 instanceof b7)) {
                                return false;
                            }
                            if (this.B) {
                                b8.dispose();
                                return false;
                            }
                            var b9 = b8.I;
                            if (b9) {
                                b9.del(b8);
                            }
                            var bs = this.P;
                            if (!bs) {
                                bs = this.P = [];
                            }
                            bs.push(b8);
                            b8.I = this;
                            return true;
                        };
                        b7.prototype.del = function (b8) {
                            var b9 = b8 instanceof b7;
                            if (!(b9 || b8 instanceof Function)) {
                                return false;
                            }
                            if (b8 === this.M) {
                                this.M = undefined;
                                return true;
                            }
                            for (var bs = this.P, bb = 0, ba = bs ? bs.length : 0; bb < ba; bb++) {
                                var bY = bs[bb];
                                if ((b9 && bY === b8) || bY.M === b8) {
                                    bs.splice(bb);
                                    bY.I = undefined;
                                    return true;
                                }
                            }
                            return false;
                        };
                        Object.defineProperty(b7.prototype, "disposed", {
                            get: function () {
                                return this.B;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        b7.prototype.asDisposable = function () {
                            return this.dispose.bind(this);
                        };
                        return b7;
                    })();
                    var sj = {
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
                    (function (b7) {
                        b7.N = "_val";
                    })(ss || (ss = {}));
                    var sO = Object.freeze({});
                    function sx() {}
                    function sZ(b7, b8, b9) {
                        return b9.convertToNodeSpaceAR(b7.convertToWorldSpaceAR(b8));
                    }
                    var sQ;
                    sQ = undefined;
                    function sd() {
                        if (sQ === undefined) {
                            sQ = new sb();
                        }
                        return sQ;
                    }
                    function sK(b7) {
                        return function (b8) {
                            var b9 = // TOLOOK
                                setTimeout(b8, b7 * 1000);
                            return function () {
                                clearTimeout(b9);
                            };
                        };
                    }
                    function su() {
                        var b7;
                        b7 = arguments.length === 1 && arguments[0] instanceof Array ? arguments[0].slice() : Array.prototype.slice.call(arguments);
                        return function (b8) {
                            var b9 = new sY();
                            var bs = 0;
                            function bb(ba) {
                                if (!b9.disposed) {
                                    if (ba != null || ++bs === b7.length) {
                                        b8(ba);
                                        b9.dispose();
                                    } else {
                                        b9.set(b7[bs](bb));
                                    }
                                }
                            }
                            b9.set(b7[bs](bb));
                            return b9.asDisposable();
                        };
                    }
                    function sr() {
                        var b7;
                        b7 = arguments.length === 1 && arguments[0] instanceof Array ? arguments[0].slice() : Array.prototype.slice.call(arguments);
                        return function (b8) {
                            for (
                                var b9 = new sY(),
                                    bs = b7.length,
                                    bb = function (bj) {
                                        if (!(b9.disposed || (bj == null && --bs != 0))) {
                                            b8(bj);
                                            b9.dispose();
                                        }
                                    },
                                    ba = 0,
                                    bY = b7.length;
                                ba < bY;
                                ba++
                            ) {
                                b9.add(b7[ba](bb));
                            }
                            return b9.asDisposable();
                        };
                    }
                    function sV() {
                        su = function () {
                            return function () {};
                        };
                    }
                    function sm(b7) {
                        var b8 = 0;
                        var b9 = 0;
                        var bs = [];
                        var bb = [];
                        function ba() {
                            b8 = 2;
                            bs.unshift.apply(bs, bb);
                            bb.length = 0;
                            for (var bY = 1; bY < bs.length - 1; bY += 3) {
                                var bj = bs[bY];
                                if (bj) {
                                    var bO = bs[bY + 1];
                                    if (bO) {
                                        bj.apply(bO);
                                    } else {
                                        bj();
                                    }
                                }
                            }
                            bs.length = 0;
                            if (bb.length) {
                                b8 = 1;
                                b7(ba);
                            } else {
                                b8 = 0;
                            }
                        }
                        return function (bY, bj) {
                            return function (bO) {
                                if (typeof bY == "boolean" && bj === undefined) {
                                    bj = bY;
                                    bY = undefined;
                                }
                                var bx = b9++;
                                if (b8 === 2 && bj) {
                                    bb.push(bx, bO, bY);
                                } else {
                                    bs.push(bx, bO, bY);
                                    if (b8 === 0) {
                                        b8 = 1;
                                        b7(ba);
                                    }
                                }
                                return function () {
                                    var bZ = bb.indexOf(bx);
                                    if (bZ !== -1) {
                                        bb.splice(bZ, 3);
                                    } else if ((bZ = bs.indexOf(bx)) !== -1) {
                                        bs[bZ + 1] = undefined;
                                        bs[bZ + 2] = undefined;
                                    }
                                };
                            };
                        };
                    }
                    var sA = sm(function (b7) {
                        cc.director.once(cc.Director.EVENT_AFTER_UPDATE, b7);
                    });
                    var so = sm(function (b7) {
                        Promise.resolve().then(b7);
                    });
                    function sc(b7, b8) {
                        return +(Math.round(+(b7 + "e" + b8)) + "e-" + b8);
                    }
                    function sk(b7, b8) {
                        return sc(b7, b8).toFixed(b8);
                    }
                    function sq(b7) {
                        return ("0" + b7).slice(-2);
                    }
                    function sW(b7) {
                        return RegExp("^[^A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿Ⰰ-﬜﷾-﹯﻽-￿]*[֑-߿יִ-﷽ﹰ-ﻼ]").test(b7);
                    }
                    var sD;
                    var sG;
                    var se;
                    var sy;
                    var sR = {
                        groupSeparator: ",",
                        decimalSeparator: ".",
                        currencySymbol: "",
                        baseUnit: "",
                        hideDecimal: false,
                        format: function (b7) {
                            var b8;
                            var b9;
                            var bs = this.currencySymbol;
                            var bb = this.baseUnit;
                            var ba = this.hideDecimal ? 0 : 2;
                            if (b7 < 0) {
                                b8 = sk(-b7, ba);
                                b9 = "-";
                            } else {
                                b8 = sk(b7, ba);
                                b9 = "";
                            }
                            if (!this.hideDecimal) {
                                var bY = this.decimalSeparator;
                                if (bY !== ".") {
                                    b8 = b8.replace(".", bY);
                                }
                            }
                            var bj = this.groupSeparator;
                            if (bj !== "") {
                                b8 = b8.replace(/\B(?=(\d{3})+(?!\d))/g, bj);
                            }
                            var bO = b8 + bb;
                            if (sW(bs)) {
                                return b9 + bO + bs;
                            } else {
                                return b9 + bs + bO;
                            }
                        },
                    };
                    function sT(b7) {
                        if (b7.groupSeparator != null || b7.decimalSeparator != null) {
                            if (b7.groupSeparator != null) {
                                sR.groupSeparator = b7.groupSeparator;
                            }
                            if (b7.decimalSeparator != null) {
                                sR.decimalSeparator = b7.decimalSeparator;
                            }
                        } else if (b7.currencyCode != null) {
                            var b8 = sj[b7.currencyCode];
                            if (b8) {
                                sR.groupSeparator = b8.groupSeparator;
                                sR.decimalSeparator = b8.decimalSeparator;
                            }
                        }
                        if (b7.currencySymbol != null) {
                            sR.currencySymbol = b7.currencySymbol;
                        }
                        if (b7.baseUnit != null) {
                            sR.baseUnit = b7.baseUnit;
                        }
                        if (b7.hideDecimal != null) {
                            sR.hideDecimal = b7.hideDecimal;
                        }
                    }
                    function sz() {
                        return {
                            groupSeparator: sR.groupSeparator,
                            decimalSeparator: sR.decimalSeparator,
                            currencySymbol: sR.currencySymbol,
                            baseUnit: sR.baseUnit,
                            hideDecimal: sR.hideDecimal,
                        };
                    }
                    function sB() {
                        return location.protocol;
                    }
                    function sU() {
                        return location.origin;
                    }
                    function sP(b7, b8) {
                        if (b7.endsWith("/") && b8.startsWith("/")) {
                            return b7.substring(0, b7.length - 1) + b8;
                        } else if (b7.endsWith("/") || b8.startsWith("/")) {
                            return b7 + b8;
                        } else {
                            return b7 + "/" + b8;
                        }
                    }
                    function sJ(b7) {
                        var b8 = Z[b7];
                        if (typeof b8 == "string") {
                            return parseInt(b8);
                        }
                        throw Error("The engine does not exists or is not loaded");
                    }
                    var sv = Object.freeze({
                        __proto__: null,
                        CompoundDisposable: sY,
                        SimpleScheduler: sb,
                        clearElements: function (b7) {
                            return b7.splice(0);
                        },
                        clearSequence: sV,
                        clearSpawn: function () {
                            sr = function () {
                                return function () {};
                            };
                        },
                        condition: function (b7, b8, b9) {
                            return function (bs) {
                                var bb = new sY();
                                function ba() {
                                    if (!bb.disposed) {
                                        bs.apply(undefined, Array.prototype.slice.call(arguments));
                                        bb.dispose();
                                    }
                                }
                                bb.set(
                                    b7(function (bY, bj) {
                                        if (!bb.disposed) {
                                            var bO = bY == null;
                                            if (bO && bj) {
                                                bb.set(b8(ba));
                                            } else if (bO && b9) {
                                                bb.set(b9(ba));
                                            } else {
                                                bs(bY);
                                                bb.dispose();
                                            }
                                        }
                                    })
                                );
                                return bb.asDisposable();
                            };
                        },
                        convertNodeSpace: function (b7, b8, b9) {
                            return b9.convertToNodeSpace(b7.convertToWorldSpace(b8));
                        },
                        convertNodeSpaceAR: sZ,
                        currencyFormatter: sR,
                        defer: sA,
                        delay: function (b7) {
                            return function (b8) {
                                function b9() {
                                    b8();
                                }
                                var bs = sd();
                                bs.scheduleOnce(b9, b7);
                                return function () {
                                    bs.unschedule(b9);
                                };
                            };
                        },
                        emptyFunc: sx,
                        emptyObj: sO,
                        enableFPSTracker: function () {
                            if (sG === undefined) {
                                sG = new sa();
                            }
                            sG.enableTracker();
                        },
                        firstElement: function (b7) {
                            if (b7.length > 0) {
                                return b7[0];
                            } else {
                                return undefined;
                            }
                        },
                        formatCurrency: function (b7, b8, b9) {
                            var bs = sz();
                            sT({
                                currencySymbol: b8 !== undefined ? b8 : sR.currencySymbol,
                                baseUnit: b9 !== undefined ? b9 : sR.baseUnit,
                            });
                            var bb = sR.format(b7);
                            sT(bs);
                            return bb;
                        },
                        formatDateTime: function (b7) {
                            return (
                                b7.getFullYear() + "/" + sq(b7.getMonth() + 1) + "/" + sq(b7.getDate()) + " " + sq(b7.getHours()) + ":" + sq(b7.getMinutes())
                            );
                        },
                        formatGroup: function (b7, b8) {
                            if (b8 == null) {
                                b8 = sR.groupSeparator;
                            }
                            return b7.toString().replace(/\B(?=(\d{3})+(?!\d))/g, b8);
                        },
                        formatLeadingZero: sq,
                        getAbsolutePos: function (b7) {
                            var b8 = b7.parent;
                            if (!b8) {
                                return b7.position;
                            }
                            var b9 = b7.getAnchorPoint();
                            var bs = b8.getAnchorPoint();
                            var bb = b7.position;
                            bb.x = Math.floor(bb.x + bs.x * b8.width - b9.x * b7.width);
                            bb.y = Math.floor(bb.y + bs.y * b8.height - b9.y * b7.height);
                            return bb;
                        },
                        getAbsoluteXPos: function (b7) {
                            var b8 = b7.parent;
                            if (b8) {
                                return Math.floor(b7.x + b8.anchorX * b8.width - b7.anchorX * b7.width);
                            } else {
                                return b7.x;
                            }
                        },
                        getAbsoluteYPos: function (b7) {
                            var b8 = b7.parent;
                            if (b8) {
                                return Math.floor(b7.y + b8.anchorY * b8.height - b7.anchorY * b7.height);
                            } else {
                                return b7.y;
                            }
                        },
                        getCocosMajor: function () {
                            if (sy === undefined) {
                                sy = sJ("CocosEngine");
                            }
                            return sy;
                        },
                        getDefaultCurrencyFormat: sz,
                        getEngineMajor: function () {
                            if (se === undefined) {
                                se = sJ("COCOS_ENGINE");
                            }
                            return se;
                        },
                        getLocationOrigin: sU,
                        getLocationProtocol: sB,
                        getPlatform: function () {
                            return shell.getPlatform();
                        },
                        getSharedSimpleScheduler: sd,
                        hasMethod: function (b7, b8) {
                            return typeof b7[b8] == "function";
                        },
                        hasProperty: function (b7, b8) {
                            return b7[b8] !== undefined;
                        },
                        insertElement: function (b7, b8, b9) {
                            b7.splice(b9, 0, b8);
                        },
                        isNumeric: function (b7) {
                            return !isNaN(parseFloat(b7)) && isFinite(b7);
                        },
                        isRightToLeft: sW,
                        joinPath: sP,
                        lastElement: function (b7) {
                            var b8 = b7.length;
                            if (b8 > 0) {
                                return b7[b8 - 1];
                            } else {
                                return undefined;
                            }
                        },
                        observe: function (b7, b8) {
                            return function (b9) {
                                try {
                                    var bs = b9.bind(undefined, undefined);
                                    (function (ba, bY, bj) {
                                        if (typeof ba != "object" || ba === null) {
                                            throw Error("Invalid parameter at index 0");
                                        }
                                        if (typeof bY != "string" || bY === "") {
                                            throw Error("Invalid parameter at index 1");
                                        }
                                        if (typeof bj != "function") {
                                            throw Error("Invalid parameter at index 2");
                                        }
                                        var bO = ba.watch_eventPool;
                                        if (!bO) {
                                            if (!Object.isExtensible(ba)) {
                                                throw Error("Object is not extensible");
                                            }
                                            bO = s7.value = Object.create(null);
                                            Object.defineProperty(ba, "watch_eventPool", s7);
                                        }
                                        var bx = bO[bY];
                                        if (!bx) {
                                            var bZ = Object.getOwnPropertyDescriptor(ba, bY);
                                            if (!bZ) {
                                                throw Error("Object property not exists");
                                            }
                                            if (bZ.writable === false || (bZ.get !== undefined && bZ.set === undefined)) {
                                                throw Error("Object property is readonly");
                                            }
                                            if (!bZ.configurable) {
                                                throw Error("Object property is not configurable");
                                            }
                                            bx = bO[bY] = [];
                                            (function (bQ, bd, bK) {
                                                if (bK.writable) {
                                                    var bu = bK.value;
                                                    bK.get = function () {
                                                        return bu;
                                                    };
                                                    bK.set = function (bm) {
                                                        var bA = bu;
                                                        bu = bm;
                                                        s8(this.watch_eventPool[bd], bm, bA);
                                                    };
                                                    delete bK.value;
                                                    delete bK.writable;
                                                } else if (bK.get) {
                                                    var br = bK.set;
                                                    bK.set = function (bm) {
                                                        br.call(this, bm);
                                                        s8(this.watch_eventPool[bd], this[bd]);
                                                    };
                                                } else {
                                                    var bV = bK.set;
                                                    bK.set = function (bm) {
                                                        bV.call(this, bm);
                                                        s8(this.watch_eventPool[bd], bm);
                                                    };
                                                }
                                                Object.defineProperty(bQ, bd, bK);
                                            })(ba, bY, bZ);
                                        }
                                        if (bx.indexOf(bj) !== -1) {
                                            throw Error("Watch callback exists");
                                        }
                                        bx.push(bj);
                                    })(b7, b8, bs);
                                    var bb = s9.bind(undefined, b7, b8, bs);
                                    return new sY(bb).asDisposable();
                                } catch (ba) {
                                    b9(ba);
                                    return sx;
                                }
                            };
                        },
                        randomInt: function (b7, b8) {
                            return Math.floor(Math.random() * (b8 - b7 + 1)) + b7;
                        },
                        removeElement: function (b7, b8) {
                            var b9 = b7.indexOf(b8);
                            if (b9 !== -1) {
                                return b7.splice(b9, 1);
                            } else {
                                return undefined;
                            }
                        },
                        removeIndex: function (b7, b8) {
                            if (b7.length >= Math.abs(b8)) {
                                return b7.splice(b8, 1);
                            } else {
                                return undefined;
                            }
                        },
                        resolvePath: function (b7, b8) {
                            var b9;
                            b9 = b8 === undefined ? b7 : /^([a-z0-9+-.]+:)?\/\//.test(b8) ? b8 : sP(b7, b8);
                            if (/^[a-z0-9+-.]+:\/\//.test(b9)) {
                                return b9;
                            } else if (b9.startsWith("//")) {
                                return sP(sB(), b9);
                            } else {
                                return sP(sU(), b9);
                            }
                        },
                        selector: function (b7, b8) {
                            for (var b9, bs, bb = [], ba = 2; ba < arguments.length; ba++) {
                                bb[ba - 2] = arguments[ba];
                            }
                            return function (bY) {
                                try {
                                    bs = b8 != null || bb.length > 0 ? b7.apply(b8, bb) : b7();
                                } catch (bj) {
                                    b9 = bj;
                                }
                                bY(b9, bs);
                                return sx;
                            };
                        },
                        get sequence() {
                            return su;
                        },
                        setAbsolutePos: function (b7, b8) {
                            var b9 = b7.parent;
                            if (b9) {
                                var bs = b7.getAnchorPoint();
                                var bb = b9.getAnchorPoint();
                                b7.setPosition(
                                    new cc.Vec2(Math.floor(b8.x - bb.x * b9.width + bs.x * b7.width), Math.round(b8.y - bb.y * b9.height + bs.y * b7.height))
                                );
                            } else {
                                b7.setPosition(b8);
                            }
                        },
                        setAbsoluteXPos: function (b7, b8) {
                            var b9 = b7.parent;
                            b7.x = b9 ? Math.floor(b8 - b9.anchorX * b9.width + b7.anchorX * b7.width) : b8;
                        },
                        setAbsoluteYPos: function (b7, b8) {
                            var b9 = b7.parent;
                            b7.y = b9 ? Math.floor(b8 - b9.anchorY * b9.height + b7.anchorY * b7.height) : b8;
                        },
                        setDefaultCurrencyFormat: sT,
                        setFPSTrackerInterval: function (b7) {
                            if (sG === undefined) {
                                sG = new sa();
                            }
                            sG.setTrackingInterval(b7);
                        },
                        setNodeColorWithOpacity: function (b7, b8) {
                            if (!sD) {
                                sD = cc.Color.WHITE.clone();
                            }
                            sD[ss.N] = b8[ss.N] | 4278190080;
                            b7.color = sD;
                            b7.opacity = b8.getA();
                        },
                        get spawn() {
                            return sr;
                        },
                        stringToBoolean: function (b7) {
                            if (b7 == null) {
                                return false;
                            }
                            switch (b7.toLowerCase().trim()) {
                                case "true":
                                case "yes":
                                case "1":
                                    return true;
                                case "false":
                                case "no":
                                case "0":
                                    return false;
                                default:
                                    return !!b7;
                            }
                        },
                        tick: so,
                        timeout: sK,
                        toDecimalWithExp: sc,
                        toFixed: sk,
                        transferToNewParent: function (b7, b8) {
                            b7.position = sZ(b7.parent, b7.position, b8);
                            b7.parent = b8;
                        },
                        waterfall: function () {
                            var b7;
                            b7 = arguments.length === 1 && arguments[0] instanceof Array ? arguments[0].slice() : Array.prototype.slice.call(arguments);
                            return function (b8) {
                                var b9 = new sY();
                                var bs = 0;
                                function bb(ba) {
                                    if (!b9.disposed) {
                                        if (ba != null || ++bs === b7.length) {
                                            var bY = Array.prototype.slice.call(arguments);
                                            b8.apply(undefined, bY);
                                            b9.dispose();
                                        } else {
                                            var bj = b7[bs];
                                            var bO = bj.length;
                                            if (bO > 1) {
                                                (bY = Array.prototype.slice.call(arguments, 1, bO)).push(bb);
                                                b9.set(bj.apply(undefined, bY));
                                            } else {
                                                b9.set(bj(bb));
                                            }
                                        }
                                    }
                                }
                                b9.set(b7[bs](bb));
                                return b9.asDisposable();
                            };
                        },
                    });
                    Q("Utils", sv);
                    var sg;
                    var sw = O !== undefined ? O : Z !== undefined ? Z : typeof global != "undefined" ? global : x !== undefined ? x : {};
                    var sL = {
                        exports: {},
                    };
                    sg = sL;
                    if (!(x !== undefined || Z !== undefined || sw !== undefined)) {
                        Function("", "return this")();
                    }
                    sg.exports = (function (b7) {
                        var b8 = {};
                        function b9(bs) {
                            if (b8[bs]) {
                                return b8[bs].exports;
                            }
                            var bb = (b8[bs] = {
                                i: bs,
                                l: false,
                                exports: {},
                            });
                            b7[bs].call(bb.exports, bb, bb.exports, b9);
                            bb.l = true;
                            return bb.exports;
                        }
                        b9.m = b7;
                        b9.c = b8;
                        b9.d = function (bs, bb, ba) {
                            if (!b9.o(bs, bb)) {
                                Object.defineProperty(bs, bb, {
                                    enumerable: true,
                                    get: ba,
                                });
                            }
                        };
                        b9.r = function (bs) {
                            if (typeof Symbol != "undefined" && Symbol.toStringTag) {
                                Object.defineProperty(bs, Symbol.toStringTag, {
                                    value: "Module",
                                });
                            }
                            Object.defineProperty(bs, "__esModule", {
                                value: true,
                            });
                        };
                        b9.t = function (bs, bb) {
                            if (bb & 1) {
                                bs = b9(bs);
                            }
                            if (bb & 8) {
                                return bs;
                            }
                            if (bb & 4 && typeof bs == "object" && bs && bs.__esModule) {
                                return bs;
                            }
                            var ba = Object.create(null);
                            b9.r(ba);
                            Object.defineProperty(ba, "default", {
                                enumerable: true,
                                value: bs,
                            });
                            if (bb & 2 && typeof bs != "string") {
                                for (var bY in bs) {
                                    b9.d(
                                        ba,
                                        bY,
                                        function (bj) {
                                            return bs[bj];
                                        }.bind(null, bY)
                                    );
                                }
                            }
                            return ba;
                        };
                        b9.n = function (bs) {
                            var bb =
                                bs && bs.__esModule
                                    ? function () {
                                          return bs.default;
                                      }
                                    : function () {
                                          return bs;
                                      };
                            b9.d(bb, "a", bb);
                            return bb;
                        };
                        b9.o = function (bs, bb) {
                            return Object.prototype.hasOwnProperty.call(bs, bb);
                        };
                        b9.p = "";
                        return b9((b9.s = 18));
                    })([
                        function (b7) {
                            function b8(b9) {
                                if (b9) {
                                    return (function (bs) {
                                        for (var bb in b8.prototype) {
                                            bs[bb] = b8.prototype[bb];
                                        }
                                        return bs;
                                    })(b9);
                                }
                            }
                            b7.exports = b8;
                            b8.prototype.on = b8.prototype.addEventListener = function (b9, bs) {
                                this.U = this.U || {};
                                (this.U["$" + b9] = this.U["$" + b9] || []).push(bs);
                                return this;
                            };
                            b8.prototype.once = function (b9, bs) {
                                function bb() {
                                    this.off(b9, bb);
                                    bs.apply(this, arguments);
                                }
                                bb.fn = bs;
                                this.on(b9, bb);
                                return this;
                            };
                            b8.prototype.off =
                                b8.prototype.removeListener =
                                b8.prototype.removeAllListeners =
                                b8.prototype.removeEventListener =
                                    function (b9, bs) {
                                        this.U = this.U || {};
                                        if (arguments.length == 0) {
                                            this.U = {};
                                            return this;
                                        }
                                        var bb;
                                        var ba = this.U["$" + b9];
                                        if (!ba) {
                                            return this;
                                        }
                                        if (arguments.length == 1) {
                                            delete this.U["$" + b9];
                                            return this;
                                        }
                                        for (var bY = 0; bY < ba.length; bY++) {
                                            if ((bb = ba[bY]) === bs || bb.fn === bs) {
                                                ba.splice(bY, 1);
                                                break;
                                            }
                                        }
                                        if (ba.length === 0) {
                                            delete this.U["$" + b9];
                                        }
                                        return this;
                                    };
                            b8.prototype.emit = function (b9) {
                                this.U = this.U || {};
                                for (var bs = Array(arguments.length - 1), bb = this.U["$" + b9], ba = 1; ba < arguments.length; ba++) {
                                    bs[ba - 1] = arguments[ba];
                                }
                                if (bb) {
                                    ba = 0;
                                    for (var bY = (bb = bb.slice(0)).length; ba < bY; ++ba) {
                                        bb[ba].apply(this, bs);
                                    }
                                }
                                return this;
                            };
                            b8.prototype.listeners = function (b9) {
                                this.U = this.U || {};
                                return this.U["$" + b9] || [];
                            };
                            b8.prototype.hasListeners = function (b9) {
                                return !!this.listeners(b9).length;
                            };
                        },
                        function (b7, b8, b9) {
                            var bs = b9(24);
                            var bb = b9(25);
                            b7.exports = {
                                protocol: 4,
                                encodePacket: bs,
                                encodePayload: function (ba, bY) {
                                    var bj = ba.length;
                                    var bO = Array(bj);
                                    var bx = 0;
                                    ba.forEach(function (bZ, bQ) {
                                        bs(bZ, false, function (bd) {
                                            bO[bQ] = bd;
                                            if (++bx === bj) {
                                                bY(bO.join(""));
                                            }
                                        });
                                    });
                                },
                                decodePacket: bb,
                                decodePayload: function (ba, bY) {
                                    for (var bj = ba.split(""), bO = [], bx = 0; bx < bj.length; bx++) {
                                        var bZ = bb(bj[bx], bY);
                                        bO.push(bZ);
                                        if (bZ.type === "error") {
                                            break;
                                        }
                                    }
                                    return bO;
                                },
                            };
                        },
                        function (b7) {
                            b7.exports = x !== undefined ? x : Z !== undefined ? Z : Function("", "return this")();
                        },
                        function (b7, b8, b9) {
                            var bs = b9(22);
                            var bb = b9(2);
                            b7.exports = function (ba) {
                                var bY = ba.xdomain;
                                var bj = ba.xscheme;
                                var bO = ba.enablesXDR;
                                try {
                                    if (typeof XMLHttpRequest != "undefined" && (!bY || bs)) {
                                        return new XMLHttpRequest();
                                    }
                                } catch (bx) {}
                                try {
                                    if (typeof XDomainRequest != "undefined" && !bj && bO) {
                                        return new XDomainRequest();
                                    }
                                } catch (bZ) {}
                                if (!bY) {
                                    try {
                                        return new bb[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP");
                                    } catch (bQ) {}
                                }
                            };
                        },
                        function (b7, b8, b9) {
                            function bs(bZ) {
                                return (bs =
                                    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                                        ? function (bQ) {
                                              return typeof bQ;
                                          }
                                        : function (bQ) {
                                              if (bQ && typeof Symbol == "function" && bQ.constructor === Symbol && bQ !== Symbol.prototype) {
                                                  return "symbol";
                                              } else {
                                                  return typeof bQ;
                                              }
                                          })(bZ);
                            }
                            function bb(bZ, bQ) {
                                return (bb =
                                    Object.setPrototypeOf ||
                                    function (bd, bK) {
                                        bd.__proto__ = bK;
                                        return bd;
                                    })(bZ, bQ);
                            }
                            function ba(bZ) {
                                var bQ = (function () {
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
                                    } catch (bd) {
                                        return false;
                                    }
                                })();
                                return function () {
                                    var bd;
                                    var bK = bj(bZ);
                                    if (bQ) {
                                        var bu = bj(this).constructor;
                                        bd = Reflect.construct(bK, arguments, bu);
                                    } else {
                                        bd = bK.apply(this, arguments);
                                    }
                                    return bY(this, bd);
                                };
                            }
                            function bY(bZ, bQ) {
                                if (!bQ || (bs(bQ) !== "object" && typeof bQ != "function")) {
                                    return (function (bd) {
                                        if (bd === undefined) {
                                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        }
                                        return bd;
                                    })(bZ);
                                } else {
                                    return bQ;
                                }
                            }
                            function bj(bZ) {
                                return (bj = Object.setPrototypeOf
                                    ? Object.getPrototypeOf
                                    : function (bQ) {
                                          return bQ.__proto__ || Object.getPrototypeOf(bQ);
                                      })(bZ);
                            }
                            var bO = b9(1);
                            var bx = (function (bZ) {
                                (function (bu, br) {
                                    if (typeof br != "function" && br !== null) {
                                        throw new TypeError("Super expression must either be null or a function");
                                    }
                                    bu.prototype = Object.create(br && br.prototype, {
                                        constructor: {
                                            value: bu,
                                            writable: true,
                                            configurable: true,
                                        },
                                    });
                                    if (br) {
                                        bb(bu, br);
                                    }
                                })(bK, bZ);
                                var bQ;
                                var bd = ba(bK);
                                function bK(bu) {
                                    var br;
                                    (function (bV, bm) {
                                        if (!(bV instanceof bm)) {
                                            throw new TypeError("Cannot call a class as a function");
                                        }
                                    })(this, bK);
                                    (br = bd.call(this)).opts = bu;
                                    br.query = bu.query;
                                    br.readyState = "";
                                    br.socket = bu.socket;
                                    return br;
                                }
                                if (
                                    (bQ = [
                                        {
                                            key: "onError",
                                            value: function (bu, br) {
                                                var bV = Error(bu);
                                                bV.type = "TransportError";
                                                bV.description = br;
                                                this.emit("error", bV);
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
                                            value: function (bu) {
                                                if (this.readyState !== "open") {
                                                    throw Error("Transport not open");
                                                }
                                                this.write(bu);
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
                                            value: function (bu) {
                                                var br = bO.decodePacket(bu, this.socket.binaryType);
                                                this.onPacket(br);
                                            },
                                        },
                                        {
                                            key: "onPacket",
                                            value: function (bu) {
                                                this.emit("packet", bu);
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
                                    (function (bu, br) {
                                        for (var bV = 0; bV < br.length; bV++) {
                                            var bm = br[bV];
                                            bm.enumerable = bm.enumerable || false;
                                            bm.configurable = true;
                                            if ("value" in bm) {
                                                bm.writable = true;
                                            }
                                            Object.defineProperty(bu, bm.key, bm);
                                        }
                                    })(bK.prototype, bQ);
                                }
                                return bK;
                            })(b9(0));
                            b7.exports = bx;
                        },
                        function (b7, b8) {
                            b8.encode = function (b9) {
                                var bs = "";
                                for (var bb in b9) {
                                    if (b9.hasOwnProperty(bb)) {
                                        if (bs.length) {
                                            bs += "&";
                                        }
                                        bs += encodeURIComponent(bb) + "=" + encodeURIComponent(b9[bb]);
                                    }
                                }
                                return bs;
                            };
                            b8.decode = function (b9) {
                                for (var bs = {}, bb = b9.split("&"), ba = 0, bY = bb.length; ba < bY; ba++) {
                                    var bj = bb[ba].split("=");
                                    bs[decodeURIComponent(bj[0])] = decodeURIComponent(bj[1]);
                                }
                                return bs;
                            };
                        },
                        function (b7, b8, b9) {
                            function bs(bA) {
                                return (bs =
                                    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                                        ? function (bo) {
                                              return typeof bo;
                                          }
                                        : function (bo) {
                                              if (bo && typeof Symbol == "function" && bo.constructor === Symbol && bo !== Symbol.prototype) {
                                                  return "symbol";
                                              } else {
                                                  return typeof bo;
                                              }
                                          })(bA);
                            }
                            function bb(bA, bo, bc) {
                                return (bb =
                                    typeof Reflect != "undefined" && Reflect.get
                                        ? Reflect.get
                                        : function (bk, bq, bW) {
                                              var bD = (function (be, by) {
                                                  for (; !Object.prototype.hasOwnProperty.call(be, by) && (be = bj(be)) !== null; );
                                                  return be;
                                              })(bk, bq);
                                              if (bD) {
                                                  var bG = Object.getOwnPropertyDescriptor(bD, bq);
                                                  if (bG.get) {
                                                      return bG.get.call(bW);
                                                  } else {
                                                      return bG.value;
                                                  }
                                              }
                                          })(bA, bo, bc || bA);
                            }
                            function ba(bA, bo) {
                                return (ba =
                                    Object.setPrototypeOf ||
                                    function (bc, bk) {
                                        bc.__proto__ = bk;
                                        return bc;
                                    })(bA, bo);
                            }
                            function bY(bA, bo) {
                                if (!bo || (bs(bo) !== "object" && typeof bo != "function")) {
                                    return (function (bc) {
                                        if (bc === undefined) {
                                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        }
                                        return bc;
                                    })(bA);
                                } else {
                                    return bo;
                                }
                            }
                            function bj(bA) {
                                return (bj = Object.setPrototypeOf
                                    ? Object.getPrototypeOf
                                    : function (bo) {
                                          return bo.__proto__ || Object.getPrototypeOf(bo);
                                      })(bA);
                            }
                            function bO(bA, bo) {
                                if (!(bA instanceof bo)) {
                                    throw new TypeError("Cannot call a class as a function");
                                }
                            }
                            function bx(bA, bo) {
                                for (var bc = 0; bc < bo.length; bc++) {
                                    var bk = bo[bc];
                                    bk.enumerable = bk.enumerable || false;
                                    bk.configurable = true;
                                    if ("value" in bk) {
                                        bk.writable = true;
                                    }
                                    Object.defineProperty(bA, bk.key, bk);
                                }
                            }
                            function bZ(bA, bo, bc) {
                                if (bo) {
                                    bx(bA.prototype, bo);
                                }
                                if (bc) {
                                    bx(bA, bc);
                                }
                                return bA;
                            }
                            Object.defineProperty(b8, "__esModule", {
                                value: true,
                            });
                            b8.Decoder = b8.Encoder = b8.PacketType = b8.protocol = undefined;
                            var bQ;
                            var bd = b9(0);
                            var bK = b9(30);
                            var bu = b9(15);
                            b8.protocol = 5;
                            (function (bA) {
                                bA[(bA.CONNECT = 0)] = "CONNECT";
                                bA[(bA.DISCONNECT = 1)] = "DISCONNECT";
                                bA[(bA.EVENT = 2)] = "EVENT";
                                bA[(bA.ACK = 3)] = "ACK";
                                bA[(bA.CONNECT_ERROR = 4)] = "CONNECT_ERROR";
                                bA[(bA.BINARY_EVENT = 5)] = "BINARY_EVENT";
                                bA[(bA.BINARY_ACK = 6)] = "BINARY_ACK";
                            })((bQ = b8.PacketType || (b8.PacketType = {})));
                            var br = (function () {
                                function bA() {
                                    bO(this, bA);
                                }
                                bZ(bA, [
                                    {
                                        key: "encode",
                                        value: function (bo) {
                                            if ((bo.type !== bQ.EVENT && bo.type !== bQ.ACK) || !bu.hasBinary(bo)) {
                                                return [this.encodeAsString(bo)];
                                            } else {
                                                bo.type = bo.type === bQ.EVENT ? bQ.BINARY_EVENT : bQ.BINARY_ACK;
                                                return this.encodeAsBinary(bo);
                                            }
                                        },
                                    },
                                    {
                                        key: "encodeAsString",
                                        value: function (bo) {
                                            var bc = "" + bo.type;
                                            if (!(bo.type !== bQ.BINARY_EVENT && bo.type !== bQ.BINARY_ACK)) {
                                                bc += bo.attachments + "-";
                                            }
                                            if (bo.nsp && bo.nsp !== "/") {
                                                bc += bo.nsp + ",";
                                            }
                                            if (bo.id != null) {
                                                bc += bo.id;
                                            }
                                            if (bo.data != null) {
                                                bc += JSON.stringify(bo.data);
                                            }
                                            return bc;
                                        },
                                    },
                                    {
                                        key: "encodeAsBinary",
                                        value: function (bo) {
                                            var bc = bK.deconstructPacket(bo);
                                            var bk = this.encodeAsString(bc.packet);
                                            var bq = bc.buffers;
                                            bq.unshift(bk);
                                            return bq;
                                        },
                                    },
                                ]);
                                return bA;
                            })();
                            b8.Encoder = br;
                            var bV = (function (bA) {
                                (function (bk, bq) {
                                    if (typeof bq != "function" && bq !== null) {
                                        throw new TypeError("Super expression must either be null or a function");
                                    }
                                    bk.prototype = Object.create(bq && bq.prototype, {
                                        constructor: {
                                            value: bk,
                                            writable: true,
                                            configurable: true,
                                        },
                                    });
                                    if (bq) {
                                        ba(bk, bq);
                                    }
                                })(bc, bA);
                                var bo = (function (bk) {
                                    var bq = (function () {
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
                                        } catch (bW) {
                                            return false;
                                        }
                                    })();
                                    return function () {
                                        var bW;
                                        var bD = bj(bk);
                                        if (bq) {
                                            var bG = bj(this).constructor;
                                            bW = Reflect.construct(bD, arguments, bG);
                                        } else {
                                            bW = bD.apply(this, arguments);
                                        }
                                        return bY(this, bW);
                                    };
                                })(bc);
                                function bc() {
                                    bO(this, bc);
                                    return bo.call(this);
                                }
                                bZ(
                                    bc,
                                    [
                                        {
                                            key: "add",
                                            value: function (bk) {
                                                var bq;
                                                if (typeof bk == "string") {
                                                    if ((bq = this.decodeString(bk)).type === bQ.BINARY_EVENT || bq.type === bQ.BINARY_ACK) {
                                                        this.reconstructor = new bm(bq);
                                                        if (bq.attachments === 0) {
                                                            bb(bj(bc.prototype), "emit", this).call(this, "decoded", bq);
                                                        }
                                                    } else {
                                                        bb(bj(bc.prototype), "emit", this).call(this, "decoded", bq);
                                                    }
                                                } else {
                                                    if (!bu.isBinary(bk) && !bk.base64) {
                                                        throw Error("Unknown type: " + bk);
                                                    }
                                                    if (!this.reconstructor) {
                                                        throw Error("got binary data when not reconstructing a packet");
                                                    }
                                                    if ((bq = this.reconstructor.takeBinaryData(bk))) {
                                                        this.reconstructor = null;
                                                        bb(bj(bc.prototype), "emit", this).call(this, "decoded", bq);
                                                    }
                                                }
                                            },
                                        },
                                        {
                                            key: "decodeString",
                                            value: function (bk) {
                                                var bq = 0;
                                                var bW = {
                                                    type: +bk.charAt(0),
                                                };
                                                if (bQ[bW.type] === undefined) {
                                                    throw Error("unknown packet type " + bW.type);
                                                }
                                                if (bW.type === bQ.BINARY_EVENT || bW.type === bQ.BINARY_ACK) {
                                                    for (var bD = bq + 1; bk.charAt(++bq) !== "-" && bq != bk.length; );
                                                    var bG = bk.substring(bD, bq);
                                                    if (bG != +bG || bk.charAt(bq) !== "-") {
                                                        throw Error("Illegal attachments");
                                                    }
                                                    bW.attachments = +bG;
                                                }
                                                if (bk.charAt(bq + 1) === "/") {
                                                    for (var be = bq + 1; ++bq && bk.charAt(bq) !== "," && bq !== bk.length; );
                                                    bW.nsp = bk.substring(be, bq);
                                                } else {
                                                    bW.nsp = "/";
                                                }
                                                var by = bk.charAt(bq + 1);
                                                if (by !== "" && +by == by) {
                                                    for (var bR = bq + 1; ++bq; ) {
                                                        var bT = bk.charAt(bq);
                                                        if (bT == null || +bT != bT) {
                                                            --bq;
                                                            break;
                                                        }
                                                        if (bq === bk.length) {
                                                            break;
                                                        }
                                                    }
                                                    bW.id = +bk.substring(bR, bq + 1);
                                                }
                                                if (bk.charAt(++bq)) {
                                                    var bz = (function (bB) {
                                                        try {
                                                            return JSON.parse(bB);
                                                        } catch (bU) {
                                                            return false;
                                                        }
                                                    })(bk.substr(bq));
                                                    if (!bc.isPayloadValid(bW.type, bz)) {
                                                        throw Error("invalid payload");
                                                    }
                                                    bW.data = bz;
                                                }
                                                return bW;
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
                                            value: function (bk, bq) {
                                                switch (bk) {
                                                    case bQ.CONNECT:
                                                        return bs(bq) === "object";
                                                    case bQ.DISCONNECT:
                                                        return bq === undefined;
                                                    case bQ.CONNECT_ERROR:
                                                        return typeof bq == "string" || bs(bq) === "object";
                                                    case bQ.EVENT:
                                                    case bQ.BINARY_EVENT:
                                                        return Array.isArray(bq) && typeof bq[0] == "string";
                                                    case bQ.ACK:
                                                    case bQ.BINARY_ACK:
                                                        return Array.isArray(bq);
                                                }
                                            },
                                        },
                                    ]
                                );
                                return bc;
                            })(bd);
                            b8.Decoder = bV;
                            var bm = (function () {
                                function _bA(bo) {
                                    bO(this, _bA);
                                    this.packet = bo;
                                    this.buffers = [];
                                    this.reconPack = bo;
                                }
                                bZ(_bA, [
                                    {
                                        key: "takeBinaryData",
                                        value: function (bo) {
                                            this.buffers.push(bo);
                                            if (this.buffers.length === this.reconPack.attachments) {
                                                var bc = bK.reconstructPacket(this.reconPack, this.buffers);
                                                this.finishedReconstruction();
                                                return bc;
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
                                return _bA;
                            })();
                        },
                        function (b7) {
                            var b8 =
                                /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/;
                            var b9 = [
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
                            b7.exports = function (bs) {
                                var bb = bs;
                                var ba = bs.indexOf("[");
                                var bY = bs.indexOf("]");
                                if (ba != -1 && bY != -1) {
                                    bs = bs.substring(0, ba) + bs.substring(ba, bY).replace(/:/g, ";") + bs.substring(bY, bs.length);
                                }
                                for (var bj, bO, bx = b8.exec(bs || ""), bZ = {}, bQ = 14; bQ--; ) {
                                    bZ[b9[bQ]] = bx[bQ] || "";
                                }
                                if (ba != -1 && bY != -1) {
                                    bZ.source = bb;
                                    bZ.host = bZ.host.substring(1, bZ.host.length - 1).replace(/;/g, ":");
                                    bZ.authority = bZ.authority.replace("[", "").replace("]", "").replace(/;/g, ":");
                                    bZ.ipv6uri = true;
                                }
                                bZ.pathNames = (function (bd, bK) {
                                    var bu = bK.replace(/\/{2,9}/g, "/").split("/");
                                    if (!(bK.substr(0, 1) != "/" && bK.length !== 0)) {
                                        bu.splice(0, 1);
                                    }
                                    if (bK.substr(bK.length - 1, 1) == "/") {
                                        bu.splice(bu.length - 1, 1);
                                    }
                                    return bu;
                                })(0, bZ.path);
                                bj = bZ.query;
                                bO = {};
                                bj.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function (bd, bK, bu) {
                                    if (bK) {
                                        bO[bK] = bu;
                                    }
                                });
                                bZ.queryKey = bO;
                                return bZ;
                            };
                        },
                        function (b7, b8, b9) {
                            function bs(bV) {
                                return (bs =
                                    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                                        ? function (bm) {
                                              return typeof bm;
                                          }
                                        : function (bm) {
                                              if (bm && typeof Symbol == "function" && bm.constructor === Symbol && bm !== Symbol.prototype) {
                                                  return "symbol";
                                              } else {
                                                  return typeof bm;
                                              }
                                          })(bV);
                            }
                            function bb(bV, bm, bA) {
                                return (bb =
                                    typeof Reflect != "undefined" && Reflect.get
                                        ? Reflect.get
                                        : function (bo, bc, bk) {
                                              var bq = (function (bD, bG) {
                                                  for (; !Object.prototype.hasOwnProperty.call(bD, bG) && (bD = bj(bD)) !== null; );
                                                  return bD;
                                              })(bo, bc);
                                              if (bq) {
                                                  var bW = Object.getOwnPropertyDescriptor(bq, bc);
                                                  if (bW.get) {
                                                      return bW.get.call(bk);
                                                  } else {
                                                      return bW.value;
                                                  }
                                              }
                                          })(bV, bm, bA || bV);
                            }
                            function ba(bV, bm) {
                                return (ba =
                                    Object.setPrototypeOf ||
                                    function (bA, bo) {
                                        bA.__proto__ = bo;
                                        return bA;
                                    })(bV, bm);
                            }
                            function bY(bV, bm) {
                                if (!bm || (bs(bm) !== "object" && typeof bm != "function")) {
                                    return (function (bA) {
                                        if (bA === undefined) {
                                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        }
                                        return bA;
                                    })(bV);
                                } else {
                                    return bm;
                                }
                            }
                            function bj(bV) {
                                return (bj = Object.setPrototypeOf
                                    ? Object.getPrototypeOf
                                    : function (bm) {
                                          return bm.__proto__ || Object.getPrototypeOf(bm);
                                      })(bV);
                            }
                            Object.defineProperty(b8, "__esModule", {
                                value: true,
                            });
                            b8.Manager = undefined;
                            var bO = b9(20);
                            var bx = b9(14);
                            var bZ = b9(0);
                            var bQ = b9(6);
                            var bd = b9(16);
                            var bK = b9(17);
                            var bu = b9(31);
                            var br = (function (bV) {
                                (function (bc, bk) {
                                    if (typeof bk != "function" && bk !== null) {
                                        throw new TypeError("Super expression must either be null or a function");
                                    }
                                    bc.prototype = Object.create(bk && bk.prototype, {
                                        constructor: {
                                            value: bc,
                                            writable: true,
                                            configurable: true,
                                        },
                                    });
                                    if (bk) {
                                        ba(bc, bk);
                                    }
                                })(bo, bV);
                                var bm;
                                var bA = (function (bc) {
                                    var bk = (function () {
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
                                        } catch (bq) {
                                            return false;
                                        }
                                    })();
                                    return function () {
                                        var bq;
                                        var bW = bj(bc);
                                        if (bk) {
                                            var bD = bj(this).constructor;
                                            bq = Reflect.construct(bW, arguments, bD);
                                        } else {
                                            bq = bW.apply(this, arguments);
                                        }
                                        return bY(this, bq);
                                    };
                                })(bo);
                                function bo(bc, bk) {
                                    var bq;
                                    (function (bD, bG) {
                                        if (!(bD instanceof bG)) {
                                            throw new TypeError("Cannot call a class as a function");
                                        }
                                    })(this, bo);
                                    (bq = bA.call(this)).nsps = {};
                                    bq.subs = [];
                                    bq.connecting = [];
                                    if (bc && bs(bc) === "object") {
                                        bk = bc;
                                        bc = undefined;
                                    }
                                    (bk = bk || {}).path = bk.path || "/socket.io";
                                    bq.opts = bk;
                                    bq.reconnection(bk.reconnection !== false);
                                    bq.reconnectionAttempts(bk.reconnectionAttempts || Infinity);
                                    bq.reconnectionDelay(bk.reconnectionDelay || 1000);
                                    bq.reconnectionDelayMax(bk.reconnectionDelayMax || 5000);
                                    bq.randomizationFactor(bk.randomizationFactor || 0.5);
                                    bq.backoff = new bu({
                                        min: bq.reconnectionDelay(),
                                        max: bq.reconnectionDelayMax(),
                                        jitter: bq.randomizationFactor(),
                                    });
                                    bq.timeout(bk.timeout == null ? 20000 : bk.timeout);
                                    bq._readyState = "closed";
                                    bq.uri = bc;
                                    var bW = bk.parser || bQ;
                                    bq.encoder = new bW.Encoder();
                                    bq.decoder = new bW.Decoder();
                                    bq._autoConnect = bk.autoConnect !== false;
                                    if (bq._autoConnect) {
                                        bq.open();
                                    }
                                    return bq;
                                }
                                if (
                                    (bm = [
                                        {
                                            key: "reconnection",
                                            value: function (bc) {
                                                if (arguments.length) {
                                                    this.F = !!bc;
                                                    return this;
                                                } else {
                                                    return this.F;
                                                }
                                            },
                                        },
                                        {
                                            key: "reconnectionAttempts",
                                            value: function (bc) {
                                                if (bc === undefined) {
                                                    return this.L;
                                                } else {
                                                    this.L = bc;
                                                    return this;
                                                }
                                            },
                                        },
                                        {
                                            key: "reconnectionDelay",
                                            value: function (bc) {
                                                if (bc === undefined) {
                                                    return this.X;
                                                } else {
                                                    this.X = bc;
                                                    if (this.backoff) {
                                                        this.backoff.setMin(bc);
                                                    }
                                                    return this;
                                                }
                                            },
                                        },
                                        {
                                            key: "randomizationFactor",
                                            value: function (bc) {
                                                if (bc === undefined) {
                                                    return this.H;
                                                } else {
                                                    this.H = bc;
                                                    if (this.backoff) {
                                                        this.backoff.setJitter(bc);
                                                    }
                                                    return this;
                                                }
                                            },
                                        },
                                        {
                                            key: "reconnectionDelayMax",
                                            value: function (bc) {
                                                if (bc === undefined) {
                                                    return this.q;
                                                } else {
                                                    this.q = bc;
                                                    if (this.backoff) {
                                                        this.backoff.setMax(bc);
                                                    }
                                                    return this;
                                                }
                                            },
                                        },
                                        {
                                            key: "timeout",
                                            value: function (bc) {
                                                if (arguments.length) {
                                                    this.K = bc;
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
                                            value: function (bc) {
                                                var bk = this;
                                                if (~this._readyState.indexOf("open")) {
                                                    return this;
                                                }
                                                this.engine = bO(this.uri, this.opts);
                                                var bq = this.engine;
                                                var bW = this;
                                                this._readyState = "opening";
                                                this.skipReconnect = false;
                                                var bD = bd.on(bq, "open", function () {
                                                    bW.onopen();
                                                    if (bc) {
                                                        bc();
                                                    }
                                                });
                                                var bG = bd.on(bq, "error", function (bR) {
                                                    bW.cleanup();
                                                    bW._readyState = "closed";
                                                    bb(bj(bo.prototype), "emit", bk).call(bk, "error", bR);
                                                    if (bc) {
                                                        bc(bR);
                                                    } else {
                                                        bW.maybeReconnectOnOpen();
                                                    }
                                                });
                                                if (this.K !== false) {
                                                    var be = this.K;
                                                    if (be === 0) {
                                                        bD.destroy();
                                                    }
                                                    var by = // TOLOOK
                                                        setTimeout(function () {
                                                            bD.destroy();
                                                            bq.close();
                                                            bq.emit("error", Error("timeout"));
                                                        }, be);
                                                    this.subs.push({
                                                        destroy: function () {
                                                            clearTimeout(by);
                                                        },
                                                    });
                                                }
                                                this.subs.push(bD);
                                                this.subs.push(bG);
                                                return this;
                                            },
                                        },
                                        {
                                            key: "connect",
                                            value: function (bc) {
                                                return this.open(bc);
                                            },
                                        },
                                        {
                                            key: "onopen",
                                            value: function () {
                                                this.cleanup();
                                                this._readyState = "open";
                                                bb(bj(bo.prototype), "emit", this).call(this, "open");
                                                var bc = this.engine;
                                                this.subs.push(bd.on(bc, "data", bK(this, "ondata")));
                                                this.subs.push(bd.on(bc, "ping", bK(this, "onping")));
                                                this.subs.push(bd.on(bc, "error", bK(this, "onerror")));
                                                this.subs.push(bd.on(bc, "close", bK(this, "onclose")));
                                                this.subs.push(bd.on(this.decoder, "decoded", bK(this, "ondecoded")));
                                            },
                                        },
                                        {
                                            key: "onping",
                                            value: function () {
                                                bb(bj(bo.prototype), "emit", this).call(this, "ping");
                                            },
                                        },
                                        {
                                            key: "ondata",
                                            value: function (bc) {
                                                this.decoder.add(bc);
                                            },
                                        },
                                        {
                                            key: "ondecoded",
                                            value: function (bc) {
                                                bb(bj(bo.prototype), "emit", this).call(this, "packet", bc);
                                            },
                                        },
                                        {
                                            key: "onerror",
                                            value: function (bc) {
                                                bb(bj(bo.prototype), "emit", this).call(this, "error", bc);
                                            },
                                        },
                                        {
                                            key: "socket",
                                            value: function (bc, bk) {
                                                var bq = this.nsps[bc];
                                                if (!bq) {
                                                    bq = new bx.Socket(this, bc, bk);
                                                    this.nsps[bc] = bq;
                                                    var bW = this;
                                                    bq.on("connecting", bD);
                                                    if (this._autoConnect) {
                                                        bD();
                                                    }
                                                }
                                                function bD() {
                                                    if (!~bW.connecting.indexOf(bq)) {
                                                        bW.connecting.push(bq);
                                                    }
                                                }
                                                return bq;
                                            },
                                        },
                                        {
                                            key: "_destroy",
                                            value: function (bc) {
                                                var bk = this.connecting.indexOf(bc);
                                                if (~bk) {
                                                    this.connecting.splice(bk, 1);
                                                }
                                                if (!this.connecting.length) {
                                                    this._close();
                                                }
                                            },
                                        },
                                        {
                                            key: "_packet",
                                            value: function (bc) {
                                                if (bc.query && bc.type === 0) {
                                                    bc.nsp += "?" + bc.query;
                                                }
                                                for (var bk = this.encoder.encode(bc), bq = 0; bq < bk.length; bq++) {
                                                    this.engine.write(bk[bq], bc.options);
                                                }
                                            },
                                        },
                                        {
                                            key: "cleanup",
                                            value: function () {
                                                for (var bc = this.subs.length, bk = 0; bk < bc; bk++) {
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
                                            value: function (bc) {
                                                this.cleanup();
                                                this.backoff.reset();
                                                this._readyState = "closed";
                                                bb(bj(bo.prototype), "emit", this).call(this, "close", bc);
                                                if (this.F && !this.skipReconnect) {
                                                    this.reconnect();
                                                }
                                            },
                                        },
                                        {
                                            key: "reconnect",
                                            value: function () {
                                                var bc = this;
                                                if (this._reconnecting || this.skipReconnect) {
                                                    return this;
                                                }
                                                var bk = this;
                                                if (this.backoff.attempts >= this.L) {
                                                    this.backoff.reset();
                                                    bb(bj(bo.prototype), "emit", this).call(this, "reconnect_failed");
                                                    this._reconnecting = false;
                                                } else {
                                                    var bq = this.backoff.duration();
                                                    this._reconnecting = true;
                                                    var bW = // TOLOOK
                                                        setTimeout(function () {
                                                            if (!bk.skipReconnect) {
                                                                bb(bj(bo.prototype), "emit", bc).call(bc, "reconnect_attempt", bk.backoff.attempts);
                                                                if (!bk.skipReconnect) {
                                                                    bk.open(function (bD) {
                                                                        if (bD) {
                                                                            bk._reconnecting = false;
                                                                            bk.reconnect();
                                                                            bb(bj(bo.prototype), "emit", bc).call(bc, "reconnect_error", bD);
                                                                        } else {
                                                                            bk.onreconnect();
                                                                        }
                                                                    });
                                                                }
                                                            }
                                                        }, bq);
                                                    this.subs.push({
                                                        destroy: function () {
                                                            clearTimeout(bW);
                                                        },
                                                    });
                                                }
                                            },
                                        },
                                        {
                                            key: "onreconnect",
                                            value: function () {
                                                var bc = this.backoff.attempts;
                                                this._reconnecting = false;
                                                this.backoff.reset();
                                                bb(bj(bo.prototype), "emit", this).call(this, "reconnect", bc);
                                            },
                                        },
                                    ])
                                ) {
                                    (function (bc, bk) {
                                        for (var bq = 0; bq < bk.length; bq++) {
                                            var bW = bk[bq];
                                            bW.enumerable = bW.enumerable || false;
                                            bW.configurable = true;
                                            if ("value" in bW) {
                                                bW.writable = true;
                                            }
                                            Object.defineProperty(bc, bW.key, bW);
                                        }
                                    })(bo.prototype, bm);
                                }
                                return bo;
                            })(bZ);
                            b8.Manager = br;
                        },
                        function (b7, b8, b9) {
                            var bs = b9(3);
                            var bb = b9(23);
                            var ba = b9(27);
                            var bY = b9(28);
                            b8.polling = function (bj) {
                                var bO = false;
                                var bx = false;
                                var bZ = bj.jsonp !== false;
                                if (typeof location != "undefined") {
                                    var bQ = location.protocol === "https:";
                                    var bd = location.port;
                                    if (!bd) {
                                        bd = bQ ? 443 : 80;
                                    }
                                    bO = bj.hostname !== location.hostname || bd !== bj.port;
                                    bx = bj.secure !== bQ;
                                }
                                bj.xdomain = bO;
                                bj.xscheme = bx;
                                if ("open" in new bs(bj) && !bj.forceJSONP) {
                                    return new bb(bj);
                                }
                                if (!bZ) {
                                    throw Error("JSONP disabled");
                                }
                                return new ba(bj);
                            };
                            b8.websocket = bY;
                        },
                        function (b7, b8, b9) {
                            function bs(bu) {
                                return (bs =
                                    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                                        ? function (br) {
                                              return typeof br;
                                          }
                                        : function (br) {
                                              if (br && typeof Symbol == "function" && br.constructor === Symbol && br !== Symbol.prototype) {
                                                  return "symbol";
                                              } else {
                                                  return typeof br;
                                              }
                                          })(bu);
                            }
                            function bb(bu, br) {
                                if (!(bu instanceof br)) {
                                    throw new TypeError("Cannot call a class as a function");
                                }
                            }
                            function ba(bu, br) {
                                return (ba =
                                    Object.setPrototypeOf ||
                                    function (bV, bm) {
                                        bV.__proto__ = bm;
                                        return bV;
                                    })(bu, br);
                            }
                            function bY(bu) {
                                var br = (function () {
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
                                    } catch (bV) {
                                        return false;
                                    }
                                })();
                                return function () {
                                    var bV;
                                    var bm = bO(bu);
                                    if (br) {
                                        var bA = bO(this).constructor;
                                        bV = Reflect.construct(bm, arguments, bA);
                                    } else {
                                        bV = bm.apply(this, arguments);
                                    }
                                    return bj(this, bV);
                                };
                            }
                            function bj(bu, br) {
                                if (!br || (bs(br) !== "object" && typeof br != "function")) {
                                    return (function (bV) {
                                        if (bV === undefined) {
                                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        }
                                        return bV;
                                    })(bu);
                                } else {
                                    return br;
                                }
                            }
                            function bO(bu) {
                                return (bO = Object.setPrototypeOf
                                    ? Object.getPrototypeOf
                                    : function (br) {
                                          return br.__proto__ || Object.getPrototypeOf(br);
                                      })(bu);
                            }
                            var bx = b9(4);
                            var bZ = b9(5);
                            var bQ = b9(1);
                            var bd = b9(12);
                            var bK = (function (bu) {
                                (function (bA, bo) {
                                    if (typeof bo != "function" && bo !== null) {
                                        throw new TypeError("Super expression must either be null or a function");
                                    }
                                    bA.prototype = Object.create(bo && bo.prototype, {
                                        constructor: {
                                            value: bA,
                                            writable: true,
                                            configurable: true,
                                        },
                                    });
                                    if (bo) {
                                        ba(bA, bo);
                                    }
                                })(bm, bu);
                                var br;
                                var bV = bY(bm);
                                function bm() {
                                    bb(this, bm);
                                    return bV.apply(this, arguments);
                                }
                                if (
                                    (br = [
                                        {
                                            key: "doOpen",
                                            value: function () {
                                                this.poll();
                                            },
                                        },
                                        {
                                            key: "pause",
                                            value: function (bA) {
                                                var bo = this;
                                                function bk() {
                                                    bo.readyState = "paused";
                                                    bA();
                                                }
                                                this.readyState = "pausing";
                                                if (this.polling || !this.writable) {
                                                    var bc = 0;
                                                    if (this.polling) {
                                                        bc++;
                                                        this.once("pollComplete", function () {
                                                            if (!--bc) {
                                                                bk();
                                                            }
                                                        });
                                                    }
                                                    if (!this.writable) {
                                                        bc++;
                                                        this.once("drain", function () {
                                                            if (!--bc) {
                                                                bk();
                                                            }
                                                        });
                                                    }
                                                } else {
                                                    bk();
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
                                            value: function (bA) {
                                                var bo = this;
                                                bQ.decodePayload(bA, this.socket.binaryType).forEach(function (bc) {
                                                    if (bo.readyState === "opening" && bc.type === "open") {
                                                        bo.onOpen();
                                                    }
                                                    if (bc.type === "close") {
                                                        bo.onClose();
                                                        return false;
                                                    }
                                                    bo.onPacket(bc);
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
                                                var bA = this;
                                                function _bo() {
                                                    bA.write([
                                                        {
                                                            type: "close",
                                                        },
                                                    ]);
                                                }
                                                if (this.readyState === "open") {
                                                    _bo();
                                                } else {
                                                    this.once("open", _bo);
                                                }
                                            },
                                        },
                                        {
                                            key: "write",
                                            value: function (bA) {
                                                var bo = this;
                                                this.writable = false;
                                                bQ.encodePayload(bA, function (bc) {
                                                    bo.doWrite(bc, function () {
                                                        bo.writable = true;
                                                        bo.emit("drain");
                                                    });
                                                });
                                            },
                                        },
                                        {
                                            key: "uri",
                                            value: function () {
                                                var bA = this.query || {};
                                                var bo = this.opts.secure ? "https" : "http";
                                                var bc = "";
                                                if (this.opts.timestampRequests !== false) {
                                                    bA[this.opts.timestampParam] = bd();
                                                }
                                                if (!(this.supportsBinary || bA.sid)) {
                                                    bA.b64 = 1;
                                                }
                                                bA = bZ.encode(bA);
                                                if (
                                                    this.opts.port &&
                                                    ((bo === "https" && +this.opts.port != 443) || (bo === "http" && +this.opts.port != 80))
                                                ) {
                                                    bc = ":" + this.opts.port;
                                                }
                                                if (bA.length) {
                                                    bA = "?" + bA;
                                                }
                                                return (
                                                    bo +
                                                    "://" +
                                                    (this.opts.hostname.indexOf(":") !== -1 ? "[" + this.opts.hostname + "]" : this.opts.hostname) +
                                                    bc +
                                                    this.opts.path +
                                                    bA
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
                                    (function (bA, bo) {
                                        for (var bc = 0; bc < bo.length; bc++) {
                                            var bk = bo[bc];
                                            bk.enumerable = bk.enumerable || false;
                                            bk.configurable = true;
                                            if ("value" in bk) {
                                                bk.writable = true;
                                            }
                                            Object.defineProperty(bA, bk.key, bk);
                                        }
                                    })(bm.prototype, br);
                                }
                                return bm;
                            })(bx);
                            b7.exports = bK;
                        },
                        function (b7) {
                            var b8 = Object.create(null);
                            b8.open = "0";
                            b8.close = "1";
                            b8.ping = "2";
                            b8.pong = "3";
                            b8.message = "4";
                            b8.upgrade = "5";
                            b8.noop = "6";
                            var b9 = Object.create(null);
                            Object.keys(b8).forEach(function (bs) {
                                b9[b8[bs]] = bs;
                            });
                            b7.exports = {
                                PACKET_TYPES: b8,
                                PACKET_TYPES_REVERSE: b9,
                                ERROR_PACKET: {
                                    type: "error",
                                    data: "parser error",
                                },
                            };
                        },
                        function (b7) {
                            var b8;
                            var b9 = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split("");
                            var bs = {};
                            var bb = 0;
                            var ba = 0;
                            function bY(bO) {
                                var bx = "";
                                do {
                                    bx = b9[bO % 64] + bx;
                                    bO = Math.floor(bO / 64);
                                } while (bO > 0);
                                return bx;
                            }
                            function bj() {
                                var bO = bY(+new Date());
                                if (bO !== b8) {
                                    bb = 0;
                                    return (b8 = bO);
                                } else {
                                    return bO + "." + bY(bb++);
                                }
                            }
                            for (; ba < 64; ba++) {
                                bs[b9[ba]] = ba;
                            }
                            bj.encode = bY;
                            bj.decode = function (bO) {
                                var bx = 0;
                                for (ba = 0; ba < bO.length; ba++) {
                                    bx = bx * 64 + bs[bO.charAt(ba)];
                                }
                                return bx;
                            };
                            b7.exports = bj;
                        },
                        function (b7) {
                            b7.exports.pick = function (b8) {
                                for (var b9 = arguments.length, bs = Array(b9 > 1 ? b9 - 1 : 0), bb = 1; bb < b9; bb++) {
                                    bs[bb - 1] = arguments[bb];
                                }
                                return bs.reduce(function (ba, bY) {
                                    ba[bY] = b8[bY];
                                    return ba;
                                }, {});
                            };
                        },
                        function (b7, b8, b9) {
                            function bs(bm) {
                                return (bs =
                                    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                                        ? function (bA) {
                                              return typeof bA;
                                          }
                                        : function (bA) {
                                              if (bA && typeof Symbol == "function" && bA.constructor === Symbol && bA !== Symbol.prototype) {
                                                  return "symbol";
                                              } else {
                                                  return typeof bA;
                                              }
                                          })(bm);
                            }
                            function bb(bm, bA) {
                                var bo;
                                if (typeof Symbol == "undefined" || bm[Symbol.iterator] == null) {
                                    if (
                                        Array.isArray(bm) ||
                                        (bo = (function (bG, be) {
                                            if (bG) {
                                                if (typeof bG == "string") {
                                                    return ba(bG, be);
                                                }
                                                var by = Object.prototype.toString.call(bG).slice(8, -1);
                                                if (by === "Object" && bG.constructor) {
                                                    by = bG.constructor.name;
                                                }
                                                if (by === "Map" || by === "Set") {
                                                    return Array.from(bG);
                                                } else if (by === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(by)) {
                                                    return ba(bG, be);
                                                } else {
                                                    return undefined;
                                                }
                                            }
                                        })(bm)) ||
                                        bA
                                    ) {
                                        if (bo) {
                                            bm = bo;
                                        }
                                        var bc = 0;
                                        function bk() {}
                                        return {
                                            s: bk,
                                            n: function () {
                                                if (bc >= bm.length) {
                                                    return {
                                                        done: true,
                                                    };
                                                } else {
                                                    return {
                                                        done: false,
                                                        value: bm[bc++],
                                                    };
                                                }
                                            },
                                            e: function (bG) {
                                                throw bG;
                                            },
                                            f: bk,
                                        };
                                    }
                                    throw new TypeError(
                                        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                                    );
                                }
                                var bq;
                                var bW = true;
                                var bD = false;
                                return {
                                    s: function () {
                                        bo = bm[Symbol.iterator]();
                                    },
                                    n: function () {
                                        var bG = bo.next();
                                        bW = bG.done;
                                        return bG;
                                    },
                                    e: function (bG) {
                                        bD = true;
                                        bq = bG;
                                    },
                                    f: function () {
                                        try {
                                            if (!(bW || bo.return == null)) {
                                                bo.return();
                                            }
                                        } finally {
                                            if (bD) {
                                                throw bq;
                                            }
                                        }
                                    },
                                };
                            }
                            function ba(bm, bA) {
                                if (bA == null || bA > bm.length) {
                                    bA = bm.length;
                                }
                                for (var bo = 0, bc = Array(bA); bo < bA; bo++) {
                                    bc[bo] = bm[bo];
                                }
                                return bc;
                            }
                            function bY(bm, bA, bo) {
                                return (bY =
                                    typeof Reflect != "undefined" && Reflect.get
                                        ? Reflect.get
                                        : function (bc, bk, bq) {
                                              var bW = (function (bG, be) {
                                                  for (; !Object.prototype.hasOwnProperty.call(bG, be) && (bG = bZ(bG)) !== null; );
                                                  return bG;
                                              })(bc, bk);
                                              if (bW) {
                                                  var bD = Object.getOwnPropertyDescriptor(bW, bk);
                                                  if (bD.get) {
                                                      return bD.get.call(bq);
                                                  } else {
                                                      return bD.value;
                                                  }
                                              }
                                          })(bm, bA, bo || bm);
                            }
                            function bj(bm, bA) {
                                return (bj =
                                    Object.setPrototypeOf ||
                                    function (bo, bc) {
                                        bo.__proto__ = bc;
                                        return bo;
                                    })(bm, bA);
                            }
                            function bO(bm) {
                                var bA = (function () {
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
                                    } catch (bo) {
                                        return false;
                                    }
                                })();
                                return function () {
                                    var bo;
                                    var bc = bZ(bm);
                                    if (bA) {
                                        var bk = bZ(this).constructor;
                                        bo = Reflect.construct(bc, arguments, bk);
                                    } else {
                                        bo = bc.apply(this, arguments);
                                    }
                                    return bx(this, bo);
                                };
                            }
                            function bx(bm, bA) {
                                if (!bA || (bs(bA) !== "object" && typeof bA != "function")) {
                                    return (function (bo) {
                                        if (bo === undefined) {
                                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        }
                                        return bo;
                                    })(bm);
                                } else {
                                    return bA;
                                }
                            }
                            function bZ(bm) {
                                return (bZ = Object.setPrototypeOf
                                    ? Object.getPrototypeOf
                                    : function (bA) {
                                          return bA.__proto__ || Object.getPrototypeOf(bA);
                                      })(bm);
                            }
                            Object.defineProperty(b8, "__esModule", {
                                value: true,
                            });
                            b8.Socket = undefined;
                            var bQ = b9(6);
                            var bd = b9(0);
                            var bK = b9(16);
                            var bu = b9(17);
                            var br = {
                                connect: 1,
                                connect_error: 1,
                                disconnect: 1,
                                disconnecting: 1,
                                newListener: 1,
                                removeListener: 1,
                            };
                            var bV = (function (bm) {
                                (function (bk, bq) {
                                    if (typeof bq != "function" && bq !== null) {
                                        throw new TypeError("Super expression must either be null or a function");
                                    }
                                    bk.prototype = Object.create(bq && bq.prototype, {
                                        constructor: {
                                            value: bk,
                                            writable: true,
                                            configurable: true,
                                        },
                                    });
                                    if (bq) {
                                        bj(bk, bq);
                                    }
                                })(bc, bm);
                                var bA;
                                var bo = bO(bc);
                                function bc(bk, bq, bW) {
                                    var bD;
                                    (function (bG, be) {
                                        if (!(bG instanceof be)) {
                                            throw new TypeError("Cannot call a class as a function");
                                        }
                                    })(this, bc);
                                    (bD = bo.call(this)).ids = 0;
                                    bD.acks = {};
                                    bD.receiveBuffer = [];
                                    bD.sendBuffer = [];
                                    bD.flags = {};
                                    bD.io = bk;
                                    bD.nsp = bq;
                                    bD.ids = 0;
                                    bD.acks = {};
                                    bD.receiveBuffer = [];
                                    bD.sendBuffer = [];
                                    bD.connected = false;
                                    bD.disconnected = true;
                                    bD.flags = {};
                                    if (bW && bW.auth) {
                                        bD.auth = bW.auth;
                                    }
                                    if (bD.io._autoConnect) {
                                        bD.open();
                                    }
                                    return bD;
                                }
                                if (
                                    (bA = [
                                        {
                                            key: "subEvents",
                                            value: function () {
                                                if (!this.subs) {
                                                    var bk = this.io;
                                                    this.subs = [
                                                        bK.on(bk, "open", bu(this, "onopen")),
                                                        bK.on(bk, "packet", bu(this, "onpacket")),
                                                        bK.on(bk, "close", bu(this, "onclose")),
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
                                                for (var bk = arguments.length, bq = Array(bk), bW = 0; bW < bk; bW++) {
                                                    bq[bW] = arguments[bW];
                                                }
                                                bq.unshift("message");
                                                this.emit.apply(this, bq);
                                                return this;
                                            },
                                        },
                                        {
                                            key: "emit",
                                            value: function (bk) {
                                                if (br.hasOwnProperty(bk)) {
                                                    throw Error('"' + bk + '" is a reserved event name');
                                                }
                                                for (var bq = arguments.length, bW = Array(bq > 1 ? bq - 1 : 0), bD = 1; bD < bq; bD++) {
                                                    bW[bD - 1] = arguments[bD];
                                                }
                                                bW.unshift(bk);
                                                var bG = {
                                                    type: bQ.PacketType.EVENT,
                                                    data: bW,
                                                    options: {},
                                                };
                                                bG.options.compress = this.flags.compress !== false;
                                                if (typeof bW[bW.length - 1] == "function") {
                                                    this.acks[this.ids] = bW.pop();
                                                    bG.id = this.ids++;
                                                }
                                                var be = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable;
                                                if (!(this.flags.volatile && (!be || !this.connected))) {
                                                    if (this.connected) {
                                                        this.packet(bG);
                                                    } else {
                                                        this.sendBuffer.push(bG);
                                                    }
                                                }
                                                this.flags = {};
                                                return this;
                                            },
                                        },
                                        {
                                            key: "packet",
                                            value: function (bk) {
                                                bk.nsp = this.nsp;
                                                this.io._packet(bk);
                                            },
                                        },
                                        {
                                            key: "onopen",
                                            value: function () {
                                                var bk = this;
                                                if (typeof this.auth == "function") {
                                                    this.auth(function (bq) {
                                                        bk.packet({
                                                            type: bQ.PacketType.CONNECT,
                                                            data: bq,
                                                        });
                                                    });
                                                } else {
                                                    this.packet({
                                                        type: bQ.PacketType.CONNECT,
                                                        data: this.auth,
                                                    });
                                                }
                                            },
                                        },
                                        {
                                            key: "onclose",
                                            value: function (bk) {
                                                this.connected = false;
                                                this.disconnected = true;
                                                delete this.id;
                                                bY(bZ(bc.prototype), "emit", this).call(this, "disconnect", bk);
                                            },
                                        },
                                        {
                                            key: "onpacket",
                                            value: function (bk) {
                                                if (bk.nsp === this.nsp) {
                                                    switch (bk.type) {
                                                        case bQ.PacketType.CONNECT:
                                                            var bq = bk.data.sid;
                                                            this.onconnect(bq);
                                                            break;
                                                        case bQ.PacketType.EVENT:
                                                        case bQ.PacketType.BINARY_EVENT:
                                                            this.onevent(bk);
                                                            break;
                                                        case bQ.PacketType.ACK:
                                                        case bQ.PacketType.BINARY_ACK:
                                                            this.onack(bk);
                                                            break;
                                                        case bQ.PacketType.DISCONNECT:
                                                            this.ondisconnect();
                                                            break;
                                                        case bQ.PacketType.CONNECT_ERROR:
                                                            var bW = Error(bk.data.message);
                                                            bW.data = bk.data.data;
                                                            bY(bZ(bc.prototype), "emit", this).call(this, "connect_error", bW);
                                                    }
                                                }
                                            },
                                        },
                                        {
                                            key: "onevent",
                                            value: function (bk) {
                                                var bq = bk.data || [];
                                                if (bk.id != null) {
                                                    bq.push(this.ack(bk.id));
                                                }
                                                if (this.connected) {
                                                    this.emitEvent(bq);
                                                } else {
                                                    this.receiveBuffer.push(bq);
                                                }
                                            },
                                        },
                                        {
                                            key: "emitEvent",
                                            value: function (bk) {
                                                if (this.W && this.W.length) {
                                                    var bq;
                                                    var bW = bb(this.W.slice());
                                                    try {
                                                        for (bW.s(); !(bq = bW.n()).done; ) {
                                                            bq.value.apply(this, bk);
                                                        }
                                                    } catch (bD) {
                                                        bW.e(bD);
                                                    } finally {
                                                        bW.f();
                                                    }
                                                }
                                                bY(bZ(bc.prototype), "emit", this).apply(this, bk);
                                            },
                                        },
                                        {
                                            key: "ack",
                                            value: function (bk) {
                                                var bq = this;
                                                var bW = false;
                                                return function () {
                                                    if (!bW) {
                                                        bW = true;
                                                        for (var bD = arguments.length, bG = Array(bD), be = 0; be < bD; be++) {
                                                            bG[be] = arguments[be];
                                                        }
                                                        bq.packet({
                                                            type: bQ.PacketType.ACK,
                                                            id: bk,
                                                            data: bG,
                                                        });
                                                    }
                                                };
                                            },
                                        },
                                        {
                                            key: "onack",
                                            value: function (bk) {
                                                var bq = this.acks[bk.id];
                                                if (typeof bq == "function") {
                                                    bq.apply(this, bk.data);
                                                    delete this.acks[bk.id];
                                                }
                                            },
                                        },
                                        {
                                            key: "onconnect",
                                            value: function (bk) {
                                                this.id = bk;
                                                this.connected = true;
                                                this.disconnected = false;
                                                bY(bZ(bc.prototype), "emit", this).call(this, "connect");
                                                this.emitBuffered();
                                            },
                                        },
                                        {
                                            key: "emitBuffered",
                                            value: function () {
                                                for (var bk = 0; bk < this.receiveBuffer.length; bk++) {
                                                    this.emitEvent(this.receiveBuffer[bk]);
                                                }
                                                this.receiveBuffer = [];
                                                for (var bq = 0; bq < this.sendBuffer.length; bq++) {
                                                    this.packet(this.sendBuffer[bq]);
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
                                                    for (var bk = 0; bk < this.subs.length; bk++) {
                                                        this.subs[bk].destroy();
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
                                                        type: bQ.PacketType.DISCONNECT,
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
                                            value: function (bk) {
                                                this.flags.compress = bk;
                                                return this;
                                            },
                                        },
                                        {
                                            key: "onAny",
                                            value: function (bk) {
                                                this.W = this.W || [];
                                                this.W.push(bk);
                                                return this;
                                            },
                                        },
                                        {
                                            key: "prependAny",
                                            value: function (bk) {
                                                this.W = this.W || [];
                                                this.W.unshift(bk);
                                                return this;
                                            },
                                        },
                                        {
                                            key: "offAny",
                                            value: function (bk) {
                                                if (!this.W) {
                                                    return this;
                                                }
                                                if (bk) {
                                                    for (var bq = this.W, bW = 0; bW < bq.length; bW++) {
                                                        if (bk === bq[bW]) {
                                                            bq.splice(bW, 1);
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
                                    (function (bk, bq) {
                                        for (var bW = 0; bW < bq.length; bW++) {
                                            var bD = bq[bW];
                                            bD.enumerable = bD.enumerable || false;
                                            bD.configurable = true;
                                            if ("value" in bD) {
                                                bD.writable = true;
                                            }
                                            Object.defineProperty(bk, bD.key, bD);
                                        }
                                    })(bc.prototype, bA);
                                }
                                return bc;
                            })(bd);
                            b8.Socket = bV;
                        },
                        function (b7, b8) {
                            function b9(bO) {
                                return (b9 =
                                    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                                        ? function (bx) {
                                              return typeof bx;
                                          }
                                        : function (bx) {
                                              if (bx && typeof Symbol == "function" && bx.constructor === Symbol && bx !== Symbol.prototype) {
                                                  return "symbol";
                                              } else {
                                                  return typeof bx;
                                              }
                                          })(bO);
                            }
                            Object.defineProperty(b8, "__esModule", {
                                value: true,
                            });
                            b8.hasBinary = b8.isBinary = undefined;
                            var bs = typeof ArrayBuffer == "function";
                            var bb = Object.prototype.toString;
                            var ba = typeof Blob == "function" || (typeof Blob != "undefined" && bb.call(Blob) === "[object BlobConstructor]");
                            var bY = typeof File == "function" || (typeof File != "undefined" && bb.call(File) === "[object FileConstructor]");
                            function bj(bO) {
                                return (
                                    (bs &&
                                        (bO instanceof ArrayBuffer ||
                                            (function (bx) {
                                                if (typeof ArrayBuffer.isView == "function") {
                                                    return ArrayBuffer.isView(bx);
                                                } else {
                                                    return bx.buffer instanceof ArrayBuffer;
                                                }
                                            })(bO))) ||
                                    (ba && bO instanceof Blob) ||
                                    (bY && bO instanceof File)
                                );
                            }
                            b8.isBinary = bj;
                            b8.hasBinary = function bO(bx, bZ) {
                                if (!bx || b9(bx) !== "object") {
                                    return false;
                                }
                                if (Array.isArray(bx)) {
                                    for (var bQ = 0, bd = bx.length; bQ < bd; bQ++) {
                                        if (bO(bx[bQ])) {
                                            return true;
                                        }
                                    }
                                    return false;
                                }
                                if (bj(bx)) {
                                    return true;
                                }
                                if (bx.toJSON && typeof bx.toJSON == "function" && arguments.length === 1) {
                                    return bO(bx.toJSON(), true);
                                }
                                for (var bK in bx) {
                                    if (Object.prototype.hasOwnProperty.call(bx, bK) && bO(bx[bK])) {
                                        return true;
                                    }
                                }
                                return false;
                            };
                        },
                        function (b7, b8) {
                            Object.defineProperty(b8, "__esModule", {
                                value: true,
                            });
                            b8.on = undefined;
                            b8.on = function (b9, bs, bb) {
                                b9.on(bs, bb);
                                return {
                                    destroy: function () {
                                        b9.removeListener(bs, bb);
                                    },
                                };
                            };
                        },
                        function (b7) {
                            var b8 = [].slice;
                            b7.exports = function (b9, bs) {
                                if (typeof bs == "string") {
                                    bs = b9[bs];
                                }
                                if (typeof bs != "function") {
                                    throw Error("bind() requires a function");
                                }
                                var bb = b8.call(arguments, 2);
                                return function () {
                                    return bs.apply(b9, bb.concat(b8.call(arguments)));
                                };
                            };
                        },
                        function (b7, b8, b9) {
                            function bs(bQ) {
                                return (bs =
                                    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                                        ? function (bd) {
                                              return typeof bd;
                                          }
                                        : function (bd) {
                                              if (bd && typeof Symbol == "function" && bd.constructor === Symbol && bd !== Symbol.prototype) {
                                                  return "symbol";
                                              } else {
                                                  return typeof bd;
                                              }
                                          })(bQ);
                            }
                            Object.defineProperty(b8, "__esModule", {
                                value: true,
                            });
                            b8.Socket = b8.io = b8.Manager = b8.protocol = undefined;
                            var bb = b9(19);
                            var ba = b9(8);
                            var bY = b9(14);
                            Object.defineProperty(b8, "Socket", {
                                enumerable: true,
                                get: function () {
                                    return bY.Socket;
                                },
                            });
                            b7.exports = b8 = bO;
                            var bj = (b8.managers = {});
                            function bO(bQ, bd) {
                                if (bs(bQ) === "object") {
                                    bd = bQ;
                                    bQ = undefined;
                                }
                                bd = bd || {};
                                var bK;
                                var bu = bb.url(bQ);
                                var br = bu.source;
                                var bV = bu.id;
                                var bm = bu.path;
                                var bA = bj[bV] && bm in bj[bV].nsps;
                                if (bd.forceNew || bd["force new connection"] || bd.multiplex === false || bA) {
                                    bK = new ba.Manager(br, bd);
                                } else {
                                    if (!bj[bV]) {
                                        bj[bV] = new ba.Manager(br, bd);
                                    }
                                    bK = bj[bV];
                                }
                                if (bu.query && !bd.query) {
                                    bd.query = bu.query;
                                }
                                return bK.socket(bu.path, bd);
                            }
                            b8.io = bO;
                            var bx = b9(6);
                            Object.defineProperty(b8, "protocol", {
                                enumerable: true,
                                get: function () {
                                    return bx.protocol;
                                },
                            });
                            b8.connect = bO;
                            var bZ = b9(8);
                            Object.defineProperty(b8, "Manager", {
                                enumerable: true,
                                get: function () {
                                    return bZ.Manager;
                                },
                            });
                        },
                        function (b7, b8, b9) {
                            Object.defineProperty(b8, "__esModule", {
                                value: true,
                            });
                            b8.url = undefined;
                            var bs = b9(7);
                            b8.url = function (bb, ba) {
                                var bY = bb;
                                ba = ba || (typeof location != "undefined" && location);
                                if (bb == null) {
                                    bb = ba.protocol + "//" + ba.host;
                                }
                                if (typeof bb == "string") {
                                    if (bb.charAt(0) === "/") {
                                        bb = bb.charAt(1) === "/" ? ba.protocol + bb : ba.host + bb;
                                    }
                                    if (!/^(https?|wss?):\/\//.test(bb)) {
                                        bb = ba !== undefined ? ba.protocol + "//" + bb : "https://" + bb;
                                    }
                                    bY = bs(bb);
                                }
                                if (!bY.port) {
                                    if (/^(http|ws)$/.test(bY.protocol)) {
                                        bY.port = "80";
                                    } else if (/^(http|ws)s$/.test(bY.protocol)) {
                                        bY.port = "443";
                                    }
                                }
                                bY.path = bY.path || "/";
                                var bj = bY.host.indexOf(":") !== -1 ? "[" + bY.host + "]" : bY.host;
                                bY.id = bY.protocol + "://" + bj + ":" + bY.port;
                                bY.href = bY.protocol + "://" + bj + (ba && ba.port === bY.port ? "" : ":" + bY.port);
                                return bY;
                            };
                        },
                        function (b7, b8, b9) {
                            var bs = b9(21);
                            b7.exports = function (bb, ba) {
                                return new bs(bb, ba);
                            };
                            b7.exports.Socket = bs;
                            b7.exports.protocol = bs.protocol;
                            b7.exports.Transport = b9(4);
                            b7.exports.transports = b9(9);
                            b7.exports.parser = b9(1);
                        },
                        function (b7, b8, b9) {
                            function bs() {
                                return (bs =
                                    Object.assign ||
                                    function (bV) {
                                        for (var bm = 1; bm < arguments.length; bm++) {
                                            var bA = arguments[bm];
                                            for (var bo in bA) {
                                                if (Object.prototype.hasOwnProperty.call(bA, bo)) {
                                                    bV[bo] = bA[bo];
                                                }
                                            }
                                        }
                                        return bV;
                                    }).apply(this, arguments);
                            }
                            function bb(bV) {
                                return (bb =
                                    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                                        ? function (bm) {
                                              return typeof bm;
                                          }
                                        : function (bm) {
                                              if (bm && typeof Symbol == "function" && bm.constructor === Symbol && bm !== Symbol.prototype) {
                                                  return "symbol";
                                              } else {
                                                  return typeof bm;
                                              }
                                          })(bV);
                            }
                            function ba(bV, bm) {
                                if (!(bV instanceof bm)) {
                                    throw new TypeError("Cannot call a class as a function");
                                }
                            }
                            function bY(bV, bm) {
                                return (bY =
                                    Object.setPrototypeOf ||
                                    function (bA, bo) {
                                        bA.__proto__ = bo;
                                        return bA;
                                    })(bV, bm);
                            }
                            function bj(bV) {
                                var bm = (function () {
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
                                    } catch (bA) {
                                        return false;
                                    }
                                })();
                                return function () {
                                    var bA;
                                    var bo = bx(bV);
                                    if (bm) {
                                        var bc = bx(this).constructor;
                                        bA = Reflect.construct(bo, arguments, bc);
                                    } else {
                                        bA = bo.apply(this, arguments);
                                    }
                                    return bO(this, bA);
                                };
                            }
                            function bO(bV, bm) {
                                if (!bm || (bb(bm) !== "object" && typeof bm != "function")) {
                                    return (function (bA) {
                                        if (bA === undefined) {
                                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        }
                                        return bA;
                                    })(bV);
                                } else {
                                    return bm;
                                }
                            }
                            function bx(bV) {
                                return (bx = Object.setPrototypeOf
                                    ? Object.getPrototypeOf
                                    : function (bm) {
                                          return bm.__proto__ || Object.getPrototypeOf(bm);
                                      })(bV);
                            }
                            var bZ = b9(9);
                            var bQ = b9(0);
                            var bd = b9(1);
                            var bK = b9(7);
                            var bu = b9(5);
                            var br = (function (bV) {
                                (function (bc, bk) {
                                    if (typeof bk != "function" && bk !== null) {
                                        throw new TypeError("Super expression must either be null or a function");
                                    }
                                    bc.prototype = Object.create(bk && bk.prototype, {
                                        constructor: {
                                            value: bc,
                                            writable: true,
                                            configurable: true,
                                        },
                                    });
                                    if (bk) {
                                        bY(bc, bk);
                                    }
                                })(bo, bV);
                                var bm;
                                var bA = bj(bo);
                                function bo(bc) {
                                    var bk;
                                    var bq = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                                    ba(this, bo);
                                    bk = bA.call(this);
                                    if (bc && bb(bc) === "object") {
                                        bq = bc;
                                        bc = null;
                                    }
                                    if (bc) {
                                        bc = bK(bc);
                                        bq.hostname = bc.host;
                                        bq.secure = bc.protocol === "https" || bc.protocol === "wss";
                                        bq.port = bc.port;
                                        if (bc.query) {
                                            bq.query = bc.query;
                                        }
                                    } else if (bq.host) {
                                        bq.hostname = bK(bq.host).host;
                                    }
                                    bk.secure = bq.secure != null ? bq.secure : typeof location != "undefined" && location.protocol === "https:";
                                    if (bq.hostname && !bq.port) {
                                        bq.port = bk.secure ? "443" : "80";
                                    }
                                    bk.hostname = bq.hostname || (typeof location != "undefined" ? location.hostname : "localhost");
                                    bk.port = bq.port || (typeof location != "undefined" && location.port ? location.port : bk.secure ? 443 : 80);
                                    bk.transports = bq.transports || ["polling", "websocket"];
                                    bk.readyState = "";
                                    bk.writeBuffer = [];
                                    bk.prevBufferLen = 0;
                                    bk.opts = bs(
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
                                        bq
                                    );
                                    bk.opts.path = bk.opts.path.replace(/\/$/, "") + "/";
                                    if (typeof bk.opts.query == "string") {
                                        bk.opts.query = bu.decode(bk.opts.query);
                                    }
                                    bk.id = null;
                                    bk.upgrades = null;
                                    bk.pingInterval = null;
                                    bk.pingTimeout = null;
                                    bk.pingTimeoutTimer = null;
                                    bk.open();
                                    return bk;
                                }
                                if (
                                    (bm = [
                                        {
                                            key: "createTransport",
                                            value: function (bc) {
                                                var bk = (function (bW) {
                                                    var bD = {};
                                                    for (var bG in bW) {
                                                        if (bW.hasOwnProperty(bG)) {
                                                            bD[bG] = bW[bG];
                                                        }
                                                    }
                                                    return bD;
                                                })(this.opts.query);
                                                bk.EIO = bd.protocol;
                                                bk.transport = bc;
                                                if (this.id) {
                                                    bk.sid = this.id;
                                                }
                                                var bq = bs({}, this.opts.transportOptions[bc], this.opts, {
                                                    query: bk,
                                                    socket: this,
                                                    hostname: this.hostname,
                                                    secure: this.secure,
                                                    port: this.port,
                                                });
                                                return new bZ[bc](bq);
                                            },
                                        },
                                        {
                                            key: "open",
                                            value: function () {
                                                var bc;
                                                if (this.opts.rememberUpgrade && bo.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) {
                                                    bc = "websocket";
                                                } else {
                                                    if (this.transports.length === 0) {
                                                        var bk = this;
                                                        // TOLOOK
                                                        setTimeout(function () {
                                                            bk.emit("error", "No transports available");
                                                        }, 0);
                                                        return;
                                                    }
                                                    bc = this.transports[0];
                                                }
                                                this.readyState = "opening";
                                                try {
                                                    bc = this.createTransport(bc);
                                                } catch (bq) {
                                                    this.transports.shift();
                                                    this.open();
                                                    return;
                                                }
                                                bc.open();
                                                this.setTransport(bc);
                                            },
                                        },
                                        {
                                            key: "setTransport",
                                            value: function (bc) {
                                                var bk = this;
                                                if (this.transport) {
                                                    this.transport.removeAllListeners();
                                                }
                                                this.transport = bc;
                                                bc.on("drain", function () {
                                                    bk.onDrain();
                                                })
                                                    .on("packet", function (bq) {
                                                        bk.onPacket(bq);
                                                    })
                                                    .on("error", function (bq) {
                                                        bk.onError(bq);
                                                    })
                                                    .on("close", function () {
                                                        bk.onClose("transport close");
                                                    });
                                            },
                                        },
                                        {
                                            key: "probe",
                                            value: function (bc) {
                                                var bk = this.createTransport(bc, {
                                                    probe: 1,
                                                });
                                                var bq = false;
                                                var bW = this;
                                                function bD() {
                                                    if (bW.onlyBinaryUpgrades) {
                                                        var bB = !this.supportsBinary && bW.transport.supportsBinary;
                                                        bq = bq || bB;
                                                    }
                                                    if (!bq) {
                                                        bk.send([
                                                            {
                                                                type: "ping",
                                                                data: "probe",
                                                            },
                                                        ]);
                                                        bk.once("packet", function (bU) {
                                                            if (!bq) {
                                                                if (bU.type === "pong" && bU.data === "probe") {
                                                                    bW.upgrading = true;
                                                                    bW.emit("upgrading", bk);
                                                                    if (!bk) {
                                                                        return;
                                                                    }
                                                                    bo.priorWebsocketSuccess = bk.name === "websocket";
                                                                    bW.transport.pause(function () {
                                                                        if (!bq) {
                                                                            if (bW.readyState !== "closed") {
                                                                                bz();
                                                                                bW.setTransport(bk);
                                                                                bk.send([
                                                                                    {
                                                                                        type: "upgrade",
                                                                                    },
                                                                                ]);
                                                                                bW.emit("upgrade", bk);
                                                                                bk = null;
                                                                                bW.upgrading = false;
                                                                                bW.flush();
                                                                            }
                                                                        }
                                                                    });
                                                                } else {
                                                                    var bP = Error("probe error");
                                                                    bP.transport = bk.name;
                                                                    bW.emit("upgradeError", bP);
                                                                }
                                                            }
                                                        });
                                                    }
                                                }
                                                function bG() {
                                                    if (!bq) {
                                                        bq = true;
                                                        bz();
                                                        bk.close();
                                                        bk = null;
                                                    }
                                                }
                                                function be(bB) {
                                                    var bU = Error("probe error: " + bB);
                                                    bU.transport = bk.name;
                                                    bG();
                                                    bW.emit("upgradeError", bU);
                                                }
                                                function by() {
                                                    be("transport closed");
                                                }
                                                function bR() {
                                                    be("socket closed");
                                                }
                                                function bT(bB) {
                                                    if (bk && bB.name !== bk.name) {
                                                        bG();
                                                    }
                                                }
                                                function bz() {
                                                    bk.removeListener("open", bD);
                                                    bk.removeListener("error", be);
                                                    bk.removeListener("close", by);
                                                    bW.removeListener("close", bR);
                                                    bW.removeListener("upgrading", bT);
                                                }
                                                bo.priorWebsocketSuccess = false;
                                                bk.once("open", bD);
                                                bk.once("error", be);
                                                bk.once("close", by);
                                                this.once("close", bR);
                                                this.once("upgrading", bT);
                                                bk.open();
                                            },
                                        },
                                        {
                                            key: "onOpen",
                                            value: function () {
                                                this.readyState = "open";
                                                bo.priorWebsocketSuccess = this.transport.name === "websocket";
                                                this.emit("open");
                                                this.flush();
                                                if (this.readyState === "open" && this.opts.upgrade && this.transport.pause) {
                                                    for (var bc = 0, bk = this.upgrades.length; bc < bk; bc++) {
                                                        this.probe(this.upgrades[bc]);
                                                    }
                                                }
                                            },
                                        },
                                        {
                                            key: "onPacket",
                                            value: function (bc) {
                                                if (this.readyState === "opening" || this.readyState === "open" || this.readyState === "closing") {
                                                    this.emit("packet", bc);
                                                    this.emit("heartbeat");
                                                    switch (bc.type) {
                                                        case "open":
                                                            this.onHandshake(JSON.parse(bc.data));
                                                            break;
                                                        case "ping":
                                                            this.resetPingTimeout();
                                                            this.sendPacket("pong");
                                                            this.emit("pong");
                                                            break;
                                                        case "error":
                                                            var bk = Error("server error");
                                                            bk.code = bc.data;
                                                            this.onError(bk);
                                                            break;
                                                        case "message":
                                                            this.emit("data", bc.data);
                                                            this.emit("message", bc.data);
                                                    }
                                                }
                                            },
                                        },
                                        {
                                            key: "onHandshake",
                                            value: function (bc) {
                                                this.emit("handshake", bc);
                                                this.id = bc.sid;
                                                this.transport.query.sid = bc.sid;
                                                this.upgrades = this.filterUpgrades(bc.upgrades);
                                                this.pingInterval = bc.pingInterval;
                                                this.pingTimeout = bc.pingTimeout;
                                                this.onOpen();
                                                if (this.readyState !== "closed") {
                                                    this.resetPingTimeout();
                                                }
                                            },
                                        },
                                        {
                                            key: "resetPingTimeout",
                                            value: function () {
                                                var bc = this;
                                                clearTimeout(this.pingTimeoutTimer);
                                                this.pingTimeoutTimer = // TOLOOK
                                                    setTimeout(function () {
                                                        bc.onClose("ping timeout");
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
                                            value: function (bc, bk, bq) {
                                                this.sendPacket("message", bc, bk, bq);
                                                return this;
                                            },
                                        },
                                        {
                                            key: "send",
                                            value: function (bc, bk, bq) {
                                                this.sendPacket("message", bc, bk, bq);
                                                return this;
                                            },
                                        },
                                        {
                                            key: "sendPacket",
                                            value: function (bc, bk, bq, bW) {
                                                if (typeof bk == "function") {
                                                    bW = bk;
                                                    bk = undefined;
                                                }
                                                if (typeof bq == "function") {
                                                    bW = bq;
                                                    bq = null;
                                                }
                                                if (this.readyState !== "closing" && this.readyState !== "closed") {
                                                    (bq = bq || {}).compress = bq.compress !== false;
                                                    var bD = {
                                                        type: bc,
                                                        data: bk,
                                                        options: bq,
                                                    };
                                                    this.emit("packetCreate", bD);
                                                    this.writeBuffer.push(bD);
                                                    if (bW) {
                                                        this.once("flush", bW);
                                                    }
                                                    this.flush();
                                                }
                                            },
                                        },
                                        {
                                            key: "close",
                                            value: function () {
                                                var bc = this;
                                                function bk() {
                                                    bc.onClose("forced close");
                                                    bc.transport.close();
                                                }
                                                function bq() {
                                                    bc.removeListener("upgrade", bq);
                                                    bc.removeListener("upgradeError", bq);
                                                    bk();
                                                }
                                                function bW() {
                                                    bc.once("upgrade", bq);
                                                    bc.once("upgradeError", bq);
                                                }
                                                if (!(this.readyState !== "opening" && this.readyState !== "open")) {
                                                    this.readyState = "closing";
                                                    if (this.writeBuffer.length) {
                                                        this.once("drain", function () {
                                                            if (this.upgrading) {
                                                                bW();
                                                            } else {
                                                                bk();
                                                            }
                                                        });
                                                    } else if (this.upgrading) {
                                                        bW();
                                                    } else {
                                                        bk();
                                                    }
                                                }
                                                return this;
                                            },
                                        },
                                        {
                                            key: "onError",
                                            value: function (bc) {
                                                bo.priorWebsocketSuccess = false;
                                                this.emit("error", bc);
                                                this.onClose("transport error", bc);
                                            },
                                        },
                                        {
                                            key: "onClose",
                                            value: function (bc, bk) {
                                                if (!(this.readyState !== "opening" && this.readyState !== "open" && this.readyState !== "closing")) {
                                                    clearTimeout(this.pingIntervalTimer);
                                                    clearTimeout(this.pingTimeoutTimer);
                                                    this.transport.removeAllListeners("close");
                                                    this.transport.close();
                                                    this.transport.removeAllListeners();
                                                    this.readyState = "closed";
                                                    this.id = null;
                                                    this.emit("close", bc, bk);
                                                    this.writeBuffer = [];
                                                    this.prevBufferLen = 0;
                                                }
                                            },
                                        },
                                        {
                                            key: "filterUpgrades",
                                            value: function (bc) {
                                                for (var bk = [], bq = 0, bW = bc.length; bq < bW; bq++) {
                                                    if (~this.transports.indexOf(bc[bq])) {
                                                        bk.push(bc[bq]);
                                                    }
                                                }
                                                return bk;
                                            },
                                        },
                                    ])
                                ) {
                                    (function (bc, bk) {
                                        for (var bq = 0; bq < bk.length; bq++) {
                                            var bW = bk[bq];
                                            bW.enumerable = bW.enumerable || false;
                                            bW.configurable = true;
                                            if ("value" in bW) {
                                                bW.writable = true;
                                            }
                                            Object.defineProperty(bc, bW.key, bW);
                                        }
                                    })(bo.prototype, bm);
                                }
                                return bo;
                            })(bQ);
                            br.priorWebsocketSuccess = false;
                            br.protocol = bd.protocol;
                            b7.exports = br;
                        },
                        function (b7) {
                            try {
                                b7.exports = typeof XMLHttpRequest != "undefined" && "withCredentials" in new XMLHttpRequest();
                            } catch (b8) {
                                b7.exports = false;
                            }
                        },
                        function (b7, b8, b9) {
                            function bs(bq) {
                                return (bs =
                                    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                                        ? function (bW) {
                                              return typeof bW;
                                          }
                                        : function (bW) {
                                              if (bW && typeof Symbol == "function" && bW.constructor === Symbol && bW !== Symbol.prototype) {
                                                  return "symbol";
                                              } else {
                                                  return typeof bW;
                                              }
                                          })(bq);
                            }
                            function bb() {
                                return (bb =
                                    Object.assign ||
                                    function (bq) {
                                        for (var bW = 1; bW < arguments.length; bW++) {
                                            var bD = arguments[bW];
                                            for (var bG in bD) {
                                                if (Object.prototype.hasOwnProperty.call(bD, bG)) {
                                                    bq[bG] = bD[bG];
                                                }
                                            }
                                        }
                                        return bq;
                                    }).apply(this, arguments);
                            }
                            function ba(bq, bW) {
                                if (!(bq instanceof bW)) {
                                    throw new TypeError("Cannot call a class as a function");
                                }
                            }
                            function bY(bq, bW) {
                                if (bW) {
                                    (function (bD, bG) {
                                        for (var be = 0; be < bG.length; be++) {
                                            var by = bG[be];
                                            by.enumerable = by.enumerable || false;
                                            by.configurable = true;
                                            if ("value" in by) {
                                                by.writable = true;
                                            }
                                            Object.defineProperty(bD, by.key, by);
                                        }
                                    })(bq.prototype, bW);
                                }
                                return bq;
                            }
                            function bj(bq, bW) {
                                if (typeof bW != "function" && bW !== null) {
                                    throw new TypeError("Super expression must either be null or a function");
                                }
                                bq.prototype = Object.create(bW && bW.prototype, {
                                    constructor: {
                                        value: bq,
                                        writable: true,
                                        configurable: true,
                                    },
                                });
                                if (bW) {
                                    bO(bq, bW);
                                }
                            }
                            function bO(bq, bW) {
                                return (bO =
                                    Object.setPrototypeOf ||
                                    function (bD, bG) {
                                        bD.__proto__ = bG;
                                        return bD;
                                    })(bq, bW);
                            }
                            function bx(bq) {
                                var bW = (function () {
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
                                    } catch (bD) {
                                        return false;
                                    }
                                })();
                                return function () {
                                    var bD;
                                    var bG = bQ(bq);
                                    if (bW) {
                                        var be = bQ(this).constructor;
                                        bD = Reflect.construct(bG, arguments, be);
                                    } else {
                                        bD = bG.apply(this, arguments);
                                    }
                                    return bZ(this, bD);
                                };
                            }
                            function bZ(bq, bW) {
                                if (!bW || (bs(bW) !== "object" && typeof bW != "function")) {
                                    return (function (bD) {
                                        if (bD === undefined) {
                                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        }
                                        return bD;
                                    })(bq);
                                } else {
                                    return bW;
                                }
                            }
                            function bQ(bq) {
                                return (bQ = Object.setPrototypeOf
                                    ? Object.getPrototypeOf
                                    : function (bW) {
                                          return bW.__proto__ || Object.getPrototypeOf(bW);
                                      })(bq);
                            }
                            var bd = b9(3);
                            var bK = b9(10);
                            var bu = b9(0);
                            var br = b9(13).pick;
                            var bV = b9(2);
                            function bm() {}
                            var bA =
                                new (b9(3))({
                                    xdomain: false,
                                }).responseType != null;
                            var bo = (function (bq) {
                                bj(bD, bq);
                                var bW = bx(bD);
                                function bD(bG) {
                                    var be;
                                    ba(this, bD);
                                    be = bW.call(this, bG);
                                    if (typeof location != "undefined") {
                                        var by = location.protocol === "https:";
                                        var bR = location.port;
                                        if (!bR) {
                                            bR = by ? 443 : 80;
                                        }
                                        be.xd = (typeof location != "undefined" && bG.hostname !== location.hostname) || bR !== bG.port;
                                        be.xs = bG.secure !== by;
                                    }
                                    var bT = bG && bG.forceBase64;
                                    be.supportsBinary = bA && !bT;
                                    return be;
                                }
                                bY(bD, [
                                    {
                                        key: "request",
                                        value: function () {
                                            var bG = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                                            bb(
                                                bG,
                                                {
                                                    xd: this.xd,
                                                    xs: this.xs,
                                                },
                                                this.opts
                                            );
                                            return new bc(this.uri(), bG);
                                        },
                                    },
                                    {
                                        key: "doWrite",
                                        value: function (bG, be) {
                                            var by = this.request({
                                                method: "POST",
                                                data: bG,
                                            });
                                            var bR = this;
                                            by.on("success", be);
                                            by.on("error", function (bT) {
                                                bR.onError("xhr post error", bT);
                                            });
                                        },
                                    },
                                    {
                                        key: "doPoll",
                                        value: function () {
                                            var bG = this.request();
                                            var be = this;
                                            bG.on("data", function (by) {
                                                be.onData(by);
                                            });
                                            bG.on("error", function (by) {
                                                be.onError("xhr poll error", by);
                                            });
                                            this.pollXhr = bG;
                                        },
                                    },
                                ]);
                                return bD;
                            })(bK);
                            var bc = (function (bq) {
                                bj(bD, bq);
                                var bW = bx(bD);
                                function bD(bG, be) {
                                    var by;
                                    ba(this, bD);
                                    (by = bW.call(this)).opts = be;
                                    by.method = be.method || "GET";
                                    by.uri = bG;
                                    by.async = be.async !== false;
                                    by.data = be.data !== undefined ? be.data : null;
                                    by.create();
                                    return by;
                                }
                                bY(bD, [
                                    {
                                        key: "create",
                                        value: function () {
                                            var bG = br(
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
                                            bG.xdomain = !!this.opts.xd;
                                            bG.xscheme = !!this.opts.xs;
                                            var be = (this.xhr = new bd(bG));
                                            var by = this;
                                            try {
                                                be.open(this.method, this.uri, this.async);
                                                try {
                                                    if (this.opts.extraHeaders) {
                                                        if (be.setDisableHeaderCheck) {
                                                            be.setDisableHeaderCheck(true);
                                                        }
                                                        for (var bR in this.opts.extraHeaders) {
                                                            if (this.opts.extraHeaders.hasOwnProperty(bR)) {
                                                                be.setRequestHeader(bR, this.opts.extraHeaders[bR]);
                                                            }
                                                        }
                                                    }
                                                } catch (bT) {}
                                                if (this.method === "POST") {
                                                    try {
                                                        be.setRequestHeader("Content-type", "text/plain;charset=UTF-8");
                                                    } catch (bz) {}
                                                }
                                                try {
                                                    be.setRequestHeader("Accept", "*/*");
                                                } catch (bB) {}
                                                if ("withCredentials" in be) {
                                                    be.withCredentials = this.opts.withCredentials;
                                                }
                                                if (this.opts.requestTimeout) {
                                                    be.timeout = this.opts.requestTimeout;
                                                }
                                                if (this.hasXDR()) {
                                                    be.onload = function () {
                                                        by.onLoad();
                                                    };
                                                    be.onerror = function () {
                                                        by.onError(be.responseText);
                                                    };
                                                } else {
                                                    be.onreadystatechange = function () {
                                                        if (be.readyState === 4) {
                                                            if (be.status === 200 || be.status === 1223) {
                                                                by.onLoad();
                                                            } else {
                                                                // TOLOOK
                                                                setTimeout(function () {
                                                                    by.onError(typeof be.status == "number" ? be.status : 0);
                                                                }, 0);
                                                            }
                                                        }
                                                    };
                                                }
                                                be.send(this.data);
                                            } catch (bU) {
                                                // TOLOOK
                                                setTimeout(function () {
                                                    by.onError(bU);
                                                }, 0);
                                                return;
                                            }
                                            if (typeof document != "undefined") {
                                                this.index = bD.requestsCount++;
                                                bD.requests[this.index] = this;
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
                                        value: function (bG) {
                                            this.emit("data", bG);
                                            this.onSuccess();
                                        },
                                    },
                                    {
                                        key: "onError",
                                        value: function (bG) {
                                            this.emit("error", bG);
                                            this.cleanup(true);
                                        },
                                    },
                                    {
                                        key: "cleanup",
                                        value: function (bG) {
                                            if (this.xhr !== undefined && this.xhr !== null) {
                                                if (this.hasXDR()) {
                                                    this.xhr.onload = this.xhr.onerror = bm;
                                                } else {
                                                    this.xhr.onreadystatechange = bm;
                                                }
                                                if (bG) {
                                                    try {
                                                        this.xhr.abort();
                                                    } catch (be) {}
                                                }
                                                if (typeof document != "undefined") {
                                                    delete bD.requests[this.index];
                                                }
                                                this.xhr = null;
                                            }
                                        },
                                    },
                                    {
                                        key: "onLoad",
                                        value: function () {
                                            var bG = this.xhr.responseText;
                                            if (bG !== null) {
                                                this.onData(bG);
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
                                return bD;
                            })(bu);
                            function bk() {
                                for (var bq in bc.requests) {
                                    if (bc.requests.hasOwnProperty(bq)) {
                                        bc.requests[bq].abort();
                                    }
                                }
                            }
                            bc.requestsCount = 0;
                            bc.requests = {};
                            if (typeof document != "undefined") {
                                if (typeof attachEvent == "function") {
                                    attachEvent("onunload", bk);
                                } else if (typeof addEventListener == "function") {
                                    addEventListener("onpagehide" in bV ? "pagehide" : "unload", bk, false);
                                }
                            }
                            b7.exports = bo;
                            b7.exports.Request = bc;
                        },
                        function (b7, b8, b9) {
                            var bs = b9(11).PACKET_TYPES;
                            var bb =
                                typeof Blob == "function" ||
                                (typeof Blob != "undefined" && Object.prototype.toString.call(Blob) === "[object BlobConstructor]");
                            var ba = typeof ArrayBuffer == "function";
                            function bY(bj, bO) {
                                var bx = new FileReader();
                                bx.onload = function () {
                                    var bZ = bx.result.split(",")[1];
                                    bO("b" + bZ);
                                };
                                return bx.readAsDataURL(bj);
                            }
                            b7.exports = function (bj, bO, bx) {
                                var bZ;
                                var bQ = bj.type;
                                var bd = bj.data;
                                if (bb && bd instanceof Blob) {
                                    if (bO) {
                                        return bx(bd);
                                    } else {
                                        return bY(bd, bx);
                                    }
                                } else if (
                                    ba &&
                                    (bd instanceof ArrayBuffer ||
                                        ((bZ = bd), typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(bZ) : bZ && bZ.buffer instanceof ArrayBuffer))
                                ) {
                                    if (bO) {
                                        return bx(bd instanceof ArrayBuffer ? bd : bd.buffer);
                                    } else {
                                        return bY(new Blob([bd]), bx);
                                    }
                                } else {
                                    return bx(bs[bQ] + (bd || ""));
                                }
                            };
                        },
                        function (b7, b8, b9) {
                            var bs;
                            var bb = b9(11);
                            var ba = bb.PACKET_TYPES_REVERSE;
                            var bY = bb.ERROR_PACKET;
                            if (typeof ArrayBuffer == "function") {
                                bs = b9(26);
                            }
                            function bj(bx, bZ) {
                                if (bs) {
                                    var bQ = bs.decode(bx);
                                    return bO(bQ, bZ);
                                }
                                return {
                                    base64: true,
                                    data: bx,
                                };
                            }
                            function bO(bx, bZ) {
                                if (bZ === "blob" && bx instanceof ArrayBuffer) {
                                    return new Blob([bx]);
                                } else {
                                    return bx;
                                }
                            }
                            b7.exports = function (bx, bZ) {
                                if (typeof bx != "string") {
                                    return {
                                        type: "message",
                                        data: bO(bx, bZ),
                                    };
                                }
                                var bQ = bx.charAt(0);
                                if (bQ === "b") {
                                    return {
                                        type: "message",
                                        data: bj(bx.substring(1), bZ),
                                    };
                                } else if (ba[bQ]) {
                                    if (bx.length > 1) {
                                        return {
                                            type: ba[bQ],
                                            data: bx.substring(1),
                                        };
                                    } else {
                                        return {
                                            type: ba[bQ],
                                        };
                                    }
                                } else {
                                    return bY;
                                }
                            };
                        },
                        function (b7, b8) {
                            (function () {
                                for (
                                    var b9 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bs = new Uint8Array(256), bb = 0;
                                    bb < 64;
                                    bb++
                                ) {
                                    bs[b9.charCodeAt(bb)] = bb;
                                }
                                b8.encode = function (ba) {
                                    var bY;
                                    var bj = new Uint8Array(ba);
                                    var bO = bj.length;
                                    var bx = "";
                                    for (bY = 0; bY < bO; bY += 3) {
                                        bx += b9[bj[bY] >> 2];
                                        bx += b9[((bj[bY] & 3) << 4) | (bj[bY + 1] >> 4)];
                                        bx += b9[((bj[bY + 1] & 15) << 2) | (bj[bY + 2] >> 6)];
                                        bx += b9[bj[bY + 2] & 63];
                                    }
                                    if (bO % 3 == 2) {
                                        bx = bx.substring(0, bx.length - 1) + "=";
                                    } else if (bO % 3 == 1) {
                                        bx = bx.substring(0, bx.length - 2) + "==";
                                    }
                                    return bx;
                                };
                                b8.decode = function (ba) {
                                    var bY;
                                    var bj;
                                    var bO;
                                    var bx;
                                    var bZ;
                                    var bQ = ba.length * 0.75;
                                    var bd = ba.length;
                                    var bK = 0;
                                    if (ba[ba.length - 1] === "=") {
                                        bQ--;
                                        if (ba[ba.length - 2] === "=") {
                                            bQ--;
                                        }
                                    }
                                    var bu = new ArrayBuffer(bQ);
                                    var br = new Uint8Array(bu);
                                    for (bY = 0; bY < bd; bY += 4) {
                                        bj = bs[ba.charCodeAt(bY)];
                                        bO = bs[ba.charCodeAt(bY + 1)];
                                        bx = bs[ba.charCodeAt(bY + 2)];
                                        bZ = bs[ba.charCodeAt(bY + 3)];
                                        br[bK++] = (bj << 2) | (bO >> 4);
                                        br[bK++] = ((bO & 15) << 4) | (bx >> 2);
                                        br[bK++] = ((bx & 3) << 6) | (bZ & 63);
                                    }
                                    return bu;
                                };
                            })();
                        },
                        function (b7, b8, b9) {
                            function bs(bm) {
                                return (bs =
                                    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                                        ? function (bA) {
                                              return typeof bA;
                                          }
                                        : function (bA) {
                                              if (bA && typeof Symbol == "function" && bA.constructor === Symbol && bA !== Symbol.prototype) {
                                                  return "symbol";
                                              } else {
                                                  return typeof bA;
                                              }
                                          })(bm);
                            }
                            function bb(bm, bA, bo) {
                                return (bb =
                                    typeof Reflect != "undefined" && Reflect.get
                                        ? Reflect.get
                                        : function (bc, bk, bq) {
                                              var bW = (function (bG, be) {
                                                  for (; !Object.prototype.hasOwnProperty.call(bG, be) && (bG = bx(bG)) !== null; );
                                                  return bG;
                                              })(bc, bk);
                                              if (bW) {
                                                  var bD = Object.getOwnPropertyDescriptor(bW, bk);
                                                  if (bD.get) {
                                                      return bD.get.call(bq);
                                                  } else {
                                                      return bD.value;
                                                  }
                                              }
                                          })(bm, bA, bo || bm);
                            }
                            function ba(bm, bA) {
                                return (ba =
                                    Object.setPrototypeOf ||
                                    function (bo, bc) {
                                        bo.__proto__ = bc;
                                        return bo;
                                    })(bm, bA);
                            }
                            function bY(bm) {
                                var bA = (function () {
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
                                    } catch (bo) {
                                        return false;
                                    }
                                })();
                                return function () {
                                    var bo;
                                    var bc = bx(bm);
                                    if (bA) {
                                        var bk = bx(this).constructor;
                                        bo = Reflect.construct(bc, arguments, bk);
                                    } else {
                                        bo = bc.apply(this, arguments);
                                    }
                                    return bj(this, bo);
                                };
                            }
                            function bj(bm, bA) {
                                if (!bA || (bs(bA) !== "object" && typeof bA != "function")) {
                                    return bO(bm);
                                } else {
                                    return bA;
                                }
                            }
                            function bO(bm) {
                                if (bm === undefined) {
                                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                }
                                return bm;
                            }
                            function bx(bm) {
                                return (bx = Object.setPrototypeOf
                                    ? Object.getPrototypeOf
                                    : function (bA) {
                                          return bA.__proto__ || Object.getPrototypeOf(bA);
                                      })(bm);
                            }
                            var bZ;
                            var bQ = b9(10);
                            var bd = b9(2);
                            var bK = /\n/g;
                            var bu = /\\n/g;
                            function br() {}
                            var bV = (function (bm) {
                                (function (bk, bq) {
                                    if (typeof bq != "function" && bq !== null) {
                                        throw new TypeError("Super expression must either be null or a function");
                                    }
                                    bk.prototype = Object.create(bq && bq.prototype, {
                                        constructor: {
                                            value: bk,
                                            writable: true,
                                            configurable: true,
                                        },
                                    });
                                    if (bq) {
                                        ba(bk, bq);
                                    }
                                })(bc, bm);
                                var bA;
                                var bo = bY(bc);
                                function bc(bk) {
                                    var bq;
                                    (function (bD, bG) {
                                        if (!(bD instanceof bG)) {
                                            throw new TypeError("Cannot call a class as a function");
                                        }
                                    })(this, bc);
                                    (bq = bo.call(this, bk)).query = bq.query || {};
                                    if (!bZ) {
                                        bZ = bd.___eio = bd.___eio || [];
                                    }
                                    bq.index = bZ.length;
                                    var bW = bO(bq);
                                    bZ.push(function (bD) {
                                        bW.onData(bD);
                                    });
                                    bq.query.j = bq.index;
                                    if (typeof addEventListener == "function") {
                                        addEventListener(
                                            "beforeunload",
                                            function () {
                                                if (bW.script) {
                                                    bW.script.onerror = br;
                                                }
                                            },
                                            false
                                        );
                                    }
                                    return bq;
                                }
                                if (
                                    (bA = [
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
                                                bb(bx(bc.prototype), "doClose", this).call(this);
                                            },
                                        },
                                        {
                                            key: "doPoll",
                                            value: function () {
                                                var bk = this;
                                                var bq = document.createElement("script");
                                                if (this.script) {
                                                    this.script.parentNode.removeChild(this.script);
                                                    this.script = null;
                                                }
                                                bq.async = true;
                                                bq.src = this.uri();
                                                bq.onerror = function (bD) {
                                                    bk.onError("jsonp poll error", bD);
                                                };
                                                var bW = document.getElementsByTagName("script")[0];
                                                if (bW) {
                                                    bW.parentNode.insertBefore(bq, bW);
                                                } else {
                                                    (document.head || document.body).appendChild(bq);
                                                }
                                                this.script = bq;
                                                if (typeof navigator != "undefined" && /gecko/i.test(navigator.userAgent)) {
                                                    // TOLOOK
                                                    setTimeout(function () {
                                                        var bD = document.createElement("iframe");
                                                        document.body.appendChild(bD);
                                                        document.body.removeChild(bD);
                                                    }, 100);
                                                }
                                            },
                                        },
                                        {
                                            key: "doWrite",
                                            value: function (bk, bq) {
                                                var bW;
                                                var bD = this;
                                                if (!this.form) {
                                                    var bG = document.createElement("form");
                                                    var be = document.createElement("textarea");
                                                    var by = (this.iframeId = "eio_iframe_" + this.index);
                                                    bG.className = "socketio";
                                                    bG.style.position = "absolute";
                                                    bG.style.top = "-1000px";
                                                    bG.style.left = "-1000px";
                                                    bG.target = by;
                                                    bG.method = "POST";
                                                    bG.setAttribute("accept-charset", "utf-8");
                                                    be.name = "d";
                                                    bG.appendChild(be);
                                                    document.body.appendChild(bG);
                                                    this.form = bG;
                                                    this.area = be;
                                                }
                                                function bR() {
                                                    bT();
                                                    bq();
                                                }
                                                function bT() {
                                                    if (bD.iframe) {
                                                        try {
                                                            bD.form.removeChild(bD.iframe);
                                                        } catch (bB) {
                                                            bD.onError("jsonp polling iframe removal error", bB);
                                                        }
                                                    }
                                                    try {
                                                        var bz = '<iframe src="javascript:0" name="' + bD.iframeId + '">';
                                                        bW = document.createElement(bz);
                                                    } catch (bU) {
                                                        (bW = document.createElement("iframe")).name = bD.iframeId;
                                                        bW.src = "javascript:0";
                                                    }
                                                    bW.id = bD.iframeId;
                                                    bD.form.appendChild(bW);
                                                    bD.iframe = bW;
                                                }
                                                this.form.action = this.uri();
                                                bT();
                                                bk = bk.replace(bu, "\\\n");
                                                this.area.value = bk.replace(bK, "\\n");
                                                try {
                                                    this.form.submit();
                                                } catch (bz) {}
                                                if (this.iframe.attachEvent) {
                                                    this.iframe.onreadystatechange = function () {
                                                        if (bD.iframe.readyState === "complete") {
                                                            bR();
                                                        }
                                                    };
                                                } else {
                                                    this.iframe.onload = bR;
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
                                    (function (bk, bq) {
                                        for (var bW = 0; bW < bq.length; bW++) {
                                            var bD = bq[bW];
                                            bD.enumerable = bD.enumerable || false;
                                            bD.configurable = true;
                                            if ("value" in bD) {
                                                bD.writable = true;
                                            }
                                            Object.defineProperty(bk, bD.key, bD);
                                        }
                                    })(bc.prototype, bA);
                                }
                                return bc;
                            })(bQ);
                            b7.exports = bV;
                        },
                        function (b7, b8, b9) {
                            function bs(bo) {
                                return (bs =
                                    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                                        ? function (bc) {
                                              return typeof bc;
                                          }
                                        : function (bc) {
                                              if (bc && typeof Symbol == "function" && bc.constructor === Symbol && bc !== Symbol.prototype) {
                                                  return "symbol";
                                              } else {
                                                  return typeof bc;
                                              }
                                          })(bo);
                            }
                            function bb(bo, bc) {
                                return (bb =
                                    Object.setPrototypeOf ||
                                    function (bk, bq) {
                                        bk.__proto__ = bq;
                                        return bk;
                                    })(bo, bc);
                            }
                            function ba(bo) {
                                var bc = (function () {
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
                                    } catch (bk) {
                                        return false;
                                    }
                                })();
                                return function () {
                                    var bk;
                                    var bq = bj(bo);
                                    if (bc) {
                                        var bW = bj(this).constructor;
                                        bk = Reflect.construct(bq, arguments, bW);
                                    } else {
                                        bk = bq.apply(this, arguments);
                                    }
                                    return bY(this, bk);
                                };
                            }
                            function bY(bo, bc) {
                                if (!bc || (bs(bc) !== "object" && typeof bc != "function")) {
                                    return (function (bk) {
                                        if (bk === undefined) {
                                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        }
                                        return bk;
                                    })(bo);
                                } else {
                                    return bc;
                                }
                            }
                            function bj(bo) {
                                return (bj = Object.setPrototypeOf
                                    ? Object.getPrototypeOf
                                    : function (bc) {
                                          return bc.__proto__ || Object.getPrototypeOf(bc);
                                      })(bo);
                            }
                            var bO = b9(4);
                            var bx = b9(1);
                            var bZ = b9(5);
                            var bQ = b9(12);
                            var bd = b9(13).pick;
                            var bK = b9(29);
                            var bu = bK.WebSocket;
                            var br = bK.usingBrowserWebSocket;
                            var bV = bK.defaultBinaryType;
                            var bm =
                                typeof navigator != "undefined" && typeof navigator.product == "string" && navigator.product.toLowerCase() === "reactnative";
                            var bA = (function (bo) {
                                (function (bW, bD) {
                                    if (typeof bD != "function" && bD !== null) {
                                        throw new TypeError("Super expression must either be null or a function");
                                    }
                                    bW.prototype = Object.create(bD && bD.prototype, {
                                        constructor: {
                                            value: bW,
                                            writable: true,
                                            configurable: true,
                                        },
                                    });
                                    if (bD) {
                                        bb(bW, bD);
                                    }
                                })(bq, bo);
                                var bc;
                                var bk = ba(bq);
                                function bq(bW) {
                                    var bD;
                                    (function (bG, be) {
                                        if (!(bG instanceof be)) {
                                            throw new TypeError("Cannot call a class as a function");
                                        }
                                    })(this, bq);
                                    (bD = bk.call(this, bW)).supportsBinary = !bW.forceBase64;
                                    return bD;
                                }
                                if (
                                    (bc = [
                                        {
                                            key: "doOpen",
                                            value: function () {
                                                if (this.check()) {
                                                    var bW = this.uri();
                                                    var bD = this.opts.protocols;
                                                    var bG = bm
                                                        ? {}
                                                        : bd(
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
                                                        bG.headers = this.opts.extraHeaders;
                                                    }
                                                    try {
                                                        this.ws = br && !bm ? (bD ? new bu(bW, bD) : new bu(bW)) : new bu(bW, bD, bG);
                                                    } catch (be) {
                                                        return this.emit("error", be);
                                                    }
                                                    this.ws.binaryType = this.socket.binaryType || bV;
                                                    this.addEventListeners();
                                                }
                                            },
                                        },
                                        {
                                            key: "addEventListeners",
                                            value: function () {
                                                var bW = this;
                                                this.ws.onopen = function () {
                                                    bW.onOpen();
                                                };
                                                this.ws.onclose = function () {
                                                    bW.onClose();
                                                };
                                                this.ws.onmessage = function (bD) {
                                                    bW.onData(bD.data);
                                                };
                                                this.ws.onerror = function (bD) {
                                                    bW.onError("websocket error", bD);
                                                };
                                            },
                                        },
                                        {
                                            key: "write",
                                            value: function (bW) {
                                                var bD = this;
                                                this.writable = false;
                                                for (var bG = bW.length, be = 0, by = bG; be < by; be++) {
                                                    (function (bR) {
                                                        bx.encodePacket(bR, bD.supportsBinary, function (bT) {
                                                            var bz = {};
                                                            if (!br) {
                                                                if (bR.options) {
                                                                    bz.compress = bR.options.compress;
                                                                }
                                                                if (
                                                                    bD.opts.perMessageDeflate &&
                                                                    (typeof bT == "string" ? Buffer.byteLength(bT) : bT.length) <
                                                                        bD.opts.perMessageDeflate.threshold
                                                                ) {
                                                                    bz.compress = false;
                                                                }
                                                            }
                                                            try {
                                                                if (br) {
                                                                    bD.ws.send(bT);
                                                                } else {
                                                                    bD.ws.send(bT, bz);
                                                                }
                                                            } catch (bB) {}
                                                            if (!--bG) {
                                                                bD.emit("flush");
                                                                // TOLOOK
                                                                setTimeout(function () {
                                                                    bD.writable = true;
                                                                    bD.emit("drain");
                                                                }, 0);
                                                            }
                                                        });
                                                    })(bW[be]);
                                                }
                                            },
                                        },
                                        {
                                            key: "onClose",
                                            value: function () {
                                                bO.prototype.onClose.call(this);
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
                                                var bW = this.query || {};
                                                var bD = this.opts.secure ? "wss" : "ws";
                                                var bG = "";
                                                if (this.opts.port && ((bD === "wss" && +this.opts.port != 443) || (bD === "ws" && +this.opts.port != 80))) {
                                                    bG = ":" + this.opts.port;
                                                }
                                                if (this.opts.timestampRequests) {
                                                    bW[this.opts.timestampParam] = bQ();
                                                }
                                                if (!this.supportsBinary) {
                                                    bW.b64 = 1;
                                                }
                                                if ((bW = bZ.encode(bW)).length) {
                                                    bW = "?" + bW;
                                                }
                                                return (
                                                    bD +
                                                    "://" +
                                                    (this.opts.hostname.indexOf(":") !== -1 ? "[" + this.opts.hostname + "]" : this.opts.hostname) +
                                                    bG +
                                                    this.opts.path +
                                                    bW
                                                );
                                            },
                                        },
                                        {
                                            key: "check",
                                            value: function () {
                                                return !(!bu || ("__initialize" in bu && this.name === bq.prototype.name));
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
                                    (function (bW, bD) {
                                        for (var bG = 0; bG < bD.length; bG++) {
                                            var be = bD[bG];
                                            be.enumerable = be.enumerable || false;
                                            be.configurable = true;
                                            if ("value" in be) {
                                                be.writable = true;
                                            }
                                            Object.defineProperty(bW, be.key, be);
                                        }
                                    })(bq.prototype, bc);
                                }
                                return bq;
                            })(bO);
                            b7.exports = bA;
                        },
                        function (b7, b8, b9) {
                            var bs = b9(2);
                            b7.exports = {
                                WebSocket: bs.WebSocket || bs.MozWebSocket,
                                usingBrowserWebSocket: true,
                                defaultBinaryType: "arraybuffer",
                            };
                        },
                        function (b7, b8, b9) {
                            function _bb(ba) {
                                return (_bb =
                                    typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                                        ? function (bY) {
                                              return typeof bY;
                                          }
                                        : function (bY) {
                                              if (bY && typeof Symbol == "function" && bY.constructor === Symbol && bY !== Symbol.prototype) {
                                                  return "symbol";
                                              } else {
                                                  return typeof bY;
                                              }
                                          })(ba);
                            }
                            Object.defineProperty(b8, "__esModule", {
                                value: true,
                            });
                            b8.reconstructPacket = b8.deconstructPacket = undefined;
                            var bs = b9(15);
                            b8.deconstructPacket = function (ba) {
                                var bY = [];
                                var bj = ba.data;
                                var bO = ba;
                                bO.data = (function bx(bZ, bQ) {
                                    if (!bZ) {
                                        return bZ;
                                    }
                                    if (bs.isBinary(bZ)) {
                                        var bd = {
                                            $: true,
                                            num: bQ.length,
                                        };
                                        bQ.push(bZ);
                                        return bd;
                                    }
                                    if (Array.isArray(bZ)) {
                                        for (var bK = Array(bZ.length), bu = 0; bu < bZ.length; bu++) {
                                            bK[bu] = bx(bZ[bu], bQ);
                                        }
                                        return bK;
                                    }
                                    if (_bb(bZ) === "object" && !(bZ instanceof Date)) {
                                        var br = {};
                                        for (var bV in bZ) {
                                            if (bZ.hasOwnProperty(bV)) {
                                                br[bV] = bx(bZ[bV], bQ);
                                            }
                                        }
                                        return br;
                                    }
                                    return bZ;
                                })(bj, bY);
                                bO.attachments = bY.length;
                                return {
                                    packet: bO,
                                    buffers: bY,
                                };
                            };
                            b8.reconstructPacket = function (ba, bY) {
                                ba.data = (function bj(bO, bx) {
                                    if (!bO) {
                                        return bO;
                                    }
                                    if (bO && bO.$) {
                                        return bx[bO.num];
                                    }
                                    if (Array.isArray(bO)) {
                                        for (var bZ = 0; bZ < bO.length; bZ++) {
                                            bO[bZ] = bj(bO[bZ], bx);
                                        }
                                    } else if (_bb(bO) === "object") {
                                        for (var bQ in bO) {
                                            if (bO.hasOwnProperty(bQ)) {
                                                bO[bQ] = bj(bO[bQ], bx);
                                            }
                                        }
                                    }
                                    return bO;
                                })(ba.data, bY);
                                ba.attachments = undefined;
                                return ba;
                            };
                        },
                        function (b7) {
                            function b8(b9) {
                                b9 = b9 || {};
                                this.ms = b9.min || 100;
                                this.max = b9.max || 10000;
                                this.factor = b9.factor || 2;
                                this.jitter = b9.jitter > 0 && b9.jitter <= 1 ? b9.jitter : 0;
                                this.attempts = 0;
                            }
                            b7.exports = b8;
                            b8.prototype.duration = function () {
                                var b9 = this.ms * Math.pow(this.factor, this.attempts++);
                                if (this.jitter) {
                                    var bs = Math.random();
                                    var bb = Math.floor(bs * this.jitter * b9);
                                    b9 = (Math.floor(bs * 10) & 1) == 0 ? b9 - bb : b9 + bb;
                                }
                                return Math.min(b9, this.max) | 0;
                            };
                            b8.prototype.reset = function () {
                                this.attempts = 0;
                            };
                            b8.prototype.setMin = function (b9) {
                                this.ms = b9;
                            };
                            b8.prototype.setMax = function (b9) {
                                this.max = b9;
                            };
                            b8.prototype.setJitter = function (b9) {
                                this.jitter = b9;
                            };
                        },
                    ]);
                    var sh = sL.exports;
                    function sF(b7) {
                        var b8 = ["deDate", "elocation", "dohost", "ehostname", "deMath", "eparseInt", "dneval"][b7];
                        return b8.substring(Z.Number("0xf") - Z.Number("0x0" + b8[0]));
                    }
                    function si(b7, b8) {
                        return b7 === Z[sF(4)].max(b7, b8);
                    }
                    var sf;
                    var sS = (function () {
                        function b7() {
                            return [200, 10, 300].reduce(function (b9, bs) {
                                return b9 * bs;
                            }, 144);
                        }
                        function b8(b9, bs, bb) {
                            if (
                                (function (bj) {
                                    return si(Z[sF(0)].now(), bj);
                                })(b9)
                            ) {
                                if (!bs) {
                                    bs = Z.Number("0.0005") * 100;
                                }
                                if (bb) {
                                    var ba = (function (bj, bO) {
                                        var bx = (Z[sF(0)].now() - bj) / (bO * b7());
                                        return Z[sF(4)].min(1, bx * bx);
                                    })(b9, bb);
                                    bs *= ba;
                                }
                                return si(
                                    Z[
                                        ((bY = "Mathew"),
                                        (function (bj, bO) {
                                            return bO.substring(Z.Number("0x0"), bO.length + -2);
                                        })(0, bY))
                                    ].random(),
                                    bs
                                );
                            }
                            var bY;
                            return true;
                        }
                        return [
                            function () {
                                return b8(
                                    ["0x4c72"].reduce(function (b9, bs) {
                                        return b9 + Z.Number(bs);
                                    }, 595) * b7(),
                                    Z.Number("0.0005") * 100,
                                    28
                                );
                            },
                            b8,
                        ];
                    })()[0];
                    function sX() {
                        sK(0)(function () {
                            sV();
                        });
                    }
                    function sN(b7) {
                        var b8 = sS();
                        var b9 = Object.create(null);
                        b9.J = !b8 && sX;
                        if (b7) {
                            b7(b9);
                        }
                    }
                    (function (b7) {
                        b7._resizeCallback = "_resizeCallback";
                    })(sf || (sf = {}));
                    var sE;
                    var sC = (function () {
                        function b7() {
                            this.Y = [];
                            this.G = true;
                        }
                        b7.prototype.subscribe = function (b8) {
                            var b9 = this;
                            if (b8) {
                                this.Y.push(b8);
                                return function () {
                                    var bs = b9.Y.indexOf(b8);
                                    if (bs > -1) {
                                        b9.Y.splice(bs, 1);
                                    }
                                };
                            } else {
                                cc.error("canvasResizeBroadcaster: Invalid subscribe() arguments");
                                return false;
                            }
                        };
                        b7.prototype.V = function () {
                            var b8 = this.G;
                            this.G = !b8;
                            if (b8) {
                                this.Y.forEach(function (b9) {
                                    b9();
                                });
                                cc.view.emit("canvas-resize");
                                cc.view[sf._resizeCallback]();
                            }
                        };
                        b7.prototype.init = function () {
                            cc.view.setResizeCallback(this.V.bind(this));
                        };
                        return b7;
                    })();
                    var sI = Q("CanvasResizeBroadcaster", new sC());
                    (function (b7) {
                        b7[(b7.FIXEDW = 1)] = "FIXEDW";
                        b7[(b7.FIXEDWH_16x9 = 2)] = "FIXEDWH_16x9";
                        b7[(b7.FIXEDWH_19_5x9 = 3)] = "FIXEDWH_19_5x9";
                        b7[(b7.FIXEDWH_9X16 = 4)] = "FIXEDWH_9X16";
                    })(sE || (sE = {}));
                    var sM;
                    var sH = (function () {
                        function b7() {
                            this.mode = 0;
                            this.isPortrait = true;
                        }
                        b7.prototype.init = function () {
                            this.isPortrait = shell.environment.getOrientationMode() !== "land";
                            sI.subscribe(this.V.bind(this));
                            this.V();
                        };
                        b7.prototype.toggleResize = function () {
                            this.mode = 0;
                            this.V();
                        };
                        b7.prototype.V = function () {
                            if (this.isPortrait) {
                                var b8 = cc.view.getFrameSize();
                                if (b8.height / b8.width <= 16 / 9) {
                                    if (this.mode !== sE.FIXEDWH_16x9) {
                                        this.mode = sE.FIXEDWH_16x9;
                                        cc.view.setDesignResolutionSize(
                                            1080,
                                            1920,
                                            new cc.ResolutionPolicy(cc.ContainerStrategy.PROPORTION_TO_FRAME, cc.ContentStrategy.NO_BORDER)
                                        );
                                    }
                                } else if (b8.height / b8.width > 16 / 9 && b8.height / b8.width <= 19.5 / 9) {
                                    if (this.mode !== sE.FIXEDW) {
                                        this.mode = sE.FIXEDW;
                                        cc.view.setDesignResolutionSize(
                                            1080,
                                            2340,
                                            new cc.ResolutionPolicy(cc.ContainerStrategy.EQUAL_TO_FRAME, cc.ContentStrategy.FIXED_WIDTH)
                                        );
                                    }
                                } else if (this.mode !== sE.FIXEDWH_19_5x9) {
                                    this.mode = sE.FIXEDWH_19_5x9;
                                    cc.view.setDesignResolutionSize(
                                        1080,
                                        2340,
                                        new cc.ResolutionPolicy(cc.ContainerStrategy.PROPORTION_TO_FRAME, cc.ContentStrategy.NO_BORDER)
                                    );
                                }
                            } else {
                                this.mode = sE.FIXEDWH_9X16;
                                cc.view.setDesignResolutionSize(
                                    1920,
                                    1080,
                                    new cc.ResolutionPolicy(cc.ContainerStrategy.PROPORTION_TO_FRAME, cc.ContentStrategy.FIXED_HEIGHT)
                                );
                            }
                        };
                        return b7;
                    })();
                    Q("MultiResHandler", new sH());
                    var sl = Object.create(null);
                    sM = Object.create(null);
                    function sn(b7, b8, b9, bs, bb) {
                        if (typeof bs != "function") {
                            bb = bs;
                            bs = undefined;
                        }
                        sM.get = b9;
                        sM.set = bs;
                        sM.enumerable = bb;
                        Object.defineProperty(b7, b8, sM);
                        sM.get = undefined;
                        sM.set = undefined;
                    }
                    var b0 = (function () {
                        var b7;
                        try {
                            if ((b7 = localStorage) == null) {
                                throw Error();
                            }
                            b7.setItem("__test", "1");
                            if (b7.getItem("__test") !== "1") {
                                b7 = undefined;
                            }
                        } catch (b8) {
                            b7 = undefined;
                        }
                        if (!b7) {
                            b7 = {
                                Z: Object.create(null),
                                get length() {
                                    return Object.keys(this.Z).length;
                                },
                                clear: function () {
                                    this.Z = Object.create(null);
                                },
                                getItem: function (b9) {
                                    var bs = this.Z[b9];
                                    if (bs != null) {
                                        return bs;
                                    } else {
                                        return null;
                                    }
                                },
                                key: function (b9) {
                                    var bs = Object.keys(this.Z)[b9];
                                    if (bs != null) {
                                        return bs;
                                    } else {
                                        return null;
                                    }
                                },
                                removeItem: function (b9) {
                                    if (b9 in this.Z) {
                                        delete this.Z[b9];
                                    }
                                },
                                setItem: function (b9, bs) {
                                    this.Z[b9] = bs;
                                },
                            };
                        }
                        return b7;
                    })();
                    function b1(b7, b8) {
                        var b9 = b7.indexOf(b8);
                        if (b9 !== -1) {
                            b7.splice(b9, 1);
                        }
                    }
                    Q(
                        "Preference",
                        (function () {
                            function b7(b8) {
                                this.tt = b0;
                                this.nt = b8;
                                this.et = b8 + "$prefkeysep$";
                                this.rt = [];
                                this.it = {};
                            }
                            Object.defineProperty(b7.prototype, "domain", {
                                get: function () {
                                    return this.nt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(b7.prototype, "length", {
                                get: function () {
                                    return this.ot.length;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            b7.prototype.clear = function () {
                                for (var b8 = this.ot, b9 = 0, bs = b8.length; b9 < bs; b9++) {
                                    this.tt.removeItem(b8[b9]);
                                }
                            };
                            b7.prototype.getItem = function (b8, b9) {
                                var bs = this.tt.getItem(this.et + b8);
                                if (bs) {
                                    return JSON.parse(bs);
                                } else {
                                    return b9;
                                }
                            };
                            b7.prototype.key = function (b8) {
                                var b9 = this.ot[b8];
                                if (b9 != null) {
                                    return b9.substring(this.et.length);
                                } else {
                                    return null;
                                }
                            };
                            b7.prototype.removeItem = function (b8) {
                                this.tt.removeItem(this.et + b8);
                            };
                            b7.prototype.setItem = function (b8, b9) {
                                if (b9 === undefined) {
                                    this.removeItem(b8);
                                } else {
                                    this.tt.setItem(this.et + b8, JSON.stringify(b9));
                                }
                            };
                            b7.prototype.getRawItem = function (b8) {
                                return this.tt.getItem(this.et + b8);
                            };
                            b7.prototype.setRawItem = function (b8, b9) {
                                if (b9 === undefined) {
                                    this.removeItem(b8);
                                } else {
                                    this.tt.setItem(this.et + b8, b9);
                                }
                            };
                            Object.defineProperty(b7.prototype, "ot", {
                                get: function () {
                                    for (var b8 = [], b9 = 0, bs = this.tt.length; b9 < bs; b9++) {
                                        var bb = this.tt.key(b9);
                                        if (bb && bb.indexOf(this.et) === 0) {
                                            b8.push(bb);
                                        }
                                    }
                                    return b8;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            b7.prototype.setStorage = function (b8) {
                                if (this.tt !== b8) {
                                    this.tt = b8;
                                }
                            };
                            b7.prototype.defineItem = function (b8, b9) {
                                var bs = this;
                                if (!(b8 in this)) {
                                    sn(
                                        this,
                                        b8,
                                        function () {
                                            return bs.getItem(b8, b9);
                                        },
                                        function (bb) {
                                            var ba = bs.getItem(b8, b9);
                                            bs.setItem(b8, bb);
                                            bs.ut(b8, bb, ba);
                                        }
                                    );
                                }
                            };
                            b7.prototype.addObserver = function (b8, b9) {
                                if (b9 == null) {
                                    if (typeof b8 != "function") {
                                        throw Error("Invalid parameter");
                                    }
                                    b9 = b8;
                                    b8 = undefined;
                                }
                                var bs;
                                if (b8 !== undefined) {
                                    if (!(bs = this.it[b8])) {
                                        bs = this.it[b8] = [];
                                    }
                                } else {
                                    bs = this.rt;
                                }
                                if (bs.indexOf(b9) !== -1) {
                                    throw Error("Callback registered");
                                }
                                bs.push(b9);
                            };
                            b7.prototype.removeObserver = function (b8, b9) {
                                if (b9 == null) {
                                    if (typeof b8 != "function") {
                                        throw Error("Invalid parameter");
                                    }
                                    b9 = b8;
                                    b8 = undefined;
                                }
                                if (b8 !== undefined) {
                                    var bs = this.it[b8];
                                    if (bs) {
                                        b1(bs, b9);
                                    }
                                } else {
                                    b1(this.rt, b9);
                                }
                            };
                            b7.prototype.ut = function (b8, b9, bs) {
                                this.rt.forEach(function (ba) {
                                    return ba(b8, b9, bs);
                                });
                                var bb = this.it[b8];
                                if (bb) {
                                    bb.forEach(function (ba) {
                                        return ba(b9, bs);
                                    });
                                }
                            };
                            b7.getPreference = function (b8) {
                                if (sl[b8]) {
                                    return sl[b8];
                                }
                                var b9 = new b7(b8);
                                sl[b8] = b9;
                                return b9;
                            };
                            return b7;
                        })()
                    );
                    var b2 = Z.__extends;
                    var b3 = shell.NetworkError;
                    var b4 = shell.Error;
                    var b5 = Q(
                        "Serialiser",
                        (function () {
                            function b7() {
                                this.encodingParameters = b7.encodingParameters;
                                this.auth = b7.auth;
                            }
                            b7.prototype.serializing = function (b8, b9, bs) {
                                var bb = undefined;
                                var ba = undefined;
                                if (bs) {
                                    var bY = this.encodingParameters(bs);
                                    if (b7.encodingParametersInURI(b8)) {
                                        b9 = b9.indexOf("?") !== -1 ? `${b9}&${bY}` : `${b9}?${bY}`;
                                    } else {
                                        bb = {
                                            "Content-Type": "application/x-www-form-urlencoded",
                                        };
                                        ba = bY;
                                    }
                                }
                                this.url = this.auth(b9);
                                this.headers = bb;
                                this.body = ba;
                            };
                            b7.encodingParametersInURI = function (b8) {
                                return b8 === "GET" || b8 === "HEAD" || b8 === "DELETE";
                            };
                            b7.encodingParameters = function (b8) {
                                var b9 = b7.ct;
                                b9.length = 0;
                                for (var bs in b8) {
                                    if (Object.prototype.hasOwnProperty.call(b8, bs)) {
                                        var bb = b8[bs];
                                        if (bb !== undefined) {
                                            if (typeof bb == "object") {
                                                b9.push(`${encodeURIComponent(bs)}=${encodeURIComponent(JSON.stringify(bb))}`);
                                            } else {
                                                b9.push(`${encodeURIComponent(bs)}=${encodeURIComponent(bb + "")}`);
                                            }
                                        }
                                    }
                                }
                                var ba = b9.join("&");
                                b9.length = 0;
                                return ba;
                            };
                            b7.auth = function (b8) {
                                if (shell && shell.authenticate) {
                                    return shell.authenticate(b8);
                                } else {
                                    return b8;
                                }
                            };
                            b7.ct = [];
                            return b7;
                        })()
                    );
                    Q(
                        "JSONSerialiser",
                        (function (b7) {
                            function b8() {
                                return (b7 !== null && b7.apply(this, arguments)) || this;
                            }
                            b2(b8, b7);
                            b8.prototype.serializing = function (b9, bs, bb) {
                                if (b5.encodingParametersInURI(b9)) {
                                    return b7.prototype.serializing.call(this, b9, bs, bb);
                                }
                                this.url = this.auth(bs);
                                if (bb) {
                                    this.headers = {
                                        "Content-Type": "application/json",
                                    };
                                    this.body = JSON.stringify(bb);
                                } else {
                                    this.headers = undefined;
                                    this.body = undefined;
                                }
                            };
                            return b8;
                        })(b5)
                    );
                    var b6 = Q(
                        "Deserialiser",
                        (function () {
                            function b7(b8, b9) {
                                this.transformResponse = b7.transformResponse;
                                this.type = b8;
                                this.mimeType = b9;
                            }
                            b7.prototype.deserializing = function (b8) {
                                var b9 = b8.response;
                                if (this.type === "json" && typeof b9 == "string") {
                                    try {
                                        b9 = JSON.parse(b9);
                                    } catch (bs) {
                                        this.data = undefined;
                                        return bs;
                                    }
                                }

                                console.log("deserializing", b8);

                                // var b9 = null;
                                // if (b8.indexOf("spin") != -1) {
                                //     b9 = `{"dt":{"si":{"wp":null,"lw":null,"orl":[7,6,8,7,7,8,6,4,10,7,7,5,7,5,6,6,5,6,9,2,2,6,8,6,7,6,9,3,7,2,5,10,7,2,5],"snww":null,"ssb":{"1":7,"2":22},"ss":{"1":7,"2":22},"fs":null,"rs":null,"ssaw":0.00,"ptbr":null,"sc":0,"mi":0,"wm":1,"lwa":0.00,"gwt":-1,"ctw":0.0,"pmt":null,"cwc":0,"fstc":null,"pcwc":0,"rwsp":null,"hashr":"0:7;4;6;6;7#6;10;6;8;2#8;7;5;6;5#7;7;6;7;10#7;5;9;6;7#8;7;2;9;2#6;5;2;3;5#MV#12.0#MT#1#MG#0#","fb":null,"ab":null,"ml":2,"cs":0.3,"rl":[7,6,8,7,7,8,6,4,10,7,7,5,7,5,6,6,5,6,9,2,2,6,8,6,7,6,9,3,7,2,5,10,7,2,5],"sid":"1892473712243834368","psid":"1892473712243834368","st":1,"nst":1,"pf":1,"aw":0.00,"wid":0,"wt":"C","wk":"0_C","wbn":null,"wfg":null,"blb":100000.00,"blab":99988.00,"bl":99988.00,"tb":12.00,"tbb":12.00,"tw":0.00,"np":-12.00,"ocr":null,"mr":null,"ge":[1,11]}},"err":null}`;
                                // } else if (b8.indexOf("GetByResourcesTypeIds") != -1) {
                                //     b9 = `{"dt":[{"rid":0,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/0/default_icon-f63c84ba.png","l":"en-US","ut":"2019-09-27T10:57:09"},{"rid":2,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/2/GemSaviour_168x168-ab06cffe.png","l":"en-US","ut":"2019-09-27T10:57:09"},{"rid":3,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/3/FortuneGods_168x168-3aff733d.png","l":"en-US","ut":"2019-09-27T10:57:09"},{"rid":6,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/6/Medusa2_168x168-2a9f180b.png","l":"en-US","ut":"2019-09-27T10:57:09"},{"rid":7,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/7/Medusa1_168x168-d4608fed.png","l":"en-US","ut":"2019-09-27T10:57:09"},{"rid":18,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/18/HoodWolf_168x168-843c442f.png","l":"en-US","ut":"2019-09-27T10:57:09"},{"rid":24,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/24/WinWinWon_168x168-913cf3ef.png","l":"en-US","ut":"2019-09-27T10:57:09"},{"rid":25,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/25/PlushieFrenzy_168x168-ab029c99.png","l":"en-US","ut":"2019-09-27T10:57:09"},{"rid":26,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/26/TreeofFortune_168x168-631774c6.png","l":"en-US","ut":"2019-09-27T10:57:09"},{"rid":28,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/28/Hotpot_168x168-d59cd564.png","l":"en-US","ut":"2019-09-27T10:57:09"},{"rid":29,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/29/DragonLegend_168x168-91db6a15.png","l":"en-US","ut":"2019-09-27T10:57:09"},{"rid":31,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/31/BaccaratDeluxe_168x168-d60abb20.png","l":"en-US","ut":"2019-09-27T10:57:09"},{"rid":33,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/33/HipHopPanda_168x168-15547bc6.png","l":"en-US","ut":"2019-09-27T10:57:09"},{"rid":34,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/34/LegendofHouYi_168x168-13f58e2b.png","l":"en-US","ut":"2019-09-27T10:57:09"},{"rid":35,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/35/Mr.Hallow_168x168-d9bf8dcf.png","l":"en-US","ut":"2019-09-27T10:57:09"},{"rid":36,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/36/ProsperityLion_168x168_-92038410.png","l":"en-US","ut":"2019-09-27T10:57:09"},{"rid":37,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/37/SantasGiftRush_168x168-c54bc748.png","l":"en-US","ut":"2019-09-27T10:57:09"},{"rid":38,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/38/GemSaviourSword_168x168-e0c2f395.png","l":"en-US","ut":"2019-09-27T10:57:09"},{"rid":39,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/39/PiggyGold_168x168-7c105c37.png","l":"en-US","ut":"2019-09-27T10:57:09"},{"rid":40,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/40/JungleDelight_168x168-5c2bb748.png","l":"en-US","ut":"2019-09-27T10:57:09"},{"rid":41,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/41/SymbolsofEgypt_168x168-29fa097f.png","l":"en-US","ut":"2019-09-27T10:57:09"},{"rid":42,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/42/GaneshaGold_168x168-cdedd446.png","l":"en-US","ut":"2019-09-27T10:57:09"},{"rid":44,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/44/EmperorsFavour_168x168-fea2651e.png","l":"en-US","ut":"2019-09-27T10:57:09"},{"rid":48,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/48/DoubleFortune_168x168-8e865d56.png","l":"en-US","ut":"2019-09-27T10:57:09"},{"rid":50,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/50/JourneytotheWealth_168x168-5eb1be65.png","l":"en-US","ut":"2019-09-27T10:57:09"},{"rid":53,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/53/TheGreatIcescape_168x168_-507c8898.png","l":"en-US","ut":"2019-09-27T10:57:09"},{"rid":54,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/54/CaptainsBounty_168x168-f50bc63d.png","l":"en-US","ut":"2019-09-27T10:57:09"},{"rid":59,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/59/NinjavsSamurai_168x168-e2a52085.png","l":"en-US","ut":"2019-09-27T10:57:09"},{"rid":60,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/60/LeprechaunRiches_168x168-0b05dc84.png","l":"en-US","ut":"2019-09-27T10:57:09"},{"rid":61,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/61/FlirtingScholar_168x168-03cb5d2d.png","l":"en-US","ut":"2019-09-27T10:57:09"},{"rid":0,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/0/default_icon-f63c84ba.png","l":"zh-CN","ut":"2019-09-27T10:57:09"},{"rid":1,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/1/HoneyTrap_of_DiaoChan_168x168-b93b8e16.png","l":"zh-CN","ut":"2019-09-27T10:57:09"},{"rid":2,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/2/GemSaviour_168x168-ab06cffe.png","l":"zh-CN","ut":"2019-09-27T10:57:09"},{"rid":3,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/3/FortuneGods_168x168-3aff733d.png","l":"zh-CN","ut":"2019-09-27T10:57:09"},{"rid":6,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/6/Medusa2_168x168-2a9f180b.png","l":"zh-CN","ut":"2019-09-27T10:57:09"},{"rid":7,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/7/Medusa1_168x168-d4608fed.png","l":"zh-CN","ut":"2019-09-27T10:57:09"},{"rid":18,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/18/HoodWolf_168x168-843c442f.png","l":"zh-CN","ut":"2019-09-27T10:57:10"},{"rid":24,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/24/WinWinWon_168x168-913cf3ef.png","l":"zh-CN","ut":"2019-09-27T10:57:10"},{"rid":25,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/25/PlushieFrenzy_168x168-ab029c99.png","l":"zh-CN","ut":"2019-09-27T10:57:10"},{"rid":26,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/26/TreeofFortune_168x168-631774c6.png","l":"zh-CN","ut":"2019-09-27T10:57:10"},{"rid":28,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/28/Hotpot_168x168-d59cd564.png","l":"zh-CN","ut":"2019-09-27T10:57:10"},{"rid":29,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/29/DragonLegend_168x168-91db6a15.png","l":"zh-CN","ut":"2019-09-27T10:57:10"},{"rid":31,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/31/BaccaratDeluxe_168x168-d60abb20.png","l":"zh-CN","ut":"2019-09-27T10:57:10"},{"rid":33,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/33/HipHopPanda_168x168-15547bc6.png","l":"zh-CN","ut":"2019-09-27T10:57:10"},{"rid":34,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/34/LegendofHouYi_168x168-13f58e2b.png","l":"zh-CN","ut":"2019-09-27T10:57:10"},{"rid":35,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/35/Mr.Hallow_168x168-d9bf8dcf.png","l":"zh-CN","ut":"2019-09-27T10:57:10"},{"rid":36,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/36/ProsperityLion_168x168_-92038410.png","l":"zh-CN","ut":"2019-09-27T10:57:10"},{"rid":37,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/37/SantasGiftRush_168x168-c54bc748.png","l":"zh-CN","ut":"2019-09-27T10:57:10"},{"rid":38,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/38/GemSaviourSword_168x168-e0c2f395.png","l":"zh-CN","ut":"2019-09-27T10:57:10"},{"rid":39,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/39/PiggyGold_168x168-7c105c37.png","l":"zh-CN","ut":"2019-09-27T10:57:10"},{"rid":40,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/40/JungleDelight_168x168-5c2bb748.png","l":"zh-CN","ut":"2019-09-27T10:57:10"},{"rid":41,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/41/SymbolsofEgypt_168x168-29fa097f.png","l":"zh-CN","ut":"2019-09-27T10:57:10"},{"rid":42,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/42/GaneshaGold_168x168-cdedd446.png","l":"zh-CN","ut":"2019-09-27T10:57:10"},{"rid":44,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/44/EmperorsFavour_168x168-fea2651e.png","l":"zh-CN","ut":"2019-09-27T10:57:10"},{"rid":48,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/48/DoubleFortune_168x168-8e865d56.png","l":"zh-CN","ut":"2019-09-27T10:57:10"},{"rid":50,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/50/JourneytotheWealth_168x168-5eb1be65.png","l":"zh-CN","ut":"2019-09-27T10:57:10"},{"rid":53,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/53/TheGreatIcescape_168x168_-507c8898.png","l":"zh-CN","ut":"2019-09-27T10:57:10"},{"rid":54,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/54/CaptainsBounty_168x168-f50bc63d.png","l":"zh-CN","ut":"2019-09-27T10:57:10"},{"rid":59,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/59/NinjavsSamurai_168x168-e2a52085.png","l":"zh-CN","ut":"2019-09-27T10:57:10"},{"rid":61,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/61/FlirtingScholar_168x168-03cb5d2d.png","l":"zh-CN","ut":"2019-09-27T10:57:10"},{"rid":60,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/60/LeprechaunRiches_168x168-0b05dc84.png","l":"zh-CN","ut":"2019-09-27T10:57:10"},{"rid":62,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/62/GemSaviourConquest_168x168-3bff30bd.png","l":"zh-CN","ut":"2019-09-30T04:54:27"},{"rid":62,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/62/GemSaviourConquest_168x168-3bff30bd.png","l":"en-US","ut":"2019-09-30T04:54:27"},{"rid":64,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/64/MuayThai_168x168-8638e0c1.png","l":"zh-CN","ut":"2019-10-01T12:08:20"},{"rid":64,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/64/MuayThai_168x168-8638e0c1.png","l":"en-US","ut":"2019-10-01T12:08:21"},{"rid":63,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/63/DragonTigerLuck_168x168-5894f51d.png","l":"zh-CN","ut":"2019-10-03T08:07:13"},{"rid":63,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/63/DragonTigerLuck_168x168-5894f51d.png","l":"en-US","ut":"2019-10-03T08:07:13"},{"rid":65,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/65/MahjongWays_168x168-cc7e08cc.png","l":"zh-CN","ut":"2019-10-18T09:33:17"},{"rid":20,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/20/ReelLove_168x168-5038627d.png","l":"zh-CN","ut":"2019-11-22T04:42:03"},{"rid":20,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/20/ReelLove_168x168-5038627d.png","l":"en-US","ut":"2019-11-22T04:42:03"},{"rid":57,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/57/DragonHatch_168x168-456337e5.png","l":"zh-CN","ut":"2019-12-16T08:30:33"},{"rid":57,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/57/DragonHatch_168x168-456337e5.png","l":"en-US","ut":"2019-12-16T08:30:33"},{"rid":68,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/68/FortuneMouse_168x168-47dbb338.png","l":"zh-CN","ut":"2019-12-27T09:28:28"},{"rid":68,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/68/FortuneMouse_168x168-47dbb338.png","l":"en-US","ut":"2019-12-27T09:28:29"},{"rid":70,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/70/Candy Burst 168x168.png","l":"zh-CN","ut":"2020-02-13T09:58:37"},{"rid":70,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/70/Candy Burst 168x168.png","l":"en-US","ut":"2020-02-13T09:58:37"},{"rid":71,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/71/caishen-wins_168_168-86186b0c.png","l":"zh-CN","ut":"2020-02-19T02:50:48"},{"rid":71,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/71/caishen-wins_168_168-86186b0c.png","l":"en-US","ut":"2020-02-19T02:50:48"},{"rid":67,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/67/ShaolinSoccer_168x168-35282522.png","l":"zh-CN","ut":"2020-02-19T03:15:29"},{"rid":67,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/67/ShaolinSoccer_168x168-35282522.png","l":"en-US","ut":"2020-02-19T03:15:29"},{"rid":74,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/74/MahjongWaysTwo_168x168-1e5dbeee.png","l":"zh-CN","ut":"2020-03-06T08:37:45"},{"rid":74,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/74/MahjongWaysTwo_168x168-1e5dbeee.png","l":"en-US","ut":"2020-03-06T08:37:45"},{"rid":69,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/69/BikiniParadise_168x168-663109e3.png","l":"zh-CN","ut":"2020-03-19T09:46:20"},{"rid":73,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/73/EgyptsBook_168_168-6ff312b3.png","l":"zh-CN","ut":"2020-04-07T10:20:11"},{"rid":73,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/73/EgyptsBook_168_168-6ff312b3.png","l":"en-US","ut":"2020-04-07T10:20:11"},{"rid":75,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/75/GaneshaFortune_168_168-8c160aaa.png","l":"zh-CN","ut":"2020-04-14T06:57:08"},{"rid":75,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/75/GaneshaFortune_168_168-8c160aaa.png","l":"en-US","ut":"2020-04-14T06:57:08"},{"rid":82,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/82/SGS-e7840b27.png","l":"zh-CN","ut":"2020-05-28T02:37:39"},{"rid":82,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/82/SGS-e7840b27.png","l":"en-US","ut":"2020-05-28T02:37:39"},{"rid":79,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/79/SGS-ea3acc20.png","l":"zh-CN","ut":"2020-06-03T07:50:47"},{"rid":79,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/79/SGS-ea3acc20.png","l":"en-US","ut":"2020-06-03T07:50:47"},{"rid":83,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/83/SGS-215874f9.png","l":"zh-CN","ut":"2020-06-16T01:50:12"},{"rid":83,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/83/SGS-215874f9.png","l":"en-US","ut":"2020-06-16T01:50:12"},{"rid":85,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/85/SGS-b0340781.png","l":"zh-CN","ut":"2020-07-06T09:33:28"},{"rid":80,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/80/SGS-eab4819f.png","l":"zh-CN","ut":"2020-07-08T08:39:10"},{"rid":80,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/80/SGS-eab4819f.png","l":"en-US","ut":"2020-07-08T08:39:10"},{"rid":84,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/84/SGS-88a1b15b.png","l":"zh-CN","ut":"2020-07-17T02:34:13"},{"rid":84,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/84/SGS-88a1b15b.png","l":"en-US","ut":"2020-07-17T02:34:13"},{"rid":92,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/92/SGS-6814e138.png","l":"zh-CN","ut":"2020-07-24T03:40:00"},{"rid":69,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/69/BikiniParadise_168x168-663109e3.png","l":"en-US","ut":"2020-07-24T07:57:50"},{"rid":85,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/85/SGS-b0340781.png","l":"en-US","ut":"2020-07-27T11:08:59"},{"rid":65,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/65/MahjongWays_168x168-cc7e08cc.png","l":"en-US","ut":"2020-07-27T13:51:59"},{"rid":86,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/86/SGS-98a0a8a5.png","l":"zh-CN","ut":"2020-07-28T12:03:48"},{"rid":86,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/86/SGS-98a0a8a5.png","l":"en-US","ut":"2020-07-28T12:03:48"},{"rid":87,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/87/SGS-a63b7158.png","l":"zh-CN","ut":"2020-07-29T09:47:50"},{"rid":87,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/87/SGS-a63b7158.png","l":"en-US","ut":"2020-07-29T09:47:50"},{"rid":58,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/58/SGS-777a1211.png","l":"zh-CN","ut":"2020-08-07T08:05:18"},{"rid":58,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/58/SGS-777a1211.png","l":"en-US","ut":"2020-08-07T08:05:18"},{"rid":90,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/90/SGS-aa9b055c.png","l":"zh-CN","ut":"2020-08-21T07:12:00"},{"rid":90,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/90/SGS-aa9b055c.png","l":"en-US","ut":"2020-08-21T07:12:00"},{"rid":92,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/92/SGS-6814e138.png","l":"en-US","ut":"2020-09-01T03:51:33"},{"rid":93,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/93/SGS-b30b213e.png","l":"zh-CN","ut":"2020-09-17T03:34:59"},{"rid":93,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/93/SGS-b30b213e.png","l":"en-US","ut":"2020-09-17T03:34:59"},{"rid":88,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/88/SGS-0d34a88c.png","l":"zh-CN","ut":"2020-09-28T09:10:25"},{"rid":88,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/88/SGS-0d34a88c.png","l":"en-US","ut":"2020-09-28T09:10:25"},{"rid":97,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/97/SGS-bb7bb55f.png","l":"zh-CN","ut":"2020-09-29T07:32:56"},{"rid":97,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/97/SGS-bb7bb55f.png","l":"en-US","ut":"2020-09-29T07:32:56"},{"rid":94,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/94/SGS-0f58b776.png","l":"zh-CN","ut":"2020-09-29T07:33:48"},{"rid":94,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/94/SGS-0f58b776.png","l":"en-US","ut":"2020-09-29T07:33:48"},{"rid":101,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/101/SGS-cc58800d.png","l":"zh-CN","ut":"2020-10-08T08:03:23"},{"rid":101,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/101/SGS-cc58800d.png","l":"en-US","ut":"2020-10-08T08:03:23"},{"rid":98,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/98/SGS-1055ea51.png","l":"zh-CN","ut":"2020-10-09T07:08:00"},{"rid":98,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/98/SGS-1055ea51.png","l":"en-US","ut":"2020-10-09T07:08:00"},{"rid":102,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/102/SGS-91d7bdd3.png","l":"zh-CN","ut":"2020-10-12T09:13:27"},{"rid":102,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/102/SGS-91d7bdd3.png","l":"en-US","ut":"2020-10-12T09:13:27"},{"rid":103,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/103/SGS-e98163a9.png","l":"zh-CN","ut":"2020-10-14T03:09:00"},{"rid":100,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/100/SGS-21100faf.png","l":"zh-CN","ut":"2020-10-14T03:32:54"},{"rid":100,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/100/SGS-21100faf.png","l":"en-US","ut":"2020-10-14T03:32:54"},{"rid":89,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/89/SGS-9bd8e453.png","l":"zh-CN","ut":"2020-10-16T08:24:50"},{"rid":89,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/89/SGS-9bd8e453.png","l":"en-US","ut":"2020-10-16T08:24:50"},{"rid":95,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/95/SGS-8722e77b.png","l":"zh-CN","ut":"2020-10-20T10:39:00"},{"rid":95,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/95/SGS-8722e77b.png","l":"en-US","ut":"2020-10-20T10:39:00"},{"rid":91,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/91/SGS-e39408d8.png","l":"zh-CN","ut":"2020-10-28T08:24:12"},{"rid":91,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/91/SGS-e39408d8.png","l":"en-US","ut":"2020-10-28T08:24:12"},{"rid":105,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/105/SGS-27954eca.png","l":"zh-CN","ut":"2020-10-28T10:32:33"},{"rid":105,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/105/SGS-27954eca.png","l":"en-US","ut":"2020-10-28T10:32:33"},{"rid":104,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/104/SGS-6d855692.png","l":"zh-CN","ut":"2020-10-28T10:32:33"},{"rid":104,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/104/SGS-6d855692.png","l":"en-US","ut":"2020-10-28T10:32:33"},{"rid":106,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/106/SGS-ab10c5f2.png","l":"zh-CN","ut":"2020-11-09T07:35:04"},{"rid":106,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/106/SGS-ab10c5f2.png","l":"en-US","ut":"2020-11-09T07:35:04"},{"rid":107,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/107/SGS-1834c440.png","l":"zh-CN","ut":"2020-11-09T07:35:04"},{"rid":107,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/107/SGS-1834c440.png","l":"en-US","ut":"2020-11-09T07:35:04"},{"rid":108,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/108/SGS-466aef35.png","l":"zh-CN","ut":"2020-12-01T03:24:24"},{"rid":108,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/108/SGS-466aef35.png","l":"en-US","ut":"2020-12-01T03:24:24"},{"rid":103,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/103/SGS-e98163a9.png","l":"en-US","ut":"2021-01-11T04:04:58"},{"rid":112,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/112/SGS-0538c773.png","l":"zh-CN","ut":"2021-01-21T02:38:33"},{"rid":112,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/112/SGS-0538c773.png","l":"en-US","ut":"2021-01-21T02:38:33"},{"rid":113,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/113/SGS-1754f37d.png","l":"zh-CN","ut":"2021-02-02T07:31:26"},{"rid":113,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/113/SGS-1754f37d.png","l":"en-US","ut":"2021-02-02T07:31:26"},{"rid":114,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/114/SGS-01607869.png","l":"zh-CN","ut":"2021-02-22T02:50:58"},{"rid":114,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/114/SGS-01607869.png","l":"en-US","ut":"2021-02-22T02:50:58"},{"rid":115,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/115/SGS-e31625c2.png","l":"zh-CN","ut":"2021-03-18T11:28:30"},{"rid":115,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/115/SGS-e31625c2.png","l":"en-US","ut":"2021-03-18T11:28:30"},{"rid":117,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/117/SGS-561c405f.png","l":"zh-CN","ut":"2021-04-19T02:01:43"},{"rid":117,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/117/SGS-561c405f.png","l":"en-US","ut":"2021-04-19T02:01:43"},{"rid":118,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/118/SGS-5cafd100.png","l":"zh-CN","ut":"2021-04-19T02:01:43"},{"rid":118,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/118/SGS-5cafd100.png","l":"en-US","ut":"2021-04-19T02:01:43"},{"rid":119,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/119/SGS-e7513a2b.png","l":"zh-CN","ut":"2021-05-24T03:43:13"},{"rid":119,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/119/SGS-e7513a2b.png","l":"en-US","ut":"2021-05-24T03:43:13"},{"rid":120,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/120/SGS-87e1ffad.png","l":"zh-CN","ut":"2021-06-21T04:33:50"},{"rid":120,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/120/SGS-87e1ffad.png","l":"en-US","ut":"2021-06-21T04:33:50"},{"rid":121,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/121/SGS-4cfbe2a6.png","l":"zh-CN","ut":"2021-06-21T04:33:51"},{"rid":121,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/121/SGS-4cfbe2a6.png","l":"en-US","ut":"2021-06-21T04:33:51"},{"rid":122,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/122/SGS-86e447da.png","l":"zh-CN","ut":"2021-06-21T04:33:51"},{"rid":122,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/122/SGS-86e447da.png","l":"en-US","ut":"2021-06-21T04:33:51"},{"rid":110,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/110/SGS-7acae095.png","l":"zh-CN","ut":"2021-06-24T07:49:50"},{"rid":110,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/110/SGS-7acae095.png","l":"en-US","ut":"2021-06-24T07:49:50"},{"rid":125,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/125/SGS-0d3e34ba.png","l":"zh-CN","ut":"2021-07-22T03:25:26"},{"rid":125,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/125/SGS-0d3e34ba.png","l":"en-US","ut":"2021-07-22T03:25:26"},{"rid":1,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/1/HoneyTrap_of_DiaoChan_168x168-b93b8e16.png","l":"en-US","ut":"2021-08-02T13:02:17"},{"rid":126,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/126/SGS-5ebaee9a.png","l":"zh-CN","ut":"2021-08-24T10:16:12"},{"rid":126,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/126/SGS-5ebaee9a.png","l":"en-US","ut":"2021-08-24T10:16:12"},{"rid":130,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/lucky-piggy/SGS-c0b6b25e.png","l":"zh-CN","ut":"2021-12-30T08:08:56"},{"rid":130,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/lucky-piggy/SGS-c0b6b25e.png","l":"en-US","ut":"2021-12-30T08:08:56"},{"rid":128,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/legend-perseus/SGS-c2ebc3d7.png","l":"zh-CN","ut":"2022-01-03T02:40:52"},{"rid":128,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/legend-perseus/SGS-c2ebc3d7.png","l":"en-US","ut":"2022-01-03T02:40:52"},{"rid":124,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/124/SGS-070082d5.png","l":"zh-CN","ut":"2022-01-14T03:12:52"},{"rid":124,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/124/SGS-070082d5.png","l":"en-US","ut":"2022-01-14T03:12:52"},{"rid":123,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/123/SGS-170fb26d.png","l":"zh-CN","ut":"2022-03-02T04:42:37"},{"rid":123,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/123/SGS-170fb26d.png","l":"en-US","ut":"2022-03-02T04:42:37"},{"rid":129,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/win-win-fpc/SGS-a2c5e701.png","l":"zh-CN","ut":"2022-04-08T09:00:08"},{"rid":129,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/win-win-fpc/SGS-a2c5e701.png","l":"en-US","ut":"2022-04-08T09:00:08"},{"rid":127,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/speed-winner/SGS-e140cbef.png","l":"zh-CN","ut":"2022-05-30T03:11:11"},{"rid":127,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/speed-winner/SGS-e140cbef.png","l":"en-US","ut":"2022-05-30T03:11:11"},{"rid":132,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/wild-coaster/SGS-3939262e.png","l":"zh-CN","ut":"2022-06-10T10:25:31"},{"rid":132,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/wild-coaster/SGS-3939262e.png","l":"en-US","ut":"2022-06-10T10:25:31"},{"rid":135,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/wild-bounty-sd/SGS-1625475e.png","l":"zh-CN","ut":"2022-06-21T08:53:46"},{"rid":135,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/wild-bounty-sd/SGS-1625475e.png","l":"en-US","ut":"2022-06-21T08:53:46"},{"rid":1340277,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/asgardian-rs/SGS-37513a96.png","l":"zh-CN","ut":"2022-06-22T10:22:41"},{"rid":1340277,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/asgardian-rs/SGS-37513a96.png","l":"en-US","ut":"2022-06-22T10:22:41"},{"rid":1312883,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/prosper-ftree/SGS-1d26f078.png","l":"zh-CN","ut":"2022-07-07T08:42:12"},{"rid":1312883,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/prosper-ftree/SGS-1d26f078.png","l":"en-US","ut":"2022-07-07T08:42:12"},{"rid":1338274,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/totem-wonders/SGS-74887bbd.png","l":"zh-CN","ut":"2022-07-13T03:29:58"},{"rid":1338274,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/totem-wonders/SGS-74887bbd.png","l":"en-US","ut":"2022-07-13T03:29:58"},{"rid":1418544,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/bakery-bonanza/SGS-5e2d74ba.png","l":"zh-CN","ut":"2022-08-17T10:07:49"},{"rid":1418544,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/bakery-bonanza/SGS-5e2d74ba.png","l":"en-US","ut":"2022-08-17T10:07:49"},{"rid":1372643,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/diner-delights/SGS-42fb6173.png","l":"zh-CN","ut":"2022-08-18T02:32:05"},{"rid":1372643,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/diner-delights/SGS-42fb6173.png","l":"en-US","ut":"2022-08-18T02:32:05"},{"rid":1368367,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/alchemy-gold/SGS-4f200843.png","l":"zh-CN","ut":"2022-10-04T02:49:18"},{"rid":1368367,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/alchemy-gold/SGS-4f200843.png","l":"en-US","ut":"2022-10-04T02:49:18"},{"rid":1402846,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/midas-fortune/SGS-b0cbf979.png","l":"zh-CN","ut":"2022-12-16T04:18:32"},{"rid":1402846,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/midas-fortune/SGS-b0cbf979.png","l":"en-US","ut":"2022-12-16T04:18:32"},{"rid":1543462,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/fortune-rabbit/SGS-cb51bf17.png","l":"zh-CN","ut":"2023-01-06T08:51:52"},{"rid":1543462,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/fortune-rabbit/SGS-cb51bf17.png","l":"en-US","ut":"2023-01-06T08:51:52"},{"rid":1420892,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/rave-party-fvr/SGS-7fae58b2.png","l":"zh-CN","ut":"2023-02-10T06:31:55"},{"rid":1420892,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/rave-party-fvr/SGS-7fae58b2.png","l":"en-US","ut":"2023-02-10T06:31:55"},{"rid":1381200,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/hawaiian-tiki/SGS-3173d9dd.png","l":"zh-CN","ut":"2023-02-21T09:08:36"},{"rid":1381200,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/hawaiian-tiki/SGS-3173d9dd.png","l":"en-US","ut":"2023-02-21T09:08:36"},{"rid":1448762,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/songkran-spl/SGS-80716155.png","l":"zh-CN","ut":"2023-03-30T02:10:20"},{"rid":1448762,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/songkran-spl/SGS-80716155.png","l":"en-US","ut":"2023-03-30T02:10:20"},{"rid":1432733,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/myst-spirits/SGS-16c3227e.png","l":"zh-CN","ut":"2023-04-17T10:24:16"},{"rid":1432733,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/myst-spirits/SGS-16c3227e.png","l":"en-US","ut":"2023-04-17T10:24:16"},{"rid":1513328,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/spr-golf-drive/SGS-506e64f1.png","l":"zh-CN","ut":"2023-05-15T08:27:29"},{"rid":1513328,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/spr-golf-drive/SGS-506e64f1.png","l":"en-US","ut":"2023-05-15T08:27:29"},{"rid":1601012,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/lucky-clover/SGS-dc7a6b49.png","l":"zh-CN","ut":"2023-06-06T08:46:35"},{"rid":1601012,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/lucky-clover/SGS-dc7a6b49.png","l":"en-US","ut":"2023-06-06T08:46:35"},{"rid":1397455,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/fruity-candy/SGS-52bc4515.png","l":"zh-CN","ut":"2023-07-04T10:31:01"},{"rid":1397455,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/fruity-candy/SGS-52bc4515.png","l":"en-US","ut":"2023-07-04T10:31:01"},{"rid":1473388,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/cruise-royale/SGS-5d34cf10.png","l":"zh-CN","ut":"2023-08-04T06:31:58"},{"rid":1473388,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/cruise-royale/SGS-5d34cf10.png","l":"en-US","ut":"2023-08-04T06:31:58"},{"rid":1594259,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/safari-wilds/SGS-2649f83a.png","l":"zh-CN","ut":"2023-08-24T02:59:31"},{"rid":1594259,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/safari-wilds/SGS-2649f83a.png","l":"en-US","ut":"2023-08-24T02:59:31"},{"rid":1572362,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/gladi-glory/SGS-561ca938.png","l":"zh-CN","ut":"2023-09-13T11:52:45"},{"rid":1572362,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/gladi-glory/SGS-561ca938.png","l":"en-US","ut":"2023-09-13T11:52:45"},{"rid":1529867,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/ninja-raccoon/SGS-81d12e83.png","l":"zh-CN","ut":"2023-10-11T03:40:52"},{"rid":1529867,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/ninja-raccoon/SGS-81d12e83.png","l":"en-US","ut":"2023-10-11T03:40:52"},{"rid":1489936,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/ult-striker/SGS-44177ef3.png","l":"zh-CN","ut":"2023-10-11T03:40:52"},{"rid":1489936,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/ult-striker/SGS-44177ef3.png","l":"en-US","ut":"2023-10-11T03:40:52"},{"rid":1568554,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/wild-heist-co/SGS-c6cd2748.png","l":"zh-CN","ut":"2023-10-25T04:36:49"},{"rid":1568554,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/wild-heist-co/SGS-c6cd2748.png","l":"en-US","ut":"2023-10-25T04:36:49"},{"rid":1555350,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/forge-wealth/SGS-b6c28d1e.png","l":"zh-CN","ut":"2023-11-08T06:15:09"},{"rid":1555350,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/forge-wealth/SGS-b6c28d1e.png","l":"en-US","ut":"2023-11-08T06:15:09"},{"rid":1580541,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/mafia-mayhem/SGS-1cdf4e86.png","l":"zh-CN","ut":"2023-11-30T08:42:38"},{"rid":1580541,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/mafia-mayhem/SGS-1cdf4e86.png","l":"en-US","ut":"2023-11-30T08:42:38"},{"rid":1655268,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/tsar-treasures/SGS-cbae2d00.png","l":"zh-CN","ut":"2023-12-08T05:13:17"},{"rid":1655268,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/tsar-treasures/SGS-cbae2d00.png","l":"en-US","ut":"2023-12-08T05:13:17"},{"rid":1615454,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/werewolf-hunt/SGS-3ffae844.png","l":"zh-CN","ut":"2023-12-19T02:55:01"},{"rid":1615454,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/werewolf-hunt/SGS-3ffae844.png","l":"en-US","ut":"2023-12-19T02:55:01"},{"rid":1451122,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/dragon-hatch2/SGS-8787a1fa.png","l":"zh-CN","ut":"2024-01-03T03:34:13"},{"rid":1451122,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/dragon-hatch2/SGS-8787a1fa.png","l":"en-US","ut":"2024-01-03T03:34:13"},{"rid":1695365,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/fortune-dragon/SGS-85d8c240.png","l":"zh-CN","ut":"2024-01-17T09:25:49"},{"rid":1695365,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/fortune-dragon/SGS-85d8c240.png","l":"en-US","ut":"2024-01-17T09:25:49"},{"rid":1671262,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/gemstones-gold/SGS-5443abf7.png","l":"zh-CN","ut":"2024-02-22T09:45:28"},{"rid":1671262,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/gemstones-gold/SGS-5443abf7.png","l":"en-US","ut":"2024-02-22T09:45:28"},{"rid":1682240,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/cash-mania/SGS-ab3ac88a.png","l":"zh-CN","ut":"2024-03-04T08:17:29"},{"rid":1682240,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/cash-mania/SGS-ab3ac88a.png","l":"en-US","ut":"2024-03-04T08:17:29"},{"rid":1508783,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/wild-ape-3258/SGS-b6ed6baa.png","l":"zh-CN","ut":"2024-03-21T04:05:18"},{"rid":1508783,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/wild-ape-3258/SGS-b6ed6baa.png","l":"en-US","ut":"2024-03-21T04:05:18"},{"rid":1492288,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/pinata-wins/SGS-eace3609.png","l":"zh-CN","ut":"2024-04-02T09:29:58"},{"rid":1492288,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/pinata-wins/SGS-eace3609.png","l":"en-US","ut":"2024-04-02T09:29:58"},{"rid":1717688,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/mystic-potions/SGS-f04c4b5e.webp","l":"zh-CN","ut":"2024-04-19T09:10:08"},{"rid":1717688,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/mystic-potions/SGS-f04c4b5e.webp","l":"en-US","ut":"2024-04-19T09:10:08"},{"rid":1623475,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/anubis-wrath/SGS-da674b7e.png","l":"zh-CN","ut":"2024-05-08T07:42:02"},{"rid":1623475,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/anubis-wrath/SGS-da674b7e.png","l":"en-US","ut":"2024-05-08T07:42:02"},{"rid":1635221,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/zombie-outbrk/SGS-f3471c49.webp","l":"zh-CN","ut":"2024-05-30T14:56:06"},{"rid":1635221,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/zombie-outbrk/SGS-f3471c49.webp","l":"en-US","ut":"2024-05-30T14:56:06"},{"rid":1738001,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/chicky-run/SGS-1ed0d491.png","l":"zh-CN","ut":"2024-06-14T06:12:09"},{"rid":1738001,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/chicky-run/SGS-1ed0d491.png","l":"en-US","ut":"2024-06-14T06:12:09"},{"rid":1778752,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/futebol-fever/SGS-331d23e5.webp","l":"zh-CN","ut":"2024-06-26T09:11:03"},{"rid":1778752,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/futebol-fever/SGS-331d23e5.webp","l":"en-US","ut":"2024-06-26T09:11:03"},{"rid":1760238,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/yakuza-honor/SGS-93fe1b73.webp","l":"zh-CN","ut":"2024-07-25T07:55:54"},{"rid":1760238,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/yakuza-honor/SGS-93fe1b73.webp","l":"en-US","ut":"2024-07-25T07:55:54"},{"rid":1747549,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/wings-iguazu/SGS-abbb0878.webp","l":"zh-CN","ut":"2024-08-14T07:24:18"},{"rid":1747549,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/wings-iguazu/SGS-abbb0878.webp","l":"en-US","ut":"2024-08-14T07:24:18"},{"rid":1648578,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/shark-bounty/SGS-0e0829e6.webp","l":"zh-CN","ut":"2024-08-16T09:32:57"},{"rid":1648578,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/shark-bounty/SGS-0e0829e6.webp","l":"en-US","ut":"2024-08-16T09:32:57"},{"rid":1727711,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/three-cz-pigs/SGS-340aa74b.webp","l":"zh-CN","ut":"2024-09-10T07:28:23"},{"rid":1727711,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/three-cz-pigs/SGS-340aa74b.webp","l":"en-US","ut":"2024-09-10T07:28:23"},{"rid":1815268,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/oishi-delights/SGS-eeec8be5.webp","l":"zh-CN","ut":"2024-09-25T12:37:50"},{"rid":1815268,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/oishi-delights/SGS-eeec8be5.webp","l":"en-US","ut":"2024-09-25T12:37:50"},{"rid":1755623,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/museum-mystery/SGS-a61ee567.webp","l":"zh-CN","ut":"2024-10-15T07:31:57"},{"rid":1755623,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/museum-mystery/SGS-a61ee567.webp","l":"en-US","ut":"2024-10-15T07:31:57"},{"rid":1786529,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/rio-fantasia/SGS-53a75db8.webp","l":"zh-CN","ut":"2024-11-01T07:52:06"},{"rid":1786529,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/rio-fantasia/SGS-53a75db8.webp","l":"en-US","ut":"2024-11-01T07:52:06"},{"rid":1666445,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/choc-deluxe/SGS-3253ef73.webp","l":"zh-CN","ut":"2024-11-20T02:34:09"},{"rid":1666445,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/choc-deluxe/SGS-3253ef73.webp","l":"en-US","ut":"2024-11-20T02:34:09"},{"rid":1702123,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/geisha-revenge/SGS-9aa2dc23.webp","l":"zh-CN","ut":"2024-12-04T08:15:58"},{"rid":1702123,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/geisha-revenge/SGS-9aa2dc23.webp","l":"en-US","ut":"2024-12-04T08:15:58"},{"rid":1879752,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/fortune-snake/SGS-8d0ab6ce.webp","l":"zh-CN","ut":"2024-12-26T04:47:27"},{"rid":1879752,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/fortune-snake/SGS-8d0ab6ce.webp","l":"en-US","ut":"2024-12-26T04:47:27"},{"rid":1850016,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/incan-wonders/SGS-19f2c2c0.webp","l":"zh-CN","ut":"2025-02-13T07:21:14"},{"rid":1850016,"rtid":14,"url":"https://public.pgsoft-games.com/pages/static/image/en/SocialGameSmall/incan-wonders/SGS-19f2c2c0.webp","l":"en-US","ut":"2025-02-13T07:21:14"}],"err":null}`;
                                // } else if (b8.indexOf("GameInfo") != -1) {
                                //     b9 = `{"dt":{"fb":{"is":true,"bm":100,"t":0.60},"wt":{"mw":3.0,"bw":5.0,"mgw":15.0,"smgw":35.0},"maxwm":null,"gcs":{},"abm":null,"cs":[0.03,0.1,0.3,0.9],"ml":[1,2,3,4,5,6,7,8,9,10],"mxl":20,"bl":100000.00,"inwe":false,"iuwe":false,"ls":{"si":{"wp":null,"lw":null,"orl":[7,6,7,9,10,9,8,3,8,3,1,4,5,2,4,6,0,2,0,10,4,3,8,3,1,4,5,2,7,6,7,9,10,9,8],"snww":null,"ssb":{"1":9,"2":11,"3":17,"4":23,"5":25},"ss":{"1":9,"2":11,"3":17,"4":23,"5":25},"fs":null,"rs":null,"ssaw":0.00,"ptbr":null,"sc":0,"mi":0,"wm":0,"lwa":0.00,"gwt":0,"ctw":0.0,"pmt":null,"cwc":0,"fstc":null,"pcwc":0,"rwsp":null,"hashr":null,"fb":null,"ab":null,"ml":2,"cs":0.3,"rl":[7,6,7,9,10,9,8,3,8,3,1,4,5,2,4,6,0,2,0,10,4,3,8,3,1,4,5,2,7,6,7,9,10,9,8],"sid":"0","psid":"0","st":1,"nst":1,"pf":0,"aw":0.00,"wid":0,"wt":"C","wk":"0_C","wbn":null,"wfg":null,"blb":0.00,"blab":0.00,"bl":100000.00,"tb":0.00,"tbb":0.00,"tw":0.00,"np":0.00,"ocr":null,"mr":null,"ge":null}},"cc":"PGC"},"err":null}`;
                                // } else if (b8.indexOf("GameName") != -1) {
                                //     b9 = `{"dt":{"31":"至尊百家乐"},"err":null}`;
                                // } else {
                                //     b9 = `{"dt":{"oj":{"jid":1},"pid":"0","pcd":"","tk":"8E972042-8915-4A62-A447-76C31536C861","st":1,"geu":"https://api.pg-demo.com/game-api/mahjong-ways2/","lau":"https://api.pg-demo.com/game-api/lobby/","bau":"https://api.pg-demo.com/web-api/game-proxy/","cc":"PGC","cs":"","nkn":"","gm":[{"gid":74,"msdt":1585731055000,"medt":1585731055000,"st":1,"amsg":""}],"uiogc":{"bb":1,"gec":1,"cbu":0,"cl":0,"mr":0,"phtr":0,"vc":0,"bfbsi":0,"bfbli":0,"il":0,"rp":0,"gc":0,"ign":0,"tsn":0,"we":0,"gsc":1,"bu":0,"pwr":0,"hd":0,"igv":0,"grt":0,"ivs":0,"ir":0,"gvs":0,"hn":1,"swfbsi":0,"swfbli":0,"grtp":0,"bf":0,"et":0,"np":0,"as":1000,"asc":1,"std":0,"hnp":0,"ts":1,"smpo":0,"swf":0,"sp":0,"rcf":0,"sbb":0,"hwl":0},"ec":[],"occ":{"rurl":"","tcm":"这是试玩模式","tsc":1000000,"ttp":43200,"tlb":"继续","trb":"退出"},"gcv":"1.0.1.11","ioph":"989fa4e81fc6","sdn":"","jc":{"grtp":0,"bf":0,"et":0,"np":0,"as":1000,"asc":1,"std":0,"hnp":0,"ts":1,"smpo":0,"swf":0,"sp":0,"rcf":0,"sbb":0,"hwl":0}},"err":null}`;
                                // }
                                // b9 = JSON.parse(b9);

                                this.data = this.transformResponse(b9);
                            };
                            b7.isHttpStatusError = function (b8) {
                                var b9 = b8.status;
                                return (b9 < 200 || b9 > 299) && !(b9 === 0 && b8.response != null);
                            };
                            b7.transformResponse = function (b8) {
                                return b8;
                            };
                            return b7;
                        })()
                    );
                    Q(
                        "XHR",
                        (function () {
                            function b7(b8, b9) {
                                this.timeout = 60000;
                                this.serializer = b8 || new b5();
                                this.deserializer = b9 || new b6("json");
                            }
                            b7.prototype.get = function (b8, b9, bs) {
                                return this.request("GET", b8, b9, bs);
                            };
                            b7.prototype.head = function (b8, b9, bs) {
                                return this.request("HEAD", b8, b9, bs);
                            };
                            b7.prototype.post = function (b8, b9, bs) {
                                return this.request("POST", b8, b9, bs);
                            };
                            b7.prototype.put = function (b8, b9, bs) {
                                return this.request("PUT", b8, b9, bs);
                            };
                            b7.prototype.patch = function (b8, b9, bs) {
                                return this.request("PATCH", b8, b9, bs);
                            };
                            b7.prototype.delete = function (b8, b9, bs) {
                                return this.request("DELETE", b8, b9, bs);
                            };
                            b7.prototype.request = function (b8, b9, bs, bb) {
                                // debugger;
                                if (bb === undefined) {
                                    if (typeof bs != "function") {
                                        throw Error("Invalid arguments");
                                    }
                                    bb = bs;
                                    bs = undefined;
                                }
                                var ba;
                                var bY = this.serializer;
                                var bj = this.deserializer;
                                var bO = new XMLHttpRequest();
                                var bx =
                                    shell.environment.getURLSearchParam().get("otid") ||
                                    `${(function () {
                                        for (var bu = [], br = 0; br < 6; br++) {
                                            bu.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(Math.random() * 26)));
                                        }
                                        return bu.join("");
                                    })()}${(ba = new Date().getUTCDate() + "").length > 1 ? ba : `0${ba}`}`;
                                var bZ = (function (bu, br) {
                                    if (bu.indexOf("?") !== -1) {
                                        return `${bu}&traceId=${br}`;
                                    } else {
                                        return `${bu}?traceId=${br}`;
                                    }
                                })(b9, bx);
                                var bQ = bY.serializing(b8, bZ, bs);
                                if (bQ) {
                                    // TOLOOK
                                    setTimeout(function () {
                                        bb(bQ, undefined);
                                    }, 0);
                                    return bO;
                                }
                                bO.open(b8, bY.url, true);
                                bO.timeout = this.timeout;
                                bO.onload = function () {
                                    var bu = undefined;
                                    if (b6.isHttpStatusError(bO)) {
                                        bu = new b4(b3.Domain, b3.HttpStatusError + bO.status, bx);
                                        bj.data = undefined;
                                    } else {
                                        bu = bj.deserializing(bO);
                                    }
                                    if (bu) {
                                        bb(bu, undefined);
                                    } else {
                                        bb(undefined, bj.data);
                                    }
                                };
                                bO.onerror = function () {
                                    var bu = new b4(b3.Domain, b3.HttpNetworkError, bx);
                                    bb(bu, undefined);
                                };
                                bO.ontimeout = function () {
                                    var bu = new b4(b3.Domain, b3.HttpTimeoutError, bx);
                                    bb(bu, undefined);
                                };
                                bO.onabort = function () {
                                    var bu = new b4(b3.Domain, b3.HttpAbortError, bx);
                                    bb(bu, undefined);
                                };
                                bO.responseType = bj.type;
                                if (bj.mimeType) {
                                    bO.overrideMimeType(bj.mimeType);
                                }
                                var bd = bY.headers;
                                if (bd) {
                                    for (var bK in bd) {
                                        if (Object.prototype.hasOwnProperty.call(bd, bK)) {
                                            bO.setRequestHeader(bK, bd[bK]);
                                        }
                                    }
                                }
                                bO.send(bY.body);

                                // var bu = undefined;
                                // bu = bj.deserializing(bY.url);

                                // console.log("bj.data", bj.data);
                                // if (bu) {
                                //     bb(bu, undefined);
                                // } else {
                                //     bb(undefined, bj.data);
                                // }
                                return bO;
                            };
                            return b7;
                        })()
                    );
                    Z.io = sh.io;
                    su(function (b7) {
                        su(
                            sK(0),
                            sN
                        )(function (b8) {
                            if (b7) {
                                b7(b8);
                            }
                        });
                    })(function (b7, b8) {
                        if (b8) {
                            throw Error(b8.message);
                        }
                        if (b7 && b7.J) {
                            b7.J();
                        }
                    });
                    Q("default", sh.io);
                },
            };
        });
    })();
})();
