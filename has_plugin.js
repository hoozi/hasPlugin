/**
 * @authors : hoozi
 * @webSite : https://github.com/hoozi 
 * @email   : 287036406@qq.com
 * @date    : 2015-06-30 14:12:36
 * @version : 0.0.1
 */
(function(window){
	window.hasPlugin = function(name) {
		var result = hasNotIEPlugin(name);
		if(!result) {
			result = hasIEPlugin(name);
		}
		return result;
	}
	var hasNotIEPlugin = function(name){
		var plugins = window.navigator.plugins;
		var name = name.toLowerCase();
		for(var i = 0,len = plugins.length;i<len;i++) {
			if(plugins[i].name.toLowerCase().indexOf(name)>-1) {
				return true;
			}
			
		}
		return false;
	}
	var hasIEPlugin = function(name){
		try{
			new ActiveXObject(name);
			return true;
		} catch(e) {
			return false;
		}
	}
})(window);