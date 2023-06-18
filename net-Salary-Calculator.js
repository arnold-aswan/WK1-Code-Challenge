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

// TAX BRACKETS
const taxTier1 = 24000
const taxTier2 = 32333
const taxTier3 = 8333

// PAYEE TAX PERCENTAGES
const payeTier1 = 0.1
const payeTier2 = 0.25
const payeTier3 = 0.3

// NSSF DEDUCTIONS
const nssfTier1 = 360
const nssfTier2 = 720
const nssfTotal = nssfTier1 + nssfTier2

// NHIF 
let nhif
let insuaranceRelief
let nhifAfterRelief


grossPayTax = grossPay - nssfTotal //Gets taxable income

if(grossPayTax <= 24000) {
  // subjecting taxable income to the tax bracket
    payeDue = (grossPayTax * payeTier1) // Gets PAYE charges 
    payeDue = payeDue - personalRelief // PAYE after personal reliefs deduction

    if(payeDue < 0 || payeDue < personalRelief) {
        payeDue = 0
    } else {
      payeDue = payeDue
    }

    // Logs tax results
    printTotals(grossPay, nssfTotal, grossPayTax,payeDue, personalRelief)
   
    calculateNhif(grossPay) // Gets NHIF Contribution
    getInsuaranceRelief(nhif) // Gets NHIF/Insuarance Relief

    // Calculates & prints the net pay after PAYE & NHIF deductions  
    netPay = grossPayTax - (payeDue + nhif)
    console.log(`Net salary is: ${netPay}`)
    alert((`Net salary is: ${netPay}`))

} else if (grossPayTax > 24000 && grossPayTax <= 32333) {
  // Subjecting taxable income to first tax bracket
    taxableIncome = grossPayTax //=> get taxable pay
    let tax1 = (taxTier1 * payeTier1) 
    taxableIncome = taxableIncome - taxTier1

    if(taxableIncome < taxTier3) {
      // Subjecting taxable income to second tax bracket
        let tax2 = (taxableIncome * payeTier2)
        taxCharged = tax1 + tax2
        payeDue = taxCharged // Get PAYE
        
        // PAYE charges after personal Relief
        taxAfterRelief = taxCharged - personalRelief
        payeDue = taxAfterRelief
        
        calculateNhif(grossPay) // logs nhif contribution
        getInsuaranceRelief(nhif) // logs nhif/insuarance relief

        payeDue = payeDue - insuaranceRelief // PAYE charges after NHIF/Insuarance Relief
        
        // Prints out the results 
        printTotals(grossPay, nssfTotal, grossPayTax, payeDue, personalRelief)
        
        // Gets the net pay and prints it out
        let totalDeductions = payeDue + nhif
        netPay = grossPayTax - totalDeductions
        console.log(`Net salary is: ${netPay}`)
        alert(`Net slary is: ${netPay}`) 
    }     

} else if (grossPayTax > 32333) {
    // subjecting taxable income to the tax brackets
    let tax1 = taxTier1 * payeTier1
    let tax2 = taxTier3 * payeTier2
    taxableIncome = grossPayTax
    grossTaxed = grossPayTax - (taxTier1 + taxTier3)
    let tax3 = grossTaxed * payeTier3
    
    // Get full PAYE charges
    taxCharged = tax1 + tax2 + tax3 
    payeDue = taxCharged.toFixed(2)

    calculateNhif(grossPay)  // Gets NHIF contribution
    getInsuaranceRelief(nhif) // Gets NHIF/Insuarance relief

    taxAfterRelief = taxCharged - personalRelief // PAYE charges after personal Relief
    payeDue = taxAfterRelief - insuaranceRelief // PAYE charges after NHIF/Insuarance Relief

    // Prints out the results 
    printTotals(grossPay, nssfTotal, grossPayTax, payeDue, personalRelief)

    // Gets the net pay and prints it out
    netPay = grossPayTax - (payeDue + nhif)
    console.log((`Net slary is: ${netPay}`))
    alert(`Net salary is: ${netPay}`) 
}

// function that calculates NHIF contribution based on grosspay
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
    console.log(`NHIF Contribution: ${nhif}`)
    return nhif;
}

// function that gets insuarance/NHIF relief
function getInsuaranceRelief(nhif) {
  const nhifRelief = 0.15

  insuaranceRelief = nhifRelief * nhif
  console.log(`Insurance/NHIF Relief: ${insuaranceRelief}`)
  return insuaranceRelief
} 

// function to print out results
function printTotals(grossPay, nssfTotal, grossPayTax, payeDue, personalRelief) {
  console.log(`Gross Pay: ${grossPay}`)
  console.log(`NSSF Contribution: ${nssfTotal}`)
  console.log(`Taxable Pay: ${grossPayTax}`)
  console.log(`PAYE Due before personal relief: ${payeDue.toFixed(2)}`)
  console.log(`Personal Relief: ${personalRelief}`)
  console.log(`PAYE DUE after Relief: ${payeDue.toFixed(2)}`)
} 