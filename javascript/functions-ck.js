/*
	 * Nav Functions
	*/function menu_check(){var e=get_em($(window).width()),t=50;if(e<=t)return!0;if(e>t)return!1}function init_menu(){var e=$("#nav-menu"),t=$(".menu-button");if(menu_check()){t.css("display","block");e.css("display","none")}else{t.css("display","none");e.css("display","block")}}function get_em(e){var t=parseInt($("html").css("font-size"));return e/t}(function(e,t){var n=function(e,t,n){var r;return function(){function u(){n||e.apply(s,o);r=null}var s=this,o=arguments;r?clearTimeout(r):n&&e.apply(s,o);r=setTimeout(u,t||100)}};jQuery.fn[t]=function(e){return e?this.bind("resize",n(e)):this.trigger(t)}})(jQuery,"smartresize");