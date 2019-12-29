let array =[{id:1,name:'ankit'},
{id:2,name:'ankittomar'}
];

let result =array.find(array=>{
    return array.id===99;
})

console.log(result);