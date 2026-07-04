# cf-proxyIP-picker

Cloudflare Worker 部署的 PROXYIP 可视化管理面板。

## 功能

- 全球 IP 浏览，按大洲/国家筛选，实时延迟检测
- Leaflet 地图标注 IP 地理位置，标记颜色随延迟变化
- IP 多选、搜索、标签管理；结果可切换换行/逗号分隔格式
- 暗色模式，单文件部署
- 桌面端和移动端统一上下布局，友好适配各尺寸屏幕

## 使用

```bash
npx wrangler deploy
```

## 数据来源

- IP 列表：[zip.cm.edu.kg](https://zip.cm.edu.kg/all.json)
- 延迟验证：[api.090227.xyz](https://api.090227.xyz)
- 地图：高德地图瓦片 + Leaflet

## 许可

MIT
