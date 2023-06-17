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
    
    // Calculates & prints the net pay after PAYE deductions
    netPay = grossPayTax - payeDue
    console.log(`Net salary is: ${netPay}`)
    alert((`Net salary is: ${netPay}`))

} else if (grossPayTax > 24000 && grossPayTax <= 32333) {
    console.log(`Middle Gross pay: ${grossPay}`)

    // taxableIncome = grossPay - nssfTotal
    taxableIncome = grossPayTax //=> get taxable pay
    console.log(`Taxble Pay: ${taxableIncome}`)

    let tax1 = (taxTier1 * payeTier1) 
    // grossPay = grossPay - taxTier1
    // console.log(taxableIncome)
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

        // console.log(grossPay)
        // grossPay = grossPay - taxableIncome
        netPay = grossPay - payeDue
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
    console.log(`gross taxed tax3 ${grossTaxed}`)

    let tax3 = grossTaxed * payeTier3
    
    // Get full PAYE charges
    taxCharged = tax1 + tax2 + tax3 
    payeDue = taxCharged.toFixed(2)
    console.log(`PAYE DUE before relief: ${payeDue}`)

    // PAYE charges after personal Relief
    taxAfterRelief = taxCharged - personalRelief
    payeDue = taxAfterRelief
    console.log(`PAYE DUE after Relief: ${payeDue.toFixed(2)}`)
    netPay = grossPay - payeDue 

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





// else if (grossPay > taxTier3) {
            //     console.log(`Middle 3 Gross salary is: ${grossPay}`)
            //     let tax2 = (taxTier3 * payeTier2)
            //     taxableIncome = tax1 + tax2
            //     grossPay = grossPay - taxableIncome
            //     console.log(`Middle 3 Net salary is: ${grossPay}`)
            //     alert(`Middle 3 Net slary is: ${grossPay}`)
            // }


// else if (grossPay > taxTier3) {
    //     console.log(`Middle 3 Gross salary is: ${grossPay}`)
    //     let tax2 = (taxTier3 * payeTier2)
    //     taxableIncome = tax1 + tax2
    //     grossPay = grossPay - taxableIncome
    //     console.log(`Middle 3 Net salary is: ${grossPay}`)
    //     alert(`Middle 3 Net slary is: ${grossPay}`)
    // }