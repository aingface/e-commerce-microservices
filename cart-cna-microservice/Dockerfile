# FROM openjdk:17-jdk-oracle
# WORKDIR /app
# RUN microdnf install findutils
# COPY gradlew .
# COPY gradle gradle
# COPY settings.gradle .
# COPY build.gradle .
# RUN chmod +x ./gradlew
# RUN ls -l 
# RUN ./gradlew build -d
# RUN find . -name "*.jar"
# # RUN ls -l 
# COPY app/build/libs/*.jar app.jar
# ENTRYPOINT ["java","-jar","/app.jar", "--server.port=${CART_SERVER_PORT}"]


# syntax=docker/dockerfile:experimental
FROM eclipse-temurin:17-jdk-alpine AS build
WORKDIR /workspace/app

COPY . /workspace/app
RUN --mount=type=cache,target=/root/.gradle ./gradlew clean build
RUN mkdir -p build/dependency && (cd build/dependency; jar -xf ../libs/*-SNAPSHOT.jar)

FROM eclipse-temurin:17-jdk-alpine
VOLUME /tmp
ARG DEPENDENCY=/workspace/app/build/dependency
COPY --from=build ${DEPENDENCY}/BOOT-INF/lib /app/lib
COPY --from=build ${DEPENDENCY}/META-INF /app/META-INF
COPY --from=build ${DEPENDENCY}/BOOT-INF/classes /app
ENTRYPOINT ["java","-jar","/app.jar", "--server.port=${CART_SERVER_PORT}"]