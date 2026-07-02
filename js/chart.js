/* =====================================================
   KAS BULANAN SNA
   FILE : js/chart.js
   DESCRIPTION : Donut Chart
===================================================== */


/* =====================================================
   RENDER CHART
===================================================== */

function renderChart(){

    const statistic=

    Kas.dashboard.statistic;

    DOM.chartIncome.textContent=

    formatCurrency(

        statistic.income

    );

    DOM.chartExpense.textContent=

    formatCurrency(

        statistic.expense

    );

    DOM.chartBalance.textContent=

    formatCurrency(

        statistic.balance

    );

    createDonutChart();

}


/* =====================================================
   CREATE DONUT CHART
===================================================== */

function createDonutChart(){

    if(

        Kas.chart.donut

    ){

        Kas.chart.donut.destroy();

    }

    Kas.chart.donut=

    new Chart(

        DOM.donutChart,

        {

            type:"doughnut",

            data:{

                labels:[

                    "Kas Masuk",

                    "Kas Keluar"

                ],

                datasets:[{

                    data:[

                        Kas.dashboard.statistic.income,

                        Kas.dashboard.statistic.expense

                    ],

                    backgroundColor:[

                        "#71D8A4",

                        "#FF8C97"

                    ],

                    borderWidth:0,

                    hoverOffset:8

                }]

            },

            options:{

                responsive:true,

                maintainAspectRatio:false,

                cutout:"72%",

                plugins:{

                    legend:{

                        display:false

                    },

                    tooltip:{

                        callbacks:{

                            label(context){

                                return `${

                                    context.label

                                }: ${

                                    formatCurrency(

                                        context.raw

                                    )

                                }`;

                            }

                        }

                    }

                }

            }

        }

    );

}


/* =====================================================
   REFRESH
===================================================== */

function refreshChart(){

    renderChart();

}


/* =====================================================
   END OF FILE
===================================================== */
