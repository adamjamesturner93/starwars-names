var starWarsNames = require("./starwars-names.json");
let starwars = require("./index");

describe("starwars-names", () => {
  describe("all", () => {
    test("should contain all values from the JSON input file", () => {
      expect(starwars.all).toEqual(expect.arrayContaining(starWarsNames));
    });
  });
  describe("Random", () => {
    it("should return a random value from starwars.all", () => {
      var randomItem = starwars.random();
      expect(starwars.all).toContain(randomItem);
    });
  });
});
