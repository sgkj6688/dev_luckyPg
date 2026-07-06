!function () {
  'use strict';

  ;
  var Fw = {
    index: "b994a",
    config: "b65d0"
  };
  var Ft = {
    index: "dd547",
    config: "9894e"
  };
  var Fp = {
    resources: Fw,
    main: Ft
  };
  var Fl = {
    platform: "web-mobile",
    groupList: ["default"],
    collisionMatrix: [[true]],
    hasResourcesBundle: true,
    hasStartSceneBundle: false,
    remoteBundles: [],
    subpackages: [],
    launchScene: "db://assets/default/scenes/Main.fire",
    orientation: "portrait",
    jsList: [],
    bundleVers: Fp
  };
  window.DEBUG = false;
  window.PREVIEW = false;
  window.EDITOR = false;
  window.GtmId = "GTM-WV99ST2";
  window._CCSettings = Fl;
  var FC = {
    e02b9bf0d2: ">=11.3.0-rc.1",
    a346494745: ">=10.3.0-rc.1",
    "589a728c8d": ">=7.3.0-rc.1",
    "2fd142260e": ">=9.3.0-rc.1",
    "2c6e37b73c": ">=6.3.0-rc.1"
  };
  FC.b85c56d865 = ">=5.2.0-rc.1";
  FC.c03a2652ad = ">=7.1.0-rc.1";
  console.log("Game/Boot/Engine", "5.22.0.2/6.15.0/5.2.0-0");
  var M = navigator.userAgent;
  var k = 0;
  function H(O4) {
    var O6 = O4 + '';
    var O7 = (O4.stack || '') + '';
    var O8 = O6;
    if (O7) {
      if (0 === O7.indexOf(O6)) {
        O8 = O7;
      } else {
        O8 += "\n" + O7;
      }
    }
    var O9 = this.onFormat || window.onGAReceiveError;
    if (O9) {
      try {
        O8 = O9(O8);
      } catch (OO) {
        b(OO + '');
      }
    }
    return O8.replace(/https?:\/\/[^/]+([0-9A-Za-z/._-]+)\S*(:[0-9]+:[0-9]+)/g, "$1$2").replace(/https?:\/\/[^/]+/g, '');
  }
  function b(O5, O6) {
    var O8 = {
      description: O5,
      fatal: !!O6
    };
    gtag("event", "exception", O8);
  }
  if (M.indexOf(" Chrome/") > 0) {
    k = 2;
  } else if (M.indexOf(" AppleWebKit/") > 0) {
    k = 1;
  } else if (M.indexOf(" Gecko/") > 0) {
    k = 3;
  } else if (M.indexOf(" Trident/") > 0) {
    k = 4;
  } else if (M.indexOf(" Presto/") > 0) {
    k = 5;
  }
  var x;
  var E;
  var S;
  x = 0;
  E = '';
  S = 0;
  var V = function (O4) {
    var O6 = Date.now();
    if (E !== O4 || O6 - S > 1000) {
      S = O6;
      E = O4;
      x = 0;
    } else {
      x++;
    }
    if (0 === x) {
      b(O4);
    } else {
      if (5 === x) {
        b(O4, 1);
        var O7 = this.onFrequent || window.onGAFrequentError;
        try {
          if (O7) {
            O7();
          }
        } catch (O8) {
          b(O8 + '');
        }
      } else if (x > 5) {
        S = O6;
      }
    }
  };
  function D(O5, O6, O7, O8, O9) {
    if (k > 3) {
      return false;
    }
    if (!O7 || !O8 || !O9) {
      return false;
    }
    var OX = "Uncaught " + H.call(D, O9);
    V.call(D, OX);
    return false;
  }
  D.report = function (O4, O5) {
    b("Uncaught " + H.call(this, O4), O5);
  };
  var $;
  var N;
  function R(O5) {
    var O6 = {
      zbreJ: function (OO, OF) {
        return OO > OF;
      }
    };
    O6.CpFDH = function (OO, OF) {
      return OO !== OF;
    };
    O6.wtfHv = "iFwbC";
    O6.rUhzn = "XEdZl";
    O6.YEfGM = function (OO, OF) {
      return OO != OF;
    };
    O6.KUacQ = function (OO, OF) {
      return OO === OF;
    };
    O6.tDPCu = "pvlhO";
    O6.AoXXj = "TAzmg";
    O6.XpasI = function (OO, OF) {
      return OO + OF;
    };
    if (!(k > 3)) {
      if (O6.CpFDH(O6.wtfHv, O6.rUhzn)) {
        var O8 = O5.reason;
        if (O6.YEfGM(null, O8)) {
          if (O6.KUacQ(O6.tDPCu, O6.AoXXj)) {
            location.reload();
          } else {
            var O9 = O6.XpasI("Unhandled ", H.call(R, O8));
            V.call(R, O9);
          }
        }
      } else {
        return false;
      }
    }
  }
  R.report = function (O4, O5) {
    b("Unhandled " + H.call(this, O4), O5);
  };
  window.dataLayer = [];
  window.gtag = function () {
    dataLayer.push(arguments);
  };
  dataLayer.push({
    'event': "gtm.js",
    'gtm.start': Date.now(),
    'app_name': "Win Win Won",
    'app_version': "5.22.0.2/6.15.0/5.2.0-0"
  });
  //$ = "https://www.googletagmanager.com/gtm.js?id=".concat(GtmId);
  //(N = document.createElement("script")).async = true;
 // N.src = $;
  //document.head.appendChild(N);
  window.onerror = D;
  window.onunhandledrejection = R;
  var T = location.search;
  if (T.length > 0) {
    T = T.substring(1);
  }
  var C = {};
  var L = T.split('&');
  for (var F = 0; F < L.length; ++F) {
    var B = L[F];
    if (B) {
      var P = B.indexOf('=');
      if (-1 === P) {
        C[B] = '';
      } else {
        var j = B.substring(0, P);
        var K = B.substring(P + 1);
        C[j] = decodeURIComponent(K);
      }
    }
  }
  function z() {
    var O5 = "string" == typeof arguments[0] ? function (O6) {
      var O7 = O6[2];
      var O8 = O6[3];
      var O9 = {
        S: O6[0],
        A: O6[1],
        $: OO,
        N: OO
      };
      return O9;
      function OO() {
        if (null != this.I) {
          O7(this.I);
        } else if (undefined === O8) {
          O7(undefined, this.R);
        } else {
          O8(this.R);
        }
      }
    }(arguments) : arguments[0];
    if (2 === O5.A && undefined === O5.T) {
      (function (O6) {
        O6.C = false;
        var O8 = {
          'S': O6.S,
          'A': 0x2,
          '$': function () {
            O6.I = this.I;
            if (O6.$) {
              O6.$();
            }
          },
          'N': function () {
            var OO = this.R;
            var OF = URL.createObjectURL(OO);
            function OM(OI) {
              if (OI.filename === OF) {
                O6.I = OI.error;
                delete q[OF];
              }
            }
            window.addEventListener("error", OM);
            q[OF] = O6.S;
            var OX = document.createElement("script");
            OX.src = OF;
            OX.defer = true;
            OX.onload = function () {
              window.removeEventListener("error", OM);
              document.head.removeChild(OX);
              URL.revokeObjectURL(OF);
              W(O6);
            };
            document.head.appendChild(OX);
          },
          'T': O6
        };
        z(O8);
      })(O5);
    } else {
      (function (O6) {
        var O8 = new XMLHttpRequest();
        O8.open("GET", O6.S, true);
        try {
          if ("timeout" in O8) {
            O8.timeout = 60000;
          }
        } catch (O9) {}
        switch (O6.A) {
          case 1:
            O8.responseType = "json";
            break;
          case 3:
          case 2:
            O8.responseType = "blob";
        }
        O8.onload = function () {
          if (O8.status >= 200 && O8.status < 300 || 0 === O8.status && O8.response) {
            (function (OO, OF) {
              if (1 === OO.A && "string" == typeof OF) {
                try {
                  OF = JSON.parse(OF);
                } catch (OM) {
                  OO.I = OM;
                  OF = undefined;
                }
              }
              if (null == OO.I && null == OF) {
                OO.I = "invaliddata";
              } else {
                OO.R = OF;
              }
            })(O6, O8.response);
          } else {
            O6.I = ''.concat(O8.status, ": ").concat(O8.statusText);
          }
          W(O6);
        };
        O8.onerror = function () {
          O6.I = "onerror";
          W(O6);
        };
        O8.ontimeout = function () {
          O6.I = "ontimeout";
          W(O6);
        };
        O8.send();
      })(O5);
    }
  }
  var O;
  var q = Object.create(null);
  function W(O4) {
    if (null != O4.I) {
      var O6 = undefined === O4.C ? 0 : O4.C;
      !function (O7, O8, O9, OO) {
        if (O9 instanceof Error) {
          O9 = O9.message;
        }
        var OX = O7.split('?')[0];
        var OM = "load resource fail|G1002|src: ".concat(OX, "|reason: ").concat(O9);
        if (OO) {
          OM += "|retryCount: ".concat(OO);
        }
        gtag("event", "error", {
          'event_category': "game_shell",
          'event_label': OM
        });
      }(O4.S, 0, O4.I, O6);
      if (false !== O6 && ("onerror" === O4.I || "ontimeout" === O4.I) && O6 < 5) {
        O4.C = ++O6;
        O4.I = undefined;
        setTimeout(z, 1000 * (1 << O6), O4);
      } else if (O4.$) {
        O4.$();
      }
    } else if (O4.N) {
      O4.N();
    }
  }
  (O = {
    1: "var c=()=>{};",
    2: "function d(a=2){};",
    3: "+function e(...c){}(...[2,3]);",
    4: "var f=1,g=`c${f}d`;",
    5: "var h=0b111,q=0o767;",
    6: "var i='/\\u{20BB7}/u';",
    7: "var j=/s*/y;",
    8: "var k=1,l={k,['x'+k]:2,c(){}};",
    9: "var [z,y=3]=[1];var {e,f=5}={a:1,f:5};",
    10: "class test{}; class test2 extends test{};",
    11: "var o=Symbol('a');",
    12: "for(var t of [1]){};",
    13: "function*p(){ yield;}"
  })[0] = "const a=10;let b=10;";
  var J = [[window, "Map", "WeakMap", "Set", "WeakSet", "Promise", "Proxy", "Reflect"], [Object, "assign"], [Array.prototype, "findIndex", "find"], [String.prototype, "repeat", "startsWith", "endsWith", "includes"], [Number, "isFinite", "isNaN", "isSafeInteger", "isInteger"], [Math, "trunc", "sign", "cbrt", "log2", "log10"]];
  function Q() {
    return function (O5) {
      var O7 = Object.keys(O5);
      for (var O8 = 0; O8 < O7.length; O8++) {
        var O9 = O5[O7[O8]];
        try {
          Function(O9);
        } catch (OO) {
          return false;
        }
      }
      return true;
    }(O) && function (O5) {
      var O7 = true;
      for (var O8 = 0; O8 < O5.length; O8++) {
        var O9 = O5[O8];
        var OO = O9[0];
        if (undefined === OO) {
          O7 = false;
          break;
        }
        for (var OF = 1; OF < O9.length; OF++) {
          if (undefined === OO[O9[OF]]) {
            O7 = false;
            break;
          }
        }
        if (!O7) {
          break;
        }
      }
      return O7;
    }(J);
  }
  var FB = {
    en: "Unable to load game. Press [OK] to refresh or [Cancel] to ignore.",
    zh: "未能加载游戏，点击\"确定\"进行重试或者\"取消\"。",
    th: "ไม่สามารถดาวน์โหลดเกมได้ ให้คลิกที่ ”ยืนยัน” เพื่อลองใหม่ หรือที่ “ยกเลิก” เพื่อออก",
    id: "Permainan tidak bisa diunduh. Klik ‘Konfirmasi’ untuk coba lagi atau ‘Batalkan’ untuk keluar.",
    vi: "Không thể tải về trò chơi. Nhấp vào ‘Xác nhận’ để thử lại hoặc ‘Hủy’ để thoát.",
    ja: "ゲームをダウンロードできません。[確認] をクリックしてもう一度試すか、[キャンセル] をクリックして終了してください。",
    ko: "게임을 다운로드할 수 없습니다. ‘확인’을 클릭하여 다시 시도하거나 ‘취소’를 클릭하여 종료하세요.",
    sv: "Spelet kan inte laddas ner. Klicka på Bekräfta för att försöka igen, eller på Avbryt för att lämna."
  };
  var Fm = {
    en: "Sorry, this game cannot be loaded as the existing resources are out of date. Please try again later.",
    zh: "对不起，由于当前资源不是最新版本，因此游戏无法加载，请稍后再试。",
    th: "ขออภัย ไม่สามารถโหลดเกมนี้ได้เนื่องจากข้อมูลปัจจุบันไม่ใช่ข้อมูลล่าสุด กรุณาลองใหม่อีกครั้งในภายหลัง",
    id: "Maaf, permainan ini tidak bisa dimuat karena sumber daya yang ada sudah kedaluwarsa. Silakan coba lagi nanti.",
    vi: "Rất tiếc, không thể tải trò chơi này vì các tài nguyên hiện tại đã quá cũ. Vui lòng thử lại sau.",
    ja: "申し訳ありません。現在のリソースが古いため、このゲームを読み込むことはできません。後でもう一度お試しください。",
    ko: "죄송합니다.이 게임은 기존 리소스가 구식이므로로드 할 수 없습니다. 나중에 다시 시도 해주십시오.",
    sv: "Det här spelet kan inte laddas eftersom de nuvarande resurserna är inaktuella. Försök igen senare."
  };
  var FH = {
    en: "DIFFERENCE MAKES THE DIFFERENCE",
    zh: "不  凡   成   就   非   凡",
    de: "DER UNTERSCHIED MACHT DEN UNTERSCHIED",
    es: "LA DIFERENCIA QUE MARCA LA DIFERENCIA",
    th: "ความแตกต่าง ที่เป็นตัวตัดสิน",
    id: "PERBEDAAN YANG MEMBUAT PERBEDAAN",
    vi: "SỰ KHÁC BIỆT TẠO NÊN SỰ KHÁC BIỆT",
    ja: "違 い が   違 い を 生 み だ す",
    ko: "차 이 를   만 드 는   차 이",
    ru: "ИНДИВИДУАЛЬНОСТЬ ИМЕЕТ ЗНАЧЕНИЕ",
    sv: "SKILLNADEN SOM GÖR SKILLNAD"
  };
  var FY = {
    '0': FB,
    '1': Fm,
    '2': FH
  };
  var tt = C.language || C.lang || C.l || navigator.language;
  var nt = tt.indexOf('-');
  function et(O4) {
    var O5 = FY[O4];
    return O5 ? O5[tt] || O5.en : ''.concat(O4);
  }
  if (-1 !== nt) {
    tt = tt.substring(0, nt);
  }
  var it;
  var ot = undefined !== C.__sv && '' !== C.__sv;
  var at = false;
  var ht = [];
  function lt() {
    for (var O5 = function () {
      var O7;
      var O8;
      var O9 = ht.pop();
      if (null === it) {
        z.apply(undefined, O9);
      } else {
        O7 = O9[0];
        O8 = function (OO) {
          if (OO) {
            O9[0] = OO;
          }
          z.apply(undefined, O9);
        };
        it.getSignedUrl(O7).then(O8, function () {
          return O8('');
        });
      }
    }; ht.length;) {
      O5();
    }
  }
  var vt = ot ? function () {
    ht.push(arguments);
    if (undefined === it) {
      (function () {
        if (!at) {
          at = true;
          var O6 = C.__sv.substring(2, 4) + ".js";
          z(location.origin + "/loader/" + O6, 2, function (O7) {
            if (O7) {
              it = null;
            }
            if (!(null == (it = sign || null))) {
              it.setQuery(C.__sv);
            }
            lt();
          });
        }
      })();
    } else {
      setTimeout(lt, 0);
    }
  } : z;
  function ut(O4) {
    var O6 = parseInt(O4);
    return isNaN(O6) ? O4 : O6;
  }
  function ft(O4, O5) {
    var O7 = O4.split('.');
    var O8 = O5.split('.');
    var O9 = Math.max(O7.length, O8.length);
    for (var OO = 0; OO < O9; OO++) {
      var OF = ut(O7[OO] || 0);
      var OX = ut(O8[OO] || 0);
      if (OF < OX) {
        return -1;
      }
      if (OF > OX) {
        return 1;
      }
    }
    return 0;
  }
  function st(O5, O6) {
    var O9 = document.createElementNS("http://www.w3.org/2000/svg", O6);
    O5.appendChild(O9);
    return O9;
  }
  function ct() {
    var O8 = arguments[0];
    for (var O9 = 1; O9 < arguments.length; O9 += 2) {
      O8.style[arguments[O9]] = arguments[O9 + 1];
    }
    return O8;
  }
  function mt() {
    var O5 = {
      CstyC: function (OO, OF) {
        return OO < OF;
      }
    };
    O5.vTuDX = function (OO, OF) {
      return OO + OF;
    };
    var O8 = arguments[0];
    for (var O9 = 1; O9 < arguments.length; O9 += 2) {
      O8.setAttribute(arguments[O9], arguments[O5.vTuDX(O9, 1)]);
    }
    return O8;
  }
  var Zt = function (O4, O5, O6, O7, O8) {
    var OO;
    var OF = 0 === O8 ? "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"112\" height=\"112\"><path d=\"M90.6 9.8h9.8V0h-9.8Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#ff6e00;fill-opacity:1\"/><path d=\"M0 21.1h9.8v-9.8H0Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#6414e6;fill-opacity:1\"/><path d=\"M11.3 111.6h9.8v-9.8h-9.8Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#19bee6;fill-opacity:1\"/><path d=\"M68 89h9.7v-9.8H68Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#e619dc;fill-opacity:1\"/><path d=\"M79.2 9.8H89V0h-9.8ZM68 9.8h9.8V0H68Zm-11.3 0h9.8V0h-9.8Zm-11.3 0H55V0h-9.8ZM34 9.8h9.8V0H34Zm-11.4 0h9.8V0h-9.8Zm-11.3 0h9.8V0h-9.8Zm79.3 11.3h9.8v-9.8h-9.8Zm-11.4 0H89v-9.8h-9.8Zm-11.3 0h9.8v-9.8H68Zm-11.3 0h9.8v-9.8h-9.8Zm-11.3 0H55v-9.8h-9.8Zm-11.3 0h9.8v-9.8H34Zm-11.4 0h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8ZM102 32.4h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8Zm-11.4 0H89v-9.8h-9.8Zm-67.9 0h9.8v-9.8h-9.8ZM0 32.4h9.8v-9.8H0Zm101.9 11.3h9.8V34h-9.8Zm-11.3 0h9.8V34h-9.8Zm-79.3 0h9.8V34h-9.8ZM0 43.7h9.8V34H0Zm101.9 11.4h9.8v-9.9h-9.8Zm-11.3 0h9.8v-9.9h-9.8Zm-79.3 0h9.8v-9.9h-9.8ZM0 55h9.8v-9.8H0Zm101.9 11.3h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8Zm-11.4 0H89v-9.8h-9.8Zm-67.9 0h9.8v-9.8h-9.8ZM0 66.4h9.8v-9.8H0Zm90.6 11.3h9.8v-9.8h-9.8Zm-11.4 0H89v-9.8h-9.8Zm-11.3 0h9.8v-9.8H68Zm-11.3 0h9.8v-9.8h-9.8Zm-11.3 0H55v-9.8h-9.8Zm-11.3 0h9.8v-9.8H34Zm-11.4 0h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8ZM0 77.7h9.8v-9.8H0ZM56.6 89h9.8v-9.8h-9.8Zm-11.3 0H55v-9.8h-9.8ZM34 89h9.8v-9.8H34Zm-11.4 0h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8ZM0 89h9.8v-9.8H0Zm11.3 11.3h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8H0Zm0 11.3h9.8v-9.8H0Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#fff;fill-opacity:1\"/></svg>" : "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"113\" height=\"112\"><path d=\"M.3 32.4h9.8v-9.8H.3Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#e61973;fill-opacity:1\"/><path d=\"M22.8 9.8h9.7V0h-9.7Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#ffb919;fill-opacity:1\"/><path d=\"M11.6 100.3h9.7v-9.8h-9.7Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#1987e6;fill-opacity:1\"/><path d=\"M79 111.6h9.7v-9.8h-9.8Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#ff4b00;fill-opacity:1\"/><path d=\"M101.4 55h9.7v-9.7h-9.7Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#14e691;fill-opacity:1\"/><path d=\"M101.4 89h9.7v-9.8h-9.7Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#ff1928;fill-opacity:1\"/><path d=\"M67.7 9.8h9.7V0h-9.7Zm-11.2 0h9.7V0h-9.7Zm-11.3 0H55V0h-9.8ZM34 9.8h9.8V0H34Zm33.7 11.3h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm-11.3 0H55v-9.8h-9.8Zm-11.2 0h9.8v-9.8H34Zm56.2 0h9.7v-9.8h-9.7Zm-11.3 0h9.8v-9.8h-9.8Zm-56.1 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm78.6 11.3h9.7v-9.8h-9.7Zm-11.3 0h9.8v-9.8h-9.8Zm-56.1 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm0 11.3h9.7V34h-9.7Zm-11.3 0h9.8V34H.3Zm11.3 11.4h9.7v-9.9h-9.7Zm78.6 0h9.7v-9.9h-9.7Zm-11.3 0h9.8v-9.9h-9.8Zm-11.2 0h9.7v-9.9h-9.7Zm-11.2 0h9.7v-9.9h-9.7ZM.3 55h9.8v-9.9H.3ZM79 66.4h9.8v-9.8h-9.8Zm-11.2 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm-45 0h9.8v-9.8h-9.7Zm89.9 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm-89.9 0h9.8v-9.8H.3Zm101 11.3h9.8v-9.8h-9.7Zm-89.7 0h9.7v-9.8h-9.7Zm78.6 0h9.7v-9.8h-9.7Zm-89.9 0h9.8v-9.8H.3ZM90.2 89h9.7v-9.8h-9.7ZM.3 89h9.8v-9.8H.3ZM79 89h9.8v-9.8h-9.8Zm-56.1 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm78.6 11.3h9.7v-9.8h-9.7Zm-11.3 0h9.8v-9.8h-9.8Zm-11.2 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm-11.3 0H55v-9.8h-9.8Zm-11.2 0h9.8v-9.8H34Zm-11.2 0h9.7v-9.8h-9.7Zm45 11.3h9.6v-9.8h-9.7Zm-11.3 0h9.7v-9.8h-9.7Zm-11.3 0H55v-9.8h-9.8Zm-11.2 0h9.8v-9.8H34Zm-11.2 0h9.7v-9.8h-9.7Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#fff;fill-opacity:1\"/></svg>";
    var OX = st(O4, 'g');
    mt(OX, 'id', "digit-" + O7);
    ct(OX, "filter", "url(#motionFilter-" + O7 + ')');
    for (var OM = 0; OM < 5; OM++) {
      var OI = st(OX, 'g');
      ct(OI, "transform", "translate(0px, " + -OM * (O5 + 2 * O6) + "px)");
      OO = OF;
      OI.innerHTML = OO;
    }
    return OX;
  };
  var gt = function (O4, O5) {
    var O7 = st(O4, "filter");
    mt(O7, 'id', "motionFilter-" + O5, "width", "300%", 'x', "-100%");
    var O8 = st(O7, "feGaussianBlur");
    mt(O7, "class", "blurValues", 'in', "SourceGraphic", "stdDeviation", "0 0");
    return O8;
  };
  function pt(O4) {
    var O8;
    var O9 = O4.h;
    var OO = O4.t;
    var OF = O4.v;
    var OX = O4.i;
    var OM = O4.o;
    var OI = O4.l;
    var OS = O4.m;
    var Of = document.querySelector(OI);
    O8 = function () {
      var OC = window.innerWidth / window.innerHeight > 0.5625 ? 1920 / window.innerHeight : 1080 / window.innerWidth;
      ct(Of, "transform", "scale(" + (1.875 / OC).toFixed(4) + ')');
    };
    window.addEventListener("resize", O8);
    O8();
    var Or = function () {
      window.removeEventListener("resize", O8);
    };
    var Oi = 112 + 2 * O9;
    var Oz = Date.now();
    var OU = st(Of, "svg");
    var Oo = st(OU, "svg");
    mt(Oo, "mask", "url(#mask-" + Oz + ')');
    var OT = st(OU, "defs");
    !function (Ol, OC) {
      var Om = st(Ol, "linearGradient");
      mt(Om, 'id', "gradient-" + OC, 'x1', '0%', 'y1', '0%', 'x2', '0%', 'y2', "100%");
      (function () {
        for (var ON = 0; ON < arguments.length; ON++) {
          var Ob = st(Om, "stop");
          var OK = arguments[ON];
          mt(Ob, "offset", OK[0], "stop-color", "white", "stop-opacity", OK[1]);
        }
      })([0, 0], [0.2, 1], [0.8, 1], [1, 0]);
    }(OT, Oz);
    (function (Ol, OC) {
      var OB = st(Ol, "mask");
      mt(OB, 'id', "mask-" + OC);
      mt(st(OB, "rect"), 'x', 0, 'y', 0, "width", "100%", "height", "100%", "fill", "url(#gradient-" + OC + ')');
    })(OT, Oz);
    (function (Ol, OC) {
      var OY;
      OY = document.createElement("pre");
      Ol.appendChild(OY);
      OY.textContent = OC;
      ct(OY, "font", "20px Roboto, sans-serif", "color", "#ccc", "opacity", '0', "text-align", "center", "animation", "1.2s ease-in-out forwards fade-in");
    })(Of, OS);
    var OE = ['1', '1'].map(function (Ol, OC) {
      var OB = OC + '-' + Oz;
      return {
        'Z': Zt(Oo, 112, O9, OB, OC),
        'u': gt(OT, OB),
        'H': +Ol,
        'p': 0x0,
        'M': {
          'x': OC * (112 + OO) + OO / 2,
          'y': O9
        }
      };
    });
    !function (Ol, OC, OB) {
      mt(Ol, "viewBox", "0 0 " + OC + " " + OB);
      ct(Ol, "overflow", "hidden", "height", OB);
    }(OU, OE.length * (112 + OO), Oi);
    OE.forEach(function (Ol) {
      mt(Ol.Z, "transform", "translate(" + Ol.M.x + ", " + Ol.M.y + ')');
    });
    var OP = [];
    !function Ol() {
      OP.length = 0;
      OE.forEach(function (OB, Om) {
        var OY = OB.p * Oi;
        var Od = (75 + OB.H) * Oi;
        var ON = function (Ob) {
          var OQ = Ob.g;
          var Oq = Ob._to;
          var OD = Ob.o;
          var OJ = Ob.V;
          var OA = Ob._;
          var Og = Ob.k;
          var OL = Ob.D;
          var Oy = OQ;
          var Ox = undefined;
          var Ou = false;
          return function (OR) {
            if (!Ou) {
              if (undefined === Ox) {
                Ox = OR;
                OA(Oy);
              }
              var Oh;
              var Oj = Math.min(Math.max(OR - Ox - OJ, 0), OD) / OD;
              Og(Oy = ((Oh = Oj) <= 0.3 ? Oh * Oh : 1 + 1.25 * Math.pow(Oh - 1, 3) + 0.25 * Math.pow(Oh - 1, 2)) * (Oq - OQ) + OQ);
              if (1 === Oj) {
                Ou = true;
                OL(Oy);
              }
            }
          };
        }({
          'g': OY,
          '_to': Od,
          'o': OM,
          'V': (OE.length - 1 - Om) * OX + OF,
          '_': function () {},
          'k': function (Ob) {
            OB.M.y = O9 + Ob % (4 * Oi);
            mt(OB.Z, "transform", "translate(" + OB.M.x + ", " + OB.M.y + ')');
            var OQ = (OY + Od) / 2;
            var Oq = (+Math.abs(Math.abs(Math.abs(Ob - OQ) - OQ) - OY) / 100).toFixed(1);
            mt(OB.u, "stdDeviation", "0 " + Oq);
          },
          'D': function () {
            if (0 === Om) {
              if (document.querySelector(OI)) {
                Ol();
              } else {
                Op();
                Or();
              }
            }
          }
        });
        OP.push(ON);
      });
    }();
    var Ow;
    var Ot;
    Ow = function (OC) {
      OP.forEach(function (Om) {
        return Om(OC);
      });
    };
    (function OC(OB) {
      Ot = requestAnimationFrame(OC);
      Ow(OB);
    })(0);
    var Op = function () {
      cancelAnimationFrame(Ot);
    };
  }
  var Fd = {
    h: 0x14,
    t: 0x19,
    v: 0x190,
    i: 0xc8,
    o: 0x4b0,
    l: ".svg-loading",
    m: ''
  };
  var _t;
  var yt;
  var kt = `/${24}` + "/shared/";
  var Ht = '';
  window.GtmId = new String(window.GtmId);
  var bt = Q() ? 2015 : 5;
  var wt = k;
  var Et = Date.now();
  var St = C.or;
  if (St) {
    if (0 === (St = function (O4) {
      var O6;
      !function (OS) {
        OS.kReplacer = "[a-zA-Z=]";
      }(O6 || (O6 = {}));
      var O7 = "object" == typeof window ? window : global;
      var O8 = O7.parseInt;
      var O9 = O7.isNaN;
      var OO = O7.String;
      var OF = O7.RegExp;
      var OX = O7.Number;
      var OM = OF(O6.kReplacer, 'g');
      var OI = O8(null == O4 ? undefined : O4.substring(OX("0x0"), OX("0x2")), OX("0xa"));
      return O9(OI) && (null == O4 ? undefined : O4.includes('.')) ? O4 : null == O4 ? undefined : O4.substring(OX("0x2")).replace(OM, function (OS) {
        if ('=' === OS) {
          return '.';
        }
        var Or = OS.charCodeAt(0);
        var On = Or >= OX("0x61") ? OX("0x61") : OX("0x41");
        var OZ = (Or - On - OI + OX("0x1a")) % OX("0x1a") + On;
        return OO.fromCharCode(OZ);
      });
    }(St)).indexOf('//')) {
      St = location.protocol + St;
    } else if (!/^https?:/.test(St)) {
      St = location.protocol + '//' + St;
    }
    Ht = St + location.pathname.replace("index.html", '');
    kt = St + kt;
  }
  var Vt;
  var At = C.blockpage;
  if (At) {
    var Dt = document.createElement("div");
    Dt.id = "block-page";
    Dt.style.backgroundColor = '#' + At;
    document.body.appendChild(Dt);
  }
  if (Q()) {
    var $t = document.querySelector(".circle-loading");
    if (!(null === (yt = null == $t ? undefined : $t.parentElement) || undefined === yt)) {
      yt.removeChild($t);
    }
    var Nt = document.getElementById("initial-loader");
    if (Nt) {
      Nt.style.backgroundColor = "black";
    }
    (function (O4) {
      Fd.m = O4;
      pt(Fd);
    })(et(2));
  } else {
    var It = document.querySelector(".svg-loading");
    if (!(null === (_t = null == It ? undefined : It.parentElement) || undefined === _t)) {
      _t.removeChild(It);
    }
  }
  function Rt(O4) {
    if (undefined === O4) {
      O4 = 0;
    }
    if (confirm(et(O4))) {
      setTimeout(function () {
        location.reload();
      }, 500);
    }
  }
  function Tt(O4) {
    if (null != O4) {
      return Rt();
    }
    if ("undefined" == typeof shell) {
      Rt();
    } else {
      setTimeout(function () {
        var O6 = {
          SharedPath: kt,
          GameDir: Ht,
          AssetTable: "8c4c25a4b0.68714.json",
          ShellDir: "984721902a/",
          Plugins: "e02b9bf0d2,a346494745,589a728c8d,2fd142260e,2c6e37b73c,b85c56d865,c03a2652ad",
          Requirements: "minMemory=1024&minDiskSpace=1024&whiteList=chrome-59%2Cchrome%20webview-59%2Cfirefox-58%2Csafari-11%2Cedge-79&minOSVersion=iOS-11%2CAndroid-5%2CMacOS-10.10%2CWindows-7",
          LocalizedTitleKey: "WinWinWon.Name",
          SupportedLanguages: "en,en-stkus,zh,da,de,es,fr,tr,vi,it,nl,no,th,fi,id,ja,ko,pl,pt,ro,ru,sv,my,uk,az,bg,bn,cs,el,et,hi,hu,hy,lo,lt,mn,sh,si,sk,sq,uz,ar,fa,ur,pt-br",
          ThemeColor: "#F65100",
          LobbyMode: false,
          SupportXSMaxRatio: 2,
          AspectRatio: '',
          Orientation: 1,
          Name: "Win Win Won",
          Version: "5.22.0.2/6.15.0/5.2.0-0",
          Index: 24,
          Identifier: "com.pgsoft.slot.winwinwon",
          PluginDependencies: FC,
          EIF: 16777217,
          Ecma: bt,
          Platform: wt,
          Blobs: q,
          BootTime: Et
        };
        return shell.start(Vt, O6);
      }, 0);
    }
  }
  vt(kt + "984721902a/" + "index.json", 1, function (O4, O5) {
    if (null != O4) {
      return Rt();
    }
    var O7;
    O7 = (Vt = O5).version;
    if ("string" == typeof O7 && true && -1 !== function (O9, OO) {
      var OF = O9.split('-');
      var OX = OO.split('-');
      var OM = ft(OF[0], OX[0]);
      if (0 !== OM) {
        return OM;
      }
      var OI = OF[1];
      var OS = OX[1];
      return OI && !OS ? -1 : !OI && OS ? 1 : OI || OS ? ft(OI, OS) : 0;
    }(O7, "11.3.0-rc.1")) {
      vt(kt + "984721902a/" + Vt.main, 2, Tt);
    } else {
      Rt(1);
    }
  });
}();