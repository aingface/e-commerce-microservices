FROM openjdk:17-jdk-oracle
RUN microdnf install findutils
COPY gradlew .
COPY gradle gradle
COPY settings.gradle .
RUN chmod +x ./gradlew
RUN ./gradlew build -i
COPY /*.jar app.jar
# ENTRYPOINT ["java","-jar","/app.jar", "--server.port=${CART_SERVER_PORT}"]
ENTRYPOINT ["sh", "-c", "pwd && ls -l && ls -l build/libs/ && java -jar /app.jar --server.port=${CART_SERVER_PORT}"]
