(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{189:function(e,t,r){var content=r(191);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(51).default)("7dc46934",content,!0,{sourceMap:!1})},190:function(e,t,r){"use strict";var o=r(189);r.n(o).a},191:function(e,t,r){(t=r(50)(!1)).push([e.i,"form#yts-client-search-form{background:#171717}form#yts-client-search-form .form-wrapper{padding:3rem 10rem;font-size:1.2rem;color:#5a5a5a}form#yts-client-search-form .form-wrapper>label{display:block;font-size:1.5rem;font-weight:700}form#yts-client-search-form .form-wrapper [role=group]{border:0;padding:0}form#yts-client-search-form .form-wrapper [role=group].search_query_main{display:flex}form#yts-client-search-form .form-wrapper [role=group].search_query_main [type=text]{flex-basis:85%}form#yts-client-search-form .form-wrapper [role=group].search_query_main [type=submit]{flex-basis:15%}form#yts-client-search-form .form-wrapper [role=group].search_query_options{display:flex}form#yts-client-search-form .form-wrapper [role=group].search_query_options .field-wrapper{float:left;flex:1;margin-right:.625rem}form#yts-client-search-form .form-wrapper [role=group].search_query_options .field-wrapper label{font-size:.826rem;font-weight:700}form#yts-client-search-form .form-wrapper [role=group].search_query_options .field-wrapper>*{display:block}form#yts-client-search-form .form-wrapper input[type=text],form#yts-client-search-form .form-wrapper select{background:#282828;color:#7493a2;border:none;padding:.625rem;border-radius:.526rem;margin-top:.125rem}form#yts-client-search-form .form-wrapper select{width:100%;padding:.526rem;-moz-appearance:none;-webkit-appearance:none}form#yts-client-search-form .form-wrapper select::-ms-expand{display:none}form#yts-client-search-form .form-wrapper [type=submit]{background:#6ac045;color:#fff;font-weight:700;margin:0 .75rem;border-radius:.526rem;border:none}form#yts-client-search-form .form-wrapper>*{padding-bottom:1rem!important}",""]),e.exports=t},194:function(e,t,r){var content=r(203);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(51).default)("6e400a9f",content,!0,{sourceMap:!1})},197:function(e,t,r){"use strict";r(49),r(27);var o=r(2),n=r(25),v=r.n(n),l={name:"AppSearchForm",data:function(){return{query_term:"",query_options:{quality:"all",genre:"all",minimum_rating:0,year:0,rating:0,language:"all",order_by:"latest",with_rt_ratings:!0}}},methods:{search:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r,o,n,param,l,_;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$config.YTS_API,o=e.query_term,n=e.query_options,e,param=new e.$search_param({query_term:o,quality:n.quality,genre:n.genre,minimum_rating:n.rating}),l=param.gen_params("list_movies.json"),t.next=8,v.a.get(r.replace(/endpoint/,l));case 8:_=t.sent,e.$emit("search-result",{result:_.data.data,queryString:l});case 10:case"end":return t.stop()}}),t)})))()}},computed:{},watch:{}},_=(r(190),r(11)),component=Object(_.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{attrs:{id:"yts-client-search-form",autocomplete:"off"},on:{submit:function(t){return t.preventDefault(),e.search(t)}}},[r("div",{staticClass:"form-wrapper"},[r("label",{attrs:{for:"search_keyword"}},[e._v("\n      Search Term:\n    ")]),e._v(" "),r("div",{staticClass:"search_query_main",attrs:{role:"group"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.query_term,expression:"query_term"}],attrs:{type:"text",id:"search_keyword",name:"keyword",placeholder:"Search movies"},domProps:{value:e.query_term},on:{input:function(t){t.target.composing||(e.query_term=t.target.value)}}}),e._v(" "),r("input",{attrs:{type:"submit",value:"Search"}})]),e._v(" "),r("div",{staticClass:"search_query_options",attrs:{role:"group"}},[r("div",{staticClass:"field-wrapper",attrs:{id:"movie_quality"}},[r("label",{attrs:{for:"movie_quality_select"}},[e._v("Quality:")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.query_options.quality,expression:"query_options.quality"}],attrs:{id:"movie_quality_select",name:"quality"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.query_options,"quality",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"all"}},[e._v("All")]),e._v(" "),r("option",{attrs:{value:"720p"}},[e._v("720p")]),e._v(" "),r("option",{attrs:{value:"1080p"}},[e._v("1080p")]),e._v(" "),r("option",{attrs:{value:"2160p"}},[e._v("2160p")]),e._v(" "),r("option",{attrs:{value:"3D"}},[e._v("3D")])])]),e._v(" "),r("div",{staticClass:"field-wrapper",attrs:{id:"movie_genre"}},[r("label",{attrs:{for:"movie_genre_select"}},[e._v("Genre:")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.query_options.genre,expression:"query_options.genre"}],attrs:{id:"movie_genre_select",name:"genre"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.query_options,"genre",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"all"}},[e._v("All")]),e._v(" "),r("option",{attrs:{value:"action"}},[e._v("Action")]),e._v(" "),r("option",{attrs:{value:"adventure"}},[e._v("Adventure")]),e._v(" "),r("option",{attrs:{value:"animation"}},[e._v("Animation")]),e._v(" "),r("option",{attrs:{value:"biography"}},[e._v("Biography")]),e._v(" "),r("option",{attrs:{value:"comedy"}},[e._v("Comedy")]),e._v(" "),r("option",{attrs:{value:"crime"}},[e._v("Crime")]),e._v(" "),r("option",{attrs:{value:"documentary"}},[e._v("Documentary")]),e._v(" "),r("option",{attrs:{value:"drama"}},[e._v("Drama")]),e._v(" "),r("option",{attrs:{value:"family"}},[e._v("Family")]),e._v(" "),r("option",{attrs:{value:"fantasy"}},[e._v("Fantasy")]),e._v(" "),r("option",{attrs:{value:"film-noir"}},[e._v("Film-Noir")]),e._v(" "),r("option",{attrs:{value:"game-show"}},[e._v("Game-Show")]),e._v(" "),r("option",{attrs:{value:"history"}},[e._v("History")]),e._v(" "),r("option",{attrs:{value:"horror"}},[e._v("Horror")]),e._v(" "),r("option",{attrs:{value:"music"}},[e._v("Music")]),e._v(" "),r("option",{attrs:{value:"musical"}},[e._v("Musical")]),e._v(" "),r("option",{attrs:{value:"mystery"}},[e._v("Mystery")]),e._v(" "),r("option",{attrs:{value:"news"}},[e._v("News")]),e._v(" "),r("option",{attrs:{value:"reality-tv"}},[e._v("Reality-TV")]),e._v(" "),r("option",{attrs:{value:"romance"}},[e._v("Romance")]),e._v(" "),r("option",{attrs:{value:"sci-fi"}},[e._v("Sci-Fi")]),e._v(" "),r("option",{attrs:{value:"sport"}},[e._v("Sport")]),e._v(" "),r("option",{attrs:{value:"talk-show"}},[e._v("Talk-Show")]),e._v(" "),r("option",{attrs:{value:"thriller"}},[e._v("Thriller")]),e._v(" "),r("option",{attrs:{value:"war"}},[e._v("War")]),e._v(" "),r("option",{attrs:{value:"western"}},[e._v("Western")])])]),e._v(" "),r("div",{staticClass:"field-wrapper",attrs:{id:"movie_rating"}},[r("label",{attrs:{for:"movie_rating_select"}},[e._v("Rating:")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.query_options.rating,expression:"query_options.rating"}],attrs:{id:"movie_rating_select",name:"rating"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.query_options,"rating",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"0"}},[e._v("All")]),e._v(" "),r("option",{attrs:{value:"9"}},[e._v("9+")]),e._v(" "),r("option",{attrs:{value:"8"}},[e._v("8+")]),e._v(" "),r("option",{attrs:{value:"7"}},[e._v("7+")]),e._v(" "),r("option",{attrs:{value:"6"}},[e._v("6+")]),e._v(" "),r("option",{attrs:{value:"5"}},[e._v("5+")]),e._v(" "),r("option",{attrs:{value:"4"}},[e._v("4+")]),e._v(" "),r("option",{attrs:{value:"3"}},[e._v("3+")]),e._v(" "),r("option",{attrs:{value:"2"}},[e._v("2+")]),e._v(" "),r("option",{attrs:{value:"1"}},[e._v("1+")])])]),e._v(" "),r("div",{staticClass:"field-wrapper",attrs:{id:"movie_year"}},[r("label",{attrs:{for:"movie_year_select"}},[e._v("Year:")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.query_options.year,expression:"query_options.year"}],attrs:{id:"movie_year_select",name:"year"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.query_options,"year",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"0"}},[e._v("All")]),e._v(" "),r("option",{attrs:{value:"2020"}},[e._v("2020")]),e._v(" "),r("option",{attrs:{value:"2019"}},[e._v("2019")]),e._v(" "),r("option",{attrs:{value:"2015-2018"}},[e._v("2015-2018")]),e._v(" "),r("option",{attrs:{value:"2010-2014"}},[e._v("2010-2014")]),e._v(" "),r("option",{attrs:{value:"2000-2009"}},[e._v("2000-2009")]),e._v(" "),r("option",{attrs:{value:"1990-1999"}},[e._v("1990-1999")]),e._v(" "),r("option",{attrs:{value:"1980-1989"}},[e._v("1980-1989")]),e._v(" "),r("option",{attrs:{value:"1970-1979"}},[e._v("1970-1979")]),e._v(" "),r("option",{attrs:{value:"1900-1969"}},[e._v("1900-1969")])])]),e._v(" "),r("div",{staticClass:"field-wrapper",attrs:{id:"movie_language"}},[r("label",{attrs:{for:"movie_lang_select"}},[e._v("Language:")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.query_options.language,expression:"query_options.language"}],attrs:{id:"movie_lang_select",name:"language"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.query_options,"language",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"all",selected:"selected"}},[e._v("All")]),e._v(" "),r("option",{attrs:{value:"en"}},[e._v("English")]),e._v(" "),r("option",{attrs:{value:"foreign"}},[e._v("Foreign")]),e._v(" "),r("option",{attrs:{value:"ja"}},[e._v("Japanese")]),e._v(" "),r("option",{attrs:{value:"fr"}},[e._v("French")]),e._v(" "),r("option",{attrs:{value:"de"}},[e._v("German")]),e._v(" "),r("option",{attrs:{value:"zh"}},[e._v("Chinese")]),e._v(" "),r("option",{attrs:{value:"it"}},[e._v("Italian")]),e._v(" "),r("option",{attrs:{value:"es"}},[e._v("Spanish")]),e._v(" "),r("option",{attrs:{value:"cn"}},[e._v("Cantonese")]),e._v(" "),r("option",{attrs:{value:"ko"}},[e._v("Korean")]),e._v(" "),r("option",{attrs:{value:"hi"}},[e._v("Hindi")]),e._v(" "),r("option",{attrs:{value:"sv"}},[e._v("Swedish")]),e._v(" "),r("option",{attrs:{value:"ru"}},[e._v("Russian")]),e._v(" "),r("option",{attrs:{value:"pl"}},[e._v("Polish")]),e._v(" "),r("option",{attrs:{value:"pt"}},[e._v("Portuguese")]),e._v(" "),r("option",{attrs:{value:"da"}},[e._v("Danish")]),e._v(" "),r("option",{attrs:{value:"no"}},[e._v("Norwegian")]),e._v(" "),r("option",{attrs:{value:"nl"}},[e._v("Dutch")]),e._v(" "),r("option",{attrs:{value:"cs"}},[e._v("Czech")]),e._v(" "),r("option",{attrs:{value:"fi"}},[e._v("Finnish")]),e._v(" "),r("option",{attrs:{value:"th"}},[e._v("Thai")]),e._v(" "),r("option",{attrs:{value:"tr"}},[e._v("Turkish")]),e._v(" "),r("option",{attrs:{value:"fa"}},[e._v("Persian")]),e._v(" "),r("option",{attrs:{value:"el"}},[e._v("Greek")]),e._v(" "),r("option",{attrs:{value:"id"}},[e._v("Indonesian")]),e._v(" "),r("option",{attrs:{value:"ar"}},[e._v("Arabic")]),e._v(" "),r("option",{attrs:{value:"he"}},[e._v("Hebrew")]),e._v(" "),r("option",{attrs:{value:"hu"}},[e._v("Hungarian")]),e._v(" "),r("option",{attrs:{value:"tl"}},[e._v("Tagalog")]),e._v(" "),r("option",{attrs:{value:"te"}},[e._v("Telugu")]),e._v(" "),r("option",{attrs:{value:"ta"}},[e._v("Tamil")]),e._v(" "),r("option",{attrs:{value:"ro"}},[e._v("Romanian")]),e._v(" "),r("option",{attrs:{value:"is"}},[e._v("Icelandic")]),e._v(" "),r("option",{attrs:{value:"sr"}},[e._v("Serbian")]),e._v(" "),r("option",{attrs:{value:"bn"}},[e._v("Bangla")]),e._v(" "),r("option",{attrs:{value:"et"}},[e._v("Estonian")]),e._v(" "),r("option",{attrs:{value:"ms"}},[e._v("Malay")]),e._v(" "),r("option",{attrs:{value:"ur"}},[e._v("Urdu")]),e._v(" "),r("option",{attrs:{value:"vi"}},[e._v("Vietnamese")]),e._v(" "),r("option",{attrs:{value:"ca"}},[e._v("Catalan")]),e._v(" "),r("option",{attrs:{value:"xx"}},[e._v("xx")]),e._v(" "),r("option",{attrs:{value:"eu"}},[e._v("Basque")]),e._v(" "),r("option",{attrs:{value:"uk"}},[e._v("Ukrainian")]),e._v(" "),r("option",{attrs:{value:"af"}},[e._v("Afrikaans")]),e._v(" "),r("option",{attrs:{value:"la"}},[e._v("Latin")]),e._v(" "),r("option",{attrs:{value:"yi"}},[e._v("Yiddish")]),e._v(" "),r("option",{attrs:{value:"aa"}},[e._v("Afar")]),e._v(" "),r("option",{attrs:{value:"mi"}},[e._v("Maori")]),e._v(" "),r("option",{attrs:{value:"kn"}},[e._v("Kannada")]),e._v(" "),r("option",{attrs:{value:"ka"}},[e._v("Georgian")]),e._v(" "),r("option",{attrs:{value:"ab"}},[e._v("Abkhazian")]),e._v(" "),r("option",{attrs:{value:"ml"}},[e._v("Malayalam")]),e._v(" "),r("option",{attrs:{value:"sw"}},[e._v("Swahili")]),e._v(" "),r("option",{attrs:{value:"sk"}},[e._v("Slovak")]),e._v(" "),r("option",{attrs:{value:"os"}},[e._v("Ossetic")]),e._v(" "),r("option",{attrs:{value:"nb"}},[e._v("Norwegian Bokmål")]),e._v(" "),r("option",{attrs:{value:"mr"}},[e._v("Marathi")]),e._v(" "),r("option",{attrs:{value:"mn"}},[e._v("Mongolian")]),e._v(" "),r("option",{attrs:{value:"mk"}},[e._v("Macedonian")]),e._v(" "),r("option",{attrs:{value:"lv"}},[e._v("Latvian")]),e._v(" "),r("option",{attrs:{value:"km"}},[e._v("Khmer")]),e._v(" "),r("option",{attrs:{value:"ga"}},[e._v("Irish")]),e._v(" "),r("option",{attrs:{value:"bs"}},[e._v("Bosnian")])])]),e._v(" "),r("div",{staticClass:"field-wrapper",attrs:{id:"movie_orderby"}},[r("label",{attrs:{for:"movie_orderby_select"}},[e._v("Order By:")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.query_options.order_by,expression:"query_options.order_by"}],attrs:{id:"movie_orderby_select",name:"orderby"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.$set(e.query_options,"order_by",t.target.multiple?r:r[0])}}},[r("option",{attrs:{value:"latest"}},[e._v("Latest")]),e._v(" "),r("option",{attrs:{value:"oldest"}},[e._v("Oldest")]),e._v(" "),r("option",{attrs:{value:"featured"}},[e._v("Featured")]),e._v(" "),r("option",{attrs:{value:"seeds"}},[e._v("Seeds")]),e._v(" "),r("option",{attrs:{value:"peers"}},[e._v("Peers")]),e._v(" "),r("option",{attrs:{value:"year"}},[e._v("Year")]),e._v(" "),r("option",{attrs:{value:"rating"}},[e._v("Rating")]),e._v(" "),r("option",{attrs:{value:"likes"}},[e._v("Likes")]),e._v(" "),r("option",{attrs:{value:"alphabetical"}},[e._v("Alphabetical")]),e._v(" "),r("option",{attrs:{value:"downloads"}},[e._v("Downloads")])])])])])])}),[],!1,null,null,null);t.a=component.exports},202:function(e,t,r){"use strict";var o=r(194);r.n(o).a},203:function(e,t,r){(t=r(50)(!1)).push([e.i,"main#yts-client-trending-movies h3{text-align:center;margin-bottom:0}main#yts-client-trending-movies section#search_result ul{display:flex;list-style-type:none;flex-wrap:wrap;max-width:100%;padding:0;margin:auto 4rem}main#yts-client-trending-movies section#search_result ul li.movie-cover-card{flex-basis:20%;padding:1.5rem}main#yts-client-trending-movies section#search_result ul li.movie-cover-card .movie-cover-wrapper figure.movie-cover-content{margin:0 0 -1rem}main#yts-client-trending-movies section#search_result ul li.movie-cover-card .movie-cover-wrapper figure.movie-cover-content div{border:.3125rem solid #fff;border-radius:.375rem}main#yts-client-trending-movies section#search_result ul li.movie-cover-card .movie-cover-wrapper figure.movie-cover-content img{max-width:100%;vertical-align:middle;-o-object-fit:contain;object-fit:contain}main#yts-client-trending-movies section#search_result ul li.movie-cover-card .movie-cover-wrapper figure.movie-cover-content p{margin:0;padding:.125rem .125rem 0 0;font-size:.875rem;font-weight:700;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:10.5rem}main#yts-client-trending-movies section#search_result ul li.movie-cover-card .movie-cover-wrapper figure.movie-cover-content time{font-size:.825rem;color:#839191}",""]),e.exports=t},209:function(e,t,r){"use strict";r.r(t);r(52),r(22),r(16),r(9),r(37);var o=r(17),n=(r(49),r(27),r(2)),v=r(197);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function _(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var c=_(_({},{asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$config.YTS_API,t.next=3,e.$axios.get(r.replace(/endpoint/,"list_movies.json?sort_by=download_count"));case 3:return o=t.sent,t.abrupt("return",{yts:o.data});case 5:case"end":return t.stop()}}),t)})))()}}),{},{components:{AppSearchForm:v.a},data:function(){return{cover:{srcset:function(e){return"small 480w medium 800w large 1280w".replace(/small/g,e.small_cover_image).replace(/medium/g,e.medium_cover_image).replace(/large/g,e.large_cover_image)},rerender:function(e,t){var img=t.target;setTimeout((function(){img.src=e.medium_cover_image}),1e3)}}}},methods:{create_link:function(e){return{name:"movies-id-name",params:{id:e.id,name:e.slug}}}},computed:{},watch:{}}),m=(r(202),r(11)),component=Object(m.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",{attrs:{id:"yts-client-trending-movies"}},[e._m(0),e._v(" "),r("section",{staticClass:"browse-movies movies",attrs:{id:"search_result"}},[r("ul",{attrs:{id:"movie-list-result"}},e._l(e.yts.data.movies,(function(t){return r("li",{key:t.id,staticClass:"movie-result-list movie-cover-card"},[r("nuxt-link",{staticClass:"movie-cover-wrapper",attrs:{to:e.create_link(t),title:t.title}},[r("figure",{staticClass:"movie-cover-content"},[r("div",{staticClass:"wrapper"},[r("img",{attrs:{alt:t.title_long,srcset:e.cover.srcset(t),sizes:"(max-width: 600px) 480px 800px 1280px",src:t.medium_cover_image},on:{error:function(r){return e.cover.rerender(t,r)}}})]),e._v(" "),r("figcaption",[r("p",[e._v(e._s(t.title))]),e._v(" "),r("time",{attrs:{datetime:t.year}},[e._v(e._s(t.year))])])])])],1)})),0)])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("h3",[t("a",{attrs:{href:"#"}},[this._v("24h YIFY Trending Movies")])])}],!1,null,null,null);t.default=component.exports}}]);