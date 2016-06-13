define("app/regist",["jquery","bootstrap","jquery.validate","mod/mod2","mod/mod3","deps/jquery.lazyload"],function(require,exports,module){require("jquery");require("bootstrap"),require("jquery.validate"),require("mod/mod2"),require("mod/mod3"),require("deps/jquery.lazyload")}),define("mod/mod2",[],function(require,exports,module){console.log("mod2加载完毕")}),define("mod/mod3",[],function(require,exports,module){console.log("mod3加载完毕")}),define("deps/jquery.lazyload",["jquery"],function(require,exports,module){var e=require("jquery");!function(e,t,o,n){var i=e(t);e.fn.lazyload=function(r){function f(){var t=0;l.each(function(){var o=e(this);if(!d.skip_invisible||o.is(":visible"))if(e.abovethetop(this,d)||e.leftofbegin(this,d));else if(e.belowthefold(this,d)||e.rightoffold(this,d)){if(++t>d.failure_limit)return!1}else o.trigger("appear"),t=0})}var a,l=this,d={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:t,data_attribute:"original",skip_invisible:!1,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};r&&(n!==r.failurelimit&&(r.failure_limit=r.failurelimit,delete r.failurelimit),n!==r.effectspeed&&(r.effect_speed=r.effectspeed,delete r.effectspeed),e.extend(d,r)),a=d.container===n||d.container===t?i:e(d.container);var c="createTouch"in o;return 0===d.event.indexOf("scroll")&&a.bind(d.event+(c?" touchend":""),function(){return f()}),this.each(function(){var t=this,o=e(t);t.loaded=!1,o.attr("src")!==n&&o.attr("src")!==!1||o.is("img")&&o.attr("src",d.placeholder),o.one("appear",function(){if(!this.loaded){if(d.appear){var n=l.length;d.appear.call(t,n,d)}e("<img />").bind("load",function(){var n=o.attr("data-"+d.data_attribute);o.hide(),o.is("img")?o.attr("src",n):o.css("background-image","url('"+n+"')"),o[d.effect](d.effect_speed),t.loaded=!0;var i=e.grep(l,function(e){return!e.loaded});if(l=e(i),d.load){var r=l.length;d.load.call(t,r,d)}}).attr("src",o.attr("data-"+d.data_attribute))}}),0!==d.event.indexOf("scroll")&&o.bind(d.event,function(){t.loaded||o.trigger("appear")})}),i.bind("resize",function(){f()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&i.bind("pageshow",function(t){t.originalEvent&&t.originalEvent.persisted&&l.each(function(){e(this).trigger("appear")})}),e(o).ready(function(){f()}),this},e.belowthefold=function(o,r){var f;return f=r.container===n||r.container===t?(t.innerHeight?t.innerHeight:i.height())+i.scrollTop():e(r.container).offset().top+e(r.container).height(),f<=e(o).offset().top-r.threshold},e.rightoffold=function(o,r){var f;return f=r.container===n||r.container===t?i.width()+i.scrollLeft():e(r.container).offset().left+e(r.container).width(),f<=e(o).offset().left-r.threshold},e.abovethetop=function(o,r){var f;return f=r.container===n||r.container===t?i.scrollTop():e(r.container).offset().top,f>=e(o).offset().top+r.threshold+e(o).height()},e.leftofbegin=function(o,r){var f;return f=r.container===n||r.container===t?i.scrollLeft():e(r.container).offset().left,f>=e(o).offset().left+r.threshold+e(o).width()},e.inviewport=function(t,o){return!(e.rightoffold(t,o)||e.leftofbegin(t,o)||e.belowthefold(t,o)||e.abovethetop(t,o))},e.extend(e.expr[":"],{"below-the-fold":function(t){return e.belowthefold(t,{threshold:0})},"above-the-top":function(t){return!e.belowthefold(t,{threshold:0})},"right-of-screen":function(t){return e.rightoffold(t,{threshold:0})},"left-of-screen":function(t){return!e.rightoffold(t,{threshold:0})},"in-viewport":function(t){return e.inviewport(t,{threshold:0})},"above-the-fold":function(t){return!e.belowthefold(t,{threshold:0})},"right-of-fold":function(t){return e.rightoffold(t,{threshold:0})},"left-of-fold":function(t){return!e.rightoffold(t,{threshold:0})}})}(e,window,document)});