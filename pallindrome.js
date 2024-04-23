function isPalindrome(str) {
    str = str.toLowerCase();
    let start = 0;
    let end = str.length - 1;
    while (start < end) {
        while (start < end && !isAlphaNumeric(str[start])) {
            start++;
        }
        while (start < end && !isAlphaNumeric(str[end])) {
            end--;
        }
        if (str[start] !== str[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
  }
  
  function isAlphaNumeric(char) {
    return /[a-zA-Z0-9]/.test(char);
  }
  
  
  console.log(isPalindrome("A man, a plan, a canal, Panama"));
  console.log(isPalindrome("race car"));
  console.log(isPalindrome("Was it a car or a cat I saw?"));
  console.log(isPalindrome("not a palindrome"));
  console.log(isPalindrome("12321"));
  console.log(isPalindrome("12345"));
  