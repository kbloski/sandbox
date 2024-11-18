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

    function getTotalExpenses(dayExpenses) {
        let totalDayExpense = null;

        for (const expensesCategoryName in dayExpenses) {
            const expensesArr = dayExpenses[expensesCategoryName];

            expensesArr.forEach((e) => {
                totalDayExpense += Number(e);
            });
        }
        return Number(totalDayExpense.toFixed(2));
    }

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

    const firstWeeksMonthsTotals = [];
    for (const [month, days] of Object.entries(expenses)) {
        let firstWeekExpensesTotal = 0;

        for (const [day, dayExp] of Object.entries(days)) {
            const fullDate = `${month}-${day}`;
            const weekDay = new Date(fullDate).getDay();

            if (Number(day) > 7) break;

            firstWeekExpensesTotal += getTotalExpenses(dayExp);
            if (weekDay === 0) break;
        }
        
        if (firstWeekExpensesTotal) 
            firstWeeksMonthsTotals.push(firstWeekExpensesTotal);
    }


    result = getArrMedian(firstWeeksMonthsTotals);
    return result;
}

function solution2(expenses) {
    result = null;

    function getTotalExpenses(dayExpenses) {
        let totalDayExpense = 0;

        for (const expensesCategoryName in dayExpenses) {
            const expensesArr = dayExpenses[expensesCategoryName];
            totalDayExpense += expensesArr.reduce(
                (sumExpenses, val) => (sumExpenses += val),
                0
            );
        }
        return Number(totalDayExpense.toFixed(2));
    }

    function getArrMedian(arr) {
        const sortedArr = arr.sort((a, b) => {
            if (a > b) return 1;
            else if (a < b) return -1;
            return 0;
        });

        if (!arr.length) return null;
        if (arr.length % 2 !== 0)
            return sortedArr[Math.floor(sortedArr.length / 2)];

        let sumMiddleValues =
            sortedArr[sortedArr.length / 2 - 1] +
            sortedArr[sortedArr.length / 2];

        return sumMiddleValues / 2;
    }

    const firstWeeksMonthsTotals = [];
    for (const [month, days] of Object.entries(expenses)) {
        let firstWeekExpensesTotal = 0;

        for (const [day, dayExp] of Object.entries(days)) {
            const fullDate = `${month}-${day}`;
            const weekDay = new Date(fullDate).getDay();

            if (Number(day) > 7) break;
            firstWeekExpensesTotal += getTotalExpenses(dayExp);
            if (weekDay === 0) break;
        }
         if (firstWeekExpensesTotal)
             firstWeeksMonthsTotals.push(firstWeekExpensesTotal);
    }

    result = getArrMedian(firstWeeksMonthsTotals);
    return result;
}

console.log( 
    solution1(expenses),
    solution2( expenses)
)