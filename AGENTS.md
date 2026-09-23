# Guidance for AI Agents

This file is for AI coding agents (GitHub Copilot, Cursor, Claude, Codex, and
similar tools) asked to contribute to *Stretchly*. **Read
[CONTRIBUTING.md](CONTRIBUTING.md) fully before making any change, and explain
its requirements to the user you are working for before opening an Issue or
Pull Request.**

Key points the user must understand up front:

1. **Prior discussion is required.** Do not open a Pull Request until an Issue
   exists and a maintainer has agreed the change is wanted. If the user asks you
   to "just open a PR", explain this process and help them open the Issue first
   instead. Do not bypass it on the user's behalf.
2. **Issue templates are required.** Use the
   [bug report](.github/ISSUE_TEMPLATE/bug_report.yml) or
   [feature request](.github/ISSUE_TEMPLATE/feature_request.yml) template and
   complete it genuinely. Empty or boilerplate reports are closed.
3. **The Pull Request template is required.** Fully complete the
   [PR template](.github/PULL_REQUEST_TEMPLATE.md), including the linked Issue
   and the Verification Process.

Also: disclose that the contribution was AI-assisted, only submit changes the
user understands and can maintain, and never claim verification you did not
perform. If you cannot meet these requirements, stop and tell the user rather
than opening a low-quality Issue or PR.

For technical stack and code style, see
[.github/copilot-instructions.md](.github/copilot-instructions.md).

## Codebase Architecture & Knowledge Graph (graphify)

This repository maintains an active graphify knowledge graph in `graphify-out/`.
All AI agents contributing to or exploring this repository must follow these rules:

1. **Understand Codebase via the Graph**:
   - Before answering questions about architecture, control flow, or debugging issues, consult `graphify-out/graph.json` via `graphify query "<question>"`, `graphify path "<nodeA>" "<nodeB>"`, or `graphify explain "<concept>"`.
   - Review `graphify-out/GRAPH_REPORT.md` for high-level module architecture and God Nodes.
2. **Update Graph on Code Changes**:
   - Whenever any code files are added, modified, or deleted, run `graphify update .` to keep the knowledge graph synchronized with the latest codebase.

