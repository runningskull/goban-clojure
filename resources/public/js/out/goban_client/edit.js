// Compiled by ClojureScript 0.0-2138
goog.provide('goban_client.edit');
goog.require('cljs.core');
goog.require('cloact.core');
goog.require('goban_client.core');
goog.require('cloact.core');
goog.require('cloact.core');
goog.require('goban_lib.core');
goog.require('goban_lib.core');
goog.require('goban_client.core');
goog.require('goban_client.core');
goban_client.edit.placement_mode = cloact.core.atom.call(null,new cljs.core.Keyword(null,"alternate-moves","alternate-moves",1707655969));
goban_client.edit.input_locked = cloact.core.atom.call(null,false);
goban_client.edit.mode_labels = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"alternate-moves","alternate-moves",1707655969),"Alternate",new cljs.core.Keyword(null,"black","black",1107723121),"Black Only",new cljs.core.Keyword(null,"white","white",1127006107),"White Only"], null);
goban_client.edit.goto_history = (function goto_history(evt){var turn = parseInt(evt.target.value);var hist = cljs.core.deref.call(null,goban_client.core.history);if((turn < cljs.core.count.call(null,hist)))
{cljs.core.reset_BANG_.call(null,goban_client.core.game_state,hist.call(null,turn));
} else
{}
return cljs.core.reset_BANG_.call(null,goban_client.edit.input_locked,cljs.core.not_EQ_.call(null,turn,(cljs.core.count.call(null,hist) - 1)));
});
goban_client.edit.place_stone = (function place_stone(p__8767){var vec__8769 = p__8767;var x = cljs.core.nth.call(null,vec__8769,0,null);var y = cljs.core.nth.call(null,vec__8769,1,null);var xy = vec__8769;if(cljs.core.not.call(null,cljs.core.deref.call(null,goban_client.edit.input_locked)))
{var game_state = goban_client.core.game_state;var game = cljs.core.deref.call(null,game_state);var mode = cljs.core.deref.call(null,goban_client.edit.placement_mode);var new_board = goban_lib.core.place_stone.call(null,new cljs.core.Keyword(null,"board","board",1107812952).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"whose-turn","whose-turn",2205732108).cljs$core$IFn$_invoke$arity$1(game),xy,new cljs.core.Keyword(null,"ko-history","ko-history",4741801117).cljs$core$IFn$_invoke$arity$1(game));if(cljs.core.truth_(new_board))
{cljs.core.reset_BANG_.call(null,goban_client.core.alert_msg,cljs.core.PersistentArrayMap.EMPTY);
cljs.core.swap_BANG_.call(null,game_state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",1107812952),new_board,new cljs.core.Keyword(null,"whose-turn","whose-turn",2205732108),((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"alternate-moves","alternate-moves",1707655969)))?goban_lib.core.next_color.call(null,new cljs.core.Keyword(null,"whose-turn","whose-turn",2205732108).cljs$core$IFn$_invoke$arity$1(game)):new cljs.core.Keyword(null,"whose-turn","whose-turn",2205732108).cljs$core$IFn$_invoke$arity$1(game)),new cljs.core.Keyword(null,"turn-number","turn-number",4591493643),(new cljs.core.Keyword(null,"turn-number","turn-number",4591493643).cljs$core$IFn$_invoke$arity$1(game) + 1),new cljs.core.Keyword(null,"ko-history","ko-history",4741801117),cljs.core.conj.call(null,new cljs.core.Keyword(null,"ko-history","ko-history",4741801117).cljs$core$IFn$_invoke$arity$1(game),goban_lib.core.hash_board.call(null,new_board)));
cljs.core.swap_BANG_.call(null,goban_client.core.history,cljs.core.conj,cljs.core.deref.call(null,game_state));
} else
{}
if(cljs.core.truth_(new_board))
{return null;
} else
{cljs.core.reset_BANG_.call(null,goban_client.core.alert_msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"err",new cljs.core.Keyword(null,"msg","msg",1014012659),"Invalid move!"], null));
return setTimeout((function (){return cljs.core.reset_BANG_.call(null,goban_client.core.alert_msg,cljs.core.PersistentArrayMap.EMPTY);
}),2000);
}
} else
{return null;
}
});
goban_client.edit.undo_last_move = (function undo_last_move(evt){evt.preventDefault();
if(cljs.core.not.call(null,cljs.core.deref.call(null,goban_client.edit.input_locked)))
{var hist = cljs.core.deref.call(null,goban_client.core.history);var game = cljs.core.deref.call(null,goban_client.core.game_state);cljs.core.swap_BANG_.call(null,goban_client.core.history,cljs.core.pop);
return cljs.core.reset_BANG_.call(null,goban_client.core.game_state,cljs.core.last.call(null,cljs.core.pop.call(null,hist)));
} else
{return null;
}
});
goban_client.edit.clear_history = (function clear_history(evt){evt.preventDefault();
if(cljs.core.truth_(confirm("Really clear history?")))
{return goban_client.core.reset_history_BANG_.call(null);
} else
{return null;
}
});
goban_client.edit.switch_modes = (function switch_modes(new_mode,evt){cljs.core.reset_BANG_.call(null,goban_client.edit.placement_mode,new_mode);
if(cljs.core._EQ_.call(null,new_mode,new cljs.core.Keyword(null,"alternate-moves","alternate-moves",1707655969)))
{return null;
} else
{return cljs.core.swap_BANG_.call(null,goban_client.core.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"whose-turn","whose-turn",2205732108),new_mode);
}
});
goban_client.edit.history_slider = (function history_slider(){var viewing_history = cljs.core.deref.call(null,goban_client.edit.input_locked);var hist = cljs.core.deref.call(null,goban_client.core.history);var mode = cljs.core.deref.call(null,goban_client.edit.placement_mode);if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"play-vs","play-vs",520282984),mode))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#history-slider","div#history-slider",4331770334),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",1013907517),"History"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"range",new cljs.core.Keyword(null,"max","max",1014012118),cljs.core.count.call(null,hist),new cljs.core.Keyword(null,"min","min",1014012356),0,new cljs.core.Keyword(null,"value","value",1125876963),(cljs.core.truth_(viewing_history)?null:cljs.core.count.call(null,hist)),new cljs.core.Keyword(null,"on-change","on-change",606853840),goban_client.edit.goto_history], null)], null)], null);
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1017440956)], null);
}
});
goban_client.edit.history_buttons = (function history_buttons(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#history-buttons","div#history-buttons",3149151944),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.undo","a.undo",3837008323),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",1017115293),"#",new cljs.core.Keyword(null,"on-click","on-click",1416542092),goban_client.edit.undo_last_move], null),"\u21A9 Undo"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.clear","a.clear",2614102514),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",1017115293),"#",new cljs.core.Keyword(null,"on-click","on-click",1416542092),goban_client.edit.clear_history], null),"\u00D7 Clear"], null)], null);
});
goban_client.edit.mode_switcher = (function mode_switcher(){var mode = cljs.core.deref.call(null,goban_client.edit.placement_mode);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#mode-switcher","div#mode-switcher",4448415435),(function (){var iter__4105__auto__ = (function iter__8775(s__8776){return (new cljs.core.LazySeq(null,(function (){var s__8776__$1 = s__8776;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8776__$1);if(temp__4092__auto__)
{var s__8776__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8776__$2))
{var c__4103__auto__ = cljs.core.chunk_first.call(null,s__8776__$2);var size__4104__auto__ = cljs.core.count.call(null,c__4103__auto__);var b__8778 = cljs.core.chunk_buffer.call(null,size__4104__auto__);if((function (){var i__8777 = 0;while(true){
if((i__8777 < size__4104__auto__))
{var m = cljs.core._nth.call(null,c__4103__auto__,i__8777);cljs.core.chunk_append.call(null,b__8778,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),"placement-mode",new cljs.core.Keyword(null,"id","id",1013907597),[cljs.core.str("ms-"),cljs.core.str(m)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1416542092),((function (i__8777,m,c__4103__auto__,size__4104__auto__,b__8778,s__8776__$2,temp__4092__auto__){
return (function (p1__8770_SHARP_){return goban_client.edit.switch_modes.call(null,m,p1__8770_SHARP_);
});})(i__8777,m,c__4103__auto__,size__4104__auto__,b__8778,s__8776__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"checked","checked",1756218137),cljs.core._EQ_.call(null,mode,m)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",1014005819),[cljs.core.str("ms-"),cljs.core.str(m)].join('')], null),goban_client.edit.mode_labels.call(null,m)], null)], null));
{
var G__8779 = (i__8777 + 1);
i__8777 = G__8779;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8778),iter__8775.call(null,cljs.core.chunk_rest.call(null,s__8776__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8778),null);
}
} else
{var m = cljs.core.first.call(null,s__8776__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),"placement-mode",new cljs.core.Keyword(null,"id","id",1013907597),[cljs.core.str("ms-"),cljs.core.str(m)].join(''),new cljs.core.Keyword(null,"on-click","on-click",1416542092),((function (m,s__8776__$2,temp__4092__auto__){
return (function (p1__8770_SHARP_){return goban_client.edit.switch_modes.call(null,m,p1__8770_SHARP_);
});})(m,s__8776__$2,temp__4092__auto__))
,new cljs.core.Keyword(null,"checked","checked",1756218137),cljs.core._EQ_.call(null,mode,m)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",1014005819),[cljs.core.str("ms-"),cljs.core.str(m)].join('')], null),goban_client.edit.mode_labels.call(null,m)], null)], null),iter__8775.call(null,cljs.core.rest.call(null,s__8776__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4105__auto__.call(null,cljs.core.keys.call(null,goban_client.edit.mode_labels));
})()], null);
});
goban_client.edit.sidebar = (function sidebar(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goban_client.edit.history_slider], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goban_client.edit.history_buttons], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goban_client.edit.mode_switcher], null)], null);
});
cljs.core.reset_BANG_.call(null,goban_client.core.place_stone,goban_client.edit.place_stone);
goban_client.edit.run = (function run(){cloact.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goban_client.core.board], null),document.getElementById("board-container"));
return cloact.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goban_client.edit.sidebar], null),document.getElementById("sidebar"));
});
goog.exportSymbol('goban_client.edit.run', goban_client.edit.run);

//# sourceMappingURL=edit.js.map