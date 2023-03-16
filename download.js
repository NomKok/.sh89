/*! For license information please see download.js.LICENSE.txt */
(()=>{
    var t = {
        1209: t=>{
            "use strict";
            t.exports = JSON.parse('{"base_url":"","routes":{"gallery":{"tokens":[["variable",".","[^/]++","_format"],["text","/gallery"]],"defaults":{"_format":"html"},"requirements":{"page":"\\\\d+"},"hosttokens":[],"methods":[],"schemes":[]},"gallery_tag":{"tokens":[["variable",".","[^/]++","_format"],["variable","/","[^/]+","tag"],["variable","/","[^/]++","id"],["text","/gallery/tag"]],"defaults":{"tag":"","_format":"html"},"requirements":{"page":"\\\\d+","tag":"[^/]+"},"hosttokens":[],"methods":[],"schemes":[]},"gallery_category":{"tokens":[["variable",".","[^/]++","_format"],["variable","/","[^/\\\\.]++","slug"],["variable","/","[^/]++","id"],["text","/gallery/category"]],"defaults":{"slug":"","_format":"html"},"requirements":{"page":"\\\\d+"},"hosttokens":[],"methods":[],"schemes":[]},"gallery_set":{"tokens":[["variable",".","[^/]++","_format"],["variable","/","[^/\\\\.]++","slug"],["variable","/","[^/]++","id"],["text","/gallery/set"]],"defaults":{"slug":"","_format":"html"},"requirements":{"page":"\\\\d+"},"hosttokens":[],"methods":[],"schemes":[]},"gallery_autocomplete":{"tokens":[["text","/gallery/autocomplete"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"fontstruction_show":{"tokens":[["variable","/","[^/]++","slug"],["variable","/","[^/]++","id"],["text","/fontstructions/show"]],"defaults":{"slug":null},"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"fontstruction_vote_breakdown":{"tokens":[["variable","/","[^/]++","slug"],["variable","/","[^/]++","id"],["text","/fontstructions/vote_breakdown"]],"defaults":{"slug":null},"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"fontstruction_clone":{"tokens":[["variable","/","[^/]++","id"],["text","/fontstructions/clone"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET","POST"],"schemes":[]},"fontstructor":{"tokens":[["variable","/","[^/]++","id"],["text","/fontstructor/edit"]],"defaults":{"id":null},"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"fontstruction_create":{"tokens":[["text","/private/fontstructions/create"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET","POST"],"schemes":[]},"fontstruction_update":{"tokens":[["variable","/","[^/]++","id"],["text","/private/fontstructions"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["PUT","PATCH","POST"],"schemes":[]},"fontstruction_download":{"tokens":[["variable","/","[^/]++","id"],["text","/fontstructions/download"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"fontstruction_download_archive":{"tokens":[["variable",".","[^/]++","archiveFormat"],["variable","/","[^/\\\\.]++","format"],["variable","/","[^/]++","id"],["text","/font_archives/download"]],"defaults":{"format":"ttf","archiveFormat":"zip"},"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"user_avatar":{"tokens":[["text",".png"],["variable","/","[^/\\\\.]++","slug"],["variable","/","\\\\d+","id"],["text","/avatar"]],"defaults":{"slug":""},"requirements":{"id":"\\\\d+"},"hosttokens":[],"methods":[],"schemes":[]},"user_home":{"tokens":[["variable",".","[^/]++","_format"],["variable","/","[^/\\\\.]++","slug"],["variable","/","[^/]++","id"],["text","/fontstructors"]],"defaults":{"slug":"","_format":"html"},"requirements":{"page":"\\\\d+","format":"html|rss"},"hosttokens":[],"methods":[],"schemes":[]},"user_faves":{"tokens":[["variable",".","[^/]++","_format"],["text","/favorites"],["variable","/","[^/]++","slug"],["variable","/","[^/]++","id"],["text","/fontstructors"]],"defaults":{"slug":"","_format":"html"},"requirements":{"page":"\\\\d+","format":"html|rss"},"hosttokens":[],"methods":[],"schemes":[]},"user_private_home":{"tokens":[["text","/private/user/home"]],"defaults":[],"requirements":{"page":"\\\\d+s"},"hosttokens":[],"methods":[],"schemes":[]},"user_settings":{"tokens":[["text","/private/user/settings"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"user_register_validate":{"tokens":[["text","/user/validate-registration"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"categorized_document":{"tokens":[["variable","/","[^/]++","slug"],["variable","/","[^/]++","categorySlug"],["variable","/","[^/]++","id"],["variable","/","faq|help","type"]],"defaults":{"categorySlug":null,"slug":null},"requirements":{"type":"faq|help"},"hosttokens":[],"methods":[],"schemes":[]},"live":{"tokens":[["variable",".","[^/]++","_format"],["text","/live"]],"defaults":{"_format":"html"},"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"live_core":{"tokens":[["text","/live-core"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"live_latest":{"tokens":[["text","/live/latest"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"live_create":{"tokens":[["text","/private/live"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"live_update":{"tokens":[["variable","/","[^/]++","id"],["text","/private/live"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["PUT"],"schemes":[]},"live_delete":{"tokens":[["variable","/","[^/]++","id"],["text","/private/live"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["DELETE"],"schemes":[]},"tag_autocomplete":{"tokens":[["text","/tags/autocomplete"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"tag_create":{"tokens":[["text","/private/tags"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"tagging_create":{"tokens":[["text","/private/taggings"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"tagging_delete":{"tokens":[["variable","/","[^/]++","id"],["text","/private/taggings"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["DELETE"],"schemes":[]},"set_autocomplete":{"tokens":[["text","/sets/autocomplete"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"set_create":{"tokens":[["text","/private/sets"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"set_fontstruction_create":{"tokens":[["text","/private/set_fontstructions"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"set_fontstruction_delete":{"tokens":[["variable","/","[^/]++","id"],["text","/private/set_fontstructions"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["DELETE"],"schemes":[]},"favorite_tagging_create":{"tokens":[["text","/private/favorite_taggings"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"favorite_tagging_delete":{"tokens":[["variable","/","[^/]++","id"],["text","/private/favorite_taggings"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["DELETE"],"schemes":[]},"favorite_create":{"tokens":[["text","/private/favorites/"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"favorite_delete":{"tokens":[["variable","/","[^/]++","id"],["text","/private/favorites"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["DELETE"],"schemes":[]},"editors_choice_create":{"tokens":[["text","/private/editors_choice/"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"comment_show":{"tokens":[["variable","/","[^/]++","id"],["text","/comments"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET"],"schemes":[]},"comment_create":{"tokens":[["text","/private/comments/"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"comment_delete":{"tokens":[["variable","/","[^/]++","id"],["text","/private/comments"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["DELETE"],"schemes":[]},"comment_update":{"tokens":[["variable","/","[^/]++","id"],["text","/private/comments"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["PUT","PATCH","POST"],"schemes":[]},"showing_create":{"tokens":[["text","/showings/"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST"],"schemes":[]},"vote_vote":{"tokens":[["variable","/","[^/]++","value"],["variable","/","[^/]++","id"],["text","/private/vote"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"category_list":{"tokens":[["text","/categories/list"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"license_list":{"tokens":[["text","/licenses/list"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"printing_design":{"tokens":[["variable","/","[^/]++","id"],["text","/make/design"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"printing_upload":{"tokens":[["text","/make/upload"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"top_banner":{"tokens":[["text","/partners/top"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"ad_image":{"tokens":[["variable","/","[^/]++","id"],["text","/partners/image"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"page":{"tokens":[["variable",".","[^/]++","_format"],["variable","/","[^/\\\\.]++","type"],["text","/pages"]],"defaults":{"_format":"html"},"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"patron_subscribe":{"tokens":[["text","/patron/subscribe"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":[],"schemes":[]},"subscription_check":{"tokens":[["text","/pro/subscription-check"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["POST","GET"],"schemes":[]},"fos_user_security_login":{"tokens":[["text","/login"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET","POST"],"schemes":[]},"fos_user_security_logout":{"tokens":[["text","/logout"]],"defaults":[],"requirements":[],"hosttokens":[],"methods":["GET","POST"],"schemes":[]}},"prefix":"","host":"fontstruct.com","port":"","scheme":"https","locale":[]}')
        }
        ,
        1662: (t,e,n)=>{
            var r = n(3469)
              , i = n(2316)
              , s = n(3506)
              , o = i.Model.extend({
                patchField: function(t, e, n) {
                    n = r.extend({
                        success: void 0,
                        error: function(t) {
                            console.log(t)
                        }
                    }, n);
                    var i = {};
                    i[t] = e,
                    this.save(i, {
                        patch: !0,
                        success: n.success,
                        error: n.error
                    })
                },
                toggleField: function(t, e) {
                    return this.patchField(t, !this.get(t), e)
                }
            })
              , a = {
                Comment: o.extend({
                    urlRoot: s.generate("comment_create")
                }),
                Favorite: o.extend({
                    urlRoot: s.generate("favorite_create")
                }),
                EditorsChoice: o.extend({
                    urlRoot: s.generate("editors_choice_create")
                }),
                LiveFeedItem: o.extend({
                    urlRoot: s.generate("live_create")
                }),
                Tag: o.extend({
                    urlRoot: s.generate("tag_create")
                }),
                Tagging: o.extend({}),
                SetFontstruction: o.extend({}),
                User: o.extend({
                    hasRole: function(t) {
                        var e = this.get("roles");
                        return e && -1 !== e.indexOf(t)
                    },
                    isSuperAdmin: function() {
                        return this.hasRole("ROLE_SUPER_ADMIN")
                    },
                    isAdmin: function() {
                        return this.isSuperAdmin() || this.hasRole("ROLE_ADMIN")
                    },
                    isEditor: function() {
                        return this.isAdmin() || this.hasRole("ROLE_EDITOR")
                    },
                    isTester: function() {
                        return this.isAdmin() || this.hasRole("ROLE_TESTER")
                    },
                    isSetEditor: function() {
                        return this.isAdmin() || this.hasRole("ROLE_SET_EDITOR")
                    },
                    isPatron: function() {
                        return this.isAdmin() || this.hasRole("ROLE_PATRON")
                    }
                }),
                Fontstruction: o.extend({
                    urlRoot: s.generate("fontstruction_update")
                }),
                Category: o.extend({}),
                Set: o.extend({
                    urlRoot: s.generate("set_create")
                })
            };
            t.exports = a
        }
        ,
        4744: (t,e,n)=>{
            var r = n(1662).User
              , i = null;
            "undefined" != typeof fsUser && (i = new r(fsUser)),
            t.exports = i
        }
        ,
        3506: (t,e,n)=>{
            var r = n(1209)
              , i = n(3311);
            i.setRoutingData(r),
            t.exports = {
                generate: function(t, e) {
                    return ("undefined" != typeof app && "dev" === app.environment ? "/app_dev.php" : "") + i.generate(t, e)
                }
            }
        }
        ,
        7042: (t,e,n)=>{
            var r = n(4193)
              , i = {
                confirm: function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    n = Object.assign({
                        title: "Are you sure?",
                        text: t,
                        animation: "none",
                        showCancelButton: !0,
                        confirmButtonText: "Yes",
                        closeOnConfirm: !0,
                        html: !0
                    }, n),
                    r(n, (function(t) {
                        e(t)
                    }
                    ))
                },
                progress: function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    e = Object.assign({
                        text: t,
                        animation: "none",
                        showConfirmButton: !1,
                        html: !0
                    }, e),
                    r(e, (function() {}
                    ))
                },
                close: function() {
                    r.close()
                }
            };
            t.exports = i
        }
        ,
        3311: function(t, e) {
            var n, r, i;
            function s(t) {
                return (s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }
                )(t)
            }
            r = [],
            void 0 === (i = "function" == typeof (n = function() {
                "use strict";
                var t = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n)
                            Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }
                  , e = "function" == typeof Symbol && "symbol" == s(Symbol.iterator) ? function(t) {
                    return s(t)
                }
                : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : s(t)
                }
                  , n = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.enumerable = r.enumerable || !1,
                            r.configurable = !0,
                            "value"in r && (r.writable = !0),
                            Object.defineProperty(t, r.key, r)
                        }
                    }
                    return function(e, n, r) {
                        return n && t(e.prototype, n),
                        r && t(e, r),
                        e
                    }
                }()
                  , r = function() {
                    function r(t, e) {
                        (function(t, e) {
                            if (!(t instanceof e))
                                throw new TypeError("Cannot call a class as a function")
                        }
                        )(this, r),
                        this.context_ = t || {
                            base_url: "",
                            prefix: "",
                            host: "",
                            port: "",
                            scheme: "",
                            locale: ""
                        },
                        this.setRoutes(e || {})
                    }
                    return n(r, [{
                        key: "setRoutingData",
                        value: function(t) {
                            this.setBaseUrl(t.base_url),
                            this.setRoutes(t.routes),
                            "prefix"in t && this.setPrefix(t.prefix),
                            "port"in t && this.setPort(t.port),
                            "locale"in t && this.setLocale(t.locale),
                            this.setHost(t.host),
                            this.setScheme(t.scheme)
                        }
                    }, {
                        key: "setRoutes",
                        value: function(t) {
                            this.routes_ = Object.freeze(t)
                        }
                    }, {
                        key: "getRoutes",
                        value: function() {
                            return this.routes_
                        }
                    }, {
                        key: "setBaseUrl",
                        value: function(t) {
                            this.context_.base_url = t
                        }
                    }, {
                        key: "getBaseUrl",
                        value: function() {
                            return this.context_.base_url
                        }
                    }, {
                        key: "setPrefix",
                        value: function(t) {
                            this.context_.prefix = t
                        }
                    }, {
                        key: "setScheme",
                        value: function(t) {
                            this.context_.scheme = t
                        }
                    }, {
                        key: "getScheme",
                        value: function() {
                            return this.context_.scheme
                        }
                    }, {
                        key: "setHost",
                        value: function(t) {
                            this.context_.host = t
                        }
                    }, {
                        key: "getHost",
                        value: function() {
                            return this.context_.host
                        }
                    }, {
                        key: "setPort",
                        value: function(t) {
                            this.context_.port = t
                        }
                    }, {
                        key: "getPort",
                        value: function() {
                            return this.context_.port
                        }
                    }, {
                        key: "setLocale",
                        value: function(t) {
                            this.context_.locale = t
                        }
                    }, {
                        key: "getLocale",
                        value: function() {
                            return this.context_.locale
                        }
                    }, {
                        key: "buildQueryParams",
                        value: function(t, n, r) {
                            var i = this
                              , s = void 0
                              , o = new RegExp(/\[\]$/);
                            if (n instanceof Array)
                                n.forEach((function(n, s) {
                                    o.test(t) ? r(t, n) : i.buildQueryParams(t + "[" + ("object" === (void 0 === n ? "undefined" : e(n)) ? s : "") + "]", n, r)
                                }
                                ));
                            else if ("object" === (void 0 === n ? "undefined" : e(n)))
                                for (s in n)
                                    this.buildQueryParams(t + "[" + s + "]", n[s], r);
                            else
                                r(t, n)
                        }
                    }, {
                        key: "getRoute",
                        value: function(t) {
                            var e = [this.context_.prefix + t, t + "." + this.context_.locale, this.context_.prefix + t + "." + this.context_.locale, t];
                            for (var n in e)
                                if (e[n]in this.routes_)
                                    return this.routes_[e[n]];
                            throw new Error('The route "' + t + '" does not exist.')
                        }
                    }, {
                        key: "generate",
                        value: function(e, n) {
                            var r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2]
                              , i = this.getRoute(e)
                              , s = n || {}
                              , o = t({}, s)
                              , a = ""
                              , u = !0
                              , l = ""
                              , c = void 0 === this.getPort() || null === this.getPort() ? "" : this.getPort();
                            if (i.tokens.forEach((function(t) {
                                if ("text" === t[0])
                                    return a = t[1] + a,
                                    void (u = !1);
                                if ("variable" !== t[0])
                                    throw new Error('The token type "' + t[0] + '" is not supported.');
                                var n = i.defaults && t[3]in i.defaults;
                                if (!1 === u || !n || t[3]in s && s[t[3]] != i.defaults[t[3]]) {
                                    var r = void 0;
                                    if (t[3]in s)
                                        r = s[t[3]],
                                        delete o[t[3]];
                                    else {
                                        if (!n) {
                                            if (u)
                                                return;
                                            throw new Error('The route "' + e + '" requires the parameter "' + t[3] + '".')
                                        }
                                        r = i.defaults[t[3]]
                                    }
                                    if (!0 !== r && !1 !== r && "" !== r || !u) {
                                        var l = encodeURIComponent(r).replace(/%2F/g, "/");
                                        "null" === l && null === r && (l = ""),
                                        a = t[1] + l + a
                                    }
                                    u = !1
                                } else
                                    n && t[3]in o && delete o[t[3]]
                            }
                            )),
                            "" === a && (a = "/"),
                            i.hosttokens.forEach((function(t) {
                                var e = void 0;
                                return "text" === t[0] ? void (l = t[1] + l) : void ("variable" === t[0] && (t[3]in s ? (e = s[t[3]],
                                delete o[t[3]]) : i.defaults && t[3]in i.defaults && (e = i.defaults[t[3]]),
                                l = t[1] + e + l))
                            }
                            )),
                            a = this.context_.base_url + a,
                            i.requirements && "_scheme"in i.requirements && this.getScheme() != i.requirements._scheme ? a = i.requirements._scheme + "://" + (l || this.getHost()) + ("" === c ? "" : ":" + c) + a : void 0 !== i.schemes && void 0 !== i.schemes[0] && this.getScheme() !== i.schemes[0] ? a = i.schemes[0] + "://" + (l || this.getHost()) + ("" === c ? "" : ":" + c) + a : l && this.getHost() !== l + ("" === c ? "" : ":" + c) ? a = this.getScheme() + "://" + l + ("" === c ? "" : ":" + c) + a : !0 === r && (a = this.getScheme() + "://" + this.getHost() + ("" === c ? "" : ":" + c) + a),
                            Object.keys(o).length > 0) {
                                var h = void 0
                                  , f = []
                                  , d = function(t, e) {
                                    e = null === (e = "function" == typeof e ? e() : e) ? "" : e,
                                    f.push(encodeURIComponent(t) + "=" + encodeURIComponent(e))
                                };
                                for (h in o)
                                    this.buildQueryParams(h, o[h], d);
                                a = a + "?" + f.join("&").replace(/%20/g, "+")
                            }
                            return a
                        }
                    }], [{
                        key: "getInstance",
                        value: function() {
                            return i
                        }
                    }, {
                        key: "setData",
                        value: function(t) {
                            r.getInstance().setRoutingData(t)
                        }
                    }]),
                    r
                }();
                r.Route,
                r.Context;
                var i = new r;
                return {
                    Router: r,
                    Routing: i
                }
            }().Routing) ? n.apply(e, r) : n) || (t.exports = i)
        },
        2316: (t,e,n)=>{
            var r, i, s;
            s = "object" == typeof self && self.self === self && self || "object" == typeof n.g && n.g.global === n.g && n.g,
            r = [n(3469), n(3609), e],
            void 0 === (i = function(t, e, n) {
                s.Backbone = function(t, e, n, r) {
                    var i = t.Backbone
                      , s = Array.prototype.slice;
                    e.VERSION = "1.3.3",
                    e.$ = r,
                    e.noConflict = function() {
                        return t.Backbone = i,
                        this
                    }
                    ,
                    e.emulateHTTP = !1,
                    e.emulateJSON = !1;
                    var o = function(t, e, r) {
                        n.each(e, (function(e, i) {
                            n[i] && (t.prototype[i] = function(t, e, r) {
                                switch (t) {
                                case 1:
                                    return function() {
                                        return n[e](this[r])
                                    }
                                    ;
                                case 2:
                                    return function(t) {
                                        return n[e](this[r], t)
                                    }
                                    ;
                                case 3:
                                    return function(t, i) {
                                        return n[e](this[r], a(t, this), i)
                                    }
                                    ;
                                case 4:
                                    return function(t, i, s) {
                                        return n[e](this[r], a(t, this), i, s)
                                    }
                                    ;
                                default:
                                    return function() {
                                        var t = s.call(arguments);
                                        return t.unshift(this[r]),
                                        n[e].apply(n, t)
                                    }
                                }
                            }(e, i, r))
                        }
                        ))
                    }
                      , a = function(t, e) {
                        return n.isFunction(t) ? t : n.isObject(t) && !e._isModel(t) ? u(t) : n.isString(t) ? function(e) {
                            return e.get(t)
                        }
                        : t
                    }
                      , u = function(t) {
                        var e = n.matches(t);
                        return function(t) {
                            return e(t.attributes)
                        }
                    }
                      , l = e.Events = {}
                      , c = /\s+/
                      , h = function(t, e, r, i, s) {
                        var o, a = 0;
                        if (r && "object" == typeof r) {
                            void 0 !== i && "context"in s && void 0 === s.context && (s.context = i);
                            for (o = n.keys(r); a < o.length; a++)
                                e = h(t, e, o[a], r[o[a]], s)
                        } else if (r && c.test(r))
                            for (o = r.split(c); a < o.length; a++)
                                e = t(e, o[a], i, s);
                        else
                            e = t(e, r, i, s);
                        return e
                    };
                    l.on = function(t, e, n) {
                        return f(this, t, e, n)
                    }
                    ;
                    var f = function(t, e, n, r, i) {
                        return t._events = h(d, t._events || {}, e, n, {
                            context: r,
                            ctx: t,
                            listening: i
                        }),
                        i && ((t._listeners || (t._listeners = {}))[i.id] = i),
                        t
                    };
                    l.listenTo = function(t, e, r) {
                        if (!t)
                            return this;
                        var i = t._listenId || (t._listenId = n.uniqueId("l"))
                          , s = this._listeningTo || (this._listeningTo = {})
                          , o = s[i];
                        if (!o) {
                            var a = this._listenId || (this._listenId = n.uniqueId("l"));
                            o = s[i] = {
                                obj: t,
                                objId: i,
                                id: a,
                                listeningTo: s,
                                count: 0
                            }
                        }
                        return f(t, e, r, this, o),
                        this
                    }
                    ;
                    var d = function(t, e, n, r) {
                        if (n) {
                            var i = t[e] || (t[e] = [])
                              , s = r.context
                              , o = r.ctx
                              , a = r.listening;
                            a && a.count++,
                            i.push({
                                callback: n,
                                context: s,
                                ctx: s || o,
                                listening: a
                            })
                        }
                        return t
                    };
                    l.off = function(t, e, n) {
                        return this._events ? (this._events = h(p, this._events, t, e, {
                            context: n,
                            listeners: this._listeners
                        }),
                        this) : this
                    }
                    ,
                    l.stopListening = function(t, e, r) {
                        var i = this._listeningTo;
                        if (!i)
                            return this;
                        for (var s = t ? [t._listenId] : n.keys(i), o = 0; o < s.length; o++) {
                            var a = i[s[o]];
                            if (!a)
                                break;
                            a.obj.off(e, r, this)
                        }
                        return this
                    }
                    ;
                    var p = function(t, e, r, i) {
                        if (t) {
                            var s, o = 0, a = i.context, u = i.listeners;
                            if (e || r || a) {
                                for (var l = e ? [e] : n.keys(t); o < l.length; o++) {
                                    var c = t[e = l[o]];
                                    if (!c)
                                        break;
                                    for (var h = [], f = 0; f < c.length; f++) {
                                        var d = c[f];
                                        r && r !== d.callback && r !== d.callback._callback || a && a !== d.context ? h.push(d) : (s = d.listening) && 0 == --s.count && (delete u[s.id],
                                        delete s.listeningTo[s.objId])
                                    }
                                    h.length ? t[e] = h : delete t[e]
                                }
                                return t
                            }
                            for (var p = n.keys(u); o < p.length; o++)
                                delete u[(s = u[p[o]]).id],
                                delete s.listeningTo[s.objId]
                        }
                    };
                    l.once = function(t, e, r) {
                        var i = h(v, {}, t, e, n.bind(this.off, this));
                        return "string" == typeof t && null == r && (e = void 0),
                        this.on(i, e, r)
                    }
                    ,
                    l.listenToOnce = function(t, e, r) {
                        var i = h(v, {}, e, r, n.bind(this.stopListening, this, t));
                        return this.listenTo(t, i)
                    }
                    ;
                    var v = function(t, e, r, i) {
                        if (r) {
                            var s = t[e] = n.once((function() {
                                i(e, s),
                                r.apply(this, arguments)
                            }
                            ));
                            s._callback = r
                        }
                        return t
                    };
                    l.trigger = function(t) {
                        if (!this._events)
                            return this;
                        for (var e = Math.max(0, arguments.length - 1), n = Array(e), r = 0; r < e; r++)
                            n[r] = arguments[r + 1];
                        return h(m, this._events, t, void 0, n),
                        this
                    }
                    ;
                    var m = function(t, e, n, r) {
                        if (t) {
                            var i = t[e]
                              , s = t.all;
                            i && s && (s = s.slice()),
                            i && g(i, r),
                            s && g(s, [e].concat(r))
                        }
                        return t
                    }
                      , g = function(t, e) {
                        var n, r = -1, i = t.length, s = e[0], o = e[1], a = e[2];
                        switch (e.length) {
                        case 0:
                            for (; ++r < i; )
                                (n = t[r]).callback.call(n.ctx);
                            return;
                        case 1:
                            for (; ++r < i; )
                                (n = t[r]).callback.call(n.ctx, s);
                            return;
                        case 2:
                            for (; ++r < i; )
                                (n = t[r]).callback.call(n.ctx, s, o);
                            return;
                        case 3:
                            for (; ++r < i; )
                                (n = t[r]).callback.call(n.ctx, s, o, a);
                            return;
                        default:
                            for (; ++r < i; )
                                (n = t[r]).callback.apply(n.ctx, e);
                            return
                        }
                    };
                    l.bind = l.on,
                    l.unbind = l.off,
                    n.extend(e, l);
                    var y = e.Model = function(t, e) {
                        var r = t || {};
                        e || (e = {}),
                        this.cid = n.uniqueId(this.cidPrefix),
                        this.attributes = {},
                        e.collection && (this.collection = e.collection),
                        e.parse && (r = this.parse(r, e) || {});
                        var i = n.result(this, "defaults");
                        r = n.defaults(n.extend({}, i, r), i),
                        this.set(r, e),
                        this.changed = {},
                        this.initialize.apply(this, arguments)
                    }
                    ;
                    n.extend(y.prototype, l, {
                        changed: null,
                        validationError: null,
                        idAttribute: "id",
                        cidPrefix: "c",
                        initialize: function() {},
                        toJSON: function(t) {
                            return n.clone(this.attributes)
                        },
                        sync: function() {
                            return e.sync.apply(this, arguments)
                        },
                        get: function(t) {
                            return this.attributes[t]
                        },
                        escape: function(t) {
                            return n.escape(this.get(t))
                        },
                        has: function(t) {
                            return null != this.get(t)
                        },
                        matches: function(t) {
                            return !!n.iteratee(t, this)(this.attributes)
                        },
                        set: function(t, e, r) {
                            if (null == t)
                                return this;
                            var i;
                            if ("object" == typeof t ? (i = t,
                            r = e) : (i = {})[t] = e,
                            r || (r = {}),
                            !this._validate(i, r))
                                return !1;
                            var s = r.unset
                              , o = r.silent
                              , a = []
                              , u = this._changing;
                            this._changing = !0,
                            u || (this._previousAttributes = n.clone(this.attributes),
                            this.changed = {});
                            var l = this.attributes
                              , c = this.changed
                              , h = this._previousAttributes;
                            for (var f in i)
                                e = i[f],
                                n.isEqual(l[f], e) || a.push(f),
                                n.isEqual(h[f], e) ? delete c[f] : c[f] = e,
                                s ? delete l[f] : l[f] = e;
                            if (this.idAttribute in i && (this.id = this.get(this.idAttribute)),
                            !o) {
                                a.length && (this._pending = r);
                                for (var d = 0; d < a.length; d++)
                                    this.trigger("change:" + a[d], this, l[a[d]], r)
                            }
                            if (u)
                                return this;
                            if (!o)
                                for (; this._pending; )
                                    r = this._pending,
                                    this._pending = !1,
                                    this.trigger("change", this, r);
                            return this._pending = !1,
                            this._changing = !1,
                            this
                        },
                        unset: function(t, e) {
                            return this.set(t, void 0, n.extend({}, e, {
                                unset: !0
                            }))
                        },
                        clear: function(t) {
                            var e = {};
                            for (var r in this.attributes)
                                e[r] = void 0;
                            return this.set(e, n.extend({}, t, {
                                unset: !0
                            }))
                        },
                        hasChanged: function(t) {
                            return null == t ? !n.isEmpty(this.changed) : n.has(this.changed, t)
                        },
                        changedAttributes: function(t) {
                            if (!t)
                                return !!this.hasChanged() && n.clone(this.changed);
                            var e = this._changing ? this._previousAttributes : this.attributes
                              , r = {};
                            for (var i in t) {
                                var s = t[i];
                                n.isEqual(e[i], s) || (r[i] = s)
                            }
                            return !!n.size(r) && r
                        },
                        previous: function(t) {
                            return null != t && this._previousAttributes ? this._previousAttributes[t] : null
                        },
                        previousAttributes: function() {
                            return n.clone(this._previousAttributes)
                        },
                        fetch: function(t) {
                            t = n.extend({
                                parse: !0
                            }, t);
                            var e = this
                              , r = t.success;
                            return t.success = function(n) {
                                var i = t.parse ? e.parse(n, t) : n;
                                if (!e.set(i, t))
                                    return !1;
                                r && r.call(t.context, e, n, t),
                                e.trigger("sync", e, n, t)
                            }
                            ,
                            H(this, t),
                            this.sync("read", this, t)
                        },
                        save: function(t, e, r) {
                            var i;
                            null == t || "object" == typeof t ? (i = t,
                            r = e) : (i = {})[t] = e;
                            var s = (r = n.extend({
                                validate: !0,
                                parse: !0
                            }, r)).wait;
                            if (i && !s) {
                                if (!this.set(i, r))
                                    return !1
                            } else if (!this._validate(i, r))
                                return !1;
                            var o = this
                              , a = r.success
                              , u = this.attributes;
                            r.success = function(t) {
                                o.attributes = u;
                                var e = r.parse ? o.parse(t, r) : t;
                                if (s && (e = n.extend({}, i, e)),
                                e && !o.set(e, r))
                                    return !1;
                                a && a.call(r.context, o, t, r),
                                o.trigger("sync", o, t, r)
                            }
                            ,
                            H(this, r),
                            i && s && (this.attributes = n.extend({}, u, i));
                            var l = this.isNew() ? "create" : r.patch ? "patch" : "update";
                            "patch" !== l || r.attrs || (r.attrs = i);
                            var c = this.sync(l, this, r);
                            return this.attributes = u,
                            c
                        },
                        destroy: function(t) {
                            t = t ? n.clone(t) : {};
                            var e = this
                              , r = t.success
                              , i = t.wait
                              , s = function() {
                                e.stopListening(),
                                e.trigger("destroy", e, e.collection, t)
                            };
                            t.success = function(n) {
                                i && s(),
                                r && r.call(t.context, e, n, t),
                                e.isNew() || e.trigger("sync", e, n, t)
                            }
                            ;
                            var o = !1;
                            return this.isNew() ? n.defer(t.success) : (H(this, t),
                            o = this.sync("delete", this, t)),
                            i || s(),
                            o
                        },
                        url: function() {
                            var t = n.result(this, "urlRoot") || n.result(this.collection, "url") || B();
                            if (this.isNew())
                                return t;
                            var e = this.get(this.idAttribute);
                            return t.replace(/[^\/]$/, "$&/") + encodeURIComponent(e)
                        },
                        parse: function(t, e) {
                            return t
                        },
                        clone: function() {
                            return new this.constructor(this.attributes)
                        },
                        isNew: function() {
                            return !this.has(this.idAttribute)
                        },
                        isValid: function(t) {
                            return this._validate({}, n.extend({}, t, {
                                validate: !0
                            }))
                        },
                        _validate: function(t, e) {
                            if (!e.validate || !this.validate)
                                return !0;
                            t = n.extend({}, this.attributes, t);
                            var r = this.validationError = this.validate(t, e) || null;
                            return !r || (this.trigger("invalid", this, r, n.extend(e, {
                                validationError: r
                            })),
                            !1)
                        }
                    }),
                    o(y, {
                        keys: 1,
                        values: 1,
                        pairs: 1,
                        invert: 1,
                        pick: 0,
                        omit: 0,
                        chain: 1,
                        isEmpty: 1
                    }, "attributes");
                    var b = e.Collection = function(t, e) {
                        e || (e = {}),
                        e.model && (this.model = e.model),
                        void 0 !== e.comparator && (this.comparator = e.comparator),
                        this._reset(),
                        this.initialize.apply(this, arguments),
                        t && this.reset(t, n.extend({
                            silent: !0
                        }, e))
                    }
                      , _ = {
                        add: !0,
                        remove: !0,
                        merge: !0
                    }
                      , x = {
                        add: !0,
                        remove: !1
                    }
                      , w = function(t, e, n) {
                        n = Math.min(Math.max(n, 0), t.length);
                        var r, i = Array(t.length - n), s = e.length;
                        for (r = 0; r < i.length; r++)
                            i[r] = t[r + n];
                        for (r = 0; r < s; r++)
                            t[r + n] = e[r];
                        for (r = 0; r < i.length; r++)
                            t[r + s + n] = i[r]
                    };
                    n.extend(b.prototype, l, {
                        model: y,
                        initialize: function() {},
                        toJSON: function(t) {
                            return this.map((function(e) {
                                return e.toJSON(t)
                            }
                            ))
                        },
                        sync: function() {
                            return e.sync.apply(this, arguments)
                        },
                        add: function(t, e) {
                            return this.set(t, n.extend({
                                merge: !1
                            }, e, x))
                        },
                        remove: function(t, e) {
                            e = n.extend({}, e);
                            var r = !n.isArray(t);
                            t = r ? [t] : t.slice();
                            var i = this._removeModels(t, e);
                            return !e.silent && i.length && (e.changes = {
                                added: [],
                                merged: [],
                                removed: i
                            },
                            this.trigger("update", this, e)),
                            r ? i[0] : i
                        },
                        set: function(t, e) {
                            if (null != t) {
                                (e = n.extend({}, _, e)).parse && !this._isModel(t) && (t = this.parse(t, e) || []);
                                var r = !n.isArray(t);
                                t = r ? [t] : t.slice();
                                var i = e.at;
                                null != i && (i = +i),
                                i > this.length && (i = this.length),
                                i < 0 && (i += this.length + 1);
                                var s, o, a = [], u = [], l = [], c = [], h = {}, f = e.add, d = e.merge, p = e.remove, v = !1, m = this.comparator && null == i && !1 !== e.sort, g = n.isString(this.comparator) ? this.comparator : null;
                                for (o = 0; o < t.length; o++) {
                                    s = t[o];
                                    var y = this.get(s);
                                    if (y) {
                                        if (d && s !== y) {
                                            var b = this._isModel(s) ? s.attributes : s;
                                            e.parse && (b = y.parse(b, e)),
                                            y.set(b, e),
                                            l.push(y),
                                            m && !v && (v = y.hasChanged(g))
                                        }
                                        h[y.cid] || (h[y.cid] = !0,
                                        a.push(y)),
                                        t[o] = y
                                    } else
                                        f && (s = t[o] = this._prepareModel(s, e)) && (u.push(s),
                                        this._addReference(s, e),
                                        h[s.cid] = !0,
                                        a.push(s))
                                }
                                if (p) {
                                    for (o = 0; o < this.length; o++)
                                        h[(s = this.models[o]).cid] || c.push(s);
                                    c.length && this._removeModels(c, e)
                                }
                                var x = !1
                                  , k = !m && f && p;
                                if (a.length && k ? (x = this.length !== a.length || n.some(this.models, (function(t, e) {
                                    return t !== a[e]
                                }
                                )),
                                this.models.length = 0,
                                w(this.models, a, 0),
                                this.length = this.models.length) : u.length && (m && (v = !0),
                                w(this.models, u, null == i ? this.length : i),
                                this.length = this.models.length),
                                v && this.sort({
                                    silent: !0
                                }),
                                !e.silent) {
                                    for (o = 0; o < u.length; o++)
                                        null != i && (e.index = i + o),
                                        (s = u[o]).trigger("add", s, this, e);
                                    (v || x) && this.trigger("sort", this, e),
                                    (u.length || c.length || l.length) && (e.changes = {
                                        added: u,
                                        removed: c,
                                        merged: l
                                    },
                                    this.trigger("update", this, e))
                                }
                                return r ? t[0] : t
                            }
                        },
                        reset: function(t, e) {
                            e = e ? n.clone(e) : {};
                            for (var r = 0; r < this.models.length; r++)
                                this._removeReference(this.models[r], e);
                            return e.previousModels = this.models,
                            this._reset(),
                            t = this.add(t, n.extend({
                                silent: !0
                            }, e)),
                            e.silent || this.trigger("reset", this, e),
                            t
                        },
                        push: function(t, e) {
                            return this.add(t, n.extend({
                                at: this.length
                            }, e))
                        },
                        pop: function(t) {
                            var e = this.at(this.length - 1);
                            return this.remove(e, t)
                        },
                        unshift: function(t, e) {
                            return this.add(t, n.extend({
                                at: 0
                            }, e))
                        },
                        shift: function(t) {
                            var e = this.at(0);
                            return this.remove(e, t)
                        },
                        slice: function() {
                            return s.apply(this.models, arguments)
                        },
                        get: function(t) {
                            if (null != t)
                                return this._byId[t] || this._byId[this.modelId(t.attributes || t)] || t.cid && this._byId[t.cid]
                        },
                        has: function(t) {
                            return null != this.get(t)
                        },
                        at: function(t) {
                            return t < 0 && (t += this.length),
                            this.models[t]
                        },
                        where: function(t, e) {
                            return this[e ? "find" : "filter"](t)
                        },
                        findWhere: function(t) {
                            return this.where(t, !0)
                        },
                        sort: function(t) {
                            var e = this.comparator;
                            if (!e)
                                throw new Error("Cannot sort a set without a comparator");
                            t || (t = {});
                            var r = e.length;
                            return n.isFunction(e) && (e = n.bind(e, this)),
                            1 === r || n.isString(e) ? this.models = this.sortBy(e) : this.models.sort(e),
                            t.silent || this.trigger("sort", this, t),
                            this
                        },
                        pluck: function(t) {
                            return this.map(t + "")
                        },
                        fetch: function(t) {
                            var e = (t = n.extend({
                                parse: !0
                            }, t)).success
                              , r = this;
                            return t.success = function(n) {
                                var i = t.reset ? "reset" : "set";
                                r[i](n, t),
                                e && e.call(t.context, r, n, t),
                                r.trigger("sync", r, n, t)
                            }
                            ,
                            H(this, t),
                            this.sync("read", this, t)
                        },
                        create: function(t, e) {
                            var r = (e = e ? n.clone(e) : {}).wait;
                            if (!(t = this._prepareModel(t, e)))
                                return !1;
                            r || this.add(t, e);
                            var i = this
                              , s = e.success;
                            return e.success = function(t, e, n) {
                                r && i.add(t, n),
                                s && s.call(n.context, t, e, n)
                            }
                            ,
                            t.save(null, e),
                            t
                        },
                        parse: function(t, e) {
                            return t
                        },
                        clone: function() {
                            return new this.constructor(this.models,{
                                model: this.model,
                                comparator: this.comparator
                            })
                        },
                        modelId: function(t) {
                            return t[this.model.prototype.idAttribute || "id"]
                        },
                        _reset: function() {
                            this.length = 0,
                            this.models = [],
                            this._byId = {}
                        },
                        _prepareModel: function(t, e) {
                            if (this._isModel(t))
                                return t.collection || (t.collection = this),
                                t;
                            (e = e ? n.clone(e) : {}).collection = this;
                            var r = new this.model(t,e);
                            return r.validationError ? (this.trigger("invalid", this, r.validationError, e),
                            !1) : r
                        },
                        _removeModels: function(t, e) {
                            for (var n = [], r = 0; r < t.length; r++) {
                                var i = this.get(t[r]);
                                if (i) {
                                    var s = this.indexOf(i);
                                    this.models.splice(s, 1),
                                    this.length--,
                                    delete this._byId[i.cid];
                                    var o = this.modelId(i.attributes);
                                    null != o && delete this._byId[o],
                                    e.silent || (e.index = s,
                                    i.trigger("remove", i, this, e)),
                                    n.push(i),
                                    this._removeReference(i, e)
                                }
                            }
                            return n
                        },
                        _isModel: function(t) {
                            return t instanceof y
                        },
                        _addReference: function(t, e) {
                            this._byId[t.cid] = t;
                            var n = this.modelId(t.attributes);
                            null != n && (this._byId[n] = t),
                            t.on("all", this._onModelEvent, this)
                        },
                        _removeReference: function(t, e) {
                            delete this._byId[t.cid];
                            var n = this.modelId(t.attributes);
                            null != n && delete this._byId[n],
                            this === t.collection && delete t.collection,
                            t.off("all", this._onModelEvent, this)
                        },
                        _onModelEvent: function(t, e, n, r) {
                            if (e) {
                                if (("add" === t || "remove" === t) && n !== this)
                                    return;
                                if ("destroy" === t && this.remove(e, r),
                                "change" === t) {
                                    var i = this.modelId(e.previousAttributes())
                                      , s = this.modelId(e.attributes);
                                    i !== s && (null != i && delete this._byId[i],
                                    null != s && (this._byId[s] = e))
                                }
                            }
                            this.trigger.apply(this, arguments)
                        }
                    }),
                    o(b, {
                        forEach: 3,
                        each: 3,
                        map: 3,
                        collect: 3,
                        reduce: 0,
                        foldl: 0,
                        inject: 0,
                        reduceRight: 0,
                        foldr: 0,
                        find: 3,
                        detect: 3,
                        filter: 3,
                        select: 3,
                        reject: 3,
                        every: 3,
                        all: 3,
                        some: 3,
                        any: 3,
                        include: 3,
                        includes: 3,
                        contains: 3,
                        invoke: 0,
                        max: 3,
                        min: 3,
                        toArray: 1,
                        size: 1,
                        first: 3,
                        head: 3,
                        take: 3,
                        initial: 3,
                        rest: 3,
                        tail: 3,
                        drop: 3,
                        last: 3,
                        without: 0,
                        difference: 0,
                        indexOf: 3,
                        shuffle: 1,
                        lastIndexOf: 3,
                        isEmpty: 1,
                        chain: 1,
                        sample: 3,
                        partition: 3,
                        groupBy: 3,
                        countBy: 3,
                        sortBy: 3,
                        indexBy: 3,
                        findIndex: 3,
                        findLastIndex: 3
                    }, "models");
                    var k = e.View = function(t) {
                        this.cid = n.uniqueId("view"),
                        n.extend(this, n.pick(t, E)),
                        this._ensureElement(),
                        this.initialize.apply(this, arguments)
                    }
                      , S = /^(\S+)\s*(.*)$/
                      , E = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
                    n.extend(k.prototype, l, {
                        tagName: "div",
                        $: function(t) {
                            return this.$el.find(t)
                        },
                        initialize: function() {},
                        render: function() {
                            return this
                        },
                        remove: function() {
                            return this._removeElement(),
                            this.stopListening(),
                            this
                        },
                        _removeElement: function() {
                            this.$el.remove()
                        },
                        setElement: function(t) {
                            return this.undelegateEvents(),
                            this._setElement(t),
                            this.delegateEvents(),
                            this
                        },
                        _setElement: function(t) {
                            this.$el = t instanceof e.$ ? t : e.$(t),
                            this.el = this.$el[0]
                        },
                        delegateEvents: function(t) {
                            if (t || (t = n.result(this, "events")),
                            !t)
                                return this;
                            for (var e in this.undelegateEvents(),
                            t) {
                                var r = t[e];
                                if (n.isFunction(r) || (r = this[r]),
                                r) {
                                    var i = e.match(S);
                                    this.delegate(i[1], i[2], n.bind(r, this))
                                }
                            }
                            return this
                        },
                        delegate: function(t, e, n) {
                            return this.$el.on(t + ".delegateEvents" + this.cid, e, n),
                            this
                        },
                        undelegateEvents: function() {
                            return this.$el && this.$el.off(".delegateEvents" + this.cid),
                            this
                        },
                        undelegate: function(t, e, n) {
                            return this.$el.off(t + ".delegateEvents" + this.cid, e, n),
                            this
                        },
                        _createElement: function(t) {
                            return document.createElement(t)
                        },
                        _ensureElement: function() {
                            if (this.el)
                                this.setElement(n.result(this, "el"));
                            else {
                                var t = n.extend({}, n.result(this, "attributes"));
                                this.id && (t.id = n.result(this, "id")),
                                this.className && (t.class = n.result(this, "className")),
                                this.setElement(this._createElement(n.result(this, "tagName"))),
                                this._setAttributes(t)
                            }
                        },
                        _setAttributes: function(t) {
                            this.$el.attr(t)
                        }
                    }),
                    e.sync = function(t, r, i) {
                        var s = C[t];
                        n.defaults(i || (i = {}), {
                            emulateHTTP: e.emulateHTTP,
                            emulateJSON: e.emulateJSON
                        });
                        var o = {
                            type: s,
                            dataType: "json"
                        };
                        if (i.url || (o.url = n.result(r, "url") || B()),
                        null != i.data || !r || "create" !== t && "update" !== t && "patch" !== t || (o.contentType = "application/json",
                        o.data = JSON.stringify(i.attrs || r.toJSON(i))),
                        i.emulateJSON && (o.contentType = "application/x-www-form-urlencoded",
                        o.data = o.data ? {
                            model: o.data
                        } : {}),
                        i.emulateHTTP && ("PUT" === s || "DELETE" === s || "PATCH" === s)) {
                            o.type = "POST",
                            i.emulateJSON && (o.data._method = s);
                            var a = i.beforeSend;
                            i.beforeSend = function(t) {
                                if (t.setRequestHeader("X-HTTP-Method-Override", s),
                                a)
                                    return a.apply(this, arguments)
                            }
                        }
                        "GET" === o.type || i.emulateJSON || (o.processData = !1);
                        var u = i.error;
                        i.error = function(t, e, n) {
                            i.textStatus = e,
                            i.errorThrown = n,
                            u && u.call(i.context, t, e, n)
                        }
                        ;
                        var l = i.xhr = e.ajax(n.extend(o, i));
                        return r.trigger("request", r, l, i),
                        l
                    }
                    ;
                    var C = {
                        create: "POST",
                        update: "PUT",
                        patch: "PATCH",
                        delete: "DELETE",
                        read: "GET"
                    };
                    e.ajax = function() {
                        return e.$.ajax.apply(e.$, arguments)
                    }
                    ;
                    var T = e.Router = function(t) {
                        t || (t = {}),
                        t.routes && (this.routes = t.routes),
                        this._bindRoutes(),
                        this.initialize.apply(this, arguments)
                    }
                      , O = /\((.*?)\)/g
                      , A = /(\(\?)?:\w+/g
                      , q = /\*\w+/g
                      , I = /[\-{}\[\]+?.,\\\^$|#\s]/g;
                    n.extend(T.prototype, l, {
                        initialize: function() {},
                        route: function(t, r, i) {
                            n.isRegExp(t) || (t = this._routeToRegExp(t)),
                            n.isFunction(r) && (i = r,
                            r = ""),
                            i || (i = this[r]);
                            var s = this;
                            return e.history.route(t, (function(n) {
                                var o = s._extractParameters(t, n);
                                !1 !== s.execute(i, o, r) && (s.trigger.apply(s, ["route:" + r].concat(o)),
                                s.trigger("route", r, o),
                                e.history.trigger("route", s, r, o))
                            }
                            )),
                            this
                        },
                        execute: function(t, e, n) {
                            t && t.apply(this, e)
                        },
                        navigate: function(t, n) {
                            return e.history.navigate(t, n),
                            this
                        },
                        _bindRoutes: function() {
                            if (this.routes) {
                                this.routes = n.result(this, "routes");
                                for (var t, e = n.keys(this.routes); null != (t = e.pop()); )
                                    this.route(t, this.routes[t])
                            }
                        },
                        _routeToRegExp: function(t) {
                            return t = t.replace(I, "\\$&").replace(O, "(?:$1)?").replace(A, (function(t, e) {
                                return e ? t : "([^/?]+)"
                            }
                            )).replace(q, "([^?]*?)"),
                            new RegExp("^" + t + "(?:\\?([\\s\\S]*))?$")
                        },
                        _extractParameters: function(t, e) {
                            var r = t.exec(e).slice(1);
                            return n.map(r, (function(t, e) {
                                return e === r.length - 1 ? t || null : t ? decodeURIComponent(t) : null
                            }
                            ))
                        }
                    });
                    var P = e.History = function() {
                        this.handlers = [],
                        this.checkUrl = n.bind(this.checkUrl, this),
                        "undefined" != typeof window && (this.location = window.location,
                        this.history = window.history)
                    }
                      , j = /^[#\/]|\s+$/g
                      , M = /^\/+|\/+$/g
                      , R = /#.*$/;
                    P.started = !1,
                    n.extend(P.prototype, l, {
                        interval: 50,
                        atRoot: function() {
                            return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root && !this.getSearch()
                        },
                        matchRoot: function() {
                            return this.decodeFragment(this.location.pathname).slice(0, this.root.length - 1) + "/" === this.root
                        },
                        decodeFragment: function(t) {
                            return decodeURI(t.replace(/%25/g, "%2525"))
                        },
                        getSearch: function() {
                            var t = this.location.href.replace(/#.*/, "").match(/\?.+/);
                            return t ? t[0] : ""
                        },
                        getHash: function(t) {
                            var e = (t || this).location.href.match(/#(.*)$/);
                            return e ? e[1] : ""
                        },
                        getPath: function() {
                            var t = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
                            return "/" === t.charAt(0) ? t.slice(1) : t
                        },
                        getFragment: function(t) {
                            return null == t && (t = this._usePushState || !this._wantsHashChange ? this.getPath() : this.getHash()),
                            t.replace(j, "")
                        },
                        start: function(t) {
                            if (P.started)
                                throw new Error("Backbone.history has already been started");
                            if (P.started = !0,
                            this.options = n.extend({
                                root: "/"
                            }, this.options, t),
                            this.root = this.options.root,
                            this._wantsHashChange = !1 !== this.options.hashChange,
                            this._hasHashChange = "onhashchange"in window && (void 0 === document.documentMode || document.documentMode > 7),
                            this._useHashChange = this._wantsHashChange && this._hasHashChange,
                            this._wantsPushState = !!this.options.pushState,
                            this._hasPushState = !(!this.history || !this.history.pushState),
                            this._usePushState = this._wantsPushState && this._hasPushState,
                            this.fragment = this.getFragment(),
                            this.root = ("/" + this.root + "/").replace(M, "/"),
                            this._wantsHashChange && this._wantsPushState) {
                                if (!this._hasPushState && !this.atRoot()) {
                                    var e = this.root.slice(0, -1) || "/";
                                    return this.location.replace(e + "#" + this.getPath()),
                                    !0
                                }
                                this._hasPushState && this.atRoot() && this.navigate(this.getHash(), {
                                    replace: !0
                                })
                            }
                            if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
                                this.iframe = document.createElement("iframe"),
                                this.iframe.src = "javascript:0",
                                this.iframe.style.display = "none",
                                this.iframe.tabIndex = -1;
                                var r = document.body
                                  , i = r.insertBefore(this.iframe, r.firstChild).contentWindow;
                                i.document.open(),
                                i.document.close(),
                                i.location.hash = "#" + this.fragment
                            }
                            var s = window.addEventListener || function(t, e) {
                                return attachEvent("on" + t, e)
                            }
                            ;
                            if (this._usePushState ? s("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe ? s("hashchange", this.checkUrl, !1) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)),
                            !this.options.silent)
                                return this.loadUrl()
                        },
                        stop: function() {
                            var t = window.removeEventListener || function(t, e) {
                                return detachEvent("on" + t, e)
                            }
                            ;
                            this._usePushState ? t("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe && t("hashchange", this.checkUrl, !1),
                            this.iframe && (document.body.removeChild(this.iframe),
                            this.iframe = null),
                            this._checkUrlInterval && clearInterval(this._checkUrlInterval),
                            P.started = !1
                        },
                        route: function(t, e) {
                            this.handlers.unshift({
                                route: t,
                                callback: e
                            })
                        },
                        checkUrl: function(t) {
                            var e = this.getFragment();
                            if (e === this.fragment && this.iframe && (e = this.getHash(this.iframe.contentWindow)),
                            e === this.fragment)
                                return !1;
                            this.iframe && this.navigate(e),
                            this.loadUrl()
                        },
                        loadUrl: function(t) {
                            return !!this.matchRoot() && (t = this.fragment = this.getFragment(t),
                            n.some(this.handlers, (function(e) {
                                if (e.route.test(t))
                                    return e.callback(t),
                                    !0
                            }
                            )))
                        },
                        navigate: function(t, e) {
                            if (!P.started)
                                return !1;
                            e && !0 !== e || (e = {
                                trigger: !!e
                            }),
                            t = this.getFragment(t || "");
                            var n = this.root;
                            "" !== t && "?" !== t.charAt(0) || (n = n.slice(0, -1) || "/");
                            var r = n + t;
                            if (t = this.decodeFragment(t.replace(R, "")),
                            this.fragment !== t) {
                                if (this.fragment = t,
                                this._usePushState)
                                    this.history[e.replace ? "replaceState" : "pushState"]({}, document.title, r);
                                else {
                                    if (!this._wantsHashChange)
                                        return this.location.assign(r);
                                    if (this._updateHash(this.location, t, e.replace),
                                    this.iframe && t !== this.getHash(this.iframe.contentWindow)) {
                                        var i = this.iframe.contentWindow;
                                        e.replace || (i.document.open(),
                                        i.document.close()),
                                        this._updateHash(i.location, t, e.replace)
                                    }
                                }
                                return e.trigger ? this.loadUrl(t) : void 0
                            }
                        },
                        _updateHash: function(t, e, n) {
                            if (n) {
                                var r = t.href.replace(/(javascript:|#).*$/, "");
                                t.replace(r + "#" + e)
                            } else
                                t.hash = "#" + e
                        }
                    }),
                    e.history = new P;
                    y.extend = b.extend = T.extend = k.extend = P.extend = function(t, e) {
                        var r, i = this;
                        return r = t && n.has(t, "constructor") ? t.constructor : function() {
                            return i.apply(this, arguments)
                        }
                        ,
                        n.extend(r, i, e),
                        r.prototype = n.create(i.prototype, t),
                        r.prototype.constructor = r,
                        r.__super__ = i.prototype,
                        r
                    }
                    ;
                    var B = function() {
                        throw new Error('A "url" property or function must be specified')
                    }
                      , H = function(t, e) {
                        var n = e.error;
                        e.error = function(r) {
                            n && n.call(e.context, t, r, e),
                            t.trigger("error", t, r, e)
                        }
                    };
                    return e
                }(s, n, t, e)
            }
            .apply(e, r)) || (t.exports = i)
        }
        ,
        6808: (t,e,n)=>{
            var r, i, s;
            void 0 === (i = "function" == typeof (r = s = function() {
                function t() {
                    for (var t = 0, e = {}; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n)
                            e[r] = n[r]
                    }
                    return e
                }
                function e(t) {
                    return t.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
                }
                return function n(r) {
                    function i() {}
                    function s(e, n, s) {
                        if ("undefined" != typeof document) {
                            "number" == typeof (s = t({
                                path: "/"
                            }, i.defaults, s)).expires && (s.expires = new Date(1 * new Date + 864e5 * s.expires)),
                            s.expires = s.expires ? s.expires.toUTCString() : "";
                            try {
                                var o = JSON.stringify(n);
                                /^[\{\[]/.test(o) && (n = o)
                            } catch (t) {}
                            n = r.write ? r.write(n, e) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent),
                            e = encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                            var a = "";
                            for (var u in s)
                                s[u] && (a += "; " + u,
                                !0 !== s[u] && (a += "=" + s[u].split(";")[0]));
                            return document.cookie = e + "=" + n + a
                        }
                    }
                    function o(t, n) {
                        if ("undefined" != typeof document) {
                            for (var i = {}, s = document.cookie ? document.cookie.split("; ") : [], o = 0; o < s.length; o++) {
                                var a = s[o].split("=")
                                  , u = a.slice(1).join("=");
                                n || '"' !== u.charAt(0) || (u = u.slice(1, -1));
                                try {
                                    var l = e(a[0]);
                                    if (u = (r.read || r)(u, l) || e(u),
                                    n)
                                        try {
                                            u = JSON.parse(u)
                                        } catch (t) {}
                                    if (i[l] = u,
                                    t === l)
                                        break
                                } catch (t) {}
                            }
                            return t ? i[t] : i
                        }
                    }
                    return i.set = s,
                    i.get = function(t) {
                        return o(t, !1)
                    }
                    ,
                    i.getJSON = function(t) {
                        return o(t, !0)
                    }
                    ,
                    i.remove = function(e, n) {
                        s(e, "", t(n, {
                            expires: -1
                        }))
                    }
                    ,
                    i.defaults = {},
                    i.withConverter = n,
                    i
                }((function() {}
                ))
            }
            ) ? r.call(e, n, e, t) : r) || (t.exports = i),
            t.exports = s()
        }
        ,
        3731: (t,e)=>{
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.default = {
                title: "",
                text: "",
                type: null,
                allowOutsideClick: !1,
                showConfirmButton: !0,
                showCancelButton: !1,
                closeOnConfirm: !0,
                closeOnCancel: !0,
                confirmButtonText: "OK",
                confirmButtonColor: "#8CD4F5",
                cancelButtonText: "Cancel",
                imageUrl: null,
                imageSize: null,
                timer: null,
                customClass: "",
                html: !1,
                animation: !0,
                allowEscapeKey: !0,
                inputType: "text",
                inputPlaceholder: "",
                inputValue: "",
                showLoaderOnConfirm: !1
            },
            t.exports = e.default
        }
        ,
        8198: (t,e,n)=>{
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n(4635)
              , i = (n(5100),
            n(5089))
              , s = function(t, e) {
                var n = !0;
                i.hasClass(t, "show-input") && ((n = t.querySelector("input").value) || (n = "")),
                e.doneFunction(n),
                e.closeOnConfirm && sweetAlert.close(),
                e.showLoaderOnConfirm && sweetAlert.disableButtons()
            }
              , o = function(t, e) {
                var n = String(e.doneFunction).replace(/\s/g, "");
                "function(" === n.substring(0, 9) && ")" !== n.substring(9, 10) && e.doneFunction(!1),
                e.closeOnCancel && sweetAlert.close()
            };
            e.default = {
                handleButton: function(t, e, n) {
                    var a, u, l, c = t || window.event, h = c.target || c.srcElement, f = -1 !== h.className.indexOf("confirm"), d = -1 !== h.className.indexOf("sweet-overlay"), p = i.hasClass(n, "visible"), v = e.doneFunction && "true" === n.getAttribute("data-has-done-function");
                    function m(t) {
                        f && e.confirmButtonColor && (h.style.backgroundColor = t)
                    }
                    switch (f && e.confirmButtonColor && (a = e.confirmButtonColor,
                    u = r.colorLuminance(a, -.04),
                    l = r.colorLuminance(a, -.14)),
                    c.type) {
                    case "mouseover":
                        m(u);
                        break;
                    case "mouseout":
                        m(a);
                        break;
                    case "mousedown":
                        m(l);
                        break;
                    case "mouseup":
                        m(u);
                        break;
                    case "focus":
                        var g = n.querySelector("button.confirm")
                          , y = n.querySelector("button.cancel");
                        f ? y.style.boxShadow = "none" : g.style.boxShadow = "none";
                        break;
                    case "click":
                        var b = n === h
                          , _ = i.isDescendant(n, h);
                        if (!b && !_ && p && !e.allowOutsideClick)
                            break;
                        f && v && p ? s(n, e) : v && p || d ? o(0, e) : i.isDescendant(n, h) && "BUTTON" === h.tagName && sweetAlert.close()
                    }
                },
                handleConfirm: s,
                handleCancel: o
            },
            t.exports = e.default
        }
        ,
        5089: (t,e)=>{
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var n = function(t, e) {
                return new RegExp(" " + e + " ").test(" " + t.className + " ")
            }
              , r = function(t) {
                t.style.opacity = "",
                t.style.display = "block"
            }
              , i = function(t) {
                t.style.opacity = "",
                t.style.display = "none"
            };
            e.hasClass = n,
            e.addClass = function(t, e) {
                n(t, e) || (t.className += " " + e)
            }
            ,
            e.removeClass = function(t, e) {
                var r = " " + t.className.replace(/[\t\r\n]/g, " ") + " ";
                if (n(t, e)) {
                    for (; r.indexOf(" " + e + " ") >= 0; )
                        r = r.replace(" " + e + " ", " ");
                    t.className = r.replace(/^\s+|\s+$/g, "")
                }
            }
            ,
            e.escapeHtml = function(t) {
                var e = document.createElement("div");
                return e.appendChild(document.createTextNode(t)),
                e.innerHTML
            }
            ,
            e._show = r,
            e.show = function(t) {
                if (t && !t.length)
                    return r(t);
                for (var e = 0; e < t.length; ++e)
                    r(t[e])
            }
            ,
            e._hide = i,
            e.hide = function(t) {
                if (t && !t.length)
                    return i(t);
                for (var e = 0; e < t.length; ++e)
                    i(t[e])
            }
            ,
            e.isDescendant = function(t, e) {
                for (var n = e.parentNode; null !== n; ) {
                    if (n === t)
                        return !0;
                    n = n.parentNode
                }
                return !1
            }
            ,
            e.getTopMargin = function(t) {
                t.style.left = "-9999px",
                t.style.display = "block";
                var e, n = t.clientHeight;
                return e = "undefined" != typeof getComputedStyle ? parseInt(getComputedStyle(t).getPropertyValue("padding-top"), 10) : parseInt(t.currentStyle.padding),
                t.style.left = "",
                t.style.display = "none",
                "-" + parseInt((n + e) / 2) + "px"
            }
            ,
            e.fadeIn = function(t, e) {
                if (+t.style.opacity < 1) {
                    e = e || 16,
                    t.style.opacity = 0,
                    t.style.display = "block";
                    var n = +new Date
                      , r = function(t) {
                        function e() {
                            return t.apply(this, arguments)
                        }
                        return e.toString = function() {
                            return t.toString()
                        }
                        ,
                        e
                    }((function() {
                        t.style.opacity = +t.style.opacity + (new Date - n) / 100,
                        n = +new Date,
                        +t.style.opacity < 1 && setTimeout(r, e)
                    }
                    ));
                    r()
                }
                t.style.display = "block"
            }
            ,
            e.fadeOut = function(t, e) {
                e = e || 16,
                t.style.opacity = 1;
                var n = +new Date
                  , r = function(t) {
                    function e() {
                        return t.apply(this, arguments)
                    }
                    return e.toString = function() {
                        return t.toString()
                    }
                    ,
                    e
                }((function() {
                    t.style.opacity = +t.style.opacity - (new Date - n) / 100,
                    n = +new Date,
                    +t.style.opacity > 0 ? setTimeout(r, e) : t.style.display = "none"
                }
                ));
                r()
            }
            ,
            e.fireClick = function(t) {
                if ("function" == typeof MouseEvent) {
                    var e = new MouseEvent("click",{
                        view: window,
                        bubbles: !1,
                        cancelable: !0
                    });
                    t.dispatchEvent(e)
                } else if (document.createEvent) {
                    var n = document.createEvent("MouseEvents");
                    n.initEvent("click", !1, !1),
                    t.dispatchEvent(n)
                } else
                    document.createEventObject ? t.fireEvent("onclick") : "function" == typeof t.onclick && t.onclick()
            }
            ,
            e.stopEventPropagation = function(t) {
                "function" == typeof t.stopPropagation ? (t.stopPropagation(),
                t.preventDefault()) : window.event && window.event.hasOwnProperty("cancelBubble") && (window.event.cancelBubble = !0)
            }
        }
        ,
        7558: (t,e,n)=>{
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n(5089)
              , i = n(5100);
            e.default = function(t, e, n) {
                var s = t || window.event
                  , o = s.keyCode || s.which
                  , a = n.querySelector("button.confirm")
                  , u = n.querySelector("button.cancel")
                  , l = n.querySelectorAll("button[tabindex]");
                if (-1 !== [9, 13, 32, 27].indexOf(o)) {
                    for (var c = s.target || s.srcElement, h = -1, f = 0; f < l.length; f++)
                        if (c === l[f]) {
                            h = f;
                            break
                        }
                    9 === o ? (c = -1 === h ? a : h === l.length - 1 ? l[0] : l[h + 1],
                    r.stopEventPropagation(s),
                    c.focus(),
                    e.confirmButtonColor && i.setFocusStyle(c, e.confirmButtonColor)) : 13 === o ? ("INPUT" === c.tagName && (c = a,
                    a.focus()),
                    c = -1 === h ? a : void 0) : 27 === o && !0 === e.allowEscapeKey ? (c = u,
                    r.fireClick(c, s)) : c = void 0
                }
            }
            ,
            t.exports = e.default
        }
        ,
        5100: (t,e,n)=>{
            "use strict";
            var r = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i = n(4635)
              , s = n(5089)
              , o = r(n(3731))
              , a = r(n(3235))
              , u = function() {
                var t = document.createElement("div");
                for (t.innerHTML = a.default; t.firstChild; )
                    document.body.appendChild(t.firstChild)
            }
              , l = function(t) {
                function e() {
                    return t.apply(this, arguments)
                }
                return e.toString = function() {
                    return t.toString()
                }
                ,
                e
            }((function() {
                var t = document.querySelector(".sweet-alert");
                return t || (u(),
                t = l()),
                t
            }
            ))
              , c = function() {
                var t = l();
                if (t)
                    return t.querySelector("input")
            }
              , h = function() {
                return document.querySelector(".sweet-overlay")
            }
              , f = function(t) {
                if (t && 13 === t.keyCode)
                    return !1;
                var e = l()
                  , n = e.querySelector(".sa-input-error");
                s.removeClass(n, "show");
                var r = e.querySelector(".sa-error-container");
                s.removeClass(r, "show")
            };
            e.sweetAlertInitialize = u,
            e.getModal = l,
            e.getOverlay = h,
            e.getInput = c,
            e.setFocusStyle = function(t, e) {
                var n = i.hexToRgb(e);
                t.style.boxShadow = "0 0 2px rgba(" + n + ", 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)"
            }
            ,
            e.openModal = function(t) {
                var e = l();
                s.fadeIn(h(), 10),
                s.show(e),
                s.addClass(e, "showSweetAlert"),
                s.removeClass(e, "hideSweetAlert"),
                window.previousActiveElement = document.activeElement,
                e.querySelector("button.confirm").focus(),
                setTimeout((function() {
                    s.addClass(e, "visible")
                }
                ), 500);
                var n = e.getAttribute("data-timer");
                if ("null" !== n && "" !== n) {
                    var r = t;
                    e.timeout = setTimeout((function() {
                        r && "true" === e.getAttribute("data-has-done-function") ? r(null) : sweetAlert.close()
                    }
                    ), n)
                }
            }
            ,
            e.resetInput = function() {
                var t = l()
                  , e = c();
                s.removeClass(t, "show-input"),
                e.value = o.default.inputValue,
                e.setAttribute("type", o.default.inputType),
                e.setAttribute("placeholder", o.default.inputPlaceholder),
                f()
            }
            ,
            e.resetInputError = f,
            e.fixVerticalPosition = function() {
                l().style.marginTop = s.getTopMargin(l())
            }
        }
        ,
        3235: (t,e)=>{
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.default = '<div class="sweet-overlay" tabIndex="-1"></div><div class="sweet-alert"><div class="sa-icon sa-error">\n      <span class="sa-x-mark">\n        <span class="sa-line sa-left"></span>\n        <span class="sa-line sa-right"></span>\n      </span>\n    </div><div class="sa-icon sa-warning">\n      <span class="sa-body"></span>\n      <span class="sa-dot"></span>\n    </div><div class="sa-icon sa-info"></div><div class="sa-icon sa-success">\n      <span class="sa-line sa-tip"></span>\n      <span class="sa-line sa-long"></span>\n\n      <div class="sa-placeholder"></div>\n      <div class="sa-fix"></div>\n    </div><div class="sa-icon sa-custom"></div><h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type="text" tabIndex="3" />\n      <div class="sa-input-error"></div>\n    </fieldset><div class="sa-error-container">\n      <div class="icon">!</div>\n      <p>Not valid!</p>\n    </div><div class="sa-button-container">\n      <button class="cancel" tabIndex="2">Cancel</button>\n      <div class="sa-confirm-button-container">\n        <button class="confirm" tabIndex="1">OK</button><div class="la-ball-fall">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div></div>',
            t.exports = e.default
        }
        ,
        331: (t,e,n)=>{
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var r = n(4635)
              , i = n(5100)
              , s = n(5089)
              , o = ["error", "warning", "info", "success", "input", "prompt"];
            e.default = function(t) {
                var e = i.getModal()
                  , n = e.querySelector("h2")
                  , a = e.querySelector("p")
                  , u = e.querySelector("button.cancel")
                  , l = e.querySelector("button.confirm");
                if (n.innerHTML = t.html ? t.title : s.escapeHtml(t.title).split("\n").join("<br>"),
                a.innerHTML = t.html ? t.text : s.escapeHtml(t.text || "").split("\n").join("<br>"),
                t.text && s.show(a),
                t.customClass)
                    s.addClass(e, t.customClass),
                    e.setAttribute("data-custom-class", t.customClass);
                else {
                    var c = e.getAttribute("data-custom-class");
                    s.removeClass(e, c),
                    e.setAttribute("data-custom-class", "")
                }
                if (s.hide(e.querySelectorAll(".sa-icon")),
                t.type && !r.isIE8()) {
                    var h = function() {
                        for (var n = !1, r = 0; r < o.length; r++)
                            if (t.type === o[r]) {
                                n = !0;
                                break
                            }
                        if (!n)
                            return logStr("Unknown alert type: " + t.type),
                            {
                                v: !1
                            };
                        var a = void 0;
                        -1 !== ["success", "error", "warning", "info"].indexOf(t.type) && (a = e.querySelector(".sa-icon.sa-" + t.type),
                        s.show(a));
                        var u = i.getInput();
                        switch (t.type) {
                        case "success":
                            s.addClass(a, "animate"),
                            s.addClass(a.querySelector(".sa-tip"), "animateSuccessTip"),
                            s.addClass(a.querySelector(".sa-long"), "animateSuccessLong");
                            break;
                        case "error":
                            s.addClass(a, "animateErrorIcon"),
                            s.addClass(a.querySelector(".sa-x-mark"), "animateXMark");
                            break;
                        case "warning":
                            s.addClass(a, "pulseWarning"),
                            s.addClass(a.querySelector(".sa-body"), "pulseWarningIns"),
                            s.addClass(a.querySelector(".sa-dot"), "pulseWarningIns");
                            break;
                        case "input":
                        case "prompt":
                            u.setAttribute("type", t.inputType),
                            u.value = t.inputValue,
                            u.setAttribute("placeholder", t.inputPlaceholder),
                            s.addClass(e, "show-input"),
                            setTimeout((function() {
                                u.focus(),
                                u.addEventListener("keyup", swal.resetInputError)
                            }
                            ), 400)
                        }
                    }();
                    if ("object" == typeof h)
                        return h.v
                }
                if (t.imageUrl) {
                    var f = e.querySelector(".sa-icon.sa-custom");
                    f.style.backgroundImage = "url(" + t.imageUrl + ")",
                    s.show(f);
                    var d = 80
                      , p = 80;
                    if (t.imageSize) {
                        var v = t.imageSize.toString().split("x")
                          , m = v[0]
                          , g = v[1];
                        m && g ? (d = m,
                        p = g) : logStr("Parameter imageSize expects value with format WIDTHxHEIGHT, got " + t.imageSize)
                    }
                    f.setAttribute("style", f.getAttribute("style") + "width:" + d + "px; height:" + p + "px")
                }
                e.setAttribute("data-has-cancel-button", t.showCancelButton),
                t.showCancelButton ? u.style.display = "inline-block" : s.hide(u),
                e.setAttribute("data-has-confirm-button", t.showConfirmButton),
                t.showConfirmButton ? l.style.display = "inline-block" : s.hide(l),
                t.cancelButtonText && (u.innerHTML = s.escapeHtml(t.cancelButtonText)),
                t.confirmButtonText && (l.innerHTML = s.escapeHtml(t.confirmButtonText)),
                t.confirmButtonColor && (l.style.backgroundColor = t.confirmButtonColor,
                l.style.borderLeftColor = t.confirmLoadingButtonColor,
                l.style.borderRightColor = t.confirmLoadingButtonColor,
                i.setFocusStyle(l, t.confirmButtonColor)),
                e.setAttribute("data-allow-outside-click", t.allowOutsideClick);
                var y = !!t.doneFunction;
                e.setAttribute("data-has-done-function", y),
                t.animation ? "string" == typeof t.animation ? e.setAttribute("data-animation", t.animation) : e.setAttribute("data-animation", "pop") : e.setAttribute("data-animation", "none"),
                e.setAttribute("data-timer", t.timer)
            }
            ,
            t.exports = e.default
        }
        ,
        4635: (t,e)=>{
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }),
            e.extend = function(t, e) {
                for (var n in e)
                    e.hasOwnProperty(n) && (t[n] = e[n]);
                return t
            }
            ,
            e.hexToRgb = function(t) {
                var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
                return e ? parseInt(e[1], 16) + ", " + parseInt(e[2], 16) + ", " + parseInt(e[3], 16) : null
            }
            ,
            e.isIE8 = function() {
                return window.attachEvent && !window.addEventListener
            }
            ,
            e.logStr = function(t) {
                window.console && window.console.log("SweetAlert: " + t)
            }
            ,
            e.colorLuminance = function(t, e) {
                (t = String(t).replace(/[^0-9a-f]/gi, "")).length < 6 && (t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]),
                e = e || 0;
                var n, r, i = "#";
                for (r = 0; r < 3; r++)
                    n = parseInt(t.substr(2 * r, 2), 16),
                    i += ("00" + (n = Math.round(Math.min(Math.max(0, n + n * e), 255)).toString(16))).substr(n.length);
                return i
            }
        }
        ,
        4193: (t,e,n)=>{
            "use strict";
            var r = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var i, s, o, a, u = n(5089), l = n(4635), c = n(5100), h = n(8198), f = r(n(7558)), d = r(n(3731)), p = r(n(331));
            e.default = o = a = function() {
                var t = arguments[0];
                function e(e) {
                    var n = t;
                    return void 0 === n[e] ? d.default[e] : n[e]
                }
                if (u.addClass(document.body, "stop-scrolling"),
                c.resetInput(),
                void 0 === t)
                    return l.logStr("SweetAlert expects at least 1 attribute!"),
                    !1;
                var n = l.extend({}, d.default);
                switch (typeof t) {
                case "string":
                    n.title = t,
                    n.text = arguments[1] || "",
                    n.type = arguments[2] || "";
                    break;
                case "object":
                    if (void 0 === t.title)
                        return l.logStr('Missing "title" argument!'),
                        !1;
                    for (var r in n.title = t.title,
                    d.default)
                        n[r] = e(r);
                    n.confirmButtonText = n.showCancelButton ? "Confirm" : d.default.confirmButtonText,
                    n.confirmButtonText = e("confirmButtonText"),
                    n.doneFunction = arguments[1] || null;
                    break;
                default:
                    return l.logStr('Unexpected type of argument! Expected "string" or "object", got ' + typeof t),
                    !1
                }
                p.default(n),
                c.fixVerticalPosition(),
                c.openModal(arguments[1]);
                for (var o = c.getModal(), v = o.querySelectorAll("button"), m = ["onclick", "onmouseover", "onmouseout", "onmousedown", "onmouseup", "onfocus"], g = function(t) {
                    return h.handleButton(t, n, o)
                }, y = 0; y < v.length; y++)
                    for (var b = 0; b < m.length; b++) {
                        var _ = m[b];
                        v[y][_] = g
                    }
                c.getOverlay().onclick = g,
                i = window.onkeydown;
                var x = function(t) {
                    return f.default(t, n, o)
                };
                window.onkeydown = x,
                window.onfocus = function() {
                    setTimeout((function() {
                        void 0 !== s && (s.focus(),
                        s = void 0)
                    }
                    ), 0)
                }
                ,
                a.enableButtons()
            }
            ,
            o.setDefaults = a.setDefaults = function(t) {
                if (!t)
                    throw new Error("userParams is required");
                if ("object" != typeof t)
                    throw new Error("userParams has to be a object");
                l.extend(d.default, t)
            }
            ,
            o.close = a.close = function() {
                var t = c.getModal();
                u.fadeOut(c.getOverlay(), 5),
                u.fadeOut(t, 5),
                u.removeClass(t, "showSweetAlert"),
                u.addClass(t, "hideSweetAlert"),
                u.removeClass(t, "visible");
                var e = t.querySelector(".sa-icon.sa-success");
                u.removeClass(e, "animate"),
                u.removeClass(e.querySelector(".sa-tip"), "animateSuccessTip"),
                u.removeClass(e.querySelector(".sa-long"), "animateSuccessLong");
                var n = t.querySelector(".sa-icon.sa-error");
                u.removeClass(n, "animateErrorIcon"),
                u.removeClass(n.querySelector(".sa-x-mark"), "animateXMark");
                var r = t.querySelector(".sa-icon.sa-warning");
                return u.removeClass(r, "pulseWarning"),
                u.removeClass(r.querySelector(".sa-body"), "pulseWarningIns"),
                u.removeClass(r.querySelector(".sa-dot"), "pulseWarningIns"),
                setTimeout((function() {
                    var e = t.getAttribute("data-custom-class");
                    u.removeClass(t, e)
                }
                ), 300),
                u.removeClass(document.body, "stop-scrolling"),
                window.onkeydown = i,
                window.previousActiveElement && window.previousActiveElement.focus(),
                s = void 0,
                clearTimeout(t.timeout),
                !0
            }
            ,
            o.showInputError = a.showInputError = function(t) {
                var e = c.getModal()
                  , n = e.querySelector(".sa-input-error");
                u.addClass(n, "show");
                var r = e.querySelector(".sa-error-container");
                u.addClass(r, "show"),
                r.querySelector("p").innerHTML = t,
                setTimeout((function() {
                    o.enableButtons()
                }
                ), 1),
                e.querySelector("input").focus()
            }
            ,
            o.resetInputError = a.resetInputError = function(t) {
                if (t && 13 === t.keyCode)
                    return !1;
                var e = c.getModal()
                  , n = e.querySelector(".sa-input-error");
                u.removeClass(n, "show");
                var r = e.querySelector(".sa-error-container");
                u.removeClass(r, "show")
            }
            ,
            o.disableButtons = a.disableButtons = function(t) {
                var e = c.getModal()
                  , n = e.querySelector("button.confirm")
                  , r = e.querySelector("button.cancel");
                n.disabled = !0,
                r.disabled = !0
            }
            ,
            o.enableButtons = a.enableButtons = function(t) {
                var e = c.getModal()
                  , n = e.querySelector("button.confirm")
                  , r = e.querySelector("button.cancel");
                n.disabled = !1,
                r.disabled = !1
            }
            ,
            "undefined" != typeof window ? window.sweetAlert = window.swal = o : l.logStr("SweetAlert is a frontend module!"),
            t.exports = e.default
        }
        ,
        3469: function(t, e) {
            var n;
            (function() {
                var r = this
                  , i = r._
                  , s = Array.prototype
                  , o = Object.prototype
                  , a = Function.prototype
                  , u = s.push
                  , l = s.slice
                  , c = o.toString
                  , h = o.hasOwnProperty
                  , f = Array.isArray
                  , d = Object.keys
                  , p = a.bind
                  , v = Object.create
                  , m = function() {}
                  , g = function(t) {
                    return t instanceof g ? t : this instanceof g ? void (this._wrapped = t) : new g(t)
                };
                t.exports && (e = t.exports = g),
                e._ = g,
                g.VERSION = "1.8.3";
                var y = function(t, e, n) {
                    if (void 0 === e)
                        return t;
                    switch (null == n ? 3 : n) {
                    case 1:
                        return function(n) {
                            return t.call(e, n)
                        }
                        ;
                    case 2:
                        return function(n, r) {
                            return t.call(e, n, r)
                        }
                        ;
                    case 3:
                        return function(n, r, i) {
                            return t.call(e, n, r, i)
                        }
                        ;
                    case 4:
                        return function(n, r, i, s) {
                            return t.call(e, n, r, i, s)
                        }
                    }
                    return function() {
                        return t.apply(e, arguments)
                    }
                }
                  , b = function(t, e, n) {
                    return null == t ? g.identity : g.isFunction(t) ? y(t, e, n) : g.isObject(t) ? g.matcher(t) : g.property(t)
                };
                g.iteratee = function(t, e) {
                    return b(t, e, 1 / 0)
                }
                ;
                var _ = function(t, e) {
                    return function(n) {
                        var r = arguments.length;
                        if (r < 2 || null == n)
                            return n;
                        for (var i = 1; i < r; i++)
                            for (var s = arguments[i], o = t(s), a = o.length, u = 0; u < a; u++) {
                                var l = o[u];
                                e && void 0 !== n[l] || (n[l] = s[l])
                            }
                        return n
                    }
                }
                  , x = function(t) {
                    if (!g.isObject(t))
                        return {};
                    if (v)
                        return v(t);
                    m.prototype = t;
                    var e = new m;
                    return m.prototype = null,
                    e
                }
                  , w = function(t) {
                    return function(e) {
                        return null == e ? void 0 : e[t]
                    }
                }
                  , k = Math.pow(2, 53) - 1
                  , S = w("length")
                  , E = function(t) {
                    var e = S(t);
                    return "number" == typeof e && e >= 0 && e <= k
                };
                function C(t) {
                    function e(e, n, r, i, s, o) {
                        for (; s >= 0 && s < o; s += t) {
                            var a = i ? i[s] : s;
                            r = n(r, e[a], a, e)
                        }
                        return r
                    }
                    return function(n, r, i, s) {
                        r = y(r, s, 4);
                        var o = !E(n) && g.keys(n)
                          , a = (o || n).length
                          , u = t > 0 ? 0 : a - 1;
                        return arguments.length < 3 && (i = n[o ? o[u] : u],
                        u += t),
                        e(n, r, i, o, u, a)
                    }
                }
                g.each = g.forEach = function(t, e, n) {
                    var r, i;
                    if (e = y(e, n),
                    E(t))
                        for (r = 0,
                        i = t.length; r < i; r++)
                            e(t[r], r, t);
                    else {
                        var s = g.keys(t);
                        for (r = 0,
                        i = s.length; r < i; r++)
                            e(t[s[r]], s[r], t)
                    }
                    return t
                }
                ,
                g.map = g.collect = function(t, e, n) {
                    e = b(e, n);
                    for (var r = !E(t) && g.keys(t), i = (r || t).length, s = Array(i), o = 0; o < i; o++) {
                        var a = r ? r[o] : o;
                        s[o] = e(t[a], a, t)
                    }
                    return s
                }
                ,
                g.reduce = g.foldl = g.inject = C(1),
                g.reduceRight = g.foldr = C(-1),
                g.find = g.detect = function(t, e, n) {
                    var r;
                    if (void 0 !== (r = E(t) ? g.findIndex(t, e, n) : g.findKey(t, e, n)) && -1 !== r)
                        return t[r]
                }
                ,
                g.filter = g.select = function(t, e, n) {
                    var r = [];
                    return e = b(e, n),
                    g.each(t, (function(t, n, i) {
                        e(t, n, i) && r.push(t)
                    }
                    )),
                    r
                }
                ,
                g.reject = function(t, e, n) {
                    return g.filter(t, g.negate(b(e)), n)
                }
                ,
                g.every = g.all = function(t, e, n) {
                    e = b(e, n);
                    for (var r = !E(t) && g.keys(t), i = (r || t).length, s = 0; s < i; s++) {
                        var o = r ? r[s] : s;
                        if (!e(t[o], o, t))
                            return !1
                    }
                    return !0
                }
                ,
                g.some = g.any = function(t, e, n) {
                    e = b(e, n);
                    for (var r = !E(t) && g.keys(t), i = (r || t).length, s = 0; s < i; s++) {
                        var o = r ? r[s] : s;
                        if (e(t[o], o, t))
                            return !0
                    }
                    return !1
                }
                ,
                g.contains = g.includes = g.include = function(t, e, n, r) {
                    return E(t) || (t = g.values(t)),
                    ("number" != typeof n || r) && (n = 0),
                    g.indexOf(t, e, n) >= 0
                }
                ,
                g.invoke = function(t, e) {
                    var n = l.call(arguments, 2)
                      , r = g.isFunction(e);
                    return g.map(t, (function(t) {
                        var i = r ? e : t[e];
                        return null == i ? i : i.apply(t, n)
                    }
                    ))
                }
                ,
                g.pluck = function(t, e) {
                    return g.map(t, g.property(e))
                }
                ,
                g.where = function(t, e) {
                    return g.filter(t, g.matcher(e))
                }
                ,
                g.findWhere = function(t, e) {
                    return g.find(t, g.matcher(e))
                }
                ,
                g.max = function(t, e, n) {
                    var r, i, s = -1 / 0, o = -1 / 0;
                    if (null == e && null != t)
                        for (var a = 0, u = (t = E(t) ? t : g.values(t)).length; a < u; a++)
                            (r = t[a]) > s && (s = r);
                    else
                        e = b(e, n),
                        g.each(t, (function(t, n, r) {
                            ((i = e(t, n, r)) > o || i === -1 / 0 && s === -1 / 0) && (s = t,
                            o = i)
                        }
                        ));
                    return s
                }
                ,
                g.min = function(t, e, n) {
                    var r, i, s = 1 / 0, o = 1 / 0;
                    if (null == e && null != t)
                        for (var a = 0, u = (t = E(t) ? t : g.values(t)).length; a < u; a++)
                            (r = t[a]) < s && (s = r);
                    else
                        e = b(e, n),
                        g.each(t, (function(t, n, r) {
                            ((i = e(t, n, r)) < o || i === 1 / 0 && s === 1 / 0) && (s = t,
                            o = i)
                        }
                        ));
                    return s
                }
                ,
                g.shuffle = function(t) {
                    for (var e, n = E(t) ? t : g.values(t), r = n.length, i = Array(r), s = 0; s < r; s++)
                        (e = g.random(0, s)) !== s && (i[s] = i[e]),
                        i[e] = n[s];
                    return i
                }
                ,
                g.sample = function(t, e, n) {
                    return null == e || n ? (E(t) || (t = g.values(t)),
                    t[g.random(t.length - 1)]) : g.shuffle(t).slice(0, Math.max(0, e))
                }
                ,
                g.sortBy = function(t, e, n) {
                    return e = b(e, n),
                    g.pluck(g.map(t, (function(t, n, r) {
                        return {
                            value: t,
                            index: n,
                            criteria: e(t, n, r)
                        }
                    }
                    )).sort((function(t, e) {
                        var n = t.criteria
                          , r = e.criteria;
                        if (n !== r) {
                            if (n > r || void 0 === n)
                                return 1;
                            if (n < r || void 0 === r)
                                return -1
                        }
                        return t.index - e.index
                    }
                    )), "value")
                }
                ;
                var T = function(t) {
                    return function(e, n, r) {
                        var i = {};
                        return n = b(n, r),
                        g.each(e, (function(r, s) {
                            var o = n(r, s, e);
                            t(i, r, o)
                        }
                        )),
                        i
                    }
                };
                g.groupBy = T((function(t, e, n) {
                    g.has(t, n) ? t[n].push(e) : t[n] = [e]
                }
                )),
                g.indexBy = T((function(t, e, n) {
                    t[n] = e
                }
                )),
                g.countBy = T((function(t, e, n) {
                    g.has(t, n) ? t[n]++ : t[n] = 1
                }
                )),
                g.toArray = function(t) {
                    return t ? g.isArray(t) ? l.call(t) : E(t) ? g.map(t, g.identity) : g.values(t) : []
                }
                ,
                g.size = function(t) {
                    return null == t ? 0 : E(t) ? t.length : g.keys(t).length
                }
                ,
                g.partition = function(t, e, n) {
                    e = b(e, n);
                    var r = []
                      , i = [];
                    return g.each(t, (function(t, n, s) {
                        (e(t, n, s) ? r : i).push(t)
                    }
                    )),
                    [r, i]
                }
                ,
                g.first = g.head = g.take = function(t, e, n) {
                    if (null != t)
                        return null == e || n ? t[0] : g.initial(t, t.length - e)
                }
                ,
                g.initial = function(t, e, n) {
                    return l.call(t, 0, Math.max(0, t.length - (null == e || n ? 1 : e)))
                }
                ,
                g.last = function(t, e, n) {
                    if (null != t)
                        return null == e || n ? t[t.length - 1] : g.rest(t, Math.max(0, t.length - e))
                }
                ,
                g.rest = g.tail = g.drop = function(t, e, n) {
                    return l.call(t, null == e || n ? 1 : e)
                }
                ,
                g.compact = function(t) {
                    return g.filter(t, g.identity)
                }
                ;
                var O = function(t, e, n, r) {
                    for (var i = [], s = 0, o = r || 0, a = S(t); o < a; o++) {
                        var u = t[o];
                        if (E(u) && (g.isArray(u) || g.isArguments(u))) {
                            e || (u = O(u, e, n));
                            var l = 0
                              , c = u.length;
                            for (i.length += c; l < c; )
                                i[s++] = u[l++]
                        } else
                            n || (i[s++] = u)
                    }
                    return i
                };
                function A(t) {
                    return function(e, n, r) {
                        n = b(n, r);
                        for (var i = S(e), s = t > 0 ? 0 : i - 1; s >= 0 && s < i; s += t)
                            if (n(e[s], s, e))
                                return s;
                        return -1
                    }
                }
                function q(t, e, n) {
                    return function(r, i, s) {
                        var o = 0
                          , a = S(r);
                        if ("number" == typeof s)
                            t > 0 ? o = s >= 0 ? s : Math.max(s + a, o) : a = s >= 0 ? Math.min(s + 1, a) : s + a + 1;
                        else if (n && s && a)
                            return r[s = n(r, i)] === i ? s : -1;
                        if (i != i)
                            return (s = e(l.call(r, o, a), g.isNaN)) >= 0 ? s + o : -1;
                        for (s = t > 0 ? o : a - 1; s >= 0 && s < a; s += t)
                            if (r[s] === i)
                                return s;
                        return -1
                    }
                }
                g.flatten = function(t, e) {
                    return O(t, e, !1)
                }
                ,
                g.without = function(t) {
                    return g.difference(t, l.call(arguments, 1))
                }
                ,
                g.uniq = g.unique = function(t, e, n, r) {
                    g.isBoolean(e) || (r = n,
                    n = e,
                    e = !1),
                    null != n && (n = b(n, r));
                    for (var i = [], s = [], o = 0, a = S(t); o < a; o++) {
                        var u = t[o]
                          , l = n ? n(u, o, t) : u;
                        e ? (o && s === l || i.push(u),
                        s = l) : n ? g.contains(s, l) || (s.push(l),
                        i.push(u)) : g.contains(i, u) || i.push(u)
                    }
                    return i
                }
                ,
                g.union = function() {
                    return g.uniq(O(arguments, !0, !0))
                }
                ,
                g.intersection = function(t) {
                    for (var e = [], n = arguments.length, r = 0, i = S(t); r < i; r++) {
                        var s = t[r];
                        if (!g.contains(e, s)) {
                            for (var o = 1; o < n && g.contains(arguments[o], s); o++)
                                ;
                            o === n && e.push(s)
                        }
                    }
                    return e
                }
                ,
                g.difference = function(t) {
                    var e = O(arguments, !0, !0, 1);
                    return g.filter(t, (function(t) {
                        return !g.contains(e, t)
                    }
                    ))
                }
                ,
                g.zip = function() {
                    return g.unzip(arguments)
                }
                ,
                g.unzip = function(t) {
                    for (var e = t && g.max(t, S).length || 0, n = Array(e), r = 0; r < e; r++)
                        n[r] = g.pluck(t, r);
                    return n
                }
                ,
                g.object = function(t, e) {
                    for (var n = {}, r = 0, i = S(t); r < i; r++)
                        e ? n[t[r]] = e[r] : n[t[r][0]] = t[r][1];
                    return n
                }
                ,
                g.findIndex = A(1),
                g.findLastIndex = A(-1),
                g.sortedIndex = function(t, e, n, r) {
                    for (var i = (n = b(n, r, 1))(e), s = 0, o = S(t); s < o; ) {
                        var a = Math.floor((s + o) / 2);
                        n(t[a]) < i ? s = a + 1 : o = a
                    }
                    return s
                }
                ,
                g.indexOf = q(1, g.findIndex, g.sortedIndex),
                g.lastIndexOf = q(-1, g.findLastIndex),
                g.range = function(t, e, n) {
                    null == e && (e = t || 0,
                    t = 0),
                    n = n || 1;
                    for (var r = Math.max(Math.ceil((e - t) / n), 0), i = Array(r), s = 0; s < r; s++,
                    t += n)
                        i[s] = t;
                    return i
                }
                ;
                var I = function(t, e, n, r, i) {
                    if (!(r instanceof e))
                        return t.apply(n, i);
                    var s = x(t.prototype)
                      , o = t.apply(s, i);
                    return g.isObject(o) ? o : s
                };
                g.bind = function(t, e) {
                    if (p && t.bind === p)
                        return p.apply(t, l.call(arguments, 1));
                    if (!g.isFunction(t))
                        throw new TypeError("Bind must be called on a function");
                    var n = l.call(arguments, 2)
                      , r = function() {
                        return I(t, r, e, this, n.concat(l.call(arguments)))
                    };
                    return r
                }
                ,
                g.partial = function(t) {
                    var e = l.call(arguments, 1)
                      , n = function() {
                        for (var r = 0, i = e.length, s = Array(i), o = 0; o < i; o++)
                            s[o] = e[o] === g ? arguments[r++] : e[o];
                        for (; r < arguments.length; )
                            s.push(arguments[r++]);
                        return I(t, n, this, this, s)
                    };
                    return n
                }
                ,
                g.bindAll = function(t) {
                    var e, n, r = arguments.length;
                    if (r <= 1)
                        throw new Error("bindAll must be passed function names");
                    for (e = 1; e < r; e++)
                        t[n = arguments[e]] = g.bind(t[n], t);
                    return t
                }
                ,
                g.memoize = function(t, e) {
                    var n = function(r) {
                        var i = n.cache
                          , s = "" + (e ? e.apply(this, arguments) : r);
                        return g.has(i, s) || (i[s] = t.apply(this, arguments)),
                        i[s]
                    };
                    return n.cache = {},
                    n
                }
                ,
                g.delay = function(t, e) {
                    var n = l.call(arguments, 2);
                    return setTimeout((function() {
                        return t.apply(null, n)
                    }
                    ), e)
                }
                ,
                g.defer = g.partial(g.delay, g, 1),
                g.throttle = function(t, e, n) {
                    var r, i, s, o = null, a = 0;
                    n || (n = {});
                    var u = function() {
                        a = !1 === n.leading ? 0 : g.now(),
                        o = null,
                        s = t.apply(r, i),
                        o || (r = i = null)
                    };
                    return function() {
                        var l = g.now();
                        a || !1 !== n.leading || (a = l);
                        var c = e - (l - a);
                        return r = this,
                        i = arguments,
                        c <= 0 || c > e ? (o && (clearTimeout(o),
                        o = null),
                        a = l,
                        s = t.apply(r, i),
                        o || (r = i = null)) : o || !1 === n.trailing || (o = setTimeout(u, c)),
                        s
                    }
                }
                ,
                g.debounce = function(t, e, n) {
                    var r, i, s, o, a, u = function() {
                        var l = g.now() - o;
                        l < e && l >= 0 ? r = setTimeout(u, e - l) : (r = null,
                        n || (a = t.apply(s, i),
                        r || (s = i = null)))
                    };
                    return function() {
                        s = this,
                        i = arguments,
                        o = g.now();
                        var l = n && !r;
                        return r || (r = setTimeout(u, e)),
                        l && (a = t.apply(s, i),
                        s = i = null),
                        a
                    }
                }
                ,
                g.wrap = function(t, e) {
                    return g.partial(e, t)
                }
                ,
                g.negate = function(t) {
                    return function() {
                        return !t.apply(this, arguments)
                    }
                }
                ,
                g.compose = function() {
                    var t = arguments
                      , e = t.length - 1;
                    return function() {
                        for (var n = e, r = t[e].apply(this, arguments); n--; )
                            r = t[n].call(this, r);
                        return r
                    }
                }
                ,
                g.after = function(t, e) {
                    return function() {
                        if (--t < 1)
                            return e.apply(this, arguments)
                    }
                }
                ,
                g.before = function(t, e) {
                    var n;
                    return function() {
                        return --t > 0 && (n = e.apply(this, arguments)),
                        t <= 1 && (e = null),
                        n
                    }
                }
                ,
                g.once = g.partial(g.before, 2);
                var P = !{
                    toString: null
                }.propertyIsEnumerable("toString")
                  , j = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
                function M(t, e) {
                    var n = j.length
                      , r = t.constructor
                      , i = g.isFunction(r) && r.prototype || o
                      , s = "constructor";
                    for (g.has(t, s) && !g.contains(e, s) && e.push(s); n--; )
                        (s = j[n])in t && t[s] !== i[s] && !g.contains(e, s) && e.push(s)
                }
                g.keys = function(t) {
                    if (!g.isObject(t))
                        return [];
                    if (d)
                        return d(t);
                    var e = [];
                    for (var n in t)
                        g.has(t, n) && e.push(n);
                    return P && M(t, e),
                    e
                }
                ,
                g.allKeys = function(t) {
                    if (!g.isObject(t))
                        return [];
                    var e = [];
                    for (var n in t)
                        e.push(n);
                    return P && M(t, e),
                    e
                }
                ,
                g.values = function(t) {
                    for (var e = g.keys(t), n = e.length, r = Array(n), i = 0; i < n; i++)
                        r[i] = t[e[i]];
                    return r
                }
                ,
                g.mapObject = function(t, e, n) {
                    e = b(e, n);
                    for (var r, i = g.keys(t), s = i.length, o = {}, a = 0; a < s; a++)
                        o[r = i[a]] = e(t[r], r, t);
                    return o
                }
                ,
                g.pairs = function(t) {
                    for (var e = g.keys(t), n = e.length, r = Array(n), i = 0; i < n; i++)
                        r[i] = [e[i], t[e[i]]];
                    return r
                }
                ,
                g.invert = function(t) {
                    for (var e = {}, n = g.keys(t), r = 0, i = n.length; r < i; r++)
                        e[t[n[r]]] = n[r];
                    return e
                }
                ,
                g.functions = g.methods = function(t) {
                    var e = [];
                    for (var n in t)
                        g.isFunction(t[n]) && e.push(n);
                    return e.sort()
                }
                ,
                g.extend = _(g.allKeys),
                g.extendOwn = g.assign = _(g.keys),
                g.findKey = function(t, e, n) {
                    e = b(e, n);
                    for (var r, i = g.keys(t), s = 0, o = i.length; s < o; s++)
                        if (e(t[r = i[s]], r, t))
                            return r
                }
                ,
                g.pick = function(t, e, n) {
                    var r, i, s = {}, o = t;
                    if (null == o)
                        return s;
                    g.isFunction(e) ? (i = g.allKeys(o),
                    r = y(e, n)) : (i = O(arguments, !1, !1, 1),
                    r = function(t, e, n) {
                        return e in n
                    }
                    ,
                    o = Object(o));
                    for (var a = 0, u = i.length; a < u; a++) {
                        var l = i[a]
                          , c = o[l];
                        r(c, l, o) && (s[l] = c)
                    }
                    return s
                }
                ,
                g.omit = function(t, e, n) {
                    if (g.isFunction(e))
                        e = g.negate(e);
                    else {
                        var r = g.map(O(arguments, !1, !1, 1), String);
                        e = function(t, e) {
                            return !g.contains(r, e)
                        }
                    }
                    return g.pick(t, e, n)
                }
                ,
                g.defaults = _(g.allKeys, !0),
                g.create = function(t, e) {
                    var n = x(t);
                    return e && g.extendOwn(n, e),
                    n
                }
                ,
                g.clone = function(t) {
                    return g.isObject(t) ? g.isArray(t) ? t.slice() : g.extend({}, t) : t
                }
                ,
                g.tap = function(t, e) {
                    return e(t),
                    t
                }
                ,
                g.isMatch = function(t, e) {
                    var n = g.keys(e)
                      , r = n.length;
                    if (null == t)
                        return !r;
                    for (var i = Object(t), s = 0; s < r; s++) {
                        var o = n[s];
                        if (e[o] !== i[o] || !(o in i))
                            return !1
                    }
                    return !0
                }
                ;
                var R = function(t, e, n, r) {
                    if (t === e)
                        return 0 !== t || 1 / t == 1 / e;
                    if (null == t || null == e)
                        return t === e;
                    t instanceof g && (t = t._wrapped),
                    e instanceof g && (e = e._wrapped);
                    var i = c.call(t);
                    if (i !== c.call(e))
                        return !1;
                    switch (i) {
                    case "[object RegExp]":
                    case "[object String]":
                        return "" + t == "" + e;
                    case "[object Number]":
                        return +t != +t ? +e != +e : 0 == +t ? 1 / +t == 1 / e : +t == +e;
                    case "[object Date]":
                    case "[object Boolean]":
                        return +t == +e
                    }
                    var s = "[object Array]" === i;
                    if (!s) {
                        if ("object" != typeof t || "object" != typeof e)
                            return !1;
                        var o = t.constructor
                          , a = e.constructor;
                        if (o !== a && !(g.isFunction(o) && o instanceof o && g.isFunction(a) && a instanceof a) && "constructor"in t && "constructor"in e)
                            return !1
                    }
                    r = r || [];
                    for (var u = (n = n || []).length; u--; )
                        if (n[u] === t)
                            return r[u] === e;
                    if (n.push(t),
                    r.push(e),
                    s) {
                        if ((u = t.length) !== e.length)
                            return !1;
                        for (; u--; )
                            if (!R(t[u], e[u], n, r))
                                return !1
                    } else {
                        var l, h = g.keys(t);
                        if (u = h.length,
                        g.keys(e).length !== u)
                            return !1;
                        for (; u--; )
                            if (l = h[u],
                            !g.has(e, l) || !R(t[l], e[l], n, r))
                                return !1
                    }
                    return n.pop(),
                    r.pop(),
                    !0
                };
                g.isEqual = function(t, e) {
                    return R(t, e)
                }
                ,
                g.isEmpty = function(t) {
                    return null == t || (E(t) && (g.isArray(t) || g.isString(t) || g.isArguments(t)) ? 0 === t.length : 0 === g.keys(t).length)
                }
                ,
                g.isElement = function(t) {
                    return !(!t || 1 !== t.nodeType)
                }
                ,
                g.isArray = f || function(t) {
                    return "[object Array]" === c.call(t)
                }
                ,
                g.isObject = function(t) {
                    var e = typeof t;
                    return "function" === e || "object" === e && !!t
                }
                ,
                g.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], (function(t) {
                    g["is" + t] = function(e) {
                        return c.call(e) === "[object " + t + "]"
                    }
                }
                )),
                g.isArguments(arguments) || (g.isArguments = function(t) {
                    return g.has(t, "callee")
                }
                ),
                "object" != typeof Int8Array && (g.isFunction = function(t) {
                    return "function" == typeof t || !1
                }
                ),
                g.isFinite = function(t) {
                    return isFinite(t) && !isNaN(parseFloat(t))
                }
                ,
                g.isNaN = function(t) {
                    return g.isNumber(t) && t !== +t
                }
                ,
                g.isBoolean = function(t) {
                    return !0 === t || !1 === t || "[object Boolean]" === c.call(t)
                }
                ,
                g.isNull = function(t) {
                    return null === t
                }
                ,
                g.isUndefined = function(t) {
                    return void 0 === t
                }
                ,
                g.has = function(t, e) {
                    return null != t && h.call(t, e)
                }
                ,
                g.noConflict = function() {
                    return r._ = i,
                    this
                }
                ,
                g.identity = function(t) {
                    return t
                }
                ,
                g.constant = function(t) {
                    return function() {
                        return t
                    }
                }
                ,
                g.noop = function() {}
                ,
                g.property = w,
                g.propertyOf = function(t) {
                    return null == t ? function() {}
                    : function(e) {
                        return t[e]
                    }
                }
                ,
                g.matcher = g.matches = function(t) {
                    return t = g.extendOwn({}, t),
                    function(e) {
                        return g.isMatch(e, t)
                    }
                }
                ,
                g.times = function(t, e, n) {
                    var r = Array(Math.max(0, t));
                    e = y(e, n, 1);
                    for (var i = 0; i < t; i++)
                        r[i] = e(i);
                    return r
                }
                ,
                g.random = function(t, e) {
                    return null == e && (e = t,
                    t = 0),
                    t + Math.floor(Math.random() * (e - t + 1))
                }
                ,
                g.now = Date.now || function() {
                    return (new Date).getTime()
                }
                ;
                var B = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;"
                }
                  , H = g.invert(B)
                  , N = function(t) {
                    var e = function(e) {
                        return t[e]
                    }
                      , n = "(?:" + g.keys(t).join("|") + ")"
                      , r = RegExp(n)
                      , i = RegExp(n, "g");
                    return function(t) {
                        return t = null == t ? "" : "" + t,
                        r.test(t) ? t.replace(i, e) : t
                    }
                };
                g.escape = N(B),
                g.unescape = N(H),
                g.result = function(t, e, n) {
                    var r = null == t ? void 0 : t[e];
                    return void 0 === r && (r = n),
                    g.isFunction(r) ? r.call(t) : r
                }
                ;
                var L = 0;
                g.uniqueId = function(t) {
                    var e = ++L + "";
                    return t ? t + e : e
                }
                ,
                g.templateSettings = {
                    evaluate: /<%([\s\S]+?)%>/g,
                    interpolate: /<%=([\s\S]+?)%>/g,
                    escape: /<%-([\s\S]+?)%>/g
                };
                var F = /(.)^/
                  , U = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                }
                  , D = /\\|'|\r|\n|\u2028|\u2029/g
                  , $ = function(t) {
                    return "\\" + U[t]
                };
                g.template = function(t, e, n) {
                    !e && n && (e = n),
                    e = g.defaults({}, e, g.templateSettings);
                    var r = RegExp([(e.escape || F).source, (e.interpolate || F).source, (e.evaluate || F).source].join("|") + "|$", "g")
                      , i = 0
                      , s = "__p+='";
                    t.replace(r, (function(e, n, r, o, a) {
                        return s += t.slice(i, a).replace(D, $),
                        i = a + e.length,
                        n ? s += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? s += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : o && (s += "';\n" + o + "\n__p+='"),
                        e
                    }
                    )),
                    s += "';\n",
                    e.variable || (s = "with(obj||{}){\n" + s + "}\n"),
                    s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
                    try {
                        var o = new Function(e.variable || "obj","_",s)
                    } catch (t) {
                        throw t.source = s,
                        t
                    }
                    var a = function(t) {
                        return o.call(this, t, g)
                    }
                      , u = e.variable || "obj";
                    return a.source = "function(" + u + "){\n" + s + "}",
                    a
                }
                ,
                g.chain = function(t) {
                    var e = g(t);
                    return e._chain = !0,
                    e
                }
                ;
                var z = function(t, e) {
                    return t._chain ? g(e).chain() : e
                };
                g.mixin = function(t) {
                    g.each(g.functions(t), (function(e) {
                        var n = g[e] = t[e];
                        g.prototype[e] = function() {
                            var t = [this._wrapped];
                            return u.apply(t, arguments),
                            z(this, n.apply(g, t))
                        }
                    }
                    ))
                }
                ,
                g.mixin(g),
                g.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], (function(t) {
                    var e = s[t];
                    g.prototype[t] = function() {
                        var n = this._wrapped;
                        return e.apply(n, arguments),
                        "shift" !== t && "splice" !== t || 0 !== n.length || delete n[0],
                        z(this, n)
                    }
                }
                )),
                g.each(["concat", "join", "slice"], (function(t) {
                    var e = s[t];
                    g.prototype[t] = function() {
                        return z(this, e.apply(this._wrapped, arguments))
                    }
                }
                )),
                g.prototype.value = function() {
                    return this._wrapped
                }
                ,
                g.prototype.valueOf = g.prototype.toJSON = g.prototype.value,
                g.prototype.toString = function() {
                    return "" + this._wrapped
                }
                ,
                void 0 === (n = function() {
                    return g
                }
                .apply(e, [])) || (t.exports = n)
            }
            ).call(this)
        },
        3609: t=>{
            "use strict";
            t.exports = jQuery
        }
    }
      , e = {};
    function n(r) {
        if (e[r])
            return e[r].exports;
        var i = e[r] = {
            exports: {}
        };
        return t[r].call(i.exports, i, i.exports, n),
        i.exports
    }
    n.n = t=>{
        var e = t && t.__esModule ? ()=>t.default : ()=>t;
        return n.d(e, {
            a: e
        }),
        e
    }
    ,
    n.d = (t,e)=>{
        for (var r in e)
            n.o(e, r) && !n.o(t, r) && Object.defineProperty(t, r, {
                enumerable: !0,
                get: e[r]
            })
    }
    ,
    n.g = function() {
        if ("object" == typeof globalThis)
            return globalThis;
        try {
            return this || new Function("return this")()
        } catch (t) {
            if ("object" == typeof window)
                return window
        }
    }(),
    n.o = (t,e)=>Object.prototype.hasOwnProperty.call(t, e),
    (()=>{
        "use strict";
        var t = n(6808)
          , e = n.n(t)
          , r = n(4744)
          , i = n.n(r)
          , s = n(7042)
          , o = n.n(s);
        function a(t, e) {
            var n;
            if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                if (Array.isArray(t) || (n = function(t, e) {
                    if (t) {
                        if ("string" == typeof t)
                            return u(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name),
                        "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(t, e) : void 0
                    }
                }(t)) || e && t && "number" == typeof t.length) {
                    n && (t = n);
                    var r = 0
                      , i = function() {};
                    return {
                        s: i,
                        n: function() {
                            return r >= t.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: t[r++]
                            }
                        },
                        e: function(t) {
                            throw t
                        },
                        f: i
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var s, o = !0, a = !1;
            return {
                s: function() {
                    n = t[Symbol.iterator]()
                },
                n: function() {
                    var t = n.next();
                    return o = t.done,
                    t
                },
                e: function(t) {
                    a = !0,
                    s = t
                },
                f: function() {
                    try {
                        o || null == n.return || n.return()
                    } finally {
                        if (a)
                            throw s
                    }
                }
            }
        }
        function u(t, e) {
            (null == e || e > t.length) && (e = t.length);
            for (var n = 0, r = new Array(e); n < e; n++)
                r[n] = t[n];
            return r
        }
        document.addEventListener("DOMContentLoaded", (function() {
            var t = "fs-button--disabled"
              , n = document.querySelector(".js-downloadButtons")
              , r = document.querySelectorAll(".fs-button--download")
              , s = document.getElementById("agree-to-license");
            function u() {
                var e, o = s.checked || i().isSuperAdmin(), u = a(r);
                try {
                    for (u.s(); !(e = u.n()).done; ) {
                        var l = e.value;
                        l.classList.toggle(t, !o),
                        o && l.setAttribute("href", l.dataset.href)
                    }
                } catch (t) {
                    u.e(t)
                } finally {
                    u.f()
                }
                n && (n.style.opacity = o ? 1 : .5)
            }
            s && (s.addEventListener("change", u),
            i().isSuperAdmin() ? s.setAttribute("checked", 1) : s.removeAttribute("checked")),
            u();
            var l, c = a(r);
            try {
                var h = function() {
                    var n = l.value;
                    n.addEventListener("click", (function() {
                        n.classList.contains(t) || function(t) {
                            var n = "fileDownload"
                              , r = document.querySelector(".fs-download__inProgress").innerHTML;
                            e().remove(n, {
                                path: "/"
                            }),
                            o().progress(r, {
                                title: "Preparing your Download …"
                            });
                            var i = setInterval((function() {
                                e().get(n) && (o().close(),
                                clearInterval(i),
                                e().remove(n, {
                                    path: "/"
                                }))
                            }
                            ), 100)
                        }()
                    }
                    ))
                };
                for (c.s(); !(l = c.n()).done; )
                    h()
            } catch (t) {
                c.e(t)
            } finally {
                c.f()
            }
        }
        ))
    }
    )()
}
)();
