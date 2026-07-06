!function () {
  'use strict';

  ;
  var mC = {
    index: "b994a"
  };
  mC.config = "f81b4";
  var mT = {
    index: "efb1a",
    config: "9da81"
  };
  var mM = {
    resources: mC,
    main: mT
  };
  var mP = {
    platform: "web-mobile",
    groupList: ["additive", "screen"],
    collisionMatrix: [[true], [false, false]],
    hasResourcesBundle: true,
    hasStartSceneBundle: false,
    remoteBundles: [],
    subpackages: [],
    launchScene: "db://assets/default/scene/main.fire",
    orientation: '',
    jsList: [],
    bundleVers: mM
  };
  window.DEBUG = false;
  window.PREVIEW = false;
  window.EDITOR = false;
  window.GtmId = "GTM-WV99ST2";
  window._CCSettings = mP;
  var mc = {
    e02b9bf0d2: ">=11.3.0-rc.1",
    a346494745: ">=10.3.0-rc.1",
    "589a728c8d": ">=7.3.0-rc.1",
    "2fd142260e": ">=9.3.0-rc.1",
    "2c6e37b73c": ">=6.3.0-rc.1",
    b85c56d865: ">=5.2.0-rc.1",
    c03a2652ad: ">=7.1.0-rc.1"
  };
  console.log("Game/Boot/Engine", "3.23.0.1/6.15.0/5.2.0-0");
  var M = navigator.userAgent;
  var k = 0;
  function H(I4) {
    var I6 = I4 + '';
    var I7 = (I4.stack || '') + '';
    var I8 = I6;
    if (I7) {
      if (0 === I7.indexOf(I6)) {
        I8 = I7;
      } else {
        I8 += "\n" + I7;
      }
    }
    var I9 = this.onFormat || window.onGAReceiveError;
    if (I9) {
      try {
        I8 = I9(I8);
      } catch (II) {
        b(II + '');
      }
    }
    return I8.replace(/https?:\/\/[^/]+([0-9A-Za-z/._-]+)\S*(:[0-9]+:[0-9]+)/g, "$1$2").replace(/https?:\/\/[^/]+/g, '');
  }
  function b(I5, I6) {
    var I8 = {
      description: I5,
      fatal: !!I6
    };
    gtag("event", "exception", I8);
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
  var V = function (I4) {
    var I6 = Date.now();
    if (E !== I4 || I6 - S > 1000) {
      S = I6;
      E = I4;
      x = 0;
    } else {
      x++;
    }
    if (0 === x) {
      b(I4);
    } else {
      if (5 === x) {
        b(I4, 1);
        var I7 = this.onFrequent || window.onGAFrequentError;
        try {
          if (I7) {
            I7();
          }
        } catch (I8) {
          b(I8 + '');
        }
      } else if (x > 5) {
        S = I6;
      }
    }
  };
  function D(I5, I6, I7, I8, I9) {
    if (k > 3) {
      return false;
    }
    if (!I7 || !I8 || !I9) {
      return false;
    }
    var IJ = "Uncaught " + H.call(D, I9);
    V.call(D, IJ);
    return false;
  }
  D.report = function (I4, I5) {
    b("Uncaught " + H.call(this, I4), I5);
  };
  var $;
  var N;
  function R(I4) {
    if (!(k > 3)) {
      var I6 = I4.reason;
      if (null != I6) {
        var I7 = "Unhandled " + H.call(R, I6);
        V.call(R, I7);
      }
    }
  }
  R.report = function (I4, I5) {
    b("Unhandled " + H.call(this, I4), I5);
  };
  window.dataLayer = [];
  window.gtag = function () {
    dataLayer.push(arguments);
  };
  dataLayer.push({
    'event': "gtm.js",
    'gtm.start': Date.now(),
    'app_name': "Bali Vacation",
    'app_version': "3.23.0.1/6.15.0/5.2.0-0"
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
    var I5 = "string" == typeof arguments[0] ? function (I6) {
      var I8 = I6[2];
      var I9 = I6[3];
      var II = {
        S: I6[0],
        A: I6[1],
        $: Im,
        N: Im
      };
      return II;
      function Im() {
        if (null != this.I) {
          I8(this.I);
        } else if (undefined === I9) {
          I8(undefined, this.R);
        } else {
          I9(this.R);
        }
      }
    }(arguments) : arguments[0];
    if (2 === I5.A && undefined === I5.T) {
      (function (I6) {
        I6.C = false;
        var I8 = {
          'S': I6.S,
          'A': 0x2,
          '$': function () {
            I6.I = this.I;
            if (I6.$) {
              I6.$();
            }
          },
          'N': function () {
            var II = this.R;
            var Im = URL.createObjectURL(II);
            function Il(IY) {
              if (IY.filename === Im) {
                I6.I = IY.error;
                delete q[Im];
              }
            }
            window.addEventListener("error", Il);
            q[Im] = I6.S;
            var IJ = document.createElement("script");
            IJ.src = Im;
            IJ.defer = true;
            IJ.onload = function () {
              window.removeEventListener("error", Il);
              document.head.removeChild(IJ);
              URL.revokeObjectURL(Im);
              W(I6);
            };
            document.head.appendChild(IJ);
          },
          'T': I6
        };
        z(I8);
      })(I5);
    } else {
      (function (I6) {
        var I8 = new XMLHttpRequest();
        I8.open("GET", I6.S, true);
        try {
          if ("timeout" in I8) {
            I8.timeout = 60000;
          }
        } catch (I9) {}
        switch (I6.A) {
          case 1:
            I8.responseType = "json";
            break;
          case 3:
          case 2:
            I8.responseType = "blob";
        }
        I8.onload = function () {
          if (I8.status >= 200 && I8.status < 300 || 0 === I8.status && I8.response) {
            (function (Im, IJ) {
              if (1 === Im.A && "string" == typeof IJ) {
                try {
                  IJ = JSON.parse(IJ);
                } catch (IY) {
                  Im.I = IY;
                  IJ = undefined;
                }
              }
              if (null == Im.I && null == IJ) {
                Im.I = "invaliddata";
              } else {
                Im.R = IJ;
              }
            })(I6, I8.response);
          } else {
            I6.I = ''.concat(I8.status, ": ").concat(I8.statusText);
          }
          W(I6);
        };
        I8.onerror = function () {
          I6.I = "onerror";
          W(I6);
        };
        I8.ontimeout = function () {
          I6.I = "ontimeout";
          W(I6);
        };
        I8.send();
      })(I5);
    }
  }
  var O;
  var q = Object.create(null);
  function W(I4) {
    if (null != I4.I) {
      var I6 = undefined === I4.C ? 0 : I4.C;
      !function (I7, I8, I9, II) {
        if (I9 instanceof Error) {
          I9 = I9.message;
        }
        var IJ = I7.split('?')[0];
        var Il = "load resource fail|G1002|src: ".concat(IJ, "|reason: ").concat(I9);
        if (II) {
          Il += "|retryCount: ".concat(II);
        }
        gtag("event", "error", {
          'event_category': "game_shell",
          'event_label': Il
        });
      }(I4.S, 0, I4.I, I6);
      if (false !== I6 && ("onerror" === I4.I || "ontimeout" === I4.I) && I6 < 5) {
        I4.C = ++I6;
        I4.I = undefined;
        setTimeout(z, 1000 * (1 << I6), I4);
      } else if (I4.$) {
        I4.$();
      }
    } else if (I4.N) {
      I4.N();
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
    return function (I5) {
      var I7 = Object.keys(I5);
      for (var I8 = 0; I8 < I7.length; I8++) {
        var I9 = I5[I7[I8]];
        try {
          Function(I9);
        } catch (II) {
          return false;
        }
      }
      return true;
    }(O) && function (I5) {
      var I7 = true;
      for (var I8 = 0; I8 < I5.length; I8++) {
        var I9 = I5[I8];
        var II = I9[0];
        if (undefined === II) {
          I7 = false;
          break;
        }
        for (var Im = 1; Im < I9.length; Im++) {
          if (undefined === II[I9[Im]]) {
            I7 = false;
            break;
          }
        }
        if (!I7) {
          break;
        }
      }
      return I7;
    }(J);
  }
  var mE = {
    en: "Unable to load game. Press [OK] to refresh or [Cancel] to ignore.",
    zh: "未能加载游戏，点击\"确定\"进行重试或者\"取消\"。",
    th: "ไม่สามารถดาวน์โหลดเกมได้ ให้คลิกที่ ”ยืนยัน” เพื่อลองใหม่ หรือที่ “ยกเลิก” เพื่อออก",
    id: "Permainan tidak bisa diunduh. Klik ‘Konfirmasi’ untuk coba lagi atau ‘Batalkan’ untuk keluar.",
    vi: "Không thể tải về trò chơi. Nhấp vào ‘Xác nhận’ để thử lại hoặc ‘Hủy’ để thoát.",
    ja: "ゲームをダウンロードできません。[確認] をクリックしてもう一度試すか、[キャンセル] をクリックして終了してください。",
    ko: "게임을 다운로드할 수 없습니다. ‘확인’을 클릭하여 다시 시도하거나 ‘취소’를 클릭하여 종료하세요.",
    sv: "Spelet kan inte laddas ner. Klicka på Bekräfta för att försöka igen, eller på Avbryt för att lämna."
  };
  var mQ = {
    en: "Sorry, this game cannot be loaded as the existing resources are out of date. Please try again later.",
    zh: "对不起，由于当前资源不是最新版本，因此游戏无法加载，请稍后再试。",
    th: "ขออภัย ไม่สามารถโหลดเกมนี้ได้เนื่องจากข้อมูลปัจจุบันไม่ใช่ข้อมูลล่าสุด กรุณาลองใหม่อีกครั้งในภายหลัง",
    id: "Maaf, permainan ini tidak bisa dimuat karena sumber daya yang ada sudah kedaluwarsa. Silakan coba lagi nanti.",
    vi: "Rất tiếc, không thể tải trò chơi này vì các tài nguyên hiện tại đã quá cũ. Vui lòng thử lại sau.",
    ja: "申し訳ありません。現在のリソースが古いため、このゲームを読み込むことはできません。後でもう一度お試しください。",
    ko: "죄송합니다.이 게임은 기존 리소스가 구식이므로로드 할 수 없습니다. 나중에 다시 시도 해주십시오.",
    sv: "Det här spelet kan inte laddas eftersom de nuvarande resurserna är inaktuella. Försök igen senare."
  };
  var mp = {
    en: "DIFFERENCE MAKES THE DIFFERENCE",
    zh: "不  凡   成   就   非   凡"
  };
  mp.de = "DER UNTERSCHIED MACHT DEN UNTERSCHIED";
  mp.es = "LA DIFERENCIA QUE MARCA LA DIFERENCIA";
  mp.th = "ความแตกต่าง ที่เป็นตัวตัดสิน";
  mp.id = "PERBEDAAN YANG MEMBUAT PERBEDAAN";
  mp.vi = "SỰ KHÁC BIỆT TẠO NÊN SỰ KHÁC BIỆT";
  mp.ja = "違 い が   違 い を 生 み だ す";
  mp.ko = "차 이 를   만 드 는   차 이";
  mp.ru = "ИНДИВИДУАЛЬНОСТЬ ИМЕЕТ ЗНАЧЕНИЕ";
  mp.sv = "SKILLNADEN SOM GÖR SKILLNAD";
  var mS = {
    '0': mE,
    '1': mQ,
    '2': mp
  };
  var tt = C.language || C.lang || C.l || navigator.language;
  var nt = tt.indexOf('-');
  function et(I4) {
    var I5 = mS[I4];
    return I5 ? I5[tt] || I5.en : ''.concat(I4);
  }
  if (-1 !== nt) {
    tt = tt.substring(0, nt);
  }
  var it;
  var ot = undefined !== C.__sv && '' !== C.__sv;
  var at = false;
  var ht = [];
  function lt() {
    for (var I5 = function () {
      var I7;
      var I8;
      var I9 = ht.pop();
      if (null === it) {
        z.apply(undefined, I9);
      } else {
        I7 = I9[0];
        I8 = function (II) {
          if (II) {
            I9[0] = II;
          }
          z.apply(undefined, I9);
        };
        it.getSignedUrl(I7).then(I8, function () {
          return I8('');
        });
      }
    }; ht.length;) {
      I5();
    }
  }
  var vt = ot ? function () {
    ht.push(arguments);
    if (undefined === it) {
      (function () {
        if (!at) {
          at = true;
          var I6 = C.__sv.substring(2, 4) + ".js";
          z(location.origin + "/loader/" + I6, 2, function (I7) {
            if (I7) {
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
  function ut(I4) {
    var I6 = parseInt(I4);
    return isNaN(I6) ? I4 : I6;
  }
  function ft(I4, I5) {
    var I7 = I4.split('.');
    var I8 = I5.split('.');
    var I9 = Math.max(I7.length, I8.length);
    for (var II = 0; II < I9; II++) {
      var Im = ut(I7[II] || 0);
      var IJ = ut(I8[II] || 0);
      if (Im < IJ) {
        return -1;
      }
      if (Im > IJ) {
        return 1;
      }
    }
    return 0;
  }
  function st(I5, I6) {
    var I9 = document.createElementNS("http://www.w3.org/2000/svg", I6);
    I5.appendChild(I9);
    return I9;
  }
  function ct() {
    var I8 = arguments[0];
    for (var I9 = 1; I9 < arguments.length; I9 += 2) {
      I8.style[arguments[I9]] = arguments[I9 + 1];
    }
    return I8;
  }
  function mt() {
    var I5 = {
      TkZww: function (II, Im) {
        return II < Im;
      }
    };
    I5.oaRgG = function (II, Im) {
      return II + Im;
    };
    var I8 = arguments[0];
    for (var I9 = 1; I9 < arguments.length; I9 += 2) {
      I8.setAttribute(arguments[I9], arguments[I5.oaRgG(I9, 1)]);
    }
    return I8;
  }
  var dt = function (I5, I6) {
    var I7 = {
      sDGDy: function (I9, II) {
        return I9 > II;
      }
    };
    I7.HeUjO = function (I9, II) {
      return I9 / II;
    };
    I7.whzIR = function (I9, II) {
      return I9 / II;
    };
    return I7.HeUjO(I5, I6) > 0.5625 ? I7.HeUjO(1920, I6) : I7.whzIR(1080, I5);
  };
  var Zt = function (I4, I5, I6, I7, I8) {
    var II;
    var Im = 0 === I8 ? "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"112\" height=\"112\"><path d=\"M90.6 9.8h9.8V0h-9.8Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#ff6e00;fill-opacity:1\"/><path d=\"M0 21.1h9.8v-9.8H0Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#6414e6;fill-opacity:1\"/><path d=\"M11.3 111.6h9.8v-9.8h-9.8Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#19bee6;fill-opacity:1\"/><path d=\"M68 89h9.7v-9.8H68Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#e619dc;fill-opacity:1\"/><path d=\"M79.2 9.8H89V0h-9.8ZM68 9.8h9.8V0H68Zm-11.3 0h9.8V0h-9.8Zm-11.3 0H55V0h-9.8ZM34 9.8h9.8V0H34Zm-11.4 0h9.8V0h-9.8Zm-11.3 0h9.8V0h-9.8Zm79.3 11.3h9.8v-9.8h-9.8Zm-11.4 0H89v-9.8h-9.8Zm-11.3 0h9.8v-9.8H68Zm-11.3 0h9.8v-9.8h-9.8Zm-11.3 0H55v-9.8h-9.8Zm-11.3 0h9.8v-9.8H34Zm-11.4 0h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8ZM102 32.4h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8Zm-11.4 0H89v-9.8h-9.8Zm-67.9 0h9.8v-9.8h-9.8ZM0 32.4h9.8v-9.8H0Zm101.9 11.3h9.8V34h-9.8Zm-11.3 0h9.8V34h-9.8Zm-79.3 0h9.8V34h-9.8ZM0 43.7h9.8V34H0Zm101.9 11.4h9.8v-9.9h-9.8Zm-11.3 0h9.8v-9.9h-9.8Zm-79.3 0h9.8v-9.9h-9.8ZM0 55h9.8v-9.8H0Zm101.9 11.3h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8Zm-11.4 0H89v-9.8h-9.8Zm-67.9 0h9.8v-9.8h-9.8ZM0 66.4h9.8v-9.8H0Zm90.6 11.3h9.8v-9.8h-9.8Zm-11.4 0H89v-9.8h-9.8Zm-11.3 0h9.8v-9.8H68Zm-11.3 0h9.8v-9.8h-9.8Zm-11.3 0H55v-9.8h-9.8Zm-11.3 0h9.8v-9.8H34Zm-11.4 0h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8ZM0 77.7h9.8v-9.8H0ZM56.6 89h9.8v-9.8h-9.8Zm-11.3 0H55v-9.8h-9.8ZM34 89h9.8v-9.8H34Zm-11.4 0h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8ZM0 89h9.8v-9.8H0Zm11.3 11.3h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8H0Zm0 11.3h9.8v-9.8H0Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#fff;fill-opacity:1\"/></svg>" : "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"113\" height=\"112\"><path d=\"M.3 32.4h9.8v-9.8H.3Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#e61973;fill-opacity:1\"/><path d=\"M22.8 9.8h9.7V0h-9.7Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#ffb919;fill-opacity:1\"/><path d=\"M11.6 100.3h9.7v-9.8h-9.7Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#1987e6;fill-opacity:1\"/><path d=\"M79 111.6h9.7v-9.8h-9.8Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#ff4b00;fill-opacity:1\"/><path d=\"M101.4 55h9.7v-9.7h-9.7Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#14e691;fill-opacity:1\"/><path d=\"M101.4 89h9.7v-9.8h-9.7Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#ff1928;fill-opacity:1\"/><path d=\"M67.7 9.8h9.7V0h-9.7Zm-11.2 0h9.7V0h-9.7Zm-11.3 0H55V0h-9.8ZM34 9.8h9.8V0H34Zm33.7 11.3h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm-11.3 0H55v-9.8h-9.8Zm-11.2 0h9.8v-9.8H34Zm56.2 0h9.7v-9.8h-9.7Zm-11.3 0h9.8v-9.8h-9.8Zm-56.1 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm78.6 11.3h9.7v-9.8h-9.7Zm-11.3 0h9.8v-9.8h-9.8Zm-56.1 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm0 11.3h9.7V34h-9.7Zm-11.3 0h9.8V34H.3Zm11.3 11.4h9.7v-9.9h-9.7Zm78.6 0h9.7v-9.9h-9.7Zm-11.3 0h9.8v-9.9h-9.8Zm-11.2 0h9.7v-9.9h-9.7Zm-11.2 0h9.7v-9.9h-9.7ZM.3 55h9.8v-9.9H.3ZM79 66.4h9.8v-9.8h-9.8Zm-11.2 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm-45 0h9.8v-9.8h-9.7Zm89.9 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm-89.9 0h9.8v-9.8H.3Zm101 11.3h9.8v-9.8h-9.7Zm-89.7 0h9.7v-9.8h-9.7Zm78.6 0h9.7v-9.8h-9.7Zm-89.9 0h9.8v-9.8H.3ZM90.2 89h9.7v-9.8h-9.7ZM.3 89h9.8v-9.8H.3ZM79 89h9.8v-9.8h-9.8Zm-56.1 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm78.6 11.3h9.7v-9.8h-9.7Zm-11.3 0h9.8v-9.8h-9.8Zm-11.2 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm-11.3 0H55v-9.8h-9.8Zm-11.2 0h9.8v-9.8H34Zm-11.2 0h9.7v-9.8h-9.7Zm45 11.3h9.6v-9.8h-9.7Zm-11.3 0h9.7v-9.8h-9.7Zm-11.3 0H55v-9.8h-9.8Zm-11.2 0h9.8v-9.8H34Zm-11.2 0h9.7v-9.8h-9.7Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#fff;fill-opacity:1\"/></svg>";
    var IJ = st(I4, 'g');
    mt(IJ, 'id', "digit-" + I7);
    ct(IJ, "filter", "url(#motionFilter-" + I7 + ')');
    for (var Il = 0; Il < 5; Il++) {
      var IY = st(IJ, 'g');
      ct(IY, "transform", "translate(0px, " + -Il * (I5 + 2 * I6) + "px)");
      II = Im;
      IY.innerHTML = II;
    }
    return IJ;
  };
  var gt = function (I4, I5) {
    var I7 = st(I4, "filter");
    mt(I7, 'id', "motionFilter-" + I5, "width", "300%", 'x', "-100%");
    var I8 = st(I7, "feGaussianBlur");
    mt(I7, "class", "blurValues", 'in', "SourceGraphic", "stdDeviation", "0 0");
    return I8;
  };
  function pt(I4) {
    var I7;
    var I8;
    var I9 = I4.h;
    var II = I4.t;
    var Im = I4.v;
    var IJ = I4.i;
    var Il = I4.o;
    var IY = I4.l;
    var IH = I4.m;
    var Ix = document.querySelector(IY);
    I7 = dt(1440, 1024);
    I8 = function () {
      var IP = dt(window.innerWidth, window.innerHeight);
      ct(Ix, "transform", "scale(" + (I7 / IP).toFixed(4) + ')');
    };
    window.addEventListener("resize", I8);
    I8();
    var IX = function () {
      window.removeEventListener("resize", I8);
    };
    var Iv = 112 + 2 * I9;
    var Iq = Date.now();
    var IK = st(Ix, "svg");
    var IU = st(IK, "svg");
    mt(IU, "mask", "url(#mask-" + Iq + ')');
    var Ir = st(IK, "defs");
    !function (IM, IP) {
      var IE = st(IM, "linearGradient");
      mt(IE, 'id', "gradient-" + IP, 'x1', '0%', 'y1', '0%', 'x2', '0%', 'y2', "100%");
      (function () {
        for (var Ip = 0; Ip < arguments.length; Ip++) {
          var IS = st(IE, "stop");
          var Ia = arguments[Ip];
          mt(IS, "offset", Ia[0], "stop-color", "white", "stop-opacity", Ia[1]);
        }
      })([0, 0], [0.2, 1], [0.8, 1], [1, 0]);
    }(Ir, Iq);
    (function (IM, IP) {
      var IQ = st(IM, "mask");
      mt(IQ, 'id', "mask-" + IP);
      mt(st(IQ, "rect"), 'x', 0, 'y', 0, "width", "100%", "height", "100%", "fill", "url(#gradient-" + IP + ')');
    })(Ir, Iq);
    (function (IM, IP) {
      var Ip;
      Ip = document.createElement("pre");
      IM.appendChild(Ip);
      Ip.textContent = IP;
      ct(Ip, "font", "20px Roboto, sans-serif", "color", "#ccc", "opacity", '0', "text-align", "center", "animation", "1.2s ease-in-out forwards fade-in");
    })(Ix, IH);
    var Ib = ['1', '1'].map(function (IM, IP) {
      var Ic = IP + '-' + Iq;
      return {
        'Z': Zt(IU, 112, I9, Ic, IP),
        'u': gt(Ir, Ic),
        'H': +IM,
        'p': 0x0,
        'M': {
          'x': IP * (112 + II) + II / 2,
          'y': I9
        }
      };
    });
    !function (IM, IP, Ic) {
      mt(IM, "viewBox", "0 0 " + IP + " " + Ic);
      ct(IM, "overflow", "hidden", "height", Ic);
    }(IK, Ib.length * (112 + II), Iv);
    Ib.forEach(function (IM) {
      mt(IM.Z, "transform", "translate(" + IM.M.x + ", " + IM.M.y + ')');
    });
    var Ie = [];
    !function IM() {
      Ie.length = 0;
      Ib.forEach(function (Ic, IE) {
        var Ip = Ic.p * Iv;
        var IS = (75 + Ic.H) * Iv;
        var Ia = function (IG) {
          var IL = IG.g;
          var Ik = IG._to;
          var IN = IG.o;
          var Is = IG.V;
          var IO = IG._;
          var Iw = IG.k;
          var Ig = IG.D;
          var IA = IL;
          var IF = undefined;
          var Ih = false;
          return function (IB) {
            if (!Ih) {
              if (undefined === IF) {
                IF = IB;
                IO(IA);
              }
              var In;
              var Iz = Math.min(Math.max(IB - IF - Is, 0), IN) / IN;
              Iw(IA = ((In = Iz) <= 0.3 ? In * In : 1 + 1.25 * Math.pow(In - 1, 3) + 0.25 * Math.pow(In - 1, 2)) * (Ik - IL) + IL);
              if (1 === Iz) {
                Ih = true;
                Ig(IA);
              }
            }
          };
        }({
          'g': Ip,
          '_to': IS,
          'o': Il,
          'V': (Ib.length - 1 - IE) * IJ + Im,
          '_': function () {},
          'k': function (IG) {
            Ic.M.y = I9 + IG % (4 * Iv);
            mt(Ic.Z, "transform", "translate(" + Ic.M.x + ", " + Ic.M.y + ')');
            var IL = (Ip + IS) / 2;
            var Ik = (+Math.abs(Math.abs(Math.abs(IG - IL) - IL) - Ip) / 100).toFixed(1);
            mt(Ic.u, "stdDeviation", "0 " + Ik);
          },
          'D': function () {
            if (0 === IE) {
              if (document.querySelector(IY)) {
                IM();
              } else {
                IT();
                IX();
              }
            }
          }
        });
        Ie.push(Ia);
      });
    }();
    var Id;
    var IC;
    Id = function (IP) {
      Ie.forEach(function (IE) {
        return IE(IP);
      });
    };
    (function IP(Ic) {
      IC = requestAnimationFrame(IP);
      Id(Ic);
    })(0);
    var IT = function () {
      cancelAnimationFrame(IC);
    };
  }
  var mG = {
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
  var kt = `/${94}` + "/shared/";
  var Ht = '';
  window.GtmId = new String(window.GtmId);
  var bt = Q() ? 2015 : 5;
  var wt = k;
  var Et = Date.now();
  var St = C.or;
  if (St) {
    if (0 === (St = function (I4) {
      var I6;
      !function (IH) {
        IH.kReplacer = "[a-zA-Z=]";
      }(I6 || (I6 = {}));
      var I7 = "object" == typeof window ? window : global;
      var I8 = I7.parseInt;
      var I9 = I7.isNaN;
      var II = I7.String;
      var Im = I7.RegExp;
      var IJ = I7.Number;
      var Il = Im(I6.kReplacer, 'g');
      var IY = I8(null == I4 ? undefined : I4.substring(IJ("0x0"), IJ("0x2")), IJ("0xa"));
      return I9(IY) && (null == I4 ? undefined : I4.includes('.')) ? I4 : null == I4 ? undefined : I4.substring(IJ("0x2")).replace(Il, function (IH) {
        if ('=' === IH) {
          return '.';
        }
        var Ix = IH.charCodeAt(0);
        var IX = Ix >= IJ("0x61") ? IJ("0x61") : IJ("0x41");
        var ID = (Ix - IX - IY + IJ("0x1a")) % IJ("0x1a") + IX;
        return II.fromCharCode(ID);
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
    (function (I4) {
      mG.m = I4;
      pt(mG);
    })(et(2));
  } else {
    var It = document.querySelector(".svg-loading");
    if (!(null === (_t = null == It ? undefined : It.parentElement) || undefined === _t)) {
      _t.removeChild(It);
    }
  }
  function Rt(I4) {
    if (undefined === I4) {
      I4 = 0;
    }
    if (confirm(et(I4))) {
      setTimeout(function () {
        location.reload();
      }, 500);
    }
  }
  function Tt(I4) {
    if (null != I4) {
      return Rt();
    }
    if ("undefined" == typeof shell) {
      Rt();
    } else {
      setTimeout(function () {
        var I7 = {
          SharedPath: kt,
          GameDir: Ht,
          AssetTable: "fd67f96343.18541.json",
          ShellDir: "984721902a/",
          Plugins: "e02b9bf0d2,a346494745,589a728c8d,2fd142260e,2c6e37b73c,b85c56d865,c03a2652ad",
          Requirements: "minMemory=1024&minDiskSpace=1024&whiteList=chrome-59%2Cchrome%20webview-59%2Cfirefox-58%2Csafari-11%2Cedge-79&minOSVersion=iOS-11%2CAndroid-5%2CMacOS-10.10%2CWindows-7",
          LocalizedTitleKey: "BV.Title",
          SupportedLanguages: "ar,az,bg,bn,cs,el,et,hi,hu,hy,lo,lt,mn,sh,si,sk,sq,uz,fa,ur,da,de,en,en-stkus,es,fi,fr,id,it,ja,ko,my,nl,no,pl,pt,pt-br,ro,ru,sv,th,tr,vi,zh",
          ThemeColor: "#33A0FF",
          LobbyMode: false,
          SupportXSMaxRatio: 2,
          AspectRatio: '',
          Orientation: 1,
          Name: "Bali Vacation",
          Version: "3.23.0.1/6.15.0/5.2.0-0",
          Index: 94,
          Identifier: "com.pgsoft.slot.balivacation",
          PluginDependencies: mc,
          EIF: 16777217,
          Ecma: bt,
          Platform: wt,
          Blobs: q,
          BootTime: Et
        };
        return shell.start(Vt, I7);
      }, 0);
    }
  }
  vt(kt + "984721902a/" + "index.json", 1, function (I4, I5) {
    if (null != I4) {
      return Rt();
    }
    var I7;
    I7 = (Vt = I5).version;
    if ("string" == typeof I7 && true && -1 !== function (I9, II) {
      var IJ = I9.split('-');
      var Il = II.split('-');
      var IY = ft(IJ[0], Il[0]);
      if (0 !== IY) {
        return IY;
      }
      var IH = IJ[1];
      var Ix = Il[1];
      return IH && !Ix ? -1 : !IH && Ix ? 1 : IH || Ix ? ft(IH, Ix) : 0;
    }(I7, "11.3.0-rc.1")) {
      vt(kt + "984721902a/" + Vt.main, 2, Tt);
    } else {
      Rt(1);
    }
  });
}();