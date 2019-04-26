# Build

gcloud builds submit --tag gcr.io/proven-serenity-238515/jhipster

# Deploy

gcloud beta run deploy --image gcr.io/proven-serenity-238515/jhipster

# Call

curl -X POST -d @application.jdl https://jhipster-bzgjzhuyfa-uc.a.run.app/