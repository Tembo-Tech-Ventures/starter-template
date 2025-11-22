# Simple Dockerfile for running the app in production
#
# Steps performed:
# 1. Install npm dependencies
# 2. Build the Next.js application
# 3. Start the production server
#
# The single-stage layout keeps the process easy to understand for new developers.
FROM node:20-alpine

# Create and use the application directory
WORKDIR /app

# Install dependencies based on the lock file
COPY package*.json ./
RUN npm ci

# Copy source code and build the app
COPY . .
RUN npm run build

# The app listens on port 3000
EXPOSE 3000

# Launch the built Next.js server
CMD ["npm", "start"]
