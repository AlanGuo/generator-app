var localStorageUtil = {

  count:0,

  updateLocalStorage:function(obj,needtoload){
    if(needtoload){
      localStorageUtil.count++;
    }
    localStorageUtil.loadScript(obj,function(){
        if(window[obj.file]){
          window[obj.file]();

          var content = /^function\s*?\(\)\s*?\{([\s\S]*)\}$/i.exec(window[obj.file].toString())[1];

          var pInfo = {
            'version':versions[obj.file],
            'script':content
          };
          localStorage.setItem(obj.file,JSON.stringify(pInfo));
          //window.alert('缓存更新成功！'+obj.file);

          //回调
          if(--localStorageUtil.count===0){
            if(needtoload){
              window.onlsload && window.onlsload();
            }
          }

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
  var forceUpdate = false;

  if(!pInfo){
      //如果没有本地存储的内容, 从网络请求资源
      localStorageUtil.updateLocalStorage({file:p,version:window.versions[p]},true);
  }
  else{
    pInfo = JSON.parse(pInfo);
    //解析javascript
    try{
      if(pInfo.script){
        new Function(pInfo.script)();
      }else{
        forceUpdate = true;
      }
    }
    catch(e){
      forceUpdate = true;
      console.log(e);
    }

    if(forceUpdate || (pInfo.version !== versions[p])){
      //需要更新localstorage
      //强制更新脚本时候，重新启动app
      //window.alert('准备更新缓存！'+p);
      localStorageUtil.updateLocalStorage({file:p,version:window.versions[p]},forceUpdate);
    }
  }
}

//window.alert('命中缓存!');
//开始程序
if(localStorageUtil.count === 0){
  window.onlsload && window.onlsload();
}