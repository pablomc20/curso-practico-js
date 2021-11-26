const list1 = [100, 200, 300, 500, 900, 1000, 200, 300, 90];
const list2 = [1, 2, 4, 5, 2, 3, 5, 2, 1, 3, 5, 1, 4, 5, 2];


function calculateArithmeticAverage(list) {
    // let additionList = 0;
    // list.forEach((item) => additionList += item);
    
    const additionList = list.reduce(
        function (currenttValue, currentIndex) {
            return currenttValue + currentIndex;
        }
    )

    let average = additionList / list.length;
        
    return average;
}

function calculateMedian(list) {
    let medianList = parseInt(list.length / 2),
    median;
    let isEven = (list.length % 2 === 0) ? true : false;

    list = list.sort()

    if (isEven){
        median = calculateArithmeticAverage([list[medianList - 1], list[medianList]]);
    }else {
        // get only num
        median = list[medianList];
    }

    return median;
}

const listCount = {};
function calculateMode(list) {
    let mode;
    // Count times that numbers repeated
    list.map(
        function (element) {
            if (listCount[element])
                listCount[element] += 1
            else
                listCount[element] = 1
        }
    )

    // Sort on an Object from smallest to largest according to the second value
    const listArray = Object.entries(listCount).sort(
        function (itemA, itemB) {
            return itemA[1] - itemB[1]
        }
    )

    // Set last value
    mode = listArray[listArray.length - 1];
    mode = calculateModesRepeated(listArray, mode[1])

    return mode;
}

function calculateModesRepeated(modeList, value) {
    result = modeList.filter(item => item[1] == value);

    return result;
}

console.log(calculateArithmeticAverage(list1));
console.log(calculateMedian(list1));
console.log(list2);
console.log(calculateMode(list2));