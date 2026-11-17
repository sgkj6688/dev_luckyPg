(function(){
  if(window.self===window.top)return;
  var timer,attempts=0,disposed=false;
  function stop(){disposed=true;if(timer)clearTimeout(timer);removeEventListener('pagehide',stop);}
  function bind(){
    if(disposed)return;
    var framework=window.System&&typeof System.get==='function'&&System.get('bvframework');
    var quit=framework&&framework.QuitGame;
    if(quit&&typeof quit.quitGame==='function'){
      var original=quit.quitGame;
      quit.quitGame=function(){window.parent.postMessage({type:'close',message:'quitGame'},'*');return original.apply(this,arguments);};
      stop();return;
    }
    if(++attempts<150)timer=setTimeout(bind,200);else stop();
  }
  addEventListener('pagehide',stop);bind();
})();