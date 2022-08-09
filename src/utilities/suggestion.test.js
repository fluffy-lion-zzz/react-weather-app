import "whatwg-fetch";
import { rest } from "msw";
import { setupServer } from "msw/node";

import { suggestion } from "./suggestion";

const server = setupServer(
  rest.get(
    "https://api.geoapify.com/v1/geocode/autocomplete",
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {
                city: "London",
              },
            },
            {
              type: "Feature",
              properties: {
                name: "Long An province",
              },
            },
          ],
          query: {
            text: "lon",
          },
        })
      );
    }
  )
);
beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe("suggester", () => {
  it("collects suggestions", async () => {
    const res = await suggestion();
    expect(res).toEqual({
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          properties: {
            city: "London",
          },
        },
        {
          type: "Feature",
          properties: {
            name: "Long An province",
          },
        },
      ],
      query: {
        text: "lon",
      },
    });
  });

  it("handles failure", () => {
    server.use(
      rest.get(
        "https://api.geoapify.com/v1/geocode/autocomplete",
        (req, res, ctx) => {
          return res(
            ctx.json({
              statusCode: 401,
              error: "Unauthorized",
              message: "Invalid apiKey",
            }),
            ctx.status(401)
          );
        }
      )
    );
    return expect(suggestion()).rejects.toEqual({
      message: "Invalid apiKey",
      status: 401,
    });
  });
});
