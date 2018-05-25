# Run this from root of project (tsmean)
FROM tsmean/clientbase:1

COPY . /code
WORKDIR /code
RUN npm install
