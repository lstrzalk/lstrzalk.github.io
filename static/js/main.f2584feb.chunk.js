(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{109:function(e,t,a){e.exports=a(144)},114:function(e,t,a){},115:function(e,t,a){},120:function(e,t,a){},144:function(e,t,a){"use strict";a.r(t);var i,n,r=a(0),l=a.n(r),s=a(11),o=a.n(s),c=(a(114),a(71)),m=a(16),u=a(59),b=a(94),p=a(97),d=a(98),y=(a(115),a(70)),E=a(197),O=a(201),C=a(200),h=a(196),f=a(198),v=a(199),g=a(76),R="CASES",A="BUCKETS",k="SUMMARY",S={FEVER:"FEVER",COUGH:"COUGH",BREATHING_PROBLEM:"BREATHING_PROBLEM",CLOSE_CONTACT:"CLOSE_CONTACT",COMING_FROM_ABROAD:"COMING_FROM_ABROAD"},_=a(194),N=a(195),T=a(203),B=a(78),I=a.n(B),M=a(79),G=a.n(M),x=a(202),j=a(80),w=a.n(j),F=a(14),H=a(217),D=a(189),L=a(190),P=a(193),V=a(148),U=a(191),z=a(192),K=a(215),J=a(214),W=(i={},Object(F.a)(i,S.FEVER,"Fever"),Object(F.a)(i,S.COUGH,"Cough"),Object(F.a)(i,S.BREATHING_PROBLEM,"Difficulty with breathing"),Object(F.a)(i,S.COMING_FROM_ABROAD,"Return from Abroad"),Object(F.a)(i,S.CLOSE_CONTACT,"Close contact with infected person"),i),q={id:"",symptoms:(n={},Object(F.a)(n,S.FEVER,!1),Object(F.a)(n,S.COUGH,!1),Object(F.a)(n,S.BREATHING_PROBLEM,!1),Object(F.a)(n,S.COMING_FROM_ABROAD,!1),Object(F.a)(n,S.CLOSE_CONTACT,!1),n),createNext:!1},Y=function(e){var t=e.open,a=e.handleClose,i=l.a.useState(q),n=Object(y.a)(i,2),r=n[0],s=n[1];return l.a.createElement(H.a,{open:t,onClose:a,"aria-labelledby":"form-dialog-title"},l.a.createElement(D.a,{id:"form-dialog-title"},"Craete new case"),l.a.createElement(L.a,null,l.a.createElement(U.a,{column:!0},l.a.createElement(J.a,{label:"id",variant:"outlined",onChange:function(e){s(Object(m.a)({},r,{id:e.target.value}))},value:r.id,required:!0}),Object.keys(S).map((function(e){return l.a.createElement(z.a,{key:e,control:l.a.createElement(K.a,{checked:r.symptoms[e],onChange:(t=e,function(){s(Object(m.a)({},r,{symptoms:Object(m.a)({},r.symptoms,Object(F.a)({},t,!r.symptoms[t]))}))}),name:W[e]}),label:W[e]});var t})))),l.a.createElement(P.a,null,l.a.createElement(V.a,{onClick:function(){a({close:!0})},color:"secondary"},"Close"),l.a.createElement(z.a,{control:l.a.createElement(K.a,{checked:r.createNext,onChange:function(){s(Object(m.a)({},r,{createNext:!r.createNext}))},color:"secondary"}),label:"Create next case"}),l.a.createElement(V.a,{onClick:function(){r.createNext?(a({close:!1,values:{id:r.id,symptoms:r.symptoms}}),s(Object(m.a)({},q,{createNext:!0}))):a({close:!0,values:{id:r.id,symptoms:r.symptoms}})},color:"primary",disabled:!r.id},"Create")))},$=function(e){return e?l.a.createElement(_.a,{style:{color:I.a[500]}}):l.a.createElement(N.a,{style:{color:G.a[500]}})},Q=function(e){var t=e.cases,a=e.addCase,i=e.addDemoCases,n=l.a.useState({newCaseModal:!1}),r=Object(y.a)(n,2),s=r[0],o=r[1],c=function(){o({newCaseModal:!0})};return l.a.createElement("div",null,l.a.createElement(Y,{open:s.newCaseModal,handleClose:function(e){var t=e.close,i=e.values;o({newCaseModal:!t}),i&&a({id:i.id,symptoms:Object.keys(i.symptoms).filter((function(e){return i.symptoms[e]}))})}}),!!t.length&&l.a.createElement("div",null,l.a.createElement(h.a,{component:g.a},l.a.createElement(E.a,{"aria-label":"simple table"},l.a.createElement(f.a,null,l.a.createElement(v.a,null,l.a.createElement(C.a,null," ",l.a.createElement("b",null,"id")),l.a.createElement(C.a,{align:"right"},l.a.createElement("b",null,"Fever")),l.a.createElement(C.a,{align:"right"},l.a.createElement("b",null,"Cough")),l.a.createElement(C.a,{align:"right"},l.a.createElement("b",null,"Difficulty with breathing")),l.a.createElement(C.a,{align:"right"},l.a.createElement("b",null,"Close contact with infected person")),l.a.createElement(C.a,{align:"right"},l.a.createElement("b",null,"Return from Abroad")),l.a.createElement(C.a,{align:"right"},l.a.createElement("b",null,"Probability")))),l.a.createElement(O.a,null,t.map((function(e){return l.a.createElement(v.a,{key:e.id},l.a.createElement(C.a,{component:"th",scope:"row"},e.id),l.a.createElement(C.a,{align:"right"},$(e.symptoms.includes(S.FEVER))),l.a.createElement(C.a,{align:"right"},$(e.symptoms.includes(S.COUGH))),l.a.createElement(C.a,{align:"right"},$(e.symptoms.includes(S.BREATHING_PROBLEM))),l.a.createElement(C.a,{align:"right"},$(e.symptoms.includes(S.CLOSE_CONTACT))),l.a.createElement(C.a,{align:"right"},$(e.symptoms.includes(S.COMING_FROM_ABROAD))),l.a.createElement(C.a,{align:"right"},(100*e.probability).toFixed(2),"%"))}))))),l.a.createElement("div",{style:{display:"flex",width:"100%",justifyContent:"flex-end",margin:"16px 0"}},l.a.createElement(x.a,{onClick:c},l.a.createElement(w.a,null)))),!t.length&&l.a.createElement("div",{style:{display:"flex",width:"100%",justifyContent:"center"}},l.a.createElement(V.a,{size:"large",color:"secondary",onClick:i,style:{margin:"16px"},startIcon:l.a.createElement(T.a,null)},"Load example cases"),l.a.createElement(V.a,{size:"large",color:"primary",variant:"contained",onClick:c,startIcon:l.a.createElement(w.a,null),style:{margin:"16px"}},"Add first case")))},X=a(213),Z=a(204),ee=(a(120),a(81)),te=a(205),ae=a(206),ie=a(207),ne=a(209),re=a(210),le=a(211),se=a(208);function oe(e){e.sort((function(e,t){return e.probability<t.probability?1:e.probability>t.probability?-1:0}));for(var t=new ue,a=function(e){for(var t=[new pe(.306,1,1),new pe(.124,.306,3),new pe(.066,.124,4),new pe(.042,.066,5),new pe(.029,.042,6),new pe(.021,.029,7),new pe(.016,.021,8),new pe(.013,.016,9),new pe(.011,.013,10),new pe(.009,.011,11),new pe(.007,.009,12),new pe(.006,.007,13),new pe(.005,.006,15),new pe(.004,.005,16),new pe(.003,.004,19),new pe(.002,.003,23),new pe(0,.002,32)],a=0;a<t.length;a++){var i=t[a];if(i.isInRange(e.probability))return i.bestBucketSize}return console.error("The sample probability is out of range! "+e.probability),1}(e[0]),i=0;i<e.length;i++){var n=e[i];a>0&&(t.samples.push(n),t.reverseProbability*=1-n.probability,a--)}return t.probability=1-t.reverseProbability,t}function ce(e){for(var t=0,a=0;a<e.length;a++)t+=1,e[a].samples.length>1&&(t+=e[a].probability*e[a].samples.length);return Math.round(t)}var me=0,ue=function e(){Object(u.a)(this,e),this.id=++me,this.probability=0,this.reverseProbability=1,this.samples=[],this.bucketStatus=be.NOT_CHECKED},be={POSITIVE:0,NEGATIVE:1,NOT_CHECKED:3},pe=function(){function e(e,t,a){void 0===this.minimum&&(this.minimum=0),void 0===this.maximum&&(this.maximum=0),void 0===this.bestBucketSize&&(this.bestBucketSize=0),this.minimum=e,this.maximum=t,this.bestBucketSize=a}return e.prototype.isInRange=function(e){return this.minimum<=e&&e<this.maximum},e}();pe.__class="BucketProbabilityRange";var de=function(e){var t=e.buckets,a=e.estimatedNumberOfTests,i=e.setBucketStatus;return l.a.createElement("div",null,l.a.createElement(ee.a,{variant:"h4",style:{marginBottom:20}},"Estimated number of tests: ",a),l.a.createElement(Z.a,{container:!0,direction:"row",justify:"flex-start",alignItems:"flex-start",spacing:4},t.map((function(e,t){return l.a.createElement(Z.a,{item:!0,key:t},l.a.createElement(g.a,{elevation:0,className:"bucket"},l.a.createElement(ee.a,{variant:"h5",component:"h2"},"#",e.id),l.a.createElement(ee.a,{color:"textSecondary"},"Probability: ",(100*e.probability).toFixed(2),"%"),l.a.createElement(Z.a,{container:!0,direction:"column",justify:"flex-start",alignItems:"center",spacing:1,style:{padding:"8px 0"}},e.samples.map((function(e){return l.a.createElement(Z.a,{item:!0,key:e.id},l.a.createElement(te.a,{className:"sampleCard"},l.a.createElement(ae.a,null,l.a.createElement(ee.a,{variant:"h5",component:"h3"},l.a.createElement(ie.a,null,e.id)),l.a.createElement(ee.a,{color:"textSecondary"},"Probability: ",(100*e.probability).toFixed(2),"%"))))}))),l.a.createElement(se.a,{orientation:"vertical",fullWidth:!0,disableRipple:!0,disableFocusRipple:!0,size:"small"},l.a.createElement(V.a,{variant:e.bucketStatus===be.NEGATIVE?"contained":"outlined",color:e.bucketStatus===be.NEGATIVE?"primary":"default",startIcon:l.a.createElement(ne.a,null),onClick:function(){return i(e.id,be.NEGATIVE)},disableElevation:!0}," No Virus "),l.a.createElement(V.a,{variant:e.bucketStatus===be.POSITIVE?"contained":"outlined",color:e.bucketStatus===be.POSITIVE?"primary":"default",startIcon:l.a.createElement(re.a,null),onClick:function(){return i(e.id,be.POSITIVE)},disableElevation:!0}," Virus found "),l.a.createElement(V.a,{variant:e.bucketStatus===be.NOT_CHECKED?"contained":"outlined",color:e.bucketStatus===be.NOT_CHECKED?"primary":"default",startIcon:l.a.createElement(le.a,null),onClick:function(){return i(e.id,be.NOT_CHECKED)},disableElevation:!0}," Not tested "))))}))))},ye=a(96),Ee=a.n(ye),Oe=a(212),Ce=a(95),he=a.n(Ce),fe=function(e){var t=e.callback;return l.a.createElement(l.a.Fragment,null,l.a.createElement(ee.a,{align:"center",variant:"h2",component:"h2"},l.a.createElement("b",null,"Good Job")),l.a.createElement(ee.a,{align:"center",variant:"h4",component:"h4"},"All samples have been checked"),l.a.createElement("div",{style:{display:"flex",justifyContent:"center",margin:"32px 0"}},l.a.createElement(V.a,{size:"large",variant:"contained",onClick:t,color:"secondary"},"Crete new case")))},ve=[{id:1,symptoms:[],probability:.02},{id:2,symptoms:[S.COUGH],probability:.05},{id:3,symptoms:[S.BREATHING_PROBLEM,S.FEVER],probability:.09},{id:4,symptoms:[S.CLOSE_CONTACT,S.COMING_FROM_ABROAD],probability:.19},{id:5,symptoms:[S.COUGH,S.COMING_FROM_ABROAD],probability:.12},{id:6,symptoms:[S.COUGH,S.COMING_FROM_ABROAD],probability:.15},{id:7,symptoms:[],probability:.02},{id:8,symptoms:[],probability:.02},{id:9,symptoms:[],probability:.02},{id:10,symptoms:[S.COUGH,S.BREATHING_PROBLEM,S.FEVER,S.COMING_FROM_ABROAD,S.CLOSE_CONTACT],probability:.29},{id:11,symptoms:[],probability:.02},{id:12,symptoms:[],probability:.02},{id:13,symptoms:[S.CLOSE_CONTACT],probability:.02},{id:14,symptoms:[],probability:.02},{id:15,symptoms:[],probability:.02},{id:16,symptoms:[],probability:.02},{id:17,symptoms:[S.COUGH,S.BREATHING_PROBLEM],probability:.05},{id:18,symptoms:[S.COUGH,S.FEVER],probability:.05},{id:19,symptoms:[],probability:.02},{id:20,symptoms:[],probability:.02},{id:21,symptoms:[],probability:.02},{id:22,symptoms:[],probability:.02},{id:23,symptoms:[],probability:.02},{id:24,symptoms:[S.BREATHING_PROBLEM,S.FEVER],probability:.09},{id:25,symptoms:[S.CLOSE_CONTACT,S.COMING_FROM_ABROAD],probability:.19},{id:26,symptoms:[S.COUGH,S.COMING_FROM_ABROAD],probability:.12},{id:27,symptoms:[],probability:.02},{id:28,symptoms:[S.COUGH,S.BREATHING_PROBLEM,S.FEVER,S.COMING_FROM_ABROAD],probability:.19},{id:29,symptoms:[],probability:.02},{id:30,symptoms:[],probability:.02},{id:31,symptoms:[],probability:.02},{id:32,symptoms:[],probability:.02},{id:33,symptoms:[S.COUGH],probability:.05},{id:34,symptoms:[S.CLOSE_CONTACT],probability:.1},{id:35,symptoms:[S.COUGH],probability:.05},{id:36,symptoms:[S.BREATHING_PROBLEM,S.FEVER],probability:.09},{id:37,symptoms:[S.CLOSE_CONTACT,S.COMING_FROM_ABROAD],probability:.19},{id:38,symptoms:[],probability:.02},{id:39,symptoms:[],probability:.02},{id:40,symptoms:[],probability:.02},{id:41,symptoms:[],probability:.02},{id:42,symptoms:[],probability:.02},{id:43,symptoms:[],probability:.02},{id:44,symptoms:[],probability:.02},{id:45,symptoms:[S.COUGH,S.BREATHING_PROBLEM,S.FEVER,S.COMING_FROM_ABROAD,S.CLOSE_CONTACT],probability:.29},{id:46,symptoms:[S.COUGH,S.FEVER,S.COMING_FROM_ABROAD,S.CLOSE_CONTACT],probability:.24},{id:47,symptoms:[],probability:.02},{id:48,symptoms:[],probability:.02},{id:49,symptoms:[],probability:.02},{id:50,symptoms:[],probability:.02}],ge=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var i;return Object(u.a)(this,a),(i=t.call(this,e)).state={currentStep:R,cases:[],buckets:[]},i}return Object(b.a)(a,[{key:"addDemoCases",value:function(){this.setState((function(e,t){return Object(m.a)({},e,{cases:ve})}))}},{key:"addCase",value:function(e){var t=e.id,a=e.symptoms,i=he()(a);this.setState((function(e,n){var r=[].concat(Object(c.a)(e.cases),[{id:t,symptoms:a,probability:i}]);return Object(m.a)({},e,{cases:r})}))}},{key:"resetState",value:function(){this.setState((function(){return{currentStep:R,cases:[],buckets:[]}}))}},{key:"changeStage",value:function(e){this.setState((function(t,a){return Object(m.a)({},t,{currentStep:e})}))}},{key:"calculateBuckets",value:function(){var e=this,t=function(e){for(var t=e.slice(0),a=[];0!==t.length;){var i=oe(t);a.push(i),i.samples.forEach((function(e){t.splice(t.indexOf(e),1)}))}return a}(this.state.cases);this.setState((function(e,a){return Object(m.a)({},e,{buckets:t})}),(function(){return e.changeStage(A)}))}},{key:"recalculateBuckets",value:function(){var e=Array.from(this.state.buckets),t=e.filter((function(e){return e.bucketStatus===be.POSITIVE&&e.samples.length>1})),a=e.filter((function(e){return e.bucketStatus===be.NOT_CHECKED})),i=t.flatMap((function(e){return e.samples.map((function(t){var a=new ue;return a.samples.push(t),a.probability=t.probability/e.probability,t.probability=a.probability,a}))})),n=[].concat(Object(c.a)(a),Object(c.a)(i));n.length?this.setState((function(e,t){return Object(m.a)({},e,{buckets:n})})):this.changeStage(k)}},{key:"setBucketStatus",value:function(e,t){this.setState((function(a,i){var n=Array.from(a.buckets);return n.find((function(t){return t.id===e})).bucketStatus=t,Object(m.a)({},a,{buckets:n})}))}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",null,l.a.createElement(Ee.a,{position:"static"},l.a.createElement(Oe.a,null,l.a.createElement(ee.a,{variant:"h6"},l.a.createElement("b",null,"Covictory"))))),l.a.createElement("main",null,l.a.createElement(X.a,null,this.state.currentStep===R&&l.a.createElement(Q,{cases:this.state.cases,addCase:this.addCase.bind(this),addDemoCases:this.addDemoCases.bind(this)}),!!this.state.cases.length&&this.state.currentStep===R&&l.a.createElement("div",{style:{display:"flex",justifyContent:"center",margin:"16px"}},l.a.createElement(V.a,{size:"large",color:"primary",variant:"contained",onClick:this.calculateBuckets.bind(this)},"Calculate buckets")),this.state.currentStep===A&&l.a.createElement(de,{buckets:this.state.buckets,setBucketStatus:this.setBucketStatus.bind(this),estimatedNumberOfTests:ce(this.state.buckets)}),!!this.state.cases.length&&this.state.currentStep===A&&l.a.createElement("div",{style:{display:"flex",justifyContent:"center",margin:"16px"}},l.a.createElement(V.a,{size:"large",color:"primary",variant:"contained",onClick:this.recalculateBuckets.bind(this)},"Proceed")),this.state.currentStep===k&&l.a.createElement(fe,{callback:this.resetState.bind(this)}))))}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},95:function(e,t){e.exports=function(e){var t=.02;return e.indexOf("FEVER")>-1&&(t+=.02),e.indexOf("COUGH")>-1&&(t+=.03),e.indexOf("BREATHING_PROBLEM")>-1&&(t+=.05),e.indexOf("CLOSE_CONTACT")>-1&&(t+=.1),e.indexOf("COMING_FROM_ABROAD")>-1&&(t+=.07),e.indexOf("PREVIOUS_POSITIVE")>-1&&(t=.9),t.toFixed(3),t}}},[[109,1,2]]]);
//# sourceMappingURL=main.f2584feb.chunk.js.map