all: index.html mapschool.epub

mapschool.epub: README.md template._
	pandoc README.md -o mapschool.epub

index.html: README.md SEEALSO.md template._
	node build.js
