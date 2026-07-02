/* =====================================================
   KAS BULANAN SNA
   FILE : js/api.js
   DESCRIPTION : Google Spreadsheet API
===================================================== */


/* =====================================================
   FETCH TRANSACTION
===================================================== */

async function fetchTransaction(){

    const response=

    await fetch(

        API.transaksi()

    );

    if(

        !response.ok

    ){

        throw new Error(

            "Gagal mengambil data transaksi."

        );

    }

    return await response.json();

}


/* =====================================================
   LOAD DATA
===================================================== */

async function loadData(){

    try{

        showLoading();

        Kas.loading=true;

        const transaksi=

        await fetchTransaction();

        Kas.raw.transaksi=

        transaksi;

        Kas.ready=true;

        Kas.error=null;

        updateLastSync();

    }

    catch(error){

        console.error(error);

        Kas.error=

        error.message;

        showError(

            error.message

        );

    }

    finally{

        Kas.loading=false;

        hideLoading();

    }

}


/* =====================================================
   REFRESH
===================================================== */

async function refreshData(){

    await loadData();

}


/* =====================================================
   END OF FILE
===================================================== */
