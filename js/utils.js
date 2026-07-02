/* =====================================================
   KAS BULANAN SNA
   FILE : js/utils.js
   DESCRIPTION : Utility Functions
===================================================== */


/* =====================================================
   DOM
===================================================== */

function $(selector){

    return document.querySelector(

        selector

    );

}

function $$(selector){

    return document.querySelectorAll(

        selector

    );

}


/* =====================================================
   ELEMENT
===================================================== */

function createElement(

    tag,

    className="",

    html=""

){

    const element=

    document.createElement(tag);

    if(className){

        element.className=

        className;

    }

    element.innerHTML=

    html;

    return element;

}

function removeChildren(parent){

    while(

        parent.firstChild

    ){

        parent.removeChild(

            parent.firstChild

        );

    }

}


/* =====================================================
   NUMBER
===================================================== */

function toNumber(value){

    return Number(

        String(value)

        .replace(/[^\d-]/g,"")

    ) || 0;

}


/* =====================================================
   CURRENCY
===================================================== */

function formatCurrency(value){

    return new Intl.NumberFormat(

        APP.LOCALE,

        {

            style:"currency",

            currency:APP.CURRENCY,

            minimumFractionDigits:0

        }

    ).format(

        toNumber(value)

    );

}


/* =====================================================
   DATE
===================================================== */

function formatDate(date){

    return new Date(date)

    .toLocaleDateString(

        APP.LOCALE,

        {

            day:"2-digit",

            month:"short",

            year:"numeric"

        }

    );

}

function getCurrentMonth(){

    const now=

    new Date();

    return `${

        now.getFullYear()

    }-${

        String(

            now.getMonth()+1

        ).padStart(2,"0")

    }`;

}

function getMonthName(month){

    return new Date(

        month+"-01"

    ).toLocaleDateString(

        APP.LOCALE,

        {

            month:"long",

            year:"numeric"

        }

    );

}


/* =====================================================
   TEXT
===================================================== */

function capitalize(text){

    if(!text)

    return "";

    return text

    .charAt(0)

    .toUpperCase()

    +

    text.slice(1);

}

function truncate(

    text,

    length=40

){

    return text.length>length

    ?

    text.slice(

        0,

        length

    )+"..."

    :

    text;

}


/* =====================================================
   PERCENT
===================================================== */

function formatPercent(value){

    return `${

        Math.round(value)

    }%`;

}


/* =====================================================
   SORT
===================================================== */

function sortNominalDesc(data){

    return [...data].sort(

        (a,b)=>

        toNumber(

            b.Nominal??

            b.nominal

        )

        -

        toNumber(

            a.Nominal??

            a.nominal

        )

    );

}


/* =====================================================
   RANDOM
===================================================== */

function randomItem(array){

    return array[

        Math.floor(

            Math.random()

            *

            array.length

        )

    ];

}


/* =====================================================
   LAST SYNC
===================================================== */

function updateLastSync(){

    Kas.lastSync=

    new Date();

    DOM.lastSync.textContent=

    Kas.lastSync

    .toLocaleString(

        APP.LOCALE

    );

}


/* =====================================================
   END OF FILE
===================================================== */
