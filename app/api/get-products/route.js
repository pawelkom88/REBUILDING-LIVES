import Stripe from "stripe";
import { NextResponse } from "next/server";

export async function GET(request) {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)
    const prices = await stripe.prices.list({
        active:true,
        limit: 8,
    });

    return NextResponse.json(prices.data.reverse())
}