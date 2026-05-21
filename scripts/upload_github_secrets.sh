#!/bin/bash

# Create a local bin directory if it doesn't exist
mkdir -p .bin

# Download the gh CLI if not already present
if [ ! -f ".bin/gh" ]; then
    echo "Downloading GitHub CLI (gh) locally..."
    # Download Linux AMD64 version
    wget -qO- https://github.com/cli/cli/releases/download/v2.46.0/gh_2.46.0_linux_amd64.tar.gz | tar xz -C .bin --strip-components=2 gh_2.46.0_linux_amd64/bin/gh
    chmod +x .bin/gh
    echo "✅ GitHub CLI downloaded to .bin/gh"
fi

# Check if authenticated
if ! .bin/gh auth status &> /dev/null; then
    echo ""
    echo "⚠️  You are not authenticated with GitHub CLI."
    echo "Please run the following command in your terminal to login first:"
    echo "    ./.bin/gh auth login"
    echo ""
    echo "After logging in, run this script again."
    exit 1
fi

echo "Uploading .env variables to GitHub Secrets..."

# Read .env line by line
while IFS='=' read -r key value; do
  # Skip comments and empty lines
  if [[ -z "$key" || "$key" == \#* ]]; then
    continue
  fi
  
  # Remove 'export ' prefix if it exists
  key=${key#export }
  
  # Remove surrounding quotes from value if present
  value=$(echo "$value" | sed -e 's/^"//' -e 's/"$//' -e "s/^'//" -e "s/'$//")

  echo "Setting GitHub Secret: $key"
  .bin/gh secret set "$key" --body "$value"

done < .env

echo "✅ All secrets have been uploaded successfully!"
