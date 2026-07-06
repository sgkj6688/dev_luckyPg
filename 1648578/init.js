!function () {
  'use strict';

  ;
  var WS = {
    index: "b994a",
    config: "e98e9"
  };
  var WL = {
    index: "4da8c",
    config: "a879c"
  };
  var Wa = {
    resources: WS,
    main: WL
  };
  var Ww = {
    platform: "web-mobile",
    groupList: ["default"],
    collisionMatrix: [[true]],
    hasResourcesBundle: true,
    hasStartSceneBundle: false,
    remoteBundles: [],
    subpackages: [],
    launchScene: "db://assets/imports/scene/main.fire"
  };
  Ww.orientation = '';
  Ww.jsList = [];
  Ww.bundleVers = Wa;
  window.DEBUG = false;
  window.PREVIEW = false;
  window.EDITOR = false;
  window.GtmId = "GTM-WV99ST2";
  window._CCSettings = Ww;
  var Wv = {
    e02b9bf0d2: ">=11.5.0-rc.1",
    a346494745: ">=10.5.0-rc.1",
    "589a728c8d": ">=7.5.0-rc.1",
    "2fd142260e": ">=9.5.0-rc.1",
    "2c6e37b73c": ">=6.5.0-rc.1",
    b85c56d865: ">=5.5.0-rc.1",
    c03a2652ad: ">=7.2.0-rc.1"
  };
  console.log("Game/Boot/Engine", "1.12.0.2/7.0.0/5.2.0-0");
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
      description: z5
    };
    z8.fatal = !!z6;
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
    var zq = "Uncaught " + x.call(V, z9);
    P.call(V, zq);
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
    'app_name': "Shark Bounty",
    'app_version': "1.12.0.2/7.0.0/5.2.0-0"
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
        P: zW,
        R: zW
      };
      return zz;
      function zW() {
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
            var zW = URL.createObjectURL(zz);
            function zb(zF) {
              if (zF.filename === zW) {
                z6.A = zF.error;
                delete O[zW];
              }
            }
            window.addEventListener("error", zb);
            O[zW] = z6.S;
            var zq = document.createElement("script");
            zq.src = zW;
            zq.defer = true;
            zq.onload = function () {
              window.removeEventListener("error", zb);
              document.head.removeChild(zq);
              URL.revokeObjectURL(zW);
              W(z6);
            };
            document.head.appendChild(zq);
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
          var zz = {
            'zyQBz': function (zW, zq) {
              return zW(zq);
            },
            'sbrBx': function (zW, zq) {
              return zW === zq;
            },
            'oTShH': function (zW) {
              return zW();
            },
            'vRwmv': function (zW, zq) {
              return zW === zq;
            },
            'dSWLf': "LcewU",
            'zfBDn': "DrAiO",
            'vbAdh': function (zW, zq) {
              return zW == zq;
            },
            'bvsPs': "string",
            'Dmnpr': function (zW, zq) {
              return zW !== zq;
            },
            'Muqzh': "Tosqu",
            'sAlQu': function (zW, zq) {
              return zW !== zq;
            },
            'nuGNq': "ehYXF",
            'vtCii': function (zW, zq) {
              return zW == zq;
            },
            'qihXn': "invaliddata",
            'tTtcB': function (zW, zq) {
              return zW + zq;
            },
            'mrxlc': function (zW, zq) {
              return zW - zq;
            },
            'EPsoZ': function (zW, zq, zb, zF) {
              return zW(zq, zb, zF);
            },
            'pmeGs': "transition",
            'WVlpC': "opacity 0.28s ease-in",
            'MVUcO': function (zW, zq, zb, zF) {
              return zW(zq, zb, zF);
            },
            'lBNju': "transform 0.5s ease-in-out",
            'JQTPH': "opacity 0s linear 0.28s, transform 0.5s ease-in-out",
            'dVDMm': function (zW, zq) {
              return zW(zq);
            }
          };
          if (z8.status >= 200 && z8.status < 300 || 0 === z8.status && z8.response) {
            (function (zW, zq) {
              if (zz.vRwmv(zz.dSWLf, zz.zfBDn)) {
                return 152;
              } else {
                if (zz.sbrBx(1, zW.T) && zz.vbAdh(zz.bvsPs, typeof zq)) {
                  try {
                    if (zz.Dmnpr(zz.Muqzh, zz.Muqzh)) {
                      for (var zC = function () {
                        var zI;
                        var zg;
                        var zB = zC.pop();
                        if (zz.sbrBx(null, zx)) {
                          zN.apply(undefined, zB);
                        } else {
                          zI = zB[0];
                          zg = function (zt) {
                            if (zt) {
                              zB[0] = zt;
                            }
                            zI.apply(undefined, zB);
                          };
                          zD.getSignedUrl(zI).then(zg, function () {
                            return zz.zyQBz(zg, '');
                          });
                        }
                      }; zC.length;) {
                        zz.oTShH(zC);
                      }
                    } else {
                      zq = JSON.parse(zq);
                    }
                  } catch (zF) {
                    if (zz.sAlQu(zz.nuGNq, zz.nuGNq)) {
                      if (zz.sbrBx(1, z8)) {
                        z9 = 2;
                        zz = zW;
                      }
                    } else {
                      zW.A = zF;
                      zq = undefined;
                    }
                  }
                }
                if (zz.vbAdh(null, zW.A) && zz.vtCii(null, zq)) {
                  zW.A = zz.qihXn;
                } else {
                  zW.D = zq;
                }
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
        var zW = z7.split('?')[0];
        var zq = "load resource fail|G1002|src: ".concat(zW, "|reason: ").concat(z9);
        if (zz) {
          zq += "|retryCount: ".concat(zz);
        }
        gtag("event", "fault", {
          'event_category': "game_shell",
          'event_label': zq
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
        for (var zW = 1; zW < z9.length; zW++) {
          if (undefined === zz[z9[zW]]) {
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
  var WA = {
    en: "Launch Failed",
    de: "Start fehlgeschlagen",
    es: "La inicialización ha fallado",
    id: "Peluncuran Gagal",
    ja: "起動失敗",
    ko: "시작 실패"
  };
  WA["pt-br"] = "Falha no Lançamento";
  WA.ru = "Сбой при запуске";
  WA.sv = "Start misslyckades";
  WA.th = "การโหลดล้มเหลว";
  WA.vi = "Khởi chạy không thành công";
  WA.zh = "未能成功启动";
  var Ws = {
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
  var WK = {
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
  var WZ = {
    en: "Reload",
    de: "Neu laden",
    es: "Recargar",
    id: "Muat ulang",
    ja: "リロード",
    ko: "리로드",
    "pt-br": "Recarregar",
    ru: "Перезагрузить",
    sv: "Ladda om"
  };
  WZ.th = "รีโหลด";
  WZ.vi = "Tải lại";
  WZ.zh = "重新加载";
  var WR = {
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
  var Wk = {
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
  };
  var WP = {
    en: "PG content can only be accessed via a secure (HTTPS) connection. Please visit us through a secure site or contact the site's support team for assistance. Thank you.",
    de: "Der PG-Inhalt kann nur über eine sichere (HTTPS) Verbindung aufgerufen werden. Bitte besuchen Sie uns über eine sichere Website oder wenden Sie sich an den Kundenservice der Website, um Unterstützung zu erhalten. Vielen Dank.",
    es: "Solo es posible acceder al contenido de PG a través de una conexión segura (HTTPS). Visítenos a través de un sitio web seguro o póngase en contacto con el equipo de asistencia del sitio para obtener ayuda. Gracias.",
    id: "Konten PG hanya dapat diakses melalui koneksi aman (HTTPS). Harap kunjungi kami melalui situs aman atau hubungi tim dukungan situs untuk bantuan. Terima kasih.",
    ja: "PGコンテンツには、安全な (HTTPS) 接続経由でのみアクセスできます。安全なサイトからアクセスするか、サイトのサポートチームにご連絡ください。ご利用いただきありがとうございます。",
    ko: "PG 콘텐츠에는 안전한 (HTTPS) 연결을 통해서만 접속할 수 있습니다. 안전한 사이트를 통해 방문하시고 지원이 필요하시면 사이트 지원팀에 문의하세요. 감사합니다.",
    "pt-br": "O conteúdo do PG só pode ser acessado por meio de uma conexão segura (HTTPS). Visite-nos por meio de um site seguro ou entre em contato com a equipe de suporte do site para solicitar assistência. Obrigado.",
    ru: "Контент компании PG можно просматривать только через безопасное (HTTPS) подключение. Просим перейти на другой наш безопасный сайт или связаться со службой поддержки этого сайта для решения проблемы. Спасибо."
  };
  WP.sv = "Innehåll från PG kan endast kommas åt via en säker (HTTPS) anslutning. Besök oss genom en säker webbplats eller kontakta webbplatsens support-team för hjälp. Tack.";
  WP.th = "สามารถเข้าถึงเนื้อหา PG ได้ผ่านการเชื่อมต่อ (HTTPS) ที่ปลอดภัยเท่านั้น กรุณาเข้าชมผ่านเว็บไซต์ที่ปลอดภัยหรือติดต่อทีมงานสนับสนุนของเว็บไซต์เพื่อขอความช่วยเหลือ ขอขอบคุณ";
  WP.vi = "Chỉ có thể truy cập nội dung PG thông qua kết nối bảo mật (HTTPS). Vui lòng truy cập chúng tôi thông qua một trang web bảo mật hoặc liên hệ với đội ngũ hỗ trợ của trang web để được trợ giúp. Xin cảm ơn.";
  WP.zh = "PG内容仅能通过安全的HTTPS连接访问。请通过安全的网站访问我们，或联系网站支持团队寻求协助，谢谢。";
  var Wh = {
    '0': WA,
    '1': Ws,
    '2': WK,
    '3': WZ,
    '4': WR,
    '5': Wk,
    '6': WP
  };
  var ee = j.language || j.lang || j.l || navigator.language;
  function ne(z5) {
    var zW = Wh[z5];
    if (!zW) {
      return ''.concat(z5);
    }
    if (zW[ee]) {
      return zW[ee];
    }
    var zz = ee.split('-')[0];
    return zW[zz] ? zW[zz] : zW.en;
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
      var zW = he(z7[zz] || 0);
      var zq = he(z8[zz] || 0);
      if (zW < zq) {
        return -1;
      }
      if (zW > zq) {
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
      duoDV: function (zW, zq) {
        return zW < zq;
      }
    };
    z5.CoKGk = function (zW, zq) {
      return zW < zq;
    };
    z5.zucXB = function (zW, zq) {
      return zW + zq;
    };
    var z7 = [];
    for (var z8 = 0; z8 < arguments.length; z8++) {
      z7[z8] = arguments[z8];
    }
    var z9 = z7[0];
    for (var zz = 1; z5.CoKGk(zz, z7.length); zz += 2) {
      z9.style[z7[zz]] = z7[z5.zucXB(zz, 1)];
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
  var pe = function (z4, z5, z6, z7, z8) {
    var z9 = {
      'TWswa': function (zC, zd) {
        return zC === zd;
      },
      'bGPfw': "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"112\" height=\"112\"><path d=\"M90.6 9.8h9.8V0h-9.8Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#ff6e00;fill-opacity:1\"/><path d=\"M0 21.1h9.8v-9.8H0Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#6414e6;fill-opacity:1\"/><path d=\"M11.3 111.6h9.8v-9.8h-9.8Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#19bee6;fill-opacity:1\"/><path d=\"M68 89h9.7v-9.8H68Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#e619dc;fill-opacity:1\"/><path d=\"M79.2 9.8H89V0h-9.8ZM68 9.8h9.8V0H68Zm-11.3 0h9.8V0h-9.8Zm-11.3 0H55V0h-9.8ZM34 9.8h9.8V0H34Zm-11.4 0h9.8V0h-9.8Zm-11.3 0h9.8V0h-9.8Zm79.3 11.3h9.8v-9.8h-9.8Zm-11.4 0H89v-9.8h-9.8Zm-11.3 0h9.8v-9.8H68Zm-11.3 0h9.8v-9.8h-9.8Zm-11.3 0H55v-9.8h-9.8Zm-11.3 0h9.8v-9.8H34Zm-11.4 0h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8ZM102 32.4h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8Zm-11.4 0H89v-9.8h-9.8Zm-67.9 0h9.8v-9.8h-9.8ZM0 32.4h9.8v-9.8H0Zm101.9 11.3h9.8V34h-9.8Zm-11.3 0h9.8V34h-9.8Zm-79.3 0h9.8V34h-9.8ZM0 43.7h9.8V34H0Zm101.9 11.4h9.8v-9.9h-9.8Zm-11.3 0h9.8v-9.9h-9.8Zm-79.3 0h9.8v-9.9h-9.8ZM0 55h9.8v-9.8H0Zm101.9 11.3h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8Zm-11.4 0H89v-9.8h-9.8Zm-67.9 0h9.8v-9.8h-9.8ZM0 66.4h9.8v-9.8H0Zm90.6 11.3h9.8v-9.8h-9.8Zm-11.4 0H89v-9.8h-9.8Zm-11.3 0h9.8v-9.8H68Zm-11.3 0h9.8v-9.8h-9.8Zm-11.3 0H55v-9.8h-9.8Zm-11.3 0h9.8v-9.8H34Zm-11.4 0h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8ZM0 77.7h9.8v-9.8H0ZM56.6 89h9.8v-9.8h-9.8Zm-11.3 0H55v-9.8h-9.8ZM34 89h9.8v-9.8H34Zm-11.4 0h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8ZM0 89h9.8v-9.8H0Zm11.3 11.3h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8H0Zm0 11.3h9.8v-9.8H0Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#fff;fill-opacity:1\"/></svg>",
      'wWXFP': "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"113\" height=\"112\"><path d=\"M.3 32.4h9.8v-9.8H.3Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#e61973;fill-opacity:1\"/><path d=\"M22.8 9.8h9.7V0h-9.7Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#ffb919;fill-opacity:1\"/><path d=\"M11.6 100.3h9.7v-9.8h-9.7Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#1987e6;fill-opacity:1\"/><path d=\"M79 111.6h9.7v-9.8h-9.8Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#ff4b00;fill-opacity:1\"/><path d=\"M101.4 55h9.7v-9.7h-9.7Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#14e691;fill-opacity:1\"/><path d=\"M101.4 89h9.7v-9.8h-9.7Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#ff1928;fill-opacity:1\"/><path d=\"M67.7 9.8h9.7V0h-9.7Zm-11.2 0h9.7V0h-9.7Zm-11.3 0H55V0h-9.8ZM34 9.8h9.8V0H34Zm33.7 11.3h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm-11.3 0H55v-9.8h-9.8Zm-11.2 0h9.8v-9.8H34Zm56.2 0h9.7v-9.8h-9.7Zm-11.3 0h9.8v-9.8h-9.8Zm-56.1 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm78.6 11.3h9.7v-9.8h-9.7Zm-11.3 0h9.8v-9.8h-9.8Zm-56.1 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm0 11.3h9.7V34h-9.7Zm-11.3 0h9.8V34H.3Zm11.3 11.4h9.7v-9.9h-9.7Zm78.6 0h9.7v-9.9h-9.7Zm-11.3 0h9.8v-9.9h-9.8Zm-11.2 0h9.7v-9.9h-9.7Zm-11.2 0h9.7v-9.9h-9.7ZM.3 55h9.8v-9.9H.3ZM79 66.4h9.8v-9.8h-9.8Zm-11.2 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm-45 0h9.8v-9.8h-9.7Zm89.9 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm-89.9 0h9.8v-9.8H.3Zm101 11.3h9.8v-9.8h-9.7Zm-89.7 0h9.7v-9.8h-9.7Zm78.6 0h9.7v-9.8h-9.7Zm-89.9 0h9.8v-9.8H.3ZM90.2 89h9.7v-9.8h-9.7ZM.3 89h9.8v-9.8H.3ZM79 89h9.8v-9.8h-9.8Zm-56.1 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm78.6 11.3h9.7v-9.8h-9.7Zm-11.3 0h9.8v-9.8h-9.8Zm-11.2 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm-11.3 0H55v-9.8h-9.8Zm-11.2 0h9.8v-9.8H34Zm-11.2 0h9.7v-9.8h-9.7Zm45 11.3h9.6v-9.8h-9.7Zm-11.3 0h9.7v-9.8h-9.7Zm-11.3 0H55v-9.8h-9.8Zm-11.2 0h9.8v-9.8H34Zm-11.2 0h9.7v-9.8h-9.7Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#fff;fill-opacity:1\"/></svg>",
      'AqYHp': function (zC, zd, zx) {
        return zC(zd, zx);
      },
      'LTbwN': function (zC, zd, zx, zN) {
        return zC(zd, zx, zN);
      },
      'tliSx': "digit-",
      'GAduO': "filter",
      'CbtAR': "url(#motionFilter-",
      'YsbbU': function (zC, zd) {
        return zC < zd;
      },
      'BeYNq': function (zC, zd) {
        return zC !== zd;
      },
      'qPuun': "FthmI",
      'HbqTr': function (zC, zd, zx, zN) {
        return zC(zd, zx, zN);
      },
      'ZtuoM': "transform",
      'QVojN': "translate(0px, ",
      'yorcH': function (zC, zd) {
        return zC * zd;
      },
      'oDAXq': function (zC, zd) {
        return zC + zd;
      },
      'NUCqM': "px)"
    };
    var zz;
    var zW = z9.TWswa(0, z8) ? z9.bGPfw : z9.wWXFP;
    var zq = z9.AqYHp(ue, z4, 'g');
    z9.LTbwN(de, zq, 'id', z9.tliSx.concat(z7));
    z9.LTbwN(ve, zq, z9.GAduO, z9.CbtAR.concat(z7, ')'));
    for (var zb = 0; z9.YsbbU(zb, 5); zb++) {
      if (z9.BeYNq(z9.qPuun, z9.qPuun)) {
        z7.A = z8;
        z9 = undefined;
      } else {
        var zF = z9.AqYHp(ue, zq, 'g');
        z9.HbqTr(ve, zF, z9.ZtuoM, z9.QVojN.concat(z9.yorcH(-zb, z9.oDAXq(z5, z9.yorcH(2, z6))), z9.NUCqM));
        zz = zW;
        zF.innerHTML = zz;
      }
    }
    return zq;
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
    var zW = [];
    var zq = undefined;
    var zb = undefined;
    ve(z7 = ue(z4, "div", 0), "display", "flex", "flex-direction", "column", "align-items", "center", "justify-content", "center");
    var zF = Date.now() + '';
    var zC = ue(z7, "svg");
    var zd = z9 = ue(zC, "svg");
    de(z9, "mask", "url(#mask-".concat(zF, ')'));
    var zx = ue(zC, "defs");
    !function (zD, zX) {
      var zT = ue(zD, "linearGradient");
      de(zT, 'id', "gradient-".concat(zX), 'x1', '0%', 'y1', '0%', 'x2', '0%', 'y2', "100%");
      (function () {
        var zg = [];
        for (var zB = 0; zB < arguments.length; zB++) {
          zg[zB] = arguments[zB];
        }
        for (var zt = 0; zt < zg.length; zt++) {
          var zl = ue(zT, "stop");
          var zr = zg[zt];
          de(zl, "offset", zr[0], "stop-color", "white", "stop-opacity", zr[1]);
        }
      })([0, 0], [0.2, 1], [0.8, 1], [1, 0]);
    }(zx, zF);
    (function (zD, zX) {
      var zf = ue(zD, "mask");
      de(zf, 'id', "mask-".concat(zX));
      de(ue(zf, "rect"), 'x', 0, 'y', 0, "width", "100%", "height", "100%", "fill", "url(#gradient-".concat(zX, ')'));
    })(zx, zF);
    z8 = function (zD, zX) {
      var zI;
      (zI = ue(zD, "pre", 0)).textContent = zX;
      ve(zI, "font", "20px Roboto, sans-serif", "color", "#ccc", "opacity", '0', "text-align", "center", "transition", "opacity 1.2s ease-in-out");
      return zI;
    }(z7, z5);
    requestAnimationFrame(function () {
      ve(z8, "opacity", '1');
    });
    var zN = ['1', '1'].map(function (zD, zX) {
      var zI = ''.concat(zX, '-').concat(zF);
      return {
        'i': pe(zd, 112, 20, zI, zX),
        't': ge(zx, zI),
        'o': +zD,
        'h': 0x0,
        'l': {
          'x': 137 * zX + 12.5,
          'y': 0x14
        }
      };
    });
    function zm() {
      if (2 === zz) {
        if (zq) {
          zq();
        }
        if (zb) {
          zb();
        }
        zz = 3;
      } else if (1 === zz) {
        zW.length = 0;
        zN.forEach(function (zX, zf) {
          var zI;
          var zg;
          var zB;
          var zt;
          var zr;
          var zS;
          var zL;
          var za;
          var zw;
          var zv;
          var zA = 152 * zX.h;
          var zs = 152 * (75 + zX.o);
          zI = {
            'v': zA,
            '_to': zs,
            'm': 0x4b0,
            'u': 200 * (zN.length - 1 - zf) + 400,
            'Z': function () {},
            'p': function (zZ) {
              zX.l.y = 20 + zZ % 608;
              de(zX.i, "transform", "translate(".concat(zX.l.x, ", ").concat(zX.l.y, ')'));
              var zR = (zA + zs) / 2;
              var zk = (+Math.abs(Math.abs(Math.abs(zZ - zR) - zR) - zA) / 100).toFixed(1);
              de(zX.t, "stdDeviation", "0 ".concat(zk));
            },
            'g': function () {
              if (0 === zf) {
                zm();
              }
            }
          };
          zt = zI._to;
          zr = zI.u;
          zS = zI.Z;
          zL = zI.p;
          za = zI.g;
          zw = zB = zI.v;
          zv = false;
          var zK = function (zZ) {
            if (!zv) {
              if (!zg) {
                zg = zZ;
                zS(zw);
              }
              var zk;
              var zP = Math.min(Math.max(zZ - zg - zr, 0), 0x4b0) / 0x4b0;
              zL(zw = ((zk = zP) <= 0.3 ? zk * zk : 1 + 1.25 * Math.pow(zk - 1, 3) + 0.25 * Math.pow(zk - 1, 2)) * (zt - zB) + zB);
              if (1 === zP) {
                zv = true;
                za(zw);
              }
            }
          };
          zW.push(zK);
        });
      }
    }
    (function (zD, zX) {
      de(zD, "viewBox", "0 0 ".concat(zX, " ").concat(152));
      ve(zD, "overflow", "hidden", "height", 152);
    })(zC, 137 * zN.length);
    zN.forEach(function (zD) {
      de(zD.i, "transform", "translate(".concat(zD.l.x, ", ").concat(zD.l.y, ')'));
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
        var zf;
        var zT;
        if (!(1 === zz || 0 !== zz && 3 !== zz)) {
          zz = 1;
          zm();
          zX = function (zI) {
            zW.forEach(function (zB) {
              return zB(zI);
            });
          };
          (zT = function (zI) {
            zf = requestAnimationFrame(zT);
            zX(zI);
          })(0);
          zq = function () {
            cancelAnimationFrame(zf);
          };
        }
      },
      '_': function (zD) {
        if (1 === zz) {
          zz = 2;
          zb = zD;
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
          if (zq) {
            zq();
          }
        }
      }
    };
  }
  var ye = `/${1648578}` + "/shared/";
  var be = '';
  window.GtmId = new String(window.GtmId);
  var _e = J() ? 2015 : 5;
  var ke = k;
  var we = Date.now();
  var He = j.or;
  if (He) {
    if (0 === (He = function (z4) {
      var z6;
      !function (zC) {
        zC.kReplacer = "[a-zA-Z=]";
      }(z6 || (z6 = {}));
      var z7 = "object" == typeof window ? window : global;
      var z8 = z7.parseInt;
      var z9 = z7.isNaN;
      var zz = z7.String;
      var zW = z7.RegExp;
      var zq = z7.Number;
      var zb = zW(z6.kReplacer, 'g');
      var zF = z8(null == z4 ? undefined : z4.substring(zq("0x0"), zq("0x2")), zq("0xa"));
      return z9(zF) && (null == z4 ? undefined : z4.includes('.')) ? z4 : null == z4 ? undefined : z4.substring(zq("0x2")).replace(zb, function (zC) {
        if ('=' === zC) {
          return '.';
        }
        var zx = zC.charCodeAt(0);
        var zN = zx >= zq("0x61") ? zq("0x61") : zq("0x41");
        var zm = (zx - zN - zF + zq("0x1a")) % zq("0x1a") + zN;
        return zz.fromCharCode(zm);
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
    var z8 = ue(z4, "div", 0);
    de(z8, "class", "initial-loader");
    var z9;
    var zz;
    var zW;
    var zq = ue(z8, "div", 0);
    de(zq, "class", "il-wrapper");
    var zF = function (zx, zN) {
      var zD = function () {
        var zf = window.innerWidth / window.innerHeight > 0.5625 ? 1920 / window.innerHeight : 1080 / window.innerWidth;
        ve(zx, "transform", "scale(".concat((zN / zf).toFixed(4), ')'));
      };
      window.addEventListener("resize", zD);
      zD();
      return function () {
        window.removeEventListener("resize", zD);
      };
    }(zq, 1.875);
    var zC = ue(document.head, "style", 0);
    zC.textContent = ".initial-loader{background-color:#000;height:inherit;margin:auto;position:absolute;transition:opacity .35s ease-in;width:inherit}.il-wrapper,.initial-loader{align-items:center;display:flex;flex-direction:column;justify-content:center}.il-circle-loading{align-items:center;display:flex;height:10px;justify-content:space-between;width:40px}.il-circle{animation-direction:alternate;animation-duration:.25s;animation-iteration-count:infinite;animation-name:il-circle-bounce;animation-timing-function:ease-out;background-color:#30a2d0;border-radius:50%;height:10px;position:relative;width:10px}.il-circle:first-of-type{animation-delay:0s}.il-circle:nth-of-type(2){animation-delay:-75ms}.il-circle:nth-of-type(3){animation-delay:-.15s}@keyframes il-circle-bounce{0%{bottom:0}90%,to{bottom:15px}}.il-err-container{display:flex;flex-direction:column;font-family:PingFangSC-Regular;position:absolute;width:413px}.il-err-title{color:#fff;font-size:27px;padding:10px 0;text-align:center}.il-err-desc{color:#98989e;font-size:18px;line-height:24px;text-align:center}.il-btn-container{color:#fff;padding-top:68px}.il-btn,.il-btn-container{align-items:center;display:flex;justify-content:center}.il-btn{border:.6px solid #fff;border-radius:6px;cursor:pointer;font-family:PingFangSC-Semibold;font-size:20px;margin:0 7px;min-height:26px;min-width:120px;padding:17px 25px;text-align:center;user-select:none}.il-btn:active{opacity:.6}";
    if (0 === z5) {
      de(zz = ue(zq, "div", 0), "class", "il-circle-loading ");
      for (var zd = 0; zd < 3; zd++) {
        de(ue(zz, "div", 0), "class", "il-circle");
      }
    } else if (1 === z5) {
      (z9 = Ze(zq, z6)).k();
    }
    return {
      'handleError': function (zx, zN, zm) {
        if (undefined === zm) {
          zm = [];
        }
        if (!zW) {
          de(zW = ue(zq, "div", 0), "class", "il-err-container");
          var zX = ue(zW, "div", 0);
          de(zX, "class", "il-err-title");
          zX.textContent = zx;
          var zf = ue(zW, "div", 0);
          de(zf, "class", "il-err-desc");
          zf.textContent = zN;
          if (zm.length > 2) {
            zm.length = 2;
          }
          if (zm.length > 0) {
            var zT = ue(zW, "div", 0);
            de(zT, "class", "il-btn-container");
            for (var zI = 0; zI < zm.length; zI++) {
              var zg = ue(zT, "div", 0);
              de(zg, "class", "il-btn");
              if (zm.length > 1) {
                ve(zg, "flex", '1');
              }
              zg.textContent = zm[zI].label;
              var zB = zm[zI].onclick;
              if (zB) {
                zg.onclick = zB;
              }
            }
          }
          if (0 === z5) {
            if (!(null == zz)) {
              zz.remove();
            }
          } else {
            if (1 === z5) {
              var zt = function () {
                var zr = z9.M();
                var zS = z9.H();
                var zL = zW.offsetTop - z9.V() + 2;
                ve(zr, "transition", "opacity 0.28s ease-in");
                ve(zS, "transition", "transform 0.5s ease-in-out");
                ve(zW, "transition", "opacity 0s linear 0.28s, transform 0.5s ease-in-out");
                requestAnimationFrame(function () {
                  ve(zW, "opacity", '1', "transform", "translateY(0px)");
                  ve(zr, "opacity", '0');
                  ve(zS, "transform", "translateY(".concat(zL, "px) scale(").concat(0.7, ')'));
                });
              };
              requestAnimationFrame(function () {
                ve(zW, "opacity", '0', "transform", "translateY(".concat(zW.offsetHeight, "px)"));
                z9._(zt);
              });
            }
          }
        }
      },
      'resume': function () {
        var zN = zW;
        zW = undefined;
        if (zN) {
          zN.remove();
        }
        z9.k();
        var zm = z9.M();
        var zD = z9.H();
        ve(zm, "opacity", '1');
        ve(zD, "transform", "scale(1)");
      },
      'hideLoading': function (zx) {
        ve(z8, "opacity", '0');
        setTimeout(function () {
          var zm;
          var zD;
          var zX;
          if (1 === z5) {
            z9.F();
          }
          zF();
          if (!(null === (zm = zC.parentNode) || undefined === zm)) {
            zm.removeChild(zC);
          }
          if (!(null === (zD = zq.parentNode) || undefined === zD)) {
            zD.removeChild(zq);
          }
          if (!(null === (zX = z8.parentNode) || undefined === zX)) {
            zX.removeChild(z8);
          }
          if (zx) {
            zx();
          }
        }, 350);
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
        var z6 = {
          SharedPath: ye,
          GameDir: be,
          AssetTable: "c445ebb91e.c214a.json",
          ShellDir: "984721902a/",
          Plugins: "e02b9bf0d2,a346494745,589a728c8d,2fd142260e,2c6e37b73c,b85c56d865,c03a2652ad",
          Requirements: "minMemory=1024&minDiskSpace=1024&whiteList=chrome-59%2Cchrome%20webview-59%2Cfirefox-58%2Csafari-11%2Cedge-79&minOSVersion=iOS-11%2CAndroid-5%2CMacOS-10.10%2CWindows-7",
          LocalizedTitleKey: "SharkBounty.Title",
          SupportedLanguages: "ar,bn,da,de,en,en-stkus,es,fi,hi,id,it,ko,nl,pt,pt-br,ru,sv,th,uk,zh",
          ThemeColor: "#6358f5",
          LobbyMode: false,
          SupportXSMaxRatio: 2,
          AspectRatio: '',
          Orientation: 1,
          Name: "Shark Bounty",
          Version: "1.12.0.2/7.0.0/5.2.0-0",
          Index: 1648578,
          Identifier: "com.pgsoft.slot.sharkbounty",
          PluginDependencies: Wv,
          EIF: 16777217,
          Ecma: _e,
          Platform: ke,
          Blobs: O,
          BootTime: we,
          initialLoader: Pe
        };
        return shell.start(Te, z6);
      }, 0);
    }
  }
  var Wp = {
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
        var zW = z9.split('-');
        var zq = zz.split('-');
        var zb = ce(zW[0], zq[0]);
        if (0 !== zb) {
          return zb;
        }
        var zF = zW[1];
        var zC = zq[1];
        return zF && !zC ? -1 : !zF && zC ? 1 : zF || zC ? ce(zF, zC) : 0;
      }(z7, "11.5.0-rc.1")) {
        se(ye + "984721902a/" + Te.main, 2, Ve);
      } else {
        Ee(2, "G1011");
      }
    });
 // } else {
  //  gtag("event", "insecure_context", Wp);
   // Pe.handleError(ne(5), ne(6));
 // }
}();