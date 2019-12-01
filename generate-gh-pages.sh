git remote add origin https://${GITHUB_TOKEN}@github.com:Yes-Theory/yes-theory.github.io.git git 
git pull
git commit -m 'rebuild pages' --allow-empty
git push origin master