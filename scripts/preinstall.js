const exec = require('child_process').exec;

function puts(error, stdout, stderr) {
  console.log(stdout);
}

exec("ln -s -f $(pwd)/config/hooks/pre-push.sh .git/hooks/pre-push && chmod +x .git/hooks/pre-push", puts);
exec("ln -s -f $(pwd)/config/hooks/pre-commit.sh .git/hooks/pre-commit && chmod +x .git/hooks/pre-commit", puts);
