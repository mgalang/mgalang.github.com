build:
	hugo -s source

deploy:
	cd public
	git add .
	git commit -m 'Commit build'
	git push origin gh-pages
