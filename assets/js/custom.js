/* ============================================================
 * Plugin Core Init
 * For DEMO purposes only. Extract what you need.
 * ============================================================ */
 
'use strict';

$(document).ready(function() {

    $('#start_tour').click(function() {
        $("#notifications").velocity("scroll", {
            duration: 800
        });
    })
});