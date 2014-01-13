// Compiled by ClojureScript 0.0-2138
goog.provide('goban');
goog.require('cljs.core');
goog.require('cloact.core');
goog.require('goban_client.utils');
goog.require('cljs.core.async');
goog.require('chord.client');
goog.require('goban_lib.core');
goog.require('goban_lib.core');
goog.require('goban_client.utils');
goog.require('cloact.core');
goog.require('cloact.core');
goog.require('chord.client');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
goban.dom_pieces = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"black","black",1107723121),new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"white","white",1127006107),new cljs.core.Keyword(null,"i","i",1013904347)], null);
goban.dom_board_classes = new cljs.core.PersistentArrayMap(null, 5, [19,"nineteen",13,"thirteen",9,"nine",new cljs.core.Keyword(null,"black","black",1107723121),"black",new cljs.core.Keyword(null,"white","white",1127006107),"white"], null);
goban.history = cloact.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
goban.input_locked = cloact.core.atom.call(null,false);
goban.alert_msg = cloact.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
goban.app_state = cloact.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"mode","mode",1017261333),new cljs.core.Keyword(null,"alternate-moves","alternate-moves",1707655969),new cljs.core.Keyword(null,"turn-number","turn-number",4591493643),0,new cljs.core.Keyword(null,"whose-turn","whose-turn",2205732108),new cljs.core.Keyword(null,"black","black",1107723121),new cljs.core.Keyword(null,"ko-history","ko-history",4741801117),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"board-size","board-size",2724554234),goban_lib.core.default_board_size,new cljs.core.Keyword(null,"board","board",1107812952),goban_lib.core.empty_board.call(null,goban_lib.core.default_board_size)], null));
goban.goto_history = (function goto_history(evt){var turn = parseInt(evt.target.value);var hist = cljs.core.deref.call(null,goban.history);if((turn < cljs.core.count.call(null,hist)))
{cljs.core.reset_BANG_.call(null,goban.app_state,hist.call(null,turn));
} else
{}
return cljs.core.reset_BANG_.call(null,goban.input_locked,cljs.core.not_EQ_.call(null,turn,(cljs.core.count.call(null,hist) - 1)));
});
goban.place_stone = (function place_stone(p__8708){var vec__8710 = p__8708;var x = cljs.core.nth.call(null,vec__8710,0,null);var y = cljs.core.nth.call(null,vec__8710,1,null);var xy = vec__8710;if(cljs.core.not.call(null,cljs.core.deref.call(null,goban.input_locked)))
{var app = cljs.core.deref.call(null,goban.app_state);var new_board = goban_lib.core.place_stone.call(null,new cljs.core.Keyword(null,"board","board",1107812952).cljs$core$IFn$_invoke$arity$1(app),new cljs.core.Keyword(null,"whose-turn","whose-turn",2205732108).cljs$core$IFn$_invoke$arity$1(app),xy,new cljs.core.Keyword(null,"ko-history","ko-history",4741801117).cljs$core$IFn$_invoke$arity$1(app));if(cljs.core.truth_(new_board))
{cljs.core.swap_BANG_.call(null,goban.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",1107812952),new_board);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"alternate-moves","alternate-moves",1707655969),new cljs.core.Keyword(null,"mode","mode",1017261333).cljs$core$IFn$_invoke$arity$1(app)))
{cljs.core.reset_BANG_.call(null,goban.alert_msg,cljs.core.PersistentArrayMap.EMPTY);
cljs.core.swap_BANG_.call(null,goban.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"whose-turn","whose-turn",2205732108),goban_lib.core.next_color.call(null,new cljs.core.Keyword(null,"whose-turn","whose-turn",2205732108).cljs$core$IFn$_invoke$arity$1(app)));
cljs.core.swap_BANG_.call(null,goban.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"turn-number","turn-number",4591493643),(new cljs.core.Keyword(null,"turn-number","turn-number",4591493643).cljs$core$IFn$_invoke$arity$1(app) + 1));
cljs.core.swap_BANG_.call(null,goban.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"ko-history","ko-history",4741801117),cljs.core.conj.call(null,new cljs.core.Keyword(null,"ko-history","ko-history",4741801117).cljs$core$IFn$_invoke$arity$1(app),goban_lib.core.hash_board.call(null,new_board)));
cljs.core.swap_BANG_.call(null,goban.history,cljs.core.conj,cljs.core.deref.call(null,goban.app_state));
} else
{}
} else
{}
if(cljs.core.truth_(new_board))
{return null;
} else
{cljs.core.reset_BANG_.call(null,goban.alert_msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",1108647146),"err",new cljs.core.Keyword(null,"msg","msg",1014012659),"Invalid move!"], null));
return setTimeout((function (){return cljs.core.reset_BANG_.call(null,goban.alert_msg,cljs.core.PersistentArrayMap.EMPTY);
}),2000);
}
} else
{return null;
}
});
goban.stone = (function stone(p__8711){var map__8713 = p__8711;var map__8713__$1 = ((cljs.core.seq_QMARK_.call(null,map__8713))?cljs.core.apply.call(null,cljs.core.hash_map,map__8713):map__8713);var color = cljs.core.get.call(null,map__8713__$1,new cljs.core.Keyword(null,"color","color",1108746965));return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goban.dom_pieces.call(null,color)], null);
});
goban.point = (function point(p__8714){var map__8716 = p__8714;var map__8716__$1 = ((cljs.core.seq_QMARK_.call(null,map__8716))?cljs.core.apply.call(null,cljs.core.hash_map,map__8716):map__8716);var s = cljs.core.get.call(null,map__8716__$1,new cljs.core.Keyword(null,"stone","stone",1123675095));var col = cljs.core.get.call(null,map__8716__$1,new cljs.core.Keyword(null,"col","col",1014002930));var row = cljs.core.get.call(null,map__8716__$1,new cljs.core.Keyword(null,"row","row",1014017356));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",1014010321),goban_client.utils.guid.call(null),new cljs.core.Keyword(null,"className","className",1004015509),(cljs.core.truth_(s)?"occupied":null),new cljs.core.Keyword(null,"on-click","on-click",1416542092),(function (){return goban.place_stone.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col,row], null));
})], null),(cljs.core.truth_(s)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goban.stone,s], null):"")], null);
});
goban.row = (function row(p__8717){var map__8723 = p__8717;var map__8723__$1 = ((cljs.core.seq_QMARK_.call(null,map__8723))?cljs.core.apply.call(null,cljs.core.hash_map,map__8723):map__8723);var row_num = cljs.core.get.call(null,map__8723__$1,new cljs.core.Keyword(null,"row-num","row-num",2399293573));var row_data = cljs.core.get.call(null,map__8723__$1,new cljs.core.Keyword(null,"row-data","row-data",1010983727));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",1014010321),goban_client.utils.guid.call(null)], null),(function (){var iter__4105__auto__ = (function iter__8724(s__8725){return (new cljs.core.LazySeq(null,(function (){var s__8725__$1 = s__8725;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8725__$1);if(temp__4092__auto__)
{var s__8725__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8725__$2))
{var c__4103__auto__ = cljs.core.chunk_first.call(null,s__8725__$2);var size__4104__auto__ = cljs.core.count.call(null,c__4103__auto__);var b__8727 = cljs.core.chunk_buffer.call(null,size__4104__auto__);if((function (){var i__8726 = 0;while(true){
if((i__8726 < size__4104__auto__))
{var i = cljs.core._nth.call(null,c__4103__auto__,i__8726);cljs.core.chunk_append.call(null,b__8727,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goban.point,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stone","stone",1123675095),row_data.call(null,i),new cljs.core.Keyword(null,"row","row",1014017356),row_num,new cljs.core.Keyword(null,"col","col",1014002930),i], null)], null));
{
var G__8728 = (i__8726 + 1);
i__8726 = G__8728;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8727),iter__8724.call(null,cljs.core.chunk_rest.call(null,s__8725__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8727),null);
}
} else
{var i = cljs.core.first.call(null,s__8725__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goban.point,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stone","stone",1123675095),row_data.call(null,i),new cljs.core.Keyword(null,"row","row",1014017356),row_num,new cljs.core.Keyword(null,"col","col",1014002930),i], null)], null),iter__8724.call(null,cljs.core.rest.call(null,s__8725__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4105__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,row_data)));
})()], null);
});
goban.board = (function board(){var app = cljs.core.deref.call(null,goban.app_state);var board_size = new cljs.core.Keyword(null,"board-size","board-size",2724554234).cljs$core$IFn$_invoke$arity$1(app);var board__$1 = new cljs.core.Keyword(null,"board","board",1107812952).cljs$core$IFn$_invoke$arity$1(app);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#board","div#board",1710724070),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",1004015509),[cljs.core.str(goban.dom_board_classes.call(null,board_size)),cljs.core.str(" "),cljs.core.str("turn-"),cljs.core.str(goban.dom_board_classes.call(null,new cljs.core.Keyword(null,"whose-turn","whose-turn",2205732108).cljs$core$IFn$_invoke$arity$1(app)))].join('')], null),(function (){var iter__4105__auto__ = (function iter__8733(s__8734){return (new cljs.core.LazySeq(null,(function (){var s__8734__$1 = s__8734;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8734__$1);if(temp__4092__auto__)
{var s__8734__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8734__$2))
{var c__4103__auto__ = cljs.core.chunk_first.call(null,s__8734__$2);var size__4104__auto__ = cljs.core.count.call(null,c__4103__auto__);var b__8736 = cljs.core.chunk_buffer.call(null,size__4104__auto__);if((function (){var i__8735 = 0;while(true){
if((i__8735 < size__4104__auto__))
{var i = cljs.core._nth.call(null,c__4103__auto__,i__8735);cljs.core.chunk_append.call(null,b__8736,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goban.row,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row-data","row-data",1010983727),board__$1.call(null,i),new cljs.core.Keyword(null,"row-num","row-num",2399293573),i], null)], null));
{
var G__8737 = (i__8735 + 1);
i__8735 = G__8737;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8736),iter__8733.call(null,cljs.core.chunk_rest.call(null,s__8734__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8736),null);
}
} else
{var i = cljs.core.first.call(null,s__8734__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goban.row,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row-data","row-data",1010983727),board__$1.call(null,i),new cljs.core.Keyword(null,"row-num","row-num",2399293573),i], null)], null),iter__8733.call(null,cljs.core.rest.call(null,s__8734__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4105__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,board__$1)));
})()], null);
});
goban.history_slider = (function history_slider(){var viewing_history = cljs.core.deref.call(null,goban.input_locked);var hist = cljs.core.deref.call(null,goban.history);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#history-slider","div#history-slider",4331770334),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",1013907517),"History"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"range",new cljs.core.Keyword(null,"max","max",1014012118),cljs.core.count.call(null,hist),new cljs.core.Keyword(null,"min","min",1014012356),0,new cljs.core.Keyword(null,"value","value",1125876963),(cljs.core.truth_(viewing_history)?null:cljs.core.count.call(null,hist)),new cljs.core.Keyword(null,"on-change","on-change",606853840),goban.goto_history], null)], null)], null);
});
goban.alert_box = (function alert_box(){var aaa = cljs.core.deref.call(null,goban.alert_msg);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#alert","div#alert",1709715036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",1004015509),new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(aaa)], null),(function (){var or__3394__auto__ = new cljs.core.Keyword(null,"msg","msg",1014012659).cljs$core$IFn$_invoke$arity$1(aaa);if(cljs.core.truth_(or__3394__auto__))
{return or__3394__auto__;
} else
{return " ";
}
})()], null);
});
goban.sidebar = (function sidebar(){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goban.history_slider], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goban.alert_box], null)], null);
});
goban.run = (function run(){cloact.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goban.board], null),document.getElementById("board-container"));
return cloact.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goban.sidebar], null),document.getElementById("sidebar"));
});
goog.exportSymbol('goban.run', goban.run);

//# sourceMappingURL=goban.js.map