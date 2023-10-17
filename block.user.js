// ==UserScript==
// @name         YouTube Popup Blocker by Deadstar
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Block YouTube pop-up with the element name "tp-yt-paper-dialog"
// @author       Deadstar
// @match        *://www.youtube.com/*
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

    // Function to block the pop-up
    function blockPopup() {
        const popup = document.querySelector("tp-yt-paper-dialog");
        if (popup) {
            popup.style.display = "none"; // You can also use "block" if you want to hide it entirely
        }
    }

    // Run the blockPopup function on page load and when the DOM changes
    blockPopup();
    const observer = new MutationObserver(blockPopup);
    observer.observe(document.body, { childList: true, subtree: true });
})();
