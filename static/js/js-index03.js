/* global a2a*/
(function (Drupal) {
    'use strict';

    Drupal.behaviors.addToAny = {
        attach: function (context, settings) {
            // If not the full document (it's probably AJAX), and window.a2a exists
            if (context !== document && window.a2a) {
                a2a.init_all(); // Init all uninitiated AddToAny instances
            }
        }
    };

})(Drupal);
;
/*!
 * jQuery Form Plugin
 * version: 4.3.0
 * Requires jQuery v1.7.2 or later
 * Project repository: https://github.com/jquery-form/form

 * Copyright 2017 Kevin Morris
 * Copyright 2006 M. Alsup

 * Dual licensed under the LGPL-2.1+ or MIT licenses
 * https://github.com/jquery-form/form#license

 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 */
!function (r) { "function" == typeof define && define.amd ? define(["jquery"], r) : "object" == typeof module && module.exports ? module.exports = function (e, t) { return void 0 === t && (t = "undefined" != typeof window ? require("jquery") : require("jquery")(e)), r(t), t } : r(jQuery) }(function (q) { "use strict"; var m = /\r?\n/g, S = {}; S.fileapi = void 0 !== q('<input type="file">').get(0).files, S.formdata = void 0 !== window.FormData; var _ = !!q.fn.prop; function o(e) { var t = e.data; e.isDefaultPrevented() || (e.preventDefault(), q(e.target).closest("form").ajaxSubmit(t)) } function i(e) { var t = e.target, r = q(t); if (!r.is("[type=submit],[type=image]")) { var a = r.closest("[type=submit]"); if (0 === a.length) return; t = a[0] } var n, o = t.form; "image" === (o.clk = t).type && (void 0 !== e.offsetX ? (o.clk_x = e.offsetX, o.clk_y = e.offsetY) : "function" == typeof q.fn.offset ? (n = r.offset(), o.clk_x = e.pageX - n.left, o.clk_y = e.pageY - n.top) : (o.clk_x = e.pageX - t.offsetLeft, o.clk_y = e.pageY - t.offsetTop)), setTimeout(function () { o.clk = o.clk_x = o.clk_y = null }, 100) } function N() { var e; q.fn.ajaxSubmit.debug && (e = "[jquery.form] " + Array.prototype.join.call(arguments, ""), window.console && window.console.log ? window.console.log(e) : window.opera && window.opera.postError && window.opera.postError(e)) } q.fn.attr2 = function () { if (!_) return this.attr.apply(this, arguments); var e = this.prop.apply(this, arguments); return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments) }, q.fn.ajaxSubmit = function (M, e, t, r) { if (!this.length) return N("ajaxSubmit: skipping submit process - no element selected"), this; var O, a, n, o, X = this; "function" == typeof M ? M = { success: M } : "string" == typeof M || !1 === M && 0 < arguments.length ? (M = { url: M, data: e, dataType: t }, "function" == typeof r && (M.success = r)) : void 0 === M && (M = {}), O = M.method || M.type || this.attr2("method"), n = (n = (n = "string" == typeof (a = M.url || this.attr2("action")) ? q.trim(a) : "") || window.location.href || "") && (n.match(/^([^#]+)/) || [])[1], o = /(MSIE|Trident)/.test(navigator.userAgent || "") && /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank", M = q.extend(!0, { url: n, success: q.ajaxSettings.success, type: O || q.ajaxSettings.type, iframeSrc: o }, M); var i = {}; if (this.trigger("form-pre-serialize", [this, M, i]), i.veto) return N("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this; if (M.beforeSerialize && !1 === M.beforeSerialize(this, M)) return N("ajaxSubmit: submit aborted via beforeSerialize callback"), this; var s = M.traditional; void 0 === s && (s = q.ajaxSettings.traditional); var u, c, C = [], l = this.formToArray(M.semantic, C, M.filtering); if (M.data && (c = q.isFunction(M.data) ? M.data(l) : M.data, M.extraData = c, u = q.param(c, s)), M.beforeSubmit && !1 === M.beforeSubmit(l, this, M)) return N("ajaxSubmit: submit aborted via beforeSubmit callback"), this; if (this.trigger("form-submit-validate", [l, this, M, i]), i.veto) return N("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this; var f = q.param(l, s); u && (f = f ? f + "&" + u : u), "GET" === M.type.toUpperCase() ? (M.url += (0 <= M.url.indexOf("?") ? "&" : "?") + f, M.data = null) : M.data = f; var d, m, p, h = []; M.resetForm && h.push(function () { X.resetForm() }), M.clearForm && h.push(function () { X.clearForm(M.includeHidden) }), !M.dataType && M.target ? (d = M.success || function () { }, h.push(function (e, t, r) { var a = arguments, n = M.replaceTarget ? "replaceWith" : "html"; q(M.target)[n](e).each(function () { d.apply(this, a) }) })) : M.success && (q.isArray(M.success) ? q.merge(h, M.success) : h.push(M.success)), M.success = function (e, t, r) { for (var a = M.context || this, n = 0, o = h.length; n < o; n++)h[n].apply(a, [e, t, r || X, X]) }, M.error && (m = M.error, M.error = function (e, t, r) { var a = M.context || this; m.apply(a, [e, t, r, X]) }), M.complete && (p = M.complete, M.complete = function (e, t) { var r = M.context || this; p.apply(r, [e, t, X]) }); var v = 0 < q("input[type=file]:enabled", this).filter(function () { return "" !== q(this).val() }).length, g = "multipart/form-data", x = X.attr("enctype") === g || X.attr("encoding") === g, y = S.fileapi && S.formdata; N("fileAPI :" + y); var b, T = (v || x) && !y; !1 !== M.iframe && (M.iframe || T) ? M.closeKeepAlive ? q.get(M.closeKeepAlive, function () { b = w(l) }) : b = w(l) : b = (v || x) && y ? function (e) { for (var r = new FormData, t = 0; t < e.length; t++)r.append(e[t].name, e[t].value); if (M.extraData) { var a = function (e) { var t, r, a = q.param(e, M.traditional).split("&"), n = a.length, o = []; for (t = 0; t < n; t++)a[t] = a[t].replace(/\+/g, " "), r = a[t].split("="), o.push([decodeURIComponent(r[0]), decodeURIComponent(r[1])]); return o }(M.extraData); for (t = 0; t < a.length; t++)a[t] && r.append(a[t][0], a[t][1]) } M.data = null; var n = q.extend(!0, {}, q.ajaxSettings, M, { contentType: !1, processData: !1, cache: !1, type: O || "POST" }); M.uploadProgress && (n.xhr = function () { var e = q.ajaxSettings.xhr(); return e.upload && e.upload.addEventListener("progress", function (e) { var t = 0, r = e.loaded || e.position, a = e.total; e.lengthComputable && (t = Math.ceil(r / a * 100)), M.uploadProgress(e, r, a, t) }, !1), e }); n.data = null; var o = n.beforeSend; return n.beforeSend = function (e, t) { M.formData ? t.data = M.formData : t.data = r, o && o.call(this, e, t) }, q.ajax(n) }(l) : q.ajax(M), X.removeData("jqxhr").data("jqxhr", b); for (var j = 0; j < C.length; j++)C[j] = null; return this.trigger("form-submit-notify", [this, M]), this; function w(e) { var t, r, l, f, o, d, m, p, a, n, h, v, i = X[0], g = q.Deferred(); if (g.abort = function (e) { p.abort(e) }, e) for (r = 0; r < C.length; r++)t = q(C[r]), _ ? t.prop("disabled", !1) : t.removeAttr("disabled"); (l = q.extend(!0, {}, q.ajaxSettings, M)).context = l.context || l, o = "jqFormIO" + (new Date).getTime(); var s = i.ownerDocument, u = X.closest("body"); if (l.iframeTarget ? (n = (d = q(l.iframeTarget, s)).attr2("name")) ? o = n : d.attr2("name", o) : (d = q('<iframe name="' + o + '" src="' + l.iframeSrc + '" />', s)).css({ position: "absolute", top: "-1000px", left: "-1000px" }), m = d[0], p = { aborted: 0, responseText: null, responseXML: null, status: 0, statusText: "n/a", getAllResponseHeaders: function () { }, getResponseHeader: function () { }, setRequestHeader: function () { }, abort: function (e) { var t = "timeout" === e ? "timeout" : "aborted"; N("aborting upload... " + t), this.aborted = 1; try { m.contentWindow.document.execCommand && m.contentWindow.document.execCommand("Stop") } catch (e) { } d.attr("src", l.iframeSrc), p.error = t, l.error && l.error.call(l.context, p, t, e), f && q.event.trigger("ajaxError", [p, l, t]), l.complete && l.complete.call(l.context, p, t) } }, (f = l.global) && 0 == q.active++ && q.event.trigger("ajaxStart"), f && q.event.trigger("ajaxSend", [p, l]), l.beforeSend && !1 === l.beforeSend.call(l.context, p, l)) return l.global && q.active--, g.reject(), g; if (p.aborted) return g.reject(), g; (a = i.clk) && (n = a.name) && !a.disabled && (l.extraData = l.extraData || {}, l.extraData[n] = a.value, "image" === a.type && (l.extraData[n + ".x"] = i.clk_x, l.extraData[n + ".y"] = i.clk_y)); var x = 1, y = 2; function b(t) { var r = null; try { t.contentWindow && (r = t.contentWindow.document) } catch (e) { N("cannot get iframe.contentWindow document: " + e) } if (r) return r; try { r = t.contentDocument ? t.contentDocument : t.document } catch (e) { N("cannot get iframe.contentDocument: " + e), r = t.document } return r } var c = q("meta[name=csrf-token]").attr("content"), T = q("meta[name=csrf-param]").attr("content"); function j() { var e = X.attr2("target"), t = X.attr2("action"), r = X.attr("enctype") || X.attr("encoding") || "multipart/form-data"; i.setAttribute("target", o), O && !/post/i.test(O) || i.setAttribute("method", "POST"), t !== l.url && i.setAttribute("action", l.url), l.skipEncodingOverride || O && !/post/i.test(O) || X.attr({ encoding: "multipart/form-data", enctype: "multipart/form-data" }), l.timeout && (v = setTimeout(function () { h = !0, A(x) }, l.timeout)); var a = []; try { if (l.extraData) for (var n in l.extraData) l.extraData.hasOwnProperty(n) && (q.isPlainObject(l.extraData[n]) && l.extraData[n].hasOwnProperty("name") && l.extraData[n].hasOwnProperty("value") ? a.push(q('<input type="hidden" name="' + l.extraData[n].name + '">', s).val(l.extraData[n].value).appendTo(i)[0]) : a.push(q('<input type="hidden" name="' + n + '">', s).val(l.extraData[n]).appendTo(i)[0])); l.iframeTarget || d.appendTo(u), m.attachEvent ? m.attachEvent("onload", A) : m.addEventListener("load", A, !1), setTimeout(function e() { try { var t = b(m).readyState; N("state = " + t), t && "uninitialized" === t.toLowerCase() && setTimeout(e, 50) } catch (e) { N("Server abort: ", e, " (", e.name, ")"), A(y), v && clearTimeout(v), v = void 0 } }, 15); try { i.submit() } catch (e) { document.createElement("form").submit.apply(i) } } finally { i.setAttribute("action", t), i.setAttribute("enctype", r), e ? i.setAttribute("target", e) : X.removeAttr("target"), q(a).remove() } } T && c && (l.extraData = l.extraData || {}, l.extraData[T] = c), l.forceSync ? j() : setTimeout(j, 10); var w, S, k, D = 50; function A(e) { if (!p.aborted && !k) { if ((S = b(m)) || (N("cannot access response document"), e = y), e === x && p) return p.abort("timeout"), void g.reject(p, "timeout"); if (e === y && p) return p.abort("server abort"), void g.reject(p, "error", "server abort"); if (S && S.location.href !== l.iframeSrc || h) { m.detachEvent ? m.detachEvent("onload", A) : m.removeEventListener("load", A, !1); var t, r = "success"; try { if (h) throw "timeout"; var a = "xml" === l.dataType || S.XMLDocument || q.isXMLDoc(S); if (N("isXml=" + a), !a && window.opera && (null === S.body || !S.body.innerHTML) && --D) return N("requeing onLoad callback, DOM not available"), void setTimeout(A, 250); var n = S.body ? S.body : S.documentElement; p.responseText = n ? n.innerHTML : null, p.responseXML = S.XMLDocument ? S.XMLDocument : S, a && (l.dataType = "xml"), p.getResponseHeader = function (e) { return { "content-type": l.dataType }[e.toLowerCase()] }, n && (p.status = Number(n.getAttribute("status")) || p.status, p.statusText = n.getAttribute("statusText") || p.statusText); var o, i, s, u = (l.dataType || "").toLowerCase(), c = /(json|script|text)/.test(u); c || l.textarea ? (o = S.getElementsByTagName("textarea")[0]) ? (p.responseText = o.value, p.status = Number(o.getAttribute("status")) || p.status, p.statusText = o.getAttribute("statusText") || p.statusText) : c && (i = S.getElementsByTagName("pre")[0], s = S.getElementsByTagName("body")[0], i ? p.responseText = i.textContent ? i.textContent : i.innerText : s && (p.responseText = s.textContent ? s.textContent : s.innerText)) : "xml" === u && !p.responseXML && p.responseText && (p.responseXML = F(p.responseText)); try { w = E(p, u, l) } catch (e) { r = "parsererror", p.error = t = e || r } } catch (e) { N("error caught: ", e), r = "error", p.error = t = e || r } p.aborted && (N("upload aborted"), r = null), p.status && (r = 200 <= p.status && p.status < 300 || 304 === p.status ? "success" : "error"), "success" === r ? (l.success && l.success.call(l.context, w, "success", p), g.resolve(p.responseText, "success", p), f && q.event.trigger("ajaxSuccess", [p, l])) : r && (void 0 === t && (t = p.statusText), l.error && l.error.call(l.context, p, r, t), g.reject(p, "error", t), f && q.event.trigger("ajaxError", [p, l, t])), f && q.event.trigger("ajaxComplete", [p, l]), f && !--q.active && q.event.trigger("ajaxStop"), l.complete && l.complete.call(l.context, p, r), k = !0, l.timeout && clearTimeout(v), setTimeout(function () { l.iframeTarget ? d.attr("src", l.iframeSrc) : d.remove(), p.responseXML = null }, 100) } } } var F = q.parseXML || function (e, t) { return window.ActiveXObject ? ((t = new ActiveXObject("Microsoft.XMLDOM")).async = "false", t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" !== t.documentElement.nodeName ? t : null }, L = q.parseJSON || function (e) { return window.eval("(" + e + ")") }, E = function (e, t, r) { var a = e.getResponseHeader("content-type") || "", n = ("xml" === t || !t) && 0 <= a.indexOf("xml"), o = n ? e.responseXML : e.responseText; return n && "parsererror" === o.documentElement.nodeName && q.error && q.error("parsererror"), r && r.dataFilter && (o = r.dataFilter(o, t)), "string" == typeof o && (("json" === t || !t) && 0 <= a.indexOf("json") ? o = L(o) : ("script" === t || !t) && 0 <= a.indexOf("javascript") && q.globalEval(o)), o }; return g } }, q.fn.ajaxForm = function (e, t, r, a) { if (("string" == typeof e || !1 === e && 0 < arguments.length) && (e = { url: e, data: t, dataType: r }, "function" == typeof a && (e.success = a)), (e = e || {}).delegation = e.delegation && q.isFunction(q.fn.on), e.delegation || 0 !== this.length) return e.delegation ? (q(document).off("submit.form-plugin", this.selector, o).off("click.form-plugin", this.selector, i).on("submit.form-plugin", this.selector, e, o).on("click.form-plugin", this.selector, e, i), this) : (e.beforeFormUnbind && e.beforeFormUnbind(this, e), this.ajaxFormUnbind().on("submit.form-plugin", e, o).on("click.form-plugin", e, i)); var n = { s: this.selector, c: this.context }; return !q.isReady && n.s ? (N("DOM not ready, queuing ajaxForm"), q(function () { q(n.s, n.c).ajaxForm(e) })) : N("terminating; zero elements found by selector" + (q.isReady ? "" : " (DOM not ready)")), this }, q.fn.ajaxFormUnbind = function () { return this.off("submit.form-plugin click.form-plugin") }, q.fn.formToArray = function (e, t, r) { var a = []; if (0 === this.length) return a; var n, o, i, s, u, c, l, f, d, m, p = this[0], h = this.attr("id"), v = (v = e || void 0 === p.elements ? p.getElementsByTagName("*") : p.elements) && q.makeArray(v); if (h && (e || /(Edge|Trident)\//.test(navigator.userAgent)) && (n = q(':input[form="' + h + '"]').get()).length && (v = (v || []).concat(n)), !v || !v.length) return a; for (q.isFunction(r) && (v = q.map(v, r)), o = 0, c = v.length; o < c; o++)if ((m = (u = v[o]).name) && !u.disabled) if (e && p.clk && "image" === u.type) p.clk === u && (a.push({ name: m, value: q(u).val(), type: u.type }), a.push({ name: m + ".x", value: p.clk_x }, { name: m + ".y", value: p.clk_y })); else if ((s = q.fieldValue(u, !0)) && s.constructor === Array) for (t && t.push(u), i = 0, l = s.length; i < l; i++)a.push({ name: m, value: s[i] }); else if (S.fileapi && "file" === u.type) { t && t.push(u); var g = u.files; if (g.length) for (i = 0; i < g.length; i++)a.push({ name: m, value: g[i], type: u.type }); else a.push({ name: m, value: "", type: u.type }) } else null != s && (t && t.push(u), a.push({ name: m, value: s, type: u.type, required: u.required })); return e || !p.clk || (m = (d = (f = q(p.clk))[0]).name) && !d.disabled && "image" === d.type && (a.push({ name: m, value: f.val() }), a.push({ name: m + ".x", value: p.clk_x }, { name: m + ".y", value: p.clk_y })), a }, q.fn.formSerialize = function (e) { return q.param(this.formToArray(e)) }, q.fn.fieldSerialize = function (n) { var o = []; return this.each(function () { var e = this.name; if (e) { var t = q.fieldValue(this, n); if (t && t.constructor === Array) for (var r = 0, a = t.length; r < a; r++)o.push({ name: e, value: t[r] }); else null != t && o.push({ name: this.name, value: t }) } }), q.param(o) }, q.fn.fieldValue = function (e) { for (var t = [], r = 0, a = this.length; r < a; r++) { var n = this[r], o = q.fieldValue(n, e); null == o || o.constructor === Array && !o.length || (o.constructor === Array ? q.merge(t, o) : t.push(o)) } return t }, q.fieldValue = function (e, t) { var r = e.name, a = e.type, n = e.tagName.toLowerCase(); if (void 0 === t && (t = !0), t && (!r || e.disabled || "reset" === a || "button" === a || ("checkbox" === a || "radio" === a) && !e.checked || ("submit" === a || "image" === a) && e.form && e.form.clk !== e || "select" === n && -1 === e.selectedIndex)) return null; if ("select" !== n) return q(e).val().replace(m, "\r\n"); var o = e.selectedIndex; if (o < 0) return null; for (var i = [], s = e.options, u = "select-one" === a, c = u ? o + 1 : s.length, l = u ? o : 0; l < c; l++) { var f = s[l]; if (f.selected && !f.disabled) { var d = (d = f.value) || (f.attributes && f.attributes.value && !f.attributes.value.specified ? f.text : f.value); if (u) return d; i.push(d) } } return i }, q.fn.clearForm = function (e) { return this.each(function () { q("input,select,textarea", this).clearFields(e) }) }, q.fn.clearFields = q.fn.clearInputs = function (r) { var a = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i; return this.each(function () { var e = this.type, t = this.tagName.toLowerCase(); a.test(e) || "textarea" === t ? this.value = "" : "checkbox" === e || "radio" === e ? this.checked = !1 : "select" === t ? this.selectedIndex = -1 : "file" === e ? /MSIE/.test(navigator.userAgent) ? q(this).replaceWith(q(this).clone(!0)) : q(this).val("") : r && (!0 === r && /hidden/.test(e) || "string" == typeof r && q(this).is(r)) && (this.value = "") }) }, q.fn.resetForm = function () { return this.each(function () { var t = q(this), e = this.tagName.toLowerCase(); switch (e) { case "input": this.checked = this.defaultChecked; case "textarea": return this.value = this.defaultValue, !0; case "option": case "optgroup": var r = t.parents("select"); return r.length && r[0].multiple ? "option" === e ? this.selected = this.defaultSelected : t.find("option").resetForm() : r.resetForm(), !0; case "select": return t.find("option").each(function (e) { if (this.selected = this.defaultSelected, this.defaultSelected && !t[0].multiple) return t[0].selectedIndex = e, !1 }), !0; case "label": var a = q(t.attr("for")), n = t.find("input,select,textarea"); return a[0] && n.unshift(a[0]), n.resetForm(), !0; case "form": return "function" != typeof this.reset && ("object" != typeof this.reset || this.reset.nodeType) || this.reset(), !0; default: return t.find("form,input,label,select,textarea").resetForm(), !0 } }) }, q.fn.enable = function (e) { return void 0 === e && (e = !0), this.each(function () { this.disabled = !e }) }, q.fn.selected = function (r) { return void 0 === r && (r = !0), this.each(function () { var e, t = this.type; "checkbox" === t || "radio" === t ? this.checked = r : "option" === this.tagName.toLowerCase() && (e = q(this).parent("select"), r && e[0] && "select-one" === e[0].type && e.find("option").selected(!1), this.selected = r) }) }, q.fn.ajaxSubmit.debug = !1 });

;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, debounce) {
    var offsets = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
    function getRawOffset(el, edge) {
        var $el = $(el);
        var documentElement = document.documentElement;
        var displacement = 0;
        var horizontal = edge === 'left' || edge === 'right';
        var placement = $el.offset()[horizontal ? 'left' : 'top'];
        placement -= window["scroll".concat(horizontal ? 'X' : 'Y')] || document.documentElement["scroll".concat(horizontal ? 'Left' : 'Top')] || 0;
        switch (edge) {
            case 'top':
                displacement = placement + $el.outerHeight();
                break;
            case 'left':
                displacement = placement + $el.outerWidth();
                break;
            case 'bottom':
                displacement = documentElement.clientHeight - placement;
                break;
            case 'right':
                displacement = documentElement.clientWidth - placement;
                break;
            default:
                displacement = 0;
        }
        return displacement;
    }
    function calculateOffset(edge) {
        var edgeOffset = 0;
        var displacingElements = document.querySelectorAll("[data-offset-".concat(edge, "]"));
        var n = displacingElements.length;
        for (var i = 0; i < n; i++) {
            var el = displacingElements[i];
            if (el.style.display === 'none') {
                continue;
            }
            var displacement = parseInt(el.getAttribute("data-offset-".concat(edge)), 10);
            if (isNaN(displacement)) {
                displacement = getRawOffset(el, edge);
            }
            edgeOffset = Math.max(edgeOffset, displacement);
        }
        return edgeOffset;
    }
    function calculateOffsets() {
        return {
            top: calculateOffset('top'),
            right: calculateOffset('right'),
            bottom: calculateOffset('bottom'),
            left: calculateOffset('left')
        };
    }
    function displace(broadcast) {
        offsets = calculateOffsets();
        Drupal.displace.offsets = offsets;
        if (typeof broadcast === 'undefined' || broadcast) {
            $(document).trigger('drupalViewportOffsetChange', offsets);
        }
        return offsets;
    }
    Drupal.behaviors.drupalDisplace = {
        attach: function attach() {
            if (this.displaceProcessed) {
                return;
            }
            this.displaceProcessed = true;
            $(window).on('resize.drupalDisplace', debounce(displace, 200));
        }
    };
    Drupal.displace = displace;
    $.extend(Drupal.displace, {
        offsets: offsets,
        calculateOffset: calculateOffset
    });
})(jQuery, Drupal, Drupal.debounce);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, _ref) {
    var isTabbable = _ref.isTabbable;
    $.extend($.expr[':'], {
        tabbable: function tabbable(element) {
            Drupal.deprecationError({
                message: 'The :tabbable selector is deprecated in Drupal 9.2.0 and will be removed in Drupal 11.0.0. Use the core/tabbable library instead. See https://www.drupal.org/node/3183730'
            });
            if (element.tagName === 'SUMMARY' || element.tagName === 'DETAILS') {
                var tabIndex = element.getAttribute('tabIndex');
                if (tabIndex === null || tabIndex < 0) {
                    return false;
                }
            }
            return isTabbable(element);
        }
    });
})(jQuery, Drupal, window.tabbable);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($) {
    var cachedScrollbarWidth = null;
    var max = Math.max,
        abs = Math.abs;
    var regexHorizontal = /left|center|right/;
    var regexVertical = /top|center|bottom/;
    var regexOffset = /[+-]\d+(\.[\d]+)?%?/;
    var regexPosition = /^\w+/;
    var regexPercent = /%$/;
    var _position = $.fn.position;
    function getOffsets(offsets, width, height) {
        return [parseFloat(offsets[0]) * (regexPercent.test(offsets[0]) ? width / 100 : 1), parseFloat(offsets[1]) * (regexPercent.test(offsets[1]) ? height / 100 : 1)];
    }
    function parseCss(element, property) {
        return parseInt($.css(element, property), 10) || 0;
    }
    function getDimensions(elem) {
        var raw = elem[0];
        if (raw.nodeType === 9) {
            return {
                width: elem.width(),
                height: elem.height(),
                offset: {
                    top: 0,
                    left: 0
                }
            };
        }
        if ($.isWindow(raw)) {
            return {
                width: elem.width(),
                height: elem.height(),
                offset: {
                    top: elem.scrollTop(),
                    left: elem.scrollLeft()
                }
            };
        }
        if (raw.preventDefault) {
            return {
                width: 0,
                height: 0,
                offset: {
                    top: raw.pageY,
                    left: raw.pageX
                }
            };
        }
        return {
            width: elem.outerWidth(),
            height: elem.outerHeight(),
            offset: elem.offset()
        };
    }
    var collisions = {
        fit: {
            left: function left(position, data) {
                var within = data.within;
                var withinOffset = within.isWindow ? within.scrollLeft : within.offset.left;
                var outerWidth = within.width;
                var collisionPosLeft = position.left - data.collisionPosition.marginLeft;
                var overLeft = withinOffset - collisionPosLeft;
                var overRight = collisionPosLeft + data.collisionWidth - outerWidth - withinOffset;
                var newOverRight;
                if (data.collisionWidth > outerWidth) {
                    if (overLeft > 0 && overRight <= 0) {
                        newOverRight = position.left + overLeft + data.collisionWidth - outerWidth - withinOffset;
                        position.left += overLeft - newOverRight;
                    } else if (overRight > 0 && overLeft <= 0) {
                        position.left = withinOffset;
                    } else if (overLeft > overRight) {
                        position.left = withinOffset + outerWidth - data.collisionWidth;
                    } else {
                        position.left = withinOffset;
                    }
                } else if (overLeft > 0) {
                    position.left += overLeft;
                } else if (overRight > 0) {
                    position.left -= overRight;
                } else {
                    position.left = max(position.left - collisionPosLeft, position.left);
                }
            },
            top: function top(position, data) {
                var within = data.within;
                var withinOffset = within.isWindow ? within.scrollTop : within.offset.top;
                var outerHeight = data.within.height;
                var collisionPosTop = position.top - data.collisionPosition.marginTop;
                var overTop = withinOffset - collisionPosTop;
                var overBottom = collisionPosTop + data.collisionHeight - outerHeight - withinOffset;
                var newOverBottom;
                if (data.collisionHeight > outerHeight) {
                    if (overTop > 0 && overBottom <= 0) {
                        newOverBottom = position.top + overTop + data.collisionHeight - outerHeight - withinOffset;
                        position.top += overTop - newOverBottom;
                    } else if (overBottom > 0 && overTop <= 0) {
                        position.top = withinOffset;
                    } else if (overTop > overBottom) {
                        position.top = withinOffset + outerHeight - data.collisionHeight;
                    } else {
                        position.top = withinOffset;
                    }
                } else if (overTop > 0) {
                    position.top += overTop;
                } else if (overBottom > 0) {
                    position.top -= overBottom;
                } else {
                    position.top = max(position.top - collisionPosTop, position.top);
                }
            }
        },
        flip: {
            left: function left(position, data) {
                var within = data.within;
                var withinOffset = within.offset.left + within.scrollLeft;
                var outerWidth = within.width;
                var offsetLeft = within.isWindow ? within.scrollLeft : within.offset.left;
                var collisionPosLeft = position.left - data.collisionPosition.marginLeft;
                var overLeft = collisionPosLeft - offsetLeft;
                var overRight = collisionPosLeft + data.collisionWidth - outerWidth - offsetLeft;
                var myOffset = data.my[0] === 'left' ? -data.elemWidth : data.my[0] === 'right' ? data.elemWidth : 0;
                var atOffset = data.at[0] === 'left' ? data.targetWidth : data.at[0] === 'right' ? -data.targetWidth : 0;
                var offset = -2 * data.offset[0];
                var newOverRight;
                var newOverLeft;
                if (overLeft < 0) {
                    newOverRight = position.left + myOffset + atOffset + offset + data.collisionWidth - outerWidth - withinOffset;
                    if (newOverRight < 0 || newOverRight < abs(overLeft)) {
                        position.left += myOffset + atOffset + offset;
                    }
                } else if (overRight > 0) {
                    newOverLeft = position.left - data.collisionPosition.marginLeft + myOffset + atOffset + offset - offsetLeft;
                    if (newOverLeft > 0 || abs(newOverLeft) < overRight) {
                        position.left += myOffset + atOffset + offset;
                    }
                }
            },
            top: function top(position, data) {
                var within = data.within;
                var withinOffset = within.offset.top + within.scrollTop;
                var outerHeight = within.height;
                var offsetTop = within.isWindow ? within.scrollTop : within.offset.top;
                var collisionPosTop = position.top - data.collisionPosition.marginTop;
                var overTop = collisionPosTop - offsetTop;
                var overBottom = collisionPosTop + data.collisionHeight - outerHeight - offsetTop;
                var top = data.my[1] === 'top';
                var myOffset = top ? -data.elemHeight : data.my[1] === 'bottom' ? data.elemHeight : 0;
                var atOffset = data.at[1] === 'top' ? data.targetHeight : data.at[1] === 'bottom' ? -data.targetHeight : 0;
                var offset = -2 * data.offset[1];
                var newOverTop;
                var newOverBottom;
                if (overTop < 0) {
                    newOverBottom = position.top + myOffset + atOffset + offset + data.collisionHeight - outerHeight - withinOffset;
                    if (newOverBottom < 0 || newOverBottom < abs(overTop)) {
                        position.top += myOffset + atOffset + offset;
                    }
                } else if (overBottom > 0) {
                    newOverTop = position.top - data.collisionPosition.marginTop + myOffset + atOffset + offset - offsetTop;
                    if (newOverTop > 0 || abs(newOverTop) < overBottom) {
                        position.top += myOffset + atOffset + offset;
                    }
                }
            }
        },
        flipfit: {
            left: function left() {
                for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                    args[_key] = arguments[_key];
                }
                collisions.flip.left.apply(this, args);
                collisions.fit.left.apply(this, args);
            },
            top: function top() {
                for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    args[_key2] = arguments[_key2];
                }
                collisions.flip.top.apply(this, args);
                collisions.fit.top.apply(this, args);
            }
        }
    };
    $.position = {
        scrollbarWidth: function scrollbarWidth() {
            if (cachedScrollbarWidth !== undefined) {
                return cachedScrollbarWidth;
            }
            var div = $('<div ' + "style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'>" + "<div style='height:100px;width:auto;'></div></div>");
            var innerDiv = div.children()[0];
            $('body').append(div);
            var w1 = innerDiv.offsetWidth;
            div.css('overflow', 'scroll');
            var w2 = innerDiv.offsetWidth;
            if (w1 === w2) {
                w2 = div[0].clientWidth;
            }
            div.remove();
            cachedScrollbarWidth = w1 - w2;
            return cachedScrollbarWidth;
        },
        getScrollInfo: function getScrollInfo(within) {
            var overflowX = within.isWindow || within.isDocument ? '' : within.element.css('overflow-x');
            var overflowY = within.isWindow || within.isDocument ? '' : within.element.css('overflow-y');
            var hasOverflowX = overflowX === 'scroll' || overflowX === 'auto' && within.width < within.element[0].scrollWidth;
            var hasOverflowY = overflowY === 'scroll' || overflowY === 'auto' && within.height < within.element[0].scrollHeight;
            return {
                width: hasOverflowY ? $.position.scrollbarWidth() : 0,
                height: hasOverflowX ? $.position.scrollbarWidth() : 0
            };
        },
        getWithinInfo: function getWithinInfo(element) {
            var withinElement = $(element || window);
            var isWindow = $.isWindow(withinElement[0]);
            var isDocument = !!withinElement[0] && withinElement[0].nodeType === 9;
            var hasOffset = !isWindow && !isDocument;
            return {
                element: withinElement,
                isWindow: isWindow,
                isDocument: isDocument,
                offset: hasOffset ? $(element).offset() : {
                    left: 0,
                    top: 0
                },
                scrollLeft: withinElement.scrollLeft(),
                scrollTop: withinElement.scrollTop(),
                width: withinElement.outerWidth(),
                height: withinElement.outerHeight()
            };
        }
    };
    $.fn.position = function (options) {
        if (!options || !options.of) {
            return _position.apply(this, arguments);
        }
        options = $.extend({}, options);
        var within = $.position.getWithinInfo(options.within);
        var scrollInfo = $.position.getScrollInfo(within);
        var collision = (options.collision || 'flip').split(' ');
        var offsets = {};
        var target = typeof options.of === 'string' ? $(document).find(options.of) : $(options.of);
        var dimensions = getDimensions(target);
        var targetWidth = dimensions.width;
        var targetHeight = dimensions.height;
        var targetOffset = dimensions.offset;
        if (target[0].preventDefault) {
            options.at = 'left top';
        }
        var basePosition = $.extend({}, targetOffset);
        $.each(['my', 'at'], function () {
            var pos = (options[this] || '').split(' ');
            if (pos.length === 1) {
                pos = regexHorizontal.test(pos[0]) ? pos.concat(['center']) : regexVertical.test(pos[0]) ? ['center'].concat(pos) : ['center', 'center'];
            }
            pos[0] = regexHorizontal.test(pos[0]) ? pos[0] : 'center';
            pos[1] = regexVertical.test(pos[1]) ? pos[1] : 'center';
            var horizontalOffset = regexOffset.exec(pos[0]);
            var verticalOffset = regexOffset.exec(pos[1]);
            offsets[this] = [horizontalOffset ? horizontalOffset[0] : 0, verticalOffset ? verticalOffset[0] : 0];
            options[this] = [regexPosition.exec(pos[0])[0], regexPosition.exec(pos[1])[0]];
        });
        if (collision.length === 1) {
            collision[1] = collision[0];
        }
        if (options.at[0] === 'right') {
            basePosition.left += targetWidth;
        } else if (options.at[0] === 'center') {
            basePosition.left += targetWidth / 2;
        }
        if (options.at[1] === 'bottom') {
            basePosition.top += targetHeight;
        } else if (options.at[1] === 'center') {
            basePosition.top += targetHeight / 2;
        }
        var atOffset = getOffsets(offsets.at, targetWidth, targetHeight);
        basePosition.left += atOffset[0];
        basePosition.top += atOffset[1];
        return this.each(function () {
            var using;
            var elem = $(this);
            var elemWidth = elem.outerWidth();
            var elemHeight = elem.outerHeight();
            var marginLeft = parseCss(this, 'marginLeft');
            var marginTop = parseCss(this, 'marginTop');
            var collisionWidth = elemWidth + marginLeft + parseCss(this, 'marginRight') + scrollInfo.width;
            var collisionHeight = elemHeight + marginTop + parseCss(this, 'marginBottom') + scrollInfo.height;
            var position = $.extend({}, basePosition);
            var myOffset = getOffsets(offsets.my, elem.outerWidth(), elem.outerHeight());
            if (options.my[0] === 'right') {
                position.left -= elemWidth;
            } else if (options.my[0] === 'center') {
                position.left -= elemWidth / 2;
            }
            if (options.my[1] === 'bottom') {
                position.top -= elemHeight;
            } else if (options.my[1] === 'center') {
                position.top -= elemHeight / 2;
            }
            position.left += myOffset[0];
            position.top += myOffset[1];
            var collisionPosition = {
                marginLeft: marginLeft,
                marginTop: marginTop
            };
            $.each(['left', 'top'], function (i, dir) {
                if (collisions[collision[i]]) {
                    collisions[collision[i]][dir](position, {
                        targetWidth: targetWidth,
                        targetHeight: targetHeight,
                        elemWidth: elemWidth,
                        elemHeight: elemHeight,
                        collisionPosition: collisionPosition,
                        collisionWidth: collisionWidth,
                        collisionHeight: collisionHeight,
                        offset: [atOffset[0] + myOffset[0], atOffset[1] + myOffset[1]],
                        my: options.my,
                        at: options.at,
                        within: within,
                        elem: elem
                    });
                }
            });
            if (options.using) {
                using = function using(props) {
                    var left = targetOffset.left - position.left;
                    var right = left + targetWidth - elemWidth;
                    var top = targetOffset.top - position.top;
                    var bottom = top + targetHeight - elemHeight;
                    var feedback = {
                        target: {
                            element: target,
                            left: targetOffset.left,
                            top: targetOffset.top,
                            width: targetWidth,
                            height: targetHeight
                        },
                        element: {
                            element: elem,
                            left: position.left,
                            top: position.top,
                            width: elemWidth,
                            height: elemHeight
                        },
                        horizontal: right < 0 ? 'left' : left > 0 ? 'right' : 'center',
                        vertical: bottom < 0 ? 'top' : top > 0 ? 'bottom' : 'middle'
                    };
                    if (targetWidth < elemWidth && abs(left + right) < targetWidth) {
                        feedback.horizontal = 'center';
                    }
                    if (targetHeight < elemHeight && abs(top + bottom) < targetHeight) {
                        feedback.vertical = 'middle';
                    }
                    if (max(abs(left), abs(right)) > max(abs(top), abs(bottom))) {
                        feedback.important = 'horizontal';
                    } else {
                        feedback.important = 'vertical';
                    }
                    options.using.call(this, props, feedback);
                };
            }
            elem.offset($.extend(position, {
                using: using
            }));
        });
    };
    if (!$.hasOwnProperty('ui')) {
        $.ui = {};
    }
    $.ui.position = collisions;
})(jQuery);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, drupalSettings) {
    drupalSettings.dialog = {
        autoOpen: true,
        dialogClass: '',
        buttonClass: 'button',
        buttonPrimaryClass: 'button--primary',
        close: function close(event) {
            Drupal.dialog(event.target).close();
            Drupal.detachBehaviors(event.target, null, 'unload');
        }
    };
    Drupal.dialog = function (element, options) {
        var undef;
        var $element = $(element);
        var dialog = {
            open: false,
            returnValue: undef
        };
        function openDialog(settings) {
            settings = $.extend({}, drupalSettings.dialog, options, settings);
            $(window).trigger('dialog:beforecreate', [dialog, $element, settings]);
            $element.dialog(settings);
            dialog.open = true;
            $(window).trigger('dialog:aftercreate', [dialog, $element, settings]);
        }
        function closeDialog(value) {
            $(window).trigger('dialog:beforeclose', [dialog, $element]);
            $element.dialog('close');
            dialog.returnValue = value;
            dialog.open = false;
            $(window).trigger('dialog:afterclose', [dialog, $element]);
        }
        dialog.show = function () {
            openDialog({
                modal: false
            });
        };
        dialog.showModal = function () {
            openDialog({
                modal: true
            });
        };
        dialog.close = closeDialog;
        return dialog;
    };
})(jQuery, Drupal, drupalSettings);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal, drupalSettings, debounce, displace) {
    drupalSettings.dialog = $.extend({
        autoResize: true,
        maxHeight: '95%'
    }, drupalSettings.dialog);
    function resetPosition(options) {
        var offsets = displace.offsets;
        var left = offsets.left - offsets.right;
        var top = offsets.top - offsets.bottom;
        var leftString = "".concat((left > 0 ? '+' : '-') + Math.abs(Math.round(left / 2)), "px");
        var topString = "".concat((top > 0 ? '+' : '-') + Math.abs(Math.round(top / 2)), "px");
        options.position = {
            my: "center".concat(left !== 0 ? leftString : '', " center").concat(top !== 0 ? topString : ''),
            of: window
        };
        return options;
    }
    function resetSize(event) {
        var positionOptions = ['width', 'height', 'minWidth', 'minHeight', 'maxHeight', 'maxWidth', 'position'];
        var adjustedOptions = {};
        var windowHeight = $(window).height();
        var option;
        var optionValue;
        var adjustedValue;
        for (var n = 0; n < positionOptions.length; n++) {
            option = positionOptions[n];
            optionValue = event.data.settings[option];
            if (optionValue) {
                if (typeof optionValue === 'string' && /%$/.test(optionValue) && /height/i.test(option)) {
                    windowHeight -= displace.offsets.top + displace.offsets.bottom;
                    adjustedValue = parseInt(0.01 * parseInt(optionValue, 10) * windowHeight, 10);
                    if (option === 'height' && event.data.$element.parent().outerHeight() < adjustedValue) {
                        adjustedValue = 'auto';
                    }
                    adjustedOptions[option] = adjustedValue;
                }
            }
        }
        if (!event.data.settings.modal) {
            adjustedOptions = resetPosition(adjustedOptions);
        }
        event.data.$element.dialog('option', adjustedOptions).trigger('dialogContentResize');
    }
    $(window).on({
        'dialog:aftercreate': function dialogAftercreate(event, dialog, $element, settings) {
            var autoResize = debounce(resetSize, 20);
            var eventData = {
                settings: settings,
                $element: $element
            };
            if (settings.autoResize === true || settings.autoResize === 'true') {
                $element.dialog('option', {
                    resizable: false,
                    draggable: false
                }).dialog('widget').css('position', 'fixed');
                $(window).on('resize.dialogResize scroll.dialogResize', eventData, autoResize).trigger('resize.dialogResize');
                $(document).on('drupalViewportOffsetChange.dialogResize', eventData, autoResize);
            }
        },
        'dialog:beforeclose': function dialogBeforeclose(event, dialog, $element) {
            $(window).off('.dialogResize');
            $(document).off('.dialogResize');
        }
    });
})(jQuery, Drupal, drupalSettings, Drupal.debounce, Drupal.displace);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, _ref) {
    var tabbable = _ref.tabbable,
        isTabbable = _ref.isTabbable;
    $.widget('ui.dialog', $.ui.dialog, {
        options: {
            buttonClass: 'button',
            buttonPrimaryClass: 'button--primary'
        },
        _createButtons: function _createButtons() {
            var opts = this.options;
            var primaryIndex;
            var index;
            var il = opts.buttons.length;
            for (index = 0; index < il; index++) {
                if (opts.buttons[index].primary && opts.buttons[index].primary === true) {
                    primaryIndex = index;
                    delete opts.buttons[index].primary;
                    break;
                }
            }
            this._super();
            var $buttons = this.uiButtonSet.children().addClass(opts.buttonClass);
            if (typeof primaryIndex !== 'undefined') {
                $buttons.eq(index).addClass(opts.buttonPrimaryClass);
            }
        },
        _focusTabbable: function _focusTabbable() {
            var hasFocus = this._focusedElement ? this._focusedElement.get(0) : null;
            if (!hasFocus) {
                hasFocus = this.element.find('[autofocus]').get(0);
            }
            if (!hasFocus) {
                var $elements = [this.element, this.uiDialogButtonPane];
                for (var i = 0; i < $elements.length; i++) {
                    var element = $elements[i].get(0);
                    if (element) {
                        var elementTabbable = tabbable(element);
                        hasFocus = elementTabbable.length ? elementTabbable[0] : null;
                    }
                    if (hasFocus) {
                        break;
                    }
                }
            }
            if (!hasFocus) {
                var closeBtn = this.uiDialogTitlebarClose.get(0);
                hasFocus = closeBtn && isTabbable(closeBtn) ? closeBtn : null;
            }
            if (!hasFocus) {
                hasFocus = this.uiDialog.get(0);
            }
            $(hasFocus).eq(0).trigger('focus');
        }
    });
})(jQuery, window.tabbable);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($) {
    $.widget('ui.dialog', $.ui.dialog, {
        _allowInteraction: function _allowInteraction(event) {
            return event.target.classList.contains('ck') || this._super(event);
        }
    });
})(jQuery);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/
(function ($, Drupal) {
    Drupal.behaviors.dialog = {
        attach: function attach(context, settings) {
            var $context = $(context);
            if (!$('#drupal-modal').length) {
                $('<div id="drupal-modal" class="ui-front"></div>').hide().appendTo('body');
            }
            var $dialog = $context.closest('.ui-dialog-content');
            if ($dialog.length) {
                if ($dialog.dialog('option', 'drupalAutoButtons')) {
                    $dialog.trigger('dialogButtonsChange');
                }
                $dialog.dialog('widget').trigger('focus');
            }
            var originalClose = settings.dialog.close;
            settings.dialog.close = function (event) {
                for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                    args[_key - 1] = arguments[_key];
                }
                originalClose.apply(settings.dialog, [event].concat(args));
                $(event.target).remove();
            };
        },
        prepareDialogButtons: function prepareDialogButtons($dialog) {
            var buttons = [];
            var $buttons = $dialog.find('.form-actions input[type=submit], .form-actions a.button');
            $buttons.each(function () {
                var $originalButton = $(this).css({
                    display: 'none'
                });
                buttons.push({
                    text: $originalButton.html() || $originalButton.attr('value'),
                    class: $originalButton.attr('class'),
                    click: function click(e) {
                        if ($originalButton.is('a')) {
                            $originalButton[0].click();
                        } else {
                            $originalButton.trigger('mousedown').trigger('mouseup').trigger('click');
                            e.preventDefault();
                        }
                    }
                });
            });
            return buttons;
        }
    };
    Drupal.AjaxCommands.prototype.openDialog = function (ajax, response, status) {
        if (!response.selector) {
            return false;
        }
        var $dialog = $(response.selector);
        if (!$dialog.length) {
            $dialog = $("<div id=\"".concat(response.selector.replace(/^#/, ''), "\" class=\"ui-front\"></div>")).appendTo('body');
        }
        if (!ajax.wrapper) {
            ajax.wrapper = $dialog.attr('id');
        }
        response.command = 'insert';
        response.method = 'html';
        ajax.commands.insert(ajax, response, status);
        if (!response.dialogOptions.buttons) {
            response.dialogOptions.drupalAutoButtons = true;
            response.dialogOptions.buttons = Drupal.behaviors.dialog.prepareDialogButtons($dialog);
        }
        $dialog.on('dialogButtonsChange', function () {
            var buttons = Drupal.behaviors.dialog.prepareDialogButtons($dialog);
            $dialog.dialog('option', 'buttons', buttons);
        });
        response.dialogOptions = response.dialogOptions || {};
        var dialog = Drupal.dialog($dialog.get(0), response.dialogOptions);
        if (response.dialogOptions.modal) {
            dialog.showModal();
        } else {
            dialog.show();
        }
        $dialog.parent().find('.ui-dialog-buttonset').addClass('form-actions');
    };
    Drupal.AjaxCommands.prototype.closeDialog = function (ajax, response, status) {
        var $dialog = $(response.selector);
        if ($dialog.length) {
            Drupal.dialog($dialog.get(0)).close();
            if (!response.persist) {
                $dialog.remove();
            }
        }
        $dialog.off('dialogButtonsChange');
    };
    Drupal.AjaxCommands.prototype.setDialogOption = function (ajax, response, status) {
        var $dialog = $(response.selector);
        if ($dialog.length) {
            $dialog.dialog('option', response.optionName, response.optionValue);
        }
    };
    $(window).on('dialog:aftercreate', function (e, dialog, $element, settings) {
        $element.on('click.dialog', '.dialog-cancel', function (e) {
            dialog.close('cancel');
            e.preventDefault();
            e.stopPropagation();
        });
    });
    $(window).on('dialog:beforeclose', function (e, dialog, $element) {
        $element.off('.dialog');
    });
})(jQuery, Drupal);;
/*! js-cookie v3.0.1 | MIT */
!function (e, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self, function () { var n = e.Cookies, o = e.Cookies = t(); o.noConflict = function () { return e.Cookies = n, o } }()) }(this, (function () { "use strict"; function e(e) { for (var t = 1; t < arguments.length; t++) { var n = arguments[t]; for (var o in n) e[o] = n[o] } return e } return function t(n, o) { function r(t, r, i) { if ("undefined" != typeof document) { "number" == typeof (i = e({}, o, i)).expires && (i.expires = new Date(Date.now() + 864e5 * i.expires)), i.expires && (i.expires = i.expires.toUTCString()), t = encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape); var c = ""; for (var u in i) i[u] && (c += "; " + u, !0 !== i[u] && (c += "=" + i[u].split(";")[0])); return document.cookie = t + "=" + n.write(r, t) + c } } return Object.create({ set: r, get: function (e) { if ("undefined" != typeof document && (!arguments.length || e)) { for (var t = document.cookie ? document.cookie.split("; ") : [], o = {}, r = 0; r < t.length; r++) { var i = t[r].split("="), c = i.slice(1).join("="); try { var u = decodeURIComponent(i[0]); if (o[u] = n.read(c, u), e === u) break } catch (e) { } } return e ? o[e] : o } }, remove: function (t, n) { r(t, "", e({}, n, { expires: -1 })) }, withAttributes: function (n) { return t(this.converter, e({}, this.attributes, n)) }, withConverter: function (n) { return t(e({}, this.converter, n), this.attributes) } }, { attributes: { value: Object.freeze(o) }, converter: { value: Object.freeze(n) } }) }({ read: function (e) { return '"' === e[0] && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent) }, write: function (e) { return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent) } }, { path: "/" }) }));
;
/**
 * @file
 * Js file for this module.
 */

(function ($, Drupal, fileUtilitySettings, cookies) {
    /* To restrict user for dowloadable files
     * Permission check
     * User form to be filled in popup
     */
    var base_url = drupalSettings.path.baseUrl;
    var open_model = fileUtilitySettings.open_model_file;
    var file_force_download = fileUtilitySettings.file_force_download;
    var allowed_extensions = fileUtilitySettings.allowed_file_extensions;
    var allowed_contenttype = fileUtilitySettings.allowed_content_types;
    var pattern = new RegExp(allowed_extensions);
    // To open modal and open file directly on browser
    if (open_model == '1' && file_force_download == '0') {
        $('.post a').each(function () {
            var vfile = $(this).attr("href");
            if (pattern.test(vfile)) {
                var ftoken = encodeURIComponent(window.btoa(vfile));
                $(this).attr("href", "#");
                $(this).attr("target", "_self");
                $(this).addClass('use-ajax feed-crm-pop_open');
            }
        });
    }
    // To not open modal and force file download to save or download in browser
    else if (open_model == '0' && file_force_download == '1') {
        $('.post a').each(function () {
            var vfile = $(this).attr("href");
            if (pattern.test(vfile)) {
                var ftoken = encodeURIComponent(window.btoa(vfile));
                $(this).addClass('use-ajax feed-crm-pop_open');
                $(this).attr('file_path_att', ftoken);
                $(this).attr("href", '#');
                if (cookies.get('is_form_submited') == 1) {
                    $(this).attr("href", "#");
                    $(this).attr("target", "_self");
                }
            }
        });
    }
    // To open modal and force file download to save or download in browser
    else if (file_force_download == '1' && open_model == '1') {
        $('.post a').each(function () {
            var vfile = $(this).attr("href");
            if (pattern.test(vfile)) {
                var ftoken = window.btoa(unescape(encodeURIComponent(vfile)));
                $(this).attr("href", "#");
                $(this).attr("target", "_self");
                $(this).addClass('use-ajax feed-crm-pop_open');
            }
        });
    }
    // To not open modal and directly open file on browser
    else {
        $('.post a').each(function () {
            var vfile = $(this).attr("href");
            if (pattern.test(vfile)) {
                var ftoken = encodeURIComponent(window.btoa(vfile));
                $(this).attr("href", "#");
                $(this).attr("target", "_self");
                $(this).addClass('use-ajax feed-crm-pop_open');
            }
        });
    }
})(jQuery, Drupal, drupalSettings, window.Cookies);
;
(function ($, Drupal, drupalSettings, cookies) {
    'use strict';
    Drupal.behaviors.geoCookie = {
        attach: function (context, settings) {
            var country_redirect_links = drupalSettings.geo_website_urls;
            var referrer_exist = document.referrer;
            var default_fc_cookies_list = drupalSettings.geo_cookie_fc_default;
            var default_pc_cookies_list = drupalSettings.geo_cookie_pc_default;
            var geo_redirection_disable_option = (drupalSettings.geo_redirection_disable_option == null) ? 0 : drupalSettings.geo_redirection_disable_option;
            var bots_list_to_disable_geo_redirection = drupalSettings.bots_list_to_disable_geo_redirection;
            var lifetime = parseInt(drupalSettings.geo_cookie_lifetime);
            var default_cookies_for_others = (drupalSettings.default_cookies_for_others == null) ? 0 : drupalSettings.default_cookies_for_others;
            var prevFirstVisitCookieObj = [];
            var prevAgreedCountryCookieObj = [];
            var prevAgreedCategoriesObj = [];
            var allCategories = drupalSettings.eu_cookie_compliance.cookie_categories
            var necessary_cookie = allCategories[0];
            var functional_cookie = allCategories[1];
            var performance_cookie = allCategories[2];
            var onLabel = Drupal.t('On');
            var offLable = Drupal.t('Off');
            if (cookies.get('is_first_visit')) {
                var prevFirstVals = cookies.get('is_first_visit');
                // JS cookie introduced unescaped cookie values.
                prevFirstVisitCookieObj = JSON.parse(CookieDecode(prevFirstVals));
            }
            if (cookies.get('cookie_agreed_countries')) {
                var prevAgreedVals = cookies.get('cookie_agreed_countries');
                prevAgreedCountryCookieObj = JSON.parse(CookieDecode(prevAgreedVals));
            }
            if (cookies.get('cookie-agreed-categories')) {
                var prevAgreedCatVals = cookies.get('cookie-agreed-categories');
                prevAgreedCategoriesObj = JSON.parse(CookieDecode(prevAgreedCatVals));
            }
            if (cookies.get('is_first_visit_global') != undefined || (cookies.get('cookie_agreed_countries') != undefined && Array.isArray(JSON.parse(CookieDecode(cookies.get('cookie_agreed_countries')))))) {
                cookies.remove('is_first_visit_global', { path: '/' });
                cookies.remove('cookie-agreed-categories', { path: '/' });
                cookies.remove('cookie_agreed_countries', { path: '/' });
                cookies.remove('cookie-agreed', { path: '/' });

                cookies.remove('is_first_visit_global', { path: '/ca' });
                cookies.remove('cookie-agreed-categories', { path: '/ca' });
                cookies.remove('cookie_agreed_countries', { path: '/ca' });
                cookies.remove('cookie-agreed', { path: '/ca' });


                cookies.remove('is_first_visit_global', { path: '/fr' });
                cookies.remove('cookie-agreed-categories', { path: '/fr' });
                cookies.remove('cookie_agreed_countries', { path: '/fr' });
                cookies.remove('cookie-agreed', { path: '/fr' });

                cookies.remove('is_first_visit_global', { path: '/za' });
                cookies.remove('cookie-agreed-categories', { path: '/za' });
                cookies.remove('cookie_agreed_countries', { path: '/za' });
                cookies.remove('cookie-agreed', { path: '/za' });

                cookies.remove('is_first_visit_global', { path: '/uk' });
                cookies.remove('cookie-agreed-categories', { path: '/uk' });
                cookies.remove('cookie_agreed_countries', { path: '/uk' });
                cookies.remove('cookie-agreed', { path: '/uk' });

                cookies.remove('is_first_visit_global', { path: '/in' });
                cookies.remove('cookie-agreed-categories', { path: '/in' });
                cookies.remove('cookie_agreed_countries', { path: '/in' });
                cookies.remove('cookie-agreed', { path: '/in' });
            }
            /* cookie agreed key delete */
            if (typeof cookies.get('cookie_agreed_countries') == 'undefined' || prevAgreedCountryCookieObj[visit_site] == undefined || $.inArray(geo_country_code, prevAgreedCountryCookieObj[visit_site]) == -1) {
                cookies.remove('cookie-agreed', { path: '/' });
            } else if (typeof cookies.get('cookie_agreed_countries') != 'undefined' || prevAgreedCountryCookieObj[visit_site] != undefined || $.inArray(geo_country_code, prevAgreedCountryCookieObj[visit_site]) != -1) {
                cookies.set('cookie-agreed', 2, { expires: lifetime, path: '/', sameSite: 'strict' });
            }
            /* set cookie firstime visit to the website */
            if (referrer_exist == "") {
                if (check_is_first_cookie()) {
                    set_first_visit('is_first_visit', visit_site, geo_country_code, 'add');
                    var botPattern = '(' + bots_list_to_disable_geo_redirection + ')';
                    var botStatus = true;
                    if (bots_list_to_disable_geo_redirection != "") {
                        var re = new RegExp(botPattern, 'i');
                        var userAgent = navigator.userAgent;
                        botStatus = !re.test(userAgent);
                    } else {
                        botStatus = true;
                    }
                    if (geo_redirection_disable_option == 0 && botStatus) {
                        check_geo_country_code(drupalSettings.base_url, geo_country_code, country_redirect_links);
                    }
                }
            } else {
                if (check_is_first_cookie()) {
                    set_first_visit('is_first_visit', visit_site, geo_country_code, 'add');
                }
            }
            /* check geo country code and set cookies */
            /*$.get(drupalSettings.base_url + "/check-geo-country/", function (data, status) {*/
            $('body').on('click', '.agree-button', function () {
                set_first_visit('cookie_agreed_countries', visit_site, geo_country_code, 'add');
            });
            $(document).on('click', '.feed-crm-pop_open', function () {
                crm_form_fc_check(geo_country_code);
            });
            $('.feed-crm-pop_open').once().bind('click', function () {
                setTimeout(function () {
                    crm_form_fc_check(geo_country_code);
                }, 100);
            });
            setTimeout(function () {
                // if (path_array[1] != '' && (path_array[1] == 'cookies' || path_array[2] == 'cookies' || path_array[3] == 'cookies') && typeof cookies.get('cookie-agreed') == 'undefined') {
                //     cookie_popup_hide();
                // }
                /* Functional Cookies cookie verify and popup */
                crm_form_fc_check(geo_country_code);
            }, 500);
            /* default functional cookie verify and check for the countries */
            if (default_fc_cookies_list.hasOwnProperty(geo_country_code) && default_fc_cookies_list[geo_country_code] && typeof cookies.get('cookie-agreed') == 'undefined') {
                setTimeout(function () {
                    default_fc_cookie_set(geo_country_code, 1);
                }, 500);
            } else if (typeof default_fc_cookies_list[geo_country_code] == 'undefined' && typeof cookies.get('cookie-agreed') == 'undefined') {
                setTimeout(function () {
                    default_fc_cookie_set(geo_country_code, default_cookies_for_others);
                }, 500);
            }
            /* default performance cookie verify and check for the countries */
            if (default_pc_cookies_list.hasOwnProperty(geo_country_code) && default_pc_cookies_list[geo_country_code] && typeof cookies.get('cookie-agreed') == 'undefined') {
                setTimeout(function () {
                    default_pc_cookie_set(geo_country_code, 1);
                }, 500);
            } else if (typeof default_pc_cookies_list[geo_country_code] == 'undefined' && typeof cookies.get('cookie-agreed') == 'undefined') {
                setTimeout(function () {
                    default_pc_cookie_set(geo_country_code, default_cookies_for_others);
                }, 500);
            }
            /* end of default cookie verify and check for the countries */
            /* set performance and functional cookies */
            if (typeof cookies.get('cookie-agreed-categories') != 'undefined') {
                if (prevAgreedCategoriesObj[visit_site] != undefined && $.inArray(performance_cookie, prevAgreedCategoriesObj[visit_site][geo_country_code]) != -1) {
                    if ($('#performance-cookies-id').length) {
                        $('#performance-cookies-id').addClass("is_active active");
                        $('#performance-cookies-id').children('p').hide(onLabel).text(onLabel).fadeIn(700);
                    }
                    if ($('#pc-popup-id').length) {
                        $('#pc-popup-id').addClass("is_active active");
                        $('#pc-popup-id').children('p').hide().text(onLabel).fadeIn(700);
                    }
                    if ($('#cookie-category-pc').length) {
                        $('#cookie-category-pc').prop("checked", true);
                    }
                }
                if (prevAgreedCategoriesObj[visit_site] != undefined && $.inArray(functional_cookie, prevAgreedCategoriesObj[visit_site][geo_country_code]) != -1) {
                    if ($('#fc-popup-id').length) {
                        $('#fc-popup-id').addClass('is_active active');
                        $('#functional-cookies-id').children('p').hide().text(onLabel).fadeIn(700);
                    }
                    if ($('#functional-cookies-id').length) {
                        $('.audio-player').removeClass('is_deactive');
                        $('#functional-cookies-id').addClass("is_active active");
                        $('#functional-cookies-id').children('p').hide().text(onLabel).fadeIn(700);
                    }
                    if ($('#form-functional-cookies-id').length) {
                        $('#form-functional-cookies-id').addClass("is_active active");
                        $('#form-functional-cookies-id').children('p').hide().text(onLabel).fadeIn(700);
                    }
                }
            }
            if (checkFnCookies() && checkVideoUrl('.video-embed-field-provider-vimeo')) {
                vimeoVideoDnt();
            }
            if (checkFnCookies() && checkVideoUrl('.video-embed-field-provider-youtube')) {
                youtubeVideoDnt();
            }
            /* functional cookies check and youtube,vimeo chanel donot track */
            $(document).ajaxComplete(function () {
                if (checkFnCookies() && checkVideoUrl('.video-embed-field-provider-vimeo')) {
                    vimeoVideoDnt();
                }
                if (checkFnCookies() && checkVideoUrl('.video-embed-field-provider-youtube')) {
                    youtubeVideoDnt();
                }
                if (typeof cookies.get('cookie-agreed-categories') != 'undefined') {
                    if ($.inArray(functional_cookie, prevAgreedCategoriesObj[visit_site][geo_country_code]) != -1) {
                        if ($('.audio-player').length) {
                            $('.audio-player').removeClass('is_deactive');
                        }
                    } else if ($('.audio-player.is_deactive').length) {
                        $('.popup-cookies-wrap .cookies_ani-border').removeClass('is_active active');
                        $('.popup-cookies-wrap .cookies_ani-border').children('p').hide().text(offLable).fadeIn(700);
                    };
                };
                if ($('.popup-cookies-wrap.cookiesSlideDown').length) {
                    $('.popup-cookies-wrap').removeClass('cookiesSlideDown');
                }
            });
            $('.audio-player.is_deactive').on('click', function () {
                if ($(window).width() >= 769) {
                    event.preventDefault();
                    $('.modal__wrapper, .feed-crm-pop_wrapper').animate({
                        scrollTop: $(".modal").offset().top
                    }, 1000);
                }
            });
            /* functional cookie set when clicked on in the cookies page */
            $("#functional-cookies-id").once().bind('click', function () {
                if ($("#functional-cookies-id").hasClass("is_active")) {
                    set_categories_agreed('cookie-agreed-categories', visit_site, geo_country_code, 'fc', 'remove');
                    if ($('#form-functional-cookies-id').length) {
                        $('#form-functional-cookies-id').removeClass('active is_active');
                    }
                } else {
                    set_cookie_agreed(geo_country_code);
                    set_categories_agreed('cookie-agreed-categories', visit_site, geo_country_code, 'fc', 'add');
                }
                if ($(".cookies-wrp #performance-cookies-id, .cookies-wrp-new #performance-cookies-id").length) {
                    if ($("#performance-cookies-id").hasClass("is_active")) {
                        set_cookie_agreed(geo_country_code);
                        set_categories_agreed('cookie-agreed-categories', visit_site, geo_country_code, 'pc', 'add');
                    } else {
                        set_categories_agreed('cookie-agreed-categories', visit_site, geo_country_code, 'pc', 'remove');
                    }
                }
            });
            /* functional cookie set when clicked on in the form popup */
            $("#form-functional-cookies-id").on('click', function () {
                if (checkFnCookies()) {
                    if ($("#form-functional-cookies-id").hasClass("is_active")) {
                        set_categories_agreed('cookie-agreed-categories', visit_site, geo_country_code, 'fc', 'remove');
                        if ($('.connect-form-wrapper #cookies_accepted').length) {
                            $('.connect-form-wrapper .content-entity-file-utility-add-form .form-submit').attr("disabled", true);
                        }
                    } else {
                        set_cookie_agreed(geo_country_code);
                        set_categories_agreed('cookie-agreed-categories', visit_site, geo_country_code, 'fc', 'add');
                        $('.form-actions').removeClass('is_deactive');
                    }
                } else {
                    set_cookie_agreed(geo_country_code);
                }
                $('.popup-cookies-wrap1').addClass('is_active');
            });
            $("#form-functional-cookies-id1").on('click', function () {
                if (checkFnCookies()) {
                    if ($("#form-functional-cookies-id1").hasClass("is_active")) {
                        set_categories_agreed('cookie-agreed-categories', visit_site, geo_country_code, 'fc', 'remove');
                        if ($('.connect-form-wrapper #cookies_accepted').length) {
                            $('.connect-crm-wrap-new .connect-form-wrapper .form-submit').attr("disabled", true);
                        }
                    } else {
                        set_cookie_agreed(geo_country_code);
                        set_categories_agreed('cookie-agreed-categories', visit_site, geo_country_code, 'fc', 'add');
                        $('.feed-modal-new .connect-form .connect-submit').removeClass('is_deactive');
                    }
                } else {
                    set_cookie_agreed(geo_country_code);
                }
                $('.popup-cookies-wrap').addClass('is_active');
            });
            /* performance cookie set when clicked on in the cookies page */
            $("#performance-cookies-id").on('click', function () {
                if ($("#performance-cookies-id").hasClass("is_active")) {
                    set_categories_agreed('cookie-agreed-categories', visit_site, geo_country_code, 'pc', 'remove');
                } else {
                    set_cookie_agreed(geo_country_code);
                    set_categories_agreed('cookie-agreed-categories', visit_site, geo_country_code, 'pc', 'add');
                    if ($('#cookie-category-pc').length) {
                        $('#cookie-category-pc').prop("checked", true);
                    }
                    if ($('#pc-popup-id').length) {
                        $('#pc-popup-id').addClass("is_active");
                    }
                }
                if ($("#functional-cookies-id").hasClass("is_active")) {
                    set_cookie_agreed(geo_country_code);
                    set_categories_agreed('cookie-agreed-categories', visit_site, geo_country_code, 'fc', 'add');
                    if ($('.connect-form-wrapper #cookies_accepted').length) {
                        $('.connect-form-wrapper .content-entity-file-utility-add-form .form-submit').attr("disabled", false);
                        $('#cookies_accepted').hide();
                    }
                } else {
                    set_categories_agreed('cookie-agreed-categories', visit_site, geo_country_code, 'fc', 'remove');
                    if ($('.connect-form-wrapper #cookies_accepted').length) {
                        $('.connect-form-wrapper .content-entity-file-utility-add-form .form-submit').attr("disabled", true);
                        $('#form-functional-cookies-id').removeClass("is_active");
                        $('#cookies_accepted').show();
                    }
                }
            });
            $('body').on('click', "#pc-popup-id", function () {
                if (typeof cookies.get('cookie-agreed-categories') != 'undefined' && cookies.get('cookie-agreed-categories') != "null") {
                    if ($("#pc-popup-id").hasClass("is_active")) {
                        if ($('#cookie-category-pc').length) {
                            $('#cookie-category-pc').prop("checked", true);
                        }
                    } else {
                        if ($('#cookie-category-pc').length) {
                            $('#cookie-category-pc').prop("checked", false);
                        }
                    }
                } else {
                    if ($('#cookie-category-pc').length) {
                        if ($("#pc-popup-id").hasClass("is_active")) {
                            $('#cookie-category-pc').prop("checked", true);
                        } else {
                            $('#cookie-category-pc').prop("checked", false);
                        }
                    }
                }
            });
            $('body').on('click', '#fc-popup-id', function () {
                if (typeof cookies.get('cookie-agreed-categories') != 'undefined' && cookies.get('cookie-agreed-categories') != "null") {
                    if ($("#fc-popup-id").hasClass("is_active")) {
                        if ($('#cookie-category-fc').length) {
                            $('#cookie-category-fc').prop("checked", true);
                        }
                    } else {
                        if ($('#cookie-category-fc').length) {
                            $('#cookie-category-fc').prop("checked", false);
                        }
                    }
                } else {
                    if ($('#cookie-category-fc').length) {
                        if ($("#fc-popup-id").hasClass("is_active")) {
                            $('#cookie-category-fc').prop("checked", true);
                        } else {
                            $('#cookie-category-fc').prop("checked", false);
                        }
                    }
                }
            });
            //});
            /* cookie agreed set */
            function set_cookie_agreed(geo_country_code) {
                if (typeof cookies.get('cookie-agreed') == 'undefined') {
                    cookies.set('cookie-agreed', 2, { expires: lifetime, path: '/', sameSite: 'strict' });
                    set_first_visit('cookie_agreed_countries', visit_site, geo_country_code, 'add');
                    setTimeout(function () {
                        $('.cookies__policy').slideDown('').addClass('is-active');
                        cookie_popup_hide();
                    }, 500);
                }
            }
            /* check geo country code and redirect to appropriate country */
            function check_geo_country_code(baseurl, geo_country_code, country_redirect_links) {
                //$.get(baseurl + "/check-geo-country/", function (data, status) {
                var geo_country_code = geo_country_code;
                var redirect_location = country_redirect_links[geo_country_code];
                if (redirect_location != "" && redirect_location != null) {
                    var last_delemeter = redirect_location.substr(-1, 1);
                    var redirect_location_trim = "";
                    if (last_delemeter == '/') {
                        redirect_location_trim = redirect_location.slice(0, -1);
                    } else {
                        redirect_location_trim = redirect_location;
                    }
                    if (geo_country_code != "" && country_redirect_links.hasOwnProperty(geo_country_code) && baseurl != redirect_location_trim) {
                        $(location).attr('href', redirect_location_trim);
                    }
                }
                //});
            }
            /* default functional cookies set */
            function default_fc_cookie_set(geo_country_code, cookie_status) {
                var checked_status = '';
                var cookie_status_text = '';
                if (cookie_status) {
                    checked_status = 'true';
                    cookie_status_text = Drupal.t('On');
                } else {
                    checked_status = 'false';
                    cookie_status_text = Drupal.t('Off');
                }

                if ($('.cookies-wrp #functional-cookies-id, .cookies-wrp-new #functional-cookies-id').length) {
                    if (cookie_status) {
                        $('.cookies-wrp #functional-cookies-id, .cookies-wrp-new #functional-cookies-id').addClass('is_active active');
                    } else {
                        $('.cookies-wrp #functional-cookies-id, .cookies-wrp-new #functional-cookies-id').removeClass('is_active active');
                    }
                    $('.cookies-wrp #functional-cookies-id, .cookies-wrp-new #functional-cookies-id').children('p').hide().text(cookie_status_text).fadeIn(700);
                }
                if ($('#fc-popup-id').length) {
                    if (cookie_status) {
                        $('#fc-popup-id').addClass('is_active active');
                    } else {
                        $('#fc-popup-id').removeClass('is_active active');
                    }
                    $('#fc-popup-id').children('p').hide().text(cookie_status_text).fadeIn(700);
                }
                if ($('#cookie-category-fc').length) {
                    $('#cookie-category-fc').prop("checked", checked_status);
                    var fc_val = $('#cookie-category-fc').val();
                    //$('#cookie-category-fc').val(visit_site + ':' + geo_country_code + ':' + fc_val);
                }
                if ($('#cookie-category-nc').length) {
                    var nc_val = $('#cookie-category-nc').val();
                    //$('#cookie-category-nc').val(visit_site + ':' + geo_country_code + ':' + nc_val);
                }
                return true;
            }
            /* default performance cookies set */
            function default_pc_cookie_set(geo_country_code, cookie_status) {
                var checked_status = '';
                var cookie_status_text = '';
                if (cookie_status) {
                    checked_status = 'true';
                    cookie_status_text = Drupal.t('On');
                } else {
                    checked_status = 'false';
                    cookie_status_text = Drupal.t('Off');
                }
                if ($('#cookie-category-pc').length) {
                    $('#cookie-category-pc').prop("checked", checked_status);
                    var pc_val = $('#cookie-category-pc').val();
                    //$('#cookie-category-pc').val(visit_site + ':' + geo_country_code + ':' + pc_val);
                }
                if ($('#pc-popup-id').length) {
                    if (cookie_status) {
                        $('#pc-popup-id').addClass('is_active active');
                    } else {
                        $('#pc-popup-id').removeClass('is_active active');
                    }
                    $('#pc-popup-id').children('p').hide().text(cookie_status_text).fadeIn(700);
                }
                if ($('#performance-cookies-id').length) {
                    if (cookie_status) {
                        $('#performance-cookies-id').addClass('is_active active');
                    } else {
                        $('#performance-cookies-id').removeClass('is_active active');
                    }
                    $('#performance-cookies-id').children('p').hide().text(cookie_status_text).fadeIn(700);
                }
                return true;
            }
            /* CRM Form functional cookies popup visibility */
            function crm_form_fc_check(geo_country_code) {
                if (checkFnCookies()) {
                    $('.connect-crm-wrap .cookies_ani-border').addClass('is_active active');
                    $('.connect-crm-wrap .cookies_ani-border').children('p').hide().text(offLable).show();
                    $('.popup-cookies-wrap').addClass('is_active');
                    $('.popup-cookies-wrap1').addClass('is_active');
                    $('.connect-crm-wrap .connect-crm-submit').addClass('is_deactive');
                    $('.connect-crm-wrap-new .cookies_ani-border1').addClass('is_active active');
                    $('.connect-crm-wrap-new .cookies_ani-border1').children('p').hide().text(offLable).show();
                    $('.connect-crm-wrap-new .connect-crm-submit').addClass('is_deactive');

                    $('.connect-crm-submit.is_deactive').click(function () {
                        $('.connect-crm-wrap .cookies_ani-border').removeClass('is_active active');
                        $('.connect-crm-wrap .cookies_ani-border').children('p').hide().text(offLable).show();
                        $('.popup-cookies-wrap').removeClass('is_active');
                    });
                    $('.connect-crm-submit.is_deactive').click(function () {
                        $('.connect-crm-wrap-new  .cookies_ani-border1').removeClass('is_active active');
                        $('.connect-crm-wrap-new  .cookies_ani-border1').children('p').hide().text(offLable).show();
                        $('.popup-cookies-wrap1').removeClass('is_active');
                    });
                } else if (typeof cookies.get('cookie-agreed-categories') != 'undefined' && prevAgreedCategoriesObj[visit_site] != undefined && $.inArray(functional_cookie, prevAgreedCategoriesObj[visit_site][geo_country_code]) != -1) {
                    $('.connect-crm-wrap .connect-crm-submit').removeClass('is_deactive');
                    $('.connect-crm-wrap-new .connect-crm-submit').removeClass('is_deactive');
                }
                return true;
            }

            function set_first_visit(cookieName, site, country, type) {
                if (cookies.get(cookieName)) {
                    var prevVals = cookies.get(cookieName);
                    var prevValsObj = JSON.parse(CookieDecode(prevVals));
                    var values = Object.keys(prevValsObj).map(function (e) {
                        return prevValsObj[e];
                    });
                    if (type == 'add') {
                        if (prevValsObj[site] == undefined) {
                            prevValsObj[site] = [country];
                            var cookVal = JSON.stringify(prevValsObj);
                            cookies.set(cookieName, cookVal, { expires: lifetime, path: '/', sameSite: 'strict' });
                        } else {
                            if (prevValsObj[site].indexOf(country) == -1) {
                                prevValsObj[site].push(country);
                                var cookVal = JSON.stringify(prevValsObj);
                                cookies.set(cookieName, cookVal, { expires: lifetime, path: '/', sameSite: 'strict' });
                            }
                        }

                    }
                } else {
                    cookies.set(cookieName, '{"' + site + '":["' + country + '"]}', { expires: lifetime, path: '/', sameSite: 'strict' });
                }
            }


            function set_categories_agreed(cookieName, site, country, category, type) {
                if (cookies.get(cookieName)) {
                    var prevCatVals = cookies.get(cookieName);
                    var prevCatValsObj = JSON.parse(CookieDecode(prevCatVals));
                    if (type == 'add') {
                        if (prevCatValsObj[site] == undefined) {
                            var siteCountryObj = {};
                            siteCountryObj = '{"' + site + '":{"' + country + '":["' + necessary_cookie + '","' + category + '"]}}';
                            $.extend(prevCatValsObj, JSON.parse(siteCountryObj));
                            var cookVal = JSON.stringify(prevCatValsObj);
                            cookies.set(cookieName, cookVal, { expires: lifetime, path: '/', sameSite: 'strict' });
                        } else {
                            if (prevCatValsObj[site] != undefined && prevCatValsObj[site][country] == undefined) {
                                var countryObj = {};
                                var siteObj = {};
                                countryObj[country] = [necessary_cookie, category];
                                siteObj[site] = countryObj;
                                $.each(prevCatValsObj, function (key, value) {
                                    if (key == site) {
                                        prevCatValsObj[key][country] = [necessary_cookie, category];
                                    }

                                });
                                var cookVal = JSON.stringify(prevCatValsObj);
                                cookies.set(cookieName, cookVal, { expires: lifetime, path: '/', sameSite: 'strict' });
                            } else if (prevCatValsObj[site] == undefined) {
                                var countryObj = {};
                                var siteObj = {};
                                countryObj[country] = [necessary_cookie, category];
                                siteObj[site] = countryObj;
                                $.extend(prevCatValsObj, siteObj);
                                var cookVal = JSON.stringify(prevCatValsObj);
                                cookies.set(cookieName, cookVal, { expires: lifetime, path: '/', sameSite: 'strict' });
                            } else if (prevCatValsObj[site][country].indexOf(category) == -1) {
                                prevCatValsObj[site][country].push(category);
                                var cookVal = JSON.stringify(prevCatValsObj);
                                cookies.set(cookieName, cookVal, { expires: lifetime, path: '/', sameSite: 'strict' });
                            }
                        }
                    } else if (type == 'remove' && prevCatValsObj[site] != undefined && prevCatValsObj[site][country] != undefined) {
                        var catArray = $.grep(prevCatValsObj[site][country], function (value) {
                            return value != category;
                        });
                        prevCatValsObj[site][country] = catArray;
                        var cookieValUpdated = JSON.stringify(prevCatValsObj);
                        cookies.set(cookieName, cookieValUpdated, { expires: lifetime, path: '/', sameSite: 'strict' });
                    }
                } else {
                    cookies.set(cookieName, '{"' + site + '":{"' + country + '":["' + necessary_cookie + '","' + category + '"]}}', { expires: lifetime, path: '/', sameSite: 'strict' });
                }
            }
            function cookie_popup_hide() {
                $('body, html').removeClass('cookies-overflow');
                $('#sliding-popup .eu-cookie-compliance-banner').trigger('eu_cookie_compliance_popup_close').hide();
            }
            function check_is_first_cookie() {
                // if (path_array[1] != "" && typeof cookies.get('is_first_visit') == 'undefined' && country_redirect_links.hasOwnProperty(path_country) && country_redirect_links[path_country] || prevFirstVisitCookieObj[visit_site] == 'undefined' || $.inArray(geo_country_code, prevFirstVisitCookieObj[visit_site]) == -1) {
                //     return true;
                // } else if (typeof cookies.get('is_first_visit') == 'undefined' && !country_redirect_links.hasOwnProperty(path_country) && country_redirect_links[path_country] || prevFirstVisitCookieObj[visit_site] == 'undefined' || $.inArray(geo_country_code, prevFirstVisitCookieObj[visit_site]) == -1) {
                //     return true;
                // } else {
                //     return false;
                // }
            }
            function checkVideoUrl(divcls) {
                if ($(divcls).find('iframe').length != 0) {
                    return true;
                }
                return false;
            }
            function vimeoVideoDnt() {
                var vimeoUrl = $('.video-embed-field-provider-vimeo iframe').attr('src');
                var chUrl = vimeoUrl + '&dnt=true'
                $('.video-embed-field-provider-vimeo iframe').attr('src', chUrl);
            }
            function youtubeVideoDnt() {
                var iframe = $('iframe');
                if (typeof iframe.attr('src') != 'undefined') {
                    var orgUrl = iframe.attr('src');
                    var chgUrl = orgUrl.replace(/youtube.com/g, "youtube-nocookie.com");
                    $('.video-embed-field-provider-youtube iframe').attr('src', chgUrl);
                }
            }
            function checkFnCookies() {
                if (cookies.get('cookie-agreed-categories')) {
                    var prevAgreedCatVals = cookies.get('cookie-agreed-categories');
                    prevAgreedCategoriesObj = JSON.parse(CookieDecode(prevAgreedCatVals));
                }
                if (typeof cookies.get('cookie-agreed-categories') == 'undefined' || prevAgreedCategoriesObj[visit_site] == undefined || (prevAgreedCategoriesObj[visit_site] != undefined && prevAgreedCategoriesObj[visit_site][geo_country_code] == undefined) || typeof cookies.get('cookie-agreed-categories') != 'undefined' && (prevAgreedCategoriesObj[visit_site] != undefined && $.inArray(functional_cookie, prevAgreedCategoriesObj[visit_site][geo_country_code]) == -1)) {
                    return true;
                }
                return false;
            }
            function CookieDecode(rawval) {
                if (rawval.indexOf('%') !== -1) {
                    rawval = decodeURI(rawval).replaceAll('%2C', ',').replaceAll('%3A', ':');
                }
                return rawval;
            }
        },
    };
})(jQuery, Drupal, drupalSettings, window.Cookies);
;
/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
!function (a) { var b = navigator.userAgent; a.HTMLPictureElement && /ecko/.test(b) && b.match(/rv\:(\d+)/) && RegExp.$1 < 45 && addEventListener("resize", function () { var b, c = document.createElement("source"), d = function (a) { var b, d, e = a.parentNode; "PICTURE" === e.nodeName.toUpperCase() ? (b = c.cloneNode(), e.insertBefore(b, e.firstElementChild), setTimeout(function () { e.removeChild(b) })) : (!a._pfLastSize || a.offsetWidth > a._pfLastSize) && (a._pfLastSize = a.offsetWidth, d = a.sizes, a.sizes += ",100vw", setTimeout(function () { a.sizes = d })) }, e = function () { var a, b = document.querySelectorAll("picture > img, img[srcset][sizes]"); for (a = 0; a < b.length; a++)d(b[a]) }, f = function () { clearTimeout(b), b = setTimeout(e, 99) }, g = a.matchMedia && matchMedia("(orientation: landscape)"), h = function () { f(), g && g.addListener && g.addListener(f) }; return c.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", /^[c|i]|d$/.test(document.readyState || "") ? h() : document.addEventListener("DOMContentLoaded", h), f }()) }(window), function (a, b, c) { "use strict"; function d(a) { return " " === a || "	" === a || "\n" === a || "\f" === a || "\r" === a } function e(b, c) { var d = new a.Image; return d.onerror = function () { A[b] = !1, ba() }, d.onload = function () { A[b] = 1 === d.width, ba() }, d.src = c, "pending" } function f() { M = !1, P = a.devicePixelRatio, N = {}, O = {}, s.DPR = P || 1, Q.width = Math.max(a.innerWidth || 0, z.clientWidth), Q.height = Math.max(a.innerHeight || 0, z.clientHeight), Q.vw = Q.width / 100, Q.vh = Q.height / 100, r = [Q.height, Q.width, P].join("-"), Q.em = s.getEmValue(), Q.rem = Q.em } function g(a, b, c, d) { var e, f, g, h; return "saveData" === B.algorithm ? a > 2.7 ? h = c + 1 : (f = b - c, e = Math.pow(a - .6, 1.5), g = f * e, d && (g += .1 * e), h = a + g) : h = c > 1 ? Math.sqrt(a * b) : a, h > c } function h(a) { var b, c = s.getSet(a), d = !1; "pending" !== c && (d = r, c && (b = s.setRes(c), s.applySetCandidate(b, a))), a[s.ns].evaled = d } function i(a, b) { return a.res - b.res } function j(a, b, c) { var d; return !c && b && (c = a[s.ns].sets, c = c && c[c.length - 1]), d = k(b, c), d && (b = s.makeUrl(b), a[s.ns].curSrc = b, a[s.ns].curCan = d, d.res || aa(d, d.set.sizes)), d } function k(a, b) { var c, d, e; if (a && b) for (e = s.parseSet(b), a = s.makeUrl(a), c = 0; c < e.length; c++)if (a === s.makeUrl(e[c].url)) { d = e[c]; break } return d } function l(a, b) { var c, d, e, f, g = a.getElementsByTagName("source"); for (c = 0, d = g.length; d > c; c++)e = g[c], e[s.ns] = !0, f = e.getAttribute("srcset"), f && b.push({ srcset: f, media: e.getAttribute("media"), type: e.getAttribute("type"), sizes: e.getAttribute("sizes") }) } function m(a, b) { function c(b) { var c, d = b.exec(a.substring(m)); return d ? (c = d[0], m += c.length, c) : void 0 } function e() { var a, c, d, e, f, i, j, k, l, m = !1, o = {}; for (e = 0; e < h.length; e++)f = h[e], i = f[f.length - 1], j = f.substring(0, f.length - 1), k = parseInt(j, 10), l = parseFloat(j), X.test(j) && "w" === i ? ((a || c) && (m = !0), 0 === k ? m = !0 : a = k) : Y.test(j) && "x" === i ? ((a || c || d) && (m = !0), 0 > l ? m = !0 : c = l) : X.test(j) && "h" === i ? ((d || c) && (m = !0), 0 === k ? m = !0 : d = k) : m = !0; m || (o.url = g, a && (o.w = a), c && (o.d = c), d && (o.h = d), d || c || a || (o.d = 1), 1 === o.d && (b.has1x = !0), o.set = b, n.push(o)) } function f() { for (c(T), i = "", j = "in descriptor"; ;) { if (k = a.charAt(m), "in descriptor" === j) if (d(k)) i && (h.push(i), i = "", j = "after descriptor"); else { if ("," === k) return m += 1, i && h.push(i), void e(); if ("(" === k) i += k, j = "in parens"; else { if ("" === k) return i && h.push(i), void e(); i += k } } else if ("in parens" === j) if (")" === k) i += k, j = "in descriptor"; else { if ("" === k) return h.push(i), void e(); i += k } else if ("after descriptor" === j) if (d(k)); else { if ("" === k) return void e(); j = "in descriptor", m -= 1 } m += 1 } } for (var g, h, i, j, k, l = a.length, m = 0, n = []; ;) { if (c(U), m >= l) return n; g = c(V), h = [], "," === g.slice(-1) ? (g = g.replace(W, ""), e()) : f() } } function n(a) { function b(a) { function b() { f && (g.push(f), f = "") } function c() { g[0] && (h.push(g), g = []) } for (var e, f = "", g = [], h = [], i = 0, j = 0, k = !1; ;) { if (e = a.charAt(j), "" === e) return b(), c(), h; if (k) { if ("*" === e && "/" === a[j + 1]) { k = !1, j += 2, b(); continue } j += 1 } else { if (d(e)) { if (a.charAt(j - 1) && d(a.charAt(j - 1)) || !f) { j += 1; continue } if (0 === i) { b(), j += 1; continue } e = " " } else if ("(" === e) i += 1; else if (")" === e) i -= 1; else { if ("," === e) { b(), c(), j += 1; continue } if ("/" === e && "*" === a.charAt(j + 1)) { k = !0, j += 2; continue } } f += e, j += 1 } } } function c(a) { return k.test(a) && parseFloat(a) >= 0 ? !0 : l.test(a) ? !0 : "0" === a || "-0" === a || "+0" === a ? !0 : !1 } var e, f, g, h, i, j, k = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i, l = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i; for (f = b(a), g = f.length, e = 0; g > e; e++)if (h = f[e], i = h[h.length - 1], c(i)) { if (j = i, h.pop(), 0 === h.length) return j; if (h = h.join(" "), s.matchesMedia(h)) return j } return "100vw" } b.createElement("picture"); var o, p, q, r, s = {}, t = !1, u = function () { }, v = b.createElement("img"), w = v.getAttribute, x = v.setAttribute, y = v.removeAttribute, z = b.documentElement, A = {}, B = { algorithm: "" }, C = "data-pfsrc", D = C + "set", E = navigator.userAgent, F = /rident/.test(E) || /ecko/.test(E) && E.match(/rv\:(\d+)/) && RegExp.$1 > 35, G = "currentSrc", H = /\s+\+?\d+(e\d+)?w/, I = /(\([^)]+\))?\s*(.+)/, J = a.picturefillCFG, K = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)", L = "font-size:100%!important;", M = !0, N = {}, O = {}, P = a.devicePixelRatio, Q = { px: 1, "in": 96 }, R = b.createElement("a"), S = !1, T = /^[ \t\n\r\u000c]+/, U = /^[, \t\n\r\u000c]+/, V = /^[^ \t\n\r\u000c]+/, W = /[,]+$/, X = /^\d+$/, Y = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/, Z = function (a, b, c, d) { a.addEventListener ? a.addEventListener(b, c, d || !1) : a.attachEvent && a.attachEvent("on" + b, c) }, $ = function (a) { var b = {}; return function (c) { return c in b || (b[c] = a(c)), b[c] } }, _ = function () { var a = /^([\d\.]+)(em|vw|px)$/, b = function () { for (var a = arguments, b = 0, c = a[0]; ++b in a;)c = c.replace(a[b], a[++b]); return c }, c = $(function (a) { return "return " + b((a || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "") + ";" }); return function (b, d) { var e; if (!(b in N)) if (N[b] = !1, d && (e = b.match(a))) N[b] = e[1] * Q[e[2]]; else try { N[b] = new Function("e", c(b))(Q) } catch (f) { } return N[b] } }(), aa = function (a, b) { return a.w ? (a.cWidth = s.calcListLength(b || "100vw"), a.res = a.w / a.cWidth) : a.res = a.d, a }, ba = function (a) { if (t) { var c, d, e, f = a || {}; if (f.elements && 1 === f.elements.nodeType && ("IMG" === f.elements.nodeName.toUpperCase() ? f.elements = [f.elements] : (f.context = f.elements, f.elements = null)), c = f.elements || s.qsa(f.context || b, f.reevaluate || f.reselect ? s.sel : s.selShort), e = c.length) { for (s.setupRun(f), S = !0, d = 0; e > d; d++)s.fillImg(c[d], f); s.teardownRun(f) } } }; o = a.console && console.warn ? function (a) { console.warn(a) } : u, G in v || (G = "src"), A["image/jpeg"] = !0, A["image/gif"] = !0, A["image/png"] = !0, A["image/svg+xml"] = b.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"), s.ns = ("pf" + (new Date).getTime()).substr(0, 9), s.supSrcset = "srcset" in v, s.supSizes = "sizes" in v, s.supPicture = !!a.HTMLPictureElement, s.supSrcset && s.supPicture && !s.supSizes && !function (a) { v.srcset = "data:,a", a.src = "data:,a", s.supSrcset = v.complete === a.complete, s.supPicture = s.supSrcset && s.supPicture }(b.createElement("img")), s.supSrcset && !s.supSizes ? !function () { var a = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==", c = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", d = b.createElement("img"), e = function () { var a = d.width; 2 === a && (s.supSizes = !0), q = s.supSrcset && !s.supSizes, t = !0, setTimeout(ba) }; d.onload = e, d.onerror = e, d.setAttribute("sizes", "9px"), d.srcset = c + " 1w," + a + " 9w", d.src = c }() : t = !0, s.selShort = "picture>img,img[srcset]", s.sel = s.selShort, s.cfg = B, s.DPR = P || 1, s.u = Q, s.types = A, s.setSize = u, s.makeUrl = $(function (a) { return R.href = a, R.href }), s.qsa = function (a, b) { return "querySelector" in a ? a.querySelectorAll(b) : [] }, s.matchesMedia = function () { return a.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches ? s.matchesMedia = function (a) { return !a || matchMedia(a).matches } : s.matchesMedia = s.mMQ, s.matchesMedia.apply(this, arguments) }, s.mMQ = function (a) { return a ? _(a) : !0 }, s.calcLength = function (a) { var b = _(a, !0) || !1; return 0 > b && (b = !1), b }, s.supportsType = function (a) { return a ? A[a] : !0 }, s.parseSize = $(function (a) { var b = (a || "").match(I); return { media: b && b[1], length: b && b[2] } }), s.parseSet = function (a) { return a.cands || (a.cands = m(a.srcset, a)), a.cands }, s.getEmValue = function () { var a; if (!p && (a = b.body)) { var c = b.createElement("div"), d = z.style.cssText, e = a.style.cssText; c.style.cssText = K, z.style.cssText = L, a.style.cssText = L, a.appendChild(c), p = c.offsetWidth, a.removeChild(c), p = parseFloat(p, 10), z.style.cssText = d, a.style.cssText = e } return p || 16 }, s.calcListLength = function (a) { if (!(a in O) || B.uT) { var b = s.calcLength(n(a)); O[a] = b ? b : Q.width } return O[a] }, s.setRes = function (a) { var b; if (a) { b = s.parseSet(a); for (var c = 0, d = b.length; d > c; c++)aa(b[c], a.sizes) } return b }, s.setRes.res = aa, s.applySetCandidate = function (a, b) { if (a.length) { var c, d, e, f, h, k, l, m, n, o = b[s.ns], p = s.DPR; if (k = o.curSrc || b[G], l = o.curCan || j(b, k, a[0].set), l && l.set === a[0].set && (n = F && !b.complete && l.res - .1 > p, n || (l.cached = !0, l.res >= p && (h = l))), !h) for (a.sort(i), f = a.length, h = a[f - 1], d = 0; f > d; d++)if (c = a[d], c.res >= p) { e = d - 1, h = a[e] && (n || k !== s.makeUrl(c.url)) && g(a[e].res, c.res, p, a[e].cached) ? a[e] : c; break } h && (m = s.makeUrl(h.url), o.curSrc = m, o.curCan = h, m !== k && s.setSrc(b, h), s.setSize(b)) } }, s.setSrc = function (a, b) { var c; a.src = b.url, "image/svg+xml" === b.set.type && (c = a.style.width, a.style.width = a.offsetWidth + 1 + "px", a.offsetWidth + 1 && (a.style.width = c)) }, s.getSet = function (a) { var b, c, d, e = !1, f = a[s.ns].sets; for (b = 0; b < f.length && !e; b++)if (c = f[b], c.srcset && s.matchesMedia(c.media) && (d = s.supportsType(c.type))) { "pending" === d && (c = d), e = c; break } return e }, s.parseSets = function (a, b, d) { var e, f, g, h, i = b && "PICTURE" === b.nodeName.toUpperCase(), j = a[s.ns]; (j.src === c || d.src) && (j.src = w.call(a, "src"), j.src ? x.call(a, C, j.src) : y.call(a, C)), (j.srcset === c || d.srcset || !s.supSrcset || a.srcset) && (e = w.call(a, "srcset"), j.srcset = e, h = !0), j.sets = [], i && (j.pic = !0, l(b, j.sets)), j.srcset ? (f = { srcset: j.srcset, sizes: w.call(a, "sizes") }, j.sets.push(f), g = (q || j.src) && H.test(j.srcset || ""), g || !j.src || k(j.src, f) || f.has1x || (f.srcset += ", " + j.src, f.cands.push({ url: j.src, d: 1, set: f }))) : j.src && j.sets.push({ srcset: j.src, sizes: null }), j.curCan = null, j.curSrc = c, j.supported = !(i || f && !s.supSrcset || g && !s.supSizes), h && s.supSrcset && !j.supported && (e ? (x.call(a, D, e), a.srcset = "") : y.call(a, D)), j.supported && !j.srcset && (!j.src && a.src || a.src !== s.makeUrl(j.src)) && (null === j.src ? a.removeAttribute("src") : a.src = j.src), j.parsed = !0 }, s.fillImg = function (a, b) { var c, d = b.reselect || b.reevaluate; a[s.ns] || (a[s.ns] = {}), c = a[s.ns], (d || c.evaled !== r) && ((!c.parsed || b.reevaluate) && s.parseSets(a, a.parentNode, b), c.supported ? c.evaled = r : h(a)) }, s.setupRun = function () { (!S || M || P !== a.devicePixelRatio) && f() }, s.supPicture ? (ba = u, s.fillImg = u) : !function () { var c, d = a.attachEvent ? /d$|^c/ : /d$|^c|^i/, e = function () { var a = b.readyState || ""; f = setTimeout(e, "loading" === a ? 200 : 999), b.body && (s.fillImgs(), c = c || d.test(a), c && clearTimeout(f)) }, f = setTimeout(e, b.body ? 9 : 99), g = function (a, b) { var c, d, e = function () { var f = new Date - d; b > f ? c = setTimeout(e, b - f) : (c = null, a()) }; return function () { d = new Date, c || (c = setTimeout(e, b)) } }, h = z.clientHeight, i = function () { M = Math.max(a.innerWidth || 0, z.clientWidth) !== Q.width || z.clientHeight !== h, h = z.clientHeight, M && s.fillImgs() }; Z(a, "resize", g(i, 99)), Z(b, "readystatechange", e) }(), s.picturefill = ba, s.fillImgs = ba, s.teardownRun = u, ba._ = s, a.picturefillCFG = { pf: s, push: function (a) { var b = a.shift(); "function" == typeof s[b] ? s[b].apply(s, a) : (B[b] = a[0], S && s.fillImgs({ reselect: !0 })) } }; for (; J && J.length;)a.picturefillCFG.push(J.shift()); a.picturefill = ba, "object" == typeof module && "object" == typeof module.exports ? module.exports = ba : "function" == typeof define && define.amd && define("picturefill", function () { return ba }), s.supPicture || (A["image/webp"] = e("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==")) }(window, document);;
!function (a, b) { "function" == typeof define && define.amd ? define([], function () { return a.svg4everybody = b() }) : "object" == typeof module && module.exports ? module.exports = b() : a.svg4everybody = b() }(this, function () { function a(a, b, c) { if (c) { var d = document.createDocumentFragment(), e = !b.hasAttribute("viewBox") && c.getAttribute("viewBox"); e && b.setAttribute("viewBox", e); for (var f = c.cloneNode(!0); f.childNodes.length;)d.appendChild(f.firstChild); a.appendChild(d) } } function b(b) { b.onreadystatechange = function () { if (4 === b.readyState) { var c = b._cachedDocument; c || (c = b._cachedDocument = document.implementation.createHTMLDocument(""), c.body.innerHTML = b.responseText, b._cachedTarget = {}), b._embeds.splice(0).map(function (d) { var e = b._cachedTarget[d.id]; e || (e = b._cachedTarget[d.id] = c.getElementById(d.id)), a(d.parent, d.svg, e) }) } }, b.onreadystatechange() } function c(c) { function e() { for (var c = 0; c < o.length;) { var h = o[c], i = h.parentNode, j = d(i), k = h.getAttribute("xlink:href") || h.getAttribute("href"); if (!k && g.attributeName && (k = h.getAttribute(g.attributeName)), j && k) { if (f) if (!g.validate || g.validate(k, j, h)) { i.removeChild(h); var l = k.split("#"), q = l.shift(), r = l.join("#"); if (q.length) { var s = m[q]; s || (s = m[q] = new XMLHttpRequest, s.open("GET", q), s.send(), s._embeds = []), s._embeds.push({ parent: i, svg: j, id: r }), b(s) } else a(i, j, document.getElementById(r)) } else ++c, ++p } else ++c } (!o.length || o.length - p > 0) && n(e, 67) } var f, g = Object(c), h = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/, i = /\bAppleWebKit\/(\d+)\b/, j = /\bEdge\/12\.(\d+)\b/, k = /\bEdge\/.(\d+)\b/, l = window.top !== window.self; f = "polyfill" in g ? g.polyfill : h.test(navigator.userAgent) || (navigator.userAgent.match(j) || [])[1] < 10547 || (navigator.userAgent.match(i) || [])[1] < 537 || k.test(navigator.userAgent) && l; var m = {}, n = window.requestAnimationFrame || setTimeout, o = document.getElementsByTagName("use"), p = 0; f && e() } function d(a) { for (var b = a; "svg" !== b.nodeName.toLowerCase() && (b = b.parentNode);); return b } return c });

svg4everybody();

;
!function (t) { function e(i) { if (n[i]) return n[i].exports; var r = n[i] = { i: i, l: !1, exports: {} }; return t[i].call(r.exports, r, r.exports, e), r.l = !0, r.exports } var i = window.webpackJsonp; window.webpackJsonp = function (n, s, o) { for (var a, h, l, u = 0, c = []; u < n.length; u++)h = n[u], r[h] && c.push(r[h][0]), r[h] = 0; for (a in s) Object.prototype.hasOwnProperty.call(s, a) && (t[a] = s[a]); for (i && i(n, s, o); c.length;)c.shift()(); if (o) for (u = 0; u < o.length; u++)l = e(e.s = o[u]); return l }; var n = {}, r = { 4: 0 }; e.e = function (t) { function i() { a.onerror = a.onload = null, clearTimeout(h); var e = r[t]; 0 !== e && (e && e[1](new Error("Loading chunk " + t + " failed.")), r[t] = void 0) } var n = r[t]; if (0 === n) return new Promise(function (t) { t() }); if (n) return n[2]; var s = new Promise(function (e, i) { n = r[t] = [e, i] }); n[2] = s; var o = document.getElementsByTagName("head")[0], a = document.createElement("script"); a.type = "text/javascript", a.charset = "utf-8", a.async = !0, a.timeout = 12e4, e.nc && a.setAttribute("nonce", e.nc), a.src = e.p + "" + t + ".js"; var h = setTimeout(i, 12e4); return a.onerror = a.onload = i, o.appendChild(a), s }, e.m = t, e.c = n, e.d = function (t, i, n) { e.o(t, i) || Object.defineProperty(t, i, { configurable: !1, enumerable: !0, get: n }) }, e.n = function (t) { var i = t && t.__esModule ? function () { return t.default } : function () { return t }; return e.d(i, "a", i), i }, e.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, e.p = "", e.oe = function (t) { throw console.error(t), t } }([function (t, e, i) { "use strict"; function n(t) { return "[object Array]" === P.call(t) } function r(t) { return "[object ArrayBuffer]" === P.call(t) } function s(t) { return "undefined" != typeof FormData && t instanceof FormData } function o(t) { return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && t.buffer instanceof ArrayBuffer } function a(t) { return "string" == typeof t } function h(t) { return "number" == typeof t } function l(t) { return void 0 === t } function u(t) { return null !== t && "object" == typeof t } function c(t) { return "[object Date]" === P.call(t) } function f(t) { return "[object File]" === P.call(t) } function p(t) { return "[object Blob]" === P.call(t) } function d(t) { return "[object Function]" === P.call(t) } function _(t) { return u(t) && d(t.pipe) } function m(t) { return "undefined" != typeof URLSearchParams && t instanceof URLSearchParams } function g(t) { return t.replace(/^\s*/, "").replace(/\s*$/, "") } function v() { return ("undefined" == typeof navigator || "ReactNative" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document) } function y(t, e) { if (null !== t && void 0 !== t) if ("object" != typeof t && (t = [t]), n(t)) for (var i = 0, r = t.length; i < r; i++)e.call(null, t[i], i, t); else for (var s in t) Object.prototype.hasOwnProperty.call(t, s) && e.call(null, t[s], s, t) } function x() { function t(t, i) { "object" == typeof e[i] && "object" == typeof t ? e[i] = x(e[i], t) : e[i] = t } for (var e = {}, i = 0, n = arguments.length; i < n; i++)y(arguments[i], t); return e } function T(t, e, i) { return y(e, function (e, n) { t[n] = i && "function" == typeof e ? w(e, i) : e }), t } var w = i(40), b = i(86), P = Object.prototype.toString; t.exports = { isArray: n, isArrayBuffer: r, isBuffer: b, isFormData: s, isArrayBufferView: o, isString: a, isNumber: h, isObject: u, isUndefined: l, isDate: c, isFile: f, isBlob: p, isFunction: d, isStream: _, isURLSearchParams: m, isStandardBrowserEnv: v, forEach: y, merge: x, extend: T, trim: g } }, function (t, e, i) { "use strict"; e.__esModule = !0; var n = i(27), r = function (t) { return t && t.__esModule ? t : { default: t } }(n); e.default = function (t) { if (Array.isArray(t)) { for (var e = 0, i = Array(t.length); e < t.length; e++)i[e] = t[e]; return i } return (0, r.default)(t) } }, function (t, e, i) { var n = i(35)("wks"), r = i(36), s = i(4).Symbol, o = "function" == typeof s; (t.exports = function (t) { return n[t] || (n[t] = o && s[t] || (o ? s : r)("Symbol." + t)) }).store = n }, function (t, e, i) { (function (i) { var n, r, s = void 0 !== t && t.exports && void 0 !== i ? i : this || window; (s._gsQueue || (s._gsQueue = [])).push(function () { "use strict"; s._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) { var n = function (t) { var e, i = [], n = t.length; for (e = 0; e !== n; i.push(t[e++])); return i }, r = function (t, e, i) { var n, r, s = t.cycle; for (n in s) r = s[n], t[n] = "function" == typeof r ? r(i, e[i]) : r[i % r.length]; delete t.cycle }, s = function (t, e, n) { i.call(this, t, e, n), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._repeat && this._uncache(!0), this.render = s.prototype.render }, o = i._internals, a = o.isSelector, h = o.isArray, l = s.prototype = i.to({}, .1, {}), u = []; s.version = "1.20.4", l.constructor = s, l.kill()._gc = !1, s.killTweensOf = s.killDelayedCallsTo = i.killTweensOf, s.getTweensOf = i.getTweensOf, s.lagSmoothing = i.lagSmoothing, s.ticker = i.ticker, s.render = i.render, l.invalidate = function () { return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), i.prototype.invalidate.call(this) }, l.updateTo = function (t, e) { var n, r = this.ratio, s = this.vars.immediateRender || t.immediateRender; e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)); for (n in t) this.vars[n] = t[n]; if (this._initted || s) if (e) this._initted = !1, s && this.render(0, !0, !0); else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) { var o = this._totalTime; this.render(0, !0, !1), this._initted = !1, this.render(o, !0, !1) } else if (this._initted = !1, this._init(), this._time > 0 || s) for (var a, h = 1 / (1 - r), l = this._firstPT; l;)a = l.s + l.c, l.c *= h, l.s = a - l.c, l = l._next; return this }, l.render = function (t, e, n) { this._initted || 0 === this._duration && this.vars.repeat && this.invalidate(); var r, s, a, h, l, u, c, f, p, d = this._dirty ? this.totalDuration() : this._totalDuration, _ = this._time, m = this._totalTime, g = this._cycle, v = this._duration, y = this._rawPrevTime; if (t >= d - 1e-7 && t >= 0 ? (this._totalTime = d, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = v, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (r = !0, s = "onComplete", n = n || this._timeline.autoRemoveChildren), 0 === v && (this._initted || !this.vars.lazy || n) && (this._startTime === this._timeline._duration && (t = 0), (y < 0 || t <= 0 && t >= -1e-7 || 1e-10 === y && "isPause" !== this.data) && y !== t && (n = !0, y > 1e-10 && (s = "onReverseComplete")), this._rawPrevTime = f = !e || t || y === t ? t : 1e-10)) : t < 1e-7 ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== m || 0 === v && y > 0) && (s = "onReverseComplete", r = this._reversed), t < 0 && (this._active = !1, 0 === v && (this._initted || !this.vars.lazy || n) && (y >= 0 && (n = !0), this._rawPrevTime = f = !e || t || y === t ? t : 1e-10)), this._initted || (n = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (h = v + this._repeatDelay, this._cycle = this._totalTime / h >> 0, 0 !== this._cycle && this._cycle === this._totalTime / h && m <= t && this._cycle--, this._time = this._totalTime - this._cycle * h, this._yoyo && 0 != (1 & this._cycle) && (this._time = v - this._time, (p = this._yoyoEase || this.vars.yoyoEase) && (this._yoyoEase || (!0 !== p || this._initted ? this._yoyoEase = p = !0 === p ? this._ease : p instanceof Ease ? p : Ease.map[p] : (p = this.vars.ease, this._yoyoEase = p = p ? p instanceof Ease ? p : "function" == typeof p ? new Ease(p, this.vars.easeParams) : Ease.map[p] || i.defaultEase : i.defaultEase)), this.ratio = p ? 1 - p.getRatio((v - this._time) / v) : 0)), this._time > v ? this._time = v : this._time < 0 && (this._time = 0)), this._easeType && !p ? (l = this._time / v, u = this._easeType, c = this._easePower, (1 === u || 3 === u && l >= .5) && (l = 1 - l), 3 === u && (l *= 2), 1 === c ? l *= l : 2 === c ? l *= l * l : 3 === c ? l *= l * l * l : 4 === c && (l *= l * l * l * l), 1 === u ? this.ratio = 1 - l : 2 === u ? this.ratio = l : this._time / v < .5 ? this.ratio = l / 2 : this.ratio = 1 - l / 2) : p || (this.ratio = this._ease.getRatio(this._time / v))), _ === this._time && !n && g === this._cycle) return void (m !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))); if (!this._initted) { if (this._init(), !this._initted || this._gc) return; if (!n && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = _, this._totalTime = m, this._rawPrevTime = y, this._cycle = g, o.lazyTweens.push(this), void (this._lazy = [t, e]); !this._time || r || p ? r && this._ease._calcEnd && !p && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / v) } for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== _ && t >= 0 && (this._active = !0), 0 === m && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, !0, n) : s || (s = "_dummyGS")), this.vars.onStart && (0 === this._totalTime && 0 !== v || e || this._callback("onStart"))), a = this._firstPT; a;)a.f ? a.t[a.p](a.c * this.ratio + a.s) : a.t[a.p] = a.c * this.ratio + a.s, a = a._next; this._onUpdate && (t < 0 && this._startAt && this._startTime && this._startAt.render(t, !0, n), e || (this._totalTime !== m || s) && this._callback("onUpdate")), this._cycle !== g && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), s && (this._gc && !n || (t < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, !0, n), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this._callback(s), 0 === v && 1e-10 === this._rawPrevTime && 1e-10 !== f && (this._rawPrevTime = 0))) }, s.to = function (t, e, i) { return new s(t, e, i) }, s.from = function (t, e, i) { return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new s(t, e, i) }, s.fromTo = function (t, e, i, n) { return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new s(t, e, n) }, s.staggerTo = s.allTo = function (t, e, o, l, c, f, p) { l = l || 0; var d, _, m, g, v = 0, y = [], x = function () { o.onComplete && o.onComplete.apply(o.onCompleteScope || this, arguments), c.apply(p || o.callbackScope || this, f || u) }, T = o.cycle, w = o.startAt && o.startAt.cycle; for (h(t) || ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = n(t))), t = t || [], l < 0 && (t = n(t), t.reverse(), l *= -1), d = t.length - 1, m = 0; m <= d; m++) { _ = {}; for (g in o) _[g] = o[g]; if (T && (r(_, t, m), null != _.duration && (e = _.duration, delete _.duration)), w) { w = _.startAt = {}; for (g in o.startAt) w[g] = o.startAt[g]; r(_.startAt, t, m) } _.delay = v + (_.delay || 0), m === d && c && (_.onComplete = x), y[m] = new s(t[m], e, _), v += l } return y }, s.staggerFrom = s.allFrom = function (t, e, i, n, r, o, a) { return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, s.staggerTo(t, e, i, n, r, o, a) }, s.staggerFromTo = s.allFromTo = function (t, e, i, n, r, o, a, h) { return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, s.staggerTo(t, e, n, r, o, a, h) }, s.delayedCall = function (t, e, i, n, r) { return new s(e, 0, { delay: t, onComplete: e, onCompleteParams: i, callbackScope: n, onReverseComplete: e, onReverseCompleteParams: i, immediateRender: !1, useFrames: r, overwrite: 0 }) }, s.set = function (t, e) { return new s(t, 0, e) }, s.isTweening = function (t) { return i.getTweensOf(t, !0).length > 0 }; var c = function (t, e) { for (var n = [], r = 0, s = t._first; s;)s instanceof i ? n[r++] = s : (e && (n[r++] = s), n = n.concat(c(s, e)), r = n.length), s = s._next; return n }, f = s.getAllTweens = function (e) { return c(t._rootTimeline, e).concat(c(t._rootFramesTimeline, e)) }; s.killAll = function (t, i, n, r) { null == i && (i = !0), null == n && (n = !0); var s, o, a, h = f(0 != r), l = h.length, u = i && n && r; for (a = 0; a < l; a++)o = h[a], (u || o instanceof e || (s = o.target === o.vars.onComplete) && n || i && !s) && (t ? o.totalTime(o._reversed ? 0 : o.totalDuration()) : o._enabled(!1, !1)) }, s.killChildTweensOf = function (t, e) { if (null != t) { var r, l, u, c, f, p = o.tweenLookup; if ("string" == typeof t && (t = i.selector(t) || t), a(t) && (t = n(t)), h(t)) for (c = t.length; --c > -1;)s.killChildTweensOf(t[c], e); else { r = []; for (u in p) for (l = p[u].target.parentNode; l;)l === t && (r = r.concat(p[u].tweens)), l = l.parentNode; for (f = r.length, c = 0; c < f; c++)e && r[c].totalTime(r[c].totalDuration()), r[c]._enabled(!1, !1) } } }; var p = function (t, i, n, r) { i = !1 !== i, n = !1 !== n, r = !1 !== r; for (var s, o, a = f(r), h = i && n && r, l = a.length; --l > -1;)o = a[l], (h || o instanceof e || (s = o.target === o.vars.onComplete) && n || i && !s) && o.paused(t) }; return s.pauseAll = function (t, e, i) { p(!0, t, e, i) }, s.resumeAll = function (t, e, i) { p(!1, t, e, i) }, s.globalTimeScale = function (e) { var n = t._rootTimeline, r = i.ticker.time; return arguments.length ? (e = e || 1e-10, n._startTime = r - (r - n._startTime) * n._timeScale / e, n = t._rootFramesTimeline, r = i.ticker.frame, n._startTime = r - (r - n._startTime) * n._timeScale / e, n._timeScale = t._rootTimeline._timeScale = e, e) : n._timeScale }, l.progress = function (t, e) { return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() }, l.totalProgress = function (t, e) { return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() }, l.time = function (t, e) { return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time }, l.duration = function (e) { return arguments.length ? t.prototype.duration.call(this, e) : this._duration }, l.totalDuration = function (t) { return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration) }, l.repeat = function (t) { return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat }, l.repeatDelay = function (t) { return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay }, l.yoyo = function (t) { return arguments.length ? (this._yoyo = t, this) : this._yoyo }, s }, !0), s._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function (t, e, i) { var n = function (t) { e.call(this, t), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate; var i, n, r = this.vars; for (n in r) i = r[n], h(i) && -1 !== i.join("").indexOf("{self}") && (r[n] = this._swapSelfInParams(i)); h(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger) }, r = i._internals, o = n._internals = {}, a = r.isSelector, h = r.isArray, l = r.lazyTweens, u = r.lazyRender, c = s._gsDefine.globals, f = function (t) { var e, i = {}; for (e in t) i[e] = t[e]; return i }, p = function (t, e, i) { var n, r, s = t.cycle; for (n in s) r = s[n], t[n] = "function" == typeof r ? r(i, e[i]) : r[i % r.length]; delete t.cycle }, d = o.pauseCallback = function () { }, _ = function (t) { var e, i = [], n = t.length; for (e = 0; e !== n; i.push(t[e++])); return i }, m = n.prototype = new e; return n.version = "1.20.4", m.constructor = n, m.kill()._gc = m._forcingPlayhead = m._hasPause = !1, m.to = function (t, e, n, r) { var s = n.repeat && c.TweenMax || i; return e ? this.add(new s(t, e, n), r) : this.set(t, n, r) }, m.from = function (t, e, n, r) { return this.add((n.repeat && c.TweenMax || i).from(t, e, n), r) }, m.fromTo = function (t, e, n, r, s) { var o = r.repeat && c.TweenMax || i; return e ? this.add(o.fromTo(t, e, n, r), s) : this.set(t, r, s) }, m.staggerTo = function (t, e, r, s, o, h, l, u) { var c, d, m = new n({ onComplete: h, onCompleteParams: l, callbackScope: u, smoothChildTiming: this.smoothChildTiming }), g = r.cycle; for ("string" == typeof t && (t = i.selector(t) || t), t = t || [], a(t) && (t = _(t)), s = s || 0, s < 0 && (t = _(t), t.reverse(), s *= -1), d = 0; d < t.length; d++)c = f(r), c.startAt && (c.startAt = f(c.startAt), c.startAt.cycle && p(c.startAt, t, d)), g && (p(c, t, d), null != c.duration && (e = c.duration, delete c.duration)), m.to(t[d], e, c, d * s); return this.add(m, o) }, m.staggerFrom = function (t, e, i, n, r, s, o, a) { return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, r, s, o, a) }, m.staggerFromTo = function (t, e, i, n, r, s, o, a, h) { return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, r, s, o, a, h) }, m.call = function (t, e, n, r) { return this.add(i.delayedCall(0, t, e, n), r) }, m.set = function (t, e, n) { return n = this._parseTimeOrLabel(n, 0, !0), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n) }, n.exportRoot = function (t, e) { t = t || {}, null == t.smoothChildTiming && (t.smoothChildTiming = !0); var r, s, o, a, h = new n(t), l = h._timeline; for (null == e && (e = !0), l._remove(h, !0), h._startTime = 0, h._rawPrevTime = h._time = h._totalTime = l._time, o = l._first; o;)a = o._next, e && o instanceof i && o.target === o.vars.onComplete || (s = o._startTime - o._delay, s < 0 && (r = 1), h.add(o, s)), o = a; return l.add(h, 0), r && h.totalDuration(), h }, m.add = function (r, s, o, a) { var l, u, c, f, p, d; if ("number" != typeof s && (s = this._parseTimeOrLabel(s, 0, !0, r)), !(r instanceof t)) { if (r instanceof Array || r && r.push && h(r)) { for (o = o || "normal", a = a || 0, l = s, u = r.length, c = 0; c < u; c++)h(f = r[c]) && (f = new n({ tweens: f })), this.add(f, l), "string" != typeof f && "function" != typeof f && ("sequence" === o ? l = f._startTime + f.totalDuration() / f._timeScale : "start" === o && (f._startTime -= f.delay())), l += a; return this._uncache(!0) } if ("string" == typeof r) return this.addLabel(r, s); if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string."; r = i.delayedCall(0, r) } if (e.prototype.add.call(this, r, s), r._time && r.render((this.rawTime() - r._startTime) * r._timeScale, !1, !1), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration()) for (p = this, d = p.rawTime() > r._startTime; p._timeline;)d && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1), p = p._timeline; return this }, m.remove = function (e) { if (e instanceof t) { this._remove(e, !1); var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline; return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this } if (e instanceof Array || e && e.push && h(e)) { for (var n = e.length; --n > -1;)this.remove(e[n]); return this } return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e) }, m._remove = function (t, i) { return e.prototype._remove.call(this, t, i), this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this }, m.append = function (t, e) { return this.add(t, this._parseTimeOrLabel(null, e, !0, t)) }, m.insert = m.insertMultiple = function (t, e, i, n) { return this.add(t, e || 0, i, n) }, m.appendMultiple = function (t, e, i, n) { return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n) }, m.addLabel = function (t, e) { return this._labels[t] = this._parseTimeOrLabel(e), this }, m.addPause = function (t, e, n, r) { var s = i.delayedCall(0, d, n, r || this); return s.vars.onComplete = s.vars.onReverseComplete = e, s.data = "isPause", this._hasPause = !0, this.add(s, t) }, m.removeLabel = function (t) { return delete this._labels[t], this }, m.getLabelTime = function (t) { return null != this._labels[t] ? this._labels[t] : -1 }, m._parseTimeOrLabel = function (e, i, n, r) { var s, o; if (r instanceof t && r.timeline === this) this.remove(r); else if (r && (r instanceof Array || r.push && h(r))) for (o = r.length; --o > -1;)r[o] instanceof t && r[o].timeline === this && this.remove(r[o]); if (s = "number" != typeof e || i ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0, "string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - s : 0, n); if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = s); else { if (-1 === (o = e.indexOf("="))) return null == this._labels[e] ? n ? this._labels[e] = s + i : i : this._labels[e] + i; i = parseInt(e.charAt(o - 1) + "1", 10) * Number(e.substr(o + 1)), e = o > 1 ? this._parseTimeOrLabel(e.substr(0, o - 1), 0, n) : s } return Number(e) + i }, m.seek = function (t, e) { return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e) }, m.stop = function () { return this.paused(!0) }, m.gotoAndPlay = function (t, e) { return this.play(t, e) }, m.gotoAndStop = function (t, e) { return this.pause(t, e) }, m.render = function (t, e, i) { this._gc && this._enabled(!0, !1); var n, r, s, o, a, h, c, f = this._time, p = this._dirty ? this.totalDuration() : this._totalDuration, d = this._startTime, _ = this._timeScale, m = this._paused; if (f !== this._time && (t += this._time - f), t >= p - 1e-7 && t >= 0) this._totalTime = this._time = p, this._reversed || this._hasPausedChild() || (r = !0, o = "onComplete", a = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-7 || this._rawPrevTime < 0 || 1e-10 === this._rawPrevTime) && this._rawPrevTime !== t && this._first && (a = !0, this._rawPrevTime > 1e-10 && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, t = p + 1e-4; else if (t < 1e-7) if (this._totalTime = this._time = 0, (0 !== f || 0 === this._duration && 1e-10 !== this._rawPrevTime && (this._rawPrevTime > 0 || t < 0 && this._rawPrevTime >= 0)) && (o = "onReverseComplete", r = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (a = r = !0, o = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (a = !0), this._rawPrevTime = t; else { if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, 0 === t && r) for (n = this._first; n && 0 === n._startTime;)n._duration || (r = !1), n = n._next; t = 0, this._initted || (a = !0) } else { if (this._hasPause && !this._forcingPlayhead && !e) { if (t >= f) for (n = this._first; n && n._startTime <= t && !h;)n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (h = n), n = n._next; else for (n = this._last; n && n._startTime >= t && !h;)n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (h = n), n = n._prev; h && (this._time = t = h._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay)) } this._totalTime = this._time = this._rawPrevTime = t } if (this._time !== f && this._first || i || a || h) { if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== f && t > 0 && (this._active = !0), 0 === f && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), (c = this._time) >= f) for (n = this._first; n && (s = n._next, c === this._time && (!this._paused || m));)(n._active || n._startTime <= c && !n._paused && !n._gc) && (h === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = s; else for (n = this._last; n && (s = n._prev, c === this._time && (!this._paused || m));) { if (n._active || n._startTime <= f && !n._paused && !n._gc) { if (h === n) { for (h = n._prev; h && h.endTime() > this._time;)h.render(h._reversed ? h.totalDuration() - (t - h._startTime) * h._timeScale : (t - h._startTime) * h._timeScale, e, i), h = h._prev; h = null, this.pause() } n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i) } n = s } this._onUpdate && (e || (l.length && u(), this._callback("onUpdate"))), o && (this._gc || d !== this._startTime && _ === this._timeScale || (0 === this._time || p >= this.totalDuration()) && (r && (l.length && u(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o))) } }, m._hasPausedChild = function () { for (var t = this._first; t;) { if (t._paused || t instanceof n && t._hasPausedChild()) return !0; t = t._next } return !1 }, m.getChildren = function (t, e, n, r) { r = r || -9999999999; for (var s = [], o = this._first, a = 0; o;)o._startTime < r || (o instanceof i ? !1 !== e && (s[a++] = o) : (!1 !== n && (s[a++] = o), !1 !== t && (s = s.concat(o.getChildren(!0, e, n)), a = s.length))), o = o._next; return s }, m.getTweensOf = function (t, e) { var n, r, s = this._gc, o = [], a = 0; for (s && this._enabled(!0, !0), n = i.getTweensOf(t), r = n.length; --r > -1;)(n[r].timeline === this || e && this._contains(n[r])) && (o[a++] = n[r]); return s && this._enabled(!1, !0), o }, m.recent = function () { return this._recent }, m._contains = function (t) { for (var e = t.timeline; e;) { if (e === this) return !0; e = e.timeline } return !1 }, m.shiftChildren = function (t, e, i) { i = i || 0; for (var n, r = this._first, s = this._labels; r;)r._startTime >= i && (r._startTime += t), r = r._next; if (e) for (n in s) s[n] >= i && (s[n] += t); return this._uncache(!0) }, m._kill = function (t, e) { if (!t && !e) return this._enabled(!1, !1); for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1;)i[n]._kill(t, e) && (r = !0); return r }, m.clear = function (t) { var e = this.getChildren(!1, !0, !0), i = e.length; for (this._time = this._totalTime = 0; --i > -1;)e[i]._enabled(!1, !1); return !1 !== t && (this._labels = {}), this._uncache(!0) }, m.invalidate = function () { for (var e = this._first; e;)e.invalidate(), e = e._next; return t.prototype.invalidate.call(this) }, m._enabled = function (t, i) { if (t === this._gc) for (var n = this._first; n;)n._enabled(t, !0), n = n._next; return e.prototype._enabled.call(this, t, i) }, m.totalTime = function (e, i, n) { this._forcingPlayhead = !0; var r = t.prototype.totalTime.apply(this, arguments); return this._forcingPlayhead = !1, r }, m.duration = function (t) { return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration) }, m.totalDuration = function (t) { if (!arguments.length) { if (this._dirty) { for (var e, i, n = 0, r = this._last, s = 999999999999; r;)e = r._prev, r._dirty && r.totalDuration(), r._startTime > s && this._sortChildren && !r._paused && !this._calculatingDuration ? (this._calculatingDuration = 1, this.add(r, r._startTime - r._delay), this._calculatingDuration = 0) : s = r._startTime, r._startTime < 0 && !r._paused && (n -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale, this._time -= r._startTime, this._totalTime -= r._startTime, this._rawPrevTime -= r._startTime), this.shiftChildren(-r._startTime, !1, -9999999999), s = 0), i = r._startTime + r._totalDuration / r._timeScale, i > n && (n = i), r = e; this._duration = this._totalDuration = n, this._dirty = !1 } return this._totalDuration } return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this }, m.paused = function (e) { if (!e) for (var i = this._first, n = this._time; i;)i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next; return t.prototype.paused.apply(this, arguments) }, m.usesFrames = function () { for (var e = this._timeline; e._timeline;)e = e._timeline; return e === t._rootFramesTimeline }, m.rawTime = function (t) { return t && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale }, n }, !0), s._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function (t, e, i) { var n = function (e) { t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0 }, r = e._internals, o = r.lazyTweens, a = r.lazyRender, h = s._gsDefine.globals, l = new i(null, null, 1, 0), u = n.prototype = new t; return u.constructor = n, u.kill()._gc = !1, n.version = "1.20.4", u.invalidate = function () { return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this) }, u.addCallback = function (t, i, n, r) { return this.add(e.delayedCall(0, t, n, r), i) }, u.removeCallback = function (t, e) { if (t) if (null == e) this._kill(null, t); else for (var i = this.getTweensOf(t, !1), n = i.length, r = this._parseTimeOrLabel(e); --n > -1;)i[n]._startTime === r && i[n]._enabled(!1, !1); return this }, u.removePause = function (e) { return this.removeCallback(t._internals.pauseCallback, e) }, u.tweenTo = function (t, i) { i = i || {}; var n, r, s, o = { ease: l, useFrames: this.usesFrames(), immediateRender: !1, lazy: !1 }, a = i.repeat && h.TweenMax || e; for (r in i) o[r] = i[r]; return o.time = this._parseTimeOrLabel(t), n = Math.abs(Number(o.time) - this._time) / this._timeScale || .001, s = new a(this, n, o), o.onStart = function () { s.target.paused(!0), s.vars.time === s.target.time() || n !== s.duration() || s.isFromTo || s.duration(Math.abs(s.vars.time - s.target.time()) / s.target._timeScale).render(s.time(), !0, !0), i.onStart && i.onStart.apply(i.onStartScope || i.callbackScope || s, i.onStartParams || []) }, s }, u.tweenFromTo = function (t, e, i) { i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = { onComplete: this.seek, onCompleteParams: [t], callbackScope: this }, i.immediateRender = !1 !== i.immediateRender; var n = this.tweenTo(e, i); return n.isFromTo = 1, n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001) }, u.render = function (t, e, i) { this._gc && this._enabled(!0, !1); var n, r, s, h, l, u, c, f, p = this._time, d = this._dirty ? this.totalDuration() : this._totalDuration, _ = this._duration, m = this._totalTime, g = this._startTime, v = this._timeScale, y = this._rawPrevTime, x = this._paused, T = this._cycle; if (p !== this._time && (t += this._time - p), t >= d - 1e-7 && t >= 0) this._locked || (this._totalTime = d, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (r = !0, h = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (t <= 0 && t >= -1e-7 || y < 0 || 1e-10 === y) && y !== t && this._first && (l = !0, y > 1e-10 && (h = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : (this._time = _, t = _ + 1e-4); else if (t < 1e-7) if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== p || 0 === _ && 1e-10 !== y && (y > 0 || t < 0 && y >= 0) && !this._locked) && (h = "onReverseComplete", r = this._reversed), t < 0) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = r = !0, h = "onReverseComplete") : y >= 0 && this._first && (l = !0), this._rawPrevTime = t; else { if (this._rawPrevTime = _ || !e || t || this._rawPrevTime === t ? t : 1e-10, 0 === t && r) for (n = this._first; n && 0 === n._startTime;)n._duration || (r = !1), n = n._next; t = 0, this._initted || (l = !0) } else if (0 === _ && y < 0 && (l = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (u = _ + this._repeatDelay, this._cycle = this._totalTime / u >> 0, 0 !== this._cycle && this._cycle === this._totalTime / u && m <= t && this._cycle--, this._time = this._totalTime - this._cycle * u, this._yoyo && 0 != (1 & this._cycle) && (this._time = _ - this._time), this._time > _ ? (this._time = _, t = _ + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) { if ((t = this._time) >= p || this._repeat && T !== this._cycle) for (n = this._first; n && n._startTime <= t && !c;)n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (c = n), n = n._next; else for (n = this._last; n && n._startTime >= t && !c;)n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (c = n), n = n._prev; c && c._startTime < _ && (this._time = t = c._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay)) } if (this._cycle !== T && !this._locked) { var w = this._yoyo && 0 != (1 & T), b = w === (this._yoyo && 0 != (1 & this._cycle)), P = this._totalTime, S = this._cycle, O = this._rawPrevTime, k = this._time; if (this._totalTime = T * _, this._cycle < T ? w = !w : this._totalTime += _, this._time = p, this._rawPrevTime = 0 === _ ? y - 1e-4 : y, this._cycle = T, this._locked = !0, p = w ? 0 : _, this.render(p, e, 0 === _), e || this._gc || this.vars.onRepeat && (this._cycle = S, this._locked = !1, this._callback("onRepeat")), p !== this._time) return; if (b && (this._cycle = T, this._locked = !0, p = w ? _ + 1e-4 : -1e-4, this.render(p, !0, !1)), this._locked = !1, this._paused && !x) return; this._time = k, this._totalTime = P, this._cycle = S, this._rawPrevTime = O } if (!(this._time !== p && this._first || i || l || c)) return void (m !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))); if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== m && t > 0 && (this._active = !0), 0 === m && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), (f = this._time) >= p) for (n = this._first; n && (s = n._next, f === this._time && (!this._paused || x));)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (c === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = s; else for (n = this._last; n && (s = n._prev, f === this._time && (!this._paused || x));) { if (n._active || n._startTime <= p && !n._paused && !n._gc) { if (c === n) { for (c = n._prev; c && c.endTime() > this._time;)c.render(c._reversed ? c.totalDuration() - (t - c._startTime) * c._timeScale : (t - c._startTime) * c._timeScale, e, i), c = c._prev; c = null, this.pause() } n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i) } n = s } this._onUpdate && (e || (o.length && a(), this._callback("onUpdate"))), h && (this._locked || this._gc || g !== this._startTime && v === this._timeScale || (0 === this._time || d >= this.totalDuration()) && (r && (o.length && a(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[h] && this._callback(h))) }, u.getActive = function (t, e, i) { null == t && (t = !0), null == e && (e = !0), null == i && (i = !1); var n, r, s = [], o = this.getChildren(t, e, i), a = 0, h = o.length; for (n = 0; n < h; n++)r = o[n], r.isActive() && (s[a++] = r); return s }, u.getLabelAfter = function (t) { t || 0 !== t && (t = this._time); var e, i = this.getLabelsArray(), n = i.length; for (e = 0; e < n; e++)if (i[e].time > t) return i[e].name; return null }, u.getLabelBefore = function (t) { null == t && (t = this._time); for (var e = this.getLabelsArray(), i = e.length; --i > -1;)if (e[i].time < t) return e[i].name; return null }, u.getLabelsArray = function () { var t, e = [], i = 0; for (t in this._labels) e[i++] = { time: this._labels[t], name: t }; return e.sort(function (t, e) { return t.time - e.time }), e }, u.invalidate = function () { return this._locked = !1, t.prototype.invalidate.call(this) }, u.progress = function (t, e) { return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() || 0 }, u.totalProgress = function (t, e) { return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() || 0 }, u.totalDuration = function (e) { return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration) }, u.time = function (t, e) { return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time }, u.repeat = function (t) { return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat }, u.repeatDelay = function (t) { return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay }, u.yoyo = function (t) { return arguments.length ? (this._yoyo = t, this) : this._yoyo }, u.currentLabel = function (t) { return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8) }, n }, !0), function () { var t = 180 / Math.PI, e = [], i = [], n = [], r = {}, o = s._gsDefine.globals, a = function (t, e, i, n) { i === n && (i = n - (n - e) / 1e6), t === e && (e = t + (i - t) / 1e6), this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t, this.ca = i - t, this.ba = e - t }, h = function (t, e, i, n) { var r = { a: t }, s = {}, o = {}, a = { c: n }, h = (t + e) / 2, l = (e + i) / 2, u = (i + n) / 2, c = (h + l) / 2, f = (l + u) / 2, p = (f - c) / 8; return r.b = h + (t - h) / 4, s.b = c + p, r.c = s.a = (r.b + s.b) / 2, s.c = o.a = (c + f) / 2, o.b = f - p, a.b = u + (n - u) / 4, o.c = a.a = (o.b + a.b) / 2, [r, s, o, a] }, l = function (t, r, s, o, a) { var l, u, c, f, p, d, _, m, g, v, y, x, T, w = t.length - 1, b = 0, P = t[0].a; for (l = 0; l < w; l++)p = t[b], u = p.a, c = p.d, f = t[b + 1].d, a ? (y = e[l], x = i[l], T = (x + y) * r * .25 / (o ? .5 : n[l] || .5), d = c - (c - u) * (o ? .5 * r : 0 !== y ? T / y : 0), _ = c + (f - c) * (o ? .5 * r : 0 !== x ? T / x : 0), m = c - (d + ((_ - d) * (3 * y / (y + x) + .5) / 4 || 0))) : (d = c - (c - u) * r * .5, _ = c + (f - c) * r * .5, m = c - (d + _) / 2), d += m, _ += m, p.c = g = d, p.b = 0 !== l ? P : P = p.a + .6 * (p.c - p.a), p.da = c - u, p.ca = g - u, p.ba = P - u, s ? (v = h(u, P, g, c), t.splice(b, 1, v[0], v[1], v[2], v[3]), b += 4) : b++, P = _; p = t[b], p.b = P, p.c = P + .4 * (p.d - P), p.da = p.d - p.a, p.ca = p.c - p.a, p.ba = P - p.a, s && (v = h(p.a, P, p.c, p.d), t.splice(b, 1, v[0], v[1], v[2], v[3])) }, u = function (t, n, r, s) { var o, h, l, u, c, f, p = []; if (s) for (t = [s].concat(t), h = t.length; --h > -1;)"string" == typeof (f = t[h][n]) && "=" === f.charAt(1) && (t[h][n] = s[n] + Number(f.charAt(0) + f.substr(2))); if ((o = t.length - 2) < 0) return p[0] = new a(t[0][n], 0, 0, t[0][n]), p; for (h = 0; h < o; h++)l = t[h][n], u = t[h + 1][n], p[h] = new a(l, 0, 0, u), r && (c = t[h + 2][n], e[h] = (e[h] || 0) + (u - l) * (u - l), i[h] = (i[h] || 0) + (c - u) * (c - u)); return p[h] = new a(t[h][n], 0, 0, t[h + 1][n]), p }, c = function (t, s, o, a, h, c) { var f, p, d, _, m, g, v, y, x = {}, T = [], w = c || t[0]; h = "string" == typeof h ? "," + h + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == s && (s = 1); for (p in t[0]) T.push(p); if (t.length > 1) { for (y = t[t.length - 1], v = !0, f = T.length; --f > -1;)if (p = T[f], Math.abs(w[p] - y[p]) > .05) { v = !1; break } v && (t = t.concat(), c && t.unshift(c), t.push(t[1]), c = t[t.length - 3]) } for (e.length = i.length = n.length = 0, f = T.length; --f > -1;)p = T[f], r[p] = -1 !== h.indexOf("," + p + ","), x[p] = u(t, p, r[p], c); for (f = e.length; --f > -1;)e[f] = Math.sqrt(e[f]), i[f] = Math.sqrt(i[f]); if (!a) { for (f = T.length; --f > -1;)if (r[p]) for (d = x[T[f]], g = d.length - 1, _ = 0; _ < g; _++)m = d[_ + 1].da / i[_] + d[_].da / e[_] || 0, n[_] = (n[_] || 0) + m * m; for (f = n.length; --f > -1;)n[f] = Math.sqrt(n[f]) } for (f = T.length, _ = o ? 4 : 1; --f > -1;)p = T[f], d = x[p], l(d, s, o, a, r[p]), v && (d.splice(0, _), d.splice(d.length - _, _)); return x }, f = function (t, e, i) { e = e || "soft"; var n, r, s, o, h, l, u, c, f, p, d, _ = {}, m = "cubic" === e ? 3 : 2, g = "soft" === e, v = []; if (g && i && (t = [i].concat(t)), null == t || t.length < m + 1) throw "invalid Bezier data"; for (f in t[0]) v.push(f); for (l = v.length; --l > -1;) { for (f = v[l], _[f] = h = [], p = 0, c = t.length, u = 0; u < c; u++)n = null == i ? t[u][f] : "string" == typeof (d = t[u][f]) && "=" === d.charAt(1) ? i[f] + Number(d.charAt(0) + d.substr(2)) : Number(d), g && u > 1 && u < c - 1 && (h[p++] = (n + h[p - 2]) / 2), h[p++] = n; for (c = p - m + 1, p = 0, u = 0; u < c; u += m)n = h[u], r = h[u + 1], s = h[u + 2], o = 2 === m ? 0 : h[u + 3], h[p++] = d = 3 === m ? new a(n, r, s, o) : new a(n, (2 * r + n) / 3, (2 * r + s) / 3, s); h.length = p } return _ }, p = function (t, e, i) { for (var n, r, s, o, a, h, l, u, c, f, p, d = 1 / i, _ = t.length; --_ > -1;)for (f = t[_], s = f.a, o = f.d - s, a = f.c - s, h = f.b - s, n = r = 0, u = 1; u <= i; u++)l = d * u, c = 1 - l, n = r - (r = (l * l * o + 3 * c * (l * a + c * h)) * l), p = _ * i + u - 1, e[p] = (e[p] || 0) + n * n }, d = function (t, e) { e = e >> 0 || 6; var i, n, r, s, o = [], a = [], h = 0, l = 0, u = e - 1, c = [], f = []; for (i in t) p(t[i], o, e); for (r = o.length, n = 0; n < r; n++)h += Math.sqrt(o[n]), s = n % e, f[s] = h, s === u && (l += h, s = n / e >> 0, c[s] = f, a[s] = l, h = 0, f = []); return { length: l, lengths: a, segments: c } }, _ = s._gsDefine.plugin({ propName: "bezier", priority: -1, version: "1.3.8", API: 2, global: !0, init: function (t, e, i) { this._target = t, e instanceof Array && (e = { values: e }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10); var n, r, s, o, a, h = e.values || [], l = {}, u = h[0], p = e.autoRotate || i.vars.orientToBezier; this._autoRotate = p ? p instanceof Array ? p : [["x", "y", "rotation", !0 === p ? 0 : Number(p) || 0]] : null; for (n in u) this._props.push(n); for (s = this._props.length; --s > -1;)n = this._props[s], this._overwriteProps.push(n), r = this._func[n] = "function" == typeof t[n], l[n] = r ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), a || l[n] !== h[0][n] && (a = l); if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? c(h, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, a) : f(h, e.type, l), this._segCount = this._beziers[n].length, this._timeRes) { var _ = d(this._beziers, this._timeRes); this._length = _.length, this._lengths = _.lengths, this._segments = _.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length } if (p = this._autoRotate) for (this._initialRotations = [], p[0] instanceof Array || (this._autoRotate = p = [p]), s = p.length; --s > -1;) { for (o = 0; o < 3; o++)n = p[s][o], this._func[n] = "function" == typeof t[n] && t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]; n = p[s][2], this._initialRotations[s] = (this._func[n] ? this._func[n].call(this._target) : this._target[n]) || 0, this._overwriteProps.push(n) } return this._startRatio = i.vars.runBackwards ? 1 : 0, !0 }, set: function (e) { var i, n, r, s, o, a, h, l, u, c, f = this._segCount, p = this._func, d = this._target, _ = e !== this._startRatio; if (this._timeRes) { if (u = this._lengths, c = this._curSeg, e *= this._length, r = this._li, e > this._l2 && r < f - 1) { for (l = f - 1; r < l && (this._l2 = u[++r]) <= e;); this._l1 = u[r - 1], this._li = r, this._curSeg = c = this._segments[r], this._s2 = c[this._s1 = this._si = 0] } else if (e < this._l1 && r > 0) { for (; r > 0 && (this._l1 = u[--r]) >= e;); 0 === r && e < this._l1 ? this._l1 = 0 : r++, this._l2 = u[r], this._li = r, this._curSeg = c = this._segments[r], this._s1 = c[(this._si = c.length - 1) - 1] || 0, this._s2 = c[this._si] } if (i = r, e -= this._l1, r = this._si, e > this._s2 && r < c.length - 1) { for (l = c.length - 1; r < l && (this._s2 = c[++r]) <= e;); this._s1 = c[r - 1], this._si = r } else if (e < this._s1 && r > 0) { for (; r > 0 && (this._s1 = c[--r]) >= e;); 0 === r && e < this._s1 ? this._s1 = 0 : r++, this._s2 = c[r], this._si = r } a = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0 } else i = e < 0 ? 0 : e >= 1 ? f - 1 : f * e >> 0, a = (e - i * (1 / f)) * f; for (n = 1 - a, r = this._props.length; --r > -1;)s = this._props[r], o = this._beziers[s][i], h = (a * a * o.da + 3 * n * (a * o.ca + n * o.ba)) * a + o.a, this._mod[s] && (h = this._mod[s](h, d)), p[s] ? d[s](h) : d[s] = h; if (this._autoRotate) { var m, g, v, y, x, T, w, b = this._autoRotate; for (r = b.length; --r > -1;)s = b[r][2], T = b[r][3] || 0, w = !0 === b[r][4] ? 1 : t, o = this._beziers[b[r][0]], m = this._beziers[b[r][1]], o && m && (o = o[i], m = m[i], g = o.a + (o.b - o.a) * a, y = o.b + (o.c - o.b) * a, g += (y - g) * a, y += (o.c + (o.d - o.c) * a - y) * a, v = m.a + (m.b - m.a) * a, x = m.b + (m.c - m.b) * a, v += (x - v) * a, x += (m.c + (m.d - m.c) * a - x) * a, h = _ ? Math.atan2(x - v, y - g) * w + T : this._initialRotations[r], this._mod[s] && (h = this._mod[s](h, d)), p[s] ? d[s](h) : d[s] = h) } } }), m = _.prototype; _.bezierThrough = c, _.cubicToQuadratic = h, _._autoCSS = !0, _.quadraticToCubic = function (t, e, i) { return new a(t, (2 * e + t) / 3, (2 * e + i) / 3, i) }, _._cssRegister = function () { var t = o.CSSPlugin; if (t) { var e = t._internals, i = e._parseToProxy, n = e._setPluginRatio, r = e.CSSPropTween; e._registerComplexSpecialProp("bezier", { parser: function (t, e, s, o, a, h) { e instanceof Array && (e = { values: e }), h = new _; var l, u, c, f = e.values, p = f.length - 1, d = [], m = {}; if (p < 0) return a; for (l = 0; l <= p; l++)c = i(t, f[l], o, a, h, p !== l), d[l] = c.end; for (u in e) m[u] = e[u]; return m.values = d, a = new r(t, "bezier", 0, 0, c.pt, 2), a.data = c, a.plugin = h, a.setRatio = n, 0 === m.autoRotate && (m.autoRotate = !0), !m.autoRotate || m.autoRotate instanceof Array || (l = !0 === m.autoRotate ? 0 : Number(m.autoRotate), m.autoRotate = null != c.end.left ? [["left", "top", "rotation", l, !1]] : null != c.end.x && [["x", "y", "rotation", l, !1]]), m.autoRotate && (o._transform || o._enableTransforms(!1), c.autoRotate = o._target._gsTransform, c.proxy.rotation = c.autoRotate.rotation || 0, o._overwriteProps.push("rotation")), h._onInitTween(c.proxy, m, o._tween), a } }) } }, m._mod = function (t) { for (var e, i = this._overwriteProps, n = i.length; --n > -1;)(e = t[i[n]]) && "function" == typeof e && (this._mod[i[n]] = e) }, m._kill = function (t) { var e, i, n = this._props; for (e in this._beziers) if (e in t) for (delete this._beziers[e], delete this._func[e], i = n.length; --i > -1;)n[i] === e && n.splice(i, 1); if (n = this._autoRotate) for (i = n.length; --i > -1;)t[n[i][2]] && n.splice(i, 1); return this._super._kill.call(this, t) } }(), s._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function (t, e) { var i, n, r, o, a = function () { t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio }, h = s._gsDefine.globals, l = {}, u = a.prototype = new t("css"); u.constructor = a, a.version = "1.20.4", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", a.defaultSmoothOrigin = !0, u = "px", a.suffixMap = { top: u, right: u, bottom: u, left: u, width: u, height: u, fontSize: u, padding: u, margin: u, perspective: u, lineHeight: "" }; var c, f, p, d, _, m, g, v, y = /(?:\-|\.|\b)(\d|\.|e\-)+/g, x = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, T = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, w = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, b = /(?:\d|\-|\+|=|#|\.)*/g, P = /opacity *= *([^)]*)/i, S = /opacity:([^;]*)/i, O = /alpha\(opacity *=.+?\)/i, k = /^(rgb|hsl)/, C = /([A-Z])/g, R = /-([a-z])/gi, A = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, E = function (t, e) { return e.toUpperCase() }, I = /(?:Left|Right|Width)/i, M = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, L = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, z = /,(?=[^\)]*(?:\(|$))/gi, D = /[\s,\(]/i, F = Math.PI / 180, j = 180 / Math.PI, B = {}, N = { style: {} }, W = s.document || { createElement: function () { return N } }, X = function (t, e) { return W.createElementNS ? W.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : W.createElement(t) }, Y = X("div"), U = X("img"), q = a._internals = { _specialProps: l }, H = (s.navigator || {}).userAgent || "", V = function () { var t = H.indexOf("Android"), e = X("a"); return p = -1 !== H.indexOf("Safari") && -1 === H.indexOf("Chrome") && (-1 === t || parseFloat(H.substr(t + 8, 2)) > 3), _ = p && parseFloat(H.substr(H.indexOf("Version/") + 8, 2)) < 6, d = -1 !== H.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(H) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(H)) && (m = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity)) }(), G = function (t) { return P.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1 }, Q = function (t) { s.console && console.log(t) }, $ = "", Z = "", J = function (t, e) { e = e || Y; var i, n, r = e.style; if (void 0 !== r[t]) return t; for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === r[i[n] + t];); return n >= 0 ? (Z = 3 === n ? "ms" : i[n], $ = "-" + Z.toLowerCase() + "-", Z + t) : null }, K = W.defaultView ? W.defaultView.getComputedStyle : function () { }, tt = a.getStyle = function (t, e, i, n, r) { var s; return V || "opacity" !== e ? (!n && t.style[e] ? s = t.style[e] : (i = i || K(t)) ? s = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(C, "-$1").toLowerCase()) : t.currentStyle && (s = t.currentStyle[e]), null == r || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : r) : G(t) }, et = q.convertToPixels = function (t, i, n, r, s) { if ("px" === r || !r && "lineHeight" !== i) return n; if ("auto" === r || !n) return 0; var o, h, l, u = I.test(i), c = t, f = Y.style, p = n < 0, d = 1 === n; if (p && (n = -n), d && (n *= 100), "lineHeight" !== i || r) if ("%" === r && -1 !== i.indexOf("border")) o = n / 100 * (u ? t.clientWidth : t.clientHeight); else { if (f.cssText = "border:0 solid red;position:" + tt(t, "position") + ";line-height:0;", "%" !== r && c.appendChild && "v" !== r.charAt(0) && "rem" !== r) f[u ? "borderLeftWidth" : "borderTopWidth"] = n + r; else { if (c = t.parentNode || W.body, -1 !== tt(c, "display").indexOf("flex") && (f.position = "absolute"), h = c._gsCache, l = e.ticker.frame, h && u && h.time === l) return h.width * n / 100; f[u ? "width" : "height"] = n + r } c.appendChild(Y), o = parseFloat(Y[u ? "offsetWidth" : "offsetHeight"]), c.removeChild(Y), u && "%" === r && !1 !== a.cacheWidths && (h = c._gsCache = c._gsCache || {}, h.time = l, h.width = o / n * 100), 0 !== o || s || (o = et(t, i, n, r, !0)) } else h = K(t).lineHeight, t.style.lineHeight = n, o = parseFloat(K(t).lineHeight), t.style.lineHeight = h; return d && (o /= 100), p ? -o : o }, it = q.calculateOffset = function (t, e, i) { if ("absolute" !== tt(t, "position", i)) return 0; var n = "left" === e ? "Left" : "Top", r = tt(t, "margin" + n, i); return t["offset" + n] - (et(t, e, parseFloat(r), r.replace(b, "")) || 0) }, nt = function (t, e) { var i, n, r, s = {}; if (e = e || K(t, null)) if (i = e.length) for (; --i > -1;)r = e[i], -1 !== r.indexOf("-transform") && At !== r || (s[r.replace(R, E)] = e.getPropertyValue(r)); else for (i in e) -1 !== i.indexOf("Transform") && Rt !== i || (s[i] = e[i]); else if (e = t.currentStyle || t.style) for (i in e) "string" == typeof i && void 0 === s[i] && (s[i.replace(R, E)] = e[i]); return V || (s.opacity = G(t)), n = Ut(t, e, !1), s.rotation = n.rotation, s.skewX = n.skewX, s.scaleX = n.scaleX, s.scaleY = n.scaleY, s.x = n.x, s.y = n.y, It && (s.z = n.z, s.rotationX = n.rotationX, s.rotationY = n.rotationY, s.scaleZ = n.scaleZ), s.filters && delete s.filters, s }, rt = function (t, e, i, n, r) { var s, o, a, h = {}, l = t.style; for (o in i) "cssText" !== o && "length" !== o && isNaN(o) && (e[o] !== (s = i[o]) || r && r[o]) && -1 === o.indexOf("Origin") && ("number" != typeof s && "string" != typeof s || (h[o] = "auto" !== s || "left" !== o && "top" !== o ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof e[o] || "" === e[o].replace(w, "") ? s : 0 : it(t, o), void 0 !== l[o] && (a = new yt(l, o, l[o], a)))); if (n) for (o in n) "className" !== o && (h[o] = n[o]); return { difs: h, firstMPT: a } }, st = { width: ["Left", "Right"], height: ["Top", "Bottom"] }, ot = ["marginLeft", "marginRight", "marginTop", "marginBottom"], at = function (t, e, i) { if ("svg" === (t.nodeName + "").toLowerCase()) return (i || K(t))[e] || 0; if (t.getCTM && Wt(t)) return t.getBBox()[e] || 0; var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight), r = st[e], s = r.length; for (i = i || K(t, null); --s > -1;)n -= parseFloat(tt(t, "padding" + r[s], i, !0)) || 0, n -= parseFloat(tt(t, "border" + r[s] + "Width", i, !0)) || 0; return n }, ht = function (t, e) { if ("contain" === t || "auto" === t || "auto auto" === t) return t + " "; null != t && "" !== t || (t = "0 0"); var i, n = t.split(" "), r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : n[0], s = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : n[1]; if (n.length > 3 && !e) { for (n = t.split(", ").join(",").split(","), t = [], i = 0; i < n.length; i++)t.push(ht(n[i])); return t.join(",") } return null == s ? s = "center" === r ? "50%" : "0" : "center" === s && (s = "50%"), ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), t = r + " " + s + (n.length > 2 ? " " + n[2] : ""), e && (e.oxp = -1 !== r.indexOf("%"), e.oyp = -1 !== s.indexOf("%"), e.oxr = "=" === r.charAt(1), e.oyr = "=" === s.charAt(1), e.ox = parseFloat(r.replace(w, "")), e.oy = parseFloat(s.replace(w, "")), e.v = t), e || t }, lt = function (t, e) { return "function" == typeof t && (t = t(v, g)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0 }, ut = function (t, e) { return "function" == typeof t && (t = t(v, g)), null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0 }, ct = function (t, e, i, n) { var r, s, o, a, h; return "function" == typeof t && (t = t(v, g)), null == t ? a = e : "number" == typeof t ? a = t : (r = 360, s = t.split("_"), h = "=" === t.charAt(1), o = (h ? parseInt(t.charAt(0) + "1", 10) * parseFloat(s[0].substr(2)) : parseFloat(s[0])) * (-1 === t.indexOf("rad") ? 1 : j) - (h ? 0 : e), s.length && (n && (n[i] = e + o), -1 !== t.indexOf("short") && (o %= r) !== o % (r / 2) && (o = o < 0 ? o + r : o - r), -1 !== t.indexOf("_cw") && o < 0 ? o = (o + 9999999999 * r) % r - (o / r | 0) * r : -1 !== t.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * r) % r - (o / r | 0) * r)), a = e + o), a < 1e-6 && a > -1e-6 && (a = 0), a }, ft = { aqua: [0, 255, 255], lime: [0, 255, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, 255], navy: [0, 0, 128], white: [255, 255, 255], fuchsia: [255, 0, 255], olive: [128, 128, 0], yellow: [255, 255, 0], orange: [255, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [255, 0, 0], pink: [255, 192, 203], cyan: [0, 255, 255], transparent: [255, 255, 255, 0] }, pt = function (t, e, i) { return t = t < 0 ? t + 1 : t > 1 ? t - 1 : t, 255 * (6 * t < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0 }, dt = a.parseColor = function (t, e) { var i, n, r, s, o, a, h, l, u, c, f; if (t) if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t]; else { if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ft[t]) i = ft[t]; else if ("#" === t.charAt(0)) 4 === t.length && (n = t.charAt(1), r = t.charAt(2), s = t.charAt(3), t = "#" + n + n + r + r + s + s), t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & 255, 255 & t]; else if ("hsl" === t.substr(0, 3)) if (i = f = t.match(y), e) { if (-1 !== t.indexOf("=")) return t.match(x) } else o = Number(i[0]) % 360 / 360, a = Number(i[1]) / 100, h = Number(i[2]) / 100, r = h <= .5 ? h * (a + 1) : h + a - h * a, n = 2 * h - r, i.length > 3 && (i[3] = Number(i[3])), i[0] = pt(o + 1 / 3, n, r), i[1] = pt(o, n, r), i[2] = pt(o - 1 / 3, n, r); else i = t.match(y) || ft.transparent; i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3])) } else i = ft.black; return e && !f && (n = i[0] / 255, r = i[1] / 255, s = i[2] / 255, l = Math.max(n, r, s), u = Math.min(n, r, s), h = (l + u) / 2, l === u ? o = a = 0 : (c = l - u, a = h > .5 ? c / (2 - l - u) : c / (l + u), o = l === n ? (r - s) / c + (r < s ? 6 : 0) : l === r ? (s - n) / c + 2 : (n - r) / c + 4, o *= 60), i[0] = o + .5 | 0, i[1] = 100 * a + .5 | 0, i[2] = 100 * h + .5 | 0), i }, _t = function (t, e) { var i, n, r, s = t.match(mt) || [], o = 0, a = ""; if (!s.length) return t; for (i = 0; i < s.length; i++)n = s[i], r = t.substr(o, t.indexOf(n, o) - o), o += r.length + n.length, n = dt(n, e), 3 === n.length && n.push(1), a += r + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")"; return a + t.substr(o) }, mt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b"; for (u in ft) mt += "|" + u + "\\b"; mt = new RegExp(mt + ")", "gi"), a.colorStringFilter = function (t) { var e, i = t[0] + " " + t[1]; mt.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = _t(t[0], e), t[1] = _t(t[1], e)), mt.lastIndex = 0 }, e.defaultStringFilter || (e.defaultStringFilter = a.colorStringFilter); var gt = function (t, e, i, n) { if (null == t) return function (t) { return t }; var r, s = e ? (t.match(mt) || [""])[0] : "", o = t.split(s).join("").match(T) || [], a = t.substr(0, t.indexOf(o[0])), h = ")" === t.charAt(t.length - 1) ? ")" : "", l = -1 !== t.indexOf(" ") ? " " : ",", u = o.length, c = u > 0 ? o[0].replace(y, "") : ""; return u ? r = e ? function (t) { var e, f, p, d; if ("number" == typeof t) t += c; else if (n && z.test(t)) { for (d = t.replace(z, "|").split("|"), p = 0; p < d.length; p++)d[p] = r(d[p]); return d.join(",") } if (e = (t.match(mt) || [s])[0], f = t.split(e).join("").match(T) || [], p = f.length, u > p--) for (; ++p < u;)f[p] = i ? f[(p - 1) / 2 | 0] : o[p]; return a + f.join(l) + l + e + h + (-1 !== t.indexOf("inset") ? " inset" : "") } : function (t) { var e, s, f; if ("number" == typeof t) t += c; else if (n && z.test(t)) { for (s = t.replace(z, "|").split("|"), f = 0; f < s.length; f++)s[f] = r(s[f]); return s.join(",") } if (e = t.match(T) || [], f = e.length, u > f--) for (; ++f < u;)e[f] = i ? e[(f - 1) / 2 | 0] : o[f]; return a + e.join(l) + h } : function (t) { return t } }, vt = function (t) { return t = t.split(","), function (e, i, n, r, s, o, a) { var h, l = (i + "").split(" "); for (a = {}, h = 0; h < 4; h++)a[t[h]] = l[h] = l[h] || l[(h - 1) / 2 >> 0]; return r.parse(e, a, s, o) } }, yt = (q._setPluginRatio = function (t) { this.plugin.setRatio(t); for (var e, i, n, r, s, o = this.data, a = o.proxy, h = o.firstMPT; h;)e = a[h.v], h.r ? e = Math.round(e) : e < 1e-6 && e > -1e-6 && (e = 0), h.t[h.p] = e, h = h._next; if (o.autoRotate && (o.autoRotate.rotation = o.mod ? o.mod(a.rotation, this.t) : a.rotation), 1 === t || 0 === t) for (h = o.firstMPT, s = 1 === t ? "e" : "b"; h;) { if (i = h.t, i.type) { if (1 === i.type) { for (r = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++)r += i["xn" + n] + i["xs" + (n + 1)]; i[s] = r } } else i[s] = i.s + i.xs0; h = h._next } }, function (t, e, i, n, r) { this.t = t, this.p = e, this.v = i, this.r = r, n && (n._prev = this, this._next = n) }), xt = (q._parseToProxy = function (t, e, i, n, r, s) { var o, a, h, l, u, c = n, f = {}, p = {}, d = i._transform, _ = B; for (i._transform = null, B = e, n = u = i.parse(t, e, n, r), B = _, s && (i._transform = d, c && (c._prev = null, c._prev && (c._prev._next = null))); n && n !== c;) { if (n.type <= 1 && (a = n.p, p[a] = n.s + n.c, f[a] = n.s, s || (l = new yt(n, "s", a, l, n.r), n.c = 0), 1 === n.type)) for (o = n.l; --o > 0;)h = "xn" + o, a = n.p + "_" + h, p[a] = n.data[h], f[a] = n[h], s || (l = new yt(n, h, a, l, n.rxp[h])); n = n._next } return { proxy: f, end: p, firstMPT: l, pt: u } }, q.CSSPropTween = function (t, e, n, r, s, a, h, l, u, c, f) { this.t = t, this.p = e, this.s = n, this.c = r, this.n = h || e, t instanceof xt || o.push(this.n), this.r = l, this.type = a || 0, u && (this.pr = u, i = !0), this.b = void 0 === c ? n : c, this.e = void 0 === f ? n + r : f, s && (this._next = s, s._prev = this) }), Tt = function (t, e, i, n, r, s) { var o = new xt(t, e, i, n - i, r, -1, s); return o.b = i, o.e = o.xs0 = n, o }, wt = a.parseComplex = function (t, e, i, n, r, s, o, h, l, u) { i = i || s || "", "function" == typeof n && (n = n(v, g)), o = new xt(t, e, 0, 0, o, u ? 2 : 1, null, !1, h, i, n), n += "", r && mt.test(n + i) && (n = [i, n], a.colorStringFilter(n), i = n[0], n = n[1]); var f, p, d, _, m, T, w, b, P, S, O, k, C, R = i.split(", ").join(",").split(" "), A = n.split(", ").join(",").split(" "), E = R.length, I = !1 !== c; for (-1 === n.indexOf(",") && -1 === i.indexOf(",") || (-1 !== (n + i).indexOf("rgb") || -1 !== (n + i).indexOf("hsl") ? (R = R.join(" ").replace(z, ", ").split(" "), A = A.join(" ").replace(z, ", ").split(" ")) : (R = R.join(" ").split(",").join(", ").split(" "), A = A.join(" ").split(",").join(", ").split(" ")), E = R.length), E !== A.length && (R = (s || "").split(" "), E = R.length), o.plugin = l, o.setRatio = u, mt.lastIndex = 0, f = 0; f < E; f++)if (_ = R[f], m = A[f], (b = parseFloat(_)) || 0 === b) o.appendXtra("", b, lt(m, b), m.replace(x, ""), I && -1 !== m.indexOf("px"), !0); else if (r && mt.test(_)) k = m.indexOf(")") + 1, k = ")" + (k ? m.substr(k) : ""), C = -1 !== m.indexOf("hsl") && V, S = m, _ = dt(_, C), m = dt(m, C), P = _.length + m.length > 6, P && !V && 0 === m[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split(A[f]).join("transparent")) : (V || (P = !1), C ? o.appendXtra(S.substr(0, S.indexOf("hsl")) + (P ? "hsla(" : "hsl("), _[0], lt(m[0], _[0]), ",", !1, !0).appendXtra("", _[1], lt(m[1], _[1]), "%,", !1).appendXtra("", _[2], lt(m[2], _[2]), P ? "%," : "%" + k, !1) : o.appendXtra(S.substr(0, S.indexOf("rgb")) + (P ? "rgba(" : "rgb("), _[0], m[0] - _[0], ",", !0, !0).appendXtra("", _[1], m[1] - _[1], ",", !0).appendXtra("", _[2], m[2] - _[2], P ? "," : k, !0), P && (_ = _.length < 4 ? 1 : _[3], o.appendXtra("", _, (m.length < 4 ? 1 : m[3]) - _, k, !1))), mt.lastIndex = 0; else if (T = _.match(y)) { if (!(w = m.match(x)) || w.length !== T.length) return o; for (d = 0, p = 0; p < T.length; p++)O = T[p], S = _.indexOf(O, d), o.appendXtra(_.substr(d, S - d), Number(O), lt(w[p], O), "", I && "px" === _.substr(S + O.length, 2), 0 === p), d = S + O.length; o["xs" + o.l] += _.substr(d) } else o["xs" + o.l] += o.l || o["xs" + o.l] ? " " + m : m; if (-1 !== n.indexOf("=") && o.data) { for (k = o.xs0 + o.data.s, f = 1; f < o.l; f++)k += o["xs" + f] + o.data["xn" + f]; o.e = k + o["xs" + f] } return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o }, bt = 9; for (u = xt.prototype, u.l = u.pr = 0; --bt > 0;)u["xn" + bt] = 0, u["xs" + bt] = ""; u.xs0 = "", u._next = u._prev = u.xfirst = u.data = u.plugin = u.setRatio = u.rxp = null, u.appendXtra = function (t, e, i, n, r, s) { var o = this, a = o.l; return o["xs" + a] += s && (a || o["xs" + a]) ? " " + t : t || "", i || 0 === a || o.plugin ? (o.l++, o.type = o.setRatio ? 2 : 1, o["xs" + o.l] = n || "", a > 0 ? (o.data["xn" + a] = e + i, o.rxp["xn" + a] = r, o["xn" + a] = e, o.plugin || (o.xfirst = new xt(o, "xn" + a, e, i, o.xfirst || o, 0, o.n, r, o.pr), o.xfirst.xs0 = 0), o) : (o.data = { s: e + i }, o.rxp = {}, o.s = e, o.c = i, o.r = r, o)) : (o["xs" + a] += e + (n || ""), o) }; var Pt = function (t, e) { e = e || {}, this.p = e.prefix ? J(t) || t : t, l[t] = l[this.p] = this, this.format = e.formatter || gt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0 }, St = q._registerComplexSpecialProp = function (t, e, i) { "object" != typeof e && (e = { parser: i }); var n, r = t.split(","), s = e.defaultValue; for (i = i || [s], n = 0; n < r.length; n++)e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || s, new Pt(r[n], e) }, Ot = q._registerPluginProp = function (t) { if (!l[t]) { var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin"; St(t, { parser: function (t, i, n, r, s, o, a) { var u = h.com.greensock.plugins[e]; return u ? (u._cssRegister(), l[n].parse(t, i, n, r, s, o, a)) : (Q("Error: " + e + " js file not loaded."), s) } }) } }; u = Pt.prototype, u.parseComplex = function (t, e, i, n, r, s) { var o, a, h, l, u, c, f = this.keyword; if (this.multi && (z.test(i) || z.test(e) ? (a = e.replace(z, "|").split("|"), h = i.replace(z, "|").split("|")) : f && (a = [e], h = [i])), h) { for (l = h.length > a.length ? h.length : a.length, o = 0; o < l; o++)e = a[o] = a[o] || this.dflt, i = h[o] = h[o] || this.dflt, f && (u = e.indexOf(f), c = i.indexOf(f), u !== c && (-1 === c ? a[o] = a[o].split(f).join("") : -1 === u && (a[o] += " " + f))); e = a.join(", "), i = h.join(", ") } return wt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, s) }, u.parse = function (t, e, i, n, s, o, a) { return this.parseComplex(t.style, this.format(tt(t, this.p, r, !1, this.dflt)), this.format(e), s, o) }, a.registerSpecialProp = function (t, e, i) { St(t, { parser: function (t, n, r, s, o, a, h) { var l = new xt(t, r, 0, 0, o, 2, r, !1, i); return l.plugin = a, l.setRatio = e(t, n, s._tween, r), l }, priority: i }) }, a.useSVGTransformAttr = !0; var kt, Ct = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","), Rt = J("transform"), At = $ + "transform", Et = J("transformOrigin"), It = null !== J("perspective"), Mt = q.Transform = function () { this.perspective = parseFloat(a.defaultTransformPerspective) || 0, this.force3D = !(!1 === a.defaultForce3D || !It) && (a.defaultForce3D || "auto") }, Lt = s.SVGElement, zt = function (t, e, i) { var n, r = W.createElementNS("http://www.w3.org/2000/svg", t), s = /([a-z])([A-Z])/g; for (n in i) r.setAttributeNS(null, n.replace(s, "$1-$2").toLowerCase(), i[n]); return e.appendChild(r), r }, Dt = W.documentElement || {}, Ft = function () { var t, e, i, n = m || /Android/i.test(H) && !s.chrome; return W.createElementNS && !n && (t = zt("svg", Dt), e = zt("rect", t, { width: 100, height: 50, x: 100 }), i = e.getBoundingClientRect().width, e.style[Et] = "50% 50%", e.style[Rt] = "scaleX(0.5)", n = i === e.getBoundingClientRect().width && !(d && It), Dt.removeChild(t)), n }(), jt = function (t, e, i, n, r, s) { var o, h, l, u, c, f, p, d, _, m, g, v, y, x, T = t._gsTransform, w = Yt(t, !0); T && (y = T.xOrigin, x = T.yOrigin), (!n || (o = n.split(" ")).length < 2) && (p = t.getBBox(), 0 === p.x && 0 === p.y && p.width + p.height === 0 && (p = { x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0, y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0, width: 0, height: 0 }), e = ht(e).split(" "), o = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * p.width : parseFloat(e[0])) + p.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * p.height : parseFloat(e[1])) + p.y]), i.xOrigin = u = parseFloat(o[0]), i.yOrigin = c = parseFloat(o[1]), n && w !== Xt && (f = w[0], p = w[1], d = w[2], _ = w[3], m = w[4], g = w[5], (v = f * _ - p * d) && (h = u * (_ / v) + c * (-d / v) + (d * g - _ * m) / v, l = u * (-p / v) + c * (f / v) - (f * g - p * m) / v, u = i.xOrigin = o[0] = h, c = i.yOrigin = o[1] = l)), T && (s && (i.xOffset = T.xOffset, i.yOffset = T.yOffset, T = i), r || !1 !== r && !1 !== a.defaultSmoothOrigin ? (h = u - y, l = c - x, T.xOffset += h * w[0] + l * w[2] - h, T.yOffset += h * w[1] + l * w[3] - l) : T.xOffset = T.yOffset = 0), s || t.setAttribute("data-svg-origin", o.join(" ")) }, Bt = function (t) { var e, i = X("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), n = this.parentNode, r = this.nextSibling, s = this.style.cssText; if (Dt.appendChild(i), i.appendChild(this), this.style.display = "block", t) try { e = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Bt } catch (t) { } else this._originalGetBBox && (e = this._originalGetBBox()); return r ? n.insertBefore(this, r) : n.appendChild(this), Dt.removeChild(i), this.style.cssText = s, e }, Nt = function (t) { try { return t.getBBox() } catch (e) { return Bt.call(t, !0) } }, Wt = function (t) { return !(!Lt || !t.getCTM || t.parentNode && !t.ownerSVGElement || !Nt(t)) }, Xt = [1, 0, 0, 1, 0, 0], Yt = function (t, e) { var i, n, r, s, o, a, h = t._gsTransform || new Mt, l = t.style; if (Rt ? n = tt(t, At, null, !0) : t.currentStyle && (n = t.currentStyle.filter.match(M), n = n && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), h.x || 0, h.y || 0].join(",") : ""), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, !Rt || !(a = !K(t) || "none" === K(t).display) && t.parentNode || (a && (s = l.display, l.display = "block"), t.parentNode || (o = 1, Dt.appendChild(t)), n = tt(t, At, null, !0), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, s ? l.display = s : a && Gt(l, "display"), o && Dt.removeChild(t)), (h.svg || t.getCTM && Wt(t)) && (i && -1 !== (l[Rt] + "").indexOf("matrix") && (n = l[Rt], i = 0), r = t.getAttribute("transform"), i && r && (r = t.transform.baseVal.consolidate().matrix, n = "matrix(" + r.a + "," + r.b + "," + r.c + "," + r.d + "," + r.e + "," + r.f + ")", i = 0)), i) return Xt; for (r = (n || "").match(y) || [], bt = r.length; --bt > -1;)s = Number(r[bt]), r[bt] = (o = s - (s |= 0)) ? (1e5 * o + (o < 0 ? -.5 : .5) | 0) / 1e5 + s : s; return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r }, Ut = q.getTransform = function (t, i, n, r) { if (t._gsTransform && n && !r) return t._gsTransform; var s, o, h, l, u, c, f = n ? t._gsTransform || new Mt : new Mt, p = f.scaleX < 0, d = It ? parseFloat(tt(t, Et, i, !1, "0 0 0").split(" ")[2]) || f.zOrigin || 0 : 0, _ = parseFloat(a.defaultTransformPerspective) || 0; if (f.svg = !(!t.getCTM || !Wt(t)), f.svg && (jt(t, tt(t, Et, i, !1, "50% 50%") + "", f, t.getAttribute("data-svg-origin")), kt = a.useSVGTransformAttr || Ft), (s = Yt(t)) !== Xt) { if (16 === s.length) { var m, g, v, y, x, T = s[0], w = s[1], b = s[2], P = s[3], S = s[4], O = s[5], k = s[6], C = s[7], R = s[8], A = s[9], E = s[10], I = s[12], M = s[13], L = s[14], z = s[11], D = Math.atan2(k, E); f.zOrigin && (L = -f.zOrigin, I = R * L - s[12], M = A * L - s[13], L = E * L + f.zOrigin - s[14]), f.rotationX = D * j, D && (y = Math.cos(-D), x = Math.sin(-D), m = S * y + R * x, g = O * y + A * x, v = k * y + E * x, R = S * -x + R * y, A = O * -x + A * y, E = k * -x + E * y, z = C * -x + z * y, S = m, O = g, k = v), D = Math.atan2(-b, E), f.rotationY = D * j, D && (y = Math.cos(-D), x = Math.sin(-D), m = T * y - R * x, g = w * y - A * x, v = b * y - E * x, A = w * x + A * y, E = b * x + E * y, z = P * x + z * y, T = m, w = g, b = v), D = Math.atan2(w, T), f.rotation = D * j, D && (y = Math.cos(D), x = Math.sin(D), m = T * y + w * x, g = S * y + O * x, v = R * y + A * x, w = w * y - T * x, O = O * y - S * x, A = A * y - R * x, T = m, S = g, R = v), f.rotationX && Math.abs(f.rotationX) + Math.abs(f.rotation) > 359.9 && (f.rotationX = f.rotation = 0, f.rotationY = 180 - f.rotationY), D = Math.atan2(S, O), f.scaleX = (1e5 * Math.sqrt(T * T + w * w + b * b) + .5 | 0) / 1e5, f.scaleY = (1e5 * Math.sqrt(O * O + k * k) + .5 | 0) / 1e5, f.scaleZ = (1e5 * Math.sqrt(R * R + A * A + E * E) + .5 | 0) / 1e5, T /= f.scaleX, S /= f.scaleY, w /= f.scaleX, O /= f.scaleY, Math.abs(D) > 2e-5 ? (f.skewX = D * j, S = 0, "simple" !== f.skewType && (f.scaleY *= 1 / Math.cos(D))) : f.skewX = 0, f.perspective = z ? 1 / (z < 0 ? -z : z) : 0, f.x = I, f.y = M, f.z = L, f.svg && (f.x -= f.xOrigin - (f.xOrigin * T - f.yOrigin * S), f.y -= f.yOrigin - (f.yOrigin * w - f.xOrigin * O)) } else if (!It || r || !s.length || f.x !== s[4] || f.y !== s[5] || !f.rotationX && !f.rotationY) { var F = s.length >= 6, B = F ? s[0] : 1, N = s[1] || 0, W = s[2] || 0, X = F ? s[3] : 1; f.x = s[4] || 0, f.y = s[5] || 0, h = Math.sqrt(B * B + N * N), l = Math.sqrt(X * X + W * W), u = B || N ? Math.atan2(N, B) * j : f.rotation || 0, c = W || X ? Math.atan2(W, X) * j + u : f.skewX || 0, f.scaleX = h, f.scaleY = l, f.rotation = u, f.skewX = c, It && (f.rotationX = f.rotationY = f.z = 0, f.perspective = _, f.scaleZ = 1), f.svg && (f.x -= f.xOrigin - (f.xOrigin * B + f.yOrigin * W), f.y -= f.yOrigin - (f.xOrigin * N + f.yOrigin * X)) } Math.abs(f.skewX) > 90 && Math.abs(f.skewX) < 270 && (p ? (f.scaleX *= -1, f.skewX += f.rotation <= 0 ? 180 : -180, f.rotation += f.rotation <= 0 ? 180 : -180) : (f.scaleY *= -1, f.skewX += f.skewX <= 0 ? 180 : -180)), f.zOrigin = d; for (o in f) f[o] < 2e-5 && f[o] > -2e-5 && (f[o] = 0) } return n && (t._gsTransform = f, f.svg && (kt && t.style[Rt] ? e.delayedCall(.001, function () { Gt(t.style, Rt) }) : !kt && t.getAttribute("transform") && e.delayedCall(.001, function () { t.removeAttribute("transform") }))), f }, qt = function (t) { var e, i, n = this.data, r = -n.rotation * F, s = r + n.skewX * F, o = (Math.cos(r) * n.scaleX * 1e5 | 0) / 1e5, a = (Math.sin(r) * n.scaleX * 1e5 | 0) / 1e5, h = (Math.sin(s) * -n.scaleY * 1e5 | 0) / 1e5, l = (Math.cos(s) * n.scaleY * 1e5 | 0) / 1e5, u = this.t.style, c = this.t.currentStyle; if (c) { i = a, a = -h, h = -i, e = c.filter, u.filter = ""; var f, p, d = this.t.offsetWidth, _ = this.t.offsetHeight, g = "absolute" !== c.position, v = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + a + ", M21=" + h + ", M22=" + l, y = n.x + d * n.xPercent / 100, x = n.y + _ * n.yPercent / 100; if (null != n.ox && (f = (n.oxp ? d * n.ox * .01 : n.ox) - d / 2, p = (n.oyp ? _ * n.oy * .01 : n.oy) - _ / 2, y += f - (f * o + p * a), x += p - (f * h + p * l)), g ? (f = d / 2, p = _ / 2, v += ", Dx=" + (f - (f * o + p * a) + y) + ", Dy=" + (p - (f * h + p * l) + x) + ")") : v += ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? u.filter = e.replace(L, v) : u.filter = v + " " + e, 0 !== t && 1 !== t || 1 === o && 0 === a && 0 === h && 1 === l && (g && -1 === v.indexOf("Dx=0, Dy=0") || P.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && u.removeAttribute("filter")), !g) { var T, w, S, O = m < 8 ? 1 : -1; for (f = n.ieOffsetX || 0, p = n.ieOffsetY || 0, n.ieOffsetX = Math.round((d - ((o < 0 ? -o : o) * d + (a < 0 ? -a : a) * _)) / 2 + y), n.ieOffsetY = Math.round((_ - ((l < 0 ? -l : l) * _ + (h < 0 ? -h : h) * d)) / 2 + x), bt = 0; bt < 4; bt++)w = ot[bt], T = c[w], i = -1 !== T.indexOf("px") ? parseFloat(T) : et(this.t, w, parseFloat(T), T.replace(b, "")) || 0, S = i !== n[w] ? bt < 2 ? -n.ieOffsetX : -n.ieOffsetY : bt < 2 ? f - n.ieOffsetX : p - n.ieOffsetY, u[w] = (n[w] = Math.round(i - S * (0 === bt || 2 === bt ? 1 : O))) + "px" } } }, Ht = q.set3DTransformRatio = q.setTransformRatio = function (t) { var e, i, n, r, s, o, a, h, l, u, c, f, p, _, m, g, v, y, x, T, w, b, P, S = this.data, O = this.t.style, k = S.rotation, C = S.rotationX, R = S.rotationY, A = S.scaleX, E = S.scaleY, I = S.scaleZ, M = S.x, L = S.y, z = S.z, D = S.svg, j = S.perspective, B = S.force3D, N = S.skewY, W = S.skewX; if (N && (W += N, k += N), ((1 === t || 0 === t) && "auto" === B && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !B) && !z && !j && !R && !C && 1 === I || kt && D || !It) return void (k || W || D ? (k *= F, b = W * F, P = 1e5, i = Math.cos(k) * A, s = Math.sin(k) * A, n = Math.sin(k - b) * -E, o = Math.cos(k - b) * E, b && "simple" === S.skewType && (e = Math.tan(b - N * F), e = Math.sqrt(1 + e * e), n *= e, o *= e, N && (e = Math.tan(N * F), e = Math.sqrt(1 + e * e), i *= e, s *= e)), D && (M += S.xOrigin - (S.xOrigin * i + S.yOrigin * n) + S.xOffset, L += S.yOrigin - (S.xOrigin * s + S.yOrigin * o) + S.yOffset, kt && (S.xPercent || S.yPercent) && (m = this.t.getBBox(), M += .01 * S.xPercent * m.width, L += .01 * S.yPercent * m.height), m = 1e-6, M < m && M > -m && (M = 0), L < m && L > -m && (L = 0)), x = (i * P | 0) / P + "," + (s * P | 0) / P + "," + (n * P | 0) / P + "," + (o * P | 0) / P + "," + M + "," + L + ")", D && kt ? this.t.setAttribute("transform", "matrix(" + x) : O[Rt] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + x) : O[Rt] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix(" : "matrix(") + A + ",0,0," + E + "," + M + "," + L + ")"); if (d && (m = 1e-4, A < m && A > -m && (A = I = 2e-5), E < m && E > -m && (E = I = 2e-5), !j || S.z || S.rotationX || S.rotationY || (j = 0)), k || W) k *= F, g = i = Math.cos(k), v = s = Math.sin(k), W && (k -= W * F, g = Math.cos(k), v = Math.sin(k), "simple" === S.skewType && (e = Math.tan((W - N) * F), e = Math.sqrt(1 + e * e), g *= e, v *= e, S.skewY && (e = Math.tan(N * F), e = Math.sqrt(1 + e * e), i *= e, s *= e))), n = -v, o = g; else { if (!(R || C || 1 !== I || j || D)) return void (O[Rt] = (S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) translate3d(" : "translate3d(") + M + "px," + L + "px," + z + "px)" + (1 !== A || 1 !== E ? " scale(" + A + "," + E + ")" : "")); i = o = 1, n = s = 0 } u = 1, r = a = h = l = c = f = 0, p = j ? -1 / j : 0, _ = S.zOrigin, m = 1e-6, T = ",", w = "0", k = R * F, k && (g = Math.cos(k), v = Math.sin(k), h = -v, c = p * -v, r = i * v, a = s * v, u = g, p *= g, i *= g, s *= g), k = C * F, k && (g = Math.cos(k), v = Math.sin(k), e = n * g + r * v, y = o * g + a * v, l = u * v, f = p * v, r = n * -v + r * g, a = o * -v + a * g, u *= g, p *= g, n = e, o = y), 1 !== I && (r *= I, a *= I, u *= I, p *= I), 1 !== E && (n *= E, o *= E, l *= E, f *= E), 1 !== A && (i *= A, s *= A, h *= A, c *= A), (_ || D) && (_ && (M += r * -_, L += a * -_, z += u * -_ + _), D && (M += S.xOrigin - (S.xOrigin * i + S.yOrigin * n) + S.xOffset, L += S.yOrigin - (S.xOrigin * s + S.yOrigin * o) + S.yOffset), M < m && M > -m && (M = w), L < m && L > -m && (L = w), z < m && z > -m && (z = 0)), x = S.xPercent || S.yPercent ? "translate(" + S.xPercent + "%," + S.yPercent + "%) matrix3d(" : "matrix3d(", x += (i < m && i > -m ? w : i) + T + (s < m && s > -m ? w : s) + T + (h < m && h > -m ? w : h), x += T + (c < m && c > -m ? w : c) + T + (n < m && n > -m ? w : n) + T + (o < m && o > -m ? w : o), C || R || 1 !== I ? (x += T + (l < m && l > -m ? w : l) + T + (f < m && f > -m ? w : f) + T + (r < m && r > -m ? w : r), x += T + (a < m && a > -m ? w : a) + T + (u < m && u > -m ? w : u) + T + (p < m && p > -m ? w : p) + T) : x += ",0,0,0,0,1,0,", x += M + T + L + T + z + T + (j ? 1 + -z / j : 1) + ")", O[Rt] = x }; u = Mt.prototype, u.x = u.y = u.z = u.skewX = u.skewY = u.rotation = u.rotationX = u.rotationY = u.zOrigin = u.xPercent = u.yPercent = u.xOffset = u.yOffset = 0, u.scaleX = u.scaleY = u.scaleZ = 1, St("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", { parser: function (t, e, i, n, s, o, h) { if (n._lastParsedTransform === h) return s; n._lastParsedTransform = h; var l, u = h.scale && "function" == typeof h.scale ? h.scale : 0; "function" == typeof h[i] && (l = h[i], h[i] = e), u && (h.scale = u(v, t)); var c, f, p, d, _, m, y, x, T, w = t._gsTransform, b = t.style, P = Ct.length, S = h, O = {}, k = Ut(t, r, !0, S.parseTransform), C = S.transform && ("function" == typeof S.transform ? S.transform(v, g) : S.transform); if (k.skewType = S.skewType || k.skewType || a.defaultSkewType, n._transform = k, C && "string" == typeof C && Rt) f = Y.style, f[Rt] = C, f.display = "block", f.position = "absolute", W.body.appendChild(Y), c = Ut(Y, null, !1), "simple" === k.skewType && (c.scaleY *= Math.cos(c.skewX * F)), k.svg && (m = k.xOrigin, y = k.yOrigin, c.x -= k.xOffset, c.y -= k.yOffset, (S.transformOrigin || S.svgOrigin) && (C = {}, jt(t, ht(S.transformOrigin), C, S.svgOrigin, S.smoothOrigin, !0), m = C.xOrigin, y = C.yOrigin, c.x -= C.xOffset - k.xOffset, c.y -= C.yOffset - k.yOffset), (m || y) && (x = Yt(Y, !0), c.x -= m - (m * x[0] + y * x[2]), c.y -= y - (m * x[1] + y * x[3]))), W.body.removeChild(Y), c.perspective || (c.perspective = k.perspective), null != S.xPercent && (c.xPercent = ut(S.xPercent, k.xPercent)), null != S.yPercent && (c.yPercent = ut(S.yPercent, k.yPercent)); else if ("object" == typeof S) { if (c = { scaleX: ut(null != S.scaleX ? S.scaleX : S.scale, k.scaleX), scaleY: ut(null != S.scaleY ? S.scaleY : S.scale, k.scaleY), scaleZ: ut(S.scaleZ, k.scaleZ), x: ut(S.x, k.x), y: ut(S.y, k.y), z: ut(S.z, k.z), xPercent: ut(S.xPercent, k.xPercent), yPercent: ut(S.yPercent, k.yPercent), perspective: ut(S.transformPerspective, k.perspective) }, null != (_ = S.directionalRotation)) if ("object" == typeof _) for (f in _) S[f] = _[f]; else S.rotation = _; "string" == typeof S.x && -1 !== S.x.indexOf("%") && (c.x = 0, c.xPercent = ut(S.x, k.xPercent)), "string" == typeof S.y && -1 !== S.y.indexOf("%") && (c.y = 0, c.yPercent = ut(S.y, k.yPercent)), c.rotation = ct("rotation" in S ? S.rotation : "shortRotation" in S ? S.shortRotation + "_short" : "rotationZ" in S ? S.rotationZ : k.rotation, k.rotation, "rotation", O), It && (c.rotationX = ct("rotationX" in S ? S.rotationX : "shortRotationX" in S ? S.shortRotationX + "_short" : k.rotationX || 0, k.rotationX, "rotationX", O), c.rotationY = ct("rotationY" in S ? S.rotationY : "shortRotationY" in S ? S.shortRotationY + "_short" : k.rotationY || 0, k.rotationY, "rotationY", O)), c.skewX = ct(S.skewX, k.skewX), c.skewY = ct(S.skewY, k.skewY) } for (It && null != S.force3D && (k.force3D = S.force3D, d = !0), p = k.force3D || k.z || k.rotationX || k.rotationY || c.z || c.rotationX || c.rotationY || c.perspective, p || null == S.scale || (c.scaleZ = 1); --P > -1;)T = Ct[P], ((C = c[T] - k[T]) > 1e-6 || C < -1e-6 || null != S[T] || null != B[T]) && (d = !0, s = new xt(k, T, k[T], C, s), T in O && (s.e = O[T]), s.xs0 = 0, s.plugin = o, n._overwriteProps.push(s.n)); return C = S.transformOrigin, k.svg && (C || S.svgOrigin) && (m = k.xOffset, y = k.yOffset, jt(t, ht(C), c, S.svgOrigin, S.smoothOrigin), s = Tt(k, "xOrigin", (w ? k : c).xOrigin, c.xOrigin, s, "transformOrigin"), s = Tt(k, "yOrigin", (w ? k : c).yOrigin, c.yOrigin, s, "transformOrigin"), m === k.xOffset && y === k.yOffset || (s = Tt(k, "xOffset", w ? m : k.xOffset, k.xOffset, s, "transformOrigin"), s = Tt(k, "yOffset", w ? y : k.yOffset, k.yOffset, s, "transformOrigin")), C = "0px 0px"), (C || It && p && k.zOrigin) && (Rt ? (d = !0, T = Et, C = (C || tt(t, T, r, !1, "50% 50%")) + "", s = new xt(b, T, 0, 0, s, -1, "transformOrigin"), s.b = b[T], s.plugin = o, It ? (f = k.zOrigin, C = C.split(" "), k.zOrigin = (C.length > 2 && (0 === f || "0px" !== C[2]) ? parseFloat(C[2]) : f) || 0, s.xs0 = s.e = C[0] + " " + (C[1] || "50%") + " 0px", s = new xt(k, "zOrigin", 0, 0, s, -1, s.n), s.b = f, s.xs0 = s.e = k.zOrigin) : s.xs0 = s.e = C) : ht(C + "", k)), d && (n._transformType = k.svg && kt || !p && 3 !== this._transformType ? 2 : 3), l && (h[i] = l), u && (h.scale = u), s }, prefix: !0 }), St("boxShadow", { defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0, multi: !0, keyword: "inset" }), St("borderRadius", { defaultValue: "0px", parser: function (t, e, i, s, o, a) { e = this.format(e); var h, l, u, c, f, p, d, _, m, g, v, y, x, T, w, b, P = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], S = t.style; for (m = parseFloat(t.offsetWidth), g = parseFloat(t.offsetHeight), h = e.split(" "), l = 0; l < P.length; l++)this.p.indexOf("border") && (P[l] = J(P[l])), f = c = tt(t, P[l], r, !1, "0px"), -1 !== f.indexOf(" ") && (c = f.split(" "), f = c[0], c = c[1]), p = u = h[l], d = parseFloat(f), y = f.substr((d + "").length), x = "=" === p.charAt(1), x ? (_ = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), _ *= parseFloat(p), v = p.substr((_ + "").length - (_ < 0 ? 1 : 0)) || "") : (_ = parseFloat(p), v = p.substr((_ + "").length)), "" === v && (v = n[i] || y), v !== y && (T = et(t, "borderLeft", d, y), w = et(t, "borderTop", d, y), "%" === v ? (f = T / m * 100 + "%", c = w / g * 100 + "%") : "em" === v ? (b = et(t, "borderLeft", 1, "em"), f = T / b + "em", c = w / b + "em") : (f = T + "px", c = w + "px"), x && (p = parseFloat(f) + _ + v, u = parseFloat(c) + _ + v)), o = wt(S, P[l], f + " " + c, p + " " + u, !1, "0px", o); return o }, prefix: !0, formatter: gt("0px 0px 0px 0px", !1, !0) }), St("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", { defaultValue: "0px", parser: function (t, e, i, n, s, o) { return wt(t.style, i, this.format(tt(t, i, r, !1, "0px 0px")), this.format(e), !1, "0px", s) }, prefix: !0, formatter: gt("0px 0px", !1, !0) }), St("backgroundPosition", { defaultValue: "0 0", parser: function (t, e, i, n, s, o) { var a, h, l, u, c, f, p = "background-position", d = r || K(t, null), _ = this.format((d ? m ? d.getPropertyValue(p + "-x") + " " + d.getPropertyValue(p + "-y") : d.getPropertyValue(p) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"), g = this.format(e); if (-1 !== _.indexOf("%") != (-1 !== g.indexOf("%")) && g.split(",").length < 2 && (f = tt(t, "backgroundImage").replace(A, "")) && "none" !== f) { for (a = _.split(" "), h = g.split(" "), U.setAttribute("src", f), l = 2; --l > -1;)_ = a[l], (u = -1 !== _.indexOf("%")) !== (-1 !== h[l].indexOf("%")) && (c = 0 === l ? t.offsetWidth - U.width : t.offsetHeight - U.height, a[l] = u ? parseFloat(_) / 100 * c + "px" : parseFloat(_) / c * 100 + "%"); _ = a.join(" ") } return this.parseComplex(t.style, _, g, s, o) }, formatter: ht }), St("backgroundSize", { defaultValue: "0 0", formatter: function (t) { return t += "", ht(-1 === t.indexOf(" ") ? t + " " + t : t) } }), St("perspective", { defaultValue: "0px", prefix: !0 }), St("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }), St("transformStyle", { prefix: !0 }), St("backfaceVisibility", { prefix: !0 }), St("userSelect", { prefix: !0 }), St("margin", { parser: vt("marginTop,marginRight,marginBottom,marginLeft") }), St("padding", { parser: vt("paddingTop,paddingRight,paddingBottom,paddingLeft") }), St("clip", { defaultValue: "rect(0px,0px,0px,0px)", parser: function (t, e, i, n, s, o) { var a, h, l; return m < 9 ? (h = t.currentStyle, l = m < 8 ? " " : ",", a = "rect(" + h.clipTop + l + h.clipRight + l + h.clipBottom + l + h.clipLeft + ")", e = this.format(e).split(",").join(l)) : (a = this.format(tt(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, s, o) } }), St("textShadow", { defaultValue: "0px 0px 0px #999", color: !0, multi: !0 }), St("autoRound,strictUnits", { parser: function (t, e, i, n, r) { return r } }), St("border", { defaultValue: "0px solid #000", parser: function (t, e, i, n, s, o) { var a = tt(t, "borderTopWidth", r, !1, "0px"), h = this.format(e).split(" "), l = h[0].replace(b, ""); return "px" !== l && (a = parseFloat(a) / et(t, "borderTopWidth", 1, l) + l), this.parseComplex(t.style, this.format(a + " " + tt(t, "borderTopStyle", r, !1, "solid") + " " + tt(t, "borderTopColor", r, !1, "#000")), h.join(" "), s, o) }, color: !0, formatter: function (t) { var e = t.split(" "); return e[0] + " " + (e[1] || "solid") + " " + (t.match(mt) || ["#000"])[0] } }), St("borderWidth", { parser: vt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth") }), St("float,cssFloat,styleFloat", { parser: function (t, e, i, n, r, s) { var o = t.style, a = "cssFloat" in o ? "cssFloat" : "styleFloat"; return new xt(o, a, 0, 0, r, -1, i, !1, 0, o[a], e) } }); var Vt = function (t) { var e, i = this.t, n = i.filter || tt(this.data, "filter") || "", r = this.s + this.c * t | 0; 100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !tt(this.data, "filter")) : (i.filter = n.replace(O, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), -1 === n.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(P, "opacity=" + r)) }; St("opacity,alpha,autoAlpha", { defaultValue: "1", parser: function (t, e, i, n, s, o) { var a = parseFloat(tt(t, "opacity", r, !1, "1")), h = t.style, l = "autoAlpha" === i; return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), l && 1 === a && "hidden" === tt(t, "visibility", r) && 0 !== e && (a = 0), V ? s = new xt(h, "opacity", a, e - a, s) : (s = new xt(h, "opacity", 100 * a, 100 * (e - a), s), s.xn1 = l ? 1 : 0, h.zoom = 1, s.type = 2, s.b = "alpha(opacity=" + s.s + ")", s.e = "alpha(opacity=" + (s.s + s.c) + ")", s.data = t, s.plugin = o, s.setRatio = Vt), l && (s = new xt(h, "visibility", 0, 0, s, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), s.xs0 = "inherit", n._overwriteProps.push(s.n), n._overwriteProps.push(i)), s } }); var Gt = function (t, e) { e && (t.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), t.removeProperty(e.replace(C, "-$1").toLowerCase())) : t.removeAttribute(e)) }, Qt = function (t) { if (this.t._gsClassPT = this, 1 === t || 0 === t) { this.t.setAttribute("class", 0 === t ? this.b : this.e); for (var e = this.data, i = this.t.style; e;)e.v ? i[e.p] = e.v : Gt(i, e.p), e = e._next; 1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null) } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e) }; St("className", { parser: function (t, e, n, s, o, a, h) { var l, u, c, f, p, d = t.getAttribute("class") || "", _ = t.style.cssText; if (o = s._classNamePT = new xt(t, n, 0, 0, o, 2), o.setRatio = Qt, o.pr = -11, i = !0, o.b = d, u = nt(t, r), c = t._gsClassPT) { for (f = {}, p = c.data; p;)f[p.p] = 1, p = p._next; c.setRatio(1) } return t._gsClassPT = o, o.e = "=" !== e.charAt(1) ? e : d.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", o.e), l = rt(t, u, nt(t), h, f), t.setAttribute("class", d), o.data = l.firstMPT, t.style.cssText = _, o = o.xfirst = s.parse(t, l.difs, o, a) } }); var $t = function (t) { if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) { var e, i, n, r, s, o = this.t.style, a = l.transform.parse; if ("all" === this.e) o.cssText = "", r = !0; else for (e = this.e.split(" ").join("").split(","), n = e.length; --n > -1;)i = e[n], l[i] && (l[i].parse === a ? r = !0 : i = "transformOrigin" === i ? Et : l[i].p), Gt(o, i); r && (Gt(o, Rt), (s = this.t._gsTransform) && (s.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform)) } }; for (St("clearProps", { parser: function (t, e, n, r, s) { return s = new xt(t, n, 0, 0, s, 2), s.setRatio = $t, s.e = e, s.pr = -10, s.data = r._tween, i = !0, s } }), u = "bezier,throwProps,physicsProps,physics2D".split(","), bt = u.length; bt--;)Ot(u[bt]); u = a.prototype, u._firstPT = u._lastParsedTransform = u._transform = null, u._onInitTween = function (t, e, s, h) { if (!t.nodeType) return !1; this._target = g = t, this._tween = s, this._vars = e, v = h, c = e.autoRound, i = !1, n = e.suffixMap || a.suffixMap, r = K(t, ""), o = this._overwriteProps; var u, d, m, y, x, T, w, b, P, O = t.style; if (f && "" === O.zIndex && ("auto" !== (u = tt(t, "zIndex", r)) && "" !== u || this._addLazySet(O, "zIndex", 0)), "string" == typeof e && (y = O.cssText, u = nt(t, r), O.cssText = y + ";" + e, u = rt(t, u, nt(t)).difs, !V && S.test(e) && (u.opacity = parseFloat(RegExp.$1)), e = u, O.cssText = y), e.className ? this._firstPT = d = l.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = d = this.parse(t, e, null), this._transformType) { for (P = 3 === this._transformType, Rt ? p && (f = !0, "" === O.zIndex && ("auto" !== (w = tt(t, "zIndex", r)) && "" !== w || this._addLazySet(O, "zIndex", 0)), _ && this._addLazySet(O, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (P ? "visible" : "hidden"))) : O.zoom = 1, m = d; m && m._next;)m = m._next; b = new xt(t, "transform", 0, 0, null, 2), this._linkCSSP(b, null, m), b.setRatio = Rt ? Ht : qt, b.data = this._transform || Ut(t, r, !0), b.tween = s, b.pr = -1, o.pop() } if (i) { for (; d;) { for (T = d._next, m = y; m && m.pr > d.pr;)m = m._next; (d._prev = m ? m._prev : x) ? d._prev._next = d : y = d, (d._next = m) ? m._prev = d : x = d, d = T } this._firstPT = y } return !0 }, u.parse = function (t, e, i, s) { var o, a, h, u, f, p, d, _, m, y, x = t.style; for (o in e) { if (p = e[o], "function" == typeof p && (p = p(v, g)), a = l[o]) i = a.parse(t, p, o, this, i, s, e); else { if ("--" === o.substr(0, 2)) { this._tween._propLookup[o] = this._addTween.call(this._tween, t.style, "setProperty", K(t).getPropertyValue(o) + "", p + "", o, !1, o); continue } f = tt(t, o, r) + "", m = "string" == typeof p, "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || m && k.test(p) ? (m || (p = dt(p), p = (p.length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), i = wt(x, o, f, p, !0, "transparent", i, 0, s)) : m && D.test(p) ? i = wt(x, o, f, p, !0, null, i, 0, s) : (h = parseFloat(f), d = h || 0 === h ? f.substr((h + "").length) : "", "" !== f && "auto" !== f || ("width" === o || "height" === o ? (h = at(t, o, r), d = "px") : "left" === o || "top" === o ? (h = it(t, o, r), d = "px") : (h = "opacity" !== o ? 0 : 1, d = "")), y = m && "=" === p.charAt(1), y ? (u = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), u *= parseFloat(p), _ = p.replace(b, "")) : (u = parseFloat(p), _ = m ? p.replace(b, "") : ""), "" === _ && (_ = o in n ? n[o] : d), p = u || 0 === u ? (y ? u + h : u) + _ : e[o], d !== _ && ("" === _ && "lineHeight" !== o || (u || 0 === u) && h && (h = et(t, o, h, d), "%" === _ ? (h /= et(t, o, 100, "%") / 100, !0 !== e.strictUnits && (f = h + "%")) : "em" === _ || "rem" === _ || "vw" === _ || "vh" === _ ? h /= et(t, o, 1, _) : "px" !== _ && (u = et(t, o, u, _), _ = "px"), y && (u || 0 === u) && (p = u + h + _))), y && (u += h), !h && 0 !== h || !u && 0 !== u ? void 0 !== x[o] && (p || p + "" != "NaN" && null != p) ? (i = new xt(x, o, u || h || 0, 0, i, -1, o, !1, 0, f, p), i.xs0 = "none" !== p || "display" !== o && -1 === o.indexOf("Style") ? p : f) : Q("invalid " + o + " tween value: " + e[o]) : (i = new xt(x, o, h, u - h, i, 0, o, !1 !== c && ("px" === _ || "zIndex" === o), 0, f, p), i.xs0 = _)) } s && i && !i.plugin && (i.plugin = s) } return i }, u.setRatio = function (t) { var e, i, n, r = this._firstPT; if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time) if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime) for (; r;) { if (e = r.c * t + r.s, r.r ? e = Math.round(e) : e < 1e-6 && e > -1e-6 && (e = 0), r.type) if (1 === r.type) if (2 === (n = r.l)) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2; else if (3 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3; else if (4 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4; else if (5 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5; else { for (i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++)i += r["xn" + n] + r["xs" + (n + 1)]; r.t[r.p] = i } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t); else r.t[r.p] = e + r.xs0; r = r._next } else for (; r;)2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next; else for (; r;) { if (2 !== r.type) if (r.r && -1 !== r.type) if (e = Math.round(r.s + r.c), r.type) { if (1 === r.type) { for (n = r.l, i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++)i += r["xn" + n] + r["xs" + (n + 1)]; r.t[r.p] = i } } else r.t[r.p] = e + r.xs0; else r.t[r.p] = r.e; else r.setRatio(t); r = r._next } }, u._enableTransforms = function (t) { this._transform = this._transform || Ut(this._target, r, !0), this._transformType = this._transform.svg && kt || !t && 3 !== this._transformType ? 2 : 3 }; var Zt = function (t) { this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0) }; u._addLazySet = function (t, e, i) { var n = this._firstPT = new xt(t, e, 0, 0, this._firstPT, 2); n.e = i, n.setRatio = Zt, n.data = this }, u._linkCSSP = function (t, e, i, n) { return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t }, u._mod = function (t) { for (var e = this._firstPT; e;)"function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1), e = e._next }, u._kill = function (e) { var i, n, r, s = e; if (e.autoAlpha || e.alpha) { s = {}; for (n in e) s[n] = e[n]; s.opacity = 1, s.autoAlpha && (s.visibility = 1) } for (e.className && (i = this._classNamePT) && (r = i.xfirst, r && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), i = this._firstPT; i;)i.plugin && i.plugin !== n && i.plugin._kill && (i.plugin._kill(e), n = i.plugin), i = i._next; return t.prototype._kill.call(this, s) }; var Jt = function (t, e, i) { var n, r, s, o; if (t.slice) for (r = t.length; --r > -1;)Jt(t[r], e, i); else for (n = t.childNodes, r = n.length; --r > -1;)s = n[r], o = s.type, s.style && (e.push(nt(s)), i && i.push(s)), 1 !== o && 9 !== o && 11 !== o || !s.childNodes.length || Jt(s, e, i) }; return a.cascadeTo = function (t, i, n) { var r, s, o, a, h = e.to(t, i, n), l = [h], u = [], c = [], f = [], p = e._internals.reservedProps; for (t = h._targets || h.target, Jt(t, u, f), h.render(i, !0, !0), Jt(t, c), h.render(0, !0, !0), h._enabled(!0), r = f.length; --r > -1;)if (s = rt(f[r], u[r], c[r]), s.firstMPT) { s = s.difs; for (o in n) p[o] && (s[o] = n[o]); a = {}; for (o in s) a[o] = u[r][o]; l.push(e.fromTo(f[r], i, a, s)) } return l }, t.activate([a]), a }, !0), function () { var t = s._gsDefine.plugin({ propName: "roundProps", version: "1.6.0", priority: -1, API: 2, init: function (t, e, i) { return this._tween = i, !0 } }), e = function (t) { for (; t;)t.f || t.blob || (t.m = Math.round), t = t._next }, i = t.prototype; i._onInitAllProps = function () { for (var t, i, n, r = this._tween, s = r.vars.roundProps.join ? r.vars.roundProps : r.vars.roundProps.split(","), o = s.length, a = {}, h = r._propLookup.roundProps; --o > -1;)a[s[o]] = Math.round; for (o = s.length; --o > -1;)for (t = s[o], i = r._firstPT; i;)n = i._next, i.pg ? i.t._mod(a) : i.n === t && (2 === i.f && i.t ? e(i.t._firstPT) : (this._add(i.t, t, i.s, i.c), n && (n._prev = i._prev), i._prev ? i._prev._next = n : r._firstPT === i && (r._firstPT = n), i._next = i._prev = null, r._propLookup[t] = h)), i = n; return !1 }, i._add = function (t, e, i, n) { this._addTween(t, e, i, i + n, e, Math.round), this._overwriteProps.push(e) } }(), function () { s._gsDefine.plugin({ propName: "attr", API: 2, version: "0.6.1", init: function (t, e, i, n) { var r, s; if ("function" != typeof t.setAttribute) return !1; for (r in e) s = e[r], "function" == typeof s && (s = s(n, t)), this._addTween(t, "setAttribute", t.getAttribute(r) + "", s + "", r, !1, r), this._overwriteProps.push(r); return !0 } }) }(), s._gsDefine.plugin({ propName: "directionalRotation", version: "0.3.1", API: 2, init: function (t, e, i, n) { "object" != typeof e && (e = { rotation: e }), this.finals = {}; var r, s, o, a, h, l, u = !0 === e.useRadians ? 2 * Math.PI : 360; for (r in e) "useRadians" !== r && (a = e[r], "function" == typeof a && (a = a(n, t)), l = (a + "").split("_"), s = l[0], o = parseFloat("function" != typeof t[r] ? t[r] : t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]()), a = this.finals[r] = "string" == typeof s && "=" === s.charAt(1) ? o + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0, h = a - o, l.length && (s = l.join("_"), -1 !== s.indexOf("short") && (h %= u) !== h % (u / 2) && (h = h < 0 ? h + u : h - u), -1 !== s.indexOf("_cw") && h < 0 ? h = (h + 9999999999 * u) % u - (h / u | 0) * u : -1 !== s.indexOf("ccw") && h > 0 && (h = (h - 9999999999 * u) % u - (h / u | 0) * u)), (h > 1e-6 || h < -1e-6) && (this._addTween(t, r, o, o + h, r), this._overwriteProps.push(r))); return !0 }, set: function (t) { var e; if (1 !== t) this._super.setRatio.call(this, t); else for (e = this._firstPT; e;)e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next } })._autoCSS = !0, s._gsDefine("easing.Back", ["easing.Ease"], function (t) { var e, i, n, r, o = s.GreenSockGlobals || s, a = o.com.greensock, h = 2 * Math.PI, l = Math.PI / 2, u = a._class, c = function (e, i) { var n = u("easing." + e, function () { }, !0), r = n.prototype = new t; return r.constructor = n, r.getRatio = i, n }, f = t.register || function () { }, p = function (t, e, i, n, r) { var s = u("easing." + t, { easeOut: new e, easeIn: new i, easeInOut: new n }, !0); return f(s, t), s }, d = function (t, e, i) { this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t) }, _ = function (e, i) { var n = u("easing." + e, function (t) { this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1 }, !0), r = n.prototype = new t; return r.constructor = n, r.getRatio = i, r.config = function (t) { return new n(t) }, n }, m = p("Back", _("BackOut", function (t) { return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1 }), _("BackIn", function (t) { return t * t * ((this._p1 + 1) * t - this._p1) }), _("BackInOut", function (t) { return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2) })), g = u("easing.SlowMo", function (t, e, i) { e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i }, !0), v = g.prototype = new t; return v.constructor = g, v.getRatio = function (t) { var e = t + (.5 - t) * this._p; return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 === t ? 0 : 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e }, g.ease = new g(.7, .7), v.config = g.config = function (t, e, i) { return new g(t, e, i) }, e = u("easing.SteppedEase", function (t, e) { t = t || 1, this._p1 = 1 / t, this._p2 = t + (e ? 0 : 1), this._p3 = e ? 1 : 0 }, !0), v = e.prototype = new t, v.constructor = e, v.getRatio = function (t) { return t < 0 ? t = 0 : t >= 1 && (t = .999999999), ((this._p2 * t | 0) + this._p3) * this._p1 }, v.config = e.config = function (t, i) { return new e(t, i) }, i = u("easing.ExpoScaleEase", function (t, e, i) { this._p1 = Math.log(e / t), this._p2 = e - t, this._p3 = t, this._ease = i }, !0), v = i.prototype = new t, v.constructor = i, v.getRatio = function (t) { return this._ease && (t = this._ease.getRatio(t)), (this._p3 * Math.exp(this._p1 * t) - this._p3) / this._p2 }, v.config = i.config = function (t, e, n) { return new i(t, e, n) }, n = u("easing.RoughEase", function (e) { e = e || {}; for (var i, n, r, s, o, a, h = e.taper || "none", l = [], u = 0, c = 0 | (e.points || 20), f = c, p = !1 !== e.randomize, _ = !0 === e.clamp, m = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --f > -1;)i = p ? Math.random() : 1 / c * f, n = m ? m.getRatio(i) : i, "none" === h ? r = g : "out" === h ? (s = 1 - i, r = s * s * g) : "in" === h ? r = i * i * g : i < .5 ? (s = 2 * i, r = s * s * .5 * g) : (s = 2 * (1 - i), r = s * s * .5 * g), p ? n += Math.random() * r - .5 * r : f % 2 ? n += .5 * r : n -= .5 * r, _ && (n > 1 ? n = 1 : n < 0 && (n = 0)), l[u++] = { x: i, y: n }; for (l.sort(function (t, e) { return t.x - e.x }), a = new d(1, 1, null), f = c; --f > -1;)o = l[f], a = new d(o.x, o.y, a); this._prev = new d(0, 0, 0 !== a.t ? a : a.next) }, !0), v = n.prototype = new t, v.constructor = n, v.getRatio = function (t) { var e = this._prev; if (t > e.t) { for (; e.next && t >= e.t;)e = e.next; e = e.prev } else for (; e.prev && t <= e.t;)e = e.prev; return this._prev = e, e.v + (t - e.t) / e.gap * e.c }, v.config = function (t) { return new n(t) }, n.ease = new n, p("Bounce", c("BounceOut", function (t) { return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375 }), c("BounceIn", function (t) { return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375) }), c("BounceInOut", function (t) { var e = t < .5; return t = e ? 1 - 2 * t : 2 * t - 1, t < 1 / 2.75 ? t *= 7.5625 * t : t = t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5 })), p("Circ", c("CircOut", function (t) { return Math.sqrt(1 - (t -= 1) * t) }), c("CircIn", function (t) { return -(Math.sqrt(1 - t * t) - 1) }), c("CircInOut", function (t) { return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1) })), r = function (e, i, n) { var r = u("easing." + e, function (t, e) { this._p1 = t >= 1 ? t : 1, this._p2 = (e || n) / (t < 1 ? t : 1), this._p3 = this._p2 / h * (Math.asin(1 / this._p1) || 0), this._p2 = h / this._p2 }, !0), s = r.prototype = new t; return s.constructor = r, s.getRatio = i, s.config = function (t, e) { return new r(t, e) }, r }, p("Elastic", r("ElasticOut", function (t) { return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1 }, .3), r("ElasticIn", function (t) { return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) }, .3), r("ElasticInOut", function (t) { return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1 }, .45)), p("Expo", c("ExpoOut", function (t) { return 1 - Math.pow(2, -10 * t) }), c("ExpoIn", function (t) { return Math.pow(2, 10 * (t - 1)) - .001 }), c("ExpoInOut", function (t) { return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1))) })), p("Sine", c("SineOut", function (t) { return Math.sin(t * l) }), c("SineIn", function (t) { return 1 - Math.cos(t * l) }), c("SineInOut", function (t) { return -.5 * (Math.cos(Math.PI * t) - 1) })), u("easing.EaseLookup", { find: function (e) { return t.map[e] } }, !0), f(o.SlowMo, "SlowMo", "ease,"), f(n, "RoughEase", "ease,"), f(e, "SteppedEase", "ease,"), m }, !0) }), s._gsDefine && s._gsQueue.pop()(), function (i, s) { "use strict"; var o = {}, a = i.document, h = i.GreenSockGlobals = i.GreenSockGlobals || i; if (!h.TweenLite) { var l, u, c, f, p, d = function (t) { var e, i = t.split("."), n = h; for (e = 0; e < i.length; e++)n[i[e]] = n = n[i[e]] || {}; return n }, _ = d("com.greensock"), m = function (t) { var e, i = [], n = t.length; for (e = 0; e !== n; i.push(t[e++])); return i }, g = function () { }, v = function () { var t = Object.prototype.toString, e = t.call([]); return function (i) { return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e) } }(), y = {}, x = function (i, s, a, l) { this.sc = y[i] ? y[i].sc : [], y[i] = this, this.gsClass = null, this.func = a; var u = []; this.check = function (c) { for (var f, p, _, m, g = s.length, v = g; --g > -1;)(f = y[s[g]] || new x(s[g], [])).gsClass ? (u[g] = f.gsClass, v--) : c && f.sc.push(this); if (0 === v && a) { if (p = ("com.greensock." + i).split("."), _ = p.pop(), m = d(p.join("."))[_] = this.gsClass = a.apply(a, u), l) if (h[_] = o[_] = m, void 0 !== t && t.exports) if ("TweenMax" === i) { t.exports = o.TweenMax = m; for (g in o) m[g] = o[g] } else o.TweenMax && (o.TweenMax[_] = m); else n = [], void 0 !== (r = function () { return m }.apply(e, n)) && (t.exports = r); for (g = 0; g < this.sc.length; g++)this.sc[g].check() } }, this.check(!0) }, T = i._gsDefine = function (t, e, i, n) { return new x(t, e, i, n) }, w = _._class = function (t, e, i) { return e = e || function () { }, T(t, [], function () { return e }, i), e }; T.globals = h; var b = [0, 0, 1, 1], P = w("easing.Ease", function (t, e, i, n) { this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? b.concat(e) : b }, !0), S = P.map = {}, O = P.register = function (t, e, i, n) { for (var r, s, o, a, h = e.split(","), l = h.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --l > -1;)for (s = h[l], r = n ? w("easing." + s, null, !0) : _.easing[s] || {}, o = u.length; --o > -1;)a = u[o], S[s + "." + a] = S[a + s] = r[a] = t.getRatio ? t : t[a] || new t }; for (c = P.prototype, c._calcEnd = !1, c.getRatio = function (t) { if (this._func) return this._params[0] = t, this._func.apply(null, this._params); var e = this._type, i = this._power, n = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t); return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : t < .5 ? n / 2 : 1 - n / 2 }, l = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"], u = l.length; --u > -1;)c = l[u] + ",Power" + u, O(new P(null, null, 1, u), c, "easeOut", !0), O(new P(null, null, 2, u), c, "easeIn" + (0 === u ? ",easeNone" : "")), O(new P(null, null, 3, u), c, "easeInOut"); S.linear = _.easing.Linear.easeIn, S.swing = _.easing.Quad.easeInOut; var k = w("events.EventDispatcher", function (t) { this._listeners = {}, this._eventTarget = t || this }); c = k.prototype, c.addEventListener = function (t, e, i, n, r) { r = r || 0; var s, o, a = this._listeners[t], h = 0; for (this !== f || p || f.wake(), null == a && (this._listeners[t] = a = []), o = a.length; --o > -1;)s = a[o], s.c === e && s.s === i ? a.splice(o, 1) : 0 === h && s.pr < r && (h = o + 1); a.splice(h, 0, { c: e, s: i, up: n, pr: r }) }, c.removeEventListener = function (t, e) { var i, n = this._listeners[t]; if (n) for (i = n.length; --i > -1;)if (n[i].c === e) return void n.splice(i, 1) }, c.dispatchEvent = function (t) { var e, i, n, r = this._listeners[t]; if (r) for (e = r.length, e > 1 && (r = r.slice(0)), i = this._eventTarget; --e > -1;)(n = r[e]) && (n.up ? n.c.call(n.s || i, { type: t, target: i }) : n.c.call(n.s || i)) }; var C = i.requestAnimationFrame, R = i.cancelAnimationFrame, A = Date.now || function () { return (new Date).getTime() }, E = A(); for (l = ["ms", "moz", "webkit", "o"], u = l.length; --u > -1 && !C;)C = i[l[u] + "RequestAnimationFrame"], R = i[l[u] + "CancelAnimationFrame"] || i[l[u] + "CancelRequestAnimationFrame"]; w("Ticker", function (t, e) { var i, n, r, s, o, h = this, l = A(), u = !(!1 === e || !C) && "auto", c = 500, d = 33, _ = function (t) { var e, a, u = A() - E; u > c && (l += u - d), E += u, h.time = (E - l) / 1e3, e = h.time - o, (!i || e > 0 || !0 === t) && (h.frame++, o += e + (e >= s ? .004 : s - e), a = !0), !0 !== t && (r = n(_)), a && h.dispatchEvent("tick") }; k.call(h), h.time = h.frame = 0, h.tick = function () { _(!0) }, h.lagSmoothing = function (t, e) { if (!arguments.length) return c < 1e10; c = t || 1e10, d = Math.min(e, c, 0) }, h.sleep = function () { null != r && (u && R ? R(r) : clearTimeout(r), n = g, r = null, h === f && (p = !1)) }, h.wake = function (t) { null !== r ? h.sleep() : t ? l += -E + (E = A()) : h.frame > 10 && (E = A() - c + 5), n = 0 === i ? g : u && C ? C : function (t) { return setTimeout(t, 1e3 * (o - h.time) + 1 | 0) }, h === f && (p = !0), _(2) }, h.fps = function (t) { if (!arguments.length) return i; i = t, s = 1 / (i || 60), o = this.time + s, h.wake() }, h.useRAF = function (t) { if (!arguments.length) return u; h.sleep(), u = t, h.fps(i) }, h.fps(t), setTimeout(function () { "auto" === u && h.frame < 5 && "hidden" !== (a || {}).visibilityState && h.useRAF(!1) }, 1500) }), c = _.Ticker.prototype = new _.events.EventDispatcher, c.constructor = _.Ticker; var I = w("core.Animation", function (t, e) { if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, this._reversed = !0 === e.reversed, J) { p || f.wake(); var i = this.vars.useFrames ? Z : J; i.add(this, i._time), this.vars.paused && this.paused(!0) } }); f = I.ticker = new _.Ticker, c = I.prototype, c._dirty = c._gc = c._initted = c._paused = !1, c._totalTime = c._time = 0, c._rawPrevTime = -1, c._next = c._last = c._onUpdate = c._timeline = c.timeline = null, c._paused = !1; var M = function () { p && A() - E > 2e3 && ("hidden" !== (a || {}).visibilityState || !f.lagSmoothing()) && f.wake(); var t = setTimeout(M, 2e3); t.unref && t.unref() }; M(), c.play = function (t, e) { return null != t && this.seek(t, e), this.reversed(!1).paused(!1) }, c.pause = function (t, e) { return null != t && this.seek(t, e), this.paused(!0) }, c.resume = function (t, e) { return null != t && this.seek(t, e), this.paused(!1) }, c.seek = function (t, e) { return this.totalTime(Number(t), !1 !== e) }, c.restart = function (t, e) { return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0) }, c.reverse = function (t, e) { return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1) }, c.render = function (t, e, i) { }, c.invalidate = function () { return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, !this._gc && this.timeline || this._enabled(!0), this }, c.isActive = function () { var t, e = this._timeline, i = this._startTime; return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - 1e-7 }, c._enabled = function (t, e) { return p || f.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1 }, c._kill = function (t, e) { return this._enabled(!1, !1) }, c.kill = function (t, e) { return this._kill(t, e), this }, c._uncache = function (t) { for (var e = t ? this : this.timeline; e;)e._dirty = !0, e = e.timeline; return this }, c._swapSelfInParams = function (t) { for (var e = t.length, i = t.concat(); --e > -1;)"{self}" === t[e] && (i[e] = this); return i }, c._callback = function (t) { var e = this.vars, i = e[t], n = e[t + "Params"], r = e[t + "Scope"] || e.callbackScope || this; switch (n ? n.length : 0) { case 0: i.call(r); break; case 1: i.call(r, n[0]); break; case 2: i.call(r, n[0], n[1]); break; default: i.apply(r, n) } }, c.eventCallback = function (t, e, i, n) { if ("on" === (t || "").substr(0, 2)) { var r = this.vars; if (1 === arguments.length) return r[t]; null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = v(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e) } return this }, c.delay = function (t) { return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay }, c.duration = function (t) { return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration) }, c.totalDuration = function (t) { return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration }, c.time = function (t, e) { return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time }, c.totalTime = function (t, e, i) { if (p || f.wake(), !arguments.length) return this._totalTime; if (this._timeline) { if (t < 0 && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) { this._dirty && this.totalDuration(); var n = this._totalDuration, r = this._timeline; if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline) for (; r._timeline;)r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline } this._gc && this._enabled(!0, !1), this._totalTime === t && 0 !== this._duration || (j.length && tt(), this.render(t, e, !1), j.length && tt()) } return this }, c.progress = c.totalProgress = function (t, e) { var i = this.duration(); return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio }, c.startTime = function (t) { return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime }, c.endTime = function (t) { return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale }, c.timeScale = function (t) { if (!arguments.length) return this._timeScale; var e, i; for (t = t || 1e-10, this._timeline && this._timeline.smoothChildTiming && (e = this._pauseTime, i = e || 0 === e ? e : this._timeline.totalTime(), this._startTime = i - (i - this._startTime) * this._timeScale / t), this._timeScale = t, i = this.timeline; i && i.timeline;)i._dirty = !0, i.totalDuration(), i = i.timeline; return this }, c.reversed = function (t) { return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed }, c.paused = function (t) { if (!arguments.length) return this._paused; var e, i, n = this._timeline; return t != this._paused && n && (p || t || f.wake(), e = n.rawTime(), i = e - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this }; var L = w("core.SimpleTimeline", function (t) { I.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0 }); c = L.prototype = new I, c.constructor = L, c.kill()._gc = !1, c._first = c._last = c._recent = null, c._sortChildren = !1, c.add = c.insert = function (t, e, i, n) { var r, s; if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), r = this._last, this._sortChildren) for (s = t._startTime; r && r._startTime > s;)r = r._prev; return r ? (t._next = r._next, r._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = r, this._recent = t, this._timeline && this._uncache(!0), this }, c._remove = function (t, e) { return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this }, c.render = function (t, e, i) { var n, r = this._first; for (this._totalTime = this._time = this._rawPrevTime = t; r;)n = r._next, (r._active || t >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = n }, c.rawTime = function () { return p || f.wake(), this._totalTime }; var z = w("TweenLite", function (t, e, n) { if (I.call(this, e, n), this.render = z.prototype.render, null == t) throw "Cannot tween a null target."; this.target = t = "string" != typeof t ? t : z.selector(t) || t; var r, s, o, a = t.jquery || t.length && t !== i && t[0] && (t[0] === i || t[0].nodeType && t[0].style && !t.nodeType), h = this.vars.overwrite; if (this._overwrite = h = null == h ? $[z.defaultOverwrite] : "number" == typeof h ? h >> 0 : $[h], (a || t instanceof Array || t.push && v(t)) && "number" != typeof t[0]) for (this._targets = o = m(t), this._propLookup = [], this._siblings = [], r = 0; r < o.length; r++)s = o[r], s ? "string" != typeof s ? s.length && s !== i && s[0] && (s[0] === i || s[0].nodeType && s[0].style && !s.nodeType) ? (o.splice(r--, 1), this._targets = o = o.concat(m(s))) : (this._siblings[r] = et(s, this, !1), 1 === h && this._siblings[r].length > 1 && nt(s, this, null, 1, this._siblings[r])) : "string" == typeof (s = o[r--] = z.selector(s)) && o.splice(r + 1, 1) : o.splice(r--, 1); else this._propLookup = {}, this._siblings = et(t, this, !1), 1 === h && this._siblings.length > 1 && nt(t, this, null, 1, this._siblings); (this.vars.immediateRender || 0 === e && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -1e-10, this.render(Math.min(0, -this._delay))) }, !0), D = function (t) { return t && t.length && t !== i && t[0] && (t[0] === i || t[0].nodeType && t[0].style && !t.nodeType) }, F = function (t, e) { var i, n = {}; for (i in t) Q[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!H[i] || H[i] && H[i]._autoCSS) || (n[i] = t[i], delete t[i]); t.css = n }; c = z.prototype = new I, c.constructor = z, c.kill()._gc = !1, c.ratio = 0, c._firstPT = c._targets = c._overwrittenProps = c._startAt = null, c._notifyPluginsOfEnabled = c._lazy = !1, z.version = "1.20.4", z.defaultEase = c._ease = new P(null, null, 1, 1), z.defaultOverwrite = "auto", z.ticker = f, z.autoSleep = 120, z.lagSmoothing = function (t, e) { f.lagSmoothing(t, e) }, z.selector = i.$ || i.jQuery || function (t) { var e = i.$ || i.jQuery; return e ? (z.selector = e, e(t)) : void 0 === a ? t : a.querySelectorAll ? a.querySelectorAll(t) : a.getElementById("#" === t.charAt(0) ? t.substr(1) : t) }; var j = [], B = {}, N = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi, W = /[\+-]=-?[\.\d]/, X = function (t) { for (var e, i = this._firstPT; i;)e = i.blob ? 1 === t && null != this.end ? this.end : t ? this.join("") : this.start : i.c * t + i.s, i.m ? e = i.m(e, this._target || i.t) : e < 1e-6 && e > -1e-6 && !i.blob && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next }, Y = function (t, e, i, n) { var r, s, o, a, h, l, u, c = [], f = 0, p = "", d = 0; for (c.start = t, c.end = e, t = c[0] = t + "", e = c[1] = e + "", i && (i(c), t = c[0], e = c[1]), c.length = 0, r = t.match(N) || [], s = e.match(N) || [], n && (n._next = null, n.blob = 1, c._firstPT = c._applyPT = n), h = s.length, a = 0; a < h; a++)u = s[a], l = e.substr(f, e.indexOf(u, f) - f), p += l || !a ? l : ",", f += l.length, d ? d = (d + 1) % 5 : "rgba(" === l.substr(-5) && (d = 1), u === r[a] || r.length <= a ? p += u : (p && (c.push(p), p = ""), o = parseFloat(r[a]), c.push(o), c._firstPT = { _next: c._firstPT, t: c, p: c.length - 1, s: o, c: ("=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * parseFloat(u.substr(2)) : parseFloat(u) - o) || 0, f: 0, m: d && d < 4 ? Math.round : 0 }), f += u.length; return p += e.substr(f), p && c.push(p), c.setRatio = X, W.test(e) && (c.end = null), c }, U = function (t, e, i, n, r, s, o, a, h) { "function" == typeof n && (n = n(h || 0, t)); var l, u = typeof t[e], c = "function" !== u ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3), f = "get" !== i ? i : c ? o ? t[c](o) : t[c]() : t[e], p = "string" == typeof n && "=" === n.charAt(1), d = { t: t, p: e, s: f, f: "function" === u, pg: 0, n: r || e, m: s ? "function" == typeof s ? s : Math.round : 0, pr: 0, c: p ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - f || 0 }; if (("number" != typeof f || "number" != typeof n && !p) && (o || isNaN(f) || !p && isNaN(n) || "boolean" == typeof f || "boolean" == typeof n ? (d.fp = o, l = Y(f, p ? parseFloat(d.s) + d.c + (d.s + "").replace(/[0-9\-\.]/g, "") : n, a || z.defaultStringFilter, d), d = { t: l, p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: r || e, pr: 0, m: 0 }) : (d.s = parseFloat(f), p || (d.c = parseFloat(n) - d.s || 0))), d.c) return (d._next = this._firstPT) && (d._next._prev = d), this._firstPT = d, d }, q = z._internals = { isArray: v, isSelector: D, lazyTweens: j, blobDif: Y }, H = z._plugins = {}, V = q.tweenLookup = {}, G = 0, Q = q.reservedProps = { ease: 1, delay: 1, overwrite: 1, onComplete: 1, onCompleteParams: 1, onCompleteScope: 1, useFrames: 1, runBackwards: 1, startAt: 1, onUpdate: 1, onUpdateParams: 1, onUpdateScope: 1, onStart: 1, onStartParams: 1, onStartScope: 1, onReverseComplete: 1, onReverseCompleteParams: 1, onReverseCompleteScope: 1, onRepeat: 1, onRepeatParams: 1, onRepeatScope: 1, easeParams: 1, yoyo: 1, immediateRender: 1, repeat: 1, repeatDelay: 1, data: 1, paused: 1, reversed: 1, autoCSS: 1, lazy: 1, onOverwrite: 1, callbackScope: 1, stringFilter: 1, id: 1, yoyoEase: 1 }, $ = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, true: 1, false: 0 }, Z = I._rootFramesTimeline = new L, J = I._rootTimeline = new L, K = 30, tt = q.lazyRender = function () { var t, e = j.length; for (B = {}; --e > -1;)(t = j[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1); j.length = 0 }; J._startTime = f.time, Z._startTime = f.frame, J._active = Z._active = !0, setTimeout(tt, 1), I._updateRoot = z.render = function () { var t, e, i; if (j.length && tt(), J.render((f.time - J._startTime) * J._timeScale, !1, !1), Z.render((f.frame - Z._startTime) * Z._timeScale, !1, !1), j.length && tt(), f.frame >= K) { K = f.frame + (parseInt(z.autoSleep, 10) || 120); for (i in V) { for (e = V[i].tweens, t = e.length; --t > -1;)e[t]._gc && e.splice(t, 1); 0 === e.length && delete V[i] } if ((!(i = J._first) || i._paused) && z.autoSleep && !Z._first && 1 === f._listeners.tick.length) { for (; i && i._paused;)i = i._next; i || f.sleep() } } }, f.addEventListener("tick", I._updateRoot); var et = function (t, e, i) { var n, r, s = t._gsTweenID; if (V[s || (t._gsTweenID = s = "t" + G++)] || (V[s] = { target: t, tweens: [] }), e && (n = V[s].tweens, n[r = n.length] = e, i)) for (; --r > -1;)n[r] === e && n.splice(r, 1); return V[s].tweens }, it = function (t, e, i, n) { var r, s, o = t.vars.onOverwrite; return o && (r = o(t, e, i, n)), o = z.onOverwrite, o && (s = o(t, e, i, n)), !1 !== r && !1 !== s }, nt = function (t, e, i, n, r) { var s, o, a, h; if (1 === n || n >= 4) { for (h = r.length, s = 0; s < h; s++)if ((a = r[s]) !== e) a._gc || a._kill(null, t, e) && (o = !0); else if (5 === n) break; return o } var l, u = e._startTime + 1e-10, c = [], f = 0, p = 0 === e._duration; for (s = r.length; --s > -1;)(a = r[s]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (l = l || rt(e, 0, p), 0 === rt(a, l, p) && (c[f++] = a)) : a._startTime <= u && a._startTime + a.totalDuration() / a._timeScale > u && ((p || !a._initted) && u - a._startTime <= 2e-10 || (c[f++] = a))); for (s = f; --s > -1;)if (a = c[s], 2 === n && a._kill(i, t, e) && (o = !0), 2 !== n || !a._firstPT && a._initted) { if (2 !== n && !it(a, e)) continue; a._enabled(!1, !1) && (o = !0) } return o }, rt = function (t, e, i) { for (var n = t._timeline, r = n._timeScale, s = t._startTime; n._timeline;) { if (s += n._startTime, r *= n._timeScale, n._paused) return -100; n = n._timeline } return s /= r, s > e ? s - e : i && s === e || !t._initted && s - e < 2e-10 ? 1e-10 : (s += t.totalDuration() / t._timeScale / r) > e + 1e-10 ? 0 : s - e - 1e-10 }; c._init = function () { var t, e, i, n, r, s, o = this.vars, a = this._overwrittenProps, h = this._duration, l = !!o.immediateRender, u = o.ease; if (o.startAt) { this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {}; for (n in o.startAt) r[n] = o.startAt[n]; if (r.data = "isStart", r.overwrite = !1, r.immediateRender = !0, r.lazy = l && !1 !== o.lazy, r.startAt = r.delay = null, r.onUpdate = o.onUpdate, r.onUpdateParams = o.onUpdateParams, r.onUpdateScope = o.onUpdateScope || o.callbackScope || this, this._startAt = z.to(this.target, 0, r), l) if (this._time > 0) this._startAt = null; else if (0 !== h) return } else if (o.runBackwards && 0 !== h) if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null; else { 0 !== this._time && (l = !1), i = {}; for (n in o) Q[n] && "autoCSS" !== n || (i[n] = o[n]); if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && !1 !== o.lazy, i.immediateRender = l, this._startAt = z.to(this.target, 0, i), l) { if (0 === this._time) return } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null) } if (this._ease = u = u ? u instanceof P ? u : "function" == typeof u ? new P(u, o.easeParams) : S[u] || z.defaultEase : z.defaultEase, o.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, o.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets) for (s = this._targets.length, t = 0; t < s; t++)this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null, t) && (e = !0); else e = this._initProps(this.target, this._propLookup, this._siblings, a, 0); if (e && z._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), o.runBackwards) for (i = this._firstPT; i;)i.s += i.c, i.c = -i.c, i = i._next; this._onUpdate = o.onUpdate, this._initted = !0 }, c._initProps = function (t, e, n, r, s) { var o, a, h, l, u, c; if (null == t) return !1; B[t._gsTweenID] && tt(), this.vars.css || t.style && t !== i && t.nodeType && H.css && !1 !== this.vars.autoCSS && F(this.vars, t); for (o in this.vars) if (c = this.vars[o], Q[o]) c && (c instanceof Array || c.push && v(c)) && -1 !== c.join("").indexOf("{self}") && (this.vars[o] = c = this._swapSelfInParams(c, this)); else if (H[o] && (l = new H[o])._onInitTween(t, this.vars[o], this, s)) { for (this._firstPT = u = { _next: this._firstPT, t: l, p: "setRatio", s: 0, c: 1, f: 1, n: o, pg: 1, pr: l._priority, m: 0 }, a = l._overwriteProps.length; --a > -1;)e[l._overwriteProps[a]] = this._firstPT; (l._priority || l._onInitAllProps) && (h = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0), u._next && (u._next._prev = u) } else e[o] = U.call(this, t, o, "get", c, o, 0, null, this.vars.stringFilter, s); return r && this._kill(r, t) ? this._initProps(t, e, n, r, s) : this._overwrite > 1 && this._firstPT && n.length > 1 && nt(t, this, e, this._overwrite, n) ? (this._kill(e, t), this._initProps(t, e, n, r, s)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (B[t._gsTweenID] = !0), h) }, c.render = function (t, e, i) { var n, r, s, o, a = this._time, h = this._duration, l = this._rawPrevTime; if (t >= h - 1e-7 && t >= 0) this._totalTime = this._time = h, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === h && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (l < 0 || t <= 0 && t >= -1e-7 || 1e-10 === l && "isPause" !== this.data) && l !== t && (i = !0, l > 1e-10 && (r = "onReverseComplete")), this._rawPrevTime = o = !e || t || l === t ? t : 1e-10); else if (t < 1e-7) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === h && l > 0) && (r = "onReverseComplete", n = this._reversed), t < 0 && (this._active = !1, 0 === h && (this._initted || !this.vars.lazy || i) && (l >= 0 && (1e-10 !== l || "isPause" !== this.data) && (i = !0), this._rawPrevTime = o = !e || t || l === t ? t : 1e-10)), (!this._initted || this._startAt && this._startAt.progress()) && (i = !0); else if (this._totalTime = this._time = t, this._easeType) { var u = t / h, c = this._easeType, f = this._easePower; (1 === c || 3 === c && u >= .5) && (u = 1 - u), 3 === c && (u *= 2), 1 === f ? u *= u : 2 === f ? u *= u * u : 3 === f ? u *= u * u * u : 4 === f && (u *= u * u * u * u), this.ratio = 1 === c ? 1 - u : 2 === c ? u : t / h < .5 ? u / 2 : 1 - u / 2 } else this.ratio = this._ease.getRatio(t / h); if (this._time !== a || i) { if (!this._initted) { if (this._init(), !this._initted || this._gc) return; if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = l, j.push(this), void (this._lazy = [t, e]); this._time && !n ? this.ratio = this._ease.getRatio(this._time / h) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) } for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, !0, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 === this._time && 0 !== h || e || this._callback("onStart"))), s = this._firstPT; s;)s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next; this._onUpdate && (t < 0 && this._startAt && -1e-4 !== t && this._startAt.render(t, !0, i), e || (this._time !== a || n || i) && this._callback("onUpdate")), r && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, !0, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === h && 1e-10 === this._rawPrevTime && 1e-10 !== o && (this._rawPrevTime = 0))) } }, c._kill = function (t, e, i) { if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1); e = "string" != typeof e ? e || this._targets || this.target : z.selector(e) || e; var n, r, s, o, a, h, l, u, c, f = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline; if ((v(e) || D(e)) && "number" != typeof e[0]) for (n = e.length; --n > -1;)this._kill(t, e[n], i) && (h = !0); else { if (this._targets) { for (n = this._targets.length; --n > -1;)if (e === this._targets[n]) { a = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all"; break } } else { if (e !== this.target) return !1; a = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all" } if (a) { if (l = t || a, u = t !== r && "all" !== r && t !== a && ("object" != typeof t || !t._tempKill), i && (z.onOverwrite || this.vars.onOverwrite)) { for (s in l) a[s] && (c || (c = []), c.push(s)); if ((c || !t) && !it(this, i, e, c)) return !1 } for (s in l) (o = a[s]) && (f && (o.f ? o.t[o.p](o.s) : o.t[o.p] = o.s, h = !0), o.pg && o.t._kill(l) && (h = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete a[s]), u && (r[s] = 1); !this._firstPT && this._initted && this._enabled(!1, !1) } } return h }, c.invalidate = function () { return this._notifyPluginsOfEnabled && z._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], I.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -1e-10, this.render(Math.min(0, -this._delay))), this }, c._enabled = function (t, e) { if (p || f.wake(), t && this._gc) { var i, n = this._targets; if (n) for (i = n.length; --i > -1;)this._siblings[i] = et(n[i], this, !0); else this._siblings = et(this.target, this, !0) } return I.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && z._onPluginEvent(t ? "_onEnable" : "_onDisable", this) }, z.to = function (t, e, i) { return new z(t, e, i) }, z.from = function (t, e, i) { return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new z(t, e, i) }, z.fromTo = function (t, e, i, n) { return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new z(t, e, n) }, z.delayedCall = function (t, e, i, n, r) { return new z(e, 0, { delay: t, onComplete: e, onCompleteParams: i, callbackScope: n, onReverseComplete: e, onReverseCompleteParams: i, immediateRender: !1, lazy: !1, useFrames: r, overwrite: 0 }) }, z.set = function (t, e) { return new z(t, 0, e) }, z.getTweensOf = function (t, e) { if (null == t) return []; t = "string" != typeof t ? t : z.selector(t) || t; var i, n, r, s; if ((v(t) || D(t)) && "number" != typeof t[0]) { for (i = t.length, n = []; --i > -1;)n = n.concat(z.getTweensOf(t[i], e)); for (i = n.length; --i > -1;)for (s = n[i], r = i; --r > -1;)s === n[r] && n.splice(i, 1) } else if (t._gsTweenID) for (n = et(t).concat(), i = n.length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1); return n || [] }, z.killTweensOf = z.killDelayedCallsTo = function (t, e, i) { "object" == typeof e && (i = e, e = !1); for (var n = z.getTweensOf(t, e), r = n.length; --r > -1;)n[r]._kill(i, t) }; var st = w("plugins.TweenPlugin", function (t, e) { this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = st.prototype }, !0); if (c = st.prototype, st.version = "1.19.0", st.API = 2, c._firstPT = null, c._addTween = U, c.setRatio = X, c._kill = function (t) { var e, i = this._overwriteProps, n = this._firstPT; if (null != t[this._propName]) this._overwriteProps = []; else for (e = i.length; --e > -1;)null != t[i[e]] && i.splice(e, 1); for (; n;)null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next; return !1 }, c._mod = c._roundProps = function (t) { for (var e, i = this._firstPT; i;)e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")], e && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next }, z._onPluginEvent = function (t, e) { var i, n, r, s, o, a = e._firstPT; if ("_onInitAllProps" === t) { for (; a;) { for (o = a._next, n = r; n && n.pr > a.pr;)n = n._next; (a._prev = n ? n._prev : s) ? a._prev._next = a : r = a, (a._next = n) ? n._prev = a : s = a, a = o } a = e._firstPT = r } for (; a;)a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next; return i }, st.activate = function (t) { for (var e = t.length; --e > -1;)t[e].API === st.API && (H[(new t[e])._propName] = t[e]); return !0 }, T.plugin = function (t) { if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition."; var e, i = t.propName, n = t.priority || 0, r = t.overwriteProps, s = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_mod", mod: "_mod", initAll: "_onInitAllProps" }, o = w("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function () { st.call(this, i, n), this._overwriteProps = r || [] }, !0 === t.global), a = o.prototype = new st(i); a.constructor = o, o.API = t.API; for (e in s) "function" == typeof t[e] && (a[s[e]] = t[e]); return o.version = t.version, st.activate([o]), o }, l = i._gsQueue) { for (u = 0; u < l.length; u++)l[u](); for (c in y) y[c].func || i.console.log("GSAP encountered missing dependency: " + c) } p = !1 } }(void 0 !== t && t.exports && void 0 !== i ? i : this || window) }).call(e, i(15)) }, function (t, e) { var i = t.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(); "number" == typeof __g && (__g = i) }, , function (t, e, i) { var n; !function (r, s) { "use strict"; void 0 !== (n = function () { return s() }.call(e, i, e, t)) && (t.exports = n) }(window, function () { "use strict"; function t(t) { var e = parseFloat(t); return -1 == t.indexOf("%") && !isNaN(e) && e } function e() { } function i() { for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0; e < l; e++) { t[h[e]] = 0 } return t } function n(t) { var e = getComputedStyle(t); return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e } function r() { if (!u) { u = !0; var e = document.createElement("div"); e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box"; var i = document.body || document.documentElement; i.appendChild(e); var r = n(e); s.isBoxSizeOuter = o = 200 == t(r.width), i.removeChild(e) } } function s(e) { if (r(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == typeof e && e.nodeType) { var s = n(e); if ("none" == s.display) return i(); var a = {}; a.width = e.offsetWidth, a.height = e.offsetHeight; for (var u = a.isBorderBox = "border-box" == s.boxSizing, c = 0; c < l; c++) { var f = h[c], p = s[f], d = parseFloat(p); a[f] = isNaN(d) ? 0 : d } var _ = a.paddingLeft + a.paddingRight, m = a.paddingTop + a.paddingBottom, g = a.marginLeft + a.marginRight, v = a.marginTop + a.marginBottom, y = a.borderLeftWidth + a.borderRightWidth, x = a.borderTopWidth + a.borderBottomWidth, T = u && o, w = t(s.width); !1 !== w && (a.width = w + (T ? 0 : _ + y)); var b = t(s.height); return !1 !== b && (a.height = b + (T ? 0 : m + x)), a.innerWidth = a.width - (_ + y), a.innerHeight = a.height - (m + x), a.outerWidth = a.width + g, a.outerHeight = a.height + v, a } } var o, a = "undefined" == typeof console ? e : function (t) { console.error(t) }, h = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"], l = h.length, u = !1; return s }) }, function (t, e) { function i() { throw new Error("setTimeout has not been defined") } function n() { throw new Error("clearTimeout has not been defined") } function r(t) { if (u === setTimeout) return setTimeout(t, 0); if ((u === i || !u) && setTimeout) return u = setTimeout, setTimeout(t, 0); try { return u(t, 0) } catch (e) { try { return u.call(null, t, 0) } catch (e) { return u.call(this, t, 0) } } } function s(t) { if (c === clearTimeout) return clearTimeout(t); if ((c === n || !c) && clearTimeout) return c = clearTimeout, clearTimeout(t); try { return c(t) } catch (e) { try { return c.call(null, t) } catch (e) { return c.call(this, t) } } } function o() { _ && p && (_ = !1, p.length ? d = p.concat(d) : m = -1, d.length && a()) } function a() { if (!_) { var t = r(o); _ = !0; for (var e = d.length; e;) { for (p = d, d = []; ++m < e;)p && p[m].run(); m = -1, e = d.length } p = null, _ = !1, s(t) } } function h(t, e) { this.fun = t, this.array = e } function l() { } var u, c, f = t.exports = {}; !function () { try { u = "function" == typeof setTimeout ? setTimeout : i } catch (t) { u = i } try { c = "function" == typeof clearTimeout ? clearTimeout : n } catch (t) { c = n } }(); var p, d = [], _ = !1, m = -1; f.nextTick = function (t) { var e = new Array(arguments.length - 1); if (arguments.length > 1) for (var i = 1; i < arguments.length; i++)e[i - 1] = arguments[i]; d.push(new h(t, e)), 1 !== d.length || _ || r(a) }, h.prototype.run = function () { this.fun.apply(null, this.array) }, f.title = "browser", f.browser = !0, f.env = {}, f.argv = [], f.version = "", f.versions = {}, f.on = l, f.addListener = l, f.once = l, f.off = l, f.removeListener = l, f.removeAllListeners = l, f.emit = l, f.prependListener = l, f.prependOnceListener = l, f.listeners = function (t) { return [] }, f.binding = function (t) { throw new Error("process.binding is not supported") }, f.cwd = function () { return "/" }, f.chdir = function (t) { throw new Error("process.chdir is not supported") }, f.umask = function () { return 0 } }, function (t, e, i) { var n = i(9), r = i(20); t.exports = i(11) ? function (t, e, i) { return n.f(t, e, r(1, i)) } : function (t, e, i) { return t[e] = i, t } }, function (t, e, i) { var n = i(10), r = i(63), s = i(64), o = Object.defineProperty; e.f = i(11) ? Object.defineProperty : function (t, e, i) { if (n(t), e = s(e, !0), n(i), r) try { return o(t, e, i) } catch (t) { } if ("get" in i || "set" in i) throw TypeError("Accessors not supported!"); return "value" in i && (t[e] = i.value), t } }, function (t, e, i) { var n = i(19); t.exports = function (t) { if (!n(t)) throw TypeError(t + " is not an object!"); return t } }, function (t, e, i) { t.exports = !i(30)(function () { return 7 != Object.defineProperty({}, "a", { get: function () { return 7 } }).a }) }, function (t, e) { var i = {}.hasOwnProperty; t.exports = function (t, e) { return i.call(t, e) } }, function (t, e, i) { var n, r; !function (s, o) { "use strict"; n = [i(26), i(6), i(48), i(107)], void 0 !== (r = function (t, e, i, n) { return o(s, t, e, i, n) }.apply(e, n)) && (t.exports = r) }(window, function (t, e, i, n, r) { "use strict"; function s(t, e) { var i = n.getQueryElement(t); if (!i) return void (h && h.error("Bad element for " + this.constructor.namespace + ": " + (i || t))); this.element = i, l && (this.$element = l(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e); var r = ++c; this.element.outlayerGUID = r, f[r] = this, this._create(), this._getOption("initLayout") && this.layout() } function o(t) { function e() { t.apply(this, arguments) } return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e } function a(t) { if ("number" == typeof t) return t; var e = t.match(/(^\d*\.?\d*)(\w*)/), i = e && e[1], n = e && e[2]; return i.length ? (i = parseFloat(i)) * (d[n] || 1) : 0 } var h = t.console, l = t.jQuery, u = function () { }, c = 0, f = {}; s.namespace = "outlayer", s.Item = r, s.defaults = { containerStyle: { position: "relative" }, initLayout: !0, originLeft: !0, originTop: !0, resize: !0, resizeContainer: !0, transitionDuration: "0.4s", hiddenStyle: { opacity: 0, transform: "scale(0.001)" }, visibleStyle: { opacity: 1, transform: "scale(1)" } }; var p = s.prototype; n.extend(p, e.prototype), p.option = function (t) { n.extend(this.options, t) }, p._getOption = function (t) { var e = this.constructor.compatOptions[t]; return e && void 0 !== this.options[e] ? this.options[e] : this.options[t] }, s.compatOptions = { initLayout: "isInitLayout", horizontal: "isHorizontal", layoutInstant: "isLayoutInstant", originLeft: "isOriginLeft", originTop: "isOriginTop", resize: "isResizeBound", resizeContainer: "isResizingContainer" }, p._create = function () { this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize() }, p.reloadItems = function () { this.items = this._itemize(this.element.children) }, p._itemize = function (t) { for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], r = 0; r < e.length; r++) { var s = e[r], o = new i(s, this); n.push(o) } return n }, p._filterFindItemElements = function (t) { return n.filterFindElements(t, this.options.itemSelector) }, p.getItemElements = function () { return this.items.map(function (t) { return t.element }) }, p.layout = function () { this._resetLayout(), this._manageStamps(); var t = this._getOption("layoutInstant"), e = void 0 !== t ? t : !this._isLayoutInited; this.layoutItems(this.items, e), this._isLayoutInited = !0 }, p._init = p.layout, p._resetLayout = function () { this.getSize() }, p.getSize = function () { this.size = i(this.element) }, p._getMeasurement = function (t, e) { var n, r = this.options[t]; r ? ("string" == typeof r ? n = this.element.querySelector(r) : r instanceof HTMLElement && (n = r), this[t] = n ? i(n)[e] : r) : this[t] = 0 }, p.layoutItems = function (t, e) { t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout() }, p._getItemsForLayout = function (t) { return t.filter(function (t) { return !t.isIgnored }) }, p._layoutItems = function (t, e) { if (this._emitCompleteOnItems("layout", t), t && t.length) { var i = []; t.forEach(function (t) { var n = this._getItemLayoutPosition(t); n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n) }, this), this._processLayoutQueue(i) } }, p._getItemLayoutPosition = function () { return { x: 0, y: 0 } }, p._processLayoutQueue = function (t) { this.updateStagger(), t.forEach(function (t, e) { this._positionItem(t.item, t.x, t.y, t.isInstant, e) }, this) }, p.updateStagger = function () { var t = this.options.stagger; return null === t || void 0 === t ? void (this.stagger = 0) : (this.stagger = a(t), this.stagger) }, p._positionItem = function (t, e, i, n, r) { n ? t.goTo(e, i) : (t.stagger(r * this.stagger), t.moveTo(e, i)) }, p._postLayout = function () { this.resizeContainer() }, p.resizeContainer = function () { if (this._getOption("resizeContainer")) { var t = this._getContainerSize(); t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1)) } }, p._getContainerSize = u, p._setContainerMeasure = function (t, e) { if (void 0 !== t) { var i = this.size; i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px" } }, p._emitCompleteOnItems = function (t, e) { function i() { r.dispatchEvent(t + "Complete", null, [e]) } function n() { ++o == s && i() } var r = this, s = e.length; if (!e || !s) return void i(); var o = 0; e.forEach(function (e) { e.once(t, n) }) }, p.dispatchEvent = function (t, e, i) { var n = e ? [e].concat(i) : i; if (this.emitEvent(t, n), l) if (this.$element = this.$element || l(this.element), e) { var r = l.Event(e); r.type = t, this.$element.trigger(r, i) } else this.$element.trigger(t, i) }, p.ignore = function (t) { var e = this.getItem(t); e && (e.isIgnored = !0) }, p.unignore = function (t) { var e = this.getItem(t); e && delete e.isIgnored }, p.stamp = function (t) { (t = this._find(t)) && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this)) }, p.unstamp = function (t) { (t = this._find(t)) && t.forEach(function (t) { n.removeFrom(this.stamps, t), this.unignore(t) }, this) }, p._find = function (t) { if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t) }, p._manageStamps = function () { this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this)) }, p._getBoundingRect = function () { var t = this.element.getBoundingClientRect(), e = this.size; this._boundingRect = { left: t.left + e.paddingLeft + e.borderLeftWidth, top: t.top + e.paddingTop + e.borderTopWidth, right: t.right - (e.paddingRight + e.borderRightWidth), bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth) } }, p._manageStamp = u, p._getElementOffset = function (t) { var e = t.getBoundingClientRect(), n = this._boundingRect, r = i(t); return { left: e.left - n.left - r.marginLeft, top: e.top - n.top - r.marginTop, right: n.right - e.right - r.marginRight, bottom: n.bottom - e.bottom - r.marginBottom } }, p.handleEvent = n.handleEvent, p.bindResize = function () { t.addEventListener("resize", this), this.isResizeBound = !0 }, p.unbindResize = function () { t.removeEventListener("resize", this), this.isResizeBound = !1 }, p.onresize = function () { this.resize() }, n.debounceMethod(s, "onresize", 100), p.resize = function () { this.isResizeBound && this.needsResizeLayout() && this.layout() }, p.needsResizeLayout = function () { var t = i(this.element); return this.size && t && t.innerWidth !== this.size.innerWidth }, p.addItems = function (t) { var e = this._itemize(t); return e.length && (this.items = this.items.concat(e)), e }, p.appended = function (t) { var e = this.addItems(t); e.length && (this.layoutItems(e, !0), this.reveal(e)) }, p.prepended = function (t) { var e = this._itemize(t); if (e.length) { var i = this.items.slice(0); this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i) } }, p.reveal = function (t) { if (this._emitCompleteOnItems("reveal", t), t && t.length) { var e = this.updateStagger(); t.forEach(function (t, i) { t.stagger(i * e), t.reveal() }) } }, p.hide = function (t) { if (this._emitCompleteOnItems("hide", t), t && t.length) { var e = this.updateStagger(); t.forEach(function (t, i) { t.stagger(i * e), t.hide() }) } }, p.revealItemElements = function (t) { var e = this.getItems(t); this.reveal(e) }, p.hideItemElements = function (t) { var e = this.getItems(t); this.hide(e) }, p.getItem = function (t) { for (var e = 0; e < this.items.length; e++) { var i = this.items[e]; if (i.element == t) return i } }, p.getItems = function (t) { t = n.makeArray(t); var e = []; return t.forEach(function (t) { var i = this.getItem(t); i && e.push(i) }, this), e }, p.remove = function (t) { var e = this.getItems(t); this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function (t) { t.remove(), n.removeFrom(this.items, t) }, this) }, p.destroy = function () { var t = this.element.style; t.height = "", t.position = "", t.width = "", this.items.forEach(function (t) { t.destroy() }), this.unbindResize(); var e = this.element.outlayerGUID; delete f[e], delete this.element.outlayerGUID, l && l.removeData(this.element, this.constructor.namespace) }, s.data = function (t) { t = n.getQueryElement(t); var e = t && t.outlayerGUID; return e && f[e] }, s.create = function (t, e) { var i = o(s); return i.defaults = n.extend({}, s.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = o(r), n.htmlInit(i, t), l && l.bridget && l.bridget(t, i), i }; var d = { ms: 1, s: 1e3 }; return s.Item = r, s }) }, function (t, e, i) { var n, r, s; !function (o, a) { r = [i(6), i(13)], n = a, void 0 !== (s = "function" == typeof n ? n.apply(e, r) : n) && (t.exports = s) }(window, function (t, e) { "use strict"; function i(t) { this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size) } var n = i.prototype; return ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach(function (t) { n[t] = function () { return e.prototype[t].apply(this.isotope, arguments) } }), n.needsVerticalResizeLayout = function () { var e = t(this.isotope.element); return this.isotope.size && e && e.innerHeight != this.isotope.size.innerHeight }, n._getMeasurement = function () { this.isotope._getMeasurement.apply(this, arguments) }, n.getColumnWidth = function () { this.getSegmentSize("column", "Width") }, n.getRowHeight = function () { this.getSegmentSize("row", "Height") }, n.getSegmentSize = function (t, e) { var i = t + e, n = "outer" + e; if (this._getMeasurement(i, n), !this[i]) { var r = this.getFirstItemSize(); this[i] = r && r[n] || this.isotope.size["inner" + e] } }, n.getFirstItemSize = function () { var e = this.isotope.filteredItems[0]; return e && e.element && t(e.element) }, n.layout = function () { this.isotope.layout.apply(this.isotope, arguments) }, n.getSize = function () { this.isotope.getSize(), this.size = this.isotope.size }, i.modes = {}, i.create = function (t, e) { function r() { i.apply(this, arguments) } return r.prototype = Object.create(n), r.prototype.constructor = r, e && (r.options = e), r.prototype.namespace = t, i.modes[t] = r, r }, i }) }, function (t, e) { var i; i = function () { return this }(); try { i = i || Function("return this")() || (0, eval)("this") } catch (t) { "object" == typeof window && (i = window) } t.exports = i }, function (t, e) { var i = Math.ceil, n = Math.floor; t.exports = function (t) { return isNaN(t = +t) ? 0 : (t > 0 ? n : i)(t) } }, function (t, e) { t.exports = function (t) { if (void 0 == t) throw TypeError("Can't call method on  " + t); return t } }, function (t, e) { var i = t.exports = { version: "2.5.1" }; "number" == typeof __e && (__e = i) }, function (t, e) { t.exports = function (t) { return "object" == typeof t ? null !== t : "function" == typeof t } }, function (t, e) { t.exports = function (t, e) { return { enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e } } }, function (t, e) { t.exports = {} }, function (t, e, i) { var n = i(35)("keys"), r = i(36); t.exports = function (t) { return n[t] || (n[t] = r(t)) } }, function (t, e, i) { t.exports = i(85) }, function (t, e, i) { "use strict"; (function (e) { function n(t, e) { !r.isUndefined(t) && r.isUndefined(t["Content-Type"]) && (t["Content-Type"] = e) } var r = i(0), s = i(88), o = { "Content-Type": "application/x-www-form-urlencoded" }, a = { adapter: function () { var t; return "undefined" != typeof XMLHttpRequest ? t = i(41) : void 0 !== e && (t = i(41)), t }(), transformRequest: [function (t, e) { return s(e, "Content-Type"), r.isFormData(t) || r.isArrayBuffer(t) || r.isBuffer(t) || r.isStream(t) || r.isFile(t) || r.isBlob(t) ? t : r.isArrayBufferView(t) ? t.buffer : r.isURLSearchParams(t) ? (n(e, "application/x-www-form-urlencoded;charset=utf-8"), t.toString()) : r.isObject(t) ? (n(e, "application/json;charset=utf-8"), JSON.stringify(t)) : t }], transformResponse: [function (t) { if ("string" == typeof t) try { t = JSON.parse(t) } catch (t) { } return t }], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, validateStatus: function (t) { return t >= 200 && t < 300 } }; a.headers = { common: { Accept: "application/json, text/plain, */*" } }, r.forEach(["delete", "get", "head"], function (t) { a.headers[t] = {} }), r.forEach(["post", "put", "patch"], function (t) { a.headers[t] = r.merge(o) }), t.exports = a }).call(e, i(7)) }, function (t, e, i) { var n, r; !function (s, o) { "use strict"; n = [i(26)], void 0 !== (r = function (t) { return o(s, t) }.apply(e, n)) && (t.exports = r) }("undefined" != typeof window ? window : this, function (t, e) { "use strict"; function i(t, e) { for (var i in e) t[i] = e[i]; return t } function n(t) { return Array.isArray(t) ? t : "object" == typeof t && "number" == typeof t.length ? l.call(t) : [t] } function r(t, e, s) { if (!(this instanceof r)) return new r(t, e, s); var o = t; if ("string" == typeof t && (o = document.querySelectorAll(t)), !o) return void h.error("Bad element for imagesLoaded " + (o || t)); this.elements = n(o), this.options = i({}, this.options), "function" == typeof e ? s = e : i(this.options, e), s && this.on("always", s), this.getImages(), a && (this.jqDeferred = new a.Deferred), setTimeout(this.check.bind(this)) } function s(t) { this.img = t } function o(t, e) { this.url = t, this.element = e, this.img = new Image } var a = t.jQuery, h = t.console, l = Array.prototype.slice; r.prototype = Object.create(e.prototype), r.prototype.options = {}, r.prototype.getImages = function () { this.images = [], this.elements.forEach(this.addElementImages, this) }, r.prototype.addElementImages = function (t) { "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t); var e = t.nodeType; if (e && u[e]) { for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) { var r = i[n]; this.addImage(r) } if ("string" == typeof this.options.background) { var s = t.querySelectorAll(this.options.background); for (n = 0; n < s.length; n++) { var o = s[n]; this.addElementBackgroundImages(o) } } } }; var u = { 1: !0, 9: !0, 11: !0 }; return r.prototype.addElementBackgroundImages = function (t) { var e = getComputedStyle(t); if (e) for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage); null !== n;) { var r = n && n[2]; r && this.addBackground(r, t), n = i.exec(e.backgroundImage) } }, r.prototype.addImage = function (t) { var e = new s(t); this.images.push(e) }, r.prototype.addBackground = function (t, e) { var i = new o(t, e); this.images.push(i) }, r.prototype.check = function () { function t(t, i, n) { setTimeout(function () { e.progress(t, i, n) }) } var e = this; if (this.progressedCount = 0, this.hasAnyBroken = !1, !this.images.length) return void this.complete(); this.images.forEach(function (e) { e.once("progress", t), e.check() }) }, r.prototype.progress = function (t, e, i) { this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && h && h.log("progress: " + i, t, e) }, r.prototype.complete = function () { var t = this.hasAnyBroken ? "fail" : "done"; if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) { var e = this.hasAnyBroken ? "reject" : "resolve"; this.jqDeferred[e](this) } }, s.prototype = Object.create(e.prototype), s.prototype.check = function () { if (this.getIsImageComplete()) return void this.confirm(0 !== this.img.naturalWidth, "naturalWidth"); this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.src }, s.prototype.getIsImageComplete = function () { return this.img.complete && this.img.naturalWidth }, s.prototype.confirm = function (t, e) { this.isLoaded = t, this.emitEvent("progress", [this, this.img, e]) }, s.prototype.handleEvent = function (t) { var e = "on" + t.type; this[e] && this[e](t) }, s.prototype.onload = function () { this.confirm(!0, "onload"), this.unbindEvents() }, s.prototype.onerror = function () { this.confirm(!1, "onerror"), this.unbindEvents() }, s.prototype.unbindEvents = function () { this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this) }, o.prototype = Object.create(s.prototype), o.prototype.check = function () { this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents()) }, o.prototype.unbindEvents = function () { this.img.removeEventListener("load", this), this.img.removeEventListener("error", this) }, o.prototype.confirm = function (t, e) { this.isLoaded = t, this.emitEvent("progress", [this, this.element, e]) }, r.makeJQueryPlugin = function (e) { (e = e || t.jQuery) && (a = e, a.fn.imagesLoaded = function (t, e) { return new r(this, t, e).jqDeferred.promise(a(this)) }) }, r.makeJQueryPlugin(), r }) }, function (t, e, i) { var n, r; !function (s, o) { n = o, void 0 !== (r = "function" == typeof n ? n.call(e, i, e, t) : n) && (t.exports = r) }("undefined" != typeof window && window, function () { "use strict"; function t() { } var e = t.prototype; return e.on = function (t, e) { if (t && e) { var i = this._events = this._events || {}, n = i[t] = i[t] || []; return -1 == n.indexOf(e) && n.push(e), this } }, e.once = function (t, e) { if (t && e) { this.on(t, e); var i = this._onceEvents = this._onceEvents || {}; return (i[t] = i[t] || {})[e] = !0, this } }, e.off = function (t, e) { var i = this._events && this._events[t]; if (i && i.length) { var n = i.indexOf(e); return -1 != n && i.splice(n, 1), this } }, e.emitEvent = function (t, e) { var i = this._events && this._events[t]; if (i && i.length) { i = i.slice(0), e = e || []; for (var n = this._onceEvents && this._onceEvents[t], r = 0; r < i.length; r++) { var s = i[r]; n && n[s] && (this.off(t, s), delete n[s]), s.apply(this, e) } return this } }, e.allOff = function () { delete this._events, delete this._onceEvents }, t }) }, function (t, e, i) { t.exports = { default: i(57), __esModule: !0 } }, function (t, e, i) { var n = i(4), r = i(18), s = i(29), o = i(8), a = function (t, e, i) { var h, l, u, c = t & a.F, f = t & a.G, p = t & a.S, d = t & a.P, _ = t & a.B, m = t & a.W, g = f ? r : r[e] || (r[e] = {}), v = g.prototype, y = f ? n : p ? n[e] : (n[e] || {}).prototype; f && (i = e); for (h in i) (l = !c && y && void 0 !== y[h]) && h in g || (u = l ? y[h] : i[h], g[h] = f && "function" != typeof y[h] ? i[h] : _ && l ? s(u, n) : m && y[h] == u ? function (t) { var e = function (e, i, n) { if (this instanceof t) { switch (arguments.length) { case 0: return new t; case 1: return new t(e); case 2: return new t(e, i) }return new t(e, i, n) } return t.apply(this, arguments) }; return e.prototype = t.prototype, e }(u) : d && "function" == typeof u ? s(Function.call, u) : u, d && ((g.virtual || (g.virtual = {}))[h] = u, t & a.R && v && !v[h] && o(v, h, u))) }; a.F = 1, a.G = 2, a.S = 4, a.P = 8, a.B = 16, a.W = 32, a.U = 64, a.R = 128, t.exports = a }, function (t, e, i) { var n = i(62); t.exports = function (t, e, i) { if (n(t), void 0 === e) return t; switch (i) { case 1: return function (i) { return t.call(e, i) }; case 2: return function (i, n) { return t.call(e, i, n) }; case 3: return function (i, n, r) { return t.call(e, i, n, r) } }return function () { return t.apply(e, arguments) } } }, function (t, e) { t.exports = function (t) { try { return !!t() } catch (t) { return !0 } } }, function (t, e, i) { var n = i(19), r = i(4).document, s = n(r) && n(r.createElement); t.exports = function (t) { return s ? r.createElement(t) : {} } }, function (t, e, i) { var n = i(71), r = i(17); t.exports = function (t) { return n(r(t)) } }, function (t, e) { var i = {}.toString; t.exports = function (t) { return i.call(t).slice(8, -1) } }, function (t, e, i) { var n = i(16), r = Math.min; t.exports = function (t) { return t > 0 ? r(n(t), 9007199254740991) : 0 } }, function (t, e, i) { var n = i(4), r = n["__core-js_shared__"] || (n["__core-js_shared__"] = {}); t.exports = function (t) { return r[t] || (r[t] = {}) } }, function (t, e) { var i = 0, n = Math.random(); t.exports = function (t) { return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++i + n).toString(36)) } }, function (t, e) { t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",") }, function (t, e, i) { var n = i(9).f, r = i(12), s = i(2)("toStringTag"); t.exports = function (t, e, i) { t && !r(t = i ? t : t.prototype, s) && n(t, s, { configurable: !0, value: e }) } }, function (t, e, i) { var n = i(17); t.exports = function (t) { return Object(n(t)) } }, function (t, e, i) { "use strict"; t.exports = function (t, e) { return function () { for (var i = new Array(arguments.length), n = 0; n < i.length; n++)i[n] = arguments[n]; return t.apply(e, i) } } }, function (t, e, i) { "use strict"; (function (e) { var n = i(0), r = i(89), s = i(91), o = i(92), a = i(93), h = i(42), l = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || i(94); t.exports = function (t) { return new Promise(function (u, c) { var f = t.data, p = t.headers; n.isFormData(f) && delete p["Content-Type"]; var d = new XMLHttpRequest, _ = "onreadystatechange", m = !1; if ("test" === e.env.NODE_ENV || "undefined" == typeof window || !window.XDomainRequest || "withCredentials" in d || a(t.url) || (d = new window.XDomainRequest, _ = "onload", m = !0, d.onprogress = function () { }, d.ontimeout = function () { }), t.auth) { var g = t.auth.username || "", v = t.auth.password || ""; p.Authorization = "Basic " + l(g + ":" + v) } if (d.open(t.method.toUpperCase(), s(t.url, t.params, t.paramsSerializer), !0), d.timeout = t.timeout, d[_] = function () { if (d && (4 === d.readyState || m) && (0 !== d.status || d.responseURL && 0 === d.responseURL.indexOf("file:"))) { var e = "getAllResponseHeaders" in d ? o(d.getAllResponseHeaders()) : null, i = t.responseType && "text" !== t.responseType ? d.response : d.responseText, n = { data: i, status: 1223 === d.status ? 204 : d.status, statusText: 1223 === d.status ? "No Content" : d.statusText, headers: e, config: t, request: d }; r(u, c, n), d = null } }, d.onerror = function () { c(h("Network Error", t, null, d)), d = null }, d.ontimeout = function () { c(h("timeout of " + t.timeout + "ms exceeded", t, "ECONNABORTED", d)), d = null }, n.isStandardBrowserEnv()) { var y = i(95), x = (t.withCredentials || a(t.url)) && t.xsrfCookieName ? y.read(t.xsrfCookieName) : void 0; x && (p[t.xsrfHeaderName] = x) } if ("setRequestHeader" in d && n.forEach(p, function (t, e) { void 0 === f && "content-type" === e.toLowerCase() ? delete p[e] : d.setRequestHeader(e, t) }), t.withCredentials && (d.withCredentials = !0), t.responseType) try { d.responseType = t.responseType } catch (e) { if ("json" !== t.responseType) throw e } "function" == typeof t.onDownloadProgress && d.addEventListener("progress", t.onDownloadProgress), "function" == typeof t.onUploadProgress && d.upload && d.upload.addEventListener("progress", t.onUploadProgress), t.cancelToken && t.cancelToken.promise.then(function (t) { d && (d.abort(), c(t), d = null) }), void 0 === f && (f = null), d.send(f) }) } }).call(e, i(7)) }, function (t, e, i) { "use strict"; var n = i(90); t.exports = function (t, e, i, r, s) { var o = new Error(t); return n(o, e, i, r, s) } }, function (t, e, i) { "use strict"; t.exports = function (t) { return !(!t || !t.__CANCEL__) } }, function (t, e, i) { "use strict"; function n(t) { this.message = t } n.prototype.toString = function () { return "Cancel" + (this.message ? ": " + this.message : "") }, n.prototype.__CANCEL__ = !0, t.exports = n }, function (t, e, i) { !function (e, i) { t.exports = i() }(0, function () { return function (t) { function e(n) { if (i[n]) return i[n].exports; var r = i[n] = { i: n, l: !1, exports: {} }; return t[n].call(r.exports, r, r.exports, e), r.l = !0, r.exports } var i = {}; return e.m = t, e.c = i, e.i = function (t) { return t }, e.d = function (t, i, n) { e.o(t, i) || Object.defineProperty(t, i, { configurable: !1, enumerable: !0, get: n }) }, e.n = function (t) { var i = t && t.__esModule ? function () { return t.default } : function () { return t }; return e.d(i, "a", i), i }, e.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e) }, e.p = "", e(e.s = 8) }([function (t, e, i) { "use strict"; t.exports = function (t) { return "[object Array]" === Object.prototype.toString.call(t) } }, function (t, e, i) { "use strict"; function n(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") } var r = function () { function t(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i]; n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } return function (e, i, n) { return i && t(e.prototype, i), n && t(e, n), e } }(), s = i(5), o = i(7), a = i(4), h = function () { function t(e, i) { var r = i.location, s = void 0 === r ? 0 : r, o = i.distance, h = void 0 === o ? 100 : o, l = i.threshold, u = void 0 === l ? .6 : l, c = i.maxPatternLength, f = void 0 === c ? 32 : c, p = i.isCaseSensitive, d = void 0 !== p && p, _ = i.tokenSeparator, m = void 0 === _ ? / +/g : _, g = i.findAllMatches, v = void 0 !== g && g, y = i.minMatchCharLength, x = void 0 === y ? 1 : y; n(this, t), this.options = { location: s, distance: h, threshold: u, maxPatternLength: f, isCaseSensitive: d, tokenSeparator: m, findAllMatches: v, minMatchCharLength: x }, this.pattern = this.options.isCaseSensitive ? e : e.toLowerCase(), this.pattern.length <= f && (this.patternAlphabet = a(this.pattern)) } return r(t, [{ key: "search", value: function (t) { if (this.options.isCaseSensitive || (t = t.toLowerCase()), this.pattern === t) return { isMatch: !0, score: 0, matchedIndices: [[0, t.length - 1]] }; var e = this.options, i = e.maxPatternLength, n = e.tokenSeparator; if (this.pattern.length > i) return s(t, this.pattern, n); var r = this.options, a = r.location, h = r.distance, l = r.threshold, u = r.findAllMatches, c = r.minMatchCharLength; return o(t, this.pattern, this.patternAlphabet, { location: a, distance: h, threshold: l, findAllMatches: u, minMatchCharLength: c }) } }]), t }(); t.exports = h }, function (t, e, i) { "use strict"; var n = i(0), r = function t(e, i, r) { if (i) { var s = i.indexOf("."), o = i, a = null; -1 !== s && (o = i.slice(0, s), a = i.slice(s + 1)); var h = e[o]; if (null !== h && void 0 !== h) if (a || "string" != typeof h && "number" != typeof h) if (n(h)) for (var l = 0, u = h.length; l < u; l += 1)t(h[l], a, r); else a && t(h, a, r); else r.push(h.toString()) } else r.push(e); return r }; t.exports = function (t, e) { return r(t, e, []) } }, function (t, e, i) { "use strict"; t.exports = function () { for (var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, i = [], n = -1, r = -1, s = 0, o = t.length; s < o; s += 1) { var a = t[s]; a && -1 === n ? n = s : a || -1 === n || (r = s - 1, r - n + 1 >= e && i.push([n, r]), n = -1) } return t[s - 1] && s - n >= e && i.push([n, s - 1]), i } }, function (t, e, i) { "use strict"; t.exports = function (t) { for (var e = {}, i = t.length, n = 0; n < i; n += 1)e[t.charAt(n)] = 0; for (var r = 0; r < i; r += 1)e[t.charAt(r)] |= 1 << i - r - 1; return e } }, function (t, e, i) { "use strict"; var n = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g; t.exports = function (t, e) { var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : / +/g, r = new RegExp(e.replace(n, "\\$&").replace(i, "|")), s = t.match(r), o = !!s, a = []; if (o) for (var h = 0, l = s.length; h < l; h += 1) { var u = s[h]; a.push([t.indexOf(u), u.length - 1]) } return { score: o ? .5 : 1, isMatch: o, matchedIndices: a } } }, function (t, e, i) { "use strict"; t.exports = function (t, e) { var i = e.errors, n = void 0 === i ? 0 : i, r = e.currentLocation, s = void 0 === r ? 0 : r, o = e.expectedLocation, a = void 0 === o ? 0 : o, h = e.distance, l = void 0 === h ? 100 : h, u = n / t.length, c = Math.abs(a - s); return l ? u + c / l : c ? 1 : u } }, function (t, e, i) { "use strict"; var n = i(6), r = i(3); t.exports = function (t, e, i, s) { for (var o = s.location, a = void 0 === o ? 0 : o, h = s.distance, l = void 0 === h ? 100 : h, u = s.threshold, c = void 0 === u ? .6 : u, f = s.findAllMatches, p = void 0 !== f && f, d = s.minMatchCharLength, _ = void 0 === d ? 1 : d, m = a, g = t.length, v = c, y = t.indexOf(e, m), x = e.length, T = [], w = 0; w < g; w += 1)T[w] = 0; if (-1 !== y) { var b = n(e, { errors: 0, currentLocation: y, expectedLocation: m, distance: l }); if (v = Math.min(b, v), -1 !== (y = t.lastIndexOf(e, m + x))) { var P = n(e, { errors: 0, currentLocation: y, expectedLocation: m, distance: l }); v = Math.min(P, v) } } y = -1; for (var S = [], O = 1, k = x + g, C = 1 << x - 1, R = 0; R < x; R += 1) { for (var A = 0, E = k; A < E;) { n(e, { errors: R, currentLocation: m + E, expectedLocation: m, distance: l }) <= v ? A = E : k = E, E = Math.floor((k - A) / 2 + A) } k = E; var I = Math.max(1, m - E + 1), M = p ? g : Math.min(m + E, g) + x, L = Array(M + 2); L[M + 1] = (1 << R) - 1; for (var z = M; z >= I; z -= 1) { var D = z - 1, F = i[t.charAt(D)]; if (F && (T[D] = 1), L[z] = (L[z + 1] << 1 | 1) & F, 0 !== R && (L[z] |= (S[z + 1] | S[z]) << 1 | 1 | S[z + 1]), L[z] & C && (O = n(e, { errors: R, currentLocation: D, expectedLocation: m, distance: l })) <= v) { if (v = O, (y = D) <= m) break; I = Math.max(1, 2 * m - y) } } if (n(e, { errors: R + 1, currentLocation: m, expectedLocation: m, distance: l }) > v) break; S = L } return { isMatch: y >= 0, score: 0 === O ? .001 : O, matchedIndices: r(T, _) } } }, function (t, e, i) { "use strict"; function n(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") } var r = function () { function t(t, e) { for (var i = 0; i < e.length; i++) { var n = e[i]; n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n) } } return function (e, i, n) { return i && t(e.prototype, i), n && t(e, n), e } }(), s = i(1), o = i(2), a = i(0), h = function () { function t(e, i) { var r = i.location, s = void 0 === r ? 0 : r, a = i.distance, h = void 0 === a ? 100 : a, l = i.threshold, u = void 0 === l ? .6 : l, c = i.maxPatternLength, f = void 0 === c ? 32 : c, p = i.caseSensitive, d = void 0 !== p && p, _ = i.tokenSeparator, m = void 0 === _ ? / +/g : _, g = i.findAllMatches, v = void 0 !== g && g, y = i.minMatchCharLength, x = void 0 === y ? 1 : y, T = i.id, w = void 0 === T ? null : T, b = i.keys, P = void 0 === b ? [] : b, S = i.shouldSort, O = void 0 === S || S, k = i.getFn, C = void 0 === k ? o : k, R = i.sortFn, A = void 0 === R ? function (t, e) { return t.score - e.score } : R, E = i.tokenize, I = void 0 !== E && E, M = i.matchAllTokens, L = void 0 !== M && M, z = i.includeMatches, D = void 0 !== z && z, F = i.includeScore, j = void 0 !== F && F, B = i.verbose, N = void 0 !== B && B; n(this, t), this.options = { location: s, distance: h, threshold: u, maxPatternLength: f, isCaseSensitive: d, tokenSeparator: m, findAllMatches: v, minMatchCharLength: x, id: w, keys: P, includeMatches: D, includeScore: j, shouldSort: O, getFn: C, sortFn: A, verbose: N, tokenize: I, matchAllTokens: L }, this.setCollection(e) } return r(t, [{ key: "setCollection", value: function (t) { return this.list = t, t } }, { key: "search", value: function (t) { this._log('---------\nSearch pattern: "' + t + '"'); var e = this._prepareSearchers(t), i = e.tokenSearchers, n = e.fullSearcher, r = this._search(i, n), s = r.weights, o = r.results; return this._computeScore(s, o), this.options.shouldSort && this._sort(o), this._format(o) } }, { key: "_prepareSearchers", value: function () { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", e = []; if (this.options.tokenize) for (var i = t.split(this.options.tokenSeparator), n = 0, r = i.length; n < r; n += 1)e.push(new s(i[n], this.options)); return { tokenSearchers: e, fullSearcher: new s(t, this.options) } } }, { key: "_search", value: function () { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], e = arguments[1], i = this.list, n = {}, r = []; if ("string" == typeof i[0]) { for (var s = 0, o = i.length; s < o; s += 1)this._analyze({ key: "", value: i[s], record: s, index: s }, { resultMap: n, results: r, tokenSearchers: t, fullSearcher: e }); return { weights: null, results: r } } for (var a = {}, h = 0, l = i.length; h < l; h += 1)for (var u = i[h], c = 0, f = this.options.keys.length; c < f; c += 1) { var p = this.options.keys[c]; if ("string" != typeof p) { if (a[p.name] = { weight: 1 - p.weight || 1 }, p.weight <= 0 || p.weight > 1) throw new Error("Key weight has to be > 0 and <= 1"); p = p.name } else a[p] = { weight: 1 }; this._analyze({ key: p, value: this.options.getFn(u, p), record: u, index: h }, { resultMap: n, results: r, tokenSearchers: t, fullSearcher: e }) } return { weights: a, results: r } } }, { key: "_analyze", value: function (t, e) { var i = t.key, n = t.arrayIndex, r = void 0 === n ? -1 : n, s = t.value, o = t.record, h = t.index, l = e.tokenSearchers, u = void 0 === l ? [] : l, c = e.fullSearcher, f = void 0 === c ? [] : c, p = e.resultMap, d = void 0 === p ? {} : p, _ = e.results, m = void 0 === _ ? [] : _; if (void 0 !== s && null !== s) { var g = !1, v = -1, y = 0; if ("string" == typeof s) { this._log("\nKey: " + ("" === i ? "-" : i)); var x = f.search(s); if (this._log('Full text: "' + s + '", score: ' + x.score), this.options.tokenize) { for (var T = s.split(this.options.tokenSeparator), w = [], b = 0; b < u.length; b += 1) { var P = u[b]; this._log('\nPattern: "' + P.pattern + '"'); for (var S = !1, O = 0; O < T.length; O += 1) { var k = T[O], C = P.search(k), R = {}; C.isMatch ? (R[k] = C.score, g = !0, S = !0, w.push(C.score)) : (R[k] = 1, this.options.matchAllTokens || w.push(1)), this._log('Token: "' + k + '", score: ' + R[k]) } S && (y += 1) } v = w[0]; for (var A = w.length, E = 1; E < A; E += 1)v += w[E]; v /= A, this._log("Token score average:", v) } var I = x.score; v > -1 && (I = (I + v) / 2), this._log("Score average:", I); var M = !this.options.tokenize || !this.options.matchAllTokens || y >= u.length; if (this._log("\nCheck Matches: " + M), (g || x.isMatch) && M) { var L = d[h]; L ? L.output.push({ key: i, arrayIndex: r, value: s, score: I, matchedIndices: x.matchedIndices }) : (d[h] = { item: o, output: [{ key: i, arrayIndex: r, value: s, score: I, matchedIndices: x.matchedIndices }] }, m.push(d[h])) } } else if (a(s)) for (var z = 0, D = s.length; z < D; z += 1)this._analyze({ key: i, arrayIndex: z, value: s[z], record: o, index: h }, { resultMap: d, results: m, tokenSearchers: u, fullSearcher: f }) } } }, { key: "_computeScore", value: function (t, e) { this._log("\n\nComputing score:\n"); for (var i = 0, n = e.length; i < n; i += 1) { for (var r = e[i].output, s = r.length, o = 0, a = 1, h = 0; h < s; h += 1) { var l = t ? t[r[h].key].weight : 1, u = 1 === l ? r[h].score : r[h].score || .001, c = u * l; 1 !== l ? a = Math.min(a, c) : (r[h].nScore = c, o += c) } e[i].score = 1 === a ? o / s : a, this._log(e[i]) } } }, { key: "_sort", value: function (t) { this._log("\n\nSorting...."), t.sort(this.options.sortFn) } }, { key: "_format", value: function (t) { var e = []; this._log("\n\nOutput:\n\n", JSON.stringify(t)); var i = []; this.options.includeMatches && i.push(function (t, e) { var i = t.output; e.matches = []; for (var n = 0, r = i.length; n < r; n += 1) { var s = i[n]; if (0 !== s.matchedIndices.length) { var o = { indices: s.matchedIndices, value: s.value }; s.key && (o.key = s.key), s.hasOwnProperty("arrayIndex") && s.arrayIndex > -1 && (o.arrayIndex = s.arrayIndex), e.matches.push(o) } } }), this.options.includeScore && i.push(function (t, e) { e.score = t.score }); for (var n = 0, r = t.length; n < r; n += 1) { var s = t[n]; if (this.options.id && (s.item = this.options.getFn(s.item, this.options.id)[0]), i.length) { for (var o = { item: s.item }, a = 0, h = i.length; a < h; a += 1)i[a](s, o); e.push(o) } else e.push(s.item) } return e } }, { key: "_log", value: function () { if (this.options.verbose) { var t; (t = console).log.apply(t, arguments) } } }]), t }(); t.exports = h }]) }) }, function (t, e, i) { var n, r; !function (s, o) { n = [i(13), i(6), i(47), i(48), i(112), i(14), i(108), i(110), i(111)], void 0 !== (r = function (t, e, i, n, r, a) { return o(s, t, e, i, n, r, a) }.apply(e, n)) && (t.exports = r) }(window, function (t, e, i, n, r, s, o) { "use strict"; function a(t, e) { return function (i, n) { for (var r = 0; r < t.length; r++) { var s = t[r], o = i.sortData[s], a = n.sortData[s]; if (o > a || o < a) { var h = void 0 !== e[s] ? e[s] : e, l = h ? 1 : -1; return (o > a ? 1 : -1) * l } } return 0 } } var h = t.jQuery, l = String.prototype.trim ? function (t) { return t.trim() } : function (t) { return t.replace(/^\s+|\s+$/g, "") }, u = e.create("isotope", { layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0 }); u.Item = s, u.LayoutMode = o; var c = u.prototype; c._create = function () { this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"]; for (var t in o.modes) this._initLayoutMode(t) }, c.reloadItems = function () { this.itemGUID = 0, e.prototype.reloadItems.call(this) }, c._itemize = function () { for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) { t[i].id = this.itemGUID++ } return this._updateItemsSortData(t), t }, c._initLayoutMode = function (t) { var e = o.modes[t], i = this.options[t] || {}; this.options[t] = e.options ? r.extend(e.options, i) : i, this.modes[t] = new e(this) }, c.layout = function () { if (!this._isLayoutInited && this._getOption("initLayout")) return void this.arrange(); this._layout() }, c._layout = function () { var t = this._getIsInstant(); this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0 }, c.arrange = function (t) { this.option(t), this._getIsInstant(); var e = this._filter(this.items); this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout() }, c._init = c.arrange, c._hideReveal = function (t) { this.reveal(t.needReveal), this.hide(t.needHide) }, c._getIsInstant = function () { var t = this._getOption("layoutInstant"), e = void 0 !== t ? t : !this._isLayoutInited; return this._isInstant = e, e }, c._bindArrangeComplete = function () { function t() { e && i && n && r.dispatchEvent("arrangeComplete", null, [r.filteredItems]) } var e, i, n, r = this; this.once("layoutComplete", function () { e = !0, t() }), this.once("hideComplete", function () { i = !0, t() }), this.once("revealComplete", function () { n = !0, t() }) }, c._filter = function (t) { var e = this.options.filter; e = e || "*"; for (var i = [], n = [], r = [], s = this._getFilterTest(e), o = 0; o < t.length; o++) { var a = t[o]; if (!a.isIgnored) { var h = s(a); h && i.push(a), h && a.isHidden ? n.push(a) : h || a.isHidden || r.push(a) } } return { matches: i, needReveal: n, needHide: r } }, c._getFilterTest = function (t) { return h && this.options.isJQueryFiltering ? function (e) { return h(e.element).is(t) } : "function" == typeof t ? function (e) { return t(e.element) } : function (e) { return n(e.element, t) } }, c.updateSortData = function (t) { var e; t ? (t = r.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e) }, c._getSorters = function () { var t = this.options.getSortData; for (var e in t) { var i = t[e]; this._sorters[e] = f(i) } }, c._updateItemsSortData = function (t) { for (var e = t && t.length, i = 0; e && i < e; i++) { t[i].updateSortData() } }; var f = function () { function t(t) { if ("string" != typeof t) return t; var i = l(t).split(" "), n = i[0], r = n.match(/^\[(.+)\]$/), s = r && r[1], o = e(s, n), a = u.sortDataParsers[i[1]]; return t = a ? function (t) { return t && a(o(t)) } : function (t) { return t && o(t) } } function e(t, e) { return t ? function (e) { return e.getAttribute(t) } : function (t) { var i = t.querySelector(e); return i && i.textContent } } return t }(); u.sortDataParsers = { parseInt: function (t) { return parseInt(t, 10) }, parseFloat: function (t) { return parseFloat(t) } }, c._sort = function () { if (this.options.sortBy) { var t = r.makeArray(this.options.sortBy); this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory)); var e = a(this.sortHistory, this.options.sortAscending); this.filteredItems.sort(e) } }, c._getIsSameSortBy = function (t) { for (var e = 0; e < t.length; e++)if (t[e] != this.sortHistory[e]) return !1; return !0 }, c._mode = function () { var t = this.options.layoutMode, e = this.modes[t]; if (!e) throw new Error("No layout mode: " + t); return e.options = this.options[t], e }, c._resetLayout = function () { e.prototype._resetLayout.call(this), this._mode()._resetLayout() }, c._getItemLayoutPosition = function (t) { return this._mode()._getItemLayoutPosition(t) }, c._manageStamp = function (t) { this._mode()._manageStamp(t) }, c._getContainerSize = function () { return this._mode()._getContainerSize() }, c.needsResizeLayout = function () { return this._mode().needsResizeLayout() }, c.appended = function (t) { var e = this.addItems(t); if (e.length) { var i = this._filterRevealAdded(e); this.filteredItems = this.filteredItems.concat(i) } }, c.prepended = function (t) { var e = this._itemize(t); if (e.length) { this._resetLayout(), this._manageStamps(); var i = this._filterRevealAdded(e); this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items) } }, c._filterRevealAdded = function (t) { var e = this._filter(t); return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches }, c.insert = function (t) { var e = this.addItems(t); if (e.length) { var i, n, r = e.length; for (i = 0; i < r; i++)n = e[i], this.element.appendChild(n.element); var s = this._filter(e).matches; for (i = 0; i < r; i++)e[i].isLayoutInstant = !0; for (this.arrange(), i = 0; i < r; i++)delete e[i].isLayoutInstant; this.reveal(s) } }; var p = c.remove; return c.remove = function (t) { t = r.makeArray(t); var e = this.getItems(t); p.call(this, t); for (var i = e && e.length, n = 0; i && n < i; n++) { var s = e[n]; r.removeFrom(this.filteredItems, s) } }, c.shuffle = function () { for (var t = 0; t < this.items.length; t++) { this.items[t].sortData.random = Math.random() } this.options.sortBy = "random", this._sort(), this._layout() }, c._noTransition = function (t, e) { var i = this.options.transitionDuration; this.options.transitionDuration = 0; var n = t.apply(this, e); return this.options.transitionDuration = i, n }, c.getFilteredItemElements = function () { return this.filteredItems.map(function (t) { return t.element }) }, u }) }, function (t, e, i) { var n, r; !function (s, o) { "use strict"; n = o, void 0 !== (r = "function" == typeof n ? n.call(e, i, e, t) : n) && (t.exports = r) }(window, function () { "use strict"; var t = function () { var t = window.Element.prototype; if (t.matches) return "matches"; if (t.matchesSelector) return "matchesSelector"; for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) { var n = e[i], r = n + "MatchesSelector"; if (t[r]) return r } }(); return function (e, i) { return e[t](i) } }) }, function (t, e, i) { var n, r; !function (s, o) { n = [i(47)], void 0 !== (r = function (t) { return o(s, t) }.apply(e, n)) && (t.exports = r) }(window, function (t, e) { "use strict"; var i = {}; i.extend = function (t, e) { for (var i in e) t[i] = e[i]; return t }, i.modulo = function (t, e) { return (t % e + e) % e }; var n = Array.prototype.slice; i.makeArray = function (t) { return Array.isArray(t) ? t : null === t || void 0 === t ? [] : "object" == typeof t && "number" == typeof t.length ? n.call(t) : [t] }, i.removeFrom = function (t, e) { var i = t.indexOf(e); -1 != i && t.splice(i, 1) }, i.getParent = function (t, i) { for (; t.parentNode && t != document.body;)if (t = t.parentNode, e(t, i)) return t }, i.getQueryElement = function (t) { return "string" == typeof t ? document.querySelector(t) : t }, i.handleEvent = function (t) { var e = "on" + t.type; this[e] && this[e](t) }, i.filterFindElements = function (t, n) { t = i.makeArray(t); var r = []; return t.forEach(function (t) { if (t instanceof HTMLElement) { if (!n) return void r.push(t); e(t, n) && r.push(t); for (var i = t.querySelectorAll(n), s = 0; s < i.length; s++)r.push(i[s]) } }), r }, i.debounceMethod = function (t, e, i) { i = i || 100; var n = t.prototype[e], r = e + "Timeout"; t.prototype[e] = function () { var t = this[r]; clearTimeout(t); var e = arguments, s = this; this[r] = setTimeout(function () { n.apply(s, e), delete s[r] }, i) } }, i.docReady = function (t) { var e = document.readyState; "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t) }, i.toDashed = function (t) { return t.replace(/(.)([A-Z])/g, function (t, e, i) { return e + "-" + i }).toLowerCase() }; var r = t.console; return i.htmlInit = function (e, n) { i.docReady(function () { var s = i.toDashed(n), o = "data-" + s, a = document.querySelectorAll("[" + o + "]"), h = document.querySelectorAll(".js-" + s), l = i.makeArray(a).concat(i.makeArray(h)), u = o + "-options", c = t.jQuery; l.forEach(function (t) { var i, s = t.getAttribute(o) || t.getAttribute(u); try { i = s && JSON.parse(s) } catch (e) { return void (r && r.error("Error parsing " + o + " on " + t.className + ": " + e)) } var a = new e(t, i); c && c.data(t, n, a) }) }) }, i }) }, , , , , , , , , function (t, e, i) { i(58), i(76), t.exports = i(18).Array.from }, function (t, e, i) { "use strict"; var n = i(59)(!0); i(60)(String, "String", function (t) { this._t = String(t), this._i = 0 }, function () { var t, e = this._t, i = this._i; return i >= e.length ? { value: void 0, done: !0 } : (t = n(e, i), this._i += t.length, { value: t, done: !1 }) }) }, function (t, e, i) { var n = i(16), r = i(17); t.exports = function (t) { return function (e, i) { var s, o, a = String(r(e)), h = n(i), l = a.length; return h < 0 || h >= l ? t ? "" : void 0 : (s = a.charCodeAt(h), s < 55296 || s > 56319 || h + 1 === l || (o = a.charCodeAt(h + 1)) < 56320 || o > 57343 ? t ? a.charAt(h) : s : t ? a.slice(h, h + 2) : o - 56320 + (s - 55296 << 10) + 65536) } } }, function (t, e, i) { "use strict"; var n = i(61), r = i(28), s = i(65), o = i(8), a = i(12), h = i(21), l = i(66), u = i(38), c = i(75), f = i(2)("iterator"), p = !([].keys && "next" in [].keys()), d = function () { return this }; t.exports = function (t, e, i, _, m, g, v) { l(i, e, _); var y, x, T, w = function (t) { if (!p && t in O) return O[t]; switch (t) { case "keys": case "values": return function () { return new i(this, t) } }return function () { return new i(this, t) } }, b = e + " Iterator", P = "values" == m, S = !1, O = t.prototype, k = O[f] || O["@@iterator"] || m && O[m], C = k || w(m), R = m ? P ? w("entries") : C : void 0, A = "Array" == e ? O.entries || k : k; if (A && (T = c(A.call(new t))) !== Object.prototype && T.next && (u(T, b, !0), n || a(T, f) || o(T, f, d)), P && k && "values" !== k.name && (S = !0, C = function () { return k.call(this) }), n && !v || !p && !S && O[f] || o(O, f, C), h[e] = C, h[b] = d, m) if (y = { values: P ? C : w("values"), keys: g ? C : w("keys"), entries: R }, v) for (x in y) x in O || s(O, x, y[x]); else r(r.P + r.F * (p || S), e, y); return y } }, function (t, e) { t.exports = !0 }, function (t, e) { t.exports = function (t) { if ("function" != typeof t) throw TypeError(t + " is not a function!"); return t } }, function (t, e, i) { t.exports = !i(11) && !i(30)(function () { return 7 != Object.defineProperty(i(31)("div"), "a", { get: function () { return 7 } }).a }) }, function (t, e, i) { var n = i(19); t.exports = function (t, e) { if (!n(t)) return t; var i, r; if (e && "function" == typeof (i = t.toString) && !n(r = i.call(t))) return r; if ("function" == typeof (i = t.valueOf) && !n(r = i.call(t))) return r; if (!e && "function" == typeof (i = t.toString) && !n(r = i.call(t))) return r; throw TypeError("Can't convert object to primitive value") } }, function (t, e, i) { t.exports = i(8) }, function (t, e, i) { "use strict"; var n = i(67), r = i(20), s = i(38), o = {}; i(8)(o, i(2)("iterator"), function () { return this }), t.exports = function (t, e, i) { t.prototype = n(o, { next: r(1, i) }), s(t, e + " Iterator") } }, function (t, e, i) { var n = i(10), r = i(68), s = i(37), o = i(22)("IE_PROTO"), a = function () { }, h = function () { var t, e = i(31)("iframe"), n = s.length; for (e.style.display = "none", i(74).appendChild(e), e.src = "javascript:", t = e.contentWindow.document, t.open(), t.write("<script>document.F=Object<\/script>"), t.close(), h = t.F; n--;)delete h.prototype[s[n]]; return h() }; t.exports = Object.create || function (t, e) { var i; return null !== t ? (a.prototype = n(t), i = new a, a.prototype = null, i[o] = t) : i = h(), void 0 === e ? i : r(i, e) } }, function (t, e, i) { var n = i(9), r = i(10), s = i(69); t.exports = i(11) ? Object.defineProperties : function (t, e) { r(t); for (var i, o = s(e), a = o.length, h = 0; a > h;)n.f(t, i = o[h++], e[i]); return t } }, function (t, e, i) { var n = i(70), r = i(37); t.exports = Object.keys || function (t) { return n(t, r) } }, function (t, e, i) { var n = i(12), r = i(32), s = i(72)(!1), o = i(22)("IE_PROTO"); t.exports = function (t, e) { var i, a = r(t), h = 0, l = []; for (i in a) i != o && n(a, i) && l.push(i); for (; e.length > h;)n(a, i = e[h++]) && (~s(l, i) || l.push(i)); return l } }, function (t, e, i) { var n = i(33); t.exports = Object("z").propertyIsEnumerable(0) ? Object : function (t) { return "String" == n(t) ? t.split("") : Object(t) } }, function (t, e, i) { var n = i(32), r = i(34), s = i(73); t.exports = function (t) { return function (e, i, o) { var a, h = n(e), l = r(h.length), u = s(o, l); if (t && i != i) { for (; l > u;)if ((a = h[u++]) != a) return !0 } else for (; l > u; u++)if ((t || u in h) && h[u] === i) return t || u || 0; return !t && -1 } } }, function (t, e, i) { var n = i(16), r = Math.max, s = Math.min; t.exports = function (t, e) { return t = n(t), t < 0 ? r(t + e, 0) : s(t, e) } }, function (t, e, i) { var n = i(4).document; t.exports = n && n.documentElement }, function (t, e, i) { var n = i(12), r = i(39), s = i(22)("IE_PROTO"), o = Object.prototype; t.exports = Object.getPrototypeOf || function (t) { return t = r(t), n(t, s) ? t[s] : "function" == typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? o : null } }, function (t, e, i) { "use strict"; var n = i(29), r = i(28), s = i(39), o = i(77), a = i(78), h = i(34), l = i(79), u = i(80); r(r.S + r.F * !i(82)(function (t) { Array.from(t) }), "Array", { from: function (t) { var e, i, r, c, f = s(t), p = "function" == typeof this ? this : Array, d = arguments.length, _ = d > 1 ? arguments[1] : void 0, m = void 0 !== _, g = 0, v = u(f); if (m && (_ = n(_, d > 2 ? arguments[2] : void 0, 2)), void 0 == v || p == Array && a(v)) for (e = h(f.length), i = new p(e); e > g; g++)l(i, g, m ? _(f[g], g) : f[g]); else for (c = v.call(f), i = new p; !(r = c.next()).done; g++)l(i, g, m ? o(c, _, [r.value, g], !0) : r.value); return i.length = g, i } }) }, function (t, e, i) { var n = i(10); t.exports = function (t, e, i, r) { try { return r ? e(n(i)[0], i[1]) : e(i) } catch (e) { var s = t.return; throw void 0 !== s && n(s.call(t)), e } } }, function (t, e, i) { var n = i(21), r = i(2)("iterator"), s = Array.prototype; t.exports = function (t) { return void 0 !== t && (n.Array === t || s[r] === t) } }, function (t, e, i) { "use strict"; var n = i(9), r = i(20); t.exports = function (t, e, i) { e in t ? n.f(t, e, r(0, i)) : t[e] = i } }, function (t, e, i) { var n = i(81), r = i(2)("iterator"), s = i(21); t.exports = i(18).getIteratorMethod = function (t) { if (void 0 != t) return t[r] || t["@@iterator"] || s[n(t)] } }, function (t, e, i) { var n = i(33), r = i(2)("toStringTag"), s = "Arguments" == n(function () { return arguments }()), o = function (t, e) { try { return t[e] } catch (t) { } }; t.exports = function (t) { var e, i, a; return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (i = o(e = Object(t), r)) ? i : s ? n(e) : "Object" == (a = n(e)) && "function" == typeof e.callee ? "Arguments" : a } }, function (t, e, i) { var n = i(2)("iterator"), r = !1; try { var s = [7][n](); s.return = function () { r = !0 }, Array.from(s, function () { throw 2 }) } catch (t) { } t.exports = function (t, e) { if (!e && !r) return !1; var i = !1; try { var s = [7], o = s[n](); o.next = function () { return { done: i = !0 } }, s[n] = function () { return o }, t(s) } catch (t) { } return i } }, , , function (t, e, i) { "use strict"; function n(t) { var e = new o(t), i = s(o.prototype.request, e); return r.extend(i, o.prototype, e), r.extend(i, e), i } var r = i(0), s = i(40), o = i(87), a = i(24), h = n(a); h.Axios = o, h.create = function (t) { return n(r.merge(a, t)) }, h.Cancel = i(44), h.CancelToken = i(101), h.isCancel = i(43), h.all = function (t) { return Promise.all(t) }, h.spread = i(102), t.exports = h, t.exports.default = h }, function (t, e) { function i(t) { return !!t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t) } function n(t) { return "function" == typeof t.readFloatLE && "function" == typeof t.slice && i(t.slice(0, 0)) } t.exports = function (t) { return null != t && (i(t) || n(t) || !!t._isBuffer) } }, function (t, e, i) { "use strict"; function n(t) { this.defaults = t, this.interceptors = { request: new o, response: new o } } var r = i(24), s = i(0), o = i(96), a = i(97); n.prototype.request = function (t) { "string" == typeof t && (t = s.merge({ url: arguments[0] }, arguments[1])), t = s.merge(r, { method: "get" }, this.defaults, t), t.method = t.method.toLowerCase(); var e = [a, void 0], i = Promise.resolve(t); for (this.interceptors.request.forEach(function (t) { e.unshift(t.fulfilled, t.rejected) }), this.interceptors.response.forEach(function (t) { e.push(t.fulfilled, t.rejected) }); e.length;)i = i.then(e.shift(), e.shift()); return i }, s.forEach(["delete", "get", "head", "options"], function (t) { n.prototype[t] = function (e, i) { return this.request(s.merge(i || {}, { method: t, url: e })) } }), s.forEach(["post", "put", "patch"], function (t) { n.prototype[t] = function (e, i, n) { return this.request(s.merge(n || {}, { method: t, url: e, data: i })) } }), t.exports = n }, function (t, e, i) { "use strict"; var n = i(0); t.exports = function (t, e) { n.forEach(t, function (i, n) { n !== e && n.toUpperCase() === e.toUpperCase() && (t[e] = i, delete t[n]) }) } }, function (t, e, i) { "use strict"; var n = i(42); t.exports = function (t, e, i) { var r = i.config.validateStatus; i.status && r && !r(i.status) ? e(n("Request failed with status code " + i.status, i.config, null, i.request, i)) : t(i) } }, function (t, e, i) { "use strict"; t.exports = function (t, e, i, n, r) { return t.config = e, i && (t.code = i), t.request = n, t.response = r, t } }, function (t, e, i) { "use strict"; function n(t) { return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]") } var r = i(0); t.exports = function (t, e, i) { if (!e) return t; var s; if (i) s = i(e); else if (r.isURLSearchParams(e)) s = e.toString(); else { var o = []; r.forEach(e, function (t, e) { null !== t && void 0 !== t && (r.isArray(t) ? e += "[]" : t = [t], r.forEach(t, function (t) { r.isDate(t) ? t = t.toISOString() : r.isObject(t) && (t = JSON.stringify(t)), o.push(n(e) + "=" + n(t)) })) }), s = o.join("&") } return s && (t += (-1 === t.indexOf("?") ? "?" : "&") + s), t } }, function (t, e, i) { "use strict"; var n = i(0), r = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]; t.exports = function (t) { var e, i, s, o = {}; return t ? (n.forEach(t.split("\n"), function (t) { if (s = t.indexOf(":"), e = n.trim(t.substr(0, s)).toLowerCase(), i = n.trim(t.substr(s + 1)), e) { if (o[e] && r.indexOf(e) >= 0) return; o[e] = "set-cookie" === e ? (o[e] ? o[e] : []).concat([i]) : o[e] ? o[e] + ", " + i : i } }), o) : o } }, function (t, e, i) { "use strict"; var n = i(0); t.exports = n.isStandardBrowserEnv() ? function () { function t(t) { var e = t; return i && (r.setAttribute("href", e), e = r.href), r.setAttribute("href", e), { href: r.href, protocol: r.protocol ? r.protocol.replace(/:$/, "") : "", host: r.host, search: r.search ? r.search.replace(/^\?/, "") : "", hash: r.hash ? r.hash.replace(/^#/, "") : "", hostname: r.hostname, port: r.port, pathname: "/" === r.pathname.charAt(0) ? r.pathname : "/" + r.pathname } } var e, i = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a"); return e = t(window.location.href), function (i) { var r = n.isString(i) ? t(i) : i; return r.protocol === e.protocol && r.host === e.host } }() : function () { return function () { return !0 } }() }, function (t, e, i) { "use strict"; function n() { this.message = "String contains an invalid character" } function r(t) { for (var e, i, r = String(t), o = "", a = 0, h = s; r.charAt(0 | a) || (h = "=", a % 1); o += h.charAt(63 & e >> 8 - a % 1 * 8)) { if ((i = r.charCodeAt(a += .75)) > 255) throw new n; e = e << 8 | i } return o } var s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="; n.prototype = new Error, n.prototype.code = 5, n.prototype.name = "InvalidCharacterError", t.exports = r }, function (t, e, i) { "use strict"; var n = i(0); t.exports = n.isStandardBrowserEnv() ? function () { return { write: function (t, e, i, r, s, o) { var a = []; a.push(t + "=" + encodeURIComponent(e)), n.isNumber(i) && a.push("expires=" + new Date(i).toGMTString()), n.isString(r) && a.push("path=" + r), n.isString(s) && a.push("domain=" + s), !0 === o && a.push("secure"), document.cookie = a.join("; ") }, read: function (t) { var e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)")); return e ? decodeURIComponent(e[3]) : null }, remove: function (t) { this.write(t, "", Date.now() - 864e5) } } }() : function () { return { write: function () { }, read: function () { return null }, remove: function () { } } }() }, function (t, e, i) { "use strict"; function n() { this.handlers = [] } var r = i(0); n.prototype.use = function (t, e) { return this.handlers.push({ fulfilled: t, rejected: e }), this.handlers.length - 1 }, n.prototype.eject = function (t) { this.handlers[t] && (this.handlers[t] = null) }, n.prototype.forEach = function (t) { r.forEach(this.handlers, function (e) { null !== e && t(e) }) }, t.exports = n }, function (t, e, i) { "use strict"; function n(t) { t.cancelToken && t.cancelToken.throwIfRequested() } var r = i(0), s = i(98), o = i(43), a = i(24), h = i(99), l = i(100); t.exports = function (t) { return n(t), t.baseURL && !h(t.url) && (t.url = l(t.baseURL, t.url)), t.headers = t.headers || {}, t.data = s(t.data, t.headers, t.transformRequest), t.headers = r.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers || {}), r.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (e) { delete t.headers[e] }), (t.adapter || a.adapter)(t).then(function (e) { return n(t), e.data = s(e.data, e.headers, t.transformResponse), e }, function (e) { return o(e) || (n(t), e && e.response && (e.response.data = s(e.response.data, e.response.headers, t.transformResponse))), Promise.reject(e) }) } }, function (t, e, i) { "use strict"; var n = i(0); t.exports = function (t, e, i) { return n.forEach(i, function (i) { t = i(t, e) }), t } }, function (t, e, i) { "use strict"; t.exports = function (t) { return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t) } }, function (t, e, i) { "use strict"; t.exports = function (t, e) { return e ? t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "") : t } }, function (t, e, i) { "use strict"; function n(t) { if ("function" != typeof t) throw new TypeError("executor must be a function."); var e; this.promise = new Promise(function (t) { e = t }); var i = this; t(function (t) { i.reason || (i.reason = new r(t), e(i.reason)) }) } var r = i(44); n.prototype.throwIfRequested = function () { if (this.reason) throw this.reason }, n.source = function () { var t; return { token: new n(function (e) { t = e }), cancel: t } }, t.exports = n }, function (t, e, i) { "use strict"; t.exports = function (t) { return function (e) { return t.apply(null, e) } } }, , , , , function (t, e, i) { var n, r, s; !function (o, a) { r = [i(26), i(6)], n = a, void 0 !== (s = "function" == typeof n ? n.apply(e, r) : n) && (t.exports = s) }(window, function (t, e) { "use strict"; function i(t) { for (var e in t) return !1; return null, !0 } function n(t, e) { t && (this.element = t, this.layout = e, this.position = { x: 0, y: 0 }, this._create()) } var r = document.documentElement.style, s = "string" == typeof r.transition ? "transition" : "WebkitTransition", o = "string" == typeof r.transform ? "transform" : "WebkitTransform", a = { WebkitTransition: "webkitTransitionEnd", transition: "transitionend" }[s], h = { transform: o, transition: s, transitionDuration: s + "Duration", transitionProperty: s + "Property", transitionDelay: s + "Delay" }, l = n.prototype = Object.create(t.prototype); l.constructor = n, l._create = function () { this._transn = { ingProperties: {}, clean: {}, onEnd: {} }, this.css({ position: "absolute" }) }, l.handleEvent = function (t) { var e = "on" + t.type; this[e] && this[e](t) }, l.getSize = function () { this.size = e(this.element) }, l.css = function (t) { var e = this.element.style; for (var i in t) { e[h[i] || i] = t[i] } }, l.getPosition = function () { var t = getComputedStyle(this.element), e = this.layout._getOption("originLeft"), i = this.layout._getOption("originTop"), n = t[e ? "left" : "right"], r = t[i ? "top" : "bottom"], s = parseFloat(n), o = parseFloat(r), a = this.layout.size; -1 != n.indexOf("%") && (s = s / 100 * a.width), -1 != r.indexOf("%") && (o = o / 100 * a.height), s = isNaN(s) ? 0 : s, o = isNaN(o) ? 0 : o, s -= e ? a.paddingLeft : a.paddingRight, o -= i ? a.paddingTop : a.paddingBottom, this.position.x = s, this.position.y = o }, l.layoutPosition = function () { var t = this.layout.size, e = {}, i = this.layout._getOption("originLeft"), n = this.layout._getOption("originTop"), r = i ? "paddingLeft" : "paddingRight", s = i ? "left" : "right", o = i ? "right" : "left", a = this.position.x + t[r]; e[s] = this.getXValue(a), e[o] = ""; var h = n ? "paddingTop" : "paddingBottom", l = n ? "top" : "bottom", u = n ? "bottom" : "top", c = this.position.y + t[h]; e[l] = this.getYValue(c), e[u] = "", this.css(e), this.emitEvent("layout", [this]) }, l.getXValue = function (t) { var e = this.layout._getOption("horizontal"); return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px" }, l.getYValue = function (t) { var e = this.layout._getOption("horizontal"); return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px" }, l._transitionTo = function (t, e) { this.getPosition(); var i = this.position.x, n = this.position.y, r = t == this.position.x && e == this.position.y; if (this.setPosition(t, e), r && !this.isTransitioning) return void this.layoutPosition(); var s = t - i, o = e - n, a = {}; a.transform = this.getTranslate(s, o), this.transition({ to: a, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 }) }, l.getTranslate = function (t, e) { var i = this.layout._getOption("originLeft"), n = this.layout._getOption("originTop"); return t = i ? t : -t, e = n ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)" }, l.goTo = function (t, e) { this.setPosition(t, e), this.layoutPosition() }, l.moveTo = l._transitionTo, l.setPosition = function (t, e) { this.position.x = parseFloat(t), this.position.y = parseFloat(e) }, l._nonTransition = function (t) { this.css(t.to), t.isCleaning && this._removeStyles(t.to); for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this) }, l.transition = function (t) { if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t); var e = this._transn; for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i]; for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0); if (t.from) { this.css(t.from); this.element.offsetHeight; null } this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0 }; var u = "opacity," + function (t) { return t.replace(/([A-Z])/g, function (t) { return "-" + t.toLowerCase() }) }(o); l.enableTransition = function () { if (!this.isTransitioning) { var t = this.layout.options.transitionDuration; t = "number" == typeof t ? t + "ms" : t, this.css({ transitionProperty: u, transitionDuration: t, transitionDelay: this.staggerDelay || 0 }), this.element.addEventListener(a, this, !1) } }, l.onwebkitTransitionEnd = function (t) { this.ontransitionend(t) }, l.onotransitionend = function (t) { this.ontransitionend(t) }; var c = { "-webkit-transform": "transform" }; l.ontransitionend = function (t) { if (t.target === this.element) { var e = this._transn, n = c[t.propertyName] || t.propertyName; if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) { e.onEnd[n].call(this), delete e.onEnd[n] } this.emitEvent("transitionEnd", [this]) } }, l.disableTransition = function () { this.removeTransitionStyles(), this.element.removeEventListener(a, this, !1), this.isTransitioning = !1 }, l._removeStyles = function (t) { var e = {}; for (var i in t) e[i] = ""; this.css(e) }; var f = { transitionProperty: "", transitionDuration: "", transitionDelay: "" }; return l.removeTransitionStyles = function () { this.css(f) }, l.stagger = function (t) { t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms" }, l.removeElem = function () { this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]) }, l.remove = function () { if (!s || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem(); this.once("transitionEnd", function () { this.removeElem() }), this.hide() }, l.reveal = function () { delete this.isHidden, this.css({ display: "" }); var t = this.layout.options, e = {}; e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({ from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0, onTransitionEnd: e }) }, l.onRevealTransitionEnd = function () { this.isHidden || this.emitEvent("reveal") }, l.getHideRevealTransitionEndProperty = function (t) { var e = this.layout.options[t]; if (e.opacity) return "opacity"; for (var i in e) return i }, l.hide = function () { this.isHidden = !0, this.css({ display: "" }); var t = this.layout.options, e = {}; e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({ from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: e }) }, l.onHideTransitionEnd = function () { this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide")) }, l.destroy = function () { this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" }) }, n }) }, function (t, e, i) { var n, r, s; !function (o, a) { r = [i(14), i(109)], n = a, void 0 !== (s = "function" == typeof n ? n.apply(e, r) : n) && (t.exports = s) }(window, function (t, e) { "use strict"; var i = t.create("masonry"), n = i.prototype, r = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 }; for (var s in e.prototype) r[s] || (n[s] = e.prototype[s]); var o = n.measureColumns; n.measureColumns = function () { this.items = this.isotope.filteredItems, o.call(this) }; var a = n._getOption; return n._getOption = function (t) { return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : a.apply(this.isotope, arguments) }, i }) }, function (t, e, i) { var n, r, s; !function (o, a) { r = [i(13), i(6)], n = a, void 0 !== (s = "function" == typeof n ? n.apply(e, r) : n) && (t.exports = s) }(window, function (t, e) { "use strict"; var i = t.create("masonry"); i.compatOptions.fitWidth = "isFitWidth"; var n = i.prototype; return n._resetLayout = function () { this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = []; for (var t = 0; t < this.cols; t++)this.colYs.push(0); this.maxY = 0, this.horizontalColIndex = 0 }, n.measureColumns = function () { if (this.getContainerWidth(), !this.columnWidth) { var t = this.items[0], i = t && t.element; this.columnWidth = i && e(i).outerWidth || this.containerWidth } var n = this.columnWidth += this.gutter, r = this.containerWidth + this.gutter, s = r / n, o = n - r % n, a = o && o < 1 ? "round" : "floor"; s = Math[a](s), this.cols = Math.max(s, 1) }, n.getContainerWidth = function () { var t = this._getOption("fitWidth"), i = t ? this.element.parentNode : this.element, n = e(i); this.containerWidth = n && n.innerWidth }, n._getItemLayoutPosition = function (t) { t.getSize(); var e = t.size.outerWidth % this.columnWidth, i = e && e < 1 ? "round" : "ceil", n = Math[i](t.size.outerWidth / this.columnWidth); n = Math.min(n, this.cols); for (var r = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", s = this[r](n, t), o = { x: this.columnWidth * s.col, y: s.y }, a = s.y + t.size.outerHeight, h = n + s.col, l = s.col; l < h; l++)this.colYs[l] = a; return o }, n._getTopColPosition = function (t) { var e = this._getTopColGroup(t), i = Math.min.apply(Math, e); return { col: e.indexOf(i), y: i } }, n._getTopColGroup = function (t) { if (t < 2) return this.colYs; for (var e = [], i = this.cols + 1 - t, n = 0; n < i; n++)e[n] = this._getColGroupY(n, t); return e }, n._getColGroupY = function (t, e) { if (e < 2) return this.colYs[t]; var i = this.colYs.slice(t, t + e); return Math.max.apply(Math, i) }, n._getHorizontalColPosition = function (t, e) { var i = this.horizontalColIndex % this.cols; i = t > 1 && i + t > this.cols ? 0 : i; var n = e.size.outerWidth && e.size.outerHeight; return this.horizontalColIndex = n ? i + t : this.horizontalColIndex, { col: i, y: this._getColGroupY(i, t) } }, n._manageStamp = function (t) { var i = e(t), n = this._getElementOffset(t), r = this._getOption("originLeft"), s = r ? n.left : n.right, o = s + i.outerWidth, a = Math.floor(s / this.columnWidth); a = Math.max(0, a); var h = Math.floor(o / this.columnWidth); h -= o % this.columnWidth ? 0 : 1, h = Math.min(this.cols - 1, h); for (var l = this._getOption("originTop"), u = (l ? n.top : n.bottom) + i.outerHeight, c = a; c <= h; c++)this.colYs[c] = Math.max(u, this.colYs[c]) }, n._getContainerSize = function () { this.maxY = Math.max.apply(Math, this.colYs); var t = { height: this.maxY }; return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t }, n._getContainerFitWidth = function () { for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];)t++; return (this.cols - t) * this.columnWidth - this.gutter }, n.needsResizeLayout = function () { var t = this.containerWidth; return this.getContainerWidth(), t != this.containerWidth }, i }) }, function (t, e, i) { var n, r, s; !function (o, a) { r = [i(14)], n = a, void 0 !== (s = "function" == typeof n ? n.apply(e, r) : n) && (t.exports = s) }(window, function (t) { "use strict"; var e = t.create("fitRows"), i = e.prototype; return i._resetLayout = function () { this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth") }, i._getItemLayoutPosition = function (t) { t.getSize(); var e = t.size.outerWidth + this.gutter, i = this.isotope.size.innerWidth + this.gutter; 0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY); var n = { x: this.x, y: this.y }; return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, n }, i._getContainerSize = function () { return { height: this.maxY } }, e }) }, function (t, e, i) { var n, r, s; !function (o, a) { r = [i(14)], n = a, void 0 !== (s = "function" == typeof n ? n.apply(e, r) : n) && (t.exports = s) }(window, function (t) { "use strict"; var e = t.create("vertical", { horizontalAlignment: 0 }), i = e.prototype; return i._resetLayout = function () { this.y = 0 }, i._getItemLayoutPosition = function (t) { t.getSize(); var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment, i = this.y; return this.y += t.size.outerHeight, { x: e, y: i } }, i._getContainerSize = function () { return { height: this.y } }, e }) }, function (t, e, i) { var n, r, s; !function (o, a) { r = [i(13)], n = a, void 0 !== (s = "function" == typeof n ? n.apply(e, r) : n) && (t.exports = s) }(window, function (t) { "use strict"; function e() { t.Item.apply(this, arguments) } var i = e.prototype = Object.create(t.Item.prototype), n = i._create; i._create = function () { this.id = this.layout.itemGUID++, n.call(this), this.sortData = {} }, i.updateSortData = function () { if (!this.isIgnored) { this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random(); var t = this.layout.options.getSortData, e = this.layout._sorters; for (var i in t) { var n = e[i]; this.sortData[i] = n(this.element, this) } } }; var r = i.destroy; return i.destroy = function () { r.apply(this, arguments), this.css({ display: "" }) }, e }) }]);;
webpackJsonp([0], {
    49: function (t, e, n) {
        n(50), n(55), n(56), n(83), t.exports = n(84)
    },
    5: function (t, e, n) {
        "use strict";

        function i() {
            return window.getComputedStyle(document.body, ":after").getPropertyValue("content")
        }

        function o() {
            var t = document.documentElement;
            return (window.pageYOffset || t.scrollTop) - (t.clientTop || 0)
        }
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.getBreakpoint = i, e.getScrollTop = o
    },
    50: function (t, e, n) {
        "use strict";
        (0, n(51).polyfill)(), window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function (t, e) {
            e = e || window;
            for (var n = 0; n < this.length; n++) t.call(e, this[n], n, this)
        }),
            function (t) {
                t.forEach(function (t) {
                    t.hasOwnProperty("remove") || Object.defineProperty(t, "remove", {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        value: function () {
                            null !== this.parentNode && this.parentNode.removeChild(this)
                        }
                    })
                })
            }([Element.prototype, CharacterData.prototype, DocumentType.prototype])
    },
    51: function (t, e, n) {
        (function (i, o, r) {
            var s;
            (function () {
                "use strict";

                function a(t) {
                    return "function" == typeof t || "object" == typeof t && null !== t
                }

                function c(t) {
                    return "function" == typeof t
                }

                function u(t) {
                    return "object" == typeof t && null !== t
                }

                function l(t) {
                    B = t
                }

                function f(t) {
                    W = t
                }

                function d() {
                    return function () {
                        $(v)
                    }
                }

                function h() {
                    return function () {
                        setTimeout(v, 1)
                    }
                }

                function v() {
                    for (var t = 0; t < U; t += 2) {
                        (0, tt[t])(tt[t + 1]), tt[t] = void 0, tt[t + 1] = void 0
                    }
                    U = 0
                }

                function m() { }

                function p() {
                    return new TypeError("You cannot resolve a promise with itself")
                }

                function y() {
                    return new TypeError("A promises callback cannot return that same promise.")
                }

                function w(t) {
                    try {
                        return t.then
                    } catch (t) {
                        return ot.error = t, ot
                    }
                }

                function g(t, e, n, i) {
                    try {
                        t.call(e, n, i)
                    } catch (t) {
                        return t
                    }
                }

                function _(t, e, n) {
                    W(function (t) {
                        var i = !1,
                            o = g(n, e, function (n) {
                                i || (i = !0, e !== n ? k(t, n) : A(t, n))
                            }, function (e) {
                                i || (i = !0, E(t, e))
                            }, "Settle: " + (t._label || " unknown promise"));
                        !i && o && (i = !0, E(t, o))
                    }, t)
                }

                function b(t, e) {
                    e._state === nt ? A(t, e._result) : e._state === it ? E(t, e._result) : S(e, void 0, function (e) {
                        k(t, e)
                    }, function (e) {
                        E(t, e)
                    })
                }

                function L(t, e) {
                    if (e.constructor === t.constructor) b(t, e);
                    else {
                        var n = w(e);
                        n === ot ? E(t, ot.error) : void 0 === n ? A(t, e) : c(n) ? _(t, e, n) : A(t, e)
                    }
                }

                function k(t, e) {
                    t === e ? E(t, p()) : a(e) ? L(t, e) : A(t, e)
                }

                function T(t) {
                    t._onerror && t._onerror(t._result), M(t)
                }

                function A(t, e) {
                    t._state === et && (t._result = e, t._state = nt, 0 !== t._subscribers.length && W(M, t))
                }

                function E(t, e) {
                    t._state === et && (t._state = it, t._result = e, W(T, t))
                }

                function S(t, e, n, i) {
                    var o = t._subscribers,
                        r = o.length;
                    t._onerror = null, o[r] = e, o[r + nt] = n, o[r + it] = i, 0 === r && t._state && W(M, t)
                }

                function M(t) {
                    var e = t._subscribers,
                        n = t._state;
                    if (0 !== e.length) {
                        for (var i, o, r = t._result, s = 0; s < e.length; s += 3) i = e[s], o = e[s + n], i ? C(n, i, o, r) : o(r);
                        t._subscribers.length = 0
                    }
                }

                function x() {
                    this.error = null
                }

                function j(t, e) {
                    try {
                        return t(e)
                    } catch (t) {
                        return rt.error = t, rt
                    }
                }

                function C(t, e, n, i) {
                    var o, r, s, a, u = c(n);
                    if (u) {
                        if (o = j(n, i), o === rt ? (a = !0, r = o.error, o = null) : s = !0, e === o) return void E(e, y())
                    } else o = i, s = !0;
                    e._state !== et || (u && s ? k(e, o) : a ? E(e, r) : t === nt ? A(e, o) : t === it && E(e, o))
                }

                function q(t, e) {
                    try {
                        e(function (e) {
                            k(t, e)
                        }, function (e) {
                            E(t, e)
                        })
                    } catch (e) {
                        E(t, e)
                    }
                }

                function I(t, e) {
                    var n = this;
                    n._instanceConstructor = t, n.promise = new t(m), n._validateInput(e) ? (n._input = e, n.length = e.length, n._remaining = e.length, n._init(), 0 === n.length ? A(n.promise, n._result) : (n.length = n.length || 0, n._enumerate(), 0 === n._remaining && A(n.promise, n._result))) : E(n.promise, n._validationError())
                }

                function O(t) {
                    return new st(this, t).promise
                }

                function P(t) {
                    function e(t) {
                        k(o, t)
                    }

                    function n(t) {
                        E(o, t)
                    }
                    var i = this,
                        o = new i(m);
                    if (!K(t)) return E(o, new TypeError("You must pass an array to race.")), o;
                    for (var r = t.length, s = 0; o._state === et && s < r; s++) S(i.resolve(t[s]), void 0, e, n);
                    return o
                }

                function z(t) {
                    var e = this;
                    if (t && "object" == typeof t && t.constructor === e) return t;
                    var n = new e(m);
                    return k(n, t), n
                }

                function N(t) {
                    var e = this,
                        n = new e(m);
                    return E(n, t), n
                }

                function D() {
                    throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")
                }

                function F() {
                    throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")
                }

                function Y(t) {
                    this._id = ft++, this._state = void 0, this._result = void 0, this._subscribers = [], m !== t && (c(t) || D(), this instanceof Y || F(), q(this, t))
                }

                function H() {
                    var t;
                    if (void 0 !== r) t = r;
                    else if ("undefined" != typeof self) t = self;
                    else try {
                        t = Function("return this")()
                    } catch (t) {
                        throw new Error("polyfill failed because global object is unavailable in this environment")
                    }
                    var e = t.Promise;
                    e && "[object Promise]" === Object.prototype.toString.call(e.resolve()) && !e.cast || (t.Promise = dt)
                }
                var V;
                V = Array.isArray ? Array.isArray : function (t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                };
                var $, B, J, K = V,
                    U = 0,
                    W = function (t, e) {
                        tt[U] = t, tt[U + 1] = e, 2 === (U += 2) && (B ? B(v) : J())
                    },
                    G = "undefined" != typeof window ? window : void 0,
                    Q = G || {},
                    R = Q.MutationObserver || Q.WebKitMutationObserver,
                    X = void 0 !== i && "[object process]" === {}.toString.call(i),
                    Z = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel,
                    tt = new Array(1e3);
                J = X ? function () {
                    var t = i.nextTick,
                        e = i.versions.node.match(/^(?:(\d+)\.)?(?:(\d+)\.)?(\*|\d+)$/);
                    return Array.isArray(e) && "0" === e[1] && "10" === e[2] && (t = o),
                        function () {
                            t(v)
                        }
                }() : R ? function () {
                    var t = 0,
                        e = new R(v),
                        n = document.createTextNode("");
                    return e.observe(n, {
                        characterData: !0
                    }),
                        function () {
                            n.data = t = ++t % 2
                        }
                }() : Z ? function () {
                    var t = new MessageChannel;
                    return t.port1.onmessage = v,
                        function () {
                            t.port2.postMessage(0)
                        }
                }() : void 0 === G ? function () {
                    try {
                        var t = n(54);
                        return $ = t.runOnLoop || t.runOnContext, d()
                    } catch (t) {
                        return h()
                    }
                }() : h();
                var et = void 0,
                    nt = 1,
                    it = 2,
                    ot = new x,
                    rt = new x;
                I.prototype._validateInput = function (t) {
                    return K(t)
                }, I.prototype._validationError = function () {
                    return new Error("Array Methods must be provided an Array")
                }, I.prototype._init = function () {
                    this._result = new Array(this.length)
                };
                var st = I;
                I.prototype._enumerate = function () {
                    for (var t = this, e = t.length, n = t.promise, i = t._input, o = 0; n._state === et && o < e; o++) t._eachEntry(i[o], o)
                }, I.prototype._eachEntry = function (t, e) {
                    var n = this,
                        i = n._instanceConstructor;
                    u(t) ? t.constructor === i && t._state !== et ? (t._onerror = null, n._settledAt(t._state, e, t._result)) : n._willSettleAt(i.resolve(t), e) : (n._remaining--, n._result[e] = t)
                }, I.prototype._settledAt = function (t, e, n) {
                    var i = this,
                        o = i.promise;
                    o._state === et && (i._remaining--, t === it ? E(o, n) : i._result[e] = n), 0 === i._remaining && A(o, i._result)
                }, I.prototype._willSettleAt = function (t, e) {
                    var n = this;
                    S(t, void 0, function (t) {
                        n._settledAt(nt, e, t)
                    }, function (t) {
                        n._settledAt(it, e, t)
                    })
                };
                var at = O,
                    ct = P,
                    ut = z,
                    lt = N,
                    ft = 0,
                    dt = Y;
                Y.all = at, Y.race = ct, Y.resolve = ut, Y.reject = lt, Y._setScheduler = l, Y._setAsap = f, Y._asap = W, Y.prototype = {
                    constructor: Y,
                    then: function (t, e) {
                        var n = this,
                            i = n._state;
                        if (i === nt && !t || i === it && !e) return this;
                        var o = new this.constructor(m),
                            r = n._result;
                        if (i) {
                            var s = arguments[i - 1];
                            W(function () {
                                C(i, o, s, r)
                            })
                        } else S(n, o, t, e);
                        return o
                    },
                    catch: function (t) {
                        return this.then(null, t)
                    }
                };
                var ht = H,
                    vt = {
                        Promise: dt,
                        polyfill: ht
                    };
                void 0 !== (s = function () {
                    return vt
                }.call(e, n, e, t)) && (t.exports = s), ht()
            }).call(this)
        }).call(e, n(7), n(52).setImmediate, n(15))
    },
    52: function (t, e, n) {
        function i(t, e) {
            this._id = t, this._clearFn = e
        }
        var o = Function.prototype.apply;
        e.setTimeout = function () {
            return new i(o.call(setTimeout, window, arguments), clearTimeout)
        }, e.setInterval = function () {
            return new i(o.call(setInterval, window, arguments), clearInterval)
        }, e.clearTimeout = e.clearInterval = function (t) {
            t && t.close()
        }, i.prototype.unref = i.prototype.ref = function () { }, i.prototype.close = function () {
            this._clearFn.call(window, this._id)
        }, e.enroll = function (t, e) {
            clearTimeout(t._idleTimeoutId), t._idleTimeout = e
        }, e.unenroll = function (t) {
            clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
        }, e._unrefActive = e.active = function (t) {
            clearTimeout(t._idleTimeoutId);
            var e = t._idleTimeout;
            e >= 0 && (t._idleTimeoutId = setTimeout(function () {
                t._onTimeout && t._onTimeout()
            }, e))
        }, n(53), e.setImmediate = setImmediate, e.clearImmediate = clearImmediate
    },
    53: function (t, e, n) {
        (function (t, e) {
            ! function (t, n) {
                "use strict";

                function i(t) {
                    "function" != typeof t && (t = new Function("" + t));
                    for (var e = new Array(arguments.length - 1), n = 0; n < e.length; n++) e[n] = arguments[n + 1];
                    var i = {
                        callback: t,
                        args: e
                    };
                    return u[c] = i, a(c), c++
                }

                function o(t) {
                    delete u[t]
                }

                function r(t) {
                    var e = t.callback,
                        i = t.args;
                    switch (i.length) {
                        case 0:
                            e();
                            break;
                        case 1:
                            e(i[0]);
                            break;
                        case 2:
                            e(i[0], i[1]);
                            break;
                        case 3:
                            e(i[0], i[1], i[2]);
                            break;
                        default:
                            e.apply(n, i)
                    }
                }

                function s(t) {
                    if (l) setTimeout(s, 0, t);
                    else {
                        var e = u[t];
                        if (e) {
                            l = !0;
                            try {
                                r(e)
                            } finally {
                                o(t), l = !1
                            }
                        }
                    }
                }
                if (!t.setImmediate) {
                    var a, c = 1,
                        u = {},
                        l = !1,
                        f = t.document,
                        d = Object.getPrototypeOf && Object.getPrototypeOf(t);
                    d = d && d.setTimeout ? d : t, "[object process]" === {}.toString.call(t.process) ? function () {
                        a = function (t) {
                            e.nextTick(function () {
                                s(t)
                            })
                        }
                    }() : function () {
                        if (t.postMessage && !t.importScripts) {
                            var e = !0,
                                n = t.onmessage;
                            return t.onmessage = function () {
                                e = !1
                            }, t.postMessage("", "*"), t.onmessage = n, e
                        }
                    }() ? function () {
                        var e = "setImmediate$" + Math.random() + "$",
                            n = function (n) {
                                n.source === t && "string" == typeof n.data && 0 === n.data.indexOf(e) && s(+n.data.slice(e.length))
                            };
                        t.addEventListener ? t.addEventListener("message", n, !1) : t.attachEvent("onmessage", n), a = function (n) {
                            t.postMessage(e + n, "*")
                        }
                    }() : t.MessageChannel ? function () {
                        var t = new MessageChannel;
                        t.port1.onmessage = function (t) {
                            s(t.data)
                        }, a = function (e) {
                            t.port2.postMessage(e)
                        }
                    }() : f && "onreadystatechange" in f.createElement("script") ? function () {
                        var t = f.documentElement;
                        a = function (e) {
                            var n = f.createElement("script");
                            n.onreadystatechange = function () {
                                s(e), n.onreadystatechange = null, t.removeChild(n), n = null
                            }, t.appendChild(n)
                        }
                    }() : function () {
                        a = function (t) {
                            setTimeout(s, 0, t)
                        }
                    }(), d.setImmediate = i, d.clearImmediate = o
                }
            }("undefined" == typeof self ? void 0 === t ? this : t : self)
        }).call(e, n(15), n(7))
    },
    54: function (t, e) { },
    55: function (t, e, n) {
        "use strict";
        document.querySelectorAll(".js-checkbox-toggle").forEach(function (t) {
            t.addEventListener("keyup", function (t) {
                13 == (t.keyCode ? t.keyCode : t.which) && this.click()
            }), t.getAttribute("data-html-toggle") && t.addEventListener("click", function () {
                var t = this.getAttribute("data-html-toggle");
                this.checked ? document.documentElement.classList.add(t) : document.documentElement.classList.remove(t)
            }), t.nextElementSibling.addEventListener("touchstart", function () { })
        }), document.querySelectorAll("[role=button], .btn").forEach(function (t) {
            t.addEventListener("keyup", function (t) {
                32 == (t.keyCode ? t.keyCode : t.which) && this.click()
            })
        })
    },
    56: function (t, e, n) {
        "use strict";
        var i = n(1),
            o = function (t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(i),
            r = n(5),
            s = function () {
                var t = ["rgba(36,41,143, .5)", "rgba(214,217,114, .5)", "rgba(235,63,67, .5)", "rgba(245,186,197, .5)"],
                    e = t[Math.floor(Math.random() * t.length)];
                document.documentElement.style.setProperty("--selection-color", e)
            };
        document.addEventListener("selectstart", s);
        var a = document.querySelectorAll(".section--dark"),
            c = [].concat((0, o.default)(a)),
            u = document.documentElement,
            l = void 0,
            f = void 0,
            d = void 0,
            h = void 0,
            v = function (t) {
                f = t.offsetTop, d = f + t.offsetHeight
            },
            m = function () {
                h >= f - 60 && h <= d - 60 ? u.classList.add("has-alt-nav") : u.classList.remove("has-alt-nav")
            },
            p = function () {
                h = (0, r.getScrollTop)(), c.some(function (t) {
                    return t.isEqualNode(l) || (l = t, v(t)), h <= d + 10000 && m(), h <= d + 10000
                })
            };
        a.length && (l = a[0], v(l), p(), window.addEventListener("scroll", p), window.addEventListener("resize", function () {
            v(l), p()
        }));
        var y = document.querySelectorAll(".js-multimedia-play");
        window.playVideo = function (t) {
            t && t.preventDefault();
            var e = this.getAttribute("data-player-src");
            /*var vurl = this.parentNode.querySelector("iframe").getAttribute("src");
            var res_url = vurl.replace("autoplay=0", "autoplay=1");
            this.parentNode.querySelector("iframe").setAttribute("src",res_url);
            this.parentNode.querySelector("iframe").setAttribute('allow',"autoplay");
            this.parentNode.querySelector("iframe").style.display="block", this.remove()*/
        }, y.forEach(function (t) {
            t.addEventListener("touchstart", function () { }), t.addEventListener("click", playVideo)
        }), window.makeLinksNewTabs = function () {
            var t = window.location.host;
            /*document.querySelectorAll("a[href^=http]").forEach(function(e) {
                -1 == e.getAttribute("href").indexOf(t) && (e.target = "_blank", e.rel = "nofollow noreferrer")
            })*/
        }, makeLinksNewTabs()
    },
    83: function (t, e, n) {
        "use strict";
        var i = n(3),
            o = document.querySelector(".js-reveal-trigger"),
            r = function (t) {
                t.preventDefault();
                var e = document.querySelector(this.getAttribute("href"));
                this.classList.toggle("is-active"), this.classList.contains("is-active") ? (i.TweenMax.set(e, {
                    height: "auto",
                    display: "block"
                }), i.TweenMax.from(e, .3, {
                    height: 0,
                    ease: Power0.easeInOut
                }).eventCallback("onComplete", function () {
                    i.TweenMax.set(e, {
                        overflow: "visible"
                    })
                })) : (i.TweenMax.set(e, {
                    overflow: "hidden"
                }), i.TweenMax.to(e, .3, {
                    height: 0,
                    ease: Power0.easeInOut
                }))
            };
        o && o.addEventListener("click", r)
    },
    84: function (t, e, n) {
        "use strict";

        function i(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var o = n(1),
            r = i(o),
            s = n(23),
            a = i(s),
            c = n(45),
            u = i(c),
            l = n(3),
            f = n(25),
            d = i(f),
            h = document.querySelectorAll(".js-work-grid-nav-item"),
            v = document.querySelector(".js-work-grid"),
            m = document.querySelector(".js-work-search-grid"),
            p = function () {
                v.classList.add("has-hover"), v.querySelector("a[href='" + this.getAttribute("href") + "']").classList.add("is-active")
            },
            y = function () {
                v.classList.remove("has-hover"), v.querySelector("a[href='" + this.getAttribute("href") + "']").classList.remove("is-active")
            };
        h.length && h.forEach(function (t) {
            t.addEventListener("mouseenter", p), t.addEventListener("mouseleave", y), t.addEventListener("click", y)
        });
        var w = document.querySelectorAll(".js-work-cat-toggle"),
            g = [].concat((0, r.default)(w)),
            _ = document.querySelectorAll(".js-work-nav"),
            b = [].concat((0, r.default)(_)),
            L = document.querySelectorAll(".js-work-item"),
            k = [].concat((0, r.default)(L));
        k.sort(function (t, e) {
            return parseInt(t.style.order) - parseInt(e.style.order)
        });
        var T = function () {
            var t = g.filter(function (t) {
                return t.classList.contains("is-active")
            })[0];
            t && (t.blur(), t.classList.remove("is-active"))
        },
            A = function () {
                var t = b.filter(function (t) {
                    return t.classList.contains("is-active")
                })[0];
                t && (t.classList.remove("is-active"), l.TweenMax.to(t, .2, {
                    height: 0,
                    ease: Power0.easeInOut
                }))
            },
            E = function (t) {
                l.TweenMax.set(t, {
                    display: "block",
                    height: "auto"
                }), l.TweenMax.from(t, .2, {
                    height: 0,
                    ease: Power0.easeInOut
                })
            },
            S = function () {
                T(), A(), history.pushState({
                    id: z
                }, "title", z), $ && U(), l.TweenMax.set(k, {
                    display: "block"
                }), l.TweenMax.staggerFromTo(k, .3, {
                    opacity: 0,
                    y: 10
                }, {
                    opacity: 1,
                    y: 0
                }, .1)
            },
            M = function (t) {
                var e = this;
                if (t.preventDefault(), this.classList.contains("is-active")) return void S();
                F(), T(), this.classList.add("is-active"), history.pushState({
                    href: this.getAttribute("href")
                }, "title", this.getAttribute("href")), $ && U();
                var n = b.filter(function (t) {
                    return t.classList.contains("is-active")
                })[0],
                    i = b.filter(function (t) {
                        return t.classList.contains("cat-" + e.getAttribute("data-cat"))
                    })[0];
                n ? (n.classList.remove("is-active"), l.TweenMax.set(n, {
                    display: "none",
                    height: 0
                }), l.TweenMax.set(i, {
                    display: "block",
                    height: "auto",
                    opacity: 1
                }), l.TweenMax.from(i, .2, {
                    opacity: 0,
                    ease: Power0.easeInOut
                })) : E(i), i.classList.add("is-active");
                var o = k.filter(function (t) {
                    return t.classList.contains("cat-" + e.getAttribute("data-cat"))
                });
                l.TweenMax.to(L, .2, {
                    opacity: 0,
                    ease: Power0.easeInOut
                }).eventCallback("onComplete", function () {
                    l.TweenMax.set(L, {
                        display: "none"
                    }), l.TweenMax.set(o, {
                        display: "block"
                    }), l.TweenMax.staggerFromTo(o, .3, {
                        opacity: 0,
                        y: 10
                    }, {
                        opacity: 1,
                        y: 0
                    }, .1)
                })
            };
        w.length && w.forEach(function (t) {
            t.addEventListener("click", M)
        }), window.onpopstate = function (t) {
            if (t.state && t.state.href) {
                var e = g.filter(function (e) {
                    return e.getAttribute("href") == t.state.href
                })[0];
                e ? e.click() : (T(), A())
            } else T(), A()
        };
        var x = document.querySelector(".js-work-gridview"),
            j = document.querySelector(".js-work-listview"),
            C = function () {
                var t = v.querySelectorAll("img"),
                    e = v.querySelectorAll("source"),
                    n = m.querySelectorAll("img");
                n.length && (t = [].concat((0, r.default)(t)), t.push.apply(t, [].concat((0, r.default)(n)))), t.forEach(function (t) {
                    t.getAttribute("data-o-sizes") ? (t.setAttribute("sizes", t.getAttribute("data-o-sizes")), t.removeAttribute("data-o-sizes")) : (t.setAttribute("data-o-sizes", t.getAttribute("sizes")), t.setAttribute("sizes", "100vw"))
                }), e.forEach(function (t) {
                    t.getAttribute("data-o-media") ? (t.setAttribute("media", t.getAttribute("data-o-media")), t.removeAttribute("data-o-media")) : (t.setAttribute("data-o-media", t.getAttribute("media")), t.setAttribute("media", "(min-width: 10000px)"))
                })
            },
            q = function (t) {
                if (t.preventDefault(), !this.classList.contains("is-active")) {
                    this.classList.add("is-active"), j.classList.remove("is-active");
                    var e = k.filter(function (t) {
                        return "none" != t.style.display
                    });
                    l.TweenMax.to(e, .2, {
                        opacity: 0,
                        ease: Power0.easeInOut
                    }).eventCallback("onComplete", function () {
                        v.classList.remove("work__grid--list"), m.classList.remove("work__grid--list"), m.classList.add("small--grid--2up", "medium--grid--3up"), C(), (0, d.default)(e[0], function () {
                            l.TweenMax.staggerFromTo(e, .3, {
                                opacity: 0,
                                y: 10
                            }, {
                                opacity: 1,
                                y: 0
                            }, .2)
                        })
                    })
                }
            },
            I = function (t) {
                if (t.preventDefault(), !this.classList.contains("is-active")) {
                    this.classList.add("is-active"), x.classList.remove("is-active");
                    var e = k.filter(function (t) {
                        return "none" != t.style.display
                    });
                    l.TweenMax.to(e, .2, {
                        opacity: 0,
                        ease: Power0.easeInOut
                    }).eventCallback("onComplete", function () {
                        v.classList.add("work__grid--list"), m.classList.add("work__grid--list"), m.classList.remove("small--grid--2up", "medium--grid--3up"), C(), (0, d.default)(e[0], function () {
                            l.TweenMax.to(e, .2, {
                                opacity: 1,
                                ease: Power0.easeInOut
                            })
                        })
                    })
                }
            };
        x && x.addEventListener("click", q), j && j.addEventListener("click", I);
        var O = document.querySelector(".js-work-search"),
            P = document.querySelector(".js-work-search-message"),
            z = window.location.pathname,
            N = void 0,
            D = {
                shouldSort: !0,
                includeScore: !0,
                threshold: .1,
                location: 0,
                distance: 100,
                maxPatternLength: 32,
                keys: [{
                    name: "title",
                    weight: .7
                }, {
                    name: "content",
                    weight: .2
                }, {
                    name: "client",
                    weight: .9
                }, {
                    name: "sections",
                    weight: .6
                }, {
                    name: "capabilities",
                    weight: .6
                }, {
                    name: "awards",
                    weight: .5
                }, {
                    name: "team",
                    weight: .4
                }, {
                    name: "search",
                    weight: .6
                }]
            },
            F = function () {
                O.classList.contains("is-active") && (O.classList.remove("is-active"), O.classList.remove("has-search"), O.querySelector("input").value = "", v.style.display = "", l.TweenMax.to(L, .2, {
                    opacity: 1,
                    ease: Power0.easeInOut
                }), Y())
            },
            Y = function () {
                for (; m.firstChild;) m.removeChild(m.firstChild);
                for (; P.firstChild;) P.removeChild(P.firstChild)
            },
            H = function (t) {
                var e = new u.default(N, D),
                    n = e.search(t);
                O.classList.add("has-search"), T(), A(), history.pushState({
                    id: z
                }, "title", z), Y(), l.TweenMax.to(L, .2, {
                    opacity: 0,
                    ease: Power0.easeInOut
                }).eventCallback("onComplete", function () {
                    v.style.display = "none"
                }), n.length ? (n.forEach(function (t) {
                    t.item && (t = t.item);
                    var e = t.client ? ' <span class="work__item-client">' + t.client + "</span>" : "",
                        n = m.classList.contains("work__grid--list") ? 'data-o-sizes="(min-width:769px) 30vw, (min-width:481px) 50vw, 100vw"  sizes="100vw"' : 'sizes="(min-width:769px) 30vw, (min-width:481px) 50vw, 100vw"',
                        i = '<li class="grid__item work__search-item js-work-item">\n                <a href="' + t.url + '">\n                <img src="' + t.image + '" srcset="' + t.srcset + '" ' + n + ' alt="' + t.title + '">\n                <h3 class="work__item-title"><span>' + t.title + e + "</span></h3>\n                </a>\n            </li>";
                    m.insertAdjacentHTML("beforeend", i)
                }), l.TweenMax.staggerFromTo(m.querySelectorAll(".js-work-item"), .3, {
                    opacity: 0,
                    y: 10
                }, {
                    opacity: 1,
                    y: 0
                }, .2)) : P.innerHTML = "<div><span>No search results found.</span></div>"
            },
            V = function (t) {
                N ? H(t) : a.default.get("/assets/js/api-work.json").then(function (e) {
                    N = e.data, H(t)
                }).catch(function (t) {
                    console.log(t)
                })
            };
        O && (O.addEventListener("submit", function (t) {
            if (t.preventDefault(), this.classList.contains("is-active")) {
                var e = this.querySelector("input");
                e.value ? V(e.value) : (F(), this.querySelector("button[type=submit]").focus())
            } else this.classList.add("is-active"), this.querySelector("input").focus()
        }), O.addEventListener("reset", function (t) {
            F(), this.querySelector("button[type=submit]").focus()
        }));
        var $ = document.querySelector(".js-section-page-view"),
            B = void 0,
            J = void 0,
            K = function () {
                //$.classList.remove("is-home")
            },
            U = function () {
                var t = window.location.pathname.split("/"),
                    e = t[t.length - 2];
                "work" === e || "" === e ? ($.classList.add("is-home"), J.textContent = "All") : (J.textContent = e, K())
            };
        $ && (B = $.querySelector(".js-section-page-link"), J = $.querySelector(".js-section-page-view-text"), U(), w.length && B.addEventListener("click", function (t) {
            t.preventDefault(), S()
        }))
    }
}, [49]);
;
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function ($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function () {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function (slider, i) {
                    return $('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function () {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function (markup, index, addBefore) {

        var _ = this;

        if (typeof (index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof (index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function (index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function () {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function (targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function (now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function () {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function () {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function () {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if (asNavFor && asNavFor !== null) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function (index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if (asNavFor !== null && typeof asNavFor === 'object') {
            asNavFor.each(function () {
                var target = $(this).slick('getSlick');
                if (!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function (slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function () {

        var _ = this;

        _.autoPlayClear();

        if (_.slideCount > _.options.slidesToShow) {
            _.autoPlayTimer = setInterval(_.autoPlayIterator, _.options.autoplaySpeed);
        }

    };

    Slick.prototype.autoPlayClear = function () {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function () {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if (!_.paused && !_.interrupted && !_.focussed) {

            if (_.options.infinite === false) {

                if (_.direction === 1 && (_.currentSlide + 1) === (_.slideCount - 1)) {
                    _.direction = 0;
                }

                else if (_.direction === 0) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if (_.currentSlide - 1 === 0) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler(slideTo);

        }

    };

    Slick.prototype.buildArrows = function () {

        var _ = this;

        if (_.options.arrows === true) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if (_.slideCount > _.options.slidesToShow) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add(_.$nextArrow)

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function () {

        var _ = this,
            i, dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active').attr('aria-hidden', 'false');

        }

    };

    Slick.prototype.buildOut = function () {

        var _ = this;

        _.$slides =
            _.$slider
                .children(_.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function (index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div aria-live="polite" class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function () {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides, slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if (_.options.rows > 1) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for (a = 0; a < numOfSlides; a++) {
                var slide = document.createElement('div');
                for (b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for (c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width': (100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function (initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if (_.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                            targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if (!initial && triggerBreakpoint !== false) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function (event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if ($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if (!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function (index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function () {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).off('ready.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function () {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function () {

        var _ = this, originalSlides;

        if (_.options.rows > 1) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function (event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function (refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }


        if (_.$prevArrow && _.$prevArrow.length) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display', '');

            if (_.htmlExpr.test(_.options.prevArrow)) {
                _.$prevArrow.remove();
            }
        }

        if (_.$nextArrow && _.$nextArrow.length) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display', '');

            if (_.htmlExpr.test(_.options.nextArrow)) {
                _.$nextArrow.remove();
            }

        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function () {
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if (!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function (slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function (slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function () {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function (slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function (filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function () {

        var _ = this;

        _.$slider
            .off('focus.slick blur.slick')
            .on('focus.slick blur.slick',
                '*:not(.slick-arrow)', function (event) {

                    event.stopImmediatePropagation();
                    var $sf = $(this);

                    setTimeout(function () {

                        if (_.options.pauseOnFocus) {
                            _.focussed = $sf.is(':focus');
                            _.autoPlay();
                        }

                    }, 0);

                });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function () {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function () {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if (!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        } else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function (slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                verticalOffset = (verticalHeight * _.options.slidesToShow) * -1;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft = 0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft = 0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function (option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function () {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function () {

        return this;

    };

    Slick.prototype.getSlideCount = function () {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function (index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function (slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function (creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if (_.options.autoplay) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function () {
        var _ = this;
        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        _.$slideTrack.attr('role', 'listbox');

        _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function (i) {
            $(this).attr({
                'role': 'option',
                'aria-describedby': 'slick-slide' + _.instanceUid + i + ''
            });
        });

        if (_.$dots !== null) {
            _.$dots.attr('role', 'tablist').find('li').each(function (i) {
                $(this).attr({
                    'role': 'presentation',
                    'aria-selected': 'false',
                    'aria-controls': 'navigation' + _.instanceUid + i + '',
                    'id': 'slick-slide' + _.instanceUid + i + ''
                });
            })
                .first().attr('aria-selected', 'true').end()
                .find('button').attr('role', 'button').end()
                .closest('div').attr('role', 'toolbar');
        }
        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function () {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
                .off('click.slick')
                .on('click.slick', {
                    message: 'previous'
                }, _.changeSlide);
            _.$nextArrow
                .off('click.slick')
                .on('click.slick', {
                    message: 'next'
                }, _.changeSlide);
        }

    };

    Slick.prototype.initDotEvents = function () {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function () {

        var _ = this;

        if (_.options.pauseOnHover) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function () {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(document).on('ready.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.initUI = function () {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Slick.prototype.keyHandler = function (event) {

        var _ = this;
        //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if (!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' : 'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function () {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function () {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function () {

                    image
                        .animate({ opacity: 0 }, 100, function () {
                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function () {
                                    image
                                        .removeAttr('data-lazy')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function () {

                    image
                        .removeAttr('data-lazy')
                        .removeClass('slick-loading')
                        .addClass('slick-lazyload-error');

                    _.$slider.trigger('lazyLoadError', [_, image, imageSource]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);
        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
            if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
                cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
                loadImages(cloneRange);
            } else if (_.currentSlide === 0) {
                cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
                loadImages(cloneRange);
            }

    };

    Slick.prototype.loadSlider = function () {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function () {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function () {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function () {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function () {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function (index) {

        var _ = this;

        if (!_.unslicked) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            _.setPosition();

            _.swipeLeft = null;

            if (_.options.autoplay) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();
            }

        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function () {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function (event) {

        event.preventDefault();

    };

    Slick.prototype.progressiveLazyLoad = function (tryCount) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $('img[data-lazy]', _.$slider),
            image,
            imageSource,
            imageToLoad;

        if ($imgsToLoad.length) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function () {

                image
                    .attr('src', imageSource)
                    .removeAttr('data-lazy')
                    .removeClass('slick-loading');

                if (_.options.adaptiveHeight === true) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function () {

                if (tryCount < 3) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout(function () {
                        _.progressiveLazyLoad(tryCount + 1);
                    }, 500);

                } else {

                    image
                        .removeAttr('data-lazy')
                        .removeClass('slick-loading')
                        .addClass('slick-lazyload-error');

                    _.$slider.trigger('lazyLoadError', [_, image, imageSource]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [_]);

        }

    };

    Slick.prototype.refresh = function (initializing) {

        var _ = this, currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if (!_.options.infinite && (_.currentSlide > lastVisibleIndex)) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if (!initializing) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function () {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ($.type(responsiveSettings) === 'array' && responsiveSettings.length) {

            _.respondTo = _.options.respondTo || 'window';

            for (breakpoint in responsiveSettings) {

                l = _.breakpoints.length - 1;
                currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while (l >= 0) {
                        if (_.breakpoints[l] && _.breakpoints[l] === currentBreakpoint) {
                            _.breakpoints.splice(l, 1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function (a, b) {
                return (_.options.mobileFirst) ? a - b : b - a;
            });

        }

    };

    Slick.prototype.reinit = function () {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Slick.prototype.resize = function () {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function () {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if (!_.unslicked) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function (index, removeBefore, removeAll) {

        var _ = this;

        if (typeof (index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function (position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function () {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function () {

        var _ = this,
            targetLeft;

        _.$slides.each(function (index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function () {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption =
        Slick.prototype.slickSetOption = function () {

            /**
             * accepts arguments in format of:
             *
             *  - for changing a single option's value:
             *     .slick("setOption", option, value, refresh )
             *
             *  - for changing a set of responsive options:
             *     .slick("setOption", 'responsive', [{}, ...], refresh )
             *
             *  - for updating multiple values at once (not responsive)
             *     .slick("setOption", { 'option': value, ... }, refresh )
             */

            var _ = this, l, item, option, value, refresh = false, type;

            if ($.type(arguments[0]) === 'object') {

                option = arguments[0];
                refresh = arguments[1];
                type = 'multiple';

            } else if ($.type(arguments[0]) === 'string') {

                option = arguments[0];
                value = arguments[1];
                refresh = arguments[2];

                if (arguments[0] === 'responsive' && $.type(arguments[1]) === 'array') {

                    type = 'responsive';

                } else if (typeof arguments[1] !== 'undefined') {

                    type = 'single';

                }

            }

            if (type === 'single') {

                _.options[option] = value;


            } else if (type === 'multiple') {

                $.each(option, function (opt, val) {

                    _.options[opt] = val;

                });


            } else if (type === 'responsive') {

                for (item in value) {

                    if ($.type(_.options.responsive) !== 'array') {

                        _.options.responsive = [value[item]];

                    } else {

                        l = _.options.responsive.length - 1;

                        // loop through the responsive object and splice out duplicates.
                        while (l >= 0) {

                            if (_.options.responsive[l].breakpoint === value[item].breakpoint) {

                                _.options.responsive.splice(l, 1);

                            }

                            l--;

                        }

                        _.options.responsive.push(value[item]);

                    }

                }

            }

            if (refresh) {

                _.unload();
                _.reinit();

            }

        };

    Slick.prototype.setPosition = function () {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function () {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if (_.options.fade) {
            if (typeof _.options.zIndex === 'number') {
                if (_.options.zIndex < 3) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function (index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {

                    _.$slides
                        .slice(index - centerOffset, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand') {
            _.lazyLoad();
        }

    };

    Slick.prototype.setupInfinite = function () {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                    infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function () {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.interrupt = function (toggle) {

        var _ = this;

        if (!toggle) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Slick.prototype.selectHandler = function (event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.setSlideClasses(index);
            _.asNavFor(index);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function (index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function () {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true) {
                    _.animateSlide(slideLeft, function () {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if (_.options.autoplay) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if (_.options.asNavFor) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if (navTarget.slideCount <= navTarget.options.slidesToShow) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function () {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true) {
            _.animateSlide(targetLeft, function () {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function () {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function () {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function (event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.interrupted = false;
        _.shouldClick = (_.touchObject.swipeLength > 10) ? false : true;

        if (_.touchObject.curX === undefined) {
            return false;
        }

        if (_.touchObject.edgeHit === true) {
            _.$slider.trigger('edge', [_, _.swipeDirection()]);
        }

        if (_.touchObject.swipeLength >= _.touchObject.minSwipe) {

            direction = _.swipeDirection();

            switch (direction) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable(_.currentSlide + _.getSlideCount()) :
                            _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable(_.currentSlide - _.getSlideCount()) :
                            _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if (direction != 'vertical') {

                _.slideHandler(slideCount);
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction]);

            }

        } else {

            if (_.touchObject.startX !== _.touchObject.curX) {

                _.slideHandler(_.currentSlide);
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function (event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function (event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = Math.round(Math.sqrt(
                Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));
        }

        swipeDirection = _.swipeDirection();

        if (swipeDirection === 'vertical') {
            return;
        }

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function (event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function () {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function () {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function (fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function () {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if (_.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function () {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                .removeClass('slick-active')
                .attr('aria-hidden', 'true');

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active')
                .attr('aria-hidden', 'false');

        }

    };

    Slick.prototype.visibility = function () {

        var _ = this;

        if (_.options.autoplay) {

            if (document[_.hidden]) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.slick = function () {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));
;
(function ($, Drupal, drupalSettings, cookies) {
    'use strict';
    var initialized;
    var window_init_call;
    var CRM_fd_focus;
    var Wrk_close_clk;
    var Wrk_txny_page_detect;
    var Wrk_glb_txny_detect;
    var Wrk_cap_detect;
    var path_name;
    Drupal.behaviors.customize = {
        attach: function (context, settings) {
            if (typeof context.attributes !== "undefined" && context.attributes) {
                if (typeof context.attributes['id'] !== 'undefined' && context.attributes['id']['nodeValue'] == 'work') {
                    TweenMax.staggerFromTo(".js-work-item", .3, { opacity: 0, y: 10 }, { opacity: 1, y: 0 }, .2);
                }
            }
            $('.employee__close-icon').on("click", function (e) {
                e.preventDefault();
                $('.team__grid-item').removeClass("is-active");
                $(this).closest('.team__grid-item').css({ 'transition': 'left 0.5s ease-in-out 0s', 'z-index': '999' });
                $('.employee__portrait .employee__portrait-content').removeAttr("style");
                setTimeout(function () {
                    $('.employee__close-icon').closest('.team__grid-item').css({ 'z-index': '' });
                }, 1000);
                var employCloseLinks = $('.team-grid-open').attr('aria-expanded', 'false');
                employCloseLinks.attr("aria-label", "Open Team Grid");
            });
            $('.ideas-list ul li input:radio').each(function (index, element) {
                if (element.checked) {
                    $(this).parent().addClass('is-active');
                }
            });
            $('.feed-search-submmited a').click(function () {
                $('.feed-search-submmited').hide();
                $('.section__search-form').addClass('is-active');
                $('.section__search-form input').focus();
                $('.js-section-page-view.search-icons').css('display', 'block !important');
            });
            if (!initialized) {
                initialized = true;
                $("body").delegate(".section__grid-utility", "click", function () {
                    if ($(".section__search-form").hasClass('is-active')) {
                        $('.adv-search-list-con').slideUp();
                        $('.adv-search-list-con .grid__item').removeClass('is__active');
                        $('.adv-search-icon').removeClass('adv-serach-active');
                        $('.section__search-form').removeClass('is-active');
                        $('.adv-search-icon').hide();
                    } else {
                        $('.section__search-form').addClass('is-active');
                        if (($.trim($("#search-industries").html()) || $.trim($("#search-clients").html()) || $.trim($("#search-capabilities").html())) || $("#views-exposed-form-ideas-list-ideas-about").length > 0 || $("#views-exposed-form-ideas-list-ideas").length > 0) {
                            $('.adv-search-icon').show();
                        }
                        $('#edit-combine').focus();
                        $('.js-section-page-view.search-icons').css('display', 'block !important');
                    }
                    if ($('.section__search-form input').val()) {
                        window.dataLayer = window.dataLayer || [];
                        window.dataLayer.push({ 'event': 'Ideas Search', 'dlv_ideas_search_term': $('.section__search-form input').val(), 'dlv_search_category': $(this).closest('.section__search-form').attr('data-search-category') });
                        $("input[name='open']").val('search');
                        Wrk_txny_page_detect = 0;
                        $('.js-hide.js-form-submit').trigger('click');
                    }
                });
                $('.section__grid-utility[type="reset"]').click(function () {
                    $('.feeds__filters li.section__grid-filters + li').removeClass('is__active');
                });
                $("body").delegate(".section__search-form input", "keyup", function () {
                    if (event.keyCode == 13) {
                        if ($('.section__search-form input').val()) {
                            window.dataLayer = window.dataLayer || [];
                            window.dataLayer.push({ 'event': 'Ideas Search', 'dlv_ideas_search_term': $('.section__search-form input').val(), 'dlv_search_category': $(this).closest('.section__search-form').attr('data-search-category') });
                        }
                    }
                });
                $("body").delegate(".adv-search-icon", "click", function () {
                    if ($(this).hasClass("advsearchicon")) {
                        Wrk_close_clk = 0;
                        $(this).toggleClass('adv-serach-active');
                        if ($(this).hasClass("adv-serach-active")) {
                            $('.adv-search-list').fadeIn();
                            $('.section__search-form.js-work-search').hide();
                        } else {
                            Wrk_close_clk = 1;
                            $('.adv-search-list li a').removeClass('is-active');
                            $('.adv-search-list-con').slideUp();
                            $('.adv-search-list-con .grid__item').removeClass('is__active');
                            $('.adv-search-list').css('display', 'none');
                            $('.section__search-form.js-work-search').fadeIn().removeClass('is-active');
                            $('.adv-search-icon').css("display", "none");
                            $('.section__search-form.js-work-search').show();
                        }
                    } else if (!$(this).hasClass("adv-serach-active")) {
                        $(this).addClass('adv-serach-active');
                        $('.grid__item').removeClass('is__active');
                        $('#search-capabilities.adv-search-list-con').slideDown();
                        $('#search-capabilities.adv-search-list-con .grid__item').delay(200).each(function (i) {
                            $(this).delay(100 * i).queue(function () {
                                $(this).addClass('is__active').dequeue();
                                $('#search-industries .grid__item').removeClass('is__active');
                                $('#search-clients .grid__item').removeClass('is__active');
                            });
                        });
                    } else if ($(this).hasClass("adv-serach-active")) {
                        if ($(".section__search-form").hasClass('is-active')) {
                            $('.adv-search-list-con').slideUp();
                            $('.adv-search-list-con .grid__item').removeClass('is__active');
                            $('.adv-search-icon').removeClass('adv-serach-active');
                            $('.section__search-form').removeClass('is-active');
                            $('.adv-search-icon').hide();
                        }
                    } else {
                        $(this).removeClass('adv-serach-active');
                        $('.adv-search-list').css('display', 'none');
                        $('#search-capabilities').hide();
                        $('.adv-search-list li a').removeClass('is-active');
                        $('#search-capabilities.adv-search-list-con').slideUp();
                        $('#search-capabilities.adv-search-list-con .grid__item').removeClass('is__active');
                        $('.section__search-form.js-work-search').removeClass('is-active');
                        $('.adv-search-icon').css("display", "none");
                        $('.section__search-form.js-work-search').show();
                    }
                });
            }
            $('.work__categories a').click(function () {
                $('.section__grid-work-search').hide();
            });
            $('.advsearchicon').click(function () {
                var secondLiHref = $('.adv-search-list li:nth-child(2) a').attr('href');
                var trimmedData = secondLiHref.substring(secondLiHref.indexOf("#search-") + "#search-".length);
                $('.adv-search-list li a.' + trimmedData).addClass('is-active');
                $(secondLiHref + ".adv-search-list-con").css("display", "block");
                $(secondLiHref + ".adv-search-list-con .grid__item").addClass('is__active');
            });
            $('.adv-search-list li a').click(function () {
                var capabilities_checked, industries_checked, clients_checked;
                $("#search-capabilities .grid__item input:checkbox").each(function (index, element) {
                    if (element.checked) {
                        capabilities_checked = true;
                    }
                });
                $("#search-industries .grid__item input:checkbox").each(function (index, element) {
                    if (element.checked) {
                        industries_checked = true;
                    }
                });
                $("#search-clients .grid__item input:checkbox").each(function (index, element) {
                    if (element.checked) {
                        clients_checked = true;
                    }
                });
                if (capabilities_checked) {
                    $('.adv-search-list li a.capabilities').addClass('is-active');
                } else {
                    $('.adv-search-list li a.capabilities').removeClass('is-active');
                }
                if (industries_checked) {
                    $('.adv-search-list li a.industries').addClass('is-active');
                } else {
                    $('.adv-search-list li a.industries').removeClass('is-active');
                }
                if (clients_checked) {
                    $('.adv-search-list li a.clients').addClass('is-active');
                } else {
                    $('.adv-search-list li a.clients').removeClass('is-active');
                }

                /*$('.adv-search-list li a').removeClass('is-active');*/
                $(this).addClass('is-active');
                $('.adv-search-list-con').hide();
                var activeTab = $(this).attr('href');
                if (Wrk_close_clk == 0 || Wrk_close_clk == null) {
                    $(activeTab).slideDown();
                }
                return false;
            });
            $('.search-form-showing .section__page-view-link').click(function () {
                $('.section__search-form').removeClass('is-active has-search').fadeIn();
                $(document).ajaxComplete(function () {
                    $('#edit-field-category-target-id.work__categories').css('display', 'block');
                    $('.search-form-showing').css('display', 'none');
                });
            });
            $('.adv-search-list-con li a').click(function () {
                $(this).toggleClass('is-active');
            });
            /* Menu */
            mobile_sub_menu();
            $(window).resize(function () {
                mobile_sub_menu();
            });
            function mobile_sub_menu() {
                var currentPath = window.location.pathname;
                if (currentPath.indexOf('/work/') !== -1) {
                    $(".site-nav__sub-list li").each(function (index, element) {
                        if ($(this).find('a').attr('data-drupal-link-system-path') == 'work') {
                            $(this).find('a').addClass('is-active');
                        }
                    });
                }
                $('.work-scroll').removeClass('scrollMenu');
                if ($(window).width() <= 850) {
                    if ($('.site-nav__sub-list li:visible a').hasClass('is-active')) {
                        $('.site-nav__sub-list li:visible a.is-active').parents('.site-nav__item--about').children('a').removeClass('is-active');
                    }
                } else {
                    if ($('.site-nav__sub-list li a').hasClass('is-active')) {
                        $('.site-nav__sub-list li a.is-active').parents('.site-nav__item--about').children('a').addClass('');
                    }
                }
            }
            /* Connect - form  */
            $('.connect-popup').click(function () {
                $('body').addClass('has-modal');
                $('.modal').addClass('is-active');
            });

            $('.js-work-search input, .js-feed-search input').on("keypress", function (event) {
                if (event.which == 13 && !event.shiftKey) {
                    event.preventDefault();
                    $("input[name='open']").val('search');
                    Wrk_txny_page_detect = 0;
                    $('.js-hide.js-form-submit').trigger('click');
                    if (drupalSettings.path.currentPath == 'about' || drupalSettings.node_alias_path == '/about') {
                        $('.scrollMenu a').eq(0).removeClass('is-active');
                    }
                }
            });

            $(".js-section-page-link, .adv-serach-active").on("click", function () {
                var capabilities = [];
                var industries = [];
                var clients = [];
                var ideascapabilities = [];
                $.each($("#work #search-capabilities input.form-checkbox:checked"), function () {
                    capabilities.push($(this).val());
                });
                $.each($("#search-capabilities.adv-search-list-con-ideas input.form-checkbox:checked"), function () {
                    ideascapabilities.push($(this).val());
                });
                var rest = 0;
                if (($('#work .js-section-page-view-text').text() != '') || typeof ($('#work .form-text').val()) != 'undefined' || capabilities.length != 0) {
                    var rest = 1;
                }
                if ((typeof ($('.ideas-list .form-text').val()) != 'undefined' && $('.ideas-list .form-text').val().length != 0) || ideascapabilities.length != 0) {
                    var rest = 1;
                }
                Wrk_close_clk = 1;
                $('.form-text').val('');
                $("input[name='field_category_target_id']").val('All');
                //$("input[name='field_industry_target_id']").val('All');
                if ($('.js-section-page-view-text').text() != "All") {
                    if ($('.ideas-list .js-section-page-view-text').text() == '') {
                        $("input[name='open']").val('close');
                    } else {
                        $("input[name='open']").val('cat');
                    }
                } else {
                    $("input[name='open']").val('close');
                }
                $('.form-checkbox').removeAttr('checked');
                if (rest == 1) {
                    $('.js-hide.js-form-submit').trigger('click');
                }
                setTimeout(function () {
                    if (drupalSettings.path.currentPath == 'about' || drupalSettings.node_alias_path == '/about') {
                        $('.scrollMenu a').eq(0).removeClass('is-active');
                    }
                    var current_path = drupalSettings.current_alias_path;
                    var idea_page = drupalSettings.idea_page_path;
                    if (drupalSettings.path.currentPath.search('taxonomy/term/') != -1) {
                        var _ = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + 'work';
                    } else if (current_path.indexOf('ideas/') != -1) {
                        var _ = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + idea_page;
                    } else if (current_path.slice(1) == "about") {
                        let rurl = aboutpageScroll(current_path.slice(1));
                        var _ = rurl;
                    } else if (drupalSettings.path.currentPath != 'home' || drupalSettings.node_alias_path == '/home' || drupalSettings.path.currentPath == 'work' || drupalSettings.path.currentPath == 'ideas') {
                        var localUrl = drupalSettings.node_alias_path.slice(1);
                        if (localUrl != 'home') {
                            var _ = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + localUrl;
                        }
                    } else {
                        var _ = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix;
                    }
                    /*var currentLocation = $(location).attr('pathname').replace(BaseUrl, "");
                     console.log(drupalSettings.path.currentPath);
                     if (currentLocation == 'ideas' || currentLocation == 'about') {
                     var _ = $(location).attr('pathname');
                     }*/
                    if (typeof (history.pushState) != "undefined") {
                        $('.work__grid-nav-wrap.js-work-nav').css('display', 'none');
                        $('.js-work-cat-toggles').removeClass('is-active');
                        $('.section__search-form.js-work-search').removeClass("is-active");
                        $(".adv-search-wrk-icon").css("display", "none");
                        $('.js-work-search').show();
                        history.pushState({
                            href: _
                        }, "title", _);
                    }
                    $('.js-section-page-view.category-icons').addClass('is-home');
                    $('.section__grid-work-search').show();
                    $('#feed').scrollTop($('.js-team').outerHeight());
                    if (Wrk_txny_page_detect == 1) {
                        $("#search-capabilities").hide();
                        $("#search-industries").hide();
                        $("#search-clients").hide();
                        $('.adv-search-list li a').removeClass('is-active');
                        $('.adv-search-list-con').slideUp();
                        $('.adv-search-list-con .grid__item').removeClass('is__active');
                        $('.adv-search-list').css('display', 'none');
                        /*$('.section__search-form.js-work-search').addClass("is-active");*/
                        $(".adv-search-icon").removeClass("adv-serach-active");
                        $('.section__search-form.js-work-search').show();
                        /*$(".adv-search-icon").css("display", "inline");*/

                    }
                    if (Wrk_glb_txny_detect == 1) {
                        $(".adv-search-icon").removeClass("adv-serach-active");
                        $(".adv-search-icon").css("display", "none");
                        $("#search-capabilities").hide();

                    }
                }, 1500);
            });

            $(".subcategories").on("click", function () {
                var clickid = $(this).closest('div').attr('id');
                //$('#search-clients .grid__item').removeClass('is__active');
                //$('#search-capabilities .grid__item').removeClass('is__active');
                //$('#search-industries .grid__item').removeClass('is__active');
                //$('.section__search-form.js-work-search').addClass('is-active');
                $('.grid__item').addClass('is__active');
                $(document).ajaxComplete(function () {
                    $(".grid__item input:checkbox").each(function (index, element) {
                        if (element.checked) {
                            $(this).next().find("a").addClass('is-active');
                            var checkId = '#' + $(this).parent().parent().parent().attr('id')
                            $("ul.adv-search-list li").each(function (index, elements) {
                                if ($(this).find("a").attr('href') == checkId) {
                                    $(this).find("a").addClass('is-active');
                                }
                            });
                        }
                        $('.section__search-form.js-work-search').hide();
                        $(".adv-search-list").css("display", "block");
                    });
                    if ($('.modal__content-wrapper').find('.post').length == 0) {
                        TweenMax.staggerFromTo(".js-feed-grid .grid__item a.feed__item", .3, { opacity: 0, y: 10 }, { opacity: 1, y: 0 }, .2);
                    }
                    if (Wrk_glb_txny_detect == 1) {
                        var url = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + 'work';
                        if (typeof (history.pushState) != "undefined") {
                            history.pushState({
                                href: url
                            }, "title", url);
                        }
                        $(".section__search-form.js-work-search").addClass("is-active");
                        $(".adv-search-list").css("display", "block");
                        $(".adv-search-icon").addClass("adv-serach-active");
                        $(".adv-search-icon").css("display", "inline");
                        $("#search-capabilities").show();

                    }
                    if ($.trim($("#search-industries").html()) || $.trim($("#search-clients").html()) || $.trim($("#search-capabilities").html())) {
                        if (Wrk_txny_page_detect == 1) {
                            var url = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + 'work';
                            if (typeof (history.pushState) != "undefined") {
                                history.pushState({
                                    href: url
                                }, "title", url);
                            }
                            $(".adv-search-list").css("display", "block");
                            $(".adv-search-icon").css("display", "inline");
                            $(".adv-search-icon").addClass("adv-serach-active");
                            /*$(".section__search-form.js-work-search").addClass("is-active");*/
                            $(".section__search-form.js-work-search").css("display", "none");
                        }
                        if (Wrk_close_clk == 1) {
                            $('.adv-search-list').css('display', 'none');
                            $("#search-capabilities").hide();
                            $("#search-industries").hide();
                            $("#search-clients").hide();
                        } else if (clickid == "search-capabilities") {
                            $("#search-capabilities").show();
                            $("#search-industries").hide();
                            $("#search-clients").hide();
                        } else if (clickid == "search-industries") {
                            $("#search-capabilities").hide();
                            $("#search-industries").show();
                            $("#search-clients").hide();
                        } else if (clickid == "search-clients") {
                            $("#search-capabilities").hide();
                            $("#search-industries").hide();
                            $("#search-clients").show();
                        } else {
                            $("#search-capabilities").hide();
                            $("#search-industries").hide();
                            $("#search-clients").hide();
                        }
                    }
                });
            });
            $('.ideas-category').once().on("click", function () {
                var ideacat = $(this).text().trim();
                $('.ideas-category').removeClass('is-active');
                $(this).addClass('is-active');
                if ($(this).hasClass("ideas-category")) {
                    $(document).ajaxComplete(function () {
                        if ($('.modal__content-wrapper').find('.post').length == 0) {
                            TweenMax.staggerFromTo(".grid__item a.feed__item", .3, { opacity: 0, y: 10 }, { opacity: 1, y: 0 }, .2);
                        }
                    });
                }
            });
            $('.js-work-cat-toggles').on("click", function () {
                $('.js-work-cat-toggles').removeClass('is-active');
                $.each($(".form-checkboxes .is__active input.form-checkbox:checked"), function () {
                    $(this).removeAttr('checked');
                });
                $(this).addClass('is-active');
                $('#search-capabilities').hide();
                if ($('.form-text').val() != '') {
                    $('.form-text').val('');
                }
                var cat = $(this).text().trim();
                var cat_with_link = "";
                if (cat.indexOf('>') != -1) {
                    cat_with_link = cat.substring(
                        cat.indexOf(">") + 1,
                        cat.lastIndexOf("<")
                    );
                    cat_with_link = cat_with_link.trim().replace(" ", "-");
                } else {
                    cat_with_link = cat;
                }
                var url = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + 'work/' + cat_with_link.toLowerCase();
                var ref = $(this).find("input[name=field_category_target_id]").attr('data-url');
                if (typeof (history.pushState) != "undefined") {
                    var obj = { Title: cat_with_link, Url: ref };
                    history.pushState(obj, obj.Title, obj.Url);
                    Wrk_glb_txny_detect = 0;
                    Wrk_txny_page_detect = 0;
                }
            });

            $('.capabilities-section li a').on("click", function (e) {
                var capability = $(this).text().trim();
                /*var capability_updated = (capability.toLowerCase().replace(/& /g, "")).replace(/ /g, "-");
                var url = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + 'capabilities/' + capability_updated;*/
                var ref = $(this).attr("href").trim();
                if (typeof (history.pushState) != "undefined") {
                    var obj = { Title: capability, Url: ref };
                    history.pushState(obj, obj.Title, obj.Url);
                }
            });

            $(".feed__item.js-feed-item", context).once().on("click", function (event) {
                event.preventDefault();
                var ideaFeedPop = $(this);
                var ideaFeedPopOpen = ideaFeedPop.attr('aria-expanded') === 'true';
                ideaFeedPop.attr('aria-expanded', !ideaFeedPopOpen);
                var ideaFeedPopLabel = ideaFeedPopOpen ? "Open Ideas details" : "Close Ideas details";
                ideaFeedPop.attr("aria-label", ideaFeedPopLabel);
                var url = $(this).attr('href');
                var _ = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + drupalSettings.path.currentPath;
                if (typeof (history.pushState) != "undefined") {
                    history.pushState({
                        href: url
                    }, "title", url);
                }
                var nid = $(this).attr('data-id');
                var domparser = new DOMParser();
                $.ajax({
                    url: drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + "get-idea-details/" + nid,
                    data: 'text/html',
                    success: function (data) {
                        var i = domparser.parseFromString(data, "text/html"),
                            n = i.querySelector(".post");
                        $('body').addClass('has-modal');
                        $('.js-modal__content-wrapper').html(n);
                        $('.sliding-popup-bottom').css('z-index', '999');
                        var base_url = settings.path.baseUrl;
                        $('.js-modal').addClass('is-active');

                        $('.post a').each(function () {
                            var vfile = $(this).attr("href");
                            var ftoken = encodeURIComponent(window.btoa(vfile));
                            var pattern = new RegExp('pdf');
                            if (pattern.test(vfile)) {
                                $(this).addClass('use-ajax feed-crm-pop_open');
                                /*$(this).attr("href", base_url+'form/user_information_form?f_path='+ftoken+'&force_download=1');*/
                                $(this).attr('file_path_att', ftoken);
                                $(this).attr("href", '#');
                                if (CRM_cookieget(drupalSettings.path.baseUrl)) {
                                    $(this).attr("href", "#");
                                    $(this).attr("target", "_self");
                                    //$(this).attr("href", base_url + 'form/user_information_form?f_path=' + ftoken + '&force_download=1');
                                    Drupal.attachBehaviors();
                                }
                            }
                        });
                        $('.connect-pop-wrapper').bind('scroll', function () {
                            if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
                                $('body').removeClass('has-modal');
                                $('.modal').removeClass('is-active');
                                $('.connect-pop-wrapper').animate({ scrollTop: 0 });
                                $('.modal').removeClass('feed-detailed-top');
                            }
                        });
                        $('.feed-crm-pop_wrapper').bind('scroll', function () {
                            if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
                                $('body').removeClass('has-feed-modal');
                                $('.feed-modal').removeClass('is-active');
                                $('.feed-crm-pop_wrapper').animate({ scrollTop: 0 });
                                $('.modal').removeClass('feed-detailed-top');
                                let rurl = aboutpageScroll();
                                if (rurl != '') {
                                    var _ = rurl;
                                    history.pushState({
                                        href: _
                                    }, "title", _);
                                    return true;
                                }
                                let source_item = $('.field--name-field-sourceitem-c input').val();
                                if ($(".js-post-close").hasClass('subscribeform-close')) {
                                    var trim_current_path = 'contact';
                                    var _ = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + trim_current_path;
                                    history.pushState({
                                        href: _
                                    }, "title", _);
                                    if ($(".js-form-submit").hasClass("subscribe-form-action-btn")) {
                                        $(".js-form-submit").removeClass("subscribe-form-action-btn");
                                    }
                                } else if (source_item == 'footer-connect' || source_item == 'region-connect') {
                                    var current_path = drupalSettings.current_alias_path;
                                    var _ = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + current_path.slice(1);
                                    history.pushState({
                                        href: _
                                    }, "title", _);
                                }
                            }
                        });
                        showiframevideos();
                        $('.post__share').on("click", function (e) {
                            e.preventDefault();
                            /*$('.post__share-copy-text.js-post__share-copy-text').val($(location).attr('href'));*/
                            $('.post__share-list').toggleClass("is-active");
                            $('.post__share-list li').delay(100).each(function (i) {
                                $(this).delay(200 * i).queue(function () {
                                    $(this).toggleClass('is__active').dequeue();
                                });
                            });
                            a2a.init_all();
                        });
                        $('.js-post__share-copy-button').on("click", function (e) {
                            $(this).siblings('input.post__share-copy-text.js-post__share-copy-text').select();
                            document.execCommand("copy");
                            $('.copy-link-text.js-copy-link-text').attr('aria-hidden', 'false');
                        });
                        $('.a2a_mailto').on("click", function (e) {
                            /*var subject = $('.a2a_dd.addtoany_share').attr('href').split('#')[1].split('&title=')[1];
                            var ideas_url = $('.a2a_dd.addtoany_share').attr('href').split('#')[1].split('&title=')[0].replace('url=', '');*/
                            var subject = $('.addtoany_list').attr('data-a2a-title');
                            var ideas_url = $('.addtoany_list').attr('data-a2a-url');
                            var bdy = Drupal.t("Hi, I found this article interesting from Ogilvy, you should check it out! ");
                            var mailto = "mailto:?subject=" + subject + "&body=" + bdy + ideas_url;
                            window.location = mailto;
                        });
                        $(".feed-crm-pop_open").on("click", function (e) {
                            e.preventDefault();
                            drupalSettings.errorcode = 0;
                            $('.progress_bar_error').val('0');
                            var email_pop = 0;
                            var nongatedPdf = $(this).attr('data-gated') ? $(this).attr('data-gated') : 0;
                            var connect_click = ['region-connect', 'footer-connect', 'idea-crm-default'];
                            if (CRM_cookieget(drupalSettings.path.baseUrl) && email_pop == 0 && nongatedPdf == 0) {
                                window_init_call = false;
                                $('body').addClass('has-feed-modal');
                                $('.feed-modal').addClass('is-active');
                                $('.connect-crm-wrap1 .feed-modal').removeClass('is-active');
                                $('.modal').addClass('feed-detailed-top');
                            }
                            else if ((CRM_cookieget(drupalSettings.path.baseUrl) && ($.inArray($(this).attr('class').split(' ')[2], connect_click) == -1 && $.inArray($(this).attr('class').split(' ')[1], connect_click) == -1)) || (nongatedPdf == 1)) {
                                var endpoint = base_url + 'filedownload?f_path=' + $(this).attr('file_path_att') + '&force_download=1&is_non_gated_pdf=' + nongatedPdf;
                                window.open(endpoint, "_blank");
                                return false;
                            } else {
                                $('body').addClass('has-feed-modal');
                                $('.feed-modal').addClass('is-active');
                                $('.modal').addClass('feed-detailed-top');
                            }
                            if ($(this).attr('file_path_att') != '') {
                                $('.field--name-field-f-path input').val($(this).attr('file_path_att'));
                            } else {
                                $('.field--name-field-f-path input').val("");
                            }
                            $('.sliding-popup-bottom').css('z-index', '99 !important');
                            var source_item = 'ideas-connect';
                            $('.success-message').hide();
                            var nodetitle = '';
                            var dialogid = '';
                            var srctitle = 0;
                            if ($(this).attr('class').split(' ')[1] == 'region-connect') {
                                dialogid = drupalSettings.dialogid_region_crm;
                                var trim_current_path = 'contact/subscribe';
                                var _ = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + trim_current_path;
                                history.pushState({
                                    href: _
                                }, "title", _);
                                email_pop = 1;
                            } else if ($(this).attr('class').split(' ')[2] == 'footer-connect') {
                                dialogid = drupalSettings.dialogid_footer_crm;
                                var trim_current_path = 'contact/subscribe';
                                var _ = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + trim_current_path;
                                history.pushState({
                                    href: _
                                }, "title", _);
                                email_pop = 1;
                            } else if ($(this).attr('class').split(' ')[2] == 'idea-crm-default') {
                                dialogid = drupalSettings.dialogid_idea_crm;
                                email_pop = 1;
                            } else {
                                dialogid = $("#dialogid-val").text();
                                srctitle = 1;
                            }
                            if ($(this).attr('class').split(' ')[1] == 'region-connect') {
                                source_item = 'region-connect';
                            } else if ($(this).attr('class').split(' ')[2] == 'footer-connect') {
                                source_item = 'footer-connect';
                            } else if ($(this).attr('class').split(' ')[2] == 'idea-crm-default') {
                                source_item = 'idea-crm-default';
                                /*nodetitle=$('.js-modal__content-wrapper .post__title').text().trim();*/
                            }
                            else {
                                nodetitle = $('.js-modal__content-wrapper .post__title').text().trim();
                            }
                            $('.post__title.static_title').show();
                            $('.post__title.ideas_title').hide();
                            $('.gated-content').hide();
                            $('.nongated-content').show();
                            $('span.select2-selection__rendered').removeClass('published');
                            $('.feed-modal').removeClass('email-crm-pop');
                            $('.success-message.gated-success-message').removeClass("email-only-success-message")
                            $('span.error').hide();
                            $('.only-email-content').hide();
                            $('#edit-field-name-wrapper, #edit-field-title-wrapper, #edit-field-account-name-wrapper, #edit-field-country-c-wrapper, #edit-field-crm-industries-wrapper').show();
                            if ($('#edit-field-name-0-value').val() == "email_prompt") {
                                $('#edit-field-name-0-value').val("");
                            }
                            if (nodetitle != '') {
                                $('.post__title.ideas_title').show();
                                $('.post__title.static_title').hide();
                                $('.feed-modal__content-wrapper .post__title.ideas_title').html(nodetitle);
                                $('.gated-content').show();
                                $('.nongated-content').hide();
                            }
                            if (CRM_cookieget(drupalSettings.path.baseUrl) && email_pop == 100) {
                                $('.post__title.ideas_title').hide();
                                $('.post__title.static_title').hide();
                                $('.gated-content').hide();
                                $('.nongated-content').hide();
                                $('.only-email-content').show();
                                $('.feed-modal').addClass('email-crm-pop');
                                $('.success-message.gated-success-message').addClass("email-only-success-message")
                                $('#edit-field-name-0-value').val("email_prompt");
                                $('#edit-field-name-wrapper, #edit-field-title-wrapper, #edit-field-account-name-wrapper, #edit-field-country-c-wrapper, #edit-field-crm-industries-wrapper').hide();
                                email_pop = 1;
                                dialogid = drupalSettings.dialogid_idea_email_crm;
                            }
                            $('.field--name-field-sourceitem-c input').val(source_item);
                            $('.field--name-field-dialogid input').val(dialogid);
                            if (srctitle == 1) {
                                $('.field--name-field-sourceitem-c input').val($("#sourceitemc-val").text());
                            }
                            $('.form-actions').addClass('connect-submit');
                            $('.form-actions').addClass('connect-crm-submit');
                        });
                        $(".js-modal__content-wrapper .js-post-close", ".modal__wrapper").once().on("click", function (event) {
                            event.stopPropagation();
                            $('body').removeClass('has-modal');
                            $('.js-modal').removeClass('is-active');
                            $('.js-modal__content-wrapper').html('');
                            if (current_path.indexOf('/private/ideas/') != -1) {
                                var _ = node_private_idea_title;
                            } else if (current_path.indexOf('/private-group/ideas/') != -1) {
                                var _ = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + current_path.slice(1);
                            } else if (current_path.indexOf('/ideas/') != -1) {
                                var _ = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + idea_page;
                            } else if (current_path.slice(1) == "about") {
                                let rurl = aboutpageScroll(current_path.slice(1));
                                var _ = rurl;
                            } else {
                                var _ = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + 'ideas';
                            }
                            history.pushState({
                                href: _
                            }, "title", _);
                        });

                        $(document).once().keydown(function (e) {
                            // ESCAPE key pressed
                            if (e.keyCode == 27) {
                                if (!$("body").hasClass('has-feed-modal')) {
                                    $("body").find(".modal").removeClass("is-active");
                                    $("body").removeClass("has-modal");
                                    $("body").removeClass("has-fraud-feed-modal");
                                    $('.feed-crm-pop_wrapper.connect-crm-wrap.connect-crm-wrap1').css('display', 'none');
                                    $('.js-modal__content-wrapper').html('');
                                    if (current_path.indexOf('/private/ideas/') != -1) {
                                        var _ = node_private_idea_title;
                                    } else if (current_path.indexOf('/private-group/ideas/') != -1) {
                                        var _ = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + current_path.slice(1);
                                    } else if (current_path.indexOf('/ideas/') != -1) {
                                        var _ = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + idea_page;
                                    } else if (current_path.slice(1) == "about") {
                                        let rurl = aboutpageScroll(current_path.slice(1));
                                        var _ = rurl;
                                    } else {
                                        var trim_current_path = current_path.slice(1);
                                        var _ = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + 'ideas';
                                    }
                                    history.pushState({
                                        href: _
                                    }, "title", _);
                                }
                            }
                        });
                        if ($('.video-embed-field-provider-tencent-cloud').length > 0) {
                            var imgExtns = ['jpg', 'jpeg', 'png', 'gif']
                            $('.video-embed-field-provider-tencent-cloud').children("video").each(function () {
                                var imgURL = $(this).parent().parent().parent(".multimedia").attr('style');
                                $(this).prop("id", "player-container-id-" + Math.floor(Math.random() * (10000 - 1) + 1));
                                if (!new RegExp(imgExtns.join("|")).test(imgURL)) {
                                    $(this).siblings('.js-multimedia-play').hide();
                                    var videoSrc = $(this).attr('src');
                                    var videoSrcarray = videoSrc.split("/");
                                    var videoId = (videoSrcarray[5] != "") ? videoSrcarray[5] : '5285890806895808244';
                                    var applicationId = (videoSrcarray[4] != "") ? videoSrcarray[4] : '1253349739';
                                    var player = TCPlayer($(this).attr('id'), {
                                        fileID: videoId,
                                        appID: applicationId
                                    });
                                }
                            });
                        }
                        $(".modal__wrapper.js-modal__wrapper").animate({ scrollTop: 0 }, "slow");
                    },
                    error: function (xhr) {
                    }
                });
            });
            var _ = drupalSettings.path.currentPath;
            var idea_page = drupalSettings.idea_page_path;
            var current_path = drupalSettings.current_alias_path;
            var node_private_idea_title = drupalSettings.current_private_idea_alias_path;
            $('.js-modal__wrapper').bind('scroll', function () {
                if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
                    $('body').removeClass('has-modal');
                    $('.modal').removeClass('is-active');
                    $('.js-modal__content-wrapper').html('');
                    $('.modal__wrapper').animate({ scrollTop: 0 });
                    if (current_path.indexOf('/private/ideas/') != -1) {
                        var _ = node_private_idea_title;
                    } else if (current_path.indexOf('/private-group/ideas/') != -1) {
                        var _ = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + current_path.slice(1);
                    } else if (current_path.indexOf('/ideas/') != -1) {
                        var _ = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + idea_page;
                    } else if (current_path.slice(1) == "about") {
                        let rurl = aboutpageScroll(current_path.slice(1));
                        var _ = rurl;
                    } else {
                        var trim_current_path = current_path.slice(1);
                        var _ = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + 'ideas';
                    }
                    history.pushState({
                        href: _
                    }, "title", _);
                }
            });
            $('.feed-post__close').click(function () {
                $('body').removeClass('has-feed-modal');
                $('.feed-modal').removeClass('is-active');
                $('.ui-dialog.ui-corner-all.ui-widget.ui-widget-content.ui-front.ui-dialog-buttons').remove();
                $('.modal').removeClass('feed-detailed-top');
                let rurl = aboutpageScroll();
                if (rurl != '') {
                    var _ = rurl;
                    history.pushState({
                        href: _
                    }, "title", _);
                    return true;
                }
                let source_item = $('.field--name-field-sourceitem-c input').val();
                if ($(".js-post-close").hasClass('subscribeform-close')) {
                    var trim_current_path = 'contact';
                    var _ = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + trim_current_path;
                    history.pushState({
                        href: _
                    }, "title", _);
                    if ($(".js-form-submit").hasClass("subscribe-form-action-btn")) {
                        $(".js-form-submit").removeClass("subscribe-form-action-btn");
                    }
                } else if (source_item == 'footer-connect' || source_item == 'region-connect') {
                    var current_path = drupalSettings.current_alias_path;
                    var _ = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + current_path.slice(1);
                    history.pushState({
                        href: _
                    }, "title", _);
                }
            });
            $(document).on('keyup', function (evt) {
                if (evt.keyCode == 27 && ($("body").hasClass("has-feed-modal") || $("body").hasClass("has-fraud-feed-modal") || $("body").hasClass("has-feed-modal-new"))) {
                    $('body').removeClass('has-feed-modal');
                    $('.feed-modal').removeClass('is-active');
                    $('.feed-crm-pop_wrapper').animate({ scrollTop: 0 });
                    $('body').removeClass('has-feed-modal-new');
                    $('.feed-modal-new').removeClass('is-active');
                    $('.feed-crm-pop_wrapper-new').animate({ scrollTop: 0 });
                    $('.modal').removeClass('feed-detailed-top');
                    $("body").removeClass("has-fraud-feed-modal");
                    $('.feed-crm-pop_wrapper.connect-crm-wrap.connect-crm-wrap1').css('display', 'none');
                    let rurl = aboutpageScroll();
                    if (rurl != '') {
                        var _ = rurl;
                        history.pushState({
                            href: _
                        }, "title", _);
                        return true;
                    }
                    let source_item = $('.field--name-field-sourceitem-c input').val();
                    if ($(".feed-post__close").hasClass('subscribeform-close')) {
                        var trim_current_path = 'contact';
                        var _ = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + trim_current_path;
                        history.pushState({
                            href: _
                        }, "title", _);
                        if ($(".js-form-submit").hasClass("subscribe-form-action-btn")) {
                            $(".js-form-submit").removeClass("subscribe-form-action-btn");
                        }
                    } else if (source_item == 'footer-connect' || source_item == 'region-connect') {
                        var current_path = drupalSettings.current_alias_path;
                        var _ = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + current_path.slice(1);
                        history.pushState({
                            href: _
                        }, "title", _);
                    }
                }
            });
            $(document).on('click', '.connect-crm-submit, .feed-crm-submit', function () {
                $('.connect-pop-wrapper, .feed-crm-pop_wrapper, .feed-crm-pop_wrapper-new').animate({ scrollTop: $('.connect-pop-wrapper .modal, .feed-crm-pop_wrapper .feed-modal, .feed-crm-pop_wrapper-new .feed-modal-new').outerHeight() + 500 });
                $('.modal').removeClass('feed-detailed-top');
            });
            $('.connect-pop-wrapper').bind('scroll', function () {
                if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
                    $('body').removeClass('has-modal');
                    $('.modal').removeClass('is-active');
                    $('.connect-pop-wrapper').animate({ scrollTop: 0 });
                    $('.modal').removeClass('feed-detailed-top');
                }
            });
            $('.feed-crm-pop_wrapper').bind('scroll', function () {
                if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
                    $('body').removeClass('has-feed-modal');
                    $('.feed-modal').removeClass('is-active');
                    $('.feed-crm-pop_wrapper').animate({ scrollTop: 0 });
                    $('.modal').removeClass('feed-detailed-top');
                    let rurl = aboutpageScroll();
                    if (rurl != '') {
                        var _ = rurl;
                        history.pushState({
                            href: _
                        }, "title", _);
                        return true;
                    }
                    let source_item = $('.field--name-field-sourceitem-c input').val();
                    if ($(".js-post-close").hasClass('subscribeform-close')) {
                        var trim_current_path = 'contact';
                        var _ = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + trim_current_path;
                        history.pushState({
                            href: _
                        }, "title", _);
                        if ($(".js-form-submit").hasClass("subscribe-form-action-btn")) {
                            $(".js-form-submit").removeClass("subscribe-form-action-btn");
                        }
                    } else if (source_item == 'footer-connect' || source_item == 'region-connect') {
                        var current_path = drupalSettings.current_alias_path;
                        var _ = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + current_path.slice(1);
                        history.pushState({
                            href: _
                        }, "title", _);
                    }
                }
            });
            $('.feed-crm-pop_wrapper, .feed-crm-pop_wrapper-new').click(function () {
                $('body').removeClass('has-feed-modal');
                $('body').removeClass('has-feed-modal-new');
                $('.feed-modal').removeClass('is-active');
                $('body').removeClass('has-fraud-feed-modal');
                $('.feed-crm-pop_wrapper').animate({ scrollTop: 0 });
                $('.modal').removeClass('feed-detailed-top');
                $('.ui-dialog.ui-corner-all.ui-widget.ui-widget-content.ui-front.ui-dialog-buttons').remove();
                let rurl = aboutpageScroll();
                if (rurl != '') {
                    var _ = rurl;
                    history.pushState({
                        href: _
                    }, "title", _);
                    return true;
                }
                let source_item = $('.field--name-field-sourceitem-c input').val();
                if ($(".js-post-close").hasClass('subscribeform-close')) {
                    var trim_current_path = 'contact';
                    var _ = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + trim_current_path;
                    history.pushState({
                        href: _
                    }, "title", _);
                    if ($(".js-form-submit").hasClass("subscribe-form-action-btn")) {
                        $(".js-form-submit").removeClass("subscribe-form-action-btn");
                    }
                } else if (source_item == 'footer-connect' || source_item == 'region-connect') {
                    var current_path = drupalSettings.current_alias_path;
                    var _ = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + current_path.slice(1);
                    history.pushState({
                        href: _
                    }, "title", _);
                }

            });
            $('.feed-modal, .feed-modal-new').click(function (evt) {
                evt.stopPropagation();
            });
            $('.connect-topics .all-brands a').once().on("click", function (event) {
                $(this).toggleClass('all_active');
                event.preventDefault();
                if ($(this).hasClass('all_active')) {
                    $('.connect-topics li input:checkbox').each(function () {
                        this.checked = true;
                    });
                } else {
                    $('.connect-topics li input:checkbox').each(function () {
                        this.checked = false;
                    });
                }
            });
            $('.connect-topics li label').click(function () {
                $('.connect-topics .all-brands a').removeClass('all_active');
            });
            var timer = null;
            var prev_elementTop = null;
            $(window).scroll(function () {
                if (drupalSettings.path.currentPath == 'about' || drupalSettings.node_alias_path == '/about') {
                    clearTimeout(timer);
                    $('.scrollMenu a').each(function (index) {
                        if (!$(this).hasClass('language-link')) {
                            $(this).removeClass('is-active');
                        }
                    });
                    $('.scrollSection').each(function (index) {
                        var elementTop = $(this).offset().top;
                        var elementBottom = elementTop + $(this).outerHeight();
                        var viewportTop = $(window).scrollTop();
                        var viewportBottom = viewportTop + 500;
                        if (elementBottom > viewportTop && elementTop < viewportBottom) {
                            if (index > 0) {
                                $(".menu_ogilvy_t").show();
                                $(".remove-ogilvy-link").hide();
                            } else {
                                $(".menu_ogilvy_t").hide();
                                $(".remove-ogilvy-link").show();
                            }
                            if ($('.scrollSection').hasClass('capabilities-section') && $('.scrollSection').hasClass('clients-section')) {
                                if (index >= 3) {
                                    index = index - 2;
                                    $(".menu_ogilvy_t").show();
                                    $(".remove-ogilvy-link").hide();
                                } else {
                                    index = 0;
                                    $(".menu_ogilvy_t").hide();
                                    $(".remove-ogilvy-link").show();
                                }
                            }
                            $('.scrollMenu a').eq(index).addClass('is-active');
                            var _ = $('.scrollMenu a.is-active').attr('href');
                            if (elementTop != prev_elementTop || index == 3) {
                                timer = setTimeout(function () {
                                    history.replaceState({
                                        id: _
                                    }, "title", _);
                                }, 1000);
                                prev_elementTop = elementTop;
                            }
                        }
                        $('.scrollMenu a.is-active').not('a.language-link').not(':last').removeClass('is-active');
                    });
                }
            });
            $('.portfolio__info-trigger').click(function () {
                $('.portfolio__info').toggleClass('is__active');
            });
            /* Targeting mac devices */
            if (navigator.userAgent.indexOf('Mac OS X') != -1) {
                $("body").addClass("mac");
            }
            /* mobile languages */
            $(window).scroll(function () {
                if ($(this).scrollTop() > 500) {
                    $('.mobile-languages').addClass('red');
                } else {
                    $('.mobile-languages').removeClass('red');
                }
            });
            /* Careers slider height */
            var maxHeight = 0;
            $('.careers-slide-mob h2').each(function () {
                if ($(this).height() > maxHeight) {
                    maxHeight = $(this).height();
                }
            });
            $('.careers-slide-mob h2').height(maxHeight);
            $('.careers-slide-con').css('margin-top', maxHeight + 5);
            /* Our Offilce */
            $('.localized-office-slider').slick({
                dots: false,
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                centerMode: false,
                variableWidth: true
            });
            /* Load Work data by capabilities in URL*/
            $('#search-capabilities .subcategories').each(function () {
                /*var capability = $(this).text().trim();
                var capability_url_lower = (capability.toLowerCase().replace(/& /g, "")).replace(/ /g, "-").replace(/é/g, "e");*/
                var cap_name = $(this).parent(".option").siblings("input[type=checkbox]").attr('data-url');
                var loc = $(location).attr('pathname').split('/');
                var capabilityName = "";
                if (loc.length == 3) {
                    capabilityName = loc[2];
                } else if (loc.length == 4) {
                    capabilityName = loc[3];
                } else {
                    capabilityName = loc[4];
                }
                if (cap_name == capabilityName) {
                    setTimeout(function () {
                        if ($("li.search-form-wrap form").hasClass('has-search')) {
                            $('.work__search-grid-wrapper').removeClass('active');
                        }
                    }, 1000);
                    $('.section__search-form').addClass('is-active');
                    $('.section__search-form').next("input").focus();
                    $('.js-section-page-view.search-icons').css('display', 'block !important');
                    $('.feeds__filters li.section__grid-filters + li').removeClass('is__active');
                    /*$('.section__grid-utilities .section__search-form').hide();
                    $('.adv-search-list').fadeIn();*/
                    if (Wrk_cap_detect != 1) {
                        $(this).parent(".option").siblings("input[type=checkbox]").attr('checked', 'checked');
                        $(this).addClass('is-active');
                        Wrk_cap_detect = 1;
                    }
                    if ($.trim($("#search-industries").html()) && $.trim($("#search-clients").html())) {
                        $(".section__search-form.js-work-search").removeClass("is-active");
                        $(".section__search-form.js-work-search").css("display", "none");
                        Wrk_close_clk = 0;
                        Wrk_txny_page_detect = 1;
                    } else {
                        Wrk_glb_txny_detect = 1;
                    }
                    setTimeout(function () {
                        /*$('.adv-search-list li:nth-child(2) a').trigger('click');*/
                    }, 1000);
                    return false;
                }
            });
            $('.adv-search-list li a.capabilities').click(function () {
                $('.grid__item').removeClass('is__active');
                $('#search-capabilities .grid__item').delay(200).each(function (i) {
                    $(this).delay(100 * i).queue(function () {
                        $(this).addClass('is__active').dequeue();
                        $('#search-industries .grid__item').removeClass('is__active');
                        $('#search-clients .grid__item').removeClass('is__active');
                    });
                });
            });
            $('.adv-search-list li a.industries').click(function () {
                $('.grid__item').removeClass('is__active');
                $('#search-industries .grid__item').delay(200).each(function (i) {
                    $(this).delay(10 * i).queue(function () {
                        $(this).addClass('is__active').dequeue();
                        $('#search-capabilities .grid__item').removeClass('is__active');
                        $('#search-clients .grid__item').removeClass('is__active');
                    });
                });
            });
            $('.adv-search-list li a.clients').click(function () {
                $('.grid__item').removeClass('is__active');
                $('#search-clients .grid__item').delay(200).each(function (i) {
                    $(this).delay(10 * i).queue(function () {
                        $(this).addClass('is__active').dequeue();
                        $('#search-capabilities .grid__item').removeClass('is__active');
                        $('#search-industries .grid__item').removeClass('is__active');
                    });
                });
            });
            $('.careers-video .multimedia__play').click(function () {
                $('.careers-video iframe').css('z-index', '0');
            });
            function autoText() {
                if ($(".work__search-grid ul").has("li").length === 0) {
                    $('.work__search-grid-wrapper').addClass('active');
                } else {
                    $('.work__search-grid-wrapper').removeClass('active');
                }
            }
            $("body").find('.form-autocomplete').on('autocompleteclose', function (event, node) {
                var val = $(this).val();
                var match = val.match(/\((.*?)\)$/);
                if (match) {
                    $(this).data('real-value', val);
                    $(this).val(val.replace(' ' + match[0], ''));
                }
            });
            $('.feed-crm-pop_open-new').click(function () {
                $('body').addClass('has-feed-modal-new');
                $('.feed-modal-new').addClass('is-active');
                $(this).parents().find('.modal').addClass('feed-detailed-top');
            });
            $(".post__close.js-post-close").on("click", function () {
                var _ = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + idea_page.slice(1);
                $('body').removeClass('has-modal, has-modal-new');
                $('.js-modal , .feed-modal-new').removeClass('is-active');
                $('.js-modal__content-wrapper').html('');
                if (current_path.indexOf('/private/ideas/') != -1) {
                    var _ = node_private_idea_title;
                } else if (current_path.indexOf('/private-group/ideas/') != -1) {
                    var _ = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + current_path.slice(1);
                } else if (current_path.indexOf('/ideas/') != -1) {
                    var _ = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + idea_page;
                } else {
                    var trim_current_path = current_path.slice(1);
                    var _ = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + trim_current_path;
                }
                history.pushState({
                    href: _
                }, "title", _);
            });
            $('.post__close-button').click(function () {
                $('body').removeClass('has-feed-modal-new');
                $('.feed-modal-new').removeClass('is-active');
            });
            $(".feed-post__close.js-post-close.js-fraud-close").on("click", function () {
                $('body').removeClass('has-fraud-feed-modal');
                $('.feed-crm-pop_wrapper.connect-crm-wrap.connect-crm-wrap1').css('display', 'none');
            });
            $(document).keydown(function (e) {
                // ESCAPE key pressed
                if (e.keyCode == 27 && $("body").hasClass('has-modal') && !$("body").hasClass('has-feed-modal')) {
                    //if (!$("body").hasClass('has-feed-modal')) {
                    var _ = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + idea_page.slice(1);
                    $("body").find(".modal").removeClass("is-active");
                    $("body").removeClass("has-modal");
                    $('.js-modal__content-wrapper').html('');
                    if (current_path.indexOf('/private/ideas/') != -1) {
                        var _ = node_private_idea_title;
                    } else if (current_path.indexOf('/private-group/ideas/') != -1) {
                        var _ = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + current_path.slice(1);
                    } else if (current_path.indexOf('ideas/') != -1) {
                        var _ = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + idea_page;
                    } else {
                        var trim_current_path = current_path.slice(1);
                        var _ = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + trim_current_path;
                    }
                    history.pushState({
                        href: _
                    }, "title", _);
                    //}
                }
            });

            $(".content-entity-file-utility-form .form-submit").click(function (event) {
                event.preventDefault();
                $('#progress_bar').removeClass('progress_bar_error');
                $('.success-message').css('display', 'none');
                $('.error').css('display', 'none');
                var progressbar = $('#progress_bar');
                var max = $('#progress_bar').attr('max');
                var time = (1500 / max) * 12;
                var value = 0;
                var loading = function () {
                    if (drupalSettings.errorcode != 1) {
                        value += 1;
                    } else {
                        value = 100;
                    }
                    var addValue = progressbar.val(value);
                    $('.progress-value').html(value + '%');
                    if (value == max) {
                        clearInterval(animate);
                    }
                };
                var animate = setInterval(function () {
                    loading();
                }, time);
                $(document).ajaxComplete(function () {
                    if (drupalSettings.errorcode == 3) {
                        clearInterval(animate);
                    }
                    if (drupalSettings.errorcode == 1) {
                        $('.connect-crm-submit').prop('disabled', true);
                        $('.feed-modal').addClass('crm-success');
                        let source_item = $('.field--name-field-sourceitem-c input').val();
                        if (source_item == 'footer-connect' || source_item == 'region-connect' || source_item == 'idea-crm-default') {
                            $('.success-message.nongated-success-message').css('display', 'block');
                        } else {
                            $('.success-message.gated-success-message').css('display', 'block');
                        }

                        CRM_cookieset(drupalSettings.path.baseUrl);

                        setTimeout(function () {
                            $('#content-entity-file-utility-add-form').trigger("reset");
                            $("#edit-field-crm-industries").val('').trigger('change');
                            $("#edit-field-country-c").val('').trigger('change');
                            $('body').removeClass('has-feed-modal');
                            $('.feed-modal').removeClass('is-active');
                            $('.feed-crm-pop_wrapper').animate({ scrollTop: 0 });
                            $('.modal').removeClass('feed-detailed-top');
                            $('#progress_bar').addClass('progress_bar_error');
                            let rurl = aboutpageScroll();
                            if (rurl != '') {
                                var _ = rurl;
                                history.pushState({
                                    href: _
                                }, "title", _);
                                return true;
                            }
                            let source_item = $('.field--name-field-sourceitem-c input').val();
                            var current_path = drupalSettings.current_alias_path;
                            if (current_path.slice(1) == "contact/subscribe") {
                                var trim_current_path = 'contact';
                                var _ = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + trim_current_path;
                                history.pushState({
                                    href: _
                                }, "title", _);
                                if ($(".js-form-submit").hasClass("subscribe-form-action-btn")) {
                                    $(".js-form-submit").removeClass("subscribe-form-action-btn");
                                }
                            } else if (source_item == 'footer-connect' || source_item == 'region-connect') {
                                var current_path = drupalSettings.current_alias_path;
                                var sectionArr = ["capabilities", "work", "careers"];
                                var strFound = $.grep(sectionArr, function (value, i) {
                                    return path_name.indexOf(value) != -1
                                }).length;
                                if (path_name != "" && strFound == 0) {
                                    var pathArr = path_name.split("/");
                                    var curr_path = pathArr[pathArr.length - 1];
                                    var _ = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + curr_path;
                                } else {
                                    var _ = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + current_path.slice(1);
                                }
                                history.pushState({
                                    href: _
                                }, "title", _);
                            }
                            clearInterval(animate);
                            if (CRM_cookieget(drupalSettings.path.baseUrl)) {
                                if ($('.field--name-field-f-path input').val() != "") {
                                    var endpoint = drupalSettings.path.baseUrl + 'filedownload?f_path=' + $('.feed-crm-pop_open').attr('file_path_att') + '&force_download=1';
                                    if (!isInAppBrowser()) {
                                        if (!window_init_call) {
                                            window_init_call = true;
                                            window.open(endpoint, '_blank');
                                        }
                                    } else {
                                        window.open(endpoint, '_self');
                                    }
                                    return false;
                                }
                            }
                        }, 2000);
                    }
                });
            });
            /* Fixed OCOM-397 issue on Apr 16 2020 */
            showiframevideos();
            function showiframevideos() {
                var prevAgreedCategoriesObj = [];
                if (cookies.get('cookie-agreed-categories')) {
                    var prevAgreedCatVals = cookies.get('cookie-agreed-categories');
                    prevAgreedCategoriesObj = JSON.parse(CookieDecode(prevAgreedCatVals));
                }
                if (typeof cookies.get('cookie-agreed-categories') == 'undefined' || prevAgreedCategoriesObj[visit_site] == undefined || (prevAgreedCategoriesObj[visit_site] != undefined && prevAgreedCategoriesObj[visit_site][geo_country_code] == undefined) || (typeof cookies.get('cookie-agreed-categories') != 'undefined' && prevAgreedCategoriesObj[visit_site] != undefined) || $('.video-embed-field-provider-tencent-cloud').length > 0) {
                    $(".js-multimedia-play").click(function () {
                        var iframe_element = $(this).prev();
                        $(this).hide();
                        var player = $(this).prev().get(0);
                        var playerSrc = $(this).prev().attr('src');
                        if (typeof player !== "undefined" && playerSrc.match(/vimeo/g)) {
                            var player = new Vimeo.Player(iframe_element);
                            if (player['play']) {
                                player['play']();
                            }
                            setTimeout(function () {
                                iframe_element.show();
                            }, 750);
                        } else if (typeof player !== "undefined" && playerSrc.match(/vod2.myqcloud/g)) {
                            $(this).parent().parent(".multimedia").css("background-image", "none");
                            $(this).parent().parent().parent(".multimedia").css("background-image", "none");
                            /*$('div.video-embed-field-provider-tencent-cloud + div').hide();*/
                            if ($(this).parent('.video-embed-field-provider-tencent-cloud').siblings('div').hasClass("poster")) {
                                $(this).parent('.video-embed-field-provider-tencent-cloud').siblings('div.poster').hide();
                            } else {
                                $(this).parent('.video-embed-field-provider-tencent-cloud').siblings('div').addClass("poster");
                                $(this).parent('.video-embed-field-provider-tencent-cloud').siblings('div.poster').hide();
                            }
                            //$("."+$(this).prev().attr('id')+"-dimensions").css({"width":"100%", "height":"100%","padding-top": "56.25%"});
                            var videoSrc = $(this).prev().attr('src');
                            var videoSrcarray = videoSrc.split("/");
                            var videoId = (videoSrcarray[5] != "") ? videoSrcarray[5] : '5285890806895808244';
                            var applicationId = (videoSrcarray[4] != "") ? videoSrcarray[4] : '1253349739';
                            var tcplayer = TCPlayer($(this).prev().attr('id'), {
                                fileID: videoId,
                                appID: applicationId,
                            });
                            tcplayer.play();
                        }
                    });

                }
            }
            $('.modal__wrapper').click(function (event) {
                var watch_idea_url = _;
                var _ = '';
                if (current_path.indexOf('/private/ideas/') != -1) {
                    var _ = node_private_idea_title;
                } else if ($(location).attr('pathname').split('/')[1] == 'ideas') {
                    var _ = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + $(location).attr('pathname').split('/')[1];
                }
                //if you click on anything except the modal itself or the "open modal" link, close the modal
                if ($(this).find(".watch_category").length) {
                    history.pushState({
                        href: watch_idea_url
                    }, "title", watch_idea_url);
                }
                else if (!$(event.target).closest(".modal,.js-open-modal").length) {
                    $("body").find(".modal").removeClass("is-active");
                    $("body").removeClass("has-modal");
                    $('.js-modal__content-wrapper').html('');
                    history.pushState({
                        href: _
                    }, "title", _);
                }
            });
        }
    };
    $(document).ready(function () {
        $(".js-contact__subnav-link").on("click", function () {
            $(".js-contact__subnav-link").attr('aria-expanded', 'false');
            var contactPop = $(this);
            var contactPopOpen = contactPop.attr('aria-expanded') === 'true';
            contactPop.attr('aria-expanded', !contactPopOpen);
        });
        /* Fixed OCOM-1109 issue on Jan 31 2024 */
        if (window.location.href.indexOf('#work') !== -1) {
            $(".site-nav__sub-list li:first-child a").addClass("is-active");
        }
        var currentUrl = window.location.href;
        if (currentUrl.includes("/work/")) {
            var index = currentUrl.indexOf("/work/") + "/work/".length;
            var subString = currentUrl.substring(index);
            if (subString.trim() !== "") {
                $(".section__grid-work-search").css("display", "none");
            }
        }
        $(".site-nav__btn.burger").on("click", function () {
            var label = $(this);
            var menuToggle = $("#menu-toggle");
            var isMenuExpanded = menuToggle.prop("checked");
            var newLabel = isMenuExpanded ? "Open main menu" : "Close main menu";
            label.attr("aria-label", newLabel);
            label.attr("aria-expanded", !isMenuExpanded);
        });

        $(".opportunities-dropdown-btn").on("click", function () {
            var $opportunitiesDropdown = $(this);
            var opportunitiesDropdownOpen = $opportunitiesDropdown.attr('aria-expanded') === 'true';

            $(".opportunities-dropdown-btn").attr('aria-expanded', false);
            $(".opportunities-dropdown-btn").attr("aria-label", "Open Opportunities");

            $opportunitiesDropdown.attr('aria-expanded', !opportunitiesDropdownOpen);
            var opportunitiesDropdownLabel = opportunitiesDropdownOpen ? "Open Opportunities" : "Close Opportunities";
            $opportunitiesDropdown.attr("aria-label", opportunitiesDropdownLabel);
        });

        $(".contact-grid-open").on("click", function () {
            var $contactGrid = $(this);
            var contactGridOpen = $contactGrid.attr('aria-expanded') === 'true';

            $(".contact-grid-open").attr('aria-expanded', false);
            $(".contact-grid-open").attr("aria-label", "Open Contact Grid");

            $contactGrid.attr('aria-expanded', !contactGridOpen);
            var contactGridLabel = contactGridOpen ? "Open Contact Grid" : "Close Contact Grid";
            $contactGrid.attr("aria-label", contactGridLabel);
        });

        $(".team-grid-open").on("click", function () {

            var $teamGridLinks = $(this);
            var teamGridLinksOpen = $teamGridLinks.attr('aria-expanded') === 'true';

            $(".team-grid-open").attr('aria-expanded', false);
            $(".team-grid-open").attr("aria-label", "Open Team Grid");

            $teamGridLinks.attr('aria-expanded', !teamGridLinksOpen);
            var teamGridLinksLabel = teamGridLinksOpen ? "Open Team Grid" : "Close Team Grid";
            $teamGridLinks.attr("aria-label", teamGridLinksLabel);
        });

        $(".social-list-open").on("click", function () {
            var socialLinks = $(this);
            var socialLinksOpen = socialLinks.attr('aria-expanded') === 'true';
            socialLinks.attr('aria-expanded', !socialLinksOpen);
            var socialLinksLabel = socialLinksOpen ? "Open social menu" : "Close social menu";
            socialLinks.attr("aria-label", socialLinksLabel);
        });
        $(".location-list-open").on("click", function () {
            var socialLinks = $(this);
            var socialLinksOpen = socialLinks.attr('aria-expanded') === 'true';
            socialLinks.attr('aria-expanded', !socialLinksOpen);
            var socialLinksLabel = socialLinksOpen ? "Open Location menu" : "Close Location menu";
            socialLinks.attr("aria-label", socialLinksLabel);
        });
        $(".info-section-open").on("click", function () {
            var infoSectionLinks = $(this);
            var socialLinksOpen = infoSectionLinks.attr('aria-expanded') === 'true';
            infoSectionLinks.attr('aria-expanded', !socialLinksOpen);
            var infoSectionLinksLabel = socialLinksOpen ? "Open Info Section" : "Close Info Section";
            infoSectionLinks.attr("aria-label", infoSectionLinksLabel);
        });
        $(".contact-grid-open").on("click", function () {
            var contactGridLinks = $(this);
            var contactGridLinksOpen = contactGridLinks.attr('aria-expanded') === 'true';
            contactGridLinks.attr('aria-expanded', !contactGridLinksOpen);
            var contactGridLinksLabel = contactGridLinksOpen ? "Open Contact Grid" : "Close Contact Grid";
            contactGridLinks.attr("aria-label", contactGridLinksLabel);
        });
        $(".team-grid-open").on("click", function () {
            var teamGridLinks = $(this);
            var teamGridLinksOpen = teamGridLinks.attr('aria-expanded') === 'true';
            teamGridLinks.attr('aria-expanded', !teamGridLinksOpen);
            var socialLinksLabel = teamGridLinksOpen ? "Open Team Grid" : "Close Team Grid";
            teamGridLinks.attr("aria-label", socialLinksLabel);
        });
        $(".subscribe-popup-open").on("click", function () {
            var subscribePop = $(this);
            var subscribePopOpen = subscribePop.attr('aria-expanded') === 'true';
            subscribePop.attr('aria-expanded', !subscribePopOpen);
            var subscribePopLabel = subscribePopOpen ? "Open Subscribe popup" : "Close Subscribe popup";
            subscribePop.attr("aria-label", subscribePopLabel);
        });

        $("body").delegate(".menu_ogilvy_t", "click", function (e) {
            e.preventDefault();
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        });
        if ($('.video-embed-field-provider-tencent-cloud').length > 0) {
            $('.video-embed-field-provider-tencent-cloud').children("video").each(function () {
                if ($(this).parent().parent().hasClass("multimedia")) {
                    var imgURL = $(this).parent().parent(".multimedia").attr('data-posterimg');
                    var html = '<div class="poster"><img src="' + imgURL + '" /></div>';
                    $(this).parent(".video-embed-field-provider-tencent-cloud").after(html);
                } else if ($(this).parent().parent().parent().hasClass("multimedia")) {
                    if (window.location.pathname.indexOf('ideas') < 0) {
                        var imgURL = $(this).parent().parent().parent(".multimedia").attr('data-posterimg');
                        var html = '<div class="poster"><img src="' + imgURL + '" /></div>';
                        $(this).parent(".video-embed-field-provider-tencent-cloud").after(html);
                    } else {
                        var imgURL = $(this).parent().parent().parent(".multimedia").attr('style');
                    }

                }
                var imgExtns = ['jpg', 'jpeg', 'png', 'gif'];
                if (!new RegExp(imgExtns.join("|")).test(imgURL)) {
                    $(this).siblings('.js-multimedia-play').hide();
                    var videoSrc = $(this).attr('src');
                    var videoSrcarray = videoSrc.split("/");
                    var videoId = (videoSrcarray[5] != "") ? videoSrcarray[5] : '5285890806895808244';
                    var applicationId = (videoSrcarray[4] != "") ? videoSrcarray[4] : '1253349739';
                    var player = TCPlayer($(this).attr('id'), {
                        fileID: videoId,
                        appID: applicationId,
                        //autoplay: true
                    });
                }
            });
        }
        $(document).ajaxComplete(function (event, xhr, settings) {
            if ('extraData' in settings) {
                if (settings.extraData.view_name == "our_work_grid") {
                    filter_capture(drupalSettings.path.baseUrl);
                }
            } else {
                var data = JSON.stringify(settings.data);
                if (typeof data !== 'undefined') {
                    if (data.includes("our_work_grid")) {
                        filter_capture(drupalSettings.path.baseUrl);
                    }
                }
            }
            var currentUrl = window.location.href;
            if (currentUrl.includes("/work/")) {
                var index = currentUrl.indexOf("/work/") + "/work/".length;
                var subString = currentUrl.substring(index);
                if (subString.trim() !== "") {
                    $(".section__grid-work-search").css("display", "none");
                }
            }
        });

        $(".retrieve_filters").click(function () {
            filter_switch_capture(drupalSettings.path.baseUrl, 1);
        });
        if (current_path.indexOf('/work') != -1) {
            var flt = filter_switch_reflection(drupalSettings.path.baseUrl);
            if (flt == 1 && ($('#views-exposed-form-our-work-grid-our-work-grid').length > 0)) {
                filter_reflection(drupalSettings.path.baseUrl);
                filter_switch_capture(drupalSettings.path.baseUrl, 0);
            }
        }
        language_sw_class();
        $(window).on('resize', function () {
            language_sw_class();
        });
        $(".ui-autocomplete-input").keyup(function () {
            $(".ui-autocomplete-input").autocomplete("option", "appendTo", ".countrySuggestions");
        });
        function matchStart(params, data) {
            params.term = params.term || '';
            if (data.text.toUpperCase().indexOf(params.term.toUpperCase()) == 0) {
                return data;
            }
            return false;
        }
        var country_label = $(".form-item-field-country-c label").text();
        $('#edit-field-country-c').select2({
            dropdownParent: $('.countrySuggestions'),
            placeholder: country_label,
            width: '100%',
            matcher: function (params, data) {
                return matchStart(params, data);
            },
        });
        var industry_label = $(".form-item-field-crm-industries label").text();
        $('#edit-field-crm-industries').select2({
            dropdownParent: $('.industrySuggestions'),
            placeholder: industry_label,
            width: '100%',
            matcher: function (params, data) {
                return matchStart(params, data);
            },
        });
        $('#edit-region').select2({
            dropdownParent: $('.regionSuggestions'),
            placeholder: 'Region of interest',
            width: '100%',
            matcher: function (params, data) {
                return matchStart(params, data);
            },
        });
        $('#edit-interest').select2({
            dropdownParent: $('.interestSuggestions'),
            placeholder: "I'm interested in...",
            width: '100%',
            matcher: function (params, data) {
                return matchStart(params, data);
            },
        });
        $("#edit-field-country-c, #edit-field-crm-industries, #edit-interest, #edit-region").change(function () {
            $(this).next('span').children('span').children('span').children('span.select2-selection__rendered').addClass('published');
        });

        $('.footer-right-nav li.social-list a').click(function () {

            $('.footer-right-nav li.social-list ul li span').delay(600).each(function (i) {
                $(this).delay(300 * i).queue(function () {
                    $(this).toggleClass('is__active').dequeue();

                })
            })

        });
        $('.site-footer__primary-nav li.polices-list a').click(function () {
            $('.site-footer__primary-nav li.polices-list ul li span').delay(600).each(function (i) {
                $(this).delay(150 * i).queue(function () {
                    $(this).toggleClass('is__active').dequeue();
                })
            })
        });


        $(".footer-right-nav li.country-list > a").click(function () {
            if (!$(this).hasClass("active")) {
                $(this).addClass('active')
                $('.footer-right-nav li.social-list ul li span').removeClass('is__active');
                $('.footer-right-nav li.country-list').addClass('active');
                $('.Country-list').delay(450).slideToggle();
                setTimeout(function () {
                    $('.footer-right-nav li.country-list ul li').addClass('is__active');
                }, 600);


            }
            else {
                $(this).removeClass('active')
                $('.Country-list').slideToggle();
                $('.footer-right-nav li.country-list ul li').toggleClass('is__active');
                setTimeout(function () {
                    $('.footer-right-nav li.country-list').removeClass('active');
                }, 600);
            }

            $('.footer-right-nav li.social-list').not(this).removeClass('active');
            $('.footer-right-nav li.social-list a').not(this).removeClass('active');
            $('.social-nav-list').hide();
        });

        $(".footer-right-nav li.social-list > a").click(function () {
            if (!$(this).hasClass("active")) {
                $(this).addClass('active')
                $('.footer-right-nav li.social-list').addClass('active');
                $('.social-nav-list').delay(500).slideToggle();
                setTimeout(function () {
                    $('.footer-right-nav li.social-list ul li').addClass('is__active');
                }, 600);
                $('.footer-right-nav li.country-list a').remove('active');

            }
            else {
                $(this).removeClass('active')
                $('.social-nav-list').slideToggle();
                $('.footer-right-nav li.social-list ul li').toggleClass('is__active');
                setTimeout(function () {
                    $('.footer-right-nav li.social-list').removeClass('active');
                }, 600);

            }
            $('.footer-right-nav li.country-list').not(this).removeClass('active');
            $('.footer-right-nav li.country-list a').not(this).removeClass('active');
            $('.Country-list').hide();
        });
        $(".site-footer__primary-nav li.polices-list a").click(function () {
            if (!$(this).hasClass("active")) {
                $(this).addClass('active')
                $('.site-footer__primary-nav li.polices-list').addClass('active');
                $('.footer-right-nav li.Language-list ul li span').removeClass('is__active');
                $('.footer-right-nav li.social-list ul li span').removeClass('is__active');
                $('.polices-nav-list').delay(450).slideToggle();
                setTimeout(function () {
                    $('.site-footer__primary-nav li.polices-list ul li').addClass('is__active');
                }, 600);
                $('.footer-right-nav li.country-list a').remove('active');
                $('.footer-right-nav li.Language-list a').remove('active');
                $('.footer-right-nav li.social-list a').remove('active');
            }
            else {
                $(this).removeClass('active')
                $('.polices-nav-list').slideToggle();
                $('.site-footer__primary-nav li.polices-list ul li').toggleClass('is__active');
                setTimeout(function () {
                    $('.site-footer__primary-nav li.polices-list').removeClass('active');
                }, 600);
            }
            $('.footer-right-nav li.country-list').not(this).removeClass('active');
            $('.footer-right-nav li.country-list a').not(this).removeClass('active');
            $('.Country-list').hide();
            $('.footer-right-nav li.social-list').not(this).removeClass('active');
            $('.footer-right-nav li.social-list a').not(this).removeClass('active');
            $('.social-list ul').hide();
            $('.footer-right-nav li.Language-list').not(this).removeClass('active');
            $('.footer-right-nav li.Language-list a').not(this).removeClass('active');
            $('.Language-list ul').hide();
        });
        $('.social-nav-list').click(function () {
            $(this).hide();
            $(this).children().removeClass('is__active');
            $('.social-list').removeClass('active');
            $('.social-list > a').removeClass('active');
        })
        $('.Country-list').click(function () {
            $(this).hide();
            $(this).children().removeClass('is__active');
            $('.country-list').removeClass('active');
            $('.country-list > a').removeClass('active');
        });
        $(".footer-right-nav li.social-list > a, .footer-right-nav li.country-list a").click(function () {
            $("html, body").animate({ scrollTop: $(document).height() }, "slow");
        });
        $(".footer-right-nav li.social-list > a, .footer-right-nav li.country-list a").click(function () {
            $("html, body").animate({ scrollTop: $(document).height() }, "slow");
        });
        $(".footer-right-nav li.social-list > a, .footer-right-nav li.country-list a").click(function () {
            $("body").animate({ scrollTop: $(document).height() }, "slow");
        });
        $(".footer-right-nav li.social-list > a, .footer-right-nav li.country-list a").click(function () {
            $("window").animate({ scrollTop: $(document).height() }, "slow");
        });
        $(".footer-right-nav li.social-list > a, .footer-right-nav li.country-list a, .site-footer__primary-nav li.polices-list a").click(function () {
            $("html, body").animate({ scrollTop: $(document).height() }, "slow");
        });
        $(".footer-right-nav li.social-list > a, .footer-right-nav li.country-list a, .site-footer__primary-nav li.polices-list a").click(function () {
            $("body").animate({ scrollTop: $(document).height() }, "slow");
        });
        $(".footer-right-nav li.social-list > a, .footer-right-nav li.country-list a, .site-footer__primary-nav li.polices-list a").click(function () {
            $("window").animate({ scrollTop: $(document).height() }, "slow");
        });
        if (typeof cookies.get('is_form_submited') != 'undefined') {
            cookies.remove('is_form_submited', { path: '/ideas' });
            if (cookies.get('is_form_submited') == 1) {
                CRM_cookieset('/');
            }
        }
        if ((drupalSettings.path.currentPath == 'contact/subscribe' || drupalSettings.node_alias_path == '/contact/subscribe') && drupalSettings.node_id == 'published') {
            var dialogid = drupalSettings.dialogid_region_crm;
            var trim_current_path = 'contact/subscribe';
            var _ = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + trim_current_path;
            history.pushState({
                href: _
            }, "title", _);
            $('.post__title.static_title').show();
            $('.post__title.ideas_title').hide();
            $('body').addClass('has-feed-modal');
            $('.feed-modal').addClass('is-active');
            $('.modal').addClass('feed-detailed-top');
            $('.gated-content').hide();
            $('.nongated-content').show();

            $('.field--name-field-sourceitem-c input').val('region-connect');
            $('.field--name-field-dialogid input').val(dialogid);
            $('.form-actions').addClass('connect-submit');
            $('.form-actions').addClass('connect-crm-submit');
            $('.feed-post__close').addClass('subscribeform-close');
        }
        if (drupalSettings.path.currentPath == 'contact/enquiry' || drupalSettings.node_alias_path == '/contact/enquiry') {
            var trim_current_path = 'contact/enquiry';
            var _ = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + trim_current_path;
            history.pushState({
                href: _
            }, "title", _);
            $('.post__title.static_title').show();
            $('.post__title.ideas_title').hide();
            $('body').addClass('has-feed-modal-new');
            $('.feed-modal-new').addClass('is-active');
            $('.modal').addClass('feed-detailed-top');
            $('.field--name-field-sourceitem-c input').val('contact-inquiry-form');
            $('.form-actions').addClass('connect-submit');
            $('.form-actions').addClass('connect-crm-submit');
            $('.feed-post__close').addClass('subscribeform-close');
        }
        if (drupalSettings.path.currentPath == 'contact' || drupalSettings.node_alias_path == '/contact') {
            $('body').addClass('has-fraud-feed-modal');
        }
        // if (drupalSettings.path.currentPath == 'about') {
        //     /*$('.scrollMenu a').eq(0).addClass('is-active');*/
        //     var OgilvyLabel = Drupal.t('Ogilvy');
        //     $('.scrollMenu:first').append('<a href="'+ drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix +'about#ogilvy" data-drupal-link-system-path="Ogilvy" style="display:none;" class="menu_ogilvy_t">'+OgilvyLabel+'</a>');
        //     $(".path-about").find("a.about_ogilvy").replaceWith("<span class='remove-ogilvy-link is-active'>" + $('.scrollMenu a').eq(0).text() + "</span>");
        // }
        if (drupalSettings.path.currentPath == 'user/login' || drupalSettings.node_alias_path == '/user/login') {
            var userstatumessagelength = $(".drupal-user-status-messages");
            var userredstatumessagelength = $(".drupal-user-status-messages .show-red-status-mess .move-error-meesage");
            $(".path-user").find(".drupal-user-status-messages .show-red-status-mess").css("position", "absolute");
            if (userredstatumessagelength.length > 0) {
                userstatumessagelength.hide();
                $(".display-login-user-error").html($(".move-error-meesage").html().replace('username', 'user'));
                $(".display-login-user-error a").html($(".move-error-meesage a").html().replace('?', '? ->'));
                $(".display-login-user-error a").css({ "text-decoration": "none", "font-style": "italic" });
                $(".path-user .connect-form input[type='text'], .path-user .connect-form input[type='email']").css("border-color", "#eb3f43");
                $(".display-login-user-error").css({ "display": "flex", "padding-top": "2px" });
            } else {
                $(".drupal-user-status-messages").addClass("drupal-user-status-messages-enable");
            }
        }
        $('.cookies_ani-border1, .cookies_ani-border').on('load click', function () {
            var $targetLink = $('#cookiestarget' + $(this).attr('target'));
            var $targetLinkhref = $targetLink.data("target");
            var onLabel = Drupal.t('On');
            var offLable = Drupal.t('Off');
            $(this).toggleClass('active');
            if ($(this).hasClass("active")) {
                $targetLink.addClass('active');
                $targetLink.attr('href', $targetLinkhref);
                $(this).children('p').hide().text(onLabel).fadeIn(700);
            }
            else {
                $targetLink.removeClass('active');
                $targetLink.removeAttr("href");
                $(this).children('p').hide().text(offLable).fadeIn(700);

            }
            setTimeout(function () {
                $('.popup-cookies-wrap').removeClass('cookiesSlideDown');
                $('.popup-cookies-wrap1').removeClass('cookiesSlideDown');
                $('.audio-player').removeClass('is_deactive');
            }, 500);
        });
        $('.cookie_page_link').click(function () {
            var _ = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + "cookies";
            $(this).attr('href', _);
        });
        $('.popup-cookies-wrap .cookies_ani-border').click(function () {
            setTimeout(function () {
                $('.popup-cookies-wrap').delay(5000).addClass('is_active');
            }, 500);
        });
        $('.popup-cookies-wrap1 .cookies_ani-border1').click(function () {
            setTimeout(function () {
                $('.popup-cookies-wrap1').delay(5000).addClass('is_active');
            }, 500);
        });
        $('.feed__item').click(function () {
            $('body').removeClass('contentPopupFirst');
        });
        $(function () {
            if (window.history && window.history.pushState) {
                $(window).on('popstate', function () {
                    var idea_page = drupalSettings.idea_page_path;
                    var current_path = drupalSettings.current_alias_path;
                    var node_private_idea_title = drupalSettings.current_private_idea_alias_path;
                    if (current_path.indexOf('/private/ideas/') != -1) {
                        var _ = node_private_idea_title;
                    } else {
                        var trim_current_path = current_path.slice(1);
                        var _ = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + trim_current_path;
                    }
                    $('body').removeClass('has-feed-modal');
                    $('.feed-modal').removeClass('is-active');
                    $('.ui-dialog.ui-corner-all.ui-widget.ui-widget-content.ui-front.ui-dialog-buttons').remove();
                    $('.modal').removeClass('feed-detailed-top');
                    $('body').removeClass('has-modal');
                    $('.js-modal').removeClass('is-active');
                    $('.js-modal__content-wrapper').html('');
                    if (current_path != "/home") {
                        history.pushState({
                            href: _
                        }, "title", _);
                    }
                });
            }
        });
        $("#edit-field-country-c").on('focus blur', function () {
            $(this).parent().toggleClass('is_focused');
        })
        $('.cookies__close').click(function () {
            $('.cookies__policy').slideDown('').addClass('is-active');
            $('body, html').removeClass('cookies-overflow');
        });
        if (cookies.get("cookie-agreed")) {
            $('.site-footer').css('margin-bottom', '0');
        }
        /* Careers Slider */
        $('.careers-slider_desktop_slider').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            adaptiveHeight: false,
            variableWidth: true,
            draggable: false
        });
        $('.careers-slider_desktop_slider .slick-prev, .careers-slider_desktop_slider .slick-next').on("click", function (e) {
            var _ = $('.careers-slider_desktop_slider .slick-current.slick-active').attr('data-url');
            history.pushState({
                id: _
            }, "title", _);
        });
        $(".careers-slider_desktop_slider").on("beforeChange", function (event, slick) {
            var currentSlide, slideType, player, command, playerSrc;
            currentSlide = $(slick.$slider).find(".slick-current");
            player = currentSlide.find("iframe").get(0);
            playerSrc = currentSlide.find("iframe").attr('src');
            if (typeof player !== "undefined" && playerSrc.match(/vimeo/g)) {
                var play = new Vimeo.Player(player);
                play.pause();
            } else if (typeof player !== "undefined" && playerSrc.match(/youtube/g)) {
                command = {
                    "event": "command",
                    "func": "pauseVideo",
                    "args": ""
                };
                player.contentWindow.postMessage(JSON.stringify(command), "*");
            }
        });
        $('.careers-slider_mobile').slick({
            dots: false,
            infinite: true,
            speed: 300,
            slidesToScroll: 1,
            variableWidth: true,
            prevArrow: $('.careers-prev'),
            nextArrow: $('.careers-next'),
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        variableWidth: false,
                    }
                }
            ]
        });
        $(".feed-crm-pop_open").on("click", function (e) {
            e.preventDefault();
            drupalSettings.errorcode = 0;
            $('.connect-crm-submit').prop('disabled', false);
            $('.progress_bar_error').val('0');
            $('.sliding-popup-bottom').css('z-index', '99 !important');
            var source_item = 'ideas-connect';
            path_name = window.location.pathname;
            $('.success-message').hide();
            var connect_click = ['region-connect', 'footer-connect'];
            var nodetitle = '';
            var dialogid = '';
            var srctitle = 0;
            var popup_act = 0;
            var email_pop = 0;
            if ($(this).attr('class').split(' ')[1] == 'region-connect') {
                $('.field--name-field-f-path input').val("");
                dialogid = drupalSettings.dialogid_region_crm;
                var trim_current_path = 'contact/subscribe';
                var url = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + trim_current_path;
                if (typeof (history.pushState) != "undefined") {
                    history.pushState({
                        href: url
                    }, "title", url);
                }
                email_pop = 1;
                $('.feed-post__close').addClass('subscribeform-close');
                $('.feed-crm-pop_wrapper.connect-crm-wrap.connect-crm-wrap1').css('display', 'none');
            } else if ($(this).attr('class').split(' ')[2] == 'footer-connect') {
                $('.field--name-field-f-path input').val("");
                dialogid = drupalSettings.dialogid_footer_crm;
                var trim_current_path = 'contact/subscribe';
                var _ = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + trim_current_path;
                history.pushState({
                    href: _
                }, "title", _);
                email_pop = 1;
                $('.feed-post__close').addClass('subscribeform-close');
                $('.feed-crm-pop_wrapper.connect-crm-wrap.connect-crm-wrap1').css('display', 'none');
            } else if ($(this).attr('class').split(' ')[2] == 'idea-crm-default') {
                dialogid = drupalSettings.dialogid_idea_crm;
                $('.field--name-field-f-path input').val("");
                email_pop = 1;
                $('.feed-post__close').addClass('subscribeform-close');
            } else {
                dialogid = $("#dialogid-val").text();
                srctitle = 1;
                var nongatedPdf = $(this).attr('data-gated') ? $(this).attr('data-gated') : 0;
                if (CRM_cookieget(drupalSettings.path.baseUrl) && email_pop == 0 && nongatedPdf == 0) {
                    window_init_call = false;
                    $('body').addClass('has-feed-modal');
                    $('.feed-modal').addClass('is-active');
                    $('.modal').addClass('feed-detailed-top');
                }
                else if (CRM_cookieget(drupalSettings.path.baseUrl) || (nongatedPdf == 1)) {
                    popup_act = 1;
                    var endpoint = drupalSettings.path.baseUrl + 'filedownload?f_path=' + $(this).attr('file_path_att') + '&force_download=1&is_non_gated_pdf=' + nongatedPdf;
                    window.open(endpoint, "_blank");
                    return false;
                }
                if ($(this).attr('file_path_att') != '') {
                    $('.field--name-field-f-path input').val($(this).attr('file_path_att'));
                } else {
                    $('.field--name-field-f-path input').val("");
                }
            }
            if ($(this).attr('class').split(' ')[1] == 'region-connect') {
                source_item = 'region-connect';
            } else if ($(this).attr('class').split(' ')[2] == 'footer-connect') {
                source_item = 'footer-connect';
            } else if ($(this).attr('class').split(' ')[2] == 'idea-crm-default') {
                source_item = 'idea-crm-default';
                /*nodetitle=$('.js-modal__content-wrapper .post__title').text().trim();*/
            } else {
                nodetitle = $('.js-modal__content-wrapper .post__title').text().trim();
            }
            $('.post__title.static_title').show();
            $('.post__title.ideas_title').hide();
            if (popup_act == 0) {
                $('body').addClass('has-feed-modal');
                $('.feed-modal').addClass('is-active');
                $('.modal').addClass('feed-detailed-top');
            }
            $('.gated-content').hide();
            $('.nongated-content').show();
            $('span.select2-selection__rendered').removeClass('published');
            $('.feed-modal').removeClass('email-crm-pop');
            $('.success-message.gated-success-message').removeClass("email-only-success-message")
            $('span.error').hide();
            $('.only-email-content').hide();
            $('#edit-field-name-wrapper, #edit-field-title-wrapper, #edit-field-account-name-wrapper, #edit-field-country-c-wrapper, #edit-field-crm-industries-wrapper').show();
            if ($('#edit-field-name-0-value').val() == "email_prompt") {
                $('#edit-field-name-0-value').val("");
            }
            if (nodetitle != '') {
                $('.post__title.ideas_title').show();
                $('.post__title.static_title').hide();
                $('.feed-modal__content-wrapper .post__title.ideas_title').html(nodetitle);
                $('.gated-content').show();
                $('.nongated-content').hide();
            }
            if (CRM_cookieget(drupalSettings.path.baseUrl) && email_pop == 100) {
                $('.post__title.ideas_title').hide();
                $('.post__title.static_title').hide();
                $('.gated-content').hide();
                $('.nongated-content').hide();
                $('.only-email-content').show();
                $('.feed-modal').addClass('email-crm-pop');
                $('.success-message.gated-success-message').addClass("email-only-success-message")
                $('#edit-field-name-0-value').val("email_prompt");
                $('#edit-field-name-wrapper, #edit-field-title-wrapper, #edit-field-account-name-wrapper, #edit-field-country-c-wrapper, #edit-field-crm-industries-wrapper').hide();
                email_pop = 1;
                dialogid = drupalSettings.dialogid_idea_email_crm;
            }

            $('.field--name-field-sourceitem-c input').val(source_item);
            $('.field--name-field-dialogid input').val(dialogid);
            if (srctitle == 1) {
                $('.field--name-field-sourceitem-c input').val($("#sourceitemc-val").text());
            }
            $('.form-actions').addClass('connect-submit');
            $('.form-actions').addClass('connect-crm-submit');
        });
        if (drupalSettings.path.currentPath == 'capabilities' || drupalSettings.node_alias_path == '/capabilities') {
            var capability = $(location).attr('pathname').split('/')[3];
            var capability_url = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + 'work/' + capability;
            setTimeout(function () {
                $('.capability-alink').attr("href", capability_url);
            }, 1000);
        }
        $('.post__share').on("click", function (e) {
            e.preventDefault();
            /*$('.post__share-copy-text.js-post__share-copy-text').val($(location).attr('href'));*/
            $('.post__share-list').toggleClass("is-active");
            $('.post__share-list li').delay(100).each(function (i) {
                $(this).delay(200 * i).queue(function () {
                    $(this).toggleClass('is__active').dequeue();
                });
            });
            a2a.init_all();
        });
        $('.cookies_ani-border, .cookies_ani-border1').click(function () {
            $(this).toggleClass("is_active");
            if ($('#cookie-category-' + $(this).attr('target')).prop("checked") === true) {
                $('#cookie-category-' + $(this).attr('target')).attr('checked', false);
            } else {
                $('#cookie-category-' + $(this).attr('target')).attr('checked', true);
            }
        });

        $('.js-post__share-copy-button').on("click", function (e) {
            $(this).siblings('input.post__share-copy-text.js-post__share-copy-text').select();
            document.execCommand("copy");
            $('.copy-link-text.js-copy-link-text').attr('aria-hidden', 'false');
        });

        $('.a2a_mailto').on("click", function (e) {
            /*var subject = $('.a2a_dd.addtoany_share').attr('href').split('#')[1].split('&title=')[1];
            var ideas_url = $('.a2a_dd.addtoany_share').attr('href').split('#')[1].split('&title=')[0].replace('url=', '');*/
            var subject = $('.addtoany_list').attr('data-a2a-title');
            var ideas_url = $('.addtoany_list').attr('data-a2a-url');
            var bdy = Drupal.t("Hi, I found this article interesting from Ogilvy, you should check it out! ");
            var mailto = "mailto:?subject=" + subject + "&body=" + bdy + ideas_url;
            window.location = mailto;
        });

    });
    $(document).on('click', '.audio-player.is_deactive', function (event) {

        $('.popup-cookies-wrap').addClass('cookiesSlideDown');
        if (jQuery(window).width() >= 769) {
            event.preventDefault();
            jQuery('.modal__wrapper, .feed-crm-pop_wrapper').animate({
                scrollTop: jQuery("body").offset().top
            }, 1000);
        }
        $('body').addClass('contentPopupFirst');

    });
    /*CRM form country selection*/
    $("form").delegate(".ui-autocomplete-field", "click", function () {
        if (CRM_fd_focus == 1) {
            $('.field--name-field-country-c input').val($(this).text());
        } else {
            $('.field--name-field-crm-industries input').val($(this).text());
        }
        $('.ui-autocomplete').hide();
    });
    /* Feb 17 2020 */
    if (window.innerWidth > document.body.clientWidth) {
        $('body').addClass('scrollbar_active');
    } else {
        $('body').removeClass('scrollbar_active').addClass('scrollbar_inActive');
    }
    /* Mar 10 2020 */
    function aboutpageScroll(sw = '') {
        var url = '';
        let source_item = $('.field--name-field-sourceitem-c input').val();
        if (source_item == 'footer-connect' || source_item == 'region-connect') {
            if ($(".scrollMenu").length > 0) {
                $(".scrollMenu").each(function () {
                    if ($(this).children('a').hasClass('is-active') && !$(this).children('a').hasClass('language-link')) {
                        url = $(this).children('a').attr('href');
                    }
                });
            }
            var idea_page = drupalSettings.idea_page_path;
            var node_private_idea_title = drupalSettings.current_private_idea_alias_path;
            var current_path = drupalSettings.current_alias_path;
            if (current_path.indexOf('/private/ideas/') != -1) {
                url = node_private_idea_title;
            } else if (current_path.indexOf('/ideas/') != -1) {
                url = drupalSettings.path.baseUrl + drupalSettings.path.pathPrefix + current_path.slice(1);
            }
        } else if (sw != '') {
            if ($(".scrollMenu").length > 0) {
                $(".scrollMenu").each(function () {
                    if ($(this).children('a').hasClass('is-active') && !$(this).children('a').hasClass('language-link')) {
                        url = $(this).children('a').attr('href');
                    }
                });
            }
        }
        return url;
    }
    function isInAppBrowser() {
        var ua = navigator.userAgent || navigator.vendor || window.opera;
        return (ua.indexOf("FBAN") > -1) || (ua.indexOf("FBAV") > -1) || (ua.indexOf('Instagram') > -1) || (ua.indexOf('LinkedInApp') > -1);
    }
    function language_sw_class() {
        /** Language Menu*/
        if ($(".languages-list").length > 0) {
            if ($(window).width() <= 1100) {
                $(".desktop-languages > li").each(function () {
                    let lang_code = $(this).attr('hreflang');
                    $(this).children('a').text(lang_code.toUpperCase());
                });
                $(".languages-list").addClass("mobile-languages");
                $(".languages-list").removeClass("desktop-languages");
            } else {
                $(".mobile-languages > li").each(function () {
                    let lang_code = $(this).attr('desk-title');
                    $(this).children('a').text(lang_code);
                });
                $(".languages-list").addClass("desktop-languages");
                $(".languages-list").removeClass("mobile-languages");
            }
        }
    }

    /**CRM form cookies related */
    function CRM_cookieset(market) {
        var fetch_vals = [];
        if (typeof cookies.get('is_form_submited') != 'undefined') {
            if (cookies.get('is_form_submited') == 1) {
                fetch_vals.push('glb');
            } else {
                let crm_frm_vals = JSON.parse(CookieDecode(cookies.get('is_form_submited')));
                fetch_vals = crm_frm_vals.split(',');
                let rm_slash = market.replace(/\//g, '');
                rm_slash = (rm_slash == '') ? 'glb' : rm_slash;
                if (fetch_vals.indexOf(rm_slash) == -1) {
                    fetch_vals.push(rm_slash);
                }
            }
        } else {
            let rm_slash = market.replace(/\//g, '');
            rm_slash = (rm_slash == '') ? 'glb' : rm_slash;
            if (fetch_vals.indexOf(rm_slash) == -1) {
                fetch_vals.push(rm_slash);
            }
        }
        cookies.set('is_form_submited', JSON.stringify(fetch_vals.join()), { expires: 30, path: '/', sameSite: 'strict' });
    }

    function CRM_cookieget(market) {
        var fetch_vals = [];
        if (typeof cookies.get('is_form_submited') != 'undefined') {
            let crm_frm_vals = JSON.parse(CookieDecode(cookies.get('is_form_submited')));
            fetch_vals = crm_frm_vals.split(',');
            let rm_slash = market.replace(/\//g, '');
            rm_slash = (rm_slash == '') ? 'glb' : rm_slash;
            if (fetch_vals.indexOf(rm_slash) != -1) {
                return true;
            }
        }
        return false;
    }
    $("input[name*='field_country_c']").keydown(function () {
        CRM_fd_focus = 1;
    });
    $("input[name*='field_crm_industries']").keydown(function () {
        CRM_fd_focus = 2;
    });
    var init_work_ajx_call = false;
    $("input[name='field_category_target_id']").click(function () {
        init_work_ajx_call = true;
    });
    $(".section__grid-utility").click(function () {
        init_work_ajx_call = true;
    });
    $(".subcategories").click(function () {
        init_work_ajx_call = true;
    });
    $(".js-section-page-link").click(function () {
        init_work_ajx_call = true;
    });

    /** Our work grid filters reflection */
    function filter_switch_capture(market, status) {
        let rm_slash = market.replace(/\//g, '');
        rm_slash = (rm_slash == '') ? 'glb' : rm_slash;
        localStorage.setItem('work_adv_filter_switch-' + rm_slash, status, { expires: 30 });
    }
    function filter_switch_reflection(market) {
        let rm_slash = market.replace(/\//g, '');
        rm_slash = (rm_slash == '') ? 'glb' : rm_slash;
        return localStorage.getItem('work_adv_filter_switch-' + rm_slash);
    }
    function filter_capture(market) {
        let rm_slash = market.replace(/\//g, '');
        rm_slash = (rm_slash == '') ? 'glb' : rm_slash;
        var $checkboxes = $("input:checkbox:checked");
        let option = [];
        $checkboxes.each(function (i) {
            option[i] = $checkboxes[i].id;

        });
        if (init_work_ajx_call) {
            let cobj = { qsrc: $('input[name="combine"]').val(), opts: option.join(), work_cat: $("input[name='field_category_target_id']:checked").attr('id') };
            localStorage.setItem('work_adv_filter-' + rm_slash, JSON.stringify(cobj), { expires: 30 });
        } else {
            init_work_ajx_call = true;
            var fetch_vals = JSON.parse(localStorage.getItem('work_adv_filter-' + rm_slash));
            if (fetch_vals.work_cat != "edit-field-category-target-id-all") {
                $("#" + fetch_vals.work_cat).click();
            }
        }

        if ($("#search-capabilities > ul > li").children("input:checkbox:checked").length > 0) {
            $("ul > li > a.capabilities").addClass("is-active");
        }
        if ($("#search-industries > ul > li").children("input:checkbox:checked").length > 0) {
            $("ul > li > a.industries").addClass("is-active");
        }
        if ($("#search-clients > ul > li").children("input:checkbox:checked").length > 0) {
            $("ul > li > a.clients").addClass("is-active");
        }
    }

    function filter_reflection(market) {
        let rm_slash = market.replace(/\//g, '');
        rm_slash = (rm_slash == '') ? 'glb' : rm_slash;
        if (localStorage.getItem('work_adv_filter-' + rm_slash)) {
            var fetch_vals = JSON.parse(localStorage.getItem('work_adv_filter-' + rm_slash));
            var opts = fetch_vals.opts;
            var ls_vals = opts.split(",");
            var qsrc = fetch_vals.qsrc;
            var work_cat = fetch_vals.work_cat;
            if (work_cat == "" || work_cat == "edit-field-category-target-id-all") {
                if (qsrc != "") {
                    $('input[name="combine"]').val(qsrc);
                }
                var $checkboxes = $("input:checkbox");
                $checkboxes.each(function (i) {
                    if (ls_vals.indexOf($checkboxes[i].id) != -1) {
                        $checkboxes[i].checked = true;
                    }
                });
            } else {
                $('#' + work_cat).checked = true;
            }
            if ($('.js-form-submit[id^=edit-submit-our-work-grid]').length > 0 && (ls_vals.length > 0 || qsrc != "" || (work_cat != "" && work_cat != "edit-field-category-target-id-all"))) {
                $('.js-form-submit[id^=edit-submit-our-work-grid]').click();
            }
        }
    }
    /*18-01-2021 QR codes popup*/
    $("[data-modal-id]").click(function (e) {
        setTimeout(function () {
            $(".sm-container").addClass("up");
        }, 300);
        e.preventDefault();
        var modalBox = $(this).attr('data-modal-id');
        $("#" + modalBox).fadeIn("slow");
        $('.coins-carousel').slick('refresh');
    });
    $(".js-modal-close, .ogilvy-sitemodal-overlay").click(function () {
        $(".modal-box").fadeOut('slow');
        $('.sm-container').removeClass('up');
    });
    /*end 18-01-2021 QR codes*/
    var page_error_menu = drupalSettings.hide_submenu_page_error;
    if (page_error_menu == "menu_hide") {
        $('ul.site-nav__sub-list').hide();
        $('ul.site-nav__list li.site-nav__item a').removeClass('is-active');
    }
    $('div.employee__contact ul li a').each(function () {
        var contactText = $(this).text();
        $(this).text("-> " + contactText);
    });
    $('div.employee__press ul li a').each(function () {
        var pressText = $(this).text();
        $(this).text("-> " + pressText);
    });
    if ($('#ogilvy').parent('.scrollSection').length > 0) {
    } else {
        $('.hero.hero--black').parent('.section--dark').addClass('scrollSection');
    }
    /* OCOM-622 Ogilvy Rebrand Changes Mar 26 2021*/
    function sectionRed() {
        if ($(".section--red").length > 0) {
            var win_viewport = $(window).scrollTop() + 60;
            var section__red = $(".section--red");
            var doc_viewport = section__red.offset();
            doc_viewport.bottom = doc_viewport.top + section__red.outerHeight();
            if (win_viewport > doc_viewport.top && win_viewport < doc_viewport.bottom) {
                $('html').addClass("has-red-nav");
            } else {
                $('html').removeClass("has-red-nav");
            }
        }
    }
    function sectionDefault() {
        if ($(".section--default").length > 0) {
            var win_viewport = $(window).scrollTop();
            var section__red = $(".section--default");
            var doc_viewport = section__red.offset();
            doc_viewport.bottom = doc_viewport.top + section__red.outerHeight();
            if (win_viewport + 200 > doc_viewport.top && win_viewport < doc_viewport.bottom) {
                $('html').removeClass("has-red-nav");
            }
        }
    }
    sectionRed();
    sectionDefault();
    window.addEventListener("scroll", sectionRed);
    window.addEventListener("scroll", sectionDefault);
    /* OCOM-622 Ogilvy Rebrand Changes Mar 26 2021 */
    function CookieDecode(rawval) {
        if (rawval.indexOf('%') !== -1) {
            rawval = decodeURI(rawval).replaceAll('%2C', ',').replaceAll('%3A', ':');
        }
        return rawval;
    }
    function sectiondark1() {
        if ($(".sectiondark1").length > 0) {
            var win_viewport = $(window).scrollTop() + 60;
            var section__red = $(".sectiondark1");
            var doc_viewport = section__red.offset();
            doc_viewport.bottom = doc_viewport.top + section__red.outerHeight();
            if (win_viewport > doc_viewport.top && win_viewport < doc_viewport.bottom) {
                $('html').addClass("has-alt-nav1");
            } else {
                $('html').removeClass("has-alt-nav1");
            }
        }
    }
    sectiondark1();
    window.addEventListener("scroll", sectiondark1);

}(jQuery, Drupal, drupalSettings, window.Cookies));
;
