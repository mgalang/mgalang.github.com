build:
	rm -rf ./docs
	hugo -s source

deploy:
	git add ./docs
	git commit -m 'Commit build'
	git push origin master