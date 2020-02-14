(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{385:function(t,e,o){"use strict";o(12),o(8),o(6),o(4),o(9);var r=o(21),n=o(2),c=(o(386),o(3)),l=o(85),h=o(44),v=o(15),d=o(108),f=o(13),m=o(23),x=o(39),y=o(107),_=o(5);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(c.a)(v.a,y.a,x.a,f.a,Object(d.a)("chipGroup"),Object(m.b)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return O({"v-chip":!0},x.a.options.computed.classes.call(this),{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses,{},this.sizeableClasses,{},this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(x.a.options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this;[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]].forEach((function(e){var o=Object(r.a)(e,2),n=o[0],c=o[1];t.$attrs.hasOwnProperty(n)&&Object(_.a)(n,c,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(h.a,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(l.b,t)},genClose:function(){var t=this;return this.$createElement(h.a,{staticClass:"v-chip__close",props:{right:!0},on:{click:function(e){e.stopPropagation(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],o=this.generateRouteLink(),r=o.tag,data=o.data;data.attrs=O({},data.attrs,{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:data.attrs.tabindex}),data.directives.push({name:"show",value:this.active}),data=this.setBackgroundColor(this.color,data);var n=this.textColor||this.outlined&&this.color;return t(r,this.setTextColor(n,data),e)}})},386:function(t,e,o){var content=o(387);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(11).default)("197fcea4",content,!0,{sourceMap:!1})},387:function(t,e,o){(e=o(10)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Rubik:400,500,700&display=swap);"]),e.push([t.i,'.v-chip:not(.v-chip--outlined).accent,.v-chip:not(.v-chip--outlined).error,.v-chip:not(.v-chip--outlined).info,.v-chip:not(.v-chip--outlined).primary,.v-chip:not(.v-chip--outlined).secondary,.v-chip:not(.v-chip--outlined).success,.v-chip:not(.v-chip--outlined).warning{color:#fff}.theme--light.v-chip{border-color:rgba(0,0,0,.12);color:rgba(0,0,0,.87)}.theme--light.v-chip:not(.v-chip--active){background:#e0e0e0}.theme--light.v-chip:hover:before{opacity:.04}.theme--light.v-chip--active:before,.theme--light.v-chip--active:hover:before,.theme--light.v-chip:focus:before{opacity:.12}.theme--light.v-chip--active:focus:before{opacity:.16}.theme--dark.v-chip{border-color:hsla(0,0%,100%,.12);color:#fff}.theme--dark.v-chip:not(.v-chip--active){background:#555}.theme--dark.v-chip:hover:before{opacity:.08}.theme--dark.v-chip--active:before,.theme--dark.v-chip--active:hover:before,.theme--dark.v-chip:focus:before{opacity:.24}.theme--dark.v-chip--active:focus:before{opacity:.32}.v-chip{-webkit-box-align:center;align-items:center;cursor:default;display:-webkit-inline-box;display:inline-flex;line-height:20px;max-width:100%;outline:none;overflow:hidden;padding:0 12px;position:relative;text-decoration:none;-webkit-transition-duration:.28s;transition-duration:.28s;-webkit-transition-property:box-shadow,opacity;transition-property:box-shadow,opacity;-webkit-transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(.4,0,.2,1);vertical-align:middle;white-space:nowrap}.v-chip:before{background-color:currentColor;bottom:0;border-radius:inherit;content:"";left:0;opacity:0;position:absolute;pointer-events:none;right:0;top:0}.v-chip .v-avatar{height:24px!important;min-width:24px!important;width:24px!important}.v-chip .v-icon{font-size:24px}.v-application--is-ltr .v-chip .v-avatar--left,.v-application--is-ltr .v-chip .v-icon--left{margin-left:-6px;margin-right:8px}.v-application--is-ltr .v-chip .v-avatar--right,.v-application--is-ltr .v-chip .v-icon--right,.v-application--is-rtl .v-chip .v-avatar--left,.v-application--is-rtl .v-chip .v-icon--left{margin-left:8px;margin-right:-6px}.v-application--is-rtl .v-chip .v-avatar--right,.v-application--is-rtl .v-chip .v-icon--right{margin-left:-6px;margin-right:8px}.v-chip:not(.v-chip--no-color) .v-icon{color:inherit}.v-chip__close.v-icon{font-size:18px;max-height:18px;max-width:18px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-application--is-ltr .v-chip__close.v-icon.v-icon--right{margin-right:-4px}.v-application--is-rtl .v-chip__close.v-icon.v-icon--right{margin-left:-4px}.v-chip__close.v-icon:active,.v-chip__close.v-icon:focus,.v-chip__close.v-icon:hover{opacity:.72}.v-chip__content{-webkit-box-align:center;align-items:center;display:-webkit-inline-box;display:inline-flex;height:100%;max-width:100%}.v-chip--active .v-icon{color:inherit}.v-chip--link:before{-webkit-transition:opacity .3s cubic-bezier(.25,.8,.5,1);transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-chip--link:focus:before{opacity:.32}.v-chip--clickable{cursor:pointer}.v-chip--clickable:active{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-chip--disabled{opacity:.4;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip__filter{max-width:24px}.v-chip__filter.v-icon{color:inherit}.v-chip__filter.expand-x-transition-enter,.v-chip__filter.expand-x-transition-leave-active{margin:0}.v-chip--pill .v-chip__filter{margin-right:0 16px 0 0}.v-chip--pill .v-avatar{height:32px!important;width:32px!important}.v-application--is-ltr .v-chip--pill .v-avatar--left{margin-left:-12px}.v-application--is-ltr .v-chip--pill .v-avatar--right,.v-application--is-rtl .v-chip--pill .v-avatar--left{margin-right:-12px}.v-application--is-rtl .v-chip--pill .v-avatar--right{margin-left:-12px}.v-chip--label{border-radius:4px!important}.v-chip.v-chip--outlined{border-width:thin;border-style:solid}.v-chip.v-chip--outlined:not(.v-chip--active):before{opacity:0}.v-chip.v-chip--outlined.v-chip--active:before{opacity:.08}.v-chip.v-chip--outlined .v-icon{color:inherit}.v-chip.v-chip--outlined.v-chip.v-chip{background-color:transparent!important}.v-chip.v-chip--selected{background:transparent}.v-chip.v-chip--selected:after{opacity:.28}.v-chip.v-size--x-small{border-radius:8px;font-size:10px;height:16px}.v-chip.v-size--small{border-radius:12px;font-size:12px;height:24px}.v-chip.v-size--default{border-radius:16px;font-size:14px;height:32px}.v-chip.v-size--large{border-radius:27px;font-size:16px;height:54px}.v-chip.v-size--x-large{border-radius:33px;font-size:18px;height:66px}',""]),t.exports=e},388:function(t,e,o){"use strict";o(12),o(8),o(56),o(27),o(34);var r=o(2),n=(o(66),o(203),o(37),o(6),o(4),o(9),o(14),o(152),o(1)),c=o(63),l=o(0);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var v=["sm","md","lg","xl"],d=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),f=v.reduce((function(t,e){return t["offset"+Object(l.B)(e)]={type:[String,Number],default:null},t}),{}),m=v.reduce((function(t,e){return t["order"+Object(l.B)(e)]={type:[String,Number],default:null},t}),{}),x={col:Object.keys(d),offset:Object.keys(f),order:Object.keys(m)};function y(t,e,o){var r=t;if(null!=o&&!1!==o){if(e){var n=e.replace(t,"");r+="-".concat(n)}return"col"!==t||""!==o&&!0!==o?(r+="-".concat(o)).toLowerCase():r.toLowerCase()}}var _=new Map;e.a=n.a.extend({name:"v-col",functional:!0,props:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({cols:{type:[Boolean,String,Number],default:!1}},d,{offset:{type:[String,Number],default:null}},f,{order:{type:[String,Number],default:null}},m,{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var o=e.props,data=e.data,n=e.children,l=(e.parent,"");for(var h in o)l+=String(o[h]);var v=_.get(l);return v||function(){var t,e;for(e in v=[],x)x[e].forEach((function(t){var r=o[t],n=y(e,t,r);n&&v.push(n)}));var n=v.some((function(t){return t.startsWith("col-")}));v.push((t={col:!n||!o.cols},Object(r.a)(t,"col-".concat(o.cols),o.cols),Object(r.a)(t,"offset-".concat(o.offset),o.offset),Object(r.a)(t,"order-".concat(o.order),o.order),Object(r.a)(t,"align-self-".concat(o.alignSelf),o.alignSelf),t)),_.set(l,v)}(),t(o.tag,Object(c.a)(data,{class:v}),n)}})},636:function(t,e,o){"use strict";o.r(e);var r={methods:{haha:function(){console.log("haha")}}},n=o(18),c=o(28),l=o.n(c),h=o(141),v=o(385),d=o(388),f=o(86),m=o(87),x=o(143),y=o(16),_=o(144),w=o(375),O=o(376),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("v-row",t._l(4,(function(i){return o("v-col",{key:i,attrs:{align:"center",cols:"12",md:"4",lg:"3"}},[o("b-card",{attrs:{to:{name:"test"},ripple:!1,link:""}})],1)})),1),t._v(" "),o("v-row",[o("v-col",{attrs:{cols:"12",md:"8"}},[o("v-list-item",{staticClass:"px-0"},[o("v-list-item-content",[o("v-list-item-title",{staticClass:"font-weight-bold headline"},[t._v("\n            Discussion & Articles\n          ")]),t._v(" "),o("v-list-item-subtitle",[o("b-button-text",{attrs:{to:{name:"discussion"}},on:{click:t.haha}},[t._v("\n              View all 123 discussions\n            ")])],1)],1),t._v(" "),o("v-list-item-action",[o("b-button",{attrs:{color:"primary",elevation:"0",rounded:""}},[t._v("\n            Create New Post\n          ")])],1)],1),t._v(" "),t._l(4,(function(i){return[o("v-list-item",{key:i,staticClass:"mb-3 px-0"},[o("v-list-item-avatar",{attrs:{size:"50"}},[o("v-avatar",{attrs:{size:"50"}},[o("img",{attrs:{src:"https://cdn.vuetifyjs.com/images/john.jpg",alt:"John"}})])],1),t._v(" "),o("v-list-item-content",{staticClass:"py-0"},[o("b-button-text",{attrs:{to:{name:"test"}}},[o("v-list-item-title",{staticClass:"font-weight-bold title"},[t._v("\n                Photo correlations\n              ")])],1),t._v(" "),o("v-list-item-subtitle",{staticClass:"mb-2"},[o("span",{staticClass:"mr-2"},[o("b-button-text",[t._v("Author")]),t._v(" replied a day ago\n              ")],1),t._v(" "),o("span",{staticClass:"mr-2"},[o("v-icon",[t._v("mdi-chat-outline")]),t._v(" "),o("span",[t._v("114")])],1),t._v(" "),o("span",{staticClass:"mr-2"},[o("v-icon",[t._v("mdi-eye")]),t._v(" "),o("span",[t._v("17")])],1)]),t._v(" "),o("v-list-item-subtitle",[o("v-chip",{attrs:{color:"orange",label:"",small:"","text-color":"white"}},[t._v("\n                Tags\n              ")]),t._v(" "),o("v-chip",{attrs:{color:"pink",label:"",small:"","text-color":"white"}},[t._v("\n                Business\n              ")])],1)],1),t._v(" "),o("v-list-item-action",{staticClass:"mb-0"},[o("v-spacer"),t._v(" "),o("v-list-item-action-text",[o("span",{staticClass:"mr-2"},[t._v("6 hours ago")])])],1)],1)]}))],2)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VAvatar:h.a,VChip:v.a,VCol:d.a,VIcon:f.a,VListItem:m.a,VListItemAction:x.a,VListItemActionText:y.a,VListItemAvatar:_.a,VListItemContent:y.b,VListItemSubtitle:y.c,VListItemTitle:y.d,VRow:w.a,VSpacer:O.a})}}]);