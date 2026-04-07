export default $config({
  app(input) {
    return {
      name: "my-sst-app",
      home: "aws",
      providers: {
        aws: {
          profile: input.stage === "production" ? "thesolidchain-production" : "thesolidchain-dev"
        }
      }
    };
  },
  async run() {
    // Your resources
  }
});
