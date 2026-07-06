(function () {
    "use strict";

    (function () {
        var d;
        (function (f) {
            f.bv_t = "window";
            f.bv_e = "self";
        })(d || (d = {}));
        var X = (0, eval)("this");
        X[d.bv_e];
        var J = X[d.bv_t];
        System.register(["ba588d9dad", "99212c6ec4", "3d9bb7755c", "6d5cafebdb", "react", "react-dom"], function (W) {
            "use strict";

            var R;
            var S;
            var H;
            var E;
            var C;
            var D;
            var j;
            var L;
            var m;
            var v;
            var Q;
            var B;
            return {
                setters: [
                    null,
                    function (I) {
                        R = I.ResRC;
                        S = I.Utils;
                        H = I.Deserialiser;
                        E = I.XHR;
                        C = I.Preference;
                        D = I.CanvasResizeBroadcaster;
                    },
                    function (I) {
                        j = I.LoginMethod;
                        L = I.LoginGameStatus;
                    },
                    null,
                    function (I) {
                        m = I.default;
                        v = I.useState;
                        Q = I.useEffect;
                    },
                    function (I) {
                        B = I.default;
                    },
                ],
                execute: function () {
                    W("getGameContext", uP);
                    var u0 = J.__extends;
                    var u1 = J.__assign;
                    var u2 = J.__decorate;
                    var u3 = J.__awaiter;
                    var u4 = J.__generator;
                    var u5 = J.__spreadArray;
                    function u6(W1, W2) {
                        var W3 = {};
                        for (var W4 in W2) {
                            if (W1.hasOwnProperty(W4)) {
                                W3[W1[W4]] = W2[W4];
                            } else {
                                W3[W4] = W2[W4];
                            }
                        }
                        return W3;
                    }
                    u6(
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
                    var u7 = u6(
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
                        S
                    );
                    function u8(W1) {
                        return Object.prototype.toString.call(W1) === "[object Object]";
                    }
                    function u9(W1) {
                        var W2 = undefined;
                        if (u8(W1) && W1.hasOwnProperty("err") && W1.hasOwnProperty("dt")) {
                            var W3 = W1.err;
                            if (W3) {
                                W2 = (function (W4) {
                                    var W5;
                                    if (!u8(W4)) {
                                        W4 = {};
                                    }
                                    if (
                                        !(
                                            W4.hasOwnProperty("cd") &&
                                            (typeof (W5 = W4.cd) == "number" || (typeof W5 == "string" && W5 !== "" && !/\s/.test(W5) && !isNaN(+W5)))
                                        )
                                    ) {
                                        W4.cd = 6501;
                                    }
                                    return new (0, shell.Error)(shell.ServerError.Domain, W4.cd, W4.tid);
                                })(W3);
                            }
                        } else {
                            W2 = new (0, shell.Error)(shell.ServerError.Domain, 6501);
                        }
                        return W2;
                    }
                    function ux(W1) {
                        return function (W2, W3) {
                            W2 = W2 || u9(W3);
                            W1(W2, W3);
                        };
                    }
                    function uG(W1, W2, W3, W4) {
                        var W5 = W1.request("POST", W2, W3, ux(W4));
                        return function () {
                            return W5.abort();
                        };
                    }
                    W(
                        "XHRHelper",
                        Object.freeze({
                            __proto__: null,
                            extractError: u9,
                            postRequest: uG,
                            responseCallbackWrapper: ux,
                        })
                    );
                    var uA;
                    var ud = (function (W1) {
                        function W2() {
                            var W3 = (W1 !== null && W1.apply(this, arguments)) || this;
                            W3.transformResponse = function (W4) {
                                return W4;
                            };
                            return W3;
                        }
                        u0(W2, W1);
                        return W2;
                    })(H);
                    var uX = W(
                        "XHRHandler",
                        (function () {
                            function W1() {
                                this.bv_n = undefined;
                                this.bv_i = undefined;
                                this.bv_r = undefined;
                                this.bv_a = new ud("json");
                                this.bv_o = new E(undefined, this.bv_a);
                            }
                            W1.prototype.setAPIUrls = function (W2) {
                                this.bv_n = W2.getFullGameEngineUrl();
                                this.bv_i = W2.getFullServiceEngineUrl();
                                this.bv_r = W2.getFullServiceEngineUrlSD();
                            };
                            W1.prototype.request = function (W2, W3, W4) {
                                return uG(this.bv_o, this.bv_n + W2, W3, W4);
                            };
                            W1.prototype.serviceRequest = function (W2, W3, W4) {
                                return uG(this.bv_o, this.bv_i + W2, W3, W4);
                            };
                            W1.prototype.serviceSDRequest = function (W2, W3, W4) {
                                return uG(this.bv_o, this.bv_r + W2, W3, W4);
                            };
                            W1.prototype.operatorApiRequest = function () {
                                return u7.emptyFunc;
                            };
                            return W1;
                        })()
                    );
                    (function (W1) {
                        W1[(W1.Low = 250)] = "Low";
                        W1[(W1.Medium = 500)] = "Medium";
                        W1[(W1.High = 750)] = "High";
                    })(uA || (uA = {}));
                    var uJ;
                    var uf;
                    var uW = {
                        Low: uA.Low,
                        Medium: uA.Medium,
                        High: uA.High,
                    };
                    function uR(W1) {
                        return function () {
                            return W1.reduce(function (W2, W3) {
                                return W2.then(function (W4) {
                                    if (W4) {
                                        return W3();
                                    } else {
                                        return W4;
                                    }
                                });
                            }, J.Promise.resolve(1)).catch(function () {
                                return 0;
                            });
                        };
                    }
                    function uS(W1, W2) {
                        if (W1 < 0) {
                            return W2.substring(J.Number("0x0"), W2.length + W1);
                        } else {
                            return W2.substring(W1);
                        }
                    }
                    function uH(W1) {
                        return uS(1, W1);
                    }
                    function uE(W1) {
                        return uS(2, W1);
                    }
                    function uC(W1, W2, W3) {
                        return !(!W1 || !W2) && (W3 ? W1.substring(J.Number("0x0"), W2.length) === W2 : W1 === W2);
                    }
                    function uD() {
                        var W1 = "subtle";
                        var W2 = uv(J, "crypto");
                        return !(!W2 || uL(W2, W1) || !uQ(W2, W1));
                    }
                    function uj(W1) {
                        return (W1 + "").indexOf("[native code]") !== -1;
                    }
                    function uL(W1, W2) {
                        return J.Object.prototype.hasOwnProperty.call(W1, W2);
                    }
                    function um(W1, W2) {
                        if (W1) {
                            if (W1.get) {
                                if (uj(W1.get)) {
                                    return W1.get.apply(W2);
                                } else {
                                    return undefined;
                                }
                            } else {
                                return W1.value;
                            }
                        } else {
                            return W1;
                        }
                    }
                    function uv(W1, W2) {
                        try {
                            return um(J.Object.getOwnPropertyDescriptor(W1, W2), W1);
                        } catch (W3) {}
                    }
                    function uQ(W1, W2) {
                        try {
                            var W3 = J.Object.getPrototypeOf(W1);
                            return um(J.Object.getOwnPropertyDescriptor(W3, W2), W1);
                        } catch (W4) {}
                    }
                    function uB(W1, W2) {
                        if (W2 === undefined) {
                            W2 = J;
                        }
                        return uF(W1)
                            .split(".")
                            .reduce(function (W3, W4) {
                                if (W3 != null) {
                                    return uv(W3, W4);
                                } else {
                                    return W3;
                                }
                            }, W2);
                    }
                    function uI() {
                        return (
                            [" Math.random", " parseInt", " setTimeout ", " Date ", " Date.now"].find(function (W1) {
                                return !uj(uB(W1));
                            }) == null
                        );
                    }
                    function uh(W1) {
                        for (
                            var W2 = [
                                    " SamsungBrowser",
                                    "UCBrowser",
                                    " Quark",
                                    "QQBrowser",
                                    " OppoBrowser",
                                    " VivoBrowser",
                                    " 360(SE|EE) ",
                                    " b(?:ai)?d(?:u)?browser ",
                                ],
                                W3 = [],
                                W4 = 0;
                            W1;

                        ) {
                            if (W1 & 1 && W4 < W2.length) {
                                W3.push(uF(W2[W4]));
                            }
                            W1 >>= 1;
                            W4++;
                        }
                        if (W3.length) {
                            var W5 = new J.RegExp(W3.join(uF(" | ")), uF(" i "));
                            return function () {
                                return W5.test(J.navigator.userAgent);
                            };
                        }
                        return function () {
                            return false;
                        };
                    }
                    function uq(W1) {
                        var W2 = ["deDate", "elocation", "dohost", "ehostname", "deMath", "eparseInt", "dneval"][W1];
                        return W2.substring(J.Number("0xf") - J.Number("0x0" + W2[0]));
                    }
                    function uM() {
                        return uk(1, J[uq(4)].random() * 20);
                    }
                    function uF(W1) {
                        return W1.replace(/ /g, "");
                    }
                    function uk(W1, W2) {
                        return W1 === J[uq(4)].max(W1, W2);
                    }
                    function uK(W1) {
                        var W2;
                        var W3;
                        (function (Wx) {
                            Wx.bv_u = "name";
                            Wx.bv_c = "hash";
                        })(W3 || (W3 = {}));
                        var W4 = "HMAC";
                        var W5 = "SHA-256";
                        var W6 = "sign";
                        var W7 = (W2 = J.crypto) === null || W2 === undefined ? undefined : W2.subtle;
                        var W8 = new J.TextEncoder();
                        var W9 = (function (Wx) {
                            var WG = {
                                [W3.bv_u]: W4,
                                [W3.bv_c]: W5,
                            };
                            var WA = W7 == null ? undefined : W7.importKey("raw", W8.encode(Wx).buffer, WG, false, [W6]);
                            return J.Promise.resolve(WA);
                        })(W1);
                        function _Wu(Wx) {
                            return u3(this, undefined, undefined, function () {
                                var WG;
                                var WA;
                                var Wd;
                                return u4(this, function (WX) {
                                    switch (WX.label) {
                                        case 0:
                                            return [4, W9];
                                        case 1:
                                            if ((WG = WX.sent())) {
                                                WA = W8.encode(Wx).buffer;
                                                (Wd = {})[W3.bv_u] = W4;
                                                Wd[W3.bv_c] = W5;
                                                return [4, W7[W6](Wd, WG, WA)];
                                            } else {
                                                return [2, ""];
                                            }
                                        case 2:
                                            return [
                                                2,
                                                ((WJ = WX.sent()),
                                                new J.Uint8Array(WJ).reduce(function (Wf, WW) {
                                                    return Wf + J.Number(WW).toString(16).padStart(2, "0");
                                                }, "")),
                                            ];
                                    }
                                    var WJ;
                                });
                            });
                        }
                        return function (Wx, WG, WA) {
                            if (WA === undefined) {
                                WA = true;
                            }
                            return u3(this, undefined, undefined, function () {
                                return u4(this, function (Wd) {
                                    switch (Wd.label) {
                                        case 0:
                                            if (WG && Wx) {
                                                return [4, _Wu(Wx)];
                                            } else {
                                                return [2, false];
                                            }
                                        case 1:
                                            return [2, uC(Wd.sent(), WG, WA)];
                                    }
                                });
                            });
                        };
                    }
                    function uP() {
                        return uJ;
                    }
                    function uU() {
                        return uf;
                    }
                    W("BVFrameworkEnum", {
                        EN_GAME_LAYER_Z_INDEX_LOW: uA.Low,
                        EN_GAME_LAYER_Z_INDEX_MEDIUM: uA.Medium,
                        EN_GAME_LAYER_Z_INDEX_HIGH: uA.High,
                    });
                    W(
                        "default",
                        (function (W1) {
                            function W2() {
                                return (W1 !== null && W1.apply(this, arguments)) || this;
                            }
                            u0(W2, W1);
                            W2.prototype.onCreate = function () {
                                uf = this.context;
                                var W3 = shell.getGameContext();
                                var W4 = W3.event;
                                W3.on = W4.on.bind(W4);
                                W3.off = W4.off.bind(W4);
                                W3.once = W4.once.bind(W4);
                                W3.emit = W4.emit.bind(W4);
                                (uJ = W3).on("Game.RequestLayerType", function (W5) {
                                    var W6 = W5.payload;
                                    if (W6 === "All") {
                                        W5.response = uW;
                                    } else {
                                        var W7 = uA[W6];
                                        if (!W7) {
                                            W7 = uA.Low;
                                        }
                                        W5.response = W7;
                                    }
                                });
                                (function (W5) {
                                    var W6;
                                    W6 = W5;
                                    var W7 = new J.Promise(function (Wx, WG) {
                                        W6.once(
                                            "Login.OnLogin",
                                            function (WA) {
                                                var Wd = WA.payload;
                                                var WX = Wd.err;
                                                var WJ = Wd.res;
                                                if (WX) {
                                                    WG();
                                                } else {
                                                    Wx(WJ.operatorPromotionId);
                                                }
                                            },
                                            undefined
                                        );
                                    });
                                    W7.catch(function () {});
                                    var W8;
                                    var W9 = (function (Wx) {
                                        return new J.Promise(function (WG) {
                                            var WA = false;
                                            var Wd = "Shell.BootStateChanged";
                                            Wx.on(
                                                Wd,
                                                function WX(WJ) {
                                                    if (!WA) {
                                                        if (WJ.payload === "LatePluginLoad") {
                                                            WA = true;
                                                            WG();
                                                            J.Promise.resolve().then(function () {
                                                                return Wx.off(Wd, WX, undefined);
                                                            });
                                                        }
                                                    }
                                                },
                                                undefined
                                            );
                                        });
                                    })(W5);
                                    function Wu(Wx, WG) {
                                        var WA = W9.then(function () {
                                            return (function (Wd) {
                                                return new J.Promise(function (WX, WJ) {
                                                    Wd.emit("Game.RequestSession", undefined, function (Wf) {
                                                        var WW = Wf.response;
                                                        if (WW) {
                                                            var WR = WW.token;
                                                            var WS = WW.sessionId;
                                                            var WH = WW.gameId;
                                                            var WE = WW.operatorToken;
                                                            WX({
                                                                bv_s: WR,
                                                                bv_l: WS,
                                                                bv_f: WH,
                                                                bv_h: WE,
                                                            });
                                                        } else {
                                                            WJ();
                                                        }
                                                    });
                                                });
                                            })(W5);
                                        });
                                        WA.catch(function () {});
                                        J.Promise.all([W7, WA])
                                            .then(
                                                function (Wd) {
                                                    Wd[1].bv_d = Wd[0];
                                                    return (function (WX) {
                                                        return u3(this, undefined, undefined, function () {
                                                            var WJ;
                                                            var Wf;
                                                            var WW;
                                                            return u4(this, function (WR) {
                                                                switch (WR.label) {
                                                                    case 0:
                                                                        WJ = uK(uE("suER3N4z2BqFg9VCYg"));
                                                                        Wf = WX.bv_d;
                                                                        WW = function () {
                                                                            return u3(this, undefined, undefined, function () {
                                                                                var WS;
                                                                                return u4(this, function (WH) {
                                                                                    switch (WH.label) {
                                                                                        case 0:
                                                                                            WS = (function (WE) {
                                                                                                return (
                                                                                                    J[uq(1)][uq(2)] +
                                                                                                    J.String(WE.bv_f) +
                                                                                                    WE.bv_h +
                                                                                                    J.encodeURIComponent(WE.bv_s)
                                                                                                );
                                                                                            })(WX);
                                                                                            return [4, WJ(WS, Wf, true)];
                                                                                        case 1:
                                                                                            if (WH.sent()) {
                                                                                                return [2, true];
                                                                                            } else {
                                                                                                return [2, false];
                                                                                            }
                                                                                    }
                                                                                });
                                                                            });
                                                                        };
                                                                        return [4, WW()];
                                                                    case 1:
                                                                        return [2, WR.sent()];
                                                                }
                                                            });
                                                        });
                                                    })(Wd[1]);
                                                },
                                                function () {
                                                    return J.Promise.resolve(true);
                                                }
                                            )
                                            .then(function (Wd) {
                                                Wx(Wd);
                                            }, WG);
                                    }
                                    W5.on(
                                        "Game.SendApiResponse",
                                        function (Wx) {
                                            Wx.intercept();
                                            if (!W8) {
                                                W8 = (function () {
                                                    return u3(this, undefined, undefined, function () {
                                                        var WG;
                                                        return u4(this, function (WA) {
                                                            switch (WA.label) {
                                                                case 0:
                                                                    (WG = [uI]).push(uD);
                                                                    return [4, uR((WG = WG.concat([uM])))()];
                                                                case 1:
                                                                    if (WA.sent()) {
                                                                        return [2, new J.Promise(Wu)];
                                                                    } else {
                                                                        return [2, true];
                                                                    }
                                                            }
                                                        });
                                                    });
                                                })();
                                            }
                                            W8.then(
                                                function (WG) {
                                                    Wx.response = WG;
                                                    Wx.propagate();
                                                },
                                                function () {
                                                    Wx.response = false;
                                                    Wx.propagate();
                                                }
                                            );
                                        },
                                        undefined
                                    );
                                })(uf.event);
                                this.complete();
                            };
                            return u2([plugin.PluginMainComponent("f72f5b9e6e")], W2);
                        })(plugin.AbstractPluginComponent)
                    );
                    var ug;
                    var ub = false;
                    var uT = 0;
                    (function (W1) {
                        W1[(W1.SLOT = 1)] = "SLOT";
                        W1[(W1.CARD = 2)] = "CARD";
                    })(ug || (ug = {}));
                    var uO;
                    var us = {
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
                    function uZ(W1) {
                        var W2;
                        var W3 = W1.theme;
                        var W4 = W1.backgroundColor;
                        var W5 = W1.titleColor;
                        var W6 = W1.messageColor;
                        var W7 = W1.buttonColor;
                        var W8 = W1.buttonTitleColor;
                        var W9 = W1.buttonFontWeight;
                        var Wu = W1.buttonFontStyle;
                        var Wx = uP();
                        Wx.on("Shell.BootStateChanged", ul);
                        switch (W3) {
                            case ug.SLOT:
                                W2 = "Slot";
                                break;
                            case ug.CARD:
                                W2 = "Card";
                                break;
                            default:
                                throw Error("Notify - invalid theme");
                        }
                        var WG = {};
                        WG = W7.gradient
                            ? {
                                  gradient: W7.gradient,
                              }
                            : {
                                  color: W7,
                              };
                        WG = u1(
                            {
                                fontColor: W8,
                                fontWeight: W9,
                                fontStyle: Wu,
                            },
                            WG
                        );
                        Wx.emit("Alert.UpdateTheme", {
                            theme: W2,
                            style: {
                                backgroundColor: W4,
                                titleColor: W5,
                                contentColor: W6,
                                button: WG,
                            },
                        });
                    }
                    function uY(W1, W2) {
                        if (ub) {
                            uP().emit("Toast.Show", {
                                toastStyle: "Message",
                                message: W1,
                                duration: W2,
                                imageSrc: "",
                                toastPosition: "Bottom",
                            });
                        } else {
                            shell.setProgressMessage(W1);
                        }
                    }
                    function uw(W1) {
                        var W2 = [];
                        var W3 = (function (W4, W5) {
                            var W6 = [];
                            var W7 = 0;
                            if (W4.actions) {
                                W4.actions.forEach(function (W8) {
                                    W6.push({
                                        label: W8.title,
                                        handler: W7,
                                    });
                                    W5.push(W8.handler);
                                    W7++;
                                });
                            }
                            return {
                                title: W4.title_message,
                                content: W4.content_message,
                                actions: W6,
                            };
                        })(W1, W2);
                        uP().emit("Alert.Show", W3, function (W4) {
                            var W5 = W4.response;
                            var W6 = W2[W5];
                            if (W6) {
                                W6();
                            }
                        });
                        return W3;
                    }
                    function ul(W1) {
                        if (W1.payload === "GameStarted") {
                            ub = true;
                            uP().off("Shell.BootStateChanged", ul);
                        }
                    }
                    function uN(W1) {
                        if (uT === 0) {
                            var W2 = false;
                            if (W1) {
                                var W3 = {
                                    backgroundColor: W1.backgroundColor,
                                    iconColor: W1.iconColor,
                                    labelColor: W1.labelColor,
                                };
                                uP().emit("Loading.UpdateTheme", W3);
                                W2 = !(!W1.iconColor && !W1.labelColor);
                            }
                            var W4 = W2
                                ? us
                                : Object.assign(us, {
                                      color: shell.uiAppearance.v("game.theme_color"),
                                  });
                            uP().emit("Loading.Show", W4);
                        }
                        uT++;
                    }
                    function uz() {
                        if (uT !== 0 && --uT == 0) {
                            uP().emit("Loading.Hide");
                        }
                    }
                    W(
                        "Notify",
                        Object.freeze({
                            __proto__: null,
                            get ThemeType() {
                                return ug;
                            },
                            hideFullLoadingPage: uz,
                            initNotify: uZ,
                            showDialog: uw,
                            showFullLoadingPage: uN,
                            showMessage: uY,
                            showNotification: function (W1) {
                                if (ub) {
                                    uP().emit(
                                        "Toast.Show",
                                        {
                                            toastStyle: "Notification",
                                            imageSrc: W1.imageSrc,
                                            message: W1.message,
                                            duration: W1.duration,
                                            toastPosition: "Bottom",
                                        },
                                        W1.eventCallback
                                    );
                                }
                            },
                            showToast: function (W1) {
                                if (ub) {
                                    uP().emit(
                                        "Toast.Show",
                                        {
                                            toastStyle: "Notification",
                                            message: W1.message,
                                            duration: W1.duration,
                                            toastPosition: "Bottom",
                                            imageSrc: "",
                                        },
                                        W1.eventCallback
                                    );
                                }
                            },
                        })
                    );
                    (function (W1) {
                        W1[(W1.NORMAL = 1)] = "NORMAL";
                        W1[(W1.TRIAL = 2)] = "TRIAL";
                        W1[(W1.TOURNAMENT = 3)] = "TOURNAMENT";
                    })(uO || (uO = {}));
                    var uy = u7.timeoutCallback;
                    function uc(W1) {
                        shell.ga.sendTiming(shell.ga.CATEGORY_ACCESS, shell.ga.EVENT_LOGIN, Date.now() - W1);
                    }
                    function uV(W1, W2) {
                        var W3 = uP();
                        var W4 = {
                            category: shell.ga.CATEGORY_ACCESS,
                            domain: W1.domain,
                            code: W1.code,
                            error: "Login Failed",
                            retry: W2 > 0 ? W2 : undefined,
                        };
                        W3.emit("Error.Report", W4);
                    }
                    var up;
                    var x0;
                    var x1;
                    var x2;
                    function x3(W1) {
                        switch (W1.loginMethod) {
                            case j.Web:
                                (function (W2) {
                                    var W3 = Date.now();
                                    var W4 = W2.on_complete;
                                    var W5 = W2.on_error;
                                    var W6 = W2.on_show;
                                    var W7 = W2.on_dismiss;
                                    var W8 = uP();
                                    if (W6) {
                                        W8.once("Login.OnShow", W6);
                                    }
                                    if (W7) {
                                        W8.once("Login.OnDismiss", W7);
                                    }
                                    W8.once("Login.OnLogin", function (W9) {
                                        var Wu = W9.payload;
                                        var Wx = Wu.err;
                                        var WG = Wu.res;
                                        if (Wx) {
                                            uV(Wx, 0);
                                            W5(Wx);
                                        } else {
                                            uc(W3);
                                            W4(WG);
                                        }
                                    });
                                    W8.emit("Login.Login", {
                                        apiDomain: W2.apiDomain,
                                        loginMethod: W2.loginMethod,
                                        gameId: W2.gameId,
                                        bundleId: W2.bundleId,
                                        operatorToken: W2.operatorToken,
                                        operatorPlayerSession: W2.operatorPlayerSession,
                                        playerSession: W2.playerSession,
                                        operatorParam: W2.operatorParam,
                                        betType: W2.betType,
                                        redirectOption: W2.redirectOption,
                                    });
                                })(W1);
                                break;
                            case j.Session:
                            default:
                                (function (W2) {
                                    var W3 = Date.now();
                                    var W4 = W2.on_complete;
                                    var W5 = W2.on_error;
                                    var W6 = W2.on_show;
                                    var W7 = W2.on_dismiss;
                                    var W8 = W2.maxRetryCount === undefined ? 5 : W2.maxRetryCount;
                                    var W9 = uP();
                                    if (W2.betType === uO.TRIAL || W2.operatorPlayerSession || W2.playerSession) {
                                        var Wu = 0;
                                        function Wx() {
                                            if (W6) {
                                                W9.once("Login.OnShow", W6);
                                            }
                                            if (W7) {
                                                W9.once("Login.OnDismiss", W7);
                                            }
                                            W9.once("Login.OnLogin", function (Wd) {
                                                var WX = Wd.payload;
                                                var WJ = WX.err;
                                                var Wf = WX.res;
                                                if (WJ) {
                                                    uV(WJ, Wu);
                                                    if (
                                                        !(function (WW) {
                                                            return WW.shouldRetry;
                                                        })(WJ) ||
                                                        Wu >= W8
                                                    ) {
                                                        W5(WJ);
                                                    } else {
                                                        (function (WW) {
                                                            uY(
                                                                shell.I18n.t("Login.LoginFail", {
                                                                    times: {
                                                                        ordinal: WW,
                                                                    },
                                                                }),
                                                                2
                                                            );
                                                        })(++Wu);
                                                        uy(1 << Wu)(function () {
                                                            W9.emit("Shell.PWDReset");
                                                            Wx();
                                                        });
                                                    }
                                                } else {
                                                    uc(W3);
                                                    W4(Wf);
                                                }
                                            });
                                            W9.emit("Login.Login", {
                                                apiDomain: W2.apiDomain,
                                                loginMethod: W2.loginMethod,
                                                gameId: W2.gameId,
                                                bundleId: W2.bundleId,
                                                operatorToken: W2.operatorToken,
                                                operatorPlayerSession: W2.operatorPlayerSession,
                                                playerSession: W2.playerSession,
                                                operatorParam: W2.operatorParam,
                                                betType: W2.betType,
                                                redirectOption: W2.redirectOption,
                                            });
                                        }
                                        Wx();
                                    } else {
                                        var WG = shell.ClientError;
                                        var WA = new (0, shell.Error)(WG.Domain, WG.AuthenticationError);
                                        W5(WA);
                                    }
                                })(W1);
                        }
                    }
                    W(
                        "LoginHelper",
                        Object.freeze({
                            __proto__: null,
                            GameStatus: {
                                INACTIVE: 0,
                                ACTIVE: 1,
                                SUSPENDED: 2,
                            },
                            login: x3,
                        })
                    );
                    function x4() {}
                    x0 = x4;
                    x1 = x4;
                    x2 = x4;
                    up = x4;
                    W(
                        "Printer",
                        Object.freeze({
                            __proto__: null,
                            get enablePrinter() {
                                return x0;
                            },
                            get print() {
                                return x1;
                            },
                            get setActiveNode() {},
                            get setHolder() {
                                return up;
                            },
                            get setPrinterVisible() {
                                return x2;
                            },
                        })
                    );
                    var x5;
                    var x6;
                    var x7 = {};
                    var x8 = u7.emptyFunc;
                    var x9 = u7.toDecimalWithExp;
                    var xu = new ((function () {
                        function W1() {
                            this.bv_v = 0;
                            this.bv_m = false;
                        }
                        W1.prototype.init = function (W2, W3, W4, W5) {
                            if (W5 === undefined) {
                                W5 = false;
                            }
                            this.bv_b = W2;
                            this.bv_p = W3;
                            this.bv_g = W4;
                            this.bv_m = W5;
                        };
                        Object.defineProperty(W1.prototype, "insufficientFundResult", {
                            set: function (W2) {
                                this.bv_S = W2;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(W1.prototype, "balance", {
                            set: function (W2) {
                                this.bv_v = W2;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        W1.prototype.hasSufficientFund = function (W2) {
                            if (
                                this.bv_m ||
                                this.bv_b.transactionModel.stateTransitionTo !== 1 ||
                                this.bv_S === undefined ||
                                this.bv_b.lastTransactionRawData.wt === "G"
                            ) {
                                return true;
                            }
                            var W3 = this.bv_y(W2);
                            return this.bv_v >= W3;
                        };
                        W1.prototype.getInsufficientFundResult = function (W2, W3, W4) {
                            var W5 = this;
                            var W6 = this.bv_b.lastTransactionRawData;
                            var W7 = this.bv_p;
                            if (W6.wk.substring(0, 3) === "0_C") {
                                this.bv_G = W7.getWalletBalance(function (W8, W9) {
                                    if (W8) {
                                        W4(W8, undefined);
                                    } else {
                                        if (!W9 || !W9.dt) {
                                            throw Error("Wallet Data Invalid");
                                        }
                                        var Wu = W9.dt.cb;
                                        W5.bv_v = Wu;
                                        W5.bv_g(Wu);
                                        W5.bv_w(W2, W3, W4);
                                    }
                                });
                            } else {
                                this.bv_w(W2, W3, W4);
                            }
                            return function () {
                                if (W5.bv_G) {
                                    W5.bv_G();
                                }
                            };
                        };
                        W1.prototype.bv_w = function (W2, W3, W4) {
                            var W5 = this.bv_y(W2);
                            var W6 = this.bv_b.lastTransactionRawData;
                            if (this.bv_v < W5) {
                                this.bv_C(W2, W6);
                                var W7 = this.bv_S;
                                W4(W7.error, W7.result);
                                this.bv_G = x8;
                            } else {
                                this.bv_G = W3();
                            }
                        };
                        W1.prototype.bv_y = function (W2) {
                            var W3 = this.bv_b;
                            return x9(W2.ml * W2.cs * W3.lastGameInfoRawData.dt.mxl, 2);
                        };
                        W1.prototype.bv_C = function (W2, W3) {
                            var W4 = this.bv_S.result.dt.si;
                            W4.ml = W2.ml;
                            W4.cs = W2.cs;
                            W4.fb = W2.fb === undefined ? null : W2.fb;
                            W4.wk = W2.wk;
                            W4.wt = W3.wt;
                            W4.wbn = W3.wbn;
                            W4.bl = W4.blab = W4.blb = this.bv_v;
                            W4.ctw = W3.ctw;
                            W4.cwc = W3.cwc;
                            W4.fstc = W3.fstc;
                            W4.ge = W3.ge;
                            W4.hashr = W3.hashr;
                            W4.psid = W3.psid;
                            W4.sid = W3.sid;
                        };
                        return W1;
                    })())();
                    var xx = u7.getPlatform;
                    var xG = u7.timeoutCallback;
                    var xA = u7.emptyFunc;
                    var xd = xx();
                    var xX = {
                        getGameInfo: "v2/GameInfo/Get",
                        updateSystemInfo: "v2/GameInfo/Update",
                        markRead: "v2/MarkRead",
                    };
                    var xJ = "v2/GameRule/Get";
                    var xf = "v2/GameName/Get";
                    var xW = "v2/GameWallet/Get";
                    W(
                        "APIClient",
                        (function () {
                            function W1(W2) {
                                this.dataSource = W2;
                                this.bv_T = new uX();
                            }
                            Object.defineProperty(W1.prototype, "xhrHandler", {
                                get: function () {
                                    return this.bv_T;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            W1.prototype.login = function (W2) {
                                var W3 = this;
                                var W4 = this.dataSource.systemModel;
                                var W5 = W4.apiDomain;
                                var W6 = W4.loginMethod;
                                var W7 = W4.gameId;
                                var W8 = W4.bundleId;
                                var W9 = W4.operatorToken;
                                var Wu = W4.operatorPlayerSession;
                                var Wx = W4.playerSession;
                                var WG = W4.operatorParam;
                                var WA = W4.betType;
                                var Wd = W4.redirectOption;
                                x3({
                                    on_complete: function (WX) {
                                        var WJ = WX;
                                        W3.dataSource.updateLoginInfo(WJ);
                                        var Wf = W3.dataSource.playerModel.playerId;
                                        shell.ga.setUserId(Wf);
                                        W3.bv_T.setAPIUrls(W3.dataSource.systemModel);
                                        if (W2) {
                                            W2();
                                        }
                                    },
                                    on_error: function (WX) {
                                        if (W2) {
                                            W2(WX, undefined);
                                        }
                                    },
                                    apiDomain: W5,
                                    loginMethod: W6,
                                    gameId: W7,
                                    bundleId: W8,
                                    operatorToken: W9,
                                    operatorPlayerSession: Wu,
                                    playerSession: Wx,
                                    operatorParam: WG,
                                    betType: WA,
                                    redirectOption: Wd,
                                });
                            };
                            W1.prototype.getGameInfo = function (W2, W3) {
                                var W4 = this;
                                if (W3 === undefined) {
                                    W3 = {};
                                }
                                return this.requestEngine(xX.getGameInfo, W3, function (W5, W6) {
                                    W4.logResult("getGameInfo", W6);
                                    if (W6 && W6.dt) {
                                        var W7 = W6.dt.ls.si;
                                        var W8 = W4.dataSource.transactionModel.transactionId;
                                        var W9 = W4.dataSource.playerModel.walletKey;
                                        if (!(W7.sid === W8 && W7.wk === W9)) {
                                            W4.print(W7.sid);
                                            W4.dataSource.updateGameInfo(W6);
                                        }
                                    }
                                    if (W2) {
                                        W2(W5, W6);
                                    }
                                });
                            };
                            W1.prototype.updateGameInfo = function (W2, W3) {
                                var W4 = this;
                                if (W3 === undefined) {
                                    W3 = {};
                                }
                                return this.requestEngine(xX.updateSystemInfo, W3, function (W5, W6) {
                                    W4.logResult("updateGameInfo", W6);
                                    if (W6 && W6.dt) {
                                        var W7 = W6.dt.ls.si;
                                        W4.print(W7.sid);
                                        W4.dataSource.updateGameInfo(W6);
                                    }
                                    if (W2) {
                                        W2(W5, W6);
                                    }
                                });
                            };
                            W1.prototype.getGameRule = function (W2) {
                                var W3 = this;
                                return this.requestServiceEngine(xJ, {}, function (W4, W5) {
                                    W3.logResult("getGameRule", W5);
                                    if (W2) {
                                        W2(W4, W5);
                                    }
                                });
                            };
                            W1.prototype.getGameName = function (W2) {
                                var W3 = this;
                                var W4 = {
                                    lang: shell.I18n.locale(),
                                };
                                return this.requestServiceEngine(xf, W4, function (W5, W6) {
                                    W3.logResult("gameNameResult", W6);
                                    if (W2) {
                                        W2(W5, W6);
                                    }
                                });
                            };
                            W1.prototype.markRead = function (W2) {
                                var W3 = this;
                                if (W2 === undefined) {
                                    W2 = 1;
                                }
                                var W4 = {
                                    id: this.dataSource.transactionModel.transactionId,
                                    ts: W2,
                                };
                                return this.requestEngine(xX.markRead, W4, function (W5, W6) {
                                    W3.logResult("markRead", W6);
                                    if (W5) {
                                        cc.error("Mark Read api return error: " + W5.uicode);
                                    }
                                });
                            };
                            W1.prototype.transferMoney = function () {
                                return xA;
                            };
                            W1.prototype.getWalletBalance = function (W2) {
                                var W3 = this;
                                return this.requestServiceSDEngine(xW, {}, function (W4, W5) {
                                    W3.logResult("getWalletBalance", W5);
                                    if (W2) {
                                        W2(W4, W5);
                                    }
                                });
                            };
                            W1.prototype._logResult = function () {};
                            W1.prototype._print = function (W2) {
                                var W3 = this.dataSource.playerModel.playerName;
                                x1("version: " + this.dataSource.systemModel.version + "\nuser: " + W3 + "\nspinid: " + W2);
                            };
                            W1.prototype._requestEngine = function (W2, W3, W4) {
                                if (this.dataSource.isGameReplaying && x7.GameReplay && !Object.values(xX).includes(W2)) {
                                    var W5 = x7.GameReplay.gameReplayHandler;
                                    xG(0.2)(function () {
                                        var W6 = W5.nextReplayAPIResponse;
                                        W4(undefined, W6);
                                    });
                                    return xA;
                                }
                                W3 = this.handleCommonParams(W3);
                                return this.bv_T.request(W2, W3, W4);
                            };
                            W1.prototype._requestServiceEngine = function (W2, W3, W4) {
                                (W3 = this.handleCommonParams(W3)).gid = this.dataSource.systemModel.gameId;
                                return this.bv_T.serviceRequest(W2, W3, W4);
                            };
                            W1.prototype._handleCommonParams = function (W2) {
                                if (W2 === undefined) {
                                    W2 = {};
                                }
                                var W3 = this.dataSource.systemModel.betType;
                                var W4 = this.dataSource.playerModel;
                                var W5 = W4.token;
                                var W6 = W4.walletKey;
                                W2.btt = W3;
                                if (!W2.wk) {
                                    W2.wk = W6;
                                }
                                W2.atk = W5;
                                W2.pf = xd;
                                return W2;
                            };
                            W1.prototype.logResult = function () {};
                            W1.prototype.print = function (W2) {
                                var W3 = this.dataSource.playerModel.playerName;
                                x1("version: " + this.dataSource.systemModel.version + "\nuser: " + W3 + "\nspinid: " + W2);
                            };
                            W1.prototype.requestEngine = function (W2, W3, W4) {
                                var W5 = this;
                                if (this.dataSource.isGameReplaying && x7.GameReplay && !Object.values(xX).includes(W2)) {
                                    var W6 = x7.GameReplay.gameReplayHandler;
                                    xG(0.2)(function () {
                                        var W8 = W6.nextReplayAPIResponse;
                                        W4(undefined, W8);
                                    });
                                    return xA;
                                }
                                W3 = this.handleCommonParams(W3);
                                function W7() {
                                    return W5.bv_T.request(W2, W3, function (W8, W9) {
                                        if (W8) {
                                            var Wu = shell.ServerError;
                                            if (!(W8.domain !== Wu.Domain || W8.canDismiss)) {
                                                W9 = undefined;
                                            }
                                        }
                                        W4(W8, W9);
                                    });
                                }
                                if (W2.toLowerCase() !== "v2/spin" || xu.hasSufficientFund(W3)) {
                                    return W7();
                                } else {
                                    return xu.getInsufficientFundResult(W3, W7, W4);
                                }
                            };
                            W1.prototype.requestServiceEngine = function (W2, W3, W4) {
                                (W3 = this.handleCommonParams(W3)).gid = this.dataSource.systemModel.gameId;
                                return this.bv_T.serviceRequest(W2, W3, W4);
                            };
                            W1.prototype.requestServiceSDEngine = function (W2, W3, W4) {
                                (W3 = this.handleCommonParams(W3)).gid = this.dataSource.systemModel.gameId;
                                return this.bv_T.serviceSDRequest(W2, W3, W4);
                            };
                            W1.prototype.handleCommonParams = function (W2) {
                                if (W2 === undefined) {
                                    W2 = {};
                                }
                                var W3 = this.dataSource.systemModel.betType;
                                var W4 = this.dataSource.playerModel;
                                var W5 = W4.token;
                                var W6 = W4.walletKey;
                                W2.btt = W3;
                                if (!W2.wk) {
                                    W2.wk = W6;
                                }
                                W2.atk = W5;
                                W2.pf = xd;
                                return W2;
                            };
                            u2([shell.deprecated("logResult")], W1.prototype, "_logResult", null);
                            u2([shell.deprecated("print")], W1.prototype, "_print", null);
                            u2([shell.deprecated("requestEngine")], W1.prototype, "_requestEngine", null);
                            u2([shell.deprecated("requestServiceEngine")], W1.prototype, "_requestServiceEngine", null);
                            u2([shell.deprecated("handleCommonParams")], W1.prototype, "_handleCommonParams", null);
                            return W1;
                        })()
                    );
                    var xR = u7.setDefaultCurrencyFormat;
                    W(
                        "DataSource",
                        (function () {
                            function W1(W2) {
                                this.bv_O = false;
                                if (W2) {
                                    this.bv_R = W2.playerModel;
                                    this.bv_E = W2.systemModel;
                                    this.bv_k = W2.transactionModel;
                                }
                            }
                            Object.defineProperty(W1.prototype, "playerModel", {
                                get: function () {
                                    return this.bv_R;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "systemModel", {
                                get: function () {
                                    return this.bv_E;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "transactionModel", {
                                get: function () {
                                    return this.bv_k;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "lastTransactionRawData", {
                                get: function () {
                                    return this.bv_x;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "lastGameInfoRawData", {
                                get: function () {
                                    return this.bv_I;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "isGameReplaying", {
                                get: function () {
                                    return this.bv_O;
                                },
                                set: function (W2) {
                                    this.bv_O = W2;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "nextGameReplayInfo", {
                                get: function () {
                                    return this.bv_j;
                                },
                                set: function (W2) {
                                    this.bv_j = W2;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            W1.prototype.updateLoginInfo = function (W2) {
                                var W3 = this.bv_R;
                                var W4 = this.bv_E;
                                W3.updatePlayerInfo(W2);
                                W4.updateSystemInfo(W2);
                                xR({
                                    groupSeparator: undefined,
                                    decimalSeparator: undefined,
                                    currencyCode: W3.currency,
                                    currencySymbol: W3.currencySymbol,
                                    baseUnit: W4.operatorJurisdiction.currencyBaseUnit,
                                    hideDecimal: W4.operatorJurisdiction.hideCurrencyDecimal,
                                });
                            };
                            W1.prototype.updateGameInfo = function (W2) {
                                var W3 = uP();
                                var W4 = this.bv_R;
                                var W5 = this.bv_E;
                                this.bv_I = W2;
                                var W6 = W2.dt;
                                var W7 = W6.ls;
                                var W8 = W6.gcs;
                                W5.updateGameInfo(W6);
                                W4.updateMinimumBetAmount(W8);
                                this.updateTransactionInfo(W7.si);
                                W4.balance = W6.bl;
                                W3.emit("Game.GameInfoUpdated", W2);
                            };
                            W1.prototype.updateTransactionInfo = function (W2) {
                                var W3 = uP();
                                var W4 = this.bv_k;
                                var W5 = this.bv_R;
                                this.bv_x = W2;
                                W4.updateTransactionDetails(W2);
                                W5.updatePlayerWalletInfo(W2);
                                W5.balance = W2.bl;
                                W3.emit("Game.TransactionInfoUpdated", W2);
                            };
                            return W1;
                        })()
                    );
                    var xS = u7.formatDate;
                    var xH = W(
                        "GameMaintenanceModel",
                        (function () {
                            function W1() {}
                            Object.defineProperty(W1.prototype, "readableMaintenanceStartDate", {
                                get: function () {
                                    return xS(new Date(this.maintenanceStartDate));
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "readableMaintenanceEndDate", {
                                get: function () {
                                    return xS(new Date(this.maintenanceEndDate));
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            W1.prototype.setGameMaintenanceData = function (W2) {
                                if (W2) {
                                    var W3 = W2.gid;
                                    var W4 = W2.msdt;
                                    var W5 = W2.medt;
                                    this.gameId = W3;
                                    this.gameStatus = W2.st;
                                    this.maintenanceStartDate = W4;
                                    this.maintenanceEndDate = W5;
                                }
                            };
                            W1.prototype.isGameActive = function () {
                                return this.gameStatus === L.Active;
                            };
                            W1.prototype.isGameMaintenenceApproaching = function () {
                                var W2 = this.maintenanceStartDate;
                                var W3 = this.maintenanceEndDate;
                                if (W2 && W3) {
                                    var W4 = Date.now();
                                    return W4 < W2 && W4 >= W2 - 7200000;
                                }
                                return false;
                            };
                            return W1;
                        })()
                    );
                    (function (W1) {
                        W1[(W1.EURO = 0)] = "EURO";
                        W1[(W1.ASIA = 1)] = "ASIA";
                        W1[(W1.PORTUGAL = 2)] = "PORTUGAL";
                        W1[(W1.GERMANY = 3)] = "GERMANY";
                        W1[(W1.LITHUANIA = 4)] = "LITHUANIA";
                        W1[(W1.ITALY = 5)] = "ITALY";
                        W1[(W1.SWEDEN = 6)] = "SWEDEN";
                        W1[(W1.UK = 7)] = "UK";
                        W1[(W1.UKLOW = 8)] = "UKLOW";
                        W1[(W1.UKHIGH = 9)] = "UKHIGH";
                        W1[(W1.SPAIN = 10)] = "SPAIN";
                        W1[(W1.BRAZIL = 11)] = "BRAZIL";
                    })(x5 || (x5 = {}));
                    (function (W1) {
                        W1[(W1.AUTO_PLAY_MAX = 0)] = "AUTO_PLAY_MAX";
                        W1[(W1.AUTO_PLAY_CONFIG = 1)] = "AUTO_PLAY_CONFIG";
                        W1[(W1.SINGLE_PLAY_TIME = 2)] = "SINGLE_PLAY_TIME";
                        W1[(W1.HIDE_NON_PROFIT = 3)] = "HIDE_NON_PROFIT";
                        W1[(W1.TURBO_SPIN = 4)] = "TURBO_SPIN";
                        W1[(W1.MAX_PAYOUT = 5)] = "MAX_PAYOUT";
                        W1[(W1.NET_PROFIT = 6)] = "NET_PROFIT";
                        W1[(W1.ELAPSED_TIME = 7)] = "ELAPSED_TIME";
                        W1[(W1.UNFINISHED_RULE = 8)] = "UNFINISHED_RULE";
                        W1[(W1.LAUNCH_SHOW_PAYTABLE = 9)] = "LAUNCH_SHOW_PAYTABLE";
                        W1[(W1.HISTORY_SHOW_BALANCE_BEFORE = 10)] = "HISTORY_SHOW_BALANCE_BEFORE";
                        W1[(W1.HISTORY_SHOW_WIN = 11)] = "HISTORY_SHOW_WIN";
                    })(x6 || (x6 = {}));
                    var xE;
                    var xC;
                    var xD;
                    var xj;
                    var xL;
                    var xm = [0, 0, 3, 1, 0, 0, 1, 1, 0, 0, 0, 0];
                    var xv = [
                        [100, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
                        [1000, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
                        xm,
                        [0, 0, 5, 1, 0, 1, 1, 1, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
                        [0, 0, 5, 1, 0, 1, 1, 1, 0, 0, 0, 0],
                        [100, 2, 3, 1, 0, 0, 1, 1, 0, 0, 0, 0],
                        u5([], xm, true),
                        u5([], xm, true),
                        u5([], xm, true),
                        [0, 0, 3, 1, 0, 0, 1, 1, 1, 0, 0, 0],
                        [1000, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1],
                    ];
                    function xQ(W1, W2) {
                        var W3 = xv[W2];
                        if (W3 && W3[W1] !== undefined) {
                            return W3[W1];
                        }
                        throw Error(
                            `RegionUtils :: unsupported jurisdiction(region) ${W2}${W3 && W3[W1] === undefined ? " feature type " + W1 : ""} requested`
                        );
                    }
                    function xB(W1) {
                        switch (W1) {
                            case x5.PORTUGAL:
                                return xE;
                            case x5.EURO:
                                return xC;
                            case x5.ASIA:
                                return xD;
                            case x5.GERMANY:
                                return xj;
                            case x5.LITHUANIA:
                                return xL;
                            default:
                                return;
                        }
                    }
                    var xI;
                    var xh;
                    var xq = Object.freeze({
                        __proto__: null,
                        get Region() {
                            return x5;
                        },
                        get RegionFeatureType() {
                            return x6;
                        },
                        getJurisdictionFeatureParam: xQ,
                        getRegionConfig: xB,
                        setGameRegionConfigs: function (W1, W2, W3, W4, W5) {
                            xE = W1;
                            xC = W2;
                            xD = W3;
                            xj = W4;
                            xL = W5;
                        },
                    });
                    W("RegionUtils", xq);
                    (function (W1) {
                        W1[(W1.VERTICAL = 0)] = "VERTICAL";
                        W1[(W1.HORIZONTAL = 1)] = "HORIZONTAL";
                        W1[(W1.UNIVERSAL = 2)] = "UNIVERSAL";
                    })(xI || (xI = {}));
                    (function (W1) {
                        W1[(W1.Default = -1)] = "Default";
                        W1[(W1.Disabled = 0)] = "Disabled";
                        W1[(W1.Enabled = 1)] = "Enabled";
                    })(xh || (xh = {}));
                    var xM = W(
                        "GamePluginModel",
                        (function () {
                            function W1(W2) {
                                var W3 = W2.n;
                                var W4 = W2.v;
                                var W5 = W2.il;
                                var W6 = W2.om;
                                var W7 = W2.uie;
                                this.bv_u = W3;
                                this.bv_A = W4;
                                this.bv_N = W5;
                                this.bv_P = W7;
                                this.bv__ = W6;
                            }
                            Object.defineProperty(W1.prototype, "name", {
                                get: function () {
                                    return this.bv_u;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "version", {
                                get: function () {
                                    return this.bv_A;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "configuration", {
                                get: function () {
                                    return this.bv_P;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "instantLoad", {
                                get: function () {
                                    return this.bv_N;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "orientationMode", {
                                get: function () {
                                    return this.bv__;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            W1.prototype.overrideVersion = function (W2) {
                                this.bv_A = W2;
                            };
                            return W1;
                        })()
                    );
                    var xF = J.shell.urlSearch;
                    function xk(W1) {
                        var W2;
                        W2 = W2 || W1;
                        return xF.get(W2);
                    }
                    var xK = J.shell && J.shell.environment ? J.shell.environment.audioSupported : undefined;
                    var xP = Object.freeze({
                        definition: xk("definition"),
                        betType: xk("type"),
                        language: xk("language"),
                        redirectUrl: xk("from"),
                        playerSession: xk("t"),
                        timeElapsed: xk("time_elapsed"),
                        reminderInterval: xk("reminder_interval"),
                        reminderUrl: xk("reminder_quit"),
                        operatorPlayerSession: xk("session"),
                        operatorParam: xk("operator_param"),
                        tournamentId: xk("tourid"),
                        operatorToken: xk("token"),
                        realModeUrl: xk("real"),
                        noAudio: xK === undefined ? xk("no_audio") : xK ? "0" : "1",
                        noBalanceCheck: xk("no_bl_chk"),
                        redirectOption: xk("redirect_option") || undefined,
                        loginMethod: xk("login_method"),
                    });
                    xF = undefined;
                    W(
                        "LaunchConfig",
                        Object.freeze({
                            __proto__: null,
                            cs_Launch: xP,
                        })
                    );
                    var xU;
                    var xg = u7.joinPath;
                    (function (W1) {
                        W1[(W1.REAL_MODE = 0)] = "REAL_MODE";
                        W1[(W1.FEATURE_GAME = 3)] = "FEATURE_GAME";
                    })(xU || (xU = {}));
                    var xb = {
                        bv_L: "",
                        setCustomRedirectUrl: function (W1) {
                            this.bv_L = W1;
                        },
                        getRedirectUrl: function (W1, W2) {
                            var W3;
                            switch (W1) {
                                case xU.REAL_MODE:
                                    W3 = W2 || xP.realModeUrl;
                                    break;
                                case xU.FEATURE_GAME:
                                    W2 = W2 || "";
                                    W3 = xg(J.location.origin, W2) + J.location.search;
                                    break;
                                default:
                                    W3 = this.bv_L ? this.bv_L : xP.redirectUrl;
                            }
                            return W3;
                        },
                        quitGame: function (W1, W2) {
                            var W3 = this.getRedirectUrl(W1, W2);
                            shell.enablePromBeforeUnload(false);
                            var W4 = uP();
                            if (W3) {
                                W4.emit("Window.Redirect", W3);
                            } else {
                                W4.emit("Window.Quit");
                            }
                        },
                    };
                    var xT = W("QuitGame", {
                        refreshGame: function () {
                            shell.enablePromBeforeUnload(false);
                            uP().emit("Window.Reload");
                        },
                        quitGame: function () {
                            xb.quitGame();
                        },
                        quitGameRealMode: function (W1) {
                            xb.quitGame(xU.REAL_MODE, W1);
                        },
                        quitGameFeatureTrigger: function (W1) {
                            xb.quitGame(xU.FEATURE_GAME, W1);
                        },
                        setCustomRedirectUrl: function (W1) {
                            xb.setCustomRedirectUrl(W1);
                        },
                    });
                    var xO = u7.timeoutCallback;
                    function xs(W1, W2, W3) {
                        shell.ga.sendEvent(W1, W2, W3);
                    }
                    function xZ(W1, W2, W3, W4, W5) {
                        var W6 = {
                            category: shell.ga.CATEGORY_GAME,
                            domain: W2,
                            code: W3,
                            error: W1,
                            retry: W4,
                            messages: W5,
                        };
                        uP().emit("Error.Report", W6);
                    }
                    var xY;
                    var xw;
                    var xl = W("AnalyticsHelper", {
                        init: function () {
                            shell.ga.setFrequentErrorHandler(function () {
                                shell.ga.setFrequentErrorHandler(undefined);
                                J.alert(shell.I18n.t("General.ErrorOccur"));
                                xs(shell.ga.CATEGORY_GENERAL, shell.ga.EVENT_QUIT_GAME, {
                                    reason: "Frequent Error",
                                });
                                xO(0.5)(xT.refreshGame);
                            });
                        },
                        sendErrorReport: xZ,
                        sendLoadFailReport: function (W1) {
                            var W2 = shell.Error;
                            var W3 = shell.ClientError;
                            var W4 = new W2(W3.Domain, W3.GameLoadResourceError);
                            xZ("load resource fail", W4.domain, W4.code, W1);
                        },
                        sendScreen: function (W1) {
                            shell.ga.sendScreen(W1);
                        },
                        sendEvent: xs,
                        sendAnalyticsEvent: function (W1) {
                            uP().emit("Analytics.Event", W1);
                        },
                        sendAnalyticsTiming: function (W1) {
                            uP().emit("Analytics.Timing", W1);
                        },
                    });
                    var xN = u7.timeoutCallback;
                    var xz = W("QuitGameWithEvent", {
                        quitGameWithEvent: function (W1) {
                            return function () {
                                xl.sendEvent(shell.ga.CATEGORY_GENERAL, shell.ga.EVENT_QUIT_GAME, {
                                    reason: W1,
                                });
                                xN(0.5)(xT.quitGame);
                            };
                        },
                        quitGameWithEventForRealMode: function (W1) {
                            return function () {
                                xl.sendEvent(shell.ga.CATEGORY_GENERAL, shell.ga.EVENT_QUIT_GAME, {
                                    reason: "Real Mode",
                                });
                                xN(0.5)(function () {
                                    xT.quitGameRealMode(W1);
                                });
                            };
                        },
                        quitGameWithEventForFeatureGame: function (W1) {
                            xl.sendEvent(shell.ga.CATEGORY_GENERAL, shell.ga.EVENT_QUIT_GAME, {
                                reason: "Feature Game Redirect",
                            });
                            xN(0.5)(function () {
                                xT.quitGameFeatureTrigger(W1);
                            });
                        },
                        refreshGameWithEvent: function (W1) {
                            return function () {
                                xl.sendEvent(shell.ga.CATEGORY_GENERAL, shell.ga.EVENT_QUIT_GAME, {
                                    reason: W1,
                                });
                                xN(0.5)(xT.refreshGame);
                            };
                        },
                    });
                    function xy(W1, W2, W3, W4, W5) {
                        if (W2 === undefined) {
                            W2 = xY.Transaction;
                        }
                        if (W5 === undefined) {
                            W5 = false;
                        }
                        uP().emit(
                            "Error.Occurred",
                            {
                                context: W2,
                                info: {
                                    category: shell.ga.CATEGORY_GAME,
                                    domain: W1.domain,
                                    code: W1.code,
                                    trace: W1.traceId,
                                    error: W1,
                                    messages: W4,
                                },
                                report: W5,
                            },
                            function (W6) {
                                switch (W6.response) {
                                    case "Default":
                                        if (W3) {
                                            W3(xw.Default);
                                        }
                                        break;
                                    case "Quit":
                                        if (W3) {
                                            W3(xw.Quit);
                                        }
                                        break;
                                    case "Retry":
                                        if (W3) {
                                            W3(xw.Retry);
                                        }
                                        break;
                                    case "Reload":
                                        if (W3) {
                                            W3(xw.Reload);
                                        }
                                        break;
                                    case "Dismiss":
                                        if (W3) {
                                            W3(xw.Dismiss);
                                        }
                                }
                            }
                        );
                    }
                    (function (W1) {
                        W1.Transaction = "Transaction";
                        W1.Preload = "Preload";
                        W1.Launch = "Launch";
                        W1.Login = "Login";
                        W1.Change = "Change";
                        W1.Unknown = "Unknown";
                    })(xY || (xY = {}));
                    (function (W1) {
                        W1[(W1.Default = 0)] = "Default";
                        W1[(W1.Quit = 1)] = "Quit";
                        W1[(W1.Retry = 2)] = "Retry";
                        W1[(W1.Reload = 3)] = "Reload";
                        W1[(W1.Dismiss = 4)] = "Dismiss";
                    })(xw || (xw = {}));
                    var xc = W("ErrorHandler", {
                        handleCommonError: function (W1, W2, W3, W4, W5) {
                            if (W3 === undefined) {
                                W3 = xY.Transaction;
                            }
                            xy(W2, W3, function (W6) {
                                switch (W6) {
                                    case xw.Reload:
                                        xz.refreshGameWithEvent(W1)();
                                        break;
                                    case xw.Quit:
                                        xz.quitGameWithEvent(W1)();
                                        break;
                                    case xw.Retry:
                                        if (W4) {
                                            W4();
                                        }
                                        break;
                                    case xw.Dismiss:
                                        if (W5) {
                                            W5();
                                        }
                                }
                            });
                        },
                        showError: xy,
                        getErrorContext: function (W1) {
                            switch (W1) {
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
                        ErrContext: xY,
                        ErrAction: xw,
                        handleInvalidGameDataError: function (W1) {
                            var W2 = shell.Error;
                            var W3 = shell.ClientError;
                            xy(
                                new W2(W3.Domain, W3.DataInvalidStructureError),
                                xY.Transaction,
                                function (W4) {
                                    switch (W4) {
                                        case xw.Reload:
                                        case xw.Retry:
                                            xz.refreshGameWithEvent("invalid_game_data")();
                                            break;
                                        case xw.Quit:
                                            xz.quitGameWithEvent("invalid_game_data")();
                                    }
                                },
                                W1,
                                true
                            );
                        },
                    });
                    function xV(W1, W2) {
                        var W3 = uU();
                        var W4 = [];
                        var W5 = false;
                        var W6 = {
                            onComplete: function () {
                                if (!W5) {
                                    if (W2) {
                                        W2();
                                    }
                                }
                            },
                            onError: function (W7) {
                                if (!W5) {
                                    cc.error("BVPLuginLoader error occured loading ", W7.src);
                                    W5 = true;
                                    var W8 = shell.Error;
                                    var W9 = shell.GameShellError;
                                    var Wu = new W8(W9.Domain, W9.LoadResourceError);
                                    xl.sendErrorReport("load plugin failed", Wu.domain, Wu.code, undefined, `src: ${W7.src}`);
                                    xc.handleCommonError(W7.err, Wu, xY.Launch);
                                }
                            },
                        };
                        W1.forEach(function (W7) {
                            var W8 = W7.name;
                            if (!W3.queryBundle(W8)) {
                                W4.push(W8);
                            }
                        });
                        if (W4.length > 0) {
                            W3.plugin.load(W4, W6);
                        } else if (W2) {
                            W2();
                        }
                    }
                    var xp = (function () {
                        function W1(W2) {
                            var W3 = W2.gid;
                            var W4 = W2.ft;
                            var W5 = W2.url;
                            this.bv_f = W3;
                            this.bv_M = W4;
                            this.bv_D = W5;
                        }
                        Object.defineProperty(W1.prototype, "gameId", {
                            get: function () {
                                return this.bv_f;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(W1.prototype, "featureType", {
                            get: function () {
                                return this.bv_M;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(W1.prototype, "url", {
                            get: function () {
                                return this.bv_D;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        return W1;
                    })();
                    var G0 = (function () {
                        function W1(W2) {
                            var W3 = W2.dt;
                            var W4 = W2.ugd;
                            this.bv_U = W3;
                            this.bv_H = this.bv_B(W4);
                        }
                        Object.defineProperty(W1.prototype, "displayType", {
                            get: function () {
                                return this.bv_U;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(W1.prototype, "unfinishedGameDetails", {
                            get: function () {
                                return this.bv_H;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        W1.prototype.bv_B = function (W2) {
                            return W2.map(function (W3) {
                                return new xp(W3);
                            });
                        };
                        return W1;
                    })();
                    var G1 = (function () {
                        function _W(W2) {
                            var W3 = W2.n;
                            var W4 = W2.v;
                            this.bv_u = W3;
                            this.bv_F = W4;
                        }
                        Object.defineProperty(_W.prototype, "name", {
                            get: function () {
                                return this.bv_u;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(_W.prototype, "value", {
                            get: function () {
                                return this.bv_F;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        return _W;
                    })();
                    W("TweaksData", {
                        configStore: undefined,
                    });
                    var G2;
                    var G3;
                    var G4 = (function () {
                        function W1(W2) {
                            var W3 = W2.rurl;
                            var W4 = W2.tcm;
                            var W5 = W2.tsc;
                            var W6 = W2.ttp;
                            var W7 = W2.tlb;
                            var W8 = W2.trb;
                            this.bv_W = decodeURIComponent(W3);
                            this.bv_q = W4;
                            this.bv_V = W5;
                            this.bv_Q = W6;
                            this.bv_Y = W7;
                            this.bv_z = W8;
                        }
                        Object.defineProperty(W1.prototype, "realURL", {
                            get: function () {
                                return this.bv_W;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(W1.prototype, "dialogMessage", {
                            get: function () {
                                return this.bv_q;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(W1.prototype, "triggerSpinCount", {
                            get: function () {
                                return this.bv_V;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(W1.prototype, "triggerDuration", {
                            get: function () {
                                return this.bv_Q;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(W1.prototype, "leftButtonLabel", {
                            get: function () {
                                return this.bv_Y;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(W1.prototype, "rightButtonLabel", {
                            get: function () {
                                return this.bv_z;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        return W1;
                    })();
                    var G5 = {
                        0: "",
                        1: "K",
                    };
                    var G6 = W(
                        "OperatorJurisdictionModel",
                        (function () {
                            function W1(W2) {
                                this.bv_K = [];
                                this.bv_X = [];
                                this.bv_Z = [];
                                this.bv_J = 0;
                                var W3;
                                var W4;
                                var W5 = W2.oj;
                                var W6 = W2.ufg;
                                var W7 = W2.uiogc;
                                var W8 = W2.ec;
                                var W9 = W2.ocdr;
                                var Wu = W2.gm;
                                var Wx = W2.occ;
                                var WG = W2.opl;
                                var WA = W2.ioph;
                                var Wd = W5.jid;
                                var WX = W7;
                                var WJ = WX.bb;
                                var Wf = WX.grtp;
                                var WW = WX.gec;
                                var WR = WX.bf;
                                var WS = WX.cbu;
                                var WH = WX.mr;
                                var WE = WX.rp;
                                var WC = WX.ign;
                                var WD = WX.igv;
                                var Wj = WX.gc;
                                var WL = WX.tsn;
                                var Wm = WX.we;
                                var Wv = WX.gsc;
                                var WQ = WX.bu;
                                var WB = WX.pwr;
                                var WI = WX.hd;
                                var Wh = WX.np;
                                var Wq = WX.et;
                                var WM = WX.ir;
                                var WF = WX.as;
                                var Wk = WX.asc;
                                var WK = WX.std;
                                var WP = WX.hnp;
                                var WU = WX.ts;
                                var Wg = WX.smpo;
                                var Wb = WX.ivs;
                                var WT = WX.rcf;
                                var WO = WX.sp;
                                var Ws = WX.sbb;
                                var WZ = WX.hwl;
                                var WY = Wu[0];
                                var Ww = WY.rtp;
                                var Wl = WY.mxe;
                                var WN = WY.mxehr;
                                this.bv_$ = Wd;
                                this.bv_tt = WJ;
                                this.bv_et = Wf;
                                this.bv_nt = WW;
                                this.bv_it = Wj;
                                this.bv_rt = WC;
                                this.bv_at = WD;
                                this.bv_ot = WM;
                                this.bv_ut = Wh ? Wh === 1 : xQ(x6.NET_PROFIT, this.bv_$) === 1;
                                this.bv_ct = Wq ? Wq === 1 : xQ(x6.ELAPSED_TIME, this.bv_$) === 1;
                                this.bv_st = WF || xQ(x6.AUTO_PLAY_MAX, this.bv_$);
                                this.bv_lt = Wk || xQ(x6.AUTO_PLAY_CONFIG, this.bv_$);
                                this.bv_ft = WK || xQ(x6.SINGLE_PLAY_TIME, this.bv_$);
                                this.bv_ht = WP ? WP === 1 : xQ(x6.HIDE_NON_PROFIT, this.bv_$) === 1;
                                this.bv_dt = !(this.bv_ft > 0) && (WU ? WU === 1 : xQ(x6.TURBO_SPIN, this.bv_$) === 1);
                                this.bv_vt = Wg ? Wg === 1 : xQ(x6.MAX_PAYOUT, this.bv_$) === 1;
                                this.bv_mt = WT ? WT === 1 : xQ(x6.UNFINISHED_RULE, this.bv_$) === 1;
                                this.bv_bt = WO ? WO === 1 : xQ(x6.LAUNCH_SHOW_PAYTABLE, this.bv_$) === 1;
                                this.bv_pt = Ws ? Ws === 1 : xQ(x6.HISTORY_SHOW_BALANCE_BEFORE, this.bv_$) === 1;
                                this.bv_gt = WZ ? WZ === 1 : xQ(x6.HISTORY_SHOW_WIN, this.bv_$) === 1;
                                this.bv_St = xB(this.bv_$);
                                if (!WR) {
                                    this.bv_yt = 0;
                                }
                                this.bv_Gt = Ww;
                                this.bv_wt = Wl;
                                this.bv_Ct = WN;
                                this.bv_Tt = WS ? G5[WS] : undefined;
                                this.bv_Ot = WH;
                                this.bv_Rt = WE;
                                this.bv_Et = WL;
                                this.bv_kt = Wm;
                                this.bv_xt = Wv;
                                this.bv_It = WQ;
                                this.bv_jt = WB;
                                this.bv_At = WI;
                                this.bv_Nt = Wb;
                                this.bv_Pt = WG;
                                this.bv__t = WA;
                                if (W8) {
                                    this.bv_K =
                                        ((W3 = []),
                                        W8.forEach(function (WV) {
                                            var Wp = new xM(WV);
                                            if (
                                                (function (R0) {
                                                    var R1 = R0.orientationMode;
                                                    var R2 = shell.environment.getOrientationMode();
                                                    if (R1 !== xI.UNIVERSAL) {
                                                        if (R1 !== xI.VERTICAL && R2 === "port") {
                                                            return false;
                                                        }
                                                        if (R1 !== xI.HORIZONTAL && R2 === "land") {
                                                            return false;
                                                        }
                                                    }
                                                    return true;
                                                })(Wp)
                                            ) {
                                                W3.push(Wp);
                                            }
                                        }),
                                        W3);
                                }
                                if (W6) {
                                    var Wz = (function (WV) {
                                        var Wp = 0;
                                        return {
                                            unfinishedFeatureGame: WV.map(function (R0) {
                                                var R1 = new G0(R0);
                                                if (R1.displayType !== 0) {
                                                    Wp += R1.unfinishedGameDetails.length;
                                                }
                                                return R1;
                                            }),
                                            featureGameCount: Wp,
                                        };
                                    })(W6);
                                    var Wy = Wz.unfinishedFeatureGame;
                                    var Wc = Wz.featureGameCount;
                                    this.bv_Z = Wy;
                                    this.bv_J = Wc;
                                }
                                if (Wx) {
                                    this.bv_Lt = new G4(Wx);
                                }
                                if (W9) {
                                    this.bv_X =
                                        ((W4 = []),
                                        W9.forEach(function (WV) {
                                            var Wp = new G1(WV);
                                            W4.push(Wp);
                                        }),
                                        W4);
                                }
                            }
                            Object.defineProperty(W1.prototype, "jurisdictionId", {
                                get: function () {
                                    return this.bv_$;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "regionFeature", {
                                get: function () {
                                    return this.bv_St;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "backButton", {
                                get: function () {
                                    return this.bv_tt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "gameReturnToPlayer", {
                                get: function () {
                                    return this.bv_et;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "gameExitConfirmation", {
                                get: function () {
                                    return this.bv_nt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "buyFeature", {
                                get: function () {
                                    return this.bv_yt;
                                },
                                set: function (W2) {
                                    this.bv_yt = W2;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "currencyBaseUnit", {
                                get: function () {
                                    return this.bv_Tt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "markRead", {
                                get: function () {
                                    return this.bv_Ot;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "replayVersion", {
                                get: function () {
                                    return this.bv_Rt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "turboSpinSuggest", {
                                get: function () {
                                    return this.bv_Et;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "walletSocketEnable", {
                                get: function () {
                                    return this.bv_kt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "globalSocketEnable", {
                                get: function () {
                                    return this.bv_xt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "balanceUpdateEnable", {
                                get: function () {
                                    return this.bv_It;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "newWalletNotificationEnable", {
                                get: function () {
                                    return this.bv_jt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "hideCurrencyDecimal", {
                                get: function () {
                                    return this.bv_At;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "netProfitState", {
                                get: function () {
                                    return this.bv_ut;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "elapsedTimeState", {
                                get: function () {
                                    return this.bv_ct;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "isRegulated", {
                                get: function () {
                                    return this.bv_ot;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "autoPlayMaxNum", {
                                get: function () {
                                    return this.bv_st;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "autoPlayConfig", {
                                get: function () {
                                    return this.bv_lt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "singlePlayMinDuration", {
                                get: function () {
                                    return this.bv_ft;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "hideNonProfitEffect", {
                                get: function () {
                                    return this.bv_ht;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "turboSpinEnable", {
                                get: function () {
                                    return this.bv_dt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "maxPayoutEnable", {
                                get: function () {
                                    return this.bv_vt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "unfinishedFeatureRuleContinue", {
                                get: function () {
                                    return this.bv_mt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "launchShowPaytable", {
                                get: function () {
                                    return this.bv_bt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "historyShowBalanceBefore", {
                                get: function () {
                                    return this.bv_pt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "historyShowWin", {
                                get: function () {
                                    return this.bv_gt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "isOK", {
                                get: function () {
                                    return this.bv_Nt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "gamePluginList", {
                                get: function () {
                                    return this.bv_K;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "unfinishedFeatureGame", {
                                get: function () {
                                    return this.bv_Z;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "unfinishedOnGoingFeatureGameCount", {
                                get: function () {
                                    return this.bv_J;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "operatorCustomDisplayList", {
                                get: function () {
                                    return this.bv_X;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "gameName", {
                                get: function () {
                                    return this.bv_rt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "gameClock", {
                                get: function () {
                                    return this.bv_it;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "rtp", {
                                get: function () {
                                    return this.bv_Gt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "maxPayout", {
                                get: function () {
                                    return this.bv_wt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "maxPayoutProbability", {
                                get: function () {
                                    return this.bv_Ct;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "customDemoConfig", {
                                get: function () {
                                    return this.bv_Lt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "operatorPromotionLink", {
                                get: function () {
                                    return this.bv_Pt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "idH", {
                                get: function () {
                                    return this.bv__t;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "gameVersion", {
                                get: function () {
                                    return this.bv_at;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            return W1;
                        })()
                    );
                    var G7 = u7.resolvePath;
                    var G8 = u7.getPlatform;
                    W(
                        "SystemModel",
                        (function () {
                            function W1(W2) {
                                this.bv_Mt = W2;
                                this.bv_Dt = xP.betType ? parseInt(xP.betType, 10) : 0;
                                this.bv_Ut = xP.operatorPlayerSession;
                                this.bv_Ht = xP.playerSession;
                                this.bv_Bt = xP.operatorParam;
                                this.bv_h = xP.operatorToken;
                                this.bv_Ft = "";
                                this.bv_Wt = !(!xP.noAudio || xP.noAudio !== "1");
                                this.bv_qt = xP.redirectOption;
                                this.bv_Vt = xP.loginMethod ? parseInt(xP.loginMethod, 10) : this.bv_Mt.loginMethod;
                                this.bv_Vt = this.bv_Vt || 2;
                            }
                            W1.prototype.updateSystemInfo = function (W2) {
                                var W3 = W2.operatorJurisdiction;
                                var W4 = W2.gameEngineUrl;
                                var W5 = W2.betHistoryApiUrl;
                                var W6 = W2.gamesMaintanence;
                                var W7 = W2.unfinishGamesFeature;
                                var W8 = W2.uiOperatorGameComponents;
                                var W9 = W2.elementCategory;
                                var Wu = W2.operatorCustomDisplayResponse;
                                var Wx = W2.operatorCustomConfiguration;
                                var WG = W2.operatorPromotionLink;
                                var WA = W2.gameCertificateVersion;
                                var Wd = W2.operatorPromotionId;
                                var WX = W2.gameApiSubdomain;
                                var WJ = W2.extraAssetTableKey;
                                if (!W4) {
                                    throw Error("Login: Game Engine URL is empty");
                                }
                                if (!W5) {
                                    throw Error("Login: Service Engine URL is empty");
                                }
                                this.bv_Qt = W3
                                    ? new G6({
                                          oj: W3,
                                          ufg: W7,
                                          uiogc: W8,
                                          ec: W9,
                                          ocdr: Wu,
                                          gm: W6,
                                          occ: Wx,
                                          opl: WG,
                                          ioph: Wd,
                                      })
                                    : undefined;
                                this.bv_n = W4;
                                this.bv_i = W5;
                                var Wf = this.bv_Mt.apiDomain;
                                if (WX) {
                                    var WW = this.bv_Mt.apiDomain;
                                    Wf = "https://" + WX + "." + (WW = WW.substr(WW.indexOf(".") + 1));
                                }
                                this.bv_Yt = G7(Wf, this.bv_n);
                                this.bv_zt = G7(Wf, this.bv_i);
                                this.bv_Kt = G7(this.bv_Mt.apiDomain, this.bv_i);
                                (this.bv_Xt = new xH()).setGameMaintenanceData(W6[0]);
                                if (this.bv_Qt) {
                                    shell.enablePromBeforeUnload(!!this.bv_Qt.gameExitConfirmation);
                                }
                                this.bv_Zt = WA;
                                this.bv_Jt = WX;
                                this.bv_$t = WJ;
                            };
                            Object.defineProperty(W1.prototype, "operatorJurisdiction", {
                                get: function () {
                                    return this.bv_Qt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "gameEngineUrl", {
                                get: function () {
                                    return this.bv_n;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "serviceEngineUrl", {
                                get: function () {
                                    return this.bv_i;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "gameMaintenanceInfo", {
                                get: function () {
                                    return this.bv_Xt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "gameId", {
                                get: function () {
                                    return this.bv_Mt.gameId;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "version", {
                                get: function () {
                                    return this.bv_Mt.version;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "certifiedVersion", {
                                get: function () {
                                    return this.bv_Zt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "platform", {
                                get: function () {
                                    if (!this.bv_te) {
                                        this.bv_te = G8().toString();
                                    }
                                    return this.bv_te;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "betType", {
                                get: function () {
                                    return this.bv_Dt;
                                },
                                set: function (W2) {
                                    this.bv_Dt = W2;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "operatorPlayerSession", {
                                get: function () {
                                    return this.bv_Ut;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "playerSession", {
                                get: function () {
                                    return this.bv_Ht;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "operatorParam", {
                                get: function () {
                                    return this.bv_Bt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "operatorToken", {
                                get: function () {
                                    return this.bv_h;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "bundleId", {
                                get: function () {
                                    return this.bv_Mt.bundleId;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "apiDomain", {
                                get: function () {
                                    return this.bv_Mt.apiDomain;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "loginMethod", {
                                get: function () {
                                    return this.bv_Vt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "noAudio", {
                                get: function () {
                                    return this.bv_Wt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "redirectOption", {
                                get: function () {
                                    return this.bv_qt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "gameTitle", {
                                get: function () {
                                    return this.bv_Ft;
                                },
                                set: function (W2) {
                                    this.bv_Ft = W2;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "globalDomain", {
                                get: function () {
                                    return this.bv_Mt.globalDomain;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            W1.prototype.getFullGameEngineUrl = function () {
                                return this.bv_Yt;
                            };
                            W1.prototype.getFullServiceEngineUrl = function () {
                                return this.bv_Kt;
                            };
                            W1.prototype.getFullServiceEngineUrlSD = function () {
                                return this.bv_zt;
                            };
                            Object.defineProperty(W1.prototype, "gameApiSubdomain", {
                                get: function () {
                                    return this.bv_Jt;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "extraAssetTableKey", {
                                get: function () {
                                    return this.bv_$t;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            return W1;
                        })()
                    );
                    W(
                        "PlayerModel",
                        (function () {
                            function W1() {
                                this.bv_ee = 0;
                                this.bv_ne = xP.tournamentId || undefined;
                            }
                            Object.defineProperty(W1.prototype, "walletId", {
                                get: function () {
                                    return this.bv_ie;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "walletType", {
                                get: function () {
                                    return this.bv_re;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "walletKey", {
                                get: function () {
                                    return this.bv_ne;
                                },
                                set: function (W2) {
                                    this.bv_ne = W2;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "playerId", {
                                get: function () {
                                    return this.bv_ae;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "playerName", {
                                get: function () {
                                    return this.bv_oe;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "playerNickname", {
                                get: function () {
                                    return this.bv_ue;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "token", {
                                get: function () {
                                    return this.bv_s;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "sessionStatus", {
                                get: function () {
                                    return this.bv_ce;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "currency", {
                                get: function () {
                                    return this.bv_se;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "currencySymbol", {
                                get: function () {
                                    return this.bv_le;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "minimumBetAmount", {
                                get: function () {
                                    return this.bv_ee;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            W1.prototype.updateMinimumBetAmount = function (W2) {
                                var W3 = W2 ? W2.ns : undefined;
                                this.bv_ee = W3 && W3.is ? W3.t : 0;
                            };
                            W1.prototype.updatePlayerInfo = function (W2) {
                                var W3 = W2.playerId;
                                var W4 = W2.playerName;
                                var W5 = W2.nickname;
                                var W6 = W2.sessionToken;
                                var W7 = W2.sessionStatus;
                                var W8 = W2.currencyCode;
                                var W9 = W2.currencySymbol;
                                this.bv_ae = W3;
                                this.bv_oe = W4;
                                this.bv_ue = W5;
                                this.bv_s = W6;
                                this.bv_ce = W7;
                                this.bv_se = W8;
                                this.bv_le = W9;
                            };
                            W1.prototype.updatePlayerWalletInfo = function (W2) {
                                var W3 = W2.wid;
                                var W4 = W2.wt;
                                var W5 = W2.wk;
                                this.bv_ie = W3;
                                this.bv_re = W4;
                                this.bv_ne = W5;
                            };
                            return W1;
                        })()
                    );
                    W(
                        "TransactionModel",
                        (function () {
                            function W1() {}
                            Object.defineProperty(W1.prototype, "transactionId", {
                                get: function () {
                                    return this.bv_fe;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "parentTransactionId", {
                                get: function () {
                                    return this.bv_he;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "stateTransitionFrom", {
                                get: function () {
                                    return this.bv_de;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "stateTransitionTo", {
                                get: function () {
                                    return this.bv_ve;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "accumulatedWinAmount", {
                                get: function () {
                                    return this.bv_me;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "totalWinAmount", {
                                get: function () {
                                    return this.bv_be;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "balanceBefore", {
                                get: function () {
                                    return this.bv_pe;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "balanceAfterBet", {
                                get: function () {
                                    return this.bv_ge;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "markReadIndex", {
                                get: function () {
                                    return this.bv_Se;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "totalBet", {
                                get: function () {
                                    return this.bv_ye;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "totalBaseBet", {
                                get: function () {
                                    return this.bv_Ge;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "previousGameState", {
                                get: function () {
                                    return this.bv_we;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            W1.prototype.updateTransactionDetails = function (W2) {
                                var W3 = W2.sid;
                                var W4 = W2.psid;
                                var W5 = W2.st;
                                var W6 = W2.nst;
                                var W7 = W2.aw;
                                var W8 = W2.tw;
                                var W9 = W2.blb;
                                var Wu = W2.blab;
                                var Wx = W2.mr;
                                var WG = W2.tb;
                                var WA = W2.tbb;
                                this.bv_we = this.bv_ve;
                                this.bv_fe = W3;
                                this.bv_he = W4;
                                this.bv_de = W5;
                                this.bv_ve = W6;
                                this.bv_me = W7;
                                this.bv_be = W8;
                                this.bv_pe = W9;
                                this.bv_ge = Wu;
                                this.bv_Se = Wx ? Wx.ts : 1;
                                this.bv_ye = WG;
                                this.bv_Ge = WA;
                                this.updateTransactionInfo(W2);
                            };
                            return W1;
                        })()
                    );
                    var G9 = u7.timeoutCallback;
                    function Gx(W1) {
                        return (0.75 + Math.random() * 0.5) * (1 << W1);
                    }
                    var GG = (function () {
                        function _W2(W2, W3) {
                            this.retryCount = 0;
                            this.bv_Ce = W2;
                            this.bv_Te = W3;
                        }
                        _W2.prototype.execute = function () {
                            this.retryCount++;
                            var W2 = typeof this.bv_Te == "function" ? this.bv_Te(this.retryCount) : this.bv_Te;
                            G9(W2)(this.bv_Oe.bind(this));
                        };
                        _W2.prototype.bv_Oe = function () {
                            this.bv_Ce(this.retryCount);
                        };
                        return _W2;
                    })();
                    var GA = W(
                        "RetryHandler",
                        (function () {
                            function W1() {
                                this.bv_Re = 5;
                                this._id = "0";
                                this.bv_Ee = false;
                            }
                            W1.setRetryHandlerConfig = function (W2) {
                                if (W2) {
                                    this.retrySchemeConfig = W2.retrySchemeConfig ? W2.retrySchemeConfig : Gx;
                                    this.maxRetries = W2.maxRetries ? W2.maxRetries : 5;
                                }
                            };
                            Object.defineProperty(W1.prototype, "id", {
                                get: function () {
                                    return this._id;
                                },
                                set: function (W2) {
                                    this._id = W2;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(W1.prototype, "isDestroyed", {
                                get: function () {
                                    return this.bv_Ee;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            W1.prototype.init = function (W2, W3, W4) {
                                this.bv_Ce = W3;
                                this.bv_Re = W4 && W4.maxRetries ? W4.maxRetries : W1.maxRetries;
                                this.bv_ke = W4 && W4.retrySchemeConfig ? W4.retrySchemeConfig : W1.retrySchemeConfig;
                                this.bv_Te = new GG(W3, this.bv_ke);
                                this.bv_xe = W2;
                            };
                            W1.prototype.execute = function () {
                                if (!this.bv_Ee) {
                                    uP().emit("Shell.PWDReset");
                                    if (this.bv_Te.retryCount >= this.bv_Re) {
                                        this.bv_Te = new GG(this.bv_Ce, this.bv_ke);
                                    }
                                    this.bv_Te.execute();
                                    this.bv_Ie();
                                }
                            };
                            W1.prototype.getRetryCount = function () {
                                return this.bv_Te.retryCount;
                            };
                            W1.prototype.getMaxRetryCount = function () {
                                return this.bv_Re;
                            };
                            W1.prototype.canRetry = function () {
                                return this.bv_Te.retryCount < this.bv_Re && !this.bv_Ee;
                            };
                            W1.prototype.reset = function () {
                                if (this.bv_Te) {
                                    this.bv_Te.retryCount = 0;
                                }
                            };
                            W1.prototype.destroy = function () {
                                this.bv_Ee = true;
                                uP().emit("Shell.PWDReset");
                            };
                            W1.prototype.bv_Ie = function () {
                                var W2 = this.bv_Te.retryCount;
                                uY(
                                    this.bv_xe +
                                        " " +
                                        shell.I18n.t("RetryHandler.Times", {
                                            times: {
                                                ordinal: W2,
                                            },
                                        }),
                                    2
                                );
                            };
                            W1.retrySchemeConfig = Gx;
                            W1.maxRetries = 5;
                            return W1;
                        })()
                    );
                    (function (W1) {
                        W1[(W1.LEFT = 1)] = "LEFT";
                        W1[(W1.CENTER = 2)] = "CENTER";
                        W1[(W1.RIGHT = 3)] = "RIGHT";
                    })(G2 || (G2 = {}));
                    var Gd = G2.LEFT;
                    var GX = 11.5;
                    var GJ = 300;
                    function Gf() {
                        return shell.environment.getOrientationMode() === "land";
                    }
                    function GW() {
                        return shell.environment.isIOS();
                    }
                    var GR;
                    var GS;
                    var GH = J.devicePixelRatio || 1;
                    var GE = J.screen.width * GH;
                    var GC = J.screen.height * GH;
                    var GD = (function (W1) {
                        function W2() {
                            var W3 = (W1 !== null && W1.apply(this, arguments)) || this;
                            W3.rootElement = Object.create(null);
                            W3.bv_je = Object.create(null);
                            W3.bv_Ae = 300;
                            W3.bv_Ne = [];
                            return W3;
                        }
                        u0(W2, W1);
                        W2.prototype.onCreate = function () {
                            var W3 = this;
                            GJ = Gf() ? 580 : 300;
                            this.bv_Pe(
                                "game-title-css",
                                ".game-title {        width : 300px;        height: 17px;        position: absolute;        display: flex;        color: white;        opacity: 0.85;        text-shadow: rgb(65, 50, 24) 1px 0px 0px, rgb(65, 50, 24) 0.552px 0.85px 0px, rgb(65, 50, 24) -0.4px 0.9px 0px, rgb(65, 50, 24) -0.1px 0.15px 0px, rgb(65, 50, 24) -0.65px -0.7px 0px, rgb(65, 50, 24) 0.3px -0.95px 0px, rgb(65, 50, 24) 0.96px -0.28px 0px;        pointer-events: none;        white-space: nowrap;        z-index: 250;}"
                            );
                            this.rootElement = document.createElement("div");
                            this.rootElement.setAttribute("id", "game-title");
                            this.rootElement.classList.add("game-title");
                            this.rootElement.style.visibility = "hidden";
                            this.context.event.emit("Shell.GetScale", undefined, function (W4) {
                                if (!W4.error && W4.response) {
                                    W3.rootElement.style.width = W4.response.width + "px";
                                    W3.bv_Ae = W4.response.width;
                                }
                            });
                            this.bv_je = document.createElement("div");
                            this.bv_je.style.paddingLeft = "12px";
                            this.bv_je.style.display = "flex";
                            this.bv_je.style.alignItems = "center";
                            if (shell.isRTLLanguage && shell.isRTLLanguage()) {
                                this.bv_je.style.direction = "rtl";
                            }
                            this.rootElement.appendChild(this.bv_je);
                        };
                        W2.prototype.updatePosition = function (W3) {
                            if (W3 === G2.CENTER) {
                                this.rootElement.style.justifyContent = "center";
                                this.rootElement.style.width = `${this.bv_Ae}px`;
                            } else if (W3 === G2.LEFT) {
                                this.rootElement.style.justifyContent = "flex-start";
                                this.rootElement.style.width = `${GJ}px`;
                            } else {
                                this.rootElement.style.justifyContent = "flex-end";
                                this.rootElement.style.width = `${GJ}px`;
                            }
                            this.bv__e();
                        };
                        W2.prototype.updateFontSize = function (W3) {
                            if (W3 > 0) {
                                this.rootElement.style.fontSize = `${W3}px`;
                            }
                        };
                        W2.prototype.updateZindex = function (W3) {
                            this.rootElement.style.zIndex = W3.toString();
                        };
                        W2.prototype.getFontSize = function () {
                            return parseFloat(this.bv_je.style.fontSize.split("px")[0]);
                        };
                        W2.prototype.toggleVisibility = function (W3) {
                            var W4 = W3 ? "visible" : "hidden";
                            this.rootElement.style.visibility = W4;
                        };
                        W2.prototype.setGameTitle = function (W3) {
                            var W4 = this.bv_je;
                            if (W4) {
                                W4.textContent = W3;
                            }
                        };
                        W2.prototype.resizeTextToFitWidth = function () {
                            var W3 = this.bv_je;
                            var W4 = parseFloat(J.getComputedStyle(W3).fontSize);
                            if (W3.parentElement && W3.offsetWidth > W3.parentElement.offsetWidth) {
                                for (; W3.offsetWidth > W3.parentElement.offsetWidth; ) {
                                    W4 -= 0.5;
                                    W3.style.fontSize = W4.toString() + "px";
                                }
                            }
                        };
                        W2.prototype.bv_Pe = function (W3, W4) {
                            if (!this.bv_Ne.includes(W3)) {
                                var W5 = document.createElement("style");
                                W5.id = W3;
                                W5.textContent = W4;
                                document.head.appendChild(W5);
                                this.bv_Ne.push(W3);
                            }
                        };
                        W2.prototype.bv__e = function () {
                            var W3 = 18;
                            var W4 = shell.environment.hasNotch();
                            var W5 = GW() && GE === 640 && GC === 1136;
                            if (J.navigator.standalone || J.shell.getEnvironment() === "app") {
                                if (W4) {
                                    W3 = 43;
                                } else if (W5) {
                                    W3 = 31;
                                } else if (GW()) {
                                    W3 = 29;
                                }
                            }
                            this.rootElement.style.height = `${W3}px`;
                        };
                        return W2;
                    })(plugin.AbstractViewComponent);
                    function Gj(W1, W2, W3, W4, W5, W6) {
                        if (W3 === undefined) {
                            W3 = false;
                        }
                        var W7 = W2.name;
                        GX = Gf() ? 11 : GX;
                        if (W5 !== undefined) {
                            Gd = W5;
                        }
                        if (W6 !== undefined) {
                            GX = W6;
                        }
                        W1.component.create(GD);
                        G3 = W1.component.getInstance(GD);
                        if (W4) {
                            W4.appendChild(G3.rootElement);
                        } else {
                            W1.view.appendTo(GD, "overlay");
                        }
                        G3.updatePosition(Gd);
                        G3.updateFontSize(GX);
                        if (W3) {
                            G3.setGameTitle(W7 + " - " + shell.I18n.t("GameTitleTrial.Title"));
                        } else {
                            G3.setGameTitle(W7);
                        }
                        G3.resizeTextToFitWidth();
                    }
                    function GL(W1) {
                        if (G3) {
                            G3.updateZindex(W1);
                        }
                    }
                    function Gm() {
                        return G3 && G3.getFontSize();
                    }
                    function Gv(W1) {
                        if (G3) {
                            G3.updatePosition(W1);
                        }
                    }
                    function GQ(W1) {
                        if (W1 === undefined) {
                            W1 = false;
                        }
                        if (G3) {
                            G3.toggleVisibility(W1);
                        }
                    }
                    W(
                        "GameTitle",
                        Object.freeze({
                            __proto__: null,
                            GameTitle: GD,
                            get GameTitlePosition() {
                                return G2;
                            },
                            getTitleFontSize: Gm,
                            initGameTitle: Gj,
                            toggleVisibleGameTitleNode: GQ,
                            updateTitleFontSize: function (W1) {
                                if (G3) {
                                    G3.updateFontSize(W1);
                                }
                            },
                            updateTitlePosition: Gv,
                            updateTitleZIndex: GL,
                        })
                    );
                    (function (W1) {
                        W1[(W1.LEFT = 1)] = "LEFT";
                        W1[(W1.CENTER = 2)] = "CENTER";
                        W1[(W1.RIGHT = 3)] = "RIGHT";
                    })(GR || (GR = {}));
                    var GB = GR.RIGHT;
                    var GI = 11.5;
                    var Gh = J.devicePixelRatio || 1;
                    var Gq = J.screen.width * Gh;
                    var GM = J.screen.height * Gh;
                    function GF() {
                        return shell.environment.isIOS();
                    }
                    var Gk;
                    var GK = (function (W1) {
                        function W2() {
                            var W3 = (W1 !== null && W1.apply(this, arguments)) || this;
                            W3.rootElement = Object.create(null);
                            W3.bv_je = Object.create(null);
                            W3.bv_Ne = [];
                            return W3;
                        }
                        u0(W2, W1);
                        W2.prototype.onCreate = function () {
                            var W3 = this;
                            this.bv_Pe(
                                "time-stamp-css",
                                ".time_stamp {        height: 17px;        position: absolute;        display: flex;        color: white;        opacity: 0.85;        text-shadow: rgb(65, 50, 24) 1px 0px 0px, rgb(65, 50, 24) 0.552px 0.85px 0px, rgb(65, 50, 24) -0.4px 0.9px 0px, rgb(65, 50, 24) -0.1px 0.15px 0px, rgb(65, 50, 24) -0.65px -0.7px 0px, rgb(65, 50, 24) 0.3px -0.95px 0px, rgb(65, 50, 24) 0.96px -0.28px 0px;        pointer-events: none;        font-family: monospace;        z-index: 250;}"
                            );
                            this.rootElement = document.createElement("div");
                            this.rootElement.setAttribute("id", "time-stamp");
                            this.rootElement.classList.add("time_stamp");
                            this.context.event.emit("Shell.GetScale", undefined, function (W4) {
                                if (!W4.error && W4.response) {
                                    W3.rootElement.style.width = W4.response.width + "px";
                                }
                            });
                            this.bv_je = document.createElement("div");
                            this.bv_je.style.paddingRight = "12px";
                            this.bv_je.style.display = "flex";
                            this.bv_je.style.alignItems = "center";
                            this.rootElement.appendChild(this.bv_je);
                            this.bv_Le();
                        };
                        W2.prototype.updatePosition = function (W3) {
                            if (W3 === GR.CENTER) {
                                this.rootElement.style.justifyContent = "center";
                            } else if (W3 === GR.LEFT) {
                                this.rootElement.style.justifyContent = "flex-start";
                            } else {
                                this.rootElement.style.justifyContent = "flex-end";
                            }
                            this.bv__e();
                        };
                        W2.prototype.updateFontSize = function (W3) {
                            if (W3 > 0) {
                                this.rootElement.style.fontSize = `${W3}px`;
                            }
                        };
                        W2.prototype.updateZindex = function (W3) {
                            this.rootElement.style.zIndex = W3.toString();
                        };
                        W2.prototype.toggleVisibility = function (W3) {
                            var W4 = W3 ? "visible" : "hidden";
                            this.rootElement.style.visibility = W4;
                        };
                        W2.prototype.bv_Pe = function (W3, W4) {
                            if (!this.bv_Ne.includes(W3)) {
                                var W5 = document.createElement("style");
                                W5.id = W3;
                                W5.textContent = W4;
                                document.head.appendChild(W5);
                                this.bv_Ne.push(W3);
                            }
                        };
                        W2.prototype.bv_Le = function () {
                            var W3 = this.bv_je;
                            if (W3) {
                                // TOLOOK
                                setInterval(function () {
                                    var W4 = new Date();
                                    var W5 = W4.getHours();
                                    var W6 = W4.getMinutes();
                                    var W7 = W4.getSeconds();
                                    var W8 = W5 < 10 ? `0${W5}` : W5;
                                    var W9 = W6 < 10 ? `0${W6}` : W6;
                                    var Wu = W7 < 10 ? `0${W7}` : W7;
                                    if (W3) {
                                        W3.textContent = `${W8}:${W9}:${Wu}`;
                                    }
                                }, 1000);
                            }
                        };
                        W2.prototype.bv__e = function () {
                            var W3 = 18;
                            var W4 = J.navigator.standalone || J.shell.getEnvironment() === "app";
                            var W5 = shell.environment.hasNotch();
                            var W6 = GF() && Gq === 640 && GM === 1136;
                            if (W4) {
                                if (W5) {
                                    W3 = 43;
                                } else if (W6) {
                                    W3 = 31;
                                } else if (GF()) {
                                    W3 = 29;
                                }
                            }
                            this.rootElement.style.height = `${W3}px`;
                        };
                        return W2;
                    })(plugin.AbstractViewComponent);
                    function GP(W1) {
                        if (W1 === undefined) {
                            W1 = false;
                        }
                        if (GS) {
                            GS.toggleVisibility(W1);
                        }
                    }
                    (function (W1) {
                        W1[(W1.LEFT = 1)] = "LEFT";
                        W1[(W1.CENTER = 2)] = "CENTER";
                        W1[(W1.RIGHT = 3)] = "RIGHT";
                    })(Gk || (Gk = {}));
                    var GU = J.devicePixelRatio || 1;
                    var Gg = J.screen.width * GU;
                    var Gb = J.screen.height * GU;
                    function GT() {
                        return shell.environment.getOrientationMode() === "land";
                    }
                    function GO() {
                        return shell.environment.isIOS();
                    }
                    function Gs() {
                        return shell.environment.hasNotch();
                    }
                    function GZ() {
                        return GO() && Gg === 640 && Gb === 1136;
                    }
                    function GY() {
                        return J.navigator.standalone || J.shell.getEnvironment() === "app";
                    }
                    var Gw;
                    var Gl = "game-base-header-css";
                    var GN = (function (W1) {
                        function W2() {
                            var W3 = (W1 !== null && W1.apply(this, arguments)) || this;
                            W3.rootElement = Object.create(null);
                            W3.textDiv = Object.create(null);
                            W3.styleIDs = [];
                            W3.customCSSPropertiesList = [];
                            W3.bv_Me = 0;
                            return W3;
                        }
                        u0(W2, W1);
                        W2.prototype.onCreate = function () {
                            var W3 = this;
                            this.bv_Me = GT() ? this.landScapeMaxWidth : this.portraitMaxWidth;
                            this.rootElement = document.createElement("div");
                            this.rootElement.setAttribute("id", this.elementID);
                            if (document.head.getElementsByTagName("style").namedItem(Gl)) {
                                this.styleIDs.push(Gl);
                            }
                            this.bv_Pe(
                                Gl,
                                ".game-base-header-css {        height: 17px;        position: absolute;        display: flex;        color: white;        opacity: 0.85;        text-shadow: rgb(65, 50, 24) 1px 0px 0px, rgb(65, 50, 24) 0.552px 0.85px 0px, rgb(65, 50, 24) -0.4px 0.9px 0px, rgb(65, 50, 24) -0.1px 0.15px 0px, rgb(65, 50, 24) -0.65px -0.7px 0px, rgb(65, 50, 24) 0.3px -0.95px 0px, rgb(65, 50, 24) 0.96px -0.28px 0px;        pointer-events: none;        z-index: 250;}"
                            );
                            this.rootElement.classList.add(Gl);
                            var W4 = `${this.elementID}-css`;
                            var W5 = this.bv_De(W4, this.customCSSPropertiesList);
                            if (W5) {
                                this.bv_Pe(W4, W5);
                                this.rootElement.classList.add(W4);
                            }
                            this.context.event.emit("Shell.GetScale", undefined, function (W6) {
                                if (!W6.error && W6.response) {
                                    W3.rootElement.style.width = W6.response.width + "px";
                                    if (W3.defaultWidth != null) {
                                        W3.defaultWidth = W6.response.width;
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
                        W2.prototype.updatePosition = function (W3) {
                            if (W3 === Gk.CENTER) {
                                this.rootElement.style.justifyContent = "center";
                                this.bv_Ue(this.defaultWidth);
                            } else if (W3 === Gk.LEFT) {
                                this.rootElement.style.justifyContent = "flex-start";
                                this.bv_Ue(this.bv_Me);
                            } else {
                                this.rootElement.style.justifyContent = "flex-end";
                                this.bv_Ue(this.bv_Me);
                            }
                            this.bv__e();
                        };
                        W2.prototype.updateFontSize = function (W3) {
                            if (W3 > 0) {
                                this.rootElement.style.fontSize = `${W3}px`;
                            }
                        };
                        W2.prototype.updateZindex = function (W3) {
                            this.rootElement.style.zIndex = W3.toString();
                        };
                        W2.prototype.getFontSize = function () {
                            return parseFloat(this.textDiv.style.fontSize.split("px")[0]);
                        };
                        W2.prototype.toggleVisibility = function (W3) {
                            var W4 = W3 ? "visible" : "hidden";
                            this.rootElement.style.visibility = W4;
                        };
                        W2.prototype.resizeTextToFitWidth = function () {
                            var W3 = this.textDiv;
                            var W4 = parseFloat(J.getComputedStyle(W3).fontSize);
                            if (W3.parentElement && W3.offsetWidth > W3.parentElement.offsetWidth) {
                                for (; W3.offsetWidth > W3.parentElement.offsetWidth; ) {
                                    W4 -= 0.5;
                                    W3.style.fontSize = W4.toString() + "px";
                                }
                            }
                        };
                        W2.prototype.updateText = function (W3) {
                            var W4 = this.textDiv;
                            if (W4) {
                                W4.textContent = W3;
                            }
                        };
                        W2.prototype.bv_Pe = function (W3, W4) {
                            if (!this.styleIDs.includes(W3)) {
                                var W5 = document.createElement("style");
                                W5.id = W3;
                                W5.textContent = W4;
                                document.head.appendChild(W5);
                                this.styleIDs.push(W3);
                            }
                        };
                        W2.prototype.bv__e = function () {
                            var W3 = 18;
                            var W4 = GY();
                            var W5 = Gs();
                            var W6 = GZ();
                            if (W4) {
                                if (W5) {
                                    W3 = 43;
                                } else if (W6) {
                                    W3 = 31;
                                } else if (GO()) {
                                    W3 = 29;
                                }
                            }
                            this.rootElement.style.height = `${W3}px`;
                        };
                        W2.prototype.bv_Ue = function (W3) {
                            if (W3 != null) {
                                this.rootElement.style.width = `${this.bv_Me}px`;
                            }
                        };
                        W2.prototype.bv_De = function (W3, W4) {
                            var W5 = [];
                            W4.forEach(function (W6) {
                                var W7 = W6.endsWith(";") ? W6 : `${W6};`;
                                W5.push(W7);
                            });
                            if (W5.length <= 0) {
                                return "";
                            } else {
                                return `.${W3} { ` + W5.join(" ") + " }";
                            }
                        };
                        return W2;
                    })(plugin.AbstractViewComponent);
                    var Gz = (function () {
                        function W1() {}
                        W1.prototype.isLandscape = function () {
                            return GT();
                        };
                        W1.prototype.isIOS = function () {
                            return GO();
                        };
                        W1.prototype.isIphoneX = function () {
                            return Gs();
                        };
                        W1.prototype.isIphoneSE = function () {
                            return GZ();
                        };
                        W1.prototype.isNotBrowserMode = function () {
                            return GY();
                        };
                        return W1;
                    })();
                    var Gy = (function (W1) {
                        function W2() {
                            var W3 = (W1 !== null && W1.apply(this, arguments)) || this;
                            W3.elementID = "game-session-time";
                            W3.bv_He = 0;
                            W3.bv_Be = {
                                hours: 0,
                                minutes: 0,
                                seconds: 0,
                            };
                            return W3;
                        }
                        u0(W2, W1);
                        W2.prototype.onCreate = function () {
                            W1.prototype.onCreate.call(this);
                        };
                        W2.prototype.startSessionTime = function () {
                            var W3 = this;
                            if (!this.bv_Fe) {
                                this.bv_Fe = // TOLOOK
                                    setInterval(function () {
                                        var W4 = ++W3.bv_He;
                                        var W5 = Math.floor(W4 / 3600);
                                        var W6 = Math.floor((W4 - W5 * 3600) / 60);
                                        var W7 = W4 - (W5 * 3600 + W6 * 60);
                                        W3.bv_Be = {
                                            hours: W5,
                                            minutes: W6,
                                            seconds: W7,
                                        };
                                        W3.updateTime();
                                    }, 1000);
                            }
                        };
                        W2.prototype.stopSessionTime = function () {
                            if (this.bv_Fe) {
                                clearInterval(this.bv_Fe);
                            }
                            this.bv_Fe = undefined;
                        };
                        W2.prototype.getSessionTime = function () {
                            return this.bv_Be;
                        };
                        W2.prototype.updateTime = function () {
                            var W3 = this.bv_Be;
                            var W4 = W3.hours;
                            var W5 = W3.minutes;
                            var W6 = W3.seconds;
                            var W7 = W4 < 10 ? `0${W4}` : W4 + "";
                            var W8 = W5 < 10 ? `0${W5}` : W5 + "";
                            var W9 = W6 < 10 ? `0${W6}` : W6 + "";
                            var Wu = W4 > 0 ? `${W7}:${W8}:${W9}` : `${W8}:${W9}`;
                            var Wx = shell.I18n.t("GameCustomDisplay.SessionTime") + " " + Wu;
                            this.updateText(Wx);
                        };
                        return W2;
                    })(GN);
                    var Gc = (function (W1) {
                        function W2() {
                            var W3 = (W1 !== null && W1.apply(this, arguments)) || this;
                            W3.position = Gk.RIGHT;
                            W3.fontSize = 11.5;
                            W3.landscapeFontSize = 11;
                            return W3;
                        }
                        u0(W2, W1);
                        W2.prototype.initGameSessionTime = function (W3, W4, W5, W6) {
                            this.fontSize = this.isLandscape() ? this.landscapeFontSize : this.fontSize;
                            if (W5 !== undefined) {
                                this.position = W5;
                            }
                            if (W6 !== undefined) {
                                this.fontSize = W6;
                            }
                            W3.component.create(Gy);
                            this.bv_We = W3.component.getInstance(Gy);
                            if (W4) {
                                W4.appendChild(this.bv_We.rootElement);
                            } else {
                                W3.view.appendTo(Gy, "overlay");
                            }
                            this.bv_We.updateTime();
                            this.bv_We.updatePosition(this.position);
                            this.bv_We.updateFontSize(this.fontSize);
                        };
                        W2.prototype.updateGameSessionTimeZIndex = function (W3) {
                            if (this.bv_We) {
                                this.bv_We.updateZindex(W3);
                            }
                        };
                        W2.prototype.updateGameSessionTimeFontSize = function (W3) {
                            if (this.bv_We) {
                                this.bv_We.updateFontSize(W3);
                            }
                        };
                        W2.prototype.updateGameSessionTimePosition = function (W3) {
                            if (this.bv_We) {
                                this.bv_We.updatePosition(W3);
                            }
                        };
                        W2.prototype.toggleVisibleGameSessionTimeNode = function (W3) {
                            if (W3 === undefined) {
                                W3 = false;
                            }
                            if (this.bv_We) {
                                this.bv_We.toggleVisibility(W3);
                            }
                        };
                        W2.prototype.startGameSessionTime = function () {
                            if (this.bv_We) {
                                this.bv_We.startSessionTime();
                            }
                        };
                        W2.prototype.stopGameSessionTime = function () {
                            if (this.bv_We) {
                                this.bv_We.stopSessionTime();
                            }
                        };
                        W2.prototype.getGameSessionTime = function () {
                            return this.bv_We && this.bv_We.getSessionTime();
                        };
                        return W2;
                    })(Gz);
                    var GV = u7.formatCurrency;
                    var Gp = (function (W1) {
                        function W2() {
                            var W3 = (W1 !== null && W1.apply(this, arguments)) || this;
                            W3.elementID = "game-session-net-profit";
                            W3.bv_qe = true;
                            W3.bv_Ve = 0;
                            W3.bv_Qe = 0;
                            W3.bv_Ye = 0;
                            return W3;
                        }
                        u0(W2, W1);
                        W2.prototype.onCreate = function () {
                            W1.prototype.onCreate.call(this);
                        };
                        W2.prototype.getGameSessionNetProfit = function () {
                            return this.bv_Ye;
                        };
                        W2.prototype.updateGameSessionNetProfit = function (W3) {
                            this.setLatestBalance(W3);
                            this.bv_Ye = this.bv_Qe - this.bv_Ve;
                            this.updateNetProfit();
                        };
                        W2.prototype.setLatestBalance = function (W3) {
                            if (this.bv_qe) {
                                this.bv_Ve = W3;
                                this.bv_qe = false;
                            }
                            this.bv_Qe = W3;
                        };
                        W2.prototype.updateNetProfit = function () {
                            var W3 = shell.I18n.t("GameCustomDisplay.SessionNetPosition") + " " + GV(this.bv_Ye);
                            this.updateText(W3);
                            this.resizeTextToFitWidth();
                        };
                        return W2;
                    })(GN);
                    var A0 = (function (W1) {
                        function W2() {
                            var W3 = (W1 !== null && W1.apply(this, arguments)) || this;
                            W3.position = Gk.LEFT;
                            W3.fontSize = 11.5;
                            W3.landscapeFontSize = 11;
                            return W3;
                        }
                        u0(W2, W1);
                        W2.prototype.initGameSessionNetProfit = function (W3, W4, W5, W6) {
                            this.fontSize = this.isLandscape() ? this.landscapeFontSize : this.fontSize;
                            if (W5 !== undefined) {
                                this.position = W5;
                            }
                            if (W6 !== undefined) {
                                this.fontSize = W6;
                            }
                            W3.component.create(Gp);
                            this.bv_ze = W3.component.getInstance(Gp);
                            if (W4) {
                                W4.appendChild(this.bv_ze.rootElement);
                            } else {
                                W3.view.appendTo(Gp, "overlay");
                            }
                            this.bv_ze.updatePosition(this.position);
                            this.bv_ze.updateFontSize(this.fontSize);
                            this.bv_ze.updateNetProfit();
                        };
                        W2.prototype.updateSessionNetProfitZIndex = function (W3) {
                            if (this.bv_ze) {
                                this.bv_ze.updateZindex(W3);
                            }
                        };
                        W2.prototype.updateSessionNetProfitFontSize = function (W3) {
                            if (this.bv_ze) {
                                this.bv_ze.updateFontSize(W3);
                            }
                        };
                        W2.prototype.getSessionNetProfitFontSize = function () {
                            return (this.bv_ze && this.bv_ze.getFontSize()) || 0;
                        };
                        W2.prototype.updateSessionNetProfitPosition = function (W3) {
                            if (this.bv_ze) {
                                this.bv_ze.updatePosition(W3);
                            }
                        };
                        W2.prototype.updateBalance = function (W3) {
                            if (this.bv_ze) {
                                this.bv_ze.updateGameSessionNetProfit(W3);
                            }
                        };
                        W2.prototype.toggleVisibleGameSessionNetProfitNode = function (W3) {
                            if (W3 === undefined) {
                                W3 = false;
                            }
                            if (this.bv_ze) {
                                this.bv_ze.toggleVisibility(W3);
                            }
                        };
                        W2.prototype.getSessionNetProfit = function () {
                            return (this.bv_ze && this.bv_ze.getGameSessionNetProfit()) || 0;
                        };
                        return W2;
                    })(Gz);
                    var A1 = new ((function () {
                        function W1() {
                            this.bv_Ke = new Gc();
                            this.bv_Xe = new A0();
                        }
                        Object.defineProperty(W1.prototype, "gameSessionTimeHelper", {
                            get: function () {
                                return this.bv_Ke;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(W1.prototype, "gameSessionNetProfitHelper", {
                            get: function () {
                                return this.bv_Xe;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        return W1;
                    })())();
                    (function (W1) {
                        W1[(W1.LEGACY = 0)] = "LEGACY";
                        W1[(W1.NEW = 1)] = "NEW";
                    })(Gw || (Gw = {}));
                    var A2;
                    var A3;
                    var A4;
                    var A5 = [];
                    function A6(W1, W2) {
                        var W3 = u7.timeoutCallback;
                        var W4 = W1;
                        W3(2)(function () {
                            var W5 = A4.getComponent(cc.Label);
                            A4.setScale(cc.v2(1, 0));
                            W5.string = W2[W4];
                            W4++;
                            W4 %= W2.length;
                            A4.runAction(
                                cc.sequence(
                                    cc.scaleTo(0.125, 1).easing(cc.easeIn(1)),
                                    cc.callFunc(function () {
                                        A6(W4, W2);
                                    })
                                )
                            );
                        });
                    }
                    var A7;
                    var A8;
                    var A9;
                    var Au;
                    var Ax = (function () {
                        function W1() {}
                        W1.prototype.initGameOperatorDisplay = function (W2, W3, W4, W5) {
                            var W6;
                            var W7;
                            var W8;
                            var W9;
                            if (A2 === undefined) {
                                A2 = new cc.Node("operator_display_holder");
                                A3 = new cc.Node("operator_display");
                                A4 = new cc.Node("content");
                                A3.parent = A2;
                                A4.parent = A3;
                                if (!cc.game.isPersistRootNode(A2)) {
                                    cc.game.addPersistRootNode(A2);
                                }
                            } else {
                                cc.warn("GameOperatorDisplay: GameOperatorDisplay node is already added!");
                            }
                            W7 = (W6 = A2).addComponent(cc.Widget);
                            W8 = cc.view.getViewportRect().height;
                            W9 = cc.view.getViewportRect().width;
                            W6.anchorX = 0.5;
                            W6.anchorY = 0.5;
                            W6.zIndex = 1000;
                            W6.width = W9;
                            W6.height = W8;
                            W7.top = 0;
                            W7.left = 0;
                            W7.right = 0;
                            W7.isAlignTop = true;
                            W7.isAlignLeft = true;
                            W7.isAlignRight = true;
                            W7.isAlignVerticalCenter = true;
                            W7.isAlignHorizontalCenter = true;
                            W7.updateAlignment();
                            (function (Wu) {
                                var Wx = Wu.addComponent(cc.Layout);
                                Wu.width = 1080;
                                Wu.height = 25;
                                Wu.anchorX = 0.5;
                                Wu.anchorY = 1;
                                Wu.setPosition(cc.v2(0, -865));
                                Wx.type = cc.Layout.Type.HORIZONTAL;
                                Wx.paddingLeft = 20;
                            })(A3);
                            (function (Wu, Wx) {
                                var WG = Wu.addComponent(cc.Label);
                                var WA = Wu.addComponent(cc.LabelOutline);
                                Wu.width = 1040;
                                Wu.anchorX = 0;
                                Wu.anchorY = 0.5;
                                WG.overflow = cc.Label.Overflow.CLAMP;
                                WG.lineHeight = 25;
                                WG.fontSize = Wx || 25;
                                WG.node.opacity = 153;
                                WG.horizontalAlign = cc.Label.HorizontalAlign.LEFT;
                                WG.verticalAlign = cc.Label.VerticalAlign.CENTER;
                                WA.color = new cc.Color(65, 50, 24, 255);
                                WA.width = 0.5;
                            })(A4, W5);
                            (function (Wu) {
                                if (Wu && Wu.length > 0) {
                                    A5.push(Wu);
                                }
                            })(W4);
                            (function (Wu) {
                                if (Wu && Wu.length > 0) {
                                    for (
                                        var Wx = function (Wd) {
                                                for (
                                                    var WX = Wu[Wd],
                                                        WJ = Object.keys(WX).map(function (WS) {
                                                            return WX[WS];
                                                        }),
                                                        Wf = [],
                                                        WW = 0,
                                                        WR = WJ.length;
                                                    WW < WR;
                                                    WW++
                                                ) {
                                                    Wf.push(WJ[WW]);
                                                }
                                                A5.push(Wf.join(": "));
                                            },
                                            WG = 0,
                                            WA = Wu.length;
                                        WG < WA;
                                        WG++
                                    ) {
                                        Wx(WG);
                                    }
                                }
                                if (A5.length > 0) {
                                    A4.getComponent(cc.Label).string = A5[0];
                                    if (A5.length > 1) {
                                        A6(1, A5);
                                    }
                                }
                            })(W3);
                            this.bv_Ze(A5);
                            W2.event.on(
                                "Shell.Scaled",
                                function (Wu) {
                                    if (!Wu.error) {
                                        (function () {
                                            var Wx = cc.view.getViewportRect().height;
                                            var WG = cc.view.getViewportRect().width;
                                            A2.width = Wx;
                                            A2.height = WG;
                                        })();
                                    }
                                },
                                undefined
                            );
                            W2.event.emit("Game.GetSettingMenuType", undefined, function (Wu) {
                                if (!Wu.error) {
                                    if (Wu.response === Gw.LEGACY) {
                                        A3.setPosition(cc.v2(0, -885));
                                    } else if (shell.environment.getOrientationMode() === "land") {
                                        A3.setPosition(cc.v2(-430, -368));
                                    }
                                }
                            });
                            W2.event.emit("Game.RequestLayoutInfo", undefined, function (Wu) {
                                if (!Wu.error && Wu.response) {
                                    var Wx = Wu.response;
                                    if (Wx.uiOperatorDisplaySpace) {
                                        A3.setPosition(cc.v2(0, Wx.uiOperatorDisplaySpace.position.y));
                                    }
                                }
                            });
                        };
                        W1.prototype.toggleVisibleGameOperatorDisplayNode = function (W2) {
                            if (W2 === undefined) {
                                W2 = false;
                            }
                            if (A2) {
                                A2.active = W2;
                            }
                        };
                        W1.prototype.bv_Ze = function (W2) {
                            if (!(W2 && W2.length !== 0)) {
                                this.toggleVisibleGameOperatorDisplayNode(false);
                            }
                        };
                        return W1;
                    })();
                    var AG = new ((function () {
                        function W1() {
                            this.bv_Je = new Ax();
                        }
                        Object.defineProperty(W1.prototype, "gameOperatorDisplayHelper", {
                            get: function () {
                                return this.bv_Je;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        return W1;
                    })())();
                    (function (W1) {
                        W1[(W1.LEFT = 1)] = "LEFT";
                        W1[(W1.CENTER = 2)] = "CENTER";
                        W1[(W1.RIGHT = 3)] = "RIGHT";
                    })(A7 || (A7 = {}));
                    (function (W1) {
                        W1.GameTitle = "gameTitle";
                        W1.TimeStamp = "timeStamp";
                        W1.GameSessionNetProfit = "gameSessionNetProfit";
                        W1.GameSessionTime = "gameSessionTime";
                    })(A8 || (A8 = {}));
                    (function (W1) {
                        W1[(W1.TITLE_TIMESTAMP = 0)] = "TITLE_TIMESTAMP";
                        W1[(W1.SESSION_NET_PROFIT_TIME = 1)] = "SESSION_NET_PROFIT_TIME";
                    })(A9 || (A9 = {}));
                    (function (W1) {
                        W1.BONUS_WALLET = "B";
                        W1.FREE_GAMES = "G";
                        W1.CASH = "C";
                        W1.TOURNAMENT = "P";
                        W1.REMOTE = "I";
                    })(Au || (Au = {}));
                    var AA;
                    var Ad;
                    var AX;
                    var AJ;
                    var Af;
                    var AW = false;
                    var AR = {
                        gameTitle: {
                            show: false,
                            order: A9.TITLE_TIMESTAMP,
                        },
                        timeStamp: {
                            show: false,
                            order: A9.TITLE_TIMESTAMP,
                        },
                        gameSessionNetProfit: {
                            show: false,
                            order: A9.SESSION_NET_PROFIT_TIME,
                        },
                        gameSessionTime: {
                            show: false,
                            order: A9.SESSION_NET_PROFIT_TIME,
                        },
                    };
                    var AS = undefined;
                    var AH = false;
                    var AE = A1.gameSessionNetProfitHelper;
                    var AC = A1.gameSessionTimeHelper;
                    var AD = AG.gameOperatorDisplayHelper;
                    var Aj = false;
                    var AL = false;
                    var Am = false;
                    var Av = false;
                    var AQ = {};
                    var AB = false;
                    var AI = false;
                    var Ah = false;
                    function Aq(W1, W2) {
                        if (W2 === undefined) {
                            W2 = true;
                        }
                        switch (W1) {
                            case "None":
                                AR.gameTitle = {
                                    show: false,
                                    order: A9.TITLE_TIMESTAMP,
                                };
                                AR.timeStamp = {
                                    show: false,
                                    order: A9.TITLE_TIMESTAMP,
                                };
                                break;
                            case "Time":
                                AR.gameTitle = {
                                    show: false,
                                    order: 1,
                                };
                                AR.timeStamp = {
                                    show: true,
                                    position: A7.RIGHT,
                                    order: A9.TITLE_TIMESTAMP,
                                };
                                break;
                            case "Title":
                                AR.gameTitle = {
                                    show: true,
                                    position: A7.CENTER,
                                    order: A9.TITLE_TIMESTAMP,
                                };
                                AR.timeStamp = {
                                    show: false,
                                    order: A9.TITLE_TIMESTAMP,
                                };
                                break;
                            case "All":
                                AR.gameTitle = {
                                    show: true,
                                    position: A7.LEFT,
                                    order: A9.TITLE_TIMESTAMP,
                                };
                                AR.timeStamp = {
                                    show: true,
                                    position: A7.RIGHT,
                                    order: A9.TITLE_TIMESTAMP,
                                };
                        }
                        AR.gameSessionNetProfit = {
                            show: !Am && Aj,
                            position: A7.LEFT,
                            order: A9.SESSION_NET_PROFIT_TIME,
                        };
                        AR.gameSessionTime = {
                            show: !Av && AL,
                            position: A7.RIGHT,
                            order: A9.SESSION_NET_PROFIT_TIME,
                        };
                        AX = W1;
                        if (W2) {
                            AM();
                        }
                    }
                    function AM() {
                        if (AK(true).length <= 0) {
                            AI = true;
                            AA.style.visibility = "hidden";
                            AK(false).forEach(function (W1) {
                                AP(W1);
                            });
                        } else {
                            Ah = true;
                            (function () {
                                AA.style.visibility = "visible";
                                Ag();
                                if (AB && Ah) {
                                    Ah = false;
                                    AY();
                                    Aw();
                                    Ab(0, true);
                                    return;
                                }
                                if (!AB) {
                                    AB = true;
                                    Ah = false;
                                    Ab(0, true);
                                }
                            })();
                        }
                    }
                    function AF(W1) {
                        if (Aj) {
                            Am = W1;
                            AR.gameSessionNetProfit.show = !Am && Aj;
                        }
                        if (AL) {
                            Av = W1;
                            AR.gameSessionTime.show = !Av && AL;
                        }
                        AM();
                    }
                    function Ak() {
                        return Object.values(A8);
                    }
                    function AK(W1) {
                        return Ak().filter(function (W2) {
                            var W3 = W2;
                            if (W1) {
                                return AR[W3].show;
                            } else {
                                return !AR[W3].show;
                            }
                        });
                    }
                    function AP(W1) {
                        switch (W1) {
                            case A8.GameTitle:
                                GQ(false);
                                break;
                            case A8.TimeStamp:
                                GP(false);
                                break;
                            case A8.GameSessionNetProfit:
                                AE.toggleVisibleGameSessionNetProfitNode(false);
                                break;
                            case A8.GameSessionTime:
                                AC.toggleVisibleGameSessionTimeNode(false);
                        }
                    }
                    function AU(W1, W2, W3, W4) {
                        if (!W1[W2]) {
                            W1[W2] = {};
                        }
                        function W5(W6) {
                            if (W1[W2][W6]) {
                                AU(W1, W2 + 1, W3, W4);
                            } else {
                                W1[W2][W6] = W3;
                            }
                        }
                        switch (W4) {
                            case A7.LEFT:
                                W5("left");
                                break;
                            case A7.CENTER:
                                W5("center");
                                break;
                            case A7.RIGHT:
                                W5("right");
                        }
                    }
                    function Ag() {
                        AQ = {};
                        AK(true).forEach(function (W1) {
                            var W2 = W1;
                            var W3 = AR[W2];
                            var W4 = W3.position;
                            var W5 = W3.order;
                            var W6 = W4 || A7.LEFT;
                            AU(AQ, W5, W2, W6);
                        });
                        return AQ;
                    }
                    function Ab(W1, W2) {
                        var W3 = Object.keys(AQ);
                        var W4 = W3[W1];
                        var W5 = AQ[W4];
                        (function (W6, W7, W8) {
                            function W9() {
                                var Wx = Ak().filter(function (WG) {
                                    var WA = WG;
                                    return !W7.some(function (Wd) {
                                        var WX = Wd.key;
                                        return WX && WX === WA;
                                    });
                                });
                                Wx.forEach(function (WG) {
                                    AP(WG);
                                });
                            }
                            function Wu() {
                                W7.forEach(function (Wx) {
                                    var WG = Wx.key;
                                    var WA = Wx.position;
                                    if (WG) {
                                        (function (Wd, WX) {
                                            switch (Wd) {
                                                case A8.GameTitle:
                                                    GQ(true);
                                                    Gv(WX);
                                                    break;
                                                case A8.TimeStamp:
                                                    GP(true);
                                                    (function (WJ) {
                                                        if (GS) {
                                                            GS.updatePosition(WJ);
                                                        }
                                                    })(WX);
                                                    break;
                                                case A8.GameSessionNetProfit:
                                                    AE.toggleVisibleGameSessionNetProfitNode(true);
                                                    AE.updateSessionNetProfitPosition(WX);
                                                    break;
                                                case A8.GameSessionTime:
                                                    AC.toggleVisibleGameSessionTimeNode(true);
                                                    AC.updateGameSessionTimePosition(WX);
                                            }
                                        })(WG, WA);
                                    }
                                });
                                (function (Wx) {
                                    if (!Ad || AI || Ah) {
                                        return Wx();
                                    }
                                    (function (WG) {
                                        Ad.style.transform = "scaleY(1)";
                                        Af = // TOLOOK
                                            setTimeout(function () {
                                                Aw();
                                                WG();
                                            }, 3000);
                                    })(Wx);
                                })(W8);
                            }
                            if (W6) {
                                W9();
                                Wu();
                                return;
                            }
                            (function (Wx) {
                                if (!Ad || AI || Ah) {
                                    return Wx();
                                }
                                (function (WG) {
                                    Ad.style.transform = "scaleY(0)";
                                    AJ = // TOLOOK
                                        setTimeout(function () {
                                            AY();
                                            WG();
                                        }, 200);
                                })(Wx);
                            })(function () {
                                W9();
                                Wu();
                            });
                        })(
                            W2,
                            [
                                {
                                    key: W5.left,
                                    position: A7.LEFT,
                                },
                                {
                                    key: W5.center,
                                    position: A7.CENTER,
                                },
                                {
                                    key: W5.right,
                                    position: A7.RIGHT,
                                },
                            ],
                            function () {
                                if (W3.length <= 1) {
                                    AB = false;
                                } else {
                                    if (AI) {
                                        AB = false;
                                        AI = false;
                                        return;
                                    }
                                    if (++W1 >= Object.keys(AQ).length) {
                                        W1 = 0;
                                    }
                                    Ab(W1, false);
                                }
                            }
                        );
                    }
                    function AT() {
                        return AS === Au.CASH;
                    }
                    function AO(W1) {
                        if (W1) {
                            var W2 = W1.k;
                            AH = W2.substring(0, 3) === "0_C";
                        } else {
                            AH = false;
                        }
                    }
                    function As(W1) {
                        if (AT() || AH) {
                            AF(W1);
                        }
                    }
                    function AZ() {
                        if (AT()) {
                            AF(false);
                        } else {
                            AF(!AH);
                        }
                    }
                    function AY() {
                        if (AJ) {
                            clearTimeout(AJ);
                            AJ = undefined;
                        }
                    }
                    function Aw() {
                        if (Af) {
                            clearTimeout(Af);
                            Af = undefined;
                        }
                    }
                    var Al = W("GameHeaderHelper", {
                        initGameHeader: function (W1) {
                            if (!AW) {
                                var W2 = document.getElementById("game-overlay");
                                (AA = document.createElement("div")).setAttribute("id", "game-header-holder");
                                AA.style.zIndex = "99";
                                AA.style.pointerEvents = "none";
                                AA.style.position = "absolute";
                                var W3 = AA;
                                var W4 = (function (WJ) {
                                    var Wf = WJ.systemModel.operatorJurisdiction;
                                    var WW = Wf.gameClock;
                                    var WR = Wf.gameName;
                                    var WS = Wf.netProfitState;
                                    var WH = Wf.elapsedTimeState;
                                    var WE = WW;
                                    var WC = WR;
                                    var WD = "All";
                                    Aj = WS;
                                    AL = WH;
                                    if (!(WW !== undefined && WR !== undefined)) {
                                        WE = true;
                                        WC = true;
                                    }
                                    if (WE) {
                                        if (!WC) {
                                            WD = "Time";
                                        }
                                    } else {
                                        WD = WC ? "Title" : "None";
                                    }
                                    return WD;
                                })(W1.dataSource);
                                Aq(W4, false);
                                var W5 = Ag();
                                if (Object.keys(W5).length > 1) {
                                    (Ad = document.createElement("div")).setAttribute("id", "game-header-animate-holder");
                                    Ad.style.height = "18px";
                                    Ad.style.transform = "scaleY(1)";
                                    Ad.style.transformOrigin = "center";
                                    Ad.style.transition = "transform 0.2s ease-in";
                                    W3 = Ad;
                                    AA.appendChild(Ad);
                                }
                                if (W2) {
                                    W2.appendChild(AA);
                                }
                                var W6 = W1.context;
                                var W7 = W1.gameTitle;
                                var W8 = W1.dataSource.systemModel.operatorJurisdiction.operatorCustomDisplayList;
                                var W9 = W1.dataSource.systemModel.betType === 2;
                                var Wu = W1.dataSource.systemModel.operatorJurisdiction.gameVersion;
                                var Wx = W1.dataSource.systemModel.certifiedVersion;
                                W6.event.emit("Shell.GetScale", undefined, function (WJ) {
                                    if (!WJ.error && WJ.response) {
                                        AA.style.height = WJ.response.height + "px";
                                        AA.style.width = WJ.response.width + "px";
                                    }
                                });
                                W6.event.on(
                                    "Shell.Scaled",
                                    function (WJ) {
                                        var Wf = WJ.payload;
                                        AA.style.height = `${Wf.height}px`;
                                        AA.style.width = `${Wf.width}px`;
                                    },
                                    W6
                                );
                                Gj(W6, W7, W9, W3);
                                (function (WJ, Wf) {
                                    GI = shell.environment.getOrientationMode() === "land" ? 11 : GI;
                                    WJ.component.create(GK);
                                    GS = WJ.component.getInstance(GK);
                                    if (Wf) {
                                        Wf.appendChild(GS.rootElement);
                                    } else {
                                        WJ.view.appendTo(GK, "overlay");
                                    }
                                    GS.updatePosition(GB);
                                    GS.updateFontSize(GI);
                                })(W6, W3);
                                var WG = Wu ? Wx : undefined;
                                AD.initGameOperatorDisplay(W6, W8, WG);
                                var WA;
                                var Wd = Gm();
                                WA = Wd;
                                if (GS) {
                                    GS.updateFontSize(WA);
                                }
                                GQ(false);
                                GP(false);
                                AD.toggleVisibleGameOperatorDisplayNode(false);
                                W6.event.once(
                                    "Game.GameInfoUpdated",
                                    function (WJ) {
                                        var Wf = WJ.payload.dt.ls.si;
                                        AS = Wf.wt;
                                        AO(Wf.wbn);
                                    },
                                    W6
                                );
                                if (Aj) {
                                    AE.initGameSessionNetProfit(W6, W3);
                                    AE.updateSessionNetProfitFontSize(Wd);
                                    AE.toggleVisibleGameSessionNetProfitNode(false);
                                    W6.event.on(
                                        "Game.TransactionInfoChanged",
                                        function (WJ) {
                                            var Wf = WJ.payload;
                                            if (Wf && Wf.balance && (AT() || AH)) {
                                                AE.updateBalance(Wf.balance);
                                            }
                                        },
                                        W6
                                    );
                                }
                                if (AL) {
                                    AC.initGameSessionTime(W6, W3);
                                    AC.updateGameSessionTimeFontSize(Wd);
                                    AC.toggleVisibleGameSessionTimeNode(false);
                                }
                                function WX(WJ) {
                                    if (WJ.payload === "GameStarted") {
                                        AD.toggleVisibleGameOperatorDisplayNode(true);
                                        if (AL) {
                                            AC.startGameSessionTime();
                                        }
                                        (function (Wf) {
                                            Wf.event.on(
                                                "Game.UpdateHeaderType",
                                                function (WW) {
                                                    var WR = WW.payload;
                                                    if (!WR) {
                                                        WR = "All";
                                                    }
                                                    Aq(WR);
                                                },
                                                Wf
                                            );
                                            Wf.event.on(
                                                "Game.UpdateHeaderZIndex",
                                                function (WW) {
                                                    var WR = WW.payload;
                                                    GL(WR);
                                                    (function (WS) {
                                                        if (GS) {
                                                            GS.updateZindex(WS);
                                                        }
                                                    })(WR);
                                                    AE.updateSessionNetProfitZIndex(WR);
                                                    AC.updateGameSessionTimeZIndex(WR);
                                                },
                                                Wf
                                            );
                                            Wf.event.on(
                                                "Game.RequestHeaderType",
                                                function (WW) {
                                                    WW.response = AX;
                                                },
                                                Wf
                                            );
                                            Wf.event.on(
                                                "Game.ShowCustomDisplay",
                                                function () {
                                                    AD.toggleVisibleGameOperatorDisplayNode(true);
                                                },
                                                Wf
                                            );
                                            Wf.event.on(
                                                "Game.HideCustomDisplay",
                                                function () {
                                                    AD.toggleVisibleGameOperatorDisplayNode(false);
                                                },
                                                Wf
                                            );
                                            if (Aj || AL) {
                                                Wf.event.on(
                                                    "Game.ReplayInitiated",
                                                    function () {
                                                        As(true);
                                                    },
                                                    Wf
                                                );
                                                Wf.event.on(
                                                    "Game.ReplayQuit",
                                                    function () {
                                                        As(false);
                                                    },
                                                    Wf
                                                );
                                                Wf.event.on(
                                                    "Game.GameInfoUpdated",
                                                    function (WW) {
                                                        var WR = WW.payload.dt.ls.si;
                                                        AS = WR.wt;
                                                        AO(WR.wbn);
                                                        AZ();
                                                    },
                                                    Wf
                                                );
                                            }
                                        })(W6);
                                        AZ();
                                        Aq(W4);
                                        W6.event.off("Shell.BootStateChanged", WX, W6);
                                    }
                                }
                                W6.event.on("Shell.BootStateChanged", WX, W6);
                                AW = true;
                            }
                        },
                        updateHeaderPositions: Aq,
                        emitShowCustomDisplayEvent: function () {
                            uP().emit("Game.ShowCustomDisplay");
                        },
                        emitHideCustomDisplayEvent: function () {
                            uP().emit("Game.HideCustomDisplay");
                        },
                    });
                    var AN = W("GameMaintenanceHandler", {
                        checkGameMaintenance: function (W1, W2) {
                            if (W1.isGameActive()) {
                                var W3 = W1.maintenanceStartDate;
                                var W4 = W1.maintenanceEndDate;
                                if (W3 && W4 && W1.isGameMaintenenceApproaching()) {
                                    uw({
                                        title_message: shell.I18n.t("General.MaintenanceTitle"),
                                        content_message: shell.I18n.t("General.MaintenanceMessage", {
                                            startDate: W1.readableMaintenanceStartDate,
                                            endDate: W1.readableMaintenanceEndDate,
                                        }),
                                        actions: [
                                            {
                                                title: shell.I18n.t("General.DialogOk"),
                                                handler: W2,
                                            },
                                        ],
                                    });
                                    return;
                                }
                                if (W2) {
                                    W2();
                                }
                            } else {
                                var W5 = shell.Error;
                                var W6 = shell.ClientError;
                                var W7 = new W5(W6.Domain, W6.GameMaintenanceError);
                                xl.sendErrorReport("game inactive", W7.domain, W7.code);
                                xc.showError(W7, "Launch", function (W8) {
                                    if (xw.Quit === W8) {
                                        xT.quitGame();
                                    }
                                });
                            }
                        },
                    });
                    var Az = false;
                    function Ay(W1, W2) {
                        if (!W2) {
                            W2 = function (W8, W9) {
                                if (W8) {
                                    var Wu = W1.failCallback;
                                    if (Wu) {
                                        Wu(W8, W9);
                                    }
                                } else {
                                    var Wx = W1.finalCallback;
                                    if (Wx) {
                                        Wx(undefined, W9);
                                    }
                                }
                            };
                        }
                        var W3;
                        var W4 = new GA();
                        var W5 = (function (W8, W9, Wu) {
                            return function (Wx, WG) {
                                var WA = W8.slowNetworkHandler;
                                if (Wx) {
                                    if (W9.isDestroyed) {
                                        return;
                                    }
                                    var Wd = W9.getRetryCount();
                                    var WX = Wd > 0 ? Wd : undefined;
                                    if (!Wx.canDismiss) {
                                        xl.sendErrorReport(W8.name + " failed", Wx.domain, Wx.code, WX);
                                    }
                                    if (Wx.shouldRetry && W9.canRetry()) {
                                        W9.execute();
                                    } else {
                                        if (WA) {
                                            WA.cancel();
                                        }
                                        if (Az) {
                                            return;
                                        }
                                        var WJ = W8.errorContext ? W8.errorContext : xc.getErrorContext(W8.errorTitle);
                                        xc.handleCommonError(
                                            W8.name + " failed",
                                            Wx,
                                            WJ,
                                            function () {
                                                if (WA) {
                                                    WA.start();
                                                }
                                                W9.reset();
                                                W9.execute();
                                            },
                                            function () {
                                                var Wf = shell.ServerError;
                                                if (Wf.isInsufficientCashFundError(Wx.code) || Wf.isInsufficientBonusFundError(Wx.code)) {
                                                    xu.insufficientFundResult = {
                                                        error: Wx,
                                                        result: WG,
                                                    };
                                                }
                                                if (Wu) {
                                                    Wu(Wx, WG);
                                                }
                                            }
                                        );
                                    }
                                } else {
                                    if (WA) {
                                        WA.cancel();
                                    }
                                    W9.destroy();
                                    if (Az) {
                                        return;
                                    }
                                    if (Wu) {
                                        Wu(undefined, WG);
                                    }
                                }
                                xl.sendAnalyticsTiming({
                                    actionName: "GAME_API_REQUEST",
                                    state: "End",
                                });
                            };
                        })(W1, W4, W2);
                        var W6 = (function (W8, W9, Wu) {
                            return function () {
                                W8(W9, Wu);
                                xl.sendAnalyticsTiming({
                                    actionName: "GAME_API_REQUEST",
                                    state: "Start",
                                });
                            };
                        })(W1.apiRequest, W5, W1.apiRequestParam);
                        W3 = W1.fallbackRequest
                            ? function () {
                                  var W8 = W1.fallbackRequest;
                                  if (W8) {
                                      var W9 = (function (Wu, Wx, WG) {
                                          return function (WA, Wd) {
                                              if (WA) {
                                                  Wx(WA, Wd);
                                              } else if (WG && WG(Wd)) {
                                                  xl.sendAnalyticsTiming({
                                                      actionName: "GAME_API_REQUEST",
                                                      state: "End",
                                                  });
                                                  Wu();
                                              } else {
                                                  Wx(undefined, Wd);
                                              }
                                          };
                                      })(W6, W5, W1.shouldRetryApiRequest);
                                      W8(W9, W1.fallbackRequestParam);
                                      xl.sendAnalyticsTiming({
                                          actionName: "GAME_API_REQUEST",
                                          state: "Start",
                                      });
                                  }
                              }
                            : W6;
                        W4.id = `handler_${W1.name}`;
                        W4.init(W1.retryMessage ? W1.retryMessage : shell.I18n.t("General.RetryNetwork"), W3);
                        var W7 = W1.slowNetworkHandler;
                        if (W7) {
                            W7.start();
                        }
                        W6();
                    }
                    var Ac;
                    var AV = W("RequestHandler", {
                        doAPIRequest: Ay,
                        doTransactionAPIRequest: function (W1, W2, W3) {
                            var W4 = W2.transactionModel.transactionId;
                            W1.errorContext = "Transaction";
                            W1.name = "game api";
                            W1.shouldRetryApiRequest = function () {
                                var W5 = W2.transactionModel.transactionId;
                                return W4 === W5;
                            };
                            Ay(W1, W3);
                        },
                        reportCriticalError: function () {
                            Az = true;
                        },
                    });
                    function Ap() {
                        return C.getPreference(Ac).getItem("gameName");
                    }
                    var d0 = {
                        getGameName: function (W1, W2) {
                            W1.getGameName(function (W3, W4) {
                                var W5;
                                if (!(W3 || W4 === undefined)) {
                                    W5 = W4;
                                    C.getPreference(Ac).setItem("gameName", W5.dt);
                                }
                                if (W2) {
                                    W2();
                                }
                            });
                        },
                        getGameNamesFromStorage: Ap,
                        getGameNameWithId: function (W1) {
                            var W2 = Ap();
                            if (W2 && W2[W1]) {
                                return W2[W1];
                            } else {
                                return W1.toString();
                            }
                        },
                        setupGameNameDomain: function (W1) {
                            Ac = W1;
                        },
                    };
                    var d1 = (function () {
                        function W1() {
                            return [200, 10, 300].reduce(function (W3, W4) {
                                return W3 * W4;
                            }, 144);
                        }
                        function W2(W3, W4, W5) {
                            if (
                                (function (W7) {
                                    return uk(J[uq(0)].now(), W7);
                                })(W3)
                            ) {
                                if (!W4) {
                                    W4 = J.Number("0.0005") * 100;
                                }
                                if (W5) {
                                    var W6 = (function (W7, W8) {
                                        var W9 = (J[uq(0)].now() - W7) / (W8 * W1());
                                        return J[uq(4)].min(1, W9 * W9);
                                    })(W3, W5);
                                    W4 *= W6;
                                }
                                return uk(J[("Mathew", uS(-2, "Mathew"))].random(), W4);
                            }
                            return true;
                        }
                        return [
                            function () {
                                return W2(
                                    ["0x4c72"].reduce(function (W3, W4) {
                                        return W3 + J.Number(W4);
                                    }, 595) * W1(),
                                    J.Number("0.0005") * 100,
                                    28
                                );
                            },
                            W2,
                        ];
                    })();
                    var d2 = d1[0];
                    function d3() {
                        return (d2() + "EQ").substring(1) === "rueEQ";
                    }
                    function d4(W1) {
                        W1.response = (function () {
                            var W2 = 0;
                            if (uj(uB(" Math.random"))) {
                                W2 |= 1;
                            }
                            var W3 = uh(6);
                            if (uj(uB(" setTimeout ")) || W3()) {
                                W2 |= 2;
                            }
                            var W4 = uh(0);
                            if (uj(uB(" Date.now")) || W4()) {
                                W2 |= 4;
                            }
                            var W5 = (function () {
                                var W7 = -1;
                                try {
                                    var W8 = J.Object.getOwnPropertyDescriptor(J, "isSecureContext");
                                    if (W8 === undefined) {
                                        W7 = 2;
                                    } else if (uj(W8.get)) {
                                        W7 = W8.get.apply(J) ? 1 : 0;
                                    }
                                } catch (W9) {}
                                return W7;
                            })();
                            var W6 = (function () {
                                var W7 = "subtle";
                                var W8 = uv(J, "crypto");
                                if (!W8) {
                                    return -1;
                                }
                                if (uL(W8, W7)) {
                                    return -1;
                                }
                                var W9 = uQ(W8, W7);
                                if (W9 != null) {
                                    if (
                                        ["digest", "sign", "importKey"].reduce(function (Wu, Wx) {
                                            return Wu + (uL(W9, Wx) || !uj(uQ(W9, Wx)) ? 1 : 0);
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
                            if (!(W6 < 0 || (W6 && !W5) || (!W6 && W5))) {
                                W2 |= 8;
                            }
                            return W2;
                        })();
                    }
                    var d5;
                    var d6 = u7.tickCallback;
                    var d7 = u7.setDefaultCurrencyFormat;
                    (function (W1) {
                        W1[(W1.PAUSE_GAME = 0)] = "PAUSE_GAME";
                        W1[(W1.RESUME_GAME = 1)] = "RESUME_GAME";
                    })(d5 || (d5 = {}));
                    var d8 = d5.RESUME_GAME;
                    var d9 = false;
                    var dx = Object.create(null);
                    var dG = Object.create(null);
                    var dA = Object.create(null);
                    var dd = Object.create(null);
                    var dX = Object.create(null);
                    var dJ = Object.create(null);
                    var df = Object.create(null);
                    var dW = false;
                    var dR = false;
                    var dS = [];
                    var dH = "Resume";
                    var dE = 0;
                    var dC = 0;
                    var dD = Object.create(null);
                    var dj = undefined;
                    var dL = undefined;
                    function dm(W1) {
                        var W2;
                        var W3;
                        var W4 = W1.payload;
                        if (typeof W4 == "boolean") {
                            W2 = W4;
                            W3 = false;
                        } else {
                            W2 = W4.isBlocked;
                            W3 = W4.shouldFreeze;
                        }
                        if (W2) {
                            dC++;
                            if (W3 && !cc.game.isPaused()) {
                                d6(true)(function () {
                                    if (dC > 0) {
                                        cc.game.pause();
                                    }
                                });
                            }
                            if (dC > 1) {
                                cc.warn("GameEventHandler : Game play UI is already blocked");
                                return;
                            }
                        } else {
                            if (dC === 0) {
                                cc.warn("GameEventHandler : Game play UI is not blocked");
                                return;
                            }
                            dC--;
                            if (cc.game.isPaused()) {
                                cc.game.resume();
                            }
                            if (dC > 0) {
                                return;
                            }
                        }
                        Object.keys(dA).forEach(function (W5) {
                            var W6 = dA[W5];
                            if (W6) {
                                W6(W2);
                            }
                        });
                    }
                    var dv = 0;
                    function dQ(W1) {
                        uP().emit("Game.StateChanged", W1);
                        dH = W1;
                    }
                    function dB(W1, W2) {
                        dX[W1] = W2;
                    }
                    var dI = W("GameEventHandler", {
                        subscribeTransactionInfoChangedEvent: function () {
                            uP().on("Game.TransactionInfoChanged", function (W1) {
                                Object.keys(dX).forEach(function (W2) {
                                    var W3 = dX[W2];
                                    if (W3) {
                                        W3(W1.payload);
                                    }
                                });
                            });
                        },
                        subscribeTransactionInfoRequestEvent: function () {
                            dB("saveInfo", function (W1) {
                                Object.keys(W1).forEach(function (W2) {
                                    dD[W2] = W1[W2];
                                });
                            });
                            uP().on("Game.RequestCurrentTransactionInfo", function (W1) {
                                W1.response = dD;
                            });
                        },
                        subscribeGameSessionRequestEvent: function (W1) {
                            var W2 = uP();
                            W2.on("Game.RequestSession", function (W3) {
                                var W4 = W1.systemModel;
                                var W5 = W4.gameId;
                                var W6 = W4.operatorToken;
                                var W7 = W4.operatorPlayerSession;
                                var W8 = W4.betType;
                                var W9 = W4.platform;
                                var Wu = W4.apiDomain;
                                var Wx = W4.operatorJurisdiction;
                                var WG = W4.gameApiSubdomain;
                                var WA = W1.playerModel;
                                var Wd = WA.token;
                                var WX = WA.playerName;
                                var WJ = WA.playerId;
                                var Wf = WA.currencySymbol;
                                W3.response = {
                                    gameId: W5,
                                    token: Wd,
                                    operatorToken: W6,
                                    sessionId: W7,
                                    playerName: WX,
                                    playerId: WJ,
                                    betType: W8,
                                    platform: W9,
                                    apiDomain: Wu,
                                    gameApiSubdomain: WG,
                                    currencySymbol: Wf,
                                    operatorJurisdictionConfig: Wx,
                                    serviceEngineUrl: W1.systemModel.getFullServiceEngineUrl(),
                                    gameEngineUrl: W1.systemModel.getFullGameEngineUrl(),
                                };
                            });
                            (function (W3, W4) {
                                W3.on(
                                    "Game.TransactionStateStarted",
                                    (function (W5) {
                                        return function (W6) {
                                            W6.response = W5();
                                        };
                                    })(W4),
                                    undefined
                                );
                            })(W2, d3);
                        },
                        addGamePlayUIBlockEventCallback: function (W1, W2) {
                            if (typeof W1 == "function") {
                                W2 = W1;
                                dA.default = W2;
                            } else {
                                dA[W1] = W2;
                            }
                        },
                        subscribeOperatorCurrencyFormatUpdateEvent: function () {
                            var W1 = uP();
                            W1.on("Game.UpdateLocaleCurrencyFormat", function (W2) {
                                var W3 = W2.payload;
                                d7({
                                    groupSeparator: W3.group,
                                    decimalSeparator: W3.separator,
                                });
                                W1.emit("Game.LocaleCurrencyFormatChanged", W3);
                            });
                        },
                        subscribeGameInfoUpdateSuccessEvent: function (W1, W2) {
                            var W3 = uP();
                            W3.on("Game.GameInfoUpdateSuccess", function (W4) {
                                var W5 = W4.payload;
                                W1.updateGameInfo(W5);
                                var W6 = W1.playerModel.playerName;
                                var W7 = W5.dt.ls.si.sid;
                                x1("version: " + W1.systemModel.version + "\nuser: " + W6 + "\nspinid: " + W7);
                                W2(function () {
                                    W3.emit("Game.WalletChangedSuccess");
                                });
                            });
                        },
                        subscribeGameBalanceUpdateEvent: function (W1, W2) {
                            var W3 = uP();
                            W3.on("Game.UpdateTransactionInfo", function (W4) {
                                var W5 = W4.payload;
                                var W6 = (W5.balance || 0) + (W5.freeBalance || 0);
                                if (W1.isGameReplaying) {
                                    dS.push(W6);
                                    if (dS.length === 1) {
                                        W3.once("Game.ReplayQuit", function () {
                                            for (var W7 = 0, W8 = dS.length; W7 < W8; W7++) {
                                                var W9 = dS[W7];
                                                W1.playerModel.balance = W9;
                                                W2(W9);
                                            }
                                            dS = [];
                                        });
                                    }
                                } else {
                                    W1.playerModel.balance = W6;
                                    W2(W6);
                                }
                            });
                        },
                        subscribeGameLoginEvent: function (W1, W2) {
                            var W3 = uP();
                            W3.on("Game.RequestLogin", function (W4) {
                                var W5 = W4.payload;
                                W1.systemModel.betType = W5.betType;
                                W1.playerModel.walletKey = W5.walletKey;
                                if (W2) {
                                    W2();
                                }
                            });
                            W3.on("Game.LoginStateChanged", function (W4) {
                                if (W4.payload === "Complete") {
                                    var W5 = W1.playerModel.playerName;
                                    var W6 = W1.transactionModel.transactionId;
                                    x1("version: " + W1.systemModel.version + "\nuser: " + W5 + "\nspinid: " + W6);
                                }
                            });
                        },
                        subscribeTweaksOnShowEvent: function () {},
                        subscribeTweaksOnDismissEvent: function () {},
                        subscribeGameLayoutInfoRequestEvent: function (W1) {
                            uP().on("Game.RequestLayoutInfo", function (W2) {
                                W2.response = W1;
                            });
                        },
                        subscribeGamePlayUIBlockEvent: function () {
                            var W1 = uP();
                            W1.on("Game.BlockUI", dm);
                            (function (W2) {
                                W2.on("Game.TransactionStatePaused", d4, undefined);
                            })(W1);
                        },
                        subscribeGameConfigRequestEvent: function (W1) {
                            var W2 = uP();
                            var W3 = W1.systemModel;
                            var W4 = W3.version;
                            var W5 = W3.certifiedVersion;
                            var W6 = W3.gameTitle;
                            var W7 = W3.noAudio;
                            var W8 = W3.operatorJurisdiction.replayVersion;
                            W2.on("Game.RequestConfig", function (W9) {
                                W9.response = {
                                    version: W4,
                                    certifiedVersion: W5,
                                    gameTitle: W6,
                                    noAudio: W7,
                                    replaySupported: W8 > 0,
                                    replayVersion: W8,
                                };
                            });
                        },
                        subscribeGameConfigUpdateEvent: function () {
                            uP().on("Game.UpdateConfig", function (W1) {
                                var W2 = W1.payload;
                                if (W2) {
                                    if (W2.retryConfig) {
                                        GA.setRetryHandlerConfig(W2.retryConfig);
                                    }
                                    if (W2.redirectUrl) {
                                        xT.setCustomRedirectUrl(W2.redirectUrl);
                                    }
                                }
                            });
                        },
                        subscribePlayerInfoRequestEvent: function (W1) {
                            uP().on("Game.RequestPlayerInfo", function (W2) {
                                var W3 = W1.playerModel;
                                var W4 = W3.playerId;
                                var W5 = W3.playerName;
                                var W6 = W3.playerNickname;
                                var W7 = W3.currency;
                                var W8 = W3.currencySymbol;
                                var W9 = W3.walletKey;
                                W2.response = {
                                    playerId: W4,
                                    playerName: W5,
                                    playerNickname: W6,
                                    currency: W7,
                                    currencySymbol: W8,
                                    walletKey: W9,
                                };
                            });
                        },
                        subscribeGameReadyEvent: function () {
                            var W1 = uP();
                            W1.on("Shell.BootStateChanged", function (W2) {
                                if (W2.payload === "GameReady") {
                                    W1.emit("Analytics.Event", {
                                        actionName: "LoadGameComplete",
                                    });
                                }
                            });
                        },
                        subscribeGameInfoUpdateEvent: function (W1, W2) {
                            var W3 = uP();
                            W3.on("Game.UpdateGameInfo", function (W4) {
                                var W5 = W4.payload;
                                var W6 = W5.param;
                                var W7 = W5.callback;
                                AV.doAPIRequest(
                                    {
                                        name: "update game info",
                                        apiRequest: W1.updateGameInfo.bind(W1),
                                        apiRequestParam: W6,
                                        errorTitle: shell.I18n.t("General.ErrorChangeFailed"),
                                    },
                                    function (W8, W9) {
                                        if (W7) {
                                            W7(W8, W9);
                                        }
                                        if (!W8 && W9) {
                                            W2(function () {
                                                W3.emit("Game.WalletChangedSuccess");
                                            });
                                        }
                                    }
                                );
                            });
                        },
                        subscribeAudioPlayRateUpdateEvent: function (W1) {
                            if (W1) {
                                uP().on("Game.SetAudioPlayRate", function (W2) {
                                    W1(W2.payload);
                                });
                            } else {
                                cc.warn("subscribeAudioPlayRateUpdateEvent :: did not pass updateAudioPlayRateCallback in initializeGame config");
                            }
                        },
                        subscribeStoredGamesNameRequestEvent: function () {
                            uP().on("Game.RequestGameNames", function (W1) {
                                W1.response = d0.getGameNamesFromStorage();
                            });
                        },
                        subscribeSessionSocketErrorEvent: function (W1) {
                            uP().on("Game.OperatorSocketError", function (W2) {
                                if (W1) {
                                    W1(W2.payload);
                                }
                            });
                        },
                        subscribeSessionSocketConnectedEvent: function (W1) {
                            uP().on("Game.OperatorSocketConnected", function (W2) {
                                if (W1) {
                                    W1(W2.payload);
                                }
                            });
                        },
                        subscribeSessionSocketConnectionStatusRequestEvent: function () {
                            uP().on("Game.RequestOperatorSocketConnectionStatus", function (W1) {
                                var W2 = x7.WebSocket;
                                W1.response = !!W2 && W2.checkOperationSocketConnectionStatus();
                            });
                        },
                        subscribeInUIIdleStateStatusUpdateEvent: function () {
                            uP().on("Game.InUIIdleState", function (W1) {
                                d9 = W1.payload;
                                Object.keys(df).forEach(function (W7) {
                                    var W8 = df[W7];
                                    if (W8) {
                                        W8(d9);
                                    }
                                });
                                if (d9) {
                                    var W2 = Object.keys(dJ);
                                    if (W2.length === 0) {
                                        return;
                                    }
                                    dv = 0;
                                    function W3(W7) {
                                        var W8 = dJ[W7];
                                        dv++;
                                        function W9() {
                                            var Wu = Object.keys(dJ);
                                            if (dv < Wu.length) {
                                                W3(Wu[dv]);
                                            }
                                        }
                                        if (W8) {
                                            W8(true, function () {
                                                if (d9) {
                                                    W9();
                                                }
                                            });
                                        } else {
                                            W9();
                                        }
                                    }
                                    W3(W2[0]);
                                } else {
                                    for (var W4 = Object.keys(dJ), W5 = 0; W5 < dv; W5++) {
                                        var W6 = dJ[W4[W5]];
                                        if (W6) {
                                            W6(false);
                                        }
                                    }
                                }
                            });
                        },
                        subscribeGameRequestQuitEvent: function () {
                            uP().on("Game.Quit", function (W1) {
                                xz.quitGameWithEvent(W1.payload || "unknown");
                            });
                        },
                        subscribeGameFlowStateRequestEvent: function () {
                            uP().on("Game.RequestGameFlowState", function (W1) {
                                W1.response = dj;
                            });
                        },
                        subscribeGameEffectStateRequestEvent: function () {
                            uP().on("Game.RequestGameDisplayState", function (W1) {
                                W1.response = dL;
                            });
                        },
                        subscribeUIIdleStateRequestEvent: function () {
                            uP().on("Game.RequestUIIdleState", function (W1) {
                                W1.response = d9;
                            });
                        },
                        subscribeRequestPlayEvent: function (W1) {
                            uP().on("Game.RequestPlay", function (W2) {
                                var W3 = W2.payload.totalBet;
                                function W4(W5, W6) {
                                    var W7;
                                    if (W6) {
                                        W7 = new (0, shell.Error)(shell.ClientError.Domain, W6);
                                    }
                                    if (W2.response) {
                                        W2.response.result = W5;
                                        W2.response.error = W7;
                                    } else {
                                        W2.response = {
                                            result: W5,
                                            error: W7,
                                        };
                                    }
                                }
                                if (!W1.isGameReplaying) {
                                    if (W3 < W1.playerModel.minimumBetAmount) {
                                        W4("InvalidAmount", shell.ClientError.PlayAmountInvalidError);
                                    }
                                }
                                if (!W2.response) {
                                    W4("NoError");
                                }
                            });
                        },
                        emitGameStateChangedEvent: dQ,
                        emitGameFlowStateChangedEvent: function (W1) {
                            dj = W1;
                            uP().emit("Game.FlowStateChanged", W1);
                        },
                        emitGameEffectStateChangedEvent: function (W1) {
                            dL = W1;
                            uP().emit("Game.DisplayStateChanged", W1);
                        },
                        emitGameWinAnnouncement: function () {},
                        emitLoginDoneEvent: function (W1) {
                            var W2 = uP();
                            var W3 = W1.systemModel;
                            var W4 = W3.gameId;
                            var W5 = W3.operatorToken;
                            var W6 = W3.operatorPlayerSession;
                            var W7 = W3.betType;
                            var W8 = W3.platform;
                            var W9 = W3.apiDomain;
                            var Wu = W3.operatorJurisdiction;
                            var Wx = W1.playerModel;
                            var WG = {
                                gameId: W4,
                                token: Wx.token,
                                operatorToken: W5,
                                sessionId: W6,
                                playerName: Wx.playerName,
                                playerId: Wx.playerId,
                                betType: W7,
                                platform: W8,
                                apiDomain: W9,
                                currencySymbol: Wx.currencySymbol,
                                operatorJurisdictionConfig: Wu,
                                serviceEngineUrl: W1.systemModel.getFullServiceEngineUrl(),
                                gameEngineUrl: W1.systemModel.getFullGameEngineUrl(),
                            };
                            W2.emit("Game.SessionChanged", WG);
                        },
                        emitGameLoginEvent: function (W1) {
                            uP().emit("Game.LoginStateChanged", W1);
                        },
                        emitGameNotifyPauseEvent: function () {
                            if (d8 === d5.PAUSE_GAME) {
                                dQ("Pause");
                            }
                        },
                        emitAutoplayStartedEvent: function (W1) {
                            if (dR) {
                                cc.warn("emitAutoplayStartedEvent :: Already in auto spin!");
                            } else {
                                var W2 = uP();
                                dd = function () {
                                    dR = false;
                                    if (W1) {
                                        W1();
                                    }
                                    W2.emit("Game.AutoplayStateChanged", "Stop");
                                };
                                dR = true;
                                W2.emit("Game.AutoplayStateChanged", "Start");
                                W2.once("Game.StopAutoplay", dd);
                            }
                        },
                        emitAutoplayStoppedEvent: function () {
                            if (dR) {
                                dR = false;
                                var W1 = uP();
                                W1.emit("Game.AutoplayStateChanged", "Stop");
                                W1.off("Game.StopAutoplay", dd);
                            } else {
                                cc.warn("emitAutoplayStoppedEvent :: Not in auto spin!");
                            }
                        },
                        emitErrorLogEvent: function (W1, W2) {
                            uP().emit("Error.Log", {
                                tag: W1,
                                message: W2,
                            });
                        },
                        emitGamePlayUIBlockEvent: function (W1) {
                            uP().emit("Game.BlockUI", W1);
                        },
                        emitRequestPlayEvent: function (W1, W2) {
                            uP().emit("Game.RequestPlay", W1, function (W3) {
                                if (W2) {
                                    W2(!W3.response || W3.response.result === "NoError");
                                }
                            });
                        },
                        subscribeGamePauseEvent: function () {
                            var W1 = uP();
                            W1.on("Game.Pause", function (W2) {
                                dE++;
                                if (d8 !== d5.PAUSE_GAME) {
                                    d8 = d5.PAUSE_GAME;
                                    var W3 = W2.payload;
                                    if (!!W3 && W3.isBlocked && !dW) {
                                        W1.emit("Shell.EnableUIBlock", true);
                                        dW = true;
                                    }
                                    Object.keys(dx).forEach(function (W4) {
                                        var W5 = dx[W4];
                                        if (W5) {
                                            W5();
                                        }
                                    });
                                } else {
                                    cc.warn("GameEventHandler : Operator Game State already in PAUSE GAME state!");
                                }
                            });
                        },
                        subscribeGameResumeEvent: function () {
                            var W1 = uP();
                            W1.on("Game.Resume", function () {
                                if (d8 !== d5.RESUME_GAME) {
                                    if (!(--dE > 0)) {
                                        d8 = d5.RESUME_GAME;
                                        if (dW) {
                                            W1.emit("Shell.EnableUIBlock", false);
                                            dW = false;
                                        }
                                        Object.keys(dG).forEach(function (W2) {
                                            var W3 = dG[W2];
                                            if (W3) {
                                                W3();
                                            }
                                        });
                                        if (dH === "Pause") {
                                            dQ("Resume");
                                        }
                                    }
                                } else {
                                    cc.warn("GameEventHandler : Operator Game State already in RESUME GAME state!");
                                }
                            });
                        },
                        addGamePauseEventCallback: function (W1, W2) {
                            dx[W1] = W2;
                            if (d8 === d5.PAUSE_GAME && W2) {
                                W2();
                            }
                        },
                        addGameResumeEventCallback: function (W1, W2) {
                            dG[W1] = W2;
                            if (d8 === d5.RESUME_GAME && W2) {
                                W2();
                            }
                        },
                        removeGamePauseEventCallback: function (W1) {
                            if (Object.keys(dx).indexOf(W1) !== -1) {
                                dx[W1] = undefined;
                            }
                        },
                        removeGameResumeEventCallback: function (W1) {
                            if (Object.keys(dG).indexOf(W1) !== -1) {
                                dG[W1] = undefined;
                            }
                        },
                        addTransactionInfoChangedEventCallback: dB,
                        removeTransactionInfoChangedEventCallback: function (W1) {
                            if (Object.keys(dX).indexOf(W1) !== -1) {
                                dX[W1] = undefined;
                            }
                        },
                        addInUIIdleStateCallback: function (W1, W2, W3) {
                            if (W2) {
                                df[W1] = W3;
                            } else {
                                dJ[W1] = W3;
                            }
                        },
                        removeInUIIdleStateCallback: function (W1) {
                            if (Object.keys(dJ).indexOf(W1) !== -1) {
                                dJ[W1] = undefined;
                            }
                            if (Object.keys(df).indexOf(W1) !== -1) {
                                df[W1] = undefined;
                            }
                        },
                        isGameStatePaused: function () {
                            return d8 === d5.PAUSE_GAME;
                        },
                    });
                    function dh(W1) {
                        (function (W2) {
                            return u3(this, undefined, undefined, function () {
                                var W3;
                                var W4;
                                return u4(this, function (W5) {
                                    switch (W5.label) {
                                        case 0:
                                            (W3 = [uI])[1] = uD;
                                            W3[2] = uM;
                                            return [4, uR(W3)()];
                                        case 1:
                                            if (W5.sent()) {
                                                W4 = (function (W6) {
                                                    return function (W7) {
                                                        return u3(this, undefined, undefined, function () {
                                                            var W8;
                                                            var W9;
                                                            var Wu;
                                                            return u4(this, function (Wx) {
                                                                switch (Wx.label) {
                                                                    case 0:
                                                                        if (typeof W7 == "string") {
                                                                            if ((W8 = J.document[uH("rgetElementById")](W7)) == null) {
                                                                                return [2, false];
                                                                            }
                                                                            W7 = W8;
                                                                        }
                                                                        if (!(W9 = W7[uE("endataset")].rev) || W9.length <= J.Number("0x4")) {
                                                                            return [2, false];
                                                                        } else {
                                                                            Wu = (Wu = W7[uH("etextContent")] || "").trim();
                                                                            return [4, W6(Wu, W9)];
                                                                        }
                                                                    case 1:
                                                                        return [2, Wx.sent()];
                                                                }
                                                            });
                                                        });
                                                    };
                                                })(uK(W2));
                                                return [4, W4(uH("imain-script"))];
                                            } else {
                                                return [3, 3];
                                            }
                                        case 2:
                                            return [2, W5.sent()];
                                        case 3:
                                            return [2, true];
                                    }
                                });
                            });
                        })(uE("stQ22cRMoV3wAHqv52")).then(
                            function (W2) {
                                W1.response = W2;
                                W1.propagate();
                            },
                            function () {
                                W1.response = false;
                                W1.propagate();
                            }
                        );
                        W1.intercept();
                    }
                    function dq(W1, W2, W3) {
                        function W4() {
                            W1.login(function (W5) {
                                var W6;
                                if (W5) {
                                    xc.handleCommonError("Login Error", W5, "Launch", W4);
                                } else {
                                    W6 = W2;
                                    dI.emitLoginDoneEvent(W6);
                                    (uP().on("Game.TransactionStateEnded", dh, undefined),
                                    function (W7) {
                                        if (W7) {
                                            W7();
                                        }
                                    })(W3);
                                }
                            });
                        }
                        W4();
                    }
                    var dM = u7.sequenceCallback;
                    function dF(W1) {
                        var W2 = document.getElementById("game-overlay");
                        var W3 = W2 ? parseFloat(W2.style.height) * 0.5 : 0;
                        var W4 = {
                            label: shell.I18n.t("General.ResourceLoadingMessage"),
                            y: W3,
                            opacity: 1,
                            enableBackground: true,
                            isFullBackground: true,
                            inValue: 0,
                            inDuration: 0.3,
                            outValue: 0,
                            outDuration: 0.3,
                        };
                        uP().emit("Loading.Show", W4);
                        if (W1) {
                            W1();
                        }
                    }
                    function dk() {
                        dI.emitGameLoginEvent("Complete");
                        uP().emit("Loading.Hide");
                    }
                    var dK;
                    var dP;
                    function dU(W1) {
                        var W2;
                        var W3;
                        var W4;
                        dM(
                            dF,
                            (function (W5) {
                                return function (W6) {
                                    var W7;
                                    var W8;
                                    W7 = W5.systemModel.operatorJurisdiction.gamePluginList;
                                    W8 = uU();
                                    W7.forEach(function (W9) {
                                        var Wu = W8.queryBundle(W9.name);
                                        if (Wu) {
                                            W8.destroyBundle(Wu);
                                        }
                                    });
                                    if (W6) {
                                        W6();
                                    }
                                };
                            })(W1.dataSource),
                            ((W3 = W1.apiClient),
                            (W4 = W1.dataSource),
                            function (W5) {
                                dq(W3, W4, W5);
                            }),
                            (function (W5) {
                                return function (W6) {
                                    xV(W5.systemModel.operatorJurisdiction.gamePluginList, W6);
                                };
                            })(W1.dataSource),
                            (function (W5) {
                                return function (W6) {
                                    AV.doAPIRequest({
                                        name: "get game info",
                                        apiRequest: W5.getGameInfo.bind(W5),
                                        apiRequestParam: {},
                                        errorTitle: shell.I18n.t("General.ErrorChangeFailed"),
                                        finalCallback: W6,
                                    });
                                };
                            })(W1.apiClient),
                            ((W2 = W1.refreshWorldCallback),
                            function (W5) {
                                W2(W5);
                            })
                        )(dk);
                    }
                    (function (W1) {
                        W1.bv_$e = "_config";
                        W1.bv_tn = "_map";
                    })(dK || (dK = {}));
                    var dg;
                    var db = [];
                    function dT() {
                        if (!dP) {
                            throw Error("ResourceQualifierHelper :: instance is not init!");
                        }
                    }
                    function dO(W1) {
                        var W2 = cc.assetManager.getBundle(W1);
                        if (!W2) {
                            throw Error(`ResourceQualifierHelper :: bundle ${W1} doesn't exist!`);
                        }
                        return W2;
                    }
                    function ds(W1, W2) {
                        if (!W2 || !W2.language) {
                            var W3 = shell.I18n.locale();
                            var W4 = W3.indexOf("-");
                            if (W4 !== -1) {
                                W2 = W2 || Object.create(null);
                                var W5 = W3.substring(W4 + 1);
                                W2.language = function (W6) {
                                    if (W6 === W5) {
                                        return 1;
                                    } else {
                                        return 0;
                                    }
                                };
                            }
                        }
                        (function (W6) {
                            delete W6.browser;
                            delete W6.os;
                        })(W1);
                        dP = new shell.ResourceQualifier(W1, W2);
                        dZ(cc.resources.name);
                    }
                    function dZ(W1) {
                        dT();
                        if (db.indexOf(W1) === -1) {
                            var W2 = dO(W1);
                            var W3 = dP.assetTable;
                            var W4 = `@${W2.name}/`;
                            var W5 = Object.keys(W2[dK.bv_$e].paths[dK.bv_tn]).map(function (W6) {
                                return `${W4}${W6}`;
                            });
                            db.push(W1);
                            if (W3 && Array.isArray(W3)) {
                                W3.push.apply(W3, W5);
                            } else {
                                dP.setAssetTable(W5, true);
                            }
                        } else {
                            cc.warn(`ResourceQualifierHelper :: addBundle : Bundle ${W1}'s assets are already registered in ResourceQualifier!`);
                        }
                    }
                    W(
                        "ResourceQualifierHelper",
                        Object.freeze({
                            __proto__: null,
                            addBuiltinBundles: function () {
                                var W1 = cc.AssetManager.BuiltinBundleName;
                                for (var W2 in W1) {
                                    var W3 = W1[W2];
                                    if (cc.assetManager.getBundle(W3)) {
                                        dZ(W3);
                                    }
                                }
                            },
                            addBundle: dZ,
                            getResourceURL: function (W1, W2) {
                                dT();
                                if (typeof W1 != "string") {
                                    throw Error(`ResourceQualifierHelper :: getResourceURL : url ${W1} is not string type!`);
                                }
                                var W3;
                                var W4 = !W1.startsWith("@");
                                var W5 = W1;
                                if (W4) {
                                    W3 = `@${cc.resources.name}/`;
                                    W5 = `${W3}${W1}`;
                                }
                                var W6 = dP.getResourceURL(W5, W2);
                                if (W6 && W4) {
                                    W6 = W6.substring(W3.length);
                                }
                                return W6;
                            },
                            init: ds,
                            removeBundle: function (W1) {
                                dT();
                                if (db.indexOf(W1) !== -1) {
                                    var W2 = dO(W1);
                                    var W3 = `@${W2.name}/`;
                                    var W4 = dP.assetTable;
                                    db.splice(db.indexOf(W1), 1);
                                    dP.setAssetTable(
                                        W4.filter(function (W5) {
                                            return !W5.startsWith(W3);
                                        }),
                                        true
                                    );
                                } else {
                                    cc.warn(`ResourceQualifierHelper :: removeBundle : Bundle ${W1}'s assets are not registered in ResourceQualifier yet!`);
                                }
                            },
                        })
                    );
                    (function (W1) {
                        W1.Slot = "slot";
                        W1.Card = "card";
                        W1.Others = "others";
                        W1.RealTime = "rt";
                    })(dg || (dg = {}));
                    var dY = ["GameReplay", "SlotServices", "TSMServices", "TransactionStateMachine", "WebSocket"];
                    var dw = ["TSMServices", "TransactionStateMachine", "WebSocket"];
                    var dl = ["WebSocket"];
                    var dN = new ((function () {
                        function W1() {}
                        Object.defineProperty(W1.prototype, "context", {
                            get: function () {
                                return this.bv_en;
                            },
                            set: function (W2) {
                                this.bv_en = W2;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        return W1;
                    })())();
                    var dz = {
                        position: "relative",
                        fontSize: "12px",
                        color: "white",
                        right: "-15px",
                        animation: "fade 0.5s linear 0s 1 normal forwards",
                        textAlign: "center",
                        width: "25px",
                    };
                    var dy = {
                        position: "relative",
                        fontSize: "12px",
                        color: "white",
                        right: "-38px",
                        bottom: "18px",
                        animation: "fadeAway 0.25s linear 0s 1 normal forwards",
                    };
                    var dc = (function (W1) {
                        function W2(W3) {
                            var W4 = W1.call(this, W3) || this;
                            W4.bv_nn = false;
                            W4.bv_in = false;
                            W4.bv_rn = false;
                            W4.bv_an = 0;
                            W4.bv_on = 0;
                            W4.bv_un = function (W6) {
                                var W7 = document[W4.bv_cn];
                                if ((W7 = W7 || W6.hidden)) {
                                    W4.bv_sn();
                                } else {
                                    W4.bv_ln();
                                }
                            };
                            W4.bv_fn = function () {
                                if (W4.bv_hn.current) {
                                    W4.bv_hn.current.style.animation = "scaling 0.5s linear 0s infinite alternate";
                                    W4.bv_hn.current.removeEventListener("animationend", W4.bv_fn);
                                }
                            };
                            W4.bv_dn = W3.recordTimeLimit;
                            W4.bv_vn = W3.recordTimeLimit;
                            W4.state = {
                                timer: W4.bv_dn,
                            };
                            W4.bv_mn = W4.bv_ln.bind(W4);
                            W4.bv_bn = W4.bv_sn.bind(W4);
                            var W5 = dN.context.event;
                            W5.on("Game.PauseReplay", W4.bv_sn, W4);
                            W5.on("Game.ResumeReplay", W4.bv_ln, W4);
                            W4.bv_hn = m.createRef();
                            return W4;
                        }
                        u0(W2, W1);
                        W2.prototype.shouldComponentUpdate = function (W3, W4) {
                            return !(this.state.timer > 0 && this.state.timer === W4.timer);
                        };
                        W2.prototype.componentDidUpdate = function () {
                            if (this.props.recordState === 3) {
                                if (this.state.timer === 10) {
                                    if (this.props.updateRecordBtnStyleCallback) {
                                        this.props.updateRecordBtnStyleCallback();
                                    }
                                } else if (this.state.timer === 5 && this.bv_hn.current) {
                                    this.bv_hn.current.style.animation = "scaling 0.5s linear 0s infinite alternate";
                                }
                            }
                            if (this.state.timer <= 0) {
                                this.bv_pn();
                                clearInterval(this.bv_gn);
                                this.props.updateRecordBtnCallback();
                                return;
                            }
                            if (this.props.recordState === 4) {
                                this.bv_pn();
                                clearInterval(this.bv_gn);
                                if (this.bv_hn.current) {
                                    this.bv_hn.current.removeEventListener("animationend", this.bv_fn);
                                }
                            }
                        };
                        W2.prototype.componentDidMount = function () {
                            this.bv_Sn();
                            this.bv_yn();
                            if (this.state.timer <= 10) {
                                if (this.props.updateRecordBtnStyleCallback) {
                                    this.props.updateRecordBtnStyleCallback();
                                }
                                if (this.state.timer <= 5 && this.bv_hn.current) {
                                    this.bv_hn.current.addEventListener("animationend", this.bv_fn);
                                }
                            }
                        };
                        W2.prototype.componentWillUnmount = function () {
                            this.bv_pn();
                            clearInterval(this.bv_gn);
                            var W3 = dN.context.event;
                            W3.off("Game.PauseReplay", this.bv_sn, this);
                            W3.off("Game.ResumeReplay", this.bv_ln, this);
                        };
                        W2.prototype.render = function () {
                            if (this.state.timer > 10) {
                                return null;
                            }
                            var W3 = (function (W4) {
                                switch (W4) {
                                    case 3:
                                        return dz;
                                    case 4:
                                        return dy;
                                    default:
                                        return;
                                }
                            })(this.props.recordState);
                            return m.createElement(
                                "span",
                                {
                                    className: "replay-record-time",
                                    style: W3,
                                    ref: this.bv_hn,
                                },
                                this.state.timer
                            );
                        };
                        W2.prototype.bv_yn = function () {
                            this.bv_an = Date.now();
                            this.bv_Gn();
                        };
                        W2.prototype.bv_Gn = function () {
                            this.bv_wn();
                            this.bv_gn = J.setInterval(this.bv_wn.bind(this), 1000);
                        };
                        W2.prototype.bv_wn = function () {
                            var W3 = Date.now() - this.bv_an;
                            var W4 = Math.floor(W3 / 1000);
                            this.bv_dn = this.bv_vn - W4;
                            if (this.bv_dn <= 10) {
                                this.setState({
                                    timer: this.bv_dn,
                                });
                            }
                        };
                        W2.prototype.bv_ln = function (W3) {
                            this.bv_rn = W3 !== undefined;
                            if (!(this.bv_in && !this.bv_rn)) {
                                if (this.bv_nn) {
                                    this.bv_nn = false;
                                    this.bv_an = Date.now() - this.bv_on;
                                    this.bv_Gn();
                                }
                                this.bv_in = false;
                            }
                        };
                        W2.prototype.bv_sn = function (W3) {
                            if (!this.bv_in) {
                                if (!this.bv_nn) {
                                    this.bv_nn = true;
                                    this.bv_on = Date.now() - this.bv_an;
                                    clearInterval(this.bv_gn);
                                }
                                this.bv_in = W3 !== undefined;
                            }
                        };
                        W2.prototype.bv_Sn = function () {
                            if (document.hidden !== undefined) {
                                this.bv_cn = "hidden";
                            } else if (document.mozHidden !== undefined) {
                                this.bv_cn = "mozHidden";
                            } else if (document.msHidden !== undefined) {
                                this.bv_cn = "msHidden";
                            } else if (document.webkitHidden !== undefined) {
                                this.bv_cn = "webkitHidden";
                            }
                            if (this.bv_cn) {
                                this.bv_Cn = [
                                    "visibilitychange",
                                    "mozvisibilitychange",
                                    "msvisibilitychange",
                                    "webkitvisibilitychange",
                                    "qbrowserVisibilityChange",
                                ];
                                for (var W3 = 0, W4 = this.bv_Cn.length; W3 < W4; W3++) {
                                    document.addEventListener(this.bv_Cn[W3], this.bv_un);
                                }
                            } else {
                                J.addEventListener("blur", this.bv_bn);
                                J.addEventListener("focus", this.bv_mn);
                            }
                        };
                        W2.prototype.bv_pn = function () {
                            if (this.bv_cn) {
                                for (var W3 = 0, W4 = this.bv_Cn.length; W3 < W4; W3++) {
                                    document.removeEventListener(this.bv_Cn[W3], this.bv_un);
                                }
                            } else {
                                J.removeEventListener("blur", this.bv_bn);
                                J.removeEventListener("focus", this.bv_mn);
                            }
                        };
                        return W2;
                    })(m.Component);
                    var dV = {
                        backgroundColor: "rgb(48, 48, 60, 0)",
                    };
                    var dp = {
                        animation: "condense 0.3s ease-in-out 0s 1 normal forwards",
                        backgroundColor: "rgb(48, 48, 60, 0)",
                    };
                    var X0 = {
                        backgroundColor: "rgb(48, 48, 60, 1)",
                    };
                    var X1 = {
                        animation: "condense 0.3s ease-in-out 0s 1 normal forwards",
                        backgroundColor: "rgb(48, 48, 60, 1)",
                    };
                    var X2 = {
                        pointerEvents: "none",
                        opacity: "0.5",
                    };
                    var X3 = {
                        animation: "condense 0.3s ease-in-out 0s 1 normal forwards",
                        pointerEvents: "none",
                        opacity: "0.5",
                    };
                    var X4 = {
                        animation: "condense 0.3s ease-in-out 0s 1 normal forwards",
                        pointerEvents: "none",
                    };
                    var X5 = {
                        pointerEvents: "none",
                    };
                    var X6 = {
                        position: "relative",
                        display: "flex",
                        width: "36px",
                        height: "inherit",
                        justifyContent: "center",
                        alignItems: "center",
                    };
                    var X7 = {
                        position: "relative",
                        width: "36px",
                        height: "inherit",
                        justifyContent: "center",
                        alignItems: "center",
                    };
                    var X8 = {
                        width: "36px",
                        height: "inherit",
                    };
                    var X9 = {
                        position: "absolute",
                        width: "28px",
                        height: "28px",
                        borderRadius: "50%",
                        backgroundColor: "white",
                        transform: "translate(4px, 4px)",
                    };
                    var Xu = {
                        position: "absolute",
                        width: "24px",
                        height: "24px",
                        borderRadius: "50%",
                        backgroundColor: "rgb(48, 48, 60)",
                        transform: "translate(6px, 6px)",
                    };
                    var Xx = {
                        position: "absolute",
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        backgroundColor: "rgb(255, 8, 69)",
                        transform: "translate(8px, 8px)",
                    };
                    var XG = {
                        position: "absolute",
                        width: "12px",
                        height: "12px",
                        borderRadius: "2px",
                        backgroundColor: "rgb(255, 8, 69)",
                        animation: "fading 0.5s linear 0s infinite alternate",
                        transform: "translate(12px, 12px)",
                    };
                    function XA(W1) {
                        switch (W1) {
                            case 1:
                                return 2;
                            case 3:
                                return 4;
                            case 2:
                            case 4:
                                return W1;
                            default:
                                return 1;
                        }
                    }
                    var Xd = (function (W1) {
                        function W2(W3) {
                            var W4 = W1.call(this, W3) || this;
                            W4.bv_vn = 0;
                            W4.state = {
                                recordState: 1,
                                isPause: false,
                            };
                            var W5 = dN.context.event;
                            W5.on("Game.RecordingStopped", W4.bv_Tn, W4);
                            W5.on("Game.PauseReplay", W4.bv_sn, W4);
                            W5.on("Game.ResumeReplay", W4.bv_ln, W4);
                            W4.bv_On = m.createRef();
                            W4.bv_Rn = m.createRef();
                            return W4;
                        }
                        u0(W2, W1);
                        W2.prototype.componentWillUnmount = function () {
                            var W3 = dN.context.event;
                            W3.off("Game.RecordingStopped", this.bv_Tn, this);
                            W3.off("Game.PauseReplay", this.bv_sn, this);
                            W3.off("Game.ResumeReplay", this.bv_ln, this);
                        };
                        W2.prototype.render = function () {
                            var W3 = this;
                            var W4 = this.state.isPause;
                            var W5 = this.state.recordState;
                            var W6 = (function (W7) {
                                switch (W7) {
                                    case 1:
                                    case 2:
                                        return 3;
                                    default:
                                        return 1;
                                }
                            })(W5);
                            return m.createElement(
                                "div",
                                {
                                    id: "replay-record-btn-bg",
                                    style: this.bv_En(W5, W4),
                                    ref: this.bv_On,
                                },
                                m.createElement(
                                    "div",
                                    {
                                        id: "replay-record-btn",
                                        onClick: function () {
                                            W3.setState({
                                                recordState: XA(W5),
                                            });
                                            W3.props.onClickCallback(
                                                W6,
                                                function (W7) {
                                                    W3.bv_vn = W7 || -1;
                                                    W3.setState({
                                                        recordState: W6,
                                                    });
                                                },
                                                true
                                            );
                                        },
                                        style: this.bv_kn(W5, W4),
                                        ref: this.bv_Rn,
                                    },
                                    this.bv_xn(W5)
                                )
                            );
                        };
                        W2.prototype.bv_En = function (W3, W4) {
                            switch (W3) {
                                case 1:
                                case 3:
                                case 2:
                                    if (W4) {
                                        return X0;
                                    } else {
                                        return dV;
                                    }
                                case 4:
                                    if (this.bv_On.current && this.bv_On.current.style.animation) {
                                        if (W4) {
                                            return X1;
                                        } else {
                                            return dp;
                                        }
                                    } else if (W4) {
                                        return X0;
                                    } else {
                                        return dV;
                                    }
                                default:
                                    return;
                            }
                        };
                        W2.prototype.bv_kn = function (W3, W4) {
                            switch (W3) {
                                case 1:
                                case 3:
                                    if (W4) {
                                        return X2;
                                    } else {
                                        return undefined;
                                    }
                                case 2:
                                    if (W4) {
                                        return X2;
                                    } else {
                                        return X5;
                                    }
                                case 4:
                                    if (this.bv_Rn.current && this.bv_Rn.current.style.animation) {
                                        if (W4) {
                                            return X3;
                                        } else {
                                            return X4;
                                        }
                                    } else if (W4) {
                                        return X2;
                                    } else {
                                        return X5;
                                    }
                                default:
                                    return;
                            }
                        };
                        W2.prototype.bv_xn = function (W3) {
                            var W4 = this;
                            switch (W3) {
                                case 1:
                                    return m.createElement(
                                        "span",
                                        {
                                            className: "replay-record-icon-wrapper",
                                            style: X8,
                                        },
                                        m.createElement("span", {
                                            className: "replay-record-base-icon",
                                            style: X9,
                                        }),
                                        m.createElement("span", {
                                            className: "replay-record-base-circle-icon",
                                            style: Xu,
                                        }),
                                        m.createElement("span", {
                                            className: "replay-record-circle-icon",
                                            style: Xx,
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
                                            style: X6,
                                        },
                                        m.createElement(
                                            "span",
                                            {
                                                className: "replay-record-icon-wrapper",
                                                style: X8,
                                            },
                                            m.createElement("span", {
                                                className: "replay-record-base-icon",
                                                style: X9,
                                            }),
                                            m.createElement("span", {
                                                className: "replay-record-base-circle-icon",
                                                style: Xu,
                                            }),
                                            m.createElement("span", {
                                                className: "replay-record-square-icon",
                                                style: XG,
                                            })
                                        ),
                                        this.bv_vn !== -1 &&
                                            m.createElement(dc, {
                                                recordState: 3,
                                                recordTimeLimit: this.bv_vn,
                                                updateRecordBtnCallback: function () {
                                                    W4.setState({
                                                        recordState: 4,
                                                    });
                                                },
                                                updateRecordBtnStyleCallback: function () {
                                                    if (W4.bv_On.current) {
                                                        W4.bv_On.current.style.animation = "expand 0.3s ease-in-out 0s 1 normal forwards";
                                                    }
                                                    if (W4.bv_Rn.current) {
                                                        W4.bv_Rn.current.style.animation = "expand 0.3s ease-in-out 0s 1 normal forwards";
                                                        W4.bv_Rn.current.style.pointerEvents = "auto";
                                                    }
                                                },
                                            })
                                    );
                                case 4:
                                    return m.createElement(
                                        "span",
                                        {
                                            className: "replay-record-container",
                                            style: X7,
                                        },
                                        m.createElement("div", {
                                            className: "loader",
                                        }),
                                        this.bv_vn !== -1 &&
                                            m.createElement(dc, {
                                                recordState: 4,
                                                recordTimeLimit: this.bv_vn,
                                                updateRecordBtnCallback: function () {
                                                    W4.props.onClickCallback(
                                                        1,
                                                        function () {
                                                            W4.setState({
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
                        W2.prototype.bv_Tn = function () {
                            var W3 = this;
                            if (this.bv_On.current) {
                                this.bv_On.current.style.removeProperty("animation");
                            }
                            if (this.bv_Rn.current) {
                                this.bv_Rn.current.style.removeProperty("animation");
                            }
                            this.props.onClickCallback(
                                1,
                                function () {
                                    W3.setState({
                                        recordState: 1,
                                    });
                                },
                                false
                            );
                        };
                        W2.prototype.bv_sn = function () {
                            this.setState({
                                isPause: true,
                            });
                        };
                        W2.prototype.bv_ln = function () {
                            this.setState({
                                isPause: false,
                            });
                        };
                        return W2;
                    })(m.Component);
                    var XX = {
                        pointerEvents: "none",
                    };
                    var XJ = {
                        position: "absolute",
                        width: "16px",
                        height: "16px",
                        borderRadius: "1px",
                        backgroundColor: "rgb(255, 255, 255)",
                        transform: "translate(10.5px, 10.5px)",
                    };
                    var Xf = {
                        position: "absolute",
                        width: "12px",
                        height: "12px",
                        backgroundColor: "rgb(48, 48, 60)",
                        transform: "translate(12.5px, 12.5px)",
                    };
                    var XW = {
                        position: "absolute",
                        width: "6px",
                        height: "18px",
                        backgroundColor: "rgb(48, 48, 60)",
                        transform: "translate(15.5px, 9.5px)",
                    };
                    var XR = {
                        position: "absolute",
                        width: "18px",
                        height: "6px",
                        backgroundColor: "rgb(48, 48, 60)",
                        transform: "translate(9.5px, 15.5px)",
                    };
                    function XS() {
                        var W1 = document.getElementById("replay-capture-effect");
                        if (W1) {
                            var W2 = document.getElementById("game-replay");
                            W1.removeEventListener("animationend", XS);
                            if (W2) {
                                W2.removeChild(W1);
                            }
                        }
                    }
                    function XH(W1) {
                        var W2 = v(true);
                        var W3 = W2[0];
                        var W4 = W2[1];
                        Q(function () {
                            return function () {
                                XS();
                            };
                        }, []);
                        return m.createElement(
                            "div",
                            {
                                id: "replay-capture-btn",
                                onClick: function () {
                                    W4(false);
                                    (function () {
                                        var W5 = document.getElementById("game-replay");
                                        if (W5) {
                                            var W6 = document.createElement("div");
                                            var W7 = document.createAttribute("id");
                                            W7.value = "replay-capture-effect";
                                            W6.setAttributeNode(W7);
                                            W5.appendChild(W6);
                                            W6.style.width = W5.style.width;
                                            W6.style.height = W5.style.height;
                                            W6.style.background = "white";
                                            W6.style.borderRadius = "5px";
                                            W6.style.animation = "captureEffect 0.2s ease-in-out 0s 2 alternate forwards";
                                            W6.addEventListener("animationend", XS);
                                        }
                                    })();
                                    W1.onClickCallback(function () {
                                        W4(true);
                                    });
                                },
                                style: W3 ? undefined : XX,
                            },
                            (function (W5) {
                                if (W5) {
                                    return m.createElement(
                                        "span",
                                        {
                                            className: "replay-capture-container",
                                        },
                                        m.createElement("span", {
                                            className: "replay-capture-base-icon",
                                            style: XJ,
                                        }),
                                        m.createElement("span", {
                                            className: "replay-capture-square-icon",
                                            style: Xf,
                                        }),
                                        m.createElement("span", {
                                            className: "replay-capture-vertical-rec-icon",
                                            style: XW,
                                        }),
                                        m.createElement("span", {
                                            className: "replay-capture-horizontal-rec-icon",
                                            style: XR,
                                        })
                                    );
                                } else {
                                    return m.createElement("div", {
                                        className: "loader",
                                    });
                                }
                            })(W3)
                        );
                    }
                    var XE = {
                        display: "flex",
                        height: "36px",
                        position: "absolute",
                        width: "inherit",
                        justifyContent: "space-between",
                    };
                    var XC = (function (W1) {
                        function W2(W3) {
                            var W4 = W1.call(this, W3) || this;
                            W4.state = {
                                isShow: false,
                            };
                            dN.context.event.on("Game.ShowRecordingUI", W4.bv_In, W4);
                            return W4;
                        }
                        u0(W2, W1);
                        W2.prototype.shouldComponentUpdate = function (W3, W4) {
                            return this.state.isShow !== W4.isShow;
                        };
                        W2.prototype.componentWillUnmount = function () {
                            dN.context.event.off("Game.ShowRecordingUI", this.bv_In, this);
                        };
                        W2.prototype.render = function () {
                            if (this.state.isShow) {
                                return m.createElement(
                                    "div",
                                    {
                                        id: "replay-recording-container-wrapper",
                                        style: XE,
                                    },
                                    m.createElement(Xd, {
                                        onClickCallback: this.props.onReplayRecordClickCallback,
                                    }),
                                    m.createElement(XH, {
                                        onClickCallback: this.props.onReplayCaptureClickCallback,
                                    })
                                );
                            } else {
                                return null;
                            }
                        };
                        W2.prototype.bv_In = function (W3) {
                            this.setState({
                                isShow: W3.payload,
                            });
                        };
                        return W2;
                    })(m.Component);
                    var XD = {
                        color: "white",
                        cursor: "pointer",
                    };
                    var Xj = ["½", "1", "2", "4"];
                    var XL = [0.5, 1, 2, 4];
                    function Xm(W1) {
                        var W2 = v(1);
                        var W3 = W2[0];
                        var W4 = W2[1];
                        return m.createElement(
                            "div",
                            {
                                id: "replay-fast-forward-btn",
                                onClick: function () {
                                    var W5 = (W3 + 1) % Xj.length;
                                    W1.onClickCallback(XL[W5]);
                                    W4(W5);
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
                                        style: XD,
                                    },
                                    `${Xj[W3]}x`
                                )
                            )
                        );
                    }
                    var Xv = {
                        width: "4px",
                        height: "16px",
                        borderRadius: "1.5px",
                        backgroundColor: "rgb(255, 255, 255)",
                        margin: "3px",
                    };
                    var XQ = {
                        borderStyle: "solid",
                        borderWidth: "7px 0 7px 14px",
                        borderColor: "transparent transparent transparent rgb(255, 255, 255)",
                    };
                    function XB(W1) {
                        var W2 = v(false);
                        var W3 = W2[0];
                        var W4 = W2[1];
                        var W5 = W3 ? "replay-play-btn" : "replay-pause-btn";
                        return m.createElement(
                            "div",
                            {
                                id: W5,
                                onClick: function () {
                                    W1.onClickCallback(!W3);
                                    W4(!W3);
                                },
                            },
                            (function (W6) {
                                if (W6) {
                                    return m.createElement(
                                        "span",
                                        {
                                            className: "replay-play-container",
                                        },
                                        m.createElement("span", {
                                            className: "replay-play-icon",
                                            style: XQ,
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
                                            style: Xv,
                                        }),
                                        m.createElement("span", {
                                            className: "replay-pause-icon",
                                            style: Xv,
                                        })
                                    );
                                }
                            })(W3)
                        );
                    }
                    var XI = {
                        width: "12px",
                        height: "12px",
                        borderRadius: "2px",
                        backgroundColor: "rgb(255, 255, 255)",
                    };
                    function Xh(W1) {
                        return m.createElement(
                            "div",
                            {
                                id: "replay-stop-btn",
                                onClick: W1.onClickCallback,
                            },
                            m.createElement(
                                "span",
                                {
                                    className: "replay-stop-container",
                                },
                                m.createElement("span", {
                                    className: "replay-stop-icon",
                                    style: XI,
                                })
                            )
                        );
                    }
                    var Xq = {
                        display: "flex",
                        position: "relative",
                        height: "36px",
                        width: "inherit",
                        justifyContent: "center",
                        margin: "0px 36px",
                    };
                    var XM = (function (W1) {
                        function W2(W3) {
                            var W4 = W1.call(this, W3) || this;
                            W4.state = {
                                isShow: false,
                            };
                            dN.context.event.emit("Game.RequestConfig", undefined, function (W5) {
                                var W6 = W5.response.replayVersion;
                                W4.setState({
                                    isShow: W6 === 2,
                                });
                            });
                            return W4;
                        }
                        u0(W2, W1);
                        W2.prototype.shouldComponentUpdate = function (W3, W4) {
                            return this.state.isShow !== W4.isShow;
                        };
                        W2.prototype.render = function () {
                            if (this.state.isShow) {
                                return m.createElement(
                                    "div",
                                    {
                                        id: "replay-container-wrapper",
                                        style: Xq,
                                    },
                                    m.createElement(
                                        "div",
                                        {
                                            id: "replay-container",
                                        },
                                        m.createElement(Xm, {
                                            onClickCallback: this.props.onFastForwardClickCallback,
                                        }),
                                        m.createElement(XB, {
                                            onClickCallback: this.props.onPauseClickCallback,
                                        }),
                                        m.createElement(Xh, {
                                            onClickCallback: this.props.onStopClickCallback,
                                        })
                                    )
                                );
                            } else {
                                return null;
                            }
                        };
                        return W2;
                    })(m.Component);
                    var XF = {
                        display: "flex",
                        width: "inherit",
                        height: "inherit",
                        flexDirection: "column",
                        justifyContent: "space-between",
                    };
                    var Xk = {
                        position: "relative",
                        height: "calc(100% - 15%)",
                        width: "100%",
                    };
                    var XK = {
                        display: "flex",
                        width: "100%",
                        height: "7%",
                        justifyContent: "space-between",
                    };
                    var XP = {
                        position: "relative",
                        height: "100%",
                        width: "4%",
                    };
                    var XU = {
                        display: "flex",
                        width: "65%",
                        justifyContent: "space-between",
                    };
                    var Xg = {
                        position: "relative",
                        height: "100%",
                        width: "18%",
                    };
                    var Xb = {
                        position: "relative",
                        height: "calc(100% - 92%)",
                        width: "100%",
                        bottom: 0,
                    };
                    var XT = {
                        position: "relative",
                        height: "100%",
                        width: "100%",
                    };
                    var XO = (function (W1) {
                        function _W3(W3) {
                            return W1.call(this, W3) || this;
                        }
                        u0(_W3, W1);
                        _W3.prototype.render = function () {
                            if (this.props.isShow) {
                                return m.createElement(
                                    "div",
                                    {
                                        id: "replay-bg-wrapper",
                                        style: XF,
                                    },
                                    m.createElement("span", {
                                        id: "replay-top-bg",
                                        style: Xk,
                                        onClick: this.props.onClickCallback,
                                    }),
                                    m.createElement(
                                        "span",
                                        {
                                            id: "replay-center-bg-container-wrapper",
                                            style: XK,
                                        },
                                        m.createElement("span", {
                                            id: "replay-left-bg",
                                            style: XP,
                                            onClick: this.props.onClickCallback,
                                        }),
                                        m.createElement(
                                            "span",
                                            {
                                                id: "replay-center-bg-wrapper",
                                                style: XU,
                                            },
                                            m.createElement("span", {
                                                id: "replay-left-center-bg",
                                                style: Xg,
                                                onClick: this.props.onClickCallback,
                                            }),
                                            m.createElement("span", {
                                                id: "replay-right-center-bg",
                                                style: Xg,
                                                onClick: this.props.onClickCallback,
                                            })
                                        ),
                                        m.createElement("span", {
                                            id: "replay-right-bg",
                                            style: XP,
                                            onClick: this.props.onClickCallback,
                                        })
                                    ),
                                    m.createElement("span", {
                                        id: "replay-btm-bg",
                                        style: Xb,
                                        onClick: this.props.onClickCallback,
                                    })
                                );
                            } else {
                                return m.createElement("div", {
                                    id: "replay-bg",
                                    style: XT,
                                    onClick: this.props.onClickCallback,
                                });
                            }
                        };
                        return _W3;
                    })(m.Component);
                    var Xs = {
                        position: "absolute",
                        width: "inherit",
                        height: "inherit",
                    };
                    var XZ = {
                        animation: "show 0.25s linear 0s 1 normal forwards",
                    };
                    var XY = {
                        animation: "hide 0.25s linear 0s 1 normal forwards",
                    };
                    var Xw = (function (W1) {
                        function W2(W3) {
                            var W4 = W1.call(this, W3) || this;
                            W4.state = {
                                isShow: true,
                            };
                            return W4;
                        }
                        u0(W2, W1);
                        W2.prototype.render = function () {
                            var W3 = this;
                            var W4 = this.state.isShow ? XZ : XY;
                            return m.createElement(
                                "div",
                                {
                                    id: "replay-view-wrapper",
                                    style: Xs,
                                },
                                m.createElement(
                                    "div",
                                    {
                                        id: "replay-view",
                                        style: W4,
                                    },
                                    m.createElement(XC, {
                                        onReplayRecordClickCallback: this.props.onReplayRecordClickCallback,
                                        onReplayCaptureClickCallback: this.props.onReplayCaptureClickCallback,
                                    }),
                                    m.createElement(XM, {
                                        onFastForwardClickCallback: this.props.onFastForwardClickCallback,
                                        onPauseClickCallback: this.props.onPauseClickCallback,
                                        onStopClickCallback: this.props.onStopClickCallback,
                                    })
                                ),
                                m.createElement(XO, {
                                    isShow: this.state.isShow,
                                    onClickCallback: function () {
                                        W3.setState({
                                            isShow: !W3.state.isShow,
                                        });
                                    },
                                })
                            );
                        };
                        return W2;
                    })(m.Component);
                    function Xl(W1, W2) {
                        var W3 = [];
                        W1.forEach(function (W4) {
                            W3.push(
                                (function (W5, W6, W7) {
                                    if (W6 === undefined) {
                                        W6 = {
                                            x: 0,
                                            y: 0,
                                            width: 0,
                                            height: 0,
                                            isRotate: false,
                                        };
                                    }
                                    return new Promise(function (W8, W9) {
                                        var Wu = new plugin.Loader();
                                        Wu.onLoad = function (Wx) {
                                            var WG = document.createElement("canvas");
                                            var WA = WG.getContext("2d");
                                            if (WA !== null) {
                                                var Wd = new Image();
                                                Wd.onload = function () {
                                                    URL.revokeObjectURL(Wd.src);
                                                    var WX = W6.width === 0 ? Wd.width : W6.width;
                                                    var WJ = W6.height === 0 ? Wd.height : W6.height;
                                                    WG.width = WX;
                                                    WG.height = WJ;
                                                    WA.clearRect(0, 0, WX, WJ);
                                                    WA.translate(WX / 2, WJ / 2);
                                                    if (W6.isRotate) {
                                                        WA.rotate((Math.PI * 270) / 180);
                                                        WA.drawImage(Wd, W6.x, W6.y, WJ, WX, -WJ / 2, -WX / 2, WJ, WX);
                                                    } else {
                                                        WA.drawImage(Wd, W6.x, W6.y, WX, WJ, -WX / 2, -WJ / 2, WX, WJ);
                                                    }
                                                    var Wf = WA.getImageData(0, 0, WX, WJ);
                                                    var WW = Wf.data;
                                                    if (W7) {
                                                        for (var WR = 0, WS = WW.length; WR < WS; WR += 4) {
                                                            WW[WR] = W7.r;
                                                            WW[WR + 1] = W7.g;
                                                            WW[WR + 2] = W7.b;
                                                        }
                                                    }
                                                    WA.putImageData(Wf, 0, 0);
                                                    W8(WG.toDataURL());
                                                };
                                                Wd.onerror = function () {
                                                    W9(Error("ImageBase64 load image failed"));
                                                };
                                                Wd.src = URL.createObjectURL(Wx.response);
                                            }
                                        };
                                        Wu.onError = function (Wx) {
                                            W9(Wx);
                                        };
                                        Wu.load([
                                            {
                                                src: W5,
                                                type: plugin.LoadType.Blob,
                                            },
                                        ]);
                                    });
                                })(
                                    W4.resolvePath,
                                    {
                                        x: 0,
                                        y: 0,
                                        width: 0,
                                        height: 0,
                                    },
                                    W4.colour
                                )
                            );
                        });
                        Promise.all(W3)
                            .then(function (W4) {
                                var W5 = [];
                                W4.forEach(function (W6) {
                                    W5.push(W6);
                                });
                                W2(W5, undefined);
                            })
                            .catch(function (W4) {
                                W2(undefined, W4);
                            });
                    }
                    var XN = {};
                    function Xz(W1, W2) {
                        var W3 = new plugin.Loader();
                        return new Promise(function (W4, W5) {
                            W3.onLoad = function (W6) {
                                W4(W6.response);
                            };
                            W3.onError = function (W6) {
                                W5(W6);
                            };
                            W3.load([
                                {
                                    src: W1,
                                    type: plugin.LoadType.Image,
                                    maxAttemptCount: W2,
                                },
                            ]);
                        });
                    }
                    function Xy(W1, W2, W3) {
                        var W4 = new plugin.Loader();
                        return new Promise(function (W5, W6) {
                            W4.onLoad = function (W7) {
                                var W8 = (function (W9, Wu) {
                                    return W9.replace(/url\((.*?)\)/g, function (Wx, WG) {
                                        return "url(" + Wu.resource.resolveUrl(WG) + ")";
                                    });
                                })(W7.response, W2);
                                W5(W8);
                            };
                            W4.onError = function (W7) {
                                W6(W7);
                            };
                            W4.load([
                                {
                                    src: W1,
                                    type: plugin.LoadType.Text,
                                    maxAttemptCount: W3,
                                },
                            ]);
                        });
                    }
                    var Xc = (function (W1) {
                        function W2() {
                            var W3 = (W1 !== null && W1.apply(this, arguments)) || this;
                            W3.rootElement = Object.create(null);
                            W3.bv_jn = undefined;
                            W3.bv_An = undefined;
                            return W3;
                        }
                        u0(W2, W1);
                        W2.prototype.onCreate = function () {
                            var W3 = this;
                            this.rootElement = document.createElement("div");
                            var W4 = document.createAttribute("id");
                            W4.value = "game-replay";
                            this.rootElement.setAttributeNode(W4);
                            this.rootElement.style.visibility = "hidden";
                            this.rootElement.style.position = "relative";
                            this.rootElement.setAttribute("tabindex", "100");
                            (function (W6, W7, W8) {
                                var W9;
                                var Wu = this;
                                var Wx = W6.src;
                                var WG = "unknown";
                                WG = Wx.indexOf(".css") !== -1 ? "css" : WG;
                                WG = (W9 = Wx).indexOf(".jpg") !== -1 || W9.indexOf(".png") !== -1 ? "image" : WG;
                                var WA = shell.Error;
                                var Wd = shell.ClientError;
                                var WX = WA && new WA(Wd.Domain, Wd.GameLoadResourceError);
                                var WJ = W7.resource.resolveUrl(Wx);
                                return new Promise(function (Wf, WW) {
                                    return __awaiter(Wu, undefined, undefined, function () {
                                        var WR;
                                        return __generator(this, function (WS) {
                                            switch (WS.label) {
                                                case 0:
                                                    WS.trys.push([0, 9, , 10]);
                                                    if (WG !== "image") {
                                                        return [3, 5];
                                                    } else if (W6.tint) {
                                                        return [
                                                            4,
                                                            ((WH = [
                                                                {
                                                                    resolvePath: WJ,
                                                                    colour: W6.tint,
                                                                },
                                                            ]),
                                                            new Promise(function (WE, WC) {
                                                                Xl(WH, function (WD, Wj) {
                                                                    if (Wj || (WD && WD.length === 0)) {
                                                                        var WL = shell.Error;
                                                                        var Wm = shell.ClientError;
                                                                        var Wv = WL && new WL(Wm.Domain, Wm.GameLoadResourceError);
                                                                        WC(Wj || Wv);
                                                                    }
                                                                    WE(WD);
                                                                });
                                                            })),
                                                        ];
                                                    } else {
                                                        return [3, 2];
                                                    }
                                                case 1:
                                                    WR = WS.sent();
                                                    Wf(WR[0]);
                                                    return [3, 4];
                                                case 2:
                                                    return [4, Xz(WJ, W8)];
                                                case 3:
                                                    WR = WS.sent();
                                                    Wf(WR);
                                                    WS.label = 4;
                                                case 4:
                                                    return [3, 8];
                                                case 5:
                                                    if (WG !== "css") {
                                                        return [3, 7];
                                                    } else {
                                                        return [4, Xy(WJ, W7, W8)];
                                                    }
                                                case 6:
                                                    WR = WS.sent();
                                                    Wf(WR);
                                                    return [3, 8];
                                                case 7:
                                                    WW(WX);
                                                    WS.label = 8;
                                                case 8:
                                                    return [3, 10];
                                                case 9:
                                                    WS.sent();
                                                    WW(WX);
                                                    return [3, 10];
                                                case 10:
                                                    return [2];
                                            }
                                            var WH;
                                        });
                                    });
                                });
                            })(
                                {
                                    src: "game_replay.css",
                                },
                                this.context
                            ).then(function (W6) {
                                (function (W7, W8) {
                                    var W9 = [];
                                    var Wu = W8.bundleInfo.name;
                                    if (!XN[Wu]) {
                                        XN[Wu] = [];
                                    }
                                    if (!Array.isArray(W7)) {
                                        W7 = [W7];
                                    }
                                    var Wx = XN[Wu].length + 1;
                                    W7.forEach(function (WG, WA) {
                                        var Wd = Wx + WA;
                                        var WX = "$CSS-" + W8.bundleInfo.name + "-" + Wd;
                                        W9.push(WX);
                                        (function (WJ, Wf, WW) {
                                            if (XN[Wf].indexOf(WJ) === -1) {
                                                var WR = document.createElement("style");
                                                WR.id = WJ;
                                                WR.innerHTML = WW;
                                                document.head.appendChild(WR);
                                                XN[Wf].push(WJ);
                                            }
                                        })(WX, W8.bundleInfo.name, WG);
                                    });
                                })(W6, W3.context);
                            });
                            var W5 = this.context.event;
                            W5.on("Shell.Scaled", this.bv_Nn, this);
                            W5.on("Game.ReplayStarting", this.bv_Pn, this);
                            W5.on("Game.ReplayEnded", this.bv__n, this);
                            dN.context = this.context;
                        };
                        W2.prototype.bv_Nn = function (W3) {
                            var W4 = W3.payload;
                            this.rootElement.style.width = `${W4.width}px`;
                            this.rootElement.style.height = `${W4.height}px`;
                        };
                        W2.prototype.bv_Ln = function (W3) {
                            W3.stopPropagation();
                        };
                        W2.prototype.bv_Pn = function () {
                            var W3 = this;
                            this.context.view.appendTo(W2, "overlay");
                            this.rootElement.style.visibility = "visible";
                            this.rootElement.focus();
                            this.context.event.on("Shell.FocusCanvas", this.bv_Ln, this, "High");
                            B.render(
                                m.createElement(Xw, {
                                    onReplayCaptureClickCallback: function (W4) {
                                        W3.bv_jn = W4;
                                        W3.context.event.emit("Game.Screenshot", undefined, function () {
                                            W3.context.event.emit("Analytics.Event", {
                                                actionName: "CaptureReplay",
                                            });
                                            var W5 = W3.bv_jn;
                                            if (W5) {
                                                W5();
                                            }
                                            W3.bv_jn = undefined;
                                        });
                                    },
                                    onReplayRecordClickCallback: function (W4, W5, W6) {
                                        W3.bv_An = W5;
                                        function W7(W9) {
                                            if (W4 === 3) {
                                                W3.context.event.emit("Analytics.Event", {
                                                    actionName: "RecordReplay",
                                                });
                                            }
                                            var Wu = W3.bv_An;
                                            if (Wu) {
                                                Wu(W9);
                                            }
                                            W3.bv_An = undefined;
                                        }
                                        if (W6) {
                                            var W8 = (function (W9) {
                                                switch (W9) {
                                                    case 1:
                                                        return "Game.StopRecording";
                                                    case 3:
                                                        return "Game.StartRecording";
                                                    default:
                                                        return;
                                                }
                                            })(W4);
                                            if (W8) {
                                                W3.context.event.emit(W8, undefined, function (W9) {
                                                    var Wu = W9.response && W9.response.timeLimit;
                                                    W7(Wu);
                                                });
                                            }
                                        } else {
                                            W7();
                                        }
                                    },
                                    onFastForwardClickCallback: function (W4) {
                                        W3.context.event.emit("Game.SetReplaySpeed", W4);
                                    },
                                    onPauseClickCallback: function (W4) {
                                        var W5 = W4 ? "Game.PauseReplay" : "Game.ResumeReplay";
                                        W3.context.event.emit(W5);
                                    },
                                    onStopClickCallback: function () {
                                        W3.context.event.emit("Game.StopReplay");
                                        W3.context.event.emit("Analytics.Event", {
                                            actionName: "ManualStopReplay",
                                        });
                                    },
                                }),
                                this.rootElement
                            );
                        };
                        W2.prototype.bv__n = function () {
                            this.rootElement.style.visibility = "hidden";
                            this.bv_jn = undefined;
                            this.bv_An = undefined;
                            B.unmountComponentAtNode(this.rootElement);
                            this.view.removeFromParent(W2);
                            this.context.event.off("Shell.FocusCanvas", this.bv_Ln, this);
                        };
                        return W2;
                    })(plugin.AbstractViewComponent);
                    var XV = undefined;
                    var Xp = undefined;
                    var ga = undefined;
                    var J0 = undefined;
                    function J1(W1) {
                        if (x7.TransactionStateMachine && W1) {
                            return W1(x7.TransactionStateMachine);
                        }
                        throw Error("[BVFramework] ERROR: TransactionStateMachine function called but module not found!");
                    }
                    function J2() {
                        XV = undefined;
                        Xp = undefined;
                    }
                    var J3 = W("TransactionStateMachineHandler", {
                        initTransactionStateMachine: function (W1) {
                            J1(function (W2) {
                                W2.initTransactionStateMachine(W1);
                            });
                        },
                        goTo: function (W1, W2, W3) {
                            J1(function (W4) {
                                W4.goTo(W1, W2, W3);
                            });
                        },
                        subscribeStateEvent: function (W1, W2) {
                            J1(function (W3) {
                                W3.subscribeStateEvent(W1, W2);
                            });
                        },
                        unsubscribeStateEvent: function (W1, W2) {
                            J1(function (W3) {
                                W3.unsubscribeStateEvent(W1, W2);
                            });
                        },
                        getState: function () {
                            return J1(function (W1) {
                                return W1.getState();
                            });
                        },
                        getNextState: function () {
                            return J1(function (W1) {
                                return W1.getNextState();
                            });
                        },
                        addTransition: function (W1, W2) {
                            if (W2 === undefined) {
                                W2 = false;
                            }
                            J1(function (W3) {
                                W3.addTransition(W1, W2);
                            });
                        },
                        pause: function () {
                            J1(function (W1) {
                                W1.pause();
                            });
                        },
                        resume: function () {
                            J1(function (W1) {
                                W1.resume();
                            });
                        },
                        initState: function (W1) {
                            J1(function (W2) {
                                W2.initTransactionStateMachine(W1);
                            });
                        },
                        setTransitionData: function (W1) {
                            XV = W1;
                        },
                        getTransitionData: function () {
                            return XV;
                        },
                        hasOnHoldTransition: function () {
                            return Xp !== undefined;
                        },
                        goToStateCallback: function (W1, W2, W3) {
                            if (W2 === undefined) {
                                W2 = false;
                            }
                            return function (W4) {
                                J1(function (W5) {
                                    if (Xp) {
                                        throw Error(
                                            "TransactionStateMachineHandler info: goToStateCallback : cannot go to next state (" +
                                                W1 +
                                                ") when previous state transition (" +
                                                W5.getNextState() +
                                                ") is not complete."
                                        );
                                    }
                                    if (W2) {
                                        W5.goTo(
                                            W1,
                                            function (W6, W7) {
                                                XV = u1(u1(u1({}, XV), W6), W3);
                                                Xp = W7;
                                                W4();
                                            },
                                            function () {
                                                var W6 = ga;
                                                ga = undefined;
                                                if (W6) {
                                                    W6();
                                                }
                                            }
                                        );
                                    } else {
                                        W5.goTo(
                                            W1,
                                            function (W6, W7) {
                                                W6 = u1(u1(u1({}, XV), W6), W3);
                                                J2();
                                                W7(undefined, W6);
                                            },
                                            W4
                                        );
                                    }
                                });
                            };
                        },
                        transitionCompleteCallback: function (W1, W2) {
                            return function (W3) {
                                J1(function (W4) {
                                    ga = W3;
                                    var W5 = Xp;
                                    if (!W5) {
                                        throw Error(
                                            "TransactionStateMachineHandler info: transitionCompleteWrapper : no transition to complete. Current completed state: " +
                                                W4.getState()
                                        );
                                    }
                                    if (W1 && W1 !== W4.getNextState()) {
                                        throw Error(
                                            "TransactionStateMachineHandler info: transitionCompleteWrapper : complete incorrect state. Attempted complete state: " +
                                                W1 +
                                                ". State suppose to complete: " +
                                                W4.getNextState()
                                        );
                                    }
                                    var W6 = u1(u1({}, XV), W2);
                                    J2();
                                    W5(undefined, W6);
                                });
                            };
                        },
                        clearTransition: J2,
                        cacheTransitionCallback: function () {
                            J0 = Xp;
                        },
                        retrieveTransitionCallback: function () {
                            if (J0) {
                                Xp = J0;
                                J0 = undefined;
                            }
                        },
                    });
                    var J4 = dI.emitGameFlowStateChangedEvent;
                    var J5 = u7.timeoutCallback;
                    var J6 = u7.getSharedScheduler;
                    var J7 = u7.delayCallback;
                    var J8 = (function () {
                        function W1() {
                            this.bv_Mn = 0;
                            this.bv_Dn = false;
                            this.bv_Un = false;
                            this.bv_Hn = false;
                            this.bv_Bn = false;
                            this.bv_Fn = false;
                            this.bv_Wn = undefined;
                            this.bv_qn = false;
                            this.bv_Vn = this.bv_Qn.bind(this);
                        }
                        W1.prototype.initGameReplay = function (W2, W3) {
                            var W4 = this;
                            if (W3 === undefined) {
                                W3 = this.bv_Vn;
                            }
                            var W5 = uP();
                            this.bv_b = W2;
                            W5.on("Game.RequestReplay", function (W6) {
                                W5.emit("Game.ReplayInitiated");
                                W4.bv_Yn();
                                var W7 = W4.bv_zn(W6.payload);
                                var W8 = W4.bv_Kn(W7);
                                J3.pause();
                                W2.isGameReplaying = true;
                                W2.nextGameReplayInfo = W4.bv_Xn[0];
                                W4.bv_Mn = 0;
                                W4.bv_Dn = false;
                                W4.bv_Un = false;
                                W4.bv_Fn = false;
                                W5.once("Game.WalletChangedSuccess", function () {
                                    Ju();
                                    W5.on("Game.DummyTransactionStateTransition", W4.bv_Zn, W4);
                                    W5.emit("Game.ReplayStarting", undefined, function () {
                                        W5.emit("Game.BlockUI", false, function () {
                                            if (W2.transactionModel.stateTransitionTo === 1) {
                                                W4.bv_Jn = J7(1)(function () {
                                                    W4.bv_Jn = undefined;
                                                    W3();
                                                });
                                            } else {
                                                W5.once("Game.DummyTransactionStateComplete", W4.bv_$n, W4, "High");
                                            }
                                            W5.once("Game.StopReplay", W4.bv_ti, W4);
                                        });
                                    });
                                    W5.on("Game.PauseReplay", W4.bv_ei, W4);
                                    W5.on("Game.ResumeReplay", W4.bv_ni, W4);
                                    W5.on("Game.SetReplaySpeed", W4.bv_ii, W4);
                                });
                                W5.emit("Game.BlockUI", true);
                                J9(function () {
                                    W5.emit("Game.GameInfoUpdateSuccess", W8);
                                });
                                J4({
                                    displayState: "Start",
                                    flowType: "Replay",
                                });
                                W5.on("Game.TransactionInfoChanged", W4.bv_ri, W4, "High");
                                W5.on("Game.GameInfoUpdated", W4.bv_ri, W4, "High");
                                W5.on("Game.TransactionInfoUpdated", W4.bv_ri, W4, "High");
                            });
                        };
                        Object.defineProperty(W1.prototype, "nextReplayAPIResponse", {
                            get: function () {
                                var W2 = this.bv_Xn;
                                if (this.bv_Mn >= W2.length) {
                                    throw Error("GameReplayHandler :: nextReplayAPIResponse : no next data to fetch! Invalid replay data length.");
                                }
                                var W3 = W2[this.bv_Mn];
                                this.bv_Mn++;
                                if (this.bv_Mn < W2.length) {
                                    this.bv_b.nextGameReplayInfo = W2[this.bv_Mn];
                                } else {
                                    this.bv_b.nextGameReplayInfo = undefined;
                                    this.bv_Dn = true;
                                }
                                var W4 = Object.create(null);
                                W4.dt = Object.create(null);
                                W4.dt.si = W3;
                                W4.dt.err = null;
                                return W4;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        W1.prototype.bv_ai = function (W2) {
                            var W3 = this;
                            J9(function () {
                                W3.bv_oi();
                                if (W3.bv_Hn) {
                                    cc.game.resume();
                                    W3.bv_Hn = false;
                                }
                                cc.director.setTimeScale(1);
                                var W4 = uP();
                                W4.emit("Game.SetAudioPlayRate", 1);
                                W4.emit("Game.ReplayEnding", undefined, function () {
                                    var W5 = W3.bv_Wn;
                                    if (W5) {
                                        W5.propagate();
                                    }
                                    W3.bv_Wn = undefined;
                                    W2();
                                });
                            });
                        };
                        W1.prototype.bv_ui = function (W2) {
                            if (!this.bv_qn) {
                                this.bv_Wn = W2;
                                W2.intercept();
                            }
                        };
                        W1.prototype.bv_ti = function (W2, W3) {
                            var W4 = this;
                            if (W3 === undefined) {
                                W3 = false;
                            }
                            var W5 = uP();
                            W5.emit("Game.ReplayEnded");
                            W5.off("Game.PauseReplay", this.bv_ei, this);
                            W5.off("Game.ResumeReplay", this.bv_ni, this);
                            W5.off("Game.SetReplaySpeed", this.bv_ii, this);
                            W5.off("Game.StopReplay", this.bv_ti, this);
                            if (this.bv_ci) {
                                var W6 = this.bv_ci;
                                this.bv_ci = undefined;
                                W6();
                                this.bv_ai(this.bv_si.bind(this));
                                return;
                            }
                            if (this.bv_Jn) {
                                this.bv_Jn();
                                this.bv_Jn = undefined;
                                this.bv_ai(this.bv_si.bind(this));
                                return;
                            }
                            this.bv_Dn = true;
                            this.bv_Un = true;
                            this.bv_qn = false;
                            if (J3.getNextState() === undefined) {
                                W5.once("Game.DummyTransactionStateTransition", this.bv_ui, this, "High");
                            } else {
                                W5.once("Game.DummyTransactionStateComplete", this.bv_ui, this);
                            }
                            this.bv_ai(function () {
                                if (!W4.bv_Fn) {
                                    W4.bv_Vn();
                                    J6().schedule(W4.bv_Vn, 0.5, cc.macro.REPEAT_FOREVER, 0);
                                }
                                W4.bv_qn = true;
                                if (W3) {
                                    W4.bv_si();
                                }
                            });
                        };
                        W1.prototype.bv_ii = function (W2) {
                            cc.director.setTimeScale(W2.payload);
                            if (W2.payload >= 0) {
                                uP().emit("Game.SetAudioPlayRate", W2.payload);
                            }
                        };
                        W1.prototype.bv_ei = function () {
                            if (!this.bv_Hn) {
                                this.bv_Hn = true;
                                cc.game.pause();
                            }
                        };
                        W1.prototype.bv_ni = function () {
                            if (this.bv_Hn) {
                                this.bv_Hn = false;
                                cc.game.resume();
                            }
                        };
                        W1.prototype.bv_$n = function (W2) {
                            W2.intercept();
                            J5(1)(function () {
                                W2.propagate();
                            });
                        };
                        W1.prototype.bv_Qn = function () {
                            uP().emit("Game.SkipEvent");
                        };
                        W1.prototype.bv_zn = function (W2) {
                            var W3 = this.bv_b.lastTransactionRawData;
                            if (typeof W2 == "object" && W2 !== null) {
                                if (W2.replayType === "Spin" || W2.replayData.length === 1) {
                                    this.bv_Xn = W2.replayData;
                                } else {
                                    this.bv_Xn = (function (W5, W6, W7) {
                                        for (var W8 = W6, W9 = W6, Wu = W6; Wu >= 0; Wu--) {
                                            if (Jx(W5[Wu].st, W7)) {
                                                W9 = Wu;
                                                break;
                                            }
                                        }
                                        Wu = W6;
                                        for (var Wx = W5.length; Wu < Wx; Wu++) {
                                            if (Jx(W5[Wu].nst, W7)) {
                                                W8 = Wu;
                                                break;
                                            }
                                        }
                                        return W5.slice(W9, W8 + 1);
                                    })(W2.replayData, W2.selectedIndex, this.bv_b.systemModel.gameId);
                                    var W4 = W2.replayData.indexOf(this.bv_Xn[0]);
                                    if (W4 !== 0) {
                                        W3 = W2.replayData[W4 - 1];
                                    }
                                }
                            } else {
                                this.bv_Xn = W2;
                            }
                            return W3;
                        };
                        W1.prototype.bv_Zn = function (W2) {
                            var W3 = this;
                            if (!this.bv_Fn) {
                                if (W2.payload.to === "action" && this.bv_Dn) {
                                    this.bv_Fn = true;
                                    J6().unschedule(this.bv_Vn);
                                    W2.intercept();
                                    this.bv_li = function () {
                                        W2.propagate();
                                    };
                                    if (this.bv_Un) {
                                        this.bv_si();
                                    } else {
                                        this.bv_ci = J7(1)(function () {
                                            W3.bv_ci = undefined;
                                            uP().emit("Analytics.Event", {
                                                actionName: "AutoStopReplay",
                                            });
                                            W3.bv_ti(undefined, true);
                                        });
                                    }
                                }
                            }
                        };
                        W1.prototype.bv_si = function () {
                            var W2 = this;
                            var W3 = uP();
                            W3.once("Game.WalletChangedSuccess", function () {
                                W2.bv_b.isGameReplaying = false;
                                W2.bv_fi();
                                W3.emit("Game.ReplayQuit");
                                J4({
                                    displayState: "End",
                                    flowType: "Replay",
                                });
                                Ju();
                                J3.resume();
                                W3.off("Game.DummyTransactionStateTransition", W2.bv_Zn, W2);
                                W3.off("Game.DummyTransactionStateTransition", W2.bv_ui, W2);
                                W3.off("Game.DummyTransactionStateComplete", W2.bv_ui, W2);
                                W3.off("Game.TransactionInfoChanged", W2.bv_ri, W2);
                                W3.off("Game.GameInfoUpdated", W2.bv_ri, W2);
                                W3.off("Game.TransactionInfoUpdated", W2.bv_ri, W2);
                                var W4 = W2.bv_li;
                                W2.bv_li = undefined;
                                if (W4) {
                                    W4();
                                }
                            });
                            W3.emit("Game.GameInfoUpdateSuccess", this.bv_hi);
                        };
                        W1.prototype.bv_Yn = function () {
                            var W2 = this.bv_b;
                            var W3 = Object.assign({}, W2.lastGameInfoRawData);
                            var W4 = Object.assign({}, W2.lastTransactionRawData);
                            var W5 = W3.dt;
                            W5.ls.si = W4;
                            W5.bl = W4.bl;
                            this.bv_hi = W3;
                        };
                        W1.prototype.bv_Kn = function (W2) {
                            var W3 = this.bv_b;
                            var W4 = this.bv_Xn;
                            var W5 = W3.lastGameInfoRawData.dt;
                            var W6 = {
                                is: false,
                                bm: W5.fb ? W5.fb.bm : 0,
                                t: 0,
                            };
                            var W7 = W4[0];
                            var W8 = Object.assign({}, W2);
                            W8.cs = W7.cs;
                            W8.ml = W7.ml;
                            W8.wt = W7.wt;
                            W8.wk = W7.wk;
                            W8.wid = W7.wid;
                            if (W7.wbn) {
                                W8.wbn = Object.assign({}, W7.wbn);
                                W8.wbn.bra = W8.wbn.bra + W7.tbb;
                            } else {
                                W8.wbn = null;
                            }
                            if (W7.wfg) {
                                W8.wfg = Object.assign({}, W7.wfg);
                                W8.wfg.gc++;
                            } else {
                                W8.wfg = null;
                            }
                            return {
                                dt: {
                                    bl: W7.blb,
                                    cs: [W7.cs],
                                    fb: W6,
                                    ls: {
                                        si: W8,
                                    },
                                    ml: [W7.ml],
                                    mxl: W5.mxl,
                                    wt: W5.wt,
                                },
                            };
                        };
                        W1.prototype.bv_ri = function (W2) {
                            W2.stopPropagation();
                        };
                        W1.prototype.bv_oi = function () {
                            var W2 = this;
                            var W3 = uP();
                            W3.emit("Game.RequestAudioState", undefined, function (W4) {
                                if (W4.response === "On") {
                                    W2.bv_Bn = true;
                                    W3.emit("Game.OffAudio");
                                }
                            });
                        };
                        W1.prototype.bv_fi = function () {
                            if (this.bv_Bn) {
                                uP().emit("Game.OnAudio");
                                this.bv_Bn = false;
                            }
                        };
                        return W1;
                    })();
                    function J9(W1) {
                        uN({
                            backgroundColor: {
                                r: 47,
                                g: 47,
                                b: 59,
                                a: 255,
                            },
                        });
                        J5(0.6)(W1);
                    }
                    function Ju() {
                        uz();
                    }
                    function Jx(W1, W2) {
                        switch (W1) {
                            case 1:
                            case 2:
                            case 21:
                                return true;
                            case 3:
                                return W2 === 44;
                            case 31:
                                return W2 === 73 || W2 === 1 || W2 === 9;
                            case 32:
                                return W2 === 67 || W2 === 1 || W2 === 9;
                            case 33:
                                return W2 === 18 || W2 === 1 || W2 === 9;
                            case 34:
                                return W2 === 18;
                            default:
                                return false;
                        }
                    }
                    var JG;
                    var JA;
                    var Jd;
                    var JX;
                    var JJ = new J8();
                    var Jf = Object.freeze({
                        ON_TRANSITION: "onTransition",
                        ON_TRANSITION_FAILED: "onTransitionFailed",
                        ON_TRANSITION_SUCCEED: "onTransitionSucceed",
                    });
                    var JW = (function () {
                        function _W4(W2) {
                            this.bv_di = undefined;
                            this.bv_vi = false;
                            for (var W3 = (this.bv_mi = Object.create(null)), W4 = 0, W5 = W2.length; W4 < W5; W4++) {
                                var W6 = W2[W4].from;
                                if (!W3[W6]) {
                                    W3[W6] = Object.create(null);
                                }
                                W3[W6][W2[W4].to] = [[], []];
                            }
                            this.bv_bi = Object.create(null);
                        }
                        Object.defineProperty(_W4.prototype, "state", {
                            get: function () {
                                return this.bv_pi;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(_W4.prototype, "nextState", {
                            get: function () {
                                return this.bv_gi;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(_W4.prototype, "data", {
                            get: function () {
                                return this.bv_di;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        _W4.prototype.emit = function (W2, W3) {
                            var W4 = this.bv_bi[W2];
                            if (W4) {
                                for (var W5 = [], W6 = 0, W7 = W4.length; W6 < W7; W6++) {
                                    var W8 = W4[W6];
                                    var W9 = W8.func;
                                    var Wu = W8.bindedFunc;
                                    if (W8.once) {
                                        W5.push(this.off.bind(this, W2, W9));
                                    }
                                    if (Wu) {
                                        Wu(W3);
                                    } else {
                                        W9(W3);
                                    }
                                }
                                W5.forEach(function (Wx) {
                                    return Wx();
                                });
                            }
                        };
                        _W4.prototype.once = function (W2, W3, W4) {
                            this._on(W2, W3, W4, true);
                        };
                        _W4.prototype.on = function (W2, W3, W4) {
                            this._on(W2, W3, W4, false);
                        };
                        _W4.prototype.off = function (W2, W3) {
                            var W4 = this.bv_bi[W2];
                            if (W4) {
                                if (W3) {
                                    for (var W5 = 0, W6 = W4.length; W5 < W6; W5++) {
                                        if (W4[W5].func === W3) {
                                            W4.splice(W5, 1);
                                            break;
                                        }
                                    }
                                } else {
                                    W4.length = 0;
                                }
                            }
                        };
                        _W4.prototype._on = function (W2, W3, W4, W5) {
                            var W6 = this.bv_bi;
                            var W7 = W6[W2];
                            if (!W7) {
                                W7 = W6[W2] = [];
                            }
                            W7.push({
                                func: W3,
                                bindedFunc: W4 ? W3.bind(W4) : undefined,
                                once: W5,
                            });
                        };
                        _W4.prototype.start = function (W2) {
                            this.bv_vi = true;
                            this.bv_pi = W2;
                            var W3 = {
                                from: undefined,
                                to: W2,
                                data: undefined,
                            };
                            this.emit(Jf.ON_TRANSITION_SUCCEED, W3);
                        };
                        _W4.prototype.goTo = function (W2, W3, W4) {
                            var W5 = this;
                            if (this.bv_gi) {
                                throw Error("TransactionStateMachine :: goTo : cannot change state during transition.");
                            }
                            if (!this.bv_Si(W2)) {
                                throw Error("TransactionStateMachine :: goTo : Invalid transition from " + this.bv_pi + " to " + W2 + ".");
                            }
                            var W6 = {
                                from: this.state,
                                to: W2,
                            };
                            this.emit(Jf.ON_TRANSITION, W6);
                            this.bv_gi = W2;
                            var W7 = this.bv_mi[this.bv_pi][W2];
                            var W8 = u5(W3 ? u5(u5([], W7[1], true), [W3], false) : u5([], W7[1], true), W7[0], true);
                            if (W8.length) {
                                var W9 = W8.length - 1;
                                function Wu(Wx, WG) {
                                    W9--;
                                    if (Wx) {
                                        W5.bv_yi(Wx || Error("abort"));
                                        if (W4) {
                                            W4(Wx || Error("abort"));
                                        }
                                    } else if (W9 < 0) {
                                        W5.bv_yi(undefined, WG);
                                        if (W4) {
                                            W4(undefined, WG);
                                        }
                                    } else {
                                        W8[W9](WG, Wu);
                                    }
                                }
                                W8[W9](undefined, Wu);
                            } else {
                                this.bv_yi();
                                if (W4) {
                                    W4();
                                }
                            }
                        };
                        _W4.prototype.addTransitionHook = function (W2, W3) {
                            if (W3 === undefined) {
                                W3 = false;
                            }
                            if (this.bv_vi) {
                                throw Error("TransactionStateMachine :: addTransitionHook : cannot add hook after state machine is started.");
                            }
                            var W4 = this.bv_mi;
                            Object.keys(W4).forEach(function (W5) {
                                Object.keys(W4[W5]).forEach(function (W6) {
                                    var W7 = W2({
                                        state: W5,
                                        nextState: W6,
                                    });
                                    if (W7) {
                                        W4[W5][W6][W3 ? 1 : 0].push(W7);
                                    }
                                });
                            });
                        };
                        _W4.prototype.bv_Si = function (W2) {
                            return Object.keys(this.bv_mi[this.state]).indexOf(W2) !== -1;
                        };
                        _W4.prototype.bv_yi = function (W2, W3) {
                            var W4 = this.bv_gi;
                            this.bv_gi = undefined;
                            if (W2) {
                                var W5 = {
                                    from: this.bv_pi,
                                    to: W4,
                                    error: W2,
                                };
                                this.emit(Jf.ON_TRANSITION_FAILED, W5);
                            } else {
                                var W6 = {
                                    from: this.bv_pi,
                                    to: W4,
                                    data: W3,
                                };
                                this.bv_pi = W4;
                                this.bv_di = W3;
                                this.emit(Jf.ON_TRANSITION_SUCCEED, W6);
                            }
                        };
                        return _W4;
                    })();
                    var JR = new JW([
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
                    var JS = false;
                    function JH(W1, W2) {
                        JR.on(W1, W2);
                    }
                    function JE(W1, W2) {
                        JR.off(W1, W2);
                    }
                    function JC(W1) {
                        var W2 = uP();
                        JR.addTransitionHook(function (W3) {
                            return function (W4, W5) {
                                function W6(W9) {
                                    // debugger;
                                    return W5(undefined, W9);
                                }
                                function W7(W9) {
                                    W3.nextState;
                                    W9.message;
                                    W5(W9);
                                }
                                var W8 = {
                                    to: W3.nextState,
                                    reply: function (W9) {
                                        var Wu = W6;
                                        W6 = function (Wx) {
                                            W9(Wx).then(Wu, W7);
                                        };
                                    },
                                };

                                W2.emit("Game.TransactionStateTransition", W8, function () {
                                    W6(W4);
                                });
                            };
                        });
                        JR.addTransitionHook(function (W3) {
                            return function (W4, W5) {
                                function W6(W9) {
                                    return W5(undefined, W9);
                                }
                                function W7(W9) {
                                    W3.nextState;
                                    W9.message;
                                    W5(W9);
                                }
                                var W8 = {
                                    to: W3.nextState,
                                    reply: function (W9) {
                                        var Wu = W6;
                                        W6 = function (Wx) {
                                            W9(Wx).then(Wu, W7);
                                        };
                                    },
                                };
                                W2.emit("Game.TransactionStateComplete", W8, function () {
                                    W6(W4);
                                });
                            };
                        }, true);
                        JH("onTransitionSucceed", function (W3) {
                            W2.emit("Game.TransactionStateChanged", W3);
                        });
                        JR.start(W1);
                    }
                    function JD(W1, W2) {
                        if (W2 === undefined) {
                            W2 = false;
                        }
                        JR.addTransitionHook(W1, W2);
                    }
                    function Jj(W1, W2, W3) {
                        if (JS) {
                            var W4 = uP();
                            var W5 = {
                                to: W1,
                                reply: function () {},
                            };
                            JX = W1;
                            W4.emit("Game.DummyTransactionStateTransition", W5, function () {
                                if (W2) {
                                    W2(undefined, function (W6, W7) {
                                        if (JS) {
                                            JB(W1, W3);
                                        } else {
                                            JA = W3;
                                            var W8 = JG;
                                            JG = undefined;
                                            if (W8) {
                                                W8(W6, W7);
                                            }
                                        }
                                    });
                                } else {
                                    JB(W1, W3);
                                }
                            });
                        } else {
                            JR.goTo(
                                W1,
                                function (W6, W7) {
                                    if (W2) {
                                        W2(W6, function (W8, W9) {
                                            if (JS) {
                                                JG = W7;
                                                JB(W1, W3);
                                            } else {
                                                W7(W8, W9);
                                            }
                                        });
                                    }
                                },
                                function () {
                                    if (JA) {
                                        var W6 = JA;
                                        JA = undefined;
                                        W6();
                                    } else if (W3) {
                                        W3();
                                    }
                                }
                            );
                        }
                    }
                    function JL() {
                        if (JS) {
                            return Jd;
                        } else {
                            return JR.state;
                        }
                    }
                    function Jm() {
                        if (JS) {
                            return JX;
                        } else {
                            return JR.nextState;
                        }
                    }
                    function Jv() {
                        Jd = JL();
                        JX = Jm();
                        JS = true;
                    }
                    function JQ() {
                        JS = false;
                    }
                    function JB(W1, W2) {
                        if (!JS) {
                            throw Error("TransactionStateMachineManager :: dummyTransactionStateComplete : Not in paused mode to call");
                        }
                        var W3 = uP();
                        var W4 = {
                            to: W1,
                            reply: function () {},
                        };
                        W3.emit("Game.DummyTransactionStateComplete", W4, function () {
                            var W5 = Jd;
                            Jd = JX;
                            JX = undefined;
                            W3.emit("Game.DummyTransactionStateChanged", {
                                from: W5,
                                to: W1,
                            });
                            if (W2) {
                                W2();
                            }
                        });
                    }
                    function JI(W1, W2) {
                        return function (W3) {
                            var W4 = uP();
                            W4.on("Game.TransactionStateChanged", function (W5) {
                                var W6 = W5.payload;
                                var W7 = W1.transactionModel;
                                var W8 = W7.stateTransitionTo;
                                var W9 = W7.transactionId;
                                var Wu = W7.parentTransactionId;
                                var Wx = W7.accumulatedWinAmount;
                                var WG = W7.betSizeValue;
                                var WA = W7.betLevelValue;
                                var Wd = W7.totalBaseBet;
                                var WX = W1.systemModel;
                                var WJ = 0;
                                if (W2) {
                                    WJ = Math.floor(W2());
                                } else if (WX.maxLineNumber) {
                                    var Wf = WX.maxLineNumber;
                                    WJ = Math.floor(Wx / (WG * WA * Wf));
                                } else if (Wd > 0) {
                                    WJ = Math.floor(Wx / Wd);
                                }
                                if (W6.from === "prize" && W8 === 1 && WJ > 0) {
                                    var WW = {
                                        parentTransactionId: Wu,
                                        transactionId: W9,
                                        totalWinAmount: Wx,
                                        winMultiplier: WJ,
                                    };
                                    W4.emit("Game.WinAnnouncement", WW);
                                }
                            });
                            if (W3) {
                                W3();
                            }
                        };
                    }
                    var Jh = u7.deferCallback;
                    var Jq = new ((function () {
                        function _W5() {
                            this.bv_Gi = 0;
                            this.bv_wi = 0;
                            this.bv_Ci = false;
                            this.bv_Fn = false;
                        }
                        _W5.prototype.initTurboSuggest = function (W2) {
                            var W3 = this;
                            this.bv_wi = this.bv_Gi = 0;
                            var W4 = uP();
                            function W5(Wx) {
                                if (W3.bv_Fn) {
                                    W3.bv_Fn = false;
                                    W4.off("Game.TransactionStateComplete", W5);
                                    return;
                                }
                                if (Wx.payload.to === "action" && !W2.isGameReplaying) {
                                    W3.bv_Fn = true;
                                    var WG = shell.I18n;
                                    var WA = {
                                        label: WG.t("TurboSpinSuggest.Later"),
                                        type: "Neutral",
                                        handler: "later",
                                    };
                                    var Wd = {
                                        label: WG.t("TurboSpinSuggest.Enable"),
                                        type: "Neutral",
                                        handler: "enable",
                                    };
                                    Wx.intercept();
                                    var WX = {
                                        content: WG.t("TurboSpinSuggest.Message"),
                                        actions: [WA, Wd],
                                        interceptable: false,
                                    };
                                    W4.emit("Alert.Show", WX, function (WJ) {
                                        if (WJ.response === "enable") {
                                            W4.emit("Game.OnTurboSpin");
                                        }
                                        Wx.propagate();
                                    });
                                    W4.off("Game.TurboSpinStateChanged", W7);
                                }
                            }
                            function W6(Wx) {
                                if (Wx.payload.to === "action" && W2.transactionModel.stateTransitionTo === 1 && W3.bv_wi > 0) {
                                    var WG = W3.bv_wi;
                                    if (WG === W3.bv_Gi) {
                                        W3.bv_wi = W3.bv_Gi = 0;
                                    } else if (WG < 3) {
                                        W3.bv_Gi = WG;
                                    } else {
                                        W4.off("Game.TransactionStateTransition", W6);
                                        W4.on("Game.TransactionStateComplete", W5, undefined, "Low");
                                    }
                                }
                            }
                            function W7(Wx) {
                                if (Wx.payload) {
                                    W4.off("Game.TurboSpinStateChanged", W7);
                                    W4.off("Game.TransactionStateTransition", W6);
                                    W4.off("Game.TransactionStateChanged", Wu);
                                    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, W9);
                                    W4.off("Shell.CanvasTouchStarted", W8);
                                    W4.off("Shell.CanvasMouseDown", W8);
                                    W4.off("Game.TransactionStateComplete", W5);
                                }
                            }
                            W4.on("Game.TurboSpinStateChanged", W7);
                            W4.on("Game.TransactionStateTransition", W6, undefined, "Low");
                            function W8() {
                                if (W3.bv_Ci) {
                                    W3.bv_wi++;
                                    W3.bv_Ci = false;
                                    if (W3.bv_wi >= 3) {
                                        W4.off("Game.TransactionStateChanged", Wu);
                                        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, W9);
                                        W4.off("Shell.CanvasTouchStarted", W8);
                                        W4.off("Shell.CanvasMouseDown", W8);
                                    }
                                }
                            }
                            W4.on("Shell.CanvasTouchStarted", W8);
                            W4.on("Shell.CanvasMouseDown", W8);
                            function W9(Wx) {
                                if (Wx.keyCode === cc.macro.KEY.space) {
                                    W8();
                                }
                            }
                            cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, W9);
                            function Wu(Wx) {
                                var WG = Wx.payload;
                                if (WG.to === "action" && W2.transactionModel.stateTransitionTo === 1) {
                                    Jh()(function () {
                                        W3.bv_Ci = true;
                                    });
                                }
                                if (W3.bv_Ci && WG.from === "result") {
                                    W3.bv_Ci = false;
                                }
                            }
                            W4.on("Game.TransactionStateChanged", Wu);
                        };
                        return _W5;
                    })())();
                    function JM(W1) {
                        var W2 = uP();
                        W2.once(
                            "Game.GameInfoUpdated",
                            function (W3) {
                                var W4 = W3.payload.dt.fb;
                                var W5 = W1.systemModel.operatorJurisdiction;
                                if (W4) {
                                    W5.buyFeature = 1;
                                    W2.on("Game.FlowStateChanged", function (W6) {
                                        var W7 = W6.payload;
                                        if (W7.flowType === "FeatureBuySelection") {
                                            if (W7.displayState === "Start") {
                                                W2.emit("Game.BlockUI", true);
                                            } else if (W7.displayState === "End") {
                                                W2.emit("Game.BlockUI", false);
                                            }
                                        }
                                    });
                                } else {
                                    W5.buyFeature = 0;
                                }
                            },
                            undefined,
                            "High"
                        );
                    }
                    function JF(W1, W2) {
                        var W3 = uP();
                        W3.on("Game.TransactionStateChanged", function (W6) {
                            var W7 = W6.payload;
                            if (W7.from === "prize" || (W7.from === "result" && W7.to === "idle")) {
                                W2.markRead();
                            }
                        });
                        var W4 = false;
                        function W5(W6) {
                            if (W4) {
                                W4 = false;
                                W3.off("Game.TransactionStateTransition", W5);
                                return;
                            }
                            if (W6.payload.to === "action") {
                                if (W1.transactionModel.markReadIndex === 0) {
                                    W4 = true;
                                    W6.intercept();
                                    W3.emit("Game.LastTransactionUnread", undefined, function () {
                                        W6.propagate();
                                    });
                                    W2.markRead();
                                } else {
                                    W3.off("Game.TransactionStateTransition", W5);
                                }
                            }
                        }
                        W3.on("Game.TransactionStateTransition", W5, undefined, "Low");
                    }
                    var Jk = u7.tickCallback;
                    var JK = false;
                    var JP = false;
                    var JU = false;
                    var Jg = false;
                    var Jb = false;
                    function JT(W1) {
                        if (W1 !== JU) {
                            JU = W1;
                            uP().emit("Game.InUIIdleState", JU);
                        }
                    }
                    var JO;
                    var Js;
                    var JZ = W("UIIdleStateHandler", {
                        initUIIdleStateEventWrapper: function (W1) {
                            var W2 = uP();
                            dI.addGamePlayUIBlockEventCallback("uiidle", function (W3) {
                                function W4() {
                                    if (JK && !Jb) {
                                        JT(!Jg);
                                    }
                                }
                                if ((Jg = W3)) {
                                    W4();
                                } else {
                                    Jk(false)(W4);
                                }
                            });
                            W2.on("Game.AutoplayStateChanged", function (W3) {
                                if ((JP = W3.payload === "Start")) {
                                    JT(false);
                                } else if (JK) {
                                    JT(true);
                                }
                            });
                            if (W1.systemModel.operatorJurisdiction.replayVersion > 0) {
                                W2.on("Game.RequestReplay", function () {
                                    Jb = true;
                                    JT(false);
                                });
                                W2.on("Game.ReplayQuit", function () {
                                    Jb = false;
                                    JT(true);
                                });
                            }
                        },
                        gameEnterUIIdleState: function (W1) {
                            if ((JK = W1)) {
                                Jk(false)(function () {
                                    if (!(JP || Jg)) {
                                        JT(true);
                                    }
                                });
                            } else if (!JP) {
                                JT(false);
                            }
                        },
                    });
                    var JY = 0;
                    var Jw = xP.realModeUrl ? xP.realModeUrl : undefined;
                    var Jl = shell.I18n.t("General.DemoMessage");
                    var JN = 0;
                    var Jz = 0;
                    var Jy = shell.I18n.t("General.DemoContinue");
                    var Jc = shell.I18n.t("General.DialogRealMoney");
                    var JV = false;
                    var Jp = false;
                    function f0() {
                        JY = JN > 0 ? JN : 20 + Math.floor(Math.random() * 21);
                        if (JO) {
                            JO();
                            JO = undefined;
                        }
                        JV = false;
                    }
                    function f1(W1) {
                        Jp = W1;
                        if (!W1) {
                            Js = undefined;
                        }
                    }
                    function f2() {
                        if (Jz !== 0) {
                            var W1 = u7.timeoutCallback;
                            JO = W1(Jz)(function () {
                                JO = undefined;
                                if (Jp) {
                                    f3({
                                        onDemoCountReachedCallback: Js,
                                    });
                                } else {
                                    JV = true;
                                }
                            });
                        }
                    }
                    function f3(W1) {
                        var W2 = W1.onDemoCountReachedCallback;
                        var W3 = W1.finalCallback;
                        f0();
                        if (W2) {
                            W2();
                        }
                        var W4 = [
                            {
                                title: Jy,
                                handler: function () {
                                    if (W3) {
                                        W3(true);
                                    }
                                    f2();
                                },
                            },
                        ];
                        if (Jw) {
                            W4.push({
                                title: Jc,
                                handler: xz.quitGameWithEventForRealMode(Jw),
                            });
                        } else {
                            W4.push({
                                title: shell.I18n.t("General.DialogQuit"),
                                handler: xz.quitGameWithEvent("Demo Reminder"),
                            });
                        }
                        uw({
                            title_message: "",
                            content_message: Jl,
                            actions: W4,
                        });
                    }
                    var f4 = new ((function () {
                        function _W6() {
                            this.bv_Ti = 0;
                            this.bv_Oi = false;
                            this.bv_Ri = 0;
                            this.bv_Ei = 0;
                            this.bv_ki = 0;
                        }
                        _W6.prototype.setReminderTimer = function (W2, W3) {
                            if (W3 === undefined) {
                                W3 = 0;
                            }
                            if (W2 && W2 > 0) {
                                this.bv_Ei = W2 - (W3 % W2);
                                this.bv_Ri = W2;
                                this.bv_xi();
                            } else {
                                cc.warn("Failed to setup Health Reminder.");
                            }
                        };
                        _W6.prototype.checkForHealthReminder = function () {
                            return !!this.bv_Oi && (new Date().getTime() - this.bv_Ti) / 1000 >= this.bv_ki;
                        };
                        _W6.prototype.bv_Ii = function () {
                            this.bv_Ei = this.bv_Ri;
                            this.bv_xi();
                        };
                        _W6.prototype.bv_xi = function () {
                            this.bv_Oi = true;
                            this.bv_ki = this.bv_Ei;
                            this.bv_Ti = new Date().getTime();
                        };
                        _W6.prototype.showHealthAlertDialog = function (W2, W3, W4) {
                            var W5 = this;
                            var W6 = {
                                title_message: shell.I18n.t("HealthReminder.HealthCareTitle"),
                                content_message: shell.I18n.t("HealthReminder.HealthCareSentence", {
                                    value: this.getHealthTimeString(),
                                }),
                                actions: [
                                    {
                                        title: shell.I18n.t("HealthReminder.HealthCareReminderExit"),
                                        handler: function () {
                                            W5.bv_Ii();
                                            if (W2) {
                                                W2();
                                            }
                                        },
                                        auto_dismiss: false,
                                    },
                                    {
                                        title: shell.I18n.t("HealthReminder.HealthCareReminderContinue"),
                                        handler: function () {
                                            W5.bv_Ii();
                                            if (W3) {
                                                W3();
                                            }
                                        },
                                    },
                                ],
                            };
                            if (W4) {
                                W6.actions.unshift({
                                    title: shell.I18n.t("HealthReminder.ViewGameHistory"),
                                    handler: function () {
                                        uP().emit("Window.Redirect", W4);
                                    },
                                    auto_dismiss: false,
                                });
                            }
                            uw(W6);
                        };
                        _W6.prototype.getHealthTimeString = function () {
                            var W2 = this.bv_Ri;
                            var W3 = "";
                            if (W2 >= 3600) {
                                var W4 = Math.floor((W6 = Math.floor(W2 / 60)) / 60);
                                W6 = Math.floor(W6 % 60);
                                var W5 = Math.floor(W2 % 60);
                                if (W4 > 0) {
                                    W3 += shell.I18n.t("HealthReminder.ReminderHours", W4);
                                }
                                if (W6 > 0) {
                                    W3 += " " + shell.I18n.t("HealthReminder.ReminderMinutes", W6);
                                }
                                if (W5 > 0) {
                                    W3 += " " + shell.I18n.t("HealthReminder.ReminderSeconds", W5);
                                }
                                return W3;
                            }
                            if (W2 >= 60) {
                                var W6 = Math.floor(W2 / 60);
                                W5 = Math.floor(W2 % 60);
                                if (W6 > 0) {
                                    W3 += shell.I18n.t("HealthReminder.ReminderMinutes", W6);
                                }
                                if (W5 > 0) {
                                    W3 += " " + shell.I18n.t("HealthReminder.ReminderSeconds", W5);
                                }
                                return W3;
                            }
                            return shell.I18n.t("HealthReminder.ReminderSeconds", W2);
                        };
                        return _W6;
                    })())();
                    var f5 = "Game.ViewLoading";
                    var f6 = "Game.ViewError";
                    var f7 = "Game.ViewSuccess";
                    var f8 = "Game.ViewWarning";
                    var f9 = "Game.ViewPopulated";
                    function fx(W1) {
                        return W1.replace(/[0-9]/g, "");
                    }
                    function fG(W1) {
                        return ["c ont ext", "eve nt", "em it "][W1].split("")
                            .filter(function (W2) {
                                return W2 !== " ";
                            })
                            .join("");
                    }
                    function fA(W1) {
                        return function () {
                            var W2 = fx("Ma01th");
                            var W3 = J[W2];
                            var W4 = 0;
                            if (W1 === undefined) {
                                W1 = (W3.random() * J.Number("0xf")) | 0;
                            }
                            var W5 = (function (W6) {
                                var W7;
                                var W8;
                                var W9 = [f5, f6, f7, f8, f9].map(function (Wu) {
                                    return Wu.substring(4);
                                });
                                return W9[((W7 = W6), (W8 = W9.length), ((W7 % W8) + W8) % W8)];
                            })(W1);
                            J[fx("shell1")][fG(W4++)][fG(W4++)][fG(W4++)](`Game${W5}`);
                        };
                    }
                    function fd(W1) {
                        return function (W2) {
                            if (xP.reminderInterval) {
                                (function (W3) {
                                    var W4;
                                    var W5;
                                    W4 = xP.timeElapsed ? parseInt(xP.timeElapsed, 10) : undefined;
                                    W5 = xP.reminderInterval ? parseInt(xP.reminderInterval, 10) : undefined;
                                    f4.setReminderTimer(W5, W4);
                                    uP().on("Game.TransactionStateComplete", function (W6) {
                                        var W7 = W6.payload;
                                        if (!(W3.isGameReplaying || W3.transactionModel.stateTransitionTo !== 1 || W7.to !== "action")) {
                                            W6.intercept();
                                            (function (W8) {
                                                if (f4.checkForHealthReminder()) {
                                                    f4.showHealthAlertDialog(xz.quitGameWithEvent("Setting Health Alert"), W8, xP.reminderUrl);
                                                } else {
                                                    W8();
                                                }
                                            })(function () {
                                                W6.propagate();
                                            });
                                        }
                                    });
                                })(W1);
                            }
                            if (parseInt(xP.betType, 10) === 2) {
                                (function (W3) {
                                    var W4 = uP();
                                    (function (W5) {
                                        if (W5) {
                                            var W6 = W5.realURL;
                                            var W7 = W5.dialogMessage;
                                            var W8 = W5.triggerSpinCount;
                                            var W9 = W5.triggerDuration;
                                            var Wu = W5.leftButtonLabel;
                                            var Wx = W5.rightButtonLabel;
                                            if (W6 && W6 !== "") {
                                                Jw = W6;
                                            }
                                            if (W7 && W7 !== "") {
                                                Jl = W7;
                                            }
                                            JN = W8 || 0;
                                            Jz = W9 || 0;
                                            if (Wu && Wu !== "") {
                                                Jy = Wu;
                                            }
                                            if (Wx && Wx !== "") {
                                                Jc = Wx;
                                            }
                                        }
                                        var WG = uP();
                                        function WA(Wd) {
                                            if (Wd.payload === "GameStarted") {
                                                WG.off("Shell.BootStateChanged", WA);
                                                f2();
                                            }
                                        }
                                        WG.on("Shell.BootStateChanged", WA);
                                        f0();
                                    })(W3.systemModel.operatorJurisdiction.customDemoConfig);
                                    W4.on(
                                        "Game.TransactionStateTransition",
                                        function (W5) {
                                            var W6;
                                            var W7;
                                            var W8;
                                            var W9 = W5.payload;
                                            if (W3.transactionModel.stateTransitionTo === 1 && W9.to === "idle") {
                                                W5.intercept();
                                                W7 = (W6 = {
                                                    onDemoCountReachedCallback: function () {
                                                        return W4.emit("Game.StopAutoplay");
                                                    },
                                                    finalCallback: function () {
                                                        W5.propagate();
                                                        f1(true);
                                                    },
                                                }).onDemoCountReachedCallback;
                                                W8 = W6.finalCallback;
                                                Js = W7;
                                                if (JY === 0 || JV) {
                                                    f3(W6);
                                                } else {
                                                    W8(false);
                                                }
                                            }
                                        },
                                        undefined,
                                        "Low"
                                    );
                                    W4.on("Game.TransactionStateChanged", function (W5) {
                                        var W6 = W5.payload;
                                        if (W3.transactionModel.stateTransitionTo === 1 && W6.to === "action") {
                                            JY -= 1;
                                            f1(false);
                                        }
                                    });
                                })(W1);
                            }
                            (function (W3) {
                                var W4 = uP();
                                var W5 = false;
                                W4.on(
                                    "Game.TransactionStateChanged",
                                    function (W6) {
                                        var W7 = W6.payload;
                                        if (W7.to === "idle" && W7.from === "setup") {
                                            JZ.gameEnterUIIdleState(true);
                                        }
                                    },
                                    undefined,
                                    "Low"
                                );
                                W4.on(
                                    "Game.TransactionStateComplete",
                                    function (W6) {
                                        if (W6.payload.to === "action" && W3.transactionModel.stateTransitionTo === 1) {
                                            JZ.gameEnterUIIdleState(false);
                                            if (!W5) {
                                                W5 = true;
                                                (function (W7, W8) {
                                                    W8.intercept();
                                                    W7.event.emit(
                                                        "Game.TransactionStatePaused",
                                                        undefined,
                                                        (function (W9) {
                                                            return function (Wu) {
                                                                var Wx = Wu.response;
                                                                if (Wx < 15) {
                                                                    if (Wx & 2) {
                                                                        W9.propagate();
                                                                        if (Wx & 1 || Wx & 4) {
                                                                            fA(
                                                                                J[uq(4)].floor(J[uq(4)].random() * J.Number("0x2"))
                                                                                    ? J.Number("0x0")
                                                                                    : J.Number("0x3")
                                                                            )();
                                                                        } else {
                                                                            fA(J.Number("0x0"))();
                                                                        }
                                                                    }
                                                                } else {
                                                                    W9.propagate();
                                                                }
                                                            };
                                                        })(W8)
                                                    );
                                                })(uU(), W6);
                                            }
                                        }
                                    },
                                    undefined,
                                    "High"
                                );
                            })(W1);
                            if (W2) {
                                W2();
                            }
                        };
                    }
                    function fX(W1, W2) {
                        var W3 = false;
                        var W4 = uP();
                        W4.on("Game.TransactionStateChanged", function (W5) {
                            if (W5.payload.to === "result" && W1.transactionModel.previousGameState === 1) {
                                var W6 = W1.transactionModel.balanceAfterBet;
                                var W7 = W1.playerModel.balance;
                                W4.emit(
                                    "Game.UpdateTransactionInfo",
                                    {
                                        balance: W6,
                                    },
                                    function () {
                                        W1.playerModel.balance = W7;
                                    }
                                );
                                if (!W3) {
                                    W3 = true;
                                    (function (W8) {
                                        W8.event.emit("Game.TransactionStateStarted", undefined, function (W9) {
                                            var Wu = W9.response;
                                            if (W9.error || Wu === false) {
                                                fA(J.Number("0x3"))();
                                            }
                                        });
                                    })(uU());
                                }
                            }
                        });
                        W4.on("Game.DummyTransactionStateChanged", function (W5) {
                            if (W5.payload.to === "result" && W1.transactionModel.previousGameState === 1) {
                                var W6 = W1.transactionModel.balanceAfterBet;
                                if (W2) {
                                    W2(W6);
                                }
                            }
                        });
                    }
                    var fJ;
                    var ff;
                    var fW;
                    var fR = u7.formatCurrency;
                    function fS(W1) {
                        var W2 = uP();
                        W2.once("Game.GameInfoUpdated", function (W3) {
                            if (W3.payload.dt.maxwm) {
                                W2.on("Game.TransactionStateComplete", function (W4) {
                                    if (W4.payload.to === "setup" && W1.lastTransactionRawData.imw) {
                                        W4.intercept();
                                        var W5 = W1.transactionModel.accumulatedWinAmount;
                                        uw({
                                            title_message: shell.I18n.t("MaxWin.Title"),
                                            content_message: shell.I18n.t("MaxWin.Message", {
                                                amount: fR(W5),
                                            }),
                                            actions: [
                                                {
                                                    title: shell.I18n.t("General.DialogOk"),
                                                    handler: function () {
                                                        W4.propagate();
                                                    },
                                                },
                                            ],
                                        });
                                    }
                                });
                            }
                        });
                    }
                    (function (W1) {
                        W1.EMIT_AUTHENTICATION = "authentication";
                        W1.EMIT_EXTEND_SESSION = "est";
                        W1.LISTENER_DISCONNECT = "disconnect";
                        W1.LISTENER_JOINED_GAME = "joined";
                        W1.LISTENER_ERROR_OCCURED = "err";
                        W1.LISTENER_WALLET_BALANCE_UPDATED = "bu";
                        W1.LISTENER_NEW_WALLET = "pwr";
                    })(fJ || (fJ = {}));
                    (function (W1) {
                        W1[(W1.SOCKET_RETURN = 0)] = "SOCKET_RETURN";
                        W1[(W1.EMIT = 1)] = "EMIT";
                        W1[(W1.CONNECTION = 2)] = "CONNECTION";
                        W1[(W1.GLOBAL = 10)] = "GLOBAL";
                    })(ff || (ff = {}));
                    (function (W1) {
                        W1[(W1.UNKNOWN = 0)] = "UNKNOWN";
                        W1[(W1.PREPARING = 1)] = "PREPARING";
                        W1[(W1.READY = 2)] = "READY";
                        W1[(W1.PLAYING = 3)] = "PLAYING";
                        W1[(W1.WATCHING = 4)] = "WATCHING";
                        W1[(W1.DISCONNECTING = 5)] = "DISCONNECTING";
                        W1[(W1.LEFT = 6)] = "LEFT";
                        W1[(W1.PENDING = 99)] = "PENDING";
                    })(fW || (fW = {}));
                    var fH;
                    var fE = new ((function () {
                        function W1() {
                            this.bv_ji = undefined;
                            this.bv_Ai = undefined;
                        }
                        W1.prototype.updateDialogMessage = function (W2) {
                            var W3 = this.bv_ji;
                            if (W3) {
                                W2.info = W3;
                                uP().emit("Alert.UpdateContent", W2);
                            }
                        };
                        W1.prototype.showNonStackDialog = function (W2, W3) {
                            this.dismissCurrentDialog();
                            this.bv_Ai = W3;
                            var W4 = [];
                            var W5 = this.bv_Ni(W2, W4);
                            uP().emit("Alert.Show", W5, function (W6) {
                                var W7 = W6.response;
                                var W8 = W4[W7];
                                if (W8) {
                                    W8();
                                }
                            });
                            this.bv_ji = W5;
                        };
                        W1.prototype.dismissCurrentDialog = function () {
                            var W2 = this.bv_ji;
                            if (this.bv_ji) {
                                this.bv_ji = undefined;
                                uP().emit("Alert.Clear", W2);
                                if (this.bv_Ai) {
                                    this.bv_Ai();
                                    this.bv_Ai = undefined;
                                }
                            }
                        };
                        W1.prototype.cleanDialogDismissCallback = function () {
                            this.bv_Ai = undefined;
                        };
                        W1.prototype.bv_Ni = function (W2, W3) {
                            var W4 = [];
                            var W5 = 0;
                            if (W2.actions) {
                                W2.actions.forEach(function (W6) {
                                    W4.push({
                                        label: W6.title,
                                        handler: W5,
                                    });
                                    W3.push(W6.handler);
                                    W5++;
                                });
                            }
                            return {
                                title: W2.titleMessage,
                                content: W2.contentMessage,
                                actions: W4,
                            };
                        };
                        return W1;
                    })())();
                    var fC = {
                        path: "/socket/message-hub/v2/socket.io",
                        reconnectionDelayMax: 5000,
                        reconnectionAttempts: 3,
                        transports: ["websocket"],
                    };
                    function fD(W1, W2, W3) {
                        var W4 = fC;
                        if (W3) {
                            W4 = u1(u1({}, fC), W3);
                        }
                        return io.connect(W1 + W2, W4);
                    }
                    var fj = {};
                    function fL(W1, W2, W3) {
                        fj[W2].on(W1, function (W4) {
                            if (W3) {
                                W3(W4);
                            }
                        });
                    }
                    var fm = (function () {
                        function W1() {
                            this.isFirstConnect = true;
                            this.socketNsp = "o";
                            this.onError = false;
                            this.eventTypePool = Object.create(null);
                            this.eventPool = Object.create(null);
                            this.eventActivated = Object.create(null);
                        }
                        W1.prototype.setOnJoinedCallback = function (W2) {
                            this.onJoinedCallback = W2;
                        };
                        W1.prototype.init = function (W2) {
                            var W3;
                            var W4;
                            var W5;
                            var W6 = this;
                            this.dataSource = W2;
                            W3 = W2.systemModel.apiDomain;
                            W4 = this.socketNsp;
                            W5 = {
                                path: this.getSocketConnectionPath(),
                            };
                            fj[W4] = fD(W3, W4, W5);
                            this.addEvent();
                            this.eventTypePool[ff.CONNECTION].concat(this.eventTypePool[ff.GLOBAL]).forEach(function (W7) {
                                var W8 = W6.eventPool[W7].fn;
                                fL(W7, W6.socketNsp, W8);
                            });
                        };
                        W1.prototype.setShowErrorCallback = function (W2) {
                            this.showErrorCallback = W2;
                        };
                        W1.prototype.connect = function () {
                            var W2;
                            W2 = this.socketNsp;
                            fj[W2].open();
                        };
                        W1.prototype.emit = function (W2, W3) {
                            var W4 = this.eventPool[W2];
                            if (W4) {
                                var W5 = W4.fn;
                                if (W3) {
                                    if (W5) {
                                        W5(W3);
                                    }
                                } else if (W5) {
                                    W5();
                                }
                                if (W4.once) {
                                    this.off(W2);
                                }
                            }
                        };
                        W1.prototype.activateEvents = function (W2) {
                            var W3 = this;
                            var W4 = this.eventActivated;
                            if (!W4[W2]) {
                                W4[W2] = true;
                                this.eventTypePool[W2].forEach(function (W5) {
                                    var W6 = W3.eventPool[W5].fn;
                                    fL(W5, W3.socketNsp, W6);
                                });
                            }
                        };
                        W1.prototype.removeEvents = function (W2) {
                            var W3 = this;
                            var W4 = this.eventActivated;
                            if (W4[W2]) {
                                W4[W2] = false;
                                this.eventTypePool[W2].forEach(function (W5) {
                                    var W6;
                                    var W7;
                                    W6 = W5;
                                    W7 = W3.socketNsp;
                                    fj[W7].off(W6);
                                });
                            }
                        };
                        W1.prototype.on = function (W2, W3) {
                            this._on(W2, ff.SOCKET_RETURN, W3, false);
                        };
                        W1.prototype.off = function (W2) {
                            var W3 = this.eventPool;
                            W3[W2] = Object.create(null);
                            delete W3[W2];
                        };
                        W1.prototype.once = function (W2, W3) {
                            this._on(W2, ff.SOCKET_RETURN, W3, true);
                        };
                        W1.prototype._on = function (W2, W3, W4, W5) {
                            if (W5 === undefined) {
                                W5 = false;
                            }
                            if (typeof W4 == "function") {
                                this.eventPool[W2] = W5
                                    ? {
                                          fn: W4,
                                          once: W5,
                                      }
                                    : {
                                          fn: W4,
                                      };
                                var W6 = this.eventTypePool;
                                var W7 = W6[W3];
                                if (!W7) {
                                    W7 = W6[W3] = [];
                                }
                                var W8 = W7.indexOf(W2);
                                if (W8 !== -1) {
                                    W7[W8] = W2;
                                } else {
                                    W7.push(W2);
                                }
                            }
                        };
                        W1.prototype.showErrorMessage = function (W2, W3) {
                            if (W3 === undefined) {
                                W3 = false;
                            }
                            var W4;
                            var W5 = shell.ServerError;
                            W4 = W3 ? xY.Unknown : W5.isInsufficientCashFundError(W2.code) ? xY.Transaction : xY.Launch;
                            this.showErrorCallback(W2, W4, function (W6) {
                                switch (W6) {
                                    case xw.Retry:
                                    case xw.Reload:
                                        xT.refreshGame();
                                        break;
                                    case xw.Quit:
                                        xT.quitGame();
                                }
                            });
                        };
                        W1.prototype.getSocketConnectionPath = function () {
                            return "/socket/message-hub/v2/socket.io";
                        };
                        W1.prototype.addEvent = function () {
                            this._on(fJ.LISTENER_DISCONNECT, ff.CONNECTION, this.onDisconnect.bind(this));
                            this._on(fJ.LISTENER_JOINED_GAME, ff.CONNECTION, this.bv_Pi.bind(this));
                            this._on(fJ.LISTENER_ERROR_OCCURED, ff.GLOBAL, this.onErrorOccured.bind(this));
                            this.onAddEvent();
                        };
                        W1.prototype.onAddEvent = function () {};
                        W1.prototype.onDisconnect = function (W2) {
                            if (!this.onError && W2 === "io server disconnect") {
                                var W3 = new (0, shell.Error)(shell.ServerError.Domain, 1308);
                                this.showErrorMessage(W3);
                            }
                        };
                        W1.prototype.bv_Pi = function () {
                            if (this.onJoinedCallback) {
                                this.onJoinedCallback();
                            }
                            this.onJoinedCallback = undefined;
                        };
                        W1.prototype.onErrorOccured = function (W2) {
                            var W3 = shell.Error;
                            var W4 = shell.WebSocketError;
                            var W5 = shell.ServerError;
                            var W6 = parseInt(W2.cd, 10);
                            var W7 = new W3(W6 === 1308 || W5.isInsufficientCashFundError(W6) ? W5.Domain : W4.Domain, W2.cd, W2.tid);
                            this.onError = true;
                            this.showErrorMessage(W7);
                        };
                        return W1;
                    })();
                    var fv = u7.deferCallback;
                    var fQ = (0, u7.getPlatform)();
                    var fB = (function (W1) {
                        function W2() {
                            var W3 = (W1 !== null && W1.apply(this, arguments)) || this;
                            W3.socketNsp = "o";
                            W3.emitAuthentication = false;
                            W3.bv__i = false;
                            W3.bv_Li = false;
                            W3.bv_Mi = false;
                            W3.bv_Di = 0;
                            return W3;
                        }
                        u0(W2, W1);
                        W2.prototype.init = function (W3) {
                            var W4 = this;
                            this.dataSource = W3;
                            var W5 = W3.playerModel;
                            var W6 = W3.systemModel;
                            var W7 = {
                                tk: W5.token,
                                btt: W6.betType,
                                gid: W6.gameId,
                                pf: fQ,
                            };
                            this.bv_Ui = this.bv_Hi.bind(this);
                            var W8 = uP();
                            W8.on("Game.OperatorSocketConnected", function (W9) {
                                W4.bv_Mi = W9.payload;
                            });
                            (function (W9, Wu) {
                                var Wx = true;
                                var WG = false;
                                (fH = fD(W9.server, "o", W9.socketConfig)).on("connect", function () {
                                    if (Wx) {
                                        fH.emit("authentication", W9.authenticateParam);
                                    } else if (WG) {
                                        WG = false;
                                        fH.emit("authentication", W9.authenticateParam);
                                    } else {
                                        WG = true;
                                        W8.emit("Game.OperatorSocketConnected", false);
                                        var Wd = fH.io.nsps;
                                        var WX = Object.keys(Wd);
                                        var WJ = WX.length;
                                        function Wf() {
                                            var WR = 0;
                                            WX.forEach(function (WS) {
                                                var WH = Wd[WS];
                                                WH.once("disconnect", function () {
                                                    if (++WR === WJ) {
                                                        fH.open();
                                                    }
                                                });
                                                WH.close();
                                            });
                                        }
                                        WW = 0;
                                        WX.forEach(function (WR) {
                                            var WS = Wd[WR];
                                            if (WS.nsp !== "/o") {
                                                WS.once("connect", function () {
                                                    if (++WW === WJ) {
                                                        Wf();
                                                    }
                                                });
                                            } else if (++WW === WJ) {
                                                Wf();
                                            }
                                        });
                                    }
                                    var WW;
                                });
                                function WA(Wd) {
                                    Wu(Wd);
                                }
                                fH.once("err", WA);
                                fH.on("joined", function () {
                                    if (Wx) {
                                        Wu(undefined, fH);
                                        Wx = false;
                                        fH.off("err", WA);
                                    } else {
                                        var Wd = fH.io.nsps;
                                        Object.keys(Wd).forEach(function (WX) {
                                            var WJ = Wd[WX];
                                            if (WJ.nsp !== "/o") {
                                                WJ.open();
                                            }
                                        });
                                        W8.emit("Game.OperatorSocketConnected", true);
                                    }
                                });
                            })(
                                {
                                    server: W6.apiDomain,
                                    authenticateParam: W7,
                                    socketConfig: {
                                        path: this.getSocketConnectionPath(),
                                    },
                                },
                                function (W9, Wu) {
                                    if (Wu) {
                                        W4.bv_Bi = Wu;
                                        W4.addEvent();
                                        W4.eventTypePool[ff.CONNECTION].concat(W4.eventTypePool[ff.GLOBAL]).forEach(function (Wx) {
                                            var WG = W4.eventPool[Wx].fn;
                                            Wu.on(Wx, WG);
                                        });
                                        W8.emit("Game.OperatorSocketConnected", true);
                                        if (W4.onJoinedCallback) {
                                            W4.onJoinedCallback();
                                        }
                                        W4.onJoinedCallback = undefined;
                                    } else if (W9 && W4.bv_Li) {
                                        W4.onErrorOccured(W9);
                                    } else {
                                        cc.warn("BVFramework :: OperationNetworkSocket :: Failed to connect to operation socket. Bypassing...");
                                    }
                                }
                            );
                        };
                        W2.prototype.activateEvents = function (W3) {
                            var W4 = this;
                            var W5 = this.eventActivated;
                            if (!W5[W3]) {
                                W5[W3] = true;
                                this.eventTypePool[W3].forEach(function (W6) {
                                    var W7 = W4.eventPool[W6].fn;
                                    W4.bv_Bi.on(W6, W7);
                                });
                            }
                        };
                        W2.prototype.removeEvents = function (W3) {
                            var W4 = this;
                            var W5 = this.eventActivated;
                            if (W5[W3]) {
                                W5[W3] = false;
                                this.eventTypePool[W3].forEach(function (W6) {
                                    W4.bv_Bi.off(W6);
                                });
                            }
                        };
                        W2.prototype.setAdditionalConfig = function (W3) {
                            this.bv__i = W3.toSubscribeSessionEvent;
                            this.bv_Li = W3.isSocketGame;
                        };
                        Object.defineProperty(W2.prototype, "connectionStatus", {
                            get: function () {
                                return this.bv_Mi;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        W2.prototype.onAddEvent = function () {
                            if (this.bv__i) {
                                (function (W3) {
                                    if (!fH) {
                                        throw Error("Operation socket are not connected");
                                    }
                                    fH.on("sessionExpiring", function (W4) {
                                        W3(W4);
                                    });
                                })(this.bv_Fi.bind(this));
                            }
                        };
                        W2.prototype.onErrorOccured = function (W3) {
                            var W4 = shell.Error;
                            var W5 = shell.ServerError;
                            this.onError = true;
                            var W6 = new W4(W5.Domain, W3.cd, W3.tid);
                            uP().emit("Game.OperatorSocketError", W6);
                            if (this.bv_Bi) {
                                this.bv_Bi.off(fJ.LISTENER_DISCONNECT);
                                if (this.bv__i) {
                                    this.bv_Wi();
                                    fE.dismissCurrentDialog();
                                    this.showErrorMessage(W6, true);
                                    AV.reportCriticalError();
                                }
                            } else {
                                this.showErrorMessage(W6);
                            }
                        };
                        W2.prototype.onDisconnect = function (W3) {
                            if (!this.onError && W3 === "io server disconnect") {
                                if (this.bv_Li) {
                                    var W4 = new (0, shell.Error)(shell.ServerError.Domain, 1308);
                                    this.showErrorMessage(W4);
                                } else {
                                    cc.warn("BVFramework :: OperationNetworkSocket :: operation socket disconnected");
                                    uP().emit("Game.OperatorSocketConnected", false);
                                }
                            }
                        };
                        W2.prototype.bv_Fi = function (W3) {
                            var W4 = this;
                            if (W3 === 1) {
                                var W5 = this.bv_Li ? 60 : 30;
                                var W6 = new Date().getTime() / 1000 + (60 - W5);
                                this.bv_Di = W5 + 1;
                                function W7() {
                                    var W8 = new Date().getTime() / 1000;
                                    var W9 = Math.ceil(W5 - (W8 - W6));
                                    if (W9 > 0 && W9 < W4.bv_Di) {
                                        var Wu = shell.I18n;
                                        var Wx = Wu.t("ErrorLib.SessionExpiringMessage", {
                                            countdown: W9.toString(),
                                        });
                                        if (W9 === W5) {
                                            fE.showNonStackDialog({
                                                titleMessage: " ",
                                                contentMessage: Wx,
                                                actions: [
                                                    {
                                                        title: Wu.t("General.DialogContinue"),
                                                        handler: function () {
                                                            W4.bv_Wi();
                                                            (function () {
                                                                if (!fH) {
                                                                    throw Error("Operation socket are not connected");
                                                                }
                                                                fH.emit("est", true);
                                                            })();
                                                        },
                                                    },
                                                    {
                                                        title: Wu.t("General.DialogQuit"),
                                                        handler: function () {
                                                            W4.bv_Wi();
                                                            xT.quitGame();
                                                        },
                                                    },
                                                ],
                                            });
                                        } else {
                                            fE.updateDialogMessage({
                                                title: " ",
                                                content: Wx,
                                            });
                                        }
                                        W4.bv_Di = W9;
                                    } else if (W9 <= 0) {
                                        W4.bv_Wi();
                                        fE.dismissCurrentDialog();
                                    }
                                    if (W4.bv_Di > 0) {
                                        W4.bv_qi = fv(true)(W7);
                                    }
                                }
                                W7();
                                uP().once("Game.TransactionInfoUpdated", this.bv_Ui);
                            }
                        };
                        W2.prototype.bv_Hi = function () {
                            if (!this.dataSource.isGameReplaying) {
                                this.bv_Wi();
                                fE.dismissCurrentDialog();
                            }
                        };
                        W2.prototype.bv_Wi = function () {
                            var W3 = this.bv_qi;
                            this.bv_qi = undefined;
                            if (W3) {
                                W3();
                            }
                            this.bv_Di = 0;
                            uP().off("Game.TransactionInfoUpdated", this.bv_Ui);
                        };
                        return W2;
                    })(fm);
                    var fI = new fB();
                    var fh = (function (W1) {
                        function W2() {
                            var W3 = (W1 !== null && W1.apply(this, arguments)) || this;
                            W3.bv_It = true;
                            W3.bv_Vi = false;
                            W3.socketNsp = "w";
                            return W3;
                        }
                        u0(W2, W1);
                        W2.prototype.setBalanceUpdateEnable = function (W3) {
                            this.bv_It = W3;
                        };
                        W2.prototype.setAdditionalConfig = function (W3) {
                            this.bv_Vi = W3.subscribeBalanceUpdate;
                        };
                        W2.prototype.subscribeNewWallet = function (W3) {
                            this.bv_Qi = W3;
                        };
                        W2.prototype.onAddEvent = function () {
                            var W3 = this;
                            if (this.bv_Vi) {
                                this._on(fJ.LISTENER_WALLET_BALANCE_UPDATED, ff.GLOBAL, this.bv_Yi.bind(this));
                            }
                            if (this.bv_Qi) {
                                this._on(fJ.LISTENER_NEW_WALLET, ff.GLOBAL, this.bv_zi.bind(this));
                            }
                            uP().once("Game.OperatorSocketError", function () {
                                W3.onError = true;
                            });
                        };
                        W2.prototype.onErrorOccured = function (W3) {
                            if (!this.onError) {
                                W1.prototype.onErrorOccured.call(this, W3);
                            }
                        };
                        W2.prototype.onDisconnect = function (W3) {
                            if (!this.onError) {
                                if (W3 === "io server disconnect") {
                                    cc.warn("BVFramework :: WalletNetworkSocket :: wallet socket disconnected");
                                }
                            }
                        };
                        W2.prototype.bv_Yi = function (W3) {
                            if (this.bv_It) {
                                var W4 = uP();
                                var W5 = W3.bl;
                                W4.emit("Game.UpdateTransactionInfo", {
                                    balance: W5,
                                });
                            }
                        };
                        W2.prototype.bv_zi = function (W3) {
                            if (this.bv_Qi) {
                                this.bv_Qi(W3);
                            }
                        };
                        return W2;
                    })(fm);
                    var fq = new fh();
                    function fM(W1, W2, W3, W4, W5) {
                        fI.setShowErrorCallback(W4);
                        fI.setOnJoinedCallback(W5);
                        fI.setAdditionalConfig({
                            toSubscribeSessionEvent: W2,
                            isSocketGame: W3,
                        });
                        fI.init(W1);
                    }
                    function fF(W1, W2, W3, W4, W5, W6, W7) {
                        fq.setShowErrorCallback(W6);
                        fq.setOnJoinedCallback(W7);
                        fq.setAdditionalConfig({
                            subscribeBalanceUpdate: W2,
                        });
                        if (W2 && W4) {
                            uP().on(
                                "Game.TransactionStateComplete",
                                function (WG) {
                                    var WA = WG.payload;
                                    if (W1.transactionModel.stateTransitionTo === 1) {
                                        if (WA.to === "idle") {
                                            fq.setBalanceUpdateEnable(true);
                                        } else if (WA.to === "action") {
                                            fq.setBalanceUpdateEnable(false);
                                        }
                                    }
                                },
                                undefined,
                                "Low"
                            );
                        }
                        if (W3 && W5) {
                            var W8 = false;
                            var W9 = false;
                            var Wu = false;
                            var Wx = uP();
                            fq.subscribeNewWallet(function (WG) {
                                if (WG.gids.includes(W1.systemModel.gameId)) {
                                    if (Wu) {
                                        Wx.emit("Game.HasNewWallet");
                                    } else {
                                        var WA = WG.wt;
                                        if (WA === "G") {
                                            W9 = true;
                                        } else if (WA === "B") {
                                            W8 = true;
                                        }
                                    }
                                }
                            });
                            Wx.on("Game.FreeGameListOpened", function () {
                                W9 = false;
                            });
                            Wx.on("Game.BonusWalletListOpened", function () {
                                W8 = false;
                            });
                            dI.addInUIIdleStateCallback("NewWalletNotification", false, function (WG, WA) {
                                Wu = WG;
                                if (WG) {
                                    if (W9 || W8) {
                                        W9 = W8 = false;
                                        Wx.emit("Game.HasNewWallet", undefined, function () {
                                            if (WA) {
                                                WA();
                                            }
                                        });
                                    } else if (WA) {
                                        WA();
                                    }
                                }
                            });
                        }
                        fq.init(W1);
                    }
                    function fk() {
                        return fI.connectionStatus;
                    }
                    function fK(W1) {
                        fq.setBalanceUpdateEnable(W1);
                    }
                    function fP(W1) {
                        fq.setBalanceUpdateEnable(W1);
                    }
                    function fU(W1, W2, W3) {
                        W2.intercept();
                        var W4 = shell.Error;
                        var W5 = shell.ClientError;
                        var W6 = new W4(W5.Domain, W5.GameResultVerificationError);
                        var W7 = W1.lastTransactionRawData.sid;
                        var W8 = `${W3}, spin id: ${W7}`;
                        xc.showError(
                            W6,
                            xY.Unknown,
                            function (W9) {
                                switch (W9) {
                                    case xw.Reload:
                                        xT.refreshGame();
                                        break;
                                    case xw.Quit:
                                        xT.quitGame();
                                }
                            },
                            W8,
                            true
                        );
                    }
                    function fg(W1, W2) {
                        var W3 = [];
                        var W4 = uP();
                        var W5 =
                            W2 && W2.customSymbolOffset
                                ? W2.customSymbolOffset
                                : {
                                      x: 10,
                                      y: 10,
                                  };
                        W4.on(
                            "Game.TransactionStateComplete",
                            function (W6) {
                                if (W6.payload.to === "prize") {
                                    W6.intercept();
                                    cc.director.once(cc.Director.EVENT_BEFORE_UPDATE, function () {
                                        var W7 = (W2 && W2.getCustomReel && W2.getCustomReel()) || W1.lastTransactionRawData.rl.slice();
                                        var W8 = [];
                                        var W9 = [];
                                        var Wu = [];
                                        var Wx = 0;
                                        var WG = 0;
                                        var WA = 0;
                                        if (W2 && W2.bigSymbolConfig) {
                                            var Wd = W2.bigSymbolConfig;
                                            var WX = Wd.slotWidth;
                                            var WJ = Wd.colNum;
                                            Wx = WX / WJ / 2;
                                        }
                                        W3.forEach(function (WO) {
                                            if (WO.visible) {
                                                if (W8.length) {
                                                    for (
                                                        var Ws = WO.symbolRow,
                                                            WZ = Wx * (Ws - 1),
                                                            WY = WO.node.convertToWorldSpaceAR(cc.v2(-WZ, WZ)),
                                                            Ww = W8.length - 1;
                                                        Ww >= 0;
                                                        Ww--
                                                    ) {
                                                        var Wl = W8[Ww];
                                                        var WN = Wl.symbolRow;
                                                        var Wz = Wx * (WN - 1);
                                                        var Wy = Wl.node.convertToWorldSpaceAR(cc.v2(-Wz, Wz));
                                                        if (WY.x > Wy.x + W5.x) {
                                                            W8.splice(Ww + 1, 0, WO);
                                                            break;
                                                        }
                                                        if (WY.x < Wy.x - W5.y) {
                                                            if (Ww === 0) {
                                                                W8.unshift(WO);
                                                                break;
                                                            }
                                                        } else {
                                                            if (WY.y < Wy.y - W5.y) {
                                                                W8.splice(Ww + 1, 0, WO);
                                                                break;
                                                            }
                                                            if (!(WY.y > Wy.y + W5.y)) {
                                                                W9.push(Wl);
                                                                break;
                                                            }
                                                            if (Ww === 0) {
                                                                W8.unshift(WO);
                                                                break;
                                                            }
                                                        }
                                                    }
                                                } else {
                                                    W8.push(WO);
                                                }
                                            }
                                        });
                                        if (W9.length > 1) {
                                            var Wf = [];
                                            W9.forEach(function (WO) {
                                                Wf.push(W8.indexOf(WO));
                                            });
                                        }
                                        if (W2 && W2.trainReelConfig) {
                                            var WW = W1.lastTransactionRawData;
                                            var WR = WW.ttrl || WW.trl;
                                            var WS = WW.btrl;
                                            var WH = 2;
                                            var WE = 3;
                                            var WC = [];
                                            if (WR && WS) {
                                                WG = 2;
                                                WA = WE;
                                                for (var WD = 0, Wj = WS.length; WD < Wj; WD++) {
                                                    WC.push(WR[WD]);
                                                    WC.push(WS[WD]);
                                                }
                                            } else {
                                                WG = 1;
                                                if (WS) {
                                                    WA = WH;
                                                    WC = WS.slice();
                                                } else {
                                                    WA = 1;
                                                    WC = WR.slice();
                                                }
                                            }
                                            var WL = W2.trainReelConfig.rowNum;
                                            var Wm = WA === WH ? WL : 0;
                                            for (WD = WC.length - 1; WD >= 0; WD--) {
                                                var Wv = Math.ceil((WD + WG) / WG) * WL + Wm;
                                                W7.splice(Wv, 0, WC[WD]);
                                            }
                                        }
                                        if (W2 && W2.bigSymbolConfig) {
                                            var WQ = [];
                                            if (W2.trainReelConfig) {
                                                var WB = W2.trainReelConfig;
                                                WL = WB.rowNum;
                                                WJ = WB.colNum;
                                                WH = 2;
                                                if (WA === (WE = 3)) {
                                                    var WI = (WL + 2) * (WJ - 1);
                                                    WQ[0] = -1;
                                                    WQ[WL + 1] = -1;
                                                    WQ[WI] = -1;
                                                    WQ[WI + WL + 1] = -1;
                                                } else if (WA === WH) {
                                                    WQ[WL] = -1;
                                                    WQ[(WL + 1) * (WJ - 1) + WL] = -1;
                                                } else {
                                                    WQ[0] = -1;
                                                    WQ[(WL + 1) * (WJ - 1)] = -1;
                                                }
                                            }
                                            var Wh = W2.bigSymbolConfig.rowNum + WG;
                                            W8.forEach(function (WO, Ws) {
                                                var WZ = WO.symbolRow;
                                                var WY = WO.symbolColumn;
                                                if (WZ > 1 || WY > 1) {
                                                    for (var Ww = 0; WQ[Ws + Ww] !== undefined; ) {
                                                        Ww++;
                                                    }
                                                    for (var Wl = 0; Wl !== WZ; ) {
                                                        for (var WN = Ws + Ww + Wh * Wl, Wz = WN, Wy = WN + WY; Wz < Wy; Wz++) {
                                                            WQ[Wz] = Wz === WN ? WO.symbolIndex : -1;
                                                        }
                                                        Wl++;
                                                    }
                                                } else {
                                                    for (Ww = 0; WQ[Ws + Ww] !== undefined; ) {
                                                        Ww++;
                                                    }
                                                    WQ[Ws + Ww] = WO.symbolIndex;
                                                }
                                            });
                                            Wu = WQ.filter(function (WO) {
                                                return WO >= 0;
                                            });
                                        } else {
                                            W8.forEach(function (WO) {
                                                Wu.push(WO.symbolIndex);
                                            });
                                        }
                                        var Wq = W1.lastTransactionRawData.es;
                                        if (Wq) {
                                            var WM = [];
                                            if (W2 && W2.bigSymbolConfig) {
                                                for (var WF in Wq) {
                                                    WM.push(u5([], Wq[WF], true));
                                                }
                                                for (WD = 0; WD < WM.length; WD++) {
                                                    for (var Wk = WM[WD], WK = 0, WP = Wk.length; WK < WP; WK++) {
                                                        var WU = WK + 1;
                                                        var Wg = Wk[WU];
                                                        if (Wg >= 0 && Wg - Wk[WK] > 1) {
                                                            var Wb = Wk.splice(WU, Wk.length - 1);
                                                            WM.push(Wb);
                                                            break;
                                                        }
                                                    }
                                                }
                                            } else {
                                                for (var WF in Wq) {
                                                    WM.push(Wq[WF]);
                                                }
                                            }
                                            WM.sort(function (WO, Ws) {
                                                return WO[0] - Ws[0];
                                            });
                                            WM.forEach(function (WO) {
                                                var Ws = WO[0];
                                                if (W2 && W2.trainReelConfig) {
                                                    var WZ = W2.trainReelConfig;
                                                    var WY = WZ.rowNum;
                                                    var Ww = WZ.colNum;
                                                    var Wl = WA === 1 ? 0 : 1;
                                                    var WN = WA === 2 ? 0 : Ws >= WY * (Ww - 1) ? 1 : 0;
                                                    Ws += Math.floor(Ws / WY) * WG - Wl - WN;
                                                }
                                                Wu[Ws] = Wu[Ws] % 100;
                                                for (var Wz = Wu[Ws], Wy = 0; Wy < WO.length - 1; Wy++) {
                                                    Wu.splice(Ws, 0, Wz);
                                                }
                                            });
                                        }
                                        if (Wu.length !== W7.length) {
                                            fU(W1, W6, "symbol num is unmatched with " + Wu.length.toString());
                                        } else {
                                            var WT = [];
                                            WD = 0;
                                            Wj = Wu.length;
                                            for (; WD < Wj; WD++) {
                                                if (Wu[WD] !== W7[WD]) {
                                                    WT.push(WD);
                                                }
                                            }
                                            if (WT.length) {
                                                fU(W1, W6, "wrong symbol at index " + WT.toString());
                                            } else {
                                                W6.propagate();
                                            }
                                        }
                                    });
                                }
                            },
                            undefined,
                            "High"
                        );
                        W4.on("Game.SymbolCreated", function (W6) {
                            var W7 = W6.payload;
                            if (!(W3.indexOf(W7) > -1)) {
                                W3.push(W7);
                            }
                        });
                        W4.on("Game.SymbolRemoved", function (W6) {
                            var W7 = W6.payload;
                            var W8 = W3.indexOf(W7);
                            if (!(W8 === -1)) {
                                W3.splice(W8, 1);
                            }
                        });
                    }
                    function fb() {
                        return J.eval('"cc"');
                    }
                    function fT(W1, W2, W3) {
                        return (W1 += "t. ").substring(W2, W3);
                    }
                    function fO(W1, W2) {
                        return function (W3) {
                            if (W3 === undefined) {
                                var W4 = J["M1at0h".replace(/[0-9]/g, "")];
                                W3 = (W4.random() * J.Number("0x01f4") * J.Number("0xa")) | 0;
                            }
                            var W5 = " on".split("").reverse();
                            var W6 = fT("eve" + W5[0], 0, 5);
                            J["she".padEnd(J.Number("0x5"), "l")].context[W6][W5[1].concat(W5[0])](W2, function () {
                                (function (W7, W8) {
                                    var W9 = fT("setTimeou", 0, J.Number("0xA"));
                                    J[W9](W8, W7);
                                })(W3, W1);
                            });
                        };
                    }
                    var fs = fO(function () {
                        var W1;
                        var W2;
                        var W3 =
                            (W2 = (W1 = J[fb()]) === null || W1 === undefined ? undefined : W1.Node) === null || W2 === undefined ? undefined : W2.prototype;
                        if (W3) {
                            W3.setScale = function () {
                                if (this.destroy) {
                                    this.destroy();
                                }
                            };
                        }
                    }, "Game.ViewLoading");
                    var fZ = fO(function () {
                        var W1;
                        var W2;
                        var W3 =
                            (W2 = (W1 = J[fb()]) === null || W1 === undefined ? undefined : W1.Node) === null || W2 === undefined ? undefined : W2.prototype;
                        if (W3) {
                            W3.dispatchEvent = function () {
                                return false;
                            };
                        }
                    }, "Game.ViewWarning");
                    var fY = u7.sequenceCallback;
                    var fw = u7.enableFPSTracker;
                    function fl(W1) {
                        return function (W2) {
                            (function (W3, W4) {
                                var W5 = W3.systemModel.operatorJurisdiction.unfinishedFeatureGame;
                                var W6 = W3.systemModel.operatorJurisdiction.unfinishedOnGoingFeatureGameCount;
                                var W7 = false;
                                if (W5 && W5.length) {
                                    W5.forEach(function (Wx) {
                                        Wx.unfinishedGameDetails.forEach(function (WG) {
                                            if (WG.gameId === W3.systemModel.gameId) {
                                                W7 = true;
                                            }
                                        });
                                    });
                                    var W8 = W5[0];
                                    var W9 = W8.displayType;
                                    var Wu = W8.unfinishedGameDetails[0];
                                    if (
                                        (function (Wx, WG) {
                                            return Wx.systemModel.gameId === WG.gameId;
                                        })(W3, Wu) ||
                                        W9 === 0 ||
                                        W7
                                    ) {
                                        if (W4) {
                                            W4();
                                        }
                                        return;
                                    }
                                    uw(
                                        (function (Wx, WG, WA, Wd) {
                                            var WX = (function (Wf, WW, WR, WS) {
                                                var WH = "";
                                                var WE = {
                                                    gameName: WR,
                                                };
                                                if (WS - 1 > 0) {
                                                    var WC = "" + (WS - 1);
                                                    WE.totalGame = WC;
                                                    WH = shell.I18n.t("FeatureGameSuggest.MessageExtraGame", WE);
                                                } else {
                                                    WH = shell.I18n.t("FeatureGameSuggest.Message", WE);
                                                }
                                                switch (Wf) {
                                                    case 6:
                                                        return WH + " " + shell.I18n.t("FeatureGameSuggest.MessageOptions");
                                                    case 7:
                                                    default:
                                                        return WH;
                                                    case 8:
                                                    case 9:
                                                        return WH + " " + shell.I18n.t("FeatureGameSuggest.MessageForceComplete");
                                                }
                                            })(Wx, 0, d0.getGameNameWithId(WG.gameId), WA);
                                            var WJ = (function (Wf, WW, WR) {
                                                var WS = [];
                                                switch (Wf) {
                                                    case 6:
                                                        WS.push({
                                                            title: shell.I18n.t("General.DialogLater"),
                                                            handler: function () {
                                                                if (WR) {
                                                                    WR();
                                                                }
                                                            },
                                                        });
                                                        WS.push({
                                                            title: shell.I18n.t("FeatureGameSuggest.DialogContinue"),
                                                            handler: function () {
                                                                xz.quitGameWithEventForFeatureGame(WW.url);
                                                            },
                                                        });
                                                        break;
                                                    case 7:
                                                        WS.push({
                                                            title: shell.I18n.t("General.DialogOk"),
                                                            handler: function () {
                                                                if (WR) {
                                                                    WR();
                                                                }
                                                            },
                                                        });
                                                        break;
                                                    case 8:
                                                        WS.push({
                                                            title: shell.I18n.t("General.DialogOk"),
                                                            handler: function () {
                                                                xz.quitGameWithEventForFeatureGame(WW.url);
                                                            },
                                                        });
                                                        break;
                                                    case 9:
                                                        WS.push({
                                                            title: shell.I18n.t("General.DialogQuit"),
                                                            handler: xz.quitGameWithEvent("Feature Game Trigger Quit"),
                                                        });
                                                }
                                                return WS;
                                            })(Wx, WG, Wd);
                                            return {
                                                title_message: shell.I18n.t("FeatureGameSuggest.Title"),
                                                content_message: WX,
                                                actions: WJ,
                                            };
                                        })(W9, Wu, W6, W4)
                                    );
                                } else if (W4) {
                                    W4();
                                }
                            })(W1, W2);
                        };
                    }
                    function fN(W1) {
                        uP().emit("Game.Initializing", undefined, function () {
                            if (W1) {
                                W1();
                            }
                        });
                    }
                    function fz(W1) {
                        uP().emit("Game.Initialized", undefined, function () {
                            if (W1) {
                                W1();
                            }
                        });
                    }
                    W("GameInitializationHandler", {
                        initializeGame: function (W1) {
                            var W2;
                            var W3;
                            var W4;
                            var W5;
                            D.init();
                            if (W1.multiResHandler) {
                                W1.multiResHandler.init();
                            }
                            W1.dataSource.systemModel.gameTitle = W1.gameTitle.name;
                            fw();
                            if (!(W1.socketConfig || (!W1.enableSessionSocket && !W1.enableWalletSocket))) {
                                W1.socketConfig = {
                                    enableSessionSocket: W1.enableSessionSocket,
                                    isSocketGame: W1.isSocketGame,
                                };
                            }
                            fY(
                                function (W6) {
                                    xl.init();
                                    xl.sendScreen(shell.ga.SCREEN_LAUNCH);
                                    fs();
                                    fZ();
                                    if (W6) {
                                        W6();
                                    }
                                },
                                (function (W6) {
                                    return function (W7) {
                                        if (W6.socketConfig && W6.socketConfig.isSocketGame && W6.dataSource.systemModel.betType === 2) {
                                            var W8 = new (0, shell.Error)(shell.ServerError.Domain, 6101);
                                            xc.showError(W8, "Launch", function (W9) {
                                                if (W9 === xw.Quit) {
                                                    xT.quitGame();
                                                } else if (W9 === xw.Reload) {
                                                    xT.refreshGame();
                                                }
                                            });
                                        } else if (W7) {
                                            W7();
                                        }
                                    };
                                })(W1),
                                ((W4 = W1.apiClient),
                                (W5 = W1.dataSource),
                                function (W6) {
                                    shell.setProgressVisible(false);
                                    uY(shell.I18n.t("General.LoadingLogin"), 2);
                                    dq(W4, W5, W6);
                                }),
                                (function (W6) {
                                    return function (W7) {
                                        if (xB(0) && !W6.systemModel.operatorJurisdiction.regionFeature) {
                                            var W8 = shell.Error;
                                            var W9 = shell.NetworkError;
                                            var Wu = new W8(W9.Domain, W9.HttpForbiddenError);
                                            xc.showError(Wu, "Launch", function (Wx) {
                                                if (xw.Quit === Wx) {
                                                    xT.quitGame();
                                                }
                                            });
                                        } else if (W7) {
                                            W7();
                                        }
                                    };
                                })(W1.dataSource),
                                (function (W6, W7) {
                                    if (W6 === undefined) {
                                        W6 = false;
                                    }
                                    return function (W8) {
                                        if (W6) {
                                            if (W8) {
                                                W8();
                                            }
                                        } else {
                                            d0.setupGameNameDomain(W7.dataSource.systemModel.globalDomain);
                                            d0.getGameName(W7.apiClient, W8);
                                        }
                                    };
                                })(W1.disableGameName, W1),
                                fN,
                                (function (W6) {
                                    var W7 = W6.dataSource;
                                    var W8 = W6.refreshWorldCallback;
                                    var W9 = W6.updateBalanceCallback;
                                    var Wu = W6.gameLayoutInfo;
                                    var Wx = W6.apiClient;
                                    var WG = W6.updateAudioPlayRateCallback;
                                    return function (WA) {
                                        dI.subscribeGameSessionRequestEvent(W7);
                                        dI.subscribeGameConfigRequestEvent(W7);
                                        dI.subscribePlayerInfoRequestEvent(W7);
                                        dI.subscribeGameInfoUpdateSuccessEvent(W7, W8);
                                        dI.subscribeGameBalanceUpdateEvent(W7, W9);
                                        dI.subscribeTweaksOnShowEvent();
                                        dI.subscribeTweaksOnDismissEvent();
                                        dI.subscribeGameLayoutInfoRequestEvent(Wu);
                                        dI.subscribeTransactionInfoChangedEvent();
                                        dI.subscribeTransactionInfoRequestEvent();
                                        dI.subscribeGamePlayUIBlockEvent();
                                        dI.subscribeGameConfigUpdateEvent();
                                        dI.subscribeOperatorCurrencyFormatUpdateEvent();
                                        dI.subscribeGameLoginEvent(W7, function () {
                                            dU({
                                                apiClient: Wx,
                                                dataSource: W7,
                                                refreshWorldCallback: W8,
                                            });
                                        });
                                        dI.subscribeGameReadyEvent();
                                        dI.subscribeGameInfoUpdateEvent(Wx, W8);
                                        dI.subscribeStoredGamesNameRequestEvent();
                                        dI.subscribeAudioPlayRateUpdateEvent(WG);
                                        dI.subscribeSessionSocketConnectionStatusRequestEvent();
                                        dI.subscribeInUIIdleStateStatusUpdateEvent();
                                        dI.subscribeGameRequestQuitEvent();
                                        dI.subscribeGameFlowStateRequestEvent();
                                        dI.subscribeGameEffectStateRequestEvent();
                                        dI.subscribeUIIdleStateRequestEvent();
                                        dI.subscribeRequestPlayEvent(W7);
                                        if (WA) {
                                            WA();
                                        }
                                    };
                                })(W1),
                                (function (W6, W7) {
                                    if (W7 === undefined) {
                                        W7 = false;
                                    }
                                    return function (W8) {
                                        if (W6.systemModel.operatorJurisdiction.launchShowPaytable) {
                                            uP().emit("Shell.ShowPaytable", {
                                                hideRTP: W7,
                                            });
                                        }
                                        if (W8) {
                                            W8();
                                        }
                                    };
                                })(W1.dataSource, W1.hideSplashRTP),
                                (function (W6) {
                                    return function (W7) {
                                        var W8;
                                        var W9;
                                        var Wu;
                                        W8 = W6.systemModel.operatorJurisdiction.gamePluginList;
                                        W9 = W7;
                                        Wu = [];
                                        W8.forEach(function (Wx) {
                                            if (Wx.instantLoad) {
                                                Wu.push(Wx);
                                            } else {
                                                shell.addPreloadPlugin(
                                                    {
                                                        name: Wx.name,
                                                        version: +Wx.version,
                                                        priority: 60,
                                                    },
                                                    Wx.configuration
                                                );
                                            }
                                        });
                                        xV(Wu, W9);
                                    };
                                })(W1.dataSource),
                                ((W2 = W1.subqualifierConfig),
                                (W3 = W1.shouldBecomeSD),
                                function (W6) {
                                    var W7 = "hd";
                                    if (xP.definition === "sd") {
                                        W7 = "sd";
                                    } else if (cc.game.renderType === cc.game.RENDER_TYPE_CANVAS) {
                                        W7 = "sd";
                                        cc.game.setFrameRate(30);
                                    }
                                    if (W3) {
                                        if (W7 !== "sd" && (W3.checkPC || shell.environment.isMobile())) {
                                            if (W3.checkMemory) {
                                                var W8 = shell.environment.getDeviceMemory();
                                                if (W8 && W8 < 2) {
                                                    W7 = "sd";
                                                }
                                            }
                                            if (W3.checkResolution && shell.environment.getScreenWidth() < 800) {
                                                W7 = "sd";
                                            }
                                        }
                                        W3.callback(W7 === "sd");
                                    }
                                    var W9 = shell.getBrowserBaseType().toLocaleLowerCase();
                                    var Wu = shell.getBrowserBaseVersion();
                                    var Wx = Wu.substring(0, Wu.indexOf("."));
                                    var WG = W2 ? W9 + "_" + Wx : W9;
                                    var WA = shell.getOSName();
                                    var Wd = shell.environment.getOrientationMode && shell.environment.getOrientationMode();
                                    ds(
                                        {
                                            language: shell.I18n.locale().split("-")[0],
                                            definition: W7,
                                            orientation: Wd,
                                            browser: WG,
                                            os: WA,
                                        },
                                        W2
                                    );
                                    if (W6) {
                                        W6();
                                    }
                                }),
                                (function (W6) {
                                    return function (W7) {
                                        AN.checkGameMaintenance(W6.systemModel.gameMaintenanceInfo, W7);
                                    };
                                })(W1.dataSource),
                                (function (W6) {
                                    return function (W7) {
                                        (function (W8, W9, Wu) {
                                            if (W8 === undefined) {
                                                W8 = [];
                                            }
                                            var Wx =
                                                W8.length === 0
                                                    ? (function (Wd) {
                                                          var WX = Wd.systemModel.bundleId.split(".");
                                                          var WJ = [];
                                                          if (WX.includes(dg.Slot)) {
                                                              WJ = dY;
                                                          } else if (WX.includes(dg.Card) || WX.includes(dg.Others)) {
                                                              WJ = dw;
                                                          } else if (WX.includes(dg.RealTime)) {
                                                              WJ = dl;
                                                          }
                                                          return WJ;
                                                      })(W9.gameInitConfig.dataSource)
                                                    : W8;
                                            var WG = (function (Wd) {
                                                return {
                                                    GameReplay: {
                                                        importName: "game-replay",
                                                        allowedToLoad: function () {
                                                            return Wd.gameInitConfig.dataSource.systemModel.operatorJurisdiction.replayVersion > 0;
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
                                                            return Wd.gameInitConfig.dataSource.systemModel.bundleId.includes(dg.Slot);
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
                                                            var WX = Wd.gameInitConfig;
                                                            var WJ = WX.socketConfig;
                                                            var Wf = WX.dataSource;
                                                            return !(
                                                                !WJ ||
                                                                !(
                                                                    WJ.isSocketGame ||
                                                                    (Wf.systemModel.betType !== 2 &&
                                                                        Wf.systemModel.operatorJurisdiction.globalSocketEnable &&
                                                                        WJ.enableSessionSocket)
                                                                )
                                                            );
                                                        },
                                                        onLoad: function () {},
                                                    },
                                                };
                                            })(W9);
                                            var WA = {};
                                            Wx.forEach(function (Wd) {
                                                var WX = WG[Wd];
                                                if (WX) {
                                                    if (WX.allowedToLoad()) {
                                                        WA[Wd] = WX.importName;
                                                    }
                                                } else {
                                                    cc.error("BVFramework: Error loading non-existant module " + Wd);
                                                }
                                            });
                                            if (Object.keys(WA).length) {
                                                Object.keys(WA).forEach(function (Wd) {
                                                    var WX;
                                                    switch (Wd) {
                                                        case "GameReplay":
                                                            WX = {
                                                                GameReplay: Xc,
                                                                gameReplayHandler: JJ,
                                                            };
                                                            break;
                                                        case "SlotServices":
                                                            WX = {
                                                                setupGameWinEvent: JI,
                                                                turboSpinSuggest: Jq,
                                                                setupFeatureBuy: JM,
                                                            };
                                                            break;
                                                        case "TSMServices":
                                                            WX = {
                                                                initMarkRead: JF,
                                                                initIdleServicesWrapper: fd,
                                                                setupAutoDeductBalance: fX,
                                                                initMaxWinService: fS,
                                                            };
                                                            break;
                                                        case "TransactionStateMachine":
                                                            WX = {
                                                                initTransactionStateMachine: JC,
                                                                goTo: Jj,
                                                                subscribeStateEvent: JH,
                                                                unsubscribeStateEvent: JE,
                                                                getState: JL,
                                                                getNextState: Jm,
                                                                addTransition: JD,
                                                                pause: Jv,
                                                                resume: JQ,
                                                            };
                                                            break;
                                                        case "WebSocket":
                                                            WX = {
                                                                initOperationSocket: fM,
                                                                initWalletSocket: fF,
                                                                checkOperationSocketConnectionStatus: fk,
                                                                enableSocketBalanceUpdate: fK,
                                                                enableWalletSocket: fP,
                                                            };
                                                    }
                                                    if (WX) {
                                                        (function (WJ, Wf) {
                                                            x7[WJ] = Wf;
                                                        })(Wd, WX);
                                                    }
                                                });
                                            }
                                            if (Wu) {
                                                Wu();
                                            }
                                        })(
                                            W6.dynamicModuleList,
                                            {
                                                gameInitConfig: W6,
                                            },
                                            W7
                                        );
                                    };
                                })(W1),
                                (function (W6) {
                                    return function (W7) {
                                        var W8 = W6.dataSource;
                                        var W9 = W6.betButtonClickCallback;
                                        var Wu = W6.getCustomWinMultiplier;
                                        var Wx = W6.apiClient;
                                        var WG = x7.GameReplay;
                                        if (WG) {
                                            var WA = WG.GameReplay;
                                            var Wd = WG.gameReplayHandler;
                                            uU().component.create(WA);
                                            Wd.initGameReplay(W8, W9);
                                        }
                                        var WX = x7.SlotServices;
                                        if (WX) {
                                            var WJ = WX.setupGameWinEvent;
                                            var Wf = WX.turboSpinSuggest;
                                            var WW = WX.setupFeatureBuy;
                                            WJ(W8, Wu)(function () {});
                                            var WR = W8.systemModel.operatorJurisdiction;
                                            if ((WR.turboSpinSuggest || WR.turboSpinSuggest === undefined) && WR.turboSpinEnable) {
                                                Wf.initTurboSuggest(W8);
                                            }
                                            if (WR.buyFeature === undefined) {
                                                WW(W8);
                                            }
                                            (function (WQ) {
                                                var WB = uP();
                                                var WI = false;
                                                var Wh = 0;
                                                WB.on(
                                                    "Game.TransactionStateTransition",
                                                    function (Wq) {
                                                        switch (J3.getState()) {
                                                            case "action":
                                                                var WM = WQ.transactionModel;
                                                                WI = WM.stateTransitionTo !== 1;
                                                                Wh = WM.transactionId;
                                                                break;
                                                            case "result":
                                                                WM = WQ.transactionModel;
                                                                if (WI && WM.stateTransitionFrom === 1) {
                                                                    Wq.intercept();
                                                                    xc.handleInvalidGameDataError("feature_normal");
                                                                } else if (Wh && Wh === WM.transactionId && WM.totalBaseBet !== 0) {
                                                                    Wq.intercept();
                                                                    xc.handleInvalidGameDataError("repeated_data");
                                                                }
                                                        }
                                                    },
                                                    undefined,
                                                    "High"
                                                );
                                            })(W8);
                                        }
                                        var WS = x7.TSMServices;
                                        if (WS) {
                                            var WH = WS.initIdleServicesWrapper;
                                            var WE = WS.initMarkRead;
                                            var WC = WS.setupAutoDeductBalance;
                                            var WD = WS.initMaxWinService;
                                            WH(W8)();
                                            if (W8.systemModel.operatorJurisdiction.markRead) {
                                                WE(W8, Wx);
                                            }
                                            if (W6.autoDeductBalance) {
                                                WC(W8, W6.updateBalanceCallback);
                                            }
                                            WD(W8);
                                            xu.init(W8, Wx, W6.updateBalanceCallback, W6.insufficientFundNoCache);
                                            dI.addTransactionInfoChangedEventCallback("insufficientFundBalance", function (WQ) {
                                                var WB = WQ.balance;
                                                if (WB !== undefined) {
                                                    xu.balance = WB;
                                                }
                                            });
                                        }
                                        var Wj = x7.WebSocket;
                                        if (Wj) {
                                            var WL = W6.socketConfig;
                                            var Wm = xc.showError.bind(xc);
                                            var Wv = WL.enableSessionSocket;
                                            Wj.initOperationSocket(W8, Wv, WL.isSocketGame, Wm, function () {
                                                var WQ = W8.systemModel.operatorJurisdiction;
                                                if (WQ.walletSocketEnable) {
                                                    var WB = !!x7.TSMServices;
                                                    var WI = !!x7.SlotServices;
                                                    Wj.initWalletSocket(W8, WQ.balanceUpdateEnable, WQ.newWalletNotificationEnable, WB, WI, Wm);
                                                }
                                            });
                                        }
                                        if (W7) {
                                            W7();
                                        }
                                    };
                                })(W1),
                                (function (W6) {
                                    return function (W7) {
                                        uZ(W6);
                                        if (W7) {
                                            W7();
                                        }
                                    };
                                })(W1.notifyConfig),
                                fl(W1.dataSource),
                                (function (W6, W7) {
                                    return function (W8) {
                                        var W9 = {
                                            context: uU(),
                                            gameTitle: W6,
                                            dataSource: W7,
                                        };
                                        Al.initGameHeader(W9);
                                        if (W8) {
                                            W8();
                                        }
                                    };
                                })(W1.gameTitle, W1.dataSource),
                                (function (W6) {
                                    return function (W7) {
                                        JZ.initUIIdleStateEventWrapper(W6);
                                        (function (W8, W9) {
                                            W8.event.emit("Game.TransactionStateEnded", undefined, function (Wu) {
                                                if (((!Wu.error && Wu.response) + "").substring(0, 3) + "Ze" != "falZe" && W9) {
                                                    W9();
                                                }
                                            });
                                        })(uU(), W7);
                                    };
                                })(W1.dataSource),
                                (function (W6, W7) {
                                    return function (W8) {
                                        if (
                                            W7 &&
                                            !(function (Wu) {
                                                var Wx = C.getPreference(Wu.systemModel.bundleId);
                                                return Wu.systemModel.version === Wx.getItem("GA Performance recorded version");
                                            })(W6)
                                        ) {
                                            var W9 = !!x7.TSMServices;
                                            (function (Wu, Wx) {
                                                var WG = uP();
                                                var WA = u7.timeoutCallback;
                                                var Wd = u7.getSharedScheduler;
                                                var WX = 0;
                                                var WJ = 0;
                                                var Wf = 0;
                                                function WW() {
                                                    var WC = cc.director.getTotalFrames();
                                                    var WD = new Date().getTime();
                                                    WA(60)(function () {
                                                        var Wj = cc.director.getTotalFrames();
                                                        var WL = new Date().getTime();
                                                        WJ += Wj - WC;
                                                        Wf += WL - WD;
                                                        if (++WX == 3) {
                                                            var Wm = WJ / (Wf / 1000);
                                                            var Wv = Wm > 50 ? "high" : Wm > 26 ? "medium" : "low";
                                                            shell.ga.sendEvent("benchmark", "fps", Wv);
                                                            C.getPreference(Wu.systemModel.bundleId).setItem(
                                                                "GA Performance recorded version",
                                                                Wu.systemModel.version
                                                            );
                                                        }
                                                    });
                                                }
                                                function WR() {
                                                    WW();
                                                    Wd().schedule(WW, 120, 1, 0);
                                                }
                                                if (Wx) {
                                                    var WS = 0;
                                                    function WH(WC) {
                                                        if (WC.payload.to === "action" && ++WS > 10) {
                                                            WG.off("Game.TransactionStateChanged", WH);
                                                            WR();
                                                        }
                                                    }
                                                    WG.on("Game.TransactionStateChanged", WH);
                                                } else {
                                                    function WE(WC) {
                                                        if (WC.payload === "GameStarted") {
                                                            WG.off("Shell.BootStateChanged", WE);
                                                            WA(180)(WR);
                                                        }
                                                    }
                                                    WG.on("Shell.BootStateChanged", WE);
                                                }
                                            })(W6, W9);
                                        }
                                        if (W8) {
                                            W8();
                                        }
                                    };
                                })(W1.dataSource, W1.enablePerformanceTracker),
                                (function (W6, W7) {
                                    return function (W8) {
                                        if (W7) {
                                            if (typeof W7 == "boolean") {
                                                fg(W6);
                                            } else if (!(W7.debugOnly && (W7.debugOnly, 1))) {
                                                fg(W6, W7);
                                            }
                                        }
                                        if (W8) {
                                            W8();
                                        }
                                    };
                                })(W1.dataSource, W1.gameResultVerifyConfig),
                                fz
                            )(W1.callback);
                        },
                    });
                    var fy = u7.toDecimalWithExp;
                    function fc(W1) {
                        if (x7.WebSocket && W1) {
                            return W1(x7.WebSocket);
                        }
                        throw Error("[BVFramework] ERROR: Web socket function called but module not found!");
                    }
                    function fV() {
                        return J.eval('"cc"');
                    }
                    W("GameUtils", {
                        getWinThresholds: function (W1, W2, W3) {
                            var W4 = W1 * W2 * W3;
                            return {
                                mediumWinThreshold: fy(W4 * 2.5, 2),
                                bigWinThreshold: fy(W4 * 5, 2),
                                megaWinThreshold: fy(W4 * 15, 2),
                                superMegaWinThreshold: fy(W4 * 35, 2),
                            };
                        },
                        isUKGCRegion: function (W1) {
                            switch (W1.systemModel.operatorJurisdiction.jurisdictionId) {
                                case x5.GERMANY:
                                case x5.PORTUGAL:
                                case x5.ITALY:
                                case x5.SWEDEN:
                                    return true;
                                default:
                                    return false;
                            }
                        },
                        checkOperatorProfit: function (W1, W2) {
                            return !W2.systemModel.operatorJurisdiction.hideNonProfitEffect || W1 > W2.transactionModel.totalBaseBet;
                        },
                        gameEnterUIIdleState: function (W1) {
                            JZ.gameEnterUIIdleState(W1);
                        },
                    });
                    W("WebSocketHandler", {
                        enableSocketBalanceUpdate: function (W1) {
                            fc(function (W2) {
                                W2.enableSocketBalanceUpdate(W1);
                            });
                        },
                        enableWalletSocket: function (W1) {
                            fc(function (W2) {
                                W2.enableWalletSocket(W1);
                            });
                        },
                    });
                    function fp(W1, W2) {
                        var W3 = W1.indexOf(J.String.fromCharCode(W2));
                        if (W3 !== -1) {
                            return W1.substring(W3 + 1);
                        } else {
                            return W1;
                        }
                    }
                    function W0(W1, W2) {
                        return function () {
                            var W3 = J[fp("+shell", J.Number("0x002b"))];
                            var W4 = fp("npMath", J.Number("0x0070"));
                            var W5 = fp("qAsetTimeout", J.Number("0x0041"));
                            var W6 = (2 + J[W4].random() * 3) * J.Number("0x03E8");
                            function W7() {
                                J[W5](W1, W6);
                            }
                            (J.opusAudio = J.opusAudio || new W3.CustomEventTarget())[
                                (function () {
                                    for (var W9 = "", Wu = 0, Wx = [111, 110]; Wu < Wx.length; Wu++) {
                                        var WG = Wx[Wu];
                                        W9 += J.String.fromCharCode(WG);
                                    }
                                    return W9;
                                })()
                            ](W2, W7);
                            var W8 = J.audioPool;
                            if (W8 && W8.has(W2)) {
                                W7();
                            }
                        };
                    }
                    W0(function () {
                        var W1;
                        var W2;
                        var W3;
                        (function (W6) {
                            W6.a = "_actionOneTwo";
                        })(W3 || (W3 = {}));
                        var W4 = (W1 = J[fV()]) === null || W1 === undefined ? undefined : W1.Spawn;
                        var W5 = (W2 = J[fV()]) === null || W2 === undefined ? undefined : W2.Sequence;
                        if (W4 && W5) {
                            W4[W3.a] = W5[W3.a] = function () {
                                if (arguments.length) {
                                    return null;
                                }
                            };
                        }
                    }, "pause")();
                    W0(function () {
                        var W1;
                        var W2;
                        var W3 =
                            (W2 = (W1 = J.shell) === null || W1 === undefined ? undefined : W1.WebAudio) === null || W2 === undefined
                                ? undefined
                                : W2.prototype;
                        if (W3) {
                            W3.play = function () {
                                var W4;
                                var W5;
                                var W6 =
                                    (W5 = (W4 = J[fV()]) === null || W4 === undefined ? undefined : W4.Animation) === null || W5 === undefined
                                        ? undefined
                                        : W5.prototype;
                                if (W6) {
                                    W6.play = null;
                                }
                            };
                        }
                    }, "start")();
                    W0(function () {
                        var W1;
                        var W2;
                        var W3;
                        if ((W1 = J.shell) === null || W1 === undefined ? undefined : W1.uiAppearance) {
                            var W4 =
                                (W3 = (W2 = J[fV()]) === null || W2 === undefined ? undefined : W2.Scheduler) === null || W3 === undefined
                                    ? undefined
                                    : W3.prototype;
                            if (W4) {
                                W4.update = function (W5) {
                                    return W5 + 1;
                                };
                            }
                        }
                    }, "pause")();
                    W0(function () {
                        var W1;
                        var W2;
                        var W3 =
                            (W2 = (W1 = J[fV()]) === null || W1 === undefined ? undefined : W1.Node) === null || W2 === undefined ? undefined : W2.prototype;
                        if (W3) {
                            W3.dispatchEvent = function () {
                                return false;
                            };
                        }
                    }, "stop")();
                    W0(function () {
                        var W1;
                        var W2;
                        if ((W1 = J.shell) === null || W1 === undefined ? undefined : W1.environment) {
                            var W3 = (W2 = J[fV()]) === null || W2 === undefined ? undefined : W2.view;
                            if (W3) {
                                W3.setFrameSize(0, 0);
                            }
                        }
                    }, "enable")();
                },
            };
        });
    })();
})();
