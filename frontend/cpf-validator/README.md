# CPF Validator

This project is a simple web application that validates Brazilian CPF numbers using an API. Users can input a CPF number, and the application will display whether the CPF is valid or not.

## Project Structure

```
cpf-validator
├── public
│   ├── index.html      # HTML structure for the web page
│   └── styles.css      # CSS styles for the web page
├── src
│   └── app.js          # JavaScript code to interact with the API
├── package.json         # npm configuration file
└── README.md            # Project documentation
```

## Getting Started

To get started with the CPF Validator Web application, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd cpf-validator-web
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the application**:
   You can use a local server to serve the `public` directory. For example, you can use `live-server` or any other static server.
   ```
   npx live-server public
   ```

4. **Access the application**:
   Open your web browser and go to `http://localhost:8080` (or the port specified by your server).

## Usage

- Enter a CPF number in the input field and click the "Validate" button.
- The application will display whether the CPF is valid or invalid based on the response from the API.

## API Endpoint

The application interacts with the following API endpoint to validate CPF numbers:

```
GET http://localhost:7071/api/validateCPF?cpf=<cpf-number>
```

Replace `<cpf-number>` with the CPF number you want to validate.

## License

This project is licensed under the MIT License.
