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
    let payload;

    try {
      payload = await request.json();
    } catch {
      return {
        jsonBody: { error: "A JSON payload is required." },
        status: 400,
      };
    }

    if (Object.keys(payload).length > 0) {
      context.extraOutputs.set(messagesOutput, payload);
      return {
        jsonBody: { message: "Message successfully published!" },
        status: 201,
      };
    } else {
      return {
        jsonBody: { error: "Payload is empty." },
        status: 400,
      };
    }
  },
});
