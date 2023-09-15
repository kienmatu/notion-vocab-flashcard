import { ReactNode, SetStateAction, useState } from 'react';
import NextApp, { AppProps, AppContext } from 'next/app';
import { getCookie, setCookie } from 'cookies-next';
import Head from 'next/head';
import { MantineProvider, ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { LeftNavbar } from './Navbar';

interface LayoutProps {
  children: ReactNode;
  colorScheme: ColorScheme;
  setColorScheme: (value: SetStateAction<ColorScheme>) => void;
}
export default function AppLayout(props: LayoutProps) {
  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (props.colorScheme === 'dark' ? 'light' : 'dark');
    props.setColorScheme(nextColorScheme);
    setCookie('color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };
  return (
    <>
      <Head>
        <title>Notion Vocab Learning App</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <ColorSchemeProvider colorScheme={props.colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          theme={{ colorScheme: props.colorScheme }}
          withGlobalStyles
          withNormalizeCSS
        >
          <LeftNavbar />
          {props.children}
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}
