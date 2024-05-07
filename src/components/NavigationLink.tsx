'use client';

import clsx from 'clsx';
import { useSelectedLayoutSegment } from 'next/navigation';
import { ComponentProps } from 'react';
import type { AppPathnames } from '../config';
import { Link } from '../navigation';

export default function NavigationLink<Pathname extends AppPathnames>({
    href,
    ...rest
}: ComponentProps<typeof Link<Pathname>>) {
    const selectedLayoutSegment = useSelectedLayoutSegment();
    const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
    const isActive = pathname === href;

    return (
        <Link
            aria-current={isActive ? 'page' : undefined}
            className={clsx(
                'inline-block transition-colors py-4 px-6',
                isActive ? 'shadow-[inset_0px_0px_8px_rgba(253,230,138,1)]' : 'hover:shadow-[inset_0px_0px_8px_rgba(248,113,113,0.5)]'
            )}
            href={href}
            {...rest}
        />
    );
}