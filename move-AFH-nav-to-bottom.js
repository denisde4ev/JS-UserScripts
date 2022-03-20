// ==UserScript==
// @name         move AFH navigation to bottom
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  just move page navigation to bottom of search results
// @author       deni2020
// @match        https://androidfilehost.com/?*s=*
// @icon         https://icons.duckduckgo.com/ip2/androidfilehost.com.ico
// @grant        none
// @run-at       document-end
// ==/UserScript==

document.querySelector('.page-container.page-search').after(document.querySelector('.pagination.navbar-right'))
