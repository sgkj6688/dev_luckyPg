(function () {
    "use strict";

    (function () {
        var P;
        (function (R) {
            R.h = "window";
            R.u = "self";
        })(P || (P = {}));
        var I = (0, eval)("this");
        I[P.u];
        var m = I[P.h];
        System.register(["6d5cafebdb", "react", "react-dom", "99212c6ec4", "react-spring/renderprops", "react-spring"], function (R) {
            "use strict";

            var T;
            var q;
            var H;
            var U;
            var S;
            var z;
            var A;
            var X;
            var B;
            var j;
            var k;
            var O;
            var w;
            var Q;
            var M;
            var K;
            var W;
            return {
                setters: [
                    null,
                    function (V) {
                        T = V.default;
                        q = V.useEffect;
                        H = V.useRef;
                        U = V.useState;
                        S = V.forwardRef;
                        z = V.useImperativeHandle;
                    },
                    function (V) {
                        A = V.default;
                    },
                    function (V) {
                        X = V.ResRC;
                        B = V.Utils;
                        j = V.Serialiser;
                        k = V.Deserialiser;
                        O = V.XHR;
                        w = V.Preference;
                    },
                    function (V) {
                        Q = V.Transition;
                        M = V.animated;
                    },
                    function (V) {
                        K = V.useSpring;
                        W = V.animated;
                    },
                ],
                execute: function () {
                    R({
                        p: function (mF) {
                            D7.launchType = mF;
                        },
                        isCard: function () {
                            return D7.launchType === xx.CARD;
                        },
                    });
                    var x0 = m.__extends;
                    var x1 = m.__assign;
                    var x2 = m.__decorate;
                    var x3 = m.__awaiter;
                    var x4 = m.__generator;
                    var x5 = m.__read;
                    function x6(mF, mG) {
                        var mC = {};
                        for (var ms in mG) {
                            if (mF.hasOwnProperty(ms)) {
                                mC[mF[ms]] = mG[ms];
                            } else {
                                mC[ms] = mG[ms];
                            }
                        }
                        return mC;
                    }
                    x6(
                        {
                            unloadBundleAsset: "releaseBundleAsset",
                            unload: "release",
                            unloadBundle: "releaseBundle",
                            deleteBundle: "removeBundle",
                            loadByBundleAsset: "loadBundleAsset",
                            loadRemoteBySingle: "loadRemoteSingle",
                        },
                        X
                    );
                    var x7 = x6(
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
                    function x8(mF) {
                        return Object.prototype.toString.call(mF) === "[object Object]";
                    }
                    function x9(mF) {
                        return function (mG, mC) {
                            mG =
                                mG ||
                                (function (ms) {
                                    var mE = undefined;
                                    if (x8(ms) && ms.hasOwnProperty("err") && ms.hasOwnProperty("dt")) {
                                        var mf = ms.err;
                                        if (mf) {
                                            mE = (function (mc) {
                                                var mZ;
                                                if (!x8(mc)) {
                                                    mc = {};
                                                }
                                                if (
                                                    !(
                                                        mc.hasOwnProperty("cd") &&
                                                        (typeof (mZ = mc.cd) == "number" ||
                                                            (typeof mZ == "string" && mZ !== "" && !/\s/.test(mZ) && !isNaN(+mZ)))
                                                    )
                                                ) {
                                                    mc.cd = 6501;
                                                }
                                                return new (0, shell.Error)(shell.ServerError.Domain, mc.cd, mc.tid);
                                            })(mf);
                                        }
                                    } else {
                                        mE = new (0, shell.Error)(shell.ServerError.Domain, 6501);
                                    }
                                    return mE;
                                })(mC);
                            mF(mG, mC);
                        };
                    }
                    var xx;
                    var xD;
                    var xJ;
                    var xN;
                    var xP = (function (mF) {
                        function mG() {
                            var mC = (mF !== null && mF.apply(this, arguments)) || this;
                            mC.encodingParameters = function (ms) {
                                var mE = mG.m;
                                mE.length = 0;
                                function mf(mL) {
                                    if (Object.prototype.hasOwnProperty.call(ms, mL)) {
                                        var R0 = ms[mL];
                                        if (R0 !== undefined) {
                                            if (R0 instanceof Array) {
                                                R0.forEach(function (R1) {
                                                    mE.push(`${encodeURIComponent(mL)}=${encodeURIComponent(JSON.stringify(R1))}`);
                                                });
                                            } else if (typeof R0 == "object") {
                                                mE.push(`${encodeURIComponent(mL)}=${encodeURIComponent(JSON.stringify(R0))}`);
                                            } else {
                                                mE.push(`${encodeURIComponent(mL)}=${encodeURIComponent(R0)}`);
                                            }
                                        }
                                    }
                                }
                                for (var mc in ms) {
                                    mf(mc);
                                }
                                var mZ = mE.join("&");
                                mE.length = 0;
                                return mZ;
                            };
                            return mC;
                        }
                        x0(mG, mF);
                        mG.m = [];
                        return mG;
                    })(j);
                    var xI = (function (mF) {
                        function mG() {
                            var mC = (mF !== null && mF.apply(this, arguments)) || this;
                            mC.transformResponse = function (ms) {
                                return ms;
                            };
                            return mC;
                        }
                        x0(mG, mF);
                        return mG;
                    })(k);
                    var xm = (function () {
                        function mF() {
                            this.v = new xP();
                            this._ = new xI("json");
                            this.k = new O(this.v, this._);
                        }
                        mF.prototype.request = function (mG, mC, ms) {
                            return (function (mE, mf, mc, mZ) {
                                var mL = mE.request("POST", mf, mc, x9(mZ));
                                return function () {
                                    return mL.abort();
                                };
                            })(this.k, mG, mC, ms);
                        };
                        return mF;
                    })();
                    R("GameHistoryView", xx);
                    (function (mF) {
                        mF[(mF.GAME = 1)] = "GAME";
                        mF[(mF.CARD = 2)] = "CARD";
                        mF[(mF.SLOT = 3)] = "SLOT";
                        mF[(mF.APIREPLAY = 5)] = "APIREPLAY";
                    })(xx || R("GameHistoryView", (xx = {})));
                    (function (mF) {
                        mF[(mF.None = -1)] = "None";
                        mF[(mF.HistoryList = 0)] = "HistoryList";
                        mF[(mF.HistoryDetails = 1)] = "HistoryDetails";
                        mF[(mF.HistoryFreeSpinDetails = 2)] = "HistoryFreeSpinDetails";
                        mF[(mF.HistoryCalendar = 3)] = "HistoryCalendar";
                        mF[(mF.HistoryDismiss = 4)] = "HistoryDismiss";
                    })(xD || (xD = {}));
                    (function (mF) {
                        mF[(mF.SELECTION = 0)] = "SELECTION";
                        mF[(mF.CUSTOM = 1)] = "CUSTOM";
                    })(xJ || (xJ = {}));
                    (function (mF) {
                        mF[(mF.LANDSCAPE = 90)] = "LANDSCAPE";
                        mF[(mF.PORTRAIT = 0)] = "PORTRAIT";
                    })(xN || (xN = {}));
                    var xR;
                    var xl = {
                        tension: 163,
                        friction: 21,
                        velocity: 10,
                        clamp: true,
                    };
                    var xu = {
                        SLOT_GAME: {
                            r: 255,
                            g: 255,
                            b: 255,
                            a: 1,
                        },
                        CARD_GAME: {
                            r: 255,
                            g: 255,
                            b: 255,
                            a: 1,
                        },
                    };
                    (function (mF) {
                        mF[(mF.NormalBet = 1)] = "NormalBet";
                        mF[(mF.FreeBet = 2)] = "FreeBet";
                        mF[(mF.BonusBet = 3)] = "BonusBet";
                        mF[(mF.ReBet = 4)] = "ReBet";
                        mF[(mF.JackpotBet = 8)] = "JackpotBet";
                        mF[(mF.ContinueBet = 9)] = "ContinueBet";
                        mF[(mF.CashWallet = 11)] = "CashWallet";
                        mF[(mF.BonusWallet = 12)] = "BonusWallet";
                        mF[(mF.FreeGameWallet = 13)] = "FreeGameWallet";
                        mF[(mF.PointTournament = 21)] = "PointTournament";
                        mF[(mF.CashTournament = 22)] = "CashTournament";
                        mF[(mF.AutoBet = 31)] = "AutoBet";
                        mF[(mF.TurboBet = 32)] = "TurboBet";
                        mF[(mF.BaccaratSupersix = 41)] = "BaccaratSupersix";
                        mF[(mF.BaccaratCommission = 42)] = "BaccaratCommission";
                        mF[(mF.AmericanBlackjack = 43)] = "AmericanBlackjack";
                        mF[(mF.EuropeanBlackjack = 44)] = "EuropeanBlackjack";
                        mF[(mF.FreeHand = 51)] = "FreeHand";
                    })(xR || (xR = {}));
                    var xT = 160;
                    var xd = "gh-btn-opacity-effect";
                    if (!(I !== undefined || m !== undefined)) {
                        if (typeof global != "undefined") {
                            global;
                        }
                    }
                    var xq = {};
                    var xh = {};
                    var xH = {};
                    (function (mF) {
                        var mG;
                        var mC;
                        Object.defineProperty(mF, "__esModule", {
                            value: true,
                        });
                        mF.styles = mF.LocalePrefix = mF.CaseType = mF.CalendarState = undefined;
                        mF.styles = {
                            customPageContainer: {
                                height: "272px",
                                width: "360px",
                                position: "absolute",
                                display: "flex",
                                flexDirection: "column",
                            },
                            calendarCustomDescriptionLabel: {
                                height: "30px",
                                fontSize: "12px",
                                width: "120px",
                                textAlign: "center",
                                alignItems: "center",
                                justifyContent: "center",
                                display: "flex",
                                opacity: 1,
                            },
                            calendarCustomDescriptionLabelHorizontal: {
                                height: "35px",
                                fontSize: "20px",
                                textAlign: "center",
                                alignItems: "center",
                                display: "flex",
                                opacity: 1,
                                left: "17px",
                                position: "relative",
                            },
                            datePageContainer: {
                                paddingTop: "27px",
                                display: "block",
                                height: "185px",
                                width: "360px",
                            },
                            dateRowContainer: {
                                display: "flex",
                                width: "360px",
                            },
                            descriptionContainer: {
                                height: "162px",
                                width: "32px",
                                display: "flex",
                                fontSize: "11px",
                                alignItems: "center",
                                textAlign: "center",
                                flexDirection: "column",
                                paddingRight: "40px",
                                paddingTop: "35px",
                            },
                            datePickerContainer: {
                                height: "162px",
                                width: "360px",
                                flexDirection: "column",
                                display: "flex",
                            },
                            comfirmButtonContainer: {
                                top: "0px",
                                margin: "auto",
                                height: "32px",
                                width: "280px",
                                fontSize: "12px",
                                display: "flex",
                                alignItems: "center",
                                textAlign: "center",
                                paddingRight: "40px",
                                paddingLeft: "40px",
                                paddingTop: "5px",
                                paddingBottom: "10px",
                            },
                            comfirmButtonContainerHorizontal: {
                                top: "0px",
                                margin: "auto",
                                height: "32px",
                                width: "340px",
                                fontSize: "20px",
                                display: "flex",
                                alignItems: "center",
                                textAlign: "center",
                                paddingRight: "0px",
                                paddingLeft: "15px",
                                paddingTop: "5px",
                                paddingBottom: "10px",
                            },
                            confirmButtonCardContainer: {
                                width: "300px",
                                height: "35px",
                                textAlign: "center",
                                fontSize: "30px",
                                color: "#FFFFFF",
                                textShadow: "1px 1px 1px rgba(0,0,0,0.3)",
                                borderRadius: "30px",
                                backgroundImage: "linear-gradient(to bottom,rgba(251, 233, 111, 1) 30%,rgb(255, 225, 150) 50%,rgba(223, 155, 25, 1) 90%)",
                                position: "relative",
                                margin: "auto",
                            },
                            confirmButtonLabel: {
                                height: "35px",
                                width: "inherit",
                                fontSize: "12px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#FFFFFF",
                                borderColor: "#FFFFFF",
                                borderStyle: "none",
                                borderWidth: "1px",
                                backgroundColor: "none",
                            },
                            confirmButtonLabelHorizontal: {
                                height: "35px",
                                width: "inherit",
                                fontSize: "20px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#FFFFFF",
                                borderColor: "#FFFFFF",
                                borderStyle: "none",
                                borderWidth: "1px",
                                borderRadius: "5px",
                                backgroundColor: "none",
                            },
                            calendarDateListItem: {
                                height: "30px",
                            },
                            dotContainer: {
                                height: "85px",
                                width: "8px",
                                position: "relative",
                                left: "55px",
                                display: "flex",
                                flexWrap: "wrap",
                            },
                            dateItem: {
                                height: "32px",
                                width: "44px",
                                fontSize: "12px",
                                alignItems: "center",
                                textAlign: "center",
                                display: "none",
                            },
                            dateItemHorizontal: {
                                height: "32px",
                                fontSize: "16px",
                                alignItems: "center",
                                textAlign: "center",
                                display: "flex",
                            },
                            connectImageContainer: {
                                paddingTop: "14px",
                                paddingBottom: "14px",
                                width: "4px",
                                height: "44px",
                            },
                            dateContainer: {
                                width: "200px",
                                height: "30px",
                                fontSize: "12px",
                                alignItems: "center",
                                textAlign: "center",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                display: "inline-flex",
                            },
                            dateContainerHorizontal: {
                                width: "340px",
                                height: "50px",
                                fontSize: "12px",
                                alignItems: "center",
                                textAlign: "center",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                display: "inline-flex",
                                position: "relative",
                                left: "17px",
                            },
                            selectScrollContainer: {
                                width: "62px",
                                background: "#",
                                fontSize: "12px",
                            },
                            selectScrollContainerHorizontal: {
                                width: "100px",
                                height: "35px",
                                borderRadius: "5px",
                                background: "#",
                                fontSize: "20px",
                            },
                            dotIcon: {
                                height: "5px",
                                width: "5px",
                                opacity: 1,
                                borderRadius: "50%",
                            },
                            selectContainer: {
                                position: "relative",
                                fontFamily: "Arial",
                            },
                        };
                        (function (ms) {
                            ms[(ms.SELECTION = 0)] = "SELECTION";
                            ms[(ms.CUSTOM = 1)] = "CUSTOM";
                        })(mF.CalendarState || (mF.CalendarState = {}));
                        (mG = mF.CaseType || (mF.CaseType = {}))[(mG.SLOT_GAME = 0)] = "SLOT_GAME";
                        mG[(mG.CARD_GAME = 1)] = "CARD_GAME";
                        (mC = mF.LocalePrefix || (mF.LocalePrefix = {})).DEFAULT = "CustomCalendar";
                        mC.TOURNAMENT = "TournamentCustomCalender";
                    })(xH);
                    var xU = {};
                    function xg(mF, mG) {
                        var mC = new Date(mF);
                        if (mG) {
                            mC.setHours(23);
                            mC.setMinutes(59);
                            mC.setSeconds(59);
                            mC.setMilliseconds(999);
                        } else {
                            mC.setHours(0);
                            mC.setMinutes(0);
                            mC.setSeconds(0);
                            mC.setMilliseconds(0);
                        }
                        return mC;
                    }
                    Object.defineProperty(xU, "__esModule", {
                        value: true,
                    });
                    xU.convertTimeToBeginningOrEndOfTheDay = xU.getCustomDateObject = undefined;
                    xU.getCustomDateObject = function (mF) {
                        var mG = new Date(mF.startDate);
                        var mC = new Date(mF.endDate);
                        return {
                            startDate: xg(mG),
                            endDate: xg(mC, true),
                        };
                    };
                    xU.convertTimeToBeginningOrEndOfTheDay = xg;
                    var xS = {};
                    var xv = {};
                    function xz(mF) {
                        var mG;
                        var mC;
                        var ms;
                        var mE;
                        var mf;
                        var mc = [];
                        mG = document.getElementsByClassName("select-items");
                        mC = document.getElementsByClassName("select-selected");
                        mE = mG.length;
                        mf = mC.length;
                        ms = 0;
                        for (; ms < mf; ms++) {
                            if (mF === mC[ms]) {
                                mc.push(ms);
                            } else {
                                mC[ms].classList.remove("select-arrow-active");
                            }
                        }
                        for (ms = 0; ms < mE; ms++) {
                            if (mc.indexOf(ms)) {
                                mG[ms].classList.add("select-hide");
                            }
                        }
                    }
                    Object.defineProperty(xv, "__esModule", {
                        value: true,
                    });
                    xv.customSelectUtil = undefined;
                    var xA = (function () {
                        function mF() {}
                        mF.prototype.convertOptionToDiv = function (mG, mC, ms) {
                            var mE;
                            var mf;
                            var mc;
                            var mZ;
                            var mL;
                            var R0;
                            var R1;
                            var R2;
                            var R3;
                            if (ms === undefined) {
                                ms = true;
                            }
                            mZ = (mE = document.getElementsByClassName(mG)).length;
                            mf = 0;
                            for (; mf < mZ; mf++) {
                                (R0 = mE[mf].getElementsByTagName("select")[0]).setAttribute("style", "display:none");
                                mL = R0.length;
                                if (ms) {
                                    R1 = document.createElement("DIV");
                                } else {
                                    for (var R4 = document.getElementsByClassName("select-selected"), R5 = 0; R5 < R4.length; R5++) {
                                        if (R4[R5].parentNode.className === mG) {
                                            R1 = R4[R5];
                                        }
                                    }
                                    xz(this);
                                }
                                R1.setAttribute("class", "select-selected");
                                mE[mf].appendChild(R1);
                                R1.innerHTML = R0.options[R0.selectedIndex].innerHTML;
                                (R2 = document.createElement("DIV")).setAttribute("class", "select-items select-hide");
                                R2.setAttribute("id", "style-scroller");
                                if (mL <= 4) {
                                    R2.setAttribute("style", "height :" + mL * 36 + "px;");
                                } else {
                                    R1.setAttribute("style", "left:1px");
                                    R2.setAttribute("style", "height :155px; overflow: auto; width: 65px;");
                                }
                                mc = 0;
                                for (; mc < mL; mc++) {
                                    (R3 = document.createElement("DIV")).innerHTML = R0.options[mc].innerHTML;
                                    R3.setAttribute("style", "width: 55px;height: 34px;opacity:0.9;");
                                    R3.addEventListener("click", function () {
                                        var R6;
                                        var R7;
                                        var R8;
                                        var R9;
                                        var Rx;
                                        var RD;
                                        var RJ;
                                        RD = (R9 = this.parentNode.parentNode.getElementsByTagName("select")[0]).length;
                                        Rx = this.parentNode.previousSibling;
                                        R7 = 0;
                                        for (; R7 < RD; R7++) {
                                            if (R9.options[R7].innerHTML == this.innerHTML) {
                                                R9.selectedIndex = R7;
                                                Rx.innerHTML = this.innerHTML;
                                                RJ = (R6 = this.parentNode.getElementsByClassName("same-as-selected")).length;
                                                R8 = 0;
                                                for (; R8 < RJ; R8++) {
                                                    R6[R8].removeAttribute("class");
                                                }
                                                this.setAttribute("class", "same-as-selected");
                                                mC(R0.options[R0.selectedIndex].innerHTML);
                                                break;
                                            }
                                        }
                                        Rx.click();
                                    });
                                    R2.appendChild(R3);
                                }
                                mE[mf].appendChild(R2);
                                if (ms) {
                                    R1.addEventListener("click", function (R6) {
                                        R6.stopPropagation();
                                        xz(this);
                                        this.nextSibling.classList.toggle("select-hide");
                                        this.classList.toggle("select-arrow-active");
                                    });
                                }
                            }
                            document.addEventListener("click", xz);
                        };
                        mF.prototype.dynamicChangeAllOption = function (mG) {
                            for (var mC = document.getElementsByClassName("select-selected"), ms = 0; ms < mC.length; ms++) {
                                switch (mC[ms].parentNode.className) {
                                    case "select-container-year-start":
                                        mC[ms].innerHTML = mG.startYear;
                                        break;
                                    case "select-container-month-start":
                                        mC[ms].innerHTML = mG.startMonth;
                                        break;
                                    case "select-container-day-start":
                                        mC[ms].innerHTML = mG.startDay;
                                        break;
                                    case "select-container-year-end":
                                        mC[ms].innerHTML = mG.endYear;
                                        break;
                                    case "select-container-month-end":
                                        mC[ms].innerHTML = mG.endMonth;
                                        break;
                                    case "select-container-day-end":
                                        mC[ms].innerHTML = mG.endDay;
                                }
                            }
                        };
                        mF.prototype.resetTargetOption = function (mG) {
                            for (var mC = document.getElementsByClassName(mG), ms = 0; ms < mC[0].children.length; ms++) {
                                if (mC[0].children[ms].className === "select-items select-hide") {
                                    mC[0].children[ms].remove();
                                }
                            }
                        };
                        mF.prototype.addOptionGlobalStyle = function (mG) {
                            var mC = document.createElement("style");
                            mC.innerHTML =
                                `
          .select-selected {
              background-color:` +
                                mG.backgroundColor +
                                `;
          }
  
          .select-selected:after {
          position: absolute;
          top: 14px;
          right: 10px;
          width: 0;
          height: 0;
          border: 6px solid transparent;
          height: 150px;
          }
  
          .select-selected.select-arrow-active:after {
              border-color: ` +
                                mG.borderColor +
                                ` ;
              top: 7px;
          }
  
          .select-items div,
          .select-selected {
              color: ` +
                                mG.textColor +
                                ";\n            border: " +
                                mG.selectedBorderSize +
                                "px solid transparent;\n            border-color:  " +
                                mG.textColor +
                                `;
              cursor: pointer;
              user-select: none;
              position: relative;
              width: 55px;
              height: 34px;
              align-items: center;
              display: grid;
              font-size: ` +
                                mG.fontSize +
                                `px;
              left: 1px;
          }
  
          .select-items {
              position: absolute;
              background-color : ` +
                                mG.backgroundColor +
                                `;
              top: 100%;
              left: 0;
              right: 0;
              z-index: 99;
          }
  
          .select-hide {
              display: none;
          }
          
          .select-items div:hover,                        
          .same-as-selected {
              background-color: rgba(0, 0, 0, 0.3);
          }
  
          #style-scroller::-webkit-scrollbar-track
          {
              -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
              border-radius: 5px;
              background-color: ` +
                                mG.backgroundColor +
                                `;
          }
  
          #style-scroller::-webkit-scrollbar
          {
           width: 5px;
           background-color: ` +
                                mG.backgroundColor +
                                `;
          }
  
          #style-scroller::-webkit-scrollbar-thumb
          {
           border-radius: 5px;
           -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
           background-color: rgba(255, 255, 255, 0.6);
          }
          `;
                            document.head.appendChild(mC);
                        };
                        return mF;
                    })();
                    xv.customSelectUtil = new xA();
                    Object.defineProperty(xS, "__esModule", {
                        value: true,
                    });
                    xS.CalendarPickDateView = undefined;
                    var xb = __importDefault(T);
                    var xX = xH;
                    var xB = xv;
                    var xy = (function (mF) {
                        function mG(mC) {
                            var ms = mF.call(this, mC) || this;
                            ms.C = ms.C.bind(ms);
                            ms.S = ms.S.bind(ms);
                            xB.customSelectUtil.addOptionGlobalStyle({
                                backgroundColor: ms.props.backgroundColor,
                                borderColor: ms.props.themeColor,
                                textColor: ms.props.themeColor,
                                selectedBorderSize: 1,
                                fontSize: 12,
                            });
                            ms.H = ms.H.bind(ms);
                            ms.j = ms.j.bind(ms);
                            ms.D = ms.D.bind(ms);
                            ms.F = ms.F.bind(ms);
                            return ms;
                        }
                        __extends(mG, mF);
                        mG.prototype.render = function () {
                            var mC = this.props.onSelectedDate;
                            return xb.default.createElement(
                                "div",
                                {
                                    id: "date-container",
                                    style: this.S(),
                                },
                                xb.default.createElement(
                                    "div",
                                    {
                                        className: "select-container-year-" + this.props.extraName,
                                        style: xX.styles.selectContainer,
                                    },
                                    xb.default.createElement(
                                        "select",
                                        {
                                            value: mC.getFullYear().toString(),
                                            style: this.C(),
                                            onChange: function () {},
                                        },
                                        this.j()
                                    )
                                ),
                                xb.default.createElement(
                                    "div",
                                    {
                                        className: "select-container-month-" + this.props.extraName,
                                        style: xX.styles.selectContainer,
                                    },
                                    xb.default.createElement(
                                        "select",
                                        {
                                            value: "" + (mC.getMonth() + 1),
                                            style: this.C(),
                                            onChange: function () {},
                                        },
                                        this.D()
                                    )
                                ),
                                xb.default.createElement(
                                    "div",
                                    {
                                        className: "select-container-day-" + this.props.extraName,
                                        style: xX.styles.selectContainer,
                                    },
                                    xb.default.createElement(
                                        "select",
                                        {
                                            value: mC.getDate().toString(),
                                            style: this.C(),
                                            onChange: function () {},
                                        },
                                        this.F()
                                    )
                                )
                            );
                        };
                        mG.prototype.componentDidMount = function () {
                            this.T(true);
                        };
                        mG.prototype.componentDidUpdate = function (mC) {
                            if (this.props.onSelectedDate !== mC.onSelectedDate) {
                                this.O();
                                this.T(false);
                            }
                        };
                        mG.prototype.O = function () {
                            xB.customSelectUtil.resetTargetOption("select-container-year-" + this.props.extraName);
                            xB.customSelectUtil.resetTargetOption("select-container-month-" + this.props.extraName);
                            xB.customSelectUtil.resetTargetOption("select-container-day-" + this.props.extraName);
                        };
                        mG.prototype.T = function (mC) {
                            xB.customSelectUtil.convertOptionToDiv("select-container-year-" + this.props.extraName, this.H.bind(this, 0), mC);
                            xB.customSelectUtil.convertOptionToDiv("select-container-month-" + this.props.extraName, this.H.bind(this, 1), mC);
                            xB.customSelectUtil.convertOptionToDiv("select-container-day-" + this.props.extraName, this.H.bind(this, 2), mC);
                        };
                        mG.prototype.C = function () {
                            var mC = __assign(__assign({}, xX.styles.selectScrollContainer), {
                                color: "#FFFFFF",
                                borderColor: "#FFFFFF",
                                backgroundColor: "#30303b",
                            });
                            if (this.props.themeColor !== undefined) {
                                mC.color = this.props.themeColor;
                                mC.borderColor = this.props.themeColor;
                            }
                            if (this.props.backgroundColor !== undefined) {
                                mC.backgroundColor = this.props.backgroundColor;
                            }
                            if (shell.environment.isIOS()) {
                                mC.color = "#30303b";
                                mC.backgroundColor = "#FFFFFF";
                            }
                            return mC;
                        };
                        mG.prototype.S = function () {
                            var mC = __assign(__assign({}, xX.styles.dateContainer), {
                                color: "#FFFFFF",
                            });
                            if (this.props.backgroundColor !== undefined) {
                                mC.color = this.props.backgroundColor;
                            }
                            if (this.props.isRTL) {
                                mC.direction = "rtl";
                            }
                            return mC;
                        };
                        mG.prototype.j = function () {
                            for (var mC = [], ms = this.props.onLastDate.getFullYear(), mE = this.props.onBeginDate.getFullYear(); mE <= ms; mE++) {
                                mC.push(
                                    xb.default.createElement(
                                        "option",
                                        {
                                            className: "date-item-year",
                                            key: "date-item-year" + mE,
                                            value: mE,
                                            style: xX.styles.dateItem,
                                        },
                                        mE
                                    )
                                );
                            }
                            return mC;
                        };
                        mG.prototype.D = function () {
                            var mC;
                            var ms = [];
                            var mE = this.props.onBeginDate.getFullYear();
                            var mf = this.props.onLastDate;
                            var mc = mf.getMonth() + 1;
                            var mZ = mf.getFullYear();
                            var mL = this.props.onSelectedDate.getFullYear();
                            var R0 = this.props.onBeginDate;
                            mC = mE === mZ || mL === mE ? R0.getMonth() + 1 : mL === mZ ? 1 : R0.getMonth() + 1;
                            if (mL === mZ) {
                                for (var R1 = mC; R1 <= mc; R1++) {
                                    if (R1 > 0) {
                                        ms.push(
                                            xb.default.createElement(
                                                "option",
                                                {
                                                    className: "date-item-month",
                                                    key: "date-item-month" + R1,
                                                    value: R1,
                                                    style: xX.styles.dateItem,
                                                },
                                                R1
                                            )
                                        );
                                    }
                                }
                            } else {
                                for (R1 = mC; R1 <= 12; R1++) {
                                    ms.push(
                                        xb.default.createElement(
                                            "option",
                                            {
                                                className: "date-item-month",
                                                key: "date-item-month" + R1,
                                                value: R1,
                                                style: xX.styles.dateItem,
                                            },
                                            R1
                                        )
                                    );
                                }
                            }
                            return ms;
                        };
                        mG.prototype.F = function () {
                            var mC;
                            var ms = [];
                            var mE = this.props.onLastDate;
                            var mf = mE.getMonth() + 1;
                            var mc = this.props.onSelectedDate;
                            var mZ = mc.getMonth() + 1;
                            var mL = new Date(mc.getFullYear(), mZ, 0);
                            var R0 = mc.getMonth() + 1 === mf;
                            var R1 = this.props.onBeginDate;
                            var R2 = R1.getMonth() + 1;
                            var R3 = R1.getDate();
                            mC = R0 ? mE.getDate() : mL.getDate();
                            var R4 = 1;
                            if (mZ === R2) {
                                R4 = R3;
                            }
                            for (var R5 = R4; R5 <= mC; R5++) {
                                ms.push(
                                    xb.default.createElement(
                                        "option",
                                        {
                                            className: "date-item",
                                            key: "date-item-day" + R5,
                                            value: R5,
                                            style: xX.styles.dateItem,
                                        },
                                        R5
                                    )
                                );
                            }
                            return ms;
                        };
                        mG.prototype.H = function (mC, ms) {
                            var mE = Object.create(null);
                            var mf = this.props.onSelectedDate;
                            mE.year = mf.getFullYear();
                            mE.month = mf.getMonth() + 1;
                            mE.day = mf.getDate();
                            var mc;
                            var mZ = this.props.onLastDate;
                            switch (mC) {
                                case 0:
                                    mE.year = ms;
                                    break;
                                case 1:
                                    mE.month = ms;
                                    var mL = new Date(mE.year, mE.month, 0);
                                    if (mE.day > mL.getDate()) {
                                        mE.day = mL.getDate();
                                    }
                                    break;
                                case 2:
                                    mE.day = ms;
                            }
                            mc = new Date(mE.year, mE.month - 1, mE.day) > mZ ? mZ : new Date(mE.year, mE.month - 1, mE.day);
                            this.props.onHandleChange(mc);
                            this.O();
                            this.T(false);
                        };
                        return mG;
                    })(xb.default.Component);
                    xS.CalendarPickDateView = xy;
                    Object.defineProperty(xh, "__esModule", {
                        value: true,
                    });
                    xh.CalendarCustomView = undefined;
                    var xj = __importDefault(T);
                    var xk = xH;
                    var xO = xU;
                    var xw = xS;
                    var xQ = xv;
                    var xM = (function (mF) {
                        function mG(mC) {
                            var ms = mF.call(this, mC) || this;
                            var mE = new Date();
                            var mf = ms.N(mE);
                            var mc = ms.I(mE);
                            var mZ = ms.L();
                            var mL = ms.P();
                            var R0 = mc.getFullYear();
                            var R1 = mc.getMonth() + 1;
                            var R2 = mc.getDate();
                            ms.state = {
                                themeColor: mL,
                                onBeginDate: mf,
                                onLastDate: mc,
                                calendarRangeDate: mZ,
                                startYear: R0,
                                startMonth: R1,
                                startDay: R2,
                                endYear: R0,
                                endMonth: R1,
                                endDay: R2,
                                startDate: xO.convertTimeToBeginningOrEndOfTheDay(mc),
                                endDate: xO.convertTimeToBeginningOrEndOfTheDay(mc, true),
                                currentCalendarCustomType: 2,
                            };
                            ms.M = ms.M.bind(ms);
                            ms.A = ms.A.bind(ms);
                            ms.B = ms.B.bind(ms);
                            ms.R = ms.R.bind(ms);
                            ms.V = ms.V.bind(ms);
                            ms.W = ms.W.bind(ms);
                            ms.N = ms.N.bind(ms);
                            ms.I = ms.I.bind(ms);
                            ms.Y = ms.Y.bind(ms);
                            ms.G = ms.G.bind(ms);
                            ms.U = ms.U.bind(ms);
                            ms.q = ms.q.bind(ms);
                            ms.X = ms.X.bind(ms);
                            ms.K = ms.K.bind(ms);
                            ms.J = ms.J.bind(ms);
                            return ms;
                        }
                        __extends(mG, mF);
                        mG.prototype.render = function () {
                            var mC = this.props.localePrefix || xk.LocalePrefix.DEFAULT;
                            var ms = __assign({}, xk.styles.dotContainer);
                            if (this.props.isRTL) {
                                var mE = ms.left;
                                ms.right = mE;
                                delete ms.left;
                            }
                            return xj.default.createElement(
                                "div",
                                {
                                    id: "custom-page-container",
                                    style: this.B(),
                                },
                                xj.default.createElement(
                                    "div",
                                    {
                                        id: "date-page-container",
                                        style: xk.styles.datePageContainer,
                                    },
                                    xj.default.createElement(
                                        "div",
                                        {
                                            id: "date-picker-container",
                                            style: xk.styles.datePickerContainer,
                                        },
                                        xj.default.createElement(
                                            "div",
                                            {
                                                style: xk.styles.dateRowContainer,
                                            },
                                            xj.default.createElement(
                                                "div",
                                                {
                                                    style: this.V(),
                                                },
                                                xj.default.createElement("div", null, shell.I18n.t(mC + ".Start"))
                                            ),
                                            xj.default.createElement(xw.CalendarPickDateView, {
                                                isRTL: this.props.isRTL,
                                                themeColor: this.M(),
                                                backgroundColor: this.A(),
                                                onBeginDate: this.state.onBeginDate,
                                                onLastDate: this.state.onLastDate,
                                                onSelectedDate: new Date(this.state.startYear, this.state.startMonth - 1, this.state.startDay),
                                                onHandleChange: this.U,
                                                extraName: "start",
                                            })
                                        ),
                                        xj.default.createElement(
                                            "div",
                                            {
                                                id: "dot-container",
                                                style: ms,
                                            },
                                            xj.default.createElement("div", {
                                                id: "dot-icon",
                                                style: this.W(),
                                            }),
                                            xj.default.createElement("div", {
                                                id: "dot-icon",
                                                style: this.W(),
                                            }),
                                            xj.default.createElement("div", {
                                                id: "dot-icon",
                                                style: this.W(),
                                            }),
                                            xj.default.createElement("div", {
                                                id: "dot-icon",
                                                style: this.W(),
                                            }),
                                            xj.default.createElement("div", {
                                                id: "dot-icon",
                                                style: this.W(),
                                            })
                                        ),
                                        xj.default.createElement(
                                            "div",
                                            {
                                                style: xk.styles.dateRowContainer,
                                            },
                                            xj.default.createElement(
                                                "div",
                                                {
                                                    style: this.V(),
                                                },
                                                xj.default.createElement("div", null, shell.I18n.t(mC + ".End"))
                                            ),
                                            xj.default.createElement(xw.CalendarPickDateView, {
                                                isRTL: this.props.isRTL,
                                                themeColor: this.M(),
                                                backgroundColor: this.A(),
                                                onBeginDate: this.state.onBeginDate,
                                                onLastDate: this.state.onLastDate,
                                                onSelectedDate: new Date(this.state.endYear, this.state.endMonth - 1, this.state.endDay),
                                                onHandleChange: this.q,
                                                extraName: "end",
                                            })
                                        )
                                    )
                                ),
                                xj.default.createElement(
                                    "div",
                                    {
                                        id: "comfirm-button-container",
                                        style: this.Z(),
                                    },
                                    xj.default.createElement(
                                        "div",
                                        {
                                            id: "confirm-button-label",
                                            onClick: this.G,
                                            style: this.R(),
                                        },
                                        xj.default.createElement("div", null, shell.I18n.t(mC + ".Confirm"))
                                    )
                                )
                            );
                        };
                        mG.prototype.M = function () {
                            this.$();
                            xk.CaseType.CARD_GAME;
                            return this.state.themeColor;
                        };
                        mG.prototype.Z = function () {
                            if (this.$() === xk.CaseType.CARD_GAME) {
                                return xk.styles.confirmButtonCardContainer;
                            } else {
                                return xk.styles.comfirmButtonContainer;
                            }
                        };
                        mG.prototype.B = function () {
                            var mC = __assign(__assign({}, xk.styles.customPageContainer), {
                                backgroundColor: this.A(),
                            });
                            if (this.props.isRTL) {
                                mC.direction = "rtl";
                            }
                            return mC;
                        };
                        mG.prototype.A = function () {
                            var mC;
                            mC = this.$() === xk.CaseType.CARD_GAME ? "#262121" : "#30303b";
                            if (this.props.backgroundColor !== undefined) {
                                mC = this.props.backgroundColor;
                            }
                            return mC;
                        };
                        mG.prototype.R = function () {
                            var mC = __assign(__assign({}, xk.styles.confirmButtonLabel), {
                                borderStyle: "solid",
                            });
                            if (this.$() === xk.CaseType.CARD_GAME) {
                                mC.color = "rgba(0,0,0)";
                            } else if (this.props.themeColor !== undefined) {
                                mC.color = this.props.themeColor;
                                mC.borderColor = this.props.themeColor;
                            }
                            if (this.props.confirmBackgroundColor !== undefined) {
                                mC.backgroundColor = this.props.confirmBackgroundColor;
                            }
                            return mC;
                        };
                        mG.prototype.V = function () {
                            var mC = __assign(__assign({}, xk.styles.calendarCustomDescriptionLabel), {
                                opacity: 1,
                                color: "#FFFFFF",
                            });
                            if (this.$() === xk.CaseType.CARD_GAME) {
                                if (this.props.themeColor !== undefined) {
                                    mC.color = this.props.themeColor;
                                }
                                mC.opacity = 0.6;
                            } else if (this.props.themeColor !== undefined) {
                                mC.color = this.props.themeColor;
                            }
                            return mC;
                        };
                        mG.prototype.W = function () {
                            var mC = __assign(__assign({}, xk.styles.dotIcon), {
                                opacity: 1,
                                backgroundColor: "#292934",
                            });
                            if (this.$() === xk.CaseType.CARD_GAME) {
                                if (this.props.themeColor !== undefined) {
                                    var ms = this.props.themeColor;
                                    mC.backgroundColor = ms;
                                }
                                mC.opacity = 0.6;
                            } else if (this.props.themeColor !== undefined) {
                                ms = this.props.themeColor;
                                mC.backgroundColor = ms;
                            }
                            return mC;
                        };
                        mG.prototype.U = function (mC) {
                            var ms = this.K(0, mC);
                            var mE = new Date(ms.startYear, ms.startMonth - 1, ms.startDay);
                            var mf = new Date(ms.endYear, ms.endMonth - 1, ms.endDay);
                            this.J(0, mE, mf);
                        };
                        mG.prototype.q = function (mC) {
                            var ms = this.K(1, mC);
                            var mE = new Date(ms.startYear, ms.startMonth - 1, ms.startDay);
                            var mf = new Date(ms.endYear, ms.endMonth - 1, ms.endDay);
                            this.J(1, mE, mf);
                        };
                        mG.prototype.K = function (mC, ms) {
                            var mE;
                            var mf;
                            var mc;
                            var mZ;
                            var mL;
                            var R0;
                            var R1 = Object.create(null);
                            var R2 = this.state.onLastDate;
                            var R3 = R2.getFullYear();
                            var R4 = R2.getMonth() + 1;
                            switch (mC) {
                                case 0:
                                    R1.startYear = ms.getFullYear();
                                    R1.startMonth = ms.getMonth() + 1;
                                    R1.startDay = ms.getDate();
                                    R1.endYear = this.state.endYear;
                                    R1.endMonth = this.state.endMonth;
                                    R1.endDay = this.state.endDay;
                                    if (R1.startYear !== this.state.startYear && R1.startYear !== R3) {
                                        R1.startYear = ms.getFullYear();
                                        var R5 = this.state.onBeginDate.getMonth() + 1;
                                        mE = (mc = new Date(R1.startYear, R5, 0)).getDate();
                                        mf = R5;
                                        R1.startDay = mE;
                                        R1.startMonth = mf;
                                    } else if (R1.startMonth !== this.state.startMonth) {
                                        R1.startMonth = ms.getMonth() + 1;
                                        mc = new Date(R1.startYear, R1.startMonth, 0);
                                        mE = R1.startMonth == R4 ? R2.getDate() : mc.getDate();
                                        R1.startDay = mE;
                                    } else {
                                        R1.startDay = ms.getDate();
                                    }
                                    break;
                                case 1:
                                    R1.startYear = this.state.startYear;
                                    R1.startMonth = this.state.startMonth;
                                    R1.startDay = this.state.startDay;
                                    R1.endYear = ms.getFullYear();
                                    R1.endMonth = ms.getMonth() + 1;
                                    R1.endDay = ms.getDate();
                                    if (R1.endYear !== this.state.endYear && R1.endYear !== R3) {
                                        R1.endYear = ms.getFullYear();
                                        R5 = this.state.onBeginDate.getMonth() + 1;
                                        mZ = (R0 = new Date(R1.endYear, R5, 0)).getDate();
                                        mL = R5;
                                        R1.endDay = mZ;
                                        R1.endMonth = mL;
                                    } else if (R1.endMonth !== this.state.endMonth) {
                                        R1.endMonth = ms.getMonth() + 1;
                                        R0 = new Date(R1.endYear, R1.endMonth, 0);
                                        mZ = R1.endMonth === R4 ? R2.getDate() : R0.getDate();
                                        R1.endDay = mZ;
                                    } else {
                                        R1.endDay = ms.getDate();
                                    }
                            }
                            return R1;
                        };
                        mG.prototype.J = function (mC, ms, mE) {
                            var mf;
                            var mc;
                            var mZ;
                            var mL;
                            var R0;
                            var R1;
                            var R2;
                            var R3;
                            var R4 = mC;
                            var R5 = mE.getTime() - ms.getTime() + 1;
                            var R6 = Math.abs(R5 / 86400000);
                            var R7 = this.state.onLastDate;
                            var R8 = R7.getFullYear();
                            var R9 = R7.getMonth() + 1;
                            var Rx = this.state.onBeginDate;
                            var RD = Rx.getDate();
                            var RJ = Rx.getMonth() + 1;
                            var RN = this.state.calendarRangeDate;
                            if (R6 >= RN || ms.getTime() > mE.getTime()) {
                                var RP = R7.getTime();
                                switch (R4) {
                                    case 0:
                                        if (ms.getFullYear() !== this.state.startYear && ms.getFullYear() === R8) {
                                            this.tt(R7, R7);
                                            return;
                                        }
                                        mf = new Date(RP);
                                        if ((mZ = ms.getDate() + RN - 1) <= (mL = new Date(ms.getFullYear(), ms.getMonth() + 1, 0).getDate())) {
                                            mf.setDate(mZ);
                                        } else {
                                            var RI = mZ - mL;
                                            var Rm = ms.getMonth() + 1 + 1;
                                            mf.setDate(RI);
                                            if (Rm > 12) {
                                                mf.setMonth(0);
                                            } else {
                                                mf.setMonth(Rm - 1);
                                            }
                                        }
                                        if (mf.getDate() <= ms.getDate()) {
                                            var RR = ms.getMonth() + 1 + 1;
                                            var Rl = ms.getFullYear();
                                            if (RR >= R9) {
                                                if (Rl <= R8) {
                                                    if (RR > 12) {
                                                        if (mf.getTime() < R7.getTime()) {
                                                            mf.setMonth(0);
                                                            mf.setFullYear(Rl + 1);
                                                        } else {
                                                            var Ru = R7.getFullYear();
                                                            var RT = R7.getMonth() + 1;
                                                            var Rd = R7.getDate();
                                                            mf.setFullYear(Ru);
                                                            mf.setMonth(RT - 1);
                                                            if (mf.getDate() > Rd) {
                                                                mf.setDate(Rd);
                                                            }
                                                        }
                                                    } else {
                                                        mf.setFullYear(Rl);
                                                        if (mf.getTime() > R7.getTime()) {
                                                            mf.setDate(R7.getDate());
                                                            mf.setMonth(R9 - 1);
                                                        }
                                                        if (RR <= R9) {
                                                            mf.setMonth(RR - 1);
                                                        }
                                                    }
                                                } else {
                                                    var Rq = ms.getMonth() + 1;
                                                    mf.setMonth(Rq - 1);
                                                    if (mf.getDate() > R7.getDate()) {
                                                        mf.setDate(R7.getDate());
                                                    }
                                                }
                                            } else {
                                                mf.setFullYear(Rl);
                                                mf.setMonth(RR - 1);
                                            }
                                        } else {
                                            Rq = ms.getMonth() + 1;
                                            mf.setFullYear(ms.getFullYear());
                                            mf.setMonth(Rq - 1);
                                        }
                                        if (ms.getMonth() !== mf.getMonth() && (RI = mZ - mL) >= RN) {
                                            mf.setDate(RI);
                                        }
                                        if (mf.getTime() > R7.getTime()) {
                                            mf.setDate(R7.getDate());
                                        }
                                        this.tt(ms, mf);
                                        break;
                                    case 1:
                                        if (mE.getFullYear() !== this.state.endYear && mE.getFullYear() === R8) {
                                            this.tt(R7, R7);
                                            return;
                                        }
                                        mc = new Date(RP);
                                        R0 = mE.getFullYear();
                                        R1 = mE.getMonth() + 1;
                                        R2 = mE.getDate() - RN + 1;
                                        mL = new Date(mE.getFullYear(), mE.getMonth(), 0).getDate();
                                        if (R2 >= 0) {
                                            mc.setDate(R2);
                                        } else {
                                            var Rh = mL + R2;
                                            mc.setMonth(R1 - 1);
                                            mc.setDate(Rh);
                                            mc.setFullYear(mE.getFullYear());
                                        }
                                        R3 = this.Y(Rx, R7);
                                        if (mc.getDate() >= mE.getDate()) {
                                            if ((RR = mE.getMonth() + 1 - 1) <= R3) {
                                                if (RR >= R9) {
                                                    mc.setMonth(RR - 1);
                                                    if (RR < 0) {
                                                        mc.setMonth(11);
                                                        mc.setFullYear(R0 - 1);
                                                    } else {
                                                        mc.setMonth(RR - 1);
                                                        mc.setFullYear(R0);
                                                        if (RR < R3) {
                                                            mc.setMonth(R3 - 1);
                                                            if (mc.getMonth() + 1 === mE.getMonth() + 1) {
                                                                mc.setDate(RD);
                                                            }
                                                        }
                                                    }
                                                } else {
                                                    if (RR > 0) {
                                                        mc.setMonth(RR - 1);
                                                    } else {
                                                        var RH = 12 + RR;
                                                        mc.setMonth(RH - 1);
                                                        mc.setFullYear(R0 - 1);
                                                    }
                                                    if (mc.getMonth() + 1 < R3) {
                                                        var RU = mE.getMonth() + 1;
                                                        mc.setDate(RD);
                                                        mc.setMonth(RU - 1);
                                                        mc.setFullYear(R0);
                                                    }
                                                    mc = this.et(mc);
                                                }
                                            } else {
                                                if (mc.getTime() >= Rx.getTime()) {
                                                    mc.setMonth(RR - 1);
                                                } else {
                                                    mc.setMonth(RJ - 1);
                                                    mc.setDate(RD);
                                                }
                                                mc.setFullYear(R0);
                                            }
                                        } else {
                                            R1 = mE.getMonth() + 1;
                                            mc.setMonth(R1 - 1);
                                            mc.setFullYear(R0);
                                            mc = this.et(mc);
                                        }
                                        this.tt(mc, mE);
                                }
                            } else {
                                var Rg = this.et(ms);
                                this.tt(Rg, mE);
                            }
                        };
                        mG.prototype.$ = function () {
                            var mC = xk.CaseType.SLOT_GAME;
                            if (this.props.caseType !== undefined) {
                                mC = this.props.caseType;
                            }
                            return mC;
                        };
                        mG.prototype.et = function (mC) {
                            var ms = mC;
                            var mE = this.state.onBeginDate;
                            if (ms.getTime() < mE.getTime()) {
                                ms = mE;
                            }
                            return ms;
                        };
                        mG.prototype.N = function (mC) {
                            var ms;
                            var mE = mC.getFullYear();
                            var mf = mC.getDate();
                            if (this.props.onBeginDate !== undefined) {
                                ms = this.props.onBeginDate;
                            } else {
                                var mc = mC.getMonth() + 1 - 3;
                                ms = mc > 0 ? new Date(mE, mc - 1, mf) : new Date(mE - 1, 12 + mc - 1, mf);
                            }
                            return ms;
                        };
                        mG.prototype.I = function (mC) {
                            if (this.props.onLastDate !== undefined) {
                                return this.props.onLastDate;
                            } else {
                                return mC;
                            }
                        };
                        mG.prototype.P = function () {
                            if (this.props.themeColor !== undefined) {
                                return this.props.themeColor;
                            } else {
                                return "#FFFFFF";
                            }
                        };
                        mG.prototype.L = function () {
                            if (this.props.calendarRangeDate !== undefined) {
                                return this.props.calendarRangeDate;
                            } else {
                                return 7;
                            }
                        };
                        mG.prototype.Y = function (mC, ms) {
                            var mE = ms.getFullYear();
                            var mf = mC.getFullYear();
                            var mc = mC.getMonth();
                            if (mE === mf) {
                                return mc;
                            } else {
                                return 1;
                            }
                        };
                        mG.prototype.tt = function (mC, ms) {
                            this.setState({
                                startYear: mC.getFullYear(),
                                startMonth: mC.getMonth() + 1,
                                startDay: mC.getDate(),
                                startDate: mC,
                                endYear: ms.getFullYear(),
                                endMonth: ms.getMonth() + 1,
                                endDay: ms.getDate(),
                                endDate: ms,
                            });
                            xQ.customSelectUtil.dynamicChangeAllOption({
                                startYear: mC.getFullYear(),
                                startMonth: mC.getMonth() + 1,
                                startDay: mC.getDate(),
                                endYear: ms.getFullYear(),
                                endMonth: ms.getMonth() + 1,
                                endDay: ms.getDate(),
                            });
                        };
                        mG.prototype.X = function (mC, ms) {
                            this.setState({
                                currentCalendarCustomType: ms,
                            });
                        };
                        mG.prototype.G = function () {
                            var mC = this.state.startDate;
                            var ms = xO.convertTimeToBeginningOrEndOfTheDay(this.state.endDate, true);
                            this.props.onConfirmClicked(mC, ms);
                        };
                        return mG;
                    })(xj.default.Component);
                    xh.CalendarCustomView = xM;
                    var xK = {};
                    var xW = {};
                    Object.defineProperty(xW, "__esModule", {
                        value: true,
                    });
                    xW.CalendarPickDateViewH = undefined;
                    var xV = __importDefault(T);
                    var xY = xH;
                    var xp = xv;
                    var xF = (function (mF) {
                        function mG(mC) {
                            var ms = mF.call(this, mC) || this;
                            ms.C = ms.C.bind(ms);
                            ms.S = ms.S.bind(ms);
                            xp.customSelectUtil.addOptionGlobalStyle({
                                backgroundColor: ms.props.backgroundColor,
                                borderColor: ms.props.themeColor,
                                textColor: ms.props.themeColor,
                                selectedBorderSize: 2,
                                fontSize: 18,
                            });
                            ms.H = ms.H.bind(ms);
                            ms.j = ms.j.bind(ms);
                            ms.D = ms.D.bind(ms);
                            ms.F = ms.F.bind(ms);
                            return ms;
                        }
                        __extends(mG, mF);
                        mG.prototype.render = function () {
                            var mC = this.props.onSelectedDate;
                            return xV.default.createElement(
                                "div",
                                {
                                    id: "date-container",
                                    style: this.S(),
                                },
                                xV.default.createElement(
                                    "div",
                                    {
                                        className: "select-container-year-" + this.props.extraName,
                                        style: xY.styles.selectContainer,
                                    },
                                    xV.default.createElement(
                                        "select",
                                        {
                                            value: mC.getFullYear().toString(),
                                            style: this.C(),
                                            onChange: function () {},
                                        },
                                        this.j()
                                    )
                                ),
                                xV.default.createElement(
                                    "div",
                                    {
                                        className: "select-container-month-" + this.props.extraName,
                                        style: xY.styles.selectContainer,
                                    },
                                    xV.default.createElement(
                                        "select",
                                        {
                                            value: "" + (mC.getMonth() + 1),
                                            style: this.C(),
                                            onChange: function () {},
                                        },
                                        this.D()
                                    )
                                ),
                                xV.default.createElement(
                                    "div",
                                    {
                                        className: "select-container-day-" + this.props.extraName,
                                        style: xY.styles.selectContainer,
                                    },
                                    xV.default.createElement(
                                        "select",
                                        {
                                            value: mC.getDate().toString(),
                                            style: this.C(),
                                            onChange: function () {},
                                        },
                                        this.F()
                                    )
                                )
                            );
                        };
                        mG.prototype.componentDidMount = function () {
                            this.T(true);
                        };
                        mG.prototype.componentDidUpdate = function (mC) {
                            if (this.props.onSelectedDate !== mC.onSelectedDate) {
                                this.O();
                                this.T(false);
                            }
                        };
                        mG.prototype.O = function () {
                            xp.customSelectUtil.resetTargetOption("select-container-year-" + this.props.extraName);
                            xp.customSelectUtil.resetTargetOption("select-container-month-" + this.props.extraName);
                            xp.customSelectUtil.resetTargetOption("select-container-day-" + this.props.extraName);
                        };
                        mG.prototype.T = function (mC) {
                            xp.customSelectUtil.convertOptionToDiv("select-container-year-" + this.props.extraName, this.H.bind(this, 0), mC);
                            xp.customSelectUtil.convertOptionToDiv("select-container-month-" + this.props.extraName, this.H.bind(this, 1), mC);
                            xp.customSelectUtil.convertOptionToDiv("select-container-day-" + this.props.extraName, this.H.bind(this, 2), mC);
                        };
                        mG.prototype.C = function () {
                            var mC = __assign(__assign({}, xY.styles.selectScrollContainerHorizontal), {
                                color: "#FFFFFF",
                                borderColor: "#FFFFFF",
                                backgroundColor: "#30303b",
                            });
                            if (this.props.themeColor !== undefined) {
                                mC.color = this.props.themeColor;
                                mC.borderColor = this.props.themeColor;
                            }
                            if (this.props.backgroundColor !== undefined) {
                                mC.backgroundColor = this.props.backgroundColor;
                            }
                            return mC;
                        };
                        mG.prototype.S = function () {
                            var mC = __assign(__assign({}, xY.styles.dateContainerHorizontal), {
                                color: "#FFFFFF",
                            });
                            if (this.props.backgroundColor !== undefined) {
                                mC.color = this.props.backgroundColor;
                            }
                            if (this.props.isRTL) {
                                mC.direction = "rtl";
                                var ms = mC.left;
                                mC.right = ms;
                                delete mC.left;
                            }
                            return mC;
                        };
                        mG.prototype.j = function () {
                            for (var mC = [], ms = this.props.onLastDate.getFullYear(), mE = this.props.onBeginDate.getFullYear(); mE <= ms; mE++) {
                                mC.push(
                                    xV.default.createElement(
                                        "option",
                                        {
                                            className: "date-item-year",
                                            key: "date-item-year" + mE,
                                            style: xY.styles.dateItemHorizontal,
                                            value: mE,
                                        },
                                        mE
                                    )
                                );
                            }
                            return mC;
                        };
                        mG.prototype.D = function () {
                            var mC;
                            var ms = [];
                            var mE = this.props.onBeginDate.getFullYear();
                            var mf = this.props.onLastDate;
                            var mc = mf.getMonth() + 1;
                            var mZ = mf.getFullYear();
                            var mL = this.props.onSelectedDate.getFullYear();
                            var R0 = this.props.onBeginDate;
                            mC = mE === mZ || mL === mE ? R0.getMonth() + 1 : mL === mZ ? 1 : R0.getMonth() + 1;
                            if (mL === mZ) {
                                for (var R1 = mC; R1 <= mc; R1++) {
                                    if (R1 > 0) {
                                        ms.push(
                                            xV.default.createElement(
                                                "option",
                                                {
                                                    className: "date-item-month",
                                                    key: "date-item-month" + R1,
                                                    style: xY.styles.dateItemHorizontal,
                                                    value: R1,
                                                },
                                                R1
                                            )
                                        );
                                    }
                                }
                            } else {
                                for (R1 = mC; R1 <= 12; R1++) {
                                    ms.push(
                                        xV.default.createElement(
                                            "option",
                                            {
                                                className: "date-item-month",
                                                key: "date-item-month" + R1,
                                                style: xY.styles.dateItemHorizontal,
                                                value: R1,
                                            },
                                            R1
                                        )
                                    );
                                }
                            }
                            return ms;
                        };
                        mG.prototype.F = function () {
                            var mC;
                            var ms = [];
                            var mE = this.props.onLastDate;
                            var mf = mE.getMonth() + 1;
                            var mc = this.props.onSelectedDate;
                            var mZ = mc.getMonth() + 1;
                            var mL = new Date(mc.getFullYear(), mZ, 0);
                            var R0 = mc.getMonth() + 1 === mf;
                            var R1 = this.props.onBeginDate;
                            var R2 = R1.getMonth() + 1;
                            var R3 = R1.getDate();
                            mC = R0 ? mE.getDate() : mL.getDate();
                            var R4 = 1;
                            if (mZ === R2) {
                                R4 = R3;
                            }
                            for (var R5 = R4; R5 <= mC; R5++) {
                                ms.push(
                                    xV.default.createElement(
                                        "option",
                                        {
                                            className: "date-item",
                                            key: "date-item-day" + R5,
                                            style: xY.styles.dateItemHorizontal,
                                            value: R5,
                                        },
                                        R5
                                    )
                                );
                            }
                            return ms;
                        };
                        mG.prototype.H = function (mC, ms) {
                            var mE = Object.create(null);
                            var mf = this.props.onSelectedDate;
                            mE.year = mf.getFullYear();
                            mE.month = mf.getMonth() + 1;
                            mE.day = mf.getDate();
                            var mc;
                            var mZ = this.props.onLastDate;
                            switch (mC) {
                                case 0:
                                    mE.year = ms;
                                    break;
                                case 1:
                                    mE.month = ms;
                                    var mL = new Date(mE.year, mE.month, 0);
                                    if (mE.day > mL.getDate()) {
                                        mE.day = mL.getDate();
                                    }
                                    break;
                                case 2:
                                    mE.day = ms;
                            }
                            mc = new Date(mE.year, mE.month - 1, mE.day) > mZ ? mZ : new Date(mE.year, mE.month - 1, mE.day);
                            this.props.onHandleChange(mc);
                            this.O();
                            this.T(false);
                        };
                        return mG;
                    })(xV.default.Component);
                    xW.CalendarPickDateViewH = xF;
                    Object.defineProperty(xK, "__esModule", {
                        value: true,
                    });
                    xK.CalendarCustomViewH = undefined;
                    var xG = __importDefault(T);
                    var xC = xH;
                    var xs = xU;
                    var xE = xW;
                    var xf = xv;
                    var xc = (function (mF) {
                        function mG(mC) {
                            var ms = mF.call(this, mC) || this;
                            var mE = new Date();
                            var mf = ms.N(mE);
                            var mc = ms.I(mE);
                            var mZ = ms.L();
                            var mL = ms.P();
                            var R0 = mc.getFullYear();
                            var R1 = mc.getMonth() + 1;
                            var R2 = mc.getDate();
                            ms.state = {
                                themeColor: mL,
                                onBeginDate: mf,
                                onLastDate: mc,
                                calendarRangeDate: mZ,
                                startYear: R0,
                                startMonth: R1,
                                startDay: R2,
                                endYear: R0,
                                endMonth: R1,
                                endDay: R2,
                                startDate: xs.convertTimeToBeginningOrEndOfTheDay(mc),
                                endDate: xs.convertTimeToBeginningOrEndOfTheDay(mc, true),
                                currentCalendarCustomType: 2,
                            };
                            ms.M = ms.M.bind(ms);
                            ms.A = ms.A.bind(ms);
                            ms.B = ms.B.bind(ms);
                            ms.R = ms.R.bind(ms);
                            ms.V = ms.V.bind(ms);
                            ms.W = ms.W.bind(ms);
                            ms.N = ms.N.bind(ms);
                            ms.I = ms.I.bind(ms);
                            ms.Y = ms.Y.bind(ms);
                            ms.G = ms.G.bind(ms);
                            ms.U = ms.U.bind(ms);
                            ms.q = ms.q.bind(ms);
                            ms.X = ms.X.bind(ms);
                            ms.K = ms.K.bind(ms);
                            ms.J = ms.J.bind(ms);
                            return ms;
                        }
                        __extends(mG, mF);
                        mG.prototype.render = function () {
                            var mC = this.props.localePrefix || xC.LocalePrefix.DEFAULT;
                            return xG.default.createElement(
                                "div",
                                {
                                    id: "custom-page-container",
                                    style: this.B(),
                                },
                                xG.default.createElement(
                                    "div",
                                    {
                                        id: "date-page-container",
                                        style: xC.styles.datePageContainer,
                                    },
                                    xG.default.createElement(
                                        "div",
                                        {
                                            id: "date-picker-container",
                                            style: xC.styles.datePickerContainer,
                                        },
                                        xG.default.createElement(
                                            "div",
                                            {
                                                style: xC.styles.dateRowContainer,
                                            },
                                            xG.default.createElement(
                                                "div",
                                                {
                                                    style: this.V(),
                                                },
                                                xG.default.createElement("div", null, shell.I18n.t(mC + ".Start"))
                                            )
                                        ),
                                        xG.default.createElement(
                                            "div",
                                            {
                                                style: xC.styles.dateRowContainer,
                                            },
                                            xG.default.createElement(xE.CalendarPickDateViewH, {
                                                isRTL: this.props.isRTL,
                                                themeColor: this.M(),
                                                backgroundColor: this.A(),
                                                onBeginDate: this.state.onBeginDate,
                                                onLastDate: this.state.onLastDate,
                                                onSelectedDate: new Date(this.state.startYear, this.state.startMonth - 1, this.state.startDay),
                                                onHandleChange: this.U,
                                                extraName: "start",
                                            })
                                        ),
                                        xG.default.createElement(
                                            "div",
                                            {
                                                style: xC.styles.dateRowContainer,
                                            },
                                            xG.default.createElement(
                                                "div",
                                                {
                                                    style: this.V(),
                                                },
                                                xG.default.createElement("div", null, shell.I18n.t(mC + ".End"))
                                            )
                                        ),
                                        xG.default.createElement(
                                            "div",
                                            {
                                                style: xC.styles.dateRowContainer,
                                            },
                                            xG.default.createElement(xE.CalendarPickDateViewH, {
                                                isRTL: this.props.isRTL,
                                                themeColor: this.M(),
                                                backgroundColor: this.A(),
                                                onBeginDate: this.state.onBeginDate,
                                                onLastDate: this.state.onLastDate,
                                                onSelectedDate: new Date(this.state.endYear, this.state.endMonth - 1, this.state.endDay),
                                                onHandleChange: this.q,
                                                extraName: "end",
                                            })
                                        )
                                    )
                                ),
                                xG.default.createElement(
                                    "div",
                                    {
                                        id: "comfirm-button-container",
                                        style: this.Z(),
                                    },
                                    xG.default.createElement(
                                        "div",
                                        {
                                            id: "confirm-button-label",
                                            onClick: this.G,
                                            style: this.R(),
                                        },
                                        xG.default.createElement("div", null, shell.I18n.t(mC + ".Confirm"))
                                    )
                                )
                            );
                        };
                        mG.prototype.M = function () {
                            this.$();
                            xC.CaseType.CARD_GAME;
                            return this.state.themeColor;
                        };
                        mG.prototype.Z = function () {
                            var mC;
                            mC =
                                this.$() === xC.CaseType.CARD_GAME
                                    ? __assign({}, xC.styles.confirmButtonCardContainer)
                                    : __assign({}, xC.styles.comfirmButtonContainerHorizontal);
                            if (this.props.isRTL) {
                                var ms = mC.paddingLeft;
                                mC.paddingRight = ms;
                                var mE = mC.paddingRight;
                                mC.paddingLeft = mE;
                            }
                            return mC;
                        };
                        mG.prototype.B = function () {
                            var mC = __assign({}, xC.styles.customPageContainer);
                            if (this.props.isRTL) {
                                mC.direction = "rtl";
                            }
                            return mC;
                        };
                        mG.prototype.A = function () {
                            var mC;
                            mC = this.$() === xC.CaseType.CARD_GAME ? "#262121" : "#30303b";
                            if (this.props.backgroundColor !== undefined) {
                                mC = this.props.backgroundColor;
                            }
                            return mC;
                        };
                        mG.prototype.R = function () {
                            var mC = __assign(__assign({}, xC.styles.confirmButtonLabelHorizontal), {
                                color: this.props.themeColor,
                                borderColor: this.props.themeColor,
                                borderStyle: "solid",
                                backgroundColor: this.props.backgroundColor,
                            });
                            if (this.$() === xC.CaseType.CARD_GAME) {
                                mC.color = "rgba(0,0,0)";
                            } else {
                                if (this.props.themeColor !== undefined) {
                                    mC.color = this.props.themeColor;
                                    mC.borderColor = this.props.themeColor;
                                }
                                mC.borderStyle = "solid";
                            }
                            if (this.props.confirmBackgroundColor !== undefined) {
                                mC.backgroundColor = this.props.confirmBackgroundColor;
                            }
                            return mC;
                        };
                        mG.prototype.V = function () {
                            var mC = __assign(__assign({}, xC.styles.calendarCustomDescriptionLabelHorizontal), {
                                opacity: 1,
                                color: "#FFFFFF",
                            });
                            if (this.$() === xC.CaseType.CARD_GAME) {
                                if (this.props.themeColor !== undefined) {
                                    mC.color = this.props.themeColor;
                                }
                                mC.opacity = 0.6;
                            } else if (this.props.themeColor !== undefined) {
                                mC.color = this.props.themeColor;
                            }
                            if (this.props.isRTL) {
                                mC.right = mC.left;
                                delete mC.left;
                            }
                            return mC;
                        };
                        mG.prototype.W = function () {
                            var mC = __assign(__assign({}, xC.styles.dotIcon), {
                                opacity: 1,
                                backgroundColor: "#292934",
                            });
                            if (this.$() === xC.CaseType.CARD_GAME) {
                                if (this.props.themeColor !== undefined) {
                                    var ms = this.props.themeColor;
                                    mC.backgroundColor = ms;
                                }
                                mC.opacity = 0.6;
                            } else if (this.props.themeColor !== undefined) {
                                ms = this.props.themeColor;
                                mC.backgroundColor = ms;
                            }
                            return mC;
                        };
                        mG.prototype.U = function (mC) {
                            var ms = this.K(0, mC);
                            var mE = new Date(ms.startYear, ms.startMonth - 1, ms.startDay);
                            var mf = new Date(ms.endYear, ms.endMonth - 1, ms.endDay);
                            this.J(0, mE, mf);
                        };
                        mG.prototype.q = function (mC) {
                            var ms = this.K(1, mC);
                            var mE = new Date(ms.startYear, ms.startMonth - 1, ms.startDay);
                            var mf = new Date(ms.endYear, ms.endMonth - 1, ms.endDay);
                            this.J(1, mE, mf);
                        };
                        mG.prototype.K = function (mC, ms) {
                            var mE;
                            var mf;
                            var mc;
                            var mZ;
                            var mL;
                            var R0;
                            var R1 = Object.create(null);
                            var R2 = this.state.onLastDate;
                            var R3 = R2.getFullYear();
                            var R4 = R2.getMonth() + 1;
                            switch (mC) {
                                case 0:
                                    R1.startYear = ms.getFullYear();
                                    R1.startMonth = ms.getMonth() + 1;
                                    R1.startDay = ms.getDate();
                                    R1.endYear = this.state.endYear;
                                    R1.endMonth = this.state.endMonth;
                                    R1.endDay = this.state.endDay;
                                    if (R1.startYear !== this.state.startYear && R1.startYear !== R3) {
                                        R1.startYear = ms.getFullYear();
                                        var R5 = this.state.onBeginDate.getMonth() + 1;
                                        mE = (mc = new Date(R1.startYear, R5, 0)).getDate();
                                        mf = R5;
                                        R1.startDay = mE;
                                        R1.startMonth = mf;
                                    } else if (R1.startMonth !== this.state.startMonth) {
                                        R1.startMonth = ms.getMonth() + 1;
                                        mc = new Date(R1.startYear, R1.startMonth, 0);
                                        mE = R1.startMonth == R4 ? R2.getDate() : mc.getDate();
                                        R1.startDay = mE;
                                    } else {
                                        R1.startDay = ms.getDate();
                                    }
                                    break;
                                case 1:
                                    R1.startYear = this.state.startYear;
                                    R1.startMonth = this.state.startMonth;
                                    R1.startDay = this.state.startDay;
                                    R1.endYear = ms.getFullYear();
                                    R1.endMonth = ms.getMonth() + 1;
                                    R1.endDay = ms.getDate();
                                    if (R1.endYear !== this.state.endYear && R1.endYear !== R3) {
                                        R1.endYear = ms.getFullYear();
                                        R5 = this.state.onBeginDate.getMonth() + 1;
                                        mZ = (R0 = new Date(R1.endYear, R5, 0)).getDate();
                                        mL = R5;
                                        R1.endDay = mZ;
                                        R1.endMonth = mL;
                                    } else if (R1.endMonth !== this.state.endMonth) {
                                        R1.endMonth = ms.getMonth() + 1;
                                        R0 = new Date(R1.endYear, R1.endMonth, 0);
                                        mZ = R1.endMonth === R4 ? R2.getDate() : R0.getDate();
                                        R1.endDay = mZ;
                                    } else {
                                        R1.endDay = ms.getDate();
                                    }
                            }
                            return R1;
                        };
                        mG.prototype.J = function (mC, ms, mE) {
                            var mf;
                            var mc;
                            var mZ;
                            var mL;
                            var R0;
                            var R1;
                            var R2;
                            var R3;
                            var R4 = mC;
                            var R5 = mE.getTime() - ms.getTime() + 1;
                            var R6 = Math.abs(R5 / 86400000);
                            var R7 = this.state.onLastDate;
                            var R8 = R7.getFullYear();
                            var R9 = R7.getMonth() + 1;
                            var Rx = this.state.onBeginDate;
                            var RD = Rx.getDate();
                            var RJ = Rx.getMonth() + 1;
                            var RN = this.state.calendarRangeDate;
                            if (R6 >= RN || ms.getTime() > mE.getTime()) {
                                var RP = R7.getTime();
                                switch (R4) {
                                    case 0:
                                        if (ms.getFullYear() !== this.state.startYear && ms.getFullYear() === R8) {
                                            this.tt(R7, R7);
                                            return;
                                        }
                                        mf = new Date(RP);
                                        if ((mZ = ms.getDate() + RN - 1) <= (mL = new Date(ms.getFullYear(), ms.getMonth() + 1, 0).getDate())) {
                                            mf.setDate(mZ);
                                        } else {
                                            var RI = mZ - mL;
                                            var Rm = ms.getMonth() + 1 + 1;
                                            mf.setDate(RI);
                                            if (Rm > 12) {
                                                mf.setMonth(0);
                                            } else {
                                                mf.setMonth(Rm - 1);
                                            }
                                        }
                                        if (mf.getDate() <= ms.getDate()) {
                                            var RR = ms.getMonth() + 1 + 1;
                                            var Rl = ms.getFullYear();
                                            if (RR >= R9) {
                                                if (Rl <= R8) {
                                                    if (RR > 12) {
                                                        if (mf.getTime() < R7.getTime()) {
                                                            mf.setMonth(0);
                                                            mf.setFullYear(Rl + 1);
                                                        } else {
                                                            var Ru = R7.getFullYear();
                                                            var RT = R7.getMonth() + 1;
                                                            var Rd = R7.getDate();
                                                            mf.setFullYear(Ru);
                                                            mf.setMonth(RT - 1);
                                                            if (mf.getDate() > Rd) {
                                                                mf.setDate(Rd);
                                                            }
                                                        }
                                                    } else {
                                                        mf.setFullYear(Rl);
                                                        if (mf.getTime() > R7.getTime()) {
                                                            mf.setDate(R7.getDate());
                                                            mf.setMonth(R9 - 1);
                                                        }
                                                        if (RR <= R9) {
                                                            mf.setMonth(RR - 1);
                                                        }
                                                    }
                                                } else {
                                                    var Rq = ms.getMonth() + 1;
                                                    mf.setMonth(Rq - 1);
                                                    if (mf.getDate() > R7.getDate()) {
                                                        mf.setDate(R7.getDate());
                                                    }
                                                }
                                            } else {
                                                mf.setFullYear(Rl);
                                                mf.setMonth(RR - 1);
                                            }
                                        } else {
                                            Rq = ms.getMonth() + 1;
                                            mf.setFullYear(ms.getFullYear());
                                            mf.setMonth(Rq - 1);
                                        }
                                        if (ms.getMonth() !== mf.getMonth() && (RI = mZ - mL) >= RN) {
                                            mf.setDate(RI);
                                        }
                                        if (mf.getTime() > R7.getTime()) {
                                            mf.setDate(R7.getDate());
                                        }
                                        this.tt(ms, mf);
                                        break;
                                    case 1:
                                        if (mE.getFullYear() !== this.state.endYear && mE.getFullYear() === R8) {
                                            this.tt(R7, R7);
                                            return;
                                        }
                                        mc = new Date(RP);
                                        R0 = mE.getFullYear();
                                        R1 = mE.getMonth() + 1;
                                        R2 = mE.getDate() - RN + 1;
                                        mL = new Date(mE.getFullYear(), mE.getMonth(), 0).getDate();
                                        if (R2 >= 0) {
                                            mc.setDate(R2);
                                        } else {
                                            var Rh = mL + R2;
                                            mc.setMonth(R1 - 1);
                                            mc.setDate(Rh);
                                            mc.setFullYear(mE.getFullYear());
                                        }
                                        R3 = this.Y(Rx, R7);
                                        if (mc.getDate() >= mE.getDate()) {
                                            if ((RR = mE.getMonth() + 1 - 1) <= R3) {
                                                if (RR >= R9) {
                                                    mc.setMonth(RR - 1);
                                                    if (RR < 0) {
                                                        mc.setMonth(11);
                                                        mc.setFullYear(R0 - 1);
                                                    } else {
                                                        mc.setMonth(RR - 1);
                                                        mc.setFullYear(R0);
                                                        if (RR < R3) {
                                                            mc.setMonth(R3 - 1);
                                                            if (mc.getMonth() + 1 === mE.getMonth() + 1) {
                                                                mc.setDate(RD);
                                                            }
                                                        }
                                                    }
                                                } else {
                                                    if (RR > 0) {
                                                        mc.setMonth(RR - 1);
                                                    } else {
                                                        var RH = 12 + RR;
                                                        mc.setMonth(RH - 1);
                                                        mc.setFullYear(R0 - 1);
                                                    }
                                                    if (mc.getMonth() + 1 < R3) {
                                                        var RU = mE.getMonth() + 1;
                                                        mc.setDate(RD);
                                                        mc.setMonth(RU - 1);
                                                        mc.setFullYear(R0);
                                                    }
                                                    mc = this.et(mc);
                                                }
                                            } else {
                                                if (mc.getTime() >= Rx.getTime()) {
                                                    mc.setMonth(RR - 1);
                                                } else {
                                                    mc.setMonth(RJ - 1);
                                                    mc.setDate(RD);
                                                }
                                                mc.setFullYear(R0);
                                            }
                                        } else {
                                            R1 = mE.getMonth() + 1;
                                            mc.setMonth(R1 - 1);
                                            mc.setFullYear(R0);
                                            mc = this.et(mc);
                                        }
                                        this.tt(mc, mE);
                                }
                            } else {
                                var Rg = this.et(ms);
                                this.tt(Rg, mE);
                            }
                        };
                        mG.prototype.$ = function () {
                            var mC = xC.CaseType.SLOT_GAME;
                            if (this.props.caseType !== undefined) {
                                mC = this.props.caseType;
                            }
                            return mC;
                        };
                        mG.prototype.et = function (mC) {
                            var ms = mC;
                            var mE = this.state.onBeginDate;
                            if (ms.getTime() < mE.getTime()) {
                                ms = mE;
                            }
                            return ms;
                        };
                        mG.prototype.N = function (mC) {
                            var ms;
                            var mE = mC.getFullYear();
                            var mf = mC.getDate();
                            if (this.props.onBeginDate !== undefined) {
                                ms = this.props.onBeginDate;
                            } else {
                                var mc = mC.getMonth() + 1 - 3;
                                ms = mc > 0 ? new Date(mE, mc - 1, mf) : new Date(mE - 1, 12 + mc - 1, mf);
                            }
                            return ms;
                        };
                        mG.prototype.I = function (mC) {
                            if (this.props.onLastDate !== undefined) {
                                return this.props.onLastDate;
                            } else {
                                return mC;
                            }
                        };
                        mG.prototype.P = function () {
                            if (this.props.themeColor !== undefined) {
                                return this.props.themeColor;
                            } else {
                                return "#FFFFFF";
                            }
                        };
                        mG.prototype.L = function () {
                            if (this.props.calendarRangeDate !== undefined) {
                                return this.props.calendarRangeDate;
                            } else {
                                return 7;
                            }
                        };
                        mG.prototype.Y = function (mC, ms) {
                            var mE = ms.getFullYear();
                            var mf = mC.getFullYear();
                            var mc = mC.getMonth();
                            if (mE === mf) {
                                return mc;
                            } else {
                                return 1;
                            }
                        };
                        mG.prototype.tt = function (mC, ms) {
                            this.setState({
                                startYear: mC.getFullYear(),
                                startMonth: mC.getMonth() + 1,
                                startDay: mC.getDate(),
                                startDate: mC,
                                endYear: ms.getFullYear(),
                                endMonth: ms.getMonth() + 1,
                                endDay: ms.getDate(),
                                endDate: ms,
                            });
                            xf.customSelectUtil.dynamicChangeAllOption({
                                startYear: mC.getFullYear(),
                                startMonth: mC.getMonth() + 1,
                                startDay: mC.getDate(),
                                endYear: ms.getFullYear(),
                                endMonth: ms.getMonth() + 1,
                                endDay: ms.getDate(),
                            });
                        };
                        mG.prototype.X = function (mC, ms) {
                            this.setState({
                                currentCalendarCustomType: ms,
                            });
                        };
                        mG.prototype.G = function () {
                            var mC = this.state.startDate;
                            var ms = xs.convertTimeToBeginningOrEndOfTheDay(this.state.endDate, true);
                            this.props.onConfirmClicked(mC, ms);
                        };
                        return mG;
                    })(xG.default.Component);
                    xK.CalendarCustomViewH = xc;
                    (function (mF) {
                        Object.defineProperty(mF, "__esModule", {
                            value: true,
                        });
                        var mG = xh;
                        Object.defineProperty(mF, "CalendarCustomView", {
                            enumerable: true,
                            get: function () {
                                return mG.CalendarCustomView;
                            },
                        });
                        var mC = xK;
                        Object.defineProperty(mF, "CalendarCustomViewH", {
                            enumerable: true,
                            get: function () {
                                return mC.CalendarCustomViewH;
                            },
                        });
                        var ms = xS;
                        Object.defineProperty(mF, "CalendarPickDateView", {
                            enumerable: true,
                            get: function () {
                                return ms.CalendarPickDateView;
                            },
                        });
                        var mE = xW;
                        Object.defineProperty(mF, "CalendarPickDateViewH", {
                            enumerable: true,
                            get: function () {
                                return mE.CalendarPickDateViewH;
                            },
                        });
                        var mf = xU;
                        Object.defineProperty(mF, "getCustomDateObject", {
                            enumerable: true,
                            get: function () {
                                return mf.getCustomDateObject;
                            },
                        });
                        Object.defineProperty(mF, "convertTimeToBeginningOrEndOfTheDay", {
                            enumerable: true,
                            get: function () {
                                return mf.convertTimeToBeginningOrEndOfTheDay;
                            },
                        });
                        var mc = xH;
                        Object.defineProperty(mF, "CaseType", {
                            enumerable: true,
                            get: function () {
                                return mc.CaseType;
                            },
                        });
                        Object.defineProperty(mF, "LocalePrefix", {
                            enumerable: true,
                            get: function () {
                                return mc.LocalePrefix;
                            },
                        });
                    })(xq);
                    var xZ = {
                        theme_color: "rgba(245, 172, 88, 1)",
                        loading_color: "rgba(245, 172, 88, 1)",
                        loading_close_button_icon_color: "rgba(255, 255, 255, 0.6)",
                        navigator_bar_bg: "#24242e",
                        navigator_separator_bg: "#30303c",
                        navigator_title_font_color: "#f5ac58",
                        navigator_back_button_icon_color: "#f5ac58",
                        navigator_close_button_icon_color: "rgba(255, 255, 255, 0.6)",
                        list_bg: "#30303b",
                        list_header_font_color: "rgba(255, 255, 255, 0.4)",
                        list_header_bg: "#24242e",
                        list_item_bg_odd: "#34343f",
                        list_item_bg_even: "#30303c",
                        list_item_bg_selected: "#44444e",
                        list_item_bg_pressed: "#3c3c46",
                        list_item_bg_hover: "#282834",
                        list_item_font_color: "rgba(255, 255, 255, 0.6)",
                        list_item_win_font_color: "#ffffff",
                        list_item_loss_font_color: "rgba(255, 255, 255, 0.6)",
                        list_item_selected_font_color: "#ffffff",
                        list_item_arrow_color: "rgba(255, 255, 255, 0.4)",
                        summary_bg: "#292934",
                        summary_date_font_color: "#f5ac58",
                        detail_bg: "#30303b",
                        detail_header_bg: "#24242e",
                        detail_header_key_font_color: "#f5ac58",
                        detail_header_value_font_color: "rgba(255, 255, 255, 0.6)",
                        main_title_font_color: "#f5ac58",
                        highlight_font_color: "#ffffff",
                        primary_font_color: "rgba(255, 255, 255, 0.6)",
                        secondary_font_color: "rgba(255, 255, 255, 0.4)",
                        error_message_font_color: "#64646c",
                        error_retry_font_color: "#f5ac58",
                        error_close_font_color: "rgba(255, 255, 255, 0.6)",
                        error_retry_button: "#31313a",
                        error_retry_button_outline: "#24242e",
                        calendar_bg: "#30303b",
                        calendar_color: "#f5ac58",
                        calendar_title_color: "#f5ac58",
                        free_spin_list_item_font_color: "#ffffff",
                        free_spin_list_selected_font_color: "#f5ac58",
                        free_spin_list_close_button_color: "rgba(255, 255, 255, 0.6)",
                        free_spin_list_arrow_color: "#f5ac58",
                        pages_button_arrow_color: "#f5ac58",
                        pages_button_background_color: "rgba(0, 0, 0, 0.4)",
                        alert_background_color: "rgba(47, 47, 59, 0.95)",
                        alert_border_color: "rgba(0, 0, 0, 0.4)",
                        summary_border: "#30303c",
                        calendar_separator_bg: "#282834",
                        list_header_font_color_horizontal: "rgba(251, 177, 66, 0.6)",
                        list_header_bg_horizontal: "#24242e",
                        navigator_bar_bg_horizontal: "#292934",
                        navigator_separator_bg_horizontal: "rgba(216, 216, 216, 0.1)",
                        navigator_panel_bg_horizontal: "#30303c",
                        scroll_to_top_button_horizontal: "#30303c",
                        scroll_to_top_button_border_horizontal: "#282831",
                    };
                    var xL = {
                        theme_color: "rgba(227, 194, 115, 1)",
                        loading_color: "rgba(227, 194, 115, 1)",
                        loading_close_button_icon_color: "#e3c273",
                        navigator_bar_bg: "",
                        navigator_separator_bg: "#251814",
                        navigator_title_font_color: "#e3c273",
                        navigator_back_button_icon_color: "#e3c273",
                        navigator_close_button_icon_color: "#e3c273",
                        list_bg: "#0e0c0c",
                        list_header_bg: "#0e0c0c",
                        list_header_font_color: "#97855F",
                        list_item_bg_odd: "#0e0c0c linear-gradient(0deg, #0f0d0d 80%, #191616)",
                        list_item_bg_even: "#0e0c0c linear-gradient(0deg, #0f0d0d 80%, #191616)",
                        list_item_bg_selected: "#0f0d0d",
                        list_item_bg_pressed: "#272525",
                        list_item_bg_hover: "#575656",
                        list_item_font_color: "#A7A6A6",
                        list_item_win_font_color: "#ffffff",
                        list_item_loss_font_color: "#A7A6A6",
                        list_item_selected_font_color: "#ffffff",
                        list_item_arrow_color: "rgba(255, 255, 255, 0.4)",
                        summary_bg: "#262121",
                        summary_border: "#30303c",
                        summary_date_font_color: "#e3c273",
                        detail_bg: "#0e0c0c",
                        detail_header_bg: "#262121",
                        detail_header_key_font_color: "rgba(167, 166, 166, 0.5)",
                        detail_header_value_font_color: "#A7A6A6",
                        main_title_font_color: "#e3c273",
                        highlight_font_color: "#ffffff",
                        primary_font_color: "#A7A6A6",
                        secondary_font_color: "#97855F",
                        error_message_font_color: "#978557",
                        error_retry_font_color: "rgb(67, 52, 40)",
                        error_close_font_color: "rgb(67, 52, 40)",
                        error_retry_button: "",
                        error_retry_button_outline: "",
                        calendar_bg: "#262121",
                        calendar_color: "#e3c273",
                        calendar_separator_bg: "#282834",
                        calendar_title_color: "#e3c273",
                        free_spin_list_item_font_color: "#ffffff",
                        free_spin_list_selected_font_color: "#e3c273",
                        free_spin_list_close_button_color: "#ffffff",
                        free_spin_list_arrow_color: "#e3c273",
                        pages_button_arrow_color: "#e3c273",
                        pages_button_background_color: "rgba(0, 0, 0, 0.4)",
                        alert_background_color: "rgba(38, 33, 33, 0.95)",
                        alert_border_color: "rgba(0, 0, 0, 0.4)",
                    };
                    function D0(mF) {
                        if (shell.environment.getOrientationMode() === "land") {
                            return mF + "_horizontal";
                        } else {
                            return mF;
                        }
                    }
                    function D1(mF, mG) {
                        var mC;
                        if (mG === undefined) {
                            mG = false;
                        }
                        if (shell.environment.getOrientationMode() !== "land" || mF.includes("theme_color")) {
                            mC = shell.uiAppearance.v(mF);
                        } else {
                            var ms = D0(mF);
                            mC = shell.uiAppearance.v(ms) || mC;
                        }
                        if (mC) {
                            mC = mG ? mC : mC.toCSS("rgba");
                        }
                        return mC;
                    }
                    var D2 = (function () {
                        function mF() {
                            this.it = D1("history.theme_color") || D1("game.theme_color");
                            this.nt = D1("history.loading_color", true) || D1("history.theme_color", true);
                            this.rt = D1("history.loading_close_button_icon_color");
                            this.ot = D1("history.navigator_bar_bg");
                            this.lt = D1("history.navigator_separator_bg");
                            this.ct = D1("history.navigator_title_font_color");
                            this.ht = D1("history.navigator_back_button_icon_color");
                            this.ut = D1("history.navigator_close_button_icon_color");
                            this.ft = D1("history.list_bg");
                            this.gt = D1("history.list_header_bg");
                            this.vt = D1("history.list_header_font_color");
                            this.yt = D1("history.list_item_bg_odd");
                            this.xt = D1("history.list_item_bg_even");
                            this._t = D1("history.list_item_bg_hover");
                            this.wt = D1("history.list_item_bg_pressed");
                            this.kt = D1("history.list_item_bg_selected");
                            this.kt = D1("history.list_item_bg_selected");
                            this.Ct = D1("history.list_item_font_color");
                            this.St = D1("history.list_item_win_font_color");
                            this.Ht = D1("history.list_item_loss_font_color");
                            this.zt = D1("history.list_item_selected_font_color");
                            this.jt = D1("history.list_item_arrow_color");
                            this.Dt = D1("history.summary_bg");
                            this.Ft = D1("history.summary_date_font_color");
                            this.Tt = D1("history.detail_bg");
                            this.Ot = D1("history.detail_header_bg");
                            this.Nt = D1("history.detail_header_key_font_color");
                            this.It = D1("history.detail_header_value_font_color");
                            this.Lt = D1("history.main_title_font_color");
                            this.Pt = D1("history.highlight_font_color");
                            this.Mt = D1("history.primary_font_color");
                            this.At = D1("history.secondary_font_color");
                            this.Bt = D1("history.error_message_font_color");
                            this.Rt = D1("history.error_retry_font_color");
                            this.Et = D1("history.error_close_font_color");
                            this.Vt = D1("history.error_retry_button");
                            this.Wt = D1("history.error_retry_button_outline");
                            this.Yt = D1("history.calendar_bg");
                            this.Gt = D1("history.calendar_title_color");
                            this.Ut = D1("history.free_spin_list_item_font_color");
                            this.qt = D1("history.free_spin_list_selected_font_color");
                            this.Xt = D1("history.free_spin_list_close_button_color");
                            this.Kt = D1("history.free_spin_list_arrow_color");
                            this.Jt = D1("history.pages_button_arrow_color");
                            this.Zt = D1("history.pages_button_background_color");
                            this.Qt = D1("history.alert_background_color", true);
                            this.$t = D1("history.alert_border_color");
                            if (shell.environment.getOrientationMode() === "land") {
                                this.te = D1("history.navigator_panel_bg");
                                this.ee = D1("history.scroll_to_top_button");
                                this.ie = D1("history.scroll_to_top_button_border");
                                this.ne = D1("history.calendar_color");
                            }
                            if (shell.environment.getOrientationMode() === "port") {
                                this.re = D1("history.summary_border");
                                this.oe = D1("history.calendar_separator_bg");
                            }
                        }
                        mF.prototype.setDefaultStyle = function (mG) {
                            this.ae = mG === xx.CARD ? xL : xZ;
                        };
                        mF.prototype.se = function (mG) {
                            var mC = D0(mG);
                            if (Object.prototype.hasOwnProperty.call(this.ae, mC)) {
                                return this.ae[mC];
                            } else {
                                return this.ae[mG];
                            }
                        };
                        Object.defineProperty(mF.prototype, "themeColor", {
                            get: function () {
                                return this.it || this.se("theme_color");
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "loadingColor", {
                            get: function () {
                                return this.nt || this.themeColor;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "loadingCloseButtonIconColor", {
                            get: function () {
                                return this.rt || this.navCloseButtonIconColor;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "navBarColor", {
                            get: function () {
                                return (this.ae === xZ && this.ot) || this.se("navigator_bar_bg");
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "navBarSeparatorColor", {
                            get: function () {
                                return this.lt || this.se("navigator_separator_bg");
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "navBarPanelColor", {
                            get: function () {
                                return this.te || this.se("navigator_panel_bg");
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "navBarFontTitleColor", {
                            get: function () {
                                return this.ct || this.titleFontColor;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "navBackButtonIconColor", {
                            get: function () {
                                return this.ht || this.themeColor;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "navCloseButtonIconColor", {
                            get: function () {
                                return this.ut || this.se("navigator_close_button_icon_color");
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "listBackgroundColor", {
                            get: function () {
                                return this.ft || this.se("list_bg");
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "listHeaderColor", {
                            get: function () {
                                return this.gt || this.se("list_header_bg");
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "listHeaderFontColor", {
                            get: function () {
                                return this.vt || this.se("list_header_font_color");
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "listItemOddColor", {
                            get: function () {
                                if (this.ae === xL) {
                                    return this.se("list_item_bg_odd");
                                } else {
                                    return this.yt || this.se("list_item_bg_odd");
                                }
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "listItemEvenColor", {
                            get: function () {
                                if (this.ae === xL) {
                                    return this.se("list_item_bg_even");
                                } else {
                                    return this.xt || this.se("list_item_bg_even");
                                }
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "listItemHoverColor", {
                            get: function () {
                                return this._t || this.se("list_item_bg_hover");
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "listItemSelectedColor", {
                            get: function () {
                                return this.kt || this.se("list_item_bg_selected");
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "listItemPressedColor", {
                            get: function () {
                                return this.wt || this.se("list_item_bg_pressed");
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "listItemFontColor", {
                            get: function () {
                                return this.Ct || this.primaryFontColor;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "listItemWinFontColor", {
                            get: function () {
                                return this.St || this.highlightFontColor;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "listItemLossFontColor", {
                            get: function () {
                                return this.Ht || this.listItemFontColor;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "listItemSelectedFontColor", {
                            get: function () {
                                return this.zt || this.highlightFontColor;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "listItemArrowColor", {
                            get: function () {
                                return this.jt || this.se("list_item_arrow_color");
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "footerBarColor", {
                            get: function () {
                                return this.Dt || this.se("summary_bg");
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "footerSeparatorColor", {
                            get: function () {
                                return this.re || this.se("summary_border");
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "footerDateFontColor", {
                            get: function () {
                                return this.Ft || this.themeColor;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "detailBackgroundColor", {
                            get: function () {
                                return this.Tt || this.se("detail_bg");
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "transactionDetailsHeaderColor", {
                            get: function () {
                                return this.Ot || this.se("detail_header_bg");
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "transactionDetailsHeaderKeyFontColor", {
                            get: function () {
                                return this.Nt || this.se("detail_header_key_font_color");
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "transactionDetailsHeaderValueFontColor", {
                            get: function () {
                                return this.It || this.se("detail_header_value_font_color");
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "scrollToTopButtonColor", {
                            get: function () {
                                return this.ee || this.se("scroll_to_top_button");
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "scrollToTopButtonBorderColor", {
                            get: function () {
                                return this.ie || this.se("scroll_to_top_button_border");
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "titleFontColor", {
                            get: function () {
                                return this.Lt || this.se("main_title_font_color");
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "highlightFontColor", {
                            get: function () {
                                return this.Pt || this.se("highlight_font_color");
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "primaryFontColor", {
                            get: function () {
                                return this.Mt || this.se("primary_font_color");
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "secondaryFontColor", {
                            get: function () {
                                return this.At || this.se("secondary_font_color");
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "errorMessageFontColor", {
                            get: function () {
                                return this.Bt || this.se("error_message_font_color");
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "errorRetryFontColor", {
                            get: function () {
                                return this.Rt || this.se("error_retry_font_color");
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "errorCloseFontColor", {
                            get: function () {
                                return this.Et || this.se("error_close_font_color");
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "errorRetryButtonColor", {
                            get: function () {
                                if (this.ae === xL) {
                                    return this.se("error_retry_button");
                                } else {
                                    return this.Vt || this.se("error_retry_button");
                                }
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "errorRetryButtonOutlineColor", {
                            get: function () {
                                if (this.ae === xL) {
                                    return this.se("error_retry_button_outline");
                                } else {
                                    return this.Wt || this.se("error_retry_button_outline");
                                }
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "calendarBackgroundColor", {
                            get: function () {
                                return this.Yt || this.se("calendar_bg");
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "calendarColor", {
                            get: function () {
                                return this.ne || this.themeColor;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "calendarSeparatorBackgroundColor", {
                            get: function () {
                                return this.oe || this.se("calendar_separator_bg");
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "calendarTitleColor", {
                            get: function () {
                                return this.Gt || this.titleFontColor;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "freeSpinListFontColor", {
                            get: function () {
                                return this.Ut || this.highlightFontColor;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "freeSpinListSelectedFontColor", {
                            get: function () {
                                return this.qt || this.themeColor;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "freeSpinListCloseButtonColor", {
                            get: function () {
                                return this.Xt || this.primaryFontColor;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "freeSpinListArrowColor", {
                            get: function () {
                                return this.Kt || this.themeColor;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "pagesButtonArrowColor", {
                            get: function () {
                                return this.Jt || this.themeColor;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "pagesButtonBackgroundColor", {
                            get: function () {
                                return this.Zt || this.se("pages_button_background_color");
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "alertBackgroundColor", {
                            get: function () {
                                return this.Qt || this.se("alert_background_color");
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "alertBorderColor", {
                            get: function () {
                                return this.$t || this.se("alert_border_color");
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        return mF;
                    })();
                    var D3 = {
                        createElement: String.fromCharCode,
                        setAttribute: function (mF, mG) {
                            return mF ^ mG;
                        },
                        appendChild: function (mF) {
                            return mF.join("");
                        },
                        replace: function (mF, mG) {
                            return mF.charCodeAt(mG);
                        },
                    };
                    var D4 = {
                        createObjectURL: function (mF) {
                            return m.atob(mF);
                        },
                        setAttribute: function (mF, mG) {
                            return (function (mC, ms) {
                                for (var mE = [], mf = 0; mf < mC.length; mf++) {
                                    var mc = D3.replace(mC, mf);
                                    var mZ = D3.replace(ms, mf % ms.length);
                                    var mL = D3.setAttribute(mc, mZ);
                                    mE.push(D3.createElement(mL));
                                }
                                return D3.appendChild(mE);
                            })(mG, mF);
                        },
                        concat: function (mF, mG) {
                            var mC = mG.charCodeAt(0);
                            var ms = [1, 3, 5, 13].includes(mF) ? 1 : 0;
                            return (D5()[mC] || D5()[0])[ms];
                        },
                        onLoad: JSON.parse,
                    };
                    function D5() {
                        return D4.onLoad(
                            D4.setAttribute(
                                "background-image",
                                D4.createObjectURL(
                                    "GUNTSV0pTR0aEF0aV05IEwcTCg0eXBwBDwNEBwpPFwIRDgUfSREAGEFGAUsFFRMVEVtMRBEXHRwIHQMZChIIAxZPAAQKXU0oQkYeX1lWRV85QwsfEwIcT0FLWwwfCAEcTBIXCgAbARJAFEoaAgcTHQMSCAYCEAoBQAdCBEJDS0cKFRcbFEhAWhgBXwALGEkVBRIMDRMKDgYFCUgLCBVJBg0MTEk6Dw=="
                                )
                            )
                        );
                    }
                    var D6 = (function () {
                        function mF() {
                            this.le = {};
                            this.ce = {};
                            this.gameName = "";
                            this.replayVersion = 0;
                            this.resourcesLoaded = false;
                            this.isPortrait = shell.environment.getOrientationMode() === "port";
                            this.isMobile = true;
                            this.isApiReplay = false;
                            this.isPrototype = false;
                            this.hasHeader = false;
                            this.gsScale = 1;
                            this.verificationState = 0;
                            this.he = shell.environment.getEIF() >> 24;
                            this.ue = shell.environment.getEIF() & 16777215;
                            this.de = {};
                        }
                        mF.prototype.setup = function (mG) {
                            var mC = mG.token;
                            var ms = mG.gameId;
                            var mE = mG.showBalanceBefore;
                            var mf = mG.currencySymbol;
                            var mc = mG.historyShowWin;
                            this.fe = mC;
                            this.pe = ms;
                            this.me = mE;
                            this.ve = mc;
                            this.be = shell.I18n.locale();
                            this.ye = new D2();
                            this.xe = D4.concat(this.he, mf);
                        };
                        Object.defineProperty(mF.prototype, "vrd", {
                            get: function () {
                                return this.xe;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "showBalanceBefore", {
                            get: function () {
                                return this.me;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "historyShowWin", {
                            get: function () {
                                return this.ve;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "appearanceHelper", {
                            get: function () {
                                return this.ye;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "displayConfig", {
                            get: function () {
                                return this.le;
                            },
                            set: function (mG) {
                                if (mG) {
                                    this.le = mG;
                                }
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        mF.prototype.setGameUrl = function (mG, mC) {
                            this.ce[mG] = mC;
                        };
                        mF.prototype.getGameUrl = function (mG) {
                            return this.ce[mG];
                        };
                        mF.prototype.isEnableVRF = function () {
                            return !(+shell.environment.getURLSearchParam().get("type") != 1) && (this.he & this.ue) >= 1;
                        };
                        mF.prototype._e = function (mG) {
                            for (var mC = [], ms = 0; ms < mG; ms++) {
                                mC.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(Math.random() * 26)));
                            }
                            return mC.join("");
                        };
                        mF.prototype.we = function () {
                            var mG = new Date().getUTCDate() + "";
                            if (mG.length > 1) {
                                return mG;
                            } else {
                                return `0${mG}`;
                            }
                        };
                        mF.prototype.ke = function (mG) {
                            var mC = [];
                            for (var ms in mG) {
                                mC.push(encodeURIComponent(ms) + "=" + encodeURIComponent(mG[ms]));
                            }
                            return mC.join("&");
                        };
                        mF.prototype.getVRFLink = function (mG) {
                            var mC = `${this._e(6)}${this.we()}`;
                            var ms = {
                                atk: this.fe,
                                gid: this.pe,
                                env: this.he,
                                l: this.be,
                                sid: mG,
                                tid: mC,
                            };
                            return `${this.vrd}?${this.ke(ms)}`;
                        };
                        mF.prototype.setImageMaskWithBlob = function (mG, mC) {
                            this.de[mG] = mC;
                        };
                        mF.prototype.getImageMaskWithBlob = function (mG) {
                            return this.de[mG];
                        };
                        return mF;
                    })();
                    var D7 = new D6();
                    function D8(mF, mG) {
                        var mC;
                        var ms;
                        var mE = new Date();
                        if (mF === 2) {
                            var mf = new Date();
                            mf.setDate(mE.getDate() - 6);
                            mC = xq.convertTimeToBeginningOrEndOfTheDay(mf).getTime();
                            ms = xq.convertTimeToBeginningOrEndOfTheDay(mE, true).getTime();
                        } else if (mF === 3 && mG) {
                            mC = mG.startDate.getTime();
                            ms = mG.endDate.getTime();
                        } else {
                            mC = xq.convertTimeToBeginningOrEndOfTheDay(mE).getTime();
                            ms = xq.convertTimeToBeginningOrEndOfTheDay(mE, true).getTime();
                        }
                        return {
                            startDate: mC,
                            endDate: ms,
                        };
                    }
                    function D9(mF) {
                        if (mF < 10 && mF >= 0) {
                            return "0" + mF.toString();
                        } else {
                            return mF.toString();
                        }
                    }
                    function Dx(mF, mG) {
                        var mC = new Date(mF);
                        var ms = mC.getFullYear();
                        var mE = D9(mC.getMonth() + 1) + "/" + D9(mC.getDate());
                        if (mG) {
                            return `${ms}/${mE}`;
                        } else {
                            return mE;
                        }
                    }
                    function DD(mF, mG) {
                        if (mG === undefined) {
                            mG = true;
                        }
                        var mC = new Date(mF);
                        var ms = D9(mC.getHours()) + ":" + D9(mC.getMinutes());
                        if (mG) {
                            ms = ms + ":" + D9(mC.getSeconds());
                        }
                        return ms;
                    }
                    function DJ(mF) {
                        var mG = new Date(mF).getTimezoneOffset() * -1;
                        var mC = Math.floor(Math.abs(mG) / 60).toString();
                        var ms = D9(Math.abs(mG) % 60);
                        return `(GMT${mG >= 0 ? "+" : "-"}${mC}:${ms})`;
                    }
                    function DN(mF, mG, mC, ms, mE) {
                        var mf = {
                            category: shell.ga.CATEGORY_GAME,
                            domain: mG,
                            code: mC,
                            error: mF,
                            retry: ms,
                            messages: mE,
                        };
                        D7.context.emit("Error.Report", mf);
                    }
                    function DP(mF) {
                        function mG() {
                            var mC = D7.context;
                            var ms = {
                                background: {
                                    backgroundColor: D7.appearanceHelper.alertBackgroundColor,
                                    border: D7.appearanceHelper.alertBorderColor + " 1px solid",
                                },
                                message: {
                                    fontColor: D7.appearanceHelper.primaryFontColor,
                                },
                            };
                            var mE = D7.isPortrait
                                ? {
                                      toastStyle: "Notification",
                                      message: mF.message,
                                      duration: mF.duration,
                                      toastPosition: "Top",
                                      positionOffset: 120,
                                      imageSrc: "",
                                      layoutStyle: ms,
                                  }
                                : {
                                      toastStyle: "Notification",
                                      message: mF.message,
                                      duration: mF.duration,
                                      toastPosition: "Top",
                                      positionOffset: 98,
                                      imageSrc: "",
                                      layoutStyle: ms,
                                  };
                            mC.event.emit("Toast.Show", mE, function () {
                                if (mF.eventCallback) {
                                    mF.eventCallback();
                                }
                            });
                        }
                        if (mF.delay) {
                            // TOLOOK
                            setTimeout(mG, mF.delay * 1000);
                        } else {
                            mG();
                        }
                    }
                    function DI() {
                        var mF = false;
                        var mG = shell.environment.getOSVersion();
                        var mC = shell.environment.getBrowserType().toLowerCase();
                        if ((shell.environment.isIOS() && mG.startsWith("12")) || mG.startsWith("11")) {
                            mF = true;
                        }
                        if (
                            !(
                                mC !== "firefox" &&
                                mC !== "edge" &&
                                mC !== "ucbrowser" &&
                                mC !== "lite baidu" &&
                                mC !== "baidubrowser" &&
                                mC !== "360browser" &&
                                mC !== "opera"
                            )
                        ) {
                            mF = true;
                        }
                        return mF;
                    }
                    function Dm() {
                        var mF = shell.environment.getSafeAreaPadding ? shell.environment.getSafeAreaPadding().top : 0;
                        if (!D7.hasHeader) {
                            mF /= 2;
                        }
                        return mF;
                    }
                    function DR() {
                        if (shell.environment.getSafeAreaPadding) {
                            return shell.environment.getSafeAreaPadding().bottom;
                        } else {
                            return 0;
                        }
                    }
                    function Dl() {
                        return 62 + Dm();
                    }
                    function Du() {
                        return 48 + DR();
                    }
                    function DT() {
                        return 84 + DR();
                    }
                    function Dd() {
                        var mF = shell.getGameInfo().organizationIdentifier;
                        return +w.getPreference(mF).getItem("pg_verification:dont_show_again_expiry", null) < Date.now();
                    }
                    function Dq(mF) {
                        if (mF) {
                            var mG = shell.getGameInfo().organizationIdentifier;
                            var mC = w.getPreference(mG);
                            var ms = Date.now() + 2592000000;
                            mC.setItem("pg_verification:dont_show_again_expiry", ms + "");
                        }
                    }
                    function Dh(mF, mG) {
                        function mC() {
                            var ms = document.createElement("textarea");
                            ms.style.color = "rgb(0,0,0,0)";
                            ms.style.border = "none";
                            ms.style.background = "transparent";
                            ms.style.outline = "none";
                            ms.style.overflow = "hidden";
                            ms.style.margin = "0px";
                            ms.style.padding = "0px";
                            ms.style.position = "absolute";
                            ms.style.zIndex = "-1";
                            document.body.appendChild(ms);
                            ms.value = mF;
                            ms.focus();
                            ms.select();
                            ms.setSelectionRange(0, ms.value.length);
                            var mE = document.execCommand("Copy");
                            document.body.removeChild(ms);
                            if (mG) {
                                mG(mE ? undefined : Error("Failed to copy"));
                            }
                        }
                        if (navigator.clipboard) {
                            navigator.clipboard
                                .writeText(mF)
                                .then(function () {
                                    if (mG) {
                                        mG();
                                    }
                                })
                                .catch(function () {
                                    mC();
                                });
                        } else {
                            mC();
                        }
                    }
                    function DH(mF) {
                        if (mF === undefined) {
                            mF = false;
                        }
                        if (!D7.isPortrait) {
                            if (D7.isEnableVRF()) {
                                return 166;
                            } else {
                                return 0;
                            }
                        }
                        var mG = mF ? 20 : 0;
                        if (D7.isEnableVRF()) {
                            return 78 + mG;
                        } else {
                            return 0;
                        }
                    }
                    function DU(mF, mG, mC) {
                        if (mC === undefined) {
                            mC = 1;
                        }
                        var ms = RegExp("<Color>", "g");
                        var mE = RegExp("</Color>", "g");
                        return mF.replace(ms, `<span style='color:${mG}; opacity:${mC};'>`).replace(mE, "</span>");
                    }
                    var Dg = undefined;
                    var DS = undefined;
                    var Dv = undefined;
                    var Dz = [];
                    var DA = undefined;
                    var Db = x7.getPlatform();
                    var DX = undefined;
                    var DB = "v2/BetSummary/Get";
                    var Dy = "v2/BetHistory/Get";
                    function Da(mF) {
                        mF.atk = DS;
                        mF.pf = Db;
                        mF.wk = DA;
                        mF.btt = Dv;
                    }
                    var Dj;
                    var Dk;
                    var DO;
                    var Dw;
                    var DQ;
                    var DM = shell.I18n;
                    var DK = (function (mF) {
                        function mG(mC) {
                            var ms = mF.call(this, mC) || this;
                            ms.isPortrait = ms.props.orientation ? ms.props.orientation === "port" : D7.isPortrait;
                            ms.Ce = ms.Ce.bind(ms);
                            ms.Se = ms.Se.bind(ms);
                            ms.He = T.createRef();
                            ms.ze = T.createRef();
                            return ms;
                        }
                        x0(mG, mF);
                        mG.prototype.componentDidMount = function () {
                            if (this.ze.current && this.He.current) {
                                var mC = this.isPortrait ? 100 : 200;
                                if (this.He.current.offsetWidth > mC) {
                                    this.ze.current.style.width = `${this.He.current.offsetWidth}px`;
                                    this.ze.current.style.paddingLeft = "3%";
                                    this.ze.current.style.paddingRight = "3%";
                                } else {
                                    this.He.current.style.width = `${this.ze.current.offsetWidth}px`;
                                }
                                this.He.current.style.lineHeight = `${this.ze.current.offsetHeight}px`;
                            }
                        };
                        mG.prototype.render = function () {
                            var mC;
                            var ms;
                            var mE = [];
                            mE.push(
                                T.createElement(
                                    "div",
                                    {
                                        id: "error-label",
                                        key: "error-label",
                                        style: {
                                            color: D7.appearanceHelper.errorMessageFontColor,
                                        },
                                    },
                                    this.props.error.message
                                )
                            );
                            if (this.props.error.shouldRetry && this.props.retryButtonCallback) {
                                mE.push(this.je(D7.launchType, this.isPortrait, this.Ce));
                            }
                            if (this.props.closeButtonCallback) {
                                mE.push(
                                    ((mC = this.Se),
                                    (ms = this.isPortrait ? "5%" : "2%"),
                                    D7.launchType === xx.CARD
                                        ? T.createElement(
                                              "div",
                                              {
                                                  id: "error-retry-button-container-card-close",
                                                  className: "error-retry-button-container-vertical",
                                                  key: "error-retry-button-container-card-close",
                                                  style: {
                                                      marginTop: ms,
                                                  },
                                                  onClick: mC,
                                              },
                                              T.createElement(
                                                  "div",
                                                  {
                                                      id: "error-close-button-label-card",
                                                      key: "error-close-button-label",
                                                      style: {
                                                          color: D7.appearanceHelper.errorCloseFontColor,
                                                      },
                                                  },
                                                  DM.t("History.HistoryBarClose")
                                              )
                                          )
                                        : T.createElement(
                                              "div",
                                              {
                                                  id: "error-close-button-label",
                                                  key: "error-close-button-label",
                                                  onClick: mC,
                                                  style: {
                                                      color: D7.appearanceHelper.errorCloseFontColor,
                                                      marginTop: ms,
                                                  },
                                              },
                                              DM.t("History.HistoryBarClose")
                                          ))
                                );
                            }
                            var mf = {
                                backgroundColor: D7.appearanceHelper.listBackgroundColor,
                            };
                            var mc = this.isPortrait ? "error-container-vertical" : "error-container-horizontal";
                            return T.createElement(
                                "div",
                                {
                                    id: "error-container",
                                    className: mc,
                                    style: mf,
                                },
                                mE
                            );
                        };
                        mG.prototype.je = function (mC, ms, mE) {
                            var mf = {
                                backgroundColor: D7.appearanceHelper.errorRetryButtonColor,
                                outlineColor: D7.appearanceHelper.errorRetryButtonOutlineColor,
                            };
                            var mc = mC === xx.CARD ? "error-retry-button-container-card" : "";
                            var mZ = ms ? "error-retry-button-container-vertical" : "error-retry-button-container-horizontal";
                            return T.createElement(
                                "div",
                                {
                                    id: "error-retry-button-container",
                                    key: "error-retry-button-container",
                                    className: `${mc} ${mZ}`,
                                    ref: this.ze,
                                    onClick: mE,
                                    style: mf,
                                },
                                T.createElement(
                                    "div",
                                    {
                                        id: "error-retry-button-label",
                                        ref: this.He,
                                        style: {
                                            color: D7.appearanceHelper.errorRetryFontColor,
                                        },
                                    },
                                    DM.t("History.HistoryRetry")
                                )
                            );
                        };
                        mG.prototype.Ce = function () {
                            if (this.props.retryButtonCallback) {
                                this.props.retryButtonCallback();
                            }
                        };
                        mG.prototype.Se = function () {
                            if (this.props.closeButtonCallback) {
                                this.props.closeButtonCallback();
                            }
                        };
                        return mG;
                    })(T.Component);
                    var DW = {};
                    var DV = {};
                    var DY = (function (mF) {
                        function mG(mC) {
                            var ms = mF.call(this, mC) || this;
                            ms.state = {
                                active: false,
                                hover: false,
                            };
                            ms.De = ms.De.bind(ms);
                            ms.Fe = ms.Fe.bind(ms);
                            ms.Te = ms.Te.bind(ms);
                            ms.Oe = ms.Oe.bind(ms);
                            return ms;
                        }
                        x0(mG, mF);
                        mG.prototype.render = function () {
                            var mC = {
                                backgroundColor: this.state.active ? D7.appearanceHelper.listItemPressedColor : D7.appearanceHelper.listBackgroundColor,
                            };
                            var ms = D7.appearanceHelper.freeSpinListFontColor;
                            var mE = this.props.selected ? D7.appearanceHelper.freeSpinListSelectedFontColor : ms;
                            var mf = {
                                color: mE,
                            };
                            var mc = {
                                color: mE,
                            };
                            if (shell.isRTLLanguage()) {
                                mC.direction = "rtl";
                                mf = x1(x1({}, mf), {
                                    paddingRight: "15px",
                                    paddingLeft: "0px",
                                });
                                mc = x1(x1({}, mc), {
                                    marginRight: "auto",
                                    marginLeft: 0,
                                    paddingRight: "0px",
                                    paddingLeft: "15px",
                                });
                            }
                            return T.createElement(
                                "div",
                                {
                                    className: "game-free-spin-list-item",
                                    onClick: this.De,
                                    onMouseLeave: this.Fe,
                                    onMouseDown: this.Te,
                                    onMouseUp: this.Oe,
                                    style: mC,
                                },
                                T.createElement(
                                    "div",
                                    {
                                        className: "game-free-spin-type",
                                        style: mf,
                                    },
                                    this.props.title
                                ),
                                T.createElement(
                                    "div",
                                    {
                                        className: "game-free-spin-amount",
                                        style: mc,
                                    },
                                    this.props.winLostAmount
                                )
                            );
                        };
                        mG.prototype.De = function () {
                            if (this.props.onClickCallback) {
                                this.props.onClickCallback();
                            }
                        };
                        mG.prototype.Fe = function () {
                            this.setState({
                                active: false,
                            });
                        };
                        mG.prototype.Te = function () {
                            this.setState({
                                active: true,
                            });
                        };
                        mG.prototype.Oe = function () {
                            this.setState({
                                active: false,
                            });
                        };
                        return mG;
                    })(T.Component);
                    var Dp = {};
                    var DF = {};
                    var DG = {
                        get exports() {
                            return DF;
                        },
                        set exports(mF) {
                            DF = mF;
                        },
                    };
                    ({
                        get exports() {
                            return Dp;
                        },
                        set exports(mF) {
                            Dp = mF;
                        },
                    }).exports = (function (mF, mG, mC) {
                        return (() => {
                            var ms = {
                                229: (mZ) => {
                                    if (mF === undefined) {
                                        var mL = Error("Cannot find module 'prop-types'");
                                        mL.code = "MODULE_NOT_FOUND";
                                        throw mL;
                                    }
                                    mZ.exports = mF;
                                },
                                297: (mZ) => {
                                    mZ.exports = mG;
                                },
                                268: (mZ) => {
                                    mZ.exports = mC;
                                },
                            };
                            var mE = {};
                            function mf(mZ) {
                                var mL = mE[mZ];
                                if (mL !== undefined) {
                                    return mL.exports;
                                }
                                var R0 = (mE[mZ] = {
                                    exports: {},
                                });
                                ms[mZ](R0, R0.exports, mf);
                                return R0.exports;
                            }
                            mf.n = (mZ) => {
                                var mL = mZ && mZ.__esModule ? () => mZ.default : () => mZ;
                                mf.d(mL, {
                                    a: mL,
                                });
                                return mL;
                            };
                            mf.d = (mZ, mL) => {
                                for (var R0 in mL) {
                                    if (mf.o(mL, R0) && !mf.o(mZ, R0)) {
                                        Object.defineProperty(mZ, R0, {
                                            enumerable: true,
                                            get: mL[R0],
                                        });
                                    }
                                }
                            };
                            mf.o = (mZ, mL) => Object.prototype.hasOwnProperty.call(mZ, mL);
                            mf.r = (mZ) => {
                                if (typeof Symbol != "undefined" && Symbol.toStringTag) {
                                    Object.defineProperty(mZ, Symbol.toStringTag, {
                                        value: "Module",
                                    });
                                }
                                Object.defineProperty(mZ, "__esModule", {
                                    value: true,
                                });
                            };
                            var mc = {};
                            (() => {
                                mf.r(mc);
                                mf.d(mc, {
                                    default: () => RN,
                                });
                                var mZ = mf(297);
                                var mL = mf.n(mZ);
                                var R0 = mf(268);
                                var R1 = mf.n(R0);
                                const R2 = {
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
                                function R3(RP) {
                                    return (R3 =
                                        typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
                                            ? function (RI) {
                                                  return typeof RI;
                                              }
                                            : function (RI) {
                                                  if (RI && typeof Symbol == "function" && RI.constructor === Symbol && RI !== Symbol.prototype) {
                                                      return "symbol";
                                                  } else {
                                                      return typeof RI;
                                                  }
                                              })(RP);
                                }
                                function R4(RP, RI) {
                                    return (R4 =
                                        Object.setPrototypeOf ||
                                        function (Rm, RR) {
                                            Rm.__proto__ = RR;
                                            return Rm;
                                        })(RP, RI);
                                }
                                function R5(RP, RI) {
                                    if (!RI || (R3(RI) !== "object" && typeof RI != "function")) {
                                        return R6(RP);
                                    } else {
                                        return RI;
                                    }
                                }
                                function R6(RP) {
                                    if (RP === undefined) {
                                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    }
                                    return RP;
                                }
                                function R7(RP) {
                                    return (R7 = Object.setPrototypeOf
                                        ? Object.getPrototypeOf
                                        : function (RI) {
                                              return RI.__proto__ || Object.getPrototypeOf(RI);
                                          })(RP);
                                }
                                function R8(RP, RI, Rm) {
                                    if (RI in RP) {
                                        Object.defineProperty(RP, RI, {
                                            value: Rm,
                                            enumerable: true,
                                            configurable: true,
                                            writable: true,
                                        });
                                    } else {
                                        RP[RI] = Rm;
                                    }
                                    return RP;
                                }
                                function R9(RP, RI, Rm) {
                                    if ((RI = RI || RI === 0 ? RI : RP) > (Rm = Rm || Rm === 0 ? Rm : RP)) {
                                        return RP;
                                    } else if (RP < RI) {
                                        return RI;
                                    } else if (RP > Rm) {
                                        return Rm;
                                    } else {
                                        return RP;
                                    }
                                }
                                function Rx(RP, RI) {
                                    return RP.clientX > RI.left && RP.clientX < RI.right && RP.clientY > RI.top && RP.clientY < RI.top + RI.height;
                                }
                                var RD = (function (RP) {
                                    (function (RT, Rd) {
                                        if (typeof Rd != "function" && Rd !== null) {
                                            throw new TypeError("Super expression must either be null or a function");
                                        }
                                        RT.prototype = Object.create(Rd && Rd.prototype, {
                                            constructor: {
                                                value: RT,
                                                writable: true,
                                                configurable: true,
                                            },
                                        });
                                        if (Rd) {
                                            R4(RT, Rd);
                                        }
                                    })(Ru, RP);
                                    var RI;
                                    var Rm;
                                    var RR;
                                    Rm = Ru;
                                    RR = (function () {
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
                                            Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                                            return true;
                                        } catch (RT) {
                                            return false;
                                        }
                                    })();
                                    function Rl() {
                                        var RT;
                                        var Rd = R7(Rm);
                                        if (RR) {
                                            var Rq = R7(this).constructor;
                                            RT = Reflect.construct(Rd, arguments, Rq);
                                        } else {
                                            RT = Rd.apply(this, arguments);
                                        }
                                        return R5(this, RT);
                                    }
                                    function Ru(RT) {
                                        var Rd;
                                        (function (Rq, Rh) {
                                            if (!(Rq instanceof Rh)) {
                                                throw new TypeError("Cannot call a class as a function");
                                            }
                                        })(this, Ru);
                                        R8(R6((Rd = Rl.call(this, RT))), "innerContainerRef", (0, mZ.createRef)());
                                        R8(R6(Rd), "customScrollbarRef", (0, mZ.createRef)());
                                        R8(R6(Rd), "scrollHandleRef", (0, mZ.createRef)());
                                        R8(R6(Rd), "contentWrapperRef", (0, mZ.createRef)());
                                        R8(R6(Rd), "adjustFreezePosition", function (Rq) {
                                            if (Rd.contentWrapperRef.current) {
                                                var Rh = Rd.getScrolledElement();
                                                var RH = Rd.contentWrapperRef.current;
                                                if (Rd.props.freezePosition) {
                                                    RH.scrollTop = Rd.state.scrollPos;
                                                }
                                                if (Rq.freezePosition) {
                                                    Rh.scrollTop = Rd.state.scrollPos;
                                                }
                                            }
                                        });
                                        R8(R6(Rd), "toggleScrollIfNeeded", function () {
                                            var Rq = Rd.contentHeight - Rd.visibleHeight > 1;
                                            if (Rd.hasScroll !== Rq) {
                                                Rd.hasScroll = Rq;
                                                Rd.forceUpdate();
                                            }
                                        });
                                        R8(R6(Rd), "updateScrollPosition", function (Rq) {
                                            var Rh = Rd.getScrolledElement();
                                            var RH = R9(Rq, 0, Rd.contentHeight - Rd.visibleHeight);
                                            Rh.scrollTop = RH;
                                            Rd.setState({
                                                scrollPos: RH,
                                            });
                                        });
                                        R8(R6(Rd), "onClick", function (Rq) {
                                            if (Rd.hasScroll && Rd.isMouseEventOnCustomScrollbar(Rq) && !Rd.isMouseEventOnScrollHandle(Rq)) {
                                                var Rh = Rd.calculateNewScrollHandleTop(Rq);
                                                var RH = Rd.getScrollValueFromHandlePosition(Rh);
                                                Rd.updateScrollPosition(RH);
                                            }
                                        });
                                        R8(R6(Rd), "isMouseEventOnCustomScrollbar", function (Rq) {
                                            if (!Rd.customScrollbarRef.current) {
                                                return false;
                                            }
                                            var Rh = R1().findDOMNode(R6(Rd)).getBoundingClientRect();
                                            var RH = Rd.customScrollbarRef.current.getBoundingClientRect();
                                            var RU = Rd.props.rtl
                                                ? {
                                                      left: Rh.left,
                                                      right: RH.right,
                                                  }
                                                : {
                                                      left: RH.left,
                                                      width: Rh.right,
                                                  };
                                            return Rx(
                                                Rq,
                                                Object.assign(
                                                    {},
                                                    {
                                                        left: Rh.left,
                                                        right: Rh.right,
                                                        top: Rh.top,
                                                        height: Rh.height,
                                                    },
                                                    RU
                                                )
                                            );
                                        });
                                        R8(R6(Rd), "isMouseEventOnScrollHandle", function (Rq) {
                                            return (
                                                !!Rd.scrollHandleRef.current &&
                                                (function (Rh, RH) {
                                                    return Rx(Rh, RH.getBoundingClientRect());
                                                })(Rq, R1().findDOMNode(Rd.scrollHandleRef.current))
                                            );
                                        });
                                        R8(R6(Rd), "calculateNewScrollHandleTop", function (Rq) {
                                            var Rh = R1().findDOMNode(R6(Rd)).getBoundingClientRect().top + m.pageYOffset;
                                            var RH = Rq.pageY - Rh;
                                            var RU = Rd.getScrollHandleStyle().top;
                                            if (RH > RU + Rd.scrollHandleHeight) {
                                                return RU + Math.min(Rd.scrollHandleHeight, Rd.visibleHeight - Rd.scrollHandleHeight);
                                            } else {
                                                return RU - Math.max(Rd.scrollHandleHeight, 0);
                                            }
                                        });
                                        R8(R6(Rd), "getScrollValueFromHandlePosition", function (Rq) {
                                            return Rq / Rd.scrollRatio;
                                        });
                                        R8(R6(Rd), "getScrollHandleStyle", function () {
                                            var Rq = Rd.state.scrollPos * Rd.scrollRatio;
                                            Rd.scrollHandleHeight = Rd.visibleHeight * Rd.scrollRatio;
                                            return {
                                                height: Rd.scrollHandleHeight,
                                                top: Rq,
                                            };
                                        });
                                        R8(R6(Rd), "adjustCustomScrollPosToContentPos", function (Rq) {
                                            Rd.setState({
                                                scrollPos: Rq,
                                            });
                                        });
                                        R8(R6(Rd), "onScroll", function (Rq) {
                                            if (!Rd.props.freezePosition) {
                                                Rd.hideScrollThumb();
                                                Rd.adjustCustomScrollPosToContentPos(Rq.currentTarget.scrollTop);
                                                if (Rd.props.onScroll) {
                                                    Rd.props.onScroll(Rq);
                                                }
                                            }
                                        });
                                        R8(R6(Rd), "getScrolledElement", function () {
                                            return Rd.innerContainerRef.current;
                                        });
                                        R8(R6(Rd), "onMouseDown", function (Rq) {
                                            if (Rd.hasScroll && Rd.isMouseEventOnScrollHandle(Rq)) {
                                                Rd.startDragHandlePos = Rd.getScrollHandleStyle().top;
                                                Rd.startDragMousePos = Rq.pageY;
                                                Rd.setState({
                                                    onDrag: true,
                                                });
                                                document.addEventListener("mousemove", Rd.onHandleDrag, {
                                                    passive: false,
                                                });
                                                document.addEventListener("mouseup", Rd.onHandleDragEnd, {
                                                    passive: false,
                                                });
                                            }
                                        });
                                        R8(R6(Rd), "onTouchStart", function () {
                                            Rd.setState({
                                                onDrag: true,
                                            });
                                        });
                                        R8(R6(Rd), "onHandleDrag", function (Rq) {
                                            Rq.preventDefault();
                                            var Rh = Rq.pageY - Rd.startDragMousePos;
                                            var RH = R9(Rd.startDragHandlePos + Rh, 0, Rd.visibleHeight - Rd.scrollHandleHeight);
                                            var RU = Rd.getScrollValueFromHandlePosition(RH);
                                            Rd.updateScrollPosition(RU);
                                        });
                                        R8(R6(Rd), "onHandleDragEnd", function (Rq) {
                                            Rd.setState({
                                                onDrag: false,
                                            });
                                            Rq.preventDefault();
                                            document.removeEventListener("mousemove", Rd.onHandleDrag);
                                            document.removeEventListener("mouseup", Rd.onHandleDragEnd);
                                        });
                                        R8(R6(Rd), "blockOuterScroll", function (Rq) {
                                            if (!Rd.props.allowOuterScroll) {
                                                var Rh = Rq.currentTarget;
                                                var RH = Rq.currentTarget.scrollHeight - Rq.currentTarget.offsetHeight;
                                                var RU = Rq.deltaY % 3 ? Rq.deltaY : Rq.deltaY * 10;
                                                if (Rh.scrollTop + RU <= 0) {
                                                    Rh.scrollTop = 0;
                                                    Rq.preventDefault();
                                                } else if (Rh.scrollTop + RU >= RH) {
                                                    Rh.scrollTop = RH;
                                                    Rq.preventDefault();
                                                }
                                                Rq.stopPropagation();
                                            }
                                        });
                                        R8(R6(Rd), "getInnerContainerClasses", function () {
                                            if (Rd.state.scrollPos && Rd.props.addScrolledClass) {
                                                return `${R2.innerContainer} ${R2.contentScrolled}`;
                                            } else {
                                                return R2.innerContainer;
                                            }
                                        });
                                        R8(R6(Rd), "getScrollStyles", function () {
                                            var Rq = Rd.scrollbarYWidth || 20;
                                            var Rh = Rd.props.rtl ? "marginLeft" : "marginRight";
                                            var RH = {
                                                height: Rd.props.heightRelativeToParent || Rd.props.flex ? "100%" : "",
                                            };
                                            RH[Rh] = Rq * -1;
                                            var RU = {
                                                height: Rd.props.heightRelativeToParent || Rd.props.flex ? "100%" : "",
                                                overflowY: Rd.props.freezePosition ? "hidden" : "visible",
                                            };
                                            RU[Rh] = Rd.scrollbarYWidth ? 0 : Rq;
                                            return {
                                                innerContainer: RH,
                                                contentWrapper: RU,
                                            };
                                        });
                                        R8(R6(Rd), "getOuterContainerStyle", function () {
                                            return {
                                                height: Rd.props.heightRelativeToParent || Rd.props.flex ? "100%" : "",
                                            };
                                        });
                                        R8(R6(Rd), "getRootStyles", function () {
                                            var Rq = {};
                                            if (Rd.props.heightRelativeToParent) {
                                                Rq.height = Rd.props.heightRelativeToParent;
                                            } else if (Rd.props.flex) {
                                                Rq.flex = Rd.props.flex;
                                            }
                                            return Rq;
                                        });
                                        R8(R6(Rd), "enforceMinHandleHeight", function (Rq) {
                                            var Rh = Rd.props.minScrollHandleHeight;
                                            if (Rq.height >= Rh) {
                                                return Rq;
                                            }
                                            var RH = (Rh - Rq.height) * (Rd.state.scrollPos / (Rd.contentHeight - Rd.visibleHeight));
                                            return {
                                                height: Rh,
                                                top: Rq.top - RH,
                                            };
                                        });
                                        Rd.scrollbarYWidth = 0;
                                        Rd.state = {
                                            scrollPos: 0,
                                            onDrag: false,
                                        };
                                        Rd.hideScrollThumb = (function () {
                                            var Rq;
                                            function Rh() {
                                                clearTimeout(Rq);
                                            }
                                            function RH() {
                                                Rh();
                                                Rq = // TOLOOK
                                                    setTimeout(function () {
                                                        Rd.setState({
                                                            onDrag: false,
                                                        });
                                                    }, 500);
                                            }
                                            RH.cancel = Rh;
                                            return RH;
                                        })();
                                        return Rd;
                                    }
                                    if (
                                        (RI = [
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
                                                value: function (RT, Rd) {
                                                    var Rq = this.contentHeight;
                                                    var Rh = this.visibleHeight;
                                                    var RH = this.getScrolledElement();
                                                    var RU = Rd.scrollPos >= Rq - Rh;
                                                    this.contentHeight = RH.scrollHeight;
                                                    this.scrollbarYWidth = RH.offsetWidth - RH.clientWidth;
                                                    this.visibleHeight = RH.clientHeight;
                                                    this.scrollRatio = this.contentHeight ? this.visibleHeight / this.contentHeight : 1;
                                                    this.toggleScrollIfNeeded();
                                                    var Rg = this.state === Rd;
                                                    if (this.props.freezePosition || RT.freezePosition) {
                                                        this.adjustFreezePosition(RT);
                                                    }
                                                    if (this.props.scrollTo !== undefined && this.props.scrollTo !== RT.scrollTo) {
                                                        this.updateScrollPosition(this.props.scrollTo);
                                                    } else if (this.props.keepAtBottom && Rg && RU) {
                                                        this.updateScrollPosition(this.contentHeight - this.visibleHeight);
                                                    }
                                                },
                                            },
                                            {
                                                key: "componentWillUnmount",
                                                value: function () {
                                                    this.hideScrollThumb.cancel();
                                                    document.removeEventListener("mousemove", this.onHandleDrag);
                                                    document.removeEventListener("mouseup", this.onHandleDragEnd);
                                                    if (this.innerContainerRef.current) {
                                                        this.innerContainerRef.current.removeEventListener("wheel", this.blockOuterScroll);
                                                    }
                                                },
                                            },
                                            {
                                                key: "render",
                                                value: function () {
                                                    var RT = this.getScrollStyles();
                                                    var Rd = this.getRootStyles();
                                                    var Rq = this.enforceMinHandleHeight(this.getScrollHandleStyle());
                                                    var Rh = [
                                                        this.props.className || "",
                                                        R2.customScroll,
                                                        this.state.onDrag ? R2.scrollHandleDragged : "",
                                                    ].join(" ");
                                                    return mL().createElement(
                                                        "div",
                                                        {
                                                            className: Rh,
                                                            style: Rd,
                                                        },
                                                        mL().createElement(
                                                            "div",
                                                            {
                                                                className: R2.outerContainer,
                                                                style: this.getOuterContainerStyle(),
                                                                onMouseDown: this.onMouseDown,
                                                                onTouchStart: this.onTouchStart,
                                                                onClick: this.onClick,
                                                            },
                                                            this.hasScroll
                                                                ? mL().createElement(
                                                                      "div",
                                                                      {
                                                                          className: R2.positioning,
                                                                      },
                                                                      mL().createElement(
                                                                          "div",
                                                                          {
                                                                              ref: this.customScrollbarRef,
                                                                              className: `${R2.customScrollbar} ${this.props.rtl ? R2.customScrollbarRtl : ""}`,
                                                                              key: "scrollbar",
                                                                          },
                                                                          mL().createElement(
                                                                              "div",
                                                                              {
                                                                                  ref: this.scrollHandleRef,
                                                                                  className: R2.customScrollHandle,
                                                                                  style: Rq,
                                                                              },
                                                                              mL().createElement("div", {
                                                                                  className: this.props.handleClass,
                                                                              })
                                                                          )
                                                                      )
                                                                  )
                                                                : null,
                                                            mL().createElement(
                                                                "div",
                                                                {
                                                                    ref: this.innerContainerRef,
                                                                    className: this.getInnerContainerClasses(),
                                                                    style: RT.innerContainer,
                                                                    onScroll: this.onScroll,
                                                                },
                                                                mL().createElement(
                                                                    "div",
                                                                    {
                                                                        className: R2.contentWrapper,
                                                                        ref: this.contentWrapperRef,
                                                                        style: RT.contentWrapper,
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
                                        (function (RT, Rd) {
                                            for (var Rq = 0; Rq < Rd.length; Rq++) {
                                                var Rh = Rd[Rq];
                                                Rh.enumerable = Rh.enumerable || false;
                                                Rh.configurable = true;
                                                if ("value" in Rh) {
                                                    Rh.writable = true;
                                                }
                                                Object.defineProperty(RT, Rh.key, Rh);
                                            }
                                        })(Ru.prototype, RI);
                                    }
                                    return Ru;
                                })(mZ.Component);
                                try {
                                    var RJ = mf(229);
                                    RD.propTypes = {
                                        children: RJ.any,
                                        allowOuterScroll: RJ.bool,
                                        heightRelativeToParent: RJ.string,
                                        onScroll: RJ.func,
                                        addScrolledClass: RJ.bool,
                                        freezePosition: RJ.bool,
                                        handleClass: RJ.string,
                                        minScrollHandleHeight: RJ.number,
                                        flex: RJ.string,
                                        rtl: RJ.bool,
                                        scrollTo: RJ.number,
                                        keepAtBottom: RJ.bool,
                                        className: RJ.string,
                                    };
                                } catch (RP) {}
                                RD.defaultProps = {
                                    handleClass: R2.innerHandle,
                                    minScrollHandleHeight: 38,
                                };
                                const RN = RD;
                            })();
                            return mc;
                        })();
                    })(
                        (function () {
                            try {
                                if (!DQ) {
                                    DQ = 1;
                                    DG.exports = (function () {
                                        if (Dw) {
                                            return DO;
                                        }
                                        Dw = 1;
                                        var mF = Dk ? Dj : ((Dk = 1), (Dj = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"));
                                        function mG() {}
                                        function mC() {}
                                        mC.resetWarningCache = mG;
                                        return (DO = function () {
                                            function ms(mc, mZ, mL, R0, R1, R2) {
                                                if (R2 !== mF) {
                                                    var R3 = Error(
                                                        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
                                                    );
                                                    R3.name = "Invariant Violation";
                                                    throw R3;
                                                }
                                            }
                                            function mE() {
                                                return ms;
                                            }
                                            ms.isRequired = ms;
                                            var mf = {
                                                array: ms,
                                                bigint: ms,
                                                bool: ms,
                                                func: ms,
                                                number: ms,
                                                object: ms,
                                                string: ms,
                                                symbol: ms,
                                                any: ms,
                                                arrayOf: mE,
                                                element: ms,
                                                elementType: ms,
                                                instanceOf: mE,
                                                node: ms,
                                                objectOf: mE,
                                                oneOf: mE,
                                                oneOfType: mE,
                                                shape: mE,
                                                exact: mE,
                                                checkPropTypes: mC,
                                                resetWarningCache: mG,
                                            };
                                            mf.PropTypes = mf;
                                            return mf;
                                        });
                                    })()();
                                }
                                return DF;
                            } catch (mF) {}
                        })(),
                        T,
                        A
                    );
                    var DC = Dp;
                    var Ds = shell.I18n;
                    var DE = (function (mF) {
                        function mG(mC) {
                            var ms = mF.call(this, mC) || this;
                            ms.state = {
                                showing: false,
                                scrollToPosition: 0,
                            };
                            ms.Ne = ms.Ne.bind(ms);
                            ms.Ie = ms.Ie.bind(ms);
                            return ms;
                        }
                        x0(mG, mF);
                        mG.prototype.componentDidMount = function () {
                            var mC = this.props.currentSelectedIndex * 50;
                            this.setState({
                                scrollToPosition: mC,
                            });
                            if (D7.isMobile && DI() && shell.environment.getOrientation() === 90) {
                                document.querySelectorAll(".rcs-custom-scroll .rcs-inner-container").forEach(function (ms) {
                                    ms.style.webkitOverflowScrolling = "auto";
                                });
                            }
                        };
                        mG.prototype.render = function () {
                            var mC = {
                                backgroundColor: D7.appearanceHelper.listBackgroundColor,
                                color: D7.appearanceHelper.freeSpinListCloseButtonColor,
                            };
                            return T.createElement(
                                "div",
                                {
                                    id: "game-free-spin-view-container",
                                    className: "history regular",
                                    style: mC,
                                },
                                T.createElement(
                                    DC.default,
                                    {
                                        heightRelativeToParent: `calc(${this.props.parentHeight}px - ${50}px)`,
                                        scrollTo: this.state.scrollToPosition,
                                    },
                                    T.createElement("div", null, this.Le())
                                ),
                                T.createElement(
                                    "div",
                                    {
                                        id: "close-list-button",
                                        onClick: this.Ne.bind(this, -1),
                                    },
                                    Ds.t("History.HistoryBarClose")
                                )
                            );
                        };
                        mG.prototype.Le = function () {
                            for (var mC = [], ms = this.props.totalCount, mE = 0; mE < ms; mE++) {
                                var mf = this.Pe(mE, ms);
                                mC.push(
                                    T.createElement(DY, {
                                        key: `game-free-spin-list-item-${mE}`,
                                        selected: this.props.currentSelectedIndex === mE,
                                        title: mf,
                                        winLostAmount: this.props.winLostAmountArrary[mE].toString(),
                                        onClickCallback: this.Ne.bind(this, mE),
                                    })
                                );
                            }
                            return mC;
                        };
                        mG.prototype.Pe = function (mC, ms) {
                            var mE = this.props.getTitleText(mC);
                            if (typeof mE == "object") {
                                if (mE.noCount) {
                                    return mE.title;
                                }
                                var mf = shell.isRTLLanguage() ? `${ms}/${mC + 1}` : `${mC + 1}/${ms}`;
                                return `${mE.title}: ${mf}`;
                            }
                            if (mC === 0) {
                                return Ds.t("History.HistoryNormalSpin");
                            }
                            var mc = shell.isRTLLanguage() ? `${ms - 1}/${mC}` : `${mC}/${ms - 1}`;
                            return `${mE}: ${mc}`;
                        };
                        mG.prototype.Ne = function (mC) {
                            this.props.onPageClickCallback(mC);
                        };
                        mG.prototype.Ie = function () {
                            this.props.onClickCallback(0);
                        };
                        return mG;
                    })(T.PureComponent);
                    function Df(mF) {
                        var mG = D7.isMobile ? "-mobile" : "";
                        var mC = mF.isPortrait ? "vertical" : `horizontal${mG}`;
                        var ms = mF.isPortrait ? "exit-icon-stroke-vertical" : `horizontal exit-icon-stroke-horizontal${mG}`;
                        var mE = {
                            backgroundColor: mF.customColor ? mF.customColor : D7.appearanceHelper.navCloseButtonIconColor,
                        };
                        return T.createElement(
                            "div",
                            {
                                className: `exit-icon ${mC}`,
                                onClick: mF.onClickCallback,
                            },
                            T.createElement("div", {
                                className: `exit-icon-stroke exit-icon-stroke-one ${ms}`,
                                style: mE,
                            }),
                            T.createElement("div", {
                                className: `exit-icon-stroke exit-icon-stroke-two ${ms}`,
                                style: mE,
                            })
                        );
                    }
                    function Dc(mF) {
                        if (mF) {
                            return "game-list-nav-image-container-disabled";
                        } else if (D7.launchType === xx.CARD) {
                            return "game-list-nav-image-container-card";
                        } else {
                            return "game-list-nav-image-container-slot";
                        }
                    }
                    function DZ(mF) {
                        var mG = Dx(mF, true);
                        var mC = DD(mF, false);
                        var ms = DJ(mF);
                        return `${mG} ${mC} ${ms}`;
                    }
                    function DL(mF) {
                        D7.appearanceHelper.secondaryFontColor;
                        shell.isRTLLanguage();
                        return T.createElement(
                            "div",
                            {
                                key: mF,
                                className: "game-list-nav-subtitle-label",
                                style: {
                                    color: D7.appearanceHelper.secondaryFontColor,
                                },
                            },
                            mF
                        );
                    }
                    var J0 = shell.I18n;
                    var J1 = (function (mF) {
                        function mG(mC) {
                            var ms = mF.call(this, mC) || this;
                            ms.Me = D7.launchType === xx.CARD;
                            ms.Ae = T.createRef();
                            ms.Be = T.createRef();
                            ms.Re = ms.Re.bind(ms);
                            ms.Ee = ms.Ee.bind(ms);
                            ms.Ve = ms.Ve.bind(ms);
                            ms.We = ms.We.bind(ms);
                            return ms;
                        }
                        x0(mG, mF);
                        mG.prototype.componentDidMount = function () {
                            this.Ye();
                        };
                        mG.prototype.componentDidUpdate = function () {
                            this.Ye();
                        };
                        mG.prototype.render = function () {
                            var mC = {
                                backgroundColor: D7.appearanceHelper.navBarColor,
                            };
                            if (shell.isRTLLanguage()) {
                                mC.direction = "rtl";
                            }
                            return T.createElement(
                                "div",
                                {
                                    id: "game-list-nav",
                                    style: mC,
                                },
                                this.Re()
                            );
                        };
                        mG.prototype.Re = function () {
                            var mC = [];
                            var ms = this.Me ? 4 : 2;
                            mC.push(
                                T.createElement(
                                    "div",
                                    {
                                        id: "game-list-nav-bar",
                                        key: "game-list-nav-bar",
                                        className: "game-list-nav-bar-vertical",
                                        style: {
                                            height: `calc(100% - ${ms}px)`,
                                        },
                                    },
                                    this.Ge()
                                )
                            );
                            if (this.props.currentState === xD.HistoryDetails || this.props.currentState === xD.HistoryList) {
                                var mE = this.Me ? "game-list-nav-separator-vertical-card" : "game-list-nav-separator-vertical-slot";
                                var mf = D7.appearanceHelper.navBarSeparatorColor;
                                mC.push(
                                    T.createElement("div", {
                                        key: "game-list-nav-separator",
                                        className: mE,
                                        style: {
                                            backgroundColor: mf,
                                        },
                                    })
                                );
                            }
                            return mC;
                        };
                        mG.prototype.Ge = function () {
                            var mC = [];
                            var ms = D7.appearanceHelper.titleFontColor;
                            var mE = D7.appearanceHelper.navBarFontTitleColor;
                            var mf = D7.isPortrait ? "" : "game-detail-nav-label-container-horizontal";
                            mC.push(
                                T.createElement(
                                    "div",
                                    {
                                        className: `game-list-nav-image-container ${Dc(this.props.showLeftDisabled)}`,
                                        key: "game-list-nav-image-container-left",
                                        onClick: this.Ve,
                                    },
                                    this.Ue()
                                )
                            );
                            switch (this.props.currentState) {
                                case xD.HistoryDetails:
                                case xD.HistoryFreeSpinDetails:
                                    mC.push(
                                        T.createElement(
                                            "div",
                                            {
                                                id: "game-list-nav-label-container",
                                                className: `game-list-nav-label-container-vertical ${mf}`,
                                                key: "game-list-nav-label-container-details",
                                            },
                                            T.createElement(
                                                "div",
                                                {
                                                    className: "game-list-nav-row-container ",
                                                    onClick: this.props.titleClickCallback,
                                                },
                                                this.qe(this.props.showTitle(), mE),
                                                this.Xe()
                                            ),
                                            this.Ke()
                                        )
                                    );
                                    break;
                                case xD.HistoryList:
                                    mC.push(
                                        T.createElement(
                                            "div",
                                            {
                                                id: "game-list-nav-label-container",
                                                className: "game-list-nav-label-container-vertical",
                                                key: "game-list-nav-label-container-list",
                                            },
                                            T.createElement(
                                                "div",
                                                {
                                                    className: "game-list-nav-period-label",
                                                    style: {
                                                        color: ms,
                                                    },
                                                },
                                                J0.t("History.HistoryMainTitle")
                                            ),
                                            DL(this.Ee())
                                        )
                                    );
                                    break;
                                case xD.HistoryCalendar:
                                    mC.push(
                                        T.createElement(
                                            "div",
                                            {
                                                id: "game-list-nav-label-container",
                                                className: "game-list-nav-label-container-vertical",
                                                key: "game-list-nav-label-container-calendar",
                                                style: {
                                                    justifyContent: "center",
                                                    color: D7.appearanceHelper.secondaryFontColor,
                                                },
                                            },
                                            T.createElement(
                                                "div",
                                                {
                                                    className: "game-list-nav-period-label",
                                                    style: {
                                                        color: D7.appearanceHelper.calendarTitleColor,
                                                        justifyContent: "center",
                                                    },
                                                },
                                                this.Ee()
                                            )
                                        )
                                    );
                            }
                            mC.push(
                                T.createElement(
                                    "div",
                                    {
                                        className: `game-list-nav-image-container ${Dc(this.props.showRightDisabled)}`,
                                        key: "game-list-nav-image-container-right",
                                        onClick: this.We,
                                    },
                                    this.props.customRightItem || this.Je()
                                )
                            );
                            return mC;
                        };
                        mG.prototype.Ke = function () {
                            var mC = this.props;
                            var ms = mC.betTime;
                            var mE = mC.transactionStartTime;
                            var mf = [];
                            if (mE) {
                                var mc = shell.I18n.t("History.HistoryCalenderStart") + ": " + DZ(mE);
                                mf.push(DL(mc));
                            }
                            if (ms) {
                                var mZ = mE ? shell.I18n.t("History.HistoryCalenderEnd") + ": " : "";
                                mZ += DZ(ms);
                                mf.push(DL(mZ));
                            }
                            return mf;
                        };
                        mG.prototype.Ve = function () {
                            var mC = this.props.leftButtonClickedCallback;
                            if (mC) {
                                mC();
                            }
                        };
                        mG.prototype.We = function () {
                            var mC = this.props.currentState;
                            var ms = this.props.rightButtonClickedCallback;
                            switch (mC) {
                                case xD.HistoryDetails:
                                    if (!D7.isPortrait) {
                                        if (ms) {
                                            ms();
                                        }
                                    }
                                    break;
                                case xD.HistoryCalendar:
                                case xD.HistoryFreeSpinDetails:
                                    break;
                                default:
                                    if (ms) {
                                        ms();
                                    }
                            }
                        };
                        mG.prototype.Xe = function () {
                            if (this.props.showDropDownArrow()) {
                                var mC = this.props.currentState === xD.HistoryFreeSpinDetails ? "angle-up" : "angle-down";
                                var ms = mC === "angle-up" ? "translateY(4px)" : "translateY(-4px)";
                                var mE = {
                                    transition: "transform 0.15s ease-out",
                                    borderColor: D7.appearanceHelper.freeSpinListArrowColor,
                                };
                                var mf = D7.isMobile ? "gh-angle-horizontal-mobile" : "gh-angle-horizontal";
                                return T.createElement(
                                    "div",
                                    {
                                        id: "nav-drop-down-arrow",
                                    },
                                    T.createElement(
                                        "div",
                                        {
                                            className: "gh-angle-wrapper",
                                            style: {
                                                transform: ms,
                                            },
                                        },
                                        T.createElement("div", {
                                            id: "calendar-arrow",
                                            className: `${mf} ${mC}`,
                                            style: mE,
                                        })
                                    )
                                );
                            }
                            return null;
                        };
                        mG.prototype.Ee = function () {
                            var mC = "";
                            if (this.props.currentState === xD.HistoryCalendar) {
                                switch (this.props.currentCalendarState) {
                                    case xJ.SELECTION:
                                        mC = J0.t("History.HistoryCalendarDateRange");
                                        break;
                                    case xJ.CUSTOM:
                                        mC = J0.t("History.HistoryCalenderCustom");
                                }
                            } else {
                                switch (this.props.currentCalendarType) {
                                    case 1:
                                    default:
                                        mC = J0.t("History.HistoryCalenderToday");
                                        break;
                                    case 2:
                                        mC = J0.t("History.HistoryCalenderWeek");
                                        break;
                                    case 3:
                                        mC =
                                            Dx(this.props.calendarCustomDateConfig.startDate, true) +
                                            " - " +
                                            Dx(this.props.calendarCustomDateConfig.endDate, true);
                                }
                            }
                            return mC;
                        };
                        mG.prototype.Ue = function () {
                            var mC = "";
                            var ms = shell.isRTLLanguage() ? -0.7 : 0.7;
                            var mE = 0;
                            var mf = 0;
                            var mc = "";
                            var mZ = {};
                            var mL = {};
                            switch (this.props.currentState) {
                                case xD.HistoryList:
                                    if (D7.launchType === xx.CARD) {
                                        mC = "gh_card_history_sprite gh_card_btn_calendar_normal";
                                        mE = shell.isRTLLanguage() ? 50 : -50;
                                        mf = -5;
                                        ms = 0.3;
                                    } else if (!D7.isApiReplay) {
                                        mC = "gh_basic_sprite gh_ic_nav_calendar";
                                        ms = 0.325;
                                    }
                                    break;
                                case xD.HistoryFreeSpinDetails:
                                case xD.HistoryDetails:
                                default:
                                    if (D7.launchType === xx.CARD) {
                                        mC = "gh_card_history_sprite gh_card_ic_nav_back_default";
                                        mc = "game-list-nav-image-details-card";
                                        ms = shell.isRTLLanguage() ? -0.3 : 0.3;
                                        mZ.transformOrigin = shell.isRTLLanguage() ? "right" : "left";
                                        mE = shell.isRTLLanguage() ? 106 : 0;
                                    } else {
                                        mC = "gh-arrow";
                                        mL = {
                                            backgroundColor: D7.appearanceHelper.navBackButtonIconColor,
                                        };
                                    }
                            }
                            return T.createElement(
                                "div",
                                {
                                    id: "game-list-nav-image-left",
                                    className: `game-list-nav-image ${mc}`,
                                    key: "game-list-nav-image-left",
                                    style: x1(
                                        {
                                            transform: `scaleX(${ms}) scaleY(${Math.abs(ms)})`,
                                        },
                                        mZ
                                    ),
                                },
                                T.createElement("div", {
                                    className: mC,
                                    style: x1(
                                        {
                                            transform: `translate(${mE}px, ${mf}px)`,
                                        },
                                        mL
                                    ),
                                })
                            );
                        };
                        mG.prototype.Je = function () {
                            var mC = "";
                            var ms = "";
                            var mE = "";
                            var mf = undefined;
                            var mc = this.props.currentState;
                            var mZ = mc === xD.HistoryDetails || D7.isPortrait;
                            switch (D7.launchType) {
                                case xx.GAME:
                                case xx.SLOT:
                                case xx.APIREPLAY:
                                    mE = mc === xD.HistoryDetails ? "" : `translateX(${shell.isRTLLanguage() ? -9 : 9}px)`;
                                    mf = T.createElement(Df, {
                                        isPortrait: mZ,
                                    });
                                    break;
                                case xx.CARD:
                                    mC = "gh_card_history_sprite";
                                    ms = "gh_card_btn_close_normal";
                                    mE = `scale(0.3) translateY(${shell.isRTLLanguage() ? 5 : -5}px)`;
                                    mf = T.createElement("div", {
                                        className: `${mC} ${ms}`,
                                    });
                            }
                            return T.createElement(
                                "div",
                                {
                                    id: "game-list-nav-image-right",
                                    className: "game-list-nav-image",
                                    key: "game-list-nav-image-right",
                                    style: {
                                        display: this.Ze(),
                                        transform: mE,
                                    },
                                },
                                mf
                            );
                        };
                        mG.prototype.Ze = function () {
                            var mC = "";
                            switch (this.props.currentState) {
                                case xD.HistoryDetails:
                                    mC = D7.isPortrait ? "none" : "flex";
                                    break;
                                case xD.HistoryCalendar:
                                case xD.HistoryFreeSpinDetails:
                                    mC = "none";
                                    break;
                                default:
                                    mC = "flex";
                            }
                            return mC;
                        };
                        mG.prototype.qe = function (mC, ms) {
                            return T.createElement(
                                "div",
                                {
                                    id: "game-free-spin-nav-label-wrapper",
                                    ref: this.Ae,
                                },
                                T.createElement(
                                    "div",
                                    {
                                        id: "game-free-spin-nav-label",
                                        style: {
                                            color: ms,
                                        },
                                        ref: this.Be,
                                    },
                                    mC
                                )
                            );
                        };
                        mG.prototype.Ye = function () {
                            if (this.Be.current && this.Ae.current) {
                                var mC = this.Be.current.offsetWidth;
                                if (mC > 210) {
                                    this.Ae.current.style.width = `${210}px`;
                                    var ms = 210 / mC;
                                    this.Be.current.style.transform = `scale(${ms})`;
                                } else {
                                    this.Ae.current.style.width = `${mC}px`;
                                }
                            }
                        };
                        return mG;
                    })(T.Component);
                    function J2(mF) {
                        var mG;
                        var mC = mF.isHorizontal;
                        var ms = mF.isFade;
                        var mE = mF.fromSide;
                        var mf = mF.loadMore;
                        var mc = mF.isMobile;
                        var mZ = document.getElementById("game-history-container");
                        var mL = document.getElementById("game-list-detail-wrapper");
                        var R0 = mZ.clientHeight;
                        var R1 = mZ.clientWidth;
                        var R2 = mL ? mL.clientWidth : 0;
                        if (mf) {
                            var R3 = undefined;
                            var R4 = undefined;
                            var R5 = undefined;
                            var R6 = undefined;
                            if (mC && mc === false) {
                                R5 = (R1 / 3) * 0.8;
                                R6 = xT;
                                R3 = (R1 / 3 - R2 / 2) * 0.6;
                                R4 = (R0 - xT + 90) / 3 - DH() / 3;
                            } else if (mC && mc === true) {
                                R5 = R1 - 50;
                                R6 = 180;
                                R3 = R1 / 2 + 25;
                                R4 = R0 - 40;
                            } else {
                                R5 = R1;
                                R6 = 180;
                                R3 = R1 / 2;
                                R4 = R0 - 40 - Du() - DH() + 10;
                            }
                            mG = {
                                label: shell.I18n.t("History.HistoryLoading"),
                                isFullBackground: true,
                                width: R5,
                                height: R6,
                                x: R3,
                                y: R4,
                                opacity: 1,
                                scale: mC && !mc ? 0.6 : 1,
                                inAnimate: "Fade",
                                inDuration: 0.5,
                                inValue: 0,
                                color: D7.appearanceHelper.loadingColor,
                            };
                        } else {
                            R3 = undefined;
                            R4 = undefined;
                            R5 = undefined;
                            R6 = undefined;
                            var R7 = undefined;
                            if (mC && mc === false) {
                                R5 = 360;
                                R6 = 640;
                                R3 = (R1 / 3) * (mE ? 0.83 : 0.6);
                                R3 = shell.isRTLLanguage() ? R1 / 3 - R3 : R3;
                                R4 = (R0 / 3) * 0.5;
                                R7 = 0.6;
                            } else if (mC && mc === true) {
                                R5 = R1 - 50;
                                R6 = R0;
                                R3 = R1 / 2 + 25;
                                R4 = R0 / 2;
                                R7 = 1;
                            } else {
                                R5 = 360;
                                R6 = 640;
                                R3 = R1 / 2;
                                R4 = R0 / 2;
                                R7 = 1;
                            }
                            var R8 = ms ? "Fade" : "Slide";
                            var R9 = mC ? 0.2 : 0.5;
                            var Rx = ms
                                ? 0
                                : mE
                                ? {
                                      x: R1,
                                  }
                                : {
                                      y: R0,
                                  };
                            if (shell.isRTLLanguage() && typeof Rx == "object") {
                                Rx.x = Rx.x * -1;
                            }
                            mG = {
                                label: shell.I18n.t("History.HistoryLoading"),
                                width: R5,
                                height: R6,
                                x: R3,
                                y: R4,
                                opacity: 1,
                                scale: R7,
                                inAnimate: R8,
                                inEasing: "easeOutCubic",
                                inDuration: R9,
                                inValue: Rx,
                                color: D7.appearanceHelper.loadingColor,
                            };
                        }
                        q(function () {
                            var RD = D7.context.event;
                            RD.emit("Loading.Show", mG);
                            return function () {
                                RD.emit("Loading.Hide");
                            };
                        }, []);
                        return T.createElement(
                            "div",
                            {
                                id: "loading",
                            },
                            (function (RD, RJ, RN) {
                                var RP = RD ? `horizontal${RJ ? "-mobile" : ""}` : "vertical";
                                if (RN) {
                                    var RI = {
                                        top: (RD ? (RJ ? 14 : 31) : 13) + (RD ? 0 : Dm()),
                                    };
                                    if (shell.isRTLLanguage()) {
                                        RI.left = RD ? "28px" : "15px";
                                        RI.right = 0;
                                    }
                                    return T.createElement(
                                        "div",
                                        {
                                            id: "loading-exit",
                                            className: RP,
                                            style: RI,
                                        },
                                        T.createElement(Df, {
                                            isPortrait: !RD,
                                            onClickCallback: function () {
                                                RN();
                                            },
                                            customColor: D7.appearanceHelper.loadingCloseButtonIconColor,
                                        })
                                    );
                                }
                            })(mF.isHorizontal, mF.isMobile, mF.onButtonClickCallback)
                        );
                    }
                    function J3(mF, mG) {
                        return mF.map(function (mC, ms) {
                            return mC + mG[ms];
                        });
                    }
                    function J4(mF, mG) {
                        return mF.map(function (mC, ms) {
                            return mC - mG[ms];
                        });
                    }
                    function J5(mF, mG, mC) {
                        mC = mC || Math.hypot.apply(Math, mF);
                        if (mG) {
                            return mC / mG;
                        } else {
                            return 0;
                        }
                    }
                    function J6(mF, mG) {
                        if (mG) {
                            return mF.map(function (mC) {
                                return mC / mG;
                            });
                        } else {
                            return Array(mF.length).fill(0);
                        }
                    }
                    function J7(mF) {
                        return Math.hypot.apply(Math, mF);
                    }
                    function J8(mF, mG) {
                        mG = mG || Math.hypot.apply(Math, mF) || 1;
                        return mF.map(function (mC) {
                            return mC / mG;
                        });
                    }
                    function J9(mF, mG, mC) {
                        var ms = Math.hypot.apply(Math, mG);
                        return {
                            velocities: J6(mG, mC),
                            velocity: J5(mG, mC, ms),
                            distance: J7(mF),
                            direction: J8(mG, ms),
                        };
                    }
                    function Jx(mF) {
                        if (Math.sign) {
                            return Math.sign(mF);
                        } else {
                            return +(mF > 0) - +(mF < 0) || +mF;
                        }
                    }
                    function JD(mF, mG) {
                        return Math.abs(mF) >= mG && Jx(mF) * mG;
                    }
                    function JJ(mF, mG, mC) {
                        if (mG === 0 || Math.abs(mG) === Infinity) {
                            return (function (ms, mE) {
                                return Math.pow(ms, mE * 5);
                            })(mF, mC);
                        } else {
                            return (mF * mG * mC) / (mG + mC * mF);
                        }
                    }
                    function JN(mF, mG, mC, ms) {
                        if (ms === undefined) {
                            ms = 0.15;
                        }
                        if (ms === 0) {
                            return (function (mE, mf, mc) {
                                return Math.max(mf, Math.min(mE, mc));
                            })(mF, mG, mC);
                        } else if (mF < mG) {
                            return -JJ(mG - mF, mC - mG, ms) + mG;
                        } else if (mF > mC) {
                            return JJ(mF - mC, mC - mG, ms) + mC;
                        } else {
                            return mF;
                        }
                    }
                    function JP(mF, mG) {
                        for (var mC = 0; mC < mG.length; mC++) {
                            var ms = mG[mC];
                            ms.enumerable = ms.enumerable || false;
                            ms.configurable = true;
                            if ("value" in ms) {
                                ms.writable = true;
                            }
                            Object.defineProperty(mF, ms.key, ms);
                        }
                    }
                    function JI() {
                        JI =
                            Object.assign ||
                            function (mF) {
                                for (var mG = 1; mG < arguments.length; mG++) {
                                    var mC = arguments[mG];
                                    for (var ms in mC) {
                                        if (Object.prototype.hasOwnProperty.call(mC, ms)) {
                                            mF[ms] = mC[ms];
                                        }
                                    }
                                }
                                return mF;
                            };
                        return JI.apply(this, arguments);
                    }
                    function Jm(mF, mG) {
                        mF.prototype = Object.create(mG.prototype);
                        mF.prototype.constructor = mF;
                        mF.__proto__ = mG;
                    }
                    function JR(mF, mG) {
                        if (mF == null) {
                            return {};
                        }
                        var mC;
                        var ms;
                        var mE = {};
                        var mf = Object.keys(mF);
                        for (ms = 0; ms < mf.length; ms++) {
                            mC = mf[ms];
                            if (!(mG.indexOf(mC) >= 0)) {
                                mE[mC] = mF[mC];
                            }
                        }
                        return mE;
                    }
                    function Jl(mF, mG) {
                        if (mG == null || mG > mF.length) {
                            mG = mF.length;
                        }
                        for (var mC = 0, ms = Array(mG); mC < mG; mC++) {
                            ms[mC] = mF[mC];
                        }
                        return ms;
                    }
                    function Ju(mF) {
                        var mG = 0;
                        if (typeof Symbol == "undefined" || mF[Symbol.iterator] == null) {
                            if (
                                Array.isArray(mF) ||
                                (mF = (function (mC, ms) {
                                    if (mC) {
                                        if (typeof mC == "string") {
                                            return Jl(mC, ms);
                                        }
                                        var mE = Object.prototype.toString.call(mC).slice(8, -1);
                                        if (mE === "Object" && mC.constructor) {
                                            mE = mC.constructor.name;
                                        }
                                        if (mE === "Map" || mE === "Set") {
                                            return Array.from(mC);
                                        } else if (mE === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(mE)) {
                                            return Jl(mC, ms);
                                        } else {
                                            return undefined;
                                        }
                                    }
                                })(mF))
                            ) {
                                return function () {
                                    if (mG >= mF.length) {
                                        return {
                                            done: true,
                                        };
                                    } else {
                                        return {
                                            done: false,
                                            value: mF[mG++],
                                        };
                                    }
                                };
                            }
                            throw new TypeError(
                                "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                            );
                        }
                        return (mG = mF[Symbol.iterator]()).next.bind(mG);
                    }
                    function JT() {}
                    function Jd() {
                        for (var mF = arguments.length, mG = Array(mF), mC = 0; mC < mF; mC++) {
                            mG[mC] = arguments[mC];
                        }
                        return function () {
                            for (var ms = arguments.length, mE = Array(ms), mf = 0; mf < ms; mf++) {
                                mE[mf] = arguments[mf];
                            }
                            return mG.forEach(function (mc) {
                                return mc.apply(undefined, mE);
                            });
                        };
                    }
                    function Jq(mF) {
                        if (Array.isArray(mF)) {
                            return mF;
                        } else {
                            return [mF, mF];
                        }
                    }
                    function Jh(mF, mG) {
                        if (mF !== undefined) {
                            return mF;
                        } else {
                            return mG;
                        }
                    }
                    function JH(mF, mG) {
                        var mC = {};
                        Object.entries(mF).forEach(function (ms) {
                            var mE = ms[0];
                            var mf = ms[1];
                            return (mf !== undefined || mE in mG) && (mC[mE] = mf);
                        });
                        return mC;
                    }
                    function JU(mF) {
                        if (typeof mF == "function") {
                            return mF();
                        } else {
                            return mF;
                        }
                    }
                    function Jg() {
                        var mF = {
                            Qe: false,
                            $e: false,
                            ti: [false, false],
                            ei: [0, 0],
                            ii: [0, 0],
                            ni: undefined,
                            event: undefined,
                            values: [0, 0],
                            velocities: [0, 0],
                            delta: [0, 0],
                            movement: [0, 0],
                            offset: [0, 0],
                            lastOffset: [0, 0],
                            direction: [0, 0],
                            initial: [0, 0],
                            previous: [0, 0],
                            first: false,
                            last: false,
                            active: false,
                            timeStamp: 0,
                            startTime: 0,
                            elapsedTime: 0,
                            cancel: JT,
                            canceled: false,
                            memo: undefined,
                            args: undefined,
                        };
                        var mG = {
                            axis: undefined,
                            xy: [0, 0],
                            vxvy: [0, 0],
                            velocity: 0,
                            distance: 0,
                        };
                        return {
                            shared: {
                                hovering: false,
                                scrolling: false,
                                wheeling: false,
                                dragging: false,
                                moving: false,
                                pinching: false,
                                touches: 0,
                                buttons: 0,
                                down: false,
                                shiftKey: false,
                                altKey: false,
                                metaKey: false,
                                ctrlKey: false,
                            },
                            drag: JI(
                                JI(JI({}, mF), mG),
                                {},
                                {
                                    ri: true,
                                    oi: false,
                                    tap: false,
                                    swipe: [0, 0],
                                }
                            ),
                            pinch: JI(JI({}, mF), {
                                da: [0, 0],
                                vdva: [0, 0],
                                origin: undefined,
                                turns: 0,
                            }),
                            wheel: JI(JI({}, mF), mG),
                            move: JI(JI({}, mF), mG),
                            scroll: JI(JI({}, mF), mG),
                        };
                    }
                    function JS(mF) {
                        return function (mG, mC, ms) {
                            var mE = mF ? "addEventListener" : "removeEventListener";
                            mC.forEach(function (mf) {
                                var mc = mf[0];
                                var mZ = mf[1];
                                return mG[mE](mc, mZ, ms);
                            });
                        };
                    }
                    var Jv = JS(true);
                    var Jz = JS(false);
                    function JA(mF) {
                        if ("touches" in mF) {
                            var mG = mF.touches;
                            var mC = mF.changedTouches;
                            if (mG.length > 0) {
                                return mG;
                            } else {
                                return mC;
                            }
                        }
                        return null;
                    }
                    function Jb(mF) {
                        var mG = "buttons" in mF ? mF.buttons : 0;
                        var mC = JA(mF);
                        var ms = (mC && mC.length) || 0;
                        return JI(
                            {
                                touches: ms,
                                down: ms > 0 || mG > 0,
                                buttons: mG,
                            },
                            (function (mE) {
                                return {
                                    shiftKey: mE.shiftKey,
                                    altKey: mE.altKey,
                                    metaKey: mE.metaKey,
                                    ctrlKey: mE.ctrlKey,
                                };
                            })(mF)
                        );
                    }
                    function JX(mF) {
                        var mG = mF.currentTarget;
                        var mC = mG.scrollX;
                        var ms = mG.scrollY;
                        var mE = mG.scrollLeft;
                        var mf = mG.scrollTop;
                        return {
                            values: [mC || mE || 0, ms || mf || 0],
                        };
                    }
                    function JB(mF) {
                        return {
                            values: [mF.deltaX, mF.deltaY],
                        };
                    }
                    function Jy(mF) {
                        var mG = JA(mF);
                        var mC = mG ? mG[0] : mF;
                        return {
                            values: [mC.clientX, mC.clientY],
                        };
                    }
                    function Ja(mF) {
                        return {
                            values: [mF.scale * 260, mF.rotation],
                        };
                    }
                    function Jj(mF) {
                        var mG = mF.touches;
                        var mC = mG[1].clientX - mG[0].clientX;
                        var ms = mG[1].clientY - mG[0].clientY;
                        return {
                            values: [Math.hypot(mC, ms), (Math.atan2(mC, ms) * -180) / Math.PI],
                            origin: [(mG[1].clientX + mG[0].clientX) / 2, (mG[1].clientY + mG[0].clientY) / 2],
                        };
                    }
                    function Jk() {
                        var mF = this;
                        this.state = Jg();
                        this.timeouts = {};
                        this.domListeners = [];
                        this.windowListeners = {};
                        this.bindings = {};
                        this.clean = function () {
                            mF.resetBindings();
                            Object.values(mF.timeouts).forEach(clearTimeout);
                            Object.keys(mF.windowListeners).forEach(function (mG) {
                                return mF.removeWindowListeners(mG);
                            });
                        };
                        this.resetBindings = function () {
                            mF.bindings = {};
                            var mG = mF.getDomTarget();
                            if (mG) {
                                Jz(mG, mF.domListeners, mF.config.eventOptions);
                                mF.domListeners = [];
                            }
                        };
                        this.getDomTarget = function () {
                            var mG = mF.config.domTarget;
                            if (mG && "current" in mG) {
                                return mG.current;
                            } else {
                                return mG;
                            }
                        };
                        this.addWindowListeners = function (mG, mC) {
                            if (mF.config.window) {
                                mF.windowListeners[mG] = mC;
                                Jv(mF.config.window, mC, mF.config.eventOptions);
                            }
                        };
                        this.removeWindowListeners = function (mG) {
                            if (mF.config.window) {
                                var mC = mF.windowListeners[mG];
                                if (mC) {
                                    Jz(mF.config.window, mC, mF.config.eventOptions);
                                    delete mF.windowListeners[mG];
                                }
                            }
                        };
                        this.addDomTargetListeners = function (mG) {
                            Object.entries(mF.bindings).forEach(function (mC) {
                                var ms = mC[0];
                                var mE = mC[1];
                                mF.domListeners.push([ms.substr(2).toLowerCase(), Jd.apply(undefined, mE)]);
                            });
                            Jv(mG, mF.domListeners, mF.config.eventOptions);
                        };
                        this.addBindings = function (mG, mC) {
                            (Array.isArray(mG) ? mG : [mG]).forEach(function (ms) {
                                if (mF.bindings[ms]) {
                                    mF.bindings[ms].push(mC);
                                } else {
                                    mF.bindings[ms] = [mC];
                                }
                            });
                        };
                        this.getBindings = function () {
                            var mG = {};
                            var mC = mF.config.captureString;
                            Object.entries(mF.bindings).forEach(function (ms) {
                                var mE = ms[0];
                                var mf = ms[1];
                                var mc = Array.isArray(mf) ? mf : [mf];
                                mG[mE + mC] = Jd.apply(undefined, mc);
                            });
                            return mG;
                        };
                        this.getBind = function () {
                            if (mF.config.domTarget) {
                                var mG = mF.getDomTarget();
                                if (mG) {
                                    mF.addDomTargetListeners(mG);
                                }
                                return mF.clean;
                            }
                            return mF.getBindings();
                        };
                    }
                    var JO = (function () {
                        function mF(mE, mf, mc) {
                            var mZ = this;
                            if (mc === undefined) {
                                mc = [];
                            }
                            this.stateKey = mE;
                            this.controller = mf;
                            this.args = mc;
                            this.debounced = true;
                            this.setTimeout = function (mL, R0) {
                                var R1;
                                if (R0 === undefined) {
                                    R0 = 140;
                                }
                                for (var R2 = arguments.length, R3 = Array(R2 > 2 ? R2 - 2 : 0), R4 = 2; R4 < R2; R4++) {
                                    R3[R4 - 2] = arguments[R4];
                                }
                                mZ.controller.timeouts[mZ.stateKey] = (R1 = m).setTimeout.apply(R1, [mL, R0].concat(R3));
                            };
                            this.clearTimeout = function () {
                                clearTimeout(mZ.controller.timeouts[mZ.stateKey]);
                            };
                            this.addWindowListeners = function (mL) {
                                mZ.controller.addWindowListeners(mZ.stateKey, mL);
                            };
                            this.removeWindowListeners = function () {
                                mZ.controller.removeWindowListeners(mZ.stateKey);
                            };
                            this.getStartGestureState = function (mL, R0) {
                                return JI(
                                    JI({}, Jg()[mZ.stateKey]),
                                    {},
                                    {
                                        Qe: true,
                                        values: mL,
                                        initial: mL,
                                        offset: mZ.state.offset,
                                        lastOffset: mZ.state.offset,
                                        startTime: R0.timeStamp,
                                    }
                                );
                            };
                            this.rubberband = function (mL, R0) {
                                var R1 = mZ.config.bounds;
                                return mL.map(function (R2, R3) {
                                    return JN(R2, R1[R3][0], R1[R3][1], R0[R3]);
                                });
                            };
                            this.fireGestureHandler = function (mL) {
                                if (mZ.state.$e) {
                                    if (!mZ.debounced) {
                                        mZ.state.Qe = false;
                                        mZ.clean();
                                    }
                                    return null;
                                }
                                var R0 = mZ.state.ti;
                                var R1 = R0[0];
                                var R2 = R0[1];
                                if (!mL && R1 === false && R2 === false) {
                                    return null;
                                }
                                var R3 = mZ.state;
                                var R4 = R3.Qe;
                                var R5 = R3.active;
                                mZ.state.active = R4;
                                mZ.state.first = R4 && !R5;
                                mZ.state.last = R5 && !R4;
                                mZ.controller.state.shared[mZ.ingKey] = R4;
                                var R6 = JI(JI(JI({}, mZ.controller.state.shared), mZ.state), mZ.mapStateValues(mZ.state));
                                var R7 = mZ.handler(R6);
                                mZ.state.memo = R7 !== undefined ? R7 : mZ.state.memo;
                                if (!R4) {
                                    mZ.clean();
                                }
                                return R6;
                            };
                        }
                        var mG;
                        var mC;
                        var ms = mF.prototype;
                        ms.updateSharedState = function (mE) {
                            Object.assign(this.controller.state.shared, mE);
                        };
                        ms.updateGestureState = function (mE) {
                            Object.assign(this.state, mE);
                        };
                        ms.getGenericPayload = function (mE, mf) {
                            var mc = mE.timeStamp;
                            var mZ = mE.type;
                            var mL = this.state;
                            var R0 = mL.values;
                            var R1 = mL.startTime;
                            return {
                                ni: mZ,
                                event: mE,
                                timeStamp: mc,
                                elapsedTime: mf ? 0 : mc - R1,
                                args: this.args,
                                previous: R0,
                            };
                        };
                        ms.checkIntentionality = function (mE) {
                            return {
                                ti: mE,
                                $e: false,
                            };
                        };
                        ms.getMovement = function (mE, mf) {
                            if (mf === undefined) {
                                mf = this.state;
                            }
                            var mc = this.config;
                            var mZ = mc.initial;
                            var mL = mc.threshold;
                            var R0 = mc.rubberband;
                            var R1 = mL[0];
                            var R2 = mL[1];
                            var R3 = mf;
                            var R4 = R3.ii;
                            var R5 = R3.Qe;
                            var R6 = R3.ti;
                            var R7 = R3.lastOffset;
                            var R8 = R3.movement;
                            var R9 = R6[0];
                            var Rx = R6[1];
                            var RD = this.getInternalMovement(mE, mf);
                            var RJ = RD[0];
                            var RN = RD[1];
                            if (R9 === false) {
                                R9 = JD(RJ, R1);
                            }
                            if (Rx === false) {
                                Rx = JD(RN, R2);
                            }
                            var RP = this.checkIntentionality([R9, Rx], [RJ, RN], mf);
                            var RI = RP.ti;
                            var Rm = RP.$e;
                            var RR = RI[0];
                            var Rl = RI[1];
                            var Ru = [RJ, RN];
                            if (RR !== false && R6[0] === false) {
                                R4[0] = JU(mZ)[0];
                            }
                            if (Rl !== false && R6[1] === false) {
                                R4[1] = JU(mZ)[1];
                            }
                            if (Rm) {
                                return JI(
                                    JI({}, RP),
                                    {},
                                    {
                                        ei: Ru,
                                        delta: [0, 0],
                                    }
                                );
                            }
                            var RT = [RR !== false ? RJ - RR : JU(mZ)[0], Rl !== false ? RN - Rl : JU(mZ)[1]];
                            var Rd = J3(RT, R7);
                            var Rq = R5 ? R0 : [0, 0];
                            RT = this.rubberband(J3(RT, R4), Rq);
                            return JI(
                                JI({}, RP),
                                {},
                                {
                                    ii: R4,
                                    ei: Ru,
                                    movement: RT,
                                    offset: this.rubberband(Rd, Rq),
                                    delta: J4(RT, R8),
                                }
                            );
                        };
                        ms.clean = function () {
                            this.clearTimeout();
                            this.removeWindowListeners();
                        };
                        mG = mF;
                        if (
                            (mC = [
                                {
                                    key: "config",
                                    get: function () {
                                        return this.controller.config[this.stateKey];
                                    },
                                },
                                {
                                    key: "enabled",
                                    get: function () {
                                        return this.controller.config.enabled && this.config.enabled;
                                    },
                                },
                                {
                                    key: "state",
                                    get: function () {
                                        return this.controller.state[this.stateKey];
                                    },
                                },
                                {
                                    key: "handler",
                                    get: function () {
                                        return this.controller.handlers[this.stateKey];
                                    },
                                },
                            ])
                        ) {
                            JP(mG.prototype, mC);
                        }
                        return mF;
                    })();
                    var Jw = (function (mF) {
                        function mG() {
                            return mF.apply(this, arguments) || this;
                        }
                        Jm(mG, mF);
                        var mC = mG.prototype;
                        mC.getInternalMovement = function (ms, mE) {
                            return J4(ms, mE.initial);
                        };
                        mC.checkIntentionality = function (ms, mE, mf) {
                            var mc = ms;
                            var mZ = mc[0];
                            var mL = mc[1];
                            var R0 = mZ !== false || mL !== false;
                            var R1 = mf.axis;
                            var R2 = false;
                            if (R0) {
                                var R3 = mE.map(Math.abs);
                                var R4 = R3[0];
                                var R5 = R3[1];
                                var R6 = this.config;
                                var R7 = R6.axis;
                                var R8 = R6.lockDirection;
                                R1 = R1 || (R4 > R5 ? "x" : R4 < R5 ? "y" : undefined);
                                if (R7 || R8) {
                                    if (R1) {
                                        if (R7 && R1 !== R7) {
                                            R2 = true;
                                        } else {
                                            ms[R1 === "x" ? 1 : 0] = false;
                                        }
                                    } else {
                                        ms = [false, false];
                                    }
                                }
                            }
                            return {
                                ti: ms,
                                $e: R2,
                                axis: R1,
                            };
                        };
                        mC.getKinematics = function (ms, mE) {
                            var mf = this.state.timeStamp;
                            var mc = this.getMovement(ms, this.state);
                            var mZ = mc.$e;
                            var mL = mc.delta;
                            var R0 = mc.movement;
                            if (mZ) {
                                return mc;
                            }
                            var R1 = J9(R0, mL, mE.timeStamp - mf);
                            return JI(
                                JI(
                                    {
                                        values: ms,
                                        delta: mL,
                                    },
                                    mc
                                ),
                                R1
                            );
                        };
                        mC.mapStateValues = function (ms) {
                            return {
                                xy: ms.values,
                                vxvy: ms.velocities,
                            };
                        };
                        return mG;
                    })(JO);
                    var JQ = (function (mF) {
                        function mG(ms, mE) {
                            var mf;
                            (mf = mF.call(this, "drag", ms, mE) || this).ingKey = "dragging";
                            mf.wasTouch = false;
                            mf.isEventTypeTouch = function (mc) {
                                return !!mc && mc.indexOf("touch") === 0;
                            };
                            mf.dragShouldStart = function (mc) {
                                var mZ = Jb(mc).touches;
                                var mL = mf.state.ni;
                                return (
                                    !(
                                        !mf.controller.config.pointer &&
                                        mf.isEventTypeTouch(mL) &&
                                        !mf.isEventTypeTouch(mc.type) &&
                                        Math.abs(mc.timeStamp - mf.state.startTime) < 200
                                    ) &&
                                    mf.enabled &&
                                    mZ < 2
                                );
                            };
                            mf.setPointers = function (mc) {
                                var mZ = mc.currentTarget;
                                var mL = mc.pointerId;
                                if (mZ) {
                                    mZ.setPointerCapture(mL);
                                }
                                mf.updateGestureState({
                                    currentTarget: mZ,
                                    pointerId: mL,
                                });
                            };
                            mf.removePointers = function () {
                                var mc = mf.state;
                                var mZ = mc.currentTarget;
                                var mL = mc.pointerId;
                                if (mZ && mL) {
                                    mZ.releasePointerCapture(mL);
                                }
                            };
                            mf.setListeners = function (mc) {
                                mf.removeWindowListeners();
                                var mZ = mc
                                    ? [
                                          ["touchmove", mf.onDragChange],
                                          ["touchend", mf.onDragEnd],
                                          ["touchcancel", mf.onDragEnd],
                                      ]
                                    : [
                                          ["mousemove", mf.onDragChange],
                                          ["mouseup", mf.onDragEnd],
                                      ];
                                mf.addWindowListeners(mZ);
                            };
                            mf.onDragStart = function (mc) {
                                if (mf.dragShouldStart(mc)) {
                                    if (mf.controller.config.pointer) {
                                        mf.setPointers(mc);
                                    } else {
                                        mf.setListeners(mf.isEventTypeTouch(mc.type));
                                    }
                                    if (mf.config.delay > 0) {
                                        mf.state.oi = true;
                                        if (typeof mc.persist == "function") {
                                            mc.persist();
                                        }
                                        mf.setTimeout(function () {
                                            return mf.startDrag(mc);
                                        }, mf.config.delay);
                                    } else {
                                        mf.startDrag(mc);
                                    }
                                }
                            };
                            mf.onDragChange = function (mc) {
                                if (!mf.state.canceled) {
                                    if (mf.state.Qe) {
                                        var mZ = Jb(mc);
                                        if (mZ.down) {
                                            mf.updateSharedState(mZ);
                                            var mL = Jy(mc).values;
                                            var R0 = mf.getKinematics(mL, mc);
                                            var R1 = mf.state.ri;
                                            if (R1 && J7(R0.ei) >= 3) {
                                                R1 = false;
                                            }
                                            mf.updateGestureState(
                                                JI(
                                                    JI(JI({}, mf.getGenericPayload(mc)), R0),
                                                    {},
                                                    {
                                                        ri: R1,
                                                        cancel: function () {
                                                            return mf.onCancel();
                                                        },
                                                    }
                                                )
                                            );
                                            mf.fireGestureHandler();
                                        } else {
                                            mf.onDragEnd(mc);
                                        }
                                    } else if (mf.state.oi) {
                                        mf.clearTimeout();
                                        mf.startDrag(mc);
                                    }
                                }
                            };
                            mf.onDragEnd = function (mc) {
                                mf.state.Qe = false;
                                mf.updateSharedState({
                                    down: false,
                                    buttons: 0,
                                    touches: 0,
                                });
                                var mZ = mf.state;
                                var mL = mZ.ri;
                                var R0 = mZ.values;
                                var R1 = mZ.velocities;
                                var R2 = R1[0];
                                var R3 = R1[1];
                                var R4 = mZ.movement;
                                var R5 = R4[0];
                                var R6 = R4[1];
                                var R7 = mZ.ti;
                                var R8 = R7[0];
                                var R9 = R7[1];
                                var Rx = JI(JI({}, mf.getGenericPayload(mc)), mf.getMovement(R0));
                                var RD = Rx.elapsedTime;
                                var RJ = mf.config;
                                var RN = RJ.swipeVelocity;
                                var RP = RN[0];
                                var RI = RN[1];
                                var Rm = RJ.swipeDistance;
                                var RR = Rm[0];
                                var Rl = Rm[1];
                                var Ru = [0, 0];
                                if (RD < 220) {
                                    if (R8 !== false && Math.abs(R2) > RP && Math.abs(R5) > RR) {
                                        Ru[0] = Jx(R2);
                                    }
                                    if (R9 !== false && Math.abs(R3) > RI && Math.abs(R6) > Rl) {
                                        Ru[1] = Jx(R3);
                                    }
                                }
                                mf.updateGestureState(
                                    JI(
                                        JI(
                                            {
                                                event: mc,
                                            },
                                            Rx
                                        ),
                                        {},
                                        {
                                            tap: mL,
                                            swipe: Ru,
                                        }
                                    )
                                );
                                mf.fireGestureHandler(mf.config.filterTaps && mf.state.ri);
                            };
                            mf.clean = function () {
                                mF.prototype.clean.call(
                                    (function (mc) {
                                        if (mc === undefined) {
                                            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        }
                                        return mc;
                                    })(mf)
                                );
                                mf.state.oi = false;
                                if (mf.controller.config.pointer) {
                                    mf.removePointers();
                                }
                            };
                            mf.onCancel = function () {
                                mf.updateGestureState({
                                    canceled: true,
                                    cancel: JT,
                                });
                                mf.state.Qe = false;
                                mf.updateSharedState({
                                    down: false,
                                    buttons: 0,
                                    touches: 0,
                                });
                                requestAnimationFrame(function () {
                                    return mf.fireGestureHandler();
                                });
                            };
                            return mf;
                        }
                        Jm(mG, mF);
                        var mC = mG.prototype;
                        mC.startDrag = function (ms) {
                            var mE = this;
                            var mf = Jy(ms).values;
                            this.updateSharedState(Jb(ms));
                            var mc = JI(JI({}, this.getStartGestureState(mf, ms)), this.getGenericPayload(ms, true));
                            this.updateGestureState(
                                JI(
                                    JI(JI({}, mc), this.getMovement(mf, mc)),
                                    {},
                                    {
                                        cancel: function () {
                                            return mE.onCancel();
                                        },
                                    }
                                )
                            );
                            this.fireGestureHandler();
                        };
                        mC.addBindings = function () {
                            if (this.controller.config.pointer) {
                                this.controller.addBindings("onPointerDown", this.onDragStart);
                                this.controller.addBindings("onPointerMove", this.onDragChange);
                                this.controller.addBindings(["onPointerUp", "onPointerCancel"], this.onDragEnd);
                            } else {
                                this.controller.addBindings(["onTouchStart", "onMouseDown"], this.onDragStart);
                            }
                        };
                        return mG;
                    })(Jw);
                    var JM = m !== undefined ? m : undefined;
                    var JK = {
                        lockDirection: false,
                        axis: undefined,
                        bounds: undefined,
                    };
                    function JW(mF) {
                        var mG = mF.threshold;
                        var mC = mG === undefined ? undefined : mG;
                        var ms = mF.rubberband;
                        var mE = ms === undefined ? 0 : ms;
                        var mf = mF.enabled;
                        var mc = mf === undefined || mf;
                        var mZ = mF.initial;
                        if (typeof mE == "boolean") {
                            mE = mE ? 0.15 : 0;
                        }
                        if (mC === undefined) {
                            mC = 0;
                        }
                        return {
                            enabled: mc,
                            initial: mZ === undefined ? [0, 0] : mZ,
                            threshold: Jq(mC),
                            rubberband: Jq(mE),
                        };
                    }
                    function JV(mF) {
                        if (mF === undefined) {
                            mF = {};
                        }
                        var mG = mF;
                        var mC = mG.axis;
                        var ms = mG.lockDirection;
                        var mE = mG.bounds;
                        var mf = mE === undefined ? {} : mE;
                        var mc = JR(mG, ["axis", "lockDirection", "bounds"]);
                        var mZ = [
                            [Jh(mf.left, -Infinity), Jh(mf.right, Infinity)],
                            [Jh(mf.top, -Infinity), Jh(mf.bottom, Infinity)],
                        ];
                        return JI(
                            JI(
                                JI(JI({}, JW(mc)), JK),
                                JH(
                                    {
                                        axis: mC,
                                        lockDirection: ms,
                                    },
                                    mF
                                )
                            ),
                            {},
                            {
                                bounds: mZ,
                            }
                        );
                    }
                    var JY = (function (mF) {
                        function mG() {
                            return mF.apply(this, arguments) || this;
                        }
                        Jm(mG, mF);
                        var mC = mG.prototype;
                        mC.getInternalMovement = function (ms, mE) {
                            var mf = ms[0];
                            var mc = ms[1];
                            var mZ = mE.values;
                            var mL = mE.turns;
                            var R0 = mE.initial;
                            var R1 = (mc = mc !== undefined ? mc : mZ[1]) - mZ[1];
                            var R2 = Math.abs(R1) > 270 ? mL + Jx(R1) : mL;
                            return [mf - R0[0], mc - R2 * 360 - R0[1]];
                        };
                        mC.getKinematics = function (ms, mE) {
                            var mf = this.state;
                            var mc = mf.timeStamp;
                            var mZ = mf.initial;
                            var mL = this.getMovement(ms, this.state);
                            var R0 = mL.delta;
                            var R1 = mL.movement;
                            var R2 = (ms[1] - R1[1] - mZ[1]) / 360;
                            var R3 = J9(R1, R0, mE.timeStamp - mc);
                            return JI(
                                JI(
                                    {
                                        values: ms,
                                        delta: R0,
                                        turns: R2,
                                    },
                                    mL
                                ),
                                R3
                            );
                        };
                        mC.mapStateValues = function (ms) {
                            return {
                                da: ms.values,
                                vdva: ms.velocities,
                            };
                        };
                        return mG;
                    })(JO);
                    var Jp = (function (mF) {
                        function mG(mC, ms) {
                            var mE;
                            (mE = mF.call(this, "pinch", mC, ms) || this).ingKey = "pinching";
                            mE.pinchShouldStart = function (mf) {
                                var mc = Jb(mf).touches;
                                return mE.enabled && mc === 2;
                            };
                            mE.onPinchStart = function (mf) {
                                if (mE.pinchShouldStart(mf)) {
                                    var mc = Jj(mf);
                                    var mZ = mc.values;
                                    var mL = mc.origin;
                                    mE.updateSharedState(Jb(mf));
                                    var R0 = JI(JI({}, mE.getStartGestureState(mZ, mf)), mE.getGenericPayload(mf, true));
                                    mE.updateGestureState(
                                        JI(
                                            JI(JI({}, R0), mE.getMovement(mZ, R0)),
                                            {},
                                            {
                                                origin: mL,
                                                cancel: function () {
                                                    return mE.onCancel();
                                                },
                                            }
                                        )
                                    );
                                    mE.fireGestureHandler();
                                }
                            };
                            mE.onPinchChange = function (mf) {
                                var mc = mE.state;
                                var mZ = mc.canceled;
                                var mL = mc.timeStamp;
                                var R0 = mc.Qe;
                                if (!mZ && R0) {
                                    var R1 = Jb(mf);
                                    if (R1.touches === 2 && mf.timeStamp !== mL) {
                                        mE.updateSharedState(R1);
                                        var R2 = Jj(mf);
                                        var R3 = R2.values;
                                        var R4 = R2.origin;
                                        var R5 = mE.getKinematics(R3, mf);
                                        mE.updateGestureState(
                                            JI(
                                                JI(JI({}, mE.getGenericPayload(mf)), R5),
                                                {},
                                                {
                                                    origin: R4,
                                                    cancel: function () {
                                                        return mE.onCancel();
                                                    },
                                                }
                                            )
                                        );
                                        mE.fireGestureHandler();
                                    }
                                }
                            };
                            mE.onPinchEnd = function (mf) {
                                if (mE.state.active) {
                                    mE.state.Qe = false;
                                    mE.updateSharedState({
                                        down: false,
                                        touches: 0,
                                    });
                                    mE.updateGestureState(
                                        JI(
                                            JI(
                                                {
                                                    event: mf,
                                                },
                                                mE.getGenericPayload(mf)
                                            ),
                                            mE.getMovement(mE.state.values)
                                        )
                                    );
                                    mE.fireGestureHandler();
                                }
                            };
                            mE.onCancel = function () {
                                mE.state.Qe = false;
                                mE.updateGestureState({
                                    canceled: true,
                                    cancel: JT,
                                });
                                mE.updateSharedState({
                                    down: false,
                                    touches: 0,
                                });
                                requestAnimationFrame(function () {
                                    return mE.fireGestureHandler();
                                });
                            };
                            mE.onGestureStart = function (mf) {
                                if (mE.enabled) {
                                    mf.preventDefault();
                                    var mc = Ja(mf).values;
                                    mE.updateSharedState(Jb(mf));
                                    var mZ = JI(JI({}, mE.getStartGestureState(mc, mf)), mE.getGenericPayload(mf, true));
                                    mE.updateGestureState(
                                        JI(
                                            JI(JI({}, mZ), mE.getMovement(mc, mZ)),
                                            {},
                                            {
                                                cancel: function () {
                                                    return mE.onCancel();
                                                },
                                            }
                                        )
                                    );
                                    mE.fireGestureHandler();
                                }
                            };
                            mE.onGestureChange = function (mf) {
                                var mc = mE.state;
                                var mZ = mc.canceled;
                                var mL = mc.Qe;
                                if (!mZ && mL) {
                                    mf.preventDefault();
                                    var R0 = Jb(mf);
                                    mE.updateSharedState(R0);
                                    var R1 = Ja(mf).values;
                                    var R2 = mE.getKinematics(R1, mf);
                                    mE.updateGestureState(
                                        JI(
                                            JI(JI({}, mE.getGenericPayload(mf)), R2),
                                            {},
                                            {
                                                cancel: function () {
                                                    return mE.onCancel();
                                                },
                                            }
                                        )
                                    );
                                    mE.fireGestureHandler();
                                }
                            };
                            mE.onGestureEnd = function (mf) {
                                mf.preventDefault();
                                if (mE.state.active) {
                                    mE.state.Qe = false;
                                    mE.updateSharedState({
                                        down: false,
                                        touches: 0,
                                    });
                                    mE.updateGestureState(
                                        JI(
                                            JI(
                                                {
                                                    event: mf,
                                                },
                                                mE.getGenericPayload(mf)
                                            ),
                                            mE.getMovement(mE.state.values)
                                        )
                                    );
                                    mE.fireGestureHandler();
                                }
                            };
                            mE.updateTouchData = function (mf) {
                                if (mE.enabled && mf.touches.length === 2 && mE.state.Qe) {
                                    var mc = Jj(mf).origin;
                                    mE.state.origin = mc;
                                }
                            };
                            mE.wheelShouldRun = function (mf) {
                                return mE.enabled && mf.ctrlKey;
                            };
                            mE.getWheelValuesFromEvent = function (mf) {
                                var mc = JB(mf).values[1];
                                var mZ = mE.state.values;
                                var mL = mZ[0];
                                var R0 = mZ[1];
                                return {
                                    values: [mL - mc, R0 !== undefined ? R0 : 0],
                                    origin: [mf.clientX, mf.clientY],
                                    delta: [0, mc],
                                };
                            };
                            mE.onWheel = function (mf) {
                                if (mE.wheelShouldRun(mf)) {
                                    mE.clearTimeout();
                                    mE.setTimeout(mE.onWheelEnd);
                                    if (mE.state.Qe) {
                                        mE.onWheelChange(mf);
                                    } else {
                                        mE.onWheelStart(mf);
                                    }
                                }
                            };
                            mE.onWheelStart = function (mf) {
                                var mc = mE.getWheelValuesFromEvent(mf);
                                var mZ = mc.values;
                                var mL = mc.delta;
                                var R0 = mc.origin;
                                if (!mE.controller.config.eventOptions.passive) {
                                    mf.preventDefault();
                                }
                                mE.updateSharedState(Jb(mf));
                                var R1 = JI(
                                    JI(JI({}, mE.getStartGestureState(mZ, mf)), mE.getGenericPayload(mf, true)),
                                    {},
                                    {
                                        initial: mE.state.values,
                                    }
                                );
                                mE.updateGestureState(
                                    JI(
                                        JI(JI({}, R1), mE.getMovement(mZ, R1)),
                                        {},
                                        {
                                            offset: mZ,
                                            delta: mL,
                                            origin: R0,
                                        }
                                    )
                                );
                                mE.fireGestureHandler();
                            };
                            mE.onWheelChange = function (mf) {
                                var mc = Jb(mf);
                                mE.updateSharedState(mc);
                                var mZ = mE.getWheelValuesFromEvent(mf);
                                var mL = mZ.values;
                                var R0 = mZ.origin;
                                var R1 = mZ.delta;
                                var R2 = mE.getKinematics(mL, mf);
                                mE.updateGestureState(
                                    JI(
                                        JI(JI({}, mE.getGenericPayload(mf)), R2),
                                        {},
                                        {
                                            origin: R0,
                                            delta: R1,
                                        }
                                    )
                                );
                                mE.fireGestureHandler();
                            };
                            mE.onWheelEnd = function () {
                                mE.state.Qe = false;
                                mE.updateGestureState(mE.getMovement(mE.state.values));
                                mE.fireGestureHandler();
                            };
                            return mE;
                        }
                        Jm(mG, mF);
                        mG.prototype.addBindings = function () {
                            if (
                                this.controller.config.domTarget &&
                                (function () {
                                    try {
                                        return "constructor" in GestureEvent;
                                    } catch (mC) {
                                        return false;
                                    }
                                })()
                            ) {
                                this.controller.addBindings("onGestureStart", this.onGestureStart);
                                this.controller.addBindings("onGestureChange", this.onGestureChange);
                                this.controller.addBindings(["onGestureEnd", "onTouchCancel"], this.onGestureEnd);
                                this.controller.addBindings(["onTouchStart", "onTouchMove"], this.updateTouchData);
                            } else {
                                this.controller.addBindings("onTouchStart", this.onPinchStart);
                                this.controller.addBindings("onTouchMove", this.onPinchChange);
                                this.controller.addBindings(["onTouchEnd", "onTouchCancel"], this.onPinchEnd);
                                this.controller.addBindings("onWheel", this.onWheel);
                            }
                        };
                        return mG;
                    })(JY);
                    var JF = (function (mF) {
                        function mG(mC, ms) {
                            var mE;
                            (mE = mF.call(this, "wheel", mC, ms) || this).ingKey = "wheeling";
                            mE.debounced = true;
                            mE.wheelShouldRun = function (mf) {
                                return (!mf.ctrlKey || !("pinch" in mE.controller.handlers)) && mE.enabled;
                            };
                            mE.getValuesFromEvent = function (mf) {
                                var mc = mE.state.values;
                                return {
                                    values: J3(JB(mf).values, mc),
                                };
                            };
                            mE.onWheel = function (mf) {
                                if (mE.wheelShouldRun(mf)) {
                                    mE.clearTimeout();
                                    mE.setTimeout(mE.onWheelEnd);
                                    if (mE.state.Qe) {
                                        mE.onWheelChange(mf);
                                    } else {
                                        mE.onWheelStart(mf);
                                    }
                                }
                            };
                            mE.onWheelStart = function (mf) {
                                var mc = mE.getValuesFromEvent(mf).values;
                                mE.updateSharedState(Jb(mf));
                                var mZ = JI(
                                    JI(JI({}, mE.getStartGestureState(mc, mf)), mE.getGenericPayload(mf, true)),
                                    {},
                                    {
                                        initial: mE.state.values,
                                    }
                                );
                                var mL = mE.getMovement(mc, mZ);
                                var R0 = mL.delta;
                                mE.updateGestureState(
                                    JI(
                                        JI(JI({}, mZ), mL),
                                        {},
                                        {
                                            distance: J7(R0),
                                            direction: J8(R0),
                                        }
                                    )
                                );
                                mE.fireGestureHandler();
                            };
                            mE.onWheelChange = function (mf) {
                                var mc = Jb(mf);
                                mE.updateSharedState(mc);
                                var mZ = mE.getValuesFromEvent(mf).values;
                                var mL = mE.getKinematics(mZ, mf);
                                mE.updateGestureState(JI(JI({}, mE.getGenericPayload(mf)), mL));
                                mE.fireGestureHandler();
                            };
                            mE.onWheelEnd = function () {
                                mE.state.Qe = false;
                                mE.updateGestureState(
                                    JI(
                                        JI({}, mE.getMovement(mE.state.values)),
                                        {},
                                        {
                                            velocities: [0, 0],
                                            velocity: 0,
                                        }
                                    )
                                );
                                mE.fireGestureHandler();
                            };
                            return mE;
                        }
                        Jm(mG, mF);
                        mG.prototype.addBindings = function () {
                            this.controller.addBindings("onWheel", this.onWheel);
                        };
                        return mG;
                    })(Jw);
                    var JG = (function (mF) {
                        function mG(mC, ms) {
                            var mE;
                            (mE = mF.call(this, "move", mC, ms) || this).ingKey = "moving";
                            mE.debounced = true;
                            mE.moveShouldRun = function () {
                                return mE.enabled;
                            };
                            mE.onMove = function (mf) {
                                if (mE.moveShouldRun()) {
                                    mE.clearTimeout();
                                    mE.setTimeout(mE.onMoveEnd);
                                    if (mE.state.Qe) {
                                        mE.onMoveChange(mf);
                                    } else {
                                        mE.onMoveStart(mf);
                                    }
                                }
                            };
                            mE.onMoveStart = function (mf) {
                                var mc = Jy(mf).values;
                                mE.updateSharedState(Jb(mf));
                                var mZ = JI(JI({}, mE.getStartGestureState(mc, mf)), mE.getGenericPayload(mf, true));
                                mE.updateGestureState(JI(JI({}, mZ), mE.getMovement(mc, mZ)));
                                mE.fireGestureHandler();
                            };
                            mE.onMoveChange = function (mf) {
                                var mc = Jb(mf);
                                mE.updateSharedState(mc);
                                var mZ = Jy(mf).values;
                                var mL = mE.getKinematics(mZ, mf);
                                mE.updateGestureState(JI(JI({}, mE.getGenericPayload(mf)), mL));
                                mE.fireGestureHandler();
                            };
                            mE.onMoveEnd = function () {
                                mE.state.Qe = false;
                                mE.updateGestureState(
                                    JI(
                                        JI({}, mE.getMovement(mE.state.values)),
                                        {},
                                        {
                                            velocities: [0, 0],
                                            velocity: 0,
                                        }
                                    )
                                );
                                mE.fireGestureHandler();
                            };
                            mE.onPointerEnter = function (mf) {
                                mE.controller.state.shared.hovering = true;
                                if (mE.controller.config.enabled) {
                                    if (mE.controller.config.hover.enabled) {
                                        var mc = Jy(mf).values;
                                        var mZ = JI(
                                            JI(JI(JI({}, mE.controller.state.shared), mE.state), mE.getGenericPayload(mf, true)),
                                            {},
                                            {
                                                values: mc,
                                                active: true,
                                                hovering: true,
                                            }
                                        );
                                        mE.controller.handlers.hover(JI(JI({}, mZ), mE.mapStateValues(mZ)));
                                    }
                                    if ("move" in mE.controller.handlers) {
                                        mE.onMoveStart(mf);
                                    }
                                }
                            };
                            mE.onPointerLeave = function (mf) {
                                mE.controller.state.shared.hovering = false;
                                if ("move" in mE.controller.handlers) {
                                    mE.onMoveEnd();
                                }
                                if (mE.controller.config.hover.enabled) {
                                    var mc = Jy(mf).values;
                                    var mZ = JI(
                                        JI(JI(JI({}, mE.controller.state.shared), mE.state), mE.getGenericPayload(mf)),
                                        {},
                                        {
                                            values: mc,
                                            active: false,
                                        }
                                    );
                                    mE.controller.handlers.hover(JI(JI({}, mZ), mE.mapStateValues(mZ)));
                                }
                            };
                            return mE;
                        }
                        Jm(mG, mF);
                        mG.prototype.addBindings = function () {
                            if (this.controller.config.pointer) {
                                if ("move" in this.controller.handlers) {
                                    this.controller.addBindings("onPointerMove", this.onMove);
                                }
                                if ("hover" in this.controller.handlers) {
                                    this.controller.addBindings("onPointerEnter", this.onPointerEnter);
                                    this.controller.addBindings("onPointerLeave", this.onPointerLeave);
                                }
                            } else {
                                if ("move" in this.controller.handlers) {
                                    this.controller.addBindings("onMouseMove", this.onMove);
                                }
                                if ("hover" in this.controller.handlers) {
                                    this.controller.addBindings("onMouseEnter", this.onPointerEnter);
                                    this.controller.addBindings("onMouseLeave", this.onPointerLeave);
                                }
                            }
                        };
                        return mG;
                    })(Jw);
                    var JC = (function (mF) {
                        function mG(mC, ms) {
                            var mE;
                            (mE = mF.call(this, "scroll", mC, ms) || this).ingKey = "scrolling";
                            mE.debounced = true;
                            mE.scrollShouldRun = function () {
                                return mE.enabled;
                            };
                            mE.onScroll = function (mf) {
                                if (mE.scrollShouldRun()) {
                                    mE.clearTimeout();
                                    mE.setTimeout(mE.onScrollEnd);
                                    if (mE.state.Qe) {
                                        mE.onScrollChange(mf);
                                    } else {
                                        mE.onScrollStart(mf);
                                    }
                                }
                            };
                            mE.onScrollStart = function (mf) {
                                var mc = JX(mf).values;
                                mE.updateSharedState(Jb(mf));
                                var mZ = JI(
                                    JI(JI({}, mE.getStartGestureState(mc, mf)), mE.getGenericPayload(mf, true)),
                                    {},
                                    {
                                        initial: mE.state.values,
                                    }
                                );
                                var mL = mE.getMovement(mc, mZ);
                                var R0 = mL.delta;
                                mE.updateGestureState(
                                    JI(
                                        JI(JI({}, mZ), mL),
                                        {},
                                        {
                                            distance: J7(R0),
                                            direction: J8(R0),
                                        }
                                    )
                                );
                                mE.fireGestureHandler();
                            };
                            mE.onScrollChange = function (mf) {
                                var mc = Jb(mf);
                                mE.updateSharedState(mc);
                                var mZ = JX(mf).values;
                                var mL = mE.getKinematics(mZ, mf);
                                mE.updateGestureState(JI(JI({}, mE.getGenericPayload(mf)), mL));
                                mE.fireGestureHandler();
                            };
                            mE.onScrollEnd = function () {
                                mE.state.Qe = false;
                                mE.updateGestureState(
                                    JI(
                                        JI({}, mE.getMovement(mE.state.values)),
                                        {},
                                        {
                                            velocities: [0, 0],
                                            velocity: 0,
                                        }
                                    )
                                );
                                mE.fireGestureHandler();
                            };
                            return mE;
                        }
                        Jm(mG, mF);
                        mG.prototype.addBindings = function () {
                            this.controller.addBindings("onScroll", this.onScroll);
                        };
                        return mG;
                    })(Jw);
                    function Js(mF, mG) {
                        if (mG === undefined) {
                            mG = {};
                        }
                        var mC = T.useState(function () {
                            return new Set(
                                Object.keys(mF).map(function (R5) {
                                    return R5.replace(/End|Start/, "");
                                })
                            );
                        })[0];
                        var ms = mG;
                        var mE = ms.drag;
                        var mf = ms.wheel;
                        var mc = ms.move;
                        var mZ = ms.scroll;
                        var mL = ms.pinch;
                        var R0 = ms.hover;
                        var R1 = (function (R5) {
                            if (R5 === undefined) {
                                R5 = {};
                            }
                            var R6 = R5;
                            var R7 = R6.eventOptions;
                            var R8 = (R7 = R7 === undefined ? {} : R7).passive;
                            var R9 = R8 === undefined || R8;
                            var Rx = R7.capture;
                            var RD = Rx !== undefined && Rx;
                            var RJ = R7.pointer;
                            var RN = RJ !== undefined && RJ;
                            var RP = R6.window;
                            var RI = RP === undefined ? JM : RP;
                            var Rm = R6.domTarget;
                            var RR = Rm === undefined ? undefined : Rm;
                            var Rl = R6.enabled;
                            var Ru = Rl === undefined || Rl;
                            return JI(
                                JI({}, JR(R6, ["eventOptions", "window", "domTarget", "enabled"])),
                                {},
                                {
                                    enabled: Ru,
                                    domTarget: RR,
                                    window: RI,
                                    eventOptions: {
                                        passive: !RR || !!R9,
                                        capture: !!RD,
                                    },
                                    captureString: RD ? "Capture" : "",
                                    pointer: !!RN,
                                }
                            );
                        })(JR(ms, ["drag", "wheel", "move", "scroll", "pinch", "hover"]));
                        var R2 = [];
                        var R3 = {};
                        var R4 = JI({}, mF);
                        if (mC.has("onDrag")) {
                            R2.push(JQ);
                            R3.drag = JE(mF, "onDrag", R4);
                            R1.drag = (function (R5) {
                                if (R5 === undefined) {
                                    R5 = {};
                                }
                                var R6 = R5;
                                var R7 = R6.enabled;
                                var R8 = R6.threshold;
                                var R9 = R6.bounds;
                                var Rx = R6.rubberband;
                                var RD = R6.initial;
                                var RJ = JR(R6, ["enabled", "threshold", "bounds", "rubberband", "initial"]);
                                var RN = RJ.swipeVelocity;
                                var RP = RN === undefined ? 0.5 : RN;
                                var RI = RJ.swipeDistance;
                                var Rm = RI === undefined ? 60 : RI;
                                var RR = RJ.delay;
                                var Rl = RR !== undefined && RR;
                                var Ru = RJ.filterTaps;
                                var RT = Ru !== undefined && Ru;
                                var Rd = RJ.axis;
                                var Rq = RJ.lockDirection;
                                if (R8 === undefined) {
                                    R8 = Math.max(0, RT ? 3 : 0, Rq || Rd ? 1 : 0);
                                } else {
                                    RT = true;
                                }
                                var Rh = JV(
                                    JH(
                                        {
                                            enabled: R7,
                                            threshold: R8,
                                            bounds: R9,
                                            rubberband: Rx,
                                            axis: Rd,
                                            lockDirection: Rq,
                                            initial: RD,
                                        },
                                        R5
                                    )
                                );
                                return JI(
                                    JI({}, Rh),
                                    {},
                                    {
                                        filterTaps: RT || Rh.threshold[0] + Rh.threshold[1] > 0,
                                        swipeVelocity: Jq(RP),
                                        swipeDistance: Jq(Rm),
                                        delay: typeof Rl == "number" ? Rl : Rl ? 180 : 0,
                                    }
                                );
                            })(mE);
                        }
                        if (mC.has("onWheel")) {
                            R2.push(JF);
                            R3.wheel = JE(mF, "onWheel", R4);
                            R1.wheel = JV(mf);
                        }
                        if (mC.has("onScroll")) {
                            R2.push(JC);
                            R3.scroll = JE(mF, "onScroll", R4);
                            R1.scroll = JV(mZ);
                        }
                        if (mC.has("onMove")) {
                            R2.push(JG);
                            R3.move = JE(mF, "onMove", R4);
                            R1.move = JV(mc);
                        }
                        if (mC.has("onPinch")) {
                            R2.push(Jp);
                            R3.pinch = JE(mF, "onPinch", R4);
                            R1.pinch = (function (R5) {
                                if (R5 === undefined) {
                                    R5 = {};
                                }
                                var R6 = R5;
                                var R7 = R6.distanceBounds;
                                var R8 = R7 === undefined ? {} : R7;
                                var R9 = R6.angleBounds;
                                var Rx = R9 === undefined ? {} : R9;
                                var RD = JR(R6, ["distanceBounds", "angleBounds"]);
                                var RJ = [
                                    [Jh(R8.min, -Infinity), Jh(R8.max, Infinity)],
                                    [Jh(Rx.min, -Infinity), Jh(Rx.max, Infinity)],
                                ];
                                return JI(
                                    JI({}, JW(RD)),
                                    {},
                                    {
                                        bounds: RJ,
                                    }
                                );
                            })(mL);
                        }
                        if (mC.has("onHover")) {
                            if (!mC.has("onMove")) {
                                R2.push(JG);
                            }
                            R3.hover = mF.onHover;
                            R1.hover = JI(
                                {
                                    enabled: true,
                                },
                                R0
                            );
                            delete R4.onHover;
                        }
                        return (function (R5, R6, R7, R8) {
                            var R9 = T.useMemo(function () {
                                var Rx = new Jk();
                                return {
                                    nativeRefs: R8,
                                    current: Rx,
                                    bind: function () {
                                        Rx.resetBindings();
                                        for (var RD = arguments.length, RJ = Array(RD), RN = 0; RN < RD; RN++) {
                                            RJ[RN] = arguments[RN];
                                        }
                                        for (var RP, RI = Ju(R6); !(RP = RI()).done; ) {
                                            new (0, RP.value)(Rx, RJ).addBindings();
                                        }
                                        if (R9.nativeRefs) {
                                            for (var Rm in R9.nativeRefs) {
                                                Rx.addBindings(Rm, R9.nativeRefs[Rm]);
                                            }
                                        }
                                        return Rx.getBind();
                                    },
                                };
                            }, []);
                            R9.current.config = R7;
                            R9.current.handlers = R5;
                            R9.nativeRefs = R8;
                            T.useEffect(function () {
                                return R9.current.clean;
                            }, []);
                            return R9.bind;
                        })(R3, R2, R1, R4);
                    }
                    function JE(mF, mG, mC) {
                        var ms = mG + "Start";
                        var mE = mG + "End";
                        delete mC[mG];
                        delete mC[ms];
                        delete mC[mE];
                        return function (mf) {
                            var mc = undefined;
                            if (mf.first && ms in mF) {
                                mF[ms](mf);
                            }
                            if (mG in mF) {
                                mc = mF[mG](mf);
                            }
                            if (mf.last && mE in mF) {
                                mF[mE](mf);
                            }
                            return mc;
                        };
                    }
                    var Jf = {};
                    var Jc = {};
                    Object.defineProperty(Jc, "__esModule", {
                        value: true,
                    });
                    var JZ = __importDefault(T);
                    var JL = shell.I18n;
                    var N0 = {
                        display: "flex",
                        width: "inherit",
                        height: "50px",
                        margin: "0 auto 5px auto",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingLeft: "10px",
                        paddingRight: "10px",
                    };
                    var N1 = {
                        fontSize: "11px",
                        textAlign: "center",
                        wordBreak: "break-word",
                    };
                    var N2 = {
                        width: "2px",
                        height: "12px",
                        marginLeft: "10px",
                        marginRight: "10px",
                    };
                    var N3 = {
                        labels: {
                            color: "rgba(255, 255, 255, 0.4)",
                        },
                        separator: {
                            backgroundColor: "#282833",
                        },
                    };
                    Jc.default = function (mF) {
                        var mG = mF.betSizeTitle ? mF.betSizeTitle : JL.t("History.HistoryBetSize");
                        var mC = mF.betLevelTitle ? mF.betLevelTitle : JL.t("History.HistoryBetLevel");
                        var ms = N3;
                        var mE = Object.assign({}, N1, ms.labels);
                        var mf = Object.assign({}, N2, ms.separator);
                        mE.color = mF.labelColor ? mF.labelColor : mE.color;
                        mf.backgroundColor = mF.seperatorColor ? mF.seperatorColor : mf.backgroundColor;
                        var mc = __assign({}, N0);
                        if (mF.isRTL) {
                            mc.direction = "rtl";
                        }
                        return JZ.default.createElement(
                            "div",
                            {
                                id: "bet-information-container",
                                style: mc,
                            },
                            (function (mZ) {
                                if (mZ.totalRoundCount && mZ.currentRoundCount) {
                                    var mL = mZ.roundsTitlei18nKey ? mZ.roundsTitlei18nKey : "History.HistoryDetailItemRoundLabel";
                                    var R0 = JL.t(mL, {
                                        currCount: mZ.currentRoundCount.toString(),
                                        maxCount: mZ.totalRoundCount.toString(),
                                    });
                                    var R1 = mZ.themeColor ? mZ.themeColor : "#9C9B9B";
                                    return JZ.default.createElement(
                                        "div",
                                        {
                                            id: "rounds-label",
                                            style: Object.assign({}, N1, {
                                                color: R1,
                                            }),
                                        },
                                        R0
                                    );
                                }
                            })(mF),
                            (function (mZ) {
                                if (mZ.totalRoundCount && mZ.currentRoundCount) {
                                    var mL = Object.assign({}, N2, N3.separator);
                                    return JZ.default.createElement("div", {
                                        id: "separator",
                                        style: mL,
                                    });
                                }
                            })(mF),
                            JZ.default.createElement(
                                "div",
                                {
                                    id: "bet-size-label",
                                    style: mE,
                                },
                                mG + " " + mF.betSize
                            ),
                            JZ.default.createElement("div", {
                                id: "separator",
                                style: mf,
                            }),
                            JZ.default.createElement(
                                "div",
                                {
                                    id: "bet-level-label",
                                    style: mE,
                                },
                                mC + " " + mF.betLevel
                            )
                        );
                    };
                    var N4 = {};
                    Object.defineProperty(N4, "__esModule", {
                        value: true,
                    });
                    var N5 = __importDefault(T);
                    var N6 = shell.I18n;
                    var N7 = {
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
                    var N8 = {
                        color: "#CCCCCC",
                    };
                    N4.default = function (mF) {
                        var mG = Object.assign({}, N7.text, N8);
                        mG.color = mF.labelColor ? mF.labelColor : mG.color;
                        return N5.default.createElement(
                            "div",
                            {
                                id: "no-winning-combination-container",
                                style: N7.noComboContainer,
                            },
                            N5.default.createElement(
                                "div",
                                {
                                    id: "no-winning-combination-text",
                                    style: mG,
                                },
                                N6.t("History.HistoryNoWinning")
                            )
                        );
                    };
                    var N9 = {};
                    var Nx = {};
                    var ND = {};
                    var NJ = {};
                    Object.defineProperty(NJ, "__esModule", {
                        value: true,
                    });
                    var NN = {
                        writable: false,
                        value: undefined,
                        enumerable: false,
                        configurable: false,
                    };
                    function NP(mF, mG, mC) {
                        for (var ms = mF.length, mE = 0; mE < ms; mE++) {
                            var mf = mF[mE];
                            if (mf) {
                                mf(mG, mC);
                            }
                        }
                    }
                    NJ.unwatch = function (mF, mG, mC) {
                        if (typeof mF != "object" || mF === null) {
                            throw Error("Invalid parameter at index 0");
                        }
                        if (typeof mG != "string" || mG === "") {
                            throw Error("Invalid parameter at index 1");
                        }
                        var ms = mF.watch_eventPool;
                        if (ms) {
                            var mE = ms[mG];
                            if (mE) {
                                if (mC === undefined) {
                                    mE.length = 0;
                                } else {
                                    var mf = mE.indexOf(mC);
                                    if (mf !== -1) {
                                        mE.splice(mf, 1);
                                    }
                                }
                            }
                        }
                    };
                    NJ.watch = function (mF, mG, mC) {
                        if (typeof mF != "object" || mF === null) {
                            throw Error("Invalid parameter at index 0");
                        }
                        if (typeof mG != "string" || mG === "") {
                            throw Error("Invalid parameter at index 1");
                        }
                        if (typeof mC != "function") {
                            throw Error("Invalid parameter at index 2");
                        }
                        var ms = mF.watch_eventPool;
                        if (!ms) {
                            if (!Object.isExtensible(mF)) {
                                throw Error("Object is not extensible");
                            }
                            ms = NN.value = Object.create(null);
                            Object.defineProperty(mF, "watch_eventPool", NN);
                        }
                        var mE = ms[mG];
                        if (!mE) {
                            var mf = Object.getOwnPropertyDescriptor(mF, mG);
                            if (!mf) {
                                throw Error("Object property not exists");
                            }
                            if (mf.writable === false || (mf.get !== undefined && mf.set === undefined)) {
                                throw Error("Object property is readonly");
                            }
                            if (!mf.configurable) {
                                throw Error("Object property is not configurable");
                            }
                            mE = ms[mG] = [];
                            (function (mc, mZ, mL) {
                                if (mL.writable) {
                                    var R0 = mL.value;
                                    mL.get = function () {
                                        return R0;
                                    };
                                    mL.set = function (R3) {
                                        var R4 = R0;
                                        R0 = R3;
                                        NP(this.watch_eventPool[mZ], R3, R4);
                                    };
                                    delete mL.value;
                                    delete mL.writable;
                                } else if (mL.get) {
                                    var R1 = mL.set;
                                    mL.set = function (R3) {
                                        R1.call(this, R3);
                                        NP(this.watch_eventPool[mZ], this[mZ]);
                                    };
                                } else {
                                    var R2 = mL.set;
                                    mL.set = function (R3) {
                                        R2.call(this, R3);
                                        NP(this.watch_eventPool[mZ], R3);
                                    };
                                }
                                Object.defineProperty(mc, mZ, mL);
                            })(mF, mG, mf);
                        }
                        if (mE.indexOf(mC) !== -1) {
                            throw Error("Watch callback exists");
                        }
                        mE.push(mC);
                    };
                    Object.defineProperty(ND, "__esModule", {
                        value: true,
                    });
                    var NI = NJ;
                    var Nm = new ((function () {
                        function mF() {
                            this.tooltipProps = {
                                isActive: false,
                                title: "",
                                desc: "",
                                posY: 0,
                            };
                        }
                        mF.prototype.observe = function (mG, mC, ms) {
                            var mE;
                            var mf;
                            var mc = this;
                            if (ms && this[mG] !== undefined) {
                                mC(this[mG], this);
                            }
                            return ((mE = this),
                            (mf = mG),
                            function (mZ) {
                                var mL = mZ.bind(undefined, undefined);
                                NI.watch(mE, mf, mL);
                            })(function (mZ, mL, R0) {
                                if (!(mZ || mL === undefined || JSON.stringify(mL) === JSON.stringify(R0))) {
                                    mC(mL, mc);
                                }
                            });
                        };
                        mF.prototype.dispose = function (mG) {
                            NI.unwatch(this, mG);
                            this.tooltipProps = {
                                isActive: false,
                                title: "",
                                desc: "",
                                posY: 0,
                            };
                        };
                        mF.prototype.update = function (mG) {
                            this.tooltipProps = mG;
                        };
                        return mF;
                    })())();
                    ND.tooltipViewModel = Nm;
                    Object.defineProperty(Nx, "__esModule", {
                        value: true,
                    });
                    var NR = __importDefault(T);
                    var Nl = ND;
                    var Nu = {
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
                    var NT = (function (mF) {
                        function mG(mC) {
                            var ms = mF.call(this, mC) || this;
                            ms.ai = undefined;
                            ms.si = false;
                            return ms;
                        }
                        __extends(mG, mF);
                        mG.prototype.componentDidMount = function () {
                            this.li();
                        };
                        mG.prototype.componentDidUpdate = function () {
                            this.li();
                        };
                        mG.prototype.li = function () {
                            var mC = this;
                            this.si = false;
                            clearTimeout(this.ai);
                            this.ai = // TOLOOK
                                setTimeout(function () {
                                    mC.si = true;
                                }, 0);
                        };
                        mG.prototype.componentWillUnmount = function () {
                            clearTimeout(this.ai);
                        };
                        mG.prototype.ci = function (mC, ms) {
                            if (ms === undefined) {
                                ms = false;
                            }
                            return (
                                ms
                                    ? mC.map(function (mE) {
                                          return shell.I18n.t(mE);
                                      })
                                    : mC
                            ).join(" x ");
                        };
                        mG.prototype.hi = function (mC) {
                            var ms = this;
                            if (this.si) {
                                var mE = mC.currentTarget;
                                var mf = mE.parentNode;
                                var mc = Array.prototype.indexOf.call(mf.children, mE);
                                var mZ = (mf.children.length - 1 - mc) * (this.props.contentHeight || 48);
                                var mL = Object.keys(this.props.winCalculation);
                                var R0 = mL.map(function (R2) {
                                    return ms.props.winCalculation[R2];
                                });
                                var R1 = {
                                    isActive: true,
                                    posY: mZ,
                                    title: this.ci(mL, true),
                                    desc: this.ci(R0),
                                };
                                Nl.tooltipViewModel.currentTarget = mE;
                                Nl.tooltipViewModel.update(R1);
                            }
                        };
                        mG.prototype.ui = function (mC) {
                            mC.currentTarget.style.opacity = "0.8";
                        };
                        mG.prototype.di = function (mC) {
                            mC.currentTarget.style.opacity = "1";
                        };
                        mG.prototype.render = function () {
                            var mC = [];
                            mC.push(
                                NR.default.createElement(
                                    "div",
                                    {
                                        key: "wrapper-content",
                                        style: Nu.childrenContent,
                                    },
                                    this.props.children
                                )
                            );
                            mC.push(
                                NR.default.createElement(
                                    "div",
                                    {
                                        key: "icon-content",
                                        style: Nu.infoIconContent,
                                    },
                                    NR.default.createElement("div", {
                                        className: "gh_basic_sprite gh_ic_nav_info_s",
                                        style: Nu.infoIcon,
                                    })
                                )
                            );
                            var ms = __assign(__assign({}, Nu.wrappedContent), {
                                height: (this.props.contentHeight || 48) + "px",
                            });
                            return NR.default.createElement(
                                "div",
                                {
                                    style: ms,
                                    onMouseDown: this.ui.bind(this),
                                    onMouseUp: this.di.bind(this),
                                    onTouchStart: this.ui.bind(this),
                                    onTouchEnd: this.di.bind(this),
                                    onClick: this.hi.bind(this),
                                },
                                this.props.isRTL ? mC.reverse() : mC
                            );
                        };
                        return mG;
                    })(NR.default.Component);
                    Nx.default = NT;
                    Object.defineProperty(N9, "__esModule", {
                        value: true,
                    });
                    var Nd = __importDefault(T);
                    var Nq = __importDefault(Nx);
                    var Nh = {
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
                    var NH = {
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
                    N9.default = function (mF) {
                        var mG = NH;
                        var mC = Object.assign({}, Nh.winLineLabel, mG.winLineLabel);
                        var ms = Object.assign({}, Nh.winValueLabel, mG.winValueLabel);
                        var mE = __assign({}, Nh.paylineContainer);
                        mC.color = mF.winLineLabelColor ? mF.winLineLabelColor : mC.color;
                        ms.color = mF.winValueLabelColor ? mF.winValueLabelColor : ms.color;
                        if (mF.isRTL) {
                            mE.direction = "rtl";
                            mC.textAlign = "right";
                            ms.textAlign = "left";
                        }
                        var mf = Nd.default.createElement(
                            "div",
                            {
                                id: "payline-container",
                                style: mE,
                            },
                            Nd.default.createElement(
                                "div",
                                {
                                    id: "payline-number-sprite-wrapper",
                                    style: Nh.paylineNumberImageWrapper,
                                },
                                Nd.default.createElement(
                                    "div",
                                    {
                                        id: "win-line-number-label",
                                        style: mC,
                                    },
                                    ("0" + parseInt(mF.winLine, 10).toString()).slice(-2)
                                ),
                                (function (mc) {
                                    var mZ = mc.paylineSpriteClassName;
                                    var mL = mc.paylineImageMap;
                                    var R0 = mc.paylineImageStyle;
                                    var R1 = mc.winLine;
                                    var R2 = mc.isRTL;
                                    if (mL) {
                                        var R3 = mL[R1];
                                        var R4 = mZ || "";
                                        var R5 = {
                                            width: Nh.paylineImage.width,
                                            height: Nh.paylineImage.height,
                                        };
                                        var R6 = Object.assign({}, R5, R0 || {});
                                        if (R2) {
                                            R6.transformOrigin = "right";
                                        }
                                        return Nd.default.createElement("span", {
                                            className: R4 + " " + R3,
                                            style: R6,
                                        });
                                    }
                                    return null;
                                })(mF)
                            ),
                            Nd.default.createElement(
                                "div",
                                {
                                    id: "payline-labels",
                                    style: Nh.paylineLabels,
                                },
                                Nd.default.createElement(
                                    "div",
                                    {
                                        id: "payline-win-value-label",
                                        style: ms,
                                    },
                                    mF.winValue
                                ),
                                (function (mc) {
                                    var mZ = mc.subValue;
                                    var mL = mc.subValueLabelColor;
                                    var R0 = mc.isRTL;
                                    var R1 = Object.assign({}, Nh.subValueLabel, NH.subValueLabel);
                                    R1.color = mL || R1.color;
                                    if (R0) {
                                        R1.textAlign = "left";
                                    }
                                    if (mZ) {
                                        return Nd.default.createElement(
                                            "div",
                                            {
                                                id: "payline-subvalue-label",
                                                style: R1,
                                            },
                                            Nd.default.createElement("bdi", null, mZ)
                                        );
                                    } else {
                                        return null;
                                    }
                                })(mF)
                            )
                        );
                        if (mF.winCalculation) {
                            return Nd.default.createElement(
                                Nq.default,
                                {
                                    isRTL: mF.isRTL,
                                    winCalculation: mF.winCalculation,
                                },
                                mf
                            );
                        } else {
                            return mf;
                        }
                    };
                    var NU = {};
                    Object.defineProperty(NU, "__esModule", {
                        value: true,
                    });
                    var Ng = __importDefault(T);
                    var NS = {
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
                    var Nv = {
                        line: {
                            backgroundColor: "#282833",
                            height: "2px",
                        },
                        text: {
                            color: "#9C9B9B",
                        },
                    };
                    NU.default = function (mF) {
                        var mG = Nv;
                        var mC = Object.assign({}, NS.line, mG.line);
                        var ms = Object.assign({}, NS.text, mG.text);
                        mC.backgroundColor = mF.lineColor ? mF.lineColor : mC.backgroundColor;
                        ms.color = mF.labelColor ? mF.labelColor : ms.color;
                        return Ng.default.createElement(
                            "div",
                            {
                                id: "payout-title-container",
                                style: NS.payoutTitleContainer,
                            },
                            Ng.default.createElement("div", {
                                className: "line",
                                style: mC,
                            }),
                            Ng.default.createElement(
                                "div",
                                {
                                    id: "payout-text",
                                    style: ms,
                                },
                                shell.I18n.t("History.HistoryPayout")
                            ),
                            Ng.default.createElement("div", {
                                className: "line",
                                style: mC,
                            })
                        );
                    };
                    var Nz = {};
                    Object.defineProperty(Nz, "__esModule", {
                        value: true,
                    });
                    var NA = __importDefault(T);
                    var Nb = shell.I18n;
                    var NX = {
                        display: "flex",
                        width: "inherit",
                        height: "50px",
                        margin: "0 auto",
                        justifyContent: "center",
                        alignItems: "center",
                    };
                    var NB = {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    };
                    var Ny = {
                        textAlign: "center",
                        display: "inline-table",
                    };
                    var Na = {
                        textAlign: "center",
                        fontSize: "11px",
                    };
                    var Nj = {
                        color: "rgba(255,255,255,0.3)",
                    };
                    var Nk = {
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
                    var NO = {
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
                    function Nw(mF) {
                        var mG = Object.assign({}, NB, {
                            width: mF.size,
                            marginLeft: mF.marginLeft,
                        });
                        var mC = mF.useSmallFont
                            ? {
                                  fontSize: "11px",
                              }
                            : {
                                  fontSize: "12px",
                              };
                        mC.lineHeight = mF.valueLineHeight ? mF.valueLineHeight : mC.fontSize;
                        var ms = mF.isCard ? NO : Nk;
                        var mE = Object.assign({}, Ny, ms.valueLabel);
                        var mf = Object.assign({}, Na, ms.titleLabel);
                        mE.color = mF.valueLabelColor ? mF.valueLabelColor : mE.color;
                        mf.color = mF.keyLabelColor ? mF.keyLabelColor : mf.color;
                        return NA.default.createElement(
                            "div",
                            {
                                className: "transaction-detail-item",
                                style: mG,
                            },
                            NA.default.createElement(
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
                                NA.default.createElement(
                                    "div",
                                    {
                                        id: mF.keyName + "-item-value",
                                        style: Object.assign({}, mE, mC),
                                    },
                                    mF.value
                                )
                            ),
                            NA.default.createElement(
                                "div",
                                {
                                    id: mF.keyName + "-item-key",
                                    style: mf,
                                },
                                mF.keyName
                            )
                        );
                    }
                    function NQ(mF) {
                        mF.balance;
                        var mG;
                        var mC;
                        var ms = mF.balanceBefore;
                        var mE = mF.showBalanceBefore;
                        var mf = __rest(mF, ["balance", "balanceBefore", "showBalanceBefore"]);
                        return NA.default.createElement(
                            Nw,
                            __assign({}, mf, {
                                value:
                                    mE && ms
                                        ? ((mG = __assign({}, Nj)),
                                          (mC = {}),
                                          (mF.balance.length > 16 || mF.balanceBefore.length > 16) &&
                                              (Object.assign(mG, {
                                                  fontSize: "10px",
                                              }),
                                              Object.assign(mC, {
                                                  fontSize: "10px",
                                              })),
                                          NA.default.createElement(
                                              NA.default.Fragment,
                                              null,
                                              NA.default.createElement(
                                                  "span",
                                                  {
                                                      style: mG,
                                                  },
                                                  mF.balanceBefore + "→ "
                                              ),
                                              NA.default.createElement(
                                                  "span",
                                                  {
                                                      style: mC,
                                                  },
                                                  mF.balance
                                              )
                                          ))
                                        : NK(mF.balance, 17),
                            })
                        );
                    }
                    function NM(mF, mG) {
                        if (mF) {
                            return mG + "(" + mF + ")";
                        } else {
                            return "" + mG;
                        }
                    }
                    function NK(mF, mG) {
                        if (mG === undefined) {
                            mG = 14;
                        }
                        if (mF.length > mG && mF.indexOf(" ") < 0) {
                            var mC = Math.floor(mF.length / 2);
                            return mF.slice(0, mC) + " " + mF.slice(mC, mF.length);
                        }
                        return mF;
                    }
                    Nz.default = function (mF) {
                        var mG = mF.isCard ? NO : Nk;
                        var mC = Object.assign({}, NX, mG.container);
                        var ms = mF.detailsShowWin ? "History.HistoryRecordTotalWin" : "History.HistoryRecordWin";
                        var mE = NM(mF.currencySymbol, Nb.t("History.HistoryRecordPayout"));
                        var mf = NM(mF.currencySymbol, Nb.t(ms));
                        var mc = NM(mF.currencySymbol, Nb.t("History.HistoryRecordBalance"));
                        var mZ = mF.transactionId.length > 14 || mF.betValue.length > 10 || mF.profitValue.length > 10 || mF.balance.length > 16;
                        mC.backgroundColor = mF.backgroundColor ? mF.backgroundColor : mC.backgroundColor;
                        if (mF.isRTL) {
                            mC.direction = "rtl";
                        }
                        return NA.default.createElement(
                            "div",
                            {
                                id: "transaction-details-container",
                                style: mC,
                            },
                            NA.default.createElement(Nw, {
                                keyName: Nb.t("History.HistoryRecordTransaction"),
                                value: NK(mF.transactionId),
                                size: "27%",
                                useSmallFont: mZ,
                                valueLineHeight: "12px",
                                isCard: mF.isCard,
                                keyLabelColor: mF.keyLabelColor,
                                valueLabelColor: mF.valueLabelColor,
                            }),
                            NA.default.createElement(Nw, {
                                keyName: mE,
                                value: NK(mF.betValue, 11),
                                size: "18%",
                                marginLeft: "10px",
                                useSmallFont: mZ,
                                valueLineHeight: "12px",
                                isCard: mF.isCard,
                                keyLabelColor: mF.keyLabelColor,
                                valueLabelColor: mF.valueLabelColor,
                            }),
                            NA.default.createElement(Nw, {
                                keyName: mf,
                                value: NK(mF.detailsShowWin ? mF.totalWinValue : mF.profitValue, 12),
                                size: "20%",
                                marginLeft: "10px",
                                useSmallFont: mZ,
                                valueLineHeight: "12px",
                                isCard: mF.isCard,
                                keyLabelColor: mF.keyLabelColor,
                                valueLabelColor: mF.valueLabelColor,
                            }),
                            NA.default.createElement(NQ, {
                                keyName: mc,
                                balance: mF.balance,
                                balanceBefore: mF.balanceBefore,
                                showBalanceBefore: mF.showBalanceBefore,
                                size: "27%",
                                marginLeft: "10px",
                                useSmallFont: mZ,
                                valueLineHeight: "12px",
                                isCard: mF.isCard,
                                keyLabelColor: mF.keyLabelColor,
                                valueLabelColor: mF.valueLabelColor,
                            })
                        );
                    };
                    var NW = {};
                    Object.defineProperty(NW, "__esModule", {
                        value: true,
                    });
                    var NV = __importDefault(T);
                    var NY = ND;
                    var Np = {
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
                    var NF = "game-details-page-container";
                    function NG(mF) {
                        if (NY.tooltipViewModel.currentTarget && NY.tooltipViewModel.currentTarget.contains(mF.target)) {
                            mF.stopPropagation();
                        }
                        NY.tooltipViewModel.update({
                            isActive: false,
                        });
                        var mG = document.getElementById(NF);
                        if (mG) {
                            mG.removeEventListener("click", NG);
                        }
                    }
                    var NC = (function (mF) {
                        function mG(mC) {
                            var ms = mF.call(this, mC) || this;
                            ms.state = {
                                isActive: false,
                                title: "",
                                desc: "",
                                posY: 0,
                            };
                            return ms;
                        }
                        __extends(mG, mF);
                        mG.prototype.componentDidUpdate = function () {
                            if (this.state.isActive) {
                                var mC = document.getElementById(NF);
                                if (mC) {
                                    mC.addEventListener("click", NG);
                                }
                            }
                        };
                        mG.prototype.componentWillUnmount = function () {
                            var mC = document.getElementById(NF);
                            if (mC) {
                                mC.removeEventListener("click", NG);
                            }
                            NY.tooltipViewModel.dispose("tooltipProps");
                        };
                        mG.prototype.componentDidMount = function () {
                            var mC = this;
                            NY.tooltipViewModel.observe("tooltipProps", function (ms) {
                                mC.setState({
                                    isActive: ms.isActive,
                                    title: ms.title,
                                    desc: ms.desc,
                                    posY: ms.posY,
                                });
                            });
                        };
                        mG.prototype.render = function () {
                            var mC = this.state.isActive ? "visible" : "hidden";
                            var ms = this.state.desc;
                            var mE = this.state.title;
                            var mf = this.state.posY;
                            var mc = __assign(__assign({}, Np.tooltip), {
                                visibility: mC,
                                top: "-" + mf + "px",
                            });
                            var mZ = __assign({}, Np.titleText);
                            var mL = __assign({}, Np.descText);
                            var R0 = __assign({}, Np.tooltipArrow);
                            if (this.props.isRTL) {
                                mZ.direction = "rtl";
                                mZ.textAlign = "right";
                                mL.textAlign = "right";
                                var R1 = R0.left;
                                R0.right = R1;
                                delete R0.left;
                            }
                            return NV.default.createElement(
                                "div",
                                {
                                    id: "tooltip",
                                    style: mc,
                                },
                                NV.default.createElement("div", {
                                    style: R0,
                                }),
                                NV.default.createElement(
                                    "div",
                                    {
                                        id: "tooltip-toast",
                                        style: Np.tooltipToast,
                                    },
                                    NV.default.createElement(
                                        "div",
                                        {
                                            id: "tooltip-title",
                                            style: mZ,
                                        },
                                        mE
                                    ),
                                    NV.default.createElement(
                                        "div",
                                        {
                                            id: "tooltip-desc",
                                            style: mL,
                                        },
                                        ms
                                    )
                                )
                            );
                        };
                        return mG;
                    })(NV.default.Component);
                    NW.default = NC;
                    var Ns = {};
                    (function (mF) {
                        var mG;
                        Object.defineProperty(mF, "__esModule", {
                            value: true,
                        });
                        (mG = mF.WinCalculation || (mF.WinCalculation = {})).BET_SIZE = "History.HistoryTipsBetSize";
                        mG.BET_LEVEL = "History.HistoryTipsBetLevel";
                        mG.PAYOUT = "History.HistoryTipsPayout";
                        mG.WAYS = "History.HistoryTipsWay";
                        mG.COUNTS = "History.HistoryTipsSymbolCount";
                        mG.MULTIPLIER = "History.HistoryTipsMultiplier";
                    })(Ns);
                    Object.defineProperty(Jf, "__esModule", {
                        value: true,
                    });
                    var NE = __importDefault(Jc);
                    Jf.BetInformation = NE.default;
                    var Nf = __importDefault(N4);
                    Jf.NoWinningCombination = Nf.default;
                    var Nc = __importDefault(N9);
                    Jf.Payline = Nc.default;
                    var NZ = __importDefault(NU);
                    Jf.PayoutTitle = NZ.default;
                    var NL = __importDefault(Nz);
                    var P0 = (Jf.TransactionDetails = NL.default);
                    var P1 = __importDefault(NW);
                    Jf.Tooltip = P1.default;
                    var P2 = __importDefault(Nx);
                    Jf.TooltipWrapper = P2.default;
                    var P3 = Ns;
                    Jf.WinCalculation = P3.WinCalculation;
                    var P4;
                    var P5;
                    (P4 = {}).isListPageScroll = false;
                    P4.isDetailPageScroll = false;
                    P4.selectedTransactionId = 0;
                    P4.direction = 0;
                    P5 = P4;
                    var P6 = {
                        observe: function (mF, mG) {
                            return x7.observeCallback(
                                P5,
                                mF
                            )(function (mC, ms, mE) {
                                if (!(mC || ms === mE)) {
                                    mG(ms, mE);
                                }
                            });
                        },
                        set: function (mF, mG) {
                            P5[mF] = mG;
                        },
                        reset: function () {
                            P5.isListPageScroll = false;
                            P5.isDetailPageScroll = false;
                            P5.selectedTransactionId = 0;
                            P5.direction = 0;
                        },
                    };
                    var P7 = (function (mF) {
                        function mG(mC) {
                            var ms = mF.call(this, mC) || this;
                            var mE = document.getElementById("game-history-container");
                            var mf = D7.isPortrait || D7.isMobile;
                            var mc = mf ? mE.offsetHeight : 640;
                            ms.fi = mf ? Dl() : 88;
                            ms.gi = mf ? 112 + Dm() : 138;
                            var mZ = D7.isPortrait ? DH(true) : 0;
                            ms.state = {
                                parentHeight: mc - ms.fi - mZ,
                                scrollHeight: mc - ms.gi - mZ,
                            };
                            return ms;
                        }
                        x0(mG, mF);
                        mG.prototype.componentDidMount = function () {
                            D7.context.event.on("Shell.Scaled", this.pi, this);
                            if (D7.isMobile && DI() && shell.environment.getOrientation() === 90) {
                                document.querySelectorAll(".rcs-custom-scroll .rcs-inner-container").forEach(function (mC) {
                                    mC.style.webkitOverflowScrolling = "auto";
                                });
                            }
                        };
                        mG.prototype.componentWillUnmount = function () {
                            D7.context.event.off("Shell.Scaled", this.pi, this);
                        };
                        mG.prototype.shouldComponentUpdate = function (mC, ms) {
                            return (
                                mC.betDetailsModel !== this.props.betDetailsModel ||
                                mC.currentIndexViewed !== this.props.currentIndexViewed ||
                                mC.pageWidth !== this.props.pageWidth ||
                                ms.scrollHeight !== this.state.scrollHeight ||
                                ms.parentHeight !== this.state.parentHeight
                            );
                        };
                        mG.prototype.render = function () {
                            return T.createElement(
                                "div",
                                {
                                    id: "game-details-page-container",
                                    style: {
                                        height: `${this.state.parentHeight}px`,
                                    },
                                },
                                this.mi(this.props, this.state)
                            );
                        };
                        mG.prototype.mi = function (mC, ms) {
                            var mE = this;
                            var mf = mC.currentIndexViewed;
                            var mc = mC.betDetailsModel;
                            var mZ = [];
                            var mL = [];
                            if (mc.length < 4) {
                                mL = mc.map(function (R1, R2) {
                                    return mE.vi(R2, mC, ms);
                                });
                            } else {
                                if (mf === 0) {
                                    mZ = [0, 1, 2];
                                } else if (mf === mc.length - 1) {
                                    var R0 = mc.length - 1;
                                    mZ = [R0 - 2, R0 - 1, R0];
                                } else {
                                    mZ = [mf - 1, mf];
                                    if (!(mf + 1 > mc.length)) {
                                        mZ.push(mf + 1);
                                    }
                                }
                                mL = mZ.map(function (R1) {
                                    return mE.vi(R1, mC, ms);
                                });
                            }
                            return T.createElement(
                                "div",
                                {
                                    id: "game-pages-window",
                                    style: {
                                        position: "relative",
                                    },
                                },
                                mL
                            );
                        };
                        mG.prototype.bi = function (mC) {
                            var ms = mC.totalBetAmount;
                            var mE = mC.totalWinLossAmount;
                            var mf = mC.balance;
                            var mc = mC.balanceBefore;
                            var mZ = mC.transactionId;
                            var mL = mC.totalWinAmount;
                            if (this.props.useDefaultTransactionHeader) {
                                return T.createElement(P0, {
                                    showBalanceBefore: D7.showBalanceBefore,
                                    isRTL: shell.isRTLLanguage(),
                                    currencySymbol: x7.getDefaultCurrencyFormat().currencySymbol,
                                    transactionId: mZ + "",
                                    betValue: x7.formatCurrency(ms, ""),
                                    profitValue: x7.formatCurrency(mE, ""),
                                    balance: x7.formatCurrency(mf, ""),
                                    balanceBefore: x7.formatCurrency(mc, ""),
                                    backgroundColor: D7.appearanceHelper.transactionDetailsHeaderColor,
                                    keyLabelColor: D7.appearanceHelper.transactionDetailsHeaderKeyFontColor,
                                    valueLabelColor: D7.appearanceHelper.transactionDetailsHeaderValueFontColor,
                                    isCard: D7.launchType === xx.CARD,
                                    detailsShowWin: D7.historyShowWin,
                                    totalWinValue: x7.formatCurrency(mL, ""),
                                });
                            } else {
                                return null;
                            }
                        };
                        mG.prototype.vi = function (mC, ms, mE) {
                            var mf = ms.gameDetailComponent;
                            var mc = ms.betDetailsModel;
                            var mZ = ms.pageWidth;
                            var mL = ms.currentIndexViewed;
                            var R0 = mE.parentHeight;
                            var R1 = mE.scrollHeight;
                            var R2 = mc[mC];
                            var R3 = {
                                width: "100%",
                                height: R0,
                                position: "absolute",
                                left: `${mC * mZ}px`,
                            };
                            if (shell.isRTLLanguage()) {
                                R3.left = `${mC * mZ * -1}px`;
                            }
                            return T.createElement(
                                "div",
                                {
                                    className: "game-list-page",
                                    key: mC,
                                    style: R3,
                                },
                                T.createElement(
                                    "div",
                                    {
                                        className: "reset",
                                    },
                                    this.bi(R2),
                                    T.createElement(
                                        "div",
                                        {
                                            className: "history regular",
                                            style: {
                                                width: "inherit",
                                                height: `${R1}px`,
                                            },
                                        },
                                        this.yi(mf, R2, mL === mC)
                                    )
                                )
                            );
                        };
                        mG.prototype.yi = function (mC, ms, mE) {
                            var mf = ms.gameDetail;
                            var mc = D7.replayVersion ? 118 : 86;
                            return T.createElement(
                                DC.default,
                                {
                                    heightRelativeToParent: "inherit",
                                    onScroll: function () {
                                        P6.set("isDetailPageScroll", true);
                                    },
                                },
                                T.createElement(mC, {
                                    data: mf,
                                    isBO: false,
                                    isCurrentPage: mE,
                                    isRTL: shell.isRTLLanguage(),
                                }),
                                T.createElement("div", {
                                    id: "game-detail-padding",
                                    style: {
                                        width: "inherit",
                                        height: `${mc}px`,
                                    },
                                })
                            );
                        };
                        mG.prototype.pi = function (mC) {
                            var ms = mC.payload;
                            var mE = D7.isPortrait || D7.isMobile ? ms.height : 640;
                            var mf = D7.isPortrait ? DH(true) : 0;
                            var mc = mE - this.fi - mf;
                            var mZ = mE - this.gi - mf;
                            this.setState({
                                parentHeight: mc,
                                scrollHeight: mZ,
                            });
                        };
                        return mG;
                    })(T.Component);
                    var P8 = shell.environment.getOrientationMode() === "land" ? 20 : 70;
                    var P9 = x7.timeoutCallback;
                    function Px(mF) {
                        var mG = H(null);
                        var mC = x5(U(0), 2);
                        var ms = mC[0];
                        var mE = mC[1];
                        var mf = x5(U(mF.pageWidth), 2);
                        var mc = mf[0];
                        var mZ = mf[1];
                        var mL = x5(U(false), 2);
                        var R0 = mL[0];
                        var R1 = mL[1];
                        var R2 = x5(U(false), 2);
                        var R3 = R2[0];
                        var R4 = R2[1];
                        var R5 = x5(U(false), 2);
                        var R6 = R5[0];
                        var R7 = R5[1];
                        var R8 = ms;
                        var R9 = ms === 0;
                        var Rx = x5(
                            K(function () {
                                return {
                                    x: -R8 * mc,
                                };
                            }),
                            2
                        );
                        var RD = Rx[0].x;
                        var RJ = Rx[1];
                        q(
                            function () {
                                if (ms !== mF.pageIndex) {
                                    mE(mF.pageIndex);
                                    RJ({
                                        x: -mF.pageIndex * mF.pageWidth,
                                        config: xl,
                                        immediate: mF.noAnim,
                                    });
                                    R1(true);
                                    P9(0.3)(function () {
                                        R1(false);
                                        R7(false);
                                    });
                                }
                                if (mc !== mF.pageWidth) {
                                    mZ(mF.pageWidth);
                                    RJ({
                                        x: -mF.pageIndex * mF.pageWidth,
                                        config: xl,
                                        immediate: true,
                                    });
                                }
                            },
                            [mF.pageIndex, mF.pageWidth]
                        );
                        var RN = Js(
                            {
                                onDrag: function (RP) {
                                    return (function (RI) {
                                        var Rm = x5(RI.delta, 2);
                                        var RR = Rm[0];
                                        var Rl = Rm[1];
                                        var Ru = x5(RI.movement, 2);
                                        var RT = Ru[0];
                                        var Rd = Ru[1];
                                        var Rq = x5(RI.swipe, 2);
                                        var Rh = Rq[0];
                                        var RH = Rq[1];
                                        var RU = RI.velocity;
                                        var Rg = RI.down;
                                        var RS = RI.cancel;
                                        var Rv = RI.canceled;
                                        if (RI.memo !== -1) {
                                            var Rz = Math.abs(RT);
                                            var RA = Math.abs(Rd);
                                            var Rb = RR;
                                            var RX = RT;
                                            var RB = Rh;
                                            if (
                                                !(
                                                    !D7.isMobile ||
                                                    shell.environment.isMac() ||
                                                    D7.isPortrait ||
                                                    shell.environment.getOrientation() !== xN.PORTRAIT
                                                )
                                            ) {
                                                Rz = Math.abs(Rd);
                                                RA = Math.abs(RT);
                                                Rb = Rl;
                                                RX = Rd;
                                                RB = RH;
                                            }
                                            if (shell.isRTLLanguage()) {
                                                Rb *= -1;
                                                RX *= -1;
                                                RB *= -1;
                                            }
                                            if (!R3 && !R6 && RA > P8) {
                                                R4(true);
                                            }
                                            if (!R3 && !R6 && Rz > 20) {
                                                R7(true);
                                            }
                                            if (!Rg || Rv) {
                                                if (R3);
                                                else if (R6) {
                                                    if (
                                                        !R0 &&
                                                        ((function (Rk, RO) {
                                                            return Rk >= RO / 2;
                                                        })(Rz, mc) ||
                                                            RB !== 0)
                                                    ) {
                                                        var Ry = R8;
                                                        R8 = (function (Rk, RO, Rw) {
                                                            var RQ = Rk + RO;
                                                            if (RQ > Rw - 1) {
                                                                return Rw - 1;
                                                            } else if (RQ < 0) {
                                                                if (Rk === 0) {
                                                                    return -1;
                                                                } else {
                                                                    return 0;
                                                                }
                                                            } else {
                                                                return RQ;
                                                            }
                                                        })(R8, RX < 0 ? 1 : -1, mF.betDetailsModel.length);
                                                        if (Ry === R8) {
                                                            var Ra = {
                                                                tension: xl.tension,
                                                                friction: xl.friction,
                                                                velocity: xl.velocity * (RU < 1 ? 1 : RU),
                                                                clamp: R8 !== mF.betDetailsModel.length - 1,
                                                            };
                                                            RJ({
                                                                x: -R8 * mc,
                                                                config: Ra,
                                                            });
                                                        } else if (mF.updateIndexCallback && R8 !== mF.pageIndex) {
                                                            mF.updateIndexCallback(R8);
                                                        }
                                                        return R8;
                                                    }
                                                    RJ({
                                                        x: -R8 * mc,
                                                        config: xl,
                                                        immediate: false,
                                                    });
                                                }
                                                R4(false);
                                                R7(false);
                                            } else if (R3);
                                            else if (R6) {
                                                RJ({
                                                    x: RX + -R8 * mc,
                                                    from: RX - Rb + -R8 * mc,
                                                    immediate: false,
                                                });
                                                var Rj = (function (Rk, RO, Rw, RQ) {
                                                    if (Rk === undefined) {
                                                        Rk = false;
                                                    }
                                                    return !!((Rk && RO > RQ / 2) || Rw > RQ);
                                                })(R9, RX, Rz, mc);
                                                if (Rj && Rg) {
                                                    RS();
                                                }
                                            }
                                        }
                                    })(RP);
                                },
                            },
                            {
                                domTarget: mG,
                                eventOptions: {
                                    capture: false,
                                    passive: false,
                                },
                                drag: {
                                    swipeDistance: 10,
                                    swipeVelocity: 0.3,
                                },
                            }
                        );
                        q(RN, [RN]);
                        if (mF.pageIndex === 0 && R8 !== mF.pageIndex) {
                            R8 = 0;
                        }
                        return T.createElement(
                            W.div,
                            {
                                id: "game-detail-spring-wrapper",
                                ref: mG,
                                style: Object.assign({}, mF.style, {
                                    transform: RD.interpolate(function (RP) {
                                        var RI = shell.isRTLLanguage() ? -RP : RP;
                                        if (shell.environment.getBrowserBaseType() === "ie") {
                                            return `translateX(${RI}px)`;
                                        } else {
                                            return `translate3d(${RI}px, 0, 0)`;
                                        }
                                    }),
                                }),
                            },
                            T.createElement(P7, {
                                gameDetailComponent: mF.gameDetailComponent,
                                betDetailsModel: mF.betDetailsModel,
                                currentIndexViewed: R8,
                                useDefaultTransactionHeader: mF.useDefaultTransactionHeader,
                                pageWidth: mc,
                            }),
                            mF.additionalComponents && mF.additionalComponents()
                        );
                    }
                    function PD() {
                        var mF = {
                            backgroundColor: D7.appearanceHelper.highlightFontColor,
                        };
                        var mG = {
                            borderColor: `transparent transparent transparent ${D7.appearanceHelper.themeColor}`,
                        };
                        return T.createElement(
                            "div",
                            {
                                className: "replay-icon-container",
                            },
                            T.createElement(
                                "div",
                                {
                                    className: "replay-icon-bg",
                                    style: mF,
                                },
                                T.createElement("div", {
                                    className: "replay-icon-triangle",
                                    style: mG,
                                })
                            )
                        );
                    }
                    function PJ(mF) {
                        var mG = H(null);
                        var mC = H(null);
                        var ms = {
                            backgroundColor: D7.appearanceHelper.themeColor,
                        };
                        var mE = {
                            color: D7.appearanceHelper.highlightFontColor,
                            transform: `scale(${mF.scale})`,
                        };
                        q(function () {
                            if (mG && mG.current && mC && mC.current) {
                                var mf = Math.round(mC.current.offsetWidth / 2);
                                mG.current.style.marginLeft = `-${mf}px`;
                            }
                        });
                        return T.createElement(
                            "div",
                            {
                                className: "replay-button-bg",
                                onClick: mF.onClickCallback,
                                style: ms,
                            },
                            T.createElement(PD, null),
                            T.createElement(
                                "div",
                                {
                                    className: "replay-spin-label-wrapper",
                                    ref: mC,
                                },
                                T.createElement(
                                    "div",
                                    {
                                        className: "replay-spin-label",
                                        style: mE,
                                        ref: mG,
                                    },
                                    mF.text
                                )
                            )
                        );
                    }
                    function PN(mF, mG) {
                        return function () {
                            var mC = mF.betDetailsRaw;
                            var ms = mF.quitFunction;
                            var mE = mF.selectedTransactionId;
                            var mf = 0;
                            mC.forEach(function (mL, R0) {
                                if (mL.tid === mE) {
                                    mf = R0;
                                }
                            });
                            var mc;
                            var mZ = {
                                replayType: mG,
                                selectedIndex: mf,
                                replayData:
                                    ((mc = mC),
                                    mc.map(function (mL) {
                                        return mL.gd;
                                    })),
                            };
                            if (ms) {
                                ms(function () {
                                    D7.context.emit("Analytics.Event", {
                                        actionName: "StartReplay",
                                    });
                                    D7.context.emit("Game.RequestReplay", mZ);
                                });
                            }
                        };
                    }
                    function PP(mF) {
                        var mG = (function (mc) {
                            return mc.betDetailsRaw.length > 1 && D7.replayVersion > 1;
                        })(mF);
                        var mC = x5(U(1), 2);
                        var ms = mC[0];
                        var mE = mC[1];
                        q(function () {
                            var mc = document.querySelectorAll(".replay-spin-label");
                            var mZ = document.querySelectorAll(".replay-spin-label-wrapper")[0].offsetWidth - 5;
                            mc.forEach(function (mL) {
                                if (mL.offsetWidth > mZ) {
                                    var R0 = mZ / mL.offsetWidth;
                                    if (R0 < ms) {
                                        mE(R0);
                                    }
                                }
                            });
                        });
                        var mf = {
                            justifyContent: mG ? "space-between" : "center",
                        };
                        if (D7.isEnableVRF() && D7.isPortrait) {
                            mf.bottom = `${DH(true)}px`;
                        }
                        return T.createElement(
                            "div",
                            {
                                id: "replay-buttons-container",
                                style: mf,
                            },
                            mG &&
                                T.createElement(PJ, {
                                    onClickCallback: PN(mF, "Round"),
                                    scale: ms,
                                    text: shell.I18n.t("History.HistoryReplayRound"),
                                }),
                            T.createElement(PJ, {
                                onClickCallback: PN(mF, "Spin"),
                                scale: ms,
                                text: shell.I18n.t("History.HistoryReplaySpin"),
                            })
                        );
                    }
                    if (typeof NodeList != "undefined" && NodeList.prototype && !NodeList.prototype.forEach) {
                        NodeList.prototype.forEach = Array.prototype.forEach;
                    }
                    var PI = R("BetDetailModel", function (mF) {
                        var mG = mF.bl;
                        var mC = mF.bt;
                        var ms = mF.gd;
                        var mE = mF.ib;
                        var mf = mF.tba;
                        var mc = mF.tid;
                        var mZ = mF.twla;
                        this.balance = mG;
                        this.balanceBefore = ms ? ms.blb : undefined;
                        this.betTime = mC;
                        this.transactionStartTime = ms ? ms.tst : undefined;
                        this.isBot = mE;
                        this.totalBetAmount = mf;
                        this.transactionId = mc;
                        this.totalWinLossAmount = mZ;
                        this.gameDetail = JSON.parse(JSON.stringify(ms));
                        var mL = +(Math.round((this.totalBetAmount + this.totalWinLossAmount) * 100) / 100).toFixed(2);
                        var R0 = ms ? ms.tw : undefined;
                        this.totalWinAmount = mL !== R0 ? mL : R0;
                    });
                    var Pm = {
                        position: "absolute",
                    };
                    var PR = {
                        position: "absolute",
                        maskRepeat: "no-repeat",
                        WebkitMaskRepeat: "no-repeat",
                    };
                    var Pl = {
                        width: "65px",
                        height: "71px",
                    };
                    var Pu = {
                        width: "73px",
                        height: "83px",
                    };
                    function PT(mF) {
                        var mG = URL.createObjectURL(D7.getImageMaskWithBlob("img/bar_shield_logo.png"));
                        var mC = x1(x1(x1({}, PR), Pl), {
                            maskImage: `url('${mG}')`,
                            WebkitMaskImage: `url('${mG}')`,
                        });
                        var ms = x1(x1(x1({}, Pm), Pl), {
                            backgroundImage: `url('${mG}')`,
                        });
                        var mE = URL.createObjectURL(D7.getImageMaskWithBlob("img/bar_shield_golden_frame.png"));
                        var mf = x1(x1(x1({}, PR), Pu), {
                            maskImage: `url('${mE}')`,
                            WebkitMaskImage: `url('${mE}')`,
                        });
                        var mc = x1(x1(x1({}, Pm), Pu), {
                            backgroundImage: `url('${mE}')`,
                        });
                        q(function () {
                            return function () {
                                URL.revokeObjectURL(mG);
                                URL.revokeObjectURL(mE);
                            };
                        }, []);
                        var mZ = D7.isPortrait ? "gh-vrf-bar-logo-scale" : "gh-vrf-bar-logo-scale-h";
                        return T.createElement(
                            "div",
                            {
                                className: mZ,
                                style: mF.containerStyle,
                            },
                            T.createElement(
                                "div",
                                {
                                    style: mc,
                                },
                                T.createElement(
                                    "div",
                                    {
                                        style: mf,
                                    },
                                    T.createElement("div", {
                                        className: `gh_vrf_bar_sprite gh_bar_shield_golden_frame_shine gh-vrf-bar-frame-shine`,
                                    })
                                )
                            ),
                            T.createElement(
                                "div",
                                {
                                    style: ms,
                                },
                                T.createElement(
                                    "div",
                                    {
                                        style: mC,
                                    },
                                    T.createElement("div", {
                                        className: `gh_vrf_bar_sprite gh_bar_shield_pg_shine gh-vrf-bar-logo-shine`,
                                    })
                                )
                            )
                        );
                    }
                    var Pd = {
                        container: {
                            position: "absolute",
                            bottom: "20px",
                            backgroundColor: "#434350",
                            boxShadow: "0 0 24px 0 rgba(0,0,0,0.20)",
                            borderRadius: "8px",
                            width: "calc(100% - 32px)",
                            height: "58px",
                            overflow: "hidden",
                            transition: "height .5s ease-out .1s",
                            pointerEvents: "auto",
                        },
                        containerExpanded: {
                            boxShadow: "0 0 24px 0 rgba(0,0,0,0.40)",
                        },
                        barContent: {
                            width: "100%",
                            height: "58px",
                            display: "flex",
                            alignItems: "center",
                        },
                        iconContainer: {
                            display: "flex",
                            transform: "scale(0.333)",
                            overflow: "visible",
                            alignItems: "center",
                            justifyContent: "center",
                        },
                        textDesc: {
                            fontSize: "10px",
                            color: "#FFFFFF",
                            lineHeight: "12px",
                            flex: 1,
                            display: "flex",
                            flexDirection: "row",
                        },
                        arrowSize: {
                            width: "20px",
                            height: "20px",
                            padding: "0px 16px",
                        },
                        arrowTint: {
                            backgroundColor: "#353541",
                            borderRadius: "50%",
                            height: "20px",
                            width: "20px",
                        },
                        arrowPos: {
                            transform: "scale(0.3) translate(-17px, -21px)",
                        },
                        arrowBorder: {
                            borderColor: "#6b6b74",
                            borderWidth: "0 3px 3px 0",
                        },
                        lockerSize: {
                            width: "10px",
                            height: "10px",
                            opacity: 0.5,
                        },
                        lockerSpriteImage: {
                            transformOrigin: "top left",
                            transform: "scale(0.27)",
                        },
                        barShieldAnim: {
                            width: "32px",
                            height: "32px",
                            display: "flex",
                            justifyContent: "center",
                            padding: "0px 2px 0px 13px",
                        },
                        barTitle: {
                            padding: "0px 0px 4px 8px",
                        },
                        searchBar: {
                            backgroundColor: "rgba(255,255,255,0.1)",
                            borderRadius: "14px",
                            padding: "0px 10px",
                            width: "fit-content",
                            maxWidth: "200px",
                            height: "20px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            direction: "ltr",
                        },
                        linkText: {
                            color: "#FFFFFF",
                            fontSize: "10px",
                            lineHeight: "12px",
                            paddingLeft: "4px",
                            overflow: "hidden",
                        },
                    };
                    var Pq = !D7.isPortrait;
                    if (Pq) {
                        Object.assign(Pd.container, {
                            bottom: "30px",
                            borderRadius: "14px",
                            width: "calc(100% - 60px)",
                            height: "106px",
                        });
                        Object.assign(Pd.barContent, {
                            height: "106px",
                        });
                        Object.assign(Pd.iconContainer, {
                            transform: "scale(0.666)",
                        });
                        Object.assign(Pd.textDesc, {
                            fontSize: "20px",
                            lineHeight: "26px",
                        });
                        Object.assign(Pd.arrowSize, {
                            width: "40px",
                            height: "40px",
                            padding: "0px 26px",
                        });
                        Object.assign(Pd.arrowTint, {
                            height: "40px",
                            width: "40px",
                        });
                        Object.assign(Pd.arrowPos, {
                            transform: "scale(0.6) translate(8px, 4px)",
                        });
                        Object.assign(Pd.lockerSize, {
                            width: "20px",
                            height: "20px",
                        });
                        Object.assign(Pd.lockerSpriteImage, {
                            transform: "scale(0.5555)",
                        });
                        Object.assign(Pd.barShieldAnim, {
                            width: "68px",
                            height: "68px",
                            padding: "0px 12px 0px 20px",
                        });
                        Object.assign(Pd.barTitle, {
                            padding: "6px 10px 6px 0px",
                        });
                        Object.assign(Pd.searchBar, {
                            borderRadius: "23px",
                            width: "fit-content",
                            height: "46px",
                            padding: "0px 20px",
                            maxWidth: "500px",
                        });
                        Object.assign(Pd.linkText, {
                            fontSize: "20px",
                            lineHeight: "26px",
                            paddingLeft: "10px",
                        });
                    }
                    if (shell.isRTLLanguage()) {
                        Object.assign(Pd.barShieldAnim, {
                            padding: Pq ? "0px 12px 0px 20px" : "0px 13px 0px 2px",
                        });
                        Object.assign(Pd.barTitle, {
                            padding: Pq ? "6px 0px 6px 10px" : "0px 8px 4px 0px",
                        });
                        Object.assign(Pd.textDesc, {
                            direction: "rtl",
                        });
                    }
                    var Ph = S(function (mF, mG) {
                        var mC = x5(U(!!mF.defaultIsExpanded), 2);
                        var ms = mC[0];
                        var mE = mC[1];
                        var mf = x5(U(0), 2);
                        var mc = mf[0];
                        var mZ = mf[1];
                        var mL = H(null);
                        var R0 = H(null);
                        var R1 = H(false);
                        z(mG, function () {
                            return {
                                updateState: function (R7) {
                                    if (R7.arrowAnimType !== undefined) {
                                        mZ(R7.arrowAnimType);
                                    }
                                    if (R7.isExpended !== undefined) {
                                        mE(R7.isExpended);
                                    }
                                },
                            };
                        });
                        q(
                            function () {
                                if (R1.current) {
                                    if (ms) {
                                        mL.current.style.height = `${mF.expandableHeight || 135}px`;
                                        mL.current.style.boxShadow = Pd.containerExpanded.boxShadow;
                                        if (mc === 1) {
                                            R0.current.className = "gh-arrow-anim-up";
                                        } else if (mc === 2) {
                                            R0.current.className = "gh-arrow-rotate-up";
                                        }
                                    } else {
                                        mL.current.style.height = Pd.container.height;
                                        mL.current.style.boxShadow = Pd.container.boxShadow;
                                        if (mc === 1) {
                                            R0.current.className = "gh-arrow-anim-down";
                                        } else if (mc === 2) {
                                            R0.current.className = "gh-arrow-rotate-down";
                                        }
                                    }
                                } else {
                                    if (mc === 0 && ms) {
                                        R0.current.className = "gh-arrow-default-up";
                                    } else if (!(mc !== 0 || ms)) {
                                        R0.current.className = "gh-arrow-default-down";
                                    }
                                    R1.current = true;
                                }
                            },
                            [ms]
                        );
                        var R2 = Object.assign({}, Pd.container);
                        if (ms) {
                            Object.assign(R2, {
                                height: `${mF.expandableHeight || 135}px`,
                                boxShadow: "0 0 24px 0 rgba(0,0,0,0.40)",
                            });
                        }
                        var R3;
                        var R4;
                        var R5;
                        var R6 = [
                            T.createElement(
                                "div",
                                {
                                    key: "barSheildAnim",
                                    style: Pd.barShieldAnim,
                                },
                                T.createElement(PT, {
                                    containerStyle: Pd.iconContainer,
                                })
                            ),
                            ((R4 = x1({}, Pd.textDesc)),
                            (R5 = x1({}, Pd.barTitle)),
                            mF.barLayout === 0
                                ? ((R4.flexDirection = "row"), (R4.alignItems = "center"))
                                : ((R4.flexDirection = "column"),
                                  (R4.justifyContent = "center"),
                                  Pq && (R5.padding = shell.isRTLLanguage() ? "6px 16px 6x 10px" : "6px 10px 6px 16px")),
                            T.createElement(
                                "div",
                                {
                                    key: "textDesc",
                                    style: R4,
                                },
                                T.createElement("div", {
                                    style: R5,
                                    dangerouslySetInnerHTML: {
                                        __html: mF.barTitle,
                                    },
                                }),
                                T.createElement(
                                    "div",
                                    {
                                        style: Pd.searchBar,
                                    },
                                    T.createElement(
                                        "div",
                                        {
                                            style: Pd.lockerSize,
                                        },
                                        T.createElement("div", {
                                            className: "gh_vrf_bar_sprite gh_locker",
                                            style: Pd.lockerSpriteImage,
                                        })
                                    ),
                                    T.createElement(
                                        "span",
                                        {
                                            style: Pd.linkText,
                                        },
                                        D7.vrd
                                    )
                                )
                            )),
                            ((R3 = Object.assign({}, Pd.arrowSize)),
                            T.createElement(
                                "div",
                                {
                                    key: "arrow",
                                    ref: R0,
                                    style: R3,
                                },
                                T.createElement(
                                    "div",
                                    {
                                        style: Pd.arrowTint,
                                    },
                                    T.createElement(
                                        "div",
                                        {
                                            className: "gh-angle-wrapper",
                                            style: Pd.arrowPos,
                                        },
                                        T.createElement("div", {
                                            className: "gh-angle-horizontal angle-down",
                                            style: Pd.arrowBorder,
                                        })
                                    )
                                )
                            )),
                        ];
                        if (shell.isRTLLanguage()) {
                            R6 = R6.reverse();
                        }
                        return T.createElement(
                            "div",
                            {
                                style: R2,
                                ref: mL,
                            },
                            T.createElement(
                                "div",
                                {
                                    className: xd,
                                    style: Pd.barContent,
                                    onClick: function () {
                                        var R7 = !ms;
                                        mZ(1);
                                        mE(R7);
                                        mF.onButtonClicked(R7);
                                    },
                                },
                                R6
                            ),
                            mF.children
                        );
                    });
                    Ph.displayName = "VRFBar";
                    var PH = shell.I18n;
                    var PU = {
                        container: {
                            height: "inherit",
                            width: "inherit",
                            position: "absolute",
                            bottom: 0,
                            pointerEvents: "none",
                            zIndex: 4,
                            transform: "translateZ(1px)",
                        },
                        barPosition: {
                            backgroundColor: "rgb(41, 41, 52)",
                            position: "absolute",
                            width: "100%",
                            height: "98px",
                            bottom: "0px",
                            display: "flex",
                            justifyContent: "center",
                        },
                        linkContainer: {
                            display: "flex",
                            width: "100%",
                            flexDirection: "column",
                            alignItems: "center",
                        },
                        content: {
                            width: "calc(100% - 32px)",
                            height: "32px",
                            background: "#3E3E4A",
                            borderRadius: "4px",
                            display: "flex",
                            alignItems: "center",
                        },
                        contentDescLeft: {
                            fontSize: "10px",
                            lineHeight: "12px",
                            color: "rgba(255,255,255,0.5)",
                            paddingLeft: "14px",
                        },
                        contentDescRight: {
                            fontSize: "10px",
                            lineHeight: "12px",
                            color: "#FFFFFF",
                        },
                        contentSeperator: {
                            backgroundColor: "#FFFFFF",
                            width: "1px",
                            height: "12px",
                            opacity: 0.08,
                            margin: "0px 14px",
                        },
                        bottomContent: {
                            display: "flex",
                            width: "calc(100% - 32px)",
                            justifyContent: "center",
                            alignItems: "center",
                            paddingBottom: "10px",
                            paddingTop: "10px",
                        },
                        bottomContentLeft: {
                            flex: 1,
                        },
                        bottomContentDesc1: {
                            opacity: 0.5,
                            color: "#FFFFFF",
                            fontSize: "10px",
                            lineHeight: "12px",
                        },
                        bottomContentDesc2: {
                            color: "#F5AC58",
                            fontSize: "10px",
                            lineHeight: "12px",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            width: "200px",
                            textOverflow: "ellipsis",
                            direction: "ltr",
                        },
                        buttonVerify: {
                            backgroundColor: "#F5AC58",
                            borderRadius: "20px",
                            fontSize: "11px",
                            color: "#FFFFFF",
                            textAlign: "center",
                            lineHeight: "30px",
                            width: "144px",
                            height: "30px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        },
                        spriteImage: {
                            transformOrigin: "top left",
                            transform: "scale(0.4)",
                        },
                        buttonCopy: {
                            width: "16px",
                            height: "16px",
                        },
                        copyToast: {
                            position: "absolute",
                            backgroundColor: "#30303C",
                            boxShadow: "0 6px 6px 0 rgba(0, 0, 0, 0.10)",
                            borderRadius: "4px",
                            fontSize: "10px",
                            lineHeight: "24px",
                            textAlign: "center",
                            padding: "0px 12px",
                            top: "66px",
                            right: "16px",
                            color: "#FFFFFF",
                        },
                    };
                    function Pg(mF) {
                        var mG = x5(U(true), 2);
                        var mC = mG[0];
                        var ms = mG[1];
                        var mE = x5(U(0), 2);
                        var mf = mE[0];
                        var mc = mE[1];
                        var mZ = x5(U(false), 2);
                        var mL = mZ[0];
                        var R0 = mZ[1];
                        var R1 = H();
                        var R2 = H(false);
                        var R3 = H(null);
                        var R4 = H({
                            id1: null,
                            id2: null,
                        });
                        q(function () {
                            P6.set("isDetailPageScroll", false);
                            var RI = P6.observe("isDetailPageScroll", function (Rm) {
                                if (Rm) {
                                    R1.current.updateState({
                                        isExpended: false,
                                        arrowAnimType: 2,
                                    });
                                }
                            });
                            return function () {
                                m.clearTimeout(R4.current.id1);
                                m.clearTimeout(R4.current.id2);
                                RI();
                            };
                        }, []);
                        q(
                            function () {
                                if (R2.current) {
                                    R3.current.className = mL ? "gh-copy-anim-default gh-copy-anim-show" : "gh-copy-anim-default gh-copy-anim-hide";
                                } else {
                                    R2.current = true;
                                }
                            },
                            [mL]
                        );
                        var R5 = D7.getVRFLink(mF.selectedTransactionId);
                        var R6 = x1(x1({}, PU.bottomContentDesc2), {
                            color: D7.appearanceHelper.themeColor,
                        });
                        var R7 = x1(x1({}, PU.buttonVerify), {
                            backgroundColor: D7.appearanceHelper.themeColor,
                        });
                        function R8() {
                            mc(2);
                        }
                        function R9() {
                            mc(0);
                        }
                        function Rx() {
                            Dh(R5);
                            R0(true);
                            R4.current.id2 = m.setTimeout(function () {
                                R0(false);
                            }, 2000);
                        }
                        var RD = DU(PH.t("History.HistoryVrfBarTitle2"), D7.appearanceHelper.themeColor);
                        var RJ = x1(x1({}, PU.barPosition), {
                            backgroundColor: D7.appearanceHelper.footerBarColor,
                        });
                        var RN = x1({}, PU.content);
                        var RP = x1({}, PU.contentDescLeft);
                        if (shell.isRTLLanguage()) {
                            RN.direction = "rtl";
                            RP.paddingLeft = "0px";
                            RP.paddingRight = "14px";
                        }
                        return T.createElement(
                            "div",
                            {
                                style: PU.container,
                            },
                            T.createElement(
                                "div",
                                {
                                    key: "verification",
                                    style: RJ,
                                },
                                T.createElement(
                                    Ph,
                                    {
                                        ref: R1,
                                        defaultIsExpanded: mC,
                                        expandableHeight: 140,
                                        barTitle: RD,
                                        onButtonClicked: function (RI) {
                                            P6.set("isDetailPageScroll", false);
                                            ms(RI);
                                        },
                                    },
                                    T.createElement(
                                        "div",
                                        {
                                            style: PU.linkContainer,
                                        },
                                        T.createElement(
                                            "div",
                                            {
                                                style: RN,
                                            },
                                            T.createElement(
                                                "div",
                                                {
                                                    style: RP,
                                                },
                                                PH.t("History.HistoryVrfTransID")
                                            ),
                                            T.createElement("div", {
                                                style: PU.contentSeperator,
                                            }),
                                            T.createElement(
                                                "div",
                                                {
                                                    style: PU.contentDescRight,
                                                },
                                                mF.selectedTransactionId
                                            )
                                        ),
                                        mf !== 2
                                            ? T.createElement(
                                                  "div",
                                                  {
                                                      style: PU.bottomContent,
                                                  },
                                                  T.createElement(
                                                      "div",
                                                      {
                                                          id: "gh-vrf-btn",
                                                          className: xd,
                                                          style: R7,
                                                          onClick: function () {
                                                              if (mf !== 1) {
                                                                  mc(1);
                                                                  if (m.open(R5, "_blank")) {
                                                                      m.dataLayer.push({
                                                                          event: "verify_open_success",
                                                                      });
                                                                      R4.current.id1 = m.setTimeout(R9, 2000);
                                                                  } else {
                                                                      m.dataLayer.push({
                                                                          event: "verify_open_failed",
                                                                      });
                                                                      R4.current.id1 = m.setTimeout(R8, 2000);
                                                                  }
                                                              }
                                                          },
                                                      },
                                                      mf === 1
                                                          ? T.createElement(
                                                                T.Fragment,
                                                                null,
                                                                T.createElement("div", {
                                                                    className: "gh-btn-loading",
                                                                }),
                                                                T.createElement("div", {
                                                                    className: "gh-btn-loading",
                                                                }),
                                                                T.createElement("div", {
                                                                    className: "gh-btn-loading",
                                                                })
                                                            )
                                                          : PH.t("History.HistoryVrfBtn")
                                                  )
                                              )
                                            : (function () {
                                                  var RI = x1({}, PU.bottomContentLeft);
                                                  if (shell.isRTLLanguage()) {
                                                      RI.direction = "rtl";
                                                  }
                                                  var Rm = [];
                                                  Rm.push(
                                                      T.createElement(
                                                          "div",
                                                          {
                                                              key: "bottomContentLeft",
                                                              style: RI,
                                                          },
                                                          T.createElement(
                                                              "div",
                                                              {
                                                                  style: PU.bottomContentDesc1,
                                                              },
                                                              PH.t("History.HistoryVrfBrowserErr")
                                                          ),
                                                          T.createElement(
                                                              "div",
                                                              {
                                                                  style: R6,
                                                              },
                                                              R5
                                                          )
                                                      )
                                                  );
                                                  Rm.push(
                                                      T.createElement(
                                                          "div",
                                                          {
                                                              key: "gh-copy-button",
                                                              id: "gh-copy-btn",
                                                              className: xd,
                                                              style: PU.buttonCopy,
                                                              onClick: Rx,
                                                          },
                                                          T.createElement("div", {
                                                              className: "gh_theme_sprite gh_ic_copy",
                                                              style: PU.spriteImage,
                                                          })
                                                      )
                                                  );
                                                  var RR = x1({}, PU.copyToast);
                                                  if (shell.isRTLLanguage()) {
                                                      Rm = Rm.reverse();
                                                      RR.right = null;
                                                      RR.left = "16px";
                                                  }
                                                  return T.createElement(
                                                      "div",
                                                      {
                                                          style: PU.bottomContent,
                                                      },
                                                      Rm,
                                                      T.createElement(
                                                          "div",
                                                          {
                                                              ref: R3,
                                                              className: "gh-copy-anim-default",
                                                              style: RR,
                                                          },
                                                          PH.t("History.HistoryVrfLinkCopied")
                                                      )
                                                  );
                                              })()
                                    )
                                )
                            )
                        );
                    }
                    var PS = x7.formatCurrency;
                    var Pv = x7.timeoutCallback;
                    function Pz(mF, mG) {
                        return new Promise(function (mC, ms) {
                            var mE = new plugin.Loader();
                            mE.onLoad = function (mf) {
                                mC(mf.response);
                            };
                            mE.onError = function (mf) {
                                ms(mf);
                            };
                            mE.load([
                                {
                                    src: mF,
                                    type: mG,
                                    maxAttemptCount: 0,
                                },
                            ]);
                        });
                    }
                    function PA(mF) {
                        if (D7.isMobile) {
                            if (D7.isPortrait) {
                                return 360;
                            }
                            var mG = document.getElementById("game-history-container");
                            return (mF || mG.offsetWidth) - 51;
                        }
                        return 360;
                    }
                    var Pb = (function (mF) {
                        function mG(mC) {
                            var ms = mF.call(this, mC) || this;
                            ms.xi = [];
                            ms._i = [];
                            ms.wi = false;
                            ms.ki = false;
                            ms.Me = D7.launchType === xx.CARD;
                            ms.fi = D7.isPortrait || D7.isMobile ? Dl() : 88;
                            var mE = document.getElementById("game-history-container");
                            var mf = D7.isPortrait || D7.isMobile ? mE.offsetHeight : 640;
                            var mc = PA();
                            var mZ = D7.isPortrait ? DH(true) : 0;
                            ms.state = {
                                viewState: xD.HistoryDetails,
                                betDetailModel: undefined,
                                isLoading: true,
                                gameDetailComponent: null,
                                pages: 0,
                                pageIndex: 0,
                                parentHeight: mf - ms.fi - mZ,
                                noAnimation: false,
                                detailsPageWidth: mc,
                            };
                            ms.Ci = ms.Ci.bind(ms);
                            ms.Si = ms.Si.bind(ms);
                            ms.Hi = ms.Hi.bind(ms);
                            ms.zi = ms.zi.bind(ms);
                            ms.ji = ms.ji.bind(ms);
                            ms.Di = ms.Di.bind(ms);
                            ms.Fi = ms.Fi.bind(ms);
                            ms.Ti = ms.Ti.bind(ms);
                            ms.Oi = function () {
                                return function () {
                                    return shell.I18n.t("History.HistoryNormalSpin");
                                };
                            };
                            ms.Ni = function () {
                                return function () {
                                    return shell.I18n.t("History.HistoryNormalSpin");
                                };
                            };
                            ms.Ii = function () {
                                return function () {
                                    return false;
                                };
                            };
                            ms.Li = function () {
                                return true;
                            };
                            return ms;
                        }
                        x0(mG, mF);
                        mG.prototype.componentDidUpdate = function (mC) {
                            if (mC.betDetailsRaw !== this.props.betDetailsRaw && mC.gameId === this.props.gameId && this.state.gameDetailComponent) {
                                var ms = DW[this.props.gameId];
                                this.Pi(ms);
                                this.setState({
                                    pageIndex: 0,
                                    noAnimation: true,
                                    viewState: xD.HistoryDetails,
                                });
                            }
                            if (!D7.isPortrait && this.state.betDetailModel && this.state.betDetailModel.length > 0) {
                                var mE = this.state.betDetailModel[this.state.pageIndex].transactionId;
                                P6.set("selectedTransactionId", mE);
                            }
                        };
                        mG.prototype.componentDidMount = function () {
                            D7.context.event.on("Shell.Scaled", this.pi, this);
                            this.Mi(this.props.gameId);
                            if (!D7.isPortrait) {
                                P6.set("selectedTransactionId", 0);
                            }
                        };
                        mG.prototype.componentWillUnmount = function () {
                            var mC = this.Ai;
                            var ms = this.Bi;
                            if (mC) {
                                mC();
                            }
                            if (ms) {
                                ms();
                            }
                            this.Ai = undefined;
                            this.Bi = undefined;
                            D7.context.event.off("Shell.Scaled", this.pi, this);
                        };
                        mG.prototype.Ri = function () {
                            var mC = this.state;
                            var ms = mC.pageIndex;
                            var mE = mC.betDetailModel;
                            if (this.state.isLoading || !mE || mE.length === 0 || !D7.isEnableVRF() || !D7.isPortrait) {
                                return null;
                            }
                            var mf = mE[ms].transactionId;
                            return T.createElement(Pg, {
                                selectedTransactionId: mf,
                            });
                        };
                        mG.prototype.render = function () {
                            var mC = this.state.viewState;
                            var ms = {
                                backgroundColor: D7.appearanceHelper.detailBackgroundColor,
                                color: D7.appearanceHelper.primaryFontColor,
                                overflow: mC === xD.HistoryFreeSpinDetails ? "" : "hidden",
                            };
                            var mE = shell.environment.getBrowserBaseType() === "Safari" ? "subpixel-antialiased" : "antialiased";
                            var mf =
                                shell.environment.getBrowserBaseType() === "Safari" && D7.isMobile
                                    ? {}
                                    : {
                                          WebkitFontSmoothing: mE,
                                      };
                            return T.createElement(
                                "div",
                                {
                                    id: "game-details-view-container",
                                    style: x1(x1({}, ms), mf),
                                },
                                this.Ei(this.state),
                                this.Vi(this.state),
                                this.Ri()
                            );
                        };
                        mG.prototype.Hi = function (mC) {
                            if (mC === -1) {
                                if (this.props.navLeftButtonCallback) {
                                    this.props.navLeftButtonCallback();
                                }
                            } else {
                                this.setState({
                                    pageIndex: mC,
                                    noAnimation: false,
                                });
                            }
                        };
                        mG.prototype.Si = function () {
                            var mC = this.state.pageIndex;
                            if (mC + 1 < this.state.pages) {
                                this.Hi(mC + 1);
                            }
                        };
                        mG.prototype.Ci = function () {
                            var mC = this.state.pageIndex;
                            if (mC - 1 > -1) {
                                this.Hi(mC - 1);
                            }
                        };
                        mG.prototype.Fi = function () {
                            var mC = this.state;
                            var ms = mC.viewState;
                            var mE = mC.pageIndex;
                            var mf = this.xi[mE];
                            var mc = this._i;
                            if (this.Ii(mc, mf)() && mc.length > 1) {
                                if (ms === xD.HistoryDetails) {
                                    this.setState({
                                        viewState: xD.HistoryFreeSpinDetails,
                                    });
                                } else if (ms === xD.HistoryFreeSpinDetails) {
                                    this.Ti(-1);
                                }
                            }
                        };
                        mG.prototype.Ti = function (mC) {
                            var ms = this.state.pageIndex;
                            var mE = mC > -1 ? this.xi.indexOf(mC) : ms;
                            this.setState({
                                viewState: xD.HistoryDetails,
                                pageIndex: mE,
                                noAnimation: true,
                            });
                        };
                        mG.prototype.zi = function () {
                            if (this.state.viewState === xD.HistoryFreeSpinDetails) {
                                this.setState({
                                    viewState: xD.HistoryDetails,
                                    noAnimation: true,
                                });
                            }
                            if (this.props.navLeftButtonCallback) {
                                this.props.navLeftButtonCallback();
                            }
                        };
                        mG.prototype.ji = function () {
                            if (this.props.navRightButtonCallback) {
                                this.props.navRightButtonCallback();
                            }
                        };
                        mG.prototype.Mi = function (mC) {
                            var ms = this;
                            var mE = this.props.betDetailsRaw.length > 5 ? 0.5 : 0;
                            this.Wi = undefined;
                            if (this.state.isLoading) {
                                this.Yi();
                            } else {
                                this.Gi();
                            }
                            this.Ai = Pv(mE)(function () {
                                ms.Ui(mC);
                            });
                        };
                        mG.prototype.Ui = function (mC) {
                            var ms = DW[mC];
                            var mE = DV[mC];
                            this.Ai = undefined;
                            if (ms) {
                                this.qi(ms);
                                this.Pi(ms);
                                if (mE) {
                                    this.setState({
                                        gameDetailComponent: mE,
                                    });
                                    this.Xi(0.25);
                                } else {
                                    this.Ki(ms);
                                }
                            } else {
                                this.Ji();
                            }
                        };
                        mG.prototype.Ji = function () {
                            var mC = this;
                            Pz(shell.getGameContext().resource.resolveUrl(`history/index.json`), plugin.LoadType.Json)
                                .then(function (ms) {
                                    var mE = ms;
                                    if (shell.isValidAssets(ms)) {
                                        mE = shell.parseAssets(ms);
                                    }
                                    mE.version;
                                    var mf;
                                    var mc = mE.assets;
                                    var mZ = mE.main;
                                    mf = mc.assets;
                                    shell.getGameContext().resource.addAssets(mf);
                                    return Pz(shell.getGameContext().resource.resolveUrl(mZ), plugin.LoadType.SystemScript);
                                })
                                .then(function (ms) {
                                    var mE = ms.GHBetDetailModule;
                                    DW[mC.props.gameId] = mE;
                                    mC.Zi(mE);
                                })
                                .catch(function () {
                                    var ms = shell.Error;
                                    var mE = shell.ClientError;
                                    var mf = new ms(mE.Domain, mE.GameLoadResourceError);
                                    DN("History Game Details Load Module Error", mf.domain, mf.code, undefined, `gameId: ${mC.props.gameId}`);
                                    mC.Wi = mf;
                                    mC.setState({
                                        gameDetailComponent: null,
                                    });
                                    mC.Qi();
                                });
                        };
                        mG.prototype.Zi = function (mC) {
                            DW[this.props.gameId] = mC;
                            this.qi(mC);
                            this.Pi(mC);
                            this.Ki(mC);
                        };
                        mG.prototype.Ki = function (mC) {
                            var ms = this;
                            mC.initialize(shell.getGameContext(), D7.operatorContext)
                                .then(function (mE) {
                                    DV[ms.props.gameId] = mE;
                                    ms.setState({
                                        gameDetailComponent: mE,
                                    });
                                    ms.Qi();
                                })
                                .catch(function (mE) {
                                    if (!(mE instanceof shell.Error)) {
                                        var mf = shell.Error;
                                        var mc = shell.ClientError;
                                        mE = new mf(mc.Domain, mc.GameLoadResourceError);
                                    }
                                    DN("History Game Details Init Module Error", mE.domain, mE.code, undefined, `gameId: ${ms.props.gameId}`);
                                    ms.Wi = mE;
                                    ms.setState({
                                        gameDetailComponent: null,
                                    });
                                    ms.Qi();
                                });
                        };
                        mG.prototype.qi = function (mC) {
                            this.Oi = function (ms, mE, mf) {
                                return function () {
                                    return mC.getNavTitle(ms, mE, mf);
                                };
                            };
                            this.Ni = function (ms, mE) {
                                return function (mf) {
                                    return mC.getAdditionalSpinsTitle(ms, mf, mE);
                                };
                            };
                            this.Ii = function (ms, mE) {
                                return function () {
                                    return mC.showNavArrowDropDown(ms, mE);
                                };
                            };
                            this.Li = function () {
                                return !mC.useDefaultTransactionDetailsHeader || mC.useDefaultTransactionDetailsHeader();
                            };
                        };
                        mG.prototype.$i = function () {
                            var mC = [];
                            this.props.betDetailsRaw.forEach(function (ms) {
                                var mE = new PI(ms);
                                mC.push(mE);
                            });
                            return mC;
                        };
                        mG.prototype.Pi = function (mC) {
                            var ms = this.$i();
                            var mE = this.$i();
                            var mf = [];
                            mE.forEach(function (mc, mZ) {
                                mf[mZ] = mZ;
                            });
                            if (mC.compileAllHistoryDataBecomePages) {
                                mE = mC.compileAllHistoryDataBecomePages(mE);
                            }
                            if (mC.compileAllHistoryDataForFreeSpinList) {
                                ms = mC.compileAllHistoryDataForFreeSpinList(ms);
                                mf.length = 0;
                                mE.forEach(function (mc, mZ) {
                                    if (isNaN(mc.customFreeSpinTitleIndex)) {
                                        ms.forEach(function (mL, R0) {
                                            if (mL.betTime <= mc.betTime) {
                                                mf[mZ] = R0;
                                            }
                                        });
                                    } else {
                                        mf[mZ] = mc.customFreeSpinTitleIndex;
                                    }
                                });
                            }
                            this.xi = mf;
                            this._i = ms;
                            this.setState({
                                betDetailModel: mE,
                                pages: mE.length,
                            });
                        };
                        mG.prototype.tn = function () {
                            var mC = shell.isRTLLanguage()
                                ? this.state.pages > 0 && this.state.pageIndex !== this.state.pages - 1
                                : this.state.pages > 0 && this.state.pageIndex !== 0;
                            var ms = shell.isRTLLanguage() ? this.Si : this.Ci;
                            if (mC) {
                                var mE = {
                                    top: !D7.isPortrait && D7.isMobile ? "50%" : "calc(50% - 85px)",
                                    backgroundColor: D7.appearanceHelper.pagesButtonBackgroundColor,
                                };
                                var mf = {
                                    borderColor: D7.appearanceHelper.pagesButtonArrowColor,
                                };
                                var mc = D7.isMobile ? "gh-angle-horizontal-mobile" : "gh-angle-horizontal";
                                return T.createElement(
                                    "div",
                                    {
                                        id: "game-details-left-arrow",
                                        key: "game-details-left-arrow",
                                        onClick: ms,
                                        style: mE,
                                    },
                                    T.createElement(
                                        "div",
                                        {
                                            className: "gh-angle-wrapper",
                                            style: {
                                                transform: "translateX(4px) scale(0.7)",
                                            },
                                        },
                                        T.createElement("div", {
                                            className: `${mc} angle-left`,
                                            style: mf,
                                        })
                                    )
                                );
                            }
                            return null;
                        };
                        mG.prototype.en = function () {
                            var mC = shell.isRTLLanguage()
                                ? this.state.pages > 0 && this.state.pageIndex !== 0
                                : this.state.pages > 0 && this.state.pageIndex !== this.state.pages - 1;
                            var ms = shell.isRTLLanguage() ? this.Ci : this.Si;
                            if (mC) {
                                var mE = {
                                    top: !D7.isPortrait && D7.isMobile ? "50%" : "calc(50% - 85px)",
                                    backgroundColor: D7.appearanceHelper.pagesButtonBackgroundColor,
                                };
                                var mf = {
                                    borderColor: D7.appearanceHelper.pagesButtonArrowColor,
                                };
                                var mc = D7.isMobile ? "gh-angle-horizontal-mobile" : "gh-angle-horizontal";
                                return T.createElement(
                                    "div",
                                    {
                                        id: "game-details-right-arrow",
                                        key: "game-details-right-arrow",
                                        onClick: ms,
                                        style: mE,
                                    },
                                    T.createElement(
                                        "div",
                                        {
                                            className: "gh-angle-wrapper",
                                            style: {
                                                transform: "translateX(-4px) scale(0.7)",
                                            },
                                        },
                                        T.createElement("div", {
                                            className: `${mc} angle-right`,
                                            style: mf,
                                        })
                                    )
                                );
                            }
                            return null;
                        };
                        mG.prototype.Ei = function (mC) {
                            var ms = mC.isLoading;
                            var mE = mC.pageIndex;
                            var mf = mC.viewState;
                            if (mC.gameDetailComponent && !ms && !this.Wi) {
                                var mc = this.xi[mE];
                                var mZ = this._i;
                                var mL = D7.isPortrait || D7.isMobile ? Dm() : 0;
                                var R0 = D7.isPortrait || D7.isMobile ? 62 : 88;
                                var R1 = this.Me ? "game-list-nav-vertical-card" : "";
                                var R2 = D7.appearanceHelper.navBarColor;
                                return T.createElement(
                                    "div",
                                    {
                                        id: "game-detail-view-navbar-container",
                                        key: "game-detail-view-navbar-container",
                                        className: R1,
                                        style: {
                                            height: `${R0}px`,
                                            paddingTop: `${mL}px`,
                                            backgroundColor: R2,
                                        },
                                    },
                                    T.createElement(
                                        "div",
                                        {
                                            style: {
                                                position: "absolute",
                                                zIndex: 4,
                                                height: "inherit",
                                                width: "inherit",
                                            },
                                        },
                                        T.createElement(J1, {
                                            showTitle: this.Oi(mZ, mc, shell.isRTLLanguage()),
                                            titleClickCallback: this.Fi,
                                            currentState: mf,
                                            currentCalendarType: undefined,
                                            currentCalendarState: undefined,
                                            leftButtonClickedCallback: this.zi,
                                            rightButtonClickedCallback: this.ji,
                                            showDropDownArrow: this.Ii(mZ, mc),
                                            betTime: mZ.length > 0 ? mZ[mc].betTime : 0,
                                            transactionStartTime: mZ.length > 0 ? mZ[mc].transactionStartTime : 0,
                                        })
                                    )
                                );
                            }
                        };
                        mG.prototype.mi = function (mC) {
                            var ms = mC.gameDetailComponent;
                            var mE = mC.pageIndex;
                            var mf = mC.betDetailModel;
                            var mc = mC.noAnimation;
                            var mZ = mC.detailsPageWidth;
                            var mL = D7.isPortrait || D7.isMobile ? 1 : 1.6875;
                            return T.createElement(Px, {
                                key: "game-detail-page-wrapper",
                                gameDetailComponent: ms,
                                betDetailsModel: mf,
                                pageIndex: mE,
                                updateIndexCallback: this.Hi,
                                style: {
                                    position: "absolute",
                                    height: this.state.parentHeight / mL,
                                },
                                noAnim: mc,
                                useDefaultTransactionHeader: this.Li(),
                                pageWidth: mZ,
                            });
                        };
                        mG.prototype.Di = function (mC, ms) {
                            return function () {
                                var mE = mC.betDetailsRaw;
                                var mf = mC.quitCallback;
                                var mc = ms.pageIndex;
                                var mZ = ms.betDetailModel;
                                if (D7.replayVersion && !D7.isApiReplay && mZ && mZ.length > 0) {
                                    var mL = mZ[mc].transactionId;
                                    return T.createElement(PP, {
                                        key: "game-replay-buttons-container",
                                        selectedTransactionId: mL,
                                        betDetailsRaw: mE,
                                        quitFunction: mf,
                                        gameId: mC.gameId,
                                    });
                                }
                            };
                        };
                        mG.prototype.nn = function (mC) {
                            var ms = this;
                            var mE = mC.pageIndex;
                            var mf = mC.viewState;
                            var mc = mC.parentHeight;
                            var mZ = [];
                            var mL = this._i;
                            mL.forEach(function (R2) {
                                var R3 = D7.historyShowWin ? R2.totalWinAmount : R2.totalWinLossAmount;
                                mZ.push(PS(R3));
                            });
                            var R0 = this.xi[mE];
                            var R1 = mc + (D7.isPortrait ? DH(true) : 0);
                            return T.createElement(
                                Q,
                                {
                                    key: "game-free-spin-list-view-transition",
                                    config: xl,
                                    items: mf,
                                    from: {
                                        bottom: "100%",
                                    },
                                    enter: {
                                        bottom: "0%",
                                    },
                                    leave: {
                                        bottom: "100%",
                                    },
                                },
                                function (R2) {
                                    return (
                                        R2 === xD.HistoryFreeSpinDetails &&
                                        function (R3) {
                                            return T.createElement(
                                                M.div,
                                                {
                                                    style: x1(x1({}, R3), {
                                                        left: "0",
                                                        position: "absolute",
                                                        width: "inherit",
                                                        height: R1,
                                                        zIndex: 5,
                                                        transform: "translate3d(0, 0, 0)",
                                                    }),
                                                },
                                                T.createElement(DE, {
                                                    key: "game-free-spin-list-view",
                                                    totalCount: mL.length,
                                                    currentSelectedIndex: R0,
                                                    winLostAmountArrary: mZ,
                                                    getTitleText: ms.Ni(mL, R0),
                                                    onClickCallback: ms.Ti,
                                                    onPageClickCallback: ms.Ti,
                                                    parentHeight: R1,
                                                })
                                            );
                                        }
                                    );
                                }
                            );
                        };
                        mG.prototype.Vi = function (mC) {
                            var ms = this;
                            var mE = mC.isLoading;
                            var mf = [];
                            if (!mC.gameDetailComponent || mE || this.Wi) {
                                if (!mE && this.Wi) {
                                    mf.push(
                                        T.createElement(DK, {
                                            key: "game-history-view-error",
                                            error: this.Wi,
                                            retryButtonCallback: function () {
                                                ms.Mi(ms.props.gameId);
                                            },
                                            closeButtonCallback: this.props.quitCallback,
                                            orientation: "port",
                                        })
                                    );
                                    return mf;
                                } else {
                                    mf.push(
                                        T.createElement(J2, {
                                            key: "loading-page",
                                            isHorizontal: !D7.isPortrait,
                                            isMobile: D7.isMobile,
                                            fromSide: true,
                                        })
                                    );
                                    return mf;
                                }
                            } else {
                                mf.push(this.mi(mC));
                                mf.push(this.tn());
                                mf.push(this.en());
                                mf.push(this.Di(this.props, this.state)());
                                mf.push(this.nn(mC));
                                return mf;
                            }
                        };
                        mG.prototype.pi = function (mC) {
                            var ms = mC.payload;
                            var mE = D7.isPortrait || D7.isMobile ? ms.height : 640;
                            var mf = D7.isPortrait ? DH(true) : 0;
                            var mc = mE - this.fi - mf;
                            var mZ = PA(ms.width);
                            this.setState({
                                parentHeight: mc,
                                detailsPageWidth: mZ,
                            });
                        };
                        mG.prototype.Gi = function () {
                            this.wi = false;
                            this.ki = false;
                            this.setState({
                                isLoading: true,
                            });
                            this.Yi();
                        };
                        mG.prototype.Yi = function (mC) {
                            var ms = this;
                            if (mC === undefined) {
                                mC = 1;
                            }
                            this.Bi = Pv(mC)(function () {
                                ms.wi = true;
                                ms.Qi();
                            });
                        };
                        mG.prototype.Xi = function (mC) {
                            if (mC === undefined) {
                                mC = 0;
                            }
                            var ms = this.Bi;
                            if (ms) {
                                ms();
                            }
                            this.Bi = undefined;
                            this.Yi(mC);
                        };
                        mG.prototype.Qi = function () {
                            this.ki = true;
                            if (this.wi && this.ki) {
                                this.setState({
                                    isLoading: false,
                                });
                            }
                        };
                        return mG;
                    })(T.PureComponent);
                    var PX = shell.I18n;
                    function PB(mF) {
                        var mG = D7.displayConfig;
                        var mC = mG.listHeaderLabelCol1;
                        var ms = mG.listHeaderLabelCol2;
                        var mE = mG.listHeaderLabelCol3;
                        var mf = mG.listHeaderLabelCol4;
                        var mc = [];
                        if (mC) {
                            mc.push(
                                T.createElement(
                                    "div",
                                    {
                                        className: "game-list-nav-table-item",
                                        key: "game-list-nav-table-item-custom",
                                    },
                                    mC
                                )
                            );
                        } else {
                            mc.push(
                                T.createElement(
                                    "div",
                                    {
                                        className: "game-list-nav-table-item",
                                        key: "game-list-nav-table-item-time",
                                    },
                                    PX.t("History.HistoryMainPageTime")
                                )
                            );
                            mc.push(
                                T.createElement(
                                    "div",
                                    {
                                        className: "game-list-nav-table-item",
                                        key: "game-list-nav-table-item-date",
                                    },
                                    DJ(new Date().getTime())
                                )
                            );
                        }
                        var mZ = ms || PX.t("History.HistoryMainSpinTypeTime");
                        var mL =
                            mE ||
                            (mF.currencySymbol ? `${PX.t("History.HistoryMainPagePayout")}(${mF.currencySymbol})` : `${PX.t("History.HistoryMainPagePayout")}`);
                        var R0 = PX.t(D7.historyShowWin ? "History.HistoryRecordTotalWin" : "History.HistoryMainPageWin");
                        var R1 = mf || (mF.currencySymbol ? `${R0}(${mF.currencySymbol})` : R0);
                        var R2 = D7.isPortrait
                            ? "game-list-nav-table-header-vertical"
                            : D7.isMobile
                            ? "game-list-nav-table-header-horizontal-mobile"
                            : "game-list-nav-table-header-horizontal";
                        var R3 = {
                            color: D7.appearanceHelper.listHeaderFontColor,
                            backgroundColor: D7.appearanceHelper.listHeaderColor,
                        };
                        if (shell.isRTLLanguage()) {
                            R3 = x1(x1({}, R3), {
                                paddingLeft: "10px",
                                paddingRight: "20px",
                                direction: "rtl",
                            });
                        }
                        return T.createElement(
                            "div",
                            {
                                id: "game-list-nav-table-header",
                                className: R2,
                                style: R3,
                            },
                            T.createElement(
                                "div",
                                {
                                    id: "game-list-nav-table-item-container",
                                },
                                mc,
                                " "
                            ),
                            T.createElement(
                                "div",
                                {
                                    className: "game-list-nav-table-item",
                                },
                                " ",
                                mZ
                            ),
                            T.createElement(
                                "div",
                                {
                                    className: "game-list-nav-table-item",
                                },
                                mL
                            ),
                            T.createElement(
                                "div",
                                {
                                    className: "game-list-nav-table-item",
                                },
                                R1
                            )
                        );
                    }
                    var Py = shell.I18n;
                    var Pa = (function (mF) {
                        function mG(mC) {
                            var ms = mF.call(this, mC) || this;
                            ms.rn = ms.rn.bind(ms);
                            ms.an = ms.an.bind(ms);
                            return ms;
                        }
                        x0(mG, mF);
                        mG.prototype.rn = function () {
                            if (this.props.onItemClicked) {
                                this.props.onItemClicked(this.props.calendarType);
                            }
                        };
                        mG.prototype.render = function () {
                            var mC = D7.isPortrait
                                ? "calendar-item-container-vertical calendar-item-container"
                                : "calendar-item-container-horizontal calendar-item-container";
                            return T.createElement(
                                "div",
                                {
                                    className: mC,
                                    onClick: this.rn,
                                    style: {
                                        backgroundColor: D7.appearanceHelper.calendarBackgroundColor,
                                    },
                                },
                                T.createElement(
                                    "div",
                                    {
                                        className: "calendar-item-label",
                                        style: this.sn(),
                                    },
                                    this.an()
                                )
                            );
                        };
                        mG.prototype.sn = function () {
                            return {
                                color:
                                    this.props.calendarType === this.props.currentCalendarType
                                        ? D7.isPortrait
                                            ? D7.appearanceHelper.themeColor
                                            : D7.appearanceHelper.highlightFontColor
                                        : D7.appearanceHelper.primaryFontColor,
                            };
                        };
                        mG.prototype.an = function () {
                            var mC;
                            switch (this.props.calendarType) {
                                case 1:
                                default:
                                    mC = Py.t("History.HistoryCalenderToday");
                                    break;
                                case 2:
                                    mC = Py.t("History.HistoryCalenderWeek");
                                    break;
                                case 3:
                                    mC = Py.t("History.HistoryCalenderCustom");
                            }
                            return mC;
                        };
                        return mG;
                    })(T.Component);
                    var Pj = (function (mF) {
                        function mG(mC) {
                            var ms = mF.call(this, mC) || this;
                            var mE = document.getElementById("game-history-container");
                            ms.state = {
                                backgroundHeight: mE.offsetHeight - Dl(),
                            };
                            ms.ln = ms.ln.bind(ms);
                            ms.cn = ms.cn.bind(ms);
                            ms.hn = ms.hn.bind(ms);
                            ms.G = ms.G.bind(ms);
                            return ms;
                        }
                        x0(mG, mF);
                        mG.prototype.componentDidMount = function () {
                            D7.context.event.on("Shell.Scaled", this.pi, this);
                        };
                        mG.prototype.componentWillUnmount = function () {
                            D7.context.event.off("Shell.Scaled", this.pi, this);
                        };
                        mG.prototype.ln = function () {
                            this.props.onChangeCalendarTypeCallback(1);
                        };
                        mG.prototype.cn = function () {
                            this.props.onChangeCalendarTypeCallback(2);
                        };
                        mG.prototype.hn = function () {
                            this.props.onCalendarCustomClicked();
                        };
                        mG.prototype.G = function (mC, ms) {
                            this.props.model.calendarCustomDateConfig = {
                                startDate: mC,
                                endDate: ms,
                            };
                            this.props.onChangeCalendarTypeCallback(3);
                        };
                        mG.prototype.render = function () {
                            if (this.props.currentCalendarState === xJ.CUSTOM) {
                                return T.createElement(
                                    "div",
                                    {
                                        id: "calendar-view-background",
                                        style: {
                                            height: `${this.state.backgroundHeight}px`,
                                        },
                                    },
                                    this.un()
                                );
                            } else {
                                return T.createElement(
                                    "div",
                                    {
                                        id: "calendar-view-background",
                                        style: {
                                            height: `${this.state.backgroundHeight}px`,
                                        },
                                    },
                                    this.dn()
                                );
                            }
                        };
                        mG.prototype.dn = function () {
                            return T.createElement(
                                "div",
                                {
                                    id: "calendar-selection-container",
                                    key: "calendar-selection-container",
                                    style: {
                                        backgroundColor: D7.appearanceHelper.calendarBackgroundColor,
                                    },
                                },
                                T.createElement(Pa, {
                                    calendarType: 1,
                                    currentCalendarType: this.props.currentCalendarType,
                                    onItemClicked: this.ln,
                                }),
                                T.createElement("div", {
                                    className: "calendar-line-separator",
                                    style: {
                                        backgroundColor: D7.appearanceHelper.calendarSeparatorBackgroundColor,
                                    },
                                }),
                                T.createElement(Pa, {
                                    calendarType: 2,
                                    currentCalendarType: this.props.currentCalendarType,
                                    onItemClicked: this.cn,
                                }),
                                T.createElement("div", {
                                    className: "calendar-line-separator",
                                    style: {
                                        backgroundColor: D7.appearanceHelper.calendarSeparatorBackgroundColor,
                                    },
                                }),
                                T.createElement(Pa, {
                                    calendarType: 3,
                                    currentCalendarType: this.props.currentCalendarType,
                                    onItemClicked: this.hn,
                                })
                            );
                        };
                        mG.prototype.un = function () {
                            return T.createElement(xq.CalendarCustomView, {
                                key: "calendar-custom-view",
                                isRTL: shell.isRTLLanguage(),
                                caseType: this.$(),
                                themeColor: D7.appearanceHelper.calendarColor,
                                backgroundColor: D7.appearanceHelper.calendarBackgroundColor,
                                onConfirmClicked: this.G,
                            });
                        };
                        mG.prototype.$ = function () {
                            if (D7.launchType === xx.CARD) {
                                return xq.CaseType.CARD_GAME;
                            } else {
                                return xq.CaseType.SLOT_GAME;
                            }
                        };
                        mG.prototype.pi = function (mC) {
                            var ms = mC.payload.height - Dl();
                            this.setState({
                                backgroundHeight: ms,
                            });
                        };
                        return mG;
                    })(T.Component);
                    function Pk(mF) {
                        var mG;
                        var mC = D7.isPortrait || D7.isMobile ? "14px" : "24px";
                        var ms = D7.isPortrait || D7.isMobile ? "0.291" : "0.5";
                        mG = (function () {
                            for (var mf = [], mc = 0; mc < arguments.length; mc++) {
                                mf[mc] = arguments[mc];
                            }
                            var mZ = [];
                            mf.forEach(function (mL) {
                                var R0 = mL();
                                if (R0) {
                                    mZ.push(R0);
                                }
                            });
                            return mZ;
                        })(
                            function () {
                                return (function (mf) {
                                    var mc = mf.gameElements;
                                    if (mc.indexOf(xR.BonusWallet) > -1 || mc.indexOf(xR.FreeGameWallet) > -1) {
                                        return T.createElement(
                                            "div",
                                            {
                                                className: "game-list-item-image-container",
                                                key: "game-list-item-icon-gift",
                                            },
                                            T.createElement("div", {
                                                className: "gh_theme_sprite gh_ic_nav_gift",
                                            })
                                        );
                                    } else {
                                        return null;
                                    }
                                })(mF);
                            },
                            function () {
                                return (function (mf) {
                                    if (mf.gameElements.indexOf(xR.JackpotBet) > -1) {
                                        return T.createElement(
                                            "div",
                                            {
                                                className: "game-list-item-image-container",
                                                key: "game-list-item-icon-jackpot",
                                            },
                                            T.createElement("div", {
                                                className: "gh_theme_sprite gh_ic_nav_jackpot",
                                            })
                                        );
                                    } else {
                                        return null;
                                    }
                                })(mF);
                            },
                            function () {
                                return (function (mf) {
                                    var mc = mf.gameElements;
                                    if (mc.indexOf(xR.ReBet) > -1 || mc.indexOf(xR.FreeBet) > -1) {
                                        return T.createElement(
                                            "div",
                                            {
                                                className: "game-list-item-image-container",
                                                key: "game-list-item-icon-respin",
                                            },
                                            T.createElement("div", {
                                                className: "gh_theme_sprite gh_ic_nav_free_spin",
                                            })
                                        );
                                    } else {
                                        return null;
                                    }
                                })(mF);
                            },
                            function () {
                                return (function (mf) {
                                    if (mf.gameElements.indexOf(xR.BonusBet) > -1) {
                                        return T.createElement(
                                            "div",
                                            {
                                                className: "game-list-item-image-container",
                                                key: "game-list-item-icon-feature",
                                            },
                                            T.createElement("div", {
                                                className: "gh_theme_sprite gh_ic_nav_bonus_game",
                                            })
                                        );
                                    } else {
                                        return null;
                                    }
                                })(mF);
                            },
                            function () {
                                return (function (mf) {
                                    var mc = mf.mainGameCollapseCount;
                                    var mZ = mf.freeSpinCollapseCount;
                                    if (mc > 0 || mZ > 0) {
                                        var mL = mZ > 0 ? ` ${mc}+${mZ}` : ` ${mc}`;
                                        var R0 = mZ > 0 ? "130px" : "100px";
                                        var R1 = D7.isPortrait ? "30px" : "34px";
                                        return T.createElement(
                                            "div",
                                            {
                                                className: "game-list-item-collapse-info",
                                                key: "game-list-item-icon-collapse",
                                                style: {
                                                    width: `${R0}`,
                                                    backgroundColor: "rgba(0, 0, 0, 0.26)",
                                                },
                                            },
                                            T.createElement(
                                                "div",
                                                {
                                                    className: "game-list-item-image-container",
                                                },
                                                T.createElement("div", {
                                                    className: "gh_theme_sprite gh_ic_nav_collapse",
                                                })
                                            ),
                                            T.createElement(
                                                "div",
                                                {
                                                    className: "game-list-item-collapse-info-label",
                                                    style: {
                                                        fontSize: R1,
                                                    },
                                                },
                                                mL
                                            )
                                        );
                                    }
                                    return null;
                                })(mF);
                            },
                            function () {
                                return (function (mf) {
                                    if (mf.gameElements.indexOf(xR.BaccaratSupersix) > -1) {
                                        return T.createElement(
                                            "div",
                                            {
                                                className: "game-list-item-image-container",
                                                key: "game-list-item-icon-super6",
                                            },
                                            T.createElement("div", {
                                                className: "gh_theme_sprite gh_ic_nav_super6",
                                            })
                                        );
                                    } else {
                                        return null;
                                    }
                                })(mF);
                            },
                            function () {
                                return (function (mf) {
                                    if (mf.gameElements.indexOf(xR.FreeHand) > -1) {
                                        return T.createElement(
                                            "div",
                                            {
                                                className: "game-list-item-image-container",
                                                key: "game-list-item-icon-freehand",
                                            },
                                            T.createElement("div", {
                                                className: "gh_theme_sprite gh_ic_nav_freehand",
                                            })
                                        );
                                    } else {
                                        return null;
                                    }
                                })(mF);
                            }
                        );
                        if (mG.length > 0) {
                            var mE = {
                                height: mC,
                                transform: `scale(${ms})`,
                            };
                            if (shell.isRTLLanguage()) {
                                mE = x1(x1({}, mE), {
                                    transformOrigin: "right top",
                                });
                            }
                            return T.createElement(
                                "div",
                                {
                                    className: "game-list-item-feature-container",
                                    key: "game-list-item-feature-container",
                                    style: mE,
                                },
                                mG
                            );
                        }
                        return null;
                    }
                    function PO(mF, mG) {
                        if (mG === undefined) {
                            mG = 14;
                        }
                        if (mF.length > mG) {
                            var mC = Math.floor(mF.length / 2);
                            return mF.slice(0, mC) + " " + mF.slice(mC, mF.length);
                        }
                        return mF;
                    }
                    var Pw = (function (mF) {
                        function mG(mC) {
                            var ms = mF.call(this, mC) || this;
                            ms.state = {
                                hover: false,
                                active: false,
                            };
                            ms.rn = ms.rn.bind(ms);
                            ms.fn = ms.fn.bind(ms);
                            ms.Fe = ms.Fe.bind(ms);
                            ms.Te = ms.Te.bind(ms);
                            ms.Oe = ms.Oe.bind(ms);
                            ms.ui = ms.ui.bind(ms);
                            ms.di = ms.di.bind(ms);
                            ms.gn = ms.gn.bind(ms);
                            ms.pn = ms.pn.bind(ms);
                            ms.mn = ms.mn.bind(ms);
                            ms.vn = ms.vn.bind(ms);
                            ms.yn = ms.yn.bind(ms);
                            ms.xn = ms.xn.bind(ms);
                            ms._n = ms._n.bind(ms);
                            return ms;
                        }
                        x0(mG, mF);
                        mG.prototype.render = function () {
                            var mC = this.props.betDetailsRaw;
                            var ms = D7.displayConfig;
                            var mE = ms.listContentLabelCol1;
                            var mf = ms.listContentLabelCol2;
                            var mc = ms.listContentLabelCol3;
                            var mZ = ms.listContentLabelCol4;
                            var mL = [];
                            if (mE) {
                                mL.push(
                                    T.createElement(
                                        "div",
                                        {
                                            id: "game-list-item",
                                            key: "game-list-item-custom",
                                        },
                                        mE(mC)
                                    )
                                );
                            } else {
                                mL.push(
                                    T.createElement(
                                        "div",
                                        {
                                            id: "game-list-item",
                                            key: "game-list-item-time",
                                        },
                                        this.props.time
                                    )
                                );
                                mL.push(
                                    T.createElement(
                                        "div",
                                        {
                                            id: "game-list-item",
                                            key: "game-list-item-date",
                                        },
                                        this.props.date
                                    )
                                );
                            }
                            var R0 = [];
                            if (mf) {
                                mL.push(
                                    T.createElement(
                                        "div",
                                        {
                                            id: "game-list-item",
                                            key: "game-list-item-custom",
                                        },
                                        mf(mC)
                                    )
                                );
                            } else {
                                var R1 = (function (RR) {
                                    var Rl = RR.isSelected;
                                    var Ru = RR.isHighlight;
                                    var RT = {
                                        color: D7.appearanceHelper.listItemFontColor,
                                        transition: "color 0.5s ease 0s",
                                        display: "inline-table",
                                    };
                                    if (Ru || Rl) {
                                        RT.transition = "";
                                        RT.color = Rl ? D7.appearanceHelper.listItemSelectedFontColor : D7.appearanceHelper.highlightFontColor;
                                    }
                                    return RT;
                                })(this.props);
                                var R2 = D7.isPortrait ? PO(this.props.transactionId.toString()) : this.props.transactionId.toString();
                                R0.push(
                                    T.createElement(
                                        "div",
                                        {
                                            className: "game-list-item",
                                            key: "game-list-item-transaction-id",
                                            id: `game-list-item-transaction-id-${this.props.index}`,
                                            style: R1,
                                            onMouseLeave: this.mn,
                                            onMouseDown: this.pn,
                                            onMouseUp: this.vn,
                                            onTouchStart: this._n,
                                            onTouchEnd: this.yn,
                                            onTouchMove: this.xn,
                                        },
                                        R2
                                    )
                                );
                                R0.push(this.wn());
                            }
                            var R3;
                            var R4;
                            var R5;
                            var R6;
                            var R7;
                            var R8;
                            var R9;
                            var Rx = mc ? mc(mC) : x7.formatCurrency(this.props.bet, "");
                            var RD = mZ ? mZ(mC) : x7.formatCurrency(this.props.profit, "");
                            R3 = this.props;
                            R4 = this.state;
                            R5 = R3.isSelected;
                            R6 = R3.index;
                            R7 = R4.hover;
                            R8 = R4.active;
                            R9 = {
                                color: D7.appearanceHelper.listItemFontColor,
                                background: R6 % 2 == 0 ? D7.appearanceHelper.listItemEvenColor : D7.appearanceHelper.listItemOddColor,
                            };
                            if (R5) {
                                R9.color = D7.appearanceHelper.listItemSelectedFontColor;
                                R9.background = D7.appearanceHelper.listItemSelectedColor;
                            } else if (R8) {
                                R9.background = D7.appearanceHelper.listItemPressedColor;
                            } else if (R7) {
                                R9.background = D7.appearanceHelper.listItemHoverColor;
                            }
                            var RJ = R9;
                            var RN = (function () {
                                var RR = shell.isRTLLanguage() ? "game-list-item-container-vertical-rtl" : "game-list-item-container-vertical";
                                var Rl = shell.isRTLLanguage()
                                    ? "game-list-item-container-horizontal-mobile-rtl"
                                    : "game-list-item-container-horizontal-mobile";
                                var Ru = shell.isRTLLanguage() ? "game-list-item-container-horizontal-rtl" : "game-list-item-container-horizontal";
                                switch (D7.launchType) {
                                    case xx.CARD:
                                        return `${RR} game-list-item-container-card`;
                                    case xx.GAME:
                                    case xx.SLOT:
                                        if (D7.isPortrait) {
                                            return RR;
                                        } else if (D7.isMobile) {
                                            return Rl;
                                        } else {
                                            return Ru;
                                        }
                                    default:
                                        return RR;
                                }
                            })();
                            var RP = (function (RR) {
                                return {
                                    color: RR.isSelected ? D7.appearanceHelper.listItemSelectedFontColor : D7.appearanceHelper.listItemFontColor,
                                };
                            })(this.props);
                            var RI = (function (RR) {
                                var Rl = RR.profit;
                                return {
                                    color: RR.isSelected
                                        ? D7.appearanceHelper.listItemSelectedFontColor
                                        : Rl > 0
                                        ? D7.appearanceHelper.listItemWinFontColor
                                        : D7.appearanceHelper.listItemLossFontColor,
                                };
                            })(this.props);
                            var Rm = x1(x1({}, RJ), this.props.style);
                            return T.createElement(
                                "div",
                                {
                                    className: `game-list-item-container ${RN}`,
                                    style: Rm,
                                    onClick: this.rn,
                                    onMouseEnter: this.fn,
                                    onMouseLeave: this.Fe,
                                    onMouseDown: this.Te,
                                    onMouseUp: this.Oe,
                                    onTouchStart: this.ui,
                                    onTouchEnd: this.di,
                                    onTouchMove: this.gn,
                                },
                                T.createElement(
                                    "div",
                                    {
                                        className: "game-list-item-column-container",
                                        style: RP,
                                    },
                                    mL
                                ),
                                T.createElement(
                                    "div",
                                    {
                                        className: "game-list-item-column-container",
                                    },
                                    R0
                                ),
                                T.createElement(
                                    "div",
                                    {
                                        className: "game-list-item",
                                        style: {
                                            textAlign: "right",
                                        },
                                    },
                                    PO(Rx, 11)
                                ),
                                T.createElement(
                                    "div",
                                    {
                                        className: "game-list-item",
                                        style: x1(x1({}, RI), {
                                            textAlign: "right",
                                        }),
                                    },
                                    PO(RD, 12)
                                ),
                                this.kn(this.props)
                            );
                        };
                        mG.prototype.rn = function () {
                            if (this.props.isClickable) {
                                if (!D7.isPortrait) {
                                    P6.set("isListPageScroll", false);
                                }
                                this.Cn();
                                var mC = this.props.onClickedCallback;
                                if (mC) {
                                    mC(this.props.index);
                                }
                            }
                        };
                        mG.prototype.wn = function () {
                            return T.createElement(
                                Pk,
                                x1({}, this.props, {
                                    key: "game-list-icons",
                                })
                            );
                        };
                        mG.prototype.kn = function (mC) {
                            var ms = D7.isMobile ? "gh-angle-horizontal-mobile" : "gh-angle-horizontal";
                            var mE = D7.isPortrait ? "gh-angle-vertical angle-right" : `${ms} angle-right`;
                            var mf = {
                                borderColor: mC.isSelected ? D7.appearanceHelper.listItemSelectedFontColor : D7.appearanceHelper.listItemArrowColor,
                            };
                            if (shell.isRTLLanguage()) {
                                mf = x1(x1({}, mf), {
                                    transform: "rotate(-225deg)",
                                });
                            }
                            return T.createElement(
                                "div",
                                {
                                    id: "game-list-item-arrow-image-container",
                                },
                                T.createElement("div", {
                                    className: `${mE}`,
                                    style: mf,
                                })
                            );
                        };
                        mG.prototype.fn = function () {
                            this.setState({
                                hover: true,
                            });
                        };
                        mG.prototype.Fe = function () {
                            this.setState({
                                hover: false,
                                active: false,
                            });
                        };
                        mG.prototype.Te = function () {
                            this.setState({
                                active: true,
                            });
                        };
                        mG.prototype.Oe = function () {
                            this.setState({
                                active: false,
                            });
                        };
                        mG.prototype.ui = function () {
                            var mC = this;
                            this.Sn = x7.timeoutCallback(0.3)(function () {
                                mC.setState({
                                    active: true,
                                });
                            });
                        };
                        mG.prototype.di = function () {
                            this.setState({
                                active: false,
                            });
                        };
                        mG.prototype.gn = function () {
                            if (this.Sn) {
                                this.Sn();
                            }
                            this.Sn = undefined;
                            if (this.state.active) {
                                this.setState({
                                    active: false,
                                });
                            }
                        };
                        mG.prototype._n = function () {
                            this.Hn = x7.timeoutCallback(0.3)(this.zn.bind(this));
                        };
                        mG.prototype.yn = function () {
                            this.Cn();
                        };
                        mG.prototype.xn = function () {
                            this.Cn();
                        };
                        mG.prototype.pn = function () {
                            this.Hn = x7.timeoutCallback(0.3)(this.zn.bind(this));
                        };
                        mG.prototype.vn = function () {
                            this.Cn();
                        };
                        mG.prototype.mn = function () {
                            this.Cn();
                        };
                        mG.prototype.Cn = function () {
                            var mC = this.Hn;
                            if (mC) {
                                mC();
                            }
                            this.Hn = undefined;
                        };
                        mG.prototype.zn = function () {
                            var mC = this.jn();
                            var ms = this.props.index;
                            var mE = this.props.showCopyButton;
                            if (mE) {
                                mE(mC.posX, mC.posY, ms);
                            }
                        };
                        mG.prototype.jn = function () {
                            var mC = document.getElementById(`game-list-item-transaction-id-${this.props.index}`);
                            var ms = document.getElementById("game-list-view-contents-container");
                            var mE = mC.getBoundingClientRect();
                            return {
                                posX: mC.offsetLeft + ms.offsetLeft - 4,
                                posY: mE.top,
                            };
                        };
                        return mG;
                    })(T.Component);
                    (function (mF) {
                        function mG(mC) {
                            var ms = mF.call(this, mC) || this;
                            ms.state = {
                                hover: false,
                                active: false,
                                isFade: false,
                            };
                            ms.Dn = ms.Dn.bind(ms);
                            ms.fn = ms.fn.bind(ms);
                            ms.Fe = ms.Fe.bind(ms);
                            ms.Te = ms.Te.bind(ms);
                            ms.Oe = ms.Oe.bind(ms);
                            ms.ui = ms.ui.bind(ms);
                            ms.di = ms.di.bind(ms);
                            return ms;
                        }
                        x0(mG, mF);
                        mG.prototype.close = function () {
                            this.Fn();
                        };
                        mG.prototype.componentDidMount = function () {
                            this.Tn = x7.timeoutCallback(6)(this.On.bind(this));
                        };
                        mG.prototype.componentDidUpdate = function () {
                            var mC = this;
                            if (this.state.isFade) {
                                this.Nn = x7.timeoutCallback(0.3)(function () {
                                    mC.Fn();
                                });
                            }
                        };
                        mG.prototype.render = function () {
                            var mC = this.state;
                            var ms = mC.isFade;
                            var mE = mC.active;
                            var mf = mC.hover;
                            var mc = this.props;
                            var mZ = mc.posX;
                            var mL = mc.posY;
                            var R0 = mc.index;
                            var R1 = !D7.isPortrait;
                            var R2 = (function (R6, R7) {
                                var R8 = document.getElementById(`game-list-item-transaction-id-${R6}`);
                                var R9 = R7 ? -18 : -5;
                                var Rx = R7 ? 15 : 5;
                                return {
                                    width: "0px",
                                    height: "0px",
                                    borderStyle: "solid",
                                    borderWidth: `${Rx}px ${Rx}px 0 ${Rx}px`,
                                    borderColor: "grey transparent transparent transparent",
                                    position: "absolute",
                                    left: `${R8.clientWidth / 2 + R9}px`,
                                };
                            })(R0, R1);
                            var R3 = (function (R6, R7, R8, R9) {
                                var Rx = document.getElementById(`game-list-item-transaction-id-${R8}`);
                                var RD = D7.gsScale;
                                RD = D7.isPortrait ? RD : RD / 3;
                                var RJ = D7.isPortrait ? 2.2 : 3.3;
                                var RN = {
                                    position: "absolute",
                                    width: `${Rx.clientWidth}px`,
                                    height: `${Rx.clientHeight}px`,
                                    left: `${R6}px`,
                                    top: `${R7 / RD - Rx.clientWidth / RJ}px`,
                                    textAlign: "center",
                                    opacity: "1",
                                    zIndex: 99,
                                };
                                if (R9) {
                                    RN.transition = "opacity 1s ease 0s";
                                    RN.opacity = "0";
                                }
                                return RN;
                            })(mZ, mL, R0, ms);
                            var R4 = (function (R6, R7, R8) {
                                var R9 = D7.appearanceHelper.highlightFontColor;
                                var Rx = 35;
                                var RD = 15;
                                var RJ = 12;
                                var RN = 1;
                                if (R8) {
                                    Rx = 90;
                                    RD = 35;
                                    RJ = 24;
                                    RN = 3;
                                }
                                var RP = "rgb(80,80,80)";
                                if (R6) {
                                    RP = "rgb(50,50,50)";
                                } else if (R7) {
                                    RP = "rgb(90,90,90)";
                                }
                                return {
                                    width: `${Rx}px`,
                                    height: `${RD}px`,
                                    fontSize: `${RJ}px`,
                                    color: R9,
                                    border: `${RN}px solid grey`,
                                    padding: "4px",
                                    backgroundColor: RP,
                                    textAlign: "center",
                                    display: "inline-block",
                                    borderRadius: "10%",
                                };
                            })(mE, mf, R1);
                            var R5 = shell.I18n.t("History.HistoryCopy");
                            return T.createElement(
                                "div",
                                {
                                    className: "transaction-id-copy-button-container",
                                    style: R3,
                                    onClickCapture: this.Dn,
                                    onMouseEnter: this.fn,
                                    onMouseLeave: this.Fe,
                                    onMouseDown: this.Te,
                                    onMouseUp: this.Oe,
                                    onTouchStartCapture: this.ui,
                                    onTouchEnd: this.di,
                                },
                                T.createElement(
                                    "div",
                                    {
                                        className: "transaction-id-copy-button",
                                        style: R4,
                                    },
                                    R5
                                ),
                                T.createElement("div", {
                                    className: "copy-button-arrow",
                                    style: R2,
                                })
                            );
                        };
                        mG.prototype.fn = function () {
                            this.setState({
                                hover: true,
                            });
                        };
                        mG.prototype.Fe = function () {
                            this.setState({
                                hover: false,
                                active: false,
                            });
                        };
                        mG.prototype.Te = function () {
                            this.setState({
                                active: true,
                            });
                        };
                        mG.prototype.Oe = function () {
                            this.setState({
                                active: false,
                            });
                        };
                        mG.prototype.ui = function () {
                            this.setState({
                                active: true,
                            });
                        };
                        mG.prototype.di = function () {
                            this.setState({
                                active: false,
                            });
                        };
                        mG.prototype.Dn = function () {
                            var mC = this;
                            var ms = this.props.transactionId;
                            var mE = shell.I18n.t("History.HistoryTransactionIdCopied", {
                                transactionId: ms + "",
                            });
                            function mf() {
                                mC.props.onClickCallback(mC.props.index);
                            }
                            Dh(ms.toString(), function (mc) {
                                if (mc) {
                                    DP({
                                        message: "failed",
                                        duration: 2,
                                    });
                                } else {
                                    mC.Fn();
                                    DP({
                                        message: mE,
                                        duration: 2,
                                        eventCallback: mf,
                                    });
                                }
                            });
                        };
                        mG.prototype.Fn = function () {
                            this.In();
                            this.Ln();
                            if (document.getElementById("transaction-id-copy-button-view")) {
                                var mC = document.getElementById("transaction-id-copy-button-view");
                                mC.parentNode.removeChild(mC);
                            }
                            x7.timeoutCallback(0.1)(this.props.onCloseCallback);
                        };
                        mG.prototype.On = function () {
                            this.setState({
                                isFade: true,
                            });
                        };
                        mG.prototype.In = function () {
                            var mC = this.Tn;
                            if (mC) {
                                mC();
                            }
                            this.Tn = undefined;
                        };
                        mG.prototype.Ln = function () {
                            var mC = this.Nn;
                            if (mC) {
                                mC();
                            }
                            this.Nn = undefined;
                        };
                    })(T.Component);
                    var PQ;
                    var PM;
                    var PK = (function (mF) {
                        function mG(mC) {
                            var ms = mF.call(this, mC) || this;
                            ms.Pn = false;
                            ms.Mn = true;
                            ms.An = false;
                            ms.Bn = false;
                            ms.Rn = 0;
                            ms.state = {
                                scrollToTop: false,
                                showScrollToTopButton: false,
                                currentDataPage: mC.historyItemPageCount - 1,
                                currentDataPageProps: mC.historyItemPageCount,
                                copiedIndex: -1,
                                propsChanged: false,
                            };
                            ms.En = T.createRef();
                            ms.Vn = T.createRef();
                            ms.Wn = ms.Wn.bind(ms);
                            ms.Yn = ms.Yn.bind(ms);
                            ms.Gn = ms.Gn.bind(ms);
                            ms.Un = ms.Un.bind(ms);
                            ms.qn = ms.qn.bind(ms);
                            ms.Rn = !D7.isPortrait && D7.isMobile ? 10 : 15;
                            return ms;
                        }
                        x0(mG, mF);
                        mG.prototype.componentDidMount = function () {
                            if (this.props.reportScrollContainerHeight && this.Vn.current) {
                                this.props.reportScrollContainerHeight(this.Vn.current.scrollHeight);
                            }
                            if (D7.isMobile && DI() && shell.environment.getOrientation() === 90) {
                                document.querySelectorAll(".rcs-custom-scroll .rcs-inner-container").forEach(function (mC) {
                                    mC.style.webkitOverflowScrolling = "auto";
                                });
                            }
                        };
                        mG.getDerivedStateFromProps = function (mC, ms) {
                            if (mC.historyItemPageCount !== ms.currentDataPageProps) {
                                return {
                                    currentDataPage: mC.historyItemPageCount - 1,
                                    currentDataPageProps: mC.historyItemPageCount,
                                    propsChanged: true,
                                };
                            } else {
                                return null;
                            }
                        };
                        mG.prototype.shouldComponentUpdate = function (mC, ms) {
                            if (mC.freezeScroll === true || mC.selectedIndex !== this.props.selectedIndex) {
                                this.Bn = true;
                            } else {
                                this.Bn = false;
                            }
                            return (
                                mC.freezeScroll !== this.props.freezeScroll ||
                                mC.selectedIndex !== this.props.selectedIndex ||
                                mC.historyItemPageCount !== this.props.historyItemPageCount ||
                                ms.copiedIndex !== this.state.copiedIndex ||
                                ms.currentDataPage !== this.state.currentDataPage ||
                                ms.scrollToTop !== this.state.scrollToTop ||
                                ms.showScrollToTopButton !== this.state.showScrollToTopButton
                            );
                        };
                        mG.prototype.render = function () {
                            var mC = this;
                            if (!this.Pn) {
                                this.Pn = this.Xn();
                            }
                            var ms = this.state;
                            var mE = ms.scrollToTop;
                            var mf = ms.currentDataPage;
                            var mc = ms.propsChanged;
                            var mZ = this.Kn();
                            var mL = mE ? 0 : this.Jn();
                            var R0 = D7.isPortrait || D7.isMobile ? 54 : 76;
                            return T.createElement(
                                "div",
                                {
                                    id: "game-list-scroll-view-container",
                                    className: "history regular",
                                    ref: this.En,
                                },
                                this.Zn(),
                                T.createElement(
                                    DC.default,
                                    {
                                        heightRelativeToParent: "inherit",
                                        onScroll: function (R1) {
                                            P6.set("isListPageScroll", true);
                                            if (mE) {
                                                mC.setState({
                                                    scrollToTop: false,
                                                });
                                            }
                                            var R2 = R1.target;
                                            var R3 = R2.scrollTop;
                                            var R4 = R2.scrollHeight;
                                            var R5 = mC.En.current ? (R3 / (R4 - mC.En.current.clientHeight)) * 100 : 0;
                                            mC.Fn();
                                            if (!(R3 !== 0 || mC.state.propsChanged)) {
                                                mC.Qn();
                                                mC.An = false;
                                            }
                                            if (mc) {
                                                mC.setState({
                                                    propsChanged: false,
                                                });
                                            }
                                            if ((R5 > 30 && mf === 1) || mf > 1) {
                                                mC.Un();
                                            } else {
                                                mC.qn();
                                            }
                                            if (R5 >= 99) {
                                                if (mf + 1 === mC.props.historyItemPageCount) {
                                                    if (!mC.props.hasLoadMore) {
                                                        mC.An = true;
                                                    }
                                                    if (mC.props.onBottomReachedCallback) {
                                                        mC.props.onBottomReachedCallback();
                                                    }
                                                } else if (R3 === R4 - mC.En.current.clientHeight) {
                                                    mC.$n();
                                                }
                                            }
                                        },
                                        freezePosition: this.props.freezeScroll,
                                        scrollTo: mL,
                                    },
                                    T.createElement(
                                        "div",
                                        {
                                            id: "game-list-wrapper",
                                            style: {
                                                position: "relative",
                                                overflow: this.props.freezeScroll ? "hidden" : "",
                                                height: `${mZ.length * R0}px`,
                                            },
                                            ref: this.Vn,
                                        },
                                        mZ
                                    )
                                )
                            );
                        };
                        mG.prototype.Kn = function () {
                            var mC = this;
                            var ms = this.state;
                            var mE = ms.copiedIndex;
                            var mf = ms.currentDataPage;
                            var mc = [];
                            if (mf > 0) {
                                var mZ = mf > 1 ? (mf - 2) * this.Rn : 0;
                                var mL = mZ + this.Rn * 2;
                                this.props.model.betHistoryItems.forEach(function (R0, R1) {
                                    if (R1 >= mZ && R1 < mL) {
                                        var R2 = D7.historyShowWin ? R0.grandTotalWinAmount : R0.grandTotalWinLossAmount;
                                        mc.push(
                                            T.createElement(Pw, {
                                                index: R1,
                                                key: R0.transactionId,
                                                time: DD(R0.betTime),
                                                date: Dx(R0.betTime),
                                                transactionId: R0.transactionId,
                                                bet: R0.grandTotalBetAmount,
                                                profit: R2,
                                                gameElements: R0.gameElements,
                                                mainGameCollapseCount: R0.mainGameCollapseCount,
                                                freeSpinCollapseCount: R0.freeSpinCollapseCount,
                                                onClickedCallback: mC.Wn,
                                                useSmallFont: mC.Pn,
                                                isSelected: mC.props.selectedIndex === R1,
                                                showCopyButton: mC.Yn,
                                                isClickable: true,
                                                isHighlight: mE === R1,
                                                betDetailsRaw: R0.betDetailsRaw,
                                            })
                                        );
                                    }
                                });
                            }
                            return mc;
                        };
                        mG.prototype.Jn = function () {
                            var mC = this.state.currentDataPage;
                            var ms = D7.isPortrait || D7.isMobile ? 54 : 76;
                            var mE = Math.random();
                            if (mC !== 1 && !this.An && !this.Bn) {
                                if (this.Mn && this.En && this.En.current) {
                                    var mf = this.En.current.clientHeight;
                                    return this.Rn * ms - mf + mE;
                                }
                                return this.Rn * ms + mE;
                            }
                        };
                        mG.prototype.$n = function () {
                            var mC = this.state.currentDataPage;
                            this.setState({
                                currentDataPage: mC + 1,
                            });
                            this.Mn = true;
                        };
                        mG.prototype.Qn = function () {
                            var mC = this.state.currentDataPage;
                            if (mC > 2) {
                                this.setState({
                                    currentDataPage: mC - 1,
                                });
                                this.Mn = false;
                            }
                        };
                        mG.prototype.qn = function () {
                            if (!D7.isPortrait) {
                                if (this.state.showScrollToTopButton) {
                                    this.setState({
                                        showScrollToTopButton: false,
                                    });
                                }
                            }
                        };
                        mG.prototype.Un = function () {
                            if (!(D7.isPortrait || this.state.showScrollToTopButton)) {
                                this.setState({
                                    showScrollToTopButton: true,
                                });
                            }
                        };
                        mG.prototype.Zn = function () {
                            if (!D7.isPortrait && this.state.showScrollToTopButton && !this.props.freezeScroll) {
                                var mC = {
                                    backgroundColor: D7.appearanceHelper.scrollToTopButtonColor,
                                    borderColor: D7.appearanceHelper.scrollToTopButtonBorderColor,
                                };
                                var ms = {
                                    borderColor: D7.appearanceHelper.listItemArrowColor,
                                };
                                var mE = D7.isMobile ? "scroll-to-top-background-mobile" : "scroll-to-top-background";
                                var mf = D7.isMobile ? "gh-angle-horizontal-mobile" : "gh-angle-horizontal";
                                return T.createElement(
                                    "div",
                                    {
                                        id: mE,
                                        style: mC,
                                        onClick: this.Gn,
                                    },
                                    T.createElement(
                                        "div",
                                        {
                                            className: "gh-angle-wrapper",
                                        },
                                        T.createElement("div", {
                                            className: `${mf} angle-up`,
                                            style: ms,
                                        })
                                    )
                                );
                            }
                            return null;
                        };
                        mG.prototype.Wn = function (mC) {
                            this.props.onItemClickedCallback(mC);
                        };
                        mG.prototype.Xn = function () {
                            var mC = false;
                            this.props.model.betHistoryItems.forEach(function (ms) {
                                mC = ms.grandTotalBetAmount > 9999.99 || ms.grandTotalWinLossAmount > 9999.99 || mC;
                            });
                            return mC;
                        };
                        mG.prototype.Gn = function () {
                            this.setState({
                                scrollToTop: true,
                                currentDataPage: 1,
                            });
                        };
                        mG.prototype.Yn = function () {};
                        mG.prototype.Fn = function () {
                            if (this.tr) {
                                this.tr.close();
                                this.tr = undefined;
                            }
                        };
                        mG.prototype.er = function (mC) {
                            var ms = this;
                            this.tr = undefined;
                            this.setState({
                                copiedIndex: mC,
                            });
                            x7.timeoutCallback(2)(function () {
                                ms.setState({
                                    copiedIndex: -1,
                                });
                            });
                        };
                        return mG;
                    })(T.Component);
                    var PW = x7.timeoutCallback;
                    function PV(mF) {
                        var mG = H(null);
                        var mC = false;
                        PM = mF.scrollUpThreshold;
                        var ms = x5(U(0), 2);
                        var mE = ms[0];
                        var mf = ms[1];
                        var mc = x5(U(false), 2);
                        var mZ = mc[0];
                        var mL = mc[1];
                        var R0 = x5(U(false), 2);
                        var R1 = R0[0];
                        var R2 = R0[1];
                        var R3 = x5(U(true), 2);
                        var R4 = R3[0];
                        var R5 = R3[1];
                        function R6() {
                            mf(0);
                            PW(0)(function () {
                                R5(true);
                            });
                        }
                        var R7 = Js(
                            {
                                onDrag: function (R8) {
                                    if (mZ) {
                                        var R9 = x5(R8.movement, 2);
                                        var Rx = R9[0];
                                        var RD = R9[1];
                                        var RJ = R8.down;
                                        var RN = R8.cancel;
                                        var RP = Math.abs(RD);
                                        var RI = RD;
                                        if (
                                            !(!D7.isMobile || shell.environment.isMac() || D7.isPortrait || shell.environment.getOrientation() !== xN.PORTRAIT)
                                        ) {
                                            RP = Math.abs(Rx);
                                            RI = -Rx;
                                        }
                                        if (!RJ && mF.hasLoadMore && PY(RP)) {
                                            mC = true;
                                        } else {
                                            mG.current.classList.remove("transition-transform-on");
                                            if (RI < 0) {
                                                R5(false);
                                                if (PY(RP)) {
                                                    if (mF.hasLoadMore && mF.onScrollThresholdReached) {
                                                        mF.onScrollThresholdReached(true);
                                                    }
                                                    mf(-PM);
                                                } else {
                                                    if (mF.hasLoadMore) {
                                                        if (mF.onScrollThresholdReached) {
                                                            mF.onScrollThresholdReached(false);
                                                        }
                                                        if (mC) {
                                                            mC = false;
                                                        }
                                                    }
                                                    mf(RI);
                                                }
                                            } else if (RI > 0) {
                                                mL(false);
                                                RN();
                                            }
                                        }
                                    }
                                },
                                onDragEnd: function () {
                                    mL(false);
                                    if (mG.current) {
                                        mG.current.classList.add("transition-transform-on");
                                    }
                                    if (mC) {
                                        mf(-PM);
                                        if (mF.onExecuteLoadMoreCallback) {
                                            mF.onExecuteLoadMoreCallback(function () {
                                                R6();
                                            });
                                        }
                                    } else {
                                        R6();
                                    }
                                },
                                onWheel: function (R8) {
                                    var R9 = R8.movement;
                                    var Rx = R8.wheeling;
                                    var RD = R8.screenY;
                                    if (R1 && !PQ) {
                                        var RJ = (R9 && R9[1]) || RD - mE;
                                        RJ = RJ > 0 && shell.environment.getBrowserBaseType() === "firefox" ? 200 : RJ;
                                        var RN = Math.abs(RJ);
                                        if (!Rx) {
                                            R2(false);
                                            if (mG.current) {
                                                mG.current.classList.add("transition-transform-on");
                                            }
                                            if (RJ > 0 && mF.hasLoadMore && PY(RN)) {
                                                R5(false);
                                                mf(-PM);
                                                if (mF.onExecuteLoadMoreCallback) {
                                                    mF.onExecuteLoadMoreCallback(function () {
                                                        R6();
                                                    });
                                                }
                                                return;
                                            }
                                            if (RJ > 0) {
                                                if (PY(RN)) {
                                                    R5(false);
                                                    mf(-PM);
                                                    PW(0.5)(function () {
                                                        R6();
                                                    });
                                                } else {
                                                    mf(-RJ);
                                                    PQ = PW(0.2)(function () {
                                                        R6();
                                                        PQ = undefined;
                                                    });
                                                }
                                            } else if (RJ < 0) {
                                                R6();
                                            }
                                        }
                                    }
                                },
                                onMouseUp: function () {
                                    if (shell.environment.getBrowserBaseType() === "ie" && (mZ || R1)) {
                                        mL(false);
                                        R2(false);
                                        R5(true);
                                    }
                                },
                            },
                            {
                                domTarget: mG,
                                eventOptions: {
                                    capture: true,
                                    passive: false,
                                },
                            }
                        ).bind(this);
                        q(R7, [R7()]);
                        return T.createElement(
                            "div",
                            {
                                id: "list-wrapper",
                                className: "transition-transform-on",
                                ref: mG,
                                style: Object.assign({}, mF.style, {
                                    transform: `translateY(${mE}px)`,
                                }),
                            },
                            T.createElement(PK, {
                                model: mF.model,
                                historyItemPageCount: mF.model.betHistoryPageNumber,
                                hasLoadMore: mF.hasLoadMore,
                                onItemClickedCallback: mF.onItemClickedCallback,
                                selectedIndex: mF.selectedIndex,
                                freezeScroll: !R4,
                                onBottomReachedCallback: function () {
                                    if (D7.isMobile) {
                                        if (!mZ) {
                                            mL(true);
                                        }
                                    } else if (!R1) {
                                        R2(true);
                                    }
                                },
                                reportScrollContainerHeight: mF.reportScrollContainerHeight,
                            })
                        );
                    }
                    function PY(mF) {
                        return mF >= PM;
                    }
                    function Pp(mF) {
                        var mG = D7.appearanceHelper.primaryFontColor;
                        var mC = D7.isPortrait || D7.isMobile ? "14px" : "20px";
                        var ms = D7.isPortrait || D7.isMobile ? 80 : xT;
                        if (mF.isLoading) {
                            return T.createElement(
                                "div",
                                {
                                    id: "load-more-container",
                                    style: {
                                        height: ms,
                                    },
                                },
                                T.createElement(J2, {
                                    loadMore: true,
                                    isHorizontal: !D7.isPortrait,
                                    isFade: true,
                                    isMobile: D7.isMobile,
                                })
                            );
                        } else if (mF.showReleaseToLoad) {
                            return T.createElement(
                                "div",
                                {
                                    id: "load-more-container",
                                    style: {
                                        height: ms,
                                    },
                                },
                                T.createElement(
                                    "div",
                                    {
                                        id: "load-more-label",
                                        style: {
                                            color: mG,
                                            fontSize: mC,
                                        },
                                    },
                                    shell.I18n.t("History.HistoryLoadMoreData")
                                )
                            );
                        } else if (mF.hasLoadMore) {
                            return T.createElement(
                                "div",
                                {
                                    id: "load-more-container",
                                    style: {
                                        height: ms,
                                    },
                                },
                                T.createElement(
                                    "div",
                                    {
                                        id: "load-more-label",
                                        style: {
                                            color: mG,
                                            fontSize: mC,
                                        },
                                    },
                                    shell.I18n.t("History.HistoryLoadDataPull")
                                )
                            );
                        } else {
                            return T.createElement(
                                "div",
                                {
                                    id: "load-more-container",
                                    style: {
                                        height: ms,
                                    },
                                },
                                T.createElement(
                                    "div",
                                    {
                                        id: "load-more-label",
                                        style: {
                                            color: mG,
                                            fontSize: mC,
                                        },
                                    },
                                    shell.I18n.t("History.HistoryAllRecordDisplayed")
                                )
                            );
                        }
                    }
                    var PF = x7.spawnCallback;
                    var PG = (function (mF) {
                        function mG(mC) {
                            var ms = mF.call(this, mC) || this;
                            var mE = document.getElementById("game-history-container");
                            var mf = ms.props.model.getGameBetSummary(ms.props.model.gameId);
                            var mc = !D7.isPortrait && D7.isMobile ? 10 : 15;
                            ms.ir = Math.ceil(mf.betCount / mc);
                            var mZ = D7.isApiReplay ? 0 : ms.ir - (ms.props.model.betHistoryPageNumber - 1);
                            if (D7.isPortrait) {
                                ms.nr = DT() + Dl();
                            } else {
                                ms.nr = D7.isMobile ? 112 : 233;
                            }
                            ms.state = {
                                containerHeight: mE.offsetHeight - ms.nr - DH(),
                                scrollableHeight: 0,
                                isLoading: false,
                                showReleaseToLoad: false,
                                pagesRemaining: mZ,
                            };
                            ms.rr = ms.rr.bind(ms);
                            ms.ar = ms.ar.bind(ms);
                            ms.sr = ms.sr.bind(ms);
                            ms.lr = ms.lr.bind(ms);
                            ms.cr = undefined;
                            return ms;
                        }
                        x0(mG, mF);
                        mG.prototype.componentDidMount = function () {
                            D7.context.event.on("Shell.Scaled", this.pi, this);
                        };
                        mG.prototype.componentWillUnmount = function () {
                            D7.context.event.off("Shell.Scaled", this.pi, this);
                            var mC = this.cr;
                            this.cr = undefined;
                            if (mC) {
                                mC();
                            }
                        };
                        mG.prototype.render = function () {
                            var mC = this.state;
                            var ms = mC.pagesRemaining;
                            var mE = mC.containerHeight;
                            var mf = D7.isPortrait || D7.isMobile ? 80 : xT;
                            var mc = D7.appearanceHelper.listBackgroundColor;
                            var mZ = shell.environment.getBrowserBaseType() === "Safari" ? "subpixel-antialiased" : "antialiased";
                            var mL =
                                shell.environment.getBrowserBaseType() === "Safari" && D7.isMobile
                                    ? {}
                                    : {
                                          WebkitFontSmoothing: mZ,
                                      };
                            var R0 = {
                                height: `${mE}px`,
                                width: "100%",
                                backgroundColor: mc,
                            };
                            return T.createElement(
                                "div",
                                {
                                    id: "scroll-view",
                                    style: x1(x1({}, R0), mL),
                                },
                                T.createElement(PV, {
                                    hasLoadMore: ms > 0,
                                    style: {
                                        height: "100%",
                                        width: "100%",
                                        position: "relative",
                                        backgroundColor: mc,
                                        zIndex: 1,
                                    },
                                    scrollUpThreshold: mf,
                                    onExecuteLoadMoreCallback: this.rr,
                                    onScrollThresholdReached: this.ar,
                                    model: this.props.model,
                                    onItemClickedCallback: this.sr,
                                    reportScrollContainerHeight: this.lr,
                                    selectedIndex: this.props.selectedIndex,
                                }),
                                (function (R1) {
                                    var R2 = R1.isLoading;
                                    var R3 = R1.pagesRemaining;
                                    var R4 = R1.containerHeight;
                                    var R5 = R1.scrollableHeight;
                                    var R6 = R1.showReleaseToLoad;
                                    if (R5 > R4) {
                                        return T.createElement(Pp, {
                                            isLoading: R2,
                                            hasLoadMore: R3 > 0,
                                            showReleaseToLoad: R6,
                                        });
                                    } else {
                                        return null;
                                    }
                                })(this.state),
                                this.state.isLoading
                                    ? T.createElement("div", {
                                          id: "game-list-touch-prevention",
                                      })
                                    : null
                            );
                        };
                        mG.prototype.lr = function (mC) {
                            this.setState({
                                scrollableHeight: mC,
                            });
                        };
                        mG.prototype.rr = function (mC) {
                            if (!this.state.isLoading && this.state.pagesRemaining > 0) {
                                this.cr = PF(this.hr(), this.ur())(this.dr(mC));
                            }
                        };
                        mG.prototype.ur = function () {
                            var mC = this;
                            return function (ms) {
                                if (mC.props.loadMoreApiCallback) {
                                    mC.props.loadMoreApiCallback(ms);
                                }
                            };
                        };
                        mG.prototype.dr = function (mC) {
                            var ms = this;
                            return function () {
                                var mE = ms.ir - (ms.props.model.betHistoryPageNumber - 1);
                                ms.setState({
                                    isLoading: false,
                                    pagesRemaining: mE <= 0 ? 0 : mE,
                                });
                                ms.cr = undefined;
                                if (mC) {
                                    mC();
                                }
                            };
                        };
                        mG.prototype.hr = function () {
                            var mC = this;
                            return function (ms) {
                                mC.setState({
                                    isLoading: true,
                                    showReleaseToLoad: false,
                                });
                                if (ms) {
                                    ms();
                                }
                            };
                        };
                        mG.prototype.pi = function (mC) {
                            var ms = mC.payload;
                            var mE = (D7.isPortrait || D7.isMobile ? ms.height : ms.height * 3) - this.nr - DH();
                            this.setState({
                                containerHeight: mE,
                            });
                        };
                        mG.prototype.sr = function (mC) {
                            if (!this.state.isLoading) {
                                if (this.props.onListItemClickCallback) {
                                    this.props.onListItemClickCallback(mC);
                                }
                            }
                        };
                        mG.prototype.ar = function (mC) {
                            if (mC !== this.state.showReleaseToLoad) {
                                this.setState({
                                    showReleaseToLoad: mC,
                                });
                            }
                        };
                        return mG;
                    })(T.Component);
                    function PC(mF, mG, mC) {
                        if (mC === undefined) {
                            mC = 0;
                        }
                        if (!mF.current || !mG.current) {
                            return 1;
                        }
                        var ms = mG.current.offsetWidth;
                        var mE = mF.current.offsetWidth - mC;
                        var mf = 1;
                        if (ms > mE) {
                            mf = mE / ms;
                            mG.current.style.transform = `scale(${mf})`;
                        }
                        return mf;
                    }
                    function Ps(mF, mG) {
                        if (mF.current) {
                            mF.current.style.transform = `scale(${mG})`;
                        }
                    }
                    var PE = shell.I18n;
                    var Pf = (function (mF) {
                        function mG(mC) {
                            var ms = mF.call(this, mC) || this;
                            ms.gr = x7.formatCurrency(ms.props.totalBet, ms.props.currencySymbol);
                            ms.pr = x7.formatCurrency(ms.props.totalProfit, ms.props.currencySymbol);
                            ms.mr = T.createRef();
                            ms.vr = T.createRef();
                            ms.br = T.createRef();
                            ms.yr = T.createRef();
                            ms._r = T.createRef();
                            ms.wr = T.createRef();
                            return ms;
                        }
                        x0(mG, mF);
                        mG.prototype.componentDidMount = function () {
                            PC(this.mr, this.vr);
                            var mC = PC(this._r, this.wr, 4);
                            var ms = PC(this.br, this.yr, 4);
                            if (ms < mC) {
                                Ps(this.wr, ms);
                            } else {
                                Ps(this.yr, mC);
                            }
                        };
                        mG.prototype.render = function () {
                            var mC = {
                                backgroundColor: D7.appearanceHelper.footerBarColor,
                                borderTopColor: D7.appearanceHelper.footerSeparatorColor,
                                borderTopStyle: "solid",
                                borderTopWidth: "1px",
                                color: D7.appearanceHelper.primaryFontColor,
                            };
                            var ms = {
                                color: D7.appearanceHelper.highlightFontColor,
                            };
                            var mE = Du();
                            var mf = D7.displayConfig;
                            var mc = mf.hideBet;
                            var mZ = mf.betLabel;
                            var mL = mf.hideProfit;
                            var R0 = mf.profitLabel;
                            var R1 = x1(x1({}, mC), {
                                height: `${mE}px`,
                            });
                            var R2 = {
                                right: 0,
                            };
                            if (shell.isRTLLanguage()) {
                                R1 = x1(x1({}, R1), {
                                    direction: "rtl",
                                    paddingLeft: "10px",
                                    paddingRight: "20px",
                                });
                                R2.right = undefined;
                                R2.left = 0;
                            }
                            return T.createElement(
                                "div",
                                {
                                    id: "game-list-footer-container",
                                    className: "game-list-footer-container-vertical",
                                    style: R1,
                                },
                                T.createElement(
                                    "div",
                                    {
                                        id: "game-list-footer-date-container",
                                    },
                                    T.createElement(
                                        "div",
                                        {
                                            id: "game-list-footer-date-vertical",
                                            ref: this.mr,
                                        },
                                        T.createElement(
                                            "div",
                                            {
                                                id: "game-list-footer-date-label-vertical",
                                                ref: this.vr,
                                                style: {
                                                    color: D7.appearanceHelper.footerDateFontColor,
                                                },
                                            },
                                            this.props.date
                                        )
                                    ),
                                    T.createElement(
                                        "div",
                                        {
                                            id: "game-list-footer-record-vertical",
                                        },
                                        `${this.props.record} ${PE.t("History.HistoryRecords")}`
                                    )
                                ),
                                T.createElement(
                                    "div",
                                    {
                                        className: "game-list-footer-item",
                                        style: x1(x1({}, ms), {
                                            visibility: mc ? "hidden" : "visible",
                                        }),
                                        ref: this._r,
                                    },
                                    T.createElement(
                                        "div",
                                        {
                                            className: "game-list-footer-item-wrapper",
                                            style: R2,
                                            ref: this.wr,
                                        },
                                        mZ || this.gr
                                    )
                                ),
                                T.createElement(
                                    "div",
                                    {
                                        className: "game-list-footer-item",
                                        style: x1(x1({}, ms), {
                                            visibility: mL ? "hidden" : "visible",
                                        }),
                                        ref: this.br,
                                    },
                                    T.createElement(
                                        "div",
                                        {
                                            className: "game-list-footer-item-wrapper",
                                            style: R2,
                                            ref: this.yr,
                                        },
                                        R0 || this.pr
                                    )
                                )
                            );
                        };
                        return mG;
                    })(T.Component);
                    var Pc = {
                        protoRecordItem: {
                            width: "100%",
                            height: "60px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            borderBottom: "1px solid #696969",
                        },
                        protoSpinLabel: {
                            width: "100%",
                            height: "12px",
                            paddingLeft: "23px",
                        },
                        protoBetDetails: {
                            display: "flex",
                            flex: "",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "40px",
                            width: "100%",
                        },
                        protoBetDetailsItem: {
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            textAlign: "center",
                            height: "100%",
                            width: "33.33%",
                        },
                    };
                    function PZ(mF) {
                        return T.createElement(
                            "div",
                            {
                                className: "prototype-record-item",
                                style: x1(x1({}, Pc.protoRecordItem), {
                                    backgroundColor: mF.color,
                                }),
                            },
                            T.createElement(I1, {
                                state: mF.betDetail.gameDetail.st,
                                index: mF.currentIndex,
                                transactionId: mF.betDetail.transactionId.toString(),
                            }),
                            T.createElement(PL, {
                                betDetail: mF.betDetail,
                            })
                        );
                    }
                    function PL(mF) {
                        return T.createElement(
                            "div",
                            {
                                className: "prototype-bet-details",
                                style: Pc.protoBetDetails,
                            },
                            T.createElement(I0, {
                                keyName: "Bet",
                                value: x7.formatCurrency(mF.betDetail.totalBetAmount, ""),
                            }),
                            T.createElement(I0, {
                                keyName: "Profit",
                                value: x7.formatCurrency(mF.betDetail.totalWinLossAmount, ""),
                            }),
                            T.createElement(I0, {
                                keyName: "Balance",
                                value: x7.formatCurrency(mF.betDetail.balance, ""),
                            })
                        );
                    }
                    function I0(mF) {
                        return T.createElement(
                            "div",
                            {
                                className: "prototype-bet-details-item",
                                style: Pc.protoBetDetailsItem,
                            },
                            T.createElement(
                                "div",
                                {
                                    className: `prototype-${mF.keyName}-item-key`,
                                },
                                mF.keyName
                            ),
                            T.createElement(
                                "div",
                                {
                                    className: `prototype-${mF.keyName}-item-value`,
                                    style: {
                                        marginTop: "-2px",
                                    },
                                },
                                mF.value
                            )
                        );
                    }
                    function I1(mF) {
                        var mG;
                        switch (mF.state) {
                            case 1:
                                mG = "Normal Spin";
                                break;
                            case 2:
                            case 21:
                                mG = "Free Spin";
                                break;
                            case 4:
                                mG = "Normal Respin";
                                break;
                            case 22:
                                mG = "Free Spin Respin";
                                break;
                            default:
                                mG = "Game specific Spin";
                        }
                        return T.createElement(
                            "div",
                            {
                                className: "prototype-spin-label",
                                style: Pc.protoSpinLabel,
                            },
                            `${mF.index + 1}.  ${mG} - ${mF.transactionId}`
                        );
                    }
                    var I2 = {
                        width: "100%",
                        height: "inherit",
                        position: "relative",
                        margin: "0 auto",
                        fontSize: "12px",
                        zIndex: 1,
                    };
                    function I3(mF) {
                        var mG = mF.betDetailsRaw.map(function (mE, mf, mc) {
                            var mZ = new PI(mE);
                            var mL = mf % 2 == 0 ? D7.appearanceHelper.listItemEvenColor : D7.appearanceHelper.listItemOddColor;
                            return T.createElement(PZ, {
                                key: `prototype-record-item-${mZ.transactionId}`,
                                betDetail: mZ,
                                currentIndex: mf,
                                totalBetDetailLength: mc.length,
                                color: mL,
                            });
                        });
                        var mC = document.getElementById("game-history-container").offsetHeight - Dl();
                        var ms = D7.appearanceHelper.listBackgroundColor;
                        return T.createElement(
                            "div",
                            {
                                className: "prototype-game-details-container history regular",
                                style: x1(x1({}, I2), {
                                    backgroundColor: ms,
                                }),
                            },
                            T.createElement(I4, {
                                navLeftButtonCallback: mF.navLeftButtonCallback,
                            }),
                            T.createElement(
                                DC.default,
                                {
                                    heightRelativeToParent: `${mC}px`,
                                },
                                mG
                            )
                        );
                    }
                    function I4(mF) {
                        var mG = D7.isPortrait || D7.isMobile ? Dm() : 0;
                        var mC = D7.isPortrait || D7.isMobile ? 62 : 88;
                        var ms = D7.appearanceHelper.navBarColor;
                        return T.createElement(
                            "div",
                            {
                                id: "game-detail-view-navbar-container",
                                key: "game-detail-view-navbar-container",
                                style: {
                                    height: `${mC}px`,
                                    paddingTop: `${mG}px`,
                                    backgroundColor: ms,
                                },
                            },
                            T.createElement(
                                "div",
                                {
                                    style: {
                                        position: "absolute",
                                        zIndex: 4,
                                        height: "inherit",
                                        width: "inherit",
                                    },
                                },
                                T.createElement(J1, {
                                    showTitle: function () {
                                        return "Spin Details";
                                    },
                                    titleClickCallback: function () {},
                                    currentState: xD.HistoryDetails,
                                    currentCalendarType: undefined,
                                    currentCalendarState: undefined,
                                    leftButtonClickedCallback: mF.navLeftButtonCallback,
                                    rightButtonClickedCallback: function () {},
                                    showDropDownArrow: function () {
                                        return false;
                                    },
                                })
                            )
                        );
                    }
                    var I5 = shell.I18n;
                    var I6 = {
                        container: {
                            height: "inherit",
                            width: "inherit",
                            position: "absolute",
                            bottom: 0,
                            pointerEvents: "none",
                            zIndex: 3,
                        },
                        barPosition: {
                            backgroundColor: "rgb(41, 41, 52)",
                            position: "absolute",
                            width: "100%",
                            height: "79px",
                            bottom: "0px",
                            display: "flex",
                            justifyContent: "center",
                        },
                        guideContainer: {
                            display: "flex",
                            width: "100%",
                            flexDirection: "column",
                            alignItems: "center",
                            paddingBottom: "11px",
                        },
                        guideRow: {
                            width: "calc(100% - 32px)",
                            display: "flex",
                        },
                        step: {
                            width: "12px",
                            height: "12px",
                            borderRadius: "50%",
                            backgroundColor: "#F5AC58",
                            fontSize: "7px",
                            color: " #30303C",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        },
                        stepDesc: {
                            color: "rbga(255,255,255,0.5)",
                            lineHeight: "12px",
                            width: "100%",
                            fontSize: "10px",
                            padding: "0px 8px",
                        },
                        stepSeparator: {
                            fontSize: "10px",
                            color: "#F5AC58",
                            marginTop: "-3px",
                            width: "10px",
                            textAlign: "center",
                            opacity: 0.5,
                        },
                        seperatorLine: {
                            opacity: 0.08,
                            backgroundColor: "#FFFFFF",
                            width: "calc(100% - 32px)",
                            height: "1px",
                            marginBottom: "11px",
                        },
                    };
                    function I7() {
                        var mF = x5(U(true), 2);
                        var mG = mF[0];
                        var mC = mF[1];
                        var ms = H();
                        var mE = DU(I5.t("History.HistoryVryBarTitle1"), D7.appearanceHelper.themeColor);
                        var mf = DU(I5.t("History.HistoryVrfStep2"), D7.appearanceHelper.themeColor);
                        var mc = x1(x1({}, I6.stepSeparator), {
                            color: D7.appearanceHelper.themeColor,
                        });
                        var mZ = x1(x1({}, I6.step), {
                            backgroundColor: D7.appearanceHelper.themeColor,
                        });
                        q(function () {
                            P6.set("isListPageScroll", false);
                            var R1 = P6.observe("isListPageScroll", function (R2) {
                                if (R2) {
                                    ms.current.updateState({
                                        isExpended: false,
                                        arrowAnimType: 2,
                                    });
                                }
                            });
                            return function () {
                                R1();
                            };
                        }, []);
                        var mL = x1(x1({}, I6.barPosition), {
                            backgroundColor: D7.appearanceHelper.footerBarColor,
                        });
                        var R0 = x1({}, I6.guideContainer);
                        if (shell.isRTLLanguage()) {
                            R0.direction = "rtl";
                        }
                        return T.createElement(
                            "div",
                            {
                                style: I6.container,
                            },
                            T.createElement(
                                "div",
                                {
                                    key: "verification",
                                    style: mL,
                                },
                                T.createElement(
                                    Ph,
                                    {
                                        ref: ms,
                                        defaultIsExpanded: mG,
                                        expandableHeight: 139,
                                        barTitle: mE,
                                        onButtonClicked: function (R1) {
                                            P6.set("isListPageScroll", false);
                                            mC(R1);
                                        },
                                    },
                                    T.createElement(
                                        "div",
                                        {
                                            style: R0,
                                        },
                                        T.createElement("div", {
                                            style: I6.seperatorLine,
                                        }),
                                        T.createElement(
                                            "div",
                                            {
                                                style: I6.guideRow,
                                            },
                                            T.createElement(
                                                "div",
                                                {
                                                    style: mZ,
                                                },
                                                T.createElement("span", null, "1")
                                            ),
                                            T.createElement(
                                                "div",
                                                {
                                                    style: I6.stepDesc,
                                                },
                                                I5.t("History.HistoryVrfStep1")
                                            )
                                        ),
                                        T.createElement(
                                            "div",
                                            {
                                                style: I6.guideRow,
                                            },
                                            T.createElement(
                                                "div",
                                                {
                                                    style: mc,
                                                },
                                                ":"
                                            )
                                        ),
                                        T.createElement(
                                            "div",
                                            {
                                                style: I6.guideRow,
                                            },
                                            T.createElement(
                                                "div",
                                                {
                                                    style: mZ,
                                                },
                                                T.createElement("span", null, "2")
                                            ),
                                            T.createElement("div", {
                                                style: I6.stepDesc,
                                                dangerouslySetInnerHTML: {
                                                    __html: mf,
                                                },
                                            })
                                        ),
                                        T.createElement(
                                            "div",
                                            {
                                                style: I6.guideRow,
                                            },
                                            T.createElement(
                                                "div",
                                                {
                                                    style: mc,
                                                },
                                                ":"
                                            )
                                        ),
                                        T.createElement(
                                            "div",
                                            {
                                                style: I6.guideRow,
                                            },
                                            T.createElement(
                                                "div",
                                                {
                                                    style: mZ,
                                                },
                                                T.createElement("span", null, "3")
                                            ),
                                            T.createElement(
                                                "div",
                                                {
                                                    style: I6.stepDesc,
                                                },
                                                I5.t("History.HistoryVrfStep3")
                                            )
                                        )
                                    )
                                )
                            )
                        );
                    }
                    var I8 = x7.timeoutCallback;
                    var I9 = shell.I18n;
                    var Ix = (function (mF) {
                        function mG(mC) {
                            var ms = mF.call(this, mC) || this;
                            ms.Me = D7.launchType === xx.CARD;
                            ms.kr = T.createRef();
                            ms.Cr = T.createRef();
                            var mE = xD.HistoryList;
                            var mf = document.getElementById("game-history-container");
                            ms.state = {
                                model: mC.model,
                                currentPageState: mE,
                                previousPageState: mE,
                                currentCalendarState: xJ.SELECTION,
                                selectedIndex: 0,
                                parentHeight: mf.offsetHeight - Dl() - DH(),
                                imageUrl: "",
                                loadMoreInProgress: false,
                            };
                            ms.Sr = ms.Sr.bind(ms);
                            ms.Hr = ms.Hr.bind(ms);
                            ms.zr = ms.zr.bind(ms);
                            ms.jr = ms.jr.bind(ms);
                            ms.Wn = ms.Wn.bind(ms);
                            ms.rr = ms.rr.bind(ms);
                            return ms;
                        }
                        x0(mG, mF);
                        mG.prototype.componentDidMount = function () {
                            D7.context.event.on("Shell.Scaled", this.pi, this);
                        };
                        mG.prototype.componentWillUnmount = function () {
                            D7.context.event.off("Shell.Scaled", this.pi, this);
                        };
                        mG.prototype.render = function () {
                            var mC = this.props;
                            var ms = mC.isLoading;
                            var mE = mC.fadeLoading;
                            var mf = {
                                backgroundColor: D7.appearanceHelper.listBackgroundColor,
                            };
                            if (ms) {
                                return T.createElement(
                                    "div",
                                    {
                                        id: "game-list-view-loading",
                                        className: "game-list-view-container",
                                        style: mf,
                                    },
                                    T.createElement(
                                        "div",
                                        {
                                            id: "game-list-view-wrapper",
                                        },
                                        T.createElement(J2, {
                                            isFade: mE,
                                            onButtonClickCallback: this.props.quitCallback,
                                            isHorizontal: false,
                                        })
                                    )
                                );
                            } else {
                                return T.createElement(
                                    "div",
                                    {
                                        id: "game-list-view",
                                        className: "game-list-view-container",
                                        style: mf,
                                    },
                                    T.createElement(
                                        "div",
                                        {
                                            id: "game-list-view-wrapper",
                                            style: {
                                                flexDirection: "column",
                                            },
                                        },
                                        this.Ei(),
                                        this.Dr(),
                                        this.Fr(),
                                        this.Tr(),
                                        this.Or(this.state)
                                    )
                                );
                            }
                        };
                        mG.prototype.Sr = function () {
                            if (!this.state.loadMoreInProgress) {
                                this.Nr();
                            }
                        };
                        mG.prototype.Nr = function () {
                            var mC = this;
                            var ms = this.state.currentPageState;
                            switch (ms) {
                                case xD.HistoryDetails:
                                case xD.HistoryFreeSpinDetails:
                                    I8(0.1)(function () {
                                        mC.setState({
                                            currentPageState: xD.HistoryList,
                                            previousPageState: ms,
                                        });
                                    });
                                    break;
                                case xD.HistoryCalendar:
                                    if (this.state.currentCalendarState === xJ.SELECTION) {
                                        this.setState({
                                            currentPageState: xD.HistoryList,
                                            previousPageState: ms,
                                        });
                                    } else {
                                        this.setState({
                                            currentCalendarState: xJ.SELECTION,
                                        });
                                    }
                                    break;
                                case xD.HistoryList:
                                    if (D7.isApiReplay) {
                                        break;
                                    }
                                    this.setState({
                                        currentPageState: xD.HistoryCalendar,
                                        previousPageState: ms,
                                    });
                            }
                        };
                        mG.prototype.Hr = function () {
                            var mC = this.state.currentPageState;
                            switch (mC) {
                                case xD.HistoryCalendar:
                                    if (this.state.currentCalendarState === xJ.SELECTION) {
                                        this.setState({
                                            currentPageState: xD.HistoryList,
                                            previousPageState: mC,
                                        });
                                    } else {
                                        this.setState({
                                            currentCalendarState: xJ.SELECTION,
                                        });
                                    }
                                    break;
                                case xD.HistoryList:
                                    if (this.props.quitCallback) {
                                        this.props.quitCallback();
                                    }
                            }
                        };
                        mG.prototype.jr = function (mC) {
                            var ms = this.state.currentPageState;
                            var mE = this.state.model;
                            mE.calendarType = mC;
                            this.setState({
                                currentCalendarState: xJ.SELECTION,
                                currentPageState: xD.HistoryList,
                                previousPageState: ms,
                                model: mE,
                            });
                            if (this.props.changeCalendarType) {
                                this.props.changeCalendarType(mC);
                            }
                        };
                        mG.prototype.zr = function () {
                            this.setState({
                                currentCalendarState: xJ.CUSTOM,
                            });
                        };
                        mG.prototype.Wn = function (mC) {
                            var ms = this.state.currentPageState;
                            this.setState({
                                currentPageState: xD.HistoryDetails,
                                previousPageState: ms,
                                selectedIndex: mC,
                            });
                        };
                        mG.prototype.Ei = function () {
                            var mC = this.state.currentPageState === xD.HistoryDetails ? xD.HistoryList : this.state.currentPageState;
                            var ms = this.Me ? "game-list-nav-vertical-card" : "";
                            var mE = Dm();
                            var mf = D7.appearanceHelper.navBarColor;
                            var mc = this.state;
                            var mZ = mc.model;
                            var mL = mc.currentCalendarState;
                            var R0 = mc.loadMoreInProgress;
                            return T.createElement(
                                "div",
                                {
                                    id: "game-list-view-navbar-container",
                                    className: ms,
                                    style: {
                                        width: "100%",
                                        height: `${62}px`,
                                        paddingTop: `${mE}px`,
                                        backgroundColor: mf,
                                    },
                                    ref: this.kr,
                                },
                                T.createElement(J1, {
                                    showTitle: function () {
                                        return shell.I18n.t("History.HistoryCalenderToday");
                                    },
                                    titleClickCallback: undefined,
                                    currentState: mC,
                                    currentCalendarType: mZ.calendarType,
                                    currentCalendarState: mL,
                                    leftButtonClickedCallback: this.Sr,
                                    rightButtonClickedCallback: this.Hr,
                                    showDropDownArrow: function () {
                                        return false;
                                    },
                                    calendarCustomDateConfig: mZ.calendarCustomDateConfig,
                                    showLeftDisabled: R0,
                                })
                            );
                        };
                        mG.prototype.Dr = function () {
                            return T.createElement(
                                "div",
                                {
                                    id: "game-list-view-contents-container",
                                    style: {
                                        height: this.state.parentHeight,
                                    },
                                    ref: this.Cr,
                                },
                                this.Ir()
                            );
                        };
                        mG.prototype.Fr = function () {
                            if (D7.isEnableVRF() && this.state.currentPageState !== xD.HistoryDetails) {
                                return T.createElement(I7, null);
                            } else {
                                return null;
                            }
                        };
                        mG.prototype.Ir = function () {
                            var mC = [];
                            mC.push(
                                T.createElement(PB, {
                                    key: "game-list-table-header",
                                    currencySymbol: this.props.model.currencySymbol,
                                })
                            );
                            if (this.state.model.betHistoryItems.length > 0) {
                                mC.push(
                                    T.createElement(PG, {
                                        key: "game-list-scroller",
                                        model: this.props.model,
                                        onListItemClickCallback: this.Wn,
                                        loadMoreApiCallback: this.rr,
                                    })
                                );
                            } else {
                                var ms = D7.appearanceHelper.listBackgroundColor;
                                mC.push(
                                    T.createElement(
                                        "div",
                                        {
                                            id: "game-list-view-no-items-container",
                                            key: "game-list-view-no-items-container",
                                            style: {
                                                height: `calc(100% - ${DT()}px)`,
                                                backgroundColor: ms,
                                            },
                                        },
                                        T.createElement(
                                            "div",
                                            {
                                                className: "game-list-view-no-item-label",
                                                style: {
                                                    fontSize: "14px",
                                                    color: D7.appearanceHelper.secondaryFontColor,
                                                },
                                            },
                                            I9.t("History.HistoryNoHistory")
                                        )
                                    )
                                );
                            }
                            mC.push(this.Lr());
                            return mC;
                        };
                        mG.prototype.Lr = function () {
                            var mC = this.state.model.betSummaryModel[0];
                            var ms = D7.historyShowWin
                                ? mC == null
                                    ? undefined
                                    : mC.batchTotalWinAmount
                                : mC == null
                                ? undefined
                                : mC.batchTotalWinLossAmount;
                            return T.createElement(Pf, {
                                date: this.Pr(),
                                key: "game-list-footer-port",
                                record: (mC && mC.betCount) || 0,
                                totalBet: (mC && mC.batchTotalBetAmount) || 0,
                                totalProfit: ms || 0,
                                currencySymbol: this.props.model.currencySymbol,
                            });
                        };
                        mG.prototype.Or = function (mC) {
                            var ms = this;
                            var mE = mC.currentPageState;
                            var mf = mC.model;
                            var mc = mC.selectedIndex;
                            if (mf.betHistoryItems.length !== 0 && mf.betHistoryItems[mc]) {
                                var mZ = mf.betHistoryItems[mc].betDetailsRaw;
                                var mL = {
                                    left: "100%",
                                };
                                var R0 = {
                                    left: "0%",
                                };
                                var R1 = {
                                    left: "100%",
                                };
                                if (shell.isRTLLanguage()) {
                                    mL = {
                                        right: "100%",
                                    };
                                    R0 = {
                                        right: "0%",
                                    };
                                    R1 = {
                                        right: "100%",
                                    };
                                }
                                return T.createElement(
                                    Q,
                                    {
                                        key: "game-detail-view-transition",
                                        config: xl,
                                        items: mE,
                                        from: mL,
                                        enter: R0,
                                        leave: R1,
                                        onStart: function () {
                                            if (mE !== xD.HistoryDetails) {
                                                ms.Mr(true);
                                            }
                                        },
                                        onRest: function () {
                                            if (mE === xD.HistoryDetails) {
                                                ms.Mr(false);
                                            }
                                        },
                                    },
                                    function (R2) {
                                        return (
                                            R2 === xD.HistoryDetails &&
                                            function (R3) {
                                                return T.createElement(
                                                    M.div,
                                                    {
                                                        style: x1(x1({}, R3), {
                                                            top: "0",
                                                            position: "absolute",
                                                            width: "inherit",
                                                            height: "inherit",
                                                            zIndex: "3",
                                                        }),
                                                    },
                                                    D7.isPrototype
                                                        ? T.createElement(I3, {
                                                              key: "prototype-game-detail-view",
                                                              betDetailsRaw: mZ,
                                                              navLeftButtonCallback: ms.Sr,
                                                          })
                                                        : T.createElement(Pb, {
                                                              key: "game-detail-view",
                                                              betDetailsRaw: mZ,
                                                              gameId: mf.gameId,
                                                              currencySymbol: mf.currencySymbol,
                                                              navLeftButtonCallback: ms.Sr,
                                                              quitCallback: ms.props.quitCallback,
                                                          })
                                                );
                                            }
                                        );
                                    }
                                );
                            }
                        };
                        mG.prototype.Tr = function () {
                            var mC = this.state.currentPageState;
                            return T.createElement(
                                "div",
                                {
                                    id: "calendar-container",
                                    style: {
                                        top: `${62}px`,
                                        display: mC === xD.HistoryCalendar ? "block" : "none",
                                    },
                                },
                                T.createElement(Pj, {
                                    model: this.state.model,
                                    currentCalendarType: this.state.model.calendarType,
                                    currentCalendarState: this.state.currentCalendarState,
                                    onCalendarCustomClicked: this.zr,
                                    onChangeCalendarTypeCallback: this.jr,
                                })
                            );
                        };
                        mG.prototype.Pr = function () {
                            var mC = "";
                            switch (this.state.model.calendarType) {
                                case 1:
                                default:
                                    mC = I9.t("History.HistoryCalenderToday");
                                    break;
                                case 2:
                                    mC = I9.t("History.HistoryCalenderWeek");
                                    break;
                                case 3:
                                    mC =
                                        Dx(this.state.model.calendarCustomDateConfig.startDate, true) +
                                        " - " +
                                        Dx(this.state.model.calendarCustomDateConfig.endDate, true);
                            }
                            return mC;
                        };
                        mG.prototype.pi = function (mC) {
                            var ms = mC.payload.height - Dl() - DH();
                            this.setState({
                                parentHeight: ms,
                            });
                        };
                        mG.prototype.rr = function (mC) {
                            var ms = this;
                            this.setState({
                                loadMoreInProgress: true,
                            });
                            if (this.props.onLoadMoreRequestApi) {
                                this.props.onLoadMoreRequestApi(function () {
                                    ms.setState({
                                        loadMoreInProgress: false,
                                    });
                                    if (mC) {
                                        mC();
                                    }
                                });
                            }
                        };
                        mG.prototype.Mr = function (mC) {
                            if (this.Cr.current) {
                                this.Cr.current.style.display = mC ? "block" : "none";
                            }
                            if (this.kr.current) {
                                this.kr.current.style.display = mC ? "block" : "none";
                            }
                        };
                        return mG;
                    })(T.PureComponent);
                    var ID = shell.I18n;
                    var IJ = (function (mF) {
                        function mG(mC) {
                            var ms = mF.call(this, mC) || this;
                            var mE = (document.getElementById("game-history-container").offsetWidth * 0.2) / 390;
                            ms.state = {
                                isCustomOpen: ms.props.currentCalendarState === xJ.CUSTOM,
                                customScale: mE,
                            };
                            ms.ln = ms.ln.bind(ms);
                            ms.cn = ms.cn.bind(ms);
                            ms.hn = ms.hn.bind(ms);
                            ms.G = ms.G.bind(ms);
                            ms.Ar = ms.Ar.bind(ms);
                            ms.Br = ms.Br.bind(ms);
                            ms.Rr = ms.Rr.bind(ms);
                            ms.un = ms.un.bind(ms);
                            return ms;
                        }
                        x0(mG, mF);
                        mG.prototype.render = function () {
                            var mC = {};
                            if (shell.isRTLLanguage()) {
                                mC.paddingRight = "30px";
                                mC.paddingLeft = 0;
                                mC.direction = "rtl";
                            }
                            return T.createElement(
                                "div",
                                {
                                    id: "calendar-view-container-horizontal",
                                    style: mC,
                                },
                                this.dn()
                            );
                        };
                        mG.prototype.componentDidMount = function () {
                            D7.context.event.on("Shell.Scaled", this.pi, this);
                        };
                        mG.prototype.componentWillUnmount = function () {
                            D7.context.event.off("Shell.Scaled", this.pi, this);
                        };
                        mG.prototype.ln = function () {
                            if (!this.props.isLoading) {
                                if (this.props.onChangeCalendarTypeCallback) {
                                    this.props.onChangeCalendarTypeCallback(1);
                                }
                            }
                        };
                        mG.prototype.cn = function () {
                            if (!this.props.isLoading) {
                                if (this.props.onChangeCalendarTypeCallback) {
                                    this.props.onChangeCalendarTypeCallback(2);
                                }
                            }
                        };
                        mG.prototype.hn = function () {
                            if (!this.props.isLoading) {
                                if (this.state.isCustomOpen) {
                                    if (this.props.onCalendarCustomClicked) {
                                        this.props.onCalendarCustomClicked(xJ.SELECTION);
                                    }
                                    this.setState({
                                        isCustomOpen: false,
                                    });
                                } else {
                                    if (this.props.onCalendarCustomClicked) {
                                        this.props.onCalendarCustomClicked(xJ.CUSTOM);
                                    }
                                    this.setState({
                                        isCustomOpen: true,
                                    });
                                }
                            }
                        };
                        mG.prototype.G = function (mC, ms) {
                            if (!this.props.isLoading) {
                                this.props.model.calendarCustomDateConfig = {
                                    startDate: mC,
                                    endDate: ms,
                                };
                                this.props.onChangeCalendarTypeCallback(3);
                                this.setState({
                                    isCustomOpen: false,
                                });
                            }
                        };
                        mG.prototype.dn = function () {
                            var mC = [];
                            var ms = {
                                color: D7.appearanceHelper.calendarTitleColor,
                            };
                            if (shell.isRTLLanguage()) {
                                ms.textAlign = "right";
                            }
                            mC.push(
                                T.createElement(
                                    "div",
                                    {
                                        className: "calendar-item-container-horizontal calendar-item-container",
                                        key: "select-date-range",
                                        style: ms,
                                    },
                                    T.createElement(
                                        "div",
                                        {
                                            className: "calendar-item-label",
                                        },
                                        ID.t("History.HistoryCalendarDateRange")
                                    )
                                )
                            );
                            mC.push(this.Ar());
                            mC.push(this.Br());
                            mC.push(this.Rr());
                            mC.push(this.un());
                            return mC;
                        };
                        mG.prototype.Ar = function () {
                            var mC = this.state.isCustomOpen;
                            var ms = this.props.currentCalendarType === 1;
                            var mE = !mC && ms ? D7.appearanceHelper.highlightFontColor : D7.appearanceHelper.primaryFontColor;
                            var mf = {};
                            if (shell.isRTLLanguage()) {
                                mf.textAlign = "right";
                            }
                            return T.createElement(
                                "div",
                                {
                                    className: "calendar-item-container-horizontal calendar-item-container",
                                    onClick: this.ln,
                                    key: "calendar-date-today",
                                    style: mf,
                                },
                                T.createElement(
                                    "div",
                                    {
                                        className: "calendar-item-label",
                                        style: {
                                            color: mE,
                                            opacity: this.props.isLoading ? 0.3 : 1,
                                        },
                                    },
                                    ID.t("History.HistoryCalenderToday")
                                )
                            );
                        };
                        mG.prototype.Br = function () {
                            var mC = this.state.isCustomOpen;
                            var ms = this.props.currentCalendarType === 2;
                            var mE = !mC && ms ? D7.appearanceHelper.highlightFontColor : D7.appearanceHelper.primaryFontColor;
                            var mf = {};
                            if (shell.isRTLLanguage()) {
                                mf.textAlign = "right";
                            }
                            return T.createElement(
                                "div",
                                {
                                    className: "calendar-item-container-horizontal calendar-item-container",
                                    onClick: this.cn,
                                    key: "calendar-date-week",
                                    style: mf,
                                },
                                T.createElement(
                                    "div",
                                    {
                                        className: "calendar-item-label",
                                        style: {
                                            color: mE,
                                            opacity: this.props.isLoading ? 0.3 : 1,
                                        },
                                    },
                                    ID.t("History.HistoryCalenderWeek")
                                )
                            );
                        };
                        mG.prototype.Rr = function () {
                            var mC = this.state.isCustomOpen;
                            var ms = mC ? "angle-up" : "angle-down";
                            var mE = this.props.currentCalendarType === 3 || mC ? D7.appearanceHelper.highlightFontColor : D7.appearanceHelper.primaryFontColor;
                            var mf = mE;
                            var mc = mC ? "translateY(4px)" : "translateY(-4px)";
                            var mZ = {};
                            if (shell.isRTLLanguage()) {
                                mZ.textAlign = "right";
                            }
                            return T.createElement(
                                "div",
                                {
                                    id: "calendar-custom-container",
                                    onClick: this.hn,
                                    key: "calendar-custom-container",
                                },
                                T.createElement(
                                    "div",
                                    {
                                        className: "calendar-item-container calendar-item-container-horizontal",
                                        style: mZ,
                                    },
                                    T.createElement(
                                        "div",
                                        {
                                            className: "calendar-item-label",
                                            style: {
                                                color: mE,
                                                opacity: this.props.isLoading ? 0.3 : 1,
                                            },
                                        },
                                        ID.t("History.HistoryCalenderCustom")
                                    )
                                ),
                                T.createElement(
                                    "div",
                                    {
                                        id: "calendar-arrow-image-container",
                                    },
                                    T.createElement(
                                        "div",
                                        {
                                            className: "gh-angle-wrapper",
                                            style: {
                                                transform: mc,
                                            },
                                        },
                                        T.createElement("div", {
                                            id: "calendar-arrow",
                                            className: `gh-angle-horizontal ${ms}`,
                                            style: {
                                                borderColor: mf,
                                            },
                                        })
                                    )
                                )
                            );
                        };
                        mG.prototype.un = function () {
                            var mC = this.state;
                            var ms = mC.isCustomOpen;
                            var mE = mC.customScale;
                            var mf = undefined;
                            if (ms) {
                                var mc = {
                                    transform: `scale(${mE}) translateX(-20px)`,
                                };
                                if (shell.isRTLLanguage()) {
                                    mc.transform = `scale(${mE}) translateX(20px)`;
                                }
                                mf = T.createElement(
                                    "div",
                                    {
                                        id: "calendar-custom-view-container",
                                        style: mc,
                                        key: "calendar-custom-view-container",
                                    },
                                    T.createElement(xq.CalendarCustomViewH, {
                                        key: "calendar-custom-view",
                                        isRTL: shell.isRTLLanguage(),
                                        caseType: xq.CaseType.SLOT_GAME,
                                        themeColor: D7.appearanceHelper.calendarColor,
                                        backgroundColor: D7.appearanceHelper.calendarBackgroundColor,
                                        onConfirmClicked: this.G,
                                    })
                                );
                            }
                            return mf;
                        };
                        mG.prototype.pi = function (mC) {
                            var ms = (mC.payload.width * 0.6000000000000001) / 390;
                            this.setState({
                                customScale: ms,
                            });
                        };
                        return mG;
                    })(T.Component);
                    var IN = shell.I18n;
                    var IP = (function (mF) {
                        function mG(mC) {
                            var ms = mF.call(this, mC) || this;
                            ms.Ge = ms.Ge.bind(ms);
                            ms.jr = ms.jr.bind(ms);
                            ms.zr = ms.zr.bind(ms);
                            return ms;
                        }
                        x0(mG, mF);
                        mG.prototype.jr = function (mC) {
                            if (this.props.onChangeCalendarTypeCallback) {
                                this.props.onChangeCalendarTypeCallback(mC);
                            }
                        };
                        mG.prototype.zr = function (mC) {
                            if (this.props.onCalendarCustomClicked) {
                                this.props.onCalendarCustomClicked(mC);
                            }
                        };
                        mG.prototype.render = function () {
                            var mC = {
                                backgroundColor: D7.appearanceHelper.navBarPanelColor,
                            };
                            var ms = {};
                            if (shell.isRTLLanguage()) {
                                ms.direction = "rtl";
                            }
                            return T.createElement(
                                "div",
                                {
                                    id: "game-list-nav",
                                    className: "game-list-nav-horizontal",
                                    style: mC,
                                },
                                T.createElement(
                                    "div",
                                    {
                                        id: "game-list-nav-bar",
                                        className: "game-list-nav-bar-horizontal",
                                        style: ms,
                                    },
                                    this.Ge(),
                                    T.createElement(IJ, {
                                        model: this.props.model,
                                        currentCalendarType: this.props.model.calendarType,
                                        currentCalendarState: this.props.currentCalendarState,
                                        onChangeCalendarTypeCallback: this.jr,
                                        onCalendarCustomClicked: this.zr,
                                        isLoading: this.props.isLoading,
                                    })
                                )
                            );
                        };
                        mG.prototype.Ge = function () {
                            var mC = [];
                            var ms = D7.appearanceHelper.titleFontColor;
                            var mE = {};
                            if (shell.isRTLLanguage()) {
                                mE.direction = "rtl";
                                mE.paddingRight = "8%";
                                mE.paddingLeft = 0;
                            }
                            mC.push(
                                T.createElement(
                                    "div",
                                    {
                                        id: "game-list-nav-label-container",
                                        className: "game-list-nav-label-container-horizontal",
                                        key: "game-list-nav-label-container",
                                        style: mE,
                                    },
                                    T.createElement(
                                        "div",
                                        {
                                            className: "game-list-nav-period-label",
                                            style: {
                                                fontSize: "30px",
                                                lineHeight: "33px",
                                                color: ms,
                                            },
                                        },
                                        IN.t("History.HistoryMainTitle")
                                    )
                                )
                            );
                            return mC;
                        };
                        return mG;
                    })(T.Component);
                    var II = shell.I18n;
                    var Im = (function (mF) {
                        function mG(mC) {
                            var ms = mF.call(this, mC) || this;
                            ms.state = {
                                disableCloseButton: mC.disableCloseButton,
                            };
                            ms.gr = x7.formatCurrency(ms.props.totalBet, "");
                            ms.pr = x7.formatCurrency(ms.props.totalProfit, "");
                            ms.We = ms.We.bind(ms);
                            return ms;
                        }
                        x0(mG, mF);
                        mG.prototype.componentDidUpdate = function (mC) {
                            if (mC.disableCloseButton !== this.props.disableCloseButton) {
                                this.setState({
                                    disableCloseButton: this.props.disableCloseButton,
                                });
                            }
                        };
                        mG.prototype.render = function () {
                            var mC = D7.appearanceHelper.footerDateFontColor;
                            var ms = D7.appearanceHelper.primaryFontColor;
                            var mE = D7.appearanceHelper.highlightFontColor;
                            var mf = this.props.currencySymbol
                                ? `${II.t("History.HistoryMainPagePayout")}(${this.props.currencySymbol})`
                                : `${II.t("History.HistoryMainPagePayout")}`;
                            var mc = this.props.currencySymbol
                                ? `${II.t("History.HistoryMainPageWin")}(${this.props.currencySymbol})`
                                : `${II.t("History.HistoryMainPageWin")}`;
                            var mZ = this.props.shrink ? "24px" : "30px";
                            mZ = this.props.isMobile ? "14px" : mZ;
                            var mL = D7.appearanceHelper.navBarSeparatorColor;
                            var R0 = D7.isMobile ? "-mobile" : "";
                            var R1 = D7.displayConfig;
                            var R2 = R1.hideBet;
                            var R3 = R1.betLabel;
                            var R4 = R1.hideProfit;
                            var R5 = R1.profitLabel;
                            var R6 = {
                                backgroundColor: D7.appearanceHelper.footerBarColor,
                            };
                            var R7 = {};
                            var R8 = {};
                            if (shell.isRTLLanguage()) {
                                R6.direction = "rtl";
                                R7.textAlign = "right";
                                R8.textAlign = "left";
                            }
                            return T.createElement(
                                "div",
                                {
                                    id: "game-list-footer-wrapper",
                                    style: R6,
                                },
                                T.createElement(
                                    "div",
                                    {
                                        id: "game-list-footer-container",
                                        className: `game-list-footer-container-horizontal${R0}`,
                                    },
                                    T.createElement(
                                        "div",
                                        {
                                            className: `game-list-footer-date-container-horizontal${R0}`,
                                            style: R7,
                                        },
                                        T.createElement(
                                            "div",
                                            {
                                                className: `game-list-footer-record-horizontal${R0}`,
                                                style: {
                                                    color: ms,
                                                },
                                            },
                                            `${this.props.record} ${II.t("History.HistoryRecords")}`
                                        ),
                                        T.createElement(
                                            "div",
                                            {
                                                className: `game-list-footer-date-label-horizontal${R0}`,
                                                style: {
                                                    color: mC,
                                                    fontSize: mZ,
                                                },
                                            },
                                            this.props.date
                                        )
                                    ),
                                    T.createElement(
                                        "div",
                                        {
                                            className: `game-list-footer-date-container-horizontal${R0}`,
                                            style: x1(
                                                {
                                                    visibility: R2 ? "hidden" : "visible",
                                                },
                                                R8
                                            ),
                                        },
                                        T.createElement(
                                            "div",
                                            {
                                                className: `game-list-footer-record-horizontal${R0}`,
                                                style: {
                                                    color: ms,
                                                },
                                            },
                                            mf
                                        ),
                                        T.createElement(
                                            "div",
                                            {
                                                className: `game-list-footer-date-label-horizontal${R0}`,
                                                style: {
                                                    color: mE,
                                                    fontSize: mZ,
                                                },
                                            },
                                            R3 || this.gr
                                        )
                                    ),
                                    T.createElement(
                                        "div",
                                        {
                                            className: `game-list-footer-date-container-horizontal${R0}`,
                                            style: x1(
                                                {
                                                    visibility: R4 ? "hidden" : "visible",
                                                },
                                                R8
                                            ),
                                        },
                                        T.createElement(
                                            "div",
                                            {
                                                className: `game-list-footer-record-horizontal${R0}`,
                                                style: {
                                                    color: ms,
                                                },
                                            },
                                            mc
                                        ),
                                        T.createElement(
                                            "div",
                                            {
                                                className: `game-list-footer-date-label-horizontal${R0}`,
                                                style: {
                                                    color: mE,
                                                    fontSize: mZ,
                                                },
                                            },
                                            R5 || this.pr
                                        )
                                    ),
                                    this.Er()
                                ),
                                T.createElement("div", {
                                    key: "game-list-nav-separator",
                                    className: "game-list-nav-separator-vertical-slot",
                                    style: {
                                        backgroundColor: mL,
                                    },
                                })
                            );
                        };
                        mG.prototype.Er = function () {
                            if (!this.state.disableCloseButton) {
                                var mC = D7.isMobile ? "translate(20px, 0px)" : "translate(25px, 5px)";
                                var ms = {};
                                if (shell.isRTLLanguage()) {
                                    ms.textAlign = "left";
                                    mC = D7.isMobile ? "translate(-20px, 0px)" : "translate(-25px, 5px)";
                                }
                                return T.createElement(
                                    "div",
                                    {
                                        className: "game-list-nav-image-container game-list-nav-image-container-slot",
                                        key: "game-list-nav-image-container-right",
                                        onClick: this.We,
                                        style: ms,
                                    },
                                    T.createElement(
                                        "div",
                                        {
                                            id: "game-list-nav-image-right",
                                            style: {
                                                display: "flex",
                                                transform: mC,
                                            },
                                        },
                                        T.createElement(Df, {
                                            isPortrait: false,
                                        })
                                    )
                                );
                            }
                        };
                        mG.prototype.We = function () {
                            var mC = this.props.closeButtonClickedCallback;
                            if (mC) {
                                mC();
                            }
                        };
                        return mG;
                    })(T.Component);
                    var IR = shell.I18n;
                    var Il = {
                        guideContainer: {
                            display: "flex",
                            flexDirection: "column",
                            padding: "0px 26px",
                        },
                        guideRow: {
                            display: "flex",
                        },
                        guideSeperatorRow: {
                            display: "flex",
                            height: "30px",
                        },
                        step: {
                            width: "22px",
                            height: "22px",
                            borderRadius: "50%",
                            backgroundColor: "#F5AC58",
                            fontSize: "14px",
                            color: " #30303C",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        },
                        stepDesc: {
                            color: "rbga(255,255,255,0.5)",
                            lineHeight: "26px",
                            width: "100%",
                            fontSize: "20px",
                            padding: "0px 12px",
                        },
                        stepSeparator: {
                            color: "#F5AC58",
                            marginTop: "-6px",
                            width: "28px",
                            textAlign: "center",
                            opacity: 0.5,
                        },
                        seperatorLine: {
                            opacity: 0.08,
                            backgroundColor: "#FFFFFF",
                            height: "2px",
                            marginBottom: "30px",
                        },
                    };
                    function Iu() {
                        var mF = DU(IR.t("History.HistoryVrfStep2"), D7.appearanceHelper.themeColor);
                        var mG = x1(x1({}, Il.stepSeparator), {
                            color: D7.appearanceHelper.themeColor,
                        });
                        var mC = x1(x1({}, Il.step), {
                            backgroundColor: D7.appearanceHelper.themeColor,
                        });
                        var ms = x1({}, Il.guideContainer);
                        if (shell.isRTLLanguage()) {
                            ms.direction = "rtl";
                            mG.width = "auto";
                        }
                        return T.createElement(
                            "div",
                            {
                                style: ms,
                            },
                            T.createElement("div", {
                                style: Il.seperatorLine,
                            }),
                            T.createElement(
                                "div",
                                {
                                    style: Il.guideRow,
                                },
                                T.createElement(
                                    "div",
                                    {
                                        style: mC,
                                    },
                                    T.createElement("span", null, "1")
                                ),
                                T.createElement(
                                    "div",
                                    {
                                        style: Il.stepDesc,
                                    },
                                    IR.t("History.HistoryVrfStep1")
                                )
                            ),
                            T.createElement(
                                "div",
                                {
                                    style: Il.guideSeperatorRow,
                                },
                                T.createElement("div", {
                                    className: "gh-seperator-dots",
                                    style: mG,
                                })
                            ),
                            T.createElement(
                                "div",
                                {
                                    style: Il.guideRow,
                                },
                                T.createElement(
                                    "div",
                                    {
                                        style: mC,
                                    },
                                    T.createElement("span", null, "2")
                                ),
                                T.createElement("div", {
                                    style: Il.stepDesc,
                                    dangerouslySetInnerHTML: {
                                        __html: mF,
                                    },
                                })
                            ),
                            T.createElement(
                                "div",
                                {
                                    style: Il.guideSeperatorRow,
                                },
                                T.createElement("div", {
                                    className: "gh-seperator-dots",
                                    style: mG,
                                })
                            ),
                            T.createElement(
                                "div",
                                {
                                    style: Il.guideRow,
                                },
                                T.createElement(
                                    "div",
                                    {
                                        style: mC,
                                    },
                                    T.createElement("span", null, "3")
                                ),
                                T.createElement(
                                    "div",
                                    {
                                        style: Il.stepDesc,
                                    },
                                    IR.t("History.HistoryVrfStep3")
                                )
                            )
                        );
                    }
                    var IT = shell.I18n;
                    var Id = {
                        linkContainer: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            paddingTop: "12px",
                        },
                        content: {
                            width: "calc(100% - 52px)",
                            height: "78px",
                            background: "#3E3E4A",
                            borderRadius: "8px",
                            display: "flex",
                            alignItems: "center",
                        },
                        contentDescLeft: {
                            fontSize: "20px",
                            lineHeight: "26px",
                            color: "rgba(255,255,255,0.5)",
                            paddingLeft: "26px",
                        },
                        contentDescRight: {
                            fontSize: "20px",
                            lineHeight: "26px",
                            color: "#FFFFFF",
                        },
                        contentSeperator: {
                            backgroundColor: "#FFFFFF",
                            width: "2px",
                            height: "21px",
                            opacity: 0.08,
                            margin: "0px 40px",
                        },
                        bottomContent: {
                            display: "flex",
                            width: "calc(100% - 52px)",
                            justifyContent: "center",
                            alignItems: "center",
                            paddingBottom: "26px",
                            paddingTop: "24px",
                        },
                        bottomContentLeft: {
                            width: "calc(100% - 40px)",
                        },
                        bottomContentDesc1: {
                            opacity: 0.5,
                            color: "#FFFFFF",
                            fontSize: "20px",
                            lineHeight: "26px",
                        },
                        bottomContentDesc2: {
                            color: "#F5AC58",
                            fontSize: "20px",
                            lineHeight: "26px",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            direction: "ltr",
                            paddingRight: "60px",
                        },
                        buttonVerify: {
                            backgroundColor: "#F5AC58",
                            borderRadius: "31px",
                            fontSize: "20px",
                            color: "#FFFFFF",
                            textAlign: "center",
                            lineHeight: "58px",
                            width: "268px",
                            height: "58px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        },
                        spriteImage: {
                            transformOrigin: "top left",
                            transform: "scale(1)",
                        },
                        buttonCopy: {
                            width: "40px",
                            height: "40px",
                        },
                        copyToast: {
                            position: "absolute",
                            backgroundColor: "#30303C",
                            boxShadow: "0 6px 6px 0 rgba(0, 0, 0, 0.10)",
                            borderRadius: "8px",
                            fontSize: "20px",
                            lineHeight: "54px",
                            textAlign: "center",
                            padding: "0px 28px",
                            top: "166px",
                            right: "26px",
                            color: "#FFFFFF",
                        },
                    };
                    function Iq(mF) {
                        var mG = x5(U(3), 2);
                        var mC = mG[0];
                        var ms = mG[1];
                        var mE = x5(U(false), 2);
                        var mf = mE[0];
                        var mc = mE[1];
                        var mZ = H(false);
                        var mL = H(null);
                        var R0 = H({
                            id1: null,
                            id2: null,
                        });
                        q(function () {
                            return function () {
                                m.clearTimeout(R0.current.id1);
                                m.clearTimeout(R0.current.id2);
                            };
                        }, []);
                        q(
                            function () {
                                if (mF.selectedTransactionId !== 0 && mC === 3) {
                                    R0.current.id1 = m.setTimeout(R5, 600);
                                }
                            },
                            [mF.selectedTransactionId]
                        );
                        q(
                            function () {
                                if (mZ.current) {
                                    mL.current.className = mf ? "gh-copy-anim-default gh-copy-anim-show" : "gh-copy-anim-default gh-copy-anim-hide";
                                } else {
                                    mZ.current = true;
                                }
                            },
                            [mf]
                        );
                        var R1 = D7.getVRFLink(mF.selectedTransactionId);
                        var R2 = x1(x1({}, Id.bottomContentDesc2), {
                            color: D7.appearanceHelper.themeColor,
                        });
                        var R3 = x1(x1({}, Id.buttonVerify), {
                            backgroundColor: D7.appearanceHelper.themeColor,
                        });
                        function R4() {
                            ms(2);
                        }
                        function R5() {
                            ms(0);
                        }
                        function R6() {
                            Dh(R1);
                            mc(true);
                            R0.current.id2 = m.setTimeout(function () {
                                mc(false);
                            }, 2000);
                        }
                        var R7 = x1({}, Id.content);
                        var R8 = x1({}, Id.contentDescLeft);
                        if (shell.isRTLLanguage()) {
                            R7.direction = "rtl";
                            R8.paddingLeft = "0px";
                            R8.paddingRight = "14px";
                        }
                        return T.createElement(
                            "div",
                            {
                                style: Id.linkContainer,
                            },
                            mC === 3
                                ? T.createElement(
                                      "div",
                                      {
                                          style: R7,
                                      },
                                      T.createElement("div", {
                                          className: "gh-placeholder-loading",
                                      })
                                  )
                                : T.createElement(
                                      "div",
                                      {
                                          style: R7,
                                      },
                                      T.createElement(
                                          "div",
                                          {
                                              style: R8,
                                          },
                                          IT.t("History.HistoryVrfTransID")
                                      ),
                                      T.createElement("div", {
                                          style: Id.contentSeperator,
                                      }),
                                      T.createElement(
                                          "div",
                                          {
                                              style: Id.contentDescRight,
                                          },
                                          mF.selectedTransactionId
                                      )
                                  ),
                            mC !== 2
                                ? (mC === 3 &&
                                      Object.assign(R3, {
                                          opacity: 0.2,
                                      }),
                                  T.createElement(
                                      "div",
                                      {
                                          style: Id.bottomContent,
                                      },
                                      T.createElement(
                                          "div",
                                          {
                                              id: "gh-vrf-btn",
                                              className: xd,
                                              style: R3,
                                              onClick: function () {
                                                  if (mC !== 1 && mC !== 3) {
                                                      ms(1);
                                                      if (m.open(R1, "_blank")) {
                                                          m.dataLayer.push({
                                                              event: "verify_open_success",
                                                          });
                                                          R0.current.id1 = m.setTimeout(R5, 2000);
                                                      } else {
                                                          m.dataLayer.push({
                                                              event: "verify_open_failed",
                                                          });
                                                          R0.current.id1 = m.setTimeout(R4, 2000);
                                                      }
                                                  }
                                              },
                                          },
                                          mC === 1
                                              ? T.createElement(
                                                    T.Fragment,
                                                    null,
                                                    T.createElement("div", {
                                                        className: "gh-btn-loading-h",
                                                    }),
                                                    T.createElement("div", {
                                                        className: "gh-btn-loading-h",
                                                    }),
                                                    T.createElement("div", {
                                                        className: "gh-btn-loading-h",
                                                    })
                                                )
                                              : IT.t("History.HistoryVrfBtn")
                                      )
                                  ))
                                : (function () {
                                      var R9 = x1({}, Id.bottomContentLeft);
                                      if (shell.isRTLLanguage()) {
                                          R9.direction = "rtl";
                                      }
                                      var Rx = [];
                                      Rx.push(
                                          T.createElement(
                                              "div",
                                              {
                                                  key: "bottomContentLeft",
                                                  style: R9,
                                              },
                                              T.createElement(
                                                  "div",
                                                  {
                                                      style: Id.bottomContentDesc1,
                                                  },
                                                  IT.t("History.HistoryVrfBrowserErr")
                                              ),
                                              T.createElement(
                                                  "div",
                                                  {
                                                      style: R2,
                                                  },
                                                  R1
                                              )
                                          )
                                      );
                                      Rx.push(
                                          T.createElement(
                                              "div",
                                              {
                                                  key: "gh-copy-button",
                                                  id: "gh-copy-btn",
                                                  className: xd,
                                                  style: Id.buttonCopy,
                                                  onClick: R6,
                                              },
                                              T.createElement("div", {
                                                  className: "gh_theme_sprite gh_ic_copy",
                                                  style: Id.spriteImage,
                                              })
                                          )
                                      );
                                      var RD = x1({}, Id.copyToast);
                                      if (shell.isRTLLanguage()) {
                                          Rx = Rx.reverse();
                                          RD.right = null;
                                          RD.left = "16px";
                                      }
                                      return T.createElement(
                                          "div",
                                          {
                                              style: Id.bottomContent,
                                          },
                                          Rx,
                                          T.createElement(
                                              "div",
                                              {
                                                  ref: mL,
                                                  className: "gh-copy-anim-default",
                                                  style: RD,
                                              },
                                              IT.t("History.HistoryVrfLinkCopied")
                                          )
                                      );
                                  })()
                        );
                    }
                    var Ih = shell.I18n;
                    var IH = {
                        container: {
                            width: "100%",
                            position: "absolute",
                            bottom: 0,
                            pointerEvents: "none",
                            zIndex: 1,
                        },
                        barPosition: {
                            backgroundColor: "rgb(41, 41, 52)",
                            position: "absolute",
                            width: "100%",
                            height: "166px",
                            bottom: "0px",
                            display: "flex",
                            justifyContent: "center",
                        },
                    };
                    function IU(mF) {
                        var mG = x5(U(0), 2);
                        var mC = mG[0];
                        var ms = mG[1];
                        var mE = H();
                        q(function () {
                            P6.set("isListPageScroll", false);
                            var mL = P6.observe("isListPageScroll", function (R1) {
                                if (R1) {
                                    mE.current.updateState({
                                        isExpended: false,
                                        arrowAnimType: 2,
                                    });
                                }
                            });
                            var R0 = P6.observe("selectedTransactionId", function (R1) {
                                P6.set("isListPageScroll", false);
                                ms(R1);
                                mE.current.updateState({
                                    isExpended: true,
                                    arrowAnimType: 2,
                                });
                            });
                            return function () {
                                mL();
                                R0();
                            };
                        }, []);
                        var mf = x1(x1({}, IH.barPosition), {
                            backgroundColor: D7.appearanceHelper.footerBarColor,
                        });
                        var mc = DU(Ih.t("History.HistoryVryBarTitle1"), D7.appearanceHelper.themeColor);
                        var mZ = 0;
                        if (mF.displayType === 1) {
                            mc = DU(Ih.t("History.HistoryVrfBarTitle2"), D7.appearanceHelper.themeColor);
                            mZ = 1;
                        }
                        return T.createElement(
                            "div",
                            {
                                style: IH.container,
                            },
                            T.createElement(
                                "div",
                                {
                                    key: "verification",
                                    style: mf,
                                },
                                T.createElement(
                                    Ph,
                                    {
                                        ref: mE,
                                        barLayout: mZ,
                                        defaultIsExpanded: true,
                                        expandableHeight: 304,
                                        barTitle: mc,
                                        onButtonClicked: function () {
                                            P6.set("isListPageScroll", false);
                                        },
                                    },
                                    mF.displayType === 0
                                        ? T.createElement(Iu, null)
                                        : T.createElement(Iq, {
                                              selectedTransactionId: mC,
                                          })
                                )
                            )
                        );
                    }
                    var io = x7.timeoutCallback;
                    var Ig = shell.I18n;
                    var IS = (function (mF) {
                        function mG(mC) {
                            var ms = mF.call(this, mC) || this;
                            ms.Vr = false;
                            var mE = xD.HistoryList;
                            var mf = document.getElementById("game-history-container");
                            ms.state = {
                                model: mC.model,
                                currentPageState: mE,
                                previousPageState: mE,
                                currentCalendarState: xJ.SELECTION,
                                selectedIndex: -1,
                                parentWidth: mf.offsetWidth,
                                detailsPageWidth: 607.5 / mf.offsetWidth,
                            };
                            ms.Sr = ms.Sr.bind(ms);
                            ms.Hr = ms.Hr.bind(ms);
                            ms.zr = ms.zr.bind(ms);
                            ms.jr = ms.jr.bind(ms);
                            ms.Wn = ms.Wn.bind(ms);
                            ms.Or = ms.Or.bind(ms);
                            return ms;
                        }
                        x0(mG, mF);
                        mG.prototype.componentDidMount = function () {
                            D7.context.event.on("Shell.Scaled", this.pi, this);
                        };
                        mG.prototype.componentWillUnmount = function () {
                            D7.context.event.off("Shell.Scaled", this.pi, this);
                        };
                        mG.prototype.render = function () {
                            var mC = [this.Ei(), this.Dr()];
                            var ms = {
                                flexDirection: "row",
                            };
                            if (shell.isRTLLanguage()) {
                                mC = mC.reverse();
                                ms.justifyContent = "flex-end";
                            }
                            return T.createElement(
                                "div",
                                {
                                    id: "game-list-view",
                                    className: "game-list-view-container game-list-view-container-slot",
                                    style: {
                                        backgroundColor: D7.appearanceHelper.listBackgroundColor,
                                    },
                                },
                                T.createElement(
                                    "div",
                                    {
                                        id: "game-list-view-wrapper",
                                        style: ms,
                                    },
                                    mC
                                ),
                                this.Or(this.state)
                            );
                        };
                        mG.prototype.Sr = function () {
                            var mC = this;
                            var ms = this.state.currentPageState;
                            switch (ms) {
                                case xD.HistoryDetails:
                                case xD.HistoryFreeSpinDetails:
                                case xD.HistoryCalendar:
                                    this.Wr(0.25);
                                    this.setState({
                                        selectedIndex: -1,
                                    });
                                    io(0.05)(function () {
                                        mC.setState({
                                            currentPageState: xD.HistoryList,
                                            previousPageState: ms,
                                        });
                                    });
                                    break;
                                case xD.HistoryList:
                                    this.setState({
                                        currentPageState: xD.HistoryCalendar,
                                        previousPageState: ms,
                                    });
                            }
                        };
                        mG.prototype.Hr = function () {
                            var mC = this.state.currentPageState;
                            switch (mC) {
                                case xD.HistoryCalendar:
                                    if (this.state.currentCalendarState === xJ.SELECTION) {
                                        this.setState({
                                            currentPageState: xD.HistoryList,
                                            previousPageState: mC,
                                        });
                                    } else {
                                        this.setState({
                                            currentCalendarState: xJ.SELECTION,
                                        });
                                    }
                                    break;
                                case xD.HistoryList:
                                    if (this.props.quitCallback) {
                                        this.props.quitCallback();
                                    }
                            }
                        };
                        mG.prototype.jr = function (mC) {
                            var ms = this.state.currentPageState;
                            var mE = this.state.model;
                            mE.calendarType = mC;
                            this.setState({
                                currentCalendarState: xJ.SELECTION,
                                currentPageState: xD.HistoryList,
                                previousPageState: ms,
                                model: mE,
                                selectedIndex: -1,
                            });
                            this.props.changeCalendarType(mC);
                        };
                        mG.prototype.zr = function (mC) {
                            this.setState({
                                currentCalendarState: mC,
                            });
                        };
                        mG.prototype.Wn = function (mC) {
                            var ms = this.state;
                            var mE = ms.currentPageState;
                            var mf = ms.selectedIndex;
                            if (!this.Vr) {
                                if (mE === xD.HistoryDetails && mf !== mC) {
                                    this.Wr(0.2);
                                    this.setState({
                                        selectedIndex: mC,
                                    });
                                } else {
                                    this.Wr(0.2);
                                    this.setState({
                                        currentPageState: xD.HistoryDetails,
                                        previousPageState: mE,
                                        selectedIndex: mC,
                                    });
                                }
                            }
                        };
                        mG.prototype.Ei = function () {
                            var mC = {
                                width: "20%",
                                height: "100%",
                            };
                            if (shell.isRTLLanguage()) {
                                mC.boxShadow = "-1px 0 4px 0 rgba(0,0,0,0.3)";
                            }
                            return T.createElement(
                                "div",
                                {
                                    key: "game-list-view-navbar-container-horizontal",
                                    id: "game-list-view-navbar-container-horizontal",
                                    style: mC,
                                },
                                T.createElement(IP, {
                                    model: this.state.model,
                                    currentCalendarState: this.state.currentCalendarState,
                                    onCalendarCustomClicked: this.zr,
                                    onChangeCalendarTypeCallback: this.jr,
                                    isLoading: this.props.isLoading,
                                })
                            );
                        };
                        mG.prototype.Dr = function () {
                            var mC = this.props.fadeLoading;
                            var ms = this.state;
                            var mE = ms.currentPageState;
                            var mf = ms.detailsPageWidth;
                            var mc = mE === xD.HistoryDetails ? mf * 100 : 0;
                            if (this.props.isLoading) {
                                var mZ = {
                                    width: "80%",
                                    left: "20%",
                                    backgroundColor: D7.appearanceHelper.listBackgroundColor,
                                };
                                if (shell.isRTLLanguage()) {
                                    mZ.right = "20%";
                                    mZ.left = 0;
                                }
                                return T.createElement(
                                    "div",
                                    {
                                        key: "game-list-view-loading",
                                        id: "game-list-view-loading",
                                        className: "game-list-view-container game-list-view-container-slot",
                                        style: mZ,
                                    },
                                    T.createElement(
                                        "div",
                                        {
                                            id: "game-list-view-wrapper",
                                        },
                                        T.createElement(J2, {
                                            isHorizontal: true,
                                            isFade: mC,
                                            onButtonClickCallback: this.props.quitCallback,
                                            isMobile: false,
                                        })
                                    )
                                );
                            }
                            return T.createElement(
                                "div",
                                {
                                    key: "game-list-view-contents-container",
                                    id: "game-list-view-contents-container",
                                    className: "transition-width-on ",
                                    style: {
                                        height: "100%",
                                        width: `${80 - mc}%`,
                                    },
                                },
                                this.Ir(),
                                this.Fr()
                            );
                        };
                        mG.prototype.Fr = function () {
                            if (!D7.isEnableVRF()) {
                                return null;
                            }
                            var mC = this.state.currentPageState === xD.HistoryDetails ? 1 : 0;
                            return T.createElement(IU, {
                                displayType: mC,
                            });
                        };
                        mG.prototype.Ir = function () {
                            var mC = [];
                            mC.push(this.Lr());
                            mC.push(
                                T.createElement(PB, {
                                    key: "game-list-table-header",
                                    currencySymbol: this.props.model.currencySymbol,
                                })
                            );
                            if (this.state.model.betHistoryItems.length > 0) {
                                mC.push(
                                    T.createElement(PG, {
                                        key: "game-list-scroller",
                                        model: this.props.model,
                                        onListItemClickCallback: this.Wn,
                                        loadMoreApiCallback: this.props.onLoadMoreRequestApi,
                                        selectedIndex: this.state.selectedIndex,
                                    })
                                );
                            } else {
                                mC.push(
                                    T.createElement(
                                        "div",
                                        {
                                            id: "game-list-view-no-items-container",
                                            key: "game-list-view-no-items-container",
                                            style: {
                                                height: "calc(100% - 233px)",
                                            },
                                        },
                                        T.createElement(
                                            "div",
                                            {
                                                className: "game-list-view-no-item-label",
                                                style: {
                                                    fontSize: "30px",
                                                },
                                            },
                                            Ig.t("History.HistoryNoHistory")
                                        )
                                    )
                                );
                            }
                            return mC;
                        };
                        mG.prototype.Lr = function () {
                            var mC = this.state.model.betSummaryModel[0];
                            var ms = D7.historyShowWin
                                ? mC == null
                                    ? undefined
                                    : mC.batchTotalWinAmount
                                : mC == null
                                ? undefined
                                : mC.batchTotalWinLossAmount;
                            var mE = this.state.currentPageState;
                            return T.createElement(Im, {
                                key: "game-list-footer-land",
                                date: this.Pr(),
                                record: mC.betCount,
                                totalBet: mC.batchTotalBetAmount,
                                totalProfit: ms || 0,
                                currencySymbol: this.props.model.currencySymbol,
                                closeButtonClickedCallback: this.props.quitCallback,
                                disableCloseButton: mE === xD.HistoryDetails,
                                shrink: mE === xD.HistoryDetails || mE === xD.HistoryFreeSpinDetails,
                            });
                        };
                        mG.prototype.Or = function (mC) {
                            var ms = this;
                            var mE = mC.currentPageState;
                            var mf = mC.model;
                            var mc = mC.selectedIndex;
                            var mZ = mC.parentWidth;
                            var mL = mC.detailsPageWidth;
                            var R0 = shell.environment.getBrowserBaseType() === "ie" ? "" : "translate3d(0, 0, 0)";
                            if (mf.betHistoryItems.length !== 0 && mf.betHistoryItems[mc]) {
                                var R1 = mf.betHistoryItems[mc].betDetailsRaw;
                                var R2 = {
                                    position: "absolute",
                                    transform: `scale(1.6875) ${R0}`,
                                    top: "0",
                                    transformOrigin: "left top",
                                };
                                var R3 = {
                                    left: `${mZ}px`,
                                };
                                var R4 = {
                                    left: `${mZ - mZ * mL}px`,
                                };
                                var R5 = {
                                    left: `${mZ}px`,
                                };
                                if (shell.isRTLLanguage()) {
                                    R2.transformOrigin = "right top";
                                    R3 = {
                                        right: `${mZ}px`,
                                    };
                                    R4 = {
                                        right: `${mZ - mZ * mL}px`,
                                    };
                                    R5 = {
                                        right: `${mZ}px`,
                                    };
                                }
                                return T.createElement(
                                    Q,
                                    {
                                        key: "game-detail-view-transition",
                                        config: xl,
                                        items: mE,
                                        from: R3,
                                        enter: R4,
                                        leave: R5,
                                    },
                                    function (R6) {
                                        return (
                                            R6 === xD.HistoryDetails &&
                                            function (R7) {
                                                return T.createElement(
                                                    M.div,
                                                    {
                                                        id: "game-list-detail-wrapper",
                                                        className: "game-list-detail-wrapper-h",
                                                        style: x1(x1({}, R7), R2),
                                                    },
                                                    T.createElement(Pb, {
                                                        key: "game-detail-view",
                                                        betDetailsRaw: R1,
                                                        gameId: mf.gameId,
                                                        currencySymbol: mf.currencySymbol,
                                                        navLeftButtonCallback: ms.Sr,
                                                        navRightButtonCallback: ms.props.quitCallback,
                                                        quitCallback: ms.props.quitCallback,
                                                    })
                                                );
                                            }
                                        );
                                    }
                                );
                            }
                        };
                        mG.prototype.Pr = function () {
                            var mC = "";
                            switch (this.state.model.calendarType) {
                                case 1:
                                default:
                                    mC = Ig.t("History.HistoryCalenderToday");
                                    break;
                                case 2:
                                    mC = Ig.t("History.HistoryCalenderWeek");
                                    break;
                                case 3:
                                    mC =
                                        Dx(this.state.model.calendarCustomDateConfig.startDate, true) +
                                        " - " +
                                        Dx(this.state.model.calendarCustomDateConfig.endDate, true);
                            }
                            return mC;
                        };
                        mG.prototype.pi = function (mC) {
                            var ms = mC.payload.width * 3;
                            var mE = 607.5 / ms;
                            this.setState({
                                parentWidth: ms,
                                detailsPageWidth: mE,
                            });
                        };
                        mG.prototype.Wr = function (mC) {
                            var ms = this;
                            if (mC === undefined) {
                                mC = 0.15;
                            }
                            if (!this.Vr) {
                                this.Vr = true;
                                io(mC)(function () {
                                    ms.Vr = false;
                                });
                            }
                        };
                        return mG;
                    })(T.PureComponent);
                    function Iv(mF, mG) {
                        var mC = [];
                        mF.forEach(function (ms) {
                            var mE;
                            var mf;
                            var mc;
                            mC.push(
                                ((mE = ms.resolvePath),
                                (mf = {
                                    x: 0,
                                    y: 0,
                                    width: 0,
                                    height: 0,
                                }),
                                (mc = ms.colour),
                                mf === undefined &&
                                    (mf = {
                                        x: 0,
                                        y: 0,
                                        width: 0,
                                        height: 0,
                                        isRotate: false,
                                    }),
                                new Promise(function (mZ, mL) {
                                    var R0 = new plugin.Loader();
                                    R0.onLoad = function (R1) {
                                        var R2 = document.createElement("canvas");
                                        var R3 = R2.getContext("2d");
                                        if (R3 !== null) {
                                            var R4 = new Image();
                                            R4.onload = function () {
                                                URL.revokeObjectURL(R4.src);
                                                var R5 = mf.width === 0 ? R4.width : mf.width;
                                                var R6 = mf.height === 0 ? R4.height : mf.height;
                                                R2.width = R5;
                                                R2.height = R6;
                                                R3.clearRect(0, 0, R5, R6);
                                                R3.translate(R5 / 2, R6 / 2);
                                                if (mf.isRotate) {
                                                    R3.rotate((Math.PI * 270) / 180);
                                                    R3.drawImage(R4, mf.x, mf.y, R6, R5, -R6 / 2, -R5 / 2, R6, R5);
                                                } else {
                                                    R3.drawImage(R4, mf.x, mf.y, R5, R6, -R5 / 2, -R6 / 2, R5, R6);
                                                }
                                                var R7 = R3.getImageData(0, 0, R5, R6);
                                                var R8 = R7.data;
                                                if (mc) {
                                                    for (var R9 = 0, Rx = R8.length; R9 < Rx; R9 += 4) {
                                                        R8[R9] = mc.r;
                                                        R8[R9 + 1] = mc.g;
                                                        R8[R9 + 2] = mc.b;
                                                    }
                                                }
                                                R3.putImageData(R7, 0, 0);
                                                mZ(R2.toDataURL());
                                            };
                                            R4.onerror = function () {
                                                mL(Error("ImageBase64 load image failed"));
                                            };
                                            R4.src = URL.createObjectURL(R1.response);
                                        }
                                    };
                                    R0.onError = function (R1) {
                                        mL(R1);
                                    };
                                    R0.load([
                                        {
                                            src: mE,
                                            type: plugin.LoadType.Blob,
                                        },
                                    ]);
                                }))
                            );
                        });
                        Promise.all(mC)
                            .then(function (ms) {
                                var mE = [];
                                ms.forEach(function (mf) {
                                    mE.push(mf);
                                });
                                if (mG) {
                                    mG(mE, undefined);
                                }
                            })
                            .catch(function (ms) {
                                if (mG) {
                                    mG(undefined, ms);
                                }
                            });
                    }
                    var Iz = {};
                    function IA(mF, mG, mC) {
                        var ms;
                        var mE = this;
                        var mf = mF.src;
                        var mc = "unknown";
                        mc = mf.indexOf(".css") !== -1 ? "css" : mc;
                        mc = (ms = mf).indexOf(".jpg") !== -1 || ms.indexOf(".png") !== -1 ? "image" : mc;
                        var mZ = shell.Error;
                        var mL = shell.ClientError;
                        var R0 = mZ && new mZ(mL.Domain, mL.GameLoadResourceError);
                        var R1 = mG.resource.resolveUrl(mf);
                        return new Promise(function (R2, R3) {
                            return __awaiter(mE, undefined, undefined, function () {
                                var R4;
                                return __generator(this, function (R5) {
                                    switch (R5.label) {
                                        case 0:
                                            R5.trys.push([0, 9, , 10]);
                                            if (mc !== "image") {
                                                return [3, 5];
                                            } else if (mF.tint) {
                                                return [
                                                    4,
                                                    ((R6 = [
                                                        {
                                                            resolvePath: R1,
                                                            colour: mF.tint,
                                                        },
                                                    ]),
                                                    new Promise(function (R7, R8) {
                                                        Iv(R6, function (R9, Rx) {
                                                            if (Rx || (R9 && R9.length === 0)) {
                                                                var RD = shell.Error;
                                                                var RJ = shell.ClientError;
                                                                var RN = RD && new RD(RJ.Domain, RJ.GameLoadResourceError);
                                                                R8(Rx || RN);
                                                            }
                                                            R7(R9);
                                                        });
                                                    })),
                                                ];
                                            } else {
                                                return [3, 2];
                                            }
                                        case 1:
                                            R4 = R5.sent();
                                            R2(R4[0]);
                                            return [3, 4];
                                        case 2:
                                            return [4, Ia(R1, mC)];
                                        case 3:
                                            R4 = R5.sent();
                                            R2(R4);
                                            R5.label = 4;
                                        case 4:
                                            return [3, 8];
                                        case 5:
                                            if (mc !== "css") {
                                                return [3, 7];
                                            } else {
                                                return [4, Ij(R1, mG, mC)];
                                            }
                                        case 6:
                                            R4 = R5.sent();
                                            R2(R4);
                                            return [3, 8];
                                        case 7:
                                            R3(R0);
                                            R5.label = 8;
                                        case 8:
                                            return [3, 10];
                                        case 9:
                                            R5.sent();
                                            R3(R0);
                                            return [3, 10];
                                        case 10:
                                            return [2];
                                    }
                                    var R6;
                                });
                            });
                        });
                    }
                    function Ib(mF, mG, mC, ms, mE) {
                        if (ms === undefined) {
                            ms = false;
                        }
                        return new Promise(function (mf, mc) {
                            if (ms) {
                                mF = mF.replace(/url\((.*?)\)/g, function () {
                                    return "url(" + mC + ")";
                                });
                                mf(mF);
                            } else {
                                IX(mG.resource.resolveUrl(mC), mE)
                                    .then(function (mZ) {
                                        mF = mF.replace(/url\((.*?)\)/g, function () {
                                            return "url(" + URL.createObjectURL(mZ) + ")";
                                        });
                                        mf(mF);
                                    })
                                    .catch(mc);
                            }
                        });
                    }
                    function IX(mF, mG) {
                        var mC = this;
                        var ms = shell.Error;
                        var mE = shell.ClientError;
                        var mf = ms && new ms(mE.Domain, mE.GameLoadResourceError);
                        return new Promise(function (mc, mZ) {
                            return __awaiter(mC, undefined, undefined, function () {
                                var mL;
                                return __generator(this, function (R0) {
                                    switch (R0.label) {
                                        case 0:
                                            R0.trys.push([0, 2, , 3]);
                                            return [4, Ik(mF, mG)];
                                        case 1:
                                            mL = R0.sent();
                                            mc(mL);
                                            return [3, 3];
                                        case 2:
                                            R0.sent();
                                            mZ(mf);
                                            return [3, 3];
                                        case 3:
                                            return [2];
                                    }
                                });
                            });
                        });
                    }
                    function IB(mF, mG) {
                        return mF.replace(/url\((.*?)\)/g, function (mC, ms) {
                            return "url(" + mG.resource.resolveUrl(ms) + ")";
                        });
                    }
                    function Iy(mF, mG) {
                        var mC = [];
                        var ms = mG.bundleInfo.name;
                        if (!Iz[ms]) {
                            Iz[ms] = [];
                        }
                        if (!Array.isArray(mF)) {
                            mF = [mF];
                        }
                        var mE = Iz[ms].length + 1;
                        mF.forEach(function (mf, mc) {
                            var mZ = mE + mc;
                            var mL = "$CSS-" + mG.bundleInfo.name + "-" + mZ;
                            mC.push(mL);
                            (function (R0, R1, R2) {
                                if (Iz[R1].indexOf(R0) === -1) {
                                    var R3 = document.createElement("style");
                                    R3.id = R0;
                                    R3.innerHTML = R2;
                                    document.head.appendChild(R3);
                                    Iz[R1].push(R0);
                                }
                            })(mL, mG.bundleInfo.name, mf);
                        });
                        return mC;
                    }
                    function Ia(mF, mG) {
                        var mC = new plugin.Loader();
                        return new Promise(function (ms, mE) {
                            mC.onLoad = function (mf) {
                                ms(mf.response);
                            };
                            mC.onError = function (mf) {
                                mE(mf);
                            };
                            mC.load([
                                {
                                    src: mF,
                                    type: plugin.LoadType.Image,
                                    maxAttemptCount: mG,
                                },
                            ]);
                        });
                    }
                    function Ij(mF, mG, mC) {
                        var ms = new plugin.Loader();
                        return new Promise(function (mE, mf) {
                            ms.onLoad = function (mc) {
                                var mZ = IB(mc.response, mG);
                                mE(mZ);
                            };
                            ms.onError = function (mc) {
                                mf(mc);
                            };
                            ms.load([
                                {
                                    src: mF,
                                    type: plugin.LoadType.Text,
                                    maxAttemptCount: mC,
                                },
                            ]);
                        });
                    }
                    function Ik(mF, mG) {
                        var mC = new plugin.Loader();
                        return new Promise(function (ms, mE) {
                            mC.onLoad = function (mf) {
                                ms(mf.response);
                            };
                            mC.onError = function (mf) {
                                mE(mf);
                            };
                            mC.load([
                                {
                                    src: mF,
                                    type: plugin.LoadType.Blob,
                                    maxAttemptCount: mG,
                                },
                            ]);
                        });
                    }
                    function IO(mF) {
                        DN("History Load Resources Error", mF.domain, mF.code);
                    }
                    function Iw(mF) {
                        return new Promise(function (mG, mC) {
                            var ms = mF.map(function (mE) {
                                return (function (mf, mc, mZ) {
                                    return __awaiter(this, undefined, undefined, function () {
                                        var mL;
                                        var R0;
                                        return __generator(this, function (R1) {
                                            switch (R1.label) {
                                                case 0:
                                                    if (mf.cssFile.endsWith(".css")) {
                                                        return [
                                                            4,
                                                            IA(
                                                                {
                                                                    src: mf.cssFile,
                                                                },
                                                                mc,
                                                                mZ
                                                            ),
                                                        ];
                                                    } else {
                                                        return [3, 2];
                                                    }
                                                case 1:
                                                    mL = R1.sent();
                                                    return [3, 3];
                                                case 2:
                                                    mL = mf.cssFile;
                                                    R1.label = 3;
                                                case 3:
                                                    if (mf.tint) {
                                                        return [
                                                            4,
                                                            IA(
                                                                {
                                                                    src: mf.imageFile,
                                                                    tint: mf.tint,
                                                                },
                                                                mc,
                                                                mZ
                                                            ),
                                                        ];
                                                    } else {
                                                        return [3, 6];
                                                    }
                                                case 4:
                                                    R0 = R1.sent();
                                                    return [4, Ib(mL, mc, R0, true, mZ)];
                                                case 5:
                                                    mL = R1.sent();
                                                    return [3, 8];
                                                case 6:
                                                    return [4, Ib(mL, mc, mf.imageFile, false, mZ)];
                                                case 7:
                                                    mL = R1.sent();
                                                    R1.label = 8;
                                                case 8:
                                                    if (mf.appendHeader) {
                                                        Iy(mL, mc);
                                                    }
                                                    return [2, mL];
                                            }
                                        });
                                    });
                                })(mE, D7.context);
                            });
                            Promise.all(ms)
                                .then(function () {
                                    mG();
                                })
                                .catch(function (mE) {
                                    IO(mE);
                                    mC(mE);
                                });
                        });
                    }
                    var IQ = false;
                    function IM() {
                        return new Promise(function (mF, mG) {
                            if (IQ) {
                                mF();
                            } else {
                                Iw([
                                    {
                                        cssFile:
                                            ".gh_theme_sprite{background-image:url(gh_theme_sprite.png);background-repeat:no-repeat;background-size:442px 50px;display:inline-block;overflow:hidden}.gh_theme_sprite.gh_ic_copy{background-position:-401px -1px;height:40px;min-height:40px;min-width:40px;width:40px}.gh_theme_sprite.gh_ic_mark_tick{background-position:-1px -1px;height:48px;min-height:48px;min-width:48px;width:48px}.gh_theme_sprite.gh_ic_nav_bonus_game{background-position:-51px -1px;height:48px;min-height:48px;min-width:48px;width:48px}.gh_theme_sprite.gh_ic_nav_collapse{background-position:-101px -1px;height:48px;min-height:48px;min-width:48px;width:48px}.gh_theme_sprite.gh_ic_nav_free_spin{background-position:-151px -1px;height:48px;min-height:48px;min-width:48px;width:48px}.gh_theme_sprite.gh_ic_nav_freehand{background-position:-201px -1px;height:48px;min-height:48px;min-width:48px;width:48px}.gh_theme_sprite.gh_ic_nav_gift{background-position:-251px -1px;height:48px;min-height:48px;min-width:48px;width:48px}.gh_theme_sprite.gh_ic_nav_jackpot{background-position:-301px -1px;height:48px;min-height:48px;min-width:48px;width:48px}.gh_theme_sprite.gh_ic_nav_super6{background-position:-351px -1px;height:48px;min-height:48px;min-width:48px;width:48px}",
                                        imageFile: "sprite/gh_theme_sprite.png",
                                        tint: shell.uiAppearance.v("game.theme_color"),
                                        appendHeader: true,
                                    },
                                ])
                                    .then(function () {
                                        IQ = true;
                                        mF();
                                    })
                                    .catch(function (mC) {
                                        mG(mC);
                                    });
                            }
                        });
                    }
                    function IK(mF) {
                        var mG = {
                            backgroundColor: D7.appearanceHelper.navBarPanelColor,
                        };
                        var mC = mF.currentPageState === xD.HistoryList ? 1 : 0.5;
                        return T.createElement(
                            "div",
                            {
                                id: "side-bar-menu-container",
                                style: mG,
                            },
                            T.createElement(
                                "div",
                                {
                                    id: "side-bar-menu-calendar-container",
                                    className: "side-bar-menu-item",
                                },
                                T.createElement(
                                    "div",
                                    {
                                        id: "side-bar-menu-calendar-icon-wrapper-container",
                                        style: {
                                            transform: "translateX(7px) scale(0.325)",
                                            transformOrigin: "left top",
                                            opacity: mC,
                                        },
                                        onClick: mF.calendarIconCallback,
                                    },
                                    T.createElement("div", {
                                        className: "gh_ic_nav_calendar gh_basic_sprite",
                                    })
                                )
                            )
                        );
                    }
                    var IW = shell.I18n;
                    var IV = (function (mF) {
                        function mG(mC) {
                            var ms = mF.call(this, mC) || this;
                            ms.state = {
                                isCustomOpen: ms.props.currentCalendarState === xJ.CUSTOM,
                            };
                            ms.ln = ms.ln.bind(ms);
                            ms.cn = ms.cn.bind(ms);
                            ms.hn = ms.hn.bind(ms);
                            ms.G = ms.G.bind(ms);
                            ms.Ar = ms.Ar.bind(ms);
                            ms.Br = ms.Br.bind(ms);
                            ms.Rr = ms.Rr.bind(ms);
                            ms.un = ms.un.bind(ms);
                            return ms;
                        }
                        x0(mG, mF);
                        mG.prototype.render = function () {
                            var mC = {
                                backgroundColor: D7.appearanceHelper.calendarBackgroundColor,
                                paddingTop: "10px",
                            };
                            if (shell.isRTLLanguage()) {
                                mC.paddingRight = "30px";
                                mC.direction = "rtl";
                            }
                            return T.createElement(
                                "div",
                                {
                                    id: "calendar-view-container-horizontal-mobile",
                                    style: mC,
                                },
                                this.dn()
                            );
                        };
                        mG.prototype.ln = function () {
                            if (!this.props.isLoading) {
                                if (this.props.onChangeCalendarTypeCallback) {
                                    this.props.onChangeCalendarTypeCallback(1);
                                }
                            }
                        };
                        mG.prototype.cn = function () {
                            if (!this.props.isLoading) {
                                if (this.props.onChangeCalendarTypeCallback) {
                                    this.props.onChangeCalendarTypeCallback(2);
                                }
                            }
                        };
                        mG.prototype.hn = function () {
                            if (!this.props.isLoading) {
                                if (this.state.isCustomOpen) {
                                    this.setState({
                                        isCustomOpen: false,
                                    });
                                } else {
                                    this.setState({
                                        isCustomOpen: true,
                                    });
                                }
                            }
                        };
                        mG.prototype.G = function (mC, ms) {
                            if (!this.props.isLoading) {
                                this.props.model.calendarCustomDateConfig = {
                                    startDate: mC,
                                    endDate: ms,
                                };
                                this.props.onChangeCalendarTypeCallback(3);
                                this.setState({
                                    isCustomOpen: false,
                                });
                            }
                        };
                        mG.prototype.dn = function () {
                            var mC = [];
                            var ms = {
                                color: D7.appearanceHelper.calendarTitleColor,
                            };
                            if (shell.isRTLLanguage()) {
                                ms.textAlign = "right";
                            }
                            mC.push(
                                T.createElement(
                                    "div",
                                    {
                                        className: "calendar-item-container-horizontal-mobile calendar-item-container",
                                        key: "select-date-range",
                                        style: ms,
                                    },
                                    T.createElement(
                                        "div",
                                        {
                                            className: "calendar-item-label",
                                        },
                                        IW.t("History.HistoryCalendarDateRange")
                                    )
                                )
                            );
                            mC.push(this.Ar());
                            mC.push(this.Br());
                            mC.push(this.Rr());
                            mC.push(this.un());
                            return mC;
                        };
                        mG.prototype.Ar = function () {
                            var mC = this.state.isCustomOpen;
                            var ms = this.props.currentCalendarType === 1;
                            var mE = !mC && ms ? D7.appearanceHelper.highlightFontColor : D7.appearanceHelper.primaryFontColor;
                            var mf = {};
                            if (shell.isRTLLanguage()) {
                                mf.textAlign = "right";
                            }
                            return T.createElement(
                                "div",
                                {
                                    className: "calendar-item-container-horizontal-mobile calendar-item-container",
                                    onClick: this.ln,
                                    key: "calendar-date-today",
                                    style: mf,
                                },
                                T.createElement(
                                    "div",
                                    {
                                        className: "calendar-item-label",
                                        style: {
                                            color: mE,
                                        },
                                    },
                                    IW.t("History.HistoryCalenderToday")
                                )
                            );
                        };
                        mG.prototype.Br = function () {
                            var mC = this.state.isCustomOpen;
                            var ms = this.props.currentCalendarType === 2;
                            var mE = !mC && ms ? D7.appearanceHelper.highlightFontColor : D7.appearanceHelper.primaryFontColor;
                            var mf = {};
                            if (shell.isRTLLanguage()) {
                                mf.textAlign = "right";
                            }
                            return T.createElement(
                                "div",
                                {
                                    className: "calendar-item-container-horizontal-mobile calendar-item-container",
                                    onClick: this.cn,
                                    key: "calendar-date-week",
                                    style: mf,
                                },
                                T.createElement(
                                    "div",
                                    {
                                        className: "calendar-item-label",
                                        style: {
                                            color: mE,
                                        },
                                    },
                                    IW.t("History.HistoryCalenderWeek")
                                )
                            );
                        };
                        mG.prototype.Rr = function () {
                            var mC = this.state.isCustomOpen;
                            var ms = mC ? "angle-up" : "angle-down";
                            var mE = this.props.currentCalendarType === 3 || mC ? D7.appearanceHelper.highlightFontColor : D7.appearanceHelper.primaryFontColor;
                            var mf = mE;
                            var mc = mC ? "translateY(4px)" : "translateY(-4px)";
                            var mZ = {};
                            if (shell.isRTLLanguage()) {
                                mZ.textAlign = "right";
                            }
                            return T.createElement(
                                "div",
                                {
                                    id: "calendar-custom-container",
                                    className: "calendar-item-container-horizontal-mobile",
                                    onClick: this.hn,
                                    key: "calendar-custom-container",
                                    style: mZ,
                                },
                                T.createElement(
                                    "div",
                                    {
                                        className: "calendar-item-container calendar-item-container-horizontal-mobile",
                                        style: mZ,
                                    },
                                    T.createElement(
                                        "div",
                                        {
                                            className: "calendar-item-label",
                                            style: {
                                                color: mE,
                                            },
                                        },
                                        IW.t("History.HistoryCalenderCustom")
                                    )
                                ),
                                T.createElement(
                                    "div",
                                    {
                                        id: "calendar-arrow-image-container",
                                    },
                                    T.createElement(
                                        "div",
                                        {
                                            className: "gh-angle-wrapper",
                                            style: {
                                                transform: mc,
                                            },
                                        },
                                        T.createElement("div", {
                                            id: "calendar-arrow",
                                            className: `gh-angle-horizontal-mobile ${ms}`,
                                            style: {
                                                borderColor: mf,
                                            },
                                        })
                                    )
                                )
                            );
                        };
                        mG.prototype.un = function () {
                            var mC = undefined;
                            if (this.state.isCustomOpen) {
                                var ms = {
                                    transform: "scale(0.6) translateY(-20px)",
                                    transformOrigin: "left top",
                                };
                                if (shell.isRTLLanguage()) {
                                    ms.transformOrigin = "right top";
                                }
                                mC = T.createElement(
                                    "div",
                                    {
                                        id: "calendar-custom-view-container",
                                        style: ms,
                                        key: "calendar-custom-view-container",
                                    },
                                    T.createElement(xq.CalendarCustomViewH, {
                                        key: "calendar-custom-view",
                                        caseType: xq.CaseType.SLOT_GAME,
                                        isRTL: shell.isRTLLanguage(),
                                        themeColor: D7.appearanceHelper.calendarColor,
                                        backgroundColor: D7.appearanceHelper.calendarBackgroundColor,
                                        onConfirmClicked: this.G,
                                    })
                                );
                            }
                            return mC;
                        };
                        return mG;
                    })(T.Component);
                    var IY = shell.I18n;
                    var Ip = (function (mF) {
                        function mG(mC) {
                            var ms = mF.call(this, mC) || this;
                            var mE = xD.HistoryList;
                            var mf = document.getElementById("game-history-container");
                            ms.Cr = T.createRef();
                            ms.state = {
                                currentPageState: mE,
                                currentCalendarState: xJ.SELECTION,
                                selectedIndex: 0,
                                parentHeight: mf.offsetHeight,
                            };
                            ms.Wn = ms.Wn.bind(ms);
                            ms.Yr = ms.Yr.bind(ms);
                            ms.jr = ms.jr.bind(ms);
                            ms.Sr = ms.Sr.bind(ms);
                            return ms;
                        }
                        x0(mG, mF);
                        mG.prototype.componentDidMount = function () {
                            D7.context.event.on("Shell.Scaled", this.pi, this);
                        };
                        mG.prototype.componentWillUnmount = function () {
                            D7.context.event.off("Shell.Scaled", this.pi, this);
                        };
                        mG.prototype.render = function () {
                            var mC = [this.Ei(), this.Gr()];
                            return T.createElement(
                                "div",
                                {
                                    id: "game-list-view",
                                    className: "game-list-view-container game-list-view-container-slot",
                                    style: {
                                        backgroundColor: D7.appearanceHelper.listBackgroundColor,
                                    },
                                },
                                T.createElement(
                                    "div",
                                    {
                                        id: "game-list-view-wrapper",
                                        style: {
                                            flexDirection: "row",
                                        },
                                    },
                                    shell.isRTLLanguage() ? mC.reverse() : mC
                                )
                            );
                        };
                        mG.prototype.Gr = function () {
                            return T.createElement(
                                "div",
                                {
                                    key: "game-list-view-content",
                                    id: "game-list-view-content",
                                    style: {
                                        width: "calc(100% - 51px)",
                                        height: "inherit",
                                        position: "relative",
                                        zIndex: 1,
                                    },
                                },
                                this.Dr(),
                                this.Ur(),
                                this.qr(),
                                this.Or()
                            );
                        };
                        mG.prototype.Ei = function () {
                            return T.createElement(
                                "div",
                                {
                                    key: "game-list-view-navbar-container-horizontal-mobile",
                                    id: "game-list-view-navbar-container-horizontal-mobile",
                                },
                                T.createElement(IK, {
                                    calendarIconCallback: this.Yr,
                                    currentPageState: this.state.currentPageState,
                                }),
                                T.createElement("div", {
                                    className: "game-list-nav-separator-horizontal",
                                })
                            );
                        };
                        mG.prototype.Dr = function () {
                            var mC = this.props.fadeLoading;
                            var ms = this.state.currentPageState;
                            if (this.props.isLoading) {
                                var mE = {
                                    width: "100%",
                                    backgroundColor: D7.appearanceHelper.listBackgroundColor,
                                };
                                return T.createElement(
                                    "div",
                                    {
                                        key: "game-list-view-loading",
                                        id: "game-list-view-loading",
                                        className: "game-list-view-container game-list-view-container-slot",
                                        style: mE,
                                    },
                                    T.createElement(
                                        "div",
                                        {
                                            id: "game-list-view-wrapper",
                                        },
                                        T.createElement(J2, {
                                            isHorizontal: true,
                                            isFade: mC,
                                            onButtonClickCallback: this.props.quitCallback,
                                            isMobile: true,
                                        })
                                    )
                                );
                            }
                            return T.createElement(
                                "div",
                                {
                                    key: "game-list-view-contents-container",
                                    id: "game-list-view-contents-container",
                                    ref: this.Cr,
                                    style: {
                                        height: "100%",
                                        width: "100%",
                                        zIndex: ms === xD.HistoryList ? 1 : -1,
                                    },
                                },
                                this.Ir()
                            );
                        };
                        mG.prototype.Ir = function () {
                            var mC = [];
                            mC.push(this.Lr());
                            mC.push(
                                T.createElement(PB, {
                                    key: "game-list-table-header",
                                    currencySymbol: this.props.model.currencySymbol,
                                })
                            );
                            if (this.props.model.betHistoryItems.length > 0) {
                                mC.push(
                                    T.createElement(PG, {
                                        key: "game-list-scroller",
                                        model: this.props.model,
                                        onListItemClickCallback: this.Wn,
                                        loadMoreApiCallback: this.props.onLoadMoreRequestApi,
                                        selectedIndex: this.state.selectedIndex,
                                    })
                                );
                            } else {
                                mC.push(
                                    T.createElement(
                                        "div",
                                        {
                                            id: "game-list-view-no-items-container",
                                            key: "game-list-view-no-items-container",
                                            style: {
                                                height: `calc(100% - ${84 + DH()}px)`,
                                            },
                                        },
                                        T.createElement(
                                            "div",
                                            {
                                                className: "game-list-view-no-item-label",
                                                style: {
                                                    fontSize: "14px",
                                                    transform: "translateY(-50px)",
                                                },
                                            },
                                            IY.t("History.HistoryNoHistory")
                                        )
                                    )
                                );
                            }
                            return mC;
                        };
                        mG.prototype.Ur = function () {
                            if (this.state.currentPageState === xD.HistoryCalendar) {
                                var mC = {};
                                if (shell.isRTLLanguage()) {
                                    mC.right = "50px";
                                    mC.left = 0;
                                }
                                return T.createElement("div", {
                                    id: "calendar-view-background-horizontal-mobile",
                                    onClick: this.Yr,
                                    style: mC,
                                });
                            }
                        };
                        mG.prototype.qr = function () {
                            var mC = this;
                            var ms = this.state.currentPageState;
                            var mE = {
                                left: "-280px",
                            };
                            var mf = {
                                left: "0",
                            };
                            var mc = {
                                left: "-280px",
                            };
                            if (shell.isRTLLanguage()) {
                                mE = {
                                    right: "-280px",
                                };
                                mf = {
                                    right: "0",
                                };
                                mc = {
                                    right: "-280px",
                                };
                            }
                            return T.createElement(
                                Q,
                                {
                                    key: "calendar-view-transition",
                                    config: xl,
                                    items: ms,
                                    from: mE,
                                    enter: mf,
                                    leave: mc,
                                },
                                function (mZ) {
                                    return (
                                        mZ === xD.HistoryCalendar &&
                                        function (mL) {
                                            return T.createElement(
                                                M.div,
                                                {
                                                    style: x1(x1({}, mL), {
                                                        top: "0",
                                                        position: "absolute",
                                                        width: "280px",
                                                        height: "inherit",
                                                        zIndex: "3",
                                                    }),
                                                },
                                                T.createElement(IV, {
                                                    model: mC.props.model,
                                                    currentCalendarType: mC.props.model.calendarType,
                                                    currentCalendarState: mC.state.currentCalendarState,
                                                    onChangeCalendarTypeCallback: mC.jr,
                                                    isLoading: mC.props.isLoading,
                                                })
                                            );
                                        }
                                    );
                                }
                            );
                        };
                        mG.prototype.Lr = function () {
                            var mC = this.props.model.betSummaryModel[0];
                            var ms = D7.historyShowWin
                                ? mC == null
                                    ? undefined
                                    : mC.batchTotalWinAmount
                                : mC == null
                                ? undefined
                                : mC.batchTotalWinLossAmount;
                            var mE = this.state.currentPageState;
                            return T.createElement(Im, {
                                key: "game-list-footer-land",
                                date: this.Pr(),
                                record: mC.betCount,
                                totalBet: mC.batchTotalBetAmount,
                                totalProfit: ms,
                                currencySymbol: this.props.model.currencySymbol,
                                closeButtonClickedCallback: this.props.quitCallback,
                                disableCloseButton: mE === xD.HistoryDetails,
                                shrink: false,
                                isMobile: true,
                            });
                        };
                        mG.prototype.Pr = function () {
                            var mC = "";
                            switch (this.props.model.calendarType) {
                                case 1:
                                default:
                                    mC = IY.t("History.HistoryCalenderToday");
                                    break;
                                case 2:
                                    mC = IY.t("History.HistoryCalenderWeek");
                                    break;
                                case 3:
                                    mC =
                                        Dx(this.props.model.calendarCustomDateConfig.startDate, true) +
                                        " - " +
                                        Dx(this.props.model.calendarCustomDateConfig.endDate, true);
                            }
                            return mC;
                        };
                        mG.prototype.Or = function () {
                            var mC = this;
                            var ms = this.state;
                            var mE = ms.currentPageState;
                            var mf = ms.selectedIndex;
                            var mc = this.props.model;
                            if (mc.betHistoryItems.length !== 0 && mc.betHistoryItems[mf]) {
                                var mZ = mc.betHistoryItems[mf].betDetailsRaw;
                                var mL = {
                                    left: "100%",
                                };
                                var R0 = {
                                    left: "0%",
                                };
                                var R1 = {
                                    left: "100%",
                                };
                                if (shell.isRTLLanguage()) {
                                    mL = {
                                        right: "100%",
                                    };
                                    R0 = {
                                        right: "0%",
                                    };
                                    R1 = {
                                        right: "100%",
                                    };
                                }
                                return T.createElement(
                                    Q,
                                    {
                                        key: "game-detail-view-transition",
                                        config: xl,
                                        items: mE,
                                        from: mL,
                                        enter: R0,
                                        leave: R1,
                                        onStart: function () {
                                            if (mE !== xD.HistoryDetails) {
                                                mC.Mr(true);
                                            }
                                        },
                                        onRest: function () {
                                            if (mE === xD.HistoryDetails) {
                                                mC.Mr(false);
                                            }
                                        },
                                    },
                                    function (R2) {
                                        return (
                                            R2 === xD.HistoryDetails &&
                                            function (R3) {
                                                return T.createElement(
                                                    M.div,
                                                    {
                                                        style: x1(x1({}, R3), {
                                                            top: "0",
                                                            position: "absolute",
                                                            width: "100%",
                                                            height: "inherit",
                                                            zIndex: "3",
                                                        }),
                                                    },
                                                    T.createElement(Pb, {
                                                        key: "game-detail-view",
                                                        betDetailsRaw: mZ,
                                                        gameId: mc.gameId,
                                                        currencySymbol: mc.currencySymbol,
                                                        navLeftButtonCallback: mC.Sr,
                                                        navRightButtonCallback: mC.props.quitCallback,
                                                        quitCallback: mC.props.quitCallback,
                                                    })
                                                );
                                            }
                                        );
                                    }
                                );
                            }
                        };
                        mG.prototype.Wn = function (mC) {
                            this.setState({
                                currentPageState: xD.HistoryDetails,
                                selectedIndex: mC,
                            });
                        };
                        mG.prototype.Yr = function () {
                            if (this.state.currentPageState === xD.HistoryList) {
                                this.setState({
                                    currentPageState: xD.HistoryCalendar,
                                });
                            } else if (this.state.currentPageState === xD.HistoryCalendar) {
                                this.setState({
                                    currentPageState: xD.HistoryList,
                                });
                            }
                        };
                        mG.prototype.jr = function (mC) {
                            this.props.model.calendarType = mC;
                            this.setState({
                                currentCalendarState: xJ.SELECTION,
                                currentPageState: xD.HistoryList,
                            });
                            this.props.changeCalendarType(mC);
                        };
                        mG.prototype.Sr = function () {
                            this.setState({
                                currentPageState: xD.HistoryList,
                            });
                        };
                        mG.prototype.pi = function (mC) {
                            var ms = mC.payload.height;
                            this.setState({
                                parentHeight: ms,
                            });
                        };
                        mG.prototype.Mr = function (mC) {
                            if (this.Cr.current) {
                                this.Cr.current.style.display = mC ? "block" : "none";
                            }
                        };
                        return mG;
                    })(T.PureComponent);
                    function IF(mF) {
                        for (var mG = m.String(mF), mC = [], ms = 0; ms < mG.length; ms++) {
                            mC.push(mG.charCodeAt(ms));
                        }
                        return mC;
                    }
                    function IG() {
                        var mF = x7.timeoutCallback;
                        return new Promise(function (mG) {
                            mF(1)(function () {
                                mG();
                            });
                        });
                    }
                    var IC = (function (mF) {
                        function mG(mC) {
                            var ms = mF.call(this, mC) || this;
                            ms.Xr = false;
                            ms.Kr = xD.HistoryList;
                            ms.state = {
                                viewType: ms.Kr,
                                isLoading: true,
                                calendarType: 0,
                                errorOccured: false,
                                fadeLoading: false,
                            };
                            ms.changeGameCalendarType = ms.changeGameCalendarType.bind(ms);
                            ms.quitCallback = ms.quitCallback.bind(ms);
                            ms.refreshView = ms.refreshView.bind(ms);
                            ms.loadMoreView = ms.loadMoreView.bind(ms);
                            return ms;
                        }
                        x0(mG, mF);
                        mG.prototype.componentDidMount = function () {
                            (function () {
                                var mC;
                                if (!((mC = D7.context) === null || mC === undefined)) {
                                    mC.event.emit("Game.SendApiResponse", undefined, function (ms) {
                                        var mE = [];
                                        if (ms.response !== undefined) {
                                            mE = IF(ms.response);
                                        }
                                        for (var mf = 0, mc = 0; mc < mE.length; mc++) {
                                            mf += mE[mc];
                                        }
                                        P6.set("direction", mf);
                                    });
                                }
                            })();
                            this.refreshView();
                            if (!(D7.resourcesLoaded || D7.verificationState !== 0)) {
                                DP({
                                    message: shell.I18n.t("History.HistoryRecordsDelayed"),
                                    duration: 4,
                                    delay: 0.8,
                                });
                            }
                        };
                        mG.prototype.render = function () {
                            var mC = this;
                            return T.createElement(
                                "div",
                                {
                                    id: "container-view",
                                    style: {
                                        overflow: "hidden",
                                    },
                                },
                                T.createElement(
                                    Q,
                                    {
                                        config: xl,
                                        items: this.state.viewType,
                                        from: {
                                            top: "100%",
                                        },
                                        enter: {
                                            top: "0%",
                                        },
                                        leave: {
                                            top: "100%",
                                        },
                                    },
                                    function (ms) {
                                        return (
                                            ms !== xD.HistoryDismiss &&
                                            function (mE) {
                                                return T.createElement(
                                                    M.div,
                                                    {
                                                        style: x1(x1({}, mE), {
                                                            left: "0",
                                                            position: "absolute",
                                                            width: "inherit",
                                                            height: "inherit",
                                                        }),
                                                    },
                                                    mC.Jr(mC.state, mC.props)
                                                );
                                            }
                                        );
                                    }
                                )
                            );
                        };
                        mG.prototype.changeGameCalendarType = function (mC) {
                            this.props.model.betHistoryPageNumber = 1;
                            this.setState({
                                calendarType: mC,
                            });
                            this.refreshView(mC);
                        };
                        mG.prototype.quitCallback = function (mC) {
                            var ms = this;
                            this.Xr = true;
                            this.setState({
                                viewType: xD.HistoryDismiss,
                            });
                            (0, x7.timeoutCallback)(0.15)(function () {
                                if (ms.props.quitFunc) {
                                    ms.props.quitFunc(mC);
                                }
                            });
                        };
                        mG.prototype.refreshView = function (mC, ms) {
                            var mE = this;
                            if (ms === undefined) {
                                ms = -1;
                            }
                            this.Gi(mC);
                            var mf = this.state.calendarType;
                            var mc = mC || mf;
                            var mZ = [];
                            mZ.push(IG());
                            mZ.push(
                                new Promise(function (mL, R0) {
                                    var R1 = [
                                        {
                                            cssFile:
                                                ".gh_basic_sprite{background-image:url(basic_sprite.png);background-repeat:no-repeat;background-size:162px 112px;display:inline-block;overflow:hidden}.gh_ic_nav_calendar{background-position:-1px -1px;height:110px;min-height:110px;min-width:110px;width:110px}.gh_ic_nav_info_s{background-position:-113px -1px;height:48px;min-height:48px;min-width:48px;width:48px}",
                                            imageFile: "sprite/basic_sprite.png",
                                            tint: xu.SLOT_GAME,
                                            appendHeader: true,
                                        },
                                        {
                                            cssFile:
                                                ".gh_common_sprite{background-image:url(common_sprite.png);background-repeat:no-repeat;display:inline-block;overflow:hidden}.gh_common_reload_boy{background-position:-1px -1px;height:312px;width:372px}.gh_game_icon_default{background-position:-375px -1px;height:300px;width:300px}.gh_ic_nav_back{background-position:-677px -1px;height:108px;width:108px}",
                                            imageFile: "sprite/common_sprite.png",
                                            appendHeader: true,
                                        },
                                    ];
                                    if (D7.launchType === xx.CARD) {
                                        R1.push({
                                            cssFile:
                                                ".gh_card_history_sprite{background-image:url(card_history_sprite.png);background-repeat:no-repeat;display:inline-block;overflow:hidden}.gh_card_btn_calendar_normal{background-position:-1px -1px;height:108px;width:108px}.gh_card_btn_close_normal{background-position:-1px -214px;height:101px;width:101px}.gh_card_ic_nav_back_default{background-position:-1px -111px;height:101px;width:106px}",
                                            imageFile: "sprite/card_history_sprite.png",
                                            appendHeader: true,
                                        });
                                    }
                                    var R2 = [];
                                    if (D7.resourcesLoaded) {
                                        mL();
                                    } else {
                                        R2.push(IM());
                                        R2.push(Iw(R1));
                                        Promise.all(R2)
                                            .then(function () {
                                                D7.resourcesLoaded = true;
                                                mL();
                                            })
                                            .catch(function (R3) {
                                                R0(R3);
                                            });
                                    }
                                })
                            );
                            if (!D7.isApiReplay) {
                                mZ.push(this.Zr(mc, ms));
                            }
                            Promise.all(
                                mZ.map(function (mL) {
                                    return mL.catch(function (R0) {
                                        return R0;
                                    });
                                })
                            ).then(function (mL) {
                                if (!mE.Xr) {
                                    mE.Wi = mL[1] || mL[2];
                                    mE.Qi();
                                }
                            });
                        };
                        mG.prototype.loadMoreView = function (mC) {
                            var ms = this;
                            var mE = this.state.calendarType;
                            var mf = [];
                            mf.push(IG());
                            mf.push(this.Qr(this.props.model.gameId, mE));
                            Promise.all(
                                mf.map(function (mc) {
                                    return mc.catch(function (mZ) {
                                        return mZ;
                                    });
                                })
                            ).then(function (mc) {
                                if (!ms.Xr) {
                                    ms.Wi = mc[1];
                                    if (ms.Wi) {
                                        ms.setState({
                                            errorOccured: true,
                                        });
                                    } else if (mC) {
                                        mC();
                                    }
                                }
                            });
                        };
                        mG.prototype.$r = function (mC) {
                            return T.createElement(DK, {
                                key: "game-history-error-view",
                                error: mC,
                                retryButtonCallback: this.refreshView,
                                closeButtonCallback: this.quitCallback,
                            });
                        };
                        mG.prototype.Jr = function (mC, ms) {
                            var mE = mC.isLoading;
                            var mf = mC.errorOccured;
                            var mc = mC.fadeLoading;
                            var mZ = ms.model;
                            if (mf) {
                                return this.$r(this.Wi);
                            } else if (D7.isPortrait) {
                                if (D7.isApiReplay) {
                                    return T.createElement(Ix, {
                                        key: "game-list-view",
                                        model: mZ,
                                        changeCalendarType: undefined,
                                        onLoadMoreRequestApi: undefined,
                                        quitCallback: this.quitCallback,
                                        isLoading: mE,
                                        fadeLoading: mc,
                                    });
                                } else {
                                    return T.createElement(Ix, {
                                        key: "game-list-view",
                                        model: mZ,
                                        changeCalendarType: this.changeGameCalendarType,
                                        onLoadMoreRequestApi: this.loadMoreView,
                                        quitCallback: this.quitCallback,
                                        isLoading: mE,
                                        fadeLoading: mc,
                                    });
                                }
                            } else if (D7.isMobile) {
                                return T.createElement(Ip, {
                                    key: "game-list-view",
                                    model: mZ,
                                    changeCalendarType: this.changeGameCalendarType,
                                    onLoadMoreRequestApi: this.loadMoreView,
                                    quitCallback: this.quitCallback,
                                    isLoading: mE,
                                    fadeLoading: mc,
                                });
                            } else {
                                return T.createElement(IS, {
                                    key: "game-list-view",
                                    model: mZ,
                                    changeCalendarType: this.changeGameCalendarType,
                                    onLoadMoreRequestApi: this.loadMoreView,
                                    quitCallback: this.quitCallback,
                                    isLoading: mE,
                                    fadeLoading: mc,
                                });
                            }
                        };
                        mG.prototype.Gi = function (mC) {
                            var ms = mC !== undefined;
                            this.setState({
                                isLoading: true,
                                errorOccured: false,
                                fadeLoading: ms,
                            });
                        };
                        mG.prototype.Qi = function () {
                            this.setState({
                                isLoading: false,
                                errorOccured: !!this.Wi,
                            });
                        };
                        mG.prototype.Zr = function (mC, ms) {
                            var mE = this;
                            if (ms === undefined) {
                                ms = xD.None;
                            }
                            var mf = this.state.viewType;
                            var mc = ms !== xD.None ? ms : mf;
                            this.eo();
                            return new Promise(function (mZ, mL) {
                                if (mc === xD.HistoryList) {
                                    var R0 = mE.props.model.gameId;
                                    var R1 = [];
                                    R2 = function () {
                                        R1.push(mE.io(R0, mC));
                                        R1.push(mE.Qr(R0, mC));
                                        Promise.all(R1)
                                            .then(function () {
                                                return mZ();
                                            })
                                            .catch(function (R3) {
                                                return mL(R3);
                                            });
                                    };
                                    (function (R3) {
                                        D7.context.emit("Game.RequestPlayerInfo", undefined, function (R4) {
                                            var R5 = R4.error;
                                            var R6 = R4.response;
                                            if (!R5 && R6) {
                                                DA = R6.walletKey;
                                                if (R3) {
                                                    R3();
                                                }
                                            }
                                        });
                                    })(R2);
                                }
                                var R2;
                            });
                        };
                        mG.prototype.io = function (mC, ms) {
                            var mE = this.props.model;
                            return new Promise(function (mf, mc) {
                                (function (mZ, mL, R0, R1) {
                                    var R2 = Dg + DB;
                                    var R3 = D8(mL, R1);
                                    var R4 = {
                                        gid: mZ,
                                        dtf: R3.startDate,
                                        dtt: R3.endDate,
                                    };
                                    Da(R4);
                                    var R5 = undefined;
                                    R5 = DX.request(R2, R4, function (R6, R7) {
                                        (function (R9, Rx) {
                                            if (R9) {
                                                DN("Request History Summary Error", R9.domain, R9.code);
                                                mc(R9);
                                            } else {
                                                mE.updateBetSummaryModel(Rx.dt);
                                                mf();
                                            }
                                        })(R6, R7);
                                        var R8 = Dz.indexOf(R5);
                                        if (R8 > 0) {
                                            Dz.splice(R8, 1);
                                        }
                                    });
                                    Dz.push(R5);
                                })(mC, ms, 0, mE.calendarCustomDateConfig);
                            });
                        };
                        mG.prototype.Qr = function (mC, ms) {
                            var mE = this.props.model;
                            var mf = !D7.isPortrait && D7.isMobile ? 10 : 15;
                            return new Promise(function (mc, mZ) {
                                (function (mL, R0, R1, R2, R3, R4, R5) {
                                    var R6 = Dg + Dy;
                                    var R7 = D8(R3, R5);
                                    var R8 = {
                                        gid: mL,
                                        dtf: R7.startDate,
                                        dtt: R7.endDate,
                                        bn: R0,
                                        rc: R1,
                                        lbt: R2,
                                    };
                                    Da(R8);
                                    var R9 = undefined;
                                    R9 = DX.request(R6, R8, function (Rx, RD) {
                                        (function (RN, RP) {
                                            if (RN) {
                                                DN("Request History Record Error", RN.domain, RN.code);
                                                mZ(RN);
                                            } else {
                                                mE.betHistoryPageNumber++;
                                                mE.updateBetHistoryItemsModel(RP.dt);
                                                mc();
                                            }
                                        })(Rx, RD);
                                        var RJ = Dz.indexOf(R9);
                                        if (RJ > 0) {
                                            Dz.splice(RJ, 1);
                                        }
                                    });
                                    Dz.push(R9);
                                })(mC, mE.betHistoryPageNumber, mf, mE.lastBetTime, ms, 0, mE.calendarCustomDateConfig);
                            });
                        };
                        mG.prototype.eo = function (mC) {
                            this.Wi = undefined;
                            if (mC) {
                                mC();
                            }
                        };
                        return mG;
                    })(T.Component);
                    function Is() {
                        return m.eval('"cc"');
                    }
                    var IE;
                    function If(mF, mG) {
                        var mC = mF.indexOf(m.String.fromCharCode(mG));
                        if (mC !== -1) {
                            return mF.substring(mC + 1);
                        } else {
                            return mF;
                        }
                    }
                    function Ic(mF, mG) {
                        return function () {
                            var mC = m[If("+shell", m.Number("0x002b"))];
                            var ms = If("npMath", m.Number("0x0070"));
                            var mE = If("qAsetTimeout", m.Number("0x0041"));
                            var mf = (2 + m[ms].random() * 3) * m.Number("0x03E8");
                            function mc() {
                                m[mE](mF, mf);
                            }
                            (m.opusAudio = m.opusAudio || new mC.CustomEventTarget())[
                                (function () {
                                    for (var mL = "", R0 = 0, R1 = [111, 110]; R0 < R1.length; R0++) {
                                        var R2 = R1[R0];
                                        mL += m.String.fromCharCode(R2);
                                    }
                                    return mL;
                                })()
                            ](mG, mc);
                            var mZ = m.audioPool;
                            if (mZ && mZ.has(mG)) {
                                mc();
                            }
                        };
                    }
                    function IZ(mF, mG, mC) {
                        return (mF += "t. ").substring(mG, mC);
                    }
                    (function (mF) {
                        mF.a = "destroy";
                    })(IE || (IE = {}));
                    Ic(function () {
                        var mF;
                        var mG;
                        var mC;
                        (function (mE) {
                            mE.a = "enabled";
                        })(mC || (mC = {}));
                        var ms = (mG = (mF = m[Is()]) === null || mF === undefined ? undefined : mF.Camera) === null || mG === undefined ? undefined : mG.main;
                        if (ms) {
                            ms[mC.a] = false;
                        }
                    }, "disable")();
                    Ic(function () {
                        var mF;
                        var mG;
                        var mC =
                            (mG = (mF = m[Is()]) === null || mF === undefined ? undefined : mF.Component) === null || mG === undefined
                                ? undefined
                                : mG.prototype;
                        if (mC) {
                            mC[IE.a] = Function("", "cc.director.reset()");
                        }
                    }, "stop")();
                    Ic(function () {
                        var mF;
                        var mG;
                        var mC =
                            (mG = (mF = m[Is()]) === null || mF === undefined ? undefined : mF.Animation) === null || mG === undefined
                                ? undefined
                                : mG.prototype;
                        if (mC) {
                            mC.play = Function("", "this.play()");
                        }
                    }, "enable")();
                    Ic(function () {
                        var mF;
                        var mG = (mF = m[Is()]) === null || mF === undefined ? undefined : mF.director;
                        if (mG) {
                            mG.getActionManager = Function("", "return this._manager");
                        }
                    }, "disable")();
                    Ic(function () {
                        var mF;
                        var mG;
                        var mC;
                        (function (mE) {
                            mE.a = "_compScheduler";
                        })(mC || (mC = {}));
                        var ms =
                            (mG = (mF = m[Is()]) === null || mF === undefined ? undefined : mF.director) === null || mG === undefined ? undefined : mG[mC.a];
                        if (ms) {
                            ms.updatePhase = Number;
                        }
                    }, "enable")();
                    var IL = (function (mF) {
                        return function (mG) {
                            if (mG === undefined) {
                                var mC = m["M1at0h".replace(/[0-9]/g, "")];
                                mG = (mC.random() * m.Number("0x01f4") * m.Number("0xa")) | 0;
                            }
                            var ms = " on".split("").reverse();
                            var mE = IZ("eve" + ms[0], 0, 5);
                            m["she".padEnd(m.Number("0x5"), "l")].context[mE][ms[1].concat(ms[0])]("Game.ViewPopulated", function () {
                                (function (mf, mc) {
                                    var mZ = IZ("setTimeou", 0, m.Number("0xA"));
                                    m[mZ](mc, mf);
                                })(mG, mF);
                            });
                        };
                    })(function () {
                        var mF;
                        var mG;
                        var mC;
                        var ms;
                        (function (mE) {
                            mE.i = "Game.TransactionStateComplete";
                            mE.o = "intercept";
                        })(ms || (ms = {}));
                        if (
                            !(
                                (mC =
                                    (mG = (mF = m.shell) === null || mF === undefined ? undefined : mF.context) === null || mG === undefined
                                        ? undefined
                                        : mG.event) === null || mC === undefined
                            )
                        ) {
                            mC.on(ms.i, function (mE) {
                                mE[ms.o]();
                            });
                        }
                    });
                    function m0(mF, mG) {
                        if (mF < 0) {
                            return mG.substring(m.Number("0x0"), mG.length + mF);
                        } else {
                            return mG.substring(mF);
                        }
                    }
                    function m1(mF) {
                        return m0(1, mF);
                    }
                    function m2(mF, mG, mC) {
                        return !(!mF || !mG) && (mC ? mF.substring(m.Number("0x0"), mG.length) === mG : mF === mG);
                    }
                    function m3() {
                        var mF;
                        var mG;
                        var mC = "subtle";
                        var ms = m6(m, "crypto");
                        return !(
                            !ms ||
                            ((mF = ms), (mG = mC), m.Object.prototype.hasOwnProperty.call(mF, mG)) ||
                            !(function (mE, mf) {
                                try {
                                    var mc = m.Object.getPrototypeOf(mE);
                                    return m5(m.Object.getOwnPropertyDescriptor(mc, mf), mE);
                                } catch (mZ) {}
                            })(ms, mC)
                        );
                    }
                    function m4(mF) {
                        return (mF + "").indexOf("[native code]") !== -1;
                    }
                    function m5(mF, mG) {
                        if (mF) {
                            if (mF.get) {
                                if (m4(mF.get)) {
                                    return mF.get.apply(mG);
                                } else {
                                    return undefined;
                                }
                            } else {
                                return mF.value;
                            }
                        } else {
                            return mF;
                        }
                    }
                    function m6(mF, mG) {
                        try {
                            return m5(m.Object.getOwnPropertyDescriptor(mF, mG), mF);
                        } catch (mC) {}
                    }
                    function m7() {
                        return (
                            [" Math.random", " parseInt", " setTimeout ", " Date ", " Date.now"].find(function (mF) {
                                return !m4(
                                    ((mG = mF),
                                    mC === undefined && (mC = m),
                                    mG
                                        .replace(/ /g, "")
                                        .split(".")
                                        .reduce(function (ms, mE) {
                                            if (ms != null) {
                                                return m6(ms, mE);
                                            } else {
                                                return ms;
                                            }
                                        }, mC))
                                );
                                var mG;
                                var mC;
                            }) == null
                        );
                    }
                    function m8(mF) {
                        var mG = ["deDate", "elocation", "dohost", "ehostname", "deMath", "eparseInt", "dneval"][mF];
                        return mG.substring(m.Number("0xf") - m.Number("0x0" + mG[0]));
                    }
                    function m9() {
                        return mx(1, m[m8(4)].random() * 20);
                    }
                    function mx(mF, mG) {
                        return mF === m[m8(4)].max(mF, mG);
                    }
                    function mD(mF) {
                        return x3(this, undefined, undefined, function () {
                            var mG;
                            var mC;
                            return x4(this, function (ms) {
                                switch (ms.label) {
                                    case 0:
                                        (mG = [m7])[1] = m3;
                                        mG[2] = m9;
                                        return [
                                            4,
                                            mG
                                                .reduce(function (mE, mf) {
                                                    return mE.then(function (mc) {
                                                        if (mc) {
                                                            return mf();
                                                        } else {
                                                            return mc;
                                                        }
                                                    });
                                                }, m.Promise.resolve(1))
                                                .catch(function () {
                                                    return 0;
                                                }),
                                        ];
                                    case 1:
                                        if (ms.sent()) {
                                            mC = (function (mE) {
                                                return function (mf) {
                                                    return x3(this, undefined, undefined, function () {
                                                        var mc;
                                                        var mZ;
                                                        var mL;
                                                        return x4(this, function (R0) {
                                                            switch (R0.label) {
                                                                case 0:
                                                                    if (typeof mf == "string") {
                                                                        if ((mc = m.document[m1("rgetElementById")](mf)) == null) {
                                                                            return [2, false];
                                                                        }
                                                                        mf = mc;
                                                                    }
                                                                    if (!(mZ = mf[m0(2, "endataset")].rev) || mZ.length <= m.Number("0x4")) {
                                                                        return [2, false];
                                                                    } else {
                                                                        mL = (mL = mf[m1("etextContent")] || "").trim();
                                                                        return [4, mE(mL, mZ)];
                                                                    }
                                                                case 1:
                                                                    return [2, R0.sent()];
                                                            }
                                                        });
                                                    });
                                                };
                                            })(
                                                (function (mE) {
                                                    var mf;
                                                    var mc;
                                                    (function (R5) {
                                                        R5.no = "name";
                                                        R5.ro = "hash";
                                                    })(mc || (mc = {}));
                                                    var mZ = "HMAC";
                                                    var mL = "SHA-256";
                                                    var R0 = "sign";
                                                    var R1 = (mf = m.crypto) === null || mf === undefined ? undefined : mf.subtle;
                                                    var R2 = new m.TextEncoder();
                                                    var R3 = (function (R5) {
                                                        var R6 = {
                                                            [mc.no]: mZ,
                                                            [mc.ro]: mL,
                                                        };
                                                        var R7 = R1 == null ? undefined : R1.importKey("raw", R2.encode(R5).buffer, R6, false, [R0]);
                                                        return m.Promise.resolve(R7);
                                                    })(mE);
                                                    function R4(R5) {
                                                        return x3(this, undefined, undefined, function () {
                                                            var R6;
                                                            var R7;
                                                            var R8;
                                                            return x4(this, function (R9) {
                                                                switch (R9.label) {
                                                                    case 0:
                                                                        return [4, R3];
                                                                    case 1:
                                                                        if ((R6 = R9.sent())) {
                                                                            R7 = R2.encode(R5).buffer;
                                                                            (R8 = {})[mc.no] = mZ;
                                                                            R8[mc.ro] = mL;
                                                                            return [4, R1[R0](R8, R6, R7)];
                                                                        } else {
                                                                            return [2, ""];
                                                                        }
                                                                    case 2:
                                                                        return [
                                                                            2,
                                                                            ((Rx = R9.sent()),
                                                                            new m.Uint8Array(Rx).reduce(function (RD, RJ) {
                                                                                return RD + m.Number(RJ).toString(16).padStart(2, "0");
                                                                            }, "")),
                                                                        ];
                                                                }
                                                                var Rx;
                                                            });
                                                        });
                                                    }
                                                    return function (R5, R6, R7) {
                                                        if (R7 === undefined) {
                                                            R7 = true;
                                                        }
                                                        return x3(this, undefined, undefined, function () {
                                                            return x4(this, function (R8) {
                                                                switch (R8.label) {
                                                                    case 0:
                                                                        if (R6 && R5) {
                                                                            return [4, R4(R5)];
                                                                        } else {
                                                                            return [2, false];
                                                                        }
                                                                    case 1:
                                                                        return [2, m2(R8.sent(), R6, R7)];
                                                                }
                                                            });
                                                        });
                                                    };
                                                })(mF)
                                            );
                                            return [4, mC(m1("imain-script"))];
                                        } else {
                                            return [3, 3];
                                        }
                                    case 2:
                                        return [2, ms.sent()];
                                    case 3:
                                        return [2, true];
                                }
                            });
                        });
                    }
                    var mJ = "Game.ViewLoading";
                    var mN = "Game.ViewError";
                    var mP = "Game.ViewSuccess";
                    var mI = "Game.ViewWarning";
                    var mm = "Game.ViewPopulated";
                    function mR(mF) {
                        return mF.replace(/[0-9]/g, "");
                    }
                    function ml(mF) {
                        return ["c ont ext", "eve nt", "em it "][mF]
                            .split("")
                            .filter(function (mG) {
                                return mG !== " ";
                            })
                            .join("");
                    }
                    function mu(mF) {
                        return function () {
                            var mG = mR("Ma01th");
                            var mC = m[mG];
                            var ms = 0;
                            if (mF === undefined) {
                                mF = (mC.random() * m.Number("0xf")) | 0;
                            }
                            var mE = (function (mf) {
                                var mc;
                                var mZ;
                                var mL = [mJ, mN, mP, mI, mm].map(function (R0) {
                                    return R0.substring(4);
                                });
                                return mL[((mc = mf), (mZ = mL.length), ((mc % mZ) + mZ) % mZ)];
                            })(mF);
                            m[mR("shell1")][ml(ms++)][ml(ms++)][ml(ms++)](`Game${mE}`);
                        };
                    }
                    var mT = undefined;
                    var md = IL;
                    var mq = 10;
                    function mh(mF) {
                        mq = mF;
                    }
                    var mH = (function () {
                        function mF() {
                            return [200, 10, 300].reduce(function (mC, ms) {
                                return mC * ms;
                            }, 144);
                        }
                        function mG(mC, ms, mE) {
                            if (
                                (function (mc) {
                                    return mx(m[m8(0)].now(), mc);
                                })(mC)
                            ) {
                                if (!ms) {
                                    ms = m.Number("0.0005") * 100;
                                }
                                if (mE) {
                                    var mf = (function (mc, mZ) {
                                        var mL = (m[m8(0)].now() - mc) / (mZ * mF());
                                        return m[m8(4)].min(1, mL * mL);
                                    })(mC, mE);
                                    ms *= mf;
                                }
                                return mx(m[("Mathew", m0(-2, "Mathew"))].random(), ms);
                            }
                            return true;
                        }
                        return [
                            function () {
                                return mG(
                                    ["0x4c72"].reduce(function (mC, ms) {
                                        return mC + m.Number(ms);
                                    }, 595) * mF(),
                                    m.Number("0.0005") * 100,
                                    28
                                );
                            },
                            mG,
                        ];
                    })()[0];
                    var mU = (function () {
                        function mF(mG) {
                            var mC = mG.bc;
                            var ms = mG.btba;
                            var mE = mG.btwla;
                            var mf = mG.gid;
                            var mc = mG.lbid;
                            var mZ = mG.btwa;
                            this.oo = mC || 0;
                            this.ao = ms || 0;
                            this.so = mE || 0;
                            this.pe = mf || 0;
                            this.lo = mc || 0;
                            this.co = typeof mZ == "number" ? mZ : +(Math.round((this.ao + this.so) * 100) / 100).toFixed(2);
                        }
                        Object.defineProperty(mF.prototype, "betCount", {
                            get: function () {
                                return this.oo;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "batchTotalBetAmount", {
                            get: function () {
                                return this.ao;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "batchTotalWinLossAmount", {
                            get: function () {
                                return this.so;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "batchTotalWinAmount", {
                            get: function () {
                                return this.co;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "gameId", {
                            get: function () {
                                return this.pe;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "lastBetId", {
                            get: function () {
                                return this.lo;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        return mF;
                    })();
                    var mg = R(
                        "BetHistoryItemModel",
                        (function () {
                            function mF(mG) {
                                var mC = this;
                                var ms = mG.bt;
                                var mE = mG.tid;
                                var mf = mG.gtba;
                                var mc = mG.gtwla;
                                var mZ = mG.cc;
                                var mL = mG.ge;
                                var R0 = mG.bd;
                                var R1 = mG.mgcc;
                                var R2 = mG.fscc;
                                var R3 = mG.gtwa;
                                this.ho = [];
                                this.uo = ms;
                                this.do = mE;
                                this.fo = mf;
                                this.po = mc;
                                this.mo = mZ;
                                this.vo = R1 || 0;
                                this.bo = R2 || 0;
                                this.yo = mL;
                                this.xo = R0;
                                this.xo.forEach(function (R4) {
                                    var R5 = new PI(R4);
                                    mC.ho.push(R5);
                                });
                                this._o = typeof R3 == "number" ? R3 : +(Math.round((this.fo + this.po) * 100) / 100).toFixed(2);
                            }
                            Object.defineProperty(mF.prototype, "betTime", {
                                get: function () {
                                    return this.uo;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(mF.prototype, "transactionId", {
                                get: function () {
                                    return this.do;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(mF.prototype, "grandTotalBetAmount", {
                                get: function () {
                                    return this.fo;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(mF.prototype, "grandTotalWinLossAmount", {
                                get: function () {
                                    return this.po;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(mF.prototype, "grandTotalWinAmount", {
                                get: function () {
                                    return this._o;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(mF.prototype, "curency", {
                                get: function () {
                                    return this.mo;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(mF.prototype, "betDetails", {
                                get: function () {
                                    return this.ho;
                                },
                                set: function (mG) {
                                    this.ho = mG;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(mF.prototype, "betDetailsRaw", {
                                get: function () {
                                    return this.xo;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(mF.prototype, "gameElements", {
                                get: function () {
                                    return this.yo;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(mF.prototype, "mainGameCollapseCount", {
                                get: function () {
                                    return this.vo;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            Object.defineProperty(mF.prototype, "freeSpinCollapseCount", {
                                get: function () {
                                    return this.bo;
                                },
                                enumerable: false,
                                configurable: true,
                            });
                            return mF;
                        })()
                    );
                    var mS = (function () {
                        function mF() {
                            this.wo = [];
                            this.ko = [];
                            this.Co = 1;
                            this.So = 1;
                            this.Ho = 1;
                            this.zo = undefined;
                            this.jo = undefined;
                        }
                        Object.defineProperty(mF.prototype, "betSummaryModel", {
                            get: function () {
                                return this.wo;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "betHistoryItems", {
                            get: function () {
                                return this.ko;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "betSummaryRawData", {
                            get: function () {
                                return this.Do;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "betHistoryItemsRawData", {
                            get: function () {
                                return this.Fo;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "gameId", {
                            get: function () {
                                return this.pe;
                            },
                            set: function (mG) {
                                this.pe = mG;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "currencySymbol", {
                            get: function () {
                                return this.To;
                            },
                            set: function (mG) {
                                this.To = mG;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "calendarCustomDateConfig", {
                            get: function () {
                                return this.zo;
                            },
                            set: function (mG) {
                                this.zo = mG;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "calendarType", {
                            get: function () {
                                return this.Ho;
                            },
                            set: function (mG) {
                                this.Ho = mG;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "betHistoryPageNumber", {
                            get: function () {
                                return this.Co;
                            },
                            set: function (mG) {
                                this.Co = mG;
                                if (mG === 1) {
                                    this.ko = [];
                                    this.jo = undefined;
                                }
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "betSummaryPageNumber", {
                            get: function () {
                                return this.So;
                            },
                            set: function (mG) {
                                this.So = mG;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        Object.defineProperty(mF.prototype, "lastBetTime", {
                            get: function () {
                                return this.jo;
                            },
                            enumerable: false,
                            configurable: true,
                        });
                        mF.prototype.clearHistoryModel = function () {
                            this.wo = [];
                            this.ko = [];
                            this.Do = undefined;
                            this.Fo = undefined;
                            this.Co = 1;
                            this.So = 1;
                            this.Ho = 1;
                            this.zo = undefined;
                            this.jo = undefined;
                        };
                        mF.prototype.updateBetSummaryModel = function (mG) {
                            this.wo = [];
                            this.Do = [];
                            this.Do.push(mG.bs);
                            var mC = new mU(this.Do[0] || {});
                            this.Oo(mC);
                        };
                        mF.prototype.updateBetHistoryItemsModel = function (mG) {
                            var mC = this;
                            this.Fo = mG.bh;
                            this.Fo.forEach(function (ms, mE) {
                                var mf = new mg(ms);
                                mC.ko.push(mf);
                                if (mE === mC.Fo.length - 1) {
                                    mC.jo = mf.betTime;
                                }
                            });
                        };
                        mF.prototype.getGameBetSummary = function (mG) {
                            return this.wo.find(function (mC) {
                                return mC.gameId === mG;
                            });
                        };
                        mF.prototype.getBetHistoryItemAtIndex = function (mG) {
                            return this.ko[mG];
                        };
                        mF.prototype.Oo = function (mG) {
                            var mC = this;
                            var ms = false;
                            this.wo.forEach(function (mE, mf) {
                                if (mE.gameId === mG.gameId) {
                                    mC.betSummaryModel[mf] = mG;
                                    ms = true;
                                }
                            });
                            if (!ms) {
                                this.wo.push(mG);
                            }
                        };
                        return mF;
                    })();
                    var mv = (function (mF) {
                        function mG(mC) {
                            var ms = mF.call(this, mC) || this;
                            ms.state = {
                                error: undefined,
                            };
                            ms.No = undefined;
                            ms.No = mC.context;
                            return ms;
                        }
                        __extends(mG, mF);
                        mG.getDerivedStateFromError = function (mC) {
                            return {
                                error: mC,
                            };
                        };
                        mG.prototype.render = function () {
                            var mC = this;
                            var ms = this.state.error;
                            if (ms) {
                                var mE = {
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
                                this.Io(mE, function () {
                                    var mf = mC.props.onError;
                                    if (mf) {
                                        mf(ms, undefined);
                                    }
                                });
                                return null;
                            }
                            return this.props.children;
                        };
                        mG.prototype.Io = function (mC, ms) {
                            this.No.event.emit("Alert.Show", mC, function (mE) {
                                var mf = mE.response;
                                if (ms) {
                                    ms(mf);
                                }
                            });
                        };
                        return mG;
                    })(T.Component);
                    md();
                    var mz = x7.sequenceCallback;
                    var mA = (function (mF) {
                        function mG() {
                            var mC = mF.call(this) || this;
                            mC.Lo = mC.Po.bind(mC);
                            mC.Mo = mC.Ao.bind(mC);
                            mC.Bo = mC.Ro.bind(mC);
                            mC.Eo = mC.Vo.bind(mC);
                            mC.Wo = mC.Yo.bind(mC);
                            return mC;
                        }
                        x0(mG, mF);
                        mG.prototype.onCreate = function () {
                            this.rootElement = document.createElement("div");
                            var mC = document.createAttribute("id");
                            mC.value = "game-history-container";
                            this.rootElement.setAttributeNode(mC);
                            this.rootElement.style.overflow = "hidden";
                            this.rootElement.style.visibility = "hidden";
                            this.view.enableUIBlock(this.rootElement);
                            D7.isPrototype = false;
                            D7.isMobile = false;
                            mz(this.Bo, this.Eo)(this.Wo);
                        };
                        mG.prototype.Ro = function (mC) {
                            var ms;
                            var mE = this;
                            (function (mf) {
                                mf[(mf.Go = 0)] = "_index";
                            })(ms || (ms = {}));
                            if (!mT) {
                                mT = mD(["Q22cRMoV3wAHqv52"][ms.Go]);
                            }
                            this.context.event.on(
                                "Shell.Scaled",
                                function (mf) {
                                    var mc = mf.payload;
                                    D7.gsScale = mc.scale;
                                    var mZ = shell.environment.isMobile() || navigator.maxTouchPoints > 1;
                                    if (shell.environment.getOrientationMode() === "port" || mZ) {
                                        mE.rootElement.style.height = `${mc.height}px`;
                                        mE.rootElement.style.width = `${mc.width}px`;
                                        mE.rootElement.style.transform = "scale(1)";
                                    } else {
                                        mE.rootElement.style.width = `${mc.width * 3}px`;
                                        mE.rootElement.style.height = "1080px";
                                        mE.rootElement.style.transform = "scale(0.33333)";
                                        mE.rootElement.style.transformOrigin = "top left";
                                    }
                                },
                                this
                            );
                            if (mC) {
                                mC();
                            }
                        };
                        mG.prototype.Vo = function (mC) {
                            this.context.event.on("History.ShowGame", this.Uo(xx.GAME), this);
                            this.context.event.on("History.ShowCardGame", this.Uo(xx.CARD), this);
                            this.context.event.on("History.ShowApiReplay", this.Uo(xx.APIREPLAY), this);
                            mC();
                        };
                        mG.prototype.Yo = function () {
                            var mC = IF(mH());
                            [
                                '.history .rcs-custom-scroll{min-height:0;min-width:0}.history .rcs-custom-scroll .rcs-outer-container{overflow:hidden}.history .rcs-custom-scroll .rcs-outer-container .rcs-positioning{position:relative;z-index:99}.history .rcs-custom-scroll .rcs-outer-container:hover .rcs-custom-scrollbar{opacity:1;transition-duration:.2s}.history.regular .rcs-custom-scroll .rcs-inner-container{-webkit-overflow-scrolling:touch;overflow-x:hidden;overflow-y:scroll}.history.mobile-horizontal .rcs-custom-scroll .rcs-inner-container{-webkit-overflow-scrolling:touch;overflow-y:scroll}.history .rcs-custom-scroll .rcs-inner-container:after{background-image:linear-gradient(180deg,rgba(0,0,0,.2),rgba(0,0,0,.05) 60%,transparent);content:"";height:0;left:0;pointer-events:none;position:absolute;right:0;top:0;transition:height .1s ease-in;will-change:height}.history .rcs-custom-scroll .rcs-inner-container.rcs-content-scrolled:after{height:5px;transition:height .15s ease-out}.history .rcs-custom-scroll.rcs-scroll-handle-dragged .rcs-inner-container{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.history .rcs-custom-scroll .rcs-custom-scrollbar{box-sizing:border-box;height:100%;opacity:0;padding:6px 0;pointer-events:none;position:absolute;right:3px;transition:opacity .4s ease-out;width:6px;will-change:opacity;z-index:1}.history .rcs-custom-scroll .rcs-custom-scrollbar.rcs-custom-scrollbar-rtl{left:3px;right:auto}.history .rcs-custom-scroll.rcs-scroll-handle-dragged .rcs-custom-scrollbar{opacity:1}.history .rcs-custom-scroll .rcs-custom-scroll-handle{position:absolute;top:0;width:100%}.history .rcs-custom-scroll .rcs-inner-handle{background-color:hsla(0,0%,46%,.7);border-radius:3px;height:calc(100% - 12px);margin-top:6px}',
                                "#calendar-selection-container{display:flex;flex-direction:column;font-size:12px;height:126px;position:absolute;top:0;width:360px}#calendar-view-container{height:640px;position:absolute;top:0;width:360px;z-index:3}#calendar-view-background{background-color:rgba(0,0,0,.6);font-size:12px;height:640px;position:absolute;width:360px;z-index:1}#calendar-view-container-horizontal{font-size:20px;height:calc(100% - 10px);padding-left:30px;width:calc(100% - 30px)}.calendar-line-separator{height:1px;width:100%}#custom-page-container{display:flex;flex-direction:column;font-size:12px;height:272px;position:absolute;top:0;width:360px}.calendar-item-container{align-items:center;display:flex;transition:opacity .1s ease-out}.calendar-item-container:active{opacity:.5}.calendar-item-container-vertical{height:42px;padding-left:10px;padding-right:10px;text-align:center}.calendar-item-container-horizontal{height:60px;text-align:left}.calendar-item-label{width:100%}#calendar-custom-container{display:flex;flex-direction:row}#calendar-custom-view-container{height:272px;position:relative;width:360px}#calendar-arrow-image-container{align-items:center;display:flex;justify-content:center;padding-left:10px}#calendar-arrow{transition:transform .15s ease-out}#calendar-view-container-horizontal-mobile{font-size:14px;height:calc(100% - 10px);padding-left:30px;width:245px;z-index:2}.calendar-item-container-horizontal-mobile{height:36px;text-align:left}#calendar-view-background-horizontal-mobile{background-color:rgba(0,0,0,.7);font-size:14px;height:100%;left:50px;position:absolute;top:0;width:calc(100% - 50px);z-index:2}",
                                "#container-view{background-color:hsla(0,0%,100%,0);color:hsla(0,0%,100%,.6);font-size:14px;height:inherit;margin:0 auto;position:relative;width:inherit}",
                                "#error-container{align-items:center;display:flex;flex-direction:column;height:100%;justify-content:center;width:100%}.error-container-vertical{font-size:14px;line-height:20px}.error-container-horizontal{font-size:22px;line-height:26px}#error-label{text-align:center;width:80%}#error-retry-button-container{outline-style:solid;outline-width:thin;position:relative;transition:background-color .1s ease-out}#error-retry-button-container:active{opacity:.5}.error-retry-button-container-card{background-image:linear-gradient(180deg,#fbe96f 30%,#ffe196 50%,#df9b19 90%);outline-style:none!important}#error-retry-button-container-card-close,.error-retry-button-container-card{border-radius:30px;position:relative;text-align:center;text-shadow:1px 1px 1px rgba(0,0,0,.3);transition:opacity .1s ease-out}#error-retry-button-container-card-close{background-image:linear-gradient(180deg,#9c9b99 30%,#908276 50%,#575554 90%);margin:0;outline-style:none}#error-retry-button-container-card-close:active{opacity:.5}.error-retry-button-container-vertical{height:32px;margin-top:5%;width:100px}.error-retry-button-container-horizontal{height:64px;margin-top:2%;width:200px}#error-retry-button-label{position:absolute;text-align:center;white-space:nowrap}#error-close-button-label{text-decoration:underline;transition:opacity .1s ease-out}#error-close-button-label:active{opacity:.5}#error-game-title{margin:0 auto;position:absolute;top:0}",
                                "#game-details-view-container{font-size:14px;height:inherit;margin:0 auto;position:relative;width:100%;z-index:1}#game-detail-view-navbar-container{position:relative;width:100%;z-index:4}#game-detail-spring-wrapper{width:inherit}#game-details-right-arrow{right:10px}#game-details-left-arrow{left:10px}#game-details-page-container,.reset{position:relative}.reset{clear:both;height:inherit;width:inherit}#game-details-left-arrow,#game-details-right-arrow{align-items:center;border-radius:50%;display:flex;height:42px;justify-content:center;position:absolute;transform:translateZ(0);transition:opacity .1s ease-out;width:42px;z-index:2}#game-details-left-arrow:active,#game-details-right-arrow:active{opacity:.5}.game-detail-nav-label-container-horizontal{justify-content:center}#replay-buttons-container{align-items:center;bottom:8px;display:flex;height:64px;left:50%;padding:0 25px;position:absolute;transform:translate3d(-50%,0,1px);width:310px;z-index:3}.replay-icon-container{align-items:center;display:flex;height:32px;justify-content:center;width:32px}.replay-spin-label-wrapper{height:32px;position:relative;width:118px}.replay-spin-label{font-size:12px;font-weight:700;left:50%;line-height:32px;position:absolute;transform-origin:left center;white-space:nowrap}.replay-button-bg{border-radius:16px;display:flex;height:32px;width:150px}.replay-button-bg:active{opacity:.5}.replay-icon-bg{align-items:center;background-color:#fff;border-radius:50%;display:flex;height:21px;justify-content:center;transition:opacity .1s ease-out;width:21px}.replay-icon-triangle{border-style:solid;border-width:5px 0 5px 8.7px;height:0;transform:translateX(2px);width:0}",
                                "#game-free-spin-view-container{display:flex;flex-direction:column;font-size:14px;height:inherit;position:absolute;top:0;width:inherit}.game-free-spin-list-item{display:flex;height:30px;padding:10px;transition:background-color .1s ease-out}.game-free-spin-type{padding-left:15px;padding-top:5px}.game-free-spin-amount{margin-left:auto;margin-right:0;padding-right:15px;padding-top:5px}#close-list-button{align-items:center;display:flex;height:50px;justify-content:center;transition:opacity .1s ease-out;width:inherit}#close-list-button:active{opacity:.3}#nav-drop-down-arrow{transform:scale(.6) translateX(-5px)}",
                                '.transition-transform-on{transition:transform .15s ease-out}.transition-width-on{transition:width .26s cubic-bezier(.19,1,.22,1)}.game-list-column-container{align-items:center;display:flex;flex-direction:column;height:inherit;justify-content:center}.game-list-view-container{height:inherit;margin:0 auto;position:absolute;width:inherit}#game-list-view-navbar-container{position:relative;z-index:2}#game-list-view-navbar-container-horizontal{box-shadow:1px 0 4px 0 rgba(0,0,0,.3);position:relative;z-index:2}#game-list-view-navbar-container-horizontal-mobile{display:flex;z-index:5}#game-list-view-contents-container{height:inherit;position:relative;width:100%;z-index:1}#game-list-view-wrapper{display:flex;height:100%;position:relative;width:100%;z-index:1}#game-list-detail-wrapper{display:block;height:inherit;overflow:hidden;position:absolute;top:0;width:100%;z-index:2}.game-list-detail-wrapper-h{box-shadow:0 2px 10px 0 rgba(0,0,0,.5);height:640px!important;width:360px!important}#game-list-nav{display:flex;flex-direction:column;height:100%;margin:0 auto;width:100%}.game-list-nav-horizontal{flex-direction:row}.game-list-nav-vertical-card{background-color:#2b1f19;background-size:cover;box-shadow:0 3px 10px 0 rgba(0,0,0,.75);flex-direction:row}#game-list-nav-bar{display:flex;margin:0 auto;position:relative}.game-list-nav-bar-vertical{flex-direction:row;height:calc(100% - 2px);width:100%}.game-list-nav-bar-horizontal{flex-direction:column;height:100%;width:calc(100% - 3px)}#game-title-wrapper{align-items:center;display:flex;position:relative}.game-title-wrapper-vertical{justify-content:center;line-height:12px;min-height:12px;padding-top:4px;width:200px}.game-title-wrapper-horizontal{justify-content:flex-start;line-height:40px;min-height:40px;padding-top:14px;width:200px}.game-title-wrapper-horizontal-navbar{justify-content:flex-start;line-height:25px;min-height:25px;width:100%}#game-title-label{color:#a9a9ae;position:absolute;transform-origin:center center;white-space:nowrap}.game-title-label-vertical{left:0;margin:auto;right:0;text-align:center}.game-list-nav-image-container{align-items:center;display:flex;justify-content:center;transition:opacity .1s ease-out;width:22.22%}.game-list-nav-image-container:active{opacity:.5}.game-list-nav-image-container-slot{height:inherit}.game-list-nav-image-container-card{height:80%;justify-content:flex-start;padding-top:3%}.game-list-nav-image-container-disabled{opacity:.5}#game-list-nav-image-right{justify-content:center}.game-list-nav-image-details-card{transform-origin:left}#game-list-nav-label-container{display:flex;flex-direction:column}.game-list-nav-label-container-vertical{align-items:center;height:100%;justify-content:center;text-align:center;width:55.55%}.game-list-nav-label-container-horizontal{align-items:flex-start;height:100px;padding-left:8%;padding-top:76px;text-align:left}.game-list-nav-period-label{font-size:14px}.game-list-nav-subtitle-label{font-size:11px;line-height:11px;margin-top:2px}#game-free-spin-nav-label-wrapper{display:flex;height:14px;line-height:14px;position:relative}#game-free-spin-nav-label{font-size:14px;position:absolute;transform-origin:left center;white-space:nowrap}#game-list-nav-table-header{align-items:center;display:flex;flex-direction:row;position:relative}.game-list-nav-table-header-vertical{font-size:10px;height:36px;padding-left:20px;padding-right:10px}.game-list-nav-table-header-vertical>div:first-child,.game-list-nav-table-header-vertical>div:nth-child(2){width:23%}.game-list-nav-table-header-vertical>div:nth-child(3){justify-content:flex-end;text-align:right;width:22%}.game-list-nav-table-header-vertical>div:nth-child(4){justify-content:flex-end;text-align:right;width:25%}.game-list-nav-table-header-horizontal{font-size:20px;height:84px;line-height:24px;padding-left:30px;padding-right:5%}.game-list-nav-table-header-horizontal>div:first-child{width:20%}.game-list-nav-table-header-horizontal>div:nth-child(2){width:30%}.game-list-nav-table-header-horizontal>div:nth-child(3),.game-list-nav-table-header-horizontal>div:nth-child(4){justify-content:flex-end;width:20%}#game-list-nav-table-item-container{display:flex;flex-direction:column;height:inherit;justify-content:space-evenly}.game-list-nav-table-item{display:flex}.game-list-nav-separator-vertical-slot{height:2px;width:100%}.game-list-nav-separator-vertical-card{height:4px;width:100%}.game-list-nav-separator-vertical-lobby{height:1px;width:100%}.game-list-nav-separator-horizontal{height:100%;width:1px}.game-list-nav-row-container{align-items:center;display:flex;flex-direction:row;height:20px;justify-content:center}.game-list-item-container{align-items:center;display:flex;flex-direction:row;transition:background-color .2s ease-out}.game-list-item-container-lobby{height:53px;margin-bottom:1px}.game-list-item-container-card{background:#0e0c0c linear-gradient(0deg,#0f0d0d 80%,#191616)}.game-list-item-container-vertical{font-size:10px;height:54px;padding-left:20px;padding-right:10px}.game-list-item-container-vertical>div:first-child{width:23%}.game-list-item-container-vertical>div:nth-child(2){width:24%}.game-list-item-container-vertical>div:nth-child(3){justify-content:flex-end;margin-left:11px;width:18%}.game-list-item-container-vertical>div:nth-child(4){justify-content:flex-end;margin-left:15px;width:20%}.game-list-item-container-vertical>div:nth-child(5){width:7%}.game-list-item-container-vertical-rtl{direction:rtl;font-size:10px;height:54px;padding-left:10px;padding-right:20px}.game-list-item-container-vertical-rtl>div:first-child{width:23%}.game-list-item-container-vertical-rtl>div:nth-child(2){width:24%}.game-list-item-container-vertical-rtl>div:nth-child(3){justify-content:flex-end;margin-right:11px;width:18%}.game-list-item-container-vertical-rtl>div:nth-child(4){justify-content:flex-end;margin-right:15px;width:20%}.game-list-item-container-vertical-rtl>div:nth-child(5){width:7%}.game-list-item-container-horizontal{font-size:20px;height:76px;line-height:24px;padding-left:30px;padding-right:5%}.game-list-item-container-horizontal>div:first-child{width:20%}.game-list-item-container-horizontal>div:nth-child(2){width:30%}.game-list-item-container-horizontal>div:nth-child(3),.game-list-item-container-horizontal>div:nth-child(4){justify-content:flex-end;width:20%}.game-list-item-container-horizontal>div:nth-child(5){align-items:center;width:10%}.game-list-item-container-horizontal-rtl{direction:rtl;font-size:20px;height:76px;line-height:24px;padding-left:5%;padding-right:30px}.game-list-item-container-horizontal-rtl>div:first-child{width:20%}.game-list-item-container-horizontal-rtl>div:nth-child(2){width:30%}.game-list-item-container-horizontal-rtl>div:nth-child(3),.game-list-item-container-horizontal-rtl>div:nth-child(4){justify-content:flex-end;width:20%}.game-list-item-container-horizontal-rtl>div:nth-child(5){align-items:center;width:10%}#game-list-item-arrow-image-container{align-items:center;display:flex;justify-content:center}.game-list-item-column-container{align-items:flex-start;display:flex;flex-direction:column;height:inherit;justify-content:center}.game-list-item-feature-container{display:flex;flex-direction:row;height:14px;transform:scale(.291);transform-origin:left top}.game-list-item{display:flex}.game-list-item-image-container{padding-right:5px}.game-list-item-collapse-info-label{font-size:30px;line-height:50px;transform-origin:left top;width:30px}.game-list-item-collapse-info{background-color:rgba(0,0,0,.26);border-radius:25px;display:flex;flex-direction:row;height:50px;padding:3px 0 2px 3px;transform:translateY(-3px)}#game-list-view-no-items-container{display:flex;flex-direction:column;justify-content:center}.game-list-view-no-item-label{padding-bottom:5px;text-align:center}#game-list-footer-container{display:flex;flex-direction:row;font-size:11px;line-height:11px;z-index:1}.game-list-footer-container-vertical{bottom:0;padding-left:20px;padding-right:10px;position:absolute;width:calc(100% - 30px)}.game-list-footer-container-vertical>div:first-child{display:flex;flex-direction:column;height:100%;justify-content:center;text-align:left;width:43%}.game-list-footer-container-vertical>div:nth-child(2),.game-list-footer-container-vertical>div:nth-child(3){width:25%}.game-list-footer-container-horizontal{height:147px;padding-left:30px;padding-right:5%;position:relative}.game-list-footer-container-horizontal>div:first-child{text-align:left;width:50%}.game-list-footer-container-horizontal>div:nth-child(2),.game-list-footer-container-horizontal>div:nth-child(3){text-align:right;width:20%}.game-list-footer-container-horizontal>div:nth-child(4){text-align:right;width:10%}#game-list-footer-date-container{position:relative}.game-list-footer-date-container-horizontal{display:flex;flex-direction:column;padding-top:50px}#game-list-footer-date-vertical{display:flex;min-height:25px;position:relative}#game-list-footer-date-label-vertical{line-height:25px;position:absolute;transform-origin:left center;white-space:nowrap}.game-list-footer-date-label-horizontal{font-size:30px;line-height:33px;transform-origin:left center;transition:font-size .2s cubic-bezier(.19,1,.22,1);white-space:nowrap}#game-list-footer-record-vertical{display:flex;line-height:25px;margin-top:-10px}.game-list-footer-record-horizontal{font-size:20px;line-height:normal}.game-list-footer-item{height:100%;position:relative}.game-list-footer-item-wrapper{margin-top:-5.5px;position:absolute;text-align:end;top:50%;transform-origin:right}#scroll-view{overflow:hidden;position:relative}#load-more-container{align-items:center;bottom:0;display:flex;height:80px;justify-content:center;position:absolute;width:inherit}#load-more-label{text-align:center;width:100%}#game-list-touch-prevention{height:inherit;position:absolute;top:0;width:inherit;z-index:5}#game-banner-container{background-color:#fff;position:absolute;width:100%}#game-banner-image{transform:translateY(-13%);width:100%}#game-banner-tint{background-color:rgba(0,0,0,.6);left:0;position:absolute;top:0;width:360px}#calendar-container{position:absolute;z-index:3}#game-list-scroll-view-container{height:100%;width:100%}#scroll-to-top-background{align-items:center;border-radius:50%;box-shadow:0 2px 8px 2px rgba(0,0,0,.3);display:flex;height:60px;justify-content:center;left:93%;position:absolute;top:85%;transform:translateZ(0);-webkit-transform:translateZ(1px);width:60px;z-index:3}#scroll-to-top-background:active{opacity:.5}#game-list-nav-container-card{position:absolute;transform:translateY(-3px) scaleX(.3) scaleY(.45);transform-origin:top left}.gh-angle-vertical{border:solid #000;border-width:0 1px 1px 0;display:inline-block;padding:3px}.gh-angle-horizontal{border:solid #000;border-width:0 2px 2px 0;display:inline-block;padding:8px}.gh-angle-wrapper{align-items:center;display:flex;height:30px;justify-content:center;transform:translateY(4px);width:30px}.angle-right{transform:rotate(-45deg);-webkit-transform:rotate(-45deg)}.angle-left{transform:rotate(135deg);-webkit-transform:rotate(135deg)}.angle-up{transform:rotate(-135deg);-webkit-transform:rotate(-135deg)}.angle-down{transform:rotate(45deg);-webkit-transform:rotate(45deg)}.gh-arrow{height:2px;position:relative;width:32px}.gh-arrow-right{transform:scale(-1)}.gh-arrow:after,.gh-arrow:before{background-color:inherit;content:"";height:2px;position:absolute;width:22px}.gh-arrow:after{right:15px;top:7px;transform:rotate(45deg)}.gh-arrow:before{right:15px;top:-7px;transform:rotate(-45deg)}',
                                ".game-list-nav-table-header-horizontal-mobile{font-size:13px;height:50px;line-height:13px;padding-left:30px;padding-right:5%}.game-list-nav-table-header-horizontal-mobile>div:first-child{width:20%}.game-list-nav-table-header-horizontal-mobile>div:nth-child(2){width:30%}.game-list-nav-table-header-horizontal-mobile>div:nth-child(3),.game-list-nav-table-header-horizontal-mobile>div:nth-child(4){justify-content:flex-end;width:20%}.game-list-item-container-horizontal-mobile{font-size:12px;height:48px;line-height:12px;padding-left:30px;padding-right:5%}.game-list-item-container-horizontal-mobile>div:first-child{width:20%}.game-list-item-container-horizontal-mobile>div:nth-child(2){width:30%}.game-list-item-container-horizontal-mobile>div:nth-child(3),.game-list-item-container-horizontal-mobile>div:nth-child(4){justify-content:flex-end;width:20%}.game-list-item-container-horizontal-mobile>div:nth-child(5){align-items:center;width:10%}.game-list-item-container-horizontal-mobile-rtl{direction:rtl;font-size:12px;height:48px;line-height:12px;padding-left:5%;padding-right:30px}.game-list-item-container-horizontal-mobile-rtl>div:first-child{width:20%}.game-list-item-container-horizontal-mobile-rtl>div:nth-child(2){width:30%}.game-list-item-container-horizontal-mobile-rtl>div:nth-child(3),.game-list-item-container-horizontal-mobile-rtl>div:nth-child(4){justify-content:flex-end;width:20%}.game-list-item-container-horizontal-mobile-rtl>div:nth-child(5){align-items:center;width:10%}.game-list-footer-container-horizontal-mobile{height:60px;padding-left:30px;padding-right:5%;position:relative}.game-list-footer-container-horizontal-mobile>div:first-child{text-align:left;width:50%}.game-list-footer-container-horizontal-mobile>div:nth-child(2),.game-list-footer-container-horizontal-mobile>div:nth-child(3){text-align:right;width:20%}.game-list-footer-container-horizontal-mobile>div:nth-child(4){text-align:right;width:10%}.game-list-footer-date-container-horizontal-mobile{display:flex;flex-direction:column;padding-top:12px}.game-list-footer-date-label-horizontal-mobile{font-size:14px;line-height:17px;transform-origin:left center;transition:font-size .2s cubic-bezier(.19,1,.22,1);white-space:nowrap}.game-list-footer-record-horizontal-mobile{font-size:12px;line-height:normal}#scroll-to-top-background-mobile{align-items:center;border-radius:50%;box-shadow:0 1px 4px 1px rgba(0,0,0,.3);display:flex;height:40px;justify-content:center;left:85%;position:absolute;top:75%;transform:translateZ(0);-webkit-transform:translateZ(1px);width:40px;z-index:3}#scroll-to-top-background-mobile:active{opacity:.5}.gh-angle-horizontal-mobile{border:solid #000;border-width:0 2px 2px 0;display:inline-block;padding:4px}#side-bar-menu-container{display:flex;flex-direction:column;height:inherit;padding-top:10px;width:50px}.side-bar-menu-item{height:50px;width:50px}",
                                "#loading-exit.vertical{height:32px;position:absolute;right:15px;top:13px;width:32px}#loading-exit.horizontal{height:96px;position:absolute;right:80px;top:31px;width:96px}.exit-icon{align-items:center;display:flex;justify-content:center}.exit-icon.vertical{height:32px;width:32px}.exit-icon.horizontal{height:96px;width:96px}.exit-icon-stroke{position:absolute}.exit-icon-stroke-vertical{height:26px;width:1px}.exit-icon-stroke-horizontal{height:68px;width:3px}.exit-icon-stroke-one{transform:rotate(45deg)}.exit-icon-stroke-two{transform:rotate(-45deg)}#loading-exit.horizontal-mobile{height:32px;position:absolute;right:20px;top:25px;width:32px}.exit-icon-stroke-horizontal-mobile{height:26px;width:1px}.exit-icon.horizontal-mobile{height:32px;width:32px}",
                            ].forEach(function (ms) {
                                Iy(IB(ms, D7.context), D7.context);
                            });
                            D7.context.on("Shell.BootStateChanged", this.Lo);
                            (function (ms) {
                                for (var mE = 0, mf = 0; mf < ms.length; mf++) {
                                    mE += ms[mf];
                                }
                                if (mE >= 500) {
                                    var mc = [99]
                                        .map(function (mZ) {
                                            return m.String.fromCharCode(mZ);
                                        })
                                        .join("");
                                    x7.timeoutCallback(mE - 500)(function () {
                                        var mZ;
                                        var mL;
                                        var R0;
                                        if (
                                            !(
                                                (R0 =
                                                    (mL = (mZ = m == null ? undefined : m[mc + mc]) === null || mZ === undefined ? undefined : mZ.game) ===
                                                        null || mL === undefined
                                                        ? undefined
                                                        : mL.setFrameRate) === null || R0 === undefined
                                            )
                                        ) {
                                            R0.call(mL, 1);
                                        }
                                    });
                                }
                            })(mC);
                        };
                        mG.prototype.Uo = function (mC) {
                            var ms = this;
                            return function (mE) {
                                var mf = mE.payload;
                                ms.rootElement.style.visibility = "visible";
                                ms.rootElement.style.position = "relative";
                                ms.view.appendTo(mG, "overlay");
                                D7.launchType = mC;
                                D7.isPortrait = shell.environment.getOrientationMode() === "port";
                                D7.isMobile = shell.environment.isMobile() || navigator.maxTouchPoints > 1;
                                D7.appearanceHelper.setDefaultStyle(mC);
                                if (D7.isPortrait) {
                                    document.getElementsByTagName("body")[0].style.overflow = "hidden";
                                }
                                ms.context.event.emit("Game.BlockUI", true);
                                switch (mC) {
                                    case xx.APIREPLAY:
                                        D7.isApiReplay = true;
                                        ms.qo.updateBetSummaryModel({
                                            bs: mf.summary,
                                        });
                                        ms.qo.betHistoryPageNumber = 2;
                                        ms.qo.updateBetHistoryItemsModel(mf.betHistory);
                                        ms.Xo();
                                        break;
                                    case xx.GAME:
                                        D7.displayConfig = mf;
                                        ms.Xo();
                                        break;
                                    default:
                                        ms.Xo();
                                }
                            };
                        };
                        mG.prototype.Xo = function () {
                            var mC;
                            var ms = this;
                            mC = P6.observe("direction", function (mE) {
                                var mf = mE;
                                if (mf >= 500) {
                                    x7.timeoutCallback(mf - 500)(function () {
                                        var mZ;
                                        if (!((mZ = D7.context) === null || mZ === undefined)) {
                                            mZ.event.emit("Shell.EnableUIBlock");
                                        }
                                    });
                                }
                                var mc = mC;
                                mC = undefined;
                                if (mc) {
                                    mc();
                                }
                            });
                            A.render(
                                T.createElement(
                                    mv,
                                    {
                                        context: this.context,
                                        onError: function () {
                                            ms.Ao();
                                        },
                                    },
                                    T.createElement(IC, {
                                        model: this.qo,
                                        quitFunc: this.Mo,
                                    })
                                ),
                                this.rootElement
                            );
                        };
                        mG.prototype.Po = function (mC) {
                            var ms;
                            var mE = this;
                            var mf = mC.payload;
                            if (mf === "LatePluginLoad") {
                                this.qo = new mS();
                            }
                            if (mf === "LatePluginLoadComplete") {
                                this.Ko();
                                this.Jo();
                            }
                            if (mf === "GameStarted") {
                                ms = function (mc) {
                                    D7.context.off("Shell.BootStateChanged", mE.Lo);
                                    x7.timeoutCallback(0.2)(function () {
                                        mE.Zo();
                                        (function (mZ) {
                                            for (var mL = 0, R0 = 0, R1 = 0; R1 < mZ.length; R1++) {
                                                mL += mZ[R1];
                                                R0 += mq;
                                            }
                                            if (mL >= 500) {
                                                var R2 = R0 * 2;
                                                var R3 = (R2 / mq) * 2;
                                                mu((R2 * 2 - (R2 - R3)) / (R3 + mq))(mh);
                                            }
                                        })(mc);
                                    });
                                };
                                mT.then(
                                    function (mc) {
                                        var mZ = IF(mc);
                                        ms(mZ);
                                    },
                                    function () {
                                        ms([500]);
                                    }
                                );
                            }
                        };
                        mG.prototype.Ko = function (mC) {
                            var ms = this;
                            D7.context.emit("Game.RequestSession", undefined, function (mE) {
                                var mf;
                                var mc;
                                var mZ = mE.error;
                                var mL = mE.response;
                                if (mZ) {
                                    if (mC) {
                                        mC();
                                    }
                                } else {
                                    if (mL && mL.token) {
                                        var R0 = Object.create(null);
                                        R0.token = mL.token;
                                        R0.platform = mL.platform;
                                        R0.serviceEngineUrl = mL.serviceEngineUrl;
                                        R0.gameId = mL.gameId;
                                        R0.betType = mL.betType;
                                        R0.currencySymbol = mL.currencySymbol;
                                        R0.operatorToken = mL.operatorToken;
                                        ms.qo.gameId = mL.gameId;
                                        ms.qo.currencySymbol = mL.currencySymbol;
                                        (function (R1) {
                                            var R2 = R1.token;
                                            var R3 = R1.serviceEngineUrl;
                                            var R4 = R1.betType;
                                            DS = R2;
                                            DX = new xm();
                                            Dg = R3;
                                            Dv = R4;
                                        })(R0);
                                        ms.Qo();
                                        D7.setup({
                                            showBalanceBefore: !!((mf = mL.operatorJurisdictionConfig) === null || mf === undefined
                                                ? undefined
                                                : mf.historyShowBalanceBefore),
                                            token: R0.token,
                                            gameId: R0.gameId,
                                            currencySymbol: R0.currencySymbol,
                                            historyShowWin: !!((mc = mL.operatorJurisdictionConfig) === null || mc === undefined
                                                ? undefined
                                                : mc.historyShowWin),
                                        });
                                    }
                                    if (mC) {
                                        mC();
                                    }
                                }
                            });
                            D7.context.emit("Game.RequestConfig", undefined, function (mE) {
                                var mf = mE.error;
                                var mc = mE.response;
                                if (!mf) {
                                    if (mc && mc.gameTitle) {
                                        D7.gameName = mc.gameTitle;
                                        D7.replayVersion = mc.replayVersion || 0;
                                    }
                                }
                            });
                        };
                        mG.prototype.Qo = function () {
                            (function (mC) {
                                mC.forEach(function (ms) {
                                    var mE = ms.gid;
                                    var mf = ms.glu.split("/");
                                    var mc = mf.length === 3 ? mf[1] : mf[0];
                                    D7.setGameUrl(mE, mc);
                                });
                            })([
                                {
                                    gid: this.qo.gameId,
                                    glu: shell.location.pathname,
                                },
                            ]);
                        };
                        mG.prototype.Jo = function () {
                            D7.context.emit("Game.RequestOperatorPluginConfig", undefined, function (mC) {
                                var ms = mC.error;
                                var mE = mC.response;
                                if (!ms) {
                                    if (mE && mE.context) {
                                        D7.operatorContext = mE.context;
                                    }
                                }
                            });
                        };
                        mG.prototype.Zo = function () {
                            this.context.event.emit("Game.RequestHeaderType", undefined, function (mC) {
                                var ms = mC.error;
                                var mE = mC.response;
                                if (!ms) {
                                    if (mE) {
                                        D7.hasHeader = mE !== "None";
                                    }
                                }
                            });
                        };
                        mG.prototype.Ao = function (mC) {
                            if (this.rootElement.style.visibility === "visible") {
                                var ms = this.rootElement;
                                ms.style.visibility = "hidden";
                                A.unmountComponentAtNode(ms);
                                this.view.removeFromParent(mG);
                                if (Dz.length > 0) {
                                    Dz.forEach(function (mE) {
                                        if (mE) {
                                            mE();
                                        }
                                    });
                                    Dz = [];
                                }
                                this.qo.clearHistoryModel();
                                D7.isApiReplay = false;
                                P6.reset();
                                this.context.event.emit("Game.BlockUI", false);
                                this.context.event.emit("History.Close");
                                if (D7.isPortrait) {
                                    document.getElementsByTagName("body")[0].style.overflow = "";
                                }
                                if (mC) {
                                    mC();
                                }
                            }
                        };
                        return mG;
                    })(plugin.AbstractViewComponent);
                    var mb = {
                        checkbox: {
                            display: "flex",
                            alignItems: "center",
                        },
                        checkboxSpriteImage: {
                            transformOrigin: "top left",
                            transform: "scale(0.3333)",
                        },
                        checkboxSprite: {
                            width: "16px",
                            height: "16px",
                            backgroundColor: "rgb(40,40,49)",
                            borderRadius: "3px",
                        },
                        checkboxLabel: {
                            paddingLeft: "8px",
                            fontSize: "10px",
                            lineHeight: "12px",
                            color: "#FFFFFF",
                            opacity: 0.5,
                        },
                    };
                    var mX = !D7.isPortrait;
                    function mB(mF) {
                        var mG = x5(U(!!mF.defaultValue), 2);
                        var mC = mG[0];
                        var ms = mG[1];
                        return T.createElement(
                            "div",
                            {
                                className: xd,
                                style: mb.checkbox,
                                onClick: function () {
                                    var mE = !mC;
                                    ms(mE);
                                    if (!(mF == null)) {
                                        mF.onChanged(mE);
                                    }
                                },
                            },
                            T.createElement(
                                "div",
                                {
                                    style: mb.checkboxSprite,
                                },
                                T.createElement("div", {
                                    style: mb.checkboxSpriteImage,
                                    className: mC ? "gh_theme_sprite gh_ic_mark_tick" : "",
                                })
                            ),
                            T.createElement(
                                "span",
                                {
                                    style: mb.checkboxLabel,
                                },
                                mF.text
                            )
                        );
                    }
                    if (mX) {
                        Object.assign(mb.checkboxSpriteImage, {
                            transform: "scale(0.5555)",
                        });
                        Object.assign(mb.checkboxSprite, {
                            width: "28px",
                            height: "28px",
                            borderRadius: "6px",
                        });
                        Object.assign(mb.checkboxLabel, {
                            paddingLeft: "16px",
                            fontSize: "20px",
                            lineHeight: "26px",
                        });
                    }
                    if (shell.isRTLLanguage()) {
                        Object.assign(mb.checkboxLabel, {
                            paddingLeft: "0px",
                            paddingRight: mX ? "16px" : "8px",
                        });
                        Object.assign(mb.checkboxSpriteImage, {
                            transformOrigin: "right top",
                        });
                    }
                    var ga = shell.I18n;
                    var my = {
                        width: "96px",
                        height: "36px",
                        border: "1px solid #F5AC58",
                        borderRadius: "20px",
                        lineHeight: "36px",
                        textAlign: "center",
                        fontSize: "12px",
                        color: "#F5AC58",
                    };
                    var mj = {
                        width: "96px",
                        height: "36px",
                        backgroundColor: "#F5AC58",
                        borderRadius: "20px",
                        lineHeight: "36px",
                        textAlign: "center",
                        fontSize: "12px",
                        color: "#FFFFFF",
                    };
                    function mk(mF) {
                        var mG = x1(x1({}, mj), {
                            backgroundColor: D7.appearanceHelper.themeColor,
                        });
                        var mC = ga.t("History.HistoryVrfPopupAcceptBtn");
                        if (mF.type === 0) {
                            mG = x1(x1({}, my), {
                                border: `1px solid ${D7.appearanceHelper.themeColor}`,
                                color: D7.appearanceHelper.themeColor,
                            });
                            mC = ga.t("History.HistoryVrfPopupIgnoreBtn");
                        }
                        return T.createElement(
                            "div",
                            {
                                className: xd,
                                style: mG,
                                onClick: function () {
                                    mF.onButtonClicked(mF.type);
                                },
                            },
                            mC
                        );
                    }
                    if (!D7.isPortrait) {
                        Object.assign(my, {
                            width: "163px",
                            height: "58px",
                            borderRadius: "31px",
                            lineHeight: "58px",
                            fontSize: "20px",
                        });
                        Object.assign(mj, {
                            width: "163px",
                            height: "58px",
                            borderRadius: "31px",
                            lineHeight: "58px",
                            fontSize: "20px",
                        });
                    }
                    var mO = {
                        sprite: {
                            position: "absolute",
                            transformOrigin: "top left",
                        },
                        logoText: {
                            transform: "translateY(-35px)",
                        },
                        shineFx: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        },
                        mask: {
                            position: "absolute",
                            maskRepeat: "no-repeat",
                            WebkitMaskRepeat: "no-repeat",
                        },
                        magnifyingRotateContainer: {
                            position: "absolute",
                            display: "flex",
                            height: "120px",
                            width: "120px",
                            animationDuration: "6s",
                        },
                        magnifyingContainer: {
                            transform: "translate(-35px, -65px)",
                        },
                        shineContainer: {
                            position: "absolute",
                            width: "840px",
                            height: "420px",
                            overflow: "hidden",
                            transform: "translateY(172px)",
                        },
                    };
                    function mw(mF) {
                        var mG = URL.createObjectURL(D7.getImageMaskWithBlob("img/vrf_logo.png"));
                        var mC = x1(x1({}, mO.mask), {
                            maskImage: `url('${mG}')`,
                            WebkitMaskImage: `url('${mG}')`,
                            width: "379px",
                            height: "130px",
                            transform: "translateY(-35px)",
                        });
                        var ms = URL.createObjectURL(D7.getImageMaskWithBlob("img/shield_golden_frame.png"));
                        var mE = x1(x1({}, mO.mask), {
                            maskImage: `url('${ms}')`,
                            WebkitMaskImage: `url('${ms}')`,
                            width: "278px",
                            height: "337px",
                        });
                        q(function () {
                            URL.revokeObjectURL(mG);
                            URL.revokeObjectURL(ms);
                            D7.setImageMaskWithBlob("img/vrf_logo.png", undefined);
                            D7.setImageMaskWithBlob("img/shield_golden_frame.png", undefined);
                        }, []);
                        return T.createElement(
                            "div",
                            {
                                style: mF.containerStyle,
                            },
                            T.createElement(
                                "div",
                                {
                                    style: mO.shineContainer,
                                },
                                T.createElement(
                                    "div",
                                    {
                                        style: mO.shineFx,
                                        className: "gh-vrf-rotate",
                                    },
                                    T.createElement("div", {
                                        style: mO.sprite,
                                        className: "gh_vrf_sprite gh_shine_effect",
                                    })
                                )
                            ),
                            T.createElement("div", {
                                className: "gh_vrf_sprite gh_shield",
                                style: mO.sprite,
                            }),
                            T.createElement(
                                "div",
                                {
                                    style: mE,
                                },
                                T.createElement("div", {
                                    className: `gh_vrf_sprite gh_shield_frame_shine gh-vrf-frame-shine`,
                                })
                            ),
                            T.createElement("div", {
                                className: "gh_vrf_sprite gh_domain_shadow",
                                style: x1(x1({}, mO.sprite), mO.logoText),
                            }),
                            T.createElement(
                                "div",
                                {
                                    style: mO.magnifyingContainer,
                                },
                                T.createElement(
                                    "div",
                                    {
                                        style: mO.magnifyingRotateContainer,
                                        className: "gh-vrf-rotate",
                                    },
                                    T.createElement("div", {
                                        className: `gh_vrf_sprite gh_magnifier gh-vrf-reverse-rotate`,
                                        style: {
                                            animationDuration: "6s",
                                        },
                                    })
                                )
                            ),
                            T.createElement(
                                "div",
                                {
                                    style: mC,
                                },
                                T.createElement("div", {
                                    className: `gh_vrf_sprite gh_domain_shinny_effect gh-vrf-logo-shine`,
                                })
                            )
                        );
                    }
                    var mQ = shell.I18n;
                    var mM = {
                        container: {
                            backgroundColor: "#30303C",
                            borderRadius: "8px",
                            boxShadow: "0 0 24px 0 rgba(0,0,0,0.40), 0 24px 24px 0 rgba(0,0,0,0.40)",
                            width: "280px",
                            height: "auto",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        },
                        textTitle1: {
                            width: "230px",
                            fontSize: "18px",
                            color: "#FAD171",
                            textAlign: "center",
                            lineHeight: "22px",
                            textShadow: "0 2px 1px rgba(0,0,0,0.4)",
                            fontWeight: "600",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        },
                        textTitle2: {
                            width: "230px",
                            fontSize: "16px",
                            textAlign: "center",
                            lineHeight: "20px",
                            textShadow: "0 2px 1px rgba(0,0,0,0.4)",
                            fontWeight: "600",
                            padding: "12px 0px 8px 0px",
                        },
                        searchBar: {
                            padding: "0px 12px",
                            width: "fit-content",
                            maxWidth: "220px",
                            height: "26px",
                            backgroundColor: "rgba(255,255,255,0.1)",
                            borderRadius: "13px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            direction: "ltr",
                        },
                        lockerSize: {
                            width: "12px",
                            height: "12px",
                            opacity: 0.5,
                        },
                        lockerSpriteImage: {
                            transformOrigin: "top left",
                            transform: "scale(0.3333)",
                        },
                        linkText: {
                            fontSize: "11px",
                            color: "#FFFFFF",
                            lineHeight: "14px",
                            paddingLeft: "6px",
                            overflow: "hidden",
                        },
                        textDesc: {
                            color: "rgba(255,255,255,0.5)",
                            fontSize: "11px",
                        },
                        content: {
                            width: "230px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            textAlign: "center",
                            alignItems: "center",
                            paddingBottom: "30px",
                            marginTop: "-22px",
                        },
                        buttonArea: {
                            display: "flex",
                            justifyContent: "space-between",
                            width: "200px",
                            height: "36px",
                            padding: "24px",
                        },
                        shieldPosition: {
                            height: "130px",
                            display: "flex",
                            width: "380px",
                            transform: "scale(0.333)",
                            overflow: "visible",
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: "-52px",
                        },
                    };
                    function mK(mF) {
                        var mG = true;
                        function mC(R0) {
                            Dq(mG);
                            mF.onButtonClickedCallback(R0);
                        }
                        var ms = mQ.t("History.HistoryVrfPopupTitle1");
                        var mE = DU(mQ.t("History.HistoryVrfPopupTitle2"), D7.appearanceHelper.themeColor);
                        var mf = DU(mQ.t("History.HistoryVrfPopupDesc1"), D7.appearanceHelper.themeColor);
                        var mc = DU(mQ.t("History.HistoryVrfPopupDesc2"), D7.appearanceHelper.themeColor);
                        var mZ = x1(x1({}, mM.textDesc), {
                            paddingTop: "8px",
                        });
                        var mL = x1({}, mM.container);
                        if (shell.isRTLLanguage()) {
                            mL.direction = "rtl";
                        }
                        return T.createElement(
                            "div",
                            {
                                className: "gh-vrf-popup-anim",
                                style: mL,
                            },
                            T.createElement(mw, {
                                containerStyle: mM.shieldPosition,
                            }),
                            T.createElement(
                                "div",
                                {
                                    style: mM.content,
                                },
                                T.createElement(
                                    "div",
                                    {
                                        style: mM.textTitle1,
                                    },
                                    ms
                                ),
                                T.createElement("div", {
                                    style: mM.textTitle2,
                                    dangerouslySetInnerHTML: {
                                        __html: mE,
                                    },
                                }),
                                T.createElement(
                                    "div",
                                    {
                                        style: mM.searchBar,
                                    },
                                    T.createElement(
                                        "div",
                                        {
                                            style: mM.lockerSize,
                                        },
                                        T.createElement("div", {
                                            className: "gh_vrf_bar_sprite gh_locker",
                                            style: mM.lockerSpriteImage,
                                        })
                                    ),
                                    T.createElement(
                                        "span",
                                        {
                                            style: mM.linkText,
                                        },
                                        D7.vrd
                                    )
                                ),
                                T.createElement("div", {
                                    style: mZ,
                                    dangerouslySetInnerHTML: {
                                        __html: mf,
                                    },
                                }),
                                T.createElement("div", {
                                    style: mM.textDesc,
                                    dangerouslySetInnerHTML: {
                                        __html: mc,
                                    },
                                }),
                                T.createElement(
                                    "div",
                                    {
                                        style: mM.buttonArea,
                                    },
                                    T.createElement(mk, {
                                        type: 0,
                                        onButtonClicked: mC,
                                    }),
                                    T.createElement(mk, {
                                        type: 1,
                                        onButtonClicked: mC,
                                    })
                                ),
                                T.createElement(mB, {
                                    defaultValue: mG,
                                    onChanged: function (R0) {
                                        mG = R0;
                                    },
                                    text: mQ.t("History.HistoryVrfPopupCheckboxLabel", {
                                        days: "30",
                                    }),
                                })
                            )
                        );
                    }
                    var mW = shell.I18n;
                    var mV = {
                        container: {
                            backgroundColor: "#30303C",
                            borderRadius: "8px",
                            boxShadow: "0 0 24px 0 rgba(0,0,0,0.40), 0 24px 24px 0 rgba(0,0,0,0.40)",
                            width: "700px",
                            height: "auto",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                        },
                        textTitle1: {
                            width: "588px",
                            fontSize: "36px",
                            color: "#FAD171",
                            textAlign: "center",
                            lineHeight: "46px",
                            textShadow: "0 2px 1px rgba(0,0,0,0.4)",
                            fontWeight: "600",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        },
                        textTitle2: {
                            width: "588px",
                            fontSize: "28px",
                            textAlign: "center",
                            lineHeight: "34px",
                            textShadow: "0 2px 1px rgba(0,0,0,0.4)",
                            fontWeight: "600",
                            padding: "24px 0px 14px 0px",
                        },
                        searchBar: {
                            padding: "0px 24px",
                            width: "fit-content",
                            height: "46px",
                            backgroundColor: "rgba(255,255,255,0.1)",
                            borderRadius: "23px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            direction: "ltr",
                        },
                        lockerSize: {
                            width: "20px",
                            height: "20px",
                            opacity: 0.5,
                        },
                        lockerSpriteImage: {
                            transformOrigin: "top left",
                            transform: "scale(0.5555)",
                        },
                        linkText: {
                            fontSize: "20px",
                            color: "#FFFFFF",
                            lineHeight: "26px",
                            paddingLeft: "10px",
                        },
                        textDesc: {
                            color: "rgba(255,255,255,0.5)",
                            fontSize: "20px",
                        },
                        content: {
                            width: "508px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            textAlign: "center",
                            alignItems: "center",
                            paddingBottom: "60px",
                            marginTop: "8px",
                        },
                        buttonArea: {
                            display: "flex",
                            justifyContent: "space-between",
                            width: "346px",
                            height: "58px",
                            padding: "40px",
                        },
                        shieldPosition: {
                            height: "130px",
                            display: "flex",
                            width: "380px",
                            transform: "scale(0.5555)",
                            overflow: "visible",
                            alignItems: "center",
                            justifyContent: "center",
                            marginTop: "-42px",
                        },
                    };
                    function mY(mF) {
                        var mG = true;
                        function mC(R0) {
                            Dq(mG);
                            mF.onButtonClickedCallback(R0);
                        }
                        var ms = mW.t("History.HistoryVrfPopupTitle1");
                        var mE = DU(mW.t("History.HistoryVrfPopupTitle2"), D7.appearanceHelper.themeColor);
                        var mf = DU(mW.t("History.HistoryVrfPopupDesc1"), D7.appearanceHelper.themeColor);
                        var mc = DU(mW.t("History.HistoryVrfPopupDesc2"), D7.appearanceHelper.themeColor);
                        var mZ = x1(x1({}, mV.textDesc), {
                            paddingTop: "14px",
                        });
                        var mL = x1({}, mV.container);
                        if (shell.isRTLLanguage()) {
                            mL.direction = "rtl";
                        }
                        return T.createElement(
                            "div",
                            {
                                className: "gh-vrf-popup-anim",
                                style: mL,
                            },
                            T.createElement(mw, {
                                containerStyle: mV.shieldPosition,
                            }),
                            T.createElement(
                                "div",
                                {
                                    style: mV.content,
                                },
                                T.createElement(
                                    "div",
                                    {
                                        style: mV.textTitle1,
                                    },
                                    ms
                                ),
                                T.createElement("div", {
                                    style: mV.textTitle2,
                                    dangerouslySetInnerHTML: {
                                        __html: mE,
                                    },
                                }),
                                T.createElement(
                                    "div",
                                    {
                                        style: mV.searchBar,
                                    },
                                    T.createElement(
                                        "div",
                                        {
                                            style: mV.lockerSize,
                                        },
                                        T.createElement("div", {
                                            className: "gh_vrf_bar_sprite gh_locker",
                                            style: mV.lockerSpriteImage,
                                        })
                                    ),
                                    T.createElement(
                                        "span",
                                        {
                                            style: mV.linkText,
                                        },
                                        D7.vrd
                                    )
                                ),
                                T.createElement("div", {
                                    style: mZ,
                                    dangerouslySetInnerHTML: {
                                        __html: mf,
                                    },
                                }),
                                T.createElement("div", {
                                    style: mV.textDesc,
                                    dangerouslySetInnerHTML: {
                                        __html: mc,
                                    },
                                }),
                                T.createElement(
                                    "div",
                                    {
                                        style: mV.buttonArea,
                                    },
                                    T.createElement(mk, {
                                        type: 0,
                                        onButtonClicked: mC,
                                    }),
                                    T.createElement(mk, {
                                        type: 1,
                                        onButtonClicked: mC,
                                    })
                                ),
                                T.createElement(mB, {
                                    defaultValue: mG,
                                    onChanged: function (R0) {
                                        mG = R0;
                                    },
                                    text: mW.t("History.HistoryVrfPopupCheckboxLabel", {
                                        days: "30",
                                    }),
                                })
                            )
                        );
                    }
                    var mp = (function (mF) {
                        function mG() {
                            return (mF !== null && mF.apply(this, arguments)) || this;
                        }
                        x0(mG, mF);
                        mG.prototype.onCreate = function () {
                            D7.context.on("Game.Initialized", this.$o, this);
                        };
                        mG.prototype.ta = function () {
                            this.rootElement = document.createElement("div");
                            this.rootElement.style.display = "flex";
                            this.rootElement.style.justifyContent = "center";
                            this.rootElement.style.alignItems = "center";
                            this.rootElement.style.transform = "translateZ(0)";
                            this.rootElement.style.position = "absolute";
                            this.rootElement.style.top = "0px";
                            this.view.setUIBlockConfig(this.rootElement, {
                                style: {
                                    showAnimation: "gh_vrf_ui_block_show",
                                    hideAnimation: "gh_vrf_ui_block_hide",
                                },
                            });
                            D7.context.on("Game.InUIIdleState", this.ea, this);
                            D7.context.on("Shell.Scaled", this.ia, this);
                            D7.context.on("History.Close", this.na, this);
                        };
                        mG.prototype.$o = function (mC) {
                            var ms = this;
                            if (D7.isEnableVRF()) {
                                mC.intercept();
                                new Promise(function (mE, mf) {
                                    var mc = [
                                        {
                                            cssFile:
                                                ".gh_vrf_bar_sprite{background-image:url(gh_vrf_bar_sprite.png);background-repeat:no-repeat;background-size:81px 231px;display:inline-block;overflow:hidden}.gh_vrf_bar_sprite.gh_bar_shield_golden_frame_shine{background-position:-1px -1px;height:103px;min-height:103px;min-width:79px;width:79px}.gh_vrf_bar_sprite.gh_bar_shield_pg_shine{background-position:-1px -106px;height:86px;min-height:86px;min-width:74px;width:74px}.gh_vrf_bar_sprite.gh_locker{background-position:-1px -194px;height:36px;min-height:36px;min-width:30px;width:30px}",
                                            imageFile: "sprite/gh_vrf_bar_sprite.png",
                                            appendHeader: true,
                                        },
                                    ];
                                    if (Dd()) {
                                        mc.push({
                                            cssFile:
                                                ".gh_vrf_sprite{background-image:url(gh_vrf_sprite.png);background-repeat:no-repeat;background-size:1077px 998px;display:inline-block;overflow:hidden}.gh_vrf_sprite.gh_domain_shadow{background-position:-198px -801px;height:126px;min-height:126px;min-width:379px;width:379px}.gh_vrf_sprite.gh_domain_shinny_effect{background-position:-800px -699px;height:273px;min-height:273px;min-width:179px;width:179px}.gh_vrf_sprite.gh_magnifier{background-position:-1px -801px;height:196px;min-height:196px;min-width:195px;width:195px}.gh_vrf_sprite.gh_shield{background-position:-800px -361px;height:336px;min-height:336px;min-width:276px;width:276px}.gh_vrf_sprite.gh_shield_frame_shine{background-position:-800px -1px;height:358px;min-height:358px;min-width:267px;width:267px}.gh_vrf_sprite.gh_shine_effect{background-position:-1px -1px;height:798px;min-height:798px;min-width:797px;width:797px}",
                                            imageFile: "sprite/gh_vrf_sprite.png",
                                            appendHeader: true,
                                        });
                                    }
                                    var mZ = [
                                        IM(),
                                        Iw(mc),
                                        new Promise(function (mL, R0) {
                                            var R1 = D7.context.resource;
                                            var R2 = [
                                                "img/bar_shield_logo.png",
                                                "img/bar_shield_golden_frame.png",
                                                "img/vrf_logo.png",
                                                "img/shield_golden_frame.png",
                                            ];
                                            var R3 = R2.map(function (R4) {
                                                return IX(R1.resolveUrl(R4));
                                            });
                                            Promise.all(R3)
                                                .then(function (R4) {
                                                    R4.forEach(function (R5, R6) {
                                                        D7.setImageMaskWithBlob(R2[R6], R5);
                                                    });
                                                    mL();
                                                })
                                                .catch(function (R4) {
                                                    IO(R4);
                                                    R0(R4);
                                                });
                                        }),
                                        new Promise(function (mL) {
                                            Iy(
                                                IB(
                                                    '.gh-btn-opacity-effect{opacity:1}.gh-btn-opacity-effect:active{opacity:.8}.gh-copy-anim-default{opacity:0}.gh-copy-anim-show{-webkit-animation:gh_copy_anim_show .4s ease-out;animation:gh_copy_anim_show .4s ease-out;opacity:1}.gh-copy-anim-hide{-webkit-animation:gh_copy_anim_hide .4s ease-out;animation:gh_copy_anim_hide .4s ease-out}.gh-vrf-popup-anim{-webkit-animation-delay:1s;animation-delay:1s;-webkit-animation:gh_vrf_pop_up_anim .22s ease-out;animation:gh_vrf_pop_up_anim .22s ease-out}@-webkit-keyframes gh_vrf_rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes gh_vrf_rotate{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@-webkit-keyframes gh_vrf_reverse_rotate{0%{transform:rotate(0deg)}to{transform:rotate(-1turn)}}@keyframes gh_vrf_reverse_rotate{0%{transform:rotate(0deg)}to{transform:rotate(-1turn)}}@-webkit-keyframes gh_vrf_magnifier_rotate{0%{transform:translate(70px)}12.5%{transform:translate(50px,40px)}25%{transform:translate(25px,60px)}37.5%{transform:translateY(30px)}50%{transform:translate(-20px)}62%{transform:translate(-10px,-30px)}75%{transform:translate(25px,-60px)}82%{transform:translate(50px,-40px)}to{transform:translate(70px)}}@keyframes gh_vrf_magnifier_rotate{0%{transform:translate(70px)}12.5%{transform:translate(50px,40px)}25%{transform:translate(25px,60px)}37.5%{transform:translateY(30px)}50%{transform:translate(-20px)}62%{transform:translate(-10px,-30px)}75%{transform:translate(25px,-60px)}82%{transform:translate(50px,-40px)}to{transform:translate(70px)}}@-webkit-keyframes gh_vrf_logo_shine{0%{transform:translate(-130px,-20px)}40%{transform:translate(-130px,-20px)}80%{transform:translate(380px,-20px)}to{transform:translate(380px,-20px)}}@keyframes gh_vrf_logo_shine{0%{transform:translate(-130px,-20px)}40%{transform:translate(-130px,-20px)}80%{transform:translate(380px,-20px)}to{transform:translate(380px,-20px)}}@-webkit-keyframes gh_vrf_frame_shine{0%{transform:translate(240px,-20px)}40%{transform:translate(240px,-20px)}80%{transform:translate(-160px,-20px)}to{transform:translate(-160px,-20px)}}@keyframes gh_vrf_frame_shine{0%{transform:translate(240px,-20px)}40%{transform:translate(240px,-20px)}80%{transform:translate(-160px,-20px)}to{transform:translate(-160px,-20px)}}@-webkit-keyframes gh_vrf_bar_frame_shine{0%{transform:translate(60px,-10px)}40%{transform:translate(60px,-10px)}80%{transform:translate(-65px,-10px)}to{transform:translate(-65px,-10px)}}@keyframes gh_vrf_bar_frame_shine{0%{transform:translate(60px,-10px)}40%{transform:translate(60px,-10px)}80%{transform:translate(-65px,-10px)}to{transform:translate(-65px,-10px)}}@-webkit-keyframes gh_vrf_bar_logo_shine{0%{transform:translate(-70px,-5px)}40%{transform:translate(-70px,-5px)}80%{transform:translate(45px,-5px)}to{transform:translate(45px,-5px)}}@keyframes gh_vrf_bar_logo_shine{0%{transform:translate(-70px,-5px)}40%{transform:translate(-70px,-5px)}80%{transform:translate(45px,-5px)}to{transform:translate(45px,-5px)}}@-webkit-keyframes gh_vrf_bar_logo_scale{0%{transform:scale(.333)}20%{transform:scale(.35)}80%{transform:scale(.35)}to{transform:scale(.333)}}@keyframes gh_vrf_bar_logo_scale{0%{transform:scale(.333)}20%{transform:scale(.35)}80%{transform:scale(.35)}to{transform:scale(.333)}}@-webkit-keyframes gh_vrf_bar_logo_scale_h{0%{transform:scale(.666)}20%{transform:scale(.7)}80%{transform:scale(.7)}to{transform:scale(.666)}}@keyframes gh_vrf_bar_logo_scale_h{0%{transform:scale(.666)}20%{transform:scale(.7)}80%{transform:scale(.7)}to{transform:scale(.666)}}@-webkit-keyframes gh_vrf_ui_block_show{0%{opacity:0}to{opacity:.5}}@keyframes gh_vrf_ui_block_show{0%{opacity:0}to{opacity:.5}}@-webkit-keyframes gh_vrf_ui_block_hide{0%{opacity:.5}to{opacity:0}}@keyframes gh_vrf_ui_block_hide{0%{opacity:.5}to{opacity:0}}@-webkit-keyframes gh_copy_anim_show{0%{transform:translateY(8px)}to{transform:translateY(0)}}@keyframes gh_copy_anim_show{0%{transform:translateY(8px)}to{transform:translateY(0)}}@-webkit-keyframes gh_copy_anim_hide{0%{opacity:1}to{opacity:0}}@keyframes gh_copy_anim_hide{0%{opacity:1}to{opacity:0}}@-webkit-keyframes gh_vrf_pop_up_anim{0%{opacity:0}10%{opacity:1;transform:scale(1.05)}40%{transform:scale(1.1)}to{transform:scale(1)}}@keyframes gh_vrf_pop_up_anim{0%{opacity:0}10%{opacity:1;transform:scale(1.05)}40%{transform:scale(1.1)}to{transform:scale(1)}}@-webkit-keyframes gh_arrow_anim_up{0%{transform:scale(1)}15%{transform:scale(.8)}to{transform:scale(1)}}@keyframes gh_arrow_anim_up{0%{transform:scale(1)}15%{transform:scale(.8)}to{transform:scale(1)}}@-webkit-keyframes gh_arrow_anim_down{0%{transform:scale(1)}15%{transform:scale(.8)}to{transform:scale(1)}}@keyframes gh_arrow_anim_down{0%{transform:scale(1)}15%{transform:scale(.8)}to{transform:scale(1)}}@-webkit-keyframes gh_arrow_rotate_up{0%{transform:rotate(0deg)}to{transform:rotate(-180deg)}}@keyframes gh_arrow_rotate_up{0%{transform:rotate(0deg)}to{transform:rotate(-180deg)}}@-webkit-keyframes gh_arrow_rotate_down{0%{transform:rotate(-180deg)}to{transform:rotate(0deg)}}@keyframes gh_arrow_rotate_down{0%{transform:rotate(-180deg)}to{transform:rotate(0deg)}}.gh-arrow-default-down{transform:rotate(0deg)}.gh-arrow-default-up,.gh-arrow-rotate-up{transform:rotate(-180deg)}.gh-arrow-rotate-up{-webkit-animation:gh_arrow_rotate_up .6s ease-out;animation:gh_arrow_rotate_up .6s ease-out}.gh-arrow-rotate-down{-webkit-animation:gh_arrow_rotate_down .6s ease-out;animation:gh_arrow_rotate_down .6s ease-out;transform:rotate(0deg)}.gh-arrow-anim-up{-webkit-animation:gh_arrow_anim_up .2s ease-in-out;animation:gh_arrow_anim_up .2s ease-in-out;transform:rotate(-180deg)}.gh-arrow-anim-down{-webkit-animation:gh_arrow_anim_down .2s ease-in-out;animation:gh_arrow_anim_down .2s ease-in-out;transform:rotate(0deg)}.gh-magnifier-rotate{-webkit-animation:gh_vrf_magnifier_rotate 3s linear;animation:gh_vrf_magnifier_rotate 3s linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.gh-vrf-logo-shine{-webkit-animation:gh_vrf_logo_shine 2s linear;animation:gh_vrf_logo_shine 2s linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.gh-vrf-frame-shine{-webkit-animation:gh_vrf_frame_shine 2s linear;animation:gh_vrf_frame_shine 2s linear;-webkit-animation-delay:.8s;animation-delay:.8s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.gh-vrf-bar-logo-shine{-webkit-animation:gh_vrf_bar_logo_shine 1.5s linear;animation:gh_vrf_bar_logo_shine 1.5s linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.gh-vrf-bar-frame-shine{-webkit-animation:gh_vrf_bar_frame_shine 1.5s linear;animation:gh_vrf_bar_frame_shine 1.5s linear;-webkit-animation-delay:.5s;animation-delay:.5s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.gh-vrf-bar-logo-scale{-webkit-animation:gh_vrf_bar_logo_scale 1.5s linear;animation:gh_vrf_bar_logo_scale 1.5s linear;-webkit-animation-delay:.5s;animation-delay:.5s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.gh-vrf-bar-logo-scale-h{-webkit-animation:gh_vrf_bar_logo_scale_h 1.5s linear;animation:gh_vrf_bar_logo_scale_h 1.5s linear;-webkit-animation-delay:.5s;animation-delay:.5s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.gh-vrf-rotate{-webkit-animation:gh_vrf_rotate 20s linear;animation:gh_vrf_rotate 20s linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.gh-vrf-reverse-rotate{-webkit-animation:gh_vrf_reverse_rotate 6s linear;animation:gh_vrf_reverse_rotate 6s linear;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.gh-btn-loading{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:gh_btn_loading_bounce;animation-name:gh_btn_loading_bounce;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;background-color:#fff;height:3px;margin:1.5px;position:relative;width:3px}.gh-btn-loading:first-of-type{-webkit-animation-delay:0s;animation-delay:0s}.gh-btn-loading:nth-of-type(2){-webkit-animation-delay:75ms;animation-delay:75ms}.gh-btn-loading:nth-of-type(3){-webkit-animation-delay:.15s;animation-delay:.15s}@-webkit-keyframes gh_btn_loading_bounce{0%,50%{bottom:0}62.5%{bottom:2.5px}70%{bottom:0}87.5%{bottom:-2.5px}to{bottom:0}}@keyframes gh_btn_loading_bounce{0%,50%{bottom:0}62.5%{bottom:2.5px}70%{bottom:0}87.5%{bottom:-2.5px}to{bottom:0}}.gh-btn-loading-h{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:gh_btn_loading_bounce_h;animation-name:gh_btn_loading_bounce_h;-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out;background-color:#fff;height:6px;margin:3px;position:relative;width:6px}.gh-btn-loading-h:first-of-type{-webkit-animation-delay:0s;animation-delay:0s}.gh-btn-loading-h:nth-of-type(2){-webkit-animation-delay:75ms;animation-delay:75ms}.gh-btn-loading-h:nth-of-type(3){-webkit-animation-delay:.15s;animation-delay:.15s}@-webkit-keyframes gh_btn_loading_bounce_h{0%,50%{bottom:0}62.5%{bottom:5px}70%{bottom:0}87.5%{bottom:-5px}to{bottom:0}}@keyframes gh_btn_loading_bounce_h{0%,50%{bottom:0}62.5%{bottom:5px}70%{bottom:0}87.5%{bottom:-5px}to{bottom:0}}.gh-seperator-dots:after{content:"\\2807";font-size:28px}@-webkit-keyframes gh_placeholder_shimmer{0%{background-position:-1000px 0}to{background-position:1000px 0}}@keyframes gh_placeholder_shimmer{0%{background-position:-1000px 0}to{background-position:1000px 0}}.gh-placeholder-loading{-webkit-animation:gh_placeholder_shimmer 2s linear infinite forwards;animation:gh_placeholder_shimmer 2s linear infinite forwards;background:linear-gradient(90deg,transparent,#494955 50%,transparent 60%);background-size:1000px 78px;height:100%;width:100%}',
                                                    D7.context
                                                ),
                                                D7.context
                                            );
                                            mL(undefined);
                                        }),
                                    ];
                                    Promise.all(mZ)
                                        .then(function () {
                                            mE();
                                        })
                                        .catch(function (mL) {
                                            mf(mL);
                                        });
                                })
                                    .then(function () {
                                        ms.ta();
                                        mC.propagate();
                                    })
                                    .catch(function (mE) {
                                        throw Error(mE);
                                    });
                            }
                        };
                        mG.prototype.ia = function (mC) {
                            var ms = mC.payload;
                            D7.gsScale = ms.scale;
                            var mE = shell.environment.isMobile() || navigator.maxTouchPoints > 1;
                            if (shell.environment.getOrientationMode() === "port" || mE) {
                                this.rootElement.style.height = `${ms.height}px`;
                                this.rootElement.style.width = `${ms.width}px`;
                                this.rootElement.style.transform = "scale(1)";
                            } else {
                                this.rootElement.style.width = `${ms.width * 3}px`;
                                this.rootElement.style.height = "1080px";
                                this.rootElement.style.transform = "scale(0.33333)";
                                this.rootElement.style.transformOrigin = "top left";
                            }
                        };
                        mG.prototype.ea = function (mC) {
                            if (mC.payload) {
                                D7.context.off("Game.InUIIdleState", this.ea, this);
                                if (Dd()) {
                                    this.ra();
                                }
                            }
                        };
                        mG.prototype.na = function () {
                            D7.verificationState = 0;
                        };
                        mG.prototype.ra = function () {
                            var mC = D7.isPortrait ? mK : mY;
                            this.view.enableUIBlock(this.rootElement);
                            A.render(
                                T.createElement(
                                    mv,
                                    {
                                        context: this.context,
                                        onError: this.oa.bind(this),
                                    },
                                    T.createElement(mC, {
                                        onButtonClickedCallback: this.aa.bind(this),
                                    })
                                ),
                                this.rootElement
                            );
                            this.view.appendTo(mG, "overlay");
                            this.view.show(mG);
                        };
                        mG.prototype.aa = function (mC) {
                            this.view.hide(mG);
                            this.view.removeFromParent(mG);
                            A.unmountComponentAtNode(this.rootElement);
                            if (mC === 1) {
                                D7.verificationState = 1;
                                if (shell.getGameInfo().identifier.split(".").includes("card")) {
                                    D7.context.emit("History.ShowCardGame");
                                } else {
                                    D7.context.emit("History.ShowGame");
                                }
                            }
                        };
                        mG.prototype.oa = function () {
                            this.view.hide(mG);
                        };
                        return mG;
                    })(plugin.AbstractViewComponent);
                    R(
                        "default",
                        (function (mF) {
                            function mG() {
                                return (mF !== null && mF.apply(this, arguments)) || this;
                            }
                            x0(mG, mF);
                            mG.prototype.onCreate = function () {
                                var mC = this.context.event;
                                D7.context = this.context;
                                D7.context.on = mC.on.bind(mC);
                                D7.context.off = mC.off.bind(mC);
                                D7.context.once = mC.once.bind(mC);
                                D7.context.emit = mC.emit.bind(mC);
                                this.context.component.create(mA);
                                this.context.component.create(mp);
                                this.complete();
                            };
                            return x2([plugin.PluginMainComponent("8e5f11ad96")], mG);
                        })(plugin.AbstractPluginComponent)
                    );
                },
            };
        });
    })();
})();
