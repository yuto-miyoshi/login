# import base image based on ubuntu20.0.4
FROM adoptopenjdk/openjdk11:x86_64-ubuntu-jdk-11.0.18_10-slim

# change work directory
WORKDIR /app

# prepare build file
COPY build/libs/*.jar app.jar

# exec start backend project
ENTRYPOINT ["java","-jar","app.jar"]
