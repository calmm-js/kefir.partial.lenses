(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('partial.lenses'), require('kefir.combines')) :
	typeof define === 'function' && define.amd ? define(['exports', 'partial.lenses', 'kefir.combines'], factory) :
	(factory((global.Kefir = global.Kefir || {}, global.Kefir.partial = global.Kefir.partial || {}, global.Kefir.partial.lenses = {}),global.partial.lenses,global.kefir.combines));
}(this, (function (exports,L,kefir_combines) { 'use strict';

	// THIS FILE IS GENERATED

	var Constant = /*#__PURE__*/kefir_combines.liftRec(L.Constant);
	var Identity = /*#__PURE__*/kefir_combines.liftRec(L.Identity);
	var all = /*#__PURE__*/kefir_combines.liftRec(L.all);
	var and = /*#__PURE__*/kefir_combines.liftRec(L.and);
	var any = /*#__PURE__*/kefir_combines.liftRec(L.any);
	var append = /*#__PURE__*/kefir_combines.liftRec(L.append);
	var array = /*#__PURE__*/kefir_combines.liftRec(L.array);
	var assign = /*#__PURE__*/kefir_combines.liftRec(L.assign);
	var assignOp = /*#__PURE__*/kefir_combines.liftRec(L.assignOp);
	var branch = /*#__PURE__*/kefir_combines.liftRec(L.branch);
	var branchOr = /*#__PURE__*/kefir_combines.liftRec(L.branchOr);
	var branches = /*#__PURE__*/kefir_combines.liftRec(L.branches);
	var chain = /*#__PURE__*/kefir_combines.liftRec(L.chain);
	var children = /*#__PURE__*/kefir_combines.liftRec(L.children);
	var choice = /*#__PURE__*/kefir_combines.liftRec(L.choice);
	var choices = /*#__PURE__*/kefir_combines.liftRec(L.choices);
	var choose = /*#__PURE__*/kefir_combines.liftRec(L.choose);
	var collect = /*#__PURE__*/kefir_combines.liftRec(L.collect);
	var collectAs = /*#__PURE__*/kefir_combines.liftRec(L.collectAs);
	var complement = /*#__PURE__*/kefir_combines.liftRec(L.complement);
	var compose = /*#__PURE__*/kefir_combines.liftRec(L.compose);
	var concat = /*#__PURE__*/kefir_combines.liftRec(L.concat);
	var concatAs = /*#__PURE__*/kefir_combines.liftRec(L.concatAs);
	var cond = /*#__PURE__*/kefir_combines.liftRec(L.cond);
	var condOf = /*#__PURE__*/kefir_combines.liftRec(L.condOf);
	var count = /*#__PURE__*/kefir_combines.liftRec(L.count);
	var countIf = /*#__PURE__*/kefir_combines.liftRec(L.countIf);
	var counts = /*#__PURE__*/kefir_combines.liftRec(L.counts);
	var countsAs = /*#__PURE__*/kefir_combines.liftRec(L.countsAs);
	var defaults = /*#__PURE__*/kefir_combines.liftRec(L.defaults);
	var define = /*#__PURE__*/kefir_combines.liftRec(L.define);
	var dropPrefix = /*#__PURE__*/kefir_combines.liftRec(L.dropPrefix);
	var dropSuffix = /*#__PURE__*/kefir_combines.liftRec(L.dropSuffix);
	var elems = /*#__PURE__*/kefir_combines.liftRec(L.elems);
	var entries = /*#__PURE__*/kefir_combines.liftRec(L.entries);
	var filter = /*#__PURE__*/kefir_combines.liftRec(L.filter);
	var find = /*#__PURE__*/kefir_combines.liftRec(L.find);
	var findWith = /*#__PURE__*/kefir_combines.liftRec(L.findWith);
	var first = /*#__PURE__*/kefir_combines.liftRec(L.first);
	var flat = /*#__PURE__*/kefir_combines.liftRec(L.flat);
	var flatten = /*#__PURE__*/kefir_combines.liftRec(L.flatten);
	var foldTraversalLens = /*#__PURE__*/kefir_combines.liftRec(L.foldTraversalLens);
	var foldl = /*#__PURE__*/kefir_combines.liftRec(L.foldl);
	var foldr = /*#__PURE__*/kefir_combines.liftRec(L.foldr);
	var forEach = /*#__PURE__*/kefir_combines.liftRec(L.forEach);
	var forEachWith = /*#__PURE__*/kefir_combines.liftRec(L.forEachWith);
	var get = /*#__PURE__*/kefir_combines.liftRec(L.get);
	var getInverse = /*#__PURE__*/kefir_combines.liftRec(L.getInverse);
	var identity = /*#__PURE__*/kefir_combines.liftRec(L.identity);
	var ifElse = /*#__PURE__*/kefir_combines.liftRec(L.ifElse);
	var iftes = /*#__PURE__*/kefir_combines.liftRec(L.iftes);
	var index = /*#__PURE__*/kefir_combines.liftRec(L.index);
	var indexed = /*#__PURE__*/kefir_combines.liftRec(L.indexed);
	var inverse = /*#__PURE__*/kefir_combines.liftRec(L.inverse);
	var is = /*#__PURE__*/kefir_combines.liftRec(L.is);
	var isDefined = /*#__PURE__*/kefir_combines.liftRec(L.isDefined);
	var isEmpty = /*#__PURE__*/kefir_combines.liftRec(L.isEmpty);
	var iso = /*#__PURE__*/kefir_combines.liftRec(L.iso);
	var join = /*#__PURE__*/kefir_combines.liftRec(L.join);
	var joinAs = /*#__PURE__*/kefir_combines.liftRec(L.joinAs);
	var json = /*#__PURE__*/kefir_combines.liftRec(L.json);
	var keyed = /*#__PURE__*/kefir_combines.liftRec(L.keyed);
	var keys = /*#__PURE__*/kefir_combines.liftRec(L.keys);
	var last = /*#__PURE__*/kefir_combines.liftRec(L.last);
	var lazy = /*#__PURE__*/kefir_combines.liftRec(L.lazy);
	var leafs = /*#__PURE__*/kefir_combines.liftRec(L.leafs);
	var lens = /*#__PURE__*/kefir_combines.liftRec(L.lens);
	var log = /*#__PURE__*/kefir_combines.liftRec(L.log);
	var matches = /*#__PURE__*/kefir_combines.liftRec(L.matches);
	var maximum = /*#__PURE__*/kefir_combines.liftRec(L.maximum);
	var maximumBy = /*#__PURE__*/kefir_combines.liftRec(L.maximumBy);
	var mean = /*#__PURE__*/kefir_combines.liftRec(L.mean);
	var meanAs = /*#__PURE__*/kefir_combines.liftRec(L.meanAs);
	var minimum = /*#__PURE__*/kefir_combines.liftRec(L.minimum);
	var minimumBy = /*#__PURE__*/kefir_combines.liftRec(L.minimumBy);
	var modify = /*#__PURE__*/kefir_combines.liftRec(L.modify);
	var modifyOp = /*#__PURE__*/kefir_combines.liftRec(L.modifyOp);
	var none = /*#__PURE__*/kefir_combines.liftRec(L.none);
	var normalize = /*#__PURE__*/kefir_combines.liftRec(L.normalize);
	var optional = /*#__PURE__*/kefir_combines.liftRec(L.optional);
	var or = /*#__PURE__*/kefir_combines.liftRec(L.or);
	var orElse = /*#__PURE__*/kefir_combines.liftRec(L.orElse);
	var pick = /*#__PURE__*/kefir_combines.liftRec(L.pick);
	var pickIn = /*#__PURE__*/kefir_combines.liftRec(L.pickIn);
	var pointer = /*#__PURE__*/kefir_combines.liftRec(L.pointer);
	var prefix = /*#__PURE__*/kefir_combines.liftRec(L.prefix);
	var product = /*#__PURE__*/kefir_combines.liftRec(L.product);
	var productAs = /*#__PURE__*/kefir_combines.liftRec(L.productAs);
	var prop = /*#__PURE__*/kefir_combines.liftRec(L.prop);
	var props = /*#__PURE__*/kefir_combines.liftRec(L.props);
	var propsOf = /*#__PURE__*/kefir_combines.liftRec(L.propsOf);
	var query = /*#__PURE__*/kefir_combines.liftRec(L.query);
	var removable = /*#__PURE__*/kefir_combines.liftRec(L.removable);
	var remove = /*#__PURE__*/kefir_combines.liftRec(L.remove);
	var removeOp = /*#__PURE__*/kefir_combines.liftRec(L.removeOp);
	var replace = /*#__PURE__*/kefir_combines.liftRec(L.replace);
	var replaces = /*#__PURE__*/kefir_combines.liftRec(L.replaces);
	var required = /*#__PURE__*/kefir_combines.liftRec(L.required);
	var reread = /*#__PURE__*/kefir_combines.liftRec(L.reread);
	var reverse = /*#__PURE__*/kefir_combines.liftRec(L.reverse);
	var rewrite = /*#__PURE__*/kefir_combines.liftRec(L.rewrite);
	var satisfying = /*#__PURE__*/kefir_combines.liftRec(L.satisfying);
	var seemsArrayLike = /*#__PURE__*/kefir_combines.liftRec(L.seemsArrayLike);
	var select = /*#__PURE__*/kefir_combines.liftRec(L.select);
	var selectAs = /*#__PURE__*/kefir_combines.liftRec(L.selectAs);
	var seq = /*#__PURE__*/kefir_combines.liftRec(L.seq);
	var set = /*#__PURE__*/kefir_combines.liftRec(L.set);
	var setOp = /*#__PURE__*/kefir_combines.liftRec(L.setOp);
	var setter = /*#__PURE__*/kefir_combines.liftRec(L.setter);
	var singleton = /*#__PURE__*/kefir_combines.liftRec(L.singleton);
	var slice = /*#__PURE__*/kefir_combines.liftRec(L.slice);
	var split = /*#__PURE__*/kefir_combines.liftRec(L.split);
	var suffix = /*#__PURE__*/kefir_combines.liftRec(L.suffix);
	var sum = /*#__PURE__*/kefir_combines.liftRec(L.sum);
	var sumAs = /*#__PURE__*/kefir_combines.liftRec(L.sumAs);
	var toFunction = /*#__PURE__*/kefir_combines.liftRec(L.toFunction);
	var transform = /*#__PURE__*/kefir_combines.liftRec(L.transform);
	var traverse = /*#__PURE__*/kefir_combines.liftRec(L.traverse);
	var uncouple = /*#__PURE__*/kefir_combines.liftRec(L.uncouple);
	var unless = /*#__PURE__*/kefir_combines.liftRec(L.unless);
	var uri = /*#__PURE__*/kefir_combines.liftRec(L.uri);
	var uriComponent = /*#__PURE__*/kefir_combines.liftRec(L.uriComponent);
	var valueOr = /*#__PURE__*/kefir_combines.liftRec(L.valueOr);
	var values = /*#__PURE__*/kefir_combines.liftRec(L.values);
	var when = /*#__PURE__*/kefir_combines.liftRec(L.when);
	var zero = /*#__PURE__*/kefir_combines.liftRec(L.zero);

	exports.Constant = Constant;
	exports.Identity = Identity;
	exports.all = all;
	exports.and = and;
	exports.any = any;
	exports.append = append;
	exports.array = array;
	exports.assign = assign;
	exports.assignOp = assignOp;
	exports.branch = branch;
	exports.branchOr = branchOr;
	exports.branches = branches;
	exports.chain = chain;
	exports.children = children;
	exports.choice = choice;
	exports.choices = choices;
	exports.choose = choose;
	exports.collect = collect;
	exports.collectAs = collectAs;
	exports.complement = complement;
	exports.compose = compose;
	exports.concat = concat;
	exports.concatAs = concatAs;
	exports.cond = cond;
	exports.condOf = condOf;
	exports.count = count;
	exports.countIf = countIf;
	exports.counts = counts;
	exports.countsAs = countsAs;
	exports.defaults = defaults;
	exports.define = define;
	exports.dropPrefix = dropPrefix;
	exports.dropSuffix = dropSuffix;
	exports.elems = elems;
	exports.entries = entries;
	exports.filter = filter;
	exports.find = find;
	exports.findWith = findWith;
	exports.first = first;
	exports.flat = flat;
	exports.flatten = flatten;
	exports.foldTraversalLens = foldTraversalLens;
	exports.foldl = foldl;
	exports.foldr = foldr;
	exports.forEach = forEach;
	exports.forEachWith = forEachWith;
	exports.get = get;
	exports.getInverse = getInverse;
	exports.identity = identity;
	exports.ifElse = ifElse;
	exports.iftes = iftes;
	exports.index = index;
	exports.indexed = indexed;
	exports.inverse = inverse;
	exports.is = is;
	exports.isDefined = isDefined;
	exports.isEmpty = isEmpty;
	exports.iso = iso;
	exports.join = join;
	exports.joinAs = joinAs;
	exports.json = json;
	exports.keyed = keyed;
	exports.keys = keys;
	exports.last = last;
	exports.lazy = lazy;
	exports.leafs = leafs;
	exports.lens = lens;
	exports.log = log;
	exports.matches = matches;
	exports.maximum = maximum;
	exports.maximumBy = maximumBy;
	exports.mean = mean;
	exports.meanAs = meanAs;
	exports.minimum = minimum;
	exports.minimumBy = minimumBy;
	exports.modify = modify;
	exports.modifyOp = modifyOp;
	exports.none = none;
	exports.normalize = normalize;
	exports.optional = optional;
	exports.or = or;
	exports.orElse = orElse;
	exports.pick = pick;
	exports.pickIn = pickIn;
	exports.pointer = pointer;
	exports.prefix = prefix;
	exports.product = product;
	exports.productAs = productAs;
	exports.prop = prop;
	exports.props = props;
	exports.propsOf = propsOf;
	exports.query = query;
	exports.removable = removable;
	exports.remove = remove;
	exports.removeOp = removeOp;
	exports.replace = replace;
	exports.replaces = replaces;
	exports.required = required;
	exports.reread = reread;
	exports.reverse = reverse;
	exports.rewrite = rewrite;
	exports.satisfying = satisfying;
	exports.seemsArrayLike = seemsArrayLike;
	exports.select = select;
	exports.selectAs = selectAs;
	exports.seq = seq;
	exports.set = set;
	exports.setOp = setOp;
	exports.setter = setter;
	exports.singleton = singleton;
	exports.slice = slice;
	exports.split = split;
	exports.suffix = suffix;
	exports.sum = sum;
	exports.sumAs = sumAs;
	exports.toFunction = toFunction;
	exports.transform = transform;
	exports.traverse = traverse;
	exports.uncouple = uncouple;
	exports.unless = unless;
	exports.uri = uri;
	exports.uriComponent = uriComponent;
	exports.valueOr = valueOr;
	exports.values = values;
	exports.when = when;
	exports.zero = zero;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
