@echo off
title Ayush Portfolio — GitHub Sync Utility
color 0B
echo =======================================================
echo         AYUSH SANODIYA PORTFOLIO GITHUB UTILITY        
echo =======================================================
echo.
echo [1/4] Checking current repository status...
echo -------------------------------------------------------
git status
echo -------------------------------------------------------
echo.
echo Press [ENTER] to stage, commit, and push these changes to GitHub.
echo (Or close this window to cancel).
pause > nul
echo.
echo [2/4] Staging modified files...
git add .
echo Done.
echo.
echo [3/4] Creating commit...
git commit -m "style: redesign footer to be ultra-clean, minimal, and centered"
echo Done.
echo.
echo [4/4] Pushing changes to remote GitHub repository...
echo -------------------------------------------------------
git push
echo -------------------------------------------------------
echo.
echo =======================================================
echo          SUCCESS! All changes are now on GitHub.       
echo =======================================================
echo.
echo Press any key to close this window.
pause > nul
