const { app, output } = require("@azure/functions");

const messagesOutput = output.serviceBusQueue({
  connection: "ServiceBusConnectionString",
  queueName: process.env.ServiceBusQueueName,
});

app.http("sendMessage", {
  methods: ["POST"],
  authLevel: "anonymous",
  extraOutputs: [messagesOutput],
  handler: async (request, context) => {
    context.log(`Http function processed request for url "${request.url}"`);

    const payload = (await request.json()) || {};

    if (payload.message && payload.user) {
      context.extraOutputs.set(messagesOutput, payload);
      return {
        jsonBody: { message: "Message successfully published!" },
        status: 201,
      };
    } else {
      return {
        jsonBody: { error: "Missing 'message' and/or 'user' attributes in the request." },
        status: 400,
      };
    }
  },
});
