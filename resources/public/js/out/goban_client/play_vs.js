// Compiled by ClojureScript 0.0-2138
goog.provide('goban_client.play_vs');
goog.require('cljs.core');
goog.require('cloact.core');
goog.require('goban_client.core');
goog.require('goban_client.core');
goog.require('goban_client.core');
goog.require('cloact.core');
goog.require('cloact.core');
goog.require('goban_lib.core');
goog.require('goban_lib.core');
goog.require('goban_client.comm');
goog.require('goban_client.comm');
goban_client.play_vs.input_locked = cloact.core.atom.call(null,false);
goban_client.play_vs.my_color = cloact.core.atom.call(null,new cljs.core.Keyword(null,"black","black",1107723121));
goban_client.play_vs.chat_messages = cloact.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
goban_client.play_vs.place_stone_in_game = (function place_stone_in_game(game,xy){var shiner = goban_lib.core.place_stone.call(null,new cljs.core.Keyword(null,"board","board",1107812952).cljs$core$IFn$_invoke$arity$1(game),new cljs.core.Keyword(null,"whose-turn","whose-turn",2205732108).cljs$core$IFn$_invoke$arity$1(game),xy,new cljs.core.Keyword(null,"ko-history","ko-history",4741801117).cljs$core$IFn$_invoke$arity$1(game));return shiner;
});
goban_client.play_vs.finalize_move_BANG_ = (function finalize_move_BANG_(game,new_board){return cljs.core.swap_BANG_.call(null,goban_client.core.game_state,cljs.core.assoc,new cljs.core.Keyword(null,"board","board",1107812952),new_board,new cljs.core.Keyword(null,"whose-turn","whose-turn",2205732108),goban_lib.core.next_color.call(null,new cljs.core.Keyword(null,"whose-turn","whose-turn",2205732108).cljs$core$IFn$_invoke$arity$1(game)),new cljs.core.Keyword(null,"turn-number","turn-number",4591493643),(new cljs.core.Keyword(null,"turn-number","turn-number",4591493643).cljs$core$IFn$_invoke$arity$1(game) + 1),new cljs.core.Keyword(null,"ko-history","ko-history",4741801117),cljs.core.conj.call(null,new cljs.core.Keyword(null,"ko-history","ko-history",4741801117).cljs$core$IFn$_invoke$arity$1(game),goban_lib.core.hash_board.call(null,new_board)));
});
goban_client.play_vs.place_stone = (function place_stone(p__8931){var vec__8933 = p__8931;var x = cljs.core.nth.call(null,vec__8933,0,null);var y = cljs.core.nth.call(null,vec__8933,1,null);var xy = vec__8933;var game = cljs.core.deref.call(null,goban_client.core.game_state);if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,goban_client.play_vs.my_color),new cljs.core.Keyword(null,"whose-turn","whose-turn",2205732108).cljs$core$IFn$_invoke$arity$1(game)))
{var new_board = goban_client.play_vs.place_stone_in_game.call(null,game,xy);if(cljs.core.truth_(new_board))
{cljs.core.reset_BANG_.call(null,goban_client.core.alert_msg,cljs.core.PersistentArrayMap.EMPTY);
goban_client.play_vs.finalize_move_BANG_.call(null,game,new_board);
cljs.core.swap_BANG_.call(null,goban_client.core.history,cljs.core.conj,cljs.core.deref.call(null,goban_client.core.game_state));
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
goban_client.play_vs.submit_chat_msg = (function submit_chat_msg(evt){return evt.preventDefault();
});
goban_client.play_vs.whose_turn_sign = (function whose_turn_sign(){var turn = new cljs.core.Keyword(null,"whose-turn","whose-turn",2205732108).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,goban_client.core.game_state));var class$ = ((cljs.core._EQ_.call(null,turn,cljs.core.deref.call(null,goban_client.play_vs.my_color)))?"mine":"opponent");return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#whose-turn","div#whose-turn",2030036030),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),class$], null)], null);
});
goban_client.play_vs.chat_pane = (function chat_pane(){var message = cljs.core.deref.call(null,goban_client.play_vs.chat_messages);return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form.chat","form.chat",2777877940),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1076954936),goban_client.play_vs.submit_chat_msg], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",1013907516),"Chat..."], null),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol.log","ol.log",4292957989),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),"testing message one"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.opponent","li.opponent",3626014240),"testing message one"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),"testing message one"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.opponent","li.opponent",3626014240),"testing message one"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),"testing message one"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.opponent","li.opponent",3626014240),"testing message one"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.opponent","li.opponent",3626014240),"testing message one"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),"testing message one"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),"testing imessage 2"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"text",new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"Type message here"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1017479852),"submit"], null)], null)], null);
});
goban_client.play_vs.scoreboard = (function scoreboard(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#scoreboard","div#scoreboard",2424702520),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.label","div.label",2034463433),"Score:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.black","div.black",2025554900),"1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.white","div.white",2044837886),"2"], null)], null);
});
goban_client.play_vs.sidebar = (function sidebar(){return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goban_client.play_vs.whose_turn_sign], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goban_client.play_vs.scoreboard], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goban_client.play_vs.chat_pane], null)], null);
});
cljs.core.reset_BANG_.call(null,goban_client.core.place_stone,goban_client.play_vs.place_stone);
goban_client.play_vs.run = (function run(){cloact.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goban_client.core.board], null),document.getElementById("board-container"));
return cloact.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [goban_client.play_vs.sidebar], null),document.getElementById("sidebar"));
});
goog.exportSymbol('goban_client.play_vs.run', goban_client.play_vs.run);

//# sourceMappingURL=play_vs.js.map