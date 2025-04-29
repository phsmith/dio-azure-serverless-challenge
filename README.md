# DIO - Azure Serverless Challenge

The goal of this challenge is to develop an Azure function that can send and read messages from an Azure Service Bus queue.

## Structure

```
.
├── config
│   └── config.toml -> ServiceBus emulator config file
├── frontend
│   └── cpf-validator
│       ├── package.json
│       ├── public
│       │   ├── index.html
│       │   └── styles.css
│       ├── README.md
│       └── src
│           └── app.js
├── host.json -> Functions general config file
├── local.settings.json -> Functions local settings/vars file
├── package.json -> Node.js project setup file
├── README.md -> Project documentation file
└── src -> Functions and frontend source code
    └── functions
        ├── readMessages.js
        ├── sendMessage.js
        └── validateCPF.js
```

## Functions

* **sendMessages** - HTTP trigger-type function responsible for receiving a JSON payload and sending it to an Azure ServiceBus queue.
* **readMessages** - ServiceBusQueue trigger-type function responsible for automatically processing messages in a specified Azure ServiceBus queue.
* **validateCPF** - HTTP trigger-type function responsible for receiving a `cpf` parameter and returning whether it is valid or not.

### Setup

This project was developed by using Node.js v20.18.0.

To develop locally, the following steps are required:

1) Install the Azure Functions Core Tools:
    ```sh
    npm i -g azure-functions-core-tools@4 --unsafe-perm true
    ```
2) Install the project dependencies:
    ```sh
    npm install
    ```
3) Docker is required to run the amazing [Lazvard Message AMQP server simulator](https://github.com/PejmanNik/lazvard-message), which is unofficially compatible with the Azure Service Bus:
    ```sh
    docker run --rm --name servicebus-emulator -d -p 5671:5671 -v ./config:/App/config pejmann/lazvard-message
    ```
    In another terminal, run the following command to track the emulator logs:
    ```
    docker logs -f servicebus-emulator
    ```
4) Start the functions:
    ```sh
    func start
    ```
5) Start playing:

    ```sh
    curl -X POST 'http://localhost:7071/api/sendMessage' -H 'Content-Type: application/json' -d '{"user":"Phillipe Smith","message": "Hey! It works"}'
    curl -X GET 'http://localhost:7071/api/validateCPF?cpf=00000000000'
    ```
## Frontend

- [cpf-validator](./frontend/cpf-validator/README.md) -> Simple web interface for the `validateCPF` Azure Function.
