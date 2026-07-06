(function () {
    'use strict';
  
    ;
    var e = window;
    var lV = {
      platform: "web-mobile",
      groupList: ["default"],
      collisionMatrix: [[true]],
      hasResourcesBundle: true,
      hasStartSceneBundle: false,
      remoteBundles: [],
      subpackages: [],
      launchScene: "db://assets/imports/scene/main.fire",
      orientation: "",
      jsList: [],
      bundleVers: {
        resources: {
          index: "b994a",
          config: "30782"
        },
        main: {
          index: "817bc",
          config: "a846c"
        }
      }
    };
    e.DEBUG = false;
    e.PREVIEW = false;
    e.EDITOR = false;
    e.GtmId = "GTM-WV99ST2";
    e._CCSettings = lV;
    var n = "c445ebb91e.ec403.json";
    var t = "11.4.0-rc.1";
    var i = "/shared/";
    var a = n;
    var r = "984721902a/";
    var o = "e02b9bf0d2,a346494745,589a728c8d,2fd142260e,2c6e37b73c,b85c56d865,c03a2652ad";
    var l = "minMemory=1024&minDiskSpace=1024&whiteList=chrome-59%2Cchrome%20webview-59%2Cfirefox-58%2Csafari-11%2Cedge-79&minOSVersion=iOS-11%2CAndroid-5%2CMacOS-10.10%2CWindows-7";
    var s = "KnockoutRiches.Title";
    var h = "en,zh";
    var c = "#7445F5";
    var u = false;
    var v = 2;
    var d = "";
    var f = 1;
    var m = "Knockout Riches";
    var p = "1.4.0.1/6.16.0-rc.2/5.2.0-0";
    var g = 1881268;
    var Z = "com.pgsoft.slot.knockoutriches";
    var y = 16777217;
    var b = {
      e02b9bf0d2: ">=11.4.0-rc.1",
      a346494745: ">=10.4.0-rc.1",
      "589a728c8d": ">=7.4.0-rc.1",
      "2fd142260e": ">=9.4.0-rc.1",
      "2c6e37b73c": ">=6.4.0-rc.1",
      b85c56d865: ">=5.4.0-rc.1",
      c03a2652ad: ">=7.2.0-rc.1"
    };
    console.log("Game/Boot/Engine", p);
    var _ = navigator.userAgent;
    var k = 0;
    function x(W4) {
      var W6 = W4 + "";
      var W7 = (W4.stack || "") + "";
      var W8 = W6;
      if (W7) {
        if (W7.indexOf(W6) === 0) {
          W8 = W7;
        } else {
          W8 += "\n" + W7;
        }
      }
      var W9 = this.onFormat || e.onGAReceiveError;
      if (W9) {
        try {
          W8 = W9(W8);
        } catch (WW) {
          w(WW + "");
        }
      }
      return W8.replace(/https?:\/\/[^/]+([0-9A-Za-z/._-]+)\S*(:[0-9]+:[0-9]+)/g, "$1$2").replace(/https?:\/\/[^/]+/g, "");
    }
    function w(W5, W6) {
      var W8 = {
        description: W5,
        fatal: !!W6
      };
      gtag("event", "exception", W8);
    }
    if (_.indexOf(" Chrome/") > 0) {
      k = 2;
    } else if (_.indexOf(" AppleWebKit/") > 0) {
      k = 1;
    } else if (_.indexOf(" Gecko/") > 0) {
      k = 3;
    } else if (_.indexOf(" Trident/") > 0) {
      k = 4;
    } else if (_.indexOf(" Presto/") > 0) {
      k = 5;
    }
    var H;
    var S;
    var M;
    var T;
    H = w;
    S = 0;
    M = "";
    T = 0;
    function P(W4) {
      var W6 = Date.now();
      if (M !== W4 || W6 - T > 1000) {
        T = W6;
        M = W4;
        S = 0;
      } else {
        S++;
      }
      if (S === 0) {
        H(W4);
      } else if (S === 5) {
        H(W4, 1);
        var W7 = this.onFrequent || e.onGAFrequentError;
        try {
          if (W7) {
            W7();
          }
        } catch (W8) {
          H(W8 + "");
        }
      } else if (S > 5) {
        T = W6;
      }
    }
    var E = "Uncaught ";
    function V(W5, W6, W7, W8, W9) {
      if (k > 3) {
        return false;
      }
      if (!W7 || !W8 || !W9) {
        return false;
      }
      var Wr = E + x.call(V, W9);
      P.call(V, Wr);
      return false;
    }
    V.report = function (W4, W5) {
      w(E + x.call(this, W4), W5);
    };
    var R;
    var A;
    var D = "Unhandled ";
    function I(W4) {
      if (!(k > 3)) {
        var W6 = W4.reason;
        if (W6 != null) {
          var W7 = D + x.call(I, W6);
          P.call(I, W7);
        }
      }
    }
    I.report = function (W4, W5) {
      w(D + x.call(this, W4), W5);
    };
    e.dataLayer = [];
    e.gtag = function () {
      dataLayer.push(arguments);
    };
    dataLayer.push({
      event: "gtm.js",
      "gtm.start": Date.now(),
      app_name: m,
      app_version: p
    });
    R = `https://www.googletagmanager.com/gtm.js?id=${GtmId}`;
    (A = document.createElement("script")).async = true;
    A.src = R;
    document.head.appendChild(A);
    e.onerror = V;
    e.onunhandledrejection = I;
    var j = location.search;
    if (j.length > 0) {
      j = j.substring(1);
    }
    for (var G = {}, N = j.split("&"), F = 0; F < N.length; ++F) {
      var $ = N[F];
      if ($) {
        var L = $.indexOf("=");
        if (L === -1) {
          G[$] = "";
        } else {
          var C = $.substring(0, L);
          var z = $.substring(L + 1);
          G[C] = decodeURIComponent(z);
        }
      }
    }
    var B = 60000;
    var K = 5;
    function q() {
      var W5 = typeof arguments[0] == "string" ? function (W6) {
        var W8 = W6[2];
        var W9 = W6[3];
        var WW = {
          S: W6[0],
          T: W6[1],
          P: Wl,
          R: Wl
        };
        return WW;
        function Wl() {
          if (this.A != null) {
            W8(this.A);
          } else if (W9 === undefined) {
            W8(undefined, this.D);
          } else {
            W9(this.D);
          }
        }
      }(arguments) : arguments[0];
      if (W5.T === 2 && W5.I === undefined) {
        (function (W6) {
          W6.j = false;
          var W8 = {
            S: W6.S,
            T: 2,
            P: function () {
              W6.A = this.A;
              if (W6.P) {
                W6.P();
              }
            },
            R: function () {
              var W9 = {
                KqHFZ: function (WZ, Wu, Wt) {
                  return WZ(Wu, Wt);
                },
                RKKdu: function (WZ, Wu) {
                  return WZ + Wu;
                },
                CMasI: function (WZ, Wu) {
                  return WZ !== Wu;
                },
                umsho: "lBDoS",
                UhiKT: "SlLgb",
                rwkqT: function (WZ, Wu) {
                  return WZ === Wu;
                },
                yigBx: function (WZ, Wu) {
                  return WZ == Wu;
                },
                loqOk: function (WZ, Wu) {
                  return WZ || Wu;
                },
                iZzfM: function (WZ) {
                  return WZ();
                },
                oDNPG: function (WZ, Wu) {
                  return WZ + Wu;
                },
                dNULu: ".js",
                LaSxb: function (WZ, Wu, Wt, Wz) {
                  return WZ(Wu, Wt, Wz);
                },
                LIMDs: "/loader/"
              };
              var WW = this.D;
              var Wl = URL.createObjectURL(WW);
              function WZ(Wu) {
                if (W9.CMasI(W9.umsho, W9.UhiKT)) {
                  if (W9.rwkqT(Wu.filename, Wl)) {
                    W6.A = Wu.error;
                    delete O[Wl];
                  }
                } else {
                  W9.KqHFZ(W9, W9.RKKdu(WW, Wl.call(this, Wr)), WZ);
                }
              }
              e.addEventListener("error", WZ);
              O[Wl] = W6.S;
              var Wr = document.createElement("script");
              Wr.src = Wl;
              Wr.defer = true;
              Wr.onload = function () {
                e.removeEventListener("error", WZ);
                document.head.removeChild(Wr);
                URL.revokeObjectURL(Wl);
                W(W6);
              };
              document.head.appendChild(Wr);
            },
            I: W6
          };
          q(W8);
        })(W5);
      } else {
        (function (W6) {
          var W7 = {
            hfToo: function (W9, WW, Wl) {
              return W9(WW, Wl);
            },
            YISrY: "stop",
            nJOjG: function (W9, WW, Wl, Wr, WZ, Wu, Wt, Wz) {
              return W9(WW, Wl, Wr, WZ, Wu, Wt, Wz);
            },
            rEZdF: "offset",
            ovCkg: "stop-color",
            wBHMT: "white",
            GjbXM: "stop-opacity",
            Pzkrz: function (W9) {
              return W9();
            },
            Ghove: function (W9, WW) {
              return W9 < WW;
            },
            Yhrsw: function (W9, WW) {
              return W9(WW);
            },
            AmTAt: function (W9, WW) {
              return W9 > WW;
            },
            tawkd: function (W9, WW) {
              return W9 === WW;
            },
            bQLtV: function (W9, WW) {
              return W9 == WW;
            },
            QzYAw: "string",
            NiwOs: "invaliddata",
            sjlDq: "AtDde",
            gFolj: "EqBoi",
            wVlci: function (W9, WW) {
              return W9 !== WW;
            },
            fJehQ: "OtKCb",
            oURBK: "RGtOk",
            rlroO: "rViYf",
            wLmwG: function (W9, WW) {
              return W9 == WW;
            },
            dImvS: function (W9, WW) {
              return W9 === WW;
            },
            jJrpP: "xBDby",
            ZLJQV: "YjhMr",
            OZuNR: function (W9, WW) {
              return W9 >= WW;
            },
            KKPkL: function (W9, WW) {
              return W9 < WW;
            },
            awCDk: function (W9, WW) {
              return W9(WW);
            },
            kkhSa: "dnnng",
            ddPcj: "bXWaT",
            GVkyx: "onerror",
            lLTJy: function (W9, WW) {
              return W9(WW);
            },
            EiXWE: "IsZjx",
            pwWgz: "ontimeout",
            LEDfj: function (W9, WW) {
              return W9(WW);
            }
          };
          var W8 = new XMLHttpRequest();
          W8.open("GET", W6.S, true);
          try {
            if ("timeout" in W8) {
              W8.timeout = B;
            }
          } catch (W9) {}
          switch (W6.T) {
            case 1:
              W8.responseType = "json";
              break;
            case 3:
            case 2:
              W8.responseType = "blob";
          }
          W8.onload = function () {
            var WW = {
              znWbY: function (Wl) {
                return W7.Pzkrz(Wl);
              },
              hWBgp: function (Wl, Wr) {
                return W7.Ghove(Wl, Wr);
              },
              HzjfH: function (Wl, Wr) {
                return W7.Yhrsw(Wl, Wr);
              },
              sSBMY: function (Wl, Wr) {
                return W7.Ghove(Wl, Wr);
              },
              rwwnn: function (Wl, Wr) {
                return W7.AmTAt(Wl, Wr);
              },
              vhWnd: function (Wl, Wr) {
                return W7.tawkd(Wl, Wr);
              },
              kRWMq: function (Wl, Wr) {
                return W7.bQLtV(Wl, Wr);
              },
              uXJTb: W7.QzYAw,
              AvLID: function (Wl, Wr) {
                return W7.bQLtV(Wl, Wr);
              },
              eGevD: W7.NiwOs,
              caWcF: W7.sjlDq,
              OLhOp: W7.gFolj,
              veZTN: function (Wl, Wr) {
                return W7.wVlci(Wl, Wr);
              },
              ZJMve: W7.fJehQ,
              TNYcx: W7.oURBK,
              xNDhJ: W7.rlroO,
              VjZGQ: function (Wl, Wr) {
                return W7.wLmwG(Wl, Wr);
              }
            };
            if (W7.dImvS(W7.jJrpP, W7.ZLJQV)) {
              var Wl = W7.hfToo(W9, WW, W7.YISrY);
              var Wr = Wl[Wr];
              W7.nJOjG(WZ, Wl, W7.rEZdF, Wr[0], W7.ovCkg, W7.wBHMT, W7.GjbXM, Wr[1]);
            } else {
              if (W7.OZuNR(W8.status, 200) && W7.KKPkL(W8.status, 300) || W7.tawkd(0, W8.status) && W8.response) {
                (function (Wl, Wr) {
                  var WZ = {
                    OZegJ: function (Wu, Wt) {
                      return WW.vhWnd(Wu, Wt);
                    },
                    QydRn: function (Wu, Wt) {
                      return WW.kRWMq(Wu, Wt);
                    },
                    mJZiX: WW.uXJTb,
                    DcvRh: function (Wu, Wt) {
                      return WW.AvLID(Wu, Wt);
                    },
                    bnCBs: function (Wu, Wt) {
                      return WW.kRWMq(Wu, Wt);
                    },
                    oWEwc: WW.eGevD
                  };
                  if (WW.vhWnd(WW.caWcF, WW.OLhOp)) {
                    if (WZ.OZegJ(1, Wz.T) && WZ.QydRn(WZ.mJZiX, typeof WX)) {
                      try {
                        WB = Wi.parse(Wx);
                      } catch (Wu) {
                        WV.A = Wu;
                        WN = undefined;
                      }
                    }
                    if (WZ.DcvRh(null, Ws.A) && WZ.bnCBs(null, WP)) {
                      Wv.A = WZ.oWEwc;
                    } else {
                      WU.D = Wk;
                    }
                  } else {
                    if (WW.vhWnd(1, Wl.T) && WW.AvLID(WW.uXJTb, typeof Wr)) {
                      try {
                        if (WW.veZTN(WW.ZJMve, WW.ZJMve)) {
                          if (W6) {
                            WW.znWbY(W7);
                          }
                        } else {
                          Wr = JSON.parse(Wr);
                        }
                      } catch (Wu) {
                        if (WW.vhWnd(WW.TNYcx, WW.xNDhJ)) {
                          for (var Wt = W9.split("."), Wh = WW.split("."), Ws = Wl.max(Wt.length, Wh.length), WP = 0; WW.hWBgp(WP, Ws); WP++) {
                            var Wv = WW.HzjfH(Wu, Wt[WP] || 0);
                            var WU = WW.HzjfH(Wt, Wh[WP] || 0);
                            if (WW.sSBMY(Wv, WU)) {
                              return -1;
                            }
                            if (WW.rwwnn(Wv, WU)) {
                              return 1;
                            }
                          }
                          return 0;
                        } else {
                          Wl.A = Wu;
                          Wr = undefined;
                        }
                      }
                    }
                    if (WW.VjZGQ(null, Wl.A) && WW.VjZGQ(null, Wr)) {
                      Wl.A = WW.eGevD;
                    } else {
                      Wl.D = Wr;
                    }
                  }
                })(W6, W8.response);
              } else {
                W6.A = `${W8.status}: ${W8.statusText}`;
              }
              W7.awCDk(W, W6);
            }
          };
          W8.onerror = function () {
            if (W7.wVlci(W7.kkhSa, W7.ddPcj)) {
              W6.A = W7.GVkyx;
              W7.lLTJy(W, W6);
            } else {
              var Wl = W7.apply(W8, arguments);
              W9 = null;
              return Wl;
            }
          };
          W8.ontimeout = function () {
            if (W7.tawkd(W7.EiXWE, W7.EiXWE)) {
              W6.A = W7.pwWgz;
              W7.LEDfj(W, W6);
            } else {
              return W7.awCDk(requestAnimationFrame, W5);
            }
          };
          W8.send();
        })(W5);
      }
    }
    var U;
    var O = Object.create(null);
    function W(W4) {
      if (W4.A != null) {
        var W6 = W4.j === undefined ? 0 : W4.j;
        (function (W7, W8, W9, WW) {
          if (W9 instanceof Error) {
            W9 = W9.message;
          }
          var Wl = W7.split("?")[0];
          var Wr = `load resource fail|G1002|src: ${Wl}|reason: ${W9}`;
          if (WW) {
            Wr += `|retryCount: ${WW}`;
          }
          gtag("event", "error", {
            event_category: "game_shell",
            event_label: Wr
          });
        })(W4.S, 0, W4.A, W6);
        if (W6 !== false && (W4.A === "onerror" || W4.A === "ontimeout") && W6 < K) {
          W4.j = ++W6;
          W4.A = undefined;
          // TOLOOK
          setTimeout(q, (1 << W6) * 1000, W4);
        } else if (W4.P) {
          W4.P();
        }
      } else if (W4.R) {
        W4.R();
      }
    }
    (U = {})[0] = "const a=10;let b=10;";
    U[1] = "var c=()=>{};";
    U[2] = "function d(a=2){};";
    U[3] = "+function e(...c){}(...[2,3]);";
    U[4] = "var f=1,g=`c${f}d`;";
    U[5] = "var h=0b111,q=0o767;";
    U[6] = "var i='/\\u{20BB7}/u';";
    U[7] = "var j=/s*/y;";
    U[8] = "var k=1,l={k,['x'+k]:2,c(){}};";
    U[9] = "var [z,y=3]=[1];var {e,f=5}={a:1,f:5};";
    U[10] = "class test{}; class test2 extends test{};";
    U[11] = "var o=Symbol('a');";
    U[12] = "for(var t of [1]){};";
    U[13] = "function*p(){ yield;}";
    var Y = U;
    var X = [[e, "Map", "WeakMap", "Set", "WeakSet", "Promise", "Proxy", "Reflect"], [Object, "assign"], [Array.prototype, "findIndex", "find"], [String.prototype, "repeat", "startsWith", "endsWith", "includes"], [Number, "isFinite", "isNaN", "isSafeInteger", "isInteger"], [Math, "trunc", "sign", "cbrt", "log2", "log10"]];
    function J() {
      return function (W5) {
        for (var W7 = Object.keys(W5), W8 = 0; W8 < W7.length; W8++) {
          var W9 = W5[W7[W8]];
          try {
            Function(W9);
          } catch (WW) {
            return false;
          }
        }
        return true;
      }(Y) && function (W5) {
        for (var W7 = true, W8 = 0; W8 < W5.length; W8++) {
          var W9 = W5[W8];
          var WW = W9[0];
          if (WW === undefined) {
            W7 = false;
            break;
          }
          for (var Wl = 1; Wl < W9.length; Wl++) {
            if (WW[W9[Wl]] === undefined) {
              W7 = false;
              break;
            }
          }
          if (!W7) {
            break;
          }
        }
        return W7;
      }(X);
    }
    var Q = {
      "0": {
        en: "Launch Failed",
        de: "Start fehlgeschlagen",
        es: "La inicialización ha fallado",
        id: "Peluncuran Gagal",
        ja: "起動失敗",
        ko: "시작 실패",
        "pt-br": "Falha no Lançamento",
        ru: "Сбой при запуске",
        sv: "Start misslyckades",
        th: "การโหลดล้มเหลว",
        vi: "Khởi chạy không thành công",
        zh: "未能成功启动"
      },
      "1": {
        en: "Game launch failed, please try again.",
        de: "Spielstart fehlgeschlagen, bitte versuchen Sie es erneut.",
        es: "Error al iniciar el juego, inténtelo de nuevo.",
        id: "Peluncuran permainan gagal, silakan coba lagi.",
        ja: "ゲームのローンチに失敗しました。再度お試しください。",
        ko: "게임을 실행하지 못했습니다. 다시 시도하십시오.",
        "pt-br": "Falha na inicialização do jogo. Tente novamente.",
        ru: "При запуске игры возник сбой. Пожалуйста, повторите попытку позднее.",
        sv: "Spelet laddades inte. Försök igen.",
        th: "การเปิดเกมล้มเหลว กรุณาลองอีกครั้ง",
        vi: "Khởi chạy trò chơi thất bại, vui lòng thử lại.",
        zh: "启动游戏失败，请重试。"
      },
      "2": {
        en: "Sorry, this game cannot be loaded as the current resources are out of date. Please try again later.",
        de: "Dieses Spiel kann leider nicht geladen werden, da die  Ressourcen nicht mehr aktuell sind. Bitte versuchen Sie es später erneut.",
        es: "Lo sentimos, el juego no puede cargarse debido a que los recursos actuales están obsoletos. Inténtalo de nuevo más tarde.",
        id: "Maaf, permainan ini tidak bisa dimuat karena sumber daya yang ada sudah kedaluwarsa. Silakan coba lagi nanti.",
        ja: "申し訳ありません。現在のリソースが古いため、このゲームを読み込むことはできません。後でもう一度お試しください。",
        ko: "죄송합니다. 현재 리소스가 최신이 아니기 때문에 이 게임을 불러올 수 없습니다. 나중에 다시 시도하세요.",
        "pt-br": "Desculpe, este jogo não pode ser carregado porque os recursos atuais estão desatualizados. Tente novamente mais tarde.",
        ru: "К сожалению, данную игру нельзя загрузить из-за устаревших ресурсов. Повторите попытку позже.",
        sv: "Det här spelet kan inte laddas eftersom de nuvarande resurserna är inaktuella. Försök igen senare.",
        th: "ขออภัย ไม่สามารถโหลดเกมนี้ได้เนื่องจากข้อมูลปัจจุบันไม่ใช่ข้อมูลล่าสุด กรุณาลองใหม่อีกครั้งในภายหลัง",
        vi: "Rất tiếc, không thể tải trò chơi này vì các tài nguyên hiện tại đã quá cũ. Vui lòng thử lại sau.",
        zh: "对不起，由于当前资源不是最新版本，因此游戏无法加载，请稍后再试。"
      },
      "3": {
        en: "Reload",
        de: "Neu laden",
        es: "Recargar",
        id: "Muat ulang",
        ja: "リロード",
        ko: "리로드",
        "pt-br": "Recarregar",
        ru: "Перезагрузить",
        sv: "Ladda om",
        th: "รีโหลด",
        vi: "Tải lại",
        zh: "重新加载"
      },
      "4": {
        en: "DIFFERENCE MAKES THE DIFFERENCE",
        de: "DER UNTERSCHIED MACHT DEN UNTERSCHIED",
        es: "LA DIFERENCIA QUE MARCA LA DIFERENCIA",
        id: "PERBEDAAN YANG MEMBUAT PERBEDAAN",
        ja: "違 い が   違 い を 生 み だ す",
        ko: "차 이 를   만 드 는   차 이",
        "pt-br": "SER DIFERENTE FAZ A DIFERENÇA",
        ru: "ИНДИВИДУАЛЬНОСТЬ ИМЕЕТ ЗНАЧЕНИЕ",
        sv: "SKILLNADEN SOM GÖR SKILLNAD",
        th: "ความแตกต่าง ที่เป็นตัวตัดสิน",
        vi: "SỰ KHÁC BIỆT TẠO NÊN SỰ KHÁC BIỆT",
        zh: "不  凡   成   就   非   凡"
      },
      "5": {
        en: "Warning: Insecure Connection",
        de: "Achtung: Unsichere Verbindung",
        es: "Aviso: La Conexión de Red no es Segura",
        id: "Peringatan: Koneksi Tidak Aman",
        ja: "注意：不安定なネットワーク接続",
        ko: "경고: 안전하지 않은 연결",
        "pt-br": "Aviso: Conexão Insegura",
        ru: "Внимание: небезопасное подключение к сети",
        sv: "Varning: Ostabil anslutning",
        th: "คำเตือน: การเชื่อมต่อไม่ปลอดภัย",
        vi: "Cảnh báo: Kết nối không an toàn",
        zh: "警告：连接不安全"
      },
      "6": {
        en: "PG content can only be accessed via a secure (HTTPS) connection. Please visit us through a secure site or contact the site's support team for assistance. Thank you.",
        de: "Der PG-Inhalt kann nur über eine sichere (HTTPS) Verbindung aufgerufen werden. Bitte besuchen Sie uns über eine sichere Website oder wenden Sie sich an den Kundenservice der Website, um Unterstützung zu erhalten. Vielen Dank.",
        es: "Solo es posible acceder al contenido de PG a través de una conexión segura (HTTPS). Visítenos a través de un sitio web seguro o póngase en contacto con el equipo de asistencia del sitio para obtener ayuda. Gracias.",
        id: "Konten PG hanya dapat diakses melalui koneksi aman (HTTPS). Harap kunjungi kami melalui situs aman atau hubungi tim dukungan situs untuk bantuan. Terima kasih.",
        ja: "PGコンテンツには、安全な (HTTPS) 接続経由でのみアクセスできます。安全なサイトからアクセスするか、サイトのサポートチームにご連絡ください。ご利用いただきありがとうございます。",
        ko: "PG 콘텐츠에는 안전한 (HTTPS) 연결을 통해서만 접속할 수 있습니다. 안전한 사이트를 통해 방문하시고 지원이 필요하시면 사이트 지원팀에 문의하세요. 감사합니다.",
        "pt-br": "O conteúdo do PG só pode ser acessado por meio de uma conexão segura (HTTPS). Visite-nos por meio de um site seguro ou entre em contato com a equipe de suporte do site para solicitar assistência. Obrigado.",
        ru: "Контент компании PG можно просматривать только через безопасное (HTTPS) подключение. Просим перейти на другой наш безопасный сайт или связаться со службой поддержки этого сайта для решения проблемы. Спасибо.",
        sv: "Innehåll från PG kan endast kommas åt via en säker (HTTPS) anslutning. Besök oss genom en säker webbplats eller kontakta webbplatsens support-team för hjälp. Tack.",
        th: "สามารถเข้าถึงเนื้อหา PG ได้ผ่านการเชื่อมต่อ (HTTPS) ที่ปลอดภัยเท่านั้น กรุณาเข้าชมผ่านเว็บไซต์ที่ปลอดภัยหรือติดต่อทีมงานสนับสนุนของเว็บไซต์เพื่อขอความช่วยเหลือ ขอขอบคุณ",
        vi: "Chỉ có thể truy cập nội dung PG thông qua kết nối bảo mật (HTTPS). Vui lòng truy cập chúng tôi thông qua một trang web bảo mật hoặc liên hệ với đội ngũ hỗ trợ của trang web để được trợ giúp. Xin cảm ơn.",
        zh: "PG内容仅能通过安全的HTTPS连接访问。请通过安全的网站访问我们，或联系网站支持团队寻求协助，谢谢。"
      }
    };
    var ee = G.language || G.lang || G.l || navigator.language;
    function ne(W5) {
      var WW = Q[W5];
      if (!WW) {
        return `${W5}`;
      }
      if (WW[ee]) {
        return WW[ee];
      }
      var Wl = ee.split("-")[0];
      if (WW[Wl]) {
        return WW[Wl];
      } else {
        return WW.en;
      }
    }
    var te;
    var ie = "__sv";
    var ae = G[ie] !== undefined && G[ie] !== "";
    var re = false;
    var oe = [];
    function le() {
      for (var W5 = function () {
        var W7;
        var W8;
        var W9 = oe.pop();
        if (te === null) {
          q.apply(undefined, W9);
        } else {
          W7 = W9[0];
          W8 = function (WW) {
            if (WW) {
              W9[0] = WW;
            }
            q.apply(undefined, W9);
          };
          te.getSignedUrl(W7).then(W8, function () {
            return W8("");
          });
        }
      }; oe.length;) {
        W5();
      }
    }
    var se = ae ? function () {
      oe.push(arguments);
      if (te === undefined) {
        (function () {
          if (!re) {
            re = true;
            var W5 = G[ie].substring(2, 4) + ".js";
            q(location.origin + "/loader/" + W5, 2, function (W6) {
              if (W6) {
                te = null;
              }
              if (!((te = sign || null) == null)) {
                te.setQuery(G[ie]);
              }
              le();
            });
          }
        })();
      } else {
        // TOLOOK
        setTimeout(le, 0);
      }
    } : q;
    function he(W4) {
      var W6 = parseInt(W4);
      if (isNaN(W6)) {
        return W4;
      } else {
        return W6;
      }
    }
    function ce(W4, W5) {
      for (var W7 = W4.split("."), W8 = W5.split("."), W9 = Math.max(W7.length, W8.length), WW = 0; WW < W9; WW++) {
        var Wl = he(W7[WW] || 0);
        var Wr = he(W8[WW] || 0);
        if (Wl < Wr) {
          return -1;
        }
        if (Wl > Wr) {
          return 1;
        }
      }
      return 0;
    }
    function ue(W5, W6, W7) {
      if (W7 === undefined) {
        W7 = 1;
      }
      var WW = W7 === 0 ? document.createElement(W6) : document.createElementNS("http://www.w3.org/2000/svg", W6);
      W5.appendChild(WW);
      return WW;
    }
    function ve() {
      for (var W7 = [], W8 = 0; W8 < arguments.length; W8++) {
        W7[W8] = arguments[W8];
      }
      for (var W9 = W7[0], WW = 1; WW < W7.length; WW += 2) {
        W9.style[W7[WW]] = W7[WW + 1];
      }
      return W9;
    }
    function de() {
      for (var W7 = [], W8 = 0; W8 < arguments.length; W8++) {
        W7[W8] = arguments[W8];
      }
      for (var W9 = W7[0], WW = 1; WW < W7.length; WW += 2) {
        W9.setAttribute(W7[WW], W7[WW + 1]);
      }
      return W9;
    }
    function fe(W4) {
      return requestAnimationFrame(W4);
    }
    function me(W5, W6) {
      if (W5 / W6 > 0.5625) {
        return 1920 / W6;
      } else {
        return 1080 / W5;
      }
    }
    function pe(W4, W5, W6, W7, W8) {
      var WW;
      var Wl = W8 === 0 ? "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"112\" height=\"112\"><path d=\"M90.6 9.8h9.8V0h-9.8Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#ff6e00;fill-opacity:1\"/><path d=\"M0 21.1h9.8v-9.8H0Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#6414e6;fill-opacity:1\"/><path d=\"M11.3 111.6h9.8v-9.8h-9.8Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#19bee6;fill-opacity:1\"/><path d=\"M68 89h9.7v-9.8H68Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#e619dc;fill-opacity:1\"/><path d=\"M79.2 9.8H89V0h-9.8ZM68 9.8h9.8V0H68Zm-11.3 0h9.8V0h-9.8Zm-11.3 0H55V0h-9.8ZM34 9.8h9.8V0H34Zm-11.4 0h9.8V0h-9.8Zm-11.3 0h9.8V0h-9.8Zm79.3 11.3h9.8v-9.8h-9.8Zm-11.4 0H89v-9.8h-9.8Zm-11.3 0h9.8v-9.8H68Zm-11.3 0h9.8v-9.8h-9.8Zm-11.3 0H55v-9.8h-9.8Zm-11.3 0h9.8v-9.8H34Zm-11.4 0h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8ZM102 32.4h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8Zm-11.4 0H89v-9.8h-9.8Zm-67.9 0h9.8v-9.8h-9.8ZM0 32.4h9.8v-9.8H0Zm101.9 11.3h9.8V34h-9.8Zm-11.3 0h9.8V34h-9.8Zm-79.3 0h9.8V34h-9.8ZM0 43.7h9.8V34H0Zm101.9 11.4h9.8v-9.9h-9.8Zm-11.3 0h9.8v-9.9h-9.8Zm-79.3 0h9.8v-9.9h-9.8ZM0 55h9.8v-9.8H0Zm101.9 11.3h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8Zm-11.4 0H89v-9.8h-9.8Zm-67.9 0h9.8v-9.8h-9.8ZM0 66.4h9.8v-9.8H0Zm90.6 11.3h9.8v-9.8h-9.8Zm-11.4 0H89v-9.8h-9.8Zm-11.3 0h9.8v-9.8H68Zm-11.3 0h9.8v-9.8h-9.8Zm-11.3 0H55v-9.8h-9.8Zm-11.3 0h9.8v-9.8H34Zm-11.4 0h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8ZM0 77.7h9.8v-9.8H0ZM56.6 89h9.8v-9.8h-9.8Zm-11.3 0H55v-9.8h-9.8ZM34 89h9.8v-9.8H34Zm-11.4 0h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8ZM0 89h9.8v-9.8H0Zm11.3 11.3h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8H0Zm0 11.3h9.8v-9.8H0Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#fff;fill-opacity:1\"/></svg>" : "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"113\" height=\"112\"><path d=\"M.3 32.4h9.8v-9.8H.3Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#e61973;fill-opacity:1\"/><path d=\"M22.8 9.8h9.7V0h-9.7Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#ffb919;fill-opacity:1\"/><path d=\"M11.6 100.3h9.7v-9.8h-9.7Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#1987e6;fill-opacity:1\"/><path d=\"M79 111.6h9.7v-9.8h-9.8Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#ff4b00;fill-opacity:1\"/><path d=\"M101.4 55h9.7v-9.7h-9.7Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#14e691;fill-opacity:1\"/><path d=\"M101.4 89h9.7v-9.8h-9.7Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#ff1928;fill-opacity:1\"/><path d=\"M67.7 9.8h9.7V0h-9.7Zm-11.2 0h9.7V0h-9.7Zm-11.3 0H55V0h-9.8ZM34 9.8h9.8V0H34Zm33.7 11.3h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm-11.3 0H55v-9.8h-9.8Zm-11.2 0h9.8v-9.8H34Zm56.2 0h9.7v-9.8h-9.7Zm-11.3 0h9.8v-9.8h-9.8Zm-56.1 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm78.6 11.3h9.7v-9.8h-9.7Zm-11.3 0h9.8v-9.8h-9.8Zm-56.1 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm0 11.3h9.7V34h-9.7Zm-11.3 0h9.8V34H.3Zm11.3 11.4h9.7v-9.9h-9.7Zm78.6 0h9.7v-9.9h-9.7Zm-11.3 0h9.8v-9.9h-9.8Zm-11.2 0h9.7v-9.9h-9.7Zm-11.2 0h9.7v-9.9h-9.7ZM.3 55h9.8v-9.9H.3ZM79 66.4h9.8v-9.8h-9.8Zm-11.2 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm-45 0h9.8v-9.8h-9.7Zm89.9 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm-89.9 0h9.8v-9.8H.3Zm101 11.3h9.8v-9.8h-9.7Zm-89.7 0h9.7v-9.8h-9.7Zm78.6 0h9.7v-9.8h-9.7Zm-89.9 0h9.8v-9.8H.3ZM90.2 89h9.7v-9.8h-9.7ZM.3 89h9.8v-9.8H.3ZM79 89h9.8v-9.8h-9.8Zm-56.1 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm78.6 11.3h9.7v-9.8h-9.7Zm-11.3 0h9.8v-9.8h-9.8Zm-11.2 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm-11.3 0H55v-9.8h-9.8Zm-11.2 0h9.8v-9.8H34Zm-11.2 0h9.7v-9.8h-9.7Zm45 11.3h9.6v-9.8h-9.7Zm-11.3 0h9.7v-9.8h-9.7Zm-11.3 0H55v-9.8h-9.8Zm-11.2 0h9.8v-9.8H34Zm-11.2 0h9.7v-9.8h-9.7Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#fff;fill-opacity:1\"/></svg>";
      var Wr = ue(W4, "g");
      de(Wr, "id", `digit-${W7}`);
      ve(Wr, "filter", `url(#motionFilter-${W7})`);
      for (var WZ = 0; WZ < 5; WZ++) {
        var Wu = ue(Wr, "g");
        ve(Wu, "transform", `translate(0px, ${-WZ * (W5 + W6 * 2)}px)`);
        WW = Wl;
        Wu.innerHTML = WW;
      }
      return Wr;
    }
    function ge(W4, W5) {
      var W7 = ue(W4, "filter");
      de(W7, "id", `motionFilter-${W5}`, "width", "300%", "x", "-100%");
      var W8 = ue(W7, "feGaussianBlur");
      de(W7, "class", "blurValues", "in", "SourceGraphic", "stdDeviation", "0 0");
      return W8;
    }
    function Ze(W4, W5) {
      var W6 = {
        WgLCA: function (WE, WC) {
          return WE === WC;
        },
        EGHHE: "tUZwl",
        YuPAk: "novAa",
        EHKqG: function (WE, WC) {
          return WE < WC;
        },
        oOQqg: function (WE, WC) {
          return WE < WC;
        },
        xvefV: function (WE, WC) {
          return WE !== WC;
        },
        yaoDO: "xHZTj",
        SjZvI: "wDSyG",
        yNQhR: function (WE, WC, Wh) {
          return WE(WC, Wh);
        },
        ZWAki: "stop",
        vwMQW: function (WE, WC, Wh, Ws, WP, Wv, WU, Wk) {
          return WE(WC, Wh, Ws, WP, Wv, WU, Wk);
        },
        YaZoM: "offset",
        ZfNOG: "stop-color",
        GhkZu: "white",
        RvPVv: "stop-opacity",
        BiHdC: function (WE, WC) {
          return WE === WC;
        },
        YQOUp: function (WE) {
          return WE();
        },
        zINxj: function (WE, WC, Wh, Ws) {
          return WE(WC, Wh, Ws);
        },
        Fgdfv: "opacity",
        dmSCn: "WocQP",
        JDIka: "tGMAx",
        Igird: "linearGradient",
        twKjz: function (WE, WC, Wh, Ws, WP, Wv, WU, Wk, WB, Wi, Wx, WL) {
          return WE(WC, Wh, Ws, WP, Wv, WU, Wk, WB, Wi, Wx, WL);
        },
        StgVB: "gradient-",
        JnzqM: "100%",
        jgzpn: function (WE, WC) {
          return WE > WC;
        },
        eHIMG: function (WE, WC) {
          return WE / WC;
        },
        yJGPi: function (WE, WC) {
          return WE / WC;
        },
        hBnMj: "RGrEL",
        UrsaA: "yydgX",
        otnNx: "mask",
        tRHtk: function (WE, WC, Wh, Ws) {
          return WE(WC, Wh, Ws);
        },
        CjeCm: "mask-",
        pOApY: "rect",
        RVJBY: "width",
        YNHhS: "height",
        khCpF: "fill",
        wVNAd: "url(#gradient-",
        wgTEr: function (WE, WC) {
          return WE(WC);
        },
        OFvYd: function (WE, WC) {
          return WE > WC;
        },
        oCDQn: "YBeiR",
        DEgST: function (WE, WC, Wh, Ws) {
          return WE(WC, Wh, Ws);
        },
        bQJWT: "pre",
        uSQYE: "font",
        WbRhR: "20px Roboto, sans-serif",
        aRmqx: "color",
        twGPj: "#ccc",
        OKtex: "text-align",
        HIbLc: "center",
        Lymls: "transition",
        nPpOQ: "opacity 1.2s ease-in-out",
        wdYTt: "aLBvt",
        BqCwm: "onerror",
        Oyhem: function (WE, WC) {
          return WE === WC;
        },
        hePAA: "cHpuT",
        QYlqB: "jlyvY",
        xuxXy: function (WE, WC, Wh, Ws, WP, Wv) {
          return WE(WC, Wh, Ws, WP, Wv);
        },
        qwytH: function (WE, WC, Wh) {
          return WE(WC, Wh);
        },
        JNhRP: function (WE, WC) {
          return WE + WC;
        },
        HVlOM: function (WE, WC) {
          return WE * WC;
        },
        OnIsA: "QSncI",
        kjXHp: "OaHQg",
        rwNwj: function (WE, WC) {
          return WE !== WC;
        },
        FBRgl: "zLlSL",
        hmdPy: "vPYrr",
        Ifnwd: "GzZUH",
        RnXHa: function (WE, WC) {
          return WE - WC;
        },
        ruZZB: function (WE, WC) {
          return WE <= WC;
        },
        BsfSN: function (WE, WC) {
          return WE * WC;
        },
        jgXAP: function (WE, WC) {
          return WE * WC;
        },
        iOjCK: function (WE, WC) {
          return WE * WC;
        },
        ShNPR: function (WE, WC, Wh) {
          return WE(WC, Wh);
        },
        UBbGr: function (WE, WC) {
          return WE !== WC;
        },
        ajhix: function (WE, WC) {
          return WE && WC;
        },
        vJWeN: function (WE, WC) {
          return WE || WC;
        },
        mYXAL: function (WE, WC) {
          return WE === WC;
        },
        YxSTI: "yTXde",
        azVpN: "BfFla",
        CKfpH: function (WE, WC) {
          return WE + WC;
        },
        tieXw: function (WE, WC) {
          return WE % WC;
        },
        cFHvD: function (WE, WC, Wh, Ws) {
          return WE(WC, Wh, Ws);
        },
        FrKaL: "transform",
        xSDWh: "translate(",
        NewNY: function (WE, WC) {
          return WE / WC;
        },
        EdDCb: function (WE, WC) {
          return WE - WC;
        },
        cKrlj: "stdDeviation",
        WWYgo: "zWTfi",
        aJIYz: function (WE, WC) {
          return WE * WC;
        },
        ggzvR: function (WE, WC) {
          return WE === WC;
        },
        hCuLT: "eZXhs",
        JVRkp: "kXPpM",
        JujVv: function (WE, WC) {
          return WE === WC;
        },
        zJfRT: function (WE) {
          return WE();
        },
        spBTE: function (WE, WC) {
          return WE !== WC;
        },
        TQJpP: "DlmEd",
        JzkjU: "MvBWk",
        cEdzR: function (WE, WC, Wh, Ws) {
          return WE(WC, Wh, Ws);
        },
        skrPV: "viewBox",
        FFlpM: "0 0 ",
        boHUn: "overflow",
        dSCht: "hidden",
        gmWdF: function (WE, WC) {
          return WE(WC);
        },
        GBOKK: function (WE, WC) {
          return WE !== WC;
        },
        ttVxi: "ltnzp",
        RSjwl: function (WE, WC) {
          return WE < WC;
        },
        vMSHY: function (WE, WC) {
          return WE(WC);
        },
        XjGkE: function (WE, WC) {
          return WE !== WC;
        },
        uIdCO: "LsvIE",
        YgAwQ: function (WE, WC, Wh) {
          return WE(WC, Wh);
        },
        jjMjV: function (WE, WC, Wh, Ws) {
          return WE(WC, Wh, Ws);
        },
        HDpog: function (WE, WC, Wh, Ws, WP, Wv, WU, Wk, WB, Wi, Wx, WL) {
          return WE(WC, Wh, Ws, WP, Wv, WU, Wk, WB, Wi, Wx, WL);
        },
        XnwaU: function (WE, WC, Wh) {
          return WE(WC, Wh);
        },
        IKVcg: function (WE, WC) {
          return WE === WC;
        },
        cydfP: "YKfIS",
        YjPWT: "tMulv",
        NNuQH: function (WE, WC) {
          return WE === WC;
        },
        mOLlq: "qXBTt",
        iRTPR: "CRIdU",
        YijgM: function (WE, WC) {
          return WE(WC);
        },
        TzeiI: "div",
        VCSDV: "block-page",
        JjGQW: function (WE, WC) {
          return WE + WC;
        },
        djRlm: function (WE, WC) {
          return WE !== WC;
        },
        nKVvF: "Jeipu",
        SrSpF: function (WE, WC) {
          return WE(WC);
        },
        ZvJVy: "kaqJD",
        vrItc: "belyC",
        wSZLb: "HAIxc",
        YJgGH: function (WE, WC) {
          return WE == WC;
        },
        ksQYn: function (WE, WC) {
          return WE || WC;
        },
        HRLhy: function (WE) {
          return WE();
        },
        ojKsM: ".js",
        PXbfK: "/loader/",
        eFcHO: "asvur",
        BNKNM: "mBKAb",
        IqXox: function (WE, WC) {
          return WE(WC);
        },
        zUmRY: function (WE, WC) {
          return WE(WC);
        },
        wcgSI: "fnskA",
        bnrsP: function (WE, WC) {
          return WE === WC;
        },
        LAIUc: function (WE, WC) {
          return WE !== WC;
        },
        RyDAE: function (WE, WC) {
          return WE < WC;
        },
        CIAwo: function (WE, WC, Wh) {
          return WE(WC, Wh);
        },
        PdpwQ: function (WE, WC, Wh, Ws, WP, Wv, WU, Wk) {
          return WE(WC, Wh, Ws, WP, Wv, WU, Wk);
        },
        wLGCW: "iRalu",
        Cdbjd: function (WE, WC) {
          return WE === WC;
        },
        HzCfS: function (WE, WC) {
          return WE < WC;
        },
        hIMtI: function (WE, WC) {
          return WE < WC;
        },
        xpDIh: function (WE, WC) {
          return WE + WC;
        },
        fXgVI: "GbCyK",
        vvvPi: function (WE, WC) {
          return WE !== WC;
        },
        uAGDG: function (WE, WC) {
          return WE === WC;
        },
        qufVt: function (WE, WC, Wh, Ws, WP, Wv, WU, Wk, WB, Wi) {
          return WE(WC, Wh, Ws, WP, Wv, WU, Wk, WB, Wi);
        },
        WBCsL: function (WE, WC, Wh, Ws) {
          return WE(WC, Wh, Ws);
        },
        fygIp: "display",
        HzfeB: "flex",
        SFCxD: "flex-direction",
        gXzRl: "column",
        yNhLN: "align-items",
        xrwdA: "justify-content",
        qljPh: "svg",
        KoJbv: "url(#mask-",
        pwCPQ: function (WE, WC, Wh) {
          return WE(WC, Wh);
        },
        yNlPY: "defs",
        qkrtf: function (WE, WC) {
          return WE(WC);
        },
        nynjb: function (WE, WC) {
          return WE * WC;
        }
      };
      var W7;
      var W8;
      var W9;
      var WW = 0;
      var Wl = [];
      var Wr = undefined;
      var WZ = undefined;
      W6.qufVt(ve, W7 = W6.WBCsL(ue, W4, W6.TzeiI, 0), W6.fygIp, W6.HzfeB, W6.SFCxD, W6.gXzRl, W6.yNhLN, W6.HIbLc, W6.xrwdA, W6.HIbLc);
      var Wu = W6.CKfpH(Date.now(), "");
      var Wt = W6.qwytH(ue, W7, W6.qljPh);
      var Wz = W9 = W6.CIAwo(ue, Wt, W6.qljPh);
      W6.cEdzR(de, W9, W6.otnNx, W6.KoJbv.concat(Wu, ")"));
      var WX = W6.pwCPQ(ue, Wt, W6.yNlPY);
      (function (WE, WC) {
        var Wh = {
          hFpXM: function (WP, Wv) {
            return W6.BiHdC(WP, Wv);
          },
          SNOkx: function (WP) {
            return W6.YQOUp(WP);
          },
          uaykt: function (WP, Wv) {
            return W6.WgLCA(WP, Wv);
          },
          ObYLQ: function (WP, Wv, WU, Wk) {
            return W6.zINxj(WP, Wv, WU, Wk);
          },
          qLzQg: W6.Fgdfv,
          oLLJX: function (WP, Wv, WU) {
            return W6.yNQhR(WP, Wv, WU);
          }
        };
        if (W6.BiHdC(W6.dmSCn, W6.JDIka)) {
          Wh.ObYLQ(WD, Wj, Wh.qLzQg, "0");
          Wh.oLLJX(WE, function () {
            var Wf;
            var Wg;
            var WT;
            if (Wh.hFpXM(1, Wa)) {
              WV.F();
            }
            Wh.SNOkx(WN);
            if (!(Wh.hFpXM(null, Wf = WY.parentNode) || Wh.hFpXM(undefined, Wf))) {
              Wf.removeChild(WJ);
            }
            if (!(Wh.uaykt(null, Wg = WF.parentNode) || Wh.hFpXM(undefined, Wg))) {
              Wg.removeChild(Wn);
            }
            if (!(Wh.uaykt(null, WT = WI.parentNode) || Wh.uaykt(undefined, WT))) {
              WT.removeChild(We);
            }
            if (Wm) {
              Wh.SNOkx(Wp);
            }
          }, 350);
        } else {
          var Ws = W6.yNQhR(ue, WE, W6.Igird);
          W6.twKjz(de, Ws, "id", W6.StgVB.concat(WC), "x1", "0%", "y1", "0%", "x2", "0%", "y2", W6.JnzqM);
          (function () {
            if (W6.WgLCA(W6.EGHHE, W6.YuPAk)) {
              return 152;
            } else {
              for (var WP = [], Wv = 0; W6.EHKqG(Wv, arguments.length); Wv++) {
                WP[Wv] = arguments[Wv];
              }
              for (var WU = 0; W6.oOQqg(WU, WP.length); WU++) {
                if (W6.xvefV(W6.yaoDO, W6.SjZvI)) {
                  var Wk = W6.yNQhR(ue, Ws, W6.ZWAki);
                  var WB = WP[WU];
                  W6.vwMQW(de, Wk, W6.YaZoM, WB[0], W6.ZfNOG, W6.GhkZu, W6.RvPVv, WB[1]);
                } else {
                  W7.A = W8;
                  W9 = undefined;
                }
              }
            }
          })([0, 0], [0.2, 1], [0.8, 1], [1, 0]);
        }
      })(WX, Wu);
      (function (WE, WC) {
        if (W6.WgLCA(W6.hBnMj, W6.UrsaA)) {
          if (W6.jgzpn(W6.eHIMG(W8, W9), 0.5625)) {
            return W6.eHIMG(1920, WW);
          } else {
            return W6.yJGPi(1080, Wl);
          }
        } else {
          var Wh = W6.yNQhR(ue, WE, W6.otnNx);
          W6.tRHtk(de, Wh, "id", W6.CjeCm.concat(WC));
          W6.twKjz(de, W6.yNQhR(ue, Wh, W6.pOApY), "x", 0, "y", 0, W6.RVJBY, W6.JnzqM, W6.YNHhS, W6.JnzqM, W6.khCpF, W6.wVNAd.concat(WC, ")"));
        }
      })(WX, Wu);
      W8 = function (WE, WC) {
        var Wh = {
          XQtQV: function (WU, Wk) {
            return W6.wgTEr(WU, Wk);
          },
          vqLUr: function (WU, Wk) {
            return W6.oOQqg(WU, Wk);
          },
          EygGH: function (WU, Wk) {
            return W6.OFvYd(WU, Wk);
          }
        };
        if (W6.BiHdC(W6.oCDQn, W6.oCDQn)) {
          var Ws;
          var WP;
          Ws = WC;
          (WP = W6.DEgST(ue, WE, W6.bQJWT, 0)).textContent = Ws;
          var Wv = WP;
          W6.twKjz(ve, Wv, W6.uSQYE, W6.WbRhR, W6.aRmqx, W6.twGPj, W6.Fgdfv, "0", W6.OKtex, W6.HIbLc, W6.Lymls, W6.nPpOQ);
          return Wv;
        } else {
          var WU = Wh.XQtQV(WW, Wl[Wr] || 0);
          var Wk = Wh.XQtQV(WZ, Wu[Wt] || 0);
          if (Wh.vqLUr(WU, Wk)) {
            return -1;
          }
          if (Wh.EygGH(WU, Wk)) {
            return 1;
          }
        }
      }(W7, W5);
      W6.qkrtf(fe, function () {
        if (W6.WgLCA(W6.wdYTt, W6.wdYTt)) {
          W6.DEgST(ve, W8, W6.Fgdfv, "1");
        } else {
          if (W6.WgLCA(undefined, Wl)) {
            Wr = 1;
          }
          WZ.handleError(W6.wgTEr(Wu, 0), W6.wgTEr(Wt, Wz), [{
            label: W6.wgTEr(WX, 3),
            onclick: function () {
              location.reload();
            }
          }]);
        }
      });
      var WD = ["1", "1"].map(function (WE, WC) {
        var Wh = {
          jgcum: W6.BqCwm,
          DMOLJ: function (WP, Wv) {
            return W6.wgTEr(WP, Wv);
          }
        };
        if (W6.Oyhem(W6.hePAA, W6.QYlqB)) {
          W7.A = Wh.jgcum;
          Wh.DMOLJ(W8, W9);
        } else {
          var Ws = `${WC}-${Wu}`;
          return {
            i: W6.xuxXy(pe, Wz, 112, 20, Ws, WC),
            t: W6.qwytH(ge, WX, Ws),
            o: +WE,
            h: 0,
            l: {
              x: W6.JNhRP(W6.HVlOM(137, WC), 12.5),
              y: 20
            }
          };
        }
      });
      function Wj() {
        var WE = {
          AlHHy: function (WC, Wh, Ws) {
            return W6.qwytH(WC, Wh, Ws);
          },
          gYWjZ: function (WC) {
            return W6.YQOUp(WC);
          },
          hJjkO: function (WC, Wh) {
            return W6.wgTEr(WC, Wh);
          },
          umYtS: function (WC, Wh) {
            return W6.JNhRP(WC, Wh);
          },
          NAbsZ: function (WC, Wh) {
            return W6.BiHdC(WC, Wh);
          },
          WEzUd: W6.OnIsA,
          SCZBt: W6.kjXHp,
          lNUdM: function (WC, Wh) {
            return W6.rwNwj(WC, Wh);
          },
          YKSJn: W6.FBRgl,
          ZHQGk: function (WC, Wh) {
            return W6.WgLCA(WC, Wh);
          },
          IQBUp: W6.hmdPy,
          DrvxL: W6.Ifnwd,
          VmWcD: function (WC, Wh) {
            return W6.yJGPi(WC, Wh);
          },
          hwWww: function (WC, Wh) {
            return W6.RnXHa(WC, Wh);
          },
          BTnlt: function (WC, Wh) {
            return W6.HVlOM(WC, Wh);
          },
          hVwbG: function (WC, Wh) {
            return W6.ruZZB(WC, Wh);
          },
          bRHpb: function (WC, Wh) {
            return W6.BsfSN(WC, Wh);
          },
          OFFZf: function (WC, Wh) {
            return W6.jgXAP(WC, Wh);
          },
          pRsGl: function (WC, Wh) {
            return W6.iOjCK(WC, Wh);
          },
          IIQhH: function (WC, Wh, Ws) {
            return W6.ShNPR(WC, Wh, Ws);
          },
          YRmqe: function (WC, Wh) {
            return W6.UBbGr(WC, Wh);
          },
          idcBZ: function (WC, Wh) {
            return W6.ajhix(WC, Wh);
          },
          pYdcJ: function (WC, Wh) {
            return W6.vJWeN(WC, Wh);
          },
          KzxDC: function (WC, Wh, Ws) {
            return W6.qwytH(WC, Wh, Ws);
          },
          VgPnK: function (WC, Wh) {
            return W6.mYXAL(WC, Wh);
          },
          shbYg: W6.YxSTI,
          ZGvFM: W6.azVpN,
          xknQB: function (WC, Wh) {
            return W6.CKfpH(WC, Wh);
          },
          RuZNw: function (WC, Wh) {
            return W6.tieXw(WC, Wh);
          },
          mYwJA: function (WC, Wh, Ws, WP) {
            return W6.cFHvD(WC, Wh, Ws, WP);
          },
          rRjDj: W6.FrKaL,
          UiIbG: W6.xSDWh,
          SQBZR: function (WC, Wh) {
            return W6.NewNY(WC, Wh);
          },
          xmVJI: function (WC, Wh) {
            return W6.CKfpH(WC, Wh);
          },
          Csqgq: function (WC, Wh) {
            return W6.EdDCb(WC, Wh);
          },
          ENMbL: W6.cKrlj,
          nGlcW: function (WC, Wh, Ws, WP, Wv, WU) {
            return W6.xuxXy(WC, Wh, Ws, WP, Wv, WU);
          },
          pAaFp: W6.Fgdfv,
          XCDxY: function (WC, Wh) {
            return W6.mYXAL(WC, Wh);
          },
          gyhzn: W6.WWYgo,
          JUKGj: function (WC, Wh) {
            return W6.aJIYz(WC, Wh);
          },
          SGKbP: function (WC, Wh) {
            return W6.EdDCb(WC, Wh);
          },
          lvKtC: function (WC, Wh) {
            return W6.RnXHa(WC, Wh);
          }
        };
        if (W6.ggzvR(W6.hCuLT, W6.JVRkp)) {
          WE.AlHHy(W8, W9, 1);
          var WC = this.onFrequent || WW.onGAFrequentError;
          try {
            if (WC) {
              WE.gYWjZ(WC);
            }
          } catch (Wh) {
            WE.hJjkO(WZ, WE.umYtS(Wh, ""));
          }
        } else if (W6.JujVv(2, WW)) {
          if (Wr) {
            W6.YQOUp(Wr);
          }
          if (WZ) {
            W6.YQOUp(WZ);
          }
          WW = 3;
        } else if (W6.ggzvR(1, WW)) {
          Wl.length = 0;
          WD.forEach(function (WC, Wh) {
            var Ws = {
              vYlcJ: function (Wn, WI, We) {
                return WE.IIQhH(Wn, WI, We);
              },
              YMOEw: function (Wn, WI) {
                return WE.YRmqe(Wn, WI);
              },
              hGsoV: function (Wn, WI) {
                return WE.idcBZ(Wn, WI);
              },
              UAnIg: function (Wn, WI) {
                return WE.pYdcJ(Wn, WI);
              },
              YaIEX: function (Wn, WI, We) {
                return WE.KzxDC(Wn, WI, We);
              },
              fkkkB: function (Wn, WI) {
                return WE.VgPnK(Wn, WI);
              },
              wopZB: WE.shbYg,
              rEjAz: WE.ZGvFM,
              YDNMv: function (Wn, WI) {
                return WE.xknQB(Wn, WI);
              },
              HByTM: function (Wn, WI) {
                return WE.RuZNw(Wn, WI);
              },
              lgXwZ: function (Wn, WI, We, Wm) {
                return WE.mYwJA(Wn, WI, We, Wm);
              },
              DEVBh: WE.rRjDj,
              sEqFy: WE.UiIbG,
              sNAGN: function (Wn, WI) {
                return WE.SQBZR(Wn, WI);
              },
              PiUvI: function (Wn, WI) {
                return WE.xmVJI(Wn, WI);
              },
              XxRfQ: function (Wn, WI) {
                return WE.hwWww(Wn, WI);
              },
              wlBEB: function (Wn, WI) {
                return WE.Csqgq(Wn, WI);
              },
              QGJpd: function (Wn, WI) {
                return WE.Csqgq(Wn, WI);
              },
              SaCjX: function (Wn, WI, We, Wm) {
                return WE.mYwJA(Wn, WI, We, Wm);
              },
              hMNHC: WE.ENMbL,
              Xvttw: function (Wn, WI, We, Wm, Wp, Wq) {
                return WE.nGlcW(Wn, WI, We, Wm, Wp, Wq);
              },
              nTvTj: function (Wn, WI, We) {
                return WE.AlHHy(Wn, WI, We);
              },
              spHCL: function (Wn, WI) {
                return WE.OFFZf(Wn, WI);
              },
              ZbCnx: function (Wn, WI, We, Wm) {
                return WE.mYwJA(Wn, WI, We, Wm);
              },
              xDSsJ: WE.pAaFp
            };
            if (WE.XCDxY(WE.gyhzn, WE.gyhzn)) {
              var WP;
              var Wv;
              var WU;
              var Wk;
              var WB;
              var Wi;
              var Wx;
              var WL;
              var Wa;
              var WV;
              var WN;
              var WY = WE.bRHpb(152, WC.h);
              var WJ = WE.JUKGj(152, WE.umYtS(75, WC.o));
              WP = {
                v: WY,
                _to: WJ,
                m: 1200,
                u: WE.xknQB(WE.JUKGj(200, WE.SGKbP(WE.lvKtC(WD.length, 1), Wh)), 400),
                Z: function () {},
                p: function (Wn) {
                  if (Ws.fkkkB(Ws.wopZB, Ws.rEjAz)) {
                    var Wm = W8.split("-");
                    var Wp = W9.split("-");
                    var Wq = Ws.vYlcJ(WW, Wm[0], Wp[0]);
                    if (Ws.YMOEw(0, Wq)) {
                      return Wq;
                    }
                    var WR = Wm[1];
                    var WM = Wp[1];
                    if (Ws.hGsoV(WR, !WM)) {
                      return -1;
                    } else if (Ws.hGsoV(!WR, WM)) {
                      return 1;
                    } else if (Ws.UAnIg(WR, WM)) {
                      return Ws.YaIEX(Wl, WR, WM);
                    } else {
                      return 0;
                    }
                  } else {
                    WC.l.y = Ws.YDNMv(20, Ws.HByTM(Wn, 608));
                    Ws.lgXwZ(de, WC.i, Ws.DEVBh, Ws.sEqFy.concat(WC.l.x, ", ").concat(WC.l.y, ")"));
                    var WI = Ws.sNAGN(Ws.PiUvI(WY, WJ), 2);
                    var We = Ws.sNAGN(+Math.abs(Ws.XxRfQ(Math.abs(Ws.wlBEB(Math.abs(Ws.QGJpd(Wn, WI)), WI)), WY)), 100).toFixed(1);
                    Ws.SaCjX(de, WC.t, Ws.hMNHC, `0 ${We}`);
                  }
                },
                g: function () {
                  if (WE.NAbsZ(WE.WEzUd, WE.SCZBt)) {
                    var Wn = WW ? function () {
                      if (Wn) {
                        var WI = WE.apply(WC, arguments);
                        Wh = null;
                        return WI;
                      }
                    } : function () {};
                    Wt = false;
                    return Wn;
                  } else if (WE.NAbsZ(0, Wh)) {
                    WE.gYWjZ(Wj);
                  }
                }
              };
              Wk = WP._to;
              WB = WP.m;
              Wi = WP.u;
              Wx = WP.Z;
              WL = WP.p;
              Wa = WP.g;
              WV = WU = WP.v;
              WN = false;
              function WF(Wn) {
                if (WE.lNUdM(WE.YKSJn, WE.YKSJn)) {
                  var Wm = `${WZ}-${Wu}`;
                  return {
                    i: Ws.Xvttw(Wt, Wz, 112, 20, Wm, WX),
                    t: Ws.nTvTj(WD, Wj, Wm),
                    o: +WE,
                    h: 0,
                    l: {
                      x: Ws.PiUvI(Ws.spHCL(137, WC), 12.5),
                      y: 20
                    }
                  };
                } else if (!WN) {
                  if (WE.ZHQGk(WE.IQBUp, WE.DrvxL)) {
                    Ws.ZbCnx(W6, W7, Ws.xDSsJ, "1");
                  } else {
                    if (!Wv) {
                      Wv = Wn;
                      WE.hJjkO(Wx, WV);
                    }
                    var WI;
                    var We = WE.VmWcD(Math.min(Math.max(WE.hwWww(WE.hwWww(Wn, Wv), Wi), 0), WB), WB);
                    WE.hJjkO(WL, WV = WE.umYtS(WE.BTnlt(WE.hVwbG(WI = We, 0.3) ? WE.bRHpb(WI, WI) : WE.umYtS(WE.umYtS(1, WE.OFFZf(1.25, Math.pow(WE.hwWww(WI, 1), 3))), WE.pRsGl(0.25, Math.pow(WE.hwWww(WI, 1), 2))), WE.hwWww(Wk, WU)), WU));
                    if (WE.NAbsZ(1, We)) {
                      WN = true;
                      WE.hJjkO(Wa, WV);
                    }
                  }
                }
              }
              Wl.push(WF);
            } else if (WE.NAbsZ(1, W8)) {
              W9 = 2;
              WW = Wl;
            }
          });
        }
      }
      (function (WE, WC) {
        if (W6.spBTE(W6.TQJpP, W6.JzkjU)) {
          W6.cEdzR(de, WE, W6.skrPV, W6.FFlpM.concat(WC, " ").concat(152));
          W6.xuxXy(ve, WE, W6.boHUn, W6.dSCht, W6.YNHhS, 152);
        } else if (W6.JujVv(0, W6)) {
          W6.zJfRT(W7);
        }
      })(Wt, W6.nynjb(137, WD.length));
      WD.forEach(function (WE) {
        if (W6.GBOKK(W6.ttVxi, W6.ttVxi)) {
          W6.gmWdF(cancelAnimationFrame, W5);
        } else {
          W6.cEdzR(de, WE.i, W6.FrKaL, W6.xSDWh.concat(WE.l.x, ", ").concat(WE.l.y, ")"));
        }
      });
      return {
        H: function () {
          var WE = {
            QhMMi: function (WC, Wh) {
              return W6.RSjwl(WC, Wh);
            },
            ygAdq: function (WC, Wh) {
              return W6.vMSHY(WC, Wh);
            }
          };
          if (W6.XjGkE(W6.uIdCO, W6.uIdCO)) {
            for (var WC = W7.keys(W8), Wh = 0; WE.QhMMi(Wh, WC.length); Wh++) {
              var Ws = WW[WC[Wh]];
              try {
                WE.ygAdq(Function, Ws);
              } catch (WP) {
                return false;
              }
            }
            return true;
          } else {
            return W7;
          }
        },
        M: function () {
          if (W6.IKVcg(W6.cydfP, W6.YjPWT)) {
            var WE = W6.YgAwQ(Wl, Wr, W6.otnNx);
            W6.jjMjV(WZ, WE, "id", W6.CjeCm.concat(Wu));
            W6.HDpog(Wt, W6.XnwaU(Wz, WE, W6.pOApY), "x", 0, "y", 0, W6.RVJBY, W6.JnzqM, W6.YNHhS, W6.JnzqM, W6.khCpF, W6.wVNAd.concat(WX, ")"));
          } else {
            return W8;
          }
        },
        V: function () {
          if (W6.NNuQH(W6.mOLlq, W6.iRTPR)) {
            return false;
          } else {
            return 152;
          }
        },
        k: function () {
          var WE = {
            RTAVd: function (WP, Wv) {
              return W6.YJgGH(WP, Wv);
            },
            ZExHb: function (WP, Wv) {
              return W6.ksQYn(WP, Wv);
            },
            zLqKs: function (WP) {
              return W6.HRLhy(WP);
            },
            lpINw: function (WP, Wv) {
              return W6.JjGQW(WP, Wv);
            },
            nTPKE: W6.ojKsM,
            SpjmU: function (WP, Wv, WU, Wk) {
              return W6.jjMjV(WP, Wv, WU, Wk);
            },
            CqzLT: W6.PXbfK,
            urttO: function (WP, Wv) {
              return W6.xvefV(WP, Wv);
            },
            Kfatl: W6.eFcHO,
            fOznP: W6.BNKNM,
            LJauP: function (WP, Wv) {
              return W6.IqXox(WP, Wv);
            },
            drrgE: function (WP, Wv) {
              return W6.zUmRY(WP, Wv);
            },
            habiP: function (WP, Wv) {
              return W6.JjGQW(WP, Wv);
            },
            bTAca: function (WP, Wv) {
              return W6.gmWdF(WP, Wv);
            }
          };
          if (W6.GBOKK(W6.wcgSI, W6.wcgSI)) {
            return W6.YijgM(W5, "");
          } else {
            var WC;
            var Wh;
            var Ws;
            if (!(W6.bnrsP(1, WW) || W6.LAIUc(0, WW) && W6.XjGkE(3, WW))) {
              WW = 1;
              W6.YQOUp(Wj);
              WC = function (WP) {
                var Wv = {
                  OWjUh: W6.TzeiI,
                  PCvuH: W6.VCSDV,
                  Jozwz: function (WU, Wk) {
                    return W6.JjGQW(WU, Wk);
                  },
                  WBgnC: function (WU, Wk) {
                    return W6.djRlm(WU, Wk);
                  },
                  zdJui: W6.nKVvF,
                  EQMlT: function (WU, Wk) {
                    return W6.SrSpF(WU, Wk);
                  }
                };
                if (W6.UBbGr(W6.ZvJVy, W6.ZvJVy)) {
                  if (W9) {
                    WW[0] = Wl;
                  }
                  Wr.apply(undefined, WZ);
                } else {
                  Wl.forEach(function (WU) {
                    if (Wv.WBgnC(Wv.zdJui, Wv.zdJui)) {
                      var Wk = W7.createElement(Wv.OWjUh);
                      Wk.id = Wv.PCvuH;
                      Wk.style.backgroundColor = Wv.Jozwz("#", W8);
                      W9.body.appendChild(Wk);
                    } else {
                      return Wv.EQMlT(WU, WP);
                    }
                  });
                }
              };
              (Ws = function (WP) {
                var Wv = {
                  VXrdW: function (WU, Wk) {
                    return WE.RTAVd(WU, Wk);
                  },
                  RBFFy: function (WU, Wk) {
                    return WE.ZExHb(WU, Wk);
                  },
                  UPhDP: function (WU) {
                    return WE.zLqKs(WU);
                  },
                  FuUjR: function (WU, Wk) {
                    return WE.lpINw(WU, Wk);
                  },
                  jMiSP: WE.nTPKE,
                  XcbJb: function (WU, Wk, WB, Wi) {
                    return WE.SpjmU(WU, Wk, WB, Wi);
                  },
                  eNiCR: function (WU, Wk) {
                    return WE.lpINw(WU, Wk);
                  },
                  syJOE: WE.CqzLT
                };
                if (WE.urttO(WE.Kfatl, WE.fOznP)) {
                  Wh = WE.LJauP(fe, Ws);
                  WE.drrgE(WC, WP);
                } else if (!Wz) {
                  WB = true;
                  var WU = Wv.FuUjR(Wi[Wx].substring(2, 4), Wv.jMiSP);
                  Wv.XcbJb(WL, Wv.FuUjR(Wv.eNiCR(location.origin, Wv.syJOE), WU), 2, function (Wg) {
                    if (Wg) {
                      WU = null;
                    }
                    if (!Wv.VXrdW(null, We = Wv.RBFFy(Wm, null))) {
                      Wp.setQuery(Wq[WR]);
                    }
                    Wv.UPhDP(WM);
                  });
                }
              })(0);
              Wr = function () {
                if (W6.djRlm(W6.vrItc, W6.wSZLb)) {
                  W6.gmWdF(cancelAnimationFrame, Wh);
                } else {
                  var WP = WW.substring(0, Wl);
                  var Wv = Wr.substring(WE.habiP(WZ, 1));
                  Wu[WP] = WE.bTAca(Wt, Wv);
                }
              };
            }
          }
        },
        _: function (WE) {
          if (W6.spBTE(W6.wLGCW, W6.wLGCW)) {
            for (var WC = [], Wh = 0; W6.RyDAE(Wh, arguments.length); Wh++) {
              WC[Wh] = arguments[Wh];
            }
            for (var Ws = 0; W6.RyDAE(Ws, WC.length); Ws++) {
              var WP = W6.CIAwo(WW, Wl, W6.ZWAki);
              var Wv = WC[Ws];
              W6.PdpwQ(Wr, WP, W6.YaZoM, Wv[0], W6.ZfNOG, W6.GhkZu, W6.RvPVv, Wv[1]);
            }
          } else if (W6.Cdbjd(1, WW)) {
            WW = 2;
            WZ = WE;
          }
        },
        F: function () {
          if (W6.bnrsP(W6.fXgVI, W6.fXgVI)) {
            var WE;
            if (W6.vvvPi(0, WW)) {
              WW = 0;
              if (W7) {
                if (!(W6.bnrsP(null, WE = W7.parentElement) || W6.uAGDG(undefined, WE))) {
                  WE.removeChild(W7);
                }
              }
              if (Wr) {
                W6.zJfRT(Wr);
              }
            }
          } else {
            for (var WC = [], Wh = 0; W6.HzCfS(Wh, arguments.length); Wh++) {
              WC[Wh] = arguments[Wh];
            }
            for (var Ws = WC[0], WP = 1; W6.hIMtI(WP, WC.length); WP += 2) {
              Ws.setAttribute(WC[WP], WC[W6.xpDIh(WP, 1)]);
            }
            return Ws;
          }
        }
      };
    }
    var ye = `/${g}` + i;
    var be = "";
    e.GtmId = new String(e.GtmId);
    var _e = J() ? 2015 : 5;
    var ke = k;
    var xe = O;
    var we = Date.now();
    var He = G.or;
    if (He) {
      if ((He = function (W4) {
        var W6;
        (function (Wt) {
          Wt.kReplacer = "[a-zA-Z=]";
        })(W6 || (W6 = {}));
        var W7 = typeof window == "object" ? window : global;
        var W8 = W7.parseInt;
        var W9 = W7.isNaN;
        var WW = W7.String;
        var Wl = W7.RegExp;
        var Wr = W7.Number;
        var WZ = Wl(W6.kReplacer, "g");
        var Wu = W8(W4 == null ? undefined : W4.substring(Wr("0x0"), Wr("0x2")), Wr("0xa"));
        if (W9(Wu) && (W4 == null ? undefined : W4.includes("."))) {
          return W4;
        } else if (W4 == null) {
          return undefined;
        } else {
          return W4.substring(Wr("0x2")).replace(WZ, function (Wt) {
            if (Wt === "=") {
              return ".";
            }
            var WX = Wt.charCodeAt(0);
            var WD = WX >= Wr("0x61") ? Wr("0x61") : Wr("0x41");
            var Wj = (WX - WD - Wu + Wr("0x1a")) % Wr("0x1a") + WD;
            return WW.fromCharCode(Wj);
          });
        }
      }(He)).indexOf("//") === 0) {
        He = location.protocol + He;
      } else if (!/^https?:/.test(He)) {
        He = location.protocol + "//" + He;
      }
      be = He + location.pathname.replace("index.html", "");
      ye = He + ye;
    }
    var Se = G.blockpage;
    if (Se) {
      var Me = document.createElement("div");
      Me.id = "block-page";
      Me.style.backgroundColor = "#" + Se;
      document.body.appendChild(Me);
    }
    var Te;
    var Pe = function (W4, W5, W6) {
      var W8 = ue(W4, "div", 0);
      de(W8, "class", "initial-loader");
      var W9;
      var WW;
      var Wl = ue(W8, "div", 0);
      de(Wl, "class", "il-wrapper");
      var Wr = me(1440, 1024);
      var WZ = function (Wz, WX) {
        var WD = {
          ZCxvL: function (WE, WC) {
            return WE === WC;
          },
          QnZvO: function (WE, WC) {
            return WE === WC;
          },
          Qeqgb: "http://www.w3.org/2000/svg",
          aXMhb: "ImPjS",
          rTGWJ: "XQnvr",
          dHFFD: "resize"
        };
        function Wj() {
          var WE = me(window.innerWidth, window.innerHeight);
          ve(Wz, "transform", `scale(${(WX / WE).toFixed(4)})`);
        }
        window.addEventListener("resize", Wj);
        Wj();
        return function () {
          if (WD.ZCxvL(WD.aXMhb, WD.rTGWJ)) {
            if (WD.ZCxvL(undefined, Wr)) {
              WZ = 1;
            }
            var WC = WD.QnZvO(0, Wu) ? Wt.createElement(Wz) : WX.createElementNS(WD.Qeqgb, WD);
            Wj.appendChild(WC);
            return WC;
          } else {
            window.removeEventListener(WD.dHFFD, Wj);
          }
        };
      }(Wl, Wr);
      var Wu = ue(document.head, "style", 0);
      Wu.textContent = ".initial-loader{background-color:#000;height:inherit;margin:auto;position:absolute;transition:opacity .35s ease-in;width:inherit}.il-wrapper,.initial-loader{align-items:center;display:flex;flex-direction:column;justify-content:center}.il-circle-loading{align-items:center;display:flex;height:10px;justify-content:space-between;width:40px}.il-circle{animation-direction:alternate;animation-duration:.25s;animation-iteration-count:infinite;animation-name:il-circle-bounce;animation-timing-function:ease-out;background-color:#30a2d0;border-radius:50%;height:10px;position:relative;width:10px}.il-circle:first-of-type{animation-delay:0s}.il-circle:nth-of-type(2){animation-delay:-75ms}.il-circle:nth-of-type(3){animation-delay:-.15s}@keyframes il-circle-bounce{0%{bottom:0}90%,to{bottom:15px}}.il-err-container{display:flex;flex-direction:column;font-family:PingFangSC-Regular;position:absolute;width:360px}.il-err-title{color:#fff;font-size:26px;padding:10px 0;text-align:center}.il-err-desc{color:#98989e;font-size:18px;line-height:24px;text-align:center}.il-btn-container{align-items:center;color:#fff;display:flex;justify-content:space-between;padding-top:70px}.il-btn{cursor:pointer;flex:1;font-family:PingFangSC-Semibold;font-size:20px;line-height:28px;text-align:center;user-select:none}.il-btn:active{opacity:.6}";
      if (W5 === 0) {
        de(WW = ue(Wl, "div", 0), "class", "il-circle-loading ");
        for (var Wt = 0; Wt < 3; Wt++) {
          de(ue(WW, "div", 0), "class", "il-circle");
        }
      } else if (W5 === 1) {
        (W9 = Ze(Wl, W6)).k();
      }
      return {
        handleError: function (Wz, WX, WD) {
          if (WD === undefined) {
            WD = [];
          }
          var WE = ue(Wl, "div", 0);
          de(WE, "class", "il-err-container");
          var WC = ue(WE, "div", 0);
          de(WC, "class", "il-err-title");
          WC.textContent = Wz;
          var Wh = ue(WE, "div", 0);
          de(Wh, "class", "il-err-desc");
          Wh.textContent = WX;
          if (WD.length > 0) {
            var Ws = ue(WE, "div", 0);
            de(Ws, "class", "il-btn-container");
            for (var WP = 0; WP < WD.length; WP++) {
              var Wv = ue(Ws, "div", 0);
              de(Wv, "class", "il-btn");
              Wv.textContent = WD[WP].label;
              var WU = WD[WP].onclick;
              if (WU) {
                Wv.onclick = WU;
              }
            }
          }
          if (W5 === 0) {
            if (!(WW == null)) {
              WW.remove();
            }
          } else if (W5 === 1) {
            function Wk() {
              var WB = W9.M();
              var Wi = W9.H();
              var Wx = WE.offsetTop - W9.V() + 14;
              ve(WB, "transition", "opacity 0.28s ease-in");
              ve(Wi, "transition", "transform 0.5s ease-in-out");
              ve(WE, "transition", "opacity 0s linear 0.28s, transform 0.5s ease-in-out");
              fe(function () {
                ve(WE, "opacity", "1", "transform", "translateY(0px)");
                ve(WB, "opacity", "0");
                ve(Wi, "transform", `translateY(${Wx}px) scale(${0.7})`);
              });
            }
            fe(function () {
              ve(WE, "opacity", "0", "transform", `translateY(${WE.offsetHeight}px)`);
              W9._(Wk);
            });
          }
        },
        hideLoading: function (Wz) {
          ve(W8, "opacity", "0");
          // TOLOOK
          setTimeout(function () {
            var Wj;
            var WE;
            var WC;
            if (W5 === 1) {
              W9.F();
            }
            WZ();
            if (!((Wj = Wu.parentNode) === null || Wj === undefined)) {
              Wj.removeChild(Wu);
            }
            if (!((WE = Wl.parentNode) === null || WE === undefined)) {
              WE.removeChild(Wl);
            }
            if (!((WC = W8.parentNode) === null || WC === undefined)) {
              WC.removeChild(W8);
            }
            if (Wz) {
              Wz();
            }
          }, 350);
        }
      };
    }(document.body, J() ? 1 : 0, ne(4));
    function Ee(W4) {
      if (W4 === undefined) {
        W4 = 1;
      }
      Pe.handleError(ne(0), ne(W4), [{
        label: ne(3),
        onclick: function () {
          location.reload();
        }
      }]);
    }
    function Ve(W4) {
      if (W4 != null) {
        return Ee();
      }
      if (typeof shell == "undefined") {
        Ee();
      } else {
        // TOLOOK
        setTimeout(function () {
          var W6 = {
            SharedPath: ye,
            GameDir: be,
            AssetTable: a,
            ShellDir: r,
            Plugins: o,
            Requirements: l,
            LocalizedTitleKey: s,
            SupportedLanguages: h,
            ThemeColor: c,
            LobbyMode: u,
            SupportXSMaxRatio: v,
            AspectRatio: d,
            Orientation: f,
            Name: m,
            Version: p,
            Index: g,
            Identifier: Z,
            PluginDependencies: b,
            EIF: y,
            Ecma: _e,
            Platform: ke,
            Blobs: xe,
            BootTime: we,
            initialLoader: Pe
          };
          return shell.start(Te, W6);
        }, 0);
      }
    }
    // window.isSecureContext=true;
    // if (window.isSecureContext !== undefined ? window.isSecureContext : window.location.protocol.startsWith("https:")) {
      se(ye + r + "index.json", 1, function (W4, W5) {
        if (W4 != null) {
          return Ee();
        }
        var W7;
        var W8;
        W7 = (Te = W5).version;
        W8 = t;
        if (typeof W7 == "string" && typeof W8 == "string" && function (W9, WW) {
          var Wl = W9.split("-");
          var Wr = WW.split("-");
          var WZ = ce(Wl[0], Wr[0]);
          if (WZ !== 0) {
            return WZ;
          }
          var Wu = Wl[1];
          var Wt = Wr[1];
          if (Wu && !Wt) {
            return -1;
          } else if (!Wu && Wt) {
            return 1;
          } else if (Wu || Wt) {
            return ce(Wu, Wt);
          } else {
            return 0;
          }
        }(W7, W8) !== -1) {
          se(ye + r + Te.main, 2, Ve);
        } else {
          Ee(2);
        }
      });
    // } else {
      // Pe.handleError(ne(5), ne(6));
    // }
  })();