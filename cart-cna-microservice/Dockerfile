FROM openjdk:17-jdk-oracle
WORKDIR /app
RUN microdnf install findutils
COPY gradlew .
COPY gradle gradle
COPY settings.gradle .
COPY build.gradle .
RUN chmod +x ./gradlew
RUN ls -l 
RUN ./gradlew build -i 
RUN find . -name "*.jar"
# RUN ls -l 
COPY app/build/libs/*.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar", "--server.port=${CART_SERVER_PORT}"]