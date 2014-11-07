if("undefined"==typeof quickView){var quickView;this.jQuery&&function(e){quickView={isScrollLocked:!1,isCloseAllowed:!0,initialize:function(){var n=e("body");n.append('<div id="QuickView"><div id="QuickViewCell"></div></div>'),this.$container=e("#QuickView"),this.$containerCell=e("#QuickViewCell"),n.delegate("a","click",function(n){if(n.metaKey)return!0;var t=e(n.currentTarget).attr("href");if(quickView.hasImageExtension(t))return quickView.show('<img src="'+t+'" />'),!1;var i=e(n.currentTarget).attr("data-quickview-content");return i.length?(quickView.show(i),!1):!0})},hasImageExtension:function(e){return e?null!==e.match(/\.(jpeg|jpg|gif|png)$/):void 0},show:function(n,t){quickView.$containerCell.html(n).css("height",e(window).height()+"px").css("width",e(window).width()+"px"),quickView.$container.fadeIn(80),quickView.lockScroll(),t||quickView.bindCloseActions()},hide:function(){quickView.removeCloseActions(),quickView.$container.fadeOut(40),setTimeout(function(){quickView.$containerCell.empty()},40),quickView.unlockScroll()},bindCloseActions:function(){quickView.$container.on("click",quickView.hide),e("body").on("keyup",quickView.processKeyUp)},removeCloseActions:function(){quickView.$container.off("click",quickView.hide),e("body").off("keyup",quickView.processKeyUp)},processKeyUp:function(e){27===e.which&&quickView.hide()},lockScroll:function(){var e=[self.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft,self.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop],n=jQuery("html");n.data("scroll-position",e),n.data("previous-overflow",n.css("overflow")),n.css("overflow","hidden"),window.scrollTo(e[0],e[1]),this.isScrollLocked=!0},unlockScroll:function(){if(!this.isScrollLocked)return!1;var e=jQuery("html"),n=e.data("scroll-position");e.css("overflow",e.data("previous-overflow")),window.scrollTo(n[0],n[1])}},e(document).ready(function(){quickView.initialize()})}(jQuery)}else console.log("Warning: quickView was already defined so we could not load chapmanU/web-components quickView!");!function(e){var n={initialize:function(){e("body").on("click","a",n.trackAction)},trackAction:function(n){var t=e(n.currentTarget).attr("data-analytics-event");if(void 0===t)return!0;var i=t.split(","),o=e(n.currentTarget).attr("href")||!1,c=n.metaKey||n.ctrlKey,r=i[0]||"Call to Action Link",a=i[1]||e(n.currentTarget).html()||"Click",u=i[2]||e(n.currentTarget).attr("href")||void 0,s=parseInt(i[3])||void 0;if("undefined"!=typeof ga)ga("send","event",r,a,u,s);else if("undefined"!=typeof _gaq){if(_gaq.push(["_trackEvent",r,a,u,s]),o&&!c)return setTimeout(function(){window.location.href=o},250),n.preventDefault(),!1}else console.log("Google Analytics is not running, so no Google Analytics tracking data could be sent.")}};e(document).ready(function(){n.initialize()})}(jQuery),this.jQuery&&function(e){var n={show:5,url:"https://inside.chapman.edu/callback/meltwater",initialize:function(t){return n.$container=e("#meltwater"),n.$container.length?(t&&(n.show=t),n.$moreButton=e("<button>Load more...</button>").hide(),n.$moreButton.on("click",n.more),n.$container.append("<ul></ul>"),n.$container.append(n.$moreButton),void n.getData()):!1},getData:function(){e.ajax({url:n.url,success:function(e){n.current=0,n.data=e.feeds.feed.documents.document,n.processData(),console.log("There are "+n.data.length)},error:function(e,t){n.$container.append("<p>Sorry, news items could not be loaded.</p>"),console.log("An error occured fetching Meltwater news stories."),console.log(t)},dataType:"jsonp"})},processData:function(e){for(;this.current<this.show&&this.current<this.data.length;)this.addItem(this.current,e),this.current=this.current+1;this.data.length>this.current?n.$moreButton.show():n.$moreButton.fadeOut()},addItem:function(t,i){var o=n.data[t],c=o.createDate_mon2+"/"+o.createDate_day+"/"+o.createDate_year,r=e('<a href="'+o.url+'"></a>');r.append('<span class="date">'+c+"</span>"),r.append('<span class="title">'+o.title+"</span>"),o.sourcename&&r.append('<span class="sourcename">'+o.sourcename+"</span>"),o.subregion&&r.append('<span class="region">'+o.subregion+"</span>");var a=e("<li></li>").append(r);i>0&&a.hide(function(){a.fadeIn(i)}),n.$container.find("ul").append(a)},more:function(){n.show+=5,n.processData(500)}};e(document).ready(function(){n.initialize()})}(jQuery);