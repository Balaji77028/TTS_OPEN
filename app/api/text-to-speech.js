// pages/api/text-to-speech.js

import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const body = await request.json();
        const { text } = body;

        if (!text) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const options = {
            method: 'POST',
            url: 'https://open-ai21.p.rapidapi.com/texttospeech',
            headers: {
                'x-rapidapi-key': process.env.RAPIDAPI_KEY,
                'x-rapidapi-host': 'open-ai21.p.rapidapi.com',
                'Content-Type': 'application/json'
            },
            data: { text }
        };

        const response = await axios.request(options);
        return NextResponse.json({ audioUrl: response.data.audioUrl });
    } catch (error) {
        console.error('Error fetching speech data:', error.message);
        return NextResponse.json(
            { error: 'Failed to fetch speech data' },
            { status: 500 }
        );
    }
}
