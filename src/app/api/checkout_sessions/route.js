// import { NextResponse } from 'next/server'
// import { headers } from 'next/headers'

// import { stripe } from '../../../lib/stripe'

// export async function POST() {
//   try {
//     const headersList = await headers()
//     const origin = headersList.get('origin')

//     // Create Checkout Sessions from body params.
//     const session = await stripe.checkout.sessions.create({
//       line_items: [
//         {
//           // Provide the exact Price ID (for example, price_1234) of the product you want to sell
//           price: '{{PRICE_ID}}',
//           quantity: 1,
//         },
//       ],
//       mode: 'payment',
//       success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
//       cancel_url: `${origin}/?canceled=true`,
//     });
//     return NextResponse.redirect(session.url, 303)
//   } catch (err) {
//     return NextResponse.json(
//       { error: err.message },
//       { status: err.statusCode || 500 }
//     )
//   }
// }


import { NextResponse } from "next/server"
const stripe = require('stripe')(process.env.NEXT_STRIPE_SECRET_KEY);

export const POST = async (request) => {

  const { products } = await request.json();
  let activeProducts = await stripe.products.list({active:true});
  // console.log(activeProducts)

  try {
       //  1. Find products from stripe that matches products from cart.
       for(const product of products){
         const matchedProducts = activeProducts?.data?.find((stripeProduct)=>
               stripeProduct.name.toLowerCase() === product.name.toLowerCase()
         )
   
        //  2. If product didn't exist in Stripe, then add this product to stripe.
        if(matchedProducts == undefined){
           const prod = await stripe.products.create({
             name: product.name,
             default_price_data:{
               currency:'usd',
               unit_amount:product.price*100
             }
           })
         }
   
       }
  } catch (error) {
      console.log("Error in creating a new product", error);
      throw error;
  }
 
    //  3. Once the new product has been added to stripe, do FETCH Products again with updated products from stripe
    activeProducts = await stripe.products.list({active:true});
    let stripeProducts =  []

    for(const product of products){
      const stripeProduct = activeProducts?.data?.find((stripeProduct)=>
        stripeProduct.name.toLowerCase() === product.name.toLowerCase()
      );

      if(stripeProduct){
        stripeProducts.push(
          {
            // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
            price: stripeProduct?.default_price,
            quantity: product.quantity,
          },
        )
      }
    }


      // 4. Create Checkout Sessions from body params.
     const session = await stripe.checkout.sessions.create({
        line_items:stripeProducts,
        mode: 'payment',
        success_url: `http://localhost:3000/success`,
        cancel_url: `http://localhost:3000/`,
      });
      
    return NextResponse.json({
        url: session.url
    })
}


// stripe fetch products
// https://docs.stripe.com/checkout/quickstart
// https://dashboard.stripe.com/test/payments
