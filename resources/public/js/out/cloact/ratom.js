// Compiled by ClojureScript 0.0-2138
goog.provide('cloact.ratom');
goog.require('cljs.core');
cloact.ratom._running = cljs.core.atom.call(null,0);
cloact.ratom.running = (function running(){return cljs.core.deref.call(null,cloact.ratom._running);
});
cloact.ratom.capture_derefed = (function capture_derefed(f){var _STAR_ratom_context_STAR_8744 = cloact.ratom._STAR_ratom_context_STAR_;try{cloact.ratom._STAR_ratom_context_STAR_ = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f.call(null),cljs.core.deref.call(null,cloact.ratom._STAR_ratom_context_STAR_)], null);
}finally {cloact.ratom._STAR_ratom_context_STAR_ = _STAR_ratom_context_STAR_8744;
}});
cloact.ratom.notify_deref_watcher_BANG_ = (function notify_deref_watcher_BANG_(derefable){if((cloact.ratom._STAR_ratom_context_STAR_ == null))
{return null;
} else
{return cljs.core.swap_BANG_.call(null,cloact.ratom._STAR_ratom_context_STAR_,cljs.core.conj,derefable);
}
});

/**
* @constructor
*/
cloact.ratom.RAtom = (function (state,meta,validator,watches){
this.state = state;
this.meta = meta;
this.validator = validator;
this.watches = watches;
this.cljs$lang$protocol_mask$partition0$ = 2153938944;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
cloact.ratom.RAtom.cljs$lang$type = true;
cloact.ratom.RAtom.cljs$lang$ctorStr = "cloact.ratom/RAtom";
cloact.ratom.RAtom.cljs$lang$ctorPrWriter = (function (this__3956__auto__,writer__3957__auto__,opt__3958__auto__){return cljs.core._write.call(null,writer__3957__auto__,"cloact.ratom/RAtom");
});
cloact.ratom.RAtom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
cloact.ratom.RAtom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;var seq__8745 = cljs.core.seq.call(null,self__.watches);var chunk__8746 = null;var count__8747 = 0;var i__8748 = 0;while(true){
if((i__8748 < count__8747))
{var vec__8749 = cljs.core._nth.call(null,chunk__8746,i__8748);var key = cljs.core.nth.call(null,vec__8749,0,null);var f = cljs.core.nth.call(null,vec__8749,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__8751 = seq__8745;
var G__8752 = chunk__8746;
var G__8753 = count__8747;
var G__8754 = (i__8748 + 1);
seq__8745 = G__8751;
chunk__8746 = G__8752;
count__8747 = G__8753;
i__8748 = G__8754;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8745);if(temp__4092__auto__)
{var seq__8745__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8745__$1))
{var c__4136__auto__ = cljs.core.chunk_first.call(null,seq__8745__$1);{
var G__8755 = cljs.core.chunk_rest.call(null,seq__8745__$1);
var G__8756 = c__4136__auto__;
var G__8757 = cljs.core.count.call(null,c__4136__auto__);
var G__8758 = 0;
seq__8745 = G__8755;
chunk__8746 = G__8756;
count__8747 = G__8757;
i__8748 = G__8758;
continue;
}
} else
{var vec__8750 = cljs.core.first.call(null,seq__8745__$1);var key = cljs.core.nth.call(null,vec__8750,0,null);var f = cljs.core.nth.call(null,vec__8750,1,null);f.call(null,key,this$__$1,oldval,newval);
{
var G__8759 = cljs.core.next.call(null,seq__8745__$1);
var G__8760 = null;
var G__8761 = 0;
var G__8762 = 0;
seq__8745 = G__8759;
chunk__8746 = G__8760;
count__8747 = G__8761;
i__8748 = G__8762;
continue;
}
}
} else
{return null;
}
}
break;
}
});
cloact.ratom.RAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.assoc.call(null,self__.watches,key,f);
});
cloact.ratom.RAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){var self__ = this;
var this$__$1 = this;return this$__$1.watches = cljs.core.dissoc.call(null,self__.watches,key);
});
cloact.ratom.RAtom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (a,writer,opts){var self__ = this;
var a__$1 = this;cljs.core._write.call(null,writer,"#<Atom: ");
cljs.core.pr_writer.call(null,self__.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
cloact.ratom.RAtom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.meta;
});
cloact.ratom.RAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;cloact.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);
return self__.state;
});
cloact.ratom.RAtom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
cloact.ratom.__GT_RAtom = (function __GT_RAtom(state,meta,validator,watches){return (new cloact.ratom.RAtom(state,meta,validator,watches));
});
/**
* Like clojure.core/atom, except that it keeps track of derefs.
* @param {...*} var_args
*/
cloact.ratom.atom = (function() {
var atom = null;
var atom__1 = (function (x){return (new cloact.ratom.RAtom(x,null,null,null));
});
var atom__2 = (function() { 
var G__8766__delegate = function (x,p__8763){var map__8765 = p__8763;var map__8765__$1 = ((cljs.core.seq_QMARK_.call(null,map__8765))?cljs.core.apply.call(null,cljs.core.hash_map,map__8765):map__8765);var validator = cljs.core.get.call(null,map__8765__$1,new cljs.core.Keyword(null,"validator","validator",4199087812));var meta = cljs.core.get.call(null,map__8765__$1,new cljs.core.Keyword(null,"meta","meta",1017252215));return (new cloact.ratom.RAtom(x,meta,validator,null));
};
var G__8766 = function (x,var_args){
var p__8763 = null;if (arguments.length > 1) {
  p__8763 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return G__8766__delegate.call(this,x,p__8763);};
G__8766.cljs$lang$maxFixedArity = 1;
G__8766.cljs$lang$applyTo = (function (arglist__8767){
var x = cljs.core.first(arglist__8767);
var p__8763 = cljs.core.rest(arglist__8767);
return G__8766__delegate(x,p__8763);
});
G__8766.cljs$core$IFn$_invoke$arity$variadic = G__8766__delegate;
return G__8766;
})()
;
atom = function(x,var_args){
var p__8763 = var_args;
switch(arguments.length){
case 1:
return atom__1.call(this,x);
default:
return atom__2.cljs$core$IFn$_invoke$arity$variadic(x, cljs.core.array_seq(arguments, 1));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__2.cljs$lang$applyTo;
atom.cljs$core$IFn$_invoke$arity$1 = atom__1;
atom.cljs$core$IFn$_invoke$arity$variadic = atom__2.cljs$core$IFn$_invoke$arity$variadic;
return atom;
})()
;
cloact.ratom.IDisposable = (function (){var obj8769 = {};return obj8769;
})();
cloact.ratom.dispose_BANG_ = (function dispose_BANG_(this$){if((function (){var and__3382__auto__ = this$;if(and__3382__auto__)
{return this$.cloact$ratom$IDisposable$dispose_BANG_$arity$1;
} else
{return and__3382__auto__;
}
})())
{return this$.cloact$ratom$IDisposable$dispose_BANG_$arity$1(this$);
} else
{var x__4015__auto__ = (((this$ == null))?null:this$);return (function (){var or__3394__auto__ = (cloact.ratom.dispose_BANG_[goog.typeOf(x__4015__auto__)]);if(or__3394__auto__)
{return or__3394__auto__;
} else
{var or__3394__auto____$1 = (cloact.ratom.dispose_BANG_["_"]);if(or__3394__auto____$1)
{return or__3394__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IDisposable.dispose!",this$);
}
}
})().call(null,this$);
}
});
cloact.ratom.IRunnable = (function (){var obj8771 = {};return obj8771;
})();
cloact.ratom.run = (function run(this$){if((function (){var and__3382__auto__ = this$;if(and__3382__auto__)
{return this$.cloact$ratom$IRunnable$run$arity$1;
} else
{return and__3382__auto__;
}
})())
{return this$.cloact$ratom$IRunnable$run$arity$1(this$);
} else
{var x__4015__auto__ = (((this$ == null))?null:this$);return (function (){var or__3394__auto__ = (cloact.ratom.run[goog.typeOf(x__4015__auto__)]);if(or__3394__auto__)
{return or__3394__auto__;
} else
{var or__3394__auto____$1 = (cloact.ratom.run["_"]);if(or__3394__auto____$1)
{return or__3394__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IRunnable.run",this$);
}
}
})().call(null,this$);
}
});
cloact.ratom.IComputedImpl = (function (){var obj8773 = {};return obj8773;
})();
cloact.ratom._update_watching = (function _update_watching(this$,derefed){if((function (){var and__3382__auto__ = this$;if(and__3382__auto__)
{return this$.cloact$ratom$IComputedImpl$_update_watching$arity$2;
} else
{return and__3382__auto__;
}
})())
{return this$.cloact$ratom$IComputedImpl$_update_watching$arity$2(this$,derefed);
} else
{var x__4015__auto__ = (((this$ == null))?null:this$);return (function (){var or__3394__auto__ = (cloact.ratom._update_watching[goog.typeOf(x__4015__auto__)]);if(or__3394__auto__)
{return or__3394__auto__;
} else
{var or__3394__auto____$1 = (cloact.ratom._update_watching["_"]);if(or__3394__auto____$1)
{return or__3394__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IComputedImpl.-update-watching",this$);
}
}
})().call(null,this$,derefed);
}
});
cloact.ratom._handle_change = (function _handle_change(k,sender,oldval,newval){if((function (){var and__3382__auto__ = k;if(and__3382__auto__)
{return k.cloact$ratom$IComputedImpl$_handle_change$arity$4;
} else
{return and__3382__auto__;
}
})())
{return k.cloact$ratom$IComputedImpl$_handle_change$arity$4(k,sender,oldval,newval);
} else
{var x__4015__auto__ = (((k == null))?null:k);return (function (){var or__3394__auto__ = (cloact.ratom._handle_change[goog.typeOf(x__4015__auto__)]);if(or__3394__auto__)
{return or__3394__auto__;
} else
{var or__3394__auto____$1 = (cloact.ratom._handle_change["_"]);if(or__3394__auto____$1)
{return or__3394__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IComputedImpl.-handle-change",k);
}
}
})().call(null,k,sender,oldval,newval);
}
});
cloact.ratom.call_watches = (function call_watches(obs,watches,oldval,newval){var seq__8780 = cljs.core.seq.call(null,watches);var chunk__8781 = null;var count__8782 = 0;var i__8783 = 0;while(true){
if((i__8783 < count__8782))
{var vec__8784 = cljs.core._nth.call(null,chunk__8781,i__8783);var k = cljs.core.nth.call(null,vec__8784,0,null);var wf = cljs.core.nth.call(null,vec__8784,1,null);wf.call(null,k,obs,oldval,newval);
{
var G__8786 = seq__8780;
var G__8787 = chunk__8781;
var G__8788 = count__8782;
var G__8789 = (i__8783 + 1);
seq__8780 = G__8786;
chunk__8781 = G__8787;
count__8782 = G__8788;
i__8783 = G__8789;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8780);if(temp__4092__auto__)
{var seq__8780__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8780__$1))
{var c__4136__auto__ = cljs.core.chunk_first.call(null,seq__8780__$1);{
var G__8790 = cljs.core.chunk_rest.call(null,seq__8780__$1);
var G__8791 = c__4136__auto__;
var G__8792 = cljs.core.count.call(null,c__4136__auto__);
var G__8793 = 0;
seq__8780 = G__8790;
chunk__8781 = G__8791;
count__8782 = G__8792;
i__8783 = G__8793;
continue;
}
} else
{var vec__8785 = cljs.core.first.call(null,seq__8780__$1);var k = cljs.core.nth.call(null,vec__8785,0,null);var wf = cljs.core.nth.call(null,vec__8785,1,null);wf.call(null,k,obs,oldval,newval);
{
var G__8794 = cljs.core.next.call(null,seq__8780__$1);
var G__8795 = null;
var G__8796 = 0;
var G__8797 = 0;
seq__8780 = G__8794;
chunk__8781 = G__8795;
count__8782 = G__8796;
i__8783 = G__8797;
continue;
}
}
} else
{return null;
}
}
break;
}
});

/**
* @constructor
*/
cloact.ratom.Reaction = (function (f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){
this.f = f;
this.state = state;
this.dirty_QMARK_ = dirty_QMARK_;
this.active_QMARK_ = active_QMARK_;
this.watching = watching;
this.watches = watches;
this.auto_run = auto_run;
this.on_set = on_set;
this.on_dispose = on_dispose;
this.cljs$lang$protocol_mask$partition0$ = 2153807872;
this.cljs$lang$protocol_mask$partition1$ = 2;
})
cloact.ratom.Reaction.cljs$lang$type = true;
cloact.ratom.Reaction.cljs$lang$ctorStr = "cloact.ratom/Reaction";
cloact.ratom.Reaction.cljs$lang$ctorPrWriter = (function (this__3956__auto__,writer__3957__auto__,opt__3958__auto__){return cljs.core._write.call(null,writer__3957__auto__,"cloact.ratom/Reaction");
});
cloact.ratom.Reaction.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return goog.getUid(this$__$1);
});
cloact.ratom.Reaction.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;cljs.core._write.call(null,writer,[cljs.core.str("#<Reaction "),cljs.core.str(cljs.core.hash.call(null,this$__$1)),cljs.core.str(": ")].join(''));
cljs.core.pr_writer.call(null,self__.state,writer,opts);
return cljs.core._write.call(null,writer,">");
});
cloact.ratom.Reaction.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){var self__ = this;
var o__$1 = this;return (o__$1 === other);
});
cloact.ratom.Reaction.prototype.cloact$ratom$IDisposable$ = true;
cloact.ratom.Reaction.prototype.cloact$ratom$IDisposable$dispose_BANG_$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var seq__8798_8811 = cljs.core.seq.call(null,self__.watching);var chunk__8799_8812 = null;var count__8800_8813 = 0;var i__8801_8814 = 0;while(true){
if((i__8801_8814 < count__8800_8813))
{var w_8815 = cljs.core._nth.call(null,chunk__8799_8812,i__8801_8814);cljs.core.remove_watch.call(null,w_8815,this$__$1);
{
var G__8816 = seq__8798_8811;
var G__8817 = chunk__8799_8812;
var G__8818 = count__8800_8813;
var G__8819 = (i__8801_8814 + 1);
seq__8798_8811 = G__8816;
chunk__8799_8812 = G__8817;
count__8800_8813 = G__8818;
i__8801_8814 = G__8819;
continue;
}
} else
{var temp__4092__auto___8820 = cljs.core.seq.call(null,seq__8798_8811);if(temp__4092__auto___8820)
{var seq__8798_8821__$1 = temp__4092__auto___8820;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8798_8821__$1))
{var c__4136__auto___8822 = cljs.core.chunk_first.call(null,seq__8798_8821__$1);{
var G__8823 = cljs.core.chunk_rest.call(null,seq__8798_8821__$1);
var G__8824 = c__4136__auto___8822;
var G__8825 = cljs.core.count.call(null,c__4136__auto___8822);
var G__8826 = 0;
seq__8798_8811 = G__8823;
chunk__8799_8812 = G__8824;
count__8800_8813 = G__8825;
i__8801_8814 = G__8826;
continue;
}
} else
{var w_8827 = cljs.core.first.call(null,seq__8798_8821__$1);cljs.core.remove_watch.call(null,w_8827,this$__$1);
{
var G__8828 = cljs.core.next.call(null,seq__8798_8821__$1);
var G__8829 = null;
var G__8830 = 0;
var G__8831 = 0;
seq__8798_8811 = G__8828;
chunk__8799_8812 = G__8829;
count__8800_8813 = G__8830;
i__8801_8814 = G__8831;
continue;
}
}
} else
{}
}
break;
}
self__.watching = cljs.core.PersistentHashSet.EMPTY;
self__.state = null;
self__.dirty_QMARK_ = true;
if(cljs.core.truth_(self__.active_QMARK_))
{cljs.core.swap_BANG_.call(null,cloact.ratom._running,cljs.core.dec);
self__.active_QMARK_ = false;
} else
{}
if(cljs.core.truth_(self__.on_dispose))
{return self__.on_dispose.call(null);
} else
{return null;
}
});
cloact.ratom.Reaction.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;if(cljs.core.not.call(null,(function (){var or__3394__auto__ = self__.auto_run;if(cljs.core.truth_(or__3394__auto__))
{return or__3394__auto__;
} else
{return cloact.ratom._STAR_ratom_context_STAR_;
}
})()))
{var x__6006__auto___8832 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.auto_run,cloact.ratom._STAR_ratom_context_STAR_], null);if(!((console.log == null)))
{console.log([cljs.core.str([cljs.core.str("dbg "),cljs.core.str("cloact.ratom"),cljs.core.str(":"),cljs.core.str(119),cljs.core.str(": "),cljs.core.str("[auto-run *ratom-context*]"),cljs.core.str(": "),cljs.core.str(cljs.core.pr_str.call(null,x__6006__auto___8832))].join(''))].join(''));
} else
{}
} else
{}
if(cljs.core.truth_((function (){var or__3394__auto__ = self__.auto_run;if(cljs.core.truth_(or__3394__auto__))
{return or__3394__auto__;
} else
{return cloact.ratom._STAR_ratom_context_STAR_;
}
})()))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Reaction derefed outside auto-running context"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",-1640527972,null),new cljs.core.Symbol(null,"auto-run","auto-run",-202959066,null),new cljs.core.Symbol(null,"*ratom-context*","*ratom-context*",1304741512,null))))].join('')));
}
cloact.ratom.notify_deref_watcher_BANG_.call(null,this$__$1);
if(cljs.core.truth_(self__.dirty_QMARK_))
{return cloact.ratom.run.call(null,this$__$1);
} else
{return self__.state;
}
});
cloact.ratom.Reaction.prototype.cloact$ratom$IRunnable$ = true;
cloact.ratom.Reaction.prototype.cloact$ratom$IRunnable$run$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;var oldstate = self__.state;var vec__8802 = cloact.ratom.capture_derefed.call(null,self__.f);var res = cljs.core.nth.call(null,vec__8802,0,null);var derefed = cljs.core.nth.call(null,vec__8802,1,null);if(cljs.core.not_EQ_.call(null,derefed,self__.watching))
{cloact.ratom._update_watching.call(null,this$__$1,derefed);
} else
{}
if(cljs.core.truth_(self__.active_QMARK_))
{} else
{cljs.core.swap_BANG_.call(null,cloact.ratom._running,cljs.core.inc);
self__.active_QMARK_ = true;
}
self__.dirty_QMARK_ = false;
self__.state = res;
cloact.ratom.call_watches.call(null,this$__$1,self__.watches,oldstate,self__.state);
return res;
});
cloact.ratom.Reaction.prototype.cloact$ratom$IComputedImpl$ = true;
cloact.ratom.Reaction.prototype.cloact$ratom$IComputedImpl$_handle_change$arity$4 = (function (this$,sender,oldval,newval){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_((function (){var and__3382__auto__ = self__.active_QMARK_;if(cljs.core.truth_(and__3382__auto__))
{return (cljs.core.not.call(null,self__.dirty_QMARK_)) && (!((oldval === newval)));
} else
{return and__3382__auto__;
}
})()))
{self__.dirty_QMARK_ = true;
return (function (){var or__3394__auto__ = self__.auto_run;if(cljs.core.truth_(or__3394__auto__))
{return or__3394__auto__;
} else
{return cloact.ratom.run;
}
})().call(null,this$__$1);
} else
{return null;
}
});
cloact.ratom.Reaction.prototype.cloact$ratom$IComputedImpl$_update_watching$arity$2 = (function (this$,derefed){var self__ = this;
var this$__$1 = this;var seq__8803_8833 = cljs.core.seq.call(null,derefed);var chunk__8804_8834 = null;var count__8805_8835 = 0;var i__8806_8836 = 0;while(true){
if((i__8806_8836 < count__8805_8835))
{var w_8837 = cljs.core._nth.call(null,chunk__8804_8834,i__8806_8836);if(cljs.core.contains_QMARK_.call(null,self__.watching,w_8837))
{} else
{cljs.core.add_watch.call(null,w_8837,this$__$1,cloact.ratom._handle_change);
}
{
var G__8838 = seq__8803_8833;
var G__8839 = chunk__8804_8834;
var G__8840 = count__8805_8835;
var G__8841 = (i__8806_8836 + 1);
seq__8803_8833 = G__8838;
chunk__8804_8834 = G__8839;
count__8805_8835 = G__8840;
i__8806_8836 = G__8841;
continue;
}
} else
{var temp__4092__auto___8842 = cljs.core.seq.call(null,seq__8803_8833);if(temp__4092__auto___8842)
{var seq__8803_8843__$1 = temp__4092__auto___8842;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8803_8843__$1))
{var c__4136__auto___8844 = cljs.core.chunk_first.call(null,seq__8803_8843__$1);{
var G__8845 = cljs.core.chunk_rest.call(null,seq__8803_8843__$1);
var G__8846 = c__4136__auto___8844;
var G__8847 = cljs.core.count.call(null,c__4136__auto___8844);
var G__8848 = 0;
seq__8803_8833 = G__8845;
chunk__8804_8834 = G__8846;
count__8805_8835 = G__8847;
i__8806_8836 = G__8848;
continue;
}
} else
{var w_8849 = cljs.core.first.call(null,seq__8803_8843__$1);if(cljs.core.contains_QMARK_.call(null,self__.watching,w_8849))
{} else
{cljs.core.add_watch.call(null,w_8849,this$__$1,cloact.ratom._handle_change);
}
{
var G__8850 = cljs.core.next.call(null,seq__8803_8843__$1);
var G__8851 = null;
var G__8852 = 0;
var G__8853 = 0;
seq__8803_8833 = G__8850;
chunk__8804_8834 = G__8851;
count__8805_8835 = G__8852;
i__8806_8836 = G__8853;
continue;
}
}
} else
{}
}
break;
}
var seq__8807_8854 = cljs.core.seq.call(null,self__.watching);var chunk__8808_8855 = null;var count__8809_8856 = 0;var i__8810_8857 = 0;while(true){
if((i__8810_8857 < count__8809_8856))
{var w_8858 = cljs.core._nth.call(null,chunk__8808_8855,i__8810_8857);if(cljs.core.contains_QMARK_.call(null,derefed,w_8858))
{} else
{cljs.core.remove_watch.call(null,w_8858,this$__$1);
}
{
var G__8859 = seq__8807_8854;
var G__8860 = chunk__8808_8855;
var G__8861 = count__8809_8856;
var G__8862 = (i__8810_8857 + 1);
seq__8807_8854 = G__8859;
chunk__8808_8855 = G__8860;
count__8809_8856 = G__8861;
i__8810_8857 = G__8862;
continue;
}
} else
{var temp__4092__auto___8863 = cljs.core.seq.call(null,seq__8807_8854);if(temp__4092__auto___8863)
{var seq__8807_8864__$1 = temp__4092__auto___8863;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8807_8864__$1))
{var c__4136__auto___8865 = cljs.core.chunk_first.call(null,seq__8807_8864__$1);{
var G__8866 = cljs.core.chunk_rest.call(null,seq__8807_8864__$1);
var G__8867 = c__4136__auto___8865;
var G__8868 = cljs.core.count.call(null,c__4136__auto___8865);
var G__8869 = 0;
seq__8807_8854 = G__8866;
chunk__8808_8855 = G__8867;
count__8809_8856 = G__8868;
i__8810_8857 = G__8869;
continue;
}
} else
{var w_8870 = cljs.core.first.call(null,seq__8807_8864__$1);if(cljs.core.contains_QMARK_.call(null,derefed,w_8870))
{} else
{cljs.core.remove_watch.call(null,w_8870,this$__$1);
}
{
var G__8871 = cljs.core.next.call(null,seq__8807_8864__$1);
var G__8872 = null;
var G__8873 = 0;
var G__8874 = 0;
seq__8807_8854 = G__8871;
chunk__8808_8855 = G__8872;
count__8809_8856 = G__8873;
i__8810_8857 = G__8874;
continue;
}
}
} else
{}
}
break;
}
return self__.watching = derefed;
});
cloact.ratom.Reaction.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){var self__ = this;
var this$__$1 = this;if(cljs.core.truth_(self__.on_set))
{self__.on_set.call(null,oldval,newval);
} else
{}
return cloact.ratom.call_watches.call(null,this$__$1,self__.watches,oldval,newval);
});
cloact.ratom.Reaction.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,k,wf){var self__ = this;
var this$__$1 = this;return self__.watches = cljs.core.assoc.call(null,self__.watches,k,wf);
});
cloact.ratom.Reaction.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,k){var self__ = this;
var this$__$1 = this;self__.watches = cljs.core.dissoc.call(null,self__.watches,k);
if(cljs.core.empty_QMARK_.call(null,self__.watches))
{return cloact.ratom.dispose_BANG_.call(null,this$__$1);
} else
{return null;
}
});
cloact.ratom.__GT_Reaction = (function __GT_Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose){return (new cloact.ratom.Reaction(f,state,dirty_QMARK_,active_QMARK_,watching,watches,auto_run,on_set,on_dispose));
});
/**
* @param {...*} var_args
*/
cloact.ratom.make_reaction = (function() { 
var make_reaction__delegate = function (f,p__8875){var map__8877 = p__8875;var map__8877__$1 = ((cljs.core.seq_QMARK_.call(null,map__8877))?cljs.core.apply.call(null,cljs.core.hash_map,map__8877):map__8877);var on_dispose = cljs.core.get.call(null,map__8877__$1,new cljs.core.Keyword(null,"on-dispose","on-dispose",2213067683));var on_set = cljs.core.get.call(null,map__8877__$1,new cljs.core.Keyword(null,"on-set","on-set",4294781670));var auto_run = cljs.core.get.call(null,map__8877__$1,new cljs.core.Keyword(null,"auto-run","auto-run",2451476703));var runner = ((cljs.core._EQ_.call(null,auto_run,true))?cloact.ratom.run:auto_run);return (new cloact.ratom.Reaction(f,null,true,false,cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentArrayMap.EMPTY,runner,on_set,on_dispose));
};
var make_reaction = function (f,var_args){
var p__8875 = null;if (arguments.length > 1) {
  p__8875 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return make_reaction__delegate.call(this,f,p__8875);};
make_reaction.cljs$lang$maxFixedArity = 1;
make_reaction.cljs$lang$applyTo = (function (arglist__8878){
var f = cljs.core.first(arglist__8878);
var p__8875 = cljs.core.rest(arglist__8878);
return make_reaction__delegate(f,p__8875);
});
make_reaction.cljs$core$IFn$_invoke$arity$variadic = make_reaction__delegate;
return make_reaction;
})()
;

//# sourceMappingURL=ratom.js.map