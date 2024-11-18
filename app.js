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
        for( const expenseName in dayExpenses){
            const expensesArr = dayExpenses[expenseName];

            expensesArr.forEach( e => {
                totalDayExpense += Number(e);
            });
        }
        return Number( totalDayExpense.toFixed(2) );
    }

    function getArrMedian( arr ){
        const sortedArr = 
    }

    const firstWeeksMonthsTotals = [];
    for (const [month, days] of Object.entries( expenses)){
        let firstWeekExpenses = 0;

        for(const [day, dayExp] of Object.entries(days)){
            const fullDate = `${month}-${day}`;
            const weekDay = (new Date(fullDate)).getDay()

            if ( Number(day) > 7) break;
            firstWeekExpenses += getTotalExpenses( dayExp )
            if ( weekDay == 0) break;
        }

        firstWeeksMonthsTotals.push( firstWeekExpenses );
    }
    


    return result;
}

solution1( expenses )

function solution2(expenses) {
    result = null;
    // ...
    return result;
}