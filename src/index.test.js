var starWarsNames = require("./starwars-names.json");
let starwars = require("./index");

describe("starwars-names", () => {
  describe("all", () => {
    test("should contain all values from the JSON input file", () => {
      expect(starwars.all).toEqual(expect.arrayContaining(starWarsNames));
    });
    test('should contain Ben Skywalker', () => {
      expect(starwars.all).toContain('Ben Skywalker');
    });
  });
  describe("Random", () => {
    it("should return a random value from starwars.all", () => {
      var randomItem = starwars.random();
      expect(starwars.all).toContain(randomItem);
    });

    it("should return an array of random numbers if passed a number", () => {
      var randomItems = starwars.random(3);
      expect(randomItems.length).toEqual(3);
    })
  });
});
