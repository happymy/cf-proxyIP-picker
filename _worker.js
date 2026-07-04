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
        'Content-Security-Policy': "default-src 'self' 'unsafe-inline' https://unpkg.com https://*.is.autonavi.com https://*.090227.xyz https://zip.cm.edu.kg; img-src 'self' data: https://*.is.autonavi.com https://unpkg.com; connect-src 'self' https://zip.cm.edu.kg https://*.090227.xyz;"
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
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" crossorigin>
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
.main { display: grid; grid-template-columns: 1fr 380px; gap: 16px; flex: 1; }
.map-container { position: relative; border-radius: var(--radius); overflow: hidden; border: 1px solid var(--border); background: var(--card); }
.map-container #map { height: 100%; min-height: 400px; }
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
  .main { grid-template-columns: 1fr; }
  .map-container #map { min-height: 250px; }
  .header h1 { font-size: 16px; }
}
@media (max-width: 480px) {
  .container { padding: 8px; }
  .result-area { flex-direction: column; }
}
</style>
</head>
<body>
<div class="container">
  <div class="header">
    <h1>&#x1F5FA;&#xFE0F; 获取更多 PROXYIP</h1>
    <div class="header-controls">
      <span id="totalCount" style="font-size:13px;color:var(--text-secondary)"></span>
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
        <div class="card-title">&#x270F;&#xFE0F; 手动输入 IP</div>
        <textarea id="manualInput" placeholder="每行一个 IP，或用逗号分隔&#10;例如:&#10;1.1.1.1:443&#10;8.8.8.8&#10;4.4.4.4:2096"></textarea>
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
        <div style="margin-top:8px;display:flex;gap:8px">
          <button class="btn btn-secondary btn-sm" id="clearAllBtn">清空</button>
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
    const json = await res.json();
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
    console.error('\u52A0\u8F7D\u5931\u8D25:', e);
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
    if (countryMap.hasOwnProperty(key) && !continents.some(function(c) { return c.code === key; })) {
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
    fetch('https://api.090227.xyz/check?proxyip=' + p.ip, { signal: controller.signal })
      .then(function(r) { return r.json(); })
      .then(function(data) {
        clearTimeout(timeoutId);
        if (controller.signal.aborted) return;
        verificationStatus[p.ip] = {
          status: data.success ? 'success' : 'failed',
          responseTime: data.responseTime || null
        };
        renderIPList(currentProxies);
        if (data.success && p.lat && p.lng) updateMap(p);
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
  result.value = arr.join('\\n');
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
  document.getElementById('manualInput').value = '';
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
  document.getElementById('manualInput').addEventListener('input', function(e) {
    var text = e.target.value;
    if (!text) return;
    var hasDelimiter = text.indexOf('\\n') !== -1 || text.indexOf(',') !== -1 || text.indexOf('\uFF0C') !== -1;
    if (!hasDelimiter) return;
    var ips = text.split(/[\\n,，]+/).map(function(s) { return s.trim(); }).filter(Boolean);
    if (ips.length === 0) return;
    ips.forEach(function(ip) { selectedIPs.add(ip); });
    e.target.value = '';
    updateUI();
    showToast('\u5DF2\u6DFB\u52A0 ' + ips.length + ' 个 IP');
  });
  document.getElementById('copyBtn').addEventListener('click', copyResult);
  document.getElementById('clearAllBtn').addEventListener('click', clearAll);
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
  map = L.map('map', { zoomControl: false, attributionControl: false }).setView([20, 100], 3);
  L.tileLayer('https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}', {
    subdomains: '1234', minZoom: 1, maxZoom: 18
  }).addTo(map);
  map.on('popupopen', function(e) {
    var src = e.popup._source;
    if (!src) return;
    if (!src._scrollReady) { src._scrollReady = true; return; }
    src._scrollReady = false;
    var ip;
    for (var k in markers) {
      if (markers[k] === src) { ip = k; break; }
    }
    if (!ip) return;
    var el = document.querySelector('.ip-item[data-ip="' + htmlEscape(ip) + '"]');
    if (el) {
      el.scrollIntoView({ block: 'center', behavior: 'smooth' });
      el.classList.add('scroll-highlight');
      setTimeout(function() { el.classList.remove('scroll-highlight'); }, 5000);
    }
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
    'ASN: ' + proxy.asn + ' | ' + htmlEscape(proxy.asOrganization || '') +
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
