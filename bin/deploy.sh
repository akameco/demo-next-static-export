#/bin/bash
set -e

git config user.email $GIT_EMAIL
git config user.name $GIT_NAME

npm run gh-pages -- -r https://$GH_TOKEN@github.com/akameco/demo-next-static-export.git
