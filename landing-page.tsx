"use client"
import { Card, CardContent } from "@/components/ui/card"
import { motion, useScroll, useTransform } from "framer-motion"
import {
  Key,
  Search,
  Home,
  MessageCircle,
  Rocket,
  Shield,
  Users,
  Zap,
  Star,
  ArrowRight,
  MapPin,
  Heart,
  Eye,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"

export default function Component() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  useEffect(() => {
    setIsLoaded(true)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const properties = [
    {
      id: 1,
      image: "/images/house1.jpg",
      title: "Villa Moderne",
      location: "Paris 16ème",
      price: "850 000 €",
      type: "Vente",
      bedrooms: 4,
      bathrooms: 3,
      surface: "180 m²",
    },
    {
      id: 2,
      image: "/images/house2.jpg",
      title: "Appartement Luxueux",
      location: "Lyon Centre",
      price: "2 800 €/mois",
      type: "Location",
      bedrooms: 3,
      bathrooms: 2,
      surface: "120 m²",
    },
    {
      id: 3,
      image: "/images/house3.jpg",
      title: "Maison Contemporaine",
      location: "Marseille",
      price: "650 000 €",
      type: "Vente",
      bedrooms: 5,
      bathrooms: 3,
      surface: "220 m²",
    },
    {
      id: 4,
      image: "/images/house4.jpg",
      title: "Penthouse Vue Mer",
      location: "Nice",
      price: "1 200 000 €",
      type: "Vente",
      bedrooms: 3,
      bathrooms: 2,
      surface: "150 m²",
    },
    {
      id: 5,
      image: "/images/house5.jpg",
      title: "Loft Industriel",
      location: "Bordeaux",
      price: "1 800 €/mois",
      type: "Location",
      bedrooms: 2,
      bathrooms: 1,
      surface: "95 m²",
    },
    {
      id: 6,
      image: "/images/house6.jpg",
      title: "Villa avec Piscine",
      location: "Cannes",
      price: "2 100 000 €",
      type: "Vente",
      bedrooms: 6,
      bathrooms: 4,
      surface: "350 m²",
    },
  ]

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-100 relative overflow-hidden"
    >
      {/* Optimized Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-blue-200/40 to-purple-300/40 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-pink-200/40 to-indigo-300/40 rounded-full filter blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      {/* Optimized Floating Particles */}
      {isLoaded && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gray-400/60 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      )}

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200/50"
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <motion.div
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <div className="w-11 h-11 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <Key className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-800">The Key</span>
          </motion.div>
          <motion.div
            className="text-gray-700 font-medium bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 rounded-full border border-gray-200"
            animate={{
              boxShadow: [
                "0 0 20px rgba(59, 130, 246, 0.3)",
                "0 0 30px rgba(147, 51, 234, 0.4)",
                "0 0 20px rgba(59, 130, 246, 0.3)",
              ],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            ✨ Bientôt disponible
          </motion.div>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-6 relative min-h-[80vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-background.jpg"
            alt="Modern architecture background"
            fill
            className="object-cover"
            priority
            crossOrigin="anonymous"
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
        </div>

        <div className="container mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight drop-shadow-2xl"
              animate={{
                textShadow: [
                  "0 0 30px rgba(255, 255, 255, 0.8)",
                  "0 0 50px rgba(6, 182, 212, 0.6)",
                  "0 0 30px rgba(147, 51, 234, 0.6)",
                  "0 0 50px rgba(255, 255, 255, 0.8)",
                ],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            >
              Ouvrez la porte vers votre{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                futur logement
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-100 mb-10 leading-relaxed font-medium max-w-3xl mx-auto drop-shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Trouvez, publiez, échangez. <span className="text-cyan-300 font-semibold">Simplement.</span>{" "}
              <span className="text-blue-300 font-semibold">Intelligent.</span>{" "}
              <span className="text-purple-300 font-semibold">Communautaire.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex justify-center"
            >
              <motion.div
                className="bg-white/20 backdrop-blur-xl text-white px-6 py-3 rounded-full text-lg font-semibold border border-white/30 shadow-2xl"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                🚀 En cours de développement
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="text-white/70"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* Section Biens Immobiliers */}
      <section className="py-16 px-6 relative">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
              Découvrez nos{" "}
              <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                biens d'exception
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
              Une sélection de propriétés uniques qui vous feront rêver
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {properties.map((property, index) => (
              <motion.div key={property.id} variants={fadeInUp}>
                <motion.div
                  whileHover={{
                    scale: 1.03,
                    y: -5,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <Card className="h-full bg-white/95 backdrop-blur-sm border-0 shadow-xl rounded-2xl overflow-hidden group cursor-pointer">
                    <div className="relative overflow-hidden">
                      <Image
                        src={property.image || "/placeholder.svg"}
                        alt={property.title}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        crossOrigin="anonymous"
                      />
                      <div className="absolute top-3 left-3">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-semibold ${
                            property.type === "Vente" ? "bg-green-500 text-white" : "bg-blue-500 text-white"
                          }`}
                        >
                          {property.type}
                        </span>
                      </div>
                      <div className="absolute top-3 right-3 flex space-x-2">
                        <motion.button
                          className="w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Heart className="w-4 h-4 text-gray-600" />
                        </motion.button>
                        <motion.button
                          className="w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Eye className="w-4 h-4 text-gray-600" />
                        </motion.button>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center text-gray-500 text-sm mb-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        {property.location}
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                        {property.title}
                      </h3>
                      <div className="text-2xl font-black text-blue-600 mb-4">{property.price}</div>
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>{property.bedrooms} chambres</span>
                        <span>{property.bathrooms} SDB</span>
                        <span>{property.surface}</span>
                      </div>
                      <motion.div
                        className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      >
                        <ArrowRight className="w-5 h-5 text-blue-600" />
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              Voir tous les biens
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Avantages clés */}
      <section className="py-16 px-6 relative">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
              Pourquoi choisir{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                The Key
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
              Une plateforme révolutionnaire qui transforme votre recherche immobilière
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                icon: Search,
                title: "Recherche intelligente",
                description: "IA avancée pour trouver le bien parfait selon vos critères",
                gradient: "from-cyan-400 to-blue-500",
                bgColor: "bg-white/95",
                textColor: "text-gray-800",
                descColor: "text-gray-600",
              },
              {
                icon: Home,
                title: "Large choix de biens",
                description: "Milliers de propriétés à louer ou à vendre, mises à jour en temps réel",
                gradient: "from-green-400 to-emerald-500",
                bgColor: "bg-white/95",
                textColor: "text-gray-800",
                descColor: "text-gray-600",
              },
              {
                icon: MessageCircle,
                title: "Communauté interactive",
                description: "Échangez avec propriétaires et locataires dans un environnement sécurisé",
                gradient: "from-purple-400 to-pink-500",
                bgColor: "bg-white/95",
                textColor: "text-gray-800",
                descColor: "text-gray-600",
              },
              {
                icon: Rocket,
                title: "Expérience rapide",
                description: "Interface intuitive et processus simplifié pour gagner du temps",
                gradient: "from-orange-400 to-red-500",
                bgColor: "bg-white/95",
                textColor: "text-gray-800",
                descColor: "text-gray-600",
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <motion.div
                  whileHover={{
                    scale: 1.03,
                    y: -5,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <Card
                    className={`h-full ${feature.bgColor} backdrop-blur-sm border-0 shadow-xl rounded-2xl overflow-hidden group cursor-pointer`}
                  >
                    <CardContent className="p-6 text-center relative">
                      <motion.div
                        className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                        whileHover={{ rotate: 5, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      >
                        <feature.icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <h3
                        className={`text-xl font-bold ${feature.textColor} mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:${feature.gradient} transition-all duration-300`}
                      >
                        {feature.title}
                      </h3>
                      <p className={`${feature.descColor} leading-relaxed text-sm`}>{feature.description}</p>

                      <motion.div
                        className="absolute top-3 right-3 opacity-0 group-hover:opacity-100"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      >
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section Pourquoi nous choisir */}
      <section className="py-16 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10 backdrop-blur-sm"></div>
        <div className="container mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-6">
              L'excellence à votre{" "}
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                service
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              Découvrez les avantages uniques qui font de The Key la plateforme immobilière de référence
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: Shield,
                title: "Sécurité garantie",
                description:
                  "Vérification rigoureuse de tous les biens et utilisateurs pour votre tranquillité d'esprit",
                color: "from-green-400 to-emerald-500",
              },
              {
                icon: Users,
                title: "Communauté active",
                description: "Plus de 50 000 utilisateurs actifs qui partagent leurs expériences et conseils",
                color: "from-blue-400 to-cyan-500",
              },
              {
                icon: Zap,
                title: "Technologie de pointe",
                description: "Algorithmes d'IA et outils innovants pour une expérience utilisateur exceptionnelle",
                color: "from-purple-400 to-pink-500",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center group"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <motion.div
                  className={`w-20 h-20 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl`}
                  whileHover={{ scale: 1.05, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <item.icon className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-700 group-hover:to-gray-900 transition-all duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Appel à l'action */}
      <section className="py-16 px-6 relative">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              className="bg-gradient-to-r from-white/80 via-blue-50/80 to-purple-50/80 backdrop-blur-xl rounded-2xl p-12 md:p-16 text-center border border-gray-200/50 shadow-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <motion.h2
                className="text-4xl md:text-6xl font-black text-gray-800 mb-6"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(255, 255, 255, 0.3)",
                    "0 0 40px rgba(6, 182, 212, 0.4)",
                    "0 0 20px rgba(147, 51, 234, 0.3)",
                    "0 0 40px rgba(236, 72, 153, 0.4)",
                  ],
                }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              >
                The Key arrive{" "}
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                  bientôt
                </span>
              </motion.h2>
              <motion.p
                className="text-xl md:text-2xl text-gray-700 mb-8 font-medium"
                animate={{ y: [-2, 2, -2] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              >
                Nous travaillons dur pour vous offrir la{" "}
                <span className="text-cyan-600 font-semibold">meilleure expérience</span> immobilière
              </motion.p>
              <motion.div
                className="text-lg text-gray-600 font-medium"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                ✨ Restez connectés pour ne rien manquer du lancement ! ✨
              </motion.div>

              {/* Optimized floating stars */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      left: `${20 + i * 12}%`,
                      top: `${20 + i * 10}%`,
                    }}
                    animate={{
                      y: [-10, 10, -10],
                      rotate: [0, 180, 360],
                      opacity: [0.2, 0.6, 0.2],
                    }}
                    transition={{
                      duration: 3 + i * 0.3,
                      repeat: Number.POSITIVE_INFINITY,
                      delay: i * 0.2,
                    }}
                  >
                    <Star className="w-3 h-3 text-yellow-300" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/70 backdrop-blur-xl text-gray-800 py-16 px-6 border-t border-gray-200/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <motion.div
                className="flex items-center space-x-3 mb-6"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <Key className="w-6 h-6 text-white" />
                </div>
                <span className="text-3xl font-black text-gray-800">The Key</span>
              </motion.div>
              <p className="text-gray-600 text-lg leading-relaxed max-w-md font-medium">
                La plateforme immobilière nouvelle génération qui révolutionne votre façon de chercher, publier et
                échanger.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Suivez-nous
              </h3>
              <div className="flex space-x-3">
                {/* Instagram */}
                <motion.a
                  href="https://www.instagram.com/its_noro_harry_01/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </motion.a>

                {/* Facebook */}
                <motion.a
                  href="https://www.facebook.com/noro.harry.7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </motion.a>

                {/* Twitter */}
                <motion.a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-r from-sky-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </motion.a>

                {/* Pinterest */}
                <motion.a
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-r from-red-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z" />
                  </svg>
                </motion.a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Légal
              </h3>
              <div className="space-y-2">
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-gray-800 transition-colors hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-400"
                >
                  Mentions légales
                </Link>
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-gray-800 transition-colors hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-400"
                >
                  Politique de confidentialité
                </Link>
                <Link
                  href="#"
                  className="block text-gray-600 hover:text-gray-800 transition-colors hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-400"
                >
                  Conditions d'utilisation
                </Link>
              </div>
            </div>
          </div>
          <motion.div
            className="border-t border-gray-200/50 pt-6 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-500">
              © {new Date().getFullYear()} The Key. Tous droits réservés.{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Fait avec ❤️
              </span>
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}
