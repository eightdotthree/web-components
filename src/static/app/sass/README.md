This is the directory where each Chapman CSS file has been converted into modular Sass. Every original Chapman CSS file now has its own .scss file, which is a compiled version of all of the modules for the given stylesheet.

Each folder in this level of the directory (helpers, layout, modules, and print) has a subfolder that matches the name of each of these .scss files. Any files found within these folders are imported into the corresponding .scss file.

For example, we have main.scss. If you open it in a text editor, you will see that it’s importing various files within the following directories:

helpers/main
layout/main
modules/main
print/main

This separation of modules ensures that the styles from each original Chapman CSS file can still be used in the same way they used to be, while still using Sass.

————————————————————

To update the Sass, you must use the command line to watch for changes and compile your Sass. Before you make changes to the Sass, follow these steps:

1. Open a new Terminal window.
2. CD into web-components/src/static.
3. Run “grunt server” in that directory.

The build system, Grunt, will now be watching for Sass changes and recompile your Sass for you.

————————————————————

1/20/15
Sarah Harissis
BarkleyREI