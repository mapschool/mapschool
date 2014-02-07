all: index.html mapschool.epub furtherreading.html contributors.html

mapschool.epub: README.md template._
	pandoc README.md -o mapschool.epub

index.html: README.md template._
	node build.js

furtherreading.html: SEEALSO.md
	node template.js SEEALSO.md "further reading" > furtherreading.html

contributors.html: CONTRIBUTORS.md
	node template.js CONTRIBUTORS.md "contributors" > contributors.html
