# App.js

Converts CSV to JSON object array

## Installation

```js script
npm install -> npm i
```

# EXAMPLE

sample.csv <- local file

```console
id,name,email,country,age
100,John Doe,john@website.com,US,35
101,Jane Doe,jane@website.com,UK,30
102,John Lee,john@website.com,FR,20
103,Greg Hoover,greg@website.com,US,35
```

# SAMPLE OUTPUT

```yaml
[
  {
    id: "100",
    name: "John Doe",
    email: "john@website.com",
    country: "US",
    age: "35",
  },
  {
    id: "101",
    name: "Jane Doe",
    email: "jane@website.com",
    country: "UK",
    age: "30",
  },
  {
    id: "102",
    name: "John Lee",
    email: "john@website.com",
    country: "FR",
    age: "20",
  },
  {
    id: "103",
    name: "Greg Hoover",
    email: "greg@website.com",
    country: "US",
    age: "35",
  },
]
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
