FROM gradle:8.5.0-jdk17 AS builder
WORKDIR /app
# COPY gradlew .
# COPY gradle gradle
# COPY settings.gradle .
# COPY build.gradle .
# COPY src ./src
COPY . .
RUN chmod +x ./gradlew
RUN ./gradlew build -i -x test

FROM eclipse-temurin:17-jdk
RUN find . -name "*.jar"
COPY --from=builder /app/build/libs/cart-1.0.0.jar /app.jar 
ENTRYPOINT ["java", "-jar", "app.jar"]
CMD ["--server.port=${CART_SERVER_PORT}"]
