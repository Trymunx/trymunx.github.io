#!/usr/bin/env sh

VERSION="$(cat version)"
echo -n "Version ($VERSION): "
read ver
echo $ver > version

git commit version -m "Update build version: $ver"

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
echo 'trymunx.com' > CNAME

git init
git add -A
git commit -m "Deploy $ver"

# if you are deploying to https://<USERNAME>.github.io
git push -f git@github.com:trymunx/trymunx.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:trymunx/<REPO>.git master:gh-pages

cd -
git push
