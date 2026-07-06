(function () {
    "use strict";

    (function () {
        var X;
        (function (l) {
            l.i = "window";
            l.l = "self";
        })(X || (X = {}));
        var d = (0, eval)("this");
        d[X.l];
        var M = d[X.i];
        System.register(["6d5cafebdb", "react", "react-dom", "99212c6ec4", "styled-components", "react-spring/renderprops"], function (S) {
            "use strict";

            var K;
            var Y;
            var A;
            var x;
            var c;
            var v;
            var N;
            var Q;
            return {
                setters: [
                    null,
                    function (G) {
                        K = G.default;
                    },
                    function (G) {
                        Y = G.default;
                    },
                    function (G) {
                        A = G.ResRC;
                        x = G.Utils;
                        c = G.XHR;
                    },
                    function (G) {
                        v = G.default;
                    },
                    function (G) {
                        N = G.animated;
                        Q = G.Spring;
                    },
                ],
                execute: function () {
                    var I0 = M.__extends;
                    var I1 = M.__assign;
                    var I2 = M.__decorate;
                    var I3 = M.__awaiter;
                    var I4 = M.__generator;
                    var I5 = M.__makeTemplateObject;
                    function I6(db, dw) {
                        var df = {};
                        for (var dO in dw) {
                            if (db.hasOwnProperty(dO)) {
                                df[db[dO]] = dw[dO];
                            } else {
                                df[dO] = dw[dO];
                            }
                        }
                        return df;
                    }
                    I6(
                        {
                            unloadBundleAsset: "releaseBundleAsset",
                            unload: "release",
                            unloadBundle: "releaseBundle",
                            deleteBundle: "removeBundle",
                            loadByBundleAsset: "loadBundleAsset",
                            loadRemoteBySingle: "loadRemoteSingle",
                        },
                        A
                    );
                    var I7 = I6(
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
                        x
                    );
                    function I8(db) {
                        return Object.prototype.toString.call(db) === "[object Object]";
                    }
                    function I9(db) {
                        return function (dw, df) {
                            dw =
                                dw ||
                                (function (dO) {
                                    var dk = undefined;
                                    if (I8(dO) && dO.hasOwnProperty("err") && dO.hasOwnProperty("dt")) {
                                        var dU = dO.err;
                                        if (dU) {
                                            dk = (function (dp) {
                                                var dm;
                                                if (!I8(dp)) {
                                                    dp = {};
                                                }
                                                if (
                                                    !(
                                                        dp.hasOwnProperty("cd") &&
                                                        (typeof (dm = dp.cd) == "number" ||
                                                            (typeof dm == "string" && dm !== "" && !/\s/.test(dm) && !isNaN(+dm)))
                                                    )
                                                ) {
                                                    dp.cd = 6501;
                                                }
                                                return new (0, shell.Error)(shell.ServerError.Domain, dp.cd, dp.tid);
                                            })(dU);
                                        }
                                    } else {
                                        dk = new (0, shell.Error)(shell.ServerError.Domain, 6501);
                                    }
                                    return dk;
                                })(df);
                            db(dw, df);
                        };
                    }
                    function II(db, dw, df, dO) {
                        var dk = db.request("POST", dw, df, I9(dO));
                        return function () {
                            return dk.abort();
                        };
                    }
                    var IJ = (function () {
                        function db() {
                            this.u = undefined;
                            this.h = undefined;
                            this.v = new c();
                        }
                        db.prototype.setAPIUrls = function (dw, df) {
                            this.u = dw;
                            this.h = df;
                        };
                        db.prototype.request = function (dw, df, dO) {
                            return II(this.v, this.u + dw, df, dO);
                        };
                        db.prototype.serviceRequest = function (dw, df, dO) {
                            return II(this.v, this.h + dw, df, dO);
                        };
                        return db;
                    })();
                    var Iy = "Game.ViewLoading";
                    var IT = "Game.ViewError";
                    var IX = "Game.ViewSuccess";
                    var Id = "Game.ViewWarning";
                    var IM = "Game.ViewPopulated";
                    function Il(db, dw) {
                        var df = db.indexOf(M.String.fromCharCode(dw));
                        if (df !== -1) {
                            return db.substring(df + 1);
                        } else {
                            return db;
                        }
                    }
                    function IS(db) {
                        return db.replace(/[0-9]/g, "");
                    }
                    function IK(db) {
                        return ["c ont ext", "eve nt", "em it "][db]
                            .split("")
                            .filter(function (dw) {
                                return dw !== " ";
                            })
                            .join("");
                    }
                    function IY(db) {
                        if (db < 10 && db >= 0) {
                            return "0" + db.toString();
                        } else {
                            return db;
                        }
                    }
                    var IA;
                    var Is;
                    var Ix;
                    var Ic;
                    var Iv;
                    var IN;
                    var IQ;
                    var IG = new ((function () {
                        function db() {}
                        Object.defineProperty(db.prototype, "context", {
                            get: function () {
                                return this.C;
                            },
                            set: function (dw) {
                                this.C = dw;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "googleAnalyticCurrentScreen", {
                            get: function () {
                                return this.B;
                            },
                            set: function (dw) {
                                this.B = dw;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "isRTL", {
                            get: function () {
                                return shell.isRTLLanguage && shell.isRTLLanguage();
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        return db;
                    })())();
                    function IL(db) {
                        var dw = Is;
                        db.btt = isNaN(dw) ? 0 : dw;
                        db.wk = db.wk ? db.wk : Ix;
                        db.atk = IA;
                        db.pf = Iv;
                        db.gid = Ic;
                        return db;
                    }
                    var Ig = "B";
                    var IH = "G";
                    var IV = new ((function () {
                        function db() {
                            this.W = false;
                            this.S = false;
                            this.G = false;
                            this.O = false;
                        }
                        Object.defineProperty(db.prototype, "data", {
                            set: function (dw) {
                                this.F = dw.tbb;
                                this.T = dw.rfgc;
                                this.N = dw.tfgb;
                                this._ = dw.ch;
                                this.W = dw.iebe;
                                this.S = dw.iefge;
                                this.G = dw.inbe;
                                this.O = dw.infge;
                                this.A = dw.p;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "walletType", {
                            get: function () {
                                return this.L;
                            },
                            set: function (dw) {
                                this.L = dw;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "bonusWalletAmt", {
                            get: function () {
                                return this.F;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "freeGameRemaining", {
                            get: function () {
                                return this.T;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "freeGameAmt", {
                            get: function () {
                                return this.N;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "cashDetailInfo", {
                            get: function () {
                                return this._;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "isExpiredBonusExist", {
                            get: function () {
                                return this.W;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "isExpiredFreeGameExist", {
                            get: function () {
                                return this.S;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "isNewBonusExist", {
                            get: function () {
                                return this.G;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "isNewFreeGameExist", {
                            get: function () {
                                return this.O;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "tournamentInfo", {
                            get: function () {
                                return this.A;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        return db;
                    })())();
                    var IC = new ((function () {
                        function db() {
                            this.I = "rgba(255,255,255,1)";
                        }
                        Object.defineProperty(db.prototype, "gameRawInfo", {
                            get: function () {
                                return this.R;
                            },
                            set: function (dw) {
                                this.R = dw;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "transactionInfo", {
                            get: function () {
                                return this.D;
                            },
                            set: function (dw) {
                                this.D = dw;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "gameID", {
                            get: function () {
                                return this.j;
                            },
                            set: function (dw) {
                                this.j = dw;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "status", {
                            get: function () {
                                return this.M;
                            },
                            set: function (dw) {
                                this.M = dw;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "gameNameObj", {
                            get: function () {
                                return this.U;
                            },
                            set: function (dw) {
                                this.U = dw;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "gameIconUrl", {
                            get: function () {
                                return this.P;
                            },
                            set: function (dw) {
                                this.P = dw;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "gameThemeColor", {
                            get: function () {
                                return this.I;
                            },
                            set: function (dw) {
                                this.I = dw;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        return db;
                    })())();
                    function IW(db) {
                        if (shell.environment.getOrientationMode() === "land") {
                            return db * 0.75;
                        } else {
                            return db;
                        }
                    }
                    function Iz(db) {
                        if (shell.environment.getOrientationMode() === "land") {
                            return db / 0.75;
                        } else {
                            return db;
                        }
                    }
                    function IP(db) {
                        return db.orientation === "land";
                    }
                    var ID;
                    var Ih;
                    var Ib;
                    var Iw;
                    var If;
                    var IO;
                    var Ik;
                    var IU;
                    var Ip;
                    var Im;
                    var IR;
                    var Io;
                    var Ia;
                    var IB;
                    var Iq;
                    var IE;
                    var Ij;
                    var IF;
                    var IZ;
                    var Iu;
                    var J0 = v.div(
                        ID ||
                            (ID = I5(
                                [
                                    `
      margin: 0 auto;
      width: 95%;
      height: 100%;
      direction: `,
                                    ";\n",
                                ],
                                [
                                    `
      margin: 0 auto;
      width: 95%;
      height: 100%;
      direction: `,
                                    ";\n",
                                ]
                            )),
                        IG.isRTL ? "rtl" : "ltr"
                    );
                    var J1 = v.h4(
                        Ih ||
                            (Ih = I5(
                                [
                                    `
      display: inline-block;
      font-weight: normal;
      margin-top: `,
                                    ";\n    margin-bottom: ",
                                    "px;\n    line-height: ",
                                    "px;\n",
                                ],
                                [
                                    `
      display: inline-block;
      font-weight: normal;
      margin-top: `,
                                    ";\n    margin-bottom: ",
                                    "px;\n    line-height: ",
                                    "px;\n",
                                ]
                            )),
                        function (db) {
                            if (IP(db)) {
                                return "22px";
                            } else {
                                return "16px";
                            }
                        },
                        IW(19),
                        IW(20)
                    );
                    var J2 = v.div(
                        Ib ||
                            (Ib = I5(
                                [
                                    `
      cursor: pointer;
      position: absolute;
      right: `,
                                    ";\n    top: ",
                                    ";\n    transform: scale(",
                                    `);
      opacity: 0.4;
  `,
                                ],
                                [
                                    `
      cursor: pointer;
      position: absolute;
      right: `,
                                    ";\n    top: ",
                                    ";\n    transform: scale(",
                                    `);
      opacity: 0.4;
  `,
                                ]
                            )),
                        function (db) {
                            if (IP(db)) {
                                return "7px";
                            } else {
                                return "10px";
                            }
                        },
                        function (db) {
                            if (IP(db)) {
                                return "9px";
                            } else {
                                return "7px";
                            }
                        },
                        IW(0.75)
                    );
                    var J3 = v.div(
                        Iw ||
                            (Iw = I5(
                                [
                                    `
      font-size: 14px;
      opacity: 0.2;
      padding: 0px `,
                                    "px;\n    line-height: ",
                                    "px;\n",
                                ],
                                [
                                    `
      font-size: 14px;
      opacity: 0.2;
      padding: 0px `,
                                    "px;\n    line-height: ",
                                    "px;\n",
                                ]
                            )),
                        IW(24),
                        IW(20)
                    );
                    var J4 = v.button(
                        If ||
                            (If = I5(
                                [
                                    "\n    color: ",
                                    ";\n    padding: ",
                                    `px 0px;
      border-radius: 2px;
      text-align: center;
      cursor: pointer;
      font-family: inherit;
      width: 30%;
      margin-top: 14px;
      background-color: rgba(49, 49, 58, 1);
      border: 1px solid rgba(0, 0, 0, 0.3);
  `,
                                ],
                                [
                                    "\n    color: ",
                                    ";\n    padding: ",
                                    `px 0px;
      border-radius: 2px;
      text-align: center;
      cursor: pointer;
      font-family: inherit;
      width: 30%;
      margin-top: 14px;
      background-color: rgba(49, 49, 58, 1);
      border: 1px solid rgba(0, 0, 0, 0.3);
  `,
                                ]
                            )),
                        function (db) {
                            return db.themeColor || "rgb(255,255,255,1)";
                        },
                        IW(8)
                    );
                    var J5 = v.div(
                        IO ||
                            (IO = I5(
                                [
                                    `
      background-color: rgba(48,48,60,1);
      border: none;
      border-radius: 8px;
      width: 100%;
      text-align: center;
      margin: `,
                                    `px 0px;
      font-size: 13px;
      height: `,
                                    `px;
      position: relative;
      font-family: inherit;
      align-items: center;
      display: inline-flex;
  `,
                                ],
                                [
                                    `
      background-color: rgba(48,48,60,1);
      border: none;
      border-radius: 8px;
      width: 100%;
      text-align: center;
      margin: `,
                                    `px 0px;
      font-size: 13px;
      height: `,
                                    `px;
      position: relative;
      font-family: inherit;
      align-items: center;
      display: inline-flex;
  `,
                                ]
                            )),
                        IW(6),
                        IW(48)
                    );
                    var J6 = v(J5)(
                        Ik ||
                            (Ik = I5(
                                [
                                    `
      color: rgba(255,255,255,0.8);
  `,
                                ],
                                [
                                    `
      color: rgba(255,255,255,0.8);
  `,
                                ]
                            ))
                    );
                    var J7 = v(J5)(IU || (IU = I5(["\n    color: ", ";\n"], ["\n    color: ", ";\n"])), function (db) {
                        return db.themeColor || "rgba(255,255,255,0.8)";
                    });
                    var J8 = v(J5)(
                        Ip ||
                            (Ip = I5(
                                [
                                    `
      cursor: pointer;
      color: rgba(255,255,255,0.8);
  `,
                                ],
                                [
                                    `
      cursor: pointer;
      color: rgba(255,255,255,0.8);
  `,
                                ]
                            ))
                    );
                    var J9 = v(J5)(
                        Im ||
                            (Im = I5(
                                [
                                    `
      cursor: pointer;
      color: `,
                                    ";\n",
                                ],
                                [
                                    `
      cursor: pointer;
      color: `,
                                    ";\n",
                                ]
                            )),
                        function (db) {
                            return db.themeColor || "rgba(255,255,255,0.8)";
                        }
                    );
                    var JI = v.div(
                        IR ||
                            (IR = I5(
                                [
                                    "\n    padding-",
                                    ": ",
                                    "px;\n    text-align: ",
                                    `;
      width: 46.5%;
      display: inline-flex;
      align-items: center;
      position: relative;
  `,
                                ],
                                [
                                    "\n    padding-",
                                    ": ",
                                    "px;\n    text-align: ",
                                    `;
      width: 46.5%;
      display: inline-flex;
      align-items: center;
      position: relative;
  `,
                                ]
                            )),
                        IG.isRTL ? "right" : "left",
                        IW(19),
                        IG.isRTL ? "right" : "left"
                    );
                    var JJ = v.div(
                        Io ||
                            (Io = I5(
                                [
                                    "\n    padding-",
                                    ": ",
                                    "px;\n    text-align: ",
                                    `;
      width: 44.5%;
      line-height: `,
                                    "px;\n",
                                ],
                                [
                                    "\n    padding-",
                                    ": ",
                                    "px;\n    text-align: ",
                                    `;
      width: 44.5%;
      line-height: `,
                                    "px;\n",
                                ]
                            )),
                        IG.isRTL ? "left" : "right",
                        IW(24),
                        IG.isRTL ? "left" : "right",
                        IW(16)
                    );
                    var Jy = v.div(
                        Ia ||
                            (Ia = I5(
                                [
                                    `
      height: 40px;
      width: `,
                                    "px;\n    transform: scale(",
                                    ");\n    transform-origin: ",
                                    ";\n",
                                ],
                                [
                                    `
      height: 40px;
      width: `,
                                    "px;\n    transform: scale(",
                                    ");\n    transform-origin: ",
                                    ";\n",
                                ]
                            )),
                        IW(27),
                        IW(0.5),
                        IG.isRTL ? "right" : "left"
                    );
                    var JT = v.div(
                        IB ||
                            (IB = I5(
                                [
                                    `
      position: absolute;
      `,
                                    ": ",
                                    ";\n    bottom: ",
                                    ";\n    transform: scale(",
                                    ") ",
                                    ";\n",
                                ],
                                [
                                    `
      position: absolute;
      `,
                                    ": ",
                                    ";\n    bottom: ",
                                    ";\n    transform: scale(",
                                    ") ",
                                    ";\n",
                                ]
                            )),
                        IG.isRTL ? "left" : "right",
                        function (db) {
                            if (IP(db)) {
                                return "-7px";
                            } else {
                                return "-3px";
                            }
                        },
                        function (db) {
                            if (IP(db)) {
                                return "-2px";
                            } else {
                                return "3.5px";
                            }
                        },
                        IW(0.5),
                        IG.isRTL ? "scaleX(-1)" : ""
                    );
                    var JX = v.div(
                        Iq ||
                            (Iq = I5(
                                [
                                    `
      position: relative;
      width: 0px;
      left: `,
                                    ";\n    right: ",
                                    ";\n    top: ",
                                    ";\n    transform: scale(",
                                    ") ",
                                    ";\n",
                                ],
                                [
                                    `
      position: relative;
      width: 0px;
      left: `,
                                    ";\n    right: ",
                                    ";\n    top: ",
                                    ";\n    transform: scale(",
                                    ") ",
                                    ";\n",
                                ]
                            )),
                        IG.isRTL
                            ? "0px"
                            : function (db) {
                                  if (IP(db)) {
                                      return "-9px";
                                  } else {
                                      return "-12px";
                                  }
                              },
                        IG.isRTL ? "2px" : "0px",
                        function (db) {
                            if (IP(db)) {
                                return "-6px";
                            } else {
                                return "-8px";
                            }
                        },
                        IW(0.7),
                        IG.isRTL ? "scaleX(-1)" : ""
                    );
                    var Jd = v.div(
                        IE ||
                            (IE = I5(
                                [
                                    `
      word-wrap: break-word;
      transform: scale(`,
                                    ");\n    transform-origin: ",
                                    ";\n    width: ",
                                    "%;\n    height: ",
                                    "%;\n",
                                ],
                                [
                                    `
      word-wrap: break-word;
      transform: scale(`,
                                    ");\n    transform-origin: ",
                                    ";\n    width: ",
                                    "%;\n    height: ",
                                    "%;\n",
                                ]
                            )),
                        IW(1),
                        IG.isRTL ? "right" : "left",
                        Iz(100),
                        Iz(100)
                    );
                    var JM = v(Jd)(
                        Ij ||
                            (Ij = I5(
                                [
                                    `
      font-size: 11px;
      opacity: 0.6;
  `,
                                ],
                                [
                                    `
      font-size: 11px;
      opacity: 0.6;
  `,
                                ]
                            ))
                    );
                    var Jl = v(Jd)(
                        IF ||
                            (IF = I5(
                                [
                                    `
      font-size: 11px;
      opacity: 0.75;
  `,
                                ],
                                [
                                    `
      font-size: 11px;
      opacity: 0.75;
  `,
                                ]
                            ))
                    );
                    var JS = I7.formatCurrency;
                    var JK = shell.I18n;
                    var JY = v.div(
                        IZ ||
                            (IZ = I5(
                                [
                                    `
      display: flex;
      flex-direction: column;
      height: 87%;
  `,
                                ],
                                [
                                    `
      display: flex;
      flex-direction: column;
      height: 87%;
  `,
                                ]
                            ))
                    );
                    var JA = v.div(
                        Iu ||
                            (Iu = I5(
                                [
                                    `
      margin: auto;
  `,
                                ],
                                [
                                    `
      margin: auto;
  `,
                                ]
                            ))
                    );
                    var Js = (function (db) {
                        function dw() {
                            return (db !== null && db.apply(this, arguments)) || this;
                        }
                        I0(dw, db);
                        dw.prototype.shouldComponentUpdate = function (df) {
                            return this.props.show === df.show;
                        };
                        dw.prototype.render = function () {
                            return K.createElement(
                                J0,
                                {
                                    id: "walletListContainer",
                                },
                                this.V(),
                                this.H()
                            );
                        };
                        dw.prototype.V = function () {
                            return K.createElement(
                                "div",
                                null,
                                K.createElement(
                                    J1,
                                    {
                                        orientation: shell.environment.getOrientationMode(),
                                    },
                                    JK.t("WalletList.CashDistribute")
                                ),
                                K.createElement(J2, {
                                    className: "wallet-plugin-sprite wallet-plugin-ic_close",
                                    onClick: this.props.onCloseButtonClick,
                                    orientation: shell.environment.getOrientationMode(),
                                })
                            );
                        };
                        dw.prototype.H = function () {
                            if (this.props.error) {
                                return K.createElement(
                                    JY,
                                    null,
                                    K.createElement(
                                        JA,
                                        null,
                                        K.createElement(J3, null, K.createElement(Jd, null, this.props.error.message)),
                                        this.props.error.shouldRetry &&
                                            K.createElement(
                                                J4,
                                                {
                                                    onClick: this.props.onRetryClick,
                                                    themeColor: IC.gameThemeColor,
                                                },
                                                JK.t("General.DialogRetry")
                                            )
                                    )
                                );
                            }
                            if (this.props.data) {
                                IV.data = this.props.data.dt;
                                var df = IV.bonusWalletAmt;
                                var dO = IV.freeGameRemaining;
                                var dk = IV.isExpiredBonusExist;
                                var dU = IV.isExpiredFreeGameExist;
                                var dp = IV.isNewBonusExist;
                                var dm = IV.isNewFreeGameExist;
                                var dR = IV.tournamentInfo;
                                var da = IV.cashDetailInfo;
                                var dB = this.Z();
                                return K.createElement(
                                    "div",
                                    null,
                                    da &&
                                        K.createElement(
                                            dB.cwInfo.btnStyle,
                                            {
                                                id: "C",
                                                onClick: this.props.onCashWalletClick.bind(this, da.k),
                                                themeColor: IC.gameThemeColor,
                                            },
                                            K.createElement(
                                                JI,
                                                {
                                                    className: "resizableTxtContainer",
                                                },
                                                K.createElement(
                                                    Jy,
                                                    null,
                                                    K.createElement("span", {
                                                        className: dB.cwInfo.icon,
                                                    })
                                                ),
                                                K.createElement(
                                                    Jd,
                                                    {
                                                        className: "resizableTxt",
                                                    },
                                                    JK.t("WalletList.CurrentWallet")
                                                )
                                            ),
                                            K.createElement(
                                                JJ,
                                                {
                                                    className: "resizableTxtContainer",
                                                },
                                                K.createElement(
                                                    Jd,
                                                    {
                                                        className: "resizableTxt",
                                                    },
                                                    JS(da.cb)
                                                )
                                            )
                                        ),
                                    (dk || df > 0) &&
                                        K.createElement(
                                            dB.bwInfo.btnStyle,
                                            {
                                                id: Ig,
                                                onClick: this.props.onBonusWalletClick,
                                                themeColor: IC.gameThemeColor,
                                            },
                                            K.createElement(
                                                JI,
                                                {
                                                    className: "resizableTxtContainer",
                                                },
                                                K.createElement(
                                                    Jy,
                                                    null,
                                                    K.createElement("span", {
                                                        className: dB.bwInfo.icon,
                                                    })
                                                ),
                                                dp &&
                                                    K.createElement(
                                                        JX,
                                                        {
                                                            orientation: shell.environment.getOrientationMode(),
                                                        },
                                                        K.createElement("span", {
                                                            className: "wallet-plugin-sprite wallet-plugin-ic_wallet_new",
                                                        })
                                                    ),
                                                K.createElement(
                                                    Jd,
                                                    {
                                                        className: "resizableTxt",
                                                    },
                                                    JK.t("WalletList.BonusWallet")
                                                )
                                            ),
                                            K.createElement(
                                                JJ,
                                                null,
                                                dB.offerIDContent,
                                                K.createElement(
                                                    "div",
                                                    {
                                                        className: "resizableTxtContainer",
                                                    },
                                                    dB.bonusWalletAmtContent
                                                )
                                            ),
                                            K.createElement(JT, {
                                                className: dB.bwInfo.arrow,
                                                orientation: shell.environment.getOrientationMode(),
                                            })
                                        ),
                                    (dU || dO > 0) &&
                                        K.createElement(
                                            dB.fgInfo.btnStyle,
                                            {
                                                id: IH,
                                                onClick: this.props.onFreeGameClick,
                                                themeColor: IC.gameThemeColor,
                                            },
                                            K.createElement(
                                                JI,
                                                {
                                                    className: "resizableTxtContainer",
                                                },
                                                K.createElement(
                                                    Jy,
                                                    null,
                                                    K.createElement("span", {
                                                        className: dB.fgInfo.icon,
                                                    })
                                                ),
                                                dm &&
                                                    K.createElement(
                                                        JX,
                                                        {
                                                            orientation: shell.environment.getOrientationMode(),
                                                        },
                                                        K.createElement("span", {
                                                            className: "wallet-plugin-sprite wallet-plugin-ic_wallet_new",
                                                        })
                                                    ),
                                                K.createElement(
                                                    Jd,
                                                    {
                                                        className: "resizableTxt",
                                                    },
                                                    JK.t("WalletList.FreeGameWallet")
                                                )
                                            ),
                                            K.createElement(
                                                JJ,
                                                null,
                                                K.createElement(
                                                    "div",
                                                    {
                                                        className: "resizableTxtContainer",
                                                    },
                                                    K.createElement(
                                                        Jd,
                                                        {
                                                            className: "resizableTxt",
                                                        },
                                                        dB.remainingInfo
                                                    )
                                                ),
                                                K.createElement(
                                                    "div",
                                                    {
                                                        className: "resizableTxtContainer",
                                                    },
                                                    K.createElement(
                                                        JM,
                                                        {
                                                            className: "resizableTxt",
                                                        },
                                                        dB.amountInfo
                                                    )
                                                )
                                            ),
                                            K.createElement(JT, {
                                                className: dB.fgInfo.arrow,
                                                orientation: shell.environment.getOrientationMode(),
                                            })
                                        ),
                                    dR &&
                                        K.createElement(
                                            dB.pInfo.btnStyle,
                                            {
                                                id: "P",
                                                themeColor: IC.gameThemeColor,
                                            },
                                            K.createElement(
                                                JI,
                                                {
                                                    className: "resizableTxtContainer",
                                                },
                                                K.createElement(
                                                    Jy,
                                                    null,
                                                    K.createElement("span", {
                                                        className: dB.pInfo.icon,
                                                    })
                                                ),
                                                K.createElement(
                                                    Jd,
                                                    {
                                                        className: "resizableTxt",
                                                    },
                                                    JK.t("WalletList.PointWallet")
                                                )
                                            ),
                                            K.createElement(
                                                JJ,
                                                {
                                                    className: "resizableTxtContainer",
                                                },
                                                K.createElement(
                                                    Jd,
                                                    {
                                                        className: "resizableTxt",
                                                    },
                                                    JS(dR.pb)
                                                )
                                            )
                                        )
                                );
                            }
                        };
                        dw.prototype.Z = function () {
                            var df = IV.walletType;
                            var dO = IV.freeGameRemaining;
                            var dk = IV.bonusWalletAmt;
                            var dU = IV.freeGameAmt;
                            var dp = IC.transactionInfo;
                            var dm = JS(dk);
                            var dR = JS(dU);
                            var da = "wallet-plugin-sprite";
                            var dB = `${da} wallet-plugin-ic_wallet`;
                            var dq = `${da} wallet-plugin-ic_bonus_wallet`;
                            var dE = `${da} wallet-plugin-ic_free_game`;
                            var dj = `${da} wallet-plugin-ic_nav_arrow`;
                            var dF = "wallet-plugin-color-sprite";
                            var dZ = `${dF} wallet-plugin-color-ic_wallet`;
                            var du = `${dF} wallet-plugin-color-ic_bonus_wallet`;
                            var M0 = `${dF} wallet-plugin-color-ic_free_game`;
                            var M1 = `${dF} wallet-plugin-color-ic_nav_arrow`;
                            switch (df) {
                                case Ig:
                                    var M2 = JS(dp.wbn.ba);
                                    return {
                                        bonusWalletAmtContent: K.createElement(
                                            Jl,
                                            {
                                                className: "resizableTxt",
                                            },
                                            M2
                                        ),
                                        bonusWalletAmt: M2,
                                        offerIDContent: K.createElement(
                                            "div",
                                            {
                                                className: "resizableTxtContainer",
                                            },
                                            K.createElement(
                                                Jd,
                                                {
                                                    className: "resizableTxt",
                                                },
                                                `${JK.t("WalletList.BonusWallet")} ${dp.wbn.bid}`
                                            )
                                        ),
                                        remainingInfo: JK.t("WalletList.RemainingCount", {
                                            value: dO.toString(),
                                        }),
                                        amountInfo: dR,
                                        cwInfo: {
                                            icon: dB,
                                            arrow: dj,
                                            btnStyle: J8,
                                        },
                                        bwInfo: {
                                            icon: du,
                                            arrow: M1,
                                            btnStyle: J9,
                                        },
                                        fgInfo: {
                                            icon: dE,
                                            arrow: dj,
                                            btnStyle: J8,
                                        },
                                        pInfo: {
                                            icon: dB,
                                            arrow: dj,
                                            btnStyle: J6,
                                        },
                                    };
                                case IH:
                                    return {
                                        bonusWalletAmtContent: K.createElement(
                                            Jd,
                                            {
                                                className: "resizableTxt",
                                            },
                                            dm
                                        ),
                                        bonusWalletAmt: dm,
                                        offerIDContent: null,
                                        remainingInfo: `${JK.t("WalletList.FreeGameWallet")} ${dp.wfg.fgid}`,
                                        amountInfo: JK.t("WalletList.RemainingCount", {
                                            value: dp.wfg.gc.toString(),
                                        }),
                                        cwInfo: {
                                            icon: dB,
                                            arrow: dj,
                                            btnStyle: J8,
                                        },
                                        bwInfo: {
                                            icon: dq,
                                            arrow: dj,
                                            btnStyle: J8,
                                        },
                                        fgInfo: {
                                            icon: M0,
                                            arrow: M1,
                                            btnStyle: J9,
                                        },
                                        pInfo: {
                                            icon: dB,
                                            arrow: dj,
                                            btnStyle: J6,
                                        },
                                    };
                                case "P":
                                    return {
                                        bonusWalletAmtContent: K.createElement(
                                            Jd,
                                            {
                                                className: "resizableTxt",
                                            },
                                            dm
                                        ),
                                        bonusWalletAmt: dm,
                                        offerIDContent: null,
                                        remainingInfo: JK.t("WalletList.RemainingCount", {
                                            value: dO.toString(),
                                        }),
                                        amountInfo: dR,
                                        cwInfo: {
                                            icon: dB,
                                            arrow: dj,
                                            btnStyle: J8,
                                        },
                                        bwInfo: {
                                            icon: dq,
                                            arrow: dj,
                                            btnStyle: J8,
                                        },
                                        fgInfo: {
                                            icon: dE,
                                            arrow: dj,
                                            btnStyle: J8,
                                        },
                                        pInfo: {
                                            icon: dZ,
                                            arrow: dj,
                                            btnStyle: J7,
                                        },
                                    };
                                default:
                                    return {
                                        bonusWalletAmtContent: K.createElement(
                                            Jd,
                                            {
                                                className: "resizableTxt",
                                            },
                                            dm
                                        ),
                                        bonusWalletAmt: dm,
                                        offerIDContent: null,
                                        remainingInfo: JK.t("WalletList.RemainingCount", {
                                            value: dO.toString(),
                                        }),
                                        amountInfo: dR,
                                        cwInfo: {
                                            icon: dZ,
                                            arrow: dj,
                                            btnStyle: J7,
                                        },
                                        bwInfo: {
                                            icon: dq,
                                            arrow: dj,
                                            btnStyle: J8,
                                        },
                                        fgInfo: {
                                            icon: dE,
                                            arrow: dj,
                                            btnStyle: J8,
                                        },
                                        pInfo: {
                                            icon: dB,
                                            arrow: dj,
                                            btnStyle: J8,
                                        },
                                    };
                            }
                        };
                        return dw;
                    })(K.Component);
                    var Jx = (function () {
                        function db(dw) {
                            this.J = dw.k;
                            this.X = dw.bid;
                            this.Y = dw.n;
                            this.q = dw.gids;
                            this.K = dw.ba;
                            this.$ = dw.ibra;
                            this.nn = dw.mca;
                            this.tn = dw.bra;
                            this.en = dw.ed;
                            this.M = dw.s;
                            this.rn = dw.cd;
                            this.an = dw.ca;
                            this.ln = dw.gidl;
                            this.sn = dw.bt;
                            this.un = dw.ks;
                            this.cn = dw.cgid;
                            this.hn = dw.baid;
                            this.fn = dw.bca;
                            this.dn = dw.isd;
                        }
                        Object.defineProperty(db.prototype, "key", {
                            get: function () {
                                return this.J;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "bonusID", {
                            get: function () {
                                return this.X;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "bonusWalletName", {
                            get: function () {
                                return this.Y;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "gameIDs", {
                            get: function () {
                                return this.q;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "balanceAmount", {
                            get: function () {
                                if (!this.K) {
                                    this.K = 0;
                                }
                                return this.K;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "initialBonusRatioAmount", {
                            get: function () {
                                if (!this.$) {
                                    this.$ = 0;
                                }
                                return this.$;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "maximumConversionAmount", {
                            get: function () {
                                if (!this.nn) {
                                    this.nn = 0;
                                }
                                return this.nn;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "bonusRatioAmount", {
                            get: function () {
                                if (!this.tn) {
                                    this.tn = 0;
                                }
                                return this.tn;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "expiredDate", {
                            get: function () {
                                var dw = new Date(this.en);
                                return dw.getFullYear() + "/" + IY(dw.getMonth() + 1) + "/" + IY(dw.getDate());
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "status", {
                            get: function () {
                                return this.M;
                            },
                            set: function (dw) {
                                this.M = dw;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "createdDate", {
                            get: function () {
                                return this.rn;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "conversionAmount", {
                            get: function () {
                                if (!this.an) {
                                    this.an = 0;
                                }
                                return this.an;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "lockedGameID", {
                            get: function () {
                                return this.ln;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "rollOverMode", {
                            get: function () {
                                return this.sn;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "keySelection", {
                            get: function () {
                                return this.un;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "convertedGameID", {
                            get: function () {
                                return this.cn;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "balanceID", {
                            get: function () {
                                return this.hn;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "beforeConversionAmount", {
                            get: function () {
                                if (!this.fn) {
                                    this.fn = 0;
                                }
                                return this.fn;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "expiredTime", {
                            get: function () {
                                var dw = new Date(this.en);
                                return IY(dw.getHours()) + ":" + IY(dw.getMinutes()) + ":" + IY(dw.getSeconds());
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "isHideDiscard", {
                            get: function () {
                                return this.dn;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        return db;
                    })();
                    function Jc(db) {
                        if (db && db.__esModule && Object.prototype.hasOwnProperty.call(db, "default")) {
                            return db.default;
                        } else {
                            return db;
                        }
                    }
                    function Jv(db) {
                        if (db.__esModule) {
                            return db;
                        }
                        var dw = db.default;
                        if (typeof dw == "function") {
                            var df = function dO() {
                                if (this instanceof dO) {
                                    return Reflect.construct(dw, arguments, this.constructor);
                                } else {
                                    return dw.apply(this, arguments);
                                }
                            };
                            df.prototype = dw.prototype;
                        } else {
                            df = {};
                        }
                        Object.defineProperty(df, "__esModule", {
                            value: true,
                        });
                        Object.keys(db).forEach(function (dk) {
                            var dU = Object.getOwnPropertyDescriptor(db, dk);
                            Object.defineProperty(
                                df,
                                dk,
                                dU.get
                                    ? dU
                                    : {
                                          enumerable: true,
                                          get: function () {
                                              return db[dk];
                                          },
                                      }
                            );
                        });
                        return df;
                    }
                    var JN;
                    var JQ;
                    var JG;
                    var JL;
                    var Jg;
                    var JH;
                    var JV = {
                        exports: {},
                    };
                    var JC = {
                        exports: {},
                    };
                    function JW() {
                        if (!Jg) {
                            Jg = 1;
                            JC.exports = (function () {
                                if (JL) {
                                    return JG;
                                }
                                JL = 1;
                                var db = JQ ? JN : ((JQ = 1), (JN = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"));
                                function dw() {}
                                function df() {}
                                df.resetWarningCache = dw;
                                return (JG = function () {
                                    function dO(dp, dm, dR, da, dB, dq) {
                                        if (dq !== db) {
                                            var dE = Error(
                                                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                                            );
                                            dE.name = "Invariant Violation";
                                            throw dE;
                                        }
                                    }
                                    function dk() {
                                        return dO;
                                    }
                                    dO.isRequired = dO;
                                    var dU = {
                                        array: dO,
                                        bigint: dO,
                                        bool: dO,
                                        func: dO,
                                        number: dO,
                                        object: dO,
                                        string: dO,
                                        symbol: dO,
                                        any: dO,
                                        arrayOf: dk,
                                        element: dO,
                                        elementType: dO,
                                        instanceOf: dk,
                                        node: dO,
                                        objectOf: dk,
                                        oneOf: dk,
                                        oneOfType: dk,
                                        shape: dk,
                                        exact: dk,
                                        checkPropTypes: df,
                                        resetWarningCache: dw,
                                    };
                                    dU.PropTypes = dU;
                                    return dU;
                                });
                            })()();
                        }
                        return JC.exports;
                    }
                    JH = JV;
                    (function (db, dw) {
                        JH.exports = dw(
                            (function () {
                                try {
                                    return JW();
                                } catch (df) {}
                            })(),
                            K,
                            Y,
                            v
                        );
                    })(0, (db, dw, df, dO) =>
                        (() => {
                            var dk = {
                                99: (dR) => {
                                    if (db === undefined) {
                                        var da = Error("Cannot find module 'prop-types'");
                                        da.code = "MODULE_NOT_FOUND";
                                        throw da;
                                    }
                                    dR.exports = db;
                                },
                                156: (dR) => {
                                    dR.exports = dw;
                                },
                                111: (dR) => {
                                    dR.exports = df;
                                },
                                608: (dR) => {
                                    dR.exports = dO;
                                },
                            };
                            var dU = {};
                            function dp(dR) {
                                var da = dU[dR];
                                if (da !== undefined) {
                                    return da.exports;
                                }
                                var dB = (dU[dR] = {
                                    exports: {},
                                });
                                dk[dR](dB, dB.exports, dp);
                                return dB.exports;
                            }
                            dp.n = (dR) => {
                                var da = dR && dR.__esModule ? () => dR.default : () => dR;
                                dp.d(da, {
                                    a: da,
                                });
                                return da;
                            };
                            dp.d = (dR, da) => {
                                for (var dB in da) {
                                    if (dp.o(da, dB) && !dp.o(dR, dB)) {
                                        Object.defineProperty(dR, dB, {
                                            enumerable: true,
                                            get: da[dB],
                                        });
                                    }
                                }
                            };
                            dp.o = (dR, da) => Object.prototype.hasOwnProperty.call(dR, da);
                            dp.r = (dR) => {
                                if (typeof Symbol != "undefined" && Symbol.toStringTag) {
                                    Object.defineProperty(dR, Symbol.toStringTag, {
                                        value: "Module",
                                    });
                                }
                                Object.defineProperty(dR, "__esModule", {
                                    value: true,
                                });
                            };
                            var dm = {};
                            (() => {
                                dp.r(dm);
                                dp.d(dm, {
                                    default: () => My,
                                });
                                var dR = dp(156);
                                var da = dp.n(dR);
                                var dB = dp(111);
                                var dq = dp.n(dB);
                                var dE = dp(608);
                                var dj = dp.n(dE);
                                const dF = {
                                    "custom-scroll": "rcs-custom-scroll",
                                    customScroll: "rcs-custom-scroll",
                                    "outer-container": "rcs-outer-container",
                                    outerContainer: "rcs-outer-container",
                                    positioning: "rcs-positioning",
                                    "custom-scrollbar": "rcs-custom-scrollbar",
                                    customScrollbar: "rcs-custom-scrollbar",
                                    "inner-container": "rcs-inner-container",
                                    innerContainer: "rcs-inner-container",
                                    "content-scrolled": "rcs-content-scrolled",
                                    contentScrolled: "rcs-content-scrolled",
                                    "scroll-handle-dragged": "rcs-scroll-handle-dragged",
                                    scrollHandleDragged: "rcs-scroll-handle-dragged",
                                    "custom-scrollbar-rtl": "rcs-custom-scrollbar-rtl",
                                    customScrollbarRtl: "rcs-custom-scrollbar-rtl",
                                    "custom-scroll-handle": "rcs-custom-scroll-handle",
                                    customScrollHandle: "rcs-custom-scroll-handle",
                                    "inner-handle": "rcs-inner-handle",
                                    innerHandle: "rcs-inner-handle",
                                };
                                var dZ;
                                var du;
                                function M0(MT) {
                                    M0 =
                                        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                                            ? function (MX) {
                                                  return typeof MX;
                                              }
                                            : function (MX) {
                                                  if (MX && typeof Symbol == "function" && MX.constructor === Symbol && MX !== Symbol.prototype) {
                                                      return "symbol";
                                                  } else {
                                                      return typeof MX;
                                                  }
                                              };
                                    return M0(MT);
                                }
                                function M1(MT, MX) {
                                    M1 =
                                        Object.setPrototypeOf ||
                                        function (Md, MM) {
                                            Md.__proto__ = MM;
                                            return Md;
                                        };
                                    return M1(MT, MX);
                                }
                                function M2(MT) {
                                    if (MT === undefined) {
                                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    }
                                    return MT;
                                }
                                function M3(MT) {
                                    M3 = Object.setPrototypeOf
                                        ? Object.getPrototypeOf
                                        : function (MX) {
                                              return MX.__proto__ || Object.getPrototypeOf(MX);
                                          };
                                    return M3(MT);
                                }
                                function M4(MT, MX, Md) {
                                    if (MX in MT) {
                                        Object.defineProperty(MT, MX, {
                                            value: Md,
                                            enumerable: true,
                                            configurable: true,
                                            writable: true,
                                        });
                                    } else {
                                        MT[MX] = Md;
                                    }
                                    return MT;
                                }
                                function M5(MT, MX) {
                                    if (!MX) {
                                        MX = MT.slice(0);
                                    }
                                    return Object.freeze(
                                        Object.defineProperties(MT, {
                                            raw: {
                                                value: Object.freeze(MX),
                                            },
                                        })
                                    );
                                }
                                function M6(MT, MX, Md) {
                                    if ((MX = MX || MX === 0 ? MX : MT) > (Md = Md || Md === 0 ? Md : MT)) {
                                        return MT;
                                    } else if (MT < MX) {
                                        return MX;
                                    } else if (MT > Md) {
                                        return Md;
                                    } else {
                                        return MT;
                                    }
                                }
                                function M7(MT, MX) {
                                    return MT.clientX > MX.left && MT.clientX < MX.right && MT.clientY > MX.top && MT.clientY < MX.top + MX.height;
                                }
                                var M8 = dj().div(
                                    dZ ||
                                        (dZ = M5([
                                            `
    min-height: 0;
    min-width: 0;
  
    .cs-outer-container {
      overflow: hidden;
  
      .cs-positioning {
        position: relative;
      }
  
      &:hover .cs-custom-scrollbar {
        opacity: 1;
        transition-duration: 0.2s;
      }
    }
  
    .cs-inner-container {
      overflow-x: hidden;
      overflow-y: scroll;
  
      -webkit-overflow-scrolling: touch;
  
      &:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        height: 0;
        background-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.2) 0%,
          rgba(0, 0, 0, 0.05) 60%,
          rgba(0, 0, 0, 0) 100%
        );
        pointer-events: none;
        transition: height 0.1s ease-in;
        will-change: height;
      }
      &.cs-content-scrolled:after {
        height: 5px;
        transition: height 0.15s ease-out;
      }
    }
  
    &.cs-scroll-handle-dragged .cs-inner-container {
      user-select: none;
    }
  
    .cs-custom-scrollbar {
      position: absolute;
      height: 100%;
      width: 6px;
      right: `,
                                            `;
      opacity: 0;
      z-index: 1;
      transition: opacity 0.4s ease-out;
      padding: 6px 0;
      box-sizing: border-box;
      will-change: opacity;
      pointer-events: none;
  
      &.cs-custom-scrollbar-rtl {
        right: auto;
        left: `,
                                            `;
      }
    }
  
    &.cs-scroll-handle-dragged .cs-custom-scrollbar {
      opacity: 1;
    }
  
    .cs-custom-scroll-handle {
      position: absolute;
      width: 100%;
      top: 0;
    }
  
    .cs-inner-handle {
      height: calc(100% - 2 * `,
                                            ");\n    margin-top: ",
                                            `;
      background-color: rgba(78, 183, 245, 0.7);
      border-radius: 3px;
    }
  `,
                                        ])),
                                    function (MT) {
                                        return MT.customScrollBarMargin;
                                    },
                                    function (MT) {
                                        return MT.customScrollBarMargin;
                                    },
                                    function (MT) {
                                        return MT.scrollMarginTop;
                                    },
                                    function (MT) {
                                        return MT.scrollMarginTop;
                                    }
                                );
                                var M9 = dj()(M8)(
                                    du ||
                                        (du = M5([
                                            `
    &.cs-inner-handle {
      `,
                                            `;
    }
  `,
                                        ])),
                                    function (MT) {
                                        return MT.customStyle;
                                    }
                                );
                                var MI = (function (MT) {
                                    (function (MK, MY) {
                                        if (typeof MY != "function" && MY !== null) {
                                            throw new TypeError("Super expression must either be null or a function");
                                        }
                                        MK.prototype = Object.create(MY && MY.prototype, {
                                            constructor: {
                                                value: MK,
                                                writable: true,
                                                configurable: true,
                                            },
                                        });
                                        if (MY) {
                                            M1(MK, MY);
                                        }
                                    })(MS, MT);
                                    var MX;
                                    var Md;
                                    var MM;
                                    Md = MS;
                                    MM = (function () {
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
                                        } catch (MK) {
                                            return false;
                                        }
                                    })();
                                    function Ml() {
                                        var MK;
                                        var MY = M3(Md);
                                        if (MM) {
                                            var MA = M3(this).constructor;
                                            MK = Reflect.construct(MY, arguments, MA);
                                        } else {
                                            MK = MY.apply(this, arguments);
                                        }
                                        return (function (Ms, Mx) {
                                            if (!Mx || (M0(Mx) !== "object" && typeof Mx != "function")) {
                                                return M2(Ms);
                                            } else {
                                                return Mx;
                                            }
                                        })(this, MK);
                                    }
                                    function MS(MK) {
                                        var MY;
                                        (function (MA, Ms) {
                                            if (!(MA instanceof Ms)) {
                                                throw new TypeError("Cannot call a class as a function");
                                            }
                                        })(this, MS);
                                        M4(M2((MY = Ml.call(this, MK))), "innerContainerRef", (0, dR.createRef)());
                                        M4(M2(MY), "customScrollbarRef", (0, dR.createRef)());
                                        M4(M2(MY), "scrollHandleRef", (0, dR.createRef)());
                                        M4(M2(MY), "contentWrapperRef", (0, dR.createRef)());
                                        M4(M2(MY), "adjustFreezePosition", function (MA) {
                                            if (MY.contentWrapperRef.current) {
                                                var Ms = MY.getScrolledElement();
                                                var Mx = MY.contentWrapperRef.current;
                                                if (MY.props.freezePosition) {
                                                    Mx.scrollTop = MY.state.scrollPos;
                                                }
                                                if (MA.freezePosition) {
                                                    Ms.scrollTop = MY.state.scrollPos;
                                                }
                                            }
                                        });
                                        M4(M2(MY), "toggleScrollIfNeeded", function () {
                                            var MA = MY.contentHeight - MY.visibleHeight > 1;
                                            if (MY.hasScroll !== MA) {
                                                MY.hasScroll = MA;
                                                MY.forceUpdate();
                                            }
                                        });
                                        M4(M2(MY), "updateScrollPosition", function (MA) {
                                            var Ms = MY.getScrolledElement();
                                            var Mx = M6(MA, 0, MY.contentHeight - MY.visibleHeight);
                                            Ms.scrollTop = Mx;
                                            MY.setState({
                                                scrollPos: Mx,
                                            });
                                        });
                                        M4(M2(MY), "onClick", function (MA) {
                                            if (MY.hasScroll && MY.isMouseEventOnCustomScrollbar(MA) && !MY.isMouseEventOnScrollHandle(MA)) {
                                                var Ms = MY.calculateNewScrollHandleTop(MA);
                                                var Mx = MY.getScrollValueFromHandlePosition(Ms);
                                                MY.updateScrollPosition(Mx);
                                            }
                                        });
                                        M4(M2(MY), "isMouseEventOnCustomScrollbar", function (MA) {
                                            if (!MY.customScrollbarRef.current) {
                                                return false;
                                            }
                                            var Ms = dq().findDOMNode(M2(MY)).getBoundingClientRect();
                                            var Mx = MY.customScrollbarRef.current.getBoundingClientRect();
                                            var Mc = MY.props.rtl
                                                ? {
                                                      left: Ms.left,
                                                      right: Mx.right,
                                                  }
                                                : {
                                                      left: Mx.left,
                                                      width: Ms.right,
                                                  };
                                            return M7(
                                                MA,
                                                Object.assign(
                                                    {},
                                                    {
                                                        left: Ms.left,
                                                        right: Ms.right,
                                                        top: Ms.top,
                                                        height: Ms.height,
                                                    },
                                                    Mc
                                                )
                                            );
                                        });
                                        M4(M2(MY), "isMouseEventOnScrollHandle", function (MA) {
                                            return (
                                                !!MY.scrollHandleRef.current &&
                                                (function (Ms, Mx) {
                                                    return M7(Ms, Mx.getBoundingClientRect());
                                                })(MA, dq().findDOMNode(MY.scrollHandleRef.current))
                                            );
                                        });
                                        M4(M2(MY), "calculateNewScrollHandleTop", function (MA) {
                                            var Ms = dq().findDOMNode(M2(MY)).getBoundingClientRect().top + M.pageYOffset;
                                            var Mx = MA.pageY - Ms;
                                            var Mc = MY.getScrollHandleStyle().top;
                                            if (Mx > Mc + MY.scrollHandleHeight) {
                                                return Mc + Math.min(MY.scrollHandleHeight, MY.visibleHeight - MY.scrollHandleHeight);
                                            } else {
                                                return Mc - Math.max(MY.scrollHandleHeight, 0);
                                            }
                                        });
                                        M4(M2(MY), "getScrollValueFromHandlePosition", function (MA) {
                                            return MA / MY.scrollRatio;
                                        });
                                        M4(M2(MY), "getScrollHandleStyle", function () {
                                            var MA = MY.state.scrollPos * MY.scrollRatio;
                                            MY.scrollHandleHeight = MY.visibleHeight * MY.scrollRatio;
                                            return {
                                                height: MY.scrollHandleHeight,
                                                top: MA,
                                            };
                                        });
                                        M4(M2(MY), "adjustCustomScrollPosToContentPos", function (MA) {
                                            MY.setState({
                                                scrollPos: MA,
                                            });
                                        });
                                        M4(M2(MY), "onScroll", function (MA) {
                                            if (!MY.props.freezePosition) {
                                                MY.hideScrollThumb();
                                                MY.adjustCustomScrollPosToContentPos(MA.currentTarget.scrollTop);
                                                if (MY.props.onScroll) {
                                                    MY.props.onScroll(MA);
                                                }
                                            }
                                        });
                                        M4(M2(MY), "getScrolledElement", function () {
                                            return MY.innerContainerRef.current;
                                        });
                                        M4(M2(MY), "onMouseDown", function (MA) {
                                            if (MY.hasScroll && MY.isMouseEventOnScrollHandle(MA)) {
                                                MY.startDragHandlePos = MY.getScrollHandleStyle().top;
                                                MY.startDragMousePos = MA.pageY;
                                                MY.setState({
                                                    onDrag: true,
                                                });
                                                document.addEventListener("mousemove", MY.onHandleDrag, {
                                                    passive: false,
                                                });
                                                document.addEventListener("mouseup", MY.onHandleDragEnd, {
                                                    passive: false,
                                                });
                                            }
                                        });
                                        M4(M2(MY), "onTouchStart", function () {
                                            MY.setState({
                                                onDrag: true,
                                            });
                                        });
                                        M4(M2(MY), "onHandleDrag", function (MA) {
                                            MA.preventDefault();
                                            var Ms = MA.pageY - MY.startDragMousePos;
                                            var Mx = M6(MY.startDragHandlePos + Ms, 0, MY.visibleHeight - MY.scrollHandleHeight);
                                            var Mc = MY.getScrollValueFromHandlePosition(Mx);
                                            MY.updateScrollPosition(Mc);
                                        });
                                        M4(M2(MY), "onHandleDragEnd", function (MA) {
                                            MY.setState({
                                                onDrag: false,
                                            });
                                            MA.preventDefault();
                                            document.removeEventListener("mousemove", MY.onHandleDrag, {
                                                passive: false,
                                            });
                                            document.removeEventListener("mouseup", MY.onHandleDragEnd, {
                                                passive: false,
                                            });
                                        });
                                        M4(M2(MY), "blockOuterScroll", function (MA) {
                                            if (!MY.props.allowOuterScroll) {
                                                var Ms = MA.currentTarget;
                                                var Mx = MA.currentTarget.scrollHeight - MA.currentTarget.offsetHeight;
                                                var Mc = MA.deltaY % 3 ? MA.deltaY : MA.deltaY * 10;
                                                if (Ms.scrollTop + Mc <= 0) {
                                                    Ms.scrollTop = 0;
                                                    MA.preventDefault();
                                                } else if (Ms.scrollTop + Mc >= Mx) {
                                                    Ms.scrollTop = Mx;
                                                    MA.preventDefault();
                                                }
                                                MA.stopPropagation();
                                            }
                                        });
                                        M4(M2(MY), "getInnerContainerClasses", function () {
                                            if (MY.state.scrollPos && MY.props.addScrolledClass) {
                                                return "cs-inner-container cs-content-scrolled";
                                            } else {
                                                return "cs-inner-container";
                                            }
                                        });
                                        M4(M2(MY), "getScrollStyles", function () {
                                            var MA = MY.scrollbarYWidth || 20;
                                            var Ms = MY.props.rtl ? "marginLeft" : "marginRight";
                                            var Mx = {
                                                height: MY.props.heightRelativeToParent || MY.props.flex ? "100%" : "",
                                            };
                                            Mx[Ms] = MA * -1;
                                            var Mc = {
                                                height: MY.props.heightRelativeToParent || MY.props.flex ? "100%" : "",
                                                overflowY: MY.props.freezePosition ? "hidden" : "visible",
                                            };
                                            Mc[Ms] = MY.scrollbarYWidth ? 0 : MA;
                                            return {
                                                innerContainer: Mx,
                                                contentWrapper: Mc,
                                            };
                                        });
                                        M4(M2(MY), "getOuterContainerStyle", function () {
                                            return {
                                                height: MY.props.heightRelativeToParent || MY.props.flex ? "100%" : "",
                                            };
                                        });
                                        M4(M2(MY), "getRootStyles", function () {
                                            var MA = {};
                                            if (MY.props.heightRelativeToParent) {
                                                MA.height = MY.props.heightRelativeToParent;
                                            } else if (MY.props.flex) {
                                                MA.flex = MY.props.flex;
                                            }
                                            return MA;
                                        });
                                        M4(M2(MY), "enforceMinHandleHeight", function (MA) {
                                            var Ms = MY.props.minScrollHandleHeight;
                                            if (MA.height >= Ms) {
                                                return MA;
                                            }
                                            var Mx = (Ms - MA.height) * (MY.state.scrollPos / (MY.contentHeight - MY.visibleHeight));
                                            return {
                                                height: Ms,
                                                top: MA.top - Mx,
                                            };
                                        });
                                        MY.scrollbarYWidth = 0;
                                        MY.state = {
                                            scrollPos: 0,
                                            onDrag: false,
                                        };
                                        MY.hideScrollThumb = (function () {
                                            var MA;
                                            function Ms() {
                                                clearTimeout(MA);
                                            }
                                            function Mx() {
                                                Ms();
                                                MA = // TOLOOK
                                                    setTimeout(function () {
                                                        MY.setState({
                                                            onDrag: false,
                                                        });
                                                    }, 500);
                                            }
                                            Mx.cancel = Ms;
                                            return Mx;
                                        })();
                                        return MY;
                                    }
                                    if (
                                        (MX = [
                                            {
                                                key: "componentDidMount",
                                                value: function () {
                                                    if (this.props.scrollTo !== undefined) {
                                                        this.updateScrollPosition(this.props.scrollTo);
                                                    } else {
                                                        this.forceUpdate();
                                                    }
                                                    if (this.innerContainerRef.current) {
                                                        this.innerContainerRef.current.addEventListener("wheel", this.blockOuterScroll, {
                                                            passive: false,
                                                        });
                                                    }
                                                },
                                            },
                                            {
                                                key: "componentDidUpdate",
                                                value: function (MK, MY) {
                                                    var MA = this.contentHeight;
                                                    var Ms = this.visibleHeight;
                                                    var Mx = this.getScrolledElement();
                                                    var Mc = MY.scrollPos >= MA - Ms;
                                                    this.contentHeight = Mx.scrollHeight;
                                                    this.scrollbarYWidth = Mx.offsetWidth - Mx.clientWidth;
                                                    this.visibleHeight = Mx.clientHeight;
                                                    this.scrollRatio = this.contentHeight ? this.visibleHeight / this.contentHeight : 1;
                                                    this.toggleScrollIfNeeded();
                                                    var Mv = this.state === MY;
                                                    if (this.props.freezePosition || MK.freezePosition) {
                                                        this.adjustFreezePosition(MK);
                                                    }
                                                    if (this.props.scrollTo !== undefined && this.props.scrollTo !== MK.scrollTo) {
                                                        this.updateScrollPosition(this.props.scrollTo);
                                                    } else if (this.props.keepAtBottom && Mv && Mc) {
                                                        this.updateScrollPosition(this.contentHeight - this.visibleHeight);
                                                    }
                                                },
                                            },
                                            {
                                                key: "componentWillUnmount",
                                                value: function () {
                                                    this.hideScrollThumb.cancel();
                                                    document.removeEventListener("mousemove", this.onHandleDrag, {
                                                        passive: false,
                                                    });
                                                    document.removeEventListener("mouseup", this.onHandleDragEnd, {
                                                        passive: false,
                                                    });
                                                    if (this.innerContainerRef.current) {
                                                        this.innerContainerRef.current.removeEventListener("wheel", this.blockOuterScroll);
                                                    }
                                                },
                                            },
                                            {
                                                key: "render",
                                                value: function () {
                                                    var MK = this.getScrollStyles();
                                                    var MY = this.getRootStyles();
                                                    var MA = this.enforceMinHandleHeight(this.getScrollHandleStyle());
                                                    return da().createElement(
                                                        M8,
                                                        {
                                                            customScrollBarMargin: "3px",
                                                            scrollMarginTop: "6px",
                                                            className: `${this.state.onDrag ? "cs-scroll-handle-dragged" : ""}`,
                                                            style: MY,
                                                        },
                                                        da().createElement(
                                                            "div",
                                                            {
                                                                className: "cs-outer-container",
                                                                style: this.getOuterContainerStyle(),
                                                                onMouseDown: this.onMouseDown,
                                                                onTouchStart: this.onTouchStart,
                                                                onClick: this.onClick,
                                                            },
                                                            this.hasScroll
                                                                ? da().createElement(
                                                                      "div",
                                                                      {
                                                                          className: "cs-positioning",
                                                                      },
                                                                      da().createElement(
                                                                          "div",
                                                                          {
                                                                              ref: this.customScrollbarRef,
                                                                              className: `cs-custom-scrollbar ${
                                                                                  this.props.rtl ? "cs-custom-scrollbar-rtl" : ""
                                                                              }`,
                                                                              key: "scrollbar",
                                                                          },
                                                                          da().createElement(
                                                                              "div",
                                                                              {
                                                                                  ref: this.scrollHandleRef,
                                                                                  className: "cs-custom-scroll-handle",
                                                                                  style: MA,
                                                                              },
                                                                              da().createElement(M9, {
                                                                                  customStyle: this.props.handleClass,
                                                                                  className: "cs-inner-handle",
                                                                              })
                                                                          )
                                                                      )
                                                                  )
                                                                : null,
                                                            da().createElement(
                                                                "div",
                                                                {
                                                                    ref: this.innerContainerRef,
                                                                    className: this.getInnerContainerClasses(),
                                                                    style: MK.innerContainer,
                                                                    onScroll: this.onScroll,
                                                                },
                                                                da().createElement(
                                                                    "div",
                                                                    {
                                                                        className: dF.contentWrapper,
                                                                        ref: this.contentWrapperRef,
                                                                        style: MK.contentWrapper,
                                                                    },
                                                                    this.props.children
                                                                )
                                                            )
                                                        )
                                                    );
                                                },
                                            },
                                        ])
                                    ) {
                                        (function (MK, MY) {
                                            for (var MA = 0; MA < MY.length; MA++) {
                                                var Ms = MY[MA];
                                                Ms.enumerable = Ms.enumerable || false;
                                                Ms.configurable = true;
                                                if ("value" in Ms) {
                                                    Ms.writable = true;
                                                }
                                                Object.defineProperty(MK, Ms.key, Ms);
                                            }
                                        })(MS.prototype, MX);
                                    }
                                    return MS;
                                })(dR.Component);
                                try {
                                    var MJ = dp(99);
                                    MI.propTypes = {
                                        children: MJ.any,
                                        allowOuterScroll: MJ.bool,
                                        heightRelativeToParent: MJ.string,
                                        onScroll: MJ.func,
                                        addScrolledClass: MJ.bool,
                                        freezePosition: MJ.bool,
                                        handleClass: MJ.string,
                                        minScrollHandleHeight: MJ.number,
                                        flex: MJ.string,
                                        rtl: MJ.bool,
                                        scrollTo: MJ.number,
                                        keepAtBottom: MJ.bool,
                                    };
                                } catch (MT) {}
                                MI.defaultProps = {
                                    handleClass: "",
                                    minScrollHandleHeight: 38,
                                };
                                const My = MI;
                            })();
                            return dm;
                        })()
                    );
                    var Jz = Jc(JV.exports);
                    function JP(db) {
                        if (shell.environment.getOrientationMode() === "land") {
                            return db * 0.75;
                        } else {
                            return db;
                        }
                    }
                    function JD(db) {
                        if (shell.environment.hasNotch()) {
                            return db + 30;
                        } else if (shell.environment.isIOSStandalone()) {
                            return db + 15;
                        } else {
                            return db;
                        }
                    }
                    function Jh(db) {
                        if (shell.environment.getOrientationMode() === "land") {
                            return db / 0.75;
                        } else {
                            return db;
                        }
                    }
                    function Jb(db) {
                        return db.orientation === "land";
                    }
                    var Jw;
                    var Jf;
                    var JO;
                    var Jk;
                    var JU;
                    var Jp;
                    var Jm;
                    var JR;
                    var Jo;
                    var Ja;
                    var JB;
                    var Jq;
                    var JE;
                    var Jj;
                    var JF;
                    var JZ;
                    var Ju;
                    var y0;
                    var y1;
                    var y2;
                    var y3;
                    var y4;
                    var y5;
                    var y6;
                    var y7;
                    var y8;
                    var y9;
                    var yI;
                    var yJ;
                    var yy;
                    var yT;
                    var yX;
                    var yd;
                    var yM;
                    var yl;
                    var yS;
                    var yK;
                    var yY;
                    var yA;
                    var ys;
                    var yx;
                    var yc;
                    var yv;
                    var yN;
                    var yQ;
                    var yG;
                    var yL = v.div(
                        Jw ||
                            (Jw = I5(
                                [
                                    `
      width: 100%;
      height: 100%;
  `,
                                ],
                                [
                                    `
      width: 100%;
      height: 100%;
  `,
                                ]
                            ))
                    );
                    var yg = v.div(
                        Jf ||
                            (Jf = I5(
                                [
                                    `
      position: relative;
      z-index: 1;
  `,
                                ],
                                [
                                    `
      position: relative;
      z-index: 1;
  `,
                                ]
                            ))
                    );
                    var yH = v.h2(
                        JO ||
                            (JO = I5(
                                [
                                    `
      text-align: center;
      background-color: rgba(40, 40, 52, 1);
      margin: auto;
      padding: `,
                                    ";\n    color: ",
                                    `;
      font-weight: normal;
      box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.8);
      font-size: `,
                                    "px;\n",
                                ],
                                [
                                    `
      text-align: center;
      background-color: rgba(40, 40, 52, 1);
      margin: auto;
      padding: `,
                                    ";\n    color: ",
                                    `;
      font-weight: normal;
      box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.8);
      font-size: `,
                                    "px;\n",
                                ]
                            )),
                        function (db) {
                            if (Jb(db)) {
                                return `26px 0px ${JP(24)}px 0px`;
                            } else {
                                return `${JD(24)}px 0px 24px 0px`;
                            }
                        },
                        function (db) {
                            return db.themeColor || "rgb(255,255,255,1)";
                        },
                        JP(18)
                    );
                    var yV = v.div(
                        Jk ||
                            (Jk = I5(
                                [
                                    `
      display: flex;
      flex-direction: column;
      height: 87%;
  `,
                                ],
                                [
                                    `
      display: flex;
      flex-direction: column;
      height: 87%;
  `,
                                ]
                            ))
                    );
                    var yC = v.div(
                        JU ||
                            (JU = I5(
                                [
                                    `
      margin: auto;
  `,
                                ],
                                [
                                    `
      margin: auto;
  `,
                                ]
                            ))
                    );
                    var yW = v.div(
                        Jp ||
                            (Jp = I5(
                                [
                                    `
      font-size: 14px;
      opacity: 0.2;
      padding: 0px `,
                                    "px;\n    line-height: ",
                                    "px;\n",
                                ],
                                [
                                    `
      font-size: 14px;
      opacity: 0.2;
      padding: 0px `,
                                    "px;\n    line-height: ",
                                    "px;\n",
                                ]
                            )),
                        JP(24),
                        JP(20)
                    );
                    var yz = v.button(
                        Jm ||
                            (Jm = I5(
                                [
                                    "\n    color: ",
                                    ";\n    padding: ",
                                    `px 0px;
      border-radius: 2px;
      text-align: center;
      cursor: pointer;
      font-family: inherit;
      width: 30%;
      margin-top: 14px;
      background-color: rgba(49, 49, 58, 1);
      border: 1px solid rgba(0, 0, 0, 0.3);
  `,
                                ],
                                [
                                    "\n    color: ",
                                    ";\n    padding: ",
                                    `px 0px;
      border-radius: 2px;
      text-align: center;
      cursor: pointer;
      font-family: inherit;
      width: 30%;
      margin-top: 14px;
      background-color: rgba(49, 49, 58, 1);
      border: 1px solid rgba(0, 0, 0, 0.3);
  `,
                                ]
                            )),
                        function (db) {
                            return db.themeColor || "rgb(255,255,255,1)";
                        },
                        JP(8)
                    );
                    var yP = v.div(
                        JR ||
                            (JR = I5(
                                [
                                    `
      width: 95%;
      padding: `,
                                    `px;
      font-size: 14px;
      direction: ltr;
  `,
                                ],
                                [
                                    `
      width: 95%;
      padding: `,
                                    `px;
      font-size: 14px;
      direction: ltr;
  `,
                                ]
                            )),
                        JP(9)
                    );
                    var yD = v.div(
                        Jo ||
                            (Jo = I5(
                                [
                                    `
      box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.3), 0 5px 5px 0 rgba(0, 0, 0, 0.15),
          inset 0 1px 0 0 rgba(255, 255, 255, 0.1);
      border-radius: 4px;
      background-color: rgba(48, 48, 60, 0.96);
      padding: `,
                                    "px ",
                                    "px;\n",
                                ],
                                [
                                    `
      box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.3), 0 5px 5px 0 rgba(0, 0, 0, 0.15),
          inset 0 1px 0 0 rgba(255, 255, 255, 0.1);
      border-radius: 4px;
      background-color: rgba(48, 48, 60, 0.96);
      padding: `,
                                    "px ",
                                    "px;\n",
                                ]
                            )),
                        JP(15),
                        JP(20)
                    );
                    var yh = v.section(
                        Ja ||
                            (Ja = I5(
                                [
                                    `
      width: 100%;
      display: inline-block;
      padding-bottom: `,
                                    "px;\n",
                                ],
                                [
                                    `
      width: 100%;
      display: inline-block;
      padding-bottom: `,
                                    "px;\n",
                                ]
                            )),
                        JP(15)
                    );
                    var yb = v.section(
                        JB ||
                            (JB = I5(
                                [
                                    `
      width: 100%;
      display: inline-block;
      padding-bottom: `,
                                    `px;
      font-size: 12px;
  `,
                                ],
                                [
                                    `
      width: 100%;
      display: inline-block;
      padding-bottom: `,
                                    `px;
      font-size: 12px;
  `,
                                ]
                            )),
                        JP(15)
                    );
                    var yw = v.div(
                        Jq ||
                            (Jq = I5(
                                [
                                    "\n    float: ",
                                    ";\n    text-align: ",
                                    `;
      width: 50%;
      position: relative;
  `,
                                ],
                                [
                                    "\n    float: ",
                                    ";\n    text-align: ",
                                    `;
      width: 50%;
      position: relative;
  `,
                                ]
                            )),
                        IG.isRTL ? "right" : "left",
                        IG.isRTL ? "right" : "left"
                    );
                    var yf = v.div(
                        JE ||
                            (JE = I5(
                                [
                                    "\n    float: ",
                                    ";\n    text-align: ",
                                    `;
      width: 50%;
  `,
                                ],
                                [
                                    "\n    float: ",
                                    ";\n    text-align: ",
                                    `;
      width: 50%;
  `,
                                ]
                            )),
                        IG.isRTL ? "left" : "right",
                        IG.isRTL ? "left" : "right"
                    );
                    var yO = v.div(
                        Jj ||
                            (Jj = I5(
                                [
                                    "\n    float: ",
                                    `;
      text-align: center;
      width: 50%;
  `,
                                ],
                                [
                                    "\n    float: ",
                                    `;
      text-align: center;
      width: 50%;
  `,
                                ]
                            )),
                        IG.isRTL ? "right" : "left"
                    );
                    var yk = v.div(
                        JF ||
                            (JF = I5(
                                [
                                    "\n    float: ",
                                    `;
      text-align: center;
      width: 50%;
  `,
                                ],
                                [
                                    "\n    float: ",
                                    `;
      text-align: center;
      width: 50%;
  `,
                                ]
                            )),
                        IG.isRTL ? "left" : "right"
                    );
                    var yU = v.div(
                        JZ ||
                            (JZ = I5(
                                [
                                    "\n    padding-top: ",
                                    `px;
      font-size: 11px;
      opacity: 0.5;
  `,
                                ],
                                [
                                    "\n    padding-top: ",
                                    `px;
      font-size: 11px;
      opacity: 0.5;
  `,
                                ]
                            )),
                        JP(6)
                    );
                    var yp = v.div(
                        Ju || (Ju = I5(["\n    padding-bottom: ", "px;\n    color: ", ";\n"], ["\n    padding-bottom: ", "px;\n    color: ", ";\n"])),
                        JP(6),
                        function (db) {
                            return db.themeColor || "rgb(255,255,255,1)";
                        }
                    );
                    var ym = v.div(y0 || (y0 = I5(["\n    padding-top: ", "px;\n"], ["\n    padding-top: ", "px;\n"])), JP(4));
                    var yR = v.button(
                        y1 ||
                            (y1 = I5(
                                [
                                    `
      width: 45%;
      margin: auto 2.5%;
      font-size: 12px;
      padding: `,
                                    `px 0px;
      opacity: 0.5;
      border-radius: 2px;
      text-align: center;
      cursor: pointer;
      font-family: inherit;
  
      &:enabled {
          border: 1px solid rgba(0, 0, 0, 0.3);
          background-color: rgba(48, 48, 60, 1);
          color: white;
      }
  
      &:disabled {
          border: 1px solid rgba(0, 0, 0, 0.3);
          background-color: rgba(48, 48, 60, 1);
          pointer-events: none;
      }
  `,
                                ],
                                [
                                    `
      width: 45%;
      margin: auto 2.5%;
      font-size: 12px;
      padding: `,
                                    `px 0px;
      opacity: 0.5;
      border-radius: 2px;
      text-align: center;
      cursor: pointer;
      font-family: inherit;
  
      &:enabled {
          border: 1px solid rgba(0, 0, 0, 0.3);
          background-color: rgba(48, 48, 60, 1);
          color: white;
      }
  
      &:disabled {
          border: 1px solid rgba(0, 0, 0, 0.3);
          background-color: rgba(48, 48, 60, 1);
          pointer-events: none;
      }
  `,
                                ]
                            )),
                        JP(8)
                    );
                    var yo = v.button(
                        y2 ||
                            (y2 = I5(
                                [
                                    `
      width: 45%;
      margin: auto 2.5%;
      background-color: `,
                                    `;
      font-size: 12px;
      padding: `,
                                    `px 0px;
      border-radius: 2px;
      text-align: center;
      cursor: pointer;
      font-family: inherit;
  
      &:enabled {
          border: none;
          color: white;
      }
  
      &:disabled {
          border: none;
          pointer-events: none;
      }
  `,
                                ],
                                [
                                    `
      width: 45%;
      margin: auto 2.5%;
      background-color: `,
                                    `;
      font-size: 12px;
      padding: `,
                                    `px 0px;
      border-radius: 2px;
      text-align: center;
      cursor: pointer;
      font-family: inherit;
  
      &:enabled {
          border: none;
          color: white;
      }
  
      &:disabled {
          border: none;
          pointer-events: none;
      }
  `,
                                ]
                            )),
                        function (db) {
                            return db.themeColor || "rgb(255,255,255,1)";
                        },
                        JP(8)
                    );
                    var ya = v.button(
                        y3 ||
                            (y3 = I5(
                                [
                                    `
      width: 45%;
      margin: auto 2.5%;
      background-color: `,
                                    `;
      font-size: 12px;
      padding: `,
                                    `px 0px;
      border-radius: 2px;
      text-align: center;
      cursor: pointer;
      font-family: inherit;
  
      &:enabled {
          border: none;
          color: white;
      }
  
      &:disabled {
          border: none;
          pointer-events: none;
      }
  `,
                                ],
                                [
                                    `
      width: 45%;
      margin: auto 2.5%;
      background-color: `,
                                    `;
      font-size: 12px;
      padding: `,
                                    `px 0px;
      border-radius: 2px;
      text-align: center;
      cursor: pointer;
      font-family: inherit;
  
      &:enabled {
          border: none;
          color: white;
      }
  
      &:disabled {
          border: none;
          pointer-events: none;
      }
  `,
                                ]
                            )),
                        function (db) {
                            return db.themeColor || "rgb(255,255,255,1)";
                        },
                        JP(8)
                    );
                    var yB = v.div(
                        y4 ||
                            (y4 = I5(
                                [
                                    `
      position: absolute;
      `,
                                    ": -16px;\n    transform: scale(",
                                    ") ",
                                    ";\n    top: ",
                                    ";\n",
                                ],
                                [
                                    `
      position: absolute;
      `,
                                    ": -16px;\n    transform: scale(",
                                    ") ",
                                    ";\n    top: ",
                                    ";\n",
                                ]
                            )),
                        IG.isRTL ? "right" : "left",
                        JP(0.6),
                        IG.isRTL ? "scaleX(-1)" : "",
                        function (db) {
                            if (Jb(db)) {
                                return "-9px";
                            } else {
                                return "-11px";
                            }
                        }
                    );
                    var yq = v.div(
                        y5 ||
                            (y5 = I5(
                                [
                                    "\n    float: ",
                                    ";\n    border-radius: ",
                                    `;
      border-width: 0px 0px 0px 4px;
      border-style: solid;
      color: `,
                                    ";\n",
                                ],
                                [
                                    "\n    float: ",
                                    ";\n    border-radius: ",
                                    `;
      border-width: 0px 0px 0px 4px;
      border-style: solid;
      color: `,
                                    ";\n",
                                ]
                            )),
                        IG.isRTL ? "right" : "left",
                        IG.isRTL ? "0px 4px 4px 0px" : "4px 0px 0px 4px",
                        function (db) {
                            return db.themeColor || "rgb(255,255,255,1)";
                        }
                    );
                    var yE = v.div(
                        y6 ||
                            (y6 = I5(
                                [
                                    "\n    padding-top: ",
                                    "px;\n    padding-bottom: ",
                                    `px;
      font-size: 14px;
      direction: ltr;
  `,
                                ],
                                [
                                    "\n    padding-top: ",
                                    "px;\n    padding-bottom: ",
                                    `px;
      font-size: 14px;
      direction: ltr;
  `,
                                ]
                            )),
                        JP(9),
                        JP(18)
                    );
                    var yj = v.div(
                        y7 ||
                            (y7 = I5(
                                [
                                    `
      position: relative;
      width: 45%;
      display: inline-block;
      margin: auto 2.5%;
  `,
                                ],
                                [
                                    `
      position: relative;
      width: 45%;
      display: inline-block;
      margin: auto 2.5%;
  `,
                                ]
                            ))
                    );
                    var yF = v.button(
                        y8 ||
                            (y8 = I5(
                                [
                                    `
      width: 100%;
      font-size: 12px;
      padding: `,
                                    `px 0px;
      opacity: 0.5;
      border-radius: 2px;
      text-align: center;
      cursor: pointer;
      font-family: inherit;
  
      &:enabled {
          border: none;
          color: white;
      }
  
      &:disabled {
          border: none;
          pointer-events: none;
      }
  `,
                                ],
                                [
                                    `
      width: 100%;
      font-size: 12px;
      padding: `,
                                    `px 0px;
      opacity: 0.5;
      border-radius: 2px;
      text-align: center;
      cursor: pointer;
      font-family: inherit;
  
      &:enabled {
          border: none;
          color: white;
      }
  
      &:disabled {
          border: none;
          pointer-events: none;
      }
  `,
                                ]
                            )),
                        JP(8)
                    );
                    var yZ = v.div(
                        y9 ||
                            (y9 = I5(
                                [
                                    `
      width: 20px;
      height: 20px;
      border-radius: 50%;
      position: absolute;
      bottom: `,
                                    `;
      right: -9px;
      background: `,
                                    ";\n    transform: scale(",
                                    ");\n",
                                ],
                                [
                                    `
      width: 20px;
      height: 20px;
      border-radius: 50%;
      position: absolute;
      bottom: `,
                                    `;
      right: -9px;
      background: `,
                                    ";\n    transform: scale(",
                                    ");\n",
                                ]
                            )),
                        function (db) {
                            if (Jb(db)) {
                                return "14px";
                            } else {
                                return "22px";
                            }
                        },
                        function (db) {
                            return db.themeColor || "rgb(255,255,255,1)";
                        },
                        JP(1)
                    );
                    var yu = v.div(
                        yI ||
                            (yI = I5(
                                [
                                    `
      position: absolute;
      bottom: `,
                                    `;
      right: -14px;
      cursor: pointer;
      transform: scale(`,
                                    ");\n",
                                ],
                                [
                                    `
      position: absolute;
      bottom: `,
                                    `;
      right: -14px;
      cursor: pointer;
      transform: scale(`,
                                    ");\n",
                                ]
                            )),
                        function (db) {
                            if (Jb(db)) {
                                return "9px";
                            } else {
                                return "17px";
                            }
                        },
                        JP(0.75)
                    );
                    var T0 = v.section(
                        yJ ||
                            (yJ = I5(
                                [
                                    "\n    padding-",
                                    ": 10px;\n    padding-bottom: ",
                                    "px;\n    text-align: ",
                                    `;
      font-size: 14px;
  `,
                                ],
                                [
                                    "\n    padding-",
                                    ": 10px;\n    padding-bottom: ",
                                    "px;\n    text-align: ",
                                    `;
      font-size: 14px;
  `,
                                ]
                            )),
                        IG.isRTL ? "right" : "left",
                        JP(15),
                        IG.isRTL ? "right" : "left"
                    );
                    var T1 = v.div(
                        yy ||
                            (yy = I5(
                                [
                                    "\n    padding-top: ",
                                    `px;
      display: flex;
      font-size: 12px;
  `,
                                ],
                                [
                                    "\n    padding-top: ",
                                    `px;
      display: flex;
      font-size: 12px;
  `,
                                ]
                            )),
                        JP(30)
                    );
                    var T2 = v.section(
                        yT ||
                            (yT = I5(
                                [
                                    `
      direction: ltr;
  `,
                                ],
                                [
                                    `
      direction: ltr;
  `,
                                ]
                            ))
                    );
                    var T3 = v.div(
                        yX ||
                            (yX = I5(
                                [
                                    `
      word-wrap: break-word;
      transform: scale(`,
                                    `);
      transform-origin: left;
      width: `,
                                    "%;\n    height: ",
                                    "%;\n",
                                ],
                                [
                                    `
      word-wrap: break-word;
      transform: scale(`,
                                    `);
      transform-origin: left;
      width: `,
                                    "%;\n    height: ",
                                    "%;\n",
                                ]
                            )),
                        JP(1),
                        Jh(100),
                        Jh(100)
                    );
                    var T4 = v(T3)(
                        yd ||
                            (yd = I5(
                                [
                                    `
      font-size: 11px;
      line-height: 14px;
      opacity: 0.5;
  `,
                                ],
                                [
                                    `
      font-size: 11px;
      line-height: 14px;
      opacity: 0.5;
  `,
                                ]
                            ))
                    );
                    var T5 = v.div(
                        yM ||
                            (yM = I5(
                                [
                                    "\n    width: ",
                                    "px;\n    height: ",
                                    `px;
      border-radius: 50%;
      background-color: rgba(33, 33, 41, 1);
      display: inline-block;
      position: relative;
  `,
                                ],
                                [
                                    "\n    width: ",
                                    "px;\n    height: ",
                                    `px;
      border-radius: 50%;
      background-color: rgba(33, 33, 41, 1);
      display: inline-block;
      position: relative;
  `,
                                ]
                            )),
                        JP(13),
                        JP(13)
                    );
                    var T6 = v.div(
                        yl ||
                            (yl = I5(
                                [
                                    "\n    top: ",
                                    ";\n    ",
                                    ": ",
                                    `;
      position: absolute;
      transform: scale(`,
                                    ");\n",
                                ],
                                [
                                    "\n    top: ",
                                    ";\n    ",
                                    ": ",
                                    `;
      position: absolute;
      transform: scale(`,
                                    ");\n",
                                ]
                            )),
                        function (db) {
                            if (Jb(db)) {
                                return "-15px";
                            } else {
                                return "-13px";
                            }
                        },
                        IG.isRTL ? "right" : "left",
                        function (db) {
                            if (Jb(db)) {
                                return "2px";
                            } else {
                                return "10px";
                            }
                        },
                        JP(0.5)
                    );
                    var T7 = v(T6)(
                        yS ||
                            (yS = I5(
                                [
                                    `
      opacity: 0.5;
  `,
                                ],
                                [
                                    `
      opacity: 0.5;
  `,
                                ]
                            ))
                    );
                    var T8 = v.label(
                        yK ||
                            (yK = I5(
                                [
                                    `
      position: absolute;
      `,
                                    ": ",
                                    ";\n    top: ",
                                    ";\n    transform: scale(",
                                    ");\n    transform-origin: ",
                                    ";\n    width: ",
                                    `%;
      height: 140%;
  `,
                                ],
                                [
                                    `
      position: absolute;
      `,
                                    ": ",
                                    ";\n    top: ",
                                    ";\n    transform: scale(",
                                    ");\n    transform-origin: ",
                                    ";\n    width: ",
                                    `%;
      height: 140%;
  `,
                                ]
                            )),
                        IG.isRTL ? "right" : "left",
                        function (db) {
                            if (Jb(db)) {
                                return "35px";
                            } else {
                                return "47px";
                            }
                        },
                        function (db) {
                            if (Jb(db)) {
                                return "-2px";
                            } else {
                                return "0px";
                            }
                        },
                        JP(1),
                        IG.isRTL ? "right" : "left",
                        Jh(64)
                    );
                    var T9 = v(T8)(
                        yY ||
                            (yY = I5(
                                [
                                    `
      opacity: 0.5;
  `,
                                ],
                                [
                                    `
      opacity: 0.5;
  `,
                                ]
                            ))
                    );
                    var TI = v.span(
                        yA ||
                            (yA = I5(
                                [
                                    "\n    width: ",
                                    ";\n    height: ",
                                    `;
      border-radius: 50%;
      position: absolute;
      `,
                                    ": ",
                                    ";\n    top: ",
                                    `;
      display: none;
  `,
                                ],
                                [
                                    "\n    width: ",
                                    ";\n    height: ",
                                    `;
      border-radius: 50%;
      position: absolute;
      `,
                                    ": ",
                                    ";\n    top: ",
                                    `;
      display: none;
  `,
                                ]
                            )),
                        function (db) {
                            if (Jb(db)) {
                                return "4px";
                            } else {
                                return "5px";
                            }
                        },
                        function (db) {
                            if (Jb(db)) {
                                return "4px";
                            } else {
                                return "5px";
                            }
                        },
                        IG.isRTL ? "right" : "left",
                        function (db) {
                            if (Jb(db)) {
                                return "3px";
                            } else {
                                return "4px";
                            }
                        },
                        function (db) {
                            if (Jb(db)) {
                                return "3px";
                            } else {
                                return "4px";
                            }
                        }
                    );
                    var TJ = v.div(
                        ys ||
                            (ys = I5(
                                [
                                    `
      cursor: pointer;
      position: absolute;
      right: 10px;
      top: `,
                                    ";\n    transform: scale(",
                                    `);
      opacity: 0.4;
  `,
                                ],
                                [
                                    `
      cursor: pointer;
      position: absolute;
      right: 10px;
      top: `,
                                    ";\n    transform: scale(",
                                    `);
      opacity: 0.4;
  `,
                                ]
                            )),
                        function (db) {
                            if (Jb(db)) {
                                return "13px";
                            } else {
                                return `${JD(13)}px`;
                            }
                        },
                        JP(0.75)
                    );
                    var Ty = v.div(
                        yx ||
                            (yx = I5(
                                [
                                    `
      height: 100%;
      width: `,
                                    `;
      position: relative;
      direction: `,
                                    ";\n",
                                ],
                                [
                                    `
      height: 100%;
      width: `,
                                    `;
      position: relative;
      direction: `,
                                    ";\n",
                                ]
                            )),
                        function (db) {
                            if (Jb(db)) {
                                return "269px";
                            } else {
                                return "360px";
                            }
                        },
                        IG.isRTL ? "rtl" : "ltr"
                    );
                    var TT = v.div(yc || (yc = I5(["\n    max-height: ", "px;\n"], ["\n    max-height: ", "px;\n"])), function (db) {
                        if (Jb(db)) {
                            return db.currHeight - 59;
                        } else {
                            return db.currHeight - JD(68);
                        }
                    });
                    var TX = v(T3)(
                        yv ||
                            (yv = I5(
                                [
                                    `
      opacity: 0.5;
  `,
                                ],
                                [
                                    `
      opacity: 0.5;
  `,
                                ]
                            ))
                    );
                    var Td = I7.formatCurrency;
                    var TM = v.hr(
                        yN ||
                            (yN = I5(
                                [
                                    `
      border-style: solid;
      border-width: 0.5px;
      color: black;
      opacity: 0.5;
  `,
                                ],
                                [
                                    `
      border-style: solid;
      border-width: 0.5px;
      color: black;
      opacity: 0.5;
  `,
                                ]
                            ))
                    );
                    var Tl = v.div(
                        yQ ||
                            (yQ = I5(
                                [
                                    `
      flex: 1 1 30px;
      position: relative;
      height: 10px;
  `,
                                ],
                                [
                                    `
      flex: 1 1 30px;
      position: relative;
      height: 10px;
  `,
                                ]
                            ))
                    );
                    var TS = v.input(
                        yG ||
                            (yG = I5(
                                [
                                    `
      opacity: 0;
      margin: 0px;
  `,
                                ],
                                [
                                    `
      opacity: 0;
      margin: 0px;
  `,
                                ]
                            ))
                    );
                    var TK = shell.I18n;
                    var TY = (function (db) {
                        function dw(df) {
                            var dO = db.call(this, df) || this;
                            dO.mn = [];
                            dO.gn = false;
                            dO.bn = 1;
                            dO.vn = [];
                            dO.xn = false;
                            dO.wn = false;
                            dO.Cn = function (dk, dU) {
                                document.getElementById(`selectWalletBtn ${dU.toString()}`).blur();
                                df.onSelectWalletClick(dk, dU);
                            };
                            dO.yn = function (dk, dU) {
                                for (var dp = document.getElementsByClassName("btnStyle"), dm = 0, dR = dp.length; dm < dR; dm++) {
                                    dp[dm].blur();
                                }
                                df.onDiscardOfferClick(dk, dU);
                            };
                            dO.state = {
                                scrollFreeze: false,
                            };
                            return dO;
                        }
                        I0(dw, db);
                        dw.prototype.componentDidMount = function () {
                            var df = IG.context.event;
                            df.on("Shell.Scaled", this.kn, this);
                            df.emit("Game.BonusWalletListOpened");
                            this.Bn();
                            this.Wn();
                            this.Sn();
                            document.addEventListener("keydown", this.Gn);
                        };
                        dw.prototype.componentDidUpdate = function () {
                            this.Bn();
                            this.Wn();
                            this.Sn();
                        };
                        dw.prototype.componentWillUnmount = function () {
                            IG.context.event.off("Shell.Scaled", this.kn, this);
                            document.removeEventListener("keydown", this.Gn);
                        };
                        dw.prototype.shouldComponentUpdate = function (df) {
                            return this.props.show === df.show && ((this.xn = this.props.data === df.data), true);
                        };
                        dw.prototype.render = function () {
                            return K.createElement(
                                yL,
                                {
                                    id: "bwfgContainer",
                                    className: "wallet",
                                },
                                this.V(),
                                this.H()
                            );
                        };
                        dw.prototype.Gn = function (df) {
                            if (!(df.key !== " " && df.key !== "Spacebar")) {
                                df.preventDefault();
                            }
                        };
                        dw.prototype.kn = function (df) {
                            var dO = df.payload;
                            var dk = document.getElementById("scrollView");
                            var dU = parseFloat(M.getComputedStyle(document.getElementById("headerWrapper")).height);
                            if (dk) {
                                dk.style.maxHeight = `${dO.height - dU}px`;
                            }
                        };
                        dw.prototype.Bn = function () {
                            for (var df = this.mn, dO = 0, dk = df.length; dO < dk; dO++) {
                                var dU = df[dO].key;
                                if (dU && IC.transactionInfo.wk === dU) {
                                    var dp = document.getElementById(`currWalletSideBar ${dO.toString()}`);
                                    var dm = document.getElementById(`bwfgView ${dO.toString()}`);
                                    dp.style.height = `${dm.clientHeight.toString()}px`;
                                }
                            }
                        };
                        dw.prototype.Wn = function () {
                            var df = IC.gameThemeColor;
                            this.vn.forEach(function (dO) {
                                document.getElementById(`selectWalletBtn ${dO.toString()}`).style.backgroundColor = df;
                            });
                        };
                        dw.prototype.Sn = function () {
                            for (var df = IC.gameThemeColor, dO = 0, dk = this.mn.length; dO < dk; dO++) {
                                var dU = document.getElementById(`custom cash radio button ${dO.toString()}`);
                                var dp = document.getElementById(`custom bonus radio button ${dO.toString()}`);
                                var dm = document.getElementById(`cash ${dO.toString()}`);
                                var dR = document.getElementById(`bonus ${dO.toString()}`);
                                var da = document.getElementById(`cash check mark ${dO.toString()}`);
                                var dB = document.getElementById(`bonus check mark ${dO.toString()}`);
                                da.style.backgroundColor = df;
                                da.style.display = dm.defaultChecked ? "block" : "none";
                                if (dm.disabled) {
                                    dU.style.opacity = "0.5";
                                    da.style.opacity = "0.5";
                                }
                                dB.style.backgroundColor = df;
                                dB.style.display = dR.defaultChecked ? "block" : "none";
                                if (dR.disabled) {
                                    dp.style.opacity = "0.5";
                                    dB.style.opacity = "0.5";
                                }
                            }
                        };
                        dw.prototype.V = function () {
                            var df = IC.status;
                            if (!this.props.error && this.props.data && this.props.data.dt.r) {
                                for (var dO = 0, dk = this.props.data.dt.r.length; dO < dk; dO++) {
                                    if (this.props.data.dt.r[dO].s === 6 && IC.transactionInfo.wk === this.props.data.dt.r[dO].k) {
                                        this.gn = true;
                                        break;
                                    }
                                }
                            }
                            return K.createElement(
                                yg,
                                {
                                    id: "headerWrapper",
                                },
                                K.createElement(
                                    yH,
                                    {
                                        id: "bwfgHeader",
                                        orientation: shell.environment.getOrientationMode(),
                                        themeColor: IC.gameThemeColor,
                                    },
                                    TK.t("BonusWallet.BonusWallet")
                                ),
                                K.createElement(TJ, {
                                    className: "wallet-plugin-sprite wallet-plugin-ic_close",
                                    onClick: df === 4 || df === 3 || df === 2 || this.gn ? this.props.onBackCashWalletClick : this.props.onCloseButtonClick,
                                    orientation: shell.environment.getOrientationMode(),
                                })
                            );
                        };
                        dw.prototype.H = function () {
                            var df = this;
                            if (this.props.error) {
                                this.bn = 1;
                                this.mn = [];
                                return K.createElement(
                                    yV,
                                    null,
                                    K.createElement(
                                        yC,
                                        null,
                                        K.createElement(yW, null, K.createElement(T3, null, this.props.error.message)),
                                        this.props.error.shouldRetry &&
                                            K.createElement(
                                                yz,
                                                {
                                                    onClick: this.props.onRetryClick,
                                                    themeColor: IC.gameThemeColor,
                                                },
                                                TK.t("General.DialogRetry")
                                            )
                                    )
                                );
                            }
                            if (this.props.data) {
                                this.gn = false;
                                this.vn = [];
                                var dO = parseFloat(document.getElementById("wallet-container").style.height);
                                var dk = this.props.data.dt;
                                var dU = JSON.parse(JSON.stringify(dk.r));
                                var dp = dk.tp;
                                this.On = this.bn > 1 ? this.On : dp;
                                this.mn = this.bn > 1 ? this.mn : [];
                                if (dU && dU.length > 0) {
                                    if (!this.xn) {
                                        for (var dm = 0, dR = dU.length; dm < dR; dm++) {
                                            var da = dU[dm];
                                            if (da.k === IC.transactionInfo.wk) {
                                                this.mn.push(new Jx(da));
                                                dU.splice(dm, 1);
                                                break;
                                            }
                                        }
                                        if (dU.length > 0) {
                                            dU.forEach(function (dq) {
                                                df.mn.push(new Jx(dq));
                                            });
                                        }
                                    }
                                    var dB = this.mn.map(function (dq, dE) {
                                        var dj = dq.bonusWalletName;
                                        var dF = dq.bonusID;
                                        var dZ = dq.expiredDate;
                                        var du = dq.expiredTime;
                                        var M0 = dq.initialBonusRatioAmount;
                                        var M1 = dq.key;
                                        var M2 = dq.status;
                                        var M3 = Td(M0);
                                        var M4 = df.Z(dq, dE);
                                        return K.createElement(
                                            yP,
                                            {
                                                key: dE,
                                            },
                                            M1 &&
                                                IC.transactionInfo.wk === M1 &&
                                                K.createElement(yq, {
                                                    id: `currWalletSideBar ${dE.toString()}`,
                                                    themeColor: IC.gameThemeColor,
                                                }),
                                            K.createElement(
                                                yD,
                                                {
                                                    id: `bwfgView ${dE.toString()}`,
                                                    key: dE,
                                                },
                                                K.createElement(
                                                    yh,
                                                    null,
                                                    K.createElement(
                                                        yw,
                                                        null,
                                                        K.createElement(
                                                            "div",
                                                            {
                                                                className: "resizableTxtContainer",
                                                            },
                                                            M2 === 5 &&
                                                                K.createElement(yB, {
                                                                    className: "wallet-plugin-sprite wallet-plugin-ic_wallet_new",
                                                                    orientation: shell.environment.getOrientationMode(),
                                                                }),
                                                            K.createElement(
                                                                T3,
                                                                {
                                                                    className: "resizableTxt",
                                                                },
                                                                dj
                                                            )
                                                        ),
                                                        K.createElement(
                                                            yU,
                                                            {
                                                                className: "resizableTxtContainer",
                                                            },
                                                            K.createElement(
                                                                T3,
                                                                {
                                                                    className: "resizableTxt",
                                                                },
                                                                TK.t("BonusWallet.Offer", {
                                                                    id: dF.toString(),
                                                                })
                                                            )
                                                        )
                                                    ),
                                                    K.createElement(
                                                        yf,
                                                        null,
                                                        K.createElement(
                                                            yp,
                                                            {
                                                                className: "resizableTxtContainer",
                                                                themeColor: IC.gameThemeColor,
                                                            },
                                                            K.createElement(
                                                                T3,
                                                                {
                                                                    className: "resizableTxt",
                                                                },
                                                                M4.remainingInfo
                                                            )
                                                        ),
                                                        M4.rollOverBalContent,
                                                        M4.withdrawLimitContent
                                                    )
                                                ),
                                                K.createElement(
                                                    yb,
                                                    null,
                                                    K.createElement(
                                                        yO,
                                                        null,
                                                        K.createElement(
                                                            "div",
                                                            {
                                                                className: "resizableTxtContainer",
                                                            },
                                                            K.createElement(
                                                                T3,
                                                                {
                                                                    className: "resizableTxt",
                                                                },
                                                                dZ,
                                                                " ",
                                                                du
                                                            )
                                                        ),
                                                        K.createElement(
                                                            ym,
                                                            {
                                                                className: "resizableTxtContainer",
                                                            },
                                                            K.createElement(
                                                                TX,
                                                                {
                                                                    className: "resizableTxt",
                                                                },
                                                                TK.t("BonusWallet.Expiry")
                                                            )
                                                        )
                                                    ),
                                                    K.createElement(
                                                        yk,
                                                        null,
                                                        K.createElement(
                                                            "div",
                                                            {
                                                                className: "resizableTxtContainer",
                                                            },
                                                            K.createElement(
                                                                T3,
                                                                {
                                                                    className: "resizableTxt",
                                                                },
                                                                M3
                                                            )
                                                        ),
                                                        K.createElement(
                                                            ym,
                                                            {
                                                                className: "resizableTxtContainer",
                                                            },
                                                            K.createElement(
                                                                TX,
                                                                {
                                                                    className: "resizableTxt",
                                                                },
                                                                TK.t("BonusWallet.InitialBonusRatioLabel")
                                                            )
                                                        )
                                                    )
                                                ),
                                                K.createElement(TM, null),
                                                K.createElement(T0, null, K.createElement(TX, null, TK.t("BonusWallet.RollOverMode")), M4.rollOverModeContent),
                                                K.createElement(T2, null, M4.discardOfferBtnContent, M4.selectWalletBtnContent)
                                            )
                                        );
                                    });
                                    return K.createElement(
                                        Ty,
                                        {
                                            orientation: shell.environment.getOrientationMode(),
                                        },
                                        K.createElement(
                                            Jz,
                                            {
                                                handleClass: "background-color: rgba(117, 117, 117, 0.7);",
                                                freezePosition: this.state.scrollFreeze,
                                                onScroll: function (dq) {
                                                    var dE = dq.target;
                                                    if (df.On > 1 && dE.clientHeight + dE.scrollTop === dE.scrollHeight) {
                                                        df.On--;
                                                        df.bn++;
                                                        df.props.onLoadMoreRequestApi(df.bn, function () {
                                                            df.setState({
                                                                scrollFreeze: false,
                                                            });
                                                        });
                                                        df.wn = true;
                                                        df.setState({
                                                            scrollFreeze: true,
                                                        });
                                                    }
                                                },
                                                rtl: IG.isRTL,
                                            },
                                            K.createElement(
                                                TT,
                                                {
                                                    id: "scrollView",
                                                    orientation: shell.environment.getOrientationMode(),
                                                    currHeight: dO,
                                                },
                                                dB,
                                                K.createElement(
                                                    yE,
                                                    {
                                                        id: "loadMore",
                                                        key: this.bn,
                                                    },
                                                    K.createElement(T3, null, this.Fn())
                                                )
                                            )
                                        )
                                    );
                                }
                                return K.createElement(yV, null, K.createElement(yC, null, K.createElement(yW, null, TK.t("BonusWallet.NoOfferFound"))));
                            }
                        };
                        dw.prototype.Z = function (df, dO) {
                            var dk = df.status;
                            var dU = df.key;
                            var dp = df.keySelection;
                            var dm = df.balanceAmount;
                            var dR = df.bonusRatioAmount;
                            var da = df.maximumConversionAmount;
                            var dB = df.rollOverMode;
                            var dq = IC.transactionInfo;
                            var dE = Td(dm);
                            var dj = Td(dR);
                            switch (dk) {
                                case 2:
                                    return {
                                        remainingInfo: TK.t("BonusWallet.Expired"),
                                        rollOverBalContent: null,
                                        withdrawLimitContent: null,
                                        rollOverModeContent: this.Tn(dO, dU, dp, dB),
                                        discardOfferBtnContent: this.Nn(df, true),
                                        selectWalletBtnContent: this._n(dU, dO, dk),
                                    };
                                case 6:
                                    return {
                                        remainingInfo: TK.t("BonusWallet.BonusWalletDiscarded"),
                                        rollOverBalContent: null,
                                        withdrawLimitContent: null,
                                        rollOverModeContent: this.Tn(dO, dU, dp, dB),
                                        discardOfferBtnContent: this.zn(df),
                                        selectWalletBtnContent: this._n(dU, dO, dk),
                                    };
                                case 7:
                                    return {
                                        remainingInfo: dE,
                                        rollOverBalContent: null,
                                        withdrawLimitContent: this.An(da),
                                        rollOverModeContent: this.Tn(dO, dU, dp, dB),
                                        discardOfferBtnContent: this.Nn(df, false),
                                        selectWalletBtnContent: this.Ln(df, dO),
                                    };
                                case 1:
                                    return {
                                        remainingInfo: dE,
                                        rollOverBalContent: K.createElement(
                                            "div",
                                            {
                                                className: "resizableTxtContainer",
                                            },
                                            K.createElement(
                                                T4,
                                                {
                                                    className: "resizableTxt",
                                                },
                                                `${TK.t("BonusWallet.BonusRatioLabel")} ${dj}`
                                            )
                                        ),
                                        withdrawLimitContent: this.An(da),
                                        rollOverModeContent: dB === 2 ? this.In(dO, df, dk) : this.Tn(dO, dU, dp, dB),
                                        discardOfferBtnContent: this.Nn(df, false),
                                        selectWalletBtnContent: dU === dq.wk || (dB === 2 && !dU) ? this._n(dU, dO, dk) : this.Rn(df, dO),
                                    };
                                default:
                                    return {
                                        remainingInfo: dE,
                                        rollOverBalContent: null,
                                        withdrawLimitContent: this.An(da),
                                        rollOverModeContent: dB === 2 ? this.In(dO, df, dk) : this.Tn(dO, dU, dp, dB),
                                        discardOfferBtnContent: this.Nn(df, false),
                                        selectWalletBtnContent: dU === dq.wk || (dB === 2 && !dU) ? this._n(dU, dO, dk) : this.Rn(df, dO),
                                    };
                            }
                        };
                        dw.prototype.An = function (df) {
                            var dO = Td(df);
                            return (
                                df > 0 &&
                                K.createElement(
                                    "div",
                                    {
                                        className: "resizableTxtContainer",
                                    },
                                    K.createElement(
                                        T4,
                                        {
                                            className: "resizableTxt",
                                        },
                                        TK.t("BonusWallet.MaximumConversionRate", {
                                            rate: dO,
                                        })
                                    )
                                )
                            );
                        };
                        dw.prototype.In = function (df, dO, dk) {
                            var dU = dO.rollOverMode;
                            var dp = dO.key;
                            var dm = dO.keySelection;
                            if (dk === 5) {
                                if (
                                    (dR = document.getElementById(`selectWalletBtn ${df.toString()}`)) &&
                                    dR.children[0].innerHTML !== TK.t("BonusWallet.SelectMode")
                                ) {
                                    dk = Math.random();
                                }
                            } else if (dk === 1) {
                                var dR;
                                if (
                                    (dR = document.getElementById(`selectWalletBtn ${df.toString()}`)) &&
                                    dR.children[0].innerHTML !== TK.t("BonusWallet.WalletInuse")
                                ) {
                                    dk = Math.random();
                                }
                            }
                            return K.createElement(
                                T1,
                                null,
                                K.createElement(
                                    Tl,
                                    null,
                                    K.createElement(
                                        T5,
                                        {
                                            id: `custom cash radio button ${df.toString()}`,
                                        },
                                        K.createElement(TS, {
                                            type: "radio",
                                            id: `cash ${df.toString()}`,
                                            key: dk,
                                            value: "cash",
                                            name: df.toString(),
                                            defaultChecked: dU === 1 || (dm && dp === dm[1]),
                                            onChange: this.Dn.bind(this, df, dO),
                                            onClick: this.jn.bind(this, df),
                                        }),
                                        K.createElement(TI, {
                                            id: `cash check mark ${df.toString()}`,
                                            orientation: shell.environment.getOrientationMode(),
                                        })
                                    ),
                                    K.createElement(T6, {
                                        className: "wallet-plugin-color-sprite wallet-plugin-color-ic_wallet",
                                        orientation: shell.environment.getOrientationMode(),
                                    }),
                                    K.createElement(
                                        T8,
                                        {
                                            htmlFor: `cash ${df.toString()}`,
                                            orientation: shell.environment.getOrientationMode(),
                                        },
                                        TK.t("BonusWallet.Cash")
                                    )
                                ),
                                K.createElement(
                                    Tl,
                                    null,
                                    K.createElement(
                                        T5,
                                        {
                                            id: `custom bonus radio button ${df.toString()}`,
                                        },
                                        K.createElement(TS, {
                                            type: "radio",
                                            id: `bonus ${df.toString()}`,
                                            key: dk,
                                            value: "bonus",
                                            name: df.toString(),
                                            defaultChecked: dU === 0 || (dm && dp === dm[0]),
                                            onChange: this.Dn.bind(this, df, dO),
                                            onClick: this.Mn.bind(this, df),
                                        }),
                                        K.createElement(TI, {
                                            id: `bonus check mark ${df.toString()}`,
                                            orientation: shell.environment.getOrientationMode(),
                                        })
                                    ),
                                    K.createElement(T6, {
                                        className: "wallet-plugin-color-sprite wallet-plugin-color-ic_bonus_wallet",
                                        orientation: shell.environment.getOrientationMode(),
                                    }),
                                    K.createElement(
                                        T8,
                                        {
                                            htmlFor: `bonus ${df.toString()}`,
                                            orientation: shell.environment.getOrientationMode(),
                                        },
                                        TK.t("BonusWallet.Bonus")
                                    )
                                )
                            );
                        };
                        dw.prototype.Tn = function (df, dO, dk, dU) {
                            return K.createElement(
                                T1,
                                null,
                                K.createElement(
                                    Tl,
                                    null,
                                    K.createElement(
                                        T5,
                                        {
                                            id: `custom cash radio button ${df.toString()}`,
                                        },
                                        K.createElement(TS, {
                                            type: "radio",
                                            id: `cash ${df.toString()}`,
                                            value: "cash",
                                            name: df.toString(),
                                            defaultChecked: dU === 1 || (dk && dO === dk[1]),
                                            disabled: true,
                                        }),
                                        K.createElement(TI, {
                                            id: `cash check mark ${df.toString()}`,
                                            orientation: shell.environment.getOrientationMode(),
                                        })
                                    ),
                                    K.createElement(T7, {
                                        className: "wallet-plugin-color-sprite wallet-plugin-color-ic_wallet",
                                        orientation: shell.environment.getOrientationMode(),
                                    }),
                                    K.createElement(
                                        T9,
                                        {
                                            orientation: shell.environment.getOrientationMode(),
                                        },
                                        TK.t("BonusWallet.Cash")
                                    )
                                ),
                                K.createElement(
                                    Tl,
                                    null,
                                    K.createElement(
                                        T5,
                                        {
                                            id: `custom bonus radio button ${df.toString()}`,
                                        },
                                        K.createElement(TS, {
                                            type: "radio",
                                            id: `bonus ${df.toString()}`,
                                            value: "bonus",
                                            name: df.toString(),
                                            defaultChecked: dU === 0 || (dk && dO === dk[0]),
                                            disabled: true,
                                        }),
                                        K.createElement(TI, {
                                            id: `bonus check mark ${df.toString()}`,
                                            orientation: shell.environment.getOrientationMode(),
                                        })
                                    ),
                                    K.createElement(T7, {
                                        className: "wallet-plugin-color-sprite wallet-plugin-color-ic_bonus_wallet",
                                        orientation: shell.environment.getOrientationMode(),
                                    }),
                                    K.createElement(
                                        T9,
                                        {
                                            orientation: shell.environment.getOrientationMode(),
                                        },
                                        TK.t("BonusWallet.Bonus")
                                    )
                                )
                            );
                        };
                        dw.prototype.zn = function (df) {
                            if (df.status !== 2 && df.isHideDiscard) {
                                return null;
                            } else {
                                return K.createElement(
                                    yR,
                                    {
                                        className: "btnStyle",
                                        disabled: true,
                                    },
                                    K.createElement(T3, null, TK.t("BonusWallet.DiscardWallet"))
                                );
                            }
                        };
                        dw.prototype.Nn = function (df, dO) {
                            if (df.status !== 2 && df.isHideDiscard) {
                                return null;
                            } else {
                                return K.createElement(
                                    yR,
                                    {
                                        className: "btnStyle",
                                        onClick: this.yn.bind(this, df, dO),
                                    },
                                    K.createElement(T3, null, TK.t("BonusWallet.DiscardWallet"))
                                );
                            }
                        };
                        dw.prototype._n = function (df, dO, dk) {
                            var dU = df
                                ? IC.transactionInfo.wk === df
                                    ? TK.t("BonusWallet.WalletInuse")
                                    : TK.t("BonusWallet.SelectWallet")
                                : TK.t("BonusWallet.SelectMode");
                            if (dk === 5) {
                                if (
                                    (dp = document.getElementById(`selectWalletBtn ${dO.toString()}`)) &&
                                    dp.children[0].innerHTML !== TK.t("BonusWallet.SelectMode")
                                ) {
                                    dk = Math.random();
                                }
                            } else if (dk === 1) {
                                var dp;
                                if (
                                    (dp = document.getElementById(`selectWalletBtn ${dO.toString()}`)) &&
                                    dp.children[0].innerHTML !== TK.t("BonusWallet.WalletInuse")
                                ) {
                                    dk = Math.random();
                                }
                            }
                            var dm = shell.uiAppearance.v("game.theme_color");
                            return K.createElement(
                                ya,
                                {
                                    id: `selectWalletBtn ${dO.toString()}`,
                                    className: "btnStyle",
                                    key: dk,
                                    disabled: true,
                                    themeColor: `rgba(${dm.r}, ${dm.g}, ${dm.b}, ${(dm.a / 255) * 0.2})`,
                                },
                                K.createElement(T3, null, dU)
                            );
                        };
                        dw.prototype.Rn = function (df, dO) {
                            return K.createElement(
                                yo,
                                {
                                    id: `selectWalletBtn ${dO.toString()}`,
                                    className: "btnStyle",
                                    onClick: this.Cn.bind(this, df, dO),
                                    themeColor: IC.gameThemeColor,
                                },
                                K.createElement(T3, null, TK.t("BonusWallet.SelectWallet"))
                            );
                        };
                        dw.prototype.Ln = function (df, dO) {
                            this.vn.push(dO);
                            return K.createElement(
                                yj,
                                null,
                                K.createElement(
                                    yF,
                                    {
                                        id: `selectWalletBtn ${dO.toString()}`,
                                        className: "btnStyle",
                                        onClick: this.props.onSelectWalletClick.bind(this, df, dO),
                                    },
                                    K.createElement(T3, null, TK.t("BonusWallet.WalletLocked"))
                                ),
                                K.createElement(yZ, {
                                    orientation: shell.environment.getOrientationMode(),
                                    themeColor: IC.gameThemeColor,
                                }),
                                K.createElement(yu, {
                                    className: "wallet-plugin-sprite wallet-plugin-ic_warning_overlay",
                                    onClick: this.props.onSelectWalletClick.bind(this, df, dO),
                                    orientation: shell.environment.getOrientationMode(),
                                })
                            );
                        };
                        dw.prototype.Dn = function (df, dO) {
                            var dk = dO.key;
                            var dU = dO.rollOverMode;
                            var dp = IC.transactionInfo;
                            var dm = IC.gameThemeColor;
                            if (dp.wk === dk || !dk) {
                                var dR = document.getElementById(`selectWalletBtn ${df.toString()}`);
                                if (dU === 2 && !dk) {
                                    dR.children[0].innerHTML = TK.t("BonusWallet.SelectWallet");
                                    dR.disabled = false;
                                    dR.onclick = this.Cn.bind(this, dO, df);
                                    dR.style.backgroundColor = dm;
                                    return;
                                }
                                var da = document.getElementById(`cash ${df.toString()}`);
                                var dB = da.defaultChecked
                                    ? da.checked
                                        ? TK.t("BonusWallet.WalletInuse")
                                        : TK.t("BonusWallet.SwapMode")
                                    : da.checked
                                    ? TK.t("BonusWallet.SwapMode")
                                    : TK.t("BonusWallet.WalletInuse");
                                var dq = shell.uiAppearance.v("game.theme_color");
                                dR.disabled = da.defaultChecked ? da.checked : !da.checked;
                                dR.onclick = dR.disabled ? null : this.Cn.bind(this, dO, df);
                                dR.style.backgroundColor = dR.disabled ? `rgba(${dq.r}, ${dq.g}, ${dq.b}, ${(dq.a / 255) * 0.2})` : dm;
                                dR.children[0].innerHTML = dB;
                            }
                        };
                        dw.prototype.jn = function (df) {
                            var dO = document.getElementById(`cash check mark ${df.toString()}`);
                            var dk = document.getElementById(`bonus check mark ${df.toString()}`);
                            dO.style.display = "block";
                            dk.style.display = "none";
                        };
                        dw.prototype.Mn = function (df) {
                            var dO = document.getElementById(`cash check mark ${df.toString()}`);
                            var dk = document.getElementById(`bonus check mark ${df.toString()}`);
                            dO.style.display = "none";
                            dk.style.display = "block";
                        };
                        dw.prototype.Fn = function () {
                            if (this.wn) {
                                this.wn = false;
                                return "";
                            } else if (this.On > 1) {
                                return TK.t("BonusWallet.LoadMoreData");
                            } else {
                                return TK.t("BonusWallet.AllRecordDisplayed");
                            }
                        };
                        return dw;
                    })(K.Component);
                    var TA = (function () {
                        function db(dw) {
                            this.J = dw.k;
                            this.En = dw.fgid;
                            this.Un = dw.n;
                            this.q = dw.gids;
                            this.Pn = dw.gc;
                            this.Vn = dw.tg;
                            this.K = dw.ba;
                            this.Hn = dw.m;
                            this.Zn = dw.cs;
                            this.en = dw.ed;
                            this.M = dw.s;
                            this.Jn = dw.ct;
                            this.nn = dw.mca;
                            this.an = dw.ca;
                            this.Xn = dw.ck;
                            this.ln = dw.gidl;
                            this.Yn = dw.cgid;
                            this.hn = dw.baid;
                            this.dn = dw.isd;
                        }
                        Object.defineProperty(db.prototype, "key", {
                            get: function () {
                                return this.J;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "freeGameID", {
                            get: function () {
                                return this.En;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "freeGameName", {
                            get: function () {
                                return this.Un;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "gameIDs", {
                            get: function () {
                                return this.q;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "gameCount", {
                            get: function () {
                                return this.Pn;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "totalGame", {
                            get: function () {
                                return this.Vn;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "balanceAmount", {
                            get: function () {
                                if (!this.K) {
                                    this.K = 0;
                                }
                                return this.K;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "multiplier", {
                            get: function () {
                                return this.Hn;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "coinSize", {
                            get: function () {
                                return this.Zn;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "expiredDate", {
                            get: function () {
                                var dw = new Date(this.en);
                                return dw.getFullYear() + "/" + IY(dw.getMonth() + 1) + "/" + IY(dw.getDate());
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "status", {
                            get: function () {
                                return this.M;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "conversionType", {
                            get: function () {
                                return this.Jn;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "maximumConversionAmount", {
                            get: function () {
                                if (!this.nn) {
                                    this.nn = 0;
                                }
                                return this.nn;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "conversionAmount", {
                            get: function () {
                                if (!this.an) {
                                    this.an = 0;
                                }
                                return this.an;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "conversionKey", {
                            get: function () {
                                return this.Xn;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "lockedGameID", {
                            get: function () {
                                return this.ln;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "convertedID", {
                            get: function () {
                                return this.Yn;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "balanceID", {
                            get: function () {
                                return this.hn;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "expiredTime", {
                            get: function () {
                                var dw = new Date(this.en);
                                return IY(dw.getHours()) + ":" + IY(dw.getMinutes()) + ":" + IY(dw.getSeconds());
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(db.prototype, "isHideDiscard", {
                            get: function () {
                                return this.dn;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        return db;
                    })();
                    var Ts = I7.formatCurrency;
                    var Tx = shell.I18n;
                    var Tc = (function (db) {
                        function dw(df) {
                            var dO = db.call(this, df) || this;
                            dO.mn = [];
                            dO.gn = false;
                            dO.bn = 1;
                            dO.qn = [];
                            dO.xn = false;
                            dO.wn = false;
                            dO.yn = function (dk, dU) {
                                for (var dp = document.getElementsByClassName("btnStyle"), dm = 0, dR = dp.length; dm < dR; dm++) {
                                    dp[dm].blur();
                                }
                                df.onDiscardOfferClick(dk, dU);
                            };
                            dO.state = {
                                scrollFreeze: false,
                            };
                            return dO;
                        }
                        I0(dw, db);
                        dw.prototype.componentDidMount = function () {
                            var df = IG.context.event;
                            df.on("Shell.Scaled", this.kn, this);
                            df.emit("Game.FreeGameListOpened");
                            this.Bn();
                            this.Qn();
                            document.addEventListener("keydown", this.Gn);
                        };
                        dw.prototype.componentDidUpdate = function () {
                            this.Bn();
                            this.Qn();
                        };
                        dw.prototype.componentWillUnmount = function () {
                            IG.context.event.off("Shell.Scaled", this.kn, this);
                            document.removeEventListener("keydown", this.Gn);
                        };
                        dw.prototype.shouldComponentUpdate = function (df) {
                            return this.props.show === df.show && ((this.xn = this.props.data === df.data), true);
                        };
                        dw.prototype.render = function () {
                            return K.createElement(
                                yL,
                                {
                                    id: "bwfgContainer",
                                    className: "wallet",
                                },
                                this.V(),
                                this.H()
                            );
                        };
                        dw.prototype.Gn = function (df) {
                            if (!(df.key !== " " && df.key !== "Spacebar")) {
                                df.preventDefault();
                            }
                        };
                        dw.prototype.kn = function (df) {
                            var dO = df.payload;
                            var dk = document.getElementById("scrollView");
                            var dU = parseFloat(M.getComputedStyle(document.getElementById("headerWrapper")).height);
                            if (dk) {
                                dk.style.maxHeight = `${dO.height - dU}px`;
                            }
                        };
                        dw.prototype.Bn = function () {
                            for (var df = this.mn, dO = 0, dk = df.length; dO < dk; dO++) {
                                var dU = df[dO].key;
                                if (dU && IC.transactionInfo.wk === dU) {
                                    var dp = document.getElementById(`currWalletSideBar ${dO.toString()}`);
                                    var dm = document.getElementById(`bwfgView ${dO.toString()}`);
                                    dp.style.height = `${dm.clientHeight.toString()}px`;
                                }
                            }
                        };
                        dw.prototype.Qn = function () {
                            var df = IC.gameThemeColor;
                            this.qn.forEach(function (dO) {
                                document.getElementById(`selectFreeGameBtn ${dO.toString()}`).style.backgroundColor = df;
                            });
                        };
                        dw.prototype.V = function () {
                            var df = IC.status;
                            if (!this.props.error && this.props.data && this.props.data.dt.r) {
                                for (var dO = 0, dk = this.props.data.dt.r.length; dO < dk; dO++) {
                                    if (this.props.data.dt.r[dO].s === 6 && IC.transactionInfo.wk === this.props.data.dt.r[dO].k) {
                                        this.gn = true;
                                        break;
                                    }
                                }
                            }
                            return K.createElement(
                                yg,
                                {
                                    id: "headerWrapper",
                                },
                                K.createElement(
                                    yH,
                                    {
                                        id: "bwfgHeader",
                                        orientation: shell.environment.getOrientationMode(),
                                        themeColor: IC.gameThemeColor,
                                    },
                                    Tx.t("FreeGame.FreeGame")
                                ),
                                K.createElement(TJ, {
                                    className: "wallet-plugin-sprite wallet-plugin-ic_close",
                                    onClick: df === 4 || df === 3 || df === 2 || this.gn ? this.props.onBackCashWalletClick : this.props.onCloseButtonClick,
                                    orientation: shell.environment.getOrientationMode(),
                                })
                            );
                        };
                        dw.prototype.H = function () {
                            var df = this;
                            if (this.props.error) {
                                this.bn = 1;
                                this.mn = [];
                                return K.createElement(
                                    yV,
                                    null,
                                    K.createElement(
                                        yC,
                                        null,
                                        K.createElement(yW, null, K.createElement(T3, null, this.props.error.message)),
                                        this.props.error.shouldRetry &&
                                            K.createElement(
                                                yz,
                                                {
                                                    onClick: this.props.onRetryClick,
                                                    themeColor: IC.gameThemeColor,
                                                },
                                                Tx.t("General.DialogRetry")
                                            )
                                    )
                                );
                            }
                            if (this.props.data) {
                                this.gn = false;
                                this.qn = [];
                                var dO = parseFloat(document.getElementById("wallet-container").style.height);
                                var dk = this.props.data.dt;
                                var dU = JSON.parse(JSON.stringify(dk.r));
                                var dp = dk.tp;
                                this.On = this.bn > 1 ? this.On : dp;
                                this.mn = this.bn > 1 ? this.mn : [];
                                if (dU && dU.length > 0) {
                                    if (!this.xn) {
                                        for (var dm = 0, dR = dU.length; dm < dR; dm++) {
                                            var da = dU[dm];
                                            if (da.k === IC.transactionInfo.wk) {
                                                this.mn.push(new TA(da));
                                                dU.splice(dm, 1);
                                                break;
                                            }
                                        }
                                        if (dU.length > 0) {
                                            dU.forEach(function (dq) {
                                                df.mn.push(new TA(dq));
                                            });
                                        }
                                    }
                                    var dB = this.mn.map(function (dq, dE) {
                                        var dj = dq.freeGameName;
                                        var dF = dq.freeGameID;
                                        var dZ = dq.expiredDate;
                                        var du = dq.expiredTime;
                                        var M0 = dq.coinSize;
                                        var M1 = dq.multiplier;
                                        var M2 = dq.key;
                                        var M3 = dq.status;
                                        var M4 = IC.gameRawInfo;
                                        var M5 = IC.transactionInfo;
                                        var M6 = Ts(M0 * M1 * M4.dt.mxl);
                                        var M7 = df.Z(dq, dE);
                                        return K.createElement(
                                            yP,
                                            {
                                                key: dE,
                                            },
                                            M2 &&
                                                M5.wk === M2 &&
                                                K.createElement(yq, {
                                                    id: `currWalletSideBar ${dE.toString()}`,
                                                    themeColor: IC.gameThemeColor,
                                                }),
                                            K.createElement(
                                                yD,
                                                {
                                                    id: `bwfgView ${dE.toString()}`,
                                                    key: dE,
                                                },
                                                K.createElement(
                                                    yh,
                                                    null,
                                                    K.createElement(
                                                        yw,
                                                        null,
                                                        K.createElement(
                                                            "div",
                                                            {
                                                                className: "resizableTxtContainer",
                                                            },
                                                            M3 === 5 &&
                                                                K.createElement(yB, {
                                                                    className: "wallet-plugin-sprite wallet-plugin-ic_wallet_new",
                                                                    orientation: shell.environment.getOrientationMode(),
                                                                }),
                                                            K.createElement(
                                                                T3,
                                                                {
                                                                    className: "resizableTxt",
                                                                },
                                                                dj
                                                            )
                                                        ),
                                                        K.createElement(
                                                            yU,
                                                            {
                                                                className: "resizableTxtContainer",
                                                            },
                                                            K.createElement(
                                                                T3,
                                                                {
                                                                    className: "resizableTxt",
                                                                },
                                                                Tx.t("FreeGame.Offer", {
                                                                    id: dF.toString(),
                                                                })
                                                            )
                                                        )
                                                    ),
                                                    K.createElement(
                                                        yf,
                                                        null,
                                                        K.createElement(
                                                            yp,
                                                            {
                                                                className: "resizableTxtContainer",
                                                                themeColor: IC.gameThemeColor,
                                                            },
                                                            K.createElement(
                                                                T3,
                                                                {
                                                                    className: "resizableTxt",
                                                                },
                                                                M7.remainingInfo
                                                            )
                                                        ),
                                                        M7.totalWonContent,
                                                        M7.withdrawLimitContent
                                                    )
                                                ),
                                                K.createElement(
                                                    yb,
                                                    null,
                                                    K.createElement(
                                                        yO,
                                                        null,
                                                        K.createElement(
                                                            "div",
                                                            {
                                                                className: "resizableTxtContainer",
                                                            },
                                                            K.createElement(
                                                                T3,
                                                                {
                                                                    className: "resizableTxt",
                                                                },
                                                                dZ,
                                                                " ",
                                                                du
                                                            )
                                                        ),
                                                        K.createElement(
                                                            ym,
                                                            {
                                                                className: "resizableTxtContainer",
                                                            },
                                                            K.createElement(
                                                                TX,
                                                                {
                                                                    className: "resizableTxt",
                                                                },
                                                                Tx.t("FreeGame.ExpiryDate")
                                                            )
                                                        )
                                                    ),
                                                    K.createElement(
                                                        yk,
                                                        null,
                                                        K.createElement(
                                                            "div",
                                                            {
                                                                className: "resizableTxtContainer",
                                                            },
                                                            K.createElement(
                                                                T3,
                                                                {
                                                                    className: "resizableTxt",
                                                                },
                                                                M6
                                                            )
                                                        ),
                                                        K.createElement(
                                                            ym,
                                                            {
                                                                className: "resizableTxtContainer",
                                                            },
                                                            K.createElement(
                                                                TX,
                                                                {
                                                                    className: "resizableTxt",
                                                                },
                                                                Tx.t("FreeGame.SingleBet")
                                                            )
                                                        )
                                                    )
                                                ),
                                                K.createElement(T2, null, M7.discardOfferBtnContent, M7.selectFreeGameBtnContent)
                                            )
                                        );
                                    });
                                    return K.createElement(
                                        Ty,
                                        {
                                            orientation: shell.environment.getOrientationMode(),
                                        },
                                        K.createElement(
                                            Jz,
                                            {
                                                handleClass: "background-color: rgba(117, 117, 117, 0.7);",
                                                freezePosition: this.state.scrollFreeze,
                                                onScroll: function (dq) {
                                                    var dE = dq.target;
                                                    if (df.On > 1 && dE.clientHeight + dE.scrollTop === dE.scrollHeight) {
                                                        df.On--;
                                                        df.bn++;
                                                        df.props.onLoadMoreRequestApi(df.bn, function () {
                                                            df.setState({
                                                                scrollFreeze: false,
                                                            });
                                                        });
                                                        df.wn = true;
                                                        df.setState({
                                                            scrollFreeze: true,
                                                        });
                                                    }
                                                },
                                                rtl: IG.isRTL,
                                            },
                                            K.createElement(
                                                TT,
                                                {
                                                    id: "scrollView",
                                                    orientation: shell.environment.getOrientationMode(),
                                                    currHeight: dO,
                                                },
                                                dB,
                                                K.createElement(
                                                    yE,
                                                    {
                                                        id: "loadMore",
                                                        key: this.bn,
                                                    },
                                                    K.createElement(T3, null, this.Fn())
                                                )
                                            )
                                        )
                                    );
                                }
                                return K.createElement(yV, null, K.createElement(yC, null, K.createElement(yW, null, Tx.t("FreeGame.NoOfferFound"))));
                            }
                        };
                        dw.prototype.Z = function (df, dO) {
                            var dk = df.status;
                            var dU = df.balanceAmount;
                            var dp = df.maximumConversionAmount;
                            var dm = df.gameCount;
                            var dR = df.totalGame;
                            var da = df.key;
                            var dB = IC.transactionInfo;
                            switch (dk) {
                                case 2:
                                    return {
                                        remainingInfo: Tx.t("FreeGame.Expired"),
                                        totalWonContent: null,
                                        withdrawLimitContent: null,
                                        discardOfferBtnContent: this.Nn(df, true),
                                        selectFreeGameBtnContent: this.Kn(false, dm === dR),
                                    };
                                case 6:
                                    return {
                                        remainingInfo: Tx.t("FreeGame.DiscardWallet"),
                                        totalWonContent: null,
                                        withdrawLimitContent: null,
                                        discardOfferBtnContent: this.zn(df),
                                        selectFreeGameBtnContent: this.Kn(false, dm === dR),
                                    };
                                case 7:
                                    return {
                                        remainingInfo:
                                            dm === dR
                                                ? Tx.t("FreeGame.FreeGameTotal", {
                                                      gameCount: dm.toString(),
                                                  })
                                                : Tx.t("FreeGame.FreeGameRemaining", {
                                                      gameCount: dm.toString(),
                                                  }),
                                        totalWonContent: null,
                                        withdrawLimitContent: this.An(dp),
                                        discardOfferBtnContent: this.Nn(df, false),
                                        selectFreeGameBtnContent: this.$n(df, dO),
                                    };
                                case 1:
                                    var dq = Ts(dU);
                                    return {
                                        remainingInfo: Tx.t("FreeGame.FreeGameRemaining", {
                                            gameCount: dm.toString(),
                                        }),
                                        totalWonContent: K.createElement(
                                            "div",
                                            {
                                                className: "resizableTxtContainer",
                                            },
                                            K.createElement(
                                                T4,
                                                {
                                                    className: "resizableTxt",
                                                },
                                                Tx.t("FreeGame.CurrentWin", {
                                                    amount: dq,
                                                })
                                            )
                                        ),
                                        withdrawLimitContent: this.An(dp),
                                        discardOfferBtnContent: this.Nn(df, false),
                                        selectFreeGameBtnContent: dB.wk === da ? this.Kn(true) : this.nt(df, dO),
                                    };
                                default:
                                    return {
                                        remainingInfo: Tx.t("FreeGame.FreeGameTotal", {
                                            gameCount: dm.toString(),
                                        }),
                                        totalWonContent: null,
                                        withdrawLimitContent: this.An(dp),
                                        discardOfferBtnContent: this.Nn(df, false),
                                        selectFreeGameBtnContent: dB.wk === da ? this.Kn(true) : this.nt(df, dO),
                                    };
                            }
                        };
                        dw.prototype.An = function (df) {
                            var dO = Ts(df);
                            return (
                                df > 0 &&
                                K.createElement(
                                    "div",
                                    {
                                        className: "resizableTxtContainer",
                                    },
                                    K.createElement(
                                        T4,
                                        {
                                            className: "resizableTxt",
                                        },
                                        Tx.t("FreeGame.MaximumConversionRate", {
                                            rate: dO,
                                        })
                                    )
                                )
                            );
                        };
                        dw.prototype.zn = function (df) {
                            if (df.status !== 2 && df.isHideDiscard) {
                                return null;
                            } else {
                                return K.createElement(
                                    yR,
                                    {
                                        className: "btnStyle",
                                        disabled: true,
                                    },
                                    K.createElement(T3, null, Tx.t("FreeGame.DiscardGame"))
                                );
                            }
                        };
                        dw.prototype.Nn = function (df, dO) {
                            if (df.status !== 2 && df.isHideDiscard) {
                                return null;
                            } else {
                                return K.createElement(
                                    yR,
                                    {
                                        className: "btnStyle",
                                        onClick: this.yn.bind(this, df, dO),
                                    },
                                    K.createElement(T3, null, Tx.t("FreeGame.DiscardGame"))
                                );
                            }
                        };
                        dw.prototype.Kn = function (df, dO) {
                            var dk = df ? Tx.t("FreeGame.GameInUse") : dO ? Tx.t("FreeGame.PlayGameNow") : Tx.t("FreeGame.ContinueGame");
                            var dU = shell.uiAppearance.v("game.theme_color");
                            return K.createElement(
                                ya,
                                {
                                    className: "btnStyle",
                                    disabled: true,
                                    themeColor: `rgba(${dU.r}, ${dU.g}, ${dU.b}, ${(dU.a / 255) * 0.2})`,
                                },
                                K.createElement(T3, null, dk)
                            );
                        };
                        dw.prototype.nt = function (df, dO) {
                            var dk = this;
                            var dU = df.gameCount === df.totalGame ? Tx.t("FreeGame.PlayGameNow") : Tx.t("FreeGame.ContinueGame");
                            return K.createElement(
                                yo,
                                {
                                    id: `selectFreeGameBtn ${dO.toString()}`,
                                    className: "btnStyle",
                                    onClick: function () {
                                        document.getElementById(`selectFreeGameBtn ${dO.toString()}`).blur();
                                        dk.props.onSelectFreeGameClick(df);
                                    },
                                    themeColor: IC.gameThemeColor,
                                },
                                K.createElement(T3, null, dU)
                            );
                        };
                        dw.prototype.$n = function (df, dO) {
                            this.qn.push(dO);
                            return K.createElement(
                                yj,
                                null,
                                K.createElement(
                                    yF,
                                    {
                                        id: `selectFreeGameBtn ${dO.toString()}`,
                                        className: "btnStyle",
                                        onClick: this.props.onSelectFreeGameClick.bind(this, df),
                                    },
                                    K.createElement(T3, null, Tx.t("FreeGame.WalletLocked"))
                                ),
                                K.createElement(yZ, {
                                    orientation: shell.environment.getOrientationMode(),
                                    themeColor: IC.gameThemeColor,
                                }),
                                K.createElement(yu, {
                                    className: "wallet-plugin-sprite wallet-plugin-ic_warning_overlay",
                                    onClick: this.props.onSelectFreeGameClick.bind(this, df),
                                    orientation: shell.environment.getOrientationMode(),
                                })
                            );
                        };
                        dw.prototype.Fn = function () {
                            if (this.wn) {
                                this.wn = false;
                                return "";
                            } else if (this.On > 1) {
                                return Tx.t("FreeGame.LoadMoreData");
                            } else {
                                return Tx.t("FreeGame.AllRecordDisplayed");
                            }
                        };
                        return dw;
                    })(K.Component);
                    var Tv = {};
                    var TN = {};
                    var TQ = (function () {
                        function db() {}
                        db.prototype.parsePlistData = function (dw, df) {
                            var dO = this;
                            var dk = new plugin.Loader();
                            dk.load([
                                {
                                    src: dw,
                                    type: plugin.LoadType.Text,
                                },
                            ]);
                            dk.onLoad = function (dU) {
                                var dp = new DOMParser().parseFromString(dU.response.toString(), "text/xml");
                                var dm = dO.tt(dp.documentElement);
                                if (df) {
                                    df(dm);
                                }
                            };
                            dk.onError = function () {};
                        };
                        db.prototype.et = function (dw) {
                            return !dw.childNodes || dw.childNodes.length === 0;
                        };
                        db.prototype.it = function (dw, df) {
                            if (!dw) {
                                throw Error(df);
                            }
                        };
                        db.prototype.rt = function (dw) {
                            return dw.nodeType === 3 || dw.nodeType === 8 || dw.nodeType === 4;
                        };
                        db.prototype.tt = function (dw) {
                            var df;
                            var dO;
                            var dk;
                            var dU;
                            var dp;
                            var dm;
                            if (!dw) {
                                return null;
                            }
                            if (dw.nodeName === "plist") {
                                dU = [];
                                if (this.et(dw)) {
                                    return dU;
                                }
                                for (df = 0; df < dw.childNodes.length; df++) {
                                    if (!this.rt(dw.childNodes[df])) {
                                        dU.push(this.tt(dw.childNodes[df]));
                                    }
                                }
                                return dU;
                            }
                            if (dw.nodeName === "dict") {
                                dO = {};
                                dk = null;
                                dm = 0;
                                if (this.et(dw)) {
                                    return dO;
                                }
                                for (df = 0; df < dw.childNodes.length; df++) {
                                    if (!this.rt(dw.childNodes[df])) {
                                        if (dm % 2 == 0) {
                                            this.it(dw.childNodes[df].nodeName === "key", "Missing key while parsing <dict/>.");
                                            dk = this.tt(dw.childNodes[df]);
                                        } else {
                                            this.it(
                                                dw.childNodes[df].nodeName !== "key",
                                                'Unexpected key "' + this.tt(dw.childNodes[df]) + '" while parsing <dict/>.'
                                            );
                                            dO[dk] = this.tt(dw.childNodes[df]);
                                        }
                                        dm += 1;
                                    }
                                }
                                if (dm % 2 == 1) {
                                    throw Error('Missing value for "' + dk + '" while parsing <dict/>');
                                }
                                return dO;
                            }
                            if (dw.nodeName === "array") {
                                dU = [];
                                if (this.et(dw)) {
                                    return dU;
                                }
                                for (df = 0; df < dw.childNodes.length; df++) {
                                    if (!this.rt(dw.childNodes[df])) {
                                        if ((dp = this.tt(dw.childNodes[df])) !== null) {
                                            dU.push(dp);
                                        }
                                    }
                                }
                                return dU;
                            }
                            if (dw.nodeName === "#text");
                            else {
                                if (dw.nodeName === "key") {
                                    if (this.et(dw)) {
                                        return "";
                                    } else {
                                        return dw.childNodes[0].nodeValue;
                                    }
                                }
                                if (dw.nodeName === "string") {
                                    dp = "";
                                    if (this.et(dw)) {
                                        return dp;
                                    }
                                    for (df = 0; df < dw.childNodes.length; df++) {
                                        var dR = dw.childNodes[df].nodeType;
                                        if (!(dR !== 3 && dR !== 4)) {
                                            dp += dw.childNodes[df].nodeValue;
                                        }
                                    }
                                    return dp;
                                }
                                if (dw.nodeName === "integer") {
                                    this.it(!this.et(dw), 'Cannot parse "" as integer.');
                                    return parseInt(dw.childNodes[0].nodeValue, 10);
                                }
                                if (dw.nodeName === "real") {
                                    this.it(!this.et(dw), 'Cannot parse "" as real.');
                                    dp = "";
                                    df = 0;
                                    for (; df < dw.childNodes.length; df++) {
                                        if (dw.childNodes[df].nodeType === 3) {
                                            dp += dw.childNodes[df].nodeValue;
                                        }
                                    }
                                    return parseFloat(dp);
                                }
                                if (dw.nodeName === "date") {
                                    this.it(!this.et(dw), 'Cannot parse "" as Date.');
                                    return new Date(dw.childNodes[0].nodeValue);
                                }
                                if (dw.nodeName === "true") {
                                    return true;
                                }
                                if (dw.nodeName === "false") {
                                    return false;
                                }
                            }
                        };
                        return db;
                    })();
                    var TG = new TQ();
                    function TL(db, dw, df) {
                        if (dw === undefined) {
                            dw = {
                                x: 0,
                                y: 0,
                                width: 0,
                                height: 0,
                                isRotate: false,
                            };
                        }
                        return new Promise(function (dO, dk) {
                            var dU = new plugin.Loader();
                            dU.onLoad = function (dp) {
                                var dm = document.createElement("canvas");
                                var dR = dm.getContext("2d");
                                if (dR !== null) {
                                    var da = new Image();
                                    da.onload = function () {
                                        URL.revokeObjectURL(da.src);
                                        var dB = dw.width === 0 ? da.width : dw.width;
                                        var dq = dw.height === 0 ? da.height : dw.height;
                                        dm.width = dB;
                                        dm.height = dq;
                                        dR.clearRect(0, 0, dB, dq);
                                        dR.translate(dB / 2, dq / 2);
                                        if (dw.isRotate) {
                                            dR.rotate((Math.PI * 270) / 180);
                                            dR.drawImage(da, dw.x, dw.y, dq, dB, -dq / 2, -dB / 2, dq, dB);
                                        } else {
                                            dR.drawImage(da, dw.x, dw.y, dB, dq, -dB / 2, -dq / 2, dB, dq);
                                        }
                                        var dE = dR.getImageData(0, 0, dB, dq);
                                        var dj = dE.data;
                                        if (df) {
                                            for (var dF = 0, dZ = dj.length; dF < dZ; dF += 4) {
                                                dj[dF] = df.r;
                                                dj[dF + 1] = df.g;
                                                dj[dF + 2] = df.b;
                                            }
                                        }
                                        dR.putImageData(dE, 0, 0);
                                        dO(dm.toDataURL());
                                    };
                                    da.onerror = function () {
                                        dk(Error("ImageBase64 load image failed"));
                                    };
                                    da.src = URL.createObjectURL(dp.response);
                                }
                            };
                            dU.onError = function (dp) {
                                dk(dp);
                            };
                            dU.load([
                                {
                                    src: db,
                                    type: plugin.LoadType.Blob,
                                },
                            ]);
                        });
                    }
                    function Tg(db, dw) {
                        var df = [];
                        db.forEach(function (dO) {
                            df.push(
                                TL(
                                    dO.resolvePath,
                                    {
                                        x: 0,
                                        y: 0,
                                        width: 0,
                                        height: 0,
                                    },
                                    dO.colour
                                )
                            );
                        });
                        Promise.all(df)
                            .then(function (dO) {
                                var dk = [];
                                dO.forEach(function (dU) {
                                    dk.push(dU);
                                });
                                if (dw) {
                                    dw(dk, undefined);
                                }
                            })
                            .catch(function (dO) {
                                if (dw) {
                                    dw(undefined, dO);
                                }
                            });
                    }
                    var TH = {};
                    function TV(db, dw, df) {
                        var dO;
                        var dk = this;
                        var dU = db.src;
                        var dp = "unknown";
                        dp = dU.indexOf(".css") !== -1 ? "css" : dp;
                        dp = (dO = dU).indexOf(".jpg") !== -1 || dO.indexOf(".png") !== -1 ? "image" : dp;
                        var dm = shell.Error;
                        var dR = shell.ClientError;
                        var da = dm && new dm(dR.Domain, dR.GameLoadResourceError);
                        var dB = dw.resource.resolveUrl(dU);
                        return new Promise(function (dq, dE) {
                            return __awaiter(dk, undefined, undefined, function () {
                                var dj;
                                return __generator(this, function (dF) {
                                    switch (dF.label) {
                                        case 0:
                                            dF.trys.push([0, 9, , 10]);
                                            if (dp !== "image") {
                                                return [3, 5];
                                            } else if (db.tint) {
                                                return [
                                                    4,
                                                    TD([
                                                        {
                                                            resolvePath: dB,
                                                            colour: db.tint,
                                                        },
                                                    ]),
                                                ];
                                            } else {
                                                return [3, 2];
                                            }
                                        case 1:
                                            dj = dF.sent();
                                            dq(dj[0]);
                                            return [3, 4];
                                        case 2:
                                            return [4, Tb(dB, df)];
                                        case 3:
                                            dj = dF.sent();
                                            dq(dj);
                                            dF.label = 4;
                                        case 4:
                                            return [3, 8];
                                        case 5:
                                            if (dp !== "css") {
                                                return [3, 7];
                                            } else {
                                                return [4, Tw(dB, dw, df)];
                                            }
                                        case 6:
                                            dj = dF.sent();
                                            dq(dj);
                                            return [3, 8];
                                        case 7:
                                            dE(da);
                                            dF.label = 8;
                                        case 8:
                                            return [3, 10];
                                        case 9:
                                            dF.sent();
                                            dE(da);
                                            return [3, 10];
                                        case 10:
                                            return [2];
                                    }
                                });
                            });
                        });
                    }
                    function TC(db, dw, df) {
                        return __awaiter(this, undefined, undefined, function () {
                            var dO;
                            var dk;
                            return __generator(this, function (dU) {
                                switch (dU.label) {
                                    case 0:
                                        if (db.cssFile.endsWith(".css")) {
                                            return [
                                                4,
                                                TV(
                                                    {
                                                        src: db.cssFile,
                                                    },
                                                    dw,
                                                    df
                                                ),
                                            ];
                                        } else {
                                            return [3, 2];
                                        }
                                    case 1:
                                        dO = dU.sent();
                                        return [3, 3];
                                    case 2:
                                        dO = db.cssFile;
                                        dU.label = 3;
                                    case 3:
                                        if (db.tint) {
                                            return [
                                                4,
                                                TV(
                                                    {
                                                        src: db.imageFile,
                                                        tint: db.tint,
                                                    },
                                                    dw,
                                                    df
                                                ),
                                            ];
                                        } else {
                                            return [3, 6];
                                        }
                                    case 4:
                                        dk = dU.sent();
                                        return [4, TW(dO, dw, dk, true, df)];
                                    case 5:
                                        dO = dU.sent();
                                        return [3, 8];
                                    case 6:
                                        return [4, TW(dO, dw, db.imageFile, false, df)];
                                    case 7:
                                        dO = dU.sent();
                                        dU.label = 8;
                                    case 8:
                                        if (db.appendHeader) {
                                            Th(dO, dw);
                                        }
                                        return [2, dO];
                                }
                            });
                        });
                    }
                    function TW(db, dw, df, dO, dk) {
                        if (dO === undefined) {
                            dO = false;
                        }
                        return new Promise(function (dU, dp) {
                            if (dO) {
                                db = db.replace(/url\((.*?)\)/g, function () {
                                    return "url(" + df + ")";
                                });
                                dU(db);
                            } else {
                                Tz(dw.resource.resolveUrl(df), dk)
                                    .then(function (dm) {
                                        db = db.replace(/url\((.*?)\)/g, function () {
                                            return "url(" + URL.createObjectURL(dm) + ")";
                                        });
                                        dU(db);
                                    })
                                    .catch(dp);
                            }
                        });
                    }
                    function Tz(db, dw) {
                        var df = this;
                        var dO = shell.Error;
                        var dk = shell.ClientError;
                        var dU = dO && new dO(dk.Domain, dk.GameLoadResourceError);
                        return new Promise(function (dp, dm) {
                            return __awaiter(df, undefined, undefined, function () {
                                var dR;
                                return __generator(this, function (da) {
                                    switch (da.label) {
                                        case 0:
                                            da.trys.push([0, 2, , 3]);
                                            return [4, Tf(db, dw)];
                                        case 1:
                                            dR = da.sent();
                                            dp(dR);
                                            return [3, 3];
                                        case 2:
                                            da.sent();
                                            dm(dU);
                                            return [3, 3];
                                        case 3:
                                            return [2];
                                    }
                                });
                            });
                        });
                    }
                    function TP(db, dw) {
                        return db.replace(/url\((.*?)\)/g, function (df, dO) {
                            return "url(" + dw.resource.resolveUrl(dO) + ")";
                        });
                    }
                    function TD(db) {
                        return new Promise(function (dw, df) {
                            Tg(db, function (dO, dk) {
                                if (dk || (dO && dO.length === 0)) {
                                    var dU = shell.Error;
                                    var dp = shell.ClientError;
                                    var dm = dU && new dU(dp.Domain, dp.GameLoadResourceError);
                                    df(dk || dm);
                                }
                                dw(dO);
                            });
                        });
                    }
                    function Th(db, dw) {
                        var df = [];
                        var dO = dw.bundleInfo.name;
                        if (!TH[dO]) {
                            TH[dO] = [];
                        }
                        if (!Array.isArray(db)) {
                            db = [db];
                        }
                        var dk = TH[dO].length + 1;
                        db.forEach(function (dU, dp) {
                            var dm = dk + dp;
                            var dR = "$CSS-" + dw.bundleInfo.name + "-" + dm;
                            df.push(dR);
                            (function (da, dB, dq) {
                                if (TH[dB].indexOf(da) === -1) {
                                    var dE = document.createElement("style");
                                    dE.id = da;
                                    dE.innerHTML = dq;
                                    document.head.appendChild(dE);
                                    TH[dB].push(da);
                                }
                            })(dR, dw.bundleInfo.name, dU);
                        });
                        return df;
                    }
                    function Tb(db, dw) {
                        var df = new plugin.Loader();
                        return new Promise(function (dO, dk) {
                            df.onLoad = function (dU) {
                                dO(dU.response);
                            };
                            df.onError = function (dU) {
                                dk(dU);
                            };
                            df.load([
                                {
                                    src: db,
                                    type: plugin.LoadType.Image,
                                    maxAttemptCount: dw,
                                },
                            ]);
                        });
                    }
                    function Tw(db, dw, df) {
                        var dO = new plugin.Loader();
                        return new Promise(function (dk, dU) {
                            dO.onLoad = function (dp) {
                                var dm = TP(dp.response, dw);
                                dk(dm);
                            };
                            dO.onError = function (dp) {
                                dU(dp);
                            };
                            dO.load([
                                {
                                    src: db,
                                    type: plugin.LoadType.Text,
                                    maxAttemptCount: df,
                                },
                            ]);
                        });
                    }
                    function Tf(db, dw) {
                        var df = new plugin.Loader();
                        return new Promise(function (dO, dk) {
                            df.onLoad = function (dU) {
                                dO(dU.response);
                            };
                            df.onError = function (dU) {
                                dk(dU);
                            };
                            df.load([
                                {
                                    src: db,
                                    type: plugin.LoadType.Blob,
                                    maxAttemptCount: dw,
                                },
                            ]);
                        });
                    }
                    function TO(db, dw) {
                        var df = TH[dw].indexOf(db);
                        if (df !== -1) {
                            var dO = document.getElementById(db);
                            if (dO && dO.parentElement) {
                                dO.remove();
                            }
                            TH[dw].splice(df, 1);
                        }
                    }
                    var Tk = Object.freeze({
                        __proto__: null,
                        appendStyles: Th,
                        getBase64AtlasData: function (db, dw) {
                            var df = [];
                            db.forEach(function (dO, dk) {
                                TG.parsePlistData(dO.plistPath, function (dU) {
                                    var dp = dU[0].frames;
                                    var dm = [];
                                    dO.textureList.forEach(function (dR) {
                                        if (dp[dR] === undefined) {
                                            throw Error("texture :" + dR + " not found in " + dO.plistPath);
                                        }
                                        var da = dp[dR].textureRect;
                                        var dB = dp[dR].textureRotated;
                                        if (da !== undefined) {
                                            var dq = da.match(/\d+/g);
                                            if (dq) {
                                                var dE = dq.map(Number);
                                                dm.push({
                                                    x: dE[0],
                                                    y: dE[1],
                                                    width: dE[2],
                                                    height: dE[3],
                                                    isRotate: dB,
                                                });
                                            }
                                        }
                                    });
                                    dm.forEach(function (dR) {
                                        df.push(TL(dO.resolvePath, dR, dO.colour));
                                    });
                                    if (db.length - 1 === dk) {
                                        Promise.all(df)
                                            .then(function (dR) {
                                                var da = [];
                                                dR.forEach(function (dB) {
                                                    da.push(dB);
                                                });
                                                if (dw) {
                                                    dw(da, undefined);
                                                }
                                            })
                                            .catch(function (dR) {
                                                if (dw) {
                                                    dw(undefined, dR);
                                                }
                                            });
                                    }
                                });
                            });
                        },
                        getBase64ImageData: Tg,
                        loadImageUrlAsBlob: Tz,
                        loadLocale: function (db, dw) {
                            return new Promise(function (df, dO) {
                                var dk = new plugin.Loader();
                                dk.onLoad = function (dU) {
                                    var dp = dU.response;
                                    for (var dm in dp) {
                                        if (dp[dm]) {
                                            shell.I18n.extend(dp[dm], dm);
                                        }
                                    }
                                    df(dp);
                                };
                                dk.onError = function () {
                                    var dU = shell.Error;
                                    var dp = shell.ClientError;
                                    var dm = new dU(dp.Domain, dp.GameLoadResourceError);
                                    dO(dm);
                                };
                                dk.load([
                                    {
                                        src: db,
                                        type: plugin.LoadType.Json,
                                        maxAttemptCount: dw,
                                    },
                                ]);
                            });
                        },
                        loadResource: TV,
                        loadSpriteSheet: TC,
                        removeStyles: function (db, dw) {
                            if (!Array.isArray(db)) {
                                db = [db];
                            }
                            db.forEach(function (df) {
                                TO(df, dw.bundleInfo.name);
                            });
                        },
                        resolveCSS: TP,
                        resolveCSSWithImage: function (db, dw, df) {
                            var dO = df ? df.resource.resolveUrl(dw) : dw;
                            return db.replace(/url\((.*?)\)/g, function () {
                                return "url(" + dO + ")";
                            });
                        },
                        tintImage: TD,
                        unloadAllBundleStyles: function (db) {
                            var dw = db.bundleInfo.name;
                            if (TH[dw]) {
                                TH[dw]
                                    .map(function (df) {
                                        return df;
                                    })
                                    .forEach(function (df) {
                                        TO(df, dw);
                                    });
                                TH[dw].length = 0;
                            }
                        },
                    });
                    var TU = Jv(Tk);
                    Object.defineProperty(TN, "__esModule", {
                        value: true,
                    });
                    TN.Img = undefined;
                    var Tp = __importDefault(K);
                    var Tm = TU;
                    var TR =
                        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEUAAACnej3aAAAAAXRSTlMAQObYZgAAAApJREFUCNdjYAAAAAIAAeIhvDMAAAAASUVORK5CYII=";
                    var To = (function (db) {
                        function dw(df) {
                            var dO = db.call(this, df) || this;
                            dO.ot = true;
                            dO.state = {
                                url: TR,
                                status: "loading",
                            };
                            return dO;
                        }
                        __extends(dw, db);
                        dw.prototype.lt = function () {
                            var df;
                            var dO = this;
                            ((df = this.props.src),
                            new Promise(function (dk, dU) {
                                if (!df) {
                                    dU("Empty url or undefined url passed in");
                                }
                                var dp = df;
                                Tm.loadImageUrlAsBlob(df)
                                    .then(function (dm) {
                                        dp = URL.createObjectURL(dm);
                                        dk(dp);
                                    })
                                    .catch(function (dm) {
                                        dU(dm);
                                    });
                            }))
                                .then(function (dk) {
                                    if (dO.ot) {
                                        dO.setState({
                                            url: dk,
                                            status: "loaded",
                                        });
                                    }
                                })
                                .catch(function (dk) {
                                    if (dO.ot) {
                                        dO.setState({
                                            url: TR,
                                            status: "url failed",
                                        });
                                        if (dO.props.onError) {
                                            dO.props.onError(dk, dO.state.status);
                                        }
                                    }
                                });
                        };
                        dw.prototype.componentDidUpdate = function (df) {
                            if (this.props.src !== df.src) {
                                this.lt();
                            }
                        };
                        dw.prototype.componentDidMount = function () {
                            this.lt();
                        };
                        dw.prototype.componentWillUnmount = function () {
                            this.ot = false;
                        };
                        dw.prototype.st = function (df) {
                            if (this.state.status === "loaded") {
                                URL.revokeObjectURL(this.state.url);
                            }
                            if (this.props.onLoad) {
                                this.props.onLoad(df, "loaded");
                            }
                        };
                        dw.prototype.ut = function (df) {
                            if (this.props.onClick) {
                                this.props.onClick(df);
                            }
                        };
                        dw.prototype.ht = function (df) {
                            if (this.props.onError) {
                                this.props.onError(df, "image failed");
                            }
                        };
                        dw.prototype.render = function () {
                            var df = this.props;
                            var dO = df.forwardedRef;
                            var dk = df.alt;
                            var dU = __rest(df, ["forwardedRef", "alt"]);
                            return Tp.default.createElement(
                                "img",
                                __assign({}, dU, {
                                    src: this.state.url,
                                    alt: dk || "image",
                                    onLoad: this.st.bind(this),
                                    onError: this.ht.bind(this),
                                    onClick: this.ut.bind(this),
                                    ref: dO,
                                })
                            );
                        };
                        return dw;
                    })(Tp.default.Component);
                    function Ta(db) {
                        if (shell.environment.getOrientationMode() === "land") {
                            return db * 0.75;
                        } else {
                            return db;
                        }
                    }
                    function TB(db) {
                        if (shell.environment.getOrientationMode() === "land") {
                            return db * 0.3;
                        } else {
                            return db;
                        }
                    }
                    TN.Img = Tp.default.forwardRef(function (db, dw) {
                        return Tp.default.createElement(
                            To,
                            __assign({}, db, {
                                forwardedRef: dw,
                            })
                        );
                    });
                    (function (db) {
                        Object.defineProperty(db, "__esModule", {
                            value: true,
                        });
                        db.Img = undefined;
                        var dw = TN;
                        Object.defineProperty(db, "Img", {
                            enumerable: true,
                            get: function () {
                                return dw.Img;
                            },
                        });
                    })(Tv);
                    var Tq = v.div(
                        X5 ||
                            (X5 = I5(
                                [
                                    `
      text-align: center;
      margin: auto 20px;
      line-height: `,
                                    ";\n",
                                ],
                                [
                                    `
      text-align: center;
      margin: auto 20px;
      line-height: `,
                                    ";\n",
                                ]
                            )),
                        Ta(1.15)
                    );
                    var TE = v.div(
                        X6 ||
                            (X6 = I5(
                                [
                                    `
      word-wrap: break-word;
      transform: scale(`,
                                    `);
      transform-origin: left;
      width: `,
                                    "%;\n",
                                ],
                                [
                                    `
      word-wrap: break-word;
      transform: scale(`,
                                    `);
      transform-origin: left;
      width: `,
                                    "%;\n",
                                ]
                            )),
                        Ta(1),
                        (100, shell.environment.getOrientationMode() === "land" ? 100 / 0.75 : 100)
                    );
                    var Tj = v(TE)(
                        X7 ||
                            (X7 = I5(
                                [
                                    `
      font-size: 12px;
  `,
                                ],
                                [
                                    `
      font-size: 12px;
  `,
                                ]
                            ))
                    );
                    var TF = v(TE)(
                        X8 ||
                            (X8 = I5(
                                [
                                    "\n    padding-top: ",
                                    `px;
      font-size: 11px;
      opacity: 0.5;
  `,
                                ],
                                [
                                    "\n    padding-top: ",
                                    `px;
      font-size: 11px;
      opacity: 0.5;
  `,
                                ]
                            )),
                        Ta(6)
                    );
                    var TZ = v.div(X9 || (X9 = I5(["\n    color: ", ";\n"], ["\n    color: ", ";\n"])), function (db) {
                        return db.themeColor || "rgb(255,255,255,1)";
                    });
                    var Tu = v(TE)(
                        XI ||
                            (XI = I5(
                                [
                                    "\n    margin-top: ",
                                    "px;\n    margin-bottom: ",
                                    `px;
      font-size: 12px;
  `,
                                ],
                                [
                                    "\n    margin-top: ",
                                    "px;\n    margin-bottom: ",
                                    `px;
      font-size: 12px;
  `,
                                ]
                            )),
                        TB(48),
                        TB(33)
                    );
                    var X0 = v.div(
                        XJ ||
                            (XJ = I5(
                                [
                                    "\n    margin-top: ",
                                    "px;\n    margin-bottom: ",
                                    `px;
      font-size: 11px;
  `,
                                ],
                                [
                                    "\n    margin-top: ",
                                    "px;\n    margin-bottom: ",
                                    `px;
      font-size: 11px;
  `,
                                ]
                            )),
                        TB(48),
                        TB(33)
                    );
                    var X1 = v(TE)(
                        Xy ||
                            (Xy = I5(
                                [
                                    "\n    margin-top: ",
                                    "px;\n    margin-bottom: ",
                                    `px;
      font-size: 12px;
  `,
                                ],
                                [
                                    "\n    margin-top: ",
                                    "px;\n    margin-bottom: ",
                                    `px;
      font-size: 12px;
  `,
                                ]
                            )),
                        Ta(15),
                        Ta(33)
                    );
                    var X2 = v.div(
                        XT ||
                            (XT = I5(
                                [
                                    "\n    margin-top: ",
                                    "px;\n    margin-bottom: ",
                                    `px;
      font-size: 11px;
  `,
                                ],
                                [
                                    "\n    margin-top: ",
                                    "px;\n    margin-bottom: ",
                                    `px;
      font-size: 11px;
  `,
                                ]
                            )),
                        Ta(15),
                        Ta(33)
                    );
                    var X3 = v.div(XX || (XX = I5(["\n    margin-top: ", "px;\n"], ["\n    margin-top: ", "px;\n"])), Ta(10));
                    function X4() {
                        return {
                            margin: `${Ta(13)}px auto`,
                            width: `${Ta(100)}px`,
                            height: `${Ta(100)}px`,
                        };
                    }
                    var X5;
                    var X6;
                    var X7;
                    var X8;
                    var X9;
                    var XI;
                    var XJ;
                    var Xy;
                    var XT;
                    var XX;
                    var Xd;
                    var XM;
                    var Xl;
                    var XS;
                    var XK;
                    var XY;
                    var XA;
                    var Xs;
                    var Xx;
                    var Xc = v.div(
                        Xd ||
                            (Xd = I5(
                                [
                                    "\n    margin: ",
                                    "px auto;\n    transform: scale(",
                                    ");\n    height: ",
                                    `px;
      display: inline-block;
  `,
                                ],
                                [
                                    "\n    margin: ",
                                    "px auto;\n    transform: scale(",
                                    ");\n    height: ",
                                    `px;
      display: inline-block;
  `,
                                ]
                            )),
                        Ta(13),
                        Ta(1),
                        Ta(100)
                    );
                    var Xv = v.div(
                        XM ||
                            (XM = I5(
                                ["\n    margin: ", "px auto;\n    width: ", "px;\n    height: ", "px;\n"],
                                ["\n    margin: ", "px auto;\n    width: ", "px;\n    height: ", "px;\n"]
                            )),
                        Ta(13),
                        Ta(100),
                        Ta(100)
                    );
                    var XN = v(TE)(Xl || (Xl = I5(["\n    padding: ", "px 0px;\n"], ["\n    padding: ", "px 0px;\n"])), Ta(2));
                    var XQ = v.section(
                        XS ||
                            (XS = I5(
                                [
                                    "\n    width: ",
                                    `px;
      margin: auto;
  `,
                                ],
                                [
                                    "\n    width: ",
                                    `px;
      margin: auto;
  `,
                                ]
                            )),
                        Ta(280)
                    );
                    var XG = v.button(
                        XK ||
                            (XK = I5(
                                [
                                    `
      width: 85%;
      margin: `,
                                    `px auto;
      border: none;
      background-color: `,
                                    `;
      color: white;
      font-size: 14px;
      padding: `,
                                    `px 0px;
      border-radius: 2px;
      text-align: center;
      cursor: pointer;
      font-family: inherit;
  `,
                                ],
                                [
                                    `
      width: 85%;
      margin: `,
                                    `px auto;
      border: none;
      background-color: `,
                                    `;
      color: white;
      font-size: 14px;
      padding: `,
                                    `px 0px;
      border-radius: 2px;
      text-align: center;
      cursor: pointer;
      font-family: inherit;
  `,
                                ]
                            )),
                        Ta(5),
                        function (db) {
                            return db.themeColor || "rgb(255,255,255,1)";
                        },
                        Ta(8)
                    );
                    var XL = v.button(
                        XY ||
                            (XY = I5(
                                [
                                    `
      width: 85%;
      margin: `,
                                    `px auto;
      border: 1px solid rgba(0,0,0,0.3);
      background-color: rgba(48,48,60,1);
      color: `,
                                    `;
      font-size: 14px;
      padding: `,
                                    `px 0px;
      border-radius: 2px;
      text-align: center;
      cursor: pointer;
      font-family: inherit;
  `,
                                ],
                                [
                                    `
      width: 85%;
      margin: `,
                                    `px auto;
      border: 1px solid rgba(0,0,0,0.3);
      background-color: rgba(48,48,60,1);
      color: `,
                                    `;
      font-size: 14px;
      padding: `,
                                    `px 0px;
      border-radius: 2px;
      text-align: center;
      cursor: pointer;
      font-family: inherit;
  `,
                                ]
                            )),
                        Ta(5),
                        function (db) {
                            return db.themeColor || "rgb(255,255,255,1)";
                        },
                        Ta(8)
                    );
                    var Xg = I7.formatCurrency;
                    var XH = shell.I18n;
                    var XV = (function (db) {
                        function dw(df) {
                            var dO = db.call(this, df) || this;
                            dO.ft = function () {
                                document.getElementById("morePromotionBtn").blur();
                                df.onMorePromotionClick();
                            };
                            dO.gt = function () {
                                document.getElementById("laterBtn").blur();
                                df.onLaterClick();
                            };
                            return dO;
                        }
                        I0(dw, db);
                        dw.prototype.shouldComponentUpdate = function (df) {
                            return this.props.show === df.show;
                        };
                        dw.prototype.render = function () {
                            var df = this.props.data;
                            var dO = df.status;
                            var dk = df.bonusWalletName;
                            var dU = df.bonusID;
                            var dp = df.expiredDate;
                            var dm = df.expiredTime;
                            var dR = IC.gameIconUrl;
                            var da = IC.gameThemeColor;
                            var dB = this.Z(df);
                            IC.status = dO;
                            return K.createElement(
                                Tq,
                                null,
                                K.createElement(
                                    "section",
                                    null,
                                    K.createElement(Tj, null, dk),
                                    K.createElement(
                                        TF,
                                        null,
                                        XH.t("BonusWallet.Offer", {
                                            id: dU.toString(),
                                        })
                                    )
                                ),
                                dR
                                    ? K.createElement(Tv.Img, {
                                          src: dR,
                                          alt: "game icon",
                                          style: X4(),
                                      })
                                    : K.createElement(
                                          Xc,
                                          null,
                                          K.createElement("span", {
                                              className: "wallet-plugin-sprite wallet-plugin-default_icon",
                                          })
                                      ),
                                K.createElement(
                                    TZ,
                                    {
                                        themeColor: da,
                                    },
                                    dB.title
                                ),
                                K.createElement(Tu, null, dB.desc),
                                K.createElement("div", null, dB.amt),
                                K.createElement(
                                    X0,
                                    null,
                                    dB.bonusRatioContent,
                                    dB.rollOverModeContent,
                                    dB.maxConversionRateContent,
                                    K.createElement(XN, null, " ", `${XH.t("BonusWallet.Expiry")} ${dp} ${dm}`)
                                ),
                                K.createElement(
                                    XQ,
                                    null,
                                    dB.continueBtnContent,
                                    dB.morePromotionBtnContent,
                                    K.createElement(
                                        XL,
                                        {
                                            id: "laterBtn",
                                            onClick: this.gt,
                                            themeColor: da,
                                        },
                                        K.createElement(TE, null, dB.btmBtn)
                                    )
                                )
                            );
                        };
                        dw.prototype.Z = function (df) {
                            var dO = df.status;
                            var dk = df.balanceAmount;
                            var dU = df.key;
                            var dp = df.keySelection;
                            var dm = df.rollOverMode;
                            var dR = df.bonusRatioAmount;
                            var da = df.maximumConversionAmount;
                            if (dO === 2) {
                                return {
                                    title: XH.t("BonusWallet.BonusWalletExpiredTitle"),
                                    desc: XH.t("BonusWallet.BonusWalletExpiredNoPrize"),
                                    amt: "",
                                    bonusRatioContent: null,
                                    rollOverModeContent: null,
                                    maxConversionRateContent: null,
                                    continueBtnContent: null,
                                    morePromotionBtnContent: K.createElement(
                                        XG,
                                        {
                                            id: "morePromotionBtn",
                                            onClick: this.ft,
                                            themeColor: IC.gameThemeColor,
                                        },
                                        K.createElement(TE, null, XH.t("BonusWallet.MoreOffers"))
                                    ),
                                    btmBtn: XH.t("BonusWallet.BackToGame"),
                                };
                            }
                            var dB = Xg(dR);
                            var dq = Xg(da);
                            var dE = Xg(dk);
                            var dj = dm === 1 || (dp && dU === dp[1]) ? XH.t("BonusWallet.Cash") : XH.t("BonusWallet.Bonus");
                            return {
                                title: XH.t("BonusWallet.BonusWalletContinueTitle"),
                                desc: XH.t("BonusWallet.BonusWalletContinueDesc"),
                                amt: dE,
                                bonusRatioContent: K.createElement(XN, null, `${XH.t("BonusWallet.BonusRatioLabelFull")}: ${dB}`),
                                rollOverModeContent: K.createElement(XN, null, `${XH.t("BonusWallet.RollOverMode")}: ${dj}`),
                                maxConversionRateContent:
                                    da > 0
                                        ? K.createElement(
                                              XN,
                                              null,
                                              XH.t("BonusWallet.MaximumConversionRate", {
                                                  rate: dq,
                                              })
                                          )
                                        : "",
                                continueBtnContent: K.createElement(
                                    XG,
                                    {
                                        onClick: this.props.onContinueClick,
                                        themeColor: IC.gameThemeColor,
                                    },
                                    K.createElement(TE, null, XH.t("BonusWallet.ContinueGame"))
                                ),
                                morePromotionBtnContent: K.createElement(
                                    XL,
                                    {
                                        id: "morePromotionBtn",
                                        onClick: this.ft,
                                        themeColor: IC.gameThemeColor,
                                    },
                                    K.createElement(TE, null, XH.t("BonusWallet.MoreOffers"))
                                ),
                                btmBtn: XH.t("BonusWallet.NextTime"),
                            };
                        };
                        return dw;
                    })(K.Component);
                    var XC = I7.formatCurrency;
                    var XW = shell.I18n;
                    var Xz = (function (db) {
                        function dw(df) {
                            var dO = db.call(this, df) || this;
                            dO.ft = function () {
                                var dk = document.getElementById("morePromotionBtn");
                                if (!dk) {
                                    dk = document.getElementById("topBtn");
                                }
                                dk.blur();
                                df.onMorePromotionClick();
                            };
                            dO.gt = function () {
                                document.getElementById("laterBtn").blur();
                                df.onLaterClick();
                            };
                            return dO;
                        }
                        I0(dw, db);
                        dw.prototype.shouldComponentUpdate = function (df) {
                            return this.props.show === df.show;
                        };
                        dw.prototype.render = function () {
                            var df = this.props.data;
                            var dO = df.freeGameName;
                            var dk = df.freeGameID;
                            var dU = df.status;
                            var dp = IC.gameIconUrl;
                            var dm = IC.gameThemeColor;
                            var dR = this.Z(df);
                            IC.status = dU;
                            return K.createElement(
                                Tq,
                                null,
                                K.createElement(
                                    "section",
                                    null,
                                    K.createElement(Tj, null, dO),
                                    K.createElement(
                                        TF,
                                        null,
                                        XW.t("FreeGame.Offer", {
                                            id: dk.toString(),
                                        })
                                    )
                                ),
                                dp
                                    ? K.createElement(Tv.Img, {
                                          src: dp,
                                          alt: "game icon",
                                          style: X4(),
                                      })
                                    : K.createElement(Xv, {
                                          className: "wallet-plugin-sprite wallet-plugin-default_icon",
                                      }),
                                K.createElement(
                                    TZ,
                                    {
                                        themeColor: dm,
                                    },
                                    dR.title
                                ),
                                K.createElement(X1, null, dR.desc),
                                K.createElement(X3, null, dR.amt),
                                K.createElement(X2, null, K.createElement(XN, null, dR.withdrawalLimit), K.createElement(XN, null, dR.expiryDate)),
                                K.createElement(
                                    XQ,
                                    null,
                                    K.createElement(
                                        XG,
                                        {
                                            id: "topBtn",
                                            onClick: dR.topBtnClickEvent,
                                            themeColor: dm,
                                        },
                                        K.createElement(TE, null, dR.topBtn)
                                    ),
                                    dR.midBtn.length > 0 &&
                                        K.createElement(
                                            XL,
                                            {
                                                id: "morePromotionBtn",
                                                onClick: this.ft,
                                                themeColor: dm,
                                            },
                                            K.createElement(TE, null, dR.midBtn)
                                        ),
                                    K.createElement(
                                        XL,
                                        {
                                            id: "laterBtn",
                                            onClick: this.gt,
                                            themeColor: dm,
                                        },
                                        K.createElement(TE, null, dR.btmBtn)
                                    )
                                )
                            );
                        };
                        dw.prototype.Z = function (df) {
                            var dO = df.status;
                            var dk = df.conversionAmount;
                            var dU = df.maximumConversionAmount;
                            var dp = df.gameCount;
                            var dm = df.balanceAmount;
                            var dR = df.expiredDate;
                            var da = df.expiredTime;
                            var dB = df.conversionType;
                            var dq = XC(dm);
                            var dE = XC(dk);
                            var dj = XC(dU);
                            switch (dO) {
                                case 3:
                                case 4:
                                    if (dk > 0) {
                                        var dF = dB === Ig;
                                        return {
                                            title: XW.t("FreeGame.Congratulations"),
                                            desc: XW.t("FreeGame.FreeGameCompletedWin"),
                                            amt: dE,
                                            withdrawalLimit:
                                                dU > 0
                                                    ? XW.t("FreeGame.MaximumConversionRate", {
                                                          rate: dj,
                                                      })
                                                    : "",
                                            expiryDate: dF ? XW.t("FreeGame.ConvertToBonusWallet") : XW.t("FreeGame.ConvertToCashWallet"),
                                            topBtn: dF ? XW.t("FreeGame.UseBonusWallet") : XW.t("FreeGame.MoreOffers"),
                                            midBtn: dF ? XW.t("FreeGame.MoreOffers") : "",
                                            btmBtn: XW.t("FreeGame.BackToGame"),
                                            topBtnClickEvent: dF ? this.props.onSwitchBonusWalletClick : this.ft,
                                        };
                                    }
                                    return {
                                        title: XW.t("FreeGame.FreeGameCompletedNoWin"),
                                        desc: "",
                                        amt: "",
                                        withdrawalLimit: "",
                                        expiryDate: "",
                                        topBtn: XW.t("FreeGame.MoreOffers"),
                                        midBtn: "",
                                        btmBtn: XW.t("FreeGame.BackToGame"),
                                        topBtnClickEvent: this.ft,
                                    };
                                case 2:
                                    return {
                                        title: XW.t("FreeGame.FreeGameExpired"),
                                        desc: XW.t("FreeGame.FreeGameExpiredNoPrize"),
                                        amt: "",
                                        withdrawalLimit: "",
                                        expiryDate: `${XW.t("FreeGame.ExpiryDate")}: ${dR} ${da}`,
                                        topBtn: XW.t("FreeGame.MoreOffers"),
                                        midBtn: "",
                                        btmBtn: XW.t("FreeGame.BackToGame"),
                                        topBtnClickEvent: this.ft,
                                    };
                                default:
                                    return {
                                        title: XW.t("FreeGame.FreeGameViewRemaining", {
                                            games: dp.toString(),
                                        }),
                                        desc: XW.t("FreeGame.FreeGameViewAccumulated"),
                                        amt: dq,
                                        withdrawalLimit:
                                            dU > 0
                                                ? XW.t("FreeGame.MaximumConversionRate", {
                                                      rate: dj,
                                                  })
                                                : "",
                                        expiryDate: `${XW.t("FreeGame.ExpiryDate")}: ${dR} ${da}`,
                                        topBtn: XW.t("FreeGame.ContinueGame"),
                                        midBtn: XW.t("FreeGame.MoreOffers"),
                                        btmBtn: XW.t("FreeGame.NextTime"),
                                        topBtnClickEvent: this.props.onContinueClick,
                                    };
                            }
                        };
                        return dw;
                    })(K.Component);
                    var XP = shell.I18n;
                    var XD = (function (db) {
                        function dw(df) {
                            var dO = db.call(this, df) || this;
                            dO.gt = function () {
                                document.getElementById("btn").blur();
                                df.onLaterClick();
                            };
                            return dO;
                        }
                        I0(dw, db);
                        dw.prototype.shouldComponentUpdate = function (df) {
                            return this.props.show === df.show;
                        };
                        dw.prototype.render = function () {
                            var df = this.props.data;
                            var dO = df.freeGameName;
                            var dk = df.freeGameID;
                            var dU = IC.gameIconUrl;
                            var dp = IC.gameThemeColor;
                            var dm = this.Z(df);
                            return K.createElement(
                                Tq,
                                null,
                                K.createElement(
                                    "section",
                                    null,
                                    K.createElement(Tj, null, dO),
                                    K.createElement(
                                        TF,
                                        null,
                                        XP.t("FreeGame.Offer", {
                                            id: dk.toString(),
                                        })
                                    )
                                ),
                                dU
                                    ? K.createElement(Tv.Img, {
                                          src: dU,
                                          alt: "game icon",
                                          style: X4(),
                                      })
                                    : K.createElement(Xv, {
                                          className: "wallet-plugin-sprite wallet-plugin-default_icon",
                                      }),
                                K.createElement(
                                    TZ,
                                    {
                                        themeColor: dp,
                                    },
                                    dm.title
                                ),
                                K.createElement(X0, null, K.createElement(XN, null, dm.expiryDate)),
                                K.createElement(
                                    XQ,
                                    null,
                                    K.createElement(
                                        XG,
                                        {
                                            id: "btn",
                                            onClick: dm.btnClickEvent,
                                            themeColor: dp,
                                        },
                                        K.createElement(TE, null, dm.btn)
                                    )
                                )
                            );
                        };
                        dw.prototype.Z = function (df) {
                            var dO = df.status;
                            var dk = df.gameCount;
                            var dU = df.expiredDate;
                            var dp = df.expiredTime;
                            if (dO === 4) {
                                return {
                                    title: XP.t("FreeGame.FreeGameCompletedNoWin"),
                                    expiryDate: "",
                                    btn: XP.t("FreeGame.BackToGame"),
                                    btnClickEvent: this.gt,
                                };
                            } else {
                                return {
                                    title: XP.t("FreeGame.FreeGameViewRemaining", {
                                        games: dk.toString(),
                                    }),
                                    expiryDate: `${XP.t("FreeGame.ExpiryDate")}: ${dU} ${dp}`,
                                    btn: XP.t("FreeGame.ContinueGame"),
                                    btnClickEvent: this.props.onContinueClick,
                                };
                            }
                        };
                        return dw;
                    })(K.Component);
                    var Xh = v.div(
                        XA ||
                            (XA = I5(
                                [
                                    `
      position: absolute;
      height: 52%;
      width: 100%;
  `,
                                ],
                                [
                                    `
      position: absolute;
      height: 52%;
      width: 100%;
  `,
                                ]
                            ))
                    );
                    var Xb = v(Xh)(
                        Xs ||
                            (Xs = I5(
                                [
                                    `
      height: 100%;
      width: 58%;
      left: 42%;
  `,
                                ],
                                [
                                    `
      height: 100%;
      width: 58%;
      left: 42%;
  `,
                                ]
                            ))
                    );
                    var Xw = (function (db) {
                        function _dw() {
                            return (db !== null && db.apply(this, arguments)) || this;
                        }
                        I0(_dw, db);
                        _dw.prototype.shouldComponentUpdate = function (df) {
                            return this.props.viewType !== df.viewType;
                        };
                        _dw.prototype.render = function () {
                            if (shell.environment.getOrientationMode() === "land") {
                                return K.createElement(Xb, {
                                    onClick: this.props.onClick,
                                });
                            } else if (this.props.viewType === 1) {
                                return K.createElement(Xh, {
                                    onClick: this.props.onClick,
                                });
                            } else {
                                return null;
                            }
                        };
                        return _dw;
                    })(K.Component);
                    (function (db) {
                        db[(db.ANIM = 0)] = "ANIM";
                        db[(db.NO_ANIM = 1)] = "NO_ANIM";
                    })(Xx || (Xx = {}));
                    var Xf = S("WalletEventEnum", {
                        EN_WALLET_LIST_ANIM: Xx.ANIM,
                        EN_WALLET_LIST_NO_ANIM: Xx.NO_ANIM,
                    });
                    function XO(db, dw) {
                        if (dw === undefined) {
                            dw = 0;
                        }
                        IG.context.event.emit("Toast.Show", {
                            toastStyle: "Message",
                            message: db,
                            duration: dw,
                            imageSrc: "",
                            toastPosition: "Bottom",
                        });
                    }
                    function Xk(db) {
                        var dw = [];
                        IG.context.event.emit(
                            "Alert.Show",
                            (function (df, dO) {
                                var dk = [];
                                var dU = 0;
                                if (df.actions) {
                                    df.actions.forEach(function (dp) {
                                        dk.push({
                                            label: dp.title,
                                            handler: dU,
                                        });
                                        dO.push(dp.handler);
                                        dU++;
                                    });
                                }
                                return {
                                    title: df.title_message,
                                    content: df.content_message,
                                    actions: dk,
                                };
                            })(db, dw),
                            function (df) {
                                var dO = df.response;
                                var dk = dw[dO];
                                if (dk) {
                                    dk();
                                }
                            }
                        );
                    }
                    function XU(db) {
                        if (shell.environment.getOrientationMode() === "land") {
                            return db * 0.75;
                        } else {
                            return db;
                        }
                    }
                    function Xp(db) {
                        return db.orientation === "land";
                    }
                    function Xm(db) {
                        var dw = db.view;
                        var df = parseInt(dw, 0);
                        return df === 3 || df === 5;
                    }
                    var XR;
                    var Xo;
                    var Xa = v(N.div)(
                        XR ||
                            (XR = I5(
                                [
                                    `
      color: white;
      background-color: rgba(40,40,50,1);
      position: relative;
      border-radius: `,
                                    ";\n    height: ",
                                    ";\n    width: ",
                                    ";\n    font-size: ",
                                    "px;\n",
                                ],
                                [
                                    `
      color: white;
      background-color: rgba(40,40,50,1);
      position: relative;
      border-radius: `,
                                    ";\n    height: ",
                                    ";\n    width: ",
                                    ";\n    font-size: ",
                                    "px;\n",
                                ]
                            )),
                        function (db) {
                            if (Xp(db)) {
                                return "inherit";
                            } else {
                                return "8px 8px 0px 0px";
                            }
                        },
                        function (db) {
                            if (Xp(db)) {
                                return "100%";
                            } else {
                                return "48%";
                            }
                        },
                        function (db) {
                            if (Xp(db)) {
                                return "42%";
                            } else {
                                return "100%";
                            }
                        },
                        XU(16)
                    );
                    var XB = v(N.div)(
                        Xo ||
                            (Xo = I5(
                                [
                                    `
      height: 100%;
      position: relative;
      color: white;
      background-color: `,
                                    `;
      display: flex;
      flex-direction: column;
      width: `,
                                    ";\n    margin: ",
                                    ";\n    font-size: ",
                                    "px;\n    top: ",
                                    ";\n    right: ",
                                    ";\n",
                                ],
                                [
                                    `
      height: 100%;
      position: relative;
      color: white;
      background-color: `,
                                    `;
      display: flex;
      flex-direction: column;
      width: `,
                                    ";\n    margin: ",
                                    ";\n    font-size: ",
                                    "px;\n    top: ",
                                    ";\n    right: ",
                                    ";\n",
                                ]
                            )),
                        function (db) {
                            if (Xp(db) && Xm(db)) {
                                return "inherit";
                            } else {
                                return "rgba(40,40,52,1)";
                            }
                        },
                        function (db) {
                            if (Xp(db) && !Xm(db)) {
                                return "42%";
                            } else {
                                return "100%";
                            }
                        },
                        function (db) {
                            if (Xp(db)) {
                                return "inherit";
                            } else {
                                return "0px auto";
                            }
                        },
                        XU(16),
                        function (db) {
                            if (Xp(db)) {
                                return "inherit";
                            } else {
                                return "0%";
                            }
                        },
                        function (db) {
                            if (Xp(db) && !Xm(db)) {
                                return "50%";
                            } else {
                                return "inherit";
                            }
                        }
                    );
                    function Xq(db, dw) {
                        var df;
                        var dO;
                        if (shell.environment.getOrientationMode() === "land") {
                            var dk = db === 3 || db === 5;
                            df = dk
                                ? {
                                      backgroundColor: dw ? "rgba(40,40,52,0)" : "rgba(40,40,52,0.75)",
                                      opacity: 1,
                                  }
                                : {
                                      right: dw ? "50%" : "0%",
                                  };
                            dO = dk
                                ? {
                                      backgroundColor: "rgba(40,40,52,0.75)",
                                      opacity: dw ? 1 : 0,
                                  }
                                : {
                                      right: dw ? "0%" : "50%",
                                  };
                        } else {
                            df = {
                                top: dw ? "100%" : "0%",
                            };
                            dO = {
                                top: dw ? "0%" : "100%",
                            };
                        }
                        var dU = Object.create(null);
                        dU.animFrom = df;
                        dU.animTo = dO;
                        return dU;
                    }
                    var XE;
                    var Xj = I7.sequenceCallback;
                    var XF = I7.timeoutCallback;
                    var XZ = shell.I18n;
                    var Xu = shell.ga;
                    var d0 = shell.environment;
                    var d1 = "0_C";
                    var d2 = v.div(
                        XE ||
                            (XE = I5(
                                [
                                    `
      width: 100%;
      height: 100%;
  `,
                                ],
                                [
                                    `
      width: 100%;
      height: 100%;
  `,
                                ]
                            ))
                    );
                    var d3 = (function (db) {
                        function dw(df) {
                            var dO = db.call(this, df) || this;
                            dO.vt = function (dk, dU) {
                                if (!dk && dU && IC.transactionInfo.wt === "C") {
                                    IG.context.event.emit("Game.UpdateTransactionInfo", {
                                        balance: dU.dt.cb,
                                    });
                                }
                                dO.xt(1, dk, dU);
                            };
                            dO.Ct = dO.xt.bind(dO, 2);
                            dO.yt = dO.xt.bind(dO, 4);
                            dO.kt = dO.Bt.bind(dO);
                            dO.Wt = dO.St.bind(dO);
                            dO.state = {
                                viewType: df.initViewType,
                                error: undefined,
                                data: undefined,
                                show: true,
                            };
                            dO.Gt = document.getElementById("wallet-container");
                            dO.Ot = dO.state.viewType;
                            return dO;
                        }
                        I0(dw, db);
                        dw.prototype.componentDidMount = function () {
                            var df = this;
                            switch (this.props.initViewType) {
                                case 1:
                                    var dO = IG.context.event;
                                    var dk = this.Gt.style;
                                    var dU = parseFloat(dk.height);
                                    var dp = {
                                        label: XZ.t("General.ResourceLoadingMessage"),
                                        height: 200,
                                        y: dU * 0.78,
                                    };
                                    if (this.props.walletListAnimState === Xf.EN_WALLET_LIST_ANIM) {
                                        var dm = {
                                            inAnimate: "Slide",
                                            inDuration: 0.3,
                                            inValue: {
                                                y: dU * 1.78,
                                            },
                                            inEasing: "easeOutCubic",
                                        };
                                        dp = I1(I1({}, dp), dm);
                                    }
                                    if (d0.getOrientationMode() === "land") {
                                        var dR = parseFloat(dk.width);
                                        var da = {
                                            width: dR * 0.42,
                                            x: dR * 0.21,
                                            y: dU * 0.557,
                                            inAnimate: "Slide",
                                            inDuration: 0.3,
                                            inValue: {
                                                x: dR * -1.21,
                                            },
                                            inEasing: "easeOutCubic",
                                        };
                                        dp = I1(I1({}, dp), da);
                                    }
                                    dO.emit("Loading.Show", dp);
                                    XF(0.3)(function () {
                                        df.Ft(df.vt);
                                    });
                                    break;
                                case 2:
                                    this.Tt(1, this.Ct);
                                    break;
                                case 4:
                                    this.Nt(1, this.yt);
                            }
                        };
                        dw.prototype.componentDidUpdate = function () {
                            this.Ot = this.state.viewType;
                            if (this._t) {
                                this._t();
                            }
                            this._t = undefined;
                        };
                        dw.prototype.render = function () {
                            switch (this.state.viewType) {
                                case 1:
                                    return this.zt();
                                case 2:
                                    return this.At();
                                case 3:
                                    return this.Lt();
                                case 4:
                                    return this.It();
                                case 5:
                                    return this.Rt();
                                default:
                                    return null;
                            }
                        };
                        dw.prototype.zt = function () {
                            var df = this;
                            var dO = IG.context.event;
                            var dk = (function (dp, dm) {
                                var dR;
                                var da;
                                if (shell.environment.getOrientationMode() === "land") {
                                    dR = {
                                        right: dp ? "50%" : "0%",
                                    };
                                    da = {
                                        right: dp ? "0%" : "50%",
                                    };
                                } else {
                                    dR = dm
                                        ? {
                                              top: dp ? "100%" : "52%",
                                          }
                                        : {
                                              top: "52%",
                                          };
                                    da = {
                                        top: dp ? "52%" : "100%",
                                    };
                                }
                                var dB = Object.create(null);
                                dB.animFrom = dR;
                                dB.animTo = da;
                                return dB;
                            })(this.state.show, this.props.walletListAnimState === Xf.EN_WALLET_LIST_ANIM);
                            function dU(dp) {
                                var dm = df.Gt.style;
                                var dR = parseFloat(dm.height);
                                var da = {
                                    label: XZ.t("General.ResourceLoadingMessage"),
                                    y: dR * 0.557,
                                    height: 200,
                                    inAnimate: "Slide",
                                    inDuration: 0.3,
                                    inValue: {
                                        y: dR * 1.557,
                                    },
                                    inEasing: "easeOutCubic",
                                };
                                if (d0.getOrientationMode() === "land") {
                                    var dB = parseFloat(dm.width);
                                    var dq = {
                                        width: dB * 0.42,
                                        x: dB * 0.21,
                                        inValue: {
                                            x: dB * -1.21,
                                        },
                                    };
                                    da = I1(I1({}, da), dq);
                                }
                                dO.emit("Loading.Show", da);
                                XF(0.3)(dp);
                            }
                            return K.createElement(
                                d2,
                                null,
                                K.createElement(Xw, {
                                    viewType: 1,
                                    onClick: function () {
                                        dO.emit("Loading.Hide");
                                        df.setState({
                                            show: false,
                                        });
                                    },
                                }),
                                K.createElement(
                                    Q,
                                    {
                                        native: true,
                                        from: dk.animFrom,
                                        to: dk.animTo,
                                        config: {
                                            tension: 163,
                                            friction: 21,
                                            clamp: true,
                                            velocity: 10,
                                        },
                                        onStart: this.kt,
                                        onRest: this.Wt,
                                    },
                                    function (dp) {
                                        return K.createElement(
                                            Xa,
                                            {
                                                id: "walletListView",
                                                style: dp,
                                                orientation: shell.environment.getOrientationMode(),
                                            },
                                            K.createElement(Js, {
                                                onCloseButtonClick: function () {
                                                    if (df.Dt) {
                                                        df.Dt();
                                                    }
                                                    df.Dt = undefined;
                                                    if (df.jt) {
                                                        df.jt();
                                                    }
                                                    df.jt = undefined;
                                                    if (df.Mt) {
                                                        df.Mt();
                                                    }
                                                    df.Mt = undefined;
                                                    df.setState({
                                                        show: false,
                                                    });
                                                },
                                                onCashWalletClick: function (dm) {
                                                    var dR = IV.walletType;
                                                    if (!(dR !== Ig && dR !== IH)) {
                                                        Xk({
                                                            title_message: XZ.t("WalletHelper.ChangeWalletTitle"),
                                                            content_message: XZ.t("WalletHelper.ChangeWalletDesc"),
                                                            actions: [
                                                                {
                                                                    title: XZ.t("WalletHelper.Cancel"),
                                                                    handler: undefined,
                                                                },
                                                                {
                                                                    title: XZ.t("WalletHelper.Confirm"),
                                                                    handler: function () {
                                                                        df.props.changeWorld(dm);
                                                                        IC.status = undefined;
                                                                    },
                                                                },
                                                            ],
                                                        });
                                                    }
                                                },
                                                onBonusWalletClick: function () {
                                                    df.setState({
                                                        viewType: 2,
                                                        error: undefined,
                                                        data: undefined,
                                                    });
                                                    Xj(dU)(function () {
                                                        df.Tt(1, df.Ct);
                                                    });
                                                },
                                                onFreeGameClick: function () {
                                                    df.setState({
                                                        viewType: 4,
                                                        error: undefined,
                                                        data: undefined,
                                                    });
                                                    Xj(dU)(function () {
                                                        df.Nt(1, df.yt);
                                                    });
                                                },
                                                onRetryClick: df.Et.bind(df, 1, function () {
                                                    df.Ft(df.vt);
                                                }),
                                                error: df.state.error,
                                                data: df.state.data,
                                                show: df.state.show,
                                            })
                                        );
                                    }
                                )
                            );
                        };
                        dw.prototype.At = function () {
                            var df = this;
                            var dO = IG.context.event;
                            var dk = Xq(2, this.state.show);
                            return K.createElement(
                                d2,
                                null,
                                K.createElement(Xw, {
                                    viewType: 2,
                                    onClick: function () {
                                        dO.emit("Loading.Hide");
                                        df.setState({
                                            show: false,
                                        });
                                    },
                                }),
                                K.createElement(
                                    Q,
                                    {
                                        native: true,
                                        from: dk.animFrom,
                                        to: dk.animTo,
                                        config: {
                                            tension: 163,
                                            friction: 21,
                                            clamp: true,
                                            velocity: 10,
                                        },
                                        reset: this.state.viewType !== this.Ot,
                                        onStart: this.kt,
                                        onRest: this.Wt,
                                    },
                                    function (dU) {
                                        return K.createElement(
                                            XB,
                                            {
                                                id: "view",
                                                style: dU,
                                                orientation: shell.environment.getOrientationMode(),
                                                view: "2",
                                            },
                                            K.createElement(TY, {
                                                onCloseButtonClick: function () {
                                                    if (df.jt) {
                                                        df.jt();
                                                    }
                                                    df.jt = undefined;
                                                    df.setState({
                                                        show: false,
                                                    });
                                                },
                                                onBackCashWalletClick: function () {
                                                    df.props.changeWorld(d1);
                                                    IC.status = undefined;
                                                },
                                                onSelectWalletClick: function (dp, dm) {
                                                    var dR = dp.status;
                                                    var da = dp.lockedGameID;
                                                    var dB = dp.rollOverMode;
                                                    var dq = dp.keySelection;
                                                    if (dR !== 7) {
                                                        var dE = d1;
                                                        switch (dB) {
                                                            case 0:
                                                            case 1:
                                                                dE = dp.key;
                                                                break;
                                                            case 2:
                                                                dE = document.getElementById(`cash ${dm.toString()}`).checked ? dq[1] : dq[0];
                                                        }
                                                        df.props.changeWorld(dE);
                                                    } else {
                                                        df.props.showLockedDialog(true, da, true);
                                                    }
                                                },
                                                onDiscardOfferClick: function (dp, dm) {
                                                    var dR = dp.bonusWalletName;
                                                    var da = dp.balanceID;
                                                    df.Ut(true, dm, dR, function () {
                                                        var dB;
                                                        var dq;
                                                        dB = function (dE) {
                                                            if (dE) {
                                                                XO(dE.message);
                                                                dO.emit("Loading.Hide");
                                                            } else {
                                                                for (
                                                                    var dj, dF = JSON.parse(JSON.stringify(df.Pt)), dZ = dF.dt.r, du = 0, M0 = dZ.length;
                                                                    du < M0;
                                                                    du++
                                                                ) {
                                                                    var M1 = dZ[du];
                                                                    if (M1.baid === da) {
                                                                        M1.s = 6;
                                                                        break;
                                                                    }
                                                                }
                                                                dj = dF;
                                                                df.xt(2, undefined, dj);
                                                            }
                                                        };
                                                        dq = IL({
                                                            wid: da,
                                                        });
                                                        IQ.request("v2/BonusWallet/Cancel", dq, dB);
                                                    });
                                                },
                                                onRetryClick: df.Et.bind(df, 2, function () {
                                                    df.Tt(1, df.Ct);
                                                }),
                                                onLoadMoreRequestApi: function (dp, dm) {
                                                    df._t = dm;
                                                    df.Vt(function () {
                                                        df.Tt(dp, df.Ct);
                                                    });
                                                },
                                                error: df.state.error,
                                                data: df.state.data,
                                                show: df.state.show,
                                            })
                                        );
                                    }
                                )
                            );
                        };
                        dw.prototype.Lt = function () {
                            var df = this;
                            var dO = Xq(3, this.state.show);
                            return K.createElement(
                                Q,
                                {
                                    native: true,
                                    from: dO.animFrom,
                                    to: dO.animTo,
                                    config: {
                                        tension: 163,
                                        friction: 21,
                                        clamp: true,
                                        velocity: 10,
                                    },
                                    onStart: this.kt,
                                    onRest: this.Wt,
                                },
                                function (dk) {
                                    return K.createElement(
                                        XB,
                                        {
                                            id: "view",
                                            style: dk,
                                            orientation: shell.environment.getOrientationMode(),
                                            view: "3",
                                        },
                                        K.createElement(XV, {
                                            onContinueClick: function () {
                                                df.setState({
                                                    show: false,
                                                });
                                            },
                                            onMorePromotionClick: df.Ht.bind(df, function () {
                                                df.Tt(1, df.Ct);
                                            }),
                                            onLaterClick: function () {
                                                df.props.changeWorld(d1);
                                                IC.status = undefined;
                                            },
                                            data: df.props.initModel,
                                            show: df.state.show,
                                        })
                                    );
                                }
                            );
                        };
                        dw.prototype.It = function () {
                            var df = this;
                            var dO = IG.context.event;
                            var dk = Xq(4, this.state.show);
                            return K.createElement(
                                d2,
                                null,
                                K.createElement(Xw, {
                                    viewType: 4,
                                    onClick: function () {
                                        dO.emit("Loading.Hide");
                                        df.setState({
                                            show: false,
                                        });
                                    },
                                }),
                                K.createElement(
                                    Q,
                                    {
                                        native: true,
                                        from: dk.animFrom,
                                        to: dk.animTo,
                                        config: {
                                            tension: 163,
                                            friction: 21,
                                            clamp: true,
                                            velocity: 10,
                                        },
                                        reset: this.state.viewType !== this.Ot,
                                        onStart: this.kt,
                                        onRest: this.Wt,
                                    },
                                    function (dU) {
                                        return K.createElement(
                                            XB,
                                            {
                                                id: "view",
                                                style: dU,
                                                orientation: shell.environment.getOrientationMode(),
                                                view: "4",
                                            },
                                            K.createElement(Tc, {
                                                onCloseButtonClick: function () {
                                                    if (df.Mt) {
                                                        df.Mt();
                                                    }
                                                    df.Mt = undefined;
                                                    df.setState({
                                                        show: false,
                                                    });
                                                },
                                                onBackCashWalletClick: function () {
                                                    df.props.changeWorld(d1);
                                                    IC.status = undefined;
                                                },
                                                onSelectFreeGameClick: function (dp) {
                                                    var dm = dp.status;
                                                    var dR = dp.lockedGameID;
                                                    var da = dp.key;
                                                    if (dm !== 7) {
                                                        df.props.changeWorld(da);
                                                    } else {
                                                        df.props.showLockedDialog(false, dR, true);
                                                    }
                                                },
                                                onDiscardOfferClick: function (dp, dm) {
                                                    var dR = dp.freeGameName;
                                                    var da = dp.balanceID;
                                                    df.Ut(false, dm, dR, function () {
                                                        var dB;
                                                        var dq;
                                                        dB = function (dE) {
                                                            if (dE) {
                                                                XO(dE.message);
                                                                dO.emit("Loading.Hide");
                                                            } else {
                                                                for (
                                                                    var dj, dF = JSON.parse(JSON.stringify(df.Pt)), dZ = dF.dt.r, du = 0, M0 = dZ.length;
                                                                    du < M0;
                                                                    du++
                                                                ) {
                                                                    var M1 = dZ[du];
                                                                    if (M1.baid === da) {
                                                                        M1.s = 6;
                                                                        break;
                                                                    }
                                                                }
                                                                dj = dF;
                                                                df.xt(4, undefined, dj);
                                                            }
                                                        };
                                                        dq = IL({
                                                            wid: da,
                                                        });
                                                        IQ.request("v2/FreeGameWallet/Cancel", dq, dB);
                                                    });
                                                },
                                                onRetryClick: df.Et.bind(df, 4, function () {
                                                    df.Nt(1, df.yt);
                                                }),
                                                onLoadMoreRequestApi: function (dp, dm) {
                                                    df._t = dm;
                                                    df.Vt(function () {
                                                        df.Nt(dp, df.yt);
                                                    });
                                                },
                                                error: df.state.error,
                                                data: df.state.data,
                                                show: df.state.show,
                                            })
                                        );
                                    }
                                )
                            );
                        };
                        dw.prototype.Rt = function () {
                            if (IV.walletType === "I") {
                                return this.Zt();
                            } else {
                                return this.Jt();
                            }
                        };
                        dw.prototype.Jt = function () {
                            var df = this;
                            var dO = Xq(5, this.state.show);
                            return K.createElement(
                                Q,
                                {
                                    native: true,
                                    from: dO.animFrom,
                                    to: dO.animTo,
                                    config: {
                                        tension: 163,
                                        friction: 21,
                                        clamp: true,
                                        velocity: 10,
                                    },
                                    onStart: this.kt,
                                    onRest: this.Wt,
                                },
                                function (dk) {
                                    return K.createElement(
                                        XB,
                                        {
                                            id: "view",
                                            style: dk,
                                            orientation: shell.environment.getOrientationMode(),
                                            view: "5",
                                        },
                                        K.createElement(Xz, {
                                            onContinueClick: function () {
                                                df.setState({
                                                    show: false,
                                                });
                                            },
                                            onSwitchBonusWalletClick: function () {
                                                df.Tt(1, df.Ct);
                                            },
                                            onMorePromotionClick: df.Ht.bind(df, function () {
                                                df.Nt(1, df.yt);
                                            }),
                                            onLaterClick: function () {
                                                df.props.changeWorld(d1);
                                                IC.status = undefined;
                                            },
                                            data: df.props.initModel,
                                            show: df.state.show,
                                        })
                                    );
                                }
                            );
                        };
                        dw.prototype.Zt = function () {
                            var df = this;
                            var dO = Xq(5, this.state.show);
                            return K.createElement(
                                Q,
                                {
                                    native: true,
                                    from: dO.animFrom,
                                    to: dO.animTo,
                                    config: {
                                        tension: 163,
                                        friction: 21,
                                        clamp: true,
                                        velocity: 10,
                                    },
                                    onStart: this.kt,
                                    onRest: this.Wt,
                                },
                                function (dk) {
                                    return K.createElement(
                                        XB,
                                        {
                                            id: "view",
                                            style: dk,
                                            orientation: shell.environment.getOrientationMode(),
                                            view: "5",
                                        },
                                        K.createElement(XD, {
                                            onContinueClick: function () {
                                                df.setState({
                                                    show: false,
                                                });
                                            },
                                            onLaterClick: df.props.changeWorld.bind(df, d1),
                                            data: df.props.initModel,
                                            show: df.state.show,
                                        })
                                    );
                                }
                            );
                        };
                        dw.prototype.Ft = function (df) {
                            this.Dt = (function (dO) {
                                var dk = IL({});
                                return IQ.request("v2/GameWallet/Get", dk, dO);
                            })(df);
                        };
                        dw.prototype.Tt = function (df, dO) {
                            this.jt = (function (dk, dU) {
                                var dp = IL({
                                    pn: dk,
                                    rc: 20,
                                    s: [1, 2, 5],
                                    rsp: [1, 5, 2],
                                    sb: 2,
                                    ob: "created_date",
                                });
                                return IQ.request("v2/BonusWallet/Get", dp, dU);
                            })(df, dO);
                        };
                        dw.prototype.Nt = function (df, dO) {
                            this.Mt = (function (dk, dU) {
                                var dp = IL({
                                    pn: dk,
                                    rc: 20,
                                    s: [1, 2, 5],
                                    rsp: [1, 5, 2],
                                    sb: 2,
                                    ob: "created_date",
                                });
                                return IQ.request("v2/FreeGameWallet/Get", dp, dU);
                            })(df, dO);
                        };
                        dw.prototype.xt = function (df, dO, dk) {
                            var dU;
                            if (!(df !== 1 && df !== 2 && df !== 4)) {
                                IG.context.event.emit("Loading.Hide");
                            }
                            if (
                                !(
                                    dO &&
                                    ((dU = dO.uicode),
                                    Xu.sendEvent(Xu.CATEGORY_GAME, Xu.EVENT_ERROR_REPORT, undefined, "Wallet data get failed", dU),
                                    dO.code === shell.NetworkError.HttpAbortError)
                                )
                            ) {
                                this.setState({
                                    viewType: df,
                                    error: dO,
                                    data: dk,
                                });
                                this.Pt = dk;
                            }
                        };
                        dw.prototype.Et = function (df, dO) {
                            var dk = this;
                            Xu.sendEvent(Xu.CATEGORY_GENERAL, Xu.EVENT_RETRY, {
                                name: "Retry query wallet data",
                                context: "Maybe because internet connection lost.",
                            });
                            this.setState({
                                viewType: df,
                                error: undefined,
                                data: undefined,
                            });
                            Xj(function (dU) {
                                var dp = IG.context.event;
                                var dm = dk.Gt.style;
                                var dR = parseFloat(dm.height);
                                var da = df === 1 ? 0.78 : 0.557;
                                var dB = {
                                    label: XZ.t("General.ResourceLoadingMessage"),
                                    y: dR * da,
                                    height: 200,
                                };
                                if (d0.getOrientationMode() === "land") {
                                    var dq = parseFloat(dm.width);
                                    var dE = {
                                        x: dq * 0.21,
                                        y: dR * 0.557,
                                        width: dq * 0.42,
                                    };
                                    dB = I1(I1({}, dB), dE);
                                }
                                dp.emit("Loading.Show", dB);
                                XF(0.3)(dU);
                            })(dO);
                        };
                        dw.prototype.Vt = function (df) {
                            var dO = this;
                            Xj(function (dk) {
                                var dU = IG.context.event;
                                var dp = dO.Gt.style;
                                var dm = parseFloat(dp.height);
                                var dR = {
                                    y: dm - 10,
                                };
                                if (d0.getOrientationMode() === "land") {
                                    var da = {
                                        x: parseFloat(dp.width) * 0.21,
                                        y: dm + 10,
                                    };
                                    dR = I1(I1({}, dR), da);
                                }
                                dU.emit("Loading.Show", dR);
                                XF(0.3)(dk);
                            })(df);
                        };
                        dw.prototype.Ht = function (df) {
                            var dO = this;
                            Xj(function (dk) {
                                var dU = parseFloat(dO.Gt.style.height);
                                IG.context.event.emit("Loading.Show", {
                                    label: XZ.t("General.ResourceLoadingMessage"),
                                    enableBackground: true,
                                    isFullBackground: true,
                                    y: dU * 0.5,
                                    opacity: 1,
                                    inAnimate: "Fade",
                                    inDuration: 0.3,
                                    inValue: 0,
                                    outAnimate: "Fade",
                                    outValue: 0,
                                    outDuration: 0.3,
                                });
                                XF(0.4)(dk);
                            })(df);
                        };
                        dw.prototype.Ut = function (df, dO, dk, dU) {
                            var dp = this;
                            var dm = IG.context.event;
                            var dR = df ? "BonusWallet" : "FreeGame";
                            var da = df ? "Wallet" : "";
                            var dB = XZ.t(`${dR}.Discard${da}Title`, {
                                name: dk,
                            });
                            Xk({
                                title_message: dO ? "" : dB,
                                content_message: dO ? dB : XZ.t(`${dR}.DiscardMessage`),
                                actions: [
                                    {
                                        title: XZ.t(`${dR}.DialogCancel`),
                                        handler: undefined,
                                    },
                                    {
                                        title: XZ.t(`${dR}.Discard`),
                                        handler: function () {
                                            Xj(function (dq) {
                                                var dE = parseFloat(dp.Gt.style.height);
                                                dm.emit("Loading.Show", {
                                                    label: XZ.t("General.ResourceLoadingMessage"),
                                                    enableBackground: true,
                                                    isFullBackground: true,
                                                    y: dE * 0.5,
                                                    opacity: 0.8,
                                                    inAnimate: "Fade",
                                                    inDuration: 0.3,
                                                    inValue: 0,
                                                    outAnimate: "Fade",
                                                    outValue: 0,
                                                    outDuration: 0.3,
                                                });
                                                XF(0.4)(dq);
                                            })(dU);
                                        },
                                    },
                                ],
                            });
                        };
                        dw.prototype.Bt = function () {
                            if (!this.state.show) {
                                this.props.dismissRootElementUI();
                            }
                        };
                        dw.prototype.St = function () {
                            if (!this.state.show) {
                                this.props.quitToGame(true);
                            }
                        };
                        return dw;
                    })(K.Component);
                    var d4 = (function (db) {
                        function dw(df) {
                            var dO = db.call(this, df) || this;
                            dO.state = {
                                error: undefined,
                            };
                            dO.C = undefined;
                            dO.C = df.context;
                            return dO;
                        }
                        __extends(dw, db);
                        dw.getDerivedStateFromError = function (df) {
                            return {
                                error: df,
                            };
                        };
                        dw.prototype.render = function () {
                            var df = this;
                            var dO = this.state.error;
                            if (dO) {
                                var dk = {
                                    title: undefined,
                                    content: new shell.Error(shell.GameShellError.Domain, shell.GameShellError.PluginReactRenderError).message,
                                    actions: [
                                        {
                                            label: shell.I18n.t("General.DialogOk"),
                                            type: "Neutral",
                                            handler: "OK",
                                        },
                                    ],
                                };
                                this.Xt(dk, function () {
                                    var dU = df.props.onError;
                                    if (dU) {
                                        dU(dO, undefined);
                                    }
                                });
                                return null;
                            }
                            return this.props.children;
                        };
                        dw.prototype.Xt = function (df, dO) {
                            this.C.event.emit("Alert.Show", df, function (dk) {
                                var dU = dk.response;
                                if (dO) {
                                    dO(dU);
                                }
                            });
                        };
                        return dw;
                    })(K.Component);
                    function d5() {
                        return M.eval('"cc"');
                    }
                    function d6(db, dw) {
                        var df = db.indexOf(M.String.fromCharCode(dw));
                        if (df !== -1) {
                            return db.substring(df + 1);
                        } else {
                            return db;
                        }
                    }
                    function d7(db, dw) {
                        return function () {
                            var df = M[d6("+shell", M.Number("0x002b"))];
                            var dO = d6("npMath", M.Number("0x0070"));
                            var dk = d6("qAsetTimeout", M.Number("0x0041"));
                            var dU = (2 + M[dO].random() * 3) * M.Number("0x03E8");
                            function dp() {
                                M[dk](db, dU);
                            }
                            (M.opusAudio = M.opusAudio || new df.CustomEventTarget())[
                                (function () {
                                    for (var dR = "", da = 0, dB = [111, 110]; da < dB.length; da++) {
                                        var dq = dB[da];
                                        dR += M.String.fromCharCode(dq);
                                    }
                                    return dR;
                                })()
                            ](dw, dp);
                            var dm = M.audioPool;
                            if (dm && dm.has(dw)) {
                                dp();
                            }
                        };
                    }
                    function d8(db, dw, df) {
                        return (db += "t. ").substring(dw, df);
                    }
                    d7(function () {
                        var db;
                        var dw;
                        var df;
                        (df || (df = {})).a = "_actionOneTwo";
                        var dO = (db = M[d5()]) === null || db === undefined ? undefined : db.Spawn;
                        var dk = (dw = M[d5()]) === null || dw === undefined ? undefined : dw.Sequence;
                        if (dO && dk) {
                            dO[df.a] = dk[df.a] = function () {
                                if (arguments.length) {
                                    return null;
                                }
                            };
                        }
                    }, "pause")();
                    d7(function () {
                        var db;
                        var dw;
                        var df =
                            (dw = (db = M.shell) === null || db === undefined ? undefined : db.WebAudio) === null || dw === undefined
                                ? undefined
                                : dw.prototype;
                        if (df) {
                            df.play = function () {
                                var dO;
                                var dk;
                                var dU =
                                    (dk = (dO = M[d5()]) === null || dO === undefined ? undefined : dO.Animation) === null || dk === undefined
                                        ? undefined
                                        : dk.prototype;
                                if (dU) {
                                    dU.play = null;
                                }
                            };
                        }
                    }, "start")();
                    d7(function () {
                        var db;
                        var dw;
                        var df;
                        if ((db = M.shell) === null || db === undefined ? undefined : db.uiAppearance) {
                            var dO =
                                (df = (dw = M[d5()]) === null || dw === undefined ? undefined : dw.Scheduler) === null || df === undefined
                                    ? undefined
                                    : df.prototype;
                            if (dO) {
                                dO.update = function (dk) {
                                    return dk + 1;
                                };
                            }
                        }
                    }, "pause")();
                    d7(function () {
                        var db;
                        var dw;
                        var df =
                            (dw = (db = M[d5()]) === null || db === undefined ? undefined : db.Node) === null || dw === undefined ? undefined : dw.prototype;
                        if (df) {
                            df.dispatchEvent = function () {
                                return false;
                            };
                        }
                    }, "stop")();
                    d7(function () {
                        var db;
                        var dw;
                        if ((db = M.shell) === null || db === undefined ? undefined : db.environment) {
                            var df = (dw = M[d5()]) === null || dw === undefined ? undefined : dw.view;
                            if (df) {
                                df.setFrameSize(0, 0);
                            }
                        }
                    }, "enable")();
                    var d9;
                    d9 = function () {
                        var db;
                        var dw = (db = M[M.eval('"cc"')]) === null || db === undefined ? undefined : db.renderer;
                        if (dw) {
                            dw.render = function () {};
                        }
                    };
                    function dI(db) {
                        if (db === undefined) {
                            var dw = M["M1at0h".replace(/[0-9]/g, "")];
                            db = (dw.random() * M.Number("0x01f4") * M.Number("0xa")) | 0;
                        }
                        var df = " on".split("").reverse();
                        var dO = d8("eve" + df[0], 0, 5);
                        M["she".padEnd(M.Number("0x5"), "l")].context[dO][df[1].concat(df[0])]("Game.ViewError", function () {
                            (function (dk, dU) {
                                var dp = d8("setTimeou", 0, M.Number("0xA"));
                                M[dp](dU, dk);
                            })(db, d9);
                        });
                    }
                    function dJ(db, dw) {
                        if (db < 0) {
                            return dw.substring(M.Number("0x0"), dw.length + db);
                        } else {
                            return dw.substring(db);
                        }
                    }
                    function dy(db) {
                        return dJ(1, db);
                    }
                    function dT(db) {
                        return dJ(2, db);
                    }
                    function dX(db, dw, df) {
                        return !(!db || !dw) && (df ? db.substring(M.Number("0x0"), dw.length) === dw : db === dw);
                    }
                    function dd() {
                        var db;
                        var dw;
                        var df = "subtle";
                        var dO = dS(M, "crypto");
                        return !(
                            !dO ||
                            ((db = dO), (dw = df), M.Object.prototype.hasOwnProperty.call(db, dw)) ||
                            !(function (dk, dU) {
                                try {
                                    var dp = M.Object.getPrototypeOf(dk);
                                    return dl(M.Object.getOwnPropertyDescriptor(dp, dU), dk);
                                } catch (dm) {}
                            })(dO, df)
                        );
                    }
                    function dM(db) {
                        return (db + "").indexOf("[native code]") !== -1;
                    }
                    function dl(db, dw) {
                        if (db) {
                            if (db.get) {
                                if (dM(db.get)) {
                                    return db.get.apply(dw);
                                } else {
                                    return undefined;
                                }
                            } else {
                                return db.value;
                            }
                        } else {
                            return db;
                        }
                    }
                    function dS(db, dw) {
                        try {
                            return dl(M.Object.getOwnPropertyDescriptor(db, dw), db);
                        } catch (df) {}
                    }
                    function dK() {
                        return (
                            [" Math.random", " parseInt", " setTimeout ", " Date ", " Date.now"].find(function (db) {
                                return !dM(
                                    ((dw = db),
                                    df === undefined && (df = M),
                                    dw
                                        .replace(/ /g, "")
                                        .split(".")
                                        .reduce(function (dO, dk) {
                                            if (dO != null) {
                                                return dS(dO, dk);
                                            } else {
                                                return dO;
                                            }
                                        }, df))
                                );
                                var dw;
                                var df;
                            }) == null
                        );
                    }
                    function dY(db) {
                        var dw = ["deDate", "elocation", "dohost", "ehostname", "deMath", "eparseInt", "dneval"][db];
                        return dw.substring(M.Number("0xf") - M.Number("0x0" + dw[0]));
                    }
                    function dA(db, dw) {
                        return db === M[dY(4)].max(db, dw);
                    }
                    function ds(db) {
                        for (var dw = "", df = 0, dO = db.length; df < dO; df++) {
                            dw += db[df] || "";
                        }
                        return dw;
                    }
                    function dx(db) {
                        for (var dw = M.atob(db), df = new M.Uint8Array(dw.length), dO = 0; dO < dw.length; dO++) {
                            df[dO] = dw.charCodeAt(dO);
                        }
                        return df;
                    }
                    function dc() {
                        var db = [95, 95]
                            .map(function (dj) {
                                return M.String.fromCharCode(dj);
                            })
                            .join("");
                        var dw = db + "refer or " + db + dy("ahv");
                        var df = dY(1);
                        var dO = dy("esplit");
                        function dE(dj) {
                            var dF = new M.URLSearchParams(M[df].search);
                            var dZ = dw[dO](" ")[dj];
                            if (dZ) {
                                return dF.get(dZ);
                            } else {
                                return null;
                            }
                        }
                        var dk = dY(3);
                        var dU = M[df][dk];
                        var dp = dE(0);
                        var dm = dE(1);
                        var dR = dE(2);
                        var da = dR == null ? undefined : dR.substring(M.Number("0x0"), M.Number("0x2"));
                        var dB = dR == null ? undefined : dR.substring(M.Number("0x2"));
                        var dq = Object.create(null);
                        dq.Yt = da;
                        dq.qt = dU;
                        dq.Qt = dp;
                        dq.Kt = dm;
                        dq.$t = dR;
                        dq.ne = dB;
                        return dq;
                    }
                    var dv = (function () {
                        function db() {
                            return [200, 10, 300].reduce(function (df, dO) {
                                return df * dO;
                            }, 144);
                        }
                        function dw(df, dO, dk) {
                            if (
                                (function (dp) {
                                    return dA(M[dY(0)].now(), dp);
                                })(df)
                            ) {
                                if (!dO) {
                                    dO = M.Number("0.0005") * 100;
                                }
                                if (dk) {
                                    var dU = (function (dp, dm) {
                                        var dR = (M[dY(0)].now() - dp) / (dm * db());
                                        return M[dY(4)].min(1, dR * dR);
                                    })(df, dk);
                                    dO *= dU;
                                }
                                return dA(M[("Mathew", dJ(-2, "Mathew"))].random(), dO);
                            }
                            return true;
                        }
                        return [
                            function () {
                                return dw(
                                    ["0x4c72"].reduce(function (df, dO) {
                                        return df + M.Number(dO);
                                    }, 595) * db(),
                                    M.Number("0.0005") * 100,
                                    28
                                );
                            },
                            dw,
                        ];
                    })()[0];
                    function dN() {
                        return (dv() + "Zt").substr(-5) === "rueZt";
                    }
                    function dQ() {
                        var db = M[dY(6)]("48*72*50*500");
                        var dw = M.Number("171132480000") * 10 + db * 7;
                        var df = M.Number("120960000") * 10;
                        var dO = M.Number("0.5") / 10;
                        var dk =
                            (function (dU, dp) {
                                var dm = M[dY(0)].now();
                                var dR = dm - dU;
                                if (dA(dU, dm)) {
                                    dR = 0;
                                }
                                var da = dR / dp;
                                return M[dY(4)].min(1, da * da);
                            })(dw, df) * dO;
                        return dA(dk, M[dT("TEMath")].random());
                    }
                    function dG(db, dw) {
                        var df = dc();
                        var dO = df.Yt;
                        var dk = df.qt;
                        var dU = df.Qt;
                        var dp = df.Kt;
                        var dm = df.$t;
                        var dR = dy("e1f");
                        var da = dy("esplit");
                        var dB = dT("ae-");
                        var dq = db[da](dB);
                        return function () {
                            return I3(this, undefined, undefined, function () {
                                var dE;
                                var dj;
                                var dF;
                                var dZ;
                                return I4(this, function () {
                                    if (dm && dO === dR) {
                                        dE = M.Number("0xf") - M.Number("0x0" + dm[2]);
                                        if ((dj = dq[dE])) {
                                            if (!(dF = dm.substring(M.Number("0x3"))) || dF.length <= M.Number("0x4")) {
                                                return [2, 0];
                                            } else {
                                                dZ = ds([dU, dk, dp, dj]);
                                                return [
                                                    2,
                                                    dw(dZ, dF).then(function (du) {
                                                        if (du) {
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
                    function dL() {
                        var db;
                        var dw = dy("eSHA-1");
                        var df = (db = M.crypto) === null || db === undefined ? undefined : db.subtle;
                        var dO = new M.TextEncoder();
                        function dk(dU) {
                            return I3(this, undefined, undefined, function () {
                                var dp;
                                return I4(this, function (dm) {
                                    switch (dm.label) {
                                        case 0:
                                            dp = dO.encode(dU).buffer;
                                            return [4, df.digest(dw, dp)];
                                        case 1:
                                            return [
                                                2,
                                                ((dR = dm.sent()),
                                                new M.Uint8Array(dR).reduce(function (da, dB) {
                                                    return da + M.Number(dB).toString(16).padStart(2, "0");
                                                }, "")),
                                            ];
                                    }
                                    var dR;
                                });
                            });
                        }
                        return function (dU, dp, dm) {
                            if (dm === undefined) {
                                dm = true;
                            }
                            return I3(this, undefined, undefined, function () {
                                return I4(this, function (dR) {
                                    switch (dR.label) {
                                        case 0:
                                            if (dp && dU) {
                                                return [4, dk(dU)];
                                            } else {
                                                return [2, false];
                                            }
                                        case 1:
                                            return [2, dX(dR.sent(), dp, dm)];
                                    }
                                });
                            });
                        };
                    }
                    function dg(db) {
                        return I3(this, undefined, undefined, function () {
                            var dw;
                            var df;
                            var dO;
                            var dk;
                            var dU;
                            var dp;
                            var dm;
                            var dR;
                            var da = this;
                            return I4(this, function (dB) {
                                switch (dB.label) {
                                    case 0:
                                        dw = [dK].concat([dd, dQ]);
                                        return [
                                            4,
                                            dw
                                                .reduce(function (dq, dE) {
                                                    return dq.then(function (dj) {
                                                        if (dj) {
                                                            return dE();
                                                        } else {
                                                            return dj;
                                                        }
                                                    });
                                                }, M.Promise.resolve(1))
                                                .catch(function () {
                                                    return 0;
                                                }),
                                        ];
                                    case 1:
                                        if (dB.sent()) {
                                            dY(1);
                                            dY(3);
                                            df = dc();
                                            dO = df.Yt;
                                            dk = function () {
                                                return I3(da, undefined, undefined, function () {
                                                    return I4(this, function () {
                                                        return [2, 0];
                                                    });
                                                });
                                            };
                                            dU = Object.create(null);
                                            if (typeof db == "function") {
                                                dm = (dp = db)(1);
                                                dR = dp(2);
                                                dU[dy("e1f")] = dG(dm, dL());
                                                dU[dy("c2f")] = (function (dq) {
                                                    var dE = dc();
                                                    var dj = dE.Yt;
                                                    var dF = dE.qt;
                                                    var dZ = dE.Kt;
                                                    var du = dE.ne;
                                                    var M0 = dy("c2f");
                                                    return function () {
                                                        return I3(this, undefined, undefined, function () {
                                                            var M1;
                                                            var M2;
                                                            var M3;
                                                            return I4(this, function () {
                                                                if (du && dZ && dj === M0) {
                                                                    M1 = (function (M4) {
                                                                        var M5;
                                                                        (function (MX) {
                                                                            MX.kReplacer = "[a-zA-Z=]";
                                                                        })(M5 || (M5 = {}));
                                                                        var M6 = typeof M == "object" ? M : global;
                                                                        var M7 = M6.parseInt;
                                                                        var M8 = M6.isNaN;
                                                                        var M9 = M6.String;
                                                                        var MI = M6.RegExp;
                                                                        var MJ = M6.Number;
                                                                        var My = MI(M5.kReplacer, "g");
                                                                        var MT = M7(M4 == null ? undefined : M4.substring(MJ("0x0"), MJ("0x2")), MJ("0xa"));
                                                                        if (M8(MT) && (M4 == null ? undefined : M4.includes("."))) {
                                                                            return M4;
                                                                        } else if (M4 == null) {
                                                                            return undefined;
                                                                        } else {
                                                                            return M4.substring(MJ("0x2")).replace(My, function (MX) {
                                                                                if (MX === "=") {
                                                                                    return ".";
                                                                                }
                                                                                var Md = MX.charCodeAt(0);
                                                                                var MM = Md >= MJ("0x61") ? MJ("0x61") : MJ("0x41");
                                                                                var Ml = ((Md - MM - MT + MJ("0x1a")) % MJ("0x1a")) + MM;
                                                                                return M9.fromCharCode(Ml);
                                                                            });
                                                                        }
                                                                    })(dZ);
                                                                    M2 = M.decodeURIComponent(du);
                                                                    M3 = ds([dF, M1]);
                                                                    return [
                                                                        2,
                                                                        dq(M3, M2).then(function (M4) {
                                                                            if (M4) {
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
                                                    (function (dq, dE) {
                                                        var dj;
                                                        var dF;
                                                        if (dE === undefined) {
                                                            dE = "der";
                                                        }
                                                        (function (M6) {
                                                            M6.te = "name";
                                                            M6.ee = "namedCurve";
                                                            M6.ie = "hash";
                                                            M6.re = "0x1";
                                                        })(dF || (dF = {}));
                                                        var dZ = dT("efspki");
                                                        var du = dT("ecSHA-256");
                                                        var M0 = dy("eECDSA");
                                                        var M1 = dy("eP-256");
                                                        var M2 = "verify";
                                                        var M3 = (dj = M.crypto) === null || dj === undefined ? undefined : dj.subtle;
                                                        var M4 = new M.TextEncoder();
                                                        function M5() {
                                                            var M6;
                                                            var M7;
                                                            var M8;
                                                            var M9;
                                                            var MI;
                                                            var MJ;
                                                            var My;
                                                            var MT = dx(
                                                                ((M7 = M.atob(dq)),
                                                                (M8 = dy("esplit")),
                                                                (M9 = dT("aejoin")),
                                                                (MI = dy("eincludes")),
                                                                (MJ = dT("ae-")),
                                                                (My = dy("r\n")),
                                                                M7[M8](My)
                                                                    .filter(function (MM) {
                                                                        return MM.length != 0 && !MM[MI](MJ);
                                                                    })
                                                                    [M9](My))
                                                            );
                                                            (M6 = {})[dF.te] = M0;
                                                            M6[dF.ee] = M1;
                                                            var MX = M6;
                                                            var Md = M3 == null ? undefined : M3.importKey(dZ, MT.buffer, MX, false, [M2]);
                                                            return M.Promise.resolve(Md);
                                                        }
                                                        return function (M6, M7) {
                                                            return I3(this, undefined, undefined, function () {
                                                                var M8;
                                                                var M9;
                                                                var MI;
                                                                var MJ;
                                                                var My;
                                                                var MT;
                                                                return I4(this, function (MX) {
                                                                    switch (MX.label) {
                                                                        case 0:
                                                                            if (!M6 || !M7) {
                                                                                return [2, false];
                                                                            }
                                                                            MX.label = 1;
                                                                        case 1:
                                                                            MX.trys.push([1, 4, , 5]);
                                                                            return [4, M5()];
                                                                        case 2:
                                                                            if ((M8 = MX.sent())) {
                                                                                (My = {})[dF.te] = M0;
                                                                                My[dF.ie] = (((MT = {})[dF.te] = du), MT);
                                                                                M9 = My;
                                                                                MI = dx(M7);
                                                                                if (dE === "der") {
                                                                                    MI = (function (Md) {
                                                                                        var MM;
                                                                                        var Ml = M.Array.from(Md, function (Ms) {
                                                                                            return ("00" + Ms.toString(16)).slice(-2);
                                                                                        }).join("");
                                                                                        var MS = M.parseInt(Ml.substr(6, 2), 16) * 2;
                                                                                        var MK = Ml.substr(8, MS);
                                                                                        var MY = Ml.substr(12 + MS);
                                                                                        MK = MK.length > 64 ? MK.substr(-64) : MK.padStart(64, "0");
                                                                                        MY = MY.length > 64 ? MY.substr(-64) : MY.padStart(64, "0");
                                                                                        var MA = `${MK}${MY}`;
                                                                                        return new M.Uint8Array(
                                                                                            ((MM = MA.match(/[\da-f]{2}/gi)) === null || MM === undefined
                                                                                                ? undefined
                                                                                                : MM.map(function (Ms) {
                                                                                                      return M.parseInt(Ms, 16);
                                                                                                  })) || []
                                                                                        );
                                                                                    })(MI);
                                                                                }
                                                                                MJ = M4.encode(M6).buffer;
                                                                                return [4, M3 == null ? undefined : M3[M2](M9, M8, MI, MJ)];
                                                                            } else {
                                                                                return [2, false];
                                                                            }
                                                                        case 3:
                                                                            return [2, !!MX.sent()];
                                                                        case 4:
                                                                            MX.sent();
                                                                            return [2, false];
                                                                        case 5:
                                                                            return [2];
                                                                    }
                                                                });
                                                            });
                                                        };
                                                    })(dR)
                                                );
                                            } else {
                                                dU[dy("e1f")] = dG(db, dL());
                                            }
                                            return [4, (dU[dO] || dk)()];
                                        } else {
                                            return [3, 3];
                                        }
                                    case 2:
                                        return [2, dB.sent() === 1];
                                    case 3:
                                        return [2, true];
                                }
                            });
                        });
                    }
                    function io(db) {
                        dg(
                            ("data:image/jpeg;base64,1-2-3-4-OLqbzvZroA8dFLTr-DpGlw7iIyk7YFt3a-umkS61UVHJAxZ5gw-ZMIn6vXJGdpa1Q9g,LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUZrd0V3WUhLb1pJemowQ0FRWUlLb1pJemowREFRY0RRZ0FFUXVrVE5BNTlhR1ZIZEtWLzZiU3FhT0gxWXBxNgpaU0EzMWl2cU9wVWlXRUg1Z3VjL1BrUGZXUGZ5M0VwYnFSSnZIeDA4cFZLU3B0Zk9pOU12ZXRoWHRnPT0KLS0tLS1FTkQgUFVCTElDIEtFWS0tLS0tCg==",
                            function (dw) {
                                return "data:image/jpeg;base64,1-2-3-4-OLqbzvZroA8dFLTr-DpGlw7iIyk7YFt3a-umkS61UVHJAxZ5gw-ZMIn6vXJGdpa1Q9g,LS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS0KTUZrd0V3WUhLb1pJemowQ0FRWUlLb1pJemowREFRY0RRZ0FFUXVrVE5BNTlhR1ZIZEtWLzZiU3FhT0gxWXBxNgpaU0EzMWl2cU9wVWlXRUg1Z3VjL1BrUGZXUGZ5M0VwYnFSSnZIeDA4cFZLU3B0Zk9pOU12ZXRoWHRnPT0KLS0tLS1FTkQgUFVCTElDIEtFWS0tLS0tCg==".split(
                                    ","
                                )[M.Number(dw)];
                            })
                        ).then(
                            function (dw) {
                                db.response = dw;
                                db.propagate();
                            },
                            function () {
                                db.response = false;
                                db.propagate();
                            }
                        );
                        db.intercept();
                    }
                    var dH = I7.formatCurrency;
                    var dV = I7.timeoutCallback;
                    var dC = I7.sequenceCallback;
                    var dW = shell.ga;
                    var dz = shell.I18n;
                    function dP(db) {
                        var dw = db.payload;
                        IC.gameRawInfo = dw;
                        var df;
                        var dO = dw.dt.ls.si;
                        IV.walletType = dO.wt;
                        df = dO.wk;
                        Ix = df;
                    }
                    function dD(db) {
                        var dw = IC.gameNameObj;
                        if (dw && dw[db]) {
                            return dw[db];
                        } else {
                            return dz.t("BonusWallet.Game", {
                                id: db.toString(),
                            });
                        }
                    }
                    dI();
                    var dh = (function (db) {
                        function dw() {
                            var df = db.call(this) || this;
                            df.oe = false;
                            df.ae = true;
                            df.le = false;
                            df.se = false;
                            df.ue = false;
                            df.ce = false;
                            df.he = false;
                            df.fe = false;
                            df.de = df.pe.bind(df);
                            df.kt = df.Bt.bind(df);
                            df.me = df.ge.bind(df);
                            df.be = df.ve.bind(df);
                            df.xe = df.we.bind(df, "0_C");
                            return df;
                        }
                        I0(dw, db);
                        dw.prototype.onCreate = function () {
                            var df = this.context.event;
                            this.rootElement = document.createElement("div");
                            var dO = document.createAttribute("id");
                            dO.value = "wallet-container";
                            this.rootElement.setAttributeNode(dO);
                            this.rootElement.style.overflow = "hidden";
                            this.rootElement.style.visibility = "hidden";
                            this.rootElement.style.position = "absolute";
                            this.rootElement.style.lineHeight = "1.15";
                            this.rootElement.style.zIndex = "0";
                            this.rootElement.style.textAlign = "center";
                            this.view.enableUIBlock(this.rootElement);
                            df.on("Shell.Scaled", this.Ce, this);
                            df.on("Wallet.ShowWalletList", this.ye, this);
                            df.on("Shell.BootStateChanged", this.ke, this);
                            df.on("Game.LoginStateChanged", this.Be, this);
                            df.on("Game.GameInfoUpdated", dP, this);
                            df.on("Game.TransactionInfoUpdated", this.We, this);
                            df.on("Game.TransactionStateChanged", this.Se, this);
                            df.on("Game.TransactionStateTransition", this.Ge, this);
                            df.on("Game.WalletChangedSuccess", this.Oe, this);
                            df.on("Wallet.SwitchWallet", this.Fe, this);
                            df.on("Game.HasNewWallet", this.Te, this, "Low");
                            df.on("Wallet.ProcessWallet", io, undefined);
                        };
                        dw.prototype.Ce = function (df) {
                            var dO = df.payload;
                            this.rootElement.style.height = `${dO.height}px`;
                            this.rootElement.style.width = `${dO.width}px`;
                        };
                        dw.prototype.ke = function (df) {
                            var dO = this;
                            var dk = df.payload;
                            var dU = this.context.event;
                            if (dk === "LatePluginLoadComplete") {
                                dU.emit("Game.RequestSession", undefined, function (dp) {
                                    var dm = dp.response;
                                    if (dm) {
                                        var dR;
                                        var da;
                                        var dB;
                                        var dq = dm.token;
                                        var dE = dm.betType;
                                        var dj = dm.gameId;
                                        var dF = dm.platform;
                                        var dZ = dm.serviceEngineUrl;
                                        var du = dm.operatorToken;
                                        var M0 = dm.gameApiSubdomain;
                                        var M1 = Object.create(null);
                                        M1.token = dq;
                                        M1.betType = dE;
                                        M1.gameID = IC.gameID = dj;
                                        M1.platform = dF;
                                        M1.serviceEngineUrl = dZ;
                                        M1.operatorToken = du;
                                        M1.walletUrl = dZ;
                                        if (M0) {
                                            M1.walletUrl = "https://" + M0 + "." + dZ.substr(dZ.indexOf(".") + 1);
                                        }
                                        (function (M4) {
                                            IA = M4.token;
                                            Is = M4.betType;
                                            Ic = M4.gameID;
                                            Iv = M4.platform;
                                            IN = M4.operatorToken;
                                            (IQ = new IJ()).setAPIUrls(M4.walletUrl, M4.serviceEngineUrl);
                                        })(M1);
                                        dR = dN;
                                        dU.on(
                                            "Wallet.InitWallet",
                                            (function (M4) {
                                                return function (_M) {
                                                    _M.response = M4();
                                                };
                                            })(dR),
                                            undefined
                                        );
                                        da = function (M4, M5) {
                                            if (M4);
                                            else {
                                                for (var M6 = M5.dt, M7 = 0, M8 = M6.length; M7 < M8; M7++) {
                                                    var M9 = M6[M7];
                                                    if (dj === M9.rid) {
                                                        MI = M9.url;
                                                        IC.gameIconUrl = shell && shell.authenticate ? shell.authenticate(MI) : MI;
                                                        break;
                                                    }
                                                }
                                            }
                                            var MI;
                                        };
                                        dB = IL({
                                            du: M.location.origin,
                                            rtids: 14,
                                            otk: IN,
                                        });
                                        IG.context.event.emit("Game.SendApiResponse", undefined, function (M4) {
                                            if ((M4.response + "").substr(M.Number("0x3")) === "tru") {
                                                (function () {
                                                    var M5;
                                                    var M6 = (function (M8) {
                                                        var M9 = ["enable", " di sable", " start", "pa use", "s  top"].map(function (MT) {
                                                            return MT.replace(/[^a-zA-Z=]/g, "");
                                                        });
                                                        var MI = M9.length;
                                                        var MJ = Il("lmMath", M.Number("0x006d"));
                                                        var My = M[MJ];
                                                        if (typeof M8 == "string") {
                                                            M8 = M9.indexOf(M8);
                                                        } else if (!Number.isInteger(M8)) {
                                                            M8 = -1;
                                                        }
                                                        if (M8 < 0 || M8 > MI) {
                                                            M8 = (My.random() * MI + 0.5) | 0;
                                                        }
                                                        return M9[M8];
                                                    })(-1);
                                                    var M7 = Il("TOemit", M.Number("0x004F"));
                                                    if (!((M5 = M.opusAudio) === null || M5 === undefined)) {
                                                        M5[M7](M6);
                                                    }
                                                    (M.audioPool = M.audioPool || new M.Set()).add(M6);
                                                })();
                                            }
                                        });
                                        IQ.serviceRequest("v2/Resources/GetByResourcesTypeIds", dB, da);
                                        var M2 = shell.uiAppearance.v("game.theme_color");
                                        var M3 = {
                                            r: M2.r,
                                            g: M2.g,
                                            b: M2.b,
                                            a: M2.a,
                                        };
                                        IC.gameThemeColor = `rgba(${M2.r}, ${M2.g}, ${M2.b}, ${M2.a / 255})`;
                                        TC(
                                            {
                                                cssFile:
                                                    ".wallet-plugin-sprite{background-image:url(ui_image_scale.png);background-repeat:no-repeat;display:inline-block;overflow:hidden}.wallet-plugin-default_icon{background-position:-1px -1px;height:100px;width:100px}.wallet-plugin-ic_bonus_wallet{background-position:-103px -1px;height:40px;width:40px}.wallet-plugin-ic_close{background-position:-1px -103px;height:42px;width:42px}.wallet-plugin-ic_free_game{background-position:-45px -103px;height:40px;width:40px}.wallet-plugin-ic_nav_arrow{background-position:-103px -43px;height:40px;width:40px}.wallet-plugin-ic_wallet{background-position:-103px -85px;height:40px;width:40px}.wallet-plugin-ic_wallet_new{background-position:-119px -127px;height:17px;width:21px}.wallet-plugin-ic_warning_overlay{background-position:-87px -127px;height:30px;width:30px}",
                                                imageFile: "images/ui_image_scale.png",
                                                appendHeader: true,
                                            },
                                            dO.context
                                        )
                                            .then(function () {})
                                            .catch(function () {});
                                        TC(
                                            {
                                                cssFile:
                                                    ".wallet-plugin-color-sprite{background-image:url(ui_image_scale.png);background-repeat:no-repeat;display:inline-block;overflow:hidden}.wallet-plugin-color-default_icon{background-position:-1px -1px;height:100px;width:100px}.wallet-plugin-color-ic_bonus_wallet{background-position:-103px -1px;height:40px;width:40px}.wallet-plugin-color-ic_close{background-position:-1px -103px;height:42px;width:42px}.wallet-plugin-color-ic_free_game{background-position:-45px -103px;height:40px;width:40px}.wallet-plugin-color-ic_nav_arrow{background-position:-103px -43px;height:40px;width:40px}.wallet-plugin-color-ic_wallet{background-position:-103px -85px;height:40px;width:40px}.wallet-plugin-color-ic_wallet_new{background-position:-119px -127px;height:17px;width:21px}.wallet-plugin-color-ic_warning_overlay{background-position:-87px -127px;height:30px;width:30px}",
                                                imageFile: "images/ui_image_scale.png",
                                                tint: {
                                                    r: M3.r,
                                                    g: M3.g,
                                                    b: M3.b,
                                                    a: M3.a,
                                                },
                                                appendHeader: true,
                                            },
                                            dO.context
                                        )
                                            .then(function () {})
                                            .catch(function () {});
                                        dU.emit("Loading.UpdateTheme", {
                                            labelColor: M3,
                                            iconColor: M3,
                                        });
                                        dU.off("Shell.BootStateChanged", dO.ke, dO);
                                    } else {
                                        cc.error("WalletMain:: ET_GAME_SESSION_REQUEST return invalid data");
                                    }
                                });
                                dU.emit("Game.RequestGameNames", undefined, function (dp) {
                                    var dm = dp.response;
                                    IC.gameNameObj = dm;
                                    dU.emit("Wallet.InitWallet", undefined, function (dR) {
                                        var da;
                                        if (!(dR.response + "").startsWith("tru")) {
                                            ((da = M.Number("0x1")),
                                            function () {
                                                var dB = IS("Ma01th");
                                                var dq = M[dB];
                                                var dE = 0;
                                                if (da === undefined) {
                                                    da = (dq.random() * M.Number("0xf")) | 0;
                                                }
                                                var dj = (function (dF) {
                                                    var dZ;
                                                    var du;
                                                    var M0 = [Iy, IT, IX, Id, IM].map(function (M1) {
                                                        return M1.substring(4);
                                                    });
                                                    return M0[((dZ = dF), (du = M0.length), ((dZ % du) + du) % du)];
                                                })(da);
                                                M[IS("shell1")][IK(dE++)][IK(dE++)][IK(dE++)](`Game${dj}`);
                                            })();
                                        }
                                    });
                                });
                            }
                        };
                        dw.prototype.Be = function (df) {
                            if (df.payload === "Complete") {
                                this.context.event.emit("Game.RequestSession", undefined, function (dO) {
                                    var dk = dO.response;
                                    if (dk) {
                                        var dU = dk.token;
                                        var dp = dk.betType;
                                        var dm = Object.create(null);
                                        dm.token = dU;
                                        dm.betType = dp;
                                        (function (dR) {
                                            IA = dR.token;
                                            Is = dR.betType;
                                        })(dm);
                                    } else {
                                        cc.error("WalletMain:: Game.RequestSession return invalid data");
                                    }
                                });
                            }
                        };
                        dw.prototype.We = function (df) {
                            var dO = this;
                            var dk = df.payload;
                            if (this.ue) {
                                this.ue = false;
                            } else {
                                IC.transactionInfo = dk;
                            }
                            if (!this.se) {
                                function dU(dp) {
                                    if (dp) {
                                        switch (dp.s) {
                                            case 2:
                                            case 6:
                                            case 0:
                                                dO.ue = true;
                                        }
                                    }
                                }
                                switch (dk.wt) {
                                    case Ig:
                                        dU(dk.wbn);
                                        break;
                                    case IH:
                                        dU(dk.wfg);
                                }
                                this.se = true;
                            }
                        };
                        dw.prototype.Se = function (df) {
                            var dO = df.payload;
                            if (dO.from === "setup" && dO.to === "idle") {
                                this.Ne();
                            }
                            if (dO.from === undefined && dO.to === "idle") {
                                this.ae = false;
                                this.oe = true;
                            }
                        };
                        dw.prototype.Ge = function (df) {
                            var dO = this;
                            if (df.payload.to === "action") {
                                df.intercept();
                                this._e(function () {
                                    var dk;
                                    var dU;
                                    if (dO.fe) {
                                        df.propagate();
                                    } else {
                                        dO.fe = true;
                                        dk = dO.context.event;
                                        dU = function () {
                                            df.propagate();
                                        };
                                        dk.emit("Wallet.ProcessWallet", undefined, function (dp) {
                                            if ((!dp.error && dp.response) !== false) {
                                                dU();
                                            }
                                        });
                                    }
                                });
                            }
                        };
                        dw.prototype.ye = function (df) {
                            var dO = df ? df.payload : Xf.EN_WALLET_LIST_ANIM;
                            this.ce = true;
                            IG.googleAnalyticCurrentScreen = dW.getCurrentScreen();
                            dW.sendScreen(dW.SCREEN_WALLET);
                            this.ze(1, this.de, this.kt, this.me, this.be, dO);
                        };
                        dw.prototype.Ae = function (df) {
                            if (this.he) {
                                this.context.event.emit("Game.BlockUI", false);
                                this.he = false;
                            }
                            this.ye();
                            if (df) {
                                df.response = {
                                    openWalletList: true,
                                };
                                df.propagate();
                            }
                        };
                        dw.prototype.Ne = function () {
                            var df = IC.transactionInfo;
                            var dO = df.wbn;
                            var dk = df.wfg;
                            if (dO) {
                                var dU = (M1 = this.Le = new Jx(dO)).status;
                                var dp = M1.convertedGameID;
                                var dm = M1.bonusWalletName;
                                var dR = M1.maximumConversionAmount;
                                var da = M1.beforeConversionAmount;
                                var dB = M1.conversionAmount;
                                var dq = M1.lockedGameID;
                                var dE = M1.key;
                                var dj = {
                                    title: dz.t("BonusWallet.CashWallet"),
                                    handler: this.xe,
                                };
                                switch (dU) {
                                    case 3:
                                        if (dp !== IC.gameID) {
                                            Xk({
                                                content_message: dz.t("BonusWallet.CompletedDialog", {
                                                    bonusTitle: dm,
                                                }),
                                                actions: [dj],
                                            });
                                            this.Ie();
                                        } else {
                                            var dF = dH(da);
                                            var dZ = dH(dR);
                                            var du = dH(dB);
                                            var M0 =
                                                dR > 0 && da !== 0
                                                    ? dz.t("BonusWallet.ConvertedToCashLimitDesc", {
                                                          balance: dF,
                                                          withdrawal: dZ,
                                                          amount: du,
                                                      })
                                                    : dz.t("BonusWallet.ConvertedToCashDesc", {
                                                          amount: du,
                                                      });
                                            Xk({
                                                title_message: dz.t("BonusWallet.ConvertedToCashTitle"),
                                                content_message: M0,
                                                actions: [dj],
                                            });
                                            this.Ie();
                                        }
                                        break;
                                    case 4:
                                        Xk({
                                            content_message: dz.t("BonusWallet.InsufficientBalance"),
                                            actions: [dj],
                                        });
                                        this.Ie();
                                        break;
                                    case 7:
                                        this.pe(true, dq, false);
                                        this.Ie();
                                        break;
                                    case 5:
                                    case 1:
                                        if (this.ae || this.oe) {
                                            this.ze(3, this.de, this.kt, this.me, this.be, Xf.EN_WALLET_LIST_ANIM, M1);
                                        } else {
                                            this.we(dE);
                                        }
                                }
                            } else if (dk) {
                                var M1;
                                var M2 = (M1 = this.Le = new TA(dk)).status;
                                var M3 = M1.convertedID;
                                var M4 = M1.freeGameName;
                                dq = M1.lockedGameID;
                                dE = M1.key;
                                dj = {
                                    title: dz.t("FreeGame.CashWallet"),
                                    handler: this.xe,
                                };
                                switch (M2) {
                                    case 3:
                                    case 4:
                                        if ((this.ae || this.oe) && M3 !== IC.gameID) {
                                            Xk({
                                                content_message: dz.t("FreeGame.CompletedDialog", {
                                                    freeGameTitle: M4,
                                                }),
                                                actions: [dj],
                                            });
                                            this.Ie();
                                        } else {
                                            this.ze(5, this.de, this.kt, this.me, this.be, Xf.EN_WALLET_LIST_ANIM, M1);
                                        }
                                        break;
                                    case 7:
                                        this.pe(false, dq, false);
                                        this.Ie();
                                        break;
                                    case 5:
                                    case 1:
                                        if (this.ae || this.oe) {
                                            this.ze(5, this.de, this.kt, this.me, this.be, Xf.EN_WALLET_LIST_ANIM, M1);
                                        } else {
                                            this.we(dE);
                                        }
                                }
                            } else {
                                if (this.le) {
                                    var M5 = this.context.event;
                                    M5.emit("Loading.Hide");
                                    M5.emit("Game.BlockUI", false);
                                    this.le = false;
                                }
                                this.Te();
                            }
                            IV.walletType = df.wt;
                            this.oe = false;
                        };
                        dw.prototype._e = function (df) {
                            if (df === undefined) {
                                df = this.Re;
                            }
                            var dO = IC.transactionInfo;
                            var dk = dO.wbn;
                            var dU = dO.wfg;
                            this.Re = df;
                            if (dk) {
                                var dp = (dR = this.Le ? this.Le : new Jx(dk)).status;
                                var dm = {
                                    title: dz.t("BonusWallet.CashWallet"),
                                    handler: this.xe,
                                };
                                switch (dp) {
                                    case 2:
                                        if (this.ae) {
                                            this.ze(3, this.de, this.kt, this.me, this.be, Xf.EN_WALLET_LIST_ANIM, dR);
                                        } else {
                                            Xk({
                                                title_message: dz.t("BonusWallet.CurrentWalletExpired"),
                                                content_message: dz.t("BonusWallet.AutoSwitchedToCash"),
                                                actions: [dm],
                                            });
                                            this.Ie();
                                        }
                                        break;
                                    case 6:
                                    case 0:
                                        Xk({
                                            title_message: dz.t("BonusWallet.BonusWalletInvalid"),
                                            content_message: dz.t("BonusWallet.BonusWalletInvalidDesc"),
                                            actions: [dm],
                                        });
                                        this.Ie();
                                        break;
                                    default:
                                        if (!(this.ae || (dp !== 5 && dp !== 1))) {
                                            if (df) {
                                                df();
                                            }
                                            this.Re = undefined;
                                        }
                                }
                            } else if (dU) {
                                var dR;
                                var da = (dR = this.Le ? this.Le : new TA(dU)).status;
                                dm = {
                                    title: dz.t("FreeGame.CashWallet"),
                                    handler: this.xe,
                                };
                                switch (da) {
                                    case 2:
                                        this.ze(5, this.de, this.kt, this.me, this.be, Xf.EN_WALLET_LIST_ANIM, dR);
                                        break;
                                    case 6:
                                    case 0:
                                        Xk({
                                            title_message: dz.t("FreeGame.FreeGameInvalid"),
                                            content_message: dz.t("FreeGame.AutoSwitchedToCash"),
                                            actions: [dm],
                                        });
                                        this.Ie();
                                        break;
                                    default:
                                        if (!(this.ae || (da !== 5 && da !== 1))) {
                                            if (df) {
                                                df();
                                            }
                                            this.Re = undefined;
                                        }
                                }
                            } else {
                                if (df) {
                                    df();
                                }
                                this.Re = undefined;
                            }
                            this.ae = false;
                            this.Le = undefined;
                        };
                        dw.prototype.Oe = function () {
                            this.Ne();
                            this._e();
                        };
                        dw.prototype.De = function (df) {
                            var dO = this;
                            var dk = IC.gameRawInfo.dt;
                            var dU = "";
                            if (dk.inwe || df) {
                                dU = dz.t("WalletHelper.NewWalletDesc");
                            } else if (dk.iuwe) {
                                dU = dz.t("WalletHelper.WalletReminderDesc");
                            }
                            Xk({
                                title_message: dz.t("WalletHelper.WalletReminder"),
                                content_message: dU,
                                actions: [
                                    {
                                        title: dz.t("WalletHelper.View"),
                                        handler: function () {
                                            dO.Ae(df);
                                        },
                                    },
                                    {
                                        title: dz.t("WalletHelper.NextTime"),
                                        handler: function () {
                                            if (dO.he) {
                                                dO.context.event.emit("Game.BlockUI", false);
                                                dO.he = false;
                                            }
                                            if (df) {
                                                df.propagate();
                                            }
                                        },
                                    },
                                ],
                            });
                            this.Ie();
                        };
                        dw.prototype.Te = function (df) {
                            if (df) {
                                df.intercept();
                                this.De(df);
                                return;
                            }
                            var dO = IC.transactionInfo;
                            var dk = IC.gameRawInfo.dt;
                            if ((this.ae || this.oe) && !dO.wfg && !dO.wbn && (dk.inwe || dk.iuwe)) {
                                if (dk.inwe) {
                                    var dU = this.context.event;
                                    dU.emit("Game.BonusWalletListOpened");
                                    dU.emit("Game.FreeGameListOpened");
                                }
                                this.De();
                            }
                        };
                        dw.prototype.Ie = function () {
                            this.context.event.emit("Game.BlockUI", true);
                            this.he = true;
                        };
                        dw.prototype.ze = function (df, dO, dk, dU, dp, dm, dR) {
                            var da = this;
                            var dB = this.context;
                            var dq = dB.event;
                            dq.emit("Wallet.Shown");
                            dq.emit("Game.BlockUI", true);
                            dB.view.appendTo(dw, "overlay");
                            this.rootElement.style.visibility = "visible";
                            Y.render(
                                K.createElement(
                                    d4,
                                    {
                                        context: dB,
                                        onError: function () {
                                            da.ge(true);
                                        },
                                    },
                                    K.createElement(d3, {
                                        initViewType: df,
                                        showLockedDialog: dO,
                                        dismissRootElementUI: dk,
                                        quitToGame: dU,
                                        changeWorld: dp,
                                        walletListAnimState: dm,
                                        initModel: dR,
                                    })
                                ),
                                this.rootElement
                            );
                        };
                        dw.prototype.pe = function (df, dO, dk) {
                            var dU;
                            var dp;
                            if (dk) {
                                dU = df ? "BonusWallet.BonusWalletLockedDesc" : "FreeGame.FreeGameLockedDesc";
                                dp = {
                                    title: df ? dz.t("BonusWallet.Acknowledge") : dz.t("FreeGame.Acknowledge"),
                                    handler: undefined,
                                };
                            } else {
                                dU = df ? "BonusWallet.BonusWalletLockedInitDesc" : "FreeGame.FreeGameLockedInitDesc";
                                dp = {
                                    title: df ? dz.t("BonusWallet.CashWallet") : dz.t("FreeGame.CashWallet"),
                                    handler: this.xe,
                                };
                            }
                            Xk({
                                title_message: df ? dz.t("BonusWallet.BonusWalletLockedTitle") : dz.t("FreeGame.FreeGameLockedTitle"),
                                content_message: dz.t(dU, {
                                    gameName: dD(dO),
                                }),
                                actions: [dp],
                            });
                        };
                        dw.prototype.Bt = function () {};
                        dw.prototype.ge = function (df) {
                            var dO = this.context.event;
                            if (this.ce) {
                                dW.sendScreen(IG.googleAnalyticCurrentScreen);
                                this.ce = false;
                            }
                            dO.emit("Wallet.Hidden");
                            if (df) {
                                dO.emit("Game.BlockUI", false);
                                if (this.Re) {
                                    this.Re();
                                }
                                this.Re = undefined;
                            }
                            this.rootElement.style.visibility = "hidden";
                            Y.unmountComponentAtNode(this.rootElement);
                            this.view.removeFromParent(dw);
                        };
                        dw.prototype.Fe = function (df) {
                            var dO = df.payload;
                            this.ve(dO);
                        };
                        dw.prototype.ve = function (df) {
                            var dO = this;
                            dC(
                                function (dk) {
                                    dO.context.event.emit("Loading.Show", {
                                        label: dz.t("General.ResourceLoadingMessage"),
                                        enableBackground: true,
                                        isFullBackground: true,
                                        y: parseFloat(dO.rootElement.style.height) * 0.5,
                                        opacity: 1,
                                        inAnimate: "Fade",
                                        inDuration: 0.3,
                                        inValue: 0,
                                        outAnimate: "Fade",
                                        outValue: 0,
                                        outDuration: 0.3,
                                    });
                                    dV(0.6)(dk);
                                },
                                function (dk) {
                                    dO.Bt();
                                    dO.ge(false);
                                    dk();
                                }
                            )(function () {
                                var dk = df
                                    ? {
                                          wk: df,
                                      }
                                    : undefined;
                                dO.context.event.emit("Game.UpdateGameInfo", {
                                    param: dk,
                                });
                            });
                            this.le = true;
                            this.ue = false;
                        };
                        dw.prototype.we = function (df) {
                            var dO;
                            var dk = IC.transactionInfo;
                            if (!df || dk.wk === df || (dk.wt === "C" && df === "0_C")) {
                                if (this.le) {
                                    (dO = this.context.event).emit("Loading.Hide");
                                    dO.emit("Game.BlockUI", false);
                                    this.le = false;
                                }
                                if (this.Re) {
                                    this.Re();
                                }
                                this.Re = undefined;
                                this.Te();
                            } else {
                                if (this.he) {
                                    (dO = this.context.event).emit("Game.BlockUI", false);
                                    this.he = false;
                                }
                                this.context.event.emit("Game.BlockUI", true);
                                this.ve(df);
                                this.oe = false;
                            }
                        };
                        return dw;
                    })(plugin.AbstractViewComponent);
                    S(
                        "default",
                        (function (db) {
                            function dw() {
                                return (db !== null && db.apply(this, arguments)) || this;
                            }
                            I0(dw, db);
                            dw.prototype.onCreate = function () {
                                this.context.component.create(dh);
                                IG.context = this.context;
                                this.complete();
                            };
                            return I2([plugin.PluginMainComponent("37fadb0591")], dw);
                        })(plugin.AbstractPluginComponent)
                    );
                },
            };
        });
    })();
})();
