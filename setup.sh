file=".gitignore"

function create_gitignore () {
    if [ -e "$file" ]; then
        echo "File exists"
    else 
        echo "File does not exists. I will now create the .gitignore file for you..."
        touch .gitignore && echo "node_modules/" >> .gitignore && git rm -r --cached node_modules; git status
    fi
}

create_gitignore