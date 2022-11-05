// ==UserScript==
// @name         keyboard event hook
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  disalow some keybindings to be handled by the sites
// @author       denisde4ev
// @include      http://*.*/*
// @include      https://duckduckgo.com/*
// @include      https://youtube.com/*
// @exclude      https://youtube.com/tv*
// @downloadURL  https://github.com/denisde4ev/JS-UserScripts/raw/master/keyboard-event-hook.js
// @updateURL    https://github.com/denisde4ev/JS-UserScripts/raw/master/keyboard-event-hook.js
// @grant        none
// @run-at       document-start
// ==/UserScript==




var documentaddEventListener = document.addEventListener;
var removeEventListener      = document.removeEventListener;

var fn_apply = Function.call.bind(Function.apply);
var wm = new WeakMap();

window.document.addEventListener = function(on, fn, opt) {
	if (!( on === 'keydown' && typeof fn === 'function' )) {
		return fn_apply(documentaddEventListener, this, arguments);
	}

	var wrap_fn = function(event) {

		if (!event.metaKey && !event.ctrlKey && !event.shiftKey && event.altKey) { // only alt(Alt-) mod key pressed
			if (event.key === 'ArrowUp') return true; // Alt-ArrowUp
			//console.log('keyboard event hook got: ',{this:this,fn:fn,arguments:arguments});
		}


		return fn_apply(fn, this, arguments);
	};
	wm.set(fn, fn_wrap);

	documentaddEventListener.call(this, on, wrap_fn, opt);
	
}
document.removeEventListener = function (on, fn, opt) {
	if (wm.has(fn)) {
		var wrap_fn = wm.get(fn);
		removeEventListener.call(this, on, wrap_fn, opt);
	}
	removeEventListener.call(this, on, fn, opt);
};


window.document.addEventListener   .toString = function(){ return documentaddEventListener.toStrig(); }
window.document.removeEventListener.toString = function(){ return removeEventListener     .toStrig(); }
