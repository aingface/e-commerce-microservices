FROM openjdk:17-jdk-oracle
ARG APP_HOME=/app
WORKDIR ${APP_HOME}
RUN microdnf install findutils
COPY gradlew .
COPY gradle gradle
COPY settings.gradle .
COPY build.gradle .
RUN chmod +x ./gradlew
RUN ls -l 
RUN ./gradlew build -d
RUN find . -name "*.jar"
COPY build/libs/*.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar", "--server.port=${CART_SERVER_PORT}"]