
# Youtube Subscribers backend Project

This project using NodeJS, Express and including perticular routes end point in the URL, through this users can access products list  and access particular product details by perticular IDs.

## Run Locally

Clone the project

```bash
  git clone https://github.com/Javedansari1993/centeuno_assigment.git
```

Go to the project directory

```bash
  cd centeuno_assigment
```

Install dependencies

```bash
  npm install
```

## API Reference

#### Get all products lists

```http
  http://localhost:3000/api/products/list
```


#### Get single product details

```http
  http://localhost:3000/api/products/:id
```