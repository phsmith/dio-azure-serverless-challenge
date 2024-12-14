const { app } = require("@azure/functions");
const { cpf } = require("cpf-cnpj-validator");

app.http("validateCPF", {
  methods: ["GET"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    context.log(`Http function processed request for url "${request.url}"`);

    const cpfNumber = request.query.get("cpf");
    let body;
    let status;

    if (!cpfNumber) {
      body = { error: "cpf parameter not specified" };
      status = 400;
    } else if (cpf.isValid(cpfNumber)) {
      body = { message: "CPF is valid!" };
      status = 200;
    } else {
      body = { error: "Invalid CPF." };
      status = 400;
    }

    return {
      jsonBody: body,
      status: status,
    };
  },
});
