// api/callback.js — Vercel serverless function
module.exports = (req, res) => {
  const params = req.query || {};
  const code = params.code || "";
  const state = params.state || "";
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.end(`
    <html>
      <head>
        <title>TikTok OAuth Callback</title>
        <meta name="robots" content="noindex,nofollow">
        <meta name="viewport" content="width=device-width,initial-scale=1">
        <style>
          body { font-family: system-ui, -apple-system, Roboto, Arial, sans-serif; padding:40px; }
          code { background:#f3f4f6; padding:4px 8px; border-radius:6px; display:inline-block; }
        </style>
      </head>
      <body>
        <h1>TikTok OAuth Callback</h1>
        <p><strong>Status:</strong> Received redirect.</p>
        <p><strong>code:</strong> ${code ? `<code>${code}</code>` : "<em>none</em>"}</p>
        <p><strong>state:</strong> ${state ? `<code>${state}</code>` : "<em>none</em>"}</p>
        <hr/>
        <p>If you see a code above, the redirect worked. You can close this window.</p>
      </body>
    </html>
  `);
};
