#!/usr/bin/env bash
# Манульный деплой на GitHub Pages.
# Используется пока у gh-токена нет workflow scope; после `gh auth refresh -s workflow`
# можно переключиться на CI (см. .github/workflows/deploy.yml в локальной истории).
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
WORKTREE="/tmp/gh-pages-deploy"

echo "==> Building static export…"
cd "$ROOT"
NODE_ENV=production npm run build

echo "==> Preparing gh-pages worktree at $WORKTREE…"
if [ ! -d "$WORKTREE/.git" ]; then
  rm -rf "$WORKTREE"
  git worktree add "$WORKTREE" gh-pages
fi

echo "==> Syncing out/ → worktree…"
cd "$WORKTREE"
# wipe everything except .git, then copy fresh out
find . -mindepth 1 -maxdepth 1 ! -name ".git" -exec rm -rf {} +
cp -a "$ROOT/out/." "$WORKTREE/"
touch "$WORKTREE/.nojekyll"

echo "==> Commit & push gh-pages…"
git add -A
if git diff --cached --quiet; then
  echo "Nothing to deploy — no changes in out/"
  exit 0
fi
TS="$(date -u +%Y-%m-%dT%H:%M:%SZ)"
git -c "user.email=bulkhinartem@gmail.com" -c "user.name=Artem Bulkhin" \
  commit -q -m "deploy: $TS"
git push -q origin gh-pages
echo "==> Done. Live at https://bulkhinaa.github.io/marafet-landing-prostranstva/"
