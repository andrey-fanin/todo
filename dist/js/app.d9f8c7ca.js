(function(){"use strict";var t={967:function(t,e,i){var o=i(9963),n=i(6252),s=i(3577),a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzlFQkFERkU4NkJCMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzlFQkFERkQ4NkJCMTFFM0FBNTJFRTMzNTJEMUJDNDYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkU1MTc4QTJFOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkU1MTc4QTJGOTlBMDExRTI5QTE1QkMxMDQ2QTg5MDREIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Kk5lQwAABYxJREFUeNrkm29oVXUYx3+7bM3V1FnbqlltrtXWtYRa1nqxooY5E7EhKWGuaTDBagol9SIMDCKICASj+cISw/DPi16ZBakrUBnoC7nNoTMWy6I1c+LmVq6t78N9jpyu555znt855+536IHPi939/jzP95zznN+/kzc1NaUitirwJJgPasF94DZQDG7hMqNgBFwEZ5kU+AH0R+lcXgQCJMBT4EXwLKgM2N7P4FvwJegCk6YKUA5eB23grogu2C/gc7AN/GGKABTsZtAOZqjc2DjYAT5kUfSNBNCkAGwGo1PTZ6PsQ4FuHLp3QD3YDR5QZtgZsAac1ElYokcGbATHDApesS/kUwf7GEkOKAK7wAvKbNsPXgZjYQowG3wNnlDxsONgCbgchgAU/GHwiIqXUT5o8hLBKwfcDA7FMHgrUR/iGLQEoGTyBWhQ8bUGjiFPR4A3QIuKv7VwLKIcQMnue5Dv0fjT/IwtAM3g+RyMBmkU+BXf3qc5Rx3xqDPBE7LjfkaCheCcj1HYKYe6JeBt8GcEo75L3HaJQ7+nfNQ/x7H9p67TFX4L1Pi4EocdfhsGH4BPwVbwqu0xGwI/8vT2N/77Gv+vAJSCO3n6PJ//Vjz72w62cPtORnfAwx7+1nBsW93ugGow7vOKtPkYa9eDl0Clxji9kuvW+yjb5tPncY7xet3MhjoFt2RzgIlU2DQL/O6017W/Be4BawXJqMCgTH+ToOxajvWG1+AmYVBlBglQKrxwmzIFoB9XCzt91CABpL6sti62JcBiXtKS2GMGCSD1pZxjvi7AKmED9PraYJAAG2yvVL+2yi7AImHl90C3QQJ03/B+97ZF1lCYVlN6BBV/BffykNQkoyF4H5grqJOkO6BR2NF2A4O35gifCOs0JjTW9vYaPPPbJ11LJAFqBRVoDf68wQLQI3BBUL424XPiY1lvDOb/ZwRla0iAOYIKv8dAgEFB2VtJgJmCChMxEEAyHigmAQoFFWbFQIDZgrKF0p2hmTEQQOQjCTAmKD8vBgJUCcqOkQBXBBXosEORwcEXKdmBjCskwICgQr5h0+BMW6i8V7LtNkAC9As7WWqwAM8Jy/cnhBMhspVKvq2eC0uwbxLrSWhMa+dpdJQLW6mRpLtpOlyuMcL7CTwErhoSPG2ApjQEuD3BQ0fp0ZJqlT6pZYpt0wieYh60nuWDGp2+At4xIPgt7IvU0jHzBkFdgD27HWDGNGyGFHHfulaXuTN0IkBjZ8EykJeDwKmPFtAXwN8TTltjrVkKfwcawXJW3G3v8DTYCKoiCLwGvAl6QthpbnU6J5jP2f1uh1Wgxbbxwv0qvT/vtZRGA6wuzs50+Pkb8JdgQtPMq1VJld7bnxtSzhjgJD5hzwEW611OZK6xlSvzeYbAsl3Cx4PK7ozodOl6t93hfJByqbzOVnYh+MdHhxfBLI1bnuoMhRx8imPMKgDR5LG/nrSVfddHpx8HeO4/ClmApsw+snXsdk7gYMat+r5Hp0sDCLAkxOA7nfrI1nGxx2tmQUb5x8FuzgvD4Dw4wNm2MIAA1SEF38cx+RaAeBCMZGlwb44GOyUhBD/CsTj24TatpddXq3L+RIVmXnE4QzjJMaSylvBxFdqzKHsVrDD8Dmj36sOvIx0unewHDRENg4MI0BH2FyP0RcZOlzW3Ib7VLvPqDK0z1PEq7bDmLVwCLgnr0AhvnUp/0eJp0k9m6HO4fUp2nGZODgUY5PzUJVlHkxg1TEfnjxqY8I6yb12SSjqLm7T9/Ax4TaW/+JxuIx862KcL4toBk1QFT1omXZLRHQHaL3Npl/r8jH3QjiGsbJ3kGd/fDo6WBWi31KG9a9xXMgzfw35tVfCR9l52dk8Ibe7htnq57YowfY7i4+lYWUL9z+1fAQYACqstE4NCc18AAAAASUVORK5CYII=",l=i.p+"img/doge.bbcebd4d.png";const c={class:"header"},d={class:"container"},r=(0,n.uE)('<div class="logo">ToDo</div><div class="gh-logo"><a class="gh-link" href="https://github.com/andrey-fanin/todo"><div class="gh-link__img"><img src="'+a+'" alt="github octocat logo"></div></a></div>',2),h={class:"form"},u=["placeholder"],g={class:"container container--main"},v={class:"container container--mob"},p={key:0,class:"form form--mob"},k=["placeholder"],w={class:"buttons__wrap"},m={class:"buttons__wrap buttons__wrap--remove"},A={key:0},b={key:0},D={class:"tasks-title__wrap"},f=(0,n._)("h2",null,"To do",-1),I={class:"task-list"},L=["onChange"],T=["onClick"],C=(0,n._)("div",{class:"doge--wrapper__img"},[(0,n._)("img",{src:l,alt:"super dog",title:"puper dog"})],-1),B=[C],_={class:"tasks-title__wrap"},j=(0,n._)("h2",null,"Done",-1),J={class:"tasks-title__wrap-num"},y={class:"task-list task-list--done"},M=["onChange"],x=["onClick"],G={key:0,class:"advices__wrap"},E=["innerHTML"],N=(0,n._)("footer",{class:"footer"},[(0,n._)("div",{class:"container container--footer"})],-1);function O(t,e,i,a,l,C){return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("header",c,[(0,n._)("div",d,[r,(0,n._)("div",h,[(0,n.wy)((0,n._)("input",{type:"text",placeholder:l.placeholder,"onUpdate:modelValue":e[0]||(e[0]=t=>l.handleInput=t),onKeypress:e[1]||(e[1]=(0,o.D2)(((...t)=>C.addTask&&C.addTask(...t)),["enter"]))},null,40,u),[[o.nr,l.handleInput,void 0,{trim:!0}]]),(0,n._)("button",{class:"btn",onClick:e[2]||(e[2]=(...t)=>C.addTask&&C.addTask(...t))},"Add new task")])])]),(0,n._)("div",g,[(0,n._)("div",v,[(0,n.Wm)(o.uT,{name:"rotateY"},{default:(0,n.w5)((()=>[l.isActive?((0,n.wg)(),(0,n.iD)("div",p,[(0,n.wy)((0,n._)("textarea",{type:"text",placeholder:l.placeholder,"onUpdate:modelValue":e[3]||(e[3]=t=>l.handleInput=t),onKeypress:e[4]||(e[4]=(0,o.D2)(((...t)=>C.addTask&&C.addTask(...t)),["enter"]))},null,40,k),[[o.nr,l.handleInput,void 0,{trim:!0}]]),(0,n._)("button",{class:"btn",onClick:e[5]||(e[5]=(...t)=>C.addTask&&C.addTask(...t))},"+")])):(0,n.kq)("",!0)])),_:1}),(0,n._)("div",w,[(0,n._)("button",{class:"btn btn--wide",onClick:e[6]||(e[6]=(...t)=>C.checkActive&&C.checkActive(...t))},(0,s.zw)(l.isActive?"close":"add new task"),1),(0,n.Wm)(o.uT,{name:"smoothFade"},{default:(0,n.w5)((()=>[l.isActive?((0,n.wg)(),(0,n.iD)("button",{key:0,class:"btn btn--transparent",onClick:e[7]||(e[7]=(...t)=>C.clearHandleInput&&C.clearHandleInput(...t))},"clear text")):(0,n.kq)("",!0)])),_:1})])]),(0,n._)("div",m,[(0,n._)("div",null,[(0,n.Wm)(o.uT,{name:"fadeX"},{default:(0,n.w5)((()=>[l.todoList.length?((0,n.wg)(),(0,n.iD)("div",A,[(0,n._)("button",{class:"btn btn-remove",onClick:e[8]||(e[8]=(...t)=>C.clearTodo&&C.clearTodo(...t))},"clear todo")])):(0,n.kq)("",!0)])),_:1})]),(0,n._)("div",null,[(0,n.Wm)(o.uT,{name:"fadeX"},{default:(0,n.w5)((()=>[l.doneList.length?((0,n.wg)(),(0,n.iD)("div",b,[(0,n._)("button",{class:"btn btn-remove",onClick:e[9]||(e[9]=(...t)=>C.clearDone&&C.clearDone(...t))},"clear done")])):(0,n.kq)("",!0)])),_:1})])]),(0,n._)("div",D,[f,(0,n._)("span",{class:(0,s.C_)(["tasks-title__wrap-num",{active:C.getDoge}])},[(0,n.Wm)(o.uT,{name:"numberScale"},{default:(0,n.w5)((()=>[((0,n.wg)(),(0,n.iD)("div",{key:l.todoList.length},(0,s.zw)(l.todoList.length),1))])),_:1})],2)]),(0,n._)("ul",I,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(l.todoList,((t,e)=>((0,n.wg)(),(0,n.iD)("li",{key:t.id},[(0,n._)("label",null,[(0,n._)("input",{type:"checkbox",onChange:t=>C.check(e,"active")},null,40,L),(0,n._)("div",null,(0,s.zw)(t.title),1)]),(0,n._)("button",{class:"btn btn-remove",onClick:t=>C.removeItem(e,"active")},"remove",8,T)])))),128))]),(0,n.Wm)(o.uT,{name:"jumpIn"},{default:(0,n.w5)((()=>[l.isDoge?((0,n.wg)(),(0,n.iD)("div",{key:0,class:"doge--wrapper",onClick:e[10]||(e[10]=(...t)=>C.checkDoge&&C.checkDoge(...t))},B)):(0,n.kq)("",!0)])),_:1}),(0,n._)("div",_,[j,(0,n._)("span",J,[(0,n.Wm)(o.uT,{name:"numberScale"},{default:(0,n.w5)((()=>[((0,n.wg)(),(0,n.iD)("div",{key:l.doneList.length},(0,s.zw)(l.doneList.length),1))])),_:1})])]),(0,n._)("ul",y,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(l.doneList,((t,e)=>((0,n.wg)(),(0,n.iD)("li",{key:t.id},[(0,n._)("label",null,[(0,n._)("input",{type:"checkbox",checked:"",onChange:t=>C.check(e,"completed")},null,40,M),(0,n._)("div",null,(0,s.zw)(t.title),1)]),(0,n._)("button",{class:"btn btn-remove",onClick:t=>C.removeItem(e,"completed")},"remove",8,x)])))),128))]),C.showAdvice?((0,n.wg)(),(0,n.iD)("div",G,[(0,n.Wm)(o.W3,{name:"smoothFade"},{default:(0,n.w5)((()=>[((0,n.wg)(),(0,n.iD)("div",{class:"advices__wrap-emoji",innerHTML:l.emoji,key:l.emoji},null,8,E)),((0,n.wg)(),(0,n.iD)("p",{class:"advices__wrap-text",key:l.advice},(0,s.zw)(l.advice),1))])),_:1})])):(0,n.kq)("",!0)]),N],64)}i(1703);var Q={data(){return{todoList:this.getJSON()?.todoList||[],doneList:this.getJSON()?.doneList||[],id:this.getJSON()?.id||0,placeholder:"type some text...",isActive:!1,handleInput:"",URLAdvice:"https://api.adviceslip.com/advice",URLEmoji:"https://emojihub.herokuapp.com/api/random/group_face_positive",advice:"",emoji:"",isDoge:!1}},methods:{getJSON(){return JSON.parse(localStorage.getItem("todoList"))},addTask(){this.handleInput&&(this.todoList.push({title:this.handleInput,id:this.id+=1}),this.handleInput="")},check(t,e){if("active"===e){const e=this.todoList.splice(t,1);this.doneList.push(...e)}else{const e=this.doneList.splice(t,1);this.todoList.push(...e)}},removeItem(t,e){const i="active"===e?this.todoList:this.doneList;i.splice(t,1)},clearTodo(){this.todoList=[]},clearDone(){this.doneList=[]},checkActive(){this.isActive=!this.isActive},checkDoge(){this.isDoge=!this.isDoge},clearHandleInput(){this.handleInput=""},async getUrl(t){this.emoji="",this.advice="";let{data:e}={};const i=await fetch(t);if(i.ok?e=await i.json():console.log("Блок советов: ошибка HTTP "+i.status),!e)throw new Error("Совет пуст!");e?.slip?this.advice=e.slip.advice:e?.htmlCode&&(this.emoji=e.htmlCode[0])},saveInLocalStorage(){const t={};t.todoList=this.todoList,t.doneList=this.doneList,t.id=this.id,localStorage.setItem("todoList",JSON.stringify(t))}},watch:{todoList:{handler(){this.saveInLocalStorage()},deep:!0},doneList:{handler(){this.saveInLocalStorage()},deep:!0},checkId:function(t){t&&(this.placeholder="")},checkLists:function(t){t&&(this.id=0)},showAdvice:function(t){t&&(this.getUrl(this.URLEmoji),this.getUrl(this.URLAdvice))},getDoge:function(t){t&&(this.isDoge=!0)}},computed:{checkId(){return this.id>0},getDoge(){return this.id>4},checkLists(){return this.showAdvice&&this.checkId},showAdvice(){return!this.todoList.length&&!this.doneList.length}}},Y=i(3744);const W=(0,Y.Z)(Q,[["render",O]]);var R=W;(0,o.ri)(R).mount("#app")}},e={};function i(o){var n=e[o];if(void 0!==n)return n.exports;var s=e[o]={exports:{}};return t[o](s,s.exports,i),s.exports}i.m=t,function(){var t=[];i.O=function(e,o,n,s){if(!o){var a=1/0;for(r=0;r<t.length;r++){o=t[r][0],n=t[r][1],s=t[r][2];for(var l=!0,c=0;c<o.length;c++)(!1&s||a>=s)&&Object.keys(i.O).every((function(t){return i.O[t](o[c])}))?o.splice(c--,1):(l=!1,s<a&&(a=s));if(l){t.splice(r--,1);var d=n();void 0!==d&&(e=d)}}return e}s=s||0;for(var r=t.length;r>0&&t[r-1][2]>s;r--)t[r]=t[r-1];t[r]=[o,n,s]}}(),function(){i.d=function(t,e){for(var o in e)i.o(e,o)&&!i.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){i.p="/todo/"}(),function(){var t={143:0};i.O.j=function(e){return 0===t[e]};var e=function(e,o){var n,s,a=o[0],l=o[1],c=o[2],d=0;if(a.some((function(e){return 0!==t[e]}))){for(n in l)i.o(l,n)&&(i.m[n]=l[n]);if(c)var r=c(i)}for(e&&e(o);d<a.length;d++)s=a[d],i.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return i.O(r)},o=self["webpackChunktodo"]=self["webpackChunktodo"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=i.O(void 0,[998],(function(){return i(967)}));o=i.O(o)})();
//# sourceMappingURL=app.d9f8c7ca.js.map