FROM eclipse-temurin:17-jdk AS builder
ARG APP_HOME=/app
WORKDIR ${APP_HOME}
# COPY gradlew .
# COPY gradle gradle
# COPY settings.gradle .
# COPY build.gradle .
COPY . .
RUN chmod +x ./gradlew
RUN ./gradlew build -i

FROM eclipse-temurin:17-jdk
RUN find . -name "*.jar"
COPY --from=builder /app/build/libs/cart-1.0.0.jar app.jar 
# RUN jar tf ./app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
CMD ["--server.port=${CART_SERVER_PORT}"]