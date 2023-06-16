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



// PAYEE
// 1. Takes gross pay subjects it to first tax bracket
// 2. gets difference of the remaining then subjects to next tax bracket

if(grossPay <= 24000) {
    taxableIncome = (grossPay * payeTier1)
    console.log(`Taxable Income: ${taxableIncome}`)
    alert(`Taxable Income: ${taxableIncome}`)
    
    // apply nssf Tier 1 & 2 deductions
    netPay = grossPay - nssfTotal
    console.log(`Net salary is: ${netPay}`)
    alert((`Net salary is: ${netPay}`))

    // apply personal relief
    // payeDue = (personalRelief - taxableIncome)
    if(taxableIncome < personalRelief) {
        console.log((`PAYE DUE: 0`))
        alert(`PAYE DUE: 0`)
    }

} else if (grossPay > 24000 && grossPay <= 32333) {
    console.log(`Middle Gross pay: ${grossPay}`)

    let tax1 = (taxTier1 * payeTier1) 
    grossPay = grossPay - taxTier1

    if(grossPay < taxTier3) {
        // console.log(`less Middle Gross salary is: ${grossPay}`)
        
        let tax2 = (grossPay * payeTier2)
        taxableIncome = (tax1 + tax2)
        console.log(`PAYE DUE before Relief: ${taxableIncome}`)
        console.log(`PAYE DUE after Relief: ${taxableIncome - personalRelief}`)

        console.log(grossPay)
        grossPay = grossPay - taxableIncome
        console.log(`Middle Net salary is: ${grossPay}`)
        alert(`Middle Net slary is: ${grossPay}`)
   
    } 
    // else if (grossPay > taxTier3) {
    //     console.log(`Middle 3 Gross salary is: ${grossPay}`)
    //     let tax2 = (taxTier3 * payeTier2)
    //     taxableIncome = tax1 + tax2
    //     grossPay = grossPay - taxableIncome
    //     console.log(`Middle 3 Net salary is: ${grossPay}`)
    //     alert(`Middle 3 Net slary is: ${grossPay}`)
    // }

} else if (grossPay > 32333) {
    console.log(`end gross salary: ${grossPay}`)
    let tax1 = taxTier1 * payeTier1
    let tax2 = taxTier3 * payeTier2
    grossPay = grossPay - (taxTier1 + taxTier3)

    let tax3 = grossPay * payeTier3

    taxableIncome = tax1 + tax2 + tax3
    grossPay = grossPay - taxableIncome 
    netPay = grossPay

    // console.log(`End Net salary is: ${tax1} ${tax2} ${tax3} ${grossPay}`)
    console.log(`PAYE DUE before relief: ${taxableIncome}`)
    console.log(`PAYE DUE after Relief: ${taxableIncome - personalRelief}`)
    console.log((`End Net slary is: ${netPay}`))
    alert(`End Net salary is: ${netPay}`) 
}

// 2. calculates the PAYE Deductions
    // <= 24000 10%  
    // >24000 && <= 32333  25%
    //  >32333   30%

    // PAYEE RELIEFS
    // personal releief  2400
// 2.1 NHIF | NSSF Deductions