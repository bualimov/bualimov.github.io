#!/bin/bash

# Automated deployment script for GitHub Pages
# This script builds your React app and deploys it to the main branch

set -e  # Exit on any error

echo "🚀 Starting deployment process..."

# Store the current branch name
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
echo "📍 Current branch: $CURRENT_BRANCH"

# Check if there are uncommitted changes
if [[ -n $(git status -s) ]]; then
    echo "❌ Error: You have uncommitted changes. Please commit or stash them first."
    exit 1
fi

# Build the React app
echo "🔨 Building React app..."
npm run build

# Check if build was successful
if [ ! -d "build" ]; then
    echo "❌ Error: Build directory not found. Build may have failed."
    exit 1
fi

echo "✅ Build completed successfully"

# Switch to main branch
echo "🔄 Switching to main branch..."
git checkout main

# Remove old files (except .git, node_modules, and the script itself)
echo "🧹 Cleaning old deployment files..."
find . -maxdepth 1 ! -name '.git' ! -name 'node_modules' ! -name '.' ! -name '..' -exec rm -rf {} + 2>/dev/null || true

# Copy build files to main branch root
echo "📦 Copying new build files..."
cp -r build/* .

# Add and commit changes
echo "💾 Committing changes..."
git add .
git commit -m "Deploy: Update from $CURRENT_BRANCH on $(date '+%Y-%m-%d %H:%M:%S')"

# Push to GitHub
echo "⬆️  Pushing to GitHub..."
git push origin main

# Switch back to the original branch
echo "🔙 Switching back to $CURRENT_BRANCH..."
git checkout $CURRENT_BRANCH

echo "✨ Deployment complete! Your site will be live in a few minutes."
echo "🌐 Check status at: https://github.com/bualimov/bualimov.github.io/deployments"
