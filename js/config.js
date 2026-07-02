/* =====================================================
   KAS BULANAN SNA
   FILE : js/config.js
   DESCRIPTION : Configuration
===================================================== */


/* =====================================================
   APPLICATION
===================================================== */

const APP={

    NAME:"Kas Bulanan SNA",

    VERSION:"1.0.0",

    AUTHOR:"Ainur",

    LOCALE:"id-ID",

    CURRENCY:"IDR"

};


/* =====================================================
   GOOGLE SHEET
===================================================== */

const SHEET={

    ID:"17dJQbzzCf6q2nDRbtq0vXKcPa1sPK8w7t92NFUtkINs",

    TRANSACTION:"transaksi"

};


/* =====================================================
   API
===================================================== */

const API={

    BASE:

    "https://opensheet.elk.sh",

    transaksi(){

        return `${

            this.BASE

        }/${
            SHEET.ID
        }/${
            SHEET.TRANSACTION
        }`;

    }

};


/* =====================================================
   DASHBOARD
===================================================== */

const DASHBOARD={

    HISTORY_LIMIT:2,

    INSIGHT_LIMIT:5,

    DEFAULT_MONTH:

    getCurrentMonth()

};


/* =====================================================
   TRANSACTION
===================================================== */

const TRANSACTION={

    INCOME:"Masuk",

    EXPENSE:"Keluar"

};


/* =====================================================
   APPLICATION STATE
===================================================== */

const Kas={

/* ======================================
   RAW
====================================== */

raw:{

    transaksi:[]

},

/* ======================================
   DATA
====================================== */

data:{

    transaksi:[]

},

/* ======================================
   DASHBOARD
====================================== */

dashboard:{

    summary:{},

    progress:{},

    transaction:[],

    expense:[],

    statistic:{},

    insight:[]

},

/* ======================================
   FILTER
====================================== */

filter:{

    month:

    DASHBOARD.DEFAULT_MONTH

},

/* ======================================
   CHART
====================================== */

chart:{

    donut:null

},

/* ======================================
   STATUS
====================================== */

loading:false,

ready:false,

error:null,

lastSync:null

};


/* =====================================================
   DOM
===================================================== */

const DOM={

/* ======================================
   HERO
====================================== */

heroMonth:

$("#heroMonth"),

heroQuote:

$("#heroQuote"),

heroCharacter:

$("#heroCharacter"),

/* ======================================
   SUMMARY
====================================== */

totalBalance:

$("#totalBalance"),

totalIncome:

$("#totalIncome"),

totalExpense:

$("#totalExpense"),

totalTransaction:

$("#totalTransaction"),

/* ======================================
   PROGRESS
====================================== */

progressTitle:

$("#progressTitle"),

progressText:

$("#progressText"),

progressPercent:

$("#progressPercent"),

progressBar:

$("#progressBar"),

unpaidCount:

$("#unpaidCount"),

unpaidContainer:

$("#unpaidContainer"),

/* ======================================
   TRANSACTION
====================================== */

transactionContainer:

$("#transactionContainer"),

expenseContainer:

$("#expenseContainer"),

showAllTransaction:

$("#showAllTransaction"),

showAllExpense:

$("#showAllExpense"),

/* ======================================
   STATISTIC
====================================== */

donutChart:

$("#donutChart"),

chartIncome:

$("#chartIncome"),

chartExpense:

$("#chartExpense"),

chartBalance:

$("#chartBalance"),

/* ======================================
   INSIGHT
====================================== */

insightContainer:

$("#insightContainer"),

/* ======================================
   FOOTER
====================================== */

lastSync:

$("#lastSync"),

/* ======================================
   STATE
====================================== */

loadingOverlay:

$("#loadingOverlay"),

emptyState:

$("#emptyState"),

errorState:

$("#errorState"),

errorMessage:

$("#errorMessage")

};
