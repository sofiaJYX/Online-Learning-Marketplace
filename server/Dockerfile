# base image package
FROM public.ecr.aws/lambda/nodejs:20 AS build 

WORKDIR /app

COPY package*.json ./

# built dependency files
RUN npm install

# copy all source code
COPY . .

# build ts files
RUN npm run build

# remove all dev depencies
RUN npm prune --production

# -- Prod Stage --
FROM public.ecr.aws/lambda/nodejs:20 

# lambda server root
WORKDIR ${LAMBDA_TASK_ROOT}

# copy build stg files
COPY --from=build /app/dist ${LAMBDA_TASK_ROOT}
COPY --from=build /app/node_modules ${LAMBDA_TASK_ROOT}/node_modules
COPY --from=build /app/package*.json ${LAMBDA_TASK_ROOT}

ENV NODE_ENV=production

# start lambda function
CMD [ "index.handler" ]
