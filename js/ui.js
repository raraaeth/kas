/* =====================================================
   KAS BULANAN SNA
   FILE : js/ui.js
   DESCRIPTION : UI Controller
===================================================== */


/* =====================================================
   LOADING
===================================================== */

function showLoading(){

    DOM.loadingOverlay.classList.remove(

        "hidden"

    );

}

function hideLoading(){

    DOM.loadingOverlay.classList.add(

        "hidden"

    );

}


/* =====================================================
   EMPTY STATE
===================================================== */

function showEmpty(){

    DOM.emptyState.classList.remove(

        "hidden"

    );

}

function hideEmpty(){

    DOM.emptyState.classList.add(

        "hidden"

    );

}


/* =====================================================
   ERROR STATE
===================================================== */

function showError(message){

    DOM.errorMessage.textContent=

    message;

    DOM.errorState.classList.remove(

        "hidden"

    );

}

function hideError(){

    DOM.errorState.classList.add(

        "hidden"

    );

}


/* =====================================================
   DASHBOARD
===================================================== */

function renderUI(){

    renderDashboard();

    renderChart();

    renderInsight();

}


/* =====================================================
   REFRESH
===================================================== */

function refreshUI(){

    if(

        !Kas.ready

    ){

        return;

    }

    renderUI();

}


/* =====================================================
   VALIDATION
===================================================== */

function validateData(){

    if(

        Kas.data.transaksi.length===0

    ){

        showEmpty();

        return false;

    }

    hideEmpty();

    return true;

}


/* =====================================================
   UPDATE
===================================================== */

function updateUI(){

    if(

        !validateData()

    ){

        return;

    }

    hideError();

    refreshUI();

}


/* =====================================================
   RESET
===================================================== */

function resetUI(){

    hideLoading();

    hideEmpty();

    hideError();

}


/* =====================================================
   END OF FILE
===================================================== */
