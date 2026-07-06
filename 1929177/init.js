!function () {
  'use strict';

  ;
  var t8 = {
    index: "b994a",
    config: "8654e"
  };
  var t9 = {
    index: "38a32",
    config: "07ac8"
  };
  var tF = {
    resources: t8,
    main: t9
  };
  var tX = {
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
    bundleVers: tF
  };
  window.DEBUG = false;
  window.PREVIEW = false;
  window.EDITOR = false;
  window.GtmId = "GTM-WV99ST2";
  window._CCSettings = tX;
  var tU = {
    e02b9bf0d2: ">=11.9.0-rc.1",
    a346494745: ">=10.9.0-rc.1",
    "589a728c8d": ">=7.9.0-rc.1",
    "2fd142260e": ">=9.9.0-rc.1",
    "2c6e37b73c": ">=6.9.0-rc.1",
    b85c56d865: ">=5.4.0-rc.1",
    c03a2652ad: ">=7.3.0-rc.1"
  };
  console.log("Game/Boot/Engine", "1.4.0.2/7.1.3/7.3.1-rc.2");
  var x = navigator.userAgent;
  var k = 0;
  function C(F4) {
    var F6 = F4 + '';
    var F7 = (F4.stack || '') + '';
    var F8 = F6;
    if (F7) {
      if (0 === F7.indexOf(F6)) {
        F8 = F7;
      } else {
        F8 += "\n" + F7;
      }
    }
    var F9 = this.onFormat || window.onGAReceiveError;
    if (F9) {
      try {
        F8 = F9(F8);
      } catch (FF) {
        _(FF + '');
      }
    }
    return F8.replace(/https?:\/\/[^/]+([0-9A-Za-z/._-]+)\S*(:[0-9]+:[0-9]+)/g, "$1$2").replace(/https?:\/\/[^/]+/g, '');
  }
  function _(F5, F6) {
    var F8 = {
      description: F5,
      fatal: !!F6
    };
    gtag("event", "exception", F8);
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
  var T = function (F4) {
    var F6 = Date.now();
    if (H !== F4 || F6 - M > 1000) {
      M = F6;
      H = F4;
      j = 0;
    } else {
      j++;
    }
    if (0 === j) {
      _(F4);
    } else {
      if (5 === j) {
        _(F4, 1);
        var F7 = this.onFrequent || window.onGAFrequentError;
        try {
          if (F7) {
            F7();
          }
        } catch (F8) {
          _(F8 + '');
        }
      } else if (j > 5) {
        M = F6;
      }
    }
  };
  function z(F5, F6, F7, F8, F9) {
    if (k > 3) {
      return false;
    }
    if (!F7 || !F8 || !F9) {
      return false;
    }
    var Ft = "Uncaught " + C.call(z, F9);
    T.call(z, Ft);
    return false;
  }
  z.report = function (F4, F5) {
    _("Uncaught " + C.call(this, F4), F5);
  };
  var R;
  var E;
  function N(F4) {
    if (!(k > 3)) {
      var F6 = F4.reason;
      if (null != F6) {
        var F7 = "Unhandled " + C.call(N, F6);
        T.call(N, F7);
      }
    }
  }
  N.report = function (F4, F5) {
    _("Unhandled " + C.call(this, F4), F5);
  };
  window.dataLayer = [];
  window.gtag = function () {
    dataLayer.push(arguments);
  };
  dataLayer.push({
    'event': "gtm.js",
    'gtm.start': Date.now(),
    'app_name': "Kraken Gold Rush",
    'app_version': "1.4.0.2/7.1.3/7.3.1-rc.2"
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
    return function (F5) {
      var F7 = Object.keys(F5);
      for (var F8 = 0; F8 < F7.length; F8++) {
        var F9 = F5[F7[F8]];
        try {
          Function(F9);
        } catch (FF) {
          return false;
        }
      }
      return true;
    }(A) && function (F5) {
      var F7 = true;
      for (var F8 = 0; F8 < F5.length; F8++) {
        var F9 = F5[F8];
        var FF = F9[0];
        if (undefined === FF) {
          F7 = false;
          break;
        }
        for (var FX = 1; FX < F9.length; FX++) {
          if (undefined === FF[F9[FX]]) {
            F7 = false;
            break;
          }
        }
        if (!F7) {
          break;
        }
      }
      return F7;
    }(K);
  }
  var tD = {
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
  var tf = {
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
  var ti = {
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
  var tE = {
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
  var tu = {
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
  var ta = {
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
    vi: "Cảnh báo: Kết nối không an toàn"
  };
  ta.zh = "警告：连接不安全";
  var tm = {
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
  var tW = {
    en: "Please <Color>take a screenshot or copy the details below</Color> and send it to the support team.",
    de: "Bitte <Color>machen Sie einen Screenshot oder kopieren Sie die untenstehenden Details</Color> und senden Sie diese an den Kundenservice.",
    es: "<Color>haz una captura de pantalla o copia los datos que se indican a continuación</Color> y envíalos al equipo de atención al cliente.",
    id: "Silakan <Color>ambil tangkapan layar atau salin detail di bawah ini</Color> dan kirimkan ke tim dukungan.",
    ja: "<Color>以下の情報をスクリーンショットまたはコピー</Color>して、サポートチームに送信してください。",
    ko: "<Color>아래 내용을 캡처 또는 복사</Color>하여 지원 팀으로 보내주세요.",
    "pt-br": "<Color>Faça uma captura de tela ou copie os detalhes abaixo</Color> e envie ao suporte técnico.",
    ru: "Пожалуйста, <Color>сделайте скриншот или скопируйте нижеуказанные данные</Color> и отправьте их в службу поддержки.",
    sv: "<Color>Ta en skärmdump av eller kopiera uppgifterna nedan</Color> och skicka dem till support-teamet.",
    th: "กรุณา <Color> ถ่ายภาพหน้าจอหรือคัดลอกรายละเอียดด้านล่าง</Color> และส่งไปยังทีมสนับสนุน"
  };
  tW.vi = "Vui lòng <Color>chụp ảnh màn hình hoặc sao chép thông tin chi tiết bên dưới</Color> và gửi đến đội ngũ hỗ trợ.";
  tW.zh = "请<Color>截图或复制以下详情</Color>，并发送给客服。";
  var tY = {
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
    vi: "<Color>Đã sao chép chi tiết!</Color> Vui lòng gửi đến đội ngũ hỗ trợ.",
    zh: "<Color>详情已复制！</Color>请发送给客服。"
  };
  var tx = {
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
  var tN = {
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
  var tz = {
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
  var tb = {
    'en': 'IP'
  };
  var tA = {
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
  var tq = {
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
  var tR = {
    'en': 'UA'
  };
  var tj = {
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
  var ty = {
    en: "Cancel",
    de: "Abbrechen",
    es: "Cancelar"
  };
  ty.id = "Batalkan";
  ty.ja = "キャンセル";
  ty.ko = '취소';
  ty["pt-br"] = "Cancelar";
  ty.ru = "Отмена";
  ty.sv = "Avbryt";
  ty.th = "ยกเลิก";
  ty.vi = "Hủy";
  ty.zh = '取消';
  var tC = {
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
  var tv = {
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
  var tl = {
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
  var tn = {
    en: "Please switch back to portrait mode<br/>to continue the game",
    de: "Bitte kehren Sie in den Portrait-Modus zurück<br/>um das Spiel fortzuführen",
    es: "Por favor, cambie al modo vertica<br/>para continuar con el juego",
    id: "Silakan kembali ke mode potret<br/>untuk melanjutkan permainan",
    ja: "縦向きモードに戻して<br/>ゲームを続けてください",
    ko: "다시 세로 모드로 전환하여<br/>게임을 계속하세요",
    "pt-br": "Volte para o modo retrato<br/>para continuar o jogo",
    ru: "Пожалуйста, вернитесь в вертикальный режим<br/>чтобы продолжить игру"
  };
  tn.sv = "Växla tillbaka till stående läge<br/>för att fortsätta spela";
  tn.th = "กรุณาเปลี่ยนกลับเป็นโหมดแนวตั้ง<br/>เพื่อเล่นเกมต่อ";
  tn.vi = "Vui lòng chuyển lại chế độ xem dọc<br/>để tiếp tục trò chơi";
  tn.zh = "请切换到竖屏模式<br/>继续游戏";
  var tI = {
    '0': tD,
    '1': tf,
    '2': ti,
    '3': tE,
    '4': tu,
    '5': ta,
    '6': tm,
    '7': tW,
    '8': tY,
    '9': tx,
    '10': tN,
    '11': tz,
    '12': tb,
    '13': tA,
    '14': tq,
    '15': tR,
    '16': tj,
    '17': ty,
    '18': tC,
    '19': tv,
    '20': tl,
    '21': tn
  };
  var W = G.language || G.lang || G.l || navigator.language;
  function J(F5) {
    var FF = tI[F5];
    if (!FF) {
      return ''.concat(F5);
    }
    if (FF[W]) {
      return FF[W];
    }
    var FX = W.split('-')[0];
    return FF[FX] ? FF[FX] : FF.en;
  }
  function Q(F4) {
    var F6 = parseInt(F4);
    return isNaN(F6) ? F4 : F6;
  }
  function X(F4, F5) {
    var F7 = F4.split('.');
    var F8 = F5.split('.');
    var F9 = Math.max(F7.length, F8.length);
    for (var FF = 0; FF < F9; FF++) {
      var FX = Q(F7[FF] || 0);
      var Ft = Q(F8[FF] || 0);
      if (FX < Ft) {
        return -1;
      }
      if (FX > Ft) {
        return 1;
      }
    }
    return 0;
  }
  function ee(F5, F6, F7) {
    if (undefined === F7) {
      F7 = 1;
    }
    var FF = 0 === F7 ? document.createElement(F6) : document.createElementNS("http://www.w3.org/2000/svg", F6);
    F5.appendChild(FF);
    return FF;
  }
  function te() {
    var F7 = [];
    for (var F8 = 0; F8 < arguments.length; F8++) {
      F7[F8] = arguments[F8];
    }
    var F9 = F7[0];
    for (var FF = 1; FF < F7.length; FF += 2) {
      F9.style[F7[FF]] = F7[FF + 1];
    }
    return F9;
  }
  function ne() {
    var F7 = [];
    for (var F8 = 0; F8 < arguments.length; F8++) {
      F7[F8] = arguments[F8];
    }
    var F9 = F7[0];
    for (var FF = 1; FF < F7.length; FF += 2) {
      F9.setAttribute(F7[FF], F7[FF + 1]);
    }
    return F9;
  }
  function ie(F4, F5, F6, F7, F8) {
    var FF;
    var FX = 0 === F8 ? "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"112\" height=\"112\"><path d=\"M90.6 9.8h9.8V0h-9.8Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#ff6e00;fill-opacity:1\"/><path d=\"M0 21.1h9.8v-9.8H0Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#6414e6;fill-opacity:1\"/><path d=\"M11.3 111.6h9.8v-9.8h-9.8Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#19bee6;fill-opacity:1\"/><path d=\"M68 89h9.7v-9.8H68Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#e619dc;fill-opacity:1\"/><path d=\"M79.2 9.8H89V0h-9.8ZM68 9.8h9.8V0H68Zm-11.3 0h9.8V0h-9.8Zm-11.3 0H55V0h-9.8ZM34 9.8h9.8V0H34Zm-11.4 0h9.8V0h-9.8Zm-11.3 0h9.8V0h-9.8Zm79.3 11.3h9.8v-9.8h-9.8Zm-11.4 0H89v-9.8h-9.8Zm-11.3 0h9.8v-9.8H68Zm-11.3 0h9.8v-9.8h-9.8Zm-11.3 0H55v-9.8h-9.8Zm-11.3 0h9.8v-9.8H34Zm-11.4 0h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8ZM102 32.4h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8Zm-11.4 0H89v-9.8h-9.8Zm-67.9 0h9.8v-9.8h-9.8ZM0 32.4h9.8v-9.8H0Zm101.9 11.3h9.8V34h-9.8Zm-11.3 0h9.8V34h-9.8Zm-79.3 0h9.8V34h-9.8ZM0 43.7h9.8V34H0Zm101.9 11.4h9.8v-9.9h-9.8Zm-11.3 0h9.8v-9.9h-9.8Zm-79.3 0h9.8v-9.9h-9.8ZM0 55h9.8v-9.8H0Zm101.9 11.3h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8Zm-11.4 0H89v-9.8h-9.8Zm-67.9 0h9.8v-9.8h-9.8ZM0 66.4h9.8v-9.8H0Zm90.6 11.3h9.8v-9.8h-9.8Zm-11.4 0H89v-9.8h-9.8Zm-11.3 0h9.8v-9.8H68Zm-11.3 0h9.8v-9.8h-9.8Zm-11.3 0H55v-9.8h-9.8Zm-11.3 0h9.8v-9.8H34Zm-11.4 0h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8ZM0 77.7h9.8v-9.8H0ZM56.6 89h9.8v-9.8h-9.8Zm-11.3 0H55v-9.8h-9.8ZM34 89h9.8v-9.8H34Zm-11.4 0h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8h-9.8ZM0 89h9.8v-9.8H0Zm11.3 11.3h9.8v-9.8h-9.8Zm-11.3 0h9.8v-9.8H0Zm0 11.3h9.8v-9.8H0Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#fff;fill-opacity:1\"/></svg>" : "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"113\" height=\"112\"><path d=\"M.3 32.4h9.8v-9.8H.3Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#e61973;fill-opacity:1\"/><path d=\"M22.8 9.8h9.7V0h-9.7Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#ffb919;fill-opacity:1\"/><path d=\"M11.6 100.3h9.7v-9.8h-9.7Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#1987e6;fill-opacity:1\"/><path d=\"M79 111.6h9.7v-9.8h-9.8Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#ff4b00;fill-opacity:1\"/><path d=\"M101.4 55h9.7v-9.7h-9.7Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#14e691;fill-opacity:1\"/><path d=\"M101.4 89h9.7v-9.8h-9.7Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#ff1928;fill-opacity:1\"/><path d=\"M67.7 9.8h9.7V0h-9.7Zm-11.2 0h9.7V0h-9.7Zm-11.3 0H55V0h-9.8ZM34 9.8h9.8V0H34Zm33.7 11.3h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm-11.3 0H55v-9.8h-9.8Zm-11.2 0h9.8v-9.8H34Zm56.2 0h9.7v-9.8h-9.7Zm-11.3 0h9.8v-9.8h-9.8Zm-56.1 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm78.6 11.3h9.7v-9.8h-9.7Zm-11.3 0h9.8v-9.8h-9.8Zm-56.1 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm0 11.3h9.7V34h-9.7Zm-11.3 0h9.8V34H.3Zm11.3 11.4h9.7v-9.9h-9.7Zm78.6 0h9.7v-9.9h-9.7Zm-11.3 0h9.8v-9.9h-9.8Zm-11.2 0h9.7v-9.9h-9.7Zm-11.2 0h9.7v-9.9h-9.7ZM.3 55h9.8v-9.9H.3ZM79 66.4h9.8v-9.8h-9.8Zm-11.2 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm-45 0h9.8v-9.8h-9.7Zm89.9 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm-89.9 0h9.8v-9.8H.3Zm101 11.3h9.8v-9.8h-9.7Zm-89.7 0h9.7v-9.8h-9.7Zm78.6 0h9.7v-9.8h-9.7Zm-89.9 0h9.8v-9.8H.3ZM90.2 89h9.7v-9.8h-9.7ZM.3 89h9.8v-9.8H.3ZM79 89h9.8v-9.8h-9.8Zm-56.1 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm78.6 11.3h9.7v-9.8h-9.7Zm-11.3 0h9.8v-9.8h-9.8Zm-11.2 0h9.7v-9.8h-9.7Zm-11.2 0h9.7v-9.8h-9.7Zm-11.3 0H55v-9.8h-9.8Zm-11.2 0h9.8v-9.8H34Zm-11.2 0h9.7v-9.8h-9.7Zm45 11.3h9.6v-9.8h-9.7Zm-11.3 0h9.7v-9.8h-9.7Zm-11.3 0H55v-9.8h-9.8Zm-11.2 0h9.8v-9.8H34Zm-11.2 0h9.7v-9.8h-9.7Zm0 0\" style=\"stroke:none;fill-rule:evenodd;fill:#fff;fill-opacity:1\"/></svg>";
    var Ft = ee(F4, 'g');
    ne(Ft, 'id', "digit-".concat(F7));
    te(Ft, "filter", "url(#motionFilter-".concat(F7, ')'));
    for (var FU = 0; FU < 5; FU++) {
      var FD = ee(Ft, 'g');
      te(FD, "transform", "translate(0px, ".concat(-FU * (F5 + 2 * F6), "px)"));
      FF = FX;
      FD.innerHTML = FF;
    }
    return Ft;
  }
  function ae(F4, F5) {
    var F7 = ee(F4, "filter");
    ne(F7, 'id', "motionFilter-".concat(F5), "width", "300%", 'x', "-100%");
    var F8 = ee(F7, "feGaussianBlur");
    ne(F7, "class", "blurValues", 'in', "SourceGraphic", "stdDeviation", "0 0");
    return F8;
  }
  function se(F4, F5) {
    var F7;
    var F8;
    var F9;
    var FF = 0;
    var FX = [];
    var Ft = undefined;
    var FU = undefined;
    te(F7 = ee(F4, "div", 0), "display", "flex", "flex-direction", "column", "align-items", "center", "justify-content", "center", "transform", "scale(0.625)");
    var FD = Date.now() + '';
    var Ff = ee(F7, "svg");
    var Fi = F9 = ee(Ff, "svg");
    ne(F9, "mask", "url(#mask-".concat(FD, ')'));
    var FE = ee(Ff, "defs");
    !function (Fm, FW) {
      var FY = ee(Fm, "linearGradient");
      ne(FY, 'id', "gradient-".concat(FW), 'x1', '0%', 'y1', '0%', 'x2', '0%', 'y2', "100%");
      (function () {
        var Fx = [];
        for (var FN = 0; FN < arguments.length; FN++) {
          Fx[FN] = arguments[FN];
        }
        for (var Fz = 0; Fz < Fx.length; Fz++) {
          var Fb = ee(FY, "stop");
          var FA = Fx[Fz];
          ne(Fb, "offset", FA[0], "stop-color", "white", "stop-opacity", FA[1]);
        }
      })([0, 0], [0.2, 1], [0.8, 1], [1, 0]);
    }(FE, FD);
    (function (Fm, FW) {
      var FY = ee(Fm, "mask");
      ne(FY, 'id', "mask-".concat(FW));
      ne(ee(FY, "rect"), 'x', 0, 'y', 0, "width", "100%", "height", "100%", "fill", "url(#gradient-".concat(FW, ')'));
    })(FE, FD);
    F8 = function (Fm, FW) {
      var FN;
      (FN = ee(Fm, "pre", 0)).textContent = FW;
      te(FN, "font", "20px Roboto, sans-serif", "color", "#ccc", "opacity", '0', "text-align", "center", "transition", "opacity 1.2s ease-in-out");
      return FN;
    }(F7, F5);
    requestAnimationFrame(function () {
      te(F8, "opacity", '1');
    });
    var Fu = ['1', '1'].map(function (Fm, FW) {
      var FY = ''.concat(FW, '-').concat(FD);
      return {
        'i': ie(Fi, 112, 20, FY, FW),
        't': ae(FE, FY),
        'o': +Fm,
        'l': 0x0,
        'h': {
          'x': 137 * FW + 12.5,
          'y': 0x14
        }
      };
    });
    function Fa() {
      if (2 === FF) {
        if (Ft) {
          Ft();
        }
        if (FU) {
          FU();
        }
        FF = 3;
      } else if (1 === FF) {
        FX.length = 0;
        Fu.forEach(function (FW, FY) {
          var FN;
          var Fz;
          var Fb;
          var FA;
          var FR;
          var Fj;
          var Fy;
          var FC;
          var Fv;
          var Fl;
          var Fn = 152 * FW.l;
          var FI = 152 * (75 + FW.o);
          FN = {
            'v': Fn,
            '_to': FI,
            'm': 0x4b0,
            'u': 200 * (Fu.length - 1 - FY) + 400,
            'p': function () {},
            'Z': function (FS) {
              FW.h.y = 20 + FS % 608;
              ne(FW.i, "transform", "translate(".concat(FW.h.x, ", ").concat(FW.h.y, ')'));
              var FJ = (Fn + FI) / 2;
              var Fo = (+Math.abs(Math.abs(Math.abs(FS - FJ) - FJ) - Fn) / 100).toFixed(1);
              ne(FW.t, "stdDeviation", "0 ".concat(Fo));
            },
            'g': function () {
              if (0 === FY) {
                Fa();
              }
            }
          };
          FA = FN._to;
          FR = FN.u;
          Fj = FN.p;
          Fy = FN.Z;
          FC = FN.g;
          Fv = Fb = FN.v;
          Fl = false;
          var Fs = function (FS) {
            if (!Fl) {
              if (!Fz) {
                Fz = FS;
                Fj(Fv);
              }
              var Fo;
              var FG = Math.min(Math.max(FS - Fz - FR, 0), 0x4b0) / 0x4b0;
              Fy(Fv = ((Fo = FG) <= 0.3 ? Fo * Fo : 1 + 1.25 * Math.pow(Fo - 1, 3) + 0.25 * Math.pow(Fo - 1, 2)) * (FA - Fb) + Fb);
              if (1 === FG) {
                Fl = true;
                FC(Fv);
              }
            }
          };
          FX.push(Fs);
        });
      }
    }
    (function (Fm, FW) {
      ne(Fm, "viewBox", "0 0 ".concat(FW, " ").concat(152));
      te(Fm, "overflow", "hidden", "height", ''.concat(152, 'px'));
    })(Ff, 137 * Fu.length);
    Fu.forEach(function (Fm) {
      ne(Fm.i, "transform", "translate(".concat(Fm.h.x, ", ").concat(Fm.h.y, ')'));
    });
    return {
      'H': function () {
        return F7;
      },
      'M': function () {
        return F8;
      },
      'k': function () {
        return 152;
      },
      'V': function () {
        return FF;
      },
      '_': function () {
        var FW;
        var FY;
        var Fx;
        if (!(1 === FF || 0 !== FF && 3 !== FF)) {
          FF = 1;
          Fa();
          FW = function (FN) {
            FX.forEach(function (Fz) {
              return Fz(FN);
            });
          };
          (Fx = function (FN) {
            FY = requestAnimationFrame(Fx);
            FW(FN);
          })(0);
          Ft = function () {
            cancelAnimationFrame(FY);
          };
        }
      },
      'Y': function (Fm) {
        if (1 === FF) {
          FF = 2;
          FU = Fm;
        }
      },
      'j': function () {
        var FW;
        if (0 !== FF) {
          FF = 0;
          if (F7) {
            if (!(null === (FW = F7.parentElement) || undefined === FW)) {
              FW.removeChild(F7);
            }
          }
          if (Ft) {
            Ft();
          }
        }
      }
    };
  }
  function le(F4) {
    var F6;
    var F7 = 0;
    var F8 = function () {
      if (F7 <= 20) {
        F6 = window.setTimeout(F8, 25 * Math.pow(F7, 2));
        F7++;
      } else {
        F6 = undefined;
      }
      F4();
    };
    return {
      'restart': function () {
        F7 = 0;
        if (undefined !== F6) {
          clearTimeout(F6);
          F6 = undefined;
        }
        F8();
      }
    };
  }
  function ue(F4) {
    var F6;
    !function (Ff) {
      Ff.kReplacer = "[a-zA-Z=]";
    }(F6 || (F6 = {}));
    var F7 = "object" == typeof window ? window : global;
    var F8 = F7.parseInt;
    var F9 = F7.isNaN;
    var FF = F7.String;
    var FX = F7.RegExp;
    var Ft = F7.Number;
    var FU = FX(F6.kReplacer, 'g');
    var FD = F8(null == F4 ? undefined : F4.substring(Ft("0x0"), Ft("0x2")), Ft("0xa"));
    return F9(FD) && (null == F4 ? undefined : F4.includes('.')) ? F4 : null == F4 ? undefined : F4.substring(Ft("0x2")).replace(FU, function (Ff) {
      if ('=' === Ff) {
        return '.';
      }
      var FE = Ff.charCodeAt(0);
      var Fu = FE >= Ft("0x61") ? Ft("0x61") : Ft("0x41");
      var Fa = (FE - Fu - FD + Ft("0x1a")) % Ft("0x1a") + Fu;
      return FF.fromCharCode(Fa);
    });
  }
  function de(F5, F6, F7) {
    var FF = 0 === F7 ? document.createElement(F6) : document.createElementNS("http://www.w3.org/2000/svg", F6);
    F5.appendChild(FF);
    return FF;
  }
  function fe(F4, F5) {
    F4.innerHTML = F5;
    return F4;
  }
  function he() {
    var F7 = [];
    for (var F8 = 0; F8 < arguments.length; F8++) {
      F7[F8] = arguments[F8];
    }
    var F9 = F7[0];
    for (var FF = 1; FF < F7.length; FF += 2) {
      F9.style[F7[FF]] = F7[FF + 1];
    }
    return F9;
  }
  function ve() {
    var F7 = [];
    for (var F8 = 0; F8 < arguments.length; F8++) {
      F7[F8] = arguments[F8];
    }
    var F9 = F7[0];
    for (var FF = 1; FF < F7.length; FF += 2) {
      F9.setAttribute(F7[FF], F7[FF + 1]);
    }
    return F9;
  }
  function me() {
    var F7;
    var F8 = [];
    for (var F9 = 0; F9 < arguments.length; F9++) {
      F8[F9] = arguments[F9];
    }
    (F7 = F8.shift().classList).add.apply(F7, F8);
  }
  function ge() {
    var F7;
    var F8 = [];
    for (var F9 = 0; F9 < arguments.length; F9++) {
      F8[F9] = arguments[F9];
    }
    (F7 = F8.shift().classList).remove.apply(F7, F8);
  }
  function be(F4) {
    var F6;
    var F7 = 0;
    var F8 = function () {
      if (F7 <= 20) {
        F6 = window.setTimeout(F8, 25 * Math.pow(F7, 2));
        F7++;
      } else {
        F6 = undefined;
      }
      F4();
    };
    return {
      'restart': function () {
        F7 = 0;
        if (undefined !== F6) {
          clearTimeout(F6);
          F6 = undefined;
        }
        F8();
      }
    };
  }
  function ye() {
    return /mobile|android|iphone|ipad/i.test(window.navigator.userAgent);
  }
  function we(F4, F5, F6) {
    var F7 = {
      'RvJql': function (Ft, FU) {
        return Ft === FU;
      },
      'rQABq': "vGDaG",
      'PAFzL': "OTcTT",
      'LpvhR': "resize",
      'ODoSv': function (Ft) {
        return Ft();
      },
      'nXfWl': "orientationchange",
      'KpXKQ': function (Ft, FU) {
        return Ft !== FU;
      },
      'ubNCn': "PJeCN",
      'XlKiC': function (Ft, FU) {
        return Ft(FU);
      },
      'EZzdF': "KOPPl",
      'WLVDn': function (Ft) {
        return Ft();
      },
      'LLfEu': function (Ft) {
        return Ft();
      },
      'joBNP': function (Ft) {
        return Ft();
      }
    };
    F7.LLfEu(F6);
    var F8 = F7.XlKiC(be, F6);
    var F9 = function () {
      if (F7.RvJql(F7.rQABq, F7.PAFzL)) {
        F7 = F8.parse(F9);
      } else {
        F8.restart();
      }
    };
    if (F4) {
      window.addEventListener(F7.LpvhR, F9);
    }
    var FF = F7.XlKiC(be, F6);
    var FX = function () {
      if (F7.KpXKQ(F7.ubNCn, F7.ubNCn)) {
        F9.removeEventListener(F7.LpvhR, FF);
        if (F7.ODoSv(FX)) {
          Ft.removeEventListener(F7.nXfWl, FU);
        }
      } else {
        FF.restart();
      }
    };
    if (F7.joBNP(ye) && F5) {
      window.addEventListener(F7.nXfWl, FX);
    }
    return function () {
      if (F7.KpXKQ(F7.EZzdF, F7.EZzdF)) {
        F7.XlKiC(cancelAnimationFrame, F5);
      } else {
        if (F4) {
          window.removeEventListener(F7.LpvhR, F9);
        }
        if (F7.WLVDn(ye) && F5) {
          window.removeEventListener(F7.nXfWl, FX);
        }
      }
    };
  }
  var xe = function () {
    xe = Object.assign || function (F5) {
      var F7;
      var F8 = 1;
      for (var F9 = arguments.length; F8 < F9; F8++) {
        for (var FF in F7 = arguments[F8]) if (Object.prototype.hasOwnProperty.call(F7, FF)) {
          F5[FF] = F7[FF];
        }
      }
      return F5;
    };
    return xe.apply(this, arguments);
  };
  function ke(F4, F5, F6) {
    var F8;
    var F9;
    var FF;
    var FX;
    var Ft;
    var FU;
    var FD = "#fff";
    var Ff = false;
    var Fi = F6 || {};
    var Fu = [];
    var Fa = undefined;
    var Fm = 0;
    var FW = false;
    var FY = false;
    function Fx() {
      ve(FF = de(F4, "div", 0), "class", "eru");
      he(FF, "width", ''.concat(360, 'px'), "height", ''.concat(640, 'px'));
    }
    function FN(Fj, Fy, FC) {
      if (undefined === FC) {
        FC = 1;
      }
      var Fl = RegExp("<Color>", 'g');
      var Fn = RegExp("</Color>", 'g');
      return Fj.replace(Fl, "<span style='color:".concat(Fy, "; opacity:").concat(FC, ";'>")).replace(Fn, "</span>");
    }
    function Fz(Fj) {
      Object.keys(Fj).forEach(function (FC) {
        Fi[FC] = Fj[FC];
      });
    }
    function Fb(Fj) {
      if (F8) {
        ge(F8, "er-dlg-show");
        me(F8, "er-dlg-hide");
        Ff = false;
        var FC = function () {
          F8.removeEventListener("animationend", FC);
          F8.parentNode.removeChild(F8);
          F8 = undefined;
          if (Fj) {
            Fj();
          }
        };
        F8.addEventListener("animationend", FC);
        ge(F9, "er-info-show");
        me(F9, "er-info-hide");
      } else if (Fj) {
        Fj();
      }
    }
    function FA(Fj) {
      if (FX) {
        FY = false;
        ge(FX, "er-pop-show");
        me(FX, "er-pop-hide");
        var FC = function () {
          FX.removeEventListener("animationend", FC);
          FX.parentNode.removeChild(FX);
          FX = undefined;
          if (Fj) {
            Fj();
          }
        };
        FX.addEventListener("animationend", FC);
      } else {
        FY = false;
        if (Fj) {
          Fj();
        }
      }
    }
    function Fq(Fj) {
      if (Ft) {
        ge(Ft, "er-toast-in");
        me(Ft, "er-toast-out");
        he(FU, "opacity", '0');
        var FC = function () {
          Ft.removeEventListener("animationend", FC);
          Ft.parentNode.removeChild(Ft);
          Ft = undefined;
          FW = false;
          if (Fj) {
            Fj();
          }
        };
        Ft.addEventListener("animationend", FC);
      } else {
        FW = false;
        if (Fj) {
          Fj();
        }
      }
    }
    function FR(Fj) {
      !function () {
        var Fv = [];
        for (var Fl = 0; Fl < arguments.length; Fl++) {
          Fv[Fl] = arguments[Fl];
        }
        return function (Fn) {
          if (0 !== Fv.length) {
            var FS = Fv.length;
            var Fd = false;
            Fv.forEach(function (FJ) {
              var FG = false;
              FJ(function () {
                if (!FG) {
                  FG = true;
                  if (!Fd) {
                    if (0 == (FS -= 1)) {
                      Fd = true;
                      if (Fn) {
                        Fn();
                      }
                    }
                  }
                }
              });
            });
          } else if (Fn) {
            Fn();
          }
        };
      }(Fb, FA, Fq)(function () {
        if (FF && FF.parentNode) {
          FF.parentNode.removeChild(FF);
        }
        FF = undefined;
        FW = false;
        FY = false;
        Ff = false;
        Fu = [];
        if (Fj) {
          Fj();
        }
      });
    }
    return {
      't': function (Fj) {
        Object.keys(Fj).forEach(function (FC) {
          F5[FC] = Fj[FC];
        });
      },
      'o': function (Fj) {
        Fz(Fj);
      },
      'i': function (Fj, Fy) {
        !function (Fv, Fl) {
          var FI;
          var Fs;
          if (!FF) {
            Fx();
          }
          var FS = F5[0];
          var Fd = F5[2];
          var FJ = F5[1];
          var Fo = F5[3];
          var FG = F5[4];
          if (!F8) {
            ve(F8 = de(FF, "div", 0), "class", "er-dlg");
            var FV = de(F8, "div", 0);
            ve(FV, "class", "er-dlg-hdr");
            var Fw = de(FV, "div", 0);
            ve(Fw, "class", "er-dlg-hdr-ctn");
            var Fp = de(FV, "div", 0);
            ve(Fp, "class", "er-dlg-hdr-ctn");
            var FP = de(Fw, "div", 0);
            ve(FP, "class", "er-dlg-hdr-txt");
            FP.innerHTML = FN(FS || '', FD);
            var Fh = de(Fp, "div", 0);
            ve(Fh, "class", "er-dlg-hdr-txt");
            ve(F9 = de(F8, "div", 0), "class", "er-dlg-info");
            Fz(Fv);
            (FI = {})[F5[6]] = Fi[0];
            FI[F5[10]] = Fi[4];
            FI[F5[8]] = ''.concat(Fi[2], " (").concat(Math.floor((Date.now() - Fm) / 1000), 's)');
            FI[F5[9]] = Fi[3];
            FI[F5[11]] = Fi[5];
            var FZ = FI;
            if (Fi[1]) {
              (Fs = {})[F5[7]] = Fi[1];
              FZ = xe(Fs, FI);
            }
            if (FZ) {
              Object.keys(FZ).forEach(function (Fr, FQ) {
                if (FZ[Fr]) {
                  var X1 = FQ < Object.keys(FZ || {}).length - 1;
                  var X2 = de(F9, "div", 0);
                  ve(X2, "class", "er-dlg-row");
                  var X3 = de(X2, "div", 0);
                  ve(X3, "class", "er-lbl-left");
                  X3.textContent = ''.concat(Fr, ": ");
                  var X4 = de(X2, "div", 0);
                  ve(X4, "class", "er-dlg-msg");
                  X4.textContent = FZ[Fr];
                  if (!X1) {
                    he(X2, "display", "block");
                    he(X4, "text-align", "left", "word-break", "break-all");
                  }
                  X2.appendChild(X3);
                  X2.appendChild(X4);
                  F9.appendChild(X2);
                  if (X1) {
                    ve(de(F9, "div", 0), "class", "er-row-sep");
                  }
                }
              });
            }
            var FL = de(F8, "div", 0);
            ve(FL, "class", "er-btn-ctn");
            var FM = de(FL, "div", 0);
            ve(FM, "class", "er-btn er-copy-btn");
            var FO = de(FM, "div", 0);
            ve(FO, "class", "er-btn-text er-copy-text");
            FO.textContent = Fo;
            FL.appendChild(FM);
            var FT = de(FL, "div", 0);
            ve(FT, "class", "er-btn er-copy-btn");
            var Fg = de(FT, "div", 0);
            ve(Fg, "class", "er-btn-text er-copy-text");
            Fg.textContent = FG;
            FT.onclick = function () {
              if (FW) {
                FR(function () {
                  if (Fl) {
                    Fl();
                  }
                  var Fk = Fa;
                  Fa = undefined;
                  if (Fk) {
                    Fk();
                  }
                });
              } else {
                Fb();
                if (Fl) {
                  Fl();
                }
              }
            };
            var FH = xe({}, FZ);
            var FB = '';
            if (FH) {
              Object.keys(FH).forEach(function (Fr, FQ) {
                if (FQ >= Object.keys(FZ || {}).length - 1) {
                  var Fc = '';
                  Fu.forEach(function (X0, X1) {
                    Fc += ''.concat(X1 + 1, ") ").concat(X0, "\n");
                  });
                  FB += ''.concat(Fr, ": \n").concat(Fc);
                } else {
                  FB += ''.concat(Fr, ": ").concat(FH[Fr], "\n");
                }
              });
            }
            FM.onclick = function () {
              var FQ;
              var Fk;
              var Fc;
              FQ = FB;
              Fk = function (X0) {
                Fh.innerHTML = FN(X0 ? FJ || '' : Fd || '', FD);
                Array.from(FV.children).forEach(function (X2) {
                  me(X2, "er-chg-hdr");
                });
              };
              Fc = function () {
                var X0 = de(document.body, "textarea", 0);
                he(X0, "color", "rgb(0,0,0,0)", "border", "none", "backgound", "transparent", "outline", "none", "overflow", "hidden", "margin", "0px", "padding", "0px", "position", "absolute", "z-index", '-1');
                X0.value = FQ;
                X0.focus();
                X0.select();
                X0.setSelectionRange(0, X0.value.length);
                var X1 = document.execCommand("Copy");
                document.body.removeChild(X0);
                if (Fk) {
                  Fk(X1 ? undefined : Error("Failed to copy"));
                }
              };
              if (navigator.clipboard) {
                navigator.clipboard.writeText(FQ).then(function () {
                  if (Fk) {
                    Fk();
                  }
                })["catch"](function () {
                  Fc();
                });
              } else {
                Fc();
              }
            };
            ge(F8, "er-dlg-hide");
            me(F8, "er-dlg-show");
            Ff = true;
            if (!Fm) {
              Fm = Date.now();
            }
            he(F9, "transform", "translateY(70px)");
            ge(F9, "er-info-hide");
            me(F9, "er-info-show");
          }
        }(Fj, Fy);
      },
      'u': function (Fj, Fy, FC) {
        !function (Fl, Fn, FI) {
          var FS = F5[5];
          var Fd = function () {
            ve(FX = de(FF, "div", 0), "class", "er-pop er-pop-show");
            if (Fl) {
              var Fo = de(FX, "div", 0);
              ve(Fo, "class", "er-ico-info");
              fe(Fo, "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"14\" height=\"14\"><path fill=\"#9D9DA3\" fill-rule=\"nonzero\" stroke=\"#9D9DA3\" stroke-width=\".2\" d=\"m7 10 .3-.1.1-.3-.1-.3-.3-.1h-.3l-.1.4a.4.4 0 0 0 .4.4m0-2.2c.2 0 .3-.2.3-.4V4.1a.3.3 0 1 0-.6 0v3.3c0 .2.1.4.3.4ZM7 13a5.9 5.9 0 0 1-4.2-1.8 6 6 0 0 1-1.3-6.5 6 6 0 0 1 3.2-3.2 5.8 5.8 0 0 1 6.6 1.3 6 6 0 0 1 1.2 6.5A6 6 0 0 1 7 13m3.8-2.2c1-1 1.5-2.3 1.5-3.8s-.5-2.8-1.5-3.8S8.5 1.7 7 1.7s-2.8.5-3.8 1.5S1.7 5.5 1.7 7s.5 2.7 1.5 3.8c1 1 2.3 1.5 3.8 1.5s2.8-.5 3.8-1.5Z\"/></svg>");
              var FG = de(FX, "div", 0);
              ve(FG, "class", "er-pop-msg");
              FG.textContent = Fl;
            }
            var FV = de(FX, "div", 0);
            ve(FV, "class", "er-pop-btn er-btn");
            var Fw = de(FV, "div", 0);
            ve(Fw, "class", "er-btn-text er-pop-btn-text");
            Fw.textContent = FS;
            Fm = Date.now();
            FV.onclick = FI;
            FY = true;
          };
          if (FX && Fn) {
            FA(function () {
              Fd();
            });
          } else if (!FX) {
            Fx();
            Fd();
          }
        }(Fj, Fy, FC);
      },
      'l': function (Fj) {
        FR(Fj);
      },
      'p': function (Fj) {
        FA(Fj);
      },
      'v': function (Fj, Fy) {
        if (!Ft) {
          if (Ff) {
            if (Fy) {
              Fa = Fy;
            }
            if (F8) {
              var Fv = de(FF, "div", 0);
              ve(Fv, "class", "er-toast-ctn");
              ve(Ft = de(Fv, "div", 0), "class", "er-toast-bg");
              var Fl = de(Ft, "div", 0);
              Fl.setAttribute("class", "er-toast-txt");
              Fl.innerHTML = FN(Fj, FD);
              me(Ft, "er-toast-in");
              ve(FU = de(Fv, "div", 0), "class", "er-dlg-close");
              fe(FU, "<span aria-hidden=\"true\">&times;</span>");
              FU.onclick = function () {
                FR(function () {
                  var Fs = Fa;
                  Fa = undefined;
                  if (Fs) {
                    Fs();
                  }
                });
              };
              setTimeout(function () {
                he(FU, "opacity", '1');
              }, 100);
              FW = true;
            } else {
              FR(function () {
                var FI = Fa;
                Fa = undefined;
                if (FI) {
                  FI();
                }
              });
            }
          } else if (Fy) {
            Fy();
          }
        }
      },
      'm': function (Fj) {
        FD = Fj;
      },
      'h': function (Fj) {
        if (!FF) {
          Fx();
        }
        Fj.appendChild(FF);
      },
      'k': function (Fj) {
        !function (FC) {
          if (!Fu.includes(FC)) {
            Fu.push(FC);
          }
        }(Fj);
      },
      'j': function () {
        return F8 ? F8.offsetHeight : 0;
      },
      'Y': function () {
        return Ff;
      },
      '_': function () {
        return FY;
      }
    };
  }
  if ("function" == typeof SuppressedError) {
    SuppressedError;
  }
  var Ze = function (F4, F5) {
    var F7 = Error(F4, F5);
    this.name = "ExtError";
    this.message = F7.message;
    this.stack = (null == F5 ? undefined : F5.C) ? F7.stack : undefined;
    this.cause = F7.cause || (null == F5 ? undefined : F5.cause);
    this.code = null == F5 ? undefined : F5.code;
    this.source = null == F5 ? undefined : F5.source;
  };
  !function (F4, F5) {
    Object.setPrototypeOf(F4, F5);
    F4.prototype = Object.create(F5.prototype, {
      'constructor': {
        'value': F4,
        'writable': true,
        'configurable': true
      }
    });
  }(Ze, Error);
  var Ce;
  var _e = function (F4, F5, F6) {
    var F8 = new XMLHttpRequest();
    try {
      F8.open("GET", F4, true);
    } catch (FF) {
      var F9 = new Ze("Request error", {
        'code': "N1000",
        'source': F4,
        'cause': FF
      });
      return void F6(F9);
    }
    try {
      if ("timeout" in F8) {
        F8.timeout = 60000;
      }
    } catch (FX) {}
    switch (F5) {
      case 1:
        F8.responseType = "json";
        break;
      case 3:
      case 2:
      case 4:
        F8.responseType = "blob";
    }
    F8.onload = function () {
      var FU;
      var FD;
      var Ff;
      if (F8.status >= 200 && F8.status < 300 || 0 === F8.status && F8.response) {
        FU = function (Fi, FE, Fu) {
          var Fm;
          if (1 === Fu && "string" == typeof FE) {
            try {
              FE = JSON.parse(FE);
            } catch (FW) {
              Fm = new Ze("Request error", {
                'code': "N1005",
                'cause': FW,
                'source': Fi
              });
              FE = undefined;
            }
          }
          if (null == Fm && null == FE) {
            Fm = new Ze("Request error", {
              'code': "N1005",
              'source': Fi
            });
          }
          return [Fm, FE];
        }(F4, F8.response, F5);
        FD = FU[0];
        Ff = FU[1];
      } else {
        FD = new Ze("Request error", {
          'code': 'N0'.concat(F8.status),
          'source': F4
        });
      }
      F6(FD, Ff);
    };
    F8.onerror = function () {
      var Ft = new Ze("Request error", {
        'code': "N1000",
        'source': F4
      });
      F6(Ft);
    };
    F8.ontimeout = function () {
      var Ft = new Ze("Request error", {
        'code': "N1001",
        'source': F4
      });
      F6(Ft);
    };
    F8.send();
  };
  function Se(F4) {
    _e = F4;
  }
  var je = Object.create(null);
  var He = _e;
  Se(function (F4, F5, F6) {
    if (2 !== F5) {
      return He(F4, F5, F6);
    }
    He(F4, 4, function (F8, F9) {
      if (F8) {
        return F6(F8);
      }
      var FX;
      var FU = URL.createObjectURL(F9);
      function Ff(Fi) {
        if (Fi.filename === FU) {
          FX = new Ze("Script error", {
            'code': "G1015",
            'cause': Fi.error,
            'source': F4
          });
          delete je[FU];
        }
      }
      window.addEventListener("error", Ff);
      je[FU] = F4;
      var FD = document.createElement("script");
      FD.src = FU;
      FD.defer = true;
      FD.onload = function () {
        window.removeEventListener("error", Ff);
        document.head.removeChild(FD);
        URL.revokeObjectURL(FU);
        F6(FX, F9);
      };
      document.head.appendChild(FD);
    });
  });
  var Me;
  var Te;
  var Pe = [];
  var Re = !!G.__sv;
  var Ee = false;
  if (Re) {
    Te = function (F4) {
      return function (F6) {
        for (var F8 = 0; F8 < Pe.length; F8++) {
          var F9 = Pe[F8];
          if ("string" == typeof F9) {
            if (F6 === F9) {
              return true;
            }
          } else {
            if (F9.test(F6)) {
              return true;
            }
          }
        }
        return false;
      }(F4) ? Promise.resolve(F4) : Ee ? window.sign.getSignedUrl(F4) : Promise.resolve(Me || (Me = new Promise(function (F6, F7) {
        var F9 = G.__sv.substring(2, 4) + ".js";
        var FF = location.origin + "/loader/" + F9;
        _e(FF, 2, function (FX) {
          if (FX) {
            if ("G1015" !== FX.code) {
              Me = undefined;
            }
            FX = new Ze("URL sign error", {
              'code': "G1017",
              'cause': FX,
              'source': FF
            });
          } else if ("object" != typeof window.sign) {
            FX = new Ze("URL sign error", {
              'code': "G1016",
              'source': FF
            });
          }
          if (FX) {
            return F7(FX);
          }
          try {
            window.sign.setQuery(G.__sv);
            Ee = true;
            Me = undefined;
            F6();
          } catch (Ff) {
            var FU = new Ze(Ff.message);
            var FD = new Ze("URL sign error", {
              'code': "G1019",
              'source': FF,
              'cause': FU
            });
            F7(FD);
          }
        });
      }), Me)).then(function () {
        return window.sign.getSignedUrl(F4);
      });
    };
    Ce = Te;
  }
  var Ne = _e;
  var Ve = [];
  Se(function (F4, F5, F6) {
    if (function (F9) {
      for (var FX = 0; FX < Ve.length; FX++) {
        var FU = Ve[FX];
        if ("string" == typeof FU) {
          if (F9 === FU) {
            return true;
          }
        } else {
          if (FU.test(F9)) {
            return true;
          }
        }
      }
      return false;
    }(F4)) {
      Ne(F4, F5, F6);
    } else {
      var F8 = setTimeout(function (F9) {
        return function () {
          if (ut) {
            ut(F9);
          }
        };
      }(F4), 5000);
      Ne(F4, F5, function (F9, FF) {
        clearTimeout(F8);
        if (F6) {
          F6(F9, FF);
        }
      });
    }
  });
  var Ae;
  function Fe() {
    Ie("string" == typeof arguments[0] ? function (F5) {
      var F6 = F5[2];
      var F7 = F5[3];
      var F8 = F5[4];
      return {
        'S': F5[0],
        'T': F5[1],
        'P': F9,
        'R': F9,
        'D': F8 && function () {
          F8(this.N);
        }
      };
      function F9() {
        var FX = this.N;
        var Ft = this.A;
        if (null != FX) {
          F6(FX);
        } else if (undefined === F7) {
          F6(undefined, Ft);
        } else {
          F7(Ft);
        }
      }
    }(arguments) : function (F5) {
      var F6 = F5.P;
      var F7 = F5.R;
      var F8 = F5.D;
      var F9 = {
        'S': F5.S,
        'T': F5.T
      };
      F9.R = F7.bind(null, F9);
      F9.P = F6.bind(null, F9);
      if (F8) {
        F9.D = F8.bind(null, F9);
      }
      return F9;
    }(arguments[0]));
  }
  function Ie(F4) {
    if (Ce) {
      Ce(F4.S).then(function (F6) {
        F4.G = F6;
        qe(F4);
      }, function (F6) {
        !function (F7, F8) {
          F7.F = false;
          F7.N = new Ze("Request error", {
            'code': "N1004",
            'source': F7.S,
            'cause': F8
          });
          Le(F7);
        }(F4, F6);
      });
    } else {
      qe(F4);
    }
  }
  function qe(F4) {
    _e(F4.G || F4.S, F4.T, function (F6, F7) {
      if (F6) {
        F4.N = F6;
      }
      F4.A = F7;
      Le(F4);
    });
  }
  function Le(F4) {
    if (null != F4.N) {
      var F6 = undefined === F4.F ? 0 : F4.F;
      if (false !== F6 && ("N1000" === F4.N.code || "N1001" === F4.N.code) && F6 < 5) {
        F4.F = ++F6;
        if (F4.D) {
          F4.D();
        }
        F4.N = undefined;
        F4.G = undefined;
        setTimeout(Ie, 1000 * (1 << F6), F4);
      } else if (F4.P) {
        F4.P();
      }
    } else if (F4.R) {
      F4.R();
    }
  }
  var Be = 0;
  function Ke(F4) {
    F4.preventDefault();
  }
  function Oe(F5) {
    var F8 = Date.now();
    if (F5 && F8 - Be < 500) {
      F5.preventDefault();
    }
    Be = F8;
  }
  var ts = {
    passive: false
  };
  var Ue;
  var We;
  var Qe = `/${1929177}` + "/shared/";
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
  var ct = function (F4, F5, F6) {
    var F8 = ee(F4, "div", 0);
    ne(F8, "class", "initial-loader");
    var F9 = ee(F8, "div", 0);
    ne(F9, "class", "il-wrapper");
    te(F9, "transform-origin", "top left");
    var FF;
    var FX;
    var Ft;
    var FU = ee(F9, "div", 0);
    te(FU, "width", ''.concat(360, 'px'), "height", ''.concat(640, 'px'), "display", "flex", "flex-direction", "column", "align-items", "center", "justify-content", "center");
    var FD = true;
    var Fi = function (Fm, FW) {
      var Fx = function () {
        var Fq = window.innerWidth;
        var FR = window.innerHeight;
        var Fj = Fq / FR > 0.5625 ? 1920 / FR : 1080 / Fq;
        var Fy = FW / Fj;
        var FC = 0;
        var Fv = 0;
        if (Fq / FR > 0.5625) {
          FC = 0;
          Fv = (Fq - 360 * Fy) / 2;
        } else {
          Fv = 0;
          FC = (FR - 640 * Fy) / 2;
        }
        te(Fm, "transform", "scale(".concat(Fy.toFixed(4), ')'), "top", ''.concat(FC, 'px'), "left", ''.concat(Fv, 'px'));
      };
      Fx();
      var FN = le(Fx);
      var Fz = function () {
        FN.restart();
      };
      window.addEventListener("resize", Fz);
      var Fb = le(Fx);
      var FA = function () {
        Fb.restart();
      };
      if (/mobile|android|iphone|ipad/i.test(window.navigator.userAgent)) {
        window.addEventListener("orientationchange", FA);
      }
      return function () {
        window.removeEventListener("resize", Fz);
        if (/mobile|android|iphone|ipad/i.test(window.navigator.userAgent)) {
          window.removeEventListener("orientationchange", FA);
        }
      };
    }(F9, 3);
    var FE = ee(document.head, "style", 0);
    FE.textContent = ".initial-loader{background-color:#000;height:100%;margin:auto;position:fixed;touch-action:none;transition:opacity .35s ease-in;width:100%}.initial-loader,.initial-loader .il-wrapper{align-items:center;display:flex;flex-direction:column;justify-content:center}.initial-loader .il-wrapper{position:absolute}.initial-loader .il-circle-loading{align-items:center;display:flex;height:10px;justify-content:space-between;width:40px}.initial-loader .il-circle{animation-direction:alternate;animation-duration:.25s;animation-iteration-count:infinite;animation-name:il-circle-bounce;animation-timing-function:ease-out;background-color:#30a2d0;border-radius:50%;height:10px;position:relative;width:10px}.initial-loader .il-circle:first-of-type{animation-delay:0s}.initial-loader .il-circle:nth-of-type(2){animation-delay:-75ms}.initial-loader .il-circle:nth-of-type(3){animation-delay:-.15s}.initial-loader .il-err-container{align-items:center;display:flex;flex-direction:column;font-family:PingFangSC-Regular;position:absolute;width:100%}.initial-loader .il-err-title{color:#fff;font-size:16px;padding:6px 0;text-align:center;width:280px}.initial-loader .il-err-desc{color:#98989e;font-size:11px;line-height:14px;text-align:center;width:280px}.initial-loader .il-btn-container{align-items:center;color:#fff;display:flex;justify-content:center;padding-top:42px}.initial-loader .il-btn{align-items:center;border:1px solid #7f7f7f;border-radius:4px;cursor:pointer;display:flex;font-family:PingFangSC-Semibold;font-size:12px;justify-content:center;margin:0 4px;min-height:16px;min-width:80px;padding:10px 15px;text-align:center;user-select:none}.initial-loader .il-btn:active{opacity:.6}@keyframes il-circle-bounce{0%{bottom:0}90%,to{bottom:15px}}";
    if (0 === F5) {
      ne(FX = ee(FU, "div", 0), "class", "il-circle-loading ");
      for (var Fu = 0; Fu < 3; Fu++) {
        ne(ee(FX, "div", 0), "class", "il-circle");
      }
    } else if (1 === F5) {
      (FF = se(FU, F6))._();
    }
    function Fa(Fm, FW) {
      if (undefined === FW) {
        FW = -6;
      }
      var FY = 320 + 0.4375 * FF.k() / 2 - (640 - Fm) + FW;
      return FY > 0 ? FY : 0;
    }
    return {
      'get': function (Fm) {
        var FY = [];
        for (var Fx = 1; Fx < arguments.length; Fx++) {
          FY[Fx - 1] = arguments[Fx];
        }
        if (0 === Fm) {
          return Fa(FY[0], FY[1]);
        }
      },
      'set': function (Fm, FW) {
        if (0 === Fm) {
          FD = FW;
        }
      },
      'action': function (Fm) {
        var FY = [];
        for (var Fx = 1; Fx < arguments.length; Fx++) {
          FY[Fx - 1] = arguments[Fx];
        }
        switch (Fm) {
          case 0:
            !function (FN, Fz, Fb) {
              if (undefined === Fb) {
                Fb = [];
              }
              if (!Ft) {
                ne(Ft = ee(FU, "div", 0), "class", "il-err-container");
                var Fq = ee(Ft, "div", 0);
                ne(Fq, "class", "il-err-title");
                Fq.textContent = FN;
                var FR = ee(Ft, "div", 0);
                ne(FR, "class", "il-err-desc");
                FR.textContent = Fz;
                if (Fb.length > 2) {
                  Fb.length = 2;
                }
                if (Fb.length > 0) {
                  var Fj = ee(Ft, "div", 0);
                  ne(Fj, "class", "il-btn-container");
                  for (var Fy = 0; Fy < Fb.length; Fy++) {
                    var FC = ee(Fj, "div", 0);
                    ne(FC, "class", "il-btn");
                    if (Fb.length > 1) {
                      te(FC, "flex", '1');
                    }
                    FC.textContent = Fb[Fy].label;
                    var Fv = Fb[Fy].onclick;
                    if (Fv) {
                      FC.onclick = Fv;
                    }
                  }
                }
                if (0 === F5) {
                  if (!(null == FX)) {
                    FX.remove();
                  }
                } else {
                  if (1 === F5) {
                    var Fl = function () {
                      var FI = FF.M();
                      var Fs = FF.H();
                      var FS = -1 * Fa(640 - (320 - Ft.offsetHeight / 2));
                      te(FI, "transition", "opacity 0.28s ease-in");
                      te(Fs, "transition", "transform 0.5s ease-in-out");
                      te(Ft, "transition", "opacity 0s linear 0.28s, transform 0.5s ease-in-out");
                      requestAnimationFrame(function () {
                        te(Ft, "opacity", '1', "transform", "translateY(0px)");
                        te(FI, "opacity", '0');
                        if (FD) {
                          te(Fs, "transform", "translateY(".concat(FS, "px) scale(").concat(0.4375, ')'));
                        }
                      });
                    };
                    requestAnimationFrame(function () {
                      te(Ft, "opacity", '0', "transform", "translateY(".concat(Ft.offsetHeight, "px)"));
                      FF.Y(Fl);
                    });
                  }
                }
              }
            }(FY[0], FY[1], FY[2]);
            break;
          case 1:
            !function (FN) {
              te(F8, "opacity", '0');
              setTimeout(function () {
                var FA;
                var Fq;
                var FR;
                if (1 === F5 && FF) {
                  FF.j();
                }
                Fi();
                if (!(null === (FA = FE.parentNode) || undefined === FA)) {
                  FA.removeChild(FE);
                }
                if (!(null === (Fq = F9.parentNode) || undefined === Fq)) {
                  Fq.removeChild(F9);
                }
                if (!(null === (FR = F8.parentNode) || undefined === FR)) {
                  FR.removeChild(F8);
                }
                if (FN) {
                  FN();
                }
              }, 350);
            }(FY[0]);
            break;
          case 2:
            !function () {
              if (1 === F5 && FF) {
                if (Ft) {
                  te(Ft, "opacity", '1');
                  var Fz = FF.M();
                  var Fb = FF.H();
                  var FA = -1 * Fa(640 - (320 - Ft.offsetHeight / 2));
                  te(Fz, "transition", "opacity 0.28s ease-in");
                  te(Fb, "transition", "transform 0.5s ease-in-out");
                  te(Ft, "transition", "opacity 0s linear 0.28s, transform 0.5s ease-in-out");
                  requestAnimationFrame(function () {
                    te(Ft, "opacity", '1', "transform", "translateY(0px)");
                    te(Fz, "opacity", '0');
                    te(Fb, "transform", "translateY(".concat(FA, "px) scale(").concat(0.4375, ')'));
                  });
                } else {
                  FF._();
                  var Fq = FF.M();
                  var FR = FF.H();
                  te(Fq, "transition", "opacity 0.28s ease-in");
                  te(FR, "transition", "transform 0.5s ease-in-out");
                  requestAnimationFrame(function () {
                    te(Fq, "opacity", '1');
                    te(FR, "transform", "translateY(0px) scale(0.625)");
                  });
                }
              }
            }();
            break;
          case 3:
            !function (FN) {
              if (1 === F5 && FF) {
                FF.Y(FN);
              }
            }(FY[0]);
            break;
          case 4:
            !function (FN) {
              if (1 === F5 && FF) {
                var Fb = FF.H();
                var FA = FF.M();
                te(Fb, "transition", "transform 0.7s ease-out");
                te(FA, "transition", '', "opacity", '0');
                requestAnimationFrame(function () {
                  te(Fb, "transform", "translateY(".concat(-FN, "px) scale(").concat(0.4375, ')'));
                });
                if (Ft) {
                  te(Ft, "transition", "opacity 0.7s ease-in");
                  requestAnimationFrame(function () {
                    te(Ft, "opacity", '0');
                  });
                }
              }
            }(FY[0]);
        }
      }
    };
  }(lt, O() ? 1 : 0, J(4));
  st = window.document;
  st.addEventListener("touchend", Oe, ts);
  st.addEventListener("dblclick", Ke, ts);
  ["gesturestart", "gesturechange", "gestureend"].forEach(function (F4) {
    return st.addEventListener(F4, Ke, ts);
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
  var ft = function (F4) {
    var F6 = F4.labels;
    var F7 = F4.root;
    var F8 = F4.enableScale;
    var F9 = F4.values;
    var FF = undefined === F9 ? {} : F9;
    var FX = F7;
    var Ft = undefined;
    de(document.head, "style", 0).textContent = "@keyframes eru-ep-in{0%{opacity:0;transform:translateY(20px)}50%{opacity:1}to{opacity:1;transform:translateY(0)}}@keyframes eru-ep-out{0%{opacity:1;transform:translateY(0)}50%{opacity:1}to{opacity:0;transform:translateY(20px)}}@keyframes eru-dlg-in{0%{bottom:-100px}30%{opacity:1}to{bottom:0;opacity:1}}@keyframes eru-info-in{0%{transform:translateY(70px)}30%{opacity:1}to{opacity:1;transform:translateY(0)}}@keyframes eru-dlg-out{0%{bottom:0;opacity:1}to{bottom:-100px;opacity:0}}@keyframes eru-info-out{0%{opacity:1;transform:translateY(0)}80%{opacity:0}to{opacity:0;transform:translateY(70px)}}@keyframes eru-hdr{0%{transform:translateY(0)}to{transform:translateY(-104px)}}@keyframes eru-toast-in{0%{opacity:0;top:-48px}50%{opacity:.85}to{opacity:.85;top:20px}}@keyframes eru-toast-out{0%{opacity:.85;top:20px}50%{opacity:0}to{opacity:0;top:-48px}}.eru-root{font-family:PingFang SC,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;pointer-events:none;position:fixed;touch-action:none;transform-origin:top left}.eru-root .eru{flex-direction:column;justify-content:flex-end}.eru-root .eru,.eru-root .eru .er-btn{align-items:center;display:flex;overflow:hidden}.eru-root .eru .er-btn{border:1px solid #7f7f7f;border-radius:4px;cursor:pointer;justify-content:center;pointer-events:auto;text-align:center}.eru-root .eru .er-btn-text{line-clamp:2;-webkit-line-clamp:2;-webkit-box-orient:vertical;color:#fff;display:-webkit-box}.eru-root .eru .er-btn:active{opacity:.6}.eru-root .eru .er-pop-show{animation:eru-ep-in .25s ease-out;animation-fill-mode:forwards}.eru-root .eru .er-pop-hide{animation:eru-ep-out .25s ease-out;animation-fill-mode:forwards}.eru-root .eru .er-pop{align-items:center;background:#000;border-radius:4px;display:flex;height:48px;justify-content:flex-end;margin-bottom:10px;width:328px}.eru-root .eru .er-pop .er-ico-info{align-items:center;color:#a1a1a6;display:flex;height:13px;padding:5px;scale:.7;width:13px}.eru-root .eru .er-pop-msg{color:#a1a1a6;flex:1;font-size:10px;padding-right:10px}.eru-root .eru .er-pop-btn{color:#fff;cursor:pointer;font-size:11px;margin:0 10px;max-height:40px;min-height:28px;overflow:hidden;pointer-events:auto}.eru-root .eru .er-pop-btn-text{line-height:13px;max-width:75px;min-width:60px}.eru-root .eru .er-dlg-show{animation:eru-dlg-in .75s ease-in-out;animation-fill-mode:forwards}.eru-root .eru .er-info-show{animation:eru-info-in .75s ease-in-out;animation-fill-mode:forwards}.eru-root .eru .er-dlg-hide{animation:eru-dlg-out .375s ease-in-out;animation-fill-mode:forwards}.eru-root .eru .er-info-hide{animation:eru-info-out .75s ease-in-out;animation-fill-mode:forwards}.eru-root .eru .er-chg-hdr{animation:eru-hdr .5s ease-in-out;animation-fill-mode:forwards}.eru-root .eru .er-dlg{align-items:center;background-color:#000;border-radius:8px;font-weight:400;left:15px;opacity:0;padding:0 10px 10px;pointer-events:auto;position:absolute;width:310px;z-index:1001}.eru-root .eru .er-dlg-close{color:#fff;cursor:pointer;opacity:0;pointer-events:auto;position:absolute;right:15px;scale:1.5;top:15px;transition:opacity .2s}.eru-root .eru .er-dlg-hdr{color:#d1d1d6;font-size:16px;font-weight:400;height:104px;line-height:20px;margin:0 35px;mask-image:linear-gradient(180deg,transparent,#000 10%,#000 90%,transparent);overflow:hidden;text-align:center;width:240px}.eru-root .eru .er-dlg-hdr-ctn{align-items:center;color:#fff;display:flex;height:104px;justify-content:center}.eru-root .eru .er-dlg-info{font-size:11px;margin-bottom:13px;padding:14px}.eru-root .eru .er-dlg-row{color:#b0b0b0;display:flex;justify-content:space-between;margin-bottom:12px}.eru-root .eru .er-row-sep{border-bottom:1px solid #fff;margin:10px 0;opacity:.2}.eru-root .eru .er-lbl-left{color:#888;font-size:11px;min-width:70px}.eru-root .eru .er-dlg-msg{line-clamp:3;-webkit-line-clamp:3;-webkit-box-orient:vertical;color:#fff;display:-webkit-box;font-size:11px;overflow:hidden;text-align:right;word-break:break-word}.eru-root .eru .er-btn-ctn{align-items:center;display:flex;justify-content:center;margin-bottom:18px}.eru-root .eru .er-copy-btn{height:36px;margin:0 4px}.eru-root .eru .er-copy-text{line-height:17px;max-width:120px;min-width:90px}.eru-root .eru .er-toast-ctn{align-items:center;display:flex;height:48px;justify-content:center;opacity:1;position:absolute;top:0;width:360px}.eru-root .eru .er-toast-bg{background:#000;border-radius:24px;padding:9px 20.5px;position:absolute;width:203.5px}.eru-root .eru .er-toast-txt{color:#fff;font-size:11px;font-weight:400;letter-spacing:0;line-height:15px;text-align:center}.eru-root .eru .er-toast-in{animation:eru-toast-in .25s ease-in-out;animation-fill-mode:forwards}.eru-root .eru .er-toast-out{animation:eru-toast-out .25s ease-in-out;animation-fill-mode:forwards}.eru-landscape-cover{align-items:center;background-color:#000;color:#fff;display:flex;font-family:PingFang SC,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;font-size:5.5vmin;height:100%;justify-content:center;margin:auto;opacity:.85;position:fixed;text-align:center;transition:opacity .3s ease-in .1s;visibility:hidden;width:100%}.eru-landscape-cover p{transition:transform .3s ease-in}";
    if (F8) {
      ve(FX = de(F7, "div", 0), "class", "eru-root");
      Ft = we(true, true, function (Fi, FE) {
        return function () {
          var Fm = window.innerWidth;
          var FW = window.innerHeight;
          var FY = Fm / FW > 0.5625 ? 1920 / FW : 1080 / Fm;
          var Fx = FE / FY;
          var FN = 0;
          var Fz = 0;
          if (Fm / FW > 0.5625) {
            FN = 0;
            Fz = (Fm - 360 * Fx) / 2;
          } else {
            Fz = 0;
            FN = (FW - 640 * Fx) / 2;
          }
          he(Fi, "transform", "scale(".concat(Fx.toFixed(4), ')'), "top", ''.concat(FN, 'px'), "left", ''.concat(Fz, 'px'));
        };
      }(FX, 3));
    }
    var FD = ke(FX, F6, FF);
    function Ff() {
      if (FX && FX.parentElement) {
        FX.parentElement.removeChild(FX);
      }
      if (Ft) {
        Ft();
      }
    }
    return {
      'set': function (Fi, FE) {
        switch (Fi) {
          case 0:
            FD.t(FE);
            break;
          case 1:
            FD.o(FE);
            break;
          case 2:
            FD.m(FE);
            break;
          case 3:
            FD.k(FE);
        }
      },
      'get': function (Fi) {
        switch (Fi) {
          case 0:
            return FD.j();
          case 1:
            return FD._();
          case 2:
            return FD.Y();
          default:
            return;
        }
      },
      'action': function (Fi) {
        var Fu = [];
        for (var Fa = 1; Fa < arguments.length; Fa++) {
          Fu[Fa - 1] = arguments[Fa];
        }
        switch (Fi) {
          case 0:
            FD.i(Fu[0], Fu[1]);
            break;
          case 1:
            FD.u(Fu[0], false, Fu[1]);
            break;
          case 2:
            FD.u(Fu[0], true, Fu[1]);
            break;
          case 3:
            FD.p(Fu[0]);
            break;
          case 4:
            FD.l(Fu[0]);
            break;
          case 5:
            FD.v(Fu[0], Fu[1]);
            break;
          case 6:
            Ff();
            FD.h(Fu[0]);
            break;
          case 7:
            Ff();
        }
      }
    };
  }({
    'labels': Ue,
    'values': We,
    'root': document.body,
    'enableScale': true
  });
  var ht = function (F4, F5) {
    if (!/mobile|android|iphone|ipad/i.test(window.navigator.userAgent)) {
      return null;
    }
    var F7 = de(F4, "div", 0);
    me(F7, "eru-landscape-cover");
    var F8 = de(F7, 'p', 0);
    F8.innerHTML = F5;
    var F9 = false;
    var FF = we(false, true, function () {
      if (/mobile|android|iphone|ipad/i.test(window.navigator.userAgent) && window.innerWidth > window.innerHeight) {
        F9 = true;
        he(F7, "visibility", "visible");
      } else {
        F9 = false;
        he(F7, "visibility", "hidden");
      }
    });
    return {
      'action': function (FX) {
        if (0 === FX) {
          (function () {
            FF();
            if (F9) {
              var FD = function () {
                F7.removeEventListener("transitionend", FD);
                F4.removeChild(F7);
              };
              he(F8, "transform", "translateY(32px)");
              he(F7, "opacity", '0');
              F7.addEventListener("transitionend", FD);
            } else {
              F4.removeChild(F7);
            }
          })();
        }
      }
    };
  }(lt, J(21));
  function vt(F4) {
    mt(new Ze("Resource load failed", {
      'code': "G1002",
      'cause': F4.N
    }), J(19), false);
    bt(F4);
  }
  function pt(F4) {
    var F6 = new Ze("Resource load failed", {
      'code': "G1002",
      'cause': F4.N
    });
    gt(''.concat(J(1), " (").concat("G1002", ')'));
    mt(F6);
    bt(F4);
  }
  function mt(F4, F5, F6) {
    var F8;
    var F9;
    if (undefined === F6) {
      F6 = true;
    }
    var FF = function (FU, FD) {
      if (undefined === FD) {
        FD = false;
      }
      var Ff = '';
      var Fi = FU;
      for (var FE = true; Fi;) {
        if (FE) {
          FE = false;
        } else {
          Ff += "\nCaused by: ";
        }
        Ff += Fi.message;
        if (Fi.source) {
          Ff += " for file: ".concat(Fi.source);
        }
        if (undefined !== Fi.code) {
          Ff += " (".concat(Fi.code, ')');
        }
        var Fu = (Fi.stack || '') + '';
        if (Fu) {
          var Fa = Fu.indexOf("\n");
          if (-1 !== Fa) {
            Ff += Fu.slice(Fa);
          }
        }
        Fi = Fi.cause;
        if (FD) {
          Ff = Ff.replace(/https?:\/\/[^/]+([0-9A-Za-z/._-]+)\S*(:[0-9]+:[0-9]+)/g, "$1$2").replace(/https?:\/\/[^/]+/g, '');
        }
      }
      return Ff;
    }(F4);
    ft.set(3, FF);
    var FX = function (FU) {
      var FD = FU.match(/(?:Caused by:\s*)([^\n]+)/);
      if (FD) {
        return FD[1];
      }
      var Ff = FU.match(/^[^\n]+/);
      return Ff ? Ff[0] : '';
    }(FF);
    (F8 = {
      4: null === (F9 = F4.code) || undefined === F9 ? undefined : F9.toString(),
      5: FX
    })[2] = new Date().toLocaleString("en-US", {
      'timeZone': "UTC",
      'timeZoneName': "short"
    });
    ft.set(1, F8);
    var Ft = F6 ? 2 : 1;
    ft.action(Ft, F5, function () {
      ft.action(0, {}, function () {
        ct.set(0, true);
        ct.action(2);
      });
      var FD = ft.get(0);
      ct.set(0, false);
      var Ff = ct.get(0, FD);
      ct.action(4, Ff);
    });
  }
  function gt(F4) {
    ct.action(0, J(0), F4, [{
      'label': J(3),
      'onclick': function () {
        location.reload();
      }
    }]);
  }
  function bt(F4) {
    var F6 = F4.S;
    var F7 = F4.F;
    var F8 = F4.N;
    var F9 = F8.code;
    var FF = F8.message;
    var FX = F6.split('?')[0];
    var Ft = ''.concat(F9 + '', "|load resource failed|src: ").concat(FX, "|reason: ").concat(FF);
    if (F7) {
      Ft += "|retryCount: ".concat(F7);
    }
    gtag("event", "fault", {
      'event_category': "game_shell",
      'event_label': Ft
    });
  }
  function yt(F4) {
    if ("undefined" == typeof shell) {
      var F6 = ''.concat(J(1), " (").concat("G1008", ')');
      var F7 = new Ze("Shell script error", {
        'code': "G1008",
        'source': F4.G || F4.S
      });
      gt(F6);
      mt(F7);
    } else {
      var F8 = function () {
        ct.action(2);
        var FF = {
          initialLoader: ct,
          errorReport: ft,
          landscapeCover: ht
        };
        var Ft = {
          SharedPath: Qe,
          GameDir: Xe,
          AssetTable: "59adcfba9d.1a7e5.json",
          ShellDir: "984721902a/",
          Plugins: "e02b9bf0d2,a346494745,589a728c8d,2fd142260e,2c6e37b73c,b85c56d865,c03a2652ad",
          Requirements: "minMemory=1024&minDiskSpace=1024&whiteList=chrome-59%2Cchrome%20webview-59%2Cfirefox-58%2Csafari-11%2Cedge-79&minOSVersion=iOS-11%2CAndroid-5%2CMacOS-10.10%2CWindows-7",
          LocalizedTitleKey: "KrakenGoldRush.GameTitle",
          SupportedLanguages: "en,zh,ar,bn,da,de,en-social,en-stkus,es,fi,hi,id,it,ko,nl,pt,pt-br,ru,sv,th,uk",
          ThemeColor: "#00aaff",
          LobbyMode: false,
          SupportXSMaxRatio: 2,
          AspectRatio: '',
          Orientation: 1,
          Name: "Kraken Gold Rush",
          Version: "1.4.0.2/7.1.3/7.3.1-rc.2",
          Index: 1929177,
          Identifier: "com.pgsoft.slot.sticky-horizontal-wild-cluster",
          PluginDependencies: tU,
          EIF: 16777217,
          Ecma: et,
          Platform: tt,
          Blobs: je,
          BootTime: rt,
          uiControllers: FF
        };
        shell.start(dt, Ft);
        st.removeEventListener("touchend", Oe, ts);
        st.removeEventListener("dblclick", Ke, ts);
        ["gesturestart", "gesturechange", "gestureend"].forEach(function (FU) {
          return st.removeEventListener(FU, Ke, ts);
        });
      };
      if (ft.get(1)) {
        ct.action(3);
        ft.action(5, J(20), F8);
      } else {
        F8();
      }
    }
  }
  var tS = {
    event_category: "engagement"
  };
  ut = function (F4) {
    mt(new Ze("Network connection slow", {
      'code': "N1003",
      'source': F4
    }), J(19), false);
  };
  (function (F4) {
    if (!Ae) {
      var F6 = G.ao;
      var F7 = F6 ? ue(F6) : window.location.host;
      Ae = function (F9) {
        var FF = F9;
        if (FF.split('.').length > 2) {
          FF = FF.substring(FF.indexOf('.') + 1);
        }
        return "https://api." + FF + '/';
      }(F7);
    }
    var F8 = ''.concat(Ae, "what-is-my-ip");
    !function () {
      for (var F9 = 0; F9 < arguments.length; F9++) {
        var FF = arguments[F9];
        Pe.push(FF);
      }
    }(F8);
    (function () {
      for (var FF = 0; FF < arguments.length; FF++) {
        var FX = arguments[FF];
        Ve.push(FX);
      }
    })(F8);
    Fe(F8, 1, function (F9, FF) {
      if (F9) {
        F4(F9);
      } else {
        var Ft = FF.ip;
        F4(undefined, Ft);
      }
    });
  })(function (F4, F5) {
    var F7;
    if (F4) {
      var F9 = F4.code;
      var FF = F4.message;
      var FX = ''.concat("G1018", "|get ip failed|reason: ").concat(FF, " (").concat(F9, ')');
      gtag("event", "fault", {
        'event_category': "game_shell",
        'event_label': FX
      });
    } else {
      (F7 = {})[1] = F5;
      ft.set(1, F7);
    }
  });
  //if (undefined !== window.isSecureContext ? window.isSecureContext : "https:" === window.location.protocol) {
    Fe({
      'S': Qe + "984721902a/" + "index.json",
      'T': 0x1,
      'R': function (F4) {
        var F6;
        var F8 = F4.A;
        F6 = (dt = F8).version;
        if ("string" != typeof F6 || false || -1 === function (Ft, FU) {
          var Ff = Ft.split('-');
          var Fi = FU.split('-');
          var FE = X(Ff[0], Fi[0]);
          if (0 !== FE) {
            return FE;
          }
          var Fu = Ff[1];
          var Fa = Fi[1];
          return Fu && !Fa ? -1 : !Fu && Fa ? 1 : Fu || Fa ? X(Fu, Fa) : 0;
        }(F6, "11.9.0-rc.1")) {
          var F9 = ''.concat(J(2), " (").concat("G1011", ')');
          var FF = new Ze("Unsupported shell version", {
            'code': "G1011",
            'source': F4.G || F4.S
          });
          gt(F9);
          return void mt(FF);
        }
        var FX = function () {
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
          ft.action(5, J(20), FX);
        } else {
          FX();
        }
      },
      'P': pt,
      'D': vt
    });
 // } else {
    //gtag("event", "insecure_context", tS);
    //ct.action(0, J(5), J(6));
 // }
}();