/* =====================================================
   KAS BULANAN SNA
   FILE : js/character.js
   DESCRIPTION : Hero Character
===================================================== */

function updateHeroCharacter(){

    const balance=
    Kas.dashboard.summary.balance;

    const income=
    Kas.dashboard.summary.income;

    const expense=
    Kas.dashboard.summary.expense;

    const unpaid=
    Kas.dashboard.progress.unpaid;

    const progress=
    Kas.dashboard.progress.percent;

    let image=
    "happy.png";

    if(progress>=100){

        image="excited.png";

    }

    else if(balance<=0){

        image="sad.png";

    }

    else if(expense>income){

        image="warning.png";

    }

    else if(unpaid>0){

        image="thinking.png";

    }

    DOM.heroCharacter.src=
    `assets/images/${image}`;

}
