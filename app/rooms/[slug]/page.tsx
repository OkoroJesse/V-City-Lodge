import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Bed,
  Users,
  ShieldCheck,
  CheckCircle2,
  Phone,
  MessageSquare,
  ArrowLeft,
  Calendar,
  Clock,
  Car,
  Wifi,
} from "lucide-react";
import { hotelConfig, RoomCategory } from "@/data/hotel-config";
import { RoomDetailClient } from "./RoomDetailClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return hotelConfig.rooms.map((room) => ({
    slug: room.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const room = hotelConfig.rooms.find((r) => r.slug === slug);

  if (!room) {
    return {
      title: "Room Not Found",
    };
  }

  return {
    title: `${room.name} | V City Lodge Kubwa, Abuja`,
    description: room.description,
    openGraph: {
      title: `${room.name} - V City Lodge Hotel & Suite Ltd`,
      description: room.description,
      images: [
        {
          url: room.image,
          width: 1200,
          height: 800,
          alt: room.name,
        },
      ],
    },
  };
}

export default async function RoomDetailPage({ params }: Props) {
  const { slug } = await params;
  const room = hotelConfig.rooms.find((r) => r.slug === slug);

  if (!room) {
    notFound();
  }

  return <RoomDetailClient room={room} />;
}
