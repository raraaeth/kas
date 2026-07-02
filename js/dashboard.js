/* =====================================================
   KAS BULANAN SNA
   FILE : js/dashboard.js
   DESCRIPTION : Dashboard Renderer
===================================================== */


/* =====================================================
   RENDER DASHBOARD
===================================================== */

function renderDashboard(){

    renderHero();

    renderSummary();

    renderProgress();

    renderTransaction();

    renderExpense();

}


/* =====================================================
   HERO
===================================================== */

function renderHero(){

    DOM.heroMonth.textContent=

    getMonthName(

        Kas.filter.month

    );

}


/* =====================================================
   SUMMARY
===================================================== */

function renderSummary(){

    const summary=

    Kas.dashboard.summary;

    DOM.totalBalance.textContent=

    formatCurrency(

        summary.balance

    );

    DOM.totalIncome.textContent=

    formatCurrency(

        summary.income

    );

    DOM.totalExpense.textContent=

    formatCurrency(

        summary.expense

    );

    DOM.totalTransaction.textContent=

    summary.transaction;

}


/* =====================================================
   PROGRESS
===================================================== */

function renderProgress(){

    const progress=

    Kas.dashboard.progress;

    DOM.progressTitle.textContent=

    `Kas ${

        getMonthName(

            Kas.filter.month

        )

    }`;

    DOM.progressText.textContent=

    `${

        progress.paid

    } / ${

        progress.total

    } Orang`;

    DOM.progressPercent.textContent=

    formatPercent(

        progress.percent

    );

    DOM.progressBar.style.width=

    `${

        progress.percent

    }%`;

    DOM.unpaidCount.textContent=

    `${

        progress.unpaid.length

    } Orang`;

    removeChildren(

        DOM.unpaidContainer

    );

    if(

        progress.unpaid.length===0

    ){

        DOM.unpaidContainer.innerHTML=`

        <div class="unpaid-item empty">

            🎉 Semua anggota sudah membayar.

        </div>

        `;

        return;

    }

    progress.unpaid.forEach(name=>{

        const item=

        createElement(

            "div",

            "unpaid-item",

            `

            <span>

                👤 ${name}

            </span>

            <span>

                Belum Bayar

            </span>

            `

        );

        DOM.unpaidContainer.appendChild(

            item

        );

    });

}


/* =====================================================
   TRANSACTION
===================================================== */

function renderTransaction(){

    removeChildren(

        DOM.transactionContainer

    );

    Kas.dashboard.transaction.forEach(item=>{

        const card=

        createElement(

            "div",

            "activity-item income",

            `

            <div class="activity-info">

                <h4>

                    ${item.Nama}

                </h4>

                <p>

                    ${item.Keterangan}

                </p>

            </div>

            <div class="activity-value">

                <strong>

                    ${formatCurrency(

                        item.Nominal

                    )}

                </strong>

                <span>

                    ${formatDate(

                        item.Tanggal

                    )}

                </span>

            </div>

            `

        );

        DOM.transactionContainer.appendChild(

            card

        );

    });

}


/* =====================================================
   EXPENSE
===================================================== */

function renderExpense(){

    removeChildren(

        DOM.expenseContainer

    );

    Kas.dashboard.expense.forEach(item=>{

        const card=

        createElement(

            "div",

            "activity-item expense",

            `

            <div class="activity-info">

                <h4>

                    ${item.Keterangan}

                </h4>

                <p>

                    Pengeluaran Kas

                </p>

            </div>

            <div class="activity-value">

                <strong>

                    ${formatCurrency(

                        item.Nominal

                    )}

                </strong>

                <span>

                    ${formatDate(

                        item.Tanggal

                    )}

                </span>

            </div>

            `

        );

        DOM.expenseContainer.appendChild(

            card

        );

    });

}


/* =====================================================
   REFRESH
===================================================== */

function refreshDashboard(){

    renderDashboard();

}


/* =====================================================
   END OF FILE
===================================================== */
