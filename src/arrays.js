/**
 * All same.
 * 
 * It checks wether all the elements of a given array are the same.
 * 
 * @param {array}    array      The array to check the members.
 * 
 * @returns {boolean} Return true if all the elements are identical.
 */
function allSame(array) {
  const first = array[0];
  for (const member of array) {
    if (member !== first) {
      return false;
    }
  }
  return true;
}

/**
 * Count.
 * 
 * It counts the occurrences of an element in a given array.
 * 
 * @param {array}   array     The array.
 * @param {any}     target    The element to count the occurrences.
 * 
 * @returns {number} Return the number of occurrences.
 */
function count(array, target) {
  let current = 0;
  for (const member of array) {
    if (member === target) {
      current += 1;
    }
  }
  return current;
}

/**
 * Is member.
 *
 * It checks wether an element is member of a given array.
 * 
 * @param {array}    array      The array.
 * @param {any}      target     The element to check the membership.
 *
 * @returns {boolean} Return true if is member.
 */
function isMember(array, target) {
  for (const member of array) {
    if (member === target) {
      return true;
    }
  }
  return false;
}

module.exports = {
  allSame,
  count,
  isMember,
};
