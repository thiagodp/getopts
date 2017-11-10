const test = require("tape")
const getopts = require("../")

test("opts.default", t => {
  t.plan(3)

  const defaults = {
    c: true,
    D: true,
    e: false
  }
  t.deepEqual(
    getopts(["-abC"], {
      alias: {
        A: "a",
        b: "B",
        c: "C",
        d: "D",
        E: ["e", "eek", "eh"]
      },
      default: defaults
    }),
    {
      _: [],
      a: true,
      A: true,
      b: true,
      B: true,
      c: true,
      C: true,
      d: true,
      D: true,
      e: false,
      E: false,
      eek: false,
      eh: false
    }
  )

  t.deepEqual(
    defaults,
    {
      c: true,
      D: true,
      e: false
    }
  )

  t.deepEqual(
    getopts([], {
      alias: {
        a: ["A", "B"],
      },
      default: {
        A: true,
        B: false,
      }
    }),
    {
      _: [],
      a: true,
      A: true,
      B: true,
    }
  )
})
