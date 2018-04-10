# Project_server

#User signup
``javascript
//POST http://localhost:8080/user/signup
//request example:
{
  "email": "3@1.com",
  "password": "1111",
  "name": "aa",
  "phone": 12345678,
  "street": "124",
  "city": "austin",
  "zipcode": 78669
}
```

#User Login
``javascript
//POST http://localhost:8080/user/login
//request example:
{
  "email": "3@2.com",
  "password": "1234"
}
```

#Add Pro
``javascript
//POST http://localhost:8080/api/pro
//request example:
{
  "email": "3@12.com",
  "password": "1234",
  "name": "Austin MAIDING",
  "phone": 1231231231,
  "address": "12 1st drive",
  "type": "lawn",
  "bankAccount": 12345
}
```

#Get a pro by service type
``javascript
//request example:
//GET http://localhost:8080/api/pro/maid
```

#Add new service
``javascript
//POST http://localhost:8080/api/service
//request example:
{
  "customerId": "5acd10d01cc4d7424836de22",
  "proId": "5acd20c45fcd1053ac4bf85c",
  "price": 19.99,
  "phone": 1231231231,
  "serviceDate": "2018/04/20",
  "serviceType": "maid"
}
``

#Get service by user Id
``javascript
//request example:
//GET http://localhost:8080/api/service/user/5acd10d01cc4d7424836de22
``

#Get service by pro Id
``javascript
//request example:
//GET http://localhost:8080/api/service/pro/5acd20c45fcd1053ac4bf85c
``

#update service review from customer
``javascript
//PUT http://localhost:8080/api/service/5acd244e0892390b086789bb
//request example:
{
  "customerReview": 4,
  "customerComment": "Good",
  "customerSatisfied": true
}
``

#update service review from pro
``javascript
//PUT http://localhost:8080/api/service/5acd244e0892390b086789bb
//request example:
{
  "proReview": 3,
  "proComment": "Bad",
  "proSatisfied": false
}
``
