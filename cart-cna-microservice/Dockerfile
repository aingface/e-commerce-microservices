FROM eclipse-temurin:17-jdk
ARG APP_HOME=/app
WORKDIR ${APP_HOME}
# COPY gradlew .
# COPY gradle gradle
# COPY settings.gradle .
# COPY build.gradle .
COPY . .
RUN chmod +x ./gradlew
RUN ./gradlew build -i
RUN find . -name "*.jar"
COPY ./build/libs/cart-1.0.0.jar ./app.jar 
RUN jar tf ./app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
CMD ["--server.port=${CART_SERVER_PORT}"]