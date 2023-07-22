"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const e=require("vue"),i={key:0,class:"mask"},u=e.defineComponent({name:"ve-button"}),d=e.defineComponent({...u,props:{type:{type:String,default:"default",validator:l=>["default","primary","success","info","warning","danger"].includes(l)},size:{type:String,default:"medium",validator:l=>["mini","medium","small"].includes(l)},plain:{type:Boolean,default:!1},round:{type:Boolean,default:!1},soft:{type:Boolean,default:!1},circle:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},icon:{type:String,default:""}},emits:["click"],setup(l,{emit:o}){const t=l,a=e.computed(()=>[`ve-button--${t.type}`,`ve-button--${t.size}`,{"is-plain":t.plain,"is-round":t.round,"is-soft":t.soft,"is-circle":t.circle,"is-disabled":t.disabled}]),s=n=>{o("click",n)};return(n,r)=>(e.openBlock(),e.createElementBlock("button",{class:e.normalizeClass(["ve-button",e.unref(a)]),onClick:s},[t.disabled?(e.openBlock(),e.createElementBlock("div",i)):e.createCommentVNode("",!0),e.renderSlot(n.$slots,"default",{},void 0,!0)],2))}});exports.default=d;
