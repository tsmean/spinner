# Please authenticate by setting the correct AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY in your shell

ng build @tsmean/spinner --prod
ng build --prod
aws s3 cp dist/spinner-library s3://aws-website-spinner-k3qol/ --recursive
aws cloudfront create-invalidation --distribution-id E3LGEZ3IMK5R91 --paths "/*"
