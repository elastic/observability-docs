const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');

async function run() {
  try {
    const targetRepo = core.getInput('elastic/kibana');
    const [owner, repo] = targetRepo.split('/');
    const octokit = github.getOctokit(process.env.GITHUB_TOKEN);

    const { data: pulls } = await octokit.pulls.list({
      owner,
      repo,
      state: 'closed',
    });

    let releaseNotes = '## Changes from ' + targetRepo + '\n\n';
    for (const pr of pulls) {
      if (pr.merged_at) {
        releaseNotes += `- ${pr.title} (#${pr.number}) by @${pr.user.login}\n`;
      }
    }

    fs.writeFileSync('release-notes.asciidoc', releaseNotes);
    core.setOutput('release-notes', releaseNotes);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
