# Test

  curl -X POST -d "@jdl/blog.jh" https://jhipster-bzgjzhuyfa-uc.a.run.app -o app.zip

# Development

    docker build -t pbesson/jhipster-as-a-service:latest . 
    PORT=8080 && docker run -p 8080:${PORT} -e PORT=${PORT} pbesson/jhipster-as-a-service:latest

# Deployment on Google Cloud Run

    gcloud components install beta
    gcloud components update

## Build

    gcloud builds submit --tag gcr.io/proven-serenity-238515/jhipster

# Deploy

    gcloud beta run deploy --image gcr.io/proven-serenity-238515/jhipster

