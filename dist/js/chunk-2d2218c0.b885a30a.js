(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2218c0"],{cb8c:function(t,n,o){"use strict";o.r(n);var r=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("VueFormCreation",{attrs:{view:!1,data:t.formData},on:{"on-form-cancel":t.onFormCancel,"on-form-submit":t.onFormSubmit}})},e=[],a=o("30ff"),c={components:{},data:function(){return{formData:{}}},created:function(){var t=this;Object(a["b"])({type:this.$route.query.id}).then((function(n){var o=n.data;t.formData=o}))},methods:{onFormSubmit:function(t){this.$router.go(-1)},onFormCancel:function(){this.$router.go(-1)}}},u=c,i=o("2877"),f=Object(i["a"])(u,r,e,!1,null,"4ddaa8f2",null);n["default"]=f.exports}}]);