// 1. get inputs of basic salary & benefits
let grossPay= prompt("Enter gross salary: ")
let netPay
let payeDue
let taxableIncome 
// RELIEFS 
const personalRelief = 2400

// TAX PAY
const taxTier1 = 24000
const taxTier2 = 32333
const taxTier3 = 8332

// PAYEE TAXES
const payeTier1 = 0.1
const payeTier2 = 0.25
const payeTier3 = 0.3

// NSSF DEDUCTIONS
const nssfTier1 = 360
const nssfTier2 = 720

// NHIF DEDUCTIONS



// PAYEE
// 1. Takes gross pay subjects it to first tax bracket
// 2. gets difference of the remaining then subjects to next tax bracket

if(grossPay <= 24000) {
    taxableIncome = (grossPay * payeTier1)
    console.log(`taxable Income: ${taxableIncome}`)
    alert((`taxable Income: ${taxableIncome}`))

    // apply personal relief
    // payeDue = (personalRelief - taxableIncome)
    if(taxableIncome < personalRelief) {
        alert(`PAYE DUE: 0`)
        console.log((`PAYE DUE: 0`))
    }

} else if (grossPay > 24000 && grossPay <= 32333) {
    let tax1 = (taxTier1 * payeTier1) 
    grossPay = grossPay - tax1

    if(grossPay < taxTier3) {
        let tax2 = (grossPay * payeTier2)
        taxableIncome = (tax1 + tax2)
        grossPay = grossPay - taxableIncome
        console.log(grossPay)
   
    } else if (grossPay > taxTier3) {
        let tax2 = (taxTier3 * payeTier2)
        taxableIncome = tax1 + tax2
        grossPay = grossPay - taxableIncome
        console.log(grossPay)
    }

} else if (grossPay > 32333) {
    let tax1 = taxTier1 * payeTier1
    grossPay = grossPay - tax1

    let tax2 = taxTier3 * payeTier2
    grossPay = grossPay - tax2

    let tax3 = taxTier3 * payeTier3
    grossPay = grossPay - tax3    
}

// 2. calculates the PAYE Deductions
    // <= 24000 10%  
    // >24000 && <= 32333  25%
    //  >32333   30%

    // PAYEE RELIEFS
    // personal releief  2400
    // insurance relief  5000
// 2.1 NHIF | NSSF Deductions