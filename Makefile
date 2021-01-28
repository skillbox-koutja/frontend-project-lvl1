install: install-deps

run:
	node bin/brain-games.js

install-deps:
	npm ci

test:
	npm test

test-coverage:
	npm test -- --coverage --coverageProvider=v8

lint:
	npx eslint .

publish:
	npm publish

publish-dry-run:
	npm publish --dry-run

.PHONY: test