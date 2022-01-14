import "whatwg-fetch";
import { rest } from "msw";
import { setupServer } from "msw/node";

import { collect } from "./collect";

const server = setupServer(
  rest.get(
    "http://api.openweathermap.org/data/2.5/weather",
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({ base: "stations", clouds: { all: 6 }, cod: 200 })
      );
    }
  )
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

it("collects data", async () => {
  const res = await collect();
  expect(res).toEqual({ base: "stations", clouds: { all: 6 }, cod: 200 });
});

// it("handles failure", () => {
//   server.use(
//     rest.get(
//       "http://api.openweathermap.org/data/2.5/weather",
//       (req, res, ctx) => {
//         return res(ctx.json({ message: "error" }), ctx.status(401));
//       }
//     )
//   );
//   return expect(collect()).rejects.toEqual({ message: "error" });
// });

// CAN SEE WHAT IS BEING RECIEVED WITH THIS FAILED TEST
// it("collects data", async () => {
//     const res = await collect()
//     expect(res).toBeFalsy()
// })
it("handles failure", () => {
  server.use(
    rest.get(
      "http://api.openweathermap.org/data/2.5/weather",
      (req, res, ctx) => {
        return res(ctx.json({message: "error"}), ctx.status(401));
      }
    )
  );
  return expect(collect()).rejects.toEqual({ message: "error", status: 401 });
});