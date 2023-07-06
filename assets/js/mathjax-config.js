MathJax.Hub.Config({
  TeX: {
    equationNumbers: { autoNumber: "AMS" },
    tagSide: "right",
  },
  tex2jax: {
    inlineMath: [
      ["$", "$"],
      ["\\(", "\\)"],
    ],
    displayMath: [
      ["$$", "$$"],
      ["\\[", "\\]"],
    ],
    processEscapes: true,
  },
});
MathJax.Hub.Register.StartupHook("TeX AMSmath Ready", function () {
  MathJax.InputJax.TeX.Stack.Item.AMSarray.Augment({
    clearTag() {
      if (!this.global.notags) {
        this.super(arguments).clearTag.call(this);
      }
    },
  });
});
