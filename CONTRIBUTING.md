# Contributing

1. Fork & clone this project
2. Create a topic branch from `develop` branch
3. :sparkles: Happy hacking
4. Send a pull request

## Git Commit Messages

**DO**

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the subject line to 50 characters
* Wrap the body at 72 characters
* Use the body to explain what and why vs. how
* Reference issues and pull requests liberally
* Separate subject from body with a blank line
* Capitalize the subject line
* Consider starting the commit message with an applicable emoji:
    * :lipstick: `:lipstick:` when improving the format/structure of the code
    * :racehorse: `:racehorse:` when improving performance
    * :memo: `:memo:` when writing docs
    * :apple: `:apple:` when fixing something on Mac OS
    * :checkered_flag: `:checkered_flag:` when fixing something on Windows
    * :bug: `:bug:` when fixing a bug
    * :fire: `:fire:` when removing code or files
    * :green_heart: `:green_heart:` when fixing the CI build
    * :white_check_mark: `:white_check_mark:` when adding tests
    * :lock: `:lock:` when dealing with security
    * :arrow_up: `:arrow_up:` when upgrading dependencies
    * :art: `:art:` when build CSS
    * :book: `:book:` when build docs

For Example:

```
:memo: Summarize changes in around 50 characters or less

More detailed explanatory text, if necessary. Wrap it to about 72
characters or so. In some contexts, the first line is treated as the
subject of the commit and the rest of the text as the body. The
blank line separating the summary from the body is critical (unless
you omit the body entirely); various tools like `log`, `shortlog`
and `rebase` can get confused if you run the two together.

Explain the problem that this commit is solving. Focus on why you
are making this change as opposed to how (the code explains that).
Are there side effects or other unintuitive consequenses of this
change? Here's the place to explain them.

Further paragraphs come after blank lines.

 - Bullet points are okay, too

 - Typically a hyphen or asterisk is used for the bullet, preceded
   by a single space, with blank lines in between, but conventions
   vary here

If you use an issue tracker, put references to them at the bottom,
like this:

Resolves: #123
See also: #456, #789
```

_Note: this example was taken from [How to Write a Git Commit Message](http://chris.beams.io/posts/git-commit/)._

**DON'T**

* Don't end the summary line with a period

## About `css` and `docs` directories

We are prepared a script, `npm run build` to generate CSS for itself and docs. If you run the script, it will update both Regardless of whether there is no change so when you push them, please use `npm run css` and `npm run docs` script.

## Acknowledgement

Inspiration and idea was taken from many sources, including:

* [atom/CONTRIBUTING.md](https://github.com/atom/atom/blob/master/CONTRIBUTING.md)
* [Writing good commit messages](https://github.com/erlang/otp/wiki/Writing-good-commit-messages)
* [How to Write a Git Commit Message](http://chris.beams.io/posts/git-commit/)
