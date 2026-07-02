/* =====================================================
   KAS BULANAN SNA
   FILE : js/insight.js
   DESCRIPTION : Insight Renderer
===================================================== */


/* =====================================================
   PROCESS INSIGHT
===================================================== */

function processInsight(){

    const insight=[];

    const summary=

    Kas.dashboard.summary;

    const progress=

    Kas.dashboard.progress;

    const expense=

    Kas.dashboard.expense;

    /* ======================================
       SALDO
    ====================================== */

    if(summary.balance>0){

        insight.push({

            icon:"💖",

            title:"Saldo Kas",

            description:

            `Saldo kas saat ini sebesar ${

                formatCurrency(

                    summary.balance

                )

            }. Kondisi kas masih aman.`

        });

    }

    /* ======================================
       PEMBAYARAN
    ====================================== */

    insight.push({

        icon:"🌸",

        title:"Pembayaran",

        description:

        `${

            progress.paid

        } dari ${

            progress.total

        } anggota telah membayar kas bulan ini.`

    });

    /* ======================================
       BELUM BAYAR
    ====================================== */

    if(

        progress.unpaid.length

    ){

        insight.push({

            icon:"⏳",

            title:"Belum Membayar",

            description:

            `Masih terdapat ${

                progress.unpaid.length

            } anggota yang belum melakukan pembayaran.`

        });

    }

    else{

        insight.push({

            icon:"🎉",

            title:"Lunas",

            description:

            "Seluruh anggota telah menyelesaikan pembayaran bulan ini."

        });

    }

    /* ======================================
       PENGELUARAN
    ====================================== */

    if(expense.length){

        const latest=

        expense[0];

        insight.push({

            icon:"💸",

            title:"Pengeluaran Terakhir",

            description:

            `${

                latest.Keterangan

            } sebesar ${

                formatCurrency(

                    latest.Nominal

                )

            }.`

        });

    }

    /* ======================================
       CASH FLOW
    ====================================== */

    insight.push({

        icon:"📈",

        title:"Cash Flow",

        description:

        `Kas masuk ${

            formatCurrency(

                summary.income

            )

        } dan kas keluar ${

            formatCurrency(

                summary.expense

            )

        } bulan ini.`

    });

    Kas.dashboard.insight=

    insight.slice(

        0,

        DASHBOARD.INSIGHT_LIMIT

    );

}


/* =====================================================
   RENDER
===================================================== */

function renderInsight(){

    removeChildren(

        DOM.insightContainer

    );

    Kas.dashboard.insight.forEach(item=>{

        const card=

        createElement(

            "div",

            "insight-card fade-in",

            `

            <div class="insight-icon">

                ${item.icon}

            </div>

            <div class="insight-content">

                <h3>

                    ${item.title}

                </h3>

                <p>

                    ${item.description}

                </p>

            </div>

            `

        );

        DOM.insightContainer.appendChild(

            card

        );

    });

}


/* =====================================================
   REFRESH
===================================================== */

function refreshInsight(){

    processInsight();

    renderInsight();

}


/* =====================================================
   END OF FILE
===================================================== */
