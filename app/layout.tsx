import type { Metadata } from "next";

import "./globals.css";


export const metadata: Metadata = {
  title: "Blender 书房 - 个人数字学习空间",
  description: "专为 Blender 学习者打造的个人数字学习空间，记录、整理、回顾所有 3D 创作相关的知识和灵感。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
