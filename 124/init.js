!function () {
  'use strict';

  ;
  var ky = {
    index: "b994a",
    config: "b726b"
  };
  var kD = {
    index: "75f92",
    config: "db0cb"
  };
  var kF = {
    resources: ky,
    main: kD
  };
  var km = {
    platform: "web-mobile",
    groupList: ["default"],
    collisionMatrix: [[true]],
    hasResourcesBundle: true,
    hasStartSceneBundle: false,
    remoteBundles: [],
    subpackages: [],
    launchScene: "db://assets/imports/scenes/main.fire",
    orientation: '',
    jsList: [],
    bundleVers: kF
  };
  window.DEBUG = false;
  window.PREVIEW = false;
  window.EDITOR = false;
  window.GtmId = "GTM-WV99ST2";
  window._CCSettings = km;
  var kx = {
    e02b9bf0d2: ">=11.3.0-rc.1",
    a346494745: ">=10.3.0-rc.1",
    "589a728c8d": ">=7.3.0-rc.1",
    "2fd142260e": ">=9.3.0-rc.1",
    "2c6e37b73c": ">=6.3.0-rc.1",
    b85c56d865: ">=5.2.0-rc.1",
    c03a2652ad: ">=7.1.0-rc.1"
  };
  console.log("Game/Boot/Engine", "2.22.0.4/6.15.0/5.2.0-0");
  var M = navigator.userAgent;
  var k = 0;
  function H(R4) {
    var R6 = R4 + '';
    var R7 = (R4.stack || '') + '';
    var R8 = R6;
    if (R7) {
      if (0 === R7.indexOf(R6)) {
        R8 = R7;
      } else {
        R8 += "\n" + R7;
      }
    }
    var R9 = this.onFormat || window.onGAReceiveError;
    if (R9) {
      try {
        R8 = R9(R8);
      } catch (RR) {
        b(RR + '');
      }
    }
    return R8.replace(/https?:\/\/[^/]+([0-9A-Za-z/._-]+)\S*(:[0-9]+:[0-9]+)/g, "$1$2").replace(/https?:\/\/[^/]+/g, '');
  }
  function b(R5, R6) {
    var R8 = {
      description: R5,
      fatal: !!R6
    };
    gtag("event", "exception", R8);
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
  var V = function (R4) {
    var R6 = Date.now();
    if (E !== R4 || R6 - S > 1000) {
      S = R6;
      E = R4;
      x = 0;
    } else {
      x++;
    }
    if (0 === x) {
      b(R4);
    } else {
      if (5 === x) {
        b(R4, 1);
        var R7 = this.onFrequent || window.onGAFrequentError;
        try {
          if (R7) {
            R7();
          }
        } catch (R8) {
          b(R8 + '');
        }
      } else if (x > 5) {
        S = R6;
      }
    }
  };
  function D(R5, R6, R7, R8, R9) {
    if (k > 3) {
      return false;
    }
    if (!R7 || !R8 || !R9) {
      return false;
    }
    var Rd = "Uncaught " + H.call(D, R9);
    V.call(D, Rd);
    return false;
  }
  D.report = function (R4, R5) {
    b("Uncaught " + H.call(this, R4), R5);
  };
  var $;
  var N;
  function R(R4) {
    if (!(k > 3)) {
      var R6 = R4.reason;
      if (null != R6) {
        var R7 = "Unhandled " + H.call(R, R6);
        V.call(R, R7);
      }
    }
  }
  R.report = function (R4, R5) {
    b("Unhandled " + H.call(this, R4), R5);
  };
  window.dataLayer = [];
  window.gtag = function () {
    dataLayer.push(arguments);
  };
  dataLayer.push({
    'event': "gtm.js",
    'gtm.start': Date.now(),
    'app_name': "Battleground Royale",
    'app_version': "2.22.0.4/6.15.0/5.2.0-0"
  });
  //$ = "https://www.googletagmanager.com/gtm.js?id=".concat(GtmId);
  //(N = document.createElement("script")).async = true;
  //N.src = $;
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
    var R5 = "string" == typeof arguments[0] ? function (R6) {
      var R8 = R6[2];
      var R9 = R6[3];
      var RR = {
        S: R6[0],
        A: R6[1],
        $: Rk,
        N: Rk
      };
      return RR;
      function Rk() {
        if (null != this.I) {
          R8(this.I);
        } else if (undefined === R9) {
          R8(undefined, this.R);
        } else {
          R9(this.R);
        }
      }
    }(arguments) : arguments[0];
    if (2 === R5.A && undefined === R5.T) {
      (function (R6) {
        R6.C = false;
        var R8 = {
          'S': R6.S,
          'A': 0x2,
          '$': function () {
            R6.I = this.I;
            if (R6.$) {
              R6.$();
            }
          },
          'N': function () {
            var R9 = this.R;
            var RR = URL.createObjectURL(R9);
            function Rd(RI) {
              if (RI.filename === RR) {
                R6.I = RI.error;
                delete q[RR];
              }
            }
            window.addEventListener("error", Rd);
            q[RR] = R6.S;
            var Rk = document.createElement("script");
            Rk.src = RR;
            Rk.defer = true;
            Rk.onload = function () {
              window.removeEventListener("error", Rd);
              document.head.removeChild(Rk);
              URL.revokeObjectURL(RR);
              W(R6);
            };
            document.head.appendChild(Rk);
          },
          'T': R6
        };
        z(R8);
      })(R5);
    } else {
      (function (R6) {
        var R8 = new XMLHttpRequest();
        R8.open("GET", R6.S, true);
        try {
          if ("timeout" in R8) {
            R8.timeout = 60000;
          }
        } catch (R9) {}
        switch (R6.A) {
          case 1:
            R8.responseType = "json";
            break;
          case 3:
          case 2:
            R8.responseType = "blob";
        }
        R8.onload = function () {
          if (R8.status >= 200 && R8.status < 300 || 0 === R8.status && R8.response) {
            (function (Rk, Rd) {
              if (1 === Rk.A && "string" == typeof Rd) {
                try {
                  Rd = JSON.parse(Rd);
                } catch (Re) {
                  Rk.I = Re;
                  Rd = undefined;
                }
              }
              if (null == Rk.I && null == Rd) {
                Rk.I = "invaliddata";
              } else {
                Rk.R = Rd;
              }
            })(R6, R8.response);
          } else {
            R6.I = ''.concat(R8.status, ": ").concat(R8.statusText);
          }
          W(R6);
        };
        R8.onerror = function () {
          R6.I = "onerror";
          W(R6);
        };
        R8.ontimeout = function () {
          R6.I = "ontimeout";
          W(R6);
        };
        R8.send();
      })(R5);
    }
  }
  var O;
  var q = Object.create(null);
  function W(R4) {
    if (null != R4.I) {
      var R6 = undefined === R4.C ? 0 : R4.C;
      !function (R7, R8, R9, RR) {
        if (R9 instanceof Error) {
          R9 = R9.message;
        }
        var Rk = R7.split('?')[0];
        var Rd = "load resource fail|G1002|src: ".concat(Rk, "|reason: ").concat(R9);
        if (RR) {
          Rd += "|retryCount: ".concat(RR);
        }
        gtag("event", "error", {
          'event_category': "game_shell",
          'event_label': Rd
        });
      }(R4.S, 0, R4.I, R6);
      if (false !== R6 && ("onerror" === R4.I || "ontimeout" === R4.I) && R6 < 5) {
        R4.C = ++R6;
        R4.I = undefined;
        setTimeout(z, 1000 * (1 << R6), R4);
      } else if (R4.$) {
        R4.$();
      }
    } else if (R4.N) {
      R4.N();
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
    return function (R5) {
      var R7 = Object.keys(R5);
      for (var R8 = 0; R8 < R7.length; R8++) {
        var R9 = R5[R7[R8]];
        try {
          Function(R9);
        } catch (RR) {
          return false;
        }
      }
      return true;
    }(O) && function (R5) {
      var R7 = true;
      for (var R8 = 0; R8 < R5.length; R8++) {
        var R9 = R5[R8];
        var RR = R9[0];
        if (undefined === RR) {
          R7 = false;
          break;
        }
        for (var Rk = 1; Rk < R9.length; Rk++) {
          if (undefined === RR[R9[Rk]]) {
            R7 = false;
            break;
          }
        }
        if (!R7) {
          break;
        }
      }
      return R7;
    }(J);
  }
  var kp = {
    en: "Unable to load game. Press [OK] to refresh or [Cancel] to ignore.",
    zh: "未能加载游戏，点击\"确定\"进行重试或者\"取消\"。",
    th: "ไม่สามารถดาวน์โหลดเกมได้ ให้คลิกที่ ”ยืนยัน” เพื่อลองใหม่ หรือที่ “ยกเลิก” เพื่อออก",
    id: "Permainan tidak bisa diunduh. Klik ‘Konfirmasi’ untuk coba lagi atau ‘Batalkan’ untuk keluar.",
    vi: "Không thể tải về trò chơi. Nhấp vào ‘Xác nhận’ để thử lại hoặc ‘Hủy’ để thoát.",
    ja: "ゲームをダウンロードできません。[確認] をクリックしてもう一度試すか、[キャンセル] をクリックして終了してください。",
    ko: "게임을 다운로드할 수 없습니다. ‘확인’을 클릭하여 다시 시도하거나 ‘취소’를 클릭하여 종료하세요.",
    sv: "Spelet kan inte laddas ner. Klicka på Bekräfta för att försöka igen, eller på Avbryt för att lämna."
  };
  var kg = {
    en: "Sorry, this game cannot be loaded as the existing resources are out of date. Please try again later.",
    zh: "对不起，由于当前资源不是最新版本，因此游戏无法加载，请稍后再试。",
    th: "ขออภัย ไม่สามารถโหลดเกมนี้ได้เนื่องจากข้อมูลปัจจุบันไม่ใช่ข้อมูลล่าสุด กรุณาลองใหม่อีกครั้งในภายหลัง",
    id: "Maaf, permainan ini tidak bisa dimuat karena sumber daya yang ada sudah kedaluwarsa. Silakan coba lagi nanti.",
    vi: "Rất tiếc, không thể tải trò chơi này vì các tài nguyên hiện tại đã quá cũ. Vui lòng thử lại sau.",
    ja: "申し訳ありません。現在のリソースが古いため、このゲームを読み込むことはできません。後でもう一度お試しください。"
  };
  kg.ko = "죄송합니다.이 게임은 기존 리소스가 구식이므로로드 할 수 없습니다. 나중에 다시 시도 해주십시오.";
  kg.sv = "Det här spelet kan inte laddas eftersom de nuvarande resurserna är inaktuella. Försök igen senare.";
  var kq = {
    en: "DIFFERENCE MAKES THE DIFFERENCE",
    zh: "不  凡   成   就   非   凡",
    de: "DER UNTERSCHIED MACHT DEN UNTERSCHIED",
    es: "LA DIFERENCIA QUE MARCA LA DIFERENCIA",
    th: "ความแตกต่าง ที่เป็นตัวตัดสิน",
    id: "PERBEDAAN YANG MEMBUAT PERBEDAAN"
  };
  kq.vi = "SỰ KHÁC BIỆT TẠO NÊN SỰ KHÁC BIỆT";
  kq.ja = "違 い が   違 い を 生 み だ す";
  kq.ko = "차 이 를   만 드 는   차 이";
  kq.ru = "ИНДИВИДУАЛЬНОСТЬ ИМЕЕТ ЗНАЧЕНИЕ";
  kq.sv = "SKILLNADEN SOM GÖR SKILLNAD";
  var kH = {
    '0': kp,
    '1': kg,
    '2': kq
  };
  var tt = C.language || C.lang || C.l || navigator.language;
  var nt = tt.indexOf('-');
  function et(R4) {
    var R5 = kH[R4];
    return R5 ? R5[tt] || R5.en : ''.concat(R4);
  }
  if (-1 !== nt) {
    tt = tt.substring(0, nt);
  }
  var it;
  var ot = undefined !== C.__sv && '' !== C.__sv;
  var at = false;
  var ht = [];
  function lt() {
    for (var R5 = function () {
      var R7;
      var R8;
      var R9 = ht.pop();
      if (null === it) {
        z.apply(undefined, R9);
      } else {
        R7 = R9[0];
        R8 = function (RR) {
          if (RR) {
            R9[0] = RR;
          }
          z.apply(undefined, R9);
        };
        it.getSignedUrl(R7).then(R8, function () {
          return R8('');
        });
      }
    }; ht.length;) {
      R5();
    }
  }
  var vt = ot ? function () {
    ht.push(arguments);
    if (undefined === it) {
      (function () {
        if (!at) {
          at = true;
          var R6 = C.__sv.substring(2, 4) + ".js";
          z(location.origin + "/loader/" + R6, 2, function (R7) {
            if (R7) {
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
  function ut(R4) {
    var R6 = parseInt(R4);
    return isNaN(R6) ? R4 : R6;
  }
  function ft(R4, R5) {
    var R7 = R4.split('.');
    var R8 = R5.split('.');
    var R9 = Math.max(R7.length, R8.length);
    for (var RR = 0; RR < R9; RR++) {
      var Rk = ut(R7[RR] || 0);
      var Rd = ut(R8[RR] || 0);
      if (Rk < Rd) {
        return -1;
      }
      if (Rk > Rd) {
        return 1;
      }
    }
    return 0;
  }
  function st(R5, R6) {
    var R9 = document.createElementNS("http://www.w3.org/2000/svg", R6);
    R5.appendChild(R9);
    return R9;
  }
  function ct() {
    var R5 = {
      nteRt: function (RR, Rk) {
        return RR < Rk;
      }
    };
    R5.QVnKs = function (RR, Rk) {
      return RR + Rk;
    };
    var R8 = arguments[0];
    for (var R9 = 1; R9 < arguments.length; R9 += 2) {
      R8.style[arguments[R9]] = arguments[R5.QVnKs(R9, 1)];
    }
    return R8;
  }
  function mt() {
    var R8 = arguments[0];
    for (var R9 = 1; R9 < arguments.length; R9 += 2) {
      R8.setAttribute(arguments[R9], arguments[R9 + 1]);
    }
    return R8;
  }
  var Zt = function (R4, R5, R6, R7, R8) {
    var RR;
    var Rk = 0 === R8 ? "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"112\" height=\"112\"><path d=\"M90.6 9.8h9.8V0h-9.8Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#ff6e00;fill-opacity:1\"/><path d=\"M0 21.1h9.8v-9.8H0Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#6414e6;fill-opacity:1\"/><path d=\"M11.3 111.6h9.8v-9.8h-9.8Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#19bee6;fill-opacity:1\"/><path d=\"M68 89h9.7v-9.8H68Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#e619dc;fill-opacity:1\"/><path d=\"M79.2 9.8H89V0h-9.8ZM68 9.8h9.8V0H68Zm-11.3 0h9.8V0h-9.8Zm-11.3 0H55V0h-9.8ZM34 9.8h9.8V0H34Zm-11.4 0h9.8V0h-9.8Zm-11.3 0h9.8V0h-9.8Zm79.3 11.3h9.8v-9.8h-9.8Zm-11.4 0H89v-9.8h-9.8Zm-11.3 0h9.8v-9.8H68Zm-11.3 0h9.8v-9.8h-9.8Zm-11.3 0H55v-9.8h-9.8Zm-11.3 0h9.8v-9.8H34Zm-11.4 0h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8ZM102 32.4h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8Zm-11.4 0H89v-9.8h-9.8Zm-67.9 0h9.8v-9.8h-9.8ZM0 32.4h9.8v-9.8H0Zm101.9 11.3h9.8V34h-9.8Zm-11.3 0h9.8V34h-9.8Zm-79.3 0h9.8V34h-9.8ZM0 43.7h9.8V34H0Zm101.9 11.4h9.8v-9.9h-9.8Zm-11.3 0h9.8v-9.9h-9.8Zm-79.3 0h9.8v-9.9h-9.8ZM0 55h9.8v-9.8H0Zm101.9 11.3h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8Zm-11.4 0H89v-9.8h-9.8Zm-67.9 0h9.8v-9.8h-9.8ZM0 66.4h9.8v-9.8H0Zm90.6 11.3h9.8v-9.8h-9.8Zm-11.4 0H89v-9.8h-9.8Zm-11.3 0h9.8v-9.8H68Zm-11.3 0h9.8v-9.8h-9.8Zm-11.3 0H55v-9.8h-9.8Zm-11.3 0h9.8v-9.8H34Zm-11.4 0h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8ZM0 77.7h9.8v-9.8H0ZM56.6 89h9.8v-9.8h-9.8Zm-11.3 0H55v-9.8h-9.8ZM34 89h9.8v-9.8H34Zm-11.4 0h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8ZM0 89h9.8v-9.8H0Zm11.3 11.3h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8H0Zm0 11.3h9.8v-9.8H0Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#fff;fill-opacity:1\"/></svg>" : "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"113\" height=\"112\"><path d=\"M.3 32.4h9.8v-9.8H.3Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#e61973;fill-opacity:1\"/><path d=\"M22.8 9.8h9.7V0h-9.7Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#ffb919;fill-opacity:1\"/><path d=\"M11.6 100.3h9.7v-9.8h-9.7Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#1987e6;fill-opacity:1\"/><path d=\"M79 111.6h9.7v-9.8h-9.8Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#ff4b00;fill-opacity:1\"/><path d=\"M101.4 55h9.7v-9.7h-9.7Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#14e691;fill-opacity:1\"/><path d=\"M101.4 89h9.7v-9.8h-9.7Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#ff1928;fill-opacity:1\"/><path d=\"M67.7 9.8h9.7V0h-9.7Zm-11.2 0h9.7V0h-9.7Zm-11.3 0H55V0h-9.8ZM34 9.8h9.8V0H34Zm33.7 11.3h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm-11.3 0H55v-9.8h-9.8Zm-11.2 0h9.8v-9.8H34Zm56.2 0h9.7v-9.8h-9.7Zm-11.3 0h9.8v-9.8h-9.8Zm-56.1 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm78.6 11.3h9.7v-9.8h-9.7Zm-11.3 0h9.8v-9.8h-9.8Zm-56.1 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm0 11.3h9.7V34h-9.7Zm-11.3 0h9.8V34H.3Zm11.3 11.4h9.7v-9.9h-9.7Zm78.6 0h9.7v-9.9h-9.7Zm-11.3 0h9.8v-9.9h-9.8Zm-11.2 0h9.7v-9.9h-9.7Zm-11.2 0h9.7v-9.9h-9.7ZM.3 55h9.8v-9.9H.3ZM79 66.4h9.8v-9.8h-9.8Zm-11.2 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm-45 0h9.8v-9.8h-9.7Zm89.9 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm-89.9 0h9.8v-9.8H.3Zm101 11.3h9.8v-9.8h-9.7Zm-89.7 0h9.7v-9.8h-9.7Zm78.6 0h9.7v-9.8h-9.7Zm-89.9 0h9.8v-9.8H.3ZM90.2 89h9.7v-9.8h-9.7ZM.3 89h9.8v-9.8H.3ZM79 89h9.8v-9.8h-9.8Zm-56.1 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm78.6 11.3h9.7v-9.8h-9.7Zm-11.3 0h9.8v-9.8h-9.8Zm-11.2 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm-11.3 0H55v-9.8h-9.8Zm-11.2 0h9.8v-9.8H34Zm-11.2 0h9.7v-9.8h-9.7Zm45 11.3h9.6v-9.8h-9.7Zm-11.3 0h9.7v-9.8h-9.7Zm-11.3 0H55v-9.8h-9.8Zm-11.2 0h9.8v-9.8H34Zm-11.2 0h9.7v-9.8h-9.7Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#fff;fill-opacity:1\"/></svg>";
    var Rd = st(R4, 'g');
    mt(Rd, 'id', "digit-" + R7);
    ct(Rd, "filter", "url(#motionFilter-" + R7 + ')');
    for (var RI = 0; RI < 5; RI++) {
      var Re = st(Rd, 'g');
      ct(Re, "transform", "translate(0px, " + -RI * (R5 + 2 * R6) + "px)");
      RR = Rk;
      Re.innerHTML = RR;
    }
    return Rd;
  };
  var gt = function (R4, R5) {
    var R7 = st(R4, "filter");
    mt(R7, 'id', "motionFilter-" + R5, "width", "300%", 'x', "-100%");
    var R8 = st(R7, "feGaussianBlur");
    mt(R7, "class", "blurValues", 'in', "SourceGraphic", "stdDeviation", "0 0");
    return R8;
  };
  function pt(R4) {
    var R8;
    var R9 = R4.h;
    var RR = R4.t;
    var Rk = R4.v;
    var Rd = R4.i;
    var RI = R4.o;
    var Re = R4.l;
    var RY = R4.m;
    var RV = document.querySelector(Re);
    R8 = function () {
      var RF = window.innerWidth / window.innerHeight > 0.5625 ? 1920 / window.innerHeight : 1080 / window.innerWidth;
      ct(RV, "transform", "scale(" + (1.875 / RF).toFixed(4) + ')');
    };
    window.addEventListener("resize", R8);
    R8();
    var RO = function () {
      window.removeEventListener("resize", R8);
    };
    var Rh = 112 + 2 * R9;
    var Rz = Date.now();
    var RT = st(RV, "svg");
    var Rv = st(RT, "svg");
    mt(Rv, "mask", "url(#mask-" + Rz + ')');
    var RN = st(RT, "defs");
    !function (RF, Rm) {
      var Rx = st(RF, "linearGradient");
      mt(Rx, 'id', "gradient-" + Rm, 'x1', '0%', 'y1', '0%', 'x2', '0%', 'y2', "100%");
      (function () {
        for (var Rg = 0; Rg < arguments.length; Rg++) {
          var Rq = st(Rx, "stop");
          var RH = arguments[Rg];
          mt(Rq, "offset", RH[0], "stop-color", "white", "stop-opacity", RH[1]);
        }
      })([0, 0], [0.2, 1], [0.8, 1], [1, 0]);
    }(RN, Rz);
    (function (RF, Rm) {
      var RG = st(RF, "mask");
      mt(RG, 'id', "mask-" + Rm);
      mt(st(RG, "rect"), 'x', 0, 'y', 0, "width", "100%", "height", "100%", "fill", "url(#gradient-" + Rm + ')');
    })(RN, Rz);
    (function (RF, Rm) {
      var Rq;
      Rq = document.createElement("pre");
      RF.appendChild(Rq);
      Rq.textContent = Rm;
      ct(Rq, "font", "20px Roboto, sans-serif", "color", "#ccc", "opacity", '0', "text-align", "center", "animation", "1.2s ease-in-out forwards fade-in");
    })(RV, RY);
    var Rr = ['1', '1'].map(function (RF, Rm) {
      var Rx = Rm + '-' + Rz;
      return {
        'Z': Zt(Rv, 112, R9, Rx, Rm),
        'u': gt(RN, Rx),
        'H': +RF,
        'p': 0x0,
        'M': {
          'x': Rm * (112 + RR) + RR / 2,
          'y': R9
        }
      };
    });
    !function (RF, Rm, Rx) {
      mt(RF, "viewBox", "0 0 " + Rm + " " + Rx);
      ct(RF, "overflow", "hidden", "height", Rx);
    }(RT, Rr.length * (112 + RR), Rh);
    Rr.forEach(function (RF) {
      mt(RF.Z, "transform", "translate(" + RF.M.x + ", " + RF.M.y + ')');
    });
    var RC = [];
    !function RF() {
      RC.length = 0;
      Rr.forEach(function (Rx, RG) {
        var Rg = Rx.p * Rh;
        var Rq = (75 + Rx.H) * Rh;
        var RH = function (RU) {
          var Ru = RU.g;
          var Rc = RU._to;
          var RS = RU.o;
          var Rl = RU.V;
          var RP = RU._;
          var RW = RU.k;
          var Rb = RU.D;
          var RZ = Ru;
          var Rf = undefined;
          var Rs = false;
          return function (RM) {
            if (!Rs) {
              if (undefined === Rf) {
                Rf = RM;
                RP(RZ);
              }
              var Ra;
              var Ri = Math.min(Math.max(RM - Rf - Rl, 0), RS) / RS;
              RW(RZ = ((Ra = Ri) <= 0.3 ? Ra * Ra : 1 + 1.25 * Math.pow(Ra - 1, 3) + 0.25 * Math.pow(Ra - 1, 2)) * (Rc - Ru) + Ru);
              if (1 === Ri) {
                Rs = true;
                Rb(RZ);
              }
            }
          };
        }({
          'g': Rg,
          '_to': Rq,
          'o': RI,
          'V': (Rr.length - 1 - RG) * Rd + Rk,
          '_': function () {},
          'k': function (RU) {
            Rx.M.y = R9 + RU % (4 * Rh);
            mt(Rx.Z, "transform", "translate(" + Rx.M.x + ", " + Rx.M.y + ')');
            var Rw = (Rg + Rq) / 2;
            var Ru = (+Math.abs(Math.abs(Math.abs(RU - Rw) - Rw) - Rg) / 100).toFixed(1);
            mt(Rx.u, "stdDeviation", "0 " + Ru);
          },
          'D': function () {
            if (0 === RG) {
              if (document.querySelector(Re)) {
                RF();
              } else {
                RD();
                RO();
              }
            }
          }
        });
        RC.push(RH);
      });
    }();
    var RK;
    var Ry;
    RK = function (Rm) {
      RC.forEach(function (RG) {
        return RG(Rm);
      });
    };
    (function Rm(Rx) {
      Ry = requestAnimationFrame(Rm);
      RK(Rx);
    })(0);
    var RD = function () {
      cancelAnimationFrame(Ry);
    };
  }
  var kU = {
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
  var kt = `/${124}` + "/shared/";
  var Ht = '';
  window.GtmId = new String(window.GtmId);
  var bt = Q() ? 2015 : 5;
  var wt = k;
  var Et = Date.now();
  var St = C.or;
  if (St) {
    if (0 === (St = function (R4) {
      var R6;
      !function (RY) {
        RY.kReplacer = "[a-zA-Z=]";
      }(R6 || (R6 = {}));
      var R7 = "object" == typeof window ? window : global;
      var R8 = R7.parseInt;
      var R9 = R7.isNaN;
      var RR = R7.String;
      var Rk = R7.RegExp;
      var Rd = R7.Number;
      var RI = Rk(R6.kReplacer, 'g');
      var Re = R8(null == R4 ? undefined : R4.substring(Rd("0x0"), Rd("0x2")), Rd("0xa"));
      return R9(Re) && (null == R4 ? undefined : R4.includes('.')) ? R4 : null == R4 ? undefined : R4.substring(Rd("0x2")).replace(RI, function (RY) {
        if ('=' === RY) {
          return '.';
        }
        var RO = RY.charCodeAt(0);
        var RX = RO >= Rd("0x61") ? Rd("0x61") : Rd("0x41");
        var RB = (RO - RX - Re + Rd("0x1a")) % Rd("0x1a") + RX;
        return RR.fromCharCode(RB);
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
    (function (R4) {
      kU.m = R4;
      pt(kU);
    })(et(2));
  } else {
    var It = document.querySelector(".svg-loading");
    if (!(null === (_t = null == It ? undefined : It.parentElement) || undefined === _t)) {
      _t.removeChild(It);
    }
  }
  function Rt(R4) {
    if (undefined === R4) {
      R4 = 0;
    }
    if (confirm(et(R4))) {
      setTimeout(function () {
        location.reload();
      }, 500);
    }
  }
  function Tt(R4) {
    if (null != R4) {
      return Rt();
    }
    if ("undefined" == typeof shell) {
      Rt();
    } else {
      setTimeout(function () {
        var R6 = {
          SharedPath: kt,
          GameDir: Ht,
          AssetTable: "e179cd4417.6336f.json",
          ShellDir: "984721902a/",
          Plugins: "e02b9bf0d2,a346494745,589a728c8d,2fd142260e,2c6e37b73c,b85c56d865,c03a2652ad",
          Requirements: "minMemory=1024&minDiskSpace=1024&whiteList=chrome-59%2Cchrome%20webview-59%2Cfirefox-58%2Csafari-11%2Cedge-79&minOSVersion=iOS-11%2CAndroid-5%2CMacOS-10.10%2CWindows-7",
          LocalizedTitleKey: "BattlegroundRoyale.GameTitle",
          SupportedLanguages: "ar,az,bg,bn,cs,da,de,el,en,en-stkus,es,et,fa,fi,fr,hi,hu,hy,id,it,ja,ko,lo,lt,mn,my,nl,no,pl,pt,pt-br,ro,ru,sh,si,sk,sq,sv,th,tr,uk,ur,uz,vi,zh",
          ThemeColor: "#94b842",
          LobbyMode: false,
          SupportXSMaxRatio: 2,
          AspectRatio: '',
          Orientation: 1,
          Name: "Battleground Royale",
          Version: "2.22.0.4/6.15.0/5.2.0-0",
          Index: 124,
          Identifier: "com.pgsoft.slot.transform-wild34543",
          PluginDependencies: kx,
          EIF: 16777217,
          Ecma: bt,
          Platform: wt,
          Blobs: q,
          BootTime: Et
        };
        return shell.start(Vt, R6);
      }, 0);
    }
  }
  vt(kt + "984721902a/" + "index.json", 1, function (R4, R5) {
    if (null != R4) {
      return Rt();
    }
    var R7;
    R7 = (Vt = R5).version;
    if ("string" == typeof R7 && true && -1 !== function (R9, RR) {
      var Rd = R9.split('-');
      var RI = RR.split('-');
      var Re = ft(Rd[0], RI[0]);
      if (0 !== Re) {
        return Re;
      }
      var RY = Rd[1];
      var RV = RI[1];
      return RY && !RV ? -1 : !RY && RV ? 1 : RY || RV ? ft(RY, RV) : 0;
    }(R7, "11.3.0-rc.1")) {
      vt(kt + "984721902a/" + Vt.main, 2, Tt);
    } else {
      Rt(1);
    }
  });
}();