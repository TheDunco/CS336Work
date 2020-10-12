function categorize(numberArray) {
    const sortedArray = numberArray.sort((a, b) => {
        return a - b;
    });
    const len = sortedArray.length;
    /*   console.log(len);
      console.log(len % 3);*/
    /* console.log(sortedArray) */

    var list1;
    var list2;
    var list3;
    if (len % 3 == 0) {
        list1 = sortedArray.slice(0, len / 3);
        list2 = sortedArray.slice(len / 3, len * 2 / 3);
        list3 = sortedArray.slice(len * 2 / 3, len);
        console.log([list1, list2, list3]);
    } else if ((len - 1) % 3 == 0) {
        list1 = sortedArray.slice(0, len / 3);
        list2 = sortedArray.slice(len / 3, len * (2 / 3) + 1);
        list3 = sortedArray.slice(len * 2 / 3 + 1, len);
        console.log([list1, list2, list3]);
    } else if ((len - 2) % 3 == 0) {
        list1 = sortedArray.slice(0, len / 3);
        list2 = sortedArray.slice(len / 3, len * (2 / 3) + 1);
        list3 = sortedArray.slice(len * 2 / 3 + 1, len);
        console.log([list1, list2, list3]); // play with nums here
    }

    else {
        console.log('not multiple of 3')
    }
    /* list1 = sortedArray.slice(0, len / 3);
    list2 = sortedArray.slice(len / 3, len * 2 / 3);
    list3 = sortedArray.slice(len * 2 / 3, len);
    console.log([list1, list2, list3]); */
}

categorize([2, 3, 1, 10, 30, 4, 6, 7]);
/* categorize([6, 7, 8, 9, 10, 11, 12]); */
