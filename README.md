# jsmin6330-hello-vue.github.io

This template should help get you started developing with Vue 3 in Vite.


## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```


### How to Deploy
|STG|BRANCH|TRIGGER|URL|
|------|---|---|---|
|DEV|Branch of PR|manual firebase cmd|[jsmin6330hellovue-gitbolgdev.web.app](https://jsmin6330hellovue-gitbolgdev.web.app/)|
|PRD|main|Auto Github Action|[jsmin6330-hello-vue.github.io](https://jsmin6330-hello-vue.github.io/)|
|fly.io| | jsmin6330-hello-vue-github-io.fly.dev|https://jsmin6330-hello-vue-github-io.fly.dev/|


### How to Deploy fly.io
```
# docker 컨테이너 생성, 이미지 생성, commit, push
sudo docker run --name nginx-gitvlog -p 9055:80 -d nginx
sudo docker cp /home/jsmin630/code/jsmin6330-hello-vue.github.io/. nginx-gitvlog:/usr/share/nginx/html
sudo docker commit nginx-gitvlog soominjeong/nginx-gitvlog:0.1.0
sudo docker push soominjeong/nginx-gitvlog:0.1.0

# fly.io
flyctl deploy
```
