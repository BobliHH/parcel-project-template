function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},n=t.parcelRequired7c6;null==n&&((n=function(e){if(e in o)return o[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return o[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequired7c6=n);var a=n("8zd4h");const l=document.querySelector("feedback-form");l.addEventListener("input",e(a)((function(e){d={email:i.value,message:f.value},localStorage.setItem("feedback-form-state",JSON.parse(d))}),500));let d=JSON.parse(localStorage.getItem("feedback-form-state"));const{email:i,message:f}=l.elements;
//# sourceMappingURL=03-feedback.d3f872b7.js.map
