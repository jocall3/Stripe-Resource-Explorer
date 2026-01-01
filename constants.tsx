
import React from 'react';

export const STRIPE_RESOURCES_DATA = {
  account: {
    business_profile: { mcc: null, name: null, product_description: null, support_address: { city: null, country: null, line1: null, line2: null, postal_code: null, state: null }, support_email: null, support_phone: null, support_url: null, url: null, minority_owned_business_designation: null },
    business_type: null,
    capabilities: { card_payments: 'active', transfers: 'active' },
    charges_enabled: false,
    controller: { type: 'account' },
    country: 'US',
    created: 1234567890,
    default_currency: 'usd',
    details_submitted: false,
    email: 'site@stripe.com',
    external_accounts: { data: [], has_more: false, object: 'list', url: '/v1/accounts/acct_1MWlHDJITzLVzkSm/external_accounts' },
    id: 'acct_1MWlHDJITzLVzkSm',
    object: 'account',
    type: 'standard',
  },
  charge: {
    id: 'ch_1Mcd6UJITzLVzkSmp1XIBHoW',
    object: 'charge',
    amount: 100,
    amount_captured: 0,
    amount_refunded: 0,
    application: null,
    balance_transaction: 'txn_1MlLhiJITzLVzkSm0tDIM70A',
    billing_details: { address: { city: null, country: null, line1: null, line2: null, postal_code: null, state: null }, email: null, name: 'Jenny Rosen', phone: null, tax_id: null },
    captured: false,
    created: 1234567890,
    currency: 'usd',
    customer: null,
    description: 'My First Test Charge (created for API docs)',
    paid: true,
    payment_method: 'card_1Mcd6SJITzLVzkSmqkE2eJHO',
    status: 'succeeded',
  },
  customer: {
    id: 'cus_NNNslJKODLsLoG',
    object: 'customer',
    address: { city: null, country: null, line1: null, line2: null, postal_code: null, state: null },
    balance: 0,
    created: 1234567890,
    currency: 'usd',
    delinquent: false,
    email: 'jenny.rosen@example.com',
    invoice_prefix: '1A66DA4',
    name: 'Jenny Rosen',
  },
  balance: {
    available: [{ amount: 0, currency: 'usd', source_types: { card: 0 } }],
    connect_reserved: [{ amount: 0, currency: 'usd' }],
    livemode: false,
    object: 'balance',
    pending: [{ amount: 0, currency: 'usd', source_types: { card: 0 } }],
  },
  payment_intent: {
    id: 'pi_1Mcd6XJITzLVzkSmwOxqskee',
    object: 'payment_intent',
    amount: 1099,
    amount_capturable: 0,
    amount_received: 0,
    capture_method: 'automatic',
    client_secret: 'pi_1Mcd6XJITzLVzkSmwOxqskee_secret_JwlrslN96B4lvG68fs4kDmrmy',
    confirmation_method: 'automatic',
    created: 1234567890,
    currency: 'usd',
    status: 'requires_payment_method',
  },
  invoice: {
    id: 'in_1MlLhvJITzLVzkSmcKw0tIgl',
    object: 'invoice',
    amount_due: 1000,
    amount_paid: 0,
    amount_remaining: 1000,
    auto_advance: true,
    billing_reason: 'manual',
    collection_method: 'charge_automatically',
    created: 1234567890,
    currency: 'usd',
    customer: 'cus_NNNslJKODLsLoG',
    period_end: 1234567890,
    period_start: 1234567890,
    status: 'draft',
    total: 1000,
  },
  subscription: {
    id: 'sub_1MlLi1JITzLVzkSmbGPN6d9R',
    object: 'subscription',
    billing_cycle_anchor: 1234567890,
    cancel_at_period_end: false,
    collection_method: 'charge_automatically',
    created: 1234567890,
    currency: 'usd',
    customer: 'cus_NNNslJKODLsLoG',
    items: { data: [{ id: 'si_NWOVO8ZMEsRVpj', object: 'subscription_item', quantity: 1 }] },
    status: 'active',
  },
  payout: {
    id: 'po_1MlLiCJITzLVzkSmTO8DFctc',
    object: 'payout',
    amount: 1100,
    arrival_date: 1234567890,
    automatic: true,
    balance_transaction: 'txn_1MlLhiJITzLVzkSm0tDIM70A',
    created: 1234567890,
    currency: 'usd',
    description: 'STRIPE PAYOUT',
    status: 'in_transit',
    type: 'bank_account',
  },
  refund: {
    id: 're_1MlLi1JITzLVzkSmYjN8VXsL',
    object: 'refund',
    amount: 100,
    charge: 'ch_1Mcd6UJITzLVzkSmp1XIBHoW',
    created: 1234567890,
    currency: 'usd',
    status: 'succeeded',
  },
  dispute: {
    id: 'dp_1MlLi1JITzLVzkSmdqrdx0Ir',
    object: 'dispute',
    amount: 1000,
    charge: 'ch_1Mcd6UJITzLVzkSmp1XIBHoW',
    created: 1234567890,
    currency: 'usd',
    reason: 'general',
    status: 'warning_needs_response',
  },
  event: {
    id: 'evt_1MlLiDJITzLVzkSmHhzJOLbM',
    object: 'event',
    api_version: null,
    created: 1234567890,
    type: 'plan.created',
  },
  coupon: {
    id: 'Z4OV52SU',
    object: 'coupon',
    amount_off: null,
    created: 1234567890,
    currency: 'usd',
    duration: 'repeating',
    duration_in_months: 3,
    percent_off: 25.5,
    valid: true,
  },
  product: {
    id: 'prod_NNNsbcqAqCJrj2',
    object: 'product',
    active: true,
    created: 1234567890,
    description: 'Comfortable gray cotton t-shirt',
    name: 'T-shirt',
    type: 'good',
  },
  price: {
    id: 'price_1Mcd6ZJITzLVzkSmwd29pdd3',
    object: 'price',
    active: true,
    billing_scheme: 'per_unit',
    currency: 'usd',
    product: 'prod_NNNsbcqAqCJrj2',
    type: 'recurring',
    unit_amount: 2000,
  }
};

export const ICONS = {
  Search: (props: any) => (
    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  ),
  Box: (props: any) => (
    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ),
  Code: (props: any) => (
    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  Copy: (props: any) => (
    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
  ),
  Check: (props: any) => (
    <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" {...props}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
};
