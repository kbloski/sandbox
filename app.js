const expenses = {
    "2023-01": {
        "01": {
            food: [22.11, 43, 11.72, 2.2, 36.29, 2.5, 19],
            fuel: [210.22],
        },
        "09": {
            food: [11.9],
            fuel: [190.22],
        },
    },
    "2023-03": {
        "07": {
            food: [20, 11.9, 30.2, 11.9],
        },
        "04": {
            food: [10.2, 11.5, 2.5],
            fuel: [],
        },
    },
    "2023-04": {},
};


function solution1(expenses) {
    result = null;
    function sortedArrValues(arr) {
        const sortedArr = [];

        for (const el of arr) {
            if (sortedArr.length === 0) sortedArr.push(el);
            else {
                for (let i = 0; i < sortedArr.length; i++) {
                    if (sortedArr[i] > el) {
                        sortedArr.splice(i, 0, el);
                        break;
                    }

                    if (sortedArr.length - 1 === i) {
                        sortedArr.push(el);
                        break;
                    }
                }
            }
        }
        return sortedArr;
    }

    function getArrMedian(arr) {
        const sortedArr = sortedArrValues(arr);

        if (!arr.length) return null;
        if (sortedArr.length % 2 !== 0)
            return sortedArr[Math.floor(sortedArr.length / 2)];

        let sumMiddleValues =
            sortedArr[sortedArr.length / 2 - 1] +
            sortedArr[sortedArr.length / 2];

        return sumMiddleValues / 2;
    }

    function isDayInFirstWeek(dayNr, weekDay) {
        return weekDay + 1 - Number(dayNr) >= 0;
    }

    const allExpensesFirstWeeks = [];
    for (const [month, days] of Object.entries(expenses)) {
        for (const [day, categoriesExpenses] of Object.entries(days)) {
            const date = new Date(`${month}-${day}`);

            if (Number(day) > 7 || !isDayInFirstWeek(day, date.getDay()))
                continue;

            for (const categoryName in categoriesExpenses) {
                const cateogryExpenses = categoriesExpenses[categoryName];
                allExpensesFirstWeeks.push(...cateogryExpenses);
            }
        }
    }

    result = getArrMedian(allExpensesFirstWeeks);
    return result;
}

function solution2(expenses) {
    // Funkcja działa tylko dla standardowego 7 dniowego tygodnia.
    // Nie posiada validacji danych
    

    result = null;

    function getArrMedian(arr) {
        const sortedArr = arr.sort((a, b) => {
            return a - b;
        });

        if (!arr.length) return null;
        if (arr.length % 2 !== 0)
            return sortedArr[Math.floor(sortedArr.length / 2)];

        let sumMiddleValues =
            sortedArr[sortedArr.length / 2 - 1] +
            sortedArr[sortedArr.length / 2];

        return sumMiddleValues / 2;
    }

    function isDayInFirstWeek(dayNr, weekDay) {
        return weekDay + 1 - Number(dayNr) >= 0;
    }

    const allExpensesFirstWeeks = [];
    for (const [month, days] of Object.entries(expenses)) {
        for (const [day, categoriesExpenses] of Object.entries(days)) {
            const date = new Date(`${month}-${day}`);

            if (Number(day) > 7) continue;
            if (!isDayInFirstWeek(day, date.getDay())) continue;

            for (const categoryName in categoriesExpenses) {
                const cateogryExpenses = categoriesExpenses[categoryName];
                allExpensesFirstWeeks.push(...cateogryExpenses);
            }
        }
    }

    result = getArrMedian(allExpensesFirstWeeks);
    return result;
}

