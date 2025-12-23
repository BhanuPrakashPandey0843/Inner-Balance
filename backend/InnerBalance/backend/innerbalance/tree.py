import os

with open("folder.txt", "w") as f:
    for root, dirs, files in os.walk("."):
        level = root.count(os.sep)
        indent = " " * 4 * level
        f.write(f"{indent}{os.path.basename(root)}/\n")

        for file in files:
            sub_indent = " " * 4 * (level + 1)
            f.write(f"{sub_indent}{file}\n")
