git reset HEAD~1
rm ./backport.sh
git cherry-pick cd9ebca53ab497e9590285d602b0835bde7f0bc6
echo 'Resolve conflicts and force push this branch.\n\nTo backport translations run: bin/i18n/merge-translations <release-branch>'
