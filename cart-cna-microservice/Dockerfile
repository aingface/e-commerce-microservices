FROM openjdk:17-jdk-oracle
RUN microdnf install findutils
COPY gradlew .
COPY gradle gradle
COPY settings.gradle .
RUN chmod +x ./gradlew
RUN ./gradlew build
ARG JAR_FILE=build/libs/*.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java","-jar","/app.jar", "--server.port=${CART_SERVER_PORT}"]