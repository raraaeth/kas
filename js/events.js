/* =====================================================
   KAS BULANAN SNA
   FILE : js/events.js
   DESCRIPTION : Event Handler
===================================================== */


/* =====================================================
   SHOW ALL TRANSACTION
===================================================== */

function bindTransactionEvent(){

    if(

        !DOM.showAllTransaction

    ) return;

    DOM.showAllTransaction

    .addEventListener(

        "click",

        event=>{

            event.preventDefault();

            showAllTransaction();

        }

    );

}


/* =====================================================
   SHOW ALL EXPENSE
===================================================== */

function bindExpenseEvent(){

    if(

        !DOM.showAllExpense

    ) return;

    DOM.showAllExpense

    .addEventListener(

        "click",

        event=>{

            event.preventDefault();

            showAllExpense();

        }

    );

}


/* =====================================================
   WINDOW
===================================================== */

function bindWindowEvent(){

    window.addEventListener(

        "focus",

        ()=>{

            console.log(

                "Dashboard Active"

            );

        }

    );

}


/* =====================================================
   KEYBOARD
===================================================== */

function bindKeyboardEvent(){

    document.addEventListener(

        "keydown",

        event=>{

            if(

                event.key==="F5"

            ){

                console.log(

                    "Refresh"

                );

            }

        }

    );

}


/* =====================================================
   INITIALIZE
===================================================== */

function initializeEvents(){

    bindTransactionEvent();

    bindExpenseEvent();

    bindWindowEvent();

    bindKeyboardEvent();

}


/* =====================================================
   END OF FILE
===================================================== */
