// test/diploma.test.js

const Diploma = artifacts.require("Diploma");

contract("Diploma", accounts => {
  it("should do something", async () => {
    const diplomaInstance = await Diploma.deployed();
    
    // Replace with your actual test code
    assert.equal(1, 1, "Test placeholder");
  });
});
