import { ReactNode } from 'react';
import { LeftNavbar } from './navbar';
import { AppShell } from '@mantine/core';
interface LayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: LayoutProps) {
  return (
    <AppShell navbarOffsetBreakpoint="sm" navbar={<LeftNavbar />}>
      {children}
    </AppShell>
  );
}
