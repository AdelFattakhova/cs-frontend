export default function binarySearch(elementToFind, array) {
  let middle;
  let left = 0;
  let right = array.length - 1;

  while (right >= left) {
    middle = Math.floor((right - left) / 2 + left);

    if (array[middle] === elementToFind) return middle;

    if (array[middle] > elementToFind) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }

  }

  throw new Error('The given array doesn\'t contain such an element');
}
