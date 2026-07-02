/* =====================================================
   KAS BULANAN SNA
   FILE : js/table.js
   DESCRIPTION : Activity Controller
===================================================== */


/* =====================================================
   SHOW ALL TRANSACTION
===================================================== */

function showAllTransaction(){

    renderActivityModal(

        "Transaksi Masuk",

        Kas.data.transaksi.filter(

            item=>

            item.Transaksi===

            TRANSACTION.INCOME

        )

    );

}


/* =====================================================
   SHOW ALL EXPENSE
===================================================== */

function showAllExpense(){

    renderActivityModal(

        "Pengeluaran Kas",

        Kas.data.transaksi.filter(

            item=>

            item.Transaksi===

            TRANSACTION.EXPENSE

        )

    );

}


/* =====================================================
   MODAL
===================================================== */

function renderActivityModal(

    title,

    data

){

    const html=

    data.map(item=>`

        <div class="activity-item ${

            item.Transaksi===TRANSACTION.INCOME

            ?

            "income"

            :

            "expense"

        }">

            <div class="activity-info">

                <h4>

                    ${

                        item.Transaksi===TRANSACTION.INCOME

                        ?

                        item.Nama

                        :

                        item.Keterangan

                    }

                </h4>

                <p>

                    ${formatDate(

                        item.Tanggal

                    )}

                </p>

            </div>

            <div class="activity-value">

                <strong>

                    ${formatCurrency(

                        item.Nominal

                    )}

                </strong>

            </div>

        </div>

    `).join("");

    alert(

        title+

        "\n\n"+

        data.map(item=>

            `${
                item.Transaksi===TRANSACTION.INCOME

                ?

                item.Nama

                :

                item.Keterangan
            }

${
    formatCurrency(
        item.Nominal
    )
}`

        ).join("\n\n")

    );

}


/* =====================================================
   END OF FILE
===================================================== */
