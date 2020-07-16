FROM node:14-alpine
WORKDIR /code
EXPOSE 9000
RUN addgroup gatsby
RUN adduser --system --ingroup gatsby gatsby
RUN chown -R gatsby:gatsby /code
RUN npm install -g gatsby-cli
COPY package.json yarn.lock /code/
RUN yarn install --frozen-lockfile
COPY --chown=gatsby:gatsby . .
USER gatsby
RUN gatsby build
CMD gatsby serve --verbose --host 0.0.0.0
