import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/testvite/',
})

// 1. base: дегенди кошуп ал жерге папканын атын беребис /project-name/
// 2. "deploy": "gh-pages -d dist" ушуну package.json догу script ке кошобус
// 3. touch deploy.sh ушуну терминалка жазабыс
// 4. ушунун баарын deploy.sh ичине жазабыс жазабыс

/*

#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:roymansoor/deploy-vite.git main:gh-pages

cd -

*/

// 5. npm run build
// 6. npm install gh-pages --save-dev
