

// //1. Write a ts program to print all natural numbers from 1 to n. - using while loop

// var a:string|null=prompt(`enter a number`)
// var n:number=Number(a)
// var i:number=1
// while (i<=n) {
//        document.write(i)
//        document.write("<br>")
//     i++

// }
// document.write("<br>")
// document.write("<br>")

//// ----------------&&&&&&&&&&&&---------------

// // 2. Write a ts program to print all natural numbers in reverse (from n to 1). - using while loop

// var a1:string|null=prompt(`enter a number`)
// var n1:number=Number(a1)

// var i1:number=1

// while (n1>=i1) {
//     document.write(n1)
//     document.write("<br>")
//     n1--
// }

// document.write("<br>")
// document.write("<br>")

//        ////     ------------------$$$$$$$$$$$$$$$$$$--------------------
// // Write a ts program to print all alphabets from a to z. - using while loop


//  var i:string|CharacterData='a'
// var j:string|CharacterData='z'
// while (i<=j) {
//         console.log(i)
//         i++

// }

// var n:any=0
// for(let i=0;i<26;i++)
// {
//         var char:string=String.fromCharCode(97+i)
//         console.log(char)
// }




// while (i>='a'&&i<='z') {
//     document.write(i)
//     ++i
//     document.write("<br>")

//  }



// // var i:any='a'
// // var k:any='z'
// // for(let j=i;j<=k;j++){
// //     document.write(j)
// // }


// // ----------------&&&&&&&&&&&&&&--------------
// //             // 4. Write a ts program to print all even numbers between 1 to 100. - using while loop

// //             var i:any=0
// // while(i<=100)
// // {
// //      if(i%2==0)
// //      {
// //         document.write(i)
// //         document.write("<br>")
// //      }
// //     i++
// // }

////--------------------&&&&&&&&&&&&&&&&&&&-------------------

//         //  5. Write a ts program to print all odd number between 1 to 100.

//              var i:any=0
// while(i<=100)
// {
//      if(i%2!=0)
//      {
//         document.write(i)
//         document.write("<br>")
//      }
//     i++



// // --------------------&&&&&&&&&&&&&&&-------------
//         // 6. Write a ts program to find sum of all natural numbers between 1 to n.

//   var a:any=prompt(`enter number`)
//   var b:number=Number(a)

//   var i:any=1
//   var sum:any=0
//   while(i<=b)
//   {
//     sum=sum+i



//     i++
//   }
//   document.write(sum)

//// ----------------------&&&&&&&&&&&&&&&&&&&&-------------------
////. Write a ts program to find sum of all even numbers between 1 to n.

//   var a:any=prompt(`enter number`)
//   var b:number=Number(a)

//   var i:any=1
//   var sum:any=0
//   while(i<=b)
//   {
//     if (i%2==0) {
//         sum=sum+i
//     }

//     i++
//   }
//   document.write(sum)


//// -----------------------&&&&&&&&&&&&&&&&&&----------------------

// ////   8. Write a ts program to find sum of all odd numbers between 1 to n.

//   var a:any=prompt(`enter number`)
//   var b:number=Number(a)

//   var i:any=1
//   var sum:any=0
//   while(i<=b)
//   {
//     if (i%2!=0) {
//         sum=sum+i
//     }

//     i++
//   }
//   document.write(sum)


////----------------------&&&&&&&&&&&&&&&&&-----------------


////. Write a ts program to print multiplication table of any number.

//    var a:any=prompt(`enter the number`)
//    var b:number=parseInt(a)

//    for (let index = 1; index <=10; index++) {
//             document.write(`${b} * ${index}  =${b*index}`)
//             document.write("<br>")

//    }


/////--------------------&&&&&&&&&&&&------------------

// ////10. Write a ts program to count number of digits in a number.

//   var a:string|null=prompt(`enter a number`)
//   var n:number=Number(a)
// var c:number=0

// //   for(let i=0;i<n;i++){
//         while(n!=0)
//         {
//      //   document.write(`rem is ${n%10}`)
//      n%10
//              n=parseInt(n/10)
//             ++c

//         }

//    document.write(`the digit in number is ${c}`)
//         //    ----------------$$$$$$$$$$$$$$$$-------------


/////1. Write a ts program to find first and last digit of a number.

// var a:string|null=prompt(`enter a number`)
// var b:number=Number(a)

// document.write(`the last digit of a number is ${b%10}`)
// document.write("<br>")

// for(let i=0;i<b;i++)
// {
//         if(b>10){

//                 b=parseInt(b/10)
//         }
// }
// document.write(`the first digit of number is ${b}`)


// ------------$$$$$$$$$$$$$$$-------------
// // 12. Write a ts program to find sum of first and last digit of a number.

// var a:string|null=prompt(`enter a number`)
// var b:number=Number(a)
// var c:any=b%10
// document.write(`the last digit of a number is ${c}`)
// document.write("<br>")

// for(let i=0;i<b;i++)
// {
//         if(b>10){

//                 b=parseInt(b/10)
//         }
// }
// document.write(`the first digit of number is ${b}`)
// document.write('<br>')
// var d:any=c+b
// document.write(`the sum of first and last interger of number is ${d}`)


// //    ------------------$$$$$$$$$$$$$$--------------------

// // Write a ts program to swap first and last digits of a number.



// var a:string|null=prompt(`enter a number`)
// var b:number=Number(a)
// var c:any=b%10
// document.write(`the last digit of a number is ${c}`)
// document.write("<br>")

// for(let i=0;i<b;i++)
// {
//         if(b>10){

//                 b=parseInt(b/10)
//         }
// }
// document.write(`the first digit of number is ${b}`)
// document.write('<br>')
// var d:any=c
// c=b
// b=d
// document.write("<br>")
// document.write(`after swaping of first  and last char  is ${b} and ${c}`)

// // ----------------$$$$$$$$$$$$$$$$----------------------

// // 14. Write a ts program to calculate sum of digits of a number.

// var a:any=prompt(`enter a number`)
// var n:number=Number(a)

// document.write(`your entered  number is ${n}`)
// var sum:any=0
// document.write("<br>")
// while(n!=0)
// {
//         n%10
//         sum=sum+n%10
//         n=parseInt(n/10)

// }
// document.write(`the sum of all digits of number is ${sum}`)


// // ----------------------&&&&&&&&&&&&&&&&&&&&&---------------------

// // 15. Write a ts program to calculate product of digits of a number.



// var a:any=prompt(`enter a number`)
// var n:number=Number(a)

// document.write(`your entered  number is ${n}`)
// var p:any=1
// document.write("<br>")
// while(n!=0)
//             {

//         var c:any=n%10
//         p=p*c
//         n=parseInt(n/10)
//             }
//  document.write(`the product of all digits of number is ${p}`)



// // -------------------------$$$$$$$$$$$$$$$$$-------------------

////Write a ts program to enter a number and print its reverse.

// var a:string|null=prompt(`enter a number`)
// var n:number=Number(a)
// document.write(`the number is ${n}`)
// document.write("<br>")

// var rev:any=0

// var rem:any
// while(n!=0)
// {
//        rem=n%10
//         rev=rev*10+rem
//         n=parseInt(n/10)

// }
// document.write(`the reverse of the number is ${rev}`)



// -----------------------$$$$$$$$$$$$$$$$$$$$----------------

// Write a ts program to check whether a number is palindrome or not.
// // var a:string|null=prompt(`enter a number`)
// // var n:number=Number(a)
// // document.write(`the number is ${n}`)
// // document.write("<br>")
// // var rem:any=0
// // var rev:any=0
// // var temp:any=n
// // while (n!=0) {
// //         rem=n%10
// //         rev=rev*10+rem
// //         n=parseInt(n/10)
// // }

// // document.write(`the reverse of number is ${rev}`)
// // document.write(`<br>`)
// // document.write(`the number is ${temp}`)
// // document.write("<br>")
// // if(rev==temp)
// // {
// //         document.write(`palindrome`)
// // }
// // else
// //             document.write(`not palindrome`)


////--------------------&&&&&&&&&&&&&&&&&&&-------------------------


////. Write a ts program to enter a number and print it in words.
// var a:String|null=prompt(`enter a number`)
// var n:number=Number(a)
// var rev:any=0
// while(n!=0)
// {
//        var rem:any= n%10
//         var rev:any=rev*10+rem
//         n=parseInt(n/10)

// }

//           while  (rev!=0) {


//                 switch (rev%10) {
//                         case 0:
//                                 document.write("zero")
//                                 break;

//                                 case 1:
//                                         document.write("one")
//                                         break;
//                                         case 2:
//                                                 document.write("two")
//                                                 break;

//                                                 case 3:
//                                                         document.write("three")
//                                                         break;


//             }
//             rev=parseInt(rev/10)
//             document.write(`<br>`)
// }

// // ----------------------%%%%%%%%%%%%%%%%%%%%%%%%%%%%55--------------------
////18. Write a ts program to find frequency of each digit in a given integer.\


// //// Write a ts program to print all ASCII character with their values.
//      for(let i=0;i<255;i++)
//      {
//         var char:any=String.fromCharCode(0+i)
//      document.write(`the ascii value of ${i} is ${char}`)
//      document.write("<br>")
//      }


////21. Write a ts program to find power of a number using for loop.

// var a:any=prompt(`enter a base`)
// var b:number=Number(a)

// var c:any=prompt(`enter a power`)
// var p:number=Number(c)

// var z:any=1

// for(let i=1;i<=p;i++)
// {
//           z=z*b
// }
// document.write(`the power of a number is ${z}`)

// // ----------------------------$$$$$$$$$$$$$$$$$$$$$--------------------------

// // // 22. Write a ts program to find all factors of a number.

// var c:any=prompt(`enter a number`)
// var n:number=Number(c)

// for(let i=1;i<=n;i++)
// {
//         if(n%i==0)
//         {
//                 document.write(`the factors of a number is:${i}*${} <br>`)
//         }
// }

// //----------------------$$$$$$$$$$$$$$$$$$$$$$---------------------

////23. Write a ts program to calculate factorial of a number.

// var a:any=prompt(`enter a number`)
// var n:number=Number(a)
// var f:any=1
// for(let i=1;i<=n;i++)
// {
//     f=f*i
// }
// document.write(`The fictorial of a number is ${f}`)

////-------------------------$$$$$$$$$$$$$$$$$$$$$--------------------------

////. Write a ts program to find HCF (GCD) of two numbers.

//   var a:any=prompt(`enter first number`)
// var n1:number=Number(a)

// var b:any=prompt(`enter second number`)
// var n2:number=Number(b)

// var ans:any=1
// for(let i=1;i<=n1||i<=n2;i++)
// {
//         if(n1%i==0 &&n2%i==0)
//         {
//              ans=i

//              document.write(`the factors of number 1 and num2 is ${i}`)
//              document.write('<br>')
//         }

// }
// document.write('<br>')
// document.write(`the HCF of two numbers are ${ans}`)



// // ----------------------&&&&&&&&&&&&&&&&&&&&----------------------


//   var a:any=prompt(`enter first number`)
// var n1:number=Number(a)

// var b:any=prompt(`enter second number`)
// var n2:number=Number(b)

// var ans:any=0
// for(let i=1;i<=n1||i<=n2;i++)
// {
//         if(n1%i==0 &&n2%i==0)
//         {
//              ans=i
//              var c:any=n1*n2/ans

//         //      document.write(`the factors of number 1 and num2 is ${i}`)
//         //      document.write('<br>')
//         }

// }
// document.write('<br>')
// document.write(`the HCF of two numbers are ${c}`)


////-----------------------------$$$$$$$$$$$$$$$$$$$$$$$$--------------------------------

////6. Write a ts program to check whether a number is Prime number or not.

// var a:any=prompt(`enter a number`)
// var n:number=Number(a)

//     var c:any=0
//    for(let i=2;i<n;i++)
//    {
//         if(n%i==0)
//         {
//                 c++
//                 break
//         }
// }
//         if (c++==0) {
//                 document.write(`number is prime`)

//         }
//         else if(n%2==0)
//         {
//                 document.write(`number is even`)
//         }
//         else {
//                 document.write(`number is odd`)
//         }

// var a:any=prompt(`enter a number`)
// var n:number=Number(a)



// // ----------------$$$$$$$$$$$$$$$$$$$$--------------------------
////  . Write a ts program to print all Prime numbers between 1 to n.
// var a:any=prompt(`enter  a number`)
// var n:number=Number(a)

// document.write(`2,3`)
// var x:any=0
// for(let i=2;i<n;i++)
// {
//        if (i%2!=0 && i%3!=0) {
//         document.write(`${i},`)
//        }




// }


/////28. Write a ts program to find sum of all prime numbers between 1 to n.
// var a:any=prompt(`enter a number`)
// var n:number=Number(a)
// var flag:any
// for(let i=2;i<=n;i++)
// {
//          flag=1
//       for(let j=2;j<=i/2;j++)
//       {
//         if(i%j==0)
//         {
//           flag=0
//           break
//         }
//       }
//       if(flag==1)
//       {
//         document.write(`${i} ,`)
//       }

// }
// // -----------------------&&&&&&&&&&&&&&&&&&&&&&------------------------


////-----------------------------$$$$$$$$$$$$$$$$$$$$$$$$--------------------------------
// //29. Write a ts program to find all prime factors of a number.

// var a:any=prompt(`enter a number`)
// var n:number=Number(a)
// var flag:any
// for(let i=2;i<=n;i++)
// {
//      flag=1
//      for(let j=2;j<=i/2;j++)
//      {
//         if(i%j==0)
//         {
//                 flag=0
//         }
//      }
//      if(flag==1)
//      {
//        if(n%i==0){
//         document.write(`${i},`)
//        }
//      }



// }

////-----------------------------$$$$$$$$$$$$$$$$$$$--------------------
////30. Write a ts program to check whether a number is Armstrong number or not.

// var a:any=prompt(`enter a number`)
// var n:number=Number(a)
// var temp:any=n

// var sum:any=0
// var rem:any

// while (n>0) {
//         rem=n%10
//         sum=sum+(rem*rem*rem)
//         n=parseInt(n/10)

// }
// document.write(`br`)
// document.write(`the temp is ${temp}`)
// document.write(`br`)
// document.write(`the sum is ${sum}`)
// document.write(`br`)
// if(temp==sum)
// {
//         document.write(`Armstrong number`)
// }
// else
// {
//         document.write(`not a Armstrong`)
// }

////---------------------$$$$$$$$$$$$$$$$--------------------

// var a:any=prompt(`enter a number`)
// var n:number=Number(a)
// var c:any=n
// var sum:any=0
// for(let i=0;i<n;i++)
// {
//         if(n%i==0)
//         {
//                 sum=sum+i
//         }
// }
// if(sum==c)
// {
//         document.write(`number is perfect`)
// }
// else{
//         document.write(`not perfect`)
// }

////----------------------$$$$$$$$$$$$$$$$$$$$------------------------

////


////  ----------------------$$$$$$$$$$$$$$$$$$$$$--------------------------

/////3. Write a ts program to print all Perfect numbers between 1 to n.

////Write a ts program to check whether a number is Strong number or not.


//    var a:any=prompt(`enter a number`)
//    var n:number=Number(a)
//    var o:number=n
//   var f:any=1
//   var sum:number=0
//    while(0<n)
//    {
//         var a:any=n%10
//         n=parseInt(n/10)
//         var f:any=1
//         for(let i=1;i<=a;i++)
//         {
//                 f=f*i
//         }
//         sum=sum+f

//    }
//    document.write(`the sum of a number is ${sum}`)

//   if(sum==o)
//   {
//         document.write(`number is strong`)
//   }
//   else
//   {
//         document.write(`number is not strong`)
//   }

////-----------------------&&&&&&&&&&&&&&&&&&----------------------
//// Write a ts program to print all Strong numbers between 1 to n.


// var a:any=prompt(`enter a number`)
// var n:number=Number(a)
// var sum:any
// var f:number
// var c:any
// let i
// for( i=0;i<=n;i++)
// {
//           c=i
//          sum=0

//         for(let j=0;j<=c;j++)
//         {
//               var l:any=c%10

//               f=1
//               for(let k=1;k<=l;k++)
//               {

//                 f=f*k
//               }

//               sum=sum+f
//               c=c/10

//         }
//       //  document.write(sum)
// }
// if(sum==i)
// {
//     document.write(i)
// }


// var a:any=prompt(`enter a number`)
//    var m:number=Number(a)
//    var o:number=n

//   var sum:number=0
//   let k
//   for(k=0;k<m;k++)
//   {

//         var n:any=k
//         while(0<n)
//         {
//              var a:any=n%10
//              n=parseInt(n/10)
//              var f:any=1
//              for(let i=1;i<=a;i++)
//              {
//                      f=f*i
//              }
//              sum=sum+f

//         }
//       //  document.write(`the sum of a number is ${sum}`)




//   }
//   if(sum==k)
//   {
//         document.write(`the numbers are :${k}`)
//   }

/////-----------------------$$$$$$$$$$$$$$$$$$$$$$$$$----------------------------


/////36. Write a ts program to print Fibonacci series up to n terms.

// var a:any=prompt(`enter a number`)
// var n:number=Number(a)


// var n1:any=0

// var n2:any=1
// document.write(`0,`)
// var nextTerm:any=0
// for(let i=1;i<=n;i++)
// {






//    nextTerm=n1+n2
//    n1=n2
//    n2=nextTerm

//          if(n>n1)
//    {
//            document.write(`${n1}`)
//    }



// }


// /////////////////////----------------------&&&&&&&&&&&&&&&&&&&&&&&-------------------------\
// /////  37. Write a ts program to find one's complement of a binary number.
// var b:number[]=prompt(`enter a value`)

// var flag:any=0
// //var n:number=Number(a)
// var c:any[]=[]
// for(let i=0;i<=2;i++)
// {
//       if(b[i]=='0'){
//          c[i]='1'
//       }
//       else if(b[i]=='1')
//       {
//         c[i]='0'
//       }
//       else{
//         document.write(`invalid`)
//         flag=1
//           break;
// }


// }
// if(flag==0){
//         document.write(c)
// }


////--------------------------------------$$$$$$$$$$$$$$$$$-------------------------------

/////. Write a ts program to find two's complement of a binary number.

// var b:any|null[]=prompt(`enter a value`)

// var flag:any=0
// //var n:number=Number(a)
// var c:any[]=[]
// for(let i=0;i<=2;i++)
// {
//       if(b[i]=='0'){
//          c[i]='1'
//       }
//       else if(b[i]=='1')
//       {
//         c[i]='0'
//       }  
// }   
// document.write(`the first complement is ${c} <br>`)
// let z:any=0
// var carry:any=1
// var t:any
// for(let i=2;i>=0;i--)
// {
//     if(c[i]=='1' && carry==1)
//     {
//         t[i]='1'
//     }
//     else if(c[i]=='0' && carry==1)
//     {
//         t[i]=='0'
//         carry=0
//     }
//     else{
//         t[i]=c[i]
//     }
// }
// if(flag==0)
// {
//         document.write(t)
// }


////---------------------------------&&&&&&&&&&&&&&&&&&&&&&&&&&&7777777777777--------------------------

////39. Write a ts program to convert Binary to Octal number system

// var a:string|null=prompt(`enter a number`)
// var n:number=Number(a)
// var sum:any=0
// var rem:any
// var i:any=0
// var b:any=1
// while (n!=0) {
//       //  rem=n%10
//         sum=sum+(n%10* Math.pow(2,i))
//         ++i
//         n=parseInt(n/10)

// }
// var oc:number=0
// document.write(`the decimal of a number is ${sum}`)
// document.write('<br>')
// var i:number=1
// while(sum!=0)
// {
//   oc=oc+(sum%8 * i)
//   sum=parseInt(sum/8)
//   i=i*10
// }
// document.write(`the octal number is ${oc}`)




////--------------------------%%%%%%%%%%%%%%%%%%-------------------------

////Write a ts program to convert Binary to Decimal number system.
// var a:string|null=prompt(`enter a number`)
// var n:number=Number(a)
// var sum:any=0
// var rem:any
// var i:any=0
// var b:any=1
// while (n!=0) {
//         rem=n%10
//         sum=sum+(rem* Math.pow(2,i))
//         ++i

//            n=parseInt(n/10)

// }

// document.write(`the decimal of a number is ${sum}`)


/////-----------------------$$$$$$$$$$$$$$$$$$$$$$$$------------------------------------

////41. Write a ts program to convert Binary to Hexadecimal number system.


//  var a:string|null=prompt(`enter a number`)
// var n:number=Number(a)
// var sum:any=0
// var rem:any
// var i:any=0
// var b:any=1
// var y:any[]=[]
// while (n!=0) {
//       //  rem=n%10
//         sum=sum+(n%10* Math.pow(2,i))
//         ++i
//         n=parseInt(n/10)

// }
// var oc:number=0
// document.write(`the decimal of a number is ${sum}`)
// document.write('<br>')
// var i:number=0
// var z:any

// while(sum!=0)
// {
//      z =sum%16
//      if (z<10) {
//          y[i]=String.fromCharCode(z+48)

//      }
//      else{
//         y[i]=String.fromCharCode(z+55)
//      }
//      i++
//   sum=parseInt(sum/16)

// }
// for(let j=i-1;j>=0;j--)
// {
//         document.write(` ${(y[j])}`)
//}


//---------------------&&&&&&&&&&&&&&&----------------------
//// Write a ts program to convert Octal to Binary number system.

// var a:string|null=prompt(`enter a number`)
// var n:number=Number(a)
// var sum:any=0
// var rem:any
// var i:any=0
// while (n!=0) {
//                rem=n%10
//         sum=sum+rem* Math.pow(8,i)
//         ++i
//         n=parseInt(n/10)
// }

// document.write(`the decimal number is ${sum}`)
// document.write("<br>")
// var i:any=1
// var b:any=0

// while (sum!=0) {

//         b=b+(sum%2*i)
//         sum=parseInt(sum/2)
//         i=i*10
// }
// document.write(`the binary number is ${b}`)


////--------------------&&&&&&&&&&&&&&&&&&-----------------------------

////Write a ts program to convert Octal to Decimal number system

// var a:string|null=prompt(`enter a number`)
// var n:number=Number(a)
// var sum:any=0
// var rem:any
// var i:any=0
// while (n!=0) {
//                rem=n%10
//         sum=sum+rem* Math.pow(8,i)
//         ++i
//         n=parseInt(n/10)
// }

// document.write(`the decimal number is ${sum}`)
/////-------------------------%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_________________
//// Write a ts program to convert Octal to Hexadecimal number system.

// var a:string|null=prompt(`enter a number`)
// var n:number=Number(a)
// var sum:number=0
// var rem:any
// var i:any=0
// while (n!=0) {
//                rem=n%10
//         sum=sum+rem* Math.pow(8,i)
//         ++i
//         n=parseInt(n/10)
// }

// document.write(`the decimal number is ${sum}`)
// document.write("<br>")
// var i:any=1
// var rem:any=0
// var arr:any[]=[]

// while (sum!=0) {

//         rem=sum%16
//         if (rem<10) {
//                 arr[i]=String.fromCharCode(rem+48)
//         }
//         else{
//              arr[i]=String.fromCharCode(rem+55)
//         }
//          i++
//        sum=parseInt(sum/16)
// }
//   var sum:any=0
//      for(let j=i-1;j>0;j--)
//      {
//         document.write(` ${arr[j]}`)
//      }


////---------------------------$$$$$$$$$$$$$$$$$$$$-------------------------
////. Write a ts program to convert Decimal to Binary number system.

// var a:string|null=prompt(`enter a value`)
// var n:number=Number(a)
//   var rem:any=0
//   var sum:any=0
//   var i:number=1
// while(n!=0)
// {
//      rem=n%2
//      sum=sum+rem*i
//      i=i*10
//      n=parseInt(n/2)

// }
// document.write(sum)

////--------------------%%%%%%%%%%%%%%%%%%%%--------------------
////Write a ts program to convert Decimal to Octal number system


// var a:string|null=prompt(`enter a value`)
// var n:number=Number(a)
//   var rem:any=0
//   var sum:any=0
//   var i:number=1
// while(n!=0)
// {
//      rem=n%8
//      sum=sum+rem*i
//      i=i*10
//      n=parseInt(n/8)

// }
// document.write(sum)



////--------------------------&&&&&&&&&&&&&&&&&&&&&&&&&&------------------

////Write a ts program to convert Decimal to Hexadecimal number system.

// var a:any=prompt(`enter a number`)
// var n:number=Number(a)

// var rem:any=0
// var arr:any[]=[]
// var i:number=0
// while (n!=0) {
//         rem=n%16
//         if (rem<10) {
//                arr[i]=String.fromCharCode(rem+48) 
//         }
//         else(rem>10)
//         {
//                 arr[i]=String.fromCharCode(rem+55)
//         }
//         i++
//         n=parseInt(n/16)
// }
// for(let j=i-1;j>=0;j--)
// {
//         document.write(arr[j])
// }


////------------------------------&&&&&&&&&&&&&&&&&&&&&&_------------------------------

//// Write a ts program to convert Hexadecimal to Binary number system.

// 
// var b:any = prompt(`enter a number`)
//  var n: number = Number(b)


// var i: any = 0
// var c: any[] = []
// var n:any=5
// for(let i=0;i<n;i++)
// {
//         c[i]=prompt(`enter 5 values by one by one`)
// }
// while (c[i]) {
//         switch (c[i]) {
//                 case '0':
//                         document.write('0000')
//                         break;
//                 case '1':
//                         document.write('0001')
//                         break;
//                 case '2':
//                         document.write('0010')
//                         break;
//                 case '3':
//                         document.write('0011')
//                         break;
//                 case '4':
//                         document.write('0100')
//                         break;
//                 case '5':
//                         document.write('0101')
//                         break;
//                 case '6':
//                         document.write('0110')
//                         break;
//                 case '7':
//                         document.write('0111')
//                         break;
//                 case '8':
//                         document.write('1000')
//                         break;
//                 case '9':
//                         document.write('1001')
//                         break;
//                 case 'a':
//                         document.write('1010')
//                         break;
//                 case 'b':
//                         document.write('1011')
//                         break;
//                 case 'c':
//                         document.write('1100')
//                         break;
//                 case 'd':
//                         document.write('1101')
//                         break;
//                 case 'e':
//                         document.write('1110')
//                         break;
//                 case 'f':
//                         document.write('1111')
//                         break;

//                   default:
//                         document.write(`invalid`)



//         }
//         i++

// }

////----------------$$$$$$$$$$$$$$$$$$$$$$$$$$$---------------------
/////////. Write a ts program to print Pascal triangle upto n rows

var n1:string|null=prompt(`enter number of rows`)
//var n1:number=Number(a)

for(let r=0;r<n1;r++)
{
        for(let s=0;s<=(n1-r);s++)
        {
                document.write('&nbsp')
        }
        var n:number=1
        for(let c=0;c<r;c++)
        {
                document.write(`${n} &nbsp`)
                n=n*(r-c)/(c+1)
        }
        document.write(n)
        document.write('<br>')
}





