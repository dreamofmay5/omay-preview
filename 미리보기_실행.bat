@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo 오월의꿈 홈페이지 시안을 실행합니다. 이 창을 닫으면 종료됩니다.
start "" http://localhost:8080/
node server.mjs
pause
