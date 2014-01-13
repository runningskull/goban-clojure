// Compiled by ClojureScript 0.0-2138
goog.provide('goban_lib.core');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('clojure.set');
goban_lib.core.default_board_size = 19;
goban_lib.core.xy__GT_yx = (function xy__GT_yx(points){return cljs.core.mapv.call(null,cljs.core.vec,cljs.core.map.call(null,cljs.core.rseq,points));
});
goban_lib.core.next_color = (function next_color(color){if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"black","black",1107723121),color))
{return new cljs.core.Keyword(null,"white","white",1127006107);
} else
{return new cljs.core.Keyword(null,"black","black",1107723121);
}
});
goban_lib.core.hash_board = (function hash_board(board){return cljs.core.hash.call(null,cljs.core.map.call(null,(function (p1__9059_SHARP_){return cljs.core.map.call(null,new cljs.core.Keyword(null,"color","color",1108746965),p1__9059_SHARP_);
}),board));
});
/**
* @param {...*} var_args
*/
goban_lib.core.empty_board = (function() { 
var empty_board__delegate = function (p__9060){var vec__9062 = p__9060;var board_size = cljs.core.nth.call(null,vec__9062,0,null);var size = (function (){var or__3394__auto__ = board_size;if(cljs.core.truth_(or__3394__auto__))
{return or__3394__auto__;
} else
{return goban_lib.core.default_board_size;
}
})();return cljs.core.vec.call(null,cljs.core.repeat.call(null,size,cljs.core.vec.call(null,cljs.core.repeat.call(null,size,null))));
};
var empty_board = function (var_args){
var p__9060 = null;if (arguments.length > 0) {
  p__9060 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return empty_board__delegate.call(this,p__9060);};
empty_board.cljs$lang$maxFixedArity = 0;
empty_board.cljs$lang$applyTo = (function (arglist__9063){
var p__9060 = cljs.core.seq(arglist__9063);
return empty_board__delegate(p__9060);
});
empty_board.cljs$core$IFn$_invoke$arity$variadic = empty_board__delegate;
return empty_board;
})()
;
/**
* @param {...*} var_args
*/
goban_lib.core.new_stone = (function() { 
var new_stone__delegate = function (color,p__9064){var vec__9066 = p__9064;var chain = cljs.core.nth.call(null,vec__9066,0,null);return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1108746965),color,new cljs.core.Keyword(null,"chain","chain",1108527667),chain], null);
};
var new_stone = function (color,var_args){
var p__9064 = null;if (arguments.length > 1) {
  p__9064 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return new_stone__delegate.call(this,color,p__9064);};
new_stone.cljs$lang$maxFixedArity = 1;
new_stone.cljs$lang$applyTo = (function (arglist__9067){
var color = cljs.core.first(arglist__9067);
var p__9064 = cljs.core.rest(arglist__9067);
return new_stone__delegate(color,p__9064);
});
new_stone.cljs$core$IFn$_invoke$arity$variadic = new_stone__delegate;
return new_stone;
})()
;
goban_lib.core.in_bounds_QMARK_ = (function in_bounds_QMARK_(p__9068,board_size){var vec__9070 = p__9068;var x = cljs.core.nth.call(null,vec__9070,0,null);var y = cljs.core.nth.call(null,vec__9070,1,null);var size = ((function (){var or__3394__auto__ = board_size;if(cljs.core.truth_(or__3394__auto__))
{return or__3394__auto__;
} else
{return goban_lib.core.default_board_size;
}
})() - 1);return !(((x < 0)) || ((y < 0)) || ((x > size)) || ((y > size)));
});
goban_lib.core.get_stone = (function get_stone(board,p__9071){var vec__9073 = p__9071;var x = cljs.core.nth.call(null,vec__9073,0,null);var y = cljs.core.nth.call(null,vec__9073,1,null);var xy = vec__9073;if(goban_lib.core.in_bounds_QMARK_.call(null,xy,cljs.core.count.call(null,board)))
{return board.call(null,y).call(null,x);
} else
{return null;
}
});
goban_lib.core.occupied_QMARK_ = (function occupied_QMARK_(board,p__9074){var vec__9076 = p__9074;var x = cljs.core.nth.call(null,vec__9076,0,null);var y = cljs.core.nth.call(null,vec__9076,1,null);var xy = vec__9076;return !((goban_lib.core.get_stone.call(null,board,xy) == null));
});
/**
* @param {...*} var_args
*/
goban_lib.core.neighboring_coords = (function() { 
var neighboring_coords__delegate = function (p__9078,p__9079){var vec__9082 = p__9078;var x = cljs.core.nth.call(null,vec__9082,0,null);var y = cljs.core.nth.call(null,vec__9082,1,null);var vec__9083 = p__9079;var board_size = cljs.core.nth.call(null,vec__9083,0,null);return cljs.core.filter.call(null,(function (p1__9077_SHARP_){return goban_lib.core.in_bounds_QMARK_.call(null,p1__9077_SHARP_,board_size);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - 1),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + 1),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - 1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + 1)], null)], null));
};
var neighboring_coords = function (p__9078,var_args){
var p__9079 = null;if (arguments.length > 1) {
  p__9079 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return neighboring_coords__delegate.call(this,p__9078,p__9079);};
neighboring_coords.cljs$lang$maxFixedArity = 1;
neighboring_coords.cljs$lang$applyTo = (function (arglist__9084){
var p__9078 = cljs.core.first(arglist__9084);
var p__9079 = cljs.core.rest(arglist__9084);
return neighboring_coords__delegate(p__9078,p__9079);
});
neighboring_coords.cljs$core$IFn$_invoke$arity$variadic = neighboring_coords__delegate;
return neighboring_coords;
})()
;
/**
* @param {...*} var_args
*/
goban_lib.core.neighboring_stones = (function() { 
var neighboring_stones__delegate = function (board,p__9088,p__9089){var vec__9092 = p__9088;var x = cljs.core.nth.call(null,vec__9092,0,null);var y = cljs.core.nth.call(null,vec__9092,1,null);var xy = vec__9092;var vec__9093 = p__9089;var color = cljs.core.nth.call(null,vec__9093,0,null);var stones = cljs.core.filter.call(null,(function (p1__9085_SHARP_){return !((p1__9085_SHARP_ == null));
}),cljs.core.map.call(null,(function (p1__9086_SHARP_){return goban_lib.core.get_stone.call(null,board,p1__9086_SHARP_);
}),goban_lib.core.neighboring_coords.call(null,xy,cljs.core.count.call(null,board))));if(cljs.core.truth_(color))
{return cljs.core.filter.call(null,(function (p1__9087_SHARP_){return cljs.core._EQ_.call(null,color,new cljs.core.Keyword(null,"color","color",1108746965).cljs$core$IFn$_invoke$arity$1(p1__9087_SHARP_));
}),stones);
} else
{return stones;
}
};
var neighboring_stones = function (board,p__9088,var_args){
var p__9089 = null;if (arguments.length > 2) {
  p__9089 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return neighboring_stones__delegate.call(this,board,p__9088,p__9089);};
neighboring_stones.cljs$lang$maxFixedArity = 2;
neighboring_stones.cljs$lang$applyTo = (function (arglist__9094){
var board = cljs.core.first(arglist__9094);
arglist__9094 = cljs.core.next(arglist__9094);
var p__9088 = cljs.core.first(arglist__9094);
var p__9089 = cljs.core.rest(arglist__9094);
return neighboring_stones__delegate(board,p__9088,p__9089);
});
neighboring_stones.cljs$core$IFn$_invoke$arity$variadic = neighboring_stones__delegate;
return neighboring_stones;
})()
;
/**
* @param {...*} var_args
*/
goban_lib.core.neighboring_chains = (function() { 
var neighboring_chains__delegate = function (board,p__9095,p__9096){var vec__9099 = p__9095;var x = cljs.core.nth.call(null,vec__9099,0,null);var y = cljs.core.nth.call(null,vec__9099,1,null);var xy = vec__9099;var vec__9100 = p__9096;var color = cljs.core.nth.call(null,vec__9100,0,null);return cljs.core.map.call(null,new cljs.core.Keyword(null,"chain","chain",1108527667),goban_lib.core.neighboring_stones.call(null,board,xy,color));
};
var neighboring_chains = function (board,p__9095,var_args){
var p__9096 = null;if (arguments.length > 2) {
  p__9096 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return neighboring_chains__delegate.call(this,board,p__9095,p__9096);};
neighboring_chains.cljs$lang$maxFixedArity = 2;
neighboring_chains.cljs$lang$applyTo = (function (arglist__9101){
var board = cljs.core.first(arglist__9101);
arglist__9101 = cljs.core.next(arglist__9101);
var p__9095 = cljs.core.first(arglist__9101);
var p__9096 = cljs.core.rest(arglist__9101);
return neighboring_chains__delegate(board,p__9095,p__9096);
});
neighboring_chains.cljs$core$IFn$_invoke$arity$variadic = neighboring_chains__delegate;
return neighboring_chains;
})()
;
goban_lib.core.liberties = (function liberties(board,p__9103){var vec__9105 = p__9103;var x = cljs.core.nth.call(null,vec__9105,0,null);var y = cljs.core.nth.call(null,vec__9105,1,null);var xy = vec__9105;return cljs.core.filter.call(null,(function (p1__9102_SHARP_){return !(goban_lib.core.occupied_QMARK_.call(null,board,p1__9102_SHARP_));
}),goban_lib.core.neighboring_coords.call(null,xy,cljs.core.count.call(null,board)));
});
goban_lib.core.update_stones = (function update_stones(board,points_yx,update){var new_board = board;var remaining_points = points_yx;while(true){
if(cljs.core.not.call(null,cljs.core.seq.call(null,remaining_points)))
{return new_board;
} else
{{
var G__9106 = cljs.core.assoc_in.call(null,new_board,cljs.core.first.call(null,remaining_points),update);
var G__9107 = cljs.core.rest.call(null,remaining_points);
new_board = G__9106;
remaining_points = G__9107;
continue;
}
}
break;
}
});
goban_lib.core.remove_stones = (function remove_stones(board,points){return goban_lib.core.update_stones.call(null,board,goban_lib.core.xy__GT_yx.call(null,points),null);
});
goban_lib.core.update_chained_stones = (function update_chained_stones(board,new_chain){var affected_points = cljs.core.mapv.call(null,(function (p1__9108_SHARP_){return cljs.core.conj.call(null,p1__9108_SHARP_,new cljs.core.Keyword(null,"chain","chain",1108527667));
}),goban_lib.core.xy__GT_yx.call(null,new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(new_chain)));return goban_lib.core.update_stones.call(null,board,affected_points,new_chain);
});
goban_lib.core.blank_chain = (function blank_chain(p__9109){var vec__9111 = p__9109;var x = cljs.core.nth.call(null,vec__9111,0,null);var y = cljs.core.nth.call(null,vec__9111,1,null);var xy = vec__9111;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",4326117461),cljs.core.PersistentHashSet.fromArray([xy], true)], null);
});
goban_lib.core.chain_liberties = (function chain_liberties(board,chain){return cljs.core.set.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,(function (p1__9112_SHARP_){return goban_lib.core.liberties.call(null,board,p1__9112_SHARP_);
}),new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(chain))));
});
goban_lib.core.merge_chains = (function merge_chains(chains){return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"points","points",4326117461),cljs.core.apply.call(null,clojure.set.union,cljs.core.map.call(null,new cljs.core.Keyword(null,"points","points",4326117461),chains))], null);
});
goban_lib.core.dead_QMARK_ = (function dead_QMARK_(board,chain){return cljs.core.not.call(null,cljs.core.seq.call(null,goban_lib.core.chain_liberties.call(null,board,chain)));
});
goban_lib.core.captured_points = (function captured_points(board,p__9114){var vec__9116 = p__9114;var x = cljs.core.nth.call(null,vec__9116,0,null);var y = cljs.core.nth.call(null,vec__9116,1,null);var placed_point = vec__9116;var captured_color = goban_lib.core.next_color.call(null,new cljs.core.Keyword(null,"color","color",1108746965).cljs$core$IFn$_invoke$arity$1(goban_lib.core.get_stone.call(null,board,placed_point)));return new cljs.core.Keyword(null,"points","points",4326117461).cljs$core$IFn$_invoke$arity$1(goban_lib.core.merge_chains.call(null,cljs.core.filter.call(null,(function (p1__9113_SHARP_){return goban_lib.core.dead_QMARK_.call(null,board,p1__9113_SHARP_);
}),goban_lib.core.neighboring_chains.call(null,board,placed_point,captured_color))));
});
goban_lib.core.merge_neighboring_chains = (function merge_neighboring_chains(board,p__9117){var vec__9119 = p__9117;var x = cljs.core.nth.call(null,vec__9119,0,null);var y = cljs.core.nth.call(null,vec__9119,1,null);var xy = vec__9119;var stone = goban_lib.core.get_stone.call(null,board,xy);var new_chain = goban_lib.core.merge_chains.call(null,cljs.core.conj.call(null,goban_lib.core.neighboring_chains.call(null,board,xy,new cljs.core.Keyword(null,"color","color",1108746965).cljs$core$IFn$_invoke$arity$1(stone)),new cljs.core.Keyword(null,"chain","chain",1108527667).cljs$core$IFn$_invoke$arity$1(stone)));return goban_lib.core.update_chained_stones.call(null,board,new_chain);
});
goban_lib.core.remove_captured_chains = (function remove_captured_chains(board,p__9120){var vec__9122 = p__9120;var x = cljs.core.nth.call(null,vec__9122,0,null);var y = cljs.core.nth.call(null,vec__9122,1,null);var placed_point = vec__9122;return goban_lib.core.remove_stones.call(null,board,goban_lib.core.captured_points.call(null,board,placed_point));
});
goban_lib.core.move_captures_QMARK_ = (function move_captures_QMARK_(new_board,p__9123){var vec__9125 = p__9123;var x = cljs.core.nth.call(null,vec__9125,0,null);var y = cljs.core.nth.call(null,vec__9125,1,null);var xy = vec__9125;return (cljs.core.count.call(null,goban_lib.core.captured_points.call(null,new_board,xy)) > 0);
});
goban_lib.core.move_suicides_QMARK_ = (function move_suicides_QMARK_(new_board,p__9126){var vec__9128 = p__9126;var x = cljs.core.nth.call(null,vec__9128,0,null);var y = cljs.core.nth.call(null,vec__9128,1,null);var xy = vec__9128;return goban_lib.core.dead_QMARK_.call(null,new_board,new cljs.core.Keyword(null,"chain","chain",1108527667).cljs$core$IFn$_invoke$arity$1(goban_lib.core.get_stone.call(null,new_board,xy)));
});
goban_lib.core.repeats_position_QMARK_ = (function repeats_position_QMARK_(new_board,ko_history){if(cljs.core.truth_(ko_history))
{return cljs.core.contains_QMARK_.call(null,ko_history,goban_lib.core.hash_board.call(null,new_board));
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
goban_lib.core.valid_move_QMARK_ = (function() { 
var valid_move_QMARK___delegate = function (old_board,new_board,p__9129,p__9130){var vec__9133 = p__9129;var x = cljs.core.nth.call(null,vec__9133,0,null);var y = cljs.core.nth.call(null,vec__9133,1,null);var xy = vec__9133;var vec__9134 = p__9130;var ko_history = cljs.core.nth.call(null,vec__9134,0,null);if((goban_lib.core.in_bounds_QMARK_.call(null,xy,cljs.core.count.call(null,new_board))) && (!(goban_lib.core.occupied_QMARK_.call(null,old_board,xy))) && (cljs.core.not.call(null,goban_lib.core.repeats_position_QMARK_.call(null,new_board,ko_history))) && ((!(goban_lib.core.move_suicides_QMARK_.call(null,new_board,xy))) || (goban_lib.core.move_captures_QMARK_.call(null,new_board,xy))))
{return true;
} else
{return null;
}
};
var valid_move_QMARK_ = function (old_board,new_board,p__9129,var_args){
var p__9130 = null;if (arguments.length > 3) {
  p__9130 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return valid_move_QMARK___delegate.call(this,old_board,new_board,p__9129,p__9130);};
valid_move_QMARK_.cljs$lang$maxFixedArity = 3;
valid_move_QMARK_.cljs$lang$applyTo = (function (arglist__9135){
var old_board = cljs.core.first(arglist__9135);
arglist__9135 = cljs.core.next(arglist__9135);
var new_board = cljs.core.first(arglist__9135);
arglist__9135 = cljs.core.next(arglist__9135);
var p__9129 = cljs.core.first(arglist__9135);
var p__9130 = cljs.core.rest(arglist__9135);
return valid_move_QMARK___delegate(old_board,new_board,p__9129,p__9130);
});
valid_move_QMARK_.cljs$core$IFn$_invoke$arity$variadic = valid_move_QMARK___delegate;
return valid_move_QMARK_;
})()
;
/**
* @param {...*} var_args
*/
goban_lib.core.place_stone = (function() { 
var place_stone__delegate = function (board,color,p__9136,p__9137){var vec__9140 = p__9136;var x = cljs.core.nth.call(null,vec__9140,0,null);var y = cljs.core.nth.call(null,vec__9140,1,null);var xy = vec__9140;var vec__9141 = p__9137;var ko_history = cljs.core.nth.call(null,vec__9141,0,null);var stone = goban_lib.core.new_stone.call(null,color,goban_lib.core.blank_chain.call(null,xy));var candidate_board = goban_lib.core.remove_captured_chains.call(null,goban_lib.core.merge_neighboring_chains.call(null,cljs.core.assoc_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null),stone),xy),xy);if(cljs.core.truth_(goban_lib.core.valid_move_QMARK_.call(null,board,candidate_board,xy,ko_history)))
{return candidate_board;
} else
{return null;
}
};
var place_stone = function (board,color,p__9136,var_args){
var p__9137 = null;if (arguments.length > 3) {
  p__9137 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return place_stone__delegate.call(this,board,color,p__9136,p__9137);};
place_stone.cljs$lang$maxFixedArity = 3;
place_stone.cljs$lang$applyTo = (function (arglist__9142){
var board = cljs.core.first(arglist__9142);
arglist__9142 = cljs.core.next(arglist__9142);
var color = cljs.core.first(arglist__9142);
arglist__9142 = cljs.core.next(arglist__9142);
var p__9136 = cljs.core.first(arglist__9142);
var p__9137 = cljs.core.rest(arglist__9142);
return place_stone__delegate(board,color,p__9136,p__9137);
});
place_stone.cljs$core$IFn$_invoke$arity$variadic = place_stone__delegate;
return place_stone;
})()
;
goban_lib.core.winner = (function winner(board){return null;
});

//# sourceMappingURL=core.js.map