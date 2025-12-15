'use client';

import { checkoutAction } from '@/lib/payments/actions';
import { Check } from 'lucide-react';
import { SubmitButton } from './submit-button';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function PricingPage() {
  const { data: pricesData, isLoading: pricesLoading } = useSWR('/api/stripe/prices', fetcher);
  const { data: productsData, isLoading: productsLoading } = useSWR('/api/stripe/products', fetcher);

  if (pricesLoading || productsLoading) {
    return (
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-8 max-w-xl mx-auto">
          <div className="pt-6">
            <div className="h-8 bg-gray-200 rounded w-32 mb-4 animate-pulse" />
            <div className="h-6 bg-gray-200 rounded w-24 mb-6 animate-pulse" />
            <div className="h-12 bg-gray-200 rounded w-40 mb-8 animate-pulse" />
          </div>
          <div className="pt-6">
            <div className="h-8 bg-gray-200 rounded w-32 mb-4 animate-pulse" />
            <div className="h-6 bg-gray-200 rounded w-24 mb-6 animate-pulse" />
            <div className="h-12 bg-gray-200 rounded w-40 mb-8 animate-pulse" />
          </div>
        </div>
      </main>
    );
  }

  const prices = pricesData || [];
  const products = productsData || [];

  const basePlan = products.find((product: { name: string }) => product.name === 'Base');
  const plusPlan = products.find((product: { name: string }) => product.name === 'Plus');

  const basePrice = prices.find((price: { productId: string }) => price.productId === basePlan?.id);
  const plusPrice = prices.find((price: { productId: string }) => price.productId === plusPlan?.id);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid md:grid-cols-2 gap-8 max-w-xl mx-auto">
        <PricingCard
          name={basePlan?.name || 'Base'}
          price={basePrice?.unitAmount || 800}
          interval={basePrice?.interval || 'month'}
          trialDays={basePrice?.trialPeriodDays || 7}
          features={[
            'Unlimited Usage',
            'Unlimited Workspace Members',
            'Email Support',
          ]}
          priceId={basePrice?.id}
        />
        <PricingCard
          name={plusPlan?.name || 'Plus'}
          price={plusPrice?.unitAmount || 1200}
          interval={plusPrice?.interval || 'month'}
          trialDays={plusPrice?.trialPeriodDays || 7}
          features={[
            'Everything in Base, and:',
            'Early Access to New Features',
            '24/7 Support + Slack Access',
          ]}
          priceId={plusPrice?.id}
        />
      </div>
    </main>
  );
}

function PricingCard({
  name,
  price,
  interval,
  trialDays,
  features,
  priceId,
}: {
  name: string;
  price: number;
  interval: string;
  trialDays: number;
  features: string[];
  priceId?: string;
}) {
  return (
    <div className="pt-6">
      <h2 className="text-2xl font-medium text-gray-900 mb-2">{name}</h2>
      <p className="text-sm text-gray-600 mb-4">
        with {trialDays} day free trial
      </p>
      <p className="text-4xl font-medium text-gray-900 mb-6">
        ${price / 100}{' '}
        <span className="text-xl font-normal text-gray-600">
          per user / {interval}
        </span>
      </p>
      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <form action={checkoutAction}>
        <input type="hidden" name="priceId" value={priceId} />
        <SubmitButton />
      </form>
    </div>
  );
}
