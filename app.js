const expenses = {
    "2023-01": {
        "01": {
            "food": [ 22.11, 43, 11.72, 2.2, 36.29, 2.5, 19 ],
            "fuel": [ 210.22 ]
        },
        "09": {
            "food": [ 11.9 ],
            "fuel": [ 190.22 ]
        }
    },
    "2023-03": {
        "07": {
            "food": [ 20, 11.9, 30.20, 11.9 ]
        },
        "04": {
            "food": [ 10.20, 11.50, 2.5 ],
            "fuel": []
        }
    },
    "2023-04": {}
};

function solution1(expenses) {
    result = null;

    function getTotalExpenses( dayExpenses ){
        let totalDayExpense = 0;

        for( const expensesCategoryName in dayExpenses){
            const expensesArr = dayExpenses[expensesCategoryName];

            expensesArr.forEach( e => {
                totalDayExpense += Number(e);
            });
        }
        return Number( totalDayExpense.toFixed(2) );
    }

    function reversedArrValues( arr ){
        const reversedArr = []

        for( const el of arr){
            if (!reversedArr.length) reversedArr.push( el );

            for( const sortedEl of reversedArr){
                if (sortedEl <= el) continue;
                else {
                    reversedArr.push( el );
                    break
                }
            }
        }
        return reversedArr
    }

    function getArrMedian( arr ){
        const reversedArr = reversedArrValues(arr);

        if (!arr.length) return;
        console.log( reversedArr)
        console.log((reversedArr.length-1) / 2 )
        console.log( reversedArr[(reversedArr.length-1 )/2]) ;
        if (arr.length % 2 !== 0 ) return reversedArr[(reversedArr.length + 1)/2];

        let sumMiddleValues = reversedArr[reversedArr.length / 2] +  reversedArr[reversedArr.length / 2 - 1]
        return sumMiddleValues / 2
       
    }

    const firstWeeksMonthsTotals = [];
    for (const [month,days] of Object.entries( expenses)){
        let firstWeekExpensesTotal = 0;

        for(const [day, dayExp] of Object.entries(days)){
            const fullDate = `${month}-${day}`;
            const weekDay = (new Date(fullDate)).getDay()

            if ( Number(day) > 7) break;
            firstWeekExpensesTotal += getTotalExpenses( dayExp )
            if ( weekDay === 0) break;
        }

        firstWeeksMonthsTotals.push( firstWeekExpensesTotal );
    }
    
    result = getArrMedian( firstWeeksMonthsTotals )

    return result;
}

function solution2(expenses) {
        result = null;

        function getTotalExpenses(dayExpenses) {
            let totalDayExpense = 0;

            for (const expensesCategoryName in dayExpenses) {
                const expensesArr = dayExpenses[expensesCategoryName];
                totalDayExpense += expensesArr.reduce(
                    (sumExpenses, val) => (sumExpenses += val), 0 );
            }

            return Number(totalDayExpense.toFixed(2));
        }

        function getArrMedian(arr) {
            const sortedArr = arr.sort();

            if (!arr.length) return;
            if (arr.length % 2 !== 0)
                return sortedArr[(sortedArr.length + 1) / 2];

            let sumMiddleValues =
                sortedArr[sortedArr.length / 2] +
                sortedArr[sortedArr.length / 2 - 1];
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

            firstWeeksMonthsTotals.push(firstWeekExpensesTotal);
        }

        result = getArrMedian(firstWeeksMonthsTotals);

        return result;
}

console.log( 
    solution1( expenses ),
    solution2( expenses )
)