/* JARVIS relay — deploy free on Cloudflare Workers.
   NVIDIA's API refuses direct browser connections (CORS); this tiny relay
   forwards your app's requests to NVIDIA and adds the missing headers.
   Your API key passes only through YOUR worker — nobody else's server. */

export default {
  async fetch(request) {
    const CORS = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Authorization, Content-Type, Accept'
    };
    if (request.method === 'OPTIONS') return new Response(null, { headers: CORS });
    if (request.method !== 'POST')   return new Response('POST only', { status: 405, headers: CORS });

    const upstream = await fetch('https://integrate.api.nvidia.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': request.headers.get('Authorization') || ''
      },
      body: request.body
    });
    const body = await upstream.text();
    return new Response(body, {
      status: upstream.status,
      headers: { ...CORS, 'Content-Type': 'application/json' }
    });
  }
};
