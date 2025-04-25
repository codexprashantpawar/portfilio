import Image from "next/image"
import Link from "next/link"
import { Download, Github, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-slate-900 to-slate-950 text-white">
      {/* Header */}
      <header className="container mx-auto pt-10 pb-6 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="relative h-24 w-24 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg">
              <Image
                src="https://img.freepik.com/free-photo/programming-background-collage_23-2149901763.jpg?t=st=1745594234~exp=1745597834~hmac=a6d045351eedb38ebfe2d6b90e4ad33955e1a97c977695235d2e04cc288bcdfd&w=740"
                alt="Prashant Pawar"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500">
                Prashant Ashok Pawar
              </h1>
              <h2 className="text-xl text-purple-300 font-medium">Jr. Software Engineer</h2>
            </div>
          </div>
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
            <Download className="mr-2 h-4 w-4" /> Download CV
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 pb-16">
        {/* Current Position */}
        <section className="mb-12 text-center">
          <div className="inline-block px-6 py-3 rounded-full bg-purple-900/50 backdrop-blur-sm border border-purple-500/30">
            <p className="text-lg">
              Currently working at <span className="font-bold text-purple-300">SunRayz Technology</span>
            </p>
          </div>
          <div className="mt-4 inline-block px-6 py-3 rounded-full bg-purple-900/50 backdrop-blur-sm border border-purple-500/30">
            <p className="text-lg">
              <span className="font-bold text-green-400">Currently Learning:</span> React JS, then shifting to Next JS
            </p>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="bg-purple-600 w-10 h-10 rounded-full flex items-center justify-center mr-3">
              <span className="text-white">💼</span>
            </span>
            Experience & Qualifications
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-slate-800/60 border-purple-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-purple-300">SunRayz Technology</CardTitle>
                <CardDescription>Jr. Software Engineer (10+ months)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Working on Desktop Applications using:</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <Badge className="bg-purple-600">C#</Badge>
                  <Badge className="bg-purple-600">Crystal Report</Badge>
                  <Badge className="bg-purple-600">SQL Server 2008</Badge>
                  <Badge className="bg-purple-600">Desktop Applications</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/60 border-purple-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-purple-300">Hefshine Software</CardTitle>
                <CardDescription>Intern - Java Full Stack Developer (1+ year)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Developed web applications using:</p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <Badge className="bg-purple-600">Java</Badge>
                  <Badge className="bg-purple-600">Spring Boot</Badge>
                  <Badge className="bg-purple-600">MySQL</Badge>
                  <Badge className="bg-purple-600">Angular</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="bg-purple-600 w-10 h-10 rounded-full flex items-center justify-center mr-3">
              <span className="text-white">🚀</span>
            </span>
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-slate-800/60 border-purple-500/20 backdrop-blur-sm overflow-hidden">
              <div className="h-48 relative">
                <Image src="https://img.freepik.com/free-photo/medical-banner-with-doctor-wearing-goggles_23-2149611193.jpg?t=st=1745593372~exp=1745596972~hmac=5c3d5735b990ab07e7863cad90dc162fb59ca5efd5b0f4b36320165036f72354&w=1380" alt="E-Medical Shop" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-purple-300">E-Medical Shop</CardTitle>
                <CardDescription>Completed Project</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">An online platform for purchasing medical supplies and medications.</p>
              </CardContent>
              <CardFooter>
                <Link href="https://github.com/codexprashantpawar" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-purple-500/50 hover:bg-purple-900/50">
                    <Github className="mr-2 h-4 w-4" /> View on GitHub
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="bg-slate-800/60 border-purple-500/20 backdrop-blur-sm overflow-hidden">
              <div className="h-48 relative">
                <Image src="https://img.freepik.com/premium-photo/two-hands-holding-mobile-phones-transferring-funds-accounts-isolated-purple-background_407348-3109.jpg?w=826" alt="E-Medical Shop" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-purple-300">Phone-Pay Clone</CardTitle>
                <CardDescription>Completed Project</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Cloned PhonePe payment UI using Next.js to enhance skills in component-based design and routing.</p>
              </CardContent>
              <CardFooter>
                <Link href="https://github.com/codexprashantpawar/PhonePay" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-purple-500/50 hover:bg-purple-900/50">
                    <Github className="mr-2 h-4 w-4" /> View on GitHub
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="bg-slate-800/60 border-purple-500/20 backdrop-blur-sm overflow-hidden">
              <div className="h-48 relative">
                <Image src="https://img.freepik.com/premium-vector/vector-exam-concept-examination-online-test-answer-checklist_508290-3024.jpg?w=826" alt="Online Exam System" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-purple-300">Online Exam System</CardTitle>
                <CardDescription>In Progress</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  A comprehensive platform for conducting and managing online examinations.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="https://github.com/codexprashantpawar" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-purple-500/50 hover:bg-purple-900/50">
                    <Github className="mr-2 h-4 w-4" /> View on GitHub
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <span className="bg-purple-600 w-10 h-10 rounded-full flex items-center justify-center mr-3">
              <span className="text-white">🛠️</span>
            </span>
            Technical Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Java",
              "Spring Boot",
              "MySQL",
              "Angular",
              "C#",
              "Crystal Report",
              "SQL Server",
              "HTML/CSS",
              "JavaScript",
              "Git",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-slate-800/60 border border-purple-500/20 rounded-lg p-4 text-center hover:bg-purple-900/30 transition-colors"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-purple-500/20 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2 text-purple-300">Contact Me</h3>
              <div className="flex flex-col gap-2">
                <a href="tel:7499598429" className="flex items-center gap-2 hover:text-purple-300 transition-colors">
                  <Phone className="h-4 w-4" /> 7499598429
                </a>
                <a
                  href="mailto:aaryan100m@gmail.com"
                  className="flex items-center gap-2 hover:text-purple-300 transition-colors"
                >
                  <Mail className="h-4 w-4" /> aaryan100m@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Link href="https://github.com/codexprashantpawar" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-[#333] bg-[#333] hover:bg-[#24292e] hover:border-[#24292e] text-white"
                >
                  <Github className="h-5 w-5" />
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/prashant-pawar-608ab7241"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full border-[#0077b5] bg-[#0077b5] hover:bg-[#0069a6] hover:border-[#0069a6] text-white"
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="mt-8 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Prashant Pawar. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
