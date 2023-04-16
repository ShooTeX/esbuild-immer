import { assign } from "@xstate/immer";
import { enableMapSet } from "immer";
import { createMachine, interpret } from "xstate";

enableMapSet();

const machine = createMachine({
  id: 'test',
  initial: 'pending',
  preserveActionOrder: true,
  context: {
    testMap: new Map(),
  },
  states: {
    pending: {
      entry: assign(ctx => {ctx.testMap.set("michel", {name: "Michel Weststrate", country: "NL"})})
    },
    resolved: {},
    rejected: {},
  }
})

interpret(machine).start().subscribe(console.log)
