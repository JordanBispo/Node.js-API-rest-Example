# Customer Manager API

A simple rest API to manage customer, programmed with Node.js and MongoDB, this API: register new customer; Search for a specific customer; List all customer.

## Author
<a href="https://jordanbispo.com.br">Jordan Rodrigo Souza Bispo</a>

## Installation

1º step - In the root folder create the .env file containing the environment variables according to the .env.example file.

2º step - Run
```bash 
    > npm i 

      or

    > yarn
```
to install the node's dependencies.

3º step - Run 
```bash 
    > npm start 

       or

    > yarn start
``` 

to start server.

## Usage
 
Use the post, get, put and patch methods, with the correct parameters in the following end poits:
    *obs.: all responses from the server contain an object with a message, ({message: "message"}), and if requested a get or patch can also contain objects and lists according to the route

## API Routes 

### Register New Customer

This endpoint receives in the request body a JSON object containing a customer following the pattern for example, and register this customer.

* Method POST.
* Endpoint URL - /api/newCustomer.
* Response {message: "status message"}.

Body example:
```javascript
    {
    "name" : "Customer name", // String
    "birth": "1997-04-15",  // String - Just YYYY-MM-DD format
    "sex" : "male", // String - Just ["male", "female", "masculino" or "feminino"] 
    "healthProblems": [ // Array
        {
            "name": "health problem name", // String
            "degree": 1 // Number - [Min 1, Max 10]
        }
    ]
}
```

### Get Customers

This endpoint get a customer, using the name and birth parameters passed in the URL as a filter.
If no filter parameter is passed, it will return a list of all customers.
  
* Method GET.
* Endpoint URL - /api/getCustomer?name=&birth=.
* Response {message: "status message", Customer: Object} or {message: "status message", CustomerList: Array}.

### Update Customer

This endpoint gets a customer, using the name and birth parameters passed in the URL as a filter, and replaces it with the customer pass in the request body.
  
* Method PUT.
* Endpoint URL - api/editCustomer?name=&birth=.
* Response {message: "status message", Customer: Object} or {message: "status message", CustomerList: Array}.
    
Body example:
```javascript
    {
    "name" : "Customer name", // String
    "birth": "1997-04-15",  // String - Just YYYY-MM-DD format
    "sex" : "male", // String - Just ["male", "female", "masculino" or "feminino"] 
    "healthProblems": [ // Array
        {
            "name": "health problem name", // String
            "degree": 1 // Number - [Min 1, Max 10]
        }
    ]
}
```

### Add/Remove a specific customer's health problem 

This endpoint change the list of health problems of a customer using the list received in the body of the request according to the following rules:

* If the customer has a health problem listed below, it will be removed.
* else, it will be added to the list of health problems for this custumer.

The url must contain as parameter the ID of the custumer who will have list of health problems updated.

* Method PATCH.  
* Endpoint URL - /api/ECHP?id=.  
* Response {message: "status message", changes: { addedToList: Array, removedFromList: Array}, Customer: Object}.

Body Example:
```javascript
{
    "list": [
        {
            "name": "health problem name", // String
            "degree": 1 // Number - [Min 1, Max 10]
        },
        {
            "name": " other health problem name", // String
            "degree": 2 // Number - [Min 1, Max 10]
        }
    ]
}
```

### TEST.http
Case you are using VSCode, Install / enable the extension "REST Client" to test in a simple way and testing the api routes with just one click.

If the extension is enabled, it is enough that the server is running on localhost to test the routes.

In the file above each route there is written "Send Request"
and just click on the word and the request will be made.

https://github.com/Huachao/vscode-restclient/blob/master/README.md



## License
[MIT](https://choosealicense.com/licenses/mit/)