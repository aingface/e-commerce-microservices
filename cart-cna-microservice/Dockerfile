FROM openjdk:17-jdk-oracle
RUN microdnf install findutils
COPY gradlew .
COPY gradle gradle
COPY settings.gradle .
RUN 
RUN chmod +x ./gradlew
RUN ./gradlew build -i
COPY /*.jar app.jar
RUN pwd
RUN ls /root -la
RUN ls /build -la
RUN ls /build/libs -la
ENTRYPOINT ["java","-jar","/app.jar", "--server.port=${CART_SERVER_PORT}"]
