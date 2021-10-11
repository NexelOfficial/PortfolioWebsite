@echo off
git init
git add *
SET /P commitTitle= Please enter a title: 
git commit -m "%commitTitle%"
git remote add origin https://github.com/NexelOfficial/PortfolioWebsite.git
git push -f origin master
pause