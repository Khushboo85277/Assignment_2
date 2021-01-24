// Question 1

// What is the value of clothes[0] and why?
//  const clothes = ['jacket', 't-shirt'];
//  clothes.length = 0;
//  console.log(clothes[0]);

// output:     undefined
//here we are reducing the length of the array , resulting in deleting its own elements
// Because of this length behavior, when js executes clothes.length = 0, 
// all the items of the array clothes are deleted.
//and hence output is undefined

// clothes[0] is undefined, because clothes array was emptied.


// Question 2

// Write a Javascript program to find the sum of all elements of a given array?

var arr=[1,2,3,4,5];

var sum=0;
for(var i=0;i<arr.length;i++)
{
    sum+=arr[i];
}
console.log(sum);






