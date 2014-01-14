// Compiled by ClojureScript 0.0-2138
goog.provide('goban_client.comm');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('chord.client');
goog.require('chord.client');
goog.require('cljs.core.async');
goban_client.comm.connect_to_server = (function connect_to_server(url){var c__5509__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5510__auto__ = (function (){var switch__5494__auto__ = (function (state_8756){var state_val_8757 = (state_8756[1]);if((state_val_8757 === 3))
{var inst_8754 = (state_8756[2]);var state_8756__$1 = state_8756;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_8756__$1,inst_8754);
} else
{if((state_val_8757 === 2))
{var inst_8752 = (state_8756[2]);var state_8756__$1 = state_8756;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_8756__$1,3,inst_8752,"Hello, server! (from client)");
} else
{if((state_val_8757 === 1))
{var inst_8750 = chord.client.ws_ch.call(null,"ws://localhost:3000/ws");var state_8756__$1 = state_8756;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_8756__$1,2,inst_8750);
} else
{return null;
}
}
}
});return ((function (switch__5494__auto__){
return (function() {
var state_machine__5495__auto__ = null;
var state_machine__5495__auto____0 = (function (){var statearr_8761 = [null,null,null,null,null,null,null];(statearr_8761[0] = state_machine__5495__auto__);
(statearr_8761[1] = 1);
return statearr_8761;
});
var state_machine__5495__auto____1 = (function (state_8756){while(true){
var ret_value__5496__auto__ = (function (){try{while(true){
var result__5497__auto__ = switch__5494__auto__.call(null,state_8756);if(cljs.core.keyword_identical_QMARK_.call(null,result__5497__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5497__auto__;
}
break;
}
}catch (e8762){if((e8762 instanceof Object))
{var ex__5498__auto__ = e8762;var statearr_8763_8765 = state_8756;(statearr_8763_8765[5] = ex__5498__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_8756);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e8762;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5496__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__8766 = state_8756;
state_8756 = G__8766;
continue;
}
} else
{return ret_value__5496__auto__;
}
break;
}
});
state_machine__5495__auto__ = function(state_8756){
switch(arguments.length){
case 0:
return state_machine__5495__auto____0.call(this);
case 1:
return state_machine__5495__auto____1.call(this,state_8756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5495__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5495__auto____0;
state_machine__5495__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5495__auto____1;
return state_machine__5495__auto__;
})()
;})(switch__5494__auto__))
})();var state__5511__auto__ = (function (){var statearr_8764 = f__5510__auto__.call(null);(statearr_8764[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5509__auto__);
return statearr_8764;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5511__auto__);
}));
return c__5509__auto__;
});

//# sourceMappingURL=comm.js.map