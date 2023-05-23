#!/bin/bash
# 루트 디렉터리 기준 프로젝트 경로
cd /home/ubuntu/git/siklog 
# // 소스 반영할 브랜치 
git pull origin main

yarn install &&

yarn build &&
# // 재시작할 pm2 이름
pm2 restart yarn