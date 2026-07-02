/* =====================================================
   KAS BULANAN SNA
   FILE : js/main.js
   DESCRIPTION : Main Application
===================================================== */


/* =====================================================
   INITIALIZE
===================================================== */

async function initializeApp(){

    try{

        resetUI();

        await loadData();

        if(

            Kas.error

        ){

            return;

        }

        processAll();

        updateUI();

        initializeEvents();

        Kas.ready=true;

        console.log(

            `${APP.NAME} Ready ✅`

        );

    }

    catch(error){

        console.error(error);

        showError(

            error.message

        );

    }

}


/* =====================================================
   REFRESH
===================================================== */

async function refreshApp(){

    await loadData();

    if(

        Kas.error

    ){

        return;

    }

    processAll();

    updateUI();

}


/* =====================================================
   START
===================================================== */

document.addEventListener(

    "DOMContentLoaded",

    ()=>{

        initializeApp();

    }

);


/* =====================================================
   END OF FILE
===================================================== */
