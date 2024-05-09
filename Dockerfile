# 使用node.js v6作为基础镜像
FROM node:20

# 设置工作目录
WORKDIR /usr/src/app

# 将 package.json 和 package-lock.json 复制到工作目录
COPY package*.json ./

# 安装项目依赖
RUN npm install

# 将整个项目目录复制到工作目录
COPY . .

# 构建应用
RUN npm run build

# 暴露管理系统平台默认端口
EXPOSE 8081

# 运行应用
CMD ["npm", "run", "dev"]
