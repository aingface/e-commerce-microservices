FROM openjdk:17-jdk-oracle
WORKDIR /app
RUN microdnf install findutils
COPY gradlew .
COPY gradle gradle
COPY settings.gradle .
RUN chmod +x ./gradlew
RUN mkdir -p build/libs
RUN ./gradlew build -i && find . -name "*.jar"
COPY build/libs/*.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar", "--server.port=${CART_SERVER_PORT}"]