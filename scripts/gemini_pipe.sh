#!/bin/bash

IN_FILE="cmd.in"
OUT_FILE="cmd.out"

if ! command -v bwrap &> /dev/null; then
    echo "Error: bubblewrap (bwrap) is required for sandboxing."
    echo "Please install it with: sudo apt install bubblewrap"
    exit 1
fi

# Create the files if they don't exist
touch "$IN_FILE" "$OUT_FILE"

echo "🤖 Sandboxed Terminal Bridge is active."
echo "Listening for commands in : $IN_FILE"
echo "Output will be written to : $OUT_FILE"
echo "Press Ctrl+C to stop."
echo "------------------------------------------------"

# Monitor the input file for modifications
while true; do
    # -qq: quiet mode
    # -e modify: trigger only when the file is modified
    inotifywait -qq -e modify "$IN_FILE"
    
    # Read the command from the file
    CMD=$(cat "$IN_FILE")
    
    # Only execute if the command is not empty
    if [ -n "$CMD" ]; then
        # Log the command to the terminal running the script
        echo "[$(date '+%Y-%m-%d %H:%M:%S')] Executing: $CMD"
        
        # Add a header to the output file to show what was run
        echo "========================================" > "$OUT_FILE"
        echo "Executing: $CMD" >> "$OUT_FILE"
        echo "========================================" >> "$OUT_FILE"
        
        # Execute the command and append stdout and stderr to the output file
        # We use Bubblewrap (bwrap) to restrict write access to the current workspace.
        # / is mounted read-only, while $PWD is mounted read-write.
        printf "%s\n" "$CMD" | bwrap \
            --ro-bind / / \
            --dev /dev \
            --proc /proc \
            --bind "$(pwd)" "$(pwd)" \
            --tmpfs /tmp \
            --unshare-pid \
            bash >> "$OUT_FILE" 2>&1
        
        # Append a completion marker
        echo -e "\n[Command finished]" >> "$OUT_FILE"
        
        # Clear the input file. 
        # Note: This will trigger a 'modify' event, but the loop 
        # will safely ignore it because $CMD will be empty.
        > "$IN_FILE"
    fi
done
