// check n is prime or Notification

// Prime number can be divisible only by number and 1 itself

//Example : 2 ,3 ,5,7,11,13 ....

//Bruteforce : count factors of the n if factors are apart from 1 and n then not prime else prime

//code:

for(let i=2 ; i*i <= n ;i++){
    if(n%i ==0){
        return false
    }
    return true
}
//theory
// https://www.geeksforgeeks.org/prime-numbers/