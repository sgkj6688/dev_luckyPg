!function () {
  'use strict';

  ;
  var Fh = {
    index: "b994a",
    config: "76943"
  };
  var FQ = {
    index: "9353d",
    config: "82ef6"
  };
  var FC = {
    resources: Fh,
    main: FQ
  };
  var Fl = {
    platform: "web-mobile",
    groupList: ["default"],
    collisionMatrix: [[true]],
    hasResourcesBundle: true,
    hasStartSceneBundle: false,
    remoteBundles: [],
    subpackages: [],
    launchScene: "db://assets/imports/scene/main.fire",
    orientation: '',
    jsList: [],
    bundleVers: FC
  };
  window.DEBUG = false;
  window.PREVIEW = false;
  window.EDITOR = false;
  window.GtmId = "GTM-WV99ST2";
  window._CCSettings = Fl;
  var Fn = {
    e02b9bf0d2: ">=11.6.0-rc.1",
    a346494745: ">=10.6.0-rc.1",
    "589a728c8d": ">=7.6.0-rc.1",
    "2fd142260e": ">=9.6.0-rc.1",
    "2c6e37b73c": ">=6.6.0-rc.1",
    b85c56d865: ">=5.5.0-rc.1",
    c03a2652ad: ">=7.3.0-rc.1"
  };
  console.log("Game/Boot/Engine", "3.25.0.0/7.0.0/5.2.0-0");
  var _ = navigator.userAgent;
  var k = 0;
  function x(z4) {
    var z6 = z4 + '';
    var z7 = (z4.stack || '') + '';
    var z8 = z6;
    if (z7) {
      if (0 === z7.indexOf(z6)) {
        z8 = z7;
      } else {
        z8 += "\n" + z7;
      }
    }
    var z9 = this.onFormat || window.onGAReceiveError;
    if (z9) {
      try {
        z8 = z9(z8);
      } catch (zz) {
        w(zz + '');
      }
    }
    return z8.replace(/https?:\/\/[^/]+([0-9A-Za-z/._-]+)\S*(:[0-9]+:[0-9]+)/g, "$1$2").replace(/https?:\/\/[^/]+/g, '');
  }
  function w(z5, z6) {
    var z8 = {
      description: z5,
      fatal: !!z6
    };
    gtag("event", "exception", z8);
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
  var S;
  var M;
  var T;
  S = 0;
  M = '';
  T = 0;
  var P = function (z4) {
    var z6 = Date.now();
    if (M !== z4 || z6 - T > 1000) {
      T = z6;
      M = z4;
      S = 0;
    } else {
      S++;
    }
    if (0 === S) {
      w(z4);
    } else {
      if (5 === S) {
        w(z4, 1);
        var z7 = this.onFrequent || window.onGAFrequentError;
        try {
          if (z7) {
            z7();
          }
        } catch (z8) {
          w(z8 + '');
        }
      } else if (S > 5) {
        T = z6;
      }
    }
  };
  function V(z5, z6, z7, z8, z9) {
    if (k > 3) {
      return false;
    }
    if (!z7 || !z8 || !z9) {
      return false;
    }
    var zE = "Uncaught " + x.call(V, z9);
    P.call(V, zE);
    return false;
  }
  V.report = function (z4, z5) {
    w("Uncaught " + x.call(this, z4), z5);
  };
  var R;
  var A;
  function G(z4) {
    if (!(k > 3)) {
      var z6 = z4.reason;
      if (null != z6) {
        var z7 = "Unhandled " + x.call(G, z6);
        P.call(G, z7);
      }
    }
  }
  G.report = function (z4, z5) {
    w("Unhandled " + x.call(this, z4), z5);
  };
  window.dataLayer = [];
  window.gtag = function () {
    dataLayer.push(arguments);
  };
  dataLayer.push({
    'event': "gtm.js",
    'gtm.start': Date.now(),
    'app_name': "Mermaid Riches",
    'app_version': "3.25.0.0/7.0.0/5.2.0-0"
  });
  R = "https://www.googletagmanager.com/gtm.js?id=".concat(GtmId);
  (A = document.createElement("script")).async = true;
  A.src = R;
  document.head.appendChild(A);
  window.onerror = V;
  window.onunhandledrejection = G;
  var I = location.search;
  if (I.length > 0) {
    I = I.substring(1);
  }
  var j = {};
  var N = I.split('&');
  for (var F = 0; F < N.length; ++F) {
    var $ = N[F];
    if ($) {
      var L = $.indexOf('=');
      if (-1 === L) {
        j[$] = '';
      } else {
        var C = $.substring(0, L);
        var z = $.substring(L + 1);
        j[C] = decodeURIComponent(z);
      }
    }
  }
  function q() {
    var z5 = "string" == typeof arguments[0] ? function (z6) {
      var z8 = z6[2];
      var z9 = z6[3];
      var zz = {
        S: z6[0],
        T: z6[1],
        P: zF,
        R: zF
      };
      return zz;
      function zF() {
        if (null != this.A) {
          z8(this.A);
        } else if (undefined === z9) {
          z8(undefined, this.D);
        } else {
          z9(this.D);
        }
      }
    }(arguments) : arguments[0];
    if (2 === z5.T && undefined === z5.G) {
      (function (z6) {
        z6.I = false;
        var z8 = {
          'S': z6.S,
          'T': 0x2,
          'P': function () {
            z6.A = this.A;
            if (z6.P) {
              z6.P();
            }
          },
          'R': function () {
            var zz = this.D;
            var zF = URL.createObjectURL(zz);
            function zm(za) {
              if (za.filename === zF) {
                z6.A = za.error;
                delete O[zF];
              }
            }
            window.addEventListener("error", zm);
            O[zF] = z6.S;
            var zE = document.createElement("script");
            zE.src = zF;
            zE.defer = true;
            zE.onload = function () {
              window.removeEventListener("error", zm);
              document.head.removeChild(zE);
              URL.revokeObjectURL(zF);
              W(z6);
            };
            document.head.appendChild(zE);
          },
          'G': z6
        };
        q(z8);
      })(z5);
    } else {
      (function (z6) {
        var z8 = new XMLHttpRequest();
        z8.open("GET", z6.S, true);
        try {
          if ("timeout" in z8) {
            z8.timeout = 60000;
          }
        } catch (z9) {}
        switch (z6.T) {
          case 1:
            z8.responseType = "json";
            break;
          case 3:
          case 2:
            z8.responseType = "blob";
        }
        z8.onload = function () {
          if (z8.status >= 200 && z8.status < 300 || 0 === z8.status && z8.response) {
            (function (zF, zE) {
              if (1 === zF.T && "string" == typeof zE) {
                try {
                  zE = JSON.parse(zE);
                } catch (za) {
                  zF.A = za;
                  zE = undefined;
                }
              }
              if (null == zF.A && null == zE) {
                zF.A = "invaliddata";
              } else {
                zF.D = zE;
              }
            })(z6, z8.response);
          } else {
            z6.A = ''.concat(z8.status, ": ").concat(z8.statusText);
          }
          W(z6);
        };
        z8.onerror = function () {
          z6.A = "onerror";
          W(z6);
        };
        z8.ontimeout = function () {
          z6.A = "ontimeout";
          W(z6);
        };
        z8.send();
      })(z5);
    }
  }
  var U;
  var O = Object.create(null);
  function W(z4) {
    if (null != z4.A) {
      var z6 = undefined === z4.I ? 0 : z4.I;
      !function (z7, z8, z9, zz) {
        if (z9 instanceof Error) {
          z9 = z9.message;
        }
        var zE = z7.split('?')[0];
        var zm = "load resource fail|G1002|src: ".concat(zE, "|reason: ").concat(z9);
        if (zz) {
          zm += "|retryCount: ".concat(zz);
        }
        gtag("event", "fault", {
          'event_category': "game_shell",
          'event_label': zm
        });
      }(z4.S, 0, z4.A, z6);
      if (false !== z6 && ("onerror" === z4.A || "ontimeout" === z4.A) && z6 < 5) {
        z4.I = ++z6;
        z4.A = undefined;
        setTimeout(q, 1000 * (1 << z6), z4);
      } else if (z4.P) {
        z4.P();
      }
    } else if (z4.R) {
      z4.R();
    }
  }
  (U = {
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
  var X = [[window, "Map", "WeakMap", "Set", "WeakSet", "Promise", "Proxy", "Reflect"], [Object, "assign"], [Array.prototype, "findIndex", "find"], [String.prototype, "repeat", "startsWith", "endsWith", "includes"], [Number, "isFinite", "isNaN", "isSafeInteger", "isInteger"], [Math, "trunc", "sign", "cbrt", "log2", "log10"]];
  function J() {
    return function (z5) {
      var z7 = Object.keys(z5);
      for (var z8 = 0; z8 < z7.length; z8++) {
        var z9 = z5[z7[z8]];
        try {
          Function(z9);
        } catch (zz) {
          return false;
        }
      }
      return true;
    }(U) && function (z5) {
      var z7 = true;
      for (var z8 = 0; z8 < z5.length; z8++) {
        var z9 = z5[z8];
        var zz = z9[0];
        if (undefined === zz) {
          z7 = false;
          break;
        }
        for (var zF = 1; zF < z9.length; zF++) {
          if (undefined === zz[z9[zF]]) {
            z7 = false;
            break;
          }
        }
        if (!z7) {
          break;
        }
      }
      return z7;
    }(X);
  }
  var FD = {
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
  };
  var Fb = {
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
  };
  var Fj = {
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
  };
  var FJ = {
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
  };
  var FV = {
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
  };
  var Fc = {
    en: "Warning: Insecure Connection",
    de: "Achtung: Unsichere Verbindung"
  };
  Fc.es = "Aviso: La Conexión de Red no es Segura";
  Fc.id = "Peringatan: Koneksi Tidak Aman";
  Fc.ja = "注意：不安定なネットワーク接続";
  Fc.ko = "경고: 안전하지 않은 연결";
  Fc["pt-br"] = "Aviso: Conexão Insegura";
  Fc.ru = "Внимание: небезопасное подключение к сети";
  Fc.sv = "Varning: Ostabil anslutning";
  Fc.th = "คำเตือน: การเชื่อมต่อไม่ปลอดภัย";
  Fc.vi = "Cảnh báo: Kết nối không an toàn";
  Fc.zh = "警告：连接不安全";
  var Fk = {
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
  };
  var FL = {
    '0': FD,
    '1': Fb,
    '2': Fj,
    '3': FJ,
    '4': FV,
    '5': Fc,
    '6': Fk
  };
  var ee = j.language || j.lang || j.l || navigator.language;
  function ne(z5) {
    var z9 = FL[z5];
    if (!z9) {
      return ''.concat(z5);
    }
    if (z9[ee]) {
      return z9[ee];
    }
    var zz = ee.split('-')[0];
    return z9[zz] ? z9[zz] : z9.en;
  }
  var te;
  var ae = undefined !== j.__sv && '' !== j.__sv;
  var re = false;
  var oe = [];
  function le() {
    for (var z5 = function () {
      var z7;
      var z8;
      var z9 = oe.pop();
      if (null === te) {
        q.apply(undefined, z9);
      } else {
        z7 = z9[0];
        z8 = function (zz) {
          if (zz) {
            z9[0] = zz;
          }
          q.apply(undefined, z9);
        };
        te.getSignedUrl(z7).then(z8, function () {
          return z8('');
        });
      }
    }; oe.length;) {
      z5();
    }
  }
  var se = ae ? function () {
    oe.push(arguments);
    if (undefined === te) {
      (function () {
        if (!re) {
          re = true;
          var z6 = j.__sv.substring(2, 4) + ".js";
          q(location.origin + "/loader/" + z6, 2, function (z7) {
            if (z7) {
              te = null;
            } else if (!(null == (te = window.sign || null))) {
              te.setQuery(j.__sv);
            }
            le();
          });
        }
      })();
    } else {
      setTimeout(le, 0);
    }
  } : q;
  function he(z4) {
    var z6 = parseInt(z4);
    return isNaN(z6) ? z4 : z6;
  }
  function ce(z4, z5) {
    var z7 = z4.split('.');
    var z8 = z5.split('.');
    var z9 = Math.max(z7.length, z8.length);
    for (var zz = 0; zz < z9; zz++) {
      var zF = he(z7[zz] || 0);
      var zE = he(z8[zz] || 0);
      if (zF < zE) {
        return -1;
      }
      if (zF > zE) {
        return 1;
      }
    }
    return 0;
  }
  function ue(z5, z6, z7) {
    if (undefined === z7) {
      z7 = 1;
    }
    var zz = 0 === z7 ? document.createElement(z6) : document.createElementNS("http://www.w3.org/2000/svg", z6);
    z5.appendChild(zz);
    return zz;
  }
  function ve() {
    var z5 = {
      rafkY: function (zF, zE) {
        return zF < zE;
      }
    };
    z5.mTOrt = function (zF, zE) {
      return zF < zE;
    };
    z5.rtvGG = function (zF, zE) {
      return zF + zE;
    };
    var z7 = [];
    for (var z8 = 0; z8 < arguments.length; z8++) {
      z7[z8] = arguments[z8];
    }
    var z9 = z7[0];
    for (var zz = 1; z5.mTOrt(zz, z7.length); zz += 2) {
      z9.style[z7[zz]] = z7[z5.rtvGG(zz, 1)];
    }
    return z9;
  }
  function de() {
    var z7 = [];
    for (var z8 = 0; z8 < arguments.length; z8++) {
      z7[z8] = arguments[z8];
    }
    var z9 = z7[0];
    for (var zz = 1; zz < z7.length; zz += 2) {
      z9.setAttribute(z7[zz], z7[zz + 1]);
    }
    return z9;
  }
  var fe = function (z4) {
    return requestAnimationFrame(z4);
  };
  var me = function (z5, z6) {
    return z5 / z6 > 0.5625 ? 1920 / z6 : 1080 / z5;
  };
  var pe = function (z4, z5, z6, z7, z8) {
    var zz;
    var zF = 0 === z8 ? "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"112\" height=\"112\"><path d=\"M90.6 9.8h9.8V0h-9.8Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#ff6e00;fill-opacity:1\"/><path d=\"M0 21.1h9.8v-9.8H0Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#6414e6;fill-opacity:1\"/><path d=\"M11.3 111.6h9.8v-9.8h-9.8Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#19bee6;fill-opacity:1\"/><path d=\"M68 89h9.7v-9.8H68Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#e619dc;fill-opacity:1\"/><path d=\"M79.2 9.8H89V0h-9.8ZM68 9.8h9.8V0H68Zm-11.3 0h9.8V0h-9.8Zm-11.3 0H55V0h-9.8ZM34 9.8h9.8V0H34Zm-11.4 0h9.8V0h-9.8Zm-11.3 0h9.8V0h-9.8Zm79.3 11.3h9.8v-9.8h-9.8Zm-11.4 0H89v-9.8h-9.8Zm-11.3 0h9.8v-9.8H68Zm-11.3 0h9.8v-9.8h-9.8Zm-11.3 0H55v-9.8h-9.8Zm-11.3 0h9.8v-9.8H34Zm-11.4 0h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8ZM102 32.4h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8Zm-11.4 0H89v-9.8h-9.8Zm-67.9 0h9.8v-9.8h-9.8ZM0 32.4h9.8v-9.8H0Zm101.9 11.3h9.8V34h-9.8Zm-11.3 0h9.8V34h-9.8Zm-79.3 0h9.8V34h-9.8ZM0 43.7h9.8V34H0Zm101.9 11.4h9.8v-9.9h-9.8Zm-11.3 0h9.8v-9.9h-9.8Zm-79.3 0h9.8v-9.9h-9.8ZM0 55h9.8v-9.8H0Zm101.9 11.3h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8Zm-11.4 0H89v-9.8h-9.8Zm-67.9 0h9.8v-9.8h-9.8ZM0 66.4h9.8v-9.8H0Zm90.6 11.3h9.8v-9.8h-9.8Zm-11.4 0H89v-9.8h-9.8Zm-11.3 0h9.8v-9.8H68Zm-11.3 0h9.8v-9.8h-9.8Zm-11.3 0H55v-9.8h-9.8Zm-11.3 0h9.8v-9.8H34Zm-11.4 0h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8ZM0 77.7h9.8v-9.8H0ZM56.6 89h9.8v-9.8h-9.8Zm-11.3 0H55v-9.8h-9.8ZM34 89h9.8v-9.8H34Zm-11.4 0h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8ZM0 89h9.8v-9.8H0Zm11.3 11.3h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8H0Zm0 11.3h9.8v-9.8H0Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#fff;fill-opacity:1\"/></svg>" : "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"113\" height=\"112\"><path d=\"M.3 32.4h9.8v-9.8H.3Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#e61973;fill-opacity:1\"/><path d=\"M22.8 9.8h9.7V0h-9.7Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#ffb919;fill-opacity:1\"/><path d=\"M11.6 100.3h9.7v-9.8h-9.7Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#1987e6;fill-opacity:1\"/><path d=\"M79 111.6h9.7v-9.8h-9.8Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#ff4b00;fill-opacity:1\"/><path d=\"M101.4 55h9.7v-9.7h-9.7Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#14e691;fill-opacity:1\"/><path d=\"M101.4 89h9.7v-9.8h-9.7Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#ff1928;fill-opacity:1\"/><path d=\"M67.7 9.8h9.7V0h-9.7Zm-11.2 0h9.7V0h-9.7Zm-11.3 0H55V0h-9.8ZM34 9.8h9.8V0H34Zm33.7 11.3h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm-11.3 0H55v-9.8h-9.8Zm-11.2 0h9.8v-9.8H34Zm56.2 0h9.7v-9.8h-9.7Zm-11.3 0h9.8v-9.8h-9.8Zm-56.1 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm78.6 11.3h9.7v-9.8h-9.7Zm-11.3 0h9.8v-9.8h-9.8Zm-56.1 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm0 11.3h9.7V34h-9.7Zm-11.3 0h9.8V34H.3Zm11.3 11.4h9.7v-9.9h-9.7Zm78.6 0h9.7v-9.9h-9.7Zm-11.3 0h9.8v-9.9h-9.8Zm-11.2 0h9.7v-9.9h-9.7Zm-11.2 0h9.7v-9.9h-9.7ZM.3 55h9.8v-9.9H.3ZM79 66.4h9.8v-9.8h-9.8Zm-11.2 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm-45 0h9.8v-9.8h-9.7Zm89.9 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm-89.9 0h9.8v-9.8H.3Zm101 11.3h9.8v-9.8h-9.7Zm-89.7 0h9.7v-9.8h-9.7Zm78.6 0h9.7v-9.8h-9.7Zm-89.9 0h9.8v-9.8H.3ZM90.2 89h9.7v-9.8h-9.7ZM.3 89h9.8v-9.8H.3ZM79 89h9.8v-9.8h-9.8Zm-56.1 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm78.6 11.3h9.7v-9.8h-9.7Zm-11.3 0h9.8v-9.8h-9.8Zm-11.2 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm-11.3 0H55v-9.8h-9.8Zm-11.2 0h9.8v-9.8H34Zm-11.2 0h9.7v-9.8h-9.7Zm45 11.3h9.6v-9.8h-9.7Zm-11.3 0h9.7v-9.8h-9.7Zm-11.3 0H55v-9.8h-9.8Zm-11.2 0h9.8v-9.8H34Zm-11.2 0h9.7v-9.8h-9.7Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#fff;fill-opacity:1\"/></svg>";
    var zE = ue(z4, 'g');
    de(zE, 'id', "digit-".concat(z7));
    ve(zE, "filter", "url(#motionFilter-".concat(z7, ')'));
    for (var zm = 0; zm < 5; zm++) {
      var za = ue(zE, 'g');
      ve(za, "transform", "translate(0px, ".concat(-zm * (z5 + 2 * z6), "px)"));
      zz = zF;
      za.innerHTML = zz;
    }
    return zE;
  };
  var ge = function (z4, z5) {
    var z7 = ue(z4, "filter");
    de(z7, 'id', "motionFilter-".concat(z5), "width", "300%", 'x', "-100%");
    var z8 = ue(z7, "feGaussianBlur");
    de(z7, "class", "blurValues", 'in', "SourceGraphic", "stdDeviation", "0 0");
    return z8;
  };
  function Ze(z4, z5) {
    var z7;
    var z8;
    var z9;
    var zz = 0;
    var zF = [];
    var zE = undefined;
    var zm = undefined;
    ve(z7 = ue(z4, "div", 0), "display", "flex", "flex-direction", "column", "align-items", "center", "justify-content", "center");
    var za = Date.now() + '';
    var zs = ue(z7, "svg");
    var zt = z9 = ue(zs, "svg");
    de(z9, "mask", "url(#mask-".concat(za, ')'));
    var zi = ue(zs, "defs");
    !function (zr, zX) {
      var zW = ue(zr, "linearGradient");
      de(zW, 'id', "gradient-".concat(zX), 'x1', '0%', 'y1', '0%', 'x2', '0%', 'y2', "100%");
      (function () {
        var zY = [];
        for (var zS = 0; zS < arguments.length; zS++) {
          zY[zS] = arguments[zS];
        }
        for (var zg = 0; zg < zY.length; zg++) {
          var zU = ue(zW, "stop");
          var zP = zY[zg];
          de(zU, "offset", zP[0], "stop-color", "white", "stop-opacity", zP[1]);
        }
      })([0, 0], [0.2, 1], [0.8, 1], [1, 0]);
    }(zi, za);
    (function (zr, zX) {
      var zT = ue(zr, "mask");
      de(zT, 'id', "mask-".concat(zX));
      de(ue(zT, "rect"), 'x', 0, 'y', 0, "width", "100%", "height", "100%", "fill", "url(#gradient-".concat(zX, ')'));
    })(zi, za);
    z8 = function (zr, zX) {
      var zH;
      (zH = ue(zr, "pre", 0)).textContent = zX;
      ve(zH, "font", "20px Roboto, sans-serif", "color", "#ccc", "opacity", '0', "text-align", "center", "transition", "opacity 1.2s ease-in-out");
      return zH;
    }(z7, z5);
    requestAnimationFrame(function () {
      ve(z8, "opacity", '1');
    });
    var zy = ['1', '1'].map(function (zr, zX) {
      var zW = ''.concat(zX, '-').concat(za);
      return {
        'i': pe(zt, 112, 20, zW, zX),
        't': ge(zi, zW),
        'o': +zr,
        'h': 0x0,
        'l': {
          'x': 137 * zX + 12.5,
          'y': 0x14
        }
      };
    });
    function zd() {
      if (2 === zz) {
        if (zE) {
          zE();
        }
        if (zm) {
          zm();
        }
        zz = 3;
      } else if (1 === zz) {
        zF.length = 0;
        zy.forEach(function (zX, zT) {
          var zH;
          var zY;
          var zS;
          var zg;
          var zP;
          var zh;
          var zQ;
          var zC;
          var zl;
          var zn;
          var zD = 152 * zX.h;
          var zb = 152 * (75 + zX.o);
          zH = {
            'v': zD,
            '_to': zb,
            'm': 0x4b0,
            'u': 200 * (zy.length - 1 - zT) + 400,
            'Z': function () {},
            'p': function (zJ) {
              zX.l.y = 20 + zJ % 608;
              de(zX.i, "transform", "translate(".concat(zX.l.x, ", ").concat(zX.l.y, ')'));
              var zk = (zD + zb) / 2;
              var zL = (+Math.abs(Math.abs(Math.abs(zJ - zk) - zk) - zD) / 100).toFixed(1);
              de(zX.t, "stdDeviation", "0 ".concat(zL));
            },
            'g': function () {
              if (0 === zT) {
                zd();
              }
            }
          };
          zg = zH._to;
          zP = zH.u;
          zh = zH.Z;
          zQ = zH.p;
          zC = zH.g;
          zl = zS = zH.v;
          zn = false;
          var zj = function (zJ) {
            if (!zn) {
              if (!zY) {
                zY = zJ;
                zh(zl);
              }
              var zc;
              var zk = Math.min(Math.max(zJ - zY - zP, 0), 0x4b0) / 0x4b0;
              zQ(zl = ((zc = zk) <= 0.3 ? zc * zc : 1 + 1.25 * Math.pow(zc - 1, 3) + 0.25 * Math.pow(zc - 1, 2)) * (zg - zS) + zS);
              if (1 === zk) {
                zn = true;
                zC(zl);
              }
            }
          };
          zF.push(zj);
        });
      }
    }
    (function (zr, zX) {
      de(zr, "viewBox", "0 0 ".concat(zX, " ").concat(152));
      ve(zr, "overflow", "hidden", "height", 152);
    })(zs, 137 * zy.length);
    zy.forEach(function (zr) {
      de(zr.i, "transform", "translate(".concat(zr.l.x, ", ").concat(zr.l.y, ')'));
    });
    return {
      'H': function () {
        return z7;
      },
      'M': function () {
        return z8;
      },
      'V': function () {
        return 152;
      },
      'k': function () {
        var zX;
        var zT;
        var zW;
        if (!(1 === zz || 0 !== zz && 3 !== zz)) {
          zz = 1;
          zd();
          zX = function (zH) {
            zF.forEach(function (zS) {
              return zS(zH);
            });
          };
          (zW = function (zH) {
            zT = requestAnimationFrame(zW);
            zX(zH);
          })(0);
          zE = function () {
            cancelAnimationFrame(zT);
          };
        }
      },
      '_': function (zr) {
        if (1 === zz) {
          zz = 2;
          zm = zr;
        }
      },
      'F': function () {
        var zX;
        if (0 !== zz) {
          zz = 0;
          if (z7) {
            if (!(null === (zX = z7.parentElement) || undefined === zX)) {
              zX.removeChild(z7);
            }
          }
          if (zE) {
            zE();
          }
        }
      }
    };
  }
  var ye = `/${102}` + "/shared/";
  var be = '';
  window.GtmId = new String(window.GtmId);
  var _e = J() ? 2015 : 5;
  var ke = k;
  var we = Date.now();
  var He = j.or;
  if (He) {
    if (0 === (He = function (z4) {
      var z6;
      !function (zs) {
        zs.kReplacer = "[a-zA-Z=]";
      }(z6 || (z6 = {}));
      var z7 = "object" == typeof window ? window : global;
      var z8 = z7.parseInt;
      var z9 = z7.isNaN;
      var zz = z7.String;
      var zF = z7.RegExp;
      var zE = z7.Number;
      var zm = zF(z6.kReplacer, 'g');
      var za = z8(null == z4 ? undefined : z4.substring(zE("0x0"), zE("0x2")), zE("0xa"));
      return z9(za) && (null == z4 ? undefined : z4.includes('.')) ? z4 : null == z4 ? undefined : z4.substring(zE("0x2")).replace(zm, function (zs) {
        if ('=' === zs) {
          return '.';
        }
        var zi = zs.charCodeAt(0);
        var zy = zi >= zE("0x61") ? zE("0x61") : zE("0x41");
        var zd = (zi - zy - za + zE("0x1a")) % zE("0x1a") + zy;
        return zz.fromCharCode(zd);
      });
    }(He)).indexOf('//')) {
      He = location.protocol + He;
    } else if (!/^https?:/.test(He)) {
      He = location.protocol + '//' + He;
    }
    be = He + location.pathname.replace("index.html", '');
    ye = He + ye;
  }
  var Se = j.blockpage;
  if (Se) {
    var Me = document.createElement("div");
    Me.id = "block-page";
    Me.style.backgroundColor = '#' + Se;
    document.body.appendChild(Me);
  }
  var Te;
  var Pe = function (z4, z5, z6) {
    var z7 = {
      'MHfgE': function (zi, zy) {
        return zi !== zy;
      },
      'mUoxZ': "drpFM",
      'pZyQt': function (zi, zy, zd) {
        return zi(zy, zd);
      },
      'LcVDj': function (zi, zy, zd, zr) {
        return zi(zy, zd, zr);
      },
      'LVwEv': "transform",
      'ZGvFp': "scale(",
      'IzCuc': function (zi, zy) {
        return zi / zy;
      },
      'NPzfK': function (zi, zy) {
        return zi === zy;
      },
      'aLgib': "lVtuA",
      'RvKQF': "zULTK",
      'NGYUF': "resize",
      'efoYM': function (zi, zy, zd) {
        return zi(zy, zd);
      },
      'AzVPf': "filter",
      'hbKFc': function (zi, zy, zd, zr, zX, zT, zW, zH) {
        return zi(zy, zd, zr, zX, zT, zW, zH);
      },
      'VpeYO': "motionFilter-",
      'xmlUl': "width",
      'cxNRa': "300%",
      'ZXuFF': "-100%",
      'HyDZz': function (zi, zy, zd) {
        return zi(zy, zd);
      },
      'msqAX': "feGaussianBlur",
      'LMTKW': "class",
      'ZxEht': "blurValues",
      'APjKI': "SourceGraphic",
      'DmPgJ': "stdDeviation",
      'TJcyb': "0 0",
      'qjIny': "vdgja",
      'zIBtx': function (zi) {
        return zi();
      },
      'mMSOT': function (zi, zy) {
        return zi(zy);
      },
      'SoVXk': function (zi, zy) {
        return zi(zy);
      },
      'aXCcy': function (zi, zy) {
        return zi < zy;
      },
      'vKNcc': function (zi, zy) {
        return zi > zy;
      },
      'ZZxLz': function (zi) {
        return zi();
      },
      'dTtUk': function (zi, zy, zd, zr, zX, zT) {
        return zi(zy, zd, zr, zX, zT);
      },
      'aHRyh': function (zi, zy) {
        return zi + zy;
      },
      'YmtHH': function (zi, zy) {
        return zi * zy;
      },
      'vwFsn': function (zi, zy) {
        return zi(zy);
      },
      'rgCuJ': function (zi, zy) {
        return zi === zy;
      },
      'aAJJH': "(((.+)+)+)+$",
      'hhaTY': "[a-zA-Z=]",
      'UAWXk': function (zi, zy) {
        return zi >= zy;
      },
      'JuRGw': function (zi, zy) {
        return zi < zy;
      },
      'rcwmg': function (zi, zy) {
        return zi == zy;
      },
      'llwNx': "string",
      'jpxuK': "invaliddata",
      'SVAWe': "dqlap",
      'gqlXv': "opacity",
      'sTVqc': "translateY(0px)",
      'gHCnP': function (zi, zy, zd, zr) {
        return zi(zy, zd, zr);
      },
      'eatGR': "translateY(",
      'GwjzH': "px) scale(",
      'oggbZ': "OHlSD",
      'tvdeB': function (zi, zy) {
        return zi - zy;
      },
      'ZbrjZ': function (zi, zy, zd, zr) {
        return zi(zy, zd, zr);
      },
      'QCJLe': "transition",
      'NIqFh': "opacity 0.28s ease-in",
      'OwNCs': function (zi, zy, zd, zr) {
        return zi(zy, zd, zr);
      },
      'IXUVm': "transform 0.5s ease-in-out",
      'MKBsV': function (zi, zy, zd, zr) {
        return zi(zy, zd, zr);
      },
      'NhYQR': "opacity 0s linear 0.28s, transform 0.5s ease-in-out",
      'SbHhU': function (zi, zy) {
        return zi === zy;
      },
      'SIvrz': function (zi, zy) {
        return zi !== zy;
      },
      'DAyLG': "pAars",
      'wNMil': function (zi, zy, zd, zr, zX, zT) {
        return zi(zy, zd, zr, zX, zT);
      },
      'DLmnE': "px)",
      'jFflS': function (zi, zy) {
        return zi === zy;
      },
      'kgcLV': "tUKSw",
      'Cmoiz': "CGbeJ",
      'VScOp': "tiFRd",
      'drryy': function (zi, zy, zd, zr) {
        return zi(zy, zd, zr);
      },
      'cbDmb': "div",
      'VqpXf': "il-err-container",
      'UCaBp': function (zi, zy, zd, zr) {
        return zi(zy, zd, zr);
      },
      'YmSLZ': function (zi, zy, zd, zr) {
        return zi(zy, zd, zr);
      },
      'CzCIn': "il-err-title",
      'VMifm': function (zi, zy, zd, zr) {
        return zi(zy, zd, zr);
      },
      'EStxY': function (zi, zy, zd, zr) {
        return zi(zy, zd, zr);
      },
      'zKQtN': "il-err-desc",
      'LqmmM': function (zi, zy) {
        return zi > zy;
      },
      'kxIBx': function (zi, zy) {
        return zi > zy;
      },
      'pjnAj': function (zi, zy) {
        return zi === zy;
      },
      'dwFXH': "uLNwd",
      'zzRpk': function (zi, zy, zd, zr) {
        return zi(zy, zd, zr);
      },
      'vTrDY': function (zi, zy, zd, zr) {
        return zi(zy, zd, zr);
      },
      'aWlhq': "il-btn-container",
      'niQBs': function (zi, zy) {
        return zi !== zy;
      },
      'sefVq': "zHXDx",
      'OwCkr': "khCaA",
      'YYpRy': function (zi, zy, zd, zr) {
        return zi(zy, zd, zr);
      },
      'hFMKG': "il-btn",
      'GCHxl': function (zi, zy, zd, zr) {
        return zi(zy, zd, zr);
      },
      'plABb': "flex",
      'MyxJc': function (zi, zy) {
        return zi === zy;
      },
      'DGEsc': "scJIX",
      'kcAXw': "IokLv",
      'rTVMb': function (zi, zy) {
        return zi(zy);
      },
      'iqZMi': function (zi, zy) {
        return zi === zy;
      },
      'MMnBl': "lcFtP",
      'ICFvG': "SRVXN",
      'wOEwB': function (zi, zy, zd, zr) {
        return zi(zy, zd, zr);
      },
      'dtxBi': "scale(1)",
      'UsDKV': "pre",
      'pSlES': function (zi, zy, zd, zr, zX, zT, zW, zH, zY, zS, zg, zU) {
        return zi(zy, zd, zr, zX, zT, zW, zH, zY, zS, zg, zU);
      },
      'lXMtT': "font",
      'EWsxM': "20px Roboto, sans-serif",
      'BQfYi': "color",
      'Fiykz': "#ccc",
      'IWRdZ': "text-align",
      'Qxtqo': "center",
      'rjTHk': "opacity 1.2s ease-in-out",
      'Nligd': function (zi, zy) {
        return zi !== zy;
      },
      'XNMkk': "FqbHv",
      'Smmzw': "YfvjA",
      'Aqvsn': function (zi, zy) {
        return zi === zy;
      },
      'uWOlU': function (zi) {
        return zi();
      },
      'koxAU': function (zi, zy) {
        return zi === zy;
      },
      'gIwHe': function (zi, zy) {
        return zi === zy;
      },
      'KUhgv': function (zi) {
        return zi();
      },
      'UBKvw': "bGanD",
      'HWYxH': "KVdAu",
      'bdVRP': function (zi, zy, zd) {
        return zi(zy, zd);
      },
      'oCeGj': "initial-loader",
      'BgYDL': "il-wrapper",
      'lLrkW': "style",
      'iaONE': ".initial-loader{background-color:#000;height:inherit;margin:auto;position:absolute;transition:opacity .35s ease-in;width:inherit}.il-wrapper,.initial-loader{align-items:center;display:flex;flex-direction:column;justify-content:center}.il-circle-loading{align-items:center;display:flex;height:10px;justify-content:space-between;width:40px}.il-circle{animation-direction:alternate;animation-duration:.25s;animation-iteration-count:infinite;animation-name:il-circle-bounce;animation-timing-function:ease-out;background-color:#30a2d0;border-radius:50%;height:10px;position:relative;width:10px}.il-circle:first-of-type{animation-delay:0s}.il-circle:nth-of-type(2){animation-delay:-75ms}.il-circle:nth-of-type(3){animation-delay:-.15s}@keyframes il-circle-bounce{0%{bottom:0}90%,to{bottom:15px}}.il-err-container{display:flex;flex-direction:column;font-family:PingFangSC-Regular;position:absolute;width:413px}.il-err-title{color:#fff;font-size:27px;padding:10px 0;text-align:center}.il-err-desc{color:#98989e;font-size:18px;line-height:24px;text-align:center}.il-btn-container{color:#fff;padding-top:68px}.il-btn,.il-btn-container{align-items:center;display:flex;justify-content:center}.il-btn{border:.6px solid #fff;border-radius:6px;cursor:pointer;font-family:PingFangSC-Semibold;font-size:20px;margin:0 7px;min-height:26px;min-width:120px;padding:17px 25px;text-align:center;user-select:none}.il-btn:active{opacity:.6}",
      'Scdrz': function (zi, zy) {
        return zi === zy;
      },
      'EfTuC': function (zi, zy) {
        return zi !== zy;
      },
      'MgHPA': "duGoZ",
      'wVqQT': "il-circle-loading ",
      'ARjpr': function (zi, zy, zd, zr) {
        return zi(zy, zd, zr);
      },
      'UdYFR': function (zi, zy, zd, zr) {
        return zi(zy, zd, zr);
      },
      'HROBd': "il-circle",
      'RPLSI': function (zi, zy) {
        return zi === zy;
      },
      'HEoaW': function (zi, zy, zd) {
        return zi(zy, zd);
      }
    };
    var z8 = z7.wOEwB(ue, z4, z7.cbDmb, 0);
    z7.VMifm(de, z8, z7.LMTKW, z7.oCeGj);
    var z9;
    var zz;
    var zF;
    var zE = z7.zzRpk(ue, z8, z7.cbDmb, 0);
    z7.GCHxl(de, zE, z7.LMTKW, z7.BgYDL);
    var zm = z7.efoYM(me, 1440, 1024);
    var za = function (zi, zy) {
      var zd = {
        'cKNCA': function (zX, zT, zW) {
          return z7.efoYM(zX, zT, zW);
        },
        'jOBUb': z7.AzVPf,
        'DuFTX': function (zX, zT, zW, zH, zY, zS, zg, zU) {
          return z7.hbKFc(zX, zT, zW, zH, zY, zS, zg, zU);
        },
        'VLUrn': z7.VpeYO,
        'rXdcB': z7.xmlUl,
        'ruTOB': z7.cxNRa,
        'YtPVJ': z7.ZXuFF,
        'nrkUx': function (zX, zT, zW) {
          return z7.HyDZz(zX, zT, zW);
        },
        'ixtDo': z7.msqAX,
        'jblMH': z7.LMTKW,
        'PWvZE': z7.ZxEht,
        'CmLCL': z7.APjKI,
        'AOMlF': z7.DmPgJ,
        'rsoot': z7.TJcyb
      };
      if (z7.MHfgE(z7.qjIny, z7.qjIny)) {
        z7.A = z8;
        z9 = undefined;
      } else {
        var zr = function () {
          if (z7.MHfgE(z7.mUoxZ, z7.mUoxZ)) {
            z7.A = this.A;
            if (z8.P) {
              z9.P();
            }
          } else {
            var zX = z7.pZyQt(me, window.innerWidth, window.innerHeight);
            z7.LcVDj(ve, zi, z7.LVwEv, z7.ZGvFp.concat(z7.IzCuc(zy, zX).toFixed(4), ')'));
          }
        };
        window.addEventListener(z7.NGYUF, zr);
        z7.zIBtx(zr);
        return function () {
          if (z7.NPzfK(z7.aLgib, z7.RvKQF)) {
            var zX = z7.efoYM(zz, zF, zd.jOBUb);
            z7.hbKFc(zE, zX, 'id', zd.VLUrn.concat(zm), zd.rXdcB, zd.ruTOB, 'x', zd.YtPVJ);
            var zT = z7.HyDZz(za, zX, zd.ixtDo);
            z7.hbKFc(zs, zX, zd.jblMH, zd.PWvZE, 'in', zd.CmLCL, zd.AOMlF, zd.rsoot);
            return zT;
          } else {
            window.removeEventListener(z7.NGYUF, zr);
          }
        };
      }
    }(zE, zm);
    var zs = z7.LcVDj(ue, document.head, z7.lLrkW, 0);
    zs.textContent = z7.iaONE;
    if (z7.Scdrz(0, z5)) {
      if (z7.EfTuC(z7.MgHPA, z7.MgHPA)) {
        var zy = z7.mMSOT(zz, zF[zE] || 0);
        var zd = z7.SoVXk(zm, za[zs] || 0);
        if (z7.aXCcy(zy, zd)) {
          return -1;
        }
        if (z7.vKNcc(zy, zd)) {
          return 1;
        }
      } else {
        z7.zzRpk(de, zz = z7.vTrDY(ue, zE, z7.cbDmb, 0), z7.LMTKW, z7.wVqQT);
        for (var zt = 0; z7.JuRGw(zt, 3); zt++) {
          z7.ARjpr(de, z7.UdYFR(ue, zz, z7.cbDmb, 0), z7.LMTKW, z7.HROBd);
        }
      }
    } else if (z7.RPLSI(1, z5)) {
      (z9 = z7.HEoaW(Ze, zE, z6)).k();
    }
    return {
      'handleError': function (zi, zy, zd) {
        var zr = {
          'esGMB': function (zU, zP) {
            return z7.vwFsn(zU, zP);
          },
          'yAaDj': function (zU, zP) {
            return z7.rgCuJ(zU, zP);
          },
          'SDXuW': z7.aAJJH,
          'QOpGm': function (zU, zP) {
            return z7.vwFsn(zU, zP);
          },
          'xYTzL': z7.hhaTY,
          'LAcmu': function (zU, zP) {
            return z7.UAWXk(zU, zP);
          },
          'LlzCF': function (zU, zP) {
            return z7.JuRGw(zU, zP);
          },
          'KySCR': function (zU, zP) {
            return z7.rcwmg(zU, zP);
          },
          'LfhxY': z7.llwNx,
          'luurg': z7.jpxuK,
          'fSmJL': z7.SVAWe,
          'tIJVP': function (zU, zP, zh, zQ, zC, zl) {
            return z7.dTtUk(zU, zP, zh, zQ, zC, zl);
          },
          'Ojblu': z7.gqlXv,
          'YSuBa': z7.LVwEv,
          'IjwGi': z7.sTVqc,
          'FikHG': function (zU, zP, zh, zQ) {
            return z7.gHCnP(zU, zP, zh, zQ);
          },
          'ADRRN': function (zU, zP, zh, zQ) {
            return z7.gHCnP(zU, zP, zh, zQ);
          },
          'LUqpg': z7.eatGR,
          'uZwhb': z7.GwjzH,
          'mOAre': z7.oggbZ,
          'uwSwZ': function (zU, zP) {
            return z7.aHRyh(zU, zP);
          },
          'qqDVc': function (zU, zP) {
            return z7.tvdeB(zU, zP);
          },
          'yRfIH': function (zU, zP, zh, zQ) {
            return z7.ZbrjZ(zU, zP, zh, zQ);
          },
          'xTjoG': z7.QCJLe,
          'GOIgS': z7.NIqFh,
          'FSMyt': function (zU, zP, zh, zQ) {
            return z7.OwNCs(zU, zP, zh, zQ);
          },
          'UlqbA': z7.IXUVm,
          'KufWt': function (zU, zP, zh, zQ) {
            return z7.MKBsV(zU, zP, zh, zQ);
          },
          'LwbTE': z7.NhYQR,
          'jvZpY': function (zU) {
            return z7.ZZxLz(zU);
          },
          'bQeOC': function (zU, zP) {
            return z7.SbHhU(zU, zP);
          },
          'IJzEZ': function (zU, zP, zh, zQ) {
            return z7.OwNCs(zU, zP, zh, zQ);
          },
          'tfaYl': function (zU, zP, zh) {
            return z7.efoYM(zU, zP, zh);
          },
          'wGZby': function (zU, zP) {
            return z7.SIvrz(zU, zP);
          },
          'pSzXI': z7.DAyLG,
          'zARbj': function (zU, zP, zh, zQ, zC, zl) {
            return z7.wNMil(zU, zP, zh, zQ, zC, zl);
          },
          'TDfEa': z7.DLmnE
        };
        if (z7.jFflS(z7.kgcLV, z7.Cmoiz)) {
          for (var zU = function () {
            var zh;
            var zQ;
            var zC = zU.pop();
            if (z7.rgCuJ(null, zi)) {
              zy.apply(undefined, zC);
            } else {
              zh = zC[0];
              zQ = function (zl) {
                if (zl) {
                  zC[0] = zl;
                }
                zh.apply(undefined, zC);
              };
              zr.getSignedUrl(zh).then(zQ, function () {
                return z7.vwFsn(zQ, '');
              });
            }
          }; zs.length;) {
            z7.ZZxLz(zU);
          }
        } else {
          if (z7.jFflS(undefined, zd)) {
            zd = [];
          }
          if (!zF) {
            if (z7.SIvrz(z7.VScOp, z7.VScOp)) {
              var zU = {
                'iCXlr': function (zP, zh) {
                  return z7.vwFsn(zP, zh);
                }
              };
              z6.forEach(function (zP) {
                return zU.iCXlr(zP, z8);
              });
            } else {
              z7.LcVDj(de, zF = z7.drryy(ue, zE, z7.cbDmb, 0), z7.LMTKW, z7.VqpXf);
              var zX = z7.UCaBp(ue, zF, z7.cbDmb, 0);
              z7.YmSLZ(de, zX, z7.LMTKW, z7.CzCIn);
              zX.textContent = zi;
              var zT = z7.VMifm(ue, zF, z7.cbDmb, 0);
              z7.EStxY(de, zT, z7.LMTKW, z7.zKQtN);
              zT.textContent = zy;
              if (z7.LqmmM(zd.length, 2)) {
                zd.length = 2;
              }
              if (z7.kxIBx(zd.length, 0)) {
                if (z7.pjnAj(z7.dwFXH, z7.dwFXH)) {
                  var zW = z7.zzRpk(ue, zF, z7.cbDmb, 0);
                  z7.vTrDY(de, zW, z7.LMTKW, z7.aWlhq);
                  for (var zH = 0; z7.aXCcy(zH, zd.length); zH++) {
                    if (z7.niQBs(z7.sefVq, z7.OwCkr)) {
                      var zY = z7.YYpRy(ue, zW, z7.cbDmb, 0);
                      z7.YmSLZ(de, zY, z7.LMTKW, z7.hFMKG);
                      if (z7.vKNcc(zd.length, 1)) {
                        z7.GCHxl(ve, zY, z7.plABb, '1');
                      }
                      zY.textContent = zd[zH].label;
                      var zS = zd[zH].onclick;
                      if (zS) {
                        zY.onclick = zS;
                      }
                    } else {
                      var zU = ''.concat(zm, '-').concat(za);
                      return {
                        'i': z7.dTtUk(zs, zt, 112, 20, zU, zi),
                        't': z7.pZyQt(zy, zd, zU),
                        'o': +zr,
                        'h': 0x0,
                        'l': {
                          'x': z7.aHRyh(z7.YmtHH(137, zX), 12.5),
                          'y': 0x14
                        }
                      };
                    }
                  }
                } else {
                  return z6.toString().search(AGhbyG.SDXuW).toString().constructor(z7).search(AGhbyG.SDXuW);
                }
              }
              if (z7.MyxJc(0, z5)) {
                if (!z7.rcwmg(null, zz)) {
                  zz.remove();
                }
              } else {
                if (z7.MyxJc(1, z5)) {
                  if (z7.jFflS(z7.DGEsc, z7.kcAXw)) {
                    z7 = z7.vwFsn(z8, z9);
                  } else {
                    var zg = function () {
                      var zU = {
                        'imDPF': function (zC, zl) {
                          return z7.UAWXk(zC, zl);
                        },
                        'OBOvg': function (zC, zl) {
                          return z7.JuRGw(zC, zl);
                        },
                        'cURTd': function (zC, zl) {
                          return z7.rgCuJ(zC, zl);
                        },
                        'ituBl': function (zC, zl) {
                          return z7.vwFsn(zC, zl);
                        },
                        'SWlld': function (zC, zl) {
                          return z7.rcwmg(zC, zl);
                        },
                        'lbkcQ': zr.LfhxY,
                        'qpvii': zr.luurg,
                        'mnlkm': zr.fSmJL,
                        'uAJIh': function (zC, zl, zn, zD, zb, zj) {
                          return z7.dTtUk(zC, zl, zn, zD, zb, zj);
                        },
                        'xDxOf': zr.Ojblu,
                        'JBnuZ': zr.YSuBa,
                        'PVVeA': zr.IjwGi,
                        'uZeYz': function (zC, zl, zn, zD) {
                          return z7.gHCnP(zC, zl, zn, zD);
                        },
                        'BHzly': function (zC, zl, zn, zD) {
                          return z7.gHCnP(zC, zl, zn, zD);
                        },
                        'QOWJt': zr.LUqpg,
                        'NhrzZ': zr.uZwhb
                      };
                      if (z7.rgCuJ(zr.mOAre, zr.mOAre)) {
                        var zP = z9.M();
                        var zh = z9.H();
                        var zQ = z7.aHRyh(z7.tvdeB(zF.offsetTop, z9.V()), 2);
                        z7.ZbrjZ(ve, zP, zr.xTjoG, zr.GOIgS);
                        z7.OwNCs(ve, zh, zr.xTjoG, zr.UlqbA);
                        z7.MKBsV(ve, zF, zr.xTjoG, zr.LwbTE);
                        z7.vwFsn(fe, function () {
                          var zC = {
                            'xHFaD': function (zl, zn) {
                              return z7.rgCuJ(zl, zn);
                            },
                            'vWKiM': function (zl, zn) {
                              return z7.rcwmg(zl, zn);
                            },
                            'npPaM': zU.lbkcQ,
                            'WRGxM': zU.qpvii
                          };
                          if (z7.rgCuJ(zU.mnlkm, zU.mnlkm)) {
                            z7.dTtUk(ve, zF, zU.xDxOf, '1', zU.JBnuZ, zU.PVVeA);
                            z7.gHCnP(ve, zP, zU.xDxOf, '0');
                            z7.gHCnP(ve, zh, zU.JBnuZ, zU.QOWJt.concat(zQ, zU.NhrzZ).concat(0.7, ')'));
                          } else {
                            if (z7.UAWXk(zt.status, 200) && z7.JuRGw(zi.status, 300) || z7.rgCuJ(0, zy.status) && zd.response) {
                              (function (zl, zn) {
                                if (z7.rgCuJ(1, zl.T) && z7.rcwmg(zC.npPaM, typeof zn)) {
                                  try {
                                    zn = zP.parse(zn);
                                  } catch (zD) {
                                    zl.A = zD;
                                    zn = undefined;
                                  }
                                }
                                if (z7.rcwmg(null, zl.A) && z7.rcwmg(null, zn)) {
                                  zl.A = zC.WRGxM;
                                } else {
                                  zl.D = zn;
                                }
                              })(zX, zT.response);
                            } else {
                              zW.A = ''.concat(zH.status, ": ").concat(zY.statusText);
                            }
                            z7.vwFsn(zS, zg);
                          }
                        });
                      } else {
                        z5.kReplacer = zr.xYTzL;
                      }
                    };
                    z7.rTVMb(fe, function () {
                      var zU = {
                        'yVqnG': function (zP, zh) {
                          return z7.rgCuJ(zP, zh);
                        },
                        'bagzL': function (zP) {
                          return z7.ZZxLz(zP);
                        },
                        'uNGyz': function (zP, zh) {
                          return z7.rgCuJ(zP, zh);
                        },
                        'mOcBs': function (zP, zh) {
                          return z7.rgCuJ(zP, zh);
                        },
                        'NnwOq': function (zP, zh) {
                          return z7.SbHhU(zP, zh);
                        },
                        'ryMcS': function (zP, zh) {
                          return z7.SbHhU(zP, zh);
                        },
                        'aTovI': function (zP, zh, zQ, zC) {
                          return z7.OwNCs(zP, zh, zQ, zC);
                        },
                        'KpUSx': zr.Ojblu,
                        'WEBAZ': function (zP, zh, zQ) {
                          return z7.efoYM(zP, zh, zQ);
                        }
                      };
                      if (z7.SIvrz(zr.pSzXI, zr.pSzXI)) {
                        z7.OwNCs(zy, zd, zU.KpUSx, '0');
                        z7.efoYM(zr, function () {
                          var zG;
                          var zN;
                          var zR;
                          if (z7.rgCuJ(1, zC)) {
                            zl.F();
                          }
                          z7.ZZxLz(zn);
                          if (!(z7.rgCuJ(null, zG = zD.parentNode) || z7.rgCuJ(undefined, zG))) {
                            zG.removeChild(zb);
                          }
                          if (!(z7.rgCuJ(null, zN = zj.parentNode) || z7.SbHhU(undefined, zN))) {
                            zN.removeChild(zJ);
                          }
                          if (!(z7.rgCuJ(null, zR = zV.parentNode) || z7.SbHhU(undefined, zR))) {
                            zR.removeChild(zc);
                          }
                          if (zk) {
                            z7.ZZxLz(zL);
                          }
                        }, 350);
                      } else {
                        z7.wNMil(ve, zF, zr.Ojblu, '0', zr.YSuBa, zr.LUqpg.concat(zF.offsetHeight, zr.TDfEa));
                        z9._(zg);
                      }
                    });
                  }
                }
              }
            }
          }
        }
      },
      'resume': function () {
        if (z7.iqZMi(z7.MMnBl, z7.ICFvG)) {
          if (z9) {
            zz[0] = zF;
          }
          zE.apply(undefined, zm);
        } else {
          var zi = zF;
          zF = undefined;
          if (zi) {
            zi.remove();
          }
          z9.k();
          var zy = z9.M();
          var zd = z9.H();
          z7.YYpRy(ve, zy, z7.gqlXv, '1');
          z7.wOEwB(ve, zd, z7.LVwEv, z7.dtxBi);
        }
      },
      'hideLoading': function (zi) {
        if (z7.MyxJc(z7.UBKvw, z7.HWYxH)) {
          var zd;
          (zd = z7.MKBsV(z9, zz, z7.UsDKV, 0)).textContent = z8;
          z7.pSlES(zF, zd, z7.lXMtT, z7.EWsxM, z7.BQfYi, z7.Fiykz, z7.gqlXv, '0', z7.IWRdZ, z7.Qxtqo, z7.QCJLe, z7.rjTHk);
          return zd;
        } else {
          z7.MKBsV(ve, z8, z7.gqlXv, '0');
          z7.bdVRP(setTimeout, function () {
            if (z7.Nligd(z7.XNMkk, z7.Smmzw)) {
              var zy;
              var zd;
              var zr;
              if (z7.Aqvsn(1, z5)) {
                z9.F();
              }
              z7.uWOlU(za);
              if (!(z7.jFflS(null, zy = zs.parentNode) || z7.SbHhU(undefined, zy))) {
                zy.removeChild(zs);
              }
              if (!(z7.koxAU(null, zd = zE.parentNode) || z7.gIwHe(undefined, zd))) {
                zd.removeChild(zE);
              }
              if (!(z7.Aqvsn(null, zr = z8.parentNode) || z7.koxAU(undefined, zr))) {
                zr.removeChild(z8);
              }
              if (zi) {
                z7.KUhgv(zi);
              }
            } else {
              return z5;
            }
          }, 350);
        }
      }
    };
  }(document.body, J() ? 1 : 0, ne(4));
  function Ee(z4, z5) {
    var z7 = ''.concat(ne(z4), " (").concat(z5, ')');
    Pe.handleError(ne(0), z7, [{
      'label': ne(3),
      'onclick': function () {
        location.reload();
      }
    }]);
  }
  function Ve(z4) {
    if (null != z4) {
      return Ee(1, "G1002");
    }
    if ("undefined" == typeof shell) {
      Ee(1, "G1008");
    } else {
      setTimeout(function () {
        var z7 = {
          SharedPath: ye,
          GameDir: be,
          AssetTable: "c445ebb91e.48cfa.json",
          ShellDir: "984721902a/",
          Plugins: "e02b9bf0d2,a346494745,589a728c8d,2fd142260e,2c6e37b73c,b85c56d865,c03a2652ad",
          Requirements: "minMemory=1024&minDiskSpace=1024&whiteList=chrome-59%2Cchrome%20webview-59%2Cfirefox-58%2Csafari-11%2Cedge-79&minOSVersion=iOS-11%2CAndroid-5%2CMacOS-10.10%2CWindows-7",
          LocalizedTitleKey: "MermaidRiches.Title",
          SupportedLanguages: "ar,az,bg,bn,cs,da,de,el,en,en-social,en-stkus,es,et,fa,fi,fr,hi,hu,hy,id,it,ja,ko,lo,lt,mn,my,nl,no,pl,pt,pt-br,ro,ru,sh,si,sk,sq,sv,th,tr,uk,ur,uz,vi,zh",
          ThemeColor: "#B904CE",
          LobbyMode: false,
          SupportXSMaxRatio: 2,
          AspectRatio: '',
          Orientation: 1,
          Name: "Mermaid Riches",
          Version: "3.25.0.0/7.0.0/5.2.0-0",
          Index: 102,
          Identifier: "com.pgsoft.slot.mermaidriches",
          PluginDependencies: Fn,
          EIF: 16777217,
          Ecma: _e,
          Platform: ke,
          Blobs: O,
          BootTime: we,
          initialLoader: Pe
        };
        return shell.start(Te, z7);
      }, 0);
    }
  }
  var FA = {
    event_category: "engagement"
  };
  // if (undefined !== window.isSecureContext ? window.isSecureContext : window.location.protocol.startsWith("https:")) {
    se(ye + "984721902a/" + "index.json", 1, function (z4, z5) {
      if (null != z4) {
        return Ee(1, "G1002");
      }
      var z7;
      z7 = (Te = z5).version;
      if ("string" == typeof z7 && true && -1 !== function (z9, zz) {
        var zF = z9.split('-');
        var zE = zz.split('-');
        var zm = ce(zF[0], zE[0]);
        if (0 !== zm) {
          return zm;
        }
        var za = zF[1];
        var zs = zE[1];
        return za && !zs ? -1 : !za && zs ? 1 : za || zs ? ce(za, zs) : 0;
      }(z7, "11.6.0-rc.1")) {
        se(ye + "984721902a/" + Te.main, 2, Ve);
      } else {
        Ee(2, "G1011");
      }
    });
  // } else {
  //   gtag("event", "insecure_context", FA);
  //   Pe.handleError(ne(5), ne(6));
  // }
}();