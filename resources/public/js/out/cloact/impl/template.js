// Compiled by ClojureScript 0.0-2138
goog.provide('cloact.impl.template');
goog.require('cljs.core');
goog.require('cloact.debug');
goog.require('cloact.impl.util');
goog.require('cloact.impl.util');
goog.require('cloact.impl.reactimport');
goog.require('cloact.impl.reactimport');
goog.require('clojure.string');
goog.require('clojure.string');
cloact.impl.template.React = cloact.impl.reactimport.React;
cloact.impl.template.cljs_props = "cljsProps";
cloact.impl.template.cljs_children = "cljsChildren";
cloact.impl.template.isClient = !(((function (){try{return window.document;
}catch (e8927){if((e8927 instanceof Object))
{var e = e8927;return null;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8927;
} else
{return null;
}
}
}})() == null));
cloact.impl.template.dash_to_camel = (function dash_to_camel(dashed){var words = clojure.string.split.call(null,cljs.core.name.call(null,dashed),/-/);return cljs.core.apply.call(null,cljs.core.str,cljs.core.first.call(null,words),cljs.core.map.call(null,clojure.string.capitalize,cljs.core.rest.call(null,words)));
});
cloact.impl.template.attr_aliases = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",1108647146),"className",new cljs.core.Keyword(null,"for","for",1014005819),"htmlFor",new cljs.core.Keyword(null,"charset","charset",1752978622),"charSet"], null);
cloact.impl.template.undash_prop_name = (function undash_prop_name(n){var or__3394__auto__ = cloact.impl.template.attr_aliases.call(null,n);if(cljs.core.truth_(or__3394__auto__))
{return or__3394__auto__;
} else
{return cloact.impl.template.dash_to_camel.call(null,n);
}
});
cloact.impl.template.cached_prop_name = cljs.core.memoize.call(null,cloact.impl.template.undash_prop_name);
cloact.impl.template.cached_style_name = cljs.core.memoize.call(null,cloact.impl.template.dash_to_camel);
cloact.impl.template.convert_prop_value = (function convert_prop_value(val){if(cljs.core.map_QMARK_.call(null,val))
{var obj = (function (){var obj8937 = {};return obj8937;
})();var seq__8938_8944 = cljs.core.seq.call(null,val);var chunk__8939_8945 = null;var count__8940_8946 = 0;var i__8941_8947 = 0;while(true){
if((i__8941_8947 < count__8940_8946))
{var vec__8942_8948 = cljs.core._nth.call(null,chunk__8939_8945,i__8941_8947);var k_8949 = cljs.core.nth.call(null,vec__8942_8948,0,null);var v_8950 = cljs.core.nth.call(null,vec__8942_8948,1,null);(obj[cloact.impl.template.cached_style_name.call(null,k_8949)] = cljs.core.clj__GT_js.call(null,v_8950));
{
var G__8951 = seq__8938_8944;
var G__8952 = chunk__8939_8945;
var G__8953 = count__8940_8946;
var G__8954 = (i__8941_8947 + 1);
seq__8938_8944 = G__8951;
chunk__8939_8945 = G__8952;
count__8940_8946 = G__8953;
i__8941_8947 = G__8954;
continue;
}
} else
{var temp__4092__auto___8955 = cljs.core.seq.call(null,seq__8938_8944);if(temp__4092__auto___8955)
{var seq__8938_8956__$1 = temp__4092__auto___8955;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8938_8956__$1))
{var c__4136__auto___8957 = cljs.core.chunk_first.call(null,seq__8938_8956__$1);{
var G__8958 = cljs.core.chunk_rest.call(null,seq__8938_8956__$1);
var G__8959 = c__4136__auto___8957;
var G__8960 = cljs.core.count.call(null,c__4136__auto___8957);
var G__8961 = 0;
seq__8938_8944 = G__8958;
chunk__8939_8945 = G__8959;
count__8940_8946 = G__8960;
i__8941_8947 = G__8961;
continue;
}
} else
{var vec__8943_8962 = cljs.core.first.call(null,seq__8938_8956__$1);var k_8963 = cljs.core.nth.call(null,vec__8943_8962,0,null);var v_8964 = cljs.core.nth.call(null,vec__8943_8962,1,null);(obj[cloact.impl.template.cached_style_name.call(null,k_8963)] = cljs.core.clj__GT_js.call(null,v_8964));
{
var G__8965 = cljs.core.next.call(null,seq__8938_8956__$1);
var G__8966 = null;
var G__8967 = 0;
var G__8968 = 0;
seq__8938_8944 = G__8965;
chunk__8939_8945 = G__8966;
count__8940_8946 = G__8967;
i__8941_8947 = G__8968;
continue;
}
}
} else
{}
}
break;
}
return obj;
} else
{if(cljs.core.ifn_QMARK_.call(null,val))
{return (function() { 
var G__8969__delegate = function (args){return cljs.core.apply.call(null,val,args);
};
var G__8969 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__8969__delegate.call(this,args);};
G__8969.cljs$lang$maxFixedArity = 0;
G__8969.cljs$lang$applyTo = (function (arglist__8970){
var args = cljs.core.seq(arglist__8970);
return G__8969__delegate(args);
});
G__8969.cljs$core$IFn$_invoke$arity$variadic = G__8969__delegate;
return G__8969;
})()
;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.clj__GT_js.call(null,val);
} else
{return null;
}
}
}
});
cloact.impl.template.set_id_class = (function set_id_class(props,p__8971){var vec__8973 = p__8971;var id = cljs.core.nth.call(null,vec__8973,0,null);var class$ = cljs.core.nth.call(null,vec__8973,1,null);(props["id"] = id);
if(cljs.core.truth_(class$))
{return (props["className"] = (function (){var temp__4090__auto__ = (props["className"]);if(cljs.core.truth_(temp__4090__auto__))
{var old = temp__4090__auto__;return [cljs.core.str(class$),cljs.core.str(" "),cljs.core.str(old)].join('');
} else
{return class$;
}
})());
} else
{return null;
}
});
cloact.impl.template.convert_props = (function convert_props(props,id_class){var is_empty = cljs.core.empty_QMARK_.call(null,props);if((is_empty) && ((id_class == null)))
{return null;
} else
{if((cljs.core.type.call(null,props) === Object))
{return props;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var objprops = (function (){var obj8983 = {};return obj8983;
})();if(is_empty)
{} else
{var seq__8984_8990 = cljs.core.seq.call(null,props);var chunk__8985_8991 = null;var count__8986_8992 = 0;var i__8987_8993 = 0;while(true){
if((i__8987_8993 < count__8986_8992))
{var vec__8988_8994 = cljs.core._nth.call(null,chunk__8985_8991,i__8987_8993);var k_8995 = cljs.core.nth.call(null,vec__8988_8994,0,null);var v_8996 = cljs.core.nth.call(null,vec__8988_8994,1,null);(objprops[cloact.impl.template.cached_prop_name.call(null,k_8995)] = cloact.impl.template.convert_prop_value.call(null,v_8996));
{
var G__8997 = seq__8984_8990;
var G__8998 = chunk__8985_8991;
var G__8999 = count__8986_8992;
var G__9000 = (i__8987_8993 + 1);
seq__8984_8990 = G__8997;
chunk__8985_8991 = G__8998;
count__8986_8992 = G__8999;
i__8987_8993 = G__9000;
continue;
}
} else
{var temp__4092__auto___9001 = cljs.core.seq.call(null,seq__8984_8990);if(temp__4092__auto___9001)
{var seq__8984_9002__$1 = temp__4092__auto___9001;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8984_9002__$1))
{var c__4136__auto___9003 = cljs.core.chunk_first.call(null,seq__8984_9002__$1);{
var G__9004 = cljs.core.chunk_rest.call(null,seq__8984_9002__$1);
var G__9005 = c__4136__auto___9003;
var G__9006 = cljs.core.count.call(null,c__4136__auto___9003);
var G__9007 = 0;
seq__8984_8990 = G__9004;
chunk__8985_8991 = G__9005;
count__8986_8992 = G__9006;
i__8987_8993 = G__9007;
continue;
}
} else
{var vec__8989_9008 = cljs.core.first.call(null,seq__8984_9002__$1);var k_9009 = cljs.core.nth.call(null,vec__8989_9008,0,null);var v_9010 = cljs.core.nth.call(null,vec__8989_9008,1,null);(objprops[cloact.impl.template.cached_prop_name.call(null,k_9009)] = cloact.impl.template.convert_prop_value.call(null,v_9010));
{
var G__9011 = cljs.core.next.call(null,seq__8984_9002__$1);
var G__9012 = null;
var G__9013 = 0;
var G__9014 = 0;
seq__8984_8990 = G__9011;
chunk__8985_8991 = G__9012;
count__8986_8992 = G__9013;
i__8987_8993 = G__9014;
continue;
}
}
} else
{}
}
break;
}
}
if((id_class == null))
{} else
{cloact.impl.template.set_id_class.call(null,objprops,id_class);
}
return objprops;
} else
{return null;
}
}
}
});
cloact.impl.template.map_into_array = (function map_into_array(f,coll){var a = cljs.core.into_array.call(null,coll);var n__4236__auto___9015 = a.length;var i_9016 = 0;while(true){
if((i_9016 < n__4236__auto___9015))
{(a[i_9016] = f.call(null,(a[i_9016])));
{
var G__9017 = (i_9016 + 1);
i_9016 = G__9017;
continue;
}
} else
{}
break;
}
return a;
});
cloact.impl.template.wrapped_render = (function wrapped_render(this$,comp,id_class){var inprops = (this$["props"]);var props = (inprops[cloact.impl.template.cljs_props]);var hasprops = ((props == null)) || (cljs.core.map_QMARK_.call(null,props));var jsargs = cloact.impl.template.map_into_array.call(null,cloact.impl.template.as_component,(inprops[cloact.impl.template.cljs_children]));jsargs.unshift(cloact.impl.template.convert_props.call(null,props,id_class));
return comp.apply(null,jsargs);
});
cloact.impl.template.wrapped_should_update = (function wrapped_should_update(C,nextprops,nextstate){var inprops = (C["props"]);var p1 = (inprops[cloact.impl.template.cljs_props]);var c1 = (inprops[cloact.impl.template.cljs_children]);var p2 = (nextprops[cloact.impl.template.cljs_props]);var c2 = (nextprops[cloact.impl.template.cljs_children]);return cljs.core.not.call(null,cloact.impl.util.equal_args.call(null,p1,c1,p2,c2));
});
cloact.impl.template.wrap_component = (function wrap_component(comp,extras){return cloact.impl.template.React.createClass((function (){var obj9023 = {"render":(function (){var C = this;return cloact.impl.template.wrapped_render.call(null,C,comp,extras);
}),"shouldComponentUpdate":(function (p1__9018_SHARP_,p2__9019_SHARP_){var C = this;return cloact.impl.template.wrapped_should_update.call(null,C,p1__9018_SHARP_,p2__9019_SHARP_);
})};return obj9023;
})());
});
/**
* Regular expression that parses a CSS-style id and class
* from a tag name.
*/
cloact.impl.template.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
cloact.impl.template.DOM = (cloact.impl.template.React["DOM"]);
cloact.impl.template.parse_tag = (function parse_tag(tag){var vec__9025 = cljs.core.next.call(null,cljs.core.re_matches.call(null,cloact.impl.template.re_tag,cljs.core.name.call(null,tag)));var tag__$1 = cljs.core.nth.call(null,vec__9025,0,null);var id = cljs.core.nth.call(null,vec__9025,1,null);var class$ = cljs.core.nth.call(null,vec__9025,2,null);var comp = (cloact.impl.template.DOM[tag__$1]);var class_SINGLEQUOTE_ = (cljs.core.truth_(class$)?clojure.string.replace.call(null,class$,/\./," "):null);if(cljs.core.truth_(comp))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Unknown tag: "),cljs.core.str(tag__$1)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"comp","comp",-1637472056,null)))].join('')));
}
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,(cljs.core.truth_((function (){var or__3394__auto__ = id;if(cljs.core.truth_(or__3394__auto__))
{return or__3394__auto__;
} else
{return class_SINGLEQUOTE_;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,class_SINGLEQUOTE_], null):null)], null);
});
cloact.impl.template.get_wrapper = (function get_wrapper(tag){var vec__9027 = cloact.impl.template.parse_tag.call(null,tag);var comp = cljs.core.nth.call(null,vec__9027,0,null);var id_class = cljs.core.nth.call(null,vec__9027,1,null);return cloact.impl.template.wrap_component.call(null,comp,id_class);
});
cloact.impl.template.cached_wrapper = cljs.core.memoize.call(null,cloact.impl.template.get_wrapper);
cloact.impl.template.fn_to_class = (function fn_to_class(f){var spec = cljs.core.meta.call(null,f);var withrender = cljs.core.merge.call(null,spec,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",4374279432),f], null));var res = cloact.core.create_class.call(null,withrender);var wrapf = res.cljsReactClass;f.cljsReactClass = wrapf;
return wrapf;
});
cloact.impl.template.as_class = (function as_class(tag){if((tag instanceof cljs.core.Keyword))
{return cloact.impl.template.cached_wrapper.call(null,tag);
} else
{if(cljs.core.fn_QMARK_.call(null,tag))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",-1640430032,null),new cljs.core.Symbol(null,"tag","tag",-1640416941,null))))].join('')));
}
var cached_class = tag.cljsReactClass;if(!((cached_class == null)))
{return cached_class;
} else
{if(cljs.core.truth_(cloact.impl.template.React.isValidClass(tag)))
{return tag.cljsReactClass = cloact.impl.template.wrap_component.call(null,tag,null);
} else
{return cloact.impl.template.fn_to_class.call(null,tag);
}
}
}
});
cloact.impl.template.vec_to_comp = (function vec_to_comp(v){if((cljs.core.count.call(null,v) > 0))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-1637084636,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"v","v",-1640531409,null)))))].join('')));
}
var vec__9031 = v;var tag = cljs.core.nth.call(null,vec__9031,0,null);var props = cljs.core.nth.call(null,vec__9031,1,null);var hasmap = cljs.core.map_QMARK_.call(null,props);var first_child = (((hasmap) || ((props == null)))?2:1);var c = cloact.impl.template.as_class.call(null,tag);var jsprops = (function (){var obj9033 = {};(obj9033[cloact.impl.template.cljs_props] = ((hasmap)?props:null));
(obj9033[cloact.impl.template.cljs_children] = (((cljs.core.count.call(null,v) > first_child))?cljs.core.subvec.call(null,v,first_child):null));
return obj9033;
})();if(hasmap)
{var key_9034 = new cljs.core.Keyword(null,"key","key",1014010321).cljs$core$IFn$_invoke$arity$1(props);if((key_9034 == null))
{} else
{(jsprops["key"] = key_9034);
}
} else
{}
return c.call(null,jsprops);
});
cloact.impl.template.as_component = (function as_component(x){if(cljs.core.vector_QMARK_.call(null,x))
{return cloact.impl.template.vec_to_comp.call(null,x);
} else
{if(cljs.core.seq_QMARK_.call(null,x))
{return cloact.impl.template.map_into_array.call(null,as_component,x);
} else
{if(true)
{return x;
} else
{return null;
}
}
}
});

//# sourceMappingURL=template.js.map