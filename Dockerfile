# Use an official Ubuntu runtime as the base image
FROM ubuntu:20.04

# Set environment variables to prevent some prompts during installation
ENV DEBIAN_FRONTEND=noninteractive

# Install Node.js and other dependencies
RUN apt-get update && apt-get install -y \
    git \
    wget \
    vim

# Set the working directory in the container
WORKDIR /app


# Copy package.json and yarn.lock to install dependencies
COPY . .

# Install dependencies

EXPOSE 3000
