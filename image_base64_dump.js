// ==UserScript==
// @name         image_base64_dump
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       denisde4ev
// @match        http://localhost:8080/favicon.ico
// @icon         https://www.google.com/s2/favicons?domain=undefined.localhost
// @grant        none
// ==/UserScript==

throw 'not working'

//async
function image_base64_dump (url){
	//return 'data:image;';
	//window.open('data:text/plain;charset=UTF-8;base64,'+(btoa((JSON.stringify(DATA)))))
	//return ('data:text/plain;charset=UTF-8,'+(encodeURIComponent(JSON.stringify({}))))

	//return window.open('data:application/json;charset=UTF-8,'+(encodeURIComponent((JSON.stringify(DATA)))))
	fetch(url).then(data=>data.blob()).then(blob=>
		blob.text().then(txt=>{
			window.open( 'data:' + blob.type +',' + encodeURIComponent( txt ) )
		}
	))
}
