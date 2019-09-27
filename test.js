const fetchProfile = require('instagram-web-api-client').fetchProfile;

async function TestIt() {
  console.log(await fetchProfile('shamsmodil'));
}

TestIt();
