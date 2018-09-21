import { add, all, all1, alternatives, and, and1, any, applyAt, array, assign, assignOp, branch, branchOr, branches, chain, choice, choices, choose, collect, collectAs, collectTotal, collectTotalAs, compose, concat, concatAs, cond, condOf, conjugate, count, countIf, counts, countsAs, cross, defaults, define, disjoint, disperse, divide, dropPrefix, dropSuffix, filter, find, findWith, flat, foldTraversalLens, foldl, foldr, forEach, forEachWith, fromFantasy, fromFantasyApplicative, fromFantasyMonad, get, getAs, getInverse, getLog, getter, ifElse, index, inverse, is, isDefined, isEmpty, iso, iterate, join, joinAs, joinIx, json, lazy, lens, log, mapIx, mapping, mappings, matches, maximum, maximumBy, mean, meanAs, minimum, minimumBy, modify, modifyAsync, modifyOp, multiply, none, normalize, or, orAlternatively, orElse, partsOf, pick, pickIn, pointer, prefix, product, productAs, prop, props, propsOf, query, removable, remove, replace, replaces, required, reread, rewrite, satisfying, seemsArrayLike, select, selectAs, seq, set, setIx, setOp, setter, skipIx, slice, split, subset, subtract, suffix, sum, sumAs, tieIx, toFunction, transform, transformAsync, traverse, uncouple, unless, valueOr, when } from 'partial.lenses';
export { FantasyFunctor, Identity, IdentityAsync, Select, _, append, children, complement, elems, elemsTotal, entries, first, flatten, identity, indexed, keyed, keys, last, leafs, multikeyed, negate, optional, querystring, removeOp, reverse, singleton, uri, uriComponent, values, zero } from 'partial.lenses';
import { lift } from 'karet.lift';

// THIS FILE IS GENERATED
var add$1 = /*#__PURE__*/lift(add);
var all$1 = /*#__PURE__*/lift(all);
var all1$1 = /*#__PURE__*/lift(all1);
var alternatives$1 = /*#__PURE__*/lift(alternatives);
var and$1 = /*#__PURE__*/lift(and);
var and1$1 = /*#__PURE__*/lift(and1);
var any$1 = /*#__PURE__*/lift(any);
var applyAt$1 = /*#__PURE__*/lift(applyAt);
var array$1 = /*#__PURE__*/lift(array);
var assign$1 = /*#__PURE__*/lift(assign);
var assignOp$1 = /*#__PURE__*/lift(assignOp);
var branch$1 = /*#__PURE__*/lift(branch);
var branchOr$1 = /*#__PURE__*/lift(branchOr);
var branches$1 = /*#__PURE__*/lift(branches);
var chain$1 = /*#__PURE__*/lift(chain);
var choice$1 = /*#__PURE__*/lift(choice);
var choices$1 = /*#__PURE__*/lift(choices);
var choose$1 = /*#__PURE__*/lift(choose);
var collect$1 = /*#__PURE__*/lift(collect);
var collectAs$1 = /*#__PURE__*/lift(collectAs);
var collectTotal$1 = /*#__PURE__*/lift(collectTotal);
var collectTotalAs$1 = /*#__PURE__*/lift(collectTotalAs);
var compose$1 = /*#__PURE__*/lift(compose);
var concat$1 = /*#__PURE__*/lift(concat);
var concatAs$1 = /*#__PURE__*/lift(concatAs);
var cond$1 = /*#__PURE__*/lift(cond);
var condOf$1 = /*#__PURE__*/lift(condOf);
var conjugate$1 = /*#__PURE__*/lift(conjugate);
var count$1 = /*#__PURE__*/lift(count);
var countIf$1 = /*#__PURE__*/lift(countIf);
var counts$1 = /*#__PURE__*/lift(counts);
var countsAs$1 = /*#__PURE__*/lift(countsAs);
var cross$1 = /*#__PURE__*/lift(cross);
var defaults$1 = /*#__PURE__*/lift(defaults);
var define$1 = /*#__PURE__*/lift(define);
var disjoint$1 = /*#__PURE__*/lift(disjoint);
var disperse$1 = /*#__PURE__*/lift(disperse);
var divide$1 = /*#__PURE__*/lift(divide);
var dropPrefix$1 = /*#__PURE__*/lift(dropPrefix);
var dropSuffix$1 = /*#__PURE__*/lift(dropSuffix);
var filter$1 = /*#__PURE__*/lift(filter);
var find$1 = /*#__PURE__*/lift(find);
var findWith$1 = /*#__PURE__*/lift(findWith);
var flat$1 = /*#__PURE__*/lift(flat);
var foldTraversalLens$1 = /*#__PURE__*/lift(foldTraversalLens);
var foldl$1 = /*#__PURE__*/lift(foldl);
var foldr$1 = /*#__PURE__*/lift(foldr);
var forEach$1 = /*#__PURE__*/lift(forEach);
var forEachWith$1 = /*#__PURE__*/lift(forEachWith);
var fromFantasy$1 = /*#__PURE__*/lift(fromFantasy);
var fromFantasyApplicative$1 = /*#__PURE__*/lift(fromFantasyApplicative);
var fromFantasyMonad$1 = /*#__PURE__*/lift(fromFantasyMonad);
var get$1 = /*#__PURE__*/lift(get);
var getAs$1 = /*#__PURE__*/lift(getAs);
var getInverse$1 = /*#__PURE__*/lift(getInverse);
var getLog$1 = /*#__PURE__*/lift(getLog);
var getter$1 = /*#__PURE__*/lift(getter);
var ifElse$1 = /*#__PURE__*/lift(ifElse);
var index$1 = /*#__PURE__*/lift(index);
var inverse$1 = /*#__PURE__*/lift(inverse);
var is$1 = /*#__PURE__*/lift(is);
var isDefined$1 = /*#__PURE__*/lift(isDefined);
var isEmpty$1 = /*#__PURE__*/lift(isEmpty);
var iso$1 = /*#__PURE__*/lift(iso);
var iterate$1 = /*#__PURE__*/lift(iterate);
var join$1 = /*#__PURE__*/lift(join);
var joinAs$1 = /*#__PURE__*/lift(joinAs);
var joinIx$1 = /*#__PURE__*/lift(joinIx);
var json$1 = /*#__PURE__*/lift(json);
var lazy$1 = /*#__PURE__*/lift(lazy);
var lens$1 = /*#__PURE__*/lift(lens);
var log$1 = /*#__PURE__*/lift(log);
var mapIx$1 = /*#__PURE__*/lift(mapIx);
var mapping$1 = /*#__PURE__*/lift(mapping);
var mappings$1 = /*#__PURE__*/lift(mappings);
var matches$1 = /*#__PURE__*/lift(matches);
var maximum$1 = /*#__PURE__*/lift(maximum);
var maximumBy$1 = /*#__PURE__*/lift(maximumBy);
var mean$1 = /*#__PURE__*/lift(mean);
var meanAs$1 = /*#__PURE__*/lift(meanAs);
var minimum$1 = /*#__PURE__*/lift(minimum);
var minimumBy$1 = /*#__PURE__*/lift(minimumBy);
var modify$1 = /*#__PURE__*/lift(modify);
var modifyAsync$1 = /*#__PURE__*/lift(modifyAsync);
var modifyOp$1 = /*#__PURE__*/lift(modifyOp);
var multiply$1 = /*#__PURE__*/lift(multiply);
var none$1 = /*#__PURE__*/lift(none);
var normalize$1 = /*#__PURE__*/lift(normalize);
var or$1 = /*#__PURE__*/lift(or);
var orAlternatively$1 = /*#__PURE__*/lift(orAlternatively);
var orElse$1 = /*#__PURE__*/lift(orElse);
var partsOf$1 = /*#__PURE__*/lift(partsOf);
var pick$1 = /*#__PURE__*/lift(pick);
var pickIn$1 = /*#__PURE__*/lift(pickIn);
var pointer$1 = /*#__PURE__*/lift(pointer);
var prefix$1 = /*#__PURE__*/lift(prefix);
var product$1 = /*#__PURE__*/lift(product);
var productAs$1 = /*#__PURE__*/lift(productAs);
var prop$1 = /*#__PURE__*/lift(prop);
var props$1 = /*#__PURE__*/lift(props);
var propsOf$1 = /*#__PURE__*/lift(propsOf);
var query$1 = /*#__PURE__*/lift(query);
var removable$1 = /*#__PURE__*/lift(removable);
var remove$1 = /*#__PURE__*/lift(remove);
var replace$1 = /*#__PURE__*/lift(replace);
var replaces$1 = /*#__PURE__*/lift(replaces);
var required$1 = /*#__PURE__*/lift(required);
var reread$1 = /*#__PURE__*/lift(reread);
var rewrite$1 = /*#__PURE__*/lift(rewrite);
var satisfying$1 = /*#__PURE__*/lift(satisfying);
var seemsArrayLike$1 = /*#__PURE__*/lift(seemsArrayLike);
var select$1 = /*#__PURE__*/lift(select);
var selectAs$1 = /*#__PURE__*/lift(selectAs);
var seq$1 = /*#__PURE__*/lift(seq);
var set$1 = /*#__PURE__*/lift(set);
var setIx$1 = /*#__PURE__*/lift(setIx);
var setOp$1 = /*#__PURE__*/lift(setOp);
var setter$1 = /*#__PURE__*/lift(setter);
var skipIx$1 = /*#__PURE__*/lift(skipIx);
var slice$1 = /*#__PURE__*/lift(slice);
var split$1 = /*#__PURE__*/lift(split);
var subset$1 = /*#__PURE__*/lift(subset);
var subtract$1 = /*#__PURE__*/lift(subtract);
var suffix$1 = /*#__PURE__*/lift(suffix);
var sum$1 = /*#__PURE__*/lift(sum);
var sumAs$1 = /*#__PURE__*/lift(sumAs);
var tieIx$1 = /*#__PURE__*/lift(tieIx);
var toFunction$1 = /*#__PURE__*/lift(toFunction);
var transform$1 = /*#__PURE__*/lift(transform);
var transformAsync$1 = /*#__PURE__*/lift(transformAsync);
var traverse$1 = /*#__PURE__*/lift(traverse);
var uncouple$1 = /*#__PURE__*/lift(uncouple);
var unless$1 = /*#__PURE__*/lift(unless);
var valueOr$1 = /*#__PURE__*/lift(valueOr);
var when$1 = /*#__PURE__*/lift(when);

export { add$1 as add, all$1 as all, all1$1 as all1, alternatives$1 as alternatives, and$1 as and, and1$1 as and1, any$1 as any, applyAt$1 as applyAt, array$1 as array, assign$1 as assign, assignOp$1 as assignOp, branch$1 as branch, branchOr$1 as branchOr, branches$1 as branches, chain$1 as chain, choice$1 as choice, choices$1 as choices, choose$1 as choose, collect$1 as collect, collectAs$1 as collectAs, collectTotal$1 as collectTotal, collectTotalAs$1 as collectTotalAs, compose$1 as compose, concat$1 as concat, concatAs$1 as concatAs, cond$1 as cond, condOf$1 as condOf, conjugate$1 as conjugate, count$1 as count, countIf$1 as countIf, counts$1 as counts, countsAs$1 as countsAs, cross$1 as cross, defaults$1 as defaults, define$1 as define, disjoint$1 as disjoint, disperse$1 as disperse, divide$1 as divide, dropPrefix$1 as dropPrefix, dropSuffix$1 as dropSuffix, filter$1 as filter, find$1 as find, findWith$1 as findWith, flat$1 as flat, foldTraversalLens$1 as foldTraversalLens, foldl$1 as foldl, foldr$1 as foldr, forEach$1 as forEach, forEachWith$1 as forEachWith, fromFantasy$1 as fromFantasy, fromFantasyApplicative$1 as fromFantasyApplicative, fromFantasyMonad$1 as fromFantasyMonad, get$1 as get, getAs$1 as getAs, getInverse$1 as getInverse, getLog$1 as getLog, getter$1 as getter, ifElse$1 as ifElse, index$1 as index, inverse$1 as inverse, is$1 as is, isDefined$1 as isDefined, isEmpty$1 as isEmpty, iso$1 as iso, iterate$1 as iterate, join$1 as join, joinAs$1 as joinAs, joinIx$1 as joinIx, json$1 as json, lazy$1 as lazy, lens$1 as lens, log$1 as log, mapIx$1 as mapIx, mapping$1 as mapping, mappings$1 as mappings, matches$1 as matches, maximum$1 as maximum, maximumBy$1 as maximumBy, mean$1 as mean, meanAs$1 as meanAs, minimum$1 as minimum, minimumBy$1 as minimumBy, modify$1 as modify, modifyAsync$1 as modifyAsync, modifyOp$1 as modifyOp, multiply$1 as multiply, none$1 as none, normalize$1 as normalize, or$1 as or, orAlternatively$1 as orAlternatively, orElse$1 as orElse, partsOf$1 as partsOf, pick$1 as pick, pickIn$1 as pickIn, pointer$1 as pointer, prefix$1 as prefix, product$1 as product, productAs$1 as productAs, prop$1 as prop, props$1 as props, propsOf$1 as propsOf, query$1 as query, removable$1 as removable, remove$1 as remove, replace$1 as replace, replaces$1 as replaces, required$1 as required, reread$1 as reread, rewrite$1 as rewrite, satisfying$1 as satisfying, seemsArrayLike$1 as seemsArrayLike, select$1 as select, selectAs$1 as selectAs, seq$1 as seq, set$1 as set, setIx$1 as setIx, setOp$1 as setOp, setter$1 as setter, skipIx$1 as skipIx, slice$1 as slice, split$1 as split, subset$1 as subset, subtract$1 as subtract, suffix$1 as suffix, sum$1 as sum, sumAs$1 as sumAs, tieIx$1 as tieIx, toFunction$1 as toFunction, transform$1 as transform, transformAsync$1 as transformAsync, traverse$1 as traverse, uncouple$1 as uncouple, unless$1 as unless, valueOr$1 as valueOr, when$1 as when };
