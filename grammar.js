module.exports = grammar({
  name: 'markdown',

  // Source: https://roopc.net/posts/2014/markdown-cfg/

  rules: {
    body: $ => repeat($.character),

    character: $ => /./
  }
});
