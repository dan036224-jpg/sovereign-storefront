import { redirect } from 'next/navigation';
import { requireEntitlement } from '../../lib/require-entitlement';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export default async function BootcampPage() {
  await requireEntitlement('bootcamp');
  redirect('/bull-pit');
}
