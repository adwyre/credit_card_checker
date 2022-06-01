/ All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:
const validateCred = array => {
  // iterate end to start
  let sum = 0;
  let counter = 0;
  for (let i = array.length - 1; i >= 0; i--){
    // double every other digit (except the check digit)
    // even
    if (counter % 2 === 0) {
      sum += array[i];
      counter++;
    // odd
    } else {
       //if digit is > 9, - 9
       if (array[i] * 2 > 9){
         sum += (array[i] * 2) - 9;
         counter++;
       } else {
         sum += array[i] * 2;
         counter++;
       }
    } 
  }
  // if sum %10 = 0, valid
  if (sum % 10 === 0) {
    return true;
  } else {
    return false;
  }
}

const findInvalidCards = arrayOfCards => {
  let invalidCards = [];
  // iterate through cards in array
  for (card of arrayOfCards) {
    if (validateCred(card) === false) {
      // add card to list if it is invalid
      invalidCards.push(card);
    } else {
      continue;
    }
  }
  return invalidCards;
}

const idInvalidCardCompanies = array => {
  let invalidCompanies = [];
  // iterate through cards in array of invalid cards.
  for (card of array) {
    // check if card is a specified company number
    if (card[0] >= 3 && card[0] <= 6){
      // add company to list of companies if not already in list
      if (card[0] === 3 && invalidCompanies.includes('Amex') === false) {
        invalidCompanies.push('Amex');
      } else if (card[0] === 4 && invalidCompanies.includes('Visa') === false) {
        invalidCompanies.push('Visa');
      } else if (card[0] === 5 && invalidCompanies.includes('Mastercard') === false) {
        invalidCompanies.push('Mastercard');
      } else if (card[0] === 6 && invalidCompanies.includes('Discover') === false) {
        invalidCompanies.push('Discover');
      }else {
      continue;
      }
    }else {
      // log statement if not a company card number
      console.log('Company not found');
    }
  }
  return invalidCompanies;
}

/* tests
console.log(findInvalidCards(batch))
console.log(idInvalidCardCompanies(batch)) */
