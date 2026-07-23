export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname !== '/') {
      return new Response('Not Found', { status: 404 });
    }
    return new Response(HTML, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-store',
        'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' https://unpkg.com https://static.cloudflareinsights.com; style-src 'self' 'unsafe-inline' https://unpkg.com; img-src 'self' data: https://*.is.autonavi.com https://unpkg.com; connect-src 'self' https://zip.cm.edu.kg https://*.090227.xyz; font-src 'self' data:;",
        'X-Frame-Options': 'DENY',
        'X-Content-Type-Options': 'nosniff',
        'Referrer-Policy': 'strict-origin-when-cross-origin'
      }
    });
  }
};

const HTML = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>获取更多 PROXYIP</title>
<link rel="icon" type="image/x-icon" href="data:image/x-icon;base64,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M/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzPZMjIyWzMzM7UzMzPRMzMzNwAAAAAAAAAAAAAAAAAAAAAAAAAAMjIyTDIyMrgzMzPIMzMz+zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz8jMzM4wzMzOBMjIywTExMRUAAAAAAAAAAAAAAAAzMzMjMjIyvDMzM8IzMzP8MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/UyMjKnMzMz4zMzM20AAAAAAAAAAICAgAIyMjJ1MzMznDMzM/4zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/kzMzPSMjIylTMzM3gzMzN+MzMzuTMzM/ozMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz+jMzMzdAQEAEAAAAAC0tLREyMjKOMzMzqjMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM6Y1NTUYAAAAAAAAAAAAAAAAOTk5CTIyMrYzMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM840NDRAAAAAADExMR8yMjKVMzMz3DMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zAwMDAAAAAAAAAAAAAAAAAAAAAAAAAAADIyMmszMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/00NDSAAAAAAjExMS8zMzPNMzMz9TMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz4wAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAADExMV0zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8yMjK4NjY2EzIyMlYyMjLFMjIy/TMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MjIysgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADExMV0zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzPqNDQ0JzExMWg0NDSTMzMz/jMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MjIyigAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQ0NF0zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP+NDQ0TzMzM5cyMjK7MzMz/DMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MjIybAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADExMV0zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMz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AAAAAAAAAAAAADAwMBAzMzODMzMz9DMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP5MzMzNzMzM84zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP3MzMzligoKBMAAAAAAAAAAAAAAAIxMTFJMzMz5DMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/kzMzOqMzMzUDAwMDoyMjIpNTU1MDIyMtUzMzPqMjIypzMzMzIAAAACAAAAAAAAAAAzMzMFMDAwRTIyMsAzMzP2MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP2NDQ0cDMzM+IzMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/U0NDTGMzMzrzMzM8QzMzP3MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/szMzPOMzMzpTIyMrMzMzPhMzMz/jMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz7zQ0NKgzMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz7jMzM9YzMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMzxzIyMrszMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzPhMzMzhzMzM3czMzN0MTExczMzM3MyMjKEMjIy1TMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMzhjMzM34zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzOSKioqBgAAAAAAAAAAAAAAAAAAAAAAAAAANDQ0OzMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8yMjLkNTU1OjIyMjgzMzP4MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzOCAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAALy8vKzMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzOzOTk5EjY2NhMyMjK2MzMz/jMzM/8zMzP/MzMz/zMzM/8zMzORKioqBgAAAAAAAAAAAAAAAAAAAAAAAAAAMTExTjMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8yMjLQLy8vGwAAAAE0NDRFMzMz6DMzM/8zMzP/MzMz/zMzM/8yMjLRMzMzMgAAAAAAAAAAAAAAAAAAAAA2NjYTNDQ0rDMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/syMjKFKioqBgAAAABAQEAEMjIyizMzM/8zMzP/MzMz/zMzM/8zMzP9MzMz4TMzM6EzMzN+MzMzeTIyMok0NDTGMzMz+TMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM+EuLi4sAAAAAAAAAAAAAAAALS0tETMzM+AzMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz+DIyMmwAAAAAAAAAAAAAAAAAAAAAAAAAADIyMkIyMjLAMzMz/DMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/TMzM+8zMzP9MzMz/zMzM/8zMzPtMzMzgUBAQAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE0NDQnNDQ0xjMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/8zMzP+MzMzwzMzM4IxMTF8MjIyizMzM6Y0NDTBMzMz1jIyMvgzMzP+MzMz/zIyMsAxMTE+QEBACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBwcCTIyMjgyMjJ/MzMz0zMzM+AzMzPYMzMz6zMzM+4zMzPsMzMz7TMzM/4zMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/AzMzPnMzMz6TMzM+czMzPnMzMz7DMzM/wzMzP/MzMz/zMzM/8zMzP/MzMz/zMzM/szMzPwMzMz+TMzM/8zMzP/MzMz/zMzM/wzMzPkMjIygFVVVQMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJycnDTIyMoQzMzOcMzMzwzMzM8kzMzOwMjIymDMzM/IzMzPvMzMz4jQ0NMYzMzPJMzMz9jMzM9MzMzO1MzMztDMzM6kyMjKtMzMzvjMzM+0zMzPXMzMztTIyMuUzMzPzMzMz4jMzM+QyMjK0MzMzoDMzM+czMzPeMzMzvjIyMoQwMDA1QEBABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACcnJw0yMjIkMzMzPDIyMi4yMjIkMzMzKDMzM1AzMzMtNjY2ITU1NRgzMzMZMTExOTExMV4xMTFOMzMzNzQ0NDEyMjI4MTExNDIyMik1NTUdOTk5EjIyMiQ0NDQsNjY2ITMzMyMxMTEaOzs7DTMzMyMwMDAgMTExFUBAQAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==">

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" crossorigin="">
<style>
:root {
  --primary: #10b981;
  --primary-dark: #059669;
  --primary-light: #d1fae5;
  --text: #1e293b;
  --text-secondary: #64748b;
  --bg: #f8fafc;
  --card: #fff;
  --border: #e2e8f0;
  --success: #22c55e;
  --danger: #ef4444;
  --warning: #f59e0b;
  --radius: 12px;
}
html.dark-mode {
  --primary: #34d399;
  --primary-dark: #10b981;
  --primary-light: #064e3b;
  --text: #e2e8f0;
  --text-secondary: #94a3b8;
  --bg: #0f172a;
  --card: #1e293b;
  --border: #334155;
}
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: var(--bg); color: var(--text); min-height: 100vh; }
.container { max-width: 1400px; margin: 0 auto; padding: 16px; display: flex; flex-direction: column; min-height: 100vh; }
.header { display: flex; align-items: center; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid var(--border); margin-bottom: 16px; flex-wrap: wrap; gap: 8px; }
.header h1 { font-size: 20px; font-weight: 700; display: flex; align-items: center; gap: 8px; }
.header-controls { display: flex; gap: 8px; align-items: center; }
.main { display: flex; flex-direction: column; gap: 16px; flex: 1; }
.map-container { position: relative; border-radius: var(--radius); overflow: hidden; border: 1px solid var(--border); background: var(--card); height: 350px; }
.map-container #map { height: 100%; }
.panel { display: flex; flex-direction: column; gap: 12px; }
.card { background: var(--card); border: 1px solid var(--border); border-radius: var(--radius); padding: 14px; }
.card-title { font-size: 13px; font-weight: 600; color: var(--text-secondary); margin-bottom: 8px; text-transform: uppercase; letter-spacing: .5px; }
select, textarea { width: 100%; padding: 8px 12px; border: 1px solid var(--border); border-radius: 8px; background: var(--bg); color: var(--text); font-size: 13px; outline: none; transition: border-color .2s; }
select:focus, textarea:focus { border-color: var(--primary); }
textarea { resize: vertical; min-height: 60px; font-family: 'Fira Code', 'Consolas', monospace; font-size: 12px; line-height: 1.5; }
.btn { padding: 8px 16px; border: none; border-radius: 8px; font-size: 13px; font-weight: 600; cursor: pointer; transition: all .2s; }
.btn-primary { background: var(--primary); color: #fff; }
.btn-primary:hover { background: var(--primary-dark); transform: translateY(-1px); }
.btn-primary:disabled { opacity: .5; cursor: not-allowed; transform: none; }
.btn-secondary { background: var(--border); color: var(--text); }
.btn-secondary:hover { opacity: .8; }
.btn-sm { padding: 4px 10px; font-size: 12px; }
.ip-list { max-height: 260px; overflow-y: auto; display: flex; flex-direction: column; gap: 4px; }
.ip-item { display: flex; align-items: center; gap: 8px; padding: 6px 8px; border-radius: 6px; cursor: pointer; transition: background .15s; font-size: 12px; font-family: 'Fira Code', 'Consolas', monospace; }
.ip-item:hover { background: var(--primary-light); }
.scroll-highlight { background: var(--primary-light) !important; }
.ip-item .status-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
.ip-item .status-dot.dot-pending { background: #94a3b8; }
.ip-item .status-dot.dot-fast { background: var(--success); }
.ip-item .status-dot.dot-slow { background: #eab308; }
.ip-item .status-dot.dot-error { background: var(--danger); }
.ip-item .ip-text { flex: 1; }
.ip-item .ip-info { color: var(--text-secondary); font-size: 11px; }
.ip-item .response-time { font-size: 11px; }
.ip-item .response-time.rt-fast { color: var(--success); }
.ip-item .response-time.rt-slow { color: #eab308; }
.ip-item .response-time.rt-error { color: var(--danger); }
.ip-item .response-time.rt-pending { color: #94a3b8; }
.ip-item input[type="checkbox"] { accent-color: var(--primary); }
.selected-tags { display: flex; flex-wrap: wrap; gap: 6px; min-height: 32px; padding: 4px; }
.tag { display: inline-flex; align-items: center; gap: 4px; background: #fee2e2; border: 1px solid #fca5a5; color: #b91c1c; padding: 3px 8px; border-radius: 9999px; font-size: 12px; font-weight: 500; }
html.dark-mode .tag { background: #450a0a; border-color: #991b1b; color: #fca5a5; }
.tag .remove { cursor: pointer; font-weight: 700; font-size: 14px; line-height: 1; }
.empty-state { color: var(--text-secondary); font-size: 13px; text-align: center; padding: 24px 0; }
.count-badge { font-size: 11px; color: var(--text-secondary); margin-left: 4px; }
.result-area { display: flex; gap: 8px; align-items: flex-start; }
.result-area textarea { flex: 1; min-height: 40px; }
.dark-toggle { background: none; border: 1px solid var(--border); border-radius: 8px; padding: 6px 10px; cursor: pointer; color: var(--text); font-size: 16px; }
.search-box { position: relative; }
.search-box input { width: 100%; padding: 8px 12px 8px 32px; border: 1px solid var(--border); border-radius: 8px; background: var(--bg); color: var(--text); font-size: 13px; outline: none; }
.search-box .search-icon { position: absolute; left: 10px; top: 50%; transform: translateY(-50%); color: var(--text-secondary); font-size: 14px; }
@media (max-width: 860px) {
  .map-container { height: 250px; }
  .header h1 { font-size: 16px; }
}
@media (max-width: 480px) {
  .container { padding: 8px; }
  .result-area { flex-direction: column; }
  .map-container { height: 200px; }
  .card { padding: 10px; }
  .header { flex-direction: column; align-items: flex-start; }
  .header-controls { width: 100%; flex-wrap: wrap; }
  .ip-item { flex-wrap: wrap; }
}
</style>
</head>
<body>
<div class="container">
  <div class="header">
    <h1>&#x1F5FA;&#xFE0F; 获取更多 PROXYIP</h1>
    <div class="header-controls">
      <span id="totalCount" style="font-size:13px;color:var(--text-secondary)"></span>
      <span style="font-size:11px;color:var(--text-secondary);opacity:.7">数据来源：<a href="https://zip.cm.edu.kg/all.json" target="_blank" style="color:inherit">zip.cm.edu.kg</a></span>
      <button class="dark-toggle" id="darkToggleBtn" title="切换暗色模式">&#x1F313;</button>
    </div>
  </div>

  <div class="main">
    <div class="map-container">
      <div id="map"></div>
    </div>

    <div class="panel">
      <div class="card">
        <div class="card-title">&#x1F3F3;&#xFE0F;&#x200D;&#x1F308; 筛选地区</div>
        <select id="continentSelect">
          <option value="">-- 选择大洲 --</option>
        </select>
        <select id="countrySelect" style="margin-top:8px" disabled>
          <option value="">-- 先选择大洲 --</option>
        </select>
      </div>

      <div class="card" id="proxyListCard" style="display:none">
        <div class="card-title">&#x1F310; IP 列表 <span id="ipListCount" class="count-badge"></span></div>
        <div class="search-box" style="margin-bottom:8px">
          <span class="search-icon">&#x1F50D;</span>
          <input id="searchInput" placeholder="搜索 IP...">
        </div>
        <div id="ipList" class="ip-list"></div>
        <div style="margin-top:8px">
          <button class="btn btn-primary btn-sm" id="selectAllBtn">全选当前</button>
          <button class="btn btn-secondary btn-sm" id="deselectAllBtn" style="margin-left:4px">取消全选</button>
        </div>
      </div>

      <div class="card">
        <div class="card-title">&#x1F4CB; 已选 IP (<span id="selectedCount">0</span>)</div>
        <div id="selectedTags" class="selected-tags">
          <div class="empty-state">还没有选择任何 IP</div>
        </div>
      </div>

      <div class="card">
        <div class="card-title">&#x1F4E4; 结果</div>
        <div class="result-area">
          <textarea id="resultText" readonly placeholder="选择或输入 IP 后，点击复制..."></textarea>
          <button class="btn btn-primary" id="copyBtn" disabled>复制</button>
        </div>
        <div style="margin-top:8px;display:flex;gap:8px;align-items:center">
          <button class="btn btn-secondary btn-sm" id="clearAllBtn">清空</button>
          <label style="font-size:12px;cursor:pointer;display:flex;align-items:center;gap:4px">
            <input type="checkbox" id="commaSep"> 逗号分隔
          </label>
        </div>
      </div>
    </div>
  </div>
</div>

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" crossorigin></script>
<script>
'use strict';

function htmlEscape(str) {
  return String(str).replace(/[&<>"']/g, function(ch) {
    switch (ch) {
      case '&': return '&amp;';
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '"': return '&quot;';
      case "'": return '&#39;';
      default: return ch;
    }
  });
}

let allData = [];
let countryMap = {};
let selectedIPs = new Set();
let verificationStatus = {};
const abortControllerRef = { current: null };

loadList();

async function loadList() {
  try {
    const res = await fetch('https://zip.cm.edu.kg/all.json');
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const json = await res.json();
    if (!Array.isArray(json.data)) throw new Error('Invalid data format');
    allData = json.data.filter(function(item) {
      return Array.isArray(item.port) ? item.port.includes(443) : item.port === 443;
    }).map(function(item) {
      return {
        ip: item.ip,
        country: item.meta && item.meta.country || 'Unknown',
        country_cn: item.meta && item.meta.country_cn || '未知',
        country_emoji: item.meta && item.meta.country_emoji || '\uD83C\uDFF3\uFE0F',
        city: item.meta && item.meta.city || '未知',
        clientIp: item.meta && item.meta.clientIp || item.ip,
        asn: item.meta && item.meta.asn || 0,
        asOrganization: item.meta && item.meta.asOrganization || '未知',
        continent: item.meta && item.meta.continent || 'Unknown',
        lat: item.meta && item.meta.latitude != null ? item.meta.latitude : (item.meta && item.meta.colo && item.meta.colo.lat != null ? item.meta.colo.lat : null),
        lng: item.meta && item.meta.longitude != null ? item.meta.longitude : (item.meta && item.meta.colo && item.meta.colo.lon != null ? item.meta.colo.lon : null),
        region: item.region || ''
      };
    });
    buildCountryMap();
    populateContinents();
    document.getElementById('totalCount').textContent = '共 ' + allData.length + ' 个 IP';
    initMap();
  } catch(e) {
    showToast('\u52A0\u8F7D\u5931\u8D25: ' + e.message);
  }
}

function buildCountryMap() {
  countryMap = {};
  allData.forEach(function(item) {
    var continent = item.continent;
    if (!countryMap[continent]) countryMap[continent] = {};
    if (!countryMap[continent][item.country]) {
      countryMap[continent][item.country] = { name: item.country_cn, emoji: item.country_emoji, proxies: [] };
    }
    countryMap[continent][item.country].proxies.push(item);
  });
}

function populateContinents() {
  var sel = document.getElementById('continentSelect');
  sel.innerHTML = '<option value="">-- 选择大洲 --</option>';
  var continents = [
    { code: 'AS', emoji: '\uD83C\uDF0F', name: '\u4E9A\u6D32' },
    { code: 'NA', emoji: '\uD83C\uDF0E', name: '\u5317\u7F8E' },
    { code: 'EU', emoji: '\uD83C\uDF0D', name: '\u6B27\u6D32' },
    { code: 'AF', emoji: '\uD83C\uDF0D', name: '\u975E\u6D32' },
    { code: 'SA', emoji: '\uD83C\uDF0E', name: '\u5357\u7F8E' },
    { code: 'OC', emoji: '\uD83C\uDF0F', name: '\u5927\u6D0B\u6D32' },
    { code: 'AN', emoji: '\u2744\uFE0F', name: '\u5357\u6781\u6D32' }
  ];
  continents.forEach(function(c) {
    if (countryMap[c.code]) {
      sel.innerHTML += '<option value="' + htmlEscape(c.code) + '">' + c.emoji + ' ' + htmlEscape(c.name) + '</option>';
    }
  });
  for (var key in countryMap) {
    if (Object.hasOwn(countryMap, key) && !continents.some(function(c) { return c.code === key; })) {
      sel.innerHTML += '<option value="' + htmlEscape(key) + '">\uD83C\uDF0D ' + htmlEscape(key) + '</option>';
    }
  }
}

var currentProxies = [];

function onContinentChange() {
  var continent = document.getElementById('continentSelect').value;
  var countrySel = document.getElementById('countrySelect');
  countrySel.innerHTML = '<option value="">-- 选择国家 --</option>';
  countrySel.disabled = !continent;
  if (!continent) return;
  var countries = countryMap[continent] || {};
  var entries = Object.keys(countries).sort(function(a, b) {
    return countries[b].proxies.length - countries[a].proxies.length;
  });
  entries.forEach(function(code) {
    var data = countries[code];
    countrySel.innerHTML += '<option value="' + htmlEscape(code) + '">' + data.emoji + ' ' + htmlEscape(data.name) + ' (' + data.proxies.length + ')</option>';
  });
  document.getElementById('proxyListCard').style.display = 'none';
}

function onCountryChange() {
  var continent = document.getElementById('continentSelect').value;
  var country = document.getElementById('countrySelect').value;
  var card = document.getElementById('proxyListCard');
  if (!country) { card.style.display = 'none'; return; }
  document.getElementById('searchInput').value = '';
  var proxies = (countryMap[continent] && countryMap[continent][country] && countryMap[continent][country].proxies) || [];
  renderIPList(proxies);
  card.style.display = 'block';
  verifyProxies(proxies);
}

function renderIPList(proxies) {
  currentProxies = proxies;
  var list = document.getElementById('ipList');
  var search = document.getElementById('searchInput').value.toLowerCase().trim();
  var filtered = search ? proxies.filter(function(p) { return p.ip.toLowerCase().includes(search); }) : proxies;
  document.getElementById('ipListCount').textContent = filtered.length + '/' + proxies.length;
  if (filtered.length === 0) {
    list.innerHTML = '<div class="empty-state">没有匹配的 IP</div>';
    return;
  }
  filtered.sort(function(a, b) {
    var va = verificationStatus[a.ip] || {};
    var vb = verificationStatus[b.ip] || {};
    var sa = va.status === 'success' ? 0 : va.status === 'pending' ? 1 : 2;
    var sb = vb.status === 'success' ? 0 : vb.status === 'pending' ? 1 : 2;
    if (sa !== sb) return sa - sb;
    return (va.responseTime || 99999) - (vb.responseTime || 99999);
  });
  list.innerHTML = filtered.map(function(p) {
    var v = verificationStatus[p.ip] || { status: 'pending' };
    var checked = selectedIPs.has(p.ip) ? 'checked' : '';
    var dotClass = 'dot-pending';
    var rtClass = 'rt-pending';
    var statusHtml = '';
    if (v.status === 'success' && v.responseTime != null) {
      if (v.responseTime < 200) {
        dotClass = 'dot-fast'; rtClass = 'rt-fast';
      } else {
        dotClass = 'dot-slow'; rtClass = 'rt-slow';
      }
      statusHtml = '<span class="response-time ' + rtClass + '">' + htmlEscape(v.responseTime) + 'ms</span>';
    } else if (v.status === 'pending') {
      statusHtml = '<span class="response-time rt-pending">检测中...</span>';
    } else {
      dotClass = 'dot-error'; rtClass = 'rt-error';
      statusHtml = '<span class="response-time rt-error">' + (v.status === 'timeout' ? '超时' : '失败') + '</span>';
    }
    var city = p.city && p.city !== '未知' ? htmlEscape(p.city) : '';
    var org = p.asOrganization && p.asOrganization !== '未知' ? htmlEscape(p.asOrganization) : '';
    var asn = org ? 'AS' + p.asn + ' ' + org : p.asn ? 'AS' + p.asn : '';
    var info = [city, asn].filter(Boolean).join(' · ');
    return '<label class="ip-item" data-ip="' + htmlEscape(p.ip) + '">' +
      '<input type="checkbox" ' + checked + '>' +
      '<span class="status-dot ' + dotClass + '"></span>' +
      '<span class="ip-text">' + htmlEscape(p.ip) + '</span>' +
      (info ? '<span class="ip-info">' + info + '</span>' : '') +
      statusHtml +
    '</label>';
  }).join('');
}

function verifyProxies(proxies) {
  if (abortControllerRef.current) {
    abortControllerRef.current.abort();
  }
  var controller = new AbortController();
  abortControllerRef.current = controller;
  proxies.forEach(function(p) {
    if (verificationStatus[p.ip] && verificationStatus[p.ip].status === 'success') return;
    verificationStatus[p.ip] = { status: 'pending' };
    var timeoutId = setTimeout(function() {
      if (controller.signal.aborted) return;
      verificationStatus[p.ip] = { status: 'timeout' };
      renderIPList(currentProxies);
    }, 10000);
    fetch('https://api.090227.xyz/check?proxyip=' + encodeURIComponent(p.ip), { signal: controller.signal })
      .then(function(r) { return r.json(); })
      .then(function(data) {
        clearTimeout(timeoutId);
        if (controller.signal.aborted) return;
        verificationStatus[p.ip] = {
          status: data.success ? 'success' : 'failed',
          responseTime: data.responseTime || null
        };
        renderIPList(currentProxies);
        if (data.success && p.lat != null && p.lng != null) updateMap(p);
      })
      .catch(function() {
        clearTimeout(timeoutId);
        if (controller.signal.aborted) return;
        if (!verificationStatus[p.ip] || verificationStatus[p.ip].status === 'pending') {
          verificationStatus[p.ip] = { status: 'failed' };
          renderIPList(currentProxies);
        }
      });
  });
}

function toggleIP(ip, checked) {
  if (checked) selectedIPs.add(ip);
  else selectedIPs.delete(ip);
  // sync checkbox state in list
  var list = document.getElementById('ipList');
  var items = list.querySelectorAll('.ip-item');
  items.forEach(function(item) {
    if (item.getAttribute('data-ip') === ip) {
      var cb = item.querySelector('input[type="checkbox"]');
      if (cb) cb.checked = checked;
    }
  });
  updateUI();
}

function updateUI() {
  var tags = document.getElementById('selectedTags');
  var count = document.getElementById('selectedCount');
  var result = document.getElementById('resultText');
  var copyBtn = document.getElementById('copyBtn');
  count.textContent = selectedIPs.size;
  if (selectedIPs.size === 0) {
    tags.innerHTML = '<div class="empty-state">还没有选择任何 IP</div>';
    result.value = '';
    copyBtn.disabled = true;
    return;
  }
  var arr = Array.from(selectedIPs);
  tags.innerHTML = arr.map(function(ip) {
    return '<span class="tag" data-ip="' + htmlEscape(ip) + '">' +
      '<span>' + htmlEscape(ip) + '</span>' +
      '<span class="remove" data-ip="' + htmlEscape(ip) + '">\u00D7</span>' +
    '</span>';
  }).join('');
  result.value = arr.join(document.getElementById('commaSep').checked ? ', ' : '\\n');
  copyBtn.disabled = false;
}

function removeIP(ip) {
  selectedIPs.delete(ip);
  var list = document.getElementById('ipList');
  var items = list.querySelectorAll('.ip-item');
  items.forEach(function(item) {
    if (item.getAttribute('data-ip') === ip) {
      var cb = item.querySelector('input[type="checkbox"]');
      if (cb) cb.checked = false;
    }
  });
  updateUI();
}

function clearAll() {
  selectedIPs.clear();
  var list = document.getElementById('ipList');
  var cbs = list.querySelectorAll('input[type="checkbox"]');
  cbs.forEach(function(cb) { cb.checked = false; });
  updateUI();
}

async function copyResult() {
  var text = document.getElementById('resultText').value;
  if (!text) return;
  try {
    await navigator.clipboard.writeText(text);
    showToast('\u2705 \u5DF2\u590D\u5236\u5230\u526A\u8D34\u677F');
  } catch(e) {
    document.getElementById('resultText').select();
    document.execCommand('copy');
    showToast('\u2705 \u5DF2\u590D\u5236');
  }
}

// ===== Event delegation =====
function initEvents() {
  var continentSel = document.getElementById('continentSelect');
  var countrySel = document.getElementById('countrySelect');
  continentSel.addEventListener('change', onContinentChange);
  countrySel.addEventListener('change', onCountryChange);
  document.getElementById('searchInput').addEventListener('input', function() {
    renderIPList(currentProxies);
  });
  document.getElementById('selectAllBtn').addEventListener('click', function() {
    var list = document.getElementById('ipList');
    list.querySelectorAll('.ip-item').forEach(function(item) {
      var ip = item.getAttribute('data-ip');
      if (ip) { selectedIPs.add(ip); }
      var cb = item.querySelector('input[type="checkbox"]');
      if (cb) cb.checked = true;
    });
    updateUI();
  });
  document.getElementById('deselectAllBtn').addEventListener('click', function() {
    var list = document.getElementById('ipList');
    list.querySelectorAll('.ip-item').forEach(function(item) {
      var ip = item.getAttribute('data-ip');
      if (ip) { selectedIPs.delete(ip); }
      var cb = item.querySelector('input[type="checkbox"]');
      if (cb) cb.checked = false;
    });
    updateUI();
  });
  document.getElementById('ipList').addEventListener('change', function(e) {
    if (e.target.matches('input[type="checkbox"]')) {
      var item = e.target.closest('.ip-item');
      if (item) {
        var ip = item.getAttribute('data-ip');
        if (ip) toggleIP(ip, e.target.checked);
      }
    }
  });
  document.getElementById('selectedTags').addEventListener('click', function(e) {
    var removeBtn = e.target.closest('.remove');
    if (removeBtn) {
      var ip = removeBtn.getAttribute('data-ip');
      if (ip) removeIP(ip);
    }
  });
  document.getElementById('copyBtn').addEventListener('click', copyResult);
  document.getElementById('clearAllBtn').addEventListener('click', clearAll);
  document.getElementById('commaSep').addEventListener('change', updateUI);
  document.getElementById('darkToggleBtn').addEventListener('click', function() {
    document.documentElement.classList.toggle('dark-mode');
  });
}
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initEvents);
} else {
  initEvents();
}

// ===== Verification =====

// ===== Map =====
var map = null;
var markers = {};

function initMap() {
  map = L.map('map', { scrollWheelZoom: false, attributionControl: false }).setView([20, 100], 3);
  L.tileLayer('https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}', {
    subdomains: '1234', minZoom: 1, maxZoom: 18
  }).addTo(map);
  map.on('popupopen', function(e) {
    var src = e.sourceTarget;
    if (!src) return;
    var ip;
    for (var k in markers) {
      if (Object.hasOwn(markers, k) && markers[k] === src) { ip = k; break; }
    }
    if (!ip) return;
    setTimeout(function() {
      var el = document.querySelector('.ip-item[data-ip="' + htmlEscape(ip) + '"]');
      if (el) {
        el.scrollIntoView({ block: 'center', behavior: 'smooth' });
        el.classList.add('scroll-highlight');
        setTimeout(function() { el.classList.remove('scroll-highlight'); }, 5000);
      }
    }, 500);
  });
  setTimeout(function() { map.invalidateSize(); }, 300);
}

function markerColor(v) {
  if (v.status === 'success' && v.responseTime != null) {
    return v.responseTime < 200 ? '#22c55e' : '#eab308';
  }
  return '#ef4444';
}

function updateMap(proxy) {
  var key = proxy.ip;
  var lat = parseFloat(proxy.lat);
  var lng = parseFloat(proxy.lng);
  if (isNaN(lat) || isNaN(lng)) return;
  var v = verificationStatus[proxy.ip] || {};
  var color = markerColor(v);
  if (markers[key]) {
    markers[key].setLatLng([lat, lng]);
    markers[key].setStyle({ fillColor: color, color: color });
  } else {
    markers[key] = L.circleMarker([lat, lng], {
      radius: 6, fillColor: color, color: color, weight: 2, opacity: 1, fillOpacity: 0.8
    }).addTo(map);
  }
  var popup = '<div style="font-size:12px;line-height:1.6">' +
    '<strong>' + htmlEscape(proxy.city || proxy.country_cn || proxy.country) + '</strong><br>' +
    '\u843D\u5730IP: ' + htmlEscape(proxy.clientIp || proxy.ip) + '<br>' +
    'ASN: ' + htmlEscape(String(proxy.asn)) + ' | ' + htmlEscape(proxy.asOrganization || '') +
  '</div>';
  markers[key].bindPopup(popup);
  if (!map._movedToFirst) {
    map.setView([lat, lng], 4);
    map._movedToFirst = true;
  }
}

// ===== Toast =====
function showToast(msg) {
  var existing = document.querySelector('.toast');
  if (existing) existing.remove();
  var el = document.createElement('div');
  el.className = 'toast';
  el.textContent = msg;
  Object.assign(el.style, {
    position: 'fixed', bottom: '24px', left: '50%', transform: 'translateX(-50%)',
    background: 'var(--card)', color: 'var(--text)', padding: '10px 20px',
    borderRadius: '10px', border: '1px solid var(--border)',
    boxShadow: '0 4px 20px rgba(0,0,0,.15)', zIndex: '9999',
    fontSize: '14px', fontWeight: '500',
    transition: 'opacity .3s', opacity: '1'
  });
  document.body.appendChild(el);
  setTimeout(function() { el.style.opacity = '0'; setTimeout(function() { el.remove(); }, 300); }, 2000);
}

// ===== Dark mode =====
if (window.matchMedia('(prefers-color-scheme:dark)').matches) {
  document.documentElement.classList.add('dark-mode');
}
</script>
</body>
</html>`;
