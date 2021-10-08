console.log('ChallengeName      : order-sumary component')
console.log('NumberOfChallenge  : 01')
console.log('Skills             : html, css, js')
console.log('Libraries          : seewtAlert')
console.log('Based on FrontEndMentor idea')
const buttonToPay = document.getElementById("BTP"),
buttonToCancel = document.getElementById("BTC");

let confirmation = (ev) =>{
    swal("It's done", "Start your new road", "success");
}

let decline = (ev) =>{
    swal({
        title: "Are you sure ?",
        text: "Remember that we have more choices in our plans section :)",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
}

buttonToPay.addEventListener("click",confirmation)
buttonToCancel.addEventListener("click",decline)

