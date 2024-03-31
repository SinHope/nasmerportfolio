import Head from 'next/head';

export default function Development() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <Head>
        <title>Page in Development</title>
        <meta name="description" content="This page is currently in development." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-4">
        <h1 className="text-4xl font-bold text-gray-900">
          Page in Development
        </h1>
      </main>
    </div>
  );
}
