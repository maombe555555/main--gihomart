'use client'

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { MapPin, Star, Play } from "lucide-react"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [products, setProducts] = useState([])
  const [programs, setPrograms] = useState([])
  useEffect(() => {
    fetch("/api/products")
      .then(res => res.json())
      .then(setProducts)
      .catch(() => setProducts([]))
    fetch("/api/programs")
      .then(res => res.json())
      .then(setPrograms)
      .catch(() => setPrograms([]))
  }, [])

  const popularTrips = [
    {
      id: 1,
      name: "Sailing Trip",
      image: "/images/nmp.jpg?height=200&width=300",
      price: "$7500",
      duration: "7 days",
      location: "Huye Mountain",
      rating: 4.8,
    },
    {
      id: 2,
      name: " Cultural Experience",
      image: "/images/image1.jpg?height=200&width=300",
      price: "$4500",
      duration: "5 days",
      location: "Southern Province",
      rating: 4.9,
    },
    {
      id: 3,
      name: "Heritage Tour",
      image: "/images/RWANDA GOATS.jpg?height=200&width=300",
      price: "$6500",
      duration: "6 days",
      location: "Huye City",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Cultural Experience",
      image: "/images/miss.jpg?height=200&width=300",
      price: "$4500",
      duration: "5 days",
      location: "Southern Province",
      rating: 4.9,
    },
    {
      id: 5,
      name: " Heritage Tour",
      image: "/images/IMG-20231126-WA0030.jpg?height=200&width=300",
      price: "$6500",
      duration: "6 days",
      location: "Huye City",
      rating: 4.7,
    },  {
      id: 6,
      name: " Heritage Tour",
      image: "/images/DSC_0027.JPG?height=200&width=300",
      price: "$6500",
      duration: "6 days",
      location: "Huye City",
      rating: 4.7,
    }, ]

  const travelArticles = [
    {
      id: 1,
      title: "Cycling Through Rwanda's Hills",
      image: "/images/huye tour.jpg?height=200&width=300",
      excerpt: "Discover the beauty of Rwanda's landscape on two wheels",
      readTime: "5 min read",
    },
    {
      id: 2,
      title: "Traditional Rwandan Culture",
      image: "/images/inzo.jpg?height=200&width=300",
      excerpt: "Immerse yourself in authentic cultural experiences",
      readTime: "8 min read",
    },
    {
      id: 3,
      title: "Community Tourism Impact",
      image: "/images/today.jpg?height=200&width=300",
      excerpt: "How tourism supports local communities in Rwanda",
      readTime: "6 min read",
    },
  ]

  const partners = [
    { name: "Rwanda Tourism Board", logo: "/placeholder.svg?height=60&width=120" },
    { name: "UNESCO", logo: "/placeholder.svg?height=60&width=120" },
    { name: "CNRU", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Travel Partners", logo: "/placeholder.svg?height=60&width=120" },
  ]

  return (
    <div className="min-h-screen bg-background relative">
      {/* Social Media Icons Top Right */}
      <div className="absolute top-4 right-6 z-50 flex gap-4">
        <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-500">
          <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
        </a>
        <a href="https://www.instagram.com/p/DMVpUTQipjE/?img_index=3&igsh=MXNlOXpidTBubHhvNQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-500">
          <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.659.388 3.678 1.37c-.98.98-1.24 2.092-1.298 3.373C2.012 5.668 2 6.077 2 12c0 5.923.012 6.332.07 7.613.058 1.281.318 2.393 1.298 3.373.98.98 2.092 1.24 3.373 1.298C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.281-.058 2.393-.318 3.373-1.298.98-.98 1.24-2.092 1.298-3.373.058-1.281.07-1.69.07-7.613 0-5.923-.012-6.332-.07-7.613-.058-1.281-.318-2.393-1.298-3.373-.98-.98-2.092-1.24-3.373-1.298C15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
        </a>
        <a href="https://twitter.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-400">
          <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.116 2.823 5.247a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.514 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/></svg>
        </a>
        <a href="https://linkedin.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-700">
          <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.25 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
        </a>
      </div>
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/back.jpg"
            alt="People celebrating in Rwanda landscape"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to GiHomarts & Cultours Ltd</h1>
          <p className="text-lg md:text-xl mb-8 text-orange-300 leading-relaxed">
            Discover the beauty and culture of Rwanda with GiHomarts & Cultours Ltd, your premier destination for
            unforgettable travel experiences. As a community based tourism company located in the southern province of
            Rwanda, we are dedicated to showcasing the rich heritage and natural wonders of our beloved country.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700">
              <Link href="/destinations">Explore Our Tours</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-grey text-blue hover:bg-white hover:text-gray-900"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Our Services Section (Products from DB) */}
      {products.length > 0 && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Our Services</h2>
              <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
                Discover our unique experiences and offerings curated for you.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product: any) => (
                <Card key={product._id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    {product.image && (
                      <Image src={product.image} alt={product.name} fill className="object-cover" />
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-2">{product.description}</p>
                    {product.price && (
                      <span className="text-lg font-bold text-orange-600">${product.price}</span>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Our Programs Section (Programs from DB) */}
      {programs.length > 0 && (
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Our Programs</h2>
              <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
                Explore our unique programs and opportunities.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program: any) => (
                <Card key={program._id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{program.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 mb-2">{program.description}</p>
                    {program.schedule && (
                      <span className="text-sm font-medium text-blue-600">{program.schedule}</span>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Popular Trips Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Popular Trips</h2>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
            GiHomarts & Cultours Ltd curates authentic travel experiences in Rwanda that highlight its natural beauty, cultural heritage, and community spirit. 
            Experience Rwanda's most sought-after destinations with our carefully crafted tour packages 
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularTrips.map((trip) => (
              <Card key={trip.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={trip.image || "/npm.jpg"} alt={trip.name} fill className="object-cover" />
                  <Badge className="absolute top-4 left-4 bg-orange-600">{trip.duration}</Badge>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{trip.name}</CardTitle>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{trip.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{trip.location}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-orange-600">{trip.price}</span>
                    <Button asChild>
                      <Link href="/booking">Book Now</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Amazing Travel Articles */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Amazing Travel Articles</h2>
           
          </div> <p className="text-lg md:text-xl mb-8 text-black-300 leading-relaxed">
            Our vision is to revolutionize Rwandan commerce by providing a trusted digital marketplace that connects local vendors, artisans, 
            and farmers with a growing community of conscious consumers. We aspire to be a catalyst for inclusive economic growth—where even the smallest entrepreneur has a platform to thrive. Our goal is to empower underserved communities with technology-driven tools that amplify their voices, increase visibility, and foster sustainability. We envision a Rwanda where commerce is no longer limited by geography or infrastructure, but rather fueled by innovation, resilience, and community spirit. Through partnerships, mobile-first solutions, and user-centered design, we strive to build more than just a marketplace—we are building a movement where culture meets commerce, and tradition merges with technology to shape a brighter, more connected future for all.
            </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {travelArticles.map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={article.image || "/miss.jpg"} alt={article.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{article.title}</CardTitle>
                  <CardDescription>{article.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{article.readTime}</span>
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Featured Video */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/yrqUF9O164U"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full rounded-lg"
              ></iframe>
            </div>
            <div className="relative h-64">
              <Image
                src="/images/kawa.webp?height=250&width=400"
                alt="Group travel experience"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 px-0 bg-gray-50 w-full">
        <div className="max-w-full mx-auto">
          <h3 className="text-xl font-semibold text-center mb-8 text-muted-foreground">Our Partners</h3>
          <p className="text-gray-400 mb-4  text-center">
                Preserving heritage for today and tomorrow through authentic cultural tourism experiences in Rwanda.
              </p>
          <div className="w-full flex flex-wrap justify-center items-center gap-12 md:gap-20 px-2 md:px-8">
            {[
              {
                img: "cnru.png",
                name: "CNRU",
                url: "https://www.cnru.rw/"
              },
              {
                img: "inteko-y-umuco.png",
                name: "Inteko y'Umuco",
                url: "https://www.intekoyumuco.rw/"
              },
              {
                img: "iprc-kitabi.png",
                name: "IPRC Kitabi",
                url: "https://www.iprckitabi.rp.ac.rw/"
              },
              {
                img: "university-of-rwanda.png",
                name: "University of Rwanda",
                url: "https://www.ur.ac.rw/"
              }
            ].map((partner, index) => (
              <Link key={index} href={partner.url} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center bg-white rounded shadow p-4 md:p-8" style={{minWidth:180, minHeight:90}}>
                <Image
                  src={`/images/${partner.img}`}
                  alt={partner.name}
                  width={160}
                  height={80}
                  className="object-contain max-w-full max-h-40 md:max-h-48 opacity-80 hover:opacity-100 transition-opacity"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/images/logooo.jpg"
                  alt="GiHomarts Logo"
                  width={40}
                  height={40}
                  className="rounded-full object-cover border border-orange-600"
                />
                <span className="font-bold text-xl">GiHomarts</span>
              </div>
              <p className="text-gray-400 mb-4">
                Preserving heritage for today and tomorrow through authentic cultural tourism experiences in Rwanda.
              </p>
            </div>

            {/* Our Services */}
            <div>
              <h4 className="font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/cultural-tours" className="hover:text-white">
                    Cultural Tours
                  </Link>
                </li>
                <li>
                  <Link href="/heritage-sites" className="hover:text-white">
                    Heritage Sites
                  </Link>
                </li>
                <li>
                  <Link href="/community-tourism" className="hover:text-white">
                    Community Tourism
                  </Link>
                </li>
                <li>
                  <Link href="/adventure-tours" className="hover:text-white">
                    Adventure Tours
                  </Link>
                </li>
               
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>Southern Province, Rwanda</p>
                <p>Email: gihomart@250gmail.com</p>
                <p>Phone: +250  788 440 243</p>
              </div>
            </div>

            {/* QR Code */}
            <div className="flex flex-col items-center justify-start">
              <h4 className="font-semibold mb-4">Scan QR</h4>
              <Image
                src="/images/GIHOMARTS FINAL QR CODE[1].jpg"
                alt="GiHomarts QR Code"
                width={80}
                height={80}
                className="rounded border border-gray-300 bg-white p-1"
              />
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            {/* Social Media Icons */}
            <div className="flex justify-center gap-6 mb-6">
              <a href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-500">
                <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
              </a>
              <a href="https://www.instagram.com/p/DMVpUTQipjE/?img_index=3&igsh=MXNlOXpidTBubHhvNQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-pink-500">
                <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.012 7.052.07 5.771.128 4.659.388 3.678 1.37c-.98.98-1.24 2.092-1.298 3.373C2.012 5.668 2 6.077 2 12c0 5.923.012 6.332.07 7.613.058 1.281.318 2.393 1.298 3.373.98.98 2.092 1.24 3.373 1.298C8.332 23.988 8.741 24 12 24s3.668-.012 4.948-.07c1.281-.058 2.393-.318 3.373-1.298.98-.98 1.24-2.092 1.298-3.373.058-1.281.07-1.69.07-7.613 0-5.923-.012-6.332-.07-7.613-.058-1.281-.318-2.393-1.298-3.373-.98-.98-2.092-1.24-3.373-1.298C15.668.012 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
              </a>
              <a href="https://twitter.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-blue-400">
                <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557a9.83 9.83 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482C7.691 8.095 4.066 6.13 1.64 3.161c-.542.929-.856 2.01-.857 3.17 0 2.188 1.115 4.116 2.823 5.247a4.904 4.904 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.058 0 14.009-7.514 14.009-14.009 0-.213-.005-.425-.014-.636A10.012 10.012 0 0 0 24 4.557z"/></svg>
              </a>
              <a href="https://linkedin.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-700">
                <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.25 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
              </a>
            </div>
            <p>&copy; 2025 GiHomarts. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
