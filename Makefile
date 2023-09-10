

start:
	docker compose up -d

build:
	yarn build:lambda
	cp -r .output/public/* api/public/
	cd api && docker build . -t nuxt-api/node-web-app && docker run -p 4000:4000 -d nuxt-api/node-web-app
	cd .output/server/ && zip -r function.zip * && mv function.zip ../../

deploy:
	awslocal lambda create-function \
		--function-name nuxt-on-lambda \
		--runtime nodejs16.x \
		--zip-file fileb://function.zip \
		--handler index.handler \
		--role arn:aws:iam::000000000000:role/cool-stacklifter

	awslocal lambda create-function-url-config \
		--function-name nuxt-on-lambda \
		--auth-type NONE > function_url.txt

update:
	awslocal lambda update-function \
		--function-name nuxt-on-lambda \
		--runtime nodejs16.x \
		--zip-file fileb://function.zip \
		--handler index.handler \
		--role arn:aws:iam::000000000000:role/cool-stacklifter

down:
	awslocal lambda delete-function --function-name nuxt-on-lambda
	docker stop $(shell docker ps -q --filter ancestor=nuxt-api/node-web-app)
	docker compose down