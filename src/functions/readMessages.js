const { app } = require("@azure/functions");

app.serviceBusQueue("readMessages", {
  connection: "ServiceBusConnectionString",
  queueName: process.env.ServiceBusQueueName,
  handler: (message, context) => {
    context.log("Service bus queue function processed message:", message);
    context.log("EnqueuedTimeUtc =", context.triggerMetadata.enqueuedTimeUtc);
    context.log("DeliveryCount =", context.triggerMetadata.deliveryCount);
    context.log("MessageId =", context.triggerMetadata.messageId);
  },
});
