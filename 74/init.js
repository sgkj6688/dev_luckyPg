!function () {
  'use strict';

  ;
  var Bh = {
    index: "b994a"
  };
  Bh.config = "11dec";
  var Bo = {
    index: "b994a",
    config: "8fe96"
  };
  var Bj = {
    index: "5d127",
    config: "5bb8f"
  };
  var Bm = {
    internal: Bh,
    resources: Bo,
    main: Bj
  };
  var BK = {
    platform: "web-mobile",
    groupList: ["default"],
    collisionMatrix: [[true]],
    hasResourcesBundle: true,
    hasStartSceneBundle: false,
    remoteBundles: [],
    subpackages: [],
    launchScene: "db://assets/default/scene/main.fire",
    orientation: "portrait",
    jsList: [],
    bundleVers: Bm
  };
  window.DEBUG = false;
  window.PREVIEW = false;
  window.EDITOR = false;
  // window.GtmId = "GTM-WV99ST2";
  window._CCSettings = BK;
  var BD = {
    c03a2652ad: ">=7.1.0-rc.1",
    e02b9bf0d2: ">=11.3.0-rc.1",
    a346494745: ">=10.3.0-rc.1"
  };
  BD["589a728c8d"] = ">=7.3.0-rc.1";
  BD["2fd142260e"] = ">=9.3.0-rc.1";
  BD["2c6e37b73c"] = ">=6.3.0-rc.1";
  BD.b85c56d865 = ">=5.2.0-rc.1";
  console.log("Game/Boot/Engine", "3.22.0.4/6.15.0/5.2.0-0");
  var M = navigator.userAgent;
  var k = 0;
  function H(x4) {
    var x6 = x4 + '';
    var x7 = (x4.stack || '') + '';
    var x8 = x6;
    if (x7) {
      if (0 === x7.indexOf(x6)) {
        x8 = x7;
      } else {
        x8 += "\n" + x7;
      }
    }
    var x9 = this.onFormat || window.onGAReceiveError;
    if (x9) {
      try {
        x8 = x9(x8);
      } catch (xx) {
        b(xx + '');
      }
    }
    return x8.replace(/https?:\/\/[^/]+([0-9A-Za-z/._-]+)\S*(:[0-9]+:[0-9]+)/g, "$1$2").replace(/https?:\/\/[^/]+/g, '');
  }
  function b(x5, x6) {
    var x8 = {
      description: x5,
      fatal: !!x6
    };
    // gtag("event", "exception", x8);
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
  var V = function (x4) {
    var x6 = Date.now();
    if (E !== x4 || x6 - S > 1000) {
      S = x6;
      E = x4;
      x = 0;
    } else {
      x++;
    }
    if (0 === x) {
      b(x4);
    } else {
      if (5 === x) {
        b(x4, 1);
        var x7 = this.onFrequent || window.onGAFrequentError;
        try {
          if (x7) {
            x7();
          }
        } catch (x8) {
          b(x8 + '');
        }
      } else if (x > 5) {
        S = x6;
      }
    }
  };
  function D(x5, x6, x7, x8, x9) {
    if (k > 3) {
      return false;
    }
    if (!x7 || !x8 || !x9) {
      return false;
    }
    var xE = "Uncaught " + H.call(D, x9);
    V.call(D, xE);
    return false;
  }
  D.report = function (x4, x5) {
    b("Uncaught " + H.call(this, x4), x5);
  };
  var $;
  var N;
  function R(x4) {
    if (!(k > 3)) {
      var x6 = x4.reason;
      if (null != x6) {
        var x7 = "Unhandled " + H.call(R, x6);
        V.call(R, x7);
      }
    }
  }
  R.report = function (x4, x5) {
    b("Unhandled " + H.call(this, x4), x5);
  };
  window.dataLayer = [];
  window.gtag = function () {
    dataLayer.push(arguments);
  };
  // dataLayer.push({
  //   'event': "gtm.js",
  //   'gtm.start': Date.now(),
  //   'app_name': "Mahjong Ways 2",
  //   'app_version': "3.22.0.4/6.15.0/5.2.0-0"
  // });
  // $ = "https://www.googletagmanager.com/gtm.js?id=".concat(GtmId);
  // (N = document.createElement("script")).async = true;
  // N.src = $;
  // document.head.appendChild(N);
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
    var x5 = "string" == typeof arguments[0] ? function (x6) {
      var x8 = x6[2];
      var x9 = x6[3];
      var xx = {
        S: x6[0],
        A: x6[1],
        $: xB
      };
      xx.N = xB;
      return xx;
      function xB() {
        if (null != this.I) {
          x8(this.I);
        } else if (undefined === x9) {
          x8(undefined, this.R);
        } else {
          x9(this.R);
        }
      }
    }(arguments) : arguments[0];
    if (2 === x5.A && undefined === x5.T) {
      (function (x6) {
        x6.C = false;
        var x8 = {
          'S': x6.S,
          'A': 0x2,
          '$': function () {
            x6.I = this.I;
            if (x6.$) {
              x6.$();
            }
          },
          'N': function () {
            var xx = this.R;
            var xB = x6.S;//URL.createObjectURL(xx);
            function xs(xA) {
              if (xA.filename === xB) {
                x6.I = xA.error;
                delete q[xB];
              }
            }
            window.addEventListener("error", xs);
            q[xB] = xx;//x6.S;
            var xE = document.createElement("script");
            xE.src = xB;
            xE.defer = true;
            xE.onload = function () {
              window.removeEventListener("error", xs);
              document.head.removeChild(xE);
              URL.revokeObjectURL(xB);
              W(x6);
            };
            document.head.appendChild(xE);
          },
          'T': x6
        };
        z(x8);
      })(x5);
    } else {
      (function (x6) {
        var x8 = new XMLHttpRequest();
        x8.open("GET", x6.S, true);
        try {
          if ("timeout" in x8) {
            x8.timeout = 60000;
          }
        } catch (x9) { }
        switch (x6.A) {
          case 1:
            x8.responseType = "json";
            break;
          case 3:
          case 2:
            x8.responseType = "";
        }
        x8.onload = function () {
          if (x8.status >= 200 && x8.status < 300 || 0 === x8.status && x8.response) {
            (function (xB, xE) {
              if (1 === xB.A && "string" == typeof xE) {
                try {
                  xE = JSON.parse(xE);
                } catch (xA) {
                  xB.I = xA;
                  xE = undefined;
                }
              }
              if (null == xB.I && null == xE) {
                xB.I = "invaliddata";
              } else {
                xB.R = xE;
              }
            })(x6, x8.response);
          } else {
            x6.I = ''.concat(x8.status, ": ").concat(x8.statusText);
          }
          W(x6);
        };
        x8.onerror = function () {
          x6.I = "onerror";
          W(x6);
        };
        x8.ontimeout = function () {
          x6.I = "ontimeout";
          W(x6);
        };
        x8.send();
      })(x5);
    }
  }
  var O;
  var q = Object.create(null);
  function W(x4) {
    if (null != x4.I) {
      var x6 = undefined === x4.C ? 0 : x4.C;
      !function (x7, x8, x9, xx) {
        if (x9 instanceof Error) {
          x9 = x9.message;
        }
        var xB = x7.split('?')[0];
        var xE = "load resource fail|G1002|src: ".concat(xB, "|reason: ").concat(x9);
        if (xx) {
          xE += "|retryCount: ".concat(xx);
        }
        gtag("event", "error", {
          'event_category': "game_shell",
          'event_label': xE
        });
      }(x4.S, 0, x4.I, x6);
      if (false !== x6 && ("onerror" === x4.I || "ontimeout" === x4.I) && x6 < 5) {
        x4.C = ++x6;
        x4.I = undefined;
        setTimeout(z, 1000 * (1 << x6), x4);
      } else if (x4.$) {
        x4.$();
      }
    } else if (x4.N) {
      x4.N();
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
    return function (x5) {
      var x7 = Object.keys(x5);
      for (var x8 = 0; x8 < x7.length; x8++) {
        var x9 = x5[x7[x8]];
        try {
          Function(x9);
        } catch (xx) {
          return false;
        }
      }
      return true;
    }(O) && function (x5) {
      var x7 = true;
      for (var x8 = 0; x8 < x5.length; x8++) {
        var x9 = x5[x8];
        var xx = x9[0];
        if (undefined === xx) {
          x7 = false;
          break;
        }
        for (var xB = 1; xB < x9.length; xB++) {
          if (undefined === xx[x9[xB]]) {
            x7 = false;
            break;
          }
        }
        if (!x7) {
          break;
        }
      }
      return x7;
    }(J);
  }
  var BO = {
    en: "Unable to load game. Press [OK] to refresh or [Cancel] to ignore.",
    zh: "未能加载游戏，点击\"确定\"进行重试或者\"取消\"。",
    th: "ไม่สามารถดาวน์โหลดเกมได้ ให้คลิกที่ ”ยืนยัน” เพื่อลองใหม่ หรือที่ “ยกเลิก” เพื่อออก",
    id: "Permainan tidak bisa diunduh. Klik ‘Konfirmasi’ untuk coba lagi atau ‘Batalkan’ untuk keluar.",
    vi: "Không thể tải về trò chơi. Nhấp vào ‘Xác nhận’ để thử lại hoặc ‘Hủy’ để thoát.",
    ja: "ゲームをダウンロードできません。[確認] をクリックしてもう一度試すか、[キャンセル] をクリックして終了してください。",
    ko: "게임을 다운로드할 수 없습니다. ‘확인’을 클릭하여 다시 시도하거나 ‘취소’를 클릭하여 종료하세요.",
    sv: "Spelet kan inte laddas ner. Klicka på Bekräfta för att försöka igen, eller på Avbryt för att lämna."
  };
  var BT = {
    en: "Sorry, this game cannot be loaded as the existing resources are out of date. Please try again later.",
    zh: "对不起，由于当前资源不是最新版本，因此游戏无法加载，请稍后再试。",
    th: "ขออภัย ไม่สามารถโหลดเกมนี้ได้เนื่องจากข้อมูลปัจจุบันไม่ใช่ข้อมูลล่าสุด กรุณาลองใหม่อีกครั้งในภายหลัง",
    id: "Maaf, permainan ini tidak bisa dimuat karena sumber daya yang ada sudah kedaluwarsa. Silakan coba lagi nanti.",
    vi: "Rất tiếc, không thể tải trò chơi này vì các tài nguyên hiện tại đã quá cũ. Vui lòng thử lại sau.",
    ja: "申し訳ありません。現在のリソースが古いため、このゲームを読み込むことはできません。後でもう一度お試しください。",
    ko: "죄송합니다.이 게임은 기존 리소스가 구식이므로로드 할 수 없습니다. 나중에 다시 시도 해주십시오.",
    sv: "Det här spelet kan inte laddas eftersom de nuvarande resurserna är inaktuella. Försök igen senare."
  };
  var Bf = {
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
  var BZ = {
    '0': BO,
    '1': BT
  };
  BZ['2'] = Bf;
  var tt = C.language || C.lang || C.l || navigator.language;
  var nt = tt.indexOf('-');
  function et(x4) {
    var x5 = BZ[x4];
    return x5 ? x5[tt] || x5.en : ''.concat(x4);
  }
  if (-1 !== nt) {
    tt = tt.substring(0, nt);
  }
  var it;
  var ot = undefined !== C.__sv && '' !== C.__sv;
  var at = false;
  var ht = [];
  function lt() {
    for (var x5 = function () {
      var x7;
      var x8;
      var x9 = ht.pop();
      if (null === it) {
        z.apply(undefined, x9);
      } else {
        x7 = x9[0];
        x8 = function (xx) {
          if (xx) {
            x9[0] = xx;
          }
          z.apply(undefined, x9);
        };
        it.getSignedUrl(x7).then(x8, function () {
          return x8('');
        });
      }
    }; ht.length;) {
      x5();
    }
  }
  var vt = ot ? function () {
    ht.push(arguments);
    if (undefined === it) {
      (function () {
        if (!at) {
          at = true;
          var x6 = C.__sv.substring(2, 4) + ".js";
          z(location.origin + "/loader/" + x6, 2, function (x7) {
            if (x7) {
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
  function ut(x4) {
    var x6 = parseInt(x4);
    return isNaN(x6) ? x4 : x6;
  }
  function ft(x4, x5) {
    var x7 = x4.split('.');
    var x8 = x5.split('.');
    var x9 = Math.max(x7.length, x8.length);
    for (var xx = 0; xx < x9; xx++) {
      var xB = ut(x7[xx] || 0);
      var xE = ut(x8[xx] || 0);
      if (xB < xE) {
        return -1;
      }
      if (xB > xE) {
        return 1;
      }
    }
    return 0;
  }
  function st(x5, x6) {
    var x9 = document.createElementNS("http://www.w3.org/2000/svg", x6);
    x5.appendChild(x9);
    return x9;
  }
  function ct() {
    var x5 = {
      ljIOf: function (xx, xB) {
        return xx < xB;
      }
    };
    x5.YvIxx = function (xx, xB) {
      return xx + xB;
    };
    var x8 = arguments[0];
    for (var x9 = 1; x9 < arguments.length; x9 += 2) {
      x8.style[arguments[x9]] = arguments[x5.YvIxx(x9, 1)];
    }
    return x8;
  }
  function mt() {
    var x8 = arguments[0];
    for (var x9 = 1; x9 < arguments.length; x9 += 2) {
      x8.setAttribute(arguments[x9], arguments[x9 + 1]);
    }
    return x8;
  }
  var Zt = function (x4, x5, x6, x7, x8) {
    var xx;
    var xB = 0 === x8 ? "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"112\" height=\"112\"><path d=\"M90.6 9.8h9.8V0h-9.8Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#ff6e00;fill-opacity:1\"/><path d=\"M0 21.1h9.8v-9.8H0Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#6414e6;fill-opacity:1\"/><path d=\"M11.3 111.6h9.8v-9.8h-9.8Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#19bee6;fill-opacity:1\"/><path d=\"M68 89h9.7v-9.8H68Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#e619dc;fill-opacity:1\"/><path d=\"M79.2 9.8H89V0h-9.8ZM68 9.8h9.8V0H68Zm-11.3 0h9.8V0h-9.8Zm-11.3 0H55V0h-9.8ZM34 9.8h9.8V0H34Zm-11.4 0h9.8V0h-9.8Zm-11.3 0h9.8V0h-9.8Zm79.3 11.3h9.8v-9.8h-9.8Zm-11.4 0H89v-9.8h-9.8Zm-11.3 0h9.8v-9.8H68Zm-11.3 0h9.8v-9.8h-9.8Zm-11.3 0H55v-9.8h-9.8Zm-11.3 0h9.8v-9.8H34Zm-11.4 0h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8ZM102 32.4h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8Zm-11.4 0H89v-9.8h-9.8Zm-67.9 0h9.8v-9.8h-9.8ZM0 32.4h9.8v-9.8H0Zm101.9 11.3h9.8V34h-9.8Zm-11.3 0h9.8V34h-9.8Zm-79.3 0h9.8V34h-9.8ZM0 43.7h9.8V34H0Zm101.9 11.4h9.8v-9.9h-9.8Zm-11.3 0h9.8v-9.9h-9.8Zm-79.3 0h9.8v-9.9h-9.8ZM0 55h9.8v-9.8H0Zm101.9 11.3h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8Zm-11.4 0H89v-9.8h-9.8Zm-67.9 0h9.8v-9.8h-9.8ZM0 66.4h9.8v-9.8H0Zm90.6 11.3h9.8v-9.8h-9.8Zm-11.4 0H89v-9.8h-9.8Zm-11.3 0h9.8v-9.8H68Zm-11.3 0h9.8v-9.8h-9.8Zm-11.3 0H55v-9.8h-9.8Zm-11.3 0h9.8v-9.8H34Zm-11.4 0h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8ZM0 77.7h9.8v-9.8H0ZM56.6 89h9.8v-9.8h-9.8Zm-11.3 0H55v-9.8h-9.8ZM34 89h9.8v-9.8H34Zm-11.4 0h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8ZM0 89h9.8v-9.8H0Zm11.3 11.3h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8H0Zm0 11.3h9.8v-9.8H0Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#fff;fill-opacity:1\"/></svg>" : "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"113\" height=\"112\"><path d=\"M.3 32.4h9.8v-9.8H.3Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#e61973;fill-opacity:1\"/><path d=\"M22.8 9.8h9.7V0h-9.7Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#ffb919;fill-opacity:1\"/><path d=\"M11.6 100.3h9.7v-9.8h-9.7Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#1987e6;fill-opacity:1\"/><path d=\"M79 111.6h9.7v-9.8h-9.8Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#ff4b00;fill-opacity:1\"/><path d=\"M101.4 55h9.7v-9.7h-9.7Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#14e691;fill-opacity:1\"/><path d=\"M101.4 89h9.7v-9.8h-9.7Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#ff1928;fill-opacity:1\"/><path d=\"M67.7 9.8h9.7V0h-9.7Zm-11.2 0h9.7V0h-9.7Zm-11.3 0H55V0h-9.8ZM34 9.8h9.8V0H34Zm33.7 11.3h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm-11.3 0H55v-9.8h-9.8Zm-11.2 0h9.8v-9.8H34Zm56.2 0h9.7v-9.8h-9.7Zm-11.3 0h9.8v-9.8h-9.8Zm-56.1 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm78.6 11.3h9.7v-9.8h-9.7Zm-11.3 0h9.8v-9.8h-9.8Zm-56.1 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm0 11.3h9.7V34h-9.7Zm-11.3 0h9.8V34H.3Zm11.3 11.4h9.7v-9.9h-9.7Zm78.6 0h9.7v-9.9h-9.7Zm-11.3 0h9.8v-9.9h-9.8Zm-11.2 0h9.7v-9.9h-9.7Zm-11.2 0h9.7v-9.9h-9.7ZM.3 55h9.8v-9.9H.3ZM79 66.4h9.8v-9.8h-9.8Zm-11.2 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm-45 0h9.8v-9.8h-9.7Zm89.9 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm-89.9 0h9.8v-9.8H.3Zm101 11.3h9.8v-9.8h-9.7Zm-89.7 0h9.7v-9.8h-9.7Zm78.6 0h9.7v-9.8h-9.7Zm-89.9 0h9.8v-9.8H.3ZM90.2 89h9.7v-9.8h-9.7ZM.3 89h9.8v-9.8H.3ZM79 89h9.8v-9.8h-9.8Zm-56.1 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm78.6 11.3h9.7v-9.8h-9.7Zm-11.3 0h9.8v-9.8h-9.8Zm-11.2 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm-11.3 0H55v-9.8h-9.8Zm-11.2 0h9.8v-9.8H34Zm-11.2 0h9.7v-9.8h-9.7Zm45 11.3h9.6v-9.8h-9.7Zm-11.3 0h9.7v-9.8h-9.7Zm-11.3 0H55v-9.8h-9.8Zm-11.2 0h9.8v-9.8H34Zm-11.2 0h9.7v-9.8h-9.7Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#fff;fill-opacity:1\"/></svg>";
    var xE = st(x4, 'g');
    mt(xE, 'id', "digit-" + x7);
    ct(xE, "filter", "url(#motionFilter-" + x7 + ')');
    for (var xs = 0; xs < 5; xs++) {
      var xA = st(xE, 'g');
      ct(xA, "transform", "translate(0px, " + -xs * (x5 + 2 * x6) + "px)");
      xx = xB;
      xA.innerHTML = xx;
    }
    return xE;
  };
  var gt = function (x4, x5) {
    var x7 = st(x4, "filter");
    mt(x7, 'id', "motionFilter-" + x5, "width", "300%", 'x', "-100%");
    var x8 = st(x7, "feGaussianBlur");
    mt(x7, "class", "blurValues", 'in', "SourceGraphic", "stdDeviation", "0 0");
    return x8;
  };
  function pt(x4) {
    var x8;
    var x9 = x4.h;
    var xx = x4.t;
    var xB = x4.v;
    var xE = x4.i;
    var xs = x4.o;
    var xA = x4.l;
    var xd = x4.m;
    var xR = document.querySelector(xA);
    x8 = function () {
      var xj = window.innerWidth / window.innerHeight > 0.5625 ? 1920 / window.innerHeight : 1080 / window.innerWidth;
      ct(xR, "transform", "scale(" + (1.875 / xj).toFixed(4) + ')');
    };
    window.addEventListener("resize", x8);
    x8();
    var xp = function () {
      window.removeEventListener("resize", x8);
    };
    var xU = 112 + 2 * x9;
    var xQ = Date.now();
    var xJ = st(xR, "svg");
    var xc = st(xJ, "svg");
    mt(xc, "mask", "url(#mask-" + xQ + ')');
    var xX = st(xJ, "defs");
    !function (xj, xm) {
      var xD = st(xj, "linearGradient");
      mt(xD, 'id', "gradient-" + xm, 'x1', '0%', 'y1', '0%', 'x2', '0%', 'y2', "100%");
      (function () {
        for (var xT = 0; xT < arguments.length; xT++) {
          var xf = st(xD, "stop");
          var xZ = arguments[xT];
          mt(xf, "offset", xZ[0], "stop-color", "white", "stop-opacity", xZ[1]);
        }
      })([0, 0], [0.2, 1], [0.8, 1], [1, 0]);
    }(xX, xQ);
    (function (xj, xm) {
      var xD = st(xj, "mask");
      mt(xD, 'id', "mask-" + xm);
      mt(st(xD, "rect"), 'x', 0, 'y', 0, "width", "100%", "height", "100%", "fill", "url(#gradient-" + xm + ')');
    })(xX, xQ);
    (function (xj, xm) {
      var xT;
      xT = document.createElement("pre");
      xj.appendChild(xT);
      xT.textContent = xm;
      ct(xT, "font", "20px Roboto, sans-serif", "color", "#ccc", "opacity", '0', "text-align", "center", "animation", "1.2s ease-in-out forwards fade-in");
    })(xR, xd);
    var xS = ['1', '1'].map(function (xj, xm) {
      var xD = xm + '-' + xQ;
      return {
        'Z': Zt(xc, 112, x9, xD, xm),
        'u': gt(xX, xD),
        'H': +xj,
        'p': 0x0,
        'M': {
          'x': xm * (112 + xx) + xx / 2,
          'y': x9
        }
      };
    });
    !function (xj, xm, xK) {
      mt(xj, "viewBox", "0 0 " + xm + " " + xK);
      ct(xj, "overflow", "hidden", "height", xK);
    }(xJ, xS.length * (112 + xx), xU);
    xS.forEach(function (xj) {
      mt(xj.Z, "transform", "translate(" + xj.M.x + ", " + xj.M.y + ')');
    });
    var xG = [];
    !function xj() {
      xG.length = 0;
      xS.forEach(function (xK, xD) {
        var xT = xK.p * xU;
        var xf = (75 + xK.H) * xU;
        var xZ = function (xH) {
          var xr = xH.g;
          var xn = xH._to;
          var xN = xH.o;
          var xe = xH.V;
          var xP = xH._;
          var xv = xH.k;
          var xL = xH.D;
          var xk = xr;
          var xy = undefined;
          var xu = false;
          return function (xC) {
            if (!xu) {
              if (undefined === xy) {
                xy = xC;
                xP(xk);
              }
              var xI;
              var xb = Math.min(Math.max(xC - xy - xe, 0), xN) / xN;
              xv(xk = ((xI = xb) <= 0.3 ? xI * xI : 1 + 1.25 * Math.pow(xI - 1, 3) + 0.25 * Math.pow(xI - 1, 2)) * (xn - xr) + xr);
              if (1 === xb) {
                xu = true;
                xL(xk);
              }
            }
          };
        }({
          'g': xT,
          '_to': xf,
          'o': xs,
          'V': (xS.length - 1 - xD) * xE + xB,
          '_': function () { },
          'k': function (xH) {
            xK.M.y = x9 + xH % (4 * xU);
            mt(xK.Z, "transform", "translate(" + xK.M.x + ", " + xK.M.y + ')');
            var xw = (xT + xf) / 2;
            var xr = (+Math.abs(Math.abs(Math.abs(xH - xw) - xw) - xT) / 100).toFixed(1);
            mt(xK.u, "stdDeviation", "0 " + xr);
          },
          'D': function () {
            if (0 === xD) {
              if (document.querySelector(xA)) {
                xj();
              } else {
                xo();
                xp();
              }
            }
          }
        });
        xG.push(xZ);
      });
    }();
    var xa;
    var xh;
    xa = function (xm) {
      xG.forEach(function (xD) {
        return xD(xm);
      });
    };
    (function xm(xK) {
      xh = requestAnimationFrame(xm);
      xa(xK);
    })(0);
    var xo = function () {
      cancelAnimationFrame(xh);
    };
  }
  var Bw = {
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
  var kt = `/${74}` + "/shared/";
  var Ht = '';
  // window.GtmId = new String(window.GtmId);
  var bt = Q() ? 2015 : 5;
  var wt = k;
  var Et = Date.now();
  var St = C.or;
  if (St) {
    if (0 === (St = function (x4) {
      var x6;
      !function (xd) {
        xd.kReplacer = "[a-zA-Z=]";
      }(x6 || (x6 = {}));
      var x7 = "object" == typeof window ? window : global;
      var x8 = x7.parseInt;
      var x9 = x7.isNaN;
      var xx = x7.String;
      var xB = x7.RegExp;
      var xE = x7.Number;
      var xs = xB(x6.kReplacer, 'g');
      var xA = x8(null == x4 ? undefined : x4.substring(xE("0x0"), xE("0x2")), xE("0xa"));
      return x9(xA) && (null == x4 ? undefined : x4.includes('.')) ? x4 : null == x4 ? undefined : x4.substring(xE("0x2")).replace(xs, function (xd) {
        if ('=' === xd) {
          return '.';
        }
        var xR = xd.charCodeAt(0);
        var xp = xR >= xE("0x61") ? xE("0x61") : xE("0x41");
        var xz = (xR - xp - xA + xE("0x1a")) % xE("0x1a") + xp;
        return xx.fromCharCode(xz);
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
    (function (x4) {
      Bw.m = x4;
      pt(Bw);
    })(et(2));
  } else {
    var It = document.querySelector(".svg-loading");
    if (!(null === (_t = null == It ? undefined : It.parentElement) || undefined === _t)) {
      _t.removeChild(It);
    }
  }
  function Rt(x4) {
    if (undefined === x4) {
      x4 = 0;
    }
    if (confirm(et(x4))) {
      setTimeout(function () {
        location.reload();
      }, 500);
    }
  }
  function Tt(x4) {
    if (null != x4) {
      return Rt();
    }
    if ("undefined" == typeof shell) {
      Rt();
    } else {
      setTimeout(function () {
        var x6 = {
          SharedPath: kt,
          GameDir: Ht,
          AssetTable: "84422daff3.f1655.json",
          ShellDir: "984721902a/",
          Plugins: "c03a2652ad,e02b9bf0d2,a346494745,589a728c8d,2fd142260e,2c6e37b73c,b85c56d865",
          Requirements: "minMemory=1024&minDiskSpace=1024&whiteList=chrome-59%2Cchrome%20webview-59%2Cfirefox-58%2Csafari-11%2Cedge-79&minOSVersion=iOS-11%2CAndroid-5%2CMacOS-10.10%2CWindows-7",
          LocalizedTitleKey: "Mahjong.Name",
          SupportedLanguages: "ar,az,bg,bn,cs,da,de,el,en,en-social,en-stkus,es,et,fa,fi,fr,hi,hu,hy,id,it,ja,ko,lo,lt,mn,my,nl,no,pl,pt,pt-br,ro,ru,sh,si,sk,sq,sv,th,tr,uk,ur,uz,vi,zh",
          ThemeColor: "#f54331",
          LobbyMode: false,
          SupportXSMaxRatio: 2,
          AspectRatio: '',
          Orientation: 1,
          Name: "Mahjong Ways 2",
          Version: "3.22.0.4/6.15.0/5.2.0-0",
          Index: 74,
          Identifier: "com.pgsoft.slot.mahjongways2",
          PluginDependencies: BD,
          EIF: 16777217,
          Ecma: bt,
          Platform: wt,
          Blobs: q,
          BootTime: Et
        };
        return shell.start(Vt, x6);
      }, 0);
    }
  }
  vt(kt + "984721902a/" + "index.json", 1, function (x4, x5) {
    if (null != x4) {
      return Rt();
    }
    var x7;
    x7 = (Vt = x5).version;
    if ("string" == typeof x7 && true && -1 !== function (x9, xx) {
      var xE = x9.split('-');
      var xs = xx.split('-');
      var xA = ft(xE[0], xs[0]);
      if (0 !== xA) {
        return xA;
      }
      var xd = xE[1];
      var xR = xs[1];
      return xd && !xR ? -1 : !xd && xR ? 1 : xd || xR ? ft(xd, xR) : 0;
    }(x7, "11.3.0-rc.1")) {
      vt(kt + "984721902a/" + Vt.main, 2, Tt);
    } else {
      Rt(1);
    }
  });
}();