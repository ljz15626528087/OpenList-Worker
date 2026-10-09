// EdgeOne Makers Node 云函数入口（此文件入库）
//
// 真正的 bundle（含 Hono 应用与内联 HTML）由构建命令生成到
// dist-server/edgeone-entry.js（见 scripts/build-edge.mjs）。
// 此文件作为薄包装，仅负责 re-export，确保 EdgeOne 在构建前能
// 发现并注册 Node 云函数，避免所有 /api/* 请求被 SPA 兜底吃掉。
//
// 构建顺序：
//   1. pnpm run build（= scripts/fetch-frontend.mjs + scripts/build-edge.mjs）
//      → 生成 dist/index.html 与 dist-server/edgeone-entry.js
//   2. EdgeOne 平台扫描 cloud-functions/ 目录，注册本入口为 Node 云函数
//   3. 请求到达时，本入口 import 已生成的 dist-server/edgeone-entry.js 并处理

export { onRequest, default } from "../dist-server/edgeone-entry.js"
