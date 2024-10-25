FROM node:20

WORKDIR front

ENV PATH /usr/local/bin:$PATH

COPY . /front

RUN npm i

ENTRYPOINT ["npm" ,"run", "dev", "--", "--host=0.0.0.0"]