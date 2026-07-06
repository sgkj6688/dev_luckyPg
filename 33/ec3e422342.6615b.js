(function () {
    "use strict";

    (function () {
        var x;
        (function (Y) {
            Y.i = "window";
            Y.o = "self";
        })(x || (x = {}));
        var q = (0, eval)("this");
        q[x.o];
        var n = q[x.i];
        System.register(["react", "common"], function (Y) {
            "use strict";

            var f;
            var K;
            return {
                setters: [
                    function (m) {
                        f = m.default;
                    },
                    function (m) {
                        K = m.Utils;
                    },
                ],
                execute: function () {
                    var TL = n.__extends;
                    var TW = n.__assign;
                    var Tw = n.__awaiter;
                    var Tg = n.__generator;
                    function TI(qR, qS) {
                        var qP = [];
                        qR.forEach(function (qX) {
                            var qs;
                            var qb;
                            var qV;
                            var qp = {
                                x: 0,
                                y: 0,
                                width: 0,
                                height: 0,
                                isRotate: false,
                            };
                            qP.push(
                                ((qs = qX.resolvePath),
                                (qb = {
                                    x: 0,
                                    y: 0,
                                    width: 0,
                                    height: 0,
                                }),
                                (qV = qX.colour),
                                qb === undefined && (qb = qp),
                                new Promise(function (qD, qQ) {
                                    var qU = new plugin.Loader();
                                    qU.onLoad = function (qh) {
                                        var qC = document.createElement("canvas");
                                        var qG = qC.getContext("2d");
                                        if (qG !== null) {
                                            var qL = new Image();
                                            qL.onload = function () {
                                                URL.revokeObjectURL(qL.src);
                                                var qW = qb.width === 0 ? qL.width : qb.width;
                                                var qw = qb.height === 0 ? qL.height : qb.height;
                                                qC.width = qW;
                                                qC.height = qw;
                                                qG.clearRect(0, 0, qW, qw);
                                                qG.translate(qW / 2, qw / 2);
                                                if (qb.isRotate) {
                                                    qG.rotate((Math.PI * 270) / 180);
                                                    qG.drawImage(qL, qb.x, qb.y, qw, qW, -qw / 2, -qW / 2, qw, qW);
                                                } else {
                                                    qG.drawImage(qL, qb.x, qb.y, qW, qw, -qW / 2, -qw / 2, qW, qw);
                                                }
                                                var qg = qG.getImageData(0, 0, qW, qw);
                                                var qI = qg.data;
                                                if (qV) {
                                                    for (var qt = 0, qJ = qI.length; qt < qJ; qt += 4) {
                                                        qI[qt] = qV.r;
                                                        qI[qt + 1] = qV.g;
                                                        qI[qt + 2] = qV.b;
                                                    }
                                                }
                                                qG.putImageData(qg, 0, 0);
                                                qD(qC.toDataURL());
                                            };
                                            qL.onerror = function () {
                                                qQ(Error("ImageBase64 load image failed"));
                                            };
                                            qL.src = URL.createObjectURL(qh.response);
                                        }
                                    };
                                    qU.onError = function (qh) {
                                        qQ(qh);
                                    };
                                    qU.load([
                                        {
                                            src: qs,
                                            type: plugin.LoadType.Blob,
                                        },
                                    ]);
                                }))
                            );
                        });
                        Promise.all(qP)
                            .then(function (qX) {
                                var qs = [];
                                qX.forEach(function (qb) {
                                    qs.push(qb);
                                });
                                qS(qs, undefined);
                            })
                            .catch(function (qX) {
                                qS(undefined, qX);
                            });
                    }
                    var Tt = {};
                    function TJ(qR, qS, qP) {
                        var qX;
                        var qs = this;
                        var qb = qR.src;
                        var qV = "unknown";
                        qV = qb.indexOf(".css") !== -1 ? "css" : qV;
                        qV = (qX = qb).indexOf(".jpg") !== -1 || qX.indexOf(".png") !== -1 ? "image" : qV;
                        var qr = shell.Error;
                        var qp = shell.ClientError;
                        var qD = qr && new qr(qp.Domain, qp.GameLoadResourceError);
                        var qQ = qS.resource.resolveUrl(qb);
                        return new Promise(function (qU, qh) {
                            return __awaiter(qs, undefined, undefined, function () {
                                var qC;
                                return __generator(this, function (qG) {
                                    switch (qG.label) {
                                        case 0:
                                            qG.trys.push([0, 9, , 10]);
                                            if (qV !== "image") {
                                                return [3, 5];
                                            } else if (qR.tint) {
                                                return [
                                                    4,
                                                    ((qL = [
                                                        {
                                                            resolvePath: qQ,
                                                            colour: qR.tint,
                                                        },
                                                    ]),
                                                    new Promise(function (qW, qw) {
                                                        TI(qL, function (qg, qI) {
                                                            if (qI || (qg && qg.length === 0)) {
                                                                var qt = shell.Error;
                                                                var qJ = shell.ClientError;
                                                                var qM = qt && new qt(qJ.Domain, qJ.GameLoadResourceError);
                                                                qw(qI || qM);
                                                            }
                                                            qW(qg);
                                                        });
                                                    })),
                                                ];
                                            } else {
                                                return [3, 2];
                                            }
                                        case 1:
                                            qC = qG.sent();
                                            qU(qC[0]);
                                            return [3, 4];
                                        case 2:
                                            return [4, Tu(qQ, qP)];
                                        case 3:
                                            qC = qG.sent();
                                            qU(qC);
                                            qG.label = 4;
                                        case 4:
                                            return [3, 8];
                                        case 5:
                                            if (qV !== "css") {
                                                return [3, 7];
                                            } else {
                                                return [4, TH(qQ, qS, qP)];
                                            }
                                        case 6:
                                            qC = qG.sent();
                                            qU(qC);
                                            return [3, 8];
                                        case 7:
                                            qh(qD);
                                            qG.label = 8;
                                        case 8:
                                            return [3, 10];
                                        case 9:
                                            qG.sent();
                                            qh(qD);
                                            return [3, 10];
                                        case 10:
                                            return [2];
                                    }
                                    var qL;
                                });
                            });
                        });
                    }
                    function TM(qR, qS, qP) {
                        return __awaiter(this, undefined, undefined, function () {
                            var qX;
                            var qs;
                            return __generator(this, function (qb) {
                                switch (qb.label) {
                                    case 0:
                                        if (qR.cssFile.endsWith(".css")) {
                                            return [
                                                4,
                                                TJ(
                                                    {
                                                        src: qR.cssFile,
                                                    },
                                                    qS,
                                                    qP
                                                ),
                                            ];
                                        } else {
                                            return [3, 2];
                                        }
                                    case 1:
                                        qX = qb.sent();
                                        return [3, 3];
                                    case 2:
                                        qX = qR.cssFile;
                                        qb.label = 3;
                                    case 3:
                                        if (qR.tint) {
                                            return [
                                                4,
                                                TJ(
                                                    {
                                                        src: qR.imageFile,
                                                        tint: qR.tint,
                                                    },
                                                    qS,
                                                    qP
                                                ),
                                            ];
                                        } else {
                                            return [3, 6];
                                        }
                                    case 4:
                                        qs = qb.sent();
                                        return [4, To(qX, qS, qs, true, qP)];
                                    case 5:
                                        qX = qb.sent();
                                        return [3, 8];
                                    case 6:
                                        return [4, To(qX, qS, qR.imageFile, false, qP)];
                                    case 7:
                                        qX = qb.sent();
                                        qb.label = 8;
                                    case 8:
                                        if (qR.appendHeader) {
                                            (function (qV, qr) {
                                                var qp = [];
                                                var qD = qr.bundleInfo.name;
                                                if (!Tt[qD]) {
                                                    Tt[qD] = [];
                                                }
                                                if (!Array.isArray(qV)) {
                                                    qV = [qV];
                                                }
                                                var qQ = Tt[qD].length + 1;
                                                qV.forEach(function (qU, qh) {
                                                    var qC = qQ + qh;
                                                    var qG = "$CSS-" + qr.bundleInfo.name + "-" + qC;
                                                    qp.push(qG);
                                                    (function (qL, qW, qw) {
                                                        if (Tt[qW].indexOf(qL) === -1) {
                                                            var qg = document.createElement("style");
                                                            qg.id = qL;
                                                            qg.innerHTML = qw;
                                                            document.head.appendChild(qg);
                                                            Tt[qW].push(qL);
                                                        }
                                                    })(qG, qr.bundleInfo.name, qU);
                                                });
                                            })(qX, qS);
                                        }
                                        return [2, qX];
                                }
                            });
                        });
                    }
                    function To(qR, qS, qP, qX, qs) {
                        if (qX === undefined) {
                            qX = false;
                        }
                        return new Promise(function (qb, qV) {
                            if (qX) {
                                qR = qR.replace(/url\((.*?)\)/g, function () {
                                    return "url(" + qP + ")";
                                });
                                qb(qR);
                            } else {
                                (function (qr, qp) {
                                    var qD = this;
                                    var qQ = shell.Error;
                                    var qU = shell.ClientError;
                                    var qh = qQ && new qQ(qU.Domain, qU.GameLoadResourceError);
                                    return new Promise(function (qC, qG) {
                                        return __awaiter(qD, undefined, undefined, function () {
                                            var qL;
                                            return __generator(this, function (qW) {
                                                switch (qW.label) {
                                                    case 0:
                                                        qW.trys.push([0, 2, , 3]);
                                                        return [4, Tl(qr, qp)];
                                                    case 1:
                                                        qL = qW.sent();
                                                        qC(qL);
                                                        return [3, 3];
                                                    case 2:
                                                        qW.sent();
                                                        qG(qh);
                                                        return [3, 3];
                                                    case 3:
                                                        return [2];
                                                }
                                            });
                                        });
                                    });
                                })(qS.resource.resolveUrl(qP), qs)
                                    .then(function (qr) {
                                        qR = qR.replace(/url\((.*?)\)/g, function () {
                                            return "url(" + URL.createObjectURL(qr) + ")";
                                        });
                                        qb(qR);
                                    })
                                    .catch(qV);
                            }
                        });
                    }
                    function Tu(qR, qS) {
                        var qP = new plugin.Loader();
                        return new Promise(function (qX, qs) {
                            qP.onLoad = function (qb) {
                                qX(qb.response);
                            };
                            qP.onError = function (qb) {
                                qs(qb);
                            };
                            qP.load([
                                {
                                    src: qR,
                                    type: plugin.LoadType.Image,
                                    maxAttemptCount: qS,
                                },
                            ]);
                        });
                    }
                    function TH(qR, qS, qP) {
                        var qX = new plugin.Loader();
                        return new Promise(function (qs, qb) {
                            qX.onLoad = function (qV) {
                                var qr = (function (qp, qD) {
                                    return qp.replace(/url\((.*?)\)/g, function (qQ, qU) {
                                        return "url(" + qD.resource.resolveUrl(qU) + ")";
                                    });
                                })(qV.response, qS);
                                qs(qr);
                            };
                            qX.onError = function (qV) {
                                qb(qV);
                            };
                            qX.load([
                                {
                                    src: qR,
                                    type: plugin.LoadType.Text,
                                    maxAttemptCount: qP,
                                },
                            ]);
                        });
                    }
                    function Tl(qR, qS) {
                        var qP = new plugin.Loader();
                        return new Promise(function (qX, qs) {
                            qP.onLoad = function (qb) {
                                qX(qb.response);
                            };
                            qP.onError = function (qb) {
                                qs(qb);
                            };
                            qP.load([
                                {
                                    src: qR,
                                    type: plugin.LoadType.Blob,
                                    maxAttemptCount: qS,
                                },
                            ]);
                        });
                    }
                    var Tv = {
                        isBO: false,
                    };
                    var j0 = f.createContext(Tv);
                    var j1 = (function () {
                        function qR(qS) {
                            this.hasTooltip = true;
                            this.l = [];
                            this.p = [];
                            this.u = qS;
                        }
                        qR.prototype.initialize = function (qS, qP) {
                            return Tw(this, undefined, undefined, function () {
                                var qX;
                                var qs;
                                var qb;
                                var qV = this;
                                return Tg(this, function (qr) {
                                    switch (qr.label) {
                                        case 0:
                                            qX = qP || qS;
                                            qs = [];
                                            qs = this.l.concat(this.p).map(function (qD) {
                                                TM(qD, qX, 0).catch(function () {
                                                    return TM(qD, qS, 0);
                                                });
                                            });
                                            qb = qS.resource.resolveUrl("history/locale/locale.json");
                                            qs.push(
                                                ((qp = qb),
                                                0,
                                                new Promise(function (qD, qQ) {
                                                    var qU = new plugin.Loader();
                                                    var qh = {
                                                        src: qp,
                                                        type: plugin.LoadType.Json,
                                                        maxAttemptCount: 0,
                                                    };
                                                    qU.onLoad = function (qC) {
                                                        var qG = qC.response;
                                                        for (var qL in qG) {
                                                            if (qG[qL]) {
                                                                shell.I18n.extend(qG[qL], qL);
                                                            }
                                                        }
                                                        qD(qG);
                                                    };
                                                    qU.onError = function () {
                                                        var qC = shell.Error;
                                                        var qG = shell.ClientError;
                                                        var qL = new qC(qG.Domain, qG.GameLoadResourceError);
                                                        qQ(qL);
                                                    };
                                                    qU.load([qh]);
                                                }))
                                            );
                                            return [
                                                4,
                                                Promise.all(qs).then(function () {
                                                    return qV.u;
                                                }),
                                            ];
                                        case 1:
                                            return [2, qr.sent()];
                                    }
                                    var qp;
                                });
                            });
                        };
                        qR.prototype.compileAllHistoryDataBecomePages = function (qS) {
                            return qS;
                        };
                        qR.prototype.compileAllHistoryDataForFreeSpinList = function (qS) {
                            return qS;
                        };
                        qR.prototype.getNavTitle = function () {
                            return shell.I18n.t("History.HistoryNormalSpin");
                        };
                        qR.prototype.showNavArrowDropDown = function () {
                            return false;
                        };
                        qR.prototype.useDefaultTransactionDetailsHeader = function () {
                            return true;
                        };
                        qR.prototype.getAdditionalSpinsTitle = function () {
                            return shell.I18n.t("History.HistoryNormalSpin");
                        };
                        return qR;
                    })();
                    var j2 = {};
                    var j3 = {};
                    var j4 = {
                        value: true,
                    };
                    Object.defineProperty(j3, "__esModule", j4);
                    var jT = __importDefault(f);
                    var jj = shell.I18n;
                    var jZ = {
                        display: "flex",
                        width: "inherit",
                        height: "50px",
                        margin: "0 auto 5px auto",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                    };
                    var jx = {
                        fontSize: "11px",
                        textAlign: "center",
                        wordBreak: "break-word",
                    };
                    var jq = {
                        width: "2px",
                        height: "12px",
                        marginLeft: "10px",
                        marginRight: "10px",
                    };
                    var jn = {
                        labels: {
                            color: "rgba(255, 255, 255, 0.4)",
                        },
                        separator: {
                            backgroundColor: "#282833",
                        },
                    };
                    j3.default = function (qR) {
                        var qS = qR.betSizeTitle ? qR.betSizeTitle : jj.t("History.HistoryBetSize");
                        var qP = qR.betLevelTitle ? qR.betLevelTitle : jj.t("History.HistoryBetLevel");
                        var qX = jn;
                        var qs = Object.assign({}, jx, qX.labels);
                        var qb = Object.assign({}, jq, qX.separator);
                        qs.color = qR.labelColor ? qR.labelColor : qs.color;
                        qb.backgroundColor = qR.seperatorColor ? qR.seperatorColor : qb.backgroundColor;
                        var qV = __assign({}, jZ);
                        var qr = {
                            id: "bet-size-label",
                            style: qs,
                        };
                        var qp = {
                            id: "bet-level-label",
                            style: qs,
                        };
                        if (qR.isRTL) {
                            qV.direction = "rtl";
                        }
                        return jT.default.createElement(
                            "div",
                            {
                                id: "bet-information-container",
                                style: qV,
                            },
                            (function (qD) {
                                if (qD.totalRoundCount && qD.currentRoundCount) {
                                    var qQ = qD.roundsTitlei18nKey ? qD.roundsTitlei18nKey : "History.HistoryDetailItemRoundLabel";
                                    var qU = jj.t(qQ, {
                                        currCount: qD.currentRoundCount.toString(),
                                        maxCount: qD.totalRoundCount.toString(),
                                    });
                                    var qh = qD.themeColor ? qD.themeColor : "#9C9B9B";
                                    var qC = {
                                        color: qh,
                                    };
                                    return jT.default.createElement(
                                        "div",
                                        {
                                            id: "rounds-label",
                                            style: Object.assign({}, jx, qC),
                                        },
                                        qU
                                    );
                                }
                            })(qR),
                            (function (qD) {
                                if (qD.totalRoundCount && qD.currentRoundCount) {
                                    var qQ = Object.assign({}, jq, jn.separator);
                                    var qU = {
                                        id: "separator",
                                        style: qQ,
                                    };
                                    return jT.default.createElement("div", qU);
                                }
                            })(qR),
                            jT.default.createElement("div", qr, qS + " " + qR.betSize),
                            jT.default.createElement("div", {
                                id: "separator",
                                style: qb,
                            }),
                            jT.default.createElement("div", qp, qP + " " + qR.betLevel)
                        );
                    };
                    var jY = {};
                    var jf = {
                        value: true,
                    };
                    Object.defineProperty(jY, "__esModule", jf);
                    var ja = __importDefault(f);
                    var jO = shell.I18n;
                    var jc = {
                        noComboContainer: {
                            display: "flex",
                            width: "inherit",
                            height: "48px",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: "0 auto",
                        },
                        text: {
                            fontSize: "14px",
                        },
                    };
                    var jE = {
                        color: "#CCCCCC",
                    };
                    jY.default = function (qR) {
                        var qS = Object.assign({}, jc.text, jE);
                        var qP = {
                            id: "no-winning-combination-container",
                            style: jc.noComboContainer,
                        };
                        qS.color = qR.labelColor ? qR.labelColor : qS.color;
                        return ja.default.createElement(
                            "div",
                            qP,
                            ja.default.createElement(
                                "div",
                                {
                                    id: "no-winning-combination-text",
                                    style: qS,
                                },
                                jO.t("History.HistoryNoWinning")
                            )
                        );
                    };
                    var jz = {};
                    var jB = {};
                    var jy = {};
                    var je = {};
                    var jA = {
                        value: true,
                    };
                    Object.defineProperty(je, "__esModule", jA);
                    var jN = {
                        writable: false,
                        value: undefined,
                        enumerable: false,
                        configurable: false,
                    };
                    var jR = jN;
                    function jS(qR, qS, qP) {
                        for (var qX = qR.length, qs = 0; qs < qX; qs++) {
                            var qb = qR[qs];
                            if (qb) {
                                qb(qS, qP);
                            }
                        }
                    }
                    var jP = {
                        value: true,
                    };
                    je.unwatch = function (qR, qS, qP) {
                        if (typeof qR != "object" || qR === null) {
                            throw Error("Invalid parameter at index 0");
                        }
                        if (typeof qS != "string" || qS === "") {
                            throw Error("Invalid parameter at index 1");
                        }
                        var qX = qR.watch_eventPool;
                        if (qX) {
                            var qs = qX[qS];
                            if (qs) {
                                if (qP === undefined) {
                                    qs.length = 0;
                                } else {
                                    var qb = qs.indexOf(qP);
                                    if (qb !== -1) {
                                        qs.splice(qb, 1);
                                    }
                                }
                            }
                        }
                    };
                    je.watch = function (qR, qS, qP) {
                        if (typeof qR != "object" || qR === null) {
                            throw Error("Invalid parameter at index 0");
                        }
                        if (typeof qS != "string" || qS === "") {
                            throw Error("Invalid parameter at index 1");
                        }
                        if (typeof qP != "function") {
                            throw Error("Invalid parameter at index 2");
                        }
                        var qX = qR.watch_eventPool;
                        if (!qX) {
                            if (!Object.isExtensible(qR)) {
                                throw Error("Object is not extensible");
                            }
                            qX = jR.value = Object.create(null);
                            Object.defineProperty(qR, "watch_eventPool", jR);
                        }
                        var qs = qX[qS];
                        if (!qs) {
                            var qb = Object.getOwnPropertyDescriptor(qR, qS);
                            if (!qb) {
                                throw Error("Object property not exists");
                            }
                            if (qb.writable === false || (qb.get !== undefined && qb.set === undefined)) {
                                throw Error("Object property is readonly");
                            }
                            if (!qb.configurable) {
                                throw Error("Object property is not configurable");
                            }
                            qs = qX[qS] = [];
                            (function (qV, qr, qp) {
                                if (qp.writable) {
                                    var qD = qp.value;
                                    qp.get = function () {
                                        return qD;
                                    };
                                    qp.set = function (qh) {
                                        var qC = qD;
                                        qD = qh;
                                        jS(this.watch_eventPool[qr], qh, qC);
                                    };
                                    delete qp.value;
                                    delete qp.writable;
                                } else if (qp.get) {
                                    var qQ = qp.set;
                                    qp.set = function (qh) {
                                        qQ.call(this, qh);
                                        jS(this.watch_eventPool[qr], this[qr]);
                                    };
                                } else {
                                    var qU = qp.set;
                                    qp.set = function (qh) {
                                        qU.call(this, qh);
                                        jS(this.watch_eventPool[qr], qh);
                                    };
                                }
                                Object.defineProperty(qV, qr, qp);
                            })(qR, qS, qb);
                        }
                        if (qs.indexOf(qP) !== -1) {
                            throw Error("Watch callback exists");
                        }
                        qs.push(qP);
                    };
                    Object.defineProperty(jy, "__esModule", jP);
                    var jX = je;
                    var js = new ((function () {
                        function _qR() {
                            var qS = {
                                isActive: false,
                                title: "",
                                desc: "",
                                posY: 0,
                            };
                            this.tooltipProps = qS;
                        }
                        _qR.prototype.observe = function (qS, qP, qX) {
                            var qs;
                            var qb;
                            var qV = this;
                            if (qX && this[qS] !== undefined) {
                                qP(this[qS], this);
                            }
                            return ((qs = this),
                            (qb = qS),
                            function (qr) {
                                var qp = qr.bind(undefined, undefined);
                                jX.watch(qs, qb, qp);
                            })(function (qr, qp, qD) {
                                if (!(qr || qp === undefined || JSON.stringify(qp) === JSON.stringify(qD))) {
                                    qP(qp, qV);
                                }
                            });
                        };
                        _qR.prototype.dispose = function (qS) {
                            var qP = {
                                isActive: false,
                                title: "",
                                desc: "",
                                posY: 0,
                            };
                            jX.unwatch(this, qS);
                            this.tooltipProps = qP;
                        };
                        _qR.prototype.update = function (qS) {
                            this.tooltipProps = qS;
                        };
                        return _qR;
                    })())();
                    var jb = {
                        value: true,
                    };
                    jy.tooltipViewModel = js;
                    Object.defineProperty(jB, "__esModule", jb);
                    var jU = __importDefault(f);
                    var jh = jy;
                    var jC = {
                        wrappedContent: {
                            width: "300px",
                            height: "48px",
                            display: "flex",
                        },
                        childrenContent: {
                            width: "285px",
                        },
                        infoIconContent: {
                            width: "15px",
                        },
                        infoIcon: {
                            transform: "scale(0.3333)",
                            transformOrigin: "center left",
                            opacity: "40%",
                        },
                    };
                    var jG = (function (qR) {
                        function qS(qP) {
                            var qX = qR.call(this, qP) || this;
                            qX.h = undefined;
                            qX.m = false;
                            return qX;
                        }
                        __extends(qS, qR);
                        qS.prototype.componentDidMount = function () {
                            this._();
                        };
                        qS.prototype.componentDidUpdate = function () {
                            this._();
                        };
                        qS.prototype._ = function () {
                            var qP = this;
                            this.m = false;
                            clearTimeout(this.h);
                            this.h = // TOLOOK
                                setTimeout(function () {
                                    qP.m = true;
                                }, 0);
                        };
                        qS.prototype.componentWillUnmount = function () {
                            clearTimeout(this.h);
                        };
                        qS.prototype.v = function (qP, qX) {
                            if (qX === undefined) {
                                qX = false;
                            }
                            return (
                                qX
                                    ? qP.map(function (qs) {
                                          return shell.I18n.t(qs);
                                      })
                                    : qP
                            ).join(" x ");
                        };
                        qS.prototype.k = function (qP) {
                            var qX = this;
                            if (this.m) {
                                var qs = qP.currentTarget;
                                var qb = qs.parentNode;
                                var qV = Array.prototype.indexOf.call(qb.children, qs);
                                var qr = (qb.children.length - 1 - qV) * (this.props.contentHeight || 48);
                                var qp = Object.keys(this.props.winCalculation);
                                var qD = qp.map(function (qU) {
                                    return qX.props.winCalculation[qU];
                                });
                                var qQ = {
                                    isActive: true,
                                    posY: qr,
                                    title: this.v(qp, true),
                                    desc: this.v(qD),
                                };
                                jh.tooltipViewModel.currentTarget = qs;
                                jh.tooltipViewModel.update(qQ);
                            }
                        };
                        qS.prototype.C = function (qP) {
                            qP.currentTarget.style.opacity = "0.8";
                        };
                        qS.prototype.O = function (qP) {
                            qP.currentTarget.style.opacity = "1";
                        };
                        qS.prototype.render = function () {
                            var qP = [];
                            var qX = {
                                key: "wrapper-content",
                                style: jC.childrenContent,
                            };
                            var qs = {
                                key: "icon-content",
                                style: jC.infoIconContent,
                            };
                            var qb = {
                                className: "gh_basic_sprite gh_ic_nav_info_s",
                                style: jC.infoIcon,
                            };
                            qP.push(jU.default.createElement("div", qX, this.props.children));
                            qP.push(jU.default.createElement("div", qs, jU.default.createElement("div", qb)));
                            var qV = {
                                height: (this.props.contentHeight || 48) + "px",
                            };
                            var qr = __assign(__assign({}, jC.wrappedContent), qV);
                            return jU.default.createElement(
                                "div",
                                {
                                    style: qr,
                                    onMouseDown: this.C.bind(this),
                                    onMouseUp: this.O.bind(this),
                                    onTouchStart: this.C.bind(this),
                                    onTouchEnd: this.O.bind(this),
                                    onClick: this.k.bind(this),
                                },
                                this.props.isRTL ? qP.reverse() : qP
                            );
                        };
                        return qS;
                    })(jU.default.Component);
                    var jL = {
                        value: true,
                    };
                    jB.default = jG;
                    Object.defineProperty(jz, "__esModule", jL);
                    var Z0 = __importDefault(f);
                    var Z1 = __importDefault(jB);
                    var Z2 = {
                        paylineContainer: {
                            display: "flex",
                            width: "inherit",
                            justifyContent: "space-between",
                            alignItems: "center",
                            height: "48px",
                            margin: "0 auto",
                        },
                        paylineNumberImageWrapper: {
                            display: "flex",
                            alignItems: "center",
                            height: "inherit",
                        },
                        paylineLabels: {
                            display: "flex",
                            flexDirection: "column",
                        },
                        paylineImage: {
                            width: "38px",
                            height: "24px",
                        },
                        winLineLabel: {
                            width: "25px",
                            fontSize: "14px",
                            textAlign: "left",
                        },
                        winValueLabel: {
                            width: "100px",
                            fontSize: "14px",
                            textAlign: "right",
                        },
                        subValueLabel: {
                            width: "100px",
                            fontSize: "11px",
                            textAlign: "right",
                        },
                    };
                    var Z3 = {
                        winLineLabel: {
                            color: "#CCCCCC",
                        },
                        winValueLabel: {
                            color: "#CCCCCC",
                        },
                        subValueLabel: {
                            color: "#9C9B9B",
                        },
                    };
                    jz.default = function (qR) {
                        var qS = Z3;
                        var qP = Object.assign({}, Z2.winLineLabel, qS.winLineLabel);
                        var qX = Object.assign({}, Z2.winValueLabel, qS.winValueLabel);
                        var qs = __assign({}, Z2.paylineContainer);
                        qP.color = qR.winLineLabelColor ? qR.winLineLabelColor : qP.color;
                        qX.color = qR.winValueLabelColor ? qR.winValueLabelColor : qX.color;
                        if (qR.isRTL) {
                            qs.direction = "rtl";
                            qP.textAlign = "right";
                            qX.textAlign = "left";
                        }
                        var qb = {
                            id: "payline-container",
                            style: qs,
                        };
                        var qV = {
                            id: "payline-number-sprite-wrapper",
                            style: Z2.paylineNumberImageWrapper,
                        };
                        var qr = {
                            id: "win-line-number-label",
                            style: qP,
                        };
                        var qp = Z0.default.createElement(
                            "div",
                            qb,
                            Z0.default.createElement(
                                "div",
                                qV,
                                Z0.default.createElement("div", qr, ("0" + parseInt(qR.winLine, 10).toString()).slice(-2)),
                                (function (qD) {
                                    var qQ = qD.paylineSpriteClassName;
                                    var qU = qD.paylineImageMap;
                                    var qh = qD.paylineImageStyle;
                                    var qC = qD.winLine;
                                    var qG = qD.isRTL;
                                    if (qU) {
                                        var qL = {
                                            width: Z2.paylineImage.width,
                                            height: Z2.paylineImage.height,
                                        };
                                        var qW = qU[qC];
                                        var qw = qQ || "";
                                        var qg = qL;
                                        var qI = Object.assign({}, qg, qh || {});
                                        if (qG) {
                                            qI.transformOrigin = "right";
                                        }
                                        return Z0.default.createElement("span", {
                                            className: qw + " " + qW,
                                            style: qI,
                                        });
                                    }
                                    return null;
                                })(qR)
                            ),
                            Z0.default.createElement(
                                "div",
                                {
                                    id: "payline-labels",
                                    style: Z2.paylineLabels,
                                },
                                Z0.default.createElement(
                                    "div",
                                    {
                                        id: "payline-win-value-label",
                                        style: qX,
                                    },
                                    qR.winValue
                                ),
                                (function (qD) {
                                    var qQ = qD.subValue;
                                    var qU = qD.subValueLabelColor;
                                    var qh = qD.isRTL;
                                    var qC = Object.assign({}, Z2.subValueLabel, Z3.subValueLabel);
                                    qC.color = qU || qC.color;
                                    if (qh) {
                                        qC.textAlign = "left";
                                    }
                                    if (qQ) {
                                        return Z0.default.createElement(
                                            "div",
                                            {
                                                id: "payline-subvalue-label",
                                                style: qC,
                                            },
                                            Z0.default.createElement("bdi", null, qQ)
                                        );
                                    } else {
                                        return null;
                                    }
                                })(qR)
                            )
                        );
                        if (qR.winCalculation) {
                            return Z0.default.createElement(
                                Z1.default,
                                {
                                    isRTL: qR.isRTL,
                                    winCalculation: qR.winCalculation,
                                },
                                qp
                            );
                        } else {
                            return qp;
                        }
                    };
                    var Z4 = {};
                    var Z5 = {
                        value: true,
                    };
                    Object.defineProperty(Z4, "__esModule", Z5);
                    var ZZ = __importDefault(f);
                    var Zx = {
                        payoutTitleContainer: {
                            display: "flex",
                            width: "inherit",
                            height: "32px",
                            justifyContent: "center",
                            alignItems: "center",
                            margin: "0 auto",
                        },
                        line: {
                            width: "120px",
                        },
                        text: {
                            textAlign: "center",
                            width: "72px",
                            fontSize: "11px",
                        },
                    };
                    var Zq = {
                        line: {
                            backgroundColor: "#282833",
                            height: "2px",
                        },
                        text: {
                            color: "#9C9B9B",
                        },
                    };
                    Z4.default = function (qR) {
                        var qS = Zq;
                        var qP = Object.assign({}, Zx.line, qS.line);
                        var qX = Object.assign({}, Zx.text, qS.text);
                        var qs = {
                            id: "payout-title-container",
                            style: Zx.payoutTitleContainer,
                        };
                        qP.backgroundColor = qR.lineColor ? qR.lineColor : qP.backgroundColor;
                        qX.color = qR.labelColor ? qR.labelColor : qX.color;
                        return ZZ.default.createElement(
                            "div",
                            qs,
                            ZZ.default.createElement("div", {
                                className: "line",
                                style: qP,
                            }),
                            ZZ.default.createElement(
                                "div",
                                {
                                    id: "payout-text",
                                    style: qX,
                                },
                                shell.I18n.t("History.HistoryPayout")
                            ),
                            ZZ.default.createElement("div", {
                                className: "line",
                                style: qP,
                            })
                        );
                    };
                    var Zn = {};
                    var ZY = {
                        value: true,
                    };
                    Object.defineProperty(Zn, "__esModule", ZY);
                    var ZA = __importDefault(f);
                    var ZN = shell.I18n;
                    var ZR = {
                        display: "flex",
                        width: "inherit",
                        height: "50px",
                        margin: "0 auto",
                        justifyContent: "center",
                        alignItems: "center",
                    };
                    var ZS = {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    };
                    var ZP = {
                        textAlign: "center",
                        display: "inline-table",
                    };
                    var ZX = {
                        textAlign: "center",
                        fontSize: "11px",
                    };
                    var Zs = {
                        color: "rgba(255,255,255,0.3)",
                    };
                    var Zb = {
                        container: {
                            backgroundColor: "#24242E",
                        },
                        valueLabel: {
                            color: "#9C9B9B",
                        },
                        titleLabel: {
                            color: "#9C9B9B",
                        },
                    };
                    var ZV = {
                        container: {
                            backgroundColor: "#262121",
                        },
                        valueLabel: {
                            color: "#A7A6A6",
                        },
                        titleLabel: {
                            color: "rgba(167,166,166, 0.5)",
                        },
                    };
                    function Zr(qR) {
                        var qS = {
                            width: qR.size,
                            marginLeft: qR.marginLeft,
                        };
                        var qs = Object.assign({}, ZS, qS);
                        var qb = qR.useSmallFont
                            ? {
                                  fontSize: "11px",
                              }
                            : {
                                  fontSize: "12px",
                              };
                        qb.lineHeight = qR.valueLineHeight ? qR.valueLineHeight : qb.fontSize;
                        var qV = qR.isCard ? ZV : Zb;
                        var qr = Object.assign({}, ZP, qV.valueLabel);
                        var qp = Object.assign({}, ZX, qV.titleLabel);
                        var qD = {
                            className: "transaction-detail-item",
                            style: qs,
                        };
                        qr.color = qR.valueLabelColor ? qR.valueLabelColor : qr.color;
                        qp.color = qR.keyLabelColor ? qR.keyLabelColor : qp.color;
                        return ZA.default.createElement(
                            "div",
                            qD,
                            ZA.default.createElement(
                                "div",
                                {
                                    id: "detail-item-holder",
                                    style: {
                                        height: "23px",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    },
                                },
                                ZA.default.createElement(
                                    "div",
                                    {
                                        id: qR.keyName + "-item-value",
                                        style: Object.assign({}, qr, qb),
                                    },
                                    qR.value
                                )
                            ),
                            ZA.default.createElement(
                                "div",
                                {
                                    id: qR.keyName + "-item-key",
                                    style: qp,
                                },
                                qR.keyName
                            )
                        );
                    }
                    function Zp(qR) {
                        qR.balance;
                        var qS;
                        var qP;
                        var qX = qR.balanceBefore;
                        var qs = qR.showBalanceBefore;
                        var qb = __rest(qR, ["balance", "balanceBefore", "showBalanceBefore"]);
                        return ZA.default.createElement(
                            Zr,
                            __assign({}, qb, {
                                value:
                                    qs && qX
                                        ? ((qS = __assign({}, Zs)),
                                          (qP = {}),
                                          (qR.balance.length > 16 || qR.balanceBefore.length > 16) &&
                                              (Object.assign(qS, {
                                                  fontSize: "10px",
                                              }),
                                              Object.assign(qP, {
                                                  fontSize: "10px",
                                              })),
                                          ZA.default.createElement(
                                              ZA.default.Fragment,
                                              null,
                                              ZA.default.createElement(
                                                  "span",
                                                  {
                                                      style: qS,
                                                  },
                                                  qR.balanceBefore + "→ "
                                              ),
                                              ZA.default.createElement(
                                                  "span",
                                                  {
                                                      style: qP,
                                                  },
                                                  qR.balance
                                              )
                                          ))
                                        : ZQ(qR.balance, 17),
                            })
                        );
                    }
                    function ZD(qR, qS) {
                        if (qR) {
                            return qS + "(" + qR + ")";
                        } else {
                            return "" + qS;
                        }
                    }
                    function ZQ(qR, qS) {
                        if (qS === undefined) {
                            qS = 14;
                        }
                        if (qR.length > qS && qR.indexOf(" ") < 0) {
                            var qP = Math.floor(qR.length / 2);
                            return qR.slice(0, qP) + " " + qR.slice(qP, qR.length);
                        }
                        return qR;
                    }
                    Zn.default = function (qR) {
                        var qS = qR.isCard ? ZV : Zb;
                        var qP = Object.assign({}, ZR, qS.container);
                        var qX = qR.detailsShowWin ? "History.HistoryRecordTotalWin" : "History.HistoryRecordWin";
                        var qs = ZD(qR.currencySymbol, ZN.t("History.HistoryRecordPayout"));
                        var qb = ZD(qR.currencySymbol, ZN.t(qX));
                        var qV = ZD(qR.currencySymbol, ZN.t("History.HistoryRecordBalance"));
                        var qr = qR.transactionId.length > 14 || qR.betValue.length > 10 || qR.profitValue.length > 10 || qR.balance.length > 16;
                        qP.backgroundColor = qR.backgroundColor ? qR.backgroundColor : qP.backgroundColor;
                        if (qR.isRTL) {
                            qP.direction = "rtl";
                        }
                        return ZA.default.createElement(
                            "div",
                            {
                                id: "transaction-details-container",
                                style: qP,
                            },
                            ZA.default.createElement(Zr, {
                                keyName: ZN.t("History.HistoryRecordTransaction"),
                                value: ZQ(qR.transactionId),
                                size: "27%",
                                useSmallFont: qr,
                                valueLineHeight: "12px",
                                isCard: qR.isCard,
                                keyLabelColor: qR.keyLabelColor,
                                valueLabelColor: qR.valueLabelColor,
                            }),
                            ZA.default.createElement(Zr, {
                                keyName: qs,
                                value: ZQ(qR.betValue, 11),
                                size: "18%",
                                marginLeft: "10px",
                                useSmallFont: qr,
                                valueLineHeight: "12px",
                                isCard: qR.isCard,
                                keyLabelColor: qR.keyLabelColor,
                                valueLabelColor: qR.valueLabelColor,
                            }),
                            ZA.default.createElement(Zr, {
                                keyName: qb,
                                value: ZQ(qR.detailsShowWin ? qR.totalWinValue : qR.profitValue, 12),
                                size: "20%",
                                marginLeft: "10px",
                                useSmallFont: qr,
                                valueLineHeight: "12px",
                                isCard: qR.isCard,
                                keyLabelColor: qR.keyLabelColor,
                                valueLabelColor: qR.valueLabelColor,
                            }),
                            ZA.default.createElement(Zp, {
                                keyName: qV,
                                balance: qR.balance,
                                balanceBefore: qR.balanceBefore,
                                showBalanceBefore: qR.showBalanceBefore,
                                size: "27%",
                                marginLeft: "10px",
                                useSmallFont: qr,
                                valueLineHeight: "12px",
                                isCard: qR.isCard,
                                keyLabelColor: qR.keyLabelColor,
                                valueLabelColor: qR.valueLabelColor,
                            })
                        );
                    };
                    var ZU = {};
                    var Zh = {
                        value: true,
                    };
                    Object.defineProperty(ZU, "__esModule", Zh);
                    var ZI = __importDefault(f);
                    var Zt = jy;
                    var ZJ = {
                        descText: {
                            fontSize: "12px",
                            textAlign: "left",
                            padding: "0px 8px",
                        },
                        titleText: {
                            color: "#808080",
                            fontSize: "12px",
                            textAlign: "left",
                            padding: "0px 8px",
                        },
                        tooltip: {
                            position: "relative",
                            width: "300px",
                            height: "inherit",
                            alignSelf: "center",
                        },
                        tooltipArrow: {
                            content: " ",
                            left: "90%",
                            border: "solid transparent",
                            height: "0",
                            width: "0",
                            position: "absolute",
                            pointerEvents: "none",
                            borderWidth: "6px",
                            marginLeft: "-6",
                            borderBottomColor: "#464653",
                            bottom: "98%",
                        },
                        tooltipToast: {
                            backgroundColor: "#464653",
                            color: "#fff",
                            borderRadius: "6px",
                            padding: "5px",
                        },
                    };
                    var ZM = "game-details-page-container";
                    function Zo(qR) {
                        var qS = {
                            isActive: false,
                        };
                        if (Zt.tooltipViewModel.currentTarget && Zt.tooltipViewModel.currentTarget.contains(qR.target)) {
                            qR.stopPropagation();
                        }
                        Zt.tooltipViewModel.update(qS);
                        var qP = document.getElementById(ZM);
                        if (qP) {
                            qP.removeEventListener("click", Zo);
                        }
                    }
                    var Zu = (function (qR) {
                        function _qS(qP) {
                            var qX = qR.call(this, qP) || this;
                            var qs = {
                                isActive: false,
                                title: "",
                                desc: "",
                                posY: 0,
                            };
                            qX.state = qs;
                            return qX;
                        }
                        __extends(_qS, qR);
                        _qS.prototype.componentDidUpdate = function () {
                            if (this.state.isActive) {
                                var qP = document.getElementById(ZM);
                                if (qP) {
                                    qP.addEventListener("click", Zo);
                                }
                            }
                        };
                        _qS.prototype.componentWillUnmount = function () {
                            var qP = document.getElementById(ZM);
                            if (qP) {
                                qP.removeEventListener("click", Zo);
                            }
                            Zt.tooltipViewModel.dispose("tooltipProps");
                        };
                        _qS.prototype.componentDidMount = function () {
                            var qP = this;
                            Zt.tooltipViewModel.observe("tooltipProps", function (qX) {
                                var qs = {
                                    isActive: qX.isActive,
                                    title: qX.title,
                                    desc: qX.desc,
                                    posY: qX.posY,
                                };
                                qP.setState(qs);
                            });
                        };
                        _qS.prototype.render = function () {
                            var qP = this.state.isActive ? "visible" : "hidden";
                            var qX = this.state.desc;
                            var qs = this.state.title;
                            var qb = this.state.posY;
                            var qV = __assign(__assign({}, ZJ.tooltip), {
                                visibility: qP,
                                top: "-" + qb + "px",
                            });
                            var qr = __assign({}, ZJ.titleText);
                            var qp = __assign({}, ZJ.descText);
                            var qD = __assign({}, ZJ.tooltipArrow);
                            if (this.props.isRTL) {
                                qr.direction = "rtl";
                                qr.textAlign = "right";
                                qp.textAlign = "right";
                                var qQ = qD.left;
                                qD.right = qQ;
                                delete qD.left;
                            }
                            var qU = {
                                id: "tooltip",
                                style: qV,
                            };
                            var qh = {
                                style: qD,
                            };
                            var qC = {
                                id: "tooltip-toast",
                                style: ZJ.tooltipToast,
                            };
                            var qG = {
                                id: "tooltip-title",
                                style: qr,
                            };
                            var qL = {
                                id: "tooltip-desc",
                                style: qp,
                            };
                            return ZI.default.createElement(
                                "div",
                                qU,
                                ZI.default.createElement("div", qh),
                                ZI.default.createElement("div", qC, ZI.default.createElement("div", qG, qs), ZI.default.createElement("div", qL, qX))
                            );
                        };
                        return _qS;
                    })(ZI.default.Component);
                    ZU.default = Zu;
                    var ZH = {};
                    var Zl = {
                        value: true,
                    };
                    (function (qR) {
                        var qS = {
                            value: true,
                        };
                        Object.defineProperty(qR, "__esModule", qS);
                        (function (qP) {
                            qP.BET_SIZE = "History.HistoryTipsBetSize";
                            qP.BET_LEVEL = "History.HistoryTipsBetLevel";
                            qP.PAYOUT = "History.HistoryTipsPayout";
                            qP.WAYS = "History.HistoryTipsWay";
                            qP.COUNTS = "History.HistoryTipsSymbolCount";
                            qP.MULTIPLIER = "History.HistoryTipsMultiplier";
                        })(qR.WinCalculation || (qR.WinCalculation = {}));
                    })(ZH);
                    Object.defineProperty(j2, "__esModule", Zl);
                    var Zv = __importDefault(j3);
                    var x0 = (j2.BetInformation = Zv.default);
                    var x1 = __importDefault(jY);
                    var x2 = (j2.NoWinningCombination = x1.default);
                    var x3 = __importDefault(jz);
                    j2.Payline = x3.default;
                    var x4 = __importDefault(Z4);
                    var x5 = (j2.PayoutTitle = x4.default);
                    var x6 = __importDefault(Zn);
                    j2.TransactionDetails = x6.default;
                    var x7;
                    var x8;
                    var x9;
                    var xd;
                    var xT;
                    var xj = __importDefault(ZU);
                    var xZ = (j2.Tooltip = xj.default);
                    var xx = __importDefault(jB);
                    var xq = (j2.TooltipWrapper = xx.default);
                    var xn = ZH;
                    var xY = (j2.WinCalculation = xn.WinCalculation);
                    function xf(qR) {
                        if (qR) {
                            var qS = qR.rbm;
                            var qP = qR.sym;
                            var qX = qR.obmd;
                            var qs = qR.nbmd;
                            var qb = qR.lm;
                            var qV = qR.bmw;
                            this.removedBonusMultiplier = qS;
                            this.reels = qP;
                            this.originalBonusMultiplier = qX;
                            this.newBonusMultiplier = qs;
                            this.lineMuliplier = qb;
                            this.beforeMultiplierWin = qV;
                        }
                    }
                    function xK(qR) {
                        if (qR) {
                            var qS = qR.bp;
                            var qP = qR.ep;
                            this.bombPositions = qS;
                            this.explodePositions = qP;
                        }
                    }
                    function xm(qR) {
                        if (qR) {
                            var qS = qR.ewp;
                            var qP = qR.bf;
                            this.eliminatedWinPositions = qS;
                            this.bombFeature = qP ? new xK(qP) : undefined;
                        }
                    }
                    function xF(qR) {
                        if (qR) {
                            var qS = qR.s;
                            var qP = qR.rs;
                            var qX = qR.as;
                            var qs = qR.aw;
                            this.currentSpin = qS;
                            this.totalSpin = qP;
                            this.additionalSpin = qX;
                            this.accumulatedWin = qs;
                        }
                    }
                    var xk = (function () {
                        function qR(qS) {
                            if (qS) {
                                var qP = qS.aw;
                                var qX = qS.bl;
                                var qs = qS.cs;
                                var qb = qS.lw;
                                var qV = qS.ml;
                                var qr = qS.np;
                                var qp = qS.nst;
                                var qD = qS.orl;
                                var qQ = qS.psid;
                                var qU = qS.rl;
                                var qh = qS.sid;
                                var qC = qS.st;
                                var qG = qS.tb;
                                var qL = qS.tw;
                                var qW = qS.wbn;
                                var qw = qS.wfg;
                                var qg = qS.wid;
                                var qI = qS.wk;
                                var qt = qS.wp;
                                var qJ = qS.wt;
                                var qM = qS.fs;
                                var qo = qS.sc;
                                var qu = qS.rs;
                                var qH = qS.rwsp;
                                var ql = qS.bm;
                                var qv = qS.ws;
                                var n0 = qS.ptw;
                                var n1 = qS.currentRound;
                                var n2 = qS.totalRound;
                                this.j = qt;
                                if (qt) {
                                    this.T = Object.keys(qt);
                                }
                                this.L = qb;
                                this.S = qh;
                                this.H = qU;
                                this.I = qD;
                                this.N = qV;
                                this.A = qs;
                                this.F = qQ;
                                this.B = qC;
                                this.R = qp;
                                this.P = qg;
                                this.D = qJ;
                                this.M = qI;
                                this.W = qX;
                                this.U = qG;
                                this.V = qP;
                                this.Y = qo;
                                this.q = qW;
                                this.K = qw;
                                this.G = qL;
                                this.J = qr;
                                this.Z = qP;
                                this.$ = ql ? new xf(ql) : undefined;
                                this.ii = qu ? new xm(qu) : undefined;
                                this.ti = qM ? new xF(qM) : undefined;
                                this.ei = qv;
                                this.ni = n0;
                                this.ri = n1;
                                this.ai = n2;
                                this.oi = qH;
                            }
                        }
                        Object.defineProperty(qR.prototype, "currentSpinId", {
                            get: function () {
                                return this.S;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(qR.prototype, "prevSpinId", {
                            get: function () {
                                return this.F;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(qR.prototype, "originalReels", {
                            get: function () {
                                return this.I;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(qR.prototype, "reels", {
                            get: function () {
                                return this.H;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(qR.prototype, "betLevelValue", {
                            get: function () {
                                return this.N;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(qR.prototype, "betSizeValue", {
                            get: function () {
                                return this.A;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(qR.prototype, "winLines", {
                            get: function () {
                                return this.j;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(qR.prototype, "winLineNumbers", {
                            get: function () {
                                return this.T;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(qR.prototype, "winValues", {
                            get: function () {
                                return this.L;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(qR.prototype, "totalWin", {
                            get: function () {
                                return this.G;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(qR.prototype, "netProfit", {
                            get: function () {
                                return this.J;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(qR.prototype, "stateTransitionFrom", {
                            get: function () {
                                return this.B;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(qR.prototype, "stateTransitionTo", {
                            get: function () {
                                return this.R;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(qR.prototype, "walletId", {
                            get: function () {
                                return this.P;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(qR.prototype, "walletType", {
                            get: function () {
                                return this.D;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(qR.prototype, "walletKey", {
                            get: function () {
                                return this.M;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(qR.prototype, "balance", {
                            get: function () {
                                return this.W;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(qR.prototype, "totalBalance", {
                            get: function () {
                                return this.U;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(qR.prototype, "amountWin", {
                            get: function () {
                                return this.V;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(qR.prototype, "freeSpin", {
                            get: function () {
                                return this.ti;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(qR.prototype, "freeSpinCount", {
                            get: function () {
                                return this.Y;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(qR.prototype, "accumlatedWin", {
                            get: function () {
                                return this.Z;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(qR.prototype, "respin", {
                            get: function () {
                                return this.ii;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(qR.prototype, "bonusMultipler", {
                            get: function () {
                                return this.$;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(qR.prototype, "winSymbols", {
                            get: function () {
                                return this.ei;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(qR.prototype, "previousTotalWin", {
                            get: function () {
                                return this.ni;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(qR.prototype, "currentRound", {
                            get: function () {
                                return this.ri;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(qR.prototype, "totalRound", {
                            get: function () {
                                return this.ai;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(qR.prototype, "walletBonus", {
                            get: function () {
                                return this.q;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(qR.prototype, "walletFreeGame", {
                            get: function () {
                                return this.K;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(qR.prototype, "winSymbolPayouts", {
                            get: function () {
                                return this.oi;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        return qR;
                    })();
                    (function (qR) {
                        qR[(qR.NORMAL = 1)] = "NORMAL";
                        qR[(qR.FREESPIN = 21)] = "FREESPIN";
                        qR[(qR.FREE_RESPIN = 22)] = "FREE_RESPIN";
                        qR[(qR.RESPIN = 4)] = "RESPIN";
                    })(xd || (xd = {}));
                    (function (qR) {
                        qR[(qR.WILD = 0)] = "WILD";
                        qR[(qR.SCATTER = 1)] = "SCATTER";
                        qR[(qR.BOMB = 2)] = "BOMB";
                        qR[(qR.SEVEN = 3)] = "SEVEN";
                        qR[(qR.BELL = 4)] = "BELL";
                        qR[(qR.SOUP = 5)] = "SOUP";
                        qR[(qR.DUMPLING = 6)] = "DUMPLING";
                        qR[(qR.WATERMELON = 7)] = "WATERMELON";
                        qR[(qR.CHERRY = 8)] = "CHERRY";
                        qR[(qR.ACE = 9)] = "ACE";
                        qR[(qR.KING = 10)] = "KING";
                        qR[(qR.QUEEN = 11)] = "QUEEN";
                        qR[(qR.JACK = 12)] = "JACK";
                    })(xT || (xT = {}));
                    var xa;
                    (x7 = {})[xT.WILD] = "s_wild";
                    x7[xT.SCATTER] = "s_freespins";
                    x7[xT.BOMB] = "bomb";
                    x7[xT.SEVEN] = "h_7";
                    x7[xT.BELL] = "h_bell";
                    x7[xT.SOUP] = "h_soup";
                    x7[xT.DUMPLING] = "h_dumpling";
                    x7[xT.WATERMELON] = "h_watermelon";
                    x7[xT.CHERRY] = "h_cherry";
                    x7[xT.ACE] = "l_a";
                    x7[xT.KING] = "l_k";
                    x7[xT.QUEEN] = "l_q";
                    x7[xT.JACK] = "l_j";
                    var xO = x7;
                    (function (qR) {
                        qR[(qR.MAIN_REEL = 0)] = "MAIN_REEL";
                        qR[(qR.FREESPIN_REEL = 1)] = "FREESPIN_REEL";
                        qR[(qR.MULTIPLIER_REEL = 2)] = "MULTIPLIER_REEL";
                        qR[(qR.PAYOUT_EFFECT = 3)] = "PAYOUT_EFFECT";
                        qR[(qR.BOMB_EFFECT = 4)] = "BOMB_EFFECT";
                    })(xa || (xa = {}));
                    var xz;
                    (x8 = {})[xa.MAIN_REEL] = "reel_bg";
                    x8[xa.FREESPIN_REEL] = "freespin_bg";
                    x8[xa.MULTIPLIER_REEL] = "multiplier_bg";
                    x8[xa.PAYOUT_EFFECT] = "highlighted_bg";
                    x8[xa.BOMB_EFFECT] = "fx_win_highlight";
                    var xB = x8;
                    var xy = {
                        0: "num0_multiplier",
                        1: "num1_multiplier",
                        2: "num2_multiplier",
                        3: "num3_multiplier",
                        4: "num4_multiplier",
                        5: "num5_multiplier",
                        6: "num6_multiplier",
                        7: "num7_multiplier",
                        8: "num8_multiplier",
                        9: "num9_multiplier",
                        X: "multi_multiplier",
                    };
                    var xe = {
                        0: "num0_multiplier_selected",
                        1: "num1_multiplier_selected",
                        2: "num2_multiplier_selected",
                        3: "num3_multiplier_selected",
                        4: "num4_multiplier_selected",
                        5: "num5_multiplier_selected",
                        6: "num6_multiplier_selected",
                        7: "num7_multiplier_selected",
                        8: "num8_multiplier_selected",
                        9: "num9_multiplier_selected",
                        X: "multi_multiplier_selected",
                    };
                    (function (qR) {
                        qR[(qR.MULTIPLIER_BLUE = 0)] = "MULTIPLIER_BLUE";
                        qR[(qR.MULTIPLIER_YELLOW = 1)] = "MULTIPLIER_YELLOW";
                        qR[(qR.ARROW_BLUE = 2)] = "ARROW_BLUE";
                        qR[(qR.ARROW_YELLOW = 3)] = "ARROW_YELLOW";
                    })(xz || (xz = {}));
                    (x9 = {})[xz.MULTIPLIER_BLUE] = "multiplier_bluehighlight";
                    x9[xz.MULTIPLIER_YELLOW] = "multiplier_yellowhighlight";
                    x9[xz.ARROW_BLUE] = "BlueArrow";
                    x9[xz.ARROW_YELLOW] = "YellowArrow";
                    var q9 = x9;
                    var qd = {
                        mainView: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            height: "83px",
                        },
                        multiplierViewHolder: {
                            display: "flex",
                            position: "relative",
                            width: "180px",
                            height: "60px",
                            marginTop: "-265px",
                            zIndex: 2,
                        },
                        multiplierContainer: {
                            position: "relative",
                            width: "inherit",
                            height: "inherit",
                        },
                        imgTransformator: {
                            transformOrigin: "left top",
                            transform: "scale(0.495)",
                            marginTop: "-17px",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        },
                        bgTransformator: {
                            transformOrigin: "top",
                            transform: "scale(0.3)",
                            zIndex: 1,
                        },
                        arrowTransformator: {
                            position: "absolute",
                            marginLeft: "143px",
                            transform: "scale(0.3) rotateZ(17deg)",
                        },
                        multiplierTextformator: {
                            display: "flex",
                            position: "absolute",
                            flexDirection: "row",
                            marginTop: "13.5px",
                            marginLeft: "-36px",
                            transform: "scale(0.5) rotateZ(-18deg)",
                            overflow: "inherit",
                        },
                        multiplierNumberformator: {
                            position: "relative",
                            transform: "scale(0.3)",
                        },
                    };
                    var qT = (function (qR) {
                        function qS() {
                            return (qR !== null && qR.apply(this, arguments)) || this;
                        }
                        TL(qS, qR);
                        qS.prototype.render = function () {
                            var qP;
                            var qX;
                            var qs;
                            var qb = this.props.data;
                            var qV = qb.bonusMultipler;
                            var qr = qb.stateTransitionFrom;
                            var qp = qV.reels;
                            var qD = qV.originalBonusMultiplier;
                            var qQ = qr === xd.FREESPIN || qr === xd.FREE_RESPIN;
                            var qU = qQ ? q9[xz.ARROW_YELLOW] : q9[xz.ARROW_BLUE];
                            var qh = qQ ? xe[5] : xe[3];
                            var qC = [false, false, false, false, false];
                            var qG = {
                                id: "multiplier_holder",
                                style: qd.mainView,
                            };
                            var qL = {
                                className: "multiplier_bg main_ui_atlas",
                                id: "multiplier_bg",
                                style: qd.bgTransformator,
                            };
                            var qW = {
                                id: "multiplier_symbol_holder",
                                style: qd.multiplierViewHolder,
                            };
                            var qw = {
                                marginTop: -12,
                                marginLeft: -20,
                            };
                            var qg = {
                                marginTop: -11.5,
                                marginLeft: -48.5,
                            };
                            var qI = {
                                marginTop: -11.5,
                                marginLeft: -48.5,
                            };
                            if (qV.lineMuliplier) {
                                Object.keys(qV.lineMuliplier).forEach(function (qt) {
                                    var qJ = qV.lineMuliplier[qt];
                                    qC[qJ] = true;
                                });
                            }
                            return f.createElement(
                                "div",
                                qG,
                                f.createElement("div", qL),
                                f.createElement(
                                    "div",
                                    qW,
                                    ((qP = TW(TW({}, qd.multiplierNumberformator), qw)),
                                    (qX = TW(TW({}, qd.multiplierNumberformator), qg)),
                                    (qs = TW(TW({}, qd.multiplierNumberformator), qI)),
                                    f.createElement(
                                        "span",
                                        {
                                            className: "multiplier",
                                            style: qd.multiplierTextformator,
                                        },
                                        f.createElement("span", {
                                            className: "multi_multiplier_selected number_atlas",
                                            style: qP,
                                        }),
                                        f.createElement("span", {
                                            className: qh + " number_atlas",
                                            style: qX,
                                        }),
                                        f.createElement("span", {
                                            className: "num0_multiplier_selected number_atlas",
                                            style: qs,
                                        })
                                    )),
                                    f.createElement(
                                        "div",
                                        {
                                            id: "multiplier_contianer_1",
                                            style: qd.multiplierContainer,
                                        },
                                        f.createElement(qZ, {
                                            index: 0,
                                            symbol: qp[4],
                                            multiplier: qD[4],
                                            isWin: qC[4],
                                            isFS: qQ,
                                        })
                                    ),
                                    f.createElement(
                                        "div",
                                        {
                                            id: "multiplier_contianer_2",
                                            style: qd.multiplierContainer,
                                        },
                                        f.createElement(qZ, {
                                            index: 1,
                                            symbol: qp[3],
                                            multiplier: qD[3],
                                            isWin: qC[3],
                                            isFS: qQ,
                                        })
                                    ),
                                    f.createElement(
                                        "div",
                                        {
                                            id: "multiplier_contianer_3",
                                            style: qd.multiplierContainer,
                                        },
                                        f.createElement(qZ, {
                                            index: 2,
                                            symbol: qp[2],
                                            multiplier: qD[2],
                                            isWin: qC[2],
                                            isFS: qQ,
                                        })
                                    ),
                                    f.createElement(
                                        "div",
                                        {
                                            id: "multiplier_contianer_4",
                                            style: qd.multiplierContainer,
                                        },
                                        f.createElement(qZ, {
                                            index: 3,
                                            symbol: qp[1],
                                            multiplier: qD[1],
                                            isWin: qC[1],
                                            isFS: qQ,
                                        })
                                    ),
                                    f.createElement(
                                        "div",
                                        {
                                            id: "multiplier_contianer_5",
                                            style: qd.multiplierContainer,
                                        },
                                        f.createElement(qZ, {
                                            index: 4,
                                            symbol: qp[0],
                                            multiplier: qD[0],
                                            isWin: qC[0],
                                            isFS: qQ,
                                        })
                                    ),
                                    f.createElement("span", {
                                        className: qU + " multiplier_symbol_effect_atlas",
                                        style: qd.arrowTransformator,
                                    })
                                )
                            );
                        };
                        return qS;
                    })(f.Component);
                    var qj = {
                        multiplierItemContainer: {
                            width: "30px",
                            height: "32px",
                        },
                        imgTransformator: {
                            transformOrigin: "left top",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        },
                        multiplierHolderContainer: {
                            display: "flex",
                            position: "relative",
                            flexDirection: "column",
                            width: "30px",
                            height: "32px",
                            alignItems: "center",
                        },
                        numberTransformator: {
                            transform: "scale(0.16)",
                            position: "relative",
                            transformOrigin: "center top",
                            overflow: "inherit",
                        },
                        multiplierTransformator: {
                            position: "absolute",
                        },
                        winbackgroundTransformator: {
                            position: "absolute",
                        },
                    };
                    var qZ = (function (qR) {
                        function _qS2() {
                            return (qR !== null && qR.apply(this, arguments)) || this;
                        }
                        TL(_qS2, qR);
                        _qS2.prototype.render = function () {
                            var qP = this.props;
                            var qX = qP.index;
                            var qs = qP.symbol;
                            var qb = qP.multiplier;
                            var qV = qP.isWin;
                            var qr = qP.isFS;
                            var qp = qV ? this.li(qs) : this.si(qs);
                            var qD = this.pi(qX);
                            var qQ = qV ? xe : xy;
                            var qU = qV ? "payline_atlas" : qr ? "multiplier_symbol_freespin_atlas" : "multiplier_symbol_atlas";
                            function qh(qL, qW, qw) {
                                if (qV) {
                                    var qg = qr ? q9[xz.MULTIPLIER_YELLOW] : q9[xz.MULTIPLIER_BLUE];
                                    var qI = "scale(" + qw + ")";
                                    var qt = TW(TW({}, qj.winbackgroundTransformator), {
                                        marginTop: qL,
                                        marginLeft: qW,
                                        position: "relative",
                                        transform: qI,
                                    });
                                    var qJ = {
                                        className: qg + " multiplier_symbol_effect_atlas",
                                        style: qt,
                                    };
                                    return f.createElement("div", qJ);
                                }
                            }
                            var qC = {
                                id: "multiplier_symbol",
                                key: "multiplier-symbol-" + qs,
                                style: qD,
                            };
                            var qG = {
                                id: "multiplier_holder",
                                key: "multiplier-holder-" + qs,
                                style: qj.multiplierHolderContainer,
                            };
                            return f.createElement(
                                "div",
                                qC,
                                f.createElement(
                                    "div",
                                    qG,
                                    (function () {
                                        if (qb < 10) {
                                            var qW = {
                                                marginTop: 2,
                                                marginLeft: -55,
                                            };
                                            var qw = TW(TW({}, qj.numberTransformator), {
                                                marginTop: 12,
                                                marginLeft: 9,
                                            });
                                            var qg = TW(TW({}, qj.multiplierTransformator), qW);
                                            var qI = {
                                                className: qQ[qb] + " number_atlas",
                                                key: "multiplier-number-sprite-" + qs,
                                                style: qw,
                                            };
                                            var qt = {
                                                className: qQ.X + " number_atlas",
                                                key: "multiplier-sprite-" + qs,
                                                style: qg,
                                            };
                                            return f.createElement("div", qI, f.createElement("span", qt), qh(-10, -45, 2.45), qh(75, -45, 2.3));
                                        }
                                        var qo = {
                                            marginTop: 3,
                                            marginLeft: -48,
                                        };
                                        var qu = Math.floor(qb / 10);
                                        var qH = qb % 10;
                                        var ql = TW(TW({}, qj.numberTransformator), {
                                            marginTop: 12,
                                            marginLeft: 0,
                                        });
                                        var qv = TW(TW({}, qj.multiplierTransformator), {
                                            marginTop: 0,
                                            marginLeft: 45,
                                        });
                                        var n0 = TW(TW({}, qj.multiplierTransformator), qo);
                                        var n1 = {
                                            className: qQ[qu] + " number_atlas",
                                            key: "multiplier-number-front-sprite-" + qs,
                                            style: ql,
                                        };
                                        var n2 = {
                                            className: qQ[qH] + " number_atlas",
                                            key: "multiplier-number-back-sprite-" + qs,
                                            style: qv,
                                        };
                                        var n3 = {
                                            className: qQ.X + " number_atlas",
                                            key: "multiplier-sprite-" + qs,
                                            style: n0,
                                        };
                                        return f.createElement(
                                            "div",
                                            n1,
                                            f.createElement("span", n2),
                                            f.createElement("span", n3),
                                            qh(-10, -20, 2.45),
                                            qh(75, -20, 2.3)
                                        );
                                    })()
                                ),
                                f.createElement("div", {
                                    className: xO[qs] + " " + qU,
                                    key: "multiplier-symbol-sprite-" + qs,
                                    style: qp,
                                })
                            );
                        };
                        _qS2.prototype.si = function (qP) {
                            var qX = 0;
                            var qs = 2;
                            var qb = 0.4;
                            switch (qP) {
                                case xT.SEVEN:
                                    qX = 0;
                                    qs = 4;
                                    qb = 0.32;
                                    break;
                                case xT.BELL:
                                case xT.SOUP:
                                case xT.DUMPLING:
                                    qX = -2;
                                    qs = 1;
                                    break;
                                case xT.WATERMELON:
                                    qX = -2;
                                    qs = 0;
                                    break;
                                case xT.CHERRY:
                                    qX = -2;
                                    qs = 2;
                                    break;
                                case xT.ACE:
                                    qX = 1;
                                    qs = 2;
                                    qb = 0.33;
                                    break;
                                case xT.KING:
                                    qX = 1;
                                    qb = 0.33;
                                    break;
                                case xT.QUEEN:
                                case xT.JACK:
                                    qX = 0;
                                    qs = 1;
                                    qb = 0.35;
                            }
                            var qV = "scale(" + qb + ")";
                            var qr = {
                                marginTop: qX,
                                marginLeft: qs,
                                transform: qV,
                                opacity: 0.6,
                            };
                            return TW(TW({}, qd.imgTransformator), qr);
                        };
                        _qS2.prototype.li = function (qP) {
                            var qX = -4;
                            var qs = 2;
                            switch (qP) {
                                case xT.SEVEN:
                                case xT.BELL:
                                case xT.SOUP:
                                case xT.DUMPLING:
                                    qs = 0;
                                    break;
                                case xT.WATERMELON:
                                case xT.CHERRY:
                                    qs = 1;
                                    break;
                                case xT.ACE:
                                case xT.KING:
                                    qX = -5;
                                    qs = 0;
                                    break;
                                case xT.QUEEN:
                                    qX = -5.5;
                                    qs = 0;
                                    break;
                                case xT.JACK:
                                    qX = -4;
                                    qs = 0;
                            }
                            var qb = {
                                marginTop: qX,
                                marginLeft: qs,
                                transform: "scale(0.2)",
                            };
                            return TW(TW({}, qd.imgTransformator), qb);
                        };
                        _qS2.prototype.pi = function (qP) {
                            var qX = 0;
                            var qs = 0;
                            var qb = 0;
                            switch (qP) {
                                case 0:
                                    qX = 2;
                                    qs = 6;
                                    qb = -12;
                                    break;
                                case 1:
                                    qX = -3;
                                    qs = 3;
                                    qb = -6;
                                    break;
                                case 2:
                                    qX = -5;
                                    qs = -1;
                                    qb = 0;
                                    break;
                                case 3:
                                    qX = -3;
                                    qs = -5;
                                    qb = 6;
                                    break;
                                case 4:
                                    qX = 2;
                                    qs = -8;
                                    qb = 12;
                            }
                            var qV = "rotateZ(" + qb + "deg)";
                            var qr = {
                                marginTop: qX,
                                marginLeft: qs,
                                transform: qV,
                            };
                            return TW(TW({}, qj.multiplierItemContainer), qr);
                        };
                        return _qS2;
                    })(f.Component);
                    var qx = {
                        mainView: {
                            display: "flex",
                        },
                        betResultsContainer: {
                            position: "relative",
                            width: "175px",
                            height: "inherit",
                            margin: "auto auto 20px auto",
                        },
                        rowContainer: {
                            position: "relative",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "inherit",
                            height: "inherit",
                            marginTop: "-17px",
                        },
                        slotItemColumn: {
                            position: "relative",
                            width: "54.5px",
                            height: "inherit",
                            display: "flex",
                            flexDirection: "column",
                        },
                        slotItemContainer: {
                            width: "54.5px",
                            height: "46.5px",
                        },
                        imgTransformator: {
                            display: "block",
                            position: "absolute",
                            transformOrigin: "top left",
                        },
                    };
                    var qq = (function (qR) {
                        function qS(qP) {
                            return qR.call(this, qP) || this;
                        }
                        TL(qS, qR);
                        qS.prototype.ui = function (qP) {
                            var qX = [[], [], []];
                            qP.forEach(function (qs, qb) {
                                var qV = Math.floor(qb / 3);
                                if (qV < 3) {
                                    qX[qV].push(qs);
                                }
                            });
                            return qX;
                        };
                        qS.prototype.render = function () {
                            var qX = this.props.data;
                            var qs = qX.reels;
                            var qb = qX.respin;
                            var qV = qX.stateTransitionFrom;
                            var qr = qX.winLines;
                            var qp = this.ui(qs);
                            var qD = qV === xd.FREESPIN || qV === xd.FREE_RESPIN ? xB[xa.FREESPIN_REEL] : xB[xa.MAIN_REEL];
                            var qQ = TW(TW({}, qx.imgTransformator), {
                                transform: "scale(0.3)",
                                marginTop: "-20px",
                            });
                            var qU = [false, false, false, false, false, false, false, false, false];
                            if (qr) {
                                Object.keys(qr).forEach(function (qI) {
                                    qr[qI].forEach(function (qt) {
                                        qU[qt] = true;
                                    });
                                });
                            }
                            var qh = [0, 0, 0, 0, 0, 0, 0, 0, 0];
                            var qC = qb ? qb.bombFeature : undefined;
                            var qG = {
                                id: "slot-main-view",
                                key: "slot-main-view",
                                style: qx.mainView,
                            };
                            var qL = {
                                id: "bet-results-container",
                                key: "bet-results-container",
                                style: qx.betResultsContainer,
                            };
                            var qW = {
                                data: this.props.data,
                            };
                            var qw = {
                                className: qD + " main_ui_atlas",
                                key: "reel-base",
                                style: qQ,
                            };
                            var qg = {
                                id: "symbols-container",
                                key: "symbols-container",
                                style: qx.rowContainer,
                            };
                            if (qC) {
                                qC.bombPositions.forEach(function (qI) {
                                    qh[qI] = 2;
                                });
                                qC.explodePositions.forEach(function (qI) {
                                    qh[qI] = 1;
                                });
                            }
                            return f.createElement(
                                "div",
                                qG,
                                f.createElement(
                                    "div",
                                    qL,
                                    f.createElement(qT, qW),
                                    f.createElement("span", qw),
                                    f.createElement("div", qg, this.hi(qp, qU, qh))
                                )
                            );
                        };
                        qS.prototype.hi = function (qP, qX, qs) {
                            var qb = this;
                            var qV = 0;
                            return qP.map(function (qr, qp) {
                                var qD = qr.map(function (qU) {
                                    qV++;
                                    return qb.ci(qU, qV, qX[qV - 1], qs[qV - 1]);
                                });
                                var qQ = {
                                    id: "slot-item-column",
                                    key: "slot-item-column-" + qp,
                                    style: qx.slotItemColumn,
                                };
                                return f.createElement("div", qQ, qD);
                            });
                        };
                        qS.prototype.ci = function (qP, qX, qs, qb) {
                            var qV = xO[qP];
                            var qr = this.si(qP);
                            var qp = "symbol_atlas";
                            var qD = {
                                id: "slot-item",
                                key: "slot-item-" + qX,
                                style: qx.slotItemContainer,
                            };
                            if (!(qP !== xT.SCATTER && qP !== xT.WILD)) {
                                qp = "special_symbol_atlas";
                            }
                            return f.createElement(
                                "div",
                                qD,
                                (function () {
                                    if (qs) {
                                        var qU = TW(TW({}, qx.imgTransformator), {
                                            margin: "-1px 0px 0px -2px",
                                            transform: "scale(0.3)",
                                        });
                                        var qh = {
                                            className: "highlighted_bg main_ui_atlas",
                                            key: "win-highlight-sprite-" + qX,
                                            style: qU,
                                        };
                                        return f.createElement("span", qh);
                                    }
                                })(),
                                f.createElement("span", {
                                    className: qV + " " + qp,
                                    key: "slot-item-sprite-" + qX,
                                    style: qr,
                                }),
                                (function () {
                                    if (qb !== 0) {
                                        var qQ = qb === 2 ? 0.5 : 1;
                                        var qU = TW(TW({}, qx.imgTransformator), {
                                            margin: "-1px 0px 0px 2px",
                                            transform: "scale(0.29)",
                                            opacity: qQ,
                                        });
                                        var qh = {
                                            className: "fx_win_highlight main_ui_atlas",
                                            key: "boom-effect-sprite-" + qX,
                                            style: qU,
                                        };
                                        return f.createElement("span", qh);
                                    }
                                })()
                            );
                        };
                        qS.prototype.si = function (qP) {
                            var qX = 0;
                            var qs = 0;
                            var qb = 0.3;
                            switch (qP) {
                                case xT.WILD:
                                    qX = -8;
                                    qs = -5;
                                    break;
                                case xT.SCATTER:
                                    qX = -7;
                                    qs = -3.5;
                                    qb = 0.29;
                                    break;
                                case xT.BOMB:
                                    qX = -6;
                                    qs = -2;
                                    qb = 0.28;
                                    break;
                                case xT.SEVEN:
                                    qX = -8;
                                    qs = -7;
                                    qb = 0.3;
                                    break;
                                case xT.BELL:
                                case xT.SOUP:
                                    qX = -8;
                                    qs = -5;
                                    break;
                                case xT.DUMPLING:
                                    qX = -8;
                                    qs = -6;
                                    break;
                                case xT.WATERMELON:
                                    qX = -10;
                                    qs = -4;
                                    break;
                                case xT.CHERRY:
                                    qX = -8;
                                    qs = -5;
                                    break;
                                case xT.ACE:
                                    qX = -3.5;
                                    qs = -2;
                                    qb = 0.27;
                                    break;
                                case xT.KING:
                                case xT.QUEEN:
                                case xT.JACK:
                                    qX = -5.5;
                                    qs = -2;
                                    qb = 0.27;
                            }
                            var qV = "scale(" + qb + ")";
                            var qr = {
                                marginTop: qX,
                                marginLeft: qs,
                                transform: qV,
                            };
                            return TW(TW({}, qx.imgTransformator), qr);
                        };
                        return qS;
                    })(f.Component);
                    var qn =
                        ".symbol_atlas{background-image:url(symbol.png);background-repeat:no-repeat;background-size:1272px 424px;display:inline-block;overflow:hidden}.symbol_atlas.h_7{background-position:-1px -1px}.symbol_atlas.h_7,.symbol_atlas.l_a{height:210px;min-height:210px;min-width:210px;width:210px}.symbol_atlas.l_a{background-position:-1px -213px}.symbol_atlas.h_bell{background-position:-213px -1px}.symbol_atlas.bomb,.symbol_atlas.h_bell{height:210px;min-height:210px;min-width:210px;width:210px}.symbol_atlas.bomb{background-position:-213px -213px}.symbol_atlas.h_cherry{background-position:-425px -1px}.symbol_atlas.h_cherry,.symbol_atlas.h_dumpling{height:210px;min-height:210px;min-width:210px;width:210px}.symbol_atlas.h_dumpling{background-position:-425px -213px}.symbol_atlas.l_j{background-position:-637px -1px}.symbol_atlas.l_j,.symbol_atlas.l_k{height:210px;min-height:210px;min-width:210px;width:210px}.symbol_atlas.l_k{background-position:-637px -213px}.symbol_atlas.l_q{background-position:-849px -1px}.symbol_atlas.h_soup,.symbol_atlas.l_q{height:210px;min-height:210px;min-width:210px;width:210px}.symbol_atlas.h_soup{background-position:-849px -213px}.symbol_atlas.h_watermelon{background-position:-1061px -1px;height:210px;min-height:210px;min-width:210px;width:210px}";
                    var qY =
                        ".payline_atlas{background-image:url(payline.png);background-repeat:no-repeat;background-size:1602px 146px;display:inline-block;overflow:hidden}.payline_atlas.h_7{background-position:-1px -1px}.payline_atlas.h_7,.payline_atlas.l_a{height:144px;min-height:144px;min-width:144px;width:144px}.payline_atlas.l_a{background-position:-147px -1px}.payline_atlas.h_bell{background-position:-293px -1px}.payline_atlas.bomb,.payline_atlas.h_bell{height:144px;min-height:144px;min-width:144px;width:144px}.payline_atlas.bomb{background-position:-439px -1px}.payline_atlas.h_cherry{background-position:-585px -1px;height:144px;min-height:144px;min-width:144px;width:144px}.payline_atlas.h_dumpling{background-position:-1461px -1px;height:140px;min-height:140px;min-width:140px;width:140px}.payline_atlas.l_j{background-position:-731px -1px}.payline_atlas.l_j,.payline_atlas.l_k{height:144px;min-height:144px;min-width:144px;width:144px}.payline_atlas.l_k{background-position:-877px -1px}.payline_atlas.l_q{background-position:-1023px -1px}.payline_atlas.h_soup,.payline_atlas.l_q{height:144px;min-height:144px;min-width:144px;width:144px}.payline_atlas.h_soup{background-position:-1169px -1px}.payline_atlas.h_watermelon{background-position:-1315px -1px;height:144px;min-height:144px;min-width:144px;width:144px}";
                    var qf =
                        ".special_payline_atlas{background-image:url(special_payline.png);background-repeat:no-repeat;background-size:292px 146px;display:inline-block;overflow:hidden}.special_payline_atlas.s_freespins{background-position:-1px -1px;height:144px;min-height:144px;min-width:144px;width:144px}.special_payline_atlas.s_wild{background-position:-147px -1px;height:144px;min-height:144px;min-width:144px;width:144px}";
                    var qK =
                        ".special_symbol_atlas{background-image:url(special_symbol.png);background-repeat:no-repeat;background-size:424px 212px;display:inline-block;overflow:hidden}.special_symbol_atlas.s_freespins{background-position:-1px -1px;height:210px;min-height:210px;min-width:210px;width:210px}.special_symbol_atlas.s_wild{background-position:-213px -1px;height:210px;min-height:210px;min-width:210px;width:210px}";
                    var qm =
                        ".main_ui_atlas{background-image:url(main_ui.png);background-repeat:no-repeat;background-size:902px 1248px;display:inline-block;overflow:hidden}.freespin_bg{background-position:-1px -1px;height:486px;min-height:486px;min-width:579px;width:579px}.fx_win_highlight{background-position:-582px -1px;height:165px;min-height:165px;min-width:174px;width:174px}.highlighted_bg{background-position:-582px -168px;height:162px;min-height:162px;min-width:189px;width:189px}.multiplier_bg{background-position:-1px -977px;height:270px;min-height:270px;min-width:900px;width:900px}.reel_bg{background-position:-1px -489px;height:486px;min-height:486px;min-width:579px;width:579px}";
                    var qF =
                        ".number_atlas{background-image:url(number.png);background-repeat:no-repeat;background-size:350px 350px;display:inline-block;overflow:hidden}.num0_multiplier_selected{background-position:-1px -1px;height:82px;min-height:82px;min-width:62px;width:62px}.num0_multiplier{background-position:-117px -253px;height:82px;min-height:82px;min-width:55px;width:55px}.num1_multiplier_selected{background-position:-65px -1px;height:82px;min-height:82px;min-width:62px;width:62px}.num1_multiplier{background-position:-306px -169px;height:82px;min-height:82px;min-width:43px;width:43px}.num2_multiplier_selected{background-position:-129px -1px;height:82px;min-height:82px;min-width:62px;width:62px}.num2_multiplier{background-position:-1px -253px;height:82px;min-height:82px;min-width:56px;width:56px}.num3_multiplier_selected{background-position:-193px -1px;height:82px;min-height:82px;min-width:62px;width:62px}.num3_multiplier{background-position:-174px -253px;height:82px;min-height:82px;min-width:55px;width:55px}.num4_multiplier_selected{background-position:-257px -1px}.num4_multiplier,.num4_multiplier_selected{height:82px;min-height:82px;min-width:62px;width:62px}.num4_multiplier{background-position:-1px -85px}.num5_multiplier_selected{background-position:-65px -85px;height:82px;min-height:82px;min-width:62px;width:62px}.num5_multiplier{background-position:-288px -253px;height:82px;min-height:82px;min-width:54px;width:54px}.num6_multiplier_selected{background-position:-129px -85px;height:82px;min-height:82px;min-width:62px;width:62px}.num6_multiplier{background-position:-129px -169px;height:82px;min-height:82px;min-width:57px;width:57px}.num7_multiplier_selected{background-position:-193px -85px;height:82px;min-height:82px;min-width:62px;width:62px}.num7_multiplier{background-position:-231px -253px;height:80px;min-height:80px;min-width:55px;width:55px}.num8_multiplier_selected{background-position:-257px -85px;height:82px;min-height:82px;min-width:62px;width:62px}.num8_multiplier{background-position:-188px -169px;height:82px;min-height:82px;min-width:57px;width:57px}.num9_multiplier_selected{background-position:-1px -169px;height:82px;min-height:82px;min-width:62px;width:62px}.num9_multiplier{background-position:-247px -169px;height:82px;min-height:82px;min-width:57px;width:57px}.multi_multiplier_selected{background-position:-65px -169px;height:82px;min-height:82px;min-width:62px;width:62px}.multi_multiplier{background-position:-59px -253px;height:78px;min-height:78px;min-width:56px;width:56px}";
                    var qk =
                        ".multiplier_symbol_atlas{background-image:url(multiplier_symbol.png);background-repeat:no-repeat;background-size:740px 59px;display:inline-block;overflow:hidden}.multiplier_symbol_atlas.h_7{background-position:-1px -1px;height:57px;min-height:57px;min-width:72px;width:72px}.multiplier_symbol_atlas.h_bell{background-position:-75px -1px;height:57px;min-height:57px;min-width:72px;width:72px}.multiplier_symbol_atlas.h_cherry{background-position:-149px -1px;height:57px;min-height:57px;min-width:72px;width:72px}.multiplier_symbol_atlas.h_dumpling{background-position:-223px -1px;height:57px;min-height:57px;min-width:72px;width:72px}.multiplier_symbol_atlas.h_soup{background-position:-297px -1px;height:57px;min-height:57px;min-width:72px;width:72px}.multiplier_symbol_atlas.l_a{background-position:-371px -1px;height:57px;min-height:57px;min-width:72px;width:72px}.multiplier_symbol_atlas.l_j{background-position:-445px -1px;height:57px;min-height:57px;min-width:72px;width:72px}.multiplier_symbol_atlas.l_k{background-position:-519px -1px;height:57px;min-height:57px;min-width:72px;width:72px}.multiplier_symbol_atlas.l_q{background-position:-593px -1px;height:57px;min-height:57px;min-width:72px;width:72px}.multiplier_symbol_atlas.h_watermelon{background-position:-667px -1px;height:57px;min-height:57px;min-width:72px;width:72px}";
                    var qa =
                        ".multiplier_symbol_freespin_atlas{background-image:url(multiplier_symbol.png);background-repeat:no-repeat;background-size:740px 59px;display:inline-block;overflow:hidden}.multiplier_symbol_freespin_atlas.h_7{background-position:-1px -1px;height:57px;min-height:57px;min-width:72px;width:72px}.multiplier_symbol_freespin_atlas.h_bell{background-position:-75px -1px;height:57px;min-height:57px;min-width:72px;width:72px}.multiplier_symbol_freespin_atlas.h_cherry{background-position:-149px -1px;height:57px;min-height:57px;min-width:72px;width:72px}.multiplier_symbol_freespin_atlas.h_dumpling{background-position:-223px -1px;height:57px;min-height:57px;min-width:72px;width:72px}.multiplier_symbol_freespin_atlas.h_soup{background-position:-297px -1px;height:57px;min-height:57px;min-width:72px;width:72px}.multiplier_symbol_freespin_atlas.l_a{background-position:-371px -1px;height:57px;min-height:57px;min-width:72px;width:72px}.multiplier_symbol_freespin_atlas.l_j{background-position:-445px -1px;height:57px;min-height:57px;min-width:72px;width:72px}.multiplier_symbol_freespin_atlas.l_k{background-position:-519px -1px;height:57px;min-height:57px;min-width:72px;width:72px}.multiplier_symbol_freespin_atlas.l_q{background-position:-593px -1px;height:57px;min-height:57px;min-width:72px;width:72px}.multiplier_symbol_freespin_atlas.h_watermelon{background-position:-667px -1px;height:57px;min-height:57px;min-width:72px;width:72px}";
                    var qO =
                        ".multiplier_symbol_effect_atlas{background-image:url(multiplier_symbol_effect.png);background-repeat:no-repeat;background-size:95px 284px;display:inline-block;overflow:hidden}.BlueArrow{background-position:-1px -167px;height:57px;min-height:57px;min-width:72px;width:72px}.multiplier_bluehighlight{background-position:-1px -1px;height:81px;min-height:81px;min-width:93px;width:93px}.multiplier_yellowhighlight{background-position:-1px -84px;height:81px;min-height:81px;min-width:93px;width:93px}.YellowArrow{background-position:-1px -226px;height:57px;min-height:57px;min-width:72px;width:72px}";
                    var qc =
                        ".multiplier{background-image:url(multiplier.png);background-position:-1px -1px;background-repeat:no-repeat;background-size:53px 25px;display:inline-block;height:23px;min-height:23px;min-width:51px;overflow:hidden;width:51px}";
                    var qE = {
                        payoutContent: {
                            display: "flex",
                            justifyContent: "space-between",
                            flexDirection: "column",
                            alignItems: "center",
                            width: "inherit",
                            margin: "auto",
                        },
                        payoutItemContent: {
                            display: "flex",
                            width: "inherit",
                            height: "48px",
                            justifyContent: "space-between",
                            flexDirection: "row",
                        },
                        imgTransformator: {
                            display: "block",
                            transformOrigin: "top left",
                            transform: "scale(0.32)",
                            marginTop: "-2px",
                            marginLeft: "5px",
                        },
                        scatterImgTransformator: {
                            display: "block",
                            transformOrigin: "top left",
                            transform: "scale(0.3)",
                            marginTop: "-1px",
                        },
                        scatterPaylineImgTransformator: {
                            display: "block",
                            transformOrigin: "top left",
                            transform: "scale(0.48)",
                            marginTop: "8px",
                            marginLeft: "3px",
                        },
                        commonSymbolContainer: {
                            width: "52px",
                            height: "inherit",
                            position: "relative",
                        },
                        commonItemContainer: {
                            display: "flex",
                            height: "inherit",
                        },
                        commonMainTextContainer: {
                            width: "inherit",
                            position: "relative",
                            flexDirection: "column",
                            marginTop: "10px",
                        },
                        commonMainText: {
                            fontSize: "14px",
                            color: "rgba(255, 255, 255, 0.6)",
                            textAlign: "left",
                        },
                        commonMainSubText: {
                            fontSize: "11px",
                            color: "rgba(255, 255, 255, 0.4)",
                        },
                        commonSecondaryTextContainer: {
                            width: "inherit",
                            position: "relative",
                            marginTop: "15px",
                        },
                        commonSecondaryText: {
                            fontSize: "14px",
                            color: "rgba(255, 255, 255, 0.6)",
                            textAlign: "right",
                        },
                        commonSecondarySubText: {
                            fontSize: "11px",
                            color: "rgba(255, 255, 255, 0.4)",
                            textAlign: "right",
                        },
                        freespinCountTextContainer: {
                            width: "73px",
                            position: "relative",
                            marginTop: "15px",
                        },
                        freespinTextContainer: {
                            width: "175px",
                            position: "relative",
                            marginTop: "15px",
                        },
                        freespinCountTextStyle: {
                            fontSize: "14px",
                            color: "rgba(255, 255, 255, 0.6)",
                            textAlign: "start",
                        },
                        freeSpinTextStyle: {
                            width: "175px",
                            fontSize: "14px",
                            color: "rgba(255, 255, 255, 0.6)",
                            textAlign: "right",
                        },
                    };
                    var qz = (function (qR) {
                        function qS(qP) {
                            return qR.call(this, qP) || this;
                        }
                        TL(qS, qR);
                        qS.prototype.render = function () {
                            var qP = {
                                id: "payout-main-view",
                                key: "payout-main-view",
                                style: qE.payoutContent,
                            };
                            return f.createElement("div", qP, this.mi());
                        };
                        qS.prototype.mi = function () {
                            var qP = [];
                            var qX = this.props.data;
                            var qs = qX.winSymbols;
                            var qb = qX.freeSpin;
                            var qV = qX.stateTransitionTo;
                            var qr = qX.stateTransitionFrom;
                            var qp = qX.respin;
                            if (!qs) {
                                qP.push(
                                    f.createElement(x2, {
                                        key: "no-winning-combination",
                                    })
                                );
                            }
                            if (qs) {
                                var qQ = this.di();
                                if (qQ.length !== 0) {
                                    qP.push(qQ);
                                }
                            }
                            var qU = qp ? qp.bombFeature : undefined;
                            if (qU) {
                                var qh = this.xi(qU.bombPositions.length);
                                qP.push(qh);
                            }
                            if ((qr === xd.NORMAL && qV === xd.FREESPIN) || (qr === xd.RESPIN && qV === xd.FREESPIN)) {
                                var qC = this.gi(qb.currentSpin / 3, qb.currentSpin);
                                qP.push(qC);
                            }
                            if (qr === xd.FREE_RESPIN && qV === xd.FREESPIN && qb.additionalSpin) {
                                qC = this.gi(qb.additionalSpin / 3, qb.additionalSpin);
                                qP.push(qC);
                            }
                            return qP;
                        };
                        qS.prototype.di = function () {
                            var qP = this.props.data;
                            var qX = qP.winSymbols;
                            var qs = qP.winLines;
                            var qb = qP.winValues;
                            var qV = qP.bonusMultipler;
                            var qr = qP.betLevelValue;
                            var qp = qP.betSizeValue;
                            var qD = qP.winSymbolPayouts;
                            var qQ = [];
                            var qU = this.getSinglePayoutItems.bind(this);
                            var qh = qV ? qV.lineMuliplier : undefined;
                            var qC = [];
                            var qG = [];
                            if (qh) {
                                Object.keys(qh).forEach(function (qL) {
                                    qC.push(qV.reels[qh[qL]]);
                                    qG.push(qV.originalBonusMultiplier[qh[qL]]);
                                });
                            }
                            qX.forEach(function (qL, qW) {
                                var qw;
                                var qg;
                                var qI = false;
                                var qt = 1;
                                qC.forEach(function (qv, n0) {
                                    if (qv === qL) {
                                        qI = true;
                                        qt = qG[n0];
                                    }
                                });
                                var qJ = qb[qW + 1];
                                var qM = qs[qW + 1].length;
                                var qo = xO[qL] + " payline_atlas";
                                var qu = qD
                                    ? qD[qW + 1]
                                    : (function () {
                                          for (var qv = [], n0 = 0; n0 < arguments.length; n0++) {
                                              qv[n0] = arguments[n0];
                                          }
                                          var n1 = qv.reduce(function (n2, n3) {
                                              return n2 / n3;
                                          });
                                          return Math.round(n1);
                                      })(qJ, qr, qp, qM) / qt;
                                var qH = {};
                                if (qt > 1) {
                                    (qw = {})[xY.BET_SIZE] = K.formatCurrency(qp, "");
                                    qw[xY.BET_LEVEL] = qr;
                                    qw[xY.PAYOUT] = qu;
                                    qw[xY.COUNTS] = qM;
                                    qw[xY.MULTIPLIER] = qt;
                                    qH = qw;
                                } else {
                                    (qg = {})[xY.BET_SIZE] = K.formatCurrency(qp, "");
                                    qg[xY.BET_LEVEL] = qr;
                                    qg[xY.PAYOUT] = qu;
                                    qg[xY.COUNTS] = qM;
                                    qH = qg;
                                }
                                Object.keys(qH).forEach(function (qv) {
                                    qH[qv] = K.formatGroup(qH[qv]);
                                });
                                var ql = qU(qL, qI, qM, qt, qJ, qo, qH);
                                qQ.push(ql);
                            });
                            return qQ;
                        };
                        qS.prototype.getSinglePayoutItems = function (qP, qX, qs, qb, qV, qr, qp, qD, qQ) {
                            var qU = qE;
                            function qh() {
                                var qC = qE.imgTransformator;
                                var qG = {
                                    className: "payoutItem",
                                    key: "payout-item-" + qP,
                                    style: qE.payoutItemContent,
                                };
                                var qL = {
                                    className: "payoutSymbolItem",
                                    key: "payout-symbol-item-" + qP,
                                    style: qE.commonItemContainer,
                                };
                                var qW = {
                                    className: "payoutSymbolContainer",
                                    key: "payout-symbol-container-" + qP,
                                    style: qE.commonSymbolContainer,
                                };
                                if (qQ) {
                                    qC = qQ;
                                }
                                return f.createElement(
                                    "div",
                                    qG,
                                    f.createElement(
                                        "div",
                                        qL,
                                        f.createElement(
                                            "div",
                                            qW,
                                            f.createElement("span", {
                                                className: "" + qr,
                                                key: "payout_symbol_sprite_" + qP,
                                                style: qC,
                                            })
                                        ),
                                        f.createElement(
                                            "div",
                                            {
                                                className: "numberOfKindContainer",
                                                key: "number-Of-Kind-Container-" + qP,
                                                style: qE.commonMainTextContainer,
                                            },
                                            f.createElement(
                                                "div",
                                                {
                                                    className: "numberOfKindText",
                                                    key: "number-Of-Kind-Text-" + qP,
                                                    style: qU.commonMainText,
                                                },
                                                "x " + qs
                                            )
                                        )
                                    ),
                                    f.createElement(
                                        "div",
                                        {
                                            className: "textSection",
                                            key: "textSection " + qP,
                                            style: qE.commonItemContainer,
                                        },
                                        (function () {
                                            if (qX) {
                                                var qw = {
                                                    marginTop: -10,
                                                };
                                                var qg = TW(TW({}, qU.commonSecondaryText), qw);
                                                var qI = {
                                                    className: "winAmountContainer",
                                                    key: "win-amount-Container-" + qP,
                                                    style: qE.commonSecondaryTextContainer,
                                                };
                                                var qt = {
                                                    className: "winAmountText",
                                                    key: "win-amount-text-" + qP,
                                                    style: qg,
                                                };
                                                var qJ = {
                                                    className: "subWinAmountText",
                                                    key: "sub-win-amount-text-" + qP,
                                                    style: qU.commonSecondarySubText,
                                                };
                                                return f.createElement(
                                                    "div",
                                                    qI,
                                                    f.createElement("div", qt, K.formatCurrency(qV)),
                                                    f.createElement("div", qJ, K.formatCurrency(qV / qb) + " x " + qb)
                                                );
                                            }
                                            var qM;
                                            qM = qD || K.formatCurrency(qV);
                                            var qu = TW(TW({}, qU.commonMainTextContainer), {
                                                width: 180,
                                            });
                                            var qH = {
                                                className: "winAmountContainer",
                                                key: "win-amount-Container-" + qP,
                                                style: qu,
                                            };
                                            var ql = {
                                                className: "winAmountText",
                                                key: "win-amount-text-" + qP,
                                                style: qU.commonSecondaryText,
                                            };
                                            return f.createElement("div", qH, f.createElement("div", ql, "" + qM));
                                        })()
                                    )
                                );
                            }
                            if (qp) {
                                return f.createElement(
                                    xq,
                                    {
                                        key: "payout-item-" + qP + "-container",
                                        winCalculation: qp,
                                    },
                                    qh()
                                );
                            } else {
                                return qh();
                            }
                        };
                        qS.prototype.xi = function (qP) {
                            var qX = [];
                            var qs = this.getSinglePayoutItems.bind(this)(
                                "bomb",
                                false,
                                qP,
                                0,
                                0,
                                xO[xT.BOMB] + " payline_atlas",
                                undefined,
                                shell.I18n.t("HipHopPandaHistory.HistoryDetailItemPrefabBombFeature")
                            );
                            qX.push(qs);
                            return qX;
                        };
                        qS.prototype.gi = function (qP, qX) {
                            var qs = [];
                            var qb = this.getSinglePayoutItems.bind(this)(
                                "freeSpin",
                                false,
                                qP,
                                0,
                                0,
                                xO[xT.SCATTER] + " special_payline_atlas",
                                undefined,
                                qX + " " + shell.I18n.t("HipHopPandaHistory.HistoryDetailItemPrefabFreeSpin"),
                                qE.scatterImgTransformator
                            );
                            qs.push(qb);
                            return qs;
                        };
                        return qS;
                    })(f.Component);
                    qz.contextType = j0;
                    var qe = {
                        betDetailContainer: {
                            display: "flex",
                            flexDirection: "column",
                        },
                    };
                    var qA = (function (qR) {
                        function qS() {
                            var qP = (qR !== null && qR.apply(this, arguments)) || this;
                            var qs = {
                                cssFile: qk,
                                imageFile: "history/multiplier_symbol.png",
                                tint: {
                                    r: 67,
                                    g: 169,
                                    b: 228,
                                    a: 1,
                                },
                                appendHeader: true,
                            };
                            var qV = {
                                cssFile: qa,
                                imageFile: "history/multiplier_symbol.png",
                                tint: {
                                    r: 192,
                                    g: 67,
                                    b: 228,
                                    a: 1,
                                },
                                appendHeader: true,
                            };
                            var qr = {
                                cssFile: qn,
                                imageFile: "history/symbol.png",
                                appendHeader: true,
                            };
                            var qp = {
                                cssFile: qK,
                                imageFile: "history/special_symbol.png",
                                appendHeader: true,
                            };
                            var qD = {
                                cssFile: qY,
                                imageFile: "history/payline.png",
                                appendHeader: true,
                            };
                            var qQ = {
                                cssFile: qf,
                                imageFile: "history/special_payline.png",
                                appendHeader: true,
                            };
                            var qU = {
                                cssFile: qm,
                                imageFile: "history/main_ui.png",
                                appendHeader: true,
                            };
                            var qh = {
                                cssFile: qF,
                                imageFile: "history/number.png",
                                appendHeader: true,
                            };
                            var qC = {
                                cssFile: qO,
                                imageFile: "history/multiplier_symbol_effect.png",
                                appendHeader: true,
                            };
                            var qG = {
                                cssFile: qc,
                                imageFile: "history/multiplier.png",
                                appendHeader: true,
                            };
                            qP.fi = "DimSumMania";
                            qP.l = [qs, qV];
                            qP.p = [qr, qp, qD, qQ, qU, qh, qC, qG];
                            return qP;
                        }
                        TL(qS, qR);
                        qS.prototype.compileAllHistoryDataForFreeSpinList = function (qP) {
                            for (var qX = [], qs = 0; qs < qP.length; qs++) {
                                var qb = qP[qs];
                                if (qb.gameDetail.st === xd.FREESPIN || qb.gameDetail.st === xd.NORMAL) {
                                    qX.push(qb);
                                } else if (qb.gameDetail.st === xd.FREE_RESPIN || qb.gameDetail.st === xd.RESPIN) {
                                    var qV = qX[qX.length - 1];
                                    qV.totalWinLossAmount = qV.totalWinLossAmount + qb.totalWinLossAmount;
                                    qV.totalWinAmount = qV.totalWinAmount + qb.totalWinAmount;
                                }
                            }
                            return qX;
                        };
                        qS.prototype.compileAllHistoryDataBecomePages = function (qP) {
                            for (var qX = [], qs = 0, qb = [], qV = 0; qV < qP.length; qV++) {
                                var qr = qP[qV].gameDetail.nst;
                                if (qr === xd.RESPIN || qr === xd.FREE_RESPIN) {
                                    qs++;
                                    qb.push(qP[qV].gameDetail);
                                    qP[qV].gameDetail.currentRound = qs;
                                } else {
                                    if (qb.length > 0) {
                                        qs++;
                                        qb.push(qP[qV].gameDetail);
                                        qP[qV].gameDetail.currentRound = qs;
                                        qb.forEach(function (qp) {
                                            qp.totalRound = qs;
                                        });
                                    }
                                    qb.length = 0;
                                    qs = 0;
                                }
                            }
                            for (qV = 0; qV < qP.length; qV++) {
                                qX.push(qP[qV]);
                            }
                            qP.splice(0, qP.length);
                            qV = 0;
                            for (; qV < qX.length; qV++) {
                                qP.push(qX[qV]);
                            }
                            return qP;
                        };
                        qS.prototype.getNavTitle = function (qP, qX) {
                            if (qX === 0) {
                                return shell.I18n.t("History.HistoryNormalSpin");
                            } else {
                                return shell.I18n.t("HipHopPandaHistory.HistoryBarItemPrefabFreeSpin") + ": " + qX + "/" + (qP.length - 1);
                            }
                        };
                        qS.prototype.showNavArrowDropDown = function (qP) {
                            var qX = 0;
                            qP.forEach(function (qs) {
                                if (qs.gameDetail.nst !== xd.NORMAL) {
                                    qX++;
                                }
                            });
                            return qX > 1;
                        };
                        qS.prototype.getAdditionalSpinsTitle = function () {
                            return shell.I18n.t("HipHopPandaHistory.HistoryBarItemPrefabFreeSpin");
                        };
                        return qS;
                    })(j1);
                    var qN = (function (qR) {
                        function qS(qP) {
                            var qX = qR.call(this, qP) || this;
                            qX.state = {
                                gameDetailModel: new xk(qX.props.data),
                            };
                            return qX;
                        }
                        TL(qS, qR);
                        qS.prototype.componentDidUpdate = function (qP) {
                            if (this.props.data !== qP.data) {
                                this.setState({
                                    gameDetailModel: new xk(this.props.data),
                                });
                            }
                        };
                        qS.prototype.render = function () {
                            var qP = {
                                id: "bet-details-container",
                                style: qe.betDetailContainer,
                            };
                            var qX = {
                                isBO: false,
                            };
                            var qs = {
                                value: qX,
                            };
                            return f.createElement(
                                "div",
                                qP,
                                f.createElement(
                                    j0.Provider,
                                    qs,
                                    f.createElement(x0, {
                                        betSize: K.formatCurrency(this.state.gameDetailModel.betSizeValue, ""),
                                        betLevel: this.state.gameDetailModel.betLevelValue,
                                        themeColor: "#4581F7",
                                        currentRoundCount: this.state.gameDetailModel.currentRound,
                                        totalRoundCount: this.state.gameDetailModel.totalRound,
                                    }),
                                    f.createElement(qq, {
                                        data: this.state.gameDetailModel,
                                    }),
                                    f.createElement(x5, null),
                                    f.createElement(qz, {
                                        data: this.state.gameDetailModel,
                                    }),
                                    this.props.isCurrentPage && f.createElement(xZ, null)
                                )
                            );
                        };
                        return qS;
                    })(f.Component);
                    Y("GHBetDetailModule", new qA(qN));
                    Y("GHComponentGameId", 33);
                },
            };
        });
    })();
})();
