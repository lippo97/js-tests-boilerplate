/**
 * All same.
 * 
 * Checks wether all the elements of a given array are the same.
 * 
 * @param {array}    array      The array to check the members.
 * 
 * @returns {boolean} Return true if all the elements are identical.
 */
function allSame(array) {
  const first = array[0];
  for (member of array) {
    if (member !== first) {
      return false;
    }
  }
  return true;
}

/**
 * Is member.
 *
 * Checks wether an element is member of a given array.
 * 
 * @param {array}    array      The array.
 * @param {any}      target     The element to check the membership.
 *
 * @returns {boolean} Return true if is member.
 */
function isMember(array, target) {
  for (member of array) {
    if (member === target) {
      return true;
    }
  }
  return false;
}

module.exports = {
  allSame,
  isMember,
}