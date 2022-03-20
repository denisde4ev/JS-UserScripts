// ==UserScript==
// @name         title append HOST
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  append to doc.title Spotify
// @author       You
// @match        https://open.spotify.com/*
// @match        https://discord.com/*
// @downloadURL  https://github.com/denisde4ev/JS-UserScripts/raw/master/title-append-HOST.js
// @updateURL    https://github.com/denisde4ev/JS-UserScripts/raw/master/title-append-HOST.js
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

var title = document.head.getElementsByTagName('title');
const HOST = location.host.replace(/(?:[^.]*\.)?([^.]*)\.[^.]*/s,'$1');
const appendHOST = ` [${HOST}]`;
if ( title.length !== 1 ) throw title.length+' is not 1';
title=title.item(0);


Object.defineProperty(document, 'title', {
	get() {
		return title.text.slice(0,-(appendHOST.length)) // ' | Spotfiy'.length => 10
	},
	set(val) {
		// debugger
		// console.log('set',val)
		title.text = val + appendHOST;
	}
});
