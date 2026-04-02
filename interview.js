// In your local editor / IDE, implement the following functions
// *
/**
 * Encodes a flat object into a query string
 * Ex: objectToQueryString({ x: 2, y: true, z: "1" }) => "?x=2&y=true&z=1"
 *
 * Using URLSearchParams is not allowed
 *
 * @param {Record<string, number | string | boolean>} obj
 * @returns {string}
 */

// { x: 2, y: true, z: "1" }
function objectToQueryString(obj) {
  // your implementation here
  const query = Object.entries(obj).map(() => {
    return ''
  })
   
   if (query) {
     return '?' + query
   }
   
}

/**
 * Flattens an array of nested arrays of any depth into a single array
//  * Ex: flattenArray([1, [2, [3, [4, [5]]]]]) => [1, 2, 3, 4, 5]
 */
function flattenArray(arr) {
  // your implementation here
}

/**
 * Creates a deep clone a value of nested objects and arrays of any depth
 *
 * Example usage:
 * const original = { a: 1, b: { c: 2 } }; <= 
 * const cloned = deepClone(original);
 * cloned.b.c = 3;
 * console.log(original.b.c); // 2 (original object remains unchanged)
 * console.log(cloned.b.c) //3 (cloned object is mutated)
 */
function deepClone(value) {
  // Your deepClone implementation here
  
}


// Do not modify below

let j = JSON.stringify;
runTests(objectToQueryString, [
  [{ x: 2, y: true, z: "1" }, "?x=2&y=true&z=1"],
  [{ a: "hello", b: false, c: 42 }, "?a=hello&b=false&c=42"],
  [{}, ""],
]);
runTests(flattenArray, [
  [
    [1, [2, [3, [4, [5]]]]],
    [1, 2, 3, 4, 5],
  ],
  [
    [1, "2", [[{ a: 3 }], null]],
    [1, "2", { a: 3 }, null],
  ],
  [
    [[], [1], [1, [false]], [1, [2], [1, [2]]]],
    [1, 1, false, 1, 2, 1, 2],
  ],
  [[], []],
]);
runDeepCloneTest();

function runTests(fn, ts) {
  for (let t of ts) {
    let input = t[0],
      expected = j(t[1]),
      result = j(fn(input));

    console.log(
      `${fn.name}(${j(input)}): ${
        result === expected
          ? "OK"
          : `ERR\nExpected: ${expected}\nGot: ${result}`
      }\n`
    );
  }
}

function runDeepCloneTest() {
  let i = { a: 1, b: { c: [3, { d: 4, e: [] }] } };

  let _t = (t, pass) =>
      console.log(`deepClone(${j(i)}) ${t}: ${pass ? `OK` : `ERR`}\n`),
    t = (t, cb) => {
      let a = cb(i),
        b = cb(c);
      _t(t, a && a !== b && j(a) === j(b));
    };

  let c = deepClone(i);
  _t("Shape match", j(c) === j(i));
  t("Reference mismatch", (c) => c);
  t("Nested mismatch 1", (c) => c?.b?.c);
  t("Nested mismatch 2", (c) => c?.b?.c[1]);
  t("Nested mismatch 3", (c) => c?.b?.c[1]?.e);
}
