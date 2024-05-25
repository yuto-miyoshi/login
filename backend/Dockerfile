# import base image based on ubuntu20.0.4
FROM exoplatform/jdk:openjdk-17-ubuntu-2404

# change work directory
WORKDIR /app

# prepare build file
COPY /build/libs/*.jar app.jar

# exec start backend project
ENTRYPOINT ["java","-jar","app.jar"]
