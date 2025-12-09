import { NextResponse } from 'next/server';

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzvkPjP3DgE_C7k14gA-SnHqXU_Qd3BnRQzT2MTTpYOSmEJD7WWhAV6dQ5wZROfn90b9Q/exec';

export async function POST(request) {
    try {
        const body = await request.json();

        // Forward the request to Google Apps Script from the server (no CORS)
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        const result = await response.json();
        return NextResponse.json(result);

    } catch (error) {
        console.error('Form submission error:', error);
        return NextResponse.json({
            success: false,
            error: 'Failed to save submission'
        }, { status: 500 });
    }
}
