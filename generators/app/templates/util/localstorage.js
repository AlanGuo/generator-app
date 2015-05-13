var localStorageUtil = {

  count:0,

  updateLocalStorage:function(obj,needtoload){
    if(needtoload){
      localStorageUtil.count++;
    }
    localStorageUtil.loadScript(obj,function(){
        if(window[obj.file]){
          window[obj.file]();
          //回调
          if(--localStorageUtil.count===0){
            if(needtoload){
              window.onlsload && window.onlsload();
            }
          }
          var content = /function\s*\(\)\{([\s\S]*)\}/i.exec(window[obj.file].toString())[1];
          var pInfo = {
            'version':versions[obj.file],
            'script':content
          };
          localStorage.setItem(obj.file,JSON.stringify(pInfo));
        }
    },function(){
        if(--localStorageUtil.count===0){
          if(needtoload){
            window.onlsload && window.onlsload();
          }
      }
    });
  },

  loadScript:function(obj,onload,onerror){
    var script = document.createElement('script');
    script.type = "text\/javascript";
    //拼url
    var urlArray = obj.file.split('.');

    if(obj.version){
      urlArray.splice(urlArray.length-1,0,obj.version);
    }
    
    script.src = urlArray.join('.');
  
    script.onload = function(evt){
      onload && onload(evt);
      document.body.removeChild(evt.target);
    }
    script.onerror = function(evt){
      onerror && onerror(evt);
      document.body.removeChild(evt.target);
    }

    document.body.appendChild(script);
  }
};

for(var p in window.versions){
  //清空本地存储
  //localStorage.removeItem(p);
  var pInfo = localStorage.getItem(p);

  if(!pInfo){
      //如果没有本地存储的内容, 从网络请求资源
      localStorageUtil.updateLocalStorage({file:p,version:window.versions[p]},true);
  }
  else{
    pInfo = JSON.parse(pInfo);
    //解析javascript
    try{
      new Function(pInfo.script)();
    }
    catch(e){console.log(e)}

    if(pInfo.version !== versions[p]){
      //需要更新localstorage
      localStorageUtil.updateLocalStorage({file:p,version:window.versions[p]},false);
    }
  }
}
//开始程序
if(localStorageUtil.count === 0){
  window.onlsload && window.onlsload();
}