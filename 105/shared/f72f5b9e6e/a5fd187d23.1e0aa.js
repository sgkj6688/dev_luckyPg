(function () {
    "use strict";

    (function () {
        var P;
        (function (z) {
            z.bv_t = "window";
            z.bv_e = "self";
        })(P || (P = {}));
        var Q = (0, eval)("this");
        Q[P.bv_e];
        var W = Q[P.bv_t];
        System.register(["ba588d9dad", "99212c6ec4", "3d9bb7755c", "6d5cafebdb", "react", "react-dom"], function (z) {
            "use strict";

            var R;
            var B;
            var g;
            var T;
            var M;
            var E;
            var D;
            var w;
            var m;
            var v;
            var y;
            var k;
            return {
                setters: [
                    null,
                    function (N) {
                        R = N.ResRC;
                        B = N.Utils;
                        g = N.Deserialiser;
                        T = N.XHR;
                        M = N.Preference;
                        E = N.CanvasResizeBroadcaster;
                    },
                    function (N) {
                        D = N.LoginMethod;
                        w = N.LoginGameStatus;
                    },
                    null,
                    function (N) {
                        m = N.default;
                        v = N.useState;
                        y = N.useEffect;
                    },
                    function (N) {
                        k = N.default;
                    },
                ],
                execute: function () {
                    z("getGameContext", OK);
                    var O0 = W.__extends;
                    var O1 = W.__assign;
                    var O2 = W.__decorate;
                    var O3 = W.__awaiter;
                    var O4 = W.__generator;
                    var O5 = W.__spreadArray;
                    function O6(zd, zH) {
                        var zS = {};
                        for (var zY in zH) {
                            if (zd.hasOwnProperty(zY)) {
                                zS[zd[zY]] = zH[zY];
                            } else {
                                zS[zY] = zH[zY];
                            }
                        }
                        return zS;
                    }
                    O6(
                        {
                            unloadBundleAsset: "releaseBundleAsset",
                            unload: "release",
                            unloadBundle: "releaseBundle",
                            deleteBundle: "removeBundle",
                            loadByBundleAsset: "loadBundleAsset",
                            loadRemoteBySingle: "loadRemoteSingle",
                        },
                        R
                    );
                    var O7 = O6(
                        {
                            convertNodeSpace: "convertToNodeSpace",
                            convertNodeSpaceAR: "convertToNodeSpaceAR",
                            getAbsolutePos: "getAbsolutePosition",
                            getAbsoluteXPos: "getAbsoluteX",
                            getAbsoluteYPos: "getAbsoluteY",
                            setAbsolutePos: "setAbsolutePosition",
                            setAbsoluteXPos: "setAbsoluteX",
                            setAbsoluteYPos: "setAbsoluteY",
                            transferToNewParent: "transferToParent",
                            getSharedSimpleScheduler: "getSharedScheduler",
                            delay: "delayCallback",
                            timeout: "timeoutCallback",
                            selector: "selectorCallback",
                            sequence: "sequenceCallback",
                            spawn: "spawnCallback",
                            waterfall: "waterfCallback",
                            condition: "condCallback",
                            defer: "deferCallback",
                            tick: "tickCallback",
                            observe: "observeCallback",
                            formatLeadingZero: "formatTwoDigit",
                            formatDateTime: "formatDate",
                            isRightToLeft: "isRTL",
                            getLocationProtocol: "getProtocol",
                            getLocationOrigin: "getOrigin",
                        },
                        B
                    );
                    function O8(zd) {
                        return Object.prototype.toString.call(zd) === "[object Object]";
                    }
                    function O9(zd) {
                        var zH = undefined;
                        if (O8(zd) && zd.hasOwnProperty("err") && zd.hasOwnProperty("dt")) {
                            var zS = zd.err;
                            if (zS) {
                                zH = (function (zY) {
                                    var h0;
                                    if (!O8(zY)) {
                                        zY = {};
                                    }
                                    if (
                                        !(
                                            zY.hasOwnProperty("cd") &&
                                            (typeof (h0 = zY.cd) == "number" || (typeof h0 == "string" && h0 !== "" && !/\s/.test(h0) && !isNaN(+h0)))
                                        )
                                    ) {
                                        zY.cd = 6501;
                                    }
                                    return new (0, shell.Error)(shell.ServerError.Domain, zY.cd, zY.tid);
                                })(zS);
                            }
                        } else {
                            zH = new (0, shell.Error)(shell.ServerError.Domain, 6501);
                        }
                        return zH;
                    }
                    function OO(zd) {
                        return function (zH, zS) {
                            zH = zH || O9(zS);
                            zd(zH, zS);
                        };
                    }
                    function OU(zd, zH, zS, zY) {
                        var h0 = zd.request("POST", zH, zS, OO(zY));
                        return function () {
                            return h0.abort();
                        };
                    }
                    z(
                        "XHRHelper",
                        Object.freeze({
                            __proto__: null,
                            extractError: O9,
                            postRequest: OU,
                            responseCallbackWrapper: OO,
                        })
                    );
                    var Ob;
                    var OZ = (function (zd) {
                        function zH() {
                            var zS = (zd !== null && zd.apply(this, arguments)) || this;
                            zS.transformResponse = function (zY) {
                                return zY;
                            };
                            return zS;
                        }
                        O0(zH, zd);
                        return zH;
                    })(g);
                    var OP = z(
                        "XHRHandler",
                        (function () {
                            function _zd() {
                                this.bv_n = undefined;
                                this.bv_i = undefined;
                                this.bv_r = undefined;
                                this.bv_a = new OZ("json");
                                this.bv_o = new T(undefined, this.bv_a);
                            }
                            _zd.prototype.setAPIUrls = function (zH) {
                                this.bv_n = zH.getFullGameEngineUrl();
                                this.bv_i = zH.getFullServiceEngineUrl();
                                this.bv_r = zH.getFullServiceEngineUrlSD();
                            };
                            _zd.prototype.request = function (zH, zS, zY) {
                                return OU(this.bv_o, this.bv_n + zH, zS, zY);
                            };
                            _zd.prototype.serviceRequest = function (zH, zS, zY) {
                                return OU(this.bv_o, this.bv_i + zH, zS, zY);
                            };
                            _zd.prototype.serviceSDRequest = function (zH, zS, zY) {
                                return OU(this.bv_o, this.bv_r + zH, zS, zY);
                            };
                            _zd.prototype.operatorApiRequest = function () {
                                return O7.emptyFunc;
                            };
                            return _zd;
                        })()
                    );
                    (function (zd) {
                        zd[(zd.Low = 250)] = "Low";
                        zd[(zd.Medium = 500)] = "Medium";
                        zd[(zd.High = 750)] = "High";
                    })(Ob || (Ob = {}));
                    var OQ;
                    var OW;
                    var Oz = {
                        Low: Ob.Low,
                        Medium: Ob.Medium,
                        High: Ob.High,
                    };
                    function Oh(zd) {
                        return function () {
                            return zd
                                .reduce(function (zH, zS) {
                                    return zH.then(function (zY) {
                                        if (zY) {
                                            return zS();
                                        } else {
                                            return zY;
                                        }
                                    });
                                }, W.Promise.resolve(1))
                                .catch(function () {
                                    return 0;
                                });
                        };
                    }
                    function OR(zd, zH) {
                        if (zd < 0) {
                            return zH.substring(W.Number("0x0"), zH.length + zd);
                        } else {
                            return zH.substring(zd);
                        }
                    }
                    function OB(zd) {
                        return OR(1, zd);
                    }
                    function Og(zd) {
                        return OR(2, zd);
                    }
                    function Ol(zd, zH, zS) {
                        return !(!zd || !zH) && (zS ? zd.substring(W.Number("0x0"), zH.length) === zH : zd === zH);
                    }
                    function OT() {
                        var zd = "subtle";
                        var zH = Ou(W, "crypto");
                        return !(!zH || OM(zH, zd) || !OD(zH, zd));
                    }
                    function Oc(zd) {
                        return (zd + "").indexOf("[native code]") !== -1;
                    }
                    function OM(zd, zH) {
                        return W.Object.prototype.hasOwnProperty.call(zd, zH);
                    }
                    function OE(zd, zH) {
                        if (zd) {
                            if (zd.get) {
                                if (Oc(zd.get)) {
                                    return zd.get.apply(zH);
                                } else {
                                    return undefined;
                                }
                            } else {
                                return zd.value;
                            }
                        } else {
                            return zd;
                        }
                    }
                    function Ou(zd, zH) {
                        try {
                            return OE(W.Object.getOwnPropertyDescriptor(zd, zH), zd);
                        } catch (zS) {}
                    }
                    function OD(zd, zH) {
                        try {
                            var zS = W.Object.getPrototypeOf(zd);
                            return OE(W.Object.getOwnPropertyDescriptor(zS, zH), zd);
                        } catch (zY) {}
                    }
                    function Ow(zd, zH) {
                        if (zH === undefined) {
                            zH = W;
                        }
                        return Of(zd)
                            .split(".")
                            .reduce(function (zS, zY) {
                                if (zS != null) {
                                    return Ou(zS, zY);
                                } else {
                                    return zS;
                                }
                            }, zH);
                    }
                    function Om() {
                        return (
                            [" Math.random", " parseInt", " setTimeout ", " Date ", " Date.now"].find(function (zd) {
                                return !Oc(Ow(zd));
                            }) == null
                        );
                    }
                    function Ov(zd) {
                        for (
                            var zH = [
                                    " SamsungBrowser",
                                    "UCBrowser",
                                    " Quark",
                                    "QQBrowser",
                                    " OppoBrowser",
                                    " VivoBrowser",
                                    " 360(SE|EE) ",
                                    " b(?:ai)?d(?:u)?browser ",
                                ],
                                zS = [],
                                zY = 0;
                            zd;

                        ) {
                            if (zd & 1 && zY < zH.length) {
                                zS.push(Of(zH[zY]));
                            }
                            zd >>= 1;
                            zY++;
                        }
                        if (zS.length) {
                            var h0 = new W.RegExp(zS.join(Of(" | ")), Of(" i "));
                            return function () {
                                return h0.test(W.navigator.userAgent);
                            };
                        }
                        return function () {
                            return false;
                        };
                    }
                    function Oy(zd) {
                        var zH = ["deDate", "elocation", "dohost", "ehostname", "deMath", "eparseInt", "dneval"][zd];
                        return zH.substring(W.Number("0xf") - W.Number("0x0" + zH[0]));
                    }
                    function Ok() {
                        return ON(1, W[Oy(4)].random() * 20);
                    }
                    function Of(zd) {
                        return zd.replace(/ /g, "");
                    }
                    function ON(zd, zH) {
                        return zd === W[Oy(4)].max(zd, zH);
                    }
                    function Oj(zd) {
                        var zH;
                        var zS;
                        (function (h6) {
                            h6.bv_u = "name";
                            h6.bv_c = "hash";
                        })(zS || (zS = {}));
                        var zY = "HMAC";
                        var h0 = "SHA-256";
                        var h1 = "sign";
                        var h2 = (zH = W.crypto) === null || zH === undefined ? undefined : zH.subtle;
                        var h3 = new W.TextEncoder();
                        var h4 = (function (h6) {
                            var h7 = {
                                [zS.bv_u]: zY,
                                [zS.bv_c]: h0,
                            };
                            var h8 = h2 == null ? undefined : h2.importKey("raw", h3.encode(h6).buffer, h7, false, [h1]);
                            return W.Promise.resolve(h8);
                        })(zd);
                        function _h(h6) {
                            return O3(this, undefined, undefined, function () {
                                var h7;
                                var h8;
                                var h9;
                                return O4(this, function (hO) {
                                    switch (hO.label) {
                                        case 0:
                                            return [4, h4];
                                        case 1:
                                            if ((h7 = hO.sent())) {
                                                h8 = h3.encode(h6).buffer;
                                                (h9 = {})[zS.bv_u] = zY;
                                                h9[zS.bv_c] = h0;
                                                return [4, h2[h1](h9, h7, h8)];
                                            } else {
                                                return [2, ""];
                                            }
                                        case 2:
                                            return [
                                                2,
                                                ((hU = hO.sent()),
                                                new W.Uint8Array(hU).reduce(function (hb, hZ) {
                                                    return hb + W.Number(hZ).toString(16).padStart(2, "0");
                                                }, "")),
                                            ];
                                    }
                                    var hU;
                                });
                            });
                        }
                        return function (h6, h7, h8) {
                            if (h8 === undefined) {
                                h8 = true;
                            }
                            return O3(this, undefined, undefined, function () {
                                return O4(this, function (h9) {
                                    switch (h9.label) {
                                        case 0:
                                            if (h7 && h6) {
                                                return [4, _h(h6)];
                                            } else {
                                                return [2, false];
                                            }
                                        case 1:
                                            return [2, Ol(h9.sent(), h7, h8)];
                                    }
                                });
                            });
                        };
                    }
                    function OK() {
                        return OQ;
                    }
                    function OC() {
                        return OW;
                    }
                    z("BVFrameworkEnum", {
                        EN_GAME_LAYER_Z_INDEX_LOW: Ob.Low,
                        EN_GAME_LAYER_Z_INDEX_MEDIUM: Ob.Medium,
                        EN_GAME_LAYER_Z_INDEX_HIGH: Ob.High,
                    });
                    z(
                        "default",
                        (function (zd) {
                            function zH() {
                                return (zd !== null && zd.apply(this, arguments)) || this;
                            }
                            O0(zH, zd);
                            zH.prototype.onCreate = function () {
                                OW = this.context;
                                var zS = shell.getGameContext();
                                var zY = zS.event;
                                zS.on = zY.on.bind(zY);
                                zS.off = zY.off.bind(zY);
                                zS.once = zY.once.bind(zY);
                                zS.emit = zY.emit.bind(zY);
                                (OQ = zS).on("Game.RequestLayerType", function (h0) {
                                    var h1 = h0.payload;
                                    if (h1 === "All") {
                                        h0.response = Oz;
                                    } else {
                                        var h2 = Ob[h1];
                                        if (!h2) {
                                            h2 = Ob.Low;
                                        }
                                        h0.response = h2;
                                    }
                                });
                                (function (h0) {
                                    var h1;
                                    h1 = h0;
                                    var h2 = new W.Promise(function (h6, h7) {
                                        h1.once(
                                            "Login.OnLogin",
                                            function (h8) {
                                                var h9 = h8.payload;
                                                var hO = h9.err;
                                                var hU = h9.res;
                                                if (hO) {
                                                    h7();
                                                } else {
                                                    h6(hU.operatorPromotionId);
                                                }
                                            },
                                            undefined
                                        );
                                    });
                                    h2.catch(function () {});
                                    var h3;
                                    var h4 = (function (h6) {
                                        return new W.Promise(function (h7) {
                                            var h8 = false;
                                            var h9 = "Shell.BootStateChanged";
                                            h6.on(
                                                h9,
                                                function hO(hU) {
                                                    if (!h8) {
                                                        if (hU.payload === "LatePluginLoad") {
                                                            h8 = true;
                                                            h7();
                                                            W.Promise.resolve().then(function () {
                                                                return h6.off(h9, hO, undefined);
                                                            });
                                                        }
                                                    }
                                                },
                                                undefined
                                            );
                                        });
                                    })(h0);
                                    function h5(h6, h7) {
                                        var h8 = h4.then(function () {
                                            return (function (h9) {
                                                return new W.Promise(function (hO, hU) {
                                                    h9.emit("Game.RequestSession", undefined, function (hb) {
                                                        var hZ = hb.response;
                                                        if (hZ) {
                                                            var hP = hZ.token;
                                                            var hQ = hZ.sessionId;
                                                            var hW = hZ.gameId;
                                                            var hz = hZ.operatorToken;
                                                            hO({
                                                                bv_s: hP,
                                                                bv_l: hQ,
                                                                bv_f: hW,
                                                                bv_h: hz,
                                                            });
                                                        } else {
                                                            hU();
                                                        }
                                                    });
                                                });
                                            })(h0);
                                        });
                                        h8.catch(function () {});
                                        W.Promise.all([h2, h8])
                                            .then(
                                                function (h9) {
                                                    h9[1].bv_d = h9[0];
                                                    return (function (hO) {
                                                        return O3(this, undefined, undefined, function () {
                                                            var hU;
                                                            var hb;
                                                            var hZ;
                                                            return O4(this, function (hP) {
                                                                switch (hP.label) {
                                                                    case 0:
                                                                        hU = Oj(Og("suER3N4z2BqFg9VCYg"));
                                                                        hb = hO.bv_d;
                                                                        hZ = function () {
                                                                            return O3(this, undefined, undefined, function () {
                                                                                var hQ;
                                                                                return O4(this, function (hW) {
                                                                                    switch (hW.label) {
                                                                                        case 0:
                                                                                            hQ = (function (hz) {
                                                                                                return (
                                                                                                    W[Oy(1)][Oy(2)] +
                                                                                                    W.String(hz.bv_f) +
                                                                                                    hz.bv_h +
                                                                                                    W.encodeURIComponent(hz.bv_s)
                                                                                                );
                                                                                            })(hO);
                                                                                            return [4, hU(hQ, hb, true)];
                                                                                        case 1:
                                                                                            if (hW.sent()) {
                                                                                                return [2, true];
                                                                                            } else {
                                                                                                return [2, false];
                                                                                            }
                                                                                    }
                                                                                });
                                                                            });
                                                                        };
                                                                        return [4, hZ()];
                                                                    case 1:
                                                                        return [2, hP.sent()];
                                                                }
                                                            });
                                                        });
                                                    })(h9[1]);
                                                },
                                                function () {
                                                    return W.Promise.resolve(true);
                                                }
                                            )
                                            .then(function (h9) {
                                                h6(h9);
                                            }, h7);
                                    }
                                    h0.on(
                                        "Game.SendApiResponse",
                                        function (h6) {
                                            h6.intercept();
                                            if (!h3) {
                                                h3 = (function () {
                                                    return O3(this, undefined, undefined, function () {
                                                        var h7;
                                                        return O4(this, function (h8) {
                                                            switch (h8.label) {
                                                                case 0:
                                                                    (h7 = [Om]).push(OT);
                                                                    return [4, Oh((h7 = h7.concat([Ok])))()];
                                                                case 1:
                                                                    if (h8.sent()) {
                                                                        return [2, new W.Promise(h5)];
                                                                    } else {
                                                                        return [2, true];
                                                                    }
                                                            }
                                                        });
                                                    });
                                                })();
                                            }
                                            h3.then(
                                                function (h7) {
                                                    h6.response = h7;
                                                    h6.propagate();
                                                },
                                                function () {
                                                    h6.response = false;
                                                    h6.propagate();
                                                }
                                            );
                                        },
                                        undefined
                                    );
                                })(OW.event);
                                this.complete();
                            };
                            return O2([plugin.PluginMainComponent("f72f5b9e6e")], zH);
                        })(plugin.AbstractPluginComponent)
                    );
                    var OI;
                    var Ox = false;
                    var OL = 0;
                    (function (zd) {
                        zd[(zd.SLOT = 1)] = "SLOT";
                        zd[(zd.CARD = 2)] = "CARD";
                    })(OI || (OI = {}));
                    var OJ;
                    var Op = {
                        label: shell.I18n.t("General.ResourceLoadingMessage"),
                        isFullBackground: true,
                        enableBackground: true,
                        opacity: 1,
                        inAnimate: "Fade",
                        inDuration: 0.3,
                        inValue: 0,
                        outAnimate: "Fade",
                        outValue: 0,
                        outDuration: 0.3,
                    };
                    function Os(zd) {
                        var zH;
                        var zS = zd.theme;
                        var zY = zd.backgroundColor;
                        var h0 = zd.titleColor;
                        var h1 = zd.messageColor;
                        var h2 = zd.buttonColor;
                        var h3 = zd.buttonTitleColor;
                        var h4 = zd.buttonFontWeight;
                        var h5 = zd.buttonFontStyle;
                        var h6 = OK();
                        h6.on("Shell.BootStateChanged", Oq);
                        switch (zS) {
                            case OI.SLOT:
                                zH = "Slot";
                                break;
                            case OI.CARD:
                                zH = "Card";
                                break;
                            default:
                                throw Error("Notify - invalid theme");
                        }
                        var h7 = {};
                        h7 = h2.gradient
                            ? {
                                  gradient: h2.gradient,
                              }
                            : {
                                  color: h2,
                              };
                        h7 = O1(
                            {
                                fontColor: h3,
                                fontWeight: h4,
                                fontStyle: h5,
                            },
                            h7
                        );
                        h6.emit("Alert.UpdateTheme", {
                            theme: zH,
                            style: {
                                backgroundColor: zY,
                                titleColor: h0,
                                contentColor: h1,
                                button: h7,
                            },
                        });
                    }
                    function OV(zd, zH) {
                        if (Ox) {
                            OK().emit("Toast.Show", {
                                toastStyle: "Message",
                                message: zd,
                                duration: zH,
                                imageSrc: "",
                                toastPosition: "Bottom",
                            });
                        } else {
                            shell.setProgressMessage(zd);
                        }
                    }
                    function OF(zd) {
                        var zH = [];
                        var zS = (function (zY, h0) {
                            var h1 = [];
                            var h2 = 0;
                            if (zY.actions) {
                                zY.actions.forEach(function (h3) {
                                    h1.push({
                                        label: h3.title,
                                        handler: h2,
                                    });
                                    h0.push(h3.handler);
                                    h2++;
                                });
                            }
                            return {
                                title: zY.title_message,
                                content: zY.content_message,
                                actions: h1,
                            };
                        })(zd, zH);
                        OK().emit("Alert.Show", zS, function (zY) {
                            var h0 = zY.response;
                            var h1 = zH[h0];
                            if (h1) {
                                h1();
                            }
                        });
                        return zS;
                    }
                    function Oq(zd) {
                        if (zd.payload === "GameStarted") {
                            Ox = true;
                            OK().off("Shell.BootStateChanged", Oq);
                        }
                    }
                    function OX(zd) {
                        if (OL === 0) {
                            var zH = false;
                            if (zd) {
                                var zS = {
                                    backgroundColor: zd.backgroundColor,
                                    iconColor: zd.iconColor,
                                    labelColor: zd.labelColor,
                                };
                                OK().emit("Loading.UpdateTheme", zS);
                                zH = !(!zd.iconColor && !zd.labelColor);
                            }
                            var zY = zH
                                ? Op
                                : Object.assign(Op, {
                                      color: shell.uiAppearance.v("game.theme_color"),
                                  });
                            OK().emit("Loading.Show", zY);
                        }
                        OL++;
                    }
                    function OG() {
                        if (OL !== 0 && --OL == 0) {
                            OK().emit("Loading.Hide");
                        }
                    }
                    z(
                        "Notify",
                        Object.freeze({
                            __proto__: null,
                            get ThemeType() {
                                return OI;
                            },
                            hideFullLoadingPage: OG,
                            initNotify: Os,
                            showDialog: OF,
                            showFullLoadingPage: OX,
                            showMessage: OV,
                            showNotification: function (zd) {
                                if (Ox) {
                                    OK().emit(
                                        "Toast.Show",
                                        {
                                            toastStyle: "Notification",
                                            imageSrc: zd.imageSrc,
                                            message: zd.message,
                                            duration: zd.duration,
                                            toastPosition: "Bottom",
                                        },
                                        zd.eventCallback
                                    );
                                }
                            },
                            showToast: function (zd) {
                                if (Ox) {
                                    OK().emit(
                                        "Toast.Show",
                                        {
                                            toastStyle: "Notification",
                                            message: zd.message,
                                            duration: zd.duration,
                                            toastPosition: "Bottom",
                                            imageSrc: "",
                                        },
                                        zd.eventCallback
                                    );
                                }
                            },
                        })
                    );
                    (function (zd) {
                        zd[(zd.NORMAL = 1)] = "NORMAL";
                        zd[(zd.TRIAL = 2)] = "TRIAL";
                        zd[(zd.TOURNAMENT = 3)] = "TOURNAMENT";
                    })(OJ || (OJ = {}));
                    var OA = O7.timeoutCallback;
                    function Od(zd) {
                        shell.ga.sendTiming(shell.ga.CATEGORY_ACCESS, shell.ga.EVENT_LOGIN, Date.now() - zd);
                    }
                    function OH(zd, zH) {
                        var zS = OK();
                        var zY = {
                            category: shell.ga.CATEGORY_ACCESS,
                            domain: zd.domain,
                            code: zd.code,
                            error: "Login Failed",
                            retry: zH > 0 ? zH : undefined,
                        };
                        zS.emit("Error.Report", zY);
                    }
                    var OS;
                    var OY;
                    var U0;
                    var U1;
                    function U2(zd) {
                        switch (zd.loginMethod) {
                            case D.Web:
                                (function (zH) {
                                    var zS = Date.now();
                                    var zY = zH.on_complete;
                                    var h0 = zH.on_error;
                                    var h1 = zH.on_show;
                                    var h2 = zH.on_dismiss;
                                    var h3 = OK();
                                    if (h1) {
                                        h3.once("Login.OnShow", h1);
                                    }
                                    if (h2) {
                                        h3.once("Login.OnDismiss", h2);
                                    }
                                    h3.once("Login.OnLogin", function (h4) {
                                        var h5 = h4.payload;
                                        var h6 = h5.err;
                                        var h7 = h5.res;
                                        if (h6) {
                                            OH(h6, 0);
                                            h0(h6);
                                        } else {
                                            Od(zS);
                                            zY(h7);
                                        }
                                    });
                                    h3.emit("Login.Login", {
                                        apiDomain: zH.apiDomain,
                                        loginMethod: zH.loginMethod,
                                        gameId: zH.gameId,
                                        bundleId: zH.bundleId,
                                        operatorToken: zH.operatorToken,
                                        operatorPlayerSession: zH.operatorPlayerSession,
                                        playerSession: zH.playerSession,
                                        operatorParam: zH.operatorParam,
                                        betType: zH.betType,
                                        redirectOption: zH.redirectOption,
                                    });
                                })(zd);
                                break;
                            case D.Session:
                            default:
                                (function (zH) {
                                    var zS = Date.now();
                                    var zY = zH.on_complete;
                                    var h0 = zH.on_error;
                                    var h1 = zH.on_show;
                                    var h2 = zH.on_dismiss;
                                    var h3 = zH.maxRetryCount === undefined ? 5 : zH.maxRetryCount;
                                    var h4 = OK();
                                    if (zH.betType === OJ.TRIAL || zH.operatorPlayerSession || zH.playerSession) {
                                        var h5 = 0;
                                        function h6() {
                                            if (h1) {
                                                h4.once("Login.OnShow", h1);
                                            }
                                            if (h2) {
                                                h4.once("Login.OnDismiss", h2);
                                            }
                                            h4.once("Login.OnLogin", function (h9) {
                                                var hO = h9.payload;
                                                var hU = hO.err;
                                                var hb = hO.res;
                                                if (hU) {
                                                    OH(hU, h5);
                                                    if (
                                                        !(function (hZ) {
                                                            return hZ.shouldRetry;
                                                        })(hU) ||
                                                        h5 >= h3
                                                    ) {
                                                        h0(hU);
                                                    } else {
                                                        (function (hZ) {
                                                            OV(
                                                                shell.I18n.t("Login.LoginFail", {
                                                                    times: {
                                                                        ordinal: hZ,
                                                                    },
                                                                }),
                                                                2
                                                            );
                                                        })(++h5);
                                                        OA(1 << h5)(function () {
                                                            h4.emit("Shell.PWDReset");
                                                            h6();
                                                        });
                                                    }
                                                } else {
                                                    Od(zS);
                                                    zY(hb);
                                                }
                                            });
                                            h4.emit("Login.Login", {
                                                apiDomain: zH.apiDomain,
                                                loginMethod: zH.loginMethod,
                                                gameId: zH.gameId,
                                                bundleId: zH.bundleId,
                                                operatorToken: zH.operatorToken,
                                                operatorPlayerSession: zH.operatorPlayerSession,
                                                playerSession: zH.playerSession,
                                                operatorParam: zH.operatorParam,
                                                betType: zH.betType,
                                                redirectOption: zH.redirectOption,
                                            });
                                        }
                                        h6();
                                    } else {
                                        var h7 = shell.ClientError;
                                        var h8 = new (0, shell.Error)(h7.Domain, h7.AuthenticationError);
                                        h0(h8);
                                    }
                                })(zd);
                        }
                    }
                    z(
                        "LoginHelper",
                        Object.freeze({
                            __proto__: null,
                            GameStatus: {
                                INACTIVE: 0,
                                ACTIVE: 1,
                                SUSPENDED: 2,
                            },
                            login: U2,
                        })
                    );
                    function U3() {}
                    OY = U3;
                    U0 = U3;
                    U1 = U3;
                    OS = U3;
                    z(
                        "Printer",
                        Object.freeze({
                            __proto__: null,
                            get enablePrinter() {
                                return OY;
                            },
                            get print() {
                                return U0;
                            },
                            get setActiveNode() {},
                            get setHolder() {
                                return OS;
                            },
                            get setPrinterVisible() {
                                return U1;
                            },
                        })
                    );
                    var U4;
                    var U5;
                    var U6 = {};
                    var U7 = O7.getPlatform;
                    var U8 = O7.timeoutCallback;
                    var U9 = O7.emptyFunc;
                    var UO = U7();
                    var UU = {
                        getGameInfo: "v2/GameInfo/Get",
                        updateSystemInfo: "v2/GameInfo/Update",
                        markRead: "v2/MarkRead",
                    };
                    var Ub = "v2/GameRule/Get";
                    var UZ = "v2/GameName/Get";
                    var UP = "v2/GameWallet/Get";
                    z(
                        "APIClient",
                        (function () {
                            function zd(zH) {
                                this.dataSource = zH;
                                this.bv_v = new OP();
                            }
                            Object.defineProperty(zd.prototype, "xhrHandler", {
                                get: function () {
                                    return this.bv_v;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            zd.prototype.login = function (zH) {
                                var zS = this;
                                var zY = this.dataSource.systemModel;
                                var h0 = zY.apiDomain;
                                var h1 = zY.loginMethod;
                                var h2 = zY.gameId;
                                var h3 = zY.bundleId;
                                var h4 = zY.operatorToken;
                                var h5 = zY.operatorPlayerSession;
                                var h6 = zY.playerSession;
                                var h7 = zY.operatorParam;
                                var h8 = zY.betType;
                                var h9 = zY.redirectOption;
                                U2({
                                    on_complete: function (hO) {
                                        var hU = hO;
                                        zS.dataSource.updateLoginInfo(hU);
                                        var hb = zS.dataSource.playerModel.playerId;
                                        shell.ga.setUserId(hb);
                                        zS.bv_v.setAPIUrls(zS.dataSource.systemModel);
                                        if (zH) {
                                            zH();
                                        }
                                    },
                                    on_error: function (hO) {
                                        if (zH) {
                                            zH(hO, undefined);
                                        }
                                    },
                                    apiDomain: h0,
                                    loginMethod: h1,
                                    gameId: h2,
                                    bundleId: h3,
                                    operatorToken: h4,
                                    operatorPlayerSession: h5,
                                    playerSession: h6,
                                    operatorParam: h7,
                                    betType: h8,
                                    redirectOption: h9,
                                });
                            };
                            zd.prototype.getGameInfo = function (zH, zS) {
                                var zY = this;
                                if (zS === undefined) {
                                    zS = {};
                                }
                                return this.requestEngine(UU.getGameInfo, zS, function (h0, h1) {
                                    zY.logResult("getGameInfo", h1);
                                    if (h1 && h1.dt) {
                                        var h2 = h1.dt.ls.si;
                                        var h3 = zY.dataSource.transactionModel.transactionId;
                                        var h4 = zY.dataSource.playerModel.walletKey;
                                        if (!(h2.sid === h3 && h2.wk === h4)) {
                                            zY.print(h2.sid);
                                            zY.dataSource.updateGameInfo(h1);
                                        }
                                    }
                                    if (zH) {
                                        zH(h0, h1);
                                    }
                                });
                            };
                            zd.prototype.updateGameInfo = function (zH, zS) {
                                var zY = this;
                                if (zS === undefined) {
                                    zS = {};
                                }
                                return this.requestEngine(UU.updateSystemInfo, zS, function (h0, h1) {
                                    zY.logResult("updateGameInfo", h1);
                                    if (h1 && h1.dt) {
                                        var h2 = h1.dt.ls.si;
                                        zY.print(h2.sid);
                                        zY.dataSource.updateGameInfo(h1);
                                    }
                                    if (zH) {
                                        zH(h0, h1);
                                    }
                                });
                            };
                            zd.prototype.getGameRule = function (zH) {
                                var zS = this;
                                return this.requestServiceEngine(Ub, {}, function (zY, h0) {
                                    zS.logResult("getGameRule", h0);
                                    if (zH) {
                                        zH(zY, h0);
                                    }
                                });
                            };
                            zd.prototype.getGameName = function (zH) {
                                var zS = this;
                                var zY = {
                                    lang: shell.I18n.locale(),
                                };
                                return this.requestServiceEngine(UZ, zY, function (h0, h1) {
                                    zS.logResult("gameNameResult", h1);
                                    if (zH) {
                                        zH(h0, h1);
                                    }
                                });
                            };
                            zd.prototype.markRead = function (zH) {
                                var zS = this;
                                if (zH === undefined) {
                                    zH = 1;
                                }
                                var zY = {
                                    id: this.dataSource.transactionModel.transactionId,
                                    ts: zH,
                                };
                                return this.requestEngine(UU.markRead, zY, function (h0, h1) {
                                    zS.logResult("markRead", h1);
                                    if (h0) {
                                        cc.error("Mark Read api return error: " + h0.uicode);
                                    }
                                });
                            };
                            zd.prototype.transferMoney = function () {
                                return U9;
                            };
                            zd.prototype.getWalletBalance = function (zH) {
                                var zS = this;
                                return this.requestServiceSDEngine(UP, {}, function (zY, h0) {
                                    zS.logResult("getWalletBalance", h0);
                                    if (zH) {
                                        zH(zY, h0);
                                    }
                                });
                            };
                            zd.prototype._logResult = function () {};
                            zd.prototype._print = function (zH) {
                                var zS = this.dataSource.playerModel.playerName;
                                U0("version: " + this.dataSource.systemModel.version + "\nuser: " + zS + "\nspinid: " + zH);
                            };
                            zd.prototype._requestEngine = function (zH, zS, zY) {
                                if (this.dataSource.isGameReplaying && U6.GameReplay && !Object.values(UU).includes(zH)) {
                                    var h0 = U6.GameReplay.gameReplayHandler;
                                    U8(0.2)(function () {
                                        var h1 = h0.nextReplayAPIResponse;
                                        zY(undefined, h1);
                                    });
                                    return U9;
                                }
                                zS = this.handleCommonParams(zS);
                                return this.bv_v.request(zH, zS, zY);
                            };
                            zd.prototype._requestServiceEngine = function (zH, zS, zY) {
                                (zS = this.handleCommonParams(zS)).gid = this.dataSource.systemModel.gameId;
                                return this.bv_v.serviceRequest(zH, zS, zY);
                            };
                            zd.prototype._handleCommonParams = function (zH) {
                                if (zH === undefined) {
                                    zH = {};
                                }
                                var zS = this.dataSource.systemModel.betType;
                                var zY = this.dataSource.playerModel;
                                var h0 = zY.token;
                                var h1 = zY.walletKey;
                                zH.btt = zS;
                                if (!zH.wk) {
                                    zH.wk = h1;
                                }
                                zH.atk = h0;
                                zH.pf = UO;
                                return zH;
                            };
                            zd.prototype.logResult = function () {};
                            zd.prototype.print = function (zH) {
                                var zS = this.dataSource.playerModel.playerName;
                                U0("version: " + this.dataSource.systemModel.version + "\nuser: " + zS + "\nspinid: " + zH);
                            };
                            zd.prototype.requestEngine = function (zH, zS, zY) {
                                if (this.dataSource.isGameReplaying && U6.GameReplay && !Object.values(UU).includes(zH)) {
                                    var h0 = U6.GameReplay.gameReplayHandler;
                                    U8(0.2)(function () {
                                        var h1 = h0.nextReplayAPIResponse;
                                        zY(undefined, h1);
                                    });
                                    return U9;
                                }
                                zS = this.handleCommonParams(zS);
                                return this.bv_v.request(zH, zS, function (h1, h2) {
                                    if (h1) {
                                        var h3 = shell.ServerError;
                                        if (!(h1.domain !== h3.Domain || h1.canDismiss)) {
                                            h2 = undefined;
                                        }
                                    }
                                    zY(h1, h2);
                                });
                            };
                            zd.prototype.requestServiceEngine = function (zH, zS, zY) {
                                (zS = this.handleCommonParams(zS)).gid = this.dataSource.systemModel.gameId;
                                return this.bv_v.serviceRequest(zH, zS, zY);
                            };
                            zd.prototype.requestServiceSDEngine = function (zH, zS, zY) {
                                (zS = this.handleCommonParams(zS)).gid = this.dataSource.systemModel.gameId;
                                return this.bv_v.serviceSDRequest(zH, zS, zY);
                            };
                            zd.prototype.handleCommonParams = function (zH) {
                                if (zH === undefined) {
                                    zH = {};
                                }
                                var zS = this.dataSource.systemModel.betType;
                                var zY = this.dataSource.playerModel;
                                var h0 = zY.token;
                                var h1 = zY.walletKey;
                                zH.btt = zS;
                                if (!zH.wk) {
                                    zH.wk = h1;
                                }
                                zH.atk = h0;
                                zH.pf = UO;
                                return zH;
                            };
                            O2([shell.deprecated("logResult")], zd.prototype, "_logResult", null);
                            O2([shell.deprecated("print")], zd.prototype, "_print", null);
                            O2([shell.deprecated("requestEngine")], zd.prototype, "_requestEngine", null);
                            O2([shell.deprecated("requestServiceEngine")], zd.prototype, "_requestServiceEngine", null);
                            O2([shell.deprecated("handleCommonParams")], zd.prototype, "_handleCommonParams", null);
                            return zd;
                        })()
                    );
                    var UQ = O7.setDefaultCurrencyFormat;
                    z(
                        "DataSource",
                        (function () {
                            function zd(zH) {
                                this.bv_m = false;
                                if (zH) {
                                    this.bv_b = zH.playerModel;
                                    this.bv_p = zH.systemModel;
                                    this.bv_g = zH.transactionModel;
                                }
                            }
                            Object.defineProperty(zd.prototype, "playerModel", {
                                get: function () {
                                    return this.bv_b;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(zd.prototype, "systemModel", {
                                get: function () {
                                    return this.bv_p;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(zd.prototype, "transactionModel", {
                                get: function () {
                                    return this.bv_g;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(zd.prototype, "lastTransactionRawData", {
                                get: function () {
                                    return this.bv_S;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(zd.prototype, "lastGameInfoRawData", {
                                get: function () {
                                    return this.bv_y;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(zd.prototype, "isGameReplaying", {
                                get: function () {
                                    return this.bv_m;
                                },
                                set: function (zH) {
                                    this.bv_m = zH;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(zd.prototype, "nextGameReplayInfo", {
                                get: function () {
                                    return this.bv_G;
                                },
                                set: function (zH) {
                                    this.bv_G = zH;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            zd.prototype.updateLoginInfo = function (zH) {
                                var zS = this.bv_b;
                                var zY = this.bv_p;
                                zS.updatePlayerInfo(zH);
                                zY.updateSystemInfo(zH);
                                UQ({
                                    groupSeparator: undefined,
                                    decimalSeparator: undefined,
                                    currencyCode: zS.currency,
                                    currencySymbol: zS.currencySymbol,
                                    baseUnit: zY.operatorJurisdiction.currencyBaseUnit,
                                    hideDecimal: zY.operatorJurisdiction.hideCurrencyDecimal,
                                });
                            };
                            zd.prototype.updateGameInfo = function (zH) {
                                var zS = OK();
                                var zY = this.bv_b;
                                var h0 = this.bv_p;
                                this.bv_y = zH;
                                var h1 = zH.dt;
                                var h2 = h1.ls;
                                var h3 = h1.gcs;
                                h0.updateGameInfo(h1);
                                zY.updateMinimumBetAmount(h3);
                                this.updateTransactionInfo(h2.si);
                                zY.balance = h1.bl;
                                zS.emit("Game.GameInfoUpdated", zH);
                            };
                            zd.prototype.updateTransactionInfo = function (zH) {
                                var zS = OK();
                                var zY = this.bv_g;
                                var h0 = this.bv_b;
                                this.bv_S = zH;
                                zY.updateTransactionDetails(zH);
                                h0.updatePlayerWalletInfo(zH);
                                h0.balance = zH.bl;
                                zS.emit("Game.TransactionInfoUpdated", zH);
                            };
                            return zd;
                        })()
                    );
                    var UW = O7.formatDate;
                    var Uz = z(
                        "GameMaintenanceModel",
                        (function () {
                            function zd() {}
                            Object.defineProperty(zd.prototype, "readableMaintenanceStartDate", {
                                get: function () {
                                    return UW(new Date(this.maintenanceStartDate));
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(zd.prototype, "readableMaintenanceEndDate", {
                                get: function () {
                                    return UW(new Date(this.maintenanceEndDate));
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            zd.prototype.setGameMaintenanceData = function (zH) {
                                if (zH) {
                                    var zS = zH.gid;
                                    var zY = zH.msdt;
                                    var h0 = zH.medt;
                                    this.gameId = zS;
                                    this.gameStatus = zH.st;
                                    this.maintenanceStartDate = zY;
                                    this.maintenanceEndDate = h0;
                                }
                            };
                            zd.prototype.isGameActive = function () {
                                return this.gameStatus === w.Active;
                            };
                            zd.prototype.isGameMaintenenceApproaching = function () {
                                var zH = this.maintenanceStartDate;
                                var zS = this.maintenanceEndDate;
                                if (zH && zS) {
                                    var zY = Date.now();
                                    return zY < zH && zY >= zH - 7200000;
                                }
                                return false;
                            };
                            return zd;
                        })()
                    );
                    (function (zd) {
                        zd[(zd.EURO = 0)] = "EURO";
                        zd[(zd.ASIA = 1)] = "ASIA";
                        zd[(zd.PORTUGAL = 2)] = "PORTUGAL";
                        zd[(zd.GERMANY = 3)] = "GERMANY";
                        zd[(zd.LITHUANIA = 4)] = "LITHUANIA";
                        zd[(zd.ITALY = 5)] = "ITALY";
                        zd[(zd.SWEDEN = 6)] = "SWEDEN";
                        zd[(zd.UK = 7)] = "UK";
                        zd[(zd.UKLOW = 8)] = "UKLOW";
                        zd[(zd.UKHIGH = 9)] = "UKHIGH";
                        zd[(zd.SPAIN = 10)] = "SPAIN";
                        zd[(zd.BRAZIL = 11)] = "BRAZIL";
                    })(U4 || (U4 = {}));
                    (function (zd) {
                        zd[(zd.AUTO_PLAY_MAX = 0)] = "AUTO_PLAY_MAX";
                        zd[(zd.AUTO_PLAY_CONFIG = 1)] = "AUTO_PLAY_CONFIG";
                        zd[(zd.SINGLE_PLAY_TIME = 2)] = "SINGLE_PLAY_TIME";
                        zd[(zd.HIDE_NON_PROFIT = 3)] = "HIDE_NON_PROFIT";
                        zd[(zd.TURBO_SPIN = 4)] = "TURBO_SPIN";
                        zd[(zd.MAX_PAYOUT = 5)] = "MAX_PAYOUT";
                        zd[(zd.NET_PROFIT = 6)] = "NET_PROFIT";
                        zd[(zd.ELAPSED_TIME = 7)] = "ELAPSED_TIME";
                        zd[(zd.UNFINISHED_RULE = 8)] = "UNFINISHED_RULE";
                        zd[(zd.LAUNCH_SHOW_PAYTABLE = 9)] = "LAUNCH_SHOW_PAYTABLE";
                        zd[(zd.HISTORY_SHOW_BALANCE_BEFORE = 10)] = "HISTORY_SHOW_BALANCE_BEFORE";
                        zd[(zd.HISTORY_SHOW_WIN = 11)] = "HISTORY_SHOW_WIN";
                    })(U5 || (U5 = {}));
                    var Uh;
                    var UR;
                    var UB;
                    var Ug;
                    var Ul;
                    var UT = [0, 0, 3, 1, 0, 0, 1, 1, 0, 0, 0, 0];
                    var Uc = [
                        [100, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
                        [1000, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
                        UT,
                        [0, 0, 5, 1, 0, 1, 1, 1, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
                        [0, 0, 5, 1, 0, 1, 1, 1, 0, 0, 0, 0],
                        [100, 2, 3, 1, 0, 0, 1, 1, 0, 0, 0, 0],
                        O5([], UT, true),
                        O5([], UT, true),
                        O5([], UT, true),
                        [0, 0, 3, 1, 0, 0, 1, 1, 1, 0, 0, 0],
                        [1000, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1],
                    ];
                    function UM(zd, zH) {
                        var zS = Uc[zH];
                        if (zS && zS[zd] !== undefined) {
                            return zS[zd];
                        }
                        throw Error(
                            `RegionUtils :: unsupported jurisdiction(region) ${zH}${zS && zS[zd] === undefined ? " feature type " + zd : ""} requested`
                        );
                    }
                    function UE(zd) {
                        switch (zd) {
                            case U4.PORTUGAL:
                                return Uh;
                            case U4.EURO:
                                return UR;
                            case U4.ASIA:
                                return UB;
                            case U4.GERMANY:
                                return Ug;
                            case U4.LITHUANIA:
                                return Ul;
                            default:
                                return;
                        }
                    }
                    var Uu;
                    var UD;
                    var Uw = Object.freeze({
                        __proto__: null,
                        get Region() {
                            return U4;
                        },
                        get RegionFeatureType() {
                            return U5;
                        },
                        getJurisdictionFeatureParam: UM,
                        getRegionConfig: UE,
                        setGameRegionConfigs: function (zd, zH, zS, zY, h0) {
                            Uh = zd;
                            UR = zH;
                            UB = zS;
                            Ug = zY;
                            Ul = h0;
                        },
                    });
                    z("RegionUtils", Uw);
                    (function (zd) {
                        zd[(zd.VERTICAL = 0)] = "VERTICAL";
                        zd[(zd.HORIZONTAL = 1)] = "HORIZONTAL";
                        zd[(zd.UNIVERSAL = 2)] = "UNIVERSAL";
                    })(Uu || (Uu = {}));
                    (function (zd) {
                        zd[(zd.Default = -1)] = "Default";
                        zd[(zd.Disabled = 0)] = "Disabled";
                        zd[(zd.Enabled = 1)] = "Enabled";
                    })(UD || (UD = {}));
                    var Um = z(
                        "GamePluginModel",
                        (function () {
                            function zd(zH) {
                                var zS = zH.n;
                                var zY = zH.v;
                                var h0 = zH.il;
                                var h1 = zH.om;
                                var h2 = zH.uie;
                                this.bv_u = zS;
                                this.bv_w = zY;
                                this.bv_C = h0;
                                this.bv_T = h2;
                                this.bv_O = h1;
                            }
                            Object.defineProperty(zd.prototype, "name", {
                                get: function () {
                                    return this.bv_u;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(zd.prototype, "version", {
                                get: function () {
                                    return this.bv_w;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(zd.prototype, "configuration", {
                                get: function () {
                                    return this.bv_T;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(zd.prototype, "instantLoad", {
                                get: function () {
                                    return this.bv_C;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(zd.prototype, "orientationMode", {
                                get: function () {
                                    return this.bv_O;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            zd.prototype.overrideVersion = function (zH) {
                                this.bv_w = zH;
                            };
                            return zd;
                        })()
                    );
                    var Uv = W.shell.urlSearch;
                    function Uy(zd) {
                        var zH;
                        zH = zH || zd;
                        return Uv.get(zH);
                    }
                    var Uk = W.shell && W.shell.environment ? W.shell.environment.audioSupported : undefined;
                    var Uf = Object.freeze({
                        definition: Uy("definition"),
                        betType: Uy("type"),
                        language: Uy("language"),
                        redirectUrl: Uy("from"),
                        playerSession: Uy("t"),
                        timeElapsed: Uy("time_elapsed"),
                        reminderInterval: Uy("reminder_interval"),
                        reminderUrl: Uy("reminder_quit"),
                        operatorPlayerSession: Uy("session"),
                        operatorParam: Uy("operator_param"),
                        tournamentId: Uy("tourid"),
                        operatorToken: Uy("token"),
                        realModeUrl: Uy("real"),
                        noAudio: Uk === undefined ? Uy("no_audio") : Uk ? "0" : "1",
                        noBalanceCheck: Uy("no_bl_chk"),
                        redirectOption: Uy("redirect_option") || undefined,
                        loginMethod: Uy("login_method"),
                    });
                    Uv = undefined;
                    z(
                        "LaunchConfig",
                        Object.freeze({
                            __proto__: null,
                            cs_Launch: Uf,
                        })
                    );
                    var UN;
                    var Uj = O7.joinPath;
                    (function (zd) {
                        zd[(zd.REAL_MODE = 0)] = "REAL_MODE";
                        zd[(zd.FEATURE_GAME = 3)] = "FEATURE_GAME";
                    })(UN || (UN = {}));
                    var UK = {
                        bv_R: "",
                        setCustomRedirectUrl: function (zd) {
                            this.bv_R = zd;
                        },
                        getRedirectUrl: function (zd, zH) {
                            var zS;
                            switch (zd) {
                                case UN.REAL_MODE:
                                    zS = zH || Uf.realModeUrl;
                                    break;
                                case UN.FEATURE_GAME:
                                    zH = zH || "";
                                    zS = Uj(W.location.origin, zH) + W.location.search;
                                    break;
                                default:
                                    zS = this.bv_R ? this.bv_R : Uf.redirectUrl;
                            }
                            return zS;
                        },
                        quitGame: function (zd, zH) {
                            var zS = this.getRedirectUrl(zd, zH);
                            shell.enablePromBeforeUnload(false);
                            var zY = OK();
                            if (zS) {
                                zY.emit("Window.Redirect", zS);
                            } else {
                                zY.emit("Window.Quit");
                            }
                        },
                    };
                    var UC = z("QuitGame", {
                        refreshGame: function () {
                            shell.enablePromBeforeUnload(false);
                            OK().emit("Window.Reload");
                        },
                        quitGame: function () {
                            UK.quitGame();
                        },
                        quitGameRealMode: function (zd) {
                            UK.quitGame(UN.REAL_MODE, zd);
                        },
                        quitGameFeatureTrigger: function (zd) {
                            UK.quitGame(UN.FEATURE_GAME, zd);
                        },
                        setCustomRedirectUrl: function (zd) {
                            UK.setCustomRedirectUrl(zd);
                        },
                    });
                    var UI = O7.timeoutCallback;
                    function Ux(zd, zH, zS) {
                        shell.ga.sendEvent(zd, zH, zS);
                    }
                    function UL(zd, zH, zS, zY, h0) {
                        var h1 = {
                            category: shell.ga.CATEGORY_GAME,
                            domain: zH,
                            code: zS,
                            error: zd,
                            retry: zY,
                            messages: h0,
                        };
                        OK().emit("Error.Report", h1);
                    }
                    var UJ;
                    var Up;
                    var Us = z("AnalyticsHelper", {
                        init: function () {
                            shell.ga.setFrequentErrorHandler(function () {
                                shell.ga.setFrequentErrorHandler(undefined);
                                W.alert(shell.I18n.t("General.ErrorOccur"));
                                Ux(shell.ga.CATEGORY_GENERAL, shell.ga.EVENT_QUIT_GAME, {
                                    reason: "Frequent Error",
                                });
                                UI(0.5)(UC.refreshGame);
                            });
                        },
                        sendErrorReport: UL,
                        sendLoadFailReport: function (zd) {
                            var zH = shell.Error;
                            var zS = shell.ClientError;
                            var zY = new zH(zS.Domain, zS.GameLoadResourceError);
                            UL("load resource fail", zY.domain, zY.code, zd);
                        },
                        sendScreen: function (zd) {
                            shell.ga.sendScreen(zd);
                        },
                        sendEvent: Ux,
                        sendAnalyticsEvent: function (zd) {
                            OK().emit("Analytics.Event", zd);
                        },
                        sendAnalyticsTiming: function (zd) {
                            OK().emit("Analytics.Timing", zd);
                        },
                    });
                    var UV = O7.timeoutCallback;
                    var UF = z("QuitGameWithEvent", {
                        quitGameWithEvent: function (zd) {
                            return function () {
                                Us.sendEvent(shell.ga.CATEGORY_GENERAL, shell.ga.EVENT_QUIT_GAME, {
                                    reason: zd,
                                });
                                UV(0.5)(UC.quitGame);
                            };
                        },
                        quitGameWithEventForRealMode: function (zd) {
                            return function () {
                                Us.sendEvent(shell.ga.CATEGORY_GENERAL, shell.ga.EVENT_QUIT_GAME, {
                                    reason: "Real Mode",
                                });
                                UV(0.5)(function () {
                                    UC.quitGameRealMode(zd);
                                });
                            };
                        },
                        quitGameWithEventForFeatureGame: function (zd) {
                            Us.sendEvent(shell.ga.CATEGORY_GENERAL, shell.ga.EVENT_QUIT_GAME, {
                                reason: "Feature Game Redirect",
                            });
                            UV(0.5)(function () {
                                UC.quitGameFeatureTrigger(zd);
                            });
                        },
                        refreshGameWithEvent: function (zd) {
                            return function () {
                                Us.sendEvent(shell.ga.CATEGORY_GENERAL, shell.ga.EVENT_QUIT_GAME, {
                                    reason: zd,
                                });
                                UV(0.5)(UC.refreshGame);
                            };
                        },
                    });
                    function Uq(zd, zH, zS, zY, h0) {
                        if (zH === undefined) {
                            zH = UJ.Transaction;
                        }
                        if (h0 === undefined) {
                            h0 = false;
                        }
                        OK().emit(
                            "Error.Occurred",
                            {
                                context: zH,
                                info: {
                                    category: shell.ga.CATEGORY_GAME,
                                    domain: zd.domain,
                                    code: zd.code,
                                    trace: zd.traceId,
                                    error: zd,
                                    messages: zY,
                                },
                                report: h0,
                            },
                            function (h1) {
                                switch (h1.response) {
                                    case "Default":
                                        if (zS) {
                                            zS(Up.Default);
                                        }
                                        break;
                                    case "Quit":
                                        if (zS) {
                                            zS(Up.Quit);
                                        }
                                        break;
                                    case "Retry":
                                        if (zS) {
                                            zS(Up.Retry);
                                        }
                                        break;
                                    case "Reload":
                                        if (zS) {
                                            zS(Up.Reload);
                                        }
                                        break;
                                    case "Dismiss":
                                        if (zS) {
                                            zS(Up.Dismiss);
                                        }
                                }
                            }
                        );
                    }
                    (function (zd) {
                        zd.Transaction = "Transaction";
                        zd.Preload = "Preload";
                        zd.Launch = "Launch";
                        zd.Login = "Login";
                        zd.Change = "Change";
                        zd.Unknown = "Unknown";
                    })(UJ || (UJ = {}));
                    (function (zd) {
                        zd[(zd.Default = 0)] = "Default";
                        zd[(zd.Quit = 1)] = "Quit";
                        zd[(zd.Retry = 2)] = "Retry";
                        zd[(zd.Reload = 3)] = "Reload";
                        zd[(zd.Dismiss = 4)] = "Dismiss";
                    })(Up || (Up = {}));
                    var UX = z("ErrorHandler", {
                        handleCommonError: function (zd, zH, zS, zY, h0) {
                            if (zS === undefined) {
                                zS = UJ.Transaction;
                            }
                            Uq(zH, zS, function (h1) {
                                switch (h1) {
                                    case Up.Reload:
                                        UF.refreshGameWithEvent(zd)();
                                        break;
                                    case Up.Quit:
                                        UF.quitGameWithEvent(zd)();
                                        break;
                                    case Up.Retry:
                                        if (zY) {
                                            zY();
                                        }
                                        break;
                                    case Up.Dismiss:
                                        if (h0) {
                                            h0();
                                        }
                                }
                            });
                        },
                        showError: Uq,
                        getErrorContext: function (zd) {
                            switch (zd) {
                                case shell.I18n.t("General.ErrorPreloadError"):
                                    return "Preload";
                                case shell.I18n.t("General.ErrorLaunchFailed"):
                                    return "Launch";
                                case shell.I18n.t("General.ErrorLoginFailed"):
                                    return "Login";
                                case shell.I18n.t("General.ErrorChangeFailed"):
                                    return "Change";
                                case "":
                                    return "Unknown";
                                default:
                                    return "Transaction";
                            }
                        },
                        ErrContext: UJ,
                        ErrAction: Up,
                        handleInvalidGameDataError: function (zd) {
                            var zH = shell.Error;
                            var zS = shell.ClientError;
                            Uq(
                                new zH(zS.Domain, zS.DataInvalidStructureError),
                                UJ.Transaction,
                                function (zY) {
                                    switch (zY) {
                                        case Up.Reload:
                                        case Up.Retry:
                                            UF.refreshGameWithEvent("invalid_game_data")();
                                            break;
                                        case Up.Quit:
                                            UF.quitGameWithEvent("invalid_game_data")();
                                    }
                                },
                                zd,
                                true
                            );
                        },
                    });
                    function UG(zd, zH) {
                        var zS = OC();
                        var zY = [];
                        var h0 = false;
                        var h1 = {
                            onComplete: function () {
                                if (!h0) {
                                    if (zH) {
                                        zH();
                                    }
                                }
                            },
                            onError: function (h2) {
                                if (!h0) {
                                    cc.error("BVPLuginLoader error occured loading ", h2.src);
                                    h0 = true;
                                    var h3 = shell.Error;
                                    var h4 = shell.GameShellError;
                                    var h5 = new h3(h4.Domain, h4.LoadResourceError);
                                    Us.sendErrorReport("load plugin failed", h5.domain, h5.code, undefined, `src: ${h2.src}`);
                                    UX.handleCommonError(h2.err, h5, UJ.Launch);
                                }
                            },
                        };
                        zd.forEach(function (h2) {
                            var h3 = h2.name;
                            if (!zS.queryBundle(h3)) {
                                zY.push(h3);
                            }
                        });
                        if (zY.length > 0) {
                            zS.plugin.load(zY, h1);
                        } else if (zH) {
                            zH();
                        }
                    }
                    var UA = (function () {
                        function zd(zH) {
                            var zS = zH.gid;
                            var zY = zH.ft;
                            var h0 = zH.url;
                            this.bv_f = zS;
                            this.bv_E = zY;
                            this.bv_k = h0;
                        }
                        Object.defineProperty(zd.prototype, "gameId", {
                            get: function () {
                                return this.bv_f;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(zd.prototype, "featureType", {
                            get: function () {
                                return this.bv_E;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(zd.prototype, "url", {
                            get: function () {
                                return this.bv_k;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        return zd;
                    })();
                    var Ud = (function () {
                        function zd(zH) {
                            var zS = zH.dt;
                            var zY = zH.ugd;
                            this.bv_x = zS;
                            this.bv_I = this.bv_j(zY);
                        }
                        Object.defineProperty(zd.prototype, "displayType", {
                            get: function () {
                                return this.bv_x;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(zd.prototype, "unfinishedGameDetails", {
                            get: function () {
                                return this.bv_I;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        zd.prototype.bv_j = function (zH) {
                            return zH.map(function (zS) {
                                return new UA(zS);
                            });
                        };
                        return zd;
                    })();
                    var UH = (function () {
                        function zd(zH) {
                            var zS = zH.n;
                            var zY = zH.v;
                            this.bv_u = zS;
                            this.bv_A = zY;
                        }
                        Object.defineProperty(zd.prototype, "name", {
                            get: function () {
                                return this.bv_u;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(zd.prototype, "value", {
                            get: function () {
                                return this.bv_A;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        return zd;
                    })();
                    z("TweaksData", {
                        configStore: undefined,
                    });
                    var US;
                    var UY;
                    var b0 = (function () {
                        function zd(zH) {
                            var zS = zH.rurl;
                            var zY = zH.tcm;
                            var h0 = zH.tsc;
                            var h1 = zH.ttp;
                            var h2 = zH.tlb;
                            var h3 = zH.trb;
                            this.bv_N = decodeURIComponent(zS);
                            this.bv_L = zY;
                            this.bv_P = h0;
                            this.bv__ = h1;
                            this.bv_M = h2;
                            this.bv_D = h3;
                        }
                        Object.defineProperty(zd.prototype, "realURL", {
                            get: function () {
                                return this.bv_N;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(zd.prototype, "dialogMessage", {
                            get: function () {
                                return this.bv_L;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(zd.prototype, "triggerSpinCount", {
                            get: function () {
                                return this.bv_P;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(zd.prototype, "triggerDuration", {
                            get: function () {
                                return this.bv__;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(zd.prototype, "leftButtonLabel", {
                            get: function () {
                                return this.bv_M;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(zd.prototype, "rightButtonLabel", {
                            get: function () {
                                return this.bv_D;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        return zd;
                    })();
                    var b1 = {
                        0: "",
                        1: "K",
                    };
                    var b2 = z(
                        "OperatorJurisdictionModel",
                        (function () {
                            function _zd2(zH) {
                                this.bv_U = [];
                                this.bv_H = [];
                                this.bv_B = [];
                                this.bv_F = 0;
                                var zS;
                                var zY;
                                var h0 = zH.oj;
                                var h1 = zH.ufg;
                                var h2 = zH.uiogc;
                                var h3 = zH.ec;
                                var h4 = zH.ocdr;
                                var h5 = zH.gm;
                                var h6 = zH.occ;
                                var h7 = zH.opl;
                                var h8 = zH.ioph;
                                var h9 = h0.jid;
                                var hO = h2;
                                var hU = hO.bb;
                                var hb = hO.grtp;
                                var hZ = hO.gec;
                                var hP = hO.bf;
                                var hQ = hO.cbu;
                                var hW = hO.mr;
                                var hz = hO.rp;
                                var hh = hO.ign;
                                var hR = hO.igv;
                                var hB = hO.gc;
                                var hg = hO.tsn;
                                var hl = hO.we;
                                var hT = hO.gsc;
                                var hc = hO.bu;
                                var hM = hO.pwr;
                                var hE = hO.hd;
                                var hD = hO.np;
                                var hw = hO.et;
                                var hm = hO.ir;
                                var hv = hO.as;
                                var hy = hO.asc;
                                var hk = hO.std;
                                var hf = hO.hnp;
                                var hN = hO.ts;
                                var hj = hO.smpo;
                                var hK = hO.ivs;
                                var hC = hO.rcf;
                                var hI = hO.sp;
                                var hx = hO.sbb;
                                var hL = hO.hwl;
                                var hJ = h5[0];
                                var hp = hJ.rtp;
                                var hs = hJ.mxe;
                                var hV = hJ.mxehr;
                                this.bv_W = h9;
                                this.bv_q = hU;
                                this.bv_V = hb;
                                this.bv_Q = hZ;
                                this.bv_z = hB;
                                this.bv_Y = hh;
                                this.bv_K = hR;
                                this.bv_X = hm;
                                this.bv_Z = hD ? hD === 1 : UM(U5.NET_PROFIT, this.bv_W) === 1;
                                this.bv_J = hw ? hw === 1 : UM(U5.ELAPSED_TIME, this.bv_W) === 1;
                                this.bv_$ = hv || UM(U5.AUTO_PLAY_MAX, this.bv_W);
                                this.bv_tt = hy || UM(U5.AUTO_PLAY_CONFIG, this.bv_W);
                                this.bv_et = hk || UM(U5.SINGLE_PLAY_TIME, this.bv_W);
                                this.bv_nt = hf ? hf === 1 : UM(U5.HIDE_NON_PROFIT, this.bv_W) === 1;
                                this.bv_it = !(this.bv_et > 0) && (hN ? hN === 1 : UM(U5.TURBO_SPIN, this.bv_W) === 1);
                                this.bv_rt = hj ? hj === 1 : UM(U5.MAX_PAYOUT, this.bv_W) === 1;
                                this.bv_at = hC ? hC === 1 : UM(U5.UNFINISHED_RULE, this.bv_W) === 1;
                                this.bv_ot = hx ? hx === 1 : UM(U5.HISTORY_SHOW_BALANCE_BEFORE, this.bv_W) === 1;
                                this.bv_ut = hL ? hL === 1 : UM(U5.HISTORY_SHOW_WIN, this.bv_W) === 1;
                                this.bv_ct = UE(this.bv_W);
                                if (!hP) {
                                    this.bv_st = 0;
                                }
                                this.bv_lt = hp;
                                this.bv_ft = hs;
                                this.bv_ht = hV;
                                this.bv_dt = hQ ? b1[hQ] : undefined;
                                this.bv_vt = hW;
                                this.bv_mt = hz;
                                this.bv_bt = hg;
                                this.bv_pt = hl;
                                this.bv_gt = hT;
                                this.bv_St = hc;
                                this.bv_yt = hM;
                                this.bv_Gt = hE;
                                this.bv_wt = hK;
                                this.bv_Ct = hI;
                                this.bv_Tt = h7;
                                this.bv_Ot = h8;
                                if (h3) {
                                    this.bv_U =
                                        ((zS = []),
                                        h3.forEach(function (hG) {
                                            var hA = new Um(hG);
                                            if (
                                                (function (hd) {
                                                    var hH = hd.orientationMode;
                                                    var hS = shell.environment.getOrientationMode();
                                                    if (hH !== Uu.UNIVERSAL) {
                                                        if (hH !== Uu.VERTICAL && hS === "port") {
                                                            return false;
                                                        }
                                                        if (hH !== Uu.HORIZONTAL && hS === "land") {
                                                            return false;
                                                        }
                                                    }
                                                    return true;
                                                })(hA)
                                            ) {
                                                zS.push(hA);
                                            }
                                        }),
                                        zS);
                                }
                                if (h1) {
                                    var hF = (function (hG) {
                                        var hA = 0;
                                        return {
                                            unfinishedFeatureGame: hG.map(function (hd) {
                                                var hH = new Ud(hd);
                                                if (hH.displayType !== 0) {
                                                    hA += hH.unfinishedGameDetails.length;
                                                }
                                                return hH;
                                            }),
                                            featureGameCount: hA,
                                        };
                                    })(h1);
                                    var hq = hF.unfinishedFeatureGame;
                                    var hX = hF.featureGameCount;
                                    this.bv_B = hq;
                                    this.bv_F = hX;
                                }
                                if (h6) {
                                    this.bv_Rt = new b0(h6);
                                }
                                if (h4) {
                                    this.bv_H =
                                        ((zY = []),
                                        h4.forEach(function (hG) {
                                            var hA = new UH(hG);
                                            zY.push(hA);
                                        }),
                                        zY);
                                }
                            }
                            Object.defineProperty(_zd2.prototype, "jurisdictionId", {
                                get: function () {
                                    return this.bv_W;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(_zd2.prototype, "regionFeature", {
                                get: function () {
                                    return this.bv_ct;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(_zd2.prototype, "backButton", {
                                get: function () {
                                    return this.bv_q;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(_zd2.prototype, "gameReturnToPlayer", {
                                get: function () {
                                    return this.bv_V;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(_zd2.prototype, "gameExitConfirmation", {
                                get: function () {
                                    return this.bv_Q;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(_zd2.prototype, "buyFeature", {
                                get: function () {
                                    return this.bv_st;
                                },
                                set: function (zH) {
                                    this.bv_st = zH;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(_zd2.prototype, "currencyBaseUnit", {
                                get: function () {
                                    return this.bv_dt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(_zd2.prototype, "markRead", {
                                get: function () {
                                    return this.bv_vt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(_zd2.prototype, "replayVersion", {
                                get: function () {
                                    return this.bv_mt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(_zd2.prototype, "turboSpinSuggest", {
                                get: function () {
                                    return this.bv_bt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(_zd2.prototype, "walletSocketEnable", {
                                get: function () {
                                    return this.bv_pt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(_zd2.prototype, "globalSocketEnable", {
                                get: function () {
                                    return this.bv_gt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(_zd2.prototype, "balanceUpdateEnable", {
                                get: function () {
                                    return this.bv_St;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(_zd2.prototype, "newWalletNotificationEnable", {
                                get: function () {
                                    return this.bv_yt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(_zd2.prototype, "hideCurrencyDecimal", {
                                get: function () {
                                    return this.bv_Gt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(_zd2.prototype, "netProfitState", {
                                get: function () {
                                    return this.bv_Z;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(_zd2.prototype, "elapsedTimeState", {
                                get: function () {
                                    return this.bv_J;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(_zd2.prototype, "isRegulated", {
                                get: function () {
                                    return this.bv_X;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(_zd2.prototype, "autoPlayMaxNum", {
                                get: function () {
                                    return this.bv_$;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(_zd2.prototype, "autoPlayConfig", {
                                get: function () {
                                    return this.bv_tt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(_zd2.prototype, "singlePlayMinDuration", {
                                get: function () {
                                    return this.bv_et;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(_zd2.prototype, "hideNonProfitEffect", {
                                get: function () {
                                    return this.bv_nt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(_zd2.prototype, "turboSpinEnable", {
                                get: function () {
                                    return this.bv_it;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(_zd2.prototype, "maxPayoutEnable", {
                                get: function () {
                                    return this.bv_rt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(_zd2.prototype, "unfinishedFeatureRuleContinue", {
                                get: function () {
                                    return this.bv_at;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(_zd2.prototype, "launchShowPaytable", {
                                get: function () {
                                    return this.bv_Ct;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(_zd2.prototype, "historyShowBalanceBefore", {
                                get: function () {
                                    return this.bv_ot;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(_zd2.prototype, "historyShowWin", {
                                get: function () {
                                    return this.bv_ut;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(_zd2.prototype, "isOK", {
                                get: function () {
                                    return this.bv_wt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(_zd2.prototype, "gamePluginList", {
                                get: function () {
                                    return this.bv_U;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(_zd2.prototype, "unfinishedFeatureGame", {
                                get: function () {
                                    return this.bv_B;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(_zd2.prototype, "unfinishedOnGoingFeatureGameCount", {
                                get: function () {
                                    return this.bv_F;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(_zd2.prototype, "operatorCustomDisplayList", {
                                get: function () {
                                    return this.bv_H;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(_zd2.prototype, "gameName", {
                                get: function () {
                                    return this.bv_Y;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(_zd2.prototype, "gameClock", {
                                get: function () {
                                    return this.bv_z;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(_zd2.prototype, "rtp", {
                                get: function () {
                                    return this.bv_lt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(_zd2.prototype, "maxPayout", {
                                get: function () {
                                    return this.bv_ft;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(_zd2.prototype, "maxPayoutProbability", {
                                get: function () {
                                    return this.bv_ht;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(_zd2.prototype, "customDemoConfig", {
                                get: function () {
                                    return this.bv_Rt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(_zd2.prototype, "operatorPromotionLink", {
                                get: function () {
                                    return this.bv_Tt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(_zd2.prototype, "idH", {
                                get: function () {
                                    return this.bv_Ot;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(_zd2.prototype, "gameVersion", {
                                get: function () {
                                    return this.bv_K;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            return _zd2;
                        })()
                    );
                    var b3 = O7.resolvePath;
                    var b4 = O7.getPlatform;
                    z(
                        "SystemModel",
                        (function () {
                            function zd(zH) {
                                this.bv_Et = zH;
                                this.bv_kt = Uf.betType ? parseInt(Uf.betType, 10) : 0;
                                this.bv_xt = Uf.operatorPlayerSession;
                                this.bv_It = Uf.playerSession;
                                this.bv_jt = Uf.operatorParam;
                                this.bv_h = Uf.operatorToken;
                                this.bv_At = "";
                                this.bv_Nt = !(!Uf.noAudio || Uf.noAudio !== "1");
                                this.bv_Lt = Uf.redirectOption;
                                this.bv_Pt = Uf.loginMethod ? parseInt(Uf.loginMethod, 10) : this.bv_Et.loginMethod;
                                this.bv_Pt = this.bv_Pt || 2;
                            }
                            zd.prototype.updateSystemInfo = function (zH) {
                                var zS = zH.operatorJurisdiction;
                                var zY = zH.gameEngineUrl;
                                var h0 = zH.betHistoryApiUrl;
                                var h1 = zH.gamesMaintanence;
                                var h2 = zH.unfinishGamesFeature;
                                var h3 = zH.uiOperatorGameComponents;
                                var h4 = zH.elementCategory;
                                var h5 = zH.operatorCustomDisplayResponse;
                                var h6 = zH.operatorCustomConfiguration;
                                var h7 = zH.operatorPromotionLink;
                                var h8 = zH.gameCertificateVersion;
                                var h9 = zH.operatorPromotionId;
                                var hO = zH.gameApiSubdomain;
                                var hU = zH.extraAssetTableKey;
                                if (!zY) {
                                    throw Error("Login: Game Engine URL is empty");
                                }
                                if (!h0) {
                                    throw Error("Login: Service Engine URL is empty");
                                }
                                this.bv__t = zS
                                    ? new b2({
                                          oj: zS,
                                          ufg: h2,
                                          uiogc: h3,
                                          ec: h4,
                                          ocdr: h5,
                                          gm: h1,
                                          occ: h6,
                                          opl: h7,
                                          ioph: h9,
                                      })
                                    : undefined;
                                this.bv_n = zY;
                                this.bv_i = h0;
                                var hb = this.bv_Et.apiDomain;
                                if (hO) {
                                    var hZ = this.bv_Et.apiDomain;
                                    hb = "https://" + hO + "." + (hZ = hZ.substr(hZ.indexOf(".") + 1));
                                }
                                this.bv_Mt = b3(hb, this.bv_n);
                                this.bv_Dt = b3(hb, this.bv_i);
                                this.bv_Ut = b3(this.bv_Et.apiDomain, this.bv_i);
                                (this.bv_Ht = new Uz()).setGameMaintenanceData(h1[0]);
                                if (this.bv__t) {
                                    shell.enablePromBeforeUnload(!!this.bv__t.gameExitConfirmation);
                                }
                                this.bv_Bt = h8;
                                this.bv_Ft = hO;
                                this.bv_Wt = hU;
                            };
                            Object.defineProperty(zd.prototype, "operatorJurisdiction", {
                                get: function () {
                                    return this.bv__t;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(zd.prototype, "gameEngineUrl", {
                                get: function () {
                                    return this.bv_n;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(zd.prototype, "serviceEngineUrl", {
                                get: function () {
                                    return this.bv_i;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(zd.prototype, "gameMaintenanceInfo", {
                                get: function () {
                                    return this.bv_Ht;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(zd.prototype, "gameId", {
                                get: function () {
                                    return this.bv_Et.gameId;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(zd.prototype, "version", {
                                get: function () {
                                    return this.bv_Et.version;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(zd.prototype, "certifiedVersion", {
                                get: function () {
                                    return this.bv_Bt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(zd.prototype, "platform", {
                                get: function () {
                                    if (!this.bv_qt) {
                                        this.bv_qt = b4().toString();
                                    }
                                    return this.bv_qt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(zd.prototype, "betType", {
                                get: function () {
                                    return this.bv_kt;
                                },
                                set: function (zH) {
                                    this.bv_kt = zH;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(zd.prototype, "operatorPlayerSession", {
                                get: function () {
                                    return this.bv_xt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(zd.prototype, "playerSession", {
                                get: function () {
                                    return this.bv_It;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(zd.prototype, "operatorParam", {
                                get: function () {
                                    return this.bv_jt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(zd.prototype, "operatorToken", {
                                get: function () {
                                    return this.bv_h;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(zd.prototype, "bundleId", {
                                get: function () {
                                    return this.bv_Et.bundleId;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(zd.prototype, "apiDomain", {
                                get: function () {
                                    return this.bv_Et.apiDomain;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(zd.prototype, "loginMethod", {
                                get: function () {
                                    return this.bv_Pt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(zd.prototype, "noAudio", {
                                get: function () {
                                    return this.bv_Nt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(zd.prototype, "redirectOption", {
                                get: function () {
                                    return this.bv_Lt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(zd.prototype, "gameTitle", {
                                get: function () {
                                    return this.bv_At;
                                },
                                set: function (zH) {
                                    this.bv_At = zH;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(zd.prototype, "globalDomain", {
                                get: function () {
                                    return this.bv_Et.globalDomain;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            zd.prototype.getFullGameEngineUrl = function () {
                                return this.bv_Mt;
                            };
                            zd.prototype.getFullServiceEngineUrl = function () {
                                return this.bv_Ut;
                            };
                            zd.prototype.getFullServiceEngineUrlSD = function () {
                                return this.bv_Dt;
                            };
                            Object.defineProperty(zd.prototype, "gameApiSubdomain", {
                                get: function () {
                                    return this.bv_Ft;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(zd.prototype, "extraAssetTableKey", {
                                get: function () {
                                    return this.bv_Wt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            return zd;
                        })()
                    );
                    z(
                        "PlayerModel",
                        (function () {
                            function zd() {
                                this.bv_Vt = 0;
                                this.bv_Qt = Uf.tournamentId || undefined;
                            }
                            Object.defineProperty(zd.prototype, "walletId", {
                                get: function () {
                                    return this.bv_zt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(zd.prototype, "walletType", {
                                get: function () {
                                    return this.bv_Yt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(zd.prototype, "walletKey", {
                                get: function () {
                                    return this.bv_Qt;
                                },
                                set: function (zH) {
                                    this.bv_Qt = zH;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(zd.prototype, "playerId", {
                                get: function () {
                                    return this.bv_Kt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(zd.prototype, "playerName", {
                                get: function () {
                                    return this.bv_Xt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(zd.prototype, "playerNickname", {
                                get: function () {
                                    return this.bv_Zt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(zd.prototype, "token", {
                                get: function () {
                                    return this.bv_s;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(zd.prototype, "sessionStatus", {
                                get: function () {
                                    return this.bv_Jt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(zd.prototype, "currency", {
                                get: function () {
                                    return this.bv_$t;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(zd.prototype, "currencySymbol", {
                                get: function () {
                                    return this.bv_te;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(zd.prototype, "minimumBetAmount", {
                                get: function () {
                                    return this.bv_Vt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            zd.prototype.updateMinimumBetAmount = function (zH) {
                                var zS = zH ? zH.ns : undefined;
                                this.bv_Vt = zS && zS.is ? zS.t : 0;
                            };
                            zd.prototype.updatePlayerInfo = function (zH) {
                                var zS = zH.playerId;
                                var zY = zH.playerName;
                                var h0 = zH.nickname;
                                var h1 = zH.sessionToken;
                                var h2 = zH.sessionStatus;
                                var h3 = zH.currencyCode;
                                var h4 = zH.currencySymbol;
                                this.bv_Kt = zS;
                                this.bv_Xt = zY;
                                this.bv_Zt = h0;
                                this.bv_s = h1;
                                this.bv_Jt = h2;
                                this.bv_$t = h3;
                                this.bv_te = h4;
                            };
                            zd.prototype.updatePlayerWalletInfo = function (zH) {
                                var zS = zH.wid;
                                var zY = zH.wt;
                                var h0 = zH.wk;
                                this.bv_zt = zS;
                                this.bv_Yt = zY;
                                this.bv_Qt = h0;
                            };
                            return zd;
                        })()
                    );
                    z(
                        "TransactionModel",
                        (function () {
                            function zd() {}
                            Object.defineProperty(zd.prototype, "transactionId", {
                                get: function () {
                                    return this.bv_ee;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(zd.prototype, "parentTransactionId", {
                                get: function () {
                                    return this.bv_ne;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(zd.prototype, "stateTransitionFrom", {
                                get: function () {
                                    return this.bv_ie;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(zd.prototype, "stateTransitionTo", {
                                get: function () {
                                    return this.bv_re;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(zd.prototype, "accumulatedWinAmount", {
                                get: function () {
                                    return this.bv_ae;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(zd.prototype, "totalWinAmount", {
                                get: function () {
                                    return this.bv_oe;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(zd.prototype, "balanceBefore", {
                                get: function () {
                                    return this.bv_ue;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(zd.prototype, "balanceAfterBet", {
                                get: function () {
                                    return this.bv_ce;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(zd.prototype, "markReadIndex", {
                                get: function () {
                                    return this.bv_se;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(zd.prototype, "totalBet", {
                                get: function () {
                                    return this.bv_le;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(zd.prototype, "totalBaseBet", {
                                get: function () {
                                    return this.bv_fe;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(zd.prototype, "previousGameState", {
                                get: function () {
                                    return this.bv_he;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            zd.prototype.updateTransactionDetails = function (zH) {
                                var zS = zH.sid;
                                var zY = zH.psid;
                                var h0 = zH.st;
                                var h1 = zH.nst;
                                var h2 = zH.aw;
                                var h3 = zH.tw;
                                var h4 = zH.blb;
                                var h5 = zH.blab;
                                var h6 = zH.mr;
                                var h7 = zH.tb;
                                var h8 = zH.tbb;
                                this.bv_he = this.bv_re;
                                this.bv_ee = zS;
                                this.bv_ne = zY;
                                this.bv_ie = h0;
                                this.bv_re = h1;
                                this.bv_ae = h2;
                                this.bv_oe = h3;
                                this.bv_ue = h4;
                                this.bv_ce = h5;
                                this.bv_se = h6 ? h6.ts : 1;
                                this.bv_le = h7;
                                this.bv_fe = h8;
                                this.updateTransactionInfo(zH);
                            };
                            return zd;
                        })()
                    );
                    var b5 = O7.timeoutCallback;
                    function b6(zd) {
                        return (0.75 + Math.random() * 0.5) * (1 << zd);
                    }
                    var b7 = (function () {
                        function zd(zH, zS) {
                            this.retryCount = 0;
                            this.bv_de = zH;
                            this.bv_ve = zS;
                        }
                        zd.prototype.execute = function () {
                            this.retryCount++;
                            var zH = typeof this.bv_ve == "function" ? this.bv_ve(this.retryCount) : this.bv_ve;
                            b5(zH)(this.bv_me.bind(this));
                        };
                        zd.prototype.bv_me = function () {
                            this.bv_de(this.retryCount);
                        };
                        return zd;
                    })();
                    var b8 = z(
                        "RetryHandler",
                        (function () {
                            function zd() {
                                this.bv_be = 5;
                                this._id = "0";
                                this.bv_pe = false;
                            }
                            zd.setRetryHandlerConfig = function (zH) {
                                if (zH) {
                                    this.retrySchemeConfig = zH.retrySchemeConfig ? zH.retrySchemeConfig : b6;
                                    this.maxRetries = zH.maxRetries ? zH.maxRetries : 5;
                                }
                            };
                            Object.defineProperty(zd.prototype, "id", {
                                get: function () {
                                    return this._id;
                                },
                                set: function (zH) {
                                    this._id = zH;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(zd.prototype, "isDestroyed", {
                                get: function () {
                                    return this.bv_pe;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            zd.prototype.init = function (zH, zS, zY) {
                                this.bv_de = zS;
                                this.bv_be = zY && zY.maxRetries ? zY.maxRetries : zd.maxRetries;
                                this.bv_ge = zY && zY.retrySchemeConfig ? zY.retrySchemeConfig : zd.retrySchemeConfig;
                                this.bv_ve = new b7(zS, this.bv_ge);
                                this.bv_Se = zH;
                            };
                            zd.prototype.execute = function () {
                                if (!this.bv_pe) {
                                    OK().emit("Shell.PWDReset");
                                    if (this.bv_ve.retryCount >= this.bv_be) {
                                        this.bv_ve = new b7(this.bv_de, this.bv_ge);
                                    }
                                    this.bv_ve.execute();
                                    this.bv_ye();
                                }
                            };
                            zd.prototype.getRetryCount = function () {
                                return this.bv_ve.retryCount;
                            };
                            zd.prototype.getMaxRetryCount = function () {
                                return this.bv_be;
                            };
                            zd.prototype.canRetry = function () {
                                return this.bv_ve.retryCount < this.bv_be && !this.bv_pe;
                            };
                            zd.prototype.reset = function () {
                                if (this.bv_ve) {
                                    this.bv_ve.retryCount = 0;
                                }
                            };
                            zd.prototype.destroy = function () {
                                this.bv_pe = true;
                                OK().emit("Shell.PWDReset");
                            };
                            zd.prototype.bv_ye = function () {
                                var zH = this.bv_ve.retryCount;
                                OV(
                                    this.bv_Se +
                                        " " +
                                        shell.I18n.t("RetryHandler.Times", {
                                            times: {
                                                ordinal: zH,
                                            },
                                        }),
                                    2
                                );
                            };
                            zd.retrySchemeConfig = b6;
                            zd.maxRetries = 5;
                            return zd;
                        })()
                    );
                    (function (zd) {
                        zd[(zd.LEFT = 1)] = "LEFT";
                        zd[(zd.CENTER = 2)] = "CENTER";
                        zd[(zd.RIGHT = 3)] = "RIGHT";
                    })(US || (US = {}));
                    var b9 = US.LEFT;
                    var bO = 11.5;
                    var bU = 300;
                    function bb() {
                        return shell.environment.getOrientationMode() === "land";
                    }
                    function bZ() {
                        return shell.environment.isIOS();
                    }
                    var bP;
                    var bQ;
                    var bW = W.devicePixelRatio || 1;
                    var bz = W.screen.width * bW;
                    var bh = W.screen.height * bW;
                    var bR = (function (zd) {
                        function zH() {
                            var zS = (zd !== null && zd.apply(this, arguments)) || this;
                            zS.rootElement = Object.create(null);
                            zS.bv_Ge = Object.create(null);
                            zS.bv_we = 300;
                            zS.bv_Ce = [];
                            return zS;
                        }
                        O0(zH, zd);
                        zH.prototype.onCreate = function () {
                            var zS = this;
                            bU = bb() ? 580 : 300;
                            this.bv_Te(
                                "game-title-css",
                                ".game-title {        width : 300px;        height: 17px;        position: absolute;        display: flex;        color: white;        opacity: 0.85;        text-shadow: rgb(65, 50, 24) 1px 0px 0px, rgb(65, 50, 24) 0.552px 0.85px 0px, rgb(65, 50, 24) -0.4px 0.9px 0px, rgb(65, 50, 24) -0.1px 0.15px 0px, rgb(65, 50, 24) -0.65px -0.7px 0px, rgb(65, 50, 24) 0.3px -0.95px 0px, rgb(65, 50, 24) 0.96px -0.28px 0px;        pointer-events: none;        white-space: nowrap;        z-index: 250;}"
                            );
                            this.rootElement = document.createElement("div");
                            this.rootElement.setAttribute("id", "game-title");
                            this.rootElement.classList.add("game-title");
                            this.rootElement.style.visibility = "hidden";
                            this.context.event.emit("Shell.GetScale", undefined, function (zY) {
                                if (!zY.error && zY.response) {
                                    zS.rootElement.style.width = zY.response.width + "px";
                                    zS.bv_we = zY.response.width;
                                }
                            });
                            this.bv_Ge = document.createElement("div");
                            this.bv_Ge.style.paddingLeft = "12px";
                            this.bv_Ge.style.display = "flex";
                            this.bv_Ge.style.alignItems = "center";
                            if (shell.isRTLLanguage && shell.isRTLLanguage()) {
                                this.bv_Ge.style.direction = "rtl";
                            }
                            this.rootElement.appendChild(this.bv_Ge);
                        };
                        zH.prototype.updatePosition = function (zS) {
                            if (zS === US.CENTER) {
                                this.rootElement.style.justifyContent = "center";
                                this.rootElement.style.width = `${this.bv_we}px`;
                            } else if (zS === US.LEFT) {
                                this.rootElement.style.justifyContent = "flex-start";
                                this.rootElement.style.width = `${bU}px`;
                            } else {
                                this.rootElement.style.justifyContent = "flex-end";
                                this.rootElement.style.width = `${bU}px`;
                            }
                            this.bv_Oe();
                        };
                        zH.prototype.updateFontSize = function (zS) {
                            if (zS > 0) {
                                this.rootElement.style.fontSize = `${zS}px`;
                            }
                        };
                        zH.prototype.updateZindex = function (zS) {
                            this.rootElement.style.zIndex = zS.toString();
                        };
                        zH.prototype.getFontSize = function () {
                            return parseFloat(this.bv_Ge.style.fontSize.split("px")[0]);
                        };
                        zH.prototype.toggleVisibility = function (zS) {
                            var zY = zS ? "visible" : "hidden";
                            this.rootElement.style.visibility = zY;
                        };
                        zH.prototype.setGameTitle = function (zS) {
                            var zY = this.bv_Ge;
                            if (zY) {
                                zY.textContent = zS;
                            }
                        };
                        zH.prototype.resizeTextToFitWidth = function () {
                            var zS = this.bv_Ge;
                            var zY = parseFloat(W.getComputedStyle(zS).fontSize);
                            if (zS.parentElement && zS.offsetWidth > zS.parentElement.offsetWidth) {
                                for (; zS.offsetWidth > zS.parentElement.offsetWidth; ) {
                                    zY -= 0.5;
                                    zS.style.fontSize = zY.toString() + "px";
                                }
                            }
                        };
                        zH.prototype.bv_Te = function (zS, zY) {
                            if (!this.bv_Ce.includes(zS)) {
                                var h0 = document.createElement("style");
                                h0.id = zS;
                                h0.textContent = zY;
                                document.head.appendChild(h0);
                                this.bv_Ce.push(zS);
                            }
                        };
                        zH.prototype.bv_Oe = function () {
                            var zS = 18;
                            var zY = shell.environment.hasNotch();
                            var h0 = bZ() && bz === 640 && bh === 1136;
                            if (W.navigator.standalone || W.shell.getEnvironment() === "app") {
                                if (zY) {
                                    zS = 43;
                                } else if (h0) {
                                    zS = 31;
                                } else if (bZ()) {
                                    zS = 29;
                                }
                            }
                            this.rootElement.style.height = `${zS}px`;
                        };
                        return zH;
                    })(plugin.AbstractViewComponent);
                    function bB(zd, zH, zS, zY, h0, h1) {
                        if (zS === undefined) {
                            zS = false;
                        }
                        var h2 = zH.name;
                        bO = bb() ? 11 : bO;
                        if (h0 !== undefined) {
                            b9 = h0;
                        }
                        if (h1 !== undefined) {
                            bO = h1;
                        }
                        zd.component.create(bR);
                        UY = zd.component.getInstance(bR);
                        if (zY) {
                            zY.appendChild(UY.rootElement);
                        } else {
                            zd.view.appendTo(bR, "overlay");
                        }
                        UY.updatePosition(b9);
                        UY.updateFontSize(bO);
                        if (zS) {
                            UY.setGameTitle(h2 + " - " + shell.I18n.t("GameTitleTrial.Title"));
                        } else {
                            UY.setGameTitle(h2);
                        }
                        UY.resizeTextToFitWidth();
                    }
                    function bg(zd) {
                        if (UY) {
                            UY.updateZindex(zd);
                        }
                    }
                    function bl() {
                        return UY && UY.getFontSize();
                    }
                    function bT(zd) {
                        if (UY) {
                            UY.updatePosition(zd);
                        }
                    }
                    function bc(zd) {
                        if (zd === undefined) {
                            zd = false;
                        }
                        if (UY) {
                            UY.toggleVisibility(zd);
                        }
                    }
                    z(
                        "GameTitle",
                        Object.freeze({
                            __proto__: null,
                            GameTitle: bR,
                            get GameTitlePosition() {
                                return US;
                            },
                            getTitleFontSize: bl,
                            initGameTitle: bB,
                            toggleVisibleGameTitleNode: bc,
                            updateTitleFontSize: function (zd) {
                                if (UY) {
                                    UY.updateFontSize(zd);
                                }
                            },
                            updateTitlePosition: bT,
                            updateTitleZIndex: bg,
                        })
                    );
                    (function (zd) {
                        zd[(zd.LEFT = 1)] = "LEFT";
                        zd[(zd.CENTER = 2)] = "CENTER";
                        zd[(zd.RIGHT = 3)] = "RIGHT";
                    })(bP || (bP = {}));
                    var bM = bP.RIGHT;
                    var bE = 11.5;
                    var bD = W.devicePixelRatio || 1;
                    var bw = W.screen.width * bD;
                    var bm = W.screen.height * bD;
                    function bv() {
                        return shell.environment.isIOS();
                    }
                    var by;
                    var bk = (function (zd) {
                        function zH() {
                            var zS = (zd !== null && zd.apply(this, arguments)) || this;
                            zS.rootElement = Object.create(null);
                            zS.bv_Ge = Object.create(null);
                            zS.bv_Ce = [];
                            return zS;
                        }
                        O0(zH, zd);
                        zH.prototype.onCreate = function () {
                            var zS = this;
                            this.bv_Te(
                                "time-stamp-css",
                                ".time_stamp {        height: 17px;        position: absolute;        display: flex;        color: white;        opacity: 0.85;        text-shadow: rgb(65, 50, 24) 1px 0px 0px, rgb(65, 50, 24) 0.552px 0.85px 0px, rgb(65, 50, 24) -0.4px 0.9px 0px, rgb(65, 50, 24) -0.1px 0.15px 0px, rgb(65, 50, 24) -0.65px -0.7px 0px, rgb(65, 50, 24) 0.3px -0.95px 0px, rgb(65, 50, 24) 0.96px -0.28px 0px;        pointer-events: none;        font-family: monospace;        z-index: 250;}"
                            );
                            this.rootElement = document.createElement("div");
                            this.rootElement.setAttribute("id", "time-stamp");
                            this.rootElement.classList.add("time_stamp");
                            this.context.event.emit("Shell.GetScale", undefined, function (zY) {
                                if (!zY.error && zY.response) {
                                    zS.rootElement.style.width = zY.response.width + "px";
                                }
                            });
                            this.bv_Ge = document.createElement("div");
                            this.bv_Ge.style.paddingRight = "12px";
                            this.bv_Ge.style.display = "flex";
                            this.bv_Ge.style.alignItems = "center";
                            this.rootElement.appendChild(this.bv_Ge);
                            this.bv_Re();
                        };
                        zH.prototype.updatePosition = function (zS) {
                            if (zS === bP.CENTER) {
                                this.rootElement.style.justifyContent = "center";
                            } else if (zS === bP.LEFT) {
                                this.rootElement.style.justifyContent = "flex-start";
                            } else {
                                this.rootElement.style.justifyContent = "flex-end";
                            }
                            this.bv_Oe();
                        };
                        zH.prototype.updateFontSize = function (zS) {
                            if (zS > 0) {
                                this.rootElement.style.fontSize = `${zS}px`;
                            }
                        };
                        zH.prototype.updateZindex = function (zS) {
                            this.rootElement.style.zIndex = zS.toString();
                        };
                        zH.prototype.toggleVisibility = function (zS) {
                            var zY = zS ? "visible" : "hidden";
                            this.rootElement.style.visibility = zY;
                        };
                        zH.prototype.bv_Te = function (zS, zY) {
                            if (!this.bv_Ce.includes(zS)) {
                                var h0 = document.createElement("style");
                                h0.id = zS;
                                h0.textContent = zY;
                                document.head.appendChild(h0);
                                this.bv_Ce.push(zS);
                            }
                        };
                        zH.prototype.bv_Re = function () {
                            var zS = this.bv_Ge;
                            if (zS) {
                                // TOLOOK
                                setInterval(function () {
                                    var zY = new Date();
                                    var h0 = zY.getHours();
                                    var h1 = zY.getMinutes();
                                    var h2 = zY.getSeconds();
                                    var h3 = h0 < 10 ? `0${h0}` : h0;
                                    var h4 = h1 < 10 ? `0${h1}` : h1;
                                    var h5 = h2 < 10 ? `0${h2}` : h2;
                                    if (zS) {
                                        zS.textContent = `${h3}:${h4}:${h5}`;
                                    }
                                }, 1000);
                            }
                        };
                        zH.prototype.bv_Oe = function () {
                            var zS = 18;
                            var zY = W.navigator.standalone || W.shell.getEnvironment() === "app";
                            var h0 = shell.environment.hasNotch();
                            var h1 = bv() && bw === 640 && bm === 1136;
                            if (zY) {
                                if (h0) {
                                    zS = 43;
                                } else if (h1) {
                                    zS = 31;
                                } else if (bv()) {
                                    zS = 29;
                                }
                            }
                            this.rootElement.style.height = `${zS}px`;
                        };
                        return zH;
                    })(plugin.AbstractViewComponent);
                    function bf(zd) {
                        if (zd === undefined) {
                            zd = false;
                        }
                        if (bQ) {
                            bQ.toggleVisibility(zd);
                        }
                    }
                    (function (zd) {
                        zd[(zd.LEFT = 1)] = "LEFT";
                        zd[(zd.CENTER = 2)] = "CENTER";
                        zd[(zd.RIGHT = 3)] = "RIGHT";
                    })(by || (by = {}));
                    var bN = W.devicePixelRatio || 1;
                    var bj = W.screen.width * bN;
                    var bK = W.screen.height * bN;
                    function bC() {
                        return shell.environment.getOrientationMode() === "land";
                    }
                    function bI() {
                        return shell.environment.isIOS();
                    }
                    function bx() {
                        return shell.environment.hasNotch();
                    }
                    function bL() {
                        return bI() && bj === 640 && bK === 1136;
                    }
                    function bJ() {
                        return W.navigator.standalone || W.shell.getEnvironment() === "app";
                    }
                    var bp;
                    var bs = "game-base-header-css";
                    var bV = (function (zd) {
                        function zH() {
                            var zS = (zd !== null && zd.apply(this, arguments)) || this;
                            zS.rootElement = Object.create(null);
                            zS.textDiv = Object.create(null);
                            zS.styleIDs = [];
                            zS.customCSSPropertiesList = [];
                            zS.bv_Ee = 0;
                            return zS;
                        }
                        O0(zH, zd);
                        zH.prototype.onCreate = function () {
                            var zS = this;
                            this.bv_Ee = bC() ? this.landScapeMaxWidth : this.portraitMaxWidth;
                            this.rootElement = document.createElement("div");
                            this.rootElement.setAttribute("id", this.elementID);
                            if (document.head.getElementsByTagName("style").namedItem(bs)) {
                                this.styleIDs.push(bs);
                            }
                            this.bv_Te(
                                bs,
                                ".game-base-header-css {        height: 17px;        position: absolute;        display: flex;        color: white;        opacity: 0.85;        text-shadow: rgb(65, 50, 24) 1px 0px 0px, rgb(65, 50, 24) 0.552px 0.85px 0px, rgb(65, 50, 24) -0.4px 0.9px 0px, rgb(65, 50, 24) -0.1px 0.15px 0px, rgb(65, 50, 24) -0.65px -0.7px 0px, rgb(65, 50, 24) 0.3px -0.95px 0px, rgb(65, 50, 24) 0.96px -0.28px 0px;        pointer-events: none;        z-index: 250;}"
                            );
                            this.rootElement.classList.add(bs);
                            var zY = `${this.elementID}-css`;
                            var h0 = this.bv_ke(zY, this.customCSSPropertiesList);
                            if (h0) {
                                this.bv_Te(zY, h0);
                                this.rootElement.classList.add(zY);
                            }
                            this.context.event.emit("Shell.GetScale", undefined, function (h1) {
                                if (!h1.error && h1.response) {
                                    zS.rootElement.style.width = h1.response.width + "px";
                                    if (zS.defaultWidth != null) {
                                        zS.defaultWidth = h1.response.width;
                                    }
                                }
                            });
                            this.textDiv = document.createElement("div");
                            this.textDiv.style.paddingLeft = "12px";
                            this.textDiv.style.paddingRight = "12px";
                            this.textDiv.style.display = "flex";
                            this.textDiv.style.alignItems = "center";
                            if (shell.isRTLLanguage && shell.isRTLLanguage()) {
                                this.textDiv.style.direction = "rtl";
                            }
                            this.rootElement.appendChild(this.textDiv);
                        };
                        zH.prototype.updatePosition = function (zS) {
                            if (zS === by.CENTER) {
                                this.rootElement.style.justifyContent = "center";
                                this.bv_xe(this.defaultWidth);
                            } else if (zS === by.LEFT) {
                                this.rootElement.style.justifyContent = "flex-start";
                                this.bv_xe(this.bv_Ee);
                            } else {
                                this.rootElement.style.justifyContent = "flex-end";
                                this.bv_xe(this.bv_Ee);
                            }
                            this.bv_Oe();
                        };
                        zH.prototype.updateFontSize = function (zS) {
                            if (zS > 0) {
                                this.rootElement.style.fontSize = `${zS}px`;
                            }
                        };
                        zH.prototype.updateZindex = function (zS) {
                            this.rootElement.style.zIndex = zS.toString();
                        };
                        zH.prototype.getFontSize = function () {
                            return parseFloat(this.textDiv.style.fontSize.split("px")[0]);
                        };
                        zH.prototype.toggleVisibility = function (zS) {
                            var zY = zS ? "visible" : "hidden";
                            this.rootElement.style.visibility = zY;
                        };
                        zH.prototype.resizeTextToFitWidth = function () {
                            var zS = this.textDiv;
                            var zY = parseFloat(W.getComputedStyle(zS).fontSize);
                            if (zS.parentElement && zS.offsetWidth > zS.parentElement.offsetWidth) {
                                for (; zS.offsetWidth > zS.parentElement.offsetWidth; ) {
                                    zY -= 0.5;
                                    zS.style.fontSize = zY.toString() + "px";
                                }
                            }
                        };
                        zH.prototype.updateText = function (zS) {
                            var zY = this.textDiv;
                            if (zY) {
                                zY.textContent = zS;
                            }
                        };
                        zH.prototype.bv_Te = function (zS, zY) {
                            if (!this.styleIDs.includes(zS)) {
                                var h0 = document.createElement("style");
                                h0.id = zS;
                                h0.textContent = zY;
                                document.head.appendChild(h0);
                                this.styleIDs.push(zS);
                            }
                        };
                        zH.prototype.bv_Oe = function () {
                            var zS = 18;
                            var zY = bJ();
                            var h0 = bx();
                            var h1 = bL();
                            if (zY) {
                                if (h0) {
                                    zS = 43;
                                } else if (h1) {
                                    zS = 31;
                                } else if (bI()) {
                                    zS = 29;
                                }
                            }
                            this.rootElement.style.height = `${zS}px`;
                        };
                        zH.prototype.bv_xe = function (zS) {
                            if (zS != null) {
                                this.rootElement.style.width = `${this.bv_Ee}px`;
                            }
                        };
                        zH.prototype.bv_ke = function (zS, zY) {
                            var h0 = [];
                            zY.forEach(function (h1) {
                                var h2 = h1.endsWith(";") ? h1 : `${h1};`;
                                h0.push(h2);
                            });
                            if (h0.length <= 0) {
                                return "";
                            } else {
                                return `.${zS} { ` + h0.join(" ") + " }";
                            }
                        };
                        return zH;
                    })(plugin.AbstractViewComponent);
                    var bF = (function () {
                        function zd() {}
                        zd.prototype.isLandscape = function () {
                            return bC();
                        };
                        zd.prototype.isIOS = function () {
                            return bI();
                        };
                        zd.prototype.isIphoneX = function () {
                            return bx();
                        };
                        zd.prototype.isIphoneSE = function () {
                            return bL();
                        };
                        zd.prototype.isNotBrowserMode = function () {
                            return bJ();
                        };
                        return zd;
                    })();
                    var bq = (function (zd) {
                        function zH() {
                            var zS = (zd !== null && zd.apply(this, arguments)) || this;
                            zS.elementID = "game-session-time";
                            zS.bv_Ie = 0;
                            zS.bv_je = {
                                hours: 0,
                                minutes: 0,
                                seconds: 0,
                            };
                            return zS;
                        }
                        O0(zH, zd);
                        zH.prototype.onCreate = function () {
                            zd.prototype.onCreate.call(this);
                        };
                        zH.prototype.startSessionTime = function () {
                            var zS = this;
                            if (!this.bv_Ae) {
                                this.bv_Ae = // TOLOOK
                                    setInterval(function () {
                                        var zY = ++zS.bv_Ie;
                                        var h0 = Math.floor(zY / 3600);
                                        var h1 = Math.floor((zY - h0 * 3600) / 60);
                                        var h2 = zY - (h0 * 3600 + h1 * 60);
                                        zS.bv_je = {
                                            hours: h0,
                                            minutes: h1,
                                            seconds: h2,
                                        };
                                        zS.updateTime();
                                    }, 1000);
                            }
                        };
                        zH.prototype.stopSessionTime = function () {
                            if (this.bv_Ae) {
                                clearInterval(this.bv_Ae);
                            }
                            this.bv_Ae = undefined;
                        };
                        zH.prototype.getSessionTime = function () {
                            return this.bv_je;
                        };
                        zH.prototype.updateTime = function () {
                            var zS = this.bv_je;
                            var zY = zS.hours;
                            var h0 = zS.minutes;
                            var h1 = zS.seconds;
                            var h2 = zY < 10 ? `0${zY}` : zY + "";
                            var h3 = h0 < 10 ? `0${h0}` : h0 + "";
                            var h4 = h1 < 10 ? `0${h1}` : h1 + "";
                            var h5 = zY > 0 ? `${h2}:${h3}:${h4}` : `${h3}:${h4}`;
                            var h6 = shell.I18n.t("GameCustomDisplay.SessionTime") + " " + h5;
                            this.updateText(h6);
                        };
                        return zH;
                    })(bV);
                    var bX = (function (zd) {
                        function zH() {
                            var zS = (zd !== null && zd.apply(this, arguments)) || this;
                            zS.position = by.RIGHT;
                            zS.fontSize = 11.5;
                            zS.landscapeFontSize = 11;
                            return zS;
                        }
                        O0(zH, zd);
                        zH.prototype.initGameSessionTime = function (zS, zY, h0, h1) {
                            this.fontSize = this.isLandscape() ? this.landscapeFontSize : this.fontSize;
                            if (h0 !== undefined) {
                                this.position = h0;
                            }
                            if (h1 !== undefined) {
                                this.fontSize = h1;
                            }
                            zS.component.create(bq);
                            this.bv_Ne = zS.component.getInstance(bq);
                            if (zY) {
                                zY.appendChild(this.bv_Ne.rootElement);
                            } else {
                                zS.view.appendTo(bq, "overlay");
                            }
                            this.bv_Ne.updateTime();
                            this.bv_Ne.updatePosition(this.position);
                            this.bv_Ne.updateFontSize(this.fontSize);
                        };
                        zH.prototype.updateGameSessionTimeZIndex = function (zS) {
                            if (this.bv_Ne) {
                                this.bv_Ne.updateZindex(zS);
                            }
                        };
                        zH.prototype.updateGameSessionTimeFontSize = function (zS) {
                            if (this.bv_Ne) {
                                this.bv_Ne.updateFontSize(zS);
                            }
                        };
                        zH.prototype.updateGameSessionTimePosition = function (zS) {
                            if (this.bv_Ne) {
                                this.bv_Ne.updatePosition(zS);
                            }
                        };
                        zH.prototype.toggleVisibleGameSessionTimeNode = function (zS) {
                            if (zS === undefined) {
                                zS = false;
                            }
                            if (this.bv_Ne) {
                                this.bv_Ne.toggleVisibility(zS);
                            }
                        };
                        zH.prototype.startGameSessionTime = function () {
                            if (this.bv_Ne) {
                                this.bv_Ne.startSessionTime();
                            }
                        };
                        zH.prototype.stopGameSessionTime = function () {
                            if (this.bv_Ne) {
                                this.bv_Ne.stopSessionTime();
                            }
                        };
                        zH.prototype.getGameSessionTime = function () {
                            return this.bv_Ne && this.bv_Ne.getSessionTime();
                        };
                        return zH;
                    })(bF);
                    var bG = O7.formatCurrency;
                    var bA = (function (zd) {
                        function zH() {
                            var zS = (zd !== null && zd.apply(this, arguments)) || this;
                            zS.elementID = "game-session-net-profit";
                            zS.bv_Le = true;
                            zS.bv_Pe = 0;
                            zS.bv__e = 0;
                            zS.bv_Me = 0;
                            return zS;
                        }
                        O0(zH, zd);
                        zH.prototype.onCreate = function () {
                            zd.prototype.onCreate.call(this);
                        };
                        zH.prototype.getGameSessionNetProfit = function () {
                            return this.bv_Me;
                        };
                        zH.prototype.updateGameSessionNetProfit = function (zS) {
                            this.setLatestBalance(zS);
                            this.bv_Me = this.bv__e - this.bv_Pe;
                            this.updateNetProfit();
                        };
                        zH.prototype.setLatestBalance = function (zS) {
                            if (this.bv_Le) {
                                this.bv_Pe = zS;
                                this.bv_Le = false;
                            }
                            this.bv__e = zS;
                        };
                        zH.prototype.updateNetProfit = function () {
                            var zS = shell.I18n.t("GameCustomDisplay.SessionNetPosition") + " " + bG(this.bv_Me);
                            this.updateText(zS);
                            this.resizeTextToFitWidth();
                        };
                        return zH;
                    })(bV);
                    var bd = (function (zd) {
                        function zH() {
                            var zS = (zd !== null && zd.apply(this, arguments)) || this;
                            zS.position = by.LEFT;
                            zS.fontSize = 11.5;
                            zS.landscapeFontSize = 11;
                            return zS;
                        }
                        O0(zH, zd);
                        zH.prototype.initGameSessionNetProfit = function (zS, zY, h0, h1) {
                            this.fontSize = this.isLandscape() ? this.landscapeFontSize : this.fontSize;
                            if (h0 !== undefined) {
                                this.position = h0;
                            }
                            if (h1 !== undefined) {
                                this.fontSize = h1;
                            }
                            zS.component.create(bA);
                            this.bv_De = zS.component.getInstance(bA);
                            if (zY) {
                                zY.appendChild(this.bv_De.rootElement);
                            } else {
                                zS.view.appendTo(bA, "overlay");
                            }
                            this.bv_De.updatePosition(this.position);
                            this.bv_De.updateFontSize(this.fontSize);
                            this.bv_De.updateNetProfit();
                        };
                        zH.prototype.updateSessionNetProfitZIndex = function (zS) {
                            if (this.bv_De) {
                                this.bv_De.updateZindex(zS);
                            }
                        };
                        zH.prototype.updateSessionNetProfitFontSize = function (zS) {
                            if (this.bv_De) {
                                this.bv_De.updateFontSize(zS);
                            }
                        };
                        zH.prototype.getSessionNetProfitFontSize = function () {
                            return (this.bv_De && this.bv_De.getFontSize()) || 0;
                        };
                        zH.prototype.updateSessionNetProfitPosition = function (zS) {
                            if (this.bv_De) {
                                this.bv_De.updatePosition(zS);
                            }
                        };
                        zH.prototype.updateBalance = function (zS) {
                            if (this.bv_De) {
                                this.bv_De.updateGameSessionNetProfit(zS);
                            }
                        };
                        zH.prototype.toggleVisibleGameSessionNetProfitNode = function (zS) {
                            if (zS === undefined) {
                                zS = false;
                            }
                            if (this.bv_De) {
                                this.bv_De.toggleVisibility(zS);
                            }
                        };
                        zH.prototype.getSessionNetProfit = function () {
                            return (this.bv_De && this.bv_De.getGameSessionNetProfit()) || 0;
                        };
                        return zH;
                    })(bF);
                    var bH = new ((function () {
                        function _zd3() {
                            this.bv_Ue = new bX();
                            this.bv_He = new bd();
                        }
                        Object.defineProperty(_zd3.prototype, "gameSessionTimeHelper", {
                            get: function () {
                                return this.bv_Ue;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(_zd3.prototype, "gameSessionNetProfitHelper", {
                            get: function () {
                                return this.bv_He;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        return _zd3;
                    })())();
                    (function (zd) {
                        zd[(zd.LEGACY = 0)] = "LEGACY";
                        zd[(zd.NEW = 1)] = "NEW";
                    })(bp || (bp = {}));
                    var bS;
                    var bY;
                    var Z0;
                    var Z1 = [];
                    function Z2(zd, zH) {
                        var zS = O7.timeoutCallback;
                        var zY = zd;
                        zS(2)(function () {
                            var h0 = Z0.getComponent(cc.Label);
                            Z0.setScale(cc.v2(1, 0));
                            h0.string = zH[zY];
                            zY++;
                            zY %= zH.length;
                            Z0.runAction(
                                cc.sequence(
                                    cc.scaleTo(0.125, 1).easing(cc.easeIn(1)),
                                    cc.callFunc(function () {
                                        Z2(zY, zH);
                                    })
                                )
                            );
                        });
                    }
                    var Z3;
                    var Z4;
                    var Z5;
                    var Z6;
                    var Z7 = (function () {
                        function zd() {}
                        zd.prototype.initGameOperatorDisplay = function (zH, zS, zY, h0) {
                            var h1;
                            var h2;
                            var h3;
                            var h4;
                            if (bS === undefined) {
                                bS = new cc.Node("operator_display_holder");
                                bY = new cc.Node("operator_display");
                                Z0 = new cc.Node("content");
                                bY.parent = bS;
                                Z0.parent = bY;
                                if (!cc.game.isPersistRootNode(bS)) {
                                    cc.game.addPersistRootNode(bS);
                                }
                            } else {
                                cc.warn("GameOperatorDisplay: GameOperatorDisplay node is already added!");
                            }
                            h2 = (h1 = bS).addComponent(cc.Widget);
                            h3 = cc.view.getViewportRect().height;
                            h4 = cc.view.getViewportRect().width;
                            h1.anchorX = 0.5;
                            h1.anchorY = 0.5;
                            h1.zIndex = 1000;
                            h1.width = h4;
                            h1.height = h3;
                            h2.top = 0;
                            h2.left = 0;
                            h2.right = 0;
                            h2.isAlignTop = true;
                            h2.isAlignLeft = true;
                            h2.isAlignRight = true;
                            h2.isAlignVerticalCenter = true;
                            h2.isAlignHorizontalCenter = true;
                            h2.updateAlignment();
                            (function (h5) {
                                var h6 = h5.addComponent(cc.Layout);
                                h5.width = 1080;
                                h5.height = 25;
                                h5.anchorX = 0.5;
                                h5.anchorY = 1;
                                h5.setPosition(cc.v2(0, -865));
                                h6.type = cc.Layout.Type.HORIZONTAL;
                                h6.paddingLeft = 20;
                            })(bY);
                            (function (h5, h6) {
                                var h7 = h5.addComponent(cc.Label);
                                var h8 = h5.addComponent(cc.LabelOutline);
                                h5.width = 1040;
                                h5.anchorX = 0;
                                h5.anchorY = 0.5;
                                h7.overflow = cc.Label.Overflow.CLAMP;
                                h7.lineHeight = 25;
                                h7.fontSize = h6 || 25;
                                h7.node.opacity = 153;
                                h7.horizontalAlign = cc.Label.HorizontalAlign.LEFT;
                                h7.verticalAlign = cc.Label.VerticalAlign.CENTER;
                                h8.color = new cc.Color(65, 50, 24, 255);
                                h8.width = 0.5;
                            })(Z0, h0);
                            (function (h5) {
                                if (h5 && h5.length > 0) {
                                    Z1.push(h5);
                                }
                            })(zY);
                            (function (h5) {
                                if (h5 && h5.length > 0) {
                                    for (
                                        var h6 = function (h9) {
                                                for (
                                                    var hO = h5[h9],
                                                        hU = Object.keys(hO).map(function (hQ) {
                                                            return hO[hQ];
                                                        }),
                                                        hb = [],
                                                        hZ = 0,
                                                        hP = hU.length;
                                                    hZ < hP;
                                                    hZ++
                                                ) {
                                                    hb.push(hU[hZ]);
                                                }
                                                Z1.push(hb.join(": "));
                                            },
                                            h7 = 0,
                                            h8 = h5.length;
                                        h7 < h8;
                                        h7++
                                    ) {
                                        h6(h7);
                                    }
                                }
                                if (Z1.length > 0) {
                                    Z0.getComponent(cc.Label).string = Z1[0];
                                    if (Z1.length > 1) {
                                        Z2(1, Z1);
                                    }
                                }
                            })(zS);
                            this.bv_Be(Z1);
                            zH.event.on(
                                "Shell.Scaled",
                                function (h5) {
                                    if (!h5.error) {
                                        (function () {
                                            var h6 = cc.view.getViewportRect().height;
                                            var h7 = cc.view.getViewportRect().width;
                                            bS.width = h6;
                                            bS.height = h7;
                                        })();
                                    }
                                },
                                undefined
                            );
                            zH.event.emit("Game.GetSettingMenuType", undefined, function (h5) {
                                if (!h5.error) {
                                    if (h5.response === bp.LEGACY) {
                                        bY.setPosition(cc.v2(0, -885));
                                    } else if (shell.environment.getOrientationMode() === "land") {
                                        bY.setPosition(cc.v2(-430, -368));
                                    }
                                }
                            });
                            zH.event.emit("Game.RequestLayoutInfo", undefined, function (h5) {
                                if (!h5.error && h5.response) {
                                    var h6 = h5.response;
                                    if (h6.uiOperatorDisplaySpace) {
                                        bY.setPosition(cc.v2(0, h6.uiOperatorDisplaySpace.position.y));
                                    }
                                }
                            });
                        };
                        zd.prototype.toggleVisibleGameOperatorDisplayNode = function (zH) {
                            if (zH === undefined) {
                                zH = false;
                            }
                            if (bS) {
                                bS.active = zH;
                            }
                        };
                        zd.prototype.bv_Be = function (zH) {
                            if (!(zH && zH.length !== 0)) {
                                this.toggleVisibleGameOperatorDisplayNode(false);
                            }
                        };
                        return zd;
                    })();
                    var Z8 = new ((function () {
                        function zd() {
                            this.bv_Fe = new Z7();
                        }
                        Object.defineProperty(zd.prototype, "gameOperatorDisplayHelper", {
                            get: function () {
                                return this.bv_Fe;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        return zd;
                    })())();
                    (function (zd) {
                        zd[(zd.LEFT = 1)] = "LEFT";
                        zd[(zd.CENTER = 2)] = "CENTER";
                        zd[(zd.RIGHT = 3)] = "RIGHT";
                    })(Z3 || (Z3 = {}));
                    (function (zd) {
                        zd.GameTitle = "gameTitle";
                        zd.TimeStamp = "timeStamp";
                        zd.GameSessionNetProfit = "gameSessionNetProfit";
                        zd.GameSessionTime = "gameSessionTime";
                    })(Z4 || (Z4 = {}));
                    (function (zd) {
                        zd[(zd.TITLE_TIMESTAMP = 0)] = "TITLE_TIMESTAMP";
                        zd[(zd.SESSION_NET_PROFIT_TIME = 1)] = "SESSION_NET_PROFIT_TIME";
                    })(Z5 || (Z5 = {}));
                    (function (zd) {
                        zd.BONUS_WALLET = "B";
                        zd.FREE_GAMES = "G";
                        zd.CASH = "C";
                        zd.TOURNAMENT = "P";
                        zd.REMOTE = "I";
                    })(Z6 || (Z6 = {}));
                    var Z9;
                    var ZO;
                    var ZU;
                    var Zb;
                    var ZZ;
                    var ZP = false;
                    var ZQ = {
                        gameTitle: {
                            show: false,
                            order: Z5.TITLE_TIMESTAMP,
                        },
                        timeStamp: {
                            show: false,
                            order: Z5.TITLE_TIMESTAMP,
                        },
                        gameSessionNetProfit: {
                            show: false,
                            order: Z5.SESSION_NET_PROFIT_TIME,
                        },
                        gameSessionTime: {
                            show: false,
                            order: Z5.SESSION_NET_PROFIT_TIME,
                        },
                    };
                    var ZW = undefined;
                    var Zz = false;
                    var Zh = bH.gameSessionNetProfitHelper;
                    var ZR = bH.gameSessionTimeHelper;
                    var ZB = Z8.gameOperatorDisplayHelper;
                    var Zg = false;
                    var Zl = false;
                    var ZT = false;
                    var Zc = false;
                    var ZM = {};
                    var ZE = false;
                    var Zu = false;
                    var ZD = false;
                    function Zw(zd, zH) {
                        if (zH === undefined) {
                            zH = true;
                        }
                        switch (zd) {
                            case "None":
                                ZQ.gameTitle = {
                                    show: false,
                                    order: Z5.TITLE_TIMESTAMP,
                                };
                                ZQ.timeStamp = {
                                    show: false,
                                    order: Z5.TITLE_TIMESTAMP,
                                };
                                break;
                            case "Time":
                                ZQ.gameTitle = {
                                    show: false,
                                    order: 1,
                                };
                                ZQ.timeStamp = {
                                    show: true,
                                    position: Z3.RIGHT,
                                    order: Z5.TITLE_TIMESTAMP,
                                };
                                break;
                            case "Title":
                                ZQ.gameTitle = {
                                    show: true,
                                    position: Z3.CENTER,
                                    order: Z5.TITLE_TIMESTAMP,
                                };
                                ZQ.timeStamp = {
                                    show: false,
                                    order: Z5.TITLE_TIMESTAMP,
                                };
                                break;
                            case "All":
                                ZQ.gameTitle = {
                                    show: true,
                                    position: Z3.LEFT,
                                    order: Z5.TITLE_TIMESTAMP,
                                };
                                ZQ.timeStamp = {
                                    show: true,
                                    position: Z3.RIGHT,
                                    order: Z5.TITLE_TIMESTAMP,
                                };
                        }
                        ZQ.gameSessionNetProfit = {
                            show: !ZT && Zg,
                            position: Z3.LEFT,
                            order: Z5.SESSION_NET_PROFIT_TIME,
                        };
                        ZQ.gameSessionTime = {
                            show: !Zc && Zl,
                            position: Z3.RIGHT,
                            order: Z5.SESSION_NET_PROFIT_TIME,
                        };
                        ZU = zd;
                        if (zH) {
                            Zm();
                        }
                    }
                    function Zm() {
                        if (Zk(true).length <= 0) {
                            Zu = true;
                            Z9.style.visibility = "hidden";
                            Zk(false).forEach(function (zd) {
                                Zf(zd);
                            });
                        } else {
                            ZD = true;
                            (function () {
                                Z9.style.visibility = "visible";
                                Zj();
                                if (ZE && ZD) {
                                    ZD = false;
                                    ZJ();
                                    Zp();
                                    ZK(0, true);
                                    return;
                                }
                                if (!ZE) {
                                    ZE = true;
                                    ZD = false;
                                    ZK(0, true);
                                }
                            })();
                        }
                    }
                    function Zv(zd) {
                        if (Zg) {
                            ZT = zd;
                            ZQ.gameSessionNetProfit.show = !ZT && Zg;
                        }
                        if (Zl) {
                            Zc = zd;
                            ZQ.gameSessionTime.show = !Zc && Zl;
                        }
                        Zm();
                    }
                    function Zy() {
                        return Object.values(Z4);
                    }
                    function Zk(zd) {
                        return Zy().filter(function (zH) {
                            var zS = zH;
                            if (zd) {
                                return ZQ[zS].show;
                            } else {
                                return !ZQ[zS].show;
                            }
                        });
                    }
                    function Zf(zd) {
                        switch (zd) {
                            case Z4.GameTitle:
                                bc(false);
                                break;
                            case Z4.TimeStamp:
                                bf(false);
                                break;
                            case Z4.GameSessionNetProfit:
                                Zh.toggleVisibleGameSessionNetProfitNode(false);
                                break;
                            case Z4.GameSessionTime:
                                ZR.toggleVisibleGameSessionTimeNode(false);
                        }
                    }
                    function ZN(zd, zH, zS, zY) {
                        if (!zd[zH]) {
                            zd[zH] = {};
                        }
                        function h0(h1) {
                            if (zd[zH][h1]) {
                                ZN(zd, zH + 1, zS, zY);
                            } else {
                                zd[zH][h1] = zS;
                            }
                        }
                        switch (zY) {
                            case Z3.LEFT:
                                h0("left");
                                break;
                            case Z3.CENTER:
                                h0("center");
                                break;
                            case Z3.RIGHT:
                                h0("right");
                        }
                    }
                    function Zj() {
                        ZM = {};
                        Zk(true).forEach(function (zd) {
                            var zH = zd;
                            var zS = ZQ[zH];
                            var zY = zS.position;
                            var h0 = zS.order;
                            var h1 = zY || Z3.LEFT;
                            ZN(ZM, h0, zH, h1);
                        });
                        return ZM;
                    }
                    function ZK(zd, zH) {
                        var zS = Object.keys(ZM);
                        var zY = zS[zd];
                        var h0 = ZM[zY];
                        (function (h1, h2, h3) {
                            function h4() {
                                var h6 = Zy().filter(function (h7) {
                                    var h8 = h7;
                                    return !h2.some(function (h9) {
                                        var hO = h9.key;
                                        return hO && hO === h8;
                                    });
                                });
                                h6.forEach(function (h7) {
                                    Zf(h7);
                                });
                            }
                            function h5() {
                                h2.forEach(function (h6) {
                                    var h7 = h6.key;
                                    var h8 = h6.position;
                                    if (h7) {
                                        (function (h9, hO) {
                                            switch (h9) {
                                                case Z4.GameTitle:
                                                    bc(true);
                                                    bT(hO);
                                                    break;
                                                case Z4.TimeStamp:
                                                    bf(true);
                                                    (function (hU) {
                                                        if (bQ) {
                                                            bQ.updatePosition(hU);
                                                        }
                                                    })(hO);
                                                    break;
                                                case Z4.GameSessionNetProfit:
                                                    Zh.toggleVisibleGameSessionNetProfitNode(true);
                                                    Zh.updateSessionNetProfitPosition(hO);
                                                    break;
                                                case Z4.GameSessionTime:
                                                    ZR.toggleVisibleGameSessionTimeNode(true);
                                                    ZR.updateGameSessionTimePosition(hO);
                                            }
                                        })(h7, h8);
                                    }
                                });
                                (function (h6) {
                                    if (!ZO || Zu || ZD) {
                                        return h6();
                                    }
                                    (function (h7) {
                                        ZO.style.transform = "scaleY(1)";
                                        ZZ = // TOLOOK
                                            setTimeout(function () {
                                                Zp();
                                                h7();
                                            }, 3000);
                                    })(h6);
                                })(h3);
                            }
                            if (h1) {
                                h4();
                                h5();
                                return;
                            }
                            (function (h6) {
                                if (!ZO || Zu || ZD) {
                                    return h6();
                                }
                                (function (h7) {
                                    ZO.style.transform = "scaleY(0)";
                                    Zb = // TOLOOK
                                        setTimeout(function () {
                                            ZJ();
                                            h7();
                                        }, 200);
                                })(h6);
                            })(function () {
                                h4();
                                h5();
                            });
                        })(
                            zH,
                            [
                                {
                                    key: h0.left,
                                    position: Z3.LEFT,
                                },
                                {
                                    key: h0.center,
                                    position: Z3.CENTER,
                                },
                                {
                                    key: h0.right,
                                    position: Z3.RIGHT,
                                },
                            ],
                            function () {
                                if (zS.length <= 1) {
                                    ZE = false;
                                } else {
                                    if (Zu) {
                                        ZE = false;
                                        Zu = false;
                                        return;
                                    }
                                    if (++zd >= Object.keys(ZM).length) {
                                        zd = 0;
                                    }
                                    ZK(zd, false);
                                }
                            }
                        );
                    }
                    function ZC() {
                        return ZW === Z6.CASH;
                    }
                    function ZI(zd) {
                        if (zd) {
                            var zH = zd.k;
                            Zz = zH.substring(0, 3) === "0_C";
                        } else {
                            Zz = false;
                        }
                    }
                    function Zx(zd) {
                        if (ZC() || Zz) {
                            Zv(zd);
                        }
                    }
                    function ZL() {
                        if (ZC()) {
                            Zv(false);
                        } else {
                            Zv(!Zz);
                        }
                    }
                    function ZJ() {
                        if (Zb) {
                            clearTimeout(Zb);
                            Zb = undefined;
                        }
                    }
                    function Zp() {
                        if (ZZ) {
                            clearTimeout(ZZ);
                            ZZ = undefined;
                        }
                    }
                    var Zs = z("GameHeaderHelper", {
                        initGameHeader: function (zd) {
                            if (!ZP) {
                                var zH = document.getElementById("game-overlay");
                                (Z9 = document.createElement("div")).setAttribute("id", "game-header-holder");
                                Z9.style.zIndex = "99";
                                Z9.style.pointerEvents = "none";
                                Z9.style.position = "absolute";
                                var zS = Z9;
                                var zY = (function (hU) {
                                    var hb = hU.systemModel.operatorJurisdiction;
                                    var hZ = hb.gameClock;
                                    var hP = hb.gameName;
                                    var hQ = hb.netProfitState;
                                    var hW = hb.elapsedTimeState;
                                    var hz = hZ;
                                    var hh = hP;
                                    var hR = "All";
                                    Zg = hQ;
                                    Zl = hW;
                                    if (!(hZ !== undefined && hP !== undefined)) {
                                        hz = true;
                                        hh = true;
                                    }
                                    if (hz) {
                                        if (!hh) {
                                            hR = "Time";
                                        }
                                    } else {
                                        hR = hh ? "Title" : "None";
                                    }
                                    return hR;
                                })(zd.dataSource);
                                Zw(zY, false);
                                var h0 = Zj();
                                if (Object.keys(h0).length > 1) {
                                    (ZO = document.createElement("div")).setAttribute("id", "game-header-animate-holder");
                                    ZO.style.height = "18px";
                                    ZO.style.transform = "scaleY(1)";
                                    ZO.style.transformOrigin = "center";
                                    ZO.style.transition = "transform 0.2s ease-in";
                                    zS = ZO;
                                    Z9.appendChild(ZO);
                                }
                                if (zH) {
                                    zH.appendChild(Z9);
                                }
                                var h1 = zd.context;
                                var h2 = zd.gameTitle;
                                var h3 = zd.dataSource.systemModel.operatorJurisdiction.operatorCustomDisplayList;
                                var h4 = zd.dataSource.systemModel.betType === 2;
                                var h5 = zd.dataSource.systemModel.operatorJurisdiction.gameVersion;
                                var h6 = zd.dataSource.systemModel.certifiedVersion;
                                h1.event.emit("Shell.GetScale", undefined, function (hU) {
                                    if (!hU.error && hU.response) {
                                        Z9.style.height = hU.response.height + "px";
                                        Z9.style.width = hU.response.width + "px";
                                    }
                                });
                                h1.event.on(
                                    "Shell.Scaled",
                                    function (hU) {
                                        var hb = hU.payload;
                                        Z9.style.height = `${hb.height}px`;
                                        Z9.style.width = `${hb.width}px`;
                                    },
                                    h1
                                );
                                bB(h1, h2, h4, zS);
                                (function (hU, hb) {
                                    bE = shell.environment.getOrientationMode() === "land" ? 11 : bE;
                                    hU.component.create(bk);
                                    bQ = hU.component.getInstance(bk);
                                    if (hb) {
                                        hb.appendChild(bQ.rootElement);
                                    } else {
                                        hU.view.appendTo(bk, "overlay");
                                    }
                                    bQ.updatePosition(bM);
                                    bQ.updateFontSize(bE);
                                })(h1, zS);
                                var h7 = h5 ? h6 : undefined;
                                ZB.initGameOperatorDisplay(h1, h3, h7);
                                var h8;
                                var h9 = bl();
                                h8 = h9;
                                if (bQ) {
                                    bQ.updateFontSize(h8);
                                }
                                bc(false);
                                bf(false);
                                ZB.toggleVisibleGameOperatorDisplayNode(false);
                                h1.event.once(
                                    "Game.GameInfoUpdated",
                                    function (hU) {
                                        var hb = hU.payload.dt.ls.si;
                                        ZW = hb.wt;
                                        ZI(hb.wbn);
                                    },
                                    h1
                                );
                                if (Zg) {
                                    Zh.initGameSessionNetProfit(h1, zS);
                                    Zh.updateSessionNetProfitFontSize(h9);
                                    Zh.toggleVisibleGameSessionNetProfitNode(false);
                                    h1.event.on(
                                        "Game.TransactionInfoChanged",
                                        function (hU) {
                                            var hb = hU.payload;
                                            if (hb && hb.balance && (ZC() || Zz)) {
                                                Zh.updateBalance(hb.balance);
                                            }
                                        },
                                        h1
                                    );
                                }
                                if (Zl) {
                                    ZR.initGameSessionTime(h1, zS);
                                    ZR.updateGameSessionTimeFontSize(h9);
                                    ZR.toggleVisibleGameSessionTimeNode(false);
                                }
                                function hO(hU) {
                                    if (hU.payload === "GameStarted") {
                                        ZB.toggleVisibleGameOperatorDisplayNode(true);
                                        if (Zl) {
                                            ZR.startGameSessionTime();
                                        }
                                        (function (hb) {
                                            hb.event.on(
                                                "Game.UpdateHeaderType",
                                                function (hZ) {
                                                    var hP = hZ.payload;
                                                    if (!hP) {
                                                        hP = "All";
                                                    }
                                                    Zw(hP);
                                                },
                                                hb
                                            );
                                            hb.event.on(
                                                "Game.UpdateHeaderZIndex",
                                                function (hZ) {
                                                    var hP = hZ.payload;
                                                    bg(hP);
                                                    (function (hQ) {
                                                        if (bQ) {
                                                            bQ.updateZindex(hQ);
                                                        }
                                                    })(hP);
                                                    Zh.updateSessionNetProfitZIndex(hP);
                                                    ZR.updateGameSessionTimeZIndex(hP);
                                                },
                                                hb
                                            );
                                            hb.event.on(
                                                "Game.RequestHeaderType",
                                                function (hZ) {
                                                    hZ.response = ZU;
                                                },
                                                hb
                                            );
                                            hb.event.on(
                                                "Game.ShowCustomDisplay",
                                                function () {
                                                    ZB.toggleVisibleGameOperatorDisplayNode(true);
                                                },
                                                hb
                                            );
                                            hb.event.on(
                                                "Game.HideCustomDisplay",
                                                function () {
                                                    ZB.toggleVisibleGameOperatorDisplayNode(false);
                                                },
                                                hb
                                            );
                                            if (Zg || Zl) {
                                                hb.event.on(
                                                    "Game.ReplayInitiated",
                                                    function () {
                                                        Zx(true);
                                                    },
                                                    hb
                                                );
                                                hb.event.on(
                                                    "Game.ReplayQuit",
                                                    function () {
                                                        Zx(false);
                                                    },
                                                    hb
                                                );
                                                hb.event.on(
                                                    "Game.GameInfoUpdated",
                                                    function (hZ) {
                                                        var hP = hZ.payload.dt.ls.si;
                                                        ZW = hP.wt;
                                                        ZI(hP.wbn);
                                                        ZL();
                                                    },
                                                    hb
                                                );
                                            }
                                        })(h1);
                                        ZL();
                                        Zw(zY);
                                        h1.event.off("Shell.BootStateChanged", hO, h1);
                                    }
                                }
                                h1.event.on("Shell.BootStateChanged", hO, h1);
                                ZP = true;
                            }
                        },
                        updateHeaderPositions: Zw,
                        emitShowCustomDisplayEvent: function () {
                            OK().emit("Game.ShowCustomDisplay");
                        },
                        emitHideCustomDisplayEvent: function () {
                            OK().emit("Game.HideCustomDisplay");
                        },
                    });
                    var ZV = z("GameMaintenanceHandler", {
                        checkGameMaintenance: function (zd, zH) {
                            if (zd.isGameActive()) {
                                var zS = zd.maintenanceStartDate;
                                var zY = zd.maintenanceEndDate;
                                if (zS && zY && zd.isGameMaintenenceApproaching()) {
                                    OF({
                                        title_message: shell.I18n.t("General.MaintenanceTitle"),
                                        content_message: shell.I18n.t("General.MaintenanceMessage", {
                                            startDate: zd.readableMaintenanceStartDate,
                                            endDate: zd.readableMaintenanceEndDate,
                                        }),
                                        actions: [
                                            {
                                                title: shell.I18n.t("General.DialogOk"),
                                                handler: zH,
                                            },
                                        ],
                                    });
                                    return;
                                }
                                if (zH) {
                                    zH();
                                }
                            } else {
                                var h0 = shell.Error;
                                var h1 = shell.ClientError;
                                var h2 = new h0(h1.Domain, h1.GameMaintenanceError);
                                Us.sendErrorReport("game inactive", h2.domain, h2.code);
                                UX.showError(h2, "Launch", function (h3) {
                                    if (Up.Quit === h3) {
                                        UC.quitGame();
                                    }
                                });
                            }
                        },
                    });
                    var ZF = false;
                    function Zq(zd, zH) {
                        if (!zH) {
                            zH = function (h3, h4) {
                                if (h3) {
                                    var h5 = zd.failCallback;
                                    if (h5) {
                                        h5(h3, h4);
                                    }
                                } else {
                                    var h6 = zd.finalCallback;
                                    if (h6) {
                                        h6(undefined, h4);
                                    }
                                }
                            };
                        }
                        var zS;
                        var zY = new b8();
                        var h0 = (function (h3, h4, h5) {
                            return function (h6, h7) {
                                var h8 = h3.slowNetworkHandler;
                                if (h6) {
                                    if (h4.isDestroyed) {
                                        return;
                                    }
                                    var h9 = h4.getRetryCount();
                                    var hO = h9 > 0 ? h9 : undefined;
                                    if (!h6.canDismiss) {
                                        Us.sendErrorReport(h3.name + " failed", h6.domain, h6.code, hO);
                                    }
                                    if (h6.shouldRetry && h4.canRetry()) {
                                        h4.execute();
                                    } else {
                                        if (h8) {
                                            h8.cancel();
                                        }
                                        if (ZF) {
                                            return;
                                        }
                                        var hU = h3.errorContext ? h3.errorContext : UX.getErrorContext(h3.errorTitle);
                                        UX.handleCommonError(
                                            h3.name + " failed",
                                            h6,
                                            hU,
                                            function () {
                                                if (h8) {
                                                    h8.start();
                                                }
                                                h4.reset();
                                                h4.execute();
                                            },
                                            function () {
                                                if (h5) {
                                                    h5(h6, h7);
                                                }
                                            }
                                        );
                                    }
                                } else {
                                    if (h8) {
                                        h8.cancel();
                                    }
                                    h4.destroy();
                                    if (ZF) {
                                        return;
                                    }
                                    if (h5) {
                                        h5(undefined, h7);
                                    }
                                }
                                Us.sendAnalyticsTiming({
                                    actionName: "GAME_API_REQUEST",
                                    state: "End",
                                });
                            };
                        })(zd, zY, zH);
                        var h1 = (function (h3, h4, h5) {
                            return function () {
                                h3(h4, h5);
                                Us.sendAnalyticsTiming({
                                    actionName: "GAME_API_REQUEST",
                                    state: "Start",
                                });
                            };
                        })(zd.apiRequest, h0, zd.apiRequestParam);
                        zS = zd.fallbackRequest
                            ? function () {
                                  var h3 = zd.fallbackRequest;
                                  if (h3) {
                                      var h4 = (function (h5, h6, h7) {
                                          return function (h8, h9) {
                                              if (h8) {
                                                  h6(h8, h9);
                                              } else if (h7 && h7(h9)) {
                                                  Us.sendAnalyticsTiming({
                                                      actionName: "GAME_API_REQUEST",
                                                      state: "End",
                                                  });
                                                  h5();
                                              } else {
                                                  h6(undefined, h9);
                                              }
                                          };
                                      })(h1, h0, zd.shouldRetryApiRequest);
                                      h3(h4, zd.fallbackRequestParam);
                                      Us.sendAnalyticsTiming({
                                          actionName: "GAME_API_REQUEST",
                                          state: "Start",
                                      });
                                  }
                              }
                            : h1;
                        zY.id = `handler_${zd.name}`;
                        zY.init(zd.retryMessage ? zd.retryMessage : shell.I18n.t("General.RetryNetwork"), zS);
                        var h2 = zd.slowNetworkHandler;
                        if (h2) {
                            h2.start();
                        }
                        h1();
                    }
                    var ZX;
                    var ZG = z("RequestHandler", {
                        doAPIRequest: Zq,
                        doTransactionAPIRequest: function (zd, zH, zS) {
                            var zY = zH.transactionModel.transactionId;
                            zd.errorContext = "Transaction";
                            zd.name = "game api";
                            zd.shouldRetryApiRequest = function () {
                                var h0 = zH.transactionModel.transactionId;
                                return zY === h0;
                            };
                            Zq(zd, zS);
                        },
                        reportCriticalError: function () {
                            ZF = true;
                        },
                    });
                    function ZA() {
                        return M.getPreference(ZX).getItem("gameName");
                    }
                    var Zd = {
                        getGameName: function (zd, zH) {
                            zd.getGameName(function (zS, zY) {
                                var h0;
                                if (!(zS || zY === undefined)) {
                                    h0 = zY;
                                    M.getPreference(ZX).setItem("gameName", h0.dt);
                                }
                                if (zH) {
                                    zH();
                                }
                            });
                        },
                        getGameNamesFromStorage: ZA,
                        getGameNameWithId: function (zd) {
                            var zH = ZA();
                            if (zH && zH[zd]) {
                                return zH[zd];
                            } else {
                                return zd.toString();
                            }
                        },
                        setupGameNameDomain: function (zd) {
                            ZX = zd;
                        },
                    };
                    var ZH = (function () {
                        function zd() {
                            return [200, 10, 300].reduce(function (zS, zY) {
                                return zS * zY;
                            }, 144);
                        }
                        function zH(zS, zY, h0) {
                            if (
                                (function (h2) {
                                    return ON(W[Oy(0)].now(), h2);
                                })(zS)
                            ) {
                                if (!zY) {
                                    zY = W.Number("0.0005") * 100;
                                }
                                if (h0) {
                                    var h1 = (function (h2, h3) {
                                        var h4 = (W[Oy(0)].now() - h2) / (h3 * zd());
                                        return W[Oy(4)].min(1, h4 * h4);
                                    })(zS, h0);
                                    zY *= h1;
                                }
                                return ON(W[("Mathew", OR(-2, "Mathew"))].random(), zY);
                            }
                            return true;
                        }
                        return [
                            function () {
                                return zH(
                                    ["0x4c72"].reduce(function (zS, zY) {
                                        return zS + W.Number(zY);
                                    }, 658) * zd(),
                                    W.Number("0.0005") * 100,
                                    28
                                );
                            },
                            zH,
                        ];
                    })();
                    var ZS = ZH[0];
                    function ZY() {
                        return (ZS() + "EQ").substring(1) === "rueEQ";
                    }
                    function P0(zd) {
                        zd.response = (function () {
                            var zH = 0;
                            if (Oc(Ow(" Math.random"))) {
                                zH |= 1;
                            }
                            var zS = Ov(6);
                            if (Oc(Ow(" setTimeout ")) || zS()) {
                                zH |= 2;
                            }
                            var zY = Ov(0);
                            if (Oc(Ow(" Date.now")) || zY()) {
                                zH |= 4;
                            }
                            var h0 = (function () {
                                var h2 = -1;
                                try {
                                    var h3 = W.Object.getOwnPropertyDescriptor(W, "isSecureContext");
                                    if (h3 === undefined) {
                                        h2 = 2;
                                    } else if (Oc(h3.get)) {
                                        h2 = h3.get.apply(W) ? 1 : 0;
                                    }
                                } catch (h4) {}
                                return h2;
                            })();
                            var h1 = (function () {
                                var h2 = "subtle";
                                var h3 = Ou(W, "crypto");
                                if (!h3) {
                                    return -1;
                                }
                                if (OM(h3, h2)) {
                                    return -1;
                                }
                                var h4 = OD(h3, h2);
                                if (h4 != null) {
                                    if (
                                        ["digest", "sign", "importKey"].reduce(function (h5, h6) {
                                            return h5 + (OM(h4, h6) || !Oc(OD(h4, h6)) ? 1 : 0);
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
                            if (!(h1 < 0 || (h1 && !h0) || (!h1 && h0))) {
                                zH |= 8;
                            }
                            return zH;
                        })();
                    }
                    var P1;
                    var P2;
                    var P3 = O7.tickCallback;
                    var P4 = O7.setDefaultCurrencyFormat;
                    (function (zd) {
                        zd.BONUS_WALLET = "B";
                        zd.FREE_GAME = "G";
                        zd.CASH_WALLET = "C";
                        zd.TOURNAMENT = "P";
                        zd.REMOTE = "I";
                    })(P1 || (P1 = {}));
                    (function (zd) {
                        zd[(zd.PAUSE_GAME = 0)] = "PAUSE_GAME";
                        zd[(zd.RESUME_GAME = 1)] = "RESUME_GAME";
                    })(P2 || (P2 = {}));
                    var P5 = P2.RESUME_GAME;
                    var P6 = false;
                    var P7 = Object.create(null);
                    var P8 = Object.create(null);
                    var P9 = Object.create(null);
                    var PO = Object.create(null);
                    var PU = Object.create(null);
                    var Pb = Object.create(null);
                    var PZ = Object.create(null);
                    var PP = false;
                    var PQ = false;
                    var PW = [];
                    var Pz = "Resume";
                    var Ph = 0;
                    var PR = 0;
                    var PB = Object.create(null);
                    var Pg = undefined;
                    var Pl = undefined;
                    function PT(zd) {
                        var zH;
                        var zS;
                        var zY = zd.payload;
                        if (typeof zY == "boolean") {
                            zH = zY;
                            zS = false;
                        } else {
                            zH = zY.isBlocked;
                            zS = zY.shouldFreeze;
                        }
                        if (zH) {
                            PR++;
                            if (zS && !cc.game.isPaused()) {
                                P3(true)(function () {
                                    if (PR > 0) {
                                        cc.game.pause();
                                    }
                                });
                            }
                            if (PR > 1) {
                                cc.warn("GameEventHandler : Game play UI is already blocked");
                                return;
                            }
                        } else {
                            if (PR === 0) {
                                cc.warn("GameEventHandler : Game play UI is not blocked");
                                return;
                            }
                            PR--;
                            if (cc.game.isPaused()) {
                                cc.game.resume();
                            }
                            if (PR > 0) {
                                return;
                            }
                        }
                        Object.keys(P9).forEach(function (h0) {
                            var h1 = P9[h0];
                            if (h1) {
                                h1(zH);
                            }
                        });
                    }
                    var Pc = 0;
                    function PM(zd) {
                        OK().emit("Game.StateChanged", zd);
                        Pz = zd;
                    }
                    function PE(zd, zH) {
                        PU[zd] = zH;
                    }
                    var Pu = z("GameEventHandler", {
                        subscribeTransactionInfoChangedEvent: function () {
                            OK().on("Game.TransactionInfoChanged", function (zd) {
                                Object.keys(PU).forEach(function (zH) {
                                    var zS = PU[zH];
                                    if (zS) {
                                        zS(zd.payload);
                                    }
                                });
                            });
                        },
                        subscribeTransactionInfoRequestEvent: function () {
                            PE("saveInfo", function (zd) {
                                Object.keys(zd).forEach(function (zH) {
                                    PB[zH] = zd[zH];
                                });
                            });
                            OK().on("Game.RequestCurrentTransactionInfo", function (zd) {
                                zd.response = PB;
                            });
                        },
                        subscribeGameSessionRequestEvent: function (zd) {
                            var zH = OK();
                            zH.on("Game.RequestSession", function (zS) {
                                var zY = zd.systemModel;
                                var h0 = zY.gameId;
                                var h1 = zY.operatorToken;
                                var h2 = zY.operatorPlayerSession;
                                var h3 = zY.betType;
                                var h4 = zY.platform;
                                var h5 = zY.apiDomain;
                                var h6 = zY.operatorJurisdiction;
                                var h7 = zY.gameApiSubdomain;
                                var h8 = zd.playerModel;
                                var h9 = h8.token;
                                var hO = h8.playerName;
                                var hU = h8.playerId;
                                var hb = h8.currencySymbol;
                                zS.response = {
                                    gameId: h0,
                                    token: h9,
                                    operatorToken: h1,
                                    sessionId: h2,
                                    playerName: hO,
                                    playerId: hU,
                                    betType: h3,
                                    platform: h4,
                                    apiDomain: h5,
                                    gameApiSubdomain: h7,
                                    currencySymbol: hb,
                                    operatorJurisdictionConfig: h6,
                                    serviceEngineUrl: zd.systemModel.getFullServiceEngineUrl(),
                                    gameEngineUrl: zd.systemModel.getFullGameEngineUrl(),
                                };
                            });
                            (function (zS, zY) {
                                zS.on(
                                    "Game.TransactionStateStarted",
                                    (function (h0) {
                                        return function (h1) {
                                            h1.response = h0();
                                        };
                                    })(zY),
                                    undefined
                                );
                            })(zH, ZY);
                        },
                        addGamePlayUIBlockEventCallback: function (zd, zH) {
                            if (typeof zd == "function") {
                                zH = zd;
                                P9.default = zH;
                            } else {
                                P9[zd] = zH;
                            }
                        },
                        subscribeOperatorCurrencyFormatUpdateEvent: function () {
                            var zd = OK();
                            zd.on("Game.UpdateLocaleCurrencyFormat", function (zH) {
                                var zS = zH.payload;
                                P4({
                                    groupSeparator: zS.group,
                                    decimalSeparator: zS.separator,
                                });
                                zd.emit("Game.LocaleCurrencyFormatChanged", zS);
                            });
                        },
                        subscribeGameInfoUpdateSuccessEvent: function (zd, zH) {
                            var zS = OK();
                            zS.on("Game.GameInfoUpdateSuccess", function (zY) {
                                var h0 = zY.payload;
                                zd.updateGameInfo(h0);
                                var h1 = zd.playerModel.playerName;
                                var h2 = h0.dt.ls.si.sid;
                                U0("version: " + zd.systemModel.version + "\nuser: " + h1 + "\nspinid: " + h2);
                                zH(function () {
                                    zS.emit("Game.WalletChangedSuccess");
                                });
                            });
                        },
                        subscribeGameBalanceUpdateEvent: function (zd, zH) {
                            var zS = OK();
                            zS.on("Game.UpdateTransactionInfo", function (zY) {
                                var h0 = zY.payload;
                                var h1 = (h0.balance || 0) + (h0.freeBalance || 0);
                                if (zd.isGameReplaying) {
                                    PW.push(h1);
                                    if (PW.length === 1) {
                                        zS.once("Game.ReplayQuit", function () {
                                            for (var h2 = 0, h3 = PW.length; h2 < h3; h2++) {
                                                var h4 = PW[h2];
                                                zd.playerModel.balance = h4;
                                                zH(h4);
                                            }
                                            PW = [];
                                        });
                                    }
                                } else {
                                    zd.playerModel.balance = h1;
                                    zH(h1);
                                }
                            });
                        },
                        subscribeGameLoginEvent: function (zd, zH) {
                            var zS = OK();
                            zS.on("Game.RequestLogin", function (zY) {
                                var h0 = zY.payload;
                                zd.systemModel.betType = h0.betType;
                                zd.playerModel.walletKey = h0.walletKey;
                                if (zH) {
                                    zH();
                                }
                            });
                            zS.on("Game.LoginStateChanged", function (zY) {
                                if (zY.payload === "Complete") {
                                    var h0 = zd.playerModel.playerName;
                                    var h1 = zd.transactionModel.transactionId;
                                    U0("version: " + zd.systemModel.version + "\nuser: " + h0 + "\nspinid: " + h1);
                                }
                            });
                        },
                        subscribeTweaksOnShowEvent: function () {},
                        subscribeTweaksOnDismissEvent: function () {},
                        subscribeGameLayoutInfoRequestEvent: function (zd) {
                            OK().on("Game.RequestLayoutInfo", function (zH) {
                                zH.response = zd;
                            });
                        },
                        subscribeGamePlayUIBlockEvent: function () {
                            var zd = OK();
                            zd.on("Game.BlockUI", PT);
                            (function (zH) {
                                zH.on("Game.TransactionStatePaused", P0, undefined);
                            })(zd);
                        },
                        subscribeGameConfigRequestEvent: function (zd) {
                            var zH = OK();
                            var zS = zd.systemModel;
                            var zY = zS.version;
                            var h0 = zS.certifiedVersion;
                            var h1 = zS.gameTitle;
                            var h2 = zS.noAudio;
                            var h3 = zS.operatorJurisdiction.replayVersion;
                            zH.on("Game.RequestConfig", function (h4) {
                                h4.response = {
                                    version: zY,
                                    certifiedVersion: h0,
                                    gameTitle: h1,
                                    noAudio: h2,
                                    replaySupported: h3 > 0,
                                    replayVersion: h3,
                                };
                            });
                        },
                        subscribeGameConfigUpdateEvent: function () {
                            OK().on("Game.UpdateConfig", function (zd) {
                                var zH = zd.payload;
                                if (zH) {
                                    if (zH.retryConfig) {
                                        b8.setRetryHandlerConfig(zH.retryConfig);
                                    }
                                    if (zH.redirectUrl) {
                                        UC.setCustomRedirectUrl(zH.redirectUrl);
                                    }
                                }
                            });
                        },
                        subscribePlayerInfoRequestEvent: function (zd) {
                            OK().on("Game.RequestPlayerInfo", function (zH) {
                                var zS = zd.playerModel;
                                var zY = zS.playerId;
                                var h0 = zS.playerName;
                                var h1 = zS.playerNickname;
                                var h2 = zS.currency;
                                var h3 = zS.currencySymbol;
                                var h4 = zS.walletKey;
                                zH.response = {
                                    playerId: zY,
                                    playerName: h0,
                                    playerNickname: h1,
                                    currency: h2,
                                    currencySymbol: h3,
                                    walletKey: h4,
                                };
                            });
                        },
                        subscribeGameReadyEvent: function () {
                            var zd = OK();
                            zd.on("Shell.BootStateChanged", function (zH) {
                                if (zH.payload === "GameReady") {
                                    zd.emit("Analytics.Event", {
                                        actionName: "LoadGameComplete",
                                    });
                                }
                            });
                        },
                        subscribeGameInfoUpdateEvent: function (zd, zH) {
                            var zS = OK();
                            zS.on("Game.UpdateGameInfo", function (zY) {
                                var h0 = zY.payload;
                                var h1 = h0.param;
                                var h2 = h0.callback;
                                ZG.doAPIRequest(
                                    {
                                        name: "update game info",
                                        apiRequest: zd.updateGameInfo.bind(zd),
                                        apiRequestParam: h1,
                                        errorTitle: shell.I18n.t("General.ErrorChangeFailed"),
                                    },
                                    function (h3, h4) {
                                        if (h2) {
                                            h2(h3, h4);
                                        }
                                        if (!h3 && h4) {
                                            zH(function () {
                                                zS.emit("Game.WalletChangedSuccess");
                                            });
                                        }
                                    }
                                );
                            });
                        },
                        subscribeAudioPlayRateUpdateEvent: function (zd) {
                            if (zd) {
                                OK().on("Game.SetAudioPlayRate", function (zH) {
                                    zd(zH.payload);
                                });
                            } else {
                                cc.warn("subscribeAudioPlayRateUpdateEvent :: did not pass updateAudioPlayRateCallback in initializeGame config");
                            }
                        },
                        subscribeStoredGamesNameRequestEvent: function () {
                            OK().on("Game.RequestGameNames", function (zd) {
                                zd.response = Zd.getGameNamesFromStorage();
                            });
                        },
                        subscribeSessionSocketErrorEvent: function (zd) {
                            OK().on("Game.OperatorSocketError", function (zH) {
                                if (zd) {
                                    zd(zH.payload);
                                }
                            });
                        },
                        subscribeSessionSocketConnectedEvent: function (zd) {
                            OK().on("Game.OperatorSocketConnected", function (zH) {
                                if (zd) {
                                    zd(zH.payload);
                                }
                            });
                        },
                        subscribeSessionSocketConnectionStatusRequestEvent: function () {
                            OK().on("Game.RequestOperatorSocketConnectionStatus", function (zd) {
                                var zH = U6.WebSocket;
                                zd.response = !!zH && zH.checkOperationSocketConnectionStatus();
                            });
                        },
                        subscribeInUIIdleStateStatusUpdateEvent: function () {
                            OK().on("Game.InUIIdleState", function (zd) {
                                P6 = zd.payload;
                                Object.keys(PZ).forEach(function (h2) {
                                    var h3 = PZ[h2];
                                    if (h3) {
                                        h3(P6);
                                    }
                                });
                                if (P6) {
                                    var zH = Object.keys(Pb);
                                    if (zH.length === 0) {
                                        return;
                                    }
                                    Pc = 0;
                                    function zS(h2) {
                                        var h3 = Pb[h2];
                                        Pc++;
                                        function h4() {
                                            var h5 = Object.keys(Pb);
                                            if (Pc < h5.length) {
                                                zS(h5[Pc]);
                                            }
                                        }
                                        if (h3) {
                                            h3(true, function () {
                                                if (P6) {
                                                    h4();
                                                }
                                            });
                                        } else {
                                            h4();
                                        }
                                    }
                                    zS(zH[0]);
                                } else {
                                    for (var zY = Object.keys(Pb), h0 = 0; h0 < Pc; h0++) {
                                        var h1 = Pb[zY[h0]];
                                        if (h1) {
                                            h1(false);
                                        }
                                    }
                                }
                            });
                        },
                        subscribeGameRequestQuitEvent: function () {
                            OK().on("Game.Quit", function (zd) {
                                UF.quitGameWithEvent(zd.payload || "unknown");
                            });
                        },
                        subscribeGameFlowStateRequestEvent: function () {
                            OK().on("Game.RequestGameFlowState", function (zd) {
                                zd.response = Pg;
                            });
                        },
                        subscribeGameEffectStateRequestEvent: function () {
                            OK().on("Game.RequestGameDisplayState", function (zd) {
                                zd.response = Pl;
                            });
                        },
                        subscribeUIIdleStateRequestEvent: function () {
                            OK().on("Game.RequestUIIdleState", function (zd) {
                                zd.response = P6;
                            });
                        },
                        subscribeRequestPlayEvent: function (zd) {
                            OK().on("Game.RequestPlay", function (zH) {
                                function zS(h7, h8) {
                                    if (zH.response) {
                                        zH.response.result = h7;
                                        zH.response.error = h8;
                                    } else {
                                        zH.response = {
                                            result: h7,
                                            error: h8,
                                        };
                                    }
                                }
                                if (!zd.isGameReplaying) {
                                    var zY = zH.payload.totalBet;
                                    var h0 = zd.playerModel;
                                    var h1 = h0.minimumBetAmount;
                                    var h2 = h0.balance;
                                    var h3 = h0.walletType;
                                    var h4 = h0.walletKey;
                                    if (zY < h1) {
                                        var h5 = shell.ClientError;
                                        zS("InvalidAmount", (h6 = new (0, shell.Error)(h5.Domain, h5.PlayAmountInvalidError)));
                                    } else if (h3 !== P1.FREE_GAME && zY > h2) {
                                        var h6 = (function (h7, h8) {
                                            var h9 = "";
                                            var hO = undefined;
                                            var hU = shell.ClientError;
                                            var hb = shell.Error;
                                            var hZ = P1.CASH_WALLET;
                                            var hP = P1.BONUS_WALLET;
                                            if (h7 === hZ || (h7 === hP && h8.startsWith("0_C"))) {
                                                hO = hU.InsufficientFund;
                                                h9 =
                                                    shell.I18n.t("InsufficientFund.Message") +
                                                    '\n<span style="font-size: 10px">' +
                                                    shell.I18n.t("InsufficientFund.SubMessage") +
                                                    "</span>";
                                            } else if (h7 === hP) {
                                                hO = hU.BonusWalletInsufficientBalance;
                                                h9 = shell.I18n.t("ErrorLib.BonusWalletInsufficientBalanceMessage");
                                            } else {
                                                hO = hU.EventInsufficientBalance;
                                                h9 = shell.I18n.t("ErrorLib.EventInsufficientBalanceMessage");
                                            }
                                            OK().emit("Alert.Show", {
                                                title: shell.I18n.t("InsufficientFund.Title"),
                                                content: h9,
                                                actions: [
                                                    {
                                                        label: shell.I18n.t("General.DialogOk"),
                                                        handler: "dismiss",
                                                        type: "Neutral",
                                                    },
                                                ],
                                            });
                                            return new hb(hU.Domain, hO);
                                        })(h3, h4);
                                        zS("InsufficientFund", h6);
                                    }
                                }
                                if (!zH.response) {
                                    zS("NoError");
                                }
                            });
                        },
                        emitGameStateChangedEvent: PM,
                        emitGameFlowStateChangedEvent: function (zd) {
                            Pg = zd;
                            OK().emit("Game.FlowStateChanged", zd);
                        },
                        emitGameEffectStateChangedEvent: function (zd) {
                            Pl = zd;
                            OK().emit("Game.DisplayStateChanged", zd);
                        },
                        emitGameWinAnnouncement: function () {},
                        emitLoginDoneEvent: function (zd) {
                            var zH = OK();
                            var zS = zd.systemModel;
                            var zY = zS.gameId;
                            var h0 = zS.operatorToken;
                            var h1 = zS.operatorPlayerSession;
                            var h2 = zS.betType;
                            var h3 = zS.platform;
                            var h4 = zS.apiDomain;
                            var h5 = zS.operatorJurisdiction;
                            var h6 = zd.playerModel;
                            var h7 = {
                                gameId: zY,
                                token: h6.token,
                                operatorToken: h0,
                                sessionId: h1,
                                playerName: h6.playerName,
                                playerId: h6.playerId,
                                betType: h2,
                                platform: h3,
                                apiDomain: h4,
                                currencySymbol: h6.currencySymbol,
                                operatorJurisdictionConfig: h5,
                                serviceEngineUrl: zd.systemModel.getFullServiceEngineUrl(),
                                gameEngineUrl: zd.systemModel.getFullGameEngineUrl(),
                            };
                            zH.emit("Game.SessionChanged", h7);
                        },
                        emitGameLoginEvent: function (zd) {
                            OK().emit("Game.LoginStateChanged", zd);
                        },
                        emitGameNotifyPauseEvent: function () {
                            if (P5 === P2.PAUSE_GAME) {
                                PM("Pause");
                            }
                        },
                        emitAutoplayStartedEvent: function (zd) {
                            if (PQ) {
                                cc.warn("emitAutoplayStartedEvent :: Already in auto spin!");
                            } else {
                                var zH = OK();
                                PO = function () {
                                    PQ = false;
                                    if (zd) {
                                        zd();
                                    }
                                    zH.emit("Game.AutoplayStateChanged", "Stop");
                                };
                                PQ = true;
                                zH.emit("Game.AutoplayStateChanged", "Start");
                                zH.once("Game.StopAutoplay", PO);
                            }
                        },
                        emitAutoplayStoppedEvent: function () {
                            if (PQ) {
                                PQ = false;
                                var zd = OK();
                                zd.emit("Game.AutoplayStateChanged", "Stop");
                                zd.off("Game.StopAutoplay", PO);
                            } else {
                                cc.warn("emitAutoplayStoppedEvent :: Not in auto spin!");
                            }
                        },
                        emitErrorLogEvent: function (zd, zH) {
                            OK().emit("Error.Log", {
                                tag: zd,
                                message: zH,
                            });
                        },
                        emitGamePlayUIBlockEvent: function (zd) {
                            OK().emit("Game.BlockUI", zd);
                        },
                        emitRequestPlayEvent: function (zd, zH) {
                            OK().emit("Game.RequestPlay", zd, function (zS) {
                                if (zH) {
                                    zH(!zS.response || zS.response.result === "NoError");
                                }
                            });
                        },
                        subscribeGamePauseEvent: function () {
                            var zd = OK();
                            zd.on("Game.Pause", function (zH) {
                                Ph++;
                                if (P5 !== P2.PAUSE_GAME) {
                                    P5 = P2.PAUSE_GAME;
                                    var zS = zH.payload;
                                    if (!!zS && zS.isBlocked && !PP) {
                                        zd.emit("Shell.EnableUIBlock", true);
                                        PP = true;
                                    }
                                    Object.keys(P7).forEach(function (zY) {
                                        var h0 = P7[zY];
                                        if (h0) {
                                            h0();
                                        }
                                    });
                                } else {
                                    cc.warn("GameEventHandler : Operator Game State already in PAUSE GAME state!");
                                }
                            });
                        },
                        subscribeGameResumeEvent: function () {
                            var zd = OK();
                            zd.on("Game.Resume", function () {
                                if (P5 !== P2.RESUME_GAME) {
                                    if (!(--Ph > 0)) {
                                        P5 = P2.RESUME_GAME;
                                        if (PP) {
                                            zd.emit("Shell.EnableUIBlock", false);
                                            PP = false;
                                        }
                                        Object.keys(P8).forEach(function (zH) {
                                            var zS = P8[zH];
                                            if (zS) {
                                                zS();
                                            }
                                        });
                                        if (Pz === "Pause") {
                                            PM("Resume");
                                        }
                                    }
                                } else {
                                    cc.warn("GameEventHandler : Operator Game State already in RESUME GAME state!");
                                }
                            });
                        },
                        addGamePauseEventCallback: function (zd, zH) {
                            P7[zd] = zH;
                            if (P5 === P2.PAUSE_GAME && zH) {
                                zH();
                            }
                        },
                        addGameResumeEventCallback: function (zd, zH) {
                            P8[zd] = zH;
                            if (P5 === P2.RESUME_GAME && zH) {
                                zH();
                            }
                        },
                        removeGamePauseEventCallback: function (zd) {
                            if (Object.keys(P7).indexOf(zd) !== -1) {
                                P7[zd] = undefined;
                            }
                        },
                        removeGameResumeEventCallback: function (zd) {
                            if (Object.keys(P8).indexOf(zd) !== -1) {
                                P8[zd] = undefined;
                            }
                        },
                        addTransactionInfoChangedEventCallback: PE,
                        removeTransactionInfoChangedEventCallback: function (zd) {
                            if (Object.keys(PU).indexOf(zd) !== -1) {
                                PU[zd] = undefined;
                            }
                        },
                        addInUIIdleStateCallback: function (zd, zH, zS) {
                            if (zH) {
                                PZ[zd] = zS;
                            } else {
                                Pb[zd] = zS;
                            }
                        },
                        removeInUIIdleStateCallback: function (zd) {
                            if (Object.keys(Pb).indexOf(zd) !== -1) {
                                Pb[zd] = undefined;
                            }
                            if (Object.keys(PZ).indexOf(zd) !== -1) {
                                PZ[zd] = undefined;
                            }
                        },
                        isGameStatePaused: function () {
                            return P5 === P2.PAUSE_GAME;
                        },
                    });
                    function PD(zd) {
                        (function (zH) {
                            return O3(this, undefined, undefined, function () {
                                var zS;
                                var zY;
                                return O4(this, function (h0) {
                                    switch (h0.label) {
                                        case 0:
                                            (zS = [Om])[1] = OT;
                                            zS[2] = Ok;
                                            return [4, Oh(zS)()];
                                        case 1:
                                            if (h0.sent()) {
                                                zY = (function (h1) {
                                                    return function (h2) {
                                                        return O3(this, undefined, undefined, function () {
                                                            var h3;
                                                            var h4;
                                                            var h5;
                                                            return O4(this, function (h6) {
                                                                switch (h6.label) {
                                                                    case 0:
                                                                        if (typeof h2 == "string") {
                                                                            if ((h3 = W.document[OB("rgetElementById")](h2)) == null) {
                                                                                return [2, false];
                                                                            }
                                                                            h2 = h3;
                                                                        }
                                                                        if (!(h4 = h2[Og("endataset")].rev) || h4.length <= W.Number("0x4")) {
                                                                            return [2, false];
                                                                        } else {
                                                                            h5 = (h5 = h2[OB("etextContent")] || "").trim();
                                                                            return [4, h1(h5, h4)];
                                                                        }
                                                                    case 1:
                                                                        return [2, h6.sent()];
                                                                }
                                                            });
                                                        });
                                                    };
                                                })(Oj(zH));
                                                return [4, zY(OB("imain-script"))];
                                            } else {
                                                return [3, 3];
                                            }
                                        case 2:
                                            return [2, h0.sent()];
                                        case 3:
                                            return [2, true];
                                    }
                                });
                            });
                        })(Og("stQ22cRMoV3wAHqv52")).then(
                            function (zH) {
                                zd.response = zH;
                                zd.propagate();
                            },
                            function () {
                                zd.response = false;
                                zd.propagate();
                            }
                        );
                        zd.intercept();
                    }
                    function Pw(zd, zH, zS) {
                        function zY() {
                            zd.login(function (h0) {
                                var h1;
                                if (h0) {
                                    UX.handleCommonError("Login Error", h0, "Launch", zY);
                                } else {
                                    h1 = zH;
                                    Pu.emitLoginDoneEvent(h1);
                                    (OK().on("Game.TransactionStateEnded", PD, undefined),
                                    function (h2) {
                                        if (h2) {
                                            h2();
                                        }
                                    })(zS);
                                }
                            });
                        }
                        zY();
                    }
                    var Pm = O7.sequenceCallback;
                    function Pv(zd) {
                        var zH = document.getElementById("game-overlay");
                        var zS = zH ? parseFloat(zH.style.height) * 0.5 : 0;
                        var zY = {
                            label: shell.I18n.t("General.ResourceLoadingMessage"),
                            y: zS,
                            opacity: 1,
                            enableBackground: true,
                            isFullBackground: true,
                            inValue: 0,
                            inDuration: 0.3,
                            outValue: 0,
                            outDuration: 0.3,
                        };
                        OK().emit("Loading.Show", zY);
                        if (zd) {
                            zd();
                        }
                    }
                    function Py() {
                        Pu.emitGameLoginEvent("Complete");
                        OK().emit("Loading.Hide");
                    }
                    var Pk;
                    var Pf;
                    function PN(zd) {
                        var zH;
                        var zS;
                        var zY;
                        Pm(
                            Pv,
                            (function (h0) {
                                return function (h1) {
                                    var h2;
                                    var h3;
                                    h2 = h0.systemModel.operatorJurisdiction.gamePluginList;
                                    h3 = OC();
                                    h2.forEach(function (h4) {
                                        var h5 = h3.queryBundle(h4.name);
                                        if (h5) {
                                            h3.destroyBundle(h5);
                                        }
                                    });
                                    if (h1) {
                                        h1();
                                    }
                                };
                            })(zd.dataSource),
                            ((zS = zd.apiClient),
                            (zY = zd.dataSource),
                            function (h0) {
                                Pw(zS, zY, h0);
                            }),
                            (function (h0) {
                                return function (h1) {
                                    UG(h0.systemModel.operatorJurisdiction.gamePluginList, h1);
                                };
                            })(zd.dataSource),
                            (function (h0) {
                                return function (h1) {
                                    ZG.doAPIRequest({
                                        name: "get game info",
                                        apiRequest: h0.getGameInfo.bind(h0),
                                        apiRequestParam: {},
                                        errorTitle: shell.I18n.t("General.ErrorChangeFailed"),
                                        finalCallback: h1,
                                    });
                                };
                            })(zd.apiClient),
                            ((zH = zd.refreshWorldCallback),
                            function (h0) {
                                zH(h0);
                            })
                        )(Py);
                    }
                    (function (zd) {
                        zd.bv_We = "_config";
                        zd.bv_qe = "_map";
                    })(Pk || (Pk = {}));
                    var Pj;
                    var PK = [];
                    function PC() {
                        if (!Pf) {
                            throw Error("ResourceQualifierHelper :: instance is not init!");
                        }
                    }
                    function PI(zd) {
                        var zH = cc.assetManager.getBundle(zd);
                        if (!zH) {
                            throw Error(`ResourceQualifierHelper :: bundle ${zd} doesn't exist!`);
                        }
                        return zH;
                    }
                    function Px(zd, zH) {
                        if (!zH || !zH.language) {
                            var zS = shell.I18n.locale();
                            var zY = zS.indexOf("-");
                            if (zY !== -1) {
                                zH = zH || Object.create(null);
                                var h0 = zS.substring(zY + 1);
                                zH.language = function (h1) {
                                    if (h1 === h0) {
                                        return 1;
                                    } else {
                                        return 0;
                                    }
                                };
                            }
                        }
                        (function (h1) {
                            delete h1.browser;
                            delete h1.os;
                        })(zd);
                        Pf = new shell.ResourceQualifier(zd, zH);
                        PL(cc.resources.name);
                    }
                    function PL(zd) {
                        PC();
                        if (PK.indexOf(zd) === -1) {
                            var zH = PI(zd);
                            var zS = Pf.assetTable;
                            var zY = `@${zH.name}/`;
                            var h0 = Object.keys(zH[Pk.bv_We].paths[Pk.bv_qe]).map(function (h1) {
                                return `${zY}${h1}`;
                            });
                            PK.push(zd);
                            if (zS && Array.isArray(zS)) {
                                zS.push.apply(zS, h0);
                            } else {
                                Pf.setAssetTable(h0, true);
                            }
                        } else {
                            cc.warn(`ResourceQualifierHelper :: addBundle : Bundle ${zd}'s assets are already registered in ResourceQualifier!`);
                        }
                    }
                    z(
                        "ResourceQualifierHelper",
                        Object.freeze({
                            __proto__: null,
                            addBuiltinBundles: function () {
                                var zd = cc.AssetManager.BuiltinBundleName;
                                for (var zH in zd) {
                                    var zS = zd[zH];
                                    if (cc.assetManager.getBundle(zS)) {
                                        PL(zS);
                                    }
                                }
                            },
                            addBundle: PL,
                            getResourceURL: function (zd, zH) {
                                PC();
                                if (typeof zd != "string") {
                                    throw Error(`ResourceQualifierHelper :: getResourceURL : url ${zd} is not string type!`);
                                }
                                var zS;
                                var zY = !zd.startsWith("@");
                                var h0 = zd;
                                if (zY) {
                                    zS = `@${cc.resources.name}/`;
                                    h0 = `${zS}${zd}`;
                                }
                                var h1 = Pf.getResourceURL(h0, zH);
                                if (h1 && zY) {
                                    h1 = h1.substring(zS.length);
                                }
                                return h1;
                            },
                            init: Px,
                            removeBundle: function (zd) {
                                PC();
                                if (PK.indexOf(zd) !== -1) {
                                    var zH = PI(zd);
                                    var zS = `@${zH.name}/`;
                                    var zY = Pf.assetTable;
                                    PK.splice(PK.indexOf(zd), 1);
                                    Pf.setAssetTable(
                                        zY.filter(function (h0) {
                                            return !h0.startsWith(zS);
                                        }),
                                        true
                                    );
                                } else {
                                    cc.warn(`ResourceQualifierHelper :: removeBundle : Bundle ${zd}'s assets are not registered in ResourceQualifier yet!`);
                                }
                            },
                        })
                    );
                    (function (zd) {
                        zd.Slot = "slot";
                        zd.Card = "card";
                        zd.Others = "others";
                        zd.RealTime = "rt";
                    })(Pj || (Pj = {}));
                    var PJ = ["GameReplay", "SlotServices", "TSMServices", "TransactionStateMachine", "WebSocket"];
                    var Pp = ["TSMServices", "TransactionStateMachine", "WebSocket"];
                    var Ps = ["WebSocket"];
                    var PV = new ((function () {
                        function zd() {}
                        Object.defineProperty(zd.prototype, "context", {
                            get: function () {
                                return this.bv_Ve;
                            },
                            set: function (zH) {
                                this.bv_Ve = zH;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        return zd;
                    })())();
                    var PF = {
                        position: "relative",
                        fontSize: "12px",
                        color: "white",
                        right: "-15px",
                        animation: "fade 0.5s linear 0s 1 normal forwards",
                        textAlign: "center",
                        width: "25px",
                    };
                    var Pq = {
                        position: "relative",
                        fontSize: "12px",
                        color: "white",
                        right: "-38px",
                        bottom: "18px",
                        animation: "fadeAway 0.25s linear 0s 1 normal forwards",
                    };
                    var PX = (function (zd) {
                        function zH(zS) {
                            var zY = zd.call(this, zS) || this;
                            zY.bv_Qe = false;
                            zY.bv_ze = false;
                            zY.bv_Ye = false;
                            zY.bv_Ke = 0;
                            zY.bv_Xe = 0;
                            zY.bv_Ze = function (h1) {
                                var h2 = document[zY.bv_Je];
                                if ((h2 = h2 || h1.hidden)) {
                                    zY.bv_$e();
                                } else {
                                    zY.bv_tn();
                                }
                            };
                            zY.bv_en = function () {
                                if (zY.bv_nn.current) {
                                    zY.bv_nn.current.style.animation = "scaling 0.5s linear 0s infinite alternate";
                                    zY.bv_nn.current.removeEventListener("animationend", zY.bv_en);
                                }
                            };
                            zY.bv_in = zS.recordTimeLimit;
                            zY.bv_rn = zS.recordTimeLimit;
                            zY.state = {
                                timer: zY.bv_in,
                            };
                            zY.bv_an = zY.bv_tn.bind(zY);
                            zY.bv_on = zY.bv_$e.bind(zY);
                            var h0 = PV.context.event;
                            h0.on("Game.PauseReplay", zY.bv_$e, zY);
                            h0.on("Game.ResumeReplay", zY.bv_tn, zY);
                            zY.bv_nn = m.createRef();
                            return zY;
                        }
                        O0(zH, zd);
                        zH.prototype.shouldComponentUpdate = function (zS, zY) {
                            return !(this.state.timer > 0 && this.state.timer === zY.timer);
                        };
                        zH.prototype.componentDidUpdate = function () {
                            if (this.props.recordState === 3) {
                                if (this.state.timer === 10) {
                                    if (this.props.updateRecordBtnStyleCallback) {
                                        this.props.updateRecordBtnStyleCallback();
                                    }
                                } else if (this.state.timer === 5 && this.bv_nn.current) {
                                    this.bv_nn.current.style.animation = "scaling 0.5s linear 0s infinite alternate";
                                }
                            }
                            if (this.state.timer <= 0) {
                                this.bv_un();
                                clearInterval(this.bv_cn);
                                this.props.updateRecordBtnCallback();
                                return;
                            }
                            if (this.props.recordState === 4) {
                                this.bv_un();
                                clearInterval(this.bv_cn);
                                if (this.bv_nn.current) {
                                    this.bv_nn.current.removeEventListener("animationend", this.bv_en);
                                }
                            }
                        };
                        zH.prototype.componentDidMount = function () {
                            this.bv_sn();
                            this.bv_ln();
                            if (this.state.timer <= 10) {
                                if (this.props.updateRecordBtnStyleCallback) {
                                    this.props.updateRecordBtnStyleCallback();
                                }
                                if (this.state.timer <= 5 && this.bv_nn.current) {
                                    this.bv_nn.current.addEventListener("animationend", this.bv_en);
                                }
                            }
                        };
                        zH.prototype.componentWillUnmount = function () {
                            this.bv_un();
                            clearInterval(this.bv_cn);
                            var zS = PV.context.event;
                            zS.off("Game.PauseReplay", this.bv_$e, this);
                            zS.off("Game.ResumeReplay", this.bv_tn, this);
                        };
                        zH.prototype.render = function () {
                            if (this.state.timer > 10) {
                                return null;
                            }
                            var zS = (function (zY) {
                                switch (zY) {
                                    case 3:
                                        return PF;
                                    case 4:
                                        return Pq;
                                    default:
                                        return;
                                }
                            })(this.props.recordState);
                            return m.createElement(
                                "span",
                                {
                                    className: "replay-record-time",
                                    style: zS,
                                    ref: this.bv_nn,
                                },
                                this.state.timer
                            );
                        };
                        zH.prototype.bv_ln = function () {
                            this.bv_Ke = Date.now();
                            this.bv_fn();
                        };
                        zH.prototype.bv_fn = function () {
                            this.bv_hn();
                            this.bv_cn = W.setInterval(this.bv_hn.bind(this), 1000);
                        };
                        zH.prototype.bv_hn = function () {
                            var zS = Date.now() - this.bv_Ke;
                            var zY = Math.floor(zS / 1000);
                            this.bv_in = this.bv_rn - zY;
                            if (this.bv_in <= 10) {
                                this.setState({
                                    timer: this.bv_in,
                                });
                            }
                        };
                        zH.prototype.bv_tn = function (zS) {
                            this.bv_Ye = zS !== undefined;
                            if (!(this.bv_ze && !this.bv_Ye)) {
                                if (this.bv_Qe) {
                                    this.bv_Qe = false;
                                    this.bv_Ke = Date.now() - this.bv_Xe;
                                    this.bv_fn();
                                }
                                this.bv_ze = false;
                            }
                        };
                        zH.prototype.bv_$e = function (zS) {
                            if (!this.bv_ze) {
                                if (!this.bv_Qe) {
                                    this.bv_Qe = true;
                                    this.bv_Xe = Date.now() - this.bv_Ke;
                                    clearInterval(this.bv_cn);
                                }
                                this.bv_ze = zS !== undefined;
                            }
                        };
                        zH.prototype.bv_sn = function () {
                            if (document.hidden !== undefined) {
                                this.bv_Je = "hidden";
                            } else if (document.mozHidden !== undefined) {
                                this.bv_Je = "mozHidden";
                            } else if (document.msHidden !== undefined) {
                                this.bv_Je = "msHidden";
                            } else if (document.webkitHidden !== undefined) {
                                this.bv_Je = "webkitHidden";
                            }
                            if (this.bv_Je) {
                                this.bv_dn = [
                                    "visibilitychange",
                                    "mozvisibilitychange",
                                    "msvisibilitychange",
                                    "webkitvisibilitychange",
                                    "qbrowserVisibilityChange",
                                ];
                                for (var zS = 0, zY = this.bv_dn.length; zS < zY; zS++) {
                                    document.addEventListener(this.bv_dn[zS], this.bv_Ze);
                                }
                            } else {
                                W.addEventListener("blur", this.bv_on);
                                W.addEventListener("focus", this.bv_an);
                            }
                        };
                        zH.prototype.bv_un = function () {
                            if (this.bv_Je) {
                                for (var zS = 0, zY = this.bv_dn.length; zS < zY; zS++) {
                                    document.removeEventListener(this.bv_dn[zS], this.bv_Ze);
                                }
                            } else {
                                W.removeEventListener("blur", this.bv_on);
                                W.removeEventListener("focus", this.bv_an);
                            }
                        };
                        return zH;
                    })(m.Component);
                    var PG = {
                        backgroundColor: "rgb(48, 48, 60, 0)",
                    };
                    var PA = {
                        animation: "condense 0.3s ease-in-out 0s 1 normal forwards",
                        backgroundColor: "rgb(48, 48, 60, 0)",
                    };
                    var Pd = {
                        backgroundColor: "rgb(48, 48, 60, 1)",
                    };
                    var PH = {
                        animation: "condense 0.3s ease-in-out 0s 1 normal forwards",
                        backgroundColor: "rgb(48, 48, 60, 1)",
                    };
                    var PS = {
                        pointerEvents: "none",
                        opacity: "0.5",
                    };
                    var PY = {
                        animation: "condense 0.3s ease-in-out 0s 1 normal forwards",
                        pointerEvents: "none",
                        opacity: "0.5",
                    };
                    var Q0 = {
                        animation: "condense 0.3s ease-in-out 0s 1 normal forwards",
                        pointerEvents: "none",
                    };
                    var Q1 = {
                        pointerEvents: "none",
                    };
                    var Q2 = {
                        position: "relative",
                        display: "flex",
                        width: "36px",
                        height: "inherit",
                        justifyContent: "center",
                        alignItems: "center",
                    };
                    var Q3 = {
                        position: "relative",
                        width: "36px",
                        height: "inherit",
                        justifyContent: "center",
                        alignItems: "center",
                    };
                    var Q4 = {
                        width: "36px",
                        height: "inherit",
                    };
                    var Q5 = {
                        position: "absolute",
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        backgroundColor: "white",
                        transform: "translate(4px, 4px)",
                    };
                    var Q6 = {
                        position: "absolute",
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        backgroundColor: "rgb(48, 48, 60)",
                        transform: "translate(6px, 6px)",
                    };
                    var Q7 = {
                        position: "absolute",
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        backgroundColor: "rgb(255, 8, 69)",
                        transform: "translate(8px, 8px)",
                    };
                    var Q8 = {
                        position: "absolute",
                        width: "12px",
                        height: "12px",
                        borderRadius: "2px",
                        backgroundColor: "rgb(255, 8, 69)",
                        animation: "fading 0.5s linear 0s infinite alternate",
                        transform: "translate(12px, 12px)",
                    };
                    function Q9(zd) {
                        switch (zd) {
                            case 1:
                                return 2;
                            case 3:
                                return 4;
                            case 2:
                            case 4:
                                return zd;
                            default:
                                return 1;
                        }
                    }
                    var QO = (function (zd) {
                        function zH(zS) {
                            var zY = zd.call(this, zS) || this;
                            zY.bv_rn = 0;
                            zY.state = {
                                recordState: 1,
                                isPause: false,
                            };
                            var h0 = PV.context.event;
                            h0.on("Game.RecordingStopped", zY.bv_vn, zY);
                            h0.on("Game.PauseReplay", zY.bv_$e, zY);
                            h0.on("Game.ResumeReplay", zY.bv_tn, zY);
                            zY.bv_mn = m.createRef();
                            zY.bv_bn = m.createRef();
                            return zY;
                        }
                        O0(zH, zd);
                        zH.prototype.componentWillUnmount = function () {
                            var zS = PV.context.event;
                            zS.off("Game.RecordingStopped", this.bv_vn, this);
                            zS.off("Game.PauseReplay", this.bv_$e, this);
                            zS.off("Game.ResumeReplay", this.bv_tn, this);
                        };
                        zH.prototype.render = function () {
                            var zS = this;
                            var zY = this.state.isPause;
                            var h0 = this.state.recordState;
                            var h1 = (function (h2) {
                                switch (h2) {
                                    case 1:
                                    case 2:
                                        return 3;
                                    default:
                                        return 1;
                                }
                            })(h0);
                            return m.createElement(
                                "div",
                                {
                                    id: "replay-record-btn-bg",
                                    style: this.bv_pn(h0, zY),
                                    ref: this.bv_mn,
                                },
                                m.createElement(
                                    "div",
                                    {
                                        id: "replay-record-btn",
                                        onClick: function () {
                                            zS.setState({
                                                recordState: Q9(h0),
                                            });
                                            zS.props.onClickCallback(
                                                h1,
                                                function (h2) {
                                                    zS.bv_rn = h2 || -1;
                                                    zS.setState({
                                                        recordState: h1,
                                                    });
                                                },
                                                true
                                            );
                                        },
                                        style: this.bv_gn(h0, zY),
                                        ref: this.bv_bn,
                                    },
                                    this.bv_Sn(h0)
                                )
                            );
                        };
                        zH.prototype.bv_pn = function (zS, zY) {
                            switch (zS) {
                                case 1:
                                case 3:
                                case 2:
                                    if (zY) {
                                        return Pd;
                                    } else {
                                        return PG;
                                    }
                                case 4:
                                    if (this.bv_mn.current && this.bv_mn.current.style.animation) {
                                        if (zY) {
                                            return PH;
                                        } else {
                                            return PA;
                                        }
                                    } else if (zY) {
                                        return Pd;
                                    } else {
                                        return PG;
                                    }
                                default:
                                    return;
                            }
                        };
                        zH.prototype.bv_gn = function (zS, zY) {
                            switch (zS) {
                                case 1:
                                case 3:
                                    if (zY) {
                                        return PS;
                                    } else {
                                        return undefined;
                                    }
                                case 2:
                                    if (zY) {
                                        return PS;
                                    } else {
                                        return Q1;
                                    }
                                case 4:
                                    if (this.bv_bn.current && this.bv_bn.current.style.animation) {
                                        if (zY) {
                                            return PY;
                                        } else {
                                            return Q0;
                                        }
                                    } else if (zY) {
                                        return PS;
                                    } else {
                                        return Q1;
                                    }
                                default:
                                    return;
                            }
                        };
                        zH.prototype.bv_Sn = function (zS) {
                            var zY = this;
                            switch (zS) {
                                case 1:
                                    return m.createElement(
                                        "span",
                                        {
                                            className: "replay-record-icon-wrapper",
                                            style: Q4,
                                        },
                                        m.createElement("span", {
                                            className: "replay-record-base-icon",
                                            style: Q5,
                                        }),
                                        m.createElement("span", {
                                            className: "replay-record-base-circle-icon",
                                            style: Q6,
                                        }),
                                        m.createElement("span", {
                                            className: "replay-record-circle-icon",
                                            style: Q7,
                                        })
                                    );
                                case 2:
                                    return m.createElement("div", {
                                        className: "loader",
                                    });
                                case 3:
                                    return m.createElement(
                                        "span",
                                        {
                                            className: "replay-record-container",
                                            style: Q2,
                                        },
                                        m.createElement(
                                            "span",
                                            {
                                                className: "replay-record-icon-wrapper",
                                                style: Q4,
                                            },
                                            m.createElement("span", {
                                                className: "replay-record-base-icon",
                                                style: Q5,
                                            }),
                                            m.createElement("span", {
                                                className: "replay-record-base-circle-icon",
                                                style: Q6,
                                            }),
                                            m.createElement("span", {
                                                className: "replay-record-square-icon",
                                                style: Q8,
                                            })
                                        ),
                                        this.bv_rn !== -1 &&
                                            m.createElement(PX, {
                                                recordState: 3,
                                                recordTimeLimit: this.bv_rn,
                                                updateRecordBtnCallback: function () {
                                                    zY.setState({
                                                        recordState: 4,
                                                    });
                                                },
                                                updateRecordBtnStyleCallback: function () {
                                                    if (zY.bv_mn.current) {
                                                        zY.bv_mn.current.style.animation = "expand 0.3s ease-in-out 0s 1 normal forwards";
                                                    }
                                                    if (zY.bv_bn.current) {
                                                        zY.bv_bn.current.style.animation = "expand 0.3s ease-in-out 0s 1 normal forwards";
                                                        zY.bv_bn.current.style.pointerEvents = "auto";
                                                    }
                                                },
                                            })
                                    );
                                case 4:
                                    return m.createElement(
                                        "span",
                                        {
                                            className: "replay-record-container",
                                            style: Q3,
                                        },
                                        m.createElement("div", {
                                            className: "loader",
                                        }),
                                        this.bv_rn !== -1 &&
                                            m.createElement(PX, {
                                                recordState: 4,
                                                recordTimeLimit: this.bv_rn,
                                                updateRecordBtnCallback: function () {
                                                    zY.props.onClickCallback(
                                                        1,
                                                        function () {
                                                            zY.setState({
                                                                recordState: 1,
                                                            });
                                                        },
                                                        true
                                                    );
                                                },
                                            })
                                    );
                                default:
                                    return null;
                            }
                        };
                        zH.prototype.bv_vn = function () {
                            var zS = this;
                            if (this.bv_mn.current) {
                                this.bv_mn.current.style.removeProperty("animation");
                            }
                            if (this.bv_bn.current) {
                                this.bv_bn.current.style.removeProperty("animation");
                            }
                            this.props.onClickCallback(
                                1,
                                function () {
                                    zS.setState({
                                        recordState: 1,
                                    });
                                },
                                false
                            );
                        };
                        zH.prototype.bv_$e = function () {
                            this.setState({
                                isPause: true,
                            });
                        };
                        zH.prototype.bv_tn = function () {
                            this.setState({
                                isPause: false,
                            });
                        };
                        return zH;
                    })(m.Component);
                    var QU = {
                        pointerEvents: "none",
                    };
                    var Qb = {
                        position: "absolute",
                        width: "16px",
                        height: "16px",
                        borderRadius: "1px",
                        backgroundColor: "rgb(255, 255, 255)",
                        transform: "translate(10.5px, 10.5px)",
                    };
                    var QZ = {
                        position: "absolute",
                        width: "12px",
                        height: "12px",
                        backgroundColor: "rgb(48, 48, 60)",
                        transform: "translate(12.5px, 12.5px)",
                    };
                    var QP = {
                        position: "absolute",
                        width: "6px",
                        height: "18px",
                        backgroundColor: "rgb(48, 48, 60)",
                        transform: "translate(15.5px, 9.5px)",
                    };
                    var QQ = {
                        position: "absolute",
                        width: "18px",
                        height: "6px",
                        backgroundColor: "rgb(48, 48, 60)",
                        transform: "translate(9.5px, 15.5px)",
                    };
                    function QW() {
                        var zd = document.getElementById("replay-capture-effect");
                        if (zd) {
                            var zH = document.getElementById("game-replay");
                            zd.removeEventListener("animationend", QW);
                            if (zH) {
                                zH.removeChild(zd);
                            }
                        }
                    }
                    function Qz(zd) {
                        var zH = v(true);
                        var zS = zH[0];
                        var zY = zH[1];
                        y(function () {
                            return function () {
                                QW();
                            };
                        }, []);
                        return m.createElement(
                            "div",
                            {
                                id: "replay-capture-btn",
                                onClick: function () {
                                    zY(false);
                                    (function () {
                                        var h0 = document.getElementById("game-replay");
                                        if (h0) {
                                            var h1 = document.createElement("div");
                                            var h2 = document.createAttribute("id");
                                            h2.value = "replay-capture-effect";
                                            h1.setAttributeNode(h2);
                                            h0.appendChild(h1);
                                            h1.style.width = h0.style.width;
                                            h1.style.height = h0.style.height;
                                            h1.style.background = "white";
                                            h1.style.borderRadius = "5px";
                                            h1.style.animation = "captureEffect 0.2s ease-in-out 0s 2 alternate forwards";
                                            h1.addEventListener("animationend", QW);
                                        }
                                    })();
                                    zd.onClickCallback(function () {
                                        zY(true);
                                    });
                                },
                                style: zS ? undefined : QU,
                            },
                            (function (h0) {
                                if (h0) {
                                    return m.createElement(
                                        "span",
                                        {
                                            className: "replay-capture-container",
                                        },
                                        m.createElement("span", {
                                            className: "replay-capture-base-icon",
                                            style: Qb,
                                        }),
                                        m.createElement("span", {
                                            className: "replay-capture-square-icon",
                                            style: QZ,
                                        }),
                                        m.createElement("span", {
                                            className: "replay-capture-vertical-rec-icon",
                                            style: QP,
                                        }),
                                        m.createElement("span", {
                                            className: "replay-capture-horizontal-rec-icon",
                                            style: QQ,
                                        })
                                    );
                                } else {
                                    return m.createElement("div", {
                                        className: "loader",
                                    });
                                }
                            })(zS)
                        );
                    }
                    var Qh = {
                        display: "flex",
                        height: "36px",
                        position: "absolute",
                        width: "inherit",
                        justifyContent: "space-between",
                    };
                    var QR = (function (zd) {
                        function zH(zS) {
                            var zY = zd.call(this, zS) || this;
                            zY.state = {
                                isShow: false,
                            };
                            PV.context.event.on("Game.ShowRecordingUI", zY.bv_yn, zY);
                            return zY;
                        }
                        O0(zH, zd);
                        zH.prototype.shouldComponentUpdate = function (zS, zY) {
                            return this.state.isShow !== zY.isShow;
                        };
                        zH.prototype.componentWillUnmount = function () {
                            PV.context.event.off("Game.ShowRecordingUI", this.bv_yn, this);
                        };
                        zH.prototype.render = function () {
                            if (this.state.isShow) {
                                return m.createElement(
                                    "div",
                                    {
                                        id: "replay-recording-container-wrapper",
                                        style: Qh,
                                    },
                                    m.createElement(QO, {
                                        onClickCallback: this.props.onReplayRecordClickCallback,
                                    }),
                                    m.createElement(Qz, {
                                        onClickCallback: this.props.onReplayCaptureClickCallback,
                                    })
                                );
                            } else {
                                return null;
                            }
                        };
                        zH.prototype.bv_yn = function (zS) {
                            this.setState({
                                isShow: zS.payload,
                            });
                        };
                        return zH;
                    })(m.Component);
                    var QB = {
                        color: "white",
                        cursor: "pointer",
                    };
                    var Qg = ["½", "1", "2", "4"];
                    var Ql = [0.5, 1, 2, 4];
                    function QT(zd) {
                        var zH = v(1);
                        var zS = zH[0];
                        var zY = zH[1];
                        return m.createElement(
                            "div",
                            {
                                id: "replay-fast-forward-btn",
                                onClick: function () {
                                    var h0 = (zS + 1) % Qg.length;
                                    zd.onClickCallback(Ql[h0]);
                                    zY(h0);
                                },
                            },
                            m.createElement(
                                "span",
                                {
                                    className: "replay-fast-forword-container",
                                },
                                m.createElement(
                                    "label",
                                    {
                                        style: QB,
                                    },
                                    `${Qg[zS]}x`
                                )
                            )
                        );
                    }
                    var Qc = {
                        width: "4px",
                        height: "16px",
                        borderRadius: "1.5px",
                        backgroundColor: "rgb(255, 255, 255)",
                        margin: "3px",
                    };
                    var QM = {
                        borderStyle: "solid",
                        borderWidth: "7px 0 7px 14px",
                        borderColor: "transparent transparent transparent rgb(255, 255, 255)",
                    };
                    function QE(zd) {
                        var zH = v(false);
                        var zS = zH[0];
                        var zY = zH[1];
                        var h0 = zS ? "replay-play-btn" : "replay-pause-btn";
                        return m.createElement(
                            "div",
                            {
                                id: h0,
                                onClick: function () {
                                    zd.onClickCallback(!zS);
                                    zY(!zS);
                                },
                            },
                            (function (h1) {
                                if (h1) {
                                    return m.createElement(
                                        "span",
                                        {
                                            className: "replay-play-container",
                                        },
                                        m.createElement("span", {
                                            className: "replay-play-icon",
                                            style: QM,
                                        })
                                    );
                                } else {
                                    return m.createElement(
                                        "span",
                                        {
                                            className: "replay-pause-container",
                                        },
                                        m.createElement("span", {
                                            className: "replay-pause-icon",
                                            style: Qc,
                                        }),
                                        m.createElement("span", {
                                            className: "replay-pause-icon",
                                            style: Qc,
                                        })
                                    );
                                }
                            })(zS)
                        );
                    }
                    var Qu = {
                        width: "12px",
                        height: "12px",
                        borderRadius: "2px",
                        backgroundColor: "rgb(255, 255, 255)",
                    };
                    function QD(zd) {
                        return m.createElement(
                            "div",
                            {
                                id: "replay-stop-btn",
                                onClick: zd.onClickCallback,
                            },
                            m.createElement(
                                "span",
                                {
                                    className: "replay-stop-container",
                                },
                                m.createElement("span", {
                                    className: "replay-stop-icon",
                                    style: Qu,
                                })
                            )
                        );
                    }
                    var Qw = {
                        display: "flex",
                        position: "relative",
                        height: "36px",
                        width: "inherit",
                        justifyContent: "center",
                        margin: "0px 36px",
                    };
                    var Qm = (function (zd) {
                        function zH(zS) {
                            var zY = zd.call(this, zS) || this;
                            zY.state = {
                                isShow: false,
                            };
                            PV.context.event.emit("Game.RequestConfig", undefined, function (h0) {
                                var h1 = h0.response.replayVersion;
                                zY.setState({
                                    isShow: h1 === 2,
                                });
                            });
                            return zY;
                        }
                        O0(zH, zd);
                        zH.prototype.shouldComponentUpdate = function (zS, zY) {
                            return this.state.isShow !== zY.isShow;
                        };
                        zH.prototype.render = function () {
                            if (this.state.isShow) {
                                return m.createElement(
                                    "div",
                                    {
                                        id: "replay-container-wrapper",
                                        style: Qw,
                                    },
                                    m.createElement(
                                        "div",
                                        {
                                            id: "replay-container",
                                        },
                                        m.createElement(QT, {
                                            onClickCallback: this.props.onFastForwardClickCallback,
                                        }),
                                        m.createElement(QE, {
                                            onClickCallback: this.props.onPauseClickCallback,
                                        }),
                                        m.createElement(QD, {
                                            onClickCallback: this.props.onStopClickCallback,
                                        })
                                    )
                                );
                            } else {
                                return null;
                            }
                        };
                        return zH;
                    })(m.Component);
                    var Qv = {
                        display: "flex",
                        width: "inherit",
                        height: "inherit",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    };
                    var Qy = {
                        position: "relative",
                        height: "calc(100% - 15%)",
                        width: "100%",
                    };
                    var Qk = {
                        display: "flex",
                        width: "100%",
                        height: "7%",
                        justifyContent: "space-between",
                    };
                    var Qf = {
                        position: "relative",
                        height: "100%",
                        width: "4%",
                    };
                    var QN = {
                        display: "flex",
                        width: "65%",
                        justifyContent: "space-between",
                    };
                    var Qj = {
                        position: "relative",
                        height: "100%",
                        width: "18%",
                    };
                    var QK = {
                        position: "relative",
                        height: "calc(100% - 92%)",
                        width: "100%",
                        bottom: 0,
                    };
                    var QC = {
                        position: "relative",
                        height: "100%",
                        width: "100%",
                    };
                    var QI = (function (zd) {
                        function zH(zS) {
                            return zd.call(this, zS) || this;
                        }
                        O0(zH, zd);
                        zH.prototype.render = function () {
                            if (this.props.isShow) {
                                return m.createElement(
                                    "div",
                                    {
                                        id: "replay-bg-wrapper",
                                        style: Qv,
                                    },
                                    m.createElement("span", {
                                        id: "replay-top-bg",
                                        style: Qy,
                                        onClick: this.props.onClickCallback,
                                    }),
                                    m.createElement(
                                        "span",
                                        {
                                            id: "replay-center-bg-container-wrapper",
                                            style: Qk,
                                        },
                                        m.createElement("span", {
                                            id: "replay-left-bg",
                                            style: Qf,
                                            onClick: this.props.onClickCallback,
                                        }),
                                        m.createElement(
                                            "span",
                                            {
                                                id: "replay-center-bg-wrapper",
                                                style: QN,
                                            },
                                            m.createElement("span", {
                                                id: "replay-left-center-bg",
                                                style: Qj,
                                                onClick: this.props.onClickCallback,
                                            }),
                                            m.createElement("span", {
                                                id: "replay-right-center-bg",
                                                style: Qj,
                                                onClick: this.props.onClickCallback,
                                            })
                                        ),
                                        m.createElement("span", {
                                            id: "replay-right-bg",
                                            style: Qf,
                                            onClick: this.props.onClickCallback,
                                        })
                                    ),
                                    m.createElement("span", {
                                        id: "replay-btm-bg",
                                        style: QK,
                                        onClick: this.props.onClickCallback,
                                    })
                                );
                            } else {
                                return m.createElement("div", {
                                    id: "replay-bg",
                                    style: QC,
                                    onClick: this.props.onClickCallback,
                                });
                            }
                        };
                        return zH;
                    })(m.Component);
                    var Qx = {
                        position: "absolute",
                        width: "inherit",
                        height: "inherit",
                    };
                    var QL = {
                        animation: "show 0.25s linear 0s 1 normal forwards",
                    };
                    var QJ = {
                        animation: "hide 0.25s linear 0s 1 normal forwards",
                    };
                    var Qp = (function (zd) {
                        function zH(zS) {
                            var zY = zd.call(this, zS) || this;
                            zY.state = {
                                isShow: true,
                            };
                            return zY;
                        }
                        O0(zH, zd);
                        zH.prototype.render = function () {
                            var zS = this;
                            var zY = this.state.isShow ? QL : QJ;
                            return m.createElement(
                                "div",
                                {
                                    id: "replay-view-wrapper",
                                    style: Qx,
                                },
                                m.createElement(
                                    "div",
                                    {
                                        id: "replay-view",
                                        style: zY,
                                    },
                                    m.createElement(QR, {
                                        onReplayRecordClickCallback: this.props.onReplayRecordClickCallback,
                                        onReplayCaptureClickCallback: this.props.onReplayCaptureClickCallback,
                                    }),
                                    m.createElement(Qm, {
                                        onFastForwardClickCallback: this.props.onFastForwardClickCallback,
                                        onPauseClickCallback: this.props.onPauseClickCallback,
                                        onStopClickCallback: this.props.onStopClickCallback,
                                    })
                                ),
                                m.createElement(QI, {
                                    isShow: this.state.isShow,
                                    onClickCallback: function () {
                                        zS.setState({
                                            isShow: !zS.state.isShow,
                                        });
                                    },
                                })
                            );
                        };
                        return zH;
                    })(m.Component);
                    function Qs(zd, zH) {
                        var zS = [];
                        zd.forEach(function (zY) {
                            zS.push(
                                (function (h0, h1, h2) {
                                    if (h1 === undefined) {
                                        h1 = {
                                            x: 0,
                                            y: 0,
                                            width: 0,
                                            height: 0,
                                            isRotate: false,
                                        };
                                    }
                                    return new Promise(function (h3, h4) {
                                        var h5 = new plugin.Loader();
                                        h5.onLoad = function (h6) {
                                            var h7 = document.createElement("canvas");
                                            var h8 = h7.getContext("2d");
                                            if (h8 !== null) {
                                                var h9 = new Image();
                                                h9.onload = function () {
                                                    URL.revokeObjectURL(h9.src);
                                                    var hO = h1.width === 0 ? h9.width : h1.width;
                                                    var hU = h1.height === 0 ? h9.height : h1.height;
                                                    h7.width = hO;
                                                    h7.height = hU;
                                                    h8.clearRect(0, 0, hO, hU);
                                                    h8.translate(hO / 2, hU / 2);
                                                    if (h1.isRotate) {
                                                        h8.rotate((Math.PI * 270) / 180);
                                                        h8.drawImage(h9, h1.x, h1.y, hU, hO, -hU / 2, -hO / 2, hU, hO);
                                                    } else {
                                                        h8.drawImage(h9, h1.x, h1.y, hO, hU, -hO / 2, -hU / 2, hO, hU);
                                                    }
                                                    var hb = h8.getImageData(0, 0, hO, hU);
                                                    var hZ = hb.data;
                                                    if (h2) {
                                                        for (var hP = 0, hQ = hZ.length; hP < hQ; hP += 4) {
                                                            hZ[hP] = h2.r;
                                                            hZ[hP + 1] = h2.g;
                                                            hZ[hP + 2] = h2.b;
                                                        }
                                                    }
                                                    h8.putImageData(hb, 0, 0);
                                                    h3(h7.toDataURL());
                                                };
                                                h9.onerror = function () {
                                                    h4(Error("ImageBase64 load image failed"));
                                                };
                                                h9.src = URL.createObjectURL(h6.response);
                                            }
                                        };
                                        h5.onError = function (h6) {
                                            h4(h6);
                                        };
                                        h5.load([
                                            {
                                                src: h0,
                                                type: plugin.LoadType.Blob,
                                            },
                                        ]);
                                    });
                                })(
                                    zY.resolvePath,
                                    {
                                        x: 0,
                                        y: 0,
                                        width: 0,
                                        height: 0,
                                    },
                                    zY.colour
                                )
                            );
                        });
                        Promise.all(zS)
                            .then(function (zY) {
                                var h0 = [];
                                zY.forEach(function (h1) {
                                    h0.push(h1);
                                });
                                zH(h0, undefined);
                            })
                            .catch(function (zY) {
                                zH(undefined, zY);
                            });
                    }
                    var QV = {};
                    function QF(zd, zH) {
                        var zS = new plugin.Loader();
                        return new Promise(function (zY, h0) {
                            zS.onLoad = function (h1) {
                                zY(h1.response);
                            };
                            zS.onError = function (h1) {
                                h0(h1);
                            };
                            zS.load([
                                {
                                    src: zd,
                                    type: plugin.LoadType.Image,
                                    maxAttemptCount: zH,
                                },
                            ]);
                        });
                    }
                    function Qq(zd, zH, zS) {
                        var zY = new plugin.Loader();
                        return new Promise(function (h0, h1) {
                            zY.onLoad = function (h2) {
                                var h3 = (function (h4, h5) {
                                    return h4.replace(/url\((.*?)\)/g, function (h6, h7) {
                                        return "url(" + h5.resource.resolveUrl(h7) + ")";
                                    });
                                })(h2.response, zH);
                                h0(h3);
                            };
                            zY.onError = function (h2) {
                                h1(h2);
                            };
                            zY.load([
                                {
                                    src: zd,
                                    type: plugin.LoadType.Text,
                                    maxAttemptCount: zS,
                                },
                            ]);
                        });
                    }
                    var QX = (function (zd) {
                        function zH() {
                            var zS = (zd !== null && zd.apply(this, arguments)) || this;
                            zS.rootElement = Object.create(null);
                            zS.bv_Gn = undefined;
                            zS.bv_wn = undefined;
                            return zS;
                        }
                        O0(zH, zd);
                        zH.prototype.onCreate = function () {
                            var zS = this;
                            this.rootElement = document.createElement("div");
                            var zY = document.createAttribute("id");
                            zY.value = "game-replay";
                            this.rootElement.setAttributeNode(zY);
                            this.rootElement.style.visibility = "hidden";
                            this.rootElement.style.position = "relative";
                            this.rootElement.setAttribute("tabindex", "100");
                            (function (h1, h2, h3) {
                                var h4;
                                var h5 = this;
                                var h6 = h1.src;
                                var h7 = "unknown";
                                h7 = h6.indexOf(".css") !== -1 ? "css" : h7;
                                h7 = (h4 = h6).indexOf(".jpg") !== -1 || h4.indexOf(".png") !== -1 ? "image" : h7;
                                var h8 = shell.Error;
                                var h9 = shell.ClientError;
                                var hO = h8 && new h8(h9.Domain, h9.GameLoadResourceError);
                                var hU = h2.resource.resolveUrl(h6);
                                return new Promise(function (hb, hZ) {
                                    return __awaiter(h5, undefined, undefined, function () {
                                        var hP;
                                        return __generator(this, function (hQ) {
                                            switch (hQ.label) {
                                                case 0:
                                                    hQ.trys.push([0, 9, , 10]);
                                                    if (h7 !== "image") {
                                                        return [3, 5];
                                                    } else if (h1.tint) {
                                                        return [
                                                            4,
                                                            ((hW = [
                                                                {
                                                                    resolvePath: hU,
                                                                    colour: h1.tint,
                                                                },
                                                            ]),
                                                            new Promise(function (hz, hh) {
                                                                Qs(hW, function (hR, hB) {
                                                                    if (hB || (hR && hR.length === 0)) {
                                                                        var hg = shell.Error;
                                                                        var hl = shell.ClientError;
                                                                        var hT = hg && new hg(hl.Domain, hl.GameLoadResourceError);
                                                                        hh(hB || hT);
                                                                    }
                                                                    hz(hR);
                                                                });
                                                            })),
                                                        ];
                                                    } else {
                                                        return [3, 2];
                                                    }
                                                case 1:
                                                    hP = hQ.sent();
                                                    hb(hP[0]);
                                                    return [3, 4];
                                                case 2:
                                                    return [4, QF(hU, h3)];
                                                case 3:
                                                    hP = hQ.sent();
                                                    hb(hP);
                                                    hQ.label = 4;
                                                case 4:
                                                    return [3, 8];
                                                case 5:
                                                    if (h7 !== "css") {
                                                        return [3, 7];
                                                    } else {
                                                        return [4, Qq(hU, h2, h3)];
                                                    }
                                                case 6:
                                                    hP = hQ.sent();
                                                    hb(hP);
                                                    return [3, 8];
                                                case 7:
                                                    hZ(hO);
                                                    hQ.label = 8;
                                                case 8:
                                                    return [3, 10];
                                                case 9:
                                                    hQ.sent();
                                                    hZ(hO);
                                                    return [3, 10];
                                                case 10:
                                                    return [2];
                                            }
                                            var hW;
                                        });
                                    });
                                });
                            })(
                                {
                                    src: "game_replay.css",
                                },
                                this.context
                            ).then(function (h1) {
                                (function (h2, h3) {
                                    var h4 = [];
                                    var h5 = h3.bundleInfo.name;
                                    if (!QV[h5]) {
                                        QV[h5] = [];
                                    }
                                    if (!Array.isArray(h2)) {
                                        h2 = [h2];
                                    }
                                    var h6 = QV[h5].length + 1;
                                    h2.forEach(function (h7, h8) {
                                        var h9 = h6 + h8;
                                        var hO = "$CSS-" + h3.bundleInfo.name + "-" + h9;
                                        h4.push(hO);
                                        (function (hU, hb, hZ) {
                                            if (QV[hb].indexOf(hU) === -1) {
                                                var hP = document.createElement("style");
                                                hP.id = hU;
                                                hP.innerHTML = hZ;
                                                document.head.appendChild(hP);
                                                QV[hb].push(hU);
                                            }
                                        })(hO, h3.bundleInfo.name, h7);
                                    });
                                })(h1, zS.context);
                            });
                            var h0 = this.context.event;
                            h0.on("Shell.Scaled", this.bv_Cn, this);
                            h0.on("Game.ReplayStarting", this.bv_Tn, this);
                            h0.on("Game.ReplayEnded", this.bv_On, this);
                            PV.context = this.context;
                        };
                        zH.prototype.bv_Cn = function (zS) {
                            var zY = zS.payload;
                            this.rootElement.style.width = `${zY.width}px`;
                            this.rootElement.style.height = `${zY.height}px`;
                        };
                        zH.prototype.bv_Rn = function (zS) {
                            zS.stopPropagation();
                        };
                        zH.prototype.bv_Tn = function () {
                            var zS = this;
                            this.context.view.appendTo(zH, "overlay");
                            this.rootElement.style.visibility = "visible";
                            this.rootElement.focus();
                            this.context.event.on("Shell.FocusCanvas", this.bv_Rn, this, "High");
                            k.render(
                                m.createElement(Qp, {
                                    onReplayCaptureClickCallback: function (zY) {
                                        zS.bv_Gn = zY;
                                        zS.context.event.emit("Game.Screenshot", undefined, function () {
                                            zS.context.event.emit("Analytics.Event", {
                                                actionName: "CaptureReplay",
                                            });
                                            var h0 = zS.bv_Gn;
                                            if (h0) {
                                                h0();
                                            }
                                            zS.bv_Gn = undefined;
                                        });
                                    },
                                    onReplayRecordClickCallback: function (zY, h0, h1) {
                                        zS.bv_wn = h0;
                                        function h2(h4) {
                                            if (zY === 3) {
                                                zS.context.event.emit("Analytics.Event", {
                                                    actionName: "RecordReplay",
                                                });
                                            }
                                            var h5 = zS.bv_wn;
                                            if (h5) {
                                                h5(h4);
                                            }
                                            zS.bv_wn = undefined;
                                        }
                                        if (h1) {
                                            var h3 = (function (h4) {
                                                switch (h4) {
                                                    case 1:
                                                        return "Game.StopRecording";
                                                    case 3:
                                                        return "Game.StartRecording";
                                                    default:
                                                        return;
                                                }
                                            })(zY);
                                            if (h3) {
                                                zS.context.event.emit(h3, undefined, function (h4) {
                                                    var h5 = h4.response && h4.response.timeLimit;
                                                    h2(h5);
                                                });
                                            }
                                        } else {
                                            h2();
                                        }
                                    },
                                    onFastForwardClickCallback: function (zY) {
                                        zS.context.event.emit("Game.SetReplaySpeed", zY);
                                    },
                                    onPauseClickCallback: function (zY) {
                                        var h0 = zY ? "Game.PauseReplay" : "Game.ResumeReplay";
                                        zS.context.event.emit(h0);
                                    },
                                    onStopClickCallback: function () {
                                        zS.context.event.emit("Game.StopReplay");
                                        zS.context.event.emit("Analytics.Event", {
                                            actionName: "ManualStopReplay",
                                        });
                                    },
                                }),
                                this.rootElement
                            );
                        };
                        zH.prototype.bv_On = function () {
                            this.rootElement.style.visibility = "hidden";
                            this.bv_Gn = undefined;
                            this.bv_wn = undefined;
                            k.unmountComponentAtNode(this.rootElement);
                            this.view.removeFromParent(zH);
                            this.context.event.off("Shell.FocusCanvas", this.bv_Rn, this);
                        };
                        return zH;
                    })(plugin.AbstractViewComponent);
                    var QG = undefined;
                    var QA = undefined;
                    var Qd = undefined;
                    var QH = undefined;
                    function ga(zd) {
                        if (U6.TransactionStateMachine && zd) {
                            return zd(U6.TransactionStateMachine);
                        }
                        throw Error("[BVFramework] ERROR: TransactionStateMachine function called but module not found!");
                    }
                    function QS() {
                        QG = undefined;
                        QA = undefined;
                    }
                    var QY = z("TransactionStateMachineHandler", {
                        initTransactionStateMachine: function (zd) {
                            ga(function (zH) {
                                zH.initTransactionStateMachine(zd);
                            });
                        },
                        goTo: function (zd, zH, zS) {
                            ga(function (zY) {
                                zY.goTo(zd, zH, zS);
                            });
                        },
                        subscribeStateEvent: function (zd, zH) {
                            ga(function (zS) {
                                zS.subscribeStateEvent(zd, zH);
                            });
                        },
                        unsubscribeStateEvent: function (zd, zH) {
                            ga(function (zS) {
                                zS.unsubscribeStateEvent(zd, zH);
                            });
                        },
                        getState: function () {
                            return ga(function (zd) {
                                return zd.getState();
                            });
                        },
                        getNextState: function () {
                            return ga(function (zd) {
                                return zd.getNextState();
                            });
                        },
                        addTransition: function (zd, zH) {
                            if (zH === undefined) {
                                zH = false;
                            }
                            ga(function (zS) {
                                zS.addTransition(zd, zH);
                            });
                        },
                        pause: function () {
                            ga(function (zd) {
                                zd.pause();
                            });
                        },
                        resume: function () {
                            ga(function (zd) {
                                zd.resume();
                            });
                        },
                        initState: function (zd) {
                            ga(function (zH) {
                                zH.initTransactionStateMachine(zd);
                            });
                        },
                        setTransitionData: function (zd) {
                            QG = zd;
                        },
                        getTransitionData: function () {
                            return QG;
                        },
                        hasOnHoldTransition: function () {
                            return QA !== undefined;
                        },
                        goToStateCallback: function (zd, zH, zS) {
                            if (zH === undefined) {
                                zH = false;
                            }
                            return function (zY) {
                                ga(function (h0) {
                                    if (QA) {
                                        throw Error(
                                            "TransactionStateMachineHandler info: goToStateCallback : cannot go to next state (" +
                                                zd +
                                                ") when previous state transition (" +
                                                h0.getNextState() +
                                                ") is not complete."
                                        );
                                    }
                                    if (zH) {
                                        h0.goTo(
                                            zd,
                                            function (h1, h2) {
                                                QG = O1(O1(O1({}, QG), h1), zS);
                                                QA = h2;
                                                zY();
                                            },
                                            function () {
                                                var h1 = Qd;
                                                Qd = undefined;
                                                if (h1) {
                                                    h1();
                                                }
                                            }
                                        );
                                    } else {
                                        h0.goTo(
                                            zd,
                                            function (h1, h2) {
                                                h1 = O1(O1(O1({}, QG), h1), zS);
                                                QS();
                                                h2(undefined, h1);
                                            },
                                            zY
                                        );
                                    }
                                });
                            };
                        },
                        transitionCompleteCallback: function (zd, zH) {
                            return function (zS) {
                                ga(function (zY) {
                                    Qd = zS;
                                    var h0 = QA;
                                    if (!h0) {
                                        throw Error(
                                            "TransactionStateMachineHandler info: transitionCompleteWrapper : no transition to complete. Current completed state: " +
                                                zY.getState()
                                        );
                                    }
                                    if (zd && zd !== zY.getNextState()) {
                                        debugger;
                                        throw Error(
                                            "TransactionStateMachineHandler info: transitionCompleteWrapper : complete incorrect state. Attempted complete state: " +
                                                zd +
                                                ". State suppose to complete: " +
                                                zY.getNextState()
                                        );
                                    }
                                    var h1 = O1(O1({}, QG), zH);
                                    QS();
                                    h0(undefined, h1);
                                });
                            };
                        },
                        clearTransition: QS,
                        cacheTransitionCallback: function () {
                            QH = QA;
                        },
                        retrieveTransitionCallback: function () {
                            if (QH) {
                                QA = QH;
                                QH = undefined;
                            }
                        },
                    });
                    var W0 = Pu.emitGameFlowStateChangedEvent;
                    var W1 = O7.timeoutCallback;
                    var W2 = O7.getSharedScheduler;
                    var W3 = O7.delayCallback;
                    var W4 = (function () {
                        function zd() {
                            this.bv_En = 0;
                            this.bv_kn = false;
                            this.bv_xn = false;
                            this.bv_In = false;
                            this.bv_jn = false;
                            this.bv_An = false;
                            this.bv_Nn = undefined;
                            this.bv_Ln = false;
                            this.bv_Pn = this.bv__n.bind(this);
                        }
                        zd.prototype.initGameReplay = function (zH, zS) {
                            var zY = this;
                            if (zS === undefined) {
                                zS = this.bv_Pn;
                            }
                            var h0 = OK();
                            this.bv_Mn = zH;
                            h0.on("Game.RequestReplay", function (h1) {
                                h0.emit("Game.ReplayInitiated");
                                zY.bv_Dn();
                                var h2 = zY.bv_Un(h1.payload);
                                var h3 = zY.bv_Hn(h2);
                                QY.pause();
                                zH.isGameReplaying = true;
                                zH.nextGameReplayInfo = zY.bv_Bn[0];
                                zY.bv_En = 0;
                                zY.bv_kn = false;
                                zY.bv_xn = false;
                                zY.bv_An = false;
                                h0.once("Game.WalletChangedSuccess", function () {
                                    W6();
                                    h0.on("Game.DummyTransactionStateTransition", zY.bv_Fn, zY);
                                    h0.emit("Game.ReplayStarting", undefined, function () {
                                        h0.emit("Game.BlockUI", false, function () {
                                            if (zH.transactionModel.stateTransitionTo === 1) {
                                                zY.bv_Wn = W3(1)(function () {
                                                    zY.bv_Wn = undefined;
                                                    zS();
                                                });
                                            } else {
                                                h0.once("Game.DummyTransactionStateComplete", zY.bv_qn, zY, "High");
                                            }
                                            h0.once("Game.StopReplay", zY.bv_Vn, zY);
                                        });
                                    });
                                    h0.on("Game.PauseReplay", zY.bv_Qn, zY);
                                    h0.on("Game.ResumeReplay", zY.bv_zn, zY);
                                    h0.on("Game.SetReplaySpeed", zY.bv_Yn, zY);
                                });
                                h0.emit("Game.BlockUI", true);
                                W5(function () {
                                    h0.emit("Game.GameInfoUpdateSuccess", h3);
                                });
                                W0({
                                    displayState: "Start",
                                    flowType: "Replay",
                                });
                                h0.on("Game.TransactionInfoChanged", zY.bv_Kn, zY, "High");
                                h0.on("Game.GameInfoUpdated", zY.bv_Kn, zY, "High");
                                h0.on("Game.TransactionInfoUpdated", zY.bv_Kn, zY, "High");
                            });
                        };
                        Object.defineProperty(zd.prototype, "nextReplayAPIResponse", {
                            get: function () {
                                var zH = this.bv_Bn;
                                if (this.bv_En >= zH.length) {
                                    throw Error("GameReplayHandler :: nextReplayAPIResponse : no next data to fetch! Invalid replay data length.");
                                }
                                var zS = zH[this.bv_En];
                                this.bv_En++;
                                if (this.bv_En < zH.length) {
                                    this.bv_Mn.nextGameReplayInfo = zH[this.bv_En];
                                } else {
                                    this.bv_Mn.nextGameReplayInfo = undefined;
                                    this.bv_kn = true;
                                }
                                var zY = Object.create(null);
                                zY.dt = Object.create(null);
                                zY.dt.si = zS;
                                zY.dt.err = null;
                                return zY;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        zd.prototype.bv_Xn = function (zH) {
                            var zS = this;
                            W5(function () {
                                zS.bv_Zn();
                                if (zS.bv_In) {
                                    cc.game.resume();
                                    zS.bv_In = false;
                                }
                                cc.director.setTimeScale(1);
                                var zY = OK();
                                zY.emit("Game.SetAudioPlayRate", 1);
                                zY.emit("Game.ReplayEnding", undefined, function () {
                                    var h0 = zS.bv_Nn;
                                    if (h0) {
                                        h0.propagate();
                                    }
                                    zS.bv_Nn = undefined;
                                    zH();
                                });
                            });
                        };
                        zd.prototype.bv_Jn = function (zH) {
                            if (!this.bv_Ln) {
                                this.bv_Nn = zH;
                                zH.intercept();
                            }
                        };
                        zd.prototype.bv_Vn = function (zH, zS) {
                            var zY = this;
                            if (zS === undefined) {
                                zS = false;
                            }
                            var h0 = OK();
                            h0.emit("Game.ReplayEnded");
                            h0.off("Game.PauseReplay", this.bv_Qn, this);
                            h0.off("Game.ResumeReplay", this.bv_zn, this);
                            h0.off("Game.SetReplaySpeed", this.bv_Yn, this);
                            h0.off("Game.StopReplay", this.bv_Vn, this);
                            if (this.bv_$n) {
                                var h1 = this.bv_$n;
                                this.bv_$n = undefined;
                                h1();
                                this.bv_Xn(this.bv_ti.bind(this));
                                return;
                            }
                            if (this.bv_Wn) {
                                this.bv_Wn();
                                this.bv_Wn = undefined;
                                this.bv_Xn(this.bv_ti.bind(this));
                                return;
                            }
                            this.bv_kn = true;
                            this.bv_xn = true;
                            this.bv_Ln = false;
                            if (QY.getNextState() === undefined) {
                                h0.once("Game.DummyTransactionStateTransition", this.bv_Jn, this, "High");
                            } else {
                                h0.once("Game.DummyTransactionStateComplete", this.bv_Jn, this);
                            }
                            this.bv_Xn(function () {
                                if (!zY.bv_An) {
                                    zY.bv_Pn();
                                    W2().schedule(zY.bv_Pn, 0.5, cc.macro.REPEAT_FOREVER, 0);
                                }
                                zY.bv_Ln = true;
                                if (zS) {
                                    zY.bv_ti();
                                }
                            });
                        };
                        zd.prototype.bv_Yn = function (zH) {
                            cc.director.setTimeScale(zH.payload);
                            if (zH.payload >= 0) {
                                OK().emit("Game.SetAudioPlayRate", zH.payload);
                            }
                        };
                        zd.prototype.bv_Qn = function () {
                            if (!this.bv_In) {
                                this.bv_In = true;
                                cc.game.pause();
                            }
                        };
                        zd.prototype.bv_zn = function () {
                            if (this.bv_In) {
                                this.bv_In = false;
                                cc.game.resume();
                            }
                        };
                        zd.prototype.bv_qn = function (zH) {
                            zH.intercept();
                            W1(1)(function () {
                                zH.propagate();
                            });
                        };
                        zd.prototype.bv__n = function () {
                            OK().emit("Game.SkipEvent");
                        };
                        zd.prototype.bv_Un = function (zH) {
                            var zS = this.bv_Mn.lastTransactionRawData;
                            if (typeof zH == "object" && zH !== null) {
                                if (zH.replayType === "Spin" || zH.replayData.length === 1) {
                                    this.bv_Bn = zH.replayData;
                                } else {
                                    this.bv_Bn = (function (h0, h1, h2) {
                                        for (var h3 = h1, h4 = h1, h5 = h1; h5 >= 0; h5--) {
                                            if (W7(h0[h5].st, h2)) {
                                                h4 = h5;
                                                break;
                                            }
                                        }
                                        h5 = h1;
                                        for (var h6 = h0.length; h5 < h6; h5++) {
                                            if (W7(h0[h5].nst, h2)) {
                                                h3 = h5;
                                                break;
                                            }
                                        }
                                        return h0.slice(h4, h3 + 1);
                                    })(zH.replayData, zH.selectedIndex, this.bv_Mn.systemModel.gameId);
                                    var zY = zH.replayData.indexOf(this.bv_Bn[0]);
                                    if (zY !== 0) {
                                        zS = zH.replayData[zY - 1];
                                    }
                                }
                            } else {
                                this.bv_Bn = zH;
                            }
                            return zS;
                        };
                        zd.prototype.bv_Fn = function (zH) {
                            var zS = this;
                            if (!this.bv_An) {
                                if (zH.payload.to === "action" && this.bv_kn) {
                                    this.bv_An = true;
                                    W2().unschedule(this.bv_Pn);
                                    zH.intercept();
                                    this.bv_ei = function () {
                                        zH.propagate();
                                    };
                                    if (this.bv_xn) {
                                        this.bv_ti();
                                    } else {
                                        this.bv_$n = W3(1)(function () {
                                            zS.bv_$n = undefined;
                                            OK().emit("Analytics.Event", {
                                                actionName: "AutoStopReplay",
                                            });
                                            zS.bv_Vn(undefined, true);
                                        });
                                    }
                                }
                            }
                        };
                        zd.prototype.bv_ti = function () {
                            var zH = this;
                            var zS = OK();
                            zS.once("Game.WalletChangedSuccess", function () {
                                zH.bv_Mn.isGameReplaying = false;
                                zH.bv_ni();
                                zS.emit("Game.ReplayQuit");
                                W0({
                                    displayState: "End",
                                    flowType: "Replay",
                                });
                                W6();
                                QY.resume();
                                zS.off("Game.DummyTransactionStateTransition", zH.bv_Fn, zH);
                                zS.off("Game.DummyTransactionStateTransition", zH.bv_Jn, zH);
                                zS.off("Game.DummyTransactionStateComplete", zH.bv_Jn, zH);
                                zS.off("Game.TransactionInfoChanged", zH.bv_Kn, zH);
                                zS.off("Game.GameInfoUpdated", zH.bv_Kn, zH);
                                zS.off("Game.TransactionInfoUpdated", zH.bv_Kn, zH);
                                var zY = zH.bv_ei;
                                zH.bv_ei = undefined;
                                if (zY) {
                                    zY();
                                }
                            });
                            zS.emit("Game.GameInfoUpdateSuccess", this.bv_ii);
                        };
                        zd.prototype.bv_Dn = function () {
                            var zH = this.bv_Mn;
                            var zS = Object.assign({}, zH.lastGameInfoRawData);
                            var zY = Object.assign({}, zH.lastTransactionRawData);
                            var h0 = zS.dt;
                            h0.ls.si = zY;
                            h0.bl = zY.bl;
                            this.bv_ii = zS;
                        };
                        zd.prototype.bv_Hn = function (zH) {
                            var zS = this.bv_Mn;
                            var zY = this.bv_Bn;
                            var h0 = zS.lastGameInfoRawData.dt;
                            var h1 = {
                                is: false,
                                bm: h0.fb ? h0.fb.bm : 0,
                                t: 0,
                            };
                            var h2 = zY[0];
                            var h3 = Object.assign({}, zH);
                            h3.cs = h2.cs;
                            h3.ml = h2.ml;
                            h3.wt = h2.wt;
                            h3.wk = h2.wk;
                            h3.wid = h2.wid;
                            if (h2.wbn) {
                                h3.wbn = Object.assign({}, h2.wbn);
                                h3.wbn.bra = h3.wbn.bra + h2.tbb;
                            } else {
                                h3.wbn = null;
                            }
                            if (h2.wfg) {
                                h3.wfg = Object.assign({}, h2.wfg);
                                h3.wfg.gc++;
                            } else {
                                h3.wfg = null;
                            }
                            return {
                                dt: {
                                    bl: h2.blb,
                                    cs: [h2.cs],
                                    fb: h1,
                                    ls: {
                                        si: h3,
                                    },
                                    ml: [h2.ml],
                                    gcs: h0.gcs,
                                    mxl: h0.mxl,
                                    wt: h0.wt,
                                },
                            };
                        };
                        zd.prototype.bv_Kn = function (zH) {
                            zH.stopPropagation();
                        };
                        zd.prototype.bv_Zn = function () {
                            var zH = this;
                            var zS = OK();
                            zS.emit("Game.RequestAudioState", undefined, function (zY) {
                                if (zY.response === "On") {
                                    zH.bv_jn = true;
                                    zS.emit("Game.OffAudio");
                                }
                            });
                        };
                        zd.prototype.bv_ni = function () {
                            if (this.bv_jn) {
                                OK().emit("Game.OnAudio");
                                this.bv_jn = false;
                            }
                        };
                        return zd;
                    })();
                    function W5(zd) {
                        OX({
                            backgroundColor: {
                                r: 47,
                                g: 47,
                                b: 59,
                                a: 255,
                            },
                        });
                        W1(0.6)(zd);
                    }
                    function W6() {
                        OG();
                    }
                    function W7(zd, zH) {
                        switch (zd) {
                            case 1:
                            case 2:
                            case 21:
                                return true;
                            case 3:
                                return zH === 44;
                            case 31:
                                return zH === 73 || zH === 1 || zH === 9;
                            case 32:
                                return zH === 67 || zH === 1 || zH === 9;
                            case 33:
                                return zH === 18 || zH === 1 || zH === 9;
                            case 34:
                                return zH === 18;
                            default:
                                return false;
                        }
                    }
                    var W8;
                    var W9;
                    var WO;
                    var WU;
                    var Wb = new W4();
                    var WZ = Object.freeze({
                        ON_TRANSITION: "onTransition",
                        ON_TRANSITION_FAILED: "onTransitionFailed",
                        ON_TRANSITION_SUCCEED: "onTransitionSucceed",
                    });
                    var WP = (function () {
                        function zd(zH) {
                            this.bv_ri = undefined;
                            this.bv_ai = false;
                            for (var zS = (this.bv_oi = Object.create(null)), zY = 0, h0 = zH.length; zY < h0; zY++) {
                                var h1 = zH[zY].from;
                                if (!zS[h1]) {
                                    zS[h1] = Object.create(null);
                                }
                                zS[h1][zH[zY].to] = [[], []];
                            }
                            this.bv_ui = Object.create(null);
                        }
                        Object.defineProperty(zd.prototype, "state", {
                            get: function () {
                                return this.bv_ci;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(zd.prototype, "nextState", {
                            get: function () {
                                return this.bv_si;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(zd.prototype, "data", {
                            get: function () {
                                return this.bv_ri;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        zd.prototype.emit = function (zH, zS) {
                            var zY = this.bv_ui[zH];
                            if (zY) {
                                for (var h0 = [], h1 = 0, h2 = zY.length; h1 < h2; h1++) {
                                    var h3 = zY[h1];
                                    var h4 = h3.func;
                                    var h5 = h3.bindedFunc;
                                    if (h3.once) {
                                        h0.push(this.off.bind(this, zH, h4));
                                    }
                                    if (h5) {
                                        h5(zS);
                                    } else {
                                        h4(zS);
                                    }
                                }
                                h0.forEach(function (h6) {
                                    return h6();
                                });
                            }
                        };
                        zd.prototype.once = function (zH, zS, zY) {
                            this._on(zH, zS, zY, true);
                        };
                        zd.prototype.on = function (zH, zS, zY) {
                            this._on(zH, zS, zY, false);
                        };
                        zd.prototype.off = function (zH, zS) {
                            var zY = this.bv_ui[zH];
                            if (zY) {
                                if (zS) {
                                    for (var h0 = 0, h1 = zY.length; h0 < h1; h0++) {
                                        if (zY[h0].func === zS) {
                                            zY.splice(h0, 1);
                                            break;
                                        }
                                    }
                                } else {
                                    zY.length = 0;
                                }
                            }
                        };
                        zd.prototype._on = function (zH, zS, zY, h0) {
                            var h1 = this.bv_ui;
                            var h2 = h1[zH];
                            if (!h2) {
                                h2 = h1[zH] = [];
                            }
                            h2.push({
                                func: zS,
                                bindedFunc: zY ? zS.bind(zY) : undefined,
                                once: h0,
                            });
                        };
                        zd.prototype.start = function (zH) {
                            this.bv_ai = true;
                            this.bv_ci = zH;
                            var zS = {
                                from: undefined,
                                to: zH,
                                data: undefined,
                            };
                            this.emit(WZ.ON_TRANSITION_SUCCEED, zS);
                        };
                        zd.prototype.goTo = function (zH, zS, zY) {
                            var h0 = this;
                            if (this.bv_si) {
                                throw Error("TransactionStateMachine :: goTo : cannot change state during transition.");
                            }
                            if (!this.bv_li(zH)) {
                                throw Error("TransactionStateMachine :: goTo : Invalid transition from " + this.bv_ci + " to " + zH + ".");
                            }
                            var h1 = {
                                from: this.state,
                                to: zH,
                            };
                            this.emit(WZ.ON_TRANSITION, h1);
                            this.bv_si = zH;
                            var h2 = this.bv_oi[this.bv_ci][zH];
                            var h3 = O5(zS ? O5(O5([], h2[1], true), [zS], false) : O5([], h2[1], true), h2[0], true);
                            if (h3.length) {
                                var h4 = h3.length - 1;
                                function h5(h6, h7) {
                                    h4--;
                                    if (h6) {
                                        h0.bv_fi(h6 || Error("abort"));
                                        if (zY) {
                                            zY(h6 || Error("abort"));
                                        }
                                    } else if (h4 < 0) {
                                        h0.bv_fi(undefined, h7);
                                        if (zY) {
                                            zY(undefined, h7);
                                        }
                                    } else {
                                        h3[h4](h7, h5);
                                    }
                                }
                                h3[h4](undefined, h5);
                            } else {
                                this.bv_fi();
                                if (zY) {
                                    zY();
                                }
                            }
                        };
                        zd.prototype.addTransitionHook = function (zH, zS) {
                            if (zS === undefined) {
                                zS = false;
                            }
                            if (this.bv_ai) {
                                throw Error("TransactionStateMachine :: addTransitionHook : cannot add hook after state machine is started.");
                            }
                            var zY = this.bv_oi;
                            Object.keys(zY).forEach(function (h0) {
                                Object.keys(zY[h0]).forEach(function (h1) {
                                    var h2 = zH({
                                        state: h0,
                                        nextState: h1,
                                    });
                                    if (h2) {
                                        zY[h0][h1][zS ? 1 : 0].push(h2);
                                    }
                                });
                            });
                        };
                        zd.prototype.bv_li = function (zH) {
                            return Object.keys(this.bv_oi[this.state]).indexOf(zH) !== -1;
                        };
                        zd.prototype.bv_fi = function (zH, zS) {
                            var zY = this.bv_si;
                            this.bv_si = undefined;
                            if (zH) {
                                var h0 = {
                                    from: this.bv_ci,
                                    to: zY,
                                    error: zH,
                                };
                                this.emit(WZ.ON_TRANSITION_FAILED, h0);
                            } else {
                                var h1 = {
                                    from: this.bv_ci,
                                    to: zY,
                                    data: zS,
                                };
                                this.bv_ci = zY;
                                this.bv_ri = zS;
                                this.emit(WZ.ON_TRANSITION_SUCCEED, h1);
                            }
                        };
                        return zd;
                    })();
                    var WQ = new WP([
                        {
                            from: "setup",
                            to: "idle",
                        },
                        {
                            from: "idle",
                            to: "action",
                        },
                        {
                            from: "action",
                            to: "result",
                        },
                        {
                            from: "result",
                            to: "prize",
                        },
                        {
                            from: "prize",
                            to: "idle",
                        },
                        {
                            from: "result",
                            to: "idle",
                        },
                        {
                            from: "prize",
                            to: "setup",
                        },
                    ]);
                    var WW = false;
                    function Wz(zd, zH) {
                        WQ.on(zd, zH);
                    }
                    function Wh(zd, zH) {
                        WQ.off(zd, zH);
                    }
                    function WR(zd) {
                        var zH = OK();
                        WQ.addTransitionHook(function (zS) {
                            return function (zY, h0) {
                                function h1(h4) {
                                    return h0(undefined, h4);
                                }
                                function h2(h4) {
                                    zS.nextState;
                                    h4.message;
                                    h0(h4);
                                }
                                var h3 = {
                                    to: zS.nextState,
                                    reply: function (h4) {
                                        var h5 = h1;
                                        h1 = function (h6) {
                                            h4(h6).then(h5, h2);
                                        };
                                    },
                                };
                                zH.emit("Game.TransactionStateTransition", h3, function () {
                                    h1(zY);
                                });
                            };
                        });
                        WQ.addTransitionHook(function (zS) {
                            return function (zY, h0) {
                                function h1(h4) {
                                    return h0(undefined, h4);
                                }
                                function h2(h4) {
                                    zS.nextState;
                                    h4.message;
                                    h0(h4);
                                }
                                var h3 = {
                                    to: zS.nextState,
                                    reply: function (h4) {
                                        var h5 = h1;
                                        h1 = function (h6) {
                                            h4(h6).then(h5, h2);
                                        };
                                    },
                                };
                                zH.emit("Game.TransactionStateComplete", h3, function () {
                                    h1(zY);
                                });
                            };
                        }, true);
                        Wz("onTransitionSucceed", function (zS) {
                            zH.emit("Game.TransactionStateChanged", zS);
                        });
                        WQ.start(zd);
                    }
                    function WB(zd, zH) {
                        if (zH === undefined) {
                            zH = false;
                        }
                        WQ.addTransitionHook(zd, zH);
                    }
                    function Wg(zd, zH, zS) {
                        if (WW) {
                            var zY = OK();
                            var h0 = {
                                to: zd,
                                reply: function () {},
                            };
                            WU = zd;
                            zY.emit("Game.DummyTransactionStateTransition", h0, function () {
                                if (zH) {
                                    zH(undefined, function (h1, h2) {
                                        if (WW) {
                                            WE(zd, zS);
                                        } else {
                                            W9 = zS;
                                            var h3 = W8;
                                            W8 = undefined;
                                            if (h3) {
                                                h3(h1, h2);
                                            }
                                        }
                                    });
                                } else {
                                    WE(zd, zS);
                                }
                            });
                        } else {
                            WQ.goTo(
                                zd,
                                function (h1, h2) {
                                    if (zH) {
                                        zH(h1, function (h3, h4) {
                                            if (WW) {
                                                W8 = h2;
                                                WE(zd, zS);
                                            } else {
                                                h2(h3, h4);
                                            }
                                        });
                                    }
                                },
                                function () {
                                    if (W9) {
                                        var h1 = W9;
                                        W9 = undefined;
                                        h1();
                                    } else if (zS) {
                                        zS();
                                    }
                                }
                            );
                        }
                    }
                    function Wl() {
                        if (WW) {
                            return WO;
                        } else {
                            return WQ.state;
                        }
                    }
                    function WT() {
                        if (WW) {
                            return WU;
                        } else {
                            return WQ.nextState;
                        }
                    }
                    function Wc() {
                        WO = Wl();
                        WU = WT();
                        WW = true;
                    }
                    function WM() {
                        WW = false;
                    }
                    function WE(zd, zH) {
                        if (!WW) {
                            throw Error("TransactionStateMachineManager :: dummyTransactionStateComplete : Not in paused mode to call");
                        }
                        var zS = OK();
                        var zY = {
                            to: zd,
                            reply: function () {},
                        };
                        zS.emit("Game.DummyTransactionStateComplete", zY, function () {
                            var h0 = WO;
                            WO = WU;
                            WU = undefined;
                            zS.emit("Game.DummyTransactionStateChanged", {
                                from: h0,
                                to: zd,
                            });
                            if (zH) {
                                zH();
                            }
                        });
                    }
                    function Wu(zd, zH) {
                        return function (zS) {
                            var zY = OK();
                            zY.on("Game.TransactionStateChanged", function (h0) {
                                var h1 = h0.payload;
                                var h2 = zd.transactionModel;
                                var h3 = h2.stateTransitionTo;
                                var h4 = h2.transactionId;
                                var h5 = h2.parentTransactionId;
                                var h6 = h2.accumulatedWinAmount;
                                var h7 = h2.betSizeValue;
                                var h8 = h2.betLevelValue;
                                var h9 = h2.totalBaseBet;
                                var hO = zd.systemModel;
                                var hU = 0;
                                if (zH) {
                                    hU = Math.floor(zH());
                                } else if (hO.maxLineNumber) {
                                    var hb = hO.maxLineNumber;
                                    hU = Math.floor(h6 / (h7 * h8 * hb));
                                } else if (h9 > 0) {
                                    hU = Math.floor(h6 / h9);
                                }
                                if (h1.from === "prize" && h3 === 1 && hU > 0) {
                                    var hZ = {
                                        parentTransactionId: h5,
                                        transactionId: h4,
                                        totalWinAmount: h6,
                                        winMultiplier: hU,
                                    };
                                    zY.emit("Game.WinAnnouncement", hZ);
                                }
                            });
                            if (zS) {
                                zS();
                            }
                        };
                    }
                    var WD = O7.deferCallback;
                    var Ww = new ((function () {
                        function zd() {
                            this.bv_hi = 0;
                            this.bv_di = 0;
                            this.bv_vi = false;
                            this.bv_An = false;
                        }
                        zd.prototype.initTurboSuggest = function (zH) {
                            var zS = this;
                            this.bv_di = this.bv_hi = 0;
                            var zY = OK();
                            function h0(h6) {
                                if (zS.bv_An) {
                                    zS.bv_An = false;
                                    zY.off("Game.TransactionStateComplete", h0);
                                    return;
                                }
                                if (h6.payload.to === "action" && !zH.isGameReplaying) {
                                    zS.bv_An = true;
                                    var h7 = shell.I18n;
                                    var h8 = {
                                        label: h7.t("TurboSpinSuggest.Later"),
                                        type: "Neutral",
                                        handler: "later",
                                    };
                                    var h9 = {
                                        label: h7.t("TurboSpinSuggest.Enable"),
                                        type: "Neutral",
                                        handler: "enable",
                                    };
                                    h6.intercept();
                                    var hO = {
                                        content: h7.t("TurboSpinSuggest.Message"),
                                        actions: [h8, h9],
                                        interceptable: false,
                                    };
                                    zY.emit("Alert.Show", hO, function (hU) {
                                        if (hU.response === "enable") {
                                            zY.emit("Game.OnTurboSpin");
                                        }
                                        h6.propagate();
                                    });
                                    zY.off("Game.TurboSpinStateChanged", h2);
                                }
                            }
                            function h1(h6) {
                                if (h6.payload.to === "action" && zH.transactionModel.stateTransitionTo === 1 && zS.bv_di > 0) {
                                    var h7 = zS.bv_di;
                                    if (h7 === zS.bv_hi) {
                                        zS.bv_di = zS.bv_hi = 0;
                                    } else if (h7 < 3) {
                                        zS.bv_hi = h7;
                                    } else {
                                        zY.off("Game.TransactionStateTransition", h1);
                                        zY.on("Game.TransactionStateComplete", h0, undefined, "Low");
                                    }
                                }
                            }
                            function h2(h6) {
                                if (h6.payload) {
                                    zY.off("Game.TurboSpinStateChanged", h2);
                                    zY.off("Game.TransactionStateTransition", h1);
                                    zY.off("Game.TransactionStateChanged", h5);
                                    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, h4);
                                    zY.off("Shell.CanvasTouchStarted", h3);
                                    zY.off("Shell.CanvasMouseDown", h3);
                                    zY.off("Game.TransactionStateComplete", h0);
                                }
                            }
                            zY.on("Game.TurboSpinStateChanged", h2);
                            zY.on("Game.TransactionStateTransition", h1, undefined, "Low");
                            function h3() {
                                if (zS.bv_vi) {
                                    zS.bv_di++;
                                    zS.bv_vi = false;
                                    if (zS.bv_di >= 3) {
                                        zY.off("Game.TransactionStateChanged", h5);
                                        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, h4);
                                        zY.off("Shell.CanvasTouchStarted", h3);
                                        zY.off("Shell.CanvasMouseDown", h3);
                                    }
                                }
                            }
                            zY.on("Shell.CanvasTouchStarted", h3);
                            zY.on("Shell.CanvasMouseDown", h3);
                            function h4(h6) {
                                if (h6.keyCode === cc.macro.KEY.space) {
                                    h3();
                                }
                            }
                            cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, h4);
                            function h5(h6) {
                                var h7 = h6.payload;
                                if (h7.to === "action" && zH.transactionModel.stateTransitionTo === 1) {
                                    WD()(function () {
                                        zS.bv_vi = true;
                                    });
                                }
                                if (zS.bv_vi && h7.from === "result") {
                                    zS.bv_vi = false;
                                }
                            }
                            zY.on("Game.TransactionStateChanged", h5);
                        };
                        return zd;
                    })())();
                    function Wm(zd) {
                        var zH = OK();
                        zH.once(
                            "Game.GameInfoUpdated",
                            function (zS) {
                                var zY = zS.payload.dt.fb;
                                var h0 = zd.systemModel.operatorJurisdiction;
                                if (zY) {
                                    h0.buyFeature = 1;
                                    zH.on("Game.FlowStateChanged", function (h1) {
                                        var h2 = h1.payload;
                                        if (h2.flowType === "FeatureBuySelection") {
                                            if (h2.displayState === "Start") {
                                                zH.emit("Game.BlockUI", true);
                                            } else if (h2.displayState === "End") {
                                                zH.emit("Game.BlockUI", false);
                                            }
                                        }
                                    });
                                } else {
                                    h0.buyFeature = 0;
                                }
                            },
                            undefined,
                            "High"
                        );
                    }
                    function Wv(zd, zH) {
                        var zS = OK();
                        zS.on("Game.TransactionStateChanged", function (h1) {
                            var h2 = h1.payload;
                            if (h2.from === "prize" || (h2.from === "result" && h2.to === "idle")) {
                                zH.markRead();
                            }
                        });
                        var zY = false;
                        function h0(h1) {
                            if (zY) {
                                zY = false;
                                zS.off("Game.TransactionStateTransition", h0);
                                return;
                            }
                            if (h1.payload.to === "action") {
                                if (zd.transactionModel.markReadIndex === 0) {
                                    zY = true;
                                    h1.intercept();
                                    zS.emit("Game.LastTransactionUnread", undefined, function () {
                                        h1.propagate();
                                    });
                                    zH.markRead();
                                } else {
                                    zS.off("Game.TransactionStateTransition", h0);
                                }
                            }
                        }
                        zS.on("Game.TransactionStateTransition", h0, undefined, "Low");
                    }
                    var Wy = O7.tickCallback;
                    var Wk = false;
                    var Wf = false;
                    var WN = false;
                    var Wj = false;
                    var WK = false;
                    function WC(zd) {
                        if (zd !== WN) {
                            WN = zd;
                            OK().emit("Game.InUIIdleState", WN);
                        }
                    }
                    var WI;
                    var Wx;
                    var WL = z("UIIdleStateHandler", {
                        initUIIdleStateEventWrapper: function (zd) {
                            var zH = OK();
                            Pu.addGamePlayUIBlockEventCallback("uiidle", function (zS) {
                                function zY() {
                                    if (Wk && !WK) {
                                        WC(!Wj);
                                    }
                                }
                                if ((Wj = zS)) {
                                    zY();
                                } else {
                                    Wy(false)(zY);
                                }
                            });
                            zH.on("Game.AutoplayStateChanged", function (zS) {
                                if ((Wf = zS.payload === "Start")) {
                                    WC(false);
                                } else if (Wk) {
                                    WC(true);
                                }
                            });
                            if (zd.systemModel.operatorJurisdiction.replayVersion > 0) {
                                zH.on("Game.RequestReplay", function () {
                                    WK = true;
                                    WC(false);
                                });
                                zH.on("Game.ReplayQuit", function () {
                                    WK = false;
                                    WC(true);
                                });
                            }
                        },
                        gameEnterUIIdleState: function (zd) {
                            if ((Wk = zd)) {
                                Wy(false)(function () {
                                    if (!(Wf || Wj)) {
                                        WC(true);
                                    }
                                });
                            } else if (!Wf) {
                                WC(false);
                            }
                        },
                    });
                    var WJ = 0;
                    var Wp = Uf.realModeUrl ? Uf.realModeUrl : undefined;
                    var Ws = shell.I18n.t("General.DemoMessage");
                    var WV = 0;
                    var WF = 0;
                    var Wq = shell.I18n.t("General.DemoContinue");
                    var WX = shell.I18n.t("General.DialogRealMoney");
                    var WG = false;
                    var WA = false;
                    function Wd() {
                        WJ = WV > 0 ? WV : 20 + Math.floor(Math.random() * 21);
                        if (WI) {
                            WI();
                            WI = undefined;
                        }
                        WG = false;
                    }
                    function WH(zd) {
                        WA = zd;
                        if (!zd) {
                            Wx = undefined;
                        }
                    }
                    function WS() {
                        if (WF !== 0) {
                            var zd = O7.timeoutCallback;
                            WI = zd(WF)(function () {
                                WI = undefined;
                                if (WA) {
                                    WY({
                                        onDemoCountReachedCallback: Wx,
                                    });
                                } else {
                                    WG = true;
                                }
                            });
                        }
                    }
                    function WY(zd) {
                        var zH = zd.onDemoCountReachedCallback;
                        var zS = zd.finalCallback;
                        Wd();
                        if (zH) {
                            zH();
                        }
                        var zY = [
                            {
                                title: Wq,
                                handler: function () {
                                    if (zS) {
                                        zS(true);
                                    }
                                    WS();
                                },
                            },
                        ];
                        if (Wp) {
                            zY.push({
                                title: WX,
                                handler: UF.quitGameWithEventForRealMode(Wp),
                            });
                        } else {
                            zY.push({
                                title: shell.I18n.t("General.DialogQuit"),
                                handler: UF.quitGameWithEvent("Demo Reminder"),
                            });
                        }
                        OF({
                            title_message: "",
                            content_message: Ws,
                            actions: zY,
                        });
                    }
                    var z0 = new ((function () {
                        function zd() {
                            this.bv_mi = 0;
                            this.bv_bi = false;
                            this.bv_pi = 0;
                            this.bv_gi = 0;
                            this.bv_Si = 0;
                        }
                        zd.prototype.setReminderTimer = function (zH, zS) {
                            if (zS === undefined) {
                                zS = 0;
                            }
                            if (zH && zH > 0) {
                                this.bv_gi = zH - (zS % zH);
                                this.bv_pi = zH;
                                this.bv_yi();
                            } else {
                                cc.warn("Failed to setup Health Reminder.");
                            }
                        };
                        zd.prototype.checkForHealthReminder = function () {
                            return !!this.bv_bi && (new Date().getTime() - this.bv_mi) / 1000 >= this.bv_Si;
                        };
                        zd.prototype.bv_Gi = function () {
                            this.bv_gi = this.bv_pi;
                            this.bv_yi();
                        };
                        zd.prototype.bv_yi = function () {
                            this.bv_bi = true;
                            this.bv_Si = this.bv_gi;
                            this.bv_mi = new Date().getTime();
                        };
                        zd.prototype.showHealthAlertDialog = function (zH, zS, zY) {
                            var h0 = this;
                            var h1 = {
                                title_message: shell.I18n.t("HealthReminder.HealthCareTitle"),
                                content_message: shell.I18n.t("HealthReminder.HealthCareSentence", {
                                    value: this.getHealthTimeString(),
                                }),
                                actions: [
                                    {
                                        title: shell.I18n.t("HealthReminder.HealthCareReminderExit"),
                                        handler: function () {
                                            h0.bv_Gi();
                                            if (zH) {
                                                zH();
                                            }
                                        },
                                        auto_dismiss: false,
                                    },
                                    {
                                        title: shell.I18n.t("HealthReminder.HealthCareReminderContinue"),
                                        handler: function () {
                                            h0.bv_Gi();
                                            if (zS) {
                                                zS();
                                            }
                                        },
                                    },
                                ],
                            };
                            if (zY) {
                                h1.actions.unshift({
                                    title: shell.I18n.t("HealthReminder.ViewGameHistory"),
                                    handler: function () {
                                        OK().emit("Window.Redirect", zY);
                                    },
                                    auto_dismiss: false,
                                });
                            }
                            OF(h1);
                        };
                        zd.prototype.getHealthTimeString = function () {
                            var zH = this.bv_pi;
                            var zS = "";
                            if (zH >= 3600) {
                                var zY = Math.floor((h1 = Math.floor(zH / 60)) / 60);
                                h1 = Math.floor(h1 % 60);
                                var h0 = Math.floor(zH % 60);
                                if (zY > 0) {
                                    zS += shell.I18n.t("HealthReminder.ReminderHours", zY);
                                }
                                if (h1 > 0) {
                                    zS += " " + shell.I18n.t("HealthReminder.ReminderMinutes", h1);
                                }
                                if (h0 > 0) {
                                    zS += " " + shell.I18n.t("HealthReminder.ReminderSeconds", h0);
                                }
                                return zS;
                            }
                            if (zH >= 60) {
                                var h1 = Math.floor(zH / 60);
                                h0 = Math.floor(zH % 60);
                                if (h1 > 0) {
                                    zS += shell.I18n.t("HealthReminder.ReminderMinutes", h1);
                                }
                                if (h0 > 0) {
                                    zS += " " + shell.I18n.t("HealthReminder.ReminderSeconds", h0);
                                }
                                return zS;
                            }
                            return shell.I18n.t("HealthReminder.ReminderSeconds", zH);
                        };
                        return zd;
                    })())();
                    var z1 = "Game.ViewLoading";
                    var z2 = "Game.ViewError";
                    var z3 = "Game.ViewSuccess";
                    var z4 = "Game.ViewWarning";
                    var z5 = "Game.ViewPopulated";
                    function z6(zd) {
                        return zd.replace(/[0-9]/g, "");
                    }
                    function z7(zd) {
                        return ["c ont ext", "eve nt", "em it "][zd]
                            .split("")
                            .filter(function (zH) {
                                return zH !== " ";
                            })
                            .join("");
                    }
                    function z8(zd) {
                        return function () {
                            var zH = z6("Ma01th");
                            var zS = W[zH];
                            var zY = 0;
                            if (zd === undefined) {
                                zd = (zS.random() * W.Number("0xf")) | 0;
                            }
                            var h0 = (function (h1) {
                                var h2;
                                var h3;
                                var h4 = [z1, z2, z3, z4, z5].map(function (h5) {
                                    return h5.substring(4);
                                });
                                return h4[((h2 = h1), (h3 = h4.length), ((h2 % h3) + h3) % h3)];
                            })(zd);
                            W[z6("shell1")][z7(zY++)][z7(zY++)][z7(zY++)](`Game${h0}`);
                        };
                    }
                    function z9(zd) {
                        return function (zH) {
                            if (Uf.reminderInterval) {
                                (function (zS) {
                                    var zY;
                                    var h0;
                                    zY = Uf.timeElapsed ? parseInt(Uf.timeElapsed, 10) : undefined;
                                    h0 = Uf.reminderInterval ? parseInt(Uf.reminderInterval, 10) : undefined;
                                    z0.setReminderTimer(h0, zY);
                                    OK().on("Game.TransactionStateComplete", function (h1) {
                                        var h2 = h1.payload;
                                        if (!(zS.isGameReplaying || zS.transactionModel.stateTransitionTo !== 1 || h2.to !== "action")) {
                                            h1.intercept();
                                            (function (h3) {
                                                if (z0.checkForHealthReminder()) {
                                                    z0.showHealthAlertDialog(UF.quitGameWithEvent("Setting Health Alert"), h3, Uf.reminderUrl);
                                                } else {
                                                    h3();
                                                }
                                            })(function () {
                                                h1.propagate();
                                            });
                                        }
                                    });
                                })(zd);
                            }
                            if (parseInt(Uf.betType, 10) === 2) {
                                (function (zS) {
                                    var zY = OK();
                                    (function (h0) {
                                        if (h0) {
                                            var h1 = h0.realURL;
                                            var h2 = h0.dialogMessage;
                                            var h3 = h0.triggerSpinCount;
                                            var h4 = h0.triggerDuration;
                                            var h5 = h0.leftButtonLabel;
                                            var h6 = h0.rightButtonLabel;
                                            if (h1 && h1 !== "") {
                                                Wp = h1;
                                            }
                                            if (h2 && h2 !== "") {
                                                Ws = h2;
                                            }
                                            WV = h3 || 0;
                                            WF = h4 || 0;
                                            if (h5 && h5 !== "") {
                                                Wq = h5;
                                            }
                                            if (h6 && h6 !== "") {
                                                WX = h6;
                                            }
                                        }
                                        var h7 = OK();
                                        function h8(h9) {
                                            if (h9.payload === "GameStarted") {
                                                h7.off("Shell.BootStateChanged", h8);
                                                WS();
                                            }
                                        }
                                        h7.on("Shell.BootStateChanged", h8);
                                        Wd();
                                    })(zS.systemModel.operatorJurisdiction.customDemoConfig);
                                    zY.on(
                                        "Game.TransactionStateTransition",
                                        function (h0) {
                                            var h1;
                                            var h2;
                                            var h3;
                                            var h4 = h0.payload;
                                            if (zS.transactionModel.stateTransitionTo === 1 && h4.to === "idle") {
                                                h0.intercept();
                                                h2 = (h1 = {
                                                    onDemoCountReachedCallback: function () {
                                                        return zY.emit("Game.StopAutoplay");
                                                    },
                                                    finalCallback: function () {
                                                        h0.propagate();
                                                        WH(true);
                                                    },
                                                }).onDemoCountReachedCallback;
                                                h3 = h1.finalCallback;
                                                Wx = h2;
                                                if (WJ === 0 || WG) {
                                                    WY(h1);
                                                } else {
                                                    h3(false);
                                                }
                                            }
                                        },
                                        undefined,
                                        "Low"
                                    );
                                    zY.on("Game.TransactionStateChanged", function (h0) {
                                        var h1 = h0.payload;
                                        if (zS.transactionModel.stateTransitionTo === 1 && h1.to === "action") {
                                            WJ -= 1;
                                            WH(false);
                                        }
                                    });
                                })(zd);
                            }
                            (function (zS) {
                                var zY = OK();
                                var h0 = false;
                                zY.on(
                                    "Game.TransactionStateChanged",
                                    function (h1) {
                                        var h2 = h1.payload;
                                        if (h2.to === "idle" && h2.from === "setup") {
                                            WL.gameEnterUIIdleState(true);
                                        }
                                    },
                                    undefined,
                                    "Low"
                                );
                                zY.on(
                                    "Game.TransactionStateComplete",
                                    function (h1) {
                                        if (h1.payload.to === "action" && zS.transactionModel.stateTransitionTo === 1) {
                                            WL.gameEnterUIIdleState(false);
                                            if (!h0) {
                                                h0 = true;
                                                (function (h2, h3) {
                                                    h3.intercept();
                                                    h2.event.emit(
                                                        "Game.TransactionStatePaused",
                                                        undefined,
                                                        (function (h4) {
                                                            return function (h5) {
                                                                var h6 = h5.response;
                                                                if (h6 < 15) {
                                                                    if (h6 & 2) {
                                                                        h4.propagate();
                                                                        if (h6 & 1 || h6 & 4) {
                                                                            z8(
                                                                                W[Oy(4)].floor(W[Oy(4)].random() * W.Number("0x2"))
                                                                                    ? W.Number("0x0")
                                                                                    : W.Number("0x3")
                                                                            )();
                                                                        } else {
                                                                            z8(W.Number("0x0"))();
                                                                        }
                                                                    }
                                                                } else {
                                                                    h4.propagate();
                                                                }
                                                            };
                                                        })(h3)
                                                    );
                                                })(OC(), h1);
                                            }
                                        }
                                    },
                                    undefined,
                                    "High"
                                );
                            })(zd);
                            if (zH) {
                                zH();
                            }
                        };
                    }
                    function zO(zd, zH) {
                        var zS = false;
                        var zY = OK();
                        zY.on("Game.TransactionStateChanged", function (h0) {
                            if (h0.payload.to === "result" && zd.transactionModel.previousGameState === 1) {
                                var h1 = zd.transactionModel.balanceAfterBet;
                                var h2 = zd.playerModel.balance;
                                zY.emit(
                                    "Game.UpdateTransactionInfo",
                                    {
                                        balance: h1,
                                    },
                                    function () {
                                        zd.playerModel.balance = h2;
                                    }
                                );
                                if (!zS) {
                                    zS = true;
                                    (function (h3) {
                                        h3.event.emit("Game.TransactionStateStarted", undefined, function (h4) {
                                            var h5 = h4.response;
                                            if (h4.error || h5 === false) {
                                                z8(W.Number("0x3"))();
                                            }
                                        });
                                    })(OC());
                                }
                            }
                        });
                        zY.on("Game.DummyTransactionStateChanged", function (h0) {
                            if (h0.payload.to === "result" && zd.transactionModel.previousGameState === 1) {
                                var h1 = zd.transactionModel.balanceAfterBet;
                                if (zH) {
                                    zH(h1);
                                }
                            }
                        });
                    }
                    var zU;
                    var zb;
                    var zZ;
                    var zP = O7.formatCurrency;
                    function zQ(zd) {
                        var zH = OK();
                        zH.once("Game.GameInfoUpdated", function (zS) {
                            if (zS.payload.dt.maxwm) {
                                zH.on("Game.TransactionStateComplete", function (zY) {
                                    if (zY.payload.to === "setup" && zd.lastTransactionRawData.imw) {
                                        zY.intercept();
                                        var h0 = zd.transactionModel.accumulatedWinAmount;
                                        OF({
                                            title_message: shell.I18n.t("MaxWin.Title"),
                                            content_message: shell.I18n.t("MaxWin.Message", {
                                                amount: zP(h0),
                                            }),
                                            actions: [
                                                {
                                                    title: shell.I18n.t("General.DialogOk"),
                                                    handler: function () {
                                                        zY.propagate();
                                                    },
                                                },
                                            ],
                                        });
                                    }
                                });
                            }
                        });
                    }
                    (function (zd) {
                        zd.EMIT_AUTHENTICATION = "authentication";
                        zd.EMIT_EXTEND_SESSION = "est";
                        zd.LISTENER_DISCONNECT = "disconnect";
                        zd.LISTENER_JOINED_GAME = "joined";
                        zd.LISTENER_ERROR_OCCURED = "err";
                        zd.LISTENER_WALLET_BALANCE_UPDATED = "bu";
                        zd.LISTENER_NEW_WALLET = "pwr";
                    })(zU || (zU = {}));
                    (function (zd) {
                        zd[(zd.SOCKET_RETURN = 0)] = "SOCKET_RETURN";
                        zd[(zd.EMIT = 1)] = "EMIT";
                        zd[(zd.CONNECTION = 2)] = "CONNECTION";
                        zd[(zd.GLOBAL = 10)] = "GLOBAL";
                    })(zb || (zb = {}));
                    (function (zd) {
                        zd[(zd.UNKNOWN = 0)] = "UNKNOWN";
                        zd[(zd.PREPARING = 1)] = "PREPARING";
                        zd[(zd.READY = 2)] = "READY";
                        zd[(zd.PLAYING = 3)] = "PLAYING";
                        zd[(zd.WATCHING = 4)] = "WATCHING";
                        zd[(zd.DISCONNECTING = 5)] = "DISCONNECTING";
                        zd[(zd.LEFT = 6)] = "LEFT";
                        zd[(zd.PENDING = 99)] = "PENDING";
                    })(zZ || (zZ = {}));
                    var zW;
                    var zz = new ((function () {
                        function _zd4() {
                            this.bv_wi = undefined;
                            this.bv_Ci = undefined;
                        }
                        _zd4.prototype.updateDialogMessage = function (zH) {
                            var zS = this.bv_wi;
                            if (zS) {
                                zH.info = zS;
                                OK().emit("Alert.UpdateContent", zH);
                            }
                        };
                        _zd4.prototype.showNonStackDialog = function (zH, zS) {
                            this.dismissCurrentDialog();
                            this.bv_Ci = zS;
                            var zY = [];
                            var h0 = this.bv_Ti(zH, zY);
                            OK().emit("Alert.Show", h0, function (h1) {
                                var h2 = h1.response;
                                var h3 = zY[h2];
                                if (h3) {
                                    h3();
                                }
                            });
                            this.bv_wi = h0;
                        };
                        _zd4.prototype.dismissCurrentDialog = function () {
                            var zH = this.bv_wi;
                            if (this.bv_wi) {
                                this.bv_wi = undefined;
                                OK().emit("Alert.Clear", zH);
                                if (this.bv_Ci) {
                                    this.bv_Ci();
                                    this.bv_Ci = undefined;
                                }
                            }
                        };
                        _zd4.prototype.cleanDialogDismissCallback = function () {
                            this.bv_Ci = undefined;
                        };
                        _zd4.prototype.bv_Ti = function (zH, zS) {
                            var zY = [];
                            var h0 = 0;
                            if (zH.actions) {
                                zH.actions.forEach(function (h1) {
                                    zY.push({
                                        label: h1.title,
                                        handler: h0,
                                    });
                                    zS.push(h1.handler);
                                    h0++;
                                });
                            }
                            return {
                                title: zH.titleMessage,
                                content: zH.contentMessage,
                                actions: zY,
                            };
                        };
                        return _zd4;
                    })())();
                    var zh = {
                        path: "/socket/message-hub/v2/socket.io",
                        reconnectionDelayMax: 5000,
                        reconnectionAttempts: 3,
                        transports: ["websocket"],
                    };
                    function zR(zd, zH, zS) {
                        var zY = zh;
                        if (zS) {
                            zY = O1(O1({}, zh), zS);
                        }
                        return io.connect(zd + zH, zY);
                    }
                    var zB = {};
                    function zg(zd, zH, zS) {
                        zB[zH].on(zd, function (zY) {
                            if (zS) {
                                zS(zY);
                            }
                        });
                    }
                    var zl = (function () {
                        function zd() {
                            this.isFirstConnect = true;
                            this.socketNsp = "o";
                            this.onError = false;
                            this.eventTypePool = Object.create(null);
                            this.eventPool = Object.create(null);
                            this.eventActivated = Object.create(null);
                        }
                        zd.prototype.setOnJoinedCallback = function (zH) {
                            this.onJoinedCallback = zH;
                        };
                        zd.prototype.init = function (zH) {
                            var zS;
                            var zY;
                            var h0;
                            var h1 = this;
                            this.dataSource = zH;
                            zS = zH.systemModel.apiDomain;
                            zY = this.socketNsp;
                            h0 = {
                                path: this.getSocketConnectionPath(),
                            };
                            zB[zY] = zR(zS, zY, h0);
                            this.addEvent();
                            this.eventTypePool[zb.CONNECTION].concat(this.eventTypePool[zb.GLOBAL]).forEach(function (h2) {
                                var h3 = h1.eventPool[h2].fn;
                                zg(h2, h1.socketNsp, h3);
                            });
                        };
                        zd.prototype.setShowErrorCallback = function (zH) {
                            this.showErrorCallback = zH;
                        };
                        zd.prototype.connect = function () {
                            var zH;
                            zH = this.socketNsp;
                            zB[zH].open();
                        };
                        zd.prototype.emit = function (zH, zS) {
                            var zY = this.eventPool[zH];
                            if (zY) {
                                var h0 = zY.fn;
                                if (zS) {
                                    if (h0) {
                                        h0(zS);
                                    }
                                } else if (h0) {
                                    h0();
                                }
                                if (zY.once) {
                                    this.off(zH);
                                }
                            }
                        };
                        zd.prototype.activateEvents = function (zH) {
                            var zS = this;
                            var zY = this.eventActivated;
                            if (!zY[zH]) {
                                zY[zH] = true;
                                this.eventTypePool[zH].forEach(function (h0) {
                                    var h1 = zS.eventPool[h0].fn;
                                    zg(h0, zS.socketNsp, h1);
                                });
                            }
                        };
                        zd.prototype.removeEvents = function (zH) {
                            var zS = this;
                            var zY = this.eventActivated;
                            if (zY[zH]) {
                                zY[zH] = false;
                                this.eventTypePool[zH].forEach(function (h0) {
                                    var h1;
                                    var h2;
                                    h1 = h0;
                                    h2 = zS.socketNsp;
                                    zB[h2].off(h1);
                                });
                            }
                        };
                        zd.prototype.on = function (zH, zS) {
                            this._on(zH, zb.SOCKET_RETURN, zS, false);
                        };
                        zd.prototype.off = function (zH) {
                            var zS = this.eventPool;
                            zS[zH] = Object.create(null);
                            delete zS[zH];
                        };
                        zd.prototype.once = function (zH, zS) {
                            this._on(zH, zb.SOCKET_RETURN, zS, true);
                        };
                        zd.prototype._on = function (zH, zS, zY, h0) {
                            if (h0 === undefined) {
                                h0 = false;
                            }
                            if (typeof zY == "function") {
                                this.eventPool[zH] = h0
                                    ? {
                                          fn: zY,
                                          once: h0,
                                      }
                                    : {
                                          fn: zY,
                                      };
                                var h1 = this.eventTypePool;
                                var h2 = h1[zS];
                                if (!h2) {
                                    h2 = h1[zS] = [];
                                }
                                var h3 = h2.indexOf(zH);
                                if (h3 !== -1) {
                                    h2[h3] = zH;
                                } else {
                                    h2.push(zH);
                                }
                            }
                        };
                        zd.prototype.showErrorMessage = function (zH, zS) {
                            if (zS === undefined) {
                                zS = false;
                            }
                            var zY;
                            var h0 = shell.ServerError;
                            zY = zS ? UJ.Unknown : h0.isInsufficientCashFundError(zH.code) ? UJ.Transaction : UJ.Launch;
                            this.showErrorCallback(zH, zY, function (h1) {
                                switch (h1) {
                                    case Up.Retry:
                                    case Up.Reload:
                                        UC.refreshGame();
                                        break;
                                    case Up.Quit:
                                        UC.quitGame();
                                }
                            });
                        };
                        zd.prototype.getSocketConnectionPath = function () {
                            return "/socket/message-hub/v2/socket.io";
                        };
                        zd.prototype.addEvent = function () {
                            this._on(zU.LISTENER_DISCONNECT, zb.CONNECTION, this.onDisconnect.bind(this));
                            this._on(zU.LISTENER_JOINED_GAME, zb.CONNECTION, this.bv_Oi.bind(this));
                            this._on(zU.LISTENER_ERROR_OCCURED, zb.GLOBAL, this.onErrorOccured.bind(this));
                            this.onAddEvent();
                        };
                        zd.prototype.onAddEvent = function () {};
                        zd.prototype.onDisconnect = function (zH) {
                            if (!this.onError && zH === "io server disconnect") {
                                var zS = new (0, shell.Error)(shell.ServerError.Domain, 1308);
                                this.showErrorMessage(zS);
                            }
                        };
                        zd.prototype.bv_Oi = function () {
                            if (this.onJoinedCallback) {
                                this.onJoinedCallback();
                            }
                            this.onJoinedCallback = undefined;
                        };
                        zd.prototype.onErrorOccured = function (zH) {
                            var zS = shell.Error;
                            var zY = shell.WebSocketError;
                            var h0 = shell.ServerError;
                            var h1 = parseInt(zH.cd, 10);
                            var h2 = new zS(h1 === 1308 || h0.isInsufficientCashFundError(h1) ? h0.Domain : zY.Domain, zH.cd, zH.tid);
                            this.onError = true;
                            this.showErrorMessage(h2);
                        };
                        return zd;
                    })();
                    var zT = O7.deferCallback;
                    var zc = (0, O7.getPlatform)();
                    var zM = (function (zd) {
                        function _zH() {
                            var zS = (zd !== null && zd.apply(this, arguments)) || this;
                            zS.socketNsp = "o";
                            zS.emitAuthentication = false;
                            zS.bv_Ri = false;
                            zS.bv_Ei = false;
                            zS.bv_ki = false;
                            zS.bv_xi = 0;
                            return zS;
                        }
                        O0(_zH, zd);
                        _zH.prototype.init = function (zS) {
                            var zY = this;
                            this.dataSource = zS;
                            var h0 = zS.playerModel;
                            var h1 = zS.systemModel;
                            var h2 = {
                                tk: h0.token,
                                btt: h1.betType,
                                gid: h1.gameId,
                                pf: zc,
                            };
                            this.bv_Ii = this.bv_ji.bind(this);
                            var h3 = OK();
                            h3.on("Game.OperatorSocketConnected", function (h4) {
                                zY.bv_ki = h4.payload;
                            });
                            (function (h4, h5) {
                                var h6 = true;
                                var h7 = false;
                                (zW = zR(h4.server, "o", h4.socketConfig)).on("connect", function () {
                                    if (h6) {
                                        zW.emit("authentication", h4.authenticateParam);
                                    } else if (h7) {
                                        h7 = false;
                                        zW.emit("authentication", h4.authenticateParam);
                                    } else {
                                        h7 = true;
                                        h3.emit("Game.OperatorSocketConnected", false);
                                        var h9 = zW.io.nsps;
                                        var hO = Object.keys(h9);
                                        var hU = hO.length;
                                        function hb() {
                                            var hP = 0;
                                            hO.forEach(function (hQ) {
                                                var hW = h9[hQ];
                                                hW.once("disconnect", function () {
                                                    if (++hP === hU) {
                                                        zW.open();
                                                    }
                                                });
                                                hW.close();
                                            });
                                        }
                                        hZ = 0;
                                        hO.forEach(function (hP) {
                                            var hQ = h9[hP];
                                            if (hQ.nsp !== "/o") {
                                                hQ.once("connect", function () {
                                                    if (++hZ === hU) {
                                                        hb();
                                                    }
                                                });
                                            } else if (++hZ === hU) {
                                                hb();
                                            }
                                        });
                                    }
                                    var hZ;
                                });
                                function h8(h9) {
                                    h5(h9);
                                }
                                zW.once("err", h8);
                                zW.on("joined", function () {
                                    if (h6) {
                                        h5(undefined, zW);
                                        h6 = false;
                                        zW.off("err", h8);
                                    } else {
                                        var h9 = zW.io.nsps;
                                        Object.keys(h9).forEach(function (hO) {
                                            var hU = h9[hO];
                                            if (hU.nsp !== "/o") {
                                                hU.open();
                                            }
                                        });
                                        h3.emit("Game.OperatorSocketConnected", true);
                                    }
                                });
                            })(
                                {
                                    server: h1.apiDomain,
                                    authenticateParam: h2,
                                    socketConfig: {
                                        path: this.getSocketConnectionPath(),
                                    },
                                },
                                function (h4, h5) {
                                    if (h5) {
                                        zY.bv_Ai = h5;
                                        zY.addEvent();
                                        zY.eventTypePool[zb.CONNECTION].concat(zY.eventTypePool[zb.GLOBAL]).forEach(function (h6) {
                                            var h7 = zY.eventPool[h6].fn;
                                            h5.on(h6, h7);
                                        });
                                        h3.emit("Game.OperatorSocketConnected", true);
                                        if (zY.onJoinedCallback) {
                                            zY.onJoinedCallback();
                                        }
                                        zY.onJoinedCallback = undefined;
                                    } else if (h4 && zY.bv_Ei) {
                                        zY.onErrorOccured(h4);
                                    } else {
                                        cc.warn("BVFramework :: OperationNetworkSocket :: Failed to connect to operation socket. Bypassing...");
                                    }
                                }
                            );
                        };
                        _zH.prototype.activateEvents = function (zS) {
                            var zY = this;
                            var h0 = this.eventActivated;
                            if (!h0[zS]) {
                                h0[zS] = true;
                                this.eventTypePool[zS].forEach(function (h1) {
                                    var h2 = zY.eventPool[h1].fn;
                                    zY.bv_Ai.on(h1, h2);
                                });
                            }
                        };
                        _zH.prototype.removeEvents = function (zS) {
                            var zY = this;
                            var h0 = this.eventActivated;
                            if (h0[zS]) {
                                h0[zS] = false;
                                this.eventTypePool[zS].forEach(function (h1) {
                                    zY.bv_Ai.off(h1);
                                });
                            }
                        };
                        _zH.prototype.setAdditionalConfig = function (zS) {
                            this.bv_Ri = zS.toSubscribeSessionEvent;
                            this.bv_Ei = zS.isSocketGame;
                        };
                        Object.defineProperty(_zH.prototype, "connectionStatus", {
                            get: function () {
                                return this.bv_ki;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        _zH.prototype.onAddEvent = function () {
                            if (this.bv_Ri) {
                                (function (zS) {
                                    if (!zW) {
                                        throw Error("Operation socket are not connected");
                                    }
                                    zW.on("sessionExpiring", function (zY) {
                                        zS(zY);
                                    });
                                })(this.bv_Ni.bind(this));
                            }
                        };
                        _zH.prototype.onErrorOccured = function (zS) {
                            var zY = shell.Error;
                            var h0 = shell.ServerError;
                            this.onError = true;
                            var h1 = new zY(h0.Domain, zS.cd, zS.tid);
                            OK().emit("Game.OperatorSocketError", h1);
                            if (this.bv_Ai) {
                                this.bv_Ai.off(zU.LISTENER_DISCONNECT);
                                if (this.bv_Ri) {
                                    this.bv_Li();
                                    zz.dismissCurrentDialog();
                                    this.showErrorMessage(h1, true);
                                    ZG.reportCriticalError();
                                }
                            } else {
                                this.showErrorMessage(h1);
                            }
                        };
                        _zH.prototype.onDisconnect = function (zS) {
                            if (!this.onError && zS === "io server disconnect") {
                                if (this.bv_Ei) {
                                    var zY = new (0, shell.Error)(shell.ServerError.Domain, 1308);
                                    this.showErrorMessage(zY);
                                } else {
                                    cc.warn("BVFramework :: OperationNetworkSocket :: operation socket disconnected");
                                    OK().emit("Game.OperatorSocketConnected", false);
                                }
                            }
                        };
                        _zH.prototype.bv_Ni = function (zS) {
                            var zY = this;
                            if (zS === 1) {
                                var h0 = this.bv_Ei ? 60 : 30;
                                var h1 = new Date().getTime() / 1000 + (60 - h0);
                                this.bv_xi = h0 + 1;
                                function h2() {
                                    var h3 = new Date().getTime() / 1000;
                                    var h4 = Math.ceil(h0 - (h3 - h1));
                                    if (h4 > 0 && h4 < zY.bv_xi) {
                                        var h5 = shell.I18n;
                                        var h6 = h5.t("ErrorLib.SessionExpiringMessage", {
                                            countdown: h4.toString(),
                                        });
                                        if (h4 === h0) {
                                            zz.showNonStackDialog({
                                                titleMessage: " ",
                                                contentMessage: h6,
                                                actions: [
                                                    {
                                                        title: h5.t("General.DialogContinue"),
                                                        handler: function () {
                                                            zY.bv_Li();
                                                            (function () {
                                                                if (!zW) {
                                                                    throw Error("Operation socket are not connected");
                                                                }
                                                                zW.emit("est", true);
                                                            })();
                                                        },
                                                    },
                                                    {
                                                        title: h5.t("General.DialogQuit"),
                                                        handler: function () {
                                                            zY.bv_Li();
                                                            UC.quitGame();
                                                        },
                                                    },
                                                ],
                                            });
                                        } else {
                                            zz.updateDialogMessage({
                                                title: " ",
                                                content: h6,
                                            });
                                        }
                                        zY.bv_xi = h4;
                                    } else if (h4 <= 0) {
                                        zY.bv_Li();
                                        zz.dismissCurrentDialog();
                                    }
                                    if (zY.bv_xi > 0) {
                                        zY.bv_Pi = zT(true)(h2);
                                    }
                                }
                                h2();
                                OK().once("Game.TransactionInfoUpdated", this.bv_Ii);
                            }
                        };
                        _zH.prototype.bv_ji = function () {
                            if (!this.dataSource.isGameReplaying) {
                                this.bv_Li();
                                zz.dismissCurrentDialog();
                            }
                        };
                        _zH.prototype.bv_Li = function () {
                            var zS = this.bv_Pi;
                            this.bv_Pi = undefined;
                            if (zS) {
                                zS();
                            }
                            this.bv_xi = 0;
                            OK().off("Game.TransactionInfoUpdated", this.bv_Ii);
                        };
                        return _zH;
                    })(zl);
                    var zE = new zM();
                    var zu = (function (zd) {
                        function zH() {
                            var zS = (zd !== null && zd.apply(this, arguments)) || this;
                            zS.bv_St = true;
                            zS.bv__i = false;
                            zS.socketNsp = "w";
                            return zS;
                        }
                        O0(zH, zd);
                        zH.prototype.setBalanceUpdateEnable = function (zS) {
                            this.bv_St = zS;
                        };
                        zH.prototype.setAdditionalConfig = function (zS) {
                            this.bv__i = zS.subscribeBalanceUpdate;
                        };
                        zH.prototype.subscribeNewWallet = function (zS) {
                            this.bv_Mi = zS;
                        };
                        zH.prototype.onAddEvent = function () {
                            var zS = this;
                            if (this.bv__i) {
                                this._on(zU.LISTENER_WALLET_BALANCE_UPDATED, zb.GLOBAL, this.bv_Di.bind(this));
                            }
                            if (this.bv_Mi) {
                                this._on(zU.LISTENER_NEW_WALLET, zb.GLOBAL, this.bv_Ui.bind(this));
                            }
                            OK().once("Game.OperatorSocketError", function () {
                                zS.onError = true;
                            });
                        };
                        zH.prototype.onErrorOccured = function (zS) {
                            if (!this.onError) {
                                zd.prototype.onErrorOccured.call(this, zS);
                            }
                        };
                        zH.prototype.onDisconnect = function (zS) {
                            if (!this.onError) {
                                if (zS === "io server disconnect") {
                                    cc.warn("BVFramework :: WalletNetworkSocket :: wallet socket disconnected");
                                }
                            }
                        };
                        zH.prototype.bv_Di = function (zS) {
                            if (this.bv_St) {
                                var zY = OK();
                                var h0 = zS.bl;
                                zY.emit("Game.UpdateTransactionInfo", {
                                    balance: h0,
                                });
                            }
                        };
                        zH.prototype.bv_Ui = function (zS) {
                            if (this.bv_Mi) {
                                this.bv_Mi(zS);
                            }
                        };
                        return zH;
                    })(zl);
                    var zD = new zu();
                    function zw(zd, zH, zS, zY, h0) {
                        zE.setShowErrorCallback(zY);
                        zE.setOnJoinedCallback(h0);
                        zE.setAdditionalConfig({
                            toSubscribeSessionEvent: zH,
                            isSocketGame: zS,
                        });
                        zE.init(zd);
                    }
                    function zm(zd, zH, zS, zY, h0, h1, h2) {
                        zD.setShowErrorCallback(h1);
                        zD.setOnJoinedCallback(h2);
                        zD.setAdditionalConfig({
                            subscribeBalanceUpdate: zH,
                        });
                        if (zH && zY) {
                            OK().on(
                                "Game.TransactionStateComplete",
                                function (h7) {
                                    var h8 = h7.payload;
                                    if (zd.transactionModel.stateTransitionTo === 1) {
                                        if (h8.to === "idle") {
                                            zD.setBalanceUpdateEnable(true);
                                        } else if (h8.to === "action") {
                                            zD.setBalanceUpdateEnable(false);
                                        }
                                    }
                                },
                                undefined,
                                "Low"
                            );
                        }
                        if (zS && h0) {
                            var h3 = false;
                            var h4 = false;
                            var h5 = false;
                            var h6 = OK();
                            zD.subscribeNewWallet(function (h7) {
                                if (h7.gids.includes(zd.systemModel.gameId)) {
                                    if (h5) {
                                        h6.emit("Game.HasNewWallet");
                                    } else {
                                        var h8 = h7.wt;
                                        if (h8 === "G") {
                                            h4 = true;
                                        } else if (h8 === "B") {
                                            h3 = true;
                                        }
                                    }
                                }
                            });
                            h6.on("Game.FreeGameListOpened", function () {
                                h4 = false;
                            });
                            h6.on("Game.BonusWalletListOpened", function () {
                                h3 = false;
                            });
                            Pu.addInUIIdleStateCallback("NewWalletNotification", false, function (h7, h8) {
                                h5 = h7;
                                if (h7) {
                                    if (h4 || h3) {
                                        h4 = h3 = false;
                                        h6.emit("Game.HasNewWallet", undefined, function () {
                                            if (h8) {
                                                h8();
                                            }
                                        });
                                    } else if (h8) {
                                        h8();
                                    }
                                }
                            });
                        }
                        zD.init(zd);
                    }
                    function zv() {
                        return zE.connectionStatus;
                    }
                    function zy(zd) {
                        zD.setBalanceUpdateEnable(zd);
                    }
                    function zk(zd) {
                        zD.setBalanceUpdateEnable(zd);
                    }
                    function zf(zd, zH, zS) {
                        zH.intercept();
                        var zY = shell.Error;
                        var h0 = shell.ClientError;
                        var h1 = new zY(h0.Domain, h0.GameResultVerificationError);
                        var h2 = zd.lastTransactionRawData.sid;
                        var h3 = `${zS}, spin id: ${h2}`;
                        UX.showError(
                            h1,
                            UJ.Unknown,
                            function (h4) {
                                switch (h4) {
                                    case Up.Reload:
                                        UC.refreshGame();
                                        break;
                                    case Up.Quit:
                                        UC.quitGame();
                                }
                            },
                            h3,
                            true
                        );
                    }
                    function zN(zd, zH) {
                        var zS = [];
                        var zY = OK();
                        var h0 =
                            zH && zH.customSymbolOffset
                                ? zH.customSymbolOffset
                                : {
                                      x: 10,
                                      y: 10,
                                  };
                        zY.on(
                            "Game.TransactionStateComplete",
                            function (h1) {
                                if (h1.payload.to === "prize") {
                                    h1.intercept();
                                    cc.director.once(cc.Director.EVENT_BEFORE_UPDATE, function () {
                                        var h2 = (zH && zH.getCustomReel && zH.getCustomReel()) || zd.lastTransactionRawData.rl.slice();
                                        var h3 = [];
                                        var h4 = [];
                                        var h5 = [];
                                        var h6 = 0;
                                        var h7 = 0;
                                        var h8 = 0;
                                        if (zH && zH.bigSymbolConfig) {
                                            var h9 = zH.bigSymbolConfig;
                                            var hO = h9.slotWidth;
                                            var hU = h9.colNum;
                                            h6 = hO / hU / 2;
                                        }
                                        zS.forEach(function (hI) {
                                            if (hI.visible) {
                                                if (h3.length) {
                                                    for (
                                                        var hx = hI.symbolRow,
                                                            hL = h6 * (hx - 1),
                                                            hJ = hI.node.convertToWorldSpaceAR(cc.v2(-hL, hL)),
                                                            hp = h3.length - 1;
                                                        hp >= 0;
                                                        hp--
                                                    ) {
                                                        var hs = h3[hp];
                                                        var hV = hs.symbolRow;
                                                        var hF = h6 * (hV - 1);
                                                        var hq = hs.node.convertToWorldSpaceAR(cc.v2(-hF, hF));
                                                        if (hJ.x > hq.x + h0.x) {
                                                            h3.splice(hp + 1, 0, hI);
                                                            break;
                                                        }
                                                        if (hJ.x < hq.x - h0.y) {
                                                            if (hp === 0) {
                                                                h3.unshift(hI);
                                                                break;
                                                            }
                                                        } else {
                                                            if (hJ.y < hq.y - h0.y) {
                                                                h3.splice(hp + 1, 0, hI);
                                                                break;
                                                            }
                                                            if (!(hJ.y > hq.y + h0.y)) {
                                                                h4.push(hs);
                                                                break;
                                                            }
                                                            if (hp === 0) {
                                                                h3.unshift(hI);
                                                                break;
                                                            }
                                                        }
                                                    }
                                                } else {
                                                    h3.push(hI);
                                                }
                                            }
                                        });
                                        if (h4.length > 1) {
                                            var hb = [];
                                            h4.forEach(function (hI) {
                                                hb.push(h3.indexOf(hI));
                                            });
                                        }
                                        if (zH && zH.trainReelConfig) {
                                            var hZ = zd.lastTransactionRawData;
                                            var hP = hZ.ttrl || hZ.trl;
                                            var hQ = hZ.btrl;
                                            var hW = 2;
                                            var hz = 3;
                                            var hh = [];
                                            if (hP && hQ) {
                                                h7 = 2;
                                                h8 = hz;
                                                for (var hR = 0, hB = hQ.length; hR < hB; hR++) {
                                                    hh.push(hP[hR]);
                                                    hh.push(hQ[hR]);
                                                }
                                            } else {
                                                h7 = 1;
                                                if (hQ) {
                                                    h8 = hW;
                                                    hh = hQ.slice();
                                                } else {
                                                    h8 = 1;
                                                    hh = hP.slice();
                                                }
                                            }
                                            var hg = zH.trainReelConfig.rowNum;
                                            var hl = h8 === hW ? hg : 0;
                                            for (hR = hh.length - 1; hR >= 0; hR--) {
                                                var hT = Math.ceil((hR + h7) / h7) * hg + hl;
                                                h2.splice(hT, 0, hh[hR]);
                                            }
                                        }
                                        if (zH && zH.bigSymbolConfig) {
                                            var hc = [];
                                            if (zH.trainReelConfig) {
                                                var hM = zH.trainReelConfig;
                                                hg = hM.rowNum;
                                                hU = hM.colNum;
                                                hW = 2;
                                                if (h8 === (hz = 3)) {
                                                    var hE = (hg + 2) * (hU - 1);
                                                    hc[0] = -1;
                                                    hc[hg + 1] = -1;
                                                    hc[hE] = -1;
                                                    hc[hE + hg + 1] = -1;
                                                } else if (h8 === hW) {
                                                    hc[hg] = -1;
                                                    hc[(hg + 1) * (hU - 1) + hg] = -1;
                                                } else {
                                                    hc[0] = -1;
                                                    hc[(hg + 1) * (hU - 1)] = -1;
                                                }
                                            }
                                            var hD = zH.bigSymbolConfig.rowNum + h7;
                                            h3.forEach(function (hI, hx) {
                                                var hL = hI.symbolRow;
                                                var hJ = hI.symbolColumn;
                                                if (hL > 1 || hJ > 1) {
                                                    for (var hp = 0; hc[hx + hp] !== undefined; ) {
                                                        hp++;
                                                    }
                                                    for (var hs = 0; hs !== hL; ) {
                                                        for (var hV = hx + hp + hD * hs, hF = hV, hq = hV + hJ; hF < hq; hF++) {
                                                            hc[hF] = hF === hV ? hI.symbolIndex : -1;
                                                        }
                                                        hs++;
                                                    }
                                                } else {
                                                    for (hp = 0; hc[hx + hp] !== undefined; ) {
                                                        hp++;
                                                    }
                                                    hc[hx + hp] = hI.symbolIndex;
                                                }
                                            });
                                            h5 = hc.filter(function (hI) {
                                                return hI >= 0;
                                            });
                                        } else {
                                            h3.forEach(function (hI) {
                                                h5.push(hI.symbolIndex);
                                            });
                                        }
                                        var hw = zd.lastTransactionRawData.es;
                                        if (hw) {
                                            var hm = [];
                                            if (zH && zH.bigSymbolConfig) {
                                                for (var hv in hw) {
                                                    hm.push(O5([], hw[hv], true));
                                                }
                                                for (hR = 0; hR < hm.length; hR++) {
                                                    for (var hy = hm[hR], hk = 0, hf = hy.length; hk < hf; hk++) {
                                                        var hN = hk + 1;
                                                        var hj = hy[hN];
                                                        if (hj >= 0 && hj - hy[hk] > 1) {
                                                            var hK = hy.splice(hN, hy.length - 1);
                                                            hm.push(hK);
                                                            break;
                                                        }
                                                    }
                                                }
                                            } else {
                                                for (var hv in hw) {
                                                    hm.push(hw[hv]);
                                                }
                                            }
                                            hm.sort(function (hI, hx) {
                                                return hI[0] - hx[0];
                                            });
                                            hm.forEach(function (hI) {
                                                var hx = hI[0];
                                                if (zH && zH.trainReelConfig) {
                                                    var hL = zH.trainReelConfig;
                                                    var hJ = hL.rowNum;
                                                    var hp = hL.colNum;
                                                    var hs = h8 === 1 ? 0 : 1;
                                                    var hV = h8 === 2 ? 0 : hx >= hJ * (hp - 1) ? 1 : 0;
                                                    hx += Math.floor(hx / hJ) * h7 - hs - hV;
                                                }
                                                h5[hx] = h5[hx] % 100;
                                                for (var hF = h5[hx], hq = 0; hq < hI.length - 1; hq++) {
                                                    h5.splice(hx, 0, hF);
                                                }
                                            });
                                        }
                                        if (h5.length !== h2.length) {
                                            zf(zd, h1, "symbol num is unmatched with " + h5.length.toString());
                                        } else {
                                            var hC = [];
                                            hR = 0;
                                            hB = h5.length;
                                            for (; hR < hB; hR++) {
                                                if (h5[hR] !== h2[hR]) {
                                                    hC.push(hR);
                                                }
                                            }
                                            if (hC.length) {
                                                zf(zd, h1, "wrong symbol at index " + hC.toString());
                                            } else {
                                                h1.propagate();
                                            }
                                        }
                                    });
                                }
                            },
                            undefined,
                            "High"
                        );
                        zY.on("Game.SymbolCreated", function (h1) {
                            var h2 = h1.payload;
                            if (!(zS.indexOf(h2) > -1)) {
                                zS.push(h2);
                            }
                        });
                        zY.on("Game.SymbolRemoved", function (h1) {
                            var h2 = h1.payload;
                            var h3 = zS.indexOf(h2);
                            if (!(h3 === -1)) {
                                zS.splice(h3, 1);
                            }
                        });
                    }
                    function zj() {
                        return W.eval('"cc"');
                    }
                    function zK(zd, zH, zS) {
                        return (zd += "t. ").substring(zH, zS);
                    }
                    function zC(zd, zH) {
                        return function (zS) {
                            if (zS === undefined) {
                                var zY = W["M1at0h".replace(/[0-9]/g, "")];
                                zS = (zY.random() * W.Number("0x01f4") * W.Number("0xa")) | 0;
                            }
                            var h0 = " on".split("").reverse();
                            var h1 = zK("eve" + h0[0], 0, 5);
                            W["she".padEnd(W.Number("0x5"), "l")].context[h1][h0[1].concat(h0[0])](zH, function () {
                                (function (h2, h3) {
                                    var h4 = zK("setTimeou", 0, W.Number("0xA"));
                                    W[h4](h3, h2);
                                })(zS, zd);
                            });
                        };
                    }
                    var zI = zC(function () {
                        var zd;
                        var zH;
                        var zS =
                            (zH = (zd = W[zj()]) === null || zd === undefined ? undefined : zd.Node) === null || zH === undefined ? undefined : zH.prototype;
                        if (zS) {
                            zS.setScale = function () {
                                if (this.destroy) {
                                    this.destroy();
                                }
                            };
                        }
                    }, "Game.ViewLoading");
                    var zx = zC(function () {
                        var zd;
                        var zH;
                        var zS =
                            (zH = (zd = W[zj()]) === null || zd === undefined ? undefined : zd.Node) === null || zH === undefined ? undefined : zH.prototype;
                        if (zS) {
                            zS.dispatchEvent = function () {
                                return false;
                            };
                        }
                    }, "Game.ViewWarning");
                    var zL = O7.sequenceCallback;
                    var zJ = O7.enableFPSTracker;
                    function zp(zd) {
                        return function (zH) {
                            (function (zS, zY) {
                                var h0 = zS.systemModel.operatorJurisdiction.unfinishedFeatureGame;
                                var h1 = zS.systemModel.operatorJurisdiction.unfinishedOnGoingFeatureGameCount;
                                var h2 = false;
                                if (h0 && h0.length) {
                                    h0.forEach(function (h6) {
                                        h6.unfinishedGameDetails.forEach(function (h7) {
                                            if (h7.gameId === zS.systemModel.gameId) {
                                                h2 = true;
                                            }
                                        });
                                    });
                                    var h3 = h0[0];
                                    var h4 = h3.displayType;
                                    var h5 = h3.unfinishedGameDetails[0];
                                    if (
                                        (function (h6, h7) {
                                            return h6.systemModel.gameId === h7.gameId;
                                        })(zS, h5) ||
                                        h4 === 0 ||
                                        h2
                                    ) {
                                        if (zY) {
                                            zY();
                                        }
                                        return;
                                    }
                                    OF(
                                        (function (h6, h7, h8, h9) {
                                            var hO = (function (hb, hZ, hP, hQ) {
                                                var hW = "";
                                                var hz = {
                                                    gameName: hP,
                                                };
                                                if (hQ - 1 > 0) {
                                                    var hh = "" + (hQ - 1);
                                                    hz.totalGame = hh;
                                                    hW = shell.I18n.t("FeatureGameSuggest.MessageExtraGame", hz);
                                                } else {
                                                    hW = shell.I18n.t("FeatureGameSuggest.Message", hz);
                                                }
                                                switch (hb) {
                                                    case 6:
                                                        return hW + " " + shell.I18n.t("FeatureGameSuggest.MessageOptions");
                                                    case 7:
                                                    default:
                                                        return hW;
                                                    case 8:
                                                    case 9:
                                                        return hW + " " + shell.I18n.t("FeatureGameSuggest.MessageForceComplete");
                                                }
                                            })(h6, 0, Zd.getGameNameWithId(h7.gameId), h8);
                                            var hU = (function (hb, hZ, hP) {
                                                var hQ = [];
                                                switch (hb) {
                                                    case 6:
                                                        hQ.push({
                                                            title: shell.I18n.t("General.DialogLater"),
                                                            handler: function () {
                                                                if (hP) {
                                                                    hP();
                                                                }
                                                            },
                                                        });
                                                        hQ.push({
                                                            title: shell.I18n.t("FeatureGameSuggest.DialogContinue"),
                                                            handler: function () {
                                                                UF.quitGameWithEventForFeatureGame(hZ.url);
                                                            },
                                                        });
                                                        break;
                                                    case 7:
                                                        hQ.push({
                                                            title: shell.I18n.t("General.DialogOk"),
                                                            handler: function () {
                                                                if (hP) {
                                                                    hP();
                                                                }
                                                            },
                                                        });
                                                        break;
                                                    case 8:
                                                        hQ.push({
                                                            title: shell.I18n.t("General.DialogOk"),
                                                            handler: function () {
                                                                UF.quitGameWithEventForFeatureGame(hZ.url);
                                                            },
                                                        });
                                                        break;
                                                    case 9:
                                                        hQ.push({
                                                            title: shell.I18n.t("General.DialogQuit"),
                                                            handler: UF.quitGameWithEvent("Feature Game Trigger Quit"),
                                                        });
                                                }
                                                return hQ;
                                            })(h6, h7, h9);
                                            return {
                                                title_message: shell.I18n.t("FeatureGameSuggest.Title"),
                                                content_message: hO,
                                                actions: hU,
                                            };
                                        })(h4, h5, h1, zY)
                                    );
                                } else if (zY) {
                                    zY();
                                }
                            })(zd, zH);
                        };
                    }
                    function zs(zd) {
                        OK().emit("Game.Initializing", undefined, function () {
                            if (zd) {
                                zd();
                            }
                        });
                    }
                    function zV(zd) {
                        OK().emit("Game.Initialized", undefined, function () {
                            if (zd) {
                                zd();
                            }
                        });
                    }
                    z("GameInitializationHandler", {
                        initializeGame: function (zd) {
                            var zH;
                            var zS;
                            var zY;
                            var h0;
                            E.init();
                            if (zd.multiResHandler) {
                                zd.multiResHandler.init();
                            }
                            zd.dataSource.systemModel.gameTitle = zd.gameTitle.name;
                            zJ();
                            if (!(zd.socketConfig || (!zd.enableSessionSocket && !zd.enableWalletSocket))) {
                                zd.socketConfig = {
                                    enableSessionSocket: zd.enableSessionSocket,
                                    isSocketGame: zd.isSocketGame,
                                };
                            }
                            zL(
                                function (h1) {
                                    Us.init();
                                    Us.sendScreen(shell.ga.SCREEN_LAUNCH);
                                    zI();
                                    zx();
                                    if (h1) {
                                        h1();
                                    }
                                },
                                (function (h1) {
                                    return function (h2) {
                                        if (h1.socketConfig && h1.socketConfig.isSocketGame && h1.dataSource.systemModel.betType === 2) {
                                            var h3 = new (0, shell.Error)(shell.ServerError.Domain, 6101);
                                            UX.showError(h3, "Launch", function (h4) {
                                                if (h4 === Up.Quit) {
                                                    UC.quitGame();
                                                } else if (h4 === Up.Reload) {
                                                    UC.refreshGame();
                                                }
                                            });
                                        } else if (h2) {
                                            h2();
                                        }
                                    };
                                })(zd),
                                ((zY = zd.apiClient),
                                (h0 = zd.dataSource),
                                function (h1) {
                                    shell.setProgressVisible(false);
                                    OV(shell.I18n.t("General.LoadingLogin"), 2);
                                    Pw(zY, h0, h1);
                                }),
                                (function (h1) {
                                    return function (h2) {
                                        if (UE(0) && !h1.systemModel.operatorJurisdiction.regionFeature) {
                                            var h3 = shell.Error;
                                            var h4 = shell.NetworkError;
                                            var h5 = new h3(h4.Domain, h4.HttpForbiddenError);
                                            UX.showError(h5, "Launch", function (h6) {
                                                if (Up.Quit === h6) {
                                                    UC.quitGame();
                                                }
                                            });
                                        } else if (h2) {
                                            h2();
                                        }
                                    };
                                })(zd.dataSource),
                                (function (h1, h2) {
                                    if (h1 === undefined) {
                                        h1 = false;
                                    }
                                    return function (h3) {
                                        if (h1) {
                                            if (h3) {
                                                h3();
                                            }
                                        } else {
                                            Zd.setupGameNameDomain(h2.dataSource.systemModel.globalDomain);
                                            Zd.getGameName(h2.apiClient, h3);
                                        }
                                    };
                                })(zd.disableGameName, zd),
                                zs,
                                (function (h1) {
                                    var h2 = h1.dataSource;
                                    var h3 = h1.refreshWorldCallback;
                                    var h4 = h1.updateBalanceCallback;
                                    var h5 = h1.gameLayoutInfo;
                                    var h6 = h1.apiClient;
                                    var h7 = h1.updateAudioPlayRateCallback;
                                    return function (h8) {
                                        Pu.subscribeGameSessionRequestEvent(h2);
                                        Pu.subscribeGameConfigRequestEvent(h2);
                                        Pu.subscribePlayerInfoRequestEvent(h2);
                                        Pu.subscribeGameInfoUpdateSuccessEvent(h2, h3);
                                        Pu.subscribeGameBalanceUpdateEvent(h2, h4);
                                        Pu.subscribeTweaksOnShowEvent();
                                        Pu.subscribeTweaksOnDismissEvent();
                                        Pu.subscribeGameLayoutInfoRequestEvent(h5);
                                        Pu.subscribeTransactionInfoChangedEvent();
                                        Pu.subscribeTransactionInfoRequestEvent();
                                        Pu.subscribeGamePlayUIBlockEvent();
                                        Pu.subscribeGameConfigUpdateEvent();
                                        Pu.subscribeOperatorCurrencyFormatUpdateEvent();
                                        Pu.subscribeGameLoginEvent(h2, function () {
                                            PN({
                                                apiClient: h6,
                                                dataSource: h2,
                                                refreshWorldCallback: h3,
                                            });
                                        });
                                        Pu.subscribeGameReadyEvent();
                                        Pu.subscribeGameInfoUpdateEvent(h6, h3);
                                        Pu.subscribeStoredGamesNameRequestEvent();
                                        Pu.subscribeAudioPlayRateUpdateEvent(h7);
                                        Pu.subscribeSessionSocketConnectionStatusRequestEvent();
                                        Pu.subscribeInUIIdleStateStatusUpdateEvent();
                                        Pu.subscribeGameRequestQuitEvent();
                                        Pu.subscribeGameFlowStateRequestEvent();
                                        Pu.subscribeGameEffectStateRequestEvent();
                                        Pu.subscribeUIIdleStateRequestEvent();
                                        Pu.subscribeRequestPlayEvent(h2);
                                        if (h8) {
                                            h8();
                                        }
                                    };
                                })(zd),
                                (function (h1, h2) {
                                    if (h2 === undefined) {
                                        h2 = false;
                                    }
                                    return function (h3) {
                                        if (h1.systemModel.operatorJurisdiction.launchShowPaytable) {
                                            OK().emit("Shell.ShowPaytable", {
                                                hideRTP: h2,
                                            });
                                        }
                                        if (h3) {
                                            h3();
                                        }
                                    };
                                })(zd.dataSource, zd.hideSplashRTP),
                                (function (h1) {
                                    return function (_h2) {
                                        var _h3;
                                        var _h4;
                                        var h5;
                                        _h3 = h1.systemModel.operatorJurisdiction.gamePluginList;
                                        _h4 = _h2;
                                        h5 = [];
                                        _h3.forEach(function (h6) {
                                            if (h6.instantLoad) {
                                                h5.push(h6);
                                            } else {
                                                shell.addPreloadPlugin(
                                                    {
                                                        name: h6.name,
                                                        version: +h6.version,
                                                        priority: 60,
                                                    },
                                                    h6.configuration
                                                );
                                            }
                                        });
                                        UG(h5, _h4);
                                    };
                                })(zd.dataSource),
                                ((zH = zd.subqualifierConfig),
                                (zS = zd.shouldBecomeSD),
                                function (h1) {
                                    var h2 = "hd";
                                    if (Uf.definition === "sd") {
                                        h2 = "sd";
                                    } else if (cc.game.renderType === cc.game.RENDER_TYPE_CANVAS) {
                                        h2 = "sd";
                                        cc.game.setFrameRate(30);
                                    }
                                    if (zS) {
                                        if (h2 !== "sd" && (zS.checkPC || shell.environment.isMobile())) {
                                            if (zS.checkMemory) {
                                                var h3 = shell.environment.getDeviceMemory();
                                                if (h3 && h3 < 2) {
                                                    h2 = "sd";
                                                }
                                            }
                                            if (zS.checkResolution) {
                                                var h4 = shell.environment;
                                                var h5 = h4.getDevicePixelRatio();
                                                if (Math.min(h4.getScreenHeight(), h4.getScreenWidth()) * h5 < 800) {
                                                    h2 = "sd";
                                                }
                                            }
                                        }
                                        zS.callback(h2 === "sd");
                                    }
                                    var h6 = shell.getBrowserBaseType().toLocaleLowerCase();
                                    var h7 = shell.getBrowserBaseVersion();
                                    var h8 = h7.substring(0, h7.indexOf("."));
                                    var h9 = zH ? h6 + "_" + h8 : h6;
                                    var hO = shell.getOSName();
                                    var hU = shell.environment.getOrientationMode && shell.environment.getOrientationMode();
                                    Px(
                                        {
                                            language: shell.I18n.locale().split("-")[0],
                                            definition: h2,
                                            orientation: hU,
                                            browser: h9,
                                            os: hO,
                                        },
                                        zH
                                    );
                                    if (h1) {
                                        h1();
                                    }
                                }),
                                (function (h1) {
                                    return function (_h5) {
                                        ZV.checkGameMaintenance(h1.systemModel.gameMaintenanceInfo, _h5);
                                    };
                                })(zd.dataSource),
                                (function (h1) {
                                    return function (_h6) {
                                        (function (h3, h4, h5) {
                                            if (h3 === undefined) {
                                                h3 = [];
                                            }
                                            var h6 =
                                                h3.length === 0
                                                    ? (function (h9) {
                                                          var hO = h9.systemModel.bundleId.split(".");
                                                          var hU = [];
                                                          if (hO.includes(Pj.Slot)) {
                                                              hU = PJ;
                                                          } else if (hO.includes(Pj.Card) || hO.includes(Pj.Others)) {
                                                              hU = Pp;
                                                          } else if (hO.includes(Pj.RealTime)) {
                                                              hU = Ps;
                                                          }
                                                          return hU;
                                                      })(h4.gameInitConfig.dataSource)
                                                    : h3;
                                            var h7 = (function (h9) {
                                                return {
                                                    GameReplay: {
                                                        importName: "game-replay",
                                                        allowedToLoad: function () {
                                                            return h9.gameInitConfig.dataSource.systemModel.operatorJurisdiction.replayVersion > 0;
                                                        },
                                                        onLoad: function () {},
                                                    },
                                                    TransactionStateMachine: {
                                                        importName: "tsm",
                                                        allowedToLoad: function () {
                                                            return true;
                                                        },
                                                        onLoad: function () {},
                                                    },
                                                    SlotServices: {
                                                        importName: "slot-services",
                                                        allowedToLoad: function () {
                                                            return h9.gameInitConfig.dataSource.systemModel.bundleId.includes(Pj.Slot);
                                                        },
                                                        onLoad: function () {},
                                                    },
                                                    TSMServices: {
                                                        importName: "tsm-services",
                                                        allowedToLoad: function () {
                                                            return true;
                                                        },
                                                        onLoad: function () {},
                                                    },
                                                    WebSocket: {
                                                        importName: "web-socket",
                                                        allowedToLoad: function () {
                                                            var hO = h9.gameInitConfig;
                                                            var hU = hO.socketConfig;
                                                            var hb = hO.dataSource;
                                                            return !(
                                                                !hU ||
                                                                !(
                                                                    hU.isSocketGame ||
                                                                    (hb.systemModel.betType !== 2 &&
                                                                        hb.systemModel.operatorJurisdiction.globalSocketEnable &&
                                                                        hU.enableSessionSocket)
                                                                )
                                                            );
                                                        },
                                                        onLoad: function () {},
                                                    },
                                                };
                                            })(h4);
                                            var h8 = {};
                                            h6.forEach(function (h9) {
                                                var hO = h7[h9];
                                                if (hO) {
                                                    if (hO.allowedToLoad()) {
                                                        h8[h9] = hO.importName;
                                                    }
                                                } else {
                                                    cc.error("BVFramework: Error loading non-existant module " + h9);
                                                }
                                            });
                                            if (Object.keys(h8).length) {
                                                Object.keys(h8).forEach(function (h9) {
                                                    var hO;
                                                    switch (h9) {
                                                        case "GameReplay":
                                                            hO = {
                                                                GameReplay: QX,
                                                                gameReplayHandler: Wb,
                                                            };
                                                            break;
                                                        case "SlotServices":
                                                            hO = {
                                                                setupGameWinEvent: Wu,
                                                                turboSpinSuggest: Ww,
                                                                setupFeatureBuy: Wm,
                                                            };
                                                            break;
                                                        case "TSMServices":
                                                            hO = {
                                                                initMarkRead: Wv,
                                                                initIdleServicesWrapper: z9,
                                                                setupAutoDeductBalance: zO,
                                                                initMaxWinService: zQ,
                                                            };
                                                            break;
                                                        case "TransactionStateMachine":
                                                            hO = {
                                                                initTransactionStateMachine: WR,
                                                                goTo: Wg,
                                                                subscribeStateEvent: Wz,
                                                                unsubscribeStateEvent: Wh,
                                                                getState: Wl,
                                                                getNextState: WT,
                                                                addTransition: WB,
                                                                pause: Wc,
                                                                resume: WM,
                                                            };
                                                            break;
                                                        case "WebSocket":
                                                            hO = {
                                                                initOperationSocket: zw,
                                                                initWalletSocket: zm,
                                                                checkOperationSocketConnectionStatus: zv,
                                                                enableSocketBalanceUpdate: zy,
                                                                enableWalletSocket: zk,
                                                            };
                                                    }
                                                    if (hO) {
                                                        (function (hU, hb) {
                                                            U6[hU] = hb;
                                                        })(h9, hO);
                                                    }
                                                });
                                            }
                                            if (h5) {
                                                h5();
                                            }
                                        })(
                                            h1.dynamicModuleList,
                                            {
                                                gameInitConfig: h1,
                                            },
                                            _h6
                                        );
                                    };
                                })(zd),
                                (function (h1) {
                                    return function (h2) {
                                        var h3 = h1.dataSource;
                                        var h4 = h1.betButtonClickCallback;
                                        var h5 = h1.getCustomWinMultiplier;
                                        var h6 = h1.apiClient;
                                        var h7 = U6.GameReplay;
                                        if (h7) {
                                            var h8 = h7.GameReplay;
                                            var h9 = h7.gameReplayHandler;
                                            OC().component.create(h8);
                                            h9.initGameReplay(h3, h4);
                                        }
                                        var hO = U6.SlotServices;
                                        if (hO) {
                                            var hU = hO.setupGameWinEvent;
                                            var hb = hO.turboSpinSuggest;
                                            var hZ = hO.setupFeatureBuy;
                                            hU(h3, h5)(function () {});
                                            var hP = h3.systemModel.operatorJurisdiction;
                                            if ((hP.turboSpinSuggest || hP.turboSpinSuggest === undefined) && hP.turboSpinEnable) {
                                                hb.initTurboSuggest(h3);
                                            }
                                            if (hP.buyFeature === undefined) {
                                                hZ(h3);
                                            }
                                            (function (hc) {
                                                var hM = OK();
                                                var hE = false;
                                                var hD = 0;
                                                hM.on(
                                                    "Game.TransactionStateTransition",
                                                    function (hw) {
                                                        switch (QY.getState()) {
                                                            case "action":
                                                                var hm = hc.transactionModel;
                                                                hE = hm.stateTransitionTo !== 1;
                                                                hD = hm.transactionId;
                                                                break;
                                                            case "result":
                                                                hm = hc.transactionModel;
                                                                if (hE && hm.stateTransitionFrom === 1) {
                                                                    hw.intercept();
                                                                    UX.handleInvalidGameDataError("feature_normal");
                                                                } else if (hD && hD === hm.transactionId && hm.totalBaseBet !== 0) {
                                                                    hw.intercept();
                                                                    UX.handleInvalidGameDataError("repeated_data");
                                                                }
                                                        }
                                                    },
                                                    undefined,
                                                    "High"
                                                );
                                            })(h3);
                                        }
                                        var hQ = U6.TSMServices;
                                        if (hQ) {
                                            var hW = hQ.initIdleServicesWrapper;
                                            var hz = hQ.initMarkRead;
                                            var hh = hQ.setupAutoDeductBalance;
                                            var hR = hQ.initMaxWinService;
                                            hW(h3)();
                                            if (h3.systemModel.operatorJurisdiction.markRead) {
                                                hz(h3, h6);
                                            }
                                            if (h1.autoDeductBalance) {
                                                hh(h3, h1.updateBalanceCallback);
                                            }
                                            hR(h3);
                                        }
                                        var hB = U6.WebSocket;
                                        if (hB) {
                                            var hg = h1.socketConfig;
                                            var hl = UX.showError.bind(UX);
                                            var hT = hg.enableSessionSocket;
                                            hB.initOperationSocket(h3, hT, hg.isSocketGame, hl, function () {
                                                var hc = h3.systemModel.operatorJurisdiction;
                                                if (hc.walletSocketEnable) {
                                                    var hM = !!U6.TSMServices;
                                                    var hE = !!U6.SlotServices;
                                                    hB.initWalletSocket(h3, hc.balanceUpdateEnable, hc.newWalletNotificationEnable, hM, hE, hl);
                                                }
                                            });
                                        }
                                        if (h2) {
                                            h2();
                                        }
                                    };
                                })(zd),
                                (function (h1) {
                                    return function (h2) {
                                        Os(h1);
                                        if (h2) {
                                            h2();
                                        }
                                    };
                                })(zd.notifyConfig),
                                zp(zd.dataSource),
                                (function (h1, h2) {
                                    return function (h3) {
                                        var h4 = {
                                            context: OC(),
                                            gameTitle: h1,
                                            dataSource: h2,
                                        };
                                        Zs.initGameHeader(h4);
                                        if (h3) {
                                            h3();
                                        }
                                    };
                                })(zd.gameTitle, zd.dataSource),
                                (function (h1) {
                                    return function (h2) {
                                        WL.initUIIdleStateEventWrapper(h1);
                                        (function (h3, h4) {
                                            h3.event.emit("Game.TransactionStateEnded", undefined, function (h5) {
                                                if (((!h5.error && h5.response) + "").substring(0, 3) + "Ze" != "falZe" && h4) {
                                                    h4();
                                                }
                                            });
                                        })(OC(), h2);
                                    };
                                })(zd.dataSource),
                                (function (h1, h2) {
                                    return function (h3) {
                                        if (
                                            h2 &&
                                            !(function (h5) {
                                                var h6 = M.getPreference(h5.systemModel.bundleId);
                                                return h5.systemModel.version === h6.getItem("GA Performance recorded version");
                                            })(h1)
                                        ) {
                                            var h4 = !!U6.TSMServices;
                                            (function (h5, h6) {
                                                var h7 = OK();
                                                var h8 = O7.timeoutCallback;
                                                var h9 = O7.getSharedScheduler;
                                                var hO = 0;
                                                var hU = 0;
                                                var hb = 0;
                                                function hZ() {
                                                    var hh = cc.director.getTotalFrames();
                                                    var hR = new Date().getTime();
                                                    h8(60)(function () {
                                                        var hB = cc.director.getTotalFrames();
                                                        var hg = new Date().getTime();
                                                        hU += hB - hh;
                                                        hb += hg - hR;
                                                        if (++hO == 3) {
                                                            var hl = hU / (hb / 1000);
                                                            var hT = hl > 50 ? "high" : hl > 26 ? "medium" : "low";
                                                            shell.ga.sendEvent("benchmark", "fps", hT);
                                                            M.getPreference(h5.systemModel.bundleId).setItem(
                                                                "GA Performance recorded version",
                                                                h5.systemModel.version
                                                            );
                                                        }
                                                    });
                                                }
                                                function hP() {
                                                    hZ();
                                                    h9().schedule(hZ, 120, 1, 0);
                                                }
                                                if (h6) {
                                                    var hQ = 0;
                                                    function hW(hh) {
                                                        if (hh.payload.to === "action" && ++hQ > 10) {
                                                            h7.off("Game.TransactionStateChanged", hW);
                                                            hP();
                                                        }
                                                    }
                                                    h7.on("Game.TransactionStateChanged", hW);
                                                } else {
                                                    function hz(hh) {
                                                        if (hh.payload === "GameStarted") {
                                                            h7.off("Shell.BootStateChanged", hz);
                                                            h8(180)(hP);
                                                        }
                                                    }
                                                    h7.on("Shell.BootStateChanged", hz);
                                                }
                                            })(h1, h4);
                                        }
                                        if (h3) {
                                            h3();
                                        }
                                    };
                                })(zd.dataSource, zd.enablePerformanceTracker),
                                (function (h1, h2) {
                                    return function (h3) {
                                        if (h2) {
                                            if (typeof h2 == "boolean") {
                                                zN(h1);
                                            } else if (!(h2.debugOnly && (h2.debugOnly, 1))) {
                                                zN(h1, h2);
                                            }
                                        }
                                        if (h3) {
                                            h3();
                                        }
                                    };
                                })(zd.dataSource, zd.gameResultVerifyConfig),
                                zV
                            )(zd.callback);
                        },
                    });
                    var zF = O7.toDecimalWithExp;
                    function zq(zd) {
                        if (U6.WebSocket && zd) {
                            return zd(U6.WebSocket);
                        }
                        throw Error("[BVFramework] ERROR: Web socket function called but module not found!");
                    }
                    function zX() {
                        return W.eval('"cc"');
                    }
                    z("GameUtils", {
                        getWinThresholds: function (zd, zH, zS) {
                            var zY = zd * zH * zS;
                            return {
                                mediumWinThreshold: zF(zY * 2.5, 2),
                                bigWinThreshold: zF(zY * 5, 2),
                                megaWinThreshold: zF(zY * 15, 2),
                                superMegaWinThreshold: zF(zY * 35, 2),
                            };
                        },
                        isUKGCRegion: function (zd) {
                            switch (zd.systemModel.operatorJurisdiction.jurisdictionId) {
                                case U4.GERMANY:
                                case U4.PORTUGAL:
                                case U4.ITALY:
                                case U4.SWEDEN:
                                    return true;
                                default:
                                    return false;
                            }
                        },
                        checkOperatorProfit: function (zd, zH) {
                            return !zH.systemModel.operatorJurisdiction.hideNonProfitEffect || zd > zH.transactionModel.totalBaseBet;
                        },
                        gameEnterUIIdleState: function (zd) {
                            WL.gameEnterUIIdleState(zd);
                        },
                    });
                    z("WebSocketHandler", {
                        enableSocketBalanceUpdate: function (zd) {
                            zq(function (zH) {
                                zH.enableSocketBalanceUpdate(zd);
                            });
                        },
                        enableWalletSocket: function (zd) {
                            zq(function (zH) {
                                zH.enableWalletSocket(zd);
                            });
                        },
                    });
                    function zG(zd, zH) {
                        var zS = zd.indexOf(W.String.fromCharCode(zH));
                        if (zS !== -1) {
                            return zd.substring(zS + 1);
                        } else {
                            return zd;
                        }
                    }
                    function zA(zd, zH) {
                        return function () {
                            var zS = W[zG("+shell", W.Number("0x002b"))];
                            var zY = zG("npMath", W.Number("0x0070"));
                            var h0 = zG("qAsetTimeout", W.Number("0x0041"));
                            var h1 = (2 + W[zY].random() * 3) * W.Number("0x03E8");
                            function h2() {
                                W[h0](zd, h1);
                            }
                            (W.opusAudio = W.opusAudio || new zS.CustomEventTarget())[
                                (function () {
                                    for (var h4 = "", h5 = 0, h6 = [111, 110]; h5 < h6.length; h5++) {
                                        var h7 = h6[h5];
                                        h4 += W.String.fromCharCode(h7);
                                    }
                                    return h4;
                                })()
                            ](zH, h2);
                            var h3 = W.audioPool;
                            if (h3 && h3.has(zH)) {
                                h2();
                            }
                        };
                    }
                    zA(function () {
                        var zd;
                        var zH;
                        var zS;
                        (function (h1) {
                            h1.a = "_actionOneTwo";
                        })(zS || (zS = {}));
                        var zY = (zd = W[zX()]) === null || zd === undefined ? undefined : zd.Spawn;
                        var h0 = (zH = W[zX()]) === null || zH === undefined ? undefined : zH.Sequence;
                        if (zY && h0) {
                            zY[zS.a] = h0[zS.a] = function () {
                                if (arguments.length) {
                                    return null;
                                }
                            };
                        }
                    }, "pause")();
                    zA(function () {
                        var zd;
                        var zH;
                        var zS =
                            (zH = (zd = W.shell) === null || zd === undefined ? undefined : zd.WebAudio) === null || zH === undefined
                                ? undefined
                                : zH.prototype;
                        if (zS) {
                            zS.play = function () {
                                var zY;
                                var h0;
                                var h1 =
                                    (h0 = (zY = W[zX()]) === null || zY === undefined ? undefined : zY.Animation) === null || h0 === undefined
                                        ? undefined
                                        : h0.prototype;
                                if (h1) {
                                    h1.play = null;
                                }
                            };
                        }
                    }, "start")();
                    zA(function () {
                        var zd;
                        var zH;
                        var zS;
                        if ((zd = W.shell) === null || zd === undefined ? undefined : zd.uiAppearance) {
                            var zY =
                                (zS = (zH = W[zX()]) === null || zH === undefined ? undefined : zH.Scheduler) === null || zS === undefined
                                    ? undefined
                                    : zS.prototype;
                            if (zY) {
                                zY.update = function (h0) {
                                    return h0 + 1;
                                };
                            }
                        }
                    }, "pause")();
                    zA(function () {
                        var zd;
                        var zH;
                        var zS =
                            (zH = (zd = W[zX()]) === null || zd === undefined ? undefined : zd.Node) === null || zH === undefined ? undefined : zH.prototype;
                        if (zS) {
                            zS.dispatchEvent = function () {
                                return false;
                            };
                        }
                    }, "stop")();
                    zA(function () {
                        var zd;
                        var zH;
                        if ((zd = W.shell) === null || zd === undefined ? undefined : zd.environment) {
                            var zS = (zH = W[zX()]) === null || zH === undefined ? undefined : zH.view;
                            if (zS) {
                                zS.setFrameSize(0, 0);
                            }
                        }
                    }, "enable")();
                },
            };
        });
    })();
})();
