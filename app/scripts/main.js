// Main application 
require(['config/config'], function() {
    'use strict';
    require(['jquery', 'backbone', 'bootstrap', 'config/globals','selectize', 'slider','routers/router', 'views/headerView', 'views/footerView', 'blockui'],
        function($, Backbone, bootstrap, globals, selectize, slider,Router,  HeaderView, FooterView, BlockUI) {

            $(document).ready(function() {

                $.blockUI.defaults.message = "<h1>Please wait...</h1>";
                $(document).ajaxStart($.blockUI).ajaxSuccess($.unblockUI).ajaxError($.unblockUI);
                
            	new HeaderView();
    			new FooterView();

                // initialize router
                new Router();

            });
          
        });
});