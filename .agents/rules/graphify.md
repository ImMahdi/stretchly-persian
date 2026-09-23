---
trigger: always_on
description: Consult the graphify knowledge graph at graphify-out/ for codebase and architecture questions.
---

## graphify - Architectural Knowledge Graph Rules

This project maintains a persistent knowledge graph at `graphify-out/`.

### Mandatory Rules for AI Assistant:
1. **Always Understand via the Knowledge Graph**:
   - For any codebase, architecture, feature, flow, or debugging question, you MUST first query the graphify knowledge graph using `graphify query "<question>"`.
   - Use `graphify path "<SymbolA>" "<SymbolB>"` to trace interactions and dependencies between modules.
   - Use `graphify explain "<Symbol>"` to understand a specific node/class/method.
   - Consult `graphify-out/GRAPH_REPORT.md` for architectural God Nodes and community boundaries.
2. **Always Update the Graph on Every Code Change**:
   - Immediately after creating, modifying, or removing any code, configuration, or test file in this project, you MUST run `graphify update .` (or `python -m graphify.cli update .`).
   - This keeps `graphify-out/graph.json`, `graph.html`, and `GRAPH_REPORT.md` in sync with the codebase (AST extraction is fast and incurs no token cost).
3. **Preserve Graph Integrity**:
   - Never remove or clobber `graphify-out/` outputs without rebuilding them.

