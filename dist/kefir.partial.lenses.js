(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('partial.lenses'), require('karet.lift')) :
	typeof define === 'function' && define.amd ? define(['exports', 'partial.lenses', 'karet.lift'], factory) :
	(factory((global.Kefir = global.Kefir || {}, global.Kefir.partial = global.Kefir.partial || {}, global.Kefir.partial.lenses = {}),global.partial.lenses,global.karet.lift));
}(this, (function (exports,L,K) { 'use strict';

	// THIS FILE IS GENERATED

	var Constant = /*#__PURE__*/K.lift(L.Constant);
	var Identity = /*#__PURE__*/K.lift(L.Identity);
	var add = /*#__PURE__*/K.lift(L.add);
	var all = /*#__PURE__*/K.lift(L.all);
	var and = /*#__PURE__*/K.lift(L.and);
	var any = /*#__PURE__*/K.lift(L.any);
	var append = /*#__PURE__*/K.lift(L.append);
	var array = /*#__PURE__*/K.lift(L.array);
	var assign = /*#__PURE__*/K.lift(L.assign);
	var assignOp = /*#__PURE__*/K.lift(L.assignOp);
	var branch = /*#__PURE__*/K.lift(L.branch);
	var branchOr = /*#__PURE__*/K.lift(L.branchOr);
	var branches = /*#__PURE__*/K.lift(L.branches);
	var chain = /*#__PURE__*/K.lift(L.chain);
	var children = /*#__PURE__*/K.lift(L.children);
	var choice = /*#__PURE__*/K.lift(L.choice);
	var choices = /*#__PURE__*/K.lift(L.choices);
	var choose = /*#__PURE__*/K.lift(L.choose);
	var collect = /*#__PURE__*/K.lift(L.collect);
	var collectAs = /*#__PURE__*/K.lift(L.collectAs);
	var complement = /*#__PURE__*/K.lift(L.complement);
	var compose = /*#__PURE__*/K.lift(L.compose);
	var concat = /*#__PURE__*/K.lift(L.concat);
	var concatAs = /*#__PURE__*/K.lift(L.concatAs);
	var cond = /*#__PURE__*/K.lift(L.cond);
	var condOf = /*#__PURE__*/K.lift(L.condOf);
	var count = /*#__PURE__*/K.lift(L.count);
	var countIf = /*#__PURE__*/K.lift(L.countIf);
	var counts = /*#__PURE__*/K.lift(L.counts);
	var countsAs = /*#__PURE__*/K.lift(L.countsAs);
	var defaults = /*#__PURE__*/K.lift(L.defaults);
	var define = /*#__PURE__*/K.lift(L.define);
	var divide = /*#__PURE__*/K.lift(L.divide);
	var dropPrefix = /*#__PURE__*/K.lift(L.dropPrefix);
	var dropSuffix = /*#__PURE__*/K.lift(L.dropSuffix);
	var elems = /*#__PURE__*/K.lift(L.elems);
	var elemsTotal = /*#__PURE__*/K.lift(L.elemsTotal);
	var entries = /*#__PURE__*/K.lift(L.entries);
	var filter = /*#__PURE__*/K.lift(L.filter);
	var find = /*#__PURE__*/K.lift(L.find);
	var findWith = /*#__PURE__*/K.lift(L.findWith);
	var first = /*#__PURE__*/K.lift(L.first);
	var flat = /*#__PURE__*/K.lift(L.flat);
	var flatten = /*#__PURE__*/K.lift(L.flatten);
	var foldTraversalLens = /*#__PURE__*/K.lift(L.foldTraversalLens);
	var foldl = /*#__PURE__*/K.lift(L.foldl);
	var foldr = /*#__PURE__*/K.lift(L.foldr);
	var forEach = /*#__PURE__*/K.lift(L.forEach);
	var forEachWith = /*#__PURE__*/K.lift(L.forEachWith);
	var get = /*#__PURE__*/K.lift(L.get);
	var getInverse = /*#__PURE__*/K.lift(L.getInverse);
	var identity = /*#__PURE__*/K.lift(L.identity);
	var ifElse = /*#__PURE__*/K.lift(L.ifElse);
	var iftes = /*#__PURE__*/K.lift(L.iftes);
	var index = /*#__PURE__*/K.lift(L.index);
	var indexed = /*#__PURE__*/K.lift(L.indexed);
	var inverse = /*#__PURE__*/K.lift(L.inverse);
	var is = /*#__PURE__*/K.lift(L.is);
	var isDefined = /*#__PURE__*/K.lift(L.isDefined);
	var isEmpty = /*#__PURE__*/K.lift(L.isEmpty);
	var iso = /*#__PURE__*/K.lift(L.iso);
	var join = /*#__PURE__*/K.lift(L.join);
	var joinAs = /*#__PURE__*/K.lift(L.joinAs);
	var json = /*#__PURE__*/K.lift(L.json);
	var keyed = /*#__PURE__*/K.lift(L.keyed);
	var keys = /*#__PURE__*/K.lift(L.keys);
	var last = /*#__PURE__*/K.lift(L.last);
	var lazy = /*#__PURE__*/K.lift(L.lazy);
	var leafs = /*#__PURE__*/K.lift(L.leafs);
	var lens = /*#__PURE__*/K.lift(L.lens);
	var log = /*#__PURE__*/K.lift(L.log);
	var matches = /*#__PURE__*/K.lift(L.matches);
	var maximum = /*#__PURE__*/K.lift(L.maximum);
	var maximumBy = /*#__PURE__*/K.lift(L.maximumBy);
	var mean = /*#__PURE__*/K.lift(L.mean);
	var meanAs = /*#__PURE__*/K.lift(L.meanAs);
	var minimum = /*#__PURE__*/K.lift(L.minimum);
	var minimumBy = /*#__PURE__*/K.lift(L.minimumBy);
	var modify = /*#__PURE__*/K.lift(L.modify);
	var modifyOp = /*#__PURE__*/K.lift(L.modifyOp);
	var multiply = /*#__PURE__*/K.lift(L.multiply);
	var negate = /*#__PURE__*/K.lift(L.negate);
	var none = /*#__PURE__*/K.lift(L.none);
	var normalize = /*#__PURE__*/K.lift(L.normalize);
	var optional = /*#__PURE__*/K.lift(L.optional);
	var or = /*#__PURE__*/K.lift(L.or);
	var orElse = /*#__PURE__*/K.lift(L.orElse);
	var pick = /*#__PURE__*/K.lift(L.pick);
	var pickIn = /*#__PURE__*/K.lift(L.pickIn);
	var pointer = /*#__PURE__*/K.lift(L.pointer);
	var prefix = /*#__PURE__*/K.lift(L.prefix);
	var product = /*#__PURE__*/K.lift(L.product);
	var productAs = /*#__PURE__*/K.lift(L.productAs);
	var prop = /*#__PURE__*/K.lift(L.prop);
	var props = /*#__PURE__*/K.lift(L.props);
	var propsOf = /*#__PURE__*/K.lift(L.propsOf);
	var query = /*#__PURE__*/K.lift(L.query);
	var removable = /*#__PURE__*/K.lift(L.removable);
	var remove = /*#__PURE__*/K.lift(L.remove);
	var removeOp = /*#__PURE__*/K.lift(L.removeOp);
	var replace = /*#__PURE__*/K.lift(L.replace);
	var replaces = /*#__PURE__*/K.lift(L.replaces);
	var required = /*#__PURE__*/K.lift(L.required);
	var reread = /*#__PURE__*/K.lift(L.reread);
	var reverse = /*#__PURE__*/K.lift(L.reverse);
	var rewrite = /*#__PURE__*/K.lift(L.rewrite);
	var satisfying = /*#__PURE__*/K.lift(L.satisfying);
	var seemsArrayLike = /*#__PURE__*/K.lift(L.seemsArrayLike);
	var select = /*#__PURE__*/K.lift(L.select);
	var selectAs = /*#__PURE__*/K.lift(L.selectAs);
	var seq = /*#__PURE__*/K.lift(L.seq);
	var set = /*#__PURE__*/K.lift(L.set);
	var setOp = /*#__PURE__*/K.lift(L.setOp);
	var setter = /*#__PURE__*/K.lift(L.setter);
	var singleton = /*#__PURE__*/K.lift(L.singleton);
	var slice = /*#__PURE__*/K.lift(L.slice);
	var split = /*#__PURE__*/K.lift(L.split);
	var subtract = /*#__PURE__*/K.lift(L.subtract);
	var suffix = /*#__PURE__*/K.lift(L.suffix);
	var sum = /*#__PURE__*/K.lift(L.sum);
	var sumAs = /*#__PURE__*/K.lift(L.sumAs);
	var toFunction = /*#__PURE__*/K.lift(L.toFunction);
	var transform = /*#__PURE__*/K.lift(L.transform);
	var traverse = /*#__PURE__*/K.lift(L.traverse);
	var uncouple = /*#__PURE__*/K.lift(L.uncouple);
	var unless = /*#__PURE__*/K.lift(L.unless);
	var uri = /*#__PURE__*/K.lift(L.uri);
	var uriComponent = /*#__PURE__*/K.lift(L.uriComponent);
	var valueOr = /*#__PURE__*/K.lift(L.valueOr);
	var values = /*#__PURE__*/K.lift(L.values);
	var when = /*#__PURE__*/K.lift(L.when);
	var zero = /*#__PURE__*/K.lift(L.zero);

	exports.Constant = Constant;
	exports.Identity = Identity;
	exports.add = add;
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
	exports.divide = divide;
	exports.dropPrefix = dropPrefix;
	exports.dropSuffix = dropSuffix;
	exports.elems = elems;
	exports.elemsTotal = elemsTotal;
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
	exports.multiply = multiply;
	exports.negate = negate;
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
	exports.subtract = subtract;
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
