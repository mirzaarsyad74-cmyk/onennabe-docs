import urllib.request
import re

url = "https://raw.githubusercontent.com/OpenSteam001/steam-monitor/main/README.md"
target_file = "docs/steam.md"  # Adjust to your markdown file location

try:
    # Grab raw readme
    with urllib.request.urlopen(url) as response:
        content = response.read().decode('utf-8')
    
    # Extract the table portion via regex
    match = re.search(r'(\| Channel \|.*?\n\n)', content, re.DOTALL)
    if match:
        table_content = match.group(1).strip()
        
        # Write to your local documentation site file
        with open(target_file, "w") as f:
            f.write("# Latest Steam Client Versions\n\n")
            f.write("This table updates automatically during build runs:\n\n")
            f.write(table_content + "\n")
        print("Successfully updated Steam version table!")
except Exception as e:
    print(f"Error updating table: {e}")
