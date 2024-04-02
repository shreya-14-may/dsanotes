function factorial(n) {
    let count = 0;
    let result = []
    for (let i = 1; i < n; i++) {
      if (n % i == 0) {
        count++;
        result.push(i);
      }
    }
    return result;
    // console.log(count);
  }
  var n = 8;
  console.log(factorial(n));
// // Given a number ’N’ calculate the no.of factors of N?
// // Example : n=24  => 1,2,3,4,6,8,12,24Example : n= 36 => 1,2,3,4,6,12,18,36Minimum value for any n number will be 1 Max vale for any number n will be the number “n” itself

// // Q.Let n =8;   
//dry run
// i=1 , i< 8 , 8%1 ===0
// i=2 , i< 8 , 8%2 ===0
// i=3 , i< 8 , 8%3 !=0
 // i=4    , it is less than 8. => 8%4 != 0
	// i =5 ,  less than 8 true => 8 %5 != 0
    //   i =6 , i<8 , 8%6 !=0

    //   i =7 , less than 8  true => 8%7 !=0;
    //   i =8 , less than 8  true => 8%8 ===0;


//optimise solution
//Factors of 24 => 1,2,3,4,6,8,12,24
//factors of 36 => 1,2,3,4,6,8,12,18,36

//f1 * f2 = N                   f1 * f2 = N 
// 1 * 24 = 24                // 1 * 36 = 36 
// 1 * 24 = 24                // 2 * 18 = 36 
// 2 * 12 = 24                // 3 * 12 = 36 
  // 3 * 8 = 24               // 4 * 9 = 36 
  // 4 * 6 = 24               // 6 * 6 = 36  /// here f1 = f2
// 6 * 4 = 24                 // 9 * 4 = 36 
// 8 * 3 = 24                  // 12 * 3 = 36
// 12* 2 = 24                 //18 * 2 =36
// 24* 1 = 24                  //36 * 1 = 36
// now can i Say f1 <f2  equation 1
// f1 = f2 equation2
// f1*f2 <= n
//f2 ^2 = N
// f2 = sqrt( N)

// now previously if the operation was 10^18 now willl be  10 ^9


//now optimized code

function optimisezfactorial(n){
  let count =0;
  //instead of inbuldfunction Math.sqrt(n) can be writen as i*i <= n
  // for(let i=0 ; i<=Math.sqrt(n);i++ ){
  for(let i=0 ; i<=i*i <= n;i++ ){
    // if(n%i == 0) count +=2 

    // for 36 we have 6,6 two times so change logic
    if(n%i ==i){
      count ++;
    }else{
      count +=2;
    }
  }
  return count
}

//dryrun

// n = 24
// count =0
// sqrt(n) = 4                                    f1    |   f2  = n/ f1 
// i = 1 <= 4  then  24 %1 ==0 ,  count = 2       1     |   24
// i = 2 <= 4  then  24 %2 ==0 ,  count = 4       2     |   12
// i = 3 <= 4  then  24 %3 ==0 ,  count = 6       3     |    8
// i = 4 <= 4  then  24 %2 ==0 ,  count = 8       4     |    6
// i = 5 <= 4  false so return


// so ans count = 8

// for 36 we have 6,6 two times so change logic

