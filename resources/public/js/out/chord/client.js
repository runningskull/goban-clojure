// Compiled by ClojureScript 0.0-2138
goog.provide('chord.client');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async');
chord.client.read_from_ch_BANG_ = (function read_from_ch_BANG_(ch,ws){return ws.onmessage = (function (ev){var message = ev.data;return cljs.core.async.put_BANG_.call(null,ch,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",1968829305),message], null));
});
});
chord.client.write_to_ch_BANG_ = (function write_to_ch_BANG_(ch,ws){var c__5509__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5510__auto__ = (function (){var switch__5494__auto__ = (function (state_12889){var state_val_12890 = (state_12889[1]);if((state_val_12890 === 7))
{var inst_12885 = (state_12889[2]);var state_12889__$1 = state_12889;var statearr_12891_12906 = state_12889__$1;(statearr_12891_12906[2] = inst_12885);
(statearr_12891_12906[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12890 === 6))
{var state_12889__$1 = state_12889;var statearr_12892_12907 = state_12889__$1;(statearr_12892_12907[2] = null);
(statearr_12892_12907[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12890 === 5))
{var inst_12879 = (state_12889[7]);var inst_12881 = ws.send(inst_12879);var state_12889__$1 = (function (){var statearr_12893 = state_12889;(statearr_12893[8] = inst_12881);
return statearr_12893;
})();var statearr_12894_12908 = state_12889__$1;(statearr_12894_12908[2] = null);
(statearr_12894_12908[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12890 === 4))
{var inst_12879 = (state_12889[7]);var inst_12879__$1 = (state_12889[2]);var state_12889__$1 = (function (){var statearr_12895 = state_12889;(statearr_12895[7] = inst_12879__$1);
return statearr_12895;
})();if(cljs.core.truth_(inst_12879__$1))
{var statearr_12896_12909 = state_12889__$1;(statearr_12896_12909[1] = 5);
} else
{var statearr_12897_12910 = state_12889__$1;(statearr_12897_12910[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12890 === 3))
{var inst_12887 = (state_12889[2]);var state_12889__$1 = state_12889;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12889__$1,inst_12887);
} else
{if((state_val_12890 === 2))
{var state_12889__$1 = state_12889;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12889__$1,4,ch);
} else
{if((state_val_12890 === 1))
{var state_12889__$1 = state_12889;var statearr_12898_12911 = state_12889__$1;(statearr_12898_12911[2] = null);
(statearr_12898_12911[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5494__auto__){
return (function() {
var state_machine__5495__auto__ = null;
var state_machine__5495__auto____0 = (function (){var statearr_12902 = [null,null,null,null,null,null,null,null,null];(statearr_12902[0] = state_machine__5495__auto__);
(statearr_12902[1] = 1);
return statearr_12902;
});
var state_machine__5495__auto____1 = (function (state_12889){while(true){
var ret_value__5496__auto__ = (function (){try{while(true){
var result__5497__auto__ = switch__5494__auto__.call(null,state_12889);if(cljs.core.keyword_identical_QMARK_.call(null,result__5497__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5497__auto__;
}
break;
}
}catch (e12903){if((e12903 instanceof Object))
{var ex__5498__auto__ = e12903;var statearr_12904_12912 = state_12889;(statearr_12904_12912[5] = ex__5498__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12889);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12903;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5496__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12913 = state_12889;
state_12889 = G__12913;
continue;
}
} else
{return ret_value__5496__auto__;
}
break;
}
});
state_machine__5495__auto__ = function(state_12889){
switch(arguments.length){
case 0:
return state_machine__5495__auto____0.call(this);
case 1:
return state_machine__5495__auto____1.call(this,state_12889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5495__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5495__auto____0;
state_machine__5495__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5495__auto____1;
return state_machine__5495__auto__;
})()
;})(switch__5494__auto__))
})();var state__5511__auto__ = (function (){var statearr_12905 = f__5510__auto__.call(null);(statearr_12905[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5509__auto__);
return statearr_12905;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5511__auto__);
}));
return c__5509__auto__;
});
chord.client.make_open_ch = (function make_open_ch(ws,v){var ch = cljs.core.async.chan.call(null);ws.onopen = (function (){cljs.core.async.put_BANG_.call(null,ch,v);
return cljs.core.async.close_BANG_.call(null,ch);
});
return ch;
});
chord.client.on_error = (function on_error(ws,read_ch){return ws.onerror = (function (ev){var error = ev.data;return cljs.core.async.put_BANG_.call(null,read_ch,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",1110689146),error], null));
});
});
chord.client.on_close = (function on_close(ws,read_ch,write_ch){return ws.onclose = (function (){cljs.core.async.close_BANG_.call(null,read_ch);
return cljs.core.async.close_BANG_.call(null,write_ch);
});
});
chord.client.combine_chs = (function combine_chs(ws,read_ch,write_ch){if(typeof chord.client.t12917 !== 'undefined')
{} else
{
/**
* @constructor
*/
chord.client.t12917 = (function (write_ch,read_ch,ws,combine_chs,meta12918){
this.write_ch = write_ch;
this.read_ch = read_ch;
this.ws = ws;
this.combine_chs = combine_chs;
this.meta12918 = meta12918;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
chord.client.t12917.cljs$lang$type = true;
chord.client.t12917.cljs$lang$ctorStr = "chord.client/t12917";
chord.client.t12917.cljs$lang$ctorPrWriter = (function (this__3956__auto__,writer__3957__auto__,opt__3958__auto__){return cljs.core._write.call(null,writer__3957__auto__,"chord.client/t12917");
});
chord.client.t12917.prototype.cljs$core$async$impl$protocols$Channel$ = true;
chord.client.t12917.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.close_BANG_.call(null,self__.read_ch);
cljs.core.async.impl.protocols.close_BANG_.call(null,self__.write_ch);
return self__.ws.close();
});
chord.client.t12917.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
chord.client.t12917.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,msg,handler){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.write_ch,msg,handler);
});
chord.client.t12917.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
chord.client.t12917.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,handler){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.read_ch,handler);
});
chord.client.t12917.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12919){var self__ = this;
var _12919__$1 = this;return self__.meta12918;
});
chord.client.t12917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12919,meta12918__$1){var self__ = this;
var _12919__$1 = this;return (new chord.client.t12917(self__.write_ch,self__.read_ch,self__.ws,self__.combine_chs,meta12918__$1));
});
chord.client.__GT_t12917 = (function __GT_t12917(write_ch__$1,read_ch__$1,ws__$1,combine_chs__$1,meta12918){return (new chord.client.t12917(write_ch__$1,read_ch__$1,ws__$1,combine_chs__$1,meta12918));
});
}
return (new chord.client.t12917(write_ch,read_ch,ws,combine_chs,null));
});
/**
* Creates websockets connection and returns a 2-sided channel when the websocket is opened.
* Arguments:
* ws-url           - (required) link to websocket service
* :reading-buffer  - (optional) hash-map with settings for reading channel
* :writing-buffer  - (optional) hash-map with settings for writing channel
* 
* supported keys for channel's options:
* 
* * type - type of channel's buffer [:fixed :sliding :dropping :unbuffered] (default :unbuffered)
* * size - size of buffer (required for [:fixed :sliding :dropping])
* 
* Usage:
* (:require [cljs.core.async :as a])
* 
* 
* (a/<! (ws-ch "ws://127.0.0.1:6437"))
* 
* (a/<! (ws-ch "ws://127.0.0.1:6437" {:read-ch (a/chan (a/sliding-buffer 10))}))
* 
* (a/<! (ws-ch "ws://127.0.0.1:6437" {:read-ch (a/chan (a/sliding-buffer 10))
* :write-ch (a/chan (a/dropping-buffer 10))}))
* @param {...*} var_args
*/
chord.client.ws_ch = (function() { 
var ws_ch__delegate = function (ws_url,p__12920){var vec__12925 = p__12920;var map__12926 = cljs.core.nth.call(null,vec__12925,0,null);var map__12926__$1 = ((cljs.core.seq_QMARK_.call(null,map__12926))?cljs.core.apply.call(null,cljs.core.hash_map,map__12926):map__12926);var write_ch = cljs.core.get.call(null,map__12926__$1,new cljs.core.Keyword(null,"write-ch","write-ch",3462353029));var read_ch = cljs.core.get.call(null,map__12926__$1,new cljs.core.Keyword(null,"read-ch","read-ch",2094260078));var web_socket = (new WebSocket(ws_url));var read_ch__$1 = (function (){var G__12927 = (function (){var or__3394__auto__ = read_ch;if(cljs.core.truth_(or__3394__auto__))
{return or__3394__auto__;
} else
{return cljs.core.async.chan.call(null);
}
})();chord.client.read_from_ch_BANG_.call(null,G__12927,web_socket);
return G__12927;
})();var write_ch__$1 = (function (){var G__12928 = (function (){var or__3394__auto__ = write_ch;if(cljs.core.truth_(or__3394__auto__))
{return or__3394__auto__;
} else
{return cljs.core.async.chan.call(null);
}
})();chord.client.write_to_ch_BANG_.call(null,G__12928,web_socket);
return G__12928;
})();var combined_ch = chord.client.combine_chs.call(null,web_socket,read_ch__$1,write_ch__$1);var socket_ch = chord.client.make_open_ch.call(null,web_socket,combined_ch);chord.client.on_error.call(null,web_socket,read_ch__$1);
chord.client.on_close.call(null,web_socket,read_ch__$1,write_ch__$1);
return socket_ch;
};
var ws_ch = function (ws_url,var_args){
var p__12920 = null;if (arguments.length > 1) {
  p__12920 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return ws_ch__delegate.call(this,ws_url,p__12920);};
ws_ch.cljs$lang$maxFixedArity = 1;
ws_ch.cljs$lang$applyTo = (function (arglist__12929){
var ws_url = cljs.core.first(arglist__12929);
var p__12920 = cljs.core.rest(arglist__12929);
return ws_ch__delegate(ws_url,p__12920);
});
ws_ch.cljs$core$IFn$_invoke$arity$variadic = ws_ch__delegate;
return ws_ch;
})()
;

//# sourceMappingURL=client.js.map