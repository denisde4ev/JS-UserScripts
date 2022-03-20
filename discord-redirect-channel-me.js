// ==UserScript==
// @name         discord redirect '/' => '/channels/@me'
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  discord redirect '/' => '/channels/@me'
// @author       denisde4ev
// @match        https://discord.com/
// @icon         https://www.google.com/s2/favicons?domain=discord.com
// @grant        none
// @run-at       document-start
// ==/UserScript==

location.href = '/channels/@me'
