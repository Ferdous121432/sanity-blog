import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://1185dc1f5dd4f6c191794a8f8ad7507f@o4508909507379200.ingest.de.sentry.io/4508914484117584",
  integrations: [
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "system",
      isNameRequired: true,
      isEmailRequired: true,
    }),
  ],
});
