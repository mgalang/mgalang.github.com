build:
	rm -rf ./public
	hugo -s source

deploy:
	cd public
	git .
	git commit -m 'Commit build'
	git push origin gh-pages
