(function(t){function a(a){for(var i,o,s=a[0],c=a[1],l=a[2],d=0,m=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(a);while(m.length)m.shift()();return r.push.apply(r,l||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],i=!0,s=1;s<e.length;s++){var c=e[s];0!==n[c]&&(i=!1)}i&&(r.splice(a--,1),t=o(o.s=e[0]))}return t}var i={},n={app:0},r=[];function o(a){if(i[a])return i[a].exports;var e=i[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=i,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var i in t)o.d(e,i,function(a){return t[a]}.bind(null,i));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/arek-project/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=a,s=s.slice();for(var l=0;l<s.length;l++)a(s[l]);var u=c;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"06ff":function(t,a,e){t.exports=e.p+"img/arkadiusz_sztaba_2.8ca9cc1c.png"},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var i=e("2b0e"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("v-app",[e("Header"),e("v-alert",{staticClass:"mt-16 mb-n16 mb-0 rounded-0",attrs:{dismissible:"","colored-border":"",type:"info",elevation:"2",value:"",app:""}},[t._v(" Używamy cookies w celu świadczenia usług i statystyk. Brak zmiany ustawień przeglądarki oznacza, że będą one umieszczane na Twoim urządzeniu. "),e("v-btn",{attrs:{text:"",href:"https://www.kokoma.pl/jak-zmienic-ustawienia-cookies"}},[t._v(" Możesz zmienić te ustawienia.")])],1),e("router-view",{staticClass:"mt-16"},[e("Main")],1),e("Footer")],1)],1)},r=[],o=(e("d81d"),e("ac1f"),e("1276"),function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("nav",[i("v-app-bar",{staticClass:"supra-nav__header",attrs:{app:"","hide-on-scroll":"",flat:"",color:"rgba(46, 48, 71, 0.8)"}},[i("router-link",{attrs:{to:"/"}},[i("v-img",{attrs:{src:e("b0fe"),alt:"Supra Finanse logo","max-height":"50px","max-width":"100px",contain:""}})],1),i("v-toolbar-title",[i("router-link",{attrs:{to:"/"}},[i("div",{staticClass:"supra-header__title white--text"},[t._v(" Supra Finanse ")])])],1),i("v-spacer"),i("v-btn",t._g(t._b({staticClass:"supra-header__button",attrs:{dark:"","exact-active-class":"supra-header__button--active",text:!0,to:"/"}},"v-btn",t.attrs,!1),t.on),[t._v(" Strona Główna ")]),i("v-btn",t._g(t._b({staticClass:"supra-header__button",attrs:{dark:"","exact-active-class":"supra-header__button--active",text:!0,to:"omnie"}},"v-btn",t.attrs,!1),t.on),[t._v(" O mnie ")]),i("v-btn",t._g(t._b({staticClass:"supra-header__button",attrs:{dark:"","exact-active-class":"supra-header__button--active",text:!0,to:"oferta"}},"v-btn",t.attrs,!1),t.on),[t._v(" Oferta ")]),i("v-btn",t._g(t._b({staticClass:"supra-header__button  mr-16",attrs:{dark:"","exact-active-class":"supra-header__button--active",text:!0,to:"kontakt"}},"v-btn",t.attrs,!1),t.on),[t._v(" Kontakt ")]),t._l(t.icons,(function(a){return i("v-btn",{key:a.social,staticClass:"mx-4 white--text",attrs:{icon:"",href:a.href,target:"_blank"}},[i("v-icon",{attrs:{size:"24px"}},[t._v(t._s(a.social))])],1)})),i("v-app-bar-nav-icon",{staticClass:"d-lg-none .d-xl-none"})],2)],1)}),s=[],c={name:"Header",components:{},props:{msg:String},data:function(){return{icons:[{social:"mdi-linkedin",href:"https://www.linkedin.com/in/arkadiusz-sztaba-6b70a5aa/"},{social:"mdi-facebook",href:"https://www.facebook.com/arkadiusz.sztaba.1"},{social:"mdi-twitter",href:"https://twitter.com/SztabaArek"}]}}},l=c,u=e("2877"),d=e("6544"),m=e.n(d),p=e("40dc"),v=e("5bc1"),f=e("8336"),w=e("132d"),y=e("adda"),b=e("2fa4"),h=e("2a7f"),k=Object(u["a"])(l,o,s,!1,null,null,null),z=k.exports;m()(k,{VAppBar:p["a"],VAppBarNavIcon:v["a"],VBtn:f["a"],VIcon:w["a"],VImg:y["a"],VSpacer:b["a"],VToolbarTitle:h["a"]});var x=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-main",{staticClass:"pt-0"},[e("v-container",{staticClass:"supra-main__hero fill-height",attrs:{fluid:""}},[e("Hero")],1),e("v-container",{staticClass:"supra-main__cards d-flex flex-column align-center px-0 my-10",attrs:{fluid:""}},[e("v-row",[e("v-col",{staticClass:"d-flex flex-column align-center"},[e("v-subheader",{staticClass:"text-h2 font-weight-medium mt-10"},[t._v("Supra Finanse")]),e("v-subheader",{staticClass:"text-h4 font-weight-regular my-5"},[t._v("doradztwo finansowe")]),e("v-divider",{staticClass:"supra-main__divider mt-16"})],1)],1),e("v-row",[e("v-col",{staticClass:"text-left text-h5 mx-auto",attrs:{cols:"12",md:"8"}},[e("p",[t._v("Supra Finanse to firma doradztwa finansowego. Specjalizuje się w dostarczaniu kompleksowych usług finansowych dla przedsiębiorstw i klienta indywidualnego. ")]),e("p",[t._v("Niezależnie od tego, czego potrzebujesz, pomogę Ci, aby Twoje plany stały się rzeczywistością. ")]),e("p",[t._v("Na rynku finansowym działam od kilkunastu lat, i to doświadczenie pozwala mi na skuteczne, szybkie i dobrane do aktualnych potrzeb klientów, pozyskiwanie najatrakcyjniejszych ofert kredytów firmowych, konsumenckich, hipotecznych, leasingu, faktoringu czy ubezpieczeń.")]),e("p",[t._v("Spotkajmy się, aby porozmawiać o Twoich potrzebach finansowych.")])])],1)],1),e("v-container",{staticClass:"supra-main__call-to-action d-flex flex-column align-center justify-center my-10",attrs:{fluid:""}},[e("v-subheader",{staticClass:"supra-main__subheader text-h2 my-10 white--text font-weight-medium",attrs:{height:"15vh"}},[t._v(" Chcesz wiedzieć więcej? Potrzebujesz pomocy? ")]),e("v-btn",{staticClass:"black--text text-h6 text-none rounded-0",attrs:{large:"",elevation:"0",width:"25vw",height:"8vh",to:"kontakt"}},[t._v(" Wypełnij formularz a bezpłatnie i bezpośrednio "),e("br"),t._v(" skontaktuję się z Tobą")])],1),e("v-container",{staticClass:"supra-main__text-content d-flex flex-column align-center my-10"},[e("v-row",[e("v-subheader",{staticClass:"text-h2 font-weight-medium my-10"},[t._v(" Oferta")])],1),e("v-row",t._l(t.cards,(function(a){return e("v-col",{key:a.title,attrs:{cols:"12",md:"3"}},[e("v-hover",{scopedSlots:t._u([{key:"default",fn:function(i){var n=i.hover;return[e("v-card",{staticClass:"pa-5",class:n?"white--text":"black--text",attrs:{hover:"","min-height":"35vh",color:n?"rgba(46, 48, 71, 0.8)":"white"}},[e("div",{staticClass:"supra-main__bullet mt-4"}),e("div",{staticClass:"supra-main__content d-flex flex-column justify-space-between ml-6 my-n10"},[e("v-card-title",[t._v(t._s(a.title))]),e("v-card-text",[e("p",{staticClass:"text-left"},[t._v(" "+t._s(a.text)+" ")])]),e("v-card-actions",{staticClass:"mt-n8"},[e("v-btn",{attrs:{text:"",color:n?"#3bbb9a":"black--text"}},[t._v("Więcej")])],1)],1)])]}}],null,!0)})],1)})),1)],1)],1)],1)},_=[],g=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{staticClass:"supra-hero__container",attrs:{"fill-height":"",fluid:""}},[e("v-carousel",{attrs:{height:"100%",cycle:"",continuous:"",progress:"","hide-delimiter-background":""}},t._l(t.items,(function(a,i){return e("v-carousel-item",{key:i,staticClass:"supra-hero__item",attrs:{src:a.src,transition:"slide-x-transition"}},[e("v-sheet",{staticClass:"d-flex transparent align-center",attrs:{height:"100%"}},[e("v-card",{staticClass:"transparent ml-16",attrs:{"max-height":"30vh","max-width":"50vw",elevation:"0"}},[e("v-card-title",{staticClass:"text-h2 align-self-start text-left justify-start font-weight-medium"},[t._v(" "+t._s(a.title)+" ")]),e("v-card-actions",{staticClass:"justify-start"},[e("v-btn",{staticClass:"black--text text-h5 rounded-0",attrs:{outlined:"",large:"",width:"15vw",height:"5vh",color:"white",to:"kontakt"}},[t._v(t._s(a.button))])],1)],1)],1)],1)})),1),e("div",{staticClass:"supra-hero__arrow"},[e("v-icon",{staticClass:"white--text",attrs:{large:""}},[t._v("mdi-arrow-down ")])],1)],1)},j=[],C=e("b6fb"),V=e.n(C),S={name:"Hero",data:function(){return{items:[{src:V.a,title:"Porozmawiajmy \n o Twoich potrzebach \n finansowych",button:"Spotkajmy się"}]}}},O=S,T=e("b0af"),P=e("99d9"),B=e("5e66"),F=e("3e35"),$=e("a523"),A=e("8dd9"),q=Object(u["a"])(O,g,j,!1,null,null,null),E=q.exports;m()(q,{VBtn:f["a"],VCard:T["a"],VCardActions:P["a"],VCardTitle:P["d"],VCarousel:B["a"],VCarouselItem:F["a"],VContainer:$["a"],VIcon:w["a"],VSheet:A["a"]});var I={name:"Main",components:{Hero:E},data:function(){return{cards:[{title:"Kredyt obrotowy",text:"na dowolny cel, to kredyt przeznaczony na finansowanie bieżącej działalności przedsiębiorstwa, umożliwiający zachowanie płynności finansowej Twojej firmy."},{title:"Kredyt inwestycyjny",text:"to kredyt przeznaczony na konkretne przedsięwzięcia inwestycyjne przedsiębiorstwa, między innymi na takie jak: zakup środków trwałych, samochodów, maszyn i urządzeń. "},{title:"Kredyt konsolidacyjny",text:"Kredyt konsolidacyjny to kredyt dzięki któremu łączysz kilka kredytów w jeden."},{title:"Kredyt na spłatę ZUS i US.",text:"Pomagam uzyskać finansowanie na spłatę zaległości wobec Zakładu Ubezpieczeń Społecznych lub Urzędu Skarbowego  instytucji."},{title:"Kredyt hipoteczny",text:"Wybór kredytu hipotecznego to nie lada wyzwanie. Pomogę Ci przebrnąć przez gąszcz ofert bankowych i wybrać najkorzystniejszą dla Ciebie lub Twojej firmy."},{title:"Leasing",text:"to umowa, na mocy której leasingodawca oddaje do użytkowania daną rzecz leasingobiorcy, w zamian za ustaloną w umowie opłatą uiszczaną co miesiąc."},{title:"Ubezpieczenie",text:"w trosce o bezpieczeństwo Twoje, Twoich bliskich, Twojego majątku i Twojego biznesu współpracuję z topowymi Towarzystwami Ubezpieczeniowymi."},{title:"Faktoring",text:"czyli finansowanie faktur to wykup przez podmiot świadczący usługę faktoringu (faktora) nieprzeterminowanych wierzytelności przedsiębiorstw (faktorantów)."}]}},props:{msg:String}},K=I,M=(e("8829"),e("62ad")),D=e("ce7e"),N=e("ce87"),U=e("f6c4"),W=e("0fd9"),R=e("e0c7"),L=Object(u["a"])(K,x,_,!1,null,"3fb39692",null),H=L.exports;m()(L,{VBtn:f["a"],VCard:T["a"],VCardActions:P["a"],VCardText:P["c"],VCardTitle:P["d"],VCol:M["a"],VContainer:$["a"],VDivider:D["a"],VHover:N["a"],VMain:U["a"],VRow:W["a"],VSubheader:R["a"]});var Z=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-footer",{staticClass:"supra-footer",attrs:{color:"rgba(46, 48, 71, 0.8)"}},[i("v-row",{attrs:{justify:"center","no-gutters":""}},[i("v-col",{attrs:{cols:"6"}},[i("v-img",{attrs:{src:e("b0fe"),alt:"Supra Finanse logo","max-height":"50px","max-width":"100px",contain:""}}),i("p",[t._v(" Specjalizuję się w dostarczaniu kompleksowych uslug finansowych dla przedsiębiorswt oraz klienta indywidualnego. ")])],1),i("v-col",{attrs:{cols:"3"}}),i("v-col",{attrs:{cols:"3"}},t._l(t.links,(function(a){return i("v-btn",{key:a.name,staticClass:"my-2",attrs:{color:"white",text:"",rounded:"",to:a.to}},[t._v(" "+t._s(a.name)+" ")])})),1)],1),i("v-row",[i("v-col",{attrs:{cols:"6"}},[i("v-btn",{staticClass:"black--text text-h5 rounded-0",attrs:{outlined:"",large:"",width:"15vw",height:"5vh",color:"white",to:"kontakt"}},[t._v("Spotkajmy się")])],1),i("v-col",{attrs:{cols:"6"}},[i("v-card-text",t._l(t.icons,(function(a){return i("v-btn",{key:a.social,staticClass:"mx-4 white--text",attrs:{icon:"",href:a.href,target:"_blank"}},[i("v-icon",{attrs:{size:"24px"}},[t._v(t._s(a.social))])],1)})),1)],1)],1),i("v-row",[i("v-col",{attrs:{cols:"6"}},[t._v(" "+t._s((new Date).getFullYear())+" — "),i("strong",[t._v("Supra Finanse")])]),i("v-col",{attrs:{cols:"6"}},[i("span",[t._v(" Projekt graficzny marcinsuliga.eu ")])])],1),i("div",{staticClass:"supra-hero__arrow supra-hero__arrow--up"},[i("v-icon",{staticClass:"white--text",attrs:{large:""}},[t._v("mdi-arrow-up ")])],1)],1)},J=[],G={name:"Footer",data:function(){return{links:[{name:"Strona główna",to:"/"},{name:"O mnie",to:"omnie"},{name:"Oferta",to:"oferta"},{name:"Kontakt",to:"kontakt"}],icons:[{social:"mdi-linkedin",href:"https://www.linkedin.com/in/arkadiusz-sztaba-6b70a5aa/"},{social:"mdi-facebook",href:"https://www.facebook.com/arkadiusz.sztaba.1"},{social:"mdi-twitter",href:"https://twitter.com/SztabaArek"}]}}},Y=G,Q=e("553a"),X=Object(u["a"])(Y,Z,J,!1,null,null,null),tt=X.exports;m()(X,{VBtn:f["a"],VCardText:P["c"],VCol:M["a"],VFooter:Q["a"],VIcon:w["a"],VImg:y["a"],VRow:W["a"]});var at={components:{Header:z,Main:H,Footer:tt},data:function(){return{dialog:!1}},mounted:function(){console.log(this.$vuetify.breakpoint)},computed:{breadcrumbs:function(){var t=this,a=this.$route.path.split("/");a.shift(),console.log(a);var e=a.map((function(a,e,i){return console.log(t.$route.matched[e],a),i.push(t.$route.matched[e].meta.breadCrumb||a),i}));return e}}},et=at,it=(e("5c0b"),e("0798")),nt=e("7496"),rt=Object(u["a"])(et,n,r,!1,null,null,null),ot=rt.exports;m()(rt,{VAlert:it["a"],VApp:nt["a"],VBtn:f["a"]});var st=e("f309"),ct=e("8c4f"),lt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-container",{staticClass:"supra-contact__form d-flex justify-center align-center"},[e("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(a){t.valid=a},expression:"valid"}},[e("v-text-field",{attrs:{counter:10,rules:t.nameRules,label:"Imię",required:""},model:{value:t.name,callback:function(a){t.name=a},expression:"name"}}),e("v-text-field",{attrs:{counter:10,rules:t.nameRules,label:"Nazwisko",required:""},model:{value:t.lastName,callback:function(a){t.lastName=a},expression:"lastName"}}),e("v-text-field",{attrs:{rules:t.emailRules,label:"E-mail",required:""},model:{value:t.email,callback:function(a){t.email=a},expression:"email"}}),e("v-select",{staticClass:"mb-10",attrs:{items:t.items,rules:[function(t){return!!t||"Wybierz właściwą opcję"}],label:"Osoba fizyczna / Firma",required:""},model:{value:t.select,callback:function(a){t.select=a},expression:"select"}}),e("v-checkbox",{staticClass:"mb-10",attrs:{rules:[function(t){return!!t||"Zaakceptuj żeby wysłać."}],label:"Wyrażam zgodę na przetwarzane moich danych osobowych.",required:""},model:{value:t.checkbox,callback:function(a){t.checkbox=a},expression:"checkbox"}}),e("v-btn",{staticClass:"mr-4",attrs:{disabled:!t.valid,color:"blue darken-2",outlined:""},on:{click:t.validate}},[t._v(" Wyślij ")]),e("v-btn",{staticClass:"mr-4",attrs:{color:"error",outlined:""},on:{click:t.reset}},[t._v(" Wyczyść formularz ")])],1)],1),e("v-container",{staticClass:"supra-contact__data d-flex justify-center my-10"},[e("v-card",{staticClass:"d-flex flex-column justify-space-around align-center pa-12",attrs:{width:"50vw"}},[e("v-card-subtitle",{staticClass:"pb-4 subtitle-1"},[t._v("Supra Finanse")]),e("v-card-text",{staticClass:"text--primary text-h5"},[e("p",[t._v("Arkadiusz Sztaba")]),e("p",[t._v("ul. Bogata 100")]),e("p",[t._v("50-555 Wrocław")])]),e("v-card-actions",[e("v-btn",{attrs:{color:"blue darken-2",outlined:"",href:"mailto:#"}},[t._v(" Wyślij maila ")])],1)],1)],1)],1)},ut=[],dt={name:"Contact",data:function(){return{valid:!0,name:"",nameRules:[function(t){return!!t||"Uzupełnij pole"},function(t){return t&&t.length<=10||"Name must be less than 10 characters"}],email:"",emailRules:[function(t){return!!t||"Uzupełnij email"},function(t){return/.+@.+\..+/.test(t)||"Email musi być prawidłowy"}],select:null,items:["Osoba fizyczna","Firma"],checkbox:!1,lazy:!1}},methods:{validate:function(){this.$refs.form.validate()},reset:function(){this.$refs.form.reset()},resetValidation:function(){this.$refs.form.resetValidation()}}},mt=dt,pt=e("ac7c"),vt=e("4bd4"),ft=e("b974"),wt=e("8654"),yt=Object(u["a"])(mt,lt,ut,!1,null,null,null),bt=yt.exports;m()(yt,{VBtn:f["a"],VCard:T["a"],VCardActions:P["a"],VCardSubtitle:P["b"],VCardText:P["c"],VCheckbox:pt["a"],VContainer:$["a"],VForm:vt["a"],VSelect:ft["a"],VTextField:wt["a"]});var ht=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("v-container",{staticClass:"supra-contact__data d-flex justify-center my-10",attrs:{width:t.$vuetify.breakpoint.mobile}},[e("v-card",{staticClass:"d-flex flex-column justify-space-around align-center pa-12",attrs:{width:"50vw"}},[e("v-card-text",{staticClass:"text--primary text-h5"},[e("v-subheader",{staticClass:"pb-6 text-h3"},[t._v("Oferta")]),e("p",{staticClass:"pb-6  text-left"},[t._v(" Specjalizuję się w dostarczaniu kompleksowych usług finansowych dla przedsiębiorstw i klientów indywidualnych. Pomagam w uzyskaniu najbardziej odpowiednich do potrzeb klientów, ofert kredytowych, leasingowych i ubezpieczeniowych. Wykorzystuję przy tym kilkunastoletnie doświadczenie w branży finansowej na stanowiskach kierowniczych, dlatego ceniąc czas i komfort klientów oferuję indywidualne podejście, profesjonalne doradztwo finansowe, kontrolę nad całym procesem pozyskania środków, szybką analizę potrzeb, dopasowanie odpowiedniej oferty, kompletowanie pełnej dokumentacji, negocjowanie warunków finansowania, pomoc przy podpisywaniu umowy, Współpracuję z kilkunastoma bankami, towarzystwami ubezpieczeniowymi i leasingowymi w Polsce mających w swojej ofercie Kredyty obrotowe, ratalne, inwestycyjne, leasing samochodów, maszyn i urządzeń, faktoring, dla firm, a także kredyty hipoteczne, gotówkowe i konsolidacyjne dla klientów indywidualnych, ubezpieczenia na życie, majątkowe, zdrowotne czy firmowe.")])],1),e("v-card-actions",[e("v-btn",{attrs:{color:"blue darken-2",outlined:"",to:"kontakt"}},[t._v(" Skontaktuj się ")])],1)],1)],1),e("v-container",{staticClass:"supra-contact__data d-flex justify-center my-10"},[e("v-card",{staticClass:"d-flex flex-column justify-space-around align-center pa-12",attrs:{width:"50vw"}},[e("v-card-subtitle",{staticClass:"pb-4 text-h3"},[t._v("Kredyt Obrotowy")]),e("v-card-text",{staticClass:"text--primary text-h5"},[e("p",{staticClass:"pb-6"},[t._v("na dowolny cel, to kredyt przeznaczony na finansowanie bieżącej działalności przedsiębiorstwa, umożliwiający zachowanie płynności finansowej Twojej firmy. Może być przeznaczony na zakup towarów, materiałów, usług czy pokrycie kosztów zatrudnienia personelu. ")]),e("v-list",[e("v-subheader",{staticClass:"text-h4 my-10"},[t._v("Korzyści")]),e("v-list-item",[e("v-list-item-content",[t._v(" szybka decyzja kredytowa ")])],1),e("v-list-item",[e("v-list-item-content",[t._v(" zachowanie płynności finansowej ")])],1),e("v-list-item",[e("v-list-item-content",[t._v(" niskie raty miesięczne i brak zabezpieczeń rzeczowych ")])],1),e("v-list-item",[e("v-list-item-content",[t._v(" umożliwia pokrycie nagłych wydatków i bieżących potrzeb ")])],1),e("v-list-item",[e("v-list-item-content",[t._v(" ciągłość prowadzonej działalności ")])],1)],1)],1),e("v-card-actions",[e("v-btn",{attrs:{color:"blue darken-2",outlined:"",to:"kontakt"}},[t._v(" Skontaktuj się ")])],1)],1)],1),e("v-container",{staticClass:"supra-contact__data d-flex justify-center my-10"},[e("v-card",{staticClass:"d-flex flex-column justify-space-around align-center pa-12",attrs:{width:"50vw"}},[e("v-card-subtitle",{staticClass:"pb-4 subtitle-1"},[t._v("Supra Finanse")]),e("v-card-text",{staticClass:"text--primary text-h5"},[e("v-subheader",{staticClass:"text-h3"},[t._v("Kredyt konsolidacyjny")]),e("p",{staticClass:"pb-6"},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")]),e("v-expansion-panels",{attrs:{focusable:""}},t._l(4,(function(a,i){return e("v-expansion-panel",{key:i},[e("v-expansion-panel-header",[t._v("Item")]),e("v-expansion-panel-content",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")])],1)})),1)],1),e("v-card-actions",[e("v-btn",{attrs:{color:"blue darken-2",outlined:"",to:"kontakt"}},[t._v(" Skontaktuj się ")])],1)],1)],1),e("v-container",{staticClass:"supra-contact__data d-flex justify-center my-10"},[e("v-card",{staticClass:"d-flex flex-column justify-space-around align-center pa-12",attrs:{width:"50vw"}},[e("v-card-subtitle",{staticClass:"pb-4 subtitle-1"},[t._v("Supra Finanse")]),e("v-card-text",{staticClass:"text--primary text-h5"},[e("v-subheader",{staticClass:"text-h3"},[t._v("Kredyt obrotowy")]),e("p",{staticClass:"pb-6"},[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")]),e("v-expansion-panels",{attrs:{focusable:""}},t._l(4,(function(a,i){return e("v-expansion-panel",{key:i},[e("v-expansion-panel-header",[t._v("Item")]),e("v-expansion-panel-content",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")])],1)})),1)],1),e("v-card-actions",[e("v-btn",{attrs:{color:"blue darken-2",outlined:"",to:"kontakt"}},[t._v(" Skontaktuj się ")])],1)],1)],1)],1)},kt=[],zt={name:"Offer",data:function(){return{}}},xt=zt,_t=e("cd55"),gt=e("49e2"),jt=e("c865"),Ct=e("0393"),Vt=e("8860"),St=e("da13"),Ot=e("5d23"),Tt=Object(u["a"])(xt,ht,kt,!1,null,null,null),Pt=Tt.exports;m()(Tt,{VBtn:f["a"],VCard:T["a"],VCardActions:P["a"],VCardSubtitle:P["b"],VCardText:P["c"],VContainer:$["a"],VExpansionPanel:_t["a"],VExpansionPanelContent:gt["a"],VExpansionPanelHeader:jt["a"],VExpansionPanels:Ct["a"],VList:Vt["a"],VListItem:St["a"],VListItemContent:Ot["a"],VSubheader:R["a"]});var Bt=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("v-container",{staticClass:"supra-contact__data d-flex flex-column align-center justify-center my-10"},[i("div",[i("v-subheader",{staticClass:"text-h2 my-10"},[t._v("O mnie")])],1),i("v-card",{staticClass:"d-flex flex-column align-center pa-10"},[i("v-card-text",{staticClass:"text-left"},[i("p",[t._v(" Specjalizuję się w dostarczaniu usług finansowych dla przedsiębiorstw oraz klientów indywidualnych. Moją misją jest dostarczanie właściwych usług klientom oraz wspieranie ich w często trudnych decyzjach dotyczących finansów firmy oraz budżetu domowego. Służę przy tym wiedzą zgromadzoną w trakcie ponad 16-letniej kariery w branży, którą realizowałem na stanowiskach kierowniczych w takich instytucjach jak Nest Bank, Plus Bank, Raiffeisen Bank czy Polbank. Znajomość funkcjonowania banków pomaga mi obecnie skuteczniej działać dla dobra moich klientów. ")]),i("p",[t._v(" Działając wiele lat w dziedzinie finansów, wiem jak ważne jest zaufanie oraz dobry kontakt współpracujących ze sobą stron. Dlatego staram się najpierw dobrze poznać potrzeby moich klientów i profesjonalnie doradzić odpowiednie rozwiązanie. ")])]),i("v-img",{staticClass:"rounded-circle",attrs:{width:"200px",height:"200px",src:e("06ff"),alt:"Arkadiusz"}})],1)],1),i("v-container",{staticClass:"supra-contact__data d-flex flex-column align-center justify-center my-10"},[i("div",[i("v-subheader",{staticClass:"text-h2 my-10"},[t._v("Doświadczenie")])],1),i("v-timeline",{attrs:{"align-top":t.alignTop,dense:t.dense,reverse:t.reverse}},t._l(t.experience,(function(a){return i("v-timeline-item",{key:a.year,staticClass:"supra-about-me__timeline-item",attrs:{color:"blue darken-2","fill-dot":t.fillDot,"hide-dot":t.hideDot,icon:t.icon?"mdi-star":"","icon-color":t.iconColor?"deep-orange":"",left:t.left,right:t.right,small:t.small},scopedSlots:t._u([{key:"icon",fn:function(){return[t.avatar?i("v-avatar",[i("img",{attrs:{src:"http://i.pravatar.cc/64"}})]):t._e()]},proxy:!0}],null,!0)},[i("v-card",{staticClass:"elevation-2 d-flex flex-column align-center"},[i("v-card-title",{staticClass:"headline"},[t._v(t._s(a.year))]),i("v-card-text",[t._v(" "+t._s(a.description)+" ")])],1)],1)})),1)],1)],1)},Ft=[],$t={name:"AboutMe",data:function(){return{experience:[{year:2017,description:"Dyrektor Oddziału Nest Bank"},{year:2015,description:"Dyrektor Oddziału Raiffeisen Bank"},{year:2012,description:"Dyrektor Oddziału Polbank"}]}}},At=$t,qt=e("8212"),Et=e("8414"),It=e("1e06"),Kt=Object(u["a"])(At,Bt,Ft,!1,null,null,null),Mt=Kt.exports;m()(Kt,{VAvatar:qt["a"],VCard:T["a"],VCardText:P["c"],VCardTitle:P["d"],VContainer:$["a"],VImg:y["a"],VSubheader:R["a"],VTimeline:Et["a"],VTimelineItem:It["a"]});var Dt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-container",{staticClass:"d-flex flex-column align-center justify-center my-10",attrs:{"fill-height":""}},[e("v-card",{staticClass:"d-flex flex-column justify-center align-center pa-12"},[e("v-card-title",{staticClass:"black--text text-h2 my-10"},[t._v(" Przepraszamy, podana strona nie została znaleziona ")]),e("v-card-actions",[e("v-btn",{staticClass:"black--text text-h5 rounded-0 my-10",attrs:{large:"",width:"25vw",height:"5vh",color:"white",to:"/"}},[t._v(" Powrót do strony głównej ")])],1)],1)],1)},Nt=[],Ut={name:"AboutMe",data:function(){return{experience:[{year:2017,description:"Dyrektor Oddziału Nest Bank"},{year:2015,description:"Dyrektor Oddziału Raiffeisen Bank"},{year:2012,description:"Dyrektor Oddziału Polbank"}]}}},Wt=Ut,Rt=Object(u["a"])(Wt,Dt,Nt,!1,null,null,null),Lt=Rt.exports;m()(Rt,{VBtn:f["a"],VCard:T["a"],VCardActions:P["a"],VCardTitle:P["d"],VContainer:$["a"]}),i["a"].use(ct["a"]);var Ht=[{path:"/",component:H,meta:{breadCrumb:"Strona główna"}},{path:"/kontakt",component:bt,meta:{breadCrumb:"Kontakt"}},{path:"/oferta",component:Pt,meta:{breadCrumb:"Oferta"}},{path:"/omnie",component:Mt,meta:{breadCrumb:"O mnie"}},{path:"/*",component:Lt,meta:{breadCrumb:"404 page"}}],Zt=new ct["a"]({routes:Ht}),Jt=Zt,Gt=e("fcf4");i["a"].use(st["a"]);var Yt=new st["a"]({theme:{themes:{light:{primary:Gt["a"].grey.darken2,secondary:Gt["a"].grey.lighten2,accent:Gt["a"].blue.darken1}}}});i["a"].config.productionTip=!1,i["a"].use(st["a"]),new i["a"]({vuetify:Yt,router:Jt,render:function(t){return t(ot)}}).$mount("#app")},"5c0b":function(t,a,e){"use strict";var i=e("9c0c"),n=e.n(i);n.a},8829:function(t,a,e){"use strict";var i=e("d816"),n=e.n(i);n.a},"9c0c":function(t,a,e){},b0fe:function(t,a,e){t.exports=e.p+"img/LogoMakr.10972e3d.png"},b6fb:function(t,a,e){t.exports=e.p+"img/arek-hero.ac53d0ef.jpg"},d816:function(t,a,e){}});
//# sourceMappingURL=app.2dcbfa0b.js.map