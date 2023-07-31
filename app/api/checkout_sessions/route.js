import { NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(request) {
  let { donationId } = await request.json();

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price: donationId,
        quantity: 1,
      },
    ],

    mode: "payment",

    // change !!! check proccess and yt
    // request.header.origin - add env to netlify
    success_url: `http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `http://localhost:3000/cancel`,
  });

  return NextResponse.json(session);
}
