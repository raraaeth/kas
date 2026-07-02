/* =====================================================
   KAS BULANAN SNA
   FILE : js/process.js
   DESCRIPTION : Data Processor
===================================================== */


/* =====================================================
   PROCESS DATA
===================================================== */

function processData(){

    processTransaction();

    processSummary();

    processProgress();

    processTransactionHistory();

    processExpenseHistory();

    processStatistic();

    processInsight();

}


/* =====================================================
   TRANSACTION
===================================================== */

function processTransaction(){

    Kas.data.transaksi=

    [...Kas.raw.transaksi];

}


/* =====================================================
   SUMMARY
===================================================== */

function processSummary(){

    const transaksi=

    Kas.data.transaksi;

    const income=

    transaksi

    .filter(

        item=>

        item.Transaksi===

        TRANSACTION.INCOME

    )

    .reduce(

        (total,item)=>

        total+

        toNumber(

            item.Nominal

        ),

        0

    );

    const expense=

    transaksi

    .filter(

        item=>

        item.Transaksi===

        TRANSACTION.EXPENSE

    )

    .reduce(

        (total,item)=>

        total+

        toNumber(

            item.Nominal

        ),

        0

    );

    Kas.dashboard.summary={

        income,

        expense,

        balance:

        income-expense,

        transaction:

        transaksi.length

    };

}


/* =====================================================
   PROGRESS
===================================================== */

function processProgress(){

    const month=

    Kas.filter.month;

    const transaksi=

    Kas.data.transaksi

    .filter(

        item=>

        item.Tanggal.startsWith(

            month

        )

    );

    const income=

    transaksi.filter(

        item=>

        item.Transaksi===

        TRANSACTION.INCOME

    );

    const members=

    [

        ...new Set(

            Kas.data.transaksi

            .filter(

                item=>item.Nama

            )

            .map(

                item=>item.Nama

            )

        )

    ];

    const paid=

    [

        ...new Set(

            income.map(

                item=>item.Nama

            )

        )

    ];

    const unpaid=

    members.filter(

        item=>

        !paid.includes(item)

    );

    const percent=

    members.length===0

    ? 0

    :

    (

        paid.length/

        members.length

    )*100;

    Kas.dashboard.progress={

        total:

        members.length,

        paid:

        paid.length,

        unpaid,

        percent

    };

}


/* =====================================================
   TRANSACTION HISTORY
===================================================== */

function processTransactionHistory(){

    Kas.dashboard.transaction=

    Kas.data.transaksi

    .filter(

        item=>

        item.Transaksi===

        TRANSACTION.INCOME

    )

    .sort(

        (a,b)=>

        b.Tanggal.localeCompare(

            a.Tanggal

        )

    )

    .slice(

        0,

        DASHBOARD.HISTORY_LIMIT

    );

}


/* =====================================================
   EXPENSE HISTORY
===================================================== */

function processExpenseHistory(){

    Kas.dashboard.expense=

    Kas.data.transaksi

    .filter(

        item=>

        item.Transaksi===

        TRANSACTION.EXPENSE

    )

    .sort(

        (a,b)=>

        b.Tanggal.localeCompare(

            a.Tanggal

        )

    )

    .slice(

        0,

        DASHBOARD.HISTORY_LIMIT

    );

}


/* =====================================================
   STATISTIC
===================================================== */

function processStatistic(){

    const summary=

    Kas.dashboard.summary;

    Kas.dashboard.statistic={

        income:

        summary.income,

        expense:

        summary.expense,

        balance:

        summary.balance

    };

}


/* =====================================================
   INSIGHT
===================================================== */

function processInsight(){

    Kas.dashboard.insight=[];

}


/* =====================================================
   PROCESS ALL
===================================================== */

function processAll(){

    processData();

}


/* =====================================================
   END OF FILE
===================================================== */
