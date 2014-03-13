window["distri/cson:v0.1.0"]({
  "source": {
    "LICENSE": {
      "path": "LICENSE",
      "mode": "100644",
      "content": "The MIT License (MIT)\n\nCopyright (c) 2014 distri\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of\nthis software and associated documentation files (the \"Software\"), to deal in\nthe Software without restriction, including without limitation the rights to\nuse, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of\nthe Software, and to permit persons to whom the Software is furnished to do so,\nsubject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS\nFOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR\nCOPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER\nIN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN\nCONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n",
      "type": "blob"
    },
    "pixie.cson": {
      "path": "pixie.cson",
      "mode": "100644",
      "content": "entryPoint: \"README\"\nversion: \"0.1.0\"\nremoteDependencies: [\n  \"https://cdnjs.cloudflare.com/ajax/libs/coffee-script/1.6.3/coffee-script.min.js\"\n]\n",
      "type": "blob"
    },
    "README.coffee.md": {
      "path": "README.coffee.md",
      "mode": "100644",
      "content": "CSON\n====\n\nCoffeeScript Object Notation implemented in the hackiest way.\n\nOne downside is that it currently depends on the CoffeeScript compiler when it \nshould be a simple parser of its own.\n\n    module.exports =\n      parse: (source) ->\n        Function(\"return #{CoffeeScript.compile(source, bare: true)}\")()\n\nThis really needs to be improved. To do it correctly we'd need to detect\nobject/array values and indent while moving them to separate lines. Single\nvalues would exist without newlines or indentation. CSON.stringify would be\ncalled recursively.\n\nThe current hack of using JSON works because JSON is valid CSON.\n\nTODO: Escape keys that need it.\n\n      stringify: (object) ->\n        representation = JSON.parse(JSON.stringify(obj))\n\n        Object.keys(representation).map (key) ->\n          value = representation[key]\n          \"#{key}: #{JSON.stringify(value)}\"\n        .join(\"\\n\")\n",
      "type": "blob"
    },
    "test/cson.coffee": {
      "path": "test/cson.coffee",
      "mode": "100644",
      "content": "CSON = require \"../README\"\n\ndescribe \"CSON\", ->\n  it \"should parse\", ->\n    result = CSON.parse \"\"\"\n      hello: \"duder\"\n    \"\"\"\n\n    assert result.hello\n    assert.equal result.hello, \"duder\"\n\n  it \"should allow comments\", ->\n    result = CSON.parse \"\"\"\n      # Some comment\n      hey: \"yolo\" # Fo 'sho!\n    \"\"\"\n\n    assert.equal result.hey, \"yolo\"\n",
      "type": "blob"
    }
  },
  "distribution": {
    "pixie": {
      "path": "pixie",
      "content": "module.exports = {\"entryPoint\":\"README\",\"version\":\"0.1.0\",\"remoteDependencies\":[\"https://cdnjs.cloudflare.com/ajax/libs/coffee-script/1.6.3/coffee-script.min.js\"]};",
      "type": "blob"
    },
    "README": {
      "path": "README",
      "content": "(function() {\n  module.exports = {\n    parse: function(source) {\n      return Function(\"return \" + (CoffeeScript.compile(source, {\n        bare: true\n      })))();\n    },\n    stringify: function(object) {\n      var representation;\n      representation = JSON.parse(JSON.stringify(obj));\n      return Object.keys(representation).map(function(key) {\n        var value;\n        value = representation[key];\n        return \"\" + key + \": \" + (JSON.stringify(value));\n      }).join(\"\\n\");\n    }\n  };\n\n}).call(this);\n\n//# sourceURL=README.coffee",
      "type": "blob"
    },
    "test/cson": {
      "path": "test/cson",
      "content": "(function() {\n  var CSON;\n\n  CSON = require(\"../README\");\n\n  describe(\"CSON\", function() {\n    it(\"should parse\", function() {\n      var result;\n      result = CSON.parse(\"hello: \\\"duder\\\"\");\n      assert(result.hello);\n      return assert.equal(result.hello, \"duder\");\n    });\n    return it(\"should allow comments\", function() {\n      var result;\n      result = CSON.parse(\"# Some comment\\nhey: \\\"yolo\\\" # Fo 'sho!\");\n      return assert.equal(result.hey, \"yolo\");\n    });\n  });\n\n}).call(this);\n\n//# sourceURL=test/cson.coffee",
      "type": "blob"
    }
  },
  "progenitor": {
    "url": "http://strd6.github.io/editor/"
  },
  "version": "0.1.0",
  "entryPoint": "README",
  "remoteDependencies": [
    "https://cdnjs.cloudflare.com/ajax/libs/coffee-script/1.6.3/coffee-script.min.js"
  ],
  "repository": {
    "id": 16653973,
    "name": "cson",
    "full_name": "distri/cson",
    "owner": {
      "login": "distri",
      "id": 6005125,
      "avatar_url": "https://identicons.github.com/f90c81ffc1498e260c820082f2e7ca5f.png",
      "gravatar_id": null,
      "url": "https://api.github.com/users/distri",
      "html_url": "https://github.com/distri",
      "followers_url": "https://api.github.com/users/distri/followers",
      "following_url": "https://api.github.com/users/distri/following{/other_user}",
      "gists_url": "https://api.github.com/users/distri/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/distri/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/distri/subscriptions",
      "organizations_url": "https://api.github.com/users/distri/orgs",
      "repos_url": "https://api.github.com/users/distri/repos",
      "events_url": "https://api.github.com/users/distri/events{/privacy}",
      "received_events_url": "https://api.github.com/users/distri/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "private": false,
    "html_url": "https://github.com/distri/cson",
    "description": "CoffeeScript Object Notation implemented in the hackiest way.",
    "fork": false,
    "url": "https://api.github.com/repos/distri/cson",
    "forks_url": "https://api.github.com/repos/distri/cson/forks",
    "keys_url": "https://api.github.com/repos/distri/cson/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/distri/cson/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/distri/cson/teams",
    "hooks_url": "https://api.github.com/repos/distri/cson/hooks",
    "issue_events_url": "https://api.github.com/repos/distri/cson/issues/events{/number}",
    "events_url": "https://api.github.com/repos/distri/cson/events",
    "assignees_url": "https://api.github.com/repos/distri/cson/assignees{/user}",
    "branches_url": "https://api.github.com/repos/distri/cson/branches{/branch}",
    "tags_url": "https://api.github.com/repos/distri/cson/tags",
    "blobs_url": "https://api.github.com/repos/distri/cson/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/distri/cson/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/distri/cson/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/distri/cson/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/distri/cson/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/distri/cson/languages",
    "stargazers_url": "https://api.github.com/repos/distri/cson/stargazers",
    "contributors_url": "https://api.github.com/repos/distri/cson/contributors",
    "subscribers_url": "https://api.github.com/repos/distri/cson/subscribers",
    "subscription_url": "https://api.github.com/repos/distri/cson/subscription",
    "commits_url": "https://api.github.com/repos/distri/cson/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/distri/cson/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/distri/cson/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/distri/cson/issues/comments/{number}",
    "contents_url": "https://api.github.com/repos/distri/cson/contents/{+path}",
    "compare_url": "https://api.github.com/repos/distri/cson/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/distri/cson/merges",
    "archive_url": "https://api.github.com/repos/distri/cson/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/distri/cson/downloads",
    "issues_url": "https://api.github.com/repos/distri/cson/issues{/number}",
    "pulls_url": "https://api.github.com/repos/distri/cson/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/distri/cson/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/distri/cson/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/distri/cson/labels{/name}",
    "releases_url": "https://api.github.com/repos/distri/cson/releases{/id}",
    "created_at": "2014-02-08T21:52:30Z",
    "updated_at": "2014-02-08T21:52:30Z",
    "pushed_at": "2014-02-08T21:52:30Z",
    "git_url": "git://github.com/distri/cson.git",
    "ssh_url": "git@github.com:distri/cson.git",
    "clone_url": "https://github.com/distri/cson.git",
    "svn_url": "https://github.com/distri/cson",
    "homepage": null,
    "size": 0,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": null,
    "has_issues": true,
    "has_downloads": true,
    "has_wiki": true,
    "forks_count": 0,
    "mirror_url": null,
    "open_issues_count": 0,
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "master",
    "master_branch": "master",
    "permissions": {
      "admin": true,
      "push": true,
      "pull": true
    },
    "organization": {
      "login": "distri",
      "id": 6005125,
      "avatar_url": "https://identicons.github.com/f90c81ffc1498e260c820082f2e7ca5f.png",
      "gravatar_id": null,
      "url": "https://api.github.com/users/distri",
      "html_url": "https://github.com/distri",
      "followers_url": "https://api.github.com/users/distri/followers",
      "following_url": "https://api.github.com/users/distri/following{/other_user}",
      "gists_url": "https://api.github.com/users/distri/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/distri/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/distri/subscriptions",
      "organizations_url": "https://api.github.com/users/distri/orgs",
      "repos_url": "https://api.github.com/users/distri/repos",
      "events_url": "https://api.github.com/users/distri/events{/privacy}",
      "received_events_url": "https://api.github.com/users/distri/received_events",
      "type": "Organization",
      "site_admin": false
    },
    "network_count": 0,
    "subscribers_count": 2,
    "branch": "v0.1.0",
    "defaultBranch": "master"
  },
  "dependencies": {}
});