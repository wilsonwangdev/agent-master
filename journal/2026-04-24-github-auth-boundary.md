---
date: 2026-04-24
type: auth-boundary
status: resolved
---

# Agent 遇到 GitHub 认证边界

## 发生了什么

在尝试通过 `gh` CLI 创建远程仓库时，发现：
1. `gh auth status` 显示 token 已失效
2. 当前认证账户与目标账户不一致

## 根因

GitHub token 有过期机制，且用户可能在多个 GitHub 账户间切换。Agent 无法也不应该自行处理认证凭证。

## 解决方式

这是一个正确的 HITL 边界：
- Agent 诊断问题并给出精确的修复命令
- 人类执行认证操作（涉及凭证安全）
- Agent 在认证完成后继续工作流

## 进化记录

- 在 agent 工作流中，认证状态检查应作为前置步骤，在尝试远程操作之前执行
- `gh auth status` 是检测认证问题的标准方式
- 当遇到认证失败时，agent 应立即识别为 HITL 边界，而非尝试绕过
