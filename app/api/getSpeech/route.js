// import axios from 'axios';
// import { NextResponse } from 'next/server';

// export async function POST(request) {

//     try {
//         const body = await request.json();
//         const { text } = body;

//         if (!text) {
//             return NextResponse.json(
//                 { error: 'Missing required fields' },
//                 { status: 400 }
//             )
//         }




//         const options = {
//             method: 'POST',
//             url: 'https://open-ai21.p.rapidapi.com/texttospeech',
//             headers: {
//                 'x-rapidapi-key': process.env.RAPIDAPI_KEY,
//                 'x-rapidapi-host': 'open-ai21.p.rapidapi.com',
//                 'Content-Type': 'application/json'
//             },
//             data: {
//                 text
//             }
//         };




//         const response = await axios.request(options);
//         return NextResponse.json(response.data);
//     } catch (error) {
//         console.error(error);
//         return NextResponse.json(
//             { error: "failed to fetch speech data" },
//             {
//                 status: 500
//             }
//         )
//     }
// }




// pages/api/getSpeech.js

import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const body = await request.json();
        const { text } = body;

        if (!text) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400, headers: { 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' } }
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
            data: {
                text
            }
        };

        const response = await axios.request(options);

        // Add Cache-Control and X-Content-Type-Options headers
        return NextResponse.json(response.data, {
            headers: {
                'Cache-Control': 'no-store',
                'X-Content-Type-Options': 'nosniff'
            }
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: 'Failed to fetch speech data' },
            { status: 500, headers: { 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' } }
        );
    }
}
