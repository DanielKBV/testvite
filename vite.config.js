import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/testvite/',
})

// 1. repositories ачып алабыз
// 2. defineConfig ичиндеги plugins тин ылдыйына base: дегенди кошуп ал жерге папканын атын беребис /repositories-name/
// 3. "deploy": "gh-pages -d dist" ушуну package.json догу script ке кошобус
// 4. touch deploy.sh ушуну git bash терминалка жазабыс
// 5. 4 ту кылгандан кийин deploy.sh деген файл чыгат, ошонун ичине 6ны жазабыс

/* 
6.

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
# git push -f git@github.com:`user-name`/`repositories-name`.git main:gh-pages

cd -

*/

// 7. 6ны жазкандан кийин терминалга,  npm run build дейбиз
// 8. 7ден кийин npm install gh-pages --save-dev дейбиз
// 9. эми ылдыйдагыларды аткарабыз
// 10. git add .
// 11. git commit -m 'first commit'
// 12. git push origin `ветканын атын жазабыз`

// 13. устундогулорду кылгандан кийин,  npm run deploy     <- дейбиз, анан бутту
