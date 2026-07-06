!function () {
  'use strict';

  ;
  var y9 = {
    index: "b994a",
    config: "f4f6c"
  };
  var yx = {
    index: "273c4",
    config: "52f95"
  };
  var yu = {
    resources: y9,
    main: yx
  };
  var yy = {
    platform: "web-mobile",
    groupList: ["default"],
    collisionMatrix: [[true]],
    hasResourcesBundle: true,
    hasStartSceneBundle: false,
    remoteBundles: [],
    subpackages: [],
    launchScene: "db://assets/default/scene/main.fire",
    orientation: '',
    jsList: [],
    bundleVers: yu
  };
  window.DEBUG = false;
  window.PREVIEW = false;
  window.EDITOR = false;
  window.GtmId = "GTM-WV99ST2";
  window._CCSettings = yy;
  var yc = {
    e02b9bf0d2: ">=11.8.0-rc.1",
    a346494745: ">=10.8.0-rc.1",
    "589a728c8d": ">=7.8.0-rc.1",
    "2fd142260e": ">=9.8.0-rc.1",
    "2c6e37b73c": ">=6.8.0-rc.1",
    b85c56d865: ">=5.4.0-rc.1",
    c03a2652ad: ">=7.3.0-rc.1"
  };
  console.log("Game/Boot/Engine", "1.1.1.2/7.1.1-rc.2/7.3.1-rc.2");
  var x = navigator.userAgent;
  var k = 0;
  function C(x4) {
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
        _(xx + '');
      }
    }
    return x8.replace(/https?:\/\/[^/]+([0-9A-Za-z/._-]+)\S*(:[0-9]+:[0-9]+)/g, "$1$2").replace(/https?:\/\/[^/]+/g, '');
  }
  function _(x5, x6) {
    var x8 = {
      description: x5,
      fatal: !!x6
    };
    gtag("event", "exception", x8);
  }
  if (x.indexOf(" Chrome/") > 0) {
    k = 2;
  } else if (x.indexOf(" AppleWebKit/") > 0) {
    k = 1;
  } else if (x.indexOf(" Gecko/") > 0) {
    k = 3;
  } else if (x.indexOf(" Trident/") > 0) {
    k = 4;
  } else if (x.indexOf(" Presto/") > 0) {
    k = 5;
  }
  var j;
  var H;
  var M;
  j = 0;
  H = '';
  M = 0;
  var T = function (x4) {
    var x6 = Date.now();
    if (H !== x4 || x6 - M > 1000) {
      M = x6;
      H = x4;
      j = 0;
    } else {
      j++;
    }
    if (0 === j) {
      _(x4);
    } else {
      if (5 === j) {
        _(x4, 1);
        var x7 = this.onFrequent || window.onGAFrequentError;
        try {
          if (x7) {
            x7();
          }
        } catch (x8) {
          _(x8 + '');
        }
      } else if (j > 5) {
        M = x6;
      }
    }
  };
  function z(x5, x6, x7, x8, x9) {
    var xx = {
      jtkzH: function (xc, xD) {
        return xc > xD;
      }
    };
    xx.XHmxa = function (xc, xD) {
      return xc || xD;
    };
    xx.yxcAx = function (xc, xD) {
      return xc + xD;
    };
    if (k > 3) {
      return false;
    }
    if (xx.XHmxa(!x7, !x8) || !x9) {
      return false;
    }
    var xy = xx.yxcAx("Uncaught ", C.call(z, x9));
    T.call(z, xy);
    return false;
  }
  z.report = function (x4, x5) {
    _("Uncaught " + C.call(this, x4), x5);
  };
  var R;
  var E;
  function N(x4) {
    if (!(k > 3)) {
      var x6 = x4.reason;
      if (null != x6) {
        var x7 = "Unhandled " + C.call(N, x6);
        T.call(N, x7);
      }
    }
  }
  N.report = function (x4, x5) {
    _("Unhandled " + C.call(this, x4), x5);
  };
  window.dataLayer = [];
  window.gtag = function () {
    dataLayer.push(arguments);
  };
  dataLayer.push({
    'event': "gtm.js",
    'gtm.start': Date.now(),
    'app_name': "Pharaoh Royals",
    'app_version': "1.1.1.2/7.1.1-rc.2/7.3.1-rc.2"
  });
  R = "https://www.googletagmanager.com/gtm.js?id=".concat(GtmId);
  (E = document.createElement("script")).async = true;
  E.src = R;
  document.head.appendChild(E);
  window.onerror = z;
  window.onunhandledrejection = N;
  var V = location.search;
  if (V.length > 0) {
    V = V.substring(1);
  }
  var A;
  var G = {};
  var F = V.split('&');
  for (var I = 0; I < F.length; ++I) {
    var q = F[I];
    if (q) {
      var L = q.indexOf('=');
      if (-1 === L) {
        G[q] = '';
      } else {
        var Y = q.substring(0, L);
        var $ = q.substring(L + 1);
        G[Y] = decodeURIComponent($);
      }
    }
  }
  (A = {
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
  var K = [[window, "Map", "WeakMap", "Set", "WeakSet", "Promise", "Proxy", "Reflect"], [Object, "assign"], [Array.prototype, "findIndex", "find"], [String.prototype, "repeat", "startsWith", "endsWith", "includes"], [Number, "isFinite", "isNaN", "isSafeInteger", "isInteger"], [Math, "trunc", "sign", "cbrt", "log2", "log10"]];
  function O() {
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
    }(A) && function (x5) {
      var x7 = true;
      for (var x8 = 0; x8 < x5.length; x8++) {
        var x9 = x5[x8];
        var xx = x9[0];
        if (undefined === xx) {
          x7 = false;
          break;
        }
        for (var xu = 1; xu < x9.length; xu++) {
          if (undefined === xx[x9[xu]]) {
            x7 = false;
            break;
          }
        }
        if (!x7) {
          break;
        }
      }
      return x7;
    }(K);
  }
  var yD = {
    en: "Launch Failed",
    de: "Start fehlgeschlagen",
    es: "Error de inicialización",
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
  var ya = {
    en: "Game launch failed, please try again.",
    de: "Spielstart fehlgeschlagen, bitte versuchen Sie es erneut.",
    es: "Error al iniciar el juego, inténtalo de nuevo.",
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
  var yC = {
    en: "Sorry, this game cannot be loaded as the current resources are out of date. Please try again later.",
    de: "Dieses Spiel kann leider nicht geladen werden, da die  Ressourcen nicht mehr aktuell sind. Bitte versuchen Sie es später erneut.",
    es: "No se ha podido cargar el juego debido a que los recursos actuales están obsoletos. Inténtalo de nuevo más tarde.",
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
  var yG = {
    'en': "Reload"
  };
  yG.de = "Neu laden";
  yG.es = "Recargar";
  yG.id = "Muat ulang";
  yG.ja = "リロード";
  yG.ko = "리로드";
  yG["pt-br"] = "Recarregar";
  yG.ru = "Перезагрузить";
  yG.sv = "Ladda om";
  yG.th = "รีโหลด";
  yG.vi = "Tải lại";
  yG.zh = "重新加载";
  var yw = {
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
  var yL = {
    en: "Warning: Insecure Connection",
    de: "Achtung: Unsichere Verbindung",
    es: "Aviso: la conexión de red no es segura",
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
  var yE = {
    en: "PG content can only be accessed via a secure (HTTPS) connection. Please visit us through a secure site or contact the site's support team for assistance. Thank you.",
    de: "Der PG-Inhalt kann nur über eine sichere (HTTPS) Verbindung aufgerufen werden. Bitte besuchen Sie uns über eine sichere Website oder wenden Sie sich an den Kundenservice der Website, um Unterstützung zu erhalten. Vielen Dank.",
    es: "Solo es posible acceder al contenido de PG a través de una conexión segura (HTTPS). Visítanos a través de un sitio web seguro o ponte en contacto con el equipo de asistencia del sitio para obtener ayuda. Gracias.",
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
  var yd = {
    en: "Please <Color>take a screenshot or copy the details below</Color> and send it to the support team.",
    de: "Bitte <Color>machen Sie einen Screenshot oder kopieren Sie die untenstehenden Details</Color> und senden Sie diese an den Kundenservice.",
    es: "<Color>haz una captura de pantalla o copia los datos que se indican a continuación</Color> y envíalos al equipo de atención al cliente.",
    id: "Silakan <Color>ambil tangkapan layar atau salin detail di bawah ini</Color> dan kirimkan ke tim dukungan.",
    ja: "<Color>以下の情報をスクリーンショットまたはコピー</Color>して、サポートチームに送信してください。",
    ko: "<Color>아래 내용을 캡처 또는 복사</Color>하여 지원 팀으로 보내주세요.",
    "pt-br": "<Color>Faça uma captura de tela ou copie os detalhes abaixo</Color> e envie ao suporte técnico.",
    ru: "Пожалуйста, <Color>сделайте скриншот или скопируйте нижеуказанные данные</Color> и отправьте их в службу поддержки.",
    sv: "<Color>Ta en skärmdump av eller kopiera uppgifterna nedan</Color> och skicka dem till support-teamet.",
    th: "กรุณา <Color> ถ่ายภาพหน้าจอหรือคัดลอกรายละเอียดด้านล่าง</Color> และส่งไปยังทีมสนับสนุน",
    vi: "Vui lòng <Color>chụp ảnh màn hình hoặc sao chép thông tin chi tiết bên dưới</Color> và gửi đến đội ngũ hỗ trợ.",
    zh: "请<Color>截图或复制以下详情</Color>，并发送给客服。"
  };
  var yp = {
    en: "<Color>Details copied!</Color> Please send it to the support team.",
    de: "<Color>Details kopiert!</Color> Bitte senden Sie diese an den Kundenservice.",
    es: "<Color>¡Se han copiado los datos!</Color> Envíalos al equipo de atención al cliente.",
    id: "<Color>Detail disalin!</Color> Silakan kirimkan ke tim dukungan.",
    ja: "<Color>詳細をコピーしました！</Color> サポートチームに送信してください。",
    ko: "<Color>내용이 복사되었습니다!</Color> 지원 팀으로 보내주세요.",
    "pt-br": "<Color>Detalhes copiados!</Color> Envie-os ao suporte técnico.",
    ru: "<Color>Данные скопированы!</Color> Пожалуйста, отправьте их в службу поддержки.",
    sv: "<Color>Uppgifter kopierade!</Color> Skicka dem till support-teamet.",
    th: "<Color>คัดลอกรายละเอียดแล้ว!</Color> กรุณาส่งให้ทีมสนับสนุนด้วย",
    vi: "<Color>Đã sao chép chi tiết!</Color> Vui lòng gửi đến đội ngũ hỗ trợ."
  };
  yp.zh = "<Color>详情已复制！</Color>请发送给客服。";
  var yU = {
    en: "<Color>Copy failed!</Color> Please close the window and try again.",
    de: "<Color>Kopieren fehlgeschlagen!</Color> Bitte schließen Sie das Fenster und versuchen Sie es erneut.",
    es: "<Color>¡Se ha producido un error al copiar los datos!</Color> Cierra la ventana y vuelve a intentarlo más tarde.",
    id: "<Color>Penyalinan gagal!</Color> Silakan tutup jendela dan coba lagi.",
    ja: "<Color>コピーに失敗しました！</Color> ウィンドウを閉じて、再度お試しください。",
    ko: "<Color>내용이 복사되지 않았습니다!</Color> 창을 닫고 다시 시도해 보세요.",
    "pt-br": "<Color>Não foi possível copiar!</Color> Feche a janela e tente novamente.",
    ru: "<Color>Копирование не удалось!</Color> Пожалуйста, закройте окно и повторите попытку.",
    sv: "<Color>Kopiering misslyckades!</Color> Stäng fönstret och försök igen.",
    th: "<Color>คัดลอกล้มเหลว!</Color> กรุณาปิดหน้าต่างแล้วลองอีกครั้ง",
    vi: "<Color>Sao chép không thành công!</Color> Vui lòng đóng cửa sổ và thử lại.",
    zh: "<Color>复制失败！</Color>请关闭窗口后重试。"
  };
  var yJ = {
    en: "Report",
    de: "Bericht",
    es: "Informe",
    id: "Laporan",
    ja: "報告する",
    ko: "보고서",
    "pt-br": "Comunicar erro",
    ru: "Отчет",
    sv: "Rapportera",
    th: "รายงาน",
    vi: "Báo cáo",
    zh: '反馈'
  };
  var ys = {
    en: "Copy",
    de: "Kopieren",
    es: "Copiar",
    id: "Salin",
    ja: "コピーする",
    ko: '복사',
    "pt-br": "Copiar",
    ru: "Копировать",
    sv: "Kopiera",
    th: "คัดลอก",
    vi: "Sao Chép",
    zh: '复制'
  };
  var yA = {
    'en': 'IP'
  };
  var yS = {
    en: "Domain",
    es: "Dominio",
    ja: "ドメイン",
    ko: "도메인",
    "pt-br": "Domínio",
    ru: "Домен",
    sv: "Domän",
    th: "โดเมน",
    vi: "Tên miền",
    zh: '域名'
  };
  var yz = {
    en: "Time",
    de: "Zeit",
    es: "Hora",
    id: "Waktu",
    ja: '時間',
    ko: '시간',
    "pt-br": "Horário",
    ru: "Время",
    sv: "Tid",
    th: "เวลา",
    vi: "Thời gian",
    zh: '时间'
  };
  var ym = {
    'en': 'UA'
  };
  var yP = {
    en: "Error code",
    de: "Fehlercode",
    es: "Código de error",
    id: "Kode kesalahan",
    ja: "エラーコード",
    ko: "오류 코드",
    "pt-br": "Código de erro",
    ru: "Код ошибки",
    sv: "Felkod",
    th: "รหัสข้อผิดพลาด",
    vi: "Mã lỗi",
    zh: "错误代码"
  };
  var yQ = {
    en: "Cancel",
    de: "Abbrechen",
    es: "Cancelar",
    id: "Batalkan",
    ja: "キャンセル",
    ko: '취소',
    "pt-br": "Cancelar",
    ru: "Отмена",
    sv: "Avbryt",
    th: "ยกเลิก",
    vi: "Hủy",
    zh: '取消'
  };
  var yI = {
    en: "Error",
    de: "Fehler",
    id: "Kesalahan",
    ja: "エラー",
    ko: '오류',
    "pt-br": "Erro",
    ru: "Ошибка",
    sv: "Fel",
    th: "ข้อผิดพลาด",
    vi: "Lỗi",
    zh: "发现错误"
  };
  var yT = {
    en: "Network is busy, please wait patiently or report the issue to the support team.",
    de: "Netzwerk ist ausgelastet – bitte haben Sie etwas Geduld oder melden Sie das Problem dem Support-Team.",
    es: "La red está saturada, espere pacientemente o notifique la incidencia al equipo de asistencia técnica.",
    id: "Jaringan sedang sibuk, harap sabar menunggu atau laporkan masalah ini ke tim dukungan.",
    ja: "ネットワークが混雑しています。しばらくお待ちいただくか、サポートチームまでお問い合わせください。",
    ko: "네트워크가 혼잡하므로, 잠시만 기다려주시거나 문제를 지원팀에 보고해 주세요.",
    "pt-br": "Rede congestionada. Aguarde pacientemente ou reporte o problema à equipe de suporte.",
    ru: "Сеть перегружена. Пожалуйста, ожидайте или направьте отчет о проблеме службе поддержки.",
    sv: "Nätverket är upptaget, var god vänta eller rapportera problemet till supporten.",
    th: "มีผู้ใช้งานเครือข่ายจำนวนมาก กรุณารอสักครู่หรือรายงานปัญหาดังกล่าวไปยังทีมสนับสนุน",
    vi: "Mạng đang bận, vui lòng chờ trong giây lát hoặc báo cáo sự cố cho đội ngũ hỗ trợ.",
    zh: "网络繁忙，请耐心等待或向客服提交反馈。"
  };
  var yf = {
    en: "Network Recovered",
    de: "Netzwerk wiederhergestellt",
    es: "Red recuperada",
    id: "Jaringan telah kembali normal",
    ja: "ネットワークが回復しました",
    ko: "네트워크 복구 완료",
    "pt-br": "Rede recuperada",
    ru: "Сеть восстановлена",
    sv: "Nätverket återställt",
    th: "เครือข่ายกลับมาใช้งานได้แล้ว",
    vi: "Mạng đã được khôi phục",
    zh: "网络已恢复"
  };
  var yZ = {
    en: "Please switch back to portrait mode<br/>to continue the game",
    de: "Bitte kehren Sie in den Portrait-Modus zurück<br/>um das Spiel fortzuführen",
    es: "Por favor, cambie al modo vertica<br/>para continuar con el juego",
    id: "Silakan kembali ke mode potret<br/>untuk melanjutkan permainan",
    ja: "縦向きモードに戻して<br/>ゲームを続けてください",
    ko: "다시 세로 모드로 전환하여<br/>게임을 계속하세요",
    "pt-br": "Volte para o modo retrato<br/>para continuar o jogo",
    ru: "Пожалуйста, вернитесь в вертикальный режим<br/>чтобы продолжить игру",
    sv: "Växla tillbaka till stående läge<br/>för att fortsätta spela",
    th: "กรุณาเปลี่ยนกลับเป็นโหมดแนวตั้ง<br/>เพื่อเล่นเกมต่อ",
    vi: "Vui lòng chuyển lại chế độ xem dọc<br/>để tiếp tục trò chơi",
    zh: "请切换到竖屏模式<br/>继续游戏"
  };
  var yi = {
    '0': yD,
    '1': ya,
    '2': yC,
    '3': yG,
    '4': yw,
    '5': yL,
    '6': yE,
    '7': yd,
    '8': yp,
    '9': yU,
    '10': yJ,
    '11': ys,
    '12': yA,
    '13': yS,
    '14': yz,
    '15': ym,
    '16': yP,
    '17': yQ,
    '18': yI,
    '19': yT,
    '20': yf,
    '21': yZ
  };
  var W = G.language || G.lang || G.l || navigator.language;
  function J(x5) {
    var xx = yi[x5];
    if (!xx) {
      return ''.concat(x5);
    }
    if (xx[W]) {
      return xx[W];
    }
    var xu = W.split('-')[0];
    return xx[xu] ? xx[xu] : xx.en;
  }
  function Q(x4) {
    var x6 = parseInt(x4);
    return isNaN(x6) ? x4 : x6;
  }
  function X(x4, x5) {
    var x7 = x4.split('.');
    var x8 = x5.split('.');
    var x9 = Math.max(x7.length, x8.length);
    for (var xx = 0; xx < x9; xx++) {
      var xu = Q(x7[xx] || 0);
      var xy = Q(x8[xx] || 0);
      if (xu < xy) {
        return -1;
      }
      if (xu > xy) {
        return 1;
      }
    }
    return 0;
  }
  function ee(x5, x6, x7) {
    if (undefined === x7) {
      x7 = 1;
    }
    var xx = 0 === x7 ? document.createElement(x6) : document.createElementNS("http://www.w3.org/2000/svg", x6);
    x5.appendChild(xx);
    return xx;
  }
  function te() {
    var x5 = {
      crFUE: function (xu, xy) {
        return xu < xy;
      }
    };
    x5.JEqcZ = function (xu, xy) {
      return xu < xy;
    };
    x5.lQZMD = function (xu, xy) {
      return xu + xy;
    };
    var x7 = [];
    for (var x8 = 0; x8 < arguments.length; x8++) {
      x7[x8] = arguments[x8];
    }
    var x9 = x7[0];
    for (var xx = 1; x5.JEqcZ(xx, x7.length); xx += 2) {
      x9.style[x7[xx]] = x7[x5.lQZMD(xx, 1)];
    }
    return x9;
  }
  function ne() {
    var x7 = [];
    for (var x8 = 0; x8 < arguments.length; x8++) {
      x7[x8] = arguments[x8];
    }
    var x9 = x7[0];
    for (var xx = 1; xx < x7.length; xx += 2) {
      x9.setAttribute(x7[xx], x7[xx + 1]);
    }
    return x9;
  }
  function ie(x4, x5, x6, x7, x8) {
    var xx;
    var xu = 0 === x8 ? "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"112\" height=\"112\"><path d=\"M90.6 9.8h9.8V0h-9.8Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#ff6e00;fill-opacity:1\"/><path d=\"M0 21.1h9.8v-9.8H0Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#6414e6;fill-opacity:1\"/><path d=\"M11.3 111.6h9.8v-9.8h-9.8Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#19bee6;fill-opacity:1\"/><path d=\"M68 89h9.7v-9.8H68Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#e619dc;fill-opacity:1\"/><path d=\"M79.2 9.8H89V0h-9.8ZM68 9.8h9.8V0H68Zm-11.3 0h9.8V0h-9.8Zm-11.3 0H55V0h-9.8ZM34 9.8h9.8V0H34Zm-11.4 0h9.8V0h-9.8Zm-11.3 0h9.8V0h-9.8Zm79.3 11.3h9.8v-9.8h-9.8Zm-11.4 0H89v-9.8h-9.8Zm-11.3 0h9.8v-9.8H68Zm-11.3 0h9.8v-9.8h-9.8Zm-11.3 0H55v-9.8h-9.8Zm-11.3 0h9.8v-9.8H34Zm-11.4 0h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8ZM102 32.4h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8Zm-11.4 0H89v-9.8h-9.8Zm-67.9 0h9.8v-9.8h-9.8ZM0 32.4h9.8v-9.8H0Zm101.9 11.3h9.8V34h-9.8Zm-11.3 0h9.8V34h-9.8Zm-79.3 0h9.8V34h-9.8ZM0 43.7h9.8V34H0Zm101.9 11.4h9.8v-9.9h-9.8Zm-11.3 0h9.8v-9.9h-9.8Zm-79.3 0h9.8v-9.9h-9.8ZM0 55h9.8v-9.8H0Zm101.9 11.3h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8Zm-11.4 0H89v-9.8h-9.8Zm-67.9 0h9.8v-9.8h-9.8ZM0 66.4h9.8v-9.8H0Zm90.6 11.3h9.8v-9.8h-9.8Zm-11.4 0H89v-9.8h-9.8Zm-11.3 0h9.8v-9.8H68Zm-11.3 0h9.8v-9.8h-9.8Zm-11.3 0H55v-9.8h-9.8Zm-11.3 0h9.8v-9.8H34Zm-11.4 0h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8ZM0 77.7h9.8v-9.8H0ZM56.6 89h9.8v-9.8h-9.8Zm-11.3 0H55v-9.8h-9.8ZM34 89h9.8v-9.8H34Zm-11.4 0h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8ZM0 89h9.8v-9.8H0Zm11.3 11.3h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8H0Zm0 11.3h9.8v-9.8H0Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#fff;fill-opacity:1\"/></svg>" : "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"113\" height=\"112\"><path d=\"M.3 32.4h9.8v-9.8H.3Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#e61973;fill-opacity:1\"/><path d=\"M22.8 9.8h9.7V0h-9.7Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#ffb919;fill-opacity:1\"/><path d=\"M11.6 100.3h9.7v-9.8h-9.7Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#1987e6;fill-opacity:1\"/><path d=\"M79 111.6h9.7v-9.8h-9.8Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#ff4b00;fill-opacity:1\"/><path d=\"M101.4 55h9.7v-9.7h-9.7Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#14e691;fill-opacity:1\"/><path d=\"M101.4 89h9.7v-9.8h-9.7Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#ff1928;fill-opacity:1\"/><path d=\"M67.7 9.8h9.7V0h-9.7Zm-11.2 0h9.7V0h-9.7Zm-11.3 0H55V0h-9.8ZM34 9.8h9.8V0H34Zm33.7 11.3h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm-11.3 0H55v-9.8h-9.8Zm-11.2 0h9.8v-9.8H34Zm56.2 0h9.7v-9.8h-9.7Zm-11.3 0h9.8v-9.8h-9.8Zm-56.1 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm78.6 11.3h9.7v-9.8h-9.7Zm-11.3 0h9.8v-9.8h-9.8Zm-56.1 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm0 11.3h9.7V34h-9.7Zm-11.3 0h9.8V34H.3Zm11.3 11.4h9.7v-9.9h-9.7Zm78.6 0h9.7v-9.9h-9.7Zm-11.3 0h9.8v-9.9h-9.8Zm-11.2 0h9.7v-9.9h-9.7Zm-11.2 0h9.7v-9.9h-9.7ZM.3 55h9.8v-9.9H.3ZM79 66.4h9.8v-9.8h-9.8Zm-11.2 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm-45 0h9.8v-9.8h-9.7Zm89.9 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm-89.9 0h9.8v-9.8H.3Zm101 11.3h9.8v-9.8h-9.7Zm-89.7 0h9.7v-9.8h-9.7Zm78.6 0h9.7v-9.8h-9.7Zm-89.9 0h9.8v-9.8H.3ZM90.2 89h9.7v-9.8h-9.7ZM.3 89h9.8v-9.8H.3ZM79 89h9.8v-9.8h-9.8Zm-56.1 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm78.6 11.3h9.7v-9.8h-9.7Zm-11.3 0h9.8v-9.8h-9.8Zm-11.2 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm-11.3 0H55v-9.8h-9.8Zm-11.2 0h9.8v-9.8H34Zm-11.2 0h9.7v-9.8h-9.7Zm45 11.3h9.6v-9.8h-9.7Zm-11.3 0h9.7v-9.8h-9.7Zm-11.3 0H55v-9.8h-9.8Zm-11.2 0h9.8v-9.8H34Zm-11.2 0h9.7v-9.8h-9.7Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#fff;fill-opacity:1\"/></svg>";
    var xy = ee(x4, 'g');
    ne(xy, 'id', "digit-".concat(x7));
    te(xy, "filter", "url(#motionFilter-".concat(x7, ')'));
    for (var xc = 0; xc < 5; xc++) {
      var xD = ee(xy, 'g');
      te(xD, "transform", "translate(0px, ".concat(-xc * (x5 + 2 * x6), "px)"));
      xx = xu;
      xD.innerHTML = xx;
    }
    return xy;
  }
  function ae(x4, x5) {
    var x7 = ee(x4, "filter");
    ne(x7, 'id', "motionFilter-".concat(x5), "width", "300%", 'x', "-100%");
    var x8 = ee(x7, "feGaussianBlur");
    ne(x7, "class", "blurValues", 'in', "SourceGraphic", "stdDeviation", "0 0");
    return x8;
  }
  function se(x4, x5) {
    var x7;
    var x8;
    var x9;
    var xx = 0;
    var xu = [];
    var xy = undefined;
    var xc = undefined;
    te(x7 = ee(x4, "div", 0), "display", "flex", "flex-direction", "column", "align-items", "center", "justify-content", "center", "transform", "scale(0.625)");
    var xD = Date.now() + '';
    var xa = ee(x7, "svg");
    var xC = x9 = ee(xa, "svg");
    ne(x9, "mask", "url(#mask-".concat(xD, ')'));
    var xG = ee(xa, "defs");
    !function (xE, xd) {
      var xU = ee(xE, "linearGradient");
      ne(xU, 'id', "gradient-".concat(xd), 'x1', '0%', 'y1', '0%', 'x2', '0%', 'y2', "100%");
      (function () {
        var xs = [];
        for (var xA = 0; xA < arguments.length; xA++) {
          xs[xA] = arguments[xA];
        }
        for (var xS = 0; xS < xs.length; xS++) {
          var xz = ee(xU, "stop");
          var xm = xs[xS];
          ne(xz, "offset", xm[0], "stop-color", "white", "stop-opacity", xm[1]);
        }
      })([0, 0], [0.2, 1], [0.8, 1], [1, 0]);
    }(xG, xD);
    (function (xE, xd) {
      var xU = ee(xE, "mask");
      ne(xU, 'id', "mask-".concat(xd));
      ne(ee(xU, "rect"), 'x', 0, 'y', 0, "width", "100%", "height", "100%", "fill", "url(#gradient-".concat(xd, ')'));
    })(xG, xD);
    x8 = function (xE, xd) {
      var xJ;
      (xJ = ee(xE, "pre", 0)).textContent = xd;
      te(xJ, "font", "20px Roboto, sans-serif", "color", "#ccc", "opacity", '0', "text-align", "center", "transition", "opacity 1.2s ease-in-out");
      return xJ;
    }(x7, x5);
    requestAnimationFrame(function () {
      te(x8, "opacity", '1');
    });
    var xw = ['1', '1'].map(function (xE, xd) {
      var xp = ''.concat(xd, '-').concat(xD);
      return {
        'i': ie(xC, 112, 20, xp, xd),
        't': ae(xG, xp),
        'o': +xE,
        'l': 0x0,
        'h': {
          'x': 137 * xd + 12.5,
          'y': 0x14
        }
      };
    });
    function xL() {
      if (2 === xx) {
        if (xy) {
          xy();
        }
        if (xc) {
          xc();
        }
        xx = 3;
      } else if (1 === xx) {
        xu.length = 0;
        xw.forEach(function (xd, xp) {
          var xJ;
          var xs;
          var xA;
          var xS;
          var xm;
          var xP;
          var xt;
          var xQ;
          var xI;
          var xT;
          var xf = 152 * xd.l;
          var xZ = 152 * (75 + xd.o);
          xJ = {
            'v': xf,
            '_to': xZ,
            'm': 0x4b0,
            'u': 200 * (xw.length - 1 - xp) + 400,
            'p': function () {},
            'Z': function (xn) {
              xd.h.y = 20 + xn % 608;
              ne(xd.i, "transform", "translate(".concat(xd.h.x, ", ").concat(xd.h.y, ')'));
              var xX = (xf + xZ) / 2;
              var xb = (+Math.abs(Math.abs(Math.abs(xn - xX) - xX) - xf) / 100).toFixed(1);
              ne(xd.t, "stdDeviation", "0 ".concat(xb));
            },
            'g': function () {
              if (0 === xp) {
                xL();
              }
            }
          };
          xS = xJ._to;
          xm = xJ.u;
          xP = xJ.p;
          xt = xJ.Z;
          xQ = xJ.g;
          xI = xA = xJ.v;
          xT = false;
          var xi = function (xn) {
            if (!xT) {
              if (!xs) {
                xs = xn;
                xP(xI);
              }
              var xb;
              var xH = Math.min(Math.max(xn - xs - xm, 0), 0x4b0) / 0x4b0;
              xt(xI = ((xb = xH) <= 0.3 ? xb * xb : 1 + 1.25 * Math.pow(xb - 1, 3) + 0.25 * Math.pow(xb - 1, 2)) * (xS - xA) + xA);
              if (1 === xH) {
                xT = true;
                xQ(xI);
              }
            }
          };
          xu.push(xi);
        });
      }
    }
    (function (xE, xd) {
      ne(xE, "viewBox", "0 0 ".concat(xd, " ").concat(152));
      te(xE, "overflow", "hidden", "height", ''.concat(152, 'px'));
    })(xa, 137 * xw.length);
    xw.forEach(function (xE) {
      var xd = {
        oNaPD: "touchend"
      };
      xd.vPbQg = "dblclick";
      xd.arrwT = "gesturestart";
      xd.KYiLH = "gesturechange";
      xd.jyoiB = "gestureend";
      ne(xE.i, "transform", "translate(".concat(xE.h.x, ", ").concat(xE.h.y, ')'));
    });
    return {
      'H': function () {
        return x7;
      },
      'M': function () {
        return x8;
      },
      'k': function () {
        return 152;
      },
      'V': function () {
        return xx;
      },
      '_': function () {
        var xd;
        var xp;
        var xU;
        if (!(1 === xx || 0 !== xx && 3 !== xx)) {
          xx = 1;
          xL();
          xd = function (xJ) {
            xu.forEach(function (xA) {
              return xA(xJ);
            });
          };
          (xU = function (xJ) {
            xp = requestAnimationFrame(xU);
            xd(xJ);
          })(0);
          xy = function () {
            cancelAnimationFrame(xp);
          };
        }
      },
      'Y': function (xE) {
        if (1 === xx) {
          xx = 2;
          xc = xE;
        }
      },
      'j': function () {
        var xd;
        if (0 !== xx) {
          xx = 0;
          if (x7) {
            if (!(null === (xd = x7.parentElement) || undefined === xd)) {
              xd.removeChild(x7);
            }
          }
          if (xy) {
            xy();
          }
        }
      }
    };
  }
  function le(x4) {
    var x6;
    var x7 = 0;
    var x8 = function () {
      if (x7 <= 20) {
        x6 = window.setTimeout(x8, 25 * Math.pow(x7, 2));
        x7++;
      } else {
        x6 = undefined;
      }
      x4();
    };
    return {
      'restart': function () {
        x7 = 0;
        if (undefined !== x6) {
          clearTimeout(x6);
          x6 = undefined;
        }
        x8();
      }
    };
  }
  function ue(x4) {
    var x6;
    !function (xa) {
      xa.kReplacer = "[a-zA-Z=]";
    }(x6 || (x6 = {}));
    var x7 = "object" == typeof window ? window : global;
    var x8 = x7.parseInt;
    var x9 = x7.isNaN;
    var xx = x7.String;
    var xu = x7.RegExp;
    var xy = x7.Number;
    var xc = xu(x6.kReplacer, 'g');
    var xD = x8(null == x4 ? undefined : x4.substring(xy("0x0"), xy("0x2")), xy("0xa"));
    return x9(xD) && (null == x4 ? undefined : x4.includes('.')) ? x4 : null == x4 ? undefined : x4.substring(xy("0x2")).replace(xc, function (xa) {
      if ('=' === xa) {
        return '.';
      }
      var xC = xa.charCodeAt(0);
      var xG = xC >= xy("0x61") ? xy("0x61") : xy("0x41");
      var xw = (xC - xG - xD + xy("0x1a")) % xy("0x1a") + xG;
      return xx.fromCharCode(xw);
    });
  }
  function de(x5, x6, x7) {
    var xx = 0 === x7 ? document.createElement(x6) : document.createElementNS("http://www.w3.org/2000/svg", x6);
    x5.appendChild(xx);
    return xx;
  }
  function fe(x4, x5) {
    x4.innerHTML = x5;
    return x4;
  }
  function he() {
    var x7 = [];
    for (var x8 = 0; x8 < arguments.length; x8++) {
      x7[x8] = arguments[x8];
    }
    var x9 = x7[0];
    for (var xx = 1; xx < x7.length; xx += 2) {
      x9.style[x7[xx]] = x7[xx + 1];
    }
    return x9;
  }
  function ve() {
    var x5 = {
      hFIgT: function (xu, xy) {
        return xu < xy;
      }
    };
    x5.SWxHn = function (xu, xy) {
      return xu + xy;
    };
    var x7 = [];
    for (var x8 = 0; x8 < arguments.length; x8++) {
      x7[x8] = arguments[x8];
    }
    var x9 = x7[0];
    for (var xx = 1; xx < x7.length; xx += 2) {
      x9.setAttribute(x7[xx], x7[x5.SWxHn(xx, 1)]);
    }
    return x9;
  }
  function me() {
    var x7;
    var x8 = [];
    for (var x9 = 0; x9 < arguments.length; x9++) {
      x8[x9] = arguments[x9];
    }
    (x7 = x8.shift().classList).add.apply(x7, x8);
  }
  function ge() {
    var x7;
    var x8 = [];
    for (var x9 = 0; x9 < arguments.length; x9++) {
      x8[x9] = arguments[x9];
    }
    (x7 = x8.shift().classList).remove.apply(x7, x8);
  }
  function be(x4) {
    var x6;
    var x7 = 0;
    var x8 = function () {
      if (x7 <= 20) {
        x6 = window.setTimeout(x8, 25 * Math.pow(x7, 2));
        x7++;
      } else {
        x6 = undefined;
      }
      x4();
    };
    return {
      'restart': function () {
        x7 = 0;
        if (undefined !== x6) {
          clearTimeout(x6);
          x6 = undefined;
        }
        x8();
      }
    };
  }
  function ye() {
    return /mobile|android|iphone|ipad/i.test(window.navigator.userAgent);
  }
  function we(x4, x5, x6) {
    x6();
    var x8 = be(x6);
    var x9 = function () {
      x8.restart();
    };
    if (x4) {
      window.addEventListener("resize", x9);
    }
    var xx = be(x6);
    var xu = function () {
      xx.restart();
    };
    if (/mobile|android|iphone|ipad/i.test(window.navigator.userAgent) && x5) {
      window.addEventListener("orientationchange", xu);
    }
    return function () {
      if (x4) {
        window.removeEventListener("resize", x9);
      }
      if (/mobile|android|iphone|ipad/i.test(window.navigator.userAgent) && x5) {
        window.removeEventListener("orientationchange", xu);
      }
    };
  }
  var xe = function () {
    xe = Object.assign || function (x5) {
      var x6;
      var x7 = 1;
      for (var x8 = arguments.length; x7 < x8; x7++) {
        for (var x9 in x6 = arguments[x7]) if (Object.prototype.hasOwnProperty.call(x6, x9)) {
          x5[x9] = x6[x9];
        }
      }
      return x5;
    };
    return xe.apply(this, arguments);
  };
  function ke(x4, x5, x6) {
    var x8;
    var x9;
    var xx;
    var xu;
    var xy;
    var xc;
    var xD = "#fff";
    var xa = false;
    var xC = x6 || {};
    var xw = [];
    var xL = undefined;
    var xE = 0;
    var xd = false;
    var xp = false;
    function xU() {
      ve(xx = de(x4, "div", 0), "class", "eru");
      he(xx, "width", ''.concat(360, 'px'), "height", ''.concat(640, 'px'));
    }
    function xJ(xP, xt, xQ) {
      if (undefined === xQ) {
        xQ = 1;
      }
      var xT = RegExp("<Color>", 'g');
      var xf = RegExp("</Color>", 'g');
      return xP.replace(xT, "<span style='color:".concat(xt, "; opacity:").concat(xQ, ";'>")).replace(xf, "</span>");
    }
    function xs(xP) {
      Object.keys(xP).forEach(function (xQ) {
        xC[xQ] = xP[xQ];
      });
    }
    function xA(xP) {
      if (x8) {
        ge(x8, "er-dlg-show");
        me(x8, "er-dlg-hide");
        xa = false;
        var xQ = function () {
          x8.removeEventListener("animationend", xQ);
          x8.parentNode.removeChild(x8);
          x8 = undefined;
          if (xP) {
            xP();
          }
        };
        x8.addEventListener("animationend", xQ);
        ge(x9, "er-info-show");
        me(x9, "er-info-hide");
      } else if (xP) {
        xP();
      }
    }
    function xS(xP) {
      if (xu) {
        xp = false;
        ge(xu, "er-pop-show");
        me(xu, "er-pop-hide");
        var xQ = function () {
          xu.removeEventListener("animationend", xQ);
          xu.parentNode.removeChild(xu);
          xu = undefined;
          if (xP) {
            xP();
          }
        };
        xu.addEventListener("animationend", xQ);
      } else {
        xp = false;
        if (xP) {
          xP();
        }
      }
    }
    function xz(xP) {
      if (xy) {
        ge(xy, "er-toast-in");
        me(xy, "er-toast-out");
        he(xc, "opacity", '0');
        var xQ = function () {
          xy.removeEventListener("animationend", xQ);
          xy.parentNode.removeChild(xy);
          xy = undefined;
          xd = false;
          if (xP) {
            xP();
          }
        };
        xy.addEventListener("animationend", xQ);
      } else {
        xd = false;
        if (xP) {
          xP();
        }
      }
    }
    function xm(xP) {
      !function () {
        var xQ = [];
        for (var xI = 0; xI < arguments.length; xI++) {
          xQ[xI] = arguments[xI];
        }
        return function (xT) {
          if (0 !== xQ.length) {
            var xZ = xQ.length;
            var xi = false;
            xQ.forEach(function (xn) {
              var xb = false;
              xn(function () {
                if (!xb) {
                  xb = true;
                  if (!xi) {
                    if (0 == (xZ -= 1)) {
                      xi = true;
                      if (xT) {
                        xT();
                      }
                    }
                  }
                }
              });
            });
          } else if (xT) {
            xT();
          }
        };
      }(xA, xS, xz)(function () {
        if (xx && xx.parentNode) {
          xx.parentNode.removeChild(xx);
        }
        xx = undefined;
        xd = false;
        xp = false;
        xa = false;
        xw = [];
        if (xP) {
          xP();
        }
      });
    }
    return {
      't': function (xP) {
        Object.keys(xP).forEach(function (xQ) {
          x5[xQ] = xP[xQ];
        });
      },
      'o': function (xP) {
        xs(xP);
      },
      'i': function (xP, xt) {
        !function (xI, xT) {
          var xZ;
          var xi;
          if (!xx) {
            xU();
          }
          var xn = x5[0];
          var xX = x5[2];
          var xb = x5[1];
          var xH = x5[3];
          var xK = x5[4];
          if (!x8) {
            ve(x8 = de(xx, "div", 0), "class", "er-dlg");
            var xF = de(x8, "div", 0);
            ve(xF, "class", "er-dlg-hdr");
            var xk = de(xF, "div", 0);
            ve(xk, "class", "er-dlg-hdr-ctn");
            var xh = de(xF, "div", 0);
            ve(xh, "class", "er-dlg-hdr-ctn");
            var xO = de(xk, "div", 0);
            ve(xO, "class", "er-dlg-hdr-txt");
            xO.innerHTML = xJ(xn || '', xD);
            var xl = de(xh, "div", 0);
            ve(xl, "class", "er-dlg-hdr-txt");
            ve(x9 = de(x8, "div", 0), "class", "er-dlg-info");
            xs(xI);
            (xZ = {})[x5[6]] = xC[0];
            xZ[x5[10]] = xC[4];
            xZ[x5[8]] = ''.concat(xC[2], " (").concat(Math.floor((Date.now() - xE) / 1000), 's)');
            xZ[x5[9]] = xC[3];
            xZ[x5[11]] = xC[5];
            var xY = xZ;
            if (xC[1]) {
              (xi = {})[x5[7]] = xC[1];
              xY = xe(xi, xZ);
            }
            if (xY) {
              Object.keys(xY).forEach(function (xo, xq) {
                if (xY[xo]) {
                  var u1 = xq < Object.keys(xY || {}).length - 1;
                  var u2 = de(x9, "div", 0);
                  ve(u2, "class", "er-dlg-row");
                  var u3 = de(u2, "div", 0);
                  ve(u3, "class", "er-lbl-left");
                  u3.textContent = ''.concat(xo, ": ");
                  var u4 = de(u2, "div", 0);
                  ve(u4, "class", "er-dlg-msg");
                  u4.textContent = xY[xo];
                  if (!u1) {
                    he(u2, "display", "block");
                    he(u4, "text-align", "left", "word-break", "break-all");
                  }
                  u2.appendChild(u3);
                  u2.appendChild(u4);
                  x9.appendChild(u2);
                  if (u1) {
                    ve(de(x9, "div", 0), "class", "er-row-sep");
                  }
                }
              });
            }
            var xg = de(x8, "div", 0);
            ve(xg, "class", "er-btn-ctn");
            var xj = de(xg, "div", 0);
            ve(xj, "class", "er-btn er-copy-btn");
            var xB = de(xj, "div", 0);
            ve(xB, "class", "er-btn-text er-copy-text");
            xB.textContent = xH;
            xg.appendChild(xj);
            var xM = de(xg, "div", 0);
            ve(xM, "class", "er-btn er-copy-btn");
            var xN = de(xM, "div", 0);
            ve(xN, "class", "er-btn-text er-copy-text");
            xN.textContent = xK;
            xM.onclick = function () {
              if (xd) {
                xm(function () {
                  if (xT) {
                    xT();
                  }
                  var xq = xL;
                  xL = undefined;
                  if (xq) {
                    xq();
                  }
                });
              } else {
                xA();
                if (xT) {
                  xT();
                }
              }
            };
            var xr = xe({}, xY);
            var xW = '';
            if (xr) {
              Object.keys(xr).forEach(function (xo, xq) {
                if (xq >= Object.keys(xY || {}).length - 1) {
                  var xR = '';
                  xw.forEach(function (u0, u1) {
                    xR += ''.concat(u1 + 1, ") ").concat(u0, "\n");
                  });
                  xW += ''.concat(xo, ": \n").concat(xR);
                } else {
                  xW += ''.concat(xo, ": ").concat(xr[xo], "\n");
                }
              });
            }
            xj.onclick = function () {
              var xq;
              var xv;
              var xR;
              xq = xW;
              xv = function (u0) {
                xl.innerHTML = xJ(u0 ? xb || '' : xX || '', xD);
                Array.from(xF.children).forEach(function (u2) {
                  me(u2, "er-chg-hdr");
                });
              };
              xR = function () {
                var u1 = de(document.body, "textarea", 0);
                he(u1, "color", "rgb(0,0,0,0)", "border", "none", "backgound", "transparent", "outline", "none", "overflow", "hidden", "margin", "0px", "padding", "0px", "position", "absolute", "z-index", '-1');
                u1.value = xq;
                u1.focus();
                u1.select();
                u1.setSelectionRange(0, u1.value.length);
                var u2 = document.execCommand("Copy");
                document.body.removeChild(u1);
                if (xv) {
                  xv(u2 ? undefined : Error("Failed to copy"));
                }
              };
              if (navigator.clipboard) {
                navigator.clipboard.writeText(xq).then(function () {
                  if (xv) {
                    xv();
                  }
                })["catch"](function () {
                  xR();
                });
              } else {
                xR();
              }
            };
            ge(x8, "er-dlg-hide");
            me(x8, "er-dlg-show");
            xa = true;
            if (!xE) {
              xE = Date.now();
            }
            he(x9, "transform", "translateY(70px)");
            ge(x9, "er-info-hide");
            me(x9, "er-info-show");
          }
        }(xP, xt);
      },
      'u': function (xP, xt, xQ) {
        !function (xT, xf, xZ) {
          var xn = x5[5];
          var xX = function () {
            ve(xu = de(xx, "div", 0), "class", "er-pop er-pop-show");
            if (xT) {
              var xH = de(xu, "div", 0);
              ve(xH, "class", "er-ico-info");
              fe(xH, "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\"><path fill=\"#9D9DA3\" fill-rule=\"nonzero\" stroke=\"#9D9DA3\" stroke-width=\".2\" d=\"m7 10 .3-.1.1-.3-.1-.3-.3-.1h-.3l-.1.4a.4.4 0 0 0 .4.4m0-2.2c.2 0 .3-.2.3-.4V4.1a.3.3 0 1 0-.6 0v3.3c0 .2.1.4.3.4ZM7 13a5.9 5.9 0 0 1-4.2-1.8 6 6 0 0 1-1.3-6.5 6 6 0 0 1 3.2-3.2 5.8 5.8 0 0 1 6.6 1.3 6 6 0 0 1 1.2 6.5A6 6 0 0 1 7 13m3.8-2.2c1-1 1.5-2.3 1.5-3.8s-.5-2.8-1.5-3.8S8.5 1.7 7 1.7s-2.8.5-3.8 1.5S1.7 5.5 1.7 7s.5 2.7 1.5 3.8c1 1 2.3 1.5 3.8 1.5s2.8-.5 3.8-1.5Z\"/></svg>");
              var xK = de(xu, "div", 0);
              ve(xK, "class", "er-pop-msg");
              xK.textContent = xT;
            }
            var xF = de(xu, "div", 0);
            ve(xF, "class", "er-pop-btn er-btn");
            var xk = de(xF, "div", 0);
            ve(xk, "class", "er-btn-text er-pop-btn-text");
            xk.textContent = xn;
            xE = Date.now();
            xF.onclick = xZ;
            xp = true;
          };
          if (xu && xf) {
            xS(function () {
              xX();
            });
          } else if (!xu) {
            xU();
            xX();
          }
        }(xP, xt, xQ);
      },
      'l': function (xP) {
        xm(xP);
      },
      'p': function (xP) {
        xS(xP);
      },
      'v': function (xP, xt) {
        if (!xy) {
          if (xa) {
            if (xt) {
              xL = xt;
            }
            if (x8) {
              var xI = de(xx, "div", 0);
              ve(xI, "class", "er-toast-ctn");
              ve(xy = de(xI, "div", 0), "class", "er-toast-bg");
              var xT = de(xy, "div", 0);
              xT.setAttribute("class", "er-toast-txt");
              xT.innerHTML = xJ(xP, xD);
              me(xy, "er-toast-in");
              ve(xc = de(xI, "div", 0), "class", "er-dlg-close");
              fe(xc, "<span aria-hidden=\"true\">&times;</span>");
              xc.onclick = function () {
                xm(function () {
                  var xi = xL;
                  xL = undefined;
                  if (xi) {
                    xi();
                  }
                });
              };
              setTimeout(function () {
                he(xc, "opacity", '1');
              }, 100);
              xd = true;
            } else {
              xm(function () {
                var xf = xL;
                xL = undefined;
                if (xf) {
                  xf();
                }
              });
            }
          } else if (xt) {
            xt();
          }
        }
      },
      'm': function (xP) {
        xD = xP;
      },
      'h': function (xP) {
        if (!xx) {
          xU();
        }
        xP.appendChild(xx);
      },
      'k': function (xP) {
        !function (xQ) {
          if (!xw.includes(xQ)) {
            xw.push(xQ);
          }
        }(xP);
      },
      'j': function () {
        return x8 ? x8.offsetHeight : 0;
      },
      'Y': function () {
        return xa;
      },
      '_': function () {
        return xp;
      }
    };
  }
  if ("function" == typeof SuppressedError) {
    SuppressedError;
  }
  var Ze = function (x4, x5) {
    var x7 = Error(x4, x5);
    this.name = "ExtError";
    this.message = x7.message;
    this.stack = (null == x5 ? undefined : x5.C) ? x7.stack : undefined;
    this.cause = x7.cause || (null == x5 ? undefined : x5.cause);
    this.code = null == x5 ? undefined : x5.code;
    this.source = null == x5 ? undefined : x5.source;
  };
  !function (x4, x5) {
    Object.setPrototypeOf(x4, x5);
    x4.prototype = Object.create(x5.prototype, {
      'constructor': {
        'value': x4,
        'writable': true,
        'configurable': true
      }
    });
  }(Ze, Error);
  var Ce;
  var _e = function (x4, x5, x6) {
    var x8 = new XMLHttpRequest();
    try {
      x8.open("GET", x4, true);
    } catch (xx) {
      var x9 = new Ze("Request error", {
        'code': "N1000",
        'source': x4,
        'cause': xx
      });
      return void x6(x9);
    }
    try {
      if ("timeout" in x8) {
        x8.timeout = 60000;
      }
    } catch (xu) {}
    switch (x5) {
      case 1:
        x8.responseType = "json";
        break;
      case 3:
      case 2:
      case 4:
        x8.responseType = "blob";
    }
    x8.onload = function () {
      var xc;
      var xD;
      var xa;
      if (x8.status >= 200 && x8.status < 300 || 0 === x8.status && x8.response) {
        xc = function (xC, xG, xw) {
          var xE;
          if (1 === xw && "string" == typeof xG) {
            try {
              xG = JSON.parse(xG);
            } catch (xd) {
              xE = new Ze("Request error", {
                'code': "N1005",
                'cause': xd,
                'source': xC
              });
              xG = undefined;
            }
          }
          if (null == xE && null == xG) {
            xE = new Ze("Request error", {
              'code': "N1005",
              'source': xC
            });
          }
          return [xE, xG];
        }(x4, x8.response, x5);
        xD = xc[0];
        xa = xc[1];
      } else {
        xD = new Ze("Request error", {
          'code': 'N0'.concat(x8.status),
          'source': x4
        });
      }
      x6(xD, xa);
    };
    x8.onerror = function () {
      var xy = new Ze("Request error", {
        'code': "N1000",
        'source': x4
      });
      x6(xy);
    };
    x8.ontimeout = function () {
      var xy = new Ze("Request error", {
        'code': "N1001",
        'source': x4
      });
      x6(xy);
    };
    x8.send();
  };
  function Se(x4) {
    _e = x4;
  }
  var je = Object.create(null);
  var He = _e;
  Se(function (x4, x5, x6) {
    if (2 !== x5) {
      return He(x4, x5, x6);
    }
    He(x4, 4, function (x8, x9) {
      if (x8) {
        return x6(x8);
      }
      var xu;
      var xc = URL.createObjectURL(x9);
      function xa(xC) {
        if (xC.filename === xc) {
          xu = new Ze("Script error", {
            'code': "G1015",
            'cause': xC.error,
            'source': x4
          });
          delete je[xc];
        }
      }
      window.addEventListener("error", xa);
      je[xc] = x4;
      var xD = document.createElement("script");
      xD.src = xc;
      xD.defer = true;
      xD.onload = function () {
        window.removeEventListener("error", xa);
        document.head.removeChild(xD);
        URL.revokeObjectURL(xc);
        x6(xu, x9);
      };
      document.head.appendChild(xD);
    });
  });
  var Me;
  var Te;
  var Pe = [];
  var Re = !!G.__sv;
  var Ee = false;
  if (Re) {
    Te = function (x4) {
      return function (x6) {
        for (var x8 = 0; x8 < Pe.length; x8++) {
          var x9 = Pe[x8];
          if ("string" == typeof x9) {
            if (x6 === x9) {
              return true;
            }
          } else {
            if (x9.test(x6)) {
              return true;
            }
          }
        }
        return false;
      }(x4) ? Promise.resolve(x4) : Ee ? window.sign.getSignedUrl(x4) : Promise.resolve(Me || (Me = new Promise(function (x6, x7) {
        var x9 = G.__sv.substring(2, 4) + ".js";
        var xx = location.origin + "/loader/" + x9;
        _e(xx, 2, function (xu) {
          if (xu) {
            if ("G1015" !== xu.code) {
              Me = undefined;
            }
            xu = new Ze("URL sign error", {
              'code': "G1017",
              'cause': xu,
              'source': xx
            });
          } else if ("object" != typeof window.sign) {
            xu = new Ze("URL sign error", {
              'code': "G1016",
              'source': xx
            });
          }
          if (xu) {
            return x7(xu);
          }
          try {
            window.sign.setQuery(G.__sv);
            Ee = true;
            Me = undefined;
            x6();
          } catch (xD) {
            var xy = new Ze(xD.message);
            var xc = new Ze("URL sign error", {
              'code': "G1019",
              'source': xx,
              'cause': xy
            });
            x7(xc);
          }
        });
      }), Me)).then(function () {
        return window.sign.getSignedUrl(x4);
      });
    };
    Ce = Te;
  }
  var Ne = _e;
  var Ve = [];
  Se(function (x4, x5, x6) {
    if (function (x9) {
      for (var xu = 0; xu < Ve.length; xu++) {
        var xc = Ve[xu];
        if ("string" == typeof xc) {
          if (x9 === xc) {
            return true;
          }
        } else {
          if (xc.test(x9)) {
            return true;
          }
        }
      }
      return false;
    }(x4)) {
      Ne(x4, x5, x6);
    } else {
      var x8 = setTimeout(function (x9) {
        return function () {
          if (ut) {
            ut(x9);
          }
        };
      }(x4), 5000);
      Ne(x4, x5, function (x9, xx) {
        clearTimeout(x8);
        if (x6) {
          x6(x9, xx);
        }
      });
    }
  });
  var Ae;
  function Fe() {
    Ie("string" == typeof arguments[0] ? function (x5) {
      var x7 = x5[2];
      var x8 = x5[3];
      var x9 = x5[4];
      return {
        'S': x5[0],
        'T': x5[1],
        'P': xx,
        'R': xx,
        'D': x9 && function () {
          x9(this.N);
        }
      };
      function xx() {
        var xu = this.N;
        var xy = this.A;
        if (null != xu) {
          x7(xu);
        } else if (undefined === x8) {
          x7(undefined, xy);
        } else {
          x8(xy);
        }
      }
    }(arguments) : function (x5) {
      var x6 = x5.P;
      var x7 = x5.R;
      var x8 = x5.D;
      var x9 = {
        'S': x5.S,
        'T': x5.T
      };
      x9.R = x7.bind(null, x9);
      x9.P = x6.bind(null, x9);
      if (x8) {
        x9.D = x8.bind(null, x9);
      }
      return x9;
    }(arguments[0]));
  }
  function Ie(x4) {
    if (Ce) {
      Ce(x4.S).then(function (x6) {
        x4.G = x6;
        qe(x4);
      }, function (x6) {
        !function (x8, x9) {
          x8.F = false;
          x8.N = new Ze("Request error", {
            'code': "N1004",
            'source': x8.S,
            'cause': x9
          });
          Le(x8);
        }(x4, x6);
      });
    } else {
      qe(x4);
    }
  }
  function qe(x4) {
    _e(x4.G || x4.S, x4.T, function (x6, x7) {
      if (x6) {
        x4.N = x6;
      }
      x4.A = x7;
      Le(x4);
    });
  }
  function Le(x4) {
    if (null != x4.N) {
      var x6 = undefined === x4.F ? 0 : x4.F;
      if (false !== x6 && ("N1000" === x4.N.code || "N1001" === x4.N.code) && x6 < 5) {
        x4.F = ++x6;
        if (x4.D) {
          x4.D();
        }
        x4.N = undefined;
        x4.G = undefined;
        setTimeout(Ie, 1000 * (1 << x6), x4);
      } else if (x4.P) {
        x4.P();
      }
    } else if (x4.R) {
      x4.R();
    }
  }
  var Be = 0;
  function Ke(x4) {
    x4.preventDefault();
  }
  function Oe(x5) {
    var x8 = Date.now();
    if (x5 && x8 - Be < 500) {
      x5.preventDefault();
    }
    Be = x8;
  }
  var yn = {
    passive: false
  };
  var Ue;
  var We;
  var Qe = `/${1964781}` + "/shared/";
  var Xe = '';
  window.GtmId = new String(window.GtmId);
  var et = O() ? 2015 : 5;
  var tt = k;
  var rt = Date.now();
  var ot = G.or;
  if (ot) {
    if (0 === (ot = ue(ot)).indexOf('//')) {
      ot = location.protocol + ot;
    } else if (!/^https?:/.test(ot)) {
      ot = location.protocol + '//' + ot;
    }
    Xe = ot + location.pathname.replace("index.html", '');
    Qe = ot + Qe;
  }
  var it = G.blockpage;
  if (it) {
    var at = document.createElement("div");
    at.id = "block-page";
    at.style.backgroundColor = '#' + it;
    document.body.appendChild(at);
  }
  var st;
  var lt = document.body;
  var ct = function (x4, x5, x6) {
    var x8 = ee(x4, "div", 0);
    ne(x8, "class", "initial-loader");
    var x9 = ee(x8, "div", 0);
    ne(x9, "class", "il-wrapper");
    te(x9, "transform-origin", "top left");
    var xx;
    var xu;
    var xy;
    var xc = ee(x9, "div", 0);
    te(xc, "width", ''.concat(360, 'px'), "height", ''.concat(640, 'px'), "display", "flex", "flex-direction", "column", "justify-content", "center");
    var xD = true;
    var xC = function (xE, xd) {
      var xU = function () {
        var xm = window.innerWidth;
        var xP = window.innerHeight;
        var xt = xm / xP > 0.5625 ? 1920 / xP : 1080 / xm;
        var xQ = xd / xt;
        var xI = 0;
        var xT = 0;
        if (xm / xP > 0.5625) {
          xI = 0;
          xT = (xm - 360 * xQ) / 2;
        } else {
          xT = 0;
          xI = (xP - 640 * xQ) / 2;
        }
        te(xE, "transform", "scale(".concat(xQ.toFixed(4), ')'), "top", ''.concat(xI, 'px'), "left", ''.concat(xT, 'px'));
      };
      xU();
      var xJ = le(xU);
      var xs = function () {
        xJ.restart();
      };
      window.addEventListener("resize", xs);
      var xA = le(xU);
      var xS = function () {
        xA.restart();
      };
      if (/mobile|android|iphone|ipad/i.test(window.navigator.userAgent)) {
        window.addEventListener("orientationchange", xS);
      }
      return function () {
        window.removeEventListener("resize", xs);
        if (/mobile|android|iphone|ipad/i.test(window.navigator.userAgent)) {
          window.removeEventListener("orientationchange", xS);
        }
      };
    }(x9, 3);
    var xG = ee(document.head, "style", 0);
    xG.textContent = ".initial-loader{background-color:#000;height:100%;margin:auto;position:fixed;touch-action:none;transition:opacity .35s ease-in;width:100%}.initial-loader,.initial-loader .il-wrapper{align-items:center;display:flex;flex-direction:column;justify-content:center}.initial-loader .il-wrapper{position:absolute}.initial-loader .il-circle-loading{align-items:center;display:flex;height:10px;justify-content:space-between;width:40px}.initial-loader .il-circle{animation-direction:alternate;animation-duration:.25s;animation-iteration-count:infinite;animation-name:il-circle-bounce;animation-timing-function:ease-out;background-color:#30a2d0;border-radius:50%;height:10px;position:relative;width:10px}.initial-loader .il-circle:first-of-type{animation-delay:0s}.initial-loader .il-circle:nth-of-type(2){animation-delay:-75ms}.initial-loader .il-circle:nth-of-type(3){animation-delay:-.15s}.initial-loader .il-err-container{align-items:center;display:flex;flex-direction:column;font-family:PingFangSC-Regular;position:absolute;width:100%}.initial-loader .il-err-title{color:#fff;font-size:16px;padding:6px 0;text-align:center;width:280px}.initial-loader .il-err-desc{color:#98989e;font-size:11px;line-height:14px;text-align:center;width:280px}.initial-loader .il-btn-container{align-items:center;color:#fff;display:flex;justify-content:center;padding-top:42px}.initial-loader .il-btn{align-items:center;border:1px solid #7f7f7f;border-radius:4px;cursor:pointer;display:flex;font-family:PingFangSC-Semibold;font-size:12px;justify-content:center;margin:0 4px;min-height:16px;min-width:80px;padding:10px 15px;text-align:center;user-select:none}.initial-loader .il-btn:active{opacity:.6}@keyframes il-circle-bounce{0%{bottom:0}90%,to{bottom:15px}}";
    if (0 === x5) {
      ne(xu = ee(xc, "div", 0), "class", "il-circle-loading ");
      for (var xw = 0; xw < 3; xw++) {
        ne(ee(xu, "div", 0), "class", "il-circle");
      }
    } else if (1 === x5) {
      (xx = se(xc, x6))._();
    }
    function xL(xE, xd) {
      if (undefined === xd) {
        xd = -6;
      }
      var xU = 320 + 0.4375 * xx.k() / 2 - (640 - xE) + xd;
      return xU > 0 ? xU : 0;
    }
    return {
      'get': function (xE) {
        var xd = [];
        for (var xp = 1; xp < arguments.length; xp++) {
          xd[xp - 1] = arguments[xp];
        }
        if (0 === xE) {
          return xL(xd[0], xd[1]);
        }
      },
      'set': function (xE, xd) {
        if (0 === xE) {
          xD = xd;
        }
      },
      'action': function (xE) {
        var xp = [];
        for (var xU = 1; xU < arguments.length; xU++) {
          xp[xU - 1] = arguments[xU];
        }
        switch (xE) {
          case 0:
            !function (xJ, xs, xA) {
              if (undefined === xA) {
                xA = [];
              }
              if (!xy) {
                ne(xy = ee(xc, "div", 0), "class", "il-err-container");
                var xz = ee(xy, "div", 0);
                ne(xz, "class", "il-err-title");
                xz.textContent = xJ;
                var xm = ee(xy, "div", 0);
                ne(xm, "class", "il-err-desc");
                xm.textContent = xs;
                if (xA.length > 2) {
                  xA.length = 2;
                }
                if (xA.length > 0) {
                  var xP = ee(xy, "div", 0);
                  ne(xP, "class", "il-btn-container");
                  for (var xt = 0; xt < xA.length; xt++) {
                    var xQ = ee(xP, "div", 0);
                    ne(xQ, "class", "il-btn");
                    if (xA.length > 1) {
                      te(xQ, "flex", '1');
                    }
                    xQ.textContent = xA[xt].label;
                    var xI = xA[xt].onclick;
                    if (xI) {
                      xQ.onclick = xI;
                    }
                  }
                }
                if (0 === x5) {
                  if (!(null == xu)) {
                    xu.remove();
                  }
                } else {
                  if (1 === x5) {
                    var xT = function () {
                      var xf = xx.M();
                      var xZ = xx.H();
                      var xi = -1 * xL(640 - (320 - xy.offsetHeight / 2));
                      te(xf, "transition", "opacity 0.28s ease-in");
                      te(xZ, "transition", "transform 0.5s ease-in-out");
                      te(xy, "transition", "opacity 0s linear 0.28s, transform 0.5s ease-in-out");
                      requestAnimationFrame(function () {
                        te(xy, "opacity", '1', "transform", "translateY(0px)");
                        te(xf, "opacity", '0');
                        if (xD) {
                          te(xZ, "transform", "translateY(".concat(xi, "px) scale(").concat(0.4375, ')'));
                        }
                      });
                    };
                    requestAnimationFrame(function () {
                      te(xy, "opacity", '0', "transform", "translateY(".concat(xy.offsetHeight, "px)"));
                      xx.Y(xT);
                    });
                  }
                }
              }
            }(xp[0], xp[1], xp[2]);
            break;
          case 1:
            !function (xJ) {
              te(x8, "opacity", '0');
              setTimeout(function () {
                var xA;
                var xS;
                var xz;
                if (1 === x5 && xx) {
                  xx.j();
                }
                xC();
                if (!(null === (xA = xG.parentNode) || undefined === xA)) {
                  xA.removeChild(xG);
                }
                if (!(null === (xS = x9.parentNode) || undefined === xS)) {
                  xS.removeChild(x9);
                }
                if (!(null === (xz = x8.parentNode) || undefined === xz)) {
                  xz.removeChild(x8);
                }
                if (xJ) {
                  xJ();
                }
              }, 350);
            }(xp[0]);
            break;
          case 2:
            !function () {
              if (1 === x5 && xx) {
                if (xy) {
                  te(xy, "opacity", '1');
                  var xs = xx.M();
                  var xA = xx.H();
                  var xS = -1 * xL(640 - (320 - xy.offsetHeight / 2));
                  te(xs, "transition", "opacity 0.28s ease-in");
                  te(xA, "transition", "transform 0.5s ease-in-out");
                  te(xy, "transition", "opacity 0s linear 0.28s, transform 0.5s ease-in-out");
                  requestAnimationFrame(function () {
                    te(xy, "opacity", '1', "transform", "translateY(0px)");
                    te(xs, "opacity", '0');
                    te(xA, "transform", "translateY(".concat(xS, "px) scale(").concat(0.4375, ')'));
                  });
                } else {
                  xx._();
                  var xz = xx.M();
                  var xm = xx.H();
                  te(xz, "transition", "opacity 0.28s ease-in");
                  te(xm, "transition", "transform 0.5s ease-in-out");
                  requestAnimationFrame(function () {
                    te(xz, "opacity", '1');
                    te(xm, "transform", "translateY(0px) scale(0.625)");
                  });
                }
              }
            }();
            break;
          case 3:
            !function (xJ) {
              if (1 === x5 && xx) {
                xx.Y(xJ);
              }
            }(xp[0]);
            break;
          case 4:
            !function (xJ) {
              if (1 === x5 && xx) {
                var xA = xx.H();
                var xS = xx.M();
                te(xA, "transition", "transform 0.7s ease-out");
                te(xS, "transition", '', "opacity", '0');
                requestAnimationFrame(function () {
                  te(xA, "transform", "translateY(".concat(-xJ, "px) scale(").concat(0.4375, ')'));
                });
                if (xy) {
                  te(xy, "transition", "opacity 0.7s ease-in");
                  requestAnimationFrame(function () {
                    te(xy, "opacity", '0');
                  });
                }
              }
            }(xp[0]);
        }
      }
    };
  }(lt, O() ? 1 : 0, J(4));
  st = window.document;
  st.addEventListener("touchend", Oe, yn);
  st.addEventListener("dblclick", Ke, yn);
  ["gesturestart", "gesturechange", "gestureend"].forEach(function (x4) {
    return st.addEventListener(x4, Ke, yn);
  });
  var ut;
  var dt;
  Ue = {
    0: J(7),
    2: J(8),
    1: J(9),
    3: J(11),
    5: J(10),
    4: J(17),
    6: J(13),
    7: J(12),
    8: J(14),
    9: J(15),
    11: J(18),
    10: J(16)
  };
  We = {
    0: window.location.host,
    3: window.navigator.userAgent
  };
  var ft = function (x4) {
    var x6 = x4.labels;
    var x7 = x4.root;
    var x8 = x4.enableScale;
    var x9 = x4.values;
    var xx = undefined === x9 ? {} : x9;
    var xu = x7;
    var xy = undefined;
    de(document.head, "style", 0).textContent = "@keyframes eru-ep-in{0%{opacity:0;transform:translateY(20px)}50%{opacity:1}to{opacity:1;transform:translateY(0)}}@keyframes eru-ep-out{0%{opacity:1;transform:translateY(0)}50%{opacity:1}to{opacity:0;transform:translateY(20px)}}@keyframes eru-dlg-in{0%{bottom:-100px}30%{opacity:1}to{bottom:0;opacity:1}}@keyframes eru-info-in{0%{transform:translateY(70px)}30%{opacity:1}to{opacity:1;transform:translateY(0)}}@keyframes eru-dlg-out{0%{bottom:0;opacity:1}to{bottom:-100px;opacity:0}}@keyframes eru-info-out{0%{opacity:1;transform:translateY(0)}80%{opacity:0}to{opacity:0;transform:translateY(70px)}}@keyframes eru-hdr{0%{transform:translateY(0)}to{transform:translateY(-104px)}}@keyframes eru-toast-in{0%{opacity:0;top:-48px}50%{opacity:.85}to{opacity:.85;top:20px}}@keyframes eru-toast-out{0%{opacity:.85;top:20px}50%{opacity:0}to{opacity:0;top:-48px}}.eru-root{font-family:PingFang SC,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;pointer-events:none;position:fixed;touch-action:none;transform-origin:top left}.eru-root .eru{flex-direction:column;justify-content:flex-end}.eru-root .eru,.eru-root .eru .er-btn{align-items:center;display:flex;overflow:hidden}.eru-root .eru .er-btn{border:1px solid #7f7f7f;border-radius:4px;cursor:pointer;justify-content:center;pointer-events:auto;text-align:center}.eru-root .eru .er-btn-text{line-clamp:2;-webkit-line-clamp:2;-webkit-box-orient:vertical;color:#fff;display:-webkit-box}.eru-root .eru .er-btn:active{opacity:.6}.eru-root .eru .er-pop-show{animation:eru-ep-in .25s ease-out;animation-fill-mode:forwards}.eru-root .eru .er-pop-hide{animation:eru-ep-out .25s ease-out;animation-fill-mode:forwards}.eru-root .eru .er-pop{align-items:center;background:#000;border-radius:4px;display:flex;height:48px;justify-content:flex-end;margin-bottom:10px;width:328px}.eru-root .eru .er-pop .er-ico-info{align-items:center;color:#a1a1a6;display:flex;height:13px;padding:5px;scale:.7;width:13px}.eru-root .eru .er-pop-msg{color:#a1a1a6;flex:1;font-size:10px;padding-right:10px}.eru-root .eru .er-pop-btn{color:#fff;cursor:pointer;font-size:11px;margin:0 10px;max-height:40px;min-height:28px;overflow:hidden;pointer-events:auto}.eru-root .eru .er-pop-btn-text{line-height:13px;max-width:75px;min-width:60px}.eru-root .eru .er-dlg-show{animation:eru-dlg-in .75s ease-in-out;animation-fill-mode:forwards}.eru-root .eru .er-info-show{animation:eru-info-in .75s ease-in-out;animation-fill-mode:forwards}.eru-root .eru .er-dlg-hide{animation:eru-dlg-out .375s ease-in-out;animation-fill-mode:forwards}.eru-root .eru .er-info-hide{animation:eru-info-out .75s ease-in-out;animation-fill-mode:forwards}.eru-root .eru .er-chg-hdr{animation:eru-hdr .5s ease-in-out;animation-fill-mode:forwards}.eru-root .eru .er-dlg{align-items:center;background-color:#000;border-radius:8px;font-weight:400;left:15px;opacity:0;padding:0 10px 10px;pointer-events:auto;position:absolute;width:310px;z-index:1001}.eru-root .eru .er-dlg-close{color:#fff;cursor:pointer;opacity:0;pointer-events:auto;position:absolute;right:15px;scale:1.5;top:15px;transition:opacity .2s}.eru-root .eru .er-dlg-hdr{color:#d1d1d6;font-size:16px;font-weight:400;height:104px;line-height:20px;margin:0 35px;mask-image:linear-gradient(180deg,transparent,#000 10%,#000 90%,transparent);overflow:hidden;text-align:center;width:240px}.eru-root .eru .er-dlg-hdr-ctn{align-items:center;color:#fff;display:flex;height:104px;justify-content:center}.eru-root .eru .er-dlg-info{font-size:11px;margin-bottom:13px;padding:14px}.eru-root .eru .er-dlg-row{color:#b0b0b0;display:flex;justify-content:space-between;margin-bottom:12px}.eru-root .eru .er-row-sep{border-bottom:1px solid #fff;margin:10px 0;opacity:.2}.eru-root .eru .er-lbl-left{color:#888;font-size:11px;min-width:70px}.eru-root .eru .er-dlg-msg{line-clamp:3;-webkit-line-clamp:3;-webkit-box-orient:vertical;color:#fff;display:-webkit-box;font-size:11px;overflow:hidden;text-align:right;word-break:break-word}.eru-root .eru .er-btn-ctn{align-items:center;display:flex;justify-content:center;margin-bottom:18px}.eru-root .eru .er-copy-btn{height:36px;margin:0 4px}.eru-root .eru .er-copy-text{line-height:17px;max-width:120px;min-width:90px}.eru-root .eru .er-toast-ctn{align-items:center;display:flex;height:48px;justify-content:center;opacity:1;position:absolute;top:0;width:360px}.eru-root .eru .er-toast-bg{background:#000;border-radius:24px;padding:9px 20.5px;position:absolute;width:203.5px}.eru-root .eru .er-toast-txt{color:#fff;font-size:11px;font-weight:400;letter-spacing:0;line-height:15px;text-align:center}.eru-root .eru .er-toast-in{animation:eru-toast-in .25s ease-in-out;animation-fill-mode:forwards}.eru-root .eru .er-toast-out{animation:eru-toast-out .25s ease-in-out;animation-fill-mode:forwards}.eru-landscape-cover{align-items:center;background-color:#000;color:#fff;display:flex;font-family:PingFang SC,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;font-size:5.5vmin;height:100%;justify-content:center;margin:auto;opacity:.85;position:fixed;text-align:center;transition:opacity .3s ease-in .1s;visibility:hidden;width:100%}.eru-landscape-cover p{transition:transform .3s ease-in}";
    if (x8) {
      ve(xu = de(x7, "div", 0), "class", "eru-root");
      xy = we(true, true, function (xC, xG) {
        return function () {
          var xE = window.innerWidth;
          var xd = window.innerHeight;
          var xp = xE / xd > 0.5625 ? 1920 / xd : 1080 / xE;
          var xU = xG / xp;
          var xJ = 0;
          var xs = 0;
          if (xE / xd > 0.5625) {
            xJ = 0;
            xs = (xE - 360 * xU) / 2;
          } else {
            xs = 0;
            xJ = (xd - 640 * xU) / 2;
          }
          he(xC, "transform", "scale(".concat(xU.toFixed(4), ')'), "top", ''.concat(xJ, 'px'), "left", ''.concat(xs, 'px'));
        };
      }(xu, 3));
    }
    var xD = ke(xu, x6, xx);
    function xa() {
      if (xu && xu.parentElement) {
        xu.parentElement.removeChild(xu);
      }
      if (xy) {
        xy();
      }
    }
    return {
      'set': function (xC, xG) {
        switch (xC) {
          case 0:
            xD.t(xG);
            break;
          case 1:
            xD.o(xG);
            break;
          case 2:
            xD.m(xG);
            break;
          case 3:
            xD.k(xG);
        }
      },
      'get': function (xC) {
        switch (xC) {
          case 0:
            return xD.j();
          case 1:
            return xD._();
          case 2:
            return xD.Y();
          default:
            return;
        }
      },
      'action': function (xC) {
        var xw = [];
        for (var xL = 1; xL < arguments.length; xL++) {
          xw[xL - 1] = arguments[xL];
        }
        switch (xC) {
          case 0:
            xD.i(xw[0], xw[1]);
            break;
          case 1:
            xD.u(xw[0], false, xw[1]);
            break;
          case 2:
            xD.u(xw[0], true, xw[1]);
            break;
          case 3:
            xD.p(xw[0]);
            break;
          case 4:
            xD.l(xw[0]);
            break;
          case 5:
            xD.v(xw[0], xw[1]);
            break;
          case 6:
            xa();
            xD.h(xw[0]);
            break;
          case 7:
            xa();
        }
      }
    };
  }({
    'labels': Ue,
    'values': We,
    'root': document.body,
    'enableScale': true
  });
  var ht = function (x4, x5) {
    var x6 = {
      'ziFMK': function (xu, xy) {
        return xu(xy);
      },
      'pFtqW': function (xu, xy, xc) {
        return xu(xy, xc);
      },
      'dLaRg': function (xu, xy) {
        return xu !== xy;
      },
      'rDaWc': "EULIm",
      'PmxTj': "pfkRB",
      'qGcHI': function (xu) {
        return xu();
      },
      'fKEpo': function (xu, xy) {
        return xu > xy;
      },
      'HGGMc': function (xu, xy, xc, xD) {
        return xu(xy, xc, xD);
      },
      'xztTj': "visibility",
      'UOYKE': "visible",
      'hBcbt': function (xu, xy, xc, xD) {
        return xu(xy, xc, xD);
      },
      'Hfjjs': "hidden",
      'mywLz': "opacity",
      'dRuFf': function (xu, xy, xc, xD) {
        return xu(xy, xc, xD);
      },
      'hhgZr': "transform",
      'YBpAm': "translateY(0px) scale(0.625)",
      'gSVbw': "transition",
      'DXFQK': "opacity 0.28s ease-in",
      'ltzii': "transform 0.5s ease-in-out",
      'kGIsc': "URL sign error",
      'ZYofa': "G1019",
      'pdaWz': function (xu, xy) {
        return xu(xy);
      },
      'LwHct': function (xu, xy) {
        return xu !== xy;
      },
      'ZoVyE': "UyDmt",
      'HnyWu': "PSUcM",
      'GDxUr': "transitionend",
      'FfVpM': function (xu, xy) {
        return xu !== xy;
      },
      'eNlkG': "QMYZr",
      'UEGwS': function (xu) {
        return xu();
      },
      'OVhim': function (xu, xy) {
        return xu === xy;
      },
      'TqBZc': "ktfZo",
      'eRrHy': "translateY(32px)",
      'GImCe': "HVdCM",
      'DHMot': "GWzqm",
      'yAajv': "div",
      'wpFdS': function (xu, xy, xc) {
        return xu(xy, xc);
      },
      'faSUD': "eru-landscape-cover"
    };
    if (!x6.UEGwS(ye)) {
      return null;
    }
    var x7 = x6.dRuFf(de, x4, x6.yAajv, 0);
    x6.wpFdS(me, x7, x6.faSUD);
    var x8 = x6.hBcbt(de, x7, 'p', 0);
    x8.innerHTML = x5;
    var x9 = false;
    var xx = x6.dRuFf(we, false, true, function () {
      if (x6.dLaRg(x6.rDaWc, x6.PmxTj)) {
        if (x6.qGcHI(ye) && x6.fKEpo(window.innerWidth, window.innerHeight)) {
          x9 = true;
          x6.HGGMc(he, x7, x6.xztTj, x6.UOYKE);
        } else {
          x9 = false;
          x6.hBcbt(he, x7, x6.xztTj, x6.Hfjjs);
        }
      } else {
        x6.ziFMK(xx, xu);
        if (xy) {
          x6.pFtqW(xc, xD, xa);
        }
      }
    });
    return {
      'action': function (xu) {
        var xy = {
          'OXYJv': function (xc, xD, xa, xC) {
            return x6.hBcbt(xc, xD, xa, xC);
          },
          'NumsQ': x6.mywLz,
          'vSxpg': function (xc, xD, xa, xC) {
            return x6.dRuFf(xc, xD, xa, xC);
          },
          'sjdBb': function (xc, xD, xa, xC) {
            return x6.hBcbt(xc, xD, xa, xC);
          },
          'yCFno': x6.hhgZr,
          'sLyrL': x6.YBpAm,
          'gWmcu': x6.gSVbw,
          'mMebp': x6.DXFQK,
          'LVacB': x6.ltzii,
          'vrxdn': function (xc, xD) {
            return x6.ziFMK(xc, xD);
          },
          'LYpUE': x6.kGIsc,
          'twRCK': x6.ZYofa,
          'pifvC': function (xc, xD) {
            return x6.pdaWz(xc, xD);
          },
          'XtXdn': function (xc, xD) {
            return x6.LwHct(xc, xD);
          },
          'yXYwX': x6.ZoVyE,
          'nrPSC': x6.HnyWu,
          'hHItn': x6.GDxUr,
          'SSSDD': function (xc, xD) {
            return x6.FfVpM(xc, xD);
          },
          'WOPeM': x6.eNlkG,
          'xPiem': function (xc) {
            return x6.UEGwS(xc);
          },
          'UHXwe': function (xc, xD) {
            return x6.OVhim(xc, xD);
          },
          'CVmJA': x6.TqBZc,
          'kqiZK': function (xc, xD, xa, xC) {
            return x6.HGGMc(xc, xD, xa, xC);
          },
          'IfJkU': x6.eRrHy
        };
        if (x6.OVhim(x6.GImCe, x6.DHMot)) {
          x6.hBcbt(x6, x7, xy.NumsQ, '1');
        } else if (x6.OVhim(0, xu)) {
          (function () {
            var xc = {
              'UtNQf': xy.LYpUE,
              'CILKj': xy.twRCK,
              'jvOqO': function (xa, xC) {
                return x6.pdaWz(xa, xC);
              },
              'urBXG': function (xa, xC) {
                return x6.LwHct(xa, xC);
              },
              'XqMlm': xy.yXYwX,
              'PhDZx': xy.nrPSC,
              'unzvQ': xy.hHItn
            };
            if (x6.FfVpM(xy.WOPeM, xy.WOPeM)) {
              var xa = {
                'yCqxd': function (xw, xL, xp, xU) {
                  return x6.dRuFf(xw, xL, xp, xU);
                },
                'hUoOH': xy.NumsQ,
                'SPdjp': function (xw, xL, xp, xU) {
                  return x6.hBcbt(xw, xL, xp, xU);
                },
                'HAJPq': xy.yCFno,
                'kKiwH': xy.sLyrL
              };
              xy._();
              var xC = xc.M();
              var xG = xD.H();
              x6.dRuFf(xa, xC, xy.gWmcu, xy.mMebp);
              x6.dRuFf(xC, xG, xy.gWmcu, xy.LVacB);
              x6.ziFMK(xG, function () {
                x6.dRuFf(xC, xC, xa.hUoOH, '1');
                x6.hBcbt(xG, xG, xa.HAJPq, xa.kKiwH);
              });
            } else {
              x6.UEGwS(xx);
              if (x9) {
                if (x6.OVhim(xy.CVmJA, xy.CVmJA)) {
                  var xD = function () {
                    if (x6.LwHct(xc.XqMlm, xc.PhDZx)) {
                      x7.removeEventListener(xc.unzvQ, xD);
                      x4.removeChild(x7);
                    } else {
                      var xC = new x9(xx.message);
                      var xG = new xu(xc.UtNQf, {
                        'code': xc.CILKj,
                        'source': xy,
                        'cause': xC
                      });
                      x6.pdaWz(xc, xG);
                    }
                  };
                  x6.HGGMc(he, x8, xy.yCFno, xy.IfJkU);
                  x6.hBcbt(he, x7, xy.NumsQ, '0');
                  x7.addEventListener(xy.hHItn, xD);
                } else {
                  x6 = x7;
                }
              } else {
                x4.removeChild(x7);
              }
            }
          })();
        }
      }
    };
  }(lt, J(21));
  function vt(x4) {
    mt(new Ze("Resource load failed", {
      'code': "G1002",
      'cause': x4.N
    }), J(19), false);
    bt(x4);
  }
  function pt(x4) {
    var x6 = new Ze("Resource load failed", {
      'code': "G1002",
      'cause': x4.N
    });
    gt(''.concat(J(1), " (").concat("G1002", ')'));
    mt(x6);
    bt(x4);
  }
  function mt(x4, x5, x6) {
    var x8;
    var x9;
    if (undefined === x6) {
      x6 = true;
    }
    var xx = function (xc, xD) {
      if (undefined === xD) {
        xD = false;
      }
      var xG = '';
      var xw = xc;
      for (var xL = true; xw;) {
        if (xL) {
          xL = false;
        } else {
          xG += "\nCaused by: ";
        }
        xG += xw.message;
        if (xw.source) {
          xG += " for file: ".concat(xw.source);
        }
        if (undefined !== xw.code) {
          xG += " (".concat(xw.code, ')');
        }
        var xE = (xw.stack || '') + '';
        if (xE) {
          var xd = xE.indexOf("\n");
          if (-1 !== xd) {
            xG += xE.slice(xd);
          }
        }
        xw = xw.cause;
        if (xD) {
          xG = xG.replace(/https?:\/\/[^/]+([0-9A-Za-z/._-]+)\S*(:[0-9]+:[0-9]+)/g, "$1$2").replace(/https?:\/\/[^/]+/g, '');
        }
      }
      return xG;
    }(x4);
    ft.set(3, xx);
    var xu = function (xc) {
      var xa = xc.match(/(?:Caused by:\s*)([^\n]+)/);
      if (xa) {
        return xa[1];
      }
      var xC = xc.match(/^[^\n]+/);
      return xC ? xC[0] : '';
    }(xx);
    (x8 = {
      4: null === (x9 = x4.code) || undefined === x9 ? undefined : x9.toString(),
      5: xu
    })[2] = new Date().toLocaleString("en-US", {
      'timeZone': "UTC",
      'timeZoneName': "short"
    });
    ft.set(1, x8);
    var xy = x6 ? 2 : 1;
    ft.action(xy, x5, function () {
      ft.action(0, {}, function () {
        ct.set(0, true);
        ct.action(2);
      });
      var xc = ft.get(0);
      ct.set(0, false);
      var xD = ct.get(0, xc);
      ct.action(4, xD);
    });
  }
  function gt(x4) {
    ct.action(0, J(0), x4, [{
      'label': J(3),
      'onclick': function () {
        location.reload();
      }
    }]);
  }
  function bt(x4) {
    var x6 = x4.S;
    var x7 = x4.F;
    var x8 = x4.N;
    var x9 = x8.code;
    var xx = x8.message;
    var xu = x6.split('?')[0];
    var xy = ''.concat(x9 + '', "|load resource failed|src: ").concat(xu, "|reason: ").concat(xx);
    if (x7) {
      xy += "|retryCount: ".concat(x7);
    }
    gtag("event", "fault", {
      'event_category': "game_shell",
      'event_label': xy
    });
  }
  function yt(x4) {
    if ("undefined" == typeof shell) {
      var x6 = ''.concat(J(1), " (").concat("G1008", ')');
      var x7 = new Ze("Shell script error", {
        'code': "G1008",
        'source': x4.G || x4.S
      });
      gt(x6);
      mt(x7);
    } else {
      var x8 = function () {
        ct.action(2);
        var x9 = {
          initialLoader: ct,
          errorReport: ft,
          landscapeCover: ht
        };
        var xu = {
          SharedPath: Qe,
          GameDir: Xe,
          AssetTable: "ad82c4de44.a4bb3.json",
          ShellDir: "984721902a/",
          Plugins: "e02b9bf0d2,a346494745,589a728c8d,2fd142260e,2c6e37b73c,b85c56d865,c03a2652ad",
          Requirements: "minMemory=1024&minDiskSpace=1024&whiteList=chrome-59%2Cchrome%20webview-59%2Cfirefox-58%2Csafari-11%2Cedge-79&minOSVersion=iOS-11%2CAndroid-5%2CMacOS-10.10%2CWindows-7",
          LocalizedTitleKey: "G.Title",
          SupportedLanguages: "ar,bn,da,de,en,en-social,en-stkus,es,fi,hi,id,it,ko,nl,pt,pt-br,ru,sv,th,uk,zh",
          ThemeColor: "#AE5CE5",
          LobbyMode: false,
          SupportXSMaxRatio: 2,
          AspectRatio: '',
          Orientation: 1,
          Name: "Pharaoh Royals",
          Version: "1.1.1.2/7.1.1-rc.2/7.3.1-rc.2",
          Index: 1964781,
          Identifier: "com.pgsoft.slot.pharaohroyals",
          PluginDependencies: yc,
          EIF: 16777217,
          Ecma: et,
          Platform: tt,
          Blobs: je,
          BootTime: rt,
          uiControllers: x9
        };
        shell.start(dt, xu);
        st.removeEventListener("touchend", Oe, yn);
        st.removeEventListener("dblclick", Ke, yn);
        ["gesturestart", "gesturechange", "gestureend"].forEach(function (xy) {
          return st.removeEventListener(xy, Ke, yn);
        });
      };
      if (ft.get(1)) {
        ct.action(3);
        ft.action(5, J(20), x8);
      } else {
        x8();
      }
    }
  }
  var yX = {
    event_category: "engagement"
  };
  ut = function (x4) {
    mt(new Ze("Network connection slow", {
      'code': "N1003",
      'source': x4
    }), J(19), false);
  };
  (function (x4) {
    if (!Ae) {
      var x6 = G.ao;
      var x7 = x6 ? ue(x6) : window.location.host;
      Ae = function (x9) {
        var xu = x9;
        if (xu.split('.').length > 2) {
          xu = xu.substring(xu.indexOf('.') + 1);
        }
        return "https://api." + xu + '/';
      }(x7);
    }
    var x8 = ''.concat(Ae, "what-is-my-ip");
    !function () {
      for (var xx = 0; xx < arguments.length; xx++) {
        var xu = arguments[xx];
        Pe.push(xu);
      }
    }(x8);
    (function () {
      for (var xx = 0; xx < arguments.length; xx++) {
        var xu = arguments[xx];
        Ve.push(xu);
      }
    })(x8);
    Fe(x8, 1, function (x9, xx) {
      if (x9) {
        x4(x9);
      } else {
        var xy = xx.ip;
        x4(undefined, xy);
      }
    });
  })(function (x4, x5) {
    var x7;
    if (x4) {
      var x9 = x4.code;
      var xx = x4.message;
      var xu = ''.concat("G1018", "|get ip failed|reason: ").concat(xx, " (").concat(x9, ')');
      gtag("event", "fault", {
        'event_category': "game_shell",
        'event_label': xu
      });
    } else {
      (x7 = {})[1] = x5;
      ft.set(1, x7);
    }
  });
  //if (undefined !== window.isSecureContext ? window.isSecureContext : "https:" === window.location.protocol) {
    Fe({
      'S': Qe + "984721902a/" + "index.json",
      'T': 0x1,
      'R': function (x4) {
        var x6;
        var x8 = x4.A;
        x6 = (dt = x8).version;
        if ("string" != typeof x6 || false || -1 === function (xy, xc) {
          var xD = xy.split('-');
          var xa = xc.split('-');
          var xC = X(xD[0], xa[0]);
          if (0 !== xC) {
            return xC;
          }
          var xG = xD[1];
          var xw = xa[1];
          return xG && !xw ? -1 : !xG && xw ? 1 : xG || xw ? X(xG, xw) : 0;
        }(x6, "11.8.0-rc.1")) {
          var x9 = ''.concat(J(2), " (").concat("G1011", ')');
          var xx = new Ze("Unsupported shell version", {
            'code': "G1011",
            'source': x4.G || x4.S
          });
          gt(x9);
          return void mt(xx);
        }
        var xu = function () {
          ct.action(2);
          Fe({
            'S': Qe + "984721902a/" + dt.main,
            'T': 0x2,
            'R': yt,
            'P': pt,
            'D': vt
          });
        };
        if (ft.get(1)) {
          ct.action(3);
          ft.action(5, J(20), xu);
        } else {
          xu();
        }
      },
      'P': pt,
      'D': vt
    });
 // } else {
    //gtag("event", "insecure_context", yX);
    //ct.action(0, J(5), J(6));
 // }
}();