// ==UserScript==
// @name         keyboard event hook
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  disalow some keybindings to be handled by the site
// @author       denisde4ev
// @include      http://*.*/*
// @include      https://*.*/*
// @downloadURL  https://github.com/denisde4ev/JS-UserScripts/raw/master/keyboard-event-hook.js
// @updateURL    https://github.com/denisde4ev/JS-UserScripts/raw/master/keyboard-event-hook.js
// @grant        none
// @run-at       document-start
// ==/UserScript==




var documentaddEventListener = document.addEventListener;

var fn_apply = Function.call.bind(Function.apply);

window.document.addEventListener = function(on,fn, opt){
	if (on !== 'keydown' || typeof fn !== 'function') return fn_apply(documentaddEventListener, this, arguments);

	documentaddEventListener.call(this, on, function(event){

		if (!event.metaKey && !event.ctrlKey && !event.shiftKey && event.altKey) { // only alt(Alt-) mod key pressed
			if (event.key === 'ArrowUp') return true; // Alt-ArrowUp
			//console.log('keyboard event hook got: ',{this:this,fn:fn,arguments:arguments});
		}


		return fn_apply(fn, this, arguments);
	}, opt);
}

window.document.addEventListener.toString = function(){ return documentaddEventListener.toStrig(); } // it's not me
