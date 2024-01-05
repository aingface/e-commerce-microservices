FROM openjdk:17-jdk-oracle
RUN microdnf install findutils
COPY gradlew .
COPY gradle gradle
COPY settings.gradle .
RUN chmod +x ./gradlew
RUN ./gradlew build
RUN ls -l build/libs/
COPY build/libs/*.jar app.jar
# ENTRYPOINT ["java","-jar","/app.jar", "--server.port=${CART_SERVER_PORT}"]
CMD ["sh", "-c", "ls -l build/libs/ && java -jar /app.jar --server.port=${CART_SERVER_PORT}"]
