import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Phone, Mail, Star } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-serif font-black text-primary">Koto</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#menu" className="text-foreground hover:text-primary transition-colors">
                Menu
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#location" className="text-foreground hover:text-primary transition-colors">
                Location
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5"></div>
        <img
          src="/placeholder.svg?height=1080&width=1920"
          alt="Beautiful coffee jelly drink with ice cubes and cream"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-black mb-6 leading-tight">Very Welcome to Koto</h1>
          <p className="text-xl md:text-2xl font-sans mb-8 leading-relaxed">
            Experience the Essence of Japanese Coffee Jelly
          </p>
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white font-sans font-semibold px-8 py-3 text-lg"
          >
            Explore Our Menu
          </Button>
        </div>
      </section>

      {/* Featured Products */}
      <section id="menu" className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-foreground mb-4">Our Signature Drinks</h2>
            <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto">
              Discover our carefully crafted coffee jelly creations, each one a perfect blend of traditional Japanese
              flavors and modern café culture.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Standard Coffee Jelly */}
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="p-0">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Standard Coffee Jelly"
                  className="w-full h-64 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl font-serif font-bold text-foreground">Standard Coffee Jelly</CardTitle>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    Popular
                  </Badge>
                </div>
                <CardDescription className="text-muted-foreground font-sans mb-4">
                  Our classic coffee jelly made with premium Japanese coffee beans, served with fresh cream and a touch
                  of sweetness.
                </CardDescription>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-serif font-bold text-primary">$6.50</span>
                  <div className="flex items-center text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hojicha Jelly */}
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="p-0">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Hojicha Jelly"
                  className="w-full h-64 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl font-serif font-bold text-foreground">Hoji-Cha Jelly</CardTitle>
                  <Badge variant="outline" className="border-accent text-accent">
                    Traditional
                  </Badge>
                </div>
                <CardDescription className="text-muted-foreground font-sans mb-4">
                  Delicate roasted green tea jelly with a nutty, caramel-like flavor, topped with matcha powder and
                  served chilled.
                </CardDescription>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-serif font-bold text-primary">$7.25</span>
                  <div className="flex items-center text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Coffee Jelly Float */}
            <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="p-0">
                <img
                  src="/placeholder.svg?height=300&width=400"
                  alt="Coffee Jelly Float"
                  className="w-full h-64 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl font-serif font-bold text-foreground">Coffee Jelly Float</CardTitle>
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                    Special
                  </Badge>
                </div>
                <CardDescription className="text-muted-foreground font-sans mb-4">
                  A delightful combination of coffee jelly cubes, vanilla ice cream, and cold brew coffee, perfect for
                  hot summer days.
                </CardDescription>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-serif font-bold text-primary">$8.75</span>
                  <div className="flex items-center text-yellow-500">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-black text-foreground mb-6">About Koto</h2>
              <p className="text-lg text-muted-foreground font-sans mb-6 leading-relaxed">
                Founded in the heart of Tokyo, Koto brings you the authentic taste of Japanese coffee jelly culture. Our
                name "Koto" represents the traditional Japanese stringed instrument, symbolizing harmony and precision -
                values we bring to every cup we serve.
              </p>
              <p className="text-lg text-muted-foreground font-sans mb-8 leading-relaxed">
                We source our coffee beans from premium Japanese roasters and use traditional techniques to create the
                perfect coffee jelly texture. Each drink is carefully crafted to deliver a unique experience that
                bridges traditional Japanese flavors with modern café culture.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-semibold">
                Learn More About Our Story
              </Button>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=600"
                alt="Koto cafe interior"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section id="location" className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-black text-foreground mb-4">Visit Us</h2>
            <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto">
              Experience the authentic taste of Japanese coffee jelly in our cozy café located in the heart of the city.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2">Location</h3>
                  <p className="text-muted-foreground font-sans">
                    123 Sakura Street, Shibuya
                    <br />
                    Tokyo, Japan 150-0002
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2">Hours</h3>
                  <div className="text-muted-foreground font-sans space-y-1">
                    <p>Monday - Friday: 8:00 AM - 9:00 PM</p>
                    <p>Saturday - Sunday: 9:00 AM - 10:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2">Phone</h3>
                  <p className="text-muted-foreground font-sans">+81 3-1234-5678</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-2">Email</h3>
                  <p className="text-muted-foreground font-sans">hello@kotocafe.jp</p>
                </div>
              </div>
            </div>

            <div className="bg-muted rounded-lg p-8 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground font-sans">Interactive map coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-serif font-black text-primary mb-4">Koto</h3>
              <p className="text-background/80 font-sans mb-4">
                Experience the essence of Japanese coffee jelly culture in every sip.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-serif font-bold mb-4">Quick Links</h4>
              <div className="space-y-2 font-sans">
                <a href="#menu" className="block text-background/80 hover:text-primary transition-colors">
                  Menu
                </a>
                <a href="#about" className="block text-background/80 hover:text-primary transition-colors">
                  About
                </a>
                <a href="#location" className="block text-background/80 hover:text-primary transition-colors">
                  Location
                </a>
                <a href="#contact" className="block text-background/80 hover:text-primary transition-colors">
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-serif font-bold mb-4">Follow Us</h4>
              <div className="space-y-2 font-sans">
                <a href="#" className="block text-background/80 hover:text-primary transition-colors">
                  Instagram
                </a>
                <a href="#" className="block text-background/80 hover:text-primary transition-colors">
                  Twitter
                </a>
                <a href="#" className="block text-background/80 hover:text-primary transition-colors">
                  Facebook
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 mt-8 pt-8 text-center">
            <p className="text-background/60 font-sans">© 2024 Koto Coffee Jelly Shop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
