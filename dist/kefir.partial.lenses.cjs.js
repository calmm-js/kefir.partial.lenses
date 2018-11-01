'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var L = require('partial.lenses');
var K = require('karet.lift');

// THIS FILE IS GENERATED
var add = /*#__PURE__*/K.lift(L.add);
var all = /*#__PURE__*/K.lift(L.all);
var all1 = /*#__PURE__*/K.lift(L.all1);
var alternatives = /*#__PURE__*/K.lift(L.alternatives);
var and = /*#__PURE__*/K.lift(L.and);
var and1 = /*#__PURE__*/K.lift(L.and1);
var any = /*#__PURE__*/K.lift(L.any);
var applyAt = /*#__PURE__*/K.lift(L.applyAt);
var array = /*#__PURE__*/K.lift(L.array);
var arrays = /*#__PURE__*/K.lift(L.arrays);
var assign = /*#__PURE__*/K.lift(L.assign);
var assignOp = /*#__PURE__*/K.lift(L.assignOp);
var attemptEveryDown = /*#__PURE__*/K.lift(L.attemptEveryDown);
var attemptEveryUp = /*#__PURE__*/K.lift(L.attemptEveryUp);
var attemptSomeDown = /*#__PURE__*/K.lift(L.attemptSomeDown);
var branch = /*#__PURE__*/K.lift(L.branch);
var branchOr = /*#__PURE__*/K.lift(L.branchOr);
var branches = /*#__PURE__*/K.lift(L.branches);
var chain = /*#__PURE__*/K.lift(L.chain);
var choice = /*#__PURE__*/K.lift(L.choice);
var choices = /*#__PURE__*/K.lift(L.choices);
var choose = /*#__PURE__*/K.lift(L.choose);
var collect = /*#__PURE__*/K.lift(L.collect);
var collectAs = /*#__PURE__*/K.lift(L.collectAs);
var collectTotal = /*#__PURE__*/K.lift(L.collectTotal);
var collectTotalAs = /*#__PURE__*/K.lift(L.collectTotalAs);
var compose = /*#__PURE__*/K.lift(L.compose);
var concat = /*#__PURE__*/K.lift(L.concat);
var concatAs = /*#__PURE__*/K.lift(L.concatAs);
var cond = /*#__PURE__*/K.lift(L.cond);
var condOf = /*#__PURE__*/K.lift(L.condOf);
var conjugate = /*#__PURE__*/K.lift(L.conjugate);
var count = /*#__PURE__*/K.lift(L.count);
var countIf = /*#__PURE__*/K.lift(L.countIf);
var counts = /*#__PURE__*/K.lift(L.counts);
var countsAs = /*#__PURE__*/K.lift(L.countsAs);
var cross = /*#__PURE__*/K.lift(L.cross);
var defaults = /*#__PURE__*/K.lift(L.defaults);
var define = /*#__PURE__*/K.lift(L.define);
var disjoint = /*#__PURE__*/K.lift(L.disjoint);
var disperse = /*#__PURE__*/K.lift(L.disperse);
var divide = /*#__PURE__*/K.lift(L.divide);
var dropPrefix = /*#__PURE__*/K.lift(L.dropPrefix);
var dropSuffix = /*#__PURE__*/K.lift(L.dropSuffix);
var filter = /*#__PURE__*/K.lift(L.filter);
var find = /*#__PURE__*/K.lift(L.find);
var findWith = /*#__PURE__*/K.lift(L.findWith);
var flat = /*#__PURE__*/K.lift(L.flat);
var fold = /*#__PURE__*/K.lift(L.fold);
var foldTraversalLens = /*#__PURE__*/K.lift(L.foldTraversalLens);
var foldl = /*#__PURE__*/K.lift(L.foldl);
var foldr = /*#__PURE__*/K.lift(L.foldr);
var forEach = /*#__PURE__*/K.lift(L.forEach);
var forEachWith = /*#__PURE__*/K.lift(L.forEachWith);
var fromFantasy = /*#__PURE__*/K.lift(L.fromFantasy);
var fromFantasyApplicative = /*#__PURE__*/K.lift(L.fromFantasyApplicative);
var fromFantasyMonad = /*#__PURE__*/K.lift(L.fromFantasyMonad);
var get = /*#__PURE__*/K.lift(L.get);
var getAs = /*#__PURE__*/K.lift(L.getAs);
var getInverse = /*#__PURE__*/K.lift(L.getInverse);
var getLog = /*#__PURE__*/K.lift(L.getLog);
var getter = /*#__PURE__*/K.lift(L.getter);
var groupBy = /*#__PURE__*/K.lift(L.groupBy);
var ifElse = /*#__PURE__*/K.lift(L.ifElse);
var index = /*#__PURE__*/K.lift(L.index);
var inverse = /*#__PURE__*/K.lift(L.inverse);
var is = /*#__PURE__*/K.lift(L.is);
var isDefined = /*#__PURE__*/K.lift(L.isDefined);
var isEmpty = /*#__PURE__*/K.lift(L.isEmpty);
var iso = /*#__PURE__*/K.lift(L.iso);
var iterate = /*#__PURE__*/K.lift(L.iterate);
var join = /*#__PURE__*/K.lift(L.join);
var joinAs = /*#__PURE__*/K.lift(L.joinAs);
var joinIx = /*#__PURE__*/K.lift(L.joinIx);
var json = /*#__PURE__*/K.lift(L.json);
var lazy = /*#__PURE__*/K.lift(L.lazy);
var lens = /*#__PURE__*/K.lift(L.lens);
var limit = /*#__PURE__*/K.lift(L.limit);
var log = /*#__PURE__*/K.lift(L.log);
var mapIx = /*#__PURE__*/K.lift(L.mapIx);
var mapping = /*#__PURE__*/K.lift(L.mapping);
var mappings = /*#__PURE__*/K.lift(L.mappings);
var matches = /*#__PURE__*/K.lift(L.matches);
var maximum = /*#__PURE__*/K.lift(L.maximum);
var maximumBy = /*#__PURE__*/K.lift(L.maximumBy);
var mean = /*#__PURE__*/K.lift(L.mean);
var meanAs = /*#__PURE__*/K.lift(L.meanAs);
var minimum = /*#__PURE__*/K.lift(L.minimum);
var minimumBy = /*#__PURE__*/K.lift(L.minimumBy);
var modify = /*#__PURE__*/K.lift(L.modify);
var modifyAsync = /*#__PURE__*/K.lift(L.modifyAsync);
var modifyOp = /*#__PURE__*/K.lift(L.modifyOp);
var multiply = /*#__PURE__*/K.lift(L.multiply);
var none = /*#__PURE__*/K.lift(L.none);
var normalize = /*#__PURE__*/K.lift(L.normalize);
var offset = /*#__PURE__*/K.lift(L.offset);
var or = /*#__PURE__*/K.lift(L.or);
var orAlternatively = /*#__PURE__*/K.lift(L.orAlternatively);
var orElse = /*#__PURE__*/K.lift(L.orElse);
var partsOf = /*#__PURE__*/K.lift(L.partsOf);
var pattern = /*#__PURE__*/K.lift(L.pattern);
var patterns = /*#__PURE__*/K.lift(L.patterns);
var pick = /*#__PURE__*/K.lift(L.pick);
var pickIn = /*#__PURE__*/K.lift(L.pickIn);
var pointer = /*#__PURE__*/K.lift(L.pointer);
var prefix = /*#__PURE__*/K.lift(L.prefix);
var product = /*#__PURE__*/K.lift(L.product);
var productAs = /*#__PURE__*/K.lift(L.productAs);
var prop = /*#__PURE__*/K.lift(L.prop);
var props = /*#__PURE__*/K.lift(L.props);
var propsExcept = /*#__PURE__*/K.lift(L.propsExcept);
var propsOf = /*#__PURE__*/K.lift(L.propsOf);
var query = /*#__PURE__*/K.lift(L.query);
var reIx = /*#__PURE__*/K.lift(L.reIx);
var removable = /*#__PURE__*/K.lift(L.removable);
var remove = /*#__PURE__*/K.lift(L.remove);
var replace = /*#__PURE__*/K.lift(L.replace);
var replaces = /*#__PURE__*/K.lift(L.replaces);
var required = /*#__PURE__*/K.lift(L.required);
var reread = /*#__PURE__*/K.lift(L.reread);
var rewrite = /*#__PURE__*/K.lift(L.rewrite);
var satisfying = /*#__PURE__*/K.lift(L.satisfying);
var seemsArrayLike = /*#__PURE__*/K.lift(L.seemsArrayLike);
var select = /*#__PURE__*/K.lift(L.select);
var selectAs = /*#__PURE__*/K.lift(L.selectAs);
var seq = /*#__PURE__*/K.lift(L.seq);
var set = /*#__PURE__*/K.lift(L.set);
var setIx = /*#__PURE__*/K.lift(L.setIx);
var setOp = /*#__PURE__*/K.lift(L.setOp);
var setter = /*#__PURE__*/K.lift(L.setter);
var skipIx = /*#__PURE__*/K.lift(L.skipIx);
var slice = /*#__PURE__*/K.lift(L.slice);
var split = /*#__PURE__*/K.lift(L.split);
var subseq = /*#__PURE__*/K.lift(L.subseq);
var subset = /*#__PURE__*/K.lift(L.subset);
var subtract = /*#__PURE__*/K.lift(L.subtract);
var suffix = /*#__PURE__*/K.lift(L.suffix);
var sum = /*#__PURE__*/K.lift(L.sum);
var sumAs = /*#__PURE__*/K.lift(L.sumAs);
var tieIx = /*#__PURE__*/K.lift(L.tieIx);
var toFunction = /*#__PURE__*/K.lift(L.toFunction);
var transform = /*#__PURE__*/K.lift(L.transform);
var transformAsync = /*#__PURE__*/K.lift(L.transformAsync);
var traverse = /*#__PURE__*/K.lift(L.traverse);
var uncouple = /*#__PURE__*/K.lift(L.uncouple);
var unfold = /*#__PURE__*/K.lift(L.unfold);
var ungroupBy = /*#__PURE__*/K.lift(L.ungroupBy);
var unless = /*#__PURE__*/K.lift(L.unless);
var unzipWith1 = /*#__PURE__*/K.lift(L.unzipWith1);
var valueOr = /*#__PURE__*/K.lift(L.valueOr);
var when = /*#__PURE__*/K.lift(L.when);
var zipWith1 = /*#__PURE__*/K.lift(L.zipWith1);

exports.FantasyFunctor = L.FantasyFunctor;
exports.Identity = L.Identity;
exports.IdentityAsync = L.IdentityAsync;
exports.Select = L.Select;
exports._ = L._;
exports.append = L.append;
exports.children = L.children;
exports.complement = L.complement;
exports.elems = L.elems;
exports.elemsTotal = L.elemsTotal;
exports.entries = L.entries;
exports.first = L.first;
exports.flatten = L.flatten;
exports.identity = L.identity;
exports.indexed = L.indexed;
exports.keyed = L.keyed;
exports.keys = L.keys;
exports.keysEverywhere = L.keysEverywhere;
exports.last = L.last;
exports.leafs = L.leafs;
exports.multikeyed = L.multikeyed;
exports.negate = L.negate;
exports.optional = L.optional;
exports.querystring = L.querystring;
exports.removeOp = L.removeOp;
exports.reverse = L.reverse;
exports.singleton = L.singleton;
exports.uri = L.uri;
exports.uriComponent = L.uriComponent;
exports.values = L.values;
exports.zero = L.zero;
exports.add = add;
exports.all = all;
exports.all1 = all1;
exports.alternatives = alternatives;
exports.and = and;
exports.and1 = and1;
exports.any = any;
exports.applyAt = applyAt;
exports.array = array;
exports.arrays = arrays;
exports.assign = assign;
exports.assignOp = assignOp;
exports.attemptEveryDown = attemptEveryDown;
exports.attemptEveryUp = attemptEveryUp;
exports.attemptSomeDown = attemptSomeDown;
exports.branch = branch;
exports.branchOr = branchOr;
exports.branches = branches;
exports.chain = chain;
exports.choice = choice;
exports.choices = choices;
exports.choose = choose;
exports.collect = collect;
exports.collectAs = collectAs;
exports.collectTotal = collectTotal;
exports.collectTotalAs = collectTotalAs;
exports.compose = compose;
exports.concat = concat;
exports.concatAs = concatAs;
exports.cond = cond;
exports.condOf = condOf;
exports.conjugate = conjugate;
exports.count = count;
exports.countIf = countIf;
exports.counts = counts;
exports.countsAs = countsAs;
exports.cross = cross;
exports.defaults = defaults;
exports.define = define;
exports.disjoint = disjoint;
exports.disperse = disperse;
exports.divide = divide;
exports.dropPrefix = dropPrefix;
exports.dropSuffix = dropSuffix;
exports.filter = filter;
exports.find = find;
exports.findWith = findWith;
exports.flat = flat;
exports.fold = fold;
exports.foldTraversalLens = foldTraversalLens;
exports.foldl = foldl;
exports.foldr = foldr;
exports.forEach = forEach;
exports.forEachWith = forEachWith;
exports.fromFantasy = fromFantasy;
exports.fromFantasyApplicative = fromFantasyApplicative;
exports.fromFantasyMonad = fromFantasyMonad;
exports.get = get;
exports.getAs = getAs;
exports.getInverse = getInverse;
exports.getLog = getLog;
exports.getter = getter;
exports.groupBy = groupBy;
exports.ifElse = ifElse;
exports.index = index;
exports.inverse = inverse;
exports.is = is;
exports.isDefined = isDefined;
exports.isEmpty = isEmpty;
exports.iso = iso;
exports.iterate = iterate;
exports.join = join;
exports.joinAs = joinAs;
exports.joinIx = joinIx;
exports.json = json;
exports.lazy = lazy;
exports.lens = lens;
exports.limit = limit;
exports.log = log;
exports.mapIx = mapIx;
exports.mapping = mapping;
exports.mappings = mappings;
exports.matches = matches;
exports.maximum = maximum;
exports.maximumBy = maximumBy;
exports.mean = mean;
exports.meanAs = meanAs;
exports.minimum = minimum;
exports.minimumBy = minimumBy;
exports.modify = modify;
exports.modifyAsync = modifyAsync;
exports.modifyOp = modifyOp;
exports.multiply = multiply;
exports.none = none;
exports.normalize = normalize;
exports.offset = offset;
exports.or = or;
exports.orAlternatively = orAlternatively;
exports.orElse = orElse;
exports.partsOf = partsOf;
exports.pattern = pattern;
exports.patterns = patterns;
exports.pick = pick;
exports.pickIn = pickIn;
exports.pointer = pointer;
exports.prefix = prefix;
exports.product = product;
exports.productAs = productAs;
exports.prop = prop;
exports.props = props;
exports.propsExcept = propsExcept;
exports.propsOf = propsOf;
exports.query = query;
exports.reIx = reIx;
exports.removable = removable;
exports.remove = remove;
exports.replace = replace;
exports.replaces = replaces;
exports.required = required;
exports.reread = reread;
exports.rewrite = rewrite;
exports.satisfying = satisfying;
exports.seemsArrayLike = seemsArrayLike;
exports.select = select;
exports.selectAs = selectAs;
exports.seq = seq;
exports.set = set;
exports.setIx = setIx;
exports.setOp = setOp;
exports.setter = setter;
exports.skipIx = skipIx;
exports.slice = slice;
exports.split = split;
exports.subseq = subseq;
exports.subset = subset;
exports.subtract = subtract;
exports.suffix = suffix;
exports.sum = sum;
exports.sumAs = sumAs;
exports.tieIx = tieIx;
exports.toFunction = toFunction;
exports.transform = transform;
exports.transformAsync = transformAsync;
exports.traverse = traverse;
exports.uncouple = uncouple;
exports.unfold = unfold;
exports.ungroupBy = ungroupBy;
exports.unless = unless;
exports.unzipWith1 = unzipWith1;
exports.valueOr = valueOr;
exports.when = when;
exports.zipWith1 = zipWith1;
