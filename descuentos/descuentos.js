const d = document,
    $inputPrice = d.getElementById('inputPrice'),
    $inputCoupon = d.getElementById('inputCoupon'),
    $btnCalculate = d.getElementById('btnCalculate'),
    $pResult = d.getElementById('result');

let discount = 0;

const coupons = [
    {
        name: "basic",
        discount: 15
    },
    {
        name: "premium",
        discount: 25
    },
    {
        name: "premium+",
        discount: 30
    }
];

const calculateDiscount = () => {
    let price = $inputPrice.value,
    coupon = $inputCoupon.value;
    
    return new Promise((resolve, reject) => {
        let couponAplicated = coupons.find($coupon => $coupon.name === coupon);
        
        if (couponAplicated !== undefined) {
            discount = couponAplicated.discount;

            const discountFinal = price * ((100 - discount) / 100);

            resolve(discountFinal);

        } else {
            reject("Este cupón no es valido");
        } 

    });

}

$btnCalculate.addEventListener('click', async () => {
    try {
        
        let discountCalculated = await calculateDiscount();
    
        $pResult.innerHTML = `
            Este cupón aplica <b>%${discount}</b>, 
            usted solo deberá pagar <b>$${discountCalculated}</b>
        `;
    } catch (error) {        
        $pResult.innerHTML = error;
    }

});