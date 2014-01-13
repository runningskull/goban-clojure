// Compiled by ClojureScript 0.0-2138
goog.provide('cloact.impl.util');
goog.require('cljs.core');
goog.require('cloact.debug');

/**
* @constructor
*/
cloact.impl.util.partial_ifn = (function (f,args,p){
this.f = f;
this.args = args;
this.p = p;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 6291457;
})
cloact.impl.util.partial_ifn.cljs$lang$type = true;
cloact.impl.util.partial_ifn.cljs$lang$ctorStr = "cloact.impl.util/partial-ifn";
cloact.impl.util.partial_ifn.cljs$lang$ctorPrWriter = (function (this__3956__auto__,writer__3957__auto__,opt__3958__auto__){return cljs.core._write.call(null,writer__3957__auto__,"cloact.impl.util/partial-ifn");
});
cloact.impl.util.partial_ifn.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.hash.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.f,self__.args], null));
});
cloact.impl.util.partial_ifn.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){var self__ = this;
var ___$1 = this;return (cljs.core._EQ_.call(null,self__.f,other.f)) && (cljs.core._EQ_.call(null,self__.args,other.args));
});
cloact.impl.util.partial_ifn.prototype.call = (function() { 
var G__9050__delegate = function (self__,a){var self____$1 = this;var _ = self____$1;var or__3394__auto___9051 = self__.p;if(cljs.core.truth_(or__3394__auto___9051))
{} else
{self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args);
}
return cljs.core.apply.call(null,self__.p,a);
};
var G__9050 = function (self__,var_args){
var self__ = this;
var a = null;if (arguments.length > 1) {
  a = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__9050__delegate.call(this,self__,a);};
G__9050.cljs$lang$maxFixedArity = 1;
G__9050.cljs$lang$applyTo = (function (arglist__9052){
var self__ = cljs.core.first(arglist__9052);
var a = cljs.core.rest(arglist__9052);
return G__9050__delegate(self__,a);
});
G__9050.cljs$core$IFn$_invoke$arity$variadic = G__9050__delegate;
return G__9050;
})()
;
cloact.impl.util.partial_ifn.prototype.apply = (function (self__,args9049){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args9049)));
});
cloact.impl.util.partial_ifn.prototype.cljs$core$IFn$_invoke$arity$2 = (function() { 
var G__9053__delegate = function (a){var _ = this;var or__3394__auto___9054 = self__.p;if(cljs.core.truth_(or__3394__auto___9054))
{} else
{self__.p = cljs.core.apply.call(null,cljs.core.partial,self__.f,self__.args);
}
return cljs.core.apply.call(null,self__.p,a);
};
var G__9053 = function (var_args){
var self__ = this;
var a = null;if (arguments.length > 0) {
  a = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__9053__delegate.call(this,a);};
G__9053.cljs$lang$maxFixedArity = 0;
G__9053.cljs$lang$applyTo = (function (arglist__9055){
var a = cljs.core.seq(arglist__9055);
return G__9053__delegate(a);
});
G__9053.cljs$core$IFn$_invoke$arity$variadic = G__9053__delegate;
return G__9053;
})()
;
cloact.impl.util.__GT_partial_ifn = (function __GT_partial_ifn(f,args,p){return (new cloact.impl.util.partial_ifn(f,args,p));
});
cloact.impl.util.merge_class = (function merge_class(p1,p2){var class$ = (function (){var temp__4092__auto__ = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(p1);if(cljs.core.truth_(temp__4092__auto__))
{var c1 = temp__4092__auto__;var temp__4092__auto____$1 = new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(p2);if(cljs.core.truth_(temp__4092__auto____$1))
{var c2 = temp__4092__auto____$1;return [cljs.core.str(c1),cljs.core.str(" "),cljs.core.str(c2)].join('');
} else
{return null;
}
} else
{return null;
}
})();if((class$ == null))
{return p2;
} else
{return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"class","class",1108647146),class$);
}
});
cloact.impl.util.merge_style = (function merge_style(p1,p2){var style = (function (){var temp__4092__auto__ = new cljs.core.Keyword(null,"style","style",1123684643).cljs$core$IFn$_invoke$arity$1(p1);if(cljs.core.truth_(temp__4092__auto__))
{var s1 = temp__4092__auto__;var temp__4092__auto____$1 = new cljs.core.Keyword(null,"style","style",1123684643).cljs$core$IFn$_invoke$arity$1(p2);if(cljs.core.truth_(temp__4092__auto____$1))
{var s2 = temp__4092__auto____$1;return cljs.core.merge.call(null,s1,s2);
} else
{return null;
}
} else
{return null;
}
})();if((style == null))
{return p2;
} else
{return cljs.core.assoc.call(null,p2,new cljs.core.Keyword(null,"style","style",1123684643),style);
}
});
cloact.impl.util.merge_props = (function merge_props(p1,p2){if((p1 == null))
{return p2;
} else
{if(cljs.core.map_QMARK_.call(null,p1))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1637187556,null),new cljs.core.Symbol(null,"p1","p1",-1640528006,null))))].join('')));
}
return cloact.impl.util.merge_style.call(null,p1,cloact.impl.util.merge_class.call(null,p1,cljs.core.merge.call(null,p1,p2)));
}
});
cloact.impl.util.identical_parts = (function identical_parts(v1,v2){var or__3394__auto__ = (v1 === v2);if(or__3394__auto__)
{return or__3394__auto__;
} else
{var end = cljs.core.count.call(null,v1);var and__3382__auto__ = (end === cljs.core.count.call(null,v2));if(and__3382__auto__)
{var n = 0;while(true){
if((n >= end))
{return true;
} else
{if((cljs.core.nth.call(null,v1,n) === cljs.core.nth.call(null,v2,n)))
{{
var G__9056 = (n + 1);
n = G__9056;
continue;
}
} else
{return false;
}
}
break;
}
} else
{return and__3382__auto__;
}
}
});
cloact.impl.util._not_found = (function (){var obj9058 = {};return obj9058;
})();
cloact.impl.util.shallow_equal_maps = (function shallow_equal_maps(x,y){var or__3394__auto__ = (x === y);if(or__3394__auto__)
{return or__3394__auto__;
} else
{var and__3382__auto__ = (cljs.core.count.call(null,x) === cljs.core.count.call(null,y));if(and__3382__auto__)
{return cljs.core.reduce_kv.call(null,(function (res,k,v){var yv = cljs.core.get.call(null,y,k,cloact.impl.util._not_found);if((cljs.core.keyword_identical_QMARK_.call(null,v,yv)) || (((cljs.core.keyword_identical_QMARK_.call(null,k,new cljs.core.Keyword(null,"style","style",1123684643))) || ((cljs.core.type.call(null,v) === cloact.impl.util.partial_ifn))) && (cljs.core._EQ_.call(null,v,yv))))
{return res;
} else
{return cljs.core.reduced.call(null,false);
}
}),true,x);
} else
{return and__3382__auto__;
}
}
});
cloact.impl.util.equal_args = (function equal_args(p1,c1,p2,c2){new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1,c1,p2,c2], null);
var and__3382__auto__ = cloact.impl.util.identical_parts.call(null,c1,c2);if(and__3382__auto__)
{return cloact.impl.util.shallow_equal_maps.call(null,p1,p2);
} else
{return and__3382__auto__;
}
});

//# sourceMappingURL=util.js.map