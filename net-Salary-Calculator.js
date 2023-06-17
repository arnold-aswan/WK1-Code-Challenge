// 1. get inputs of basic salary & benefits
let grossPay= prompt("Enter gross salary: ") 
let grossTaxed
let grossPayTax
let netPay
let payeDue
let taxableIncome 
let taxCharged
let taxAfterRelief
// RELIEFS 
const personalRelief = 2400

// TAX PAY
const taxTier1 = 24000
const taxTier2 = 32333
const taxTier3 = 8333

// PAYEE TAXES
const payeTier1 = 0.1
const payeTier2 = 0.25
const payeTier3 = 0.3

// NSSF DEDUCTIONS
const nssfTier1 = 360
const nssfTier2 = 720
const nssfTotal = nssfTier1 + nssfTier2

// NHIF DEDUCTIONS
let nhif


// PAYEE
// 1. Takes gross pay subjects it to first tax bracket
// 2. gets difference of the remaining then subjects to next tax bracket
grossPayTax = grossPay - nssfTotal
if(grossPayTax <= 24000) {
    // Prints out taxable pay after nssf deductions
    console.log(`Taxable pay after nssf deductions: ${grossPayTax}`)

    // Gets PAYE charges 
    payeDue = (grossPayTax * payeTier1)
    console.log(`PAYE due before personal relief: ${payeDue}`)

    // PAYE after personal reliefs deduction
    payeDue = payeDue - personalRelief

    if(payeDue < 0) {
        payeDue = 0
        console.log(`PAYE DUE after personal relief: ${payeDue}`)
    } else {
        console.log(`PAYE DUE after personal relief: ${payeDue}`)
    }
    
    // Calculate NHIF 
    calculateNhif(grossPay)
    console.log(`NHIF deduction: ${nhif}`)

    // Calculates & prints the net pay after PAYE & NHIF deductions  
    netPay = grossPayTax - (payeDue + nhif)
    console.log(`Net salary is: ${netPay}`)
    alert((`Net salary is: ${netPay}`))

} else if (grossPayTax > 24000 && grossPayTax <= 32333) {
    console.log(`Middle Gross pay: ${grossPay}`)

    // taxableIncome = grossPay - nssfTotal
    taxableIncome = grossPayTax //=> get taxable pay
    console.log(`Taxble Pay: ${taxableIncome}`)

    let tax1 = (taxTier1 * payeTier1) 
   
    taxableIncome = taxableIncome - taxTier1
    // console.log(`Taxble pay after tax1: ${taxableIncome}`)

    // grossPay down here
    if(taxableIncome < taxTier3) {
        // console.log(`less Middle Gross salary is: ${grossPay}`)
        
        // let tax2 = (grossPay * payeTier2)
        let tax2 = (taxableIncome * payeTier2)
        // taxableIncome = (tax1 + tax2)
        taxCharged = tax1 + tax2
        // console.log(`PAYE DUE before Relief: ${taxableIncome}`)
        console.log(`PAYE DUE before Relief: ${taxCharged}`)

        taxAfterRelief = taxCharged - personalRelief
        payeDue = taxAfterRelief
        console.log(`PAYE DUE after Relief: ${payeDue.toFixed(2)}`)

        calculateNhif(grossPay)
        console.log(`NHIF deduction: ${nhif}`)

        netPay = grossPay - (payeDue + nhif)
        // console.log(`Middle Net salary is: ${grossPay}`)
        console.log(`Middle Net salary is: ${netPay}`)
        // alert(`Middle Net slary is: ${grossPay}`)
        alert(`Middle Net slary is: ${netPay}`) 
    }     

} else if (grossPayTax > 32333) {
    console.log(`end gross salary: ${grossPay}`)
    let tax1 = taxTier1 * payeTier1
    let tax2 = taxTier3 * payeTier2

    taxableIncome = grossPayTax
    console.log(`Taxable pay: ${taxableIncome}`)
   
    grossTaxed = grossPayTax - (taxTier1 + taxTier3)

    let tax3 = grossTaxed * payeTier3
    
    // Get full PAYE charges
    taxCharged = tax1 + tax2 + tax3 
    payeDue = taxCharged.toFixed(2)
    console.log(`PAYE DUE before relief: ${payeDue}`)

    // PAYE charges after personal Relief
    taxAfterRelief = taxCharged - personalRelief
    payeDue = taxAfterRelief
    console.log(`PAYE DUE after Relief: ${payeDue.toFixed(2)}`)

    calculateNhif(grossPay)
    console.log(`NHIF deduction: ${nhif}`)
    // console.log(`Total deductions: ${payeDue + nhif +nssfTotal}`)
    netPay = grossPay - (payeDue + nhif)

    console.log((`End Net slary is: ${netPay}`))
    alert(`End Net salary is: ${netPay}`) 
}


function calculateNhif(grossPay) {

    switch (true) {
      case grossPay >= 0 && grossPay <= 5999:
        nhif = 150;
        break;
      case grossPay >= 6000 && grossPay <= 7999:
        nhif = 300;
        break;
      case grossPay >= 8000 && grossPay <= 11999:
        nhif = 400;
        break;
      case grossPay >= 12000 && grossPay <= 14999:
        nhif = 500;
        break;
      case grossPay >= 15000 && grossPay <= 19999:
        nhif = 600;
        break;
      case grossPay >= 20000 && grossPay <= 24999:
        nhif = 750;
        break;
      case grossPay >= 25000 && grossPay <= 29999:
        nhif = 850;
        break;
      case grossPay >= 30000 && grossPay <= 34999:
        nhif = 900;
        break;
      case grossPay >= 35000 && grossPay <= 39999:
        nhif = 950;
        break;
      case grossPay >= 40000 && grossPay <= 44999:
        nhif = 1000;
        break;
      case grossPay >= 45000 && grossPay <= 49999:
        nhif = 1100;
        break;
      case grossPay >= 50000 && grossPay <= 59999:
        nhif = 1200;
        break;
      case grossPay >= 60000 && grossPay <= 69999:
        nhif = 1300;
        break;
      case grossPay >= 70000 && grossPay <= 79999:
        nhif = 1400;
        break;
      case grossPay >= 80000 && grossPay <= 89999:
        nhif = 1500;
        break;
      case grossPay >= 90000 && grossPay <= 99999:
        nhif = 1600;
        break;
      case grossPay >= 100000:
        nhif = 1700;
        break;
      default:
        nhif = 0;
    }
  
    return nhif;
  }
