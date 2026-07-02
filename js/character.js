/* =====================================================
   KAS BULANAN SNA
   FILE : js/character.js
   DESCRIPTION : Hero Character
===================================================== */

function updateHeroCharacter(){

    const summary =

    Kas.dashboard.summary;

    const progress =

    Kas.dashboard.progress;

    let image =

    "happy.png";

    if(

        progress.percent >= 100

    ){

        image =

        "excited.png";

    }

    else if(

        summary.balance <= 0

    ){

        image =

        "sad.png";

    }

    else if(

        summary.expense >=

        summary.income * 0.5

    ){

        image =

        "warning.png";

    }

    else if(

        progress.unpaid.length > 0

    ){

        image =

        "thinking.png";

    }

    DOM.heroCharacter.src =

    `assets/images/${image}`;

}
