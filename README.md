# Based SaaS Starter Kit

Launch your SaaS faster with this comprehensive starter kit. Built with Next.js, Stripe, Supabase, and shadcn/ui.

## Features

- Stripe Integration for secure payments and subscription management
- Google Analytics for tracking user behavior and optimizing performance
- Supabase Backend for PostgreSQL with real-time and RESTful API
- shadcn/ui Components for customizable, accessible React components

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- Supabase account
- Stripe account
- Google Analytics account

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/bobcoi03/based-saas-starter-kit.git
   cd based-saas-starter-kit
   ```

2. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add the following variables:

   ```
   NEXT_PUBLIC_SUPABASE_URL=<your_supabase_project_url>
   NEXT_PUBLIC_SUPABASE_ANON_KEY=<your_supabase_anon_key>
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key_here
   GOOGLE_ANALYTICS=your-analytics-key
   ```

### Running the Development Server

```
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Building for Production

```
npm run build
# or
yarn build
```

### Running Production Build

```
npm start
# or
yarn start
```

## Project Structure

- `/utils/supabase/`: Contains Supabase client, middleware, and server utilities
  - `client.ts`
  - `middleware.ts`
  - `server.ts`

- `/utils/stripe/`: Contains Stripe utility
  - `stripe.ts`: Sets up and exports the Stripe client

## Supabase

This project uses Supabase for backend services. To generate types for your Supabase tables, refer to the [Supabase documentation on generating types](https://supabase.com/docs/guides/api/rest/generating-types).

## Stripe

Stripe is used for payment processing. For more information on implementing Stripe features, refer to the [Stripe documentation](https://docs.stripe.com/?locale=en-GB).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Support

If you find this project helpful, consider buying the creator a coffee:

[Buy Me a Coffee](https://buymeacoffee.com/luongquangn)

## Follow the Creator

Follow [@justwrapapi on Twitter](https://twitter.com/justwrapapi) for updates and more projects!

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.