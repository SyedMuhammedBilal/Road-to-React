let user = {
    name: 'serverless_cloud',
    age: 18,
    gender: 'male'
};

let keys = Object.keys(user);
console.log(keys)

// [ 'name', 'age', 'gender' ]

let values = Object.values(user);
console.log(values);

// [ 'serverless_cloud', 18, 'male' ]

let entries = Object.entries(user);
console.log(entries);

// [ [ 'name', 'serverless_cloud' ], [ 'age', 18 ], [ 'gender', 'male' ] ]