// Compiled by ClojureScript 0.0-2138
goog.provide('goban_client.core');
goog.require('cljs.core');
goog.require('cloact.core');
goog.require('goban_client.utils');
goog.require('goban_lib.core');
goog.require('goban_lib.core');
goog.require('goban_client.utils');
goog.require('cloact.core');
cljs.core.enable_console_print_BANG_.call(null);
goban_client.core.dom_pieces = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"black","black",1107723121),new cljs.core.Keyword(null,"b","b",1013904340),new cljs.core.Keyword(null,"white","white",1127006107),new cljs.core.Keyword(null,"i","i",1013904347)], null);
goban_client.core.dom_board_classes = new cljs.core.PersistentArrayMap(null, 5, [19,"nineteen",13,"thirteen",9,"nine",new cljs.core.Keyword(null,"black","black",1107723121),"black",new cljs.core.Keyword(null,"white","white",1127006107),"white"], null);
goban_client.core.history = cloact.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
goban_client.core.alert_msg = cloact.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
goban_client.core.place_stone = cloact.core.atom.call(null,(function (){return cljs.core.List.EMPTY;
}));
goban_client.core.game_state = cloact.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"turn-number","turn-number",4591493643),0,new cljs.core.Keyword(null,"whose-turn","whose-turn",2205732108),new cljs.core.Keyword(null,"black","black",1107723121),new cljs.core.Keyword(null,"ko-history","ko-history",4741801117),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"board-size","board-size",2724554234),goban_lib.core.default_board_size,new cljs.core.Keyword(null,"board","board",1107812952),goban_lib.core.empty_board.call(null,goban_lib.core.default_board_size)], null));
goban_client.core.reset_history_BANG_ = (function reset_history_BANG_(){cljs.core.swap_BANG_.call(null,goban_client.core.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"ko-history","ko-history",4741801117),cljs.core.PersistentHashSet.EMPTY);
return cljs.core.reset_BANG_.call(null,goban_client.core.history,cljs.core.PersistentVector.EMPTY);
});
goban_client.core.stone = (function stone(p__8780){var map__8782 = p__8780;var map__8782__$1 = ((cljs.core.seq_QMARK_.call(null,map__8782))?cljs.core.apply.call(null,cljs.core.hash_map,map__8782):map__8782);var color = cljs.core.get.call(null,map__8782__$1,new cljs.core.Keyword(null,"color","color",1108746965));return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goban_client.core.dom_pieces.call(null,color)], null);
});
goban_client.core.point = (function point(p__8783){var map__8785 = p__8783;var map__8785__$1 = ((cljs.core.seq_QMARK_.call(null,map__8785))?cljs.core.apply.call(null,cljs.core.hash_map,map__8785):map__8785);var col = cljs.core.get.call(null,map__8785__$1,new cljs.core.Keyword(null,"col","col",1014002930));var row = cljs.core.get.call(null,map__8785__$1,new cljs.core.Keyword(null,"row","row",1014017356));var stn = cljs.core.get.call(null,map__8785__$1,new cljs.core.Keyword(null,"stn","stn",1014018463));var handler = cljs.core.deref.call(null,goban_client.core.place_stone);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",1014010321),goban_client.utils.guid.call(null),new cljs.core.Keyword(null,"className","className",1004015509),(cljs.core.truth_(stn)?"occupied":null),new cljs.core.Keyword(null,"on-click","on-click",1416542092),(function (){return handler.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [col,row], null));
})], null),(cljs.core.truth_(stn)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goban_client.core.stone,stn], null):"")], null);
});
goban_client.core.row = (function row(p__8786){var map__8792 = p__8786;var map__8792__$1 = ((cljs.core.seq_QMARK_.call(null,map__8792))?cljs.core.apply.call(null,cljs.core.hash_map,map__8792):map__8792);var row_num = cljs.core.get.call(null,map__8792__$1,new cljs.core.Keyword(null,"row-num","row-num",2399293573));var row_data = cljs.core.get.call(null,map__8792__$1,new cljs.core.Keyword(null,"row-data","row-data",1010983727));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",1014010321),goban_client.utils.guid.call(null)], null),(function (){var iter__4105__auto__ = (function iter__8793(s__8794){return (new cljs.core.LazySeq(null,(function (){var s__8794__$1 = s__8794;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8794__$1);if(temp__4092__auto__)
{var s__8794__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8794__$2))
{var c__4103__auto__ = cljs.core.chunk_first.call(null,s__8794__$2);var size__4104__auto__ = cljs.core.count.call(null,c__4103__auto__);var b__8796 = cljs.core.chunk_buffer.call(null,size__4104__auto__);if((function (){var i__8795 = 0;while(true){
if((i__8795 < size__4104__auto__))
{var i = cljs.core._nth.call(null,c__4103__auto__,i__8795);cljs.core.chunk_append.call(null,b__8796,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goban_client.core.point,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stn","stn",1014018463),row_data.call(null,i),new cljs.core.Keyword(null,"row","row",1014017356),row_num,new cljs.core.Keyword(null,"col","col",1014002930),i], null)], null));
{
var G__8797 = (i__8795 + 1);
i__8795 = G__8797;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8796),iter__8793.call(null,cljs.core.chunk_rest.call(null,s__8794__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8796),null);
}
} else
{var i = cljs.core.first.call(null,s__8794__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goban_client.core.point,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stn","stn",1014018463),row_data.call(null,i),new cljs.core.Keyword(null,"row","row",1014017356),row_num,new cljs.core.Keyword(null,"col","col",1014002930),i], null)], null),iter__8793.call(null,cljs.core.rest.call(null,s__8794__$2)));
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
goban_client.core.alert_box = (function alert_box(){var aaa = cljs.core.deref.call(null,goban_client.core.alert_msg);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#alert","div#alert",1709715036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",1004015509),new cljs.core.Keyword(null,"class","class",1108647146).cljs$core$IFn$_invoke$arity$1(aaa)], null),(function (){var or__3394__auto__ = new cljs.core.Keyword(null,"msg","msg",1014012659).cljs$core$IFn$_invoke$arity$1(aaa);if(cljs.core.truth_(or__3394__auto__))
{return or__3394__auto__;
} else
{return " ";
}
})()], null);
});
goban_client.core.board = (function board(){var game = cljs.core.deref.call(null,goban_client.core.game_state);var board_size = new cljs.core.Keyword(null,"board-size","board-size",2724554234).cljs$core$IFn$_invoke$arity$1(game);var board__$1 = new cljs.core.Keyword(null,"board","board",1107812952).cljs$core$IFn$_invoke$arity$1(game);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goban_client.core.alert_box], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#board","div#board",1710724070),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",1004015509),[cljs.core.str(goban_client.core.dom_board_classes.call(null,board_size)),cljs.core.str(" "),cljs.core.str("turn-"),cljs.core.str(goban_client.core.dom_board_classes.call(null,new cljs.core.Keyword(null,"whose-turn","whose-turn",2205732108).cljs$core$IFn$_invoke$arity$1(game)))].join('')], null),(function (){var iter__4105__auto__ = (function iter__8802(s__8803){return (new cljs.core.LazySeq(null,(function (){var s__8803__$1 = s__8803;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__8803__$1);if(temp__4092__auto__)
{var s__8803__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__8803__$2))
{var c__4103__auto__ = cljs.core.chunk_first.call(null,s__8803__$2);var size__4104__auto__ = cljs.core.count.call(null,c__4103__auto__);var b__8805 = cljs.core.chunk_buffer.call(null,size__4104__auto__);if((function (){var i__8804 = 0;while(true){
if((i__8804 < size__4104__auto__))
{var i = cljs.core._nth.call(null,c__4103__auto__,i__8804);cljs.core.chunk_append.call(null,b__8805,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goban_client.core.row,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row-data","row-data",1010983727),board__$1.call(null,i),new cljs.core.Keyword(null,"row-num","row-num",2399293573),i], null)], null));
{
var G__8806 = (i__8804 + 1);
i__8804 = G__8806;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8805),iter__8802.call(null,cljs.core.chunk_rest.call(null,s__8803__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__8805),null);
}
} else
{var i = cljs.core.first.call(null,s__8803__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goban_client.core.row,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row-data","row-data",1010983727),board__$1.call(null,i),new cljs.core.Keyword(null,"row-num","row-num",2399293573),i], null)], null),iter__8802.call(null,cljs.core.rest.call(null,s__8803__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4105__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,board__$1)));
})()], null)], null);
});

//# sourceMappingURL=core.js.map