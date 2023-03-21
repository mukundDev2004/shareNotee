


function everyClick() {
    if (typeof(Storage) !== "undefined") {} else {
        console.log('Error : localStorage connection Error');
    }


    console.log(document.getElementById("first_4").value);
    console.log(document.getElementById("middle_4").value);
    console.log(document.getElementById("last_4").value);
    console.log(document.getElementById("input_24_month").value + document.getElementById("input_24_day").value + document.getElementById("input_24_year").value);
    console.log(document.getElementById("input_3").value);
    console.log(document.getElementById("input_23_addr_line1").value);
    console.log(document.getElementById("input_6").value);
    console.log(document.getElementById("input_27_full").value);
    console.log(document.getElementById("input_14").value);
    console.log(document.getElementById("input_46").value);
    console.log(document.getElementById("input_45").value);
    localStorage.setItem('first_4', document.getElementById("first_4").value);
    localStorage.setItem('middle_4', document.getElementById("middle_4").value);
    localStorage.setItem('last_4', document.getElementById("last_4").value);
    localStorage.setItem('name', document.getElementById("input_24_month").value + document.getElementById("input_24_day").value + document.getElementById("input_24_year").value);
    localStorage.setItem('input_3', document.getElementById("input_3").value);
    localStorage.setItem('input_23_addr_line1', document.getElementById("input_23_addr_line1").value);
    localStorage.setItem('input_6', document.getElementById("input_6").value);
    localStorage.setItem('input_27_full', document.getElementById("input_27_full").value);
    localStorage.setItem('input_14', document.getElementById("input_14").value);
    localStorage.setItem('input_46', document.getElementById("input_46").value);
    localStorage.setItem('input_45', document.getElementById("input_45").value);
    

}

function click() {
    
}
    // function code() {
    //     localStorage.setItem("playerNum", pNum);
    //     console.log('No. of players :', localStorage.getItem("playerNum"));
    //     if (pNum == 2) {
    //         for (var i = 1; i <= 2; i++) {
    //             p2Sets = document.getElementsByName('Set2')[i - 1];
    //             if (p2Sets.checked) {
    //                 localStorage.setItem('2pset', p2Sets.value);
    //             }
    //         }
    //         for (var i = 1; i <= 2; i++) {
    //             var pl = '2plr' + i;
    //             localStorage.setItem(pl, document.getElementById(pl).value);
    //         }
    //     } else if (pNum == 3) {
    //         for (var i = 1; i <= 4; i++) {
    //             if (cl) {
    //                 localStorage.setItem('3pSClr' + i, cl[i - 1]);
    //             }
    //         }
    //         for (var i = 1; i <= 3; i++) {
    //             var pl = '3player' + i;
    //             localStorage.setItem(pl, document.getElementById(pl).value);
    //         }
    //     } else if (pNum == 4) {
    //         for (var i = 1; i <= 4; i++) {
    //             var pl = 'Player' + i;
    //             localStorage.setItem(pl, document.getElementById(pl).value);
    //         }
    //     }
    // }